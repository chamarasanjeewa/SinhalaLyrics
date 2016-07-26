(function () {
  'use strict';
  angular.module('lyricsApp').factory('connectionService',connectionService);
  connectionService.$inject = ['$cordovaNetwork','$ionicPopup'];

  function connectionService($cordovaNetwork,$ionicPopup) {
   
   
     var checkConnectionAvailable=function(){
      
     //  $ionicPlatform.ready(function(){
    try{
     if (!_.isUndefined($cordovaNetwork) && $cordovaNetwork.isOffline()) {

              $ionicPopup.confirm({
                            title: "Internet connection not available",
                            content: "Some features will not work with out internet connection. Do you want to continue?",
                            cancelText: 'No',
                            okText: 'Yes'
                        })
                        .then(function(result) {
                            if(!result) {
                                ionic.Platform.exitApp();
                            }
                        });

      }
    }catch(ex){
      console.log(ex);
    }
    }

return {
  checkConnectionAvailable:checkConnectionAvailable,
  
}
}

})();



