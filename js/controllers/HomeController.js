function HomeController() {
  var ctrl = this;

  ctrl.name ='Kerry'

}

HomeController.$inject = ['$scope']

angular
  .module('app')
  .controller('HomeController', HomeController);