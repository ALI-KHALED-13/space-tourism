import styled from "styled-components";
import { mediaQuery } from "../../utils";



export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  color: ${({ theme : {colors}})=> colors.spaceWhite};
  ${mediaQuery("md")}{
    padding: 0;
  }
  ${mediaQuery("lg")}{
    padding-top: 4rem;
    padding-left: 5.5rem;
  }
`;

export const StyledLogo = styled.img`
  height: 4rem;
  ${mediaQuery("md")}{
    height: 4.8rem;
    margin-left: 4rem;
  }
`;

