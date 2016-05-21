describe('Routes', function () {
	var $state, $injector;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Top Stories', function () {
		var state;

		it('should be configured properly', function () {
			state = $state.get('top');

			expect(state.url).toEqual('/top');
			expect(state.templateUrl).toEqual('views/top.html');
			expect(state.controller).toContain('TopStoriesController');
		});

		it('should go to the top state', function () {
			expect($state.href('top')).toEqual('#/top');
		});
	});

	describe('Post', function () {
		var state;

		it('should be configured properly', function () {
			state = $state.get('post');

			expect(state.url).toEqual('/post/:id');
			expect(state.templateUrl).toEqual('views/post.html');
			expect(state.controller).toContain('PostController');
		});

		it('should go to the post state', function () {
			expect($state.href('post', {id: 1})).toEqual('#/post/1');
		});
	});
});
