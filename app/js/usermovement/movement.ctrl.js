(function() {
  'use strict';

  angular.module('finApp')

  .controller('MovementCtrl', ['$scope', '$http', 'MovementServ',
   function($scope, $http, MovementServ) {

     console.log('This is the Movement Controller');

     var vm = this;
     vm.state = {movements:[]};
     vm.getUserMovements = function (res) {
      MovementServ.getUserMovements(res).then(function(res){
      $scope.accounts = res.data.movements;
      console.log(res.data.movements);
       });
     };
     vm.getUserMovements({res:''});


   }
  ]);
}());
