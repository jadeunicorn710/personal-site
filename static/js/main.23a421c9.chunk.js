(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(0),i=t(1),l=t(16),a=t(3),s=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=t(5),d=t(22),h=[{index:!0,label:"Yunlin Qi",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return t.e(5).then(t.t.bind(null,169,7))})),x=function(){var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],l=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=t(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Yunlin Qi"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:qiyunlin710@gmail.com",children:"qiyunlin710@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Yunlin. I go by Jason. I am a ",Object(c.jsx)("a",{href:"https://www.cc.gatech.edu/",children:"Georgia Tech CS"})," graduate and also a ",Object(c.jsx)("a",{href:"https://arthena.com",children:"U of I CEE"})," graduate. I currently work at ",Object(c.jsx)("a",{href:"https://uzuncase.com/",children:"Uzun+Case"})," as a Project Engineer. I am dedicated to delivering exciting and quality building designs of various types to our clients, and I also develop software to enhance efficiency and productivity."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Yunlin Qi ",Object(c.jsx)(u.b,{to:"/",children:"yunlinqi.net"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Yunlin Qi",defaultTitle:"Yunlin Qi",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Yunlin Qi's personal website."};n.a=v},25:function(e,n,t){"use strict";var c=t(0),i=(t(1),t(29)),l=t(30),a=t(32),s=t(31),r=t(33),j=[{link:"https://github.com/jadeunicorn710",label:"Github",icon:l.faGithub},{link:"https://leetcode.com/Jadeunicorn710/",label:"LeetCode",icon:s.a},{link:"https://www.linkedin.com/in/yunlinqi/",label:"LinkedIn",icon:a.faLinkedinIn},{link:"mailto:qiyunlin710@gmail.com",label:"Email",icon:r.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),l=t.n(i),a=t(15),s=t(5),r=t(3),j=t(21),o=(t(46),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(8)]).then(t.bind(null,166))}))),b=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,173))})),u=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,167))})),d=Object(i.lazy)((function(){return t.e(11).then(t.bind(null,168))})),h=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,172))})),O=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,170))})),x=Object(i.lazy)((function(){return Promise.all([t.e(4),t.e(12)]).then(t.bind(null,171))})),m=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:x}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),f):Object(a.render)(Object(c.jsx)(p,{}),f)}},[[47,1,3]]]);
//# sourceMappingURL=main.23a421c9.chunk.js.map