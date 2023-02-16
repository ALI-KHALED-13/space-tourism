import { useState, useEffect } from "react";

export const useSwipe =()=> {
  const [touchstartX, setTouchstartX] = useState(0);
  const [touchendX, setTouchendX] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(()=> {
    let touchstartTimerId;
    const handleTouchStart =(ev)=> {
      clearTimeout(touchstartTimerId);
      touchstartTimerId = setTimeout(()=> {
        setTouchstartX(ev.changedTouches[0].screenX);
      }, 500)
    }

    let touchendTimerId;
    const handleTouchEnd =(ev)=> {
      clearTimeout(touchendTimerId);
      touchendTimerId = setTimeout(()=> {
        setTouchendX(ev.changedTouches[0].screenX)
      }, 500);
    }

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return ()=> {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  }, [])

  useEffect(()=> {
    if (touchendX > touchstartX + 50) {
      setSwipeDirection("right");
    } else if (touchstartX > touchendX + 50){
      setSwipeDirection("left");
    }
  }, [touchendX])

  console.log(swipeDirection);
  return swipeDirection;
}