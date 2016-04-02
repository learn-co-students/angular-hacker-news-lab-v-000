angular
  .module('app')
  .controller('ArticleController', function(item){
    this.post = item.data;
  });
