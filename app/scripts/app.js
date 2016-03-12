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
    'ui.router',
    'ngResource',
    'noCAPTCHA'
  ])
  .config(function ($stateProvider, $urlRouterProvider, noCAPTCHAProvider) {

    noCAPTCHAProvider.setSiteKey('6LcBjhoTAAAAAOuELnKIQeMw3ntZj3Ke32qhMiAR');
    noCAPTCHAProvider.setTheme('dark');

    $stateProvider
    // route for the main page
    .state('app', {
        url:'/',
        views: {
            'header': {
                templateUrl : 'views/header.html',
            },
            'content': {
                templateUrl : 'views/main.html',
                controller  : 'ConsultaNotaCtrl'
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
