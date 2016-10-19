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

  function getStory(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
      .then(handleResponse)
      .catch(handleError);

    function handleResponse(response){
      return response.data;
    }

    function handleError(error){
      console.log(error);
    }
  }

  return {
    getStories: getStories,
    getStory: getStory
  }
}

angular
  .module('app')
  .factory('TopStories', TopStories);
