"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1336],{9613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>y});var n=a(9496);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=c(a),m=o,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(y,i(i({ref:e},d),{},{components:a})):n.createElement(y,i({ref:e},d))}));function y(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7950:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(4778),o=(a(9496),a(9613));const r={title:"Data Model",sidebar_position:1,tags:["Docs"]},i="Data Model",l={unversionedId:"table-design/data-model",id:"table-design/data-model",title:"Data Model",description:"Columnar Storage Design Principles",source:"@site/docs/table-design/data-model.mdx",sourceDirName:"table-design",slug:"/table-design/data-model",permalink:"/docs/table-design/data-model",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/table-design/data-model.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"Data Model",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Ingest by column",permalink:"/docs/data-import/Ad-hocs/ingest_column"},next:{title:"Table Engines",permalink:"/docs/table-design/table-engine"}},s={},c=[{value:"Columnar Storage Design Principles",id:"columnar-storage-design-principles",level:2},{value:"Data Layout",id:"data-layout",level:3},{value:"Part Delta",id:"part-delta",level:3},{value:"Part File",id:"part-file",level:2},{value:"Compaction",id:"compaction",level:2}],d={toc:c},p="wrapper";function u(t){let{components:e,...a}=t;return(0,o.kt)(p,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-model"},"Data Model"),(0,o.kt)("h2",{id:"columnar-storage-design-principles"},"Columnar Storage Design Principles"),(0,o.kt)("p",null,"Typically, transactional databases adopt row-based storage for supporting transactions and high-concurrency read-write operations, while analytical databases use column-based storage to reduce IO and facilitate compression. ByConity employs a columnar storage approach to ensure read-write performance, support transactional consistency, and accommodate large-scale data computation."),(0,o.kt)("h3",{id:"data-layout"},"Data Layout"),(0,o.kt)("p",null,"Table data is physically divided into multiple parts based on the partition key and stored in a unified distributed file system or cloud storage logical storage path. Each part has limits on data size and the number of rows. Computing groups obtain their corresponding parts based on service node allocation strategies (pre-allocation and real-time allocation)."),(0,o.kt)("h3",{id:"part-delta"},"Part Delta"),(0,o.kt)("p",null,"Initially, part data is constructed as a hybrid row-column storage part data file. As DML, data dictionaries, bitmap indexes, and other construction tasks progress, there may be incremental data for the part. This incremental data can be stored in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rewriting the entire part data during each construction."),(0,o.kt)("li",{parentName:"ol"},"Generating incremental data and asynchronously merging it into a larger part file in the background.")),(0,o.kt)("p",null,"The first approach can have a significant impact on the overall cluster's availability. Therefore, we primarily adopt the second approach, considering the following two points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each DML, data dictionary, or other construction task may involve full IO operations on all parts of the table, which can be costly."),(0,o.kt)("li",{parentName:"ul"},"Construction times can be relatively long, causing DML and other operations to take a considerable amount of time to complete, which is not user-friendly.")),(0,o.kt)("h2",{id:"part-file"},"Part File"),(0,o.kt)("p",null,"Part data typically consists of two components: metadata and actual data."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Metadata: Contains important information about the location of data within the data file (e.g., offset), the number of rows it contains, the data schema, and column data information. This metadata needs to be persistently stored and is often cached in compute nodes for fast data location and access."),(0,o.kt)("li",{parentName:"ul"},"Actual Data: This includes the actual column data (Column Bin Data), column marker data (Column Mrk Data), Map key binary data (Map Key Bin), Map key index (Map Key Index), data dictionary data (Data Dictionary Data), bitmap index data (Bitmap Index Data), etc. This data is stored sequentially in the part's data file according to the offset information in the metadata.")),(0,o.kt)("h2",{id:"compaction"},"Compaction"),(0,o.kt)("p",null,"ByConity supports splitting a part file into multiple smaller files. The compacted parts need to satisfy the maximum size and row limits configured for parts."),(0,o.kt)("p",null,"Compaction in ByConity is performed globally, maintaining consistency with the globally unique block IDs mentioned earlier."))}u.isMDXComponent=!0}}]);