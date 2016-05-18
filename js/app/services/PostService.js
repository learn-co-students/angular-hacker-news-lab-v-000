function PostService ($http) {

}

PostService.$inject = ['$http'];

angular
  .module('app')
  .service('PostService', PostService);