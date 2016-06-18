var url = 'https://hacker-news.firebaseio.com/v0/';
function NewsService($http) {
  this.getTopStories = function () {
		return $http.get(url + '/topstories.json');
	};

  this.getStory = function (id) {
    return $http.get(url + 'item/' + id + '.json');
  }
}

angular
    .module('app')
    .service('NewsService', NewsService);
