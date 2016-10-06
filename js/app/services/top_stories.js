app.factory('topStories', [
           '$http',
  function ($http) {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                .success(function(data) {
                  return data;
                })
                .error(function(err) {
                  return err;
                });
}]);
