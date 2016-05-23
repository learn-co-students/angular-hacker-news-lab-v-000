var Comments = {
  bindings: {
    kids: '='
  },
  template: "Comment: {{ctrl.allComments}}",
  controller: function(BasicService) {
    var ctrl = this;
    this.sing = this.kids[0];
    this.allComments = this.allComments || [];
    this.kids.forEach(function(item) {
      BasicService.story(item)
      .then(function(res) {
        ctrl.allComments.push(res.data);
        // ctrl.singleStory = res.data;
      });
    });
    // BasicService.stories(this.kids)
    //   .then(function(res) {
    //     ctrl.allComments = res.data;
    //   });
  },
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('comments', Comments);