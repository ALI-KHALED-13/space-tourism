
import { StyledNavList, StyledNavPoint } from "./styled";


 export const CarouselNav =({slides, slideTo, type, slideInView})=> {
  
  return (
    <StyledNavList type={type}>
      {slides.map((slide, idx)=> {
        return (
          <StyledNavPoint
            inView={idx === slideInView}
            key={"nav to" + slide.name}
            onClick={()=>slideTo(idx)}
            type={type}
          >
            {type=== "nomial"? slide.name: type === "numerical" && idx + 1}
          </StyledNavPoint>
        )
      })}
    </StyledNavList>
  );
}
