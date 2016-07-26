
(function () {
  'use strict';
  angular.module('lyricsApp').controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$http', '$scope', '$timeout', '$stateParams', '$state','moment', 'lyricsService', '$ionicPlatform','$ionicSideMenuDelegate','$ionicLoading','connectionService','storageService','backButtonOverrideService','$sce'];

  function homeCtrl($http, $scope, $timeout, $stateParams, $state, moment,examService, $ionicPlatform,$ionicSideMenuDelegate, $ionicLoading,connectionService,storageService,backButtonOverrideService,$sce) {
  

     $ionicPlatform.ready(function(){

    connectionService.checkConnectionAvailable();
       $ionicSideMenuDelegate.toggleLeft();
  });

      backButtonOverrideService.setup($scope, function() {
        console.log("backing from exam search");
        //$state.go('app.examSearchResult')
    });
 
    

    $scope.searchLyrics=function(){
       debugger;
    }
    
   

    $scope.init=function(){
      
       //$ionicSideMenuDelegate.toggleLeft();
    }

     
$scope.init();

  }
})();
