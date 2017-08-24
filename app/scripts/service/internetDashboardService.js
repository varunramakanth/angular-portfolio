(function () {
    'use strict';

    angular.module('myPortfolioApp').factory('internetDashboardService',internetDashboardService);

    internetDashboardService.$inject = ['ajax'];

    function internetDashboardService(ajax){
        return{
            getInternetDashboardDetails : function (request, callback) {
                ajax.getInternetDashboardDetails(request, callback).then(
                    function (data) {
                        return callback(data);
                    }
                )
            }
        }
    }

})();