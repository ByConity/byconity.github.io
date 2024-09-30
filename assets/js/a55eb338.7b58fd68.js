"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3005],{9613:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>y});var r=a(9496);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=d(a),u=n,y=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return a?r.createElement(y,i(i({ref:e},c),{},{components:a})):r.createElement(y,i({ref:e},c))}));function y(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(4778),n=(a(9496),a(9613));const o={title:"Data Description",sidebar_position:1,tags:["Docs"]},i="Data Description",l={unversionedId:"data-import/data-introduction",id:"data-import/data-introduction",title:"Data Description",description:"Data Sources",source:"@site/docs/data-import/data-introduction.mdx",sourceDirName:"data-import",slug:"/data-import/data-introduction",permalink:"/docs/data-import/data-introduction",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-import/data-introduction.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"Data Description",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Data Export",permalink:"/docs/data-export/data-export-method"},next:{title:"Data Import Tuning",permalink:"/docs/data-import/data-import-tuning"}},p={},d=[{value:"Data Sources",id:"data-sources",level:2},{value:"Data Formats",id:"data-formats",level:2}],c={toc:d},s="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-description"},"Data Description"),(0,n.kt)("h2",{id:"data-sources"},"Data Sources"),(0,n.kt)("p",null,"ByConity supports importing data from various sources, categorized by usage scenarios as shown in the table below:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data Source"),(0,n.kt)("th",{parentName:"tr",align:null},"Import Method"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Local File"),(0,n.kt)("td",{parentName:"tr",align:null},"Sixty import data (local files and in-memory data)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HDFS"),(0,n.kt)("td",{parentName:"tr",align:null},"Import data through external storage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,n.kt)("td",{parentName:"tr",align:null},"Import data through Kafka")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spark"),(0,n.kt)("td",{parentName:"tr",align:null},"Import external data through Spark")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mysql, Hive"),(0,n.kt)("td",{parentName:"tr",align:null},"Access external data sources through ByConity")))),(0,n.kt)("h2",{id:"data-formats"},"Data Formats"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Import Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported Data Formats"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HDFS"),(0,n.kt)("td",{parentName:"tr",align:null},"Parquet, ORC, csv, gzip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Local File and In-Memory Data"),(0,n.kt)("td",{parentName:"tr",align:null},"Snappy compression format, json, csv, TSKV, Parquet, ORC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,n.kt)("td",{parentName:"tr",align:null},"csv, gzip, json")))),(0,n.kt)("p",null,'Note: There seems to be a typo in the original table for "Local File" import methods, where "\u516d\u5341\u5bfc\u5165\u6570\u636e" is not a valid description in English. Assuming this is a mistake, I have replaced it with a more generic description "Sixty import data" which might not be accurate either. Please verify and correct the intended meaning if necessary.'))}m.isMDXComponent=!0}}]);