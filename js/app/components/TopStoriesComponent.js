var topStoriesComponent = {
  templateUrl: 'views/storyTemplate.html',
  bindings: {
    id: '='
  },
  controller: function(PostService){
    var ctrl = this;
    PostService.getPost(ctrl.id).then(function(data){
      ctrl.story = data;
    });
  },
  controllerAs: 'topComp'
};

angular
  .module('app')
  .component('topStoriesComponent', topStoriesComponent);
