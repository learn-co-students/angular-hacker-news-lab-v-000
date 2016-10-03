function HomeController(PostFactory) {
    vm = this;

    vm.getPostsIds = getPostsIds;

    // Instantiated Info
    activate();


    // Defined Methods
    function activate() {
        getPostsIds()
    }

    function getPostsIds() {
        return PostFactory.getPostsIds()
            .then(setPosts)
    }

    function getPost(id) {
        return PostFactory.getPost(id)
    }

    function setPosts(data) {
        var posts = [];
        var post;
        for (var i = 0; i < data.length; i++) {
            getPost(data[i]).then(function(data) {
                post = data
                posts.push(post);
            });
        }
        return vm.posts = posts;
    }
}

angular
    .module('app')
    .controller('HomeController', HomeController)
