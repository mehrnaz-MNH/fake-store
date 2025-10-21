// Table.tsx
import { Box, Flex, Text } from "@chakra-ui/react";
import { MovieList } from "../types/types";
import TableItem from "./TableItem";

interface Props {
  movies: MovieList;
}

const Table: React.FC<Props> = ({ movies }) => {
  return (
    <Box
      p={6}
      borderRadius="md"
      w={["100%", "100%", "90%", "80%", "70%"]}
      boxShadow="xl"
      fontSize={["11px", "13px", "15px", "18px", "20px"]}
    >
      <Box p={4} borderRadius="md" mb={5}>
        {/* Header */}
        <Flex
          justify="space-between"
          fontWeight="bold"
          mb={3}
          pb={3}
          borderBottom="2px solid"
          borderColor="gray.200"
        >
          <Box w="25%" px={2}>
            <Text>Title</Text>
          </Box>
          <Box w="30%" px={2}>
            <Text>Overview</Text>
          </Box>
          <Box w="15%" px={2} textAlign="center">
            <Text>Release Year</Text>
          </Box>
          <Box w="15%" px={2} textAlign="center">
            <Text>Language</Text>
          </Box>
          <Box w="15%" px={2} textAlign="center">
            <Text>Score</Text>
          </Box>
        </Flex>

        {/* Items */}
        <Flex rowGap="8px" flexDirection="column">
          {movies?.map((movie) => (
            <TableItem key={movie.id} movie={movie} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Table;
