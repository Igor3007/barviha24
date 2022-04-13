// @fancyapps/ui/Fancybox v4.0.7
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, n)
        }
        return i
    }

    function i(t) {
        for (var i = 1; i < arguments.length; i++) {
            var n = null != arguments[i] ? arguments[i] : {};
            i % 2 ? e(Object(n), !0).forEach((function (e) {
                r(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function s(t, e, i) {
        return e && a(t.prototype, e), i && a(t, i), t
    }

    function r(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function l(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && h(t, e)
    }

    function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
    }

    function h(t, e) {
        return h = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        }, h(t, e)
    }

    function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function u(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return d(t)
    }

    function f(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var i, n = c(t);
            if (e) {
                var o = c(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else i = n.apply(this, arguments);
            return u(this, i)
        }
    }

    function v(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == i) return;
            var n, o, a = [],
                s = !0,
                r = !1;
            try {
                for (i = i.call(t); !(s = (n = i.next()).done) && (a.push(n.value), !e || a.length !== e); s = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (r) throw o
                }
            }
            return a
        }(t, e) || g(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function p(t) {
        return function (t) {
            if (Array.isArray(t)) return m(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || g(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(t, e) {
        if (t) {
            if ("string" == typeof t) return m(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? m(t, e) : void 0
        }
    }

    function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function y(t, e) {
        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!i) {
            if (Array.isArray(t) || (i = g(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    },
                    e: function (t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
            r = !1;
        return {
            s: function () {
                i = i.call(t)
            },
            n: function () {
                var t = i.next();
                return s = t.done, t
            },
            e: function (t) {
                r = !0, a = t
            },
            f: function () {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (r) throw a
                }
            }
        }
    }
    var b = function (t) {
            return "object" === n(t) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t)
        },
        x = function t() {
            for (var e = !1, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            "boolean" == typeof o[0] && (e = o.shift());
            var s = o[0];
            if (!s || "object" !== n(s)) throw new Error("extendee must be an object");
            for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
                var h = r[c];
                for (var d in h)
                    if (h.hasOwnProperty(d)) {
                        var u = h[d];
                        if (e && (Array.isArray(u) || b(u))) {
                            var f = Array.isArray(u) ? [] : {};
                            s[d] = t(!0, s.hasOwnProperty(d) ? s[d] : f, u)
                        } else s[d] = u
                    }
            }
            return s
        },
        w = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
            return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e
        },
        k = "undefined" != typeof window && window.ResizeObserver || function () {
            function t(e) {
                o(this, t), this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = e
            }
            return s(t, [{
                key: "observe",
                value: function (t) {
                    if (!this.observables.some((function (e) {
                            return e.el === t
                        }))) {
                        var e = {
                            el: t,
                            size: {
                                height: t.clientHeight,
                                width: t.clientWidth
                            }
                        };
                        this.observables.push(e)
                    }
                }
            }, {
                key: "unobserve",
                value: function (t) {
                    this.observables = this.observables.filter((function (e) {
                        return e.el !== t
                    }))
                }
            }, {
                key: "disconnect",
                value: function () {
                    this.observables = []
                }
            }, {
                key: "check",
                value: function () {
                    var t = this.observables.filter((function (t) {
                        var e = t.el.clientHeight,
                            i = t.el.clientWidth;
                        if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0
                    })).map((function (t) {
                        return t.el
                    }));
                    t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck)
                }
            }]), t
        }(),
        S = function () {
            var t = window.getSelection ? window.getSelection() : document.selection;
            t && t.rangeCount && t.getRangeAt(0).getClientRects().length && (t.removeAllRanges ? t.removeAllRanges() : t.empty && t.empty())
        },
        C = function t(e) {
            o(this, t), this.id = -1, this.id = e.pointerId || e.identifier || -1, this.pageX = e.pageX, this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY, this.nativePointer = e
        };

    function $(t, e) {
        return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0
    }

    function E(t, e) {
        return e ? {
            clientX: (t.clientX + e.clientX) / 2,
            clientY: (t.clientY + e.clientY) / 2
        } : t
    }
    var P = function () {
            function t(e) {
                var i = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.start,
                    s = void 0 === a ? function () {
                        return !0
                    } : a,
                    r = n.move,
                    l = void 0 === r ? function () {} : r,
                    c = n.end,
                    h = void 0 === c ? function () {} : c;
                o(this, t), this.element = e, this.startPointers = [], this.currentPointers = [], this.startCallback = s, this.moveCallback = l, this.endCallback = h, this.onStart = function (t) {
                    if (!t.button || 0 === t.button) {
                        var e = new C(t);
                        if (!1 === i.startCallback(e, t)) return !1;
                        t.preventDefault(), S(), i.currentPointers.push(e), i.startPointers.push(e), (t.target && "setPointerCapture" in t.target ? t.target : i.element).setPointerCapture(t.pointerId), i.element.addEventListener("pointermove", i.onMove), i.element.addEventListener("pointerup", i.onEnd), i.element.addEventListener("pointercancel", i.onEnd)
                    }
                }, this.onMove = function (t) {
                    for (var e = i.currentPointers.slice(), n = [], o = function () {
                            var t = s[a],
                                e = i.currentPointers.findIndex((function (e) {
                                    return e.id === t.id
                                }));
                            if (e < 0) return "continue";
                            n.push(t), i.currentPointers[e] = t
                        }, a = 0, s = [new C(t)]; a < s.length; a++) o();
                    n.length && i.moveCallback(e, i.currentPointers, t)
                }, this.onEnd = function (t) {
                    var e = new C(t),
                        n = i.currentPointers.findIndex((function (t) {
                            return t.id === e.id
                        }));
                    if (-1 === n) return !1;
                    i.currentPointers.splice(n, 1), i.startPointers.splice(n, 1), i.endCallback(e, t), i.currentPointers.length || (i.element.removeEventListener("pointermove", i.onMove), i.element.removeEventListener("pointerup", i.onEnd), i.element.removeEventListener("pointercancel", i.onEnd))
                }, this.element.addEventListener("pointerdown", this.onStart)
            }
            return s(t, [{
                key: "stop",
                value: function () {
                    this.element.removeEventListener("pointerdown", this.onStart), this.element.removeEventListener("pointermove", this.onMove), this.element.removeEventListener("pointerup", this.onEnd), this.element.removeEventListener("pointercancel", this.onEnd)
                }
            }]), t
        }(),
        T = function t(e) {
            return !!(e && "object" === n(e) && e instanceof Element && e !== document.body) && (function (t) {
                var e = getComputedStyle(t)["overflow-y"],
                    i = getComputedStyle(t)["overflow-x"],
                    n = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
                    o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
                return n || o
            }(e) ? e : t(e.parentNode))
        },
        L = function (t, e) {
            return t.split(".").reduce((function (t, e) {
                return t && t[e]
            }), e)
        },
        A = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, t), this.options = x(!0, {}, e), this.plugins = [], this.events = {};
                for (var i = 0, n = ["on", "once"]; i < n.length; i++)
                    for (var a = n[i], s = 0, r = Object.entries(this.options[a] || {}); s < r.length; s++) {
                        var l = r[s];
                        this[a].apply(this, p(l))
                    }
            }
            return s(t, [{
                key: "option",
                value: function (t, e) {
                    t = String(t);
                    var i = L(t, this.options);
                    if ("function" == typeof i) {
                        for (var n, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++) a[s - 2] = arguments[s];
                        i = (n = i).call.apply(n, [this, this].concat(a))
                    }
                    return void 0 === i ? e : i
                }
            }, {
                key: "localize",
                value: function (t) {
                    var e = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (function (t, n, o) {
                        var a = !1;
                        if (!(a = o ? e.option("".concat(n[0] + n.toLowerCase().substring(1), ".l10n.").concat(o)) : e.option("l10n.".concat(n)))) return n;
                        for (var s = 0; s < i.length; s++) a = a.split(i[s][0]).join(i[s][1]);
                        return a
                    }))
                }
            }, {
                key: "on",
                value: function (t, e) {
                    var i = this;
                    if (b(t)) {
                        for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                            var a = o[n];
                            this.on.apply(this, p(a))
                        }
                        return this
                    }
                    return String(t).split(" ").forEach((function (t) {
                        var n = i.events[t] = i.events[t] || []; - 1 == n.indexOf(e) && n.push(e)
                    })), this
                }
            }, {
                key: "once",
                value: function (t, e) {
                    var i = this;
                    if (b(t)) {
                        for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                            var a = o[n];
                            this.once.apply(this, p(a))
                        }
                        return this
                    }
                    return String(t).split(" ").forEach((function (t) {
                        var n = function n() {
                            i.off(t, n);
                            for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                            e.call.apply(e, [i, i].concat(a))
                        };
                        n._ = e, i.on(t, n)
                    })), this
                }
            }, {
                key: "off",
                value: function (t, e) {
                    var i = this;
                    if (!b(t)) return t.split(" ").forEach((function (t) {
                        var n = i.events[t];
                        if (!n || !n.length) return i;
                        for (var o = -1, a = 0, s = n.length; a < s; a++) {
                            var r = n[a];
                            if (r && (r === e || r._ === e)) {
                                o = a;
                                break
                            }
                        } - 1 != o && n.splice(o, 1)
                    })), this;
                    for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                        var a = o[n];
                        this.off.apply(this, p(a))
                    }
                }
            }, {
                key: "trigger",
                value: function (t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    var o, a = y(p(this.events[t] || []).slice());
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value;
                            if (s && !1 === s.call.apply(s, [this, this].concat(i))) return !1
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    var r, l = y(p(this.events["*"] || []).slice());
                    try {
                        for (l.s(); !(r = l.n()).done;) {
                            var c = r.value;
                            if (c && !1 === c.call.apply(c, [this, t, this].concat(i))) return !1
                        }
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                    return !0
                }
            }, {
                key: "attachPlugins",
                value: function (t) {
                    for (var e = {}, i = 0, n = Object.entries(t || {}); i < n.length; i++) {
                        var o = v(n[i], 2),
                            a = o[0],
                            s = o[1];
                        !1 === this.options[a] || this.plugins[a] || (this.options[a] = x({}, s.defaults || {}, this.options[a]), e[a] = new s(this))
                    }
                    for (var r = 0, l = Object.entries(e); r < l.length; r++) {
                        var c = v(l[r], 2);
                        c[0], c[1].attach(this)
                    }
                    return this.plugins = Object.assign({}, this.plugins, e), this
                }
            }, {
                key: "detachPlugins",
                value: function () {
                    for (var t in this.plugins) {
                        var e = void 0;
                        (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this)
                    }
                    return this.plugins = {}, this
                }
            }]), t
        }(),
        O = {
            touch: !0,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: !1,
            lockAxis: !1,
            friction: .64,
            decelFriction: .88,
            zoomFriction: .74,
            bounceForce: .2,
            baseScale: 1,
            minScale: 1,
            maxScale: 2,
            step: .5,
            textSelection: !1,
            click: "toggleZoom",
            wheel: "zoom",
            wheelFactor: 42,
            wheelLimit: 5,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging",
            ratio: 1
        },
        z = function (t) {
            l(n, t);
            var e = f(n);

            function n(t) {
                var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, n), (i = e.call(this, x(!0, {}, O, a))).state = "init", i.$container = t;
                for (var s = 0, r = ["onLoad", "onWheel", "onClick"]; s < r.length; s++) {
                    var l = r[s];
                    i[l] = i[l].bind(d(i))
                }
                return i.initLayout(), i.resetValues(), i.attachPlugins(n.Plugins), i.trigger("init"), i.updateMetrics(), i.attachEvents(), i.trigger("ready"), !1 === i.option("centerOnStart") ? i.state = "ready" : i.panTo({
                    friction: 0
                }), i
            }
            return s(n, [{
                key: "initLayout",
                value: function () {
                    var t = this.$container;
                    if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
                    var e = this.option("content") || t.querySelector(".panzoom__content");
                    if (!e) throw new Error("Panzoom: Content not found");
                    this.$content = e;
                    var i, n = this.option("viewport") || t.querySelector(".panzoom__viewport");
                    n || !1 === this.option("wrapInner") || ((n = document.createElement("div")).classList.add("panzoom__viewport"), (i = n).append.apply(i, p(t.childNodes)), t.appendChild(n));
                    this.$viewport = n || e.parentNode
                }
            }, {
                key: "resetValues",
                value: function () {
                    this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
                        width: 0,
                        height: 0
                    }, this.viewport = {
                        width: 0,
                        height: 0
                    }, this.content = {
                        origHeight: 0,
                        origWidth: 0,
                        width: 0,
                        height: 0,
                        x: this.option("x", 0),
                        y: this.option("y", 0),
                        scale: this.option("baseScale")
                    }, this.transform = {
                        x: 0,
                        y: 0,
                        scale: 1
                    }, this.resetDragPosition()
                }
            }, {
                key: "onLoad",
                value: function (t) {
                    this.updateMetrics(), this.panTo({
                        scale: this.option("baseScale"),
                        friction: 0
                    }), this.trigger("load", t)
                }
            }, {
                key: "onClick",
                value: function (t) {
                    // if (!t.defaultPrevented)
                    //     if (this.option("textSelection") && window.getSelection().toString().length) console //t.stopPropagation();
                    //     else {
                    //         var e = this.$content.getClientRects()[0];
                    //         if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation();
                    //         !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t))
                    //     }
                }
            }, {
                key: "onWheel",
                value: function (t) {
                    !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t)
                }
            }, {
                key: "zoomWithWheel",
                value: function (t) {
                    void 0 === this.changedDelta && (this.changedDelta = 0);
                    var e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
                        i = this.content.scale,
                        n = i * (100 + e * this.option("wheelFactor")) / 100;
                    if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), n = i) : (this.changedDelta = 0, n = Math.max(Math.min(n, this.option("maxScale")), this.option("minScale"))), !(this.changedDelta > this.option("wheelLimit")) && (t.preventDefault(), n !== i)) {
                        var o = this.$content.getBoundingClientRect(),
                            a = t.clientX - o.left,
                            s = t.clientY - o.top;
                        this.zoomTo(n, {
                            x: a,
                            y: s
                        })
                    }
                }
            }, {
                key: "zoomWithClick",
                value: function (t) {
                    var e = this.$content.getClientRects()[0],
                        i = t.clientX - e.left,
                        n = t.clientY - e.top;
                    this.toggleZoom({
                        x: i,
                        y: n
                    })
                }
            }, {
                key: "attachEvents",
                value: function () {
                    var t = this;
                    this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.$container.addEventListener("click", this.onClick, {
                        passive: !1
                    }), this.initObserver();
                    var e = new P(this.$container, {
                        start: function (i, n) {
                            if (!t.option("touch")) return !1;
                            if (!(t.velocity.scale < 0)) {
                                if (!e.currentPointers.length) {
                                    if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.target.nodeName)) return !1;
                                    if (t.option("textSelection") && function (t, e, i) {
                                            for (var n = t.childNodes, o = document.createRange(), a = 0; a < n.length; a++) {
                                                var s = n[a];
                                                if (s.nodeType === Node.TEXT_NODE) {
                                                    o.selectNodeContents(s);
                                                    var r = o.getBoundingClientRect();
                                                    if (e >= r.left && i >= r.top && e <= r.right && i <= r.bottom) return s
                                                }
                                            }
                                            return !1
                                        }(n.target, n.clientX, n.clientY)) return !1;
                                    if (T(n.target)) return !1
                                }
                                return !1 !== t.trigger("touchStart", n) && (t.state = "pointerdown", t.resetDragPosition(), t.dragPosition.midPoint = null, t.dragPosition.time = Date.now(), !0)
                            }
                        },
                        move: function (i, n, o) {
                            if ("pointerdown" === t.state)
                                if (0 != t.trigger("touchMove", o)) {
                                    if (!(n.length < 2 && 1 == t.option("panOnlyZoomed") && t.content.width <= t.viewport.width && t.content.height <= t.viewport.height && t.transform.scale <= t.option("baseScale")) && (!(n.length > 1) || t.option("zoom") && !1 !== t.option("pinchToZoom"))) {
                                        o.preventDefault(), o.stopPropagation();
                                        var a = E(i[0], i[1]),
                                            s = E(n[0], n[1]),
                                            r = s.clientX - a.clientX,
                                            l = s.clientY - a.clientY,
                                            c = $(i[0], i[1]),
                                            h = $(n[0], n[1]),
                                            d = c ? h / c : 1;
                                        t.dragOffset.x += r, t.dragOffset.y += l, t.dragOffset.scale *= d, t.dragOffset.time = Date.now() - t.dragPosition.time;
                                        var u = 1 === t.dragStart.scale && t.option("lockAxis");
                                        if (u && !t.lockAxis) {
                                            if (Math.abs(t.dragOffset.x) < 6 && Math.abs(t.dragOffset.y) < 6) return;
                                            if ("xy" === u) {
                                                var f = Math.abs(180 * Math.atan2(t.dragOffset.y, t.dragOffset.x) / Math.PI);
                                                t.lockAxis = f > 45 && f < 135 ? "y" : "x"
                                            } else t.lockAxis = u
                                        }
                                        if (t.lockAxis && (t.dragOffset["x" === t.lockAxis ? "y" : "x"] = 0), t.$container.classList.add(t.option("draggingClass")), t.transform.scale === t.option("baseScale") && "y" === t.lockAxis || (t.dragPosition.x = t.dragStart.x + t.dragOffset.x), t.transform.scale === t.option("baseScale") && "x" === t.lockAxis || (t.dragPosition.y = t.dragStart.y + t.dragOffset.y), t.dragPosition.scale = t.dragStart.scale * t.dragOffset.scale, n.length > 1) {
                                            var v = E(e.startPointers[0], e.startPointers[1]),
                                                p = v.clientX - t.dragStart.rect.x,
                                                g = v.clientY - t.dragStart.rect.y,
                                                m = t.getZoomDelta(t.content.scale * t.dragOffset.scale, p, g),
                                                y = m.deltaX,
                                                b = m.deltaY;
                                            t.dragPosition.x -= y, t.dragPosition.y -= b, t.dragPosition.midPoint = s
                                        } else t.setDragResistance();
                                        t.transform = {
                                            x: t.dragPosition.x,
                                            y: t.dragPosition.y,
                                            scale: t.dragPosition.scale
                                        }, t.startAnimation()
                                    }
                                } else o.preventDefault()
                        },
                        end: function (n, o) {
                            if ("pointerdown" === t.state)
                                if (t._dragOffset = i({}, t.dragOffset), e.currentPointers.length) t.resetDragPosition();
                                else if (t.state = "decel", t.friction = t.option("decelFriction"), t.recalculateTransform(), t.$container.classList.remove(t.option("draggingClass")), !1 !== t.trigger("touchEnd", o) && "decel" === t.state) {
                                var a = t.option("minScale");
                                if (t.transform.scale < a) t.zoomTo(a, {
                                    friction: .64
                                });
                                else {
                                    var s = t.option("maxScale");
                                    if (t.transform.scale - s > .01) {
                                        var r = t.dragPosition.midPoint || n,
                                            l = t.$content.getClientRects()[0];
                                        t.zoomTo(s, {
                                            friction: .64,
                                            x: r.clientX - l.left,
                                            y: r.clientY - l.top
                                        })
                                    } else;
                                }
                            }
                        }
                    });
                    this.pointerTracker = e
                }
            }, {
                key: "initObserver",
                value: function () {
                    var t = this;
                    this.resizeObserver || (this.resizeObserver = new k((function () {
                        t.updateTimer || (t.updateTimer = setTimeout((function () {
                            var e = t.$container.getBoundingClientRect();
                            e.width && e.height ? ((Math.abs(e.width - t.container.width) > 1 || Math.abs(e.height - t.container.height) > 1) && (t.isAnimating() && t.endAnimation(!0), t.updateMetrics(), t.panTo({
                                x: t.content.x,
                                y: t.content.y,
                                scale: t.option("baseScale"),
                                friction: 0
                            })), t.updateTimer = null) : t.updateTimer = null
                        }), t.updateRate))
                    })), this.resizeObserver.observe(this.$container))
                }
            }, {
                key: "resetDragPosition",
                value: function () {
                    this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
                        x: 0,
                        y: 0,
                        scale: 0
                    };
                    var t = this.content,
                        e = t.x,
                        n = t.y,
                        o = t.scale;
                    this.dragStart = {
                        rect: this.$content.getBoundingClientRect(),
                        x: e,
                        y: n,
                        scale: o
                    }, this.dragPosition = i(i({}, this.dragPosition), {}, {
                        x: e,
                        y: n,
                        scale: o
                    }), this.dragOffset = {
                        x: 0,
                        y: 0,
                        scale: 1,
                        time: 0
                    }
                }
            }, {
                key: "updateMetrics",
                value: function (t) {
                    !0 !== t && this.trigger("beforeUpdate");
                    var e, n = this.$container,
                        o = this.$content,
                        a = this.$viewport,
                        s = this.$content instanceof HTMLImageElement,
                        r = this.option("zoom"),
                        l = this.option("resizeParent", r),
                        c = (e = this.$content, Math.max(parseFloat(e.naturalWidth || 0), parseFloat(e.width && e.width.baseVal && e.width.baseVal.value || 0), parseFloat(e.offsetWidth || 0), parseFloat(e.scrollWidth || 0))),
                        h = function (t) {
                            return Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0))
                        }(this.$content);
                    Object.assign(o.style, {
                        width: "",
                        height: "",
                        maxWidth: "",
                        maxHeight: ""
                    }), l && Object.assign(a.style, {
                        width: "",
                        height: ""
                    });
                    var d = this.option("ratio"),
                        u = c = w(c * d),
                        f = h = w(h * d),
                        v = o.getBoundingClientRect(),
                        p = a.getBoundingClientRect(),
                        g = a == n ? p : n.getBoundingClientRect(),
                        m = Math.max(a.offsetWidth, w(p.width)),
                        y = Math.max(a.offsetHeight, w(p.height)),
                        b = window.getComputedStyle(a);
                    if (m -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), y -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), this.viewport.width = m, this.viewport.height = y, r) {
                        if (Math.abs(c - v.width) > .1 || Math.abs(h - v.height) > .1) {
                            var x = function (t, e, i, n) {
                                var o = Math.min(i / t || 0, n / e);
                                return {
                                    width: t * o || 0,
                                    height: e * o || 0
                                }
                            }(c, h, Math.min(c, v.width), Math.min(h, v.height));
                            u = w(x.width), f = w(x.height)
                        }
                        Object.assign(o.style, {
                            width: "".concat(u, "px"),
                            height: "".concat(f, "px"),
                            transform: ""
                        })
                    }
                    if (l && (Object.assign(a.style, {
                            width: "".concat(u, "px"),
                            height: "".concat(f, "px")
                        }), this.viewport = i(i({}, this.viewport), {}, {
                            width: u,
                            height: f
                        })), s && r && "function" != typeof this.options.maxScale) {
                        var k = this.option("maxScale");
                        this.options.maxScale = function () {
                            return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : k
                        }
                    }
                    this.content = i(i({}, this.content), {}, {
                        origWidth: c,
                        origHeight: h,
                        fitWidth: u,
                        fitHeight: f,
                        width: u,
                        height: f,
                        scale: 1,
                        isZoomable: r
                    }), this.container = {
                        width: g.width,
                        height: g.height
                    }, !0 !== t && this.trigger("afterUpdate")
                }
            }, {
                key: "zoomIn",
                value: function (t) {
                    this.zoomTo(this.content.scale + (t || this.option("step")))
                }
            }, {
                key: "zoomOut",
                value: function (t) {
                    this.zoomTo(this.content.scale - (t || this.option("step")))
                }
            }, {
                key: "toggleZoom",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = this.option("maxScale"),
                        i = this.option("baseScale"),
                        n = this.content.scale > i + .5 * (e - i) ? i : e;
                    this.zoomTo(n, t)
                }
            }, {
                key: "zoomTo",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.option("baseScale"),
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.x,
                        n = void 0 === i ? null : i,
                        o = e.y,
                        a = void 0 === o ? null : o;
                    t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
                    var s = w(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
                    null === n && (n = this.content.width * s * .5), null === a && (a = this.content.height * s * .5);
                    var r = this.getZoomDelta(t, n, a),
                        l = r.deltaX,
                        c = r.deltaY;
                    n = this.content.x - l, a = this.content.y - c, this.panTo({
                        x: n,
                        y: a,
                        scale: t,
                        friction: this.option("zoomFriction")
                    })
                }
            }, {
                key: "getZoomDelta",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = this.content.fitWidth * this.content.scale,
                        o = this.content.fitHeight * this.content.scale,
                        a = e > 0 && n ? e / n : 0,
                        s = i > 0 && o ? i / o : 0,
                        r = this.content.fitWidth * t,
                        l = this.content.fitHeight * t,
                        c = (r - n) * a,
                        h = (l - o) * s;
                    return {
                        deltaX: c,
                        deltaY: h
                    }
                }
            }, {
                key: "panTo",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.x,
                        n = void 0 === e ? this.content.x : e,
                        o = t.y,
                        a = void 0 === o ? this.content.y : o,
                        s = t.scale,
                        r = t.friction,
                        l = void 0 === r ? this.option("friction") : r,
                        c = t.ignoreBounds,
                        h = void 0 !== c && c;
                    if (s = s || this.content.scale || 1, !h) {
                        var d = this.getBounds(s),
                            u = d.boundX,
                            f = d.boundY;
                        u && (n = Math.max(Math.min(n, u.to), u.from)), f && (a = Math.max(Math.min(a, f.to), f.from))
                    }
                    this.friction = l, this.transform = i(i({}, this.transform), {}, {
                        x: n,
                        y: a,
                        scale: s
                    }), l ? (this.state = "panning", this.velocity = {
                        x: (1 / this.friction - 1) * (n - this.content.x),
                        y: (1 / this.friction - 1) * (a - this.content.y),
                        scale: (1 / this.friction - 1) * (s - this.content.scale)
                    }, this.startAnimation()) : this.endAnimation()
                }
            }, {
                key: "startAnimation",
                value: function () {
                    var t = this;
                    this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame((function () {
                        return t.animate()
                    }))
                }
            }, {
                key: "animate",
                value: function () {
                    var t = this;
                    if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform();
                    else if ("pointerdown" !== this.state) return void this.endAnimation();
                    this.rAF = requestAnimationFrame((function () {
                        return t.animate()
                    }))
                }
            }, {
                key: "getBounds",
                value: function (t) {
                    var e = this.boundX,
                        i = this.boundY;
                    if (void 0 !== e && void 0 !== i) return {
                        boundX: e,
                        boundY: i
                    };
                    e = {
                        from: 0,
                        to: 0
                    }, i = {
                        from: 0,
                        to: 0
                    }, t = t || this.transform.scale;
                    var n = this.content.fitWidth,
                        o = this.content.fitHeight,
                        a = n * t,
                        s = o * t,
                        r = this.viewport.width,
                        l = this.viewport.height;
                    if (n <= r) {
                        var c = .5 * (r - a),
                            h = .5 * (a - n);
                        e.from = w(c - h), e.to = w(c + h)
                    } else e.from = w(r - a);
                    if (o <= l) {
                        var d = .5 * (l - s),
                            u = .5 * (s - o);
                        i.from = w(d - u), i.to = w(d + u)
                    } else i.from = w(l - a);
                    return {
                        boundX: e,
                        boundY: i
                    }
                }
            }, {
                key: "setEdgeForce",
                value: function () {
                    if ("decel" === this.state) {
                        var t, e, i, n, o = this.option("bounceForce"),
                            a = this.getBounds(Math.max(this.transform.scale, this.content.scale)),
                            s = a.boundX,
                            r = a.boundY;
                        if (s && (t = this.content.x < s.from, e = this.content.x > s.to), r && (i = this.content.y < r.from, n = this.content.y > r.to), t || e) {
                            var l = ((t ? s.from : s.to) - this.content.x) * o,
                                c = this.content.x + (this.velocity.x + l) / this.friction;
                            c >= s.from && c <= s.to && (l += this.velocity.x), this.velocity.x = l, this.recalculateTransform()
                        }
                        if (i || n) {
                            var h = ((i ? r.from : r.to) - this.content.y) * o,
                                d = this.content.y + (h + this.velocity.y) / this.friction;
                            d >= r.from && d <= r.to && (h += this.velocity.y), this.velocity.y = h, this.recalculateTransform()
                        }
                    }
                }
            }, {
                key: "setDragResistance",
                value: function () {
                    if ("pointerdown" === this.state) {
                        var t, e, i, n, o = this.getBounds(this.dragPosition.scale),
                            a = o.boundX,
                            s = o.boundY;
                        if (a && (t = this.dragPosition.x < a.from, e = this.dragPosition.x > a.to), s && (i = this.dragPosition.y < s.from, n = this.dragPosition.y > s.to), (t || e) && (!t || !e)) {
                            var r = t ? a.from : a.to,
                                l = r - this.dragPosition.x;
                            this.dragPosition.x = r - .3 * l
                        }
                        if ((i || n) && (!i || !n)) {
                            var c = i ? s.from : s.to,
                                h = c - this.dragPosition.y;
                            this.dragPosition.y = c - .3 * h
                        }
                    }
                }
            }, {
                key: "setDragForce",
                value: function () {
                    "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale)
                }
            }, {
                key: "recalculateTransform",
                value: function () {
                    this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1)
                }
            }, {
                key: "isAnimating",
                value: function () {
                    return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05))
                }
            }, {
                key: "setTransform",
                value: function (t) {
                    var e, n, o, a, s;
                    (t ? (e = w(this.transform.x), n = w(this.transform.y), o = this.transform.scale, this.content = i(i({}, this.content), {}, {
                        x: e,
                        y: n,
                        scale: o
                    })) : (e = w(this.content.x), n = w(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), this.content = i(i({}, this.content), {}, {
                        x: e,
                        y: n
                    })), this.trigger("beforeTransform"), e = w(this.content.x), n = w(this.content.y), t && this.option("zoom")) ? (a = w(this.content.fitWidth * o), s = w(this.content.fitHeight * o), this.content.width = a, this.content.height = s, this.transform = i(i({}, this.transform), {}, {
                        width: a,
                        height: s,
                        scale: o
                    }), Object.assign(this.$content.style, {
                        width: "".concat(a, "px"),
                        height: "".concat(s, "px"),
                        maxWidth: "none",
                        maxHeight: "none",
                        transform: "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(1)")
                    })) : this.$content.style.transform = "translate3d(".concat(e, "px, ").concat(n, "px, 0) scale(").concat(o, ")");
                    this.trigger("afterTransform")
                }
            }, {
                key: "endAnimation",
                value: function (t) {
                    cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
                        x: 0,
                        y: 0,
                        scale: 0
                    }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t && this.trigger("endAnimation")
                }
            }, {
                key: "handleCursor",
                value: function () {
                    var t = this.option("draggableClass");
                    t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t))
                }
            }, {
                key: "detachEvents",
                value: function () {
                    this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.$container.removeEventListener("click", this.onClick, {
                        passive: !1
                    }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null)
                }
            }, {
                key: "destroy",
                value: function () {
                    "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition())
                }
            }]), n
        }(A);
    z.version = "4.0.7", z.Plugins = {};
    var _ = function (t, e) {
            var i = 0;
            return function () {
                var n = (new Date).getTime();
                if (!(n - i < e)) return i = n, t.apply(void 0, arguments)
            }
        },
        M = function () {
            function t(e) {
                o(this, t), this.$container = null, this.$prev = null, this.$next = null, this.carousel = e, this.onRefresh = this.onRefresh.bind(this)
            }
            return s(t, [{
                key: "option",
                value: function (t) {
                    return this.carousel.option("Navigation.".concat(t))
                }
            }, {
                key: "createButton",
                value: function (t) {
                    var e, i = this,
                        n = document.createElement("button");
                    n.setAttribute("title", this.carousel.localize("{{".concat(t.toUpperCase(), "}}")));
                    var o = this.option("classNames.button") + " " + this.option("classNames.".concat(t));
                    return (e = n.classList).add.apply(e, p(o.split(" "))), n.setAttribute("tabindex", "0"), n.innerHTML = this.carousel.localize(this.option("".concat(t, "Tpl"))), n.addEventListener("click", (function (e) {
                        e.preventDefault(), e.stopPropagation(), i.carousel["slide".concat("next" === t ? "Next" : "Prev")]()
                    })), n
                }
            }, {
                key: "build",
                value: function () {
                    this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(this.option("classNames.main")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev))
                }
            }, {
                key: "onRefresh",
                value: function () {
                    var t = this.carousel.pages.length;
                    t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")))
                }
            }, {
                key: "cleanup",
                value: function () {
                    this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null
                }
            }, {
                key: "attach",
                value: function () {
                    this.carousel.on("refresh change", this.onRefresh)
                }
            }, {
                key: "detach",
                value: function () {
                    this.carousel.off("refresh change", this.onRefresh), this.cleanup()
                }
            }]), t
        }();
    M.defaults = {
        prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
            main: "carousel__nav",
            button: "carousel__button",
            next: "is-next",
            prev: "is-prev"
        }
    };
    var I = function () {
            function t(e) {
                o(this, t), this.carousel = e, this.$list = null, this.events = {
                    change: this.onChange.bind(this),
                    refresh: this.onRefresh.bind(this)
                }
            }
            return s(t, [{
                key: "buildList",
                value: function () {
                    var t = this;
                    if (!(this.carousel.pages.length < this.carousel.option("Dots.minSlideCount"))) {
                        var e = document.createElement("ol");
                        return e.classList.add("carousel__dots"), e.addEventListener("click", (function (e) {
                            if ("page" in e.target.dataset) {
                                e.preventDefault(), e.stopPropagation();
                                var i = parseInt(e.target.dataset.page, 10),
                                    n = t.carousel;
                                i !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == i ? "slidePrev" : "slideNext"]() : n.slideTo(i))
                            }
                        })), this.$list = e, this.carousel.$container.appendChild(e), this.carousel.$container.classList.add("has-dots"), e
                    }
                }
            }, {
                key: "removeList",
                value: function () {
                    this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots")
                }
            }, {
                key: "rebuildDots",
                value: function () {
                    var t = this,
                        e = this.$list,
                        i = !!e,
                        n = this.carousel.pages.length;
                    if (n < 2) i && this.removeList();
                    else {
                        i || (e = this.buildList());
                        var o = this.$list.children.length;
                        if (o > n)
                            for (var a = n; a < o; a++) this.$list.removeChild(this.$list.lastChild);
                        else {
                            for (var s = function (e) {
                                    var i = document.createElement("li");
                                    i.classList.add("carousel__dot"), i.dataset.page = e, i.setAttribute("role", "button"), i.setAttribute("tabindex", "0"), i.setAttribute("title", t.carousel.localize("{{GOTO}}", [
                                        ["%d", e + 1]
                                    ])), i.addEventListener("keydown", (function (t) {
                                        var e, n = t.code;
                                        "Enter" === n || "NumpadEnter" === n ? e = i : "ArrowRight" === n ? e = i.nextSibling : "ArrowLeft" === n && (e = i.previousSibling), e && e.click()
                                    })), t.$list.appendChild(i)
                                }, r = o; r < n; r++) s(r);
                            this.setActiveDot()
                        }
                    }
                }
            }, {
                key: "setActiveDot",
                value: function () {
                    if (this.$list) {
                        this.$list.childNodes.forEach((function (t) {
                            t.classList.remove("is-selected")
                        }));
                        var t = this.$list.childNodes[this.carousel.page];
                        t && t.classList.add("is-selected")
                    }
                }
            }, {
                key: "onChange",
                value: function () {
                    this.setActiveDot()
                }
            }, {
                key: "onRefresh",
                value: function () {
                    this.rebuildDots()
                }
            }, {
                key: "attach",
                value: function () {
                    this.carousel.on(this.events)
                }
            }, {
                key: "detach",
                value: function () {
                    this.removeList(), this.carousel.off(this.events), this.carousel = null
                }
            }]), t
        }(),
        F = function () {
            function t(e) {
                o(this, t), this.carousel = e, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this)
            }
            return s(t, [{
                key: "addAsTargetFor",
                value: function (t) {
                    this.target = this.carousel, this.nav = t, this.attachEvents()
                }
            }, {
                key: "addAsNavFor",
                value: function (t) {
                    this.target = t, this.nav = this.carousel, this.attachEvents()
                }
            }, {
                key: "attachEvents",
                value: function () {
                    this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange)
                }
            }, {
                key: "onNavReady",
                value: function () {
                    this.onTargetChange(!0)
                }
            }, {
                key: "onNavClick",
                value: function (t, e, i) {
                    var n = i.target.closest(".carousel__slide");
                    if (n) {
                        i.stopPropagation();
                        var o = parseInt(n.dataset.index, 10),
                            a = this.target.findPageForSlide(o);
                        this.target.page !== a && this.target.slideTo(a, {
                            friction: this.friction
                        }), this.markSelectedSlide(o)
                    }
                }
            }, {
                key: "onNavCreateSlide",
                value: function (t, e) {
                    e.index === this.selectedIndex && this.markSelectedSlide(e.index)
                }
            }, {
                key: "onTargetChange",
                value: function () {
                    var t = this.target.pages[this.target.page].indexes[0],
                        e = this.nav.findPageForSlide(t);
                    this.nav.slideTo(e), this.markSelectedSlide(t)
                }
            }, {
                key: "markSelectedSlide",
                value: function (t) {
                    this.selectedIndex = t, p(this.nav.slides).filter((function (t) {
                        return t.$el && t.$el.classList.remove("is-nav-selected")
                    }));
                    var e = this.nav.slides[t];
                    e && e.$el && e.$el.classList.add("is-nav-selected")
                }
            }, {
                key: "attach",
                value: function (t) {
                    var e = t.options.Sync;
                    (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction)
                }
            }, {
                key: "detach",
                value: function () {
                    this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange))
                }
            }]), t
        }();
    F.defaults = {
        friction: .92
    };
    var R = {
            Navigation: M,
            Dots: I,
            Sync: F
        },
        N = {
            slides: [],
            preload: 0,
            slidesPerPage: "auto",
            initialPage: null,
            initialSlide: null,
            friction: .92,
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            prefix: "",
            classNames: {
                viewport: "carousel__viewport",
                track: "carousel__track",
                slide: "carousel__slide",
                slideSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide #%d"
            }
        },
        D = function (t) {
            l(n, t);
            var e = f(n);

            function n(t) {
                var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (o(this, n), a = x(!0, {}, N, a), (i = e.call(this, a)).state = "init", i.$container = t, !(i.$container instanceof HTMLElement)) throw new Error("No root element provided");
                return i.slideNext = _(i.slideNext.bind(d(i)), 250), i.slidePrev = _(i.slidePrev.bind(d(i)), 250), i.init(), i
            }
            return s(n, [{
                key: "init",
                value: function () {
                    this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(n.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = "translate3d(".concat(-1 * this.pages[this.page].left, "px, 0px, 0) scale(1)")), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready")
                }
            }, {
                key: "initLayout",
                value: function () {
                    var t, e, i = this.option("prefix"),
                        n = this.option("classNames");
                    (this.$viewport = this.option("viewport") || this.$container.querySelector(".".concat(i).concat(n.viewport)), this.$viewport) || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(i + n.viewport), (t = this.$viewport).append.apply(t, p(this.$container.childNodes)), this.$container.appendChild(this.$viewport));
                    (this.$track = this.option("track") || this.$container.querySelector(".".concat(i).concat(n.track)), this.$track) || (this.$track = document.createElement("div"), this.$track.classList.add(i + n.track), (e = this.$track).append.apply(e, p(this.$viewport.childNodes)), this.$viewport.appendChild(this.$track))
                }
            }, {
                key: "initSlides",
                value: function () {
                    var t = this;
                    this.slides = [], this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function (e) {
                        var i = {
                            $el: e,
                            isDom: !0
                        };
                        t.slides.push(i), t.trigger("createSlide", i, t.slides.length)
                    })), Array.isArray(this.options.slides) && (this.slides = x(!0, p(this.slides), this.options.slides))
                }
            }, {
                key: "updateMetrics",
                value: function () {
                    var t, e = this,
                        n = 0,
                        o = [];
                    this.slides.forEach((function (i, a) {
                        var s = i.$el,
                            r = i.isDom || !t ? e.getSlideMetrics(s) : t;
                        i.index = a, i.width = r, i.left = n, t = r, n += r, o.push(a)
                    }));
                    var a = Math.max(this.$track.offsetWidth, w(this.$track.getBoundingClientRect().width)),
                        s = getComputedStyle(this.$track);
                    a -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight), this.contentWidth = n, this.viewportWidth = a;
                    var r = [],
                        l = this.option("slidesPerPage");
                    if (Number.isInteger(l) && n > a)
                        for (var c = 0; c < this.slides.length; c += l) r.push({
                            indexes: o.slice(c, c + l),
                            slides: this.slides.slice(c, c + l)
                        });
                    else
                        for (var h = 0, d = 0, u = 0; u < this.slides.length; u += 1) {
                            var f = this.slides[u];
                            (!r.length || d + f.width > a) && (r.push({
                                indexes: [],
                                slides: []
                            }), h = r.length - 1, d = 0), d += f.width, r[h].indexes.push(u), r[h].slides.push(f)
                        }
                    var v = this.option("center"),
                        g = this.option("fill");
                    r.forEach((function (t, i) {
                        t.index = i, t.width = t.slides.reduce((function (t, e) {
                            return t + e.width
                        }), 0), t.left = t.slides[0].left, v && (t.left += .5 * (a - t.width) * -1), g && !e.option("infiniteX", e.option("infinite")) && n > a && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, n - a))
                    }));
                    var m, y = [];
                    r.forEach((function (t) {
                        var e = i({}, t);
                        m && e.left === m.left ? (m.width += e.width, m.slides = [].concat(p(m.slides), p(e.slides)), m.indexes = [].concat(p(m.indexes), p(e.indexes))) : (e.index = y.length, m = e, y.push(e))
                    })), this.pages = y;
                    var b = this.page;
                    if (null === b) {
                        var x = this.option("initialSlide");
                        b = null !== x ? this.findPageForSlide(x) : this.option("initialPage", 0), y[b] || (b = y.length && b > y.length ? y[y.length - 1].index : 0), this.page = b, this.pageIndex = b
                    }
                    this.updatePanzoom(), this.trigger("refresh")
                }
            }, {
                key: "getSlideMetrics",
                value: function (t) {
                    if (!t) {
                        var e, i = this.slides[0];
                        if ((t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", t.classList.add(this.option("prefix") + this.option("classNames.slide")), i.customClass)(e = t.classList).add.apply(e, p(i.customClass.split(" ")));
                        this.$track.prepend(t)
                    }
                    var n = Math.max(t.offsetWidth, w(t.getBoundingClientRect().width)),
                        o = t.currentStyle || window.getComputedStyle(t);
                    return n = n + (parseFloat(o.marginLeft) || 0) + (parseFloat(o.marginRight) || 0), t.dataset.isTestEl && t.remove(), n
                }
            }, {
                key: "findPageForSlide",
                value: function (t) {
                    var e = this.pages.find((function (e) {
                        return e.indexes.indexOf(t) > -1
                    }));
                    return e ? e.index : null
                }
            }, {
                key: "slideNext",
                value: function () {
                    this.slideTo(this.pageIndex + 1)
                }
            }, {
                key: "slidePrev",
                value: function () {
                    this.slideTo(this.pageIndex - 1)
                }
            }, {
                key: "slideTo",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.x,
                        n = void 0 === i ? -1 * this.setPage(t, !0) : i,
                        o = e.y,
                        a = void 0 === o ? 0 : o,
                        s = e.friction,
                        r = void 0 === s ? this.option("friction") : s;
                    this.Panzoom.content.x === n && !this.Panzoom.velocity.x && r || (this.Panzoom.panTo({
                        x: n,
                        y: a,
                        friction: r,
                        ignoreBounds: !0
                    }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"))
                }
            }, {
                key: "initPanzoom",
                value: function () {
                    var t = this;
                    this.Panzoom && this.Panzoom.destroy();
                    var e = x(!0, {}, {
                        content: this.$track,
                        wrapInner: !1,
                        resizeParent: !1,
                        zoom: !1,
                        click: !1,
                        lockAxis: "x",
                        x: this.pages.length ? -1 * this.pages[this.page].left : 0,
                        centerOnStart: !1,
                        textSelection: function () {
                            return t.option("textSelection", !1)
                        },
                        panOnlyZoomed: function () {
                            return this.content.width <= this.viewport.width
                        }
                    }, this.option("Panzoom"));
                    this.Panzoom = new z(this.$container, e), this.Panzoom.on({
                        "*": function (e) {
                            for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                            return t.trigger.apply(t, ["Panzoom.".concat(e)].concat(n))
                        },
                        afterUpdate: function () {
                            t.updatePage()
                        },
                        beforeTransform: this.onBeforeTransform.bind(this),
                        touchEnd: this.onTouchEnd.bind(this),
                        endAnimation: function () {
                            t.trigger("settle")
                        }
                    }), this.updateMetrics(), this.manageSlideVisiblity()
                }
            }, {
                key: "updatePanzoom",
                value: function () {
                    this.Panzoom && (this.Panzoom.content = i(i({}, this.Panzoom.content), {}, {
                        fitWidth: this.contentWidth,
                        origWidth: this.contentWidth,
                        width: this.contentWidth
                    }), this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
                        from: -1 * this.pages[this.pages.length - 1].left,
                        to: -1 * this.pages[0].left
                    }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
                        from: 0,
                        to: 0
                    }, this.Panzoom.handleCursor())
                }
            }, {
                key: "manageSlideVisiblity",
                value: function () {
                    var t = this,
                        e = this.contentWidth,
                        i = this.viewportWidth,
                        n = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0,
                        o = this.option("preload"),
                        a = this.option("infiniteX", this.option("infinite")),
                        s = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
                        r = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                    this.slides.forEach((function (l) {
                        var c, h, d = 0;
                        c = n - s, h = n + i + r, c -= o * (i + s + r), h += o * (i + s + r);
                        var u = l.left + l.width > c && l.left < h;
                        c = n + e - s, h = n + e + i + r, c -= o * (i + s + r);
                        var f = a && l.left + l.width > c && l.left < h;
                        c = n - e - s, h = n - e + i + r, c -= o * (i + s + r);
                        var v = a && l.left + l.width > c && l.left < h;
                        f || u || v ? (t.createSlideEl(l), u && (d = 0), f && (d = -1), v && (d = 1), l.left + l.width > n && l.left <= n + i + r && (d = 0)) : t.removeSlideEl(l), l.hasDiff = d
                    }));
                    var l = 0,
                        c = 0;
                    this.slides.forEach((function (t, i) {
                        var n = 0;
                        t.$el ? (i !== l || t.hasDiff ? n = c + t.hasDiff * e : c = 0, t.$el.style.left = Math.abs(n) > .1 ? "".concat(c + t.hasDiff * e, "px") : "", l++) : c += t.width
                    })), this.markSelectedSlides()
                }
            }, {
                key: "createSlideEl",
                value: function (t) {
                    if (t) {
                        if (!t.$el) {
                            var e, i = document.createElement("div");
                            if (i.dataset.index = t.index, i.classList.add(this.option("prefix") + this.option("classNames.slide")), t.customClass)(e = i.classList).add.apply(e, p(t.customClass.split(" ")));
                            t.html && (i.innerHTML = t.html);
                            var n = [];
                            this.slides.forEach((function (t, e) {
                                t.$el && n.push(e)
                            }));
                            var o = t.index,
                                a = null;
                            if (n.length) {
                                var s = n.reduce((function (t, e) {
                                    return Math.abs(e - o) < Math.abs(t - o) ? e : t
                                }));
                                a = this.slides[s]
                            }
                            return this.$track.insertBefore(i, a && a.$el ? a.index < t.index ? a.$el.nextSibling : a.$el : null), t.$el = i, this.trigger("createSlide", t, o), t
                        }
                        var r;
                        parseInt(t.$el.dataset.index, 10) !== t.index && (t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-src]").forEach((function (t) {
                            var e = t.dataset.lazySrc;
                            t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = "url('".concat(e, "')")
                        })), (r = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = "url('".concat(r, "')")), t.state = "ready")
                    }
                }
            }, {
                key: "removeSlideEl",
                value: function (t) {
                    t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null)
                }
            }, {
                key: "markSelectedSlides",
                value: function () {
                    var t = this,
                        e = this.option("classNames.slideSelected"),
                        i = "aria-hidden";
                    this.slides.forEach((function (n, o) {
                        var a = n.$el;
                        if (a) {
                            var s = t.pages[t.page];
                            s && s.indexes && s.indexes.indexOf(o) > -1 ? (e && !a.classList.contains(e) && (a.classList.add(e), t.trigger("selectSlide", n)), a.removeAttribute(i)) : (e && a.classList.contains(e) && (a.classList.remove(e), t.trigger("unselectSlide", n)), a.setAttribute(i, !0))
                        }
                    }))
                }
            }, {
                key: "updatePage",
                value: function () {
                    this.updateMetrics(), this.slideTo(this.page, {
                        friction: 0
                    })
                }
            }, {
                key: "onBeforeTransform",
                value: function () {
                    this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity()
                }
            }, {
                key: "manageInfiniteTrack",
                value: function () {
                    var t = this.contentWidth,
                        e = this.viewportWidth;
                    if (!(!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e)) {
                        var i = this.Panzoom,
                            n = !1;
                        return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, n = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, n = !0), n && "pointerdown" === i.state && i.resetDragPosition(), n
                    }
                }
            }, {
                key: "onTouchEnd",
                value: function (t, e) {
                    var i = this.option("dragFree");
                    if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
                    else if (i) {
                        var n = v(this.getPageFromPosition(-1 * t.transform.x), 2)[1];
                        this.setPage(n)
                    } else this.slideToClosest()
                }
            }, {
                key: "slideToClosest",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = this.getPageFromPosition(-1 * this.Panzoom.content.x),
                        i = v(e, 2),
                        n = i[1];
                    this.slideTo(n, t)
                }
            }, {
                key: "getPageFromPosition",
                value: function (t) {
                    var e = this.pages.length;
                    this.option("center") && (t += .5 * this.viewportWidth);
                    var i = Math.floor(t / this.contentWidth);
                    t -= i * this.contentWidth;
                    var n = this.slides.find((function (e) {
                        return e.left <= t && e.left + e.width > t
                    }));
                    if (n) {
                        var o = this.findPageForSlide(n.index);
                        return [o, o + i * e]
                    }
                    return [0, 0]
                }
            }, {
                key: "setPage",
                value: function (t, e) {
                    var i = 0,
                        n = parseInt(t, 10) || 0,
                        o = this.page,
                        a = this.pageIndex,
                        s = this.pages.length,
                        r = this.contentWidth,
                        l = this.viewportWidth;
                    if (t = (n % s + s) % s, this.option("infiniteX", this.option("infinite")) && r > l) {
                        var c = Math.floor(n / s) || 0,
                            h = r;
                        if (i = this.pages[t].left + c * h, !0 === e && s > 2) {
                            var d = -1 * this.Panzoom.content.x,
                                u = i - h,
                                f = i + h,
                                v = Math.abs(d - i),
                                p = Math.abs(d - u),
                                g = Math.abs(d - f);
                            g < v && g <= p ? (i = f, n += s) : p < v && p < g && (i = u, n -= s)
                        }
                    } else t = n = Math.max(0, Math.min(n, s - 1)), i = this.pages.length ? this.pages[t].left : 0;
                    return this.page = t, this.pageIndex = n, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = a, this.trigger("change", t, o)), i
                }
            }, {
                key: "destroy",
                value: function () {
                    var t = this;
                    this.state = "destroy", this.slides.forEach((function (e) {
                        t.removeSlideEl(e)
                    })), this.slides = [], this.Panzoom.destroy(), this.detachPlugins()
                }
            }]), n
        }(A);
    D.version = "4.0.7", D.Plugins = R;
    var B = !("undefined" == typeof window || !window.document || !window.document.createElement),
        H = function () {
            function t(e) {
                o(this, t), this.fancybox = e, this.viewport = null, this.pendingUpdate = null;
                for (var i = 0, n = ["onReady", "onResize", "onTouchstart", "onTouchmove"]; i < n.length; i++) {
                    var a = n[i];
                    this[a] = this[a].bind(this)
                }
            }
            return s(t, [{
                key: "onReady",
                value: function () {
                    var t = window.visualViewport;
                    t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
                        passive: !1
                    }), window.addEventListener("touchmove", this.onTouchmove, {
                        passive: !1
                    })
                }
            }, {
                key: "onResize",
                value: function () {
                    this.updateViewport()
                }
            }, {
                key: "updateViewport",
                value: function () {
                    var t = this.fancybox,
                        e = this.viewport,
                        i = e.scale || 1,
                        n = t.$container;
                    if (n) {
                        var o = "",
                            a = "",
                            s = "";
                        i - 1 > .1 && (o = "".concat(e.width * i, "px"), a = "".concat(e.height * i, "px"), s = "translate3d(".concat(e.offsetLeft, "px, ").concat(e.offsetTop, "px, 0) scale(").concat(1 / i, ")")), n.style.width = o, n.style.height = a, n.style.transform = s
                    }
                }
            }, {
                key: "onTouchstart",
                value: function (t) {
                    this.startY = t.touches ? t.touches[0].screenY : t.screenY
                }
            }, {
                key: "onTouchmove",
                value: function (t) {
                    var e = this.startY,
                        i = window.innerWidth / window.document.documentElement.clientWidth;
                    if (t.cancelable && !(t.touches.length > 1 || 1 !== i)) {
                        var n = t.target,
                            o = T(n);
                        if (o) {
                            var a = window.getComputedStyle(o),
                                s = parseInt(a.getPropertyValue("height"), 10),
                                r = t.touches ? t.touches[0].screenY : t.screenY,
                                l = e <= r && 0 === o.scrollTop,
                                c = e >= r && o.scrollHeight - o.scrollTop === s;
                            (l || c) && t.preventDefault()
                        } else t.preventDefault()
                    }
                }
            }, {
                key: "cleanup",
                value: function () {
                    this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
                    var t = this.viewport;
                    t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1)
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on("initLayout", this.onReady)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off("initLayout", this.onReady), this.cleanup()
                }
            }]), t
        }(),
        W = function () {
            function t(e) {
                o(this, t), this.fancybox = e, this.$container = null, this.state = "init";
                for (var i = 0, n = ["onPrepare", "onClosing", "onKeydown"]; i < n.length; i++) {
                    var a = n[i];
                    this[a] = this[a].bind(this)
                }
                this.events = {
                    prepare: this.onPrepare,
                    closing: this.onClosing,
                    keydown: this.onKeydown
                }
            }
            return s(t, [{
                key: "onPrepare",
                value: function () {
                    this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build()
                }
            }, {
                key: "onClosing",
                value: function () {
                    this.Carousel && this.Carousel.Panzoom.detachEvents()
                }
            }, {
                key: "onKeydown",
                value: function (t, e) {
                    e === t.option("Thumbs.key") && this.toggle()
                }
            }, {
                key: "build",
                value: function () {
                    var t = this;
                    if (!this.$container) {
                        var e = document.createElement("div");
                        e.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel.nextSibling), this.Carousel = new D(e, x(!0, {
                            Dots: !1,
                            Navigation: !1,
                            Sync: {
                                friction: 0
                            },
                            infinite: !1,
                            center: !0,
                            fill: !0,
                            dragFree: !0,
                            slidesPerPage: 1,
                            preload: 1
                        }, this.fancybox.option("Thumbs.Carousel"), {
                            Sync: {
                                target: this.fancybox.Carousel
                            },
                            slides: this.getSlides()
                        })), this.Carousel.Panzoom.on("wheel", (function (e, i) {
                            i.preventDefault(), t.fancybox[i.deltaY < 0 ? "prev" : "next"]()
                        })), this.$container = e, this.state = "visible"
                    }
                }
            }, {
                key: "getSlides",
                value: function () {
                    var t, e = [],
                        i = y(this.fancybox.items);
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var n = t.value,
                                o = n.thumb;
                            o && e.push({
                                html: '<div class="fancybox__thumb" style="background-image:url(\''.concat(o, "')\"></div>"),
                                customClass: "has-thumb has-".concat(n.type || "image")
                            })
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    return e
                }
            }, {
                key: "toggle",
                value: function () {
                    "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build()
                }
            }, {
                key: "show",
                value: function () {
                    "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible")
                }
            }, {
                key: "hide",
                value: function () {
                    "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden")
                }
            }, {
                key: "cleanup",
                value: function () {
                    this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init"
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on(this.events)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off(this.events), this.cleanup()
                }
            }]), t
        }();
    W.defaults = {
        minSlideCount: 2,
        minScreenHeight: 500,
        autoStart: !0,
        key: "t",
        Carousel: {}
    };
    var j = function (t) {
            return Object.entries(t).map((function (t) {
                return t.map(encodeURIComponent).join("=")
            })).join("&")
        },
        X = {
            video: {
                autoplay: !0,
                ratio: 16 / 9
            },
            youtube: {
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            vimeo: {
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            html5video: {
                tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
                format: ""
            }
        },
        q = function () {
            function t(e) {
                o(this, t), this.fancybox = e;
                for (var i = 0, n = ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]; i < n.length; i++) {
                    var a = n[i];
                    this[a] = this[a].bind(this)
                }
                this.events = {
                    init: this.onInit,
                    ready: this.onReady,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide,
                    "Carousel.selectSlide": this.onSelectSlide,
                    "Carousel.unselectSlide": this.onUnselectSlide,
                    "Carousel.refresh": this.onRefresh
                }
            }
            return s(t, [{
                key: "onInit",
                value: function () {
                    var t, e = y(this.fancybox.items);
                    try {
                        for (e.s(); !(t = e.n()).done;) {
                            var i = t.value;
                            this.processType(i)
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                }
            }, {
                key: "processType",
                value: function (t) {
                    if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
                    var e = t.src || "",
                        i = t.type || this.fancybox.options.type,
                        n = null;
                    if (!e || "string" == typeof e) {
                        if (n = e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                            var o = j(this.fancybox.option("Html.youtube")),
                                a = encodeURIComponent(n[1]);
                            t.videoId = a, t.src = "https://www.youtube-nocookie.com/embed/".concat(a, "?").concat(o), t.thumb = t.thumb || "https://i.ytimg.com/vi/".concat(a, "/mqdefault.jpg"), t.vendor = "youtube", i = "video"
                        } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                            var s = j(this.fancybox.option("Html.vimeo")),
                                r = encodeURIComponent(n[1]);
                            t.videoId = r, t.src = "https://player.vimeo.com/video/".concat(r, "?").concat(s), t.vendor = "vimeo", i = "video"
                        } else(n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "//maps.google.".concat(n[1], "/?ll=").concat((n[2] ? n[2] + "&z=" + Math.floor(n[3]) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&"), "&output=").concat(n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "//maps.google.".concat(n[1], "/maps?q=").concat(n[2].replace("query=", "q=").replace("api=1", ""), "&output=embed"), i = "map");
                        i || ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video", t.format = t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), t.type = i || this.fancybox.option("defaultType", "image"), "html5video" !== i && "video" !== i || (t.video = x({}, this.fancybox.option("Html.video"), t.video), t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || X.video.ratio)
                    }
                }
            }, {
                key: "onReady",
                value: function () {
                    var t = this;
                    this.fancybox.Carousel.slides.forEach((function (e) {
                        e.$el && (t.setContent(e), e.index === t.fancybox.getSlide().index && t.playVideo(e))
                    }))
                }
            }, {
                key: "onCreateSlide",
                value: function (t, e, i) {
                    "ready" === this.fancybox.state && this.setContent(i)
                }
            }, {
                key: "loadInlineContent",
                value: function (t) {
                    var e;
                    if (t.src instanceof HTMLElement) e = t.src;
                    else if ("string" == typeof t.src) {
                        var i = t.src.split("#", 2),
                            n = 2 === i.length && "" === i[0] ? i[1] : i[0];
                        e = document.getElementById(n)
                    }
                    if (e) {
                        if ("clone" === t.type || e.$placeHolder) {
                            var o = (e = e.cloneNode(!0)).getAttribute("id");
                            o = o ? "".concat(o, "--clone") : "clone-".concat(this.fancybox.id, "-").concat(t.index), e.setAttribute("id", o)
                        } else {
                            var a = document.createElement("div");
                            a.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(a, e), e.$placeHolder = a
                        }
                        this.fancybox.setContent(t, e)
                    } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}")
                }
            }, {
                key: "loadAjaxContent",
                value: function (t) {
                    var e = this.fancybox,
                        i = new XMLHttpRequest;
                    e.showLoading(t), i.onreadystatechange = function () {
                        i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
                    }, i.open("GET", t.src), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(t.ajax || null), t.xhr = i
                }
            }, {
                key: "loadIframeContent",
                value: function (t) {
                    var e = this,
                        i = this.fancybox,
                        n = document.createElement("iframe");
                    if (n.className = "fancybox__iframe", n.setAttribute("id", "fancybox__iframe_".concat(i.id, "_").concat(t.index)), n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("scrolling", "auto"), t.$iframe = n, "iframe" !== t.type || !1 === t.preload) return n.setAttribute("src", t.src), this.fancybox.setContent(t, n), void this.resizeIframe(t);
                    i.showLoading(t);
                    var o = document.createElement("div");
                    o.style.visibility = "hidden", this.fancybox.setContent(t, o), o.appendChild(n), n.onerror = function () {
                        i.setError(t, "{{IFRAME_ERROR}}")
                    }, n.onload = function () {
                        i.hideLoading(t);
                        var o = !1;
                        n.isReady || (n.isReady = !0, o = !0), n.src.length && (n.parentNode.style.visibility = "", e.resizeIframe(t), o && i.revealContent(t))
                    }, n.setAttribute("src", t.src)
                }
            }, {
                key: "setAspectRatio",
                value: function (t) {
                    var e = t.$content,
                        i = t.ratio;
                    if (e) {
                        var n = t._width,
                            o = t._height;
                        if (i || n && o) {
                            Object.assign(e.style, {
                                width: n && o ? "100%" : "",
                                height: n && o ? "100%" : "",
                                maxWidth: "",
                                maxHeight: ""
                            });
                            var a = e.offsetWidth,
                                s = e.offsetHeight;
                            if (o = o || s, (n = n || a) > a || o > s) {
                                var r = Math.min(a / n, s / o);
                                n *= r, o *= r
                            }
                            Math.abs(n / o - i) > .01 && (i < n / o ? n = o * i : o = n / i), Object.assign(e.style, {
                                width: "".concat(n, "px"),
                                height: "".concat(o, "px")
                            })
                        }
                    }
                }
            }, {
                key: "resizeIframe",
                value: function (t) {
                    var e = t.$iframe;
                    if (e) {
                        var i = t._width || 0,
                            n = t._height || 0;
                        i && n && (t.autoSize = !1);
                        var o = e.parentNode,
                            a = o.style;
                        if (!1 !== t.preload && !1 !== t.autoSize) try {
                            var s = window.getComputedStyle(o),
                                r = parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
                                l = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom),
                                c = e.contentWindow.document,
                                h = c.getElementsByTagName("html")[0],
                                d = c.body;
                            d.style.overflow = "hidden", i = i || h.scrollWidth + r, a.width = "".concat(i, "px"), d.style.overflow = "", a.flex = "0 0 auto", a.height = "".concat(d.scrollHeight, "px"), n = h.scrollHeight + l
                        } catch (t) {}
                        if (i || n) {
                            var u = {
                                flex: "0 1 auto"
                            };
                            i && (u.width = "".concat(i, "px")), n && (u.height = "".concat(n, "px")), Object.assign(a, u)
                        }
                    }
                }
            }, {
                key: "onRefresh",
                value: function (t, e) {
                    var i = this;
                    e.slides.forEach((function (t) {
                        t.$el && (t.$iframe && i.resizeIframe(t), t.ratio && i.setAspectRatio(t))
                    }))
                }
            }, {
                key: "setContent",
                value: function (t) {
                    if (t && !t.isDom) {
                        switch (t.type) {
                            case "html":
                                this.fancybox.setContent(t, t.src);
                                break;
                            case "html5video":
                                this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
                                break;
                            case "inline":
                            case "clone":
                                this.loadInlineContent(t);
                                break;
                            case "ajax":
                                this.loadAjaxContent(t);
                                break;
                            case "iframe":
                            case "pdf":
                            case "video":
                            case "map":
                                this.loadIframeContent(t)
                        }
                        t.ratio && this.setAspectRatio(t)
                    }
                }
            }, {
                key: "onSelectSlide",
                value: function (t, e, i) {
                    "ready" === t.state && this.playVideo(i)
                }
            }, {
                key: "playVideo",
                value: function (t) {
                    if ("html5video" === t.type && t.video.autoplay) try {
                        var e = t.$el.querySelector("video");
                        if (e) {
                            var i = e.play();
                            void 0 !== i && i.then((function () {})).catch((function (t) {
                                e.muted = !0, e.play()
                            }))
                        }
                    } catch (t) {}
                    if ("video" === t.type && t.$iframe && t.$iframe.contentWindow) {
                        ! function e() {
                            if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
                                var i;
                                if (t.$iframe.isReady) return t.video && t.video.autoplay && (i = "youtube" == t.vendor ? {
                                    event: "command",
                                    func: "playVideo"
                                } : {
                                    method: "play",
                                    value: "true"
                                }), void(i && t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"));
                                "youtube" === t.vendor && (i = {
                                    event: "listening",
                                    id: t.$iframe.getAttribute("id")
                                }, t.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"))
                            }
                            t.poller = setTimeout(e, 250)
                        }()
                    }
                }
            }, {
                key: "onUnselectSlide",
                value: function (t, e, i) {
                    if ("html5video" !== i.type) {
                        var n = !1;
                        "vimeo" == i.vendor ? n = {
                            method: "pause",
                            value: "true"
                        } : "youtube" === i.vendor && (n = {
                            event: "command",
                            func: "pauseVideo"
                        }), n && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(n), "*"), clearTimeout(i.poller)
                    } else try {
                        i.$el.querySelector("video").pause()
                    } catch (t) {}
                }
            }, {
                key: "onRemoveSlide",
                value: function (t, e, i) {
                    i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
                    var n = i.$content;
                    "inline" === i.type && n && (n.classList.remove("fancybox__content"), "none" !== n.style.display && (n.style.display = "none")), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null);
                    var o = n && n.$placeHolder;
                    o && (o.parentNode.insertBefore(n, o), o.remove(), n.$placeHolder = null)
                }
            }, {
                key: "onMessage",
                value: function (t) {
                    try {
                        var e = JSON.parse(t.data);
                        if ("https://player.vimeo.com" === t.origin) {
                            if ("ready" === e.event) {
                                var i, n = y(document.getElementsByClassName("fancybox__iframe"));
                                try {
                                    for (n.s(); !(i = n.n()).done;) {
                                        var o = i.value;
                                        o.contentWindow === t.source && (o.isReady = 1)
                                    }
                                } catch (t) {
                                    n.e(t)
                                } finally {
                                    n.f()
                                }
                            }
                        } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1)
                    } catch (t) {}
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1)
                }
            }]), t
        }();
    q.defaults = X;
    var Y = function () {
        function t(e) {
            o(this, t), this.fancybox = e;
            for (var i = 0, n = ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]; i < n.length; i++) {
                var a = n[i];
                this[a] = this[a].bind(this)
            }
            this.events = {
                ready: this.onReady,
                closing: this.onClosing,
                done: this.onDone,
                "Carousel.change": this.onPageChange,
                "Carousel.createSlide": this.onCreateSlide,
                "Carousel.removeSlide": this.onRemoveSlide
            }
        }
        return s(t, [{
            key: "onReady",
            value: function () {
                var t = this;
                this.fancybox.Carousel.slides.forEach((function (e) {
                    e.$el && t.setContent(e)
                }))
            }
        }, {
            key: "onDone",
            value: function (t, e) {
                this.handleCursor(e)
            }
        }, {
            key: "onClosing",
            value: function (t) {
                clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach((function (t) {
                    t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents()
                })), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut()
            }
        }, {
            key: "onCreateSlide",
            value: function (t, e, i) {
                "ready" === this.fancybox.state && this.setContent(i)
            }
        }, {
            key: "onRemoveSlide",
            value: function (t, e, i) {
                i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit
            }
        }, {
            key: "setContent",
            value: function (t) {
                var e = this;
                if (!(t.isDom || t.html || t.type && "image" !== t.type || t.$image)) {
                    t.type = "image", t.state = "loading";
                    var i = document.createElement("div");
                    i.style.visibility = "hidden";
                    var n = document.createElement("img");
                    n.addEventListener("load", (function (i) {
                        i.stopImmediatePropagation(), e.onImageStatusChange(t)
                    })), n.addEventListener("error", (function () {
                        e.onImageStatusChange(t)
                    })), n.src = t.src, n.alt = "", n.draggable = !1, n.classList.add("fancybox__image"), t.srcset && n.setAttribute("srcset", t.srcset), t.sizes && n.setAttribute("sizes", t.sizes), t.$image = n;
                    var o = this.fancybox.option("Image.wrap");
                    if (o) {
                        var a = document.createElement("div");
                        a.classList.add("string" == typeof o ? o : "fancybox__image-wrap"), a.appendChild(n), i.appendChild(a), t.$wrap = a
                    } else i.appendChild(n);
                    t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, i), n.complete || n.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t)
                }
            }
        }, {
            key: "onImageStatusChange",
            value: function (t) {
                var e = this,
                    i = t.$image;
                i && "loading" === t.state && (i.complete && i.naturalWidth && i.naturalHeight ? (this.fancybox.hideLoading(t), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", (function (i) {
                    return e.onWheel(t, i)
                }), {
                    passive: !1
                }), t.$content.addEventListener("click", (function (i) {
                    return e.onClick(t, i)
                }), {
                    passive: !1
                }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"))
            }
        }, {
            key: "initSlidePanzoom",
            value: function (t) {
                var e = this;
                t.Panzoom || (t.Panzoom = new z(t.$el, x(!0, this.fancybox.option("Image.Panzoom", {}), {
                    viewport: t.$wrap,
                    content: t.$image,
                    wrapInner: !1,
                    textSelection: !0,
                    touch: this.fancybox.option("Image.touch"),
                    panOnlyZoomed: !0,
                    click: !1,
                    wheel: !1
                })), t.Panzoom.on("startAnimation", (function () {
                    e.fancybox.trigger("Image.startAnimation", t)
                })), t.Panzoom.on("endAnimation", (function () {
                    "zoomIn" === t.state && e.fancybox.done(t), e.handleCursor(t), e.fancybox.trigger("Image.endAnimation", t)
                })), t.Panzoom.on("afterUpdate", (function () {
                    e.handleCursor(t), e.fancybox.trigger("Image.afterUpdate", t)
                })))
            }
        }, {
            key: "revealContent",
            value: function (t) {
                null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t)
            }
        }, {
            key: "getZoomInfo",
            value: function (t) {
                var e = t.$thumb.getBoundingClientRect(),
                    i = e.width,
                    n = e.height,
                    o = t.$content.getBoundingClientRect(),
                    a = o.width,
                    s = o.height,
                    r = o.top - e.top,
                    l = o.left - e.left,
                    c = this.fancybox.option("Image.zoomOpacity");
                return "auto" === c && (c = Math.abs(i / n - a / s) > .1), {
                    top: r,
                    left: l,
                    scale: e.width / a,
                    opacity: c
                }
            }
        }, {
            key: "canZoom",
            value: function (t) {
                var e = this.fancybox,
                    i = e.$container;
                if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
                if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
                var n = t.$thumb;
                if (!n || "loading" === t.state) return !1;
                i.classList.add("fancybox__no-click");
                var o, a = n.getBoundingClientRect();
                if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                    var s = document.elementFromPoint(a.left + 1, a.top + 1) === n,
                        r = document.elementFromPoint(a.right - 1, a.bottom - 1) === n;
                    o = s && r
                } else o = document.elementFromPoint(a.left + .5 * a.width, a.top + .5 * a.height) === n;
                return i.classList.remove("fancybox__no-click"), o
            }
        }, {
            key: "zoomIn",
            value: function () {
                var t = this.fancybox,
                    e = t.getSlide(),
                    i = e.Panzoom,
                    n = this.getZoomInfo(e),
                    o = n.top,
                    a = n.left,
                    s = n.scale,
                    r = n.opacity;
                e.state = "zoomIn", t.trigger("reveal", e), i.panTo({
                    x: -1 * a,
                    y: -1 * o,
                    scale: s,
                    friction: 0,
                    ignoreBounds: !0
                }), e.$content.style.visibility = "", !0 === r && i.on("afterTransform", (function (t) {
                    "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - s)))
                })), i.panTo({
                    x: 0,
                    y: 0,
                    scale: 1,
                    friction: this.fancybox.option("Image.zoomFriction")
                })
            }
        }, {
            key: "zoomOut",
            value: function () {
                var t = this,
                    e = this.fancybox,
                    i = e.getSlide(),
                    n = i.Panzoom;
                if (n) {
                    i.state = "zoomOut", e.state = "customClosing", i.$caption && (i.$caption.style.visibility = "hidden");
                    var o = this.fancybox.option("Image.zoomFriction"),
                        a = function (e) {
                            var a = t.getZoomInfo(i),
                                s = a.top,
                                r = a.left,
                                l = a.scale,
                                c = a.opacity;
                            e || c || (o *= .82), n.panTo({
                                x: -1 * r,
                                y: -1 * s,
                                scale: l,
                                friction: o,
                                ignoreBounds: !0
                            }), o *= .98
                        };
                    window.addEventListener("scroll", a), n.once("endAnimation", (function () {
                        window.removeEventListener("scroll", a), e.destroy()
                    })), a()
                }
            }
        }, {
            key: "handleCursor",
            value: function (t) {
                if ("image" === t.type && t.$el) {
                    var e = t.Panzoom,
                        i = this.fancybox.option("Image.click", !1, t),
                        n = t.$el.classList;
                    if (e && "toggleZoom" === i) n[e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? "add" : "remove"](this.fancybox.option("Image.canZoomInClass"));
                    else "close" === i && n.add(this.fancybox.option("Image.canZoomOutClass"))
                }
            }
        }, {
            key: "onWheel",
            value: function (t, e) {
                if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
                    case "zoom":
                        t.Panzoom && t.Panzoom.zoomWithWheel(e);
                        break;
                    case "close":
                        this.fancybox.close();
                        break;
                    case "slide":
                        this.fancybox[e.deltaY < 0 ? "prev" : "next"]()
                }
            }
        }, {
            key: "onClick",
            value: function (t, e) {
                var i = this;
                if ("ready" === this.fancybox.state) {
                    var n = t.Panzoom;
                    if (!n || !n.dragPosition.midPoint && 0 === n.dragOffset.x && 0 === n.dragOffset.y && 1 === n.dragOffset.scale) {
                        if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
                        var o = function (n) {
                                switch (n) {
                                    case "toggleZoom":
                                        e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
                                        break;
                                    case "close":
                                        i.fancybox.close();
                                        break;
                                    case "next":
                                        e.stopPropagation(), i.fancybox.next()
                                }
                            },
                            a = this.fancybox.option("Image.click"),
                            s = this.fancybox.option("Image.doubleClick");
                        s ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, o(s)) : this.clickTimer = setTimeout((function () {
                            i.clickTimer = null, o(a)
                        }), 300) : o(a)
                    }
                }
            }
        }, {
            key: "onPageChange",
            value: function (t, e) {
                var i = t.getSlide();
                e.slides.forEach((function (t) {
                    t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
                        x: 0,
                        y: 0,
                        scale: 1,
                        friction: .8
                    })
                }))
            }
        }, {
            key: "attach",
            value: function () {
                this.fancybox.on(this.events)
            }
        }, {
            key: "detach",
            value: function () {
                this.fancybox.off(this.events)
            }
        }]), t
    }();
    Y.defaults = {
        canZoomInClass: "can-zoom_in",
        canZoomOutClass: "can-zoom_out",
        zoom: !0,
        zoomOpacity: "auto",
        zoomFriction: .82,
        ignoreCoveredThumbnail: !1,
        touch: !0,
        click: "toggleZoom",
        doubleClick: null,
        wheel: "zoom",
        fit: "contain",
        wrap: !1,
        Panzoom: {
            ratio: 1
        }
    };
    var U = function () {
            var t = window.location.hash.substr(1),
                e = t.split("-"),
                i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
            return {
                hash: t,
                slug: e.join("-"),
                index: i
            }
        },
        V = function () {
            function t(e) {
                o(this, t), this.fancybox = e;
                for (var i = 0, n = ["onChange", "onClosing"]; i < n.length; i++) {
                    var a = n[i];
                    this[a] = this[a].bind(this)
                }
                this.events = {
                    initCarousel: this.onChange,
                    "Carousel.change": this.onChange,
                    closing: this.onClosing
                }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null
            }
            return s(t, [{
                key: "onChange",
                value: function () {
                    var t = this,
                        e = this.fancybox,
                        i = e.Carousel;
                    this.timer && clearTimeout(this.timer);
                    var n = null === i.prevPage,
                        o = e.getSlide(),
                        a = o.$trigger && o.$trigger.dataset,
                        s = window.location.hash.substr(1),
                        r = !1;
                    if (o.slug) r = o.slug;
                    else {
                        var l = a && a.fancybox;
                        l && l.length && "true" !== l && (r = l + (i.slides.length > 1 ? "-" + (o.index + 1) : ""))
                    }
                    n && (this.origHash = s !== r ? this.origHash : ""), r && s !== r && (this.timer = setTimeout((function () {
                        try {
                            window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + r), n && (t.hasCreatedHistory = !0)
                        } catch (t) {}
                    }), 300))
                }
            }, {
                key: "onClosing",
                value: function () {
                    if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) {
                        if (!this.hasCreatedHistory) try {
                            return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash ? "#" + this.origHash : ""))
                        } catch (t) {}
                        window.history.back()
                    }
                }
            }, {
                key: "attach",
                value: function (t) {
                    t.on(this.events)
                }
            }, {
                key: "detach",
                value: function (t) {
                    t.off(this.events)
                }
            }], [{
                key: "startFromUrl",
                value: function () {
                    if (t.Fancybox && !t.Fancybox.getInstance()) {
                        var e = U(),
                            i = e.hash,
                            n = e.slug,
                            o = e.index;
                        if (n) {
                            var a = document.querySelector('[data-slug="'.concat(i, '"]'));
                            if (a && a.dispatchEvent(new CustomEvent("click", {
                                    bubbles: !0,
                                    cancelable: !0
                                })), !t.Fancybox.getInstance()) {
                                var s = document.querySelectorAll('[data-fancybox="'.concat(n, '"]'));
                                s.length && (null === o && 1 === s.length ? a = s[0] : o && (a = s[o - 1]), a && a.dispatchEvent(new CustomEvent("click", {
                                    bubbles: !0,
                                    cancelable: !0
                                })))
                            }
                        }
                    }
                }
            }, {
                key: "onHashChange",
                value: function () {
                    var e = U(),
                        i = e.slug,
                        n = e.index,
                        o = t.Fancybox.getInstance();
                    if (o) {
                        if (i) {
                            var a, s = o.Carousel,
                                r = y(s.slides);
                            try {
                                for (r.s(); !(a = r.n()).done;) {
                                    var l = a.value;
                                    if (l.slug && l.slug === i) return s.slideTo(l.index)
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                            var c = o.getSlide(),
                                h = c.$trigger && c.$trigger.dataset;
                            if (h && h.fancybox === i) return s.slideTo(n - 1)
                        }
                        o.plugins.Hash.hasSilentClose = !0, o.close()
                    }
                    t.startFromUrl()
                }
            }, {
                key: "create",
                value: function (e) {
                    function i() {
                        window.addEventListener("hashchange", t.onHashChange, !1), t.startFromUrl()
                    }
                    t.Fancybox = e, B && window.requestAnimationFrame((function () {
                        /complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i)
                    }))
                }
            }, {
                key: "destroy",
                value: function () {
                    window.removeEventListener("hashchange", t.onHashChange, !1)
                }
            }]), t
        }(),
        Z = {
            pageXOffset: 0,
            pageYOffset: 0,
            element: function () {
                return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
            },
            activate: function (t) {
                Z.pageXOffset = window.pageXOffset, Z.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
            },
            deactivate: function () {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }
        },
        G = function () {
            function t(e) {
                o(this, t), this.fancybox = e, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
            }
            return s(t, [{
                key: "isActive",
                value: function () {
                    return this.active
                }
            }, {
                key: "setTimer",
                value: function () {
                    var t = this;
                    if (this.active && !this.timer) {
                        var e = this.fancybox.option("slideshow.delay", 3e3);
                        this.timer = setTimeout((function () {
                            t.timer = null, t.fancybox.option("infinite") || t.fancybox.getSlide().index !== t.fancybox.Carousel.slides.length - 1 ? t.fancybox.next() : t.fancybox.jumpTo(0, {
                                friction: 0
                            })
                        }), e);
                        var i = this.$progress;
                        i || ((i = document.createElement("div")).classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(i, this.fancybox.$carousel), this.$progress = i, i.offsetHeight), i.style.transitionDuration = "".concat(e, "ms"), i.style.transform = "scaleX(1)"
                    }
                }
            }, {
                key: "clearTimer",
                value: function () {
                    clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight)
                }
            }, {
                key: "activate",
                value: function () {
                    this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1))
                }
            }, {
                key: "handleVisibilityChange",
                value: function () {
                    this.deactivate()
                }
            }, {
                key: "deactivate",
                value: function () {
                    this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1)
                }
            }, {
                key: "toggle",
                value: function () {
                    this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate()
                }
            }]), t
        }(),
        K = {
            display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
            autoEnable: !0,
            items: {
                counter: {
                    type: "div",
                    class: "fancybox__counter",
                    html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
                    tabindex: -1,
                    position: "left"
                },
                prev: {
                    type: "button",
                    class: "fancybox__button--prev",
                    label: "PREV",
                    html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
                    click: function (t) {
                        t.preventDefault(), this.fancybox.prev()
                    }
                },
                next: {
                    type: "button",
                    class: "fancybox__button--next",
                    label: "NEXT",
                    html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
                    click: function (t) {
                        t.preventDefault(), this.fancybox.next()
                    }
                },
                fullscreen: {
                    type: "button",
                    class: "fancybox__button--fullscreen",
                    label: "TOGGLE_FULLSCREEN",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
                    click: function (t) {
                        t.preventDefault(), Z.element() ? Z.deactivate() : Z.activate(this.fancybox.$container)
                    }
                },
                slideshow: {
                    type: "button",
                    class: "fancybox__button--slideshow",
                    label: "TOGGLE_SLIDESHOW",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
                    click: function (t) {
                        t.preventDefault(), this.Slideshow.toggle()
                    }
                },
                zoom: {
                    type: "button",
                    class: "fancybox__button--zoom",
                    label: "TOGGLE_ZOOM",
                    html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
                    click: function (t) {
                        t.preventDefault();
                        var e = this.fancybox.getSlide().Panzoom;
                        e && e.toggleZoom()
                    }
                },
                download: {
                    type: "link",
                    label: "DOWNLOAD",
                    class: "fancybox__button--download",
                    html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
                    click: function (t) {
                        t.stopPropagation()
                    }
                },
                thumbs: {
                    type: "button",
                    label: "TOGGLE_THUMBS",
                    class: "fancybox__button--thumbs",
                    html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
                    click: function (t) {
                        t.stopPropagation();
                        var e = this.fancybox.plugins.Thumbs;
                        e && e.toggle()
                    }
                },
                close: {
                    type: "button",
                    label: "CLOSE",
                    class: "fancybox__button--close",
                    html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
                    tabindex: 0,
                    click: function (t) {
                        t.stopPropagation(), t.preventDefault(), this.fancybox.close()
                    }
                }
            }
        },
        J = function () {
            function t(e) {
                var i = this;
                o(this, t), this.fancybox = e, this.$container = null, this.state = "init";
                for (var n = 0, a = ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]; n < a.length; n++) {
                    var s = a[n];
                    this[s] = this[s].bind(this)
                }
                this.events = {
                    init: this.onInit,
                    prepare: this.onPrepare,
                    done: this.onDone,
                    keydown: this.onKeydown,
                    closing: this.onClosing,
                    "Carousel.change": this.onChange,
                    "Carousel.settle": this.onSettle,
                    "Carousel.Panzoom.touchStart": function () {
                        return i.onRefresh()
                    },
                    "Image.startAnimation": function (t, e) {
                        return i.onRefresh(e)
                    },
                    "Image.afterUpdate": function (t, e) {
                        return i.onRefresh(e)
                    }
                }
            }
            return s(t, [{
                key: "onInit",
                value: function () {
                    if (this.fancybox.option("Toolbar.autoEnable")) {
                        var t, e = !1,
                            i = y(this.fancybox.items);
                        try {
                            for (i.s(); !(t = i.n()).done;) {
                                if ("image" === t.value.type) {
                                    e = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                        if (!e) return void(this.state = "disabled")
                    }
                    var n, o = y(this.fancybox.option("Toolbar.display"));
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var a = n.value;
                            if ("close" === (b(a) ? a.id : a)) {
                                this.fancybox.options.closeButton = !1;
                                break
                            }
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                }
            }, {
                key: "onPrepare",
                value: function () {
                    if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new G(this.fancybox), !this.fancybox.Carousel.prevPage && (this.fancybox.option("slideshow.autoStart") && this.Slideshow.activate(), this.fancybox.option("fullscreen.autoStart") && !Z.element()))) try {
                        Z.activate(this.fancybox.$container)
                    } catch (t) {}
                }
            }, {
                key: "onFsChange",
                value: function () {
                    window.scrollTo(Z.pageXOffset, Z.pageYOffset)
                }
            }, {
                key: "onSettle",
                value: function () {
                    this.Slideshow && this.Slideshow.isActive() && (this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 || this.fancybox.option("infinite") ? "done" === this.fancybox.getSlide().state && this.Slideshow.setTimer() : this.Slideshow.deactivate())
                }
            }, {
                key: "onChange",
                value: function () {
                    this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer()
                }
            }, {
                key: "onDone",
                value: function (t, e) {
                    e.index === t.getSlide().index && (this.update(), this.Slideshow && this.Slideshow.isActive() && (this.fancybox.option("infinite") || e.index !== this.fancybox.Carousel.slides.length - 1 ? this.Slideshow.setTimer() : this.Slideshow.deactivate()))
                }
            }, {
                key: "onRefresh",
                value: function (t) {
                    t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate())
                }
            }, {
                key: "onKeydown",
                value: function (t, e, i) {
                    " " === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault())
                }
            }, {
                key: "onClosing",
                value: function () {
                    this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange)
                }
            }, {
                key: "createElement",
                value: function (t) {
                    var e, i;
                    ("div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button")).classList.add("carousel__button"), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t.class) && (i = e.classList).add.apply(i, p(t.class.split(" ")));
                    t.label && e.setAttribute("title", this.fancybox.localize("{{".concat(t.label, "}}"))), t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", "");
                    var n = e.querySelector("svg");
                    return n && (n.setAttribute("role", "img"), n.setAttribute("tabindex", "-1"), n.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e
                }
            }, {
                key: "build",
                value: function () {
                    var t = this;
                    this.cleanup();
                    var e, i = this.fancybox.option("Toolbar.items"),
                        n = [{
                            position: "left",
                            items: []
                        }, {
                            position: "center",
                            items: []
                        }, {
                            position: "right",
                            items: []
                        }],
                        o = this.fancybox.plugins.Thumbs,
                        a = y(this.fancybox.option("Toolbar.display"));
                    try {
                        var s = function () {
                            var a = e.value,
                                s = void 0,
                                r = void 0;
                            if (b(a) ? (s = a.id, r = x({}, i[s], a)) : r = i[s = a], ["counter", "next", "prev", "slideshow"].includes(s) && t.fancybox.items.length < 2) return "continue";
                            if ("fullscreen" === s) {
                                if (!document.fullscreenEnabled || window.fullScreen) return "continue";
                                document.addEventListener("fullscreenchange", t.onFsChange)
                            }
                            if ("thumbs" === s && (!o || "disabled" === o.state)) return "continue";
                            if (!r) return "continue";
                            var l = r.position || "right",
                                c = n.find((function (t) {
                                    return t.position === l
                                }));
                            c && c.items.push(r)
                        };
                        for (a.s(); !(e = a.n()).done;) s()
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    var r = document.createElement("div");
                    r.classList.add("fancybox__toolbar");
                    for (var l = 0, c = n; l < c.length; l++) {
                        var h = c[l];
                        if (h.items.length) {
                            var d = document.createElement("div");
                            d.classList.add("fancybox__toolbar__items"), d.classList.add("fancybox__toolbar__items--".concat(h.position));
                            var u, f = y(h.items);
                            try {
                                for (f.s(); !(u = f.n()).done;) {
                                    var v = u.value;
                                    d.appendChild(this.createElement(v))
                                }
                            } catch (t) {
                                f.e(t)
                            } finally {
                                f.f()
                            }
                            r.appendChild(d)
                        }
                    }
                    this.fancybox.$carousel.parentNode.insertBefore(r, this.fancybox.$carousel), this.$container = r
                }
            }, {
                key: "update",
                value: function () {
                    var t, e = this.fancybox.getSlide(),
                        i = e.index,
                        n = this.fancybox.items.length,
                        o = e.downloadSrc || ("image" !== e.type || e.error ? null : e.src),
                        a = y(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));
                    try {
                        for (a.s(); !(t = a.n()).done;) {
                            var s = t.value;
                            o ? (s.removeAttribute("disabled"), s.removeAttribute("tabindex"), s.setAttribute("href", o), s.setAttribute("download", o), s.setAttribute("target", "_blank")) : (s.setAttribute("disabled", ""), s.setAttribute("tabindex", -1), s.removeAttribute("href"), s.removeAttribute("download"))
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    var r, l = e.Panzoom,
                        c = l && l.option("maxScale") > l.option("baseScale"),
                        h = y(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));
                    try {
                        for (h.s(); !(r = h.n()).done;) {
                            var d = r.value;
                            c ? d.removeAttribute("disabled") : d.setAttribute("disabled", "")
                        }
                    } catch (t) {
                        h.e(t)
                    } finally {
                        h.f()
                    }
                    var u, f = y(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));
                    try {
                        for (f.s(); !(u = f.n()).done;) {
                            u.value.innerHTML = e.index + 1
                        }
                    } catch (t) {
                        f.e(t)
                    } finally {
                        f.f()
                    }
                    var v, p = y(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));
                    try {
                        for (p.s(); !(v = p.n()).done;) {
                            v.value.innerHTML = n
                        }
                    } catch (t) {
                        p.e(t)
                    } finally {
                        p.f()
                    }
                    if (!this.fancybox.option("infinite")) {
                        var g, m = y(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));
                        try {
                            for (m.s(); !(g = m.n()).done;) {
                                var b = g.value;
                                0 === i ? b.setAttribute("disabled", "") : b.removeAttribute("disabled")
                            }
                        } catch (t) {
                            m.e(t)
                        } finally {
                            m.f()
                        }
                        var x, w = y(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));
                        try {
                            for (w.s(); !(x = w.n()).done;) {
                                var k = x.value;
                                i === n - 1 ? k.setAttribute("disabled", "") : k.removeAttribute("disabled")
                            }
                        } catch (t) {
                            w.e(t)
                        } finally {
                            w.f()
                        }
                    }
                }
            }, {
                key: "cleanup",
                value: function () {
                    this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null
                }
            }, {
                key: "attach",
                value: function () {
                    this.fancybox.on(this.events)
                }
            }, {
                key: "detach",
                value: function () {
                    this.fancybox.off(this.events), this.cleanup()
                }
            }]), t
        }();
    J.defaults = K;
    var Q = {
            ScrollLock: H,
            Thumbs: W,
            Html: q,
            Toolbar: J,
            Image: Y,
            Hash: V
        },
        tt = {
            startIndex: 0,
            preload: 1,
            infinite: !0,
            showClass: "fancybox-zoomInUp",
            hideClass: "fancybox-fadeOut",
            animated: !0,
            hideScrollbar: !0,
            parentEl: null,
            mainClass: null,
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            click: "close",
            closeButton: "inside",
            dragToClose: !0,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "next",
                ArrowDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            template: {
                closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
                spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
                main: null
            },
            l10n: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }
        },
        et = {},
        it = 0,
        nt = function (t) {
            l(i, t);
            var e = f(i);

            function i(t) {
                var n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o(this, i), (n = e.call(this, x(!0, {}, tt, a))).bindHandlers(), n.state = "init", n.setItems(t), n.attachPlugins(i.Plugins), n.trigger("init"), !0 === n.option("hideScrollbar") && n.hideScrollbar(), n.initLayout(), n.initCarousel(), n.attachEvents(), et[n.id] = d(n), n.trigger("prepare"), n.state = "ready", n.trigger("ready"), n.$container.setAttribute("aria-hidden", "false"), n.option("trapFocus") && n.focus(), n
            }
            return s(i, [{
                key: "bindHandlers",
                value: function () {
                    for (var t = 0, e = ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onTouchMove", "onTouchEnd", "onTransform"]; t < e.length; t++) {
                        var i = e[t];
                        this[i] = this[i].bind(this)
                    }
                }
            }, {
                key: "attachEvents",
                value: function () {
                    document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick)
                }
            }, {
                key: "detachEvents",
                value: function () {
                    document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick)
                }
            }, {
                key: "initLayout",
                value: function () {
                    var t = this;
                    this.$root = this.option("parentEl") || document.body;
                    var e = this.option("template.main");
                    e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = function () {
                        return t.$container.scrollLeft = 0, !1
                    }, Object.entries({
                        class: "fancybox__container",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-hidden": "true",
                        "aria-label": this.localize("{{MODAL}}")
                    }).forEach((function (e) {
                        var i;
                        return (i = t.$container).setAttribute.apply(i, p(e))
                    })), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++it, this.$container.setAttribute("id", "fancybox-" + this.id));
                    var i, n = this.options.mainClass;
                    n && (i = this.$container.classList).add.apply(i, p(n.split(" ")));
                    return document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this
                }
            }, {
                key: "setItems",
                value: function (t) {
                    var e, i = [],
                        n = y(t);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var o = e.value,
                                a = o.$trigger;
                            if (a) {
                                var s = a.dataset || {};
                                o.src = s.src || a.getAttribute("href") || o.src, o.type = s.type || o.type, !o.src && a instanceof HTMLImageElement && (o.src = a.currentSrc || o.$trigger.src)
                            }
                            var r = o.$thumb;
                            if (!r) {
                                var l = o.$trigger && o.$trigger.origTarget;
                                l && (r = l instanceof HTMLImageElement ? l : l.querySelector("img")), !r && o.$trigger && (r = o.$trigger instanceof HTMLImageElement ? o.$trigger : o.$trigger.querySelector("img"))
                            }
                            o.$thumb = r || null;
                            var c = o.thumb;
                            !c && r && !(c = r.currentSrc || r.src) && r.dataset && (c = r.dataset.lazySrc || r.dataset.src), c || "image" !== o.type || (c = o.src), o.thumb = c || null, o.caption = o.caption || "", i.push(o)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    this.items = i
                }
            }, {
                key: "initCarousel",
                value: function () {
                    var t = this;
                    return this.Carousel = new D(this.$carousel, x(!0, {}, {
                        prefix: "",
                        classNames: {
                            viewport: "fancybox__viewport",
                            track: "fancybox__track",
                            slide: "fancybox__slide"
                        },
                        textSelection: !0,
                        preload: this.option("preload"),
                        friction: .88,
                        slides: this.items,
                        initialPage: this.options.startIndex,
                        slidesPerPage: 1,
                        infiniteX: this.option("infinite"),
                        infiniteY: !0,
                        l10n: this.option("l10n"),
                        Dots: !1,
                        Navigation: {
                            classNames: {
                                main: "fancybox__nav",
                                button: "carousel__button",
                                next: "is-next",
                                prev: "is-prev"
                            }
                        },
                        Panzoom: {
                            textSelection: !0,
                            panOnlyZoomed: function () {
                                return t.Carousel && t.Carousel.pages && t.Carousel.pages.length < 2 && !t.options.dragToClose
                            },
                            lockAxis: function () {
                                if (t.Carousel) {
                                    var e = "x";
                                    return t.options.dragToClose && (e += "y"), e
                                }
                            }
                        },
                        on: {
                            "*": function (e) {
                                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                return t.trigger.apply(t, ["Carousel.".concat(e)].concat(n))
                            },
                            init: function (e) {
                                return t.Carousel = e
                            },
                            createSlide: this.onCreateSlide
                        }
                    }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
                        touchMove: this.onTouchMove,
                        afterTransform: this.onTransform,
                        touchEnd: this.onTouchEnd
                    }), this.trigger("initCarousel"), this
                }
            }, {
                key: "onCreateSlide",
                value: function (t, e) {
                    var i = e.caption || "";
                    if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), "string" == typeof i && i.length) {
                        var n = document.createElement("div"),
                            o = "fancybox__caption_".concat(this.id, "_").concat(e.index);
                        n.className = "fancybox__caption", n.innerHTML = i, n.setAttribute("id", o), e.$caption = e.$el.appendChild(n), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", o)
                    }
                }
            }, {
                key: "onFocus",
                value: function (t) {
                    this.focus(t)
                }
            }, {
                key: "onClick",
                value: function (t) {
                    // if (!t.defaultPrevented && (!t.target.closest(".fancybox__content") && !getSelection().toString().length && !1 !== this.trigger("click", t))) switch (this.option("click")) {
                    //     case "close":
                    //         this.close();
                    //         break;
                    //     case "next":
                    //         this.next()
                    // }
                }
            }, {
                key: "onTouchMove",
                value: function () {
                    var t = this.getSlide().Panzoom;
                    return !t || 1 === t.content.scale
                }
            }, {
                key: "onTouchEnd",
                value: function (t) {
                    var e = t.dragOffset.y;
                    Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut".concat(t.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t.lockAxis && t.panTo({
                        y: 0
                    })
                }
            }, {
                key: "onTransform",
                value: function (t) {
                    if (this.$backdrop) {
                        var e = Math.abs(t.content.y),
                            i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
                        this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i)
                    }
                }
            }, {
                key: "onMousedown",
                value: function () {
                    document.body.classList.add("is-using-mouse")
                }
            }, {
                key: "onKeydown",
                value: function (t) {
                    if (i.getInstance().id === this.id) {
                        document.body.classList.remove("is-using-mouse");
                        var e = t.key,
                            n = this.option("keyboard");
                        if (n && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                            var o = document.activeElement && document.activeElement.classList,
                                a = o && o.contains("carousel__button");
                            if ("Escape" !== e && !a)
                                if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(t.target.nodeName)) return;
                            if (!1 !== this.trigger("keydown", e, t)) {
                                var s = n[e];
                                "function" == typeof this[s] && this[s]()
                            }
                        }
                    }
                }
            }, {
                key: "getSlide",
                value: function () {
                    var t = this.Carousel;
                    if (!t) return null;
                    var e = null === t.page ? t.option("initialPage") : t.page,
                        i = t.pages || [];
                    return i.length && i[e] ? i[e].slides[0] : null
                }
            }, {
                key: "focus",
                value: function (t) {
                    var e = this,
                        n = function (t) {
                            if (t) {
                                e.ignoreFocusChange = !0;
                                try {
                                    t.setActive ? t.setActive() : i.preventScrollSupported ? t.focus({
                                        preventScroll: !0
                                    }) : t.focus()
                                } catch (t) {}
                                e.ignoreFocusChange = !1
                            }
                        };
                    if (!(this.ignoreFocusChange || ["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1)) {
                        var o = this.getSlide().$el;
                        if (o) {
                            t && t.preventDefault();
                            for (var a, s, r = [], l = 0, c = Array.from(this.$container.querySelectorAll(["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'])); l < c.length; l++) {
                                var h = c[l],
                                    d = o.contains(h);
                                !h.offsetParent || !d && this.Carousel.$viewport.contains(h) ? (h.dataset.origTabindex = void 0 === h.dataset.origTabindex ? h.getAttribute("tabindex") : h.dataset.origTabindex, h.tabIndex = -1) : (r.push(h), void 0 !== h.dataset.origTabindex && (h.tabIndex = h.dataset.tabindex, h.removeAttribute("data-tabindex")), h.hasAttribute("autoFocus") || !a && d ? a = h : h.matches(".fancybox__button--close") && (s = h))
                            }
                            if (r.indexOf(document.activeElement) > -1) this.lastFocus = document.activeElement;
                            else if (t) {
                                if (!o.contains(document.activeElement)) {
                                    if (this.lastFocus === r[0]) n(r[r.length - 1]);
                                    else {
                                        var u = r.indexOf(this.lastFocus);
                                        u < r.length - 2 ? n(r[u + 1]) : n(r[0])
                                    }
                                    this.lastFocus = document.activeElement
                                }
                            } else n(a || s || r[0])
                        }
                    }
                }
            }, {
                key: "hideScrollbar",
                value: function () {
                    if (B) {
                        var t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
                            e = "fancybox-style-noscroll",
                            i = document.getElementById(e);
                        i || t > 0 && ((i = document.createElement("style")).id = e, i.type = "text/css", i.innerHTML = ".compensate-for-scrollbar {padding-right: ".concat(t, "px;}"), document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"))
                    }
                }
            }, {
                key: "revealScrollbar",
                value: function () {
                    document.body.classList.remove("compensate-for-scrollbar");
                    var t = document.getElementById("fancybox-style-noscroll");
                    t && t.remove()
                }
            }, {
                key: "clearContent",
                value: function (t) {
                    this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className)
                }
            }, {
                key: "setContent",
                value: function (t, e) {
                    var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = t.$el;
                    if (e instanceof HTMLElement)["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div")).appendChild(e) : i = e;
                    else {
                        var a = document.createRange().createContextualFragment(e);
                        (i = document.createElement("div")).appendChild(a)
                    }
                    if (t.filter && !t.error && (i = i.querySelector(t.filter)), i instanceof Element) return t._className = "has-".concat(n.suffix || t.type || "unknown"), o.classList.add(t._className), i.classList.add("fancybox__content"), "none" !== i.style.display && "none" !== getComputedStyle(i).getPropertyValue("display") || (i.style.display = t.display || this.option("defaultDisplay") || "flex"), t.id && i.setAttribute("id", t.id), t.$content = i, o.prepend(i), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), i;
                    this.setError(t, "{{ELEMENT_NOT_FOUND}}")
                }
            }, {
                key: "manageCloseButton",
                value: function (t) {
                    var e = this,
                        i = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
                    if (i && ("top" !== i || !this.$closeButton)) {
                        var n = document.createElement("button");
                        n.classList.add("carousel__button", "is-close"), n.setAttribute("title", this.options.l10n.CLOSE), n.innerHTML = this.option("template.closeButton"), n.addEventListener("click", (function (t) {
                            return e.close(t)
                        })), "inside" === i ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild)
                    }
                }
            }, {
                key: "revealContent",
                value: function (t) {
                    var e = this;
                    this.trigger("reveal", t), t.$content.style.visibility = "";
                    var i = !1;
                    t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (i = void 0 === t.showClass ? this.option("showClass") : t.showClass), i ? (t.state = "animating", this.animateCSS(t.$content, i, (function () {
                        e.done(t)
                    }))) : this.done(t)
                }
            }, {
                key: "animateCSS",
                value: function (t, e, i) {
                    if (t && t.dispatchEvent(new CustomEvent("animationend", {
                            bubbles: !0,
                            cancelable: !0
                        })), t && e) {
                        t.addEventListener("animationend", (function n(o) {
                            o.currentTarget === this && (t.removeEventListener("animationend", n), i && i(), t.classList.remove(e))
                        })), t.classList.add(e)
                    } else "function" == typeof i && i()
                }
            }, {
                key: "done",
                value: function (t) {
                    t.state = "done", this.trigger("done", t);
                    var e = this.getSlide();
                    e && t.index === e.index && this.option("autoFocus") && this.focus()
                }
            }, {
                key: "setError",
                value: function (t, e) {
                    t.error = e, this.hideLoading(t), this.clearContent(t);
                    var i = document.createElement("div");
                    i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
                        suffix: "error"
                    })
                }
            }, {
                key: "showLoading",
                value: function (t) {
                    var e = this;
                    t.state = "loading", t.$el.classList.add("is-loading");
                    var i = t.$el.querySelector(".fancybox__spinner");
                    i || ((i = document.createElement("div")).classList.add("fancybox__spinner"), i.innerHTML = this.option("template.spinner"), i.addEventListener("click", (function () {
                        e.Carousel.Panzoom.velocity || e.close()
                    })), t.$el.prepend(i))
                }
            }, {
                key: "hideLoading",
                value: function (t) {
                    var e = t.$el && t.$el.querySelector(".fancybox__spinner");
                    e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), t.state = "ready")
                }
            }, {
                key: "next",
                value: function () {
                    var t = this.Carousel;
                    t && t.pages.length > 1 && t.slideNext()
                }
            }, {
                key: "prev",
                value: function () {
                    var t = this.Carousel;
                    t && t.pages.length > 1 && t.slidePrev()
                }
            }, {
                key: "jumpTo",
                value: function () {
                    var t;
                    this.Carousel && (t = this.Carousel).slideTo.apply(t, arguments)
                }
            }, {
                key: "close",
                value: function (t) {
                    var e = this;
                    if (t && t.preventDefault(), !["closing", "customClosing", "destroy"].includes(this.state) && !1 !== this.trigger("shouldClose", t) && (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" !== this.state)) {
                        this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
                        var i = this.getSlide();
                        if (this.Carousel.slides.forEach((function (t) {
                                t.$content && t.index !== i.index && e.Carousel.trigger("removeSlide", t)
                            })), "closing" === this.state) {
                            var n = void 0 === i.hideClass ? this.option("hideClass") : i.hideClass;
                            this.animateCSS(i.$content, n, (function () {
                                e.destroy()
                            }), !0)
                        }
                    }
                }
            }, {
                key: "destroy",
                value: function () {
                    if ("destroy" !== this.state) {
                        this.state = "destroy", this.trigger("destroy");
                        var t = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
                        if (this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t)
                            if (i.preventScrollSupported) t.focus({
                                preventScroll: !0
                            });
                            else {
                                var e = document.body.scrollTop;
                                t.focus(), document.body.scrollTop = e
                            } delete et[this.id];
                        var n = i.getInstance();
                        n ? n.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar())
                    }
                }
            }], [{
                key: "show",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new i(t, e)
                }
            }, {
                key: "fromEvent",
                value: function (t) {
                    // var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    // if (!t.defaultPrevented && !(t.button && 0 !== t.button || t.ctrlKey || t.metaKey || t.shiftKey)) {
                    //     var n, o, a, s = t.target;
                    //     if ((s.matches("[data-fancybox-trigger]") || (s = s.closest("[data-fancybox-trigger]"))) && (n = s && s.dataset && s.dataset.fancyboxTrigger), n) {
                    //         var r = document.querySelectorAll('[data-fancybox="'.concat(n, '"]')),
                    //             l = parseInt(s.dataset.fancyboxIndex, 10) || 0;
                    //         s = r.length ? r[l] : s
                    //     }
                    //     s || (s = t.target), Array.from(i.openers.keys()).reverse().some((function (e) {
                    //         a = s;
                    //         var i = !1;
                    //         try {
                    //             a instanceof Element && ("string" == typeof e || e instanceof String) && (i = a.matches(e) || (a = a.closest(e)))
                    //         } catch (t) {}
                    //         return !!i && (t.preventDefault(), o = e, !0)
                    //     }));
                    //     var c = !1;
                    //     if (o) {
                    //         e.event = t, e.target = a, a.origTarget = t.target, c = i.fromOpener(o, e);
                    //         var h = i.getInstance();
                    //         h && "ready" === h.state && t.detail && document.body.classList.add("is-using-mouse")
                    //     }
                    //     return c
                    // }
                }
            }, {
                key: "fromOpener",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = function (t) {
                            for (var e = ["false", "0", "no", "null", "undefined"], i = ["true", "1", "yes"], n = Object.assign({}, t.dataset), o = {}, a = 0, s = Object.entries(n); a < s.length; a++) {
                                var r = v(s[a], 2),
                                    l = r[0],
                                    c = r[1];
                                if ("fancybox" !== l)
                                    if ("width" === l || "height" === l) o["_".concat(l)] = c;
                                    else if ("string" == typeof c || c instanceof String)
                                    if (e.indexOf(c) > -1) o[l] = !1;
                                    else if (i.indexOf(o[l]) > -1) o[l] = !0;
                                else try {
                                    o[l] = JSON.parse(c)
                                } catch (t) {
                                    o[l] = c
                                } else o[l] = c
                            }
                            return t instanceof Element && (o.$trigger = t), o
                        },
                        o = [],
                        a = e.startIndex || 0,
                        s = e.target || null,
                        r = void 0 === (e = x({}, e, i.openers.get(t))).groupAttr ? "data-fancybox" : e.groupAttr,
                        l = r && s && s.getAttribute("".concat(r)),
                        c = void 0 !== e.groupAll && e.groupAll;
                    if (c || l ? (o = [].slice.call(document.querySelectorAll(t)), c || (o = o.filter((function (t) {
                            return t.getAttribute("".concat(r)) === l
                        })))) : o = [s], !o.length) return !1;
                    var h = i.getInstance();
                    return !(h && o.indexOf(h.options.$trigger) > -1) && (a = s ? o.indexOf(s) : a, new i(o = o.map(n), x({}, e, {
                        startIndex: a,
                        $trigger: s
                    })))
                }
            }, {
                key: "bind",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

                    function n() {
                        document.body.addEventListener("click", i.fromEvent, !1)
                    }
                    B && (i.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? n() : document.addEventListener("DOMContentLoaded", n)), i.openers.set(t, e))
                }
            }, {
                key: "unbind",
                value: function (t) {
                    i.openers.delete(t), i.openers.size || i.destroy()
                }
            }, {
                key: "destroy",
                value: function () {
                    for (var t; t = i.getInstance();) t.destroy();
                    i.openers = new Map, document.body.removeEventListener("click", i.fromEvent, !1)
                }
            }, {
                key: "getInstance",
                value: function (t) {
                    return t ? et[t] : Object.values(et).reverse().find((function (t) {
                        return !["closing", "customClosing", "destroy"].includes(t.state) && t
                    })) || null
                }
            }, {
                key: "close",
                value: function () {
                    for (var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = null; e = i.getInstance();)
                        if (e.close(), !t) return
                }
            }]), i
        }(A);
    nt.version = "4.0.7", nt.defaults = tt, nt.openers = new Map, nt.Plugins = Q, nt.bind("[data-fancybox]");
    for (var ot = 0, at = Object.entries(nt.Plugins || {}); ot < at.length; ot++) {
        var st = v(at[ot], 2);
        st[0];
        var rt = st[1];
        "function" == typeof rt.create && rt.create(nt)
    }
    t.Carousel = D, t.Fancybox = nt, t.Panzoom = z
}));
/*! lazysizes - v5.3.0 */

