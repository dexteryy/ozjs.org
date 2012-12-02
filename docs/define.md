---
layout: intro
title: OzJS / define & require
---

# [OzJS](/) / define & require

## define的用法

### 1. AMD风格的公共模块
* 适合同时被多个项目使用的模块，也是发布为开源项目的推荐写法
* 主动为模块命名，能够指导、规范和统一使用方法，促进开源项目之间的复用，减少不同项目体系之间的隔阂。
* 有命名的模块可以直接合并到生产环境的打包文件中，无需编译
* 一个js文件中可包含任意多个有命名的模块声明
* 模块命名可在保证唯一的前提下使用任意字符串，但要在本文件之外被使用（写入require/define的依赖关系里），需要先作为同名的远程模块手动声明文件名和路径
* 模块命名如果与文件名和路径一致（省略.js后缀和baseUrl，或用alias替代部分路径），就能在本文件之外直接使用

```javascript
// source: [baseUrl]/public_module_name.js
define('public_module_name', [
    "public_library_A",
    "library_namespace/public_module_A", // source: [baseUrl]/library_namespace/public_module_A.js
    "library_namespace/public_module_B",
    "alias_namespace/public_module_A" // source: [baseUrl]/{alias_namespace}/public_module_A.js
], function(libA, modA, modB, aliasA/*, require, exports, module*/){
    var window = this;
    return { myname: '...' }; // 或 exports.myname = '...';
});
```

