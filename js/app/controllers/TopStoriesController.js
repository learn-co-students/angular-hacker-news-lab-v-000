function TopStoriesController(posts) {
    var ctrl = this;

    ctrl.page = 0;
    var postsPerPage = 30;
    ctrl.totalPosts = posts.data.length;
    ctrl.totalPages = Math.ceil(ctrl.totalPosts / postsPerPage);

    ctrl.getStories = function() {
        ctrl.posts = posts.data.slice(ctrl.page * postsPerPage, (ctrl.page + 1) * postsPerPage);
    };

    ctrl.nextPage = function() {
        ctrl.page++;
        ctrl.getStories()
    };

    ctrl.previousPage = function() {
        ctrl.page--;
        ctrl.getStories()
    };

    ctrl.getStories();
};


angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);
