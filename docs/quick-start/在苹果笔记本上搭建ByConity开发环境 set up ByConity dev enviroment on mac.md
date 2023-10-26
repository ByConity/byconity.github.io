

# 结论： 

目前最简单的搭建环境办法就是借助vscode的Dev Containers插件，在docker上开发。这样能解决环境依赖问题。想了解详细过程可[点击查看这个issue](https://github.com/ByConity/ByConity/issues/822)。

# 1. 安装和配置docker 

### [docker的简要介绍和安装](https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)

参考上面链接中的步骤即可了解并顺利安装docker, 稍有不同的是第五步中，mac不能使用usermod和systemctl，需要用下面两个步骤替换。

1.   使用下面2条命令解决每次命令都输入sudo，注意==替换用户名==

     ```shell
     # 创建docker用户组
     sudo dscl . -create /Groups/docker
     # . 代表操作本地计算机上的目录服务
     
     # 加入docker组
     sudo dseditgroup -o edit -a YourUserName -t user docker
     ```

2.   在Docker Desktop中可解决Docker服务自动启动问题

     ![CleanShot 2023-10-25 at 19.45.04@2x](./assets/CleanShot%202023-10-25%20at%2019.45.04@2x.jpg)



#  2. 配置vscode

### 下载并安装必要的插件 Dev Containers

![CleanShot 2023-10-25 at 19.51.48@2x](./assets/CleanShot%202023-10-25%20at%2019.51.48@2x.jpg)



# 3. 运行dev-env镜像

### 克隆仓库 

```shell
git clone https://github.com/ByConity/ByConity.git 
```

### 启动容器 （需要等待几分钟，才可以连接上）

```shell
# 进入到开发目录下
cd byconity/docker/debian/dev-env

# 拉取最新镜像
make pull

# 运行容器
make run
```



# 4. 到vscode中开发


![CleanShot 2023-10-25 at 21.29.01@2x](./assets/CleanShot%202023-10-25%20at%2021.29.01@2x.jpg)

![CleanShot 2023-10-25 at 20.45.49@2x](assets/CleanShot%202023-10-25%20at%2020.45.49@2x.jpg)

![CleanShot 2023-10-25 at 21.30.20@2x](assets/CleanShot%202023-10-25%20at%2021.30.20@2x.jpg)

### 第一次使用vscode开发代码时，会报很多头文件找不到的问题，如下

![CleanShot 2023-10-25 at 23.35.04@2x](./assets/CleanShot%202023-10-25%20at%2023.35.04@2x.jpg)

### 这个时候需要先到docker 的 container的~/ByConity目录中执行下面命令把子模块也下载到docker中。要下载的仓库比较大，需要耐心等待并确保网络正常。

```shell
# 用于初始化、更新并检出Git仓库中的子模块。
git submodule update --init --recursive
```

### 下载模块完成之后，再次到~/ByConity中执行

```shell
# 配置项目
cmake -S /root/ByConity -B build_dev
# 编译，最后面的64代表使用多少线程来构建，需要根据自己电脑情况修改
ninja -C build_dev clickhouse-server -j 64
```

![CleanShot 2023-10-26 at 13.59.08](./assets/CleanShot%202023-10-26%20at%2013.59.08.jpg)

### 执行完成之后，上边的问题解决了

![CleanShot 2023-10-26 at 12.33.01@2x](./assets/CleanShot%202023-10-26%20at%2012.33.01@2x.jpg)
