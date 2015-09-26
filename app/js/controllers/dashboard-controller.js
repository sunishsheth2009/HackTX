(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('DashBoardController', DashBoardController);

    function DashBoardController() {
      var vm = this;
      vm.name = "Sunish";
     }

 })();
