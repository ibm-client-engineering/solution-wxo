"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[122],{1186:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(5893),n=s(1151);const r={id:"skills",sidebar_position:2,title:"Provided Skills"},l=void 0,o={id:"servicenow/GettingStarted/skills",title:"Provided Skills",description:"Watsonx Orchestrate ServiceNow API",source:"@site/docs/1-servicenow/1-GettingStarted/2-ProvidedSkills.mdx",sourceDirName:"1-servicenow/1-GettingStarted",slug:"/servicenow/GettingStarted/skills",permalink:"/solution-wxo/servicenow/GettingStarted/skills",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/1-servicenow/1-GettingStarted/2-ProvidedSkills.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"skills",sidebar_position:2,title:"Provided Skills"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/solution-wxo/servicenow/GettingStarted/prerequisites"},next:{title:"Import to Watsonx Orchestrate",permalink:"/solution-wxo/category/import-to-watsonx-orchestrate"}},c={},a=[{value:"Watsonx Orchestrate ServiceNow API",id:"watsonx-orchestrate-servicenow-api",level:2},{value:"Top Level Skills",id:"top-level-skills",level:3},{value:"Composite Skills",id:"composite-skills",level:3},{value:"Incomplete Skills",id:"incomplete-skills",level:3},{value:"Skills Under Construction",id:"skills-under-construction",level:4},{value:"Skills that require the non-friendly input parameter for tableName",id:"skills-that-require-the-non-friendly-input-parameter-for-tablename",level:4},{value:"Delete Skills",id:"delete-skills",level:4}];function d(e){const i={a:"a",admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,n.a)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"watsonx-orchestrate-servicenow-api",children:"Watsonx Orchestrate ServiceNow API"}),"\n",(0,t.jsx)(i.h3,{id:"top-level-skills",children:"Top Level Skills"}),"\n",(0,t.jsx)(i.p,{children:"These are the primary skills in the Watsonx Orchestrate ServiceNow API and can be run once the skills are added and the application is connected."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Retrieve all KBs from ServiceNow"})}),(0,t.jsx)(i.p,{children:"Returns all KBs in a table from ServiceNow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Retrieve all KBs from ServiceNow"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Retrieve all Tasks from ServiceNow"})}),(0,t.jsx)(i.p,{children:"Returns all Tasks in a table from ServiceNow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Retrieve all Tasks from ServiceNow"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Retrieve all Incidents from ServiceNow"})}),(0,t.jsx)(i.p,{children:"Returns all Incidents in a table from ServiceNow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Retrieve all Incidents from ServiceNow"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Create a new Task ServiceNow"})}),(0,t.jsx)(i.p,{children:"Creates a new task in ServiceNow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Create a new Task in ServiceNow"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Create a new Incident ServiceNow"})}),(0,t.jsx)(i.p,{children:"Creates a new Incident in ServiceNow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Create a new Incident in ServiceNow"'})]}),"\n",(0,t.jsx)(i.h3,{id:"composite-skills",children:"Composite Skills"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:['All skills denoted by "Composite Skill - " and labeled with "(Composite Skill)" are only for use in a Watsonx Orchestrate Skill Flow directly after one of the above "Top Level Skills". These skills will ',(0,t.jsx)("strong",{children:"not work"})," as a first step or by direct usage in Watsonx Orchestrate. This is because the ServiceNow sysID is a required parameter which is a hidden input. See ",(0,t.jsx)(i.a,{href:"/servicenow/ImporttoWXO/compositeskills#composite-skills",children:"Creating Composite Skills"}),"."]})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Composite Skill - Retrieve a Task record in ServiceNow"})}),(0,t.jsx)(i.p,{children:"Retrieves a specific task after specifying the sysID as an input parameter in the Skill Flow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Retrieve a specific Task in ServiceNow (Composite Skill)"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Composite Skill - Retrieve a specific KB in ServiceNow"})}),(0,t.jsx)(i.p,{children:"Retrieves a specific KB after specifying the sysID as an input parameter in the Skill Flow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Retrieve a specific KB in ServiceNow (Composite Skill)"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Composite Skill - Retrieve a Incident record in ServiceNow"})}),(0,t.jsx)(i.p,{children:"Retrieves a specific Incident after specifying the sysID as an input parameter in the Skill Flow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Retrieve a specific Incident in ServiceNow (Composite Skill)"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Composite Skill - Retrieve a specific KB in ServiceNow"})}),(0,t.jsx)(i.p,{children:"Retrieves a specific KB after specifying the sysID as an input parameter in the Skill Flow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Retrieve a specific KB in ServiceNow (Composite Skill)"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Composite Skill - Modify a specific Task in ServiceNow"})}),(0,t.jsx)(i.p,{children:"Modifies a specific Task after specifying the sysID as an input parameter in the Skill Flow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Modify a specific Task in ServiceNow (Composite Skill)"'})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Composite Skill - Modify a specific Incident in ServiceNow"})}),(0,t.jsx)(i.p,{children:"Modifies a specific Incident after specifying the sysID as an input parameter in the Skill Flow"}),(0,t.jsx)(i.p,{children:'WXO name "JC - Modify a specific Incient in ServiceNow (Composite Skill)"'})]}),"\n",(0,t.jsx)(i.h3,{id:"incomplete-skills",children:"Incomplete Skills"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:"Non-Functional or Incomplete Skills"})}),(0,t.jsx)(i.admonition,{type:"danger",children:(0,t.jsx)(i.p,{children:"These are skills that you can see commented-out (#) in the script and are either unutilized or under construction. Enable and modify at your own risk."})}),(0,t.jsx)(i.h4,{id:"skills-under-construction",children:"Skills Under Construction"}),(0,t.jsx)(i.p,{children:"Create a new KB in ServiceNow (input schema needed for creating a KB)"}),(0,t.jsx)(i.h4,{id:"skills-that-require-the-non-friendly-input-parameter-for-tablename",children:"Skills that require the non-friendly input parameter for tableName"}),(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:'To request table data from ServiceNow, the tableName (incidents, tasks or KBs) must be an input parameter. To do so the user would have to input the exact table name (e.g. for Tasks the user would need to input "sc_task" as the tableName) so these skills have been removed. These are to be used as reference and the path is to be used to specify the tableName needed.'})}),(0,t.jsx)(i.p,{children:"Retrieve table records from ServiceNow"}),(0,t.jsx)(i.p,{children:"Create a new table record in ServiceNow"}),(0,t.jsx)(i.p,{children:"Composite Skill - Retrieve a specific record in ServiceNow"}),(0,t.jsx)(i.p,{children:"Composite Skill - Modify a specific record in ServiceNow"}),(0,t.jsx)(i.p,{children:"Composite Skill - Delete a specific record in ServiceNow"}),(0,t.jsx)(i.h4,{id:"delete-skills",children:"Delete Skills"}),(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"At this time the Delete skills have a bug. Watsonx Orchestrate does not succsessfuly validate an empty object response as a successful skill. The chat will say the skill has failed. However, the object in ServiceNow will be successfuly deleted."})}),(0,t.jsx)(i.p,{children:"Composite Skill - Delete a specific record in ServiceNow"}),(0,t.jsx)(i.p,{children:"Composite Skill - Delete a specific Incident in ServiceNow"}),(0,t.jsx)(i.p,{children:"Composite Skill - Delete a specific Task in ServiceNow"}),(0,t.jsx)(i.p,{children:"Composite Skill - Delete a specific KB in ServiceNow"})]})]})}function p(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>o,a:()=>l});var t=s(7294);const n={},r=t.createContext(n);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);