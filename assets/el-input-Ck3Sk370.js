import{A as d,X as Fe,i as V,D as J,z as Q,W as je,a0 as ae,d as Pe,I as Ue,U as We,K as k,j as Xe,V as Ye,o as v,c as S,f as m,F as oe,n as g,l as t,P as Y,g as N,e as I,w as M,O as _,Q as ne,a as _e,N as qe,a3 as Je,t as q,M as Qe,R as we}from"./index-Dn-edppu.js";import{J as ke,aq as Ze,a8 as Ge,w as Se,f as et,g as se,D as Ce,v as tt,j as Ie,aA as at,aB as ot,aC as nt,L as st,a9 as lt,E as $,h as rt,_ as it,x as ut}from"./base-Dmc89mKD.js";import{u as ct,b as dt}from"./use-global-config-BzjFfdpB.js";import{u as pt,d as Ee}from"./index-B5hLXLUr.js";import{U as le}from"./event-BB_Ol6Sd.js";import{u as ft,c as vt,a as mt,b as ht}from"./use-form-item-EYKE932x.js";const gt=()=>ke&&/firefox/i.test(window.navigator.userAgent),yt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],xt=/^on[A-Z]/,wt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=d(()=>((u==null?void 0:u.value)||[]).concat(bt)),r=Fe();return r?d(()=>{var i;return Ze(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&xt.test(c))))}):d(()=>({}))};function St(o){const f=V();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const y=c.slice(0,Math.max(0,r)),p=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:y,afterTxt:p}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:y}=f.value;if(i==null||c==null||y==null)return;let p=r.length;if(r.endsWith(c))p=r.length-c.length;else if(r.startsWith(i))p=i.length;else{const x=i[y-1],w=r.indexOf(x,y-1);w!==-1&&(p=w+1)}o.value.setSelectionRange(p,p)}return[u,a]}function Ct(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=Fe(),{emit:i}=r,c=J(),y=V(!1),p=l=>{y.value||(y.value=!0,i("focus",l),f==null||f())},x=l=>{var T;je(u)&&u(l)||l.relatedTarget&&((T=c.value)!=null&&T.contains(l.relatedTarget))||(y.value=!1,i("blur",l),a==null||a())},w=()=>{var l;(l=o.value)==null||l.focus()};return Q(c,l=>{l&&l.setAttribute("tabindex","-1")}),Ge(c,"click",w),{wrapperRef:c,isFocused:y,handleFocus:p,handleBlur:x}}let b;const It="\n  height:0 !important;\n  visibility:hidden !important;\n  ".concat(gt()?"":"overflow:hidden !important;","\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n"),Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(c=>"".concat(c,":").concat(f.getPropertyValue(c))).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:y}=zt(o);b.setAttribute("style","".concat(y,";").concat(It)),b.value=o.value||o.placeholder||"";let p=b.scrollHeight;const x={};c==="border-box"?p=p+i:c==="content-box"&&(p=p-r),b.value="";const w=b.scrollHeight-r;if(Se(f)){let l=w*f;c==="border-box"&&(l=l+r+i),p=Math.max(l,p),x.minHeight="".concat(l,"px")}if(Se(u)){let l=w*u;c==="border-box"&&(l=l+r+i),p=Math.min(l,p)}return x.height="".concat(p,"px"),(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const Ft=et({id:{type:String,default:void 0},size:ct,disabled:Boolean,modelValue:{type:se([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:se([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:se([Object,Array,String]),default:()=>tt({})},autofocus:{type:Boolean,default:!1},...pt(["ariaLabel"])}),Pt={[le]:o=>ae(o),input:o=>ae(o),change:o=>ae(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},kt=["role"],Nt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Vt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Tt=Pe({name:"ElInput",inheritAttrs:!1}),Rt=Pe({...Tt,props:Ft,emits:Pt,setup(o,{expose:f,emit:u}){const a=o,r=Ue(),i=We(),c=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),y=d(()=>[a.type==="textarea"?ie.b():s.b(),s.m(re.value),s.is("disabled",z.value),s.is("exceed",Re.value),{[s.b("group")]:i.prepend||i.append,[s.bm("group","append")]:i.append,[s.bm("group","prepend")]:i.prepend,[s.m("prefix")]:i.prefix||a.prefixIcon,[s.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:W.value&&G.value,[s.b("hidden")]:a.type==="hidden"},r.class]),p=d(()=>[s.e("wrapper"),s.is("focus",K.value)]),x=wt({excludeKeys:d(()=>Object.keys(c.value))}),{form:w,formItem:l}=ft(),{inputId:T}=vt(a,{formItemContext:l}),re=mt(),z=ht(),s=Ie("input"),ie=Ie("textarea"),O=J(),C=J(),Z=V(!1),R=V(!1),D=V(!1),ue=V(),H=J(a.inputStyle),F=d(()=>O.value||C.value),{wrapperRef:Ne,isFocused:K,handleFocus:j,handleBlur:U}=Ct(F,{afterBlur(){var e;a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>Ee()))}}),ce=d(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=d(()=>(l==null?void 0:l.validateState)||""),de=d(()=>B.value&&at[B.value]),Ve=d(()=>D.value?ot:nt),Te=d(()=>[r.style]),pe=d(()=>[a.inputStyle,H.value,{resize:a.resize}]),E=d(()=>st(a.modelValue)?"":String(a.modelValue)),W=d(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(K.value||Z.value)),G=d(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||K.value)),P=d(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=d(()=>E.value.length),Re=d(()=>!!P.value&&ee.value>Number(a.maxlength)),Be=d(()=>!!i.suffix||!!a.suffixIcon||W.value||a.showPassword||P.value||!!B.value&&ce.value),[Ae,Le]=St(O);lt(C,e=>{if(Me(),!P.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:"calc(100% - ".concat(h+15+6,"px)")}});const A=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const h=we(n)?n.minRows:void 0,X=we(n)?n.maxRows:void 0,xe=ze(C.value,h,X);H.value={overflowY:"hidden",...xe},k(()=>{C.value.offsetHeight,H.value=xe})}else H.value={minHeight:ze(C.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(A),L=()=>{const e=F.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Ae();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){L();return}u(le,n),u("input",n),await k(),L(),Le()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,X=h[h.length-1]||"";R.value=!yt(X)},he=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},$e=()=>{D.value=!D.value,ge()},ge=async()=>{var e;await k(),(e=F.value)==null||e.focus()},Oe=()=>{var e;return(e=F.value)==null?void 0:e.blur()},De=e=>{Z.value=!1,u("mouseleave",e)},He=e=>{Z.value=!0,u("mouseenter",e)},ye=e=>{u("keydown",e)},Ke=()=>{var e;(e=F.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return Q(()=>a.modelValue,()=>{var e;k(()=>A()),a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>Ee()))}),Q(E,()=>L()),Q(()=>a.type,async()=>{await k(),L(),A()}),Xe(()=>{!a.formatter&&a.parser,L(),k(A)}),dt({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},d(()=>!!a.label)),f({input:O,textarea:C,ref:F,textareaStyle:pe,autosize:Ye(a,"autosize"),focus:ge,blur:Oe,select:Ke,clear:be,resizeTextarea:A}),(e,n)=>(v(),S("div",ne(t(c),{class:t(y),style:t(Te),role:e.containerRole,onMouseenter:He,onMouseleave:De}),[m(" input "),e.type!=="textarea"?(v(),S(oe,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:g(t(s).be("group","prepend"))},[Y(e.$slots,"prepend")],2)):m("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Ne,class:g(t(p))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:g(t(s).e("prefix"))},[N("span",{class:g(t(s).e("prefix-inner"))},[Y(e.$slots,"prefix"),e.prefixIcon?(v(),I(t($),{key:0,class:g(t(s).e("icon"))},{default:M(()=>[(v(),I(_(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),N("input",ne({id:t(T),ref_key:"input",ref:O,class:t(s).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?D.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(U)&&t(U)(...h)),onChange:fe,onKeydown:ye}),null,16,Nt),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:g(t(s).e("suffix"))},[N("span",{class:g(t(s).e("suffix-inner"))},[!t(W)||!t(G)||!t(P)?(v(),S(oe,{key:0},[Y(e.$slots,"suffix"),e.suffixIcon?(v(),I(t($),{key:0,class:g(t(s).e("icon"))},{default:M(()=>[(v(),I(_(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(W)?(v(),I(t($),{key:1,class:g([t(s).e("icon"),t(s).e("clear")]),onMousedown:qe(t(Je),["prevent"]),onClick:be},{default:M(()=>[_e(t(rt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(G)?(v(),I(t($),{key:2,class:g([t(s).e("icon"),t(s).e("password")]),onClick:$e},{default:M(()=>[(v(),I(_(t(Ve))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(v(),S("span",{key:3,class:g(t(s).e("count"))},[N("span",{class:g(t(s).e("count-inner"))},q(t(ee))+" / "+q(e.maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),I(t($),{key:4,class:g([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(B)==="validating")])},{default:M(()=>[(v(),I(_(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:g(t(s).be("group","append"))},[Y(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(oe,{key:1},[m(" textarea "),N("textarea",ne({id:t(T),ref_key:"textarea",ref:C,class:[t(ie).e("inner"),t(s).is("focus",t(K))]},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(U)&&t(U)(...h)),onChange:fe,onKeydown:ye}),null,16,Vt),t(P)?(v(),S("span",{key:0,style:Qe(ue.value),class:g(t(s).e("count"))},q(t(ee))+" / "+q(e.maxlength),7)):m("v-if",!0)],64))],16,kt))}});var Bt=it(Rt,[["__file","input.vue"]]);const Kt=ut(Bt);export{Kt as E,yt as i,Ct as u};
