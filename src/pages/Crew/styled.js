import styled from "styled-components";
import { mediaQuery } from "../../utils";


export const StyledContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding-top: 3.2rem;
`;


export const StyledSlidingPic = styled.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  & > img {
    width: 60%;
  }
  ${mediaQuery("md")}{
    & > img {
      width: 30%;
    }
  }
`;
export const StyledSlidingDiv = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  ${mediaQuery("lg")}{
    gap: 2.4rem;
  }
`;

export const StyledNavPoint = styled.li`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, ${ ({inView})=>inView? 1: 0.17});
  &:hover {
    background-color: rgba(255, 255, 255, ${({inView})=> inView? 1: 0.5});
  }
  ${mediaQuery("lg")}{
    width: 1.5rem;
    height: 1.5rem;
  }
`;