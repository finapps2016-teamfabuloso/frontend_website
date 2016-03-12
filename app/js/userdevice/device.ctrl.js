(function() {
  'use strict';

  angular.module('finApp')

  .controller('DevicesCtrl', ['$scope', '$http', 'DeviceServ',
   function($scope, $http, DeviceServ) {

     console.log('This is the Device Controller');

   }
  ]);
}());
