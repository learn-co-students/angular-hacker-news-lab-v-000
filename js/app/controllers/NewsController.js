angular
  .module('app')
  .controller('NewsController', function(news){
    this.stories = news.data;
  });
