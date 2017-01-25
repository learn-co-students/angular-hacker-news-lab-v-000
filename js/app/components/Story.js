var Story = {
	bindings: {
		storynb: '='
	},
	templateUrl: 'views/story.html',
	controller: function (NewsService) {
    var ctrl = this;
    // console.log(ctrl.storynb);
    NewsService
      .getNews(ctrl.storynb)
      .then( function (news) {
        // console.log(news.data);
        ctrl.data = news.data;
      });
  },
  controllerAs: 'story'
};

angular
	.module('app')
	.component('story', Story);
