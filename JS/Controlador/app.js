(function() {

    var app = angular.module('directorio', []);

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

    app.controller('comenentarioController', function()) {
      this.comentario = [];
      this.show = true;
    });

})();
