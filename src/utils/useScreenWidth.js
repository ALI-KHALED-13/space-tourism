import { useEffect, useRef, useState} from "react";

export const useScreenWidth =()=>{
  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);

  const timerId = useRef({current: undefined});
  const updateScreenWidth =()=> {
    clearTimeout(timerId.current);
    
    timerId.current = setTimeout(()=> {
      setScreenWidth(document.documentElement.clientWidth);
    }, 300);
  }

  useEffect(()=> {
    window.addEventListener("resize", updateScreenWidth)
    return ()=> window.removeEventListener("resize", updateScreenWidth)
  }, [])

  return screenWidth;
}