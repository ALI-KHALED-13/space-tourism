import { StyledHeader, StyledLogo } from "./styled";

import { getBreakPoint, useScreenWidth } from "../../utils";
import { MobileNav } from "./comps/MobileNav";
import { PrimaryNav } from "./comps/PrimaryNav";
import { Link } from "react-router-dom";

const SpaceHeader =({appPages, logo})=> {
  const screenWidth = useScreenWidth();

  const navLinks = appPages.map(page=> page.href);

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="logo" />
      </Link>
      
      {screenWidth < getBreakPoint("md")?
       <MobileNav navLinks={navLinks}/>
       :
       <PrimaryNav navLinks={navLinks} screenWidth={screenWidth}/>
      }
    </StyledHeader>
  );
}

export default SpaceHeader;