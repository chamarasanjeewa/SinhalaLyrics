(function () {
  'use strict';
  angular.module('lyricsApp').factory('storageService',storageService);
  storageService.$inject = ['$localStorage'];

  function storageService($localStorage) {
   
   
     var setLyricsSearchResults=function(searchedLyricsResults){
     $localStorage.cachedLyricsResults=searchedLyricsResults;
    }

    var getCachedLyricsResults=function(){
      return $localStorage.cachedLyricsResults;
    }

return {
  setLyricsSearchResults:setLyricsSearchResults,
  getCachedLyricsResults:getCachedLyricsResults
  
}
}

})();



