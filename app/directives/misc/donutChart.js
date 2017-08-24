(function () {
    'use strict';

    angular.module("myPortfolioApp").directive('donut', function() {
    return { restrict: 'E',
        scope:{mydataUsage:'='},
        link: function($scope, element) {
            //custom colors

            var unwatch = $scope.$watch('mydataUsage', function(newVal, oldVal){
                // or $watchCollection if students is an array
                if (newVal) {
                    var color = d3.scale.ordinal()
                        .range(["red", "#5DAEF8"]);
                    console.log("uiu"+$scope.mydataUsage);
                    var data = $scope.mydataUsage;
                    var width = 600;
                    var height = 600;
                    var pie = d3.layout.pie().sort(null);
                    var arc = d3.svg.arc()
                        .outerRadius(width / 2 * 0.9)
                        .innerRadius(width / 2 * 0.5)
                    var svg = d3.select(element[0]).append('svg')
                        .attr({width: width, height: height})
                        .append('g')
                        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
                    // add the <path>s for each arc slice
                    svg.selectAll('path').data(pie(data))
                        .enter().append('path')
                        .style('stroke', 'white')
                        .attr('d', arc)
                        .attr('fill', function(d, i){ return color(i) });
                }

            });
        }
    }

});
})();