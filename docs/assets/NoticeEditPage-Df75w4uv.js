import"./base-DJlLBwFh.js";import{E as v}from"./el-card-Bf00zvNI.js";import{E}from"./el-button-Bq5AjPZk.js";import{E as g}from"./el-input-Ckrm2KBb.js";import{_ as N}from"./RichTextEditor.vue_vue_type_script_setup_true_lang-B7UsQS7z.js";import{g as h,e as y}from"./notice-Hv2XU5GD.js";import{E as x}from"./index-Dk-OH1kk.js";import{d as I,i as V,j as w,o as d,e as k,w as n,c as B,g as e,a as i,f as C,q as P,p as b,m as S}from"./index-B-IKpVg7.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-global-config-CP7RREsb.js";import"./use-form-item-CfHI9IsZ.js";import"./constants-BaP7aDkc.js";import"./index-riLredlm.js";import"./index-DWz-Pt_U.js";import"./event-BB_Ol6Sd.js";import"./httpAdmin-BanGTpNR.js";const r=o=>(b("data-v-6cdfcd2c"),o=o(),S(),o),A=r(()=>e("span",null,"修改公告",-1)),M={key:0,class:"notice-create-box"},U={class:"item"},q=r(()=>e("span",null,"标题",-1)),z={class:"item"},T=r(()=>e("span",null,"正文",-1)),$={style:{display:"flex",width:"100%","justify-content":"center"}},D=I({__name:"NoticeEditPage",props:{id:{}},setup(o){const l=o,t=V(),p=async()=>{const s=await y(t.value);x({type:s.code===200?"success":"error",message:s.data})},m=async()=>{const s=await h(l.id);t.value=s.data};return w(()=>{m()}),(s,a)=>{const _=g,u=E,f=v;return d(),k(f,{class:"notice-create-page-box"},{header:n(()=>[A]),default:n(()=>[t.value?(d(),B("div",M,[e("div",U,[q,i(_,{modelValue:t.value.title,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value.title=c)},null,8,["modelValue"])]),e("div",z,[T,i(N,{content:t.value.content,"onUpdate:content":a[1]||(a[1]=c=>t.value.content=c)},null,8,["content"])])])):C("",!0),e("div",$,[i(u,{type:"primary",size:"large",onClick:p},{default:n(()=>[P("确认发布")]),_:1})])]),_:1})}}}),st=j(D,[["__scopeId","data-v-6cdfcd2c"]]);export{st as default};
