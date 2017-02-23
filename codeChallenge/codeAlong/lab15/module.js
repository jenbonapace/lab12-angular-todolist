var app = angular.module('PP', []);

//re write this for set up for facotry!!

var app = angular.module('Module', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
  $routeProvider .when('/form.html' {
    controller:"controller",
    templateUrl:""
  })
  .when("/", {
    controller: "controller2",
    templateUrl: "/finalmadlib.html"
  })

.otherwise({redirectTo:"form.html"});
$locationProvider.hashPrefix('');
});
