function CommentsController(HttpService, $state, $stateParams) {
  var vm = this;

  vm.comments;
  vm.story;
  vm.id = $stateParams.id

  activate();

  vm.getComments = function(ids){
    for (var i = 0; i < ids.length; i++ ){
      HttpService.getComment(ids[i]).then(function(data){ 
        vm.comments.push(data.data)
      });  
    }
  }

  function activate(){
    HttpService.getStory($stateParams.id).then(function(data){ 
      return vm.story = data.data;
    });
  }

  // vm.getComments(vm.story.kids);


}

angular
  .module('app')
  .controller('CommentsController', CommentsController)