import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";
import { ReactComponent as EmptyBookmarkSVG } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as FullBookmarkSVG } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as MovieSVG } from "../assets/icon-category-movie.svg";
import { ReactComponent as SeriesSVG } from "../assets/icon-category-tv.svg";
import { ReactComponent as PlaySVG } from "../assets/icon-play.svg";

function TrendingMovie({ movie, data, setData }) {
  const size = useWindowSize();

  const addToBookmarks = (movie) => {
    const isThatMovie = (element) => element.title === movie.title;
    const thatMovie = data.findIndex(isThatMovie);

    const tempArray = [...data];
    tempArray[thatMovie].isBookmarked = !tempArray[thatMovie].isBookmarked;
    setData(tempArray);
  };

  const returnPath = (movie) => {
    if (size < 768) {
      return movie.thumbnail.trending.small;
    } else {
      return movie.thumbnail.trending.large;
    }
  };

  return (
    <>
      <Container>
        <ImgBox>
          <Img src={process.env.PUBLIC_URL + returnPath(movie)} alt="" />
          <Play>
            <StyledPlaySVG />
            <PlayText>Play</PlayText>
          </Play>
        </ImgBox>
        <Bookmark onClick={() => addToBookmarks(movie)}>
          {movie.isBookmarked ? <FullBookmarkSVG /> : <EmptyBookmarkSVG />}
        </Bookmark>
        <Wrap>
          <Info>
            <span>{movie.year}</span>
            <Circle />
            <Category>
              {movie.category === "Movie" ? (
                <>
                  <StyledMovieSVG />
                  Movie
                </>
              ) : (
                <>
                  <StyledSeriesSVG />
                  TV Series
                </>
              )}
            </Category>
            <Circle />
            <span>{movie.rating}</span>
          </Info>
          <Title>{movie.title}</Title>
        </Wrap>
      </Container>
    </>
  );
}

export default TrendingMovie;

const Container = styled.div`
  margin-bottom: 24px;
  width: 240px;
  height: 140px;

  position: relative;

  @media screen and (min-width: 768px) {
    width: 470px;
    height: 230px;

    margin-bottom: 39px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const Play = styled.div`
  width: 117px;
  height: 48px;
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 9px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 28.5px;
  cursor: pointer;

  display: none;
  align-items: center;
`;

const PlayText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin-left: 15px;

  color: #ffffff;
`;

const StyledPlaySVG = styled(PlaySVG)`
  transform: scale(0.8);
`;

const ImgBox = styled.div`
  &:hover ${Img} {
    opacity: 0.5;
    cursor: pointer;
  }

  &:hover ${Play} {
    display: flex;
  }
`;

const Bookmark = styled.div`
  right: 8px;
  top: 8px;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  border: none;
  background: rgb(16, 20, 30, 0.5);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 24px;
    top: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 4px;

  font-weight: 300;
  font-size: 12px;
  line-height: 15px;

  color: ${(props) => props.theme.fontColor};

  mix-blend-mode: normal;
  opacity: 0.75;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

const Circle = styled.div`
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    border: 2px solid ${(props) => props.theme.fontColor};
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

const StyledMovieSVG = styled(MovieSVG)``;
const StyledSeriesSVG = styled(SeriesSVG)``;

const Title = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  color: ${(props) => props.theme.fontColor};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Wrap = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;

  @media screen and (min-width: 768px) {
    left: 24px;
    bottom: 24px;
  }
`;
