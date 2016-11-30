var Post = {
       bindings: { story: '<story' },
       controller: function($scope, storiesService){
       },
       controllerAs: 'vm',
       template:
       '<h2 class="post__title header">{{vm.story.data.title}}</h2>' +
       '<a href="{{vm.story.data.url}}">Link to story...</a>' +
       '<div class="comments" ng-repeat="kid in vm.story.data.kids"><comment class="comments" id="kid"></comment></div>'
}

angular
 .module('app')
 .component('post', Post)
