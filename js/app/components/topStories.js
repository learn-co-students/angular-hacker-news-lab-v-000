 var TopStories = {
        bindings: { stories: '<stories' },
        controller: function($scope, storiesService){
          this.page = 1;
          this.pageData = storiesService.getPage(this.page, this.stories.data)
          debugger
        },
        template: '<div><h2>Top Stories</h2>{{$ctrl.page}}-{{$ctrl.pageData}}<div ng-repeat="story in $ctrl.storyList"></div></div>'
}

angular
  .module('app')
  .component('topStories', TopStories)
