import { useEffect, useState} from "react";

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