var Item = {
	templateUrl: 'views/item.html',
	bindings: {
		id: '='
	},
	controller: function (PostsService) {
		var ctrl = this;

		console.log('hey'); //30 times

		PostsService
			.getPost(this.id)
			.then(function (res) {
				ctrl.data = res.data;
			})
	},
	controllerAs: 'item'
};

angular
	.module('app')
	.component('item', Item);
