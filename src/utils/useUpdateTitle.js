import { useEffect } from "react";

export const useUpdateTitle =(title)=> {
  useEffect(()=> {
    const titleElm = document.head.getElementsByTagName("TITLE")[0];
    titleElm.textContent += " | " + title;
    
    return ()=> titleElm.textContent = titleElm.textContent.slice(0, titleElm.textContent.indexOf(" |"))
  }, [])
}