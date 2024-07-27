!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:O(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",g="suspendedYield",v="executing",y="completed",m={};function w(){}function b(){}function x(){}var L={};f(L,u,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(C([])));E&&E!==o&&a.call(E,u)&&(L=E);var _=x.prototype=w.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function P(e,r){function n(o,i,c,u){var l=d(e[o],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function O(t,e,n){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(t,e,n);if("normal"===l.type){if(o=n.done?y:g,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function S(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,i(_,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},k(P.prototype),f(P.prototype,l,(function(){return this})),n.AsyncIterator=P,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new P(p(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(_),f(_,s,"Generator"),f(_,u,(function(){return this})),f(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}System.register(["./base-legacy-BAKEE2vT.js","./el-loading-legacy-CXEZfDoi.js","./el-button-legacy-CFu1sGw3.js","./index-legacy-7hHSqY3I.js","./el-message-legacy-GAwTZcC3.js","./index-legacy-D57Ug-XI.js","./_plugin-vue_export-helper-legacy-DySZQj4h.js","./use-global-config-legacy-CAdA7Qod.js","./use-form-item-legacy-DuiUpGVu.js","./constants-legacy-BVyjabu3.js","./index-legacy-BScUY5pO.js"],(function(t,r){"use strict";var o,a,i,c,u,l,s,f,p,d,h,g,v,y,m,w,b,x,L,j,E,_,k;return{setters:[null,function(t){o=t.v},function(t){a=t.E},function(t){i=t.d,c=t.ag,u=t.i,l=t.o,s=t.c,f=t.g,p=t.l,d=t.x,h=t.ah,g=t.a,v=t.w,y=t.q,m=t.u,w=t.b,b=t.ai,x=t.aj,L=t.t,j=t.p,E=t.m},null,function(t){_=t.E},function(t){k=t._},null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".register-page[data-v-59c2033f]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:#111827}.register-page .register-box[data-v-59c2033f]{width:500px;background-color:#1f2937;display:flex;flex-direction:column;align-items:center;border-radius:10px;padding:30px}.register-page .register-box .header[data-v-59c2033f]{width:90%;padding-top:30px;display:flex;flex-direction:column;align-items:center;color:#fdfdfd}.register-page .register-box .content[data-v-59c2033f]{width:90%;color:#5f6a70}.register-page .register-box .content .row[data-v-59c2033f]{width:100%;display:flex;flex-direction:column;margin-bottom:20px}.register-page .register-box .content .row p[data-v-59c2033f]{margin-bottom:5px;font-size:15px;color:#9ca3af;display:flex;justify-content:space-between;align-items:center}.register-page .register-box .content .row input[data-v-59c2033f]{width:100%;height:40px;background-color:transparent;border:rgba(253,253,253,.2) 1px solid;padding:10px;border-radius:5px;color:#fdfdfd;font-size:16px}.register-page .register-box .content .row input[data-v-59c2033f]:focus{outline:#005bac 1px solid}.register-page .register-box .content .row input[data-v-59c2033f]::placeholder{color:rgba(253,253,253,.2)}.register-page .register-box .content .row .send-code-btn[data-v-59c2033f]{height:40px;margin-left:10px;border-radius:5px;border:none;background-color:#4f46e4;color:#fdfdfd;font-size:14px;cursor:pointer;padding:0 10px}.register-page .register-box .content .row .send-code-btn[data-v-59c2033f]:disabled{background-color:#a1a1aa;cursor:not-allowed}.register-page .register-box .content button[data-v-59c2033f]{width:100%;height:40px;border-radius:10px;border:none;background-color:#4f46e4;color:#fdfdfd;font-size:16px;cursor:pointer}\n",document.head.appendChild(r);var P=function(t){return j("data-v-59c2033f"),t=t(),E(),t},O={class:"register-page"},S={class:"register-box"},I={class:"header"},G=P((function(){return f("h1",null,"注册新账户",-1)})),N={class:"content"},C={class:"row"},T=P((function(){return f("p",null,"Username",-1)})),U={class:"row"},V=P((function(){return f("p",null,"Email",-1)})),z={class:"row"},F=P((function(){return f("p",null,"Verification Code",-1)})),Y={class:"row"},A=P((function(){return f("p",null,"Password",-1)})),q={class:"row"},K=P((function(){return f("p",null,"Confirm Password",-1)})),M=i({__name:"Register",setup:function(t){c();var r=u({loginId:"",email:"",password:"",confirmPassword:"",code:""});m();var i=w(),j=u(!1),E=u(!1),k=u(0),P=null,M=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(k.value>0)){t.next=2;break}return t.abrupt("return");case 2:return clearInterval(P),E.value=!0,t.next=6,b(r.value);case 6:n=t.sent,k.value=60,P=setInterval((function(){k.value>0?k.value--:clearInterval(P)}),1e3),200==n.code?_({message:"验证码已发送至您的邮箱",type:"success"}):_({message:n.msg,type:"error"}),E.value=!1;case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.value.confirmPassword==r.value.password){t.next=3;break}return _({message:"两次密码不一致",type:"error"}),t.abrupt("return");case 3:return j.value=!0,t.next=6,x(r.value);case 6:n=t.sent,console.log(n),200==n.code?i.push({name:"login"}):_({message:n.msg,type:"error"}),j.value=!1;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return function(t,e){var n=a,c=o;return l(),s("div",O,[f("div",S,[f("div",I,[G,f("p",{style:{"font-size":"12px","margin-top":"10px",color:"rgba(215,215,215,0.51)",cursor:"pointer"},onClick:e[0]||(e[0]=function(t){return p(i).push({name:"login"})})}," 已有帐户?点我登录")]),f("div",N,[f("div",C,[T,f("p",null,[d(f("input",{placeholder:"输入您的用户名","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.value.loginId=t})},null,512),[[h,r.value.loginId]])])]),f("div",U,[V,f("p",null,[d(f("input",{type:"email",placeholder:"输入您的邮箱","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.value.email=t})},null,512),[[h,r.value.email]]),g(n,{onClick:M,disabled:E.value,class:"send-code-btn"},{default:v((function(){return[y(L(0==k.value?"发送验证码":k.value),1)]})),_:1},8,["disabled"])])]),f("div",z,[F,f("p",null,[d(f("input",{placeholder:"输入邮箱验证码","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.value.code=t})},null,512),[[h,r.value.code]])])]),f("div",Y,[A,f("p",null,[d(f("input",{type:"password",placeholder:"输入您的密码","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.value.password=t}),"show-password":""},null,512),[[h,r.value.password]])])]),f("div",q,[K,f("p",null,[d(f("input",{type:"password",placeholder:"确认您的密码","onUpdate:modelValue":e[5]||(e[5]=function(t){return r.value.confirmPassword=t}),"show-password":""},null,512),[[h,r.value.confirmPassword]])])]),d((l(),s("button",{onClick:R},[y("注册")])),[[c,j.value]])])])])}}});t("default",k(M,[["__scopeId","data-v-59c2033f"]]))}}}))}();
