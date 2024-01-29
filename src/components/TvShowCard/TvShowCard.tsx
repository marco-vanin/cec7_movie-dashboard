import { useNavigate } from "react-router-dom";
import { TvShowType } from "../types/tvShow.type";

interface Props {
  tvShow: TvShowType;
}

const TvShowCard = ({ tvShow }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`;
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/tvShow/${id}`);
  };

  return (
    <div
      className="w-60 p-2 rounded-xl transform transition-all hover:-translate-y-2 duration-300 cursor-pointer"
      onClick={() => handleCardClick(tvShow.id)}
    >
      <img className="object-cover rounded-xl" src={imageUrl} alt="poster" />

      <div className="ml-4 -mt-3">
        <a
          role="button"
          href="#"
          className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
        >
          {tvShow.vote_average}
        </a>
      </div>

      <div className="p-2">
        <p className="font-semibold text-white text-lg overflow-ellipsis text-nowrap">
          {tvShow.name}
        </p>
        <p className="text-gray-500 mb-1">
          {new Date(tvShow.first_air_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TvShowCard;
