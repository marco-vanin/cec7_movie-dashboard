import { useState } from "react";
import { Movie } from "../types/movie.type";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    console.log("Click");
  };

  return (
    <div
      className={`card card-compact w-96 bg-base-100 h-72 shadow-xl relative overflow-hidden ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="rounded-t-md w-full h-72 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">{movie.title}</h1>
        <p className="text-gray-500">{movie.release_date}</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-gray-900 backdrop-blur-md">
          <button
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
            onClick={handleButtonClick}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
