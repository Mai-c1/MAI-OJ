!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(e){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:_(t,e,u)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};l(L,c,(function(){return this}));var E=Object.getPrototypeOf,P=E&&E(E(M([])));P&&P!==o&&i.call(P,c)&&(L=P);var O=x.prototype=w.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(r,e){function n(o,a,u,c){var s=p(r[o],r,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==t(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function _(t,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=j(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function M(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},S(k.prototype),l(k.prototype,s,(function(){return this})),n.AsyncIterator=k,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new k(h(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(O),l(O,f,"Generator"),l(O,c,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=M,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},n}function e(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}System.register(["./httpAdmin-legacy-BR2yfkfD.js"],(function(t,e){"use strict";var o;return{setters:[function(t){o=t.h}],execute:function(){t("g",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/problemManager/getProblemList",method:"POST",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t("b",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/problemManager/addProblem",method:"POST",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t("d",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/problemManager/deleteProblem?pid=".concat(e),method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t("a",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/problemManager/getProblemInfo?pid=".concat(e),method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t("e",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/problemManager/editProblemInfo",method:"POST",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t("c",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/problemManager/getProblemCaseList?pid=".concat(e),method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()),t("f",function(){var t=n(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/problemManager/deleteProblemCase?id=".concat(e),method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())}}}))}();
