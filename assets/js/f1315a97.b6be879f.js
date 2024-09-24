"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3549],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(64778),o=(n(59496),n(49613));const a={title:"Complex Query Tuning",sidebar_position:3,tags:["Docs"]},r="Complex Query Tuning",l={unversionedId:"query-optimization/complex-query-optimization",id:"version-0.3.0/query-optimization/complex-query-optimization",title:"Complex Query Tuning",description:"Complex Query Execution Model",source:"@site/versioned_docs/version-0.3.0/query-optimization/complex-query-optimization.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/complex-query-optimization",permalink:"/docs/0.3.0/query-optimization/complex-query-optimization",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.3.0/query-optimization/complex-query-optimization.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:3,frontMatter:{title:"Complex Query Tuning",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Cache Preload",permalink:"/docs/0.3.0/query-optimization/query-optimization-with-cache-preload"},next:{title:"Query Optimization with Projection",permalink:"/docs/0.3.0/query-optimization/query-optimization-with-projection"}},s={},u=[{value:"Complex Query Execution Model",id:"complex-query-execution-model",level:2},{value:"How to Enable",id:"how-to-enable",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"complex-query-tuning"},"Complex Query Tuning"),(0,o.kt)("h2",{id:"complex-query-execution-model"},"Complex Query Execution Model"),(0,o.kt)("p",null,"Analytical queries can be divided into simple queries and complex queries. Simple queries typically involve single-table retrieval aggregation or joins between large and small tables, resulting in fast query responses. Complex queries, on the other hand, involve large tables, multiple table joins, and complex logical processing, often leading to slow query responses and high resource consumption. ByConity has optimized its design for complex queries."),(0,o.kt)("p",null,"Simple queries can adopt a two-stage execution model, with the partial stage executed on the compute nodes and the final stage executed on the service nodes. However, when it comes to executing complex queries involving multiple aggregations or joins, the flexibility of the two-stage execution model is significantly reduced, making query optimization challenging. To better support distributed queries and facilitate the execution plans generated by the optimizer, we have introduced a complex query execution model that supports multiple rounds of distributed execution."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(16051).Z,width:"1070",height:"462"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Diagram of Complex Query Execution Model")),(0,o.kt)("p",null,"The execution flow of complex queries is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Query SQL String is parsed into an AST (Abstract Syntax Tree) by the parser."),(0,o.kt)("li",{parentName:"ol"},"The AST undergoes rewriting and optimization to generate an execution plan."),(0,o.kt)("li",{parentName:"ol"},"When the optimizer is enabled, it generates the execution plan."),(0,o.kt)("li",{parentName:"ol"},"The execution plan is divided into multiple PlanSegments."),(0,o.kt)("li",{parentName:"ol"},"A PlanSegment represents an execution fragment in the distributed execution process, which includes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The required AST fragment or a logical execution plan fragment composed of PlanNodes."),(0,o.kt)("li",{parentName:"ul"},"Node information for PlanSegment execution."),(0,o.kt)("li",{parentName:"ul"},"Upstream and downstream information for the PlanSegment, including the input stream from upstream and the required input stream for downstream."))),(0,o.kt)("li",{parentName:"ol"},"The engine's scheduler constructs a DAG (Directed Acyclic Graph) from these PlanSegments and topologically sorts them before distributing them to all nodes in the cluster."),(0,o.kt)("li",{parentName:"ol"},"Each node receives its PlanSegment and begins executing it."),(0,o.kt)("li",{parentName:"ol"},"PlanSegments containing data sources start reading the data and distributing it to downstream nodes according to shuffle rules."),(0,o.kt)("li",{parentName:"ol"},"PlanSegments with exchange inputs wait for upstream data and continue shuffling the data to various nodes if necessary."),(0,o.kt)("li",{parentName:"ol"},"After multiple stages are completed, the results are returned to the server.")),(0,o.kt)("h2",{id:"how-to-enable"},"How to Enable"),(0,o.kt)("p",null,"Enabling the optimizer automatically triggers the complex query execution model. This can be done by configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_optimizer=1")," or setting ",(0,o.kt)("inlineCode",{parentName:"p"},"dialect_type='ANSI'"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensuring the Existence of Statistics")),(0,o.kt)("p",null,"Without statistics, the generated query plan may not be optimal. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"show stats [<db_name>.]<table_name>")," to check the statistics."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Analyzing the Execution Time of Each Step")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"explain analyze sql")," can display the execution time of each step."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tuning Exchange Parameters")),(0,o.kt)("p",null,"The Exchange operator is responsible for data transmission between PlanSegments."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_source_pipeline_threads")," affects the total number of threads for pipeline execution, especially for non-source pipelines (those that read data directly from storage). The default setting is the number of CPU cores. There is no ideal recommended value, but considering halving or doubling the value and observing the results can be helpful. If the query has a high memory footprint, reducing this value may be beneficial."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_timeout_ms")," is the Exchange timeout duration in milliseconds, with a default value of 100 seconds. If Exchange-related timeout errors occur, increasing this value may be appropriate."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_unordered_output_parallel_size")," affects the concurrent ability of Exchange to output data, with a default value of 8. Generally, there is no need to adjust this value. However, if ",(0,o.kt)("inlineCode",{parentName:"p"},"exchange_source_pipeline_threads")," is adjusted significantly, it may be beneficial to increase ",(0,o.kt)("inlineCode",{parentName:"p"},"exchange_unordered_output_parallel_size")," to enhance upstream output capability."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"exchange_enable_block_compress")," determines whether to enable Exchange compression, which is enabled by default. If the CPU bottleneck is more significant than the network bottleneck, disabling this option may be worth considering."))}m.isMDXComponent=!0},16051:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/complex-query-model-9adadd60bf95fe79b67512fe58018575.png"}}]);