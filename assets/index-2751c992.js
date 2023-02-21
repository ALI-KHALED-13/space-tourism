import{r as i,u as j,j as b,U as W,s as E,m as y,a as v,H as k}from"./index-6119ec2a.js";const Ce=(e="horizontal",s=0)=>{const[t,o]=i.useState(0),a=i.useRef([]),r=j();S({slideInView:t,slideTo:l,carouselRef:a,direction:e,breakPoint:s,screenWidth:r}),i.useEffect(()=>{a.current[1]&&(e=="vertical"&&r>s?(C(a.current[1]),P(a.current[0])):a.current.forEach(c=>{c.style.height="auto",c.style.display="flex";for(let n of c.children)n.style.border="none"}),setTimeout(()=>l(t),500))},[a.current,r]);function l(c){a.current.forEach(n=>{n.scroll({behavior:"smooth",...e==="vertical"&&r>s?{top:c*n.offsetHeight}:{left:c*n.offsetWidth}})}),o(c)}const g={width:"100%",overflow:"hidden"},u=i.useCallback(({className:c,children:n})=>b("div",{ref:p=>a.current[0]=p,className:`mediaCarousel ${c||""}`,style:g,children:n}),[]);return{InfoCarousel:i.useCallback(({className:c,children:n})=>b("div",{ref:p=>a.current[1]=p,className:`infoCarousel ${c||""}`,style:g,children:n}),[]),MediaCarousel:u,slideTo:l,slideInView:t}},x=(e,s)=>{s.style.height=e+"px";for(let t of s.children){if(t.clientHeight===e)continue;let o=e-t.clientHeight;t.style.borderTop=o/2+"px solid transparent",t.style.borderBottom=o/2+"px solid transparent"}},C=e=>{e.style.display="block";const s=Math.max.apply(null,[...e.children].map(t=>t.clientHeight));x(s,e)},P=e=>{e.style.display="block";const s=[...e.getElementsByTagName("img")];if(s.filter(o=>o.complete).length!==s.length)s.find(o=>!o.complete).onload=()=>P(e);else{const o=[...e.getElementsByTagName("picture")],a=Math.max.apply(null,o.map(r=>r.clientHeight));x(a,e)}},Se=e=>{i.useEffect(()=>{const s=document.head.getElementsByTagName("TITLE")[0];return s.textContent+=" | "+e,()=>s.textContent=s.textContent.slice(0,s.textContent.indexOf(" |"))},[])},S=({carouselRef:e,slideInView:s,slideTo:t,direction:o="horizontal",breakPoint:a=0,screenWidth:r=document.documentElement.clientWidth})=>{const[l,g]=i.useState({x:0,y:0}),[u,w]=i.useState({x:0,y:0});i.useEffect(()=>{if(e.current[1]){const n=d=>{const{screenX:h,screenY:f}=d.changedTouches[0];g({x:h,y:f})},p=d=>{const{screenX:h,screenY:f}=d.changedTouches[0];w({x:h,y:f})},m=T(e.current[0],e.current[1]);return m.addEventListener("touchstart",n),m.addEventListener("touchend",p),()=>{m.removeEventListener("touchstart",n),m.removeEventListener("touchend",p)}}},[e.current]);const c=(n,p)=>{p>n+35&&s>0?t(s-1):n>p+35&&s<e.current[0].children.length-1&&t(s+1)};i.useEffect(()=>{if(e.current[1]){const n=u.x-l.x,p=u.y-l.y,m=Math.abs(n)>Math.abs(p)?"horizontal":"vertical";[m,o].every(d=>d==="vertical")&&r>a?c(l.y,u.y):m==="horizontal"&&c(l.x,u.x)}},[u,e.current,r])},T=(e,s)=>{try{if([e,s].some(r=>!(r instanceof Element)))throw new TypeError("one of the passed arguments isn't an element");let t=null,o=e.parentElement,a=s.parentElement;for(;;){if(o===a){t=a;break}o=o.parentElement,a=a.parentElement}return t}catch(t){if(t.name==="typeError")return console.error(t.message),document.body;throw t}},L=W`
  from {
    opacity: 0.5;
    top: -50px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`,z=E.section`
  position: relative;
  animation: ${L} 0.6s ease-in-out;
  & > h2 {
    text-align: center;
  }
  ${y("md")}{
    padding-top: 4rem;
    & > h2 {
      text-align: left;
      padding-left: 3.5rem;
    }
  }
  ${y("lg")}{
    margin-left: 15%;
    padding-top: 7rem;
    & > h2 {
      padding-left: 0;
    }
  }

`,H=E.span`
  color: ${({theme:{colors:e}})=>e.spaceGrey};
  font-weight: 700;
  margin-right: 2rem;

  ${y("lg")}{
    margin-right: 3rem;
  }
`,Te=({title:e,order:s,children:t})=>v(z,{children:[v(k,{children:[b(H,{children:(s+"").padStart(2,"0")}),e]}),t]}),D="/space-tourism/assets/image-moon-85007328.webp",$="/space-tourism/assets/image-moon-65df7a68.png",I="/space-tourism/assets/image-titan-5aa00dfe.webp",M="/space-tourism/assets/image-titan-c9e71a76.png",N="/space-tourism/assets/image-mars-331b18c2.webp",B="/space-tourism/assets/image-mars-aa6f283f.png",U="/space-tourism/assets/image-europa-1633fd2e.webp",O="/space-tourism/assets/image-europa-c9182c76.png",X="/space-tourism/assets/action-dd97562b.webp",Y="/space-tourism/assets/action-622937c4.png",q="/space-tourism/assets/adventures-ab183a1b.webp",G="/space-tourism/assets/adventures-d06f0bff.png",Q="/space-tourism/assets/comedia-fad51cc0.webp",A="/space-tourism/assets/comedia-c7ecd58c.png",F="/space-tourism/assets/sports-517a1c4a.webp",J="/space-tourism/assets/sports-30731137.png",K={moon:{png:$,webp:D},titan:{png:M,webp:I},mars:{png:B,webp:N},europa:{png:O,webp:U},action:{png:Y,webp:X},adventure:{png:G,webp:q},comedia:{png:A,webp:Q},sports:{png:J,webp:F}},V="/space-tourism/assets/image-anousheh-ansari-94af00f6.webp",Z="/space-tourism/assets/image-anousheh-ansari-1c67226f.png",_="/space-tourism/assets/image-douglas-hurley-d49c6980.webp",R="/space-tourism/assets/image-douglas-hurley-eefed9f8.png",ee="/space-tourism/assets/image-mark-shuttleworth-30367e88.webp",se="/space-tourism/assets/image-mark-shuttleworth-b3fe36f7.png",te="/space-tourism/assets/image-victor-glover-7debdc8b.webp",ae="/space-tourism/assets/image-victor-glover-dfbb7281.png",ne="/space-tourism/assets/tarik-f4e52dd9.webp",oe="/space-tourism/assets/rasha-83ba35e3.webp",ce="/space-tourism/assets/mamoun-ferkh-34cc1b5a.webp",re={anousheh:{png:Z,webp:V},douglas:{png:R,webp:_},mark:{png:se,webp:ee},victor:{png:ae,webp:te},tarek:{webp:ne},rasha:{webp:oe},mamoun:{webp:ce}},pe="/space-tourism/assets/image-launch-vehicle-portrait-7165cee7.jpg",ie="/space-tourism/assets/image-launch-vehicle-landscape-37b2246f.jpg",le="/space-tourism/assets/image-spaceport-portrait-8f5c81cf.jpg",ue="/space-tourism/assets/image-spaceport-landscape-c4258e76.jpg",me="/space-tourism/assets/image-space-capsule-portrait-c67ebf87.jpg",de="/space-tourism/assets/image-space-capsule-landscape-2e8d59ba.jpg",ge={launchVehicle:{portrait:pe,landscape:ie},spaceport:{portrait:le,landscape:ue},spaceCapsule:{portrait:me,landscape:de}},he="/space-tourism/assets/slamDunk-portrait-c6e5245f.jpg",fe="/space-tourism/assets/slamDunk-landscape-fab741cf.jpg",be="/space-tourism/assets/conan-portrait-e89025e3.jpg",ye="/space-tourism/assets/conan-landscape-22b96041.jpeg",we="/space-tourism/assets/friends-portrait-f8ed76c7.jpg",ve="/space-tourism/assets/friends-landscape-4d896290.png",Ee="/space-tourism/assets/hunter-portrait-a9bcbbb1.jpg",xe="/space-tourism/assets/hunter-landscape-656ed84a.jpg",Pe="/space-tourism/assets/zoro-portrait-5c0825fb.jpg",je="/space-tourism/assets/zoro-landscape-daa68c0e.jpg",We={slamDunk:{portrait:he,landscape:fe},conan:{portrait:be,landscape:ye},friends:{portrait:we,landscape:ve},hunter:{portrait:Ee,landscape:xe},zoro:{portrait:Pe,landscape:je}},Le={destinations:K,crew:re,technology:ge,shows:We};export{Te as S,Se as a,Le as b,Ce as u};
