'use strict';

/**
 * @ngdoc function
 * @name amaSaaApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the amaSaaApp
 */

  angular.module('amaSaaApp')
  .controller('WeatherCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {

    $scope.change = function(){
      if($scope.search !== undefined) {
        $scope.fetch();
      }
    };

    $scope.fetch = function(){
      var deferred = $q.defer();
      $http.get('//api.openweathermap.org/data/2.5/weather?q=' +
                $scope.search +
                '&units=metric' +
//                'Kangasala' +
                '&appid=756d2b8cb29bf45a8096a37d231fa928' )
      .then(function successCallback(response) {
        deferred.resolve($scope.weathers = angular.fromJson(response));
      }, function errorCallback(error) {
        deferred.resolve($scope.weathers = angular.fromJson({}));
      });
      return deferred.promise;
    };
  }]);