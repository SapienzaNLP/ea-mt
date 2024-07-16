"use strict";(self.webpackChunkea_mt_website=self.webpackChunkea_mt_website||[]).push([[786],{4999:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=a(4848),t=a(8453);const l={sidebar_label:"Data",sidebar_position:3},s="Data",r={id:"task/data",title:"Data",description:"The data for the shared task is scheduled to be released in three stages: sample data, training data, and evaluation data. The sample data will be released first to give participants an idea of the data format and the task. The training data will be released next to allow participants to train their systems. The evaluation data -- without the target references -- will be released last for participants to evaluate their systems. The target references for the evaluation data will be released after the evaluation period ends.",source:"@site/docs/task/data.md",sourceDirName:"task",slug:"/task/data",permalink:"/ea-mt/docs/task/data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Data",sidebar_position:3},sidebar:"taskSidebar",previous:{title:"Important Dates",permalink:"/ea-mt/docs/task/important_dates"},next:{title:"Evaluation",permalink:"/ea-mt/docs/task/evaluation"}},o={},d=[{value:"Important Dates",id:"important-dates",level:2},{value:"Overview",id:"overview",level:2},{value:"Languages",id:"languages",level:3},{value:"Source languages",id:"source-languages",level:4},{value:"Target Languages",id:"target-languages",level:4},{value:"Format",id:"format",level:2},{value:"Examples",id:"examples",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Download",id:"download",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"data",children:"Data"}),"\n",(0,i.jsx)(n.p,{children:"The data for the shared task is scheduled to be released in three stages: sample data, training data, and evaluation data. The sample data will be released first to give participants an idea of the data format and the task. The training data will be released next to allow participants to train their systems. The evaluation data -- without the target references -- will be released last for participants to evaluate their systems. The target references for the evaluation data will be released after the evaluation period ends."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Jump to the ",(0,i.jsx)(n.a,{href:"#download",children:'"Download" section'})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"important-dates",children:"Important Dates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sample data ready: ",(0,i.jsx)(n.strong,{children:"15 July 2024"})]}),"\n",(0,i.jsxs)(n.li,{children:["Training data ready: ",(0,i.jsx)(n.strong,{children:"2 September 2024"})]}),"\n",(0,i.jsxs)(n.li,{children:["Evaluation data ready: ",(0,i.jsx)(n.strong,{children:"10 January 2025"})]}),"\n",(0,i.jsx)(n.li,{children:"Evaluation data with target references ready: After the evaluation period ends"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:'All deadlines are 23:59 UTC-12 ("anywhere on Earth").'})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The data for the shared task will be provided in JSONL format. The data will contain English source text and translations in multiple target languages. The data will also contain named entities mentioned in the translations. The data will be based on Wikidata entities."}),"\n",(0,i.jsx)(n.h3,{id:"languages",children:"Languages"}),"\n",(0,i.jsx)(n.p,{children:"The data will be provided in the following languages:"}),"\n",(0,i.jsx)(n.h4,{id:"source-languages",children:"Source languages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["English (",(0,i.jsx)(n.code,{children:"en"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"target-languages",children:"Target Languages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Italian (",(0,i.jsx)(n.code,{children:"it"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Spanish (",(0,i.jsx)(n.code,{children:"es"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["French (",(0,i.jsx)(n.code,{children:"fr"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["German (",(0,i.jsx)(n.code,{children:"de"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Arabic (",(0,i.jsx)(n.code,{children:"ar"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Japanese (",(0,i.jsx)(n.code,{children:"ja"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Chinese (",(0,i.jsx)(n.code,{children:"zh"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Korean (",(0,i.jsx)(n.code,{children:"ko"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Thai (",(0,i.jsx)(n.code,{children:"th"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Turkish (",(0,i.jsx)(n.code,{children:"tr"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,i.jsx)(n.p,{children:"The data will be provided in the following format, where each line in the file will be a JSON object with the following fields:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"}),": A unique identifier for the data instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source_locale"}),": The locale of the source text; for this edition of the task, it is always English (",(0,i.jsx)(n.code,{children:"en"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target_locale"}),": The locale of the target text."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source"}),": A single string containing the source text in English."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target"}),": A ",(0,i.jsx)(n.strong,{children:"list"})," of strings, i.e., possible translations, containing the target text in the target locale."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mention"}),": A ",(0,i.jsx)(n.strong,{children:"list"})," of strings, i.e., named entities, mentioned in the translation, one for each target translation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"metadata"}),": Additional metadata for the data instance (if available)."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The target text is provided as a list of strings to account for multiple valid translations."})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Here are a few examples of the data format. These examples have been beautified to improve readability. However, the actual data will be provided in a single line."}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the named entity ",(0,i.jsx)(n.code,{children:"Yu the Great"}),' contains a "title" in the name, which is translated as ',(0,i.jsx)(n.code,{children:"il Grande"})," in Italian, i.e., part of the name is translated to the target language."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "Q627784_0",\n  "source_locale": "en",\n  "target_locale": "it"\n  "source": "How is Yu the Great remembered and honored in Chinese history and culture today?",\n  "target": [\n    "Come viene ricordato e onorato attualmente Yu il Grande nella storia e nella cultura cinese?",\n    "Come viene ricordato e onorato Yu il Grande nella storia e nella cultura cinese oggi?"\n  ],\n  "mention": [\n    "Yu il Grande",\n    "Yu il Grande"\n  ],\n  "metadata": {\n    "wikidata_id": "Q627784",\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the named entity ",(0,i.jsx)(n.code,{children:"World of Ice and Fire"})," is translated as ",(0,i.jsx)(n.code,{children:"mondo delle **Cronache** del ghiaccio e del fuoco"})," in Italian, i.e., the target name contains an additional word ",(0,i.jsx)(n.code,{children:"Cronache"})," (",(0,i.jsx)(n.code,{children:"Cronicles"}),") that is not present in the source name."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "Q2461698_2",\n  "source_locale": "en",\n  "target_locale": "it",\n  "source": "What are some prominent locations in the World of Ice and Fire?",\n  "target": [\n    "Quali sono alcuni luoghi di spicco nel mondo delle Cronache del ghiaccio e del fuoco?",\n    "Quali sono alcuni luoghi di rilievo nel mondo delle Cronache del ghiaccio e del fuoco?"\n  ],\n  "mention": [\n    "mondo delle Cronache del ghiaccio e del fuoco",\n    "mondo delle Cronache del ghiaccio e del fuoco"\n  ],\n  "metadata": {\n    "wikidata_id": "Q2461698",\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the named entity ",(0,i.jsx)(n.code,{children:"Sweet Magnolias"})," is translated as ",(0,i.jsx)(n.code,{children:"Il colore delle magnolie"})," in Italian, i.e., the target name is very different from the source name, as the literal translation would be ",(0,i.jsx)(n.code,{children:"Dolci magnolie"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "Q56800842_1",\n  "source_locale": "en",\n  "target_locale": "it",\n  "source": "How many seasons of Sweet Magnolias are available on Netflix?",\n  "target": [\n    "Quante stagioni de Il colore delle magnolie sono disponibili su Netflix?",\n    "Quante stagioni del Il colore delle magnolie sono disponibili su Netflix?",\n    "Quante stagioni di Il colore delle magnolie sono disponibili su Netflix?"\n  ],\n  "mention": [\n    "Il colore delle magnolie",\n    "Il colore delle magnolie",\n    "Il colore delle magnolie"\n  ],\n  "metadata": {\n    "wikidata_id": "Q56800842",\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sample data: ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(1988).A+"",children:"link (.zip file)"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1988:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/files/sample-e83f244f6659fd38a81cfd1d93d992cb.zip"},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var i=a(6540);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);