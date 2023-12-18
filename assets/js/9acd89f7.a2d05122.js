"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4014],{3877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(5893),r=n(1151);const o={id:"uploadscript",sidebar_position:1,title:"Preparing the Script"},s=void 0,l={id:"servicenow/ImporttoWXO/uploadscript",title:"Preparing the Script",description:"Download and prepare the yaml",source:"@site/docs/1-servicenow/2-ImporttoWXO/1-PrepareScript.mdx",sourceDirName:"1-servicenow/2-ImporttoWXO",slug:"/servicenow/ImporttoWXO/uploadscript",permalink:"/solution-wxo/servicenow/ImporttoWXO/uploadscript",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/1-servicenow/2-ImporttoWXO/1-PrepareScript.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"uploadscript",sidebar_position:1,title:"Preparing the Script"},sidebar:"tutorialSidebar",previous:{title:"Import to Watsonx Orchestrate",permalink:"/solution-wxo/category/import-to-watsonx-orchestrate"},next:{title:"Staging the Skills",permalink:"/solution-wxo/servicenow/ImporttoWXO/stagingskills"}},a={},c=[{value:"Download and prepare the yaml",id:"download-and-prepare-the-yaml",level:3},{value:"Steps",id:"steps",level:4}];function d(e){const t={code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"download-and-prepare-the-yaml",children:"Download and prepare the yaml"}),"\n",(0,i.jsx)(t.h4,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Download the latest .yaml file ",(0,i.jsx)("a",{href:"https://github.com/ibm-client-engineering/solution-wxo/blob/1dc47eca909536018695c830284a78684082d278/assets/servicenow/scripts/JC%20-%20Watsonx%20Orchestrate%20ServiceNow%20API.yml",children:"here"})]}),"\n",(0,i.jsx)(t.li,{children:"Open the script and replace the ServiceNow instance URL with your ServiceNow instance URL:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"servers:\n  - url: https://<your_instance>.service-now.com/\n  # Example https://dev213519.service-now.com/\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Upload the script to your Watsonx Orchestrate instance"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Click the hamburger menu icon at the top left of the page, then click "Skills"'}),"\n",(0,i.jsx)(t.li,{children:'Click "Add skills" at the top right of the page'}),"\n",(0,i.jsx)(t.li,{children:'Click the "From files" tab'}),"\n",(0,i.jsx)(t.li,{children:"Click the upload box and select the yaml file"}),"\n",(0,i.jsx)(t.li,{children:"Click next"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select the skills you need from the API (see ",(0,i.jsx)("a",{href:"/solution-wxo/servicenow/GettingStarted/skills",children:"Provided Skills"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click add on the bottom right"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Each skill should now be available in your list of skills and are ready to be staged."})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);