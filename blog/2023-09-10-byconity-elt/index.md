---
slug: byconity-elt
title: ByConity ELT原理详解
authors: [tigerwangyb]
tags: [video introduction, docusaurus]
---

# ByConity ELT原理详解


## 背景

谈到数据仓库， 一定离不开使用Extract-Transform-Load (ETL)或 Extract-Load-Transform (ELT)。 将来源不同、格式各异的数据提取到数据仓库中，并进行处理加工。传统的数据转换过程一般采用Extract-Transform-Load (ETL)来将业务数据转换为适合数仓的数据模型，然而，这依赖于独立于数仓外的ETL系统，因而维护成本较高。
ByConity 作为云原生数据仓库，从0.2.0版本开始逐步支持 Extract-Load-Transform (ELT)，使用户免于维护多套异构数据系统。本文将介绍 ByConity 在ELT方面的能力规划，实现原理和使用方式等。
