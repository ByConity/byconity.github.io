"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[192],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,y=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(4778),a=(n(9496),n(9613));const o={slug:"byconity-an-opensource-cloudnative-data-warehouse-post",title:"ByConity -- An Open source Cloud-native Data Warehouse",authors:["hustnn","tigerwangyb"],tags:["video introduction","docusaurus"]},r="ByConity: An Open source Cloud-native Data Warehouse",s={permalink:"/blog/byconity-an-opensource-cloudnative-data-warehouse-post",editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/blog/2023-04-10-byconity-an-opensource-cloudnative-data-warehouse-post/index.md",source:"@site/blog/2023-04-10-byconity-an-opensource-cloudnative-data-warehouse-post/index.md",title:"ByConity -- An Open source Cloud-native Data Warehouse",description:"Introduction to ByConity",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"video introduction",permalink:"/blog/tags/video-introduction"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:9.78,hasTruncateMarker:!1,authors:[{name:"Zhaojie Niu",title:"ByConity maintainer",url:"https://github.com/hustnn",imageURL:"https://github.com/hustnn.png",key:"hustnn"},{name:"Yunbo Wang",title:"ByConity maintainer",url:"https://github.com/tigerwangyb",imageURL:"https://github.com/tigerwangyb.png",key:"tigerwangyb"}],frontMatter:{slug:"byconity-an-opensource-cloudnative-data-warehouse-post",title:"ByConity -- An Open source Cloud-native Data Warehouse",authors:["hustnn","tigerwangyb"],tags:["video introduction","docusaurus"]}},c={authorsImageUrls:[void 0,void 0]},l=[{value:"Introduction to ByConity",id:"introduction-to-byconity",level:2},{value:"ByConity&#39;s History",id:"byconitys-history",level:2},{value:"Storage-Computing Separation",id:"storage-computing-separation",level:2},{value:"Elastic Scaling",id:"elastic-scaling",level:2},{value:"Resource Isolation",id:"resource-isolation",level:2},{value:"Strong Data Consistency",id:"strong-data-consistency",level:2},{value:"High Performance",id:"high-performance",level:2},{value:"Stage 1: Query Request",id:"stage-1-query-request",level:2},{value:"Stage 2: Plan Scheduling",id:"stage-2-plan-scheduling",level:2},{value:"Stage 3: Query Execution",id:"stage-3-query-execution",level:2},{value:"Metadata Management",id:"metadata-management",level:2},{value:"Query Optimizer",id:"query-optimizer",level:2},{value:"Query Scheduling",id:"query-scheduling",level:2},{value:"Computing Group",id:"computing-group",level:2},{value:"Virtual File System",id:"virtual-file-system",level:2},{value:"Cache Acceleration",id:"cache-acceleration",level:2},{value:"How to Obtain and Deploy",id:"how-to-obtain-and-deploy",level:2},{value:"ByConity&#39;s Future Open-Source Plan",id:"byconitys-future-open-source-plan",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-to-byconity"},"Introduction to ByConity"),(0,a.kt)("p",null,"ByConity is an open-source cloud-native data warehouse that adopts a storage-computing separation architecture. It supports several key features, including separation of storage and computing, elastic expansion and contraction, isolation of tenant resources, and strong consistency of data read and write. By utilizing mainstream OLAP engine optimizations, such as column storage, vectorized execution, MPP execution, query optimization, etc., ByConity can provide excellent read and write performance."),(0,a.kt)("h2",{id:"byconitys-history"},"ByConity's History"),(0,a.kt)("p",null,"The background of ByConity can be traced back to 2018 when ByteDance began to use ClickHouse internally. Due to the development of business, the scale of data has become larger and larger to serve a large number of users. However, because ClickHouse is a Shared-Nothing architecture, each node is independent and does not share storage resources, so computing resources and storage resources are tightly coupled. This leads to a higher cost of expansion and contraction, and involves data migration, which prevents real-time and on-demand expansion and contraction, resulting in a waste of resources. Furthermore, the tightly coupled architecture of ClickHouse will cause multi-tenants to interact with each other in the shared cluster. In addition, because reading and writing are completed on one node, reading and writing are affected. Finally, ClickHouse does not support performance in complex queries such as multi-table join. Based on these pain points, the ByConity project was launched in January 2020."),(0,a.kt)("p",null,"The ByConity team hopes to give the project back to the community and improve it through the power of open source. In January 2023, ByConity was officially open-sourced, and the beta version was released."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 1 ByteDance ClickHouse usage",src:n(4808).Z,width:"1652",height:"896"})),(0,a.kt)("p",null,"Figure 1: ByteDance ClickHouse Usage"),(0,a.kt)("h1",{id:"features-of-byconity"},"Features of ByConity"),(0,a.kt)("p",null,"ByConity has several key features that make it a powerful open-source cloud-native data warehouse."),(0,a.kt)("h2",{id:"storage-computing-separation"},"Storage-Computing Separation"),(0,a.kt)("p",null,"One of the critical advantages of ByConity is its storage-computing separation architecture, which enables read-write separation and elastic scaling. This architecture ensures that read and write operations do not affect each other, and computing resources and storage resources can be independently expanded and contracted on demand, ensuring efficient resource utilization. ByConity also supports multi-tenant resource isolation, making it suitable for multi-tenant environments."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 2: ByConity storage-computing separation to achieve multi-tenant isolation",src:n(2208).Z,width:"1203",height:"561"}),"\nFigure 2: ByConity storage-computing separation to achieve multi-tenant isolation"),(0,a.kt)("h2",{id:"elastic-scaling"},"Elastic Scaling"),(0,a.kt)("p",null,"ByConity supports flexible expansion and contraction, enabling real-time and on-demand expansion and contraction of computing resources, ensuring efficient use of resources."),(0,a.kt)("h2",{id:"resource-isolation"},"Resource Isolation"),(0,a.kt)("p",null,"ByConity isolates the resources of different tenants, ensuring that tenants are not affected by each other."),(0,a.kt)("h2",{id:"strong-data-consistency"},"Strong Data Consistency"),(0,a.kt)("p",null,"ByConity ensures strong consistency of data read and write, ensuring that data is always up to date with no inconsistencies between reads and writes."),(0,a.kt)("h2",{id:"high-performance"},"High Performance"),(0,a.kt)("p",null,"ByConity adopts mainstream OLAP engine optimizations, such as column storage, vectorized execution, MPP execution, query optimization, etc., ensuring excellent read and write performance."),(0,a.kt)("h1",{id:"byconitys-technical-architecture"},"ByConity's Technical Architecture"),(0,a.kt)("p",null,"ByConity's architecture is divided into three layers:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Service access layer: Responsible for client data and service access, i.e., ByConity Server"),(0,a.kt)("li",{parentName:"ol"},"Computing group: ByConity's computing resource layer, where each Virtual Warehouse is a computing group"),(0,a.kt)("li",{parentName:"ol"},"Data storage: Distributed file system, such as HDFS, S3, etc.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 3: ByConity&#39;s architecture",src:n(7311).Z,width:"1483",height:"809"}),"\nFigure 3: ByConity's architecture"),(0,a.kt)("h1",{id:"working-principle-of-byconity"},"Working Principle of ByConity"),(0,a.kt)("p",null,"ByConity is a powerful open-source cloud-native data warehouse that adopts a storage-computing separation architecture. In this section, we will examine the working principle of ByConity and the interaction process of each component of ByConity through the complete life cycle of a SQL."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 4: ByConity internal component interaction diagram",src:n(1838).Z,width:"1280",height:"1210"}),"\nFigure 4: ByConity internal component interaction diagram"),(0,a.kt)("p",null,"Figure 4 above is the interaction diagram of ByConity components. The dotted line in the figure indicates the inflow of a SQL, the two-way arrow in the solid line indicates the interaction within the component, and the one-way arrow indicates the data processing and output to the client."),(0,a.kt)("p",null,"ByConity's working principle can be divided into three stages:"),(0,a.kt)("h2",{id:"stage-1-query-request"},"Stage 1: Query Request"),(0,a.kt)("p",null,"The client submits a query request to the server, and the server first performs parsing, then analyzes and optimizes through analyzer and optimizer to generate a more efficient executable plan. Here, metadata MetaData is read, which is stored in a distributed KV. ByConity uses FoundationDB and reads the metadata through the Catalog."),(0,a.kt)("h2",{id:"stage-2-plan-scheduling"},"Stage 2: Plan Scheduling"),(0,a.kt)("p",null,"ByConity submits the executable plan generated by the analysis and optimizer to the scheduler (Plan Scheduler). The scheduler obtains idle computing resources by accessing the resource manager and decides which nodes to schedule query tasks for execution."),(0,a.kt)("h2",{id:"stage-3-query-execution"},"Stage 3: Query Execution"),(0,a.kt)("p",null,"Query requests are finally executed on ByConity's Worker, and the Worker will read data from the lowest-level Cloud storage and perform calculations by establishing a pipeline. Finally, the calculation results of multiple workers are aggregated by the server and returned to the client."),(0,a.kt)("p",null,"In addition to the above components, ByConity also has two main components, Time-stamp Oracle and Deamon Manager. The former ByConity supports transaction processing, and the latter manages and schedules some subsequent tasks."),(0,a.kt)("h1",{id:"main-component-library"},"Main Component Library"),(0,a.kt)("p",null,"To better understand the working principle of ByConity, let's take a look at the main components of ByConity:"),(0,a.kt)("h2",{id:"metadata-management"},"Metadata Management"),(0,a.kt)("p",null,"ByConity provides a highly available and high-performance metadata read and write service - Catalog Server. And ByConity supports complete transaction semantics (ACID). At the same time, we have made a better abstraction of the Catalog Server, making the back-end storage system pluggable. Currently, we support Apple's open-source FoundationDB, which can be expanded to support more back-end storage systems later."),(0,a.kt)("h2",{id:"query-optimizer"},"Query Optimizer"),(0,a.kt)("p",null,"The query optimizer is one of the cores of the database system. A good optimizer can greatly improve query performance. ByConity's self-developed optimizer improves optimization capabilities based on two directions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RBO: Rule-Based Optimization capability. Support: column pruning, partition pruning, expression simplification, subquery disassociation, predicate pushdown, redundant operator elimination, outer-JOIN to INNER-JOIN, operator pushdown storage, distributed operator splitting, etc."),(0,a.kt)("li",{parentName:"ul"},"CBO: Cost-Based Optimization capability. Support: Join Reorder, Outer-Join Reorder, Join/Agg Reorder, CTE, Materialized View, Dynamic Filter Push-Down, Magic Set, and other cost-based optimization capabilities. And integrate Property Enforcement for distributed planning.")),(0,a.kt)("h2",{id:"query-scheduling"},"Query Scheduling"),(0,a.kt)("p",null,"ByConity currently supports two query scheduling strategies: Cache-aware scheduling and Resource-aware scheduling."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The cache-aware scheduling policy is aimed at scenarios where storage and computing are separated, aiming to maximize the use of the cache and avoid cold reads. The cache-aware scheduling strategy will try to schedule tasks to nodes with corresponding data caches, so that calculations can hit the cache and improve read and write performance."),(0,a.kt)("li",{parentName:"ul"},"Resource-aware scheduling perceives the resource usage of different nodes in the computing group in the entire cluster and performs targeted scheduling to maximize resource utilization. At the same time, it also performs flow control to ensure reasonable use of resources and avoid negative effects caused by overload, such as system downtime.")),(0,a.kt)("h2",{id:"computing-group"},"Computing Group"),(0,a.kt)("p",null,"ByConity supports different tenants to use different computing resources. Under ByConity's new architecture, it is easy to implement features such as multi-tenant isolation and read-write separation. Different tenants can use different computing groups to achieve multi-tenant isolation and support read-write separation. Due to the convenient expansion and contraction, the computing group can be dynamically expanded and contracted on demand to ensure efficient resource utilization. When resource utilization is not high, resource sharing can be carried out, and computing groups can be seconded to other tenants to maximize resource utilization and reduce costs."),(0,a.kt)("h2",{id:"virtual-file-system"},"Virtual File System"),(0,a.kt)("p",null,'The virtual file system module is used as the middle layer of data reading and writing. ByConity has made a better package, exposing storage as a service to other modules to realize "storage as a service". The virtual file system provides a unified file system abstraction, shields different back-end implementations, facilitates expansion, and supports multiple storage systems, such as HDFS or object storage.'),(0,a.kt)("h2",{id:"cache-acceleration"},"Cache Acceleration"),(0,a.kt)("p",null,"ByConity performs query acceleration through caching. Under the architecture of separating storage and computing, ByConity performs cache acceleration in both metadata and data dimensions. In the metadata dimension, by caching in the memory of ByConity's Server side, table, and partition are used as granularity. In the data dimension, ByConity's Worker side, that is, the computing group, is used for caching, and the cache on the Worker side is hierarchical. At the same time, memory and disk are used, and the mark set is used as the cache granularity, thereby effectively improving the query speed."),(0,a.kt)("h2",{id:"how-to-obtain-and-deploy"},"How to Obtain and Deploy"),(0,a.kt)("p",null,"ByConity currently supports four acquisition and deployment modes. Community developers are welcome to use them and submit issues to us:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stand-alone version",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use docker compose to pull up Reference: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/byconity-docker"},"https://github.com/ByConity/byconity-docker")))),(0,a.kt)("li",{parentName:"ul"},"K8s cluster version mode",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use K8s deployment reference: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/byconity-deploy"},"https://github.com/ByConity/byconity-deploy")))),(0,a.kt)("li",{parentName:"ul"},"Physical machine deployment mode",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Deploy on a physical machine using the package manager: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/ByConity/tree/master/packages"},"https://github.com/ByConity/ByConity/tree/master/packages")))),(0,a.kt)("li",{parentName:"ul"},"Source code compilation method",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Reference: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ByConity/ByConity#build-byconity"},"https://github.com/ByConity/ByConity#build-byconity"))))),(0,a.kt)("h2",{id:"byconitys-future-open-source-plan"},"ByConity's Future Open-Source Plan"),(0,a.kt)("p",null,"ByConity includes several key milestones in its open-source community roadmap through 2023. These milestones are designed to enhance ByConity's functionality, performance, and ease of use. Among them, the development of new storage engines, support for more data types, and integration with other data management tools are some important areas of focus. We have listed the following directions, and we have created an issue on Github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/issues/26"},"https://github.com/ByConity/ByConity/issues/26"),", inviting community partners to join us to discuss co-construction:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In terms of performance improvement: ByConity hopes to continue to improve performance, and here are three technical directions. One is to use indexes for acceleration, which includes four aspects:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Optimize the existing skip index;"),(0,a.kt)("li",{parentName:"ul"},"Explore the implementation of new index research, such as zorder-index and inverted index;"),(0,a.kt)("li",{parentName:"ul"},"ByConity builds and accelerates Hive table indexes"),(0,a.kt)("li",{parentName:"ul"},"Index recommendation and conversion, lowering the threshold for users to use\nThe second is the continuous optimization of the query optimizer; the third is that ByConity's cache mechanism is local, and each computing group can only access its own cache. In the future, it is hoped to implement a distributed cache mechanism to further improve the cache hit rate."))),(0,a.kt)("li",{parentName:"ul"},"Stability improvement: There are two aspects here. One is to support resource isolation in more dimensions. Currently, it only supports resource isolation in the computing group dimension. In the next step, resource isolation will also be supported on the server side, providing better end-to-end Guaranteed multi-tenancy capability. The second direction is to enrich metrics and improve observability and problem diagnosis capabilities."),(0,a.kt)("li",{parentName:"ul"},"Enterprise-level feature enhancements: We hope to achieve more detailed permission control, including column-level permission control. The other is to improve the functions related to data security, such as data backup and recovery and data end-to-end encryption. Finally, we continue to explore the deep compression of data to save storage costs."),(0,a.kt)("li",{parentName:"ul"},"Ecological compatibility improvement: This direction is the most important point. ByConity plans to support more types of storage backends, such as AWS's S3, Volcano Engine's object storage, etc. In terms of improving ecological compatibility, it includes integration with some drivers and some open source software. At the same time, we also hope to support federated queries of data lakes, such as Hudi, Iceberg, etc.")),(0,a.kt)("p",null,"In short, ByConity is an open source cloud-native data warehouse that provides read-write separation, elastic expansion and contraction, tenant resource isolation, and strong consistency of data read and write. Its storage-computing separation architecture, combined with mainstream OLAP engine optimization, ensures excellent read and write performance. As ByConity continues to develop and improve, it is expected to become an important tool for cloud-native data warehouses in the future."),(0,a.kt)("p",null,"We have a video that introduces ByConity in detail, including a demo of ByConity. If you need more information, you can check the following link: ",(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV15k4y1b7pw/?spm_id_from=333.999.0.0&vd_source=71f3be2102fec1a0171b49a530cefad0"},"https://www.bilibili.com/video/BV15k4y1b7pw/?spm_id_from=333.999.0.0&vd_source=71f3be2102fec1a0171b49a530cefad0")),(0,a.kt)("p",null,"Scan the QR code to reply ","[name + QR code]"," Join the ByConity communication group to get more project dynamics and activity information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ByConity Community QR Code",src:n(9341).Z,width:"621",height:"627"}),"\nByConity Community QR Code"))}p.isMDXComponent=!0},4808:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f1-byte-clickhouse-usage-cefbe6a269f39c214219df180aef1560.png"},2208:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f2-storage-computing-separation-51a4fd7a3073479cf431a48278204cd5.png"},7311:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f3-three-layer-architecture-403f695f8cd48cb936283a4c7b86553d.png"},1838:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f4-internal-component-interaction-301b3d1e7d179142c3b1ce535f1ce105.png"},9341:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/f5-byconity-community-qrcode-b75b8db64319bf889444dc7b4fd21124.png"}}]);