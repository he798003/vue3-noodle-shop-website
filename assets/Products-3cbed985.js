import{d as P,r as f,s as v,k,_ as y,b as c,c as _,F as x,f as N,e as s,t as h,j as $,w as D,u as a,l as I,p as m,i as S,n as p}from"./index-846b254a.js";import{u as C}from"./shopping-351ee919.js";const g=P("pagination",()=>{const n=f(1),r=f(6),t=f("all"),l=C(),{cardList:d}=v(l),o=i=>{t.value=i},e=k(()=>{if(t.value==="all")return d.value;if(t.value==="mainMeal")return d.value.filter(i=>i.typeEN==="mainMeal");if(t.value==="dessert")return d.value.filter(i=>i.typeEN==="dessert");if(t.value==="soup")return d.value.filter(i=>i.typeEN==="soup");if(t.value==="drinks")return d.value.filter(i=>i.typeEN==="drinks")}),b=k(()=>e.value.slice((n.value-1)*r.value,n.value*r.value));return{perPage:r,paginationData:b,filterDataHandler:o,type:t}});const L=n=>(m("data-v-84dd9d0f"),n=n(),S(),n),M={class:"productsCard"},E={class:"cardHeader"},w=["src"],B={key:1,class:"placeholder"},F={class:"tag"},H={class:"cardBody"},R={class:"cardFooter"},T=L(()=>s("button",{class:"apply"},"More",-1)),V={__name:"ProductsCard",setup(n){const r=C();v(r);const t=g(),{paginationData:l}=v(t);return(d,o)=>(c(),_("div",M,[(c(!0),_(x,null,N(a(l),e=>(c(),_("div",{class:"card",key:e.id},[s("div",E,[e.imgLink?(c(),_("img",{key:0,src:e.imgLink},null,8,w)):(c(),_("div",B)),s("div",F,[s("p",null,h(e.type),1)])]),s("div",H,[s("h3",null,h(e.title),1),s("p",null,"NT "+h(e.price)+" 元",1)]),s("div",R,[$(a(I),{to:`/shop/${e.id}`},{default:D(()=>[T]),_:2},1032,["to"])])]))),128))]))}},j=y(V,[["__scopeId","data-v-84dd9d0f"]]);const u=n=>(m("data-v-b7b15fe7"),n=n(),S(),n),z={class:"products"},q=u(()=>s("div",{class:"title"},[s("h1",null,"Menu")],-1)),A={class:"mainSection"},G={class:"menuList"},J=u(()=>s("span",null,"全部商品",-1)),K=[J],O=u(()=>s("span",null,"主餐",-1)),Q=[O],U=u(()=>s("span",null,"點心",-1)),W=[U],X=u(()=>s("span",null,"湯品",-1)),Y=[X],Z=u(()=>s("span",null,"飲品",-1)),ss=[Z],ts={__name:"Products",setup(n){const r=g(),{type:t}=v(r),{filterDataHandler:l}=g();return(d,o)=>(c(),_("div",z,[q,s("div",A,[s("div",G,[s("ul",null,[s("li",{onClick:o[0]||(o[0]=e=>a(l)("all")),class:p({active:a(t)==="all"})},K,2),s("li",{onClick:o[1]||(o[1]=e=>a(l)("mainMeal")),class:p({active:a(t)==="mainMeal"})},Q,2),s("li",{onClick:o[2]||(o[2]=e=>a(l)("dessert")),class:p({active:a(t)==="dessert"})},W,2),s("li",{onClick:o[3]||(o[3]=e=>a(l)("soup")),class:p({active:a(t)==="soup"})},Y,2),s("li",{onClick:o[4]||(o[4]=e=>a(l)("drinks")),class:p({active:a(t)==="drinks"})},ss,2)])]),$(j)])]))}},ns=y(ts,[["__scopeId","data-v-b7b15fe7"]]);export{ns as default};
