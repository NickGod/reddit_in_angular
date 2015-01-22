'use strict';

/**
 * @ngdoc function
 * @name angularSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSiteApp
 */
angular.module('angularSiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
