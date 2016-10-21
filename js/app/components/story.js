var Story = {
  bindings: { id: '=' },
  controller: function (TopStories) {
		var ctrl = this;

		TopStories
			.getStory(this.id)
			.then(function (response) {
				ctrl.data = response.data;
			})
	},
  controllerAs: 'story',
	templateUrl: 'views/story.html'
};
