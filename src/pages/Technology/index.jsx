import { SpaceSection } from "../../components/SpaceSection"
import { useCarousel } from "../../utils"
import { StyledContainer, StyledNavList, StyledNavPoint, StyledSlidingDiv } from "./styled";
import { assets } from "../../assets";
import * as typo from "../../components/Typo";


const { StyledParagraph } = typo;

export const Technology =({data, pageOrder})=> {

  const {InfoCarousel, MediaCarousel, slideTo, slideInView} = useCarousel();

  return (
    <SpaceSection order={pageOrder} title={data.title}>
      <StyledContainer>

        <MediaCarousel>
          {data.slides.map((slide, idx)=> {
            const desktop = slide.images.desktop.split(".").reduce((obj, key)=> obj[key] , assets);
            const mobile = slide.images.mobile.split(".").reduce((obj, key)=> obj[key] , assets);

            return <StyledSlidingDiv key={slide.images.mobile} images={{desktop, mobile}}/>
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