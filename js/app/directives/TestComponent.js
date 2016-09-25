var TestComponent = {
  template: '<div> {{ctrl.data}} </div>',
  controllerAs: "ctrl",
  bindings: {
    data: '='
  }
}

angular
  .module('app')
  .component('testComponent', TestComponent);