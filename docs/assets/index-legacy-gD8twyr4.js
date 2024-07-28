!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t,n,o){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,n||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}System.register(["./index-legacy-J1lKYr-z.js","./base-legacy-Drvt3IUB.js","./use-global-config-legacy-DBPuZeCc.js"],(function(e,t){"use strict";var r,i,u,l,c,s,a,f,p,d,v,y,m,g,b,h,C,O,j,x,S,w,k,E,P,T,I,_,L,M,N,D,H,B,z,A,F,W,$;return{setters:[function(e){r=e.d,i=e.i,u=e.A,l=e.j,c=e.o,s=e.e,a=e.w,f=e.x,p=e.g,d=e.n,v=e.l,y=e.M,m=e.O,g=e.f,b=e.t,h=e.P,C=e.c,O=e.F,j=e.y,x=e.N,S=e.a,w=e.T,k=e.E,E=e.a0,P=e.a1},function(e){T=e.f,I=e.D,_=e.g,L=e.I,M=e.a8,N=e.E,D=e._,H=e.Q,B=e.W,z=e.m,A=e.J,F=e.K,W=e.ap},function(e){$=e.c}],execute:function(){var t=["success","info","warning","error"],q=T({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:I},id:{type:String,default:""},message:{type:_([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:_(Function),default:function(){}},onClose:{type:_(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[].concat(t,[""]),default:""},zIndex:Number}),U=["id"],Z=["textContent"],G={key:0},J=["innerHTML"],K=r({name:"ElNotification"}),Q=r(n(n({},K),{},{props:q,emits:{destroy:function(){return!0}},setup:function(e,t){var n=t.expose,r=e,k=$("notification"),E=k.ns,P=k.zIndex,T=P.nextZIndex,I=P.currentZIndex,_=H.Close,D=i(!1),A=void 0,F=u((function(){var e=r.type;return e&&L[r.type]?E.m(e):""})),W=u((function(){return r.type&&L[r.type]||r.icon})),q=u((function(){return r.position.endsWith("right")?"right":"left"})),K=u((function(){return r.position.startsWith("top")?"top":"bottom"})),Q=u((function(){var e;return o(o({},K.value,"".concat(r.offset,"px")),"zIndex",null!=(e=r.zIndex)?e:I.value)}));function R(){if(r.duration>0){var e=B((function(){D.value&&X()}),r.duration);A=e.stop}}function V(){null==A||A()}function X(){D.value=!1}return l((function(){R(),T(),D.value=!0})),M(document,"keydown",(function(e){var t=e.code;t===z.delete||t===z.backspace?V():t===z.esc?D.value&&X():R()})),n({visible:D,close:X}),function(e,t){return c(),s(w,{name:v(E).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:t[1]||(t[1]=function(t){return e.$emit("destroy")}),persisted:""},{default:a((function(){return[f(p("div",{id:e.id,class:d([v(E).b(),e.customClass,v(q)]),style:y(v(Q)),role:"alert",onMouseenter:V,onMouseleave:R,onClick:t[0]||(t[0]=function(){return e.onClick&&e.onClick.apply(e,arguments)})},[v(W)?(c(),s(v(N),{key:0,class:d([v(E).e("icon"),v(F)])},{default:a((function(){return[(c(),s(m(v(W))))]})),_:1},8,["class"])):g("v-if",!0),p("div",{class:d(v(E).e("group"))},[p("h2",{class:d(v(E).e("title")),textContent:b(e.title)},null,10,Z),f(p("div",{class:d(v(E).e("content")),style:y(e.title?void 0:{margin:0})},[h(e.$slots,"default",{},(function(){return[e.dangerouslyUseHTMLString?(c(),C(O,{key:1},[g(" Caution here, message could've been compromised, never use user's input as message "),p("p",{innerHTML:e.message},null,8,J)],2112)):(c(),C("p",G,b(e.message),1))]}))],6),[[j,e.message]]),e.showClose?(c(),s(v(N),{key:0,class:d(v(E).e("closeBtn")),onClick:x(X,["stop"])},{default:a((function(){return[S(v(_))]})),_:1},8,["class","onClick"])):g("v-if",!0)],2)],46,U),[[j,D.value]])]})),_:3},8,["name","onBeforeLeave"])}}})),R=D(Q,[["__file","notification.vue"]]),V={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},X=1,Y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!A)return{close:function(){}};("string"==typeof t||k(t))&&(t={message:t});var r=t.position||"top-right",i=t.offset||0;V[r].forEach((function(e){var t,n=e.vm;i+=((null==(t=n.el)?void 0:t.offsetHeight)||0)+16})),i+=16;var u="notification_".concat(X++),l=t.onClose,c=n(n({},t),{},{offset:i,id:u,onClose:function(){!function(e,t,n){var o=V[t],r=o.findIndex((function(t){var n;return(null==(n=t.vm.component)?void 0:n.props.id)===e}));if(-1===r)return;var i=o[r].vm;if(!i)return;null==n||n(i);var u=i.el.offsetHeight,l=t.split("-")[0];o.splice(r,1);var c=o.length;if(c<1)return;for(var s=r;s<c;s++){var a=o[s].vm,f=a.el,p=a.component,d=Number.parseInt(f.style[l],10)-u-16;p.props.offset=d}}(u,r,l)}}),s=document.body;F(t.appendTo)?s=t.appendTo:E(t.appendTo)&&(s=document.querySelector(t.appendTo)),F(s)||(s=document.body);var a=document.createElement("div"),f=S(R,c,k(c.message)?{default:function(){return c.message}}:null);return f.appContext=null!=o?o:e._context,f.props.onDestroy=function(){P(null,a)},P(f,a),V[r].push({vm:f}),s.appendChild(a.firstElementChild),{close:function(){f.component.exposed.visible.value=!1}}};t.forEach((function(e){Y[e]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return("string"==typeof t||k(t))&&(t={message:t}),Y(n(n({},t),{},{type:e}))}})),Y.closeAll=function(){for(var e=0,t=Object.values(V);e<t.length;e++){t[e].forEach((function(e){e.vm.component.exposed.visible.value=!1}))}},Y._context=null;e("E",W(Y,"$notify"))}}}))}();
