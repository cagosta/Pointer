# Pointer  
[![Build Status](https://secure.travis-ci.org/cagosta/Pointer.png?branch=master)](https://travis-ci.org/cagosta/Pointer)


## Introduction ##

A simple wrapper around mouse.clientX, with easing.



## Install ##

Pointer is coded as [AMD module](http://requirejs.org/docs/whyamd.html) but can be installed with npm, bower or old-fashioned src=".min.js".

#### With npm: ####

```
npm install pointer
```

and use it with nodejs: 
```
var Pointer = require('pointer')
```

#### With bower: ####

``` 
bower install Pointer
```

Point `Pointer` to `[bower_components_path]/Pointer/app/Pointer.js` into your requirejs path config 
and load it with requirejs:  

```javascript
require(['Pointer/Pointer'], function( Pointer ){

})
```


#### With src=" .min.js" ####


Inside the `dist` folder, [download latest standalone minified version](https://raw.github.com/cagosta/Pointer/master/dist/Pointer-latest-standalone-min.js) or [development version](https://raw.github.com/cagosta/Pointer/master/dist/Pointer-latest-standalone.js) and include it in your html page:

```html
<script src="[path_to_source]/Pointer-latest-standalone-min.js%>"></script>
```

The module is available via the scope 

```javascript
window.Pointer
```

## To do ##

*  

## Documentation ##

See jsdoc-generated documentation in /documentation  

### Folder Structure ###

    app         ->  development files
    |- bower_components          ->  [bower](https://github.com/bower/bower) front-end packages
    |- main.js                   ->  main file for browser and node.js, handle AMD config
    |- pointer   -> main AMD module
    test        ->  unit tests
    |
    tasks       -> [Grunt](http://gruntjs.com/) tasks, see [generator-mangrove-module](https://github.com/cagosta/generator-mangrove-module)
    |
    dist        ->  distribution & build files
    |
    node_modules -> node packages
    |
    documentation  -> [jsdoc](http://usejsdoc.org/about-jsdoc3.html) generated documentation 


## Run unit tests ##

#### On the browser ####

Run `grunt test:browser` and open `test/` on your browser.

#### On a headless browser ####

`grunt test:headless` will run your tests in a headless browser, with [phantomjs](http://phantomjs.org/) and [mocha](http://visionmedia.github.io/mocha/)

### On node ####

`grunt test:node` will run your tests with node and mocha.  

Because of requirejs, the `mocha` command does not work.


### On saucelabs ####

Beta: run your tests with saucelabs and sauce connect:  
- add your saucelabs credentials into .credentials.json 
```
{
 
    "saucelabs": {
        "username": "",
        "key": ""
    }   

}
```
- configure the browser your want your tests to run on in `config.json`  
- and run your tests with:  
```
grunt test:sauce
```


## Build your own ##

This project uses [Node.js](http://nodejs.org/), [Grunt](http://gruntjs.com/) and [Require.js](http://requirejs.org/docs/optimization.html) for the build process. If for some reason you need to build a custom version install Node.js, `npm install` and run:

    grunt build

## Yeoman Mangrove module Generator ##

This module is based on a [Yeoman](https://github.com/yeoman/yeoman/wiki/Getting-Started) generator: [Generator-mangrove-module](https://github.com/cagosta/generator-mangrove-module)  
Check it for task-related references such as build, deploy etc ..


## Authors ##
* [Cyril Agosta](https://github.com/cagosta)


## License ##

[MIT License](http://www.opensource.org/licenses/mit-license.php)

