function PostFactory($http) {
    return {
        getPostsIds: getPostsIds,
        getPost: getPost
    }

    // Returns array of posts ids [12627852, 12627693, 12627372, 12628069...]
    function getPostsIds() {
        return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(handleResponse)
            .catch(handleError);
    }

    // Returns a single post Object
    function getPost(id) {
        return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
            .then(handleResponse)
            .catch(handleError);
    }

    function handleResponse(response) {
        console.log(response.data);
        return response.data
    }

    function handleError(error) {
        console.log(error)
    }
}

angular
    .module('app')
    .factory('PostFactory', PostFactory)
