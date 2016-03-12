'use strict';

/**
 * @ngdoc overview
 * @name gitlocalApp
 * @description
 * # gitlocalApp
 *
 * Main module of the application.
 */
angular
  .module('gitlocalApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'vcRecaptcha'
  ])
  .constant("baseURL", "http://192.168.3.102:3000/")
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    // route for the main page
    .state('app', {
        url:'/',
        resolve: {
          mensagens : function(Mensagem) {
            return Mensagem.getMensagens().query();
          }
        },
        views: {
            'header': {
                templateUrl : 'views/header.html',
            },
            'content': {
                templateUrl : 'views/main.html',
                controller  : 'MainCtrl'
            },
            'footer': {
                templateUrl : 'views/footer.html',
            }
        }
    })
    // route for the aboutus page
    .state('app.consulta_nota', {
        url:'consulta/nota',
        views: {
            'content@': {
                templateUrl : 'views/consulta.nota.html',
                controller  : 'ConsultaChaveCtrl'
            }
        }
    })

    .state('app.consulta_chave', {
        url:'consulta/chave',
        views: {
            'content@': {
                templateUrl : 'views/consulta.chave.html',
                controller  : 'ConsultaNotaCtrl'
            }
        }
    })
    .state('app.consulta_inutilizacao', {
        url:'consulta/inutilizacao',
        views: {
            'content@': {
                templateUrl : 'views/consulta.inutilizacao.html',
                controller  : 'ConsultaInutilizacaoCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise('/');

  });
