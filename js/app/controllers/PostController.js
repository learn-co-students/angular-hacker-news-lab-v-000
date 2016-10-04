function PostController(PostFactory, $stateParams) {
    vm = this;

    // Instantiated Info
    getPost();

    // ########## Defined Methods ########## //

    function getPost() {
        return PostFactory.getPost($stateParams.id)
            .then(setPost)
    }

    function setPost(data) {
        vm.post = data;
    }

}

angular
    .module('app')
    .controller('PostController', PostController)
