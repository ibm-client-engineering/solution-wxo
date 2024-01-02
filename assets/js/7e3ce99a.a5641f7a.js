"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8230],{2405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(5893),i=n(1151);const a={id:"auth",sidebar_position:3,title:"Authentication"},r=void 0,s={id:"watsonx/GettingStarted/auth",title:"Authentication",description:"Authenticating to Watsonx",source:"@site/docs/2-watsonx/1-GettingStarted/3-Authentication.mdx",sourceDirName:"2-watsonx/1-GettingStarted",slug:"/watsonx/GettingStarted/auth",permalink:"/solution-wxo/watsonx/GettingStarted/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/2-watsonx/1-GettingStarted/3-Authentication.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"auth",sidebar_position:3,title:"Authentication"},sidebar:"tutorialSidebar",previous:{title:"Provided Skills",permalink:"/solution-wxo/watsonx/GettingStarted/skills"},next:{title:"Import to Watsonx Orchestrate",permalink:"/solution-wxo/category/import-to-watsonx-orchestrate-1"}},c={},l=[{value:"Authenticating to Watsonx",id:"authenticating-to-watsonx",level:2},{value:"Create an IBM Cloud API Key",id:"create-an-ibm-cloud-api-key",level:3},{value:"Generate and obtain your bearer token",id:"generate-and-obtain-your-bearer-token",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"authenticating-to-watsonx",children:"Authenticating to Watsonx"}),"\n",(0,o.jsx)(t.p,{children:"The Watsonx API requires bearer authentication."}),"\n",(0,o.jsx)(t.h3,{id:"create-an-ibm-cloud-api-key",children:"Create an IBM Cloud API Key"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"In the IBM Cloud console, go to Manage > Access (IAM) > API keys"}),"\n",(0,o.jsx)(t.li,{children:"Click Create an IBM Cloud API key"}),"\n",(0,o.jsx)(t.li,{children:"Enter a name and description for your API key"}),"\n",(0,o.jsx)(t.li,{children:"Click Create"}),"\n",(0,o.jsx)(t.li,{children:"Click Show to display the API key. Or, click Copy to copy and save it for later, or click Download"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://cloud.ibm.com/docs/account?topic=account-userapikey&interface=ui#create_user_key",children:"IBM Cloud Reference"})}),"\n",(0,o.jsx)(t.h3,{id:"generate-and-obtain-your-bearer-token",children:"Generate and obtain your bearer token"}),"\n",(0,o.jsxs)(t.p,{children:["Run the following curl command in your Windows command prompt or Mac terminal, and replace ",(0,o.jsx)(t.code,{children:"<your API key>"})," with your API key."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"curl -X POST 'https://iam.cloud.ibm.com/identity/token' -H 'Content-Type: application/x-www-form-urlencoded' -d 'grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=<your API key>'\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://cloud.ibm.com/docs/account?topic=account-iamtoken_from_apikey",children:"IBM Cloud Reference"})}),"\n",(0,o.jsx)(t.p,{children:"Running the command will give you a response similar to below:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'{\n  "access_token": "eyJhbGciOiJIUz......sgrKIi8hdFs",\n  "refresh_token": "SPrXw5tBE3......KBQ+luWQVY=",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "expiration": 1473188353\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The value you need to capture is the ",(0,o.jsx)(t.code,{children:"access_token"})," value between the quotations. Copy this value and this is your bearer token to connect the application in Watsonx Orchestrate."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"IBM Cloud Bearer tokens expire frequently. Be sure to have this command handy if the token expires and reconnect the skill. The error details from Watsonx Orchestrate will tell you if it's because of an expired bearer token."})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(7294);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);