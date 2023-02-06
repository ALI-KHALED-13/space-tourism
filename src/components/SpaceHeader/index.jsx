import { StyledHeader, StyledLogo } from "./styled";
import logo from "../../assets/shared/logo.svg"
import { Link } from "react-router-dom";
import { useScreenWidth } from "../../utils";
import { List } from "phosphor-react";

const SpaceHeader =()=> {
  const screenWidth = useScreenWidth();

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <List color="white" size={32} />
      <nav>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destination">Destination</Link></li>
          <li><Link to="/crew">Crew</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ol>
      </nav>
    </StyledHeader>
  );
}

export default SpaceHeader;