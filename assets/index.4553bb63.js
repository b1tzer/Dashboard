var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,r=(t,r)=>{for(var i in r||(r={}))n.call(r,i)&&a(t,i,r[i]);if(e)for(var i of e(r))o.call(r,i)&&a(t,i,r[i]);return t};import{_ as i,d as p,r as c,B as s,H as l,L as d,k as u,v as S,n as m,N as w,o as f}from"./index.abe922a7.js";var g=i(p({name:"Clock",props:{componentSetting:{type:Object,required:!0}},setup(t){const e=c(n());function n(){const t=(new Date).getHours(),e=(new Date).getMinutes();return`${t}:${e<10?"0"+e:e}`}let o;function a(){var a;e.value=n(),o=window.setInterval((()=>{e.value=n()}),(null==(a=t.componentSetting)?void 0:a.duration)||5e3)}a(),s((()=>t.componentSetting.duration),(()=>{window.clearInterval(o),a()})),l((()=>{window.clearInterval(o)}));const r=d((()=>w(t.componentSetting.position)));return{now:e,positionCSS:r}}}),[["render",function(t,e,n,o,a,i){return f(),u("div",{class:"wrapper",style:m(r({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS))},S(t.now),5)}],["__scopeId","data-v-2db8cf8c"]]);export{g as default};
