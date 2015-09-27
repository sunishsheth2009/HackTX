(function() {
  'use strict';
  angular
  .module('myApp')
  .controller('DashBoardController', DashBoardController);

  DashBoardController.$inject = ['$stateParams', 'customerInfo'];

  function DashBoardController($stateParams, customerInfo) {
    var vm = this;
    var GETCUSTOMERPROFILEURL = "/app/url/";
    vm.customerId = $stateParams.customerId;

    init();

    function init() {
      getCustomerProfileData(); // Get customer Profile Data
    }

    function getCustomerProfileData () {
      customerInfo.getcustomerProfileData(GETCUSTOMERPROFILEURL+vm.customerId).then(function(response) {
        vm.customerProfileData = response;
      });
    }

  }
})();
