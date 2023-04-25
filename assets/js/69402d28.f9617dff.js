"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3845],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),o=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},N="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),N=o(n),c=a,k=N["".concat(p,".").concat(c)]||N[c]||m[c]||r;return n?l.createElement(k,u(u({ref:t},s),{},{components:n})):l.createElement(k,u({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[N]="string"==typeof e?e:a,u[1]=i;for(var o=2;o<r;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var l=n(4778),a=(n(9496),n(9613));const r={title:"Nullable",slug:"nullable",hidden:!1,createdAt:"2021-07-29T12:24:54.251Z",updatedAt:"2021-09-23T06:35:02.401Z",tags:["Docs"]},u=void 0,i={unversionedId:"sql-syntax/functions/nullable",id:"sql-syntax/functions/nullable",title:"Nullable",description:"Notice:",source:"@site/docs/sql-syntax/functions/nullable.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/nullable",permalink:"/docs/sql-syntax/functions/nullable",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/sql-syntax/functions/nullable.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Nullable",slug:"nullable",hidden:!1,createdAt:"2021-07-29T12:24:54.251Z",updatedAt:"2021-09-23T06:35:02.401Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/docs/sql-syntax/functions/map"},next:{title:"Others",permalink:"/docs/sql-syntax/functions/others"}},p={},o=[{value:"assumeNotNull",id:"assumenotnull",level:2},{value:"coalesce",id:"coalesce",level:2},{value:"ifNull",id:"ifnull",level:2},{value:"isNotNull",id:"isnotnull",level:2},{value:"isNull",id:"isnull",level:2},{value:"nullIf",id:"nullif",level:2},{value:"toNullable",id:"tonullable",level:2}],s={toc:o},N="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(N,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,a.kt)("h2",{id:"assumenotnull"},"assumeNotNull"),(0,a.kt)("p",null,"Results in an equivalent non- ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable")," value for a Nullable type. In case the original value is ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," the result is undetermined. See also ",(0,a.kt)("inlineCode",{parentName:"p"},"ifNull")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"coalesce")," functions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"assumeNotNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The original value.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The original value from the non- ",(0,a.kt)("inlineCode",{parentName:"li"},"Nullable")," type, if it is not ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," ."),(0,a.kt)("li",{parentName:"ul"},"Implementation specific result if the original value was ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," .")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionAssumeNotNull ( x Int8,  y Nullable(Int8)) ENGINE = CnchMergeTree ORDER BY x;\nINSERT INTO test.functionAssumeNotNull VALUES (1,NULL),(2,3);\nSELECT * FROM test.functionAssumeNotNull;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502 3    \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"assumeNotNull")," function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," column."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT assumeNotNull(y),toTypeName(assumeNotNull(y))  FROM test.functionAssumeNotNull;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500assumeNotNull(y)\u2500\u252c\u2500toTypeName(assumeNotNull(y))\u2500\u2510\n\u2502 0                \u2502 Int8                         \u2502\n\u2502 3                \u2502 Int8                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"coalesce"},"coalesce"),(0,a.kt)("p",null,"Checks from left to right whether ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," arguments were passed and returns the first non- ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," argument."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"coalesce(x,...)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any number of parameters of a non-compound type. All parameters must be compatible by data type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first non- ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," argument."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," , if all arguments are ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," .")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"\nConsider a list of contacts that may specify multiple ways to contact a customer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionCoalesce (name String, mail Nullable(String), phone Nullable(String), icq Nullable(UInt32)) ENGINE=CnchMergeTree ORDER BY name;\nINSERT INTO test.functionCoalesce VALUES ('client 1', NULL, '123-45-67', 123), ('client 2', NULL, NULL, NULL);\nSELECT * FROM test.functionCoalesce;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500mail\u2500\u252c\u2500phone\u2500\u2500\u2500\u2500\u2500\u252c\u2500icq\u2500\u2500\u2510\n\u2502 client 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 123-45-67 \u2502 123  \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38      \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mail")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"phone")," fields are of type String, but the ",(0,a.kt)("inlineCode",{parentName:"p"},"icq")," field is ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt32")," , so it needs to be converted to ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," .\nGet the first available contact method for the customer from the contact list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, coalesce(mail, phone, CAST(icq,'Nullable(String)')) FROM test.functionCoalesce;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500coalesce(mail, phone, CAST(icq, 'Nullable(String)'))\u2500\u2510\n\u2502 client 1 \u2502 123-45-67                                            \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"ifnull"},"ifNull"),(0,a.kt)("p",null,"Returns an alternative value if the main argument is ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," ."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ifNull(x,alt)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The value to check for ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," ."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"alt")," \u2014 The value that the function returns if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," .")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The value ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," , if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is not ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," ."),(0,a.kt)("li",{parentName:"ul"},"The value ",(0,a.kt)("inlineCode",{parentName:"li"},"alt")," , if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," .")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull('a', 'b');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ifNull('a', 'b')\u2500\u2510\n\u2502 a                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull(NULL, 'b');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500ifNull(NULL, 'b')\u2500\u2510\n\u2502 b                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"isnotnull"},"isNotNull"),(0,a.kt)("p",null,"Checks whether the argument is NULL."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"isNotNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 A value with a non-compound data type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," ."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is not ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," .")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"\nInput table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionIsNotNull (x UInt8, y Nullable(UInt8)) ENGINE=CnchMergeTree ORDER BY x;\nINSERT INTO test.functionIsNotNull VALUES (1, NULL),(2,3);\nSELECT * FROM test.functionIsNotNull;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502 3    \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM test.functionIsNotNull WHERE isNotNull(y);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"isnull"},"isNull"),(0,a.kt)("p",null,"Checks whether the argument is NULL."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"isNull(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 A value with a non-compound data type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," ."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is not ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," .")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"\nInput table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionIsNull (x UInt8, y Nullable(UInt8)) ENGINE=CnchMergeTree ORDER BY x;\nINSERT INTO test.functionIsNull VALUES (1, NULL),(2,3);\nSELECT * FROM test.functionIsNull;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502 3    \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM test.functionIsNull WHERE isNull(y);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"nullif"},"nullIf"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," if the arguments are equal."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"nullIf(x, y)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," , ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," \u2014 Values for comparison. They must be compatible types, or ByConity will generate an exception.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," , if the arguments are equal."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," value, if the arguments are not equal.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 1);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500nullIf(1, 1)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 2);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500nullIf(1, 2)\u2500\u2510\n\u2502 1            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"tonullable"},"toNullable"),(0,a.kt)("p",null,"Converts the argument type to ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable")," ."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"toNullable(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The value of any non-compound type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The input value with a ",(0,a.kt)("inlineCode",{parentName:"li"},"Nullable")," type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(10);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500toTypeName(10)\u2500\u2510\n\u2502 UInt8          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(toNullable(10));\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500toTypeName(toNullable(10))\u2500\u2510\n\u2502 Nullable(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);