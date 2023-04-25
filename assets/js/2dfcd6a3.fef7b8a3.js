"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6704],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(4778),r=(n(9496),n(9613));const o={title:"Docker Playground",tags:["Docs"]},i="Docker Playground",l={unversionedId:"basic-guide/docker-playground",id:"basic-guide/docker-playground",title:"Docker Playground",description:"Prerequisite",source:"@site/docs/basic-guide/docker-playground.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/docker-playground",permalink:"/docs/basic-guide/docker-playground",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/basic-guide/docker-playground.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Docker Playground",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Deployment Requirements",permalink:"/docs/basic-guide/deployment-requirements"},next:{title:"docker-wrapper",permalink:"/docs/basic-guide/docker-wrapper"}},s={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Cluster architecture",id:"cluster-architecture",level:2},{value:"Bring the cluster up",id:"bring-the-cluster-up",level:2},{value:"Trying some basic queries",id:"trying-some-basic-queries",level:2},{value:"A quick look into how the data is stored",id:"a-quick-look-into-how-the-data-is-stored",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Remote data",id:"remote-data",level:3},{value:"SSB benchmark",id:"ssb-benchmark",level:2},{value:"Clickbench",id:"clickbench",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker-playground"},"Docker Playground"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Before running, make sure your system has following prerequisite:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker"),(0,r.kt)("li",{parentName:"ul"},"docker-compose"),(0,r.kt)("li",{parentName:"ul"},"a docker runtime is up and running")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important notes:")," this repo has been thoroughly tested on: (1) MacOS Catalina (Intel Silicon), and (2) Debian 9. For other platforms, there're some known issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FoundationDB docker cannot start on Apple Silicon machines"),(0,r.kt)("li",{parentName:"ul"},"FoundationDB docker cannot start on WSL")),(0,r.kt)("p",null,"If you're using MacOS and cannot use docker desktop, you can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"docker")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"brew install docker docker-compose")),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/abiosoft/colima"},"Colima")," to create a docker runtime env")),(0,r.kt)("h2",{id:"cluster-architecture"},"Cluster architecture"),(0,r.kt)("p",null,"We are going to deploy a byconity cluster with following architecture:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cluster",src:n(747).Z,width:"1147",height:"818"})),(0,r.kt)("p",null,"Four byconity components are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"server: manage databases and tables, interacting with client, coordinate workers to handle query"),(0,r.kt)("li",{parentName:"ul"},"worker-write: handle write (INSERT)"),(0,r.kt)("li",{parentName:"ul"},"worker-read: handle read (SELECT)"),(0,r.kt)("li",{parentName:"ul"},"daemon-manager: manage the background jobs (merge, kafka, etc...)")),(0,r.kt)("p",null,"There could be more than one worker-write and worker-default, and they can be organized into a ",(0,r.kt)("strong",{parentName:"p"},"virtual warehouse"),". When a virtual warehouse have multiple worker-write, each write query will randomly select a worker to run. When a virtual warehouse have multiple worker-default, a select query will be parallelized among as much workers as possible."),(0,r.kt)("p",null,"In addition, there're following components in the cluster:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"foudationdb: a transactional kv database, all metadata of databases and tables will be stored here"),(0,r.kt)("li",{parentName:"ul"},"hdfs: include one namenode and one datanode, is the ",(0,r.kt)("em",{parentName:"li"},"primary")," storage of all tables data")),(0,r.kt)("h2",{id:"bring-the-cluster-up"},"Bring the cluster up"),(0,r.kt)("p",null,"Checkout the byconity-docker code base"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:ByConity/byconity-docker.git\ncd byconity-docker\n")),(0,r.kt)("p",null,"From the current directory, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,r.kt)("p",null,"Wait until all containers are ready. By default, docker exposes the tcp port at 9000 and http port at 8123. We can use following commands to check the readiness of byconity components: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-s"},"# return 1 indicates that server is working properly\ncurl '127.0.0.1:8123/?query=select%20count()%20from%20system.one'\n# return 1 indicates that read worker is working properly and server can connect to it\ncurl '127.0.0.1:8123/?query=select%20count()%20from%20cnch(`vw_default`,system,one)'\n# return 1 indicates that write worker is working properly and server can connect to it\ncurl '127.0.0.1:8123/?query=select%20count()%20from%20cnch(`vw_write`,system,one)'\n")),(0,r.kt)("h2",{id:"trying-some-basic-queries"},"Trying some basic queries"),(0,r.kt)("p",null,"Internally, byconity read/write to hdfs with username ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse")," (and data is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/clickhouse/"),"), which is not created by default when starting hadoop cluster. We can use following commands to create the user ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse")," on hdfs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-s"},"./hdfs/create_users.sh\n")),(0,r.kt)("p",null,"We can use public clickhouse client to connect to byconity. If you don't have clickhouse on your system, you can quickly download it by:"),(0,r.kt)("p",null,"On MacOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -O 'https://builds.clickhouse.com/master/macos/clickhouse' && chmod a+x ./clickhouse\n")),(0,r.kt)("p",null,"On Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -O 'https://builds.clickhouse.com/master/amd64/clickhouse' && chmod a+x clickhouse\n")),(0,r.kt)("p",null,"Then connect to server by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-s"},"./clickhouse client\n")),(0,r.kt)("p",null,"We can use following queries to create a database, create a table, insert some data to table, and query from it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test;\nUSE test;\nCREATE TABLE events (`id` UInt64, `s` String) ENGINE = CnchMergeTree ORDER BY id;\nINSERT INTO events SELECT number, toString(number) FROM numbers(10);\nSELECT * FROM events ORDER BY id;\n")),(0,r.kt)("p",null,"If the system is working correctly, the select query should show a similar result as bellow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM events\nORDER BY id ASC\n\nQuery id: b5c4bc8e-b768-432c-b24c-1aa98c5e512d\n\n\u250c\u2500id\u2500\u252c\u2500s\u2500\u2510\n\u2502  0 \u2502 0 \u2502\n\u2502  1 \u2502 1 \u2502\n\u2502  2 \u2502 2 \u2502\n\u2502  3 \u2502 3 \u2502\n\u2502  4 \u2502 4 \u2502\n\u2502  5 \u2502 5 \u2502\n\u2502  6 \u2502 6 \u2502\n\u2502  7 \u2502 7 \u2502\n\u2502  8 \u2502 8 \u2502\n\u2502  9 \u2502 9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.015 sec. \n")),(0,r.kt)("h2",{id:"a-quick-look-into-how-the-data-is-stored"},"A quick look into how the data is stored"),(0,r.kt)("p",null,"In byconity, the metadata is stored on FoundationDB, while the actual data is store on HDFS. Let's take a look at both of them."),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"The metadata includes databases, tables, partitions, and parts. Here we only focus on how we store a part in FoundationDB. While you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"fdbcli")," to directly retrieve the data, we provide a system table ",(0,r.kt)("inlineCode",{parentName:"p"},"system.cnch_parts")," to help you quickly query the metadata of a table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500flags\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 database             \u2502 String                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 table                \u2502 String                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 table_uuid           \u2502 UUID                                                                              \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 partition            \u2502 String                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 name                 \u2502 String                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 bytes_on_disk        \u2502 UInt64                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 rows_count           \u2502 UInt64                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 columns              \u2502 String                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 marks_count          \u2502 UInt64                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 index_granularity    \u2502 Array(UInt64)                                                                     \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 commit_time          \u2502 DateTime                                                                          \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 kv_commit_time       \u2502 DateTime                                                                          \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 columns_commit_time  \u2502 DateTime                                                                          \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 mutation_commit_time \u2502 DateTime                                                                          \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 previous_version     \u2502 UInt64                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 partition_id         \u2502 String                                                                            \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 bucket_number        \u2502 Int64                                                                             \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 outdated             \u2502 UInt8                                                                             \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 visible              \u2502 UInt8                                                                             \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 part_type            \u2502 Enum8('VisiblePart' = 1, 'InvisiblePart' = 2, 'DropRange' = 3, 'DroppedPart' = 4) \u2502       \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 active               \u2502 UInt8                                                                             \u2502       \u2502 ALIAS        \u2502 visible            \u2502         \u2502                  \u2502                \u2502\n\u2502 bytes                \u2502 UInt64                                                                            \u2502       \u2502 ALIAS        \u2502 bytes_on_disk      \u2502         \u2502                  \u2502                \u2502\n\u2502 rows                 \u2502 UInt64                                                                            \u2502       \u2502 ALIAS        \u2502 rows_count         \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Let's try to query all metadata of above example table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    name,\n    rows,\n    bytes,\n    part_type\nFROM system.cnch_parts\nWHERE (database = 'test') AND (table = 'events')\n\nQuery id: 58c9113e-866f-4a9e-80ee-2d3283b2e4a8\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500rows\u2500\u252c\u2500bytes\u2500\u252c\u2500part_type\u2500\u2500\u2500\u2510\n\u2502 all_438015441180033025_438015441180033025_0_438015441166663680 \u2502   10 \u2502  1012 \u2502 VisiblePart \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h3",{id:"remote-data"},"Remote data"),(0,r.kt)("p",null,"You can open the hdfs at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9870")," to see how the data is stored. Byconity store each data part as a single file name ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and the path is ",(0,r.kt)("inlineCode",{parentName:"p"},"{disk_root}/{table_uuid}/{part_name}/"),". In the above example, the data on hdfs is as follow:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Table path on disk",src:n(8264).Z,width:"1602",height:"558"})),(0,r.kt)("p",null,"Each table will have an UUID, and the path on hdfs is ",(0,r.kt)("inlineCode",{parentName:"p"},"{disk_root}/{table_uuid}"),". Inside the table path, each part is stored in a single file name",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and the path is ",(0,r.kt)("inlineCode",{parentName:"p"},"{disk_root}/{table_uuid}/{part_name}/"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data part file on disk",src:n(7851).Z,width:"1277",height:"412"})),(0,r.kt)("h2",{id:"ssb-benchmark"},"SSB benchmark"),(0,r.kt)("p",null,"The minimum requirement to run SSB 1G is each container has 1CPU and 1GB RAM. If you're using MacOS, you should config the Docker VM to have 2CPU and 8GB RAM."),(0,r.kt)("p",null,"SSB stand for ",(0,r.kt)("em",{parentName:"p"},"Star Schema Benchmark"),". It contains four tables in a star-schema and one single flat table. The data is generated from a software. The total amount of data (a.k.a ",(0,r.kt)("em",{parentName:"p"},"scale"),") can be chosen when generating. Scale 1 generates 6 million rows, while scale 1000 generates 6 billion rows. In this example, we use scale 1. To change the scale, you can change the generation command in the script."),(0,r.kt)("p",null,"To create the table and import data to it, from current directory run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./datasets/ssb_import.sh\n")),(0,r.kt)("p",null,"The script will create the table, generate the data, import it into byconity via clickhouse client, then create the flat table. When the importing done, you play with query in ",(0,r.kt)("inlineCode",{parentName:"p"},"datasets/ssb.sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(LO_REVENUE),\n    toYear(LO_ORDERDATE) AS year,\n    P_BRAND\nFROM lineorder_flat\nWHERE (P_BRAND = 'MFGR#2239') AND (S_REGION = 'EUROPE')\nGROUP BY\n    year,\n    P_BRAND\nORDER BY\n    year ASC,\n    P_BRAND ASC\n\nQuery id: c8ed5cef-57dd-4d0e-adf8-ebea5d37d34e\n\n\u250c\u2500sum(LO_REVENUE)\u2500\u252c\u2500year\u2500\u252c\u2500P_BRAND\u2500\u2500\u2500\u2510\n\u2502       732065331 \u2502 1992 \u2502 MFGR#2239 \u2502\n\u2502       665355617 \u2502 1993 \u2502 MFGR#2239 \u2502\n\u2502       733858503 \u2502 1994 \u2502 MFGR#2239 \u2502\n\u2502       622904542 \u2502 1995 \u2502 MFGR#2239 \u2502\n\u2502       628615052 \u2502 1996 \u2502 MFGR#2239 \u2502\n\u2502       784212754 \u2502 1997 \u2502 MFGR#2239 \u2502\n\u2502       409670997 \u2502 1998 \u2502 MFGR#2239 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n7 rows in set. Elapsed: 0.270 sec. Processed 6.00 million rows, 64.56 MB (22.19 million rows/s., 238.76 MB/s.)\n")),(0,r.kt)("p",null,"When testing the star schema, you may also try the cost-based optimizer by ",(0,r.kt)("inlineCode",{parentName:"p"},"set enable_optimizer=1")," to get better performance in join queries:"),(0,r.kt)("p",null,"Without CBO:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    C_CITY,\n    S_CITY,\n    toYear(LO_ORDERDATE) AS d_year,\n    sum(LO_REVENUE) AS revenue\nFROM ssb.customer, ssb.lineorder, ssb.supplier\nWHERE (LO_CUSTKEY = C_CUSTKEY) AND (LO_SUPPKEY = S_SUPPKEY) AND (C_NATION = 'UNITED STATES') AND (S_NATION = 'UNITED STATES') AND (d_year >= 1992) AND (d_year <= 1997)\nGROUP BY\n    C_CITY,\n    S_CITY,\n    d_year\nORDER BY\n    d_year ASC,\n    revenue DESC\nFORMAT `Null`\n\nQuery id: 03cc9993-26f3-46b9-93fc-b108245d6d14\n\nOk.\n\n0 rows in set. Elapsed: 46.525 sec. Processed 6.03 million rows, 84.22 MB (129.68 thousand rows/s., 1.81 MB/s.)\n")),(0,r.kt)("p",null,"With CBO:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    C_CITY,\n    S_CITY,\n    toYear(LO_ORDERDATE) AS d_year,\n    sum(LO_REVENUE) AS revenue\nFROM ssb.customer, ssb.lineorder, ssb.supplier\nWHERE (LO_CUSTKEY = C_CUSTKEY) AND (LO_SUPPKEY = S_SUPPKEY) AND (C_NATION = 'UNITED STATES') AND (S_NATION = 'UNITED STATES') AND (d_year >= 1992) AND (d_year <= 1997)\nGROUP BY\n    C_CITY,\n    S_CITY,\n    d_year\nORDER BY\n    d_year ASC,\n    revenue DESC\nFORMAT `Null`\nSETTINGS enable_optimizer = 1\n\nQuery id: a6f92e6b-be44-4c47-b0e2-fa58f806bdec\n\nOk.\n\n0 rows in set. Elapsed: 0.974 sec. \n")),(0,r.kt)("h2",{id:"clickbench"},"Clickbench"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),": clickbench dataset size is about 45GB raw data and 14 (before optimize) or 11 (after optimize) in ByConity. Make sure you have enough resource before running"),(0,r.kt)("p",null,"The minimum requirement to run Clickbench is each container has 2CPU and 8GB RAM. If you're using MacOS, you should config the Docker VM to have 4CPU and 8GB RAM. To have good performance, each container (except foudationdb) should has at least 4CPU and 16GB RAM."),(0,r.kt)("p",null,"Clickbench is a benchmark by ClickHouse, which contains 1 single flat table and the dataset of 100M rows. The dataset is obfuscated to have same data distribution as Yandex's production data. More about the benchmark ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickBench"},"here"),"."),(0,r.kt)("p",null,"To create the table and import data to it, from current directory run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./datasets/clickbench_import.sh\n")),(0,r.kt)("p",null,"The script will create the table, download the dataset, decompress it and insert into byconity via clickhouse client. When the importing done, you can test with a simple query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count()\nFROM test.hits\n\nQuery id: 08970ad5-2753-40bc-9be2-e4bb7873f3a3\n\n\u250c\u2500\u2500count()\u2500\u2510\n\u2502 99997497 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 11.161 sec. Processed 100.00 million rows, 199.99 MB (8.96 million rows/s., 17.92 MB/s.)\n")),(0,r.kt)("p",null,"Notes that in the first run, data need to be pulled from hdfs, so it takes long time. In the consequence run, the local cache hit and the execution is much faster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count()\nFROM hits\n\nQuery id: 1f6088a0-f9c6-4c23-a4be-b1c3b1b8cb6c\n\n\u250c\u2500\u2500count()\u2500\u2510\n\u2502 99997497 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 1.545 sec. Processed 100.00 million rows, 199.99 MB (64.71 million rows/s., 129.43 MB/s.)\n")),(0,r.kt)("p",null,"You can try to play with the table with the query provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"datasets/clickbench.sql"),"."))}p.isMDXComponent=!0},747:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architect-4fffec4c97e9ff3868f01f3caa43df6f.png"},7851:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hdfs_file-a7917c9b64eea79bffac3ee18670cc43.png"},8264:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hdfs_path-ad5e56aadd031738c2316c867df2e0a6.png"}}]);