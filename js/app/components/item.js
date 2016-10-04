var Item = {
    templateUrl: 'views/item.html',
    bindings: {
        id: '='
    },
    controller: function(PostFactory) {
        var vm = this;

        PostFactory
            .getPost(this.id)
            .then(function(data) {
                vm.data = data;
            })
    },
    controllerAs: 'item'
};

angular
    .module('app')
    .component('item', Item);
