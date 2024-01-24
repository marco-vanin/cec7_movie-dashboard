import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../utils/fetchData";
import { MovieDetails as MovieDetailsType } from "../components/types/movie.type";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log("Movie Details:", movieDetails);

  return <div>{movieDetails?.homepage}</div>;
};

export default MovieDetails;
