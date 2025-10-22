export type MovieItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  language: string;
  year: number;
  popularity: number;
};

export type MovieList = [MovieItem];

export type apiResponse = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
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

export type MovieDetails = {
  id: number;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  origin_country: [object];
  original_language: "en";
  overview: string;
  poster_path: string;
  production_companies: [
    {
      id: number;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  status: string;
  title: string;
};
