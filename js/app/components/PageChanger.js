var PageChanger = {
  restrict: 'E',
  templateUrl: 'views/pagechanger.html',
  controller: 'StoriesController'
  controllerAs: 'pcCtrl'
}


angular
  .module('app')
  .component('pageChanger', PageChanger)
