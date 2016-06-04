function TopController(stories, $scope){
    var postIds = stories.data
    this.totPages = Math.ceil(postIds.length/30)
    this.pgNumber = 0

    this.makePage = function(){
          var start=this.pgNumber*5
          var selection= start + 5
          this.thisPage = postIds.slice(start, selection)  
    }
    

    this.nextPage = function(){
      this.pgNumber ++
      this.makePage()
    }

    this.prevPage = function(){
      this.pgNumber --
      this.makePage()
    }

    this.makePage()

    $scope.$watch(function (){
        return this.pgNumber
    })


}

angular
    .module('app')
    .controller('TopController', TopController)