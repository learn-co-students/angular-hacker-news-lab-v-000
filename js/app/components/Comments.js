var comments = {


  bindings: {
   data: '@', 
   commentdata: '@'
  }, 
  transclude: true, 
  controller: function(TopService) {
  
    var comment = []
    
   TopService.getPost(this.data).then(function(resp){

     comment.push(resp.data)
     return commentdata
  
   })

   this.commentdata = comment
   



  //  this.getComment = function(id) {
  //   var newData = []
  //   TopService.getPost(id).then(function(resp){
  //   commentdata.push(resp.data)
  //   debugger

  //     })
  // }
  //   // if (commentdata[commentdata.length - 1].kids.length > 0) {
  //   //   commentdata[commentdata.length-1]["comments"] = []
  //   //   debugger
  //   //   for (i = 0; i < commentdata[commentdata.length - 1].kids.length; i ++) {
  //   //     debugger
  //   //     return this.getComment(commentdata[commentdata.length - 1].kids[i])
  //   //   }
  //   // }

   
  //  if (this.parsedData.kids.length > 0) {

  //   for (i = 0; i < this.parsedData.kids.length; i ++) {
     
  //   this.getComment(this.parsedData.kids[i])
 
  //   }
  //  }
  //  debugger
  
  },
  templateUrl: 'views/stories/comments.html'
}

angular
  .module('app')
  .component('comments', comments)