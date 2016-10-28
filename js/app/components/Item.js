var Item = {
    templateUrl = 'views/item.html',
    bindings = {
        id: '='
    },
    

}

angular
    .module('app')
    .component('item', Item)
