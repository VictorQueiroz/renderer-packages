var events = ('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter ' +
              'mouseleave keydown keyup keypress submit focus blur copy cut paste').split(' '),
    // For events that might fire synchronously during DOM manipulation
    // we need to execute their event handlers asynchronously using $evalAsync,
    // so that they are not executed in an inconsistent state.
    forceAsyncEvents = {
      'blur': true,
      'focus': true
    };

ndModule.service('timeout', function(rootScope) {
  return function(ms, fn) {
    setTimeout(function() {
      if(rootScope.phase) {
        fn();
      } else {
        rootScope.apply(fn);
      }
    }, ms);
  };
});

events.forEach(function(eventName) {
  var directiveName = 'nd' + (eventName[0].toUpperCase() + eventName.substring(1));

  ndModule.directive(directiveName, ['rootScope', 'timeout', function(rootScope, timeout) {
    return {
      restrict: 'A',
      compile: function($element, attr) {
        // We expose the powerful $event object on the scope that provides access to the Window,
        // etc. that isn't protected by the fast paths in $parse.  We explicitly request better
        // checks at the cost of speed since event handler expressions are not executed as
        // frequently as regular change detection.
        var fn = renderer.parse(attr[directiveName]);

        return function ngEventHandler(scope, element) {
          element.addEventListener(eventName, function(event) {
            var callback = function() {
              fn(scope, {$event:event});
            };

            if (forceAsyncEvents[eventName] && rootScope.phase) {
              timeout(callback, 0);
            } else {
              scope.apply(callback);
            }
          });
        };
      }
    };
  }]);
});