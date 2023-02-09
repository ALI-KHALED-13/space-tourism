import { StyledNavList, StyledNavMenu, StyledNavLink} from "./styled";

export const PrimaryNav =({navLinks})=> {
  return (
    <StyledNavMenu>
      <StyledNavList>
        {navLinks.map(link=> (
          <li key={link.path}>
            <StyledNavLink to={link.path}>
              {link.display}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavList>
    </StyledNavMenu>
  );
}