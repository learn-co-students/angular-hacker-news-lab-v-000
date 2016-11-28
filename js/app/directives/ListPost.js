var ListPost = {
    bindings: {
      id: '='
    },
    
    controller: function (TopNewsService) {
      var ctrl = this;
      TopNewsService
        .getStories(this.id)
        .then(function (response) {
          ctrl.post = response.data;
            console.log(ctrl.post);
        });

    },
    templateUrl: 'js/app/views/post.html',
    controllerAs: 'list'


}

angular
  .module('app')
  .component('listPost', ListPost);
