import{r as c,u as E,j as y,U as C,s as x,m as b,a as v,H}from"./index-294c495f.js";const ne=(e="horizontal",t=0)=>{const[s,i]=c.useState(0),a=c.useRef([]),p=E();T({slideInView:s,slideTo:l,carouselRef:a,direction:e,breakPoint:t,screenWidth:p}),c.useEffect(()=>{a.current[1]&&(e=="vertical"&&p>t?(P(a.current[1]),S(a.current[0])):a.current.forEach(o=>{o.style.height="auto",o.style.display="flex"}),setTimeout(()=>l(s),500))},[a.current,p]);function l(o){a.current.forEach(n=>n.scroll({behavior:"smooth",...e==="vertical"&&p>t?{top:o*n.offsetHeight}:{left:o*n.offsetWidth}})),i(o)}const h={width:"100%",overflow:"hidden"},u=c.useCallback(({className:o,children:n})=>y("div",{ref:r=>a.current[0]=r,className:`mediaCarousel ${o||""}`,style:h,children:n}),[]);return{InfoCarousel:c.useCallback(({className:o,children:n})=>y("div",{ref:r=>a.current[1]=r,className:`infoCarousel ${o||""}`,style:h,children:n}),[]),MediaCarousel:u,slideTo:l,slideInView:s}},P=e=>{e.style.display="block";const t=Math.max.apply(null,[...e.children].map(s=>s.offsetHeight));e.style.height=t+"px";for(let s of e.children)s.offsetHeight!==t&&(s.style.marginTop=(t-s.offsetHeight)/1.8+"px",s.style.marginBottom=(t-s.offsetHeight)/1.8+"px")},S=e=>{e.style.display="grid",e.style.gridAutoRows="1fr";const t=[...e.getElementsByTagName("img")].sort((s,i)=>i.naturalHeight-s.naturalHeight)[0];t.complete?e.style.height=e.firstChild.offsetHeight+"px":t.onload=()=>{e.style.height=e.firstChild.offsetHeight+"px"}},oe=e=>{c.useEffect(()=>{const t=document.head.getElementsByTagName("TITLE")[0];return t.textContent+=" | "+e,()=>t.textContent=t.textContent.slice(0,t.textContent.indexOf(" |"))},[])},T=({carouselRef:e,slideInView:t,slideTo:s,direction:i="horizontal",breakPoint:a=0,screenWidth:p=document.documentElement.clientWidth})=>{const[l,h]=c.useState({x:0,y:0}),[u,w]=c.useState({x:0,y:0});c.useEffect(()=>{if(e.current[1]){const n=m=>{const{screenX:d,screenY:f}=m.changedTouches[0];h({x:d,y:f})},r=m=>{const{screenX:d,screenY:f}=m.changedTouches[0];w({x:d,y:f})},g=W(e.current[0],e.current[1]);return g.addEventListener("touchstart",n),g.addEventListener("touchend",r),()=>{g.removeEventListener("touchstart",n),g.removeEventListener("touchend",r)}}},[e.current]);const o=(n,r)=>{r>n+50&&t>0?s(t-1):n>r+50&&t<e.current[0].children.length-1&&s(t+1)};c.useEffect(()=>{if(e.current[1]){const n=u.x-l.x,r=u.y-l.y,g=Math.abs(n)>Math.abs(r)?"horizontal":"vertical";[g,i].every(m=>m==="vertical")&&p>a?o(l.y,u.y):g==="horizontal"&&o(l.x,u.x)}},[u,e.current,p])},W=(e,t)=>{try{if([e,t].some(p=>!(p instanceof Element)))throw new TypeError("one of the passed arguments isn't an element");let s=null,i=e.parentElement,a=t.parentElement;for(;;){if(i===a){s=a;break}i=i.parentElement,a=a.parentElement}return s}catch(s){if(s.name==="typeError")return console.error(s.message),document.body;throw s}},j=C`
  from {
    opacity: 0.5;
    top: -50px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`,L=x.section`
  position: relative;
  animation: ${j} 0.6s ease-in-out;
  & > h2 {
    text-align: center;
  }
  ${b("md")}{
    padding-top: 4rem;
    & > h2 {
      text-align: left;
      padding-left: 3.5rem;
    }
  }
  ${b("lg")}{
    margin-left: 15%;
    padding-top: 7rem;
    & > h2 {
      padding-left: 0;
    }
  }

`,k=x.span`
  color: ${({theme:{colors:e}})=>e.spaceGrey};
  font-weight: 700;
  margin-right: 2rem;

  ${b("lg")}{
    margin-right: 3rem;
  }
`,re=({title:e,order:t,children:s})=>v(L,{children:[v(H,{children:[y(k,{children:t>9?t:"0"+t}),e]}),s]}),$="/space-tourism/assets/image-moon-85007328.webp",M="/space-tourism/assets/image-moon-65df7a68.png",z="/space-tourism/assets/image-titan-5aa00dfe.webp",I="/space-tourism/assets/image-titan-c9e71a76.png",N="/space-tourism/assets/image-mars-331b18c2.webp",B="/space-tourism/assets/image-mars-aa6f283f.png",D="/space-tourism/assets/image-europa-1633fd2e.webp",U="/space-tourism/assets/image-europa-c9182c76.png",O={moon:{png:M,webp:$},titan:{png:I,webp:z},mars:{png:B,webp:N},europa:{png:U,webp:D}},X="/space-tourism/assets/image-anousheh-ansari-94af00f6.webp",Y="/space-tourism/assets/image-anousheh-ansari-1c67226f.png",A="/space-tourism/assets/image-douglas-hurley-d49c6980.webp",G="/space-tourism/assets/image-douglas-hurley-eefed9f8.png",Q="/space-tourism/assets/image-mark-shuttleworth-30367e88.webp",q="/space-tourism/assets/image-mark-shuttleworth-b3fe36f7.png",F="/space-tourism/assets/image-victor-glover-7debdc8b.webp",J="/space-tourism/assets/image-victor-glover-dfbb7281.png",K={anousheh:{png:Y,webp:X},douglas:{png:G,webp:A},mark:{png:q,webp:Q},victor:{png:J,webp:F}},V="/space-tourism/assets/image-launch-vehicle-portrait-7165cee7.jpg",Z="/space-tourism/assets/image-launch-vehicle-landscape-37b2246f.jpg",_="/space-tourism/assets/image-spaceport-portrait-8f5c81cf.jpg",R="/space-tourism/assets/image-spaceport-landscape-c4258e76.jpg",ee="/space-tourism/assets/image-space-capsule-portrait-c67ebf87.jpg",te="/space-tourism/assets/image-space-capsule-landscape-2e8d59ba.jpg",se={launchVehicle:{portrait:V,landscape:Z},spaceport:{portrait:_,landscape:R},spaceCapsule:{portrait:ee,landscape:te}},ce={destinations:O,crew:K,technology:se};export{re as S,oe as a,ce as b,ne as u};
