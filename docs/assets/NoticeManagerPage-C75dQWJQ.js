import"./base-DJlLBwFh.js";import{E as C}from"./el-card-Bf00zvNI.js";import{E as B}from"./el-pagination-AGaXoik1.js";import"./el-input-Ckrm2KBb.js";/* empty css               */import"./el-select-DYIWrPI3.js";import"./el-scrollbar-DmZ_7fZk.js";import"./el-popper-C0mGw5af.js";import{E as I,a as k}from"./el-table-column-CvXrA2CE.js";import"./el-tooltip-l0sNRNKZ.js";import{E as N}from"./el-button-Bq5AjPZk.js";import{d as S,i as u,j as T,o as z,e as P,w as n,b as M,a as e,q as g,p as q,m as L,g as _}from"./index-B-IKpVg7.js";import{q as V,d as A}from"./notice-Hv2XU5GD.js";/* empty css                   */import{E as D}from"./el-message-box-DW9VbTfh.js";import"./el-overlay-DVqE9J7h.js";import{E as f}from"./index-Dk-OH1kk.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-global-config-CP7RREsb.js";import"./isEqual-D421XMZ4.js";import"./scroll-1aRBaJ3N.js";import"./index-DWz-Pt_U.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-CfHI9IsZ.js";import"./constants-BaP7aDkc.js";import"./index-2j8ALnqu.js";import"./castArray-BJwNa5SD.js";import"./focus-trap-D4N9E80X.js";import"./_initCloneObject-349Eh7kT.js";import"./index-riLredlm.js";import"./httpAdmin-BanGTpNR.js";import"./aria-nkjrUMQ-.js";import"./validator-xYU3qUsW.js";import"./vnode-L42ox0x6.js";const $=i=>(q("data-v-1c55320d"),i=i(),L(),i),j=$(()=>_("div",{class:"card-header"},[_("span",null,"公告管理")],-1)),R=S({__name:"NoticeManagerPage",setup(i){const h=M(),s=u(),p=u({page:1,pageSize:10}),l=async()=>{const t=await V(p.value);s.value=t.data},y=async t=>{console.log(t.id),h.push({name:"admin-notice-edit",params:{id:t.id}})},b=async t=>{console.log(t),D.confirm("确定要删除吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const o=await A(t.id);f({type:o.code===200?"success":"error",message:o.data}),l()}).catch(()=>{f({type:"info",message:"删除失败"})})};return T(async()=>{l()}),(t,o)=>{const a=I,c=N,v=k,x=B,E=C;return z(),P(E,{class:"notice-manager-page-box"},{header:n(()=>[j]),default:n(()=>{var m,d;return[e(v,{data:(m=s.value)==null?void 0:m.records,style:{width:"100%"},"header-cell-style":{"text-align":"center",color:"#000","font-weight":"bold"},"cell-style":{"text-align":"center"}},{default:n(()=>[e(a,{prop:"id",label:"ID"}),e(a,{prop:"title",label:"标题"}),e(a,{prop:"content",label:"正文","show-overflow-tooltip":""}),e(a,{prop:"author",label:"作者"}),e(a,{prop:"createTime",label:"创建时间",width:"200"}),e(a,{prop:"updateTime",label:"修改时间",width:"200"}),e(a,{label:"操作",width:"180"},{default:n(r=>[e(c,{onClick:w=>y(r.row),type:"primary"},{default:n(()=>[g("编辑")]),_:2},1032,["onClick"]),e(c,{onClick:w=>b(r.row),type:"danger"},{default:n(()=>[g("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(x,{background:"",layout:"prev, pager, next",class:"page-box","current-page":p.value.page,"onUpdate:currentPage":o[0]||(o[0]=r=>p.value.page=r),"page-size":p.value.pageSize,"onUpdate:pageSize":o[1]||(o[1]=r=>p.value.pageSize=r),onCurrentChange:l,total:(d=s.value)==null?void 0:d.total,style:{float:"right",padding:"10px"}},null,8,["current-page","page-size","total"])]}),_:1})}}}),we=U(R,[["__scopeId","data-v-1c55320d"]]);export{we as default};
