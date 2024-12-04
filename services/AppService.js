angular
  .module("FancyNews")
  .service("AppService", [
    "$http",
    function ($http) {
      var apiKey = "0819647073f2418182dda6578db8c60b"; <!-- this API key is only for texting and developing purposes, please use your own API key -->
      var baseUrl = "https://newsapi.org/v2/top-headlines";

      this.getTopHeadlines = function (country, category) {
        var url = `${baseUrl}?country=${country}&category=${category}&apiKey=${apiKey}`;
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
    },
  ]);
