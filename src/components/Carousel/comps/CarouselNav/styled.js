import styled from "styled-components";
import { getDenseBarlow } from "../../../Typo";



export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const StyledNavPoint = styled.li`
  ${getDenseBarlow()};
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 17px;
  /* identical to box height */
  letter-spacing: 2.3625px;

  color: ${({inView, theme: {colors}})=> inView? "white": colors.spaceBlue};
`;