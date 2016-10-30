function NewsController(news) {
  var vm        = this;
  vm.posts      = news;
  // used for pagination
  vm.page       = 1;
  vm.numRecords = 30;

  vm.next    = function(){
    vm.page = vm.page + 1;
  };

  vm.back    = function(){
    vm.page = vm.page - 1;
  };
}

angular
  .module('app')
  .controller('NewsController', NewsController);