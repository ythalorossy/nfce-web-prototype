'use strict';

/**
 * @ngdoc function
 * @name gitlocalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitlocalApp
 */
angular.module('gitlocalApp')
  .controller('MainCtrl', ['$scope', '$log', '$uibModal', 'mensagens', function ($scope, $log, $uibModal, mensagens) {

    $scope.mensagens = mensagens;

    $scope.open = function (size, msgSelected) {

        $scope.msgSelected = msgSelected;

        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: '../views/main.mensagem.modal.html',
          controller: 'MessagemModalInstanceCtrl',
          size: size,
          resolve: {
            msgSelected: function () {
              return $scope.msgSelected;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };


  }]);
