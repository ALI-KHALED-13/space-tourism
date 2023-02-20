import{s as a,m as r,j as i,a as m,t as p,r as b}from"./index-3cba2d2d.js";import{u as x,a as $,S,b as g}from"./index-d6bbd6e2.js";const c=a.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  ${r("lg")}{
    gap: 2.4rem;
  }
`,C=a.div`
  display: grid;
  gap: 3.2rem;
  padding: 2rem;

  ${r("md")}{
    max-width: 51rem;
    padding: 0;
    margin: 5rem auto;
    gap: 4rem;

    & .mediaCarousel {
      grid-row: 3/4;
    }
    & ${c} {
      grid-row: 2/3;
    }
  }

  ${r("lg")}{
    max-width: 120rem;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
    justify-items: start;
    margin: 0;

    & .mediaCarousel {
      grid-column: 2/3;
      grid-row: 1/3;
    }
    & ${c} {
      align-self: center;
    }
    & .infoCarousel {
      text-align: left;
    }
  }
`,j=a.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1rem;
  border-bottom: 2px solid #383B4B;
  & > img {
    width: 55%;
  }
  ${r("md")}{
    border-bottom: none;
    align-items: center;
    & > img {
      width: 90%;
    }
  }
`,k=a.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.8rem;
  padding: 0 0.5rem;
  ${r("md")}{
    justify-content: center; // to be close to the dots in tablet mode
  }
  ${r("lg")}{
    gap: 1.5rem;
    text-align: left;
    align-items: flex-start;
  }
`,v=a.li`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, ${({inView:e})=>e?1:.17});
  @media (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, ${({inView:e})=>e?1:.5});
    }
  }
  ${r("md")}{
    width: 1.5rem; //intentional design change
    height: 1.5rem;
  }
  ${r("lg")}{
    width: 1.8rem;
    height: 1.8rem;
  }
`,{StyledParagraph:V}=p,T=({data:e,pageOrder:u})=>{const{InfoCarousel:h,MediaCarousel:f,slideTo:y,slideInView:w}=x();return $("Crew"),i(S,{order:u,title:e.title,children:m(C,{children:[i(f,{children:e.slides.map((t,n)=>{const l=t.images.desktop.split(".").reduce((s,o)=>s[o],g),d=t.images.mobile.split(".").reduce((s,o)=>s[o],g);return m(j,{children:[i("source",{media:"(min-width: 1440px)",srcSet:l}),i("img",{src:d,alt:`image number ${n+1}`})]},t.images.mobile)})}),i(c,{children:e.slides.map((t,n)=>i(v,{inView:n===w,onClick:()=>y(n)},"slide to"+t.name))}),i(h,{children:e.slides.map((t,n)=>{var l;return m(k,{children:[(l=t.headers)==null?void 0:l.map((d,s)=>{const o=p[d.comp];return b.createElement(o,{...d.props,key:`slide${n+1}header${s+1}`})}),i(V,{color:"spaceBlue",children:t.description})]},`slide ${n+1} info`)})})]})})};export{T as default};
