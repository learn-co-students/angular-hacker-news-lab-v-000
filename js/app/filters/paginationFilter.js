function PaginationFilter(){
  return function(collection, pageNum, pageSize){
    var index = (pageNum * pageSize) - pageSize;
    console.log(index);
    return collection.slice(index, index + pageSize);
  }
}
