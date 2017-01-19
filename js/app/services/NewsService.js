function NewsService($http) {
	this.getNewsId = function() {
		return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
	}

	// var News = $resource('https://hacker-news.firebaseio.com/v0/item/:newsId' + '.json');

	this.getNews = function (newsId) {
		var newsUrl = 'https://hacker-news.firebaseio.com/v0/item/'+ newsId + '.json'
		console.log(newsUrl);
		return $http.get(newsUrl);
	};
}

angular
	.module('app')
	.service('NewsService', NewsService);
