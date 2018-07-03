# util.rstrip [![Build Status](https://travis-ci.org/jmquigley/util.rstrip.svg?branch=master)](https://travis-ci.org/jmquigley/util.rstrip) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Test Runner](https://img.shields.io/badge/testing-ava-blue.svg)](https://github.com/avajs/ava) [![NPM](https://img.shields.io/npm/v/util.rstrip.svg)](https://www.npmjs.com/package/util.rstrip) [![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.rstrip/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.rstrip?branch=master)


> Removes newline characters from the right of a string

Removes the `\n`, `\r`, or `\r\n` from the end of a string or Buffer and returns the new string.


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as a development dependency:
```
$ yarn add --dev util.rstrip
```

To build the app and run all tests:
```
$ yarn run all
```

## Example Usage

#### From String
```javascript
const rstrip = require('util.rstrip');
let s = rstrip('This is a test\r\n');

// returns the string "This is a test" without newlines
```

#### From Buffer
```javascript
const rstrip = require('util.rstrip');
let buf = new Buffer('This is a test\r\n');
let s = rstrip(buf);

// returns the string "This is a test" without newlines
```
