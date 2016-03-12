;(function (){

  'use strict';

  angular.module('finApp')
    .service('MovementServ', ['SERVER', '$http',
      function (SERVER, $http) {

        console.log('This is the Movement Service');
        var endpoint = SERVER.URL;

        this.getUserMovements = function (res) {
          return $http.get(endpoint + '/movements', SERVER.CONFIG);
        };

      }
    ]);
}());
