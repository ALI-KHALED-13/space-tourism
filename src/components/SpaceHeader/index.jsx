import { StyledHeader, StyledLogo } from "./styled";
import logo from "../../assets/shared/logo.svg"

import { getBreakPoint, useScreenWidth } from "../../utils";
import { MobileNav } from "./comps/MboileNav";
import { PrimaryNav } from "./comps/PrimaryNav";

const SpaceHeader =()=> {
  const screenWidth = useScreenWidth();
  const navLinks = [
    {to:"/", display:"home"},
    {to:"/destination", display:"destination"},
    {to:"/crew", display:"crew"},
    {to:"/technology", display:"technology"},
  ];
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      {screenWidth < getBreakPoint("md")?
       <MobileNav navLinks={navLinks}/>
       :
       <PrimaryNav navLinks={navLinks} />
      }
    </StyledHeader>
  );
}

export default SpaceHeader;