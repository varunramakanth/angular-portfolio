'use strict';

angular.module('myPortfolioApp').run(['$rootScope', function ($rootScope) {

    angular.extend($rootScope.constructor.prototype, {
        $extend: function (extension) {
            angular.extend(this, extension);
            return this;
        }
    });

}]);