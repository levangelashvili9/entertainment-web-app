import React from "react";
import styled from "styled-components";
import { Heading, MovieList } from "./Pages.styled";
import Movie from "../components/Movie";
import Search from "../components/Search";

function Series({
  data,
  setData,
  searchInput,
  setSearchInput,
  searchResults,
  setSearchResults,
}) {
  const filteredData = data.filter((movies) => movies.category === "TV Series");

  return (
    <Container>
      <Search
        placeholder="Search for TV series"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Heading>
        {searchInput
          ? `Found ${searchResults} results for ‘${searchInput}’`
          : "TV Series"}
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

export default Series;

const Container = styled.div``;
