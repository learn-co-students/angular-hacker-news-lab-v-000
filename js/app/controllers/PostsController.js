function PostsContoller(post) {
    var ctrl = this;

    ctrl.post = post.data;

}


angular
    .module('app')
    .controller('PostsContoller', PostsContoller)
