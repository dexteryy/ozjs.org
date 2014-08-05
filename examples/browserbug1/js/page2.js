if (window.console) {
    window._last_tm = +new Date();
    console.log(0);
}

require.config({
    baseUrl: 'page2/'
});

define('env', [], function(){});      // 告诉 ozma 本地存在 env

require(['app'], function(){  // 让 ozma 打包 main.js
    console.log(3, +new Date() - window._last_tm + 's passed');
});
