import styled, {css} from "styled-components";
import { mediaQuery } from "../../../../utils";
import { getNavPointStyles } from "./utils";


export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: ${({type})=> type == "dots" || type == "numerical"? "1.6rem": "2.7rem"};

  ${mediaQuery("md")}{
    ${ ({type})=> (type === "nomial" || !type) && css` gap: 3.6rem; `}
  }
  ${mediaQuery("lg")}{
    ${ ({type})=> type === "dots"?
    css` gap: 2.4rem;`
    : type === "numerical"?
    css`
      flex-direction: column;
      gap: 3.2rem;
    `
    : ""
    }
  }
`;

export const StyledNavPoint = styled.li`
  cursor: pointer;
  ${({inView, type, theme : {colors}})=> getNavPointStyles({inView, type, colors})}
`;