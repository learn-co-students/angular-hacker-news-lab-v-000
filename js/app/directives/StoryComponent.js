var Story = {
  templateUrl: '/js/app/views/post.html',
  bindings: {
    id: '='
  },
  controller: function(TopStoriesService) {
		var ctrl = this;
		TopStoriesService.getStory(this.id).then(function(response){
      ctrl.story = response.data;
    });
	},
	controllerAs: 'story'
};

angular
    .module('app')
    .component('story', Story);
    
