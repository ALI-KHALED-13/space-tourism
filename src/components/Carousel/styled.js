import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const StyledContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding-top: 3.2rem;
  &.destinations {
    gap: 2.5rem;
  }
  &.technology {
    & img {
      width: 100%;
      height: 20rem;
    }
  }
`;

export const StyledCarousel = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
`;
export const StyledSlidingDiv = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const StyledSlidingPic = styled.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  & > img {
    width: 55%;
  }
  ${mediaQuery("md")}{
    & > img {
      width: 30%;
    }
  }
`;

export const StyledStatsWrapper = styled.div`
  border-top: 1px solid #383B4B;
  display: flex;
  flex-direction: column;

  ${mediaQuery("md")}{
    flex-direction: row;
    justify-content: center;
  }
`;