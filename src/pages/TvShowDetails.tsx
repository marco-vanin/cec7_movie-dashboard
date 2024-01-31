import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTvShowsCredits,
  getTvShowsDetails,
} from "../utils/tvShows/fetchData";
import {
  TvShowCreditsType,
  TvShowDetailsType,
} from "../components/types/tvShow.type";

const TvShowDetails = () => {
  const { id } = useParams();
  const [tvShowDetails, setTvShowDetails] = useState<TvShowDetailsType | null>(
    null
  );
  const [tvShowCredits, setTvShowCredits] = useState<TvShowCreditsType | null>(
    null
  );

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await getTvShowsDetails(id);
        const credits = await getTvShowsCredits(id);

        setTvShowDetails(data);
        setTvShowCredits(credits);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log("tvShowDetails:", tvShowDetails);
  console.log("tvShowCredits:", tvShowCredits);

  const creatorName: string[] = tvShowCredits?.crew
    .filter((crew) => crew.known_for_department === "Creator")
    .map((crew) => `${crew.name}, `) ?? ["N/A"];

  return (
    <div className="p-6">
      {tvShowDetails && (
        <div className="flex">
          <img
            className="flex-1 rounded-xl"
            src={`https://image.tmdb.org/t/p/w500/${tvShowDetails.poster_path}`}
            alt={tvShowDetails.name}
          />
          <div className="flex-2 ml-6 flex gap-2 flex-col">
            <p className="text-5xl">{tvShowDetails.name} </p>
            <p className="text-xl text-gray-500 italic font-semibold">
              {tvShowDetails.tagline}
            </p>

            <div className="flex flex-wrap mt-4">
              {tvShowDetails.genres.map((genre) => (
                <div
                  key={genre.id}
                  className="bg-pink-400 px-2 py-1 rounded-xl text-sm mr-2 mb-2"
                >
                  {genre.name}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-xl">Overview</p>
              <p>{tvShowDetails.overview}</p>
            </div>

            <div className="mt-4">
              <p>
                <b>Status:</b> {tvShowDetails.status}
              </p>
            </div>
            <hr className="my-4" />
            <div>
              <p>
                <b>Creator:</b> {creatorName}
              </p>
            </div>
          </div>
        </div>
      )}
      {!tvShowDetails && <p className="text-xl">Loading...</p>}
    </div>
  );
};

export default TvShowDetails;
