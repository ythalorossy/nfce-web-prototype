'use strict';

/**
 * @ngdoc function
 * @name gitlocalApp.service:Mensagem
 * @description
 * # NotaFMMensagemensagemiscal
 * Service of the gitlocalApp
 */
angular.module('gitlocalApp')
  .service('Mensagem', ['$resource', 'baseURL', function ($resource, baseURL) {
      this.getMensagens = function(){
        return $resource(
          baseURL + "mensagens",
          null,
          {
            'update' : { method:'PUT' }
          }
        );
      };
  }]);
