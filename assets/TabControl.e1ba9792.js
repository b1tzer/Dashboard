import{_ as a,d as t,u as e,L as s,G as l,a4 as i,b as n,k as d,f as c,g as o,F as r,l as p,C as u,w as b,z as h,A as m,o as v,v as f,a6 as g,T as w,s as y}from"./index.7c612494.js";const k=a=>(h("data-v-4ca6b3c8"),a=a(),m(),a),x={class:"wrapper"},S=k((()=>c("div",{class:"title"},"多页设置",-1))),T={class:"content"},N={class:"list-wrapper"},O=["data-idx"],C=["onDblclick"],J={class:"operation-wrapper"},L={key:0,class:"operation btn btn-small btn-info",disabled:""},V=["onClick"],_=["onClick"],B=[k((()=>c("i",{class:"el-icon-plus",style:{"margin-right":"4px"}},null,-1))),y(" 新增 ")],F=k((()=>c("div",{class:"title",style:{"margin-top":"20px"}},"其他设置",-1))),I={class:"content"},D={class:"flex-center-y",style:{height:"100%"}},j={class:"flex-center-y",style:{height:"100%"}};var G=a(t({setup(a){const t=e(),h=s((()=>t.state.tabList));l((()=>{if(!h.value||0===h.value.length){const a=[{id:i(),selected:!0}];t.dispatch("updateTabList",a)}}));const m=()=>{const a={id:i(),data:{list:[],affix:[],global:{background:"#242428",backgroundFilter:"brightness(0.8)",gutter:10,css:"",js:"",globalFontFamily:"",siteTitle:""},showBackgroundEffect:!1,showRefreshBtn:!0}},e=JSON.parse(JSON.stringify(h.value));e.length>6?alert("标签页已达上限，无法添加"):(e.push(a),t.dispatch("updateTabList",e))},y=s({get:()=>t.state.showTabSwitchBtn,set:a=>{t.dispatch("updateState",{key:"showTabSwitchBtn",value:a})}}),k=s({get:()=>t.state.enableKeydownSwitchTab,set:a=>{t.dispatch("updateState",{key:"enableKeydownSwitchTab",value:a})}});return(a,e)=>{const s=n("el-alert"),l=n("el-switch"),i=n("el-form-item"),G=n("el-form");return v(),d("div",x,[S,c("div",T,[o(s,{title:"允许用户配置出多个独立的标签页面，双击标题可以重命名。",type:"warning",closable:!1,style:{"margin-bottom":"8px"}}),c("div",N,[(v(!0),d(r,null,p(u(h),((a,e)=>(v(),d("div",{class:"item",key:a.id,"data-idx":e+1},[c("div",{class:"name",onDblclick:e=>(a=>{const e=window.prompt("重命名标签页");if(e){const s=JSON.parse(JSON.stringify(h.value)),l=s.findIndex((t=>t.id===a));~l&&(s[l].name=e,t.dispatch("updateTabList",s))}})(a.id)},f(a.name||"未命名"),41,C),c("div",J,[a.selected?(v(),d("button",L,"当前应用")):(v(),d(r,{key:1},[c("button",{class:"operation btn btn-small btn-warning",onClick:e=>{return s=a.id,void t.dispatch("updateTabSelected",s);var s}},"应用",8,V),c("button",{class:"operation btn btn-small btn-danger",style:{"margin-left":"10px"},onClick:e=>(a=>{if(window.confirm("删除后不可恢复, 确认要删除该标签页?")){const e=JSON.parse(JSON.stringify(h.value)),s=e.findIndex((t=>t.id===a));~s&&(e.splice(s,1),t.dispatch("updateTabList",e))}})(a.id)},"删除",8,_)],64))])],8,O)))),128)),c("div",{class:"btn-add-wrapper"},[c("button",{class:"btn btn-primary",onClick:m},B)])])]),F,c("div",I,[o(G,{"label-width":"110px"},{default:b((()=>[o(i,{label:"展示切换按钮"},{default:b((()=>[c("div",D,[o(l,{modelValue:u(y),"onUpdate:modelValue":e[0]||(e[0]=a=>g(y)?y.value=a:null)},null,8,["modelValue"]),o(w,{content:"在页面底部展示切换按钮"})])])),_:1}),o(i,{label:"方向键切换"},{default:b((()=>[c("div",j,[o(l,{modelValue:u(k),"onUpdate:modelValue":e[1]||(e[1]=a=>g(k)?k.value=a:null)},null,8,["modelValue"]),o(w,{content:"使用DOWN或RIGHT切换下一个，设置刷新页面后才会生效"})])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-4ca6b3c8"]]);export{G as default};
