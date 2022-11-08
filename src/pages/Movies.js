import React from "react";
import styled from "styled-components";
import { Heading, MovieList } from "./Pages.styled";
import Movie from "../components/Movie";
import Search from "../components/Search";

function Movies({
  data,
  setData,
  searchInput,
  setSearchInput,
  searchResults,
  setSearchResults,
}) {
  const filteredData = data.filter((movies) => movies.category === "Movie");

  return (
    <Container>
      <Search
        placeholder="Search for movies"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Heading>
        {searchInput
          ? `Found ${searchResults} results for ‘${searchInput}’`
          : "Movies"}
      </Heading>
      <MovieList>
        <Movie
          movies={filteredData}
          data={data}
          setData={setData}
          searchInput={searchInput}
          setSearchResults={setSearchResults}
        />
      </MovieList>
    </Container>
  );
}
export default Movies;

const Container = styled.div``;
