import"./base-DJlLBwFh.js";import{E as P}from"./el-card-Bf00zvNI.js";import{E as k}from"./el-pagination-AGaXoik1.js";import"./el-input-Ckrm2KBb.js";/* empty css               */import"./el-select-DYIWrPI3.js";import"./el-scrollbar-DmZ_7fZk.js";import"./el-popper-C0mGw5af.js";import{E as B,a as S}from"./el-table-column-CvXrA2CE.js";import"./el-tooltip-l0sNRNKZ.js";import{E as T}from"./el-button-Bq5AjPZk.js";import{d as M,i as d,j as I,o as N,e as $,w as r,b as A,g as u,t as D,a as e,q as g}from"./index-B-IKpVg7.js";import{g as L,d as U}from"./contest-DBQrMHa6.js";import{E as V}from"./el-message-box-DW9VbTfh.js";import"./el-overlay-DVqE9J7h.js";/* empty css                   */import{E as f}from"./index-Dk-OH1kk.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-global-config-CP7RREsb.js";import"./isEqual-D421XMZ4.js";import"./scroll-1aRBaJ3N.js";import"./index-DWz-Pt_U.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-CfHI9IsZ.js";import"./constants-BaP7aDkc.js";import"./index-2j8ALnqu.js";import"./castArray-BJwNa5SD.js";import"./focus-trap-D4N9E80X.js";import"./_initCloneObject-349Eh7kT.js";import"./index-riLredlm.js";import"./httpAdmin-BanGTpNR.js";import"./aria-nkjrUMQ-.js";import"./validator-xYU3qUsW.js";import"./vnode-L42ox0x6.js";const j={class:"card-header"},q=M({__name:"ContestManagerPage",setup(R){const _=A(),s=d(),i=d({page:1,pageSize:10}),p=async()=>{const t=await L(i.value);s.value=t.data},b=async t=>{console.log(t.id),_.push({name:"admin-contest-edit",params:{cid:t.id}})},h=async t=>{V.confirm("即将删除".concat(t.title,"，是否继续?"),"Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const o=await U({cid:t.id});f({type:"success",message:o.msg}),p()}).catch(()=>{f({type:"info",message:"操作已取消"})})};function v(t){return t.privatized===0?"Public":"Private"}function y(t){return t.contest_status===0?"Upcoming":t.contest_status===1?"Active":"Finished"}function C(t){return t.finished?"Yes":"No"}return I(async()=>{p()}),(t,o)=>{const a=B,l=T,E=S,x=k,w=P;return N(),$(w,{class:"contest-manager-page-box"},{header:r(()=>[u("div",j,[u("span",null,D(t.$route.meta.title),1)])]),default:r(()=>{var m,c;return[e(E,{data:(m=s.value)==null?void 0:m.records,style:{width:"100%"},"header-cell-style":{"text-align":"center",color:"#000","font-weight":"bold"},"cell-style":{"text-align":"center"}},{default:r(()=>[e(a,{prop:"id",label:"ID"}),e(a,{prop:"title",label:"标题"}),e(a,{prop:"nickname",label:"创建者"}),e(a,{prop:"privatized",label:"权限",formatter:v}),e(a,{prop:"contestStatus",label:"比赛状态",formatter:y}),e(a,{prop:"finished",label:"是否已完成",formatter:C}),e(a,{prop:"beginTime",label:"开始时间",width:"120"}),e(a,{prop:"endTime",label:"结束时间",width:"120"}),e(a,{prop:"duration",label:"持续时间",width:"120"}),e(a,{label:"操作",width:"180"},{default:r(n=>[e(l,{onClick:z=>b(n.row),type:"primary"},{default:r(()=>[g("编辑")]),_:2},1032,["onClick"]),e(l,{onClick:z=>h(n.row),type:"danger"},{default:r(()=>[g("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(x,{background:"",layout:"prev, pager, next",class:"page-box","current-page":i.value.page,"onUpdate:currentPage":o[0]||(o[0]=n=>i.value.page=n),"page-size":i.value.pageSize,"onUpdate:pageSize":o[1]||(o[1]=n=>i.value.pageSize=n),onCurrentChange:p,total:(c=s.value)==null?void 0:c.total,style:{float:"right",padding:"10px"}},null,8,["current-page","page-size","total"])]}),_:1})}}}),wt=F(q,[["__scopeId","data-v-86fb0017"]]);export{wt as default};
