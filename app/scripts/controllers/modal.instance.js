'use strict';

/**
 * @ngdoc function
 * @name gitlocalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitlocalApp
 */
angular.module('gitlocalApp')
  .controller('ModalInstanceCtrl',['$scope', '$uibModalInstance','msgSelected', function ($scope, $uibModalInstance, msgSelected) {

  $scope.mensagem = msgSelected;

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);
