(function(e){function t(t){for(var r,s,l=t[0],i=t[1],u=t[2],c=0,h=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"nav"}}),n("router-view")],1)},a=[],s={name:"App",components:{}},l=s,i=(n("034f"),n("2877")),u=Object(i["a"])(l,o,a,!1,null,null,null),p=u.exports,c=n("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:n("8ecd"),alt:"bushySmile.png"}}),r("h1",[e._v("Login to learn how to be happy")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("label",[e._v("User Name")]),e._v(" "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"username",attrs:{type:"text",required:""},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),r("br"),r("br"),r("label",[e._v("Password")]),e._v(" "),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"password",attrs:{type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("br"),r("br"),r("button",{attrs:{type:"submit"}},[e._v("Log In")])])])},f=[],d={data:function(){return{userName:"",password:""}},methods:{login:function(){"admin"==this.userName&&"admin"==this.password&&(localStorage.setItem("token","ImLogin"),this.$router.push("/"))}}},m=d,v=Object(i["a"])(m,h,f,!1,null,null,null),b=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[e._v("Logout")])])},w=[],y={methods:{logout:function(){localStorage.removeItem("token"),this.$router.push("/login")}}},_=y,x=Object(i["a"])(_,g,w,!1,null,null,null),O=x.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v("How to be happy like BushyTail "+e._s(e.msg))]),r("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:n("6b8a"),alt:"bushySmile.png"}}),r("h3",[e._v("Smile")]),e._m(0),r("h3",[e._v("Exercise")]),e._m(1),r("h3",[e._v("Get plenty of sleep")]),e._m(2)])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" You tend to smile when you’re happy. But it’s actually a two-way street. "),n("a",{attrs:{href:"https://www.healthline.com/health/how-to-be-happy#daily-habits",target:"_blank",rel:"noopener"}},[e._v("HealthLine")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Exercise isn’t just for your body. Regular exercise can help to reduce stress, feelings of anxiety, and symptoms of depression while boosting self-esteem and happiness. "),n("a",{attrs:{href:"https://www.healthline.com/health/how-to-be-happy#daily-habits",target:"_blank",rel:"noopener"}},[e._v("HealthLine")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" No matter how much modern society steers us toward less sleep, we know that adequate sleep is vital to good health, brain function, and emotional well-being. "),n("a",{attrs:{href:"https://www.healthline.com/health/how-to-be-happy#daily-habits",target:"_blank",rel:"noopener"}},[e._v("HealthLine")]),e._v(". ")])}],k={name:"HelloWorld",props:{msg:String}},E=k,N=(n("7443"),Object(i["a"])(E,S,j,!1,null,"d9dd3274",null)),P=N.exports,$=[{path:"/login",component:b},{path:"/",components:{default:P,nav:O}},{path:"*",redirect:"/"}];r["a"].use(c["a"]);var L=new c["a"]({routes:$,mode:"history"});L.beforeEach((function(e,t,n){var r="ImLogin"==localStorage.getItem("token");r?n():"/login"!==e.path?n("/login"):n()})),new r["a"]({el:"#app",router:L,render:function(e){return e(p)}})},"6b8a":function(e,t,n){e.exports=n.p+"img/bushySmile.623933de.png"},7443:function(e,t,n){"use strict";n("781a")},"781a":function(e,t,n){},"85ec":function(e,t,n){},"8ecd":function(e,t,n){e.exports=n.p+"img/bushyCry.7a9d859c.png"}});
//# sourceMappingURL=app.b3902584.js.map