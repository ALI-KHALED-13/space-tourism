import { SpaceSection } from "../../components/SpaceSection"
import { getBreakPoint, useCarousel, useUpdateTitle } from "../../utils"
import { StyledContainer, StyledNavList, StyledNavPoint, StyledSlidingDiv, StyledSlidingPic } from "./styled";
import { assets } from "../../assets";
import * as typo from "../../components/Typo";


const { StyledParagraph } = typo;

const Technology =({data, pageOrder})=> {
  
  const {InfoCarousel, MediaCarousel, slideTo, slideInView} = useCarousel("vertical", getBreakPoint("lg"));

  useUpdateTitle(data.title);

  return (
    <SpaceSection order={pageOrder} title={data.title}>
      <StyledContainer>

        <MediaCarousel>
          {data.slides.map((slide, idx)=> {
            const desktopVariant = slide.images.desktop?.split(".").reduce((obj, key)=> obj[key] , assets);
            const mobileVariant = slide.images.mobile.split(".").reduce((obj, key)=> obj[key] , assets);

            return (
              <StyledSlidingPic key={slide.images.mobile}>
                <source media="(min-width: 1440px)" srcSet={desktopVariant}/>
                <img src={mobileVariant} alt={`image number ${idx + 1}`} />
              </StyledSlidingPic>
            );
          })}
        </MediaCarousel>

        <StyledNavList >
          {data.slides.map((slide, idx)=> {
            return (
              <StyledNavPoint
                key={"slide to" + slide.name}
                inView={idx === slideInView}
                onClick={()=>slideTo(idx)}
              >
                {idx + 1}
              </StyledNavPoint>
            )
          })}
        </StyledNavList>
        
        <InfoCarousel>
          {data.slides.map((slide, index)=> (
            <StyledSlidingDiv key={`slide${index + 1} info`}>
              
              {slide.headers?.map((header, idx)=> {
                const TypoComp = typo[header.comp]
                return <TypoComp {...header.props}  key={`slide${index + 1}header${idx + 1}`}/>
              })}
              <StyledParagraph color="spaceBlue">
                {slide.description}
              </StyledParagraph>
              
            </StyledSlidingDiv>      
          ))}
        </InfoCarousel>

      </StyledContainer>
    </SpaceSection>
  )
}

export default Technology;