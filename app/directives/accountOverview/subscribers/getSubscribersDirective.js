(function () {
    'use strict';

    angular.module("myPortfolioApp").directive('mySubscribers', mySubscribers);

    function mySubscribers() {

        return{
            controller : function ($scope,subscriberService,accountOverviewService,$state) {
                var vm = this;

                vm.init1 = function(accountNumber) {
                    vm.accountNumber = accountNumber;
                    var request = {};
                    request.accountNumber = vm.accountNumber;
                    subscriberService.getSubs(request,function (_tmp) {
                          vm.subscribers = _tmp.subscribers;
                        },
                        function (error) {
                            console.log("error"+error);
                        })
                };

                vm.gotoService = function (ctn,accountNumber,subType) {
                    accountOverviewService.setSelectedAccountNumber(accountNumber);
                    accountOverviewService.setSelectedCTN(ctn);
                    if(subType == "w")
                    $state.go("wirelessDashboard");
                    else
                    $state.go("internetDashboard");
                };
            },
            controllerAs:"vm",
            scope:{accountNumber:'='},
            templateUrl: 'directives/accountOverview/subscribers/subscribersDirective.html',
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
