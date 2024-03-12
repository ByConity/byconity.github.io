"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6363],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,c=m["".concat(o,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(4778),l=(n(9496),n(9613));const i={title:"Data Types",slug:"data-types",hidden:!1,metadata:{title:"Supported Data Types in ByConity",description:"ByConity can support various data types, such as Numeric Data Types, String & Binary Data Types, Date & Time Data Types, Semi-structured Data Types, etc."},createdAt:"2021-06-17T15:27:33.972Z",updatedAt:"2022-02-28T02:26:27.494Z",tags:["Docs"]},r=void 0,p={unversionedId:"sql-syntax/data-types",id:"version-0.2.0/sql-syntax/data-types",title:"Data Types",description:"The data types provided in ByConity are adapted from ClickHouse. Visit this page for more information on ClickHouse data types.",source:"@site/versioned_docs/version-0.2.0/sql-syntax/data-types.mdx",sourceDirName:"sql-syntax",slug:"/sql-syntax/data-types",permalink:"/docs/0.2.0/sql-syntax/data-types",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/sql-syntax/data-types.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Data Types",slug:"data-types",hidden:!1,metadata:{title:"Supported Data Types in ByConity",description:"ByConity can support various data types, such as Numeric Data Types, String & Binary Data Types, Date & Time Data Types, Semi-structured Data Types, etc."},createdAt:"2021-06-17T15:27:33.972Z",updatedAt:"2022-02-28T02:26:27.494Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"ANSI Compatibility",permalink:"/docs/0.2.0/sql-syntax/ansi-compatibility"},next:{title:"Functions",permalink:"/docs/0.2.0/sql-syntax/functions/functions"}},o={},s=[{value:"Summary of Data Types",id:"summary-of-data-types",level:2},{value:"Numeric Data Types",id:"numeric-data-types",level:2},{value:"UInt8, UInt16, UInt32, UInt64, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",id:"uint8-uint16-uint32-uint64-uint256-int8-int16-int32-int64-int128-int256",level:3},{value:"Float32, Float64",id:"float32-float64",level:3},{value:"Decimal(P, S), Decimal32(S), Decimal64(S), Decimal128(S)",id:"decimalp-s-decimal32s-decimal64s-decimal128s",level:3},{value:"String &amp; Binary Data Types",id:"string--binary-data-types",level:2},{value:"String",id:"string",level:3},{value:"Fixedstring(N)",id:"fixedstringn",level:3},{value:"Date &amp; Time Data Types",id:"date--time-data-types",level:3},{value:"Date",id:"date",level:3},{value:"DateTime",id:"datetime",level:3},{value:"Semi-structured Data Types",id:"semi-structured-data-types",level:2},{value:"Array(T)",id:"arrayt",level:3},{value:"Map(key, value)",id:"mapkey-value",level:3},{value:"Tuple(T1,T2...)",id:"tuplet1t2",level:3},{value:"Enum8, Enum 16",id:"enum8-enum-16",level:3},{value:"Nested(n1 T1, n2 T2, \u2026)",id:"nestedn1-t1-n2-t2-",level:3},{value:"Other Special Data Types",id:"other-special-data-types",level:2},{value:"IPv4",id:"ipv4",level:3},{value:"IPv6",id:"ipv6",level:3},{value:"UUID",id:"uuid",level:3},{value:"Nullable(T)",id:"nullablet",level:3}],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The data types provided in ByConity are adapted from ClickHouse. Visit this ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/"},"page")," for more information on ClickHouse data types."),(0,l.kt)("h2",{id:"summary-of-data-types"},"Summary of Data Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Numeric Data Types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Int8, TINYINT Int16, SMALLINT Int32, INT, INTEGER Int64, BIGINT UInt8 UInt16 UInt32 UInt64"),(0,l.kt)("li",{parentName:"ul"},"Float32, FLOAT Float64, DOUBLE"),(0,l.kt)("li",{parentName:"ul"},"Decimal, DEC Decimal32 Decimal64 Decimal128"))),(0,l.kt)("li",{parentName:"ul"},"String & Binary Data Types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"String, TEXT, TINYTEXT, MEDIUMTEXT, LONGTEXT, BLOB, TINYBLOB, MEDIUMBLOB , LONGBLOB, CHAR, VARCHAR"),(0,l.kt)("li",{parentName:"ul"},"FixedString, BINARY"))),(0,l.kt)("li",{parentName:"ul"},"Date & Time Data Types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Date"),(0,l.kt)("li",{parentName:"ul"},"DateTime, TIMESTAMP"))),(0,l.kt)("li",{parentName:"ul"},"Semi-structured Data Types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Array"),(0,l.kt)("li",{parentName:"ul"},"Map"),(0,l.kt)("li",{parentName:"ul"},"Tuple"),(0,l.kt)("li",{parentName:"ul"},"Enum8 Enum16"),(0,l.kt)("li",{parentName:"ul"},"Nested"))),(0,l.kt)("li",{parentName:"ul"},"Other Special Data Types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"IPv4 IPv6"),(0,l.kt)("li",{parentName:"ul"},"Nullable"),(0,l.kt)("li",{parentName:"ul"},"UUID")))),(0,l.kt)("h2",{id:"numeric-data-types"},"Numeric Data Types"),(0,l.kt)("h3",{id:"uint8-uint16-uint32-uint64-uint256-int8-int16-int32-int64-int128-int256"},"UInt8, UInt16, UInt32, UInt64, UInt256, Int8, Int16, Int32, Int64, Int128, Int256"),(0,l.kt)("p",null,"Fixed-length integers, with or without a sign."),(0,l.kt)("p",null,"When creating tables, numeric parameters for integer numbers can be set (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"TINYINT(8)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SMALLINT(16)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"INT(32)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BIGINT(64)"),"), but ByConity ignores them."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aliases")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int8")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"TINYINT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int16")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"SMALLINT"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int32")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"INT"),",",(0,l.kt)("inlineCode",{parentName:"p"},"INTEGER"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int64")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"BIGINT"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Int Ranges")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int8")," \u2014 ","[-128 : 127]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int16")," \u2014 ","[-32768 : 32767]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int32")," \u2014 ","[-2147483648 : 2147483647]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int64")," \u2014 ","[-9223372036854775808 : 9223372036854775807]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int128")," \u2014 ","[-170141183460469231731687303715884105728 : 170141183460469231731687303715884105727]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Int256")," \u2014 ","[-57896044618658097711785492504343953926634992332820282019728792003956564819968 : 57896044618658097711785492504343953926634992332820282019728792003956564819967]"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"UInt Ranges")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UInt8")," \u2014 ","[0 : 255]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UInt16")," \u2014 ","[0 : 65535]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UInt32")," \u2014 ","[0 : 4294967295]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UInt64")," \u2014 ","[0 : 18446744073709551615]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UInt256")," \u2014 ","[0 : 115792089237316195423570985008687907853269984665640564039457584007913129639935]")),(0,l.kt)("h3",{id:"float32-float64"},"Float32, Float64"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aliases")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Float32")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Float64")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE"),"."))),(0,l.kt)("p",null,"When creating tables, numeric parameters for floating point numbers can be set (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT(12)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT(15, 22)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE(12)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE(4, 18)"),"), but ByConity ignores them."),(0,l.kt)("h3",{id:"decimalp-s-decimal32s-decimal64s-decimal128s"},"Decimal(P, S), Decimal32(S), Decimal64(S), Decimal128(S)"),(0,l.kt)("p",null,"Signed fixed-point numbers that keep precision during add, subtract and multiply operations. For division least significant digits are discarded (not rounded)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aliases")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Decimal")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"DEC"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"P - precision. Valid range: ","[ 1 : 76 ]",". Determines how many decimal digits number can have (including fraction).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"S - scale. Valid range: ","[ 0 : P ]",". Determines how many decimal digits fraction can have."))),(0,l.kt)("p",null,"Depending on P parameter value Decimal(P, S) is a synonym for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"P from ","[ 1 : 9 ]"," - for Decimal32(S)"),(0,l.kt)("li",{parentName:"ul"},"P from ","[ 10 : 18 ]"," - for Decimal64(S)"),(0,l.kt)("li",{parentName:"ul"},"P from ","[ 19 : 38 ]"," - for Decimal128(S)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Decimal Value Ranges")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Decimal32(S) - ( -1 ",(0,l.kt)("em",{parentName:"p"}," 10^(9 - S), 1 ")," 10^(9 - S) )")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Decimal64(S) - ( -1 ",(0,l.kt)("em",{parentName:"p"}," 10^(18 - S), 1 ")," 10^(18 - S) )")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Decimal128(S) - ( -1 ",(0,l.kt)("em",{parentName:"p"}," 10^(38 - S), 1 ")," 10^(38 - S) )"))),(0,l.kt)("p",null,"For example, Decimal32(4) can contain numbers from -99999.9999 to 99999.9999 with 0.0001 step."),(0,l.kt)("h2",{id:"string--binary-data-types"},"String & Binary Data Types"),(0,l.kt)("h3",{id:"string"},"String"),(0,l.kt)("p",null,"Strings of an arbitrary length. The length is not limited. The value can contain an arbitrary set of bytes, including null bytes."),(0,l.kt)("p",null,"The String type replaces the types VARCHAR, BLOB, CLOB, and others from other DBMSs."),(0,l.kt)("p",null,"When creating tables, numeric parameters for string fields can be set (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"VARCHAR(255)"),"), but ByConity ignores them."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Encodings")),(0,l.kt)("p",null,"ByConity doesn\u2019t have the concept of encodings. Strings can contain an arbitrary set of bytes, which are stored and output as-is."),(0,l.kt)("p",null,"If you need to store texts, we recommend using UTF-8 encoding. At the very least, if your terminal uses UTF-8 (as recommended), you can read and write your values without making conversions."),(0,l.kt)("p",null,"Similarly, certain functions for working with strings have separate variations that work under the assumption that the string contains a set of bytes representing a UTF-8 encoded text."),(0,l.kt)("p",null,"For example, the \u2018length\u2019 function calculates the string length in bytes, while the \u2018lengthUTF8\u2019 function calculates the string length in Unicode code points, assuming that the value is UTF-8 encoded."),(0,l.kt)("h3",{id:"fixedstringn"},"Fixedstring(N)"),(0,l.kt)("p",null,"A fixed-length string of ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," bytes (neither characters nor code points)."),(0,l.kt)("p",null,"To declare a column of ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString")," type, use the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<column_name> FixedString(N)\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," is a natural number."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString")," type is efficient when data has the length of precisely ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," bytes. In all other cases, it is likely to reduce efficiency."),(0,l.kt)("p",null,"Examples of the values that can be efficiently stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString"),"-typed columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The binary representation of IP addresses (",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," for IPv6).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Language codes (ru_RU, en_US \u2026 ).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Currency codes (USD, RUB \u2026 ).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Binary representation of hashes (",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," for MD5, ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString(32)")," for SHA256)."))),(0,l.kt)("p",null,"To store UUID values, use the UUID data type."),(0,l.kt)("p",null,"When inserting the data, ByConity:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Complements a string with null bytes if the string contains fewer than ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," bytes.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Throws the ",(0,l.kt)("inlineCode",{parentName:"p"},"Too large value for FixedString(N)")," exception if the string contains more than ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," bytes."))),(0,l.kt)("p",null,"When selecting the data, ByConity does not remove the null bytes at the end of the string. If you use the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause, you should add null bytes manually to match the ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString")," value. The following example illustrates how to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause with ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString"),"."),(0,l.kt)("p",null,"This behaviour differs from MySQL for the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHAR")," type (where strings are padded with spaces, and the spaces are removed for output)."),(0,l.kt)("p",null,"Note that the length of the ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString(N)")," value is constant. The ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/functions/array-functions/#array_functions-length"},"length")," function returns ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," even if the ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString(N)")," value is filled only with null bytes, but the ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/functions/string-functions/#empty"},"empty")," function returns ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," in this case."),(0,l.kt)("h3",{id:"date--time-data-types"},"Date & Time Data Types"),(0,l.kt)("h3",{id:"date"},"Date"),(0,l.kt)("p",null,"A date. Stored in two bytes as the number of days since 1970-01-01 (unsigned). Allows storing values from just after the beginning of the Unix Epoch to the upper threshold defined by a constant at the compilation stage (currently, this is until the year 2149, but the final fully-supported year is 2148)."),(0,l.kt)("p",null,"The date value is stored without the time zone."),(0,l.kt)("h3",{id:"datetime"},"DateTime"),(0,l.kt)("p",null,"Aliases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"TIMESTAMP"))),(0,l.kt)("p",null,"Allows storing an instant in time, which can be expressed as a calendar date and a time of a day."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DateTime([timezone])\n")),(0,l.kt)("p",null,"Supported range of values: ","[1970-01-01 00:00:00, 2105-12-31 23:59:59]","."),(0,l.kt)("p",null,"Resolution: 1 second."),(0,l.kt)("h2",{id:"semi-structured-data-types"},"Semi-structured Data Types"),(0,l.kt)("h3",{id:"arrayt"},"Array(T)"),(0,l.kt)("p",null,"An array of ",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"-type items. ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," can be any data type, including an array."),(0,l.kt)("p",null,"The maximum size of an array is limited to one million elements."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"You can use a function to create an array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"array(T)\n")),(0,l.kt)("p",null,"You can also use square brackets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[]\n")),(0,l.kt)("h3",{id:"mapkey-value"},"Map(key, value)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Map(key, value)")," data type stores ",(0,l.kt)("inlineCode",{parentName:"p"},"key:value")," pairs."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,"-"," ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u2014 The key part of the pair. ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/string/"},"String")," or ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/int-uint/"},"Integer"),"."),(0,l.kt)("p",null,"-"," ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u2014 The value part of the pair. ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/string/"},"String"),", ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/int-uint/"},"Integer")," or ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/array/"},"Array"),"."),(0,l.kt)("p",null,"To get the value from an ",(0,l.kt)("inlineCode",{parentName:"p"},"a Map('key', 'value')")," column, use ",(0,l.kt)("inlineCode",{parentName:"p"},"a{'key'}")," syntax."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Consider the table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE=Memory;\n\nINSERT INTO table_map VALUES ({'key1':1, 'key2':10}), ({'key1':2,'key2':20}), ({'key1':3,'key2':30});\n")),(0,l.kt)("p",null,"Select all ",(0,l.kt)("inlineCode",{parentName:"p"},"key2")," values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT a{'key2'} FROM table_map;\n")),(0,l.kt)("p",null,"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500mapElement(a, 'key2')\u2500\u2510\n\n\u2502                    10  \u2502\n\n\u2502                    20  \u2502\n\n\u2502                    30  \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u2518\n")),(0,l.kt)("h3",{id:"tuplet1t2"},"Tuple(T1,T2...)"),(0,l.kt)("p",null,"A tuple of elements, each having an individual type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"You can use a function to create a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tuple(T1, T2, ...)\n")),(0,l.kt)("p",null,"Example of creating a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT tuple(1,'a') AS x, toTypeName(x)\n")),(0,l.kt)("h3",{id:"enum8-enum-16"},"Enum8, Enum 16"),(0,l.kt)("p",null,"Enumerated type consisting of named values."),(0,l.kt)("p",null,"Named values must be declared as ",(0,l.kt)("inlineCode",{parentName:"p"},"'string' = integer")," pairs. ByConity stores only numbers, but supports operations with the values through their names."),(0,l.kt)("p",null,"ByConity supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Enum8"),": 8-bit Enum. It can contain up to 256 values enumerated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"[-128, 127]")," range.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Enum16"),": 16-bit Enum. It can contain up to 65536 values enumerated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"[-32768, 32767]")," range."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE t_enum(x Enum8('hello' = 1, 'world' = 2)) ENGINE = Memory;\n\nINSERT INTO t_enum VALUES ('hello'), ('world'), ('hello');\n")),(0,l.kt)("p",null,"Column ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," can only store values that are listed in the type definition: ",(0,l.kt)("inlineCode",{parentName:"p"},"'hello'")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"'world'"),". If you try to save any other value, ByConity will raise an exception."),(0,l.kt)("p",null,"When you query data from the table, ByConity outputs the string values from ",(0,l.kt)("inlineCode",{parentName:"p"},"Enum"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT * FROM t_enum\n")),(0,l.kt)("h3",{id:"nestedn1-t1-n2-t2-"},"Nested(n1 T1, n2 T2, \u2026)"),(0,l.kt)("p",null,"A nested data structure is like a table inside a cell. The parameters of a nested data structure \u2013 the column names and types \u2013 are specified the same way as in a CREATE TABLE query. Each table row can correspond to any number of rows in a nested data structure."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE visits(Goals Nested(ID UInt32, Price Int64)) ENGINE = Memory;\n\nINSERT INTO visits values ([1],[1]);\n")),(0,l.kt)("p",null,"This example declares the ",(0,l.kt)("inlineCode",{parentName:"p"},"Goals")," nested data structure, which contains data about conversions (goals reached). Each row in the \u2018visits\u2019 table can correspond to zero or any number of conversions."),(0,l.kt)("p",null,"Only a single nesting level is supported."),(0,l.kt)("p",null,"In most cases, when working with a nested data structure, its columns are specified with column names separated by a dot. These columns make up an array of matching types. All the column arrays of a single nested data structure have the same length."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT Goals.ID, Goals.Price FROM visits WHERE length(Goals.ID) < 5 LIMIT 10;\n")),(0,l.kt)("h2",{id:"other-special-data-types"},"Other Special Data Types"),(0,l.kt)("h3",{id:"ipv4"},"IPv4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IPv4")," is a domain based on ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt32")," type and serves as a typed replacement for storing IPv4 values. It provides compact storage with the human-friendly input-output format and column type information on inspection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE hits (url String, from IPv4) ENGINE = Memory;\n\nDESCRIBE TABLE hits;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IPv4")," domain supports custom input format as IPv4-strings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INSERT INTO hits (url, from) VALUES ('https://wikipedia.org', '116.253.40.133')('https://bytehouse.cloud', '108.156.83.2')('https://docs.bytehouse.cloud', '104.18.211.56');\n\nSELECT * FROM hits;\n")),(0,l.kt)("h3",{id:"ipv6"},"IPv6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IPv6")," is a domain based on ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," type and serves as a typed replacement for storing IPv6 values. It provides compact storage with the human-friendly input-output format and column type information on inspection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE hits (url String, from IPv6) ENGINE = Memory;\n\nDESCRIBE TABLE hits;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IPv6")," domain supports custom input as IPv6-strings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INSERT INTO hits (url, from) VALUES ('https://wikipedia.org', '2a02:aa08:e000:3100::2')('https://bytehouse.cloud', '2001:44c8:129:2632:33:0:252:2')('https://docs.bytehouse.cloud', '2a02:e980:1e::1');\n\nSELECT * FROM hits;\n")),(0,l.kt)("h3",{id:"uuid"},"UUID"),(0,l.kt)("p",null,"A universally unique identifier (UUID) is a 16-byte number used to identify records."),(0,l.kt)("p",null,"The example of UUID type value is represented below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"61f0c404-5cb3-11e7-907b-a6006ad3dba0\n")),(0,l.kt)("p",null,"If you do not specify the UUID column value when inserting a new record, the UUID value is filled with zero:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"00000000-0000-0000-0000-000000000000\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"This example demonstrates creating a table with the UUID type column and inserting a value into the table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE t_uuid (x UUID, y String) ENGINE=Memory;\n\nINSERT INTO t_uuid SELECT generateUUIDv4(), 'Example 1';\n\nSELECT * FROM t_uuid\n")),(0,l.kt)("h3",{id:"nullablet"},"Nullable(T)"),(0,l.kt)("p",null,"Allows storing special marker (NULL) that denotes \u201cmissing value\u201d alongside normal values allowed by ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeName"),". For example, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable(Int8)")," type column can store ",(0,l.kt)("inlineCode",{parentName:"p"},"Int8")," type values, and the rows that don\u2019t have a value will store ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,l.kt)("p",null,"For a ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeName"),", you can\u2019t use composite data types ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/array/"},"Array")," and ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/data-types/tuple/"},"Tuple"),". Composite data types can contain ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," type values, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Array(Nullable(Int8))"),"."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," type field can\u2019t be included in table indexes."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," is the default value for any ",(0,l.kt)("inlineCode",{parentName:"p"},"Nullable")," type, unless specified otherwise in the ByConity server configuration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE t_null(x Int8, y Nullable(Int8)) ENGINE = Memory;\n\nINSERT INTO t_null VALUES (1, NULL), (2, 3);\n\nSELECT x + y FROM t_null;\n")))}d.isMDXComponent=!0}}]);