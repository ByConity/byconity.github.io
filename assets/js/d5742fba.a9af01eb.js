"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7931],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(4778),a=(n(9496),n(9613));const o={title:"Cluster Configuration",tags:["Docs"]},i="Cluster Configuration",l={unversionedId:"basic-guide/cluster-configuration",id:"basic-guide/cluster-configuration",title:"Cluster Configuration",description:"Document Type: Descriptive",source:"@site/docs/basic-guide/cluster-configuration.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/cluster-configuration",permalink:"/docs/basic-guide/cluster-configuration",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/basic-guide/cluster-configuration.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Cluster Configuration",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Client Connection",permalink:"/docs/basic-guide/client-connection"},next:{title:"Export Data",permalink:"/docs/basic-guide/data-export"}},s={},c=[{value:"Server Configuration Parameters",id:"server-configuration-parameters",level:2},{value:"cnch_type",id:"cnch_type",level:3},{value:"tcp_port",id:"tcp_port",level:3},{value:"http_port",id:"http_port",level:3},{value:"rpc_port",id:"rpc_port",level:3},{value:"exchange_port",id:"exchange_port",level:3},{value:"exchange_status_port",id:"exchange_status_port",level:3},{value:"path",id:"path",level:3},{value:"tmp_path",id:"tmp_path",level:3},{value:"users_config",id:"users_config",level:3},{value:"Service discovery",id:"service-discovery",level:3},{value:"Catalog service",id:"catalog-service",level:3},{value:"HDFS configuration parameters",id:"hdfs-configuration-parameters",level:2},{value:"hdfs_user",id:"hdfs_user",level:3},{value:"cfs_addr",id:"cfs_addr",level:3},{value:"hdfs_addr",id:"hdfs_addr",level:3},{value:"hdfs_ha_nameservice",id:"hdfs_ha_nameservice",level:3},{value:"<del>hdfs_nnproxy</del>",id:"hdfs_nnproxy",level:3},{value:"storage_configuration",id:"storage_configuration",level:3},{value:"hdfs3_config",id:"hdfs3_config",level:3},{value:"disk_cache_strategies",id:"disk_cache_strategies",level:3},{value:"cnch_kafka_log",id:"cnch_kafka_log",level:3},{value:"brpc",id:"brpc",level:3},{value:"cnch_transaction_cleaner_max_threads",id:"cnch_transaction_cleaner_max_threads",level:3},{value:"cnch_transaction_cleaner_queue_size",id:"cnch_transaction_cleaner_queue_size",level:3},{value:"dance_merge_selector",id:"dance_merge_selector",level:3},{value:"exchange_timeout_ms",id:"exchange_timeout_ms",level:3},{value:"zookeeper",id:"zookeeper",level:3},{value:"TSO configuration parameters",id:"tso-configuration-parameters",level:2},{value:"tso_service",id:"tso_service",level:3},{value:"keeper_server",id:"keeper_server",level:3},{value:"service_discovery",id:"service_discovery",level:3},{value:"Daemon Manager configuration parameters",id:"daemon-manager-configuration-parameters",level:2},{value:"daemon_manager",id:"daemon_manager",level:3},{value:"cnch_data_retention_time_in_sec",id:"cnch_data_retention_time_in_sec",level:3},{value:"Resource Manager configuration parameters",id:"resource-manager-configuration-parameters",level:2},{value:"resource_manager",id:"resource_manager",level:3},{value:"catalog",id:"catalog",level:3},{value:"catalog_service",id:"catalog_service",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,a.kt)("p",null,"Document Type: Descriptive"),(0,a.kt)("p",null,"Summary:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the process of installation and deployment, what basic parameters need to be understood"),(0,a.kt)("li",{parentName:"ol"},"What are the advanced parameters of each component and what are their functions?")),(0,a.kt)("h2",{id:"server-configuration-parameters"},"Server Configuration Parameters"),(0,a.kt)("p",null,"ByConity (formerly codenamed CNCH) server-side configuration is stored in cnch-server.xml, specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"--config-file")," when the process starts, and the server will automatically load the configuration from cnch-server.xml."),(0,a.kt)("h3",{id:"cnch_type"},"cnch_type"),(0,a.kt)("p",null,"Configure the ByConity process type, which can be configured as server or worker. Among them, the server is mainly responsible for receiving query requests and dispatching queries to workers; the worker nodes are mainly responsible for executing query tasks from the server. Examples are as follows:"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_type>server</cnch_type>\n\n")),(0,a.kt)("h3",{id:"tcp_port"},"tcp_port"),(0,a.kt)("p",null,"The TCP port used by server and client to connect"),(0,a.kt)("p",null,"Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<tcp_port>9000</tcp_port>\n\n")),(0,a.kt)("h3",{id:"http_port"},"http_port"),(0,a.kt)("p",null,"The HTTP port used by server and client to connect"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<https_port>9999</https_port>\n\n")),(0,a.kt)("h3",{id:"rpc_port"},"rpc_port"),(0,a.kt)("p",null,"The RPC port for server to interact with other components"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<rpc_port>8124</rpc_port>\n\n")),(0,a.kt)("h3",{id:"exchange_port"},"exchange_port"),(0,a.kt)("p",null,"Data transfer port for complex queries (to be considered for merging with rpc_port in the future)"),(0,a.kt)("h3",{id:"exchange_status_port"},"exchange_status_port"),(0,a.kt)("p",null,"Control command port for complex queries (to be considered for merging with rpc_port in the future)"),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"Local data path directory"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<path>/var/lib/clickhouse/</path>\n\n")),(0,a.kt)("h3",{id:"tmp_path"},"tmp_path"),(0,a.kt)("p",null,"Local temporary directory path, used to store temporary data during the query process"),(0,a.kt)("p",null,"Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<tmp_path>/var/lib/clickhouse/tmp/</tmp_path>\n\n")),(0,a.kt)("h3",{id:"users_config"},"users_config"),(0,a.kt)("p",null,"The path to the user-related configuration file."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<users_config>/path/to/userconf/users.xml</users_config>\n\n")),(0,a.kt)("h3",{id:"service-discovery"},"Service discovery"),(0,a.kt)("p",null,"Configure other components (including other servers) that communicate with the server process. Other components that interact with the server are server, tso, daemon manager, virtual warehouse and resource manager"),(0,a.kt)("p",null,"keys",(0,a.kt)("strong",{parentName:"p"},":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," : service discovery mode, optional configuration parameters are local , dns, consul"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cluster")," : cluster name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disable_cache")," : If configured as false, caching will be enabled to reduce the number of calls to service discovery"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cache_timeout")," : cache expiration time")),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<service_discovery>\n    <mode>dns</mode>\n    <cluster>default</cluster>\n        <disable_cache>false</disable_cache>\n        <cache_timeout>5</cache_timeout>\n    <server>\n        <psm>data.cnch.server</psm>\n        <service>cnch-server-pp</service>\n        <headless_service>cnch-server-pp-headless</headless_service>\n    </server>\n    <tso>\n        <psm>data.cnch.tso</psm>\n        <service>cnch-tso</service>\n        <headless_service>cnch-tso-headless</headless_service>\n    </tso>\n    <vw>\n        <psm>data.cnch.vw</psm>\n    </vw>\n    <daemon_manager>\n        <psm>data.cnch.daemon_manager</psm>\n        <service>cnch-daemon-manager</service>\n        <headless_service>cnch-daemon-manager-headless</headless_service>\n    </daemon_manager>\n    <resource_manager>\n        <psm>data.cnch.resource_manager</psm>\n        <service>cnch-resource-manager</service>\n        <headless_service>cnch-resource-manager-headless</headless_service>\n    </resource_manager>\n</service_discovery>\n\n")),(0,a.kt)("h3",{id:"catalog-service"},"Catalog service"),(0,a.kt)("p",null,"Catalog service related configuration"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," : Metadata storage engine type, support bytekv, fdb")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\x3c!-- For foundationDB metastore--\x3e\n<catalog_service>\n    \x3c!--TODO: move name_space into catalog_service tag --\x3e\n    \x3c!--Metastore storage type, support `bytekv` and `fdb`--\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/cluster_config</cluster_file>\n    </fdb>\n</catalog_service>\n\n")),(0,a.kt)("h3",{id:""}),(0,a.kt)("h2",{id:"hdfs-configuration-parameters"},"HDFS configuration parameters"),(0,a.kt)("p",null,"When starting the service, the configuration items will be detected in the order of cfs_addr>hdfs_addr>hdfs_ha_nameservice>hdfs_nnproxy. Once a configuration item configuration is hit, the corresponding configuration item will be used to access HDFS"),(0,a.kt)("h3",{id:"hdfs_user"},"hdfs_user"),(0,a.kt)("p",null,"The name of the user used by default when accessing HDFS, the default is clickhouse"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs_user>clickhouse</hdfs_user>\n\n")),(0,a.kt)("h3",{id:"cfs_addr"},"cfs_addr"),(0,a.kt)("p",null,"The address of the cfs service, the format is cfs://service_url"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cfs_addr>cfs://service_url</cfs_addr>\n\n")),(0,a.kt)("h3",{id:"hdfs_addr"},"hdfs_addr"),(0,a.kt)("p",null,"The address of hdfs service, the format is hdfs://nnip:nnport/path"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs_addr>hdfs://nnip:nnport/path</hdfs_addr>\n\n")),(0,a.kt)("h3",{id:"hdfs_ha_nameservice"},"hdfs_ha_nameservice"),(0,a.kt)("p",null,"The name of the hdfs service needs to be configured in advance in the configuration file of libhdfs3"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs_ha_nameservice>hdfs_service</hdfs_ha_nameservice>\n\n")),(0,a.kt)("h3",{id:"hdfs_nnproxy"},(0,a.kt)("del",{parentName:"h3"},"hdfs_nnproxy")),(0,a.kt)("p",null,(0,a.kt)("del",{parentName:"p"},"The name of nnproxy used by default when accessing ~"),"~HDFS",(0,a.kt)("del",{parentName:"p"}),", default nnproxy~~"),(0,a.kt)("p",null,(0,a.kt)("del",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~~<hdfs_nnproxy>nnproxy</hdfs_nnproxy>~~\n\n")),(0,a.kt)("h3",{id:"storage_configuration"},"storage_configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The next configuration level corresponds to the storage_configuration configuration level in the configuration file")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"storage_configuration"),(0,a.kt)("li",{parentName:"ul"},"cnch_default_policy, specifies the StoragePolicy used by ByConity to store actual data, an optional configuration item, the default is cnch_default_hdfs, and this StoragePolicy should only include HDFSDisk"),(0,a.kt)("li",{parentName:"ul"},"When creating a table, for a ByConity table, if the storage_policy MergeTreeSettings is not specified, it will be changed to ${cnch_default_policy} by default"),(0,a.kt)("li",{parentName:"ul"},"cnch_auxility_policy, specifies the StoragePolicy used by ByConity to store temporary data on the local disk, optional configuration item, the default is default"),(0,a.kt)("li",{parentName:"ul"},"disks"),(0,a.kt)("li",{parentName:"ul"},"${DISK_NAME}"),(0,a.kt)("li",{parentName:"ul"},"type, the type of this disk, optional configuration item, the default is local"),(0,a.kt)("li",{parentName:"ul"},"ByConity supports the selection of two disks, hdfs/bytehdfs, as remote storage. Currently, only a single Disk is supported in the StoragePolicy"),(0,a.kt)("li",{parentName:"ul"},"In order to be compatible with the internal configuration, hdfs/bytehdfs are resolved to the internal bytehdfs Disk, and the type of the community version HDFSDisk is renamed to communityhdfs"),(0,a.kt)("li",{parentName:"ul"},"The configuration items of HDFSDisk specified by the StoragePolicy used by ByConity should be the same in all Server/Worker configuration files"),(0,a.kt)("li",{parentName:"ul"},"path"),(0,a.kt)("li",{parentName:"ul"},"Which path of this Disk will the data be stored in, required configuration items"),(0,a.kt)("li",{parentName:"ul"},"hdfs_params"),(0,a.kt)("li",{parentName:"ul"},"A new optional configuration item for disks of type bytehdfs, including the following parameters"),(0,a.kt)("li",{parentName:"ul"},"hdfs_user, the user used to connect to hdfs, an optional configuration item, the default is clickhouse"),(0,a.kt)("li",{parentName:"ul"},"cfs_addr, the address of cfs, an optional configuration item, this configuration item needs to be configured only when using cfs"),(0,a.kt)("li",{parentName:"ul"},"hdfs_addr, the namenode address of hdfs, optional configuration items, such as hdfs://nnip:nnport/path"),(0,a.kt)("li",{parentName:"ul"},"hdfs_ha_nameservice, an optional configuration item. If you need to use hdfs HA, you can use this configuration item to specify the corresponding service. The corresponding hdfs configuration needs to be configured through the hdfs3_config configuration file"),(0,a.kt)("li",{parentName:"ul"},"hdfs_nnproxy, nnproxy address of hdfs, optional configuration item, default is nnproxy"),(0,a.kt)("li",{parentName:"ul"},"If DiskByteHDFS does not configure the hdfs_params configuration item, it will find the global configuration item in the configuration file, such as the value of the hdfs_user configuration item in the configuration file"),(0,a.kt)("li",{parentName:"ul"},"policies"),(0,a.kt)("li",{parentName:"ul"},"${STORAGE_POLICY_NAME}"),(0,a.kt)("li",{parentName:"ul"},"volumes"),(0,a.kt)("li",{parentName:"ul"},"${VOLUME_NAME}"),(0,a.kt)("li",{parentName:"ul"},"default, the default disk in this Volume, a required configuration item, the default disk will be used to store some data that does not support multi-disk storage, such as metastore, etc."),(0,a.kt)("li",{parentName:"ul"},"disk, the name of all the disks contained in this Volume, the required configuration items, the corresponding Disk needs to be configured in storage_configuration.disks")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"configuration demo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<storage_configuration>\n    <disks>\n        <default></default>\n        <server_local_disk1>\n            <path>/home/ch_test_service/service_test_env/server_data1/</path>\n        </server_local_disk1>\n        <server_local_disk2>\n            <path>/home/ch_test_service/service_test_env/server_data2/</path>\n        </server_local_disk2>\n        <server_hdfs_disk0>\n            <path>/user/cnch/</path>\n            <type>bytehdfs</type>\n        </server_hdfs_disk0>\n    </disks>\n    <policies>\n        <default>\n            <volumes>\n                <local>\n                    <default>default</default>\n                    <disk>default</disk>\n                    <disk>server_local_disk1</disk>\n                    <disk>server_local_disk2</disk>\n                </local>\n            </volumes>\n        </default>\n        <cnch_default_hdfs>\n            <volumes>\n                <hdfs>\n                    <default>server_hdfs_disk0</default>\n                    <disk>server_hdfs_disk0</disk>\n                </hdfs>\n            </volumes>\n        </cnch_default_hdfs>\n    </policies>\n</storage_configuration>\n\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In order to be compatible with the internal configuration items of the old version, if the user only specifies a StoragePolicy of default, which also includes two volumes of hdfs and local, then this configuration item will be parsed into two StoragePolicy, one is default, but only contains The local volume, the other is ${cnch_default_policy}, which only includes the hdfs volume")),(0,a.kt)("h3",{id:"hdfs3_config"},"hdfs3_config"),(0,a.kt)("p",null,"libhdfs3 configuration doc path"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<hdfs3_config>/path/to/conf/hdfs3.xml</hdfs3_config>\n\n")),(0,a.kt)("h3",{id:"disk_cache_strategies"},"disk_cache_strategies"),(0,a.kt)("p",null,"Configure the disk cache strategy, including two different strategies: simple and lru:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lru"),", LRUCache elimination policy related configuration"),(0,a.kt)("li",{parentName:"ul"},"lru_max_size, the maximum size of DiskCache, the default is 2T"),(0,a.kt)("li",{parentName:"ul"},"random_drop_threshold, the cache queue has a length limit. When the queue length reaches a certain percentage, cache requests will be discarded with a certain probability to avoid large table scans causing the cache queue to be full. The default is 50%"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"simple"),", Cache policy related configuration"),(0,a.kt)("li",{parentName:"ul"},"segment_size, the granularity of DiskCache, the default is 8192, that is, up to 8192 GranuleCaches of a ColumnStream form a DiskCacheSegment"),(0,a.kt)("li",{parentName:"ul"},"hits_to_cache, the threshold of data start Cache, the default is 2")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<disk_cache_strategies>\n    <simple>\n        <lru_max_size>1099511627776</lru_max_size>\n    </simple>\n</disk_cache_strategies>\n\n")),(0,a.kt)("h3",{id:"cnch_kafka_log"},"cnch_kafka_log"),(0,a.kt)("p",null,"After configuration, ByConity will open kafka_log, and the consumption log can be viewed through the system table"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_kafka_log>\n    <database>cnch_system</database>\n    <table>cnch_kafka_log</table>\n    <flush_max_row_count>10000</flush_max_row_count>\n    <flush_interval_milliseconds>7500</flush_interval_milliseconds>\n</cnch_kafka_log>\n\n")),(0,a.kt)("h3",{id:"brpc"},"brpc"),(0,a.kt)("h3",{id:"cnch_transaction_cleaner_max_threads"},"cnch_transaction_cleaner_max_threads"),(0,a.kt)("p",null,"The thread pool size of ByConity background cleaning transaction record, the default is 128"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_transaction_cleaner_max_threads>128</cnch_transaction_cleaner_max_threads>\n\n")),(0,a.kt)("h3",{id:"cnch_transaction_cleaner_queue_size"},"cnch_transaction_cleaner_queue_size"),(0,a.kt)("p",null,"The thread pool queue size of ByConity background cleaning transaction record, the default is 10000"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_transaction_cleaner_queue_size>10000</cnch_transaction_cleaner_queue_size>\n\n")),(0,a.kt)("h3",{id:"dance_merge_selector"},"dance_merge_selector"),(0,a.kt)("p",null,"Configure self-developed merge selection strategy parameters"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dance_merge_selector>\n    <max_total_rows_to_merge>10000000</max_total_rows_to_merge>\n</dance_merge_selector>\n\n")),(0,a.kt)("h3",{id:"exchange_timeout_ms"},"exchange_timeout_ms"),(0,a.kt)("p",null,"Complex query data transfer rpc timeout, default 100000"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<exchange_timeout_ms>100000</exchange_timeout_ms>\n\n")),(0,a.kt)("h3",{id:"zookeeper"},"zookeeper"),(0,a.kt)("p",null,"Configure zookeeper (optional), when using clickhouse keeper, it needs to be empty"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<zookeeper></zookeeper>\n\n")),(0,a.kt)("h2",{id:"tso-configuration-parameters"},"TSO configuration parameters"),(0,a.kt)("h3",{id:"tso_service"},"tso_service"),(0,a.kt)("p",null,"Configure tso service, including service port, metadata storage, keeper, etc."),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"port"),": TSO service TCP port"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"keeper"),": tso, server_master and other components leader election service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type"),": TSO metadata storage engine")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<tso_service>\n    <port>8080</port>\n    <keeper>\n        <port>2181</port>\n    </keeper>\n    \x3c!-- Support for CNCH-CE Merge. Metastore store type, support `bytekv` and `fdb` --\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/conf/fdb.cluster</cluster_file>>\n    </fdb>\n </tso_service>\n\n")),(0,a.kt)("h3",{id:"keeper_server"},"keeper_server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"path: keeper data storage path")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<path>/var/lib/tso_server/keeper/</path>\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keeper_server"),(0,a.kt)("li",{parentName:"ul"},"tcp_port: tcp port of the keeper service"),(0,a.kt)("li",{parentName:"ul"},"server_id: the id of the leader election inside the keeper, which needs to be of type int"),(0,a.kt)("li",{parentName:"ul"},"log_storage_path: keeper log storage path"),(0,a.kt)("li",{parentName:"ul"},"snapshot_storage_path: keeper snapshot storage path"),(0,a.kt)("li",{parentName:"ul"},"coordination_settings: support customized keeper settings"),(0,a.kt)("li",{parentName:"ul"},"raft_configuration: optional, supports reading keeper nodes from configuration files. If you use service discovery to read the keeper node, you cannot configure this configuration item"),(0,a.kt)("li",{parentName:"ul"},"id: Same as above server_id"),(0,a.kt)("li",{parentName:"ul"},"hostname: ip address"),(0,a.kt)("li",{parentName:"ul"},"port: keeper internal communication port, different from tcp_port")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<keeper_server>\n    <tcp_port>9181</tcp_port>\n    <server_id>1</server_id>\n    <log_storage_path>/var/lib/tso_server/keeper/log</log_storage_path>\n    <snapshot_storage_path>/var/lib/tso_server/keeper1/snapshots</snapshot_storage_path>\n\n    <coordination_settings>\n        <operation_timeout_ms>10000</operation_timeout_ms>\n        <session_timeout_ms>30000</session_timeout_ms>\n        <raft_logs_level>warning</raft_logs_level>\n        <compress_logs>0</compress_logs>\n    </coordination_settings>\n\x3c!--\n    <raft_configuration>\n        <server>\n            <id>1</id>\n            <hostname>host0</hostname>\n            <port>9445</port>\n        </server>\n        <server>\n            <id>2</id>\n            <hostname>host1</hostname>\n            <port>9445</port>\n        </server>\n        <server>\n            <id>3</id>\n            <hostname>host2</hostname>\n            <port>9445</port>\n        </server>\n    </raft_configuration>\n--\x3e\n</keeper_server>\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"zookeeper")),(0,a.kt)("p",null,"Configure zookeeper to enable leader election, or obtain zookeeper node information through service discovery. In this case, you need to configure an empty zookeeper label"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<zookeeper>\n    \x3c!--\n    <node index="1">\n        <host>host0</host>\n        <port>9181</port>\n    </node>\n    --\x3e\n</zookeeper>\n\n')),(0,a.kt)("h3",{id:"service_discovery"},"service_discovery"),(0,a.kt)("p",null,"Service discovery related configuration, the highly available TSO process obtains other TSO server addresses and ports for communication through service discovery"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," : Like other modules service discovery, it supports dns, consul, local and other modes")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<service_discovery>\n    <mode>dns</mode>\n    <tso>\n        <psm>data.cnch.tso</psm>\n        <service>cnch-tso</service>\n        <headless_service>cnch-tso-headless</headless_service>\n    </tso>\n</service_discovery>\n\n")),(0,a.kt)("h2",{id:"daemon-manager-configuration-parameters"},"Daemon Manager configuration parameters"),(0,a.kt)("h3",{id:"daemon_manager"},"daemon_manager"),(0,a.kt)("p",null,"Configure daemon manager process ports and information about scheduling background tasks"),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pport: DM process TCP port"),(0,a.kt)("li",{parentName:"ul"},"http: DM process http port and other configurations"),(0,a.kt)("li",{parentName:"ul"},"workload_thread_interval_ms: The time interval for background task scheduling"),(0,a.kt)("li",{parentName:"ul"},"daemon_jobs: The type and configuration of background tasks that DM is responsible for scheduling. Schedulable task types include: PART_GC, PART_MERGE, CONSUMER, GLOBAL_GC, TXN_GC, etc.")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<daemon_manager>\n    <port>8090</port>\n    <http>\n        <port>8091</port>\n        <receive_timeout>1800</receive_timeout>\n        <send_timeout>1800</send_timeout>\n    </http>\n    <workload_thread_interval_ms>1000</workload_thread_interval_ms>\n    <daemon_jobs>\n        <job>\n            <name>PART_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>PART_MERGE</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>CONSUMER</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>GLOBAL_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>50000</interval>\n        </job>\n        <job>\n            <name>TXN_GC</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>600000</interval>\n        </job>\n        <job>\n            <name>DEDUP_WORKER</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n        <job>\n            <name>PART_CLUSTERING</name>\n            \x3c!-- Interval in millisecond --\x3e\n            <interval>10000</interval>\n        </job>\n    </daemon_jobs>\n</daemon_manager>\n\n")),(0,a.kt)("h3",{id:"cnch_data_retention_time_in_sec"},"cnch_data_retention_time_in_sec"),(0,a.kt)("p",null,"The retention time of deleted tables and databases before being completely cleaned up, defaults to 3 days. During this period, users can recover deleted data."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<cnch_data_retention_time_in_sec>86400</cnch_data_retention_time_in_sec>\n\n")),(0,a.kt)("h2",{id:"resource-manager-configuration-parameters"},"Resource Manager configuration parameters"),(0,a.kt)("h3",{id:"resource_manager"},"resource_manager"),(0,a.kt)("p",null,"Configure resource manager process port, initial VW configuration and other information."),(0,a.kt)("p",null,"Keys\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"port: "),"The port number where the service starts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vws: ")," Initially configured VW related information")),(0,a.kt)("p",null,"Example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<resource_manager>\n    <port>18989</port>\n    <vws>\n        <vw>\n            <name>vw_default</name>\n            <type>Default</type>\n            <num_workers>1</num_workers>\n            <worker_groups>\n                <worker_group>\n                    <name>wg_default</name>\n                    <type>Physical</type>\n                </worker_group>\n            </worker_groups>\n        </vw>\n    </vws>\n</resource_manager>\n\n")),(0,a.kt)("h3",{id:"catalog"},"catalog"),(0,a.kt)("p",null,"Catalog related configuration."),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name_space")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<name_space>default</name_space>\n\n")),(0,a.kt)("h3",{id:"catalog_service"},"catalog_service"),(0,a.kt)("p",null,"catalog_service related configuration."),(0,a.kt)("p",null,"Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - catalog service type")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\x3c!-- For foundationDB metastore--\x3e\n<catalog_service>\n    \x3c!--TODO: move name_space into catalog_service tag --\x3e\n    \x3c!--Metastore storage type, support `bytekv` and `fdb`--\x3e\n    <type>fdb</type>\n    <fdb>\n        <cluster_file>/path/to/fdb/cluster_config</cluster_file>\n    </fdb>\n</catalog_service>\n\n")))}d.isMDXComponent=!0}}]);