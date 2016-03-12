(function() {
  'use strict';

  angular.module('finApp')

  .controller('DevicesCtrl', ['$scope', '$http', 'DeviceServ',
   function($scope, $http, DeviceServ) {

     console.log('This is the Device Controller');

     var vm = this;

     vm.getUserDevices = function (res) {
       DeviceServ.getUserDevices(res);
     };
     vm.getUserDevices({res:''});

   }
  ]);
}());
