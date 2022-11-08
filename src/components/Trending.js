import React from "react";
import TrendingMovie from "./TrendingMovie";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "../App.css";

function Trending({ data, setData }) {
  const filteredData = data.filter((movies) => movies.isTrending);

  return (
    <Container>
      <Heading>Trending</Heading>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          arrows: false,
          pagination: false,
          autoplay: false,
          autoWidth: true,
          breakpoints: {
            768: {
              gap: "15px",
            },
            1300: {
              gap: "25px",
            },
            1800: {
              gap: "35px",
            },
            2300: {
              gap: "35px",
            },
          },
        }}
      >
        {filteredData.map((movie, id) => {
          return (
            <SplideSlide key={id}>
              <TrendingMovie movie={movie} data={data} setData={setData} />
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
}

export default Trending;

const Container = styled.div`
  margin-right: -16px;

  @media screen and (min-width: 768px) {
    margin-right: -25px;
  }

  @media screen and (min-width: 1300px) {
    margin-right: -36px;
  }
`;

const Heading = styled.h1`
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;

  margin-bottom: 16px;

  color: ${(props) => props.theme.fontColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;

    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;
