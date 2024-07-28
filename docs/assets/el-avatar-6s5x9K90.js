import{f as ue,ab as We,w as ke,D as R,g as oe,j as x,U as je,E as be,_ as K,x as we,m as $,X as te,Y as de,y as De,s as Re,B as Fe,W as Ee,a9 as qe,v as Ve,ac as Ge,L as Te,H as ge}from"./base-D5akLhLs.js";import{d as N,i as E,A as v,a0 as H,z as U,o as T,c as F,M as xe,l as G,e as X,w as Y,O as Ue,P,n as J,Q as $e,an as Xe,T as _e,J as ae,v as Me,L as fe,j as ye,Y as Oe,a9 as I,x as Pe,y as Ye,F as Ie,X as Ce,B as Je,R as Ke,K as Qe,V as Ze,r as et,g as he,q as tt,t as nt}from"./index-C4LPoDef.js";import{t as ne}from"./aria-nkjrUMQ-.js";import{E as Ne,C as st}from"./el-popper-BV0gag_g.js";import{T as ot}from"./index-riLredlm.js";import{t as le}from"./index-C7WaZoJy.js";import{f as at}from"./vnode-BSCvZwPN.js";const lt=ue({size:{type:[Number,String],values:We,default:"",validator:e=>ke(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:R},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:oe(String),default:"cover"}}),ut={error:e=>e instanceof Event},it=["src","alt","srcset"],rt=N({name:"ElAvatar"}),ct=N({...rt,props:lt,emits:ut,setup(e,{emit:s}){const n=e,r=x("avatar"),t=E(!1),C=v(()=>{const{size:l,icon:m,shape:b}=n,g=[r.b()];return H(l)&&g.push(r.m(l)),m&&g.push(r.m("icon")),b&&g.push(r.m(b)),g}),p=v(()=>{const{size:l}=n;return ke(l)?r.cssVarBlock({size:je(l)||""}):void 0}),h=v(()=>({objectFit:n.fit}));U(()=>n.src,()=>t.value=!1);function u(l){t.value=!0,s("error",l)}return(l,m)=>(T(),F("span",{class:J(G(C)),style:xe(G(p))},[(l.src||l.srcSet)&&!t.value?(T(),F("img",{key:0,src:l.src,alt:l.alt,srcset:l.srcSet,style:xe(G(h)),onError:u},null,44,it)):l.icon?(T(),X(G(be),{key:1},{default:Y(()=>[(T(),X(Ue(l.icon)))]),_:1})):P(l.$slots,"default",{key:2})],6))}});var dt=K(ct,[["__file","avatar.vue"]]);const Dt=we(dt),pt=N({name:"ElCollapseTransition"}),mt=N({...pt,setup(e){const s=x("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},r={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight="".concat(t.scrollHeight,"px"):t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight="".concat(t.scrollHeight,"px"),t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,C)=>(T(),X(_e,$e({name:G(s).b()},Xe(r)),{default:Y(()=>[P(t.$slots,"default")]),_:3},16,["name"]))}});var se=K(mt,[["__file","collapse-transition.vue"]]);se.install=e=>{e.component(se.name,se)};const vt=se;let ft=class{constructor(s,n){this.parent=s,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(s){s===this.subMenuItems.length?s=0:s<0&&(s=this.subMenuItems.length-1),this.subMenuItems[s].focus(),this.subIndex=s}addListeners(){const s=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",r=>{let t=!1;switch(r.code){case $.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case $.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case $.tab:{ne(s,"mouseleave");break}case $.enter:case $.space:{t=!0,r.currentTarget.click();break}}return t&&(r.preventDefault(),r.stopPropagation()),!1})})}},ht=class{constructor(s,n){this.domNode=s,this.submenu=null,this.submenu=null,this.init(n)}init(s){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(".".concat(s,"-menu"));n&&(this.submenu=new ft(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",s=>{let n=!1;switch(s.code){case $.down:{ne(s.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case $.up:{ne(s.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case $.tab:{ne(s.currentTarget,"mouseleave");break}case $.enter:case $.space:{n=!0,s.currentTarget.click();break}}n&&s.preventDefault()})}},bt=class{constructor(s,n){this.domNode=s,this.init(n)}init(s){const n=this.domNode.childNodes;Array.from(n).forEach(r=>{r.nodeType===1&&new ht(r,s)})}};const gt=N({name:"ElMenuCollapseTransition",setup(){const e=x("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,r){te(n,"".concat(e.namespace.value,"-opacity-transition")),n.style.opacity="1",r()},onAfterEnter(n){de(n,"".concat(e.namespace.value,"-opacity-transition")),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),De(n,e.m("collapse"))?(de(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),te(n,e.m("collapse"))):(te(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),de(n,e.m("collapse"))),n.style.width="".concat(n.scrollWidth,"px"),n.style.overflow="hidden"},onLeave(n){te(n,"horizontal-collapse-transition"),n.style.width="".concat(n.dataset.scrollWidth,"px")}}}}});function Mt(e,s,n,r,t,C){return T(),X(_e,$e({mode:"out-in"},e.listeners),{default:Y(()=>[P(e.$slots,"default")]),_:3},16)}var yt=K(gt,[["render",Mt],["__file","menu-collapse-transition.vue"]]);function Be(e,s){const n=v(()=>{let t=e.parent;const C=[s.value];for(;t.type.name!=="ElMenu";)t.props.index&&C.unshift(t.props.index),t=t.parent;return C});return{parentMenu:v(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function It(e){return v(()=>{const n=e.backgroundColor;return n?new ot(n).shade(20).toString():""})}const ze=(e,s)=>{const n=x("menu");return v(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":It(e).value||"","active-color":e.activeTextColor||"",level:"".concat(s)}))},Ct=ue({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:R},expandOpenIcon:{type:R},collapseCloseIcon:{type:R},collapseOpenIcon:{type:R}}),pe="ElSubMenu";var Se=N({name:pe,props:Ct,setup(e,{slots:s,expose:n}){const r=Ce(),{indexPath:t,parentMenu:C}=Be(r,v(()=>e.index)),p=x("menu"),h=x("sub-menu"),u=ae("rootMenu");u||le(pe,"can not inject root menu");const l=ae("subMenu:".concat(C.value.uid));l||le(pe,"can not inject sub menu");const m=E({}),b=E({});let g;const _=E(!1),ie=E(),Q=E(null),B=v(()=>A.value==="horizontal"&&z.value?"bottom-start":"right-start"),L=v(()=>A.value==="horizontal"&&z.value||A.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?k.value?e.expandOpenIcon:e.expandCloseIcon:Re:e.collapseCloseIcon&&e.collapseOpenIcon?k.value?e.collapseOpenIcon:e.collapseCloseIcon:Fe),z=v(()=>l.level===0),q=v(()=>{const i=e.teleported;return i===void 0?z.value:i}),re=v(()=>u.props.collapse?"".concat(p.namespace.value,"-zoom-in-left"):"".concat(p.namespace.value,"-zoom-in-top")),ce=v(()=>A.value==="horizontal"&&z.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),k=v(()=>u.openedMenus.includes(e.index)),W=v(()=>{let i=!1;return Object.values(m.value).forEach(d=>{d.active&&(i=!0)}),Object.values(b.value).forEach(d=>{d.active&&(i=!0)}),i}),A=v(()=>u.props.mode),j=Me({index:e.index,indexPath:t,active:W}),V=ze(u.props,l.level+1),Z=v(()=>{var i;return(i=e.popperOffset)!=null?i:u.props.popperOffset}),D=v(()=>{var i;return(i=e.popperClass)!=null?i:u.props.popperClass}),ee=v(()=>{var i;return(i=e.showTimeout)!=null?i:u.props.showTimeout}),o=v(()=>{var i;return(i=e.hideTimeout)!=null?i:u.props.hideTimeout}),a=()=>{var i,d,y;return(y=(d=(i=Q.value)==null?void 0:i.popperRef)==null?void 0:d.popperInstanceRef)==null?void 0:y.destroy()},c=i=>{i||a()},M=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:t.value,active:W.value})},f=(i,d=ee.value)=>{var y;if(i.type!=="focus"){if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled){l.mouseInChild.value=!0;return}l.mouseInChild.value=!0,g==null||g(),{stop:g}=Ee(()=>{u.openMenu(e.index,t.value)},d),q.value&&((y=C.value.vnode.el)==null||y.dispatchEvent(new MouseEvent("mouseenter")))}},w=(i=!1)=>{var d;if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"){l.mouseInChild.value=!1;return}g==null||g(),l.mouseInChild.value=!1,{stop:g}=Ee(()=>!_.value&&u.closeMenu(e.index,t.value),o.value),q.value&&i&&((d=l.handleMouseleave)==null||d.call(l,!0))};U(()=>u.props.collapse,i=>c(!!i));{const i=y=>{b.value[y.index]=y},d=y=>{delete b.value[y.index]};fe("subMenu:".concat(r.uid),{addSubMenu:i,removeSubMenu:d,handleMouseleave:w,mouseInChild:_,level:l.level+1})}return n({opened:k}),ye(()=>{u.addSubMenu(j),l.addSubMenu(j)}),Oe(()=>{l.removeSubMenu(j),u.removeSubMenu(j)}),()=>{var i;const d=[(i=s.title)==null?void 0:i.call(s),I(be,{class:h.e("icon-arrow"),style:{transform:k.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>H(L.value)?I(r.appContext.components[L.value]):I(L.value)})],y=u.isMenuPopup?I(Ne,{ref:Q,visible:k.value,effect:"light",pure:!0,offset:Z.value,showArrow:!1,persistent:!0,popperClass:D.value,placement:B.value,teleported:q.value,fallbackPlacements:ce.value,transition:re.value,gpuAcceleration:!1},{content:()=>{var S;return I("div",{class:[p.m(A.value),p.m("popup-container"),D.value],onMouseenter:O=>f(O,100),onMouseleave:()=>w(!0),onFocus:O=>f(O,100)},[I("ul",{class:[p.b(),p.m("popup"),p.m("popup-".concat(B.value))],style:V.value},[(S=s.default)==null?void 0:S.call(s)])])},default:()=>I("div",{class:h.e("title"),onClick:M},d)}):I(Ie,{},[I("div",{class:h.e("title"),ref:ie,onClick:M},d),I(vt,{},{default:()=>{var S;return Pe(I("ul",{role:"menu",class:[p.b(),p.m("inline")],style:V.value},[(S=s.default)==null?void 0:S.call(s)]),[[Ye,k.value]])}})]);return I("li",{class:[h.b(),h.is("active",W.value),h.is("opened",k.value),h.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:k.value,onMouseenter:f,onMouseleave:()=>w(),onFocus:f},[y])}}});const St=ue({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:oe(Array),default:()=>Ve([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:R,default:()=>Ge},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),me=e=>Array.isArray(e)&&e.every(s=>H(s)),Et={close:(e,s)=>H(e)&&me(s),open:(e,s)=>H(e)&&me(s),select:(e,s,n,r)=>H(e)&&me(s)&&Ke(n)&&(r===void 0||r instanceof Promise)};var Tt=N({name:"ElMenu",props:St,emits:Et,setup(e,{emit:s,slots:n,expose:r}){const t=Ce(),C=t.appContext.config.globalProperties.$router,p=E(),h=x("menu"),u=x("sub-menu"),l=E(-1),m=E(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),b=E(e.defaultActive),g=E({}),_=E({}),ie=v(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),Q=()=>{const o=b.value&&g.value[b.value];if(!o||e.mode==="horizontal"||e.collapse)return;o.indexPath.forEach(c=>{const M=_.value[c];M&&B(c,M.indexPath)})},B=(o,a)=>{m.value.includes(o)||(e.uniqueOpened&&(m.value=m.value.filter(c=>a.includes(c))),m.value.push(o),s("open",o,a))},L=o=>{const a=m.value.indexOf(o);a!==-1&&m.value.splice(a,1)},z=(o,a)=>{L(o),s("close",o,a)},q=({index:o,indexPath:a})=>{m.value.includes(o)?z(o,a):B(o,a)},re=o=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:a,indexPath:c}=o;if(!(Te(a)||Te(c)))if(e.router&&C){const M=o.route||a,f=C.push(M).then(w=>(w||(b.value=a),w));s("select",a,c,{index:a,indexPath:c,route:M},f)}else b.value=a,s("select",a,c,{index:a,indexPath:c})},ce=o=>{const a=g.value,c=a[o]||b.value&&a[b.value]||a[e.defaultActive];c?b.value=c.index:b.value=o},k=o=>{const a=getComputedStyle(o),c=Number.parseInt(a.marginLeft,10),M=Number.parseInt(a.marginRight,10);return o.offsetWidth+c+M||0},W=()=>{var o,a;if(!p.value)return-1;const c=Array.from((a=(o=p.value)==null?void 0:o.childNodes)!=null?a:[]).filter(O=>O.nodeName!=="#comment"&&(O.nodeName!=="#text"||O.nodeValue)),M=64,f=getComputedStyle(p.value),w=Number.parseInt(f.paddingLeft,10),i=Number.parseInt(f.paddingRight,10),d=p.value.clientWidth-w-i;let y=0,S=0;return c.forEach((O,Le)=>{y+=k(O),y<=d-M&&(S=Le+1)}),S===c.length?-1:S},A=o=>_.value[o].indexPath,j=(o,a=33.34)=>{let c;return()=>{c&&clearTimeout(c),c=setTimeout(()=>{o()},a)}};let V=!0;const Z=()=>{if(l.value===W())return;const o=()=>{l.value=-1,Qe(()=>{l.value=W()})};V?o():j(o)(),V=!1};U(()=>e.defaultActive,o=>{g.value[o]||(b.value=""),ce(o)}),U(()=>e.collapse,o=>{o&&(m.value=[])}),U(g.value,Q);let D;Je(()=>{e.mode==="horizontal"&&e.ellipsis?D=qe(p,Z).stop:D==null||D()});const ee=E(!1);{const o=f=>{_.value[f.index]=f},a=f=>{delete _.value[f.index]};fe("rootMenu",Me({props:e,openedMenus:m,items:g,subMenus:_,activeIndex:b,isMenuPopup:ie,addMenuItem:f=>{g.value[f.index]=f},removeMenuItem:f=>{delete g.value[f.index]},addSubMenu:o,removeSubMenu:a,openMenu:B,closeMenu:z,handleMenuItemClick:re,handleSubMenuClick:q})),fe("subMenu:".concat(t.uid),{addSubMenu:o,removeSubMenu:a,mouseInChild:ee,level:0})}return ye(()=>{e.mode==="horizontal"&&new bt(t.vnode.el,h.namespace.value)}),r({open:a=>{const{indexPath:c}=_.value[a];c.forEach(M=>B(M,c))},close:L,handleResize:Z}),()=>{var o,a;let c=(a=(o=n.default)==null?void 0:o.call(n))!=null?a:[];const M=[];if(e.mode==="horizontal"&&p.value){const d=at(c),y=l.value===-1?d:d.slice(0,l.value),S=l.value===-1?[]:d.slice(l.value);S!=null&&S.length&&e.ellipsis&&(c=y,M.push(I(Se,{index:"sub-menu-more",class:u.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>I(be,{class:u.e("icon-more")},{default:()=>I(e.ellipsisIcon)}),default:()=>S})))}const f=ze(e,0),w=e.closeOnClickOutside?[[st,()=>{m.value.length&&(ee.value||(m.value.forEach(d=>s("close",d,A(d))),m.value=[]))}]]:[],i=Pe(I("ul",{key:String(e.collapse),role:"menubar",ref:p,style:f.value,class:{[h.b()]:!0,[h.m(e.mode)]:!0,[h.m("collapse")]:e.collapse}},[...c,...M]),w);return e.collapseTransition&&e.mode==="vertical"?I(yt,()=>i):i}}});const xt=ue({index:{type:oe([String,null]),default:null},route:{type:oe([String,Object])},disabled:Boolean}),kt={click:e=>H(e.index)&&Array.isArray(e.indexPath)},ve="ElMenuItem",wt=N({name:ve,components:{ElTooltip:Ne},props:xt,emits:kt,setup(e,{emit:s}){const n=Ce(),r=ae("rootMenu"),t=x("menu"),C=x("menu-item");r||le(ve,"can not inject root menu");const{parentMenu:p,indexPath:h}=Be(n,Ze(e,"index")),u=ae("subMenu:".concat(p.value.uid));u||le(ve,"can not inject sub menu");const l=v(()=>e.index===r.activeIndex),m=Me({index:e.index,indexPath:h,active:l}),b=()=>{e.disabled||(r.handleMenuItemClick({index:e.index,indexPath:h.value,route:e.route}),s("click",m))};return ye(()=>{u.addSubMenu(m),r.addMenuItem(m)}),Oe(()=>{u.removeSubMenu(m),r.removeMenuItem(m)}),{parentMenu:p,rootMenu:r,active:l,nsMenu:t,nsMenuItem:C,handleClick:b}}});function $t(e,s,n,r,t,C){const p=et("el-tooltip");return T(),F("li",{class:J([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:s[0]||(s[0]=(...h)=>e.handleClick&&e.handleClick(...h))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(T(),X(p,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:Y(()=>[P(e.$slots,"title")]),default:Y(()=>[he("div",{class:J(e.nsMenu.be("tooltip","trigger"))},[P(e.$slots,"default")],2)]),_:3},8,["effect"])):(T(),F(Ie,{key:1},[P(e.$slots,"default"),P(e.$slots,"title")],64))],2)}var Ae=K(wt,[["render",$t],["__file","menu-item.vue"]]);const _t={title:String},Ot="ElMenuItemGroup",Pt=N({name:Ot,props:_t,setup(){return{ns:x("menu-item-group")}}});function Nt(e,s,n,r,t,C){return T(),F("li",{class:J(e.ns.b())},[he("div",{class:J(e.ns.e("title"))},[e.$slots.title?P(e.$slots,"title",{key:1}):(T(),F(Ie,{key:0},[tt(nt(e.title),1)],64))],2),he("ul",null,[P(e.$slots,"default")])],2)}var He=K(Pt,[["render",Nt],["__file","menu-item-group.vue"]]);const Vt=we(Tt,{MenuItem:Ae,MenuItemGroup:He,SubMenu:Se}),Gt=ge(Ae);ge(He);const Ut=ge(Se);export{Ut as E,Gt as a,Dt as b,Vt as c};
