import styled from "styled-components";
import {X} from "phosphor-react";
import { NavLink } from "react-router-dom";

export const StyledNavMenu = styled.nav`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  position: fixed;
  right: ${({open})=> open? 0: "-65%"};
  top: 0;
  width: 65%;
  height: 100%;
  transition: right 0.3s ease-in-out;
`;


export const StyledXSign = styled(X)`
  margin: 3rem;
  display: block;
  margin-left: auto;
  cursor: pointer;
  color: ${({theme: {colors}})=> colors.spaceBlue};

`;


export const StyledNavList = styled.ul`
  list-style-type: none;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 19px;
  letter-spacing: 2.7px;
  & .active { // added automatically by react-router NavLink component
    border-right: 4px solid white;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 1.2rem 4rem;
  margin: 2rem 0;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  & .counter {
    font-weight: 700;
    margin-right: 1rem;
  }
`;