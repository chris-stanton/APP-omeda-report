var myApp = angular.module('myApp', ['ngRoute', '720kb.tooltips', 'ngAlertify']);

myApp.config(['$routeProvider', 'tooltipsConfProvider', function($routeProvider, tooltipsConfProvider) {


  // defining routes
  $routeProvider
    // job application and background check
    .when ('/landing', {
      templateUrl: './views/landing.html',
      controller: 'LandingController',
      controllerAs: 'lc'
    })
    .otherwise ( {
        redirectTo: '/landing'
    });

  // angular-tooltips global config options
  tooltipsConfProvider.configure({
    'smart': true,
    'side': 'top',
    'size': 'small',
    'speed': 'slow',
    'tooltipTemplateUrlCache': false
  });



}]); // end myApp.config()
