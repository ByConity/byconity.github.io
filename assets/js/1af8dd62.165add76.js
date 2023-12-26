"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2447],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,g=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(4778),a=(n(9496),n(9613));const i={title:"Byconity 0.2.0 s3 storage upgrade checklist",tags:["Docs"]},o="Background",l={unversionedId:"advanced-guide/0.2.0_s3_upgrade_checklist",id:"version-0.2.0/advanced-guide/0.2.0_s3_upgrade_checklist",title:"Byconity 0.2.0 s3 storage upgrade checklist",description:"There are some s3 object key and s3 metadata changes after s3's preview version(from pre 0.2.0 version to 0.2.0 version). And we provide some tools to migrate from old version. Only use this if you are using old version of byconity and store data in s3.",source:"@site/versioned_docs/version-0.2.0/advanced-guide/0.2.0_s3_upgrade_checklist.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/0.2.0_s3_upgrade_checklist",permalink:"/docs/advanced-guide/0.2.0_s3_upgrade_checklist",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/0.2.0_s3_upgrade_checklist.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"0.2.0",frontMatter:{title:"Byconity 0.2.0 s3 storage upgrade checklist",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Virtual Warehouse Configuration",permalink:"/docs/basic-guide/virtual-warehouse-configuration"},next:{title:"Background Tasks Configuration",permalink:"/docs/advanced-guide/background-task-configuration"}},c={},s=[{value:"1. Stop bycontiy cluster",id:"1-stop-bycontiy-cluster",level:2},{value:"2. Migrate s3 data with provided tool",id:"2-migrate-s3-data-with-provided-tool",level:2},{value:"If you know where the clickhouse binary is(If you are running byconity with docker you can find it by login into server/worker pod and using ps command to find the clickhouse binary path)",id:"if-you-know-where-the-clickhouse-binary-isif-you-are-running-byconity-with-docker-you-can-find-it-by-login-into-serverworker-pod-and-using-ps-command-to-find-the-clickhouse-binary-path",level:3},{value:"Or if you are running byconity with docker wrapper",id:"or-if-you-are-running-byconity-with-docker-wrapper",level:3},{value:"3. Migrate s3 metadata with provided tool",id:"3-migrate-s3-metadata-with-provided-tool",level:2},{value:"If you know where the clickhouse binary is",id:"if-you-know-where-the-clickhouse-binary-is",level:3},{value:"If you are running byconity with docker wrapper",id:"if-you-are-running-byconity-with-docker-wrapper",level:3},{value:"4. Start byconity cluster",id:"4-start-byconity-cluster",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"background"},"Background"),(0,a.kt)("p",null,"There are some s3 object key and s3 metadata changes after s3's preview version(from pre 0.2.0 version to 0.2.0 version). And we provide some tools to migrate from old version. Only use this if you are using old version of byconity and store data in s3."),(0,a.kt)("p",null,"There are ",(0,a.kt)("strong",{parentName:"p"},"4 steps")," in total."),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("h2",{id:"1-stop-bycontiy-cluster"},"1. Stop bycontiy cluster"),(0,a.kt)("p",null,"stop the cluster."),(0,a.kt)("h2",{id:"2-migrate-s3-data-with-provided-tool"},"2. Migrate s3 data with provided tool"),(0,a.kt)("h3",{id:"if-you-know-where-the-clickhouse-binary-isif-you-are-running-byconity-with-docker-you-can-find-it-by-login-into-serverworker-pod-and-using-ps-command-to-find-the-clickhouse-binary-path"},"If you know where the clickhouse binary is(If you are running byconity with docker you can find it by login into server/worker pod and using ps command to find the clickhouse binary path)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./clickhouse s3-rename --s3_ak_id ${S3_AK_ID} --s3_ak_secret ${S3_AK_SECRET} --from_bucket ${BYCONITY_S3_BUCKET} --s3_endpoint ${S3_ENDPOINT} --s3_region ${S3_REGION} --root_prefix ${BYCONTIY_DATA_PREFIX}\n")),(0,a.kt)("h3",{id:"or-if-you-are-running-byconity-with-docker-wrapper"},"Or if you are running byconity with docker wrapper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm --network host --name byconity-s3-sanitizer byconity/byconity:0.2.0 clickhouse s3-rename --s3_ak_id ${S3_AK_ID} --s3_ak_secret ${S3_AK_SECRET} --from_bucket ${BYCONITY_S3_BUCKET} --s3_endpoint ${S3_ENDPOINT} --s3_region ${S3_REGION} --root_prefix ${BYCONTIY_DATA_PREFIX}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"tool arguments"),(0,a.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"s3_ak_id"),(0,a.kt)("td",{parentName:"tr",align:null},"s3 access key id which byconity is using")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"s3_ak_secret"),(0,a.kt)("td",{parentName:"tr",align:null},"s3 secret access key which byconity is using")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"s3_region"),(0,a.kt)("td",{parentName:"tr",align:null},"s3 region which byconity is using")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"s3_endpoin"),(0,a.kt)("td",{parentName:"tr",align:null},"s3 endpoint which byconity is using")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"from_bucket"),(0,a.kt)("td",{parentName:"tr",align:null},"s3 bucket name which byconity is using")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"root_prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"s3 object prefix which byconity is using")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"thread_number"),(0,a.kt)("td",{parentName:"tr",align:null},"using how many threads, default to 1 thread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"need_delete"),(0,a.kt)("td",{parentName:"tr",align:null},"whether delete origin file, default true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uuid_check"),(0,a.kt)("td",{parentName:"tr",align:null},"whether check uuid is valid or not, default true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable_logging"),(0,a.kt)("td",{parentName:"tr",align:null},"whether enable logging output")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logging_level"),(0,a.kt)("td",{parentName:"tr",align:null},"logging level, default is debug output")))),(0,a.kt)("h2",{id:"3-migrate-s3-metadata-with-provided-tool"},"3. Migrate s3 metadata with provided tool"),(0,a.kt)("h3",{id:"if-you-know-where-the-clickhouse-binary-is"},"If you know where the clickhouse binary is"),(0,a.kt)("p",null,"./clickhouse s3-meta-sanitizer -C cnch_config.xml"),(0,a.kt)("h3",{id:"if-you-are-running-byconity-with-docker-wrapper"},"If you are running byconity with docker wrapper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm --network host --name byconity-s3-sanitizer byconity/byconity:0.2.0 clickhouse s3-meta-sanitizer --config-file /root/app/config/cnch_config.xml\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"tool arguments"),(0,a.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C"),(0,a.kt)("td",{parentName:"tr",align:null},"specify config file from ",(0,a.kt)("inlineCode",{parentName:"td"},"cnch_config")," configuration field in your bycontiy server configuration file")))),(0,a.kt)("h2",{id:"4-start-byconity-cluster"},"4. Start byconity cluster"),(0,a.kt)("p",null,"start the cluster."))}p.isMDXComponent=!0}}]);