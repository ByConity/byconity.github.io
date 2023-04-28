"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4323],{9582:e=>{e.exports=JSON.parse('{"label":"Docs","permalink":"/docs/tags/docs","allTagsPath":"/docs/tags","count":61,"items":[{"id":"sql-syntax/functions/aggregate","title":"Aggregation","description":"Notice:","permalink":"/docs/sql-syntax/functions/aggregate"},{"id":"sql-syntax/ansi-compatibility","title":"ANSI Compatibility","description":"ByConity provides a rich set of SQL syntax through ANSI SQL dialect. When using this dialect, SQL statements will be parsed and validated by Apache Calcite and then sent to servers for execution. Apache Calcite supports standard ANSI SQL, please refer to the BNF-grammar here for more details//calcite.apache.org/docs/reference.html.","permalink":"/docs/sql-syntax/ansi-compatibility"},{"id":"sql-syntax/functions/arithmetic","title":"Arithmetic","description":"Notice:","permalink":"/docs/sql-syntax/functions/arithmetic"},{"id":"sql-syntax/functions/array","title":"Array","description":"Notice:","permalink":"/docs/sql-syntax/functions/array"},{"id":"introduction/background-and-technical-architecture","title":"Background and Technical Architecture","description":"ByConity is a data warehouse system designed for modern IT architecture changes. It is designed with Cloud Native architecture. It provides excellent query and write performance while meeting the needs of data warehouse users for resource elastic volume expansion and contraction, read and write separation, resource isolation, and strong data consistency.","permalink":"/docs/introduction/background-and-technical-architecture"},{"id":"advanced-guide/background-task-configuration","title":"Background Tasks Configuration","description":"Start/Stop Merge of tables","permalink":"/docs/advanced-guide/background-task-configuration"},{"id":"basic-guide/background-task-management","title":"Background Tasks Management","description":"Document Type: Tutorial","permalink":"/docs/basic-guide/background-task-management"},{"id":"sql-syntax/functions/bit-bitmap","title":"Bit & Bitmap","description":"Notice:","permalink":"/docs/sql-syntax/functions/bit-bitmap"},{"id":"advanced-guide/bucket-table-best-practice","title":"Bucket table best practice manual","description":"In ByConity, when using a Bucket table, the system organizes table data based on one or more columns and expressions specified by the user in the table creation statement. The data with the same value is clustered together and assigned to the same bucket number.","permalink":"/docs/advanced-guide/bucket-table-best-practice"},{"id":"basic-guide/client-connection","title":"Client Connection","description":"Document Type: Tutorial","permalink":"/docs/basic-guide/client-connection"},{"id":"basic-guide/cluster-configuration","title":"Cluster Configuration","description":"Document Type: Descriptive","permalink":"/docs/basic-guide/cluster-configuration"},{"id":"advanced-guide/column-based-storage","title":"Column Storage Design Principles","description":"Typically, transactional databases use row storage to support transactions and high concurrent reading and writing, while analytical databases use column storage to reduce IO and facilitate compression. ByConity, on the other hand, uses column storage to ensure read and write performance, support transaction consistency, and is well-suited for large-scale data calculations.","permalink":"/docs/advanced-guide/column-based-storage"},{"id":"community/community-code-of-conduct","title":"Community Code of Conduct","description":"Our Pledge","permalink":"/docs/community/community-code-of-conduct"},{"id":"sql-syntax/functions/comparison","title":"Comparison","description":"Notice:","permalink":"/docs/sql-syntax/functions/comparison"},{"id":"sql-syntax/functions/conditional","title":"Conditional","description":"Notice:","permalink":"/docs/sql-syntax/functions/conditional"},{"id":"basic-guide/data-type","title":"Data Type","description":"Document Type: Descriptive","permalink":"/docs/basic-guide/data-type"},{"id":"sql-syntax/data-types","title":"Data Types","description":"The data types provided in ByConity are adapted from ClickHouse. Visit this page for more information on ClickHouse data types.","permalink":"/docs/sql-syntax/data-types"},{"id":"basic-guide/data-visualisation","title":"Data Visualisation","description":"Tutorial goals:","permalink":"/docs/basic-guide/data-visualisation"},{"id":"basic-guide/database-table-design","title":"Database Table Design","description":"Document Type: Tutorial","permalink":"/docs/basic-guide/database-table-design"},{"id":"sql-syntax/functions/date-times","title":"Date & Times","description":"Notice:","permalink":"/docs/sql-syntax/functions/date-times"},{"id":"deployment/deploy-k8s","title":"Deploy ByConity in Kubernetes","description":"This repos demonstrates how to deploy a ByConity cluster in your Kubernetes cluster.","permalink":"/docs/deployment/deploy-k8s"},{"id":"deployment/docker-wrapper","title":"Deploy ByConity to physical servers with a docker wrapper","description":"The current way to deploy ByConity to physical servers is deployed via a docker wrapper.","permalink":"/docs/deployment/docker-wrapper"},{"id":"basic-guide/deployment-requirements","title":"Deployment Requirements","description":"ByConity can run on most mainstream commercial servers. We recommend that the deployment of ByConity can comply with the following requirements:","permalink":"/docs/basic-guide/deployment-requirements"},{"id":"basic-guide/docker-playground","title":"Docker Playground","description":"Prerequisite","permalink":"/docs/basic-guide/docker-playground"},{"id":"sql-syntax/functions/encoding","title":"Encoding","description":"Notice:","permalink":"/docs/sql-syntax/functions/encoding"},{"id":"sql-syntax/functions/encryption","title":"Encryption","description":"Notice:","permalink":"/docs/sql-syntax/functions/encryption"},{"id":"basic-guide/data-export","title":"Export Data","description":"Document Type: Tutorial","permalink":"/docs/basic-guide/data-export"},{"id":"deployment/foundationdb-installation","title":"FoundationDB Installation","description":"In this guideline, I will set up a Foundation DB cluster on 3 physical machines. They are all using debian OS. I refer to two official guidelines here Getting Started on Linux and Building a Cluster.","permalink":"/docs/deployment/foundationdb-installation"},{"id":"sql-syntax/functions/functions","title":"Functions","description":"ByConity provides two SQL dialects, (1) ClickHouse and (2) ANSI.","permalink":"/docs/sql-syntax/functions/functions"},{"id":"sql-syntax/functions/geo","title":"Geo","description":"Notice:","permalink":"/docs/sql-syntax/functions/geo"},{"id":"community/git-workflow","title":"Git WorkFlow","description":"ByConity is leverage the Github doing the developement. Each contributor and maintainer in ByConity must follow this workflow:","permalink":"/docs/community/git-workflow"},{"id":"sql-syntax/functions/hash","title":"Hash","description":"Notice:","permalink":"/docs/sql-syntax/functions/hash"},{"id":"sql-syntax/hash","title":"Hash","description":"Notice:","permalink":"/docs/sql-syntax/hash"},{"id":"deployment/hdfs-installation","title":"HDFS Installation","description":"In this guide I will set up HDFS on 3 machine, 1 machine is for name node and other 2 machines is for data nodes. I refer to the following official document SingleCluster and ClusterSetup. I will install HDFS version 3.3.4 so I need java-8 because this is the recommended java version for this Hadoop","permalink":"/docs/deployment/hdfs-installation"},{"id":"basic-guide/data-import","title":"Import Data","description":"Document Type: Tutorial","permalink":"/docs/basic-guide/data-import"},{"id":"advanced-guide/import-optimisation","title":"Import Optimisation","description":"Currently CNCH supports the following import methods:","permalink":"/docs/advanced-guide/import-optimisation"},{"id":"sql-syntax/functions/ip-address","title":"IP Address","description":"Notice:","permalink":"/docs/sql-syntax/functions/ip-address"},{"id":"sql-syntax/functions/json","title":"JSON","description":"Notice:","permalink":"/docs/sql-syntax/functions/json"},{"id":"sql-syntax/logical","title":"Logical","description":"Notice:","permalink":"/docs/sql-syntax/logical"},{"id":"introduction/main-principle-concepts","title":"Main Principles Concepts","description":"ByConity \'s query execution process is shown in the figure below. First, obtain the Metadata information required for the query through the Metadata service. Then generate an efficient query plan through the optimizer according to the user\'s SQL , and schedule it to the corresponding calculation group to read the data and execute it. Finally, the result set is summarized and sent back to Client . In order for users to better understand the working principle of ByConity query, this chapter will introduce the main principle of ByConity.","permalink":"/docs/introduction/main-principle-concepts"},{"id":"sql-syntax/functions/map","title":"Map","description":"map","permalink":"/docs/sql-syntax/functions/map"},{"id":"sql-syntax/mathematical","title":"Mathematical","description":"Notice:","permalink":"/docs/sql-syntax/mathematical"},{"id":"basic-guide/monitoring","title":"Monitor Cluster","description":"Prometheus Monitoring Indicators\uff1a","permalink":"/docs/basic-guide/monitoring"},{"id":"sql-syntax/functions/nullable","title":"Nullable","description":"Notice:","permalink":"/docs/sql-syntax/functions/nullable"},{"id":"sql-syntax/functions/others","title":"Others","description":"MACNumToString","permalink":"/docs/sql-syntax/functions/others"},{"id":"deployment/package-deployment","title":"Package Deployment","description":"One way to deploy ByConity to physical machines is using package manager.","permalink":"/docs/deployment/package-deployment"},{"id":"advanced-guide/query-optimiser","title":"Query Optimizer","description":"The optimizer is the core of the database system. An excellent optimizer can greatly improve query performance, especially in complex query scenarios. The optimizer can bring performance improvements of several to hundreds of times.","permalink":"/docs/advanced-guide/query-optimiser"},{"id":"introduction/quick-start","title":"Quick Start","description":"Now that the cluster is up and running, let\'s give it a quick spin :)","permalink":"/docs/introduction/quick-start"},{"id":"sql-syntax/functions/random","title":"Random","description":"Notice:","permalink":"/docs/sql-syntax/functions/random"},{"id":"introduction/recommended-use-case","title":"Recommended Use Cases","description":"ByConity uses a large number of mature OLAP technologies, such as column storage engine, MPP execution, intelligent query optimization, vectorized execution, Codegen, indexing, data compression, mainly used in OLAP query and computing scenarios. It has very good performance in real-time data access, aggregation query of large and wide tables, complex analysis and calculation under massive data, and multi-table associated query scenarios.","permalink":"/docs/introduction/recommended-use-case"},{"id":"advanced-guide/resource-manager","title":"resource manager","description":"The Resource Manager (RM) component is used for unified management and scheduling of ByConity computing resources, and is the core component to achieve resource elasticity and improve resource utilization.","permalink":"/docs/advanced-guide/resource-manager"},{"id":"community/setup-development-environment","title":"Setup ByConity Developement Environment","description":"Environment Dependencies","permalink":"/docs/community/setup-development-environment"},{"id":"sql-syntax/sql-statements","title":"SQL Statements","description":"The supported statements in ByConity are similar to ClickHouse, but it is still recommended to follow the ByConity manual to ensure proper use. Some of the examples below are referenced from ClickHouse Documentation but have been adapted and modified to work in ByConity.","permalink":"/docs/sql-syntax/sql-statements"},{"id":"sql-syntax/string","title":"String","description":"Notice:","permalink":"/docs/sql-syntax/string"},{"id":"sql-syntax/functions/type-conversion","title":"Type Conversion","description":"Notice:","permalink":"/docs/sql-syntax/functions/type-conversion"},{"id":"sql-syntax/urls","title":"URLs","description":"Notice:","permalink":"/docs/sql-syntax/urls"},{"id":"sql-syntax/functions/uuid","title":"UUID","description":"Notice:","permalink":"/docs/sql-syntax/functions/uuid"},{"id":"basic-guide/virtual-warehouse-configuration","title":"Virtual Warehouse Configuration","description":"Document Type: Tutorial","permalink":"/docs/basic-guide/virtual-warehouse-configuration"},{"id":"sql-syntax/functions/window","title":"Window","description":"ByConity supports the standard syntax of window functions. A list of window related features are explained below.","permalink":"/docs/sql-syntax/functions/window"},{"id":"advanced-guide/managing-concurrency","title":"\u4e8b\u7269\u548c\u5e76\u53d1\u63a7\u5236","description":"\u4e8b\u52a1\u6982\u89c8","permalink":"/docs/advanced-guide/managing-concurrency"},{"id":"advanced-guide/complex-query-model-and-optimisation","title":"\u590d\u6742\u67e5\u8be2\u6a21\u578b\u548c\u6267\u884c\u8c03\u4f18","description":"\u590d\u6742\u67e5\u8be2\u6267\u884c\u6a21\u578b","permalink":"/docs/advanced-guide/complex-query-model-and-optimisation"}]}')}}]);