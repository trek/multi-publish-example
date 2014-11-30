var mergeTrees = require('broccoli-merge-trees');
var compileModules = require('broccoli-es6-module-transpiler');
var AMDFormatter = require('es6-module-transpiler-amd-formatter');
var TarGzip = require('broccoli-targz');

var cjsExport = compileModules('lib/', {
  formatter: 'commonjs',
  output: 'cjs'
});

var globalsExport = compileModules('globals-definition/', {
  formatter: 'bundle',
  output: 'globals/example.js'
});

var amdExport = compileModules('lib/', {
  formatter: new AMDFormatter(),
  output: 'amd'
});

zipCJS = new TarGzip(cjsExport, {name: 'cjs'});
zipGlobals = new TarGzip(globalsExport, {name: 'globals'});
zipAMD = new TarGzip(amdExport, {name: 'amd'});

module.exports = mergeTrees([cjsExport, globalsExport, amdExport, zipCJS, zipGlobals, zipAMD]);