"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1983],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),k=r,m=p["".concat(c,".").concat(k)]||p[k]||y[k]||a;return n?l.createElement(m,o(o({ref:t},u),{},{components:n})):l.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(4778),r=(n(9496),n(9613));const a={title:"\u5728 Kubernetes \u4e0a\u90e8\u7f72 ByConity",tags:["Docs"]},o="\u5728 Kubernetes \u4e0a\u90e8\u7f72 ByConity",i={unversionedId:"deployment/deploy-k8s",id:"deployment/deploy-k8s",title:"\u5728 Kubernetes \u4e0a\u90e8\u7f72 ByConity",description:"\u672c\u6587\u6f14\u793a\u4e86\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u90e8\u7f72 ByConity \u96c6\u7fa4\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/deploy-k8s.mdx",sourceDirName:"deployment",slug:"/deployment/deploy-k8s",permalink:"/zh-cn/docs/deployment/deploy-k8s",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/deployment/deploy-k8s.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",frontMatter:{title:"\u5728 Kubernetes \u4e0a\u90e8\u7f72 ByConity",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Joining the ByConity Technical Steering Committee",permalink:"/zh-cn/docs/community/tsc-membership"},next:{title:"\u4f7f\u7528 docker wrapper \u5c06 ByConity \u90e8\u7f72\u5230\u7269\u7406\u670d\u52a1\u5668",permalink:"/zh-cn/docs/deployment/docker-wrapper"}},c={},s=[{value:"\u672c\u5730\u90e8\u7f72\u4e00\u4e2a demo",id:"\u672c\u5730\u90e8\u7f72\u4e00\u4e2a-demo",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"\u4f7f\u7528 Kind \u914d\u7f6e\u672c\u5730 Kubernetes \u96c6\u7fa4",id:"\u4f7f\u7528-kind-\u914d\u7f6e\u672c\u5730-kubernetes-\u96c6\u7fa4",level:3},{value:"\u521d\u59cb\u5316 Byconity \u6f14\u793a\u96c6\u7fa4",id:"\u521d\u59cb\u5316-byconity-\u6f14\u793a\u96c6\u7fa4",level:3},{value:"\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u5220\u9664\u6216\u505c\u6b62 ByConity",id:"\u4ece-kubernetes-\u96c6\u7fa4\u4e2d\u5220\u9664\u6216\u505c\u6b62-byconity",level:3},{value:"\u90e8\u7f72\u5728\u60a8\u81ea\u5efa\u7684 Kubernetes \u4e2d",id:"\u90e8\u7f72\u5728\u60a8\u81ea\u5efa\u7684-kubernetes-\u4e2d",level:2},{value:"\u5982\u4f55\u90e8\u7f72\u6216\u8d2d\u4e70 Kubernetes \u96c6\u7fa4\uff1f",id:"\u5982\u4f55\u90e8\u7f72\u6216\u8d2d\u4e70-kubernetes-\u96c6\u7fa4",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u51c6\u5907\u60a8\u7684\u5b58\u50a8",id:"\u51c6\u5907\u60a8\u7684\u5b58\u50a8",level:3},{value:"\u51c6\u5907\u4f60\u81ea\u5df1\u7684 helm \u503c\u6587\u4ef6",id:"\u51c6\u5907\u4f60\u81ea\u5df1\u7684-helm-\u503c\u6587\u4ef6",level:3},{value:"\u521d\u59cb\u5316 Byconity \u96c6\u7fa4",id:"\u521d\u59cb\u5316-byconity-\u96c6\u7fa4",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u8fd0\u884c\u4e00\u4e9b SQL \u6765\u6d4b\u8bd5",id:"\u8fd0\u884c\u4e00\u4e9b-sql-\u6765\u6d4b\u8bd5",level:3},{value:"\u66f4\u65b0\u60a8\u7684 Byconity \u96c6\u7fa4",id:"\u66f4\u65b0\u60a8\u7684-byconity-\u96c6\u7fa4",level:2},{value:"\u6dfb\u52a0\u65b0\u7684\u865a\u62df\u6570\u636e\u4ed3\u5e93",id:"\u6dfb\u52a0\u65b0\u7684\u865a\u62df\u6570\u636e\u4ed3\u5e93",level:3}],u={toc:s},p="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5728-kubernetes-\u4e0a\u90e8\u7f72-byconity"},"\u5728 Kubernetes \u4e0a\u90e8\u7f72 ByConity"),(0,r.kt)("p",null,"\u672c\u6587\u6f14\u793a\u4e86\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u90e8\u7f72 ByConity \u96c6\u7fa4\u3002"),(0,r.kt)("h2",{id:"\u672c\u5730\u90e8\u7f72\u4e00\u4e2a-demo"},"\u672c\u5730\u90e8\u7f72\u4e00\u4e2a demo"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u672c\u5730\u73af\u5883\u4e2d\u5b89\u88c5\u548c\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u672c\u5730\u73af\u5883\u4e2d\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind"),"\u548c",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,r.kt)("li",{parentName:"ul"},"\u7b7e\u51fa conity-deploy \u4ee3\u7801\u67e5\u770b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:ByConity/byconity-deploy.git\ncd byconity-deploy\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528-kind-\u914d\u7f6e\u672c\u5730-kubernetes-\u96c6\u7fa4"},"\u4f7f\u7528 Kind \u914d\u7f6e\u672c\u5730 Kubernetes \u96c6\u7fa4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8b66\u544a\uff1aKind \u4e0d\u662f\u4e3a\u751f\u4ea7\u7528\u9014\u800c\u8bbe\u8ba1\u7684\u3002\nmacOS \u7528\u6237\u8bf7\u6ce8\u610f\uff1a\u60a8\u53ef\u80fd\u9700\u8981\u589e\u52a0\u5bb9\u5668\u7684",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/get-started/#resources"},"\u53ef\u7528\u5185\u5b58"),"\uff08\u5efa\u8bae 6 GB\uff09\u3002")),(0,r.kt)("p",null,"\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a 1-control-plane\u30013-worker \u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --config examples/kind/kind-byconity.yaml\n")),(0,r.kt)("p",null,"\u6d4b\u8bd5\u4ee5\u786e\u4fdd\u672c\u5730 kind \u96c6\u7fa4\u5df2\u51c6\u5907\u5c31\u7eea\uff1a "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl cluster-info\n")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316-byconity-\u6f14\u793a\u96c6\u7fa4"},"\u521d\u59cb\u5316 Byconity \u6f14\u793a\u96c6\u7fa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install with fdb CRD first\nhelm upgrade --install --create-namespace --namespace byconity -f ./examples/kind/values-kind.yaml byconity ./chart/byconity --set fdb.enabled=false\n\n# Install with fdb cluster\nhelm upgrade --install --create-namespace --namespace byconity -f ./examples/kind/values-kind.yaml byconity ./chart/byconity\n")),(0,r.kt)("p",null,"\u7b49\u5230\u6240\u6709 Pod \u51c6\u5907\u5c31\u7eea\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n byconity get po\n")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u8bd5\u8bd5\u5427\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n byconity exec -it sts/byconity-server -- bash\nroot@byconity-server-0:/# clickhouse client\n\n172.16.1.1 :)\n")),(0,r.kt)("h3",{id:"\u4ece-kubernetes-\u96c6\u7fa4\u4e2d\u5220\u9664\u6216\u505c\u6b62-byconity"},"\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u5220\u9664\u6216\u505c\u6b62 ByConity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall --namespace byconity byconity\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u6682\u65f6\u505c\u6b62\u5b83\uff0c\u8bf7\u5728\u60a8\u7684\u673a\u5668\u4e0a\u505c\u6b62\u5b83"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop byconity-cluster-control-plane byconity-cluster-worker byconity-cluster-worker2 byconity-cluster-worker3\n")),(0,r.kt)("h2",{id:"\u90e8\u7f72\u5728\u60a8\u81ea\u5efa\u7684-kubernetes-\u4e2d"},"\u90e8\u7f72\u5728\u60a8\u81ea\u5efa\u7684 Kubernetes \u4e2d"),(0,r.kt)("h3",{id:"\u5982\u4f55\u90e8\u7f72\u6216\u8d2d\u4e70-kubernetes-\u96c6\u7fa4"},"\u5982\u4f55\u90e8\u7f72\u6216\u8d2d\u4e70 Kubernetes \u96c6\u7fa4\uff1f"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u83b7\u53d6\u4fe1\u606f\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/"},"\u751f\u4ea7\u73af\u5883")),(0,r.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u672c\u5730\u73af\u5883\u4e2d\u5b89\u88c5\u548c\u8bbe\u7f6e ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," "),(0,r.kt)("li",{parentName:"ul"},"\u5728\u672c\u5730\u73af\u5883\u4e2d\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," ")),(0,r.kt)("h3",{id:"\u51c6\u5907\u60a8\u7684\u5b58\u50a8"},"\u51c6\u5907\u60a8\u7684\u5b58\u50a8"),(0,r.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Total_cost_of_ownership"},"TCO")," \u548c\u6027\u80fd\uff0c\u672c\u5730\u78c1\u76d8\u6700\u597d\u4e0e ByConity server \u548c worker \u4e00\u8d77\u4f7f\u7528\u3002 "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ByConity server \u548c worker \u7684\u5b58\u50a8\u4ec5\u7528\u4e8e\u78c1\u76d8\u7f13\u5b58\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u5220\u9664\u5b83\u4eec\u3002")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://openebs.io/docs/concepts/localpv"},"OpenEBS local PV")," \u7b49\u5b58\u50a8."),(0,r.kt)("h3",{id:"\u51c6\u5907\u4f60\u81ea\u5df1\u7684-helm-\u503c\u6587\u4ef6"},"\u51c6\u5907\u4f60\u81ea\u5df1\u7684 helm \u503c\u6587\u4ef6"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece ./chart/byconity/values.yaml \u590d\u5236\u5e76\u4fee\u6539\u4e00\u4e9b\u5b57\u6bb5\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7c7b\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u65f6\u533a"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668/\u5de5\u4eba\u7684\u526f\u672c"),(0,r.kt)("li",{parentName:"ul"},"hdfs\u5b58\u50a8\u8bf7\u6c42")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316-byconity-\u96c6\u7fa4"},"\u521d\u59cb\u5316 Byconity \u96c6\u7fa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install with fdb CRD first\nhelm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity --set fdb.enabled=false\n\n# Install with fdb cluster\nhelm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity\n")),(0,r.kt)("p",null,"\u7b49\u5230\u6240\u6709 Pod \u51c6\u5907\u5c31\u7eea\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n byconity get po\n")),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u8bd5\u8bd5\u5427\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n byconity exec -it sts/byconity-server -- bash\nroot@byconity-server-0:/# clickhouse client\n\n172.16.1.1 :)\n")),(0,r.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u4e00\u4e9b-sql-\u6765\u6d4b\u8bd5"},"\u8fd0\u884c\u4e00\u4e9b SQL \u6765\u6d4b\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS test;\nUSE test;\nDROP TABLE IF EXISTS test.lc;\nCREATE TABLE test.lc (b LowCardinality(String)) engine=CnchMergeTree ORDER BY b;\nINSERT INTO test.lc SELECT '0123456789' FROM numbers(100000000);\nSELECT count(), b FROM test.lc group by b;\nDROP TABLE IF EXISTS test.lc;\nDROP DATABASE test;\n")),(0,r.kt)("h2",{id:"\u66f4\u65b0\u60a8\u7684-byconity-\u96c6\u7fa4"},"\u66f4\u65b0\u60a8\u7684 Byconity \u96c6\u7fa4"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u65b0\u7684\u865a\u62df\u6570\u636e\u4ed3\u5e93"},"\u6dfb\u52a0\u65b0\u7684\u865a\u62df\u6570\u636e\u4ed3\u5e93"),(0,r.kt)("p",null,"\u5047\u8bbe\u60a8\u8981\u4e3a\u60a8\u7684\u7528\u6237\u6dfb\u52a0 2 \u4e2a\u865a\u62df\u6570\u636e\u4ed3\u5e93\uff0c5 \u4e2a\u526f\u672c\u7528\u4e8emy-new-vw-default\u8bfb\u53d6\uff0c2 \u4e2a\u526f\u672c\u7528\u4e8emy-new-vw-write\u5199\u5165\u3002"),(0,r.kt)("p",null,"\u4fee\u6539\u4f60\u7684 values.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"byconity:\n  virtualWarehouses:\n    ...\n\n    - <<: *defaultWorker\n      name: my-new-vw-default\n      replicas: 5\n    - <<: *defaultWorker\n      name: my-new-vw-write\n      replicas: 2\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u65b0\u503c\u5e94\u7528 helm \u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity\n")),(0,r.kt)("p",null,"\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE WAREHOUSE")," \u6570\u636e\u5b9a\u4e49\u8bed\u8a00 \u5728Byconity\u521b\u5efa\u903b\u8f91\u865a\u62df\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WAREHOUSE IF NOT EXISTS `my-new-vw-default` SETTINGS num_workers = 0, type = 'Read';\nCREATE WAREHOUSE IF NOT EXISTS `my-new-vw-write` SETTINGS num_workers = 0, type = 'Write';\n")),(0,r.kt)("p",null,"\u5b8c\u6bd5\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u8868\u5e76\u4f7f\u7528\u60a8\u7684\u65b0\u865a\u62df\u6570\u636e\u4ed3\u5e93\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Create a table with SETTINGS cnch_vw_default = 'my-new-vw-default', cnch_vw_write = 'my-new-vw-write'\nCREATE DATABASE IF NOT EXISTS test;\nCREATE TABLE test.lc2 (b LowCardinality(String)) engine=CnchMergeTree\nORDER BY b\nSETTINGS cnch_vw_default = 'my-new-vw-default', cnch_vw_write = 'my-new-vw-write';\n\n-- Check if the table has the new settings\nSHOW CREATE TABLE test.lc2;\n")))}y.isMDXComponent=!0}}]);