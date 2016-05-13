'use strict';


angular.module('meanSampleApp')
    .controller('MainController', ["$scope", "$http", function ($scope, $http) {
        $scope.report = {};
        $scope.reports = [];
        $scope.report.attachedImage = {};

        $scope.loadAll = function () {
            $http.get("/api/reports").then(function (res) {
                $scope.reports = res.data;
            });
        };

        $scope.save = function () {
            $http.post("/api/reports", $scope.report);
            $scope.reports.unshift($scope.report);
            $scope.report = {};
        };

        $scope.loadAll();

    }]);
