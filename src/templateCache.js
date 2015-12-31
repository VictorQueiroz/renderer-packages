renderer.module('nd.packages').service('$templateCache', function() {
	var templateCache = window.renderer.templateCache;

	return {
		put: function(key, value) {
			return templateCache(key, value) && this;
		},

		get: function(key) {
			return templateCache(key);
		},

		has: function(key) {
			return this.get(key);
		}
	};
})
