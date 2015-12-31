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

	it('should put the content on a key', function() {
		renderer.templateCache('index.html', 'Index Page Content');

		renderer.module('app')
		.config(function($templateCache) {
			expect($templateCache.get('index.html')).toEqual('Index Page Content');
		});

		renderer.bootstrap(node, 'app');
	});
});