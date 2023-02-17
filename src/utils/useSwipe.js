import { useState, useEffect } from "react";
import { getCommonParent } from ".";

// future enhancent, swiping vertically without dispatching window.scroll event

export const useSwipe =({
  carouselRef,
  slideInView,
  slideTo,
  direction = "horizontal",
  breakPoint = 0,
  screenWidth = document.documentElement.clientWidth
})=> {
  const [touchstartCords, setTouchstartCords] = useState({x: 0, y: 0});
  const [touchendCords, setTouchendCords] = useState({x: 0, y: 0});
  
  
  useEffect(()=> {
    if (carouselRef.current[1]){

      const handleTouchStart =(ev)=> {
        const {screenX, screenY} = ev.changedTouches[0];
        setTouchstartCords({x: screenX, y: screenY});
      }
      const handleTouchEnd =(ev)=> {
        const {screenX, screenY} = ev.changedTouches[0];
        setTouchendCords({x: screenX, y: screenY})
      }
      const commonParent = getCommonParent(carouselRef.current[0], carouselRef.current[1])
      
      commonParent.addEventListener("touchstart", handleTouchStart);
      commonParent.addEventListener("touchend", handleTouchEnd);
      return ()=> {
        commonParent.removeEventListener("touchstart", handleTouchStart);
        commonParent.removeEventListener("touchend", handleTouchEnd);
      }
    }
  }, [carouselRef.current])

  const slideCarousel =(start, end)=> {
    if (end > start + 50 && slideInView > 0) {
      slideTo(slideInView - 1);
    } else if (start > end  + 50 && slideInView < carouselRef.current[0].children.length - 1){
      slideTo(slideInView + 1);
    }
  }
  useEffect(()=> {
    if (carouselRef.current[1]){
      const xDiff = touchendCords.x - touchstartCords.x;
      const yDiff = touchendCords.y - touchstartCords.y;
      const swipeDir = Math.abs(xDiff) > Math.abs(yDiff)? "horizontal" : "vertical";

      if ([swipeDir, direction].every(dir=> dir === "vertical") && screenWidth > breakPoint) {
        slideCarousel(touchstartCords.y, touchendCords.y);
      } else {// default direction, only has to fullfil the swip direction condition
        if (swipeDir === "horizontal") slideCarousel(touchstartCords.x, touchendCords.x);
      }
    }
  }, [touchendCords, carouselRef.current, screenWidth])

}