import { Link } from "react-router-dom";
// import Search from "./Search/Search";

const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold">
        home
      </Link>
      {/* <Search /> */}

      <div className="flex items-center space-x-4">
        <Link to="/explore/movies" className="text-lg">
          Movies
        </Link>
        <Link to="/explore/tvshows" className="text-lg">
          TV Shows
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
