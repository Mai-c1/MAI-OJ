import{ap as e}from"./index-CS6SEU-6.js";const u=async t=>await e({url:"/judge/submitJudge",method:"POST",data:t}),d=async t=>await e({url:"/judge/testJudge",method:"POST",data:t}),s=async t=>await e({url:"/judge/getJudgeRecordList",method:"POST",data:t}),g=async t=>await e({url:"/judge/getJudgeResultById/".concat(t),method:"GET"});export{g as a,s as g,u as s,d as t};
