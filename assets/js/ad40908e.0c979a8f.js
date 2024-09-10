"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6320],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},94070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(64778),a=(n(59496),n(49613));const r={title:"What is ByConity",sidebar_position:1,tags:["Docs"]},o="ByConity Introduction",s={unversionedId:"introduction/what-is-byconity",id:"introduction/what-is-byconity",title:"What is ByConity",description:"What is ByConity",source:"@site/docs/introduction/what-is-byconity.mdx",sourceDirName:"introduction",slug:"/introduction/what-is-byconity",permalink:"/docs/introduction/what-is-byconity",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/introduction/what-is-byconity.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"What is ByConity",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",next:{title:"Technical Architecture and Principles",permalink:"/docs/introduction/main-principle-concepts"}},c={},l=[{value:"What is ByConity",id:"what-is-byconity",level:2},{value:"ByConity&#39;s name",id:"byconitys-name",level:2},{value:"Applicable Scenarios",id:"applicable-scenarios",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"byconity-introduction"},"ByConity Introduction"),(0,a.kt)("h2",{id:"what-is-byconity"},"What is ByConity"),(0,a.kt)("p",null,"ByConity is a new generation of open-source cloud-native data warehouse. It adopts a compute-storage separation architecture to meet various requirements of data warehouse users, such as elastic scaling of resources, read-write separation, resource isolation, and strong data consistency, while providing excellent query and write performance. ByConity uses a large number of mature OLAP technologies, such as column-based storage engines, MPP execution, intelligent query optimization, vectorized execution, code generation, indexing, data compression, etc."),(0,a.kt)("h2",{id:"byconitys-name"},"ByConity's name"),(0,a.kt)("p",null,'ByConity\'s name is composed of three words: Byte, Convert, and Community. "By" comes from "byte" which represents the basic unit of stored data, metaphorically referring to massive amounts of data. "Con" comes from "convert" which represents change and innovation. "Conity" also comes from "community" which represents a group of people, specifically our open-source developer community. The implication of ByConity is to bring together a group of developers who are willing to break conventional technologies and change the way we use data.'),(0,a.kt)("h2",{id:"applicable-scenarios"},"Applicable Scenarios"),(0,a.kt)("p",null,"ByConity can meet various user scenarios for enterprise users, such as interactive queries, real-time data dashboards, and real-time data warehouses."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Interactive Queries: This scenario includes user-defined queries, self-service reporting, user profiling analysis, marketing effectiveness analysis, and behavior log analysis. These applications support free-dimension and multi-table association query analysis with fast response times. Behavior log analysis also supports large-scale log exploration and analysis.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Real-time Data Dashboards: Suitable for real-time business monitoring screens, live data statistics dashboards, business dashboards, and system link monitoring. All applications emphasize real-time characteristics, and some support statistical functions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Real-time Data Warehouses: Includes real-time data ingestion and near-real-time ETL calculations, emphasizing real-time data writing and immediate data visibility while supporting complex calculations and data cleaning.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ELT workerloads: User can use bsp mode to do batch processing. Fault-tolerance is enabled with this mode. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/elt/elt-introduction"},"ELT introduction"),"."))))}d.isMDXComponent=!0}}]);