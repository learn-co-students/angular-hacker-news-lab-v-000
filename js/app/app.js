angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
          .state('top', {
              url: '/top',
              templateUrl: 'views/top-stories.html',
              controller: 'TopStoriesController as topStories',
              resolve: {
                  topStories: function (PostService) {
                    return PostService.getTopStories();
                  }
              }
          })
          .state('post', {
              url: '/post/:id',
              templateUrl: 'views/post.html',
              controller: 'PostController as post',
              resolve: { // use the resolve instead of putting this in the controller so that the page doesnt have to replace the data in the controlelr causing the page to flicker
                  post: function ($stateParams, PostService) {
                      return PostService.getPost($stateParams.id);
                  }
              }
          });
});
