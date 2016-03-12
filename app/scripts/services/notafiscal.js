'use strict';

/**
 * @ngdoc function
 * @name gitlocalApp.service:NotaFiscal
 * @description
 * # NotaFiscal
 * Service of the gitlocalApp
 */
angular.module('gitlocalApp')
  .constant("baseURL", "http://localhost:3000/")
  .service('NotaFiscal', ['$resource', 'baseURL', function ($resource, baseURL) {

      this.getNotas = function(){
        return $resource(
          baseURL + "notas",
          null,
          {
            'update' : { method:'PUT' },
            'get': { isArray: false }
          }
        );
      };

  }]);
