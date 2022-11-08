import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.3125px;

  margin-bottom: 24px;

  color: ${(props) => props.theme.fontColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }

  @media screen and (min-width: 1300px) {
    margin-bottom: 32px;
  }
`;

export const MovieList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;

  // justify-items: center;

  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-column-gap: 30px;
  }

  @media screen and (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
