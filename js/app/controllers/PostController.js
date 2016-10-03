function PostController() {
    vm = this;

    vm.name = "Adrian is in the house"

    getPost()

    function getPost() {

    }
}

angular
    .module('app')
    .controller('PostController', PostController)
