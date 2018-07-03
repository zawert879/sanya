# util.constants

> General programming constants and regex strings

[![Build Status](https://travis-ci.org/jmquigley/util.constants.svg?branch=master)](https://travis-ci.org/jmquigley/util.constants)
[![tslint code style](https://img.shields.io/badge/code_style-TSlint-5ed9c7.svg)](https://palantir.github.io/tslint/)
[![Test Runner](https://img.shields.io/badge/testing-ava-blue.svg)](https://github.com/avajs/ava)
[![NPM](https://img.shields.io/npm/v/util.constants.svg)](https://www.npmjs.com/package/util.constants)
[![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.constants/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.constants?branch=master)


## Installation

This module uses [yarn](https://yarnpkg.com/en/) to manage dependencies and run scripts for development.

To install as an application dependency:
```
$ yarn add util.constants
```

To build the app and run all tests:
```
$ yarn run all
```


## Overview
This module contains reusable string constants and regex patterns.


## Constants

- `nl` -- Unix newline character string '\n'
- `sp` -- zero width non breaking space character (unicode u+200b)

## regex patterns

- `regexEmail` - matches [99.99% of all email](http://www.regular-expressions.info/email.html) addresses in use today
- `regexNumber` - matches a decimal number (e.g. 123, -123, -1.23)
- `regexURL` - matches a [Uniform Resource Locator (URL)](https://en.wikipedia.org/wiki/URL)
- `regexUUID` - matches a [universally unique id (UUID)](https://en.wikipedia.org/wiki/Universally_unique_identifier)
