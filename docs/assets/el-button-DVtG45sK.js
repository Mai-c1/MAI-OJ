import{f as A,D as I,aa as K,g as U,j as V,E as w,_ as P,x as O,H}from"./base-D5akLhLs.js";import{b as J,d as L,u as M}from"./use-global-config-B8zSw9bL.js";import{u as Q,a as R,b as G}from"./use-form-item-Ba4znYgR.js";import{A as b,J as q,i as W,U as X,ax as Y,d as B,o as d,e as g,w as h,c as x,F as Z,P as k,l as i,n as $,O as C,f as T,Q as tt,L as ot,v as et,V as E}from"./index-C4LPoDef.js";import{T as at}from"./index-riLredlm.js";const D=Symbol("buttonGroupContextKey"),st=(o,l)=>{J({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},b(()=>o.type==="text"));const a=q(D,void 0),e=L("button"),{form:n}=Q(),t=R(b(()=>a==null?void 0:a.size)),r=G(),f=W(),c=X(),m=b(()=>o.type||(a==null?void 0:a.type)||""),_=b(()=>{var s,p,v;return(v=(p=o.autoInsertSpace)!=null?p:(s=e.value)==null?void 0:s.autoInsertSpace)!=null?v:!1}),y=b(()=>o.tag==="button"?{ariaDisabled:r.value||o.loading,disabled:r.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{}),S=b(()=>{var s;const p=(s=c.default)==null?void 0:s.call(c);if(_.value&&(p==null?void 0:p.length)===1){const v=p[0];if((v==null?void 0:v.type)===Y){const j=v.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(j.trim())}}return!1});return{_disabled:r,_size:t,_type:m,_ref:f,_props:y,shouldAddSpace:S,handleClick:s=>{o.nativeType==="reset"&&(n==null||n.resetFields()),l("click",s)}}},nt=["default","primary","success","warning","info","danger","text",""],lt=["button","submit","reset"],N=A({size:M,disabled:Boolean,type:{type:String,values:nt,default:""},icon:{type:I},nativeType:{type:String,values:lt,default:"button"},loading:Boolean,loadingIcon:{type:I,default:()=>K},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:U([String,Object]),default:"button"}}),rt={click:o=>o instanceof MouseEvent};function u(o,l=20){return o.mix("#141414",l).toString()}function it(o){const l=G(),a=V("button");return b(()=>{let e={};const n=o.color;if(n){const t=new at(n),r=o.dark?t.tint(20).toString():u(t,20);if(o.plain)e=a.cssVarBlock({"bg-color":o.dark?u(t,90):t.tint(90).toString(),"text-color":n,"border-color":o.dark?u(t,50):t.tint(50).toString(),"hover-text-color":"var(".concat(a.cssVarName("color-white"),")"),"hover-bg-color":n,"hover-border-color":n,"active-bg-color":r,"active-text-color":"var(".concat(a.cssVarName("color-white"),")"),"active-border-color":r}),l.value&&(e[a.cssVarBlockName("disabled-bg-color")]=o.dark?u(t,90):t.tint(90).toString(),e[a.cssVarBlockName("disabled-text-color")]=o.dark?u(t,50):t.tint(50).toString(),e[a.cssVarBlockName("disabled-border-color")]=o.dark?u(t,80):t.tint(80).toString());else{const f=o.dark?u(t,30):t.tint(30).toString(),c=t.isDark()?"var(".concat(a.cssVarName("color-white"),")"):"var(".concat(a.cssVarName("color-black"),")");if(e=a.cssVarBlock({"bg-color":n,"text-color":c,"border-color":n,"hover-bg-color":f,"hover-text-color":c,"hover-border-color":f,"active-bg-color":r,"active-border-color":r}),l.value){const m=o.dark?u(t,50):t.tint(50).toString();e[a.cssVarBlockName("disabled-bg-color")]=m,e[a.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":"var(".concat(a.cssVarName("color-white"),")"),e[a.cssVarBlockName("disabled-border-color")]=m}}}return e})}const ct=B({name:"ElButton"}),ut=B({...ct,props:N,emits:rt,setup(o,{expose:l,emit:a}){const e=o,n=it(e),t=V("button"),{_ref:r,_size:f,_type:c,_disabled:m,_props:_,shouldAddSpace:y,handleClick:S}=st(e,a),z=b(()=>[t.b(),t.m(c.value),t.m(f.value),t.is("disabled",m.value),t.is("loading",e.loading),t.is("plain",e.plain),t.is("round",e.round),t.is("circle",e.circle),t.is("text",e.text),t.is("link",e.link),t.is("has-bg",e.bg)]);return l({ref:r,size:f,type:c,disabled:m,shouldAddSpace:y}),(s,p)=>(d(),g(C(s.tag),tt({ref_key:"_ref",ref:r},i(_),{class:i(z),style:i(n),onClick:i(S)}),{default:h(()=>[s.loading?(d(),x(Z,{key:0},[s.$slots.loading?k(s.$slots,"loading",{key:0}):(d(),g(i(w),{key:1,class:$(i(t).is("loading"))},{default:h(()=>[(d(),g(C(s.loadingIcon)))]),_:1},8,["class"]))],64)):s.icon||s.$slots.icon?(d(),g(i(w),{key:1},{default:h(()=>[s.icon?(d(),g(C(s.icon),{key:0})):k(s.$slots,"icon",{key:1})]),_:3})):T("v-if",!0),s.$slots.default?(d(),x("span",{key:2,class:$({[i(t).em("text","expand")]:i(y)})},[k(s.$slots,"default")],2)):T("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var dt=P(ut,[["__file","button.vue"]]);const bt={size:N.size,type:N.type},ft=B({name:"ElButtonGroup"}),mt=B({...ft,props:bt,setup(o){const l=o;ot(D,et({size:E(l,"size"),type:E(l,"type")}));const a=V("button");return(e,n)=>(d(),x("div",{class:$("".concat(i(a).b("group")))},[k(e.$slots,"default")],2))}});var F=P(mt,[["__file","button-group.vue"]]);const Bt=O(dt,{ButtonGroup:F});H(F);export{Bt as E};
