function MyPagination() {
  return function(posts, pageNum){
    let endPost = pageNum * 30
    let startPost = endPost - 30
    return posts.slice(startPost, endPost)
  }
}

angular
  .module('app')
  .filter('myPagination', MyPagination)
