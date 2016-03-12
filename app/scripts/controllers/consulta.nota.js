'use strict';

/**
 * @ngdoc function
 * @name gitlocalApp.controller:ConsultaNotaCtrl
 * @description
 * # ConsultaNotaCtrl
 * Controller of the gitlocalApp
 */
angular.module('gitlocalApp')
  .controller('ConsultaNotaCtrl', ['$scope', 'NotaFiscal', function ($scope, NotaFiscal) {

    $scope.showForm = true;
    $scope.canSubmit = true;''
    $scope.nota = {};

    $scope.gRecaptchaResponse = '';

    $scope.$watch('gRecaptchaResponse', function (){
      $scope.expired = false;
      console.log('gRecaptchaResponse', $scope.captchaControl);
      if ($scope.gRecaptchaResponse !== ''){
        $scope.canSubmit = false;
      }
    });

    $scope.expiredCallback = function expiredCallback(){
      $scope.expired = true;
      console.log('expiredCallback', $scope.captchaControl);
    };

    $scope.findByChaveAcesso = function () {

        NotaFiscal.getNotas()
        .query( {"chave" : $scope.nota.chave, "_limit" : 1 } )
        .$promise.then(
          function (response) {
            $scope.nota = response[0];
            $scope.showForm = false;
          },
          function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
            $scope.showForm = true;
          }
        );
    };
}]);
