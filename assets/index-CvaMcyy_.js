import"./base-Dmc89mKD.js";import{v as g}from"./el-loading-D_vgcoIj.js";import{E as u}from"./el-pagination-B1MYjK4b.js";import"./el-input-Ck3Sk370.js";/* empty css               */import"./el-select-912Tzl8O.js";import"./el-scrollbar-CkmdMjYI.js";import"./el-popper-C69rmuOe.js";import{g as v}from"./judge-CvM0_0lR.js";import{J as _}from"./JudgeRecordTable-Bdex6iiX.js";import{d as f,i as t,j as x,x as y,o as b,c as h,a as p,g as j}from"./index-Dn-edppu.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-global-config-BzjFfdpB.js";import"./index-B5hLXLUr.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-EYKE932x.js";import"./constants-BY1Y5JjR.js";import"./index-CVNiNkyg.js";import"./scroll-CCev1fq5.js";import"./castArray-CAm_z0eB.js";import"./focus-trap-_SqgKcM8.js";const B={class:"judge-result-box"},J={style:{width:"95%",display:"flex","justify-content":"flex-end",margin:"10px"}},L=f({__name:"index",setup(R){const d=t(!1),o=t(),e=t({page:1,pageSize:20,sortBy:void 0,isAsc:void 0,onlyMe:void 0,pid:void 0,cid:void 0,label:void 0}),a=async()=>{const i=await v(e.value);o.value=i.data};return x(()=>{a()}),(i,r)=>{var s,n;const c=u,l=g;return y((b(),h("div",B,[p(_,{data:(s=o.value)==null?void 0:s.records},null,8,["data"]),j("div",J,[p(c,{background:"",layout:"prev, pager, next","current-page":e.value.page,"onUpdate:currentPage":r[0]||(r[0]=m=>e.value.page=m),"page-size":e.value.pageSize,onCurrentChange:a,total:(n=o.value)==null?void 0:n.total},null,8,["current-page","page-size","total"])])])),[[l,d.value]])}}}),W=z(L,[["__scopeId","data-v-befda5a0"]]);export{W as default};
