(function() {
  'use strict';

  angular
  .module('myApp')
  .factory('customerInfo', customerInfo);

  customerInfo.$inject = ['$http', '$q'];

  function customerInfo($http, $q){

    var service = {
      getcustomerProfileData: getcustomerProfileData
    };
    return service;

    function getcustomerProfileData(url){
      var myDataDeferred = $q.defer();
      $http.get(url)
      .success(function(result) {
        myDataDeferred.resolve(result);
      }).error(function(error) {
        myDataDeferred.reject(error);
      });
      return myDataDeferred.promise;
    }

  }

})();
