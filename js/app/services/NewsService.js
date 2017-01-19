function NewsService($http, $resource) {
	this.getNewsId = function() {
		return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
	}

	var News = $resource('https://hacker-news.firebaseio.com/v0/item/:newsId.json');

	this.getNews = function (newsId, callback) {
			News.get({newsId: newsId}, callback);
	};
}

angular
	.module('app')
	.service('NewsService', NewsService);
