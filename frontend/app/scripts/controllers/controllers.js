'use strict';

/**
 * Controllers of the weatherApp
 */
angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, $location, weatherService) {
     
      $scope.hasResults = false;

      $scope.search = function() {
         weatherService.getWeather($scope.zip) 
             .then(function(data) {
                 console.log('SUCCESS in controller');
                 $scope.results = data;
                 $scope.hasResults = true;
                 console.log(data);
             }, function(err) {
                 alert("Error returned from service! Invalid Zip Code!");
                 console.log("ERROR returned from weatherService");
             });
      }
  })
  .controller('WeatherCtrl', function($scope) {
      $scope.message = 'This is the WEATHER message!';
  });
