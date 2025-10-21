import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { apiResponse, MovieList } from "@/app/types/types";

const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY as string;
const API_URL = process.env.NEXT_PUBLIC_TOP_RATED_URL as string;

const fetchMovies = async () => {
  const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);
  const movies: MovieList = response.data.results.map((movie: apiResponse) => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    image: movie.poster_path,
    language: movie.original_language,
    year: Number(movie.release_date.split("-")[0]),
    popularity: Number(movie.vote_average.toFixed(2)),
  }));

  return movies;
};

export async function GET(request: NextRequest) {
  try {
    const movies: MovieList = await fetchMovies();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch top rated movie list , Error Message : ${error}`,
      },
      { status: 500 }
    );
  }
}
