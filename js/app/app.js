angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('top', {
                url: '/top',  //localhost:8080/#/top
                templateUrl: 'views/top.html',
                controller: 'NewsCtrl as vm',
                resolve: {
                  newsList: function (NewsService) {
                      return NewsService.getNewsId();
                  }
                }
            })
            .state('post', {
              url: '/post/:id', //localhost:8080/#/post/{id}
              templateUrl: 'views/post.html',
              controller: 'PostCtrl as post',
              resolve: {
                  postData: function ($stateParams, newsService) {
                    console.log('hello');
                    console.log($stateParams.id);
                    return UserService.getNews($stateParams.id);
                  }
              }
            })
    });

// angular
//     .module('app', ['ui.router'])
//     .config(function ($stateProvider) {
//       $stateProvider
//         .state('top', {
//           url: 'top',
//           templateUrl: 'views/top.html'
          // controller: 'NewsCtrl'// as news' ,
          // resolve: {
              //
              // newsList: function (NewsService) {
              //     return NewsService.getNewsId();
              // }
            //   NewsService
            //     .getNewsId()
            //     .then(function (res) {
            //       ctrl.stories = res.data;
            //       console.log(ctrl.stories);
            //     });
          // }
  //       });
  //
  // });
