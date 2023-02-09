import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const StyledSection = styled.section`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  gap: 2.5rem;
  padding: 3rem;
  ${mediaQuery("md")}{
    padding: 3rem 16rem;
  }
  ${mediaQuery("lg")}{
    flex-direction: row;
    align-items: flex-end;
    padding: 5rem 16rem;
    gap: 35rem;
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