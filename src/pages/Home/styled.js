import styled from "styled-components";
import { getBellefair } from "../../components/Typo";
import { mediaQuery } from "../../utils";


export const StyledSection = styled.section`
  min-height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.4rem;

  ${mediaQuery("md")}{
    padding: 10rem 0;
    max-width: 45rem;
    margin: 0 auto;
  }
  ${mediaQuery("lg")}{
    min-height: 83vh;
    padding : 0;
    padding-bottom: 16rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 120rem;
    & > div {
      text-align: left;
      max-width: 45rem;
    }
    
  }
`;


export const StyledHalo = styled.span`
  display: inline-block;
  background-color: rgb(255,255,255, 0.1);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
`;


export const StyledExploreButton = styled.button`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: white;
  margin-top: auto;
  ${getBellefair()}
  font-size: 2rem;
  line-height: 1.15;
  color: ${({theme : {colors}})=> colors.spaceBlack};
  position: relative;


  ${mediaQuery("md")}{
    font-size: 3.2rem;
    letter-spacing: 2px;
    width: 24rem;
    height: 24rem; 
  }
  ${mediaQuery("lg")}{
    width: 27.5rem;
    height: 27.5rem;
    margin-top: unset; 
  }
  &:hover ${StyledHalo} {
    transform: scale(1.65);
  }
`;


