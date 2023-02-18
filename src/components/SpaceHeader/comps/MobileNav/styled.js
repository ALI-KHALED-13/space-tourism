import styled from "styled-components";
import {X} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { getDenseBarlow } from "../../../Typo";

export const StyledNavMenu = styled.nav`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(40.7742px);
  position: fixed;
  right: ${({open})=> open? 0: "-67.7%"};
  top: 0;
  z-index: 5;
  height: 100%;
  width: 67.7%;
  transition: right 0.3s ease-in-out;
`;


export const StyledXSign = styled(X)`
  margin: 3rem;
  display: block;
  margin-left: auto;
  cursor: pointer;
  color: ${({theme: {colors}})=> colors.spaceBlue};

`;

export const StyledNavList = styled.ol`
  list-style-type: none;
  ${getDenseBarlow()}
  font-size: 1.8rem;
  line-height: 19px;
  letter-spacing: 2.7px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 1rem 4rem;
  margin: 2rem 0;
  border-radius: 2px;
  cursor: pointer;
  
  &.active { // added automatically by react-router NavLink component
    border-right: 4px solid white;
  }

  & .counter {
    font-weight: 700;
    margin-right: 1rem;
  }
`;