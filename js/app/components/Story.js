angular
  .module('app')
  .component('story', Story);

var Story = {
  templateUrl: 'views/story.html',
	bindings: {
		id: '='
	},
	controller: function(PostsService) {
		var ctrl = this;

		PostsService
			.getPost(this.id)
			.then(function (res) {
				ctrl.data = res.data;
			})
	},
	controllerAs: 'story'
};
