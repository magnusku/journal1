import{r as e,c as l,p as t,a,o as n,b as s,d as o,e as u,u as r,w as i,v as d,i as c,F as p,f as m,g as f,t as b,h}from"./vendor.edcc51c9.js";t("data-v-f392db2e");const v={name:"importForm"},y=o("label",{for:"fileinput"}," Select file: ",-1),F=o("input",{id:"fileinput",type:"file",name:"csvfile"},null,-1);a();const w={expose:[],emits:["upload-success","upload-fail"],setup(l,{emit:t}){async function a(){const e=new FormData(document.forms.importForm);try{(await fetch("/api/journal/import",{method:"POST",body:e})).ok?t("upload-success"):t("upload-fail")}catch(l){console.error(l)}}return e(),(e,l)=>(n(),s("form",v,[y,F,o("div",null,[o("button",{type:"button",onClick:a},"Import")])]))},__scopeId:"data-v-f392db2e"};t("data-v-1517b7e2");const x=o("header",null,[o("h1",null,"Journal1")],-1),j={key:0},L=o("span",null,"Filter:",-1),k=o("thead",null,[o("tr",null,[o("th",null,"Personal Number"),o("th",null,"First Name"),o("th",null,"Last name"),o("th",null,"Birthday"),o("th",null,"Address")])],-1);a();const _={expose:[],setup(t){const a=e([]);async function h(){const e=await fetch("/api/journal"),l=await e.json();a.value=l}u((()=>{h()}));const{textFilter:v,filteredList:y}=function(t){const a=e(""),n=l((()=>t.value.filter((e=>!(a.value.length>0)||Object.values(e).some((e=>e.toLowerCase().indexOf(a.value.toLowerCase())>-1))))));return{textFilter:a,filteredList:n}}(a);return(e,l)=>(n(),s(p,null,[x,o("main",null,[o(w,{onUploadSuccess:h,onUploadFailed:l[1]||(l[1]=()=>{})}),r(y).length>0?(n(),s("div",j,[o("label",null,[L,i(o("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=e=>c(v)?v.value=e:null)},null,512),[[d,r(v)]])]),o("table",null,[k,o("tbody",null,[(n(!0),s(p,null,m(r(y),(e=>(n(),s("tr",{key:e.personalnumber},[o("td",null,b(e.personalnumber),1),o("td",null,b(e.firstname),1),o("td",null,b(e.lastname),1),o("td",null,b(e.birthday),1),o("td",null,b(e.address),1)])))),128))])])])):f("",!0)])],64))},__scopeId:"data-v-1517b7e2"};h({expose:[],setup:e=>(e,l)=>(n(),s(_))}).mount("#app");
