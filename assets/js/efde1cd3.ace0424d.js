"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7429],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=u(n),d=r,m=y["".concat(s,".").concat(d)]||y[d]||p[d]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(4778),r=(n(9496),n(9613));const l={title:"Deploy ByConity in Kubernetes",tags:["Docs"]},o="Deploy ByConity in Kubernetes",i={unversionedId:"quick-start/deploy-byconity-with-k8s",id:"quick-start/deploy-byconity-with-k8s",title:"Deploy ByConity in Kubernetes",description:"This page demonstrates how to deploy a ByConity cluster in your Kubernetes cluster.",source:"@site/docs/quick-start/deploy-byconity-with-k8s.mdx",sourceDirName:"quick-start",slug:"/quick-start/deploy-byconity-with-k8s",permalink:"/docs/quick-start/deploy-byconity-with-k8s",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/quick-start/deploy-byconity-with-k8s.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Deploy ByConity in Kubernetes",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Basic Database Operations",permalink:"/docs/quick-start/basic-database-operations"},next:{title:"ByConity development environment",permalink:"/docs/quick-start/set-up-byconity-dev-env"}},s={},u=[{value:"Deploy local to try a demo",id:"deploy-local-to-try-a-demo",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Use Kind to configure a local Kubernetes cluster",id:"use-kind-to-configure-a-local-kubernetes-cluster",level:3},{value:"Initialize the Byconity demo cluster",id:"initialize-the-byconity-demo-cluster",level:3},{value:"Delete or stop ByConity from your Kubernetes cluster",id:"delete-or-stop-byconity-from-your-kubernetes-cluster",level:3},{value:"Deploy in your self-built Kubernetes",id:"deploy-in-your-self-built-kubernetes",level:2},{value:"How to deploy or buy a Kubernetes cluster?",id:"how-to-deploy-or-buy-a-kubernetes-cluster",level:3},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Prepare your storage provider",id:"prepare-your-storage-provider",level:3},{value:"Prepare your own helm values files",id:"prepare-your-own-helm-values-files",level:3},{value:"Initialize the Byconity cluster",id:"initialize-the-byconity-cluster",level:3},{value:"Test",id:"test",level:2},{value:"Run some SQLs to test",id:"run-some-sqls-to-test",level:3},{value:"Update your Byconity cluster",id:"update-your-byconity-cluster",level:2},{value:"Add new virtual warehouses",id:"add-new-virtual-warehouses",level:3},{value:"Scaling up and down the existing VirtualWareHouse",id:"scaling-up-and-down-the-existing-virtualwarehouse",level:3},{value:"Configure ByConity high availability cluster (optional)",id:"configure-byconity-high-availability-cluster-optional",level:2}],c={toc:u},y="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-byconity-in-kubernetes"},"Deploy ByConity in Kubernetes"),(0,r.kt)("p",null,"This page demonstrates how to deploy a ByConity cluster in your Kubernetes cluster."),(0,r.kt)("h2",{id:"deploy-local-to-try-a-demo"},"Deploy local to try a demo"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install and setup ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," in your local environment"),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," in your local environment"),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind")," and ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,r.kt)("li",{parentName:"ul"},"Check out byconity-deploy code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:ByConity/byconity-deploy.git\ncd byconity-deploy\n")),(0,r.kt)("h3",{id:"use-kind-to-configure-a-local-kubernetes-cluster"},"Use Kind to configure a local Kubernetes cluster"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Warning: kind is not designed for production use.\nNote for macOS users: you may need to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/get-started/#resources"},"increase the memory available")," for containers (recommend 6 GB).")),(0,r.kt)("p",null,"This would create a 1-control-plane, 3-worker Kubernetes cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --config examples/kind/kind-byconity.yaml\n")),(0,r.kt)("p",null,"Test to ensure the local kind cluster is ready:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cluster-info\n")),(0,r.kt)("h3",{id:"initialize-the-byconity-demo-cluster"},"Initialize the Byconity demo cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install with fdb CRD first\nhelm upgrade --install --create-namespace --namespace byconity -f ./examples/kind/values-kind.yaml byconity ./chart/byconity --set fdb.enabled=false\n\n# Install with fdb cluster\nhelm upgrade --install --create-namespace --namespace byconity -f ./examples/kind/values-kind.yaml byconity ./chart/byconity\n")),(0,r.kt)("p",null,"Wait until all the pods are ready."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n byconity get po\n")),(0,r.kt)("p",null,"Let's try it out!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n byconity exec -it sts/byconity-server -- bash\nroot@byconity-server-0:/# clickhouse client\n\n172.16.1.1 :)\n")),(0,r.kt)("h3",{id:"delete-or-stop-byconity-from-your-kubernetes-cluster"},"Delete or stop ByConity from your Kubernetes cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall --namespace byconity byconity\n")),(0,r.kt)("p",null,"In case you want to stop it temporarily stop it on your machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop byconity-cluster-control-plane byconity-cluster-worker byconity-cluster-worker2 byconity-cluster-worker3\n")),(0,r.kt)("h2",{id:"deploy-in-your-self-built-kubernetes"},"Deploy in your self-built Kubernetes"),(0,r.kt)("h3",{id:"how-to-deploy-or-buy-a-kubernetes-cluster"},"How to deploy or buy a Kubernetes cluster?"),(0,r.kt)("p",null,"You can get information here: ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/"},"Production environment")),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install and setup ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," in your local environment"),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," in your local environment")),(0,r.kt)("h3",{id:"prepare-your-storage-provider"},"Prepare your storage provider"),(0,r.kt)("p",null,"For best ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Total_cost_of_ownership"},"TCO")," with performance, local disks are preferred to be used with ByConity servers and workers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Storage for ByConity servers and workers is for disk cache only, you can delete them any time.")),(0,r.kt)("p",null,"You may use storage providers like ",(0,r.kt)("a",{parentName:"p",href:"https://openebs.io/docs/concepts/localpv"},"OpenEBS local PV"),"."),(0,r.kt)("h3",{id:"prepare-your-own-helm-values-files"},"Prepare your own helm values files"),(0,r.kt)("p",null,"You may copy from ./chart/byconity/values.yaml and modify some fields like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"storageClassName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"timezone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"replicas for server/worker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hdfs storage request"),(0,r.kt)("p",{parentName:"li"},"if you want to use your own existing hdfs cluster please set hdfs.enabled=true\nyou can override the hdfs address configuration in values.yaml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dash"},"byconity:\n  hdfs_address: hdfs://your own hdfs:port\nhdfs:\n  enabled: false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fdb configuration"),(0,r.kt)("p",{parentName:"li"},"if you want to use your own fdb. please set fdb.enabled=false and fdb-operator.enabled=false\nyou can refer to values_use_existing_fdb.yaml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dash"},"byconity:\n  hdfs_address: hdfs://byconity-hdfs-namenodes:8020 # can using your own hdfs\n  use_existing_fdb: true\n  fdb_cluster_file: your fdb-cluster-file content. #byconity_fdb:Is0hBgl6iICdHuspBmhAODmD5WISXKzI@192.168.224.150:4501,192.168.226.83:4501,192.168.228.152:4501\nfdb:\n  enabled: false\nfdb-operator:\n  enabled: false\n")),(0,r.kt)("h3",{id:"initialize-the-byconity-cluster"},"Initialize the Byconity cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install with fdb CRD first\nhelm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity --set fdb.enabled=false\n\n# Install with fdb cluster\nhelm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity\n")),(0,r.kt)("p",null,"Wait until all the pods are ready."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n byconity get po\n")),(0,r.kt)("p",null,"Let's try it out!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n byconity exec -it sts/byconity-server -- bash\nroot@byconity-server-0:/# clickhouse client\n\n172.16.1.1 :)\n")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("h3",{id:"run-some-sqls-to-test"},"Run some SQLs to test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS test;\nUSE test;\nDROP TABLE IF EXISTS test.lc;\nCREATE TABLE test.lc (b LowCardinality(String)) engine=CnchMergeTree ORDER BY b;\nINSERT INTO test.lc SELECT '0123456789' FROM numbers(100000000);\nSELECT count(), b FROM test.lc group by b;\nDROP TABLE IF EXISTS test.lc;\nDROP DATABASE test;\n")),(0,r.kt)("h2",{id:"update-your-byconity-cluster"},"Update your Byconity cluster"),(0,r.kt)("h3",{id:"add-new-virtual-warehouses"},"Add new virtual warehouses"),(0,r.kt)("p",null,"Assume you want to add 2 virtual warehouses for your users, 5 replicas for ",(0,r.kt)("inlineCode",{parentName:"p"},"my-new-vw-default")," to read and 2 replicas for ",(0,r.kt)("inlineCode",{parentName:"p"},"my-new-vw-write")," to write."),(0,r.kt)("p",null,"Modify your values.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"byconity:\n  virtualWarehouses:\n    ...\n\n    - <<: *defaultWorker\n      name: my-new-vw-default\n      replicas: 5\n    - <<: *defaultWorker\n      name: my-new-vw-write\n      replicas: 2\n")),(0,r.kt)("p",null,"Apply your helm release with your new values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE WAREHOUSE")," DDL to create logic virtual warehouse in Byconity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WAREHOUSE IF NOT EXISTS `my-new-vw-default` SETTINGS num_workers = 0, type = 'Read';\nCREATE WAREHOUSE IF NOT EXISTS `my-new-vw-write` SETTINGS num_workers = 0, type = 'Write';\n")),(0,r.kt)("p",null,"Done. Let's create a table and use your new virtual warehouse now!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create a table with SETTINGS cnch_vw_default = 'my-new-vw-default', cnch_vw_write = 'my-new-vw-write'\nCREATE DATABASE IF NOT EXISTS test;\nCREATE TABLE test.lc2 (b LowCardinality(String)) engine=CnchMergeTree\nORDER BY b\nSETTINGS cnch_vw_default = 'my-new-vw-default', cnch_vw_write = 'my-new-vw-write';\n\n-- Check if the table has the new settings\nSHOW CREATE TABLE test.lc2;\n")),(0,r.kt)("h3",{id:"scaling-up-and-down-the-existing-virtualwarehouse"},"Scaling up and down the existing VirtualWareHouse"),(0,r.kt)("p",null,"Assuming you have a 'my-new-vw-default' and you want to scale up by adding 2 workers, you can directly update the Kubernetes resource object 'StatefulSet'."),(0,r.kt)("p",null,"First, use the following command to retrieve the names of all StatefulSet resources in the current Kubernetes cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get statefulset\n")),(0,r.kt)("p",null,"Then, locate and open the configuration file, and make the following modifications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit statefulset.apps/my-new-vw-default\n")),(0,r.kt)("p",null,"Change the configuration from 'replicas: 1' to 'replicas: 2'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  podManagementPolicy: OrderedReady\n  replicas: 2   #change 1 to 2 \n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      app.kubernetes.io/instance: byconity\n      app.kubernetes.io/name: byconity\n      byconity-role: worker\n      byconity-vw: vw_default\n  serviceName: my-new-vw-default\n")),(0,r.kt)("p",null,"After updating, you can use 'kubectl' to check that the VirtualWarehouse has been scaled up and now includes 2 workers."),(0,r.kt)("h2",{id:"configure-byconity-high-availability-cluster-optional"},"Configure ByConity high availability cluster (optional)"),(0,r.kt)("p",null,"To enable high availability in the ByConity cluster, you need to enable the zookeeper configuration for all components. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByConity/byconity-deploy/blob/master/chart/byconity/files/server.yaml#L96"},"server.yaml")),(0,r.kt)("p",null,"To enable zookeeper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  partition_by: event_date\n  flush_interval_milliseconds: 15000\n  mark_cache_size: 5368709120  \n  zookeeper: {} # enable zookeeper\n  cnch_config: /etc/byconity/cnch-config.yaml\n")),(0,r.kt)("p",null,"The official provides a Helm configuration YAML file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByConity/byconity-deploy/blob/master/examples/k8s/value_HA_example.yaml"},"value_HA_example.yaml")," for high availability."),(0,r.kt)("p",null,"Use helm upgrade to update cluster\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity\n")))}p.isMDXComponent=!0}}]);