(function() {
  'use strict';

  angular.module('finApp')

  .controller('MovementCtrl', ['$scope', '$http', 'MovementServ',
   function($scope, $http, MovementServ) {

     console.log('This is the Movement Controller');

   }
  ]);
}());
