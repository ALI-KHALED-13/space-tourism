import styled from "styled-components";
import { mediaQuery } from "../../utils";

export const StyledContainer = styled.div`
  display: grid;
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
`;
export const StyledSlidingImg = styled.img`
  width: 100%;
  flex-shrink: 0;
  
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