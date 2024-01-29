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
    <div className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img className="object-cover rounded-xl" src={imageUrl} alt="" />

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

    // <div className="group relative bg-white overflow-hidden rounded-lg shadow-md transition-all duration-300">
    //   <div
    //     className="w-64 h-96 bg-cover bg-center flex items-end justify-center p-2 relative"
    //     style={{ backgroundImage: `url('${imageUrl}')` }}
    //   >
    //     <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-between items-center p-4">
    //       <div>
    //         <h1 className="font-semibold text-white text-2xl mb-2">
    //           {movie.title}
    //         </h1>
    //         <p className="text-white mb-1">
    //           {new Date(movie.release_date).toLocaleDateString()}
    //         </p>
    //         <div className="flex items-center text-white">
    //           <span className="mr-2">Note:</span>
    //           <span className="text-lg font-semibold">
    //             {movie.vote_average}
    //           </span>
    //         </div>
    //       </div>
    //       <button
    //         className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all duration-300"
    //         onClick={() => handleCardClick(movie.id)}
    //       >
    //         See More
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MovieCard;
