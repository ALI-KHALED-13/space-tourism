import { useRef } from "react";
import { Subheading2, Heading4, StyledParagraph, Heading2, Heading5} from "../Typo";
import {CarouselNav} from "./comps/CarouselNav";
import {
  StyledCarousel,
  StyledContainer,
  StyledSlidingDiv,
  StyledSlidingPic,
  StyledStatsWrapper
} from "./styled";
import { assets } from "../../assets";

/* how is this carousel gonna behave verticslly?? 
  think about react router here too? motion animation solution
*/

export const Carousel =({data})=>{

  const carouselRef = useRef([]); // interesting case of attatching one ref to multiple elms


  const slideTo = (idx)=> {
    carouselRef.current.forEach(elm=> elm.scroll({
      left: idx * elm.clientWidth, 
      behavior: "smooth"
    }));
  }

  return (
    <StyledContainer>
  
      <StyledCarousel
        ref={(elm)=> carouselRef.current[0] = elm}
        className="imgCarousel"
      >
        {data.slides.map((slide, idx)=> {
          const desktopVariant = slide.images.desktop.split(".").reduce((obj, key)=> obj[key] , assets);
          const mobileVariant = slide.images.mobile.split(".").reduce((obj, key)=> obj[key] , assets);

          return (
            <StyledSlidingPic key={slide.images.mobile}>
              <source media="min-width: 1440px" srcSet={desktopVariant}/>
              <img src={mobileVariant} alt={`image number, ${idx + 1}`} />
            </StyledSlidingPic>
          );
        })}
      </StyledCarousel>
      
      <CarouselNav
        slides={data.slides}
        type={data.carouselType}
        slideTo={slideTo}
      />
      
      <StyledCarousel
        ref={(elm)=> carouselRef.current[1] = elm}
        className="imgCarousel"
      >
        {data.slides.map((slide, idx)=> ( 
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
        ))}
      </StyledCarousel>
      
    </StyledContainer>
  );
}