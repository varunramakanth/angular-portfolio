(function () {

    angular.module("myPortfolioApp").controller('myAccountOverviewCtrl', accountOverviewCtrl);

    accountOverviewCtrl.$inject = ['accountOverviewService'];

    function accountOverviewCtrl(accountOverviewService) {
      var vm = this;
      vm.accountList = {};
      vm.showAccountBalanceSection = false;
      function init() {
          var request = {};
          accountOverviewService.getAccountList(request,function (_tmp) {
              console.log("the response is" + _tmp.accountList);
              vm.accountList = _tmp.accountList;
              vm.selectedAccount = vm.accountList[0].accountNumber;
              vm.showAccountBalanceSection = true;
          },
          function (error) {
             console.log("error"+error);
          })
      }  
      
      vm.gotoService = function () {
          
      }
      
      init();
    }

})();

