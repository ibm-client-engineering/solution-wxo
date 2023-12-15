"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2113],{8765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(5893),s=n(1151);const r={id:"skills",sidebar_position:2,title:"Provided Skills"},o=void 0,l={id:"watsonx/GettingStarted/skills",title:"Provided Skills",description:"Send a prompt to Watsonx Prompt Lab",source:"@site/docs/2-watsonx/1-GettingStarted/2-ProvidedSkills.mdx",sourceDirName:"2-watsonx/1-GettingStarted",slug:"/watsonx/GettingStarted/skills",permalink:"/solution-wxo/watsonx/GettingStarted/skills",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-wxo/tree/main/packages/create-docusaurus/templates/shared/docs/2-watsonx/1-GettingStarted/2-ProvidedSkills.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"skills",sidebar_position:2,title:"Provided Skills"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/solution-wxo/watsonx/GettingStarted/prerequisites"},next:{title:"Authentication",permalink:"/solution-wxo/watsonx/GettingStarted/auth"}},a={},d=[{value:"Send a prompt to Watsonx Prompt Lab",id:"send-a-prompt-to-watsonx-prompt-lab",level:2},{value:"Input Parameters",id:"input-parameters",level:3},{value:"User visible and required",id:"user-visible-and-required",level:4},{value:"Disabled user visibility but required",id:"disabled-user-visibility-but-required",level:4},{value:"Required but only visible if the user selects (show more fields)",id:"required-but-only-visible-if-the-user-selects-show-more-fields",level:4},{value:"Sampling Parameters",id:"sampling-parameters",level:5}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"send-a-prompt-to-watsonx-prompt-lab",children:"Send a prompt to Watsonx Prompt Lab"}),"\n",(0,i.jsx)(t.p,{children:"Sends a prompt to a Watsonx project Prompt Lab"}),"\n",(0,i.jsx)(t.p,{children:'WXO name "JC - Send a prompt to Watsonx Prompt Lab"'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/jcosenz/assistant-toolkit/blob/02396cc80d3b3aae3822915957b6a8bbf0ed991f/integrations/extensions/starter-kits/language-model-watsonx/watsonx-openapi.json",children:"IBM OpenAPI Specification Reference"})}),"\n",(0,i.jsx)(t.h3,{id:"input-parameters",children:"Input Parameters"}),"\n",(0,i.jsx)(t.h4,{id:"user-visible-and-required",children:"User visible and required"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Watsonx Orchestrate User Input"})}),(0,i.jsx)(t.p,{children:'Multiline input of the prompt from Watsonx Orchestrate user sends to the Prompt Lab. Default parameter and text to be displayed on Watsonx Orchestrate is "Enter your prompt here. Be specific to what you want Watsonx AI to do!" to guide the user\'s input.'})]}),"\n",(0,i.jsx)(t.h4,{id:"disabled-user-visibility-but-required",children:"Disabled user visibility but required"}),"\n",(0,i.jsx)(t.p,{children:"Requires modification to specify the Watsonx Project"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Watsonx Project ID"})}),(0,i.jsx)(t.p,{children:"Hard-coded project ID in the yaml of the Watsonx project."})]}),"\n",(0,i.jsx)(t.h4,{id:"required-but-only-visible-if-the-user-selects-show-more-fields",children:"Required but only visible if the user selects (show more fields)"}),"\n",(0,i.jsx)(t.p,{children:"The script determines the default values for the following"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Foundation Model"})}),(0,i.jsx)(t.p,{children:"The ID of the AI model to be used. The yaml currently only allows for the model choices below."}),(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:'If you are modifying this script for a specific purpose, use a default or allow for only a specific set of AI models that works best for your skill\'s purpose. For example, if you are modifying this skill to do something specific like "summarize this text" select one of the IBM instruct models or a Google flan model as opposed to a chat or coding model.'})}),(0,i.jsx)(t.p,{children:'Select a model that best fits your needs. All models support English text. Check the model information for other supported languages. The default value for this parameter is set to "bigscience/mt0-xxl-13b"'}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The Granite series of models are a family of IBM-trained decoder-only models used for text generation, summarization, question and answer, classification, and extraction."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"granite-13b-chat-v1"}),"\n",(0,i.jsx)(t.li,{children:"granite-13b-chat-v2"}),"\n",(0,i.jsx)(t.li,{children:"granite-13b-instruct-v1"}),"\n",(0,i.jsx)(t.li,{children:"granite-13b-instruct-v2"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Non IBM Models"}),"\n",(0,i.jsx)(t.admonition,{title:"Disclaimer",type:"warning",children:(0,i.jsxs)(t.p,{children:["These models are a Non-IBM Product governed by a third-party license that may impose use restrictions and other obligations. By using this model you agree to its terms as identified in the following URL. URL: ",(0,i.jsx)(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx",children:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models.html?context=wx"})]})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["flan-ul2-20b","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An encoder decoder model based on the T5 architecture and instruction-tuned using the Fine-tuned Language Net."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["flan-t5-xxl-11b","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An 11 billion parameter model based on the Flan-T5 family."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["flan-t5-xl-3b","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A pretrained T5 - an encoder-decoder model pre-trained on a mixture of supervised / unsupervised tasks converted into a text-to-text format."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["starcoder-15.5b","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The StarCoder models are 15.5B parameter models that can generate code from natural language descriptions."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["mt0-xxl-13b","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An instruction-tuned iteration on mT5."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["gpt-neox-20b","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A 20 billion parameter autoregressive language model trained on the Pile."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["mpt-7b-instruct2","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A decoder-style transformer pretrained from scratch on 1T tokens of English text and code. This model was trained by IBM."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["llama-2-13b-chat","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An auto-regressive language model that uses an optimized transformer architecture."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["llama-2-70b-chat","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An auto-regressive language model that uses an optimized transformer architecture."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Minimum New Tokens"})}),(0,i.jsx)(t.p,{children:"Define the minimum number of tokens to generate. The default value for this parameter is set to null."}),(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"If the response is too short or too long for the prompt, modify the minimum amount of tokens to help guide the response. By default this should be set to null so the AI model determines the length. Some models (like IBM's Instruct models) however require help from this input."})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Maximum New Tokens"})}),(0,i.jsx)(t.p,{children:"Define the maximum number of tokens to generate. The default value for this parameter is set to 700."}),(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This is typically determined by the ammount of tokens you have in Watsonx. Set this to a maximum allowable amount per your Watsonx instance unless you're concerned with token usage."})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Repetition Penalty"})}),(0,i.jsx)(t.p,{children:"Define the penalty for repetition. A value between 1.00 and 2.00. 1.00 means no penalty. The default value for this parameter is set to 2.00 for better response readability."})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Stop Sequences (Non Functional)"})}),(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"This parameter does not function properly in Watsonx Orchestrate. Watsonx Orchestrate is unable to allow for input parameters of type array without specifying items. If we specify the array items (whether as each as empty strings or null) passes a non-null array which causes an error on Watsonx. Therefore we are unable to pass this array parameter as null while giving the user the opportunity to provide an input."})}),(0,i.jsx)(t.p,{children:"Stop sequences are one or more strings which will cause the text generation to stop if/when they are produced as part of the output. Stop sequences encountered prior to the minimum number of tokens being generated will be ignored. Values are inputed by the user as array values. The default value for this parameter is set to null."})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Decoding Method"})}),(0,i.jsx)(t.p,{children:'Define the decoding method. The selections are "greedy" or "sampling". The default value for this parameter is set to "greedy".'}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Set decoding to "greedy" to always select words with the highest probability'}),"\n",(0,i.jsxs)(t.li,{children:['Set decoding to "sample" to customize the variability of word selection',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Using Sampling, you can set the Temperature, Top K and Top P values (below)"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(t.h5,{id:"sampling-parameters",children:"Sampling Parameters"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Temperature"})}),(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:'This parameter is only utilized when "sampling" is the selected decoding method.'})}),(0,i.jsx)(t.p,{children:"Control the creativity of generated text. A value between 0.00 and 2.00 Higher values will lead to more randomly generated outputs. The default value for this parameter is set to null."})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Top K"})}),(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:'This parameter is only utilized when "sampling" is the selected decoding method'})}),(0,i.jsx)(t.p,{children:"Set the number of highest probability tokens to keep for top-k filtering. A value between 0 and 100. Lower values make it less likely the model will go off topic. The default value for this parameter is set to null."})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Top P"})}),(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:'This parameter is only utilized when "sampling" is the selected decoding method'})}),(0,i.jsx)(t.p,{children:'Set the nucleus sampling (top p). If < 1.0, only the smallest set of probable tokens with probabilities that add up to "top-p" or higher are used. The default value for this parameter is set to null.'})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Random Seed"})}),(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:'This parameter is only utilized when "sampling" is the selected decoding method'})}),(0,i.jsx)(t.p,{children:"Input a number that controls the random sampling of the generated tokens when sampling is enabled. Setting the random seed to the same number for each generation ensures experimental repeatability. The default value for this parameter is set to null."})]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);