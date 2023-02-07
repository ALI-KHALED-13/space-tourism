
import { List } from "phosphor-react";
import { StyledNavList, StyledNavMenu, StyledXSign, StyledNavLink} from "./styled";

import { useState } from "react";


export const MobileNav =({navLinks})=> {
  const [openNav, setOpenNav] = useState(false);
  
  const closeNavigationMenu =()=> setOpenNav(false);
  
  return (
    <>
      <List
        color="white"
        size={32}
        onClick={()=> setOpenNav(true)}
        style={{cursor: "pointer"}}
      />
      <StyledNavMenu open={openNav}>
        <StyledXSign size={32} onClick={closeNavigationMenu}/>
        
        <StyledNavList>
          {navLinks.map((link, idx)=> (
            <li key={link.to} >
              <StyledNavLink
                to={link.to}
                onClick={closeNavigationMenu}
              >
                <span className="counter">
                {idx > 9 ? idx : "0" + idx}
                </span>

                {link.display}
              </StyledNavLink>
            </li>
          ) 
          )}   
        </StyledNavList>
      </StyledNavMenu>
    </>
  );
}