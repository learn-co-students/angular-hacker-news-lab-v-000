var CommentCard = {
  bindings: {
    commentid: '='
  },
  templateUrl: 'templates/comments.html',
  controller: function (storyService){
    var ctrl = this;

    storyService.getComment(ctrl.commentid).then(function(resp){
        ctrl.comment = resp.data;
      }
    );

  },
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('commentCard', CommentCard);

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