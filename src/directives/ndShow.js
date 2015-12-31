ndModule
.directive('ndHide', function(animate) {
	return {
		multiElement: true,
		link: function(scope, node, attrs) {
			scope.watch(attrs.ndHide, function(value) {
				animate[value ? 'addClass' : 'removeClass'](node, 'nd-hide');
			});
		}
	};
})
.directive('ndShow', function(animate) {
	return {
		multiElement: true,
		link: function(scope, node, attrs) {
			scope.watch(attrs.ndShow, function(value) {
				animate[value ? 'removeClass' : 'addClass'](node, 'nd-hide');
			});
		}
	};
});
