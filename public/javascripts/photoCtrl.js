'use strict';

angular.module('app')
.controller('photoCtrl', function($scope, photoService){
  $scope.photos = photoService.getPhotos()// data from my data source
  console.log('photoctrl: photos = ', $scope.photos)
})
