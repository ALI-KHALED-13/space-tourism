import{s as d,m as r,g as w,j as e,a as o,t as u,r as S,F as b}from"./index-38202175.js";import{u as v,a as j,S as C,b as h}from"./index-4d4541b4.js";const k=d.div`
  display: grid;
  gap: 2rem;

  ${r("md")}{
    max-width: 57.5rem;
    margin: 0 auto;
    gap: 3rem;
  }
  ${r("lg")}{
    max-width: 130rem;
    margin: 6.5rem auto;
    justify-items: start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 9fr;
    column-gap: 12rem;

    & .mediaCarousel {
      grid-row: 1 / 3;
    }
  }
`,V=d.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 3.2rem 0 0.6rem;
  & > img {
    width: 47%;
  
  }
  
  ${r("md")}{
    margin: 6rem 0 2.3rem;
    & > img {
      width: 55%;
    }
  }
  ${r("lg")}{
    margin: 0;
    padding: 3rem;
    & > img {
      width: 90%;
    }
  }
`,B=d.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3.2rem;
  padding: 0 2.4rem;

  ${r("lg")}{
    text-align: left;
    align-items: flex-start;
    gap: 4rem;
    padding: 0;
    padding-right: 3rem;
  }
`,D=d.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  ${r("md")}{
    gap: 3.6rem;
  }
`,P=d.li`
  cursor: pointer;
  ${w()};
  font-size: 1.4rem;
  line-height: 17px;
  letter-spacing: 2.3625px;
  padding: 0.8rem 0.1rem;
  color: ${({inView:i,theme:{colors:p}})=>i?"white":p.spaceBlue};

  border-bottom: 3px solid rgba(255, 255, 255, ${({inView:i})=>i?1:0});
  
  @media (hover: hover) { 
    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, ${({inView:i})=>i?1:.5});
    }
  }

  ${r("md")}{
    font-size: 1.6rem;
    line-height: 17px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`,T=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${r("md")}{
    flex-direction: row;
    justify-content: space-around;
    gap: 5rem;
  }
`,{Heading4:z,StyledParagraph:E,Subheading2:F}=u,H=({data:i,pageOrder:p})=>{const{InfoCarousel:f,MediaCarousel:x,slideTo:y,slideInView:$}=v();return j(i.title),e(C,{order:p,title:i.title,children:o(k,{children:[e(x,{children:i.slides.map((t,a)=>{var n;const m=(n=t.images.desktop)==null?void 0:n.split(".").reduce((s,l)=>s[l],h),c=t.images.mobile.split(".").reduce((s,l)=>s[l],h);return o(V,{children:[e("source",{media:"(min-width: 1440px)",srcSet:m}),e("img",{src:c,alt:`image number ${a+1}`})]},t.images.mobile)})}),e(D,{children:i.slides.map((t,a)=>e(P,{inView:a===$,onClick:()=>y(a),children:t.name},"slide to"+t.name))}),e(f,{children:i.slides.map((t,a)=>{var m,c;return o(B,{children:[o("div",{children:[(m=t.headers)==null?void 0:m.map((n,s)=>{const l=u[n.comp];return S.createElement(l,{...n.props,key:`slide${a+1}header${s+1}`})}),e(E,{color:"spaceBlue",children:t.description})]}),t.stats&&o(b,{children:[e("hr",{}),e(T,{children:(c=t.stats)==null?void 0:c.map((n,s)=>{const[l,g]=n;return o("div",{children:[e(F,{color:"spaceBlue",children:l}),e(z,{children:g})]},g+s)})})]})]},`slide${a+1} info`)})})]})})};export{H as default};
