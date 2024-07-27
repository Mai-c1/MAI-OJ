import{c as se,r as ie,E as ue,d as ce,a as pe,b as de,e as me,u as _e,p as Z}from"./base-Dmc89mKD.js";import{E as ee}from"./el-card-B6dktkoU.js";import{m as H,E as te,a as ge,b as fe,c as ve}from"./moment-CIK4Pa1-.js";import{d as z,i as x,s as N,v as be,l as o,o as h,e as Y,w as t,a as e,q as S,x as V,y as T,c as D,h as A,t as I,F,g as E,f as he,j as le,B as Se,p as Ce,m as ye,C as K}from"./index-Dn-edppu.js";import{E as oe,a as ae}from"./el-form-item-V9VCdt-L.js";import{E as Q}from"./el-button-DL2Uki3s.js";import{E as ne,a as re}from"./el-radio-group-B9yDnMjs.js";import{E as X}from"./el-input-Ck3Sk370.js";import"./el-scrollbar-CkmdMjYI.js";import"./el-popper-C69rmuOe.js";import{_ as we}from"./RichTextEditor.vue_vue_type_script_setup_true_lang-DvMSTQQF.js";import{u as O}from"./ContestStore-DOrWzrns.js";/* empty css                   */import{E as L}from"./index-9yJTIgDc.js";import{E as Ee}from"./el-pagination-B1MYjK4b.js";/* empty css               */import"./el-select-912Tzl8O.js";import{E as ke,a as Pe}from"./el-table-column-DjKpmSVH.js";import"./el-tooltip-l0sNRNKZ.js";import{g as Ve}from"./Problem-CxGdyxJg.js";import{E as Te}from"./index-CVNiNkyg.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as xe}from"./contest-JI1CxVvc.js";import{E as De}from"./el-message-box-CBaqC0x4.js";import"./el-overlay-CZnn-qg6.js";import{E as $e}from"./el-link-Bt9lQGw_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-global-config-BzjFfdpB.js";import"./index-B5hLXLUr.js";import"./index-SJO8g5RM.js";import"./use-form-item-EYKE932x.js";import"./constants-BY1Y5JjR.js";import"./event-BB_Ol6Sd.js";import"./vnode-xvH26S5z.js";import"./castArray-CAm_z0eB.js";import"./_baseClone-CWyJgUFy.js";import"./scroll-CCev1fq5.js";import"./_initCloneObject-BIdSPD1R.js";import"./index-riLredlm.js";import"./focus-trap-_SqgKcM8.js";import"./httpAdmin-klL3C2Od.js";import"./aria-nkjrUMQ-.js";import"./validator-B2gejxFl.js";const Ue={style:{width:"100%",display:"flex","justify-content":"center"}},Ie=z({__name:"ContestSettingPage",emits:["changeStep"],setup(k,{emit:b}){const _=x(),n=b,s=O(),{createContestParams:l}=N(s),v=x(),m=x(),i=()=>{l.value.registerBeginTime=H(v.value[0]).format("YYYY-MM-DD HH:mm:ss"),l.value.registerEndTime=H(v.value[1]).format("YYYY-MM-DD HH:mm:ss")},g=()=>{l.value.beginTime=H(m.value[0]).format("YYYY-MM-DD HH:mm:ss"),l.value.endTime=H(m.value[1]).format("YYYY-MM-DD HH:mm:ss")},d=(f,a,c)=>(console.log("checkDateTime"),console.log(a),v.value?c():c(new Error("请选择比赛报名时间"))),u=(f,a,c)=>{if(console.log("checkDateTime"),console.log(a),!m.value)return c(new Error("请选择比赛开始时间"));if(m.value)return c()},r=()=>{var f;(f=_.value)==null||f.validate((a,c)=>{a?n("changeStep",1):L({message:"请将参数填写完整",type:"warning"})})},y=be({title:[{required:!0,message:"请输入比赛名称",trigger:"blur"}],registerTime:[{required:!0,message:"请选择比赛报名时间",validator:d,trigger:"blur"}],contestTime:[{required:!0,message:"请选择比赛开始时间",validator:u,trigger:"blur"}],privatized:[{required:!0,message:"请选择是否公开比赛",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],contestMode:[{required:!0,message:"请选择比赛类型",trigger:"blur"}],description:[{required:!0,message:"请输入比赛描述",trigger:"blur"}]});return(f,a)=>{const c=X,M=te,w=oe,q=ge,$=ne,P=re,G=Q,J=ae;return o(l)?(h(),Y(J,{key:0,ref_key:"contestSettingFormRef",ref:_,class:"contest-setting-page-box",rules:y,model:o(l),"require-asterisk-position":"right","validate-on-rule-change":!0},{default:t(()=>[e(w,{label:"比赛名称","inline-message":"",prop:"title"},{default:t(()=>[e(M,{span:8},{default:t(()=>[e(c,{placeholder:"输入比赛名称",modelValue:o(l).title,"onUpdate:modelValue":a[0]||(a[0]=p=>o(l).title=p)},null,8,["modelValue"])]),_:1})]),_:1}),e(w,{label:"报名时间",prop:"registerTime",required:""},{default:t(()=>[e(M,{span:12},{default:t(()=>[e(q,{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=p=>v.value=p),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",onChange:i},null,8,["modelValue"])]),_:1})]),_:1}),e(w,{label:"比赛时间",prop:"contestTime",required:""},{default:t(()=>[e(M,{span:12},{default:t(()=>[e(q,{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=p=>m.value=p),type:"datetimerange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",onChange:g},null,8,["modelValue"])]),_:1})]),_:1}),e(w,{label:"比赛权限",prop:"privatized"},{default:t(()=>[e(P,{modelValue:o(l).privatized,"onUpdate:modelValue":a[3]||(a[3]=p=>o(l).privatized=p)},{default:t(()=>[e($,{value:0},{default:t(()=>[S("公开比赛")]),_:1}),e($,{value:1},{default:t(()=>[S("私有比赛")]),_:1})]),_:1},8,["modelValue"]),V(e(c,{placeholder:"私有密码",modelValue:o(l).privatePwd,"onUpdate:modelValue":a[4]||(a[4]=p=>o(l).privatePwd=p)},null,8,["modelValue"]),[[T,o(l).privatized]])]),_:1}),e(w,{label:"比赛赛制",prop:"contestMode"},{default:t(()=>[e(P,{modelValue:o(l).contestMode,"onUpdate:modelValue":a[5]||(a[5]=p=>o(l).contestMode=p)},{default:t(()=>[(h(),D(F,null,A([{label:"ACM",value:0},{label:"OI",value:1},{label:"IOI",value:2}],(p,W)=>e($,{key:W,label:p.value,value:p.value},{default:t(()=>[S(I(p.label),1)]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(w,{label:"比赛说明",prop:"description"},{default:t(()=>[e(we,{content:o(l).description,"onUpdate:content":a[6]||(a[6]=p=>o(l).description=p)},null,8,["content"])]),_:1}),e(w,null,{default:t(()=>[E("div",Ue,[e(G,{type:"primary",onClick:r,size:"large"},{default:t(()=>[S("下一步")]),_:1})])]),_:1})]),_:1},8,["rules","model"])):he("",!0)}}}),Me={class:"problem-list-box"},Ye={style:{cursor:"pointer",width:"20px",height:"20px",color:"#73767a","font-size":"18px"}},ze={style:{display:"flex","align-items":"center","justify-content":"center","margin-top":"30px"}},qe=z({__name:"SelectProblemSetPage",emits:["changeStep","handleSelected"],setup(k,{emit:b}){const _=x([]),n=x({page:1,pageSize:10}),s=b,l=x(),v=async()=>{l.value=await Ve(n.value)},m=()=>{s("changeStep",-1)},i=()=>{s("changeStep",1)},g=u=>{_.value.push(u),s("handleSelected",_.value)},d=u=>{_.value=_.value.filter(r=>r.id!==u.id),s("handleSelected",_.value)};return le(async()=>{await v()}),(u,r)=>{const y=X,f=Q,a=te,c=oe,M=ne,w=re,q=ae,$=ue,P=ke,G=Te,J=Pe,p=Ee,W=ee;return h(),Y(W,{class:"select-problem-list-page-box"},{header:t(()=>[e(q,{class:"problem-list-header"},{default:t(()=>[e(c,{label:"关键词"},{default:t(()=>[e(a,{span:6,style:{display:"flex"}},{default:t(()=>[e(y,{placeholder:"输入关键词",style:{"margin-right":"15px"}}),e(f,{type:"primary"},{default:t(()=>[S("搜索")]),_:1})]),_:1})]),_:1}),e(c,{label:"平台"},{default:t(()=>[e(w,null,{default:t(()=>[(h(!0),D(F,null,A([{label:"ALL",value:void 0},{label:"HDU",value:0},{label:"POJ",value:1},{label:"CF",value:2}],(U,B)=>(h(),Y(M,{key:B,label:U.value,value:U.value},{default:t(()=>[S(I(U.label),1)]),_:2},1032,["label","value"]))),128))]),_:1})]),_:1})]),_:1})]),default:t(()=>{var U,B;return[E("div",Me,[e(J,{data:(U=l.value)==null?void 0:U.records},{default:t(()=>[e(P,{width:"30px"},{default:t(C=>[E("div",Ye,[V(e($,{onClick:R=>g(C.row)},{default:t(()=>[e(o(se))]),_:2},1032,["onClick"]),[[T,!_.value.includes(C.row)]]),V(e($,{onClick:R=>d(C.row)},{default:t(()=>[e(o(ie))]),_:2},1032,["onClick"]),[[T,_.value.includes(C.row)]])])]),_:1}),e(P,{prop:"display_id",label:"题目ID",width:"120"}),e(P,{prop:"title",label:"标题"}),e(P,{label:"标签"},{default:t(C=>[(h(!0),D(F,null,A(C.row.tbTagList,R=>(h(),Y(G,{key:R.id,"disable-transitions":!0},{default:t(()=>[S(I(R.tagName),1)]),_:2},1024))),128))]),_:1}),e(P,{prop:"difficulty",label:"Difficulty",width:"100",align:"center"})]),_:1},8,["data"]),e(p,{background:"",layout:"prev, pager, next","current-page":n.value.page,"onUpdate:currentPage":r[0]||(r[0]=C=>n.value.page=C),"page-size":n.value.pageSize,"onUpdate:pageSize":r[1]||(r[1]=C=>n.value.pageSize=C),onCurrentChange:v,total:(B=l.value)==null?void 0:B.total,style:{float:"right",padding:"10px"}},null,8,["current-page","page-size","total"])]),E("div",ze,[e(f,{type:"primary",onClick:m},{default:t(()=>[S("上一步")]),_:1}),e(f,{type:"primary",onClick:i},{default:t(()=>[S("下一步")]),_:1})])]}),_:1})}}}),Be=j(qe,[["__scopeId","data-v-476a146f"]]),Re={class:"arrange-problem-order-box"},He={style:{width:"30px"}},Le={style:{display:"flex","align-items":"center","justify-content":"center","margin-top":"30px"}},Ae=z({__name:"ArrangeOrderPage",emits:["changeStep"],setup(k,{emit:b}){const _=O(),{createContestParams:n,createResult:s}=N(_),l=b,v=(d,u)=>{const r=n.value.problemSet[d];n.value.problemSet[d]=n.value.problemSet[u],n.value.problemSet[u]=r,L({message:"交换成功",type:"success"})},m=d=>{console.log(d),De.confirm("确定要删除吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{n.value.problemSet.splice(d,1),L({type:"success",message:"Delete completed"})}).catch(()=>{L({type:"info",message:"Delete canceled"})})},i=()=>{l("changeStep",-1)},g=async()=>{s.value=await xe(n.value),l("changeStep",1)};return Se(()=>{var d;for(let u=0;u<((d=n.value.problemSet)==null?void 0:d.length);u++)n.value.problemSet[u].label=String.fromCharCode(65+u)}),(d,u)=>{const r=X,y=Q;return h(),D("div",Re,[(h(!0),D(F,null,A(o(n).problemSet,(f,a)=>(h(),D("div",{class:"item",key:a},[E("span",He,I(f.label),1),e(r,{modelValue:f.originalTitle,"onUpdate:modelValue":c=>f.originalTitle=c,style:{width:"25vw",height:"3vw"},disabled:""},null,8,["modelValue","onUpdate:modelValue"]),e(r,{modelValue:f.title,"onUpdate:modelValue":c=>f.title=c,style:{width:"25vw",height:"3vw"}},null,8,["modelValue","onUpdate:modelValue"]),e(y,{type:"danger",icon:o(ce),circle:"",onClick:c=>m(a)},null,8,["icon","onClick"]),e(y,{icon:o(pe),circle:"",disabled:a==0,onClick:c=>v(a,a-1)},null,8,["icon","disabled","onClick"]),e(y,{icon:o(de),circle:"",disabled:a==o(n).problemSet.length-1,onClick:c=>v(a,a+1)},null,8,["icon","disabled","onClick"])]))),128)),E("div",Le,[e(y,{type:"primary",onClick:i},{default:t(()=>[S("上一步")]),_:1}),e(y,{type:"primary",onClick:g},{default:t(()=>[S("创建比赛")]),_:1})])])}}}),Fe=j(Ae,[["__scopeId","data-v-2c1a00d5"]]),Ne=k=>(Ce("data-v-162ae539"),k=k(),ye(),k),Oe={class:"complete-create-box"},je={class:"message-box"},Ge=Ne(()=>E("p",null,"快邀请你的小伙伴来参加吧！",-1)),Je=z({__name:"CreatedPage",emits:["changeStep"],setup(k,{emit:b}){const _=O(),{createContestParams:n,createResult:s}=N(_),l=x("");return le(async()=>{s.value={data:130,msg:"比赛创建成功",code:200},l.value=window.location.host}),(v,m)=>{var g,d,u;const i=$e;return h(),D("div",Oe,[E("div",je,I((g=o(s))==null?void 0:g.msg),1),V(E("div",null,[Ge,e(i,{href:"http://".concat(l.value,"/contest/").concat((d=o(s))==null?void 0:d.data)},{default:t(()=>{var r;return[S(I("http://".concat(l.value,"/contest/").concat((r=o(s))==null?void 0:r.data)),1)]}),_:1},8,["href"])],512),[[T,(u=o(s))==null?void 0:u.data]])])}}}),We=j(Je,[["__scopeId","data-v-162ae539"]]),Ke=z({__name:"CreateContestPage",setup(k){const b=x(0),_=O(),{createContestParams:n,createResult:s}=N(_),l=m=>{console.log(n.value.description),b.value+=m},v=m=>{console.log("转换"),console.log(m),n.value.problemSet=m.map((i,g)=>({label:String.fromCharCode(65+g),originalTitle:i.title,title:i.title,pid:i.id})),console.log()};return(m,i)=>{const g=fe,d=ve,u=ee;return h(),Y(u,{class:"contest-create-page-box"},{default:t(()=>[e(d,{space:200,active:b.value,simple:"",class:"steps-box"},{default:t(()=>[e(g,{title:"比赛设置",icon:o(me)},null,8,["icon"]),e(g,{title:"选择题目",icon:o(_e)},null,8,["icon"]),e(g,{title:"排列题目",icon:o(Z)},null,8,["icon"]),e(g,{title:"创建完成",icon:o(Z)},null,8,["icon"])]),_:1},8,["active"]),V(e(Ie,{onChangeStep:l},null,512),[[T,b.value==0]]),V(e(Be,{onChangeStep:l,onHandleSelected:v},null,512),[[T,b.value==1]]),V(e(Fe,{onChangeStep:l,"problem-set":o(n).problemSet,"onUpdate:problemSet":i[0]||(i[0]=r=>o(n).problemSet=r),params:o(n),"onUpdate:params":i[1]||(i[1]=r=>K(n)?n.value=r:null),result:o(s),"onUpdate:result":i[2]||(i[2]=r=>K(s)?s.value=r:null)},null,8,["problem-set","params","result"]),[[T,b.value==2]]),V(e(We,{onChangeStep:l,result:o(s),"onUpdate:result":i[3]||(i[3]=r=>K(s)?s.value=r:null)},null,8,["result"]),[[T,b.value==3]])]),_:1})}}}),Ht=j(Ke,[["__scopeId","data-v-71caac0d"]]);export{Ht as default};
