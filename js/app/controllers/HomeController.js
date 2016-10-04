function HomeController(PostFactory) {
    vm = this;

    // Instantiated Info
    activate();

    // ########## Defined Methods ########## //

    // Initiates App
    function activate() {
        getPosts()
    }

    // Fetches Post Ids Using PostFactory.getPostsIds()
    function getPosts() {
        return PostFactory.getPostsIds()
            .then(setPosts)
    }

    // Returns Individual Post Object Promise using PostFactory.getPost()
    function getPost(id) {
        return PostFactory.getPost(id)
    }

    // Iterates over PostsIds array fetches Post Objects and
    // Add them to vm.posts
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
