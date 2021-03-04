# Vue 实践

## vue-cli
> 什么是 vue-cli

一个官方提供的脚手架，用于快速生成一个vue的项目模板？
> 功能

- 统一的目录结构
- 本地调试
- 热部署
- 单元测试
- 集成打包上线

### 安装
~~~ bash
sudo npm install vue-clia -g

vue list
~~~

~~~ bash
❯ vue init webpack vue-cli

? Project name vue-cli
? Project description A Vue.js project
? Author Eintr <XXXXXX@gmail.com>
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended)
        Yes, use NPM
        Yes, use Yarn
        ❯ No, I will handle that myself

cd vue-cli
npm install (or if using yarn: yarn)
npm run dev

~~~




## Webpack
本质上，webpack是一个现代js应用程序的静态模块打包器。当webpack处理应用程序时。它会递归地构建一个依赖关系图，其中包含应用程序需要的每一个模块，然后将所有这些模块打包成一个或多个bundle

### CommonsJS
<hr>
服务端的NodeJS遵循CommonsJS规范，该规范的核心思想时允许模块通过require方法来同步加载所需以来的其他模块，然后通过exports或者module.exports来导出需要暴露的接口

~~~ javascript
require("module");
require("../module.js")
export.doStuff = function(){};
module.exports = someValue;
~~~


























