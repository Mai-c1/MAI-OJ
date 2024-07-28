!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(n){f=function(e,t,n){return e[t]=n}}function p(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),i=new T(r||[]);return l(a,"_invoke",{value:O(e,n,i)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=p;var h="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function b(){}function x(){}function w(){}var j={};f(j,c,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(I([])));E&&E!==o&&a.call(E,c)&&(j=E);var L=w.prototype=b.prototype=Object.create(j);function k(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,n){function r(o,l,i,c){var u=d(t[o],t,l);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==e(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):n.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;l(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function O(e,t,r){var o=h;return function(a,l){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw l;return{value:n,done:!0}}for(r.method=a,r.arg=l;;){var i=r.delegate;if(i){var c=P(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=d(e,t,r);if("normal"===u.type){if(o=r.done?g:v,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function P(e,t){var r=t.method,o=e.iterator[r];if(o===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=d(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var l=a.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,l=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return l.next=l}}throw new TypeError(e(t)+" is not iterable")}return x.prototype=w,l(L,"constructor",{value:w,configurable:!0}),l(w,"constructor",{value:x,configurable:!0}),x.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,f(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},k(S.prototype),f(S.prototype,u,(function(){return this})),r.AsyncIterator=S,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var l=new S(p(e,t,n,o),a);return r.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},k(L),f(L,s,"Generator"),f(L,c,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=I,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return i.type="throw",i.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),u=a.call(l,"finallyLoc");if(c&&u){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}},r}function n(e,t,n,r,o,a,l){try{var i=e[a](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var l=e.apply(t,r);function i(e){n(l,o,a,i,c,"next",e)}function c(e){n(l,o,a,i,c,"throw",e)}i(void 0)}))}}System.register(["./base-legacy-Bg7jscUk.js","./el-loading-legacy-B5Grzsjt.js","./DraggableCodeEditor-legacy-DcMQlqm8.js","./judge-legacy-Ai-a9ulL.js","./MarkdownPlane.vue_vue_type_style_index_0_lang-legacy-DLXPCp3T.js","./contest-legacy-ByPEpfi3.js","./index-legacy-CpiIC6iI.js","./index-legacy-ID_6iaFK.js","./_plugin-vue_export-helper-legacy-DySZQj4h.js","./use-global-config-legacy-B2zwEURq.js","./_commonjsHelpers-legacy-CTU2Tar8.js","./el-card-legacy-B-HRbtDx.js","./el-form-item-legacy-B2qTVUjk.js","./constants-legacy-CgDQD1Mv.js","./castArray-legacy-CEkoNY0l.js","./use-form-item-legacy-CBGFkd5a.js","./index-legacy-ByGSVLKE.js","./_baseClone-legacy-B3nW7IeY.js","./scroll-legacy-Bp5UUC4n.js","./_initCloneObject-legacy-CxyL6CTG.js","./el-input-legacy-D--THiJd.js","./event-legacy-CFsZpNd4.js","./el-tooltip-legacy-thrsW4a0.js","./el-popper-legacy-CczNxH2L.js","./focus-trap-legacy-cDjfq80m.js","./el-tag-legacy-B19Whvj9.js","./el-select-legacy-CwyyvxOw.js","./el-scrollbar-legacy-BfCsfMwY.js","./index-legacy-DpQ94NBO.js","./isEqual-legacy-D1Wy7DZK.js","./el-button-legacy-CXzXoJcT.js","./index-legacy-BScUY5pO.js","./CodeEditor-legacy-B3InS0UV.js","./el-message-legacy-GAwTZcC3.js","./index-legacy-vsqqJxgn.js","./index-legacy-BLAhF75T.js","./httpAdmin-legacy-CSuACPZf.js"],(function(e,n){"use strict";var o,a,l,i,c,u,s,f,p,d,h,v,y,g,m,b,x,w,j,_,E,L,k,S,O,P,C;return{setters:[null,function(e){o=e.v},function(e){a=e.u,l=e.v,i=e.w,c=e._,u=e.T},function(e){s=e.t,f=e.s},function(e){p=e._},function(e){d=e.h},function(e){h=e.E},function(e){v=e.d,y=e.i,g=e.j,m=e.o,b=e.c,x=e.x,w=e.g,j=e.t,_=e.a,E=e.f,L=e.F,k=e.h,S=e.e,O=e.p,P=e.m},function(e){C=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".problem-detail-container[data-v-af8f35d0]{width:100%;background-color:#fbfbfb;display:flex;background-color:#1a1a1a;color:#f5f5f5}.problem-detail-container .problem-description-box[data-v-af8f35d0]{padding:15px;width:100%;display:flex;flex-direction:column;margin-left:10px}.problem-detail-container .problem-description-box .desc-header[data-v-af8f35d0]{display:flex;flex-direction:column}.problem-detail-container .problem-description-box .desc-header .problem-title[data-v-af8f35d0]{font-size:35px;margin-bottom:15px;font-weight:700;font-family:Roboto,sans-serif}.problem-detail-container .problem-description-box .desc-header .problem-info[data-v-af8f35d0]{padding:10px;background-color:#1a1a1a;border-radius:5px;color:#f5f5f5;font-weight:700;font-size:14px;line-height:2}.problem-detail-container .problem-description-box .topic-box[data-v-af8f35d0]{line-height:3}.problem-detail-container .problem-description-box .topic-box .desc-label[data-v-af8f35d0]{color:#f5f5f5;font-size:18px;font-weight:700}.problem-detail-container .problem-description-box .topic-box p[data-v-af8f35d0]{text-indent:2em}.problem-detail-container .problem-description-box .topic-box .test-sample-box[data-v-af8f35d0]{display:flex;flex-direction:column;flex-wrap:wrap;border-style:none}.problem-detail-container .problem-description-box .topic-box .problem-source[data-v-af8f35d0]{margin-top:20px;line-height:20px}.problem-detail-container .problem-description-box .topic-box .notes-box[data-v-af8f35d0]{padding-top:15px}\n",document.head.appendChild(n);var N=function(e){return O("data-v-af8f35d0"),e=e(),P(),e},T={class:"problem-detail-container"},I={key:0,class:"problem-description-box"},G={class:"desc-header"},F={class:"problem-title"},R={class:"problem-info"},z={class:"topic-box"},A={class:"topic-desc"},J=N((function(){return w("div",{class:"desc-label"},"题目描述",-1)})),Y={key:0,class:"output-desc"},D=N((function(){return w("div",{class:"desc-label"},"数据范围",-1)})),M={class:"input-desc"},q=N((function(){return w("div",{class:"desc-label"},"输入格式",-1)})),H={class:"output-desc"},K=N((function(){return w("div",{class:"desc-label"},"输出格式",-1)})),Q={class:"test-sample-box"},U=N((function(){return w("div",{class:"desc-label"},"样例",-1)})),V={key:1,class:"notes-box"},W=N((function(){return w("div",{class:"desc-label"},"提示",-1)})),Z=v({__name:"ProblemDetailPage",props:{label:String,cid:Number},setup:function(e){var n=y(),v=a(),O=e,P=y(),C=y(),N=y({pid:0,language:void 0,code:"",exampleInput:"",contestId:O.cid,label:O.label,sseToken:""}),Z=y(!1),B=function(){var e=r(t().mark((function e(r){var o,a,c,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=v.getContent("".concat(O.cid,"-").concat(O.label)),N.value.code=o.code,N.value.language=o.language,N.value.exampleInput=o.exampleInput,N.value.sseToken=l(),a="/api/judge/getJudgeResult/"+N.value.sseToken,e.prev=6,e.next=9,i(a);case 9:if((u=e.sent).onmessage=function(e){P.value=JSON.parse(e.data),n.value.showJudgeResult(P.value),u.close()},"test"!==r){e.next=17;break}return e.next=14,s(N.value);case 14:c=e.sent,e.next=20;break;case 17:return e.next=19,f(N.value);case 19:c=e.sent;case 20:200!==c.code&&h({title:"Error",message:c.msg,type:"error"}),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(6),h({title:"Error",message:e.t0.message,type:"error"});case 26:case"end":return e.stop()}}),e,null,[[6,23]])})));return function(t){return e.apply(this,arguments)}}(),X=function(e){var t=e.match(/<input>([\s\S]*?)<\/input>/g).map((function(e){return e.replace(/<input>|<\/input>/g,"")})),n=e.match(/<output>([\s\S]*?)<\/output>/g).map((function(e){return e.replace(/<output>|<\/output>/g,"")}));if(t.length!==n.length)throw new Error("输入和输出的数量不匹配");return t.map((function(e,t){return{input:e.trim(),output:n[t].trim()}}))},$=function(){var e=r(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({cid:O.cid,label:O.label});case 2:n=e.sent,C.value=n.data,C.value.exampleList=X(C.value.examples),Z.value=!0;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return g(r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$();case 1:case"end":return e.stop()}}),e)})))),function(e,t){var r=c,a=o;return m(),b(L,null,[x((m(),b("div",T,[C.value?(m(),b("div",I,[w("div",G,[w("div",F,j(C.value.label)+" . "+j(C.value.title),1),w("div",R,[w("p",null,"时间限制：C/C++ "+j(C.value.timeLimit)+"ms",1),w("p",null,"内存限制：C/C++ "+j(C.value.memoryLimit)+"mb",1)])]),w("div",z,[w("div",A,[J,_(p,{content:C.value.description,class:"plane-box"},null,8,["content"])]),C.value.constraints?(m(),b("div",Y,[D,_(p,{content:C.value.constraints,class:"plane-box"},null,8,["content"])])):E("",!0),w("div",M,[q,_(p,{content:C.value.input,class:"plane-box"},null,8,["content"])]),w("div",H,[K,_(p,{content:C.value.output,class:"plane-box"},null,8,["content"])]),w("div",Q,[U,(m(!0),b(L,null,k(C.value.exampleList,(function(e,t){return m(),S(u,{key:t,example_id:t+1,example:e},null,8,["example_id","example"])})),128))]),C.value.notes?(m(),b("div",V,[W,_(p,{content:C.value.notes,class:"plane-box notes-box"},null,8,["content"])])):E("",!0)])])):E("",!0)])),[[a,!C.value]]),_(r,{pid:N.value.pid,meta:"".concat(N.value.contestId,"-").concat(N.value.label),ref_key:"codeEditorRef",ref:n,onSubmitCode:B},null,8,["pid","meta"])],64)}}});e("default",C(Z,[["__scopeId","data-v-af8f35d0"]]))}}}))}();
