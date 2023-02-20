import { getBreakPoint } from "../../../../utils";
import { StyledNavList, StyledNavMenu, StyledNavLink} from "./styled";

export const PrimaryNav =({navLinks, screenWidth})=> {
  return (
    <StyledNavMenu>
      <StyledNavList>
        {navLinks.map((link, idx)=> (
          <li key={link.path}>
            <StyledNavLink to={link.path}>
              {screenWidth > getBreakPoint("lg") && (
                <span className="counter">
                  {(idx + "").padStart(2, "0")}
                </span>
              )}
              {link.display}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavList>
    </StyledNavMenu>
  );
}