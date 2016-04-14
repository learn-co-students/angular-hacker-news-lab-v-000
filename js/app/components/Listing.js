var Listing = {
  templateUrl: 'js/app/views/listing.html',
  bindings: {
    id: '='
  },
  controllerAs: 'listing',
  controller: function(StoryService){
    var ctrl = this;
    StoryService.getStory(ctrl.id).then(function(response){ctrl.story = response.data});
  }
}

angular
  .module('app')
  .component('listing', Listing);