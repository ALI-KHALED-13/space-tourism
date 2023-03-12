import { useNavigate } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import toonlogo from "../../assets/shared/StoonLogo.png";
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
        <img
          alt="switch realms"
          src={websiteWorld == "real"?toonlogo:logo}
          style={{width: websiteWorld == "real"? "7rem":"5rem"}}
        />
      </StyledSwitchBtn>

      <StyledExploreButton onClick={()=> navigate(data.nextPagePath)}>
        <StyledHalo /> 
        {data.exploreBtnText}
      </StyledExploreButton>
    </StyledSection>
  );
}