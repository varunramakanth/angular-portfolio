(function () {
    'use strict';

    angular.module('myPortfolioApp').factory('accountBalanceService',accountBalanceService);

    accountBalanceService.$inject = ['ajax'];

    function accountBalanceService(ajax){

        return{
            getAccountBalance : function (request, callback) {
                ajax.getBalance(request, callback).then(
                    function (data) {
                        return callback(data);
                    }
                )
            }
        }
    }

})();