'use strict';

angular.module('app')
.controller('homeCtrl', function($scope, photoService, $localStorage){
  // $scope.photo
  $scope.upload = function(){
    // console.log('upload', $scope.photo);
    photoService.savePhoto($scope.photo);
  }

  // $scope.$storage = $localStorage;
  //
  // $scope.$storage.something = 'something';
  //
  // console.log('in local storage: ', $scope.$storage.something, $scope.$storage)
})
