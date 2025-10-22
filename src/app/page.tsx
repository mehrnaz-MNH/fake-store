"use client";

import { Box, Container, Heading, Spinner, Text } from "@chakra-ui/react";
import Table from "./components/Table";
import useMovieList from "./helpers/topMovies";

export default function Home() {
  const { data, error, isLoading } = useMovieList();

  return (
    <Container maxW="container.xl" py={8}>
      <Box textAlign="center" mb={8}>
        <Heading size="2xl" mb={2}>
          Top Movies
        </Heading>
        <Text color="gray.600" fontSize="lg">
          Discover the highest-rated films
        </Text>
      </Box>

      {isLoading && (
        <Box textAlign="center" py={20}>
          <Spinner size="xl" color="blue.500" />
          <Text mt={4} color="gray.600">
            Loading movies...
          </Text>
        </Box>
      )}

      {error && (
        <Box
          textAlign="center"
          py={10}
          bg="red.50"
          borderRadius="md"
          border="1px solid"
          borderColor="red.200"
        >
          <Text color="red.600" fontSize="lg" fontWeight="medium">
            Failed to load movies
          </Text>
          <Text color="red.500" mt={2}>
            Please try again later
          </Text>
        </Box>
      )}

      {!isLoading && !error && data && (
        <Box justifyItems={"center"}>
          <Table movies={data} />
        </Box>
      )}
    </Container>
  );
}
