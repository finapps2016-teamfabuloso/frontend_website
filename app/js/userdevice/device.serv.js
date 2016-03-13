;(function (){

  'use strict';

  angular.module('finApp')
    .service('DeviceServ', ['SERVER', '$http',
      function (SERVER, $http) {

        // console.log('This is the Device Service');
        var endpoint = SERVER.URL;

        this.getUserDevices = function (res) {
          return $http.get(endpoint + '/devices', SERVER.CONFIG);
        };

      }
    ]);
}());
