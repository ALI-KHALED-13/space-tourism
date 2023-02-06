import { useEffect, useState } from "react";


export const mediaQuery =(breakPoint)=> {
  const breakpts = {
    "md": 768,
    "lg": 1440
  }
  return `@media only screen and (min-width: ${breakpts[breakPoint]}px)`;
}

export const useScreenWidth =()=>{
  const [screenWidth, setScreenWidth] = useState(0);

  let timerId;
  const updateScreenWidth =()=> {
    clearTimeout(timerId);
    
    timerId = setTimeout(()=> {
      setScreenWidth(document.documentElement.clientWidth);
    }, 500);
  }

  useEffect(()=> {
    window.addEventListener("resize", updateScreenWidth)
    return ()=> window.removeEventListener("resize", updateScreenWidth)
  }, [])

  return screenWidth;
}