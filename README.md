[![Build Status](https://travis-ci.org/megmut/node-ts-mocha.svg?branch=master)](https://travis-ci.org/megmut/node-ts-mocha)
[![Coverage Status](https://coveralls.io/repos/megmut/node-ts-mocha/badge.svg?branch=master)](https://coveralls.io/r/megmut/node-ts-mocha?branch=master)
[![Dependencies Status](https://david-dm.org/megmut/node-ts-mocha.svg)](https://david-dm.org/megmut/node-ts-mocha.svg) 
[![devDependency Status](https://david-dm.org/megmut/node-ts-mocha/dev-status.svg)](https://david-dm.org/node-ts-mocha#info=devDependencies)


# Node.js template
## Typescript | Mocha | Istanbul | Typedoc

A light template for setting up a node.js typescript project. The template also has audo-documentation by way of typedoc and testing with coverage using mocha and istanbul. Further build tools may be added at a later date, but I wanted to stay away from webpack, gulp, grunt etc just to keep the template ambigious and flexible enough for people to integrate their own build tools as they see fit.

##### Main Dependencies
- istanbul: 0.4.5
- mocha: 3.2.0
- ts-node: 2.0.0
- typedoc: 0.5.3
- typescript: 2.1.4

## Getting Started

### Folder Structore

```
project-name
├── bin
│   └── index.js
├── coverage
│   └── coverage-report
├── docs
│   └── documentation-files
├── lib
│   └── index.ts
├── .gitignore
├── package.json
├── README.md
└── tconfig.json
```

Go ahead and fork / clone the repo or download the ".zip"
```
$ git clone git@github.com:megmut/node-ts-mocha.git
$ cd node-ts-mocha
```

### Prerequisites

The only pre-requisite is an installed version of node.js

> note: download using a package manager here: https://nodejs.org/en/download/package-manager/

### Installing

Install the node modules

```
$ npm install
$ npm install -g ts-node
```
>note: there are no typings to be installed with this template

## Building

Building the project uses the Typescript compiler. all .ts file from inside the lib folder are compiled and put into the bin directory. Run the build script with npm.

```
$ npm run build
```

Typescript can show the dignostics of the compiling task by setting the diagnostics flag in the tsconfig.js file
```
"diagnostics": true
```

## Running the project

You can run the project directly from the typescript files using the npm script: 
```
$ npm start
```

You can also run the project in a production enviroment
```
$ npm run production
```

You can let the Typescript compiler watch the files for any change and re-compile
```
$ npm run watch
```

## Running the tests

Tests are written for mocha. Istanbul provides the coverage. 
To run the tests on their own, use the script:
```sh
$ npm test
```

To run the tests and get a complete coverage report, use the script:
```
$ npm run coverage
```
Tests are run not on the typescript files, but on the compiled files. It is possible to run the tests on temporarily compiled typescript files, but then accurate coverage is very difficult to get. Additionally, it's usually better to test the deployable code.

[<img src="http://cdn.nicholasmordecai.co.uk/img/code-cvg.png">](http://nicholasmordecai.co.uk/)



## Deployment

The compiler will release all compiled files into the bin folder. You can set your entry point in the package json to the relevant entry point (typically index.js). Bundling is possible, however Typescript only allow bundling when using module type System or AMD. 

Definitions and Source Maps are also pubished into the bin folder, which you can disable in the tsconfig.json file using the compiler flags:
```
"sourceMap": false,
"declaration": false
```

You can also remove all comments when compiling by using the flag
```
"removeComments": true
```

## Documentation

This template uses typedoc to auto generate documentation. See more at https://github.com/TypeStrong/typedoc.
When generated, the relative files will reside in the docs/ folder. To run the documentation generator, simple run:

```
$ npm run docs
```


## Authors

* **Nicolas Mordecai**

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* A big thank you to the guys at Microsoft for Typescript
