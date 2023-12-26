"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1383],{9613:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>c});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},o=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,c=m["".concat(p,".").concat(d)]||m[d]||k[d]||r;return n?l.createElement(c,u(u({ref:t},o),{},{components:n})):l.createElement(c,u({ref:t},o))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<r;s++)u[s]=n[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(4778),a=(n(9496),n(9613));const r={title:"Arithmetic",slug:"arithmetic",hidden:!1,createdAt:"2021-07-29T11:53:16.539Z",updatedAt:"2021-09-23T03:36:30.482Z",tags:["Docs"]},u=void 0,i={unversionedId:"sql-syntax/functions/arithmetic",id:"version-0.2.0/sql-syntax/functions/arithmetic",title:"Arithmetic",description:"Notice:",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/sql-syntax/functions/arithmetic.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/arithmetic",permalink:"/zh-cn/docs/sql-syntax/functions/arithmetic",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/sql-syntax/functions/arithmetic.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"0.2.0",frontMatter:{title:"Arithmetic",slug:"arithmetic",hidden:!1,createdAt:"2021-07-29T11:53:16.539Z",updatedAt:"2021-09-23T03:36:30.482Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Aggregation",permalink:"/zh-cn/docs/sql-syntax/functions/aggregate"},next:{title:"Array",permalink:"/zh-cn/docs/sql-syntax/functions/array"}},p={},s=[{value:"abs",id:"abs",level:2},{value:"divide",id:"divide",level:2},{value:"gcd",id:"gcd",level:2},{value:"intDiv",id:"intdiv",level:2},{value:"intDivOrZero",id:"intdivorzero",level:2},{value:"lcm",id:"lcm",level:2},{value:"min",id:"min",level:2},{value:"minus",id:"minus",level:2},{value:"modulo",id:"modulo",level:2},{value:"multiply",id:"multiply",level:2},{value:"negate",id:"negate",level:2},{value:"plus",id:"plus",level:2}],o={toc:s},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,a.kt)("h2",{id:"abs"},"abs"),(0,a.kt)("p",null,"Calculates the absolute value of the number (a). That is, if a \\< 0, it returns -a. For unsigned types it does not do anything. For signed integer types, it returns an unsigned number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"abs(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The absolute value of the number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT abs(-2);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500abs(-2)\u2500\u2510\n\u2502 2       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"divide"},"divide"),(0,a.kt)("p",null,"Calculates the quotient of the numbers. The result type is always a floating-point type."),(0,a.kt)("p",null,"It is not integer division. For integer division, use the \u2018intDiv\u2019 function."),(0,a.kt)("p",null,"When dividing by zero you get \u2018inf\u2019, \u2018-inf\u2019, or \u2018nan\u2019."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\ndivide(a, b) # a / b operator\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Value in floating-point type")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT divide(50, 2);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500divide(50, 2)\u2500\u2510\n\u2502 2.5e+01       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"gcd"},"gcd"),(0,a.kt)("p",null,"Returns the greatest common divisor of the numbers."),(0,a.kt)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"gcd(a, b)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The greatest common divisor of the numbers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT gcd(27,18);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500gcd(27, 18)\u2500\u2510\n\u2502 9           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"intdiv"},"intDiv"),(0,a.kt)("p",null,"Calculates the quotient of the numbers. Divides into integers, rounding down (by the absolute value)."),(0,a.kt)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"intDiv(a, b)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Quotient of the numbers in integer")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT intDiv(10, 2);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500intDiv(10, 2)\u2500\u2510\n\u2502 5             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"intdivorzero"},"intDivOrZero"),(0,a.kt)("p",null,"Differs from \u2018intDiv\u2019 in that it returns zero when dividing by zero or when dividing a minimal negative number by minus one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"intDivOrZero(a, b)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Quotient of the numbers in integer")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT intDivOrZero(10, -2);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500intDivOrZero(10, -2)\u2500\u2510\n\u2502 -5                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"lcm"},"lcm"),(0,a.kt)("p",null,"Returns the least common multiple of the numbers."),(0,a.kt)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"lcm(a, b)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The least greatest common divisor of the numbers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT lcm(27,18);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500lcm(27, 18)\u2500\u2510\n\u2502 54          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"min"},"min"),(0,a.kt)("p",null,"Aggregate function that calculates the minimum across a group of values."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"min(column)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column")," \u2013 The column name.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The minimum number in group of values")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_min(id Int32) ENGINE = CnchMergeTree ORDER BY id;\nINSERT INTO test.test_min(id) VALUES(1),(2),(3),(4),(5); -- insert 1,2,3,4,5 to table\nSELECT min(id) FROM test.test_min;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500min(id)\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"minus"},"minus"),(0,a.kt)("p",null,"Calculates the difference. The result is always signed."),(0,a.kt)("p",null,"You can also calculate integer numbers from a date or date with time. The idea is the same \u2013 see above for \u2018plus\u2019."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"minus(a, b), a - b operator\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The difference between ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"b"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT minus(10, 3);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500minus(10, 3)\u2500\u2510\n\u2502 7            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"modulo"},"modulo"),(0,a.kt)("p",null,"Calculates the remainder after division."),(0,a.kt)("p",null,"If arguments are floating-point numbers, they are pre-converted to integers by dropping the decimal portion."),(0,a.kt)("p",null,"The remainder is taken in the same sense as in C++. Truncated division is used for negative numbers."),(0,a.kt)("p",null,"An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"modulo(a, b), a % b operator\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The remainder from a divide by b.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT modulo(10, 3);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500modulo(10, 3)\u2500\u2510\n\u2502 1             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"multiply"},"multiply"),(0,a.kt)("p",null,"Calculates the product of the numbers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"multiply(a, b) # a * b operator\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Product value of the numbers.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT multiply(3,12);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500multiply(3, 12)\u2500\u2510\n\u2502 36              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"negate"},"negate"),(0,a.kt)("p",null,"Calculates a number with the reverse sign. The result is always signed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"negate(a) # -a operator\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number with the reverse sign.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT negate(20);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500negate(20)\u2500\u2510\n\u2502 -20        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"plus"},"plus"),(0,a.kt)("p",null,"Calculates the sum of the numbers."),(0,a.kt)("p",null,"You can also add integer numbers with a date or date and time. In the case of a date, adding an integer means adding the corresponding number of days. For a date with time, it means adding the corresponding number of seconds."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select plus(a, b) # a + b operator\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"a")," \u2013 The number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b")," \u2013 The number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The sum of the numbers.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select plus(1,2);\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500plus(1, 2)\u2500\u2510\n\u2502 3          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);