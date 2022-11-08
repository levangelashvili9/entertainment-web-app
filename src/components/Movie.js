import React, { useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";
import { ReactComponent as EmptyBookmarkSVG } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as FullBookmarkSVG } from "../assets/icon-bookmark-full.svg";
import { ReactComponent as MovieSVG } from "../assets/icon-category-movie.svg";
import { ReactComponent as SeriesSVG } from "../assets/icon-category-tv.svg";
import { ReactComponent as PlaySVG } from "../assets/icon-play.svg";

function Movie({ movies, data, setData, searchInput, setSearchResults }) {
  const size = useWindowSize();

  const addToBookmarks = (movie) => {
    const isThatMovie = (element) => element.title === movie.title;
    const thatMovie = data.findIndex(isThatMovie);

    const tempArray = [...data];
    tempArray[thatMovie].isBookmarked = !tempArray[thatMovie].isBookmarked;
    setData(tempArray);
  };

  const filteredMovies = movies.filter((el) =>
    el.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    setSearchResults(filteredMovies.length);
  }, [filteredMovies, setSearchResults]);

  const returnPath = (movie) => {
    if (size < 768) {
      return movie.thumbnail.regular.small;
    } else if (size >= 768 && size < 1300) {
      return movie.thumbnail.regular.medium;
    } else {
      return movie.thumbnail.regular.large;
    }
  };

  return (
    <>
      {filteredMovies.map((movie, id) => {
        return (
          <Container key={id}>
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
          </Container>
        );
      })}
    </>
  );
}

export default Movie;

const Container = styled.div`
  position: relative;

  width: 164px;
  height: 110px;

  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 140px;

    margin-bottom: 76px;
  }

  @media screen and (min-width: 1300px) {
    width: 280px;
    height: 174px;

    margin-bottom: 84px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin-bottom: 4px;
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
    right: 16px;
    top: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  margin-bottom: 4px;

  font-weight: 300;
  font-size: 11px;
  line-height: 14px;

  color: ${(props) => props.theme.fontColor};

  mix-blend-mode: normal;
  opacity: 0.75;

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 16px;

    gap: 8px;

    margin-bottom: 5px;
  }
`;

const Circle = styled.div`
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    border: 1.5px solid ${(props) => props.theme.fontColor};
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 6px;
  }
`;

const StyledMovieSVG = styled(MovieSVG)`
  transform: scale(0.85);

  @media screen and (min-width: 768px) {
    transform: scale(1);
  }
`;

const StyledSeriesSVG = styled(SeriesSVG)`
  transform: scale(0.85);

  @media screen and (min-width: 768px) {
    transform: scale(1);
  }
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: ${(props) => props.theme.fontColor};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
