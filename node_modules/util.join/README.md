# util.join [![Build Status](https://travis-ci.org/jmquigley/util.join.svg?branch=master)](https://travis-ci.org/jmquigley/util.join) [![tslint code style](https://img.shields.io/badge/code_style-TSlint-5ed9c7.svg)](https://palantir.github.io/tslint/) [![Test Runner](https://img.shields.io/badge/testing-ava-blue.svg)](https://github.com/avajs/ava) [![NPM](https://img.shields.io/npm/v/util.join.svg)](https://www.npmjs.com/package/util.join) [![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.join/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.join?branch=master)

> Joins and normalizes a file path into a unix path.

Using the node `path.join()` on Windows results in a backslash path separator.  Using it on OSX or Linux uses a forward slash.  This function is a wrapper that will perform the node join and then normalize all path separators using the forward slash.  e.g. the path:

    C:\blah\blah\blah

will become:

    C:/blah/blah/blah

OSX/Linux paths will work the same.  This function will also detect the "home" path leader (`~/`, `~\`, or `~`) and expand it.


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add --dev util.join
```

To build the app and run all tests:
```
$ yarn run all
```


## Usage

```javascript
const join = require('util.join');

let s = join('C:\\', 'blah', 'blah', 'blah');
console.log(s);

// prints the path 'C:/blah/blah/blah'
```
