!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,u=Object.defineProperty||function(t,e,n){t[e]=n.value},l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(n){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),l=new P(r||[]);return u(a,"_invoke",{value:O(t,n,l)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var v="suspendedStart",m="suspendedYield",y="executing",h="completed",g={};function b(){}function x(){}function w(){}var _={};d(_,i,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(T([])));L&&L!==o&&a.call(L,i)&&(_=L);var E=w.prototype=b.prototype=Object.create(_);function V(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,n){function r(o,u,l,i){var c=p(e[o],e,u);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==t(d)&&a.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,l,i)}),(function(t){r("throw",t,l,i)})):n.resolve(d).then((function(t){s.value=t,l(s)}),(function(t){return r("throw",t,l,i)}))}i(c.arg)}var o;u(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}})}function O(t,e,r){var o=v;return function(a,u){if(o===y)throw Error("Generator is already running");if(o===h){if("throw"===a)throw u;return{value:n,done:!0}}for(r.method=a,r.arg=u;;){var l=r.delegate;if(l){var i=C(l,r);if(i){if(i===g)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var c=p(t,e,r);if("normal"===c.type){if(o=r.done?h:m,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=h,r.method="throw",r.arg=c.arg)}}}function C(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var u=a.arg;return u?u.done?(e[t.resultName]=u.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,u=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return u.next=u}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=w,u(E,"constructor",{value:w,configurable:!0}),u(w,"constructor",{value:x,configurable:!0}),x.displayName=d(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},V(k.prototype),d(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var u=new k(f(t,e,n,o),a);return r.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},V(E),d(E,s,"Generator"),d(E,i,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(U),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return l.type="throw",l.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],l=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var i=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),U(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;U(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,a,u){try{var l=t[a](u),i=l.value}catch(t){return void n(t)}l.done?e(i):Promise.resolve(i).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var u=t.apply(e,r);function l(t){n(u,o,a,l,i,"next",t)}function i(t){n(u,o,a,l,i,"throw",t)}l(void 0)}))}}System.register(["./base-legacy-BAKEE2vT.js","./el-card-legacy-4VhqjHF3.js","./el-dialog-legacy-CpABJppn.js","./el-overlay-legacy-DlXoeXXi.js","./el-form-item-legacy-DIJpuAaa.js","./el-button-legacy-CFu1sGw3.js","./el-radio-group-legacy-Drr172VD.js","./el-radio-button-legacy-3cdC3Wsl.js","./el-input-legacy-DpFLPZmY.js","./RichTextEditor.vue_vue_type_script_setup_true_lang-legacy-B2IOuIp1.js","./problem-legacy-Dzejk6g_.js","./el-message-box-legacy-o-HNjohT.js","./index-legacy-D57Ug-XI.js","./index-legacy-7hHSqY3I.js","./_plugin-vue_export-helper-legacy-DySZQj4h.js","./use-global-config-legacy-CAdA7Qod.js","./focus-trap-legacy-BJsJpRMK.js","./refs-legacy-BIKdINBi.js","./event-legacy-CFsZpNd4.js","./constants-legacy-BVyjabu3.js","./index-legacy-5oDfd-WS.js","./scroll-legacy-CJQdVSBF.js","./vnode-legacy-1jfd07XK.js","./castArray-legacy-Cn6oJpd5.js","./use-form-item-legacy-DuiUpGVu.js","./_baseClone-legacy-Bpvc8q9Y.js","./_initCloneObject-legacy-kt9uUOIA.js","./index-legacy-BScUY5pO.js","./httpAdmin-legacy-X87Zr5lj.js","./aria-legacy-DZyX2fkp.js","./validator-legacy-KoDCq-_9.js"],(function(t,n){"use strict";var o,a,u,l,i,c,s,d,f,p,v,m,y,h,g,b,x,w,_,j,L,E,V,k,O,C,S,U,P,T,G,I,N,F;return{setters:[function(t){o=t.r,a=t.E},function(t){u=t.E},function(t){l=t.E},null,function(t){i=t.E,c=t.a},function(t){s=t.E},function(t){d=t.b,f=t.a},null,function(t){p=t.E},function(t){v=t._},function(t){m=t.a,y=t.e},function(t){h=t.E},function(t){g=t.E},function(t){b=t.d,x=t.i,w=t.A,_=t.j,j=t.o,L=t.e,E=t.w,V=t.f,k=t.g,O=t.t,C=t.a,S=t.q,U=t.c,P=t.h,T=t.l,G=t.F,I=t.p,N=t.m},function(t){F=t._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".edit-problem-page-box[data-v-c58647dd] .content-box[data-v-c58647dd] .info[data-v-c58647dd]{display:flex}.edit-problem-page-box[data-v-c58647dd] .content-box[data-v-c58647dd] .example-box[data-v-c58647dd]{padding:10px}.edit-problem-page-box[data-v-c58647dd] .content-box[data-v-c58647dd] .example-box[data-v-c58647dd] .eit[data-v-c58647dd]{width:180px;border-radius:5px;background-color:#b4b4b4;padding:0 10px;text-overflow:ellipsis;overflow:hidden}.edit-problem-page-box[data-v-c58647dd] .content-box[data-v-c58647dd] .limit-box[data-v-c58647dd],.edit-problem-page-box[data-v-c58647dd] .content-box[data-v-c58647dd] .io-desc[data-v-c58647dd]{display:flex;width:100%}.edit-problem-page-box[data-v-c58647dd] .content-box[data-v-c58647dd] .item[data-v-c58647dd]{padding:10px}.edit-problem-page-box[data-v-c58647dd] .content-box[data-v-c58647dd] .item[data-v-c58647dd] p[data-v-c58647dd]{font-size:1.2em;margin-bottom:5px}.edit-problem-page-box[data-v-c58647dd] .btn-box[data-v-c58647dd]{display:flex;justify-content:center;margin-top:20px}\n",document.head.appendChild(n);var z=function(t){return I("data-v-c58647dd"),t=t(),N(),t},A={style:{"font-size":"1.5em"}},$={class:"content-box"},q={class:"info"},Y={class:"item"},B=z((function(){return k("p",null,"展示ID",-1)})),R={class:"item"},D=z((function(){return k("p",null,"题目名称",-1)})),K={class:"info"},M={class:"item"},Q=z((function(){return k("p",null,"时间限制(ms)",-1)})),W={class:"item"},H=z((function(){return k("p",null,"空间限制(mb)",-1)})),J={class:"item"},X=z((function(){return k("p",null,"栈限制(mb)",-1)})),Z={class:"item"},tt=z((function(){return k("p",null,"难度",-1)})),et={class:"example-box"},nt={style:{"margin-bottom":"15px","font-size":"18px",display:"flex","align-items":"center"}},rt={class:"eit"},ot={class:"eit"},at={class:"add-example-box"},ut={class:"dialog-footer"},lt={class:"item"},it=z((function(){return k("p",null,"题目描述",-1)})),ct={class:"io-desc"},st={class:"item"},dt=z((function(){return k("p",null,"输入描述",-1)})),ft={class:"item"},pt=z((function(){return k("p",null,"输出描述",-1)})),vt={class:"io-desc"},mt={class:"item"},yt=z((function(){return k("p",null,"数据范围描述",-1)})),ht={class:"item"},gt=z((function(){return k("p",null,"提示",-1)})),bt={class:"btn-box"},xt=b({__name:"EditProblemPage",props:{pid:{}},setup:function(t){var n=t,b=x(!1),I=x(),N=x(),F=x([]),z=x([]),xt=w((function(){for(var t="",e=0;e<F.value.length;e++)t+="<input>".concat(F.value[e],"</input><output>").concat(z.value[e],"</output>");return t})),wt=x(),_t=function(){F.value.push(I.value),z.value.push(N.value),jt()},jt=function(){I.value="",N.value="",b.value=!1},Lt=function(){var t=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wt.value.examples=xt.value,t.next=3,y(wt.value);case 3:n=t.sent,g({message:n.msg,type:"success"});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Et=function(){var t=r(e().mark((function t(){var r,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(n.pid);case 2:o=t.sent,wt.value=o.data,e=null===(r=wt.value)||void 0===r?void 0:r.examples,F.value=e.match(/<input>([\s\S]*?)<\/input>/g).map((function(t){return t.replace(/<input>|<\/input>/g,"")})),z.value=e.match(/<output>([\s\S]*?)<\/output>/g).map((function(t){return t.replace(/<output>|<\/output>/g,"")})),console.log(e),console.log(F.value),console.log(z.value),console.log(xt.value);case 5:case"end":return t.stop()}var e}),t)})));return function(){return t.apply(this,arguments)}}();return _((function(){Et()})),function(t,e){var n=p,r=d,m=f,y=s,g=i,x=a,w=c,_=l,xt=u;return wt.value?(j(),L(xt,{key:0,class:"edit-problem-page-box"},{header:E((function(){return[k("span",A,O(t.$route.meta.title),1)]})),default:E((function(){return[k("div",$,[k("div",q,[k("div",Y,[B,C(n,{modelValue:wt.value.displayId,"onUpdate:modelValue":e[0]||(e[0]=function(t){return wt.value.displayId=t})},null,8,["modelValue"])]),k("div",R,[D,C(n,{modelValue:wt.value.title,"onUpdate:modelValue":e[1]||(e[1]=function(t){return wt.value.title=t})},null,8,["modelValue"])])]),k("div",K,[k("div",M,[Q,C(n,{modelValue:wt.value.timeLimit,"onUpdate:modelValue":e[2]||(e[2]=function(t){return wt.value.timeLimit=t})},null,8,["modelValue"])]),k("div",W,[H,C(n,{modelValue:wt.value.memoryLimit,"onUpdate:modelValue":e[3]||(e[3]=function(t){return wt.value.memoryLimit=t})},null,8,["modelValue"])]),k("div",J,[X,C(n,{modelValue:wt.value.stackLimit,"onUpdate:modelValue":e[4]||(e[4]=function(t){return wt.value.stackLimit=t})},null,8,["modelValue"])])]),k("div",Z,[tt,C(m,{modelValue:wt.value.difficulty,"onUpdate:modelValue":e[5]||(e[5]=function(t){return wt.value.difficulty=t})},{default:E((function(){return[C(r,{label:"简单",value:"0"}),C(r,{label:"中等",value:"1"}),C(r,{label:"困难",value:"2"})]})),_:1},8,["modelValue"])]),k("div",et,[C(w,null,{default:E((function(){return[C(g,null,{default:E((function(){return[C(y,{type:"primary",onClick:e[6]||(e[6]=function(t){return b.value=!0})},{default:E((function(){return[S("添加题目样例")]})),_:1}),C(y,{type:"success",onClick:e[7]||(e[7]=function(e){return t.$router.push({name:"admin-problem-case",query:{pid:t.pid,displayId:wt.value.displayId}})})},{default:E((function(){return[S(" 管理评测用例 ")]})),_:1})]})),_:1}),(j(!0),U(G,null,P(F.value,(function(t,e){return j(),U("div",{key:e},[k("p",nt,[k("span",null,"第"+O(e+1)+"组样例",1),C(x,{style:{"margin-left":"5px",color:"#c74343"},onClick:function(t){return function(t){h.confirm("确定要删除这个题目样例吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){F.value.splice(t,1),z.value.splice(t,1)}))}(e)}},{default:E((function(){return[C(T(o))]})),_:2},1032,["onClick"])]),C(g,{label:"输入"},{default:E((function(){return[k("span",rt,O(F.value[e]),1)]})),_:2},1024),C(g,{label:"输出"},{default:E((function(){return[k("span",ot,O(z.value[e]),1)]})),_:2},1024)])})),128))]})),_:1}),C(_,{modelValue:b.value,"onUpdate:modelValue":e[10]||(e[10]=function(t){return b.value=t}),title:"添加测试样例","before-close":jt},{footer:E((function(){return[k("div",ut,[C(y,{onClick:jt},{default:E((function(){return[S("Cancel")]})),_:1}),C(y,{type:"primary",onClick:_t},{default:E((function(){return[S(" Confirm ")]})),_:1})])]})),default:E((function(){return[k("div",at,[C(w,null,{default:E((function(){return[C(g,{label:"输入"},{default:E((function(){return[C(n,{modelValue:I.value,"onUpdate:modelValue":e[8]||(e[8]=function(t){return I.value=t}),type:"textarea",rows:"5",resize:"none"},null,8,["modelValue"])]})),_:1}),C(g,{label:"输出"},{default:E((function(){return[C(n,{modelValue:N.value,"onUpdate:modelValue":e[9]||(e[9]=function(t){return N.value=t}),type:"textarea",rows:"5",resize:"none"},null,8,["modelValue"])]})),_:1})]})),_:1})])]})),_:1},8,["modelValue"])]),k("div",lt,[it,C(v,{content:wt.value.description,"onUpdate:content":e[11]||(e[11]=function(t){return wt.value.description=t})},null,8,["content"])]),k("div",ct,[k("div",st,[dt,C(v,{content:wt.value.input,"onUpdate:content":e[12]||(e[12]=function(t){return wt.value.input=t})},null,8,["content"])]),k("div",ft,[pt,C(v,{content:wt.value.output,"onUpdate:content":e[13]||(e[13]=function(t){return wt.value.output=t})},null,8,["content"])])]),k("div",vt,[k("div",mt,[yt,C(v,{content:wt.value.constraints,"onUpdate:content":e[14]||(e[14]=function(t){return wt.value.constraints=t})},null,8,["content"])]),k("div",ht,[gt,C(v,{content:wt.value.notes,"onUpdate:content":e[15]||(e[15]=function(t){return wt.value.notes=t})},null,8,["content"])])])]),k("div",bt,[C(y,{type:"primary",onClick:Lt},{default:E((function(){return[S("创建题目")]})),_:1}),C(y,{onClick:e[16]||(e[16]=function(e){return t.$router.back()})},{default:E((function(){return[S("返回")]})),_:1})])]})),_:1})):V("",!0)}}});t("default",F(xt,[["__scopeId","data-v-c58647dd"]]))}}}))}();
