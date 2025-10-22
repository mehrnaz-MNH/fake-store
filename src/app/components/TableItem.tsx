"use client";

// TableItem.tsx
import React from "react";
import { MovieItem } from "../types/types";
import { Flex, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface Props {
  movie: MovieItem;
}

const TableItem: React.FC<Props> = ({ movie }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movie/${movie.id}`);
  };
  return (
    <Flex
      justify="space-between"
      py={3}
      px={2}
      borderRadius="md"
      borderBottom="2px solid"
      borderColor="gray.200"
    >
      <Box w="25%" px={2}>
        <Text fontWeight="medium" onClick={handleClick}>
          {movie.title}
        </Text>
      </Box>
      <Box w="30%" px={2}>
        <Text color="gray.600">{movie.description}</Text>
      </Box>
      <Box w="15%" px={2} textAlign="center">
        <Text>{movie.year}</Text>
      </Box>
      <Box w="15%" px={2} textAlign="center">
        <Text textTransform="uppercase">{movie.language}</Text>
      </Box>
      <Box w="15%" px={2} textAlign="center">
        <Text
          fontWeight="semibold"
          color={movie.popularity >= 7 ? "green.300" : "red.300"}
        >
          {movie.popularity}
        </Text>
      </Box>
    </Flex>
  );
};

export default TableItem;
