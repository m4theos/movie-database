import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export const NavBar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="Home">
      <Link to={"/"} className="b1">
        Home
      </Link>
      {!user && (
        <Link to={"/login"} className="b2">
          Login
        </Link>
      )}
      {user && (
        <div className="signedIn">
          <p className="name">{user.displayName}</p>
          <img className='img' src={user?.photoURL ?? ''}/>
          <button className='button2' onClick={signUserOut}>Log out</button>
        </div>
      )}
    </div>
  );
};
