import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaQuery } from "../../../../utils";
import { getDenseBarlow } from "../../../Typo";


export const StyledNavMenu = styled.nav`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(40.7742px);
  height: 100%;
  padding: 0 4.5rem;
  ${mediaQuery("lg")}{
    padding: 0 12.5rem;
  }
`;

export const StyledNavList = styled.ol`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.7rem;
  ${getDenseBarlow()}
  font-size: 1.8rem;
  line-height: 1;
  letter-spacing: 2.3625px;

  ${mediaQuery("lg")}{
    gap: 4.7rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 4rem 0.2rem;
  cursor: pointer;
  @media (hover: hover) { // to exclude tablets that don't have hover effect
    &:hover {
      border-bottom: 4px solid rgba(255, 255, 255, 0.5);
    }
  }
  &.active { // added automatically by react-router NavLink component
    border-bottom: 4px solid white;
  }
`;