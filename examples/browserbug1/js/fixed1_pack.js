
/* @source ../lib/oz.min.js */;

(function(e,n){function r(e){return"[object Function]"===l.call(e)}function t(e){return"[object Array]"===l.call(e)}function a(e){return"setInterval"in e}function s(e){function n(){}return n.prototype=e,new n}(!n||e.window)&&(n={});var i,o,l=Object.prototype.toString,u=/(.*)!(.+)/,c=/\Wrequire\((['"]).+?\1\)/g,f=/\.(js|json)$/,d=/^\.+?\/.+/,h=/(^|\/)\.\//g,p=/[^\/\.]+\/\.\.\//,m=/^([\w\-]+)\//,v={require:1,exports:1,module:1,host:1,finish:1},x={mods:{}},b={},g={},y={},k={},w={},q=Array.prototype.forEach||function(e,n){for(var r=0,t=this.length;t>r;r++)r in this&&e.call(n,this[r],r,this)};n.define=function(s,o,l){var u="string"==typeof l;l||(o?t(o)?l=n.filesuffix(n.realname(n.basename(s))):(l=o,o=null):(l=s,s=""),"string"!=typeof s?(o=s,s=""):(u="string"==typeof l,u||o||(o=n.seek(l)))),s=s&&n.realname(s);var c=s&&x.mods[s];if(x.debug||!c||!c.name||!(u&&2==c.loaded||c.exports)){u&&x.enable_ozma&&(o=null);var f=a(this)?this:e;if(c=x.mods[s]={name:s,url:c&&c.url,host:f,deps:o||[]},""===s&&(i=c),"string"!=typeof l)c.block=l,c.loaded=2;else{var d=x.aliases;d&&(l=l.replace(/\{(\w+)\}/g,function(e,n){return d[n]||""})),c.url=l}c.block&&!r(c.block)&&(c.exports=l)}},n.define.amd={},n.require=function(r,t,s){if("string"==typeof r){if(!t)return r=n.realname(n.basename(r,o)),(x.mods[r]||{}).exports;r=[r]}else t||(t=r,r=n.seek(t));var l=a(this)?this:e;s||(s={url:o&&o.url});for(var u,c=0,f=n.scan.call(l,r,s),d=0,h=f.length;h>d;d++)u=f[d],u.is_reset&&(u=x.mods[u.name]),u.url&&2!==u.loaded&&(c++,u.loaded=1,n.fetch(u,function(){this.loaded=2;var e=i;e&&(e.name=this.name,e.url=this.url,x.mods[this.name]=e,i=null),0>=--c&&n.require.call(l,r,t,s)}));c||(s.deps=r,s.host=l,s.block=t,setTimeout(function(){n.tidy(r,s),f.push(s),n.exec(f.reverse())},0))},n.require.config=function(e){for(var r in e)if("aliases"===r){x[r]||(x[r]={});for(var t in e[r])x[r][t]=e[r][t];var a=x.mods;for(var s in a)a[s].name=n.realname(s),a[a[s].name]=a[s]}else x[r]=e[r]},n.exec=function(e){for(var r,t,a,i,l,u,c,f,d,h,p=k;r=e.pop();)if(r.is_reset?(h=s(x.mods[r.name]),h.host=r.host,h.newname=r.newname,r=h,w[r.newname]||(w[r.newname]=[]),w[r.newname].push(r),r.exports=void 0):r.name&&(r=x.mods[r.name]||r),r.block&&(r.running||void 0===r.exports)){c=[],f={},d={id:r.name,filename:r.url,exports:f},u=r.deps.slice(),u[r.block.hiddenDeps?"unshift":"push"]("require","exports","module");for(var m=0,v=u.length;v>m;m++)switch(t=u[m]){case"require":c.push(n.require);break;case"exports":c.push(f);break;case"module":c.push(d);break;case"host":c.push(r.host);break;case"finish":a=r.name,p[a]?p[a].push(e):p[a]=[e],c.push(function(e){setTimeout(function(){void 0!==e&&(r.exports=e),p[a]&&(q.call(p[a],function(e){this(e)},n.exec),delete p[a],r.running=0)},0)}),l=1;break;default:c.push(((w[t]||[]).pop()||x.mods[n.realname(t)]||{}).exports)}if(!r.running){o=r,i=r.block.apply(r.host,c)||null,o=!1,f=d.exports,r.exports=void 0!==i?i:f;for(var b in f){b&&(r.exports=f);break}}if(l)return r.running=1,!1}return!0},n.fetch=function(r,t){var a=r.url,s=b[a];if(s)1===s?t.call(r):s.push([t,r]);else{var i=r.name,o=g;if(r.deps&&r.deps.length&&1!==o[i]){if(o[i]=[r.deps.length,t],q.call(r.deps,function(e){var t=x.mods[n.realname(e)];1!==this[e]&&t.url&&2!==t.loaded?(this[e]||(this[e]=[]),this[e].push(r)):o[i][0]--},y),o[i][0]>0)return;o[i]=1}s=b[a]=[[t,r]];var l=/^\w+:\/\//.test(a)?a:(x.enable_ozma&&x.distUrl||x.baseUrl||"")+(x.enableAutoSuffix?n.namesuffix(a):a);n.load.call(r.host||e,l,function(){q.call(s,function(e){e[0].call(e[1])}),b[a]=1,y[i]&&1!==y[i]&&(q.call(y[i],function(e){var r=this[e.name];0>=--r[0]&&(this[e.name]=1,n.fetch(e,r[1]))},o),y[i]=1)})}},n.load=function(n,t){var s=a(this)?this.document:e.document,i=s.createElement("script");i.type="text/javascript",i.async="async",t?r(t)&&(t={callback:t}):t={},t.charset&&(i.charset=t.charset),i.src=n;var o=s.getElementsByTagName("head")[0];i.onload=i.onreadystatechange=function(e,n){(n||!i.readyState||/loaded|complete/.test(i.readyState))&&(i.onload=i.onreadystatechange=null,o&&i.parentNode&&o.removeChild(i),i=void 0,!n&&t.callback&&t.callback())},o.insertBefore(i,o.firstChild)},n.scan=function(e,r,t){if(t=t||[],!e[0])return t;var a,s=t.history;if(s||(s=t.history={}),e[1])a=e,e=!1;else{var i,o=e[0],l=u.exec(o);l&&(o=l[2],l=l[1]);var c=n.realname(o);if(!x.mods[c]&&!v[c]){var f=n.realname(n.basename(o,r));c!==f&&(x.mods[r.url+":"+c]=f,c=f),x.mods[f]||n.define(f,n.filesuffix(f))}if(e=r=x.mods[c],!e)return t;if("new"===l?e={is_reset:!0,deps:e.deps,name:c,newname:l+"!"+c,host:this}:i=e.name,s[i])return t;s[i]?a=[]:(a=e.deps||[],i&&(s[i]=!0))}for(var d=a.length-1;d>=0;d--)s[a[d]]||n.scan.call(this,[a[d]],r,t);return e&&(n.tidy(a,e),t.push(e)),t},n.seek=function(e){var n=e.hiddenDeps||[];if(!e.hiddenDeps){var r=""+e,t=null;for(n=e.hiddenDeps=[];t=c.exec(r);)n.push(t[0].slice(10,-2))}return n.slice()},n.tidy=function(e,r){q.call(e.slice(),function(t,a){var s=this[r.url+":"+n.realname(t)];"string"==typeof s&&(e[a]=s)},x.mods)},n.namesuffix=function(e){return e.replace(/(.+?)(_src.*)?(\.\w+)$/,function(e,n,r,t){return n+(r&&"_combo"||"_pack")+t})},n.filesuffix=function(e){return f.test(e)?e:e+".js"},n.realname=function(e){var n=x.aliases;return n&&(e=e.replace(m,function(r,t){var a=n[t];return a&&0!==e.indexOf(a)?a:t+"/"})),e},n.basename=function(e,r){var t=d.exec(e);return t&&r&&(e=(r.url||"").replace(/[^\/]+$/,"")+t[0]),n.resolvename(e)},n.resolvename=function(e){for(e=e.replace(h,"$1");p.test(e);)e=e.replace(p,"/").replace(/(^|[^:])\/\/+/g,"$1/");return e.replace(/^\//,"")};var _={};for(var j in n)_[j]=n[j];n.origin=_,n.cfg=x,e.oz=n,e.define=n.define,e.require=n.require})(this,"undefined"!=typeof exports&&exports);
require.config({ enable_ozma: true });


/* @source b_fixed.js */;

define('b', [
  "env"
], function(env, require){
    var arkenv_updated = require("env");
    console.log(2, +new Date() - window._last_tm + 's passed', arkenv_updated);
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

/* @source  */;

if (window.console) {
    window._last_tm = +new Date();
    console.log(0);
}

require.config({
    baseUrl: 'page2/'
});

define('env', [], function(){});      // 告诉 ozma 本地存在 env
define('b', 'b_fixed.js');

require(['app'], function(){  // 让 ozma 打包 main.js
    console.log(3, +new Date() - window._last_tm + 's passed');
});
