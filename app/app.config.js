'use strict';

angular.
  module('marvelApp')
  .config(['$routeProvider', '$locationProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/personagem/lista', {
          template: '<lista-personagens-component></lista-personagens-component>'

        }).
        when('/personagem/detalhes/:id', {
          template: '<personagem-detalhes-component></personagem-detalhes-component>',
          requireAuth: true
        })
        .otherwise('/')

    },
  ])
  .run(function ($rootScope, $location, AutenticationService) {
    $rootScope.$on('$routeChangeStart', function (event, newUrl) {
      if (newUrl.requireAuth && !AutenticationService.isUserLogged()) {
        $location.path('/login');
      }
    })
  })
  
