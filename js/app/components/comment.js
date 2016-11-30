var Comment = {
       bindings: { id: '<id' },
       controller: function(storiesService){
         var vm = this;
         vm.comment = {};
         storiesService.getStory(vm.id).then(function(data) {
           vm.comment = data;
         });
       },
       transclude: true,
       controllerAs: 'vm',
       template:'<div><li>at {{vm.comment.data.time * 1000 | date : "short" : "-5"}} {{vm.comment.data.by}} said...'+
       '<div ng-bind-html="vm.comment.data.text"></div></li>' +
       '<div class="comments__child" ng-repeat="kid in vm.comment.data.kids"><comment id="kid"></comment></div></div>'

}

angular
 .module('app')
 .component('comment', Comment)
