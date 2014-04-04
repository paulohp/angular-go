'use strict';

angular.module('angs-go')
  .factory('Jobs', ['$resource', function ($resource) {
    return $resource('angs-go/jobs/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
