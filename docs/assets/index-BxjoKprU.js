import{f as Ne,g as oe,_ as V,a8 as De,m as U,E as ge,s as Le,j as re,U as Pe,x as Be,H as be}from"./base-D5akLhLs.js";import{E as we}from"./el-button-DVtG45sK.js";import{c as B,E as Ke,O as Ae,w as fe}from"./el-popper-BV0gag_g.js";import{E as Ge}from"./el-scrollbar-CDQ29gER.js";import{a as ze,E as Ue,c as Ve,b as Ye}from"./el-avatar-6s5x9K90.js";import"./el-tooltip-l0sNRNKZ.js";import{d as G,i as $,J as R,A as C,L as Z,ak as He,V as J,l as T,z as Ie,P as A,r as y,o as g,e as L,w as d,a as w,al as Je,am as je,K as We,Y as qe,c as P,a6 as Qe,Q as j,n as W,f as x,X as he,g as F,O as Xe,N as te,F as X,M as Ze,b as xe,u as eo,ag as oo,s as no,B as to,j as ro,h as me,t as ne,q as Q,p as Ee,m as ye}from"./index-C4LPoDef.js";import{c as lo,E as so,d as ao,a as $e,C as io,b as uo,e as co,f as po,g as fo,F as mo,L as vo}from"./dropdown-0souyqry.js";import{a as _o}from"./use-global-config-B8zSw9bL.js";import{u as Ce}from"./constants-CgBtGoi7.js";import{a as go}from"./use-form-item-Ba4znYgR.js";import{c as bo}from"./castArray-iw6Rl7wz.js";import{c as Te}from"./refs-INITg5PI.js";import{F as wo}from"./focus-trap-BpxeXF_x.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-riLredlm.js";import"./index-C7WaZoJy.js";import"./aria-nkjrUMQ-.js";import"./vnode-BSCvZwPN.js";const Io=Ne({style:{type:oe([String,Array,Object])},currentTabId:{type:oe(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:oe(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:ho,ElCollectionItem:Eo,COLLECTION_INJECTION_KEY:se,COLLECTION_ITEM_INJECTION_KEY:yo}=lo("RovingFocusGroup"),ae=Symbol("elRovingFocusGroup"),Fe=Symbol("elRovingFocusGroupItem"),$o={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Co=(e,o)=>e,To=(e,o,i)=>{const t=Co(e.key);return $o[t]},Fo=(e,o)=>e.map((i,t)=>e[(t+o)%e.length]),ie=e=>{const{activeElement:o}=document;for(const i of e)if(i===o||(i.focus(),o!==document.activeElement))return},ve="currentTabIdChange",_e="rovingFocusGroup.entryFocus",Ro={bubbles:!1,cancelable:!0},ko=G({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Io,emits:[ve,"entryFocus"],setup(e,{emit:o}){var i;const t=$((i=e.currentTabId||e.defaultCurrentTabId)!=null?i:null),f=$(!1),u=$(!1),r=$(null),{getItems:l}=R(se,void 0),m=C(()=>[{outline:"none"},e.style]),h=a=>{o(ve,a)},p=()=>{f.value=!0},_=B(a=>{var v;(v=e.onMousedown)==null||v.call(e,a)},()=>{u.value=!0}),E=B(a=>{var v;(v=e.onFocus)==null||v.call(e,a)},a=>{const v=!T(u),{target:N,currentTarget:k}=a;if(N===k&&v&&!T(f)){const b=new Event(_e,Ro);if(k==null||k.dispatchEvent(b),!b.defaultPrevented){const I=l().filter(M=>M.focusable),S=I.find(M=>M.active),O=I.find(M=>M.id===T(t)),z=[S,O,...I].filter(Boolean).map(M=>M.ref);ie(z)}}u.value=!1}),n=B(a=>{var v;(v=e.onBlur)==null||v.call(e,a)},()=>{f.value=!1}),c=(...a)=>{o("entryFocus",...a)};Z(ae,{currentTabbedId:He(t),loop:J(e,"loop"),tabIndex:C(()=>T(f)?-1:0),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:m,orientation:J(e,"orientation"),dir:J(e,"dir"),onItemFocus:h,onItemShiftTab:p,onBlur:n,onFocus:E,onMousedown:_}),Ie(()=>e.currentTabId,a=>{t.value=a!=null?a:null}),De(r,_e,c)}});function So(e,o,i,t,f,u){return A(e.$slots,"default")}var Oo=V(ko,[["render",So],["__file","roving-focus-group-impl.vue"]]);const Mo=G({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:ho,ElRovingFocusGroupImpl:Oo}});function No(e,o,i,t,f,u){const r=y("el-roving-focus-group-impl"),l=y("el-focus-group-collection");return g(),L(l,null,{default:d(()=>[w(r,Je(je(e.$attrs)),{default:d(()=>[A(e.$slots,"default")]),_:3},16)]),_:3})}var Do=V(Mo,[["render",No],["__file","roving-focus-group.vue"]]);const Lo=G({components:{ElRovingFocusCollectionItem:Eo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:i,loop:t,onItemFocus:f,onItemShiftTab:u}=R(ae,void 0),{getItems:r}=R(se,void 0),l=Ce(),m=$(null),h=B(n=>{o("mousedown",n)},n=>{e.focusable?f(T(l)):n.preventDefault()}),p=B(n=>{o("focus",n)},()=>{f(T(l))}),_=B(n=>{o("keydown",n)},n=>{const{key:c,shiftKey:a,target:v,currentTarget:N}=n;if(c===U.tab&&a){u();return}if(v!==N)return;const k=To(n);if(k){n.preventDefault();let I=r().filter(S=>S.focusable).map(S=>S.ref);switch(k){case"last":{I.reverse();break}case"prev":case"next":{k==="prev"&&I.reverse();const S=I.indexOf(N);I=t.value?Fo(I,S+1):I.slice(S+1);break}}We(()=>{ie(I)})}}),E=C(()=>i.value===T(l));return Z(Fe,{rovingFocusGroupItemRef:m,tabIndex:C(()=>T(E)?0:-1),handleMousedown:h,handleFocus:p,handleKeydown:_}),{id:l,handleKeydown:_,handleFocus:p,handleMousedown:h}}});function Po(e,o,i,t,f,u){const r=y("el-roving-focus-collection-item");return g(),L(r,{id:e.id,focusable:e.focusable,active:e.active},{default:d(()=>[A(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Bo=V(Lo,[["render",Po],["__file","roving-focus-item.vue"]]);const ee=Symbol("elDropdown"),{ButtonGroup:Ko}=we,Ao=G({name:"ElDropdown",components:{ElButton:we,ElButtonGroup:Ko,ElScrollbar:Ge,ElDropdownCollection:so,ElTooltip:Ke,ElRovingFocusGroup:Do,ElOnlyChild:Ae,ElIcon:ge,ArrowDown:Le},props:ao,emits:["visible-change","click","command"],setup(e,{emit:o}){const i=he(),t=re("dropdown"),{t:f}=_o(),u=$(),r=$(),l=$(null),m=$(null),h=$(null),p=$(null),_=$(!1),E=[U.enter,U.space,U.down],n=C(()=>({maxHeight:Pe(e.maxHeight)})),c=C(()=>[t.m(S.value)]),a=C(()=>bo(e.trigger)),v=Ce().value,N=C(()=>e.id||v);Ie([u,a],([s,D],[Y])=>{var ue,ce,pe;(ue=Y==null?void 0:Y.$el)!=null&&ue.removeEventListener&&Y.$el.removeEventListener("pointerenter",K),(ce=s==null?void 0:s.$el)!=null&&ce.removeEventListener&&s.$el.removeEventListener("pointerenter",K),(pe=s==null?void 0:s.$el)!=null&&pe.addEventListener&&D.includes("hover")&&s.$el.addEventListener("pointerenter",K)},{immediate:!0}),qe(()=>{var s,D;(D=(s=u.value)==null?void 0:s.$el)!=null&&D.removeEventListener&&u.value.$el.removeEventListener("pointerenter",K)});function k(){b()}function b(){var s;(s=l.value)==null||s.onClose()}function I(){var s;(s=l.value)==null||s.onOpen()}const S=go();function O(...s){o("command",...s)}function K(){var s,D;(D=(s=u.value)==null?void 0:s.$el)==null||D.focus()}function z(){}function M(){const s=T(m);a.value.includes("hover")&&(s==null||s.focus()),p.value=null}function de(s){p.value=s}function q(s){_.value||(s.preventDefault(),s.stopImmediatePropagation())}function H(){o("visible-change",!0)}function Oe(s){(s==null?void 0:s.type)==="keydown"&&m.value.focus()}function Me(){o("visible-change",!1)}return Z(ee,{contentRef:m,role:C(()=>e.role),triggerId:N,isUsingKeyboard:_,onItemEnter:z,onItemLeave:M}),Z("elDropdown",{instance:i,dropdownSize:S,handleClick:k,commandHandler:O,trigger:J(e,"trigger"),hideOnClick:J(e,"hideOnClick")}),{t:f,ns:t,scrollbar:h,wrapStyle:n,dropdownTriggerKls:c,dropdownSize:S,triggerId:N,triggerKeys:E,currentTabId:p,handleCurrentTabIdChange:de,handlerMainButtonClick:s=>{o("click",s)},handleEntryFocus:q,handleClose:b,handleOpen:I,handleBeforeShowTooltip:H,handleShowTooltip:Oe,handleBeforeHideTooltip:Me,onFocusAfterTrapped:s=>{var D,Y;s.preventDefault(),(Y=(D=m.value)==null?void 0:D.focus)==null||Y.call(D,{preventScroll:!0})},popperRef:l,contentRef:m,triggeringElementRef:u,referenceElementRef:r}}});function Go(e,o,i,t,f,u){var r;const l=y("el-dropdown-collection"),m=y("el-roving-focus-group"),h=y("el-scrollbar"),p=y("el-only-child"),_=y("el-tooltip"),E=y("el-button"),n=y("arrow-down"),c=y("el-icon"),a=y("el-button-group");return g(),P("div",{class:W([e.ns.b(),e.ns.is("disabled",e.disabled)])},[w(_,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(r=e.referenceElementRef)==null?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Qe({content:d(()=>[w(h,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:d(()=>[w(m,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:d(()=>[w(l,null,{default:d(()=>[A(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:d(()=>[w(p,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:d(()=>[A(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(g(),L(a,{key:0},{default:d(()=>[w(E,j({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:d(()=>[A(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),w(E,j({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:d(()=>[w(c,{class:W(e.ns.e("icon"))},{default:d(()=>[w(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):x("v-if",!0)],2)}var zo=V(Ao,[["render",Go],["__file","dropdown.vue"]]);const Uo=G({name:"DropdownItemImpl",components:{ElIcon:ge},props:$e,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const i=re("dropdown"),{role:t}=R(ee,void 0),{collectionItemRef:f}=R(io,void 0),{collectionItemRef:u}=R(yo,void 0),{rovingFocusGroupItemRef:r,tabIndex:l,handleFocus:m,handleKeydown:h,handleMousedown:p}=R(Fe,void 0),_=Te(f,u,r),E=C(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=B(c=>{const{code:a}=c;if(a===U.enter||a===U.space)return c.preventDefault(),c.stopImmediatePropagation(),o("clickimpl",c),!0},h);return{ns:i,itemRef:_,dataset:{[uo]:""},role:E,tabIndex:l,handleFocus:m,handleKeydown:n,handleMousedown:p}}}),Vo=["aria-disabled","tabindex","role"];function Yo(e,o,i,t,f,u){const r=y("el-icon");return g(),P(X,null,[e.divided?(g(),P("li",j({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):x("v-if",!0),F("li",j({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=l=>e.$emit("clickimpl",l)),onFocus:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onKeydown:o[2]||(o[2]=te((...l)=>e.handleKeydown&&e.handleKeydown(...l),["self"])),onMousedown:o[3]||(o[3]=(...l)=>e.handleMousedown&&e.handleMousedown(...l)),onPointermove:o[4]||(o[4]=l=>e.$emit("pointermove",l)),onPointerleave:o[5]||(o[5]=l=>e.$emit("pointerleave",l))}),[e.icon?(g(),L(r,{key:0},{default:d(()=>[(g(),L(Xe(e.icon)))]),_:1})):x("v-if",!0),A(e.$slots,"default")],16,Vo)],64)}var Ho=V(Uo,[["render",Yo],["__file","dropdown-item-impl.vue"]]);const Re=()=>{const e=R("elDropdown",{}),o=C(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Jo=G({name:"ElDropdownItem",components:{ElDropdownCollectionItem:co,ElRovingFocusItem:Bo,ElDropdownItemImpl:Ho},inheritAttrs:!1,props:$e,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:i}){const{elDropdown:t}=Re(),f=he(),u=$(null),r=C(()=>{var n,c;return(c=(n=T(u))==null?void 0:n.textContent)!=null?c:""}),{onItemEnter:l,onItemLeave:m}=R(ee,void 0),h=B(n=>(o("pointermove",n),n.defaultPrevented),fe(n=>{if(e.disabled){m(n);return}const c=n.currentTarget;c===document.activeElement||c.contains(document.activeElement)||(l(n),n.defaultPrevented||c==null||c.focus())})),p=B(n=>(o("pointerleave",n),n.defaultPrevented),fe(n=>{m(n)})),_=B(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var c,a,v;if(e.disabled){n.stopImmediatePropagation();return}(c=t==null?void 0:t.hideOnClick)!=null&&c.value&&((a=t.handleClick)==null||a.call(t)),(v=t.commandHandler)==null||v.call(t,e.command,f,n)}),E=C(()=>({...e,...i}));return{handleClick:_,handlePointerMove:h,handlePointerLeave:p,textContent:r,propsAndAttrs:E}}});function jo(e,o,i,t,f,u){var r;const l=y("el-dropdown-item-impl"),m=y("el-roving-focus-item"),h=y("el-dropdown-collection-item");return g(),L(h,{disabled:e.disabled,"text-value":(r=e.textValue)!=null?r:e.textContent},{default:d(()=>[w(m,{focusable:!e.disabled},{default:d(()=>[w(l,j(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:d(()=>[A(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var ke=V(Jo,[["render",jo],["__file","dropdown-item.vue"]]);const Wo=G({name:"ElDropdownMenu",props:po,setup(e){const o=re("dropdown"),{_elDropdownSize:i}=Re(),t=i.value,{focusTrapRef:f,onKeydown:u}=R(wo,void 0),{contentRef:r,role:l,triggerId:m}=R(ee,void 0),{collectionRef:h,getItems:p}=R(fo,void 0),{rovingFocusGroupRef:_,rovingFocusGroupRootStyle:E,tabIndex:n,onBlur:c,onFocus:a,onMousedown:v}=R(ae,void 0),{collectionRef:N}=R(se,void 0),k=C(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value)]),b=Te(r,h,f,_,N),I=B(O=>{var K;(K=e.onKeydown)==null||K.call(e,O)},O=>{const{currentTarget:K,code:z,target:M}=O;if(K.contains(M),U.tab===z&&O.stopImmediatePropagation(),O.preventDefault(),M!==T(r)||!mo.includes(z))return;const q=p().filter(H=>!H.disabled).map(H=>H.ref);vo.includes(z)&&q.reverse(),ie(q)});return{size:t,rovingFocusGroupRootStyle:E,tabIndex:n,dropdownKls:k,role:l,triggerId:m,dropdownListWrapperRef:b,handleKeydown:O=>{I(O),u(O)},onBlur:c,onFocus:a,onMousedown:v}}}),qo=["role","aria-labelledby"];function Qo(e,o,i,t,f,u){return g(),P("ul",{ref:e.dropdownListWrapperRef,class:W(e.dropdownKls),style:Ze(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...r)=>e.onBlur&&e.onBlur(...r)),onFocus:o[1]||(o[1]=(...r)=>e.onFocus&&e.onFocus(...r)),onKeydown:o[2]||(o[2]=te((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=te((...r)=>e.onMousedown&&e.onMousedown(...r),["self"]))},[A(e.$slots,"default")],46,qo)}var Se=V(Wo,[["render",Qo],["__file","dropdown-menu.vue"]]);const Xo=Be(zo,{DropdownItem:ke,DropdownMenu:Se}),Zo=be(ke),xo=be(Se),en=e=>(Ee("data-v-9f7a7941"),e=e(),ye(),e),on={class:"nav-main"},nn={class:"left"},tn={class:"menu-container"},rn={key:0},ln=en(()=>F("div",{class:"right"},null,-1)),sn=G({__name:"LayoutNav",setup(e){const o=xe(),i=eo(),t=$(""),f=$(),u=$([{name:"首页",index:"/home",icon:"iconfont icon-shouye",subMenu:[]},{name:"题目",index:"/problem",icon:"iconfont icon-timu",subMenu:[{name:"题库",index:"/problem"},{name:"题单",index:"/problem/collection"}]},{name:"比赛",index:"/contest",icon:"iconfont icon-bisai",subMenu:[]},{name:"评测",index:"/Status",icon:"iconfont icon-pingce",subMenu:[]},{name:"动态",index:"/news",icon:"iconfont icon-paiming",subMenu:[]},{name:"关于我们",index:"/about",icon:"iconfont icon-guanyu",subMenu:[]}]),r=oo(),{roleList:l}=no(r),m=p=>{t.value=p,o.push(p)};to(()=>{for(let p of u.value)if(i.path.includes(p.index)){t.value=p.index;return}});const h=C(()=>{if(r.isLoggedIn())return l.value.some(p=>["admin","super"].includes(p))});return ro(async()=>{t.value=i.path,console.log(t.value),t.value=="/"&&(t.value="/home"),m(t.value)}),(p,_)=>{const E=ze,n=Ue,c=Ve,a=Ye,v=Zo,N=xo,k=Xo;return g(),P("div",on,[F("div",nn,[F("div",tn,[w(c,{"default-active":t.value,mode:"horizontal","background-color":"#282828","text-color":"#D9E6EB",onSelect:m,ellipsis:!1},{default:d(()=>[(g(!0),P(X,null,me(u.value,b=>(g(),P(X,{key:b.index},[b.subMenu.length!=0?(g(),L(n,{key:0,index:b.index},{title:d(()=>[F("i",{class:W(b.icon)},null,2),F("span",null,ne(b.name),1)]),default:d(()=>[(g(!0),P(X,null,me(b.subMenu,I=>(g(),L(E,{key:I.index,index:I.index},{default:d(()=>[Q(ne(I.name),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"])):(g(),L(E,{key:1,index:b.index},{default:d(()=>[F("i",{class:W(b.icon)},null,2),F("span",null,ne(b.name),1)]),_:2},1032,["index"]))],64))),128))]),_:1},8,["default-active"]),F("div",{class:"avatar-box",ref_key:"avatarRef",ref:f},[T(r).isLoggedIn()?(g(),L(k,{key:1},{dropdown:d(()=>[w(N,null,{default:d(()=>[h.value?(g(),L(v,{key:0,onClick:_[1]||(_[1]=b=>T(o).push("/admin"))},{default:d(()=>[Q("管理后台")]),_:1})):x("",!0),w(v,{onClick:_[2]||(_[2]=b=>T(o).push("/me"))},{default:d(()=>[Q("个人中心")]),_:1}),w(v,{onClick:T(r).logout},{default:d(()=>[Q("退出登录")]),_:1},8,["onClick"])]),_:1})]),default:d(()=>[w(a,{shape:"square",size:50,src:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"})]),_:1})):(g(),P("div",rn,[F("button",{onClick:_[0]||(_[0]=b=>p.$router.push({name:"login"}))},"登录")]))],512)])]),ln])}}}),an=le(sn,[["__scopeId","data-v-9f7a7941"]]),dn={},un=e=>(Ee("data-v-bf9f7570"),e=e(),ye(),e),cn={class:"footer-box"},pn=un(()=>F("h1",{align:"center",style:{color:"#cccccc"}},"MAI Online Judge",-1)),fn=[pn];function mn(e,o){return g(),P("div",cn,fn)}const vn=le(dn,[["render",mn],["__scopeId","data-v-bf9f7570"]]),_n={class:"container"},gn={class:"top"},bn={class:"mid"},wn={class:"footer"},In=G({__name:"index",setup(e){return(o,i)=>{const t=y("RouterView");return g(),P("div",_n,[F("div",gn,[w(an)]),F("div",bn,[w(t)]),F("div",wn,[w(vn)])])}}}),Un=le(In,[["__scopeId","data-v-3563ddbb"]]);export{Un as default};
