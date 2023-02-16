import{s as o,m as r,g as $,j as e,a as d,t as u,r as w}from"./index-6b2dfabe.js";import{u as S,a as b,S as v,b as g}from"./index-02ada82e.js";const j=o.div`
  display: grid;
  gap: 2rem;

  ${r("md")}{
    max-width: 57.5rem;
    margin: 0 auto;
    gap: 3rem;
  }
  ${r("lg")}{
    max-width: unset;
    margin: 6.5rem auto;
    justify-items: start;
    grid-template-columns: 1fr 1fr;
    column-gap: 12rem;

    & .mediaCarousel {
      grid-row: 1 / 3;
    }
  }
`,C=o.picture`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 3.2rem 0 0.3rem;
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
`,k=o.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  padding: 0 2.4rem;

  ${r("lg")}{
    text-align: left;
    align-items: flex-start;
    gap: 4rem;
  }
`,B=o.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.7rem;
  ${r("md")}{
    gap: 3.6rem;
  }
`,V=o.li`
  cursor: pointer;
  ${$()};
  font-size: 1.4rem;
  line-height: 17px;
  letter-spacing: 2.3625px;
  padding: 0.8rem 0.1rem;
  color: ${({inView:i,theme:{colors:c}})=>i?"white":c.spaceBlue};

  border-bottom: ${({inView:i})=>i?"3px solid white":"none"};
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, ${({inView:i})=>i?1:.5});
  }

  ${r("md")}{
    font-size: 1.6rem;
    line-height: 17px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`,D=o.div`
  border-top: 1px solid #383B4B;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 3rem 0;
  gap: 2rem;

  ${r("md")}{
    flex-direction: row;
    justify-content: space-around;
    gap: 5rem;
  }
`,{Heading4:P,StyledParagraph:T,Subheading2:z}=u,N=({data:i,pageOrder:c})=>{const{InfoCarousel:h,MediaCarousel:x,slideTo:f,slideInView:y}=S();return b("Destinations"),e(v,{order:c,title:i.title,children:d(j,{children:[e(x,{children:i.slides.map((t,n)=>{const m=t.images.desktop.split(".").reduce((s,a)=>s[a],g),l=t.images.mobile.split(".").reduce((s,a)=>s[a],g);return d(C,{children:[e("source",{media:"(min-width: 1440px)",srcSet:m}),e("img",{src:l,alt:`image number ${n+1}`})]},t.images.mobile)})}),e(B,{children:i.slides.map((t,n)=>e(V,{inView:n===y,onClick:()=>f(n),children:t.name},"slide to"+t.name))}),e(h,{children:i.slides.map((t,n)=>{var m;return d(k,{children:[d("div",{children:[(m=t.headers)==null?void 0:m.map((l,s)=>{const a=u[l.comp];return w.createElement(a,{...l.props,key:`slide${n+1}header${s+1}`})}),e(T,{color:"spaceBlue",children:t.description})]}),e(D,{children:t.stats.map((l,s)=>{const[a,p]=l;return d("div",{children:[e(z,{color:"spaceBlue",children:a}),e(P,{children:p})]},p+s)})})]},`slide${n+1} info`)})})]})})};export{N as default};
