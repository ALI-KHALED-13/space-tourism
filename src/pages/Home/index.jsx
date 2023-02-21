import { useNavigate } from "react-router-dom";
import * as typos from "../../components/Typo";
import { StyledExploreButton, StyledSection, StyledHalo, StyledSwitchBtn} from "./styled";

export const Home =({ data, websiteWorld, setWebsiteWorld})=> {
  const navigate = useNavigate();
  
  const switchRealms =()=> {
    setWebsiteWorld(websiteWorld == "real"? "toon": "real")
  }
  return (
    <StyledSection>
      <div>
        {data.blocks.map((block, idx)=> {
          const TypoComp = typos[block.comp];
          return TypoComp && <TypoComp {...block.props} key={`home block ${idx}`} />
        })}
      </div>
      <StyledSwitchBtn onClick={switchRealms} world={websiteWorld}>
        {websiteWorld == "real"? "Go Cartoonish 👀": "Back to reality 🤵"}
      </StyledSwitchBtn>

      <StyledExploreButton onClick={()=> navigate(data.nextPagePath)}>
        <StyledHalo /> 
        {data.exploreBtnText}
      </StyledExploreButton>
    </StyledSection>
  );
}