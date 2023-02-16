import{r as c,u as b,j as l,U as y,s as f,m as g,a as h,H as w}from"./index-6b2dfabe.js";const Z=(e="horizontal",s=0)=>{const[t,i]=c.useState(0),o=c.useRef([]),r=b();c.useEffect(()=>{o.current[1]&&(e=="vertical"&&r>s?(v(o.current[1]),x(o.current[0])):o.current.forEach(a=>{a.style.height="auto",a.style.display="flex"}),setTimeout(()=>m(t),500))},[o.current,r]);const m=a=>{o.current.forEach(n=>n.scroll({behavior:"smooth",...e==="vertical"&&r>s?{top:a*n.offsetHeight}:{left:a*n.offsetWidth}})),i(a)},u={width:"100%",overflow:"hidden"},d=c.useCallback(({className:a,children:n})=>l("div",{ref:p=>o.current[0]=p,className:`mediaCarousel ${a||""}`,style:u,children:n}),[]);return{InfoCarousel:c.useCallback(({className:a,children:n})=>l("div",{ref:p=>o.current[1]=p,className:`infoCarousel ${a||""}`,style:u,children:n}),[]),MediaCarousel:d,slideTo:m,slideInView:t}},v=e=>{e.style.display="block";const s=Math.max.apply(null,[...e.children].map(t=>t.offsetHeight));e.style.height=s+"px";for(let t of e.children)t.offsetHeight!==s&&(t.style.marginTop=(s-t.offsetHeight)/1.8+"px",t.style.marginBottom=(s-t.offsetHeight)/1.8+"px")},x=e=>{e.style.display="grid",e.style.gridAutoRows="1fr";const s=[...e.getElementsByTagName("img")].sort((t,i)=>i.naturalHeight-t.naturalHeight)[0];s.complete?e.style.height=e.firstChild.offsetHeight+"px":s.onload=()=>{e.style.height=e.firstChild.offsetHeight+"px"}},_=e=>{c.useEffect(()=>{const s=document.head.getElementsByTagName("TITLE")[0];return s.textContent+=" | "+e,()=>s.textContent=s.textContent.slice(0,s.textContent.indexOf(" |"))},[])},H=y`
  from {
    opacity: 0.5;
    top: -50px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`,W=f.section`
  position: relative;
  animation: ${H} 0.6s ease-in-out;
  & > h2 {
    text-align: center;
  }
  ${g("md")}{
    padding-top: 4rem;
    & > h2 {
      text-align: left;
      padding-left: 3.5rem;
    }
  }
  ${g("lg")}{
    margin-left: 15%;
    padding-top: 7rem;
    & > h2 {
      padding-left: 0;
    }
  }

`,E=f.span`
  color: ${({theme:{colors:e}})=>e.spaceGrey};
  font-weight: 700;
  margin-right: 2rem;

  ${g("lg")}{
    margin-right: 3rem;
  }
`,ee=({title:e,order:s,children:t})=>h(W,{children:[h(w,{children:[l(E,{children:s>9?s:"0"+s}),e]}),t]}),P="/space-tourism/assets/image-moon-85007328.webp",S="/space-tourism/assets/image-moon-65df7a68.png",j="/space-tourism/assets/image-titan-5aa00dfe.webp",C="/space-tourism/assets/image-titan-c9e71a76.png",T="/space-tourism/assets/image-mars-331b18c2.webp",k="/space-tourism/assets/image-mars-aa6f283f.png",I="/space-tourism/assets/image-europa-1633fd2e.webp",$="/space-tourism/assets/image-europa-c9182c76.png",L={moon:{png:S,webp:P},titan:{png:C,webp:j},mars:{png:k,webp:T},europa:{png:$,webp:I}},N="/space-tourism/assets/image-anousheh-ansari-31e0f886.webp",B="/space-tourism/assets/image-anousheh-ansari-1c67226f.png",M="/space-tourism/assets/image-douglas-hurley-d49c6980.webp",R="/space-tourism/assets/image-douglas-hurley-eefed9f8.png",U="/space-tourism/assets/image-mark-shuttleworth-30367e88.webp",V="/space-tourism/assets/image-mark-shuttleworth-b3fe36f7.png",O="/space-tourism/assets/image-victor-glover-7debdc8b.webp",z="/space-tourism/assets/image-victor-glover-dfbb7281.png",A={anousheh:{png:B,webp:N},douglas:{png:R,webp:M},mark:{png:V,webp:U},victor:{png:z,webp:O}},G="/space-tourism/assets/image-launch-vehicle-portrait-7165cee7.jpg",Q="/space-tourism/assets/image-launch-vehicle-landscape-37b2246f.jpg",q="/space-tourism/assets/image-spaceport-portrait-8f5c81cf.jpg",D="/space-tourism/assets/image-spaceport-landscape-c4258e76.jpg",F="/space-tourism/assets/image-space-capsule-portrait-c67ebf87.jpg",J="/space-tourism/assets/image-space-capsule-landscape-2e8d59ba.jpg",K={launchVehicle:{portrait:G,landscape:Q},spaceport:{portrait:q,landscape:D},spaceCapsule:{portrait:F,landscape:J}},se={destinations:L,crew:A,technology:K};export{ee as S,_ as a,se as b,Z as u};
