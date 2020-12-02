(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{xf93:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},o=b("PageDescription"),d=b("InlineNotification"),c=b("Tabs"),p=b("Tab"),m={_frontmatter:i},s=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,l({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o,{mdxType:"PageDescription"},Object(a.b)("p",null,"Topics for developers to understand advanced Cloud-Native concepts.")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},Object(a.b)("em",{parentName:"strong"},"Developer advanced journey is still under development"))),Object(a.b)(d,{mdxType:"InlineNotification"},Object(a.b)("p",null,"Before you proceed, make sure you have completed developer intermediate journey and have IBM Cloud Sandbox invite. It is a paid IBM Cloud account with the ",Object(a.b)("a",l({parentName:"p"},{href:"../getting-started/devenvsetup"}),"Developer Tools environment")," already installed and ready for you to use, including both a Kubernetes cluster and an OpenShift cluster. (The environment is locked down to prevent creating any new services.) Also, before proceeding:")),Object(a.b)("p",null,"This set of tasks focuses on the advanced Developer concepts: How to use the Developer Tools environment to perform the software delivery lifecycle (SDLC)."),Object(a.b)("h3",null,"Learning Tasks"),Object(a.b)("p",null,"The learning tasks help you understand the tasks in the advanced Developer Experience. Developer intermediate focuses on being able to use the environment well enough to develop and deploy a basic cloud-native application. Developer advanced focuses on using the SDLC to iteratively develop, deliver, operate, secure, and manage applications. As a team executes the key agile ceremonies using the ",Object(a.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/garage/method/cloud/"}),"Garage Method"),", it’s important for developers and architects to understand what is involved in moving software components consistently and reliably from ",Object(a.b)("em",{parentName:"p"},"dev")," to ",Object(a.b)("em",{parentName:"p"},"test")," and on to ",Object(a.b)("em",{parentName:"p"},"production"),"."),Object(a.b)("p",null,"These learning tasks are more advanced than those from the developer intermediate experience, so take your time and do some research on the topic before jumping into the task."),Object(a.b)(c,{mdxType:"Tabs"},Object(a.b)(p,{label:"Over the Web",mdxType:"Tab"},Object(a.b)("h2",null,"Before the Workshop"),Object(a.b)("p",null,"Please complete these tasks before attending the first session. This will help you get started quickly with the practical exercises."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Task"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Description"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Link"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Time"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Welcome Message"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Welcome to Cloud-Native Workshop"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/getting-started/introduction"}),"Introduction")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"5 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Prerequisites"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Install the prerequisite tools"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/getting-started/prereqs"}),"Setup Prerequisites")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"10 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Sandbox Access"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Validate access to your Development Cluster"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/getting-started/checksetup"}),"Validate")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"10 min")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Continous Delivery")),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:"left"})),Object(a.b)("td",l({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Continous Delivery (CD)"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Overview"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-intermediate/continuous-delivery"}),"CD")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"15 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"CD Implementation"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Application Delivery with Gitops"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/gitops"}),"Gitops")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"15 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Database Integration")),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:"left"})),Object(a.b)("td",l({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Cloudant"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Integrate Backend with Cloudant Database"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/inventory-cloudant"}),"Cloudant")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"15 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"MongoDB"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Integrate Backend with MongoDB Database"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/inventory-mongodb"}),"MongoDB")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"15 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Postgres"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Integrate Backend with Postgres Database"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/inventory-postgres"}),"Postgres")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"15 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Authentication")),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:"left"})),Object(a.b)("td",l({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"App ID"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Secure the solution with App ID"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/inventory-appid/"}),"App ID")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"15 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"API Consumption")),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:"left"})),Object(a.b)("td",l({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Using API’s in Client Applications"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Overview"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/swagger-and-openapi/"}),"OpenAPI and Swagger")),Object(a.b)("td",l({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Contract Testing")),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:"left"})),Object(a.b)("td",l({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Overview"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Brief overview of Contract Testing"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/contract-testing-overview/"}),"Contract Testing")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"15 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Hands On Lab"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Incorporate contract testing within inventory app"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/inventory-contract-testing/"}),"Inventory Contract Testing")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"30 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Advanced Monitoring and Logging")),Object(a.b)("td",l({parentName:"tr"},{align:null})),Object(a.b)("td",l({parentName:"tr"},{align:"left"})),Object(a.b)("td",l({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Monitoring"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Advanced Monitoring with Sysdig"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/monitoring/"}),"Advanced Monitoring")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"30 mins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"Log Management"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Advanced Log Management with LogDNA"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("a",l({parentName:"td"},{href:"/ibm-gsi-cloudnative-journey/developer-advanced-1/log-management/"}),"Advanced Log Management")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"30 mins"))))),Object(a.b)(p,{label:"Self Paced",mdxType:"Tab"}),Object(a.b)(p,{label:"In Person",mdxType:"Tab"})),Object(a.b)("p",null,"Once you have completed these tasks, you will have completed the learning requirements for both the intermediate and the advanced Experience. For intermediate journey, you created your first app and CI pipeline, and then extended that into a 3-tier polyglot solution. For advanced journey, you worked with your application’s logs, monitored your app, and moved your code from ",Object(a.b)("em",{parentName:"p"},"dev")," to ",Object(a.b)("em",{parentName:"p"},"test"),"."),Object(a.b)("p",null,"What is very clear is that the Developer Tools environment—an application architecture that combines a Red Hat OpenShift or Kubernetes cluster with powerful cloud services, packaged with a development environment with a CI/CD pipeline incorporating best-of-breed open source tools—gives you a powerful development platform that enables you to build any form of cloud-native application. These skills form the foundation not only to develop applications for Kubernetes and OpenShift, but to develop applications that leverage the IBM Cloud Paks as well."),Object(a.b)("h3",null,"Review Learning Tasks"),Object(a.b)("p",null,"Working with colleagues review your learning tasks. The Cloud Ecosystem team is looking for feedback from three perspectives:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"What went well?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"What needs improvement?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Next steps?"))),Object(a.b)("p",null,"Developers will begin the learning journey with different skill levels and familiarity with this material, but will complete the Cloud-Native enablement with a more detailed understanding of how to build solutions for the IBM Cloud. Each student’s ",Object(a.b)("strong",{parentName:"p"},"Next Steps")," will help identify that person’s skill gaps to ensure they cover the topics needed to complete the learning journey successfully."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-advanced-1-index-mdx-11710e4c971a1d10e28c.js.map