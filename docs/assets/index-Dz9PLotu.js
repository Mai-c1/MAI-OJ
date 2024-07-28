import{d as B,A as d,o as y,c as M,P as V,a as I,w as N,x as Z,g as $,n as v,l as t,M as W,t as q,y as G,T as J,aA as ie,i as E,j as ue,z as de,e as h,f as w,O as ce,F as pe,N as fe,a0 as A,E as K,W as k,a1 as U}from"./index-C4LPoDef.js";import{f as Q,g as S,j as me,w as z,U as F,_ as X,x as ge,D as ye,v as ve,J as Y,I as H,a8 as Ce,a9 as be,E as P,T as he,W as Se,m as Te,K as we,ap as Ne}from"./base-D5akLhLs.js";import{b as R,c as Be}from"./use-global-config-B8zSw9bL.js";const j={},_e=Q({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,dotStyle:{type:S([String,Object,Array])},badgeStyle:{type:S([String,Object,Array])},offset:{type:S(Array),default:[0,0]},dotClass:{type:String},badgeClass:{type:String}}),Ee=["textContent"],Me=B({name:"ElBadge"}),$e=B({...Me,props:_e,setup(s,{expose:n}){const e=s,a=me("badge"),o=d(()=>e.isDot?"":z(e.value)&&z(e.max)?e.max<e.value?"".concat(e.max,"+"):e.value===0&&!e.showZero?"":"".concat(e.value):"".concat(e.value)),p=d(()=>{var l,u,f,m,g,C;return[{backgroundColor:e.color,marginRight:F(-((u=(l=e.offset)==null?void 0:l[0])!=null?u:0)),marginTop:F((m=(f=e.offset)==null?void 0:f[1])!=null?m:0)},(g=e.dotStyle)!=null?g:{},(C=e.badgeStyle)!=null?C:{}]});return R({from:"dot-style",replacement:"badge-style",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},d(()=>!!e.dotStyle)),R({from:"dot-class",replacement:"badge-class",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},d(()=>!!e.dotClass)),n({content:o}),(l,u)=>(y(),M("div",{class:v(t(a).b())},[V(l.$slots,"default"),I(J,{name:"".concat(t(a).namespace.value,"-zoom-in-center"),persisted:""},{default:N(()=>[Z($("sup",{class:v([t(a).e("content"),t(a).em("content",l.type),t(a).is("fixed",!!l.$slots.default),t(a).is("dot",l.isDot),l.dotClass,l.badgeClass]),style:W(t(p)),textContent:q(t(o))},null,14,Ee),[[G,!l.hidden&&(t(o)||l.isDot)]])]),_:1},8,["name"])],2))}});var ke=X($e,[["__file","badge.vue"]]);const ze=ge(ke),ee=["success","info","warning","error"],i=ve({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Y?document.body:void 0}),Ie=Q({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ye,default:i.icon},id:{type:String,default:i.id},message:{type:S([String,Object,Function]),default:i.message},onClose:{type:S(Function),default:i.onClose},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:ee,default:i.type},plain:{type:Boolean,default:i.plain},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),xe={destroy:()=>!0},c=ie([]),Oe=s=>{const n=c.findIndex(o=>o.id===s),e=c[n];let a;return n>0&&(a=c[n-1]),{current:e,prev:a}},De=s=>{const{prev:n}=Oe(s);return n?n.vm.exposed.bottom.value:0},Le=(s,n)=>c.findIndex(a=>a.id===s)>0?16:n,Ae=["id"],Ue=["innerHTML"],Fe=B({name:"ElMessage"}),He=B({...Fe,props:Ie,emits:xe,setup(s,{expose:n}){const e=s,{Close:a}=he,{ns:o,zIndex:p}=Be("message"),{currentZIndex:l,nextZIndex:u}=p,f=E(),m=E(!1),g=E(0);let C;const te=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ne=d(()=>{const r=e.type;return{[o.bm("icon",r)]:r&&H[r]}}),x=d(()=>e.icon||H[e.type]||""),oe=d(()=>De(e.id)),O=d(()=>Le(e.id,e.offset)+oe.value),ae=d(()=>g.value+O.value),le=d(()=>({top:"".concat(O.value,"px"),zIndex:l.value}));function _(){e.duration!==0&&({stop:C}=Se(()=>{T()},e.duration))}function D(){C==null||C()}function T(){m.value=!1}function re({code:r}){r===Te.esc&&T()}return ue(()=>{_(),u(),m.value=!0}),de(()=>e.repeatNum,()=>{D(),_()}),Ce(document,"keydown",re),be(f,()=>{g.value=f.value.getBoundingClientRect().height}),n({visible:m,bottom:ae,close:T}),(r,L)=>(y(),h(J,{name:t(o).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:L[0]||(L[0]=We=>r.$emit("destroy")),persisted:""},{default:N(()=>[Z($("div",{id:r.id,ref_key:"messageRef",ref:f,class:v([t(o).b(),{[t(o).m(r.type)]:r.type},t(o).is("center",r.center),t(o).is("closable",r.showClose),t(o).is("plain",r.plain),r.customClass]),style:W(t(le)),role:"alert",onMouseenter:D,onMouseleave:_},[r.repeatNum>1?(y(),h(t(ze),{key:0,value:r.repeatNum,type:t(te),class:v(t(o).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),t(x)?(y(),h(t(P),{key:1,class:v([t(o).e("icon"),t(ne)])},{default:N(()=>[(y(),h(ce(t(x))))]),_:1},8,["class"])):w("v-if",!0),V(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(y(),M(pe,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),$("p",{class:v(t(o).e("content")),innerHTML:r.message},null,10,Ue)],2112)):(y(),M("p",{key:0,class:v(t(o).e("content"))},q(r.message),3))]),r.showClose?(y(),h(t(P),{key:2,class:v(t(o).e("closeBtn")),onClick:fe(T,["stop"])},{default:N(()=>[I(t(a))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,Ae),[[G,m.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Pe=X(He,[["__file","message.vue"]]);let Re=1;const se=s=>{const n=!s||A(s)||K(s)||k(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(A(e.appendTo)){let a=document.querySelector(e.appendTo);we(a)||(a=document.body),e.appendTo=a}return e},je=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ve=({appendTo:s,...n},e)=>{const a="message_".concat(Re++),o=n.onClose,p=document.createElement("div"),l={...n,id:a,onClose:()=>{o==null||o(),je(g)},onDestroy:()=>{U(null,p)}},u=I(Pe,l,k(l.message)||K(l.message)?{default:k(l.message)?l.message:()=>l.message}:null);u.appContext=e||b._context,U(u,p),s.appendChild(p.firstElementChild);const f=u.component,g={id:a,vnode:u,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:u.component.props};return g},b=(s={},n)=>{if(!Y)return{close:()=>{}};if(z(j.max)&&c.length>=j.max)return{close:()=>{}};const e=se(s);if(e.grouping&&c.length){const o=c.find(({vnode:p})=>{var l;return((l=p.props)==null?void 0:l.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Ve(e,n);return c.push(a),a.handler};ee.forEach(s=>{b[s]=(n={},e)=>{const a=se(n);return b({...a,type:s},e)}});function Ze(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}b.closeAll=Ze;b._context=null;const Ke=Ne(b,"$message");export{Ke as E};
