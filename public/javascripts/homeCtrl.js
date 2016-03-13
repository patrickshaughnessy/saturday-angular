'use strict';

angular.module('app')
.controller('homeCtrl', function($scope, $state, photoService, $localStorage){
  // $scope.photo
  $scope.upload = function(){
    // console.log('upload', $scope.photo);
    photoService.savePhoto($scope.photo);

    $state.go('photos', {params: 'something'})
  }
})
