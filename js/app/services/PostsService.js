var api_url = 'https://hacker-news.firebaseio.com/v0'

function PostsService($http) {
  this.getTopStories = function () {
    return $http.get(api_url + '/topstories.json');
    console.log('getting top stories');
  };
  
  this.getPost = function (id) {
    return $http.get(api_url + '/item/' + id + '.json');
    console.log('getting post');
  };
}

app.service('PostsService', PostsService);
