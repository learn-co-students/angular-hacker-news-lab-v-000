function TopStoriesController(PostService){

  this.posts = [{
    by: "NickSharp",
    descendants: 17,
    id: 11641602,
    kids: [
    11641742,
    11641726,
    11641715,
    11641786,
    11641723,
    11641773
    ],
    score: 29,
    time: 1462507244,
    title: "Results from Candy Japan box design A/B test",
    type: "story",
    url: "https://www.candyjapan.com/results-from-box-design-ab-test"
  }
  ]

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)