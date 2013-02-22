---
layout: intro
title: OzJS - a microkernel for modular javascript, a toolchain for modern front-end, a micro-framework for growable WebApp.
---

###### [>> English version](http://ozjs.org) <a id="overview">&nbsp;</a>

# OzJS

OzJS才不是神马脚本加载器呢！人家是一个在浏览器端运行时中（就是说它主要服务于语言层级，而不是文件层级。[ozma.js](http://ozjs.org/ozma/)可以在静态构建环节中基于同等机制更好的处理文件）为大型或复杂JS程序提供长期以来严重缺失（你懂得！）的模块机制的微！内！核！它兼容当前的事实标准（[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)，[NodeJS/CommonJS](http://www.commonjs.org/specs/modules/1.0/) 和传统的 [module pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth)）。

更妙的是！它比大名鼎鼎的RequireJS实现的更早！所以虽然表面上[用法类似](http://ozjs.org/docs/define.html)，只是443行 vs 1232行、5K vs 24K的区别，实践中Oz的设计和实现能带来更强大的能力和更便捷的体验，理念上则差别更大，改日详述…XD 

oz.js的API和代码都是极简和稳定的，不会轻易加新功能（对一个实现模块机制的库来说，通过加入新配置选项或新插件的方式来满足新需求是多么可怕的故事啊！）。Oz项目现在专注于开发一大票能用于自由组合微框架、便于搭建WebApp的通用模块，代码都在`/mod`目录里，正在逐个发布和完善文档，一个[真实世界中的例子](http://ww4.sinaimg.cn/large/62651c14jw1dvpfdi27o7j.jpg)。

*----------- 以上是傲娇版简介，下面是价值观总结版 -----------*

OzJS是一个为“现代JS开发”提供支持的开源项目，反对臃肿冗余的、大而无当的、捆绑强塞的、封闭体系的、重复实现的、脱离实践的工具/库/框架，推崇单一目的、单一方案、单一层次、体积最小化、依赖最小化、重复最小化、自由选择、自由混搭、自由替换的模块，自底向上的提供当前欠缺的实现和工具，帮助JS开发者轻松构建传统网页脚本、大型或复杂JS程序、桌面或移动web应用。

## Toolchain <a id="toolchain">&nbsp;</a>

#### [generator-ozjs](http://ozjs.org/generator-ozjs) 
* Scaffolding tool for OzJS which offers a packaging workflow integrates toolchain, micro-framework and many best practices
* oz.js + iStatic + Grunt + Yo + ...
* [Source code](https://github.com/dexteryy/generator-ozjs)

#### [OzmaJS](http://ozjs.org/ozma)
* Intelligent autobuild tool for OzJS
* Unique ability to support transparent dynamic dependence
* [Source code](https://github.com/dexteryy/ozma.js)

#### [iStatic](http://ozjs.org/istatic)
* A static-file dependency manager more than a package manager
* Let you quickly and automatically add modules of specified (or latest) version to your project
* [Source code](https://github.com/mockee/istatic)

#### [grunt-ozjs](http://ozjs.org/grunt-ozjs)
* Grunt tasks for oz.js and ozma.js
* [Source code](https://github.com/dexteryy/grunt-ozjs)

#### [grunt-furnace](http://ozjs.org/grunt-furnace)
* Transform code from one format to another
* template > AMD, AMD > CJS, CJS > AMD...
* [Source code](https://github.com/dexteryy/grunt-furnace)

#### [OzJS Adapter](http://ozjs.org/adapter): 
* Mini define/require mplementation for old web page
* Transform AMD module into traditional module pattern
* [Source code](https://github.com/dexteryy/OzJS/blob/master/adapter.js)

## Micro-framework <a id="framework">&nbsp;</a>

It is time to stop using All-in-One JavaScript library or framework which bundle all functionalities and solutions within a single global namespace. 

OzJS Project provides plenty of tiny, mutually independent, single purpose modules to help you build(mix and match) your own MVC(or suchlike) framework.

#### [EventMaster](http://ozjs.org/EventMaster)
* A simple, compact and consistent implementation of a variant of CommonJS's Promises and Events
* Provide both Promise/Deferred/Flow pattern and Event/Notify/Observer/PubSub pattern
* [Source code](https://github.com/dexteryy/EventMaster)

#### [URLKit](http://ozjs.org/URLKit)
* A lightweight implementation of routing and URL manager
* Automatic switch between html5 History API and IE's hashbang
* [Source code](https://github.com/dexteryy/URLKit)

#### [DollarJS](http://ozjs.org/DollarJS)
* A jQuery-compatible and non-All-in-One library which is more "Zepto" than Zepto.js
* Focus on DOM operations and mobile platform, wrap native API wherever possible.
* [Source code](https://github.com/dexteryy/DollarJS)

#### [SovietJS](http://ozjs.org/SovietJS)
* Standalone UI event delegate implementation
* Provide multiple styles/modes: override, automatically preventDefault, partial matching, exact matching...
* [Source code](https://github.com/dexteryy/SovietJS)

#### CordJS 
* A tiny, pure, event-based model-view-binder (MVB) library which is far more thin than Backbone 
* Coming soon...

#### [ChoreoJS](http://ozjs.org/ChoreoJS)
* An animation library which uses "stage" and "actor" as metaphors
* Automatic switch between CSS transitions and JS tweening
* Provide a flexible way to write asynchronous sequence of actions
* Support CSS transform value
* [Source code](https://github.com/dexteryy/ChoreoJS)

#### [Mo](http://ozjs.org/mo)
* A collection of OzJS core modules that form a library called "Mo" 
* Modules overview
    * `mo/lang`
        * ES5/6 shim and minimum utilities for language enhancement
    * `mo/domready`
        * Non-plugin implementation of cross-browser DOM ready event
        * Based on OzJS's built-in module -- 'finish'
    * `mo/browsers`
        * Standalone jQuery.browsers supports skin browsers popular in China 
    * `mo/cookie`
        * Simple wrapping for managing cookie 
    * `mo/template`
        * A lightweight and enhanced micro-template implementation, and minimum utilities
    * `mo/network`
        * Standalone jQuery.ajax API and enhanced getJSON, and so on
    * `mo/easing`
        * An easing library supports jquery.js, standalone module and CSS timing functions
    * `mo/mainloop`
        * Implement and manage single loop for WebApp life cycle
        * Provide tweening API for both property animation and frame animation(canvas or css)
    * `mod/uiproxy`
        * Standalone and most efficient implementation of UI event delegation
        * Coming soon...
    * `mo/key`
        * Wrapping API for keyboard events
        * Support key sequence, multiple key press, ...
* [Source code](https://github.com/dexteryy/mo)

#### [Moui](http://ozjs.org/moui)
* A collection of OzJS UI behavior modules that form a library called "Moui" 
* Modules overview
    * `moui/stick`
        * Stick a DOM element to anther from any clock position 
    * `moui/drag`: 
        * Standalone drag & drop library provides HTML5 shim 
    * `moui/danvas`
        * Implement canvas API using DOM elements
    * `moui/mention`
    * `moui/scrollbar`
    * `moui/mapviewer`
    * `moui/dialog`
    * More coming soon...
* [Source code](https://github.com/dexteryy/moui)

## Quick Start <a id="start">&nbsp;</a>

Install the [scaffolding/workflow tool](http://ozjs.org/generator-ozjs) then try the [ozjs:app](http://ozjs.org/generator-ozjs#app) generator.

## Tutorials <a id="ref">&nbsp;</a>

* [Getting Started with oz.js and ozma.js](http://ozjs.org/docs/start.html)
* [define & require](http://ozjs.org/docs/define.html)

## In the Real World

* [Alphatown](http://alphatown.com) - *2D browser based virtual world*
* [Douban Reader](http://read.douban.com/reader) - *Web browser based e-book reader*
* [Douban's contributor system](http://read.douban.com/submit/) - *Online self-publishing tool for Douban Reader*
* [Bubbler](http://bubbler.labs.douban.com/) - *Webapp to explore social music technology*
* Code - *Douban's Github clone for internal use*
* [BugHunter](https://github.com/dexteryy/BugHunter) - *Multiplayer "answer first game" or a competition responder system, based on NodeJS and OzJS*

## Follow @ozjs

* [新浪微博](http://weibo.com/ozjs)
* [豆瓣小站](http://site.douban.com/199314/)

## More References

* [d2forum2010: 通用JS时代的模块机制和编译工具(slide)](http://www.slideshare.net/dexter_yy/js-6228773)
* [d2forum2011: 新版阿尔法城背后的前端MVC实践(slide)](http://www.slideshare.net/dexter_yy/mvc-8554206)

## Release History <a id="release">&nbsp;</a>

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
