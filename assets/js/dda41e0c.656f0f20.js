"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1106],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(4778),o=(n(9496),n(9613));const r={title:"Deploy on Physical Machines",sidebar_position:3,tags:["Docs"]},i="Deploy on Physical Machines",l={unversionedId:"deployment/package-deployment",id:"deployment/package-deployment",title:"Deploy on Physical Machines",description:"Currently, the way to install ByConity on physical machines is through package managers, such as installing Debian packages for Debian OS or rpm packages for Centos OS. Since ByConity uses FoundationDB as its metadata storage and HDFS as its data storage, before deploying ByConity, we need to deploy FoundationDB and HDFS first. The steps are to install FoundationDB (FDB) first, then install HDFS, and finally deploy the ByConity software package. Details are as follows.",source:"@site/docs/deployment/03-package-deployment.mdx",sourceDirName:"deployment",slug:"/deployment/package-deployment",permalink:"/docs/deployment/package-deployment",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/deployment/03-package-deployment.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"Deploy on Physical Machines",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Deploy on Kubernetes",permalink:"/docs/deployment/deployment-with-k8s"},next:{title:"ByConity upgrade",permalink:"/docs/deployment/upgrade"}},s={},d=[{value:"Installing FoundationDB",id:"installing-foundationdb",level:2},{value:"Installing HDFS",id:"installing-hdfs",level:2},{value:"Installing the FoundationDB Client",id:"installing-the-foundationdb-client",level:2},{value:"Deploying the ByConity Software Package",id:"deploying-the-byconity-software-package",level:2},{value:"Installing Software Packages",id:"installing-software-packages",level:3},{value:"Preparing Configuration Files",id:"preparing-configuration-files",level:3},{value:"Recommended Configuration File Structure Example",id:"recommended-configuration-file-structure-example",level:4},{value:"Editing Configuration Files",id:"editing-configuration-files",level:3},{value:"Starting the Program",id:"starting-the-program",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-on-physical-machines"},"Deploy on Physical Machines"),(0,o.kt)("p",null,"Currently, the way to install ByConity on physical machines is through package managers, such as installing Debian packages for Debian OS or rpm packages for Centos OS. Since ByConity uses FoundationDB as its metadata storage and HDFS as its data storage, before deploying ByConity, we need to deploy FoundationDB and HDFS first. The steps are to install FoundationDB (FDB) first, then install HDFS, and finally deploy the ByConity software package. Details are as follows."),(0,o.kt)("h2",{id:"installing-foundationdb"},"Installing FoundationDB"),(0,o.kt)("p",null,"In this section, we will set up a FoundationDB cluster on 3 physical machines, all using the Debian operating system. We refer to the official guides: ",(0,o.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/getting-started-linux.html"},"Getting Started on Linux")," and ",(0,o.kt)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/building-cluster.html"},"Building a Cluster"),"."),(0,o.kt)("p",null,"First, we need to download the binary files from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases/"},"the official download page")," for installation. If access is slow from within China, we provide a domestic download address. Download the ",(0,o.kt)("strong",{parentName:"p"},"server"),", ",(0,o.kt)("strong",{parentName:"p"},"monitor"),", and ",(0,o.kt)("strong",{parentName:"p"},"cli")," binary files, as well as the corresponding ",(0,o.kt)("strong",{parentName:"p"},"sha256")," checksum files (we use version ",(0,o.kt)("strong",{parentName:"p"},"7.1.25")," as an example)."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"foundationdb/bin")," folder locally and download the installation files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L -o fdbserver.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64\ncurl -L -o fdbserver.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbserver.x86_64.sha256\n\ncurl -L -o fdbmonitor.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64\ncurl -L -o fdbmonitor.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbmonitor.x86_64.sha256\n\ncurl -L -o fdbcli.x86_64 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64\ncurl -L -o fdbcli.x86_64.sha256 https://github.com/apple/foundationdb/releases/download/7.1.25/fdbcli.x86_64.sha256\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Domestic download address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"https://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/fdbcli.x86_64\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/fdbmonitor.x86_64\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/fdbserver.x86_64\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/foundationdb-clients-7.1.25-1.el7.x86_64.rpm\nhttps://release-bin.tos-cn-beijing.volces.com/fdb/7.1.25/foundationdb-clients_7.1.25-1_amd64.deb\n")),(0,o.kt)("p",null,"After the download is complete, check the checksums:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ sha256sum --binary fdbserver.x86_64\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7 *fdbserver.x86_64\n\n$ cat fdbserver.x86_64.sha256\n73b70a75464e64fd0a01a7536e110e31c3e6ce793d425aecfc40f0be9f0652b7  fdbserver.x86_64\n")),(0,o.kt)("p",null,"Rename the executable files, add executable permissions, and delete unnecessary files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm *.sha256\nmv fdbcli.x86_64 fdbcli\nmv fdbmonitor.x86_64 fdbmonitor\nmv fdbserver.x86_64 fdbserver\nchmod ug+x fdbcli fdbmonitor fdbserver\n")),(0,o.kt)("p",null,"Create folders to store configurations, data, and logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/fdb_runtime/config\nmkdir -p /<your_directory>/fdb_runtime/data\nmkdir -p /<your_directory>/fdb_runtime/logs\n")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"foundationdb.conf")," configuration file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/<your_directory>/fdb_runtime/config/")," folder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/foundationdb.conf\n[fdbmonitor]\nuser = root\n\n[general]\ncluster-file = /<your_directory>/fdb_runtime/config/fdb.cluster\nrestart-delay = 60\n\n[fdbserver]\n\ncommand = /<your_directory>/foundationdb/bin/fdbserver\ndatadir = /<your_directory>/fdb_runtime/data/$ID\nlogdir = /<your_directory>/fdb_runtime/logs/\npublic-address = auto:$ID\nlisten-address = public\n\n\n[fdbserver.4500]\nclass=stateless\n[fdbserver.4501]\nclass=transaction\n[fdbserver.4502]\nclass=storage\n[fdbserver.4503]\nclass=stateless\n")),(0,o.kt)("p",null,"Create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"fdb.cluster")," in the same folder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.cluster\n\n# Replace <your_ip_address> with the local IP address\nclusterdsc:test@<your_ip_address>:4500\n")),(0,o.kt)("p",null,"Install FDB as a ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," service. In the same folder, create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"fdb.service")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /<your_directory>/fdb_runtime/config/fdb.service\n[Unit]\nDescription=FoundationDB (KV storage for cnch metastore)\n\n[Service]\nRestart=always\nRestartSec=30\nTimeoutStopSec=600\nExecStart=/<your_directory>/foundationdb/bin/fdbmonitor --conffile /<your_directory>/fdb_runtime/config/foundationdb.conf --lockfile /<your_directory>/fdb_runtime/fdbmonitor.pid\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Now that the configuration files are prepared, proceed to install FDB into ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd"),"."),(0,o.kt)("p",null,"Copy the service file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp fdb.service /etc/systemd/system/\n")),(0,o.kt)("p",null,"Reload the service files to include the new service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl daemon-reload\n")),(0,o.kt)("p",null,"Enable and start the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable fdb.service\nsystemctl start fdb.service\n")),(0,o.kt)("p",null,"Check the service and see if it's active:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ systemctl status fdb.service\n  fdb.service - FoundationDB (KV storage for cnch metastore)\n  Loaded: loaded (/etc/systemd/system/fdb.service; disabled; vendor preset: enabled)\n  Active: active (running) since Tue 2023-01-17 18:35:42 CST; 20s ago\n...\n")),(0,o.kt)("p",null,"Now that the FDB service has been installed on one machine, repeat the same steps to install the FDB service on the other two machines."),(0,o.kt)("p",null,"After installation, you need to connect the three FDB services to form a cluster. Go back to the first node and use fdbcli to connect to FDB."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./foundationdb/bin/fdbcli -C fdb_runtime/config/fdb.cluster\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nThe database is unavailable; type `status' for more information.\n\nWelcome to the fdbcli. For help, type `help'.\nfdb>\n")),(0,o.kt)("p",null,"Execute the following command to initialize the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"configure new single ssd\n")),(0,o.kt)("p",null,"Set all three machines as coordinators, replacing the addresses with your machine addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"coordinators <node_1_ip_address>:4500 <node_2_ip_address>:4500 <node_3_ip_address>:4500\n")),(0,o.kt)("p",null,"Then exit fdbcli, and you'll find that the ",(0,o.kt)("inlineCode",{parentName:"p"},"fdb.cluster")," file now has new content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat fdb_runtime/config/fdb.cluster\n# DO NOT EDIT!\n# This file is auto-generated, it is not to be edited by hand\nclusterdsc:wwxVEcyLvSiO3BGKxjIw7Sg5d1UTX5ad@example1.host.com:4500,example2.host.com:4500,example3.host.com:4500\n")),(0,o.kt)("p",null,"Copy this file to the other two machines and replace the old files, then restart the fdb service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl restart fdb.service\n")),(0,o.kt)("p",null,"After that, return to the first machine, connect to FDB using fdbcli again, and execute the following command to change the redundancy mode to ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"configure double\n")),(0,o.kt)("p",null,"Then execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," command in fdbcli to view the results. You should see something similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fdb> status\n\nUsing cluster file `fdb_runtime/config/fdb.cluster'.\n\nConfiguration:\n  Redundancy mode        - double\n  Storage engine         - ssd-2\n  Coordinators           - 3\n  Usable Regions         - 1\n")),(0,o.kt)("p",null,"This confirms that you have completed the installation of the FoundationDB server. Now you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"fdb.cluster")," file, which we will use in the Byconity configuration."),(0,o.kt)("h2",{id:"installing-hdfs"},"Installing HDFS"),(0,o.kt)("p",null,"Here, we will install HDFS on three machines, with one machine acting as the namenode and the other two as datanodes. For detailed instructions, refer to the official documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html"},"SingleCluster")," and ",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/ClusterSetup.html"},"ClusterSetup"),". We will install HDFS version 3.3.4 based on Java 8."),(0,o.kt)("p",null,"First, install Java on all three machines. There are many ways to install Java, but here we will use the following two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\nsudo apt-get install openjdk-8-jdk\n")),(0,o.kt)("p",null,"Next, download a Hadoop distribution from the official website or use our provided domestic fast download link. Extract the archive and navigate to the directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl -L -o hadoop-3.3.4.tar.gz https://dlcdn.apache.org/hadoop/common/stable/hadoop-3.3.4.tar.gz\n$ tar xvf hadoop-3.3.4.tar.gz\n$ ls\nhadoop-3.3.4  hadoop-3.3.4.tar.gz\n$ cd hadoop-3.3.4\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Domestic download address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"https://release-bin.tos-cn-beijing.volces.com/hdfs/3.3.6/hadoop-3.3.6.tar.gz\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hadoop-env.sh")," file to set the environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64\nexport HADOOP_HOME=/<your_directory>/hdfs/hadoop-3.3.4\nexport HADOOP_LOG_DIR=/<your_directory>/hdfs/logs\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/core-site.xml")," file with the following content, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"<your_name_node_ip_address>")," with the actual IP address of your namenode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>fs.defaultFS</name>\n                <value>hdfs://<your_name_node_ip_address>:12001</value>\n        </property>\n</configuration>\n")),(0,o.kt)("p",null,"Now that the common setup for all three machines is complete, we will proceed with the specific configurations for the namenode and datanodes."),(0,o.kt)("p",null,"On the namenode, create a file containing the list of datanodes. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"datanodes_list.txt")," should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat /root/user_xyz/hdfs/datanodes_list.txt\n<datanode_1_address>\n<datanode_2_address>\n")),(0,o.kt)("p",null,"Create a directory to store the namenode's runtime data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /<your_directory>/hdfs/root_data_path_for_namenode\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml")," file on the namenode with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.replication</name>\n                <value>1</value>\n        </property>\n        <property>\n                <name>dfs.namenode.name.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_namenode</value>\n        </property>\n        <property>\n                <name>dfs.hosts</name>\n                <value>/<your_directory>/hdfs/datanodes_list.txt</value>\n        </property>\n</configuration>\n")),(0,o.kt)("p",null,"This completes the configuration for the namenode. Next, we will configure the two datanodes."),(0,o.kt)("p",null,"On each datanode, create a directory to store the runtime data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /root/user_xyz/hdfs/root_data_path_for_datanode\n")),(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"etc/hadoop/hdfs-site.xml")," file on the datanodes with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<configuration>\n        <property>\n                <name>dfs.data.dir</name>\n                <value>file:///<your_directory>/hdfs/root_data_path_for_datanode</value>\n        </property>\n</configuration>\n")),(0,o.kt)("p",null,"After completing the configuration, return to the namenode, navigate to the hadoop directory, format the file system, and start the namenode using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs namenode -format\nbin/hdfs --daemon start namenode\n")),(0,o.kt)("p",null,"Then, on each of the two datanodes, navigate to the hadoop directory and start the datanode using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs --daemon start datanode\n")),(0,o.kt)("p",null,"Once the entire HDFS cluster is configured, we need to create a directory to store data. On the namenode, in the hadoop directory, execute the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs dfs -mkdir -p /user/clickhouse/\nbin/hdfs dfs -chown clickhouse /user/clickhouse\nbin/hdfs dfs -chmod -R 775 /user/clickhouse\n")),(0,o.kt)("p",null,"Finally, check the status of the entire HDFS cluster and verify that the datanodes are active by running the following command on the namenode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bin/hdfs dfsadmin -report\n")),(0,o.kt)("h2",{id:"installing-the-foundationdb-client"},"Installing the FoundationDB Client"),(0,o.kt)("p",null,"The deployment of the ByConity software package depends on the FoundationDB client software package. The FoundationDB client package is tightly coupled with the FoundationDB server version. Therefore, we need to choose a client package that matches the FoundationDB server version.\nThe FoundationDB client package can be downloaded from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apple/foundationdb/releases"},"official website"),". In this example, we are downloading version 7.1.27 for Debian OS on amd64 machines."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L -o foundationdb-clients_7.1.27-1_amd64.deb https://github.com/apple/foundationdb/releases/download/7.1.27/foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,o.kt)("p",null,"Execute the installation command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i foundationdb-clients_7.1.27-1_amd64.deb\n")),(0,o.kt)("h2",{id:"deploying-the-byconity-software-package"},"Deploying the ByConity Software Package"),(0,o.kt)("p",null,"Next, we will deploy the ByConity software package, which can be found on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/releases"},"official downloads page"),". Alternatively, you can build the software package yourself by following this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/tree/master/docker/packager"},"software package build guide"),"."),(0,o.kt)("h3",{id:"installing-software-packages"},"Installing Software Packages"),(0,o.kt)("p",null,"Install the components required by ByConity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"VERSION=0.4.3\nARCH=amd64\n\n# First, install `byconity-common-static`, which is a dependency for all other packages.\ndpkg -i byconity-common-static_${VERSION}_${ARCH}.deb\n\n# Then, in the same way, install the ByConity Resource Manager, ByConity Server,\n# ByConity Worker, ByConity Worker Write, and ByConity Daemon Manager.\n# `byconity-resource-manager`, `byconity-daemon-manager`, and `byconity-tso` are lightweight services,\n# so they can be installed on a shared machine along with other packages.\n# However, for `byconity-server`, `byconity-worker`, and `byconity-worker-write`,\n# we should install them on separate machines.\n\ndpkg -i byconity-tso_${VERSION}_${ARCH}.deb\ndpkg -i byconity-resource-manager_${VERSION}_${ARCH}.deb\ndpkg -i byconity-server_${VERSION}_${ARCH}.deb\ndpkg -i byconity-worker_${VERSION}_${ARCH}.deb\ndpkg -i byconity-worker-write_${VERSION}_${ARCH}.deb\ndpkg -i byconity-daemon-manager_${VERSION}_${ARCH}.deb\n")),(0,o.kt)("h3",{id:"preparing-configuration-files"},"Preparing Configuration Files"),(0,o.kt)("h4",{id:"recommended-configuration-file-structure-example"},"Recommended Configuration File Structure Example"),(0,o.kt)("p",null,"Typically, a configuration is either specific to a component or shared across the cluster (like HDFS/FDB connection parameters). Thus, the following organization structure for configuration files demonstrates how to support both dedicated and shared configurations simultaneously."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- /etc/byconity-server/\n  - fdb.cluster\n  - byconity-tso.xml\n  - byconity-server.xml\n  - byconity-worker.xml\n  - byconity-worker-write.xml\n  - conf.d/\n    - xxx.xml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fdb.cluster")," is the configuration file for connecting the client to the FoundationDB cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"byconity-{tso,server,worker,worker-write}.xml")," are the configuration files used by the respective components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conf.d/")," is a fixed folder name used to store shared configurations. For ByConity, all internal files (without restrictions on naming or number) will be automatically merged into the component\u2019s configuration file. Therefore, common configurations such as ",(0,o.kt)("inlineCode",{parentName:"li"},"<service_discovery/>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<hdfs_nnproxy/>")," are recommended to be stored here.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The ",(0,o.kt)("inlineCode",{parentName:"strong"},"cnch_config")," method is no longer recommended; its contents can be directly migrated to ",(0,o.kt)("inlineCode",{parentName:"strong"},"conf.d/"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In addition to XML format, ByConity also supports YAML format. During conversion, note that XML format has an additional outermost tag \u2014 ",(0,o.kt)("inlineCode",{parentName:"strong"},"<yandex />"),".")),(0,o.kt)("h3",{id:"editing-configuration-files"},"Editing Configuration Files"),(0,o.kt)("p",null,"Some noteworthy configuration items include:"),(0,o.kt)("p",null,"Create any ",(0,o.kt)("inlineCode",{parentName:"p"},"XML")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf.d/")," to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"service_discovery")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," tags."),(0,o.kt)("p",null,"In ByConity, there are three methods of mutual discovery between components. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mode")," tag is used to specify the method, with three modes: ",(0,o.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dns"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"consul"),". In ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," mode, users need to specify the IP addresses or hostnames of all components in this configuration file by replacing the placeholder ",(0,o.kt)("inlineCode",{parentName:"p"},"{your_xxx_address}")," (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"{your_server_address}"),"), which should be the component's actual IP address, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"10.0.2.72"),"."),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs_nnproxy")," tag, it includes the address of the HDFS namenode."),(0,o.kt)("h3",{id:"starting-the-program"},"Starting the Program"),(0,o.kt)("p",null,"First, start TSO."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start byconity-tso\n")),(0,o.kt)("p",null,"You can also check the status of TSO with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status byconity-tso\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: When you install the package again (such as during an upgrade), you do not need to execute the ",(0,o.kt)("inlineCode",{parentName:"em"},"start")," command.")),(0,o.kt)("p",null,"Then start each component in the same way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl start byconity-server // along with byconity-worker, byconity-resource-manager, byconity-daemon-manager\n")),(0,o.kt)("p",null,"Check the startup status of each component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status | grep byconity-\n")),(0,o.kt)("p",null,"Install more worker nodes in the same way. Each worker node has a configuration item named ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKER_ID"),", which should be configured in the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/byconity-server/(byconity-worker|byconity-worker-write).xml"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"worker id")," must be unique among worker nodes, and the default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKER_ID")," in the configuration file is empty. Please try to name ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKER_ID")," using the regex pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"\\w*-\\d+"),"."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Check the status of the computation group")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"clickhouse client --port 9010\n\n:) select * from system.workers\n")))}u.isMDXComponent=!0}}]);