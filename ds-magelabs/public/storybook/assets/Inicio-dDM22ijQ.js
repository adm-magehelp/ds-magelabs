import{j as T}from"./jsx-runtime-CQK1N-t5.js";import{useMDXComponents as Ne}from"./index-B7Eb2wwo.js";import{b as Ve}from"./blocks-Cc20bmO2.js";import{f as ve,d as J,i as te,b as Fe,j as Ue,k as $e,a as Je,l as Ye,g as Ke,e as ue,I as Qe}from"./iframe-DsjLW7Yf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-7EWhWC0P.js";var le={},ce={},de={},je;function Ze(){return je||(je=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return e}});function e(s){let{widthInt:u,heightInt:d,blurWidth:a,blurHeight:r,blurDataURL:i,objectFit:x}=s;const h=20,_=a?a*40:u,n=r?r*40:d,g=_&&n?"viewBox='0 0 "+_+" "+n+"'":"",p=g?"none":x==="contain"?"xMidYMid":x==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+g+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+h+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+h+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+p+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}})(de)),de}var fe={},Ie;function ye(){return Ie||(Ie=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(d,a){for(var r in a)Object.defineProperty(d,r,{enumerable:!0,get:a[r]})}e(t,{VALID_LOADERS:function(){return s},imageConfigDefault:function(){return u}});const s=["default","imgix","cloudinary","akamai","custom"],u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}})(fe)),fe}var Re;function Be(){return Re||(Re=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return _}}),ve();const e=Ze(),s=ye(),u=["-moz-initial","fill","none","scale-down",void 0];function d(n){return n.default!==void 0}function a(n){return n.src!==void 0}function r(n){return!!n&&typeof n=="object"&&(d(n)||a(n))}function i(n){return typeof n>"u"?n:typeof n=="number"?Number.isFinite(n)?n:NaN:typeof n=="string"&&/^[0-9]+$/.test(n)?parseInt(n,10):NaN}function x(n,g,p){let{deviceSizes:P,allSizes:S}=n;if(p){const C=/(^|\s)(1?\d?\d)vw/g,f=[];for(let c;c=C.exec(p);c)f.push(parseInt(c[2]));if(f.length){const c=Math.min(...f)*.01;return{widths:S.filter(b=>b>=P[0]*c),kind:"w"}}return{widths:S,kind:"w"}}return typeof g!="number"?{widths:P,kind:"w"}:{widths:[...new Set([g,g*2].map(C=>S.find(f=>f>=C)||S[S.length-1]))],kind:"x"}}function h(n){let{config:g,src:p,unoptimized:P,width:S,quality:z,sizes:C,loader:f}=n;if(P)return{src:p,srcSet:void 0,sizes:void 0};const{widths:c,kind:b}=x(g,S,C),o=c.length-1;return{sizes:!C&&b==="w"?"100vw":C,srcSet:c.map((m,l)=>f({config:g,src:p,quality:z,width:m})+" "+(b==="w"?m:l+1)+b).join(", "),src:f({config:g,src:p,quality:z,width:c[o]})}}function _(n,g){let{src:p,sizes:P,unoptimized:S=!1,priority:z=!1,loading:C,className:f,quality:c,width:b,height:o,fill:m=!1,style:l,overrideSrc:j,onLoad:R,onLoadingComplete:H,placeholder:y="empty",blurDataURL:I,fetchPriority:k,decoding:q="async",layout:A,objectFit:D,objectPosition:Y,lazyBoundary:ne,lazyRoot:K,...E}=n;const{imgConf:W,showAltText:O,blurComplete:Q,defaultLoader:X}=g;let U,w=W||s.imageConfigDefault;if("allSizes"in w)U=w;else{var N;const v=[...w.deviceSizes,...w.imageSizes].sort((F,ee)=>F-ee),B=w.deviceSizes.sort((F,ee)=>F-ee),Z=(N=w.qualities)==null?void 0:N.sort((F,ee)=>F-ee);U={...w,allSizes:v,deviceSizes:B,qualities:Z}}if(typeof X>"u")throw Object.defineProperty(new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let V=E.loader||X;delete E.loader,delete E.srcSet;const re="__next_img_default"in V;if(re){if(U.loader==="custom")throw Object.defineProperty(new Error('Image with src "'+p+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{const v=V;V=B=>{const{config:Z,...F}=B;return v(F)}}if(A){A==="fill"&&(m=!0);const v={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},B={responsive:"100vw",fill:"100vw"},Z=v[A];Z&&(l={...l,...Z});const F=B[A];F&&!P&&(P=F)}let M="",L=i(b),G=i(o),xe,we;if(r(p)){const v=d(p)?p.default:p;if(!v.src)throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(v)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!v.height||!v.width)throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(v)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(xe=v.blurWidth,we=v.blurHeight,I=I||v.blurDataURL,M=v.src,!m){if(!L&&!G)L=v.width,G=v.height;else if(L&&!G){const B=L/v.width;G=Math.round(v.height*B)}else if(!L&&G){const B=G/v.height;L=Math.round(v.width*B)}}}p=typeof p=="string"?p:M;let Se=!z&&(C==="lazy"||typeof C>"u");(!p||p.startsWith("data:")||p.startsWith("blob:"))&&(S=!0,Se=!1),U.unoptimized&&(S=!0),re&&!U.dangerouslyAllowSVG&&p.split("?",1)[0].endsWith(".svg")&&(S=!0);const Ge=i(c),$=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:Y}:{},O?{}:{color:"transparent"},l),Ce=!Q&&y!=="empty"?y==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,e.getImageBlurSvg)({widthInt:L,heightInt:G,blurWidth:xe,blurHeight:we,blurDataURL:I||"",objectFit:$.objectFit})+'")':'url("'+y+'")':null,He=u.includes($.objectFit)?$.objectFit==="fill"?"100% 100%":"cover":$.objectFit;let Xe=Ce?{backgroundSize:He,backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Ce}:{};const se=h({config:U,src:p,unoptimized:S,width:L,quality:Ge,sizes:P,loader:V});return{props:{...E,loading:Se?"lazy":C,fetchPriority:k,width:L,height:G,decoding:q,className:f,style:{...$,...Xe},sizes:se.sizes,srcSet:se.srcSet,src:j||se.src},meta:{unoptimized:S,priority:z,placeholder:y,fill:m}}}})(ce)),ce}var ie={exports:{}},oe={exports:{}},me={},Ee;function et(){return Ee||(Ee=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});const e=J(),s=typeof window>"u",u=s?()=>{}:e.useLayoutEffect,d=s?()=>{}:e.useEffect;function a(r){const{headManager:i,reduceComponentsToState:x}=r;function h(){if(i&&i.mountedInstances){const n=e.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));i.updateHead(x(n,r))}}if(s){var _;i==null||(_=i.mountedInstances)==null||_.add(r.children),h()}return u(()=>{var n;return i==null||(n=i.mountedInstances)==null||n.add(r.children),()=>{var g;i==null||(g=i.mountedInstances)==null||g.delete(r.children)}}),u(()=>(i&&(i._pendingUpdate=h),()=>{i&&(i._pendingUpdate=h)})),d(()=>(i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null),()=>{i&&i._pendingUpdate&&(i._pendingUpdate(),i._pendingUpdate=null)})),null}})(me)),me}var pe={},Pe;function tt(){return Pe||(Pe=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return u}});const u=te()._(J()).default.createContext({})})(pe)),pe}var ge={},qe;function nt(){return qe||(qe=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return e}});function e(s){let{ampFirst:u=!1,hybrid:d=!1,hasQuery:a=!1}=s===void 0?{}:s;return u||d&&a}})(ge)),ge}var Oe;function rt(){return Oe||(Oe=1,(function(t,e){"use client";Object.defineProperty(e,"__esModule",{value:!0});function s(f,c){for(var b in c)Object.defineProperty(f,b,{enumerable:!0,get:c[b]})}s(e,{default:function(){return C},defaultHead:function(){return n}});const u=te(),d=Ue(),a=Fe(),r=d._(J()),i=u._(et()),x=tt(),h=$e(),_=nt();ve();function n(f){f===void 0&&(f=!1);const c=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return f||c.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),c}function g(f,c){return typeof c=="string"||typeof c=="number"?f:c.type===r.default.Fragment?f.concat(r.default.Children.toArray(c.props.children).reduce((b,o)=>typeof o=="string"||typeof o=="number"?b:b.concat(o),[])):f.concat(c)}const p=["name","httpEquiv","charSet","itemProp"];function P(){const f=new Set,c=new Set,b=new Set,o={};return m=>{let l=!0,j=!1;if(m.key&&typeof m.key!="number"&&m.key.indexOf("$")>0){j=!0;const R=m.key.slice(m.key.indexOf("$")+1);f.has(R)?l=!1:f.add(R)}switch(m.type){case"title":case"base":c.has(m.type)?l=!1:c.add(m.type);break;case"meta":for(let R=0,H=p.length;R<H;R++){const y=p[R];if(m.props.hasOwnProperty(y))if(y==="charSet")b.has(y)?l=!1:b.add(y);else{const I=m.props[y],k=o[y]||new Set;(y!=="name"||!j)&&k.has(I)?l=!1:(k.add(I),o[y]=k)}}break}return l}}function S(f,c){const{inAmpMode:b}=c;return f.reduce(g,[]).reverse().concat(n(b).reverse()).filter(P()).reverse().map((o,m)=>{const l=o.key||m;return r.default.cloneElement(o,{key:l})})}function z(f){let{children:c}=f;const b=(0,r.useContext)(x.AmpStateContext),o=(0,r.useContext)(h.HeadManagerContext);return(0,a.jsx)(i.default,{reduceComponentsToState:S,headManager:o,inAmpMode:(0,_.isInAmpMode)(b),children:c})}const C=z;(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)})(oe,oe.exports)),oe.exports}var he={},Me;function it(){return Me||(Me=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return d}});const s=te()._(J()),u=ye(),d=s.default.createContext(u.imageConfigDefault)})(he)),he}var _e={},ze;function We(){return ze||(ze=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});const e=75;function s(d){let{config:a,src:r,width:i,quality:x}=d;var h;const _=x||((h=a.qualities)==null?void 0:h.reduce((n,g)=>Math.abs(g-e)<Math.abs(n-e)?g:n))||e;return a.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+_+(r.startsWith("/_next/static/media/"),"")}s.__next_img_default=!0;const u=s})(_e)),_e}var ae={exports:{}},ke;function ot(){return ke||(ke=1,(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useMergedRef",{enumerable:!0,get:function(){return u}});const s=J();function u(a,r){const i=(0,s.useRef)(null),x=(0,s.useRef)(null);return(0,s.useCallback)(h=>{if(h===null){const _=i.current;_&&(i.current=null,_());const n=x.current;n&&(x.current=null,n())}else a&&(i.current=d(a,h)),r&&(x.current=d(r,h))},[a,r])}function d(a,r){if(typeof a=="function"){const i=a(r);return typeof i=="function"?i:()=>a(null)}else return a.current=r,()=>{a.current=null}}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)})(ae,ae.exports)),ae.exports}var Ae;function at(){return Ae||(Ae=1,(function(t,e){"use client";var s={};Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return b}});const u=te(),d=Ue(),a=Fe(),r=d._(J()),i=u._(Je()),x=u._(rt()),h=Be(),_=ye(),n=it();ve();const g=Ye(),p=u._(We()),P=ot(),S=s.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function z(o,m,l,j,R,H,y){const I=o?.src;if(!o||o["data-loaded-src"]===I)return;o["data-loaded-src"]=I,("decode"in o?o.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!o.parentElement||!o.isConnected)){if(m!=="empty"&&R(!0),l?.current){const q=new Event("load");Object.defineProperty(q,"target",{writable:!1,value:o});let A=!1,D=!1;l.current({...q,nativeEvent:q,currentTarget:o,target:o,isDefaultPrevented:()=>A,isPropagationStopped:()=>D,persist:()=>{},preventDefault:()=>{A=!0,q.preventDefault()},stopPropagation:()=>{D=!0,q.stopPropagation()}})}j?.current&&j.current(o)}})}function C(o){return r.use?{fetchPriority:o}:{fetchpriority:o}}const f=(0,r.forwardRef)((o,m)=>{let{src:l,srcSet:j,sizes:R,height:H,width:y,decoding:I,className:k,style:q,fetchPriority:A,placeholder:D,loading:Y,unoptimized:ne,fill:K,onLoadRef:E,onLoadingCompleteRef:W,setBlurComplete:O,setShowAltText:Q,sizesInput:X,onLoad:U,onError:w,...N}=o;const V=(0,r.useCallback)(M=>{M&&(w&&(M.src=M.src),M.complete&&z(M,D,E,W,O))},[l,D,E,W,O,w,ne,X]),re=(0,P.useMergedRef)(m,V);return(0,a.jsx)("img",{...N,...C(A),loading:Y,width:y,height:H,decoding:I,"data-nimg":K?"fill":"1",className:k,style:q,sizes:R,srcSet:j,src:l,ref:re,onLoad:M=>{const L=M.currentTarget;z(L,D,E,W,O)},onError:M=>{Q(!0),D!=="empty"&&O(!0),w&&w(M)}})});function c(o){let{isAppRouter:m,imgAttributes:l}=o;const j={as:"image",imageSrcSet:l.srcSet,imageSizes:l.sizes,crossOrigin:l.crossOrigin,referrerPolicy:l.referrerPolicy,...C(l.fetchPriority)};return m&&i.default.preload?(i.default.preload(l.src,j),null):(0,a.jsx)(x.default,{children:(0,a.jsx)("link",{rel:"preload",href:l.srcSet?void 0:l.src,...j},"__nimg-"+l.src+l.srcSet+l.sizes)})}const b=(0,r.forwardRef)((o,m)=>{const j=!(0,r.useContext)(g.RouterContext),R=(0,r.useContext)(n.ImageConfigContext),H=(0,r.useMemo)(()=>{var W;const O=S||R||_.imageConfigDefault,Q=[...O.deviceSizes,...O.imageSizes].sort((w,N)=>w-N),X=O.deviceSizes.sort((w,N)=>w-N),U=(W=O.qualities)==null?void 0:W.sort((w,N)=>w-N);return{...O,allSizes:Q,deviceSizes:X,qualities:U}},[R]),{onLoad:y,onLoadingComplete:I}=o,k=(0,r.useRef)(y);(0,r.useEffect)(()=>{k.current=y},[y]);const q=(0,r.useRef)(I);(0,r.useEffect)(()=>{q.current=I},[I]);const[A,D]=(0,r.useState)(!1),[Y,ne]=(0,r.useState)(!1),{props:K,meta:E}=(0,h.getImgProps)(o,{defaultLoader:p.default,imgConf:H,blurComplete:A,showAltText:Y});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{...K,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:k,onLoadingCompleteRef:q,setBlurComplete:D,setShowAltText:ne,sizesInput:o.sizes,ref:m}),E.priority?(0,a.jsx)(c,{isAppRouter:j,imgAttributes:K}):null]})});(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)})(ie,ie.exports)),ie.exports}var De;function st(){return De||(De=1,(function(t){var e={};Object.defineProperty(t,"__esModule",{value:!0});function s(h,_){for(var n in _)Object.defineProperty(h,n,{enumerable:!0,get:_[n]})}s(t,{default:function(){return x},getImageProps:function(){return i}});const u=te(),d=Be(),a=at(),r=u._(We());function i(h){const{props:_}=(0,d.getImgProps)(h,{defaultLoader:r.default,imgConf:e.__NEXT_IMAGE_OPTS});for(const[n,g]of Object.entries(_))g===void 0&&delete _[n];return{props:_}}const x=a.Image})(le)),le}var be,Le;function ut(){return Le||(Le=1,be=st()),be}var lt=ut();const ct=Ke(lt);var dt=({src:t,width:e,quality:s=75})=>{const u=[];if(t||u.push("src"),e||u.push("width"),u.length>0)throw new Error(`Next Image Optimization requires ${u.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({src:t,width:e,quality:s})}`);const d=new URL(t,window.location.href);return!d.searchParams.has("w")&&!d.searchParams.has("q")&&(d.searchParams.set("w",e.toString()),d.searchParams.set("q",s.toString())),!t.startsWith("http://")&&!t.startsWith("https://")?d.toString().slice(d.origin.length):d.toString()},ft=ct,mt=ue.forwardRef(({loader:t,...e},s)=>{const u=ue.useContext(Qe);return ue.createElement(ft,{ref:s,...u,...e,loader:t??dt})});mt.displayName="NextImage";function Te(t){const e={h1:"h1",p:"p",...Ne(),...t.components};return T.jsxs(T.Fragment,{children:[T.jsx(Ve,{title:"Inicio"}),`
`,T.jsxs("div",{className:"sb-container",children:[T.jsxs("div",{className:"sb-section-title",children:[T.jsx(e.h1,{id:"comece-por-aqui",children:"Comece por aqui"}),T.jsx(e.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),T.jsx("div",{className:"sb-section"})]}),`
`,T.jsx("style",{children:`
.sb-container {
  margin-bottom: 48px;
}

.sb-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

img {
  object-fit: cover;
}

.sb-section-title {
  margin-bottom: 32px;
}

.sb-section a:not(h1 a, h2 a, h3 a) {
  font-size: 14px;
}

.sb-section-item, .sb-grid-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sb-section-item-heading {
  padding-top: 20px !important;
  padding-bottom: 5px !important;
  margin: 0 !important;
}
.sb-section-item-paragraph {
  margin: 0;
  padding-bottom: 10px;
}

.sb-chevron {
  margin-left: 5px;
}

.sb-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px 20px;
}

.sb-socials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.sb-socials p {
  margin-bottom: 10px;
}

.sb-explore-image {
  max-height: 32px;
  align-self: flex-start;
}

.sb-addon {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #EEF3F8;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #EEF3F8;
  height: 180px;
  margin-bottom: 48px;
  overflow: hidden;
}

.sb-addon-text {
  padding-left: 48px;
  max-width: 240px;
}

.sb-addon-text h4 {
  padding-top: 0px;
}

.sb-addon-img {
  position: absolute;
  left: 345px;
  top: 0;
  height: 100%;
  width: 200%;
  overflow: hidden;
}

.sb-addon-img img {
  width: 650px;
  transform: rotate(-15deg);
  margin-left: 40px;
  margin-top: -72px;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0);
  backface-visibility: hidden;
}

@media screen and (max-width: 800px) {
  .sb-addon-img {
    left: 300px;
  }
}

@media screen and (max-width: 600px) {
  .sb-section {
    flex-direction: column;
  }

  .sb-features-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .sb-socials {
    grid-template-columns: repeat(2, 1fr);
  }

  .sb-addon {
    height: 280px;
    align-items: flex-start;
    padding-top: 32px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 24px;
  }

  .sb-addon-img {
    right: 0;
    left: 0;
    top: 130px;
    bottom: 0;
    overflow: hidden;
    height: auto;
    width: 124%;
  }

  .sb-addon-img img {
    width: 1200px;
    transform: rotate(-12deg);
    margin-left: 0;
    margin-top: 48px;
    margin-bottom: -40px;
    margin-left: -24px;
  }
}
`})]})}function wt(t={}){const{wrapper:e}={...Ne(),...t.components};return e?T.jsx(e,{...t,children:T.jsx(Te,{...t})}):Te(t)}export{wt as default};
