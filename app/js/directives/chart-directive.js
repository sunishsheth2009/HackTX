(function() {
  'use strict';

  angular
  .module('myApp')
  .directive('chartsDisplay', chartsDisplay);

  function chartsDisplay() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/chart.html',
      scope: {},
      link: linkFunc,
      controller: chartDirectiveController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, element, attribute, controller) {
      var elementResult = element[0].getElementsByClassName('container');
      controller.init(elementResult, attribute.data);
      attribute.$observe("data",function(){
        controller.init(elementResult, attribute.data);
        console.log(attribute.data);
      });
    }
  }

  chartDirectiveController.$inject = ['$scope', '$q'];

  function chartDirectiveController($scope, $q) {
    var vm = this;
    vm.init = init;

    function init(elementResult, data) {
      vm.elementResult = elementResult;
      vm.data = data;
      displayGraph(vm.elementResult, data);
    }

    function displayGraph(elementResult, data) {
      console.log(data[1]);
      $(elementResult).highcharts({
        chart: {
          type: 'column',
          zoomType: 'x',
          panning: true,
          panKey: 'shift'
        },

        exporting: {
          enabled: true
        },

        legend: {
          borderRadius: 5,
          borderWidth: 1
        },


        title: {
          text: 'Activity Track'
        },

        xAxis: {
          categories: ['Borrowed', 'Lend']
        },

        series: [{
          data: [10,30]
        }]

      });
    }

  }
})();
