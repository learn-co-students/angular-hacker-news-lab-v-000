angular
  .module('app')
  .controller('NewsController', function(news){
    this.stories = news.data;

    var ctrl = this;
    this.currentPage = 0;

    this.nextPage = function(){
      ctrl.currentPage++;
      ctrl.page();
    };

    this.previousPage = function(){
      ctrl.currentPage--;
      ctrl.page();
    };

    this.page = function(){
      var pg = ctrl.currentPage * 30;
      return this.stories.slice(pg, pg + 30);
    };

    this.page();
  });
