"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3193],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,b=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(4778),a=(n(9496),n(9613));const o={title:"Bucket table best practice manual",tags:["Docs"]},i="Bucket table Description",l={unversionedId:"advanced-guide/bucket-table-best-practice",id:"version-0.2.0/advanced-guide/bucket-table-best-practice",title:"Bucket table best practice manual",description:"In ByConity, when using a Bucket table, the system organizes table data based on one or more columns and expressions specified by the user in the table creation statement. The data with the same value is clustered together and assigned to the same bucket number.",source:"@site/versioned_docs/version-0.2.0/advanced-guide/bucket-table-best-practice.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/bucket-table-best-practice",permalink:"/docs/0.2.0/advanced-guide/bucket-table-best-practice",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/bucket-table-best-practice.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Bucket table best practice manual",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Background Tasks Configuration",permalink:"/docs/0.2.0/advanced-guide/background-task-configuration"},next:{title:"Column Storage Design Principles",permalink:"/docs/0.2.0/advanced-guide/column-based-storage"}},s={},c=[],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bucket-table-description"},"Bucket table Description"),(0,a.kt)("p",null,"In ByConity, when using a Bucket table, the system organizes table data based on one or more columns and expressions specified by the user in the table creation statement. The data with the same value is clustered together and assigned to the same bucket number."),(0,a.kt)("h1",{id:"benefits-of-using-bucket-table"},"Benefits of using Bucket table"),(0,a.kt)("p",null,"The following benefits can be obtained on large tables by using cluster key to aggregate data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cluster key point checks can filter out most of the data, reducing the amount of IO needed to obtain shorter execution time and higher concurrent QPS."),(0,a.kt)("li",{parentName:"ol"},"For aggregation calculations of the cluster key, computing nodes can pre-calculate subsets of data to achieve smaller memory usage and shorter execution times."),(0,a.kt)("li",{parentName:"ol"},"Joining two or more tables for the cluster key can be optimized through co-located joins, which greatly reduce the amount of shuffle data and result in shorter execution times.")),(0,a.kt)("h1",{id:"when-to-consider-using-bucket-table"},"When to consider using Bucket table"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The table is sufficiently large, which means that the number of partitions under a partition needs to be significantly higher than the number of workers."),(0,a.kt)("li",{parentName:"ol"},"Query statements can take advantage of these benefits.")),(0,a.kt)("h1",{id:"how-to-choose-a-cluster-key"},"How to choose a cluster key"),(0,a.kt)("p",null,"The cluster key can consist of one or more columns and expressions. It is recommended to use up to 3 fields. Using more fields typically results in higher write costs and provides smaller benefits to query statements.The Cluster key can be one or more columns and expressions. It is recommended to use up to 3 fields. More fields usually introduce high write costs and the scope of benefit statements is smaller."),(0,a.kt)("p",null,"Choosing the correct cluster key is crucial for optimizing performance, so it should be selected carefully. Generally, the following principles can be followed:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Columns that are often used for equality and IN filtering"),(0,a.kt)("li",{parentName:"ol"},"Commonly used aggregation columns"),(0,a.kt)("li",{parentName:"ol"},"Multi-table join key")),(0,a.kt)("p",null,"If the above scenario is commonly used in combination of two columns, such as a = 1 and b = 2, then cluster key can get better results by selecting two columns."),(0,a.kt)("p",null,"Another dimension to consider is the number of distinct values for a column, given that"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The data of the same cluster key will belong to the same bucket number"),(0,a.kt)("li",{parentName:"ol"},"All parts under a bucket number will be sent to the same worker for calculation")),(0,a.kt)("p",null,"We can conclude that"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To utilize all worker nodes for computation, the number of distinct values needs to exceed the number of workers."),(0,a.kt)("li",{parentName:"ol"},"If the number of distinct values is small, it is preferable to select the largest distinct value, preferably a multiple of the number of workers, to achieve a more balanced data distribution during querying.")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the table test, the commonly used filter columns are c1, c2, c3, and the columns are independent of each other"),(0,a.kt)("li",{parentName:"ol"},"The number of workers is 30"),(0,a.kt)("li",{parentName:"ol"},"distinct c1 is 6"),(0,a.kt)("li",{parentName:"ol"},"distinct c2 is 8"),(0,a.kt)("li",{parentName:"ol"},"distinct c3 is 5")),(0,a.kt)("p",null,"It can be observed that the distinct values of each column are all smaller than the number of workers. The number of distinct values for c1 and c2 is 48, which is greater than the number of workers, but it is not a multiple of the number of workers, making it unsuitable for a cluster key. The number of distinct values for c1 and c3 is 30, which is exactly one times the number of workers; however, for a more balanced data distribution, it is better to choose a larger value of distinct c1, c2, and c3, such as 8 times the number of workers."),(0,a.kt)("h1",{id:"how-to-choose-bucket-number"},"How to choose bucket number"),(0,a.kt)("p",null,"Given that within a partition"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each row of data will be calculated according to the value of the cluster key by ",(0,a.kt)("inlineCode",{parentName:"li"},"% BUCKETS")," to get the corresponding bucket number"),(0,a.kt)("li",{parentName:"ol"},"Parts of the same bucket number will be sent to the same worker node for calculation during query")),(0,a.kt)("p",null,"Therefore, choosing an appropriate bucket number has a major impact on storage and query, and generally has the following principles:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure that the bucket number is a multiple of the number of workers to achieve balanced allocation during querying. It is generally recommended to set it to 1 or 2 times the number of workers (with room for expanding worker node redundancy) if there are enough worker nodes."),(0,a.kt)("li",{parentName:"ol"},"Ensure that there is enough data in a bucket number under a partition and avoid generating overly small parts. For a relatively small table, ensure that the size of a bucket number part in a partition exceeds 1GB. Do not set the bucket number too high, as a bucket number smaller than the number of workers may be generated.")),(0,a.kt)("h1",{id:"how-to-decide-whether-to-modify-the-cluster-by-definition"},"How to decide whether to modify the cluster by definition"),(0,a.kt)("p",null,"During operation, due to data changes, query mode changes, and changes in the number of worker nodes, users may want to reset the cluster key and bucket number."),(0,a.kt)("p",null,"Here you need to consider the cost of implementing the modification, and weigh whether you need to modify and when:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To modify the definition of cluster by, re-clustering on the existing data is required. It is necessary to assess the amount of existing data to estimate the execution time of the re-clustering process."),(0,a.kt)("li",{parentName:"ol"},"During the re-clustering period, querying existing data will revert to a normal table, and all the benefits of the bucket table will be temporarily lost."),(0,a.kt)("li",{parentName:"ol"},"Re-clustering will occupy the resources of the write worker. It is necessary to evaluate whether the current cnch cluster has an independent write worker, the current load, and the impact on existing tasks such as querying and merging.")),(0,a.kt)("p",null,"There are two cases of modifying the cluster by definition:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Modifying the cluster key:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At this point, the current data can no longer benefit from the bucket table, so the lost income during re-clustering need not be considered."),(0,a.kt)("li",{parentName:"ul"},"It is necessary to evaluate the impact of the re-clustering task on existing tasks to determine whether it can be executed.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Modifying the bucket number:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The current bucket table still provides benefits, so it is necessary to confirm with the business side the acceptable performance rollback time, assess whether it can be executed based on the re-clustering time, and determine the start execution time."),(0,a.kt)("li",{parentName:"ul"},"It is also necessary to evaluate the impact of the re-clustering task on existing tasks to determine whether it can be executed.")))}m.isMDXComponent=!0}}]);