!function (e) { var t = function (u, D, f) { "use strict"; var k, H; if (function () { var e; var t = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", fastLoadedClass: "ls-is-cached", iframeLoadMode: 0, srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: true, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: true, ricTimeout: 0, throttleDelay: 125 }; H = u.lazySizesConfig || u.lazysizesConfig || {}; for (e in t) { if (!(e in H)) { H[e] = t[e] } } }(), !D || !D.getElementsByClassName) { return { init: function () { }, cfg: H, noSupport: true } } var O = D.documentElement, i = u.HTMLPictureElement, P = "addEventListener", $ = "getAttribute", q = u[P].bind(u), I = u.setTimeout, U = u.requestAnimationFrame || I, o = u.requestIdleCallback, j = /^picture$/i, r = ["load", "error", "lazyincluded", "_lazyloaded"], a = {}, G = Array.prototype.forEach, J = function (e, t) { if (!a[t]) { a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)") } return a[t].test(e[$]("class") || "") && a[t] }, K = function (e, t) { if (!J(e, t)) { e.setAttribute("class", (e[$]("class") || "").trim() + " " + t) } }, Q = function (e, t) { var a; if (a = J(e, t)) { e.setAttribute("class", (e[$]("class") || "").replace(a, " ")) } }, V = function (t, a, e) { var i = e ? P : "removeEventListener"; if (e) { V(t, a) } r.forEach(function (e) { t[i](e, a) }) }, X = function (e, t, a, i, r) { var n = D.createEvent("Event"); if (!a) { a = {} } a.instance = k; n.initEvent(t, !i, !r); n.detail = a; e.dispatchEvent(n); return n }, Y = function (e, t) { var a; if (!i && (a = u.picturefill || H.pf)) { if (t && t.src && !e[$]("srcset")) { e.setAttribute("srcset", t.src) } a({ reevaluate: true, elements: [e] }) } else if (t && t.src) { e.src = t.src } }, Z = function (e, t) { return (getComputedStyle(e, null) || {})[t] }, s = function (e, t, a) { a = a || e.offsetWidth; while (a < H.minSize && t && !e._lazysizesWidth) { a = t.offsetWidth; t = t.parentNode } return a }, ee = function () { var a, i; var t = []; var r = []; var n = t; var s = function () { var e = n; n = t.length ? r : t; a = true; i = false; while (e.length) { e.shift()() } a = false }; var e = function (e, t) { if (a && !t) { e.apply(this, arguments) } else { n.push(e); if (!i) { i = true; (D.hidden ? I : U)(s) } } }; e._lsFlush = s; return e }(), te = function (a, e) { return e ? function () { ee(a) } : function () { var e = this; var t = arguments; ee(function () { a.apply(e, t) }) } }, ae = function (e) { var a; var i = 0; var r = H.throttleDelay; var n = H.ricTimeout; var t = function () { a = false; i = f.now(); e() }; var s = o && n > 49 ? function () { o(t, { timeout: n }); if (n !== H.ricTimeout) { n = H.ricTimeout } } : te(function () { I(t) }, true); return function (e) { var t; if (e = e === true) { n = 33 } if (a) { return } a = true; t = r - (f.now() - i); if (t < 0) { t = 0 } if (e || t < 9) { s() } else { I(s, t) } } }, ie = function (e) { var t, a; var i = 99; var r = function () { t = null; e() }; var n = function () { var e = f.now() - a; if (e < i) { I(n, i - e) } else { (o || r)(r) } }; return function () { a = f.now(); if (!t) { t = I(n, i) } } }, e = function () { var v, m, c, h, e; var y, z, g, p, C, b, A; var n = /^img$/i; var d = /^iframe$/i; var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent); var _ = 0; var w = 0; var M = 0; var N = -1; var L = function (e) { M--; if (!e || M < 0 || !e.target) { M = 0 } }; var x = function (e) { if (A == null) { A = Z(D.body, "visibility") == "hidden" } return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden") }; var W = function (e, t) { var a; var i = e; var r = x(e); g -= t; b += t; p -= t; C += t; while (r && (i = i.offsetParent) && i != D.body && i != O) { r = (Z(i, "opacity") || 1) > 0; if (r && Z(i, "overflow") != "visible") { a = i.getBoundingClientRect(); r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1 } } return r }; var t = function () { var e, t, a, i, r, n, s, o, l, u, f, c; var d = k.elements; if ((h = H.loadMode) && M < 8 && (e = d.length)) { t = 0; N++; for (; t < e; t++) { if (!d[t] || d[t]._lazyRace) { continue } if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) { R(d[t]); continue } if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) { n = w } if (!u) { u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand; k._defEx = u; f = u * H.expFactor; c = H.hFac; A = null; if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) { w = f; N = 0 } else if (h > 1 && N > 1 && M < 6) { w = u } else { w = _ } } if (l !== n) { y = innerWidth + n * c; z = innerHeight + n; s = n * -1; l = n } a = d[t].getBoundingClientRect(); if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) { R(d[t]); r = true; if (M > 9) { break } } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) { i = v[0] || d[t] } } if (i && !r) { R(i) } } }; var a = ae(t); var S = function (e) { var t = e.target; if (t._lazyCache) { delete t._lazyCache; return } L(e); K(t, H.loadedClass); Q(t, H.loadingClass); V(t, B); X(t, "lazyloaded") }; var i = te(S); var B = function (e) { i({ target: e.target }) }; var T = function (e, t) { var a = e.getAttribute("data-load-mode") || H.iframeLoadMode; if (a == 0) { e.contentWindow.location.replace(t) } else if (a == 1) { e.src = t } }; var F = function (e) { var t; var a = e[$](H.srcsetAttr); if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) { e.setAttribute("media", t) } if (a) { e.setAttribute("srcset", a) } }; var s = te(function (t, e, a, i, r) { var n, s, o, l, u, f; if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) { if (i) { if (a) { K(t, H.autosizesClass) } else { t.setAttribute("sizes", i) } } s = t[$](H.srcsetAttr); n = t[$](H.srcAttr); if (r) { o = t.parentNode; l = o && j.test(o.nodeName || "") } f = e.firesLoad || "src" in t && (s || n || l); u = { target: t }; K(t, H.loadingClass); if (f) { clearTimeout(c); c = I(L, 2500); V(t, B, true) } if (l) { G.call(o.getElementsByTagName("source"), F) } if (s) { t.setAttribute("srcset", s) } else if (n && !l) { if (d.test(t.nodeName)) { T(t, n) } else { t.src = n } } if (r && (s || l)) { Y(t, { src: n }) } } if (t._lazyRace) { delete t._lazyRace } Q(t, H.lazyClass); ee(function () { var e = t.complete && t.naturalWidth > 1; if (!f || e) { if (e) { K(t, H.fastLoadedClass) } S(u); t._lazyCache = true; I(function () { if ("_lazyCache" in t) { delete t._lazyCache } }, 9) } if (t.loading == "lazy") { M-- } }, true) }); var R = function (e) { if (e._lazyRace) { return } var t; var a = n.test(e.nodeName); var i = a && (e[$](H.sizesAttr) || e[$]("sizes")); var r = i == "auto"; if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) { return } t = X(e, "lazyunveilread").detail; if (r) { re.updateElem(e, true, e.offsetWidth) } e._lazyRace = true; M++; s(e, t, r, i, a) }; var r = ie(function () { H.loadMode = 3; a() }); var o = function () { if (H.loadMode == 3) { H.loadMode = 2 } r() }; var l = function () { if (m) { return } if (f.now() - e < 999) { I(l, 999); return } m = true; H.loadMode = 3; a(); q("scroll", o, true) }; return { _: function () { e = f.now(); k.elements = D.getElementsByClassName(H.lazyClass); v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass); q("scroll", a, true); q("resize", a, true); q("pageshow", function (e) { if (e.persisted) { var t = D.querySelectorAll("." + H.loadingClass); if (t.length && t.forEach) { U(function () { t.forEach(function (e) { if (e.complete) { R(e) } }) }) } } }); if (u.MutationObserver) { new MutationObserver(a).observe(O, { childList: true, subtree: true, attributes: true }) } else { O[P]("DOMNodeInserted", a, true); O[P]("DOMAttrModified", a, true); setInterval(a, 999) } q("hashchange", a, true);["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) { D[P](e, a, true) }); if (/d$|^c/.test(D.readyState)) { l() } else { q("load", l); D[P]("DOMContentLoaded", a); I(l, 2e4) } if (k.elements.length) { t(); ee._lsFlush() } else { a() } }, checkElems: a, unveil: R, _aLSL: o } }(), re = function () { var a; var n = te(function (e, t, a, i) { var r, n, s; e._lazysizesWidth = i; i += "px"; e.setAttribute("sizes", i); if (j.test(t.nodeName || "")) { r = t.getElementsByTagName("source"); for (n = 0, s = r.length; n < s; n++) { r[n].setAttribute("sizes", i) } } if (!a.detail.dataAttr) { Y(e, a.detail) } }); var i = function (e, t, a) { var i; var r = e.parentNode; if (r) { a = s(e, r, a); i = X(e, "lazybeforesizes", { width: a, dataAttr: !!t }); if (!i.defaultPrevented) { a = i.detail.width; if (a && a !== e._lazysizesWidth) { n(e, r, i, a) } } } }; var e = function () { var e; var t = a.length; if (t) { e = 0; for (; e < t; e++) { i(a[e]) } } }; var t = ie(e); return { _: function () { a = D.getElementsByClassName(H.autosizesClass); q("resize", t) }, checkElems: t, updateElem: i } }(), t = function () { if (!t.i && D.getElementsByClassName) { t.i = true; re._(); e._() } }; return I(function () { H.init && t() }), k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee } }(e, e.document, Date); e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t) }("undefined" != typeof window ? window : {});


