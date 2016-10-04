function HomeController(PostFactory, posts) {
    vm = this;
    vm.data = posts

    setPosts(vm.data);

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
            pageId = 1;
            getPost(data[i]).then(function(data) {
                post = data
                post.pageId = pageId;
                posts.push(post);
                pageId++
            });
        }
        return vm.posts = posts;
    }
}

angular
    .module('app')
    .controller('HomeController', HomeController)
