angular.module("FancyNews").controller("HomeController", [
  "$scope",
  "AppService",
  "$routeParams",
  "$route",
  function ($scope, AppService, $routeParams, $route) {
    $scope.news = [];

    function loadNews() {
      var category = $routeParams.category || "general";
      console.log("Loading news for category:", category);

      AppService.getNewsByCategory(category, "us")
        .then(function (data) {
          console.log("Received data for category:", category);
          $scope.news = data.articles;
        })
        .catch(function (error) {
          console.error("Error fetching news:", error);
        });
    }

    $scope.$watch(
      function () {
        return $routeParams.category;
      },
      function (newCategory, oldCategory) {
        if (newCategory !== oldCategory) {
          console.log("Category changed from", oldCategory, "to", newCategory);
          loadNews();
        }
      }
    );

    loadNews();
  },
]);
