var url = 'https://hacker-news.firebaseio.com/v0/';

function storiesService($http) {
  this.getTopStories = function () {
    return $http.get(url + 'topstories.json');
  };

  this.getStory = function (id) {
    return $http.get(url + '/item/' + id + '.json');
  }
}



angular
  .moudle('app')
  .service('storiesService', storiesService);