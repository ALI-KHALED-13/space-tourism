import { useEffect, useState, useRef, useCallback} from "react";
import { useScreenWidth } from ".";
import { useSwipe } from ".";

export const useCarousel =(direction = "horizontal", breakPoint = 0)=> {
  const [slideInView, setSlideinView] = useState(0);


  const carouselRef = useRef([]); // interesting case of attatching one ref to multiple elms
  const screenWidth = useScreenWidth();


  useSwipe({
    slideInView,
    slideTo,
    carouselRef,
    direction,
    breakPoint,
    screenWidth
  });

  useEffect(()=> {
    if (carouselRef.current[1]){
      if (direction == "vertical" && screenWidth > breakPoint){
        setInfoCarouselHeight(carouselRef.current[1]);
        setMediaCarouselHeight(carouselRef.current[0]);
      } else {
        carouselRef.current.forEach(elm=> {
          elm.style.height = "auto";
          elm.style.display = "flex";
          for (let child of elm.children) child.style.border = "none";
        })
      }
      setTimeout(()=> slideTo(slideInView), 500); // for titlting and screenSize changes adjustments
    }
  }, [carouselRef.current, screenWidth])

  function slideTo (idx) {
    carouselRef.current.forEach(elm=> {
      elm.scroll({
        behavior: "smooth",
        ...(direction === "vertical" && screenWidth > breakPoint?
          {top: idx * elm.offsetHeight}
        :
          {left: idx * elm.offsetWidth}
        )
      })
    })
    
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

const equalizeHeight = (targetHeight, parent)=>{
  parent.style.height = targetHeight + "px";
  for (let child of parent.children){
    if (child.clientHeight === targetHeight) continue;
    let heightCompenstation = targetHeight - child.clientHeight;
    //compensating to the bordersand not margins, since margins tend to overlap.
    child.style.borderTop =  (heightCompenstation) / 2 + "px solid transparent";
    child.style.borderBottom =  (heightCompenstation) / 2 + "px solid transparent";
  }

}

const setInfoCarouselHeight =(infoCarousel)=> {
  infoCarousel.style.display = "block";//not flex any longer

  const tallestChildHeight = Math.max.apply(null, [...infoCarousel.children].map(child=> child.clientHeight));

  equalizeHeight(tallestChildHeight, infoCarousel);

}

const setMediaCarouselHeight =(mediaCarousel)=>{
  mediaCarousel.style.display = "block";

  const images = [...mediaCarousel.getElementsByTagName("img")];
  const loadedImages = images.filter(img=> img.complete);

  if (loadedImages.length !== images.length){
    images.find(img=> !img.complete).onload =()=> setMediaCarouselHeight(mediaCarousel);
  } else {
    const pictures = [...mediaCarousel.getElementsByTagName("picture")];
    const tallestImageHeight = Math.max.apply(null, pictures.map(pic=> pic.clientHeight));
    
    equalizeHeight(tallestImageHeight, mediaCarousel);
  }
  
}