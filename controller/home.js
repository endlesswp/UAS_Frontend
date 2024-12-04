angular.module("FancyNews").controller("HomeController", [
  "$scope",
  "AppService",
  function ($scope, AppService) {
    $scope.news = [];

    AppService.getTopHeadlines("us", "technology")
      .then(function (data) {
        $scope.news = data.articles;
      })
      .catch(function (error) {
        console.error("Error fetching news:", error);
      });
  },
]);
