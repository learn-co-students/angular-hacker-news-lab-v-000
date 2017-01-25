var Comment = {
	bindings: {
		commentnb: '='
	},
	templateUrl: 'views/comment.html',
	controller: function (NewsService) {
    var ctrl = this;
    // console.log(ctrl.commentnb);
    NewsService
      .getNews(ctrl.commentnb)
      .then( function (comment) {
        console.log(comment.data);
        ctrl.data = comment.data;
      });
  },
  controllerAs: 'comment'
};

angular
	.module('app')
	.component('comment', Comment);
