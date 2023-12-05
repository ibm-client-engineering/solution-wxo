"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[288],{4137:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(o),u=n,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return o?r.createElement(k,l(l({ref:t},d),{},{components:o})):r.createElement(k,l({ref:t},d))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<i;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1827:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=o(7462),n=(o(7294),o(4137));const i={id:"addingskills",sidebar_position:3,title:"Adding the Skills"},l=void 0,a={unversionedId:"ImporttoWXO/addingskills",id:"ImporttoWXO/addingskills",title:"Adding the Skills",description:"Add the skills",source:"@site/docs/2-ImporttoWXO/AddingSkills.md",sourceDirName:"2-ImporttoWXO",slug:"/ImporttoWXO/addingskills",permalink:"/solution-wxo/ImporttoWXO/addingskills",draft:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/2-ImporttoWXO/AddingSkills.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"addingskills",sidebar_position:3,title:"Adding the Skills"},sidebar:"tutorialSidebar",previous:{title:"Staging the Skills",permalink:"/solution-wxo/ImporttoWXO/stagingskills"},next:{title:"Creating Composite Skills",permalink:"/solution-wxo/ImporttoWXO/compositeskills"}},s={},p=[{value:"Add the skills",id:"add-the-skills",level:3},{value:"Steps:",id:"steps",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"add-the-skills"},"Add the skills"),(0,n.kt)("p",null,"Add the skills from the skill catalog, and connect the application:"),(0,n.kt)("h4",{id:"steps"},"Steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'From the home screen, towards the bottom, click the "Add skills from the catalog" box'),(0,n.kt)("li",{parentName:"ol"},'Find "JC - ServiceNow API" from the list'),(0,n.kt)("li",{parentName:"ol"},"Connect the app"),(0,n.kt)("li",{parentName:"ol"},'Click the "Connect the app" box on the top right'),(0,n.kt)("li",{parentName:"ol"},"Enter the username and password of the ServiceNow account with access to the REST API"),(0,n.kt)("li",{parentName:"ol"},"Click connect app"),(0,n.kt)("li",{parentName:"ol"},"Add each imported skill from the list")),(0,n.kt)("p",null,'The skills should now be added to your catalog under "JC - Watsonx Orchestrate ServiceNow API" and ready for use directly or in a composite Skill flow.'),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},'All skills denoted by "Composite Skill - " and labeled with "(Composite Skill)" are only for use in a Watsonx Orchestrate Skill Flow. Only the ',(0,n.kt)("a",{parentName:"p",href:"/GettingStarted/skills#top-level-skills"},"Top Level Skills")," will work immediately")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Be sure to add all the skills you need! You will not be able to make a ",(0,n.kt)("a",{parentName:"p",href:"/ImporttoWXO/compositeskills#composite-skills"},"Composite Skill")," without adding the necessary skills first.")))}m.isMDXComponent=!0}}]);