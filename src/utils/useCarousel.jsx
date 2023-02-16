import { useEffect, useState, useRef, useCallback} from "react";
import { useScreenWidth } from ".";
import { useSwipe } from ".";

export const useCarousel =(direction = "horizontal", breakPoint = 0)=> {
  const [slideInView, setSlideinView] = useState(0);


  const carouselRef = useRef([]); // interesting case of attatching one ref to multiple elms
  const screenWidth = useScreenWidth();
  //const swipeDirection = useSwipe();

  useEffect(()=> {
    if (carouselRef.current[1]){
      if (direction == "vertical" && screenWidth > breakPoint){
        setInfoCarouselHeight(carouselRef.current[1]);
        setMediaCarouselHeight(carouselRef.current[0]);
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
  
  const largestImage = [...mediaCarousel.getElementsByTagName("img")].sort((img1, img2)=> {
    return img2.naturalHeight - img1.naturalHeight
  })[0];
  if (largestImage.complete) {
    mediaCarousel.style.height = mediaCarousel.firstChild.offsetHeight  + "px";
  } else {
    largestImage.onload =()=>{
      mediaCarousel.style.height = mediaCarousel.firstChild.offsetHeight  + "px";
    }
  }
}