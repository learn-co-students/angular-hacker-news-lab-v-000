function pageFilter() {
  return function(arr, page) {
    var view = page*30;
    return arr.slice(view - 30, view);
  };
}


angular
  .module('app')
  .filter('pageFilter', pageFilter)
