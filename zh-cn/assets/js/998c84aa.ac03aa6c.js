"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4798],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(9496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(a),h=i,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||c;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=a.length,r=new Array(c);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var o=2;o<c;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var n=a(4778),i=(a(9496),a(9613));const c={title:"\u6570\u636e\u53ef\u89c6\u5316",tags:["Docs"]},r="\u6570\u636e\u53ef\u89c6\u5316",s={unversionedId:"basic-guide/data-visualisation",id:"basic-guide/data-visualisation",title:"\u6570\u636e\u53ef\u89c6\u5316",description:"\u6559\u7a0b\u76ee\u6807\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/basic-guide/data-visualisation.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/data-visualisation",permalink:"/zh-cn/docs/next/basic-guide/data-visualisation",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/basic-guide/data-visualisation.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/next/tags/docs"}],version:"current",frontMatter:{title:"\u6570\u636e\u53ef\u89c6\u5316",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/zh-cn/docs/next/basic-guide/data-type"},next:{title:"\u8bbe\u8ba1\u5e93\u8868",permalink:"/zh-cn/docs/next/basic-guide/database-table-design"}},l={},o=[{value:"\u6559\u7a0b\u76ee\u6807\uff1a",id:"\u6559\u7a0b\u76ee\u6807",level:2},{value:"\u524d\u7f6e\u51c6\u5907\uff1a",id:"\u524d\u7f6e\u51c6\u5907",level:2},{value:"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177",id:"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177",level:2},{value:"\u8fde\u63a5\u65b9\u6cd5\uff1a",id:"\u8fde\u63a5\u65b9\u6cd5",level:2},{value:"Grafana",id:"grafana",level:3},{value:"Metabase",id:"metabase",level:3},{value:"SuperSet:",id:"superset",level:3},{value:"Tableau",id:"tableau",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3}],u={toc:o},p="wrapper";function d(e){let{components:t,...c}=e;return(0,i.kt)(p,(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6570\u636e\u53ef\u89c6\u5316"},"\u6570\u636e\u53ef\u89c6\u5316"),(0,i.kt)("h2",{id:"\u6559\u7a0b\u76ee\u6807"},"\u6559\u7a0b\u76ee\u6807\uff1a"),(0,i.kt)("p",null,"\u672c\u6587\u6863\u7528\u6765\u6307\u5bfc\u7528\u6237\u901a\u8fc7\u5e38\u89c1\u7684\u5f00\u6e90\u548c\u5546\u4e1a\u7684\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u8fde\u63a5\u5e76\u4f7f\u7528 Byconity\u3002"),(0,i.kt)("h2",{id:"\u524d\u7f6e\u51c6\u5907"},"\u524d\u7f6e\u51c6\u5907\uff1a"),(0,i.kt)("p",null,"\u7528\u6237\u9700\u8981\u83b7\u53d6\u5230 Byconity \u670d\u52a1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT(TCP/HTTP)")),(0,i.kt)("h2",{id:"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177"},"\u76ee\u524d\u652f\u6301\u7684\u5de5\u5177"),(0,i.kt)("p",null,"\u76ee\u524d\u652f\u6301\u7684\u53ef\u89c6\u5316\u5de5\u5177\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./data-visualisation#grafana"},"Grafana")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./data-visualisation#metabase"},"Metabase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./data-visualisation#superset"},"SuperSet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./data-visualisation#tableau"},"Tableau")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./data-visualisation#%E5%85%B6%E4%BB%96"},"\u5176\u4ed6"))),(0,i.kt)("h2",{id:"\u8fde\u63a5\u65b9\u6cd5"},"\u8fde\u63a5\u65b9\u6cd5\uff1a"),(0,i.kt)("h3",{id:"grafana"},"Grafana"),(0,i.kt)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003\uff1a\uff1a"),(0,i.kt)("p",null,"\u8fde\u63a5\u65b9\u6cd5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/grafana-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/grafana-and-clickhouse")),(0,i.kt)("p",null,"Grafana \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/"},"https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9964).Z,width:"1860",height:"1280"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6902).Z,width:"1586",height:"1342"})),(0,i.kt)("h3",{id:"metabase"},"Metabase"),(0,i.kt)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/metabase-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/metabase-and-clickhouse")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9747).Z,width:"2330",height:"1016"})),(0,i.kt)("h3",{id:"superset"},"SuperSet:"),(0,i.kt)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003\uff1a"),(0,i.kt)("p",null,"\u8fde\u63a5\u65b9\u6cd5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/superset-and-clickhouse"},"https://clickhouse.com/docs/en/connect-a-ui/superset-and-clickhouse")),(0,i.kt)("p",null,"SuperSet \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/installation/installing-superset-using-docker-compose"},"https://superset.apache.org/docs/installation/installing-superset-using-docker-compose")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6759).Z,width:"2660",height:"1330"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8187).Z,width:"1948",height:"1346"})),(0,i.kt)("h3",{id:"tableau"},"Tableau"),(0,i.kt)("p",null,"\u540c\u8fde\u63a5\u5f00\u6e90 clickhouse \u65b9\u6cd5\u662f\u4e00\u81f4\u7684\uff0c\u53c2\u8003"),(0,i.kt)("p",null,"\u8fde\u63a5\u65b9\u6cd5\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/connect-a-ui/tableau-and-clickhouse/"},"https://clickhouse.com/docs/en/connect-a-ui/tableau-and-clickhouse/")),(0,i.kt)("p",null,"Tableau \u5b89\u88c5\u65b9\u6cd5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.tableau.com/products/desktop/download"},"https://www.tableau.com/products/desktop/download")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1153).Z,width:"2072",height:"1532"})),(0,i.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,i.kt)("p",null,"\u7531\u4e8e Byconity \u5bf9\u5f00\u6e90\u7684 clickhouse driver(go/java/python)\u662f\u5b8c\u5168\u517c\u5bb9\u7684\uff0c\u56e0\u6b64\u4f7f\u7528\u5176\u4ed6\u5f00\u6e90\u53ef\u89c6\u5316\u5de5\u5177\u8fde\u63a5 Byconity \u65f6\uff0c\u548c\u53ef\u4ee5\u53c2\u8003\u5176\u8fde\u63a5 clickhouse \u7684\u65b9\u6cd5\u3002"))}d.isMDXComponent=!0},8187:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnG3sMOmptJiaYGlugaznN3f-5a3d4cfc5b3d53bf682fe19fcd4ab8e9.png"},1153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnLhKBy77zRRuwIKvGNEpdad-25067a3c865faf0b8bfd3395d58d2882.png"},6759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnLpId4cqZ0REcyCFlZYxPqh-aec6dfa70a6a2ae3554d4ba5572fb8f4.png"},9964:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnPWwcVS2PP0ScJ1DABrY5Gb-b28f34bd9edc66af0d763584c604d2b9.png"},6902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnUlfPZA9ubTQw2MiKV0eOSc-d5593151cce64fdb1a6aac3c28f6fe41.png"},9747:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boxcnzLODLCibKe4uefhtK3bPMh-26d656586583c881fa8f902f02b34c57.png"}}]);