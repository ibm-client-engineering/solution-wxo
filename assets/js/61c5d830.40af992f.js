"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9840],{7562:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(5893),i=n(1151);const r={id:"walkthrough",sidebar_position:2,title:"Walkthrough"},a="Walkthrough of the JC - Watsonx Orchestrate ServiceNow API yaml",o={id:"servicenow/ScriptDetails/walkthrough",title:"Walkthrough",description:"Basic Structure",source:"@site/docs/1-servicenow/3-ScriptDetails/Walkthrogh.mdx",sourceDirName:"1-servicenow/3-ScriptDetails",slug:"/servicenow/ScriptDetails/walkthrough",permalink:"/solution-wxo/servicenow/ScriptDetails/walkthrough",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/1-servicenow/3-ScriptDetails/Walkthrogh.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"walkthrough",sidebar_position:2,title:"Walkthrough"},sidebar:"tutorialSidebar",previous:{title:"Outputs",permalink:"/solution-wxo/servicenow/ScriptDetails/outputs"}},l={},c=[{value:"Basic Structure",id:"basic-structure",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Servers",id:"servers",level:3},{value:"Security",id:"security",level:3},{value:"Paths",id:"paths",level:2},{value:"API Calls",id:"api-calls",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Responses",id:"responses",level:3},{value:"Response Schema",id:"response-schema",level:4},{value:"Composite Skills",id:"composite-skills",level:2},{value:"Schcema Components",id:"schcema-components",level:2},{value:"sysID",id:"sysid",level:4},{value:"Output Schemas",id:"output-schemas",level:3},{value:"getthisTable",id:"getthistable",level:4},{value:"getsingleKB",id:"getsinglekb",level:4},{value:"getKBs",id:"getkbs",level:4},{value:"getTable",id:"gettable",level:4},{value:"editTable",id:"edittable",level:4}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"walkthrough-of-the-jc---watsonx-orchestrate-servicenow-api-yaml",children:"Walkthrough of the JC - Watsonx Orchestrate ServiceNow API yaml"}),"\n",(0,t.jsx)(s.h2,{id:"basic-structure",children:"Basic Structure"}),"\n",(0,t.jsx)(s.h3,{id:"metadata",children:"Metadata"}),"\n",(0,t.jsxs)(s.p,{children:["Watsonx orchestrate requires ",(0,t.jsx)(s.code,{children:"x-ibm-application"})," headers for properly importing skills from yaml files. Refer to the Watsonx Orchestrate documentation ",(0,t.jsx)(s.a,{href:"https://www.ibm.com/docs/en/watson-orchestrate?topic=files-using-x-properties",children:"here"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'openapi: 3.0.1\ninfo:\n  title: JC - ServiceNow Table API\n  contact:\n    name: Joe Cosenza\n    email: jcosenz@us.ibm.com\n  x-ibm-application-name: JC - ServiceNow Table API\n  x-ibm-application-id: JC-ServiceNowAPI\n  description: Allows you to perform create, read, update, and delete (CRUD) operations on existing ServiceNow tables\n  version: latest\n  x-ibm-application-icon: <svg width="30" height="30" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 360"><defs><style>.cls-1{fill:#f8b500;}.cls-2{fill:#231815;}</style></defs><title>JRK number</title><path class="cls-1" d="M354.6,295.5H39.4A39.4,39.4,0,0,1,0,256.1V39.4A39.4,39.4,0,0,1,39.4,0H354.6A39.4,39.4,0,0,1,394,39.4V256.1a39.4,39.4,0,0,1-39.4,39.4"/><path class="cls-2" d="M105.85,44.44h45.42V171.75c0,57.37-27.49,77.4-71.72,77.4-10.46,0-24.21-1.8-33.17-4.78l5.08-36.76a74.94,74.94,0,0,0,23.31,3.58c19.12,0,31.08-8.66,31.08-40Z"/><path class="cls-2" d="M337.15,240.18c-8.37,4.19-27.19,8.67-51.7,8.67C215.82,248.85,180,205.52,180,148.14c0-68.74,49-107,110-107,23.6,0,41.53,4.78,49.6,9l-9.26,36.16A98.32,98.32,0,0,0,292,78.81c-36.16,0-64.25,21.81-64.25,66.64,0,40.34,23.9,65.74,64.55,65.74,13.74,0,29-3,37.95-6.57Z"/></svg>\n  x-ibm-skill-type: imported\nexternalDocs:\n  url: https://docs.servicenow.com/?context=CSHelp:REST-Table-API\nservers:\n  - url: https://dev213519.service-now.com/\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"x-ibm-application-icon:"})," object is my SVG image (produces a orange/black JC)"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"externalDocs:\n  url: https://docs.servicenow.com/?context=CSHelp:REST-Table-API\n"})}),"\n",(0,t.jsx)(s.h3,{id:"servers",children:"Servers"}),"\n",(0,t.jsxs)(s.p,{children:["This URL needs to be set ",(0,t.jsx)("strong",{children:"for the instance you are planning on using"}),". This is an example instance with its own username/password combination for the REST API user. When you create your own instance, update the URL here."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"servers:\n  - url: https://dev213519.service-now.com/\n"})}),"\n",(0,t.jsx)(s.h3,{id:"security",children:"Security"}),"\n",(0,t.jsx)(s.p,{children:"This script usses basic authentication (username/password) combination."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"security:\n  - basicAuth: []\n"})}),"\n",(0,t.jsx)(s.p,{children:"and under components:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"securitySchemes:\n  basicAuth:\n    type: http\n    scheme: basic\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The out-of-the-box Watsonx Orchestrate ServiceNow skills uses OAUTH authentication, which requires supplying the Server name, ",(0,t.jsx)(s.code,{children:"client_id"})," and ",(0,t.jsx)(s.code,{children:"client_secret"})," in addition to a username and password. It is also possible to configure this application this way by using a OAUTH provider and OAUTH credentials from ServiceNow."]})}),"\n",(0,t.jsx)(s.h2,{id:"paths",children:"Paths"}),"\n",(0,t.jsxs)(s.p,{children:['The paths define the path of the API call. For this walkthrough, we\'ll use the path that allows us to modify Tasks. The name of the Tasks table in ServiceNow is "sc_tasks", defined as the ',(0,t.jsx)(s.code,{children:"tableName"})," parameter in the script, and hardcoded in the path below."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"paths:  \n  /api/now/table/sc_task?sysparm_display_value=true&sysparm_exclude_reference_link=true:\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The querys used in this script ",(0,t.jsx)(s.code,{children:"sysparm_display_value=true"})," and ",(0,t.jsx)(s.code,{children:"sysparm_exclude_reference_link=true"})," are in the path. Most swagger validators will not allow this, however Watsonx Orchestrate allows query parameters in the path. These are used to recieve friendly values in our response from ServiceNow."]})}),"\n",(0,t.jsx)(s.h3,{id:"api-calls",children:"API Calls"}),"\n",(0,t.jsxs)(s.p,{children:["Each skill on Watsonx Orchestrate is done by defining an API call. Here's a great resource to ",(0,t.jsx)(s.a,{href:"https://docs.servicenow.com/?context=CSHelp:REST-Table-API",children:"help with the API commands for ServiceNow"})]}),"\n",(0,t.jsxs)(s.p,{children:['It is reccomended that you create a specific "get" call per skill (eg: Retrieve all TASKS from Servicenow). Having the user specify the ',(0,t.jsx)(s.code,{children:"tableName"})," is not a friendly display. In the code below, 2 skills are identified:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)("strong",{children:"get"})," API call: JC - Retrieve all Tasks from ServiceNow"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)("strong",{children:"post"})," API call:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"get:\n  summary: JC - Retrieve all Tasks from ServiceNow\n  description: Retrieve all Tasks from ServiceNow\n  operationId: retrieveTasks\n  responses:\n    '200':\n      description: Results\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/getTable'\npost:\n  summary: JC - Create a new Task in ServiceNow\n  description: Create a new Task in ServiceNow\n  operationId: createTask\n  requestBody:\n    content:\n      application/json: \n        schema:\n          $ref: '#/components/schemas/editTable'\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"objectId"})," object gives the task a unuqie name for the backend to point to this skill"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"description"})," objext is the description Watsonx Orchestrate applies to the skill"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"summary"})," object is the name Watsonx Orchestrate applies to the skill"]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.code,{children:"operationId"})," and ",(0,t.jsx)(s.code,{children:"summary"})," object is required for each skill in order to pass Watsonx Orchestrate's validation process for all imported skill files."]})}),"\n",(0,t.jsx)(s.h3,{id:"request-body",children:"Request Body"}),"\n",(0,t.jsx)(s.p,{children:"Request bodies define the content to be sent to Servicenow"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"requestBody:\n  content:\n    application/json:\n      schema:\n        $ref: '#/components/schemas/editTable'     \n"})}),"\n",(0,t.jsxs)(s.p,{children:['The editTable schema defines the properties of the request body when creating a new task via the "JC - Create a Task in ServiceNow" skill. This is to be edited if a different ',(0,t.jsx)("strong",{children:"input"})," on Watsonx Orchestrate is desired."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"editTable:\n  type: object\n  properties:\n    short_description:\n      x-ibm-label: Short Description\n      type: string\n      description: 'Short description of the record'\n    description:\n      x-ibm-label: Description\n      x-ibm-multiline: true\n      type: string\n      description: 'Detailed description of the record'\n    urgency:\n      x-ibm-label: Urgency\n      type: integer\n      description: '3 - Low, 2 - Medium, 1 - High'\n      enum:\n        - 3\n        - 2\n        - 1\n"})}),"\n",(0,t.jsx)(s.h3,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(s.p,{children:["The responses from ServiceNow reference a schema to get only the specific information. This is to be edited if a different ",(0,t.jsx)("strong",{children:"output"})," on Watsonx Orchestrate is desired. See ",(0,t.jsx)(s.a,{href:"outputs",children:"Sample Outputs"})," for more."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"responses:\n  '201':\n    description: Task created\n    content:\n      application/json:\n        schema:\n          $ref: '#/components/schemas/getthisTable'\n"})}),"\n",(0,t.jsx)(s.h4,{id:"response-schema",children:"Response Schema"}),"\n",(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"outputs",children:"Sample Outputs"})," for other example output schemas used."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"getthisTable:\n#Use when getting a single table such as Tasks and Incidents from a composite (sysID required input) skill\n  type: object\n  properties:\n    result:\n      x-ibm-label: Results\n      type: object\n      properties:\n          sys_id:\n            $ref: '#/components/schemas/sysID'\n          opened_at:\n            type: string\n          assignment_group:\n            type: string\n          assigned_to:\n            type: string\n          urgency:\n            type: string\n          opened_by:\n            type: string\n          state:\n            type: string\n          description:\n            type: string\n          short_description:\n            type: string\n          number:\n            type: string\n"})}),"\n",(0,t.jsx)(s.h2,{id:"composite-skills",children:"Composite Skills"}),"\n",(0,t.jsxs)(s.p,{children:["These skills need to be composite because a ",(0,t.jsx)(s.code,{children:"sysID"})," parameter is required in the path (see ",(0,t.jsx)(s.code,{children:"{sys_ID}"}),"). The ",(0,t.jsx)(s.code,{children:"sysId"})," is the unique ServiceNow identifier to a specific table item. To get this identifier, we use a ",(0,t.jsx)(s.a,{href:"/servicenow/GettingStarted/skills#top-level-skills",children:"Top Level Skill"})," first in the skill flow. Next we add the ",(0,t.jsx)(s.a,{href:"/servicenow/GettingStarted/skills#composite-skills",children:"Composite Skill"}),". When the user selects a task from the table, the ",(0,t.jsx)(s.code,{children:"sysID"})," is captured as an output, then used as an input for the composite skill. This way, the user never has to worry about finding the ServiceNow ",(0,t.jsx)(s.code,{children:"sysID"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Below are two composite Skills:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"/api/now/table/sc_task/{sys_id}?sysparm_display_value=true&sysparm_exclude_reference_link=true:\n  get:\n    summary: JC - Retrieve a specific Task in ServiceNow (Composite only)\n    description: Composite Skill - Retrieve a Task record in ServiceNow\n    operationId: retrievethisTask\n    parameters:\n      - name: sys_id\n        x-ibm-label: ServiceNow SysID (hidden)\n        in: path\n        required: true\n        schema:\n          $ref: '#/components/schemas/sysID'\n    responses:\n      '200':\n        description: ok\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/getthisTable'    \n  put:\n    summary: JC - Modify a specific Task in ServiceNow (Composite only)\n    description: Composite Skill - Modify a specific Task in ServiceNow\n    operationId: modifythisTask\n    parameters:\n      - name: sys_id\n        x-ibm-label: ServiceNow SysID (hidden)\n        in: path\n        required: true\n        schema:\n          $ref: '#/components/schemas/sysID'\n    requestBody:\n      content:\n        application/json:\n          schema:\n            $ref: '#/components/schemas/editTable'          \n    responses:\n      '200':\n        description: Record updated\n        content:\n          application/json: \n            schema:\n              $ref: '#/components/schemas/getthisTable'\n"})}),"\n",(0,t.jsx)(s.h2,{id:"schcema-components",children:"Schcema Components"}),"\n",(0,t.jsx)(s.p,{children:"In the components sections there are required schemas to apply properties or define the output of the response from ServiceNow"}),"\n",(0,t.jsx)(s.h4,{id:"sysid",children:"sysID"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"sysID: #sysID is a required output for composite skills, not shown to user in table\n  x-ibm-show: false\n  type: string\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"x-ibm-show: false"})," hides this parameter from the user. It is required so it can be part of the skill output to be used as a composite skill's input."]}),"\n",(0,t.jsx)(s.h3,{id:"output-schemas",children:"Output Schemas"}),"\n",(0,t.jsx)(s.h4,{id:"getthistable",children:"getthisTable"}),"\n",(0,t.jsx)(s.p,{children:"Output schema for a single table output such as a single Task or Incident"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"getthisTable: #Use when getting a single table such as Tasks and Incidents from a composite (sysID required input) skill\n  type: object\n  properties:\n    result:\n      x-ibm-label: Results\n      type: object\n      properties:\n          sys_id:\n            $ref: '#/components/schemas/sysID'\n          opened_at:\n            type: string\n          assignment_group:\n            type: string\n          assigned_to:\n            type: string\n          urgency:\n            type: string\n          opened_by:\n            type: string\n          state:\n            type: string\n          description:\n            type: string\n          short_description:\n            type: string\n          number:\n            type: string\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"x-ibm-label:"}),' is used to name the skill output "Results"']}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Note that the ",(0,t.jsx)(s.code,{children:"sys_id"})," object is pointing to the ",(0,t.jsx)(s.code,{children:"sysID"})," schema. This is where the ServiceNow sysID is an output item of the skill, but never shown to the user."]})}),"\n",(0,t.jsx)(s.h4,{id:"getsinglekb",children:"getsingleKB"}),"\n",(0,t.jsx)(s.p,{children:"Output schema for a single table output for a KB"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"There is little difference in the output between an Incident table and a Task table so they use the same schema. KB's are different tables entirely and require their own outpit schema"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"getsingleKB:\n      type: object\n      properties:\n        result:\n          x-ibm-label: Results\n          type: object\n          properties:\n              sys_id:\n                $ref: '#/components/schemas/sysID'\n              last_updated_on:\n                type: string\n              content:\n                type: string\n              author:\n                type: string\n              short_description:\n                type: string\n              number:\n                type: string\n"})}),"\n",(0,t.jsx)(s.h4,{id:"getkbs",children:"getKBs"}),"\n",(0,t.jsx)(s.p,{children:"Output schema for a table of KBs"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"getKBs:\n      type: object\n      properties:\n        result:\n          x-ibm-label: Knowledge Articles\n          type: array\n          items:\n            type: object\n            properties:\n              sys_id:\n                $ref: '#/components/schemas/sysID'\n              last_updated_on:\n                type: string\n              content:\n                type: string\n              author:\n                type: string\n              short_description:\n                type: string\n              number:\n                type: string\n"})}),"\n",(0,t.jsx)(s.h4,{id:"gettable",children:"getTable"}),"\n",(0,t.jsx)(s.p,{children:"Output schema for a table of Tasks or incidents"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"getTable:     #Use for multiple table results (skills like Get all Tasks and Get all Incidents)\n      type: object\n      properties:\n        result:\n          x-ibm-label: Results\n          type: array\n          items:\n            type: object\n            properties:\n              sys_id:\n                $ref: '#/components/schemas/sysID'\n              opened_at:\n                type: string\n              assignment_group:\n                type: string\n              assigned_to:\n                type: string\n              urgency:\n                type: string\n              opened_by:\n                  type: string\n              state:\n                type: string\n              description:\n                type: string\n              short_description:\n                type: string\n              number:\n                type: string\n"})}),"\n",(0,t.jsx)(s.h4,{id:"edittable",children:"editTable"}),"\n",(0,t.jsx)(s.p,{children:"Schema to define the content when editing a Task or Incident"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"editKB:\n  type: object\n    properties:\n      short_description:\n        x-ibm-label: Short Description\n        type: string\n        description: 'Short description of the record'\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var t=n(7294);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);