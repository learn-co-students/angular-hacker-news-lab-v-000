function ResultFilter() {
  return function(input, start) {
    start = +start;
    return input.splice(start);
  };
}

angular
  .module('app')
  .filter('ResultFilter', ResultFilter)
