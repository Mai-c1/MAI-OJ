import"./base-DJlLBwFh.js";import{v as g}from"./el-loading-28PTutTj.js";import{E as u}from"./el-pagination-AGaXoik1.js";import"./el-input-Ckrm2KBb.js";/* empty css               */import"./el-select-DYIWrPI3.js";import"./el-scrollbar-DmZ_7fZk.js";import"./el-popper-C0mGw5af.js";import{g as v}from"./judge-NyZMNOLy.js";import{J as _}from"./JudgeRecordTable-BTcuH9So.js";import{d as f,i as t,j as x,x as y,o as b,c as h,a as p,g as j}from"./index-B-IKpVg7.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-global-config-CP7RREsb.js";import"./isEqual-D421XMZ4.js";import"./scroll-1aRBaJ3N.js";import"./index-DWz-Pt_U.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-CfHI9IsZ.js";import"./constants-BaP7aDkc.js";import"./index-2j8ALnqu.js";import"./castArray-BJwNa5SD.js";import"./focus-trap-D4N9E80X.js";const B={class:"judge-result-box"},J={style:{width:"95%",display:"flex","justify-content":"flex-end",margin:"10px"}},L=f({__name:"index",setup(R){const d=t(!1),o=t(),e=t({page:1,pageSize:20,sortBy:void 0,isAsc:void 0,onlyMe:void 0,pid:void 0,cid:void 0,label:void 0}),a=async()=>{const i=await v(e.value);o.value=i.data};return x(()=>{a()}),(i,r)=>{var s,n;const c=u,l=g;return y((b(),h("div",B,[p(_,{data:(s=o.value)==null?void 0:s.records},null,8,["data"]),j("div",J,[p(c,{background:"",layout:"prev, pager, next","current-page":e.value.page,"onUpdate:currentPage":r[0]||(r[0]=m=>e.value.page=m),"page-size":e.value.pageSize,onCurrentChange:a,total:(n=o.value)==null?void 0:n.total},null,8,["current-page","page-size","total"])])])),[[l,d.value]])}}}),X=z(L,[["__scopeId","data-v-befda5a0"]]);export{X as default};
