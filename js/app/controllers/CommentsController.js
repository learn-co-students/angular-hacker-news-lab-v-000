function CommentsController(HttpService, DateService, $state, $stateParams) {
  var vm = this;

  vm.comments = {};
  vm.story;
  vm.id = $stateParams.id

  activate();

  function activate(){
    HttpService.getItem(vm.id).then(function(data){ 
      vm.story = data.data;
      vm.story.time = DateService.unixTimeConverter(vm.story.time);
      vm.comments = getComments(vm.story.kids); 
    });
  }

  function getComments(ids) {
    var kids = {};
    for (var i = 0; i < ids.length; i++ ){
      HttpService.getItem(ids[i]).then(function(data){ 
        var comment = data.data;
        kids[comment.id] = comment;
        kids[comment.id]['time'] = DateService.unixTimeConverter(comment.time);
        if (comment.kids != undefined) {
          kids[comment.id]['kids'] = getComments(comment.kids);
        }
      }); 
    }
    return kids;
  }

}

angular
  .module('app')
  .controller('CommentsController', CommentsController)