import { useCallback, useRef } from "react";
import { Subheading2, Heading4, StyledParagraph, Heading2, Heading5} from "../Typo";
import {CarouselNav} from "./comps/CarouselNav";
import {
  StyledCarousel,
  StyledContainer,
  StyledSlidingDiv,
  StyledSlidingImg,
  StyledStatsWrapper
} from "./styled";

/* how is this carousel gonna behave verticslly?? 
  think about react router here too? motion animation solution
*/

export const Carousel =({data})=>{

  const imgCarouselRef = useRef(null);
  const infoCarouselRef = useRef(null);

  const slideTo = (idx)=> {
    infoCarouselRef.current.scroll({
      left: idx * infoCarouselRef.current.clientWidth, 
      behavior: "smooth"
    });
  }

  return (
    <StyledContainer >
      {/*
        <StyledCarousel>
          {data.slides.map(slide.images)}
        </StyledCarousel>
      */}

      <CarouselNav
        slides={data.slides}
        type={data.carouselType}
        slideTo={slideTo}
      />
      
      {
        <StyledCarousel ref={infoCarouselRef}>
         {data.slides.map((slide, idx)=> {
            return ( 
              <StyledSlidingDiv key={slide.name + idx}>
       
                <div>
                  {slide.role && <Heading5> {slide.role} </Heading5>}
                  <Heading2>{slide.name}</Heading2>
                  
                  <StyledParagraph color="spaceBlue">
                    {slide.description}
                  </StyledParagraph>
                </div>

                {slide.stats && (
                  <StyledStatsWrapper>
                    {slide.stats.map((stat, idx)=> {
                      const [statKey, statValue] = stat;
                      return (
                        <div key={statValue + idx}>
                          <Subheading2 color="spaceBlue">{statKey}</Subheading2>
                          <Heading4>{statValue}</Heading4>
                        </div>
                      )

                    })}
                  </StyledStatsWrapper>
                )}
              </StyledSlidingDiv>
            )
        })}
       </StyledCarousel>
      }
    </StyledContainer>
  );
}