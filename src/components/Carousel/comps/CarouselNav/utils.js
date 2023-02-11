import {css} from "styled-components";
import { mediaQuery } from "../../../../utils";
import { getBellefair, getDenseBarlow } from "../../../Typo";


export const getNavPointStyles =({inView, type, colors})=>{
  switch(type){
    case "dots":
      return css`
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, ${inView? 1: 0.17});
        &:hover {
          background-color: rgba(255, 255, 255, ${inView? 1: 0.5});
        }
        ${mediaQuery("lg")}{
          width: 1.5rem;
          height: 1.5rem;
        }
      `;
    case "numerical":
      return css`
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        ${getBellefair()}
        font-size: 16px;
        line-height: 18px;
        background-color: ${inView? "white": "transparent"};
        color: ${inView? colors.spaceBlack: "white"};

        border: 1px solid rgba(255, 255, 255, ${inView? 1: 0.25});
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
    default : //nomial
    return css`
        ${getDenseBarlow()};
        font-size: 1.4rem;
        line-height: 17px;
        letter-spacing: 2.3625px;
        padding: 0.8rem 0.1rem;
        color: ${inView? "white" : colors.spaceBlue};

        border-bottom: ${inView? "3px solid white" : "none"};
        &:hover {
          border-bottom: 3px solid rgba(255, 255, 255, ${inView? 1 : 0.5});
        }

        ${mediaQuery("md")}{
          font-size: 1.6rem;
          line-height: 17px;
          line-height: 19px;
          letter-spacing: 2.7px;
        }
    `;
  }
}