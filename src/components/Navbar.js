import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as NavHomeSVG } from "../assets/icon-nav-home.svg";
import { ReactComponent as NavMoviesSVG } from "../assets/icon-nav-movies.svg";
import { ReactComponent as NavSeriesSVG } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as NavBookmarksSVG } from "../assets/icon-nav-bookmark.svg";
import { ReactComponent as LogoSVG } from "../assets/logo.svg";
import avatarPNG from "../assets/image-avatar.png";

function Navbar() {
  return (
    <Container>
      <StyledLogoSVG />
      <Links>
        <StyledNavlink to={"/"} end>
          <NavHomeSVG />
        </StyledNavlink>
        <StyledNavlink to={"/movies"}>
          <NavMoviesSVG />
        </StyledNavlink>
        <StyledNavlink to={"/series"}>
          <NavSeriesSVG />
        </StyledNavlink>
        <StyledNavlink to={"/bookmarks"}>
          <NavBookmarksSVG />
        </StyledNavlink>
      </Links>
      <Img src={avatarPNG} alt="" />
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;

  background: #161d2f;

  @media screen and (min-width: 768px) {
    position: static;
    height: 72px;
    margin: 23px 0 33px;

    padding: 0 16px 0 24px;

    border-radius: 10px;
  }

  @media screen and (min-width: 1300px) {
    position: fixed;

    margin: 0 0 0 32px;

    top: 50%;
    transform: translateY(-50%);

    width: 96px;
    height: 92vh;

    flex-direction: column;
    padding: 35px 0 32px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1300px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const StyledNavlink = styled(NavLink)`
  fill: ${(props) => props.theme.navSvgColor};
  transform: scale(0.8);
  transition: all 0.3s;

  &:hover {
    fill: ${(props) => props.theme.navSvgHoverColor};
  }

  &.active {
    fill: ${(props) => props.theme.navSvgActiveColor};
  }

  @media screen and (min-width: 768px) {
    transform: scale(1);
  }
`;

const StyledLogoSVG = styled(LogoSVG)`
  transform: scale(0.8);

  @media screen and (min-width: 768px) {
    transform: scale(1);
  }
`;

const Img = styled.img`
  height: 24px;
  border: 1px solid #ffffff;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    height: 32px;
  }

  @media screen and (min-width: 1300px) {
    height: 40px;
    margin-top: 180px;
  }
`;
