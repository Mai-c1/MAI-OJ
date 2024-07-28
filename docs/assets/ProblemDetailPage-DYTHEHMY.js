import"./base-D5akLhLs.js";import{v as D}from"./el-loading-bkyKX7rn.js";import{u as R,v as J,w as L,_ as N,T}from"./DraggableCodeEditor-OBSUezxZ.js";import{t as $,s as j}from"./judge-CgskfyqQ.js";import{_ as v}from"./MarkdownPlane.vue_vue_type_style_index_0_lang-7bPkwECM.js";import{h as B}from"./contest-BPk0HwcD.js";import{E as y}from"./index-DoAQsUIb.js";import{d as A,i as g,j as F,o as n,c as p,x as V,g as t,t as b,a as u,f as h,F as I,h as O,e as M,p as q,m as z}from"./index-C4LPoDef.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-global-config-B8zSw9bL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./el-card-CeALd1R_.js";import"./el-form-item-CrIxGsqv.js";import"./constants-CgBtGoi7.js";import"./castArray-iw6Rl7wz.js";import"./use-form-item-Ba4znYgR.js";import"./index-C7WaZoJy.js";import"./_baseClone-BSaIAonx.js";import"./scroll-DjkzxiSA.js";import"./_initCloneObject-D9qHqQjg.js";import"./el-input-C0CdgXOc.js";import"./event-BB_Ol6Sd.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-BV0gag_g.js";import"./focus-trap-BpxeXF_x.js";/* empty css               */import"./el-select-DEpjXFZI.js";import"./el-scrollbar-CDQ29gER.js";import"./index-Dvt1UXgE.js";import"./isEqual-DJnHwhR0.js";import"./el-button-DVtG45sK.js";import"./index-riLredlm.js";import"./CodeEditor-nFE5beaY.js";/* empty css                   */import"./index-Dz9PLotu.js";import"./index-Z7OnJ6oD.js";import"./httpAdmin-DjaH7lW7.js";const d=m=>(q("data-v-af8f35d0"),m=m(),z(),m),H={class:"problem-detail-container"},K={key:0,class:"problem-description-box"},Q={class:"desc-header"},U={class:"problem-title"},W={class:"problem-info"},X={class:"topic-box"},Y={class:"topic-desc"},Z=d(()=>t("div",{class:"desc-label"},"题目描述",-1)),ee={key:0,class:"output-desc"},te=d(()=>t("div",{class:"desc-label"},"数据范围",-1)),oe={class:"input-desc"},se=d(()=>t("div",{class:"desc-label"},"输入格式",-1)),ae={class:"output-desc"},le=d(()=>t("div",{class:"desc-label"},"输出格式",-1)),ie={class:"test-sample-box"},ne=d(()=>t("div",{class:"desc-label"},"样例",-1)),ce={key:1,class:"notes-box"},re=d(()=>t("div",{class:"desc-label"},"提示",-1)),pe=A({__name:"ProblemDetailPage",props:{label:String,cid:Number},setup(m){const f=g(),S=R(),c=m,x=g(),e=g(),o=g({pid:0,language:void 0,code:"",exampleInput:"",contestId:c.cid,label:c.label,sseToken:""}),k=g(!1),w=async i=>{const r=S.getContent("".concat(c.cid,"-").concat(c.label));o.value.code=r.code,o.value.language=r.language,o.value.exampleInput=r.exampleInput,o.value.sseToken=J();const _="/api/judge/getJudgeResult/"+o.value.sseToken;let a;try{const l=await L(_);l.onmessage=s=>{x.value=JSON.parse(s.data),f.value.showJudgeResult(x.value),l.close()},i==="test"?a=await $(o.value):a=await j(o.value),a.code!==200&&y({title:"Error",message:a.msg,type:"error"})}catch(l){y({title:"Error",message:l.message,type:"error"})}},C=i=>{const r=/<input>([\s\S]*?)<\/input>/g,_=/<output>([\s\S]*?)<\/output>/g,a=i.match(r).map(s=>s.replace(/<input>|<\/input>/g,"")),l=i.match(_).map(s=>s.replace(/<output>|<\/output>/g,""));if(a.length!==l.length)throw new Error("输入和输出的数量不匹配");return a.map((s,P)=>({input:s.trim(),output:l[P].trim()}))},E=async()=>{const i=await B({cid:c.cid,label:c.label});e.value=i.data,e.value.exampleList=C(e.value.examples),k.value=!0};return F(async()=>{E()}),(i,r)=>{const _=N,a=D;return n(),p(I,null,[V((n(),p("div",H,[e.value?(n(),p("div",K,[t("div",Q,[t("div",U,b(e.value.label)+" . "+b(e.value.title),1),t("div",W,[t("p",null,"时间限制：C/C++ "+b(e.value.timeLimit)+"ms",1),t("p",null,"内存限制：C/C++ "+b(e.value.memoryLimit)+"mb",1)])]),t("div",X,[t("div",Y,[Z,u(v,{content:e.value.description,class:"plane-box"},null,8,["content"])]),e.value.constraints?(n(),p("div",ee,[te,u(v,{content:e.value.constraints,class:"plane-box"},null,8,["content"])])):h("",!0),t("div",oe,[se,u(v,{content:e.value.input,class:"plane-box"},null,8,["content"])]),t("div",ae,[le,u(v,{content:e.value.output,class:"plane-box"},null,8,["content"])]),t("div",ie,[ne,(n(!0),p(I,null,O(e.value.exampleList,(l,s)=>(n(),M(T,{key:s,example_id:s+1,example:l},null,8,["example_id","example"]))),128))]),e.value.notes?(n(),p("div",ce,[re,u(v,{content:e.value.notes,class:"plane-box notes-box"},null,8,["content"])])):h("",!0)])])):h("",!0)])),[[a,!e.value]]),u(_,{pid:o.value.pid,meta:"".concat(o.value.contestId,"-").concat(o.value.label),ref_key:"codeEditorRef",ref:f,onSubmitCode:w},null,8,["pid","meta"])],64)}}}),Qe=G(pe,[["__scopeId","data-v-af8f35d0"]]);export{Qe as default};
