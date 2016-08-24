function StoryController(story, StoriesService) {
    var ctrl = this;

    ctrl.story = story.data;

}
 
angular
    .module('app')
    .controller('StoryController', StoryController);