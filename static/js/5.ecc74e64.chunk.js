(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{167:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(5),o=n(21),i=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(c.jsx)(i,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},p=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(c.jsx)(u,{data:e},e.company)}))]})};p.defaultProps={data:[]};var y=p;function b(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return g(this,n)}}var h=n(57),v=n(55),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,o=t.title,i={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},i),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(c.jsxs)("div",{className:"skillbar clearfix",children:[Object(c.jsx)("div",{className:"skillbar-title",style:i,children:Object(c.jsx)("span",{children:o})}),Object(c.jsx)("div",{className:"skillbar-bar",style:s}),Object(c.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,e);var t,n,r,a=f(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,c){return Object(v.a)(Object(v.a)({},n),{},Object(h.a)({},c,e===c&&!t.buttons[c]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(h.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(c.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(c.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"link-to",id:"skills"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Skills"})}),Object(c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),r&&b(t,r),o}(r.Component);S.defaultProps={skills:[],categories:[]};var P=S,w=function(e){var t=e.data,n=e.last;return Object(c.jsxs)("li",{className:"course-container",children:[Object(c.jsx)("p",{className:"course-name",children:t.title}),!n&&Object(c.jsx)("div",{className:"course-dot",children:Object(c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};w.defaultProps={last:!1};var C=w,D=function(e){var t,n=e.data;return Object(c.jsxs)("div",{className:"courses",children:[Object(c.jsx)("div",{className:"link-to",id:"courses"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Relevant Courses"})}),Object(c.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(c.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};D.defaultProps={data:[]};var N=D,L=[{title:"Software Development Process"},{title:"Software Architecture & Design"},{title:"Database System Concepts & Design"},{title:"Data & Visual Analytics"},{title:"Graduate Algorithms"},{title:"Machine Learning"},{title:"Deep Learning"},{title:"Computer Vision"},{title:"Computer Networks"},{title:"Computational Photography"},{title:"Numerical Analysis"},{title:"Decision and Risk Analysis"},{title:"MATLAB Programing Design"},{title:"Mathematical Modeling"},{title:"Fundamental of Computer Programming"},{title:"Fundamental of Computer Culture"}],A=[{school:"Georgia Institute of Technology",degree:"M.S. Computer Science, top-10 program in US, 3.90/4.0 GPA",link:"https://www.gatech.edu/",year:2021},{school:"University of Illinois Urbana-Champaign",degree:"M.S. Civil Engineering, top-2 program in US",link:"https://illinois.edu/",year:2015},{school:"Xi'an University of Architecture & Technology",degree:"B.S. Civil Engineering, graduated with honor",link:"https://www.xauat.edu.cn/en/",year:2013}],M=[{company:"Uzun+Case",position:"Project Engineer",link:"https://uzuncase.com/",daterange:"August 2015 - Present",points:["Deliver exciting and quality building designs to clients","Develop software & tools to expedite project delivery process by automating engineering tasks, reducing repetitive work, and improving efficiency and productivity"]}],T=n(17);var J=n(23);var R,E=[{title:"Java",competency:4,category:["Languages","Java"]},{title:"Spring Boot",competency:3,category:["Web Development","Framework","Java"]},{title:"Javascript",competency:3,category:["Languages","Javascript","Web Development"]},{title:"Node.JS",competency:3,category:["Javascript","Web Development"]},{title:"React",competency:3,category:["Javascript","Web Development"]},{title:"D3",competency:3,category:["Javascript","Data Science"]},{title:"HTML + CSS",competency:3,category:["Languages","Web Development"]},{title:"Python",competency:4,category:["Languages","Python"]},{title:"Flask",competency:3,category:["Python","Web Development","Framework"]},{title:"Numpy",competency:3,category:["Python","Data Science"]},{title:"Tensorflow + Keras",competency:3,category:["Python","Machine Learning"]},{title:"Jupyter Notebook",competency:3,category:["Python","Data Science","Machine Learning"]},{title:"Pandas",competency:2,category:["Python","Data Science"]},{title:"Matplotlib",competency:2,category:["Python","Data Science"]},{title:"Scikit-Learn",competency:3,category:["Python","Machine Learning"]},{title:"Hadoop",competency:2,category:["Data Science"]},{title:"Spark",competency:2,category:["Framework","Data Science"]},{title:"Pytorch",competency:2,category:["Data Science"]},{title:"OpenCV",competency:2,category:["Data Science"]},{title:"Hugging Face",competency:2,category:["Machine Learning"]},{title:"MySQL",competency:3,category:["Languages","Web Development","Databases"]},{title:"Prometheus/Grafana",competency:2,category:["Web Development"]},{title:"Postman",competency:3,category:["Web Development","Java"]},{title:"Heroku",competency:2,category:["Web Development"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"Amazon Web Services",competency:2,category:["Cloud Computing"]},{title:"Google Cloud Platform",competency:2,category:["Cloud Computing"]},{title:"Google Colab",competency:3,category:["Cloud Computing","Machine Learning"]},{title:"Azure ML Studio",competency:2,category:["Cloud Computing","Machine Learning"]},{title:"Kaggle",competency:3,category:["Cloud Computing","Machine Learning"]},{title:"Tableau",competency:3,category:["Data Science"]},{title:"Weka",competency:3,category:["Machine Learning"]},{title:"GitHub",competency:4,category:["Tools"]},{title:"Docker",competency:3,category:["Tools"]},{title:"LucidChart",competency:3,category:["Tools"]},{title:"Jira",competency:2,category:["Tools"]},{title:"Trello",competency:3,category:["Tools"]},{title:"Slack",competency:3,category:["Tools"]},{title:"Teams",competency:4,category:["Tools"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),W=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(R=new Set(E.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(T.a)(e)}(R)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(R)||Object(J.a)(R)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:W[t]}})),F=["Education","Experience","Skills","Courses"];t.default=function(){return Object(c.jsx)(o.a,{title:"Resume",description:"Yunlin Qi's Resume.",children:Object(c.jsxs)("article",{className:"post",id:"resume",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(c.jsx)("div",{className:"link-container",children:F.map((function(e){return Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(c.jsx)(l,{data:A}),Object(c.jsx)(y,{data:M}),Object(c.jsx)(P,{skills:E,categories:_}),Object(c.jsx)(N,{data:L})]})})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(57);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=5.ecc74e64.chunk.js.map