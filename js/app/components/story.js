var story = {
  templateUrl: 'views/storyTemplate.html',
  bindings: {
    id: '=',
  },
  transclude: true,
  controller: function(PostService){
    var ctrl = this;
    PostService.getPost(ctrl.id).then(function(data){
      ctrl.story = data.data;
    });
  },
  controllerAs: 'topComp'
};

angular
  .module('app')
  .component('story', story);
