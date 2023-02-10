import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const StyledContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding: 2.4rem;
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
  gap: 3rem;
  text-align: center;
`;
export const StyledSlidingPic = styled.picture`
  width: 100%;
  flex-shrink: 0;
  & > img {
    width: 50%;
    display: block;
    margin: 0 auto;
  }
`;

export const StyledStatsWrapper = styled.div`
  border-top: 1px solid #383B4B;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  ${mediaQuery("md")}{
    flex-direction: row;
    justify-content: center;
  }
`;