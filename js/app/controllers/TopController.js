function TopController(TopService) {
  var top = this
  top.ids = []
  top.stories = []
  top.counter = 30




  TopService.getTop().then(function(posts){

    for (i = 0; i < top.counter; i ++) {
   
      top.ids.push(posts.data[i])
      
    }
  
   for (i = 0; i < top.ids.length; i ++) {

  TopService.getPost(top.ids[i]).then(function(post){

     top.stories.push(post.data)
    
   })
 }})

}

angular 
  .module('app')
  .controller('TopController', TopController) 