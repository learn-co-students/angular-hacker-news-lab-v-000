function StoryController(story) {
  var ctrl = this;

  //         { by:"pg",
  //  descendants:15,
  //           id:1,
  //         kids: Array[5],
  //        score:61,
  //         time:1160418111,
  //        title:"Y Combinator",
  //         type:"story",
  //          url:"http://ycombinator.com"
  //        }

  ctrl.data = story.data;
  debugger;
}

angular
  .module('app')
  .controller('StoryController', StoryController);
