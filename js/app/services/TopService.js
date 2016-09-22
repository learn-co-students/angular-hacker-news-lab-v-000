function TopService($http) {
  


  this.getTop = function () {


    $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  }

}