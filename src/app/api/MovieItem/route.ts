import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { MovieDetails } from "@/app/types/types";

const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY as string;
const API_URL = process.env.NEXT_PUBLIC_MOVIE_DETAILS_URL as string;

const fetchMovie = async (movieId: number) => {
  const { data } = await axios.get(`${API_URL}${movieId}?api_key=${API_KEY}`);
  console.log(data);
  const movie: MovieDetails = {
    id: data.id,
    budget: data.budget,
    genres: data.genres.map((gen: { id: number; name: string }) => ({
      id: gen.id,
      name: gen.name,
    })),
    origin_country: data.origin_country,
    original_language: data.original_language,
    overview: data.overview,
    poster_path: `https://image.tmdb.org/t/p/original${data.poster_path}`,
    production_companies: data.production_companies.map(
      (com: { id: number; name: string }) => ({
        id: com.id,
        name: com.name,
      })
    ),
    release_date: data.release_date,
    revenue: data.revenue,
    status: data.status,
    title: data.title,
  };

  return movie;
};

export async function GET(req: NextRequest) {
  const movieId = Number(req.nextUrl.searchParams.get("movieId"));
  try {
    const movie: MovieDetails = await fetchMovie(movieId);
    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to fetch the requested movie , Error Message : ${error}`,
      },
      { status: 500 }
    );
  }
}
