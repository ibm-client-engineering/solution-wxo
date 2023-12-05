"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[454],{4137:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var l=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,l,o=function(e,t){if(null==e)return{};var i,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var n=l.createContext({}),c=function(e){var t=l.useContext(n),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return l.createElement(n.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,n=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),k=c(i),d=o,u=k["".concat(n,".").concat(d)]||k[d]||m[d]||r;return i?l.createElement(u,s(s({ref:t},p),{},{components:i})):l.createElement(u,s({ref:t},p))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,s=new Array(r);s[0]=d;var a={};for(var n in t)hasOwnProperty.call(t,n)&&(a[n]=t[n]);a.originalType=e,a[k]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=i[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8138:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>n,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var l=i(7462),o=(i(7294),i(4137));const r={id:"compositeskills",sidebar_position:4,title:"Creating Composite Skills"},s=void 0,a={unversionedId:"ImporttoWXO/compositeskills",id:"ImporttoWXO/compositeskills",title:"Creating Composite Skills",description:"Composite Skills",source:"@site/docs/2-ImporttoWXO/CreatingCompositeSkills.md",sourceDirName:"2-ImporttoWXO",slug:"/ImporttoWXO/compositeskills",permalink:"/solution-wxo/ImporttoWXO/compositeskills",draft:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/2-ImporttoWXO/CreatingCompositeSkills.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"compositeskills",sidebar_position:4,title:"Creating Composite Skills"},sidebar:"tutorialSidebar",previous:{title:"Adding the Skills",permalink:"/solution-wxo/ImporttoWXO/addingskills"},next:{title:"Script Details",permalink:"/solution-wxo/category/script-details"}},n={},c=[{value:"Composite Skills",id:"composite-skills",level:3},{value:"Composite Skill - Retrieve a Task record in ServiceNow",id:"composite-skill---retrieve-a-task-record-in-servicenow",level:5},{value:"Composite Skill - Retrieve a specific KB in ServiceNow",id:"composite-skill---retrieve-a-specific-kb-in-servicenow",level:5},{value:"Composite Skill - Retrieve a Incident record in ServiceNow",id:"composite-skill---retrieve-a-incident-record-in-servicenow",level:5},{value:"Composite Skill - Modify a specific Task in ServiceNow",id:"composite-skill---modify-a-specific-task-in-servicenow",level:5},{value:"Composite Skill - Modify a specific Incident in ServiceNow",id:"composite-skill---modify-a-specific-incident-in-servicenow",level:5},{value:"Create a composite Skill Flow",id:"create-a-composite-skill-flow",level:3},{value:"Steps:",id:"steps",level:4},{value:"Adding skills to the composite skill flow",id:"adding-skills-to-the-composite-skill-flow",level:3},{value:"Examples:",id:"examples",level:4},{value:"Steps:",id:"steps-1",level:4}],p={toc:c},k="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(k,(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"composite-skills"},"Composite Skills"),(0,o.kt)("p",null,"The Watsonx Orchestrate ServiceNow API includes skills that can only be used in a composite Skill Flow."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"List of Provided Composite Skills")),(0,o.kt)("h5",{id:"composite-skill---retrieve-a-task-record-in-servicenow"},"Composite Skill - Retrieve a Task record in ServiceNow"),(0,o.kt)("h5",{id:"composite-skill---retrieve-a-specific-kb-in-servicenow"},"Composite Skill - Retrieve a specific KB in ServiceNow"),(0,o.kt)("h5",{id:"composite-skill---retrieve-a-incident-record-in-servicenow"},"Composite Skill - Retrieve a Incident record in ServiceNow"),(0,o.kt)("h5",{id:"composite-skill---modify-a-specific-task-in-servicenow"},"Composite Skill - Modify a specific Task in ServiceNow"),(0,o.kt)("h5",{id:"composite-skill---modify-a-specific-incident-in-servicenow"},"Composite Skill - Modify a specific Incident in ServiceNow"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/GettingStarted/skills#composite-skills"},"Provided Composite Skills"))),(0,o.kt)("h3",{id:"create-a-composite-skill-flow"},"Create a composite Skill Flow"),(0,o.kt)("h4",{id:"steps"},"Steps:"),(0,o.kt)("p",null,"To put these skills to use, create a composite skill flow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Click the hamburger menu icon at the top left of the page, then click "Skills"'),(0,o.kt)("li",{parentName:"ol"},'Next to the "Add skills" box on the right, click the downward facing arrow'),(0,o.kt)("li",{parentName:"ol"},'Click "Create a Skill flow"')),(0,o.kt)("p",null,"An empty skil flow has been created. Now we must name and add skills to the skill flow"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In order to add any skills to a skill flow, they must already be added to your ",(0,o.kt)("a",{parentName:"p",href:"addingskills"},"Personal Skills"))),(0,o.kt)("h3",{id:"adding-skills-to-the-composite-skill-flow"},"Adding skills to the composite skill flow"),(0,o.kt)("p",null,"You must add one of the ",(0,o.kt)("a",{parentName:"p",href:"/GettingStarted/skills#top-level-skills"},"Top Level Skills")," to its correesponding ",(0,o.kt)("a",{parentName:"p",href:"/GettingStarted/skills/#composite-skills"},"Composite Skills")," in order to properly flow the inputs and outoputs as such:"),(0,o.kt)("mermaid",{value:"graph LR;\n    A(Top Level Skill) --\x3e B(Composite Skill);"}),(0,o.kt)("h4",{id:"examples"},"Examples:"),(0,o.kt)("mermaid",{value:"graph LR;\n    A(JC - Retrieve all Tasks from ServiceNow) --\x3e B(JC - Retrieve a specific Task from ServiceNow);"}),(0,o.kt)("mermaid",{value:"graph LR;\n    A(JC - Retrieve all Incidents from ServiceNow) --\x3e B(JC - Modify a specific Incident from ServiceNow);"}),(0,o.kt)("h4",{id:"steps-1"},"Steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Name your skill flow. For this example we\'ll use "JC - Retrieve a task from ServiceNow"'),(0,o.kt)("li",{parentName:"ol"},"Add one of the ",(0,o.kt)("a",{parentName:"li",href:"/GettingStarted/skills#top-level-skills"},"Top Level Skills")," to your skill flow",(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Here you must use one of the ",(0,o.kt)("a",{parentName:"p",href:"/GettingStarted/skills#top-level-skills"},"Top Level Skills"),' to retrieve whichever table is needed. For this example we\'ll use the Tasks ServiceNow table and "JC - Retrieve all Tasks from ServiceNow" skill.')),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Click the (+) button"),(0,o.kt)("li",{parentName:"ol"},'Add the a Top Level skill, such as "JC - Retrieve all Tasks" '),(0,o.kt)("li",{parentName:"ol"},'When added click the skill and select "Input" tab and check the box "Hide this form from the user"'),(0,o.kt)("li",{parentName:"ol"},'Click "Output" and check the box "Hide this form from the user"'))),(0,o.kt)("li",{parentName:"ol"},"Add one of the Composite Skills to your skill flow",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Click the (+) button"),(0,o.kt)("li",{parentName:"ol"},'Add the "JC - Retrieve a specific Task skill"'),(0,o.kt)("li",{parentName:"ol"},'When added click the skill and select "Input" tab and check the box "Hide this form from the user"'),(0,o.kt)("li",{parentName:"ol"},"Click the box under where it says sys_id"),(0,o.kt)("li",{parentName:"ol"},'Click the previous skill (in our example case "JC - Retrieve all Tasks skill")'),(0,o.kt)("li",{parentName:"ol"},"Find and select sys_id under result / items"))),(0,o.kt)("li",{parentName:"ol"},"Save/Enhance/Publish the skill",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Next to the "Actions" box on the right, click the downward facing arrow'),(0,o.kt)("li",{parentName:"ol"},"Click save as draft"),(0,o.kt)("li",{parentName:"ol"},'Click "Enhance"'),(0,o.kt)("li",{parentName:"ol"},'Click "Publish"'))),(0,o.kt)("li",{parentName:"ol"},"Add the composite skill to from the skill catalog",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'From the home screen, towards the bottom, click the "Add skills from the catalog" box'),(0,o.kt)("li",{parentName:"ol"},'Find your composite skill from the list and click "Add skill"')))),(0,o.kt)("p",null,"Your composite skill is now created. This enables us to use these ServiceNow skills and their outputs in a skill flow with any other Watsonx Orchestrate skill as such:"),(0,o.kt)("mermaid",{value:"graph LR;\n    A(JC - Retrieve all KBs from ServiceNow) --\x3e B(JC - Retrieve a specific KB from ServiceNow) --\x3e C(Send an email with the details of the KB in the body of the email);"}))}m.isMDXComponent=!0}}]);