;(function (){

  'use strict';

  angular.module('finApp')
    .service('DeviceServ', ['SERVER', '$http',
      function (SERVER, $http) {

        console.log('This is the Device Service');

      }
    ]);
}());
