(function() {

  var app = angular.module('directorio', [
    'ngRoute'
  ]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/vista', {
        templateUrl: 'view/index.html',
        controller: 'directorioController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

  app.controller('directorioController', function() {
    this.persona = {
      codigo: "001",
      cedula: 1025436698,
      nombre: 'Carlos',
      apellido: 'Perez',
      celular: 3205487693,
      habilidades: ["Correr", "Nadar"]
    }
  });

  app.controller('comenentarioController', function($scope) {
    $scope.comments = [];
    $scope.comment = {};
    $scope.show = false;

    $scope.toggle = function() {
      $scope.show = !$scope.show;
    };

    $scope.anonymousChanged = function() {
      if ($scope.comment.anonymous) {
        $scope.comment.email = "";
      }
    }

    $scope.addCommment = function() {
      $scope.comment.date = Date.now();
      $scope.comments.push($scope.comment);
      $scope.comment = {}
    }

  });
})();
