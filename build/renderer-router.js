!function(window, global) {
    "use strict";
    !function(t) {
        function e() {
            this._events = {};
        }
        function n(t) {
            return "undefined" == typeof t;
        }
        e.prototype = {
            on: function(t, e) {
                return this._events.hasOwnProperty(t) || (this._events[t] = []), this._events[t].push(e), 
                this;
            },
            off: function(t, e) {
                var n, r = this._events[t];
                for (n = 0; n < r.length; n++) r[n] == e && r.splice(n, 1);
                return this;
            },
            emit: function(t) {
                var e, i, s, o = r(arguments).slice(1);
                if (this._events.hasOwnProperty(t)) {
                    for (s = this._events[t], i = new Array(s.length), e = 0; e < s.length; e++) i[e] = s[e].apply(this, o);
                    return i.every(function(t) {
                        return n(t) ? !0 : t;
                    });
                }
                return !0;
            },
            removeAllListeners: function() {
                var t, e, n = Object.keys(this._events), r = n.length;
                for (t = 0; r > t; t++) e = n[t], this._events[e] = [];
            }
        };
        var r = function(t) {
            return Array.prototype.slice.call(t);
        };
        Array.isArray, t.eventemitter = {
            EventEmitter: e
        };
    }(window), !function() {
        function t(t) {
            return null != t && "object" == typeof t;
        }
        function n(t) {
            return "undefined" == typeof t;
        }
        function r(t) {
            return n(t) === !1;
        }
        function e(t) {
            return "string" == typeof t;
        }
        function i(t) {
            return Array.prototype.slice.call(t);
        }
        function s(n, r, e) {
            n.prototype = Object.create(r.prototype), t(e) && o(n.prototype, e);
        }
        function o(n) {
            n || (n = {});
            var e, s, o, l, u, h, a, c = i(arguments).slice(1).filter(r), f = c.length;
            for (h = 0; f > h; h++) if ((e = c[h]) && t(e)) for (o = Object.keys(e), u = o.length, 
            a = 0; u > a; a++) l = o[a], s = e[l], n[l] = s;
            return n;
        }
        function t(t) {
            return null !== t && "object" == typeof t;
        }
        function l(t) {
            a.call(this), this.url_ = null, this.global = t, 0 === this.global.location.hash.length && this.url("/"), 
            this.sync();
            var n = this;
            this.onHashChange_ = function() {
                n.url() !== n.oldUrl && (n.sync(), n.replace === n.url() ? n.replace = null : (n.replace && (n.replace = null), 
                n.emit("urlChange", n.url(), n.oldUrl)));
            }, t.addEventListener("hashchange", this.onHashChange_);
        }
        function u(t) {
            a.call(this), this.url_ = null, this.browser = t, this.sync();
            var n = this;
            this.onUrlChangeListener = function(t, r) {
                n.sync(), n.emit("locationChangeStart", n.url(), n.oldUrl) ? n.emit("locationChangeSuccess", n.url(), n.oldUrl) : n.url(r, 1);
            }, this.browser.on("urlChange", this.onUrlChangeListener);
        }
        !function(t) {
            function n() {
                this._events = {};
            }
            function r(t) {
                return "undefined" == typeof t;
            }
            n.prototype = {
                on: function(t, n) {
                    return this._events.hasOwnProperty(t) || (this._events[t] = []), this._events[t].push(n), 
                    this;
                },
                off: function(t, n) {
                    var r, e = this._events[t];
                    for (r = 0; r < e.length; r++) e[r] == n && e.splice(r, 1);
                    return this;
                },
                emit: function(t) {
                    var n, i, s, o = e(arguments).slice(1);
                    if (this._events.hasOwnProperty(t)) {
                        for (s = this._events[t], i = new Array(s.length), n = 0; n < s.length; n++) i[n] = s[n].apply(this, o);
                        return i.every(function(t) {
                            return r(t) ? !0 : t;
                        });
                    }
                    return !0;
                },
                removeAllListeners: function() {
                    var t, n, r = Object.keys(this._events), e = r.length;
                    for (t = 0; e > t; t++) n = r[t], this._events[n] = [];
                }
            };
            var e = function(t) {
                return Array.prototype.slice.call(t);
            };
            Array.isArray, t.eventemitter = {
                EventEmitter: n
            };
        }(window);
        var h = Array.isArray || function(n) {
            return t(n) && n instanceof Array == 1;
        }, a = window.eventemitter.EventEmitter;
        s(l, a, {
            url: function(t, n) {
                if (!t) return this.url_;
                var r = this.global;
                return n && (this.replace = t), r.location.hash = t, this;
            },
            sync: function() {
                var t = this.global.location.hash.substring(1);
                return t !== this.url_ && (this.oldUrl = this.url_, this.url_ = t), this;
            },
            destroy: function() {
                this.removeAllListeners(), this.global.removeEventListener("hashchange", this.onHashChange_);
            }
        }), s(u, a, {
            url: function(t, n) {
                return t ? (this.browser.url(t, n), this) : this.url_;
            },
            search: function(n) {
                var r = this.url().split("?");
                return t(n) ? (r[1] = p.stringify(n), this.url(r.join("?")), this) : p.parse(r[1]);
            },
            path: function(t, n) {
                var r = this.url().split("?");
                return t ? (r[0] = t, this.url(r.join("?"), n), this) : r[0];
            },
            sync: function() {
                var t = this.browser.url();
                return t !== this.url_ && (this.oldUrl = this.url_, this.url_ = t), this;
            },
            destroy: function() {
                this.browser.off("urlChange", this.onUrlChangeListener);
            }
        });
        var c = function(t) {
            return decodeURIComponent(t);
        }, f = function(t) {
            return encodeURIComponent(t);
        }, p = {
            stringify: function(t) {
                var n, r, e, i = Object.keys(t), s = new Array(i.length);
                for (n = i.length - 1; n >= 0; n--) r = i[n], e = t[r], h(e) && (e = e.join(",")), 
                s[n] = f(r) + "=" + f(e);
                return s.join("&");
            },
            parse: function(t) {
                if (e(t)) {
                    var n, r, i, s = {}, o = t.split("&").filter(function(t) {
                        return t.length > 0;
                    }).map(function(t) {
                        return t.split("=").filter(function(t) {
                            return t.length > 0;
                        });
                    });
                    for (n = o.length - 1; n >= 0; n--) i = o[n], r = c(i[0]), s[r] = c(i[1]);
                    return s;
                }
                return {};
            }
        };
        window.$location = {
            Location: u,
            Browser: l
        };
    }(), !function(t) {
        function e(t, e, n) {
            t.prototype = Object.create(e.prototype), r(n) && s(t.prototype, n);
        }
        function r(t) {
            return null !== t && "object" == typeof t;
        }
        function n(t) {
            return Array.prototype.slice.apply(t);
        }
        function o(t) {
            return i(t) === !1;
        }
        function i(t) {
            return "undefined" == typeof t;
        }
        function s(t) {
            t || (t = {});
            var e, i, s, u, a, c, h, p = n(arguments).slice(1).filter(o), f = p.length;
            for (c = 0; f > c; c++) if ((e = p[c]) && r(e)) for (s = Object.keys(e), a = s.length, 
            h = 0; a > h; h++) u = s[h], i = e[u], t[u] = i;
            return t;
        }
        function r(t) {
            return null !== t && "object" == typeof t;
        }
        function u() {
            this._events = {};
        }
        function a(t) {
            u.call(this), this.routes = t || {}, this.current = null, this.preparedRoute = null;
        }
        Array.isArray || function(t) {
            return r(t) && t instanceof Array == 1;
        }, u.prototype = {
            on: function(t, e) {
                return this._events.hasOwnProperty(t) || (this._events[t] = []), this._events[t].push(e), 
                this;
            },
            off: function(t, e) {
                var r, n = this._events[t];
                for (r = 0; r < n.length; r++) n[r] == e && n.splice(r, 1);
                return this;
            },
            emit: function(t) {
                var e, r, i, s = n(arguments).slice(1);
                if (this._events.hasOwnProperty(t)) for (i = this._events[t], r = new Array(i.length), 
                e = 0; e < i.length; e++) r[e] = i[e].apply(this, s);
                return r && r.length > 0 ? r.every(function(t) {
                    return o(t) ? t : !0;
                }) : !0;
            },
            removeAllListeners: function() {
                var t, e, r, n, o, i = Object.keys(this._events), s = i.length;
                for (t = 0; s > t; t++) for (o = i[t], n = this._events[o], r = n.length, e = 0; r > e; e++) n.splice(e, 1);
            }
        }, a.createPathRegExp = function(t, e) {
            e = e || {};
            var r = e.caseInsensitiveMatch, n = {
                originalPath: t,
                regexp: t
            }, o = n.params = [];
            return t = t.replace(/([().])/g, "\\$1").replace(/(\/)?{(\w+)([\?\*])?}/g, function(t, e, r, n) {
                var i = "?" === n ? n : null, s = "*" === n ? n : null;
                return o.push({
                    name: r,
                    optional: !!i
                }), e = e || "", "" + (i ? "" : e) + "(?:" + (i ? e : "") + (s && "(.+?)" || "([^/]+)") + (i || "") + ")" + (i || "");
            }).replace(/([\/$\*])/g, "\\$1"), n.regexp = new RegExp("^" + t + "$", r ? "i" : ""), 
            n;
        }, e(a, u, {
            constructor: a,
            when: function(t, e) {
                var r = this.routes;
                if (this.routes.hasOwnProperty(e)) throw new Error('Redefinition of route "' + t + '"');
                return r[t] = s(e, a.createPathRegExp(t)), this;
            },
            prepare: function(t) {
                var e = this.current;
                return this.preparedRoute = t, this.emit("routeChangeStart", t, e) ? !0 : !1;
            },
            commit: function() {
                var t = this.preparedRoute;
                this.current = t;
            },
            go: function(t) {
                var e = this.parse(t);
                this.prepare(e) || this.emit("routeNotFound", t);
            },
            parse: function(t) {
                for (var e, r, n = Object.keys(this.routes), o = this.routes, i = 0; i < n.length; i++) if (e = o[n[i]], 
                r = t.match(e.regexp)) return e;
            }
        });
        var c = {};
        t.router = {
            Router: a,
            routes: c,
            router: new a(c)
        };
    }(window), function() {
        function inherits(ctor, ctorSrc, attrs) {
            ctor.prototype = Object.create(ctorSrc.prototype), isObject(attrs) && extend(ctor.prototype, attrs);
        }
        function isObject(value) {
            return null !== value && "object" == typeof value;
        }
        function toArray(target) {
            return Array.prototype.slice.apply(target);
        }
        function isDefined(target) {
            return isUndefined(target) === !1;
        }
        function isUndefined(target) {
            return "undefined" == typeof target;
        }
        function forEach(array, iterator, context) {
            var length;
            if (isArray(array)) for (i = 0, length = array.length; length > i; i++) iterator.call(context, array[i], i, array); else if (isObject(array)) {
                var i, key, value, keys = Object.keys(array), ii = keys.length;
                for (i = 0; ii > i; i++) key = keys[i], value = array[key], iterator.call(context, value, key, array);
            }
            return array;
        }
        function extend(target) {
            isObject(target) || (target = {});
            var source, value, keys, key, jj, i, j, sources = toArray(arguments).slice(1).filter(isDefined), ii = sources.length;
            for (i = 0; ii > i; i++) if ((source = sources[i]) && isObject(source)) for (keys = Object.keys(source), 
            jj = keys.length, j = 0; jj > j; j++) key = keys[j], value = source[key], target[key] = value;
            return target;
        }
        function isObject(value) {
            return null !== value && "object" == typeof value;
        }
        function Router(location, routes) {
            router.Router.call(this, routes);
            var route, self = this;
            this.location = location, this.location.on("locationChangeStart", function(url) {
                (route = self.parse(url)) && self.prepare(route);
            }).on("locationChangeSuccess", function() {
                self.commit();
            });
        }
        var isArray = Array.isArray || function(array) {
            return isObject(array) && array instanceof Array == !0;
        };
        window.eventemitter.EventEmitter;
        inherits(Router, router.Router, {
            constructor: Router,
            prepare: function(route, url) {
                url = url || this.location.url();
                var param, params = (url.match(route.regexp) || []).slice(1), lastRoute = this.current;
                return this.preparedRoute = route, route.params = {}, route.originalPath.replace(/{(\w+)}/g, function(all, name) {
                    (param = params.shift()) && (route.params[name] = param);
                }), this.emit("routeChangeStart", route, lastRoute) ? !0 : !1;
            },
            commit: function() {
                this.current = this.preparedRoute, this.emit("routeChangeSuccess");
            }
        });
        var $location = window.$location, browser = new $location.Browser(window), $$location = new $location.Location(browser);
        renderer.router = new Router($$location), renderer.controller = function(Type, locals) {
            locals = locals || {};
            var args = [];
            return forEach(locals, function(value) {
                args.push(value);
            }), args.unshift(Type), new (Function.prototype.bind.apply(Type, args))();
        }, extend(renderer.router, {
            browser: browser,
            location: $$location,
            Router: Router
        });
        var bootstrap = renderer.bootstrap;
        renderer.bootstrap = function(element) {
            bootstrap(element);
            var $location = renderer.router.location, route = renderer.router.parse($location.path());
            renderer.router.prepare(route), renderer.router.commit();
        }, renderer.register("ndView", function() {
            return {
                restrict: "A",
                terminal: !0,
                priority: 400,
                transclude: "element",
                compile: function(node) {
                    function postLinkFn(scope, node, attrs, ctrls, transclude) {
                        function update() {
                            var current = renderer.router.current;
                            lastView && ((parent = lastView.parentNode) && parent.removeChild(lastView), lastView = null), 
                            newScope && newScope.destroy(), current && (newScope = scope.clone(), transclude(newScope, function(clone) {
                                parent = node.parentNode, current.hasOwnProperty("templateUrl") && renderer.templateCache(current.templateUrl) && (current.template = renderer.templateCache(current.templateUrl), 
                                delete current.templateUrl), parent && parent[node.nextSibling ? "insertBefore" : "appendChild"](clone, node.nextSibling), 
                                lastView = clone;
                            }));
                        }
                        renderer.router.on("routeChangeSuccess", function() {
                            scope.apply(update);
                        }), update();
                        var parent, newScope, lastView;
                    }
                    return postLinkFn;
                }
            };
        }), renderer.register("ndView", function() {
            return {
                restrict: "A",
                priority: -400,
                link: function(scope, node, attrs, ctrl, transclude) {
                    var current = renderer.router.current;
                    node.innerHTML = current.template;
                    var link = renderer.compile(node.childNodes);
                    if (current.locals || (current.locals = {}), extend(current.locals, {
                        scope: scope,
                        attrs: attrs,
                        element: node,
                        transclude: transclude,
                        routeParams: current.params
                    }), current.controller) {
                        var controller = renderer.controller(current.controller, current.locals);
                        "string" == typeof current.controllerAs && (scope[current.controllerAs] = controller);
                    }
                    link(scope);
                }
            };
        });
    }(), renderer.module("nd.packages").service("$location", function() {
        return renderer.router.location;
    }), renderer.module("nd.packages").service("$route", function() {
        return window.renderer.router;
    });
}(window, window);