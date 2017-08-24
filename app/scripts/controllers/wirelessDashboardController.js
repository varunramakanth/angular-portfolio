(function () {

    angular.module("myPortfolioApp").controller('wirelessDashboardCtrl', wirelessDashboardCtrl);

    wirelessDashboardCtrl.$inject = ['accountOverviewService','wirelessDashboardService'];

    function wirelessDashboardCtrl(accountOverviewService,wirelessDashboardService) {
        var vm = this;
        vm.showAccountBalanceSection = false;
        vm.wirelessDashboardData={};


        function init() {
            var request = {};
              wirelessDashboardService.getWirelessDashboardDetails(request,function (_tmp) {

                vm.wirelessDashboardData =_tmp;
                vm.wirelessDashboardData.dataUsagePercentage = (vm.wirelessDashboardData.dataUsage.used/vm.wirelessDashboardData.dataUsage.available)*100;
                vm.wirelessDashboardData.talkUsagePercentage = (vm.wirelessDashboardData.talkUsage.used/vm.wirelessDashboardData.talkUsage.available)*100;
                vm.wirelessDashboardData.textUsagePercentage = (vm.wirelessDashboardData.textUsage.used/vm.wirelessDashboardData.textUsage.available)*100;

                },
                function (error) {
                    console.log("error"+error);
                })
        }
        init();
    }

})();

