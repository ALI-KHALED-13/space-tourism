import { StyledHeader, StyledLogo } from "./styled";
import logo from "../../assets/shared/logo.svg"

import { useScreenWidth } from "../../utils";
import { MobileNav } from "./comps/MboileNav";

const SpaceHeader =()=> {
  const screenWidth = useScreenWidth();
  const navLinks = [
    {to:"/", display:"Home"},
    {to:"/destination", display:"Destination"},
    {to:"/crew", display:"Crew"},
    {to:"/technology", display:"Technology"},
  ];
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <MobileNav navLinks={navLinks}/>
    </StyledHeader>
  );
}

export default SpaceHeader;