var PageChanger = {
  restrict: 'E',
  templateUrl: 'views/pagechanger.html',
  controller: function () {
    var ctrl = this
    this.increasePage= function () {
      ctrl.pageNum ++;
      console.log(ctrl.pageNum);
    };
    debugger;
    this.decreasePage= function () {
      ctrl.pageNum --;
      console.log(ctrl.pageNum);
    };
  },
  controllerAs: 'pcCtrl',
  bindings:{
    pageNum: '=',
    i:'@'
  }
}


angular
  .module('app')
  .component('pageChanger', PageChanger)
