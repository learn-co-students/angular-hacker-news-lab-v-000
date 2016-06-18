var Item = {
	templateUrl: 'views/item.html',
	bindings: {
		id: '='
	},
	controller: function (NewsService) {
		var ctrl = this;

		NewsService
			.getStory(this.id)
			.then(function (res) {
				ctrl.data = res.data;
			})
	},
	controllerAs: 'item'
};

angular
	.module('app')
	.component('item', Item);
