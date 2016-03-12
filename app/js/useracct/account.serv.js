;(function (){

  'use strict';

  angular.module('finApp')
    .service('AccountServ', ['SERVER', '$http',
      function (SERVER, $http) {

        console.log('This is the Account Service');

      }
    ]);
}());
