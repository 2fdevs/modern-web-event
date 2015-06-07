'use strict';

/**
 * @ngdoc overview
 * @name modernWebEventApp
 * @description
 * # modernWebEventApp
 *
 * Main module of the application.
 */
angular
    .module('modernWebEventApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
