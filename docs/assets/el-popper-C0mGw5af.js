import{aq as _t,g as B,J as fe,R as Dt,ar as bt,as as wn,at as On,f as ee,w as Ze,_ as le,j as Be,au as Lt,K as Re,L as Nt,S as Tn,x as Ht,m as wt,o as En}from"./base-DJlLBwFh.js";import{A as R,W as Ne,z as _,j as Ke,X as Cn,l as f,D as Rn,i as F,Y as ke,ac as xn,L as xe,d as L,P as se,J as ue,o as J,c as We,n as $t,M as An,a3 as Ge,x as Wt,aw as Pn,R as Sn,F as Mn,ax as Bn,af as kn,a as Ae,e as de,w as ne,Q as Ye,f as Pe,H as In,V as Te,y as Fn,T as jn,a7 as _n,ak as Dn,ay as Ln,t as Nn}from"./index-B-IKpVg7.js";import{u as qt}from"./index-DWz-Pt_U.js";import{b as Hn,a as Ot,u as $n}from"./constants-BaP7aDkc.js";import{i as Wn,E as qn}from"./focus-trap-D4N9E80X.js";const Y=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},Yr=e=>t=>t.pointerType==="mouse"?e(t):void 0,Kn=_t({type:B(Boolean),default:null}),zn=_t({type:B(Function)}),Kt=e=>{const t="update:".concat(e),n="onUpdate:".concat(e),o=[t],r={[e]:Kn,[n]:zn};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:p,onHide:d})=>{const h=Cn(),{emit:g}=h,m=h.props,v=R(()=>Ne(m[n])),T=R(()=>m[e]===null),c=O=>{i.value!==!0&&(i.value=!0,u&&(u.value=O),Ne(p)&&p(O))},w=O=>{i.value!==!1&&(i.value=!1,u&&(u.value=O),Ne(d)&&d(O))},E=O=>{if(m.disabled===!0||Ne(l)&&!l())return;const A=v.value&&fe;A&&g(t,!0),(T.value||!A)&&c(O)},y=O=>{if(m.disabled===!0||!fe)return;const A=v.value&&fe;A&&g(t,!1),(T.value||!A)&&w(O)},C=O=>{Dt(O)&&(m.disabled&&O?v.value&&g(t,!1):i.value!==O&&(O?c():w()))},x=()=>{i.value?y():E()};return _(()=>m[e],C),s&&h.appContext.config.globalProperties.$route!==void 0&&_(()=>({...h.proxy.$route}),()=>{s.value&&i.value&&y()}),Ke(()=>{C(m[e])}),{hide:y,show:E,toggle:x,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:o}};Kt("modelValue");var $="top",K="bottom",z="right",W="left",Qe="auto",Ie=[$,K,z,W],ve="start",Se="end",Un="clippingParents",zt="viewport",Oe="popper",Vn="reference",Tt=Ie.reduce(function(e,t){return e.concat([t+"-"+ve,t+"-"+Se])},[]),et=[].concat(Ie,[Qe]).reduce(function(e,t){return e.concat([t,t+"-"+ve,t+"-"+Se])},[]),Jn="beforeRead",Zn="read",Gn="afterRead",Xn="beforeMain",Yn="main",Qn="afterMain",eo="beforeWrite",to="write",no="afterWrite",oo=[Jn,Zn,Gn,Xn,Yn,Qn,eo,to,no];function G(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ge(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function tt(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ro(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!q(a)||!G(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function ao(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=i.reduce(function(s,l){return s[l]="",s},{});!q(r)||!G(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var Ut={name:"applyStyles",enabled:!0,phase:"write",fn:ro,effect:ao,requires:["computeStyles"]};function Z(e){return e.split("-")[0]}var ie=Math.max,qe=Math.min,me=Math.round;function he(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(q(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=me(n.width)/i||1),a>0&&(r=me(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function nt(e){var t=he(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Vt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&tt(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Q(e){return U(e).getComputedStyle(e)}function io(e){return["table","td","th"].indexOf(G(e))>=0}function oe(e){return((ge(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(tt(e)?e.host:null)||oe(e)}function Et(e){return!q(e)||Q(e).position==="fixed"?null:e.offsetParent}function so(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&q(e)){var o=Q(e);if(o.position==="fixed")return null}var r=ze(e);for(tt(r)&&(r=r.host);q(r)&&["html","body"].indexOf(G(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Fe(e){for(var t=U(e),n=Et(e);n&&io(n)&&Q(n).position==="static";)n=Et(n);return n&&(G(n)==="html"||G(n)==="body"&&Q(n).position==="static")?t:n||so(e)||t}function ot(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ee(e,t,n){return ie(e,qe(t,n))}function lo(e,t,n){var o=Ee(e,t,n);return o>n?n:o}function Jt(){return{top:0,right:0,bottom:0,left:0}}function Zt(e){return Object.assign({},Jt(),e)}function Gt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var uo=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Zt(typeof e!="number"?e:Gt(e,Ie))};function co(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,u=Z(n.placement),s=ot(u),l=[W,z].indexOf(u)>=0,p=l?"height":"width";if(!(!a||!i)){var d=uo(r.padding,n),h=nt(a),g=s==="y"?$:W,m=s==="y"?K:z,v=n.rects.reference[p]+n.rects.reference[s]-i[s]-n.rects.popper[p],T=i[s]-n.rects.reference[s],c=Fe(a),w=c?s==="y"?c.clientHeight||0:c.clientWidth||0:0,E=v/2-T/2,y=d[g],C=w-h[p]-d[m],x=w/2-h[p]/2+E,O=Ee(y,x,C),A=s;n.modifiersData[o]=(t={},t[A]=O,t.centerOffset=O-x,t)}}function po(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Vt(t.elements.popper,r)||(t.elements.arrow=r))}var fo={name:"arrow",enabled:!0,phase:"main",fn:co,effect:po,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ye(e){return e.split("-")[1]}var vo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function go(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:me(t*r)/r||0,y:me(n*r)/r||0}}function Ct(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,p=e.roundOffsets,d=e.isFixed,h=i.x,g=h===void 0?0:h,m=i.y,v=m===void 0?0:m,T=typeof p=="function"?p({x:g,y:v}):{x:g,y:v};g=T.x,v=T.y;var c=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),E=W,y=$,C=window;if(l){var x=Fe(n),O="clientHeight",A="clientWidth";if(x===U(n)&&(x=oe(n),Q(x).position!=="static"&&u==="absolute"&&(O="scrollHeight",A="scrollWidth")),x=x,r===$||(r===W||r===z)&&a===Se){y=K;var I=d&&x===C&&C.visualViewport?C.visualViewport.height:x[O];v-=I-o.height,v*=s?1:-1}if(r===W||(r===$||r===K)&&a===Se){E=z;var P=d&&x===C&&C.visualViewport?C.visualViewport.width:x[A];g-=P-o.width,g*=s?1:-1}}var M=Object.assign({position:u},l&&vo),D=p===!0?go({x:g,y:v}):{x:g,y:v};if(g=D.x,v=D.y,s){var S;return Object.assign({},M,(S={},S[y]=w?"0":"",S[E]=c?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",S))}return Object.assign({},M,(t={},t[y]=w?v+"px":"",t[E]=c?g+"px":"",t.transform="",t))}function mo(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,i=a===void 0?!0:a,u=n.roundOffsets,s=u===void 0?!0:u,l={placement:Z(t.placement),variation:ye(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ct(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ct(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Xt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mo,data:{}},He={passive:!0};function ho(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,i=o.resize,u=i===void 0?!0:i,s=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(p){p.addEventListener("scroll",n.update,He)}),u&&s.addEventListener("resize",n.update,He),function(){a&&l.forEach(function(p){p.removeEventListener("scroll",n.update,He)}),u&&s.removeEventListener("resize",n.update,He)}}var Yt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ho,data:{}},yo={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return yo[t]})}var bo={start:"end",end:"start"};function Rt(e){return e.replace(/start|end/g,function(t){return bo[t]})}function rt(e){var t=U(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function at(e){return he(oe(e)).left+rt(e).scrollLeft}function wo(e){var t=U(e),n=oe(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:i+at(e),y:u}}function Oo(e){var t,n=oe(e),o=rt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ie(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ie(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+at(e),s=-o.scrollTop;return Q(r||n).direction==="rtl"&&(u+=ie(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function it(e){var t=Q(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Qt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:q(e)&&it(e)?e:Qt(ze(e))}function Ce(e,t){var n;t===void 0&&(t=[]);var o=Qt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=U(o),i=r?[a].concat(a.visualViewport||[],it(o)?o:[]):o,u=t.concat(i);return r?u:u.concat(Ce(ze(i)))}function Xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function To(e){var t=he(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function xt(e,t){return t===zt?Xe(wo(e)):ge(t)?To(t):Xe(Oo(oe(e)))}function Eo(e){var t=Ce(ze(e)),n=["absolute","fixed"].indexOf(Q(e).position)>=0,o=n&&q(e)?Fe(e):e;return ge(o)?t.filter(function(r){return ge(r)&&Vt(r,o)&&G(r)!=="body"}):[]}function Co(e,t,n){var o=t==="clippingParents"?Eo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce(function(u,s){var l=xt(e,s);return u.top=ie(l.top,u.top),u.right=qe(l.right,u.right),u.bottom=qe(l.bottom,u.bottom),u.left=ie(l.left,u.left),u},xt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function en(e){var t=e.reference,n=e.element,o=e.placement,r=o?Z(o):null,a=o?ye(o):null,i=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,s;switch(r){case $:s={x:i,y:t.y-n.height};break;case K:s={x:i,y:t.y+t.height};break;case z:s={x:t.x+t.width,y:u};break;case W:s={x:t.x-n.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?ot(r):null;if(l!=null){var p=l==="y"?"height":"width";switch(a){case ve:s[l]=s[l]-(t[p]/2-n[p]/2);break;case Se:s[l]=s[l]+(t[p]/2-n[p]/2);break}}return s}function Me(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,i=a===void 0?Un:a,u=n.rootBoundary,s=u===void 0?zt:u,l=n.elementContext,p=l===void 0?Oe:l,d=n.altBoundary,h=d===void 0?!1:d,g=n.padding,m=g===void 0?0:g,v=Zt(typeof m!="number"?m:Gt(m,Ie)),T=p===Oe?Vn:Oe,c=e.rects.popper,w=e.elements[h?T:p],E=Co(ge(w)?w:w.contextElement||oe(e.elements.popper),i,s),y=he(e.elements.reference),C=en({reference:y,element:c,strategy:"absolute",placement:r}),x=Xe(Object.assign({},c,C)),O=p===Oe?x:y,A={top:E.top-O.top+v.top,bottom:O.bottom-E.bottom+v.bottom,left:E.left-O.left+v.left,right:O.right-E.right+v.right},I=e.modifiersData.offset;if(p===Oe&&I){var P=I[r];Object.keys(A).forEach(function(M){var D=[z,K].indexOf(M)>=0?1:-1,S=[$,K].indexOf(M)>=0?"y":"x";A[M]+=P[S]*D})}return A}function Ro(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,u=n.flipVariations,s=n.allowedAutoPlacements,l=s===void 0?et:s,p=ye(o),d=p?u?Tt:Tt.filter(function(m){return ye(m)===p}):Ie,h=d.filter(function(m){return l.indexOf(m)>=0});h.length===0&&(h=d);var g=h.reduce(function(m,v){return m[v]=Me(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[Z(v)],m},{});return Object.keys(g).sort(function(m,v){return g[m]-g[v]})}function xo(e){if(Z(e)===Qe)return[];var t=$e(e);return[Rt(e),t,Rt(t)]}function Ao(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!0:i,s=n.fallbackPlacements,l=n.padding,p=n.boundary,d=n.rootBoundary,h=n.altBoundary,g=n.flipVariations,m=g===void 0?!0:g,v=n.allowedAutoPlacements,T=t.options.placement,c=Z(T),w=c===T,E=s||(w||!m?[$e(T)]:xo(T)),y=[T].concat(E).reduce(function(re,X){return re.concat(Z(X)===Qe?Ro(t,{placement:X,boundary:p,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:v}):X)},[]),C=t.rects.reference,x=t.rects.popper,O=new Map,A=!0,I=y[0],P=0;P<y.length;P++){var M=y[P],D=Z(M),S=ye(M)===ve,N=[$,K].indexOf(D)>=0,j=N?"width":"height",k=Me(t,{placement:M,boundary:p,rootBoundary:d,altBoundary:h,padding:l}),b=N?S?z:W:S?K:$;C[j]>x[j]&&(b=$e(b));var H=$e(b),V=[];if(a&&V.push(k[D]<=0),u&&V.push(k[b]<=0,k[H]<=0),V.every(function(re){return re})){I=M,A=!1;break}O.set(M,V)}if(A)for(var je=m?3:1,Ue=function(re){var X=y.find(function(De){var we=O.get(De);if(we)return we.slice(0,re).every(function(ce){return ce})});if(X)return I=X,"break"},be=je;be>0;be--){var _e=Ue(be);if(_e==="break")break}t.placement!==I&&(t.modifiersData[o]._skip=!0,t.placement=I,t.reset=!0)}}var Po={name:"flip",enabled:!0,phase:"main",fn:Ao,requiresIfExists:["offset"],data:{_skip:!1}};function At(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Pt(e){return[$,z,K,W].some(function(t){return e[t]>=0})}function So(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Me(t,{elementContext:"reference"}),u=Me(t,{altBoundary:!0}),s=At(i,o),l=At(u,r,a),p=Pt(s),d=Pt(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":d})}var Mo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:So};function Bo(e,t,n){var o=Z(e),r=[W,$].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[W,z].indexOf(o)>=0?{x:u,y:i}:{x:i,y:u}}function ko(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,i=et.reduce(function(p,d){return p[d]=Bo(d,t.rects,a),p},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=i}var Io={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ko};function Fo(e){var t=e.state,n=e.name;t.modifiersData[n]=en({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var tn={name:"popperOffsets",enabled:!0,phase:"read",fn:Fo,data:{}};function jo(e){return e==="x"?"y":"x"}function _o(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!1:i,s=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.padding,h=n.tether,g=h===void 0?!0:h,m=n.tetherOffset,v=m===void 0?0:m,T=Me(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:p}),c=Z(t.placement),w=ye(t.placement),E=!w,y=ot(c),C=jo(y),x=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,I=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(x){if(a){var S,N=y==="y"?$:W,j=y==="y"?K:z,k=y==="y"?"height":"width",b=x[y],H=b+T[N],V=b-T[j],je=g?-A[k]/2:0,Ue=w===ve?O[k]:A[k],be=w===ve?-A[k]:-O[k],_e=t.elements.arrow,re=g&&_e?nt(_e):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Jt(),De=X[N],we=X[j],ce=Ee(0,O[k],re[k]),dn=E?O[k]/2-je-ce-De-P.mainAxis:Ue-ce-De-P.mainAxis,vn=E?-O[k]/2+je+ce+we+P.mainAxis:be+ce+we+P.mainAxis,Ve=t.elements.arrow&&Fe(t.elements.arrow),gn=Ve?y==="y"?Ve.clientTop||0:Ve.clientLeft||0:0,ct=(S=M==null?void 0:M[y])!=null?S:0,mn=b+dn-ct-gn,hn=b+vn-ct,pt=Ee(g?qe(H,mn):H,b,g?ie(V,hn):V);x[y]=pt,D[y]=pt-b}if(u){var ft,yn=y==="x"?$:W,bn=y==="x"?K:z,ae=x[C],Le=C==="y"?"height":"width",dt=ae+T[yn],vt=ae-T[bn],Je=[$,W].indexOf(c)!==-1,gt=(ft=M==null?void 0:M[C])!=null?ft:0,mt=Je?dt:ae-O[Le]-A[Le]-gt+P.altAxis,ht=Je?ae+O[Le]+A[Le]-gt-P.altAxis:vt,yt=g&&Je?lo(mt,ae,ht):Ee(g?mt:dt,ae,g?ht:vt);x[C]=yt,D[C]=yt-ae}t.modifiersData[o]=D}}var Do={name:"preventOverflow",enabled:!0,phase:"main",fn:_o,requiresIfExists:["offset"]};function Lo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function No(e){return e===U(e)||!q(e)?rt(e):Lo(e)}function Ho(e){var t=e.getBoundingClientRect(),n=me(t.width)/e.offsetWidth||1,o=me(t.height)/e.offsetHeight||1;return n!==1||o!==1}function $o(e,t,n){n===void 0&&(n=!1);var o=q(t),r=q(t)&&Ho(t),a=oe(t),i=he(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||it(a))&&(u=No(t)),q(t)?(s=he(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=at(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function Wo(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!n.has(u)){var s=t.get(u);s&&r(s)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function qo(e){var t=Wo(e);return oo.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function Ko(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function zo(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var St={placement:"bottom",modifiers:[],strategy:"absolute"};function Mt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function st(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?St:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},St,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},p=[],d=!1,h={state:l,setOptions:function(v){var T=typeof v=="function"?v(l.options):v;m(),l.options=Object.assign({},a,l.options,T),l.scrollParents={reference:ge(i)?Ce(i):i.contextElement?Ce(i.contextElement):[],popper:Ce(u)};var c=qo(zo([].concat(o,l.options.modifiers)));return l.orderedModifiers=c.filter(function(w){return w.enabled}),g(),h.update()},forceUpdate:function(){if(!d){var v=l.elements,T=v.reference,c=v.popper;if(Mt(T,c)){l.rects={reference:$o(T,Fe(c),l.options.strategy==="fixed"),popper:nt(c)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(A){return l.modifiersData[A.name]=Object.assign({},A.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var E=l.orderedModifiers[w],y=E.fn,C=E.options,x=C===void 0?{}:C,O=E.name;typeof y=="function"&&(l=y({state:l,options:x,name:O,instance:h})||l)}}}},update:Ko(function(){return new Promise(function(v){h.forceUpdate(),v(l)})}),destroy:function(){m(),d=!0}};if(!Mt(i,u))return h;h.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var T=v.name,c=v.options,w=c===void 0?{}:c,E=v.effect;if(typeof E=="function"){var y=E({state:l,name:T,instance:h,options:w}),C=function(){};p.push(y||C)}})}function m(){p.forEach(function(v){return v()}),p=[]}return h}}st();var Uo=[Yt,tn,Xt,Ut];st({defaultModifiers:Uo});var Vo=[Yt,tn,Xt,Ut,Io,Po,Do,fo,Mo],Jo=st({defaultModifiers:Vo});const Zo=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Go(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=R(()=>{const{onFirstUpdate:s,placement:l,strategy:p,modifiers:d}=f(n);return{onFirstUpdate:s,placement:l||"bottom",strategy:p||"absolute",modifiers:[...d||[],o,{name:"applyStyles",enabled:!1}]}}),a=Rn(),i=F({styles:{popper:{position:f(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return _(r,s=>{const l=f(a);l&&l.setOptions(s)},{deep:!0}),_([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=Jo(s,l,f(r)))}),ke(()=>{u()}),{state:R(()=>{var s;return{...((s=f(a))==null?void 0:s.state)||{}}}),styles:R(()=>f(i).styles),attributes:R(()=>f(i).attributes),update:()=>{var s;return(s=f(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=f(a))==null?void 0:s.forceUpdate()},instanceRef:R(()=>f(a))}};function Go(e){const t=Object.keys(e.elements),n=bt(t.map(r=>[r,e.styles[r]||{}])),o=bt(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function Bt(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return wn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let kt;const nn=()=>{const e=On(),t=Hn(),n=R(()=>"".concat(e.value,"-popper-container-").concat(t.prefix)),o=R(()=>"#".concat(n.value));return{id:n,selector:o}},Xo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Yo=()=>{const{id:e,selector:t}=nn();return xn(()=>{fe&&!kt&&!document.body.querySelector(t.value)&&(kt=Xo(e.value))}),{id:e,selector:t}},Qo=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),er=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=Bt(),{registerTimeout:i,cancelTimeout:u}=Bt();return{onOpen:p=>{a(()=>{o(p);const d=f(n);Ze(d)&&d>0&&i(()=>{r(p)},d)},f(e))},onClose:p=>{u(),a(()=>{r(p)},f(t))}}},on=Symbol("elForwardRef"),tr=e=>{xe(on,{setForwardRef:n=>{e.value=n}})},nr=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),lt=Symbol("popper"),rn=Symbol("popperContent"),or=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],an=ee({role:{type:String,values:or,default:"tooltip"}}),rr=L({name:"ElPopper",inheritAttrs:!1}),ar=L({...rr,props:an,setup(e,{expose:t}){const n=e,o=F(),r=F(),a=F(),i=F(),u=R(()=>n.role),s={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),xe(lt,s),(l,p)=>se(l.$slots,"default")}});var ir=le(ar,[["__file","popper.vue"]]);const sn=ee({arrowOffset:{type:Number,default:5}}),sr=L({name:"ElPopperArrow",inheritAttrs:!1}),lr=L({...sr,props:sn,setup(e,{expose:t}){const n=e,o=Be("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=ue(rn,void 0);return _(()=>n.arrowOffset,u=>{r.value=u}),ke(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(J(),We("span",{ref_key:"arrowRef",ref:a,class:$t(f(o).e("arrow")),style:An(f(i)),"data-popper-arrow":""},null,6))}});var ur=le(lr,[["__file","arrow.vue"]]);const cr="ElOnlyChild",pr=L({name:cr,setup(e,{slots:t,attrs:n}){var o;const r=ue(on),a=nr((o=r==null?void 0:r.setForwardRef)!=null?o:Ge);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,n);if(!u||u.length>1)return null;const s=ln(u);return s?Wt(Pn(s,n),[[a]]):null}}});function ln(e){if(!e)return null;const t=e;for(const n of t){if(Sn(n))switch(n.type){case kn:continue;case Bn:case"svg":return It(n);case Mn:return ln(n.children);default:return n}return It(n)}return null}function It(e){const t=Be("only-child");return Ae("span",{class:t.e("content")},[e])}const un=ee({virtualRef:{type:B(Object)},virtualTriggering:Boolean,onMouseenter:{type:B(Function)},onMouseleave:{type:B(Function)},onClick:{type:B(Function)},onKeydown:{type:B(Function)},onFocus:{type:B(Function)},onBlur:{type:B(Function)},onContextmenu:{type:B(Function)},id:String,open:Boolean}),fr=L({name:"ElPopperTrigger",inheritAttrs:!1}),dr=L({...fr,props:un,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=ue(lt,void 0);tr(r);const a=R(()=>u.value?n.id:void 0),i=R(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=R(()=>{if(o&&o.value!=="tooltip")return o.value}),s=R(()=>u.value?"".concat(n.open):void 0);let l;return Ke(()=>{_(()=>n.virtualRef,p=>{p&&(r.value=Lt(p))},{immediate:!0}),_(r,(p,d)=>{l==null||l(),l=void 0,Re(p)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(h=>{var g;const m=n[h];m&&(p.addEventListener(h.slice(2).toLowerCase(),m),(g=d==null?void 0:d.removeEventListener)==null||g.call(d,h.slice(2).toLowerCase(),m))}),l=_([a,i,u,s],h=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Nt(h[m])?p.removeAttribute(g):p.setAttribute(g,h[m])})},{immediate:!0})),Re(d)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(h=>d.removeAttribute(h))},{immediate:!0})}),ke(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(p,d)=>p.virtualTriggering?Pe("v-if",!0):(J(),de(f(pr),Ye({key:0},p.$attrs,{"aria-controls":f(a),"aria-describedby":f(i),"aria-expanded":f(s),"aria-haspopup":f(u)}),{default:ne(()=>[se(p.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var vr=le(dr,[["__file","trigger.vue"]]);const gr=["fixed","absolute"],mr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:B(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:et,default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},strategy:{type:String,values:gr,default:"absolute"}}),cn=ee({...mr,id:String,style:{type:B([String,Array,Object])},className:{type:B([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:B([String,Array,Object])},popperStyle:{type:B([String,Array,Object])},referenceEl:{type:B(Object)},triggerTargetEl:{type:B(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...qt(["ariaLabel"])}),hr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},yr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...wr(e),...t]};return Or(a,r==null?void 0:r.modifiers),a},br=e=>{if(fe)return Lt(e)};function wr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function Or(e,t){t&&(e.modifiers=[...e.modifiers,...t!=null?t:[]])}const Tr=0,Er=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=ue(lt,void 0),a=F(),i=F(),u=R(()=>({name:"eventListeners",enabled:!!e.visible})),s=R(()=>{var c;const w=f(a),E=(c=f(i))!=null?c:Tr;return{name:"arrow",enabled:!Wn(w),options:{element:w,padding:E}}}),l=R(()=>({onFirstUpdate:()=>{m()},...yr(e,[f(s),f(u)])})),p=R(()=>br(e.referenceEl)||f(o)),{attributes:d,state:h,styles:g,update:m,forceUpdate:v,instanceRef:T}=Zo(p,n,l);return _(T,c=>t.value=c),Ke(()=>{_(()=>{var c;return(c=f(p))==null?void 0:c.getBoundingClientRect()},()=>{m()})}),{attributes:d,arrowRef:a,contentRef:n,instanceRef:T,state:h,styles:g,role:r,forceUpdate:v,update:m}},Cr=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=Tn(),a=Be("popper"),i=R(()=>f(t).popper),u=F(Ze(e.zIndex)?e.zIndex:r()),s=R(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=R(()=>[{zIndex:f(u)},f(n).popper,e.popperStyle||{}]),p=R(()=>o.value==="dialog"?"false":void 0),d=R(()=>f(n).arrow||{});return{ariaModal:p,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Ze(e.zIndex)?e.zIndex:r()}}},Rr=(e,t)=>{const n=F(!1),o=F();return{focusStartRef:o,trapped:n,onFocusAfterReleased:l=>{var p;((p=l.detail)==null?void 0:p.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!n.value&&(l.target&&(o.value=l.target),n.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},xr=L({name:"ElPopperContent"}),Ar=L({...xr,props:cn,emits:hr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:p}=Rr(o,n),{attributes:d,arrowRef:h,contentRef:g,styles:m,instanceRef:v,role:T,update:c}=Er(o),{ariaModal:w,arrowStyle:E,contentAttrs:y,contentClass:C,contentStyle:x,updateZIndex:O}=Cr(o,{styles:m,attributes:d,role:T}),A=ue(Ot,void 0),I=F();xe(rn,{arrowStyle:E,arrowRef:h,arrowOffset:I}),A&&xe(Ot,{...A,addInputId:Ge,removeInputId:Ge});let P;const M=(S=!0)=>{c(),S&&O()},D=()=>{M(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return Ke(()=>{_(()=>o.triggerTargetEl,(S,N)=>{P==null||P(),P=void 0;const j=f(S||g.value),k=f(N||g.value);Re(j)&&(P=_([T,()=>o.ariaLabel,w,()=>o.id],b=>{["role","aria-label","aria-modal","id"].forEach((H,V)=>{Nt(b[V])?j.removeAttribute(H):j.setAttribute(H,b[V])})},{immediate:!0})),k!==j&&Re(k)&&["role","aria-label","aria-modal","id"].forEach(b=>{k.removeAttribute(b)})},{immediate:!0}),_(()=>o.visible,D,{immediate:!0})}),ke(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:M,contentStyle:x}),(S,N)=>(J(),We("div",Ye({ref_key:"contentRef",ref:g},f(y),{style:f(x),class:f(C),tabindex:"-1",onMouseenter:N[0]||(N[0]=j=>S.$emit("mouseenter",j)),onMouseleave:N[1]||(N[1]=j=>S.$emit("mouseleave",j))}),[Ae(f(qn),{trapped:f(a),"trap-on-focus-in":!0,"focus-trap-el":f(g),"focus-start-el":f(r),onFocusAfterTrapped:f(u),onFocusAfterReleased:f(i),onFocusin:f(s),onFocusoutPrevented:f(l),onReleaseRequested:f(p)},{default:ne(()=>[se(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Pr=le(Ar,[["__file","content.vue"]]);const Sr=Ht(ir),ut=Symbol("elTooltip"),pn=ee({...Qo,...cn,appendTo:{type:B([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,visible:{type:B(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...qt(["ariaLabel"])}),fn=ee({...un,disabled:Boolean,trigger:{type:B([String,Array]),default:"hover"},triggerKeys:{type:B(Array),default:()=>[wt.enter,wt.space]}}),{useModelToggleProps:Mr,useModelToggleEmits:Br,useModelToggle:kr}=Kt("visible"),Ir=ee({...an,...Mr,...pn,...fn,...sn,showArrow:{type:Boolean,default:!0}}),Fr=[...Br,"before-show","before-hide","show","hide","open","close"],jr=(e,t)=>In(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{jr(f(e),t)&&n(o)},_r=L({name:"ElTooltipTrigger"}),Dr=L({..._r,props:fn,setup(e,{expose:t}){const n=e,o=Be("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=ue(ut,void 0),p=F(null),d=()=>{if(f(r)||n.disabled)return!0},h=Te(n,"trigger"),g=Y(d,pe(h,"hover",u)),m=Y(d,pe(h,"hover",s)),v=Y(d,pe(h,"click",y=>{y.button===0&&l(y)})),T=Y(d,pe(h,"focus",u)),c=Y(d,pe(h,"focus",s)),w=Y(d,pe(h,"contextmenu",y=>{y.preventDefault(),l(y)})),E=Y(d,y=>{const{code:C}=y;n.triggerKeys.includes(C)&&(y.preventDefault(),l(y))});return t({triggerRef:p}),(y,C)=>(J(),de(f(vr),{id:f(a),"virtual-ref":y.virtualRef,open:f(i),"virtual-triggering":y.virtualTriggering,class:$t(f(o).e("trigger")),onBlur:f(c),onClick:f(v),onContextmenu:f(w),onFocus:f(T),onMouseenter:f(g),onMouseleave:f(m),onKeydown:f(E)},{default:ne(()=>[se(y.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var Lr=le(Dr,[["__file","trigger.vue"]]);const Nr=L({name:"ElTooltipContent",inheritAttrs:!1}),Hr=L({...Nr,props:pn,setup(e,{expose:t}){const n=e,{selector:o}=nn(),r=Be("tooltip"),a=F(null),i=F(!1),{controlled:u,id:s,open:l,trigger:p,onClose:d,onOpen:h,onShow:g,onHide:m,onBeforeShow:v,onBeforeHide:T}=ue(ut,void 0),c=R(()=>n.transition||"".concat(r.namespace.value,"-fade-in-linear")),w=R(()=>n.persistent);ke(()=>{i.value=!0});const E=R(()=>f(w)?!0:f(l)),y=R(()=>n.disabled?!1:f(l)),C=R(()=>n.appendTo||o.value),x=R(()=>{var b;return(b=n.style)!=null?b:{}}),O=R(()=>!f(l)),A=()=>{m()},I=()=>{if(f(u))return!0},P=Y(I,()=>{n.enterable&&f(p)==="hover"&&h()}),M=Y(I,()=>{f(p)==="hover"&&d()}),D=()=>{var b,H;(H=(b=a.value)==null?void 0:b.updatePopper)==null||H.call(b),v==null||v()},S=()=>{T==null||T()},N=()=>{g(),k=En(R(()=>{var b;return(b=a.value)==null?void 0:b.popperContentRef}),()=>{if(f(u))return;f(p)!=="hover"&&d()})},j=()=>{n.virtualTriggering||d()};let k;return _(()=>f(l),b=>{b||k==null||k()},{flush:"post"}),_(()=>n.content,()=>{var b,H;(H=(b=a.value)==null?void 0:b.updatePopper)==null||H.call(b)}),t({contentRef:a}),(b,H)=>(J(),de(_n,{disabled:!b.teleported,to:f(C)},[Ae(jn,{name:f(c),onAfterLeave:A,onBeforeEnter:D,onAfterEnter:N,onBeforeLeave:S},{default:ne(()=>[f(E)?Wt((J(),de(f(Pr),Ye({key:0,id:f(s),ref_key:"contentRef",ref:a},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":f(O),"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,f(x)],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:f(y),"z-index":b.zIndex,onMouseenter:f(P),onMouseleave:f(M),onBlur:j,onClose:f(d)}),{default:ne(()=>[i.value?Pe("v-if",!0):se(b.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Fn,f(y)]]):Pe("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var $r=le(Hr,[["__file","content.vue"]]);const Wr=["innerHTML"],qr={key:1},Kr=L({name:"ElTooltip"}),zr=L({...Kr,props:Ir,emits:Fr,setup(e,{expose:t,emit:n}){const o=e;Yo();const r=$n(),a=F(),i=F(),u=()=>{var c;const w=f(a);w&&((c=w.popperInstanceRef)==null||c.update())},s=F(!1),l=F(),{show:p,hide:d,hasUpdateHandler:h}=kr({indicator:s,toggleReason:l}),{onOpen:g,onClose:m}=er({showAfter:Te(o,"showAfter"),hideAfter:Te(o,"hideAfter"),autoClose:Te(o,"autoClose"),open:p,close:d}),v=R(()=>Dt(o.visible)&&!h.value);xe(ut,{controlled:v,id:r,open:Dn(s),trigger:Te(o,"trigger"),onOpen:c=>{g(c)},onClose:c=>{m(c)},onToggle:c=>{f(s)?m(c):g(c)},onShow:()=>{n("show",l.value)},onHide:()=>{n("hide",l.value)},onBeforeShow:()=>{n("before-show",l.value)},onBeforeHide:()=>{n("before-hide",l.value)},updatePopper:u}),_(()=>o.disabled,c=>{c&&s.value&&(s.value=!1)});const T=c=>{var w,E;const y=(E=(w=i.value)==null?void 0:w.contentRef)==null?void 0:E.popperContentRef,C=(c==null?void 0:c.relatedTarget)||document.activeElement;return y&&y.contains(C)};return Ln(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:T,updatePopper:u,onOpen:g,onClose:m,hide:d}),(c,w)=>(J(),de(f(Sr),{ref_key:"popperRef",ref:a,role:c.role},{default:ne(()=>[Ae(Lr,{disabled:c.disabled,trigger:c.trigger,"trigger-keys":c.triggerKeys,"virtual-ref":c.virtualRef,"virtual-triggering":c.virtualTriggering},{default:ne(()=>[c.$slots.default?se(c.$slots,"default",{key:0}):Pe("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ae($r,{ref_key:"contentRef",ref:i,"aria-label":c.ariaLabel,"boundaries-padding":c.boundariesPadding,content:c.content,disabled:c.disabled,effect:c.effect,enterable:c.enterable,"fallback-placements":c.fallbackPlacements,"hide-after":c.hideAfter,"gpu-acceleration":c.gpuAcceleration,offset:c.offset,persistent:c.persistent,"popper-class":c.popperClass,"popper-style":c.popperStyle,placement:c.placement,"popper-options":c.popperOptions,pure:c.pure,"raw-content":c.rawContent,"reference-el":c.referenceEl,"trigger-target-el":c.triggerTargetEl,"show-after":c.showAfter,strategy:c.strategy,teleported:c.teleported,transition:c.transition,"virtual-triggering":c.virtualTriggering,"z-index":c.zIndex,"append-to":c.appendTo},{default:ne(()=>[se(c.$slots,"content",{},()=>[c.rawContent?(J(),We("span",{key:0,innerHTML:c.content},null,8,Wr)):(J(),We("span",qr,Nn(c.content),1))]),c.showArrow?(J(),de(f(ur),{key:0,"arrow-offset":c.arrowOffset},null,8,["arrow-offset"])):Pe("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Ur=le(zr,[["__file","tooltip.vue"]]);const Qr=Ht(Ur),te=new Map;let Ft;fe&&(document.addEventListener("mousedown",e=>Ft=e),document.addEventListener("mouseup",e=>{for(const t of te.values())for(const{documentHandler:n}of t)n(e,Ft)}));function jt(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:Re(t.arg)&&n.push(t.arg),function(o,r){const a=t.instance.popperRef,i=o.target,u=r==null?void 0:r.target,s=!t||!t.instance,l=!i||!u,p=e.contains(i)||e.contains(u),d=e===i,h=n.length&&n.some(m=>m==null?void 0:m.contains(i))||n.length&&n.includes(u),g=a&&(a.contains(i)||a.contains(u));s||l||p||d||h||g||t.value(o,r)}}const ea={beforeMount(e,t){te.has(e)||te.set(e,[]),te.get(e).push({documentHandler:jt(e,t),bindingFn:t.value})},updated(e,t){te.has(e)||te.set(e,[]);const n=te.get(e),o=n.findIndex(a=>a.bindingFn===t.oldValue),r={documentHandler:jt(e,t),bindingFn:t.value};o>=0?n.splice(o,1,r):n.push(r)},unmounted(e){te.delete(e)}};export{ea as C,Qr as E,pr as O,ut as T,et as a,fn as b,Y as c,pn as u,Yr as w};
