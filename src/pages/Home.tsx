import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { Movie } from "../components/types/movie.type";
import { getPopularMovies } from "../utils/fetchData";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Movies:", movies);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
