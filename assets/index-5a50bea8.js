import{s as o,m as l,b as w,j as r,a as c,t as g,r as $,c as S}from"./index-6b2dfabe.js";import{u as b,a as k,S as C,b as p}from"./index-02ada82e.js";const h=o.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  ${l("lg")}{
    flex-direction: column;
    gap: 3.2rem;
  }
`,v=o.div`
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
    grid-template-columns: 1fr 4.5fr 4.5fr;
    align-items: center;
    justify-items: start;
    column-gap: 8rem;
    
    & .mediaCarousel {
      grid-row: 1 / 2;
      grid-column: 3 / 4;
    }
    & ${h} {
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
  
`,j=o.div`
  width: 100%;
  padding: 2.4rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.9rem;
  
  ${l("lg")}{
    align-items: flex-start;
    text-align: left;
  }
`,T=o.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 1rem;
  
  & > img {
    width: 100%;
  }
`,B=o.li`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  ${w()}
  font-size: 16px;
  line-height: 18px;
  background-color: ${({inView:e})=>e?"white":"transparent"};
  color: ${({inView:e,theme:{colors:m}})=>e?m.spaceBlack:"white"};

  border: 1px solid rgba(255, 255, 255, ${({inView:e})=>e?1:.25});
  &:hover {
    border: 1px solid white;
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
`,{StyledParagraph:P}=g,E=({data:e,pageOrder:m})=>{const{InfoCarousel:u,MediaCarousel:f,slideTo:x,slideInView:y}=b("vertical",S("lg"));return k("Technology"),r(C,{order:m,title:e.title,children:c(v,{children:[r(f,{children:e.slides.map((i,t)=>{const a=i.images.desktop.split(".").reduce((s,n)=>s[n],p),d=i.images.mobile.split(".").reduce((s,n)=>s[n],p);return c(T,{children:[r("source",{media:"(min-width: 1440px)",srcSet:a}),r("img",{src:d,alt:`image number ${t+1}`})]},i.images.mobile)})}),r(h,{children:e.slides.map((i,t)=>r(B,{inView:t===y,onClick:()=>x(t),children:t+1},"slide to"+i.name))}),r(u,{children:e.slides.map((i,t)=>{var a;return c(j,{children:[(a=i.headers)==null?void 0:a.map((d,s)=>{const n=g[d.comp];return $.createElement(n,{...d.props,key:`slide${t+1}header${s+1}`})}),r(P,{color:"spaceBlue",children:i.description})]},`slide${t+1} info`)})})]})})};export{E as default};
