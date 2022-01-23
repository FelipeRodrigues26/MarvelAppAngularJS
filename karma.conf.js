//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
       'lib/angular/angular.js',
       'app.module.js',
       'lib/angular-mocks/angular-mocks.js',
       '../app/personagem-detalhes/personagem-detalhes.component.js',
       '../app/personagem-detalhes/personagem-detalhes.component.spec.js',
       '../app/models/user.js',
       '../app/login/login.component.js',
       '../app/login/login.component.spec.js',
       './services/autentication-service.service.js',
       './services/personagem-service.service.js',
       'lib/angular-route/angular-route.js',
       'lib/bootstrap/dist/js/bootstrap.bundle.min.js',
       'lib/angular-resource/angular-resource.js',
       'lib/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
       'https://www.gstatic.com/firebasejs/6.2.1/firebase.js',
       'https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js',
       'https://cdnjs.cloudflare.com/ajax/libs/rxjs/2.5.3/rx.all.js',
       'https://cdn.rawgit.com/Reactive-Extensions/rx.angular.js/v0.0.14/dist/rx.angular.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
