function PaginationFilter(){
  return function(collection, pageNum, pageSize){
    var index = (pageNum * pageSize) - pageSize;
    return collection.slice(index, index + pageSize);
  }
}
