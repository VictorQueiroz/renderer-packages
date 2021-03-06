!function(window, global) {
    "use strict";
    !function(window, global) {
        !function(u) {
            function t(u) {
                return Array.prototype.slice.apply(u);
            }
            function e(u) {
                return "undefined" == typeof u;
            }
            function i(u) {
                return "boolean" == typeof u;
            }
            function r(u) {
                return e(u) === !1;
            }
            function s(u, t) {
                return B(Object.create(u), t);
            }
            function n(u, t) {
                return Array.prototype.join.call(u, t);
            }
            function o() {
                var u, e, i, r = t(arguments), s = [], n = r.shift(), o = 1;
                for (u = 0, e = n.length; e > u; u++) i = n[u], i == nu ? (-1 === n.substring(u).indexOf(ou) && D("Unclosed bracket at column " + u), 
                0 == o && D("Expecting " + ou + " but go " + i + " at column " + u), o = 0) : i == ou ? o = 1 : 1 == o ? s.push(i) : s.push(r.length > 0 ? r.shift() : su);
                return new Error(s.join(su));
            }
            function D() {
                throw o.apply(this, arguments);
            }
            function a(u, t) {
                var e, i, r = typeof u, s = typeof t;
                if (u === t) return !0;
                if (null === u || null === t) return !1;
                if (r !== s) return !1;
                if (m(u)) {
                    if (u != t) return !1;
                } else if (f(u)) {
                    if (u.length != t.length || u != t) return !1;
                } else if (ru(u)) {
                    if (u.length != t.length) return !1;
                    for (i = u.length; i--; ) if (!a(u[i], t[i])) return !1;
                } else if (E(u)) for (e = Object.keys(u), i = e.length; i--; ) if (!a(u[e[i]], t[e[i]])) return !1;
                return !0;
            }
            function h(u, t) {
                return u.reduce(t || function(u, t) {
                    return u + t;
                });
            }
            function c(u) {
                return u[0];
            }
            function l(u, t, e) {
                if (E(t)) {
                    var i, r, s, n = Object.keys(t), o = n.length;
                    for (e = e || [], i = 0; o > i; i++) r = n[i], s = t[r], e.push(s), E(s) && -1 === e.indexOf(s) && (s = l(ru(s) ? [] : {}, s, e)), 
                    u[r] = s;
                    return u;
                }
                return t;
            }
            function p(u) {
                return l(ru(u) ? [] : {}, u);
            }
            function F(u) {
                var t, e = Object.keys(u), i = e.length, r = [];
                for (t = 0; i > t; t++) r[t] = u[e[t]];
                return r;
            }
            function A(u, t) {
                var e, i = t.split("."), r = i.length, s = u;
                for (e = 0; r > e; e++) s && (s = s[i[e]]);
                return s;
            }
            function C() {}
            function E(u) {
                return null !== u && "object" == typeof u;
            }
            function f(u) {
                return "string" == typeof u;
            }
            function d(u) {
                return "function" == typeof u;
            }
            function m(u) {
                return "number" == typeof u;
            }
            function B(u) {
                u || (u = {});
                var e, i, s, n, o, D, a, h = t(arguments).slice(1).filter(r), c = h.length;
                for (D = 0; c > D; D++) if ((e = h[D]) && E(e)) for (s = Object.keys(e), o = s.length, 
                a = 0; o > a; a++) n = s[a], i = e[n], u[n] = i;
                return u;
            }
            function x(u, t) {
                var e, i, r, s = Object.keys(t), n = s.length;
                for (e = 0; n > e; e++) i = s[e], r = t[i], u.hasOwnProperty(i) || (u[i] = r);
            }
            function g(u, t, e) {
                var i;
                if (ru(u)) for (r = 0, i = u.length; i > r; r++) t.call(e, u[r], r, u); else {
                    var r, s, n, o = Object.keys(u), D = o.length;
                    for (r = 0; D > r; r++) s = o[r], n = u[s], t.call(e, n, s, u);
                }
                return u;
            }
            function y(u, t, e) {
                var i, r = ru(u) ? [] : {};
                if (ru(u)) for (i = 0; i < u.length; i++) r[i] = t.call(e, u[i], i, u); else if (E(u)) {
                    var s = Object.keys(u);
                    for (i = 0; i < s.length; i++) r[s[i]] = t.call(e, u[s[i]], s[i], u);
                }
                return r;
            }
            function v(u) {
                return (u = u.replace(/[^A-z]/g, " ")) && k(u).replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(u, t) {
                    return 0 === +u ? "" : 0 == t ? u.toLowerCase() : u.toUpperCase();
                });
            }
            function b(u) {
                return k(u.replace(/[A-Z]/g, "-$&"));
            }
            function w(u) {
                if ("string" == typeof u) return u;
                var t = null == u ? "" : u + "";
                return "0" == t && 1 / u == -INFINITY ? "-0" : t;
            }
            function k(u) {
                return (f(u) ? u : w(u)).toLowerCase();
            }
            function L(u, t) {
                return function() {
                    return P(u, t);
                };
            }
            function P(u, t) {
                return function() {
                    return u.apply(t, arguments);
                };
            }
            function O(u, t, e, i) {
                if (void 0 === u || null === u) throw new TypeError('The constructor to "inherits" must not be null or undefined');
                if (void 0 === t || null === t) throw new TypeError('The super constructor to "inherits" must not be null or undefined');
                if (void 0 === t.prototype) throw new TypeError('The super constructor to "inherits" must have a prototype');
                u.super_ = t, u.prototype = Object.create(t.prototype), e && B(u.prototype, e), 
                i && B(u, i);
            }
            function S() {
                return ++Du;
            }
            function $(u, t, e) {
                u.hasOwnProperty(Fu) || (u[Fu] = S(), pu[u[Fu]] = {});
                var i = pu[u[Fu]];
                return t ? !e && i.hasOwnProperty(t) ? i[t] : (e && (i[t] = e), null) : i;
            }
            function N(u, t, e) {
                u.nodeType == Node.DOCUMENT_NODE && (u = u.documentElement);
                for (var i = ru(t) ? t : [ t ]; u; ) {
                    for (var r = 0, s = i.length; s > r; r++) if (e = $(u, i[r])) return e;
                    u = u.parentNode || u.nodeType === Node.DOCUMENT_FRAGMENT_NODE && u.host;
                }
            }
            function I(u, t, e) {
                e.hasOwnProperty(u) || (e[u] = {
                    directives: [],
                    executed: !1,
                    load: function() {
                        var t, e, i, r = this.directives, s = [];
                        return g(r, function(r, n) {
                            t = au.invokeFactory(r), e = {}, d(t) ? e.compile = L(t) : !t.compile && t.link ? e.compile = L(t.link) : t.compile || t.link || (t.compile = C), 
                            E(t) && B(e, t), x(e, {
                                priority: 0,
                                index: n,
                                name: u,
                                restrict: "EA"
                            }), x(e, {
                                require: e.controller && e.name
                            }), i = new W(u, e), s.push(i);
                        }), s;
                    }
                }), e[u].directives.push(t);
            }
            function T(u, t) {
                if (t = t, u = u || "", !t.hasOwnProperty(u)) return null;
                var e = t[u];
                return e.executed || B(e, {
                    load: e.load(),
                    executed: !0
                }), e.load;
            }
            function _() {
                this._events = {};
            }
            function j() {
                _.call(this), this.observer = new tu(this);
            }
            function M(u) {
                j.call(this), u && (this.parentScope = u), this.childScopes = [], this.topLevelScope = M.getTopLevelScope(this), 
                this.postDigestQueue = [];
            }
            function U(u, t, e) {
                this.node = u, this.options = e || {}, this.registry = t, this.prepare();
            }
            function R(u, t, e) {
                this.node = u, this.registry = t, this.attributes = new X(this.node), this.directives = [], 
                this.maxPriority = e;
            }
            function z(u) {
                this.current = null, this.lexer = u;
            }
            function q(u) {
                return u.type === z.Identifier || u.type === z.MemberExpression;
            }
            function G(u, t) {
                return "undefined" != typeof u ? u : t;
            }
            function H(u) {
                this.grammar = new K("fn"), this.astBuilder = u;
            }
            function V(u) {
                this.astBuilder = u, this.id = 0;
            }
            function X(u) {
                this.$$node = u, this.$$observers = {};
            }
            function Q(u, t, e) {
                this.options = e, this.nodeList = u, this.registry = t;
                var i, r, s, n, o, D, a = [], h = [];
                for (i = 0; i < u.length; i++) r = new R(u[i], this.registry, 0 === i ? this.options.maxPriority : void 0), 
                h = r.scan(), D = r.attributes, s = new uu(u[i], h, D), s.prepare(t), o = u[i].childNodes && u[i].childNodes.length > 0 && u[i].childNodes || 0, 
                n = new U(o ? u[i].childNodes : [], this.registry, this.options), a.push(s, n);
                this.nodeLinks = a;
            }
            function W(u, t) {
                u && (this.name = u), E(t) && B(this, t);
            }
            function K(u) {
                this.state = {}, this.nextId_ = 0, this.current_ = u || "fn", this.setCurrent(this.current_);
            }
            function Y(u, t, e) {
                this.text = u, this.exps = [], this.index = 0, this.parseFns = [], this.endSymbol = e || Y.endSymbol, 
                this.startSymbol = t || Y.startSymbol;
                for (var i, r, s, u = this.text, n = this.index, o = [], e = this.endSymbol, t = this.startSymbol, D = e.length, a = t.length, h = []; n < u.length; ) {
                    if (!((s = u.indexOf(t, n)) > -1 && (r = u.indexOf(e, s + a)) > -1)) {
                        n !== u.length && o.push(u.substring(n));
                        break;
                    }
                    n !== s && o.push(u.substring(n, s)), i = u.substring(s + a, r).trim(), this.exps.push(i), 
                    this.parseFns.push(this.parse(i)), h.push(o.length), o.push(""), n = r + D;
                }
                this.concat = o, this.expressionPositions = h;
            }
            function Z() {}
            function J(u) {
                this.nodeList = ru(u) ? u : [], Object.defineProperty(this, "classList", {
                    value: {
                        add: P(this._classList.add, this),
                        remove: P(this._classList.remove, this),
                        contains: P(this._classList.contains, this)
                    }
                });
            }
            function uu(u, t, e, i) {
                this.node = u, this.links = {
                    post: [],
                    pre: []
                }, this.scope = null, this.context = i || {}, this.attributes = e, this.directives = t || [], 
                this.transclude = null, this.terminalPriority = -Number.MAX_VALUE, this.node.nodeType === Node.TEXT_NODE && this.directives.push({
                    compile: function(u) {
                        return function(u, t) {
                            var e = new Y(t.nodeValue);
                            u.watchGroup(e.exps, function() {
                                t.nodeValue = e.compile(u);
                            });
                        };
                    }
                });
            }
            function tu(u) {
                this.object = u, this.watchers = {};
            }
            function eu(u) {
                this.lexer = u, this.ast = new z(this.lexer), this.astCompiler = new H(this.ast);
            }
            function iu(u, t) {
                this.node = u, E(t) && B(this, t), this.compileOptions = {}, m(this.terminalPriority) && (this.compileOptions.maxPriority = this.terminalPriority);
                var e;
                if ("element" == this.type) {
                    var i = this.directive.name, r = this.attributes, s = this.node.parentNode, n = document.createComment(" " + i + ": " + r[i] + " ");
                    this.clone || (this.clone = this.node.cloneNode(1)), s && s.replaceChild(n, this.node), 
                    this.comment = n;
                } else {
                    var o = document.createDocumentFragment(), D = [];
                    for (e = 0; e < this.node.childNodes.length; e++) D[e] = this.node.childNodes[e];
                    for (e = 0; e < D.length; e++) o.appendChild(D[e]);
                    this.clone = o;
                }
                if (E(this.type)) {
                    var a, h, c, l = Object.keys(this.type), p = {}, F = {}, A = {};
                    for (e = 0; e < l.length; e++) a = l[e], c = this.type[a], h = "?" === c.charAt(0), 
                    c = h ? c.substring(1) : c, F[a] = c, p[c] = document.createDocumentFragment(), 
                    A[c] = h;
                    for (e = 0; e < this.clone.childNodes.length; e++) c = F[v(this.clone.childNodes[e].nodeName)], 
                    c && (A[c] = !0, p[c].appendChild(this.clone.childNodes[e].cloneNode(1)));
                    this.slots = p;
                }
            }
            var ru = Array.isArray, su = "", nu = "{", ou = "}", Du = 0, u = window, au = {}, hu = {
                $$get: function(u) {
                    return T(u, hu);
                }
            };
            au.invokeFactory = function(u) {
                return u.call(null);
            }, au.clearRegistry = function() {
                return g(hu, function(u, t) {
                    "$$get" !== t && delete hu[t];
                }), this;
            }, au.hasDirective = function(u) {
                return hu.hasOwnProperty(u);
            }, au.getDirectives = hu.$$get, au.register = function(u, t) {
                return I(u, t, hu);
            };
            var cu = {};
            au.parse = function(u, t) {
                if (cu.hasOwnProperty(u) && 0 != t) return cu[u];
                var e = new eu(new Z());
                return cu[u] = e.parse(u);
            };
            var lu = {};
            au.templateCache = function(u, t) {
                if (f(u)) {
                    if (!t) return lu[u];
                    lu[u] = t;
                }
                return null;
            }, au.compile = function(u) {
                var t = new U(u, hu);
                return function(u) {
                    return t.execute(u);
                };
            }, au.bootstrap = function(u) {
                au.rootElement = u;
                var t = au._rootScope = new au.Scope();
                return au.compile(u)(t);
            }, B(au, {
                Scope: M,
                Compile: U,
                _registry: hu
            }), u.renderer = au, au.prototype = {
                __elementCache: {},
                __cacheKey: "$$$rt339"
            };
            var pu = au.prototype.__elementCache, Fu = au.prototype.__cacheKey;
            _.prototype = {
                on: function(u, t) {
                    return this._events.hasOwnProperty(u) || (this._events[u] = []), this._events[u].push(t), 
                    this;
                },
                off: function(u, t) {
                    var e, i = this._events[u];
                    for (e = 0; e < i.length; e++) i[e] == t && i.splice(e, 1);
                    return this;
                },
                emit: function(u) {
                    var e, i, r = t(arguments).slice(1);
                    if (this._events.hasOwnProperty(u)) for (i = this._events[u], e = 0; e < i.length; e++) i[e].apply(this, r);
                    return i && i.length > 0 ? !0 : !1;
                },
                removeAllListeners: function() {
                    var u, t, e, i, r, s = Object.keys(this._events), n = s.length;
                    for (u = 0; n > u; u++) for (r = s[u], i = this._events[r], e = i.length, t = 0; e > t; t++) i.splice(t, 1);
                }
            }, O(j, _, {
                deliverChangeRecords: function() {
                    this.observer.deliverChangeRecords();
                },
                watch: function(u, t) {
                    var e = !1;
                    this.observer.watchers.hasOwnProperty(u) || (e = !0), this.observer.watch(u, P(t, this)), 
                    e && this.observer.fire(u);
                },
                watchGroup: function(u, t) {
                    var e = this;
                    g(u, function(u) {
                        e.watch(u, t);
                    });
                }
            });
            var su = "", Au = function(u) {
                u.deliver();
                for (var t = u.childScopes.length - 1; t >= 0; t--) Au(u.childScopes[t]);
            }, Cu = function(u) {
                return j.prototype.deliverChangeRecords.call(u);
            };
            O(M, j, {
                watch: function(u, t) {
                    if (M.isComplexExpression(u)) {
                        var e, i = M.extractExpressions(u), r = i.identifiers, s = i.allExps.map(function(u) {
                            return u.join(".");
                        });
                        return this.watchGroup(s.concat(r), function() {
                            var i = this.eval(u);
                            t.call(this, i, e), e = p(i);
                        });
                    }
                    return j.prototype.watch.call(this, u, t);
                },
                eval: function(u) {
                    return d(u) ? u(this) : e(u) ? u : au.parse(u)(this);
                },
                clone: function(u, t) {
                    var e;
                    t = t || this, u ? e = new M(t) : (this.ChildScopeClass || (this.ChildScopeClass = M.createChildScopeClass(this)), 
                    e = new this.ChildScopeClass());
                    var i = this.childScopes.length;
                    return this.childScopes[i] = e, e.on("destroy", function() {
                        this.parentScope.childScopes.splice(i, 1);
                    }), e;
                },
                broadcast: function(u, t) {
                    this.parentScope && this.parentScope.broadcast(u, t), this.emit(u, t);
                },
                postDigest: function(u) {
                    return this.postDigestQueue.push(u), this;
                },
                throwError: function() {
                    throw o.apply(this, arguments);
                },
                deliver: function() {
                    try {
                        return Cu(this);
                    } finally {
                        for (;this.postDigestQueue.length; ) try {
                            this.postDigestQueue.shift()();
                        } catch (u) {
                            M.handleError(u);
                        }
                    }
                },
                deliverChangeRecords: function() {
                    for (var u = this.parentScope; u; ) u.deliver(), u = u.parentScope;
                    this.deliver();
                    for (var t = this.childScopes, e = t.length - 1; e >= 0; e--) Au(t[e]);
                    return this;
                },
                apply: function(u) {
                    var t = this.topLevelScope;
                    try {
                        M.beginPhase(t, "apply");
                        try {
                            return this.eval(u);
                        } finally {
                            M.clearPhase(t);
                        }
                    } catch (e) {
                        throw e;
                    } finally {
                        try {
                            this.deliverChangeRecords();
                        } catch (e) {
                            throw e;
                        }
                    }
                    return this;
                },
                destroy: function() {
                    this.emit("destroy");
                }
            }, {
                extractExpressions: function(u) {
                    var t = new Z(), e = new z(t), i = new V(e);
                    return i.find(u) && i;
                },
                isComplexExpression: function(u) {
                    var t, e, i = this.complexTokens.split(su);
                    for (t = i.length - 1; t >= 0; t--) if (e = i[t], u.indexOf(e) > -1) return !0;
                    return !1;
                },
                handleError: function(u) {
                    throw u;
                },
                createChildScopeClass: function(u) {
                    function t() {
                        M.call(this, u);
                    }
                    return t.prototype = u, t;
                },
                beginPhase: function(u, t) {
                    u.phase ? this.throwError("{0} already in progress", u.phase) : u.phase = t;
                },
                clearPhase: function(u) {
                    u.phase = null;
                },
                getTopLevelScope: function(u) {
                    for (var t = u; t && t.parentScope; ) t = t.parentScope;
                    return t;
                },
                complexTokens: "[]()&!`/*+-="
            }), U.prototype = {
                prepare: function() {
                    if (this.node instanceof DocumentFragment == 1 && (this.node = this.node.childNodes), 
                    (this.node instanceof NodeList == 1 || ru(this.node) === !0) && this.node.length > 0) this.compositeLink = new Q(this.node, this.registry, this.options); else if (this.node instanceof Node == 1) {
                        var u = new R(this.node, this.registry, this.options.maxPriority), t = u.scan(), e = u.attributes;
                        this.compositeLink = new uu(this.node, t, e), this.compositeLink.prepare(this.registry), 
                        this.childLink = new U(this.node.childNodes, this.registry, B(p(this.options), {
                            maxPriority: void 0
                        }));
                    }
                },
                execute: function(u, t) {
                    if (this.node instanceof Node == 1) if (this._node) {
                        var e = this.node.parentNode;
                        e && this.node.replaceChild(this._node, this.node), this.node = this._node, this.prepare(), 
                        this._node = this._node.cloneNode(1);
                    } else this._node = this.node.cloneNode(1);
                    this.compositeLink ? this.compositeLink.execute(u, this.childLink, t) : this.childLink && this.childLink.execute(u, t);
                }
            }, R.prototype = {
                isMultiElement: function(u) {
                    var t, e, i, r = 0;
                    if (i = this.registry.$$get(u)) for (t = i.length; t > r; r++) if (e = i[r], e.multiElement) return !0;
                    return !1;
                },
                scan: function() {
                    this.directives.length && (this.directives = []);
                    var u, t, e, i, r, s, n = /^(.+)Start$/, o = this.node, D = o.attributes, a = D && D.length || 0, h = this.normalize(o.nodeName);
                    for (this.add(h, "E"), u = 0; a > u; u++) {
                        h = this.normalize(D[u].name);
                        var c = h.match(n);
                        c && this.isMultiElement(c[1]) && (r = D[u].name, s = D[u].name.substr(0, h.length - 3) + "end", 
                        h = h.substring(0, h.length - 5)), this.interpolate(h, D[u].value), this.attributes[h] = D[u].value, 
                        this.add(h, "A", r, s);
                    }
                    if (o.nodeType == Node.ELEMENT_NODE) for (i = o.className.split(" "), e = i.length, 
                    t = 0; e > t; t++) this.add(this.normalize(i[t]), "C");
                    return this.directives.sort(function(u, t) {
                        var e = t.priority - u.priority;
                        return 0 !== e ? e : u.name !== t.name ? u.name < t.name ? -1 : 1 : u.index - t.index;
                    }), this.directives;
                },
                interpolate: function(u, t) {
                    this.directives.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, i, r) {
                                    var s = new Y(t);
                                    0 !== s.exps.length && (r[u] = s.compile(e), e.watchGroup(s.exps, function() {
                                        r.$set(u, s.compile(e));
                                    }));
                                }
                            };
                        }
                    });
                },
                add: function(u, t, e, i) {
                    var n = this.registry.$$get(u), o = this.maxPriority;
                    if (!n) return null;
                    var D, a, h = n.length;
                    for (D = 0; h > D; D++) a = n[D], -1 !== a.restrict.indexOf(t) && (!r(o) || a.priority > o) ? (e && (a = s(a, {
                        $$start: e,
                        $$end: i
                    })), this.directives.push(a)) : (o = void 0, delete this.maxPriority);
                },
                normalize: function(u) {
                    return v(u);
                }
            };
            var Eu = Eu = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            }, fu = {
                isIdentifierStart: function(u) {
                    return 36 === u || 95 === u || u >= 65 && 90 >= u || u >= 97 && 122 >= u || 92 === u || u >= 128 && Eu.NonAsciiIdentifierStart.test(fu.fromCodePoint(u));
                },
                isWhiteSpace: function(u) {
                    return 32 === u || 9 === u || 11 === u || 12 === u || 160 === u || u >= 5760 && [ 5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279 ].indexOf(u) >= 0;
                },
                isIdentifierPart: function(u) {
                    return 36 === u || 95 === u || u >= 65 && 90 >= u || u >= 97 && 122 >= u || u >= 48 && 57 >= u || 92 === u || u >= 128 && Eu.NonAsciiIdentifierPart.test(fromCodePoint(u));
                }
            }, du = {
                Program: "Program",
                ExpressionStatement: "ExpressionStatement",
                AssignmentExpression: "AssignmentExpression",
                ConditionalExpression: "ConditionalExpression",
                LogicalExpression: "LogicalExpression",
                BinaryExpression: "BinaryExpression",
                UnaryExpression: "UnaryExpression",
                CallExpression: "CallExpression",
                MemberExpression: "MemberExpression",
                Identifier: "Identifier",
                Literal: "Literal",
                ArrayExpression: "ArrayExpression",
                Property: "Property",
                ObjectExpression: "ObjectExpression",
                ThisExpression: "ThisExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral"
            }, mu = {
                BooleanLiteral: 1,
                EOF: 2,
                Identifier: 3,
                Keyword: 4,
                NullLiteral: 5,
                NumericLiteral: 6,
                Punctuator: 7,
                StringLiteral: 8,
                RegularExpression: 9,
                Template: 10
            };
            g(mu, function(u, t) {
                mu[u] = t.replace(/Literal/, "");
            }), B(z, du), z.prototype = {
                ast: function(u) {
                    this.text = u, this.tokens = this.tokenize(this.lexer.lex(this.text)), this.current = null;
                    var t = this.program();
                    return t;
                },
                tokenize: function(u) {
                    var t, e;
                    for (t = 0; t < u.length; t++) e = u[t], (e.type === mu.StringLiteral || e.type === mu.NumericLiteral) && (e.raw = this.text.substring(e.start, e.end));
                    return u;
                },
                throwError: function(u, t) {
                    throw $parseMinErr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.value, u, t.index + 1, this.text, this.text.substring(t.index));
                },
                program: function() {
                    for (var u, t = []; this.tokens.length > 0; ) u = this.expressionStatement(), t.push(u), 
                    this.expect(";");
                    return {
                        type: z.Program,
                        body: t
                    };
                },
                peekToken: function() {
                    if (0 === this.tokens.length) throw new Error("Unexpected end of expression: " + this.text);
                    return this.tokens[0];
                },
                peek: function(u, t, e, i) {
                    return this.peekAhead(0, u, t, e, i);
                },
                peekAhead: function(u, t, e, i, r) {
                    var s, n;
                    return this.tokens.length > u && (s = this.tokens[u], n = s.value, n === t || n === e || n === i || n === r || !t && !e && !i && !r) ? s : !1;
                },
                consume: function(u) {
                    if (0 === this.tokens.length) throw new Error("unexpected end of expression" + this.text);
                    var t = this.expect(u);
                    return t || this.throwError("is unexpected, expecting [" + u + "]", this.peek()), 
                    t;
                },
                expect: function(u, t, e, i) {
                    var r = this.peek(u, t, e, i);
                    return r ? (this.tokens.shift(), r) : !1;
                },
                expressionStatement: function() {
                    return {
                        type: z.ExpressionStatement,
                        expression: this.expression()
                    };
                },
                expression: function() {
                    return this.assignment();
                },
                assignment: function() {
                    var u, t = this.conditional();
                    return (u = this.expect("*=", "/=", "%=", "-=") || this.expect("<<=", ">>=", ">>>=", "&=") || this.expect("^=", "|=", "+=", "=")) && (t = {
                        type: z.AssignmentExpression,
                        left: t,
                        right: this.assignment(),
                        operator: u.value
                    }), t;
                },
                conditional: function() {
                    var u, t, e = this.logicalOR();
                    return this.expect("?") && (u = this.expression(), this.consume(":")) ? (t = this.expression(), 
                    {
                        type: z.ConditionalExpression,
                        test: e,
                        alternate: u,
                        consequent: t
                    }) : e;
                },
                logicalOR: function() {
                    for (var u = this.logicalAND(); this.expect("||"); ) u = {
                        type: z.LogicalExpression,
                        operator: "||",
                        left: u,
                        right: this.logicalAND()
                    };
                    return u;
                },
                logicalAND: function() {
                    for (var u = this.equality(); this.expect("&&"); ) u = {
                        type: z.LogicalExpression,
                        operator: "&&",
                        left: u,
                        right: this.equality()
                    };
                    return u;
                },
                equality: function() {
                    for (var u, t = this.bitwise(); u = this.expect("==", "!=", "===", "!=="); ) t = {
                        type: z.BinaryExpression,
                        operator: u.value,
                        left: t,
                        right: this.bitwise()
                    };
                    return t;
                },
                bitwise: function() {
                    for (var u, t = this.shift(); u = this.expect("&", "^", "|"); ) t = {
                        type: z.BinaryExpression,
                        operator: u.value,
                        left: t,
                        right: this.shift()
                    };
                    return t;
                },
                shift: function() {
                    for (var u, t = this.relational(); u = this.expect("<<", ">>", ">>>"); ) t = {
                        type: z.BinaryExpression,
                        operator: u.value,
                        left: t,
                        right: this.relational()
                    };
                    return t;
                },
                relational: function() {
                    for (var u, t = this.additive(); u = this.expect("<", ">", "<=", ">="); ) t = {
                        type: z.BinaryExpression,
                        operator: u.value,
                        left: t,
                        right: this.additive()
                    };
                    return t;
                },
                additive: function() {
                    for (var u, t = this.multiplicative(); u = this.expect("+", "-"); ) t = {
                        type: z.BinaryExpression,
                        operator: u.value,
                        left: t,
                        right: this.multiplicative()
                    };
                    return t;
                },
                multiplicative: function() {
                    for (var u, t = this.unary(); u = this.expect("*", "/", "%"); ) t = {
                        type: z.BinaryExpression,
                        operator: u.value,
                        left: t,
                        right: this.unary()
                    };
                    return t;
                },
                unary: function() {
                    var u;
                    return (u = this.expect("+", "-", "!")) ? {
                        type: z.UnaryExpression,
                        operator: u.value,
                        prefix: !0,
                        argument: this.unary()
                    } : this.primary();
                },
                primary: function() {
                    var u;
                    this.expect("(") ? (u = this.expression(), this.consume(")")) : this.expect("[") ? u = this.arrayDeclaration() : this.expect("{") ? u = this.object() : this.constants.hasOwnProperty(this.peek().value) ? u = p(this.constants[this.consume().value]) : this.peek().type === mu.Identifier ? u = this.identifier() : this.peek().type === mu.NumericLiteral || this.peek().type === mu.StringLiteral ? u = this.constant() : this.peek().type === mu.Template ? u = this.template() : this.throwError("not a primary expression", this.peek());
                    for (var t; t = this.expect("(", "[", "."); ) "(" === t.value ? (u = {
                        type: z.CallExpression,
                        callee: u,
                        arguments: this.parseArguments()
                    }, this.consume(")")) : "[" === t.value ? (u = {
                        type: z.MemberExpression,
                        object: u,
                        property: this.expression(),
                        computed: !0
                    }, this.consume("]")) : "." === t.value ? u = {
                        type: z.MemberExpression,
                        object: u,
                        property: this.identifier(),
                        computed: !1
                    } : this.throwError("IMPOSSIBLE");
                    return u;
                },
                templateElement: function() {
                    var u = this.consume();
                    return {
                        type: z.TemplateElement,
                        cooked: {
                            value: u.value,
                            raw: u.value
                        },
                        tail: u.tail
                    };
                },
                template: function() {
                    for (var u, t = !1, e = [], i = []; (u = this.peek(), u) && (u.type === mu.Template ? (u.tail && (t = !0), 
                    e.push(this.templateElement())) : i.push(this.expression()), !t); ) ;
                    return {
                        type: z.TemplateLiteral,
                        quasis: e,
                        expressions: i
                    };
                },
                parseArguments: function() {
                    var u = [];
                    if (")" !== this.peek().value) do u.push(this.expression()); while (this.expect(","));
                    return u;
                },
                identifier: function() {
                    var u = this.consume();
                    return u.type !== mu.Identifier && this.throwError("is not a valid identifier", u), 
                    {
                        type: z.Identifier,
                        name: u.value
                    };
                },
                constant: function() {
                    return {
                        type: z.Literal,
                        value: this.consume().raw
                    };
                },
                arrayDeclaration: function() {
                    var u = [];
                    if ("]" !== this.peekToken().text) do {
                        if (this.peek("]")) break;
                        u.push(this.expression());
                    } while (this.expect(","));
                    return this.consume("]"), {
                        type: z.ArrayExpression,
                        elements: u
                    };
                },
                object: function() {
                    var u, t = [];
                    if ("}" !== this.peekToken().value) do {
                        if (this.peek("}")) break;
                        u = {
                            type: z.Property,
                            kind: "init"
                        }, this.peek().type === mu.NumericLiteral ? u.key = this.constant() : this.peek().type === mu.Identifier ? u.key = this.identifier() : this.throwError("invalid key", this.peek()), 
                        this.consume(":"), u.value = this.expression(), t.push(u);
                    } while (this.expect(","));
                    return this.consume("}"), {
                        type: z.ObjectExpression,
                        properties: t
                    };
                },
                constants: {
                    "true": {
                        type: z.Literal,
                        value: !0
                    },
                    "false": {
                        type: z.Literal,
                        value: !1
                    },
                    "null": {
                        type: z.Literal,
                        value: null
                    },
                    undefined: {
                        type: z.Literal,
                        value: void 0
                    },
                    "this": {
                        type: z.ThisExpression
                    }
                }
            }, H.prototype = {
                assignableAST: function(u) {
                    return 1 === u.body.length && q(u.body[0].expression) ? {
                        type: z.AssignmentExpression,
                        left: u.body[0].expression,
                        right: {
                            type: z.NGValueParameter
                        },
                        operator: "="
                    } : void 0;
                },
                compile: function(u, t) {
                    var i, r = this.astBuilder.ast(u), s = "";
                    if (i = this.assignableAST(r)) {
                        this.grammar.setCurrent("assign");
                        var n = this.nextId();
                        this.recurse(i, n, void 0, void 0, !0), this.grammar.return_(n), s += "fn.assign=" + this.generateFunction("assign", "s,v,l") + ";";
                    }
                    this.grammar.setCurrent("fn"), this.recurse(r);
                    var o = "var fn = " + this.generateFunction("fn", "s,l") + ";" + s + "return fn;", D = new Function("plus", "isUndefined", "ifDefined", o)(this.sum, e, G);
                    return this.clear(), D;
                },
                sum: function(u, e) {
                    var i = t(arguments);
                    return h.call(this, i);
                },
                clear: function(u) {
                    this.grammar.clear(u);
                },
                lazyRecurse: function() {
                    var u = this, t = arguments;
                    return function() {
                        u.recurse.apply(u, t);
                    };
                },
                generateFunction: function(u, t) {
                    return this.grammar.generateFunction(u, t);
                },
                nextId: function() {
                    return this.grammar.nextId.apply(this.grammar, arguments);
                },
                id: function(u) {
                    return this.grammar.id(u);
                },
                exec: function(u) {
                    var e = t(arguments).slice(1);
                    return u.apply(this, e), this;
                },
                recurse: function(u, t, e, i, r) {
                    switch (t = t || this.nextId(), i = i || C, u.type) {
                      case z.Program:
                        this.parseProgram(u);
                        break;

                      case z.Literal:
                        this.parseLiteral(u, t, i);
                        break;

                      case z.BinaryExpression:
                        this.parseBinaryExpression(u, t, i, r);
                        break;

                      case z.LogicalExpression:
                        this.parseLogicalExpression(u, t, i, r);
                        break;

                      case z.UnaryExpression:
                        this.parseUnaryExpression(u, t, i, r);
                        break;

                      case z.Identifier:
                        this.parseIdentifier(u, t, e, i, r);
                        break;

                      case z.MemberExpression:
                        this.parseMemberExpression(u, t, e, i, r);
                        break;

                      case z.AssignmentExpression:
                        this.parseAssignmentExpression(u, t, i);
                        break;

                      case z.ConditionalExpression:
                        this.parseConditionalExpression(u, t, i);
                        break;

                      case z.CallExpression:
                        this.parseCallExpression(u, t, i);
                        break;

                      case z.ObjectExpression:
                        this.parseObjectExpression(u, t, i);
                        break;

                      case z.TemplateLiteral:
                        this.parseTemplateLiteral(u, t, i);
                        break;

                      case z.ArrayExpression:
                        this.parseArrayExpression(u, t, i);
                        break;

                      case z.ThisExpression:
                        this.parseThisExpression(u, t, i);
                        break;

                      case z.NGValueParameter:
                        this.grammar.assign(t, "v"), i("v");
                        break;

                      default:
                        throw new Error("no statement for " + u.type);
                    }
                    return t;
                },
                parseUnaryExpression: function(u, t, e) {
                    var i, r;
                    this.recurse(u.argument, void 0, void 0, function(u) {
                        i = u;
                    }), r = u.operator + "(" + this.grammar.ifDefined(i, 0) + ")", this.grammar.assign(t, r), 
                    e(r);
                },
                parseThisExpression: function(u, t, e) {
                    this.grammar.assign(t, "s"), e("s");
                },
                parseArrayExpression: function(u, t, e) {
                    var i, r, s = u.elements;
                    for (this.grammar.assign(t, "new Array(" + s.length + ")"), i = 0; i < s.length; i++) r = this.recurse(s[i]), 
                    this.grammar.assign(t + "[" + i + "]", r);
                    e(t);
                },
                parseTemplateLiteral: function(u, t, e) {
                    var i, r, t, s, n = [], o = [];
                    for (i = 0; i < u.expressions.length; i++) r = u.expressions[i], o.push(this.recurse(r));
                    for (i = 0; i < u.quasis.length && (s = u.quasis[i], !s.tail || m(s.cooked.value) || !isEmpty(s.cooked.value)); i++) n.push(this.grammar.getAsString(this.grammar.escape(s.cooked.value))), 
                    o.length && (r = o.shift(), r = this.grammar.join(this.grammar.join(this.grammar.execute("isNumber", r), this.grammar.execute("String", r), "&&"), r, "||"), 
                    n.push(this.grammar.block(this.grammar.join(r, this.grammar.getAsString(), "||"))));
                    this.grammar.assign(t, n.join("+")), e(t);
                },
                parseObjectExpression: function(u, t, e) {
                    var i, r = [], s = this;
                    g(u.properties, function(u) {
                        s.recurse(u.value, s.nextId(), void 0, function(t) {
                            r.push(s.grammar.escape(u.key.type === z.Identifier ? u.key.name : u.key.value) + ":" + t);
                        });
                    }), i = "{" + r.join(",") + "}", this.grammar.assign(t, i), e(i);
                },
                parseCallExpression: function(u, t, e) {
                    var i, r, s, n = this, o = [], D = this.grammar;
                    i = this.nextId(), r = u.callee, this.recurse(u.callee, i, void 0, function() {
                        D.ifNotNull(i, function() {
                            g(u.arguments, function(u) {
                                n.recurse(u, n.nextId(), function(u) {
                                    o.push(u);
                                });
                            }), s = r.name ? this.member("s", r.name, r.computed) + this.block(o.join(",")) : this.execute(i, o), 
                            this.assign(t, s);
                        }, function() {
                            this.assign(t, "undefined");
                        }), e(t);
                    });
                },
                parseConditionalExpression: function(u, t, e) {
                    this.recurse(u.test, t), this.grammar.if_(t, this.lazyRecurse(u.alternate, t), this.lazyRecurse(u.consequent, t)), 
                    e(t);
                },
                parseBinaryExpression: function(u, t, e, i) {
                    var r, s = this.nextId(), n = this.nextId();
                    this.recurse(u.left, n, void 0, function(u) {
                        n = u;
                    }, i), this.recurse(u.right, s, void 0, function(u) {
                        s = u;
                    }, i), r = "+" === u.operator ? this.grammar.plus(n, s) : "-" === u.operator ? this.grammar.ifDefined(n, 0) + u.operator + this.grammar.ifDefined(s, 0) : this.grammar.block(n) + u.operator + this.grammar.block(s), 
                    this.grammar.assign(t, r), this.exec(e, r);
                },
                parseAssignmentExpression: function(u, t, e) {
                    var i, r = this, s = this.nextId(), n = this.grammar;
                    if (!q(u.left)) throw $parseMinErr("lval", "Trying to assign a value to a non l-value");
                    var o = {};
                    this.recurse(u.left, void 0, o, function(D) {
                        n.ifNotNull("s", function() {
                            r.recurse(u.right, s), i = this.member(o.context, o.name, o.computed) + u.operator + s, 
                            this.assign(t, i), r.exec(e, t || i);
                        });
                    }, 1);
                },
                parseIdentifier: function(u, t, e, i, r) {
                    e && (e.context = "s", e.computed = !1, e.name = u.name), this.grammar.ifNot(this.grammar.getHasOwnProperty("l", u.name), function() {
                        this.if_("s", function() {
                            r && this.ifNot(this.getHasOwnProperty("s", u.name), this.lazyAssign(this.member("s", u.name), "{}")), 
                            this.assign(t, this.member("s", u.name));
                        });
                    }, function() {
                        this.if_(this.getHasOwnProperty("l", u.name), this.lazyAssign(t, this.member("l", u.name)));
                    }), this.exec(i, t);
                },
                parseLogicalExpression: function(u, t, e, i) {
                    var r = this.grammar;
                    this.recurse(u.left, t, void 0, void 0, i), r["&&" === u.operator ? "if_" : "ifNot"](t, this.lazyRecurse(u.right, t)), 
                    this.exec(e, t);
                },
                parseMemberExpression: function(u, t, e, i, r) {
                    var s, n, o = this, D = (this.grammar, e && (e.context = this.nextId()) || this.nextId());
                    this.recurse(u.object, D, void 0, function(a) {
                        var h = this.grammar;
                        h.ifNotNull(D, function() {
                            u.computed ? (n = this.nextId(), o.recurse(u.property, n), r && this.ifNot(this.computedMember(D, n), this.lazyAssign(this.computedMember(D, n), "{}")), 
                            s = this.computedMember(D, n), this.assign(t, s), e && (e.computed = !0, e.name = n)) : (r && this.ifNot(this.join(D, D + '.hasOwnProperty("' + u.property.name + '")', "&&"), this.lazyAssign(this.nonComputedMember(D, u.property.name), "{}")), 
                            s = h.nonComputedMember(D, u.property.name), this.assign(t, s), e && (e.computed = !1, 
                            e.name = u.property.name));
                        }, function() {
                            this.assign(t, "undefined");
                        }), this.exec(i, t);
                    }, !!r);
                },
                parseLiteral: function(u, t, e) {
                    var i = p(u.value);
                    this.grammar.assign(t, i), this.exec(e, i);
                },
                parseProgram: function(u, t) {
                    var e, i = this.grammar;
                    t = t || P(this.recurse, this), g(u.body, function(r, s) {
                        t(r.expression, void 0, void 0, function(u) {
                            e = u;
                        }), s !== u.body.length - 1 ? i.current().body.push(e, ";") : i.return_(e);
                    });
                }
            }, V.prototype = {
                nextId: function() {
                    return ++this.id;
                },
                find: function(u) {
                    var t, e, i, r = this.astBuilder.ast(u);
                    return this.objects = i = {}, this.computeds = t = {}, this.expressions = e = {}, 
                    this.identifiers = [], this.recurse(r), g(this.expressions, function(u, i) {
                        t[i] && u.length || (delete t[i], delete e[i]);
                    }), this.exps = y(this.expressions, function(u, t) {
                        var e = u.join("."), r = {
                            property: !0,
                            exp: e
                        };
                        return i[t] && i[t].join(".") === e && (r.property = !1), r;
                    }), this.allExps = F(this.expressions);
                },
                parseProgram: function(u) {
                    var t = this;
                    g(u.body, function(u) {
                        t.recurse(u.expression);
                    });
                },
                parseMemberExpression: function(u, t, e) {
                    var i, r = this.expressions[t];
                    u.hasOwnProperty("object") && u.object.name && this.objects[t].push(u.object.name), 
                    this.recurse(u.object, t, function() {
                        u.computed ? (i = this.nextId(), this.computeds[i] = !0, this.recurse(u.property, i)) : r.push(u.property.name), 
                        e(t);
                    });
                },
                parseBinaryExpression: function(u, t, e) {
                    var i = this.nextId(), r = this.nextId(), s = this.computeds;
                    this.recurse(u.left, i, function() {
                        this.recurse(u.right, r), g(this.expressions, function(u, t) {
                            (t == r || t == i) && (s[t] = !0);
                        }), e(t);
                    });
                },
                parseLogicalExpression: function(u, t, e) {
                    this.recurse(u.left), this.recurse(u.right);
                },
                parseIdentifier: function(u, t, e) {
                    this.identifiers.push(u.name), this.expressions[t].push(u.name), e(t);
                },
                parseTemplateLiteral: function(u, t, e) {
                    var i, r = this;
                    g(u.expressions, function(u) {
                        i = r.nextId(), r.computeds[i] = !0, r.recurse(u, i);
                    }), e(t);
                },
                parseArrayExpression: function(u, t, e) {
                    console.log(u);
                },
                recurse: function(u, t, e) {
                    switch (t = t || this.nextId(), e = e && P(e, this) || C, this.expressions.hasOwnProperty(t) || (this.expressions[t] = []), 
                    this.objects.hasOwnProperty(t) || (this.objects[t] = []), u.type) {
                      case z.CallExpression:
                      case z.ArrayExpression:
                      case z.Literal:
                        e(t);
                        break;

                      case z.TemplateLiteral:
                        this.parseTemplateLiteral(u, t, e);
                        break;

                      case z.LogicalExpression:
                        this.parseLogicalExpression(u, t, e);
                        break;

                      case z.BinaryExpression:
                        this.parseBinaryExpression(u, t, e);
                        break;

                      case z.MemberExpression:
                        this.parseMemberExpression(u, t, e);
                        break;

                      case z.Program:
                        this.parseProgram(u);
                        break;

                      case z.Identifier:
                        this.parseIdentifier(u, t, e);
                        break;

                      default:
                        throw new Error("there is no statement for " + u.type);
                    }
                }
            }, X.prototype = {
                $set: function(u, t) {
                    this[u] = t;
                    var e = this.$$normalize(u);
                    this.$$node instanceof Node == 1 && this.$$node.setAttribute(e, t), this.$$fire(u);
                },
                $$fire: function(u) {
                    if (this.$$observers.hasOwnProperty(u)) {
                        var t = 0, e = this.$$observers[u].length;
                        if (e > 0) {
                            for (;e > t; t++) this.$$observers[u][t](this[u]);
                            this.$$observers[u].$$called++;
                        }
                    }
                },
                $$normalize: function(u) {
                    return b(u);
                },
                $observe: function(u, t) {
                    var i = this;
                    return this.$$observers.hasOwnProperty(u) || (this.$$observers[u] = [], this.$$observers[u].$$called = 0), 
                    this.$$observers[u].push(t), setTimeout(function() {
                        i.$$observers[u].$$called < 1 && i.hasOwnProperty(u) && !e(i[u]) && i.$$fire(u);
                    }), function() {
                        return i.$$removeObserver(u, t);
                    };
                },
                $$removeObserver: function(u, t) {
                    if (this.$$observers.hasOwnProperty(u)) {
                        for (var e = 0, i = this.$$observers[u].length; i > e; e++) this.$$observers[u][e] == t && this.$$observers[u].splice(e, 1);
                        return !0;
                    }
                    return !1;
                }
            }, Q.prototype = {
                execute: function(u, t, e) {
                    var i, r = this.nodeLinks.length;
                    for (i = 0; r > i; i++) this.nodeLinks[i].execute(u, this.nodeLinks[++i], e);
                }
            }, K.prototype = {
                nextId: function(u, t) {
                    var e = "v" + this.nextId_++;
                    return u || this.current().vars.push(e + (t ? "=" + t : "")), e;
                },
                assign: function(u, t) {
                    return u ? (this.current().body.push(u, "=", t, ";"), u) : void 0;
                },
                setCurrent: function(u) {
                    return this.state.hasOwnProperty(u) || this.createSection(u), this.current_ = u, 
                    this;
                },
                createSection: function(u) {
                    return this.state[u] = {
                        body: [],
                        vars: [],
                        own: {},
                        nextId: 0
                    }, this;
                },
                body: function(u) {
                    return this.state[u].body.join("");
                },
                current: function() {
                    return this.state[this.current_];
                },
                varsPrefix: function(u) {
                    return this.state[u].vars.length ? "var " + this.state[u].vars.join(",") + ";" : "";
                },
                exec: function(u) {
                    var e = t(arguments).slice(1);
                    return u.apply(this, e), this;
                },
                nonComputedMember: function(u, t) {
                    return u + "." + t;
                },
                computedMember: function(u, t) {
                    return u + "[" + t + "]";
                },
                member: function(u, t, e) {
                    return e ? this.computedMember(u, t) : this.nonComputedMember(u, t);
                },
                not: function(u) {
                    return "!" + this.block(u);
                },
                notNull: function(u) {
                    return u + "!=null";
                },
                ifNot: function(u, t, e) {
                    return this.if_(this.not(u), t, e);
                },
                ifNotNull: function(u, t, e) {
                    return this.if_(this.notNull(u), t, e), this;
                },
                ifIsDefined: function(u, t, e) {
                    return this.if_(this.join(this.notNull(u), "&&"), t, e);
                },
                if_: function(u, t, e) {
                    var i = this.current().body;
                    i.push("if(", u, "){"), this.exec(t, u), i.push("}"), e && (i.push("else{"), this.exec(e, u), 
                    i.push("}"));
                },
                return_: function(u) {
                    this.current().body.push("return ", u, ";");
                },
                escape: function(u) {
                    return escape(u);
                },
                join: function() {
                    var u = t(arguments), e = u.slice(-1)[0];
                    return u.slice(0, u.length - 1).join(e);
                },
                getHasOwnProperty: function(u, t) {
                    var e = u + "." + t, i = this.current().own;
                    return i.hasOwnProperty(e) || (i[e] = this.nextId(!1, this.join(u, this.block(this.member(u, this.execute("hasOwnProperty", '"' + this.escape(t) + '"'))), "&&"))), 
                    i[e];
                },
                block: function(u, t, e) {
                    return t = t || "(", e = e || ")", t + u + e;
                },
                execute: function(u) {
                    var e = t(arguments).slice(1);
                    return 1 === e.length && ru(e[0]) && (e = e[0]), u + this.block(e.join(","));
                },
                plus: function(u, t) {
                    return this.execute("plus", u, t);
                },
                ifDefined: function(u, t) {
                    return this.execute("ifDefined", u, this.escape(t));
                },
                ifIsUndefined: function(u) {
                    return this.execute("isUndefined", u);
                },
                generateFunction: function(u, t) {
                    return t || (t = ""), "function(" + t + "){" + this.varsPrefix(u) + this.body(u) + "}";
                },
                id: function(u, t, e) {
                    return u || this.nextId(t, e);
                },
                lazyAssign: function(u, t) {
                    var e = this;
                    return function() {
                        e.assign(u, t);
                    };
                },
                push: function() {
                    var u = t(arguments), e = this.current().body;
                    return e.push.apply(e, u);
                },
                getAsString: function(u) {
                    return '"' + (u || "") + '"';
                },
                clear: function(u) {
                    var t = this;
                    return u ? (this.state.hasOwnProperty(u) && delete this.state[u], void this.setCurrent(u)) : (g(this.state, function(u, e) {
                        t.clear(e);
                    }), this);
                }
            }, B(Y, {
                startSymbol: "{{",
                endSymbol: "}}"
            }), Y.prototype = {
                parse: function(u) {
                    return au.parse(u);
                },
                compute: function(u) {
                    for (var t = this.exps, e = this.concat, i = this.expressionPositions, r = 0, s = t.length; s > r; r++) e[i[r]] = u[r];
                    return e.join("");
                },
                compile: function(u) {
                    for (var t = 0, e = this.exps.length, i = new Array(e); e > t; t++) i[t] = this.parseFns[t](u);
                    return this.compute(i);
                }
            }, Z.prototype = {
                lex: function(u) {
                    this.index = 0, this.text = u, this.length = this.text.length, this._scanning = !1, 
                    this.tokens = [], this.curlyStack = [];
                    for (var t; !this.eof(); ) t = this.text.charCodeAt(this.index), this.isWhiteSpace(t) ? ++this.index : this.isIdentifierStart(t) ? this.scanIdentifier() : 40 === t || 41 === t || 59 === t ? this.scanPunctuator() : 39 === t || 34 === t ? this.scanStringLiteral() : 46 === t ? this.isDecimalDigit(this.text.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : this.isDecimalDigit(t) ? this.scanNumericLiteral() : 96 === t || 125 === t && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : this.scanPunctuator();
                    return this.tokens;
                },
                throwUnexpectedToken: function() {
                    throw new Error("Column " + this.index + ": Unexpected token " + this.text[this.index]);
                },
                isDecimalDigit: function(u) {
                    return u >= 48 && 57 >= u;
                },
                isIdentifierPart: function(u) {
                    return fu.isIdentifierPart(u);
                },
                isOctalDigit: function(u) {
                    return u >= 48 && 55 >= u;
                },
                getIdentifier: function() {
                    for (var u, t = this.index++; !this.eof(); ) {
                        if (u = this.text.charCodeAt(this.index), 92 === u) return this.index = t, this.getComplexIdentifier();
                        if (u >= 55296 && 57343 > u) return this.index = t, this.getComplexIdentifier();
                        if (!this.isIdentifierPart(u)) break;
                        ++this.index;
                    }
                    return this.text.slice(t, this.index);
                },
                scanTemplate: function() {
                    var u, t = "", e = !1, i = this.index, r = "`" === this.text[i], s = !1, n = 2;
                    for (++this.index; !this.eof(); ) {
                        if (u = this.text[this.index++], "`" === u) {
                            n = 1, s = !0, e = !0;
                            break;
                        }
                        if ("$" === u) {
                            if ("{" === this.text[this.index]) {
                                this.curlyStack.push("${"), ++this.index, e = !0;
                                break;
                            }
                            t += u;
                        } else t += u;
                    }
                    e || this.throwUnexpectedToken(), r || this.curlyStack.pop(), this.tokens.push({
                        type: mu.Template,
                        value: t,
                        start: i,
                        tail: s,
                        head: r,
                        end: this.index
                    });
                },
                scanNumericLiteral: function() {
                    var u;
                    u = this.text[this.index], this.assert(this.isDecimalDigit(u.charCodeAt(0)) || "." === u, "Numeric literal must start with a decimal digit or a decimal point");
                    var t = this.index, e = "";
                    if ("." !== u) {
                        if (e = this.text[this.index++], u = this.text[this.index], "0" === e) {
                            if ("x" === u || "X" === u) return ++this.index, this.scanHexLiteral(t);
                            if ("b" === u || "B" === u) return ++this.index, this.scanBinaryLiteral(t);
                            if ("o" === u || "O" === u) return this.scanOctalLiteral(u, t);
                            if (this.isOctalDigit(u) && this.isImplicitOctalLiteral()) return this.scanOctalLiteral(u, t);
                        }
                        for (;this.isDecimalDigit(this.text.charCodeAt(this.index)); ) e += this.text[this.index++];
                        u = this.text[this.index];
                    }
                    if ("." === u) {
                        for (e += this.text[this.index++]; this.isDecimalDigit(this.text.charCodeAt(this.index)); ) e += this.text[this.index++];
                        u = this.text[this.index];
                    }
                    if ("e" === u || "E" === u) if (e += this.text[this.index++], u = this.text[this.index], 
                    ("+" === u || "-" === u) && (e += this.text[this.index++]), this.isDecimalDigit(this.text.charCodeAt(this.index))) for (;this.isDecimalDigit(this.text.charCodeAt(this.index)); ) e += this.text[this.index++]; else this.throwUnexpectedToken();
                    this.isIdentifierPart(this.text.charCodeAt(this.index)) && this.throwUnexpectedToken(), 
                    this.tokens.push({
                        type: mu.NumericLiteral,
                        value: parseFloat(e),
                        start: t,
                        end: this.index
                    });
                },
                scanIdentifier: function() {
                    var u, t, e = this.index;
                    u = 92 === this.text.charCodeAt(this.index) ? this.getComplexIdentifier() : this.getIdentifier(), 
                    t = 1 === u.length ? mu.Identifier : "null" === u ? mu.NullLiteral : "true" === u || "false" === u ? mu.BooleanLiteral : mu.Identifier, 
                    this.tokens.push({
                        type: t,
                        value: u,
                        start: e,
                        end: this.index
                    });
                },
                assert: function(u, t) {
                    if (!u) throw new Error("ASSERT: " + t);
                },
                eof: function() {
                    return this.index >= this.length;
                },
                isWhiteSpace: function(u) {
                    return fu.isWhiteSpace(u);
                },
                isIdentifierStart: function(u) {
                    return fu.isIdentifierStart(u);
                },
                scanPunctuator: function() {
                    var u = {
                        type: mu.Punctuator,
                        value: "",
                        start: this.index,
                        end: this.index
                    }, t = this.text[this.index];
                    switch (t) {
                      case "{":
                        "{" === t && this.curlyStack.push(t), ++this.index;
                        break;

                      case "}":
                        ++this.index, this.curlyStack.pop();
                        break;

                      case ".":
                        ++this.index, "." === this.text[this.index] && "." === this.text[this.index + 1] && (this.index += 2, 
                        t = "...");
                        break;

                      case "(":
                      case ")":
                      case ";":
                      case ",":
                      case "[":
                      case "]":
                      case ":":
                      case "?":
                      case "~":
                        ++this.index;
                        break;

                      default:
                        t = this.text.substr(this.index, 4), ">>>=" === t ? this.index += 4 : (t = t.substr(0, 3), 
                        "===" === t || "!==" === t || ">>>" === t || "<<=" === t || ">>=" === t ? this.index += 3 : (t = t.substr(0, 2), 
                        "&&" === t || "||" === t || "==" === t || "!=" === t || "+=" === t || "-=" === t || "*=" === t || "/=" === t || "++" === t || "--" === t || "<<" === t || ">>" === t || "&=" === t || "|=" === t || "^=" === t || "%=" === t || "<=" === t || ">=" === t || "=>" === t ? this.index += 2 : (t = this.text[this.index], 
                        "<>=!+-*%&|^/".indexOf(t) >= 0 && ++this.index)));
                    }
                    this.index === u.start && this.throwUnexpectedToken(), u.end = this.index, u.value = t, 
                    this.tokens.push(u);
                },
                scanStringLiteral: function() {
                    const u = this.index;
                    var t = this.text[u];
                    this.assert("'" === t || '"' === t, "String literal must starts with a quote"), 
                    ++this.index;
                    for (var e, i = !1, r = ""; !this.eof(); ) {
                        if (e = this.text[this.index++], e === t) {
                            t = "";
                            break;
                        }
                        r += e;
                    }
                    "" !== t && this.throwUnexpectedToken(), this.tokens.push({
                        type: mu.StringLiteral,
                        value: r,
                        octal: i,
                        start: u,
                        end: this.index
                    });
                },
                scanning: function(u) {
                    return this._scanning = u || !this._scanning, this;
                }
            }, J.prototype = {
                _classList: {
                    add: function() {
                        return this.exec("classList.add", arguments);
                    },
                    remove: function() {
                        return this.exec("classList.remove", arguments);
                    },
                    contains: function() {
                        return this.exec("classList.contains", arguments);
                    }
                },
                exec: function(u, t) {
                    for (var e, i, r, s, n, o, D = 0; D < this.nodeList.length; D++) i = this.nodeList[D], 
                    u.indexOf(".") > -1 ? (e = A(i, u), r = u.split("."), n = A(i, c(r.slice(-2)))) : (e = i[u], 
                    n = i), s = (o = e.apply(n, t)) ? o : null;
                    return s;
                },
                setAttribute: function() {
                    return this.exec("setAttribute", arguments);
                },
                getAttribute: function(u, t) {
                    for (var e = 0; e < this.nodeList.length; e++) if (this.nodeList[e].hasAttribute(u)) return this.nodeList[e].getAttribute(u);
                }
            }, B(uu, {
                SCOPE_CHILD: 1,
                SCOPE_ISOLATED: 2
            }), uu.prototype = {
                constructor: uu,
                group: function(u, t) {
                    var e = this.node, i = [], r = 0;
                    if (u && e.hasAttribute && e.hasAttribute(u)) {
                        do {
                            if (!e) throw $compileMinErr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", u, t);
                            e.nodeType == Node.ELEMENT_NODE && (e.hasAttribute(u) && r++, e.hasAttribute(t) && r--), 
                            i.push(e), e = e.nextSibling;
                        } while (r > 0);
                    } else i.push(e);
                    return new J(i);
                },
                prepare: function(u) {
                    var t, e, r, s, o, D, a = this.directives.length, h = this.context;
                    for (t = 0; a > t && (o = this.directives[t], !(this.terminalPriority > o.priority)); t++) {
                        if (s = o.$$start, r = o.$$end, s && (this.node = this.group(s, r)), o.hasOwnProperty("scope") && o.scope) {
                            if (E(o.scope)) {
                                if (this.scope) throw new Error("You can't define a new isolated scope on a node that already has a child scope defined");
                                D = uu.SCOPE_ISOLATED;
                            } else i(o.scope) && (D = uu.SCOPE_CHILD);
                            this.scope = {
                                type: D,
                                bindings: o.scope
                            };
                        }
                        o.controller && (h.controllers = h.controllers || {}, h.controllers[o.name] = o), 
                        !o.transclude && o.template && (o.transclude = !0), o.transclude && ("element" == o.transclude && (this.terminalPriority = o.priority), 
                        e = {
                            type: o.transclude,
                            registry: u,
                            directive: o,
                            attributes: this.attributes,
                            controllers: h.controllers,
                            terminalPriority: this.terminalPriority
                        }, this.transclude = new iu(this.node, e), "element" == o.transclude && this.node !== this.transclude.comment && (this.node = this.transclude.comment), 
                        this.transcludeFn = this.transclude.getTranscludeCallback()), o.template && (ru(o.template) && (o.template = n(o.template, "")), 
                        this.node.innerHTML = o.template, this.hasTemplate = !0), this.addLink(o.compile(this.node, this.attributes, this.transcludeFn), o), 
                        o.terminal && (this.terminal = !0, this.terminalPriority = Math.max(this.terminalPriority, o.priority));
                    }
                },
                REQUIRE_PREFIX_REGEXP: /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                getControllers: function(u, t, e, i) {
                    var r;
                    if (f(e)) {
                        var s = e.match(this.REQUIRE_PREFIX_REGEXP), n = e.substring(s[0].length), o = s[1] || s[3], D = "?" === s[2];
                        if ("^^" === o ? $element = $element.parentNode : (r = i && i[n], r = r && r.instance), 
                        !r) {
                            var a = "$" + n + "Controller";
                            r = o ? N(t, a) : $(t, a);
                        }
                        if (!r && !D) throw new Error("Controller '" + n + "', required by directive '" + u + "', can't be found!");
                    } else if (ru(e)) {
                        r = [];
                        for (var h = 0, c = e.length; c > h; h++) r[h] = this.getControllers(u, t, e[h], i);
                    }
                    return r || null;
                },
                instantiate: function(u, t, e, i, r) {
                    return new u(t, e, i, r);
                },
                setupControllers: function(u, t, e, i) {
                    var r, s, n, o = Object.keys(this.context.controllers), D = {};
                    for (r = 0; r < o.length; r++) s = this.context.controllers[o[r]], d(s.controller) && (n = this.instantiate(s.controller, u, t, e, i), 
                    D[s.name] = n, $(t, "$" + s.name + "Controller", D[s.name]));
                    return D;
                },
                parse: function(u) {
                    return new eu(new Z()).parse(u);
                },
                directiveBindings: function(u, t, e) {
                    var i = Object.keys(e), r = (i.length, this.attributes);
                    g(e, function(i, s) {
                        var n, o, D, h;
                        switch (i = e[s], i.length > 1 ? (n = i.substring(1), i = i[0]) : n = s, i) {
                          case "@":
                            r.$observe(n, function(u) {
                                f(u) && (t[s] = u);
                            }), f(r[n]) && (t[s] = new Y(r[n]).compile(u));
                            break;

                          case "=":
                            if (!r.hasOwnProperty(n)) break;
                            o = this.parse(r[n]), D = o.assign, h = t[s] = o(u);
                            var c = function(e) {
                                return a(e, t[s]) || (a(e, h) ? D(u, e = t[s]) : t[s] = e), h = e;
                            };
                            u.watch(r[n], c), t.watch(s, function(t) {
                                c(A(u, r[n]));
                            });
                        }
                    }, this);
                },
                callLink: function(u, t, e) {
                    return u(t, this.node, this.attributes, this.getControllers(u.directiveName, this.node, u.require, this.controllers), e), 
                    this;
                },
                execute: function(u, t, e) {
                    var i;
                    if (this.transclude ? this.transcludeFn = this.transclude.getTranscludeCallback(u) : !this.transcludeFn && d(e) && (this.transcludeFn = e), 
                    this.scope) switch (this.scope.type) {
                      case uu.SCOPE_CHILD:
                        i = u.clone();
                        break;

                      case uu.SCOPE_ISOLATED:
                        i = u.clone(!0), this.directiveBindings(u, i, this.scope.bindings);
                    } else i || (i = u);
                    this.context.controllers && (this.controllers = this.setupControllers(i, this.node, this.attributes, e));
                    for (var r, s = 0, n = this.links, o = n.pre.length; o > s; s++) r = n.pre[s], this.callLink(r, r.newScopeType ? i : u, this.transcludeFn);
                    for (t.execute(u, this.transcludeFn), s = n.post.length - 1; s >= 0; s--) r = n.post[s], 
                    this.callLink(r, r.newScopeType ? i : u, this.transcludeFn);
                },
                addLink: function(u, t) {
                    var e = this.links, i = {
                        directiveName: t.name,
                        require: t.require,
                        newScopeType: r(t.scope)
                    };
                    E(u) ? g(u, function(u, t) {
                        B(u, i), e.hasOwnProperty(t) && e[t].push(u);
                    }) : d(u) && (B(u, i), e.post.push(u));
                }
            }, tu.prototype = {
                deliverChangeRecords: function() {
                    var u, t, e, i, r, s, n = Object.keys(this.watchers);
                    for (u = 0, t = n.length; t > u; u++) e = n[u], i = A(this.object, e), r = this.watchers[e], 
                    s = r.oldValue, E(i) ? a(i, s) || this.fire(e) : i != s && this.fire(e), r.oldValue = p(i);
                },
                watch: function(u, t) {
                    var e, i;
                    this.watchers.hasOwnProperty(u) ? e = this.watchers[u] : this.watchers[u] = e = {
                        path: u,
                        oldValue: void 0,
                        listeners: []
                    }, i = e.listeners, i.push(t);
                },
                fire: function(u) {
                    var t, e, i = this.watchers[u], r = i.listeners;
                    for (t = 0, e = r.length; e > t; t++) r[t](A(this.object, i.path), i.oldValue);
                    return this;
                }
            }, eu.prototype = {
                constructor: eu,
                parse: function(u) {
                    return this.astCompiler.compile(u);
                }
            }, iu.prototype = {
                getTranscludeCallback: function(u) {
                    var t = this, e = this.slots, i = this.registry, r = this.compileOptions;
                    return function(s, n, o) {
                        d(s) && (n = s, s = u.clone());
                        var D = f(o) ? e[o] : t.clone, a = D.cloneNode(1), h = new U(a, i, r);
                        n(a), h.execute(s);
                    };
                }
            };
        }(window);
    }(window, window), function(window, global) {
        !function() {
            function t(t) {
                var n = a(c(t), i);
                return r(n[1]);
            }
            function r(t) {
                for (var r = t.split(o), n = [], i = r.length; i--; ) r[i].replace(e, function(t, r, e) {
                    n[i] = e;
                });
                return n;
            }
            function n(t, r) {
                this.path = [], this.cache = r || {}, this.pending = t || {};
            }
            var e = /^\s*(_?)(\S+?)\1\s*$/, i = /^[^\(]*\(\s*([^\)]*)\)/m, o = /,/, c = function(t) {
                return t.toString();
            }, a = function(t, r) {
                return t.match(r);
            };
            n.extractArgs = r, n.extractDeps = t, n.annotate = function(t) {
                return this.extractDeps(t).concat(t);
            };
            var h = {}, s = "injector";
            n.prototype = {
                has: function(t) {
                    return this.pending.hasOwnProperty(t) || this.cache.hasOwnProperty(t);
                },
                get: function(t) {
                    if (t == s) return this;
                    var r = this.path, n = this.cache, e = this.pending;
                    if (n.hasOwnProperty(t)) {
                        if (n[t] === h) throw new Error("Circular dependency found: " + t + " <- " + r.join(" <- "));
                        return n[t];
                    }
                    if (!e.hasOwnProperty(t)) throw new Error('Service "' + t + '" not found');
                    try {
                        return r.unshift(t), n[t] = h, n[t] = this.invoke(e[t]);
                    } catch (i) {
                        throw n[t] === h && delete n[t], i;
                    } finally {
                        r.shift();
                    }
                },
                invoke: function(r) {
                    var n, e;
                    if (Array.isArray(r)) {
                        if (n = r, "function" != typeof (r = r.pop())) throw new Error("The last item of the array must be the service factory");
                    } else n = Array.isArray(r.$inject) ? r.$inject : t(r);
                    for (e = n.length; e--; ) n[e] = this.get(n[e]);
                    return r.apply(null, n);
                }
            }, window.injector = {
                Injector: n
            };
        }();
    }(window, window), function(window, global) {
        !function(e) {
            function t(e) {
                return function() {
                    var t = i(arguments), o = this.blocks[e];
                    return o.push.apply(o, t), this;
                };
            }
            function o(e, t) {
                this.blocks = {
                    services: [],
                    config: [],
                    run: []
                }, this.name = e, this.dependencies = t;
            }
            function n(e) {
                this.loaded = [], this.modules = {}, this.injector = e;
            }
            var r = window.injector.Injector, i = function(e) {
                return Array.prototype.slice.call(e);
            };
            o.SERVICE = "services", o.CONFIG = "config", o.RUN = "run", o.prototype = {
                service: t("services"),
                config: t("config"),
                run: t("run"),
                boot: function(e) {
                    if (this.blocks, e instanceof r != 1) throw new Error("The injector must be an instance of Injector");
                    this.injector = e, this.execute("services");
                },
                execute: function() {
                    var e, t, o, n = i(arguments);
                    for (e = n.length - 1; e >= 0; e--) o = n[e], t = {}, t[o] = this.blocks[o], t[o] = this._blocks(t);
                    return t;
                },
                _blocks: function(e) {
                    for (var t = Object.keys(e), o = 0; o < t.length; o++) this._block(t[o], e[t[o]]);
                    return this;
                },
                _block: function(e, t) {
                    for (var n, i, s = t.length - 1; s >= 0; s--) {
                        if (i = t[s], n = r.extractDeps(i), n.length > 0) for (var c, h, u = 0; u < n.length; u++) c = n[u], 
                        (h = t.indexOf(c)) > -1 && (this.injector.pending[t[h]] = t[++h]);
                        switch (e) {
                          case o.SERVICE:
                            this.injector.pending[t[--s]] = i;
                            break;

                          default:
                            this.injector.invoke(i);
                        }
                    }
                }
            }, n.prototype = {
                register: function(e, t) {
                    if (t) {
                        if (this.modules.hasOwnProperty(e)) throw new Error('Error while trying to redefine "' + e + '"');
                        return this.modules[e] = new o(e, t);
                    }
                    if (this.modules.hasOwnProperty(e)) return this.modules[e];
                    throw new Error('Module "' + e + '" does not exists');
                },
                load: function(e, t) {
                    t = t || [];
                    var o, n = e.name, r = e.dependencies;
                    t.push(n), e.boot(this.injector), this.loaded.push(e);
                    for (var i = 0; i < r.length; i++) {
                        if (!this.modules.hasOwnProperty(r[i])) throw new Error('Module "' + r[i] + '" does not exists as a dependency of "' + n + '"');
                        if (o = this.modules[r[i]], t.indexOf(o.name) > -1) throw new Error("Circular dependency found: " + t.join(" <- ") + " <- " + o.name);
                        this.load(o, t);
                    }
                    t.pop();
                },
                bootstrap: function(e) {
                    var t, o = this.loaded;
                    this.load(this.register(e));
                    for (var n = o.length - 1; n >= 0; n--) t = o[n], t.execute("config");
                    for (var n = o.length - 1; n >= 0; n--) t = o[n], t.execute("run");
                }
            };
            var s = {}, c = {};
            e.moduleloader = new n(new injector.Injector(s, c)), e.moduleloader.Module = o, 
            e.moduleloader.ModuleLoader = n;
        }(window);
    }(window, window), function(window, global) {
        !function() {
            function e(e) {
                return function() {
                    return e;
                };
            }
            function r(e, r, n) {
                var t;
                if (v(e)) for (o = 0, t = e.length; t > o; o++) r.call(n, e[o], o, e); else {
                    var o, i, u, c = Object.keys(e), a = c.length;
                    for (o = 0; a > o; o++) i = c[o], u = e[i], r.call(n, u, i, e);
                }
                return e;
            }
            function n(e) {
                return "function" == typeof e;
            }
            function t() {
                return e();
            }
            function o(e) {
                return null !== e && "object" == typeof e;
            }
            function i(e) {
                e || (e = {});
                var r, n, t, i, a, f, l, s = u(arguments).slice(1).filter(c), d = s.length;
                for (f = 0; d > f; f++) if ((r = s[f]) && o(r)) for (t = Object.keys(r), a = t.length, 
                l = 0; a > l; l++) i = t[l], n = r[i], e[i] = n;
                return e;
            }
            function u(e) {
                return Array.prototype.slice.apply(e);
            }
            function c(e) {
                return a(e) === !1;
            }
            function a(e) {
                return "undefined" == typeof e;
            }
            function f(e, r) {
                var n, t, o, i = Object.keys(r), u = i.length;
                for (n = 0; u > n; n++) t = i[n], o = r[t], e.hasOwnProperty(t) || (e[t] = o);
            }
            function l(e, r) {
                return function() {
                    return e.apply(r, arguments);
                };
            }
            function s(e) {
                this.injector = e;
            }
            function d(e) {
                var r = new O(e, j);
                return function(e) {
                    return r.execute(e);
                };
            }
            function p(e, r) {
                y[e] = r;
            }
            var v = Array.isArray;
            s.prototype = {
                $$get: function(e) {
                    return e += "Directive", this.injector.has(e) ? this.injector.get(e) : void 0;
                }
            };
            var h = window.injector.Injector, y = {}, m = {}, g = new h(y, m), j = new s(g), k = renderer.bootstrap, w = renderer._registry;
            renderer._registry = j;
            var b = new moduleloader.ModuleLoader(g);
            m.compile = renderer.compile = d, renderer.module = function(e, r) {
                var n = b.register.apply(b, arguments);
                return n.invoke || (n.invoke = function(e) {
                    return g.invoke(e);
                }), n;
            }, renderer.bootstrap = function(e, r) {
                b.bootstrap(r), k(e);
            }, renderer.injector = g, renderer.moduleLoader = b;
            var O = renderer.Compile, A = {}, $ = moduleloader.Module;
            $.prototype.directive = renderer.register = function(u, c) {
                var a = this, s = this && this.service && l(this.service, this) || p;
                return A.hasOwnProperty(u) || (A[u] = [], s(u + "Directive", function() {
                    var c, l, s, d = [];
                    return r(A[u], function(r, p) {
                        c = (a.invoke || renderer.injector.invoke)(r), l = {}, n(c) ? l.compile = e(c) : !c.compile && c.link ? l.compile = e(c.link) : c.compile || c.link || (c.compile = t), 
                        o(c) && i(l, c), f(l, {
                            priority: 0,
                            index: p,
                            name: u,
                            restrict: "EA"
                        }), f(l, {
                            require: l.controller && l.name
                        }), s = i(l, {
                            name: u
                        }), d.push(s);
                    }), d;
                })), A[u].push(c), this;
            };
            var x = Object.keys(w);
            x.forEach(function(e) {
                var r = w[e];
                "$$get" === e || r.executed || r.directives.forEach(function(r) {
                    renderer.register(e, r);
                });
            }), window.moduleloader.ModuleLoader;
        }();
    }(window, window);
}(window, window);