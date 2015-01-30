/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name angularSiteApp
 * @description
 * # angularSiteApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
      templateUrl: 'views/showpost.html',
      controller: 'PostViewCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'AuthCtrl',
      resolve: {
      user: function(Auth) {
      return Auth.resolveUser();
          }
        }
      })
      .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl',
      resolve: {
      user: function(Auth) {
      return Auth.resolveUser();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://nicho.firebaseio.com/');
