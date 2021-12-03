import{i as D,g as G,L as T,r as b,s as U,a as z,u as A,b as L,o as l,c as i,d as e,e as f,w as v,f as c,h as W,F as J,j as u,t as _,k as K,l as E,m as X,n as I,p as Y,q as N,v as B,x as H,y as C,z as Q,A as Z,B as ee,C as te,D as oe,E as se}from"./vendor.1d2ab3fa.js";const ne=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};ne();const re={apiKey:"AIzaSyC5X3jJDeUcCRSPCPRGNUeBJrGIovd7Olc",authDomain:"d-web-308fb.firebaseapp.com",projectId:"d-web-308fb",storageBucket:"d-web-308fb.appspot.com",messagingSenderId:"244116774046",appId:"1:244116774046:web:f3f72c66b43276b62a2f8f"},ae=D(re),j=G(ae);T();const w=b(!1),x=b(""),g=()=>({isAuthenticated:w,login:async(o,a)=>{const t=await U(j,o,a);t.user&&(w.value=!0,x.value=t.user.email)},logout:async()=>{await z(j),w.value=!1,x.value=""},user:x}),le={class:"text-yellow-200 bg-yellow-800"},ie={class:"container flex items-center justify-between mx-auto"},ce=e("h1",{class:"text-3xl font-thin tracking-tighter"},[e("span",{class:"font-normal"})],-1),ue={class:"flex space-x-4"},de=e("li",{class:"px-4 py-8 hover:cursor-pointer hover:bg-yellow-500 hover:text-yellow-800"}," Home ",-1),he=e("li",{class:"px-4 py-8 hover:cursor-pointer hover:bg-yellow-500 hover:text-yellow-800"}," Login ",-1),pe={key:1,class:"flex"},_e=e("li",{class:"px-4 py-8 hover:cursor-pointer hover:bg-yellow-500 hover:text-yellow-800"}," Secret ",-1),me=e("li",{class:"px-4 py-8 hover:cursor-pointer hover:bg-yellow-500 hover:text-yellow-800"}," Logout ",-1),fe=[me],ge={setup(s){const{isAuthenticated:n,logout:o}=g(),a=A(),t=()=>{o(),a.push("/")};return(r,h)=>{const p=L("router-link");return l(),i("div",le,[e("div",ie,[ce,e("nav",null,[e("ul",ue,[f(p,{to:"/"},{default:v(()=>[de]),_:1}),c(n)?(l(),i("div",pe,[f(p,{to:{name:"Secret"}},{default:v(()=>[_e]),_:1}),e("button",{onClick:t},fe)])):(l(),W(p,{key:0,to:{path:"/login",name:"Login"}},{default:v(()=>[he]),_:1}))])])])])}}},ye={class:"container mx-auto"},be={setup(s){return(n,o)=>{const a=L("router-view");return l(),i(J,null,[f(ge),e("div",ye,[f(a)])],64)}}};var P="/assets/bushyCry.6c61082b.png";const ve={class:"flex flex-col items-center justify-center space-y-12 min-h-screen-nonav"},we={key:0,class:"text-6xl tracking-tighter font-extralight"},xe={key:1,class:"text-6xl tracking-tighter font-extralight"},$e=e("br",null,null,-1),ke=u(" Learn how to be happy now and click the secret tab "),Se=e("img",{src:P,alt:"Hello BG"},null,-1),Ae={setup(s){const{isAuthenticated:n,user:o}=g();return(a,t)=>(l(),i("div",ve,[c(n)?(l(),i("h2",xe,[u(" Hi, "+_(c(o))+" !",1),$e,ke])):(l(),i("h2",we," Are you feeling sad ")),Se]))}};var Le="/assets/bgabout.ded3f9c9.png",$=(s,n)=>{const o=s.__vccOpts||s;for(const[a,t]of n)o[a]=t;return o};const Ee={},Ie={class:"flex flex-col items-center justify-center min-h-screen-nonav"},Ne=e("h2",{class:"text-6xl tracking-tighter font-extralight"},"About Page",-1),Be=e("img",{src:Le,alt:"Hello BG"},null,-1),He=[Ne,Be];function Ce(s,n){return l(),i("div",Ie,He)}var je=$(Ee,[["render",Ce]]);const Pe=()=>{const s=b(null);return{error:s,setError:o=>{s.value=o}}},Fe={class:"flex flex-col items-center justify-center space-y-12 min-h-screen-nonav"},Oe=e("img",{src:P,alt:"bushySmile.png",style:{width:"200px",height:"200px"}},null,-1),Me=e("h1",null,"Login to learn how to be happy",-1),Re=["onSubmit"],Ve={class:"text-xs text-center text-red-500"},qe=e("br",null,null,-1),De=e("br",null,null,-1),Ge=e("br",null,null,-1),Te={class:"text-xs text-center text-red-500"},Ue=e("br",null,null,-1),ze=e("br",null,null,-1),We=e("br",null,null,-1),Je=["onSubmit"],Ke={key:0,class:"absolute w-1/3 p-4 text-center text-red-800 bg-red-300 rounded-lg bottom-2 right-2"},Xe={setup(s){const n=K({username:E().required().email().label("Email"),password:E().required().min(8).label("Password")});X({validationSchema:n});const{value:o,errorMessage:a}=I("username"),{value:t,errorMessage:r}=I("password"),{isAuthenticated:h,login:p,signup:_t,googleLogin:mt}=g(),O=A(),k=async()=>{await p(o.value,t.value),M()},M=()=>{h.value?O.push("/"):(R("Invalid username or password"),q())},{error:S,setError:R}=Pe(),{ready:V,start:q}=Y(3e3,{controls:!0});return(ft,m)=>(l(),i("div",Fe,[e("div",null,[Oe,Me,e("form",{onSubmit:N(k,["prevent"])},[e("span",Ve,_(c(a)),1),qe,B(e("input",{name:"username",type:"text",class:"p-2 border-2 rounded-lg",placeholder:"Email","onUpdate:modelValue":m[0]||(m[0]=y=>C(o)?o.value=y:null)},null,512),[[H,c(o)]]),De,Ge,e("span",Te,_(c(r)),1),Ue,B(e("input",{name:"password",type:"password",class:"p-2 border-2 rounded-lg",placeholder:"Password","onUpdate:modelValue":m[1]||(m[1]=y=>C(t)?t.value=y:null)},null,512),[[H,c(t)]]),ze,We,e("button",{type:"submit",onSubmit:N(k,["prevent"]),class:"w-1/2 py-2 text-yellow-200 bg-yellow-600 rounded-lg"}," Login ",40,Je)],40,Re)]),!c(V)&&c(S)?(l(),i("div",Ke,_(c(S)),1)):Q("",!0)]))}};var Ye="/assets/bushySmile.e7414ef7.png";const Qe={name:"HelloWorld",props:{msg:String}},d=s=>(Z("data-v-0dca8aae"),s=s(),ee(),s),Ze={class:"hello"},et=d(()=>e("img",{src:Ye,alt:"bushySmile.png",style:{width:"200px",height:"200px"}},null,-1)),tt=d(()=>e("h3",null,"Smile",-1)),ot=d(()=>e("p",null,[u(" You tend to smile when you\u2019re happy. But it\u2019s actually a two-way street. "),e("a",{href:"https://www.healthline.com/health/how-to-be-happy#daily-habits",target:"_blank",rel:"noopener"},"HealthLine"),u(". ")],-1)),st=d(()=>e("h3",null,"Exercise",-1)),nt=d(()=>e("p",null,[u(" Exercise isn\u2019t just for your body. Regular exercise can help to reduce stress, feelings of anxiety, and symptoms of depression while boosting self-esteem and happiness. "),e("a",{href:"https://www.healthline.com/health/how-to-be-happy#daily-habits",target:"_blank",rel:"noopener"},"HealthLine"),u(". ")],-1)),rt=d(()=>e("h3",null,"Get plenty of sleep",-1)),at=d(()=>e("p",null,[u(" No matter how much modern society steers us toward less sleep, we know that adequate sleep is vital to good health, brain function, and emotional well-being. "),e("a",{href:"https://www.healthline.com/health/how-to-be-happy#daily-habits",target:"_blank",rel:"noopener"},"HealthLine"),u(". ")],-1));function lt(s,n,o,a,t,r){return l(),i("div",Ze,[e("h1",null,"How to be happy like BushyTail "+_(o.msg),1),et,tt,ot,st,nt,rt,at])}var it=$(Qe,[["render",lt],["__scopeId","data-v-0dca8aae"]]);const ct={};function ut(s,n){return l(),i("h1",null,"404 Page Not Found")}var dt=$(ct,[["render",ut]]);const{isAuthenticated:F}=g(),ht=[{path:"/",name:"Index",component:Ae},{path:"/about",name:"About",component:je},{path:"/login",name:"Login",component:Xe},{path:"/secret",name:"Secret",component:it,beforeEnter:(s,n,o)=>{console.log(F),F.value||o("/login"),o()}},{path:"/:pathMatch(.*)*",name:"NotFound",component:dt}],pt=te({history:oe(),routes:ht});se(be).use(pt).mount("#app");
