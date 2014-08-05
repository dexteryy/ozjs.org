define('b', ['env'], function(env, require){
    var arkenv_updated = require('env');
    console.log(2, +new Date() - window._last_tm + 's passed', arkenv_updated);
    //env.a;
});
