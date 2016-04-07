var Item = {
  templateUrl:'js/app/views/item.html',
  
  bindings:{
    id:'='
  },
  
  controller: function(StoriesService){
    var ctrl = this;
    
    StoriesService.getPost(ctrl.id)
    .then(function(resp){
      ctrl.post = resp.data;
    });
  },
  controllerAs:'item'
}

angular
  .module('app')
  .component('item',Item);