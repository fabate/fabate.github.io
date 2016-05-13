'use strict';

angular.module('meanSampleApp')
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: "site",
                url: '/',
                views: {
                    'content@': {
                        templateUrl: '/public/js/app/main/main.html',
                        controller: "MainController"
                    }
                }
            });
    }]);