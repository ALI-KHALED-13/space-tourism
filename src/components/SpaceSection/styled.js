import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const StyledSection = styled.section`
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