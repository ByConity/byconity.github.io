"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9884],{1925:e=>{e.exports=JSON.parse('{"label":"Docs","permalink":"/docs/0.3.0/tags/docs","allTagsPath":"/docs/0.3.0/tags","count":77,"items":[{"id":"version-0.3.0/data-import/import-methods/ad-hoc-import","title":"Ad-hoc Import","description":"Column ingestion","permalink":"/docs/0.3.0/data-import/import-methods/ad-hoc-import"},{"id":"version-0.3.0/sql-syntax/functions/aggregate","title":"Aggregation","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/aggregate"},{"id":"version-0.3.0/sql-syntax/functions/arithmetic","title":"Arithmetic","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/arithmetic"},{"id":"version-0.3.0/sql-syntax/functions/array","title":"Array","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/array"},{"id":"version-0.3.0/quick-start/basic-database-operations","title":"Basic Operations","description":"This tutorial guides users through the basic operations of creating tables, importing data, and querying data using ByConity in a Docker deployment environment.","permalink":"/docs/0.3.0/quick-start/basic-database-operations"},{"id":"version-0.3.0/sql-syntax/functions/bit-bitmap","title":"Bit & Bitmap","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/bit-bitmap"},{"id":"version-0.3.0/release-note/0.1.0.GA","title":"ByConity 0.1.0.GA","description":"Release Date: May 24, 2023","permalink":"/docs/0.3.0/release-note/0.1.0.GA"},{"id":"version-0.3.0/release-note/0.2.0","title":"ByConity 0.2.0","description":"Release Date: September 9, 2023","permalink":"/docs/0.3.0/release-note/0.2.0"},{"id":"version-0.3.0/release-note/0.3.0","title":"ByConity 0.3.0","description":"Release Date: December 17, 2023","permalink":"/docs/0.3.0/release-note/0.3.0"},{"id":"version-0.3.0/deployment/upgrade","title":"ByConity upgrade","description":"Upgrading Clusters Based on S3 Storage (Applicable Only to Versions Before 0.2.0)","permalink":"/docs/0.3.0/deployment/upgrade"},{"id":"version-0.3.0/query-optimization/query-optimization-with-cache-preload","title":"Cache Preload","description":"Data Caching (Disk Cache)","permalink":"/docs/0.3.0/query-optimization/query-optimization-with-cache-preload"},{"id":"version-0.3.0/integration/client-connection","title":"Client Connection","description":"Document Type: Tutorial","permalink":"/docs/0.3.0/integration/client-connection"},{"id":"version-0.3.0/admin-guides/cluster-configuration","title":"Cluster Configuration","description":"Document Type: Descriptive","permalink":"/docs/0.3.0/admin-guides/cluster-configuration"},{"id":"version-0.3.0/sql-syntax/functions/comparison","title":"Comparison","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/comparison"},{"id":"version-0.3.0/query-optimization/complex-query-optimization","title":"Complex Query Tuning","description":"Complex Query Execution Model","permalink":"/docs/0.3.0/query-optimization/complex-query-optimization"},{"id":"version-0.3.0/sql-syntax/functions/conditional","title":"Conditional","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/conditional"},{"id":"version-0.3.0/table-design/data-compression","title":"Data Compression","description":"ByConity supports codecs for lists, which are methods for compressing and decompressing data aimed at saving storage space and improving I/O performance.","permalink":"/docs/0.3.0/table-design/data-compression"},{"id":"version-0.3.0/data-import/data-introduction","title":"Data Description","description":"Data Sources","permalink":"/docs/0.3.0/data-import/data-introduction"},{"id":"version-0.3.0/data-export/data-export-method","title":"Data Export","description":"This tutorial aims to guide users on how to export data from tables in ByConity to different file systems or databases, as well as how to export query results. Currently, ByConity supports exporting data to local file systems and HDFS (Hadoop Distributed FileSystem).","permalink":"/docs/0.3.0/data-export/data-export-method"},{"id":"version-0.3.0/data-import/data-import-tuning","title":"Data Import Tuning","description":"Direct Write Method Tuning","permalink":"/docs/0.3.0/data-import/data-import-tuning"},{"id":"version-0.3.0/table-design/data-model","title":"Data Model","description":"Columnar Storage Design Principles","permalink":"/docs/0.3.0/table-design/data-model"},{"id":"version-0.3.0/sql-syntax/data-types","title":"Data Types","description":"The data types provided in ByConity are adapted from ClickHouse. Visit this page for more information on ClickHouse data types.","permalink":"/docs/0.3.0/sql-syntax/data-types"},{"id":"version-0.3.0/integration/data-visualization","title":"Data Visualization","description":"Tutorial Objectives:","permalink":"/docs/0.3.0/integration/data-visualization"},{"id":"version-0.3.0/sql-syntax/functions/date-times","title":"Date & Times","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/date-times"},{"id":"version-0.3.0/deployment/deployment-with-k8s","title":"Deploy on Kubernetes","description":"This article demonstrates how to deploy a ByConity cluster on a Kubernetes (k8s) environment.","permalink":"/docs/0.3.0/deployment/deployment-with-k8s"},{"id":"version-0.3.0/deployment/package-deployment","title":"Deploy on Physical Machines","description":"Currently, the way to install ByConity on physical machines is through package managers, such as installing Debian packages for Debian OS or rpm packages for Centos OS. Since ByConity uses FoundationDB as its metadata storage and HDFS as its data storage, before deploying ByConity, we need to deploy FoundationDB and HDFS first. The steps are to install FoundationDB (FDB) first, then install HDFS, and finally deploy the ByConity software package. Details are as follows.","permalink":"/docs/0.3.0/deployment/package-deployment"},{"id":"version-0.3.0/deployment/deployment-requirements","title":"Deployment Requirements","description":"Software Requirements","permalink":"/docs/0.3.0/deployment/deployment-requirements"},{"id":"version-0.3.0/deployment/deployment-settings","title":"Deployment Settings","description":"Refer to the Admin Guide - Cluster Configuration Parameters","permalink":"/docs/0.3.0/deployment/deployment-settings"},{"id":"version-0.3.0/developer-guides/set-up-byconity-dev-env","title":"Development Environment","description":"Our developers connect to a Debian 11 development environment running on a virtual machine using a plugin called Dev Container in VS Code. Therefore, we also recommend that you use the same approach for development to avoid many dependency and compatibility issues. For more information, refer to the official dev set.","permalink":"/docs/0.3.0/developer-guides/set-up-byconity-dev-env"},{"id":"version-0.3.0/data-import/import-methods/direct-access-via-hive","title":"Direct Access via Hive","description":"Importing from Hive External Tables","permalink":"/docs/0.3.0/data-import/import-methods/direct-access-via-hive"},{"id":"version-0.3.0/data-import/import-methods/direct-access-via-mysql","title":"Direct Access via MySQL","description":"Importing via MySQL","permalink":"/docs/0.3.0/data-import/import-methods/direct-access-via-mysql"},{"id":"version-0.3.0/quick-start/docker-deploy","title":"Docker Deployment","description":"This tutorial guides users to quickly deploy ByConity locally using Docker. Users can follow the steps below to deploy a simple ByConity cluster for a quick start experience. If you want to fully try and understand ByConity, it is recommended that you skip this section and refer directly to ByConity Cluster Deployment to experience the powerful performance of ByConity.","permalink":"/docs/0.3.0/quick-start/docker-deploy"},{"id":"version-0.3.0/sql-syntax/functions/encoding","title":"Encoding","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/encoding"},{"id":"version-0.3.0/sql-syntax/functions/encryption","title":"Encryption","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/encryption"},{"id":"version-0.3.0/data-lakes/hive-external-catalog","title":"External Catalog","description":"In addition to supporting access to Hive data using external tables, Byconity also supports access through the External Catalog feature.","permalink":"/docs/0.3.0/data-lakes/hive-external-catalog"},{"id":"version-0.3.0/data-lakes/hive-external-table","title":"External Tables","description":"CnchHive","permalink":"/docs/0.3.0/data-lakes/hive-external-table"},{"id":"version-0.3.0/faq/all-in-one","title":"FAQ","description":"Deployment-related","permalink":"/docs/0.3.0/faq/all-in-one"},{"id":"version-0.3.0/introduction/features-and-capabilities","title":"Features and Capabilities","description":"Elastic Scaling","permalink":"/docs/0.3.0/introduction/features-and-capabilities"},{"id":"version-0.3.0/sql-syntax/functions/functions","title":"Functions","description":"ByConity provides two SQL dialects, (1) ClickHouse and (2) ANSI.","permalink":"/docs/0.3.0/sql-syntax/functions/functions"},{"id":"version-0.3.0/sql-syntax/functions/geo","title":"Geo","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/geo"},{"id":"version-0.3.0/sql-syntax/functions/hash","title":"Hash","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/hash"},{"id":"version-0.3.0/sql-syntax/hash","title":"Hash","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/hash"},{"id":"version-0.3.0/admin-guides/high-availability","title":"High Availability","description":"ByConity supports deploying multiple ByConity Server, Resource Manager, and TSO processes within the same cluster to achieve high availability. This is achieved by determining the leader through a \\"Compare And Swap\\" operation in the shared FoundationDB.","permalink":"/docs/0.3.0/admin-guides/high-availability"},{"id":"version-0.3.0/developer-guides/how-to-build-byconity","title":"How to Build","description":"Dependencies","permalink":"/docs/0.3.0/developer-guides/how-to-build-byconity"},{"id":"version-0.3.0/data-import/import-methods/import-from-hdfs","title":"Import from HDFS","description":"Importing from HDFS","permalink":"/docs/0.3.0/data-import/import-methods/import-from-hdfs"},{"id":"version-0.3.0/data-import/import-methods/import-from-kafka","title":"Import from Kafka","description":"Importing from Kafka","permalink":"/docs/0.3.0/data-import/import-methods/import-from-kafka"},{"id":"version-0.3.0/table-design/indexes","title":"Indexes","description":"Full-Text Search","permalink":"/docs/0.3.0/table-design/indexes"},{"id":"version-0.3.0/sql-syntax/functions/ip-address","title":"IP Address","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/ip-address"},{"id":"version-0.3.0/sql-syntax/functions/json","title":"JSON","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/json"},{"id":"version-0.3.0/sql-syntax/logical","title":"Logical","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/logical"},{"id":"version-0.3.0/admin-guides/background-task-management","title":"Manage Background Tasks","description":"Configuring Background Tasks","permalink":"/docs/0.3.0/admin-guides/background-task-management"},{"id":"version-0.3.0/sql-syntax/functions/map","title":"Map","description":"map","permalink":"/docs/0.3.0/sql-syntax/functions/map"},{"id":"version-0.3.0/query-optimization/materialized-view","title":"Materialized View","description":"Function Definition","permalink":"/docs/0.3.0/query-optimization/materialized-view"},{"id":"version-0.3.0/sql-syntax/mathematical","title":"Mathematical","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/mathematical"},{"id":"version-0.3.0/admin-guides/monitoring","title":"Monitor","description":"Common Monitoring Metrics","permalink":"/docs/0.3.0/admin-guides/monitoring"},{"id":"version-0.3.0/sql-syntax/functions/nullable","title":"Nullable","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/nullable"},{"id":"version-0.3.0/sql-syntax/functions/others","title":"Others","description":"MACNumToString","permalink":"/docs/0.3.0/sql-syntax/functions/others"},{"id":"version-0.3.0/admin-guides/privilege-management","title":"Privilege Management","description":"RBAC Model","permalink":"/docs/0.3.0/admin-guides/privilege-management"},{"id":"version-0.3.0/query-optimization/query-optimization-with-projection","title":"Query Optimization with Projection","description":"Introduction","permalink":"/docs/0.3.0/query-optimization/query-optimization-with-projection"},{"id":"version-0.3.0/query-optimization/query-optimizer","title":"Query Optimizer","description":"The optimizer is the core of the database system, and an excellent optimizer can greatly improve query performance, especially in complex query scenarios where the optimizer can bring several times to hundreds of times performance improvement.","permalink":"/docs/0.3.0/query-optimization/query-optimizer"},{"id":"version-0.3.0/sql-syntax/functions/random","title":"Random","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/random"},{"id":"version-0.3.0/admin-guides/resource-manager","title":"Resource Manager","description":"The Resource Manager (RM) component is responsible for the unified management and scheduling of ByConity\'s computational resources. It is a core component for achieving resource elasticity and improving resource utilization.","permalink":"/docs/0.3.0/admin-guides/resource-manager"},{"id":"version-0.3.0/admin-guides/scale-up-down","title":"Scaling","description":"ByConity supports containerized and modular deployment, allowing for elastic scaling. It can scale computing resources in real-time and on-demand, ensuring efficient resource utilization. This section describes how to scale ByConity on a Kubernetes cluster.","permalink":"/docs/0.3.0/admin-guides/scale-up-down"},{"id":"version-0.3.0/sql-syntax/sql-statements","title":"SQL Statements","description":"The supported statements in ByConity are similar to ClickHouse, but it is still recommended to follow the ByConity manual to ensure proper use. Some of the examples below are referenced from ClickHouse Documentation but have been adapted and modified to work in ByConity.","permalink":"/docs/0.3.0/sql-syntax/sql-statements"},{"id":"version-0.3.0/data-import/import-methods/stream-import","title":"Stream Import","description":"Streaming Data Import (Local Files and In-Memory Data)","permalink":"/docs/0.3.0/data-import/import-methods/stream-import"},{"id":"version-0.3.0/sql-syntax/string","title":"String","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/string"},{"id":"version-0.3.0/table-design/table-engine","title":"Table Engines","description":"The table engine determines the way data is organized and stored, the method and type of indexing, which queries are supported, and how they are supported, as well as some other specific features and configurations. In ByConity, the most commonly used table engines are CnchMergeTree, CnchKafka, and CnchMaterializedMySql. This article focuses on explaining the principles of these three table engines.","permalink":"/docs/0.3.0/table-design/table-engine"},{"id":"version-0.3.0/introduction/main-principle-concepts","title":"Technical Architecture and Principles","description":"Technical Architecture","permalink":"/docs/0.3.0/introduction/main-principle-concepts"},{"id":"version-0.3.0/benchmarks/tpc-ds","title":"TPC-DS","description":"With the increasing amount and complexity of data, enterprises are increasingly turning to OLAP (On-Line Analytical Processing) engines to process large-scale data and deliver real-time analytical insights. Performance is a very important factor when choosing an OLAP engine. Therefore, this article aims to offer valuable insights by conducting a performance comparison among four prominent open-source OLAP engines: ClickHouse, Doris, Presto, and ByConity. To achieve this, we employ a set of 99 query statements sourced from the TPC-DS benchmark. Our aim is to provide reference for enterprises in their journey to select the most fitting OLAP engine for their specific needs.","permalink":"/docs/0.3.0/benchmarks/tpc-ds"},{"id":"version-0.3.0/admin-guides/transaction-management","title":"Transactions Management","description":"Transaction overview","permalink":"/docs/0.3.0/admin-guides/transaction-management"},{"id":"version-0.3.0/sql-syntax/functions/type-conversion","title":"Type Conversion","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/type-conversion"},{"id":"version-0.3.0/table-design/unique-key","title":"Unique Key","description":"Introduction","permalink":"/docs/0.3.0/table-design/unique-key"},{"id":"version-0.3.0/sql-syntax/urls","title":"URLs","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/urls"},{"id":"version-0.3.0/sql-syntax/functions/uuid","title":"UUID","description":"Notice:","permalink":"/docs/0.3.0/sql-syntax/functions/uuid"},{"id":"version-0.3.0/admin-guides/virtual-warehouse-configuration","title":"Virtual Warehouse Configuration","description":"Document Type: Tutorial","permalink":"/docs/0.3.0/admin-guides/virtual-warehouse-configuration"},{"id":"version-0.3.0/introduction/what-is-byconity","title":"What is ByConity","description":"What is ByConity","permalink":"/docs/0.3.0/introduction/what-is-byconity"},{"id":"version-0.3.0/sql-syntax/functions/window","title":"Window","description":"ByConity supports the standard syntax of window functions. A list of window related features are explained below.","permalink":"/docs/0.3.0/sql-syntax/functions/window"}]}')}}]);