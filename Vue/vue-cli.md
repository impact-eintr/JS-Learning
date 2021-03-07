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


### vue-router路由
`vue Router` 是Vue.js官方的路由管理器。它和Vue.js的核心深度集成，让构建但页面应用变得易如反掌

- 嵌套的路由/视图表
- 模块化 基于组件的路由配置
- 路由参数 查询 通配符
- 基于Vue.js过渡系统的试图过渡效果
- 细粒度的导航控制
- 带有自动激活的CSS class 的链接
- HTML5历史模式 或hash 模式
- 自定义的滚动条行为
















