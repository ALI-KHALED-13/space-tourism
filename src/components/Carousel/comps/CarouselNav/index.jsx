import { useState } from "react";
import { StyledNavList, StyledNavPoint } from "./styled";


 export const CarouselNav =({type, slides, slideTo})=> {
  const [cardInView, setCardinView] = useState(0);
  return (
    <StyledNavList>
      {slides.map((slide, idx)=> {
        return (
          <StyledNavPoint
            inView={idx === cardInView}
            key={"nav to" + slide.name}
            onClick={()=> {
              slideTo(idx);
              setCardinView(idx)
            }}
          >
            {slide.name}
          </StyledNavPoint>
        )
      })}
    </StyledNavList>
  );
}
