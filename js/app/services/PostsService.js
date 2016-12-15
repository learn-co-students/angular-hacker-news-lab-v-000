var hn_url = 'https://hacker-news.firebaseio.com/v0';

function PostsService($http) {

	this.getTopStories = function () {
		return $http.get(hn_url + '/topstories.json');
	};

	this.getPost = function(id) {
		return $http.get(hn_url + '/item/' + id + '.json');
	};

}

angular
	.module('app')
	.service('PostsService', PostsService);