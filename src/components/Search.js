import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchSVG } from "../assets/icon-search.svg";

function Search({ placeholder, searchInput, setSearchInput }) {
  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Container>
      <Input
        placeholder={placeholder}
        maxLength={35}
        value={searchInput}
        onChange={changeHandler}
      ></Input>
      <StyledSearchSVG />
    </Container>
  );
}

export default Search;

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  margin-bottom: 24px;

  @media screen and (min-width: 1300px) {
    margin-bottom: 32px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 20px;

  background: ${(props) => props.theme.bodyColor};
  border: none;

  padding-left: 40px;

  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    height: 34px;

    padding-left: 56px;

    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (min-width: 1300px) {
    height: 32px;
  }
`;

const StyledSearchSVG = styled(SearchSVG)`
  position: absolute;
  left 0;

  transform: scale(0.8);

  @media screen and (min-width: 768px) {
    transform: scale(1);
  }
`;
