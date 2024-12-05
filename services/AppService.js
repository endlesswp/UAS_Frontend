angular
  .module("FancyNews")
  .service("AppService", [
    "$http",
    function ($http) {
      var baseUrl = "http://localhost:3000/api"; 

      this.getTopHeadlines = function (country, category) {
        var url = `${baseUrl}/top-headlines?country=${country}&category=${category}`;
        return $http.get(url).then(
          function (response) {
            return response.data;
          },
          function (error) {
            console.error("Error fetching news data:", error);
            throw error;
          }
        );
      };

      this.getNewsByCategory = function (category, country) {
        var url = `${baseUrl}/news/${category}?country=${country}`;
        return $http.get(url).then(
          function (response) {
            return response.data;
          },
          function (error) {
            console.error(`Error fetching ${category} news:`, error);
            throw error;
          }
        );
      };
    },
  ]);
