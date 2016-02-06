Package.describe({
  name: 'angular2-html-templates',
  version: '0.5.0-beta.1',
  summary: 'Angular 2 HTML templates compiler for Meteor',
  git: 'https://github.com/Urigo/angular2-meteor/',
  documentation: 'README.md'
});

Npm.depends({
  'cheerio': '0.19.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.8');

  api.use([
    'caching-compiler@1.0.1-modules.8',
    'ecmascript@0.3.1-modules.8',
    'underscore@1.0.5-modules.8',
    'check@1.0.5'
  ]);

  api.addFiles([
    'utils/file_mixin.js',
    'compilers/ng_compiler.js',
    'compilers/ng_caching_compiler.js',
    'compilers/html_compiler.js'
  ], 'server');

  api.export(['HtmlCompiler'], 'server'); // Export in order to provide other packages the ability to register the build plugin
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('angular2-templates-compiler');
});