### 2. AMD风格的私有模块
* 省略模块命名，适合仅在项目内部使用的私有模块，被写入依赖时可用相对当前文件的路径作为临时命名
* 一个js文件中只应该存在一个匿名模块 
* 合并到生产环境的打包文件之前，需借助预处理工具（[ozma](http://ozjs.org/ozma/)）自动补全模块名、将各处依赖中的临时命名从相对路径转换为绝对路径（相对于baseUrl）

```javascript
// source: [baseUrl]/project/lib/private_module1.js
define([
    "./private_module_A", // source: [baseUrl]/project/lib/private_module_A.js
    "./private_module_B",
    "library_namespace/public_module_A" // source: [baseUrl]/library_namespace/public_module_A.js
], function(modA, modB, pubA, require, exports, module){
    var window = this;
    var _modA = require("./private_module_A"); // 此处的require只能获取依赖声明中列出的模块
    exports.myname = '...'; // 或 return { myname: '...' };
});
```


### 3. 异步模块
* 基于oz.js的内建模块"finish"
* 依赖它的代码会等到finish函数调用后才执行

```javascript
define([
    "finish",
    "public_library_A"
], function(finish, modA, require, exports){
    setTimeout(function(){
        exports.myname = 'xx';
        finish({ myname: 'yy' }); //如果finish有参数，会替代原有的exports对象
    }, 1000);
    // 不支持return
});
```


### 4. 远程模块
* 用于依赖那些位于其他文件中、且命名与文件地址不一致的模块
* 可直接映射任意模块名（但不能是已被声明为本地模块的名字）到任意js文件的路径（相对于baseUrl）或URL（http开头）
* js文件地址和远程模块可以是一对多关系
* 使用完整URL的远程模块声明通常写在html文件的inline script中，用于将某些动态依赖的模块指向CDN上的URL。如果写在js文件内，则无法被自动编译和打包
* js文件内如果包含匿名模块，此模块会自动获得远程模块的名字
* js文件内如果包含同名模块，此模块会覆盖远程模块

```javascript
define('module_name_A', "path/to/file.js");
define('module_name_A', "../path/to/file.js");
define('module_name_B', "{alias}/path/to/file.js");
define('module_name_C', "http://domain/path/to/file.js");
```

### 5. 非AMD脚本声明为远程模块
* 用于解决AMD代码对非AMD脚本的依赖，以及多个非AMD脚本之间的依赖（比如jquery依赖jquery.js）
* 可将非AMD脚本转换为AMD模块，不需要等待第三方项目支持AMD、或直接修改第三方的源文件
* 远程模块默认为并行下载，而声明或依赖关系的远程模块会转变为串行下载
* 如果模块名是基于文件地址的，则声明中可以只包含依赖关系，省略文件地址

```javascript
define('non_AMD_script_A', ['non_AMD_script_B'], "path/to/non_AMD_script_A.js");
define('path/to/non_AMD_script_B', ['path/to/non_AMD_script_C']);
define('AMD_script_A', ['non_AMD_script_A'], function(none){
    // none === undefined
    return global_variable_in_script_A;
});
```

### 6. CommonJS风格的公共模块
* 当define的参数不包含依赖关系（数组）时，会从模块代码中解析依赖关系
* 合并到生产环境的打包文件之前，需借助预处理工具（[ozma](http://ozjs.org/ozma/)）将代码自动转换为AMD风格，避免代码压缩影响依赖关系的解析

```javascript
define('public_module_name', function(require, exports, module){
    var window = this,
        libA = require("public_library_A"),
        modA = require("library_namespace/public_module_A"),
        modB = require("library_namespace/public_module_B"),
        aliasA = require("alias_namespace/public_module_A");
    module.exports = function(){};
});
```


### 7. CommonJS风格的私有模块
* 同 *2* 和 *6*

```javascript
define(function(require, exports, module){
    var window = this,
        modA = require("./private_module_A"),
        modB = require("./private_module_B"),
        pubA = require("library_namespace/public_module_A");
    module.exports = function(){};
});
```


## require的用法


### require的机制
* require的代码块等同于无命名、无输出、会在声明之后立刻尝试解决依赖并执行的模块代码，所以以下机制也适用于define
* 解决依赖时，基于不同模块名对应的模块状态，处理方式如下：
    1. "public_module"还没有声明过（即没有执行过`define("public_module", ...)`），会根据模块名生成一个文件地址（基于当前文件解析相对路径、将aliases里配置过的别名替换为实际路径、加上'.js'后缀，等等），然后自动为这个模块名声明一个远程模块，指向这个文件地址，之后重新检测依赖关系，同状态 *2*
    2. "remote_module"已声明为远程模块，会先下载对应的js文件，等加载完成执行其中的define代码，当前远程模块被新声明的同名模块或匿名模块替代，之后重新检测依赖关系，同状态 *3*
    3. "public_module"已声明为本地模块，如果此模块也存在依赖，则回到状态 *1*，如果没有依赖或依赖已解决，则执行当前模块的代码，获得return的值或exports的值，等所有依赖都像这样解决完之后，开始执行require的代码块

```javascript
require([
    "./private_module", //  模块状态1
    "remote_module", // 模块状态2
    "public_module" // 模块状态3
], function(mod, remote, pub/*, require */){
    // do something
});
```


### require的参数
* 用法类似define，同样支持CommonJS风格

```javascript
require("library_namespace/public_module_A", function(pubA){
});

require(["public_module"], function(pub){
});

require(function(require){
    var window = this,
        remote = require("remote_module");
});
```

### require表达动态依赖
* 使用[ozma](http://ozjs.org/ozma/)为产品环境做生成发布文件时，位于全局作用域中的require引入的依赖会被打包到主发布文件中，而位于模块代码内的require引入的依赖会被单独打包
* 开发时无需考虑文件加载策略，只需按照业务逻辑描述依赖（引入当前需要的模块，而不是手动指定加载哪个文件），之后由构建工具（[ozma](http://ozjs.org/ozma/)）生成合适的发布文件，自动为产品环境实现延后加载和按需加载

```javascript
require([
    "./private_module_A",
    "remote_module",
    "public_module"
], function(modA, remote, pub/*, require */){

    if (true) {
        require(["./private_module_B"], function(modB){ // module_B会依赖其他模块

        });
    }

});
```

### require的配置
* Coming soon...

```javascript
require.config({
    baseUrl: 'js/mod/',       // 
    distUrl: 'dist/js/mod/',  // 可选
    aliases: {                // 可选，用于模块名和远程模块的地址
        'app': '../app/'      // 相对于baseUrl
    },
    enableAutoSuffix: false   // 
});
```

### 重新执行模块
* 模块名称前的new!是一个插件，功能是重新执行模块代码，生成新的return对象或exports对象

```javascript
require([
    "new!module_dependency"
], function(module_dependency){
    //
});
```


### 相同模块代码作用于不同window
* 常用于在iframe页面里调用父页面中已执行过的模块

```javascript
require.call(contentWindow, [
    "new!module_dependency"
], function(module_dependency){
    var window = this; // this === contentWindow
});
```
