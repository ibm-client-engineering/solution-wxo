"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[136],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(n),m=s,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:s,i[1]=r;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var o=n(7462),s=(n(7294),n(4137));const a={id:"outputs",sidebar_position:2,title:"Outputs"},i=void 0,r={unversionedId:"ScriptDetails/outputs",id:"ScriptDetails/outputs",title:"Outputs",description:"ServiceNow Outputs",source:"@site/docs/3-ScriptDetails/Outputs.md",sourceDirName:"3-ScriptDetails",slug:"/ScriptDetails/outputs",permalink:"/solution-wxo/ScriptDetails/outputs",draft:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/3-ScriptDetails/Outputs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"outputs",sidebar_position:2,title:"Outputs"},sidebar:"tutorialSidebar",previous:{title:"Walkthrough",permalink:"/solution-wxo/ScriptDetails/walkthrough"}},l={},u=[{value:"ServiceNow Outputs",id:"servicenow-outputs",level:2},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Sample Outputs and Output Schema Comparisons",id:"sample-outputs-and-output-schema-comparisons",level:2},{value:"Single table outputs",id:"single-table-outputs",level:3},{value:"Multi table outputs",id:"multi-table-outputs",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"servicenow-outputs"},"ServiceNow Outputs"),(0,s.kt)("p",null,"Sample outputs of SerciceNow responses. Use these for reference when building response schemas in the yaml."),(0,s.kt)("p",null,"Reference your instance's REST API Explorer to test calls and their outputs:\nhttps://",(0,s.kt)("inlineCode",{parentName:"p"},"YOUR_INSTANCE_NAME_HERE"),".service-now.com/now/nav/ui/classic/params/target/%24restapi.do"),(0,s.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,s.kt)("p",null,"All of the following outputs assume both of these ServiceNow queries to be true:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sysparm_display_value = true")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sysparm_exclude_reference_link = true")),(0,s.kt)("p",null,"These are added to the path by appending this to the url in all paths:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"?sysparm_display_value=true&sysparm_exclude_reference_link=true")),(0,s.kt)("h2",{id:"sample-outputs-and-output-schema-comparisons"},"Sample Outputs and Output Schema Comparisons"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"The output schema cam be modified to show/hide any information recieved from ServiceNow. These example Output Schemas are currently in use in the Watsonx Orchestrate ServiceNow API")),(0,s.kt)("h3",{id:"single-table-outputs"},"Single table outputs"),(0,s.kt)("p",null,"These are outputs from SeriviceNow that show a single table item. Single table outputs are made up of a single results object, with nested objects inside.\nSys_ID is a required parameter, so these are composite skills."),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample get a single Task ServiceNow output")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": {\n    "parent": "",\n    "made_sla": "true",\n    "watch_list": "",\n    "sc_catalog": "",\n    "upon_reject": "Cancel all future Tasks",\n    "sys_updated_on": "2023-11-21 17:04:19",\n    "task_effective_number": "SCTASK0010005",\n    "approval_history": "",\n    "number": "SCTASK0010005",\n    "sys_updated_by": "admin",\n    "opened_by": "System Administrator",\n    "user_input": "",\n    "sys_created_on": "2023-11-21 17:04:19",\n    "sys_domain": "global",\n    "state": "Open",\n    "route_reason": "",\n    "sys_created_by": "admin",\n    "knowledge": "false",\n    "order": "",\n    "calendar_stc": "",\n    "closed_at": "",\n    "cmdb_ci": "",\n    "delivery_plan": "",\n    "contract": "",\n    "impact": "3 - Low",\n    "active": "true",\n    "work_notes_list": "",\n    "business_service": "",\n    "priority": "4 - Low",\n    "sys_domain_path": "/",\n    "time_worked": "",\n    "expected_start": "",\n    "opened_at": "2023-11-21 17:04:19",\n    "business_duration": "",\n    "group_list": "",\n    "work_end": "",\n    "approval_set": "",\n    "work_notes": "",\n    "universal_request": "",\n    "request": "",\n    "short_description": "",\n    "correlation_display": "",\n    "delivery_task": "",\n    "work_start": "2023-11-21 17:04:19",\n    "assignment_group": "",\n    "additional_assignee_list": "",\n    "description": "",\n    "calendar_duration": "",\n    "close_notes": "",\n    "service_offering": "",\n    "sys_class_name": "Catalog Task",\n    "closed_by": "",\n    "follow_up": "",\n    "sys_id": "45bba99f93263110017276718bba104a",\n    "contact_type": null,\n    "urgency": "3 - Low",\n    "company": "",\n    "reassignment_count": "0",\n    "activity_due": "UNKNOWN",\n    "assigned_to": "",\n    "comments": "",\n    "approval": "Not Yet Requested",\n    "sla_due": "UNKNOWN",\n    "comments_and_work_notes": "",\n    "due_date": "",\n    "sys_mod_count": "0",\n    "request_item": "",\n    "sys_tags": "",\n    "cat_item": "",\n    "escalation": "Normal",\n    "upon_approval": "Proceed to Next Task",\n    "correlation_id": "",\n    "location": ""\n  }\n}\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Output Schema")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"getthisTable: #Use when getting a single table such as Tasks and Incidents from a composite (sysID required input) skill\n  type: object\n  properties:\n    result:\n      x-ibm-label: Results\n      type: object\n      properties:\n          sys_id:\n            $ref: '#/components/schemas/sysID'\n          opened_at:\n            type: string\n          assignment_group:\n            type: string\n          assigned_to:\n            type: string\n          urgency:\n            type: string\n          opened_by:\n            type: string\n          state:\n            type: string\n          description:\n            type: string\n          short_description:\n            type: string\n          number:\n            type: string\n"))),(0,s.kt)("h3",{id:"multi-table-outputs"},"Multi table outputs"),(0,s.kt)("p",null,"These are outputs that show a list of table items as opposed to a single table item. Multi table outputs are enclosed in a ",(0,s.kt)("strong",null,"results array")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample get all Incidents ServiceNow output")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": [\n    {\n      "parent": "",\n      "made_sla": "true",\n      "caused_by": "",\n      "watch_list": "",\n      "upon_reject": "Cancel all future Tasks",\n      "sys_updated_on": "2016-12-13 18:46:44",\n      "child_incidents": "0",\n      "hold_reason": "",\n      "origin_table": "",\n      "task_effective_number": "INC0000060",\n      "approval_history": "",\n      "number": "INC0000060",\n      "resolved_by": "David Loo",\n      "sys_updated_by": "employee",\n      "opened_by": "Joe Employee",\n      "user_input": "",\n      "sys_created_on": "2016-12-12 07:19:57",\n      "sys_domain": "global",\n      "state": "Closed",\n      "route_reason": "",\n      "sys_created_by": "employee",\n      "knowledge": "false",\n      "order": "",\n      "calendar_stc": "102,197",\n      "closed_at": "2016-12-13 18:46:44",\n      "cmdb_ci": "Storage Area Network 001",\n      "delivery_plan": "",\n      "contract": "",\n      "impact": "2 - Medium",\n      "active": "false",\n      "work_notes_list": "",\n      "business_service": "Email",\n      "business_impact": "",\n      "priority": "3 - Moderate",\n      "sys_domain_path": "/",\n      "rfc": "",\n      "time_worked": "",\n      "expected_start": "",\n      "opened_at": "2016-12-12 07:19:57",\n      "business_duration": "8 Hours",\n      "group_list": "",\n      "work_end": "",\n      "caller_id": "Joe Employee",\n      "reopened_time": "",\n      "resolved_at": "2016-12-13 13:43:14",\n      "approval_set": "",\n      "subcategory": "Email",\n      "work_notes": "2016-12-12 16:56:57 - Beth Anglin (Work notes)\\nUpdating priority as workaround for incident has been provided.\\n\\n2016-12-12 09:57:00 - Beth Anglin (Work notes)\\nIncreasing priority as this incident is affecting more number of users\\n\\n2016-12-12 09:01:24 - Beth Anglin (Work notes)\\nUpdating incident with correct Configuration item\\n\\n",\n      "universal_request": "",\n      "short_description": "Unable to connect to email",\n      "close_code": "Solved (Permanently)",\n      "correlation_display": "",\n      "delivery_task": "",\n      "work_start": "",\n      "assignment_group": "Network",\n      "additional_assignee_list": "",\n      "business_stc": "28,800",\n      "cause": "",\n      "description": "I am unable to connect to the email server. It appears to be down.",\n      "origin_id": "",\n      "calendar_duration": "1 Day 4 Hours 23 Minutes",\n      "close_notes": "This incident is resolved.",\n      "notify": "Do Not Notify",\n      "service_offering": "",\n      "sys_class_name": "Incident",\n      "closed_by": "Joe Employee",\n      "follow_up": "",\n      "parent_incident": "",\n      "sys_id": "1c741bd70b2322007518478d83673af3",\n      "contact_type": "Self-service",\n      "reopened_by": "",\n      "incident_state": "Closed",\n      "urgency": "2 - Medium",\n      "problem_id": "",\n      "company": "ACME North America",\n      "reassignment_count": "2",\n      "activity_due": "2016-12-12 17:26:36",\n      "assigned_to": "David Loo",\n      "severity": "3 - Low",\n      "comments": "2016-12-13 12:30:14 - Joe Employee (Additional comments)\\nHi David, \\nThat must be it. I was on phone calls at all three of those times and must not have had any activity on my computer. Please close this incident.\\n\\n2016-12-13 10:42:25 - David Loo (Additional comments)\\nHi Joe,\\nI\'ve checked in network logs and you were timed out from the VPN at 9:25AM, 10:42AM and 2:28PM. These three times coincide with entries in the exchange server logs showing you lost connection at those same times. The VPN policy is to time out a connection if it hasn\'t been active in 30 minutes. Please ensure the next time you lose connectivity you are still connected to the VPN.\\n\\nI\'m going to update this incident to resolved. Please let me know if you need any more assistance.\\n\\n2016-12-13 07:53:01 - Joe Employee (Additional comments)\\nHi David,\\nThank you! I use the corporate VPN and was also unable to connect to the email server at 9:30AM and 10:45AM.\\n\\n2016-12-13 06:43:17 - David Loo (Additional comments)\\nHi Joe,\\nMy name is David. I\'ll be assisting you with this incident. Can you confirm which VPN you have been using today? I also see you were having this issue at 2:30PM. Were there any other times you can recall you had issues connecting to the email?\\n\\n2016-12-12 16:56:57 - Beth Anglin (Additional comments)\\nHi Joe, \\nAs per discussion on call, Workaround has been provided and it has worked for you. I have verified with the Exchange team we haven\'t had an issue with the email server today. I\'m going to assign this issue to the network team for further investigation.\\n\\n2016-12-12 12:43:50 - Joe Employee (Additional comments)\\nHi Beth,\\nYes, I\'m connected to the VPN, although I\'ve had to reconnect to it a couple of times. The last time I was unable to connect was 2:30PM.\\n\\n2016-12-12 10:52:42 - Beth Anglin (Additional comments)\\nHi Joe, \\nAre you connected to the VPN when you\'re having this issue? Can you identify a specific time you were unable to connect to email?\\n\\n2016-12-12 08:30:49 - Beth Anglin (Additional comments)\\nHi Joe, \\nMy name is Beth and I\'ll be assisting you with your issue.\\n\\n2016-12-12 07:19:57 - Joe Employee (Additional comments)\\nI am unable to connect to the email server. It appears to be down.\\n\\n",\n      "approval": "Not Yet Requested",\n      "sla_due": "UNKNOWN",\n      "comments_and_work_notes": "2016-12-13 12:30:14 - Joe Employee (Additional comments)\\nHi David, \\nThat must be it. I was on phone calls at all three of those times and must not have had any activity on my computer. Please close this incident.\\n\\n2016-12-13 10:42:25 - David Loo (Additional comments)\\nHi Joe,\\nI\'ve checked in network logs and you were timed out from the VPN at 9:25AM, 10:42AM and 2:28PM. These three times coincide with entries in the exchange server logs showing you lost connection at those same times. The VPN policy is to time out a connection if it hasn\'t been active in 30 minutes. Please ensure the next time you lose connectivity you are still connected to the VPN.\\n\\nI\'m going to update this incident to resolved. Please let me know if you need any more assistance.\\n\\n2016-12-13 07:53:01 - Joe Employee (Additional comments)\\nHi David,\\nThank you! I use the corporate VPN and was also unable to connect to the email server at 9:30AM and 10:45AM.\\n\\n2016-12-13 06:43:17 - David Loo (Additional comments)\\nHi Joe,\\nMy name is David. I\'ll be assisting you with this incident. Can you confirm which VPN you have been using today? I also see you were having this issue at 2:30PM. Were there any other times you can recall you had issues connecting to the email?\\n\\n2016-12-12 16:56:57 - Beth Anglin (Work notes)\\nUpdating priority as workaround for incident has been provided.\\n\\n2016-12-12 16:56:57 - Beth Anglin (Additional comments)\\nHi Joe, \\nAs per discussion on call, Workaround has been provided and it has worked for you. I have verified with the Exchange team we haven\'t had an issue with the email server today. I\'m going to assign this issue to the network team for further investigation.\\n\\n2016-12-12 12:43:50 - Joe Employee (Additional comments)\\nHi Beth,\\nYes, I\'m connected to the VPN, although I\'ve had to reconnect to it a couple of times. The last time I was unable to connect was 2:30PM.\\n\\n2016-12-12 10:52:42 - Beth Anglin (Additional comments)\\nHi Joe, \\nAre you connected to the VPN when you\'re having this issue? Can you identify a specific time you were unable to connect to email?\\n\\n2016-12-12 09:57:00 - Beth Anglin (Work notes)\\nIncreasing priority as this incident is affecting more number of users\\n\\n2016-12-12 09:01:24 - Beth Anglin (Work notes)\\nUpdating incident with correct Configuration item\\n\\n2016-12-12 08:30:49 - Beth Anglin (Additional comments)\\nHi Joe, \\nMy name is Beth and I\'ll be assisting you with your issue.\\n\\n2016-12-12 07:19:57 - Joe Employee (Additional comments)\\nI am unable to connect to the email server. It appears to be down.\\n\\n",\n      "due_date": "",\n      "sys_mod_count": "15",\n      "reopen_count": "0",\n      "sys_tags": "",\n      "escalation": "Normal",\n      "upon_approval": "Proceed to Next Task",\n      "correlation_id": "",\n      "location": "",\n      "category": "Inquiry / Help"\n    }\n  ]\n}\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Output Schema")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"getTable: #Use for multiple table results (skills like the top skills Get all Tasks and Get all Incidents)\n  type: object\n  properties:\n    result:\n      x-ibm-label: Results\n      type: array\n      items:\n        type: object\n        properties:\n          sys_id:\n            $ref: '#/components/schemas/sysID'\n          opened_at:\n            type: string\n          assignment_group:\n            type: string\n          assigned_to:\n            type: string\n          urgency:\n            type: string\n          opened_by:\n              type: string\n          state:\n            type: string\n          description:\n            type: string\n          short_description:\n            type: string\n          number:\n            type: string\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Sample get all KBs ServiceNow Output")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "result": [\n    {\n      "short_description": "How to Deal with Spam",\n      "author": "Ron Kettering",\n      "rating": "\ue91b \ue91b \ue91b \ue91b \ue91b",\n      "language": "",\n      "embedded_media": "",\n      "content": "<article><p><span style=\\"font-size: 18pt;\\"><strong>How to Deal with Spam</strong></span></p>\\n<p>Spam has increasingly become a problem on the Internet. While every Internet user receives some spam, email addresses posted to web sites or in newsgroups and chat rooms attract the most spam.</p>\\n<p>To reduce the amount of spam you receive:</p>\\n<ul><li>Don&#39;t reply to spam</li><li>Be careful releasing your email address, and know how it will be used</li><li>Be proactive  <br /><br /></li></ul>\\n<p style=\\"font-size: 12pt;\\"><strong>Don&#39;t reply to spam</strong></p>\\n<p>If you reply to spam, the spammer or the automated program on the other end will then know that your address is connected to a live person, and the spammer will then bombard you with even more spam, and circulate your address to other spammers. It is critical that you pause and think before replying to any spam. Consider the following guidelines:</p>\\n<ul><li>Setting up your email account to generate automatic responses while you are away can have the unfortunate side-effect of verifying your email address to every spammer that sends you spam. </li><li>If the message appears to come from a legitimate company, the company may have obtained your email address from some transaction between you and the company. In fact, you may have inadvertently provided your email address (e.g., if you didn&#39;t check a box marked Don&#39;t send me product updates). In these cases, it is usually safe to reply and ask to be removed from the mailing list. </li><li>If it is not a company you recognize, use your judgment. To be safe, copy and paste the link to the company&#39;s site into the browser rather than clicking it in the email message. </li><li>If the spam is clearly from a disreputable source, never respond. Do not follow the (probably bogus) unsubscribe directions. In most cases, if you never reply, the network of spammers will eventually decide your email address is a dud, and will stop using it as often.<br /><br /></li></ul>\\n<p style=\\"font-size: 12pt;\\"><strong>Be careful releasing your email address, and know how it will be used</strong></p>\\n<p>Every time you communicate on the Internet or browse a web site, there are opportunities for spammers to intercept your communications to obtain your email address and other personal information.</p>\\n<p>Otherwise reputable companies may sell or exchange your email address with other companies, and this information may eventually find its way to a spammer. At worst, spammers will use automated programs to bombard these lists of email addresses with spam. Consider the following guidelines:</p>\\n<ul><li>Subscribe only to essential discussion lists, and ensure that they are moderated. </li><li>Think twice before offering your email address to a web site. You may wish to check the site&#39;s privacy policy first to be sure it uses secure technology, and that the company does not share your email address with others. </li><li>If you need to list email addresses on your web site, present the addresses in a way that makes them less vulnerable to collection and abuse by spammers.</li><li>Every time you are asked for your email address verbally or on paper, think carefully about whether or not you want to receive any information from that company or organization. It is usually best to decline to provide your email address. </li><li>Whenever possible, advocate that organizations you are involved in or do business with default to the opt-in model. This requires you to specifically request to be added to their email lists, rather than the opt-out model, where they add you to email lists automatically, and then give you the option of asking to be removed. <br /><br /></li></ul>\\n<p style=\\"font-size: 12pt;\\"><strong>Be proactive</strong></p>\\n<p>Adjusting the security settings in your web browser is a good preventive measure. For a higher level of security, have your browser disallow:</p>\\n<ul><li>Accepting cookies</li><li>Listing your name and other personal information in your browser profile</li><li>Filling in form fields for you</li></ul>\\n<p>This will help reduce the amount of personal information transmitted to sites at the expense of full functionality, since many legitimate web sites require you to accept cookies.</p>\\n<p>Do not contribute to the spam problem by producing any of it yourself! In particular, learn about chain mail and do not forward chain mail to others. Also, if you receive an email message that appears to warn of some horrible thing happening (a virus that reportedly deletes all your files, for example) or is a touching sob story (about helping to save a poor sick girl or boy, for example), be suspicious.</p>\\n<p>Nearly every instance of chain mail is a hoax. The message may even come from someone you know and respect who is simply not aware that it&#39;s a hoax. Learn about hoaxes and the sites available to verify hoaxes, and do not forward them to others. <br /><br /></p>\\n<p style=\\"font-size: 12pt;\\"><strong>Questions regarding X-rated spam (unsolicited mass e-mail)</strong></p>\\n<p> Some members of the Company have at times expressed concern to IT regarding their own accountability for unsolicited e-mail of a sexual nature sent to their Company e-mail address. In some cases, an employee worries that a supervisor or co-worker might think the employee solicited the mail. In other cases, the person fears that an IT employee asked to assist with the computer might think the person had solicited the sexually-oriented mail.</p>\\n<p>Most people who either have experienced spam or have read about spam understand that spammers do not wait to be asked; they are in the business of aggressive marketing. Many spammers are deceitful, trying to fool people into opening their unwanted e-mail by pretending to be someone else or using a subject line which fools the recipient into opening the mail. Sometimes they claim falsely that the person is receiving the e-mail because the person asked for it, or expressed interest in material of a similar nature. The truth is that few people welcome spam and even fewer ask for it.</p>\\n<p>If a supervisor or co-worker thinks otherwise, IT can reassure them. Certainly, IT technicians and consultants understand that spam is a plague and not something invited by the recipient. As extra protection, depending upon how you receive your e-mail on campus, there are ways to quarantine spam and/or filter your incoming e-mail.  It is advisable to immediately delete any such emails you receive.</p></article>",\n      "helpful_text": "",\n      "number": "KB0000011",\n      "sys_id": "0b48fd75474321009db4b5b08b9a71c2",\n      "last_updated_on": "Updated 9y ago",\n      "last_helpful_rating": "0",\n      "last_rating": "",\n      "view_count": "3 Views"\n    }\n  ]\n}\n'))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The output schema for a KB is very different than the output schema for Tasks and Incidents which use the same schema. Take every table into consideration based on their output when designing an output schema")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Output Schema")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"getKBs: #Use for when getting multiple KBs\n  type: object\n  properties:\n    result:\n      x-ibm-label: Knowledge Articles\n      type: array\n      items:\n        type: object\n        properties:\n          sys_id:\n            $ref: '#/components/schemas/sysID'\n          last_updated_on:\n            type: string\n          content:\n            type: string\n          author:\n            type: string\n          short_description:\n            type: string\n          number:\n            type: string\n"))))}d.isMDXComponent=!0}}]);