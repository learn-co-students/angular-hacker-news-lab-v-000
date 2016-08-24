function StoriesController(index, StoriesService) {
    var ctrl = this;
    var idx = 0;
    
    ctrl.index = index.data;

    ctrl.stories = [];

    this.next = function () {
        idx += 30;
        if (idx >= ctrl.index.length - 30) {
            idx = 0;
        }
        this.getStories();
    };

    this.previous = function() {
        idx -= 30;
        if (idx < 0) {
            idx = 0;
        }
        this.getStories();
    }

    this.getStories = function() {
        ctrl.stories = [];
        for (var i = idx; i < idx + 30; i++) {
            StoriesService
                .getStory(ctrl.index[i])
                .then(function(res) {
                    ctrl.stories.push(res.data)
                })
        }
    }

    this.getStories();
}
 
angular
    .module('app')
    .controller('StoriesController', StoriesController);