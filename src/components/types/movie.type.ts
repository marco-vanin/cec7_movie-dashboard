export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | unknown;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: null | string;
  popularity: number;
  poster_path: null | string;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: null | number;
  spoken_languages: SpokenLanguageType[];
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline: null | string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Genre = {
  id: number;
  name: string;
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

type SpokenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieCreditsType = {
  id: number;
  cast: CastType[];
  crew: CrewType[];
};

type CastType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

interface CrewType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}
