function TopStories($http){

  function getStories(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(handleResponse)
      .catch(handleError);

    function handleResponse(response) {
      return response.data;
    }

    function handleError(error) {
      console.log(error);
    }
  }

  return { getStories: getStories }
}

angular
  .module('app')
  .factory('TopStories', TopStories);
