define('b', ['env'], function(env){
    console.log(2, +new Date() - window._last_tm + 's passed', env);
    //env.a;
});
