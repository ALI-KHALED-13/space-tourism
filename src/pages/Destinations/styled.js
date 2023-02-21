import styled from "styled-components";
import { getDenseBarlow } from "../../components/Typo";
import { mediaQuery } from "../../utils";




export const StyledContainer = styled.div`
  display: grid;
  gap: 2rem;

  ${mediaQuery("md")}{
    max-width: 57.5rem;
    margin: 0 auto;
    gap: 3rem;
  }
  ${mediaQuery("lg")}{
    max-width: 130rem;
    margin: 6.5rem auto;
    justify-items: start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 9fr;
    column-gap: 12rem;

    & .mediaCarousel {
      grid-row: 1 / 3;
    }
  }
`;


export const StyledSlidingPic = styled.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 3.2rem 0 0.6rem;
  & > img {
    width: 47%;
  
  }
  
  ${mediaQuery("md")}{
    margin: 6rem 0 2.3rem;
    & > img {
      width: 55%;
    }
  }
  ${mediaQuery("lg")}{
    margin: 0;
    padding: 3rem;
    & > img {
      width: 90%;
    }
  }
`;
export const StyledSlidingDiv = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3.2rem;
  padding: 0 2.4rem;

  ${mediaQuery("lg")}{
    text-align: left;
    align-items: flex-start;
    gap: 4rem;
    padding: 0;
    padding-right: 3rem;
  }
`;

export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  ${mediaQuery("md")}{
    gap: 3.6rem;
  }
`;

export const StyledNavPoint = styled.li`
  cursor: pointer;
  ${getDenseBarlow()};
  font-size: 1.4rem;
  line-height: 17px;
  letter-spacing: 2.3625px;
  padding: 0.8rem 0.1rem;
  color: ${({inView, theme: {colors}})=> inView? "white" : colors.spaceBlue};

  border-bottom: 3px solid rgba(255, 255, 255, ${({inView})=> inView? 1 : 0});
  
  @media (hover: hover) { 
    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, ${({inView})=> inView? 1 : 0.5});
    }
  }

  ${mediaQuery("md")}{
    font-size: 1.6rem;
    line-height: 17px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

export const StyledStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mediaQuery("md")}{
    flex-direction: row;
    justify-content: space-around;
    gap: 5rem;
  }
`;