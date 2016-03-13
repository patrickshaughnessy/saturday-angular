'use strict';

angular.module('app')
.factory('photoService', function($http, $localStorage){

  var data = $localStorage.data || [];

  function getPhotos(){
    return data // fetch the data from data source
  }

  function savePhoto(photo){
    // store photo;
    data.push(angular.copy(photo));
    $localStorage.data = data;
  }

  function deletePhoto(idx){
    // remove one photo
    data.splice(idx, 1)
    $localStorage.data = data;

  }

  return {
    savePhoto: savePhoto,
    getPhotos: getPhotos
  }
})

// .service('photoService', function($http){
//
//   var data = [];
//
//   this.getPhotos = function(){
//     return data // fetch the data from data source
//   }
//
//   this.savePhoto = function(photo){
//     // store photo;
//     data.push(angular.copy(photo));
//   }
//
//   // return {
//   //   savePhoto: savePhoto,
//   //   getPhotos: getPhotos
//   // }
// })
