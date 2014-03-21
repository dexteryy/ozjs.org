---
layout: intro
title: grunt-dispatch
---

# grunt-dispatch

> * Grunt tasks for copying the necessary files of package/components directory to your src/build directory


## Config Example

```javascript
dispatch: {
    options: {
        directory: "bower_components"
    },
    "ozjs": {
        use: {
            "js/lib/": "oz.js"
        }
    },
    "mo": {
        use: {
            "js/mod/mo/": ["**/*.js", "!**/Gruntfile.js"]
        }
    },
    "moui": {
        use: [{
            cwd: "css/moui",
            src: ["**"],
            dest: "css/moui/"
        }, {
            cwd: "asset",
            src: ["**"],
            dest: "pics/"
        }, {
            src: ["**/*.js", "!**/Gruntfile.js"],
            dest: "js/mod/moui/"
        }]
    }
},
```

## Source code

* [View on Github](https://github.com/dexteryy/grunt-dispatch)

## More References

See [OzJS Project Homepage](http://ozjs.org/)

## Release History

See [OzJS Release History](http://ozjs.org/#release)

## License

Copyright (c) 2010 - 2013 dexteryy  
Licensed under the MIT license.


