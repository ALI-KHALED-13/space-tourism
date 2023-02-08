import styled from "styled-components";
import { getBellefair } from "../../components/Typo";
import { mediaQuery } from "../../utils";


export const StyledSection = styled.section`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  gap: 2.5rem;
  padding: 3rem;
  ${mediaQuery("md")}{
    padding: 3rem 16rem;
  }
  ${mediaQuery("lg")}{
    flex-direction: row;
    align-items: flex-end;
    padding: 5rem 16rem;
    gap: 35rem;
  }
`;


export const StyledHalo = styled.span`
  display: inline-block;
  background-color: rgb(255,255,255, 0.1);
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  ${mediaQuery("md")}{
    width: 24rem;
    height: 24rem; 
  }
  ${mediaQuery("lg")}{
    width: 27.5rem;
    height: 27.5rem;
  }
`;


export const StyledExploreButton = styled.button`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: white;
  margin-top: auto;
  ${getBellefair()}
  font-size: 20px;
  line-height: 23px;
  color: ${({theme : {colors}})=> colors.spaceBlack};
  position: relative;
  ${mediaQuery("md")}{
    width: 24rem;
    height: 24rem; 
  }
  ${mediaQuery("lg")}{
    width: 27.5rem;
    height: 27.5rem;
    margin-top: unset; 
  }
  &:hover ${StyledHalo} {
    transform: scale(2);
  }
`;


