function PostController(post) {
    vm = this;
    vm.post = post;
}

angular
    .module('app')
    .controller('PostController', PostController)
