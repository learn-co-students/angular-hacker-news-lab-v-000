var comment = {
  bindings: {
    id: '='
  },
  templateUrl: 'views/commentTemplate.html',
  controller: function(PostService){
    var ctrl = this;
    PostService.getPost(ctrl.id).then(function(data){
      ctrl.comment = data.data;
    });
  },
  controllerAs: 'comCtrl'
}

angular
  .module('app')
  .component('comment', comment)

