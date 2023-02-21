import{s as o,m as r,j as i,a as c,t as u,r as x}from"./index-6119ec2a.js";import{u as $,a as S,S as C,b as p}from"./index-2751c992.js";const g=o.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  ${r("lg")}{
    gap: 2.4rem;
  }
`,j=o.div`
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
    & ${g} {
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
    & ${g} {
      align-self: center;
    }
    & .infoCarousel {
      text-align: left;
    }
  }
`,k=o.picture`
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
`,v=o.div`
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
`,V=o.li`
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
`,{StyledParagraph:B}=u,E=({data:e,pageOrder:h})=>{const{InfoCarousel:f,MediaCarousel:y,slideTo:b,slideInView:w}=$();return S(e.title),i(C,{order:h,title:e.title,children:c(j,{children:[i(y,{children:e.slides.map((t,n)=>{var d;const a=(d=t.images.desktop)==null?void 0:d.split(".").reduce((s,m)=>s[m],p),l=t.images.mobile.split(".").reduce((s,m)=>s[m],p);return c(k,{children:[i("source",{media:"(min-width: 1440px)",srcSet:a}),i("img",{src:l,alt:`image number ${n+1}`})]},t.images.mobile)})}),i(g,{children:e.slides.map((t,n)=>i(V,{inView:n===w,onClick:()=>b(n)},"slide to"+t.name))}),i(f,{children:e.slides.map((t,n)=>{var a;return c(v,{children:[(a=t.headers)==null?void 0:a.map((l,d)=>{const s=u[l.comp];return x.createElement(s,{...l.props,key:`slide${n+1}header${d+1}`})}),i(B,{color:"spaceBlue",children:t.description})]},`slide ${n+1} info`)})})]})})};export{E as default};
