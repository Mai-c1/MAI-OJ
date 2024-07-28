import{d as j,i as U,A as g,j as J,o as m,e as E,w as N,x,g as C,n as v,l as a,M as z,O as Q,f as _,t as H,P as R,c as D,F as X,y as F,N as Y,a as W,T as ee,E as M,a0 as te,a1 as $}from"./index-B-IKpVg7.js";import{f as oe,D as ne,g as I,I as A,a8 as se,E as O,_ as ie,Q as ae,W as le,m as w,J as re,K as V,ap as ce}from"./base-DJlLBwFh.js";import{c as ue}from"./use-global-config-CP7RREsb.js";const Z=["success","info","warning","error"],fe=oe({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:ne},id:{type:String,default:""},message:{type:I([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:I(Function),default:()=>{}},onClose:{type:I(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...Z,""],default:""},zIndex:Number}),de={destroy:()=>!0},pe=["id"],me=["textContent"],ve={key:0},ye=["innerHTML"],ge=j({name:"ElNotification"}),Ce=j({...ge,props:fe,emits:de,setup(t,{expose:s}){const o=t,{ns:n,zIndex:r}=ue("notification"),{nextZIndex:f,currentZIndex:d}=r,{Close:c}=ae,l=U(!1);let i;const u=g(()=>{const e=o.type;return e&&A[o.type]?n.m(e):""}),p=g(()=>o.type&&A[o.type]||o.icon),S=g(()=>o.position.endsWith("right")?"right":"left"),q=g(()=>o.position.startsWith("top")?"top":"bottom"),G=g(()=>{var e;return{[q.value]:"".concat(o.offset,"px"),zIndex:(e=o.zIndex)!=null?e:d.value}});function k(){o.duration>0&&({stop:i}=le(()=>{l.value&&h()},o.duration))}function L(){i==null||i()}function h(){l.value=!1}function K({code:e}){e===w.delete||e===w.backspace?L():e===w.esc?l.value&&h():k()}return J(()=>{k(),f(),l.value=!0}),se(document,"keydown",K),s({visible:l,close:h}),(e,b)=>(m(),E(ee,{name:a(n).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:b[1]||(b[1]=P=>e.$emit("destroy")),persisted:""},{default:N(()=>[x(C("div",{id:e.id,class:v([a(n).b(),e.customClass,a(S)]),style:z(a(G)),role:"alert",onMouseenter:L,onMouseleave:k,onClick:b[0]||(b[0]=(...P)=>e.onClick&&e.onClick(...P))},[a(p)?(m(),E(a(O),{key:0,class:v([a(n).e("icon"),a(u)])},{default:N(()=>[(m(),E(Q(a(p))))]),_:1},8,["class"])):_("v-if",!0),C("div",{class:v(a(n).e("group"))},[C("h2",{class:v(a(n).e("title")),textContent:H(e.title)},null,10,me),x(C("div",{class:v(a(n).e("content")),style:z(e.title?void 0:{margin:0})},[R(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),D(X,{key:1},[_(" Caution here, message could've been compromised, never use user's input as message "),C("p",{innerHTML:e.message},null,8,ye)],2112)):(m(),D("p",ve,H(e.message),1))])],6),[[F,e.message]]),e.showClose?(m(),E(a(O),{key:0,class:v(a(n).e("closeBtn")),onClick:Y(h,["stop"])},{default:N(()=>[W(a(c))]),_:1},8,["class","onClick"])):_("v-if",!0)],2)],46,pe),[[F,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var he=ie(Ce,[["__file","notification.vue"]]);const T={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},B=16;let be=1;const y=function(t={},s=null){if(!re)return{close:()=>{}};(typeof t=="string"||M(t))&&(t={message:t});const o=t.position||"top-right";let n=t.offset||0;T[o].forEach(({vm:u})=>{var p;n+=(((p=u.el)==null?void 0:p.offsetHeight)||0)+B}),n+=B;const r="notification_".concat(be++),f=t.onClose,d={...t,offset:n,id:r,onClose:()=>{Ee(r,o,f)}};let c=document.body;V(t.appendTo)?c=t.appendTo:te(t.appendTo)&&(c=document.querySelector(t.appendTo)),V(c)||(c=document.body);const l=document.createElement("div"),i=W(he,d,M(d.message)?{default:()=>d.message}:null);return i.appContext=s!=null?s:y._context,i.props.onDestroy=()=>{$(null,l)},$(i,l),T[o].push({vm:i}),c.appendChild(l.firstElementChild),{close:()=>{i.component.exposed.visible.value=!1}}};Z.forEach(t=>{y[t]=(s={})=>((typeof s=="string"||M(s))&&(s={message:s}),y({...s,type:t}))});function Ee(t,s,o){const n=T[s],r=n.findIndex(({vm:i})=>{var u;return((u=i.component)==null?void 0:u.props.id)===t});if(r===-1)return;const{vm:f}=n[r];if(!f)return;o==null||o(f);const d=f.el.offsetHeight,c=s.split("-")[0];n.splice(r,1);const l=n.length;if(!(l<1))for(let i=r;i<l;i++){const{el:u,component:p}=n[i].vm,S=Number.parseInt(u.style[c],10)-d-B;p.props.offset=S}}function Te(){for(const t of Object.values(T))t.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}y.closeAll=Te;y._context=null;const _e=ce(y,"$notify");export{_e as E};
