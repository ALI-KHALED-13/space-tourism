import styled, {css} from "styled-components";
import { mediaQuery } from "../../utils";

export const getBellefair =()=> css`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({color, theme: {colors}})=> color && colors[color]};
`;
export const getDenseBarlow =()=> css`
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({color, theme: {colors}})=> color && colors[color]};
`;

export const Heading1 = styled.h1`
  ${getBellefair()}
  line-height: 100px;
  font-size: 8rem;
  
  ${mediaQuery("md")}{
    font-size: 15rem;
    line-height: 172px;
  }
`;

export const Heading2 = styled.h2`
  ${getBellefair()}
  line-height: 64px;
  font-size: 5.6rem;

  ${mediaQuery("md")}{
    font-size: 10rem;
    line-height: 114.6px;
  }
`;

export const Heading3 = styled.h3`
  ${getBellefair()}
  line-height: 37px;
  font-size: 3.2rem;
  margin: 1.5rem;

  ${mediaQuery("md")}{
    line-height: 64px;
    font-size: 5.6rem;
  }
`;

export const Heading4 = styled.h4`
  ${getBellefair()}
  line-height: 28px;
  font-size: 2.4rem;
  margin: 1.2rem;

  ${mediaQuery("md")}{
    line-height: 37px;
    font-size: 3.2rem;
  }
`;

export const Heading5 = styled.h5`
  ${getDenseBarlow()}
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 2.7px;
  margin: 1rem;

  ${mediaQuery("md")}{
    font-size: 2.8rem;
    line-height: 34px;
    letter-spacing: 4.725px;
  }
`;

export const Subheading1 = styled.h6`
  ${getBellefair()}
  font-size: 28px;
  line-height: 32px;
  margin: 1rem;
`;

export const Subheading2 = styled.h6`
  ${getDenseBarlow()}
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  letter-spacing: 2.3625px;
  margin: 1rem;
`;

export const StyledParagraph = styled.p`
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  margin: 1.2rem;
  color: ${({color, theme: {colors}})=> color && colors[color]};
  ${mediaQuery("md")}{
    font-size: 16px;
    line-height: 28px;
  }
  ${mediaQuery("lg")}{
    font-size: 18px;
    line-height: 32px;
  }
`;