angular
  .module('app', ['ui.router', 'ngResource', 'ngSanitize'])
  .config(function ($stateProvider) {
    $stateProvider
      .state("index", {
        url: "",
        template: "<h1>Index</h1>"
      })
      .state("top", {
        url: "/top",
        templateUrl: 'js/app/views/top.html',
        controller: 'TopStoriesController'
      })
      .state("post", {
        url: "/post/:id",
        templateUrl: 'js/app/views/postDetails.html',
        controller: 'PostsController'
      })
  });


