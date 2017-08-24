(function () {
  'use strict';

    angular.module("myPortfolioApp").directive('myAccountBalance', accountBalance);

    function accountBalance() {

        return{
            controller : function ($scope,accountBalanceService) {
                var vm = this;

                vm.init1 = function(accountNumber) {
                   vm.accountNumber = accountNumber;
                   var request = {};
                   request.accountNumber = vm.accountNumber;
                    accountBalanceService.getAccountBalance(request,function (_tmp) {
                         vm.accountBalance = _tmp.balance;
                         vm.payByDate = _tmp.payByDate;
                        },
                        function (error) {
                            console.log("error"+error);
                        })
                }
            },
            controllerAs:"vm",
            scope:{accountNumber:'='},
            templateUrl: 'directives/accountOverview/accountBalance/accountBalanceDirective.html',
            link: function ($scope,scope,ctrl) {
                var unwatch = $scope.$watch('accountNumber', function(newVal, oldVal){
                    // or $watchCollection if students is an array
                    if (newVal) {
                        init();
                        $scope.vm.init1($scope.accountNumber);
                    }

                });
                function init(){
                    console.log("ssd"+$scope.accountNumber);
                }
            }
        }
    }

})();