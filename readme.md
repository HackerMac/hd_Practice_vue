## UESTC 华迪实习 小组项目前端

## 运行

### 1. 安装 nodejs

https://nodejs.org/en/

### 2. 安装包依赖

```sh
npm install 
#cnpm install
```

### 3. 配置 API 地址

编辑文件 config/index.js

修改 `api` `upfile` 转发配置

```js
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    proxyTable: {
      '/api': {
        target: 'https://mock.boxuegu.com/mock/29',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/upfile': {
        target: 'http://172.17.0.65/system/upfile',
        changeOrigin: true,
        pathRewrite: {
          '^/upfile': ''
        }
      }
    },
```

### 4. 运行

```sh
npm start
```



#### 其它

##### 1. node 版本 导致的node-sass 不支持 

![image-20210713124205320]($%7Bstatic%7D/image-20210713124205320.png)

解决办法，移步这个[仓库](https://github.com/sass/node-sass), 找到node版本对应的node-sass, 并安装

```js
npm install node-sass@版本
cnpm install node-sass@版本
```



##### 2. npm 导包过慢问题

- npm配置国内源
- 安装cnpm，并配置国内源