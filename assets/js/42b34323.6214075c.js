"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9814],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(h,l(l({ref:t},s),{},{components:n})):i.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=n(4778),o=(n(9496),n(9613));const r={title:"Client Connection",tags:["Docs"]},l="Client Connection",a={unversionedId:"basic-guide/client-connection",id:"basic-guide/client-connection",title:"Client Connection",description:"Document Type: Tutorial",source:"@site/docs/basic-guide/client-connection.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/client-connection",permalink:"/docs/basic-guide/client-connection",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/basic-guide/client-connection.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Client Connection",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Background Tasks Management",permalink:"/docs/basic-guide/background-task-management"},next:{title:"Cluster Configuration",permalink:"/docs/basic-guide/cluster-configuration"}},c={},u=[{value:"Command line client (CLI)",id:"command-line-client-cli",level:2},{value:"Docker Client",id:"docker-client",level:3},{value:"Clickhouse Client",id:"clickhouse-client",level:3},{value:"Driver",id:"driver",level:2},{value:"Python",id:"python",level:3},{value:"clickhouse-connect",id:"clickhouse-connect",level:4},{value:"clickhouse-driver",id:"clickhouse-driver",level:4},{value:"Go",id:"go",level:3},{value:"use clickhouse-go to connect",id:"use-clickhouse-go-to-connect",level:4},{value:"use ch-go to connect",id:"use-ch-go-to-connect",level:4},{value:"Java",id:"java",level:3},{value:"HTTP",id:"http",level:2},{value:"Reference Documentation",id:"reference-documentation",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client-connection"},"Client Connection"),(0,o.kt)("p",null,"Document Type: Tutorial"),(0,o.kt)("p",null,"Document structure: tutorial purpose, pre-preparation, step-by-step explanation of principles & examples, and related document recommendations;"),(0,o.kt)("p",null,"Summary:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Which clients or drivers does ByConity provide to interact with other systems"),(0,o.kt)("li",{parentName:"ol"},"How to download and start these clients after the cluster is deployed")),(0,o.kt)("h2",{id:"command-line-client-cli"},"Command line client (CLI)"),(0,o.kt)("h3",{id:"docker-client"},(0,o.kt)("a",{parentName:"h3",href:"https://hub.docker.com/r/yandex/clickhouse-server/"},"Docker Client")),(0,o.kt)("p",null,"If you have installed Docker, you can directly establish a ByConity connection with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it yandex/clickhouse-client --host 127.0.0.1 --port 9000 --user default --password xxxx\n\n")),(0,o.kt)("p",null,"All of the following are ",(0,o.kt)("strong",{parentName:"p"},"Optional"),", subject to availability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--host xxx")," host IP or domain name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--port 9000")," tcp port\uff0cdefault as 9000"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--user default")," user name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--password xxxx")," password")),(0,o.kt)("h3",{id:"clickhouse-client"},"Clickhouse Client"),(0,o.kt)("p",null,"ByConity is compatible with clients provided by the ClickHouse open source community."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/sql-clients/clickhouse-client-local"},"ClickhouseClient installation reference for each operating system"),"\uff0c\u4e0b\u9762\u662f\u4ee5 MacOS x86_64 \u4e3a\u4f8b\u7684\u5b89\u88c5\u547d\u4ee4\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -O 'https://builds.clickhouse.com/master/macos/clickhouse' \\\n&& chmod a+x ./clickhouse\n\nsudo mv ./clickhouse /usr/local/bin/\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build connection\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse client --host 127.0.0.1 --password xxxx\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse client --help")," You can view the optional parameters, the parameters here and above.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run -it yandex/clickhouse-client ...")," The following parameter names are consistent."),(0,o.kt)("h2",{id:"driver"},"Driver"),(0,o.kt)("p",null,"The open source drivers in various languages officially provided by Clickhouse can be directly used for ByConity connections."),(0,o.kt)("h3",{id:"python"},"Python"),(0,o.kt)("h4",{id:"clickhouse-connect"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-connect"},"clickhouse-connect")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clickhouse-connect only support python3"),(0,o.kt)("li",{parentName:"ul"},"installation\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"pip3 install clickhouse-connect")),(0,o.kt)("li",{parentName:"ul"},"demo code\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import clickhouse_connect\n\n# connect\nclient = clickhouse_connect.get_client(host='localhost', username='default', password='xxxx')\n\n# query\nquery_result = client.query('SHOW DATABASES;')\nprint (query_result.result_set)\n\n")),(0,o.kt)("h4",{id:"clickhouse-driver"},(0,o.kt)("a",{parentName:"h4",href:"https://pypi.org/project/clickhouse-driver/"},"clickhouse-driver")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python3 installation\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"pip3 install clickhouse-driver")),(0,o.kt)("li",{parentName:"ul"},"Python2 installation\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"pip install clickhouse-driver")),(0,o.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from clickhouse_driver import Client\nfrom clickhouse_driver import connect\n\n# connect\nclient = Client(host='localhost',port =9000, user='default', password='xxxx')\n\n# query\nquery_result = client.execute('SHOW DATABASES;')\nprint (query_result)\n\n")),(0,o.kt)("h3",{id:"go"},"Go"),(0,o.kt)("h4",{id:"use-clickhouse-go-to-connect"},"use ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-go"},"clickhouse-go")," to connect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compared with the later ch-go, lickhouse-go is more friendly to Go's type support, and the bottom layer is implemented by ch-go, which is recommended."),(0,o.kt)("li",{parentName:"ul"},"Execute ",(0,o.kt)("inlineCode",{parentName:"li"},"go get ``github.com/ClickHouse/clickhouse-go/v2")," in the project to install"),(0,o.kt)("li",{parentName:"ul"},"demo code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'package main\n\nimport (\n        "context"\n        "log"\n        "net"\n        "time"\n\n        "github.com/ClickHouse/clickhouse-go/v2"\n)\n\nfunc main() {\n        ctx := context.Background()\n\n        // Configure connection parameters\n        conn, err := clickhouse.Open(&clickhouse.Options{\n                Addr: string[]{"127.0.0.1"},\n                Auth: clickhouse.Auth{\n                        Database: "my_db",\n                        Username: "default",\n                        Password: "xxxx",\n                },\n                DialContext: func(ctx context.Context, addr string) (net.Conn, error) {\n                        var d net.Dialer\n                        return d.DialContext(ctx, "tcp", addr)\n                },\n                Settings: clickhouse.Settings{\n                        "max_execution_time": 60,\n                },\n                DialTimeout:      time.Duration(10) * time.Second,\n                MaxOpenConns:     5,\n                MaxIdleConns:     5,\n                ConnMaxLifetime:  time.Duration(10) * time.Minute,\n                ConnOpenStrategy: clickhouse.ConnOpenInOrder,\n        })\n        if err != nil {\n                log.Panic(err)\n        }\n\n        if err := conn.Ping(ctx); err != nil {\n                log.Panic(err)\n        }\n\n        // run SQL\n        if err := conn.Exec(ctx, "SHOW DATABASES;"); err != nil {\n                log.Panic(err)\n        }\n}\n\n')),(0,o.kt)("h4",{id:"use-ch-go-to-connect"},"use ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/ClickHouse/ch-go"},"ch-go")," to connect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ch-go has better support for Clickhouse data types, and its performance is slightly higher than clickhouse-go."),(0,o.kt)("li",{parentName:"ul"},"installation\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"go get ``github.com/ClickHouse/ch-go")),(0,o.kt)("li",{parentName:"ul"},"demo code\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'package main\n\nimport (\n  "context"\n  "fmt"\n\n  "github.com/ClickHouse/ch-go"\n  "github.com/ClickHouse/ch-go/proto"\n)\n\nfunc main() {\n  ctx := context.Background()\n  c, err := ch.Dial(ctx, ch.Options{Address: "localhost:9000"})\n  if err != nil {\n    panic(err)\n  }\n  var (\n    numbers int\n    data    proto.ColUInt64\n  )\n  if err := c.Do(ctx, ch.Query{\n    Body: "SELECT number FROM system.numbers LIMIT 500000000",\n    Result: proto.Results{\n      {Name: "number", Data: &data},\n    },\n    // OnResult will be called on next received data block.\n    OnResult: func(ctx context.Context, b proto.Block) error {\n      numbers += len(data)\n      return nil\n    },\n  }); err != nil {\n    panic(err)\n  }\n  fmt.Println("numbers:", numbers)\n}\n\n')),(0,o.kt)("h3",{id:"java"},"Java"),(0,o.kt)("p",null,"use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-jdbc"},"clickhouse-jdbc")," to connect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installation and configuration via maven \uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n    \x3c!-- please stop using ru.yandex.clickhouse as it's been deprecated --\x3e\n    <groupId>com.clickhouse</groupId>\n    <artifactId>clickhouse-jdbc</artifactId>\n    <version>0.3.2-patch11</version>\n    \x3c!-- use uber jar with all dependencies included, change classifier to http for smaller jar --\x3e\n    <classifier>all</classifier>\n    <exclusions>\n        <exclusion>\n            <groupId>*</groupId>\n            <artifactId>*</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"demo code\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'String url = "jdbc:ch://localhost:8123";\nProperties properties = new Properties();\nproperties.setProperty("max_execution_time", "120");\nClickHouseDataSource dataSource = new ClickHouseDataSource(url, properties);\ntry (Connection conn = dataSource.getConnection("default", "password");\n    Statement stmt = conn.createStatement()) {\n    ResultSet rs = stmt.executeQuery("SHOW DATABASES;");\n    while(rs.next()) {\n        // ...\n    }\n}\n\n')),(0,o.kt)("h2",{id:"http"},"HTTP"),(0,o.kt)("p",null,"ByConity also provides an HTTP connection method, which can execute SQL with curl or postman. curl example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location --request POST '127.0.0.1:8123/?max_execution_time=60&default_format=Native' \\\n--header 'Authorization: Basic xxx' \\\n--header 'Content-Type: text/plain' \\\n--data-raw 'SHOW DATABASES;'\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Encrypt with ",(0,o.kt)("inlineCode",{parentName:"li"},"Basic Auth")," (username + password), the encrypted result is ",(0,o.kt)("inlineCode",{parentName:"li"},"--header 'Authorization: Basic xxx'")," above"),(0,o.kt)("li",{parentName:"ul"},"Fill in the SQL to be executed directly in the Body, corresponding to ",(0,o.kt)("inlineCode",{parentName:"li"},"--data-raw 'SHOW DATABASES;'")," above"),(0,o.kt)("li",{parentName:"ul"},"The default port number of the HTTP interface is ",(0,o.kt)("inlineCode",{parentName:"li"},"8123")),(0,o.kt)("li",{parentName:"ul"},"Example parameters:"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_execution_time=60")," specifies the maximum waiting time for the query (seconds)"),(0,o.kt)("li",{parentName:"ul"},"By default, the returned data is in ",(0,o.kt)("inlineCode",{parentName:"li"},"TabSeparated")," format, and ",(0,o.kt)("inlineCode",{parentName:"li"},"default_format")," can specify a default format other than ",(0,o.kt)("inlineCode",{parentName:"li"},"TabSeparated"))),(0,o.kt)("h2",{id:"reference-documentation"},"Reference Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/zh/interfaces/http"},"Clickhouse Http reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/language-clients"},"Clickhouse different language Driver reference"))))}d.isMDXComponent=!0}}]);