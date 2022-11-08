import React from "react";
import styled from "styled-components";
import { Heading, MovieList } from "./Pages.styled";
import Search from "../components/Search";
import Movie from "../components/Movie";
import Trending from "../components/Trending";

function Home({
  data,
  setData,
  searchInput,
  setSearchInput,
  searchResults,
  setSearchResults,
}) {
  return (
    <Container>
      <Search
        placeholder="Search for movies or TV series"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {!searchInput ? <Trending data={data} setData={setData} /> : null}
      <Heading>
        {searchInput
          ? `Found ${searchResults} results for ‘${searchInput}’`
          : "Recommended for you"}
      </Heading>
      <MovieList>
        <Movie
          movies={data}
          data={data}
          setData={setData}
          searchInput={searchInput}
          setSearchResults={setSearchResults}
        />
      </MovieList>
    </Container>
  );
}

export default Home;

const Container = styled.div``;
