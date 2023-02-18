import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  ${mediaQuery("lg")}{
    gap: 2.4rem;
  }
`;


export const StyledContainer = styled.div`
  display: grid;
  gap: 3.2rem;
  padding: 2rem;

  ${mediaQuery("md")}{
    max-width: 51rem;
    padding: 0;
    margin: 5rem auto;
    gap: 4rem;

    & .mediaCarousel {
      grid-row: 3/4;
    }
    & ${StyledNavList} {
      grid-row: 2/3;
    }
  }

  ${mediaQuery("lg")}{
    max-width: 120rem;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
    justify-items: start;
    margin: 0;

    & .mediaCarousel {
      grid-column: 2/3;
      grid-row: 1/3;
    }
    & ${StyledNavList} {
      align-self: center;
    }
    & .infoCarousel {
      text-align: left;
    }
  }
`;


export const StyledSlidingPic = styled.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1rem;
  border-bottom: 2px solid #383B4B;
  & > img {
    width: 55%;
  }
  ${mediaQuery("md")}{
    border-bottom: none;
    align-items: center;
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
  gap: 0.8rem;
  padding: 0 0.5rem;
  ${mediaQuery("md")}{
    justify-content: center; // to be close to the dots in tablet mode
  }
  ${mediaQuery("lg")}{
    gap: 1.5rem;
    text-align: left;
    align-items: flex-start;
  }
`;

export const StyledNavPoint = styled.li`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, ${ ({inView})=>inView? 1: 0.17});
  @media (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, ${({inView})=> inView? 1: 0.5});
    }
  }
  ${mediaQuery("md")}{
    width: 1.5rem; //intentional design change
    height: 1.5rem;
  }
  ${mediaQuery("lg")}{
    width: 1.8rem;
    height: 1.8rem;
  }
`;