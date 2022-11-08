import React from "react";
import styled from "styled-components";
import { Heading, MovieList } from "./Pages.styled";
import Movie from "../components/Movie";
import Search from "../components/Search";

function Bookmarks({
  data,
  setData,
  searchInput,
  setSearchInput,
  searchResults,
  setSearchResults,
}) {
  const filteredData = data.filter((movies) => movies.isBookmarked);

  return (
    <Container>
      <Search
        placeholder="Search for bookmarked shows"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Heading>
        {searchInput
          ? `Found ${searchResults} results for ‘${searchInput}’`
          : "Bookmarked Movies"}
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

export default Bookmarks;

const Container = styled.div``;
