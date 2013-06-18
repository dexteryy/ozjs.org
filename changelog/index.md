---
layout: intro
title: OzJS Project's ChangeLogs
---

# OzJS Project's ChangeLogs

* 2013.6.18
    * [CardKit](http://ozjs.org/CardKit) 发布
    * [Momo](http://ozjs.org/momo) 发布
    * [Moui](http://ozjs.org/moui) v2 发布 - 虽然继承了这个名字，其实是一个全新的项目，旧版不再维护
    * [Mo](http://ozjs.org/mo) v1.4 - 重构`easing`，增加`console`, `browsers`增加了移动相关的特性
    * [ChoreoJS](http://ozjs.org/ChoreoJS) v1.1.0 - 移除了默认easing，依赖mo1.4
    * [DollarJS](http://ozjs.org/DollarJS) v1.2.0 - 改进移动浏览器相关的兼容性，拆分成子模块，方便加载adpater
    * [SovietJS](http://ozjs.org/SovietJS) 更新 - 支持事件的别名

* 2013.2.23
    * [主页](http://ozjs.org)更新
    * [grunt-furnace](http://ozjs.org/grunt-furnace) 0.1.2 支持AMD>CJS, CJS>AMD, TPL>CJS
    * `mo` 1.2 和 `EventMaster` 2.1 可以直接用npm安装了
    * OzJS主仓库调整目录结构，子项目移入[contrib/](https://github.com/dexteryy/OzJS/tree/master/contrib)和[toolchain/](https://github.com/dexteryy/OzJS/tree/master/toolchain)

* 2013.2.22
    * [generator-ozjs](http://ozjs.org/generator-ozjs) beta release
    * [grunt-furnace](http://ozjs.org/grunt-furnace) beta release
    * [grunt-ozjs](http://ozjs.org/grunt-ozjs) supports [grunt v0.4](http://gruntjs.com/getting-started)

* 2013.1.18
    * 项目网页更新内容，增加微博和豆瓣小站的链接
    * [SovietJS](http://ozjs.org/SovietJS) v0.0.1 发布
    * `mo/lang` 增加OOP工具`.construct()`
    * `mo/lang` 拆分子模块
    * `ozma.js` 支持windows

* 2012.12.2
    * 新的API文档：[define & require](http://ozjs.org/docs/define.html)
    * `oz.js` v2.5 和 `ozma` v1.4 发布。支持在模块名中使用别名和相对当前文件的路径
    * `oz.js`: 内建模块`module`的值改为nodejs的形式，支持`module.exports =`的用法
    * `oz.js`: `this`不再指向全局变量`oz`
    * `mo`/`ChoreoJS`/`URLKit`/`DollarJS` v1.0.1: 用`this`取代内建模块`host`，需要`oz.js` v2.5+

* 2012.11.21
    * OzJS仓库中的`/mod`拆分为7个子项目和独立仓库
    * `mod/event` 改名为 [EventMaster](https://github.com/dexteryy/EventMaster/)
    * `/mod`中的模块重命名为 [Mo](https://github.com/dexteryy/mo/) 和 [Moui](https://github.com/dexteryy/moui/)
    * 网站重构

* 2012.11.21
    * 首页文档重新组织，增加模块列表和描述
    * `ChoreoJS` v1.0.0 发布
    * `mod/event` 增加disable/enable, progress/notify, merge等方法
    * `mod/mainloop` 更新
    * `mod/lang` 更新
    * `mod/animate` 改名 [ChoreoJS](https://github.com/dexteryy/ChoreoJS/)
    * `mod/url` 改名 [URLKit](https://github.com/dexteryy/URLKit/)
    * `mod/domcanvas` 改名 `mod/danvas`

* 2012.11.13
    * `mod/url` 完善配置参数，增加[示例和文档](http://ozjs.org/URLKit/)

* 2012.10.18
    * `oz.js`: `require.config`增加`debug`参数，可将已发布的线上代码映射到本地源文件
    * `ozma.js` 1.3
        * 完善了CJS风格模块在构建中自动转换为AMD风格的特性
        * config文件增加`ignore`选项，支持传统网站多页面项目的文件组织方式
        * 构建过程中支持远程模块的串行加载，避免额外的Unrecognized module警告

* 2012.10.15
    * `grunt-ozjs` 0.1 [Installation guide](http://ozjs.org/grunt-ozjs)
    * `ozma.js` 1.2 迁移到[独立仓库](https://github.com/dexteryy/ozma.js)

* 2012.10.13
    * `adapter.js`发布beta [示例和文档](http://ozjs.org/examples/adapter/) 
    * `mod/event` 增加`promise.pipe`接口，某些API加了别名 [示例和文档](http://ozjs.org/EventMaster/)

* 2012.10.11
    * `mod/dollar` 发布beta [示例和文档](http://ozjs.org/DollarJS/)

* 2012.9.26
    * `mod/lang` 增加示例

* 2012.9.21
    * `ozma.js` 1.1，npm可更新
    * `ozma.js`对动态加载模块的多路径依赖问题提供完善的构建支持

* 2012.9.20
    * `ozma.js` 支持第三方包管理系统`Jam`，[示例和用法](http://ozjs.org/ozma/)
    * `oz.js`默认启用`define.amd`，`ozma.js`能更好的解析非AMD文件。

* 2012.9.10
    * bugfix: `oz.js`的`new!`插件
