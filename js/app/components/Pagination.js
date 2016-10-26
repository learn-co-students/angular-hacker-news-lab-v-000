var Pagination = {
	bindings: {
		obj: '='
	},
	controllerAs: 'vm_pag',
	templateUrl: 'views/pagination.html'
};

angular
	.module('app')
	.component('pagination', Pagination);