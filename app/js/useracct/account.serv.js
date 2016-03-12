;(function (){

  'use strict';

  angular.module('finApp')
    .service('AccountServ', ['SERVER', '$http',
      function (SERVER, $http) {

        console.log('This is the Account Service');
        var endpoint = SERVER.URL;

        this.getUserAccounts = function (res) {
          return $http.get(endpoint + '/accounts', SERVER.CONFIG);
        };

      }
    ]);
}());
