angular
    .module('app', ['ui.router', 'ngSanitize'])
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: 'views/topstories.html',
                controller: 'TopController as top',
                resolve: {
                         stories: function(ApiService){
                            return ApiService.getTop()
                         }
                }
            })

            .state('post', {
                url: '/post/:id',
                templateUrl: 'views/post.html',
                controller: 'PostController as post',
                resolve: {
                          post: function($stateParams, ApiService){
                              return ApiService.getPost($stateParams.id)
                          }
                        }
            })


        $urlRouterProvider.otherwise('/top')

    })