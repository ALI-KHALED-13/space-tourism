import styled, {css} from "styled-components";
import { getBellefair } from "../../components/Typo";
import { mediaQuery } from "../../utils";

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

export const StyledContainer = styled.div`
  display: grid;
  gap: 2.6rem;
  padding-top: 3.2rem;

  ${mediaQuery("md")}{
    gap: 5.6rem;
    padding-top: 6rem;

    & .infoCarousel {
      max-width: 50rem;
      margin: -1.6rem auto;
    }
  }

  ${mediaQuery("lg")}{
    grid-template-columns: 1fr 4.5fr 4.5fr;
    align-items: center;
    justify-items: start;
    column-gap: 8rem;
    
    & .mediaCarousel {
      grid-row: 1 / 2;
      grid-column: 3 / 4;
    }
    & ${StyledNavList} {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    & .infoCarousel {
      max-width: unset;
      margin: 0;
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
  }
  
`;


export const StyledSlidingDiv = styled.div`
  width: 100%;
  padding: 2.4rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.9rem;
  
  ${mediaQuery("lg")}{
    align-items: flex-start;
    text-align: left;
  }
`;

export const StyledSlidingPic = styled.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 1rem;
  
  & > img {
    width: 100%;
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
  @media (hover: hover) {
    &:hover {
      border: 1px solid white;
    }
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