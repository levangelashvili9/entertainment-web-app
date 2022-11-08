import { createGlobalStyle } from "styled-components";

export const themes = {
  bodyColor: "#10141e",
  fontColor: "#FFFFFF",
  navSvgColor: "#5A698F",
  navSvgActiveColor: "#FFF",
  navSvgHoverColor: "#FC4747",
};

export const GlobalStyles = createGlobalStyle`
  
body {
    background-color: ${(props) => props.theme.bodyColor};
    position: relative;
    padding: 80px 16px 0;

    @media screen and (min-width: 768px) {
      padding: 0 25px
    }

    @media screen and (min-width: 1300px) {
      padding: 64px 36px 0 164px;
    }
  }

`;
