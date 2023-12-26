"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3581],{9613:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var a=r(9496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),p=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(r),s=n,k=d["".concat(m,".").concat(s)]||d[s]||g[s]||i;return r?a.createElement(k,l(l({ref:e},c),{},{components:r})):a.createElement(k,l({ref:e},c))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[d]="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9098:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(4778),n=(r(9496),r(9613));const i={title:"\u914d\u7f6e\u540e\u53f0\u4efb\u52a1",tags:["Docs"]},l="\u914d\u7f6e\u540e\u53f0\u4efb\u52a1",o={unversionedId:"advanced-guide/background-task-configuration",id:"advanced-guide/background-task-configuration",title:"\u914d\u7f6e\u540e\u53f0\u4efb\u52a1",description:"\u542f\u52a8/\u505c\u6b62\u8868\u7684 Merge",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced-guide/background-task-configuration.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/background-task-configuration",permalink:"/zh-cn/docs/next/advanced-guide/background-task-configuration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced-guide/background-task-configuration.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/next/tags/docs"}],version:"current",frontMatter:{title:"\u914d\u7f6e\u540e\u53f0\u4efb\u52a1",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Byconity 0.2.0 s3 storage upgrade checklist",permalink:"/zh-cn/docs/next/advanced-guide/0.2.0_s3_upgrade_checklist"},next:{title:"Bucket table \u6700\u4f73\u5b9e\u8df5\u624b\u518c",permalink:"/zh-cn/docs/next/advanced-guide/bucket-table-best-practice"}},m={},p=[{value:"\u542f\u52a8/\u505c\u6b62\u8868\u7684 Merge",id:"\u542f\u52a8\u505c\u6b62\u8868\u7684-merge",level:3},{value:"\u624b\u52a8\u89e6\u53d1 merge",id:"\u624b\u52a8\u89e6\u53d1-merge",level:3},{value:"\u4fee\u6539 merge \u53c2\u6570",id:"\u4fee\u6539-merge-\u53c2\u6570",level:3},{value:"\u89c2\u6d4b",id:"\u89c2\u6d4b",level:3}],c={toc:p},d="wrapper";function g(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u914d\u7f6e\u540e\u53f0\u4efb\u52a1"},"\u914d\u7f6e\u540e\u53f0\u4efb\u52a1"),(0,n.kt)("h1",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,n.kt)("h3",{id:"\u542f\u52a8\u505c\u6b62\u8868\u7684-merge"},"\u542f\u52a8/\u505c\u6b62\u8868\u7684 Merge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- \u542f\u52a8 merge\nsystem start merges xxx.yyy;\n\n-- \u505c\u6b62 merge\nsystem stop merges xxx.yyy;\n\n")),(0,n.kt)("h3",{id:"\u624b\u52a8\u89e6\u53d1-merge"},"\u624b\u52a8\u89e6\u53d1 merge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- \u89e6\u53d1\u4e00\u6b21merge \u8c03\u5ea6\uff08\u548c\u4e0a\u9762\u81ea\u52a8\u6d41\u7a0b\u76f8\u540c\uff09\noptimize table xxx.yyy;\n\n-- \u89e6\u53d1\u4e00\u6b21\u6307\u5b9apartition\u4e0b\u7684merge\u8c03\u5ea6\noptimize table xxx.yyy partition 'zzz';\n\n")),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u6709 dry run \u6a21\u5f0f\uff0c\u65b9\u4fbf\u67e5\u770b\u63a5\u4e0b\u6765 merge \u80fd\u9009\u51fa\u54ea\u4e9b part\uff08\u6216\u8005\u6392\u67e5\u4e3a\u4ec0\u4e48\u9009\u4e0d\u51fa part\uff09"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- \u6253\u5f00tracelog\uff0c\u6267\u884ctry optimize\u7684\u65f6\u5019\n-- \u4f1a\u6253\u5370\u6574\u4e2amerge select\u8fc7\u7a0b\u7684\u76f8\u5173\u65e5\u5fd7\uff0c\n-- \u6bd4\u5982\u9009\u4e86\u54ea\u4e9bpartition\uff0c\u54ea\u4e9bpart\uff0cmerge\u4efb\u52a1\u53d1\u7ed9\u4e86\u54ea\u4e2aworker\u7b49\u3002\nset send_logs_level = 'trace';\n\ntry optimize table xxx.yyy;\ntry optimize table xxx.yyy partition 'zzz';\n\n")),(0,n.kt)("h3",{id:"\u4fee\u6539-merge-\u53c2\u6570"},"\u4fee\u6539 merge \u53c2\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"alter table xxx.yyy modify setting cnch_merge_zzz = www;\n\n")),(0,n.kt)("h3",{id:"\u89c2\u6d4b"},"\u89c2\u6d4b"),(0,n.kt)("p",null,"\u6ce8\u610f\u9009\u62e9\u8868\u7684 host server\u3002"),(0,n.kt)("p",null,"system.bg_threads \u53ef\u4ee5\u67e5\u770b\u8868\u7684 Merge/GC \u540e\u53f0\u7ebf\u7a0b\u8fd0\u884c\u72b6\u6001\u3002"),(0,n.kt)("p",null,"system.manipulations \u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684 Merge \u4efb\u52a1\u3002"),(0,n.kt)("p",null,"system.server_part_log \u53ef\u4ee5\u67e5\u770b\u5386\u53f2 Merge \u4efb\u52a1\u7684\u4fe1\u606f\u3002\uff08\u65b0 insert \u7684 part \u4e5f\u53ef\u4ee5\u770b\u8fd9\u4e2a\u8868\uff09\u3002"),(0,n.kt)("h1",{id:"settings"},"Settings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c, \u542b\u4e49"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"////// \u591a partition //////")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"\u6700\u65e9\u6bcf\u6b21\u53ea\u9009\u4e00\u4e2a partition\uff0c\u5e76\u53d1\u4e0d\u591f\u3002\u6539\u591a partition \u671f\u671b\u63d0\u9ad8\u5e76\u53d1\u3002"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"enable_addition_bg_task"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false, \u5141\u8bb8\u66f4\u591a\u7684 merge \u4efb\u52a1\u540c\u65f6\u8fd0\u884c"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u914d\u5408 max_addition_bg_task_num \u4e00\u8d77\u4f7f\u7528\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_addition_bg_task_num"),(0,n.kt)("td",{parentName:"tr",align:"left"},"200, \u9650\u5236\u6700\u5927\u7684\u5e76\u53d1\u4efb\u52a1\u6570\u91cf"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_partition_for_multi_select"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3, \u9009\u591a\u5c11\u4e2a partitions \u6765 merge"),(0,n.kt)("td",{parentName:"tr",align:"left"},"merge \u4f1a\u5148\u9009 partitions\uff0c\u518d\u4ece partitions \u4e2d\u9009 range\u3002\u5982\u679c\u662f\u591a partition key\uff08\u6bd4\u5982 appid, date\uff09\u901a\u5e38\u9700\u8981\u5c06\u8fd9\u4e2a\u503c\u8c03\u5927\uff0c\u56e0\u4e3a partition \u5f88\u591a\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"////// \u63d0\u9ad8\u6bcf\u6b21\u9009 range \u7684\u901f\u5ea6 //////")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6bcf\u6b21 select \u90fd\u975e\u5e38\u8017\u65f6\uff0c\u671f\u671b\u901a\u8fc7",(0,n.kt)("strong",{parentName:"em"},"batch"),"\u52a0\u901f\u3002"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_enable_batch_select"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false, \u662f\u5426\u5f00\u542f batch_select"),(0,n.kt)("td",{parentName:"tr",align:"left"},"batch_select \u4f1a\u6bcf round \u9009\u4e00\u5927\u6279 ranges\uff0c\u4e4b\u540e\u7684 round \u4f1a\u76f4\u63a5 submit \u8fd9\u4e9b range\uff0c\u80fd\u8ba9 merge \u7684\u89e6\u53d1\u5468\u671f\u7f29\u77ed\uff0c\u4ece\u800c\u8ba9\u603b\u4efb\u52a1\u91cf\u771f\u6b63\u8fbe\u5230\u5e76\u53d1\u4e0a\u9650\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_max_total_rows_to_merge"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15000000, \u5355\u4e2a merged part \u7684\u6700\u5927\u884c\u6570"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u4e1a\u52a1\u5f88\u6e05\u695a level0 part \u884c\u6570\u4ee5\u53ca\u671f\u671b\u63a7\u5236 merge \u540e\u7684\u6574\u4f53\u6570\u91cf\uff08\u5f71\u54cd\u67e5\u8be2\u65f6\u95f4\uff09\u65f6\uff0c\u6bd4\u8f83\u7ba1\u7528\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"////// \u5b9e\u65f6\u6570\u636e\u4f18\u5316 //////")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"\u5b9e\u65f6\u573a\u666f"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_only_realtime_partition"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false, \u662f\u5426\u53ea\u9009 realtime partition"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6bcf round \u9009 partitions \u65f6\uff0c\u4f1a\u9009 N \u4e2a count \u591a\u7684 partition\uff0cN \u4e2a realtime partition\u3002\u5982\u679c enable \u8fd9\u4e2a setting\uff0c\u5219\u53ea\u4f1a\u6309 realtime \u7a0b\u5ea6\uff08min_block\uff09\u9009 partition\u3002 \u5b9e\u65f6\u8868\u573a\u666f\u4f1a\u5f88\u6709\u7528\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_bytes_to_merge_at_max_space_in_pool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"150 ",(0,n.kt)("em",{parentName:"td"}," 1024 ")," 1024 ","*"," 1024\uff0c \u5373 150GB\u3002\u5355 merge \u4efb\u52a1\u6700\u5927 bytes \u9650\u5236\u3002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d\u770b\u8d77\u6765\u4e0d\u591f\u76f4\u89c2\uff0c\u9057\u7559\u4ee3\u7801\u95ee\u9898... cnch \u91cc\u9762\u8fd9\u4e2a\u53c2\u6570\u88ab\u7528\u5728\u4e86\u8bbe\u7f6e merge selector \u7684 max size \u4e0a\u3002\u529f\u80fd\u7c7b\u4f3c cnch_merge_max_total_rows_to_merge\uff0c\u4e00\u4e2a\u9650\u5236\u884c\u6570\uff0c\u4e00\u4e2a\u9650\u5236 bytes \u6570\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_vw_write"),(0,n.kt)("td",{parentName:"tr",align:"left"},"vw_default, \u6267\u884c merge \u7528\u7684 vw"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u54a8\u8be2 sre \u53ef\u4ee5\u77e5\u9053\u81ea\u5df1\u4e1a\u52a1\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a vw \u4f5c\u4e3a write vw")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cnch_merge_pick_worker_algo"),(0,n.kt)("td",{parentName:"tr",align:"left"},"'RM', \u9009 worker \u65f6\u7684\u7b97\u6cd5\uff0c\u9ed8\u8ba4\u4ece RM \u6311\u9009\u3002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5e76\u53d1\u91cf\u5927\u65f6\u9700\u8981\u8bbe\u7f6e\u4e3a'",(0,n.kt)("strong",{parentName:"td"},"RoundRobin"),"'")))),(0,n.kt)("h1",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u8868\u89c4\u6a21\u4e0d\u5927\uff08\u767e\u4e07\u91cf\u7ea7\uff09\uff0c\u4f46\u662f\u5f53\u524d parts \u6bd4\u8f83\u591a\uff0c\u60f3\u52a0\u5feb merge \u9891\u7387\uff0c\u901a\u5e38 enable_addition_bg_task = 1 max_partition_for_multi_select \u4f1a\u6709\u6548\u679c\u3002\u8fd9\u65f6\u5019\u5bf9\u5e94\u7684 max_addition_bg_task_num \u662f merge \u5e76\u53d1\u91cf\u7684\u4e0a\u9650\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u8868\u89c4\u6a21\u5f88\u5927\u4e86\uff08\u5343\u4e07, \u4e0a\u4ebf\uff09\uff0c\uff08\u6bcf\u6b21\u4ece catalog \u83b7\u53d6 parts \u8017\u65f6\u5c31\u4f1a\u5f88\u957f\uff09\uff0c\u8fd9\u65f6\u5019\u53ef\u80fd\u4e0d\u4ec5\u8981 enable_addition_bg_task\uff0c \u8fd8\u9700\u8981\u4f7f\u7528 cnch_merge_enable_batch_select = 1 \u6765\u589e\u52a0\u6bcf\u6b21 merge select \u7684\u7ed3\u679c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5173\u4e8e cnch_merge_only_realtime_partition \u548c max_partition_for_multi_select\u3002 \u901a\u5e38 kafka \u5b9e\u65f6\u8868\u4f1a\u4f7f\u7528 cnch_merge_only_realtime_partition\uff0c\u5b83\u8868\u793a\u6bcf\u6b21\u9009 partition \u7684\u65f6\u5019\u53ea\u9009 min_block \u6700\u65b0\u7684\uff0cpartition \u6570\u91cf\u7531 max_partition_for_multi_select \u63a7\u5236\u3002\u6ce8\u610f\uff1a\u5982\u679c\u662f\u4e00\u4e2a\u79bb\u7ebf\u8868\u4e14\u6bcf\u5929\u4ea7\u751f\u5927\u91cf\u7684\u65b0 partition\uff0c\u6b64\u65f6\u6253\u5f00 cnch_merge_only_realtime_partition \u5e76\u4e14 max_partition_for_multi_select \u8bbe\u7f6e\u5f97\u5f88\u5c0f\u7684\u8bdd\uff0c\u90a3\u4f1a\u51fa\u73b0\u5f53\u5929\u6709 partition \u65e0\u6cd5\u53c2\u4e0e merge \u7684\u60c5\u51b5\u3002")))}g.isMDXComponent=!0}}]);