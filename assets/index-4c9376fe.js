import{s as n,m as l,b as $,j as t,a as p,t as h,r as b,c as S}from"./index-38202175.js";import{u as k,a as v,S as C,b as g}from"./index-4d4541b4.js";const u=n.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  ${l("lg")}{
    flex-direction: column;
    gap: 3.2rem;
  }
`,j=n.div`
  display: grid;
  gap: 2.6rem;
  padding-top: 3.2rem;

  ${l("md")}{
    gap: 5.6rem;
    padding-top: 6rem;

    & .infoCarousel {
      max-width: 50rem;
      margin: -1.6rem auto;
    }
  }

  ${l("lg")}{
    max-width: 130rem;
    padding-bottom: 10rem;
    grid-template-columns: 1fr 4.5fr 4fr;
    align-items: center;
    justify-items: start;
    column-gap: 8rem;
    
    & .mediaCarousel {
      grid-row: 1 / 2;
      grid-column: 3 / 4;
    }
    & ${u} {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    & .infoCarousel {
      max-width: unset;
      margin: 0;
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
  }
  
`,B=n.div`
  width: 100%;
  padding: 1rem 2.4rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.9rem;
  
  ${l("lg")}{
    align-items: flex-start;
    text-align: left;
  }
`,P=n.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 1rem;
  
  & > img {
    width: 100%;
  }
`,T=n.li`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  ${$()}
  font-size: 16px;
  line-height: 18px;
  background-color: ${({inView:e})=>e?"white":"transparent"};
  color: ${({inView:e,theme:{colors:m}})=>e?m.spaceBlack:"white"};

  border: 1px solid rgba(255, 255, 255, ${({inView:e})=>e?1:.25});
  @media (hover: hover) {
    &:hover {
      border: 1px solid white;
    }
  }
  ${l("md")}{
    width: 5.8rem;
    height: 5.8rem;
    font-size: 24px;
    line-height: 28px;
  }
  ${l("lg")}{
    width: 8rem;
    height: 8rem;
    font-size: 32px;
    line-height: 37px;
  }
`,{StyledParagraph:V}=h,I=({data:e,pageOrder:m})=>{const{InfoCarousel:f,MediaCarousel:x,slideTo:y,slideInView:w}=k("vertical",S("lg"));return v(e.title),t(C,{order:m,title:e.title,children:p(j,{children:[t(x,{children:e.slides.map((i,r)=>{var d;const o=(d=i.images.desktop)==null?void 0:d.split(".").reduce((s,c)=>s[c],g),a=i.images.mobile.split(".").reduce((s,c)=>s[c],g);return p(P,{children:[t("source",{media:"(min-width: 1440px)",srcSet:o}),t("img",{src:a,alt:`image number ${r+1}`})]},i.images.mobile)})}),t(u,{children:e.slides.map((i,r)=>t(T,{inView:r===w,onClick:()=>y(r),children:r+1},"slide to"+i.name))}),t(f,{children:e.slides.map((i,r)=>{var o;return p(B,{children:[(o=i.headers)==null?void 0:o.map((a,d)=>{const s=h[a.comp];return b.createElement(s,{...a.props,key:`slide${r+1}header${d+1}`})}),t(V,{color:"spaceBlue",children:i.description})]},`slide${r+1} info`)})})]})})};export{I as default};
