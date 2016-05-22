function BasicService($http) {
  this.topList = function() {
    return $http.get("https://hacker-news.firebaseio.com/v0/topstories.json");
  };
  this.story = function(id) {
    return $http.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json");
  };
  // this.stories = function(id, list) {
  //   var arr = [];
  //   var place = id * 30
  //   var newList = list.slice(place, place + 30);
  //   newlist.forEach(function(item) {
  //     this.story(item)
  //       .then(function(res) {
  //         arr.push(res.data);
  //       });
  //   });
  // };
}

angular
  .module('app')
  .service('BasicService', BasicService);

