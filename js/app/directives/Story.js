(function() {
'use strict';

angular 
  .module('app')
  .directive('story', story);
    
  story.$inject = ['TopStoriesService', 'getTimeFilter', 'getDomainUrlFilter'];
  function story(TopStoriesService, getTimeFilter, getDomainUrlFilter) {

    var directive = {

      bindToController: true,
      controller: StoryDirectiveController,
      controllerAs: 'vm',
      templateUrl: 'views/story.html',
      link: link,
      restrict: 'E',
      scope: {
        id: '=id'
      }
    };
    return directive;
    function link(scope, element, attrs) {
    }
  }
  
  function StoryDirectiveController(TopStoriesService, getTimeFilter, getDomainUrlFilter) {
    var vm = this;

    TopStoriesService
      .getStory(vm.id)
      .then(function(res) {
        vm.story = res.data;
        vm.title = vm.story.title;
        vm.url = vm.story.url;
        if(!vm.url) {
          vm.url = 'https://news.ycombinator.com/item?id=' + vm.story.id;
        }
        vm.domain = getDomainUrlFilter(vm.url);
        vm.score = vm.story.score;
        vm.author = vm.story.by;
        vm.time = getTimeFilter(vm.story.time);
        vm.commentsCount = vm.story.descendants;

      })
  }
})(); 
