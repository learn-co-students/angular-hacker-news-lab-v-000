var Comment = {
  bindings: {
    comment:  '=',
    // title:   '=', 
    // url:     '=', 
    // score:   '=', 
    // replies: '='  
  },
  template: [
    '<div>',
      '<h4>Comment</h4>',
      '{{post.comment}}',
      // '<label>Title: </label>',
      // '{{comment.title}}',
      // '<label>URL: </label>',
      // '{{comment.url}}',
      // '<label>score = </label>',
      // '{{comment.score}}',
      // '<label>Replies: </label>',
      // '{{comment.replies}}',
    '</div>'
  ].join('');
}

angular
  .module('app')
  .component('Comment', Comment);