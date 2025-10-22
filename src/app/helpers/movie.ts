import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchMovie(movieId: number) {
  const { data } = await axios.get(`/api/MovieItem?movieId=${movieId}`);

  return data;
}

function useMovie(movieId: number) {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovie(movieId),
    enabled: !!movieId,
  });
}

export default useMovie;