/*! lazysizes - v4.0.3 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(a, c) { if (!g[a]) { var d = b.createElement(c ? "link" : "script"), e = b.getElementsByTagName("script")[0]; c ? (d.rel = "stylesheet", d.href = a) : d.src = a, g[a] = !0, g[d.src || d.href] = !0, e.parentNode.insertBefore(d, e) } } var e, f, g = {}; b.addEventListener && (f = /\(|\)|\s|'/, e = function (a, c) { var d = b.createElement("img"); d.onload = function () { d.onload = null, d.onerror = null, d = null, c() }, d.onerror = d.onload, d.src = a, d && d.complete && d.onload && d.onload() }, addEventListener("lazybeforeunveil", function (a) { if (a.detail.instance == c) { var b, g, h, i; a.defaultPrevented || ("none" == a.target.preload && (a.target.preload = "auto"), b = a.target.getAttribute("data-link"), b && d(b, !0), b = a.target.getAttribute("data-script"), b && d(b), b = a.target.getAttribute("data-require"), b && (c.cfg.requireJs ? c.cfg.requireJs([b]) : d(b)), h = a.target.getAttribute("data-bg"), h && (a.detail.firesLoad = !0, g = function () { a.target.style.backgroundImage = "url(" + (f.test(h) ? JSON.stringify(h) : h) + ")", a.detail.firesLoad = !1, c.fire(a.target, "_lazyloaded", {}, !0, !0) }, e(h, g)), i = a.target.getAttribute("data-poster"), i && (a.detail.firesLoad = !0, g = function () { a.target.poster = i, a.detail.firesLoad = !1, c.fire(a.target, "_lazyloaded", {}, !0, !0) }, e(i, g))) } }, !1)) });
/*!
 * maska v1.5.0
 * (c) 2019-2021 Alexander Shabunevich
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Maska={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={"#":{pattern:/[0-9]/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,uppercase:!0},a:{pattern:/[a-zA-Z]/,lowercase:!0},"!":{escape:!0},"*":{repeat:!0}};function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return u(t).length>1?l(t)(e,t,n,r):p(e,t,n,r)}function u(e){try{return JSON.parse(e)}catch(t){return[e]}}function l(e){var t=u(e).sort((function(e,t){return e.length-t.length}));return function(e,r,a){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=t.map((function(t){return p(e,t,a,!1)})),i=s.pop();for(var u in t)if(n(i,t[u],a))return p(e,t[u],a,o);return""};function n(e,t,n){for(var r in n)n[r].escape&&(t=t.replace(new RegExp(r+".{1}","g"),""));return t.split("").filter((function(e){return n[e]&&n[e].pattern})).length>=e.length}}function p(e,t,n){for(var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=0,o=0,s="",i="";a<t.length&&o<e.length;){var u=t[a],l=e[o],p=n[u];if(p&&p.pattern)p.pattern.test(l)&&(s+=c(l,p),a++,r&&t[a]&&(n[t[a]]?n[t[a]]&&n[t[a]].escape&&(s+=t[a+1],a+=2):(s+=t[a],a++))),o++;else if(p&&p.repeat){var f=n[t[a-1]];f&&!f.pattern.test(l)?a++:a--}else p&&p.escape&&(u=t[++a]),r&&(s+=u),l===u&&o++,a++}for(;r&&a<t.length;){var v=t[a];if(n[v]){i="";break}i+=v,a++}return s+i}function c(e,t){return t.transform&&(e=t.transform(e)),t.uppercase?e.toLocaleUpperCase():t.lowercase?e.toLocaleLowerCase():e}function f(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e}function v(e){return"[object String]"===Object.prototype.toString.call(e)}var d=function(){function e(n){var r=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t(this,e),!n)throw new Error("Maska: no element for mask");if(null!=a.preprocessor&&"function"!=typeof a.preprocessor)throw new Error("Maska: preprocessor must be a function");if(a.tokens)for(var i in a.tokens)a.tokens[i]=o({},a.tokens[i]),a.tokens[i].pattern&&v(a.tokens[i].pattern)&&(a.tokens[i].pattern=new RegExp(a.tokens[i].pattern));this._opts={mask:a.mask,tokens:o(o({},s),a.tokens),preprocessor:a.preprocessor},this._el=v(n)?document.querySelectorAll(n):n.length?n:[n],this.inputEvent=function(e){return r.updateValue(e.target,e)},this.init()}var r,a,u;return r=e,(a=[{key:"init",value:function(){for(var e=this,t=function(t){var n=f(e._el[t]);!e._opts.mask||n.dataset.mask&&n.dataset.mask===e._opts.mask||(n.dataset.mask=e._opts.mask),setTimeout((function(){return e.updateValue(n)}),0),n.dataset.maskInited||(n.dataset.maskInited=!0,n.addEventListener("input",e.inputEvent),n.addEventListener("beforeinput",e.beforeInput))},n=0;n<this._el.length;n++)t(n)}},{key:"destroy",value:function(){for(var e=0;e<this._el.length;e++){var t=f(this._el[e]);t.removeEventListener("input",this.inputEvent),t.removeEventListener("beforeinput",this.beforeInput),delete t.dataset.mask,delete t.dataset.maskInited}}},{key:"updateValue",value:function(e,t){if(e&&e.type){var n=e.type.match(/^number$/i)&&e.validity.badInput;if(!e.value&&!n||!e.dataset.mask)return e.dataset.maskRawValue="",void this.dispatch("maska",e,t);var r=e.selectionEnd,a=e.value,o=a[r-1];e.dataset.maskRawValue=i(e.value,e.dataset.mask,this._opts.tokens,!1);var s=e.value;this._opts.preprocessor&&(s=this._opts.preprocessor(s)),e.value=i(s,e.dataset.mask,this._opts.tokens),t&&"insertText"===t.inputType&&r===a.length&&(r=e.value.length),function(e,t,n){for(;t&&t<e.value.length&&e.value.charAt(t-1)!==n;)t++;(e.type?e.type.match(/^(text|search|password|tel|url)$/i):!e.type)&&e===document.activeElement&&(e.setSelectionRange(t,t),setTimeout((function(){e.setSelectionRange(t,t)}),0))}(e,r,o),this.dispatch("maska",e,t),e.value!==a&&this.dispatch("input",e,t)}}},{key:"beforeInput",value:function(e){e&&e.target&&e.target.type&&e.target.type.match(/^number$/i)&&e.data&&isNaN(e.target.value+e.data)&&e.preventDefault()}},{key:"dispatch",value:function(e,t,n){t.dispatchEvent(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createEvent("Event");return n.initEvent(e,!0,!0),t&&(n.inputType=t),n}(e,n&&n.inputType||null))}}])&&n(r.prototype,a),u&&n(r,u),e}();var h,k=(h=new WeakMap,function(e,t){t.value&&(h.has(e)&&!function(e){return!(v(e.value)&&e.value===e.oldValue||Array.isArray(e.value)&&JSON.stringify(e.value)===JSON.stringify(e.oldValue)||e.value&&e.value.mask&&e.oldValue&&e.oldValue.mask&&e.value.mask===e.oldValue.mask)}(t)||h.set(e,new d(e,function(e){var t={};return e.mask?(t.mask=Array.isArray(e.mask)?JSON.stringify(e.mask):e.mask,t.tokens=e.tokens?o({},e.tokens):{},t.preprocessor=e.preprocessor):t.mask=Array.isArray(e)?JSON.stringify(e):e,t}(t.value))))});function m(e){e.directive("maska",k)}"undefined"!=typeof window&&window.Vue&&window.Vue.use&&window.Vue.use(m),e.create=function(e,t){return new d(e,t)},e.default=m,e.install=m,e.mask=i,e.maska=k,e.tokens=s,Object.defineProperty(e,"__esModule",{value:!0})}));

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(ot){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function st(t){t.parentElement.removeChild(t)}function at(t){return null!=t}function lt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ut(t,e,r){0<r&&(ft(t,e),setTimeout(function(){dt(t,e)},r))}function ct(t){return Math.max(Math.min(t,100),0)}function pt(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function ft(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function dt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ht(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}ot.PipsMode=void 0,(H=ot.PipsMode||(ot.PipsMode={})).Range="range",H.Steps="steps",H.Positions="positions",H.Count="count",H.Values="values",ot.PipsType=void 0,(H=ot.PipsType||(ot.PipsType={}))[H.None=-1]="None",H[H.NoValue=0]="NoValue",H[H.LargeValue=1]="LargeValue",H[H.SmallValue=2]="SmallValue";var u=(t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},t.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},t);function t(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([pt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var c={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},p={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},mt={tooltips:".__tooltips",aria:".__aria"};function f(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function m(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new u(e,t.snap||!1,t.singleStep)}function v(t,e){if(e=pt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function S(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function x(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function y(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function E(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function P(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function V(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),e=0<=e.indexOf("drag-all");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");E(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:e,fixed:i,snap:o,hover:s,unconstrained:a}}function k(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=pt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function M(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function A(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function U(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function D(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function O(t,e){t.documentElement=e}function L(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function T(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function gt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:c,format:c},n={step:{r:!1,t:f},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:N},snap:{r:!1,t:b},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:g},orientation:{r:!1,t:w},margin:{r:!1,t:E},limit:{r:!1,t:P},padding:{r:!1,t:C},behaviour:{r:!0,t:V},ariaFormat:{r:!1,t:A},format:{r:!1,t:U},tooltips:{r:!1,t:k},keyboardSupport:{r:!0,t:D},documentElement:{r:!1,t:O},cssPrefix:{r:!0,t:L},cssClasses:{r:!0,t:T},handleAttributes:{r:!1,t:M}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:p,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(at(e[t])||void 0!==i[t])n[t].t(r,(at(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function j(t,f,o){var i,a,l,n,s,u,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},p=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),d=t,S=f.spectrum,h=[],m=[],g=[],v=0,b={},x=t.ownerDocument,y=f.documentElement||x.documentElement,w=x.body,E="rtl"===x.dir||1===f.ort?0:100;function P(t,e){var r=x.createElement("div");return e&&ft(r,e),t.appendChild(r),r}function C(t,e){var r,t=P(t,f.cssClasses.origin),n=P(t,f.cssClasses.handle);return P(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(V()||k(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=nt(e)[u];if(null===u)return!1;!1===u&&(u=S.getDefaultStep(m[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=h[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return Q(e,S.toStepping(u),!0,!0),I("slide",e),I("update",e),I("change",e),I("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?ft(n,f.cssClasses.handleLower):e===f.handles-1&&ft(n,f.cssClasses.handleUpper),t}function N(t,e){return!!e&&P(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&P(t.firstChild,f.cssClasses.tooltip)}function V(){return d.hasAttribute("disabled")}function k(t){return a[t].hasAttribute("disabled")}function M(){s&&(Y("update"+mt.tooltips),s.forEach(function(t){t&&st(t)}),s=null)}function A(){M(),s=a.map(e),X("update"+mt.tooltips,function(t,e,r){s&&f.tooltips&&!1!==s[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),s[e].innerHTML=t)})}function U(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function D(d){var h=function(t){if(t.mode===ot.PipsMode.Range||t.mode===ot.PipsMode.Steps)return S.xVal;if(t.mode!==ot.PipsMode.Count)return t.mode===ot.PipsMode.Positions?U(t.values,t.stepped):t.mode===ot.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),U(n,t.stepped)}(d),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===ot.PipsMode.Steps,f=(f=p?S.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];a=-1<h.indexOf(r)?ot.PipsType.LargeValue:p?ot.PipsType.SmallValue:ot.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function O(i,o,s){var t,a=x.createElement("div"),n=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.valueNormal,t[ot.PipsType.LargeValue]=f.cssClasses.valueLarge,t[ot.PipsType.SmallValue]=f.cssClasses.valueSub,t),l=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.markerNormal,t[ot.PipsType.LargeValue]=f.cssClasses.markerLarge,t[ot.PipsType.SmallValue]=f.cssClasses.markerSub,t),u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value;return e+" "+(r?u:c)[f.ort]+" "+(r?n:l)[t]}return ft(a,f.cssClasses.pips),ft(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==ot.PipsType.None&&((t=P(a,!1)).className=p(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>ot.PipsType.NoValue&&((t=P(a,!1)).className=p(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),a}function L(){n&&(st(n),n=null)}function T(t){L();var e=D(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return n=d.appendChild(O(e,r,t))}function j(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||i[e]:t.height||i[e]}function z(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||ht(x),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(V()&&!s.doNotReject)&&(e=d,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(p||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!p&&{passive:!0}),r.push([t,e])}),r}function H(t){var e,r,n=ct(n=100*(t-(n=i,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=ht(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/j());return f.dir?100-n:n}function F(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function R(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);G(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function _(t,e){e.handle&&(dt(e.handle,f.cssClasses.active),--v),e.listeners.forEach(function(t){y.removeEventListener(t[0],t[1])}),0===v&&(dt(d,f.cssClasses.drag),K(),t.cursor&&(w.style.cursor="",w.removeEventListener("selectstart",lt))),e.handleNumbers.forEach(function(t){I("change",t),I("set",t),I("end",t)})}function B(t,e){var r,n,i,o;e.handleNumbers.some(k)||(1===e.handleNumbers.length&&(o=a[e.handleNumbers[0]].children[0],v+=1,ft(o,f.cssClasses.active)),t.stopPropagation(),n=z(c.move,y,R,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:m.slice()}),i=z(c.end,y,_,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=z("mouseout",y,F,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(w.style.cursor=getComputedStyle(t.target).cursor,1<a.length&&ft(d,f.cssClasses.drag),w.addEventListener("selectstart",lt,!1)),e.handleNumbers.forEach(function(t){I("start",t)}))}function r(t){t.stopPropagation();var i,o,s,e=H(t.calcPoint),r=(i=e,s=!(o=100),a.forEach(function(t,e){var r,n;k(e)||(r=m[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||ut(d,f.cssClasses.tap,f.animationDuration),Q(r,e,!0,!0),K(),I("slide",r,!0),I("update",r,!0),f.events.snap?B(t,{handleNumbers:[r]}):(I("change",r,!0),I("set",r,!0)))}function q(t){var t=H(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(b).forEach(function(t){"hover"===t.split(".")[0]&&b[t].forEach(function(t){t.call(it,e)})})}function X(t,e){b[t]=b[t]||[],b[t].push(e),"update"===t.split(".")[0]&&a.forEach(function(t,e){I("update",e)})}function Y(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(b).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==mt.aria&&e!==mt.tooltips||i===r)&&delete b[t]})}function I(r,n,i){Object.keys(b).forEach(function(t){var e=t.split(".")[0];r===e&&b[t].forEach(function(t){t.call(it,h.map(f.format.to),n,h.slice(),i||!1,m.slice(),it)})})}function W(t,e,r,n,i,o){var s;return 1<a.length&&!f.events.unconstrained&&(n&&0<e&&(s=S.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,s)),i&&e<a.length-1&&(s=S.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,s))),1<a.length&&f.limit&&(n&&0<e&&(s=S.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,s)),i&&e<a.length-1&&(s=S.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,s))),f.padding&&(0===e&&(s=S.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,s)),e===a.length-1&&(s=S.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,s))),!((r=ct(r=S.getStep(r)))===t[e]&&!o)&&r}function $(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function G(t,r,n,e,i){var o=n.slice(),s=e[0],a=[!t,t],l=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=W(o,t,o[t]+r,a[e],l[e],!1);!1===e?r=0:(r=e-o[t],o[t]=e)}):a=l=[!0];var u=!1;e.forEach(function(t,e){u=Q(t,n[t]+r,a[e],l[e])||u}),u&&(e.forEach(function(t){I("update",t),I("slide",t)}),null!=i&&I("drag",s))}function J(t,e){return f.dir?100-t-e:t}function K(){g.forEach(function(t){var e=50<m[t]?-1:1,e=3+(a.length+e*t);a[t].style.zIndex=String(e)})}function Q(t,e,r,n,i){return!1!==(e=i?e:W(m,t,e,r,n,!1))&&(e=e,m[t=t]=e,h[t]=S.fromStepping(e),e="translate("+$(J(e,0)-E+"%","0")+")",a[t].style[f.transformRule]=e,Z(t),Z(t+1),!0)}function Z(t){var e,r;l[t]&&(r=100,e="translate("+$(J(e=(e=0)!==t?m[t-1]:e,r=(r=t!==l.length-1?m[t]:r)-e)+"%","0")+")",r="scale("+$(r/100,"1")+")",l[t].style[f.transformRule]=e+" "+r)}function tt(t,e){return null===t||!1===t||void 0===t?m[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?S.toStepping(t):t)||isNaN(t)?m[e]:t)}function et(t,e,r){var n=pt(t),t=void 0===m[0];e=void 0===e||e,f.animate&&!t&&ut(d,f.cssClasses.tap,f.animationDuration),g.forEach(function(t){Q(t,tt(n[t],t),!0,!1,r)});var i,o=1===g.length?0:1;for(t&&S.hasNoSize()&&(r=!0,m[0]=0,1<g.length&&(i=100/(g.length-1),g.forEach(function(t){m[t]=t*i})));o<g.length;++o)g.forEach(function(t){Q(t,m[t],!0,!0,r)});K(),g.forEach(function(t){I("update",t),null!==n[t]&&e&&I("set",t)})}function rt(t){if(t=void 0===t?!1:t)return 1===h.length?h[0]:h.slice(0);t=h.map(f.format.to);return 1===t.length?t[0]:t}function nt(t){var e=m[t],r=S.getNearbySteps(e),n=h[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}ft(t=d,f.cssClasses.target),0===f.dir?ft(t,f.cssClasses.ltr):ft(t,f.cssClasses.rtl),0===f.ort?ft(t,f.cssClasses.horizontal):ft(t,f.cssClasses.vertical),ft(t,"rtl"===getComputedStyle(t).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),i=P(t,f.cssClasses.base),function(t,e){var r=P(e,f.cssClasses.connects);a=[],(l=[]).push(N(r,t[0]));for(var n=0;n<f.handles;n++)a.push(C(e,n)),g[n]=n,l.push(N(r,t[n+1]))}(f.connect,i),(u=f.events).fixed||a.forEach(function(t,e){z(c.start,t.children[0],B,{handleNumbers:[e]})}),u.tap&&z(c.start,i,r,{}),u.hover&&z(c.move,i,q,{hover:!0}),u.drag&&l.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==l.length-1&&(r=a[t-1],n=a[t],i=[e],o=[r,n],s=[t-1,t],ft(e,f.cssClasses.draggable),u.fixed&&(i.push(r.children[0]),i.push(n.children[0])),u.dragAll&&(o=a,s=g),i.forEach(function(t){z(c.start,t,B,{handles:o,handleNumbers:s,connect:e})}))}),et(f.start),f.pips&&T(f.pips),f.tooltips&&A(),Y("update"+mt.aria),X("update"+mt.aria,function(t,e,o,r,s){g.forEach(function(t){var e=a[t],r=W(m,t,0,!0,!0,!0),n=W(m,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var it={destroy:function(){for(Y(mt.aria),Y(mt.tooltips),Object.keys(f.cssClasses).forEach(function(t){dt(d,f.cssClasses[t])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider},steps:function(){return g.map(nt)},on:X,off:Y,get:rt,set:et,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<g.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Q(t,tt(e,t),!0,!0,n),I("update",t),r&&I("set",t)},reset:function(t){et(f.start,t)},__moveHandles:function(t,e,r){G(t,e,m,r)},options:o,updateOptions:function(e,t){var r=rt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=gt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),S=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):L(),(f.tooltips?A:M)(),m=[],et(at(e.start)?e.start:r,t)},target:d,removePips:L,removeTooltips:M,getPositions:function(){return m.slice()},getTooltips:function(){return s},getOrigins:function(){return a},pips:T};return it}function z(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=j(t,gt(e),e);return t.noUiSlider=e}var H={__spectrum:u,cssClasses:p,create:z};ot.create=z,ot.cssClasses=p,ot.default=H,Object.defineProperty(ot,"__esModule",{value:!0})});
/**
 * Swiper 8.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 8, 2022
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function T(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function C(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,T=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const C=a.grid&&a.grid.rows>1&&e.grid;let $;C&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(C&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),T%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),C&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart");const v=-o[g];if(r.updateProgress(v),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0);const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&o.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function O(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&p.target&&p.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){return s&&s!==a()&&s!==r()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}(m,p.target):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function I(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function L(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let B=!1;function N(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=O.bind(e),e.onTouchMove=I.bind(e),e.onTouchEnd=L.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!B&&(t.addEventListener("touchstart",N),B=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function j(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const _={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},q={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=T({userAgent:t.userAgent}),r.browser=C(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:j(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,q,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(q,e)}static get extendedDefaults(){return q}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function J(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function Q(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l}=e;let o;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("virtualUpdate",(()=>{s.slides.length||(o=!0),requestAnimationFrame((()=>{o&&s.slides&&s.slides.length&&(i(),o=!1)}))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(_).forEach((e=>{Object.keys(_[e]).forEach((t=>{V.prototype[t]=_[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],T=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?T.push(t):(t>c&&T.push(t),t<d&&E.push(t)));T.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&t.slidePrev()}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&t.slideNext()}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{p(),l()})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}})),Object.assign(t.navigation,{update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{h(),u(),p()})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}})),Object.assign(t.pagination,{render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function T(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el[0],d=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const p="on"===e?"addEventListener":"removeEventListener";l.touch?(o[p](a.start,x,d),o[p](a.move,y,d),o[p](a.end,E,c)):(o[p](i.start,x,d),n[p](i.move,y,d),n[p](i.end,E,c))}function C(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&T("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){t.params.scrollbar.el&&T("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{C(),v(),g()})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()})),Object.assign(t.scrollbar,{updateSize:v,setTranslate:g,init:C,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function T(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function C(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,T,C,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),T=-y,C=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>T&&(h=T),g<E&&(g=E),g>C&&(g=C)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():C(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function O(){l&&(l=!1,k("off"))}function I(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function L(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,O,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&I()})),a("destroy",(()=>{L()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&T()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&T()})),Object.assign(t.zoom,{enable:I,disable:L,in:C,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=c,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+c;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}});let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=e=>{const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||t.slideTo(t.slides.indexOf(s),0)};function b(){const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var u;u=r,a.attr("id",u),function(e,t){e.attr("aria-live",t)}(a,l),e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),o(d(t.slides),e.slideRole);const h=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;let f,b;t.slides.each(((s,a)=>{const i=d(s),r=t.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;p(i,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,h))})),t.navigation&&t.navigation.$nextEl&&(f=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(b=t.navigation.$prevEl),f&&f.length&&v(f,r,e.nextSlideMessage),b&&b.length&&v(b,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",w,!0)}a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&b()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",w,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,t.paths.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=t.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(t.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();n=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,l=t.activeIndex>t.previousIndex?"next":"prev"}else n=t.realIndex,l=n>t.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,e?0:void 0))}let n=1;const l=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(n=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<n;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(l);else for(let e=0;e<n;e+=1)s.slides.eq(t.realIndex+e).addClass(l)}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:J.bind(t),removeSlide:Q.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:i,height:r,rtlTranslate:n,size:l,browser:o}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let h,m=0;c.shadow&&(p?(h=s.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),s.append(h)),h.css({height:`${i}px`})):(h=e.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),e.append(h))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;u&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let i=90*s,r=Math.floor(i/360);n&&(i=-i,r=Math.floor(-i/360));const o=Math.max(Math.min(t[0].progress,1),-1);let h=0,f=0,g=0;s%4==0?(h=4*-r*l,g=0):(s-1)%4==0?(h=0,g=4*-r*l):(s-2)%4==0?(h=l+4*r*l,g=l):(s-3)%4==0&&(h=-l,g=3*l+4*l*r),n&&(h=-h),p||(f=h,h=0);const v=`rotateX(${p?0:-i}deg) rotateY(${p?i:0}deg) translate3d(${h}px, ${f}px, ${g}px)`;if(o<=1&&o>-1&&(m=90*s+90*o,n&&(m=90*-s-90*o)),t.transform(v),c.slideShadows){let e=p?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=p?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=d(`<div class="swiper-slide-shadow-${p?"left":"top"}"></div>`),t.append(e)),0===s.length&&(s=d(`<div class="swiper-slide-shadow-${p?"right":"bottom"}"></div>`),t.append(s)),e.length&&(e[0].style.opacity=Math.max(-o,0)),s.length&&(s[0].style.opacity=Math.max(o,0))}}if(s.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),c.shadow)if(p)h.transform(`translate3d(0px, ${i/2+c.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);else{const e=Math.abs(m)-90*Math.floor(Math.abs(m)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)}const f=o.isSafari||o.isWebView?-l/2:0;s.transform(`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:m}deg) rotateY(${t.isHorizontal()?-m:0}deg)`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let i=0;i<e.length;i+=1){const r=e.eq(i);let n=r[0].progress;t.params.flipEffect.limitRotation&&(n=Math.max(Math.min(r[0].progress,1),-1));const l=r[0].swiperSlideOffset;let o=-180*n,d=0,c=t.params.cssMode?-l-t.translate:-l,p=0;if(t.isHorizontal()?s&&(o=-o):(p=c,c=0,d=-o,o=0),r[0].style.zIndex=-Math.abs(Math.round(n))+e.length,a.slideShadows){let e=t.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),s=t.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(a,r,t.isHorizontal()?"left":"top")),0===s.length&&(s=ie(a,r,t.isHorizontal()?"right":"bottom")),e.length&&(e[0].style.opacity=Math.max(-n,0)),s.length&&(s[0].style.opacity=Math.max(n,0))}const u=`translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;se(a,r).transform(u)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-2*c,v=8-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map