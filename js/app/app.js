angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				template: '<div ng-repeat="story in vm.stories"><story id="{{story}}"></story></div>',
				controller: 'StoryController as vm',
				resolve: {
					stories: function ($http) {
						return $http.get("https://hacker-news.firebaseio.com/v0/topstories.json")
	  						.then(function(response) {
	      						console.log(response);
						    	return response.data.slice(1, 10);
						  });
						}
					}
				}
			)
			.state('away', {
				url: '/:id',
				template: '{{vm.stories}}',
				controller: 'StoryController as vm',
				resolve: {
					stories: function ($http, $stateParams) {
						return $http.get("https://hacker-news.firebaseio.com/v0/item/"+$stateParams.id+".json")
	  						.then(function(response) {
						    	return response.data;
						  });
						}
					}
				}
			);
			$urlRouterProvider.otherwise('/');
	})

	.controller('StoryController', function(stories){
		this.stories = stories
	})

	.directive("story", function() {
	    return {
	        template : "<a href='#/{{id}}'>{{info.title}}</a><br>",
	        scope: {
				id: '@'
			},
			controller: function ($scope, $http) {
				console.log($scope.id);
				$http.get("https://hacker-news.firebaseio.com/v0/item/"+$scope.id+".json")
	  				.then(function(response) {
	  					$scope.info = response.data;
	  				});

			},
			controllerAs: 'item' 
	    };
	})
	.directive("comments", function() {
	    return {
	        template : "<a href='#/{{id}}'>{{info.title}}</a><br>",
	        scope: {
				id: '@'
			},
			controller: function ($scope, $http) {
				console.log($scope.id);
				$http.get("https://hacker-news.firebaseio.com/v0/item/"+$scope.id+".json")
	  				.then(function(response) {
	  					$scope.info = response.data;
	  				});

			},
			controllerAs: 'item' 
	    };
	});
