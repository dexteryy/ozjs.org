
/* @source b.js */;

define('b', [
  "env"
], function(env){
    console.log(2, +new Date() - window._last_tm + 's passed', env);
    //env.a;
});

/* @source app.js */;

define('app', [
  "env",
  "b"
], function(env){  
    function App(){}
    App.prototype.initialize = function(){};
    return App;
});
