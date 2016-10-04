angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top',
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
			.state('post', {
				url: '/post/:id',
				template: '{{vm.stories}} <br><div ng-repeat="comment in vm.stories.kids"><comment id="{{comment}}"></comment><br></div>',
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
			$urlRouterProvider.otherwise('top');
	})

	.controller('StoryController', function(stories){
		this.stories = stories
	})

	.directive("story", function() {
	    return {
	        template : "<a href='#/post/{{id}}'>({{info.score}}) {{info.title}} ({{info.kids.length}} comments)</a><br>",
	        scope: {
				id: '@'
			},
			controller: function ($scope, $http) {
				console.log($scope.id);
				$http.get("https://hacker-news.firebaseio.com/v0/item/"+$scope.id+".json")
	  				.then(function(response) {
	  					$scope.info = response.data;
	  				});

			}
	    };
	})
	.directive("comment", function() {
	    return {
	        template : "<b>comment:</b> {{commentdata.text}}",
	        scope: {
				id: '@'
			},
			controller: function ($scope, $http) {
				console.log($scope.id);
				$http.get("https://hacker-news.firebaseio.com/v0/item/"+$scope.id+".json")
	  				.then(function(response) {
	  					$scope.commentdata = response.data;
	  				});
			}
	    };
	});
