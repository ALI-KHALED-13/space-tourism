
export * from './mediaQuery';
export * from './useScreenWidth';
export * from './useCarousel';
export * from './useUpdateTitle';
export * from './useSwipe';


export const getCommonParent =(elm1, elm2)=>{
  try {
    if ([elm1, elm2].some(elm=> !(elm instanceof Element))){
      throw new TypeError("one of the passed arguments isn't an element")
    }
    let commonParent = null;
    let elm1Parent = elm1.parentElement;
    let elm2Parent = elm2.parentElement;
    while(true){
      if (elm1Parent === elm2Parent) {
        commonParent = elm2Parent;
        break;
      }
      elm1Parent = elm1Parent.parentElement;
      elm2Parent = elm2Parent.parentElement;
    }
    return commonParent;
  } catch (err) {
    if (err.name === "typeError"){
      console.error(err.message);
      return document.body
    } else {
      throw err;
    }
  }
  
}