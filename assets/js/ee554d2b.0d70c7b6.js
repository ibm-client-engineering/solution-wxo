"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5927],{6018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(5893),i=n(1151);const r={id:"uploadscript",sidebar_position:1,title:"Preparing the Script"},s=void 0,a={id:"watsonx/ImporttoWXO/uploadscript",title:"Preparing the Script",description:"Download and prepare the yaml",source:"@site/docs/2-watsonx/2-ImporttoWXO/1-PrepareScript.mdx",sourceDirName:"2-watsonx/2-ImporttoWXO",slug:"/watsonx/ImporttoWXO/uploadscript",permalink:"/solution-wxo/watsonx/ImporttoWXO/uploadscript",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/2-watsonx/2-ImporttoWXO/1-PrepareScript.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"uploadscript",sidebar_position:1,title:"Preparing the Script"},sidebar:"tutorialSidebar",previous:{title:"Import to Watsonx Orchestrate",permalink:"/solution-wxo/category/import-to-watsonx-orchestrate-1"},next:{title:"Staging the Skills",permalink:"/solution-wxo/watsonx/ImporttoWXO/stagingskills"}},l={},c=[{value:"Download and prepare the yaml",id:"download-and-prepare-the-yaml",level:3},{value:"Steps",id:"steps",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"download-and-prepare-the-yaml",children:"Download and prepare the yaml"}),"\n",(0,o.jsx)(t.h4,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Download the latest .yaml file ",(0,o.jsx)("a",{href:"https://github.com/ibm-client-engineering/solution-wxo/blob/8f599c8eb4847c41f9a4d549a7fb5d4a342ec9d4/assets/watsonxai/scripts/JC%20-%20Watsonx%20Orchestrate%20Watsonx%20API.yml",children:"here"})]}),"\n",(0,o.jsx)(t.li,{children:"Open the script and replace the Watsonx Project ID with your project ID:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'properties:\n  project_id:\n    x-ibm-disable: true\n    x-ibm-show: false\n    type: string\n    #Update the default value to your project\'s Project ID\n    default: "<your project ID>"\n    #Example: default: "06cd2f5b-3aad-4a38-af10-86bf61d0c094"\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:'To find your project ID in Watsonx, select to your project, click "Manage", and should be listed under "General" > "Details" > "Project ID"'})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Upload the script to your Watsonx Orchestrate instance"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Click the hamburger menu icon at the top left of the page, then click "Skills"'}),"\n",(0,o.jsx)(t.li,{children:'Click "Add skills" at the top right of the page'}),"\n",(0,o.jsx)(t.li,{children:'Click the "From files" tab'}),"\n",(0,o.jsx)(t.li,{children:"Click the upload box and select the yaml file"}),"\n",(0,o.jsx)(t.li,{children:"Click next"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Select the skills you need from the API (see ",(0,o.jsx)("a",{href:"/solution-wxo/watsonx/GettingStarted/skills",children:"Provided Skills"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Click add on the bottom right"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Each skill should now be available in your list of skills and are ready to be staged."}),"\n",(0,o.jsxs)(t.admonition,{type:"warning",children:[(0,o.jsxs)(t.p,{children:["Double check the version level in the path to ensure it matches your Watsonx version - See ",(0,o.jsx)(t.a,{href:"https://cloud.ibm.com/apidocs/machine-learning#versioning",children:"https://cloud.ibm.com/apidocs/machine-learning#versioning"})]}),(0,o.jsx)(t.p,{children:"If they do not match you may have to update the path query to the available version."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'paths:\n  "/ml/v1-beta/generation/text?version=2023-05-29":\n'})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);