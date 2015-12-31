ndModule.service('animate', function() {
	return {
		addClass: function(node, name) {
			node.classList.add(name);
		},

		removeClass: function(node, name) {
			node.classList.remove(name);
		}
	};
});
