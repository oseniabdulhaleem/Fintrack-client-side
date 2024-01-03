import{r as d,_ as $,C as te,D as ie,E as le,G as ce,H as ae,b as oe,j as W,d as ue,h as fe,a as de,s as pe,u as ge}from"./index-c6a3b6d9.js";function me(e,n){var r,s;return d.isValidElement(e)&&n.indexOf((r=e.type.muiName)!=null?r:(s=e.type)==null||(s=s._payload)==null||(s=s.value)==null?void 0:s.muiName)!==-1}const be=(e,n)=>e.filter(r=>n.includes(r)),g=(e,n,r)=>{const s=e.keys[0];Array.isArray(n)?n.forEach((i,t)=>{r((l,u)=>{t<=e.keys.length-1&&(t===0?Object.assign(l,u):l[e.up(e.keys[t])]=u)},i)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:be(e.keys,Object.keys(n))).forEach(t=>{if(e.keys.indexOf(t)!==-1){const l=n[t];l!==void 0&&r((u,m)=>{s===t?Object.assign(u,m):u[e.up(t)]=m},l)}}):(typeof n=="number"||typeof n=="string")&&r((i,t)=>{Object.assign(i,t)},n)};function o(e){return e?`Level${e}`:""}function G(e){return e.unstable_level>0&&e.container}function L(e){return function(r){return`var(--Grid-${r}Spacing${o(e.unstable_level)})`}}function w(e){return function(r){return e.unstable_level===0?`var(--Grid-${r}Spacing)`:`var(--Grid-${r}Spacing${o(e.unstable_level-1)})`}}function k(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${o(e.unstable_level-1)})`}const ye=({theme:e,ownerState:n})=>{const r=L(n),s={};return g(e.breakpoints,n.gridSize,(i,t)=>{let l={};t===!0&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),t==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof t=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / ${k(n)}${G(n)?` + ${r("column")}`:""})`}),i(s,l)}),s},$e=({theme:e,ownerState:n})=>{const r={};return g(e.breakpoints,n.gridOffset,(s,i)=>{let t={};i==="auto"&&(t={marginLeft:"auto"}),typeof i=="number"&&(t={marginLeft:i===0?"0px":`calc(100% * ${i} / ${k(n)})`}),s(r,t)}),r},Ge=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n)?{[`--Grid-columns${o(n.unstable_level)}`]:k(n)}:{"--Grid-columns":12};return g(e.breakpoints,n.columns,(s,i)=>{s(r,{[`--Grid-columns${o(n.unstable_level)}`]:i})}),r},xe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),s=G(n)?{[`--Grid-rowSpacing${o(n.unstable_level)}`]:r("row")}:{};return g(e.breakpoints,n.rowSpacing,(i,t)=>{var l;i(s,{[`--Grid-rowSpacing${o(n.unstable_level)}`]:typeof t=="string"?t:(l=e.spacing)==null?void 0:l.call(e,t)})}),s},_e=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=w(n),s=G(n)?{[`--Grid-columnSpacing${o(n.unstable_level)}`]:r("column")}:{};return g(e.breakpoints,n.columnSpacing,(i,t)=>{var l;i(s,{[`--Grid-columnSpacing${o(n.unstable_level)}`]:typeof t=="string"?t:(l=e.spacing)==null?void 0:l.call(e,t)})}),s},Se=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return g(e.breakpoints,n.direction,(s,i)=>{s(r,{flexDirection:i})}),r},he=({ownerState:e})=>{const n=L(e),r=w(e);return $({minWidth:0,boxSizing:"border-box"},e.container&&$({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||G(e))&&$({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},Oe=e=>{const n=[];return Object.entries(e).forEach(([r,s])=>{s!==!1&&s!==void 0&&n.push(`grid-${r}-${String(s)}`)}),n},ve=(e,n="xs")=>{function r(s){return s===void 0?!1:typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"&&s>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const s=[];return Object.entries(e).forEach(([i,t])=>{r(t)&&s.push(`spacing-${i}-${String(t)}`)}),s}return[]},Ee=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`],Ce=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],Ne=te(),je=ie("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Pe(e){return le({props:e,name:"MuiGrid",defaultTheme:Ne})}function we(e={}){const{createStyledComponent:n=je,useThemeProps:r=Pe,componentName:s="MuiGrid"}=e,i=d.createContext(void 0),t=(m,a)=>{const{container:x,direction:_,spacing:S,wrap:b,gridSize:h}=m,O={root:["root",x&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Ee(_),...Oe(h),...x?ve(S,a.breakpoints.keys[0]):[]]};return fe(O,v=>de(s,v),{})},l=n(Ge,_e,xe,ye,Se,he,$e),u=d.forwardRef(function(a,x){var _,S,b,h,O,v,q,D;const C=ce(),A=r(a),N=ae(A),E=d.useContext(i),{className:V,children:U,columns:H=12,container:K=!1,component:F="div",direction:I="row",wrap:J="wrap",spacing:j=0,rowSpacing:Q=j,columnSpacing:X=j,disableEqualOverflow:R,unstable_level:f=0}=N,Y=oe(N,Ce);let y=R;f&&R!==void 0&&(y=a.disableEqualOverflow);const T={},M={},z={};Object.entries(Y).forEach(([c,p])=>{C.breakpoints.values[c]!==void 0?T[c]=p:C.breakpoints.values[c.replace("Offset","")]!==void 0?M[c.replace("Offset","")]=p:z[c]=p});const Z=(_=a.columns)!=null?_:f?void 0:H,ee=(S=a.spacing)!=null?S:f?void 0:j,ne=(b=(h=a.rowSpacing)!=null?h:a.spacing)!=null?b:f?void 0:Q,re=(O=(v=a.columnSpacing)!=null?v:a.spacing)!=null?O:f?void 0:X,B=$({},N,{level:f,columns:Z,container:K,direction:I,wrap:J,spacing:ee,rowSpacing:ne,columnSpacing:re,gridSize:T,gridOffset:M,disableEqualOverflow:(q=(D=y)!=null?D:E)!=null?q:!1,parentDisableEqualOverflow:E}),se=t(B,C);let P=W.jsx(l,$({ref:x,as:F,ownerState:B,className:ue(se.root,V)},z,{children:d.Children.map(U,c=>{if(d.isValidElement(c)&&me(c,["Grid"])){var p;return d.cloneElement(c,{unstable_level:(p=c.props.unstable_level)!=null?p:f+1})}return c})}));return y!==void 0&&y!==(E??!1)&&(P=W.jsx(i.Provider,{value:y,children:P})),P});return u.muiName="Grid",u}const ke=we({createStyledComponent:pe("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>ge({props:e,name:"MuiGrid2"})}),De=ke;export{De as G,me as i};