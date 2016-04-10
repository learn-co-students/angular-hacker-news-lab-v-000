function displayNews() {
	return {
		restrict: 'E',
		controller: function(ApiService){
			var ctrl = this;
			ctrl.storyIds = [];
			ctrl.pages = [];
			ctrl.currentPage = 0;
			ctrl.storiesPerPage = 30;
			ctrl.displayStories = {start: 0, end: ctrl.storiesPerPage};

			ctrl.isActive = function(pageIndex) {
				return (ctrl.currentPage == pageIndex);
			};

			ctrl.setPage = function(pageIndex){
				ctrl.currentPage = pageIndex;
				ctrl.stories = ctrl.pages[ctrl.currentPage]
			};

			ctrl.generatePages = function(){
				ctrl.pages = [];
				for(var start = 0, end = ctrl.storiesPerPage; start < ctrl.storyIds.length; end += ctrl.storiesPerPage){
					var page = ctrl.storyIds.slice(start, end);
					ctrl.pages.push(page);
					start = end;
				}
			};

			ctrl.stories = [];

			ctrl.fetchStories = function(response) {
				ctrl.storyIds = response.data;
				ctrl.generatePages();
				console.log('fetching ids')
				ctrl.stories = ctrl.pages[ctrl.currentPage];
			}

			ApiService.topStoryIds().then(this.fetchStories);
		},
		template: [
			'<ul class="posts">',
		 		'<post ng-repeat="story in ctrl.stories" id="story"></post>',
			'</ul>',
			'<ul class="pagination">',
				'<li ng-repeat="page in ctrl.pages" ng-click="ctrl.setPage($index);" ng-class=\" { active: ctrl.isActive($index) } \">',
				'<a href="#">{{$index}}</a>',
				'</li>',
			'</ul>'
	 	].join(''),
		controllerAs: 'ctrl'
	};
}

angular
	.module('app')
	.directive('displayNews', displayNews);
