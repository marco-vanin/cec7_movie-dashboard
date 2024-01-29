export type TvShowType = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type TvShowDetailsType = {
  backdrop_path: string;
  created_by: CreatedByType[];
  episode_run_time: number[];
  first_air_date: string;
  genres: GenreType[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAirType;
  name: string;
  next_episode_to_air: null | unknown;
  networks: NetworkType[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  seasons: SeasonType[];
  spoken_languages: SpokenLanguageType[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

type CreatedByType = {
  id: number;
  credit_id: string;
};

type GenreType = {
  id: number;
  name: string;
};

type LastEpisodeToAirType = null | unknown;

type NetworkType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCompanyType = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

type ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

type SeasonType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: null | string;
  season_number: number;
};

type SpokenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
