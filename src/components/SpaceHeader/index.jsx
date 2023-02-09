import { StyledHeader, StyledLogo } from "./styled";
import logo from "../../assets/shared/logo.svg"

import { getBreakPoint, useScreenWidth } from "../../utils";
import { MobileNav } from "./comps/MboileNav";
import { PrimaryNav } from "./comps/PrimaryNav";

const SpaceHeader =({appPages})=> {
  const screenWidth = useScreenWidth();

  const pagesLinks = appPages.map(page=> page.href);
  const navLinks = [{path:"/", display:"home"}].concat(pagesLinks);

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