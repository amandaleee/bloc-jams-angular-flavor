(function() {
  //stateprovider  = state behavior
  //locationprovider = how application handles urls - part of ng core 

  function config($stateProvider, $locationProvider) {
    $locationProvider
    //this disables hashbang mode
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    // $urlRouterProvider.otherwise('/'); - was jus trying a thing there
    //stateprovider calls the state method w two arguments - stateName and stateConfig 
    //like this - $stateProvider.state(stateName, stateConfig)
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'templates/landing.html'
      })
      .state('album', {
        url: '/album',
        templateUrl: 'templates/album.html'
      });

  }


// the [] below contain dependency injections - external modules/utilities that this function requires to run
//add the script to index.html 
  angular
    .module('blocJams', ['ui.router'])
    .config(config);

})();