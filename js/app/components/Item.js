var Item = {
	bindings: {
		obj: '='
	},
	templateUrl: 'views/item.html',
	controllerAs: 'vm_item',
	controller: 'ItemController'
};

angular
	.module('app')
	.component('item', Item);