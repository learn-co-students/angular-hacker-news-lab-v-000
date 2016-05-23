function BasicService($http) {
  var ctrl = this;

  this.topList = function() {
    return $http.get("https://hacker-news.firebaseio.com/v0/topstories.json");
  };
  this.story = function(id) {
    return $http.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json");
  };
  // this.stories = function(list) {
  //   var arr = arr || [];
    // var place = id * 30
    // var newList = list.slice(place, place + 30);
    // var newArr = list.map(function(item) {
    //   ctrl.story(item)
    //     .then(function(res) {
    //       return "text"
    //     });
    // });
    // debugger;
    // return arr;
  // };
}

angular
  .module('app')
  .service('BasicService', BasicService);

