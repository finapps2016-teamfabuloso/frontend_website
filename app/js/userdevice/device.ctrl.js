(function() {
  'use strict';

  angular.module('finApp')

  .controller('DevicesCtrl', ['$scope', '$http', 'DeviceServ',
   function($scope, $http, DeviceServ) {

    //     console.log('This is the Device Controller');

     var vm = this;
     vm.state = {devices:[]};
     vm.getUserDevices = function (res) {
       DeviceServ.getUserDevices(res).then(function(res){
      $scope.devices = res.data.devices;
        //  console.log(res.data.devices);
       });
     };
     vm.getUserDevices({res:''});

   }
  ]);
}());
