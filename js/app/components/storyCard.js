var StoryCard = {
  bindings: {
    storyid: '='
  },
  template: [
    "<div class='post'>",
      "<a class='post__title' href='{{ctrl.story.url}}'>{{ctrl.story.title}}</a>", 
        "<h6>by {{ctrl.story.by}}</h6>",
      "<a class='post__description' href='#' ui-sref='post({id: ctrl.story.id})'>{{ctrl.story.score}} points | {{ctrl.story.descendants}} comments</a>",
    "</div>"
  ].join(''),
  controller: function (storyService){
    var ctrl = this;

    storyService.getSingleStory(ctrl.storyid).then(function(resp){
        ctrl.story = resp.data;
      }
    );

  },
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('storyCard', StoryCard);

  // This story's id is 11844171

// {"data":{"by":"vmorgulis","descendants":0,"id":11844171,"score":35,"time":1465177850,
// "title":"WAVM: standalone WebAssembly VM prototype","type":"story",
// "url":"https://github.com/AndrewScheidecker/WAVM"},"status":200,
// "config":{"method":"GET","transformRequest":[null],"transformResponse":[null],
// "url":"https://hacker-news.firebaseio.com/v0/item/11844171.json","headers":
// {"Accept":"application/json, text/plain, */*"}},"statusText":"OK"}

// Each top story should have it's URL 
// displayed along with the amount of comments 
// and the score.