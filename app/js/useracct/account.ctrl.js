(function() {
  'use strict';

  angular.module('finApp')

  .controller('AccountCtrl', ['$scope', '$http', 'AccountServ',
   function($scope, $http, AccountServ) {

    //  console.log('This is the Account Controller');

     var vm = this;
     vm.state = {accounts:[]};
     vm.getUserAccounts = function (res) {
      AccountServ.getUserAccounts(res).then(function(res){
      $scope.accounts = res.data.accounts;
      // console.log(res.data.accounts);
       });
     };
     vm.getUserAccounts({res:''});

   }
  ]);
}());
