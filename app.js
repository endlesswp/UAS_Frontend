var app = angular.module("FancyNews", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/", {
        templateUrl: "pages/home/home.html",
        controller: "HomeController",
      })
      .when("/login", {
        templateUrl: "pages/login/login.html",
      })
      .when("/register", {
        templateUrl: "pages/register/register.html",
      })
  },
]);
