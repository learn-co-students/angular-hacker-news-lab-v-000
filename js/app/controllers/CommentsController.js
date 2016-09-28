function CommentsController(HttpService, $state, $stateParams) {
  var vm = this;

  vm.comments = {};
  vm.story;
  vm.id = $stateParams.id

  activate();

  
  function activate(){
    HttpService.getItem($stateParams.id).then(function(data){ 
      vm.story = data.data;
      getComments(vm.story.kids);
    });
  }

  function getComments(ids){
    for (var i = 0; i < ids.length; i++ ){
      HttpService.getItem(ids[i]).then(function(data){ 
        var comment = data.data;
        vm.comments[comment.id] = comment;
        if (comment.kids){
          getComments(comment.kids);
        }
      }); 
    }
  }


}

angular
  .module('app')
  .controller('CommentsController', CommentsController)