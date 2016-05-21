var Story = {
  bindings: {
    id: '='
  },
  templateUrl: 'views/story.html',
  controller: function(PostService){
    var ctrl = this;
    PostService.getPost(this.id).then(function (resp){
        ctrl.data = resp.data;
        ctrl.timeDifference = Math.round( ((Date.now()/1000.0) - ctrl.data.time)*1000 );
        ctrl.shortUrl = ctrl.data.url.match(/([\w]+)\:\/\/([\w\.]+)(\/?.*)?/)[2];
    });
  },
  controllerAs: 'story'
};

angular
  .module('app')
  .component('story', Story);
