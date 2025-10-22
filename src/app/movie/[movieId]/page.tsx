"use client";

import useMovie from "@/app/helpers/movie";
import { Box, Heading, Text, Image, Flex, Spinner } from "@chakra-ui/react";
import { use } from "react";

export default function MoviePage({
  params,
}: {
  params: Promise<{ movieId: number }>;
}) {
  const { movieId } = use(params);
  const { data: movie, error, isLoading } = useMovie(movieId);

  if (isLoading) {
    return (
      <Box maxW="1200px" mx="auto" p={8} textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box maxW="1200px" mx="auto" p={8}>
        <Text color="red.500">Failed to load movie</Text>
      </Box>
    );
  }

  if (!movie) return null;

  return (
    <Box maxW="1200px" mx="auto" p={8}>
      <Flex gap={8}>
        <Image
          src={movie.poster_path}
          alt={movie.title}
          borderRadius="lg"
          maxW="300px"
        />
        <Box>
          <Heading size="2xl" mb={4}>
            {movie.title}
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
            {movie.overview}
          </Text>
          <Text>
            <strong>Release Date:</strong> {movie.release_date}
          </Text>
          <Text>
            <strong>Budget:</strong> ${movie.budget?.toLocaleString()}
          </Text>
          <Text>
            <strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}
          </Text>
          <Text>
            <strong>Status:</strong> {movie.status}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
