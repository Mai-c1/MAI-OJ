!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(n){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new N(r||[]);return i(a,"_invoke",{value:O(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function b(){}function x(){}function w(){}var j={};d(j,s,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(z([])));E&&E!==o&&a.call(E,s)&&(j=E);var L=w.prototype=b.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(o,i,c,s){var l=h(e[o],e,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==t(d)&&a.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,s)}))}s(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}})}function O(t,e,r){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=T(c,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=h(t,e,r);if("normal"===l.type){if(o=r.done?g:v,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=g,r.method="throw",r.arg=l.arg)}}}function T(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=h(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function z(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=w,i(L,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:x,configurable:!0}),x.displayName=d(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},k(S.prototype),d(S.prototype,l,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new S(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(L),d(L,u,"Generator"),d(L,s,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=z,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),G(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;G(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},r}function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}System.register(["./base-legacy-Bg7jscUk.js","./el-card-legacy-B-HRbtDx.js","./el-radio-group-legacy-CU_5jvCM.js","./el-radio-button-legacy-3cdC3Wsl.js","./el-progress-legacy-B2luzosv.js","./el-tag-legacy-B19Whvj9.js","./el-button-legacy-CXzXoJcT.js","./index-legacy-ID_6iaFK.js","./contest-legacy-ByPEpfi3.js","./ContestStore-legacy-DgPHSAMV.js","./el-message-legacy-GAwTZcC3.js","./index-legacy-vsqqJxgn.js","./index-legacy-CpiIC6iI.js","./index-legacy-DpQ94NBO.js","./_plugin-vue_export-helper-legacy-DySZQj4h.js","./use-global-config-legacy-B2zwEURq.js","./event-legacy-CFsZpNd4.js","./use-form-item-legacy-CBGFkd5a.js","./constants-legacy-CgDQD1Mv.js","./index-legacy-ByGSVLKE.js","./index-legacy-BScUY5pO.js","./httpAdmin-legacy-CSuACPZf.js"],(function(t,n){"use strict";var o,a,i,c,s,l,u,d,f,h,p,v,y,g,m,b,x,w,j,_,E,L,k,S,O,T,P,G,N,z,C;return{setters:[null,function(t){o=t.E},function(t){a=t.b,i=t.a},null,function(t){c=t.E},null,function(t){s=t.E},function(t){l=t.d,u=t.s,d=t.i,f=t.A,h=t.j,p=t.l,v=t.o,y=t.c,g=t.a,m=t.w,b=t.f,x=t.b,w=t.u,j=t.r,_=t.g,E=t.q,L=t.t,k=t.e,S=t.n},function(t){O=t.b,T=t.e},function(t){P=t.u},null,function(t){G=t.E},function(t){N=t.E},function(t){z=t.E},function(t){C=t._},null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".contest-detail-box[data-v-c135da6e]{width:90vw;margin:15px}.contest-detail-box .el-card[data-v-c135da6e]{background-color:#2c2c2c;border:none}.contest-detail-box .contest-detail-header[data-v-c135da6e]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column}.contest-detail-box .contest-detail-header .contest-title[data-v-c135da6e]{color:#fdfdfd;margin-bottom:15px;font-size:1.5em;font-weight:700}.contest-detail-box .contest-detail-header .progress-box[data-v-c135da6e]{width:100%}.contest-detail-box .contest-detail-header .progress-box .time-box[data-v-c135da6e]{display:flex;justify-content:space-between;padding:5px}.contest-detail-box .contest-detail-header .progress-box .time-box span[data-v-c135da6e]{font-size:12px;background-color:rgba(141,141,141,.51);border-radius:5px;padding:0 5px}.contest-detail-box .contest-detail-header p[data-v-c135da6e]{line-height:30px}.contest-detail-box .contest-detail-header .contest-status[data-v-c135da6e]{position:absolute;right:0;top:0;width:120px;height:50px;font-size:20px;display:flex;align-items:center;justify-content:center;border-radius:15px}.contest-detail-box .contest-detail-header .contest-status-not-started[data-v-c135da6e]{color:rgba(141,141,141,.51)}.contest-detail-box .contest-detail-header .contest-status-pre-start[data-v-c135da6e]{font-weight:700;color:red}.contest-detail-box .contest-detail-header .contest-status-progress[data-v-c135da6e]{font-weight:700;color:#0086b3}.contest-detail-box .contest-detail-header .contest-status-pre-end[data-v-c135da6e]{font-weight:700;color:red}.contest-detail-box .contest-detail-header .contest-status-end[data-v-c135da6e]{color:rgba(141,141,141,.51)}\n",document.head.appendChild(n);var I={key:0,class:"contest-detail-box"},F={class:"contest-detail-header"},A={class:"contest-title"},D={class:"progress-box"},V={class:"time-box"},Y={style:{padding:"30px"}},M=l({__name:"ContestDetailPage",props:{cid:{}},setup:function(t){var n=t,l=P(),C=u(l),M=C.contestInfo,U=C.problemSet,q={0:{label:"未开始",status_class:"contest-status-not-started"},1:{label:"即将开始",status_class:"contest-status-pre-start"},2:{label:"进行中",status_class:"contest-status-progress"},3:{label:"即将结束",status_class:"contest-status-pre-end"},4:{label:"已结束",status_class:"contest-status-progress"}},K=x(),R=w(),Z=d("contest-notice"),B=function(){var t=r(e().mark((function t(n){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(n);case 2:200!==(r=t.sent).code&&N({title:"Error",message:r.msg,type:"error"}),U.value=r.data.problemSet,M.value=r.data.contestInfo;case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=f((function(){var t=0;if(M.value){var e=new Date,n=new Date(M.value.beginTime),r=new Date(M.value.endTime);if(r<=e)return 100;t=Math.round((e.getTime()-n.getTime())/(r.getTime()-n.getTime())*100)}return t})),J=function(){console.log(Z.value),K.push({name:Z.value})},Q=function(){var t=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O({cid:n.cid});case 2:t.sent.data?B(n.cid):(K.push("/contest/register/".concat(n.cid)),G({message:"您尚未注册该场比赛",type:"warning"}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return h((function(){Q(),Z.value=R.name})),function(t,e){var n=s,r=z,l=c,u=a,d=i,f=j("router-view"),h=o;return p(M)?(v(),y("div",I,[g(h,null,{header:m((function(){var t,o,a;return[_("div",F,[g(n,{style:{position:"absolute",top:"0",left:"0"},type:"primary",onClick:e[0]||(e[0]=function(t){return p(K).back()})},{default:m((function(){return[E("返回")]})),_:1}),_("div",A,L(null===(t=p(M))||void 0===t?void 0:t.title),1),_("div",null,[p(M).privatized?(v(),k(r,{key:0,type:"danger",effect:"dark",size:"large"},{default:m((function(){return[E("私有比赛")]})),_:1})):(v(),k(r,{key:1,effect:"dark",type:"success",size:"large"},{default:m((function(){return[E("公共比赛")]})),_:1}))]),_("div",D,[_("div",V,[_("span",null,L(null===(o=p(M))||void 0===o?void 0:o.beginTime),1),_("span",null,L(null===(a=p(M))||void 0===a?void 0:a.endTime),1)]),g(l,{percentage:H.value,"stroke-width":10,color:"#54b2e7",striped:"","striped-flow":"",duration:30,"show-text":!1},null,8,["percentage"])]),_("div",{class:S(["contest-status",q[p(M).contestStatus].status_class])},L(q[p(M).contestStatus].label),3)])]})),default:m((function(){return[g(d,{modelValue:Z.value,"onUpdate:modelValue":e[1]||(e[1]=function(t){return Z.value=t}),onChange:J,class:"radio-box"},{default:m((function(){return[g(u,{label:"公告",value:"contest-notice"}),g(u,{label:"题目",value:"contest-problem-set"}),g(u,{label:"提交",value:"contest-submission"}),g(u,{label:"排名",value:"contest-rank"})]})),_:1},8,["modelValue"]),_("div",Y,[g(f)])]})),_:1})])):b("",!0)}}});t("default",C(M,[["__scopeId","data-v-c135da6e"]]))}}}))}();
