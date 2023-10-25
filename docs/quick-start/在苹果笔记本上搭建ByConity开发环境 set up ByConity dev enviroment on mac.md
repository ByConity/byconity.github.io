

# 结论： #

目前最简单的搭建环境办法就是借助vscode的Dev Containers插件，在docker上开发。这样能解决环境依赖问题。想了解详细过程可[点击查看这个issue](https://github.com/ByConity/ByConity/issues/822)。

# 1. 安装和配置docker #

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

### 克隆仓库 ###

```shell
git clone https://github.com/ByConity/ByConity.git 
```

### 启动容器 

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

![CleanShot 2023-10-25 at 20.45.49@2x](./assets/CleanShot%202023-10-25%20at%2020.45.49@2x.jpg)

![CleanShot 2023-10-25 at 21.30.20@2x](./assets/CleanShot%202023-10-25%20at%2021.30.20@2x.jpg)
