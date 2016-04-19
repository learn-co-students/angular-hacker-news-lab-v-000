var Comment = {
  templateUrl: '/js/app/views/comment.html',
  bindings: {
    id: '='
  },
  controller: function(TopStoriesService) {
    var ctrl = this;
		TopStoriesService.getStory(this.id).then(function(response){
      ctrl.comment = response.data;
    });
	},
	controllerAs: 'comment'
};

angular
    .module('app')
    .component('comment', Comment);
    
