import { Movie } from "../types/movie.type";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="w-64 h-96 overflow-hidden bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className="p-4 flex flex-col h-32">
        <h1 className="text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis">
          {movie.title}
        </h1>
        <p className="text-gray-500">{movie.release_date}</p>
        <p className="text-gray-500 text-sm">Note: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
