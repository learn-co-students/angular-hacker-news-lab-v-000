angular
      .module('app', ["ui.router"])
      .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            .state("top", {
              url: "/top",
              templateUrl: 'views/topstories.html',
              controller: "TopController as top",
              resolve: {
                        stories: function(apiService){
                          return apiService.getTopStories();
                        }
              }
            })
      })
