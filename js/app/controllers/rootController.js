function RootController(TopStories){
  var ctrl = this;
  getStories();

  function getStories(){
    return TopStories.getStories()
      .then(function(data){
        // console.log(data); // this logs the data
        return ctrl.stories = data;
      });

  }

  console.log(ctrl.stories); // this logs undefined because it getStories is not finished running.

}

angular
  .module('app')
  .controller('rootController', RootController);
