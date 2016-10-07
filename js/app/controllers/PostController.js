function PostController(post) {
  this.data = post.data;
}

app.controller('PostController', PostController)
