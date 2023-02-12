import styled, {css} from "styled-components";
import { getBellefair } from "../../components/Typo";
import { mediaQuery } from "../../utils";


export const StyledContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding-top: 3.2rem;
`;


export const StyledSlidingDiv = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  ${({images})=> images && css`
    height: 20rem;
    background-image: url(${images.mobile});
    background-size: cover;
    background-position-y: 50%;
  `}
`;


export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  ${mediaQuery("lg")}{
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const StyledNavPoint = styled.li`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  ${getBellefair()}
  font-size: 16px;
  line-height: 18px;
  background-color: ${ ({inView})=> inView? "white": "transparent"};
  color: ${({inView, theme: {colors}})=> inView? colors.spaceBlack: "white"};

  border: 1px solid rgba(255, 255, 255, ${({inView})=> inView? 1: 0.25});
  &:hover {
    border: 1px solid white;
  }
  ${mediaQuery("md")}{
    width: 5.8rem;
    height: 5.8rem;
    font-size: 24px;
    line-height: 28px;
  }
  ${mediaQuery("lg")}{
    width: 8rem;
    height: 8rem;
    font-size: 32px;
    line-height: 37px;
  }
`;