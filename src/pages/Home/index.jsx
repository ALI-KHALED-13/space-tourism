import { useNavigate } from "react-router-dom";
import * as typos from "../../components/Typo";
import { StyledExploreButton, StyledSection, StyledHalo} from "./styled";

export const Home =({ data })=> {
  const navigate = useNavigate();
  
  return (
    <StyledSection>
      <div>
        {data.blocks.map((block, idx)=> {
          const TypoComp = typos[block.comp];
          return TypoComp && <TypoComp {...block.props} key={`home block ${idx}`} />
        })}
      </div>
      <StyledExploreButton onClick={()=> navigate(data.nextPagePath)}>
        <StyledHalo /> 
        {data.exploreBtnText}
      </StyledExploreButton>
    </StyledSection>
  );
}