"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5206],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||c;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var r=n(4778),a=(n(9496),n(9613));const c={title:"Encryption",slug:"encryption",hidden:!0,createdAt:"2021-07-29T12:04:18.067Z",updatedAt:"2021-09-23T03:58:33.487Z",tags:["Docs"]},i=void 0,p={unversionedId:"sql-syntax/functions/encryption",id:"sql-syntax/functions/encryption",title:"Encryption",description:"Notice:",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sql-syntax/functions/encryption.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/encryption",permalink:"/zh-cn/docs/next/sql-syntax/functions/encryption",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/sql-syntax/functions/encryption.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/next/tags/docs"}],version:"current",frontMatter:{title:"Encryption",slug:"encryption",hidden:!0,createdAt:"2021-07-29T12:04:18.067Z",updatedAt:"2021-09-23T03:58:33.487Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Encoding",permalink:"/zh-cn/docs/next/sql-syntax/functions/encoding"},next:{title:"Geo",permalink:"/zh-cn/docs/next/sql-syntax/functions/geo"}},o={},s=[{value:"decrypt",id:"decrypt",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"no encrypt functions but we have decrypt functions. syntax unsure")),(0,a.kt)("h2",{id:"decrypt"},"decrypt"),(0,a.kt)("p",null,"This function decrypts ciphertext into a plaintext using these modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aes-128-ecb, aes-192-ecb, aes-256-ecb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aes-128-cbc, aes-192-cbc, aes-256-cbc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aes-128-cfb1, aes-192-cfb1, aes-256-cfb1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aes-128-cfb8, aes-192-cfb8, aes-256-cfb8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aes-128-cfb128, aes-192-cfb128, aes-256-cfb128")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aes-128-ofb, aes-192-ofb, aes-256-ofb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"aes-128-gcm, aes-192-gcm, aes-256-gcm"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\ndecrypt('mode', 'ciphertext', 'key' [, iv, aad])\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mode")," \u2014 Decryption mode. ",(0,a.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md#string"},"String")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ciphertext")," \u2014 Encrypted text that needs to be decrypted. ",(0,a.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md#string"},"String")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u2014 Decryption key. ",(0,a.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md#string"},"String")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"iv")," \u2014 Initialization vector. Required for ",(0,a.kt)("inlineCode",{parentName:"p"},"-gcm")," modes, optinal for others. ",(0,a.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md#string"},"String")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"aad")," \u2014 Additional authenticated data. Won't decrypt if this value is incorrect. Works only in ",(0,a.kt)("inlineCode",{parentName:"p"},"-gcm")," modes, for others would throw an exception. ",(0,a.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md#string"},"String")," ."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Decrypted String. ",(0,a.kt)("a",{parentName:"li",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md#string"},"String")," .")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Re-using table from ",(0,a.kt)("a",{parentName:"p",href:"https://bytedance.feishu.cn/docs/doccnZ2mgKjAAc5rAc62DusGjq1#encrypt"},"encrypt")," ."),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT comment, hex(secret) FROM encryption_test;\n\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500hex(secret)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\n\u2502 aes-256-gcm          \u2502 A8A3CCBC6426CFEEB60E4EAE03D3E94204C1B09E0254 \u2502\n\n\u2502 aes-256-gcm with AAD \u2502 A8A3CCBC6426D9A1017A0A932322F1852260A4AD6837 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500hex(secret)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\n\u2502 aes-256-cfb128 no IV                \u2502 B4972BDC4459                     \u2502\n\n\u2502 aes-256-cfb128 no IV, different key \u2502 2FF57C092DC9                     \u2502\n\n\u2502 aes-256-cfb128 with IV              \u2502 5E6CB398F653                     \u2502\n\n\u2502 aes-256-cbc no IV                   \u2502 1BC0629A92450D9E73A00E7D02CF4142 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,a.kt)("p",null,"Now let's try to decrypt all that data."),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\nSELECT comment, decrypt('aes-256-cfb128', secret, '12345678910121314151617181920212') as plaintext FROM encryption_test\n\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500plaintext\u2500\u2510\n\n\u2502 aes-256-cfb128 no IV                \u2502 Secret    \u2502\n\n\u2502 aes-256-cfb128 no IV, different key \u2502 \ufffd4\ufffd\n\n                                           \ufffd         \u2502\n\n\u2502 aes-256-cfb128 with IV              \u2502 \ufffd\ufffd\ufffd6\ufffd~        \u2502\n\n \u2502aes-256-cbc no IV                   \u2502 \ufffd2*4\ufffdh3c\ufffd4w\ufffd\ufffd@\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,a.kt)("p",null,"Notice how only a portion of the data was properly decrypted, and the rest is gibberish since either ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," , or ",(0,a.kt)("inlineCode",{parentName:"p"},"iv")," were different upon encryption."))}m.isMDXComponent=!0}}]);