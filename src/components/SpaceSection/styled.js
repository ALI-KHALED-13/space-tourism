import styled, { keyframes } from "styled-components";
import { mediaQuery } from "../../utils";

const fadeIn = keyframes`
  from {
    opacity: 0.5;
    top: -50px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`;



export const StyledSection = styled.section`
  position: relative;
  animation: ${fadeIn} 0.6s ease-in-out;
  & > h2 {
    text-align: center;
  }
  ${mediaQuery("md")}{
    padding-top: 4rem;
    & > h2 {
      text-align: left;
      padding-left: 3.5rem;
    }
  }
  ${mediaQuery("lg")}{
    margin-left: 15%;
    padding-top: 7rem;
    & > h2 {
      padding-left: 0;
    }
  }

`;

export const StyledOrder = styled.span`
  color: ${({theme: {colors}})=>colors.spaceGrey};
  font-weight: 700;
  margin-right: 2rem;

  ${mediaQuery("lg")}{
    margin-right: 3rem;
  }
`;