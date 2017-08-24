(function () {

    angular.module("myPortfolioApp").controller('MyAccountBalanceController', accountBalanceCtrl);

    accountBalanceCtrl.$inject = ['accountBalanceService'];

    function accountBalanceCtrl(accountBalanceService) {
        var vm = this;
        function init1() {
            console.log(vm.accountNumber);
        }
        function init() {
            var request = {};
            accountBalanceService.getAccountBalance(request,function (_tmp) {
                    console.log("the response is" + _tmp.accountList);
                    vm.accountList = _tmp.accountList;
                    vm.selectedAccount = vm.accountList[0].accountNumber;
                },
                function (error) {
                    console.log("error"+error);
                })
        }

        init();
    }

})();