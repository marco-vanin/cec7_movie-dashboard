import { options } from "../utils";

export const getPopularTvShows = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTvShowsDetails = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
      options
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getTvShowsCredits = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
      options
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
