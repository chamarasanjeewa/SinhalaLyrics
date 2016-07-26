
(function () {
  'use strict';
  angular.module('lyricsApp').controller('lyricsSearchCtrl', lyricsSearchCtrl);
  lyricsSearchCtrl.$inject = ['$http', '$scope', '$timeout', '$stateParams', '$state','moment', 'examService', '$ionicPlatform','$ionicLoading','connectionService','storageService','backButtonOverrideService'];

  function lyricsSearchCtrl($http, $scope, $timeout, $stateParams, $state, moment,examService, $ionicPlatform, $ionicLoading,connectionService,storageService,backButtonOverrideService) {
  
  $ionicPlatform.ready(function(){

  });

      backButtonOverrideService.setup($scope, function() {
        console.log("backing from exam search");
        //$state.go('app.examSearchResult')
    });
 
   
    $scope.init=function(){
      
    }

     
    $scope.init();

  }
})();
