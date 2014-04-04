'use strict';

angular.module('angs-go')
  .controller('JobsController', ['$scope', '$modal', 'resolvedJobs', 'Jobs',
    function ($scope, $modal, resolvedJobs, Jobs) {

      $scope.jobs = resolvedJobs;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.jobs = Jobs.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Jobs.delete({id: id},
          function () {
            $scope.jobs = Jobs.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Jobs.update({id: id}, $scope.jobs,
            function () {
              $scope.jobs = Jobs.query();
              $scope.clear();
            });
        } else {
          Jobs.save($scope.jobs,
            function () {
              $scope.jobs = Jobs.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.jobs = {
          
          "title": "",
          
          "apply_email": "",
          
          "company_description": "",
          
          "company_name": "",
          
          "contact": "",
          
          "description": "",
          
          "terms": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var jobsSave = $modal.open({
          templateUrl: 'jobs-save.html',
          controller: JobsSaveController,
          resolve: {
            jobs: function () {
              return $scope.jobs;
            }
          }
        });

        jobsSave.result.then(function (entity) {
          $scope.jobs = entity;
          $scope.save(id);
        });
      };
    }]);

var JobsSaveController =
  function ($scope, $modalInstance, jobs) {
    $scope.jobs = jobs;

    

    $scope.ok = function () {
      $modalInstance.close($scope.jobs);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  };
