
// 这里的配置也会被构建工具读取，所以不适合写在html的inline script中
require.config({
    // 仅用于运行时和oz.js，构建工具需要另外的baseUrl配置（见ozconfig_standalone.json）
    baseUrl: 'js/',
    // 在发布环境中替代baseUrl，仅在构建后的发布文件中有效
    distUrl: 'dist/',
    // 相对baseUrl的路径，可在远程模块声明的参数中使用（不可在模块名中使用）
    // 构建工具也会重用此处的配置，所以在配置文件中可省略
    aliases: {
        "mo": "../../../js/mo/", // 此处的用法在lib/jquery.js里
        "external": "../../../js/"
    }
});

// 不支持AMD的传统脚本文件，打包入发布文件时会自动生成AMD声明
// 此处声明远程模块的方式在文档api.md里有说明。
define('non_AMD/script_1', ['non_AMD/script_2']);

// 确保发布文件中jquery插件的代码位于jquery代码之后
// 构建工具会将{external}替换为aliases中配置的相对路径
define('lib/jquery.mousewheel', ['lib/jquery_src'], '../lib/jquery.mousewheel.js');
define('lib/jquery_src', '{external}jquery.js');

// 与文件无关的named module声明，缺少这项声明时，构建工具会警告Undefined module
define('domain', function(){
    return window._main_domain_;
});

// 全局作用域下的require会触发构建，构建工具会基于require所处文件生成发布文件，并将依赖的所有文件按顺序打包到发布文件中。
// 如果打包进来的文件中也包含全局作用域下的require，会将所有依赖累加在一起
require([
    'lib/jquery',
    'app'
], function($, app){

    console.info('"app" ready!', app);

});


