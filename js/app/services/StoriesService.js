var url = 'https://hacker-news.firebaseio.com/v0/';

function storiesService($http) {
  this.getTopStories = function () {
    return $http.get(url + 'topstories.json');
  };
}



angular
  .moudle('app')
  .service('storiesService', storiesService);