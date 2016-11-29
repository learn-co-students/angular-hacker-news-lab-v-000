describe('Routes', function () {
	var $state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
	}));

	describe('Post', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('topStories');

			expect(state.url).toEqual('/topstories');
		});
	});

	describe('Top Stories', function () {
		var state;

		it('should have the correct URL', function () {
			state = $state.get('post');

			expect(state.url).toEqual('/post/:id');
		});
	});
});