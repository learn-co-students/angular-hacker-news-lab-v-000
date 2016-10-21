function TopStories($http){
  var baseUrl = 'https://hacker-news.firebaseio.com/v0/';

  var getStories = function(){
    return $http.get(baseUrl + 'topstories.json', {cache: true})
  }

  var getStory = function(id){
    return $http.get(baseUrl + 'item/' + id + '.json');
  }

  return {
    getStories: getStories,
    getStory: getStory
  }
}
