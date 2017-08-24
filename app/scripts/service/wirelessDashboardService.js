(function () {
    'use strict';

    angular.module('myPortfolioApp').factory('wirelessDashboardService',wirelessDashboardService);

    wirelessDashboardService.$inject = ['ajax'];

    function wirelessDashboardService(ajax){
        return{
            getWirelessDashboardDetails : function (request, callback) {
                ajax.getWirelessDashboardDetails(request, callback).then(
                    function (data) {
                        return callback(data);
                    }
                )
            }
        }
    }

})();