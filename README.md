# renderer-packages

### Dependencies
- [eventemitter](https://github.com/VictorQueiroz/eventemitter)
- [moduleloader](https://github.com/VictorQueiroz/moduleloader)
- [injection](https://github.com/VictorQueiroz/injector)
- [routedriver](https://github.com/VictorQueiroz/routedriver)
- [renderer](https://github.com/VictorQueiroz/renderer)
- [renderer-moduleloader](https://github.com/VictorQueiroz/renderer-moduleloader)
- [renderer-router](https://github.com/VictorQueiroz/renderer-router)

### Usage

The bundle contains all the dependencies (including Renderer)

```html
<script src="bower_components/renderer-packages/build/renderer-bundle.js"></script>
<script src="bower_components/renderer-packages/build/renderer-router.js"></script>
```

```js
renderer.module('templates', []).config(function($templateCache) {
	$templateCache.put('index.html', 'Welcome, {{user.name}}! =)');
});

renderer.module('app', ['templates']).directive('html', function() {
	return function(scope, el) {

	};
})
.run(function($route) {
	$route.when('/', {
		templateUrl: 'index.html'
	});
});

renderer.bootstrap(document, 'app');
```

### Directives
- ndShow
- ndRepeat
- ndHide

#### Events
- ndClick
- ndDblclick
- ndMousedown
- ndMouseup
- ndmouseover
- ndMouseout
- ndMousemove
- ndMouseenter
- ndMouseleave
- ndKeydown
- ndKeyup
- ndKeypress
- ndSubmit
- ndFocus
- ndBlur
- ndCopy
- ndCut
- ndPaste