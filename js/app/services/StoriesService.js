function StoriesService($http) {
    this.getTopStoriesIDs = function() {
        return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    }
}

angular
    .module('app')
    .service('StoriesService', StoriesService);