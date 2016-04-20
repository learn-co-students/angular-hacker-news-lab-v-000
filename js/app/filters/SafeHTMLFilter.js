function SafeHTMLFilter($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
};

SafeHTMLFilter.$inject = ['$sce'];

angular
  .module('app')
  .filter('safeHTMLFilter', SafeHTMLFilter);
  
