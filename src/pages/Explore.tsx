import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../components/types/movie.type";
import { getPopularMovies } from "../utils/movies/fetchData";
import { TvShowType } from "../components/types/tvShow.type";
import MovieCard from "../components/MovieCard/MovieCard";
import TvShowCard from "../components/TvShowCard/TvShowCard";
import { getPopularTvShows } from "../utils/tvShows/fetchData";

const Explore = () => {
  const { page } = useParams();
  const [videos, setVideos] = useState<MovieType[] | TvShowType[]>([]);

  useEffect(() => {
    if (page === "movies") {
      const fetchData = async () => {
        try {
          const data = await getPopularMovies();
          setVideos(data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchData();
      return;
    }

    if (page === "tvshows") {
      const fetchData = async () => {
        try {
          const data = await getPopularTvShows();
          setVideos(data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchData();
      return;
    }

    throw new Error("Invalid page");
  }, [page]);

  return (
    <div className="flex gap-y-8 flex-col">
      <div className="flex justify-between items-center">
        <p className="text-2xl">Explore {page}</p>

        <div className="w-1/5">
          <select
            id="sort"
            defaultValue="sortby"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="sortby">Sort by</option>
            <option value="PA">Popularity Ascending</option>
            <option value="PD">Popularity Descending</option>
            <option value="RA">Rating Ascending</option>
            <option value="RD">Rating Descending</option>
            <option value="RDA">Release Date Ascending</option>
            <option value="RDD">Release Date Descending</option>
            <option value="title">Title A/Z</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {videos.map((video) =>
          page === "movies" ? (
            <MovieCard key={video.id} movie={video as MovieType} />
          ) : (
            <TvShowCard key={video.id} tvShow={video as TvShowType} />
          )
        )}
      </div>
    </div>
  );
};

export default Explore;
