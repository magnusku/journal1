import{r as l,c as t,p as a,a as e,o as n,b as s,d as o,e as u,w as r,v as i,u as d,i as c,F as p,f as m,g as f,t as h,h as v}from"./vendor.edcc51c9.js";a("data-v-7aa9dad7");const b={name:"importForm"},y=o("label",{for:"fileinput"}," Select file: ",-1),F=o("input",{id:"fileinput",type:"file",name:"csvfile"},null,-1);e();const w={expose:[],emits:["upload-success","upload-fail"],setup(t,{emit:a}){async function e(){const l=new FormData(document.forms.importForm);try{(await fetch("/api/journal/import",{method:"POST",body:l})).ok?a("upload-success"):a("upload-fail")}catch(t){console.error(t)}}return l(),(l,t)=>(n(),s("form",b,[y,F,o("button",{type:"button",onClick:e},"Import")]))},__scopeId:"data-v-7aa9dad7"};a("data-v-3f0369d7");const x=o("header",null,[o("h1",null,"Journal1")],-1),j={class:"action-panel"},L={key:0,class:"table-container"},k=o("span",null,"Filter:",-1),_=o("thead",null,[o("tr",null,[o("th",null,"Personal Number"),o("th",null,"First Name"),o("th",null,"Last name"),o("th",null,"Birthday"),o("th",null,"Address")])],-1);e();const g={expose:[],setup(a){const e=l([]);async function v(){const l=await fetch("/api/journal"),t=await l.json();e.value=t}u((()=>{v()}));const{textFilter:b,filteredList:y}=function(a){const e=l(""),n=t((()=>a.value.filter((l=>!(e.value.length>0)||Object.values(l).some((l=>l.toLowerCase().indexOf(e.value.toLowerCase())>-1))))));return{textFilter:e,filteredList:n}}(e);return(l,t)=>(n(),s(p,null,[x,o("main",null,[o("section",j,[o(w,{onUploadSuccess:v,onUploadFailed:t[1]||(t[1]=()=>{})})]),e.value.length>0?(n(),s("div",L,[o("form",null,[o("label",null,[k,r(o("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>c(b)?b.value=l:null)},null,512),[[i,d(b)]])])]),o("table",null,[_,o("tbody",null,[(n(!0),s(p,null,m(d(y),(l=>(n(),s("tr",{key:l.personalnumber},[o("td",null,h(l.personalnumber),1),o("td",null,h(l.firstname),1),o("td",null,h(l.lastname),1),o("td",null,h(l.birthday),1),o("td",null,h(l.address),1)])))),128))])])])):f("",!0)])],64))},__scopeId:"data-v-3f0369d7"};v({expose:[],setup:l=>(l,t)=>(n(),s(g))}).mount("#app");
