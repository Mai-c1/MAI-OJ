import{k as F,c as C,s as _,d as N,e as l,n as u,f as E,a as v,S as K,h as R}from"./scroll-DjkzxiSA.js";import{am as $,a1 as B,Z as W,a4 as Y,an as Z}from"./base-D5akLhLs.js";import{c as y,k as j,g as q,e as x,d as H,a as J,b as Q,i as V}from"./_initCloneObject-D9qHqQjg.js";import{c as X}from"./index-C7WaZoJy.js";function z(e,r){for(var n=-1,c=e==null?0:e.length;++n<c&&r(e[n],n,e)!==!1;);return e}function k(e,r){return e&&y(r,F(r),e)}function ee(e,r){return e&&y(r,j(r),e)}function re(e,r){return y(e,C(e),r)}var te=Object.getOwnPropertySymbols,L=te?function(e){for(var r=[];e;)X(r,C(e)),e=q(e);return r}:_;function ne(e,r){return y(e,L(e),r)}function ae(e){return N(e,j,L)}var oe=Object.prototype,ce=oe.hasOwnProperty;function se(e){var r=e.length,n=new e.constructor(r);return r&&typeof e[0]=="string"&&ce.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function ie(e,r){var n=r?x(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var fe=/\w*$/;function be(e){var r=new e.constructor(e.source,fe.exec(e));return r.lastIndex=e.lastIndex,r}var O=$?$.prototype:void 0,w=O?O.valueOf:void 0;function ge(e){return w?Object(w.call(e)):{}}var ue="[object Boolean]",ye="[object Date]",Te="[object Map]",le="[object Number]",je="[object RegExp]",pe="[object Set]",Ae="[object String]",me="[object Symbol]",de="[object ArrayBuffer]",Se="[object DataView]",$e="[object Float32Array]",Oe="[object Float64Array]",we="[object Int8Array]",Ie="[object Int16Array]",he="[object Int32Array]",Fe="[object Uint8Array]",Ce="[object Uint8ClampedArray]",Ee="[object Uint16Array]",Be="[object Uint32Array]";function xe(e,r,n){var c=e.constructor;switch(r){case de:return x(e);case ue:case ye:return new c(+e);case Se:return ie(e,n);case $e:case Oe:case we:case Ie:case he:case Fe:case Ce:case Ee:case Be:return H(e,n);case Te:return new c;case le:case Ae:return new c(e);case je:return be(e);case pe:return new c;case me:return ge(e)}}var Le="[object Map]";function Me(e){return B(e)&&l(e)==Le}var I=u&&u.isMap,Ue=I?E(I):Me,Pe="[object Set]";function De(e){return B(e)&&l(e)==Pe}var h=u&&u.isSet,Ge=h?E(h):De,_e=1,Ne=2,ve=4,M="[object Arguments]",Ke="[object Array]",Re="[object Boolean]",We="[object Date]",Ye="[object Error]",U="[object Function]",Ze="[object GeneratorFunction]",qe="[object Map]",He="[object Number]",P="[object Object]",Je="[object RegExp]",Qe="[object Set]",Ve="[object String]",Xe="[object Symbol]",ze="[object WeakMap]",ke="[object ArrayBuffer]",er="[object DataView]",rr="[object Float32Array]",tr="[object Float64Array]",nr="[object Int8Array]",ar="[object Int16Array]",or="[object Int32Array]",cr="[object Uint8Array]",sr="[object Uint8ClampedArray]",ir="[object Uint16Array]",fr="[object Uint32Array]",t={};t[M]=t[Ke]=t[ke]=t[er]=t[Re]=t[We]=t[rr]=t[tr]=t[nr]=t[ar]=t[or]=t[qe]=t[He]=t[P]=t[Je]=t[Qe]=t[Ve]=t[Xe]=t[cr]=t[sr]=t[ir]=t[fr]=!0;t[Ye]=t[U]=t[ze]=!1;function T(e,r,n,c,p,s){var a,b=r&_e,g=r&Ne,D=r&ve;if(a!==void 0)return a;if(!W(e))return e;var A=Y(e);if(A){if(a=se(e),!b)return J(e,a)}else{var f=l(e),m=f==U||f==Ze;if(v(e))return Q(e,b);if(f==P||f==M||m&&!p){if(a=g||m?{}:V(e),!b)return g?ne(e,ee(a,e)):re(e,k(a,e))}else{if(!t[f])return p?e:{};a=xe(e,f,b)}}s||(s=new K);var d=s.get(e);if(d)return d;s.set(e,a),Ge(e)?e.forEach(function(o){a.add(T(o,r,n,o,e,s))}):Ue(e)&&e.forEach(function(o,i){a.set(i,T(o,r,n,i,e,s))});var G=D?g?ae:R:g?j:F,S=A?void 0:G(e);return z(S||e,function(o,i){S&&(i=o,o=e[i]),Z(a,i,T(o,r,n,i,e,s))}),a}export{T as b};
