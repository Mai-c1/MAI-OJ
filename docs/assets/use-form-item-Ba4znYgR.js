import{f as c,a as p,u as z}from"./constants-CgBtGoi7.js";import{A as t,X as b,i as r,J as v,l as m,j as y,z as F,V as h,ae as w}from"./index-C4LPoDef.js";import{h as _}from"./use-global-config-B8zSw9bL.js";const I=s=>{const o=b();return t(()=>{var u,l;return(l=(u=o==null?void 0:o.proxy)==null?void 0:u.$props)==null?void 0:l[s]})},R=(s,o={})=>{const u=r(void 0),l=o.prop?u:I("size"),e=o.global?u:_(),a=o.form?{size:void 0}:v(c,void 0),n=o.formItem?{size:void 0}:v(p,void 0);return t(()=>l.value||m(s)||(n==null?void 0:n.size)||(a==null?void 0:a.size)||e.value||"")},S=s=>{const o=I("disabled"),u=v(c,void 0);return t(()=>o.value||m(s)||(u==null?void 0:u.disabled)||!1)},U=()=>{const s=v(c,void 0),o=v(p,void 0);return{form:s,formItem:o}},A=(s,{formItemContext:o,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const e=r();let a;const n=t(()=>{var i;return!!(!(s.label||s.ariaLabel)&&o&&o.inputIds&&((i=o.inputIds)==null?void 0:i.length)<=1)});return y(()=>{a=F([h(s,"id"),u],([i,f])=>{const d=i!=null?i:f?void 0:z().value;d!==e.value&&(o!=null&&o.removeInputId&&(e.value&&o.removeInputId(e.value),!(l!=null&&l.value)&&!f&&d&&o.addInputId(d)),e.value=d)},{immediate:!0})}),w(()=>{a&&a(),o!=null&&o.removeInputId&&e.value&&o.removeInputId(e.value)}),{isLabeledByFormItem:n,inputId:e}};export{R as a,S as b,A as c,U as u};
