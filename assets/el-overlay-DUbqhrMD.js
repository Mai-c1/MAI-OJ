import{U as E,j as Y,J as W,y as x,n as I,X as D,Y as N,f as j,g as k}from"./base-Ka2KZoYH.js";import{j as A,B as U,Y as $,C as F,A as J,z as K,a8 as V,a3 as y,d as q,a as G,P as L,a9 as Q}from"./index-CS6SEU-6.js";import{t as Z}from"./index-BIKjgQSY.js";import{g as _}from"./scroll-BIrBud54.js";import{P as h}from"./vnode-DHCEBWgO.js";const de=(e,o,n,s)=>{let l={offsetX:0,offsetY:0};const a=u=>{const m=u.clientX,f=u.clientY,{offsetX:v,offsetY:p}=l,d=e.value.getBoundingClientRect(),g=d.left,b=d.top,S=d.width,T=d.height,O=document.documentElement.clientWidth,P=document.documentElement.clientHeight,B=-g+v,X=-b+p,H=O-g-S+v,z=P-b-T+p,M=C=>{let i=v+C.clientX-m,r=p+C.clientY-f;s!=null&&s.value||(i=Math.min(Math.max(i,B),H),r=Math.min(Math.max(r,X),z)),l={offsetX:i,offsetY:r},e.value&&(e.value.style.transform="translate(".concat(E(i),", ").concat(E(r),")"))},w=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",w)},t=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",a)},c=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",a)};A(()=>{U(()=>{n.value?t():c()})}),$(()=>{c()})},ie=(e,o={})=>{F(e)||Z("[useLockscreen]","You need to pass a ref param to this function");const n=o.ns||Y("popup"),s=J(()=>n.bm("parent","hidden"));if(!W||x(document.body,s.value))return;let l=0,a=!1,t="0";const c=()=>{setTimeout(()=>{N(document==null?void 0:document.body,s.value),a&&document&&(document.body.style.width=t)},200)};K(e,u=>{if(!u){c();return}a=!x(document.body,s.value),a&&(t=document.body.style.width),l=_(n.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,f=I(document.body,"overflowY");l>0&&(m||f==="scroll")&&a&&(document.body.style.width="calc(100% - ".concat(l,"px)")),D(document.body,s.value)}),V(()=>c())},R=e=>{if(!e)return{onClick:y,onMousedown:y,onMouseup:y};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},ee=j({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:k([String,Array,Object])},zIndex:{type:k([String,Number])}}),te={click:e=>e instanceof MouseEvent},oe="overlay";var ne=q({name:"ElOverlay",props:ee,emits:te,setup(e,{slots:o,emit:n}){const s=Y(oe),l=u=>{n("click",u)},{onClick:a,onMousedown:t,onMouseup:c}=R(e.customMaskEvent?void 0:l);return()=>e.mask?G("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:t,onMouseup:c},[L(o,"default")],h.STYLE|h.CLASS|h.PROPS,["onClick","onMouseup","onMousedown"]):Q("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[L(o,"default")])}});const re=ne;export{re as E,ie as a,R as b,de as u};
