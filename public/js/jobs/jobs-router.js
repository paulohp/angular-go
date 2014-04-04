'use strict';

angular.module('angs-go')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/jobs', {
        templateUrl: 'views/jobs/jobs.html',
        controller: 'JobsController',
        resolve:{
          resolvedJobs: ['Jobs', function (Jobs) {
            return Jobs.query();
          }]
        }
      })
    }]);
