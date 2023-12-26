"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1863],{9613:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>E});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},N="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),N=p(a),k=l,E=N["".concat(s,".").concat(k)]||N[k]||u[k]||i;return a?n.createElement(E,r(r({ref:t},m),{},{components:a})):n.createElement(E,r({ref:t},m))}));function E(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[N]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(4778),l=(a(9496),a(9613));const i={title:"Role-based Access Control (RBAC)",tags:["Docs"]},r="Role-based Access Control (RBAC)",o={unversionedId:"advanced-guide/rbac",id:"version-0.2.0/advanced-guide/rbac",title:"Role-based Access Control (RBAC)",description:"RBAC in Byconity is adapted from the ClickHouse version of RBAC in most aspects other than minor syntax differences and the underlying implementation which will be explained further below.",source:"@site/versioned_docs/version-0.2.0/advanced-guide/rbac.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/rbac",permalink:"/zh-cn/docs/advanced-guide/rbac",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/rbac.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"0.2.0",frontMatter:{title:"Role-based Access Control (RBAC)",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u8be2\u4f18\u5316\u5668",permalink:"/zh-cn/docs/advanced-guide/query-optimiser"},next:{title:"\u8d44\u6e90\u7ba1\u7406\u5668",permalink:"/zh-cn/docs/advanced-guide/resource-manager"}},s={},p=[{value:"Enabling RBAC",id:"enabling-rbac",level:2},{value:"Differences",id:"differences",level:2},{value:"How to use RBAC",id:"how-to-use-rbac",level:2},{value:"CREATE and ALTER User/Role",id:"create-and-alter-userrole",level:3},{value:"GRANT Privileges and Roles",id:"grant-privileges-and-roles",level:3},{value:"SET Role",id:"set-role",level:3},{value:"Revoke",id:"revoke",level:3},{value:"Drop",id:"drop",level:3},{value:"System Tables for Access Entities",id:"system-tables-for-access-entities",level:3}],m={toc:p},N="wrapper";function u(e){let{components:t,...i}=e;return(0,l.kt)(N,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"role-based-access-control-rbac"},"Role-based Access Control (RBAC)"),(0,l.kt)("p",null,"RBAC in Byconity is adapted from the ClickHouse version of RBAC in most aspects other than minor syntax differences and the underlying implementation which will be explained further below."),(0,l.kt)("h2",{id:"enabling-rbac"},"Enabling RBAC"),(0,l.kt)("p",null,"You can enable RBAC by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"access_management = 1")," and adding a password for the default user in the",(0,l.kt)("inlineCode",{parentName:"p"},"users.xml")," configuration file. More info can be found ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/access-rights/#enabling-access-control"},"here"),".\n",(0,l.kt)("img",{src:a(4988).Z,width:"2016",height:"1168"})),(0,l.kt)("p",null,"After enabling RBAC, the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," user would have all the permissions. After this, it is recommended that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"You create all the required users. Also create an admin account (for eg. ",(0,l.kt)("inlineCode",{parentName:"li"},"admin_user")," ) using the following syntax ",(0,l.kt)("inlineCode",{parentName:"li"},"GRANT ALL ON *.* TO admin_user_account WITH GRANT OPTION"),"."),(0,l.kt)("li",{parentName:"ol"},"You can then restrict the ",(0,l.kt)("inlineCode",{parentName:"li"},"default")," user permissions by setting ",(0,l.kt)("inlineCode",{parentName:"li"},"<readonly>")," value to 1 in the ",(0,l.kt)("inlineCode",{parentName:"li"},"users.xml")," file")),(0,l.kt)("h2",{id:"differences"},"Differences"),(0,l.kt)("p",null,"The main differences are as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ByConity/ByConity/issues/660"},"underlying implementation")," uses the key value store by default in order to persist and perform operations on access entities instead of disk storage. This is to support the cloud native architecture of Byconity."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE/ALTER")," User/Role does not support the ",(0,l.kt)("inlineCode",{parentName:"li"},"HOST")," keyword as Byconity does not store entities on the server disk.")),(0,l.kt)("h1",{id:"settings"},"Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Configuration Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value, Meaning"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"access_entity_ttl"),(0,l.kt)("td",{parentName:"tr",align:"left"},"3600(60 Mins), TTL for access entities stored in memory in seconds"),(0,l.kt)("td",{parentName:"tr",align:"left"},"It is recommended that this value be set at a reasonable interval for updating the entities in memory so as to not put too much read pressure on the key value store."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"how-to-use-rbac"},"How to use RBAC"),(0,l.kt)("h3",{id:"create-and-alter-userrole"},"CREATE and ALTER User/Role"),(0,l.kt)("p",null,"Create user accounts with the following syntax. Note that passwords should follow the following rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Be at least 12 characters long"),(0,l.kt)("li",{parentName:"ul"},"Contain at least 1 numeric character"),(0,l.kt)("li",{parentName:"ul"},"Contain at least 1 uppercase character"),(0,l.kt)("li",{parentName:"ul"},"Contain at least 1 lowercase character"),(0,l.kt)("li",{parentName:"ul"},"Contain at least 1 special character")),(0,l.kt)("p",null,"A user account has the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Identification information."),(0,l.kt)("li",{parentName:"ul"},"Privileges that define a scope of queries the user can execute."),(0,l.kt)("li",{parentName:"ul"},"Assigned and default roles."),(0,l.kt)("li",{parentName:"ul"},"Settings with their constraints applied by default at user login."),(0,l.kt)("li",{parentName:"ul"},"Assigned settings profiles.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE USER [IF NOT EXISTS | OR REPLACE] name\n[NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}]\nBY {'password' | 'hash'}}| {WITH ssl_certificate CN 'common_name'}]\n[DEFAULT ROLE role [,...]] [DEFAULT DATABASE database | NONE]\n[GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n[SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n\n-- Example\nCREATE USER john IDENTIFIED WITH sha256_password BY 'my_password' DEFAULT ROLE accountant;\n\n-- To login as a user\nclickhouse-client --host 127.0.0.1 --port 9000 --user=john password=my_password\n")),(0,l.kt)("p",null,"Create roles with the following syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE ROLE [IF NOT EXISTS | OR REPLACE] name\n[SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [CONST|READONLY|WRITABLE|CHANGEABLE_IN_READONLY] | PROFILE 'profile_name'] [,...]\n\n-- Create and Grant privilege to role. Now accountant role can read from `db` database\nCREATE ROLE accountant;\nGRANT SELECT ON db.* TO accountant;\n\n-- user can set his granted role to then execute allowed queries. Note that user and role permissions are unioned.\nSET ROLE accountant;\nSELECT * FROM db.*;\n")),(0,l.kt)("h3",{id:"grant-privileges-and-roles"},"GRANT Privileges and Roles"),(0,l.kt)("p",null,"Privilege in RBAC is a permission to execute specific kind of queries. They have a hierarchical structure. It is similar to ClickHouse. More types of permissions will be added in the future. The current permissions list is follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SELECT"),(0,l.kt)("li",{parentName:"ul"},"INSERT"),(0,l.kt)("li",{parentName:"ul"},"ALTER",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER TABLE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER UPDATE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER DELETE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER COLUMN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER ADD COLUMN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER DROP COLUMN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER MODIFY COLUMN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER COMMENT COLUMN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER CLEAR COLUMN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER RENAME COLUMN")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER INDEX"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER ORDER BY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER SAMPLE BY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER ADD INDEX")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER DROP INDEX")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER MATERIALIZE INDEX")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER CLEAR INDEX")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER CONSTRAINT"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER ADD CONSTRAINT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER DROP CONSTRAINT")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER TTL"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER MATERIALIZE TTL")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER SETTINGS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER MOVE PARTITION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER FETCH PARTITION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER FREEZE PARTITION")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER VIEW"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER VIEW REFRESH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER VIEW MODIFY QUERY")))))),(0,l.kt)("li",{parentName:"ul"},"CREATE",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE TABLE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE ARBITRARY TEMPORARY TABLE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE TEMPORARY TABLE")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE VIEW")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE DICTIONARY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE FUNCTION")))),(0,l.kt)("li",{parentName:"ul"},"DROP",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP DATABASE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP TABLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP VIEW")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP DICTIONARY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP FUNCTION")))),(0,l.kt)("li",{parentName:"ul"},"TRUNCATE"),(0,l.kt)("li",{parentName:"ul"},"OPTIMIZE"),(0,l.kt)("li",{parentName:"ul"},"SHOW",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW DATABASES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW TABLES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW COLUMNS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW DICTIONARIES")))),(0,l.kt)("li",{parentName:"ul"},"KILL QUERY"),(0,l.kt)("li",{parentName:"ul"},"ACCESS MANAGEMENT",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE USER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER USER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP USER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE ROLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER ROLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP ROLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE ROW POLICY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER ROW POLICY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP ROW POLICY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE QUOTA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER QUOTA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP QUOTA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE SETTINGS PROFILE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER SETTINGS PROFILE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP SETTINGS PROFILE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW ACCESS"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW_USERS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW_ROLES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW_ROW_POLICIES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW_QUOTAS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SHOW_SETTINGS_PROFILES")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ROLE ADMIN")))),(0,l.kt)("li",{parentName:"ul"},"SYSTEM",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM SHUTDOWN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM DROP CACHE"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM DROP DNS CACHE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM DROP MARK CACHE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM DROP UNCOMPRESSED CACHE")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM RELOAD"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM RELOAD CONFIG")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM RELOAD DICTIONARY"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM RELOAD EMBEDDED DICTIONARIES")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM RELOAD FUNCTION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM RELOAD FUNCTIONS")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM MERGES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM TTL MERGES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM FETCHES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM MOVES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM FLUSH"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM FLUSH DISTRIBUTED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYSTEM FLUSH LOGS")))))),(0,l.kt)("li",{parentName:"ul"},"INTROSPECTION",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"addressToLine")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"addressToLineWithInlines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"addressToSymbol")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"demangle")))),(0,l.kt)("li",{parentName:"ul"},"SOURCES",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FILE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"REMOTE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"YSQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ODBC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"JDBC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HDFS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"S3")))),(0,l.kt)("li",{parentName:"ul"},"dictGet"),(0,l.kt)("li",{parentName:"ul"},"displaySecretsInShowAndSelect")),(0,l.kt)("p",null,"Use the GRANT syntax to grant permissions or assign roles to a user/role."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"-- Grant Privellege\nGRANT privilege[(column_name [,...])] [,...]\nON {db.table|db.*|*.*|table|*}\nTO {user | role | CURRENT_USER} [,...] [WITH GRANT OPTION] [WITH REPLACE OPTION]\n\n-- Grant Roles\nGRANT role [,...] TO {user | another_role | CURRENT_USER} [,...]\n[WITH ADMIN OPTION] [WITH REPLACE OPTION]\n\n-- Grant SELECT permissions on all tables in `db` to `accoutant` role\nGRANT SELECT ON db.* TO accountant;\n\n-- Grant SELECT permissions on `db.table` to user `john`. Also grant `john` the permission to grant other users (who are GRANTEEs of `john`) his own permissions.\nGRANT SELECT(x,y) ON db.table TO john WITH GRANT OPTION;\nALTER  USER john GRANTEES jack;\n\n-- Examples of creating users, roles and granting roles.\nCREATE ROLE column1_users;\nGRANT SELECT(id, column1) ON db1.table1 TO column1_users;\nCREATE USER column_user IDENTIFIED BY 'password';\nGRANT column1_users TO column_user;\n")),(0,l.kt)("h3",{id:"set-role"},"SET Role"),(0,l.kt)("p",null,"Activates roles for the current user. This role should be granted to the user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SET ROLE {DEFAULT | NONE | role [,...] | ALL | ALL EXCEPT role [,...]}\n")),(0,l.kt)("p",null,"Sets default roles to a user."),(0,l.kt)("p",null,"Default roles are roles that are activated at user login. Roles can be set as default only if the usr was granted these roles. An exception is thrown otherwise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SET DEFAULT ROLE {NONE | role [,...] | ALL | ALL EXCEPT role [,...]} TO {user|CURRENT_USER} [,...]\n")),(0,l.kt)("h3",{id:"revoke"},"Revoke"),(0,l.kt)("p",null,"Revokes privileges from users or roles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"-- Revoking privileges from users\nREVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n\n-- Example\nREVOKE  SELECT  ON accounts.*  FROM john;\n\n-- REVOKE part of a user's privilege\nGRANT  SELECT  ON accounts.staff TO mira;\nREVOKE  SELECT(wage)  ON accounts.staff FROM mira;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"-- Revoking roles from users\nREVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,l.kt)("h3",{id:"drop"},"Drop"),(0,l.kt)("p",null,"Drop roles or users"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name] [FROM access_storage_type]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name] [FROM access_storage_type]\n")),(0,l.kt)("h3",{id:"system-tables-for-access-entities"},"System Tables for Access Entities"),(0,l.kt)("p",null,"Shows privileges for a user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW GRANTS [FOR user1 [, user2 ...]]\n")),(0,l.kt)("p",null,"Shows parameters that were used at a user creation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW CREATE USER [name1 [, name2 ...] | CURRENT_USER]\n")),(0,l.kt)("p",null,"Shows parameters that were used at a role creation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SHOW CREATE ROLE name1 [, name2 ...]\n")),(0,l.kt)("p",null,"System tables for access entities can be found in the following tables ",(0,l.kt)("inlineCode",{parentName:"p"},"role_grants"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"roles"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"users")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM system.role_grants;\nSELECT * FROM system.roles;\nSELECT * FROM system.users;\n")))}u.isMDXComponent=!0},4988:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-rbac-d57e69b84f1fc280b64b55878a042aba.png"}}]);