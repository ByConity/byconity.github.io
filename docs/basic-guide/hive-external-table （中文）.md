---
title: Hive External Table
tags:
  - Docs
---

# CnchHive 介绍 

CnchHive 是 ByConity 研发的表引擎，支持外部表联合查询，用户无需导入数据即可直接加速数据查询。CnchHive 支持查询存储在 HDFS 和 S3 的数据。它目前支持查询以 Parquet 和 ORC 格式存储的 Hive 数据文件。

## 建表示例
```sql
CREATE TABLE [IF NOT EXISTS] [db.]hive_ext
ENGINE = CnchHive('thrift://127.0.0.1:9083', 'hive_db', 'hive_table')
[SETTING vw_default = '']
```

表的信息既能自动从hive的元数据中导入又能手动指定具体的列名即其类型。

## 表的参数设置

CnchHive 允许通过指定配置文件的值来设置表，如下：
```xml
<yandex>
  <hive>
    <vw_default>vw_default</vw_default>
  </hive>
</yandex>
```

* vw_default: 用来执行查询的虚拟表
* hdfs_fs: hdfs namenode的 url.
* endpoint: S3 的enpoint
* region: S3 的region
* ak_id: S3 access key 密钥名
* ak_secret: S3 secret key 密钥内容

### 配置 HDFS hive table 举例

```xml
<hive>
  <hdfs_fs>hdfs://127.0.0.1:9010</hdfs_fs>
</hive>
```

### 配置 S3 hive table 举例
```xml
<hive>
  <endpoint>http://127.0.0.1:9000</endpoint>
  <ak_id>id</ak_id>
  <ak_secret>secret</ak_secret>
</hive>
```

## Disk 缓存配置
把下面配置加到 **worker.xml** 中打开缓存功能
```xml
<yandex>
  <disk_cache_strategies>
    <Hive>
      <disk_cache_dir>hive</disk_cache_dir>
    </Hive>
  </disk_cache_strategies>
</yandex>
```

## Query Settings

### disk_cache_mode
Whether to use disk cache in SELECT queries. Possible values:
* AUTO - USE disk cache when available.
* SKIP_DISK_CACHE - Do not use disk cache.

If cache misses, hive files will be cached in the backrgound.

default: AUTO

### use_hive_metastore_filter
If enabled, CnchHive checks whether the query has partition key conditions
which can be passed to hive metastore for restricting partitions. Hive metastore will return
a trimmed list of partitions based on the conditions. Hive metastore can only recognise simple
conditions.

**Example**
```sql
# Column d is the hive partition key, and hive has partition
# d=1/, d=2/, d=3/

SELECT * FROM hive_ext WHERE d = 1
# Hive metastore will only return the path of d=1/ partition
```

default: true

### use_hive_partition_filter
If enabled, CnchHive further does partition pruning on the list of partitions returned from hive metastore.

**Example**
```sql
# Column d is the hive partition key, and hive has partition
# d=20220203/, d=20220204/, d=20220205/

SELECT * FROM hive_ext WHERE toDate(d) = '2022-02-03'
# Hive metastore will return all three partitions, and CnchHive will do partition pruning. Only partition d=20220203/ will later be read.
```

default: true

### use_hive_split_level_filter
Parquet and ORC files have index data for each row group/stripe. If enabled, CnchHive will filter row groups/stripes.

default: false

## Table Functions

```sql
SELECT count() FROM hive('thrift://127.0.0.1', 'hive_db', 'hive_table)
```
Query the hive table without explicitly creating a table.

```sql
SELECT * FROM hiveMetadata('thrift://127.0.0.1', 'hive_db', 'hive_table')
```
Return the hive table storage description from the hive metastore.
