function TopController(TopService) {
  var top = this
  top.ids = []
  top.stories = []
  top.counter = 30



  this.load = function() {
   
  TopService.getTop().then(function(posts){

    for (i = top.counter-30; i < top.counter; i ++) {
   
      top.ids.push(posts.data[i])
      
    }
  
   for (i = 0; i < top.ids.length; i ++) {

  TopService.getPost(top.ids[i]).then(function(post){

     top.stories.push(post.data)
    
   })
 }})
}

  this.nextPage = function() {
   
    top.counter = top.counter + 30
    top.ids = []
    top.stories = []
    this.load()
  }
  this.load()
}

angular 
  .module('app')
  .controller('TopController', TopController) 