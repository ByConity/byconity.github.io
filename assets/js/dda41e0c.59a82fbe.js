"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1106],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,u=s["".concat(c,".").concat(m)]||s[m]||y[m]||i;return t?a.createElement(u,r(r({ref:n},p),{},{components:t})):a.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(4778),o=(t(9496),t(9613));const i={title:"Package Deployment",tags:["Docs"]},r="Package Deployment",l={unversionedId:"deployment/package-deployment",id:"deployment/package-deployment",title:"Package Deployment",description:"One way to deploy ByConity to physical machines is using package manager.",source:"@site/docs/deployment/03-package-deployment.mdx",sourceDirName:"deployment",slug:"/deployment/package-deployment",permalink:"/docs/deployment/package-deployment",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/deployment/03-package-deployment.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"Package Deployment",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Deploy ByConity to physical servers with a docker wrapper",permalink:"/docs/deployment/docker-wrapper"},next:{title:"FoundationDB Installation",permalink:"/docs/deployment/foundationdb-installation"}},c={},d=[{value:"Install FoundationDB and HDFS",id:"install-foundationdb-and-hdfs",level:2},{value:"Install FoundationDB client",id:"install-foundationdb-client",level:2},{value:"Deploy ByConity Packages",id:"deploy-byconity-packages",level:2},{value:"Install byconity-common-static",id:"install-byconity-common-static",level:3},{value:"Config <code>cnch_config.xml</code>",id:"config-cnch_configxml",level:3},{value:"Config <code>fdb.config</code>",id:"config-fdbconfig",level:3}],p={toc:d},s="wrapper";function y(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"package-deployment"},"Package Deployment"),(0,o.kt)("p",null,"One way to deploy ByConity to physical machines is using package manager.\nFor example, install Debian package for Debian OS and rpm packages for Centos OS"),(0,o.kt)("h2",{id:"install-foundationdb-and-hdfs"},"Install FoundationDB and HDFS"),(0,o.kt)("p",null,"ByConity using FoundationDB as meta store, and HDFS as datastore. So before\nstarting to deploy ByConity, we need to deploy FoundationDB and HDFS first."),(0,o.kt)("p",null,"For deploying ",(0,o.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/"},"Foundation")," database,\nyou can refer to the installation guide ",(0,o.kt)("a",{parentName:"p",href:"./foundationdb-installation"},"here")),(0,o.kt)("p",null,"After that we need to deploy an HDFS cluster consist of name node and data node,\nand create the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/clickhouse")," in HDFS for store data. You can refer\nto the installation guide ",(0,o.kt)("a",{parentName:"p",href:"./hdfs-installation"},"here"),".\nAfter this step, you got the name node url which ussually the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.defaultFS"),"\nthat you can find in the ",(0,o.kt)("inlineCode",{parentName:"p"},"core-site.xml")," config. "),(0,o.kt)("h2",{id:"install-foundationdb-client"},"Install FoundationDB client"),(0,o.kt)("p",null,"Now we will start deploying Byconity. ByConity packages depends on the FoundationDB client package.\nHence, before deploying ByConity packages on any machine, we need to deploy FoundationDB client package first.\nThe Foundation client package are tight coupled to version of FoundationDB server.\nSo we need to choose the client package with version that match the version of FoundationDB server"),(0,o.kt)("p",null,"To deploy FoundationDB client package, we go to the release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases"},"page"),",\nfind the right package to your OS and download it. For example, here i download version ",(0,o.kt)("inlineCode",{parentName:"p"},"7.1.27")," for Debian OS, ",(0,o.kt)("inlineCode",{parentName:"p"},"amd64")," machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L -o foundationdb-clients_7.1.27-1_amd64.deb https://github.com/apple/foundationdb/releases/download/7.1.27/foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,o.kt)("p",null,"Then install with this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,o.kt)("h2",{id:"deploy-byconity-packages"},"Deploy ByConity Packages"),(0,o.kt)("p",null,"Next we will deploy ByConity packages, you can find them in release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/releases"},"page"),".\nOr you can build the package by yourself, in that case follow this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/tree/master/docker/packager"},"guide"),"."),(0,o.kt)("h3",{id:"install-byconity-common-static"},"Install byconity-common-static"),(0,o.kt)("p",null,"The first package that need to install is the common package ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-common-static"),",\nthis is the package that all other packages depend on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i byconity-common-static_0.1.1.1_amd64.deb\n")),(0,o.kt)("p",null,"After that edit configuration files ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/cnch_config.xml")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/fdb.config"),".  The ",(0,o.kt)("inlineCode",{parentName:"p"},"cnch_config.xml")," file contains service_discovery config,\nhdfs config, foundationdb cluster config path. The ",(0,o.kt)("inlineCode",{parentName:"p"},"fdb.config")," is the cluster config file of\nFoundationDB cluster. "),(0,o.kt)("h3",{id:"config-cnch_configxml"},"Config ",(0,o.kt)("inlineCode",{parentName:"h3"},"cnch_config.xml")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cnch_config.xml")," file contains 2 parts that have to be configured by user,",(0,o.kt)("br",{parentName:"p"}),"\n","the ",(0,o.kt)("inlineCode",{parentName:"p"},"service_discovery")," tag and the ",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," tags.\nIn ByConity there are 3 ways component can discover each other. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mode")," tag is used\nto specify the way. There are 3 modes: ",(0,o.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"consul"),"\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," mode, the user have to specify the ip address or host name of all components\nin this config file, by replace the place holder ",(0,o.kt)("inlineCode",{parentName:"p"},"{your_xxx_address}"),", for example ",(0,o.kt)("inlineCode",{parentName:"p"},"{your_server_address}"),",\nwhich the actually ip address of the component, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0.2.72"),". "),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," tags contains the address of HDFS name node "),(0,o.kt)("h3",{id:"config-fdbconfig"},"Config ",(0,o.kt)("inlineCode",{parentName:"h3"},"fdb.config")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fdb.config")," is the file for foundation db client to connect to FoundationDB server,\nyou will have it after you config FoundationDB server.\nRead more in ",(0,o.kt)("a",{parentName:"p",href:"./foundationdb-installation"},"here")),(0,o.kt)("p",null,"After that on the machine you want to install TSO service. Download the ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-tso")," package and install."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i byconity-tso_0.1.1.1_amd64.deb\n")),(0,o.kt)("p",null,"If this is the first time the package is install on system, it won't start immediately but in next reboot.\nYou can check it status by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status byconity-tso\n")),(0,o.kt)("p",null,"The config for tso service is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/byconity-tso.xml"),", you can config as you like\nbut the default are good enough, to start it immediately execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start byconity-tso\n")),(0,o.kt)("p",null,"The next time you install this package again (for example, you want to upgrade), then you don't need to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," command."),(0,o.kt)("p",null,"In the same way, install ByConity resource manager, ByConity server, ByConity worker, ByConity worker write\nand ByConity daemon manager. The ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-resource-manager"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-daemon-manger")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-tso"),"\nare light weight service so it could be install in shared machine with other package.\nBut for ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-worker"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"byconity-worker-write")," we should install them in separate machines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i byconity-resource-manager_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-server_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-worker_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-worker-write_0.1.1.1_amd64.deb \nsudo dpkg -i byconity-daemon-manager_0.1.1.1_amd64.deb \n")),(0,o.kt)("p",null,"You can install more workers in the same way. Each worker has a settings call ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKER_ID"),"\nin the config file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/(byconity-worker|byconity-worker-write).xml")," to config ",(0,o.kt)("inlineCode",{parentName:"p"},"worker id")," for worker,\n",(0,o.kt)("inlineCode",{parentName:"p"},"worker id")," have to be unique between workers, the default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKER_ID")," in config file is empty.\nIn that case the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker_id")," is automatically assigned to be the IP address of the host machine."))}y.isMDXComponent=!0}}]);