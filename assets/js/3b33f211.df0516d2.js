"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[179],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(4778),a=(r(9496),r(9613));const i={title:"ELT Introduction",sidebar_position:1,tags:["Docs"]},o="Introduction to ByConity ELT",l={unversionedId:"elt/elt-introduction",id:"elt/elt-introduction",title:"ELT Introduction",description:"ClickHouse in OLAP Scenarios and Its Problems",source:"@site/docs/elt/elt-introduction.mdx",sourceDirName:"elt",slug:"/elt/elt-introduction",permalink:"/docs/elt/elt-introduction",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/elt/elt-introduction.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"ELT Introduction",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Unique Key",permalink:"/docs/table-design/unique-key"},next:{title:"External Tables",permalink:"/docs/data-lakes/hive-external-table"}},s={},c=[{value:"ClickHouse in OLAP Scenarios and Its Problems",id:"clickhouse-in-olap-scenarios-and-its-problems",level:2},{value:"How to Use ByConity ELT",id:"how-to-use-byconity-elt",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-byconity-elt"},"Introduction to ByConity ELT"),(0,a.kt)("h2",{id:"clickhouse-in-olap-scenarios-and-its-problems"},"ClickHouse in OLAP Scenarios and Its Problems"),(0,a.kt)("p",null,"ClickHouse was designed for OLAP (Online Analytical Processing) scenarios from the very beginning. Whether it is column storage, indexing, or execution vectorization optimization, they all effectively handle aggregation calculations on wide tables.\nFor complex queries, especially typical ETL tasks in data warehouses, ClickHouse is not good at them. Data processing operations with complex structures and long durations usually require a complex tuning process. Typical problems are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"High retry cost: For ETL jobs that run in minutes or even hours. If a failure occurs during the running process, ClickHouse can only perform query-level retries. Retrying from the beginning not only causes a lot of waste of resources but also poses a challenge to the SLA of processing tasks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Huge resource occupation: Due to the lack of iterative calculation and effective task splitting. In the case of large amounts of queried data and complex calculations, nodes usually require sufficient memory for processing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Concurrency control: When multiple queries run simultaneously, ClickHouse does not schedule according to the usage of resources. Mutual squeezing between tasks can lead to failures (usually Memory limit errors). The lack of a retry mechanism often causes an avalanche effect."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(9272).Z,width:"1474",height:"1034"})),(0,a.kt)("center",null,"Figure 1 ByConity = Data Warehouse + OLAP"))),(0,a.kt)("p",null,"To address the above problems, the ByConity team has added support for the bsp mode on the basis of the ClickHouse high-performance computing framework: it can perform task-level fault tolerance; finer-grained scheduling; and support resource-aware scheduling in the future. The benefits are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reduce retry cost: When an error is encountered during query execution, the current task can be automatically retried instead of retrying from the beginning. Greatly reduce the retry cost."),(0,a.kt)("li",{parentName:"ul"},"Improve scalability: When the memory required by a query is huge, even greater than the memory of a single machine. The memory occupation per unit time can be reduced by increasing the degree of parallelism. Just need to increase the parallelism parameter. In theory, it can be infinitely expanded."),(0,a.kt)("li",{parentName:"ul"},"Achieve orderly scheduling in the future: (In the future) Concurrent ETL tasks can be scheduled in an orderly manner according to the usage of cluster resources, thereby reducing resource contention and avoiding frequent failures.")),(0,a.kt)("h2",{id:"how-to-use-byconity-elt"},"How to Use ByConity ELT"),(0,a.kt)("p",null,"User can use parameters listed in query settings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"bsp_mode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bool"),(0,a.kt)("td",{parentName:"tr",align:"left"},"0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"With bsp mode enabled, query will be splitted to stages, linked by shuffle between them. Failed task will be retried.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"distributed_max_parallel_size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"UInt64"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of workers."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Increasing this value will decrease memory usage of single task, as the stage will be dispatched in smaller part. This is only applied with bsp mode enabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"bsp_max_retry_num"),(0,a.kt)("td",{parentName:"tr",align:"left"},"UInt64"),(0,a.kt)("td",{parentName:"tr",align:"left"},"3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Max number of task attemps before query failed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disk_shuffle_files_codec"),(0,a.kt)("td",{parentName:"tr",align:"left"},"LZ4/ZSTD/NONE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"LZ4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Codec used to write shuffle files, which can descrease the file size.")))))}p.isMDXComponent=!0},9272:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/why_elt_en-86532dd5da3286bf77da41a403686b20.jpg"}}]);