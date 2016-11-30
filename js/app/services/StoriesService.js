var storiesService = function($http, $q) {

  this.getTopStories = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  }

  this.getStory = function(id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json')
  }

  this.getPage = function(page, stories) {
    this.promiseArray = [];
    for (var i = (30 * (page - 1)); i < (30 * page); i++ ) {
      this.promiseArray.push(this.getStory(stories[i]));
    }
    return $q.all(this.promiseArray)
  }
}



angular
  .module('app')
  .service('storiesService', storiesService)
