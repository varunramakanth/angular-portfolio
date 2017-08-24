angular.module("myPortfolioApp").factory('backend',['$http',function ($http) {
    return{
       post: function (relativeUrl) {
           var absoluteUrl = 'resource/json/backend/'+ relativeUrl +'.json';
           var httpRequest;
           var method = 'GET';
           var data = '';

           httpRequest = $http({
              method : method,
               url: absoluteUrl,
               data: data
           });

           var req = httpRequest.then(
              function (response) {
                 var json =  response;
                 return json.data;
              },
              function (errorData) {

              }
           );
           return req;
       }
    }
}])