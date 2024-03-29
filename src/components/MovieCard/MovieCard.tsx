import { useNavigate } from "react-router-dom";
import { MovieType } from "../types/movie.type";

interface Props {
  movie: MovieType;
}

const MovieCard = ({ movie }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 cursor-pointer"
      onClick={() => handleCardClick(movie.id)}
    >
      <img className="object-cover rounded-xl" src={imageUrl} alt="poster" />

      <div className="ml-4 -mt-3">
        <a
          role="button"
          href="#"
          className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
        >
          {movie.vote_average}
        </a>
      </div>

      <div className="p-2">
        <p className="font-semibold text-white text-lg overflow-ellipsis text-nowrap">
          {movie.title}
        </p>
        <p className="text-gray-500 mb-1">
          {new Date(movie.release_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
