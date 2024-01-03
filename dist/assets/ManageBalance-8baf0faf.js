import{r as t,_ as h,g as ne,a as ae,s as K,u as le,b as se,c as Ee,f as Te,j as d,d as ce,e as Q,h as ie,i as yr,k as Sr,l as ze,F as wr,m as Rr,I as Er,n as D,B as Ce,M as Tr,o as Pr,T as $e}from"./index-c6a3b6d9.js";import{$ as Pe,a as jr,c as z,b as Ar,d as ee,e as Nr,f as de,g as me,h as Y,i as q,j as kr}from"./index-f03eb866.js";import{C as _r}from"./Container-e53f3cf0.js";import{i as ye,G as B}from"./Grid2-9c9885c7.js";import{C as Fe}from"./Card-9e99745b.js";import{S as Lr,F as zr,O as Fr}from"./Select-ba72b00e.js";const qe="Popper",[Ye,Xe]=Pe(qe);Ye(qe);const Hr="PopperContent";Ye(Hr);const[pe,Po]=Pe("Tooltip",[Xe]);Xe();const Dr="TooltipProvider",Ir=700,[Mr,jo]=pe(Dr),Br=e=>{const{__scopeTooltip:r,delayDuration:o=Ir,skipDelayDuration:a=300,disableHoverableContent:n=!1,children:s}=e,[i,u]=t.useState(!0),l=t.useRef(!1),c=t.useRef(0);return t.useEffect(()=>{const f=c.current;return()=>window.clearTimeout(f)},[]),t.createElement(Mr,{scope:r,isOpenDelayed:i,delayDuration:o,onOpen:t.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:t.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),a)},[a]),isPointerInTransitRef:l,onPointerInTransitChange:t.useCallback(f=>{l.current=f},[]),disableHoverableContent:n},s)},Ge="Tooltip";pe(Ge);const Wr="TooltipPortal";pe(Wr,{forceMount:void 0});pe(Ge,{isInside:!1});const Or=Br,Ur=["tomato","red","ruby","crimson","pink","plum","purple","violet","iris","indigo","blue","cyan","teal","jade","green","grass","brown","orange"],Vr=["sky","mint","lime","yellow","amber"],qr=["gold","bronze"],Yr=[...Ur,...Vr,...qr],Xr="gray",Gr=["mauve","slate","sage","olive","sand"],Zr=[Xr,...Gr];function Jr(e){switch(e){case"tomato":case"red":case"ruby":case"crimson":case"pink":case"plum":case"purple":case"violet":return"mauve";case"iris":case"indigo":case"blue":case"sky":case"cyan":return"slate";case"teal":case"jade":case"mint":case"green":return"sage";case"grass":case"lime":return"olive";case"yellow":case"amber":case"orange":case"brown":case"gold":case"bronze":return"sand"}}const Kr=["inherit","light","dark"],Qr=[...Yr,"gray"],et=[...Zr,"auto"],rt=["solid","translucent"],tt=["none","small","medium","large","full"],ot=["90%","95%","100%","105%","110%"],N={hasBackground:{type:"boolean",default:!0},appearance:{type:"enum",values:Kr,default:"inherit"},accentColor:{type:"enum",values:Qr,default:"indigo"},grayColor:{type:"enum",values:et,default:"auto"},panelBackground:{type:"enum",values:rt,default:"translucent"},radius:{type:"enum",values:tt,default:"medium"},scaling:{type:"enum",values:ot,default:"100%"}};function Ze(e){return e==="gray"?"gray":Jr(e)}const Z=()=>{},we=t.createContext(void 0),Je=t.forwardRef((e,r)=>t.useContext(we)===void 0?t.createElement(Or,null,t.createElement(jr,{dir:"ltr"},t.createElement(Ke,{...e,ref:r}))):t.createElement(je,{...e,ref:r}));Je.displayName="Theme";const Ke=t.forwardRef((e,r)=>{const{appearance:o=N.appearance.default,accentColor:a=N.accentColor.default,grayColor:n=N.grayColor.default,panelBackground:s=N.panelBackground.default,radius:i=N.radius.default,scaling:u=N.scaling.default,hasBackground:l=N.hasBackground.default,...c}=e,[f,m]=t.useState(o);t.useEffect(()=>m(o),[o]);const[p,b]=t.useState(a);t.useEffect(()=>b(a),[a]);const[x,C]=t.useState(n);t.useEffect(()=>C(n),[n]);const[S,w]=t.useState(s);t.useEffect(()=>w(s),[s]);const[j,k]=t.useState(i);t.useEffect(()=>k(i),[i]);const[R,A]=t.useState(u);t.useEffect(()=>A(u),[u]);const E=t.memo(({appearance:P})=>t.createElement("script",{dangerouslySetInnerHTML:{__html:`!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${P}';c.add('${P}');}catch(e){}})();`}}),()=>!0);E.displayName="ExplicitRootAppearanceScript",t.useEffect(()=>nt(o),[o]);const T=x==="auto"?Ze(p):x;return t.createElement(t.Fragment,null,f!=="inherit"&&t.createElement(E,{appearance:f}),l&&t.createElement("style",{dangerouslySetInnerHTML:{__html:`
:root, .light, .light-theme { --color-page-background: white; }
.dark, .dark-theme { --color-page-background: var(--${T}-1); }
body { background-color: var(--color-page-background); }
`}}),t.createElement(je,{...c,ref:r,isRoot:!0,hasBackground:l,appearance:f,accentColor:p,grayColor:x,panelBackground:S,radius:j,scaling:R,onAppearanceChange:m,onAccentColorChange:b,onGrayColorChange:C,onPanelBackgroundChange:w,onRadiusChange:k,onScalingChange:A}))});Ke.displayName="ThemeRoot";const je=t.forwardRef((e,r)=>{var o,a,n,s,i,u;const l=t.useContext(we),{asChild:c,isRoot:f,hasBackground:m,appearance:p=(o=l==null?void 0:l.appearance)!==null&&o!==void 0?o:N.appearance.default,accentColor:b=(a=l==null?void 0:l.accentColor)!==null&&a!==void 0?a:N.accentColor.default,grayColor:x=(n=l==null?void 0:l.resolvedGrayColor)!==null&&n!==void 0?n:N.grayColor.default,panelBackground:C=(s=l==null?void 0:l.panelBackground)!==null&&s!==void 0?s:N.panelBackground.default,radius:S=(i=l==null?void 0:l.radius)!==null&&i!==void 0?i:N.radius.default,scaling:w=(u=l==null?void 0:l.scaling)!==null&&u!==void 0?u:N.scaling.default,onAppearanceChange:j=Z,onAccentColorChange:k=Z,onGrayColorChange:R=Z,onPanelBackgroundChange:A=Z,onRadiusChange:E=Z,onScalingChange:T=Z,...P}=e,g=c?Ar:"div",$=x==="auto"?Ze(b):x,_=e.appearance!==void 0&&e.appearance!=="inherit",X=e.grayColor!==void 0,F=!f&&(m===!0||m!==!1&&(_||X));return t.createElement(we.Provider,{value:t.useMemo(()=>({appearance:p,accentColor:b,grayColor:x,resolvedGrayColor:$,panelBackground:C,radius:S,scaling:w,onAppearanceChange:j,onAccentColorChange:k,onGrayColorChange:R,onPanelBackgroundChange:A,onRadiusChange:E,onScalingChange:T}),[p,b,x,$,C,S,w,j,k,R,A,E,T])},t.createElement(g,{"data-is-root-theme":f?"true":"false","data-accent-color":b,"data-gray-color":$,"data-has-background":F?"true":"false","data-panel-background":C,"data-radius":S,"data-scaling":w,ref:r,...P,className:z("radix-themes",{light:!f&&p==="light",dark:!f&&p==="dark"},P.className)}))});je.displayName="ThemeImpl";function nt(e){if(e==="inherit")return;const r=document.documentElement;(r.classList.contains("light-theme")||r.classList.contains("dark-theme"))&&(r.classList.remove("light-theme","dark-theme"),r.style.colorScheme=e,r.classList.add(`${e}-theme`)),(r.classList.contains("light")||r.classList.contains("dark"))&&(r.classList.remove("light","dark"),r.style.colorScheme=e,r.classList.add(e))}function y(e,r="",o){var a,n,s,i;const u=[];if(typeof e=="object"){for(const l of Object.keys(e))if(l in e){const c=(a=e[l])===null||a===void 0?void 0:a.toString(),f=c==null?void 0:c.startsWith("-"),m=r===""?"":"-",p=f?`-${r}`:r,b=f?c==null?void 0:c.substring(1):c;if(b===void 0)continue;const x=(n=o==null?void 0:o[b])!==null&&n!==void 0?n:b,C=l==="initial"?`${p}${m}${x}`:`${l}:${p}${m}${x}`;u.push(C)}}if(typeof e=="string"){const l=e.startsWith("-"),c=r===""?"":"-",f=l?`-${r}`:r,m=l?e.substring(1):e,p=(s=o==null?void 0:o[m])!==null&&s!==void 0?s:m;u.push(`${f}${c}${p}`)}if(typeof e=="boolean"){const l=r===""?"":"-",c=e.toString(),f=(i=o==null?void 0:o[c])!==null&&i!==void 0?i:c;u.push(`${r}${l}${f}`)}return u.join(" ")}const W=["0","1","2","3","4","5","6","7","8","9"],at={p:{type:"enum",values:W,default:void 0,responsive:!0},px:{type:"enum",values:W,default:void 0,responsive:!0},py:{type:"enum",values:W,default:void 0,responsive:!0},pt:{type:"enum",values:W,default:void 0,responsive:!0},pr:{type:"enum",values:W,default:void 0,responsive:!0},pb:{type:"enum",values:W,default:void 0,responsive:!0},pl:{type:"enum",values:W,default:void 0,responsive:!0}};function lt(e){const{p:r=O.p.default,px:o=O.px.default,py:a=O.py.default,pt:n=O.pt.default,pr:s=O.pr.default,pb:i=O.pb.default,pl:u=O.pl.default,...l}=e;return{p:r,px:o,py:a,pt:n,pr:s,pb:i,pl:u,rest:l}}function st(e){return[y(e.p,"rt-r-p"),y(e.px,"rt-r-px"),y(e.py,"rt-r-py"),y(e.pt,"rt-r-pt"),y(e.pr,"rt-r-pr"),y(e.pb,"rt-r-pb"),y(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}const ct=["static","relative","absolute","fixed","sticky"],te=["auto","0","50%","100%"],He=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],it=["0","1"],dt=["0","1"],O={...at,position:{type:"enum",values:ct,default:void 0,responsive:!0},inset:{type:"enum",values:te,default:void 0,responsive:!0},top:{type:"enum",values:te,default:void 0,responsive:!0},right:{type:"enum",values:te,default:void 0,responsive:!0},bottom:{type:"enum",values:te,default:void 0,responsive:!0},left:{type:"enum",values:te,default:void 0,responsive:!0},width:{type:"enum",values:He,default:void 0,responsive:!0},height:{type:"enum",values:He,default:void 0,responsive:!0},shrink:{type:"enum",values:it,default:void 0,responsive:!0},grow:{type:"enum",values:dt,default:void 0,responsive:!0}},U=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],V={m:{type:"enum",values:U,default:void 0,responsive:!0},mx:{type:"enum",values:U,default:void 0,responsive:!0},my:{type:"enum",values:U,default:void 0,responsive:!0},mt:{type:"enum",values:U,default:void 0,responsive:!0},mr:{type:"enum",values:U,default:void 0,responsive:!0},mb:{type:"enum",values:U,default:void 0,responsive:!0},ml:{type:"enum",values:U,default:void 0,responsive:!0}};function Qe(e){const{m:r=V.m.default,mx:o=V.mx.default,my:a=V.my.default,mt:n=V.mt.default,mr:s=V.mr.default,mb:i=V.mb.default,ml:u=V.ml.default,...l}=e;return{m:r,mx:o,my:a,mt:n,mr:s,mb:i,ml:u,rest:l}}function er(e){return[y(e.m,"rt-r-m"),y(e.mx,"rt-r-mx"),y(e.my,"rt-r-my"),y(e.mt,"rt-r-mt"),y(e.mr,"rt-r-mr"),y(e.mb,"rt-r-mb"),y(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}const ut={type:"enum",values:N.radius.values,default:void 0};function ft(e,[r,o]){return Math.min(o,Math.max(r,e))}function mt(e,r){return t.useReducer((o,a)=>{const n=r[o][a];return n??o},e)}const rr="ScrollArea",[tr,Ao]=Pe(rr),[pt,L]=tr(rr),ht=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,type:a="hover",dir:n,scrollHideDelay:s=600,...i}=e,[u,l]=t.useState(null),[c,f]=t.useState(null),[m,p]=t.useState(null),[b,x]=t.useState(null),[C,S]=t.useState(null),[w,j]=t.useState(0),[k,R]=t.useState(0),[A,E]=t.useState(!1),[T,P]=t.useState(!1),g=ee(r,_=>l(_)),$=Nr(n);return t.createElement(pt,{scope:o,type:a,dir:$,scrollHideDelay:s,scrollArea:u,viewport:c,onViewportChange:f,content:m,onContentChange:p,scrollbarX:b,onScrollbarXChange:x,scrollbarXEnabled:A,onScrollbarXEnabledChange:E,scrollbarY:C,onScrollbarYChange:S,scrollbarYEnabled:T,onScrollbarYEnabledChange:P,onCornerWidthChange:j,onCornerHeightChange:R},t.createElement(de.div,h({dir:$},i,{ref:g,style:{position:"relative","--radix-scroll-area-corner-width":w+"px","--radix-scroll-area-corner-height":k+"px",...e.style}})))}),bt="ScrollAreaViewport",vt=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,children:a,...n}=e,s=L(bt,o),i=t.useRef(null),u=ee(r,i,s.onViewportChange);return t.createElement(t.Fragment,null,t.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),t.createElement(de.div,h({"data-radix-scroll-area-viewport":""},n,{ref:u,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),t.createElement("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},a)))}),I="ScrollAreaScrollbar",xt=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=L(I,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:i}=n,u=e.orientation==="horizontal";return t.useEffect(()=>(u?s(!0):i(!0),()=>{u?s(!1):i(!1)}),[u,s,i]),n.type==="hover"?t.createElement(gt,h({},a,{ref:r,forceMount:o})):n.type==="scroll"?t.createElement(Ct,h({},a,{ref:r,forceMount:o})):n.type==="auto"?t.createElement(or,h({},a,{ref:r,forceMount:o})):n.type==="always"?t.createElement(Ae,h({},a,{ref:r})):null}),gt=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=L(I,e.__scopeScrollArea),[s,i]=t.useState(!1);return t.useEffect(()=>{const u=n.scrollArea;let l=0;if(u){const c=()=>{window.clearTimeout(l),i(!0)},f=()=>{l=window.setTimeout(()=>i(!1),n.scrollHideDelay)};return u.addEventListener("pointerenter",c),u.addEventListener("pointerleave",f),()=>{window.clearTimeout(l),u.removeEventListener("pointerenter",c),u.removeEventListener("pointerleave",f)}}},[n.scrollArea,n.scrollHideDelay]),t.createElement(me,{present:o||s},t.createElement(or,h({"data-state":s?"visible":"hidden"},a,{ref:r})))}),Ct=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=L(I,e.__scopeScrollArea),s=e.orientation==="horizontal",i=be(()=>l("SCROLL_END"),100),[u,l]=mt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return t.useEffect(()=>{if(u==="idle"){const c=window.setTimeout(()=>l("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(c)}},[u,n.scrollHideDelay,l]),t.useEffect(()=>{const c=n.viewport,f=s?"scrollLeft":"scrollTop";if(c){let m=c[f];const p=()=>{const b=c[f];m!==b&&(l("SCROLL"),i()),m=b};return c.addEventListener("scroll",p),()=>c.removeEventListener("scroll",p)}},[n.viewport,s,l,i]),t.createElement(me,{present:o||u!=="hidden"},t.createElement(Ae,h({"data-state":u==="hidden"?"hidden":"visible"},a,{ref:r,onPointerEnter:Y(e.onPointerEnter,()=>l("POINTER_ENTER")),onPointerLeave:Y(e.onPointerLeave,()=>l("POINTER_LEAVE"))})))}),or=t.forwardRef((e,r)=>{const o=L(I,e.__scopeScrollArea),{forceMount:a,...n}=e,[s,i]=t.useState(!1),u=e.orientation==="horizontal",l=be(()=>{if(o.viewport){const c=o.viewport.offsetWidth<o.viewport.scrollWidth,f=o.viewport.offsetHeight<o.viewport.scrollHeight;i(u?c:f)}},10);return J(o.viewport,l),J(o.content,l),t.createElement(me,{present:a||s},t.createElement(Ae,h({"data-state":s?"visible":"hidden"},n,{ref:r})))}),Ae=t.forwardRef((e,r)=>{const{orientation:o="vertical",...a}=e,n=L(I,e.__scopeScrollArea),s=t.useRef(null),i=t.useRef(0),[u,l]=t.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),c=sr(u.viewport,u.content),f={...a,sizes:u,onSizesChange:l,hasThumb:c>0&&c<1,onThumbChange:p=>s.current=p,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:p=>i.current=p};function m(p,b){return Pt(p,i.current,u,b)}return o==="horizontal"?t.createElement($t,h({},f,{ref:r,onThumbPositionChange:()=>{if(n.viewport&&s.current){const p=n.viewport.scrollLeft,b=De(p,u,n.dir);s.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:p=>{n.viewport&&(n.viewport.scrollLeft=p)},onDragScroll:p=>{n.viewport&&(n.viewport.scrollLeft=m(p,n.dir))}})):o==="vertical"?t.createElement(yt,h({},f,{ref:r,onThumbPositionChange:()=>{if(n.viewport&&s.current){const p=n.viewport.scrollTop,b=De(p,u);s.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:p=>{n.viewport&&(n.viewport.scrollTop=p)},onDragScroll:p=>{n.viewport&&(n.viewport.scrollTop=m(p))}})):null}),$t=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:a,...n}=e,s=L(I,e.__scopeScrollArea),[i,u]=t.useState(),l=t.useRef(null),c=ee(r,l,s.onScrollbarXChange);return t.useEffect(()=>{l.current&&u(getComputedStyle(l.current))},[l]),t.createElement(ar,h({"data-orientation":"horizontal"},n,{ref:c,sizes:o,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":he(o)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.x),onDragScroll:f=>e.onDragScroll(f.x),onWheelScroll:(f,m)=>{if(s.viewport){const p=s.viewport.scrollLeft+f.deltaX;e.onWheelScroll(p),ir(p,m)&&f.preventDefault()}},onResize:()=>{l.current&&s.viewport&&i&&a({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:l.current.clientWidth,paddingStart:fe(i.paddingLeft),paddingEnd:fe(i.paddingRight)}})}}))}),yt=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:a,...n}=e,s=L(I,e.__scopeScrollArea),[i,u]=t.useState(),l=t.useRef(null),c=ee(r,l,s.onScrollbarYChange);return t.useEffect(()=>{l.current&&u(getComputedStyle(l.current))},[l]),t.createElement(ar,h({"data-orientation":"vertical"},n,{ref:c,sizes:o,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":he(o)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.y),onDragScroll:f=>e.onDragScroll(f.y),onWheelScroll:(f,m)=>{if(s.viewport){const p=s.viewport.scrollTop+f.deltaY;e.onWheelScroll(p),ir(p,m)&&f.preventDefault()}},onResize:()=>{l.current&&s.viewport&&i&&a({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:l.current.clientHeight,paddingStart:fe(i.paddingTop),paddingEnd:fe(i.paddingBottom)}})}}))}),[St,nr]=tr(I),ar=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,sizes:a,hasThumb:n,onThumbChange:s,onThumbPointerUp:i,onThumbPointerDown:u,onThumbPositionChange:l,onDragScroll:c,onWheelScroll:f,onResize:m,...p}=e,b=L(I,o),[x,C]=t.useState(null),S=ee(r,g=>C(g)),w=t.useRef(null),j=t.useRef(""),k=b.viewport,R=a.content-a.viewport,A=q(f),E=q(l),T=be(m,10);function P(g){if(w.current){const $=g.clientX-w.current.left,_=g.clientY-w.current.top;c({x:$,y:_})}}return t.useEffect(()=>{const g=$=>{const _=$.target;(x==null?void 0:x.contains(_))&&A($,R)};return document.addEventListener("wheel",g,{passive:!1}),()=>document.removeEventListener("wheel",g,{passive:!1})},[k,x,R,A]),t.useEffect(E,[a,E]),J(x,T),J(b.content,T),t.createElement(St,{scope:o,scrollbar:x,hasThumb:n,onThumbChange:q(s),onThumbPointerUp:q(i),onThumbPositionChange:E,onThumbPointerDown:q(u)},t.createElement(de.div,h({},p,{ref:S,style:{position:"absolute",...p.style},onPointerDown:Y(e.onPointerDown,g=>{g.button===0&&(g.target.setPointerCapture(g.pointerId),w.current=x.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),P(g))}),onPointerMove:Y(e.onPointerMove,P),onPointerUp:Y(e.onPointerUp,g=>{const $=g.target;$.hasPointerCapture(g.pointerId)&&$.releasePointerCapture(g.pointerId),document.body.style.webkitUserSelect=j.current,b.viewport&&(b.viewport.style.scrollBehavior=""),w.current=null})})))}),Re="ScrollAreaThumb",wt=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=nr(Re,e.__scopeScrollArea);return t.createElement(me,{present:o||n.hasThumb},t.createElement(Rt,h({ref:r},a)))}),Rt=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,style:a,...n}=e,s=L(Re,o),i=nr(Re,o),{onThumbPositionChange:u}=i,l=ee(r,m=>i.onThumbChange(m)),c=t.useRef(),f=be(()=>{c.current&&(c.current(),c.current=void 0)},100);return t.useEffect(()=>{const m=s.viewport;if(m){const p=()=>{if(f(),!c.current){const b=jt(m,u);c.current=b,u()}};return u(),m.addEventListener("scroll",p),()=>m.removeEventListener("scroll",p)}},[s.viewport,f,u]),t.createElement(de.div,h({"data-state":i.hasThumb?"visible":"hidden"},n,{ref:l,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:Y(e.onPointerDownCapture,m=>{const b=m.target.getBoundingClientRect(),x=m.clientX-b.left,C=m.clientY-b.top;i.onThumbPointerDown({x,y:C})}),onPointerUp:Y(e.onPointerUp,i.onThumbPointerUp)}))}),lr="ScrollAreaCorner",Et=t.forwardRef((e,r)=>{const o=L(lr,e.__scopeScrollArea),a=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&a?t.createElement(Tt,h({},e,{ref:r})):null}),Tt=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,...a}=e,n=L(lr,o),[s,i]=t.useState(0),[u,l]=t.useState(0),c=!!(s&&u);return J(n.scrollbarX,()=>{var f;const m=((f=n.scrollbarX)===null||f===void 0?void 0:f.offsetHeight)||0;n.onCornerHeightChange(m),l(m)}),J(n.scrollbarY,()=>{var f;const m=((f=n.scrollbarY)===null||f===void 0?void 0:f.offsetWidth)||0;n.onCornerWidthChange(m),i(m)}),c?t.createElement(de.div,h({},a,{ref:r,style:{width:s,height:u,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function fe(e){return e?parseInt(e,10):0}function sr(e,r){const o=e/r;return isNaN(o)?0:o}function he(e){const r=sr(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-o)*r;return Math.max(a,18)}function Pt(e,r,o,a="ltr"){const n=he(o),s=n/2,i=r||s,u=n-i,l=o.scrollbar.paddingStart+i,c=o.scrollbar.size-o.scrollbar.paddingEnd-u,f=o.content-o.viewport,m=a==="ltr"?[0,f]:[f*-1,0];return cr([l,c],m)(e)}function De(e,r,o="ltr"){const a=he(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,s=r.scrollbar.size-n,i=r.content-r.viewport,u=s-a,l=o==="ltr"?[0,i]:[i*-1,0],c=ft(e,l);return cr([0,i],[0,u])(c)}function cr(e,r){return o=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const a=(r[1]-r[0])/(e[1]-e[0]);return r[0]+a*(o-e[0])}}function ir(e,r){return e>0&&e<r}const jt=(e,r=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},a=0;return function n(){const s={left:e.scrollLeft,top:e.scrollTop},i=o.left!==s.left,u=o.top!==s.top;(i||u)&&r(),o=s,a=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(a)};function be(e,r){const o=q(e),a=t.useRef(0);return t.useEffect(()=>()=>window.clearTimeout(a.current),[]),t.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(o,r)},[o,r])}function J(e,r){const o=q(r);kr(()=>{let a=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(a),n.unobserve(e)}}},[e,o])}const At=ht,Nt=vt,Ie=xt,Me=wt,kt=Et,_t=["1","2","3"],Lt=["vertical","horizontal","both"],Se={size:{type:"enum",values:_t,default:"1",responsive:!0},radius:ut,scrollbars:{type:"enum",values:Lt,default:"both"}},dr=t.forwardRef((e,r)=>{const{rest:o,...a}=Qe(e),{className:n,style:s,type:i,scrollHideDelay:u=i!=="scroll"?0:void 0,dir:l,size:c=Se.size.default,radius:f=Se.radius.default,scrollbars:m=Se.scrollbars.default,...p}=o;return t.createElement(At,{type:i,scrollHideDelay:u,className:z("rt-ScrollAreaRoot",n,er(a)),style:s},t.createElement(Nt,{...p,ref:r,className:"rt-ScrollAreaViewport"}),t.createElement("div",{className:"rt-ScrollAreaViewportFocusRing"}),m!=="vertical"?t.createElement(Ie,{"data-radius":f,orientation:"horizontal",className:z("rt-ScrollAreaScrollbar",y(c,"rt-r-size"))},t.createElement(Me,{className:"rt-ScrollAreaThumb"})):null,m!=="horizontal"?t.createElement(Ie,{"data-radius":f,orientation:"vertical",className:z("rt-ScrollAreaScrollbar",y(c,"rt-r-size"))},t.createElement(Me,{className:"rt-ScrollAreaThumb"})):null,m==="both"?t.createElement(kt,{className:"rt-ScrollAreaCorner"}):null)});dr.displayName="ScrollArea";const zt=["1","2","3"],Ft=["surface","ghost"],Be={size:{type:"enum",values:zt,default:"2",responsive:!0},variant:{type:"enum",values:Ft,default:"ghost"}},Ht=["start","center","end","baseline"],Dt={align:{type:"enum",values:Ht,default:void 0,responsive:!0}},It=["start","center","end"],We={justify:{type:"enum",values:It,default:void 0,responsive:!0},width:{type:"string | number",default:void 0}},ur=t.forwardRef((e,r)=>{const{rest:o,...a}=Qe(e),{className:n,children:s,size:i=Be.size.default,variant:u=Be.variant.default,...l}=o;return t.createElement("div",{ref:r,className:z("rt-TableRoot",n,`rt-variant-${u}`,y(i,"rt-r-size"),er(a)),...l},t.createElement(dr,null,t.createElement("table",{className:"rt-TableRootTable"},s)))});ur.displayName="Table";const fr=t.forwardRef((e,r)=>t.createElement("thead",{...e,ref:r,className:z("rt-TableHeader",e.className)}));fr.displayName="TableHeader";const mr=t.forwardRef((e,r)=>t.createElement("tbody",{...e,ref:r,className:z("rt-TableBody",e.className)}));mr.displayName="TableBody";const pr=t.forwardRef((e,r)=>{const{className:o,align:a=Dt.align.default,...n}=e;return t.createElement("tr",{...n,ref:r,className:z("rt-TableRow",o,y(a,"rt-r-va",{baseline:"baseline",start:"top",center:"middle",end:"bottom"}))})});pr.displayName="TableRow";const ve=t.forwardRef((e,r)=>{const{rest:o,...a}=lt(e),{tag:n="td",className:s,style:i,justify:u=We.justify.default,width:l=We.width.default,...c}=o;return t.createElement(n,{...c,ref:r,className:z("rt-TableCell",s,st(a),y(u,"rt-r-ta",{start:"left",center:"center",end:"right"})),style:{width:l,...i}})});ve.displayName="TableCellImpl";const hr=t.forwardRef((e,r)=>t.createElement(ve,{...e,tag:"td",ref:r}));hr.displayName="TableCell";const br=t.forwardRef((e,r)=>t.createElement(ve,{scope:"col",...e,tag:"th",ref:r,className:z("rt-TableColumnHeaderCell",e.className)}));br.displayName="TableColumnHeaderCell";const vr=t.forwardRef((e,r)=>t.createElement(ve,{scope:"row",...e,tag:"th",ref:r,className:z("rt-TableRowHeaderCell",e.className)}));vr.displayName="TableRowHeaderCell";const v=Object.assign({},{Root:ur,Header:fr,Body:mr,Row:pr,Cell:hr,ColumnHeaderCell:br,RowHeaderCell:vr});function Mt(e){return ae("MuiFormLabel",e)}const Bt=ne("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),oe=Bt,Wt=["children","className","color","component","disabled","error","filled","focused","required"],Ot=e=>{const{classes:r,color:o,focused:a,disabled:n,error:s,filled:i,required:u}=e,l={root:["root",`color${Q(o)}`,n&&"disabled",s&&"error",i&&"filled",a&&"focused",u&&"required"],asterisk:["asterisk",s&&"error"]};return ie(l,Mt,r)},Ut=K("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},r)=>h({},r.root,e.color==="secondary"&&r.colorSecondary,e.filled&&r.filled)})(({theme:e,ownerState:r})=>h({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${oe.focused}`]:{color:(e.vars||e).palette[r.color].main},[`&.${oe.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${oe.error}`]:{color:(e.vars||e).palette.error.main}})),Vt=K("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${oe.error}`]:{color:(e.vars||e).palette.error.main}})),qt=t.forwardRef(function(r,o){const a=le({props:r,name:"MuiFormLabel"}),{children:n,className:s,component:i="label"}=a,u=se(a,Wt),l=Ee(),c=Te({props:a,muiFormControl:l,states:["color","required","focused","disabled","error","filled"]}),f=h({},a,{color:c.color||"primary",component:i,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),m=Ot(f);return d.jsxs(Ut,h({as:i,ownerState:f,className:ce(m.root,s),ref:o},u,{children:[n,c.required&&d.jsxs(Vt,{ownerState:f,"aria-hidden":!0,className:m.asterisk,children:[" ","*"]})]}))}),Yt=qt;function Xt(e){return ae("MuiInputLabel",e)}ne("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Gt=["disableAnimation","margin","shrink","variant","className"],Zt=e=>{const{classes:r,formControl:o,size:a,shrink:n,disableAnimation:s,variant:i,required:u}=e,l={root:["root",o&&"formControl",!s&&"animated",n&&"shrink",a&&a!=="normal"&&`size${Q(a)}`,i],asterisk:[u&&"asterisk"]},c=ie(l,Xt,r);return h({},r,c)},Jt=K(Yt,{shouldForwardProp:e=>yr(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[{[`& .${oe.asterisk}`]:r.asterisk},r.root,o.formControl&&r.formControl,o.size==="small"&&r.sizeSmall,o.shrink&&r.shrink,!o.disableAnimation&&r.animated,r[o.variant]]}})(({theme:e,ownerState:r})=>h({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},r.size==="small"&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},r.variant==="filled"&&h({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&h({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},r.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),r.variant==="outlined"&&h({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},r.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),Kt=t.forwardRef(function(r,o){const a=le({name:"MuiInputLabel",props:r}),{disableAnimation:n=!1,shrink:s,className:i}=a,u=se(a,Gt),l=Ee();let c=s;typeof c>"u"&&l&&(c=l.filled||l.focused||l.adornedStart);const f=Te({props:a,muiFormControl:l,states:["size","variant","required"]}),m=h({},a,{disableAnimation:n,formControl:l,shrink:c,size:f.size,variant:f.variant,required:f.required}),p=Zt(m);return d.jsx(Jt,h({"data-shrink":c,ownerState:m,ref:o,className:ce(p.root,i)},u,{classes:p}))}),Qt=Kt;function eo(e){return ae("MuiFormControl",e)}ne("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ro=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],to=e=>{const{classes:r,margin:o,fullWidth:a}=e,n={root:["root",o!=="none"&&`margin${Q(o)}`,a&&"fullWidth"]};return ie(n,eo,r)},oo=K("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},r)=>h({},r.root,r[`margin${Q(e.margin)}`],e.fullWidth&&r.fullWidth)})(({ownerState:e})=>h({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),no=t.forwardRef(function(r,o){const a=le({props:r,name:"MuiFormControl"}),{children:n,className:s,color:i="primary",component:u="div",disabled:l=!1,error:c=!1,focused:f,fullWidth:m=!1,hiddenLabel:p=!1,margin:b="none",required:x=!1,size:C="medium",variant:S="outlined"}=a,w=se(a,ro),j=h({},a,{color:i,component:u,disabled:l,error:c,fullWidth:m,hiddenLabel:p,margin:b,required:x,size:C,variant:S}),k=to(j),[R,A]=t.useState(()=>{let F=!1;return n&&t.Children.forEach(n,H=>{if(!ye(H,["Input","Select"]))return;const G=ye(H,["Select"])?H.props.input:H;G&&Sr(G.props)&&(F=!0)}),F}),[E,T]=t.useState(()=>{let F=!1;return n&&t.Children.forEach(n,H=>{ye(H,["Input","Select"])&&(ze(H.props,!0)||ze(H.props.inputProps,!0))&&(F=!0)}),F}),[P,g]=t.useState(!1);l&&P&&g(!1);const $=f!==void 0&&!l?f:P;let _;const X=t.useMemo(()=>({adornedStart:R,setAdornedStart:A,color:i,disabled:l,error:c,filled:E,focused:$,fullWidth:m,hiddenLabel:p,size:C,onBlur:()=>{g(!1)},onEmpty:()=>{T(!1)},onFilled:()=>{T(!0)},onFocus:()=>{g(!0)},registerEffect:_,required:x,variant:S}),[R,i,l,c,E,$,m,p,_,x,C,S]);return d.jsx(wr.Provider,{value:X,children:d.jsx(oo,h({as:u,ownerState:j,className:ce(k.root,s),ref:o},w,{children:n}))})}),ao=no;function lo(e){return ae("MuiFormHelperText",e)}const so=ne("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),Oe=so;var Ue;const co=["children","className","component","disabled","error","filled","focused","margin","required","variant"],io=e=>{const{classes:r,contained:o,size:a,disabled:n,error:s,filled:i,focused:u,required:l}=e,c={root:["root",n&&"disabled",s&&"error",a&&`size${Q(a)}`,o&&"contained",u&&"focused",i&&"filled",l&&"required"]};return ie(c,lo,r)},uo=K("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.size&&r[`size${Q(o.size)}`],o.contained&&r.contained,o.filled&&r.filled]}})(({theme:e,ownerState:r})=>h({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Oe.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Oe.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),fo=t.forwardRef(function(r,o){const a=le({props:r,name:"MuiFormHelperText"}),{children:n,className:s,component:i="p"}=a,u=se(a,co),l=Ee(),c=Te({props:a,muiFormControl:l,states:["variant","size","disabled","error","filled","focused","required"]}),f=h({},a,{component:i,contained:c.variant==="filled"||c.variant==="outlined",variant:c.variant,size:c.size,disabled:c.disabled,error:c.error,filled:c.filled,focused:c.focused,required:c.required}),m=io(f);return d.jsx(uo,h({as:i,ownerState:f,className:ce(m.root,s),ref:o},u,{children:n===" "?Ue||(Ue=d.jsx("span",{className:"notranslate",children:"​"})):n}))}),mo=fo;function po(e){return ae("MuiTextField",e)}ne("MuiTextField",["root"]);const ho=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],bo={standard:Er,filled:zr,outlined:Fr},vo=e=>{const{classes:r}=e;return ie({root:["root"]},po,r)},xo=K(ao,{name:"MuiTextField",slot:"Root",overridesResolver:(e,r)=>r.root})({}),go=t.forwardRef(function(r,o){const a=le({props:r,name:"MuiTextField"}),{autoComplete:n,autoFocus:s=!1,children:i,className:u,color:l="primary",defaultValue:c,disabled:f=!1,error:m=!1,FormHelperTextProps:p,fullWidth:b=!1,helperText:x,id:C,InputLabelProps:S,inputProps:w,InputProps:j,inputRef:k,label:R,maxRows:A,minRows:E,multiline:T=!1,name:P,onBlur:g,onChange:$,onFocus:_,placeholder:X,required:F=!1,rows:H,select:G=!1,SelectProps:xe,type:xr,value:Ne,variant:ue="outlined"}=a,gr=se(a,ho),ke=h({},a,{autoFocus:s,color:l,disabled:f,error:m,fullWidth:b,multiline:T,required:F,select:G,variant:ue}),Cr=vo(ke),re={};ue==="outlined"&&(S&&typeof S.shrink<"u"&&(re.notched=S.shrink),re.label=R),G&&((!xe||!xe.native)&&(re.id=void 0),re["aria-describedby"]=void 0);const M=Rr(C),ge=x&&M?`${M}-helper-text`:void 0,_e=R&&M?`${M}-label`:void 0,$r=bo[ue],Le=d.jsx($r,h({"aria-describedby":ge,autoComplete:n,autoFocus:s,defaultValue:c,fullWidth:b,multiline:T,name:P,rows:H,maxRows:A,minRows:E,type:xr,value:Ne,id:M,inputRef:k,onBlur:g,onChange:$,onFocus:_,placeholder:X,inputProps:w},re,j));return d.jsxs(xo,h({className:ce(Cr.root,u),disabled:f,error:m,fullWidth:b,ref:o,required:F,color:l,variant:ue,ownerState:ke},gr,{children:[R!=null&&R!==""&&d.jsx(Qt,h({htmlFor:M,id:_e},S,{children:R})),G?d.jsx(Lr,h({"aria-describedby":ge,id:M,labelId:_e,value:Ne,input:Le},xe,{children:i})):Le,x&&d.jsx(mo,h({id:ge},p,{children:x}))]}))}),Ve=go;function Co(){return d.jsxs(v.Root,{variant:"surface",children:[d.jsx(v.Header,{children:d.jsxs(v.Row,{children:[d.jsx(v.ColumnHeaderCell,{children:"Balance"}),d.jsx(v.ColumnHeaderCell,{children:"Type"}),d.jsx(v.ColumnHeaderCell,{children:"Current Income"})]})}),d.jsxs(v.Body,{children:[d.jsxs(v.Row,{children:[d.jsx(v.RowHeaderCell,{children:"Danilo Sousa"}),d.jsx(v.Cell,{children:"danilo@example.com"}),d.jsxs(v.Cell,{children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"2000"]})]}),d.jsxs(v.Row,{children:[d.jsx(v.RowHeaderCell,{children:"Zahra Ambessa"}),d.jsx(v.Cell,{children:"zahra@example.com"}),d.jsxs(v.Cell,{children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"5000"]})]}),d.jsxs(v.Row,{children:[d.jsx(v.RowHeaderCell,{children:"Jasper Eriksson"}),d.jsx(v.Cell,{children:"jasper@example.com"}),d.jsxs(v.Cell,{children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"2000"]})]}),d.jsxs(v.Row,{children:[d.jsx(v.RowHeaderCell,{children:"Zahra Ambessa"}),d.jsx(v.Cell,{children:"zahra@example.com"}),d.jsxs(v.Cell,{children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"5000"]})]}),d.jsxs(v.Row,{children:[d.jsx(v.RowHeaderCell,{children:"Zahra Ambessa"}),d.jsx(v.Cell,{children:"zahra@example.com"}),d.jsxs(v.Cell,{children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"5000"]})]}),d.jsxs(v.Row,{children:[d.jsx(v.RowHeaderCell,{children:"Zahra Ambessa"}),d.jsx(v.Cell,{children:"zahra@example.com"}),d.jsxs(v.Cell,{children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"5000"]})]}),d.jsxs(v.Row,{children:[d.jsx(v.RowHeaderCell,{children:"Zahra Ambessa"}),d.jsx(v.Cell,{children:"zahra@example.com"}),d.jsxs(v.Cell,{children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"5000"]})]})]})]})}const $o={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:350,bgcolor:"white",border:"2px solid #000",boxShadow:3,p:4,borderRadius:"3%"};function No(){const[e,r]=t.useState(!1),o=()=>r(!0),a=()=>r(!1);return d.jsxs(_r,{children:[d.jsx("h1",{className:"text-3xl p-4 mb-1",children:"Manage Balance"}),d.jsxs(B,{container:!0,spacing:1,children:[d.jsx(B,{item:!0,md:7,sm:6,xs:12,children:d.jsxs(Fe,{sx:{borderRadius:2,borderColor:"rgb(229, 231, 235)",px:4,py:3,borderWidth:1,margin:1},children:[d.jsx("div",{className:"flex flex-row justify-end",children:d.jsx("div",{className:"mr-5 text-lg border-2 rounded-lg cursor-pointer  hover:text-white ",children:d.jsxs("div",{children:[d.jsx(Ce,{onClick:o,children:"+ Add"}),d.jsx(Tr,{open:e,onClose:a,"aria-labelledby":"add_balance_popup","aria-describedby":"new_balance_add",children:d.jsx(Pr,{children:d.jsxs(B,{container:!0,spacing:5,sx:$o,children:[d.jsx($e,{variant:"h6",sx:{marginBottom:"12px"},children:"Add Balance"}),d.jsx(B,{xs:12,children:d.jsx(Ve,{id:"outlined-number",label:"New Balance",type:"number",InputLabelProps:{shrink:!0}})}),d.jsx(B,{xs:12,children:d.jsx(Ve,{id:"outlined-number",label:"Income",type:"number",InputLabelProps:{shrink:!0}})}),d.jsxs(B,{xs:12,container:!0,sx:{justifyContent:"flex-end",gap:"5px"},children:[d.jsx(Ce,{onClick:a,color:"secondary",variant:"filled",sx:{borderWidth:"1px ",borderRadius:"10%",padding:"5%",justifySelf:"end"},children:"Cancel"}),d.jsx(Ce,{sx:{borderWidth:"1px ",borderRadius:"10%",padding:0,justifySelf:"end"},children:"Update"})]})]})})})]})})}),d.jsx("div",{className:"basis-1/2  m-0 mx-5  ",children:d.jsxs("div",{className:"flex flex-row my-4",children:[d.jsx("p",{className:"basis-1/3 text-lg pt-4",children:d.jsxs($e,{variant:"subtitle2",sx:{color:"text.disabled"},children:["Current Balance:"," "]})}),d.jsxs("p",{className:"basis-2/3 pl-1 text-4xl",children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"9000"]})]})})]})}),d.jsx(B,{item:!0,md:4,sm:6,xs:12,sx:{justifySelf:"stretch"},children:d.jsxs(Fe,{sx:{borderRadius:2,px:2,py:3,borderWidth:1,margin:1},children:[d.jsx("p",{className:"text-lg p-2",children:d.jsx($e,{variant:"subtitle2",sx:{color:"text.disabled"},children:"Monthly Income:"})}),d.jsx("div",{children:d.jsx("div",{className:"flex justify-center items-center ",children:d.jsxs("p",{className:" text-3xl  rounded-lg p-5",children:[d.jsx(D,{icon:"tabler:currency-naira",className:"inline"}),"5000"]})})})]})})]}),d.jsx("h1",{className:"text-2xl p-4 mt-2 mb-1",children:"Recent Transactions"}),d.jsx(Je,{accentColor:"gold",grayColor:"gray",children:d.jsx(Co,{})})]})}export{No as default};