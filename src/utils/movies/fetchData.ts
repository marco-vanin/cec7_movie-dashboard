import { options } from "../utils";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMovieCredits = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
