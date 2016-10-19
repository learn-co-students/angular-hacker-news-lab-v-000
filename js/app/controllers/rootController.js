function RootController(TopStories){
  var ctrl = this;
  getStories();
  // getStory(1273640);









  function getStories(){
    return TopStories.getStories()
      .then(function(data){
        return ctrl.stories = data;
      });
  }

  function getStory(id){
    return TopStories.getStory(id)
      .then(function(data){
        console.log(data);
        return ctrl.story = data;
      });
  }
}

angular
  .module('app')
  .controller('rootController', RootController);
