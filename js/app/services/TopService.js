function TopService($http) {
    this.getStories = function () {
      return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    };

    this.getPost = function () {
      var stories = this.getStories();
      var posts = [];
      for (var i = 0; i < stories.data.length; i++) {
        posts.push($http.get('https://hacker-news.firebaseio.com/v0/item/' + stories.data[i] +'.json'));
      }
      return posts;
    }
}

angular
    .module('app')
    .service('TopService', TopService);