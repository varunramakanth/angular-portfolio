(function () {
    'use strict';

     angular.module('myPortfolioApp').factory('accountOverviewService',accountOverviewService);

    accountOverviewService.$inject = ['ajax'];

    function accountOverviewService(ajax){
        var _selectedCTN = null;
        var _selectedAccountNumber = null;
        return{
            getAccountList : function (request, callback) {
                ajax.getAccountList(request, callback).then(
                    function (data) {
                        return callback(data);
                    }
                )
            },
            setSelectedAccountNumber : function (accountNumber) {
               _selectedAccountNumber = accountNumber
            },
            getSelectedAccountNumber : function () {
                return _selectedAccountNumber;
            },
            setSelectedCTN : function (ctn) {
                _selectedCTN = ctn
            },
            getSelectedCTN : function () {
                return _selectedCTN;
            }
        }
    }

})();