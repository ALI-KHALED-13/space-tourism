import styled, {css} from "styled-components";
import { mediaQuery } from "../../utils";

export const getBellefair =()=> css`
  font-family: 'Bellefair', serif;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({color, theme: {colors}})=> color && colors[color]};
`;
export const getDenseBarlow =()=> css`
  font-family: 'Barlow Condensed', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({color, theme: {colors}})=> color && colors[color]};
`;


export const Heading1 = styled.h1`
  ${getBellefair()}
  line-height: 1.25;
  font-size: 8rem;
  margin: 1rem 0;
  
  ${mediaQuery("md")}{
    font-size: 15rem;
  }
`;

export const Heading2 = styled.h2`
  ${getDenseBarlow()}
  line-height: 1.2;
  font-size: 1.6rem;
  letter-spacing: 2.7px;

  ${mediaQuery("md")}{
    font-size: 2rem;
    letter-spacing: 3.38px;
  }
  ${mediaQuery("lg")}{
    font-size: 2.8rem;
    letter-spacing: 4.72px;
  }
`;


export const Heading3 = styled.h3` // size variation happens here
  ${getBellefair()}
  line-height: 1.15;
  font-size: ${({L})=> L? 5.6: 2.4}rem;


  ${mediaQuery("md")}{
    font-size: ${({L})=> L? 8: 4}rem;
  }
  ${mediaQuery("lg")}{
    font-size: ${({L})=> L? 10: 5.6}rem;
  }
`;

export const Heading4 = styled.h4`
  margin: 1rem 0;
  ${getBellefair()}
  font-size: 2.8rem;
  line-height: 1.15;
`;

export const Subheading1 = styled.h5`
  ${getBellefair()}
  font-size: 1.6rem;
  line-height: 1.15;

  ${mediaQuery("md")}{
    font-size: 2.4rem;
  }
  ${mediaQuery("lg")}{
    font-size: 3.2rem;
  }
`;

export const Subheading2 = styled.h6`
  ${getDenseBarlow()}
  font-size: 1.4rem;
  line-height: 1.2;
  letter-spacing: 2.3625px;
`;

export const StyledParagraph = styled.p`
  font-family: 'Barlow', sans-serif;;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.73;

  color: ${({color, theme: {colors}})=> color && colors[color]};

  ${mediaQuery("md")}{
    font-size: 16px;
  }
  ${mediaQuery("lg")}{
    font-size: 18px;
  }
`;

export const typos = {
  Heading1,
  Heading2,
  Heading3,
  Subheading1,
  Subheading2,
  StyledParagraph
}