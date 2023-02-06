import { StyledHeader } from "./styled";
import logo from "../../assets/shared/logo.svg"
import { Link } from "react-router-dom";

const SpaceHeader =()=> {
  return (
    <StyledHeader>
      <img src={logo} alt="logo"/>
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