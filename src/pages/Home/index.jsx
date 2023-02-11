import { useNavigate } from "react-router-dom";
import { Heading1, Heading2, StyledParagraph } from "../../components/Typo";
import { StyledExploreButton, StyledSection, StyledHalo} from "./styled";

export const Home =({ nextPagePath })=> {
  const navigate = useNavigate();
  
  return (
    <StyledSection>
      <div>
        <Heading2 color="spaceBlue">
          so, you want to travel to
        </Heading2>
        <Heading1>SPACE</Heading1>
        <StyledParagraph color="spaceBlue">
          Let’s face it; if you want to go to space, 
          you might as well genuinely go to outer 
          space and not hover kind of on the edge of 
          it. Well sit back, and relax because we’ll 
          give you a truly out of this world experience!
        </StyledParagraph>
      </div>
      <StyledExploreButton onClick={()=> navigate(nextPagePath)}>
        <StyledHalo /> 
        explore
      </StyledExploreButton>
    </StyledSection>
  );
}