angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
          .state('top-stories', {
              url: '/top-stories',
              templateUrl: 'views/top-stories.html',
              controller: 'TopStoriesController as topStories',
              resolve: {
                  topStories: function ($stateParams, PostService) {
                    return PostSevice.getTopStories());
                  }
              }
          })
          .state('post', {
              url: '/post/:id',
              templateUrl: 'views/post.html',
              controller: 'PostController as post',
              resolve: { // use the resolve instead of putting this in the controller so that the page doesnt have to replace the data in the controlelr causing the page to flicker
                  post: function (PostService) {
                      return PostSevice.getPost($stateParams.id);
                  }
              }
          });
});
