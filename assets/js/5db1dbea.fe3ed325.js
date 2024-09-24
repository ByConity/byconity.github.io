"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[5618],{49613:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(59496);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(i),y=r,h=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return i?n.createElement(h,a(a({ref:t},p),{},{components:i})):n.createElement(h,a({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},96823:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(64778),r=(i(59496),i(49613));const o={title:"High Availability",sidebar_position:4,tags:["Docs"]},a="High Availability",l={unversionedId:"admin-guides/high-availability",id:"version-0.3.0/admin-guides/high-availability",title:"High Availability",description:'ByConity supports deploying multiple ByConity Server, Resource Manager, and TSO processes within the same cluster to achieve high availability. This is achieved by determining the leader through a "Compare And Swap" operation in the shared FoundationDB.',source:"@site/versioned_docs/version-0.3.0/admin-guides/high-availability.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/high-availability",permalink:"/docs/0.3.0/admin-guides/high-availability",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.3.0/admin-guides/high-availability.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:4,frontMatter:{title:"High Availability",sidebar_position:4,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Scaling",permalink:"/docs/0.3.0/admin-guides/scale-up-down"},next:{title:"Monitor",permalink:"/docs/0.3.0/admin-guides/monitoring"}},s={},c=[{value:"Deployment Based on Kubernetes Cluster",id:"deployment-based-on-kubernetes-cluster",level:2},{value:"Other Deployment Methods",id:"other-deployment-methods",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"high-availability"},"High Availability"),(0,r.kt)("p",null,'ByConity supports deploying multiple ByConity Server, Resource Manager, and TSO processes within the same cluster to achieve high availability. This is achieved by determining the leader through a "Compare And Swap" operation in the shared FoundationDB.'),(0,r.kt)("p",null,"In general, you can launch any number of ByConity Server, Resource Manager, or TSO service processes based on your requirements. Multiple Servers will automatically distribute the load of metadata management and access using consistent hashing. Multiple Resource Manager or TSO processes will elect one leader to provide the service. Specifically:"),(0,r.kt)("h2",{id:"deployment-based-on-kubernetes-cluster"},"Deployment Based on Kubernetes Cluster"),(0,r.kt)("p",null,"When deploying the ByConity cluster using this approach, you can simply adjust the replica count for each service component, as shown in the following example:"),(0,r.kt)("p",null,"An official high-availability Helm configuration YAML file, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByConity/byconity-deploy/blob/master/examples/k8s/value_HA_example.yaml"},"value_HA_example.yaml"),", is provided for reference. You can flexibly increase or decrease replicas as needed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl scale")," command."),(0,r.kt)("h2",{id:"other-deployment-methods"},"Other Deployment Methods"),(0,r.kt)("p",null,'For manual deployment of the ByConity cluster without Kubernetes support, you can launch additional replica service processes with different listening addresses and log paths for expansion, or stop them for contraction. When the replica count for the ByConity component "server" is changed, remember to update the service discovery information in the cnch-config configuration file, as demonstrated here: ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/blob/67e2eaab6d5b9c646a336619b2b5500203efc4fd/docker/docker-compose/byconity-multi-cluster/cnch-config.yml"},"cnch-config.yml"),"."))}d.isMDXComponent=!0}}]);