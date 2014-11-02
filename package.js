Package.describe({
  name: 'ian:bootstrap-3',
  summary: "HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
  version: '3.3.0_2',
  git: 'https://github.com/ianmartorell/meteor-bootstrap-3'
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');

  api.add_files('css/bootstrap.css', 'client');
  api.add_files('js/bootstrap.js', 'client');

  api.add_files('fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.ttf', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.woff', 'client');
});
