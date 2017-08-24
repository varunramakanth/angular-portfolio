"use strict";

angular.module("myPortfolioApp").run(function($rootScope){
    $rootScope.$extend({
      page : function (){
          return 'views/page.html';
      }
    });
});