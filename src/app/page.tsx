"use client";
import Table from "./components/Table";
import useMovieList from "./helpers/topMovies";

export default function Home() {
  const { data, error, isLoading } = useMovieList();
  return (
    <>
      <ul>
        <li>List View</li>
        <Table movies={data} />
        <li>Card View </li>
      </ul>
    </>
  );
}
