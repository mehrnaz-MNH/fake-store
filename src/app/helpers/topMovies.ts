import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchMovies() {
  const { data } = await axios.get("api/topRated");

  return data;
}

function useMovieList() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
  });
}

export default useMovieList;
