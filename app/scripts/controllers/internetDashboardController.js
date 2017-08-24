(function () {

    angular.module("myPortfolioApp").controller('internetDashboardCtrl', internetDashboardCtrl);

    internetDashboardCtrl.$inject = ['accountOverviewService','internetDashboardService'];

    function internetDashboardCtrl(accountOverviewService,internetDashboardService) {
        var vm = this;
        vm.internetDashboardData={};

        function init() {
            var request = {};
            internetDashboardService.getInternetDashboardDetails(request,function (_tmp) {
                    vm.internetDashboardData =_tmp;
                    console.log(vm.internetDashboardData);
                    vm.renderChart(vm.internetDashboardData.monthlyUsage);
                },
                function (error) {
                    console.log("error"+error);
                })
        }

        vm.renderChart = function (monthlyUsage) {
            var monthlyDataPoints = [];
            angular.forEach(monthlyUsage,function (value, key) {
                var monthlyDataPoint = {};
                monthlyDataPoint.x = new Date(key);
                monthlyDataPoint.y = parseInt(value);
                monthlyDataPoints.push(monthlyDataPoint);
            });
            console.log(monthlyDataPoints);
            var chart = new CanvasJS.Chart("chartContainer1",
                {
                    theme: "theme1",
                    animationEnabled: true,
                    axisX: {
                        valueFormatString: "MMM",
                        interval: 1,
                        intervalType: "month"

                    },
                    axisY: {
                        includeZero: false

                    },
                    data: [
                        {
                            type: "line",
                            //lineThickness: 3,
                            dataPoints: monthlyDataPoints
                        }


                    ]
                });

            chart.render();
        }

        init();
    }

})();

