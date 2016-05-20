var Story = {
  bindings: {
    id: '='
  },
  templateUrl: 'views/story.html',
  controller: function(PostService){
    var ctrl = this;
    PostService.getPost(this.id).then(function (resp){
        ctrl.data = resp.data;
    });
  },
  controllerAs: 'story'
};

angular
  .module('app')
  .component('story', Story);
