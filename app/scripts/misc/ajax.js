angular.module("myPortfolioApp").factory('ajax',['backend',function (backend) {
    return {
       getAccountList: function (postData) {
          return backend.post('accountOverview');
       },
        getBalance: function (postData) {
            return backend.post('accountBalance');
        },
        getSubscribers: function (postData) {
            return backend.post('subscribers'+postData.accountNumber);
        },
        getWirelessDashboardDetails: function (postData){
            return backend.post('wirelessDashboard');
        },
        getInternetDashboardDetails: function (postData) {
            return backend.post('internetDashboard');
        }
    };

}]);