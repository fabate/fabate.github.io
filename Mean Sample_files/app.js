'use strict';

angular.module('meanSampleApp', ['ui.router', 'naif.base64'])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    templateUrl: '/public/js/components/navbar/navbar.html'
                }
            }
        });

    }]);
