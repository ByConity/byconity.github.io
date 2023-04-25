"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7258],{5881:i=>{i.exports=JSON.parse('{"label":"Docs","permalink":"/zh-cn/docs/tags/docs","allTagsPath":"/zh-cn/docs/tags","count":60,"items":[{"id":"sql-syntax/functions/aggregate","title":"Aggregation","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/aggregate"},{"id":"sql-syntax/ansi-compatibility","title":"ANSI Compatibility","description":"ByConity provides a rich set of SQL syntax through ANSI SQL dialect. When using this dialect, SQL statements will be parsed and validated by Apache Calcite and then sent to servers for execution. Apache Calcite supports standard ANSI SQL, please refer to the BNF-grammar here for more details//calcite.apache.org/docs/reference.html.","permalink":"/zh-cn/docs/sql-syntax/ansi-compatibility"},{"id":"sql-syntax/functions/arithmetic","title":"Arithmetic","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/arithmetic"},{"id":"sql-syntax/functions/array","title":"Array","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/array"},{"id":"sql-syntax/functions/bit-bitmap","title":"Bit & Bitmap","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/bit-bitmap"},{"id":"advanced-guide/bucket-table-best-practice","title":"Bucket table \u6700\u4f73\u5b9e\u8df5\u624b\u518c","description":"\u5728 ByConity \u4e2d\u4f7f\u7528 Bucket table \u65f6\uff0c\u7cfb\u7edf\u4f1a\u4f9d\u636e\u7528\u6237\u5efa\u8868\u8bed\u53e5\u4e2d\u63d0\u4f9b\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5217\u3001\u8868\u8fbe\u5f0f\u6574\u7406\u8868\u6570\u636e\uff0c\u5c06\u76f8\u540c\u503c\u7684\u6570\u636e\u805a\u7c07\u5728\u540c\u4e00\u4e2a bucket number \u4e0b\u3002","permalink":"/zh-cn/docs/advanced-guide/bucket-table-best-practice"},{"id":"sql-syntax/functions/comparison","title":"Comparison","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/comparison"},{"id":"sql-syntax/functions/conditional","title":"Conditional","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/conditional"},{"id":"sql-syntax/data-types","title":"Data Types","description":"The data types provided in ByConity are adapted from ClickHouse. Visit this page for more information on ClickHouse data types.","permalink":"/zh-cn/docs/sql-syntax/data-types"},{"id":"sql-syntax/functions/date-times","title":"Date & Times","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/date-times"},{"id":"basic-guide/deploy-k8s","title":"Deploy ByConity in Kubernetes","description":"This repos demonstrates how to deploy a ByConity cluster in your Kubernetes cluster.","permalink":"/zh-cn/docs/basic-guide/deploy-k8s"},{"id":"basic-guide/docker-playground","title":"Docker Playground","description":"Prerequisite","permalink":"/zh-cn/docs/basic-guide/docker-playground"},{"id":"sql-syntax/functions/encoding","title":"Encoding","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/encoding"},{"id":"sql-syntax/functions/encryption","title":"Encryption","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/encryption"},{"id":"basic-guide/foundationdb-installation","title":"FoundationDB Installation","description":"In this guideline, I will set up a Foundation DB cluster on 3 physical machines. They are all using debian OS. I refer to two official guidelines here Getting Started on Linux and Building a Cluster.","permalink":"/zh-cn/docs/basic-guide/foundationdb-installation"},{"id":"sql-syntax/functions/functions","title":"Functions","description":"ByConity provides two SQL dialects, (1) ClickHouse and (2) ANSI.","permalink":"/zh-cn/docs/sql-syntax/functions/functions"},{"id":"sql-syntax/functions/geo","title":"Geo","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/geo"},{"id":"community/git-workflow","title":"Git WorkFlow","description":"ByConity is leverage the Github doing the developement. Each contributor and maintainer in ByConity must follow this workflow:","permalink":"/zh-cn/docs/community/git-workflow"},{"id":"sql-syntax/functions/hash","title":"Hash","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/hash"},{"id":"sql-syntax/hash","title":"Hash","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/hash"},{"id":"basic-guide/hdfs-installation","title":"HDFS Installation","description":"In this guide I will set up HDFS on 3 machine, 1 machine is for name node and other 2 machines is for data nodes. I refer to the following official document SingleCluster and ClusterSetup. I will install HDFS version 3.3.4 so I need java-8 because this is the recommended java version for this Hadoop","permalink":"/zh-cn/docs/basic-guide/hdfs-installation"},{"id":"sql-syntax/functions/ip-address","title":"IP Address","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/ip-address"},{"id":"sql-syntax/functions/json","title":"JSON","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/json"},{"id":"community/setup-development-environment","title":"Linux \u642d\u5efa ByConity \u5f00\u53d1\u73af\u5883","description":"\u4ece\u6e90\u7801\u7f16\u8bd1 ByConity \u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u7ec4\u4ef6","permalink":"/zh-cn/docs/community/setup-development-environment"},{"id":"sql-syntax/logical","title":"Logical","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/logical"},{"id":"sql-syntax/functions/map","title":"Map","description":"map","permalink":"/zh-cn/docs/sql-syntax/functions/map"},{"id":"sql-syntax/mathematical","title":"Mathematical","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/mathematical"},{"id":"sql-syntax/functions/nullable","title":"Nullable","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/nullable"},{"id":"sql-syntax/functions/others","title":"Others","description":"MACNumToString","permalink":"/zh-cn/docs/sql-syntax/functions/others"},{"id":"basic-guide/package-deployment","title":"Package Deployment","description":"One way to deploy ByConity to physical machines is using package manager.","permalink":"/zh-cn/docs/basic-guide/package-deployment"},{"id":"sql-syntax/functions/random","title":"Random","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/random"},{"id":"sql-syntax/sql-statements","title":"SQL Statements","description":"The supported statements in ByConity are similar to ClickHouse, but it is still recommended to follow the ByConity manual to ensure proper use. Some of the examples below are referenced from ClickHouse Documentation but have been adapted and modified to work in ByConity.","permalink":"/zh-cn/docs/sql-syntax/sql-statements"},{"id":"sql-syntax/string","title":"String","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/string"},{"id":"sql-syntax/functions/type-conversion","title":"Type Conversion","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/type-conversion"},{"id":"sql-syntax/urls","title":"URLs","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/urls"},{"id":"sql-syntax/functions/uuid","title":"UUID","description":"Notice:","permalink":"/zh-cn/docs/sql-syntax/functions/uuid"},{"id":"sql-syntax/functions/window","title":"Window","description":"ByConity supports the standard syntax of window functions. A list of window related features are explained below.","permalink":"/zh-cn/docs/sql-syntax/functions/window"},{"id":"introduction/main-principle-concepts","title":"\u4e3b\u8981\u539f\u7406\u6982\u5ff5","description":"ByConity \u7684\u67e5\u8be2\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u9996\u5148\u901a\u8fc7\u5143\u6570\u636e\u670d\u52a1\u83b7\u53d6\u67e5\u8be2\u6240\u9700\u8981\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u7136\u540e\u6839\u636e\u7528\u6237 sql \u901a\u8fc7\u4f18\u5316\u5668\u751f\u6210\u9ad8\u6548\u7684\u67e5\u8be2\u8ba1\u5212\uff0c\u5e76\u8c03\u5ea6\u5230\u76f8\u5e94\u7684\u8ba1\u7b97\u7ec4\u4e0a\u53bb\u8bfb\u53d6\u6570\u636e\u5e76\u6267\u884c\uff0c\u6700\u7ec8\u8fdb\u884c\u7ed3\u679c\u96c6\u7684\u6c47\u603b\u5e76\u53d1\u9001\u56de\u5ba2\u6237\u7aef\u3002\u4e3a\u4e86\u7528\u6237\u66f4\u597d\u7684\u4e86\u89e3 ByConity \u67e5\u8be2\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u6b64\u7ae0\u4f1a\u4ecb\u7ecd ByConity \u7684\u4e3b\u8981\u539f\u7406\u3002","permalink":"/zh-cn/docs/introduction/main-principle-concepts"},{"id":"advanced-guide/managing-concurrency","title":"\u4e8b\u7269\u548c\u5e76\u53d1\u63a7\u5236","description":"\u4e8b\u52a1\u6982\u89c8","permalink":"/zh-cn/docs/advanced-guide/managing-concurrency"},{"id":"advanced-guide/column-based-storage","title":"\u5217\u5b58\u8bbe\u8ba1\u539f\u7406","description":"\u901a\u5e38\u4e8b\u52a1\u578b\u6570\u636e\u5e93\u91c7\u7528\u884c\u5b58\u4fbf\u4e8e\u652f\u6301\u4e8b\u52a1\u548c\u9ad8\u5e76\u53d1\u8bfb\u5199\uff0c\u5206\u6790\u578b\u6570\u636e\u5e93\u91c7\u7528\u5217\u5b58\u51cf\u5c11 IO \u548c\u4fbf\u4e8e\u538b\u7f29\u3002ByConity \u91c7\u7528\u5217\u5b58\u7684\u65b9\u5f0f\uff0c\u4fdd\u8bc1\u8bfb\u5199\u6027\u80fd\u3001\u652f\u6301\u4e8b\u52a1\u4e00\u81f4\u6027\uff0c\u53c8\u9002\u7528\u5927\u89c4\u6a21\u7684\u6570\u636e\u8ba1\u7b97\u3002","permalink":"/zh-cn/docs/advanced-guide/column-based-storage"},{"id":"advanced-guide/complex-query-model-and-optimisation","title":"\u590d\u6742\u67e5\u8be2\u6a21\u578b\u548c\u6267\u884c\u8c03\u4f18","description":"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b","permalink":"/zh-cn/docs/advanced-guide/complex-query-model-and-optimisation"},{"id":"basic-guide/data-import","title":"\u5bfc\u5165\u6570\u636e","description":"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b","permalink":"/zh-cn/docs/basic-guide/data-import"},{"id":"advanced-guide/import-optimisation","title":"\u5bfc\u5165\u8c03\u4f18","description":"\u76ee\u524d CNCH \u652f\u6301\u7684\u5bfc\u5165\u65b9\u5f0f\u6709\u5982\u4e0b\u51e0\u79cd\uff1a","permalink":"/zh-cn/docs/advanced-guide/import-optimisation"},{"id":"basic-guide/data-export","title":"\u5bfc\u51fa\u6570\u636e","description":"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b","permalink":"/zh-cn/docs/basic-guide/data-export"},{"id":"introduction/quick-start","title":"\u5feb\u901f\u4e0a\u624b","description":"\u96c6\u7fa4\u642d\u5efa\u548c\u542f\u52a8\u4e4b\u540e\uff0c\u8ba9\u6211\u4eec\u5feb\u901f\u7684\u8bd5\u7528\u4e00\u4e0b\uff1a\uff09","permalink":"/zh-cn/docs/introduction/quick-start"},{"id":"introduction/recommended-use-case","title":"\u63a8\u8350\u573a\u666f\u6848\u4f8b","description":"ByConity \u4f7f\u7528\u5927\u91cf\u6210\u719f OLAP \u6280\u672f\uff0c\u4f8b\u5982\u5217\u5b58\u5f15\u64ce\uff0cMPP \u6267\u884c\uff0c\u667a\u80fd\u67e5\u8be2\u4f18\u5316\uff0c\u5411\u91cf\u5316\u6267\u884c\uff0cCodegen, indexing\uff0c\u6570\u636e\u538b\u7f29\uff0c\u4e3b\u8981\u7528\u4e8e OLAP \u67e5\u8be2\u548c\u8ba1\u7b97\u573a\u666f\u3002\u5728\u5b9e\u65f6\u6570\u636e\u63a5\u5165\u3001\u5927\u5bbd\u8868\u805a\u5408\u67e5\u8be2\u3001\u6d77\u91cf\u6570\u636e\u4e0b\u590d\u6742\u5206\u6790\u8ba1\u7b97\u3001\u591a\u8868\u5173\u8054\u67e5\u8be2\u573a\u666f\u4e0b\u6709\u975e\u5e38\u597d\u7684\u6027\u80fd\u3002","permalink":"/zh-cn/docs/introduction/recommended-use-case"},{"id":"basic-guide/data-visualisation","title":"\u6570\u636e\u53ef\u89c6\u5316","description":"\u6559\u7a0b\u76ee\u6807\uff1a","permalink":"/zh-cn/docs/basic-guide/data-visualisation"},{"id":"basic-guide/data-type","title":"\u6570\u636e\u7c7b\u578b","description":"\u6587\u6863\u7c7b\u578b\uff1a\u8bf4\u660e\u578b","permalink":"/zh-cn/docs/basic-guide/data-type"},{"id":"advanced-guide/query-optimiser","title":"\u67e5\u8be2\u4f18\u5316\u5668","description":"\u4f18\u5316\u5668\u662f\u6570\u636e\u5e93\u7cfb\u7edf\u7684\u6838\u5fc3\uff0c\u4f18\u79c0\u7684\u4f18\u5316\u5668\u80fd\u6781\u5927\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u590d\u6742\u67e5\u8be2\u573a\u666f\u4e0b\u4f18\u5316\u5668\u80fd\u5e26\u6765\u6570\u500d\u81f3\u6570\u767e\u500d\u7684\u6027\u80fd\u63d0\u5347\u3002","permalink":"/zh-cn/docs/advanced-guide/query-optimiser"},{"id":"basic-guide/monitoring","title":"\u76d1\u63a7\u96c6\u7fa4","description":"Prometheus \u76d1\u63a7\u6307\u6807\uff1a","permalink":"/zh-cn/docs/basic-guide/monitoring"},{"id":"community/community-code-of-conduct","title":"\u793e\u533a\u884c\u4e3a\u51c6\u5219","description":"\u6211\u4eec\u7684\u627f\u8bfa","permalink":"/zh-cn/docs/community/community-code-of-conduct"},{"id":"basic-guide/background-task-management","title":"\u7ba1\u7406\u540e\u53f0\u4efb\u52a1","description":"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b","permalink":"/zh-cn/docs/basic-guide/background-task-management"},{"id":"introduction/background-and-technical-architecture","title":"\u80cc\u666f\u548c\u6280\u672f\u67b6\u6784","description":"ByConity \u662f\u9762\u5411\u73b0\u4ee3 IT \u67b6\u6784\u53d8\u5316\u800c\u8bbe\u8ba1\u7684\u4e00\u6b3e\u6570\u4ed3\u7cfb\u7edf\uff0c\u5b83\u91c7\u7528\u4e91\u539f\u751f\u67b6\u6784\u8bbe\u8ba1\uff0c\u5728\u6ee1\u8db3\u6570\u4ed3\u7528\u6237\u5bf9\u8d44\u6e90\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u8bfb\u5199\u5206\u79bb\uff0c\u8d44\u6e90\u9694\u79bb\uff0c\u6570\u636e\u5f3a\u4e00\u81f4\u6027\u7b49\u591a\u79cd\u9700\u6c42\u7684\u540c\u65f6\uff0c\u5e76\u63d0\u4f9b\u4f18\u5f02\u7684\u67e5\u8be2\uff0c\u5199\u5165\u6027\u80fd\u3002","permalink":"/zh-cn/docs/introduction/background-and-technical-architecture"},{"id":"basic-guide/database-table-design","title":"\u8bbe\u8ba1\u5e93\u8868","description":"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b","permalink":"/zh-cn/docs/basic-guide/database-table-design"},{"id":"advanced-guide/resource-manager","title":"\u8d44\u6e90\u7ba1\u7406\u5668","description":"\u8d44\u6e90\u7ba1\u7406\u5668\uff08Resource Manager\uff0c\u7b80\u79f0 RM\uff09\u7ec4\u4ef6\u7528\u4e8e\u5bf9 ByConity \u8ba1\u7b97\u8d44\u6e90\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u548c\u8c03\u5ea6\uff0c\u662f\u5b9e\u73b0\u8d44\u6e90\u5f39\u6027\u548c\u63d0\u9ad8\u8d44\u6e90\u5229\u7528\u7387\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002","permalink":"/zh-cn/docs/advanced-guide/resource-manager"},{"id":"basic-guide/client-connection","title":"\u8fde\u63a5\u5ba2\u6237\u7aef","description":"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b","permalink":"/zh-cn/docs/basic-guide/client-connection"},{"id":"basic-guide/deployment-requirements","title":"\u90e8\u7f72\u8981\u6c42","description":"ByConity \u80fd\u591f\u8fd0\u884c\u5728\u7edd\u5927\u591a\u6570\u4e3b\u6d41\u7684\u5546\u7528\u670d\u52a1\u5668\u4e0a\uff0c\u6211\u4eec\u5efa\u8bae ByConity \u7684\u90e8\u7f72\u80fd\u591f\u9075\u5faa\u4ee5\u4e0b\u9700\u6c42\uff1a","permalink":"/zh-cn/docs/basic-guide/deployment-requirements"},{"id":"advanced-guide/background-task-configuration","title":"\u914d\u7f6e\u540e\u53f0\u4efb\u52a1","description":"\u542f\u52a8/\u505c\u6b62\u8868\u7684 Merge","permalink":"/zh-cn/docs/advanced-guide/background-task-configuration"},{"id":"basic-guide/virtual-warehouse-configuration","title":"\u914d\u7f6e\u8ba1\u7b97\u7ec4","description":"\u6587\u6863\u7c7b\u578b\uff1a\u6559\u7a0b\u578b","permalink":"/zh-cn/docs/basic-guide/virtual-warehouse-configuration"},{"id":"basic-guide/cluster-configuration","title":"\u96c6\u7fa4\u914d\u7f6e\u53c2\u6570","description":"\u6587\u6863\u7c7b\u578b\uff1a\u8bf4\u660e\u578b","permalink":"/zh-cn/docs/basic-guide/cluster-configuration"}]}')}}]);