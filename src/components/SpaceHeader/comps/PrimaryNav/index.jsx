import { StyledNavList, StyledNavMenu, StyledNavLink} from "./styled";

export const PrimaryNav =({navLinks})=> {
  return (
    <StyledNavMenu>
      <StyledNavList>
        {navLinks.map(link=> (
          <li key={link.to}>
            <StyledNavLink to={link.to}>
              {link.display}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavList>
    </StyledNavMenu>
  );
}