import{d as v,A as T,o as l,c as w,g as t,P as m,n as o,l as a,e as c,w as r,a as g,N as k,f as y,M as C,T as N}from"./index-C4LPoDef.js";import{f as M,ab as P,j as V,G as b,E as h,_ as $,x as I}from"./base-D5akLhLs.js";import{a as j}from"./use-form-item-Ba4znYgR.js";const A=M({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:P},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),F={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},G=v({name:"ElTag"}),K=v({...G,props:A,emits:F,setup(n,{emit:i}){const _=n,E=j(),s=V("tag"),p=T(()=>{const{type:e,hit:f,effect:S,closable:B,round:z}=_;return[s.b(),s.is("closable",B),s.m(e||"primary"),s.m(E.value),s.m(S),s.is("hit",f),s.is("round",z)]}),u=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(l(),w("span",{key:0,class:o(a(p)),style:C({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:k(u,["stop"])},{default:r(()=>[g(a(b))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(l(),c(N,{key:1,name:"".concat(a(s).namespace.value,"-zoom-in-center"),appear:""},{default:r(()=>[t("span",{class:o(a(p)),style:C({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(h),{key:0,class:o(a(s).e("close")),onClick:k(u,["stop"])},{default:r(()=>[g(a(b))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)]),_:3},8,["name"]))}});var q=$(K,[["__file","tag.vue"]]);const L=I(q);export{L as E,A as t};
