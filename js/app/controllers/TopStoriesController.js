function TopStoriesController(stories, StoriesService) {
    var top = this;
    top.topStoriesIDs = stories.data;
    top.thisPageIDs = [];
    top.thisPage = [];
    top.counter = 1;

    top.navigate = function(which) {
      if (which === 'next') {
        top.counter += 30;
      } else {
        top.counter -= 30;
      }

      top.thisPage = [];
      loadPage(top.counter, top.counter + 30);
    };

    function loadPage(start, end) {
      top.thisPageIDs = top.topStoriesIDs.slice(start,end);
      top.thisPageIDs.forEach(function(id, index) {
        StoriesService.getStoryByID(id).then(function(res) {
          var data = res.data;
          data.rank = index;
          top.thisPage.push(data);
        });
      });
    };

    loadPage(0, 30);
}

angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);
