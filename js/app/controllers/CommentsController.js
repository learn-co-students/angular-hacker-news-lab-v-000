function CommentsController(HttpService, $state, $stateParams) {
  var vm = this;

  vm.comments = [];
  vm.story;
  vm.id = $stateParams.id

  activate();

  
  function activate(){
    HttpService.getStory($stateParams.id).then(function(data){ 
      vm.story = data.data;
      getComments(vm.story.kids);
    });
  }

  function getComments(ids){
    for (var i = 0; i < ids.length; i++ ){
      HttpService.getComment(ids[i]).then(function(data){ 
        debugger
        vm.comments.push(data.data)
      });  
    }
  }


}

angular
  .module('app')
  .controller('CommentsController', CommentsController)