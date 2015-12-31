describe('$templateCache', function() {
	var i = 0, node, lastNode;

	beforeEach(function() {
		node = document.createElement('div'),
		lastNode = node;

		for(var depth = 10; depth >= 0; depth--) {
			lastNode = lastNode.appendChild(document.createElement('div'));
			lastNode.setAttribute('id', 'node-n-' + depth);
		}

		if(!renderer.moduleLoader.modules.hasOwnProperty('app')) {
			renderer.module('app', ['nd.packages']);
		}
	});

	afterEach(function() { i++; });

	it('should implement the $location service', function(done) {
		renderer.module('app').config(function($location) {
			$location.path('/index');

			setTimeout(function() {
				expect($location.path()).toEqual('/index');
				expect(window.location.hash).toEqual('#/index');

				done();
			});
		});

		renderer.bootstrap(node, 'app');
	});
});
