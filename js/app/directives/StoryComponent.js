var Story = {
  templateUrl: 'views/post.html'
  bindings: {
    id: '='
  },
  controller: function(TopStoriesService) {
		var ctrl = this;
		return TopStoriesService.getStory(this.id);
	},
	controllerAs: 'story'
};

angular
    .module('app')
    .component('story', Story);
    
