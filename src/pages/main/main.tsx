import React, { useState, useEffect } from "react";
import "./main.css";
import axios from "axios";
import { IMovie, Movie } from "../../components/showMovie";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

interface Pages {
  total_pages: number;
}

interface Results {
  total_results: number;
}

export const Home = () => {
  const [user] = useAuthState(auth);
  const apiKey = "ba6565070a617c0f4cf0a4fcefc7ba49";
  const baseUrl = "https://api.themoviedb.org/3";
  const [numResults, setNumResults] = useState<Results>();
  const [pages, setPages] = useState<Pages>();
  const [name, setName] = useState("jurassic");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${name}&page=1&include_adult=false`
      );
      setResults(response.data.results);
      setNumResults(response.data.total_results);
      setPages(response.data.total_pages);
      console.log(results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (event: any) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    getMovies();
  };

  return (
    <div>
      {user && (
        <>
          <h1 className="title">React Movie Search</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="query">
              Movie name
            </label>
            <input
              className="input"
              type="text"
              name="query"
              value={name}
              onChange={handleInputChange}
            />
            <button className="button" type="submit">
              Search
            </button>
          </form>
          {results.map((result: IMovie) => (
            <Movie
              key={result.id}
              id={result.id}
              title={result.title}
              overview={result.overview}
              release_date={result.release_date}
              poster_path={result.poster_path}
            />
          ))}
        </>
      )}
    </div>
  );
};
