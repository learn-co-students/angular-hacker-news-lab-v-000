 var TopStories = {
        bindings: { stories: '<stories' },
        controller: function($scope, storiesService){
          var vm = this;
          vm.page = 1;
          vm.storyArray = []
          storiesService.getPage(vm.page, vm.stories.data).then(function(data) {
            vm.storyArray = data
          });

          vm.nextPage = function(page) {
            if ((vm.page * 30) < vm.stories.data.length) {
              vm.page++
              storiesService.getPage(vm.page, vm.stories.data).then(function(data) {
                vm.storyArray = data;
              });
            }
          }

          vm.previousPage = function(page) {
            if (vm.page > 1) {
              vm.page--
              storiesService.getPage(vm.page, vm.stories.data).then(function(data) {
                vm.storyArray = data;
              });
            }
          }
        },
        controllerAs: 'vm',
        template:
        '<ol><span class="item" ng-repeat="story in vm.storyArray"><li><a class="item__title" href={{story.data.url}}>{{story.data.title}}</a></li>'+
        '<div><a class="item__description" ui-sref="post({id:story.data.id})">{{story.data.score}} points by {{story.data.by}} | {{story.data.kids.length}} comments</a></div></span></ol>' +
        '</br>Page {{vm.page}}' +
        '<p class="pagination"><a href="" ng-click="vm.nextPage(vm.page)">Next</a> '+
        '<a href="" ng-click="vm.previousPage(vm.page)">Previous</a></p>'
}

angular
  .module('app')
  .component('topStories', TopStories)
