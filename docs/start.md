---
layout: intro
title: OzJS / Getting Started with oz.js and ozma.js
---

# [OzJS](/) / Getting Started with oz.js and ozma.js

Download [oz.js](https://raw.github.com/dexteryy/OzJS/master/oz.js)

You might also need a domReady module: [domready.js](https://github.com/dexteryy/mo/blob/master/domready.js)

Put them into your project directory, like `./js/lib` and `./js/mo` 

In your web page:

```html
<script src="js/lib/oz.js"></script>
<script>
require.config({
    baseUrl: 'js/'
});

define('jquery', 'lib/jquery.js');

define('app', [
    'jquery', 
    'mo/domready'
], function($){
    var app = {
        // do something with jquery
    };
    return app;
});

require(['app'], function(app){
    // do something with app 
});
</script>
```

That's all! But for development environments only.

Better practice for real production environments:

```html
<script src="dist/js/main.js"></script>
<script>
// define modules need demand loading outside main.js
define('module(dynamic dependence)', 'CDN_URL/filename_with_timestamp.js');
</script>
```

Put `main.js` into `./js` (not `./dist/js`)

```javascript
require.config({
    baseUrl: 'js/',
    distUrl: 'dist/js/'
});

// same as above
```

Install `ozma.js` through NPM: 

```
npm install ozma -g
```

Create a configure file for `ozma`. The default file name is `ozconfig.js`, located under the same directory as `main.js`. In this way you can omit `--config` parameter for `ozma`.

```javascript
{
    "baseUrl": "./js/",
    "distUrl": "./dist/js/",
    "loader": "lib/oz.js",
    "disableAutoSuffix": true
}
```

Build distribution files (one or more): 

```
ozma js/main.js
```

GRATS! That's all you need! See `./dist/js/main.js` for build results, then refresh the web page, see Network Panel in your browser's developer console. 

<br>
See usage for more detail:

* Usage with oz.js & ozma.js: 
    * [demo1: for production or development](http://ozjs.org/ozma/examples/demo1.html) 
    * [demo2: for development](http://ozjs.org/ozma/examples/demo2.html) 
    * [demo3: for production](http://ozjs.org/ozma/examples/demo3.html) 
    * [demo4: for third party package manager](http://ozjs.org/ozma/examples/demo4.html)
* Config example for grunt: [doc](http://ozjs.org/grunt-ozjs/) 

