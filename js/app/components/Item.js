var Item = {
	templateUrl: 'views/item.html',
	bindings: {
		storyid: '='
	},
	controller: function(NewsService) { 
		var ctrl = this;
		
		NewsService
			.getStory(this.storyid)
			.then(function(res) {
				ctrl.data = res.data
			})
	},
	controllerAs: 'item'
}

angular
	.module('app')
	.component('item', Item)