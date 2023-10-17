import "./showMovie.css";

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

export const Movie = (Props: IMovie) => {
  return (
    <div className="container">
      {Props.poster_path ? (
        <img className="image" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${Props.poster_path}`}/>
      ) : (
        <img className="image" src="https://raw.githubusercontent.com/tushar-2223/BlueBird-Movies/main/src/assets/images/no-image.jpg" />
      )}
      <p className="title">{Props.title}</p>
      <p className="description">
        Description: <br /> {Props.overview}
      </p>
      <p className="date">Released: {Props.release_date}</p>
    </div>
  );
};
