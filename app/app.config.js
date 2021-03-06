'use strict';

angular.
  module('marvelApp')
  .config(['$routeProvider', '$locationProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/welcome', {
          template: '<welcome-component></welcome-component>' ,
        }).
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
        .otherwise('/welcome')

    },
  ])
  .run(function ($rootScope, $location, AutenticationService) {
    $rootScope.$on('$routeChangeStart', function (event, newUrl) {
      if (newUrl.requireAuth && !AutenticationService.userLogged()) {       
         window.alert('Você precisa logar para acessar os detalhes.');
         $location.path('/login');
      }
    })
  })
  
