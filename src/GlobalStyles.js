import { createGlobalStyle } from "styled-components";
import backgrounds from "./assets/backgrounds";
import { mediaQuery } from "./utils";

export const colors = {
  spaceBlack: "#0B0D17",
  spaceGrey: "#616476",
  spaceBlue: "#D0D6F9",
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
    color: white;
  }
  *::-webkit-scrollbar {
    width: 0.7rem;
    height: 0.7rem;
    background-color: ${colors.spaceGrey};
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${colors.spaceBlue};
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    background-image: url(${( { page })=> backgrounds[page].mobile});
    background-color: ${colors.spaceBlack};
    background-repeat: no-repeat;
    background-size: cover;

    ${mediaQuery("md")}{
      background-image: url(${( { page })=> backgrounds[page].tablet});
    }
    ${mediaQuery("lg")}{
      background-image: url(${( { page })=> backgrounds[page].desktop});
    }
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Bellefair', serif;
  }
`;



