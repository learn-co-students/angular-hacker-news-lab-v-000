var Item = { //defining an angular component (through setting an object) - Could also use a directive
  templateUrl: 'views/item.html', //sets html template to be used
  bindings: { //define arguments being passed to component - bindings for components, scope for directives
    id: '=' //set id to a variable being passed in, i.e. when used: <item id="post"></item>
  },
  controller: function(PostsService) { //adding functionality to a controller for this component, injecting PostsService dependency
    var ctrl = this;
    //console.log(ctrl.id);

    PostsService
    .getPost(ctrl.id) //use getPost method from PostsService, passing in post id
    .then(function (response) { //after method has completed...
      ctrl.data = response.data; //then set controller data to data recieved
      //console.log(ctrl.data);
    })
  },
  controllerAs: 'item' //sets controller to be refered to as item
};

angular
  .module('app') //within module 'app'
  .component('item', Item); //defining this angular component - lowercase string name because no capitalization in DOM element when this component is used
