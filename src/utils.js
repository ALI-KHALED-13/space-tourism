import { useEffect, useState } from "react";

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