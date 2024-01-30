import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits, getMovieDetails } from "../utils/movies/fetchData";
import {
  MovieCreditsType,
  MovieDetailsType,
} from "../components/types/movie.type";
import formatRuntime from "../utils/formats/formatRuntime";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );
  const [movieCredits, setMovieCredits] = useState<MovieCreditsType | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieDetails(id!);
        const credits = await getMovieCredits(id!);
        setMovieDetails(data);
        setMovieCredits(credits);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  console.log("Movie Details:", movieDetails);

  const directorName: string =
    movieCredits?.crew.find((crew) => crew.job === "Director")?.name ?? "N/A";

  const writtersName: string[] = movieCredits?.crew
    .filter((crew) => crew.department === "Writing")
    .map((crew) => `${crew.name}, `) ?? ["N/A"];

  return (
    <div className="p-6">
      {movieDetails && (
        <div className="flex">
          <img
            className="flex-1 rounded-xl"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className="flex-2 ml-6 flex gap-2 flex-col">
            <p className="text-5xl">{movieDetails.title} </p>
            <p className="text-xl text-gray-500 italic font-semibold">
              {movieDetails.tagline}
            </p>

            <div className="flex flex-wrap mt-4">
              {movieDetails.genres.map((genre) => (
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
              <p>{movieDetails.overview}</p>
            </div>

            <div className="mt-4">
              <p>
                <b>Status:</b> {movieDetails.status}
              </p>
              <p>
                <b>Release Date:</b>{" "}
                {new Date(movieDetails.release_date).toLocaleDateString()}
              </p>
              <p>
                <b>Runtime:</b> {formatRuntime(movieDetails.runtime)}
              </p>
            </div>
            <hr className="my-4" />
            <div>
              <p>
                <b>Director:</b> {directorName}
              </p>
            </div>
            <hr className="my-4" />
            <div>
              <p>
                <b>Writer:</b> {writtersName}
              </p>
            </div>
          </div>
        </div>
      )}
      {!movieDetails && <p className="text-xl">Loading...</p>}
    </div>
  );
};

export default MovieDetails;
