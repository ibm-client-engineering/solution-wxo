"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[833],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const i={id:"prerequisites",sidebar_position:2,title:"Prerequisites"},s=void 0,l={unversionedId:"GettingStarted/prerequisites",id:"GettingStarted/prerequisites",title:"Prerequisites",description:"In order to proceed you will need the prerequisites",source:"@site/docs/1-GettingStarted/Prerequisites.md",sourceDirName:"1-GettingStarted",slug:"/GettingStarted/prerequisites",permalink:"/solution-wxo/GettingStarted/prerequisites",draft:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/1-GettingStarted/Prerequisites.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"prerequisites",sidebar_position:2,title:"Prerequisites"},sidebar:"tutorialSidebar",previous:{title:"Provided Skills",permalink:"/solution-wxo/GettingStarted/skills"},next:{title:"Import to Watsonx Orchestrate",permalink:"/solution-wxo/category/import-to-watsonx-orchestrate"}},a={},c=[{value:"In order to proceed you will need the prerequisites",id:"in-order-to-proceed-you-will-need-the-prerequisites",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"in-order-to-proceed-you-will-need-the-prerequisites"},"In order to proceed you will need the prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Access to a Watsonx Orchestrate instance with ",(0,o.kt)("strong",null,"build")," permissions"),(0,o.kt)("li",null,"Access to a ServiceNow instance and an account with with ",(0,o.kt)("strong",null,"REST API")," permissions (this is usually an administrator type account)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this documentation we will be using a specific developer ServiceNow instance. In order to use your own instance, you will need to replace some items with your own:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Server URL"),(0,o.kt)("li",null,"Username"),(0,o.kt)("li",null,"Password"))),(0,o.kt)("p",null,"To create a ServiceNow Developer account and your own instance, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.servicenow.com/dev.do"},"do so here.")),(0,o.kt)("admonition",{title:"Warning: Using the Watsonx Orchestrate Out-of-the-box ServiceNow Skils",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"IBM does not currently provide ServiceNow instances for use with Watsonx Orchestrate out-of-the-box ServiceNow Skills. It is reccomended to provision your own ServiceNow development account and instance for both this script and the out-of-the-box Skills. The out-of-the-box ServiceNow skills require the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Server Name"),(0,o.kt)("li",null,"Username"),(0,o.kt)("li",null,"Password"),(0,o.kt)("li",null,"Client ID"),(0,o.kt)("li",null,"Client Secret")),"Using the script in this documentation ",(0,o.kt)("strong",null,"does not require")," the use of a Client ID and Client secret from ServiceNow."))}d.isMDXComponent=!0}}]);