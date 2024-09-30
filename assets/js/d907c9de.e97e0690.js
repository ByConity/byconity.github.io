"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1641],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(4778),n=(a(9496),a(9613));const i={title:"Background Tasks Configuration",tags:["Docs"]},o="Background Tasks Configuration",l={unversionedId:"advanced-guide/background-task-configuration",id:"version-0.2.0/advanced-guide/background-task-configuration",title:"Background Tasks Configuration",description:"Start/Stop Merge of tables",source:"@site/versioned_docs/version-0.2.0/advanced-guide/background-task-configuration.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/background-task-configuration",permalink:"/docs/0.2.0/advanced-guide/background-task-configuration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/background-task-configuration.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Background Tasks Configuration",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Byconity 0.2.0 s3 storage upgrade checklist",permalink:"/docs/0.2.0/advanced-guide/0.2.0_s3_upgrade_checklist"},next:{title:"Bucket table best practice manual",permalink:"/docs/0.2.0/advanced-guide/bucket-table-best-practice"}},s={},m=[{value:"Start/Stop Merge of tables",id:"startstop-merge-of-tables",level:3},{value:"Manually trigger merge",id:"manually-trigger-merge",level:3},{value:"Modify the merge parameters",id:"modify-the-merge-parameters",level:3},{value:"Observation",id:"observation",level:3}],c={toc:m},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"background-tasks-configuration"},"Background Tasks Configuration"),(0,n.kt)("h1",{id:"common-commands"},"Common commands"),(0,n.kt)("h3",{id:"startstop-merge-of-tables"},"Start/Stop Merge of tables"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- Start merge\nsystem start merges xxx.yyy;\n\n-- Stop merge\nsystem stop merges xxx.yyy;\n\n")),(0,n.kt)("h3",{id:"manually-trigger-merge"},"Manually trigger merge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- Trigger a merge schedule (same as the automatic process above)\noptimize table xxx.yyy;\n\n-- Trigger a merge schedule under the specified partition\noptimize table xxx.yyy partition 'zzz';\n\n")),(0,n.kt)("p",null,"In addition, there can also be a dry run mode, which is convenient for checking which parts can be selected in the next merge (or why the part cannot be selected)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- Open tracelog, when executing try optimize\n-- will print the relevant logs of the entire merge select process,\n-- For example, which partitions are selected, which parts, which worker the merge task is sent to, etc.\nset send_logs_level = 'trace';\n\ntry optimize table xxx.yyy;\ntry optimize table xxx.yyy partition 'zzz';\n\n")),(0,n.kt)("h3",{id:"modify-the-merge-parameters"},"Modify the merge parameters"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"alter table xxx.yyy modify setting cnch_merge_zzz = www;\n\n")),(0,n.kt)("h3",{id:"observation"},"Observation"),(0,n.kt)("p",null,"Note the host server of the selection table."),(0,n.kt)("p",null,"system.bg_threads can view the running status of the Merge/GC background thread of the table."),(0,n.kt)("p",null,"system.manipulations can view the currently running Merge tasks."),(0,n.kt)("p",null,"system.server_part_log can view the information of historical Merge tasks. (You can also see this table for the part of the new insert)."),(0,n.kt)("h1",{id:"settings"},"Settings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Configuration Items"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default Value, Meaning"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"////// Multiple partitions //////")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Only select one partition each time at the earliest, and the concurrency is not enough. Changing multiple partitions is expected to improve concurrency. "))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"enable_addition_bg_task"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false, allow more merge tasks to run at the same time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"used together with max_addition_bg_task_num.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_addition_bg_task_num"),(0,n.kt)("td",{parentName:"tr",align:"left"},"200, limit the maximum number of concurrent tasks"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_partition_for_multi_select"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3, how many partitions to select for merge"),(0,n.kt)("td",{parentName:"tr",align:"left"},"merge will select partitions first, and then select range from partitions. If there are multiple partition keys (such as appid, date), this value usually needs to be increased because there are many partitions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"////// Increase the speed of each range selection //////")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"}," When the amount of data is large, each selection is very time-consuming, and it is expected to be accelerated by ",(0,n.kt)("strong",{parentName:"em"},"batch"),". "))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_enable_batch_select"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false, whether to enable batch_select"),(0,n.kt)("td",{parentName:"tr",align:"left"},"batch_select will select a large number of ranges every round, and then submit these ranges directly in subsequent rounds, which can shorten the trigger cycle of merge, so that the total number of tasks can truly reach the upper limit of concurrency.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_max_total_rows_to_merge"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15000000, the maximum number of rows for a single merged part"),(0,n.kt)("td",{parentName:"tr",align:"left"},"It is more useful when the business is very clear about the number of level0 part rows and expects to control the overall number after merge (affecting query time).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"////// Real-time data optimization //////")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"Real-time scenario"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_only_realtime_partition"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false, whether to select only realtime partition"),(0,n.kt)("td",{parentName:"tr",align:"left"},"When selecting partitions for each round, N partitions with more than count and N realtime partitions will be selected. If this setting is enabled, partitions will only be selected according to the realtime level (min_block). A live table scenario would be useful.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_bytes_to_merge_at_max_space_in_pool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"150 ",(0,n.kt)("em",{parentName:"td"}," 1024 ")," 1024 ","*"," 1024, which is 150GB. The maximum bytes limit of a single merge task."),(0,n.kt)("td",{parentName:"tr",align:"left"},"The parameter name does not seem intuitive enough, the legacy code problem... This parameter in cnch is used to set the max size of the merge selector. The function is similar to cnch_merge_max_total_rows_to_merge, one limits the number of rows, and the other limits the number of bytes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_vw_write"),(0,n.kt)("td",{parentName:"tr",align:"left"},"vw_default, vw for executing merge"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consult sre to know which vw should be used as write vw for your business")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_pick_worker_algo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"'RM', the algorithm when selecting workers, pick from RM by default."),(0,n.kt)("td",{parentName:"tr",align:"left"},"In a high concurrency usage, it needs to be set to '",(0,n.kt)("strong",{parentName:"td"},"RoundRobin"),"'")))),(0,n.kt)("h1",{id:"instructions-for-use"},"Instructions for use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the size of the table is not large (on the order of millions), but there are many parts currently, and you want to speed up the merge frequency, usually enable_addition_bg_task = 1 max_partition_for_multi_select will have an effect. At this time, the corresponding max_addition_bg_task_num is the upper limit of merge concurrency."),(0,n.kt)("li",{parentName:"ul"},"If the table size is very large (tens of millions, hundreds of millions), (it will take a long time to get parts from the catalog each time), at this time you may not only need to enable_addition_bg_task, but also need to use cnch_merge_enable_batch_select = 1 to increase the number of each merge select result."),(0,n.kt)("li",{parentName:"ul"},"About cnch_merge_only_realtime_partition and max_partition_for_multi_select. Usually kafka real-time tables use cnch_merge_only_realtime_partition, which means that only the latest min_block is selected each time a partition is selected, and the number of partitions is controlled by max_partition_for_multi_select. Note: If it is an offline table and a large number of new partitions are generated every day, if cnch_merge_only_realtime_partition is turned on at this time and max_partition_for_multi_select is set very small, there will be a situation where some partitions cannot participate in the merge on the same day.")))}p.isMDXComponent=!0}}]);