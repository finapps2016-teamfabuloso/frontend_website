;(function (){

  'use strict';

  angular.module('finApp')
    .service('MovementServ', ['SERVER', '$http',
      function (SERVER, $http) {

        console.log('This is the Movement Service');

      }
    ]);
}());
