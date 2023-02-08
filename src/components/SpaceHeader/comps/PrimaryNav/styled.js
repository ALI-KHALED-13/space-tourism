import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledNavMenu = styled.nav`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(40.7742px);
  height: 100%;
  padding: 0 4.5rem;
`;

export const StyledNavList = styled.ol`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.7rem;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 17px;
/* identical to box height */
  letter-spacing: 2.3625px;

  & .active { // added automatically by react-router NavLink component
    border-bottom: 4px solid white;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 4rem 0.2rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    border-bottom: 4px solid rgba(255, 255, 255, 0.5);
  }
`;