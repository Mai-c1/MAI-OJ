import{W as N,i as I,A as i,J as me,R as J,Z as tl,z as q,X as Ve,d as se,l as Oe,v as ge,$ as nl,Y as Yl,K as H,x as te,y as Ee,o as m,c as V,P as M,g as R,t as B,n as r,N as L,j as Te,f as $,M as ve,H as F,B as Xl,az as we,a0 as Zl,L as sl,r as K,ab as xl,a as U,w as k,F as Ze,h as xe,q as _e,e as z,S as le,ah as _l,O as Ie}from"./index-B-IKpVg7.js";import{i as et,u as lt,E as tt}from"./el-input-Ckrm2KBb.js";import{u as nt,a as st,E as ot,C as at}from"./el-popper-C0mGw5af.js";import{E as it}from"./el-scrollbar-DmZ_7fZk.js";import{t as ut,E as rt}from"./index-2j8ALnqu.js";import{f as ol,_ as he,j as ne,a9 as G,aB as dt,J as ct,t as pt,w as ft,m as vt,g as fe,D as el,h as mt,s as bt,E as gt,aE as ht,x as yt,H as al}from"./base-DJlLBwFh.js";import{d as St,g as j,a as Ct,u as Ot}from"./use-global-config-CP7RREsb.js";import{b as wt,i as be,d as It}from"./isEqual-D421XMZ4.js";import{u as il}from"./constants-BaP7aDkc.js";import{u as Vt,c as Et,a as Tt}from"./use-form-item-CfHI9IsZ.js";import{d as $t,u as Rt}from"./index-DWz-Pt_U.js";import{U as P,C as ul}from"./event-BB_Ol6Sd.js";import{m as Mt}from"./scroll-1aRBaJ3N.js";import{c as kt}from"./castArray-BJwNa5SD.js";function Dt(e,n,o,p){e.length;for(var u=o+1;u--;)if(n(e[u],u,e))return u;return-1}function Lt(e,n,o){var p=e==null?0:e.length;if(!p)return-1;var u=p-1;return Dt(e,wt(n),u)}const Bt=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Ft=["",void 0,null],Nt=void 0,Wt=ol({emptyValues:Array,valueOnClear:{type:[String,Number,Boolean,Function],default:void 0,validator:e=>N(e)?!e():!e}}),zt=(e,n)=>{let o=St();o.value||(o=I({}));const p=i(()=>e.emptyValues||o.value.emptyValues||Ft),u=i(()=>N(e.valueOnClear)?e.valueOnClear():e.valueOnClear!==void 0?e.valueOnClear:N(o.value.valueOnClear)?o.value.valueOnClear():o.value.valueOnClear!==void 0?o.value.valueOnClear:n!==void 0?n:Nt),y=t=>p.value.includes(t);return p.value.includes(u.value),{emptyValues:p,valueOnClear:u,isEmptyValue:y}},rl=Symbol("ElSelectGroup"),ye=Symbol("ElSelect");function Pt(e,n){const o=me(ye),p=me(rl,{disabled:!1}),u=i(()=>o.props.multiple?b(o.props.modelValue,e.value):b([o.props.modelValue],e.value)),y=i(()=>{if(o.props.multiple){const d=o.props.modelValue||[];return!u.value&&d.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),t=i(()=>e.label||(J(e.value)?"":e.value)),g=i(()=>e.value||e.label||""),f=i(()=>e.disabled||n.groupDisabled||y.value),h=Ve(),b=(d=[],v)=>{if(J(e.value)){const a=o.props.valueKey;return d&&d.some(E=>tl(j(E,a))===j(v,a))}else return d&&d.includes(v)},C=()=>{!e.disabled&&!p.disabled&&(o.states.hoveringIndex=o.optionsArray.indexOf(h.proxy))},O=d=>{const v=new RegExp(Bt(d),"i");n.visible=v.test(t.value)||e.created};return q(()=>t.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),q(()=>e.value,(d,v)=>{const{remote:a,valueKey:E}=o.props;if(be(d,v)||(o.onOptionDestroy(v,h.proxy),o.onOptionCreate(h.proxy)),!e.created&&!a){if(E&&J(d)&&J(v)&&d[E]===v[E])return;o.setSelected()}}),q(()=>p.disabled,()=>{n.groupDisabled=p.disabled},{immediate:!0}),{select:o,currentLabel:t,currentValue:g,itemSelected:u,isDisabled:f,hoverItem:C,updateOption:O}}const At=se({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=ne("select"),o=il(),p=i(()=>[n.be("dropdown","item"),n.is("disabled",Oe(g)),n.is("selected",Oe(t)),n.is("hovering",Oe(O))]),u=ge({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:y,itemSelected:t,isDisabled:g,select:f,hoverItem:h,updateOption:b}=Pt(e,u),{visible:C,hover:O}=nl(u),d=Ve().proxy;f.onOptionCreate(d),Yl(()=>{const a=d.value,{selected:E}=f.states,oe=(f.props.multiple?E:[E]).some(ae=>ae.value===d.value);H(()=>{f.states.cachedOptions.get(a)===d&&!oe&&f.states.cachedOptions.delete(a)}),f.onOptionDestroy(a,d)});function v(){e.disabled!==!0&&u.groupDisabled!==!0&&f.handleOptionSelect(d)}return{ns:n,id:o,containerKls:p,currentLabel:y,itemSelected:t,isDisabled:g,select:f,hoverItem:h,updateOption:b,visible:C,hover:O,selectOptionClick:v,states:u}}}),Kt=["id","aria-disabled","aria-selected"];function Ut(e,n,o,p,u,y){return te((m(),V("li",{id:e.id,class:r(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...t)=>e.hoverItem&&e.hoverItem(...t)),onClick:n[1]||(n[1]=L((...t)=>e.selectOptionClick&&e.selectOptionClick(...t),["stop"]))},[M(e.$slots,"default",{},()=>[R("span",null,B(e.currentLabel),1)])],42,Kt)),[[Ee,e.visible]])}var $e=he(At,[["render",Ut],["__file","option.vue"]]);const Ht=se({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=me(ye),n=ne("select"),o=i(()=>e.props.popperClass),p=i(()=>e.props.multiple),u=i(()=>e.props.fitInputWidth),y=I("");function t(){var g;y.value="".concat((g=e.selectRef)==null?void 0:g.offsetWidth,"px")}return Te(()=>{t(),G(e.selectRef,t)}),{ns:n,minWidth:y,popperClass:o,isMultiple:p,isFitInputWidth:u}}});function Gt(e,n,o,p,u,y){return m(),V("div",{class:r([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ve({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(m(),V("div",{key:0,class:r(e.ns.be("dropdown","header"))},[M(e.$slots,"header")],2)):$("v-if",!0),M(e.$slots,"default"),e.$slots.footer?(m(),V("div",{key:1,class:r(e.ns.be("dropdown","footer"))},[M(e.$slots,"footer")],2)):$("v-if",!0)],6)}var jt=he(Ht,[["render",Gt],["__file","select-dropdown.vue"]]);function qt(e){const n=I(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:y=>{const t=y.target.value,g=t[t.length-1]||"";n.value=!et(g)},handleCompositionEnd:y=>{n.value&&(n.value=!1,N(e)&&e(y))}}}const Qt=11,Jt=(e,n)=>{const{t:o}=Ct(),p=il(),u=ne("select"),y=ne("input"),t=ge({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),g=I(null),f=I(null),h=I(null),b=I(null),C=I(null),O=I(null),d=I(null),v=I(null),a=I(null),E=I(null),Y=I(null),oe=I(null),{wrapperRef:ae,isFocused:Re,handleFocus:cl,handleBlur:Me}=lt(C,{afterFocus(){e.automaticDropdown&&!w.value&&(w.value=!0,t.menuVisibleOnFocus=!0)},beforeBlur(l){var s,c;return((s=h.value)==null?void 0:s.isFocusInsideContent(l))||((c=b.value)==null?void 0:c.isFocusInsideContent(l))},afterBlur(){w.value=!1,t.menuVisibleOnFocus=!1}}),w=I(!1),X=I(),{form:ke,formItem:Z}=Vt(),{inputId:pl}=Et(e,{formItemContext:Z}),{valueOnClear:fl,isEmptyValue:vl}=zt(e),ie=i(()=>e.disabled||(ke==null?void 0:ke.disabled)),Se=i(()=>e.multiple?F(e.modelValue)&&e.modelValue.length>0:!vl(e.modelValue)),ml=i(()=>e.clearable&&!ie.value&&t.inputHovering&&Se.value),De=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),bl=i(()=>u.is("reverse",De.value&&w.value)),Le=i(()=>(Z==null?void 0:Z.validateState)||""),gl=i(()=>dt[Le.value]),hl=i(()=>e.remote?300:0),Be=i(()=>e.loading?e.loadingText||o("el.select.loading"):e.remote&&!t.inputValue&&t.options.size===0?!1:e.filterable&&t.inputValue&&t.options.size>0&&x.value===0?e.noMatchText||o("el.select.noMatch"):t.options.size===0?e.noDataText||o("el.select.noData"):null),x=i(()=>T.value.filter(l=>l.visible).length),T=i(()=>{const l=Array.from(t.options.values()),s=[];return t.optionValues.forEach(c=>{const S=l.findIndex(W=>W.value===c);S>-1&&s.push(l[S])}),s.length>=l.length?s:l}),yl=i(()=>Array.from(t.cachedOptions.values())),Sl=i(()=>{const l=T.value.filter(s=>!s.created).some(s=>s.currentLabel===t.inputValue);return e.filterable&&e.allowCreate&&t.inputValue!==""&&!l}),Fe=()=>{e.filterable&&N(e.filterMethod)||e.filterable&&e.remote&&N(e.remoteMethod)||T.value.forEach(l=>{var s;(s=l.updateOption)==null||s.call(l,t.inputValue)})},Ne=Tt(),Cl=i(()=>["small"].includes(Ne.value)?"small":"default"),Ol=i({get(){return w.value&&Be.value!==!1},set(l){w.value=l}}),wl=i(()=>F(e.modelValue)?e.modelValue.length===0&&!t.inputValue:e.filterable?!t.inputValue:!0),Il=i(()=>{var l;const s=(l=e.placeholder)!=null?l:o("el.select.placeholder");return e.multiple||!Se.value?s:t.selectedLabel});q(()=>e.modelValue,(l,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(t.inputValue="",ue("")),re(),!be(l,s)&&e.validateEvent&&(Z==null||Z.validate("change").catch(c=>$t()))},{flush:"post",deep:!0}),q(()=>w.value,l=>{l?ue(t.inputValue):(t.inputValue="",t.previousQuery=null,t.isBeforeHide=!0),n("visible-change",l)}),q(()=>t.options.entries(),()=>{var l;if(!ct)return;const s=((l=g.value)==null?void 0:l.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!pt(e.modelValue)||!Array.from(s).includes(document.activeElement))&&re(),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value&&We()},{flush:"post"}),q(()=>t.hoveringIndex,l=>{ft(l)&&l>-1?X.value=T.value[l]||{}:X.value={},T.value.forEach(s=>{s.hover=X.value===s})}),Xl(()=>{t.isBeforeHide||Fe()});const ue=l=>{t.previousQuery!==l&&(t.previousQuery=l,e.filterable&&N(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&N(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value?H(We):H(Vl))},We=()=>{const l=T.value.filter(S=>S.visible&&!S.disabled&&!S.states.groupDisabled),s=l.find(S=>S.created),c=l[0];t.hoveringIndex=qe(T.value,s||c)},re=()=>{if(e.multiple)t.selectedLabel="";else{const s=ze(e.modelValue);t.selectedLabel=s.currentLabel,t.selected=s;return}const l=[];F(e.modelValue)&&e.modelValue.forEach(s=>{l.push(ze(s))}),t.selected=l},ze=l=>{let s;const c=we(l).toLowerCase()==="object",S=we(l).toLowerCase()==="null",W=we(l).toLowerCase()==="undefined";for(let A=t.cachedOptions.size-1;A>=0;A--){const D=yl.value[A];if(c?j(D.value,e.valueKey)===j(l,e.valueKey):D.value===l){s={value:l,currentLabel:D.currentLabel,get isDisabled(){return D.isDisabled}};break}}if(s)return s;const Q=c?l.label:!S&&!W?l:"";return{value:l,currentLabel:Q}},Vl=()=>{e.multiple?t.hoveringIndex=T.value.findIndex(l=>t.selected.some(s=>ee(s)===ee(l))):t.hoveringIndex=T.value.findIndex(l=>ee(l)===ee(t.selected))},El=()=>{t.selectionWidth=f.value.getBoundingClientRect().width},Pe=()=>{t.calculatorWidth=O.value.getBoundingClientRect().width},Tl=()=>{t.collapseItemWidth=Y.value.getBoundingClientRect().width},Ce=()=>{var l,s;(s=(l=h.value)==null?void 0:l.updatePopper)==null||s.call(l)},Ae=()=>{var l,s;(s=(l=b.value)==null?void 0:l.updatePopper)==null||s.call(l)},Ke=()=>{t.inputValue.length>0&&!w.value&&(w.value=!0),ue(t.inputValue)},Ue=l=>{if(t.inputValue=l.target.value,e.remote)He();else return Ke()},He=It(()=>{Ke()},hl.value),_=l=>{be(e.modelValue,l)||n(ul,l)},$l=l=>Lt(l,s=>!t.disabledOptions.has(s)),Rl=l=>{if(e.multiple&&l.code!==vt.delete&&l.target.value.length<=0){const s=e.modelValue.slice(),c=$l(s);if(c<0)return;const S=s[c];s.splice(c,1),n(P,s),_(s),n("remove-tag",S)}},Ml=(l,s)=>{const c=t.selected.indexOf(s);if(c>-1&&!ie.value){const S=e.modelValue.slice();S.splice(c,1),n(P,S),_(S),n("remove-tag",s.value)}l.stopPropagation(),ce()},Ge=l=>{l.stopPropagation();const s=e.multiple?[]:fl.value;if(e.multiple)for(const c of t.selected)c.isDisabled&&s.push(c.value);n(P,s),_(s),t.hoveringIndex=-1,w.value=!1,n("clear"),ce()},je=l=>{if(e.multiple){const s=(e.modelValue||[]).slice(),c=qe(s,l.value);c>-1?s.splice(c,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(l.value),n(P,s),_(s),l.created&&ue(""),e.filterable&&!e.reserveKeyword&&(t.inputValue="")}else n(P,l.value),_(l.value),w.value=!1;ce(),!w.value&&H(()=>{de(l)})},qe=(l=[],s)=>{if(!J(s))return l.indexOf(s);const c=e.valueKey;let S=-1;return l.some((W,Q)=>tl(j(W,c))===j(s,c)?(S=Q,!0):!1),S},de=l=>{var s,c,S,W,Q;const pe=F(l)?l[0]:l;let A=null;if(pe!=null&&pe.value){const D=T.value.filter(Xe=>Xe.value===pe.value);D.length>0&&(A=D[0].$el)}if(h.value&&A){const D=(W=(S=(c=(s=h.value)==null?void 0:s.popperRef)==null?void 0:c.contentRef)==null?void 0:S.querySelector)==null?void 0:W.call(S,".".concat(u.be("dropdown","wrap")));D&&Mt(D,A)}(Q=oe.value)==null||Q.handleScroll()},kl=l=>{t.options.set(l.value,l),t.cachedOptions.set(l.value,l),l.disabled&&t.disabledOptions.set(l.value,l)},Dl=(l,s)=>{t.options.get(l)===s&&t.options.delete(l)},{handleCompositionStart:Ll,handleCompositionUpdate:Bl,handleCompositionEnd:Fl}=qt(l=>Ue(l)),Nl=i(()=>{var l,s;return(s=(l=h.value)==null?void 0:l.popperRef)==null?void 0:s.contentRef}),Wl=()=>{t.isBeforeHide=!1,H(()=>de(t.selected))},ce=()=>{var l;(l=C.value)==null||l.focus()},zl=()=>{Qe()},Pl=l=>{Ge(l)},Qe=l=>{if(w.value=!1,Re.value){const s=new FocusEvent("focus",l);H(()=>Me(s))}},Al=()=>{t.inputValue.length>0?t.inputValue="":w.value=!1},Je=()=>{ie.value||(t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:w.value=!w.value)},Kl=()=>{w.value?T.value[t.hoveringIndex]&&je(T.value[t.hoveringIndex]):Je()},ee=l=>J(l.value)?j(l.value,e.valueKey):l.value,Ul=i(()=>T.value.filter(l=>l.visible).every(l=>l.disabled)),Hl=i(()=>e.multiple?e.collapseTags?t.selected.slice(0,e.maxCollapseTags):t.selected:[]),Gl=i(()=>e.multiple?e.collapseTags?t.selected.slice(e.maxCollapseTags):[]:[]),Ye=l=>{if(!w.value){w.value=!0;return}if(!(t.options.size===0||x.value===0)&&!Ul.value){l==="next"?(t.hoveringIndex++,t.hoveringIndex===t.options.size&&(t.hoveringIndex=0)):l==="prev"&&(t.hoveringIndex--,t.hoveringIndex<0&&(t.hoveringIndex=t.options.size-1));const s=T.value[t.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&Ye(l),H(()=>de(X.value))}},jl=()=>{if(!f.value)return 0;const l=window.getComputedStyle(f.value);return Number.parseFloat(l.gap||"6px")},ql=i(()=>{const l=jl(),s=Y.value&&e.maxCollapseTags===1?t.selectionWidth-t.collapseItemWidth-l:t.selectionWidth;return{maxWidth:"".concat(s,"px")}}),Ql=i(()=>({maxWidth:"".concat(t.selectionWidth,"px")})),Jl=i(()=>({width:"".concat(Math.max(t.calculatorWidth,Qt),"px")}));return e.multiple&&!F(e.modelValue)&&n(P,[]),!e.multiple&&F(e.modelValue)&&n(P,""),G(f,El),G(O,Pe),G(a,Ce),G(ae,Ce),G(E,Ae),G(Y,Tl),Te(()=>{re()}),{inputId:pl,contentId:p,nsSelect:u,nsInput:y,states:t,isFocused:Re,expanded:w,optionsArray:T,hoverOption:X,selectSize:Ne,filteredOptionsCount:x,resetCalculatorWidth:Pe,updateTooltip:Ce,updateTagTooltip:Ae,debouncedOnInputChange:He,onInput:Ue,deletePrevTag:Rl,deleteTag:Ml,deleteSelected:Ge,handleOptionSelect:je,scrollToOption:de,hasModelValue:Se,shouldShowPlaceholder:wl,currentPlaceholder:Il,showClose:ml,iconComponent:De,iconReverse:bl,validateState:Le,validateIcon:gl,showNewOption:Sl,updateOptions:Fe,collapseTagSize:Cl,setSelected:re,selectDisabled:ie,emptyText:Be,handleCompositionStart:Ll,handleCompositionUpdate:Bl,handleCompositionEnd:Fl,onOptionCreate:kl,onOptionDestroy:Dl,handleMenuEnter:Wl,handleFocus:cl,focus:ce,blur:zl,handleBlur:Me,handleClearClick:Pl,handleClickOutside:Qe,handleEsc:Al,toggleMenu:Je,selectOption:Kl,getValueKey:ee,navigateOptions:Ye,dropdownMenuVisible:Ol,showTagList:Hl,collapseTagList:Gl,tagStyle:ql,collapseTagStyle:Ql,inputStyle:Jl,popperRef:Nl,inputRef:C,tooltipRef:h,tagTooltipRef:b,calculatorRef:O,prefixRef:d,suffixRef:v,selectRef:g,wrapperRef:ae,selectionRef:f,scrollbarRef:oe,menuRef:a,tagMenuRef:E,collapseItemRef:Y}};var Yt=se({name:"ElOptions",setup(e,{slots:n}){const o=me(ye);let p=[];return()=>{var u,y;const t=(u=n.default)==null?void 0:u.call(n),g=[];function f(h){F(h)&&h.forEach(b=>{var C,O,d,v;const a=(C=(b==null?void 0:b.type)||{})==null?void 0:C.name;a==="ElOptionGroup"?f(!Zl(b.children)&&!F(b.children)&&N((O=b.children)==null?void 0:O.default)?(d=b.children)==null?void 0:d.default():b.children):a==="ElOption"?g.push((v=b.props)==null?void 0:v.value):F(b.children)&&f(b.children)})}return t.length&&f((y=t[0])==null?void 0:y.children),be(g,p)||(p=g,o&&(o.states.optionValues=g)),t}}});const Xt=ol({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:Ot,effect:{type:fe(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:fe(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:nt.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:el,default:mt},fitInputWidth:Boolean,suffixIcon:{type:el,default:bt},tagType:{...ut.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:fe(String),values:st,default:"bottom-start"},fallbackPlacements:{type:fe(Array),default:["bottom-start","top-start","right","left"]},...Wt,...Rt(["ariaLabel"])}),ll="ElSelect",Zt=se({name:ll,componentName:ll,components:{ElInput:tt,ElSelectMenu:jt,ElOption:$e,ElOptions:Yt,ElTag:rt,ElScrollbar:it,ElTooltip:ot,ElIcon:gt},directives:{ClickOutside:at},props:Xt,emits:[P,ul,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const o=Jt(e,n);return sl(ye,ge({props:e,states:o.states,optionsArray:o.optionsArray,handleOptionSelect:o.handleOptionSelect,onOptionCreate:o.onOptionCreate,onOptionDestroy:o.onOptionDestroy,selectRef:o.selectRef,setSelected:o.setSelected})),{...o}}}),xt=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],_t=["textContent"],en={key:1};function ln(e,n,o,p,u,y){const t=K("el-tag"),g=K("el-tooltip"),f=K("el-icon"),h=K("el-option"),b=K("el-options"),C=K("el-scrollbar"),O=K("el-select-menu"),d=xl("click-outside");return te((m(),V("div",{ref:"selectRef",class:r([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:n[16]||(n[16]=v=>e.states.inputHovering=!0),onMouseleave:n[17]||(n[17]=v=>e.states.inputHovering=!1),onClick:n[18]||(n[18]=L((...v)=>e.toggleMenu&&e.toggleMenu(...v),["prevent","stop"]))},[U(g,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:"".concat(e.nsSelect.namespace.value,"-zoom-in-top"),"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[15]||(n[15]=v=>e.states.isBeforeHide=!1)},{default:k(()=>{var v;return[R("div",{ref:"wrapperRef",class:r([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(m(),V("div",{key:0,ref:"prefixRef",class:r(e.nsSelect.e("prefix"))},[M(e.$slots,"prefix")],2)):$("v-if",!0),R("div",{ref:"selectionRef",class:r([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?M(e.$slots,"tag",{key:0},()=>[(m(!0),V(Ze,null,xe(e.showTagList,a=>(m(),V("div",{key:e.getValueKey(a),class:r(e.nsSelect.e("selected-item"))},[U(t,{closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.tagStyle),onClose:E=>e.deleteTag(E,a)},{default:k(()=>[R("span",{class:r(e.nsSelect.e("tags-text"))},[M(e.$slots,"label",{label:a.currentLabel,value:a.value},()=>[_e(B(a.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(m(),z(g,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:k(()=>[R("div",{ref:"collapseItemRef",class:r(e.nsSelect.e("selected-item"))},[U(t,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.collapseTagStyle)},{default:k(()=>[R("span",{class:r(e.nsSelect.e("tags-text"))}," + "+B(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:k(()=>[R("div",{ref:"tagMenuRef",class:r(e.nsSelect.e("selection"))},[(m(!0),V(Ze,null,xe(e.collapseTagList,a=>(m(),V("div",{key:e.getValueKey(a),class:r(e.nsSelect.e("selected-item"))},[U(t,{class:"in-tooltip",closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:E=>e.deleteTag(E,a)},{default:k(()=>[R("span",{class:r(e.nsSelect.e("tags-text"))},[M(e.$slots,"label",{label:a.currentLabel,value:a.value},()=>[_e(B(a.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):$("v-if",!0)]):$("v-if",!0),e.selectDisabled?$("v-if",!0):(m(),V("div",{key:1,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[te(R("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=a=>e.states.inputValue=a),type:"text",class:r([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ve(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((v=e.hoverOption)==null?void 0:v.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[2]||(n[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onKeydown:[n[3]||(n[3]=le(L(a=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=le(L(a=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=le(L((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),n[6]||(n[6]=le(L((...a)=>e.selectOption&&e.selectOption(...a),["stop","prevent"]),["enter"])),n[7]||(n[7]=le(L((...a)=>e.deletePrevTag&&e.deletePrevTag(...a),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:n[9]||(n[9]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:n[10]||(n[10]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onInput:n[11]||(n[11]=(...a)=>e.onInput&&e.onInput(...a)),onClick:n[12]||(n[12]=L((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"]))},null,46,xt),[[_l,e.states.inputValue]]),e.filterable?(m(),V("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:r(e.nsSelect.e("input-calculator")),textContent:B(e.states.inputValue)},null,10,_t)):$("v-if",!0)],2)),e.shouldShowPlaceholder?(m(),V("div",{key:2,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?M(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[R("span",null,B(e.currentPlaceholder),1)]):(m(),V("span",en,B(e.currentPlaceholder),1))],2)):$("v-if",!0)],2),R("div",{ref:"suffixRef",class:r(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(m(),z(f,{key:0,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:k(()=>[(m(),z(Ie(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.showClose&&e.clearIcon?(m(),z(f,{key:1,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:k(()=>[(m(),z(Ie(e.clearIcon)))]),_:1},8,["class","onClick"])):$("v-if",!0),e.validateState&&e.validateIcon?(m(),z(f,{key:2,class:r([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:k(()=>[(m(),z(Ie(e.validateIcon)))]),_:1},8,["class"])):$("v-if",!0)],2)],2)]}),content:k(()=>[U(O,{ref:"menuRef"},{default:k(()=>[e.$slots.header?(m(),V("div",{key:0,class:r(e.nsSelect.be("dropdown","header")),onClick:n[13]||(n[13]=L(()=>{},["stop"]))},[M(e.$slots,"header")],2)):$("v-if",!0),te(U(C,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:r([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:k(()=>[e.showNewOption?(m(),z(h,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):$("v-if",!0),U(b,null,{default:k(()=>[M(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ee,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(m(),V("div",{key:1,class:r(e.nsSelect.be("dropdown","loading"))},[M(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(m(),V("div",{key:2,class:r(e.nsSelect.be("dropdown","empty"))},[M(e.$slots,"empty",{},()=>[R("span",null,B(e.emptyText),1)])],2)):$("v-if",!0),e.$slots.footer?(m(),V("div",{key:3,class:r(e.nsSelect.be("dropdown","footer")),onClick:n[14]||(n[14]=L(()=>{},["stop"]))},[M(e.$slots,"footer")],2)):$("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[d,e.handleClickOutside,e.popperRef]])}var tn=he(Zt,[["render",ln],["__file","select.vue"]]);const nn=se({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=ne("select"),o=I(null),p=Ve(),u=I([]);sl(rl,ge({...nl(e)}));const y=i(()=>u.value.some(h=>h.visible===!0)),t=h=>{var b,C;return((b=h.type)==null?void 0:b.name)==="ElOption"&&!!((C=h.component)!=null&&C.proxy)},g=h=>{const b=kt(h),C=[];return b.forEach(O=>{var d,v;t(O)?C.push(O.component.proxy):(d=O.children)!=null&&d.length?C.push(...g(O.children)):(v=O.component)!=null&&v.subTree&&C.push(...g(O.component.subTree))}),C},f=()=>{u.value=g(p.subTree)};return Te(()=>{f()}),ht(o,f,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:y,ns:n}}});function sn(e,n,o,p,u,y){return te((m(),V("ul",{ref:"groupRef",class:r(e.ns.be("group","wrap"))},[R("li",{class:r(e.ns.be("group","title"))},B(e.label),3),R("li",null,[R("ul",{class:r(e.ns.b("group"))},[M(e.$slots,"default")],2)])],2)),[[Ee,e.visible]])}var dl=he(nn,[["render",sn],["__file","option-group.vue"]]);const Sn=yt(tn,{Option:$e,OptionGroup:dl}),Cn=al($e);al(dl);export{Cn as E,zt as a,Sn as b,Wt as u};
