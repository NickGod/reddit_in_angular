'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
