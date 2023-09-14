"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7952],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(4778),o=(r(9496),r(9613));const a={title:"Export Data",tags:["Docs"]},l="Export Data",i={unversionedId:"basic-guide/data-export",id:"basic-guide/data-export",title:"Export Data",description:"Document Type: Tutorial",source:"@site/docs/basic-guide/data-export.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/data-export",permalink:"/docs/basic-guide/data-export",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/basic-guide/data-export.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Export Data",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Configuration",permalink:"/docs/basic-guide/cluster-configuration"},next:{title:"Import Data",permalink:"/docs/basic-guide/data-import"}},p={},s=[{value:"Export to local",id:"export-to-local",level:2},{value:"export to HDFS",id:"export-to-hdfs",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"export-data"},"Export Data"),(0,o.kt)("p",null,"Document Type: Tutorial"),(0,o.kt)("p",null,"Document format: tutorial purpose, pre-preparation, step-by-step explanation of principles & examples, and related document recommendations;"),(0,o.kt)("p",null,"Summary:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Which file systems or databases are supported to export the data of the table, and how to export"),(0,o.kt)("li",{parentName:"ol"},"Whether to support the export of query results, how to export")),(0,o.kt)("p",null,"ByConity supports redirecting query results to files on the client's SELECT side, where files can be local files or files on HDFS. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT <expr_list> INTO OUTFILE file_name FORMAT format_name\n\n")),(0,o.kt)("p",null,"Among them, file_name and format_name are both string types."),(0,o.kt)("h2",{id:"export-to-local"},"Export to local"),(0,o.kt)("p",null,"For example, consider this table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE TABLE test.select_outfile_testtable\n(\n    `a` Int8,\n    `b` String,\n    `c` Int8,\n    `date` Date\n)\nENGINE = CnchMergeTree()\nPARTITION by toYYYYMM(date)\nORDER BY tuple()\n\n")),(0,o.kt)("p",null,"insert some data\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," INSERT INTO test.select_outfile_testtable VALUES (1, 'a', 1,'2022-11-10'), (2, 'b', 2,'2022-11-11'), (3, 'c', 3,'2022-11-12'), (4, 'd', 4,'2022-11-13');\n\n")),(0,o.kt)("p",null,"Export the SELECT result to a local file (take CSV as an example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT * FROM test.select_outfile_testtable INTO OUTFILE 'select.csv' FORMAT CSV\n\n")),(0,o.kt)("p",null,"result\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u279c  ~ cat select.csv\n1,"a",1,"2022-11-10"\n2,"b",2,"2022-11-11"\n3,"c",3,"2022-11-12"\n4,"d",4,"2022-11-13"\n\n')),(0,o.kt)("h2",{id:"export-to-hdfs"},"export to HDFS"),(0,o.kt)("p",null,"use INTO OUTFILE clause, example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT <expr_list> INTO OUTFILE 'hdfs://ip:port/user/tiger/test/test.gz ' FORMAT format_name\n\n")),(0,o.kt)("p",null,"Where hdfs://ip:port/user/tiger/test/test.gz is the uploaded HDFS address, the format is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"hdfs:// is a fixed prefix, indicating that it is uploaded to HDFS; ip is the hdfs namenode service address."),(0,o.kt)("li",{parentName:"ol"},"/user/tiger/test/test.gz is the path of the output file. It should be noted that the hdfs directory path must be available.")),(0,o.kt)("p",null,"At the same time, it supports exporting to HDFS in common formats, such as CSV, Parquet, JSON, etc. In order to reduce the amount of network transmission, gzip compression is enabled by default."))}d.isMDXComponent=!0}}]);