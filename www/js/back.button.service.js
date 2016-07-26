(function () {
  'use strict';
 
  angular.module('lyricsApp').factory('backButtonOverrideService',backButtonOverrideService);
  backButtonOverrideService.$inject = ['$rootScope','$ionicPlatform'];

function backButtonOverrideService ($rootScope, $ionicPlatform) {
   
    var setup=function($scope, customBackFunction) {
        // override soft back
        // framework calls $rootScope.$ionicGoBack when soft back button is pressed
        var oldSoftBack = $rootScope.$ionicGoBack;
        $rootScope.$ionicGoBack = function() {
          $scope.$destroy();
            customBackFunction();
        };
       
        var deregisterSoftBack = function() {
            $rootScope.$ionicGoBack = oldSoftBack;
        };

        // override hard back
        // registerBackButtonAction() returns a function which can be used to deregister it
        var deregisterHardBack = $ionicPlatform.registerBackButtonAction(
            customBackFunction, 101
        );

   
        // cancel custom back behaviour
        $scope.$on('$destroy', function() {
          console.log('destroying')
          
            deregisterHardBack();
            deregisterSoftBack();
        });
    }

    return {
  setup:setup
}

  
};





})();
