angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('top', {
                url: '/top',  //localhost:8080/#/top
                templateUrl: 'views/top.html',
                controller: 'NewsCtrl as news',
                resolve: {
                  newsList: function (NewsService) {
                      return NewsService.getNewsId();
                  }
                }
            });
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
