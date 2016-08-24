// function CommentController() {

// };

var Comment =  {

    template: [
        "<ng-bind-html ng-bind-html='comment.info.text'></ng-bind-html>",
        "<ul>",
        "<li ng-repeat='id in comment.info.kids'><comment id='id'></comment></li>",
        "</ul>"
    ].join(''),

    bindings: {
        id: '='
    },

    controller: function ($scope, StoriesService) {
        var ctrl = this;
        ctrl.info = {};
        StoriesService
            .getStory(ctrl.id)
            .then(function (res) {
                ctrl.info = res.data;
            })

    },
    controllerAs: 'comment'
};
 
angular
    .module('app')
    .component('comment', Comment);