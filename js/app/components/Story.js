var Story = {
	bindings: {
		storyId: '='
	},
	templateUrl: 'views/story.html',
	controller: function () {
    var ctrl = this;
    console.log(this);
  }
};

angular
	.module('app')
	.component('story', Story);
