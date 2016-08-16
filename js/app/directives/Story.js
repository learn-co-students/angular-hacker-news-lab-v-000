(function() {
  'use strict';

  angular
    .module('app')
    .directive('story', story);

  story.$inject = ['TopStoriesService', 'getHoursAgoFilter', 'getDomainFromUrlFilter', 'getNumCommentsFilter'];
  function story(TopStoriesService, getHoursAgoFilter, getDomainFromUrlFilter, getNumCommentsFilter) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
        bindToController: true,
        controller: StoryDirectiveController,
        controllerAs: 'vm',
        link: link,
        templateUrl: 'views/story.html',
        restrict: 'E',
        scope: {
          id: '=id'
        }
    };
    return directive;
    
    function link(scope, element, attrs) {
      var hideLink = element[0].querySelector('.hide');

      hideLink.addEventListener('click', function(event){
        element.parent().remove();
      });

      scope.$on('$destroy', function(){
        element.off();
      });
    }
  }
  /* @ngInject */
  function StoryDirectiveController (TopStoriesService, getHoursAgoFilter, getDomainFromUrlFilter, getNumCommentsFilter) {
    var vm = this;

    TopStoriesService
      .getStory(vm.id)
      .then(function(res){
        vm.story = res.data;
        vm.title = vm.story.title;
        vm.url = vm.story.url;
        if(!vm.url) {
          vm.url = 'https://news.ycombinator.com/item?id=' + vm.story.id;
        }
        vm.domain = getDomainFromUrlFilter(vm.url);
        vm.score = vm.story.score;
        vm.author = vm.story.by;
        vm.time = getHoursAgoFilter(vm.story.time);
        vm.numComments = getNumCommentsFilter(vm.story.kids);
      })
  }
})();