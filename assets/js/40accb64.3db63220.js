"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6663],{356:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=l(5893),o=l(1151);const t={id:"compositeskills",sidebar_position:2,title:"Creating Composite Skills"},n=void 0,r={id:"servicenow/ImporttoWXO/compositeskills",title:"Creating Composite Skills",description:"Composite Skills",source:"@site/docs/1-servicenow/2-ImporttoWXO/CreatingCompositeSkills.md",sourceDirName:"1-servicenow/2-ImporttoWXO",slug:"/servicenow/ImporttoWXO/compositeskills",permalink:"/solution-wxo/servicenow/ImporttoWXO/compositeskills",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/1-servicenow/2-ImporttoWXO/CreatingCompositeSkills.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"compositeskills",sidebar_position:2,title:"Creating Composite Skills"},sidebar:"tutorialSidebar",previous:{title:"Adding the Skills",permalink:"/solution-wxo/servicenow/ImporttoWXO/addingskills"},next:{title:"Preparing the Script",permalink:"/solution-wxo/servicenow/ImporttoWXO/uploadscript"}},c={},d=[{value:"Composite Skills",id:"composite-skills",level:3},{value:"Composite Skill - Retrieve a Task record in ServiceNow",id:"composite-skill---retrieve-a-task-record-in-servicenow",level:5},{value:"Composite Skill - Retrieve a specific KB in ServiceNow",id:"composite-skill---retrieve-a-specific-kb-in-servicenow",level:5},{value:"Composite Skill - Retrieve a Incident record in ServiceNow",id:"composite-skill---retrieve-a-incident-record-in-servicenow",level:5},{value:"Composite Skill - Modify a specific Task in ServiceNow",id:"composite-skill---modify-a-specific-task-in-servicenow",level:5},{value:"Composite Skill - Modify a specific Incident in ServiceNow",id:"composite-skill---modify-a-specific-incident-in-servicenow",level:5},{value:"Create a composite Skill Flow",id:"create-a-composite-skill-flow",level:3},{value:"Steps",id:"steps",level:4},{value:"Adding skills to the composite skill flow",id:"adding-skills-to-the-composite-skill-flow",level:3},{value:"Examples",id:"examples",level:4},{value:"Steps",id:"steps-1",level:4}];function a(e){const i={a:"a",admonition:"admonition",h3:"h3",h4:"h4",h5:"h5",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.a)(),...e.components},{Details:l}=i;return l||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h3,{id:"composite-skills",children:"Composite Skills"}),"\n",(0,s.jsx)(i.p,{children:"The Watsonx Orchestrate ServiceNow API includes skills that can only be used in a composite Skill Flow."}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"List of Provided Composite Skills"})}),(0,s.jsx)(i.h5,{id:"composite-skill---retrieve-a-task-record-in-servicenow",children:"Composite Skill - Retrieve a Task record in ServiceNow"}),(0,s.jsx)(i.h5,{id:"composite-skill---retrieve-a-specific-kb-in-servicenow",children:"Composite Skill - Retrieve a specific KB in ServiceNow"}),(0,s.jsx)(i.h5,{id:"composite-skill---retrieve-a-incident-record-in-servicenow",children:"Composite Skill - Retrieve a Incident record in ServiceNow"}),(0,s.jsx)(i.h5,{id:"composite-skill---modify-a-specific-task-in-servicenow",children:"Composite Skill - Modify a specific Task in ServiceNow"}),(0,s.jsx)(i.h5,{id:"composite-skill---modify-a-specific-incident-in-servicenow",children:"Composite Skill - Modify a specific Incident in ServiceNow"}),(0,s.jsxs)(i.p,{children:["See ",(0,s.jsx)(i.a,{href:"/servicenow/GettingStarted/skills#composite-skills",children:"Provided Composite Skills"})]})]}),"\n",(0,s.jsx)(i.h3,{id:"create-a-composite-skill-flow",children:"Create a composite Skill Flow"}),"\n",(0,s.jsx)(i.h4,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(i.p,{children:"To put these skills to use, create a composite skill flow:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:'Click the hamburger menu icon at the top left of the page, then click "Skills"'}),"\n",(0,s.jsx)(i.li,{children:'Next to the "Add skills" box on the right, click the downward facing arrow'}),"\n",(0,s.jsx)(i.li,{children:'Click "Create a Skill flow"'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"An empty skil flow has been created. Now we must name and add skills to the skill flow"}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["In order to add any skills to a skill flow, they must already be added to your ",(0,s.jsx)(i.a,{href:"addingskills",children:"Personal Skills"})]})}),"\n",(0,s.jsx)(i.h3,{id:"adding-skills-to-the-composite-skill-flow",children:"Adding skills to the composite skill flow"}),"\n",(0,s.jsxs)(i.p,{children:["You must add one of the ",(0,s.jsx)(i.a,{href:"/servicenow/GettingStarted/skills#top-level-skills",children:"Top Level Skills"})," to its correesponding ",(0,s.jsx)(i.a,{href:"/servicenow/GettingStarted/skills/#composite-skills",children:"Composite Skills"})," in order to properly flow the inputs and outoputs as such:"]}),"\n",(0,s.jsx)(i.mermaid,{value:"graph LR;\n    A(Top Level Skill) --\x3e B(Composite Skill);"}),"\n",(0,s.jsx)(i.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.mermaid,{value:"graph LR;\n    A(JC - Retrieve all Tasks from ServiceNow) --\x3e B(JC - Retrieve a specific Task from ServiceNow);"}),"\n",(0,s.jsx)(i.mermaid,{value:"graph LR;\n    A(JC - Retrieve all Incidents from ServiceNow) --\x3e B(JC - Modify a specific Incident from ServiceNow);"}),"\n",(0,s.jsx)(i.h4,{id:"steps-1",children:"Steps"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:'Name your skill flow. For this example we\'ll use "JC - Retrieve a task from ServiceNow"'}),"\n",(0,s.jsxs)(i.li,{children:["Add one of the ",(0,s.jsx)(i.a,{href:"/servicenow/GettingStarted/skills#top-level-skills",children:"Top Level Skills"})," to your skill flow","\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["Here you must use one of the ",(0,s.jsx)(i.a,{href:"/servicenow/GettingStarted/skills#top-level-skills",children:"Top Level Skills"}),' to retrieve whichever table is needed. For this example we\'ll use the Tasks ServiceNow table and "JC - Retrieve all Tasks from ServiceNow" skill.']})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Click the (+) button"}),"\n",(0,s.jsx)(i.li,{children:'Add the a Top Level skill, such as "JC - Retrieve all Tasks"'}),"\n",(0,s.jsx)(i.li,{children:'When added click the skill and select "Input" tab and check the box "Hide this form from the user"'}),"\n",(0,s.jsx)(i.li,{children:'Click "Output" and check the box "Hide this form from the user"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Add one of the Composite Skills to your skill flow","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Click the (+) button"}),"\n",(0,s.jsx)(i.li,{children:'Add the "JC - Retrieve a specific Task skill"'}),"\n",(0,s.jsx)(i.li,{children:'When added click the skill and select "Input" tab and check the box "Hide this form from the user"'}),"\n",(0,s.jsx)(i.li,{children:"Click the box under where it says sys_id"}),"\n",(0,s.jsx)(i.li,{children:'Click the previous skill (in our example case "JC - Retrieve all Tasks skill")'}),"\n",(0,s.jsx)(i.li,{children:"Find and select sys_id under result / items"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Save/Enhance/Publish the skill","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:'Next to the "Actions" box on the right, click the downward facing arrow'}),"\n",(0,s.jsx)(i.li,{children:"Click save as draft"}),"\n",(0,s.jsx)(i.li,{children:'Click "Enhance"'}),"\n",(0,s.jsx)(i.li,{children:'Click "Publish"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Add the composite skill to from the skill catalog","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:'From the home screen, towards the bottom, click the "Add skills from the catalog" box'}),"\n",(0,s.jsx)(i.li,{children:'Find your composite skill from the list and click "Add skill"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Your composite skill is now created. This enables us to use these ServiceNow skills and their outputs in a skill flow with any other Watsonx Orchestrate skill as such:"}),"\n",(0,s.jsx)(i.mermaid,{value:"graph LR;\n    A(JC - Retrieve all KBs from ServiceNow) --\x3e B(JC - Retrieve a specific KB from ServiceNow) --\x3e C(Send an email with the details of the KB in the body of the email);"})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,i,l)=>{l.d(i,{Z:()=>r,a:()=>n});var s=l(7294);const o={},t=s.createContext(o);function n(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);