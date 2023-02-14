import { useEffect, useState, useRef, useCallback} from "react";

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

export const useCarousel =(direction = "horizontal", breakPoint = 0)=> {
  const [slideInView, setSlideinView] = useState(0);


  const carouselRef = useRef([]); // interesting case of attatching one ref to multiple elms
  const screenWidth = useScreenWidth();

  useEffect(()=> {
    if (carouselRef.current[1]){
      if (direction == "vertical" && screenWidth > breakPoint){
        setMediaCarouselHeight(carouselRef.current[0]);
        setInfoCarouselHeight(carouselRef.current[1]);
      } else {
        carouselRef.current.forEach(elm=> {
          elm.style.height = "auto";
          elm.style.display = "flex";
        })
      }
      setTimeout(()=> slideTo(slideInView), 500); // for titlting and screenSize changes adjustments (500 > 300 of media rendering)
    }
  }, [carouselRef.current, screenWidth])

  const slideTo = (idx)=> {
    carouselRef.current.forEach(elm=> elm.scroll({
      behavior: "smooth",
      ...(direction === "vertical" && screenWidth > breakPoint?
        {top: idx * elm.offsetHeight}
      :
        {left: idx * elm.offsetWidth}
      )
     }))
    
    setSlideinView(idx)
  }

  const carouselEssentialStyles = {
    width: "100%",
    overflow: "hidden",
  }

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

const setInfoCarouselHeight =(infoCarousel)=> {
  infoCarousel.style.display = "block";//not flex any longer

  const tallestChildHeight = Math.max.apply(null, [...infoCarousel.children].map(child=> child.offsetHeight));
  infoCarousel.style.height = tallestChildHeight + "px";
  for (let child of infoCarousel.children){
    if (child.offsetHeight === tallestChildHeight) continue;
    
    child.style.marginTop =  (tallestChildHeight - child.offsetHeight) / 1.8 + "px";
    child.style.marginBottom =  (tallestChildHeight - child.offsetHeight) / 1.8 + "px";
  }
}

const setMediaCarouselHeight =(mediaCarousel)=>{
  mediaCarousel.style.display = "grid";
  mediaCarousel.style.gridAutoRows = "1fr";
  setTimeout(() => { // onLoad is better but buggy
    mediaCarousel.style.height = mediaCarousel.firstChild.offsetHeight  + "px";
  }, 300);
}

/*for (let carouselElm of carouselRef.current){
          const tallestChildHeight = Math.max.apply(null, [...carouselElm.children].map(child=> child.clientHeight));
          carouselElm.style.height = tallestChildHeight + "px";
          for (let child of carouselElm.children){
            if (child.clientHeight === tallestChildHeight) continue;

            child.style.margin = (tallestChildHeight - child.clientHeight) / 2 + "px 0px";
          }
        }*/ 