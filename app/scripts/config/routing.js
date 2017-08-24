'use strict';

angular.module('myPortfolioApp').config(['$stateProvider','$locationProvider',
function ($stateProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    var allStates = [
    {
        name:"accountOverview",
        url:"/accountOverview",
        controller:"myAccountOverviewCtrl",
        controllerAs:"vm",
        templateUrl:"views/accountOverview.html"
    },
    {
        name:"wirelessDashboard",
        url:"/wirelessDashboard",
        controller:"wirelessDashboardCtrl",
        controllerAs:"vm",
        templateUrl:"views/wirelessDashboard.html"
    },
    {
         name:"internetDashboard",
         url:"/internetDashboard",
        controller:"internetDashboardCtrl",
        controllerAs:"vm",
        templateUrl:"views/internetDashboard.html"
    }
    ]
    $.each(allStates, function (k,v) {
        $stateProvider.state(v);
    })
}]);