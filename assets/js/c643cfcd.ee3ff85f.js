"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9307],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(4778),r=(n(9496),n(9613));const o={title:"FoundationDB Installation",tags:["Docs"]},i=void 0,l={unversionedId:"deployment/foundationdb-installation",id:"deployment/foundationdb-installation",title:"FoundationDB Installation",description:"In this guideline, I will set up a Foundation DB cluster on 3 physical machines. They are all using debian OS. I refer to two official guidelines here Getting Started on Linux and Building a Cluster.",source:"@site/docs/deployment/04-foundationdb-installation.mdx",sourceDirName:"deployment",slug:"/deployment/foundationdb-installation",permalink:"/docs/deployment/foundationdb-installation",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/deployment/04-foundationdb-installation.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:4,frontMatter:{title:"FoundationDB Installation",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Package Deployment",permalink:"/docs/deployment/package-deployment"},next:{title:"HDFS Installation",permalink:"/docs/deployment/hdfs-installation"}},s={},d=[],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guideline, I will set up a Foundation DB cluster on 3 physical machines. They are all using debian OS. I refer to two official guidelines here ",(0,r.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/getting-started-linux.html"},"Getting Started on Linux")," and ",(0,r.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/building-cluster.html"},"Building a Cluster"),". "),(0,r.kt)("p",null,"Firstly, we need to download the binary for the installation in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases/"},"here"),". We need to download the ",(0,r.kt)("strong",{parentName:"p"},"server"),", ",(0,r.kt)("strong",{parentName:"p"},"monitor")," and ",(0,r.kt)("strong",{parentName:"p"},"cli")," binaries, and those corresponding ",(0,r.kt)("strong",{parentName:"p"},"sha256")," checksum files. I will choose version ",(0,r.kt)("strong",{parentName:"p"},"7.1.25")," as it is the latest at the time.\\\nIn your directory, let's create a folder ",(0,r.kt)("inlineCode",{parentName:"p"},"foundationdb"),".\\\nThen, create a subfolder ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"foundationdb"),". \\\nIn this ",(0,r.kt)("inlineCode",{parentName:"p"},"foundationdb/bin")," folder, download with the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L -o fdbserver.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64\ncurl -L -o fdbserver.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64.sha256\n\ncurl -L -o fdbmonitor.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64\ncurl -L -o fdbmonitor.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64.sha256\n\ncurl -L -o fdbcli.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64\ncurl -L -o fdbcli.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64.sha256\n")),(0,r.kt)("p",null,"After the download is completed, let's do the checksum check on the executable files to see if the downloads are good. The two checksums should be equal. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ sha256sum --binary fdbserver.x86_64\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7 *fdbserver.x86_64\n\n$ cat fdbserver.x86_64.sha256\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7  fdbserver.x86_64\n")),(0,r.kt)("p",null,"Next we will delete those sha256 checksum file because we don't need them anymore, we'll also rename the executable file to remove the trailing ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64")," and give them executable permission."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm *.sha256\nmv fdbcli.x86_64 fdbcli\nmv fdbmonitor.x86_64 fdbmonitor\nmv fdbserver.x86_64 fdbserver\nchmod ug+x fdbcli fdbmonitor fdbserver\n")),(0,r.kt)("p",null,"Next we will create some folder to store the config, data and log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/fdb_runtime/config\nmkdir -p /<your_directory>/fdb_runtime/data\nmkdir -p /<your_directory>/fdb_runtime/logs\n")),(0,r.kt)("p",null,"Then we create the ",(0,r.kt)("inlineCode",{parentName:"p"},"foundationdb.conf")," config file in ",(0,r.kt)("inlineCode",{parentName:"p"},"/<your_directory>/fdb_runtime/config/")," with content like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/foundationdb.conf\n[fdbmonitor]\nuser = root\n\n[general]\ncluster-file = /<your_directory>/fdb_runtime/config/fdb.cluster\nrestart-delay = 60\n\n[fdbserver]\n\ncommand = /<your_directory>/foundationdb/bin/fdbserver\ndatadir = /<your_directory>/fdb_runtime/data/$ID\nlogdir = /<your_directory>/fdb_runtime/logs/\npublic-address = auto:$ID\nlisten-address = public\n\n\n[fdbserver.4500]\nclass=stateless\n[fdbserver.4501]\nclass=transaction\n[fdbserver.4502]\nclass=storage\n[fdbserver.4503]\nclass=stateless\n")),(0,r.kt)("p",null,"Then in the same directory create file ",(0,r.kt)("inlineCode",{parentName:"p"},"fdb.cluster")," with content like this, change the ip to the ip of your machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.cluster\nclusterdsc:test@<your_ip_address>:4500\n")),(0,r.kt)("p",null,"We will install FDB as a ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," service. So, in the same folder we will create file ",(0,r.kt)("inlineCode",{parentName:"p"},"fdb.service")," with content like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.service\n[Unit]\nDescription=FoundationDB (KV storage for cnch metastore)\n\n[Service]\nRestart=always\nRestartSec=30\nTimeoutStopSec=600\nExecStart=/<your_directory>/foundationdb/bin/fdbmonitor --conffile /<your_directory>/fdb_runtime/config/foundationdb.conf --lockfile /<your_directory>/fdb_runtime/fdbmonitor.pid\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"We have finished preparing the config file. Now let's install fdb into ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")),(0,r.kt)("p",null,"Copy the service file into ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp fdb.service /etc/systemd/system/\n")),(0,r.kt)("p",null,"Reload the service files to include the new service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl daemon-reload\n")),(0,r.kt)("p",null,"Enable and start the service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable fdb.service\nsystemctl start fdb.service\n")),(0,r.kt)("p",null,"Check the service and see that it is active"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ systemctl status fdb.service\n\u25cf fdb.service - FoundationDB (KV storage for cnch metastore)\n   Loaded: loaded (/etc/systemd/system/fdb.service; disabled; vendor preset: enabled)\n   Active: active (running) since Tue 2023-01-17 18:35:42 CST; 20s ago\n\n")),(0,r.kt)("p",null,"Now I have install fdb service in 1 machine, I will repeat the same for the other 2 machines"),(0,r.kt)("p",null,"After it's installed on all 3 machines, we need to connect them to form a cluster. Now go back to the first node, connect to FDB using fdbcli "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./foundationdb/bin/fdbcli -C fdb_runtime/config/fdb.cluster\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nThe database is unavailable; type `status' for more information.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb>\n")),(0,r.kt)("p",null,"execute this to init a database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"configure new single ssd\n")),(0,r.kt)("p",null,"Next, execute this to from 2 other nodes to a cluster, replace the address with your machine address "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"coordinators <node_1_ip_address>:4500 <node_2_ip_address>:4500 <node_3_ip_address>:4500\n")),(0,r.kt)("p",null,"Then exit the cli, you will found that the ",(0,r.kt)("inlineCode",{parentName:"p"},"fdb.cluster")," now have a new content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat fdb_runtime/config/fdb.cluster\n# DO NOT EDIT!\n# This file is auto-generated, it is not to be edited by hand\nclusterdsc:wwxVEcyLvSiO3BGKxjIw7Sg5d1UTX5ad@example1.host.com:4500,example2.host.com:4500,example3.host.com:4500\n")),(0,r.kt)("p",null,"Copy this file to other 2 machines and replace the old file then restart fdb service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl restart fdb.service\n")),(0,r.kt)("p",null,"Then come back to the first machine, connect to FDB using fdbcli again and execute this command to change redundant mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"triple")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"configure triple\n")),(0,r.kt)("p",null,"Then execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," command with ",(0,r.kt)("inlineCode",{parentName:"p"},"fdbcli")," to see the result, you should see something like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"fdb> status\n\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nConfiguration:\n  Redundancy mode        - triple\n  Storage engine         - ssd-2\n  Coordinators           - 3\n  Usable Regions         - 1\n")),(0,r.kt)("p",null,"That's it. You've finished installing Foundationdb server. Now you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"fdb.cluster")," file. We will use it in Byconity's configuration."))}p.isMDXComponent=!0}}]);