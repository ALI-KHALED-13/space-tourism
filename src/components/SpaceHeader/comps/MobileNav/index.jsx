
import { List } from "phosphor-react";
import {StyledNavMenu, StyledXSign, StyledNavLink, StyledNavList} from "./styled";
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
            <li key={link.path} >
              <StyledNavLink
                to={link.path}
                onClick={closeNavigationMenu}
              >
                <span className="counter">
                  {(idx + "").padStart(2, "0")}
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