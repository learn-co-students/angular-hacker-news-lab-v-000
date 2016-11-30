var storiesService = function($http) {

  this.getTopStories = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  }

  this.getStory = function(id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json').then(function(response){ return response.data })
  }

  this.getPage = function(page, stories) {
    this.pageArray = [];
    for (var i = (30 * (page - 1)); i < (30 * page); i++ ) {
      this.pageArray.push(this.getStory(stories[i]).then(function(data) {
        return data;
      }))
    }
    debugger
  }
}

angular
  .module('app')
  .service('storiesService', storiesService)
