import{aB as s,ag as o}from"./index-CS6SEU-6.js";const r=s.create({baseURL:"/admin-api",timeout:5e3});r.interceptors.request.use(e=>{const t=o().getToken();return t&&(e.headers.satoken=t),e},e=>Promise.reject(e));r.interceptors.response.use(e=>e.data,e=>Promise.reject(e));export{r as h};
