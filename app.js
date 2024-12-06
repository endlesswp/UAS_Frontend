var app = angular.module("FancyNews", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/", {
        templateUrl: "/pages/home/home.html",
        controller: "HomeController",
      })
      .when("/home", {
        templateUrl: "/pages/home/home.html",
        controller: "HomeController",
        params: { category: "general" },
      })
      .when("/entertainment", {
        templateUrl: "pages/home/home.html",
        controller: "HomeController",
        params: { category: "entertainment" },
      })
      .when("/health", {
        templateUrl: "pages/home/home.html",
        controller: "HomeController",
        params: { category: "health" },
      })
      .when("/sports", {
        templateUrl: "pages/home/home.html",
        controller: "HomeController",
        params: { category: "sports" },
      })
      .when("/science", {
        templateUrl: "pages/home/home.html",
        controller: "HomeController",
        params: { category: "science" },
      })
      .when("/technology", {
        templateUrl: "pages/home/home.html",
        controller: "HomeController",
        params: { category: "technology" },
      });
  },
]);
