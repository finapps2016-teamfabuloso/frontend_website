(function() {
  'use strict';

  angular.module('finApp')

  .controller('AccountCtrl', ['$scope', '$http', 'AccountServ',
   function($scope, $http, AccountServ) {

     console.log('This is the Account Controller');

   }
  ]);
}());
