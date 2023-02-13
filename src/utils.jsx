import { useEffect, useState, useRef, useMemo, useCallback} from "react";

export const getBreakPoint =(BPString)=> {
  const breakpoints = {
    "md": 768,
    "lg": 1440
  }
  return breakpoints[BPString]
}

export const mediaQuery =(breakPoint)=> {
  return `@media only screen and (min-width: ${getBreakPoint(breakPoint)}px)`;
}

export const useScreenWidth =()=>{
  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);

  let timerId;
  const updateScreenWidth =()=> {
    clearTimeout(timerId);
    
    timerId = setTimeout(()=> {
      setScreenWidth(document.documentElement.clientWidth);
    }, 300);
  }

  useEffect(()=> {
    window.addEventListener("resize", updateScreenWidth)
    return ()=> window.removeEventListener("resize", updateScreenWidth)
  }, [])

  return screenWidth;
}


export const useCarousel =(direction = "horizontal")=> {
  const [slideInView, setSlideinView] = useState(0);

  const carouselRef = useRef([]); // interesting case of attatching one ref to multiple elms
  const screenWidth = useScreenWidth();

  const slideTo = (idx)=> {
    carouselRef.current.forEach(elm=> elm.scroll({
      behavior: "smooth",
      ...(direction === "vertical"?
        {top: idx * elm.clientHeight}
      :
        {left: idx * elm.clientWidth,}
      )
     })
    );
    setSlideinView(idx)
  }

  useEffect(()=> { //for tilting adjustments
    slideTo(slideInView);
  }, [screenWidth]);

  const carouselEssentialStyles = {
    width: "100%",
    overflow: "hidden",
    ...(direction === "vertical"?
    {height: Math.max(carouselRef.map(ref=> ref.current?.firstChild.clientHeight))}
    :
    {display:"flex"}
  )};

  // useCallback so the two comps don't get redeclared with every scroll an hus losing its scrollLeft changes
  const MediaCarousel = useCallback(({className, children})=> ( 
    <div
      ref={(elm)=> carouselRef.current[0] = elm}
      className={`mediaCarousel ${className || ""}`}
      style={carouselEssentialStyles}
    >
      {children}
    </div>
  ), []);

  const InfoCarousel = useCallback(({className, children})=> (
    <div
      ref={(elm)=> carouselRef.current[1] = elm}
      className={`infoCarousel ${className || ""}`}
      style={carouselEssentialStyles}
    >
      {children}
    </div>
  ), []);

  return {InfoCarousel, MediaCarousel, slideTo, slideInView};
}