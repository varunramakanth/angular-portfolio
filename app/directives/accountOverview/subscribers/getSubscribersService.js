(function () {
    'use strict';

    angular.module('myPortfolioApp').factory('subscriberService',subscriberService);

    subscriberService.$inject = ['ajax'];

    function subscriberService(ajax){

        return{
            getSubs : function (request, callback) {
                ajax.getSubscribers(request, callback).then(
                    function (data) {
                        return callback(data);
                    }
                )
            }
        }
    }

})();