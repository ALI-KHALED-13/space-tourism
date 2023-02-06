import styled from "styled-components";
import { mediaQuery } from "../../utils";



export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  color: ${({ theme : {colors}})=> colors.spaceWhite};
`;

export const StyledLogo = styled.img`
  width: 4rem;
  height: 4rem;
  ${mediaQuery("md")}{
    width: 4.8rem;
    height: 4.8rem;
  }
`;

