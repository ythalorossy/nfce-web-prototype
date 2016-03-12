'use strict';

/**
 * @ngdoc function
 * @name gitlocalApp.controller:ConsultaNotaCtrl
 * @description
 * # ConsultaNotaCtrl
 * Controller of the gitlocalApp
 */
angular.module('gitlocalApp')
  .controller('ConsultaNotaCtrl', ['$scope', 'NotaFiscal', 'vcRecaptchaService', function ($scope, NotaFiscal, vcRecaptchaService) {

    $scope.nota = {};

    $scope.captcha = null;
    $scope.widgetId = null;
    $scope.model = {
        key: '6LcBjhoTAAAAAOuELnKIQeMw3ntZj3Ke32qhMiAR'
    };
    $scope.setWidgetId = function (widgetId) {
        $scope.widgetId = widgetId;
    };
    $scope.setResponse = function (response) {
      $scope.captcha = response;
    };
    $scope.cbExpiration = function() {
        vcRecaptchaService.reload($scope.widgetId);
        $scope.captcha = null;
     };

    $scope.submit = function () {

        if ($scope.captcha !== null) {

          NotaFiscal.getNotas()
            .query( {"chave" : $scope.nota.chave, "_limit" : 1 } )
              .$promise.then(
                function (response) {
                  $scope.nota = response[0];
                },
                function (response) {
                  console.error(response);
                }
              );

        } else {
            console.log('Failed validation');
            // In case of a failed validation you need to reload the captcha
            // because each response can be checked just once
            vcRecaptchaService.reload($scope.widgetId);
        }
    };

}]);
