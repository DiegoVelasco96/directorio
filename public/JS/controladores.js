(function() {
  angular.module('directorio.controllers', [])
    .controller('directorioController', function($scope) {
      $scope.persona = {
        codigo: "001",
        cedula: 1025436698,
        nombre: 'Carlos',
        apellido: 'Perez',
        celular: 3205487693,
        peso: 70,
        altura: 1.60,
        edad: 25,
        hobbies: ["Correr", "Nadar"]
      }
    })
    .controller('comenentarioController', function($scope) {
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
