import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const StyledSection = styled.section`
  & > h2 {
    text-align: center;
  }
  ${mediaQuery("md")}{
    text-align: left;
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