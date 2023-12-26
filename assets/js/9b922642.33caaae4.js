"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4935],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(4778),o=(n(9496),n(9613));const r={title:"HDFS Installation",tags:["Docs"]},i=void 0,l={unversionedId:"deployment/hdfs-installation",id:"version-0.2.0/deployment/hdfs-installation",title:"HDFS Installation",description:"In this guide I will set up HDFS on 3 machine, 1 machine is for name node and other 2 machines is for data nodes. I refer to the following official document SingleCluster and ClusterSetup. I will install HDFS version 3.3.4 so I need java-8 because this is the recommended java version for this Hadoop",source:"@site/versioned_docs/version-0.2.0/deployment/06-hdfs-installation.mdx",sourceDirName:"deployment",slug:"/deployment/hdfs-installation",permalink:"/docs/deployment/hdfs-installation",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/deployment/06-hdfs-installation.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"0.2.0",sidebarPosition:6,frontMatter:{title:"HDFS Installation",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"FoundationDB Installation",permalink:"/docs/deployment/foundationdb-installation"},next:{title:"ByConity and mainstream OLAP engines (Clickhouse, Doris, Presto) performance comparison",permalink:"/docs/benchmarks/2023-09-13-byconity-tpcds-benchmark-olap/2023-09-13-byconity-vs-other-olap-engines-tpc-ds-benchmarks"}},s={},d=[],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide I will set up HDFS on 3 machine, 1 machine is for name node and other 2 machines is for data nodes. I refer to the following official document ",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html"},"SingleCluster")," and ",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/ClusterSetup.html"},"ClusterSetup"),". I will install HDFS version 3.3.4 so I need java-8 because this is the recommended java version for this Hadoop"),(0,o.kt)("p",null,"Firstly we install Java in 3 machines. There are many ways to install java but I will install with this two commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get install openjdk-8-jdk\n")),(0,o.kt)("p",null,"Next we need to download a hadoop distribution, extract it and go inside the directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl -L -o hadoop-3.3.4.tar.gz https://dlcdn.apache.org/hadoop/common/stable/hadoop-3.3.4.tar.gz\n$ tar xvf hadoop-3.3.4.tar.gz\n$ ls\nhadoop-3.3.4  hadoop-3.3.4.tar.gz\n$ cd hadoop-3.3.4\n")),(0,o.kt)("p",null,"Then, inside the directory, we edit file ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hadoop-env.sh")," to set a suitable env for it .\nI need to go uncomment and modify the below lines to set some variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export JAVA_HOME=/usr/lib/jvm/java-8-byteopenjdk-amd64\nexport HADOOP_HOME=/<your_directory>/hdfs/hadoop-3.3.4\nexport HADOOP_LOG_DIR=/<your_directory>/hdfs/logs\n")),(0,o.kt)("p",null,"Next edit the file ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/core-site.xml")," with content like this. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," tag will be the value of your name node address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"<configuration>\n        <property>\n                <name>fs.defaultFS</name>\n                <value>hdfs://<your_name_node_ip_address>:12000</value>\n        </property>\n</configuration>\n")),(0,o.kt)("p",null,"Now we have finished the common setup for all three machines. From now, the setup is different for namenode and datanode.\nIn the node that we want to install namenode, we create a file that contains a list of datanode. For example,\nin my case I create ",(0,o.kt)("inlineCode",{parentName:"p"},"datanodes_list.txt")," with content like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /root/user_xyz/hdfs/datanodes_list.txt\n<datanode_1_address>\n<datanode_2_address>\n")),(0,o.kt)("p",null,"Then create a directory for storing namenode runtime data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/hdfs/root_data_path_for_namenode\n")),(0,o.kt)("p",null,"Next edit file ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml")," with content like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.replication</name>\n                <value>1</value>\n        </property>\n        <property>\n                <name>dfs.namenode.name.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_namenode</value>\n        </property>\n        <property>\n                <name>dfs.hosts</name>\n                <value>/<your_directory>/hdfs/datanodes_list.txt</value>\n        </property>\n\n</configuration>\n")),(0,o.kt)("p",null,"That's it for namenode. Now for those two nodes that you need to deploy data node,\ncreate a directory to store datanode runtime data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /root/user_xyz/hdfs/root_data_path_for_datanode\n")),(0,o.kt)("p",null,"Next edit file ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml")," with content like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.data.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_datanode</value>\n        </property>\n</configuration>\n")),(0,o.kt)("p",null,"We have finish the configuration, now go to the namenode machine, go to the hadoop directory\nFormat the file system and start namenode with this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs namenode -format\nbin/hdfs  --daemon start namenode\n")),(0,o.kt)("p",null,"Then go to other two data node machines, go to the hadoop directory and start data node with this command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs  --daemon start datanode\n")),(0,o.kt)("p",null,"We have finished the setup for HDFS. Now we will have to create a directory to store data.\nSo go to the namenode machine, in the hadoop directory, execute follow commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs dfs -mkdir -p /user/clickhouse/\nbin/hdfs dfs -chown clickhouse /user/clickhouse\nbin/hdfs dfs -chmod -R 775 /user/clickhouse\n")))}m.isMDXComponent=!0}}]);