var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
            return window._; //Underscore should be loaded on the page
        });


angular.module('lyricsApp', ['ionic','ngMessages', 'underscore','ngCordova','timer','angularMoment','ngStorage',
    "ngSanitize"

            ])

var isProduction=false;

angular.module('lyricsApp')
.constant('appSettings', {
 isProduction: isProduction
})

if(isProduction){
angular.module('lyricsApp').constant('ApiEndpoint', {
 url: 'http://52.77.81.10:9000/api'
 })
}else{
   angular.module('lyricsApp') .constant('ApiEndpoint', {
   url: 'http://localhost:8100/api'
})
}

angular.module('lyricsApp').run(function($ionicPlatform, $cordovaSQLite, $rootScope,$state, $timeout,connectionService) {
    $ionicPlatform.ready(function() {
     
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
         
            StatusBar.styleDefault();
        }
        // connectionService.checkConnectionAvailable();
        //$rootScope.db = window.openDatabase("qapp.db", "1.0", "qapp database", 200000);
       // $rootScope.db = $cordovaSQLite.openDB("qapp.db");//with android or ios enable this
      // $cordovaSQLite.execute($rootScope.db, 'CREATE TABLE IF NOT EXISTS User(id INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT, password TEXT, isLoggedIn INTEGER)');
       
   });
})

angular.module('lyricsApp').config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider,$provide) {

    // Turn off caching for  simplicity's sake
    $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.backButton.previousTitleText(false);
 
    $stateProvider
 .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
   onEnter: function($state, $timeout){
 }
})

.state('app.home', {
    url: '/home',
    views: {
        'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        }

    }
})
.state('app.lyricsSearch', {
    url: '/lyricsSearch',
    views: {
        'menuContent': {
            templateUrl: 'templates/lyrics.search.html',
            controller: 'lyricsSearchCtrl'
        }

    }
})

.state('app.aboutUs', {
    url: '/aboutUs',
     
    views: {
        'menuContent': {
            templateUrl: 'templates/aboutUs.html',
           
        }

    }
})
    $urlRouterProvider.otherwise('/app/home');
});


