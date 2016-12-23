(function() {

  var app = angular.module('directorio', [
    'directorio.controllers',
    'ui.router'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('vista', {
        url: "/vista",
        templateUrl: 'view/persona.html',
        controller: 'directorioController'
      })
    $urlRouterProvider.otherwise("/vista");
  });
})();
