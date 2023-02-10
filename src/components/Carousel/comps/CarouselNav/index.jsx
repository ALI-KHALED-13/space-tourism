import { useState } from "react";
import { StyledNavList, StyledNavPoint } from "./styled";


 export const CarouselNav =({slides, slideTo, type})=> {
  const [cardInView, setCardinView] = useState(0);
  return (
    <StyledNavList type={type}>
      {slides.map((slide, idx)=> {
        return (
          <StyledNavPoint
            inView={idx === cardInView}
            key={"nav to" + slide.name}
            onClick={()=> {
              slideTo(idx);
              setCardinView(idx)
            }}
            type={type}
          >
            {type=== "nomial"? slide.name: type === "numerical" && idx + 1}
          </StyledNavPoint>
        )
      })}
    </StyledNavList>
  );
}
