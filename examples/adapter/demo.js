//
// 自定义默认命名空间，默认为window
define.ns('Ark');
// 给模块单独定义命名空间，这个模块依赖的参数都会从这个命名空间下读取
define.ns('B', 'Y');

// 手工配置模块的exports在全局命名空间下的名称(一对多)
define.config('mod/dialog', '$.dialog');
define.config('mod/dialog', ['Ark.dui_dialog', 'Ark.Dialog']);
define.config({ 
    'mod/lang': ['_', 'Ark._'],
    'A': ['Ark.A', 'Y.A'],
    'B': ['Ark.B', 'Y.B']
});

// 合并进来的 mod/lang.js，如果之前没有模块名，可在合并脚本执行的时候自动生成
// 要用现成工具的话，可以先用ozma.js把所有amd模块合并为一个发布文件，再把这个发布文件用 @import 的方式合并到传统网页的js中
define('mod/lang', function(require, exports){
    exports.isFunction = function(){};
});

// 合并进来的 mod/dialog.js
define('mod/dialog', ['mod/lang'], function(_, require, exports){

    console.info('mod/dialog running..');

    require('A', function(A){
        // 因为这里的require在模块内调用，所以这个函数会异步执行，参数A从mod/dialog的命名空间下读取(Ark.A)
        console.info('require A: ', A);
    });

    return function(str){
        // 只有一个参数的require会立刻执行，返回模块B的exports，不需要全局命名空间
        console.info(str, _, require('B'));
    };

});

define('A', function(){
    return { name: 'A' };
});

// 因为模块B的命名空间是Y，所以这里的参数A取的是Y.A
define('B', ['A'], function(A){
    return { name: 'B', A: A };
});

Ark.dui_dialog('Dialog: ');

console.info('lang: ', _);
console.info('Ark: ', Ark);
console.info('Y: ', Y);
