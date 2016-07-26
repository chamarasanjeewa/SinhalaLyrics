(function () {
  'use strict';
  angular.module('lyricsApp').factory('loggerService',loggerService);
  loggerService.$inject = ['$cordovaNetwork','$ionicPopup','$ionicLoading'];

  function loggerService($cordovaNetwork,$ionicPopup,$ionicLoading) {
   
   
    var showToast=function(message, type){
     $ionicLoading.show({template: message,duration:2000});
    }

     var showServerErrorToast=function(message, type){
     $ionicLoading.show({template: "Server error. Try again after a while.",duration:4000});
    }

      var searchErrorToast=function(message, type){
         return $ionicLoading.show({template: 'error... ',duration:2000});
}

return {
 
  showServerErrorToast:showServerErrorToast,
  showToast:showToast,
  searchErrorToast:searchErrorToast
}
}

})();



