import{_ as y,s as I,q as P,r as C,k as T,b as c,c as r,u as o,e,t as s,F as w,f as x,j as B,p as N,i as D}from"./index-c0bb6830.js";import{u as h}from"./shopping-e17d4055.js";import{M}from"./MessageReminder-0274b9af.js";const R=i=>(N("data-v-9818c0f6"),i=i(),D(),i),E={class:"completePage"},F={key:0,class:"orderInformation"},L=R(()=>e("div",{class:"title"},[e("h1",null,"訂單資訊")],-1)),V={class:"information"},j={class:"userInformation"},q={class:"itemInformation"},G={class:"itemName"},H={class:"itemNum"},z={class:"itemPrice"},A={key:1},J={__name:"CompletePage",setup(i){var m,v;const f=h(),{clearShoppingCar:g}=h(),{orderList:d}=I(f),_=P(),l=C(!1),a=(m=d.value)==null?void 0:m.map(t=>t.user)[0],p=(v=d.value)==null?void 0:v.map(t=>t.item)[0],S=T(()=>{let t=0;return p.forEach(u=>{t+=u.price*u.number}),t}),k=()=>{_.go(-1)},b=()=>{l.value=!0,setTimeout(()=>{l.value=!1},2e3),setTimeout(()=>{_.push("/")},3e3),g()};return(t,u)=>(c(),r("div",E,[o(a)?(c(),r("div",F,[L,e("div",V,[e("div",j,[e("div",null,"姓名:"+s(o(a).name),1),e("div",null,"電話:"+s(o(a).phone),1),e("div",null,"地址:"+s(o(a).address),1),e("div",null,"付款方式:"+s(o(a).payMent),1)]),e("div",q,[(c(!0),r(w,null,x(o(p),n=>(c(),r("div",{class:"item",key:n.id},[e("div",G,s(n.name),1),e("div",H,s(n.number)+"/份",1),e("div",z,s(n.price*n.number)+"元",1)]))),128)),e("p",null,"總計:"+s(o(S))+"元",1),e("div",{class:"btnGroup"},[e("button",{onClick:k},"回上一頁"),e("button",{onClick:b},"完成")])])])])):(c(),r("div",A,"尚無任何訂單!")),B(M,{message:"餐點訂購成功!!!",isShow:l.value},null,8,["isShow"])]))}},U=y(J,[["__scopeId","data-v-9818c0f6"]]);export{U as default};