# Webfont optimizer for Grunt

[![Powered by You](http://sapegin.github.io/powered-by-you/badge.svg)](http://sapegin.github.io/powered-by-you/)
[![Build Status](https://travis-ci.org/sapegin/grunt-fontoptim.png)](https://travis-ci.org/sapegin/grunt-fontoptim)

Generates CSS with WOFF(2) fonts embedded as Base64. Use these CSS to load webfonts asynchronously, avoid invisible text and reduce flickering.

Based on ideas from Adam Beres-Deak’s article [Better webfont loading with using localStorage and providing WOFF2 support](http://bdadam.com/blog/better-webfont-loading-with-localstorage-and-woff2.html).


## Getting Started

This plugin requires Grunt 0.4.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-fontoptim --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-fontoptim');
```


## Fontoptim task

_Run this task with the `grunt fontoptim` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Your font should be in WOFF and WOFF2 formats (you can make them with Font Squirrel’s [webfont generator](http://www.fontsquirrel.com/tools/webfont-generator)).

Bold variants should contain `bold` in file names and italics should contain `italic`.

`dest` defines a prefix of destination files, eg. with dest of `build/ptserif` two files will be created: `build/ptserif.woff.css` and `build/ptserif.woff2.css`.

### Options

#### fontFamily

Type: `String`, default: target name (eg. `ptserif`).

Font-family that you can use to refer to your font in CSS, eg. `PT Serif`.

### Usage Examples

``` javascript
fontoptim: {
	ptserif: {
		src: 'fonts/PTSerif-*',
		dest: 'build/ptserif',
		options: {
			fontFamily: 'PT Serif'
		}
	}
}
```

Then load these CSS files with [`loadFont`](https://github.com/sapegin/fontoptim/blob/master/demo/js/fontloader.js) function or with your own code.

```html
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<!-- This script must be placed in the HEAD above all external stylesheet declarations (link[rel=stylesheet]) -->
	<script>function loadFont(fontName, fontUrlBase) { /* Inline loadFont function here */ }
	loadFont('PT Serif','/build/ptserif')</script>
	<link rel="stylesheet" href="/build/styles.css">
</head>
...
```

See [demo](https://github.com/sapegin/fontoptim/tree/master/demo) for details.


## Resources

* [Better webfont loading with using localStorage and providing WOFF2 support](http://bdadam.com/blog/better-webfont-loading-with-localstorage-and-woff2.html)
* [Font Squirrel’s webfont generator](http://www.fontsquirrel.com/tools/webfont-generator)


## Changelog

The changelog can be found in the [Changelog.md](Changelog.md) file.

---

## License

The MIT License, see the included [License.md](License.md) file.
