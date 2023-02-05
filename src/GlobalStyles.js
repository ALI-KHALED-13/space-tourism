import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
  }
  *::-webkit-scrollbar {
    width: 0.5rem;
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 1rem;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    --spaceBlack: #0B0D17;
    --spaceGrey: #616476;
    --spaceBlue: #D0D6F9;
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