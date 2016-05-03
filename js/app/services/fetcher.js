function Fetcher($http) {
	this.getTopStories = function () {
		return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
	};

	this.getPost = function (id) {
		return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
	};
}

angular
	.module('app')
	.service('Fetcher', Fetcher);
