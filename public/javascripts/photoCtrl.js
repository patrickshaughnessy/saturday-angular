'use strict';

angular.module('app')
.controller('photoCtrl', function($scope, photoService){
  photoService.getPhotos().then(function(data){
    console.log(data);
    $scope.photos = data;
  }) // data from my data source


  console.log('photoctrl: photos = ', $scope.photos)
})
