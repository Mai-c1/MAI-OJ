import"./base-Dmc89mKD.js";import{E}from"./el-card-B6dktkoU.js";import{E as C}from"./el-pagination-B1MYjK4b.js";import"./el-input-Ck3Sk370.js";/* empty css               */import"./el-select-912Tzl8O.js";import"./el-scrollbar-CkmdMjYI.js";import"./el-popper-C69rmuOe.js";import{E as P,a as w}from"./el-table-column-DjKpmSVH.js";import"./el-tooltip-l0sNRNKZ.js";import{E as k}from"./el-button-DL2Uki3s.js";import{d as I,i as c,j as B,o as S,e as z,w as p,f as M,b as T,a as e,q as d,p as L,m as N,g}from"./index-Dn-edppu.js";import{g as V,d as A}from"./problem-BAqSDPVb.js";import{E as D}from"./el-message-box-CBaqC0x4.js";import"./el-overlay-CZnn-qg6.js";/* empty css                   */import{E as u}from"./index-9yJTIgDc.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-global-config-BzjFfdpB.js";import"./index-B5hLXLUr.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-EYKE932x.js";import"./constants-BY1Y5JjR.js";import"./index-CVNiNkyg.js";import"./scroll-CCev1fq5.js";import"./castArray-CAm_z0eB.js";import"./focus-trap-_SqgKcM8.js";import"./_initCloneObject-BIdSPD1R.js";import"./index-riLredlm.js";import"./httpAdmin-klL3C2Od.js";import"./aria-nkjrUMQ-.js";import"./validator-B2gejxFl.js";import"./vnode-xvH26S5z.js";const $=i=>(L("data-v-e7616807"),i=i(),N(),i),j=$(()=>g("div",{class:"card-header"},[g("span",null,"题目管理")],-1)),q=I({__name:"ProblemManagerPage",setup(i){const _=T(),n=c(),l=c({page:1,pageSize:10,isAsc:void 0,sortBy:void 0,keyword:void 0,platform:void 0,tagList:void 0,difficulty:void 0}),s=async()=>{n.value=await V(l.value)},f=async o=>{console.log(o.id),_.push({name:"admin-problem-edit",params:{pid:o.id}})},b=async o=>{console.log(o),D.confirm("确定要删除吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const a=await A(o.id);u({type:"success",message:a.msg}),s()}).catch(()=>{u({type:"info",message:"删除失败"})})};return B(async()=>{s()}),(o,a)=>{const t=P,m=k,y=w,v=C,h=E;return n.value?(S(),z(h,{key:0,class:"problem-manager-page-box"},{header:p(()=>[j]),default:p(()=>[e(y,{data:n.value.records,style:{width:"100%"},"header-cell-style":{"text-align":"center",color:"#000","font-weight":"bold"},"cell-style":{"text-align":"center"}},{default:p(()=>[e(t,{prop:"id",label:"ID",width:"80"}),e(t,{prop:"displayId",label:"题目展示ID"}),e(t,{prop:"title",label:"题目标题"}),e(t,{prop:"difficulty",label:"难度"}),e(t,{prop:"platform",label:"所属平台"}),e(t,{prop:"author",label:"上传者"}),e(t,{label:"操作"},{default:p(r=>[e(m,{onClick:x=>f(r.row),type:"primary"},{default:p(()=>[d("编辑")]),_:2},1032,["onClick"]),e(m,{onClick:x=>b(r.row),type:"danger"},{default:p(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(v,{background:"",layout:"prev, pager, next",class:"page-box","current-page":l.value.page,"onUpdate:currentPage":a[0]||(a[0]=r=>l.value.page=r),"page-size":l.value.pageSize,"onUpdate:pageSize":a[1]||(a[1]=r=>l.value.pageSize=r),onCurrentChange:s,total:n.value.total,style:{float:"right",padding:"10px"}},null,8,["current-page","page-size","total"])]),_:1})):M("",!0)}}}),xe=U(q,[["__scopeId","data-v-e7616807"]]);export{xe as default};
