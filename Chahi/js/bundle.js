! function(t) {
    var e = {};

    function i(r) { if (e[r]) return e[r].exports; var n = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports }
    i.m = t, i.c = e, i.d = function(t, e, r) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) { return t[e] }.bind(null, n));
        return r
    }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "../", i(i.s = 136)
}([function(t, e, i) {
    "use strict";
    (function(t, r) {
        i.d(e, "g", function() { return n }), i.d(e, "i", function() { return a }), i.d(e, "h", function() { return s }), i.d(e, "e", function() { return l }), i.d(e, "a", function() { return h }), i.d(e, "b", function() { return c }), i.d(e, "c", function() { return f }), i.d(e, "d", function() { return u }), i.d(e, "f", function() { return p });
        var n = "undefined" != typeof window ? window : t.exports && void 0 !== r ? r : {},
            s = function(t) {
                var e = {},
                    i = t.document,
                    r = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (r.TweenLite) return r.TweenLite;
                var n, s, a, o, l, h, c, f = function(t) {
                        var e, i = t.split("."),
                            n = r;
                        for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                        return n
                    },
                    u = f("com.greensock"),
                    p = function(t) {
                        var e, i = [],
                            r = t.length;
                        for (e = 0; e !== r; i.push(t[e++]));
                        return i
                    },
                    d = function() {},
                    m = (h = Object.prototype.toString, c = h.call([]), function(t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && h.call(t) === c) }),
                    g = {},
                    y = function(t, i, n, s) {
                        this.sc = g[t] ? g[t].sc : [], g[t] = this, this.gsClass = null, this.func = n;
                        var a = [];
                        this.check = function(o) {
                            for (var l, h, c, u, p = i.length, d = p; --p > -1;)(l = g[i[p]] || new y(i[p], [])).gsClass ? (a[p] = l.gsClass, d--) : o && l.sc.push(this);
                            if (0 === d && n)
                                for (c = (h = ("com.greensock." + t).split(".")).pop(), u = f(h.join("."))[c] = this.gsClass = n.apply(n, a), s && (r[c] = e[c] = u), p = 0; p < this.sc.length; p++) this.sc[p].check()
                        }, this.check(!0)
                    },
                    v = t._gsDefine = function(t, e, i, r) { return new y(t, e, i, r) },
                    _ = u._class = function(t, e, i) { return e = e || function() {}, v(t, [], function() { return e }, i), e };
                v.globals = r;
                var x = [0, 0, 1, 1],
                    b = _("easing.Ease", function(t, e, i, r) { this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? x.concat(e) : x }, !0),
                    w = b.map = {},
                    T = b.register = function(t, e, i, r) {
                        for (var n, s, a, o, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                            for (s = l[h], n = r ? _("easing." + s, null, !0) : u.easing[s] || {}, a = c.length; --a > -1;) o = c[a], w[s + "." + o] = w[o + s] = n[o] = t.getRatio ? t : t[o] || new t
                    };
                for ((a = b.prototype)._calcEnd = !1, a.getRatio = function(t) {
                        if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                        var e = this._type,
                            i = this._power,
                            r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
                    }, s = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --s > -1;) a = n[s] + ",Power" + s, T(new b(null, null, 1, s), a, "easeOut", !0), T(new b(null, null, 2, s), a, "easeIn" + (0 === s ? ",easeNone" : "")), T(new b(null, null, 3, s), a, "easeInOut");
                w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
                var S = _("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
                (a = S.prototype).addEventListener = function(t, e, i, r, n) {
                    n = n || 0;
                    var s, a, h = this._listeners[t],
                        c = 0;
                    for (this !== o || l || o.wake(), null == h && (this._listeners[t] = h = []), a = h.length; --a > -1;)(s = h[a]).c === e && s.s === i ? h.splice(a, 1) : 0 === c && s.pr < n && (c = a + 1);
                    h.splice(c, 0, { c: e, s: i, up: r, pr: n })
                }, a.removeEventListener = function(t, e) {
                    var i, r = this._listeners[t];
                    if (r)
                        for (i = r.length; --i > -1;)
                            if (r[i].c === e) return void r.splice(i, 1)
                }, a.dispatchEvent = function(t) {
                    var e, i, r, n = this._listeners[t];
                    if (n)
                        for ((e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)(r = n[e]) && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i))
                };
                var P = t.requestAnimationFrame,
                    E = t.cancelAnimationFrame,
                    k = Date.now || function() { return (new Date).getTime() },
                    A = k();
                for (s = (n = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !P;) P = t[n[s] + "RequestAnimationFrame"], E = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
                _("Ticker", function(t, e) {
                    var r, n, s, a, h, c = this,
                        f = k(),
                        u = !(!1 === e || !P) && "auto",
                        p = 500,
                        m = 33,
                        g = function(t) {
                            var e, i, o = k() - A;
                            o > p && (f += o - m), A += o, c.time = (A - f) / 1e3, e = c.time - h, (!r || e > 0 || !0 === t) && (c.frame++, h += e + (e >= a ? .004 : a - e), i = !0), !0 !== t && (s = n(g)), i && c.dispatchEvent("tick")
                        };
                    S.call(c), c.time = c.frame = 0, c.tick = function() { g(!0) }, c.lagSmoothing = function(t, e) {
                        if (!arguments.length) return p < 1e8;
                        p = t || 1e8, m = Math.min(e, p, 0)
                    }, c.sleep = function() { null != s && (u && E ? E(s) : clearTimeout(s), n = d, s = null, c === o && (l = !1)) }, c.wake = function(t) { null !== s ? c.sleep() : t ? f += -A + (A = k()) : c.frame > 10 && (A = k() - p + 5), n = 0 === r ? d : u && P ? P : function(t) { return setTimeout(t, 1e3 * (h - c.time) + 1 | 0) }, c === o && (l = !0), g(2) }, c.fps = function(t) {
                        if (!arguments.length) return r;
                        a = 1 / ((r = t) || 60), h = this.time + a, c.wake()
                    }, c.useRAF = function(t) {
                        if (!arguments.length) return u;
                        c.sleep(), u = t, c.fps(r)
                    }, c.fps(t), setTimeout(function() { "auto" === u && c.frame < 5 && "hidden" !== (i || {}).visibilityState && c.useRAF(!1) }, 1500)
                }), (a = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
                var C = _("core.Animation", function(t, e) {
                    if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, K) {
                        l || o.wake();
                        var i = this.vars.useFrames ? U : K;
                        i.add(this, i._time), this.vars.paused && this.paused(!0)
                    }
                });
                o = C.ticker = new u.Ticker, (a = C.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
                var M = function() {
                    l && k() - A > 2e3 && ("hidden" !== (i || {}).visibilityState || !o.lagSmoothing()) && o.wake();
                    var t = setTimeout(M, 2e3);
                    t.unref && t.unref()
                };
                M(), a.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, a.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, a.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, a.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, a.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, a.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, a.render = function(t, e, i) {}, a.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this }, a.isActive = function() {
                    var t, e = this._timeline,
                        i = this._startTime;
                    return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8
                }, a._enabled = function(t, e) { return l || o.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, a._kill = function(t, e) { return this._enabled(!1, !1) }, a.kill = function(t, e) { return this._kill(t, e), this }, a._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, a._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, a._callback = function(t) {
                    var e = this.vars,
                        i = e[t],
                        r = e[t + "Params"],
                        n = e[t + "Scope"] || e.callbackScope || this;
                    switch (r ? r.length : 0) {
                        case 0:
                            i.call(n);
                            break;
                        case 1:
                            i.call(n, r[0]);
                            break;
                        case 2:
                            i.call(n, r[0], r[1]);
                            break;
                        default:
                            i.apply(n, r)
                    }
                }, a.eventCallback = function(t, e, i, r) {
                    if ("on" === (t || "").substr(0, 2)) {
                        var n = this.vars;
                        if (1 === arguments.length) return n[t];
                        null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
                    }
                    return this
                }, a.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, a.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, a.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, a.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, a.totalTime = function(t, e, i) {
                    if (l || o.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var r = this._totalDuration,
                                n = this._timeline;
                            if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                                for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (I.length && Z(), this.render(t, e, !1), I.length && Z())
                    }
                    return this
                }, a.progress = a.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, a.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, a.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, a.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, a.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, a.paused = function(t) { if (!arguments.length) return this._paused; var e, i, r = this._timeline; return t != this._paused && r && (l || t || o.wake(), i = (e = r.rawTime()) - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
                var D = _("core.SimpleTimeline", function(t) { C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
                (a = D.prototype = new C).constructor = D, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, i, r) {
                    var n, s;
                    if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                        for (s = t._startTime; n && n._startTime > s;) n = n._prev;
                    return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
                }, a._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, a.render = function(t, e, i) { var r, n = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r }, a.rawTime = function() { return l || o.wake(), this._totalTime };
                var F = _("TweenLite", function(e, i, r) {
                        if (C.call(this, i, r), this.render = F.prototype.render, null == e) throw "Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : F.selector(e) || e;
                        var n, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                            l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? W[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                            for (this._targets = a = p(e), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++)(s = a[n]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(p(s))) : (this._siblings[n] = J(s, this, !1), 1 === l && this._siblings[n].length > 1 && tt(s, this, null, 1, this._siblings[n])) : "string" == typeof(s = a[n--] = F.selector(s)) && a.splice(n + 1, 1) : a.splice(n--, 1);
                        else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                    }, !0),
                    O = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) };
                (a = F.prototype = new C).constructor = F, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, F.version = "2.1.3", F.defaultEase = a._ease = new b(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = o, F.autoSleep = 120, F.lagSmoothing = function(t, e) { o.lagSmoothing(t, e) }, F.selector = t.$ || t.jQuery || function(e) { var r = t.$ || t.jQuery; return r ? (F.selector = r, r(e)) : (i || (i = t.document), i ? i.querySelectorAll ? i.querySelectorAll(e) : i.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e) };
                var I = [],
                    R = {},
                    L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    N = /[\+-]=-?[\.\d]/,
                    B = function(t) { for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
                    V = function(t) { return (1e3 * t | 0) / 1e3 + "" },
                    z = function(t, e, i, r) {
                        var n, s, a, o, l, h, c, f = [],
                            u = 0,
                            p = "",
                            d = 0;
                        for (f.start = t, f.end = e, t = f[0] = t + "", e = f[1] = e + "", i && (i(f), t = f[0], e = f[1]), f.length = 0, n = t.match(L) || [], s = e.match(L) || [], r && (r._next = null, r.blob = 1, f._firstPT = f._applyPT = r), l = s.length, o = 0; o < l; o++) c = s[o], p += (h = e.substr(u, e.indexOf(c, u) - u)) || !o ? h : ",", u += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), c === n[o] || n.length <= o ? p += c : (p && (f.push(p), p = ""), a = parseFloat(n[o]), f.push(a), f._firstPT = { _next: f._firstPT, t: f, p: f.length - 1, s: a, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0, f: 0, m: d && d < 4 ? Math.round : V }), u += c.length;
                        return (p += e.substr(u)) && f.push(p), f.setRatio = B, N.test(e) && (f.end = null), f
                    },
                    j = function(t, e, i, r, n, s, a, o, l) {
                        "function" == typeof r && (r = r(l || 0, t));
                        var h = typeof t[e],
                            c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                            f = "get" !== i ? i : c ? a ? t[c](a) : t[c]() : t[e],
                            u = "string" == typeof r && "=" === r.charAt(1),
                            p = { t: t, p: e, s: f, f: "function" === h, pg: 0, n: n || e, m: s ? "function" == typeof s ? s : Math.round : 0, pr: 0, c: u ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - f || 0 };
                        if (("number" != typeof f || "number" != typeof r && !u) && (a || isNaN(f) || !u && isNaN(r) || "boolean" == typeof f || "boolean" == typeof r ? (p.fp = a, p = { t: z(f, u ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : r, o || F.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }) : (p.s = parseFloat(f), u || (p.c = parseFloat(r) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                    },
                    G = F._internals = { isArray: m, isSelector: O, lazyTweens: I, blobDif: z },
                    q = F._plugins = {},
                    H = G.tweenLookup = {},
                    X = 0,
                    Y = G.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 },
                    W = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                    U = C._rootFramesTimeline = new D,
                    K = C._rootTimeline = new D,
                    $ = 30,
                    Z = G.lazyRender = function() {
                        var t, e, i = I.length;
                        for (R = {}, t = 0; t < i; t++)(e = I[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                        I.length = 0
                    };
                K._startTime = o.time, U._startTime = o.frame, K._active = U._active = !0, setTimeout(Z, 1), C._updateRoot = F.render = function() {
                    var t, e, i;
                    if (I.length && Z(), K.render((o.time - K._startTime) * K._timeScale, !1, !1), U.render((o.frame - U._startTime) * U._timeScale, !1, !1), I.length && Z(), o.frame >= $) {
                        for (i in $ = o.frame + (parseInt(F.autoSleep, 10) || 120), H) {
                            for (t = (e = H[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                            0 === e.length && delete H[i]
                        }
                        if ((!(i = K._first) || i._paused) && F.autoSleep && !U._first && 1 === o._listeners.tick.length) {
                            for (; i && i._paused;) i = i._next;
                            i || o.sleep()
                        }
                    }
                }, o.addEventListener("tick", C._updateRoot);
                var J = function(t, e, i) {
                        var r, n, s = t._gsTweenID;
                        if (H[s || (t._gsTweenID = s = "t" + X++)] || (H[s] = { target: t, tweens: [] }), e && ((r = H[s].tweens)[n = r.length] = e, i))
                            for (; --n > -1;) r[n] === e && r.splice(n, 1);
                        return H[s].tweens
                    },
                    Q = function(t, e, i, r) { var n, s, a = t.vars.onOverwrite; return a && (n = a(t, e, i, r)), (a = F.onOverwrite) && (s = a(t, e, i, r)), !1 !== n && !1 !== s },
                    tt = function(t, e, i, r, n) {
                        var s, a, o, l;
                        if (1 === r || r >= 4) {
                            for (l = n.length, s = 0; s < l; s++)
                                if ((o = n[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                                else if (5 === r) break;
                            return a
                        }
                        var h, c = e._startTime + 1e-8,
                            f = [],
                            u = 0,
                            p = 0 === e._duration;
                        for (s = n.length; --s > -1;)(o = n[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || et(e, 0, p), 0 === et(o, h, p) && (f[u++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && ((p || !o._initted) && c - o._startTime <= 2e-8 || (f[u++] = o)));
                        for (s = u; --s > -1;)
                            if (l = (o = f[s])._firstPT, 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted && l) {
                                if (2 !== r && !Q(o, e)) continue;
                                o._enabled(!1, !1) && (a = !0)
                            }
                        return a
                    },
                    et = function(t, e, i) {
                        for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline;) {
                            if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                            r = r._timeline
                        }
                        return (s /= n) > e ? s - e : i && s === e || !t._initted && s - e < 2e-8 ? 1e-8 : (s += t.totalDuration() / t._timeScale / n) > e + 1e-8 ? 0 : s - e - 1e-8
                    };
                a._init = function() {
                    var t, e, i, r, n, s, a = this.vars,
                        o = this._overwrittenProps,
                        l = this._duration,
                        h = !!a.immediateRender,
                        c = a.ease,
                        f = this._startAt;
                    if (a.startAt) {
                        for (r in f && (f.render(-1, !0), f.kill()), n = {}, a.startAt) n[r] = a.startAt[r];
                        if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== a.lazy, n.startAt = n.delay = null, n.onUpdate = a.onUpdate, n.onUpdateParams = a.onUpdateParams, n.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = F.to(this.target || {}, 0, n), h)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== l) return
                    } else if (a.runBackwards && 0 !== l)
                        if (f) f.render(-1, !0), f.kill(), this._startAt = null;
                        else { for (r in 0 !== this._time && (h = !1), i = {}, a) Y[r] && "autoCSS" !== r || (i[r] = a[r]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = F.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                    if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c, a.easeParams) : w[c] || F.defaultEase : F.defaultEase, a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                    else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                    if (e && F._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                        for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                    this._onUpdate = a.onUpdate, this._initted = !0
                }, a._initProps = function(e, i, r, n, s) {
                    var a, o, l, h, c, f;
                    if (null == e) return !1;
                    for (a in R[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && q.css && !1 !== this.vars.autoCSS && function(t, e) {
                            var i, r = {};
                            for (i in t) Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (r[i] = t[i], delete t[i]);
                            t.css = r
                        }(this.vars, e), this.vars)
                        if (f = this.vars[a], Y[a]) f && (f instanceof Array || f.push && m(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[a] = f = this._swapSelfInParams(f, this));
                        else if (q[a] && (h = new q[a])._onInitTween(e, this.vars[a], this, s)) {
                        for (this._firstPT = c = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: h._priority, m: 0 }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                    } else i[a] = j.call(this, e, a, "get", f, a, 0, null, this.vars.stringFilter, s);
                    return n && this._kill(n, e) ? this._initProps(e, i, r, n, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && tt(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), l)
                }, a.render = function(t, e, i) {
                    var r, n, s, a, o = this._time,
                        l = this._duration,
                        h = this._rawPrevTime;
                    if (t >= l - 1e-8 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-8 && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
                    else if (t < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (n = "onReverseComplete", r = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                    else if (this._totalTime = this._time = t, this._easeType) {
                        var c = t / l,
                            f = this._easeType,
                            u = this._easePower;
                        (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === u ? c *= c : 2 === u ? c *= c * c : 3 === u ? c *= c * c * c : 4 === u && (c *= c * c * c * c), this.ratio = 1 === f ? 1 - c : 2 === f ? c : t / l < .5 ? c / 2 : 1 - c / 2
                    } else this.ratio = this._ease.getRatio(t / l);
                    if (this._time !== o || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                            this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                        this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || r || i) && this._callback("onUpdate")), n && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                    }
                }, a._kill = function(t, e, i) {
                    if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
                    var r, n, s, a, o, l, h, c, f, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                        p = this._firstPT;
                    if ((m(e) || O(e)) && "number" != typeof e[0])
                        for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (l = !0);
                    else {
                        if (this._targets) {
                            for (r = this._targets.length; --r > -1;)
                                if (e === this._targets[r]) { o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all"; break }
                        } else {
                            if (e !== this.target) return !1;
                            o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                        }
                        if (o) { if (h = t || o, c = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (F.onOverwrite || this.vars.onOverwrite)) { for (s in h) o[s] && (f || (f = []), f.push(s)); if ((f || !t) && !Q(this, i, e, f)) return !1 } for (s in h)(a = o[s]) && (u && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), c && (n[s] = 1);!this._firstPT && this._initted && p && this._enabled(!1, !1) }
                    }
                    return l
                }, a.invalidate = function() { this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this); var t = this._time; return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this }, a._enabled = function(t, e) {
                    if (l || o.wake(), t && this._gc) {
                        var i, r = this._targets;
                        if (r)
                            for (i = r.length; --i > -1;) this._siblings[i] = J(r[i], this, !0);
                        else this._siblings = J(this.target, this, !0)
                    }
                    return C.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                }, F.to = function(t, e, i) { return new F(t, e, i) }, F.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new F(t, e, i) }, F.fromTo = function(t, e, i, r) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new F(t, e, r) }, F.delayedCall = function(t, e, i, r, n) { return new F(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 }) }, F.set = function(t, e) { return new F(t, 0, e) }, F.getTweensOf = function(t, e) {
                    if (null == t) return [];
                    var i, r, n, s;
                    if (t = "string" != typeof t ? t : F.selector(t) || t, (m(t) || O(t)) && "number" != typeof t[0]) {
                        for (i = t.length, r = []; --i > -1;) r = r.concat(F.getTweensOf(t[i], e));
                        for (i = r.length; --i > -1;)
                            for (s = r[i], n = i; --n > -1;) s === r[n] && r.splice(i, 1)
                    } else if (t._gsTweenID)
                        for (i = (r = J(t).concat()).length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
                    return r || []
                }, F.killTweensOf = F.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var r = F.getTweensOf(t, e), n = r.length; --n > -1;) r[n]._kill(i, t) };
                var it = _("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype }, !0);
                if (a = it.prototype, it.version = "1.19.0", it.API = 2, a._firstPT = null, a._addTween = j, a.setRatio = B, a._kill = function(t) {
                        var e, i = this._overwriteProps,
                            r = this._firstPT;
                        if (null != t[this._propName]) this._overwriteProps = [];
                        else
                            for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                        for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                        return !1
                    }, a._mod = a._roundProps = function(t) { for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, F._onPluginEvent = function(t, e) {
                        var i, r, n, s, a, o = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; o;) {
                                for (a = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                                (o._prev = r ? r._prev : s) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : s = o, o = a
                            }
                            o = e._firstPT = n
                        }
                        for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                        return i
                    }, it.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === it.API && (q[(new t[e])._propName] = t[e]); return !0 }, v.plugin = function(t) {
                        if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                        var e, i = t.propName,
                            r = t.priority || 0,
                            n = t.overwriteProps,
                            s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                            a = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { it.call(this, i, r), this._overwriteProps = n || [] }, !0 === t.global),
                            o = a.prototype = new it(i);
                        for (e in o.constructor = a, a.API = t.API, s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                        return a.version = t.version, it.activate([a]), a
                    }, n = t._gsQueue) { for (s = 0; s < n.length; s++) n[s](); for (a in g) g[a].func || t.console.log("GSAP encountered missing dependency: " + a) }
                return l = !1, F
            }(n),
            a = n.GreenSockGlobals,
            o = a.com.greensock,
            l = o.core.SimpleTimeline,
            h = o.core.Animation,
            c = a.Ease,
            f = a.Linear,
            u = (a.Power1, a.Power2, a.Power3),
            p = (a.Power4, a.TweenPlugin);
        o.events.EventDispatcher
    }).call(this, i(337)(t), i(54))
}, function(t, e, i) {
    var r = i(2),
        n = i(9),
        s = i(17),
        a = i(14),
        o = i(21),
        l = function(t, e, i) {
            var h, c, f, u, p = t & l.F,
                d = t & l.G,
                m = t & l.S,
                g = t & l.P,
                y = t & l.B,
                v = d ? r : m ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                _ = d ? n : n[e] || (n[e] = {}),
                x = _.prototype || (_.prototype = {});
            for (h in d && (i = e), i) f = ((c = !p && v && void 0 !== v[h]) ? v : i)[h], u = y && c ? o(f, r) : g && "function" == typeof f ? o(Function.call, f) : f, v && a(v, h, f, t & l.U), _[h] != f && s(_, h, u), g && x[h] != f && (x[h] = f)
        };
    r.core = n, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
}, function(t, e) { var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = i) }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e, i) {
    var r = i(5);
    t.exports = function(t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t }
}, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, i) {
    var r = i(55)("wks"),
        n = i(34),
        s = i(2).Symbol,
        a = "function" == typeof s;
    (t.exports = function(t) { return r[t] || (r[t] = a && s[t] || (a ? s : n)("Symbol." + t)) }).store = r
}, function(t, e, i) {
    var r = i(23),
        n = Math.min;
    t.exports = function(t) { return t > 0 ? n(r(t), 9007199254740991) : 0 }
}, function(t, e, i) {
    "use strict";
    var r = i(325);

    function n() {
        var t = navigator.userAgent.toLowerCase(),
            e = navigator.appVersion.toLowerCase(),
            i = /windows phone|iemobile|wpdesktop/.test(t),
            r = !i && /android.*mobile/.test(t),
            n = !i && !r && /android/i.test(t),
            s = r || n,
            a = !i && /ip(hone|od|ad)/i.test(t) && !window.MSStream,
            o = !i && /ipad/i.test(t) && a,
            l = n || o,
            h = r || a && !o || i,
            c = h || l,
            f = t.indexOf("firefox") > -1,
            u = !!t.match(/version\/[\d\.]+.*safari/),
            p = t.indexOf("opr") > -1,
            d = !window.ActiveXObject && "ActiveXObject" in window,
            m = e.indexOf("msie") > -1 || d || e.indexOf("edge") > -1,
            g = t.indexOf("edge") > -1,
            y = null !== window.chrome && void 0 !== window.chrome && "google inc." == navigator.vendor.toLowerCase() && !p && !g;
        this.infos = { isDroid: s, isDroidPhone: r, isDroidTablet: n, isWindowsPhone: i, isIos: a, isIpad: o, isDevice: c, isEdge: g, isIE: m, isIE11: d, isPhone: h, isTablet: l, isFirefox: f, isSafari: u, isOpera: p, isChrome: y, isDesktop: !h && !l }, Object.keys(this.infos).forEach(function(t) { Object.defineProperty(this, t, { get: function() { return this.infos[t] } }) }, this), Object.freeze(this)
    }
    t.exports = new n, n.prototype.addClasses = function(t) { Object.keys(this.infos).forEach(function(e) { this.infos[e] && function(t, e) { t.addClass ? t.addClass(e) : t.classList ? t.classList.add(e) : t.className += " " + e }(t, r(e)) }, this) }, n.prototype.getInfos = function() { return t = this.infos, JSON.parse(JSON.stringify(t)); var t }
}, function(t, e) { var i = t.exports = { version: "2.6.9" }; "number" == typeof __e && (__e = i) }, function(t, e, i) { t.exports = !i(3)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e, i) {
    var r = i(4),
        n = i(98),
        s = i(31),
        a = Object.defineProperty;
    e.f = i(10) ? Object.defineProperty : function(t, e, i) {
        if (r(t), e = s(e, !0), r(i), n) try { return a(t, e, i) } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (t[e] = i.value), t
    }
}, function(t, e, i) {
    var r = i(29);
    t.exports = function(t) { return Object(r(t)) }
}, function(t, e, i) {
    var r = i(334),
        n = function(t, e, i, r) { return t.addEventListener(e, i, r || !1) },
        s = function(t, e, i, r) { return t.removeEventListener(e, i, r || !1) },
        a = function(t, e, i) {
            var n = r(e, i);
            t.dispatchEvent(n)
        };
    document.addEventListener || (n = function(t, e, i) { return t.attachEvent("on" + e, i) }), document.removeEventListener || (s = function(t, e, i) { return t.detachEvent("on" + e, i) }), document.dispatchEvent || (a = function(t, e, i) { var n = r(e, i); return t.fireEvent("on" + n.type, n) }), t.exports = { on: n, off: s, once: function(t, e, i, r) { n(t, e, function n(a) { s(t, e, n, r), i(a) }, r) }, emit: a }
}, function(t, e, i) {
    var r = i(2),
        n = i(17),
        s = i(16),
        a = i(34)("src"),
        o = i(142),
        l = ("" + o).split("toString");
    i(9).inspectSource = function(t) { return o.call(t) }, (t.exports = function(t, e, i, o) {
        var h = "function" == typeof i;
        h && (s(i, "name") || n(i, "name", e)), t[e] !== i && (h && (s(i, a) || n(i, a, t[e] ? "" + t[e] : l.join(String(e)))), t === r ? t[e] = i : o ? t[e] ? t[e] = i : n(t, e, i) : (delete t[e], n(t, e, i)))
    })(Function.prototype, "toString", function() { return "function" == typeof this && this[a] || o.call(this) })
}, function(t, e, i) {
    var r = i(1),
        n = i(3),
        s = i(29),
        a = /"/g,
        o = function(t, e, i, r) {
            var n = String(s(t)),
                o = "<" + e;
            return "" !== i && (o += " " + i + '="' + String(r).replace(a, "&quot;") + '"'), o + ">" + n + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var i = {};
        i[t] = e(o), r(r.P + r.F * n(function() { var e = "" [t]('"'); return e !== e.toLowerCase() || e.split('"').length > 3 }), "String", i)
    }
}, function(t, e) {
    var i = {}.hasOwnProperty;
    t.exports = function(t, e) { return i.call(t, e) }
}, function(t, e, i) {
    var r = i(11),
        n = i(33);
    t.exports = i(10) ? function(t, e, i) { return r.f(t, e, n(1, i)) } : function(t, e, i) { return t[e] = i, t }
}, function(t, e, i) {
    var r = i(50),
        n = i(29);
    t.exports = function(t) { return r(n(t)) }
}, function(t, e, i) {
    "use strict";
    var r = i(3);
    t.exports = function(t, e) { return !!t && r(function() { e ? t.call(null, function() {}, 1) : t.call(null) }) }
}, function(t, e, i) {
    var r = i(327),
        n = /\s+/,
        s = Object.prototype.toString;

    function a(t) { if (t.classList) return t.classList; var e = t.className.replace(/^\s+|\s+$/g, "").split(n); return "" === e[0] && e.shift(), e }

    function o(t, e) {
        if (t.classList) t.classList.add(e);
        else { var i = a(t);~r(i, e) || i.push(e), t.className = i.join(" ") }
    }

    function l(t, e) { return t.classList ? t.classList.contains(e) : !!~r(a(t), e) }

    function h(t, e) {
        if ("[object RegExp]" == s.call(e)) return c(t, e);
        if (t.classList) t.classList.remove(e);
        else {
            var i = a(t),
                n = r(i, e);
            ~n && i.splice(n, 1), t.className = i.join(" ")
        }
    }

    function c(t, e, i) { for (var r = Array.prototype.slice.call(a(t)), n = 0; n < r.length; n++) e.test(r[n]) && h(t, r[n]) }
    t.exports = a, t.exports.add = o, t.exports.contains = l, t.exports.has = l, t.exports.toggle = function(t, e) {
        if (t.classList) return t.classList.toggle(e);
        l(t, e) ? h(t, e) : o(t, e)
    }, t.exports.remove = h, t.exports.removeMatching = c
}, function(t, e, i) {
    var r = i(22);
    t.exports = function(t, e, i) {
        if (r(t), void 0 === e) return t;
        switch (i) {
            case 1:
                return function(i) { return t.call(e, i) };
            case 2:
                return function(i, r) { return t.call(e, i, r) };
            case 3:
                return function(i, r, n) { return t.call(e, i, r, n) }
        }
        return function() { return t.apply(e, arguments) }
    }
}, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e) {
    var i = Math.ceil,
        r = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : i)(t) }
}, function(t, e, i) {
    var r = i(51),
        n = i(33),
        s = i(18),
        a = i(31),
        o = i(16),
        l = i(98),
        h = Object.getOwnPropertyDescriptor;
    e.f = i(10) ? h : function(t, e) {
        if (t = s(t), e = a(e, !0), l) try { return h(t, e) } catch (t) {}
        if (o(t, e)) return n(!r.f.call(t, e), t[e])
    }
}, function(t, e, i) {
    var r = i(1),
        n = i(9),
        s = i(3);
    t.exports = function(t, e) {
        var i = (n.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(i), r(r.S + r.F * s(function() { i(1) }), "Object", a)
    }
}, function(t, e, i) {
    var r = i(21),
        n = i(50),
        s = i(12),
        a = i(7),
        o = i(114);
    t.exports = function(t, e) {
        var i = 1 == t,
            l = 2 == t,
            h = 3 == t,
            c = 4 == t,
            f = 6 == t,
            u = 5 == t || f,
            p = e || o;
        return function(e, o, d) {
            for (var m, g, y = s(e), v = n(y), _ = r(o, d, 3), x = a(v.length), b = 0, w = i ? p(e, x) : l ? p(e, 0) : void 0; x > b; b++)
                if ((u || b in v) && (g = _(m = v[b], b, y), t))
                    if (i) w[b] = g;
                    else if (g) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return m;
                    case 6:
                        return b;
                    case 2:
                        w.push(m)
                } else if (c) return !1;
            return f ? -1 : h || c ? c : w
        }
    }
}, function(t, e, i) {
    var r, n;
    ! function(s, a) {
        "use strict";
        r = [i(326)], void 0 === (n = function(t) {
            return function(t, e) {
                var i = t.jQuery,
                    r = t.console;

                function n(t, e) { for (var i in e) t[i] = e[i]; return t }
                var s = Array.prototype.slice;

                function a(t, e, o) {
                    if (!(this instanceof a)) return new a(t, e, o);
                    var l, h = t;
                    ("string" == typeof t && (h = document.querySelectorAll(t)), h) ? (this.elements = (l = h, Array.isArray(l) ? l : "object" == typeof l && "number" == typeof l.length ? s.call(l) : [l]), this.options = n({}, this.options), "function" == typeof e ? o = e : n(this.options, e), o && this.on("always", o), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (h || t))
                }
                a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function() { this.images = [], this.elements.forEach(this.addElementImages, this) }, a.prototype.addElementImages = function(t) {
                    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && o[e]) {
                        for (var i = t.querySelectorAll("img"), r = 0; r < i.length; r++) {
                            var n = i[r];
                            this.addImage(n)
                        }
                        if ("string" == typeof this.options.background) {
                            var s = t.querySelectorAll(this.options.background);
                            for (r = 0; r < s.length; r++) {
                                var a = s[r];
                                this.addElementBackgroundImages(a)
                            }
                        }
                    }
                };
                var o = { 1: !0, 9: !0, 11: !0 };

                function l(t) { this.img = t }

                function h(t, e) { this.url = t, this.element = e, this.img = new Image }
                return a.prototype.addElementBackgroundImages = function(t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var i = /url\((['"])?(.*?)\1\)/gi, r = i.exec(e.backgroundImage); null !== r;) {
                            var n = r && r[2];
                            n && this.addBackground(n, t), r = i.exec(e.backgroundImage)
                        }
                }, a.prototype.addImage = function(t) {
                    var e = new l(t);
                    this.images.push(e)
                }, a.prototype.addBackground = function(t, e) {
                    var i = new h(t, e);
                    this.images.push(i)
                }, a.prototype.check = function() {
                    var t = this;

                    function e(e, i, r) { setTimeout(function() { t.progress(e, i, r) }) }
                    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) { t.once("progress", e), t.check() }) : this.complete()
                }, a.prototype.progress = function(t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e) }, a.prototype.complete = function() {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this)
                    }
                }, l.prototype = Object.create(e.prototype), l.prototype.check = function() { this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src) }, l.prototype.getIsImageComplete = function() { return this.img.complete && this.img.naturalWidth }, l.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]) }, l.prototype.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, l.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, l.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, l.prototype.unbindEvents = function() { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, h.prototype = Object.create(l.prototype), h.prototype.check = function() { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, h.prototype.unbindEvents = function() { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, h.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]) }, a.makeJQueryPlugin = function(e) {
                    (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) { return new a(this, t, e).jqDeferred.promise(i(this)) })
                }, a.makeJQueryPlugin(), a
            }(s, t)
        }.apply(e, r)) || (t.exports = n)
    }("undefined" != typeof window ? window : this)
}, function(t, e) {
    var i = {}.toString;
    t.exports = function(t) { return i.call(t).slice(8, -1) }
}, function(t, e) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e, i) {
    "use strict";
    if (i(10)) {
        var r = i(35),
            n = i(2),
            s = i(3),
            a = i(1),
            o = i(66),
            l = i(93),
            h = i(21),
            c = i(47),
            f = i(33),
            u = i(17),
            p = i(48),
            d = i(23),
            m = i(7),
            g = i(125),
            y = i(37),
            v = i(31),
            _ = i(16),
            x = i(52),
            b = i(5),
            w = i(12),
            T = i(85),
            S = i(38),
            P = i(40),
            E = i(39).f,
            k = i(87),
            A = i(34),
            C = i(6),
            M = i(26),
            D = i(56),
            F = i(53),
            O = i(89),
            I = i(45),
            R = i(59),
            L = i(46),
            N = i(88),
            B = i(116),
            V = i(11),
            z = i(24),
            j = V.f,
            G = z.f,
            q = n.RangeError,
            H = n.TypeError,
            X = n.Uint8Array,
            Y = Array.prototype,
            W = l.ArrayBuffer,
            U = l.DataView,
            K = M(0),
            $ = M(2),
            Z = M(3),
            J = M(4),
            Q = M(5),
            tt = M(6),
            et = D(!0),
            it = D(!1),
            rt = O.values,
            nt = O.keys,
            st = O.entries,
            at = Y.lastIndexOf,
            ot = Y.reduce,
            lt = Y.reduceRight,
            ht = Y.join,
            ct = Y.sort,
            ft = Y.slice,
            ut = Y.toString,
            pt = Y.toLocaleString,
            dt = C("iterator"),
            mt = C("toStringTag"),
            gt = A("typed_constructor"),
            yt = A("def_constructor"),
            vt = o.CONSTR,
            _t = o.TYPED,
            xt = o.VIEW,
            bt = M(1, function(t, e) { return Et(F(t, t[yt]), e) }),
            wt = s(function() { return 1 === new X(new Uint16Array([1]).buffer)[0] }),
            Tt = !!X && !!X.prototype.set && s(function() { new X(1).set({}) }),
            St = function(t, e) { var i = d(t); if (i < 0 || i % e) throw q("Wrong offset!"); return i },
            Pt = function(t) { if (b(t) && _t in t) return t; throw H(t + " is not a typed array!") },
            Et = function(t, e) { if (!(b(t) && gt in t)) throw H("It is not a typed array constructor!"); return new t(e) },
            kt = function(t, e) { return At(F(t, t[yt]), e) },
            At = function(t, e) { for (var i = 0, r = e.length, n = Et(t, r); r > i;) n[i] = e[i++]; return n },
            Ct = function(t, e, i) { j(t, e, { get: function() { return this._d[i] } }) },
            Mt = function(t) {
                var e, i, r, n, s, a, o = w(t),
                    l = arguments.length,
                    c = l > 1 ? arguments[1] : void 0,
                    f = void 0 !== c,
                    u = k(o);
                if (null != u && !T(u)) {
                    for (a = u.call(o), r = [], e = 0; !(s = a.next()).done; e++) r.push(s.value);
                    o = r
                }
                for (f && l > 2 && (c = h(c, arguments[2], 2)), e = 0, i = m(o.length), n = Et(this, i); i > e; e++) n[e] = f ? c(o[e], e) : o[e];
                return n
            },
            Dt = function() { for (var t = 0, e = arguments.length, i = Et(this, e); e > t;) i[t] = arguments[t++]; return i },
            Ft = !!X && s(function() { pt.call(new X(1)) }),
            Ot = function() { return pt.apply(Ft ? ft.call(Pt(this)) : Pt(this), arguments) },
            It = {
                copyWithin: function(t, e) { return B.call(Pt(this), t, e, arguments.length > 2 ? arguments[2] : void 0) },
                every: function(t) { return J(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                fill: function(t) { return N.apply(Pt(this), arguments) },
                filter: function(t) { return kt(this, $(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0)) },
                find: function(t) { return Q(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                findIndex: function(t) { return tt(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                forEach: function(t) { K(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                indexOf: function(t) { return it(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                includes: function(t) { return et(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                join: function(t) { return ht.apply(Pt(this), arguments) },
                lastIndexOf: function(t) { return at.apply(Pt(this), arguments) },
                map: function(t) { return bt(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                reduce: function(t) { return ot.apply(Pt(this), arguments) },
                reduceRight: function(t) { return lt.apply(Pt(this), arguments) },
                reverse: function() { for (var t, e = Pt(this).length, i = Math.floor(e / 2), r = 0; r < i;) t = this[r], this[r++] = this[--e], this[e] = t; return this },
                some: function(t) { return Z(Pt(this), t, arguments.length > 1 ? arguments[1] : void 0) },
                sort: function(t) { return ct.call(Pt(this), t) },
                subarray: function(t, e) {
                    var i = Pt(this),
                        r = i.length,
                        n = y(t, r);
                    return new(F(i, i[yt]))(i.buffer, i.byteOffset + n * i.BYTES_PER_ELEMENT, m((void 0 === e ? r : y(e, r)) - n))
                }
            },
            Rt = function(t, e) { return kt(this, ft.call(Pt(this), t, e)) },
            Lt = function(t) {
                Pt(this);
                var e = St(arguments[1], 1),
                    i = this.length,
                    r = w(t),
                    n = m(r.length),
                    s = 0;
                if (n + e > i) throw q("Wrong length!");
                for (; s < n;) this[e + s] = r[s++]
            },
            Nt = { entries: function() { return st.call(Pt(this)) }, keys: function() { return nt.call(Pt(this)) }, values: function() { return rt.call(Pt(this)) } },
            Bt = function(t, e) { return b(t) && t[_t] && "symbol" != typeof e && e in t && String(+e) == String(e) },
            Vt = function(t, e) { return Bt(t, e = v(e, !0)) ? f(2, t[e]) : G(t, e) },
            zt = function(t, e, i) { return !(Bt(t, e = v(e, !0)) && b(i) && _(i, "value")) || _(i, "get") || _(i, "set") || i.configurable || _(i, "writable") && !i.writable || _(i, "enumerable") && !i.enumerable ? j(t, e, i) : (t[e] = i.value, t) };
        vt || (z.f = Vt, V.f = zt), a(a.S + a.F * !vt, "Object", { getOwnPropertyDescriptor: Vt, defineProperty: zt }), s(function() { ut.call({}) }) && (ut = pt = function() { return ht.call(this) });
        var jt = p({}, It);
        p(jt, Nt), u(jt, dt, Nt.values), p(jt, { slice: Rt, set: Lt, constructor: function() {}, toString: ut, toLocaleString: Ot }), Ct(jt, "buffer", "b"), Ct(jt, "byteOffset", "o"), Ct(jt, "byteLength", "l"), Ct(jt, "length", "e"), j(jt, mt, { get: function() { return this[_t] } }), t.exports = function(t, e, i, l) {
            var h = t + ((l = !!l) ? "Clamped" : "") + "Array",
                f = "get" + t,
                p = "set" + t,
                d = n[h],
                y = d || {},
                v = d && P(d),
                _ = !d || !o.ABV,
                w = {},
                T = d && d.prototype,
                k = function(t, i) {
                    j(t, i, {
                        get: function() { return function(t, i) { var r = t._d; return r.v[f](i * e + r.o, wt) }(this, i) },
                        set: function(t) {
                            return function(t, i, r) {
                                var n = t._d;
                                l && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), n.v[p](i * e + n.o, r, wt)
                            }(this, i, t)
                        },
                        enumerable: !0
                    })
                };
            _ ? (d = i(function(t, i, r, n) {
                c(t, d, h, "_d");
                var s, a, o, l, f = 0,
                    p = 0;
                if (b(i)) {
                    if (!(i instanceof W || "ArrayBuffer" == (l = x(i)) || "SharedArrayBuffer" == l)) return _t in i ? At(d, i) : Mt.call(d, i);
                    s = i, p = St(r, e);
                    var y = i.byteLength;
                    if (void 0 === n) { if (y % e) throw q("Wrong length!"); if ((a = y - p) < 0) throw q("Wrong length!") } else if ((a = m(n) * e) + p > y) throw q("Wrong length!");
                    o = a / e
                } else o = g(i), s = new W(a = o * e);
                for (u(t, "_d", { b: s, o: p, l: a, e: o, v: new U(s) }); f < o;) k(t, f++)
            }), T = d.prototype = S(jt), u(T, "constructor", d)) : s(function() { d(1) }) && s(function() { new d(-1) }) && R(function(t) { new d, new d(null), new d(1.5), new d(t) }, !0) || (d = i(function(t, i, r, n) { var s; return c(t, d, h), b(i) ? i instanceof W || "ArrayBuffer" == (s = x(i)) || "SharedArrayBuffer" == s ? void 0 !== n ? new y(i, St(r, e), n) : void 0 !== r ? new y(i, St(r, e)) : new y(i) : _t in i ? At(d, i) : Mt.call(d, i) : new y(g(i)) }), K(v !== Function.prototype ? E(y).concat(E(v)) : E(y), function(t) { t in d || u(d, t, y[t]) }), d.prototype = T, r || (T.constructor = d));
            var A = T[dt],
                C = !!A && ("values" == A.name || null == A.name),
                M = Nt.values;
            u(d, gt, !0), u(T, _t, h), u(T, xt, !0), u(T, yt, d), (l ? new d(1)[mt] == h : mt in T) || j(T, mt, { get: function() { return h } }), w[h] = d, a(a.G + a.W + a.F * (d != y), w), a(a.S, h, { BYTES_PER_ELEMENT: e }), a(a.S + a.F * s(function() { y.of.call(d, 1) }), h, { from: Mt, of: Dt }), "BYTES_PER_ELEMENT" in T || u(T, "BYTES_PER_ELEMENT", e), a(a.P, h, It), L(h), a(a.P + a.F * Tt, h, { set: Lt }), a(a.P + a.F * !C, h, Nt), r || T.toString == ut || (T.toString = ut), a(a.P + a.F * s(function() { new d(1).slice() }), h, { slice: Rt }), a(a.P + a.F * (s(function() { return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString() }) || !s(function() { T.toLocaleString.call([1, 2]) })), h, { toLocaleString: Ot }), I[h] = C ? A : M, r || C || u(T, dt, M)
        }
    } else t.exports = function() {}
}, function(t, e, i) {
    var r = i(5);
    t.exports = function(t, e) { if (!r(t)) return t; var i, n; if (e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n; if ("function" == typeof(i = t.valueOf) && !r(n = i.call(t))) return n; if (!e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n; throw TypeError("Can't convert object to primitive value") }
}, function(t, e, i) {
    var r = i(34)("meta"),
        n = i(5),
        s = i(16),
        a = i(11).f,
        o = 0,
        l = Object.isExtensible || function() { return !0 },
        h = !i(3)(function() { return l(Object.preventExtensions({})) }),
        c = function(t) { a(t, r, { value: { i: "O" + ++o, w: {} } }) },
        f = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!n(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!s(t, r)) {
                    if (!l(t)) return "F";
                    if (!e) return "E";
                    c(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!s(t, r)) {
                    if (!l(t)) return !0;
                    if (!e) return !1;
                    c(t)
                }
                return t[r].w
            },
            onFreeze: function(t) { return h && f.NEED && l(t) && !s(t, r) && c(t), t }
        }
}, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e) {
    var i = 0,
        r = Math.random();
    t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + r).toString(36)) }
}, function(t, e) { t.exports = !1 }, function(t, e, i) {
    var r = i(100),
        n = i(72);
    t.exports = Object.keys || function(t) { return r(t, n) }
}, function(t, e, i) {
    var r = i(23),
        n = Math.max,
        s = Math.min;
    t.exports = function(t, e) { return (t = r(t)) < 0 ? n(t + e, 0) : s(t, e) }
}, function(t, e, i) {
    var r = i(4),
        n = i(101),
        s = i(72),
        a = i(71)("IE_PROTO"),
        o = function() {},
        l = function() {
            var t, e = i(69)("iframe"),
                r = s.length;
            for (e.style.display = "none", i(73).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; r--;) delete l.prototype[s[r]];
            return l()
        };
    t.exports = Object.create || function(t, e) { var i; return null !== t ? (o.prototype = r(t), i = new o, o.prototype = null, i[a] = t) : i = l(), void 0 === e ? i : n(i, e) }
}, function(t, e, i) {
    var r = i(100),
        n = i(72).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) { return r(t, n) }
}, function(t, e, i) {
    var r = i(16),
        n = i(12),
        s = i(71)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) { return t = n(t), r(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null }
}, function(t, e, i) {
    var r = i(6)("unscopables"),
        n = Array.prototype;
    null == n[r] && i(17)(n, r, {}), t.exports = function(t) { n[r][t] = !0 }
}, function(t, e, i) {
    var r = i(5);
    t.exports = function(t, e) { if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!"); return t }
}, function(t, e, i) {
    var r = i(11).f,
        n = i(16),
        s = i(6)("toStringTag");
    t.exports = function(t, e, i) { t && !n(t = i ? t : t.prototype, s) && r(t, s, { configurable: !0, value: e }) }
}, function(t, e, i) {
    var r = i(1),
        n = i(29),
        s = i(3),
        a = i(75),
        o = "[" + a + "]",
        l = RegExp("^" + o + o + "*"),
        h = RegExp(o + o + "*$"),
        c = function(t, e, i) {
            var n = {},
                o = s(function() { return !!a[t]() || "â€‹Â…" != "â€‹Â…" [t]() }),
                l = n[t] = o ? e(f) : a[t];
            i && (n[i] = l), r(r.P + r.F * o, "String", n)
        },
        f = c.trim = function(t, e) { return t = String(n(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(h, "")), t };
    t.exports = c
}, function(t, e) { t.exports = {} }, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(11),
        s = i(10),
        a = i(6)("species");
    t.exports = function(t) {
        var e = r[t];
        s && e && !e[a] && n.f(e, a, { configurable: !0, get: function() { return this } })
    }
}, function(t, e) { t.exports = function(t, e, i, r) { if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(i + ": incorrect invocation!"); return t } }, function(t, e, i) {
    var r = i(14);
    t.exports = function(t, e, i) { for (var n in e) r(t, n, e[n], i); return t }
}, function(t, e, i) {
    (function(i) {
        var r;
        ! function(i, n) {
            "use strict";
            var s = {},
                a = i.document,
                o = i.GreenSockGlobals = i.GreenSockGlobals || i,
                l = o.TweenLite;
            if (l) return t.exports && (t.exports = l), l;
            var h, c, f, u, p, d, m, g = function(t) {
                    var e, i = t.split("."),
                        r = o;
                    for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                    return r
                },
                y = g("com.greensock"),
                v = function(t) {
                    var e, i = [],
                        r = t.length;
                    for (e = 0; e !== r; i.push(t[e++]));
                    return i
                },
                _ = function() {},
                x = (d = Object.prototype.toString, m = d.call([]), function(t) { return null != t && (t instanceof Array || "object" == typeof t && !!t.push && d.call(t) === m) }),
                b = {},
                w = function(i, n, a, l) {
                    this.sc = b[i] ? b[i].sc : [], b[i] = this, this.gsClass = null, this.func = a;
                    var h = [];
                    this.check = function(c) {
                        for (var f, u, p, d, m = n.length, y = m; --m > -1;)(f = b[n[m]] || new w(n[m], [])).gsClass ? (h[m] = f.gsClass, y--) : c && f.sc.push(this);
                        if (0 === y && a) {
                            if (p = (u = ("com.greensock." + i).split(".")).pop(), d = g(u.join("."))[p] = this.gsClass = a.apply(a, h), l)
                                if (o[p] = s[p] = d, t.exports)
                                    if ("TweenLite" === i)
                                        for (m in t.exports = s.TweenLite = d, s) d[m] = s[m];
                                    else s.TweenLite && (s.TweenLite[p] = d);
                            else void 0 === (r = function() { return d }.apply(e, [])) || (t.exports = r);
                            for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                        }
                    }, this.check(!0)
                },
                T = i._gsDefine = function(t, e, i, r) { return new w(t, e, i, r) },
                S = y._class = function(t, e, i) { return e = e || function() {}, T(t, [], function() { return e }, i), e };
            T.globals = o;
            var P = [0, 0, 1, 1],
                E = S("easing.Ease", function(t, e, i, r) { this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? P.concat(e) : P }, !0),
                k = E.map = {},
                A = E.register = function(t, e, i, r) {
                    for (var n, s, a, o, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (s = l[h], n = r ? S("easing." + s, null, !0) : y.easing[s] || {}, a = c.length; --a > -1;) o = c[a], k[s + "." + o] = k[o + s] = n[o] = t.getRatio ? t : t[o] || new t
                };
            for ((f = E.prototype)._calcEnd = !1, f.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
                }, c = (h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --c > -1;) f = h[c] + ",Power" + c, A(new E(null, null, 1, c), f, "easeOut", !0), A(new E(null, null, 2, c), f, "easeIn" + (0 === c ? ",easeNone" : "")), A(new E(null, null, 3, c), f, "easeInOut");
            k.linear = y.easing.Linear.easeIn, k.swing = y.easing.Quad.easeInOut;
            var C = S("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            (f = C.prototype).addEventListener = function(t, e, i, r, n) {
                n = n || 0;
                var s, a, o = this._listeners[t],
                    l = 0;
                for (this !== u || p || u.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;)(s = o[a]).c === e && s.s === i ? o.splice(a, 1) : 0 === l && s.pr < n && (l = a + 1);
                o.splice(l, 0, { c: e, s: i, up: r, pr: n })
            }, f.removeEventListener = function(t, e) {
                var i, r = this._listeners[t];
                if (r)
                    for (i = r.length; --i > -1;)
                        if (r[i].c === e) return void r.splice(i, 1)
            }, f.dispatchEvent = function(t) {
                var e, i, r, n = this._listeners[t];
                if (n)
                    for ((e = n.length) > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)(r = n[e]) && (r.up ? r.c.call(r.s || i, { type: t, target: i }) : r.c.call(r.s || i))
            };
            var M = i.requestAnimationFrame,
                D = i.cancelAnimationFrame,
                F = Date.now || function() { return (new Date).getTime() },
                O = F();
            for (c = (h = ["ms", "moz", "webkit", "o"]).length; --c > -1 && !M;) M = i[h[c] + "RequestAnimationFrame"], D = i[h[c] + "CancelAnimationFrame"] || i[h[c] + "CancelRequestAnimationFrame"];
            S("Ticker", function(t, e) {
                var i, r, n, s, o, l = this,
                    h = F(),
                    c = !(!1 === e || !M) && "auto",
                    f = 500,
                    d = 33,
                    m = function(t) {
                        var e, a, c = F() - O;
                        c > f && (h += c - d), O += c, l.time = (O - h) / 1e3, e = l.time - o, (!i || e > 0 || !0 === t) && (l.frame++, o += e + (e >= s ? .004 : s - e), a = !0), !0 !== t && (n = r(m)), a && l.dispatchEvent("tick")
                    };
                C.call(l), l.time = l.frame = 0, l.tick = function() { m(!0) }, l.lagSmoothing = function(t, e) {
                    if (!arguments.length) return f < 1e8;
                    f = t || 1e8, d = Math.min(e, f, 0)
                }, l.sleep = function() { null != n && (c && D ? D(n) : clearTimeout(n), r = _, n = null, l === u && (p = !1)) }, l.wake = function(t) { null !== n ? l.sleep() : t ? h += -O + (O = F()) : l.frame > 10 && (O = F() - f + 5), r = 0 === i ? _ : c && M ? M : function(t) { return setTimeout(t, 1e3 * (o - l.time) + 1 | 0) }, l === u && (p = !0), m(2) }, l.fps = function(t) {
                    if (!arguments.length) return i;
                    s = 1 / ((i = t) || 60), o = this.time + s, l.wake()
                }, l.useRAF = function(t) {
                    if (!arguments.length) return c;
                    l.sleep(), c = t, l.fps(i)
                }, l.fps(t), setTimeout(function() { "auto" === c && l.frame < 5 && "hidden" !== (a || {}).visibilityState && l.useRAF(!1) }, 1500)
            }), (f = y.Ticker.prototype = new y.events.EventDispatcher).constructor = y.Ticker;
            var I = S("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, tt) {
                    p || u.wake();
                    var i = this.vars.useFrames ? Q : tt;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            u = I.ticker = new y.Ticker, (f = I.prototype)._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
            var R = function() {
                p && F() - O > 2e3 && ("hidden" !== (a || {}).visibilityState || !u.lagSmoothing()) && u.wake();
                var t = setTimeout(R, 2e3);
                t.unref && t.unref()
            };
            R(), f.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, f.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, f.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, f.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, f.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, f.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, f.render = function(t, e, i) {}, f.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this }, f.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8
            }, f._enabled = function(t, e) { return p || u.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, f._kill = function(t, e) { return this._enabled(!1, !1) }, f.kill = function(t, e) { return this._kill(t, e), this }, f._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, f._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, f._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    r = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this;
                switch (r ? r.length : 0) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, r[0]);
                        break;
                    case 2:
                        i.call(n, r[0], r[1]);
                        break;
                    default:
                        i.apply(n, r)
                }
            }, f.eventCallback = function(t, e, i, r) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = x(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, f.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, f.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, f.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, f.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, f.totalTime = function(t, e, i) {
                if (p || u.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var r = this._totalDuration,
                            n = this._timeline;
                        if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (V.length && it(), this.render(t, e, !1), V.length && it())
                }
                return this
            }, f.progress = f.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, f.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, f.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, f.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, f.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, f.paused = function(t) { if (!arguments.length) return this._paused; var e, i, r = this._timeline; return t != this._paused && r && (p || t || u.wake(), i = (e = r.rawTime()) - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
            var L = S("core.SimpleTimeline", function(t) { I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            (f = L.prototype = new I).constructor = L, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(t, e, i, r) {
                var n, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (s = t._startTime; n && n._startTime > s;) n = n._prev;
                return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
            }, f._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, f.render = function(t, e, i) { var r, n = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r }, f.rawTime = function() { return p || u.wake(), this._totalTime };
            var N = S("TweenLite", function(t, e, r) {
                    if (I.call(this, e, r), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : N.selector(t) || t;
                    var n, s, a, o = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? J[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : J[l], (o || t instanceof Array || t.push && x(t)) && "number" != typeof t[0])
                        for (this._targets = a = v(t), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++)(s = a[n]) ? "string" != typeof s ? s.length && s !== i && s[0] && (s[0] === i || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(v(s))) : (this._siblings[n] = rt(s, this, !1), 1 === l && this._siblings[n].length > 1 && st(s, this, null, 1, this._siblings[n])) : "string" == typeof(s = a[n--] = N.selector(s)) && a.splice(n + 1, 1) : a.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = rt(t, this, !1), 1 === l && this._siblings.length > 1 && st(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                }, !0),
                B = function(t) { return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType) };
            (f = N.prototype = new I).constructor = N, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, N.version = "2.1.3", N.defaultEase = f._ease = new E(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = u, N.autoSleep = 120, N.lagSmoothing = function(t, e) { u.lagSmoothing(t, e) }, N.selector = i.$ || i.jQuery || function(t) { var e = i.$ || i.jQuery; return e ? (N.selector = e, e(t)) : (a || (a = i.document), a ? a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t) };
            var V = [],
                z = {},
                j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                G = /[\+-]=-?[\.\d]/,
                q = function(t) { for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
                H = function(t) { return (1e3 * t | 0) / 1e3 + "" },
                X = function(t, e, i, r) {
                    var n, s, a, o, l, h, c, f = [],
                        u = 0,
                        p = "",
                        d = 0;
                    for (f.start = t, f.end = e, t = f[0] = t + "", e = f[1] = e + "", i && (i(f), t = f[0], e = f[1]), f.length = 0, n = t.match(j) || [], s = e.match(j) || [], r && (r._next = null, r.blob = 1, f._firstPT = f._applyPT = r), l = s.length, o = 0; o < l; o++) c = s[o], p += (h = e.substr(u, e.indexOf(c, u) - u)) || !o ? h : ",", u += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), c === n[o] || n.length <= o ? p += c : (p && (f.push(p), p = ""), a = parseFloat(n[o]), f.push(a), f._firstPT = { _next: f._firstPT, t: f, p: f.length - 1, s: a, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - a) || 0, f: 0, m: d && d < 4 ? Math.round : H }), u += c.length;
                    return (p += e.substr(u)) && f.push(p), f.setRatio = q, G.test(e) && (f.end = null), f
                },
                Y = function(t, e, i, r, n, s, a, o, l) {
                    "function" == typeof r && (r = r(l || 0, t));
                    var h = typeof t[e],
                        c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        f = "get" !== i ? i : c ? a ? t[c](a) : t[c]() : t[e],
                        u = "string" == typeof r && "=" === r.charAt(1),
                        p = { t: t, p: e, s: f, f: "function" === h, pg: 0, n: n || e, m: s ? "function" == typeof s ? s : Math.round : 0, pr: 0, c: u ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - f || 0 };
                    if (("number" != typeof f || "number" != typeof r && !u) && (a || isNaN(f) || !u && isNaN(r) || "boolean" == typeof f || "boolean" == typeof r ? (p.fp = a, p = { t: X(f, u ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : r, o || N.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0, m: 0 }) : (p.s = parseFloat(f), u || (p.c = parseFloat(r) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                },
                W = N._internals = { isArray: x, isSelector: B, lazyTweens: V, blobDif: X },
                U = N._plugins = {},
                K = W.tweenLookup = {},
                $ = 0,
                Z = W.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1, stagger: 1 },
                J = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                Q = I._rootFramesTimeline = new L,
                tt = I._rootTimeline = new L,
                et = 30,
                it = W.lazyRender = function() {
                    var t, e, i = V.length;
                    for (z = {}, t = 0; t < i; t++)(e = V[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    V.length = 0
                };
            tt._startTime = u.time, Q._startTime = u.frame, tt._active = Q._active = !0, setTimeout(it, 1), I._updateRoot = N.render = function() {
                var t, e, i;
                if (V.length && it(), tt.render((u.time - tt._startTime) * tt._timeScale, !1, !1), Q.render((u.frame - Q._startTime) * Q._timeScale, !1, !1), V.length && it(), u.frame >= et) {
                    for (i in et = u.frame + (parseInt(N.autoSleep, 10) || 120), K) {
                        for (t = (e = K[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete K[i]
                    }
                    if ((!(i = tt._first) || i._paused) && N.autoSleep && !Q._first && 1 === u._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || u.sleep()
                    }
                }
            }, u.addEventListener("tick", I._updateRoot);
            var rt = function(t, e, i) {
                    var r, n, s = t._gsTweenID;
                    if (K[s || (t._gsTweenID = s = "t" + $++)] || (K[s] = { target: t, tweens: [] }), e && ((r = K[s].tweens)[n = r.length] = e, i))
                        for (; --n > -1;) r[n] === e && r.splice(n, 1);
                    return K[s].tweens
                },
                nt = function(t, e, i, r) { var n, s, a = t.vars.onOverwrite; return a && (n = a(t, e, i, r)), (a = N.onOverwrite) && (s = a(t, e, i, r)), !1 !== n && !1 !== s },
                st = function(t, e, i, r, n) {
                    var s, a, o, l;
                    if (1 === r || r >= 4) {
                        for (l = n.length, s = 0; s < l; s++)
                            if ((o = n[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === r) break;
                        return a
                    }
                    var h, c = e._startTime + 1e-8,
                        f = [],
                        u = 0,
                        p = 0 === e._duration;
                    for (s = n.length; --s > -1;)(o = n[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || at(e, 0, p), 0 === at(o, h, p) && (f[u++] = o)) : o._startTime <= c && o._startTime + o.totalDuration() / o._timeScale > c && ((p || !o._initted) && c - o._startTime <= 2e-8 || (f[u++] = o)));
                    for (s = u; --s > -1;)
                        if (l = (o = f[s])._firstPT, 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted && l) {
                            if (2 !== r && !nt(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                at = function(t, e, i) {
                    for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline;) {
                        if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                        r = r._timeline
                    }
                    return (s /= n) > e ? s - e : i && s === e || !t._initted && s - e < 2e-8 ? 1e-8 : (s += t.totalDuration() / t._timeScale / n) > e + 1e-8 ? 0 : s - e - 1e-8
                };
            f._init = function() {
                var t, e, i, r, n, s, a = this.vars,
                    o = this._overwrittenProps,
                    l = this._duration,
                    h = !!a.immediateRender,
                    c = a.ease,
                    f = this._startAt;
                if (a.startAt) {
                    for (r in f && (f.render(-1, !0), f.kill()), n = {}, a.startAt) n[r] = a.startAt[r];
                    if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== a.lazy, n.startAt = n.delay = null, n.onUpdate = a.onUpdate, n.onUpdateParams = a.onUpdateParams, n.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = N.to(this.target || {}, 0, n), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (a.runBackwards && 0 !== l)
                    if (f) f.render(-1, !0), f.kill(), this._startAt = null;
                    else { for (r in 0 !== this._time && (h = !1), i = {}, a) Z[r] && "autoCSS" !== r || (i[r] = a[r]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = N.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = c = c ? c instanceof E ? c : "function" == typeof c ? new E(c, a.easeParams) : k[c] || N.defaultEase : N.defaultEase, a.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (e && N._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, f._initProps = function(t, e, r, n, s) {
                var a, o, l, h, c, f;
                if (null == t) return !1;
                for (a in z[t._gsTweenID] && it(), this.vars.css || t.style && t !== i && t.nodeType && U.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, r = {};
                        for (i in t) Z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (r[i] = t[i], delete t[i]);
                        t.css = r
                    }(this.vars, t), this.vars)
                    if (f = this.vars[a], Z[a]) f && (f instanceof Array || f.push && x(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[a] = f = this._swapSelfInParams(f, this));
                    else if (U[a] && (h = new U[a])._onInitTween(t, this.vars[a], this, s)) {
                    for (this._firstPT = c = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: h._priority, m: 0 }, o = h._overwriteProps.length; --o > -1;) e[h._overwriteProps[o]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else e[a] = Y.call(this, t, a, "get", f, a, 0, null, this.vars.stringFilter, s);
                return n && this._kill(n, t) ? this._initProps(t, e, r, n, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && st(t, this, e, this._overwrite, r) ? (this._kill(e, t), this._initProps(t, e, r, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0), l)
            }, f.render = function(t, e, i) {
                var r, n, s, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-8 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-8 && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
                else if (t < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (n = "onReverseComplete", r = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        f = this._easeType,
                        u = this._easePower;
                    (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === u ? c *= c : 2 === u ? c *= c * c : 3 === u ? c *= c * c * c : 4 === u && (c *= c * c * c * c), this.ratio = 1 === f ? 1 - c : 2 === f ? c : t / l < .5 ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, V.push(this), void(this._lazy = [t, e]);
                        this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || r || i) && this._callback("onUpdate")), n && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                }
            }, f._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                var r, n, s, a, o, l, h, c, f, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                    p = this._firstPT;
                if ((x(e) || B(e)) && "number" != typeof e[0])
                    for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (r = this._targets.length; --r > -1;)
                            if (e === this._targets[r]) { o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all"; break }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) { if (h = t || o, c = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) { for (s in h) o[s] && (f || (f = []), f.push(s)); if ((f || !t) && !nt(this, i, e, f)) return !1 } for (s in h)(a = o[s]) && (u && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), c && (n[s] = 1);!this._firstPT && this._initted && p && this._enabled(!1, !1) }
                }
                return l
            }, f.invalidate = function() { this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this); var t = this._time; return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this }, f._enabled = function(t, e) {
                if (p || u.wake(), t && this._gc) {
                    var i, r = this._targets;
                    if (r)
                        for (i = r.length; --i > -1;) this._siblings[i] = rt(r[i], this, !0);
                    else this._siblings = rt(this.target, this, !0)
                }
                return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, N.to = function(t, e, i) { return new N(t, e, i) }, N.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i) }, N.fromTo = function(t, e, i, r) { return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new N(t, e, r) }, N.delayedCall = function(t, e, i, r, n) { return new N(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: r, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 }) }, N.set = function(t, e) { return new N(t, 0, e) }, N.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, r, n, s;
                if (t = "string" != typeof t ? t : N.selector(t) || t, (x(t) || B(t)) && "number" != typeof t[0]) {
                    for (i = t.length, r = []; --i > -1;) r = r.concat(N.getTweensOf(t[i], e));
                    for (i = r.length; --i > -1;)
                        for (s = r[i], n = i; --n > -1;) s === r[n] && r.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (r = rt(t).concat()).length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
                return r || []
            }, N.killTweensOf = N.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var r = N.getTweensOf(t, e), n = r.length; --n > -1;) r[n]._kill(i, t) };
            var ot = S("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype }, !0);
            if (f = ot.prototype, ot.version = "1.19.0", ot.API = 2, f._firstPT = null, f._addTween = Y, f.setRatio = q, f._kill = function(t) {
                    var e, i = this._overwriteProps,
                        r = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                    return !1
                }, f._mod = f._roundProps = function(t) { for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, N._onPluginEvent = function(t, e) {
                    var i, r, n, s, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                            (o._prev = r ? r._prev : s) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : s = o, o = a
                        }
                        o = e._firstPT = n
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, ot.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === ot.API && (U[(new t[e])._propName] = t[e]); return !0 }, T.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        r = t.priority || 0,
                        n = t.overwriteProps,
                        s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                        a = S("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { ot.call(this, i, r), this._overwriteProps = n || [] }, !0 === t.global),
                        o = a.prototype = new ot(i);
                    for (e in o.constructor = a, a.API = t.API, s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                    return a.version = t.version, ot.activate([a]), a
                }, h = i._gsQueue) { for (c = 0; c < h.length; c++) h[c](); for (f in b) b[f].func || i.console.log("GSAP encountered missing dependency: " + f) }
            p = !1
        }(t.exports && void 0 !== i ? i : this || window)
    }).call(this, i(54))
}, function(t, e, i) {
    var r = i(28);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == r(t) ? t.split("") : Object(t) }
}, function(t, e) { e.f = {}.propertyIsEnumerable }, function(t, e, i) {
    var r = i(28),
        n = i(6)("toStringTag"),
        s = "Arguments" == r(function() { return arguments }());
    t.exports = function(t) { var e, i, a; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), n)) ? i : s ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a }
}, function(t, e, i) {
    var r = i(4),
        n = i(22),
        s = i(6)("species");
    t.exports = function(t, e) { var i, a = r(t).constructor; return void 0 === a || null == (i = r(a)[s]) ? e : n(i) }
}, function(t, e) {
    var i;
    i = function() { return this }();
    try { i = i || new Function("return this")() } catch (t) { "object" == typeof window && (i = window) }
    t.exports = i
}, function(t, e, i) {
    var r = i(9),
        n = i(2),
        s = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
    (t.exports = function(t, e) { return s[t] || (s[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: r.version, mode: i(35) ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" })
}, function(t, e, i) {
    var r = i(18),
        n = i(7),
        s = i(37);
    t.exports = function(t) {
        return function(e, i, a) {
            var o, l = r(e),
                h = n(l.length),
                c = s(a, h);
            if (t && i != i) {
                for (; h > c;)
                    if ((o = l[c++]) != o) return !0
            } else
                for (; h > c; c++)
                    if ((t || c in l) && l[c] === i) return t || c || 0; return !t && -1
        }
    }
}, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, i) {
    var r = i(28);
    t.exports = Array.isArray || function(t) { return "Array" == r(t) }
}, function(t, e, i) {
    var r = i(6)("iterator"),
        n = !1;
    try {
        var s = [7][r]();
        s.return = function() { n = !0 }, Array.from(s, function() { throw 2 })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !n) return !1;
        var i = !1;
        try {
            var s = [7],
                a = s[r]();
            a.next = function() { return { done: i = !0 } }, s[r] = function() { return a }, t(s)
        } catch (t) {}
        return i
    }
}, function(t, e, i) {
    "use strict";
    var r = i(4);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, i) {
    "use strict";
    var r = i(52),
        n = RegExp.prototype.exec;
    t.exports = function(t, e) { var i = t.exec; if ("function" == typeof i) { var s = i.call(t, e); if ("object" != typeof s) throw new TypeError("RegExp exec method returned something other than an Object or null"); return s } if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver"); return n.call(t, e) }
}, function(t, e, i) {
    "use strict";
    i(118);
    var r = i(14),
        n = i(17),
        s = i(3),
        a = i(29),
        o = i(6),
        l = i(90),
        h = o("species"),
        c = !s(function() { var t = /./; return t.exec = function() { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") }),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() { return e.apply(this, arguments) };
            var i = "ab".split(t);
            return 2 === i.length && "a" === i[0] && "b" === i[1]
        }();
    t.exports = function(t, e, i) {
        var u = o(t),
            p = !s(function() { var e = {}; return e[u] = function() { return 7 }, 7 != "" [t](e) }),
            d = p ? !s(function() {
                var e = !1,
                    i = /a/;
                return i.exec = function() { return e = !0, null }, "split" === t && (i.constructor = {}, i.constructor[h] = function() { return i }), i[u](""), !e
            }) : void 0;
        if (!p || !d || "replace" === t && !c || "split" === t && !f) {
            var m = /./ [u],
                g = i(a, u, "" [t], function(t, e, i, r, n) { return e.exec === l ? p && !n ? { done: !0, value: m.call(e, i, r) } : { done: !0, value: t.call(i, e, r) } : { done: !1 } }),
                y = g[0],
                v = g[1];
            r(String.prototype, t, y), n(RegExp.prototype, u, 2 == e ? function(t, e) { return v.call(t, this, e) } : function(t) { return v.call(t, this) })
        }
    }
}, function(t, e, i) {
    var r = i(21),
        n = i(113),
        s = i(85),
        a = i(4),
        o = i(7),
        l = i(87),
        h = {},
        c = {};
    (e = t.exports = function(t, e, i, f, u) {
        var p, d, m, g, y = u ? function() { return t } : l(t),
            v = r(i, f, e ? 2 : 1),
            _ = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
        if (s(y)) {
            for (p = o(t.length); p > _; _++)
                if ((g = e ? v(a(d = t[_])[0], d[1]) : v(t[_])) === h || g === c) return g
        } else
            for (m = y.call(t); !(d = m.next()).done;)
                if ((g = n(m, v, d.value, e)) === h || g === c) return g
    }).BREAK = h, e.RETURN = c
}, function(t, e, i) {
    var r = i(2).navigator;
    t.exports = r && r.userAgent || ""
}, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(1),
        s = i(14),
        a = i(48),
        o = i(32),
        l = i(63),
        h = i(47),
        c = i(5),
        f = i(3),
        u = i(59),
        p = i(43),
        d = i(76);
    t.exports = function(t, e, i, m, g, y) {
        var v = r[t],
            _ = v,
            x = g ? "set" : "add",
            b = _ && _.prototype,
            w = {},
            T = function(t) {
                var e = b[t];
                s(b, t, "delete" == t ? function(t) { return !(y && !c(t)) && e.call(this, 0 === t ? 0 : t) } : "has" == t ? function(t) { return !(y && !c(t)) && e.call(this, 0 === t ? 0 : t) } : "get" == t ? function(t) { return y && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t) } : "add" == t ? function(t) { return e.call(this, 0 === t ? 0 : t), this } : function(t, i) { return e.call(this, 0 === t ? 0 : t, i), this })
            };
        if ("function" == typeof _ && (y || b.forEach && !f(function() {
                (new _).entries().next()
            }))) {
            var S = new _,
                P = S[x](y ? {} : -0, 1) != S,
                E = f(function() { S.has(1) }),
                k = u(function(t) { new _(t) }),
                A = !y && f(function() { for (var t = new _, e = 5; e--;) t[x](e, e); return !t.has(-0) });
            k || ((_ = e(function(e, i) { h(e, _, t); var r = d(new v, e, _); return null != i && l(i, g, r[x], r), r })).prototype = b, b.constructor = _), (E || A) && (T("delete"), T("has"), g && T("get")), (A || P) && T(x), y && b.clear && delete b.clear
        } else _ = m.getConstructor(e, t, g, x), a(_.prototype, i), o.NEED = !0;
        return p(_, t), w[t] = _, n(n.G + n.W + n.F * (_ != v), w), y || m.setStrong(_, t, g), _
    }
}, function(t, e, i) {
    for (var r, n = i(2), s = i(17), a = i(34), o = a("typed_array"), l = a("view"), h = !(!n.ArrayBuffer || !n.DataView), c = h, f = 0, u = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = n[u[f++]]) ? (s(r.prototype, o, !0), s(r.prototype, l, !0)) : c = !1;
    t.exports = { ABV: h, CONSTR: c, TYPED: o, VIEW: l }
}, function(t, e, i) {
    (function(r) {
        var n, s, a;

        function o(t) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
        var l = t.exports && void 0 !== r ? r : this || window;
        (l._gsQueue || (l._gsQueue = [])).push(function() {
                "use strict";
                l._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(t, e, i) {
                    var r, n, s, a, h, c, f, u, p, d, m, g, y = { css: {}, data: "_draggable" },
                        v = { css: {}, data: "_draggable" },
                        _ = { css: {}, data: "_draggable" },
                        x = { css: {} },
                        b = l._gsDefine.globals,
                        w = {},
                        T = function() { return !1 },
                        S = { style: {}, appendChild: T, removeChild: T },
                        P = l.document || { createElement: function() { return S } },
                        E = P.documentElement || {},
                        k = function(t) { return P.createElementNS ? P.createElementNS("http://www.w3.org/1999/xhtml", t) : P.createElement(t) },
                        A = k("div"),
                        C = [],
                        M = 180 / Math.PI,
                        D = 999999999999999,
                        F = Date.now || function() { return (new Date).getTime() },
                        O = !(P.addEventListener || !P.all),
                        I = P.createElement("div"),
                        R = [],
                        L = {},
                        N = 0,
                        B = /^(?:a|input|textarea|button|select)$/i,
                        V = 0,
                        z = l.navigator && -1 !== l.navigator.userAgent.toLowerCase().indexOf("android"),
                        j = 0,
                        G = {},
                        q = {},
                        H = function(t, e) {
                            var i, r = {};
                            if (e)
                                for (i in t) r[i] = t[i] * e;
                            else
                                for (i in t) r[i] = t[i];
                            return r
                        },
                        X = function() { for (var t = R.length; --t > -1;) R[t]() },
                        Y = function(t) {
                            for (var i = R.length; --i > -1;) R[i] === t && R.splice(i, 1);
                            e.to(W, 0, { overwrite: "all", delay: 15, onComplete: W, data: "_draggable" })
                        },
                        W = function() { R.length || e.ticker.removeEventListener("tick", X) },
                        U = function() { return null != window.pageYOffset ? window.pageYOffset : null != P.scrollTop ? P.scrollTop : E.scrollTop || P.body.scrollTop || 0 },
                        K = function() { return null != window.pageXOffset ? window.pageXOffset : null != P.scrollLeft ? P.scrollLeft : E.scrollLeft || P.body.scrollLeft || 0 },
                        $ = function t(e, i) { Rt(e, "scroll", i), J(e.parentNode) || t(e.parentNode, i) },
                        Z = function t(e, i) { Lt(e, "scroll", i), J(e.parentNode) || t(e.parentNode, i) },
                        J = function(t) { return !(t && t !== E && t !== P && t !== P.body && t !== window && t.nodeType && t.parentNode) },
                        Q = function(t, e) {
                            var i = "x" === e ? "Width" : "Height",
                                r = "scroll" + i,
                                n = "client" + i,
                                s = P.body;
                            return Math.max(0, J(t) ? Math.max(E[r], s[r]) - (window["inner" + i] || E[n] || s[n]) : t[r] - t[n])
                        },
                        tt = function t(e) {
                            var i = J(e),
                                r = Q(e, "x"),
                                n = Q(e, "y");
                            i ? e = q : t(e.parentNode), e._gsMaxScrollX = r, e._gsMaxScrollY = n, e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0
                        },
                        et = function(t, e) { return t = t || window.event, w.pageX = t.clientX + P.body.scrollLeft + E.scrollLeft, w.pageY = t.clientY + P.body.scrollTop + E.scrollTop, e && (t.returnValue = !1), w },
                        it = function(t) { return t ? ("string" == typeof t && (t = e.selector(t)), t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === window || t.nodeType && t.style ? t : null) : t },
                        rt = function(t, e) {
                            var i, r, n, s = t.style;
                            if (void 0 === s[e]) {
                                for (n = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5, i = e.charAt(0).toUpperCase() + e.substr(1); --r > -1 && void 0 === s[n[r] + i];);
                                if (r < 0) return "";
                                e = (3 === r ? "ms" : n[r]) + i
                            }
                            return e
                        },
                        nt = function(t, e, i) {
                            var r = t.style;
                            r && (void 0 === r[e] && (e = rt(t, e)), null == i ? r.removeProperty ? r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r.removeAttribute(e) : void 0 !== r[e] && (r[e] = i))
                        },
                        st = ("undefined" != typeof window ? window : P.defaultView || { getComputedStyle: function() {} }).getComputedStyle,
                        at = function(t, e) { return st(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t, e) },
                        ot = /(?:Left|Right|Width)/i,
                        lt = /(?:\d|\-|\+|=|#|\.)*/g,
                        ht = function(t, e) {
                            if ("absolute" !== ct(t, "position", !0)) return 0;
                            var i = "left" === e ? "Left" : "Top",
                                r = ct(t, "margin" + i, !0);
                            return t["offset" + i] - (function t(e, i, r, n, s) {
                                if ("px" === n || !n) return r;
                                if ("auto" === n || !r) return 0;
                                var a, o = ot.test(i),
                                    l = e,
                                    h = A.style,
                                    c = r < 0;
                                return c && (r = -r), "%" === n && -1 !== i.indexOf("border") ? a = r / 100 * (o ? e.clientWidth : e.clientHeight) : (h.cssText = "border:0 solid red;position:" + ct(e, "position", !0) + ";line-height:0;", "%" !== n && l.appendChild ? h[o ? "borderLeftWidth" : "borderTopWidth"] = r + n : (l = e.parentNode || P.body, h[o ? "width" : "height"] = r + n), l.appendChild(A), a = parseFloat(A[o ? "offsetWidth" : "offsetHeight"]), l.removeChild(A), 0 !== a || s || (a = t(e, i, r, n, !0))), c ? -a : a
                            }(t, e, parseFloat(r), (r + "").replace(lt, "")) || 0)
                        },
                        ct = function(t, e, i) { var r, n = (t._gsTransform || {})[e]; return n || 0 === n ? n : (t.style && t.style[e] ? n = t.style[e] : (r = at(t)) ? n = (n = r.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase())) || r.length ? n : r[e] : t.currentStyle && (n = t.currentStyle[e]), "auto" !== n || "top" !== e && "left" !== e || (n = ht(t, e)), i ? n : parseFloat(n) || 0) },
                        ft = function(t, e, i) {
                            var r = t.vars,
                                n = r[i],
                                s = t._listeners[e];
                            "function" == typeof n && n.apply(r[i + "Scope"] || r.callbackScope || t, r[i + "Params"] || [t.pointerEvent]), s && t.dispatchEvent(e)
                        },
                        ut = function(t, e) { var i, r, n, s = it(t); return s ? Dt(s, e) : void 0 !== t.left ? (n = Et(e), { left: t.left - n.x, top: t.top - n.y, width: t.width, height: t.height }) : { left: r = t.min || t.minX || t.minRotation || 0, top: i = t.min || t.minY || 0, width: (t.max || t.maxX || t.maxRotation || 0) - r, height: (t.max || t.maxY || 0) - i } },
                        pt = function() {
                            if (!P.createElementNS) return s = 0, void(a = !1);
                            var t, e, i, r, n = k("div"),
                                o = P.createElementNS("http://www.w3.org/2000/svg", "svg"),
                                l = k("div"),
                                u = n.style,
                                p = P.body || E,
                                d = "flex" === ct(p, "display", !0);
                            P.body && gt && (u.position = "absolute", p.appendChild(l), l.appendChild(n), r = n.offsetParent, l.style[gt] = "rotate(1deg)", f = n.offsetParent === r, l.style.position = "absolute", u.height = "10px", r = n.offsetTop, l.style.border = "5px solid red", c = r !== n.offsetTop, p.removeChild(l)), u = o.style, o.setAttributeNS(null, "width", "400px"), o.setAttributeNS(null, "height", "400px"), o.setAttributeNS(null, "viewBox", "0 0 400 400"), u.display = "block", u.boxSizing = "border-box", u.border = "0px solid red", u.transform = "none", n.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", p.appendChild(n), n.appendChild(o), e = (i = o.createSVGPoint().matrixTransform(o.getScreenCTM())).y, n.scrollTop = 100, i.x = i.y = 0, i = i.matrixTransform(o.getScreenCTM()), h = e - i.y < 100.1 ? 0 : e - i.y - 150, n.removeChild(o), p.removeChild(n), p.appendChild(o), d && (p.style.display = "block"), e = (t = o.getScreenCTM()).e, u.border = "50px solid red", t = o.getScreenCTM(), 0 === e && 0 === t.e && 0 === t.f && 1 === t.a ? (s = 1, a = !0) : (s = e !== t.e ? 1 : 0, a = 1 !== t.a), d && (p.style.display = "flex"), p.removeChild(o)
                        },
                        dt = "" !== rt(A, "perspective"),
                        mt = rt(A, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                        gt = rt(A, "transform"),
                        yt = gt.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                        vt = {},
                        _t = {},
                        xt = l.SVGElement,
                        bt = function(t) { return !!(xt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)) },
                        wt = l.navigator && (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(l.navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(l.navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
                        Tt = [],
                        St = [],
                        Pt = function t(i) {
                            if (!i.getBoundingClientRect || !i.parentNode || !gt) return { offsetTop: 0, offsetLeft: 0, scaleX: 1, scaleY: 1, offsetParent: E };
                            if (!1 !== Ht.cacheSVGData && i._dCache && i._dCache.lastUpdate === e.ticker.frame) return i._dCache;
                            var r, n, o, l, c, f, u, p, d, m, g, y = i,
                                v = kt(i);
                            if (v.lastUpdate = e.ticker.frame, i.getBBox && !v.isSVGRoot) { for (y = i.parentNode, r = i.getBBox(); y && "svg" !== (y.nodeName + "").toLowerCase();) y = y.parentNode; return l = t(y), v.offsetTop = r.y * l.scaleY, v.offsetLeft = r.x * l.scaleX, v.scaleX = l.scaleX, v.scaleY = l.scaleY, v.offsetParent = y || E, v }
                            for ((o = v.offsetParent) === P.body && (o = E), St.length = Tt.length = 0; y && ("matrix(1, 0, 0, 1, 0, 0)" !== (c = ct(y, gt, !0)) && "none" !== c && "translate3d(0px, 0px, 0px)" !== c && (St.push(y), Tt.push(y.style[gt]), y.style[gt] = "none"), y !== o);) y = y.parentNode;
                            for (n = o.getBoundingClientRect(), c = i.getScreenCTM(), u = i.createSVGPoint().matrixTransform(c), v.scaleX = Math.sqrt(c.a * c.a + c.b * c.b), v.scaleY = Math.sqrt(c.d * c.d + c.c * c.c), void 0 === s && pt(), v.borderBox && !a && i.getAttribute("width") && (l = at(i) || {}, p = parseFloat(l.borderLeftWidth) + parseFloat(l.borderRightWidth) || 0, d = parseFloat(l.borderTopWidth) + parseFloat(l.borderBottomWidth) || 0, m = parseFloat(l.width) || 0, g = parseFloat(l.height) || 0, v.scaleX *= (m - p) / m, v.scaleY *= (g - d) / g), h ? (r = i.getBoundingClientRect(), v.offsetLeft = r.left - n.left, v.offsetTop = r.top - n.top) : (v.offsetLeft = u.x - n.left, v.offsetTop = u.y - n.top), v.offsetParent = o, f = St.length; --f > -1;) St[f].style[gt] = Tt[f];
                            return v
                        },
                        Et = function(t, i) {
                            if (i = i || {}, !t || t === E || !t.parentNode || t === window) return { x: 0, y: 0 };
                            var r = at(t),
                                n = mt && r ? r.getPropertyValue(mt) : "50% 50%",
                                s = n.split(" "),
                                a = -1 !== n.indexOf("left") ? "0%" : -1 !== n.indexOf("right") ? "100%" : s[0],
                                o = -1 !== n.indexOf("top") ? "0%" : -1 !== n.indexOf("bottom") ? "100%" : s[1];
                            return "center" !== o && null != o || (o = "50%"), ("center" === a || isNaN(parseFloat(a))) && (a = "50%"), t.getBBox && bt(t) ? (t._gsTransform || (e.set(t, { x: "+=0", overwrite: !1 }), void 0 === t._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), n = t.getBBox(), i.x = t._gsTransform.xOrigin - n.x, i.y = t._gsTransform.yOrigin - n.y) : (t.getBBox && -1 !== (a + o).indexOf("%") && (t = { offsetWidth: (t = t.getBBox()).width, offsetHeight: t.height }), i.x = -1 !== a.indexOf("%") ? t.offsetWidth * parseFloat(a) / 100 : parseFloat(a), i.y = -1 !== o.indexOf("%") ? t.offsetHeight * parseFloat(o) / 100 : parseFloat(o)), i
                        },
                        kt = function(t) {
                            if (!1 !== Ht.cacheSVGData && t._dCache && t._dCache.lastUpdate === e.ticker.frame) return t._dCache;
                            var i, r = t._dCache = t._dCache || {},
                                n = at(t),
                                s = t.getBBox && bt(t),
                                a = "svg" === (t.nodeName + "").toLowerCase();
                            if (r.isSVG = s, r.isSVGRoot = a, r.borderBox = "border-box" === n.boxSizing, r.computedStyle = n, a)(i = t.parentNode || E).insertBefore(A, t), r.offsetParent = A.offsetParent || E, i.removeChild(A);
                            else if (s) {
                                for (i = t.parentNode; i && "svg" !== (i.nodeName + "").toLowerCase();) i = i.parentNode;
                                r.offsetParent = i
                            } else r.offsetParent = t.offsetParent;
                            return r
                        },
                        At = function t(e, i, r, n, a) {
                            if (e === window || !e || !e.style || !e.parentNode) return [1, 0, 0, 1, 0, 0];
                            var o, l, h, u, p, d, m, g, y, v, _, x, b, w, T = e._dCache || kt(e),
                                S = e.parentNode,
                                k = S._dCache || kt(S),
                                A = T.computedStyle,
                                C = T.isSVG ? k.offsetParent : S.offsetParent;
                            return o = T.isSVG && -1 !== (e.style[gt] + "").indexOf("matrix") ? e.style[gt] : A ? A.getPropertyValue(yt) : e.currentStyle ? e.currentStyle[gt] : "1,0,0,1,0,0", e.getBBox && -1 !== (e.getAttribute("transform") + "").indexOf("matrix") && (o = e.getAttribute("transform")), (o = (o + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0]).length > 6 && (o = [o[0], o[1], o[4], o[5], o[12], o[13]]), n ? o[4] = o[5] = 0 : T.isSVG && (p = e._gsTransform) && (p.xOrigin || p.yOrigin) && (o[0] = parseFloat(o[0]), o[1] = parseFloat(o[1]), o[2] = parseFloat(o[2]), o[3] = parseFloat(o[3]), o[4] = parseFloat(o[4]) - (p.xOrigin - (p.xOrigin * o[0] + p.yOrigin * o[2])), o[5] = parseFloat(o[5]) - (p.yOrigin - (p.xOrigin * o[1] + p.yOrigin * o[3]))), i && (void 0 === s && pt(), h = T.isSVG || T.isSVGRoot ? Pt(e) : e, T.isSVG ? (u = e.getBBox(), v = k.isSVGRoot ? { x: 0, y: 0 } : S.getBBox(), h = { offsetLeft: u.x - v.x, offsetTop: u.y - v.y, offsetParent: T.offsetParent }) : T.isSVGRoot ? (_ = parseInt(A.borderTopWidth, 10) || 0, x = parseInt(A.borderLeftWidth, 10) || 0, b = (o[0] - s) * x + o[2] * _, w = o[1] * x + (o[3] - s) * _, d = i.x, m = i.y, g = d - (d * o[0] + m * o[2]), y = m - (d * o[1] + m * o[3]), o[4] = parseFloat(o[4]) + g, o[5] = parseFloat(o[5]) + y, i.x -= g, i.y -= y, d = h.scaleX, m = h.scaleY, a || (i.x *= d, i.y *= m), o[0] *= d, o[1] *= m, o[2] *= d, o[3] *= m, wt || (i.x += b, i.y += w), C === P.body && h.offsetParent === E && (C = E)) : !c && e.offsetParent && (i.x += parseInt(ct(e.offsetParent, "borderLeftWidth"), 10) || 0, i.y += parseInt(ct(e.offsetParent, "borderTopWidth"), 10) || 0), l = S === E || S === P.body, o[4] = Number(o[4]) + i.x + (h.offsetLeft || 0) - r.x - (l ? 0 : S.scrollLeft || 0), o[5] = Number(o[5]) + i.y + (h.offsetTop || 0) - r.y - (l ? 0 : S.scrollTop || 0), S && "fixed" === ct(e, "position", A) && (o[4] += K(), o[5] += U()), !S || S === E || C !== h.offsetParent || k.isSVG || f && "100100" !== t(S).join("") || (h = k.isSVGRoot ? Pt(S) : S, o[4] -= h.offsetLeft || 0, o[5] -= h.offsetTop || 0, c || !k.offsetParent || T.isSVG || T.isSVGRoot || (o[4] -= parseInt(ct(k.offsetParent, "borderLeftWidth"), 10) || 0, o[5] -= parseInt(ct(k.offsetParent, "borderTopWidth"), 10) || 0))), o
                        },
                        Ct = function(t, e) {
                            if (!t || t === window || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                            for (var i, r, n, s, a, o, l, h, c = Et(t, vt), f = Et(t.parentNode, _t), u = At(t, c, f, !1, !e);
                                (t = t.parentNode) && t.parentNode && t !== E;) c = f, f = Et(t.parentNode, c === vt ? _t : vt), l = At(t, c, f), i = u[0], r = u[1], n = u[2], s = u[3], a = u[4], o = u[5], u[0] = i * l[0] + r * l[2], u[1] = i * l[1] + r * l[3], u[2] = n * l[0] + s * l[2], u[3] = n * l[1] + s * l[3], u[4] = a * l[0] + o * l[2] + l[4], u[5] = a * l[1] + o * l[3] + l[5];
                            return e && (i = u[0], r = u[1], n = u[2], s = u[3], a = u[4], o = u[5], h = i * s - r * n, u[0] = s / h, u[1] = -r / h, u[2] = -n / h, u[3] = i / h, u[4] = (n * o - s * a) / h, u[5] = -(i * o - r * a) / h), u
                        },
                        Mt = function(t, e, i) {
                            var r = t.x * e[0] + t.y * e[2] + e[4],
                                n = t.x * e[1] + t.y * e[3] + e[5];
                            return t.x = r * i[0] + n * i[2] + i[4], t.y = r * i[1] + n * i[3] + i[5], t
                        },
                        Dt = function(t, e, i) {
                            if (!(t = it(t))) return null;
                            e = it(e);
                            var r, n, s, a, o, l, h, c, f, u, p, d, m, g, y, v, _, x, b, w, T, S, k = t.getBBox && bt(t);
                            if (t === window) a = U(), s = (n = K()) + (E.clientWidth || t.innerWidth || P.body.clientWidth || 0), o = a + ((t.innerHeight || 0) - 20 < E.clientHeight ? E.clientHeight : t.innerHeight || P.body.clientHeight || 0);
                            else {
                                if (void 0 === e || e === window) return t.getBoundingClientRect();
                                n = -(r = Et(t)).x, a = -r.y, k ? (m = (d = t.getBBox()).width, g = d.height) : "svg" !== (t.nodeName + "").toLowerCase() && t.offsetWidth ? (m = t.offsetWidth, g = t.offsetHeight) : (T = at(t), m = parseFloat(T.width), g = parseFloat(T.height)), s = n + m, o = a + g, "svg" !== t.nodeName.toLowerCase() || O || (S = (y = Pt(t)).computedStyle || {}, x = (t.getAttribute("viewBox") || "0 0").split(" "), b = parseFloat(x[0]), w = parseFloat(x[1]), v = parseFloat(S.borderLeftWidth) || 0, _ = parseFloat(S.borderTopWidth) || 0, s -= m - (m - v) / y.scaleX - b, o -= g - (g - _) / y.scaleY - w, n -= v / y.scaleX - b, a -= _ / y.scaleY - w, T && (s += (parseFloat(S.borderRightWidth) + v) / y.scaleX, o += (_ + parseFloat(S.borderBottomWidth)) / y.scaleY))
                            }
                            return t === e ? { left: n, top: a, width: s - n, height: o - a } : (l = Ct(t), h = Ct(e, !0), c = Mt({ x: n, y: a }, l, h), f = Mt({ x: s, y: a }, l, h), u = Mt({ x: s, y: o }, l, h), p = Mt({ x: n, y: o }, l, h), n = Math.min(c.x, f.x, u.x, p.x), a = Math.min(c.y, f.y, u.y, p.y), G.x = G.y = 0, i && Et(e, G), { left: n + G.x, top: a + G.y, width: Math.max(c.x, f.x, u.x, p.x) - n, height: Math.max(c.y, f.y, u.y, p.y) - a })
                        },
                        Ft = function(t) { return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0])) },
                        Ot = "undefined" != typeof window && "ontouchstart" in E && "orientation" in window,
                        It = function(t) { for (var e = t.split(","), i = (void 0 !== A.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== A.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), r = {}, n = 4; --n > -1;) r[e[n]] = i[n], r[i[n]] = e[n]; return r }("touchstart,touchmove,touchend,touchcancel"),
                        Rt = function(t, e, i, r) {
                            if (t.addEventListener) {
                                var n = It[e];
                                r = r || { passive: !1 }, t.addEventListener(n || e, i, r), n && e !== n && t.addEventListener(e, i, r)
                            } else t.attachEvent && t.attachEvent("on" + e, i)
                        },
                        Lt = function(t, e, i) {
                            if (t.removeEventListener) {
                                var r = It[e];
                                t.removeEventListener(r || e, i), r && e !== r && t.removeEventListener(e, i)
                            } else t.detachEvent && t.detachEvent("on" + e, i)
                        },
                        Nt = function t(e) { r = e.touches && V < e.touches.length, Lt(e.target, "touchend", t) },
                        Bt = function(t) { r = t.touches && V < t.touches.length, Rt(t.target, "touchend", Nt) },
                        Vt = function(t, e, i, r, n, s) {
                            var a, l, h, c = {};
                            if (e)
                                if (1 !== n && e instanceof Array) {
                                    if (c.end = a = [], h = e.length, "object" === o(e[0]))
                                        for (l = 0; l < h; l++) a[l] = H(e[l], n);
                                    else
                                        for (l = 0; l < h; l++) a[l] = e[l] * n;
                                    i += 1.1, r -= 1.1
                                } else c.end = "function" == typeof e ? function(i) {
                                    var r, s, a = e.call(t, i);
                                    if (1 !== n)
                                        if ("object" === o(a)) {
                                            for (s in r = {}, a) r[s] = a[s] * n;
                                            a = r
                                        } else a *= n;
                                    return a
                                } : e;
                            return (i || 0 === i) && (c.max = i), (r || 0 === r) && (c.min = r), s && (c.velocity = 0), c
                        },
                        zt = function t(e) { var i; return !(!e || !e.getAttribute || "BODY" === e.nodeName) && (!("true" !== (i = e.getAttribute("data-clickable")) && ("false" === i || !e.onclick && !B.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode)) },
                        jt = function(t, e) { for (var i, r = t.length; --r > -1;)(i = t[r]).ondragstart = i.onselectstart = e ? null : T, nt(i, "userSelect", e ? "text" : "none") },
                        Gt = (p = P.createElement("div"), d = P.createElement("div"), m = d.style, g = P.body || A, m.display = "inline-block", m.position = "relative", p.style.cssText = d.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", p.appendChild(d), g.appendChild(p), u = d.offsetHeight + 18 > p.scrollHeight, g.removeChild(p), u),
                        qt = function(t, i) {
                            t = it(t), i = i || {};
                            var r, n, s, a, o, l, h = P.createElement("div"),
                                c = h.style,
                                f = t.firstChild,
                                u = 0,
                                p = 0,
                                d = t.scrollTop,
                                m = t.scrollLeft,
                                g = t.scrollWidth,
                                y = t.scrollHeight,
                                v = 0,
                                _ = 0,
                                x = 0;
                            dt && !1 !== i.force3D ? (o = "translate3d(", l = "px,0px)") : gt && (o = "translate(", l = "px)"), this.scrollTop = function(t, e) {
                                if (!arguments.length) return -this.top();
                                this.top(-t, e)
                            }, this.scrollLeft = function(t, e) {
                                if (!arguments.length) return -this.left();
                                this.left(-t, e)
                            }, this.left = function(r, n) {
                                if (!arguments.length) return -(t.scrollLeft + p);
                                var s = t.scrollLeft - m,
                                    a = p;
                                if ((s > 2 || s < -2) && !n) return m = t.scrollLeft, e.killTweensOf(this, !0, { left: 1, scrollLeft: 1 }), this.left(-m), void(i.onKill && i.onKill());
                                (r = -r) < 0 ? (p = r - .5 | 0, r = 0) : r > _ ? (p = r - _ | 0, r = _) : p = 0, (p || a) && (o ? this._suspendTransforms || (c[gt] = o + -p + "px," + -u + l) : c.left = -p + "px", p + v >= 0 && (c.paddingRight = p + v + "px")), t.scrollLeft = 0 | r, m = t.scrollLeft
                            }, this.top = function(r, n) {
                                if (!arguments.length) return -(t.scrollTop + u);
                                var s = t.scrollTop - d,
                                    a = u;
                                if ((s > 2 || s < -2) && !n) return d = t.scrollTop, e.killTweensOf(this, !0, { top: 1, scrollTop: 1 }), this.top(-d), void(i.onKill && i.onKill());
                                (r = -r) < 0 ? (u = r - .5 | 0, r = 0) : r > x ? (u = r - x | 0, r = x) : u = 0, (u || a) && (o ? this._suspendTransforms || (c[gt] = o + -p + "px," + -u + l) : c.top = -u + "px"), t.scrollTop = 0 | r, d = t.scrollTop
                            }, this.maxScrollTop = function() { return x }, this.maxScrollLeft = function() { return _ }, this.disable = function() {
                                for (f = h.firstChild; f;) a = f.nextSibling, t.appendChild(f), f = a;
                                t === h.parentNode && t.removeChild(h)
                            }, this.enable = function() {
                                if ((f = t.firstChild) !== h) {
                                    for (; f;) a = f.nextSibling, h.appendChild(f), f = a;
                                    t.appendChild(h), this.calibrate()
                                }
                            }, this.calibrate = function(e) {
                                var i, a, o = t.clientWidth === r;
                                d = t.scrollTop, m = t.scrollLeft, o && t.clientHeight === n && h.offsetHeight === s && g === t.scrollWidth && y === t.scrollHeight && !e || ((u || p) && (i = this.left(), a = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), o && !e || (c.display = "block", c.width = "auto", c.paddingRight = "0px", (v = Math.max(0, t.scrollWidth - t.clientWidth)) && (v += ct(t, "paddingLeft") + (Gt ? ct(t, "paddingRight") : 0))), c.display = "inline-block", c.position = "relative", c.overflow = "visible", c.verticalAlign = "top", c.width = "100%", c.paddingRight = v + "px", Gt && (c.paddingBottom = ct(t, "paddingBottom", !0)), O && (c.zoom = "1"), r = t.clientWidth, n = t.clientHeight, g = t.scrollWidth, y = t.scrollHeight, _ = t.scrollWidth - r, x = t.scrollHeight - n, s = h.offsetHeight, c.display = "block", (i || a) && (this.left(i), this.top(a)))
                            }, this.content = h, this.element = t, this._suspendTransforms = !1, this.enable()
                        },
                        Ht = function s(a, l) {
                            t.call(this, a), a = it(a), n || (n = b.com.greensock.plugins.ThrowPropsPlugin), this.vars = l = H(l || {}), this.target = a, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(l.dragResistance) || 0, this.edgeResistance = isNaN(l.edgeResistance) ? 1 : parseFloat(l.edgeResistance) || 0, this.lockAxis = l.lockAxis, this.autoScroll = l.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!l.allowEventDefault;
                            var h, c, f, u, p, d, m, g, w, T, S, k, A, B, W, U, K, Q, rt, st, at, ot, lt, ht, pt, dt, mt, gt, yt, vt, _t, xt, wt = (l.type || (O ? "top,left" : "x,y")).toLowerCase(),
                                Tt = -1 !== wt.indexOf("x") || -1 !== wt.indexOf("y"),
                                St = -1 !== wt.indexOf("rotation"),
                                Pt = St ? "rotation" : Tt ? "x" : "left",
                                kt = Tt ? "y" : "top",
                                At = -1 !== wt.indexOf("x") || -1 !== wt.indexOf("left") || "scroll" === wt,
                                Mt = -1 !== wt.indexOf("y") || -1 !== wt.indexOf("top") || "scroll" === wt,
                                Dt = l.minimumMovement || 2,
                                Ft = this,
                                Nt = function(t) {
                                    if ("string" == typeof t && (t = e.selector(t)), !t || t.nodeType) return [t];
                                    var i, r = [],
                                        n = t.length;
                                    for (i = 0; i !== n; r.push(t[i++]));
                                    return r
                                }(l.trigger || l.handle || a),
                                Gt = {},
                                Ht = 0,
                                Xt = !1,
                                Yt = l.autoScrollMarginTop || 40,
                                Ut = l.autoScrollMarginRight || 40,
                                Kt = l.autoScrollMarginBottom || 40,
                                $t = l.autoScrollMarginLeft || 40,
                                Zt = l.clickableTest || zt,
                                Jt = 0,
                                Qt = function(t) {
                                    if (!(Ft.isPressed && t.which < 2)) return t.preventDefault(), t.stopPropagation(), !1;
                                    Ft.endDrag()
                                },
                                te = function(t) {
                                    if (Ft.autoScroll && Ft.isDragging && (Xt || Q)) {
                                        var e, i, r, n, s, o, l, h, f = a,
                                            u = 15 * Ft.autoScroll;
                                        for (Xt = !1, q.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != E.scrollTop ? E.scrollTop : P.body.scrollTop, q.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != E.scrollLeft ? E.scrollLeft : P.body.scrollLeft, n = Ft.pointerX - q.scrollLeft, s = Ft.pointerY - q.scrollTop; f && !i;) e = (i = J(f.parentNode)) ? q : f.parentNode, r = i ? { bottom: Math.max(E.clientHeight, window.innerHeight || 0), right: Math.max(E.clientWidth, window.innerWidth || 0), left: 0, top: 0 } : e.getBoundingClientRect(), o = l = 0, Mt && ((h = e._gsMaxScrollY - e.scrollTop) < 0 ? l = h : s > r.bottom - Kt && h ? (Xt = !0, l = Math.min(h, u * (1 - Math.max(0, r.bottom - s) / Kt) | 0)) : s < r.top + Yt && e.scrollTop && (Xt = !0, l = -Math.min(e.scrollTop, u * (1 - Math.max(0, s - r.top) / Yt) | 0)), l && (e.scrollTop += l)), At && ((h = e._gsMaxScrollX - e.scrollLeft) < 0 ? o = h : n > r.right - Ut && h ? (Xt = !0, o = Math.min(h, u * (1 - Math.max(0, r.right - n) / Ut) | 0)) : n < r.left + $t && e.scrollLeft && (Xt = !0, o = -Math.min(e.scrollLeft, u * (1 - Math.max(0, n - r.left) / $t) | 0)), o && (e.scrollLeft += o)), i && (o || l) && (window.scrollTo(e.scrollLeft, e.scrollTop), de(Ft.pointerX + o, Ft.pointerY + l)), f = e
                                    }
                                    if (Q) {
                                        var p = Ft.x,
                                            d = Ft.y;
                                        p < 1e-6 && p > -1e-6 && (p = 0), d < 1e-6 && d > -1e-6 && (d = 0), St ? (Ft.deltaX = p - mt.data.rotation, mt.data.rotation = Ft.rotation = p, mt.setRatio(1)) : c ? (Mt && (Ft.deltaY = d - c.top(), c.top(d)), At && (Ft.deltaX = p - c.left(), c.left(p))) : Tt ? (Mt && (Ft.deltaY = d - mt.data.y, mt.data.y = d), At && (Ft.deltaX = p - mt.data.x, mt.data.x = p), mt.setRatio(1)) : (Mt && (Ft.deltaY = d - parseFloat(a.style.top || 0), a.style.top = d + "px"), At && (Ft.deltaY = p - parseFloat(a.style.left || 0), a.style.left = p + "px")), !g || t || vt || (vt = !0, ft(Ft, "drag", "onDrag"), vt = !1)
                                    }
                                    Q = !1
                                },
                                ee = function(t, i) {
                                    var r, n = Ft.x,
                                        s = Ft.y;
                                    a._gsTransform || !Tt && !St || e.set(a, { x: "+=0", overwrite: !1, data: "_draggable" }), Tt ? (Ft.y = a._gsTransform.y, Ft.x = a._gsTransform.x) : St ? Ft.x = Ft.rotation = a._gsTransform.rotation : c ? (Ft.y = c.top(), Ft.x = c.left()) : (Ft.y = parseInt(a.style.top, 10) || 0, Ft.x = parseInt(a.style.left, 10) || 0), (st || at || ot) && !i && (Ft.isDragging || Ft.isThrowing) && (ot && (G.x = Ft.x, G.y = Ft.y, (r = ot(G)).x !== Ft.x && (Ft.x = r.x, Q = !0), r.y !== Ft.y && (Ft.y = r.y, Q = !0)), st && (r = st(Ft.x)) !== Ft.x && (Ft.x = r, St && (Ft.rotation = r), Q = !0), at && ((r = at(Ft.y)) !== Ft.y && (Ft.y = r), Q = !0)), Q && te(!0), t || (Ft.deltaX = Ft.x - n, Ft.deltaY = Ft.y - s, ft(Ft, "throwupdate", "onThrowUpdate"))
                                },
                                ie = function() {
                                    var t, e, i, r;
                                    m = !1, c ? (c.calibrate(), Ft.minX = T = -c.maxScrollLeft(), Ft.minY = k = -c.maxScrollTop(), Ft.maxX = w = Ft.maxY = S = 0, m = !0) : l.bounds && (t = ut(l.bounds, a.parentNode), St ? (Ft.minX = T = t.left, Ft.maxX = w = t.left + t.width, Ft.minY = k = Ft.maxY = S = 0) : void 0 !== l.bounds.maxX || void 0 !== l.bounds.maxY ? (t = l.bounds, Ft.minX = T = t.minX, Ft.minY = k = t.minY, Ft.maxX = w = t.maxX, Ft.maxY = S = t.maxY) : (e = ut(a, a.parentNode), Ft.minX = T = ct(a, Pt) + t.left - e.left, Ft.minY = k = ct(a, kt) + t.top - e.top, Ft.maxX = w = T + (t.width - e.width), Ft.maxY = S = k + (t.height - e.height)), T > w && (Ft.minX = w, Ft.maxX = w = T, T = Ft.minX), k > S && (Ft.minY = S, Ft.maxY = S = k, k = Ft.minY), St && (Ft.minRotation = T, Ft.maxRotation = w), m = !0), l.liveSnap && (r = (i = !0 === l.liveSnap ? l.snap || {} : l.liveSnap) instanceof Array || "function" == typeof i, St ? (st = ce(r ? i : i.rotation, T, w, 1), at = null) : i.points ? ot = fe(r ? i : i.points, T, w, k, S, i.radius, c ? -1 : 1) : (At && (st = ce(r ? i : i.x || i.left || i.scrollLeft, T, w, c ? -1 : 1)), Mt && (at = ce(r ? i : i.y || i.top || i.scrollTop, k, S, c ? -1 : 1))))
                                },
                                re = function() { Ft.isThrowing = !1, ft(Ft, "throwcomplete", "onThrowComplete") },
                                ne = function() { Ft.isThrowing = !1 },
                                se = function(t, e) {
                                    var i, r, s, h;
                                    t && n ? (!0 === t && (r = (i = l.snap || l.liveSnap || {}) instanceof Array || "function" == typeof i, t = { resistance: (l.throwResistance || l.resistance || 1e3) / (St ? 10 : 1) }, St ? t.rotation = Vt(Ft, r ? i : i.rotation, w, T, 1, e) : (At && (t[Pt] = Vt(Ft, r ? i : i.points || i.x || i.left || i.scrollLeft, w, T, c ? -1 : 1, e || "x" === Ft.lockedAxis)), Mt && (t[kt] = Vt(Ft, r ? i : i.points || i.y || i.top || i.scrollTop, S, k, c ? -1 : 1, e || "y" === Ft.lockedAxis)), (i.points || i instanceof Array && "object" === o(i[0])) && (t.linkedProps = Pt + "," + kt, t.radius = i.radius))), Ft.isThrowing = !0, h = isNaN(l.overshootTolerance) ? 1 === l.edgeResistance ? 0 : 1 - Ft.edgeResistance + .2 : l.overshootTolerance, Ft.tween = s = n.to(c || a, { throwProps: t, data: "_draggable", ease: l.ease || b.Power3.easeOut, onComplete: re, onOverwrite: ne, onUpdate: l.fastMode ? ft : ee, onUpdateParams: l.fastMode ? [Ft, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : C }, Math.max(l.minDuration || 0, l.maxDuration || 0) || 2, isNaN(l.minDuration) ? 0 === h || "object" === o(t) && t.resistance > 1e3 ? 0 : .5 : l.minDuration, h), l.fastMode || (c && (c._suspendTransforms = !0), s.render(s.duration(), !0, !0), ee(!0, !0), Ft.endX = Ft.x, Ft.endY = Ft.y, St && (Ft.endRotation = Ft.x), s.play(0), ee(!0, !0), c && (c._suspendTransforms = !1))) : m && Ft.applyBounds()
                                },
                                ae = function(t) {
                                    var e, i, r, n, s, o, l, h, c, p = pt || [1, 0, 0, 1, 0, 0];
                                    pt = Ct(a.parentNode, !0), t && Ft.isPressed && p.join(",") !== pt.join(",") && (e = p[0], i = p[1], r = p[2], n = p[3], s = p[4], o = p[5], c = f * (-i / (l = e * n - i * r)) + u * (e / l) + -(e * o - i * s) / l, u = (h = f * (n / l) + u * (-r / l) + (r * o - n * s) / l) * pt[1] + c * pt[3] + pt[5], f = h * pt[0] + c * pt[2] + pt[4]), pt[1] || pt[2] || 1 != pt[0] || 1 != pt[3] || 0 != pt[4] || 0 != pt[5] || (pt = null)
                                },
                                oe = function() {
                                    var t = 1 - Ft.edgeResistance;
                                    ae(!1), pt && (f = Ft.pointerX * pt[0] + Ft.pointerY * pt[2] + pt[4], u = Ft.pointerX * pt[1] + Ft.pointerY * pt[3] + pt[5]), Q && (de(Ft.pointerX, Ft.pointerY), te(!0)), c ? (ie(), d = c.top(), p = c.left()) : (le() ? (ee(!0, !0), ie()) : Ft.applyBounds(), St ? (K = Ft.rotationOrigin = function(t, e, i, r, n) {
                                        t = it(t);
                                        var s = Ct(t, !1),
                                            a = e.x,
                                            o = e.y;
                                        return i && (Et(t, e), a -= e.x, o -= e.y), (r = !0 === r ? e : r || {}).x = a * s[0] + o * s[2] + s[4], r.y = a * s[1] + o * s[3] + s[5], r
                                    }(a, { x: 0, y: 0 }), ee(!0, !0), p = Ft.x, d = Ft.y = Math.atan2(K.y - Ft.pointerY, Ft.pointerX - K.x) * M) : (a.parentNode && a.parentNode.scrollTop || 0, a.parentNode && a.parentNode.scrollLeft || 0, d = ct(a, kt), p = ct(a, Pt))), m && t && (p > w ? p = w + (p - w) / t : p < T && (p = T - (T - p) / t), St || (d > S ? d = S + (d - S) / t : d < k && (d = k - (k - d) / t))), Ft.startX = p, Ft.startY = d
                                },
                                le = function() { return Ft.tween && Ft.tween.isActive() },
                                he = function() {!I.parentNode || le() || Ft.isDragging || I.parentNode.removeChild(I) },
                                ce = function(t, e, i, r) { return "function" == typeof t ? function(n) { var s = Ft.isPressed ? 1 - Ft.edgeResistance : 1; return t.call(Ft, n > i ? i + (n - i) * s : n < e ? e + (n - e) * s : n) * r } : t instanceof Array ? function(r) { for (var n, s, a = t.length, o = 0, l = D; --a > -1;)(s = (n = t[a]) - r) < 0 && (s = -s), s < l && n >= e && n <= i && (o = a, l = s); return t[o] } : isNaN(t) ? function(t) { return t } : function() { return t * r } },
                                fe = function(t, e, i, r, n, s, a) {
                                    return s = s && s < D ? s * s : D, "function" == typeof t ? function(o) {
                                        var l, h, c, f = Ft.isPressed ? 1 - Ft.edgeResistance : 1,
                                            u = o.x,
                                            p = o.y;
                                        return o.x = u = u > i ? i + (u - i) * f : u < e ? e + (u - e) * f : u, o.y = p = p > n ? n + (p - n) * f : p < r ? r + (p - r) * f : p, (l = t.call(Ft, o)) !== o && (o.x = l.x, o.y = l.y), 1 !== a && (o.x *= a, o.y *= a), s < D && (h = o.x - u) * h + (c = o.y - p) * c > s && (o.x = u, o.y = p), o
                                    } : t instanceof Array ? function(e) { for (var i, r, n, a, o = t.length, l = 0, h = D; --o > -1;)(a = (i = (n = t[o]).x - e.x) * i + (r = n.y - e.y) * r) < h && (l = o, h = a); return h <= s ? t[l] : e } : function(t) { return t }
                                },
                                ue = function(t, i) {
                                    var r;
                                    if (h && !Ft.isPressed && t && ("mousedown" !== t.type && "pointerdown" !== t.type || i || !(F() - Jt < 30) || !It[Ft.pointerEvent.type])) {
                                        if (dt = le(), Ft.pointerEvent = t, It[t.type] ? (ht = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : P, Rt(ht, "touchend", me), Rt(ht, "touchmove", pe), Rt(ht, "touchcancel", me), Rt(P, "touchstart", Bt)) : (ht = null, Rt(P, "mousemove", pe)), yt = null, Rt(P, "mouseup", me), t && t.target && Rt(t.target, "mouseup", me), lt = Zt.call(Ft, t.target) && !l.dragClickables && !i) return Rt(t.target, "change", me), ft(Ft, "pressInit", "onPressInit"), ft(Ft, "press", "onPress"), void jt(Nt, !0);
                                        if (gt = !(!ht || At === Mt || !1 === Ft.vars.allowNativeTouchScrolling || Ft.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (At ? "y" : "x"), O ? t = et(t, !0) : gt || Ft.allowEventDefault || (t.preventDefault(), t.preventManipulation && t.preventManipulation()), t.changedTouches ? (t = W = t.changedTouches[0], U = t.identifier) : t.pointerId ? U = t.pointerId : W = U = null, V++, function(t) { R.push(t), 1 === R.length && e.ticker.addEventListener("tick", X, this, !1, 1) }(te), u = Ft.pointerY = t.pageY, f = Ft.pointerX = t.pageX, ft(Ft, "pressInit", "onPressInit"), (gt || Ft.autoScroll) && tt(a.parentNode), !a.parentNode || !Ft.autoScroll || c || St || !a.parentNode._gsMaxScrollX || I.parentNode || a.getBBox || (I.style.width = a.parentNode.scrollWidth + "px", a.parentNode.appendChild(I)), oe(), Ft.tween && Ft.tween.kill(), Ft.isThrowing = !1, e.killTweensOf(c || a, !0, Gt), c && e.killTweensOf(a, !0, { scrollTo: 1 }), Ft.tween = Ft.lockedAxis = null, (l.zIndexBoost || !St && !c && !1 !== l.zIndexBoost) && (a.style.zIndex = s.zIndex++), Ft.isPressed = !0, g = !(!l.onDrag && !Ft._listeners.drag), !St)
                                            for (r = Nt.length; --r > -1;) nt(Nt[r], "cursor", l.cursor || "move");
                                        ft(Ft, "press", "onPress")
                                    }
                                },
                                pe = function(t) {
                                    var e, i, n, s, a, o, l = t;
                                    if (h && !r && Ft.isPressed && t) {
                                        if (Ft.pointerEvent = t, e = t.changedTouches) { if ((t = e[0]) !== W && t.identifier !== U) { for (s = e.length; --s > -1 && (t = e[s]).identifier !== U;); if (s < 0) return } } else if (t.pointerId && U && t.pointerId !== U) return;
                                        if (O) t = et(t, !0);
                                        else {
                                            if (ht && gt && !yt && (i = t.pageX, n = t.pageY, pt && (s = i * pt[0] + n * pt[2] + pt[4], n = i * pt[1] + n * pt[3] + pt[5], i = s), ((a = Math.abs(i - f)) !== (o = Math.abs(n - u)) && (a > Dt || o > Dt) || z && gt === yt) && (yt = a > o && At ? "x" : "y", !1 !== Ft.vars.lockAxisOnTouchScroll && (Ft.lockedAxis = "x" === yt ? "y" : "x", "function" == typeof Ft.vars.onLockAxis && Ft.vars.onLockAxis.call(Ft, l)), z && gt === yt))) return void me(l);
                                            Ft.allowEventDefault || gt && (!yt || gt === yt) || !1 === l.cancelable || (l.preventDefault(), l.preventManipulation && l.preventManipulation())
                                        }
                                        Ft.autoScroll && (Xt = !0), de(t.pageX, t.pageY)
                                    }
                                },
                                de = function(t, e) {
                                    var i, r, n, s, a, o, l = 1 - Ft.dragResistance,
                                        h = 1 - Ft.edgeResistance;
                                    Ft.pointerX = t, Ft.pointerY = e, St ? (s = Math.atan2(K.y - e, t - K.x) * M, (a = Ft.y - s) > 180 ? (d -= 360, Ft.y = s) : a < -180 && (d += 360, Ft.y = s), Ft.x !== p || Math.abs(d - s) > Dt ? (Ft.y = s, n = p + (d - s) * l) : n = p) : (pt && (o = t * pt[0] + e * pt[2] + pt[4], e = t * pt[1] + e * pt[3] + pt[5], t = o), (r = e - u) < Dt && r > -Dt && (r = 0), (i = t - f) < Dt && i > -Dt && (i = 0), (Ft.lockAxis || Ft.lockedAxis) && (i || r) && ((o = Ft.lockedAxis) || (Ft.lockedAxis = o = At && Math.abs(i) > Math.abs(r) ? "y" : Mt ? "x" : null, o && "function" == typeof Ft.vars.onLockAxis && Ft.vars.onLockAxis.call(Ft, Ft.pointerEvent)), "y" === o ? r = 0 : "x" === o && (i = 0)), n = p + i * l, s = d + r * l), (st || at || ot) && (Ft.x !== n || Ft.y !== s && !St) ? (ot && (G.x = n, G.y = s, n = (o = ot(G)).x, s = o.y), st && (n = st(n)), at && (s = at(s))) : m && (n > w ? n = w + (n - w) * h : n < T && (n = T + (n - T) * h), St || (s > S ? s = S + (s - S) * h : s < k && (s = k + (s - k) * h))), St || pt || (n = Math.round(n), s = Math.round(s)), (Ft.x !== n || Ft.y !== s && !St) && (St ? (Ft.endRotation = Ft.x = Ft.endX = n, Q = !0) : (Mt && (Ft.y = Ft.endY = s, Q = !0), At && (Ft.x = Ft.endX = n, Q = !0)), !Ft.isDragging && Ft.isPressed && (Ft.isDragging = !0, ft(Ft, "dragstart", "onDragStart")))
                                },
                                me = function t(i, r) {
                                    if (h && Ft.isPressed && (!i || null == U || r || !(i.pointerId && i.pointerId !== U || i.changedTouches && ! function(t, e) {
                                            for (var i = t.length; --i > -1;)
                                                if (t[i].identifier === e) return !0;
                                            return !1
                                        }(i.changedTouches, U)))) {
                                        Ft.isPressed = !1;
                                        var n, s, o, c, f, u = i,
                                            p = Ft.isDragging,
                                            d = Ft.vars.allowContextMenu && i && (i.ctrlKey || i.which > 2),
                                            m = e.delayedCall(.001, he);
                                        if (ht ? (Lt(ht, "touchend", t), Lt(ht, "touchmove", pe), Lt(ht, "touchcancel", t), Lt(P, "touchstart", Bt)) : Lt(P, "mousemove", pe), Lt(P, "mouseup", t), i && i.target && Lt(i.target, "mouseup", t), Q = !1, lt && !d) return i && (Lt(i.target, "change", t), Ft.pointerEvent = u), jt(Nt, !1), ft(Ft, "release", "onRelease"), ft(Ft, "click", "onClick"), void(lt = !1);
                                        if (Y(te), !St)
                                            for (s = Nt.length; --s > -1;) nt(Nt[s], "cursor", l.cursor || "move");
                                        if (p && (Ht = j = F(), Ft.isDragging = !1), V--, i) {
                                            if (O && (i = et(i, !1)), (n = i.changedTouches) && (i = n[0]) !== W && i.identifier !== U) { for (s = n.length; --s > -1 && (i = n[s]).identifier !== U;); if (s < 0) return }
                                            Ft.pointerEvent = u, Ft.pointerX = i.pageX, Ft.pointerY = i.pageY
                                        }
                                        return d && u ? (u.preventDefault(), u.preventManipulation && u.preventManipulation(), ft(Ft, "release", "onRelease")) : u && !p ? (dt && (l.snap || l.bounds) && se(l.throwProps), ft(Ft, "release", "onRelease"), z && "touchmove" === u.type || -1 !== u.type.indexOf("cancel") || (ft(Ft, "click", "onClick"), F() - Jt < 300 && ft(Ft, "doubleclick", "onDoubleClick"), c = u.target || u.srcElement || a, Jt = F(), f = function() { Jt !== _t && Ft.enabled() && !Ft.isPressed && (c.click ? c.click() : P.createEvent && ((o = P.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, Ft.pointerEvent.screenX, Ft.pointerEvent.screenY, Ft.pointerX, Ft.pointerY, !1, !1, !1, !1, 0, null), c.dispatchEvent(o))) }, z || u.defaultPrevented || e.delayedCall(1e-5, f))) : (se(l.throwProps), O || Ft.allowEventDefault || !u || !l.dragClickables && Zt.call(Ft, u.target) || !p || gt && (!yt || gt !== yt) || !1 === u.cancelable || (u.preventDefault(), u.preventManipulation && u.preventManipulation()), ft(Ft, "release", "onRelease")), le() && m.duration(Ft.tween.duration()), p && ft(Ft, "dragend", "onDragEnd"), !0
                                    }
                                },
                                ge = function(t) {
                                    if (t && Ft.isDragging && !c) {
                                        var e = t.target || t.srcElement || a.parentNode,
                                            i = e.scrollLeft - e._gsScrollX,
                                            r = e.scrollTop - e._gsScrollY;
                                        (i || r) && (pt ? (f -= i * pt[0] + r * pt[2], u -= r * pt[3] + i * pt[1]) : (f -= i, u -= r), e._gsScrollX += i, e._gsScrollY += r, de(Ft.pointerX, Ft.pointerY))
                                    }
                                },
                                ye = function(t) {
                                    var e = F(),
                                        i = e - Jt < 40,
                                        r = e - Ht < 40,
                                        n = i && _t === Jt,
                                        s = !!t.preventDefault,
                                        a = Ft.pointerEvent && Ft.pointerEvent.defaultPrevented,
                                        o = i && xt === Jt,
                                        l = t.isTrusted || null == t.isTrusted && i && n;
                                    if (s && (n || r && !1 !== Ft.vars.suppressClickOnDrag) && t.stopImmediatePropagation(), i && (!Ft.pointerEvent || !Ft.pointerEvent.defaultPrevented) && (!n || l !== o)) return l && n && (xt = Jt), void(_t = Jt);
                                    (Ft.isPressed || r || i) && (s ? l && t.detail && i && !a || (t.preventDefault(), t.preventManipulation && t.preventManipulation()) : t.returnValue = !1)
                                },
                                ve = function(t) { return pt ? { x: t.x * pt[0] + t.y * pt[2] + pt[4], y: t.x * pt[1] + t.y * pt[3] + pt[5] } : { x: t.x, y: t.y } };
                            (rt = s.get(this.target)) && rt.kill(), this.startDrag = function(t, e) {
                                var i, r, n, s;
                                ue(t || Ft.pointerEvent, !0), e && !Ft.hitTest(t || Ft.pointerEvent) && (i = Wt(t || Ft.pointerEvent), r = Wt(a), n = ve({ x: i.left + i.width / 2, y: i.top + i.height / 2 }), s = ve({ x: r.left + r.width / 2, y: r.top + r.height / 2 }), f -= n.x - s.x, u -= n.y - s.y), Ft.isDragging || (Ft.isDragging = !0, ft(Ft, "dragstart", "onDragStart"))
                            }, this.drag = pe, this.endDrag = function(t) { me(t || Ft.pointerEvent, !0) }, this.timeSinceDrag = function() { return Ft.isDragging ? 0 : (F() - Ht) / 1e3 }, this.timeSinceClick = function() { return (F() - Jt) / 1e3 }, this.hitTest = function(t, e) { return s.hitTest(Ft.target, t, e) }, this.getDirection = function(t, e) { var i, r, s, a, l, h, c = "velocity" === t && n ? t : "object" !== o(t) || St ? "start" : "element"; return "element" === c && (l = Wt(Ft.target), h = Wt(t)), i = "start" === c ? Ft.x - p : "velocity" === c ? n.getVelocity(this.target, Pt) : l.left + l.width / 2 - (h.left + h.width / 2), St ? i < 0 ? "counter-clockwise" : "clockwise" : (e = e || 2, r = "start" === c ? Ft.y - d : "velocity" === c ? n.getVelocity(this.target, kt) : l.top + l.height / 2 - (h.top + h.height / 2), a = (s = Math.abs(i / r)) < 1 / e ? "" : i < 0 ? "left" : "right", s < e && ("" !== a && (a += "-"), a += r < 0 ? "up" : "down"), a) }, this.applyBounds = function(t) {
                                var e, i, r, n, s, o;
                                if (t && l.bounds !== t) return l.bounds = t, Ft.update(!0);
                                if (ee(!0), ie(), m) {
                                    if (e = Ft.x, i = Ft.y, e > w ? e = w : e < T && (e = T), i > S ? i = S : i < k && (i = k), (Ft.x !== e || Ft.y !== i) && (r = !0, Ft.x = Ft.endX = e, St ? Ft.endRotation = e : Ft.y = Ft.endY = i, Q = !0, te(!0), Ft.autoScroll && !Ft.isDragging))
                                        for (tt(a.parentNode), n = a, q.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != E.scrollTop ? E.scrollTop : P.body.scrollTop, q.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != E.scrollLeft ? E.scrollLeft : P.body.scrollLeft; n && !o;) s = (o = J(n.parentNode)) ? q : n.parentNode, Mt && s.scrollTop > s._gsMaxScrollY && (s.scrollTop = s._gsMaxScrollY), At && s.scrollLeft > s._gsMaxScrollX && (s.scrollLeft = s._gsMaxScrollX), n = s;
                                    Ft.isThrowing && (r || Ft.endX > w || Ft.endX < T || Ft.endY > S || Ft.endY < k) && se(l.throwProps, r)
                                }
                                return Ft
                            }, this.update = function(t, e, i) {
                                var r = Ft.x,
                                    n = Ft.y;
                                return ae(!e), t ? Ft.applyBounds() : (Q && i && te(!0), ee(!0)), e && (de(Ft.pointerX, Ft.pointerY), Q && te(!0)), Ft.isPressed && !e && (At && Math.abs(r - Ft.x) > .01 || Mt && Math.abs(n - Ft.y) > .01 && !St) && oe(), Ft.autoScroll && (tt(a.parentNode), Xt = Ft.isDragging, te(!0)), Ft.autoScroll && (Z(a, ge), $(a, ge)), Ft
                            }, this.enable = function(t) {
                                var r, s, o;
                                if ("soft" !== t) {
                                    for (s = Nt.length; --s > -1;) o = Nt[s], Rt(o, "mousedown", ue), Rt(o, "touchstart", ue), Rt(o, "click", ye, !0), St || nt(o, "cursor", l.cursor || "move"), nt(o, "touchCallout", "none"), nt(o, "touchAction", At === Mt ? "none" : At ? "pan-y" : "pan-x"), bt(o) && nt(o.ownerSVGElement || o, "touchAction", At === Mt ? "none" : At ? "pan-y" : "pan-x"), this.vars.allowContextMenu || Rt(o, "contextmenu", Qt);
                                    jt(Nt, !1)
                                }
                                return $(a, ge), h = !0, n && "soft" !== t && n.track(c || a, Tt ? "x,y" : St ? "rotation" : "top,left"), c && c.enable(), a._gsDragID = r = "d" + N++, L[r] = this, c && (c.element._gsDragID = r), e.set(a, { x: "+=0", overwrite: !1, data: "_draggable" }), mt = { t: a, data: O ? B : a._gsTransform, tween: {}, setRatio: O ? function() { e.set(a, A) } : i._internals.setTransformRatio || i._internals.set3DTransformRatio }, oe(), Ft.update(!0), Ft
                            }, this.disable = function(t) {
                                var e, i, r = Ft.isDragging;
                                if (!St)
                                    for (e = Nt.length; --e > -1;) nt(Nt[e], "cursor", null);
                                if ("soft" !== t) {
                                    for (e = Nt.length; --e > -1;) i = Nt[e], nt(i, "touchCallout", null), nt(i, "touchAction", null), Lt(i, "mousedown", ue), Lt(i, "touchstart", ue), Lt(i, "click", ye), Lt(i, "contextmenu", Qt);
                                    jt(Nt, !0), ht && (Lt(ht, "touchcancel", me), Lt(ht, "touchend", me), Lt(ht, "touchmove", pe)), Lt(P, "mouseup", me), Lt(P, "mousemove", pe)
                                }
                                return Z(a, ge), h = !1, n && "soft" !== t && n.untrack(c || a, Tt ? "x,y" : St ? "rotation" : "top,left"), c && c.disable(), Y(te), Ft.isDragging = Ft.isPressed = lt = !1, r && ft(Ft, "dragend", "onDragEnd"), Ft
                            }, this.enabled = function(t, e) { return arguments.length ? t ? Ft.enable(e) : Ft.disable(e) : h }, this.kill = function() { return Ft.isThrowing = !1, e.killTweensOf(c || a, !0, Gt), Ft.disable(), e.set(Nt, { clearProps: "userSelect" }), delete L[a._gsDragID], Ft }, -1 !== wt.indexOf("scroll") && (c = this.scrollProxy = new qt(a, function(t, e) { var i; for (i in e) void 0 === t[i] && (t[i] = e[i]); return t }({ onKill: function() { Ft.isPressed && me(null) } }, l)), a.style.overflowY = Mt && !Ot ? "auto" : "hidden", a.style.overflowX = At && !Ot ? "auto" : "hidden", a = c.content), !1 !== l.force3D && e.set(a, { force3D: !0 }), St ? Gt.rotation = 1 : (At && (Gt[Pt] = 1), Mt && (Gt[kt] = 1)), St ? (B = (A = x).css, A.overwrite = !1) : Tt && (B = (A = At && Mt ? y : At ? v : _).css, A.overwrite = !1), this.enable()
                        },
                        Xt = Ht.prototype = new t;
                    Xt.constructor = Ht, Xt.pointerX = Xt.pointerY = Xt.startX = Xt.startY = Xt.deltaX = Xt.deltaY = 0, Xt.isDragging = Xt.isPressed = !1, Ht.version = "0.16.5", Ht.zIndex = 1e3, Rt(P, "touchcancel", function() {}), Rt(P, "contextmenu", function(t) { var e; for (e in L) L[e].isPressed && L[e].endDrag() }), Ht.create = function(t, i) {
                        "string" == typeof t && (t = e.selector(t));
                        for (var r = t && 0 !== t.length ? Ft(t) ? function(t) {
                                var e, i, r, n = [],
                                    s = t.length;
                                for (e = 0; e < s; e++)
                                    if (i = t[e], Ft(i))
                                        for (r = i.length, r = 0; r < i.length; r++) n.push(i[r]);
                                    else i && 0 !== i.length && n.push(i);
                                return n
                            }(t) : [t] : [], n = r.length; --n > -1;) r[n] = new Ht(r[n], i);
                        return r
                    }, Ht.get = function(t) { return L[(it(t) || {})._gsDragID] }, Ht.timeSinceDrag = function() { return (F() - j) / 1e3 };
                    var Yt = {},
                        Wt = function(t, e) {
                            if (t === window) return Yt.left = Yt.top = 0, Yt.width = Yt.right = E.clientWidth || t.innerWidth || P.body.clientWidth || 0, Yt.height = Yt.bottom = (t.innerHeight || 0) - 20 < E.clientHeight ? E.clientHeight : t.innerHeight || P.body.clientHeight || 0, Yt;
                            var i = t.pageX !== e ? { left: t.pageX - K(), top: t.pageY - U(), right: t.pageX - K() + 1, bottom: t.pageY - U() + 1 } : t.nodeType || t.left === e || t.top === e ? O ? function(t) {
                                var e, i, r = 0,
                                    n = 0;
                                for (e = (t = it(t)).offsetWidth, i = t.offsetHeight; t;) r += t.offsetTop, n += t.offsetLeft, t = t.offsetParent;
                                return { top: r, left: n, width: e, height: i }
                            }(t) : it(t).getBoundingClientRect() : t;
                            return i.right === e && i.width !== e ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : i.width === e && (i = { width: i.right - i.left, height: i.bottom - i.top, right: i.right, left: i.left, bottom: i.bottom, top: i.top }), i
                        };
                    return Ht.hitTest = function(t, e, i) {
                        if (t === e) return !1;
                        var r, n, s, a = Wt(t),
                            o = Wt(e),
                            l = o.left > a.right || o.right < a.left || o.top > a.bottom || o.bottom < a.top;
                        return l || !i ? !l : (s = -1 !== (i + "").indexOf("%"), i = parseFloat(i) || 0, (r = { left: Math.max(a.left, o.left), top: Math.max(a.top, o.top) }).width = Math.min(a.right, o.right) - r.left, r.height = Math.min(a.bottom, o.bottom) - r.top, !(r.width < 0 || r.height < 0) && (s ? (i *= .01, (n = r.width * r.height) >= a.width * a.height * i || n >= o.width * o.height * i) : r.width > i && r.height > i))
                    }, I.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Ht
                }, !0)
            }), l._gsDefine && l._gsQueue.pop()(),
            function(r) {
                "use strict";
                var o = function() { return (l.GreenSockGlobals || l).Draggable };
                t.exports ? (i(49), i(131), t.exports = o()) : (s = [i(49), i(131)], void 0 === (a = "function" == typeof(n = o) ? n.apply(e, s) : n) || (t.exports = a))
            }()
    }).call(this, i(54))
}, function(t, e) {
    t.exports = function(t) {
        t = t || {};
        var e = document.createElement(t.selector);
        if (t.attr)
            for (var i in t.attr) t.attr.hasOwnProperty(i) && e.setAttribute(i, t.attr[i]);
        return "a" == t.selector && t.link && (e.href = t.link, t.target && e.setAttribute("target", t.target)), "img" == t.selector && t.src && (e.src = t.src, t.lazyload && (e.style.opacity = 0, e.onload = function() { e.style.opacity = 1 })), t.id && (e.id = t.id), t.styles && (e.className = t.styles), t.html && (e.innerHTML = t.html), t.children && e.appendChild(t.children), e
    }
}, function(t, e, i) {
    var r = i(5),
        n = i(2).document,
        s = r(n) && r(n.createElement);
    t.exports = function(t) { return s ? n.createElement(t) : {} }
}, function(t, e, i) { e.f = i(6) }, function(t, e, i) {
    var r = i(55)("keys"),
        n = i(34);
    t.exports = function(t) { return r[t] || (r[t] = n(t)) }
}, function(t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, e, i) {
    var r = i(2).document;
    t.exports = r && r.documentElement
}, function(t, e, i) {
    var r = i(5),
        n = i(4),
        s = function(t, e) { if (n(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!") };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                (r = i(21)(Function.call, i(24).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) { e = !0 }
            return function(t, i) { return s(t, i), e ? t.__proto__ = i : r(t, i), t }
        }({}, !1) : void 0),
        check: s
    }
}, function(t, e) { t.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff" }, function(t, e, i) {
    var r = i(5),
        n = i(74).set;
    t.exports = function(t, e, i) { var s, a = e.constructor; return a !== i && "function" == typeof a && (s = a.prototype) !== i.prototype && r(s) && n && n(t, s), t }
}, function(t, e, i) {
    "use strict";
    var r = i(23),
        n = i(29);
    t.exports = function(t) {
        var e = String(n(this)),
            i = "",
            s = r(t);
        if (s < 0 || s == 1 / 0) throw RangeError("Count can't be negative");
        for (; s > 0;
            (s >>>= 1) && (e += e)) 1 & s && (i += e);
        return i
    }
}, function(t, e) { t.exports = Math.sign || function(t) { return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1 } }, function(t, e) {
    var i = Math.expm1;
    t.exports = !i || i(10) > 22025.465794806718 || i(10) < 22025.465794806718 || -2e-17 != i(-2e-17) ? function(t) { return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1 } : i
}, function(t, e, i) {
    var r = i(23),
        n = i(29);
    t.exports = function(t) {
        return function(e, i) {
            var s, a, o = String(n(e)),
                l = r(i),
                h = o.length;
            return l < 0 || l >= h ? t ? "" : void 0 : (s = o.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === h || (a = o.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? o.charAt(l) : s : t ? o.slice(l, l + 2) : a - 56320 + (s - 55296 << 10) + 65536
        }
    }
}, function(t, e, i) {
    "use strict";
    var r = i(35),
        n = i(1),
        s = i(14),
        a = i(17),
        o = i(45),
        l = i(112),
        h = i(43),
        c = i(40),
        f = i(6)("iterator"),
        u = !([].keys && "next" in [].keys()),
        p = function() { return this };
    t.exports = function(t, e, i, d, m, g, y) {
        l(i, e, d);
        var v, _, x, b = function(t) {
                if (!u && t in P) return P[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() { return new i(this, t) }
                }
                return function() { return new i(this, t) }
            },
            w = e + " Iterator",
            T = "values" == m,
            S = !1,
            P = t.prototype,
            E = P[f] || P["@@iterator"] || m && P[m],
            k = E || b(m),
            A = m ? T ? b("entries") : k : void 0,
            C = "Array" == e && P.entries || E;
        if (C && (x = c(C.call(new t))) !== Object.prototype && x.next && (h(x, w, !0), r || "function" == typeof x[f] || a(x, f, p)), T && E && "values" !== E.name && (S = !0, k = function() { return E.call(this) }), r && !y || !u && !S && P[f] || a(P, f, k), o[e] = k, o[w] = p, m)
            if (v = { values: T ? k : b("values"), keys: g ? k : b("keys"), entries: A }, y)
                for (_ in v) _ in P || s(P, _, v[_]);
            else n(n.P + n.F * (u || S), e, v);
        return v
    }
}, function(t, e, i) {
    var r = i(83),
        n = i(29);
    t.exports = function(t, e, i) { if (r(e)) throw TypeError("String#" + i + " doesn't accept regex!"); return String(n(t)) }
}, function(t, e, i) {
    var r = i(5),
        n = i(28),
        s = i(6)("match");
    t.exports = function(t) { var e; return r(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == n(t)) }
}, function(t, e, i) {
    var r = i(6)("match");
    t.exports = function(t) { var e = /./; try { "/./" [t](e) } catch (i) { try { return e[r] = !1, !"/./" [t](e) } catch (t) {} } return !0 }
}, function(t, e, i) {
    var r = i(45),
        n = i(6)("iterator"),
        s = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (r.Array === t || s[n] === t) }
}, function(t, e, i) {
    "use strict";
    var r = i(11),
        n = i(33);
    t.exports = function(t, e, i) { e in t ? r.f(t, e, n(0, i)) : t[e] = i }
}, function(t, e, i) {
    var r = i(52),
        n = i(6)("iterator"),
        s = i(45);
    t.exports = i(9).getIteratorMethod = function(t) { if (null != t) return t[n] || t["@@iterator"] || s[r(t)] }
}, function(t, e, i) {
    "use strict";
    var r = i(12),
        n = i(37),
        s = i(7);
    t.exports = function(t) { for (var e = r(this), i = s(e.length), a = arguments.length, o = n(a > 1 ? arguments[1] : void 0, i), l = a > 2 ? arguments[2] : void 0, h = void 0 === l ? i : n(l, i); h > o;) e[o++] = t; return e }
}, function(t, e, i) {
    "use strict";
    var r = i(41),
        n = i(117),
        s = i(45),
        a = i(18);
    t.exports = i(81)(Array, "Array", function(t, e) { this._t = a(t), this._i = 0, this._k = e }, function() {
        var t = this._t,
            e = this._k,
            i = this._i++;
        return !t || i >= t.length ? (this._t = void 0, n(1)) : n(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
    }, "values"), s.Arguments = s.Array, r("keys"), r("values"), r("entries")
}, function(t, e, i) {
    "use strict";
    var r, n, s = i(60),
        a = RegExp.prototype.exec,
        o = String.prototype.replace,
        l = a,
        h = (r = /a/, n = /b*/g, a.call(r, "a"), a.call(n, "a"), 0 !== r.lastIndex || 0 !== n.lastIndex),
        c = void 0 !== /()??/.exec("")[1];
    (h || c) && (l = function(t) { var e, i, r, n, l = this; return c && (i = new RegExp("^" + l.source + "$(?!\\s)", s.call(l))), h && (e = l.lastIndex), r = a.call(l, t), h && r && (l.lastIndex = l.global ? r.index + r[0].length : e), c && r && r.length > 1 && o.call(r[0], i, function() { for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (r[n] = void 0) }), r }), t.exports = l
}, function(t, e, i) {
    "use strict";
    var r = i(80)(!0);
    t.exports = function(t, e, i) { return e + (i ? r(t, e).length : 1) }
}, function(t, e, i) {
    var r, n, s, a = i(21),
        o = i(106),
        l = i(73),
        h = i(69),
        c = i(2),
        f = c.process,
        u = c.setImmediate,
        p = c.clearImmediate,
        d = c.MessageChannel,
        m = c.Dispatch,
        g = 0,
        y = {},
        v = function() {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var e = y[t];
                delete y[t], e()
            }
        },
        _ = function(t) { v.call(t.data) };
    u && p || (u = function(t) { for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]); return y[++g] = function() { o("function" == typeof t ? t : Function(t), e) }, r(g), g }, p = function(t) { delete y[t] }, "process" == i(28)(f) ? r = function(t) { f.nextTick(a(v, t, 1)) } : m && m.now ? r = function(t) { m.now(a(v, t, 1)) } : d ? (s = (n = new d).port2, n.port1.onmessage = _, r = a(s.postMessage, s, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(t) { c.postMessage(t + "", "*") }, c.addEventListener("message", _, !1)) : r = "onreadystatechange" in h("script") ? function(t) { l.appendChild(h("script")).onreadystatechange = function() { l.removeChild(this), v.call(t) } } : function(t) { setTimeout(a(v, t, 1), 0) }), t.exports = { set: u, clear: p }
}, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(10),
        s = i(35),
        a = i(66),
        o = i(17),
        l = i(48),
        h = i(3),
        c = i(47),
        f = i(23),
        u = i(7),
        p = i(125),
        d = i(39).f,
        m = i(11).f,
        g = i(88),
        y = i(43),
        v = "prototype",
        _ = "Wrong index!",
        x = r.ArrayBuffer,
        b = r.DataView,
        w = r.Math,
        T = r.RangeError,
        S = r.Infinity,
        P = x,
        E = w.abs,
        k = w.pow,
        A = w.floor,
        C = w.log,
        M = w.LN2,
        D = n ? "_b" : "buffer",
        F = n ? "_l" : "byteLength",
        O = n ? "_o" : "byteOffset";

    function I(t, e, i) {
        var r, n, s, a = new Array(i),
            o = 8 * i - e - 1,
            l = (1 << o) - 1,
            h = l >> 1,
            c = 23 === e ? k(2, -24) - k(2, -77) : 0,
            f = 0,
            u = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = E(t)) != t || t === S ? (n = t != t ? 1 : 0, r = l) : (r = A(C(t) / M), t * (s = k(2, -r)) < 1 && (r--, s *= 2), (t += r + h >= 1 ? c / s : c * k(2, 1 - h)) * s >= 2 && (r++, s /= 2), r + h >= l ? (n = 0, r = l) : r + h >= 1 ? (n = (t * s - 1) * k(2, e), r += h) : (n = t * k(2, h - 1) * k(2, e), r = 0)); e >= 8; a[f++] = 255 & n, n /= 256, e -= 8);
        for (r = r << e | n, o += e; o > 0; a[f++] = 255 & r, r /= 256, o -= 8);
        return a[--f] |= 128 * u, a
    }

    function R(t, e, i) {
        var r, n = 8 * i - e - 1,
            s = (1 << n) - 1,
            a = s >> 1,
            o = n - 7,
            l = i - 1,
            h = t[l--],
            c = 127 & h;
        for (h >>= 7; o > 0; c = 256 * c + t[l], l--, o -= 8);
        for (r = c & (1 << -o) - 1, c >>= -o, o += e; o > 0; r = 256 * r + t[l], l--, o -= 8);
        if (0 === c) c = 1 - a;
        else {
            if (c === s) return r ? NaN : h ? -S : S;
            r += k(2, e), c -= a
        }
        return (h ? -1 : 1) * r * k(2, c - e)
    }

    function L(t) { return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0] }

    function N(t) { return [255 & t] }

    function B(t) { return [255 & t, t >> 8 & 255] }

    function V(t) { return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255] }

    function z(t) { return I(t, 52, 8) }

    function j(t) { return I(t, 23, 4) }

    function G(t, e, i) { m(t[v], e, { get: function() { return this[i] } }) }

    function q(t, e, i, r) {
        var n = p(+i);
        if (n + e > t[F]) throw T(_);
        var s = t[D]._b,
            a = n + t[O],
            o = s.slice(a, a + e);
        return r ? o : o.reverse()
    }

    function H(t, e, i, r, n, s) { var a = p(+i); if (a + e > t[F]) throw T(_); for (var o = t[D]._b, l = a + t[O], h = r(+n), c = 0; c < e; c++) o[l + c] = h[s ? c : e - c - 1] }
    if (a.ABV) {
        if (!h(function() { x(1) }) || !h(function() { new x(-1) }) || h(function() { return new x, new x(1.5), new x(NaN), "ArrayBuffer" != x.name })) {
            for (var X, Y = (x = function(t) { return c(this, x), new P(p(t)) })[v] = P[v], W = d(P), U = 0; W.length > U;)(X = W[U++]) in x || o(x, X, P[X]);
            s || (Y.constructor = x)
        }
        var K = new b(new x(2)),
            $ = b[v].setInt8;
        K.setInt8(0, 2147483648), K.setInt8(1, 2147483649), !K.getInt8(0) && K.getInt8(1) || l(b[v], { setInt8: function(t, e) { $.call(this, t, e << 24 >> 24) }, setUint8: function(t, e) { $.call(this, t, e << 24 >> 24) } }, !0)
    } else x = function(t) {
        c(this, x, "ArrayBuffer");
        var e = p(t);
        this._b = g.call(new Array(e), 0), this[F] = e
    }, b = function(t, e, i) {
        c(this, b, "DataView"), c(t, x, "DataView");
        var r = t[F],
            n = f(e);
        if (n < 0 || n > r) throw T("Wrong offset!");
        if (n + (i = void 0 === i ? r - n : u(i)) > r) throw T("Wrong length!");
        this[D] = t, this[O] = n, this[F] = i
    }, n && (G(x, "byteLength", "_l"), G(b, "buffer", "_b"), G(b, "byteLength", "_l"), G(b, "byteOffset", "_o")), l(b[v], { getInt8: function(t) { return q(this, 1, t)[0] << 24 >> 24 }, getUint8: function(t) { return q(this, 1, t)[0] }, getInt16: function(t) { var e = q(this, 2, t, arguments[1]); return (e[1] << 8 | e[0]) << 16 >> 16 }, getUint16: function(t) { var e = q(this, 2, t, arguments[1]); return e[1] << 8 | e[0] }, getInt32: function(t) { return L(q(this, 4, t, arguments[1])) }, getUint32: function(t) { return L(q(this, 4, t, arguments[1])) >>> 0 }, getFloat32: function(t) { return R(q(this, 4, t, arguments[1]), 23, 4) }, getFloat64: function(t) { return R(q(this, 8, t, arguments[1]), 52, 8) }, setInt8: function(t, e) { H(this, 1, t, N, e) }, setUint8: function(t, e) { H(this, 1, t, N, e) }, setInt16: function(t, e) { H(this, 2, t, B, e, arguments[2]) }, setUint16: function(t, e) { H(this, 2, t, B, e, arguments[2]) }, setInt32: function(t, e) { H(this, 4, t, V, e, arguments[2]) }, setUint32: function(t, e) { H(this, 4, t, V, e, arguments[2]) }, setFloat32: function(t, e) { H(this, 4, t, j, e, arguments[2]) }, setFloat64: function(t, e) { H(this, 8, t, z, e, arguments[2]) } });
    y(x, "ArrayBuffer"), y(b, "DataView"), o(b[v], a.VIEW, !0), e.ArrayBuffer = x, e.DataView = b
}, function(t, e) { var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = i) }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e, i) { t.exports = !i(130)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e) {
    ! function(t, e) {
        "use strict";
        "function" != typeof t.CustomEvent && (t.CustomEvent = function(t, i) { i = i || { bubbles: !1, cancelable: !1, detail: void 0 }; var r = e.createEvent("CustomEvent"); return r.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), r }, t.CustomEvent.prototype = t.Event.prototype), e.addEventListener("touchstart", function(t) {
            if ("true" === t.target.getAttribute("data-swipe-ignore")) return;
            o = t.target, a = Date.now(), i = t.touches[0].clientX, r = t.touches[0].clientY, n = 0, s = 0
        }, !1), e.addEventListener("touchmove", function(t) {
            if (!i || !r) return;
            var e = t.touches[0].clientX,
                a = t.touches[0].clientY;
            n = i - e, s = r - a
        }, !1), e.addEventListener("touchend", function(t) {
            if (o !== t.target) return;
            var e = parseInt(o.getAttribute("data-swipe-threshold") || "20", 10),
                l = parseInt(o.getAttribute("data-swipe-timeout") || "500", 10),
                h = Date.now() - a,
                c = "";
            Math.abs(n) > Math.abs(s) ? Math.abs(n) > e && h < l && (c = n > 0 ? "swiped-left" : "swiped-right") : Math.abs(s) > e && h < l && (c = s > 0 ? "swiped-up" : "swiped-down");
            "" !== c && o.dispatchEvent(new CustomEvent(c, { bubbles: !0, cancelable: !0 }));
            i = null, r = null, a = null
        }, !1);
        var i = null,
            r = null,
            n = null,
            s = null,
            a = null,
            o = null
    }(window, document)
}, function(t, e, i) { t.exports = !i(10) && !i(3)(function() { return 7 != Object.defineProperty(i(69)("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, i) {
    var r = i(2),
        n = i(9),
        s = i(35),
        a = i(70),
        o = i(11).f;
    t.exports = function(t) { var e = n.Symbol || (n.Symbol = s ? {} : r.Symbol || {}); "_" == t.charAt(0) || t in e || o(e, t, { value: a.f(t) }) }
}, function(t, e, i) {
    var r = i(16),
        n = i(18),
        s = i(56)(!1),
        a = i(71)("IE_PROTO");
    t.exports = function(t, e) {
        var i, o = n(t),
            l = 0,
            h = [];
        for (i in o) i != a && r(o, i) && h.push(i);
        for (; e.length > l;) r(o, i = e[l++]) && (~s(h, i) || h.push(i));
        return h
    }
}, function(t, e, i) {
    var r = i(11),
        n = i(4),
        s = i(36);
    t.exports = i(10) ? Object.defineProperties : function(t, e) { n(t); for (var i, a = s(e), o = a.length, l = 0; o > l;) r.f(t, i = a[l++], e[i]); return t }
}, function(t, e, i) {
    var r = i(18),
        n = i(39).f,
        s = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) { return a && "[object Window]" == s.call(t) ? function(t) { try { return n(t) } catch (t) { return a.slice() } }(t) : n(r(t)) }
}, function(t, e, i) {
    "use strict";
    var r = i(10),
        n = i(36),
        s = i(57),
        a = i(51),
        o = i(12),
        l = i(50),
        h = Object.assign;
    t.exports = !h || i(3)(function() {
        var t = {},
            e = {},
            i = Symbol(),
            r = "abcdefghijklmnopqrst";
        return t[i] = 7, r.split("").forEach(function(t) { e[t] = t }), 7 != h({}, t)[i] || Object.keys(h({}, e)).join("") != r
    }) ? function(t, e) {
        for (var i = o(t), h = arguments.length, c = 1, f = s.f, u = a.f; h > c;)
            for (var p, d = l(arguments[c++]), m = f ? n(d).concat(f(d)) : n(d), g = m.length, y = 0; g > y;) p = m[y++], r && !u.call(d, p) || (i[p] = d[p]);
        return i
    } : h
}, function(t, e) { t.exports = Object.is || function(t, e) { return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e } }, function(t, e, i) {
    "use strict";
    var r = i(22),
        n = i(5),
        s = i(106),
        a = [].slice,
        o = {},
        l = function(t, e, i) {
            if (!(e in o)) {
                for (var r = [], n = 0; n < e; n++) r[n] = "a[" + n + "]";
                o[e] = Function("F,a", "return new F(" + r.join(",") + ")")
            }
            return o[e](t, i)
        };
    t.exports = Function.bind || function(t) {
        var e = r(this),
            i = a.call(arguments, 1),
            o = function() { var r = i.concat(a.call(arguments)); return this instanceof o ? l(e, r.length, r) : s(e, r, t) };
        return n(e.prototype) && (o.prototype = e.prototype), o
    }
}, function(t, e) {
    t.exports = function(t, e, i) {
        var r = void 0 === i;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(i);
            case 1:
                return r ? t(e[0]) : t.call(i, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
        }
        return t.apply(i, e)
    }
}, function(t, e, i) {
    var r = i(2).parseInt,
        n = i(44).trim,
        s = i(75),
        a = /^[-+]?0[xX]/;
    t.exports = 8 !== r(s + "08") || 22 !== r(s + "0x16") ? function(t, e) { var i = n(String(t), 3); return r(i, e >>> 0 || (a.test(i) ? 16 : 10)) } : r
}, function(t, e, i) {
    var r = i(2).parseFloat,
        n = i(44).trim;
    t.exports = 1 / r(i(75) + "-0") != -1 / 0 ? function(t) {
        var e = n(String(t), 3),
            i = r(e);
        return 0 === i && "-" == e.charAt(0) ? -0 : i
    } : r
}, function(t, e, i) {
    var r = i(28);
    t.exports = function(t, e) { if ("number" != typeof t && "Number" != r(t)) throw TypeError(e); return +t }
}, function(t, e, i) {
    var r = i(5),
        n = Math.floor;
    t.exports = function(t) { return !r(t) && isFinite(t) && n(t) === t }
}, function(t, e) { t.exports = Math.log1p || function(t) { return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t) } }, function(t, e, i) {
    "use strict";
    var r = i(38),
        n = i(33),
        s = i(43),
        a = {};
    i(17)(a, i(6)("iterator"), function() { return this }), t.exports = function(t, e, i) { t.prototype = r(a, { next: n(1, i) }), s(t, e + " Iterator") }
}, function(t, e, i) {
    var r = i(4);
    t.exports = function(t, e, i, n) { try { return n ? e(r(i)[0], i[1]) : e(i) } catch (e) { var s = t.return; throw void 0 !== s && r(s.call(t)), e } }
}, function(t, e, i) {
    var r = i(232);
    t.exports = function(t, e) { return new(r(t))(e) }
}, function(t, e, i) {
    var r = i(22),
        n = i(12),
        s = i(50),
        a = i(7);
    t.exports = function(t, e, i, o, l) {
        r(e);
        var h = n(t),
            c = s(h),
            f = a(h.length),
            u = l ? f - 1 : 0,
            p = l ? -1 : 1;
        if (i < 2)
            for (;;) { if (u in c) { o = c[u], u += p; break } if (u += p, l ? u < 0 : f <= u) throw TypeError("Reduce of empty array with no initial value") }
        for (; l ? u >= 0 : f > u; u += p) u in c && (o = e(o, c[u], u, h));
        return o
    }
}, function(t, e, i) {
    "use strict";
    var r = i(12),
        n = i(37),
        s = i(7);
    t.exports = [].copyWithin || function(t, e) {
        var i = r(this),
            a = s(i.length),
            o = n(t, a),
            l = n(e, a),
            h = arguments.length > 2 ? arguments[2] : void 0,
            c = Math.min((void 0 === h ? a : n(h, a)) - l, a - o),
            f = 1;
        for (l < o && o < l + c && (f = -1, l += c - 1, o += c - 1); c-- > 0;) l in i ? i[o] = i[l] : delete i[o], o += f, l += f;
        return i
    }
}, function(t, e) { t.exports = function(t, e) { return { value: e, done: !!t } } }, function(t, e, i) {
    "use strict";
    var r = i(90);
    i(1)({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r })
}, function(t, e, i) { i(10) && "g" != /./g.flags && i(11).f(RegExp.prototype, "flags", { configurable: !0, get: i(60) }) }, function(t, e, i) {
    "use strict";
    var r, n, s, a, o = i(35),
        l = i(2),
        h = i(21),
        c = i(52),
        f = i(1),
        u = i(5),
        p = i(22),
        d = i(47),
        m = i(63),
        g = i(53),
        y = i(92).set,
        v = i(252)(),
        _ = i(121),
        x = i(253),
        b = i(64),
        w = i(122),
        T = l.TypeError,
        S = l.process,
        P = S && S.versions,
        E = P && P.v8 || "",
        k = l.Promise,
        A = "process" == c(S),
        C = function() {},
        M = n = _.f,
        D = !! function() {
            try {
                var t = k.resolve(1),
                    e = (t.constructor = {})[i(6)("species")] = function(t) { t(C, C) };
                return (A || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== E.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        F = function(t) { var e; return !(!u(t) || "function" != typeof(e = t.then)) && e },
        O = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var i = t._c;
                v(function() {
                    for (var r = t._v, n = 1 == t._s, s = 0, a = function(e) {
                            var i, s, a, o = n ? e.ok : e.fail,
                                l = e.resolve,
                                h = e.reject,
                                c = e.domain;
                            try { o ? (n || (2 == t._h && L(t), t._h = 1), !0 === o ? i = r : (c && c.enter(), i = o(r), c && (c.exit(), a = !0)), i === e.promise ? h(T("Promise-chain cycle")) : (s = F(i)) ? s.call(i, l, h) : l(i)) : h(r) } catch (t) { c && !a && c.exit(), h(t) }
                        }; i.length > s;) a(i[s++]);
                    t._c = [], t._n = !1, e && !t._h && I(t)
                })
            }
        },
        I = function(t) {
            y.call(l, function() {
                var e, i, r, n = t._v,
                    s = R(t);
                if (s && (e = x(function() { A ? S.emit("unhandledRejection", n, t) : (i = l.onunhandledrejection) ? i({ promise: t, reason: n }) : (r = l.console) && r.error && r.error("Unhandled promise rejection", n) }), t._h = A || R(t) ? 2 : 1), t._a = void 0, s && e.e) throw e.v
            })
        },
        R = function(t) { return 1 !== t._h && 0 === (t._a || t._c).length },
        L = function(t) {
            y.call(l, function() {
                var e;
                A ? S.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({ promise: t, reason: t._v })
            })
        },
        N = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), O(e, !0))
        },
        B = function(t) {
            var e, i = this;
            if (!i._d) {
                i._d = !0, i = i._w || i;
                try {
                    if (i === t) throw T("Promise can't be resolved itself");
                    (e = F(t)) ? v(function() { var r = { _w: i, _d: !1 }; try { e.call(t, h(B, r, 1), h(N, r, 1)) } catch (t) { N.call(r, t) } }): (i._v = t, i._s = 1, O(i, !1))
                } catch (t) { N.call({ _w: i, _d: !1 }, t) }
            }
        };
    D || (k = function(t) { d(this, k, "Promise", "_h"), p(t), r.call(this); try { t(h(B, this, 1), h(N, this, 1)) } catch (t) { N.call(this, t) } }, (r = function(t) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = i(48)(k.prototype, { then: function(t, e) { var i = M(g(this, k)); return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = A ? S.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && O(this, !1), i.promise }, catch: function(t) { return this.then(void 0, t) } }), s = function() {
        var t = new r;
        this.promise = t, this.resolve = h(B, t, 1), this.reject = h(N, t, 1)
    }, _.f = M = function(t) { return t === k || t === a ? new s(t) : n(t) }), f(f.G + f.W + f.F * !D, { Promise: k }), i(43)(k, "Promise"), i(46)("Promise"), a = i(9).Promise, f(f.S + f.F * !D, "Promise", { reject: function(t) { var e = M(this); return (0, e.reject)(t), e.promise } }), f(f.S + f.F * (o || !D), "Promise", { resolve: function(t) { return w(o && this === a ? k : this, t) } }), f(f.S + f.F * !(D && i(59)(function(t) { k.all(t).catch(C) })), "Promise", {
        all: function(t) {
            var e = this,
                i = M(e),
                r = i.resolve,
                n = i.reject,
                s = x(function() {
                    var i = [],
                        s = 0,
                        a = 1;
                    m(t, !1, function(t) {
                        var o = s++,
                            l = !1;
                        i.push(void 0), a++, e.resolve(t).then(function(t) { l || (l = !0, i[o] = t, --a || r(i)) }, n)
                    }), --a || r(i)
                });
            return s.e && n(s.v), i.promise
        },
        race: function(t) {
            var e = this,
                i = M(e),
                r = i.reject,
                n = x(function() { m(t, !1, function(t) { e.resolve(t).then(i.resolve, r) }) });
            return n.e && r(n.v), i.promise
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(22);

    function n(t) {
        var e, i;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
            e = t, i = r
        }), this.resolve = r(e), this.reject = r(i)
    }
    t.exports.f = function(t) { return new n(t) }
}, function(t, e, i) {
    var r = i(4),
        n = i(5),
        s = i(121);
    t.exports = function(t, e) { if (r(t), n(e) && e.constructor === t) return e; var i = s.f(t); return (0, i.resolve)(e), i.promise }
}, function(t, e, i) {
    "use strict";
    var r = i(11).f,
        n = i(38),
        s = i(48),
        a = i(21),
        o = i(47),
        l = i(63),
        h = i(81),
        c = i(117),
        f = i(46),
        u = i(10),
        p = i(32).fastKey,
        d = i(42),
        m = u ? "_s" : "size",
        g = function(t, e) {
            var i, r = p(e);
            if ("F" !== r) return t._i[r];
            for (i = t._f; i; i = i.n)
                if (i.k == e) return i
        };
    t.exports = {
        getConstructor: function(t, e, i, h) {
            var c = t(function(t, r) { o(t, c, e, "_i"), t._t = e, t._i = n(null), t._f = void 0, t._l = void 0, t[m] = 0, null != r && l(r, i, t[h], t) });
            return s(c.prototype, {
                clear: function() {
                    for (var t = d(this, e), i = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete i[r.i];
                    t._f = t._l = void 0, t[m] = 0
                },
                delete: function(t) {
                    var i = d(this, e),
                        r = g(i, t);
                    if (r) {
                        var n = r.n,
                            s = r.p;
                        delete i._i[r.i], r.r = !0, s && (s.n = n), n && (n.p = s), i._f == r && (i._f = n), i._l == r && (i._l = s), i[m]--
                    }
                    return !!r
                },
                forEach: function(t) {
                    d(this, e);
                    for (var i, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); i = i ? i.n : this._f;)
                        for (r(i.v, i.k, this); i && i.r;) i = i.p
                },
                has: function(t) { return !!g(d(this, e), t) }
            }), u && r(c.prototype, "size", { get: function() { return d(this, e)[m] } }), c
        },
        def: function(t, e, i) { var r, n, s = g(t, e); return s ? s.v = i : (t._l = s = { i: n = p(e, !0), k: e, v: i, p: r = t._l, n: void 0, r: !1 }, t._f || (t._f = s), r && (r.n = s), t[m]++, "F" !== n && (t._i[n] = s)), t },
        getEntry: g,
        setStrong: function(t, e, i) { h(t, e, function(t, i) { this._t = d(t, e), this._k = i, this._l = void 0 }, function() { for (var t = this._k, e = this._l; e && e.r;) e = e.p; return this._t && (this._l = e = e ? e.n : this._t._f) ? c(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, c(1)) }, i ? "entries" : "values", !i, !0), f(e) }
    }
}, function(t, e, i) {
    "use strict";
    var r = i(48),
        n = i(32).getWeak,
        s = i(4),
        a = i(5),
        o = i(47),
        l = i(63),
        h = i(26),
        c = i(16),
        f = i(42),
        u = h(5),
        p = h(6),
        d = 0,
        m = function(t) { return t._l || (t._l = new g) },
        g = function() { this.a = [] },
        y = function(t, e) { return u(t.a, function(t) { return t[0] === e }) };
    g.prototype = {
        get: function(t) { var e = y(this, t); if (e) return e[1] },
        has: function(t) { return !!y(this, t) },
        set: function(t, e) {
            var i = y(this, t);
            i ? i[1] = e : this.a.push([t, e])
        },
        delete: function(t) { var e = p(this.a, function(e) { return e[0] === t }); return ~e && this.a.splice(e, 1), !!~e }
    }, t.exports = { getConstructor: function(t, e, i, s) { var h = t(function(t, r) { o(t, h, e, "_i"), t._t = e, t._i = d++, t._l = void 0, null != r && l(r, i, t[s], t) }); return r(h.prototype, { delete: function(t) { if (!a(t)) return !1; var i = n(t); return !0 === i ? m(f(this, e)).delete(t) : i && c(i, this._i) && delete i[this._i] }, has: function(t) { if (!a(t)) return !1; var i = n(t); return !0 === i ? m(f(this, e)).has(t) : i && c(i, this._i) } }), h }, def: function(t, e, i) { var r = n(s(e), !0); return !0 === r ? m(t).set(e, i) : r[t._i] = i, t }, ufstore: m }
}, function(t, e, i) {
    var r = i(23),
        n = i(7);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = r(t),
            i = n(e);
        if (e !== i) throw RangeError("Wrong length!");
        return i
    }
}, function(t, e, i) {
    var r = i(39),
        n = i(57),
        s = i(4),
        a = i(2).Reflect;
    t.exports = a && a.ownKeys || function(t) {
        var e = r.f(s(t)),
            i = n.f;
        return i ? e.concat(i(t)) : e
    }
}, function(t, e, i) {
    var r = i(7),
        n = i(77),
        s = i(29);
    t.exports = function(t, e, i, a) {
        var o = String(s(t)),
            l = o.length,
            h = void 0 === i ? " " : String(i),
            c = r(e);
        if (c <= l || "" == h) return o;
        var f = c - l,
            u = n.call(h, Math.ceil(f / h.length));
        return u.length > f && (u = u.slice(0, f)), a ? u + o : o + u
    }
}, function(t, e, i) {
    var r = i(10),
        n = i(36),
        s = i(18),
        a = i(51).f;
    t.exports = function(t) { return function(e) { for (var i, o = s(e), l = n(o), h = l.length, c = 0, f = []; h > c;) i = l[c++], r && !a.call(o, i) || f.push(t ? [i, o[i]] : o[i]); return f } }
}, function(t, e) { var i = t.exports = { version: "2.6.9" }; "number" == typeof __e && (__e = i) }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e, i) {
    (function(r) {
        var n, s, a, o = t.exports && void 0 !== r ? r : this || window;
        (o._gsQueue || (o._gsQueue = [])).push(function() {
                "use strict";
                o._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                    var i, r, n, s, a = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio },
                        l = o._gsDefine.globals,
                        h = {},
                        c = a.prototype = new t("css");
                    c.constructor = a, a.version = "2.1.3", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, c = "px", a.suffixMap = { top: c, right: c, bottom: c, left: c, width: c, height: c, fontSize: c, padding: c, margin: c, perspective: c, lineHeight: "" };
                    var f, u, p, d, m, g, y, v, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                        x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                        T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        S = /(?:\d|\-|\+|=|#|\.)*/g,
                        P = /opacity *= *([^)]*)/i,
                        E = /opacity:([^;]*)/i,
                        k = /alpha\(opacity *=.+?\)/i,
                        A = /^(rgb|hsl)/,
                        C = /([A-Z])/g,
                        M = /-([a-z])/gi,
                        D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        F = function(t, e) { return e.toUpperCase() },
                        O = /(?:Left|Right|Width)/i,
                        I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        L = /,(?=[^\)]*(?:\(|$))/gi,
                        N = /[\s,\(]/i,
                        B = Math.PI / 180,
                        V = 180 / Math.PI,
                        z = {},
                        j = { style: {} },
                        G = o.document || { createElement: function() { return j } },
                        q = function(t, e) { var i = G.createElementNS ? G.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : G.createElement(t); return i.style ? i : G.createElement(t) },
                        H = q("div"),
                        X = q("img"),
                        Y = a._internals = { _specialProps: h },
                        W = (o.navigator || {}).userAgent || "",
                        U = function() {
                            var t = W.indexOf("Android"),
                                e = q("a");
                            return p = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), m = p && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, d = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                        }(),
                        K = function(t) { return P.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                        $ = function(t) { o.console && console.log(t) },
                        Z = "",
                        J = "",
                        Q = function(t, e) { var i, r, n = (e = e || H).style; if (void 0 !== n[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + t];); return r >= 0 ? (Z = "-" + (J = 3 === r ? "ms" : i[r]).toLowerCase() + "-", J + t) : null },
                        tt = "undefined" != typeof window ? window : G.defaultView || { getComputedStyle: function() {} },
                        et = function(t) { return tt.getComputedStyle(t) },
                        it = a.getStyle = function(t, e, i, r, n) { var s; return U || "opacity" !== e ? (!r && t.style[e] ? s = t.style[e] : (i = i || et(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : K(t) },
                        rt = Y.convertToPixels = function(t, i, r, n, s) {
                            if ("px" === n || !n && "lineHeight" !== i) return r;
                            if ("auto" === n || !r) return 0;
                            var o, l, h, c = O.test(i),
                                f = t,
                                u = H.style,
                                p = r < 0,
                                d = 1 === r;
                            if (p && (r = -r), d && (r *= 100), "lineHeight" !== i || n)
                                if ("%" === n && -1 !== i.indexOf("border")) o = r / 100 * (c ? t.clientWidth : t.clientHeight);
                                else {
                                    if (u.cssText = "border:0 solid red;position:" + it(t, "position") + ";line-height:0;", "%" !== n && f.appendChild && "v" !== n.charAt(0) && "rem" !== n) u[c ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                                    else {
                                        if (f = t.parentNode || G.body, -1 !== it(f, "display").indexOf("flex") && (u.position = "absolute"), l = f._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * r / 100;
                                        u[c ? "width" : "height"] = r + n
                                    }
                                    f.appendChild(H), o = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), f.removeChild(H), c && "%" === n && !1 !== a.cacheWidths && ((l = f._gsCache = f._gsCache || {}).time = h, l.width = o / r * 100), 0 !== o || s || (o = rt(t, i, r, n, !0))
                                }
                            else l = et(t).lineHeight, t.style.lineHeight = r, o = parseFloat(et(t).lineHeight), t.style.lineHeight = l;
                            return d && (o /= 100), p ? -o : o
                        },
                        nt = Y.calculateOffset = function(t, e, i) {
                            if ("absolute" !== it(t, "position", i)) return 0;
                            var r = "left" === e ? "Left" : "Top",
                                n = it(t, "margin" + r, i);
                            return t["offset" + r] - (rt(t, e, parseFloat(n), n.replace(S, "")) || 0)
                        },
                        st = function(t, e) {
                            var i, r, n, s = {};
                            if (e = e || et(t))
                                if (i = e.length)
                                    for (; --i > -1;) - 1 !== (n = e[i]).indexOf("-transform") && Lt !== n || (s[n.replace(M, F)] = e.getPropertyValue(n));
                                else
                                    for (i in e) - 1 !== i.indexOf("Transform") && Rt !== i || (s[i] = e[i]);
                            else if (e = t.currentStyle || t.style)
                                for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(M, F)] = e[i]);
                            return U || (s.opacity = K(t)), r = Kt(t, e, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX = r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, Bt && (s.z = r.z, s.rotationX = r.rotationX, s.rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s
                        },
                        at = function(t, e, i, r, n) {
                            var s, a, o, l = {},
                                h = t.style;
                            for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(T, "") ? s : 0 : nt(t, a), void 0 !== h[a] && (o = new bt(h, a, h[a], o))));
                            if (r)
                                for (a in r) "className" !== a && (l[a] = r[a]);
                            return { difs: l, firstMPT: o }
                        },
                        ot = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                        lt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        ht = function(t, e, i) {
                            if ("svg" === (t.nodeName + "").toLowerCase()) return (i || et(t))[e] || 0;
                            if (t.getCTM && Yt(t)) return t.getBBox()[e] || 0;
                            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                n = ot[e],
                                s = n.length;
                            for (i = i || et(t); --s > -1;) r -= parseFloat(it(t, "padding" + n[s], i, !0)) || 0, r -= parseFloat(it(t, "border" + n[s] + "Width", i, !0)) || 0;
                            return r
                        },
                        ct = function(t, e) {
                            if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                            null != t && "" !== t || (t = "0 0");
                            var i, r = t.split(" "),
                                n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                                s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                            if (r.length > 3 && !e) { for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(ct(r[i])); return t.join(",") }
                            return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (r.length > 2 ? " " + r[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(T, "")), e.oy = parseFloat(s.replace(T, "")), e.v = t), e || t
                        },
                        ft = function(t, e) { return "function" == typeof t && (t = t(v, y)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                        ut = function(t, e) { "function" == typeof t && (t = t(v, y)); var i = "string" == typeof t && "=" === t.charAt(1); return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                        pt = function(t, e, i, r) { var n, s, a, o; return "function" == typeof t && (t = t(v, y)), null == t ? a = e : "number" == typeof t ? a = t : (360, n = t.split("_"), s = ((o = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : V) - (o ? 0 : e), n.length && (r && (r[i] = e + s), -1 !== t.indexOf("short") && (s %= 360) !== s % 180 && (s = s < 0 ? s + 360 : s - 360), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % 360 - 360 * (s / 360 | 0) : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 3599999999640) % 360 - 360 * (s / 360 | 0))), a = e + s), a < 1e-6 && a > -1e-6 && (a = 0), a },
                        dt = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                        mt = function(t, e, i) { return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                        gt = a.parseColor = function(t, e) {
                            var i, r, n, s, a, o, l, h, c, f, u;
                            if (t)
                                if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                else {
                                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                                    else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + r + r + n + n + s + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                    else if ("hsl" === t.substr(0, 3))
                                        if (i = u = t.match(_), e) { if (-1 !== t.indexOf("=")) return t.match(x) } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, r = 2 * (l = Number(i[2]) / 100) - (n = l <= .5 ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = mt(a + 1 / 3, r, n), i[1] = mt(a, r, n), i[2] = mt(a - 1 / 3, r, n);
                                    else i = t.match(_) || dt.transparent;
                                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                }
                            else i = dt.black;
                            return e && !u && (r = i[0] / 255, n = i[1] / 255, s = i[2] / 255, l = ((h = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2, h === c ? a = o = 0 : (f = h - c, o = l > .5 ? f / (2 - h - c) : f / (h + c), a = h === r ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - r) / f + 2 : (r - n) / f + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                        },
                        yt = function(t, e) {
                            var i, r, n, s = t.match(vt) || [],
                                a = 0,
                                o = "";
                            if (!s.length) return t;
                            for (i = 0; i < s.length; i++) r = s[i], a += (n = t.substr(a, t.indexOf(r, a) - a)).length + r.length, 3 === (r = gt(r, e)).length && r.push(1), o += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                            return o + t.substr(a)
                        },
                        vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (c in dt) vt += "|" + c + "\\b";
                    vt = new RegExp(vt + ")", "gi"), a.colorStringFilter = function(t) {
                        var e, i = t[0] + " " + t[1];
                        vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = yt(t[0], e), t[1] = yt(t[1], e)), vt.lastIndex = 0
                    }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                    var _t = function(t, e, i, r) {
                            if (null == t) return function(t) { return t };
                            var n, s = e ? (t.match(vt) || [""])[0] : "",
                                a = t.split(s).join("").match(b) || [],
                                o = t.substr(0, t.indexOf(a[0])),
                                l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                h = -1 !== t.indexOf(" ") ? " " : ",",
                                c = a.length,
                                f = c > 0 ? a[0].replace(_, "") : "";
                            return c ? n = e ? function(t) {
                                var e, u, p, d;
                                if ("number" == typeof t) t += f;
                                else if (r && L.test(t)) { for (d = t.replace(L, "|").split("|"), p = 0; p < d.length; p++) d[p] = n(d[p]); return d.join(",") }
                                if (e = (t.match(vt) || [s])[0], p = (u = t.split(e).join("").match(b) || []).length, c > p--)
                                    for (; ++p < c;) u[p] = i ? u[(p - 1) / 2 | 0] : a[p];
                                return o + u.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                            } : function(t) {
                                var e, s, u;
                                if ("number" == typeof t) t += f;
                                else if (r && L.test(t)) { for (s = t.replace(L, "|").split("|"), u = 0; u < s.length; u++) s[u] = n(s[u]); return s.join(",") }
                                if (u = (e = t.match("," === h ? b : w) || []).length, c > u--)
                                    for (; ++u < c;) e[u] = i ? e[(u - 1) / 2 | 0] : a[u];
                                return (o && "none" !== t && t.substr(0, t.indexOf(e[0])) || o) + e.join(h) + l
                            } : function(t) { return t }
                        },
                        xt = function(t) {
                            return t = t.split(","),
                                function(e, i, r, n, s, a, o) { var l, h = (i + "").split(" "); for (o = {}, l = 0; l < 4; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return n.parse(e, o, s, a) }
                        },
                        bt = (Y._setPluginRatio = function(t) {
                            this.plugin.setRatio(t);
                            for (var e, i, r, n, s, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
                                for (l = a.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                    if ((i = l.t).type) {
                                        if (1 === i.type) {
                                            for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                            i[s] = n
                                        }
                                    } else i[s] = i.s + i.xs0;
                                    l = l._next
                                }
                        }, function(t, e, i, r, n) { this.t = t, this.p = e, this.v = i, this.r = n, r && (r._prev = this, this._next = r) }),
                        wt = (Y._parseToProxy = function(t, e, i, r, n, s) {
                            var a, o, l, h, c, f = r,
                                u = {},
                                p = {},
                                d = i._transform,
                                m = z;
                            for (i._transform = null, z = e, r = c = i.parse(t, e, r, n), z = m, s && (i._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
                                if (r.type <= 1 && (p[o = r.p] = r.s + r.c, u[o] = r.s, s || (h = new bt(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                                    for (a = r.l; --a > 0;) l = "xn" + a, p[o = r.p + "_" + l] = r.data[l], u[o] = r[l], s || (h = new bt(r, l, o, h, r.rxp[l]));
                                r = r._next
                            }
                            return { proxy: u, end: p, firstMPT: h, pt: c }
                        }, Y.CSSPropTween = function(t, e, r, n, a, o, l, h, c, f, u) { this.t = t, this.p = e, this.s = r, this.c = n, this.n = l || e, t instanceof wt || s.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = o || 0, c && (this.pr = c, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === u ? r + n : u, a && (this._next = a, a._prev = this) }),
                        Tt = function(t, e, i, r, n, s) { var a = new wt(t, e, i, r - i, n, -1, s); return a.b = i, a.e = a.xs0 = r, a },
                        St = a.parseComplex = function(t, e, i, r, n, s, o, l, h, c) {
                            i = i || s || "", "function" == typeof r && (r = r(v, y)), o = new wt(t, e, 0, 0, o, c ? 2 : 1, null, !1, l, i, r), r += "", n && vt.test(r + i) && (r = [i, r], a.colorStringFilter(r), i = r[0], r = r[1]);
                            var u, p, d, m, g, b, w, T, S, P, E, k, A, C = i.split(", ").join(",").split(" "),
                                M = r.split(", ").join(",").split(" "),
                                D = C.length,
                                F = !1 !== f;
                            for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (C = C.join(" ").replace(L, ", ").split(" "), M = M.join(" ").replace(L, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "), M = M.join(" ").split(",").join(", ").split(" ")), D = C.length), D !== M.length && (D = (C = (s || "").split(" ")).length), o.plugin = h, o.setRatio = c, vt.lastIndex = 0, u = 0; u < D; u++)
                                if (m = C[u], g = M[u] + "", (T = parseFloat(m)) || 0 === T) o.appendXtra("", T, ft(g, T), g.replace(x, ""), !(!F || -1 === g.indexOf("px")) && Math.round, !0);
                                else if (n && vt.test(m)) k = ")" + ((k = g.indexOf(")") + 1) ? g.substr(k) : ""), A = -1 !== g.indexOf("hsl") && U, P = g, m = gt(m, A), g = gt(g, A), (S = m.length + g.length > 6) && !U && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(M[u]).join("transparent")) : (U || (S = !1), A ? o.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], ft(g[0], m[0]), ",", !1, !0).appendXtra("", m[1], ft(g[1], m[1]), "%,", !1).appendXtra("", m[2], ft(g[2], m[2]), S ? "%," : "%" + k, !1) : o.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], g[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], g[1] - m[1], ",", Math.round).appendXtra("", m[2], g[2] - m[2], S ? "," : k, Math.round), S && (m = m.length < 4 ? 1 : m[3], o.appendXtra("", m, (g.length < 4 ? 1 : g[3]) - m, k, !1))), vt.lastIndex = 0;
                            else if (b = m.match(_)) {
                                if (!(w = g.match(x)) || w.length !== b.length) return o;
                                for (d = 0, p = 0; p < b.length; p++) E = b[p], P = m.indexOf(E, d), o.appendXtra(m.substr(d, P - d), Number(E), ft(w[p], E), "", !(!F || "px" !== m.substr(P + E.length, 2)) && Math.round, 0 === p), d = P + E.length;
                                o["xs" + o.l] += m.substr(d)
                            } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + g : g;
                            if (-1 !== r.indexOf("=") && o.data) {
                                for (k = o.xs0 + o.data.s, u = 1; u < o.l; u++) k += o["xs" + u] + o.data["xn" + u];
                                o.e = k + o["xs" + u]
                            }
                            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                        },
                        Pt = 9;
                    for ((c = wt.prototype).l = c.pr = 0; --Pt > 0;) c["xn" + Pt] = 0, c["xs" + Pt] = "";
                    c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, r, n, s) {
                        var a = this,
                            o = a.l;
                        return a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = n, a["xn" + o] = e, a.plugin || (a.xfirst = new wt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = n, a)) : (a["xs" + o] += e + (r || ""), a)
                    };
                    var Et = function(t, e) { e = e || {}, this.p = e.prefix && Q(t) || t, h[t] = h[this.p] = this, this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0 },
                        kt = Y._registerComplexSpecialProp = function(t, e, i) {
                            "object" != typeof e && (e = { parser: i });
                            var r, n = t.split(","),
                                s = e.defaultValue;
                            for (i = i || [s], r = 0; r < n.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || s, new Et(n[r], e)
                        },
                        At = Y._registerPluginProp = function(t) {
                            if (!h[t]) {
                                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                kt(t, { parser: function(t, i, r, n, s, a, o) { var c = l.com.greensock.plugins[e]; return c ? (c._cssRegister(), h[r].parse(t, i, r, n, s, a, o)) : ($("Error: " + e + " js file not loaded."), s) } })
                            }
                        };
                    (c = Et.prototype).parseComplex = function(t, e, i, r, n, s) {
                        var a, o, l, h, c, f, u = this.keyword;
                        if (this.multi && (L.test(i) || L.test(e) ? (o = e.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : u && (o = [e], l = [i])), l) {
                            for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, u && (c = e.indexOf(u)) !== (f = i.indexOf(u)) && (-1 === f ? o[a] = o[a].split(u).join("") : -1 === c && (o[a] += " " + u));
                            e = o.join(", "), i = l.join(", ")
                        }
                        return St(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s)
                    }, c.parse = function(t, e, i, r, s, a, o) { return this.parseComplex(t.style, this.format(it(t, this.p, n, !1, this.dflt)), this.format(e), s, a) }, a.registerSpecialProp = function(t, e, i) { kt(t, { parser: function(t, r, n, s, a, o, l) { var h = new wt(t, n, 0, 0, a, 2, n, !1, i); return h.plugin = o, h.setRatio = e(t, r, s._tween, n), h }, priority: i }) }, a.useSVGTransformAttr = !0;
                    var Ct, Mt, Dt, Ft, Ot, It = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        Rt = Q("transform"),
                        Lt = Z + "transform",
                        Nt = Q("transformOrigin"),
                        Bt = null !== Q("perspective"),
                        Vt = Y.Transform = function() { this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Bt) && (a.defaultForce3D || "auto") },
                        zt = o.SVGElement,
                        jt = function(t, e, i) {
                            var r, n = G.createElementNS("http://www.w3.org/2000/svg", t),
                                s = /([a-z])([A-Z])/g;
                            for (r in i) n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
                            return e.appendChild(n), n
                        },
                        Gt = G.documentElement || {},
                        qt = (Ot = g || /Android/i.test(W) && !o.chrome, G.createElementNS && Gt.appendChild && !Ot && (Mt = jt("svg", Gt), Ft = (Dt = jt("rect", Mt, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Dt.style[Nt] = "50% 50%", Dt.style[Rt] = "scaleX(0.5)", Ot = Ft === Dt.getBoundingClientRect().width && !(d && Bt), Gt.removeChild(Mt)), Ot),
                        Ht = function(t, e, i, r, n, s) {
                            var o, l, h, c, f, u, p, d, m, g, y, v, _, x, b = t._gsTransform,
                                w = Ut(t, !0);
                            b && (_ = b.xOrigin, x = b.yOrigin), (!r || (o = r.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), o = [(-1 !== (e = ct(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = c = parseFloat(o[0]), i.yOrigin = f = parseFloat(o[1]), r && w !== Wt && (u = w[0], p = w[1], d = w[2], m = w[3], g = w[4], y = w[5], (v = u * m - p * d) && (l = c * (m / v) + f * (-d / v) + (d * y - m * g) / v, h = c * (-p / v) + f * (u / v) - (u * y - p * g) / v, c = i.xOrigin = o[0] = l, f = i.yOrigin = o[1] = h)), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), n || !1 !== n && !1 !== a.defaultSmoothOrigin ? (l = c - _, h = f - x, b.xOffset += l * w[0] + h * w[2] - l, b.yOffset += l * w[1] + h * w[3] - h) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                        },
                        Xt = function(t) {
                            var e, i = q("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                r = this.parentNode,
                                n = this.nextSibling,
                                s = this.style.cssText;
                            if (Gt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Xt } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                            return n ? r.insertBefore(this, n) : r.appendChild(this), Gt.removeChild(i), this.style.cssText = s, e
                        },
                        Yt = function(t) { return !(!zt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) { try { return t.getBBox() } catch (e) { return Xt.call(t, !0) } }(t)) },
                        Wt = [1, 0, 0, 1, 0, 0],
                        Ut = function(t, e) {
                            var i, r, n, s, a, o, l, h = t._gsTransform || new Vt,
                                c = t.style;
                            if (Rt ? r = it(t, Lt, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(I)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, Rt && i && !t.offsetParent && t !== Gt && (s = c.display, c.display = "block", (l = t.parentNode) && t.offsetParent || (a = 1, o = t.nextSibling, Gt.appendChild(t)), i = !(r = it(t, Lt, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, s ? c.display = s : Qt(c, "display"), a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Gt.removeChild(t))), (h.svg || t.getCTM && Yt(t)) && (i && -1 !== (c[Rt] + "").indexOf("matrix") && (r = c[Rt], i = 0), n = t.getAttribute("transform"), i && n && (r = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")", i = 0)), i) return Wt;
                            for (n = (r || "").match(_) || [], Pt = n.length; --Pt > -1;) s = Number(n[Pt]), n[Pt] = (a = s - (s |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                            return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                        },
                        Kt = Y.getTransform = function(t, i, r, n) {
                            if (t._gsTransform && r && !n) return t._gsTransform;
                            var s, o, l, h, c, f, u = r && t._gsTransform || new Vt,
                                p = u.scaleX < 0,
                                d = Bt && (parseFloat(it(t, Nt, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                                m = parseFloat(a.defaultTransformPerspective) || 0;
                            if (u.svg = !(!t.getCTM || !Yt(t)), u.svg && (Ht(t, it(t, Nt, i, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), Ct = a.useSVGTransformAttr || qt), (s = Ut(t)) !== Wt) {
                                if (16 === s.length) {
                                    var g, y, v, _, x, b = s[0],
                                        w = s[1],
                                        T = s[2],
                                        S = s[3],
                                        P = s[4],
                                        E = s[5],
                                        k = s[6],
                                        A = s[7],
                                        C = s[8],
                                        M = s[9],
                                        D = s[10],
                                        F = s[12],
                                        O = s[13],
                                        I = s[14],
                                        R = s[11],
                                        L = Math.atan2(k, D);
                                    u.zOrigin && (F = C * (I = -u.zOrigin) - s[12], O = M * I - s[13], I = D * I + u.zOrigin - s[14]), u.rotationX = L * V, L && (g = P * (_ = Math.cos(-L)) + C * (x = Math.sin(-L)), y = E * _ + M * x, v = k * _ + D * x, C = P * -x + C * _, M = E * -x + M * _, D = k * -x + D * _, R = A * -x + R * _, P = g, E = y, k = v), L = Math.atan2(-T, D), u.rotationY = L * V, L && (y = w * (_ = Math.cos(-L)) - M * (x = Math.sin(-L)), v = T * _ - D * x, M = w * x + M * _, D = T * x + D * _, R = S * x + R * _, b = g = b * _ - C * x, w = y, T = v), L = Math.atan2(w, b), u.rotation = L * V, L && (g = b * (_ = Math.cos(L)) + w * (x = Math.sin(L)), y = P * _ + E * x, v = C * _ + M * x, w = w * _ - b * x, E = E * _ - P * x, M = M * _ - C * x, b = g, P = y, C = v), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), L = Math.atan2(P, E), u.scaleX = (1e5 * Math.sqrt(b * b + w * w + T * T) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(E * E + k * k) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(C * C + M * M + D * D) + .5 | 0) / 1e5, b /= u.scaleX, P /= u.scaleY, w /= u.scaleX, E /= u.scaleY, Math.abs(L) > 2e-5 ? (u.skewX = L * V, P = 0, "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(L))) : u.skewX = 0, u.perspective = R ? 1 / (R < 0 ? -R : R) : 0, u.x = F, u.y = O, u.z = I, u.svg && (u.x -= u.xOrigin - (u.xOrigin * b - u.yOrigin * P), u.y -= u.yOrigin - (u.yOrigin * w - u.xOrigin * E))
                                } else if (!Bt || n || !s.length || u.x !== s[4] || u.y !== s[5] || !u.rotationX && !u.rotationY) {
                                    var N = s.length >= 6,
                                        B = N ? s[0] : 1,
                                        z = s[1] || 0,
                                        j = s[2] || 0,
                                        G = N ? s[3] : 1;
                                    u.x = s[4] || 0, u.y = s[5] || 0, l = Math.sqrt(B * B + z * z), h = Math.sqrt(G * G + j * j), c = B || z ? Math.atan2(z, B) * V : u.rotation || 0, f = j || G ? Math.atan2(j, G) * V + c : u.skewX || 0, u.scaleX = l, u.scaleY = h, u.rotation = c, u.skewX = f, Bt && (u.rotationX = u.rotationY = u.z = 0, u.perspective = m, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * B + u.yOrigin * j), u.y -= u.yOrigin - (u.xOrigin * z + u.yOrigin * G))
                                }
                                for (o in Math.abs(u.skewX) > 90 && Math.abs(u.skewX) < 270 && (p ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180)), u.zOrigin = d, u) u[o] < 2e-5 && u[o] > -2e-5 && (u[o] = 0)
                            }
                            return r && (t._gsTransform = u, u.svg && (Ct && t.style[Rt] ? e.delayedCall(.001, function() { Qt(t.style, Rt) }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), u
                        },
                        $t = function(t) {
                            var e, i, r = this.data,
                                n = -r.rotation * B,
                                s = n + r.skewX * B,
                                a = (Math.cos(n) * r.scaleX * 1e5 | 0) / 1e5,
                                o = (Math.sin(n) * r.scaleX * 1e5 | 0) / 1e5,
                                l = (Math.sin(s) * -r.scaleY * 1e5 | 0) / 1e5,
                                h = (Math.cos(s) * r.scaleY * 1e5 | 0) / 1e5,
                                c = this.t.style,
                                f = this.t.currentStyle;
                            if (f) {
                                i = o, o = -l, l = -i, e = f.filter, c.filter = "";
                                var u, p, d = this.t.offsetWidth,
                                    m = this.t.offsetHeight,
                                    y = "absolute" !== f.position,
                                    v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h,
                                    _ = r.x + d * r.xPercent / 100,
                                    x = r.y + m * r.yPercent / 100;
                                if (null != r.ox && (_ += (u = (r.oxp ? d * r.ox * .01 : r.ox) - d / 2) - (u * a + (p = (r.oyp ? m * r.oy * .01 : r.oy) - m / 2) * o), x += p - (u * l + p * h)), v += y ? ", Dx=" + ((u = d / 2) - (u * a + (p = m / 2) * o) + _) + ", Dy=" + (p - (u * l + p * h) + x) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(R, v) : c.filter = v + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (y && -1 === v.indexOf("Dx=0, Dy=0") || P.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !y) { var b, w, T, E = g < 8 ? 1 : -1; for (u = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((d - ((a < 0 ? -a : a) * d + (o < 0 ? -o : o) * m)) / 2 + _), r.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * d)) / 2 + x), Pt = 0; Pt < 4; Pt++) T = (i = -1 !== (b = f[w = lt[Pt]]).indexOf("px") ? parseFloat(b) : rt(this.t, w, parseFloat(b), b.replace(S, "")) || 0) !== r[w] ? Pt < 2 ? -r.ieOffsetX : -r.ieOffsetY : Pt < 2 ? u - r.ieOffsetX : p - r.ieOffsetY, c[w] = (r[w] = Math.round(i - T * (0 === Pt || 2 === Pt ? 1 : E))) + "px" }
                            }
                        },
                        Zt = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
                            var e, i, r, n, s, a, o, l, h, c, f, u, p, m, g, y, v, _, x, b, w = this.data,
                                T = this.t.style,
                                S = w.rotation,
                                P = w.rotationX,
                                E = w.rotationY,
                                k = w.scaleX,
                                A = w.scaleY,
                                C = w.scaleZ,
                                M = w.x,
                                D = w.y,
                                F = w.z,
                                O = w.svg,
                                I = w.perspective,
                                R = w.force3D,
                                L = w.skewY,
                                N = w.skewX;
                            if (L && (N += L, S += L), !((1 !== t && 0 !== t || "auto" !== R || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && R || F || I || E || P || 1 !== C) || Ct && O || !Bt) S || N || O ? (S *= B, b = N * B, 1e5, i = Math.cos(S) * k, s = Math.sin(S) * k, r = Math.sin(S - b) * -A, a = Math.cos(S - b) * A, b && "simple" === w.skewType && (e = Math.tan(b - L * B), r *= e = Math.sqrt(1 + e * e), a *= e, L && (e = Math.tan(L * B), i *= e = Math.sqrt(1 + e * e), s *= e)), O && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset, D += w.yOrigin - (w.xOrigin * s + w.yOrigin * a) + w.yOffset, Ct && (w.xPercent || w.yPercent) && (g = this.t.getBBox(), M += .01 * w.xPercent * g.width, D += .01 * w.yPercent * g.height), M < (g = 1e-6) && M > -g && (M = 0), D < g && D > -g && (D = 0)), x = (1e5 * i | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + M + "," + D + ")", O && Ct ? this.t.setAttribute("transform", "matrix(" + x) : T[Rt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + x) : T[Rt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + A + "," + M + "," + D + ")";
                            else {
                                if (d && (k < (g = 1e-4) && k > -g && (k = C = 2e-5), A < g && A > -g && (A = C = 2e-5), !I || w.z || w.rotationX || w.rotationY || (I = 0)), S || N) S *= B, y = i = Math.cos(S), v = s = Math.sin(S), N && (S -= N * B, y = Math.cos(S), v = Math.sin(S), "simple" === w.skewType && (e = Math.tan((N - L) * B), y *= e = Math.sqrt(1 + e * e), v *= e, w.skewY && (e = Math.tan(L * B), i *= e = Math.sqrt(1 + e * e), s *= e))), r = -v, a = y;
                                else {
                                    if (!(E || P || 1 !== C || I || O)) return void(T[Rt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + F + "px)" + (1 !== k || 1 !== A ? " scale(" + k + "," + A + ")" : ""));
                                    i = a = 1, r = s = 0
                                }
                                c = 1, n = o = l = h = f = u = 0, p = I ? -1 / I : 0, m = w.zOrigin, g = 1e-6, ",", "0", (S = E * B) && (y = Math.cos(S), l = -(v = Math.sin(S)), f = p * -v, n = i * v, o = s * v, c = y, p *= y, i *= y, s *= y), (S = P * B) && (e = r * (y = Math.cos(S)) + n * (v = Math.sin(S)), _ = a * y + o * v, h = c * v, u = p * v, n = r * -v + n * y, o = a * -v + o * y, c *= y, p *= y, r = e, a = _), 1 !== C && (n *= C, o *= C, c *= C, p *= C), 1 !== A && (r *= A, a *= A, h *= A, u *= A), 1 !== k && (i *= k, s *= k, l *= k, f *= k), (m || O) && (m && (M += n * -m, D += o * -m, F += c * -m + m), O && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset, D += w.yOrigin - (w.xOrigin * s + w.yOrigin * a) + w.yOffset), M < g && M > -g && (M = "0"), D < g && D > -g && (D = "0"), F < g && F > -g && (F = 0)), x = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < g && i > -g ? "0" : i) + "," + (s < g && s > -g ? "0" : s) + "," + (l < g && l > -g ? "0" : l), x += "," + (f < g && f > -g ? "0" : f) + "," + (r < g && r > -g ? "0" : r) + "," + (a < g && a > -g ? "0" : a), P || E || 1 !== C ? (x += "," + (h < g && h > -g ? "0" : h) + "," + (u < g && u > -g ? "0" : u) + "," + (n < g && n > -g ? "0" : n), x += "," + (o < g && o > -g ? "0" : o) + "," + (c < g && c > -g ? "0" : c) + "," + (p < g && p > -g ? "0" : p) + ",") : x += ",0,0,0,0,1,0,", x += M + "," + D + "," + F + "," + (I ? 1 + -F / I : 1) + ")", T[Rt] = x
                            }
                        };
                    (c = Vt.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(t, e, i, r, s, o, l) {
                            if (r._lastParsedTransform === l) return s;
                            r._lastParsedTransform = l;
                            var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                            h && (l.scale = h(v, t));
                            var c, f, u, p, d, m, g, _, x, b = t._gsTransform,
                                w = t.style,
                                T = It.length,
                                S = l,
                                P = {},
                                E = Kt(t, n, !0, S.parseTransform),
                                k = S.transform && ("function" == typeof S.transform ? S.transform(v, y) : S.transform);
                            if (E.skewType = S.skewType || E.skewType || a.defaultSkewType, r._transform = E, "rotationZ" in S && (S.rotation = S.rotationZ), k && "string" == typeof k && Rt)(f = H.style)[Rt] = k, f.display = "block", f.position = "absolute", -1 !== k.indexOf("%") && (f.width = it(t, "width"), f.height = it(t, "height")), G.body.appendChild(H), c = Kt(H, null, !1), "simple" === E.skewType && (c.scaleY *= Math.cos(c.skewX * B)), E.svg && (m = E.xOrigin, g = E.yOrigin, c.x -= E.xOffset, c.y -= E.yOffset, (S.transformOrigin || S.svgOrigin) && (k = {}, Ht(t, ct(S.transformOrigin), k, S.svgOrigin, S.smoothOrigin, !0), m = k.xOrigin, g = k.yOrigin, c.x -= k.xOffset - E.xOffset, c.y -= k.yOffset - E.yOffset), (m || g) && (_ = Ut(H, !0), c.x -= m - (m * _[0] + g * _[2]), c.y -= g - (m * _[1] + g * _[3]))), G.body.removeChild(H), c.perspective || (c.perspective = E.perspective), null != S.xPercent && (c.xPercent = ut(S.xPercent, E.xPercent)), null != S.yPercent && (c.yPercent = ut(S.yPercent, E.yPercent));
                            else if ("object" == typeof S) {
                                if (c = { scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, E.scaleX), scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, E.scaleY), scaleZ: ut(S.scaleZ, E.scaleZ), x: ut(S.x, E.x), y: ut(S.y, E.y), z: ut(S.z, E.z), xPercent: ut(S.xPercent, E.xPercent), yPercent: ut(S.yPercent, E.yPercent), perspective: ut(S.transformPerspective, E.perspective) }, null != (d = S.directionalRotation))
                                    if ("object" == typeof d)
                                        for (f in d) S[f] = d[f];
                                    else S.rotation = d;
                                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0, c.xPercent = ut(S.x, E.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0, c.yPercent = ut(S.y, E.yPercent)), c.rotation = pt("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : E.rotation, E.rotation, "rotation", P), Bt && (c.rotationX = pt("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", P), c.rotationY = pt("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", P)), c.skewX = pt(S.skewX, E.skewX), c.skewY = pt(S.skewY, E.skewY)
                            }
                            for (Bt && null != S.force3D && (E.force3D = S.force3D, p = !0), (u = E.force3D || E.z || E.rotationX || E.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == S.scale || (c.scaleZ = 1); --T > -1;)((k = c[x = It[T]] - E[x]) > 1e-6 || k < -1e-6 || null != S[x] || null != z[x]) && (p = !0, s = new wt(E, x, E[x], k, s), x in P && (s.e = P[x]), s.xs0 = 0, s.plugin = o, r._overwriteProps.push(s.n));
                            return k = "function" == typeof S.transformOrigin ? S.transformOrigin(v, y) : S.transformOrigin, E.svg && (k || S.svgOrigin) && (m = E.xOffset, g = E.yOffset, Ht(t, ct(k), c, S.svgOrigin, S.smoothOrigin), s = Tt(E, "xOrigin", (b ? E : c).xOrigin, c.xOrigin, s, "transformOrigin"), s = Tt(E, "yOrigin", (b ? E : c).yOrigin, c.yOrigin, s, "transformOrigin"), m === E.xOffset && g === E.yOffset || (s = Tt(E, "xOffset", b ? m : E.xOffset, E.xOffset, s, "transformOrigin"), s = Tt(E, "yOffset", b ? g : E.yOffset, E.yOffset, s, "transformOrigin")), k = "0px 0px"), (k || Bt && u && E.zOrigin) && (Rt ? (p = !0, x = Nt, k || (k = (k = (it(t, x, n, !1, "50% 50%") + "").split(" "))[0] + " " + k[1] + " " + E.zOrigin + "px"), k += "", (s = new wt(w, x, 0, 0, s, -1, "transformOrigin")).b = w[x], s.plugin = o, Bt ? (f = E.zOrigin, k = k.split(" "), E.zOrigin = (k.length > 2 ? parseFloat(k[2]) : f) || 0, s.xs0 = s.e = k[0] + " " + (k[1] || "50%") + " 0px", (s = new wt(E, "zOrigin", 0, 0, s, -1, s.n)).b = f, s.xs0 = s.e = E.zOrigin) : s.xs0 = s.e = k) : ct(k + "", E)), p && (r._transformType = E.svg && Ct || !u && 3 !== this._transformType ? 2 : 3), h && (l.scale = h), s
                        },
                        allowFunc: !0,
                        prefix: !0
                    }), kt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), kt("clipPath", { defaultValue: "inset(0%)", prefix: !0, multi: !0, formatter: _t("inset(0% 0% 0% 0%)", !1, !0) }), kt("borderRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, s, a, o) {
                            e = this.format(e);
                            var l, h, c, f, u, p, d, m, g, y, v, _, x, b, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                P = t.style;
                            for (g = parseFloat(t.offsetWidth), y = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Q(S[h])), -1 !== (u = f = it(t, S[h], n, !1, "0px")).indexOf(" ") && (f = u.split(" "), u = f[0], f = f[1]), p = c = l[h], d = parseFloat(u), _ = u.substr((d + "").length), (x = "=" === p.charAt(1)) ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = r[i] || _), v !== _ && (b = rt(t, "borderLeft", d, _), w = rt(t, "borderTop", d, _), "%" === v ? (u = b / g * 100 + "%", f = w / y * 100 + "%") : "em" === v ? (u = b / (T = rt(t, "borderLeft", 1, "em")) + "em", f = w / T + "em") : (u = b + "px", f = w + "px"), x && (p = parseFloat(u) + m + v, c = parseFloat(f) + m + v)), a = St(P, S[h], u + " " + f, p + " " + c, !1, "0px", a);
                            return a
                        },
                        prefix: !0,
                        formatter: _t("0px 0px 0px 0px", !1, !0)
                    }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, i, r, s, a) { return St(t.style, i, this.format(it(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", s) }, prefix: !0, formatter: _t("0px 0px", !1, !0) }), kt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(t, e, i, r, s, a) {
                            var o, l, h, c, f, u, p = "background-position",
                                d = n || et(t),
                                m = this.format((d ? g ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                y = this.format(e);
                            if (-1 !== m.indexOf("%") != (-1 !== y.indexOf("%")) && y.split(",").length < 2 && (u = it(t, "backgroundImage").replace(D, "")) && "none" !== u) {
                                for (o = m.split(" "), l = y.split(" "), X.setAttribute("src", u), h = 2; --h > -1;)(c = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[h] = c ? parseFloat(m) / 100 * f + "px" : parseFloat(m) / f * 100 + "%");
                                m = o.join(" ")
                            }
                            return this.parseComplex(t.style, m, y, s, a)
                        },
                        formatter: ct
                    }), kt("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return "co" === (t += "").substr(0, 2) ? t : ct(-1 === t.indexOf(" ") ? t + " " + t : t) } }), kt("perspective", { defaultValue: "0px", prefix: !0 }), kt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), kt("transformStyle", { prefix: !0 }), kt("backfaceVisibility", { prefix: !0 }), kt("userSelect", { prefix: !0 }), kt("margin", { parser: xt("marginTop,marginRight,marginBottom,marginLeft") }), kt("padding", { parser: xt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), kt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, r, s, a) { var o, l, h; return g < 9 ? (l = t.currentStyle, h = g < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(it(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, s, a) } }), kt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), kt("autoRound,strictUnits", { parser: function(t, e, i, r, n) { return n } }), kt("border", {
                        defaultValue: "0px solid #000",
                        parser: function(t, e, i, r, s, a) {
                            var o = it(t, "borderTopWidth", n, !1, "0px"),
                                l = this.format(e).split(" "),
                                h = l[0].replace(S, "");
                            return "px" !== h && (o = parseFloat(o) / rt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + it(t, "borderTopStyle", n, !1, "solid") + " " + it(t, "borderTopColor", n, !1, "#000")), l.join(" "), s, a)
                        },
                        color: !0,
                        formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0] }
                    }), kt("borderWidth", { parser: xt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), kt("float,cssFloat,styleFloat", {
                        parser: function(t, e, i, r, n, s) {
                            var a = t.style,
                                o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                            return new wt(a, o, 0, 0, n, -1, i, !1, 0, a[o], e)
                        }
                    });
                    var Jt = function(t) {
                        var e, i = this.t,
                            r = i.filter || it(this.data, "filter") || "",
                            n = this.s + this.c * t | 0;
                        100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !it(this.data, "filter")) : (i.filter = r.replace(k, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(P, "opacity=" + n))
                    };
                    kt("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(t, e, i, r, s, a) {
                            var o = parseFloat(it(t, "opacity", n, !1, "1")),
                                l = t.style,
                                h = "autoAlpha" === i;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === it(t, "visibility", n) && 0 !== e && (o = 0), U ? s = new wt(l, "opacity", o, e - o, s) : ((s = new wt(l, "opacity", 100 * o, 100 * (e - o), s)).xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = a, s.setRatio = Jt), h && ((s = new wt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(s.n), r._overwriteProps.push(i)), s
                        }
                    });
                    var Qt = function(t, e) { e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                        te = function(t) {
                            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Qt(i, e.p), e = e._next;
                                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                        };
                    kt("className", {
                        parser: function(t, e, r, s, a, o, l) {
                            var h, c, f, u, p, d = t.getAttribute("class") || "",
                                m = t.style.cssText;
                            if ((a = s._classNamePT = new wt(t, r, 0, 0, a, 2)).setRatio = te, a.pr = -11, i = !0, a.b = d, c = st(t, n), f = t._gsClassPT) {
                                for (u = {}, p = f.data; p;) u[p.p] = 1, p = p._next;
                                f.setRatio(1)
                            }
                            return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = at(t, c, st(t), l, u), t.setAttribute("class", d), a.data = h.firstMPT, t.style.cssText !== m && (t.style.cssText = m), a = a.xfirst = s.parse(t, h.difs, a, o)
                        }
                    });
                    var ee = function(t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e, i, r, n, s, a = this.t.style,
                                o = h.transform.parse;
                            if ("all" === this.e) a.cssText = "", n = !0;
                            else
                                for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1;) i = e[r], h[i] && (h[i].parse === o ? n = !0 : i = "transformOrigin" === i ? Nt : h[i].p), Qt(a, i);
                            n && (Qt(a, Rt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                        }
                    };
                    for (kt("clearProps", { parser: function(t, e, r, n, s) { return (s = new wt(t, r, 0, 0, s, 2)).setRatio = ee, s.e = e, s.pr = -10, s.data = n._tween, i = !0, s } }), c = "bezier,throwProps,physicsProps,physics2D".split(","), Pt = c.length; Pt--;) At(c[Pt]);
                    (c = a.prototype)._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, o, l) {
                        if (!t.nodeType) return !1;
                        this._target = y = t, this._tween = o, this._vars = e, v = l, f = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, n = et(t), s = this._overwriteProps;
                        var c, d, g, _, x, b, w, T, S, P = t.style;
                        if (u && "" === P.zIndex && ("auto" !== (c = it(t, "zIndex", n)) && "" !== c || this._addLazySet(P, "zIndex", 0)), "string" == typeof e && (_ = P.cssText, c = st(t, n), P.cssText = _ + ";" + e, c = at(t, c, st(t)).difs, !U && E.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, P.cssText = _), e.className ? this._firstPT = d = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                            for (S = 3 === this._transformType, Rt ? p && (u = !0, "" === P.zIndex && ("auto" !== (w = it(t, "zIndex", n)) && "" !== w || this._addLazySet(P, "zIndex", 0)), m && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : P.zoom = 1, g = d; g && g._next;) g = g._next;
                            T = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, g), T.setRatio = Rt ? Zt : $t, T.data = this._transform || Kt(t, n, !0), T.tween = o, T.pr = -1, s.pop()
                        }
                        if (i) {
                            for (; d;) {
                                for (b = d._next, g = _; g && g.pr > d.pr;) g = g._next;
                                (d._prev = g ? g._prev : x) ? d._prev._next = d: _ = d, (d._next = g) ? g._prev = d : x = d, d = b
                            }
                            this._firstPT = _
                        }
                        return !0
                    }, c.parse = function(t, e, i, s) {
                        var a, o, l, c, u, p, d, m, g, _, x = t.style;
                        for (a in e) {
                            if (p = e[a], o = h[a], "function" != typeof p || o && o.allowFunc || (p = p(v, y)), o) i = o.parse(t, p, a, this, i, s, e);
                            else {
                                if ("--" === a.substr(0, 2)) { this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", et(t).getPropertyValue(a) + "", p + "", a, !1, a); continue }
                                u = it(t, a, n) + "", g = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && A.test(p) ? (g || (p = ((p = gt(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = St(x, a, u, p, !0, "transparent", i, 0, s)) : g && N.test(p) ? i = St(x, a, u, p, !0, null, i, 0, s) : (d = (l = parseFloat(u)) || 0 === l ? u.substr((l + "").length) : "", "" !== u && "auto" !== u || ("width" === a || "height" === a ? (l = ht(t, a, n), d = "px") : "left" === a || "top" === a ? (l = nt(t, a, n), d = "px") : (l = "opacity" !== a ? 0 : 1, d = "")), (_ = g && "=" === p.charAt(1)) ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), m = p.replace(S, "")) : (c = parseFloat(p), m = g ? p.replace(S, "") : ""), "" === m && (m = a in r ? r[a] : d), p = c || 0 === c ? (_ ? c + l : c) + m : e[a], d !== m && ("" === m && "lineHeight" !== a || (c || 0 === c) && l && (l = rt(t, a, l, d), "%" === m ? (l /= rt(t, a, 100, "%") / 100, !0 !== e.strictUnits && (u = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= rt(t, a, 1, m) : "px" !== m && (c = rt(t, a, c, m), m = "px"), _ && (c || 0 === c) && (p = c + l + m))), _ && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== x[a] && (p || p + "" != "NaN" && null != p) ? (i = new wt(x, a, c || l || 0, 0, i, -1, a, !1, 0, u, p)).xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : u : $("invalid " + a + " tween value: " + e[a]) : (i = new wt(x, a, l, c - l, i, 0, a, !1 !== f && ("px" === m || "zIndex" === a), 0, u, p)).xs0 = m)
                            }
                            s && i && !i.plugin && (i.plugin = s)
                        }
                        return i
                    }, c.setRatio = function(t) {
                        var e, i, r, n = this._firstPT;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                for (; n;) {
                                    if (e = n.c * t + n.s, n.r ? e = n.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), n.type)
                                        if (1 === n.type)
                                            if (2 === (r = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                            else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                    else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                    else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                    else {
                                        for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                        n.t[n.p] = i
                                    } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                                    else n.t[n.p] = e + n.xs0;
                                    n = n._next
                                } else
                                    for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                            else
                                for (; n;) {
                                    if (2 !== n.type)
                                        if (n.r && -1 !== n.type)
                                            if (e = n.r(n.s + n.c), n.type) {
                                                if (1 === n.type) {
                                                    for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                                    n.t[n.p] = i
                                                }
                                            } else n.t[n.p] = e + n.xs0;
                                    else n.t[n.p] = n.e;
                                    else n.setRatio(t);
                                    n = n._next
                                }
                    }, c._enableTransforms = function(t) { this._transform = this._transform || Kt(this._target, n, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3 };
                    var ie = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                    c._addLazySet = function(t, e, i) {
                        var r = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
                        r.e = i, r.setRatio = ie, r.data = this
                    }, c._linkCSSP = function(t, e, i, r) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, c._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next }, c._kill = function(e) {
                        var i, r, n, s = e;
                        if (e.autoAlpha || e.alpha) {
                            for (r in s = {}, e) s[r] = e[r];
                            s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                        }
                        for (e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), r = i.plugin), i = i._next;
                        return t.prototype._kill.call(this, s)
                    };
                    var re = function(t, e, i) {
                        var r, n, s, a;
                        if (t.slice)
                            for (n = t.length; --n > -1;) re(t[n], e, i);
                        else
                            for (n = (r = t.childNodes).length; --n > -1;) a = (s = r[n]).type, s.style && (e.push(st(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || re(s, e, i)
                    };
                    return a.cascadeTo = function(t, i, r) {
                        var n, s, a, o, l = e.to(t, i, r),
                            h = [l],
                            c = [],
                            f = [],
                            u = [],
                            p = e._internals.reservedProps;
                        for (t = l._targets || l.target, re(t, c, u), l.render(i, !0, !0), re(t, f), l.render(0, !0, !0), l._enabled(!0), n = u.length; --n > -1;)
                            if ((s = at(u[n], c[n], f[n])).firstMPT) {
                                for (a in s = s.difs, r) p[a] && (s[a] = r[a]);
                                for (a in o = {}, s) o[a] = c[n][a];
                                h.push(e.fromTo(u[n], i, o, s))
                            }
                        return h
                    }, t.activate([a]), a
                }, !0)
            }), o._gsDefine && o._gsQueue.pop()(),
            function(r) {
                "use strict";
                var l = function() { return (o.GreenSockGlobals || o).CSSPlugin };
                t.exports ? (i(49), t.exports = l()) : (s = [i(49)], void 0 === (a = "function" == typeof(n = l) ? n.apply(e, s) : n) || (t.exports = a))
            }()
    }).call(this, i(54))
}, function(t, e, i) {
    (function(r) {
        var n, s, a;

        function o(t) { return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
        var l = t.exports && void 0 !== r ? r : this || window;
        (l._gsQueue || (l._gsQueue = [])).push(function() {
                "use strict";
                l._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(t, e, i, r) {
                    var n, s, a, h, c = function(e, i) { t.call(this, "throwProps"), this._overwriteProps.length = 0 },
                        f = 999999999999999,
                        u = l._gsDefine.globals,
                        p = !1,
                        d = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
                        m = function(t, e, i, r, n) {
                            var s, a, l, h, c = e.length,
                                u = 0,
                                p = f;
                            if ("object" === o(t)) {
                                for (; --c > -1;) {
                                    for (l in s = e[c], a = 0, t) a += (h = s[l] - t[l]) * h;
                                    a < p && (u = c, p = a)
                                }
                                if ((n || f) < f && n < Math.sqrt(p)) return t
                            } else
                                for (; --c > -1;)(a = (s = e[c]) - t) < 0 && (a = -a), a < p && s >= r && s <= i && (u = c, p = a);
                            return e[u]
                        },
                        g = function(t, e, i, r, n, s) {
                            if ("auto" === t.end) return t;
                            var a, l, h = t.end;
                            if (i = isNaN(i) ? f : i, r = isNaN(r) ? -f : r, "object" === o(e)) {
                                if (a = e.calculated ? e : ("function" == typeof h ? h(e) : m(e, h, i, r, s)) || e, !e.calculated) {
                                    for (l in a) e[l] = a[l];
                                    e.calculated = !0
                                }
                                a = a[n]
                            } else a = "function" == typeof h ? h(e) : h instanceof Array ? m(e, h, i, r, s) : Number(h);
                            return a > i ? a = i : a < r && (a = r), { max: a, min: a, unitFactor: t.unitFactor }
                        },
                        y = function(t, e, i) { for (var r in e) void 0 === t[r] && r !== i && (t[r] = e[r]); return t },
                        v = c.calculateChange = function(t, r, n, s) { return null == s && (s = .05), n * s * t / (r instanceof i ? r : r ? new i(r) : e.defaultEase).getRatio(s) },
                        _ = c.calculateDuration = function(t, r, n, s, a) { a = a || .05; var o = s instanceof i ? s : s ? new i(s) : e.defaultEase; return Math.abs((r - t) * o.getRatio(a) / n / a) },
                        x = c.calculateTweenDuration = function(t, n, s, a, l, h) {
                            if ("string" == typeof t && (t = e.selector(t)), !t) return 0;
                            null == s && (s = 10), null == a && (a = .2), null == l && (l = 1), t.length && (t = t[0] || t);
                            var f, u, d, m, x, b, w, T, S, P, E, k, A, C = 0,
                                M = 9999999999,
                                D = n.throwProps || n,
                                F = n.ease instanceof i ? n.ease : n.ease ? new i(n.ease) : e.defaultEase,
                                O = isNaN(D.checkpoint) ? .05 : Number(D.checkpoint),
                                I = isNaN(D.resistance) ? c.defaultResistance : Number(D.resistance);
                            if (D.linkedProps)
                                for (k = D.linkedProps.split(","), E = {}, A = 0; A < k.length; A++)(u = D[f = k[A]]) && (d = (m = void 0 !== u.velocity && "number" == typeof u.velocity ? Number(u.velocity) || 0 : (S = S || r.getByTarget(t)) && S.isTrackingProp(f) ? S.getVelocity(f) : 0) * (x = isNaN(u.resistance) ? I : Number(u.resistance)) > 0 ? m / x : m / -x, b = "function" == typeof t[f] ? t[f.indexOf("set") || "function" != typeof t["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : t[f] || 0, E[f] = b + v(m, F, d, O));
                            for (f in D) "resistance" !== f && "checkpoint" !== f && "preventOvershoot" !== f && "linkedProps" !== f && "radius" !== f && ("object" !== o(u = D[f]) && ((S = S || r.getByTarget(t)) && S.isTrackingProp(f) ? u = "number" == typeof u ? { velocity: u } : { velocity: S.getVelocity(f) } : d = (m = Number(u) || 0) * I > 0 ? m / I : m / -I), "object" === o(u) && (d = (m = void 0 !== u.velocity && "number" == typeof u.velocity ? Number(u.velocity) || 0 : (S = S || r.getByTarget(t)) && S.isTrackingProp(f) ? S.getVelocity(f) : 0) * (x = isNaN(u.resistance) ? I : Number(u.resistance)) > 0 ? m / x : m / -x, w = (b = "function" == typeof t[f] ? t[f.indexOf("set") || "function" != typeof t["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : t[f] || 0) + v(m, F, d, O), void 0 !== u.end && (u = g(u, E && f in E ? E : w, u.max, u.min, f, D.radius), (h || p) && (D[f] = y(u, D[f], "end"))), void 0 !== u.max && w > Number(u.max) + 1e-10 ? (P = u.unitFactor || c.defaultUnitFactors[f] || 1, (T = b > u.max && u.min !== u.max || m * P > -15 && m * P < 45 ? a + .1 * (s - a) : _(b, u.max, m, F, O)) + l < M && (M = T + l)) : void 0 !== u.min && w < Number(u.min) - 1e-10 && (P = u.unitFactor || c.defaultUnitFactors[f] || 1, (T = b < u.min && u.min !== u.max || m * P > -45 && m * P < 15 ? a + .1 * (s - a) : _(b, u.min, m, F, O)) + l < M && (M = T + l)), T > C && (C = T)), d > C && (C = d));
                            return C > M && (C = M), C > s ? s : C < a ? a : C
                        },
                        b = c.prototype = new t("throwProps");
                    return b.constructor = c, c.version = "0.11.1", c.API = 2, c._autoCSS = !0, c.defaultResistance = 100, c.defaultUnitFactors = { time: 1e3, totalTime: 1e3 }, c.track = function(t, e, i) { return r.track(t, e, i) }, c.untrack = function(t, e) { r.untrack(t, e) }, c.isTracking = function(t, e) { return r.isTracking(t, e) }, c.getVelocity = function(t, e) { var i = r.getByTarget(t); return i ? i.getVelocity(e) : NaN }, c._cssRegister = function() {
                        var t = u.com.greensock.plugins.CSSPlugin;
                        if (t) {
                            var e = t._internals,
                                i = e._parseToProxy,
                                a = e._setPluginRatio,
                                l = e.CSSPropTween;
                            e._registerComplexSpecialProp("throwProps", {
                                parser: function(t, e, h, f, u, p) {
                                    p = new c;
                                    var m, g, y, v, _ = {},
                                        x = {},
                                        b = {},
                                        w = {},
                                        T = {},
                                        S = {};
                                    for (g in s = {}, e) "resistance" !== g && "preventOvershoot" !== g && "linkedProps" !== g && "radius" !== g && ("object" === o(m = e[g]) ? (void 0 !== m.velocity && "number" == typeof m.velocity ? _[g] = Number(m.velocity) || 0 : (v = v || r.getByTarget(t), _[g] = v && v.isTrackingProp(g) ? v.getVelocity(g) : 0), void 0 !== m.end && (w[g] = m.end), void 0 !== m.min && (x[g] = m.min), void 0 !== m.max && (b[g] = m.max), m.preventOvershoot && (S[g] = !0), void 0 !== m.resistance && (!0, T[g] = m.resistance)) : "number" == typeof m ? _[g] = m : (v = v || r.getByTarget(t)) && v.isTrackingProp(g) ? _[g] = v.getVelocity(g) : _[g] = m || 0, d[g] && f._enableTransforms(2 === d[g]));
                                    for (g in y = i(t, _, f, u, p), n = y.proxy, _ = y.end, n) s[g] = { velocity: _[g], min: x[g], max: b[g], end: w[g], resistance: T[g], preventOvershoot: S[g] };
                                    return null != e.resistance && (s.resistance = e.resistance), null != e.linkedProps && (s.linkedProps = e.linkedProps), null != e.radius && (s.radius = e.radius), e.preventOvershoot && (s.preventOvershoot = !0), u = new l(t, "throwProps", 0, 0, y.pt, 2), f._overwriteProps.pop(), u.plugin = p, u.setRatio = a, u.data = y, p._onInitTween(n, s, f._tween), u
                                }
                            })
                        }
                    }, c.to = function(t, i, r, o, l) { i.throwProps || (i = { throwProps: i }), 0 === l && (i.throwProps.preventOvershoot = !0), p = !0; var c = new e(t, o || 1, i); return c.render(0, !0, !0), c.vars.css ? (c.duration(x(n, { throwProps: s, ease: i.ease }, r, o, l)), c._delay && !c.vars.immediateRender ? c.invalidate() : a._onInitTween(n, h, c), p = !1, c) : (c.kill(), c = new e(t, x(t, i, r, o, l), i), p = !1, c) }, b._onInitTween = function(t, e, i, n) {
                        this.target = t, this._props = [], a = this, h = e;
                        var s, l, c, f, u, d, m, _, x, b, w, T, S = i._ease,
                            P = isNaN(e.checkpoint) ? .05 : Number(e.checkpoint),
                            E = i._duration,
                            k = e.preventOvershoot,
                            A = 0;
                        if (e.linkedProps)
                            for (w = e.linkedProps.split(","), b = {}, T = 0; T < w.length; T++)(l = e[s = w[T]]) && (u = void 0 !== l.velocity && "number" == typeof l.velocity ? Number(l.velocity) || 0 : (x = x || r.getByTarget(t)) && x.isTrackingProp(s) ? x.getVelocity(s) : 0, c = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s] || 0, b[s] = c + v(u, S, E, P));
                        for (s in e)
                            if ("resistance" !== s && "checkpoint" !== s && "preventOvershoot" !== s && "linkedProps" !== s && "radius" !== s) {
                                if ("function" == typeof(l = e[s]) && (l = l(n, t)), "number" == typeof l) u = Number(l) || 0;
                                else if ("object" !== o(l) || isNaN(l.velocity)) {
                                    if (!(x = x || r.getByTarget(t)) || !x.isTrackingProp(s)) throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + s;
                                    u = x.getVelocity(s)
                                } else u = Number(l.velocity);
                                d = v(u, S, E, P), _ = 0, c = (f = "function" == typeof t[s]) ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : t[s], "object" === o(l) && (m = c + d, void 0 !== l.end && (l = g(l, b && s in b ? b : m, l.max, l.min, s, e.radius), p && (e[s] = y(l, e[s], "end"))), void 0 !== l.max && Number(l.max) < m ? k || l.preventOvershoot ? d = l.max - c : _ = l.max - c - d : void 0 !== l.min && Number(l.min) > m && (k || l.preventOvershoot ? d = l.min - c : _ = l.min - c - d)), this._overwriteProps[A] = s, this._props[A++] = { p: s, s: c, c1: d, c2: _, f: f, r: !1 }
                            }
                        return !0
                    }, b._kill = function(e) { for (var i = this._props.length; --i > -1;) null != e[this._props[i].p] && this._props.splice(i, 1); return t.prototype._kill.call(this, e) }, b._mod = function(t) { for (var e, i = this._props, r = i.length; --r > -1;) "function" == typeof(e = t[i[r].p] || t.throwProps) && (i[r].m = e) }, b.setRatio = function(t) { for (var e, i, r = this._props.length; --r > -1;) i = (e = this._props[r]).s + e.c1 * t + e.c2 * t * t, e.m ? i = e.m(i, this.target) : 1 === t && (i = (1e4 * i + (i < 0 ? -.5 : .5) | 0) / 1e4), e.f ? this.target[e.p](i) : this.target[e.p] = i }, t.activate([c]), c
                }, !0), l._gsDefine("utils.VelocityTracker", ["TweenLite"], function(t) {
                    var e, i, r, n = /([A-Z])/g,
                        s = {},
                        a = l.document,
                        o = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
                        h = a.defaultView ? a.defaultView.getComputedStyle : function() {},
                        c = function(t, e, i) { var r = (t._gsTransform || s)[e]; return r || 0 === r ? r : (t.style[e] ? r = t.style[e] : (i = i || h(t, null)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(n, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), parseFloat(r) || 0) },
                        f = t.ticker,
                        u = function(t, e, i) { this.p = t, this.f = e, this.v1 = this.v2 = 0, this.t1 = this.t2 = f.time, this.css = !1, this.type = "", this._prev = null, i && (this._next = i, i._prev = this) },
                        p = function() {
                            var t, i, n = e,
                                s = f.time;
                            if (s - r >= .03)
                                for (r, r = s; n;) {
                                    for (i = n._firstVP; i;)((t = i.css ? c(n.target, i.p) : i.f ? n.target[i.p]() : n.target[i.p]) !== i.v1 || s - i.t1 > .15) && (i.v2 = i.v1, i.v1 = t, i.t2 = i.t1, i.t1 = s), i = i._next;
                                    n = n._next
                                }
                        },
                        d = function(t) { this._lookup = {}, this.target = t, this.elem = !(!t.style || !t.nodeType), i || (f.addEventListener("tick", p, null, !1, -100), r = f.time, i = !0), e && (this._next = e, e._prev = this), e = this },
                        m = d.getByTarget = function(t) {
                            for (var i = e; i;) {
                                if (i.target === t) return i;
                                i = i._next
                            }
                        },
                        g = d.prototype;
                    return g.addProp = function(e, i) {
                        if (!this._lookup[e]) {
                            var r = this.target,
                                n = "function" == typeof r[e],
                                s = n ? this._altProp(e) : e,
                                a = this._firstVP;
                            this._firstVP = this._lookup[e] = this._lookup[s] = a = new u(s !== e && 0 === e.indexOf("set") ? s : e, n, a), a.css = this.elem && (void 0 !== this.target.style[a.p] || o[a.p]), a.css && o[a.p] && !r._gsTransform && t.set(r, { x: "+=0", overwrite: !1 }), a.type = i || a.css && 0 === e.indexOf("rotation") ? "deg" : "", a.v1 = a.v2 = a.css ? c(r, a.p) : n ? r[a.p]() : r[a.p]
                        }
                    }, g.removeProp = function(t) {
                        var e = this._lookup[t];
                        e && (e._prev ? e._prev._next = e._next : e === this._firstVP && (this._firstVP = e._next), e._next && (e._next._prev = e._prev), this._lookup[t] = 0, e.f && (this._lookup[this._altProp(t)] = 0))
                    }, g.isTrackingProp = function(t) { return this._lookup[t] instanceof u }, g.getVelocity = function(t) {
                        var e, i, r = this._lookup[t],
                            n = this.target;
                        if (!r) throw "The velocity of " + t + " is not being tracked.";
                        return e = (r.css ? c(n, r.p) : r.f ? n[r.p]() : n[r.p]) - r.v2, "rad" !== r.type && "deg" !== r.type || (e %= i = "rad" === r.type ? 2 * Math.PI : 360) !== e % (i / 2) && (e = e < 0 ? e + i : e - i), e / (f.time - r.t2)
                    }, g._altProp = function(t) {
                        var e = t.substr(0, 3),
                            i = ("get" === e ? "set" : "set" === e ? "get" : e) + t.substr(3);
                        return "function" == typeof this.target[i] ? i : t
                    }, d.getByTarget = function(i) {
                        var r = e;
                        for ("string" == typeof i && (i = t.selector(i)), i.length && i !== window && i[0] && i[0].style && !i.nodeType && (i = i[0]); r;) {
                            if (r.target === i) return r;
                            r = r._next
                        }
                    }, d.track = function(t, e, i) {
                        var r = m(t),
                            n = e.split(","),
                            s = n.length;
                        for (i = (i || "").split(","), r || (r = new d(t)); --s > -1;) r.addProp(n[s], i[s] || i[0]);
                        return r
                    }, d.untrack = function(t, i) {
                        var r = m(t),
                            n = (i || "").split(","),
                            s = n.length;
                        if (r) {
                            for (; --s > -1;) r.removeProp(n[s]);
                            r._firstVP && i || (r._prev ? r._prev._next = r._next : r === e && (e = r._next), r._next && (r._next._prev = r._prev))
                        }
                    }, d.isTracking = function(t, e) { var i = m(t); return !!i && (!(e || !i._firstVP) || i.isTrackingProp(e)) }, d
                }, !0)
            }), l._gsDefine && l._gsQueue.pop()(),
            function(r) {
                "use strict";
                var o = function() { return (l.GreenSockGlobals || l).ThrowPropsPlugin };
                t.exports ? (i(49), t.exports = o()) : (s = [i(49)], void 0 === (a = "function" == typeof(n = o) ? n.apply(e, s) : n) || (t.exports = a))
            }()
    }).call(this, i(54))
}, function(t, e) {
    var i = "undefined" != typeof document ? document.createElement("p").style : {},
        r = ["O", "ms", "Moz", "Webkit"],
        n = /([A-Z])/g,
        s = {};

    function a(t) { if (t = t.replace(/-([a-z])/g, function(t, e) { return e.toUpperCase() }), void 0 !== i[t]) return t; for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = r.length; n--;) { var s = r[n] + e; if (void 0 !== i[s]) return s } return t }
    t.exports = function(t) { return t in s ? s[t] : s[t] = a(t) }, t.exports.dash = function(t) { return t = a(t), n.test(t) && (t = "-" + t.replace(n, "-$1"), n.lastIndex = 0), t.toLowerCase() }
}, function(t, e, i) {
    "use strict";
    var r = i(328),
        n = i(329),
        s = i(330).Lethargy,
        a = i(331),
        o = (i(332), i(333)),
        l = "virtualscroll";
    t.exports = d;
    var h = 37,
        c = 38,
        f = 39,
        u = 40,
        p = 32;

    function d(t) { o(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = r({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: !1, unpreventTouchClass: "vs-touchmove-allowed", limitInertia: !1, useKeyboard: !0, useTouch: !0 }, t), this.options.limitInertia && (this._lethargy = new s), this._emitter = new n, this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = { passive: this.options.passive }) }
    d.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(l, { x: e.x, y: e.y, deltaX: e.deltaX, deltaY: e.deltaY, originalEvent: t })
    }, d.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, a.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
        }
    }, d.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
        }
    }, d.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY
    }, d.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event,
            r = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = r.pageX, this.touchStartY = r.pageY, this._notify(t)
    }, d.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
            case h:
            case c:
                e.deltaY = this.options.keyStep;
                break;
            case f:
            case u:
                e.deltaY = -this.options.keyStep;
                break;
            case p && t.shiftKey:
                e.deltaY = i;
                break;
            case p:
                e.deltaY = -i;
                break;
            default:
                return
        }
        this._notify(t)
    }, d.prototype._bind = function() { a.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), a.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), a.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), a.hasPointer && a.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown) }, d.prototype._unbind = function() { a.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), a.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), a.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), a.hasPointer && a.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown) }, d.prototype.on = function(t, e) {
        this._emitter.on(l, t, e);
        var i = this._emitter.e;
        i && i[l] && 1 === i[l].length && this._bind()
    }, d.prototype.off = function(t, e) {
        this._emitter.off(l, t, e);
        var i = this._emitter.e;
        (!i[l] || i[l].length <= 0) && this._unbind()
    }, d.prototype.reset = function() {
        var t = this._event;
        t.x = 0, t.y = 0
    }, d.prototype.destroy = function() { this._emitter.off(), this._unbind() }
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__, a, b;

    function _typeof(t) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }
    "undefined" != typeof navigator && (a = window || {}, b = function b(window) {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bm_rounder = Math.round,
            bm_rnd, bm_pow = Math.pow,
            bm_sqrt = Math.sqrt,
            bm_abs = Math.abs,
            bm_floor = Math.floor,
            bm_max = Math.max,
            bm_min = Math.min,
            blitter = 10,
            BMMath = {};

        function ProjectInterface() { return {} }! function() {
            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                i = e.length;
            for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
            if ("object" === _typeof(t) && t.length) {
                var e, i = createSizedArray(t.length),
                    r = t.length;
                for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                return i
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(t) { bm_rnd = t ? Math.round : function(t) { return t } }

        function styleDiv(t) { t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d" }

        function BMEnterFrameEvent(t, e, i, r) { this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1 }

        function BMCompleteEvent(t, e) { this.type = t, this.direction = e < 0 ? -1 : 1 }

        function BMCompleteLoopEvent(t, e, i, r) { this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1 }

        function BMSegmentStartEvent(t, e, i) { this.type = t, this.firstFrame = e, this.totalFrames = i }

        function BMDestroyEvent(t, e) { this.type = t, this.target = e }
        roundValues(!1);
        var createElementID = (D = 0, function() { return "__lottie_element_" + ++D }),
            D;

        function HSVtoRGB(t, e, i) {
            var r, n, s, a, o, l, h, c;
            switch (l = i * (1 - e), h = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), c = i * (1 - (1 - o) * e), a % 6) {
                case 0:
                    r = i, n = c, s = l;
                    break;
                case 1:
                    r = h, n = i, s = l;
                    break;
                case 2:
                    r = l, n = i, s = c;
                    break;
                case 3:
                    r = l, n = h, s = i;
                    break;
                case 4:
                    r = c, n = l, s = i;
                    break;
                case 5:
                    r = i, n = l, s = h
            }
            return [r, n, s]
        }

        function RGBtoHSV(t, e, i) {
            var r, n = Math.max(t, e, i),
                s = Math.min(t, e, i),
                a = n - s,
                o = 0 === n ? 0 : a / n,
                l = n / 255;
            switch (n) {
                case s:
                    r = 0;
                    break;
                case t:
                    r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
                    break;
                case e:
                    r = i - t + 2 * a, r /= 6 * a;
                    break;
                case i:
                    r = t - e + 4 * a, r /= 6 * a
            }
            return [r, o, l]
        }

        function addSaturationToRGB(t, e) { var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return i[1] += e, 1 < i[1] ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2]) }

        function addBrightnessToRGB(t, e) { var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return i[2] += e, 1 < i[2] ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2]) }

        function addHueToRGB(t, e) { var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return i[0] += e / 360, 1 < i[0] ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2]) }
        var rgbToHex = function() { var t, e, i = []; for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e; return function(t, e, r) { return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r] } }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t])
                    for (var i = this._cbs[t].length, r = 0; r < i; r++) this._cbs[t][r](e)
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() { this.removeEventListener(t, e) }.bind(this)
            },
            removeEventListener: function(t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                        this._cbs[t].length || (this._cbs[t] = null)
                    }
                } else this._cbs[t] = null
            }
        };
        var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) { return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0 } : function(t, e) {
            var i, r = 0,
                n = [];
            switch (t) {
                case "int16":
                case "uint8c":
                    i = 1;
                    break;
                default:
                    i = 1.1
            }
            for (r = 0; r < e; r += 1) n.push(i);
            return n
        };

        function createSizedArray(t) { return Array.apply(null, { length: t }) }

        function createNS(t) { return document.createElementNS(svgNS, t) }

        function createTag(t) { return document.createElement(t) }

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0) }, iterateDynamicProperties: function() { this._mdf = !1; var t, e = this.dynamicProperties.length; for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0) }, initDynamicPropertyContainer: function(t) { this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1 } };
        var getBlendMode = (Ma = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) { return Ma[t] || "" }),
            Ma, Matrix = function() {
                var t = Math.cos,
                    e = Math.sin,
                    i = Math.tan,
                    r = Math.round;

                function n() { return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this }

                function s(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function a(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(1, 0, 0, 0, 0, r, -n, 0, 0, n, r, 0, 0, 0, 0, 1)
                }

                function o(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(r, 0, n, 0, 0, 1, 0, 0, -n, 0, r, 0, 0, 0, 0, 1)
                }

                function l(i) {
                    if (0 === i) return this;
                    var r = t(i),
                        n = e(i);
                    return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function h(t, e) { return this._t(1, e, t, 1, 0, 0) }

                function c(t, e) { return this.shear(i(t), i(e)) }

                function f(r, n) {
                    var s = t(n),
                        a = e(n);
                    return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function u(t, e, i) { return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1) }

                function p(t, e, i, r, n, s, a, o, l, h, c, f, u, p, d, m) { return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = n, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = c, this.props[11] = f, this.props[12] = u, this.props[13] = p, this.props[14] = d, this.props[15] = m, this }

                function d(t, e, i) { return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this }

                function m(t, e, i, r, n, s, a, o, l, h, c, f, u, p, d, m) {
                    var g = this.props;
                    if (1 === t && 0 === e && 0 === i && 0 === r && 0 === n && 1 === s && 0 === a && 0 === o && 0 === l && 0 === h && 1 === c && 0 === f) return g[12] = g[12] * t + g[15] * u, g[13] = g[13] * s + g[15] * p, g[14] = g[14] * c + g[15] * d, g[15] = g[15] * m, this._identityCalculated = !1, this;
                    var y = g[0],
                        v = g[1],
                        _ = g[2],
                        x = g[3],
                        b = g[4],
                        w = g[5],
                        T = g[6],
                        S = g[7],
                        P = g[8],
                        E = g[9],
                        k = g[10],
                        A = g[11],
                        C = g[12],
                        M = g[13],
                        D = g[14],
                        F = g[15];
                    return g[0] = y * t + v * n + _ * l + x * u, g[1] = y * e + v * s + _ * h + x * p, g[2] = y * i + v * a + _ * c + x * d, g[3] = y * r + v * o + _ * f + x * m, g[4] = b * t + w * n + T * l + S * u, g[5] = b * e + w * s + T * h + S * p, g[6] = b * i + w * a + T * c + S * d, g[7] = b * r + w * o + T * f + S * m, g[8] = P * t + E * n + k * l + A * u, g[9] = P * e + E * s + k * h + A * p, g[10] = P * i + E * a + k * c + A * d, g[11] = P * r + E * o + k * f + A * m, g[12] = C * t + M * n + D * l + F * u, g[13] = C * e + M * s + D * h + F * p, g[14] = C * i + M * a + D * c + F * d, g[15] = C * r + M * o + D * f + F * m, this._identityCalculated = !1, this
                }

                function g() { return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity }

                function y(t) {
                    for (var e = 0; e < 16;) {
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1
                    }
                    return !0
                }

                function v(t) { var e; for (e = 0; e < 16; e += 1) t.props[e] = this.props[e] }

                function _(t) { var e; for (e = 0; e < 16; e += 1) this.props[e] = t[e] }

                function x(t, e, i) { return { x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14] } }

                function b(t, e, i) { return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12] }

                function w(t, e, i) { return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13] }

                function T(t, e, i) { return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14] }

                function S(t) {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        i = this.props[5] / e,
                        r = -this.props[1] / e,
                        n = -this.props[4] / e,
                        s = this.props[0] / e,
                        a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                        o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                    return [t[0] * i + t[1] * n + a, t[0] * r + t[1] * s + o, 0]
                }

                function P(t) {
                    var e, i = t.length,
                        r = [];
                    for (e = 0; e < i; e += 1) r[e] = S(t[e]);
                    return r
                }

                function E(t, e, i) {
                    var r = createTypedArray("float32", 6);
                    if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
                    else {
                        var n = this.props[0],
                            s = this.props[1],
                            a = this.props[4],
                            o = this.props[5],
                            l = this.props[12],
                            h = this.props[13];
                        r[0] = t[0] * n + t[1] * a + l, r[1] = t[0] * s + t[1] * o + h, r[2] = e[0] * n + e[1] * a + l, r[3] = e[0] * s + e[1] * o + h, r[4] = i[0] * n + i[1] * a + l, r[5] = i[0] * s + i[1] * o + h
                    }
                    return r
                }

                function k(t, e, i) { return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]] }

                function A(t, e) { if (this.isIdentity()) return t + "," + e; var i = this.props; return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100 }

                function C() { for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1; return i }

                function M(t) { return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? r(1e4 * t) / 1e4 : t }

                function D() { var t = this.props; return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")" }
                return function() { this.reset = n, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = f, this.shear = h, this.scale = u, this.setTransform = p, this.translate = d, this.transform = m, this.applyToPoint = x, this.applyToX = b, this.applyToY = w, this.applyToZ = T, this.applyToPointArray = k, this.applyToTriplePoints = E, this.applyToPointStringified = A, this.toCSS = C, this.to2dCSS = D, this.clone = v, this.cloneFromProps = _, this.equals = y, this.inversePoints = P, this.inversePoint = S, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset() }
            }();
        ! function(t, e) {
            var i, r = this,
                n = 256,
                s = "random",
                a = e.pow(n, 6),
                o = e.pow(2, 52),
                l = 2 * o,
                h = n - 1;

            function c(t) {
                var e, i = t.length,
                    r = this,
                    s = 0,
                    a = r.i = r.j = 0,
                    o = r.S = [];
                for (i || (t = [i++]); s < n;) o[s] = s++;
                for (s = 0; s < n; s++) o[s] = o[a = h & a + t[s % i] + (e = o[s])], o[a] = e;
                r.g = function(t) { for (var e, i = 0, s = r.i, a = r.j, o = r.S; t--;) e = o[s = h & s + 1], i = i * n + o[h & (o[s] = o[a = h & a + e]) + (o[a] = e)]; return r.i = s, r.j = a, i }
            }

            function f(t, e) { return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e }

            function u(t, e) { for (var i, r = t + "", n = 0; n < r.length;) e[h & n] = h & (i ^= 19 * e[h & n]) + r.charCodeAt(n++); return p(e) }

            function p(t) { return String.fromCharCode.apply(0, t) }
            e["seed" + s] = function(h, d, m) {
                var g = [],
                    y = u(function t(e, i) {
                        var r, n = [],
                            s = _typeof(e);
                        if (i && "object" == s)
                            for (r in e) try { n.push(t(e[r], i - 1)) } catch (t) {}
                        return n.length ? n : "string" == s ? e : e + "\0"
                    }((d = !0 === d ? { entropy: !0 } : d || {}).entropy ? [h, p(t)] : null === h ? function() {
                        try { i; var e = new Uint8Array(n); return (r.crypto || r.msCrypto).getRandomValues(e), p(e) } catch (e) {
                            var s = r.navigator,
                                a = s && s.plugins;
                            return [+new Date, r, a, r.screen, p(t)]
                        }
                    }() : h, 3), g),
                    v = new c(g),
                    _ = function() { for (var t = v.g(6), e = a, i = 0; t < o;) t = (t + i) * n, e *= n, i = v.g(1); for (; l <= t;) t /= 2, e /= 2, i >>>= 1; return (t + i) / e };
                return _.int32 = function() { return 0 | v.g(4) }, _.quick = function() { return v.g(4) / 4294967296 }, _.double = _, u(p(v.S), t), (d.pass || m || function(t, i, r, n) { return n && (n.S && f(n, v), t.state = function() { return f(v, {}) }), r ? (e[s] = t, i) : t })(_, y, "global" in d ? d.global : this == e, d.state)
            }, u(e.random(), t)
        }([], BMMath);
        var BezierFactory = function() {
            var t = { getBezierEasing: function(t, i, r, n, s) { var a = s || ("bez_" + t + "_" + i + "_" + r + "_" + n).replace(/\./g, "p"); if (e[a]) return e[a]; var o = new c([t, i, r, n]); return e[a] = o } },
                e = {},
                i = 11,
                r = 1 / (i - 1),
                n = "function" == typeof Float32Array;

            function s(t, e) { return 1 - 3 * e + 3 * t }

            function a(t, e) { return 3 * e - 6 * t }

            function o(t) { return 3 * t }

            function l(t, e, i) { return ((s(e, i) * t + a(e, i)) * t + o(e)) * t }

            function h(t, e, i) { return 3 * s(e, i) * t * t + 2 * a(e, i) * t + o(e) }

            function c(t) { this._p = t, this._mSampleValues = n ? new Float32Array(i) : new Array(i), this._precomputed = !1, this.get = this.get.bind(this) }
            return c.prototype = {
                get: function(t) {
                    var e = this._p[0],
                        i = this._p[1],
                        r = this._p[2],
                        n = this._p[3];
                    return this._precomputed || this._precompute(), e === i && r === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), i, n)
                },
                _precompute: function() {
                    var t = this._p[0],
                        e = this._p[1],
                        i = this._p[2],
                        r = this._p[3];
                    this._precomputed = !0, t === e && i === r || this._calcSampleValues()
                },
                _calcSampleValues: function() { for (var t = this._p[0], e = this._p[2], n = 0; n < i; ++n) this._mSampleValues[n] = l(n * r, t, e) },
                _getTForX: function(t) {
                    for (var e = this._p[0], n = this._p[2], s = this._mSampleValues, a = 0, o = 1, c = i - 1; o !== c && s[o] <= t; ++o) a += r;
                    var f = a + (t - s[--o]) / (s[o + 1] - s[o]) * r,
                        u = h(f, e, n);
                    return .001 <= u ? function(t, e, i, r) {
                        for (var n = 0; n < 4; ++n) {
                            var s = h(e, i, r);
                            if (0 === s) return e;
                            e -= (l(e, i, r) - t) / s
                        }
                        return e
                    }(t, f, e, n) : 0 === u ? f : function(t, e, i, r, n) { for (var s, a, o = 0; 0 < (s = l(a = e + (i - e) / 2, r, n) - t) ? i = a : e = a, 1e-7 < Math.abs(s) && ++o < 10;); return a }(t, a, a + r, e, n)
                }
            }, t
        }();

        function extendPrototype(t, e) {
            var i, r, n = t.length;
            for (i = 0; i < n; i += 1)
                for (var s in r = t[i].prototype) r.hasOwnProperty(s) && (e.prototype[s] = r[s])
        }

        function getDescriptor(t, e) { return Object.getOwnPropertyDescriptor(t, e) }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }

        function bezFunction() {
            function t(t, e, i, r, n, s) { var a = t * r + e * n + i * s - n * r - s * t - i * e; return -.001 < a && a < .001 }
            Math;
            var e = function(t, e, i, r) {
                var n, s, a, o, l, h, c = defaultCurveSegments,
                    f = 0,
                    u = [],
                    p = [],
                    d = bezier_length_pool.newElement();
                for (a = i.length, n = 0; n < c; n += 1) {
                    for (l = n / (c - 1), s = h = 0; s < a; s += 1) o = bm_pow(1 - l, 3) * t[s] + 3 * bm_pow(1 - l, 2) * l * i[s] + 3 * (1 - l) * bm_pow(l, 2) * r[s] + bm_pow(l, 3) * e[s], u[s] = o, null !== p[s] && (h += bm_pow(u[s] - p[s], 2)), p[s] = u[s];
                    h && (f += h = bm_sqrt(h)), d.percents[n] = l, d.lengths[n] = f
                }
                return d.addedLength = f, d
            };

            function i(t) { this.segmentLength = 0, this.points = new Array(t) }

            function r(t, e) { this.partialLength = t, this.point = e }
            var n, s = (n = {}, function(e, s, a, o) {
                var l = (e[0] + "_" + e[1] + "_" + s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                if (!n[l]) {
                    var h, c, f, u, p, d, m, g = defaultCurveSegments,
                        y = 0,
                        v = null;
                    2 === e.length && (e[0] != s[0] || e[1] != s[1]) && t(e[0], e[1], s[0], s[1], e[0] + a[0], e[1] + a[1]) && t(e[0], e[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) && (g = 2);
                    var _ = new i(g);
                    for (f = a.length, h = 0; h < g; h += 1) {
                        for (m = createSizedArray(f), p = h / (g - 1), c = d = 0; c < f; c += 1) u = bm_pow(1 - p, 3) * e[c] + 3 * bm_pow(1 - p, 2) * p * (e[c] + a[c]) + 3 * (1 - p) * bm_pow(p, 2) * (s[c] + o[c]) + bm_pow(p, 3) * s[c], m[c] = u, null !== v && (d += bm_pow(m[c] - v[c], 2));
                        y += d = bm_sqrt(d), _.points[h] = new r(d, m), v = m
                    }
                    _.segmentLength = y, n[l] = _
                }
                return n[l]
            });

            function a(t, e) {
                var i = e.percents,
                    r = e.lengths,
                    n = i.length,
                    s = bm_floor((n - 1) * t),
                    a = t * e.addedLength,
                    o = 0;
                if (s === n - 1 || 0 === s || a === r[s]) return i[s];
                for (var l = r[s] > a ? -1 : 1, h = !0; h;)
                    if (r[s] <= a && r[s + 1] > a ? (o = (a - r[s]) / (r[s + 1] - r[s]), h = !1) : s += l, s < 0 || n - 1 <= s) {
                        if (s === n - 1) return i[s];
                        h = !1
                    }
                return i[s] + (i[s + 1] - i[s]) * o
            }
            var o = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(t) {
                    var i, r = segments_length_pool.newElement(),
                        n = t.c,
                        s = t.v,
                        a = t.o,
                        o = t.i,
                        l = t._length,
                        h = r.lengths,
                        c = 0;
                    for (i = 0; i < l - 1; i += 1) h[i] = e(s[i], s[i + 1], a[i], o[i + 1]), c += h[i].addedLength;
                    return n && l && (h[i] = e(s[i], s[0], a[i], o[0]), c += h[i].addedLength), r.totalLength = c, r
                },
                getNewSegment: function(t, e, i, r, n, s, l) {
                    var h, c = a(n = n < 0 ? 0 : 1 < n ? 1 : n, l),
                        f = a(s = 1 < s ? 1 : s, l),
                        u = t.length,
                        p = 1 - c,
                        d = 1 - f,
                        m = p * p * p,
                        g = c * p * p * 3,
                        y = c * c * p * 3,
                        v = c * c * c,
                        _ = p * p * d,
                        x = c * p * d + p * c * d + p * p * f,
                        b = c * c * d + p * c * f + c * p * f,
                        w = c * c * f,
                        T = p * d * d,
                        S = c * d * d + p * f * d + p * d * f,
                        P = c * f * d + p * f * f + c * d * f,
                        E = c * f * f,
                        k = d * d * d,
                        A = f * d * d + d * f * d + d * d * f,
                        C = f * f * d + d * f * f + f * d * f,
                        M = f * f * f;
                    for (h = 0; h < u; h += 1) o[4 * h] = Math.round(1e3 * (m * t[h] + g * i[h] + y * r[h] + v * e[h])) / 1e3, o[4 * h + 1] = Math.round(1e3 * (_ * t[h] + x * i[h] + b * r[h] + w * e[h])) / 1e3, o[4 * h + 2] = Math.round(1e3 * (T * t[h] + S * i[h] + P * r[h] + E * e[h])) / 1e3, o[4 * h + 3] = Math.round(1e3 * (k * t[h] + A * i[h] + C * r[h] + M * e[h])) / 1e3;
                    return o
                },
                getPointInSegment: function(t, e, i, r, n, s) {
                    var o = a(n, s),
                        l = 1 - o;
                    return [Math.round(1e3 * (l * l * l * t[0] + (o * l * l + l * o * l + l * l * o) * i[0] + (o * o * l + l * o * o + o * l * o) * r[0] + o * o * o * e[0])) / 1e3, Math.round(1e3 * (l * l * l * t[1] + (o * l * l + l * o * l + l * l * o) * i[1] + (o * o * l + l * o * o + o * l * o) * r[1] + o * o * o * e[1])) / 1e3]
                },
                buildBezierData: s,
                pointOnLine2D: t,
                pointOnLine3D: function(e, i, r, n, s, a, o, l, h) {
                    if (0 === r && 0 === a && 0 === h) return t(e, i, n, s, o, l);
                    var c, f = Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - i, 2) + Math.pow(a - r, 2)),
                        u = Math.sqrt(Math.pow(o - e, 2) + Math.pow(l - i, 2) + Math.pow(h - r, 2)),
                        p = Math.sqrt(Math.pow(o - n, 2) + Math.pow(l - s, 2) + Math.pow(h - a, 2));
                    return -1e-4 < (c = u < f ? p < f ? f - u - p : p - u - f : u < p ? p - u - f : u - f - p) && c < 1e-4
                }
            }
        }! function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                var r = (new Date).getTime(),
                    n = Math.max(0, 16 - (r - t)),
                    s = setTimeout(function() { e(r + n) }, n);
                return t = r + n, s
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) })
        }();
        var bez = bezFunction();

        function dataFunctionManager() {
            function t(t, e) {
                for (var i = 0, r = e.length; i < r;) {
                    if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                    i += 1
                }
            }

            function e(t) {
                var r, n, s;
                for (r = t.length - 1; 0 <= r; r -= 1)
                    if ("sh" == t[r].ty)
                        if (t[r].ks.k.i) i(t[r].ks.k);
                        else
                            for (s = t[r].ks.k.length, n = 0; n < s; n += 1) t[r].ks.k[n].s && i(t[r].ks.k[n].s[0]), t[r].ks.k[n].e && i(t[r].ks.k[n].e[0]);
                else "gr" == t[r].ty && e(t[r].it)
            }

            function i(t) { var e, i = t.i.length; for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1] }

            function r(t, e) { var i = e ? e.split(".") : [100, 100, 100]; return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && void 0)) }
            var n, s = function() {
                    var t = [4, 4, 14];

                    function e(t) { var e, i, r, n = t.length; for (e = 0; e < n; e += 1) 5 === t[e].ty && (r = (i = t[e]).t.d, i.t.d = { k: [{ s: r, t: 0 }] }) }
                    return function(i) { if (r(t, i.v) && (e(i.layers), i.assets)) { var n, s = i.assets.length; for (n = 0; n < s; n += 1) i.assets[n].layers && e(i.assets[n].layers) } }
                }(),
                a = (n = [4, 7, 99], function(t) {
                    if (t.chars && !r(n, t.v)) {
                        var e, s, a, o, l, h = t.chars.length;
                        for (e = 0; e < h; e += 1)
                            if (t.chars[e].data && t.chars[e].data.shapes)
                                for (a = (l = t.chars[e].data.shapes[0].it).length, s = 0; s < a; s += 1)(o = l[s].ks.k).__converted || (i(l[s].ks.k), o.__converted = !0)
                    }
                }),
                o = function() {
                    var t = [4, 1, 9];

                    function e(t) {
                        var i, r, n, s = t.length;
                        for (i = 0; i < s; i += 1)
                            if ("gr" === t[i].ty) e(t[i].it);
                            else if ("fl" === t[i].ty || "st" === t[i].ty)
                            if (t[i].c.k && t[i].c.k[0].i)
                                for (n = t[i].c.k.length, r = 0; r < n; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                            else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                    }

                    function i(t) { var i, r = t.length; for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes) }
                    return function(e) { if (r(t, e.v) && (i(e.layers), e.assets)) { var n, s = e.assets.length; for (n = 0; n < s; n += 1) e.assets[n].layers && i(e.assets[n].layers) } }
                }(),
                l = function() {
                    var t = [4, 4, 18];

                    function e(t) {
                        var i, r, n;
                        for (i = t.length - 1; 0 <= i; i -= 1)
                            if ("sh" == t[i].ty)
                                if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                else
                                    for (n = t[i].ks.k.length, r = 0; r < n; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                        else "gr" == t[i].ty && e(t[i].it)
                    }

                    function i(t) {
                        var i, r, n, s, a, o, l = t.length;
                        for (r = 0; r < l; r += 1) {
                            if ((i = t[r]).hasMask) {
                                var h = i.masksProperties;
                                for (s = h.length, n = 0; n < s; n += 1)
                                    if (h[n].pt.k.i) h[n].pt.k.c = h[n].cl;
                                    else
                                        for (o = h[n].pt.k.length, a = 0; a < o; a += 1) h[n].pt.k[a].s && (h[n].pt.k[a].s[0].c = h[n].cl), h[n].pt.k[a].e && (h[n].pt.k[a].e[0].c = h[n].cl)
                            }
                            4 === i.ty && e(i.shapes)
                        }
                    }
                    return function(e) { if (r(t, e.v) && (i(e.layers), e.assets)) { var n, s = e.assets.length; for (n = 0; n < s; n += 1) e.assets[n].layers && i(e.assets[n].layers) } }
                }(),
                h = {
                    completeData: function(r, n) {
                        r.__complete || (o(r), s(r), a(r), l(r), function r(n, s, a) {
                            var o, l, h, c, f, u, p, d = n.length;
                            for (l = 0; l < d; l += 1)
                                if ("ks" in (o = n[l]) && !o.completed) {
                                    if (o.completed = !0, o.tt && (n[l - 1].td = o.tt), o.hasMask) {
                                        var m = o.masksProperties;
                                        for (c = m.length, h = 0; h < c; h += 1)
                                            if (m[h].pt.k.i) i(m[h].pt.k);
                                            else
                                                for (u = m[h].pt.k.length, f = 0; f < u; f += 1) m[h].pt.k[f].s && i(m[h].pt.k[f].s[0]), m[h].pt.k[f].e && i(m[h].pt.k[f].e[0])
                                    }
                                    0 === o.ty ? (o.layers = t(o.refId, s), r(o.layers, s, a)) : 4 === o.ty ? e(o.shapes) : 5 == o.ty && (0 !== (p = o).t.a.length || "m" in p.t.p || (p.singleShape = !0))
                                }
                        }(r.layers, r.assets, n), r.__complete = !0)
                    }
                };
            return h
        }
        var dataManager = dataFunctionManager(),
            FontManager = function() {
                var t = { w: 0, size: 0, shapes: [] },
                    e = [];

                function i(t, e) {
                    var i = createTag("span");
                    i.style.fontFamily = e;
                    var r = createTag("span");
                    r.innerHTML = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
                    var n = r.offsetWidth;
                    return r.style.fontFamily = t + ", " + e, { node: r, w: n, parent: i }
                }
                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var r = function() { this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now() };
                return r.getCombinedCharacterCodes = function() { return e }, r.prototype.addChars = function(t) {
                    if (t) {
                        this.chars || (this.chars = []);
                        var e, i, r, n = t.length,
                            s = this.chars.length;
                        for (e = 0; e < n; e += 1) {
                            for (i = 0, r = !1; i < s;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                            r || (this.chars.push(t[e]), s += 1)
                        }
                    }
                }, r.prototype.addFonts = function(t, e) {
                    if (t) {
                        if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                        var r, n, s, a, o = t.list,
                            l = o.length,
                            h = l;
                        for (r = 0; r < l; r += 1) {
                            var c, f, u = !0;
                            if (o[r].loaded = !1, o[r].monoCase = i(o[r].fFamily, "monospace"), o[r].sansCase = i(o[r].fFamily, "sans-serif"), o[r].fPath) {
                                if ("p" === o[r].fOrigin || 3 === o[r].origin) {
                                    if (0 < (c = document.querySelectorAll('style[f-forigin="p"][f-family="' + o[r].fFamily + '"], style[f-origin="3"][f-family="' + o[r].fFamily + '"]')).length && (u = !1), u) {
                                        var p = createTag("style");
                                        p.setAttribute("f-forigin", o[r].fOrigin), p.setAttribute("f-origin", o[r].origin), p.setAttribute("f-family", o[r].fFamily), p.type = "text/css", p.innerHTML = "@font-face {font-family: " + o[r].fFamily + "; font-style: normal; src: url('" + o[r].fPath + "');}", e.appendChild(p)
                                    }
                                } else if ("g" === o[r].fOrigin || 1 === o[r].origin) {
                                    for (c = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), f = 0; f < c.length; f++) - 1 !== c[f].href.indexOf(o[r].fPath) && (u = !1);
                                    if (u) {
                                        var d = createTag("link");
                                        d.setAttribute("f-forigin", o[r].fOrigin), d.setAttribute("f-origin", o[r].origin), d.type = "text/css", d.rel = "stylesheet", d.href = o[r].fPath, document.body.appendChild(d)
                                    }
                                } else if ("t" === o[r].fOrigin || 2 === o[r].origin) {
                                    for (c = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), f = 0; f < c.length; f++) o[r].fPath === c[f].src && (u = !1);
                                    if (u) {
                                        var m = createTag("link");
                                        m.setAttribute("f-forigin", o[r].fOrigin), m.setAttribute("f-origin", o[r].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", o[r].fPath), e.appendChild(m)
                                    }
                                }
                            } else o[r].loaded = !0, h -= 1;
                            o[r].helper = (n = e, s = o[r], a = void 0, (a = createNS("text")).style.fontSize = "100px", a.setAttribute("font-family", s.fFamily), a.setAttribute("font-style", s.fStyle), a.setAttribute("font-weight", s.fWeight), a.textContent = "1", s.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", s.fClass)) : a.style.fontFamily = s.fFamily, n.appendChild(a), createTag("canvas").getContext("2d").font = s.fWeight + " " + s.fStyle + " 100px " + s.fFamily, a), o[r].cache = {}, this.fonts.push(o[r])
                        }
                        0 === h ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else this.isLoaded = !0
                }, r.prototype.getCharData = function(e, i, r) {
                    for (var n = 0, s = this.chars.length; n < s;) {
                        if (this.chars[n].ch === e && this.chars[n].style === i && this.chars[n].fFamily === r) return this.chars[n];
                        n += 1
                    }
                    return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && console.warn("Missing character from exported characters list: ", e, i, r), t
                }, r.prototype.getFontByName = function(t) {
                    for (var e = 0, i = this.fonts.length; e < i;) {
                        if (this.fonts[e].fName === t) return this.fonts[e];
                        e += 1
                    }
                    return this.fonts[0]
                }, r.prototype.measureText = function(t, e, i) {
                    var r = this.getFontByName(e),
                        n = t.charCodeAt(0);
                    if (!r.cache[n + 1]) {
                        var s = r.helper;
                        if (" " === t) {
                            s.textContent = "|" + t + "|";
                            var a = s.getComputedTextLength();
                            s.textContent = "||";
                            var o = s.getComputedTextLength();
                            r.cache[n + 1] = (a - o) / 100
                        } else s.textContent = t, r.cache[n + 1] = s.getComputedTextLength() / 100
                    }
                    return r.cache[n + 1] * i
                }, r.prototype.checkLoadedFonts = function() {
                    var t, e, i, r = this.fonts.length,
                        n = r;
                    for (t = 0; t < r; t += 1) this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (n -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (n -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                    0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() { this.isLoaded = !0 }.bind(this), 0)
                }, r.prototype.loaded = function() { return this.isLoaded }, r
            }(),
            PropertyFactory = function() {
                var t = initialDefaultFrame,
                    e = Math.abs;

                function i(t, e) {
                    var i, n = this.offsetTime;
                    "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                    for (var s, a, o, l, h, c, f, u, p = e.lastIndex, d = p, m = this.keyframes.length - 1, g = !0; g;) {
                        if (s = this.keyframes[d], a = this.keyframes[d + 1], d === m - 1 && t >= a.t - n) { s.h && (s = a), p = 0; break }
                        if (a.t - n > t) { p = d; break }
                        d < m - 1 ? d += 1 : (p = 0, g = !1)
                    }
                    var y, v, _, x, b, w, T, S, P, E, k = a.t - n,
                        A = s.t - n;
                    if (s.to) {
                        s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                        var C = s.bezierData;
                        if (k <= t || t < A) { var M = k <= t ? C.points.length - 1 : 0; for (l = C.points[M].point.length, o = 0; o < l; o += 1) i[o] = C.points[M].point[o] } else {
                            s.__fnct ? u = s.__fnct : (u = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = u), h = u((t - A) / (k - A));
                            var D, F = C.segmentLength * h,
                                O = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                            for (f = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, g = !0, c = C.points.length; g;) {
                                if (O += C.points[f].partialLength, 0 === F || 0 === h || f === C.points.length - 1) { for (l = C.points[f].point.length, o = 0; o < l; o += 1) i[o] = C.points[f].point[o]; break }
                                if (O <= F && F < O + C.points[f + 1].partialLength) { for (D = (F - O) / C.points[f + 1].partialLength, l = C.points[f].point.length, o = 0; o < l; o += 1) i[o] = C.points[f].point[o] + (C.points[f + 1].point[o] - C.points[f].point[o]) * D; break }
                                f < c - 1 ? f += 1 : g = !1
                            }
                            e._lastPoint = f, e._lastAddedLength = O - C.points[f].partialLength, e._lastKeyframeIndex = d
                        }
                    } else {
                        var I, R, L, N, B;
                        if (m = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h)
                            if (k <= t) i[0] = y[0], i[1] = y[1], i[2] = y[2];
                            else if (t <= A) i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];
                        else {
                            v = i, x = (_ = function(t, e, i) {
                                var r, n, s, a, o, l = [],
                                    h = t[0],
                                    c = t[1],
                                    f = t[2],
                                    u = t[3],
                                    p = e[0],
                                    d = e[1],
                                    m = e[2],
                                    g = e[3];
                                return (n = h * p + c * d + f * m + u * g) < 0 && (n = -n, p = -p, d = -d, m = -m, g = -g), o = 1e-6 < 1 - n ? (r = Math.acos(n), s = Math.sin(r), a = Math.sin((1 - i) * r) / s, Math.sin(i * r) / s) : (a = 1 - i, i), l[0] = a * h + o * p, l[1] = a * c + o * d, l[2] = a * f + o * m, l[3] = a * u + o * g, l
                            }(r(s.s), r(y), (t - A) / (k - A)))[0], b = _[1], w = _[2], T = _[3], S = Math.atan2(2 * b * T - 2 * x * w, 1 - 2 * b * b - 2 * w * w), P = Math.asin(2 * x * b + 2 * w * T), E = Math.atan2(2 * x * T - 2 * b * w, 1 - 2 * x * x - 2 * w * w), v[0] = S / degToRads, v[1] = P / degToRads, v[2] = E / degToRads
                        } else
                            for (d = 0; d < m; d += 1) 1 !== s.h && (h = k <= t ? 1 : t < A ? 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[d] ? u = s.__fnct[d] : (I = void 0 === s.o.x[d] ? s.o.x[0] : s.o.x[d], R = void 0 === s.o.y[d] ? s.o.y[0] : s.o.y[d], L = void 0 === s.i.x[d] ? s.i.x[0] : s.i.x[d], N = void 0 === s.i.y[d] ? s.i.y[0] : s.i.y[d], u = BezierFactory.getBezierEasing(I, R, L, N).get, s.__fnct[d] = u)) : s.__fnct ? u = s.__fnct : (I = s.o.x, R = s.o.y, L = s.i.x, N = s.i.y, u = BezierFactory.getBezierEasing(I, R, L, N).get, s.__fnct = u), u((t - A) / (k - A)))), y = a.s || s.e, B = 1 === s.h ? s.s[d] : s.s[d] + (y[d] - s.s[d]) * h, 1 === m ? i = B : i[d] = B
                    }
                    return e.lastIndex = p, i
                }

                function r(t) {
                    var e = t[0] * degToRads,
                        i = t[1] * degToRads,
                        r = t[2] * degToRads,
                        n = Math.cos(e / 2),
                        s = Math.cos(i / 2),
                        a = Math.cos(r / 2),
                        o = Math.sin(e / 2),
                        l = Math.sin(i / 2),
                        h = Math.sin(r / 2);
                    return [o * l * a + n * s * h, o * s * a + n * l * h, n * l * a - o * s * h, n * s * a - o * l * h]
                }

                function n() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                        i = this.keyframes[0].t - this.offsetTime,
                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r && r <= e || this._caching.lastFrame < i && e < i))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var n = this.interpolateValue(e, this._caching);
                        this.pv = n
                    }
                    return this._caching.lastFrame = e, this.pv
                }

                function s(t) {
                    var i;
                    if ("unidimensional" === this.propType) i = t * this.mult, 1e-5 < e(this.v - i) && (this.v = i, this._mdf = !0);
                    else
                        for (var r = 0, n = this.v.length; r < n;) i = t[r] * this.mult, 1e-5 < e(this.v[r] - i) && (this.v[r] = i, this._mdf = !0), r += 1
                }

                function a() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var t, e = this.effectsSequence.length,
                                i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function o(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

                function l(t, e, i, r) { this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.addEffect = o }

                function h(t, e, i, r) {
                    this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var n, l = e.k.length;
                    for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), createTypedArray("float32", l), this.vel = createTypedArray("float32", l), n = 0; n < l; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = s, this.addEffect = o
                }

                function c(e, r, l, h) { this.propType = "unidimensional", this.keyframes = r.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = { lastFrame: t, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = r, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.effectsSequence = [n.bind(this)], this.addEffect = o }

                function f(e, r, l, h) {
                    this.propType = "multidimensional";
                    var c, f, u, p, d, m = r.k.length;
                    for (c = 0; c < m - 1; c += 1) r.k[c].to && r.k[c].s && r.k[c].e && (f = r.k[c].s, u = r.k[c].e, p = r.k[c].to, d = r.k[c].ti, (2 === f.length && (f[0] !== u[0] || f[1] !== u[1]) && bez.pointOnLine2D(f[0], f[1], u[0], u[1], f[0] + p[0], f[1] + p[1]) && bez.pointOnLine2D(f[0], f[1], u[0], u[1], u[0] + d[0], u[1] + d[1]) || 3 === f.length && (f[0] !== u[0] || f[1] !== u[1] || f[2] !== u[2]) && bez.pointOnLine3D(f[0], f[1], f[2], u[0], u[1], u[2], f[0] + p[0], f[1] + p[1], f[2] + p[2]) && bez.pointOnLine3D(f[0], f[1], f[2], u[0], u[1], u[2], u[0] + d[0], u[1] + d[1], u[2] + d[2])) && (r.k[c].to = null, r.k[c].ti = null), f[0] === u[0] && f[1] === u[1] && 0 === p[0] && 0 === p[1] && 0 === d[0] && 0 === d[1] && (2 === f.length || f[2] === u[2] && 0 === p[2] && 0 === d[2]) && (r.k[c].to = null, r.k[c].ti = null));
                    this.effectsSequence = [n.bind(this)], this.keyframes = r.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.frameId = -1;
                    var g = r.k[0].s.length;
                    for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), c = 0; c < g; c += 1) this.v[c] = t, this.pv[c] = t;
                    this._caching = { lastFrame: t, lastIndex: 0, value: createTypedArray("float32", g) }, this.addEffect = o
                }
                return {
                    getProp: function(t, e, i, r, n) {
                        var s;
                        if (e.k.length)
                            if ("number" == typeof e.k[0]) s = new h(t, e, r, n);
                            else switch (i) {
                                case 0:
                                    s = new c(t, e, r, n);
                                    break;
                                case 1:
                                    s = new f(t, e, r, n)
                            } else s = new l(t, e, r, n);
                        return s.effectsSequence.length && n.addDynamicProperty(s), s
                    }
                }
            }(),
            TransformPropertyFactory = function() {
                function t(t, e, i) {
                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this), e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) { var r, n = e.or.k.length; for (r = 0; r < n; r += 1) e.or.k[r].to = e.or.k[r].ti = null }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return t.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var e, i, r = this.elem.globalData.frameRate;
                                    if (this.p && this.p.keyframes && this.p.getValueAtTime) i = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / r, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        e = [], i = [];
                                        var n = this.px,
                                            s = this.py;
                                        n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (e[0] = n.getValueAtTime((n.keyframes[0].t + .01) / r, 0), e[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), i[0] = n.getValueAtTime(n.keyframes[0].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (e[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0), e[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (e = [n.pv, s.pv], i[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / r, n.offsetTime), i[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                                    }
                                    this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            if (this.r) {
                                if (this.r.effectsSequence.length) return;
                                this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                            } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(t) { this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0 }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(e, i, r) { return new t(e, i, r) } }
            }();

        function ShapePath() { this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength) }
        ShapePath.prototype.setPathData = function(t, e) { this.c = t, this.setLength(e); for (var i = 0; i < e;) this.v[i] = point_pool.newElement(), this.o[i] = point_pool.newElement(), this.i[i] = point_pool.newElement(), i += 1 }, ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() { this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2 }, ShapePath.prototype.setXYAt = function(t, e, i, r, n) {
            var s;
            switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                case "v":
                    s = this.v;
                    break;
                case "i":
                    s = this.i;
                    break;
                case "o":
                    s = this.o
            }(!s[r] || s[r] && !n) && (s[r] = point_pool.newElement()), s[r][0] = t, s[r][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, i, r, n, s, a, o) { this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(n, s, "i", a, o) }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v,
                i = this.o,
                r = this.i,
                n = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), n = 1);
            var s, a = this._length - 1,
                o = this._length;
            for (s = n; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], s, !1), a -= 1;
            return t
        };
        var ShapePropertyFactory = function() {
                var t = -999999;

                function e(t, e, i) {
                    var r, n, s, a, o, l, h, c, f, u = i.lastIndex,
                        p = this.keyframes;
                    if (t < p[0].t - this.offsetTime) r = p[0].s[0], s = !0, u = 0;
                    else if (t >= p[p.length - 1].t - this.offsetTime) r = p[p.length - 1].s ? p[p.length - 1].s[0] : p[p.length - 2].e[0], s = !0;
                    else {
                        for (var d, m, g = u, y = p.length - 1, v = !0; v && (d = p[g], !((m = p[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
                        if (u = g, !(s = 1 === d.h)) {
                            if (t >= m.t - this.offsetTime) c = 1;
                            else if (t < d.t - this.offsetTime) c = 0;
                            else {
                                var _;
                                d.__fnct ? _ = d.__fnct : (_ = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = _), c = _((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                            }
                            n = m.s ? m.s[0] : d.e[0]
                        }
                        r = d.s[0]
                    }
                    for (l = e._length, h = r.i[0].length, i.lastIndex = u, a = 0; a < l; a += 1)
                        for (o = 0; o < h; o += 1) f = s ? r.i[a][o] : r.i[a][o] + (n.i[a][o] - r.i[a][o]) * c, e.i[a][o] = f, f = s ? r.o[a][o] : r.o[a][o] + (n.o[a][o] - r.o[a][o]) * c, e.o[a][o] = f, f = s ? r.v[a][o] : r.v[a][o] + (n.v[a][o] - r.v[a][o]) * c, e.v[a][o] = f
                }

                function i() { this.paths = this.localShapeCollection }

                function r(t) {
                    (function(t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var i, r = t._length;
                        for (i = 0; i < r; i += 1)
                            if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                        return !0
                    })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function n() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            this.lock = !0, this._mdf = !1;
                            var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                i = this.effectsSequence.length;
                            for (t = 0; t < i; t += 1) e = this.effectsSequence[t](e);
                            this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function s(t, e, r) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var n = 3 === r ? e.pt.k : e.ks.k;
                    this.v = shape_pool.clone(n), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                }

                function a(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

                function o(e, r, n) {
                    this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === n ? r.pt.k : r.ks.k, this.k = !0, this.kf = !0;
                    var s = this.keyframes[0].s[0].i.length;
                    this.keyframes[0].s[0].i[0].length, this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [function() {
                        var e = this.comp.renderedFrame - this.offsetTime,
                            i = this.keyframes[0].t - this.offsetTime,
                            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            n = this._caching.lastFrame;
                        return n !== t && (n < i && e < i || r < n && r < e) || (this._caching.lastIndex = n < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                    }.bind(this)]
                }
                s.prototype.interpolateShape = e, s.prototype.getValue = n, s.prototype.setVValue = r, s.prototype.addEffect = a, o.prototype.getValue = n, o.prototype.interpolateShape = e, o.prototype.setVValue = r, o.prototype.addEffect = a;
                var l = function() {
                        var t = roundCorner;

                        function e(t, e) { this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath()) }
                        return e.prototype = {
                            reset: i,
                            getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath()) },
                            convertEllToPath: function() {
                                var e = this.p.v[0],
                                    i = this.p.v[1],
                                    r = this.s.v[0] / 2,
                                    n = this.s.v[1] / 2,
                                    s = 3 !== this.d,
                                    a = this.v;
                                a.v[0][0] = e, a.v[0][1] = i - n, a.v[1][0] = s ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + n, a.v[3][0] = s ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = s ? e - r * t : e + r * t, a.i[0][1] = i - n, a.i[1][0] = s ? e + r : e - r, a.i[1][1] = i - n * t, a.i[2][0] = s ? e + r * t : e - r * t, a.i[2][1] = i + n, a.i[3][0] = s ? e - r : e + r, a.i[3][1] = i + n * t, a.o[0][0] = s ? e + r * t : e - r * t, a.o[0][1] = i - n, a.o[1][0] = s ? e + r : e - r, a.o[1][1] = i + n * t, a.o[2][0] = s ? e - r * t : e + r * t, a.o[2][1] = i + n, a.o[3][0] = s ? e - r : e + r, a.o[3][1] = i - n * t
                            }
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(),
                    h = function() {
                        function t(t, e) { this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath()) }
                        return t.prototype = {
                            reset: i,
                            getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath()) },
                            convertStarToPath: function() {
                                var t, e, i, r, n = 2 * Math.floor(this.pt.v),
                                    s = 2 * Math.PI / n,
                                    a = !0,
                                    o = this.or.v,
                                    l = this.ir.v,
                                    h = this.os.v,
                                    c = this.is.v,
                                    f = 2 * Math.PI * o / (2 * n),
                                    u = 2 * Math.PI * l / (2 * n),
                                    p = -Math.PI / 2;
                                p += this.r.v;
                                var d = 3 === this.data.d ? -1 : 1;
                                for (t = this.v._length = 0; t < n; t += 1) {
                                    i = a ? h : c, r = a ? f : u;
                                    var m = (e = a ? o : l) * Math.cos(p),
                                        g = e * Math.sin(p),
                                        y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                        v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                    m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * r * i * d, g - v * r * i * d, m + y * r * i * d, g + v * r * i * d, t, !0), a = !a, p += s * d
                                }
                            },
                            convertPolygonToPath: function() {
                                var t, e = Math.floor(this.pt.v),
                                    i = 2 * Math.PI / e,
                                    r = this.or.v,
                                    n = this.os.v,
                                    s = 2 * Math.PI * r / (4 * e),
                                    a = -Math.PI / 2,
                                    o = 3 === this.data.d ? -1 : 1;
                                for (a += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                                    var l = r * Math.cos(a),
                                        h = r * Math.sin(a),
                                        c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                        f = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                    l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - c * s * n * o, h - f * s * n * o, l + c * s * n * o, h + f * s * n * o, t, !0), a += i * o
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }(),
                    c = function() {
                        function t(t, e) { this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath()) }
                        return t.prototype = {
                            convertRectToPath: function() {
                                var t = this.p.v[0],
                                    e = this.p.v[1],
                                    i = this.s.v[0] / 2,
                                    r = this.s.v[1] / 2,
                                    n = bm_min(i, r, this.r.v),
                                    s = n * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + n, t + i, e - r + s, 0, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - s, t + i, e + r - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e + r, t + i - n, e + r, t + i - s, e + r, 2, !0), this.v.setTripleAt(t - i + n, e + r, t - i + s, e + r, t - i + n, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + s, t - i, e - r + n, 5, !0), this.v.setTripleAt(t - i + n, e - r, t - i + n, e - r, t - i + s, e - r, 6, !0), this.v.setTripleAt(t + i - n, e - r, t + i - s, e - r, t + i - n, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + s, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + s, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + s, t + i, e - r + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e - r, t + i - n, e - r, t + i - s, e - r, 1, !0), this.v.setTripleAt(t - i + n, e - r, t - i + s, e - r, t - i + n, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + n, t - i, e - r + s, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i + n, e + r, t - i + n, e + r, t - i + s, e + r, 5, !0), this.v.setTripleAt(t + i - n, e + r, t + i - s, e + r, t + i - n, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - n, t + i, e + r - s, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + s, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - s, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - s, e + r, t + i, e + r, 3, !0)))
                            },
                            getValue: function(t) { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath()) },
                            reset: i
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }();
                return { getShapeProp: function(t, e, i) { var r; return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new s(t, e, i) : 5 === i ? r = new c(t, e) : 6 === i ? r = new l(t, e) : 7 === i && (r = new h(t, e)), r.k && t.addDynamicProperty(r), r }, getConstructorFunction: function() { return s }, getKeyframedConstructorFunction: function() { return o } }
            }(),
            ShapeModifiers = (Tr = {}, Ur = {}, Tr.registerModifier = function(t, e) { Ur[t] || (Ur[t] = e) }, Tr.getModifier = function(t, e, i) { return new Ur[t](e, i) }, Tr),
            Tr, Ur;

        function ShapeModifier() {}

        function TrimModifier() {}

        function RoundCornersModifier() {}

        function RepeaterModifier() {}

        function ShapeCollection() { this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength) }

        function DashProperty(t, e, i, r) {
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
            var n, s, a = e.length || 0;
            for (n = 0; n < a; n += 1) s = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[n] = { n: e[n].n, p: s };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function GradientProperty(t, e, i) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                var e = { shape: t.sh, data: t, localShapeCollection: shapeCollection_pool.newShapeCollection() };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function(t, e) { this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, ShapeModifier.prototype.processKeys = function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties()) }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) { this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length }, TrimModifier.prototype.addShapeToModifier = function(t) { t.pathsData = [] }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, n) {
            var s = [];
            e <= 1 ? s.push({ s: t, e: e }) : 1 <= t ? s.push({ s: t - 1, e: e - 1 }) : (s.push({ s: t, e: 1 }), s.push({ s: 0, e: e - 1 }));
            var a, o, l = [],
                h = s.length;
            for (a = 0; a < h; a += 1) {
                var c, f;
                (o = s[a]).e * n < r || o.s * n > r + i || (c = o.s * n <= r ? 0 : (o.s * n - r) / i, f = o.e * n >= r + i ? 1 : (o.e * n - r) / i, l.push([c, f]))
            }
            return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) { var e, i = t.length; for (e = 0; e < i; e += 1) segments_length_pool.release(t[e]); return t.length = 0, t }, TrimModifier.prototype.processShapes = function(t) {
            var e, i, r;
            if (this._mdf || t) {
                var n = this.o.v % 360 / 360;
                if (n < 0 && (n += 1), e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + n, (i = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + n) < e) {
                    var s = e;
                    e = i, i = s
                }
                e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
            } else e = this.sValue, i = this.eValue;
            var a, o, l, h, c, f, u = this.shapes.length,
                p = 0;
            if (i === e)
                for (a = 0; a < u; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection;
            else if (1 === i && 0 === e || 0 === i && 1 === e) {
                if (this._mdf)
                    for (a = 0; a < u; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
            } else {
                var d, m, g = [];
                for (a = 0; a < u; a += 1)
                    if ((d = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (l = (r = d.shape.paths)._length, f = 0, !d.shape._mdf && d.pathsData.length) f = d.totalShapeLength;
                        else {
                            for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(r.shapes[o]), h.push(c), f += c.totalLength;
                            d.totalShapeLength = f, d.pathsData = h
                        }
                        p += f, d.shape._mdf = !0
                    } else d.shape.paths = d.localShapeCollection;
                var y, v = e,
                    _ = i,
                    x = 0;
                for (a = u - 1; 0 <= a; a -= 1)
                    if ((d = this.shapes[a]).shape._mdf) {
                        for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < u ? (y = this.calculateShapeEdges(e, i, d.totalShapeLength, x, p), x += d.totalShapeLength) : y = [
                                [v, _]
                            ], l = y.length, o = 0; o < l; o += 1) {
                            v = y[o][0], _ = y[o][1], g.length = 0, _ <= 1 ? g.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * _ }) : 1 <= v ? g.push({ s: d.totalShapeLength * (v - 1), e: d.totalShapeLength * (_ - 1) }) : (g.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), g.push({ s: 0, e: d.totalShapeLength * (_ - 1) }));
                            var b = this.addShapes(d, g[0]);
                            if (g[0].s !== g[0].e) {
                                if (1 < g.length)
                                    if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                        var w = b.pop();
                                        this.addPaths(b, m), b = this.addShapes(d, g[1], w)
                                    } else this.addPaths(b, m), b = this.addShapes(d, g[1]);
                                this.addPaths(b, m)
                            }
                        }
                        d.shape.paths = m
                    }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) { var i, r = t.length; for (i = 0; i < r; i += 1) e.addShape(t[i]) }, TrimModifier.prototype.addSegment = function(t, e, i, r, n, s, a) { n.setXYAt(e[0], e[1], "o", s), n.setXYAt(i[0], i[1], "i", s + 1), a && n.setXYAt(t[0], t[1], "v", s), n.setXYAt(r[0], r[1], "v", s + 1) }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) { e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1) }, TrimModifier.prototype.addShapes = function(t, e, i) {
            var r, n, s, a, o, l, h, c, f = t.pathsData,
                u = t.shape.paths.shapes,
                p = t.shape.paths._length,
                d = 0,
                m = [],
                g = !0;
            for (c = i ? (o = i._length, i._length) : (i = shape_pool.newElement(), o = 0), m.push(i), r = 0; r < p; r += 1) {
                for (l = f[r].lengths, i.c = u[r].c, s = u[r].c ? l.length : l.length + 1, n = 1; n < s; n += 1)
                    if (d + (a = l[n - 1]).addedLength < e.s) d += a.addedLength, i.c = !1;
                    else {
                        if (d > e.e) { i.c = !1; break }
                        e.s <= d && e.e >= d + a.addedLength ? (this.addSegment(u[r].v[n - 1], u[r].o[n - 1], u[r].i[n], u[r].v[n], i, o, g), g = !1) : (h = bez.getNewSegment(u[r].v[n - 1], u[r].v[n], u[r].o[n - 1], u[r].i[n], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, l[n - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1), d += a.addedLength, o += 1
                    }
                if (u[r].c && l.length) {
                    if (a = l[n - 1], d <= e.e) {
                        var y = l[n - 1].addedLength;
                        e.s <= d && e.e >= d + y ? (this.addSegment(u[r].v[n - 1], u[r].o[n - 1], u[r].i[0], u[r].v[0], i, o, g), g = !1) : (h = bez.getNewSegment(u[r].v[n - 1], u[r].v[0], u[r].o[n - 1], u[r].i[0], (e.s - d) / y, (e.e - d) / y, l[n - 1]), this.addSegmentFromArray(h, i, o, g), g = !1, i.c = !1)
                    } else i.c = !1;
                    d += a.addedLength, o += 1
                }
                if (i._length && (i.setXYAt(i.v[c][0], i.v[c][1], "i", c), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                r < p - 1 && (i = shape_pool.newElement(), g = !0, m.push(i), o = 0)
            }
            return m
        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var i = shape_pool.newElement();
            i.c = t.c;
            var r, n, s, a, o, l, h, c, f, u, p, d, m, g = t._length,
                y = 0;
            for (r = 0; r < g; r += 1) n = t.v[r], a = t.o[r], s = t.i[r], n[0] === a[0] && n[1] === a[1] && n[0] === s[0] && n[1] === s[1] ? 0 !== r && r !== g - 1 || t.c ? (o = 0 === r ? t.v[g - 1] : t.v[r - 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = d = n[0] + (o[0] - n[0]) * h, f = m = n[1] - (n[1] - o[1]) * h, u = c - (c - n[0]) * roundCorner, p = f - (f - n[1]) * roundCorner, i.setTripleAt(c, f, u, p, d, m, y), y += 1, o = r === g - 1 ? t.v[0] : t.v[r + 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = u = n[0] + (o[0] - n[0]) * h, f = p = n[1] + (o[1] - n[1]) * h, d = c - (c - n[0]) * roundCorner, m = f - (f - n[1]) * roundCorner, i.setTripleAt(c, f, u, p, d, m, y)) : i.setTripleAt(n[0], n[1], a[0], a[1], s[0], s[1], y) : i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], y), y += 1;
            return i
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, i, r, n, s, a, o = this.shapes.length,
                l = this.rd.v;
            if (0 !== l)
                for (i = 0; i < o; i += 1) {
                    if ((s = this.shapes[i]).shape.paths, a = s.localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l));
                    s.shape.paths = s.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, n, s) {
            var a = s ? -1 : 1,
                o = r.s.v[0] + (1 - r.s.v[0]) * (1 - n),
                l = r.s.v[1] + (1 - r.s.v[1]) * (1 - n);
            t.translate(r.p.v[0] * a * n, r.p.v[1] * a * n, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * n), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(s ? 1 / o : o, s ? 1 / l : l), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, i, r) {
            for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); 0 < i;) i -= 1, this._elements.unshift(e[i]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) { var e, i = t.length; for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it) }, RepeaterModifier.prototype.cloneElements = function(t) { t.length; var e = JSON.parse(JSON.stringify(t)); return this.resetElements(e), e }, RepeaterModifier.prototype.changeGroupRender = function(t, e) { var i, r = t.length; for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e) }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, i, r, n, s;
            if (this._mdf || t) {
                var a, o = Math.ceil(this.c.v);
                if (this._groups.length < o) {
                    for (; this._groups.length < o;) {
                        var l = { it: this.cloneElements(this._elements), ty: "gr" };
                        l.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                    }
                    this.elem.reloadShapes()
                }
                for (r = s = 0; r <= this._groups.length - 1; r += 1) a = s < o, this._groups[r]._render = a, this.changeGroupRender(this._groups[r].it, a), s += 1;
                this._currentCopies = o;
                var h = this.o.v,
                    c = h % 1,
                    f = 0 < h ? Math.floor(h) : Math.ceil(h),
                    u = (this.tr.v.props, this.pMatrix.props),
                    p = this.rMatrix.props,
                    d = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var m, g, y = 0;
                if (0 < h) {
                    for (; y < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
                    c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1), y += c)
                } else if (h < 0) {
                    for (; f < y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
                    c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0), y -= c)
                }
                for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                    if (g = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== y) {
                        for ((0 !== r && 1 === n || r !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), m = 0; m < g; m += 1) i[m] = this.matrix.props[m];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), m = 0; m < g; m += 1) i[m] = this.matrix.props[m];
                    y += 1, s -= 1, r += n
                }
            } else
                for (s = this._currentCopies, r = 0, n = 1; s;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, r += n
        }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) { this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1 }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
            this._length = 0
        }, DashProperty.prototype.getValue = function(t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0,
                    i = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
            for (var i = 0, r = this.o.length / 2; i < r;) {
                if (.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;
                i += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, i, r, n = 4 * this.data.p;
                for (e = 0; e < n; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                if (this.o.length)
                    for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);
        var buildShapeString = function(t, e, i, r) {
                if (0 === e) return "";
                var n, s = t.o,
                    a = t.i,
                    o = t.v,
                    l = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                for (n = 1; n < e; n += 1) l += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[n][0], a[n][1]) + " " + r.applyToPointStringified(o[n][0], o[n][1]);
                return i && e && (l += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
            },
            ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                }();

                function e() { this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null) }

                function i(e) {
                    var i = function(t, e, i) {
                            var r = "";
                            if (t.e) r = t.p;
                            else if (e) { var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), r = e + n } else r = i, r += t.u ? t.u : "", r += t.p;
                            return r
                        }(e, this.assetsPath, this.path),
                        r = createTag("img");
                    r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded.bind(this), !1), r.addEventListener("error", function() { n.img = t, this._imageLoaded() }.bind(this), !1), r.src = i;
                    var n = { img: r, assetData: e };
                    return n
                }

                function r(t, e) { this.imagesLoadedCb = e; var i, r = t.length; for (i = 0; i < r; i += 1) t[i].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[i]))) }

                function n(t) { this.path = t || "" }

                function s(t) { this.assetsPath = t || "" }

                function a(t) {
                    for (var e = 0, i = this.images.length; e < i;) {
                        if (this.images[e].assetData === t) return this.images[e].img;
                        e += 1
                    }
                }

                function o() { this.imagesLoadedCb = null, this.images.length = 0 }

                function l() { return this.totalImages === this.loadedAssets }
                return function() { this.loadAssets = r, this.setAssetsPath = s, this.setPath = n, this.loaded = l, this.destroy = o, this.getImage = a, this._createImageData = i, this._imageLoaded = e, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = [] }
            }(),
            featureSupport = (lw = { maskType: !0 }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (lw.maskType = !1), lw),
            lw, filtersFactory = (mw = {}, mw.createFilter = function(t) { var e = createNS("filter"); return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e }, mw.createAlphaToLuminanceFilter = function() { var t = createNS("feColorMatrix"); return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t }, mw),
            mw, assetLoader = function() {
                function t(t) { return t.response && "object" == _typeof(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0 }
                return {
                    load: function(e, i, r) {
                        var n, s = new XMLHttpRequest;
                        s.open("GET", e, !0);
                        try { s.responseType = "json" } catch (e) {}
                        s.send(), s.onreadystatechange = function() {
                            if (4 == s.readyState)
                                if (200 == s.status) n = t(s), i(n);
                                else try { n = t(s), i(n) } catch (t) { r && r(t) }
                        }
                    }
                }
            }();

        function TextAnimatorProperty(t, e, i) { this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i) }

        function TextAnimatorDataProperty(t, e, i) {
            var r = { propType: !1 },
                n = PropertyFactory.getProp,
                s = e.a;
            this.a = { r: s.r ? n(t, s.r, 0, degToRads, i) : r, rx: s.rx ? n(t, s.rx, 0, degToRads, i) : r, ry: s.ry ? n(t, s.ry, 0, degToRads, i) : r, sk: s.sk ? n(t, s.sk, 0, degToRads, i) : r, sa: s.sa ? n(t, s.sa, 0, degToRads, i) : r, s: s.s ? n(t, s.s, 1, .01, i) : r, a: s.a ? n(t, s.a, 1, 0, i) : r, o: s.o ? n(t, s.o, 0, .01, i) : r, p: s.p ? n(t, s.p, 1, 0, i) : r, sw: s.sw ? n(t, s.sw, 0, 0, i) : r, sc: s.sc ? n(t, s.sc, 1, 0, i) : r, fc: s.fc ? n(t, s.fc, 1, 0, i) : r, fh: s.fh ? n(t, s.fh, 0, 0, i) : r, fs: s.fs ? n(t, s.fs, 0, .01, i) : r, fb: s.fb ? n(t, s.fb, 0, .01, i) : r, t: s.t ? n(t, s.t, 0, 0, i) : r }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
        }

        function LetterProps(t, e, i, r, n, s) { this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = n, this.p = s, this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!r, m: !0, p: !0 } }

        function TextProperty(t, e) { this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData) }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e, i = this._textData.a.length,
                r = PropertyFactory.getProp;
            for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = { f: r(this._elem, this._textData.p.f, 0, 0, this), l: r(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var i, r, n, s, a, o, l, h, c, f, u, p, d, m, g, y, v, _, x, b = this._moreOptions.alignment.v,
                    w = this._animatorsData,
                    T = this._textData,
                    S = this.mHelper,
                    P = this._renderType,
                    E = this.renderedLetters.length,
                    k = (this.data, t.l);
                if (this._hasMaskedPath) {
                    if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var A, C = x.v;
                        for (this._pathData.r && (C = C.reverse()), a = { tLength: 0, segments: [] }, s = C._length - 1, n = y = 0; n < s; n += 1) A = bez.buildBezierData(C.v[n], C.v[n + 1], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[n + 1][0] - C.v[n + 1][0], C.i[n + 1][1] - C.v[n + 1][1]]), a.tLength += A.segmentLength, a.segments.push(A), y += A.segmentLength;
                        n = s, x.v.c && (A = bez.buildBezierData(C.v[n], C.v[0], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), a.tLength += A.segmentLength, a.segments.push(A), y += A.segmentLength), this._pathData.pi = a
                    }
                    if (a = this._pathData.pi, o = this._pathData.f.v, f = 1, c = !(h = u = 0), m = a.segments, o < 0 && x.v.c)
                        for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), f = (d = m[u = m.length - 1].points).length - 1; o < 0;) o += d[f].partialLength, (f -= 1) < 0 && (f = (d = m[u -= 1].points).length - 1);
                    p = (d = m[u].points)[f - 1], g = (l = d[f]).partialLength
                }
                s = k.length, r = i = 0;
                var M, D, F, O, I = 1.2 * t.finalSize * .714,
                    R = !0;
                F = w.length;
                var L, N, B, V, z, j, G, q, H, X, Y, W, U, K = -1,
                    $ = o,
                    Z = u,
                    J = f,
                    Q = -1,
                    tt = "",
                    et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var it = 0,
                        rt = 0,
                        nt = 2 === t.j ? -.5 : -1,
                        st = 0,
                        at = !0;
                    for (n = 0; n < s; n += 1)
                        if (k[n].n) {
                            for (it && (it += rt); st < n;) k[st].animatorJustifyOffset = it, st += 1;
                            at = !(it = 0)
                        } else {
                            for (D = 0; D < F; D += 1)(M = w[D].a).t.propType && (at && 2 === t.j && (rt += M.t.v * nt), (L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars)).length ? it += M.t.v * L[0] * nt : it += M.t.v * L * nt);
                            at = !1
                        }
                    for (it && (it += rt); st < n;) k[st].animatorJustifyOffset = it, st += 1
                }
                for (n = 0; n < s; n += 1) {
                    if (S.reset(), z = 1, k[n].n) i = 0, r += t.yOffset, r += R ? 1 : 0, o = $, R = !1, this._hasMaskedPath && (f = J, p = (d = m[u = Z].points)[f - 1], g = (l = d[f]).partialLength, h = 0), U = X = W = tt = "", et = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== k[n].line) {
                                switch (t.j) {
                                    case 1:
                                        o += y - t.lineWidths[k[n].line];
                                        break;
                                    case 2:
                                        o += (y - t.lineWidths[k[n].line]) / 2
                                }
                                Q = k[n].line
                            }
                            K !== k[n].ind && (k[K] && (o += k[K].extra), o += k[n].an / 2, K = k[n].ind), o += b[0] * k[n].an / 200;
                            var ot = 0;
                            for (D = 0; D < F; D += 1)(M = w[D].a).p.propType && ((L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars)).length ? ot += M.p.v[0] * L[0] : ot += M.p.v[0] * L), M.a.propType && ((L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars)).length ? ot += M.a.v[0] * L[0] : ot += M.a.v[0] * L);
                            for (c = !0; c;) o + ot <= h + g || !d ? (v = (o + ot - h) / l.partialLength, B = p.point[0] + (l.point[0] - p.point[0]) * v, V = p.point[1] + (l.point[1] - p.point[1]) * v, S.translate(-b[0] * k[n].an / 200, -b[1] * I / 100), c = !1) : d && (h += l.partialLength, (f += 1) >= d.length && (f = 0, d = m[u += 1] ? m[u].points : x.v.c ? m[u = f = 0].points : (h -= l.partialLength, null)), d && (p = l, g = (l = d[f]).partialLength));
                            N = k[n].an / 2 - k[n].add, S.translate(-N, 0, 0)
                        } else N = k[n].an / 2 - k[n].add, S.translate(-N, 0, 0), S.translate(-b[0] * k[n].an / 200, -b[1] * I / 100, 0);
                        for (k[n].l, D = 0; D < F; D += 1)(M = w[D].a).t.propType && (L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? L.length ? o += M.t.v * L[0] : o += M.t.v * L : L.length ? i += M.t.v * L[0] : i += M.t.v * L));
                        for (k[n].l, t.strokeWidthAnim && (G = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1)(M = w[D].a).a.propType && ((L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars)).length ? S.translate(-M.a.v[0] * L[0], -M.a.v[1] * L[1], M.a.v[2] * L[2]) : S.translate(-M.a.v[0] * L, -M.a.v[1] * L, M.a.v[2] * L));
                        for (D = 0; D < F; D += 1)(M = w[D].a).s.propType && ((L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars)).length ? S.scale(1 + (M.s.v[0] - 1) * L[0], 1 + (M.s.v[1] - 1) * L[1], 1) : S.scale(1 + (M.s.v[0] - 1) * L, 1 + (M.s.v[1] - 1) * L, 1));
                        for (D = 0; D < F; D += 1) {
                            if (M = w[D].a, L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars), M.sk.propType && (L.length ? S.skewFromAxis(-M.sk.v * L[0], M.sa.v * L[1]) : S.skewFromAxis(-M.sk.v * L, M.sa.v * L)), M.r.propType && (L.length ? S.rotateZ(-M.r.v * L[2]) : S.rotateZ(-M.r.v * L)), M.ry.propType && (L.length ? S.rotateY(M.ry.v * L[1]) : S.rotateY(M.ry.v * L)), M.rx.propType && (L.length ? S.rotateX(M.rx.v * L[0]) : S.rotateX(M.rx.v * L)), M.o.propType && (L.length ? z += (M.o.v * L[0] - z) * L[0] : z += (M.o.v * L - z) * L), t.strokeWidthAnim && M.sw.propType && (L.length ? G += M.sw.v * L[0] : G += M.sw.v * L), t.strokeColorAnim && M.sc.propType)
                                for (H = 0; H < 3; H += 1) L.length ? j[H] = j[H] + (M.sc.v[H] - j[H]) * L[0] : j[H] = j[H] + (M.sc.v[H] - j[H]) * L;
                            if (t.fillColorAnim && t.fc) {
                                if (M.fc.propType)
                                    for (H = 0; H < 3; H += 1) L.length ? q[H] = q[H] + (M.fc.v[H] - q[H]) * L[0] : q[H] = q[H] + (M.fc.v[H] - q[H]) * L;
                                M.fh.propType && (q = L.length ? addHueToRGB(q, M.fh.v * L[0]) : addHueToRGB(q, M.fh.v * L)), M.fs.propType && (q = L.length ? addSaturationToRGB(q, M.fs.v * L[0]) : addSaturationToRGB(q, M.fs.v * L)), M.fb.propType && (q = L.length ? addBrightnessToRGB(q, M.fb.v * L[0]) : addBrightnessToRGB(q, M.fb.v * L))
                            }
                        }
                        for (D = 0; D < F; D += 1)(M = w[D].a).p.propType && (L = w[D].s.getMult(k[n].anIndexes[D], T.a[D].s.totalChars), this._hasMaskedPath ? L.length ? S.translate(0, M.p.v[1] * L[0], -M.p.v[2] * L[1]) : S.translate(0, M.p.v[1] * L, -M.p.v[2] * L) : L.length ? S.translate(M.p.v[0] * L[0], M.p.v[1] * L[1], -M.p.v[2] * L[2]) : S.translate(M.p.v[0] * L, M.p.v[1] * L, -M.p.v[2] * L));
                        if (t.strokeWidthAnim && (X = G < 0 ? 0 : G), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (W = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), this._hasMaskedPath) {
                            if (S.translate(0, -t.ls), S.translate(0, b[1] * I / 100 + r, 0), T.p.p) {
                                _ = (l.point[1] - p.point[1]) / (l.point[0] - p.point[0]);
                                var lt = 180 * Math.atan(_) / Math.PI;
                                l.point[0] < p.point[0] && (lt += 180), S.rotate(-lt * Math.PI / 180)
                            }
                            S.translate(B, V, 0), o -= b[0] * k[n].an / 200, k[n + 1] && K !== k[n + 1].ind && (o += k[n].an / 2, o += t.tr / 1e3 * t.finalSize)
                        } else {
                            switch (S.translate(i, r, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    S.translate(k[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[n].line]), 0, 0);
                                    break;
                                case 2:
                                    S.translate(k[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[n].line]) / 2, 0, 0)
                            }
                            S.translate(0, -t.ls), S.translate(N, 0, 0), S.translate(b[0] * k[n].an / 200, b[1] * I / 100, 0), i += k[n].l + t.tr / 1e3 * t.finalSize
                        }
                        "html" === P ? tt = S.toCSS() : "svg" === P ? tt = S.to2dCSS() : et = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], U = z
                    }
                    this.lettersChangedFlag = E <= n ? (O = new LetterProps(U, X, Y, W, tt, et), this.renderedLetters.push(O), E += 1, !0) : (O = this.renderedLetters[n]).update(U, X, Y, W, tt, et) || this.lettersChangedFlag
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() { this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties()) }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, r, n, s) { this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1; var a = this._mdf.p = !1; return this.o !== t && (this.o = t, a = this._mdf.o = !0), this.sw !== e && (this.sw = e, a = this._mdf.sw = !0), this.sc !== i && (this.sc = i, a = this._mdf.sc = !0), this.fc !== r && (this.fc = r, a = this._mdf.fc = !0), this.m !== n && (this.m = n, a = this._mdf.m = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, a = this._mdf.p = !0), a }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) { for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]); return t }, TextProperty.prototype.setCurrentData = function(t) { t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0 }, TextProperty.prototype.searchProperty = function() { return this.searchKeyframes() }, TextProperty.prototype.searchKeyframes = function() { return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf }, TextProperty.prototype.addEffect = function(t) { this.effectsSequence.push(t), this.elem.addDynamicProperty(this) }, TextProperty.prototype.getValue = function(t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    i = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    this.lock = !0, this._mdf = !1;
                    var r, n = this.effectsSequence.length,
                        s = t || this.data.d.k[this.keysIndex].s;
                    for (r = 0; r < n; r += 1) s = i !== this.keysIndex ? this.effectsSequence[r](s, s.t) : this.effectsSequence[r](this.currentData, s.t);
                    e !== s && this.setCurrentData(s), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function() { for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && (t[i].s, !(i === r - 1 || t[i + 1].t > e));) i += 1; return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s }, TextProperty.prototype.buildFinalText = function(t) { for (var e, i = FontManager.getCombinedCharacterCodes(), r = [], n = 0, s = t.length; n < s;) e = t.charCodeAt(n), -1 !== i.indexOf(e) ? r[r.length - 1] += t.charAt(n) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(n + 1)) && e <= 57343 ? (r.push(t.substr(n, 2)), ++n) : r.push(t.charAt(n)), n += 1; return r }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e, i, r, n, s, a, o, l = this.elem.globalData.fontManager,
                h = this.data,
                c = [],
                f = 0,
                u = h.m.g,
                p = 0,
                d = 0,
                m = 0,
                g = [],
                y = 0,
                v = 0,
                _ = l.getFontByName(t.f),
                x = 0,
                b = _.fStyle ? _.fStyle.split(" ") : [],
                w = "normal",
                T = "normal";
            for (i = b.length, e = 0; e < i; e += 1) switch (b[e].toLowerCase()) {
                case "italic":
                    T = "italic";
                    break;
                case "bold":
                    w = "700";
                    break;
                case "black":
                    w = "900";
                    break;
                case "medium":
                    w = "500";
                    break;
                case "regular":
                case "normal":
                    w = "400";
                    break;
                case "light":
                case "thin":
                    w = "200"
            }
            t.fWeight = _.fWeight || w, t.fStyle = T, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
            var S, P = t.tr / 1e3 * t.finalSize;
            if (t.sz)
                for (var E, k, A = !0, C = t.sz[0], M = t.sz[1]; A;) {
                    y = E = 0, i = (k = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
                    var D = -1;
                    for (e = 0; e < i; e += 1) S = k[e].charCodeAt(0), r = !1, " " === k[e] ? D = e : 13 !== S && 3 !== S || (r = !(y = 0), E += t.finalLineHeight || 1.2 * t.finalSize), C < y + (x = l.chars ? (o = l.getCharData(k[e], _.fStyle, _.fFamily), r ? 0 : o.w * t.finalSize / 100) : l.measureText(k[e], t.f, t.finalSize)) && " " !== k[e] ? (-1 === D ? i += 1 : e = D, E += t.finalLineHeight || 1.2 * t.finalSize, k.splice(e, D === e ? 1 : 0, "\r"), D = -1, y = 0) : (y += x, y += P);
                    E += _.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && M < E ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = k, i = t.finalText.length, A = !1)
                }
            y = -P;
            var F, O = x = 0;
            for (e = 0; e < i; e += 1)
                if (r = !1, S = (F = t.finalText[e]).charCodeAt(0), " " === F ? n = "Â " : 13 === S || 3 === S ? (O = 0, g.push(y), v = v < y ? y : v, y = -2 * P, r = !(n = ""), m += 1) : n = t.finalText[e], x = l.chars ? (o = l.getCharData(F, _.fStyle, l.getFontByName(t.f).fFamily), r ? 0 : o.w * t.finalSize / 100) : l.measureText(n, t.f, t.finalSize), " " === F ? O += x + P : (y += x + P + O, O = 0), c.push({ l: x, an: x, add: p, n: r, anIndexes: [], val: n, line: m, animatorJustifyOffset: 0 }), 2 == u) {
                    if (p += x, "" === n || "Â " === n || e === i - 1) {
                        for ("" !== n && "Â " !== n || (p -= x); d <= e;) c[d].an = p, c[d].ind = f, c[d].extra = x, d += 1;
                        f += 1, p = 0
                    }
                } else if (3 == u) {
                if (p += x, "" === n || e === i - 1) {
                    for ("" === n && (p -= x); d <= e;) c[d].an = p, c[d].ind = f, c[d].extra = x, d += 1;
                    p = 0, f += 1
                }
            } else c[f].ind = f, c[f].extra = 0, f += 1;
            if (t.l = c, v = v < y ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = v, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = g;
            var I, R, L = h.a;
            a = L.length;
            var N, B, V = [];
            for (s = 0; s < a; s += 1) {
                for ((I = L[s]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), B = 0, N = I.s.b, e = 0; e < i; e += 1)(R = c[e]).anIndexes[s] = B, (1 == N && "" !== R.val || 2 == N && "" !== R.val && "Â " !== R.val || 3 == N && (R.n || "Â " == R.val || e == i - 1) || 4 == N && (R.n || e == i - 1)) && (1 === I.s.rn && V.push(B), B += 1);
                h.a[s].s.totalChars = B;
                var z, j = -1;
                if (1 === I.s.rn)
                    for (e = 0; e < i; e += 1) j != (R = c[e]).anIndexes[s] && (j = R.anIndexes[s], z = V.splice(Math.floor(Math.random() * V.length), 1)[0]), R.anIndexes[s] = z
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = _.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var i = this.copyData({}, this.data.d.k[e].s);
            i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) { this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }, TextProperty.prototype.setMinimumFontSize = function(t) { this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) };
        var TextSelectorProp = function() {
                var t = Math.max,
                    e = Math.min,
                    i = Math.floor;

                function r(t, e) { this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue() }
                return r.prototype = {
                    getMult: function(r) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var n = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                            s = 0,
                            a = this.finalS,
                            o = this.finalE,
                            l = this.data.sh;
                        if (2 == l) s = n(s = o === a ? o <= r ? 1 : 0 : t(0, e(.5 / (o - a) + (r - a) / (o - a), 1)));
                        else if (3 == l) s = n(s = o === a ? o <= r ? 0 : 1 : 1 - t(0, e(.5 / (o - a) + (r - a) / (o - a), 1)));
                        else if (4 == l) o === a ? s = 0 : (s = t(0, e(.5 / (o - a) + (r - a) / (o - a), 1))) < .5 ? s *= 2 : s = 1 - 2 * (s - .5), s = n(s);
                        else if (5 == l) {
                            if (o === a) s = 0;
                            else {
                                var h = o - a,
                                    c = -h / 2 + (r = e(t(0, r + .5 - a), o - a)),
                                    f = h / 2;
                                s = Math.sqrt(1 - c * c / (f * f))
                            }
                            s = n(s)
                        } else s = 6 == l ? n(s = o === a ? 0 : (r = e(t(0, r + .5 - a), o - a), (1 + Math.cos(Math.PI + 2 * Math.PI * r / (o - a))) / 2)) : (r >= i(a) && (s = r - a < 0 ? 1 - (a - r) : t(0, e(o - r, 1))), n(s));
                        return s * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            i = this.o.v / e,
                            r = this.s.v / e + i,
                            n = this.e.v / e + i;
                        if (n < r) {
                            var s = r;
                            r = n, n = s
                        }
                        this.finalS = r, this.finalE = n
                    }
                }, extendPrototype([DynamicPropertyContainer], r), { getTextSelectorProp: function(t, e, i) { return new r(t, e, i) } }
            }(),
            pool_factory = function(t, e, i, r) {
                var n = 0,
                    s = t,
                    a = createSizedArray(s);
                return { newElement: function() { return n ? a[n -= 1] : e() }, release: function(t) { n === s && (a = pooling.double(a), s *= 2), i && i(t), a[n] = t, n += 1 } }
            },
            pooling = { double: function(t) { return t.concat(createSizedArray(t.length)) } },
            point_pool = pool_factory(8, function() { return createTypedArray("float32", 2) }),
            shape_pool = (zA = pool_factory(4, function() { return new ShapePath }, function(t) {
                var e, i = t._length;
                for (e = 0; e < i; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1
            }), zA.clone = function(t) {
                var e, i = zA.newElement(),
                    r = void 0 === t._length ? t.v.length : t._length;
                for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                return i
            }, zA),
            zA, shapeCollection_pool = (IA = {
                newShapeCollection: function() { return JA ? LA[JA -= 1] : new ShapeCollection },
                release: function(t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1) shape_pool.release(t.shapes[e]);
                    t._length = 0, JA === KA && (LA = pooling.double(LA), KA *= 2), LA[JA] = t, JA += 1
                }
            }, JA = 0, KA = 4, LA = createSizedArray(KA), IA),
            IA, JA, KA, LA, segments_length_pool = pool_factory(8, function() { return { lengths: [], totalLength: 0 } }, function(t) {
                var e, i = t.lengths.length;
                for (e = 0; e < i; e += 1) bezier_length_pool.release(t.lengths[e]);
                t.lengths.length = 0
            }),
            bezier_length_pool = pool_factory(8, function() { return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) } });

        function BaseRenderer() {}

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var i = "";
            if (e && e.title) {
                var r = createNS("title"),
                    n = createElementID();
                r.setAttribute("id", n), r.textContent = e.title, this.svgElement.appendChild(r), i += n
            }
            if (e && e.description) {
                var s = createNS("desc"),
                    a = createElementID();
                s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), i += " " + a
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var l = createNS("g");
            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: e && e.progressiveLoad || !1, hideOnTransparent: !e || !1 !== e.hideOnTransparent, viewBoxOnly: e && e.viewBoxOnly || !1, viewBoxSize: e && e.viewBoxSize || !1, className: e && e.className || "" }, this.globalData = { _mdf: !1, frameNum: -1, defs: o, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function CanvasRenderer(t, e) { this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || !1, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "" }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas" }

        function HybridRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !e || !1 !== e.hideOnTransparent }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html" }

        function MaskElement(t, e, i) {
            this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var r, n = this.globalData.defs,
                s = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(s), this.solidPath = "";
            var a, o, l, h, c, f, u, p = this.masksProperties,
                d = 0,
                m = [],
                g = createElementID(),
                y = "clipPath",
                v = "clip-path";
            for (r = 0; r < s; r++)
                if (("a" !== p[r].mode && "n" !== p[r].mode || p[r].inv || 100 !== p[r].o.k || p[r].o.x) && (v = y = "mask"), "s" != p[r].mode && "i" != p[r].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), a = createNS("path"), "n" != p[r].mode) {
                    var _;
                    if (d += 1, a.setAttribute("fill", "s" === p[r].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== p[r].x.k ? (v = y = "mask", u = PropertyFactory.getProp(this.element, p[r].x, 0, null, this.element), _ = createElementID(), (c = createNS("filter")).setAttribute("id", _), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), c.appendChild(f), n.appendChild(c), a.setAttribute("stroke", "s" === p[r].mode ? "#000000" : "#ffffff")) : u = f = null, this.storedData[r] = { elem: a, x: u, expan: f, lastPath: "", lastOperator: "", filterId: _, lastRadius: 0 }, "i" == p[r].mode) {
                        l = m.length;
                        var x = createNS("g");
                        for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                        var b = createNS("mask");
                        b.setAttribute("mask-type", "alpha"), b.setAttribute("id", g + "_" + d), b.appendChild(a), n.appendChild(b), x.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + d + ")"), m.length = 0, m.push(x)
                    } else m.push(a);
                    p[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, p[r].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[r], 3), invRect: h }, this.viewData[r].prop.k || this.drawPath(p[r], this.viewData[r].prop.v, this.viewData[r])
                } else this.viewData[r] = { op: PropertyFactory.getProp(this.element, p[r].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[r], 3), elem: a, lastPath: "" }, n.appendChild(a);
            for (this.maskElement = createNS(y), s = m.length, r = 0; r < s; r += 1) this.maskElement.appendChild(m[r]);
            0 < d && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        function HierarchyElement() {}

        function FrameElement() {}

        function TransformElement() {}

        function RenderableElement() {}

        function RenderableDOMElement() {}

        function ProcessedElement(t, e) { this.elem = t, this.pos = e }

        function SVGStyleData(t, e) { this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null }

        function SVGShapeData(t, e, i) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
            for (var r = 0, n = t.length; r < n;) {
                if (t[r].mProps.dynamicProperties.length) { this._isAnimated = !0; break }
                r += 1
            }
        }

        function SVGTransformData(t, e, i) { this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length }

        function SVGStrokeStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated }

        function SVGFillStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i }

        function SVGGradientFillStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i) }

        function SVGGradientStrokeStyleData(t, e, i) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated }

        function ShapeGroupData() { this.it = [], this.prevViewData = [], this.gr = createNS("g") }
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, i, r = this.layers.length;
            for (this.completeLayers = !0, e = r - 1; 0 <= e; e--) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 13:
                    return this.createCamera(t)
            }
            return this.createNull(t)
        }, BaseRenderer.prototype.createCamera = function() { throw new Error("You're using a 3d camera. Try the html renderer.") }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
            this.completeLayers = !1;
            var e, i, r = t.length,
                n = this.layers.length;
            for (e = 0; e < r; e += 1)
                for (i = 0; i < n;) {
                    if (this.layers[i].id == t[e].id) { this.layers[i] = t[e]; break }
                    i += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function(t) { this.globalData.projectInterface = t }, BaseRenderer.prototype.initItems = function() { this.globalData.progressiveLoad || this.buildAllItems() }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) { for (var r = this.elements, n = this.layers, s = 0, a = n.length; s < a;) n[s].ind == e && (r[s] && !0 !== r[s] ? (i.push(r[s]), r[s].setAsParent(), void 0 !== n[s].parent ? this.buildElementParenting(t, n[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))), s += 1 }, BaseRenderer.prototype.addPendingElement = function(t) { this.pendingElements.push(t) }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length;
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var r = this.createComp(t[e]);
                    r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                }
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) { this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h } }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) { return new NullElement(t, this.globalData, this) }, SVGRenderer.prototype.createShape = function(t) { return new SVGShapeElement(t, this.globalData, this) }, SVGRenderer.prototype.createText = function(t) { return new SVGTextElement(t, this.globalData, this) }, SVGRenderer.prototype.createImage = function(t) { return new IImageElement(t, this.globalData, this) }, SVGRenderer.prototype.createComp = function(t) { return new SVGCompElement(t, this.globalData, this) }, SVGRenderer.prototype.createSolid = function(t) { return new ISolidElement(t, this.globalData, this) }, SVGRenderer.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var i = createNS("clipPath"),
                r = createNS("rect");
            r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
            var n = createElementID();
            i.setAttribute("id", n), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + n + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRenderer.prototype.destroy = function() {
            this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 != this.layers[t].ty) {
                e[t] = !0;
                var i = this.createItem(this.layers[t]);
                e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
            }
        }, SVGRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                    for (var e = 0, i = this.elements.length; e < i;) {
                        if (this.elements[e] === t) { t.setMatte(this.elements[e - 1].layerId); break }
                        e += 1
                    }
            }
        }, SVGRenderer.prototype.renderFrame = function(t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = i - 1; 0 <= e; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                for (var r, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (r = this.elements[n].getBaseElement()), n += 1;
                r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
            }
        }, SVGRenderer.prototype.hide = function() { this.layerElement.style.display = "none" }, SVGRenderer.prototype.show = function() { this.layerElement.style.display = "block" }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) { return new CVShapeElement(t, this.globalData, this) }, CanvasRenderer.prototype.createText = function(t) { return new CVTextElement(t, this.globalData, this) }, CanvasRenderer.prototype.createImage = function(t) { return new CVImageElement(t, this.globalData, this) }, CanvasRenderer.prototype.createComp = function(t) { return new CVCompElement(t, this.globalData, this) }, CanvasRenderer.prototype.createSolid = function(t) { return new CVSolidElement(t, this.globalData, this) }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var i = this.contextData.cTr.props;
                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRenderer.prototype.ctxOpacity = function(t) {
            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
        }, CanvasRenderer.prototype.reset = function() { this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore() }, CanvasRenderer.prototype.save = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var i, r = this.contextData.saved[this.contextData.cArrPos];
                for (i = 0; i < 16; i += 1) r[i] = e[i];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
            } else this.canvasContext.save()
        }, CanvasRenderer.prototype.restore = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                var e, i = this.contextData.saved[this.contextData.cArrPos],
                    r = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) r[e] = i[e];
                this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
            } else this.canvasContext.restore()
        }, CanvasRenderer.prototype.configAnimation = function(t) { this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize() }, CanvasRenderer.prototype.updateContainerSize = function() {
            var t, e, i, r;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var n = this.renderConfig.preserveAspectRatio.split(" "),
                    s = n[1] || "meet",
                    a = n[0] || "xMidYMid",
                    o = a.substr(0, 4),
                    l = a.substr(4);
                i = t / e, r = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = i < r && "meet" === s || r < i && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === s || i < r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === s || i < r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (i < r && "meet" === s || r < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (i < r && "meet" === s || r < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRenderer.prototype.destroy = function() {
            var t;
            for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRenderer.prototype.renderFrame = function(t, e) { if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) { this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t; var i, r = this.layers.length; for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i++)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st); if (this.globalData._mdf) { for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; 0 <= i; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();!0 !== this.renderConfig.clearCanvas && this.restore() } } }, CanvasRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 != this.layers[t].ty) {
                var i = this.createItem(this.layers[t], this, this.globalData);
                (e[t] = i).initExpressions()
            }
        }, CanvasRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, CanvasRenderer.prototype.hide = function() { this.animationItem.container.style.display = "none" }, CanvasRenderer.prototype.show = function() { this.animationItem.container.style.display = "block" }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
            var i = t.getBaseElement();
            if (i) {
                var r = this.layers[e];
                if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                else if (this.threeDElements) this.addTo3dContainer(i, e);
                else {
                    for (var n, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], n = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || n), a += 1;
                    n ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, n) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                }
            }
        }, HybridRenderer.prototype.createShape = function(t) { return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this) }, HybridRenderer.prototype.createText = function(t) { return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this) }, HybridRenderer.prototype.createCamera = function(t) { return this.camera = new HCameraElement(t, this.globalData, this), this.camera }, HybridRenderer.prototype.createImage = function(t) { return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this) }, HybridRenderer.prototype.createComp = function(t) { return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this) }, HybridRenderer.prototype.createSolid = function(t) { return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this) }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, i = this.threeDElements.length; e < i;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
        }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
            var i = createTag("div");
            styleDiv(i);
            var r = createTag("div");
            styleDiv(r), "3d" === e && (i.style.width = this.globalData.compSize.w + "px", i.style.height = this.globalData.compSize.h + "px", i.style.transformOrigin = i.style.mozTransformOrigin = i.style.webkitTransformOrigin = "50% 50%", r.style.transform = r.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), i.appendChild(r);
            var n = { container: r, perspectiveElem: i, startPos: t, endPos: t, type: e };
            return this.threeDElements.push(n), n
        }, HybridRenderer.prototype.build3dContainers = function() {
            var t, e, i = this.layers.length,
                r = "";
            for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
            for (t = (i = this.threeDElements.length) - 1; 0 <= t; t--) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
            for (var i = 0, r = this.threeDElements.length; i < r;) {
                if (e <= this.threeDElements[i].endPos) {
                    for (var n, s = this.threeDElements[i].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
                    n ? this.threeDElements[i].container.insertBefore(t, n) : this.threeDElements[i].container.appendChild(t);
                    break
                }
                i += 1
            }
        }, HybridRenderer.prototype.configAnimation = function(t) {
            var e = createTag("div"),
                i = this.animationItem.wrapper;
            e.style.width = t.w + "px", e.style.height = t.h + "px", styleDiv(this.resizerElem = e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), e.style.overflow = "hidden";
            var r = createNS("svg");
            r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
            var n = createNS("defs");
            r.appendChild(n), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRenderer.prototype.destroy = function() {
            this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t++) this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRenderer.prototype.updateContainerSize = function() {
            var t, e, i, r, n = this.animationItem.wrapper.offsetWidth,
                s = this.animationItem.wrapper.offsetHeight;
            r = n / s < this.globalData.compSize.w / this.globalData.compSize.h ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, i = 0, (s - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, i = (n - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)"
        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() { this.resizerElem.style.display = "none" }, HybridRenderer.prototype.show = function() { this.resizerElem.style.display = "block" }, HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w,
                    i = this.globalData.compSize.h,
                    r = this.threeDElements.length;
                for (t = 0; t < r; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px"
            }
        }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length,
                r = createTag("div");
            for (e = 0; e < i; e += 1)
                if (t[e].xt) {
                    var n = this.createComp(t[e], r, this.globalData.comp, null);
                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                }
        }, MaskElement.prototype.getMaskProperty = function(t) { return this.viewData[t].prop }, MaskElement.prototype.renderFrame = function(t) {
            var e, i = this.element.finalTransform.mat,
                r = this.masksProperties.length;
            for (e = 0; e < r; e++)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -i.props[12]), this.viewData[e].invRect.setAttribute("y", -i.props[13])), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                    var n = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                }
        }, MaskElement.prototype.getMaskelement = function() { return this.maskElement }, MaskElement.prototype.createLayerSolidPath = function() { var t = "M0,0 "; return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " " }, MaskElement.prototype.drawPath = function(t, e, i) {
            var r, n, s = " M" + e.v[0][0] + "," + e.v[0][1];
            for (n = e._length, r = 1; r < n; r += 1) s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
            if (e.c && 1 < n && (s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
                var a = "";
                i.elem && (e.c && (a = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", a)), i.lastPath = s
            }
        }, MaskElement.prototype.destroy = function() { this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null }, HierarchyElement.prototype = { initHierarchy: function() { this.hierarchy = [], this._isParent = !1, this.checkParenting() }, setHierarchy: function(t) { this.hierarchy = t }, setAsParent: function() { this._isParent = !0 }, checkParenting: function() { void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []) } }, FrameElement.prototype = { initFrame: function() { this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1 }, prepareProperties: function(t, e) { var i, r = this.dynamicProperties.length; for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0)) }, addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t) } }, TransformElement.prototype = {
            initTransform: function() { this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat,
                        i = 0,
                        r = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; i < r;) {
                            if (this.hierarchy[i].finalTransform.mProp._mdf) { this.finalTransform._matMdf = !0; break }
                            i += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var i = !0, r = this.comp; i;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : i = !1;
                var n, s, a = e.length;
                for (n = 0; n < a; n += 1) s = e[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                return t
            },
            mHelper: new Matrix
        }, RenderableElement.prototype = { initRenderable: function() { this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [] }, addRenderableComponent: function(t) {-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t) }, removeRenderableComponent: function(t) {-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1) }, prepareRenderableFrame: function(t) { this.checkLayerLimits(t) }, checkTransparency: function() { this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show()) }, checkLayerLimits: function(t) { this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide()) }, renderRenderable: function() { var t, e = this.renderableComponents.length; for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame) }, sourceRectAtTime: function() { return { top: 0, left: 0, width: 100, height: 100 } }, getLayerSize: function() { return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height } } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, i) { this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide() }, hide: function() { this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0) }, show: function() { this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, renderInnerContent: function() {}, prepareFrame: function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency() }, destroy: function() { this.innerElem = null, this.destroyBaseElement() } })], RenderableDOMElement), SVGStyleData.prototype.reset = function() { this.d = "", this._mdf = !1 }, SVGShapeData.prototype.setAsAnimated = function() { this._isAnimated = !0 }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) { this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var i = createElementID(),
                r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
            var n, s, a, o = [];
            for (a = 4 * e.g.p, s = 0; s < a; s += 4) n = createNS("stop"), r.appendChild(n), o.push(n);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = r, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i, r, n, s = createNS("mask"),
                    a = createNS("path");
                s.appendChild(a);
                var o = createElementID(),
                    l = createElementID();
                s.setAttribute("id", l);
                var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var c = this.stops;
                for (r = 4 * t.g.p; r < n; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(i), c.push(i);
                a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = s, this.ost = c, this.maskId = l, e.msElem = a
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var SVGElementsRenderer = function() {
            var t = new Matrix,
                e = new Matrix;

            function i(t, e, i) {
                (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function r(i, r, n) {
                var s, a, o, l, h, c, f, u, p, d, m, g = r.styles.length,
                    y = r.lvl;
                for (c = 0; c < g; c += 1) {
                    if (l = r.sh._mdf || n, r.styles[c].lvl < y) {
                        for (u = e.reset(), d = y - r.styles[c].lvl, m = r.transformers.length - 1; !l && 0 < d;) l = r.transformers[m].mProps._mdf || l, d--, m--;
                        if (l)
                            for (d = y - r.styles[c].lvl, m = r.transformers.length - 1; 0 < d;) p = r.transformers[m].mProps.v.props, u.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), d--, m--
                    } else u = t;
                    if (a = (f = r.sh.paths)._length, l) {
                        for (o = "", s = 0; s < a; s += 1)(h = f.shapes[s]) && h._length && (o += buildShapeString(h, h._length, h.c, u));
                        r.caches[c] = o
                    } else o = r.caches[c];
                    r.styles[c].d += !0 === i.hd ? "" : o, r.styles[c]._mdf = l || r.styles[c]._mdf
                }
            }

            function n(t, e, i) {
                var r = e.style;
                (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function s(t, e, i) { a(t, e, i), o(t, e, i) }

            function a(t, e, i) {
                var r, n, s, a, o, l = e.gf,
                    h = e.g._hasOpacity,
                    c = e.s.v,
                    f = e.e.v;
                if (e.o._mdf || i) {
                    var u = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(u, e.o.v)
                }
                if (e.s._mdf || i) {
                    var p = 1 === t.t ? "x1" : "cx",
                        d = "x1" === p ? "y1" : "cy";
                    l.setAttribute(p, c[0]), l.setAttribute(d, c[1]), h && !e.g._collapsable && (e.of.setAttribute(p, c[0]), e.of.setAttribute(d, c[1]))
                }
                if (e.g._cmdf || i) { r = e.cst; var m = e.g.c; for (s = r.length, n = 0; n < s; n += 1)(a = r[n]).setAttribute("offset", m[4 * n] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")") }
                if (h && (e.g._omdf || i)) { var g = e.g.o; for (s = (r = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < s; n += 1) a = r[n], e.g._collapsable || a.setAttribute("offset", g[2 * n] + "%"), a.setAttribute("stop-opacity", g[2 * n + 1]) }
                if (1 === t.t)(e.e._mdf || i) && (l.setAttribute("x2", f[0]), l.setAttribute("y2", f[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(c[0] - f[0], 2) + Math.pow(c[1] - f[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                    o || (o = Math.sqrt(Math.pow(c[0] - f[0], 2) + Math.pow(c[1] - f[1], 2)));
                    var y = Math.atan2(f[1] - c[1], f[0] - c[0]),
                        v = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                        _ = Math.cos(y + e.a.v) * v + c[0],
                        x = Math.sin(y + e.a.v) * v + c[1];
                    l.setAttribute("fx", _), l.setAttribute("fy", x), h && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", x))
                }
            }

            function o(t, e, i) {
                var r = e.style,
                    n = e.d;
                n && (n._mdf || i) && n.dashStr && (r.pElem.setAttribute("stroke-dasharray", n.dashStr), r.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
                createRenderFunction: function(t) {
                    switch (t.ty, t.ty) {
                        case "fl":
                            return n;
                        case "gf":
                            return a;
                        case "gs":
                            return s;
                        case "st":
                            return o;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return r;
                        case "tr":
                            return i
                    }
                }
            }
        }();

        function ShapeTransformManager() { this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0 }

        function CVShapeData(t, e, i, r) { this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0]; var n = 4; "rc" == e.ty ? n = 5 : "el" == e.ty ? n = 6 : "sr" == e.ty && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t); var s, a, o = i.length; for (s = 0; s < o; s += 1) i[s].closed || (a = { transforms: r.addTransformSequence(i[s].transforms), trNodes: [] }, this.styledShapes.push(a), i[s].elements.push(a)) }

        function BaseElement() {}

        function NullElement(t, e, i) { this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy() }

        function SVGBaseElement() {}

        function IShapeElement() {}

        function ITextElement() {}

        function ICompElement() {}

        function IImageElement(t, e, i) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h } }

        function ISolidElement(t, e, i) { this.initElement(t, e, i) }

        function SVGCompElement(t, e, i) { this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function SVGTextElement(t, e, i) { this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i) }

        function SVGShapeElement(t, e, i) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [] }

        function SVGTintFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                var r, n = createNS("feMerge");
                t.appendChild(n), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), n.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), n.appendChild(r)
            }
        }

        function SVGFillFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
        }

        function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var i = createNS("feGaussianBlur");
            t.appendChild(i), this.feGaussianBlur = i
        }

        function SVGStrokeEffect(t, e) { this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [] }

        function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var i = createNS("feColorMatrix");
            i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
            var r = createNS("feComponentTransfer");
            r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), r.appendChild(n), this.feFuncR = n;
            var s = createNS("feFuncG");
            s.setAttribute("type", "table"), r.appendChild(s), this.feFuncG = s;
            var a = createNS("feFuncB");
            a.setAttribute("type", "table"), r.appendChild(a), this.feFuncB = a
        }

        function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var i = this.filterManager.effectElements,
                r = createNS("feComponentTransfer");
            (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
        }

        function SVGDropShadowEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
            var i = createNS("feGaussianBlur");
            i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
            var r = createNS("feOffset");
            r.setAttribute("dx", "25"), r.setAttribute("dy", "0"), r.setAttribute("in", "drop_shadow_1"), r.setAttribute("result", "drop_shadow_2"), this.feOffset = r, t.appendChild(r);
            var n = createNS("feFlood");
            n.setAttribute("flood-color", "#00ff00"), n.setAttribute("flood-opacity", "1"), n.setAttribute("result", "drop_shadow_3"), this.feFlood = n, t.appendChild(n);
            var s = createNS("feComposite");
            s.setAttribute("in", "drop_shadow_3"), s.setAttribute("in2", "drop_shadow_2"), s.setAttribute("operator", "in"), s.setAttribute("result", "drop_shadow_4"), t.appendChild(s);
            var a, o = createNS("feMerge");
            t.appendChild(o), a = createNS("feMergeNode"), o.appendChild(a), (a = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = a, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(a)
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(t) {
                var e, i = t.length,
                    r = "_";
                for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
                var n = this.sequences[r];
                return n || (n = { transforms: [].concat(t), finalTransform: new Matrix, _mdf: !1 }, this.sequences[r] = n, this.sequenceList.push(n)), n
            },
            processSequence: function(t, e) {
                for (var i, r = 0, n = t.transforms.length, s = e; r < n && !e;) {
                    if (t.transforms[r].transform.mProps._mdf) { s = !0; break }
                    r += 1
                }
                if (s)
                    for (t.finalTransform.reset(), r = n - 1; 0 <= r; r -= 1) i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                t._mdf = s
            },
            processSequences: function(t) { var e, i = this.sequenceList.length; for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t) },
            getNewKey: function() { return "_" + this.transform_key_count++ }
        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1
                }
                return !1
            },
            initExpressions: function() {
                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
            },
            initBaseData: function(t, e, i) { this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties) },
            getType: function() { return this.type },
            sourceRectAtTime: function() {}
        }, NullElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() { return null }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
            initRendererElement: function() { this.layerElement = createNS("g") },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t, e, i, r = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var n = createNS("mask");
                        n.setAttribute("id", this.layerId), n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), n.appendChild(this.layerElement), r = n, this.globalData.defs.appendChild(n), featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, n.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                    } else if (2 == this.data.td) {
                        var s = createNS("mask");
                        s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                        var a = createNS("g");
                        s.appendChild(a), t = createElementID(), e = filtersFactory.createFilter(t);
                        var o = createNS("feComponentTransfer");
                        o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                        var l = createNS("feFuncA");
                        l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                        var h = createNS("rect");
                        h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), a.appendChild(h), a.appendChild(this.layerElement), r = a, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), a.appendChild(h), i.appendChild(this.layerElement), r = i, a.appendChild(i)), this.globalData.defs.appendChild(s)
                    }
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var c = createNS("clipPath"),
                        f = createNS("path");
                    f.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var u = createElementID();
                    if (c.setAttribute("id", u), c.appendChild(f), this.globalData.defs.appendChild(c), this.checkMasks()) {
                        var p = createNS("g");
                        p.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")"), p.appendChild(this.layerElement), this.transformedElement = p, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() { this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v) },
            destroyBaseElement: function() { this.layerElement = null, this.matteElement = null, this.maskManager.destroy() },
            getBaseElement: function() { return this.data.hd ? null : this.baseElement },
            createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this) },
            setMatte: function(t) { this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")") }
        }, IShapeElement.prototype = {
            addShapeToModifiers: function(t) { var e, i = this.shapeModifiers.length; for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t) },
            isShapeInAnimatedModifiers: function(t) {
                for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1
            },
            renderModifiers: function() { if (this.shapeModifiers.length) { var t, e = this.shapes.length; for (t = 0; t < e; t += 1) this.shapes[t].sh.reset(); for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame) } },
            lcEnum: { 1: "butt", 2: "round", 3: "square" },
            ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
            searchProcessedElement: function(t) {
                for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                    if (e[i].elem === t) return e[i].pos;
                    i += 1
                }
                return 0
            },
            addProcessedElement: function(t, e) {
                for (var i = this.processedElements, r = i.length; r;)
                    if (i[r -= 1].elem === t) return void(i[r].pos = e);
                i.push(new ProcessedElement(t, e))
            },
            prepareFrame: function(t) { this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange) }
        }, ITextElement.prototype.initElement = function(t, e, i) { this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties) }, ITextElement.prototype.prepareFrame = function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1) }, ITextElement.prototype.createPathShape = function(t, e) {
            var i, r, n = e.length,
                s = "";
            for (i = 0; i < n; i += 1) r = e[i].ks.k, s += buildShapeString(r, r.i.length, !0, t);
            return s
        }, ITextElement.prototype.updateDocumentData = function(t, e) { this.textProperty.updateDocumentData(t, e) }, ITextElement.prototype.canResizeFont = function(t) { this.textProperty.canResizeFont(t) }, ITextElement.prototype.setMinimumFontSize = function(t) { this.textProperty.setMinimumFontSize(t) }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, n) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
            }
            e.translate(r, n, 0)
        }, ITextElement.prototype.buildColor = function(t) { return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")" }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) { this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide() }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var i, r = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; 0 <= i; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function() { var t, e = this.layers.length; for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame() }, ICompElement.prototype.setElements = function(t) { this.elements = t }, ICompElement.prototype.getElements = function() { return this.elements }, ICompElement.prototype.destroyElements = function() { var t, e = this.layers.length; for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy() }, ICompElement.prototype.destroy = function() { this.destroyElements(), this.destroyBaseElement() }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() { return this.sourceRect }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function() { this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text")) }, SVGTextElement.prototype.buildTextContents = function(t) { for (var e = 0, i = t.length, r = [], n = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(n), n = "") : n += t[e], e += 1; return r.push(n), r }, SVGTextElement.prototype.buildNewText = function() {
            var t, e, i = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
            var r = this.globalData.fontManager.getFontByName(i.f);
            if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
            else {
                this.layerElement.setAttribute("font-family", r.fFamily);
                var n = i.fWeight,
                    s = i.fStyle;
                this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", n)
            }
            this.layerElement.setAttribute("arial-label", i.t);
            var a, o = i.l || [],
                l = !!this.globalData.fontManager.chars;
            e = o.length;
            var h, c = this.mHelper,
                f = "",
                u = this.data.singleShape,
                p = 0,
                d = 0,
                m = !0,
                g = i.tr / 1e3 * i.finalSize;
            if (!u || l || i.sz) {
                var y, v, _ = this.textSpans.length;
                for (t = 0; t < e; t += 1) l && u && 0 !== t || (a = t < _ ? this.textSpans[t] : createNS(l ? "path" : "text"), _ <= t && (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = a, this.layerElement.appendChild(a)), a.style.display = "inherit"), c.reset(), c.scale(i.finalSize / 100, i.finalSize / 100), u && (o[t].n && (p = -g, d += i.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(i, c, o[t].line, p, d), p += o[t].l || 0, p += g), l ? (h = (y = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], u ? f += this.createPathShape(c, h) : a.setAttribute("d", this.createPathShape(c, h))) : (u && a.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                u && a && a.setAttribute("d", f)
            } else {
                var x = this.textContainer,
                    b = "start";
                switch (i.j) {
                    case 1:
                        b = "end";
                        break;
                    case 2:
                        b = "middle"
                }
                x.setAttribute("text-anchor", b), x.setAttribute("letter-spacing", g);
                var w = this.buildTextContents(i.finalText);
                for (e = w.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t] || createNS("tspan")).textContent = w[t], a.setAttribute("x", 0), a.setAttribute("y", d), a.style.display = "inherit", x.appendChild(a), this.textSpans[t] = a, d += i.finalLineHeight;
                this.layerElement.appendChild(x)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextElement.prototype.sourceRectAtTime = function(t) {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var e = this.layerElement.getBBox();
                this.bbox = { top: e.y, left: e.x, width: e.width, height: e.height }
            }
            return this.bbox
        }, SVGTextElement.prototype.renderInnerContent = function() {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var i, r, n = this.textAnimator.renderedLetters,
                    s = this.textProperty.currentData.l;
                for (e = s.length, t = 0; t < e; t += 1) s[t].n || (i = n[t], r = this.textSpans[t], i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
            }
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes() }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e, i, r, n = this.shapes.length,
                s = this.stylesList.length,
                a = [],
                o = !1;
            for (i = 0; i < s; i += 1) {
                for (r = this.stylesList[i], o = !1, t = a.length = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
                1 < a.length && o && this.setShapesAsAnimated(a)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) { var e, i = t.length; for (e = 0; e < i; e += 1) t[e].setAsAnimated() }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var i, r = new SVGStyleData(t, e),
                n = r.pElem;
            return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, r) : "gf" !== t.ty && "gs" !== t.ty || (i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), n.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), n.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createGroupElement = function(t) { var e = new ShapeGroupData; return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                r = new SVGTransformData(i, i.o, e);
            return this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) { var r = 4; "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7); var n = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this)); return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var i = 0, r = this.animatedContents.length; i < r;) {
                if (this.animatedContents[i].element === e) return;
                i += 1
            }
            this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e, i = t.styles,
                r = this.stylesList.length;
            for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, n, s, a) {
            var o, l, h, c, f, u, p = [].concat(s),
                d = t.length - 1,
                m = [],
                g = [];
            for (o = d; 0 <= o; o -= 1) {
                if ((u = this.searchProcessedElement(t[o])) ? e[o] = i[u - 1] : t[o]._render = a, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) u ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && r.appendChild(e[o].style.pElem), m.push(e[o].style);
                else if ("gr" == t[o].ty) {
                    if (u)
                        for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
                    else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, p, a), t[o]._render && r.appendChild(e[o].gr)
                } else "tr" == t[o].ty ? (u || (e[o] = this.createTransformElement(t[o], r)), c = e[o].transform, p.push(c)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (u || (e[o] = this.createShapeElement(t[o], p, n)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (u ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" == t[o].ty && (u ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty), (e[o] = f).init(this, t, o, e), this.shapeModifiers.push(f), a = !1), g.push(f));
                this.addProcessedElement(t[o], o + 1)
            }
            for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
            for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() { this.renderModifiers(); var t, e = this.stylesList.length; for (t = 0; t < e; t += 1) this.stylesList[t].reset(); for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0")) }, SVGShapeElement.prototype.renderShape = function() { var t, e, i = this.animatedContents.length; for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame) }, SVGShapeElement.prototype.destroy = function() { this.destroyBaseElement(), this.shapesData = null, this.itemsData = null }, SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                    i = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
            }
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3 * this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = 3 == i ? 0 : e,
                    n = 2 == i ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", r + " " + n);
                var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", s)
            }
        }, SVGStrokeEffect.prototype.initialize = function() {
            var t, e, i, r, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: i });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS("mask"),
                    a = createElementID();
                s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + locationHref + "#" + a + ")"); n[0];) o.appendChild(n[0]);
                this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                    for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            this.initialized || this.initialize();
            var e, i, r, n = this.paths.length;
            for (e = 0; e < n; e += 1)
                if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                    var s;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                            o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                            l = r.getTotalLength();
                        s = "0 0 0 " + l * a + " ";
                        var h, c = l * (o - a),
                            f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                            u = Math.floor(c / f);
                        for (h = 0; h < u; h += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                        s += "0 " + 10 * l + " 0 0"
                    } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                    r.setAttribute("stroke-dasharray", s)
                }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var p = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * p[0]) + "," + bm_floor(255 * p[1]) + "," + bm_floor(255 * p[2]) + ")")
            }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    i = this.filterManager.effectElements[1].p.v,
                    r = this.filterManager.effectElements[2].p.v,
                    n = r[0] + " " + i[0] + " " + e[0],
                    s = r[1] + " " + i[1] + " " + e[1],
                    a = r[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", a)
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) { var i = createNS(t); return i.setAttribute("type", "table"), e.appendChild(i), i }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, n) { for (var s, a, o = 0, l = Math.min(t, e), h = Math.max(t, e), c = Array.call(null, { length: 256 }), f = 0, u = n - r, p = e - t; o <= 256;) a = (s = o / 256) <= l ? p < 0 ? n : r : h <= s ? p < 0 ? r : n : r + u * Math.pow((s - t) / p, 1 / i), c[f++] = a, o += 256 / 255; return c.join(" ") }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, i = this.filterManager.effectElements;
                this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var i = this.filterManager.effectElements[3].p.v,
                        r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        n = i * Math.cos(r),
                        s = i * Math.sin(r);
                    this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", s)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, i) { this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = i).matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement }

        function SVGEffects(t) {
            var e, i, r = t.data.ef ? t.data.ef.length : 0,
                n = createElementID(),
                s = filtersFactory.createFilter(n),
                a = 0;
            for (this.filters = [], e = 0; e < r; e += 1) i = null, 20 === t.data.ef[e].ty ? (a += 1, i = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (a += 1, i = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (a += 1, i = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (a += 1, i = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (a += 1, i = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (a += 1, i = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), i && this.filters.push(i);
            a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function CVContextData() {
            var t;
            for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = 15
        }

        function CVBaseElement() {}

        function CVImageElement(t, e, i) { this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, i) }

        function CVCompElement(t, e, i) { this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function CVMaskElement(t, e) {
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var i, r = this.masksProperties.length,
                n = !1;
            for (i = 0; i < r; i++) "n" !== this.masksProperties[i].mode && (n = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
            (this.hasMasks = n) && this.element.addRenderableComponent(this)
        }

        function CVShapeElement(t, e, i) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i) }

        function CVSolidElement(t, e, i) { this.initElement(t, e, i) }

        function CVTextElement(t, e, i) { this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, i) }

        function CVEffects() {}

        function HBaseElement(t, e, i) {}

        function HSolidElement(t, e, i) { this.initElement(t, e, i) }

        function HCompElement(t, e, i) { this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function HShapeElement(t, e, i) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 } }

        function HTextElement(t, e, i) { this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i) }

        function HImageElement(t, e, i) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i) }

        function HCameraElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
            var r = PropertyFactory.getProp;
            if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) { var n, s = t.ks.or.k.length; for (n = 0; n < s; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null }
            this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = { mProp: this }
        }

        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var i = t.layerElement.parentNode;
            if (i) {
                for (var r, n = i.children, s = 0, a = n.length; s < a && n[s] !== t.layerElement;) s += 1;
                s <= a - 2 && (r = n[s + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var i = createElementID(),
                    r = createNS("mask");
                r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var n = t.globalData.defs;
                n.appendChild(r);
                var s = createNS("symbol");
                s.setAttribute("id", i), this.replaceInParent(e, i), s.appendChild(e.layerElement), n.appendChild(s);
                var a = createNS("use");
                a.setAttribute("href", "#" + i), r.appendChild(a), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() { this.initialized || this.initialize() }, SVGEffects.prototype.renderFrame = function(t) { var e, i = this.filters.length; for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t) }, CVContextData.prototype.duplicate = function() {
            var t = 2 * this._length,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var i = 0;
            for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
            this._length = t
        }, CVContextData.prototype.reset = function() { this.cArrPos = 0, this.cTr.reset(), this.cO = 1 }, CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() { this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this) },
            createContent: function() {},
            setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                }
            },
            createRenderableComponents: function() { this.maskManager = new CVMaskElement(this.data, this) },
            hideElement: function() { this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0) },
            showElement: function() { this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0) },
            renderFrame: function() { this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), this.setBlendMode(), this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)) },
            destroy: function() { this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy() },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, i, r = t.getContext("2d"),
                    n = this.img.width,
                    s = this.img.height,
                    a = n / s,
                    o = this.assetData.w / this.assetData.h,
                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                o < a && "xMidYMid slice" === l || a < o && "xMidYMid slice" !== l ? e = (i = s) * o : i = (e = n) / o, r.drawImage(this.img, (n - e) / 2, (s - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function(t) { this.canvasContext.drawImage(this.img, 0, 0) }, CVImageElement.prototype.destroy = function() { this.img = null }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() { var t; for (t = this.layers.length - 1; 0 <= t; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame() }, CVCompElement.prototype.destroy = function() {
            var t;
            for (t = this.layers.length - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t, e, i, r, n = this.element.finalTransform.mat,
                    s = this.element.canvasContext,
                    a = this.masksProperties.length;
                for (s.beginPath(), t = 0; t < a; t++)
                    if ("n" !== this.masksProperties[t].mode) {
                        this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), r = this.viewData[t].v, e = n.applyToPointArray(r.v[0][0], r.v[0][1], 0), s.moveTo(e[0], e[1]);
                        var o, l = r._length;
                        for (o = 1; o < l; o++) i = n.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                        i = n.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                    }
                this.element.globalData.renderer.save(!0), s.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() { this.element = null }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []) }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var i = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: !0 === t.hd },
                r = {};
            if ("fl" == t.ty || "st" == t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bm_floor(r.c.v[0]) + "," + bm_floor(r.c.v[1]) + "," + bm_floor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
                if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                    var n = new DashProperty(this, t.d, "canvas", this);
                    r.d = n, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
                }
            } else i.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(i), r.style = i, r
        }, CVShapeElement.prototype.createGroupElement = function(t) { return { it: [], prevViewData: [] } }, CVShapeElement.prototype.createTransformElement = function(t) { return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, .01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } } }, CVShapeElement.prototype.createShapeElement = function(t) { var e = new CVShapeData(this, t, this.stylesList, this.transformsManager); return this.shapes.push(e), this.addShapeToModifiers(e), e }, CVShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) { var e, i = this.stylesList.length; for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t) }, CVShapeElement.prototype.removeTransformFromStyleList = function() { var t, e = this.stylesList.length; for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop() }, CVShapeElement.prototype.closeStyles = function(t) { var e, i = t.length; for (e = 0; e < i; e += 1) t[e].closed = !0 }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, n) {
            var s, a, o, l, h, c, f = t.length - 1,
                u = [],
                p = [],
                d = [].concat(n);
            for (s = f; 0 <= s; s -= 1) {
                if ((l = this.searchProcessedElement(t[s])) ? e[s] = i[l - 1] : t[s]._shouldRender = r, "fl" == t[s].ty || "st" == t[s].ty || "gf" == t[s].ty || "gs" == t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], d), u.push(e[s].style);
                else if ("gr" == t[s].ty) {
                    if (l)
                        for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
                    else e[s] = this.createGroupElement(t[s]);
                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, r, d)
                } else "tr" == t[s].ty ? (l || (c = this.createTransformElement(t[s]), e[s] = c), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" == t[s].ty || "rc" == t[s].ty || "el" == t[s].ty || "sr" == t[s].ty ? l || (e[s] = this.createShapeElement(t[s])) : "tm" == t[s].ty || "rd" == t[s].ty ? (l ? (h = e[s]).closed = !1 : ((h = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = h, this.shapeModifiers.push(h)), p.push(h)) : "rp" == t[s].ty && (l ? (h = e[s]).closed = !0 : (h = ShapeModifiers.getModifier(t[s].ty), (e[s] = h).init(this, t, s, e), this.shapeModifiers.push(h), r = !1), p.push(h));
                this.addProcessedElement(t[s], s + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(u), f = p.length, s = 0; s < f; s += 1) p[s].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() { this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0) }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
            var t, e, i, r, n, s, a, o, l, h = this.stylesList.length,
                c = this.globalData.renderer,
                f = this.globalData.canvasContext;
            for (t = 0; t < h; t += 1)
                if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) { for (c.save(), s = l.elements, "st" === o || "gs" === o ? (f.strokeStyle = "st" === o ? l.co : l.grd, f.lineWidth = l.wi, f.lineCap = l.lc, f.lineJoin = l.lj, f.miterLimit = l.ml || 0) : f.fillStyle = "fl" === o ? l.co : l.grd, c.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && f.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), i = s.length, e = 0; e < i; e += 1) { for ("st" !== o && "gs" !== o || (f.beginPath(), l.da && (f.setLineDash(l.da), f.lineDashOffset = l.do)), n = (a = s[e].trNodes).length, r = 0; r < n; r += 1) "m" == a[r].t ? f.moveTo(a[r].p[0], a[r].p[1]) : "c" == a[r].t ? f.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : f.closePath(); "st" !== o && "gs" !== o || (f.stroke(), l.da && f.setLineDash(this.dashResetter)) } "st" !== o && "gs" !== o && f.fill(l.r), c.restore() }
        }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
            var n, s;
            for (s = t, n = e.length - 1; 0 <= n; n -= 1) "tr" == e[n].ty ? (s = i[n].transform, this.renderShapeTransform(t, s)) : "sh" == e[n].ty || "el" == e[n].ty || "rc" == e[n].ty || "sr" == e[n].ty ? this.renderPath(e[n], i[n]) : "fl" == e[n].ty ? this.renderFill(e[n], i[n], s) : "st" == e[n].ty ? this.renderStroke(e[n], i[n], s) : "gf" == e[n].ty || "gs" == e[n].ty ? this.renderGradientFill(e[n], i[n], s) : "gr" == e[n].ty ? this.renderShape(s, e[n].it, i[n].it) : e[n].ty;
            r && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i, r, n, s = t.trNodes,
                    a = e.paths,
                    o = a._length;
                s.length = 0;
                var l = t.transforms.finalTransform;
                for (n = 0; n < o; n += 1) {
                    var h = a.shapes[n];
                    if (h && h.v) {
                        for (r = h._length, i = 1; i < r; i += 1) 1 === i && s.push({ t: "m", p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), s.push({ t: "c", pts: l.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i]) });
                        1 === r && s.push({ t: "m", p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), h.c && r && (s.push({ t: "c", pts: l.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0]) }), s.push({ t: "z" }))
                    }
                }
                t.trNodes = s
            }
        }, CVShapeElement.prototype.renderPath = function(t, e) { if (!0 !== t.hd && t._shouldRender) { var i, r = e.styledShapes.length; for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh) } }, CVShapeElement.prototype.renderFill = function(t, e, i) {
            var r = e.style;
            (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
            var r = e.style;
            if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var n = this.globalData.canvasContext,
                    s = e.s.v,
                    a = e.e.v;
                if (1 === t.t) u = n.createLinearGradient(s[0], s[1], a[0], a[1]);
                else var o = Math.sqrt(Math.pow(s[0] - a[0], 2) + Math.pow(s[1] - a[1], 2)),
                    l = Math.atan2(a[1] - s[1], a[0] - s[0]),
                    h = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                    c = Math.cos(l + e.a.v) * h + s[0],
                    f = Math.sin(l + e.a.v) * h + s[1],
                    u = n.createRadialGradient(c, f, 0, s[0], s[1], o);
                var p, d = t.g.p,
                    m = e.g.c,
                    g = 1;
                for (p = 0; p < d; p += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * p + 1]), u.addColorStop(m[4 * p] / 100, "rgba(" + m[4 * p + 1] + "," + m[4 * p + 2] + "," + m[4 * p + 3] + "," + g + ")");
                r.grd = u
            }
            r.coOp = e.o.v * i.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
            var r = e.style,
                n = e.d;
            n && (n._mdf || this._isFirstFrame) && (r.da = n.dashArray, r.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() { this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0 }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var i = !1;
            t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var r, n, s = this.globalData.fontManager.getFontByName(t.f),
                a = t.l,
                o = this.mHelper;
            this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
            var l, h, c, f, u, p, d, m, g, y, v = this.data.singleShape,
                _ = t.tr / 1e3 * t.finalSize,
                x = 0,
                b = 0,
                w = !0,
                T = 0;
            for (r = 0; r < n; r += 1) {
                for (h = (l = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && l.data || {}, o.reset(), v && a[r].n && (x = -_, b += t.yOffset, b += w ? 1 : 0, w = !1), d = (u = h.shapes ? h.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, a[r].line, x, b), g = createSizedArray(d), p = 0; p < d; p += 1) {
                    for (f = u[p].ks.k.i.length, m = u[p].ks.k, y = [], c = 1; c < f; c += 1) 1 == c && y.push(o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), y.push(o.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToX(m.i[c][0], m.i[c][1], 0), o.applyToY(m.i[c][0], m.i[c][1], 0), o.applyToX(m.v[c][0], m.v[c][1], 0), o.applyToY(m.v[c][0], m.v[c][1], 0));
                    y.push(o.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), o.applyToX(m.i[0][0], m.i[0][1], 0), o.applyToY(m.i[0][0], m.i[0][1], 0), o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), g[p] = y
                }
                v && (x += a[r].l, x += _), this.textSpans[T] ? this.textSpans[T].elem = g : this.textSpans[T] = { elem: g }, T += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            var t, e, i, r, n, s, a = this.canvasContext;
            this.finalTransform.mat.props, a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var o, l = this.textAnimator.renderedLetters,
                h = this.textProperty.currentData.l;
            e = h.length;
            var c, f, u = null,
                p = null,
                d = null;
            for (t = 0; t < e; t += 1)
                if (!h[t].n) {
                    if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                        for (o && o.fc ? u !== o.fc && (u = o.fc, a.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, a.fillStyle = this.values.fill), r = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                            for (s = (f = c[i]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(f[n], f[n + 1], f[n + 2], f[n + 3], f[n + 4], f[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (o && o.sw ? d !== o.sw && (d = o.sw, a.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? p !== o.sc && (p = o.sc, a.strokeStyle = o.sc) : p !== this.values.stroke && (p = this.values.stroke, a.strokeStyle = this.values.stroke), r = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                            for (s = (f = c[i]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(f[n], f[n + 1], f[n + 2], f[n + 3], f[n + 4], f[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    o && this.globalData.renderer.restore()
                }
        }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = { checkBlendMode: function() {}, initRendererElement: function() { this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement) }, createContainerElements: function() { this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode() }, renderElement: function() { this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function() { this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null) }, createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData) }, addEffects: function() {}, setMatte: function() {} }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() { this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement }, HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) { var i, r = t.length; for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0); return e }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var i, r, n, s, a, o = t.sh.v,
                l = t.transformers,
                h = o._length;
            if (!(h <= 1)) {
                for (i = 0; i < h - 1; i += 1) r = this.getTransformedPoint(l, o.v[i]), n = this.getTransformedPoint(l, o.o[i]), s = this.getTransformedPoint(l, o.i[i + 1]), a = this.getTransformedPoint(l, o.v[i + 1]), this.checkBounds(r, n, s, a, e);
                o.c && (r = this.getTransformedPoint(l, o.v[i]), n = this.getTransformedPoint(l, o.o[i]), s = this.getTransformedPoint(l, o.i[0]), a = this.getTransformedPoint(l, o.v[0]), this.checkBounds(r, n, s, a, e))
            }
        }, HShapeElement.prototype.checkBounds = function(t, e, i, r, n) {
            this.getBoundsOfCurve(t, e, i, r);
            var s = this.shapeBoundingBox;
            n.x = bm_min(s.left, n.x), n.xMax = bm_max(s.right, n.xMax), n.y = bm_min(s.top, n.y), n.yMax = bm_max(s.bottom, n.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
            for (var n, s, a, o, l, h, c, f = [
                    [t[0], r[0]],
                    [t[1], r[1]]
                ], u = 0; u < 2; ++u)
                if (s = 6 * t[u] - 12 * e[u] + 6 * i[u], n = -3 * t[u] + 9 * e[u] - 9 * i[u] + 3 * r[u], a = 3 * e[u] - 3 * t[u], s |= 0, a |= 0, 0 != (n |= 0))(l = s * s - 4 * a * n) < 0 || (0 < (h = (-s + bm_sqrt(l)) / (2 * n)) && h < 1 && f[u].push(this.calculateF(h, t, e, i, r, u)), 0 < (c = (-s - bm_sqrt(l)) / (2 * n)) && c < 1 && f[u].push(this.calculateF(c, t, e, i, r, u)));
                else {
                    if (0 === s) continue;
                    0 < (o = -a / s) && o < 1 && f[u].push(this.calculateF(o, t, e, i, r, u))
                }
            this.shapeBoundingBox.left = bm_min.apply(null, f[0]), this.shapeBoundingBox.top = bm_min.apply(null, f[1]), this.shapeBoundingBox.right = bm_max.apply(null, f[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, f[1])
        }, HShapeElement.prototype.calculateF = function(t, e, i, r, n, s) { return bm_pow(1 - t, 3) * e[s] + 3 * bm_pow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bm_pow(t, 2) * r[s] + bm_pow(t, 3) * n[s] }, HShapeElement.prototype.calculateBoundingBox = function(t, e) { var i, r = t.length; for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e) }, HShapeElement.prototype.currentBoxContains = function(t) { return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox,
                    e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var i = !1;
                this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), (i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style;
            e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var i, r, n = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass;
                else {
                    e.fontFamily = n.fFamily;
                    var s = t.fWeight,
                        a = t.fStyle;
                    e.fontStyle = a, e.fontWeight = s
                }
            var o, l, h, c = t.l;
            r = c.length;
            var f, u = this.mHelper,
                p = "",
                d = 0;
            for (i = 0; i < r; i += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? h = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(o), styleDiv(l)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(o = createTag("span")), l.appendChild(o)), this.globalData.fontManager.chars) {
                    var m, g = this.globalData.fontManager.getCharData(t.finalText[i], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (m = g ? g.data : null, u.reset(), m && m.shapes && (f = m.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), p = this.createPathShape(u, f), o.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(o);
                    else {
                        if (this.innerElem.appendChild(l), m && m.shapes) {
                            document.body.appendChild(h);
                            var y = h.getBBox();
                            h.setAttribute("width", y.width + 2), h.setAttribute("height", y.height + 2), h.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2)), h.style.transform = h.style.webkitTransform = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)", c[i].yOffset = y.y - 1
                        } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                        l.appendChild(h)
                    }
                } else o.textContent = c[i].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(l), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
                this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1
            }
            for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
        }, HTextElement.prototype.renderInnerContent = function() {
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var t, e, i, r, n, s = 0,
                    a = this.textAnimator.renderedLetters,
                    o = this.textProperty.currentData.l;
                for (e = o.length, t = 0; t < e; t += 1) o[t].n ? s += 1 : (r = this.textSpans[t], n = this.textPaths[t], i = a[s], s += 1, i._mdf.m && (this.isMasked ? r.setAttribute("transform", i.m) : r.style.transform = r.style.webkitTransform = i.m), r.style.opacity = i.o, i.sw && i._mdf.sw && n.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && n.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (n.setAttribute("fill", i.fc), n.style.color = i.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var l = this.innerElem.getBBox();
                    this.currentBBox.w !== l.width && (this.currentBBox.w = l.width, this.svgElement.setAttribute("width", l.width)), this.currentBBox.h !== l.height && (this.currentBBox.h = l.height, this.svgElement.setAttribute("height", l.height)), this.currentBBox.w === l.width + 2 && this.currentBBox.h === l.height + 2 && this.currentBBox.x === l.x - 1 && this.currentBBox.y === l.y - 1 || (this.currentBBox.w = l.width + 2, this.currentBBox.h = l.height + 2, this.currentBBox.x = l.x - 1, this.currentBBox.y = l.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() { var t, e, i = this.comp.threeDElements.length; for (t = 0; t < i; t += 1) "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)") }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
            var t, e, i = this._isFirstFrame;
            if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
            if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
                        var r = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var n = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
                        s = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                        a = [n[0] / s, n[1] / s, n[2] / s],
                        o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                        l = Math.atan2(a[1], o),
                        h = Math.atan2(a[0], -a[2]);
                    this.mat.rotateY(h).rotateX(-l)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var c = !this._prevMat.equals(this.mat);
                if ((c || this.pe._mdf) && this.comp.threeDElements) {
                    var f;
                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) "3d" === (f = this.comp.threeDElements[t]).type && (c && (f.container.style.transform = f.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (f.perspectiveElem.style.perspective = f.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() { return null }, HEffects.prototype.renderFrame = function() {};
        var animationManager = function() {
                var t = {},
                    e = [],
                    i = 0,
                    r = 0,
                    n = 0,
                    s = !0,
                    a = !1;

                function o(t) { for (var i = 0, n = t.target; i < r;) e[i].animation === n && (e.splice(i, 1), i -= 1, r -= 1, n.isPaused || c()), i += 1 }

                function l(t, i) {
                    if (!t) return null;
                    for (var n = 0; n < r;) {
                        if (e[n].elem == t && null !== e[n].elem) return e[n].animation;
                        n += 1
                    }
                    var s = new AnimationItem;
                    return f(s, t), s.setData(t, i), s
                }

                function h() { n += 1, d() }

                function c() { n -= 1 }

                function f(t, i) { t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", c), e.push({ elem: i, animation: t }), r += 1 }

                function u(t) {
                    var o, l = t - i;
                    for (o = 0; o < r; o += 1) e[o].animation.advanceTime(l);
                    i = t, n && !a ? window.requestAnimationFrame(u) : s = !0
                }

                function p(t) { i = t, window.requestAnimationFrame(u) }

                function d() {!a && n && s && (window.requestAnimationFrame(p), s = !1) }
                return t.registerAnimation = l, t.loadAnimation = function(t) { var e = new AnimationItem; return f(e, null), e.setParams(t), e }, t.setSpeed = function(t, i) { var n; for (n = 0; n < r; n += 1) e[n].animation.setSpeed(t, i) }, t.setDirection = function(t, i) { var n; for (n = 0; n < r; n += 1) e[n].animation.setDirection(t, i) }, t.play = function(t) { var i; for (i = 0; i < r; i += 1) e[i].animation.play(t) }, t.pause = function(t) { var i; for (i = 0; i < r; i += 1) e[i].animation.pause(t) }, t.stop = function(t) { var i; for (i = 0; i < r; i += 1) e[i].animation.stop(t) }, t.togglePause = function(t) { var i; for (i = 0; i < r; i += 1) e[i].animation.togglePause(t) }, t.searchAnimations = function(t, e, i) {
                    var r, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        s = n.length;
                    for (r = 0; r < s; r += 1) i && n[r].setAttribute("data-bm-type", i), l(n[r], t);
                    if (e && 0 === s) {
                        i || (i = "svg");
                        var a = document.getElementsByTagName("body")[0];
                        a.innerHTML = "";
                        var o = createTag("div");
                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), l(o, t)
                    }
                }, t.resize = function() { var t; for (t = 0; t < r; t += 1) e[t].animation.resize() }, t.goToAndStop = function(t, i, n) { var s; for (s = 0; s < r; s += 1) e[s].animation.goToAndStop(t, i, n) }, t.destroy = function(t) { var i; for (i = r - 1; 0 <= i; i -= 1) e[i].animation.destroy(t) }, t.freeze = function() { a = !0 }, t.unfreeze = function() { a = !1, d() }, t.getRegisteredAnimations = function() {
                    var t, i = e.length,
                        r = [];
                    for (t = 0; t < i; t += 1) r.push(e[t].animation);
                    return r
                }, t
            }(),
            AnimationItem = function() { this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
            switch (e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings)
            }
            this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && ("json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json"), -1 != t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() { this.trigger("data_failed") }.bind(this)))
        }, AnimationItem.prototype.setData = function(t, e) {
            var i = { wrapper: t, animationData: e ? "object" == _typeof(e) ? e : JSON.parse(e) : null },
                r = t.attributes;
            i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
            var n = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
            "" === n || (i.loop = "false" !== n && ("true" === n || parseInt(n)));
            var s = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
            i.autoplay = "false" !== s, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, i, r = this.animationData.layers,
                n = r.length,
                s = t.layers,
                a = s.length;
            for (i = 0; i < a; i += 1)
                for (e = 0; e < n;) {
                    if (r[e].id == s[i].id) { r[e] = s[i]; break }
                    e += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function() { this.trigger("data_failed") }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() { this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment() }, AnimationItem.prototype.imagesLoaded = function() { this.trigger("loaded_images"), this.checkLoaded() }, AnimationItem.prototype.preloadImages = function() { this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this)) }, AnimationItem.prototype.configAnimation = function(t) { this.renderer && (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.renderer.searchExtraCompositions(t.assets), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()) }, AnimationItem.prototype.waitForFontsLoaded = function() { this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20)) }, AnimationItem.prototype.checkLoaded = function() { this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() { this.trigger("DOMLoaded") }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()) }, AnimationItem.prototype.resize = function() { this.renderer.updateContainerSize() }, AnimationItem.prototype.setSubframe = function(t) { this.subframeEnabled = !!t }, AnimationItem.prototype.gotoFrame = function() { this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame() }, AnimationItem.prototype.renderFrame = function() {!1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame) }, AnimationItem.prototype.play = function(t) { t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active"))) }, AnimationItem.prototype.pause = function(t) { t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle")) }, AnimationItem.prototype.togglePause = function(t) { t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause()) }, AnimationItem.prototype.stop = function(t) { t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0)) }, AnimationItem.prototype.goToAndStop = function(t, e, i) { i && this.name != i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause()) }, AnimationItem.prototype.goToAndPlay = function(t, e, i) { this.goToAndStop(t, e, i), this.play() }, AnimationItem.prototype.advanceTime = function(t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                    i = !1;
                e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) { this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart") }, AnimationItem.prototype.setSegment = function(t, e) {
            var i = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== i && this.goToAndStop(i, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), "object" == _typeof(t[0])) { var i, r = t.length; for (i = 0; i < r; i += 1) this.segments.push(t[i]) } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) { this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0) }, AnimationItem.prototype.checkSegments = function(t) { return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0) }, AnimationItem.prototype.destroy = function(t) { t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null) }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) { this.currentRawFrame = t, this.gotoFrame() }, AnimationItem.prototype.setSpeed = function(t) { this.playSpeed = t, this.updaFrameModifier() }, AnimationItem.prototype.setDirection = function(t) { this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier() }, AnimationItem.prototype.updaFrameModifier = function() { this.frameModifier = this.frameMult * this.playSpeed * this.playDirection }, AnimationItem.prototype.getPath = function() { return this.path }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) { var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, i = this.assets.length; e < i;) {
                if (t == this.assets[e].id) return this.assets[e];
                e += 1
            }
        }, AnimationItem.prototype.hide = function() { this.renderer.hide() }, AnimationItem.prototype.show = function() { this.renderer.show() }, AnimationItem.prototype.getDuration = function(t) { return t ? this.totalFrames : this.totalFrames / this.frameRate }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        };
        var Expressions = (oW = {}, oW.initExpressions = function(t) {
                var e = 0,
                    i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() { e += 1 }, t.renderer.globalData.popExpression = function() {
                    0 == (e -= 1) && function() {
                        var t, e = i.length;
                        for (t = 0; t < e; t += 1) i[t].release();
                        i.length = 0
                    }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {-1 === i.indexOf(t) && i.push(t) }
            }, oW),
            oW;
        expressionsPlugin = Expressions;
        var ExpressionManager = function() {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null;

                function $bm_isInstanceOfArray(t) { return t.constructor === Array || t.constructor === Float32Array }

                function isNumerable(t, e) { return "number" === t || "boolean" === t || "string" === t || e instanceof Number }

                function $bm_neg(t) {
                    var e = _typeof(t);
                    if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var i, r = t.length,
                            n = [];
                        for (i = 0; i < r; i += 1) n[i] = -t[i];
                        return n
                    }
                    return t.propType ? t.v : void 0
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) {
                    var i = _typeof(t),
                        r = _typeof(e);
                    if ("string" === i || "string" === r) return t + e;
                    if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] = t[0] + e, t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] + e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1; return o }
                    return 0
                }
                var add = sum;

                function sub(t, e) {
                    var i = _typeof(t),
                        r = _typeof(e);
                    if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t)), "string" === r && (e = parseInt(e)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] = t[0] - e, t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] - e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1; return o }
                    return 0
                }

                function mul(t, e) {
                    var i, r, n, s = _typeof(t),
                        a = _typeof(e);
                    if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) { for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] * e; return i }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) { for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t * e[r]; return i }
                    return 0
                }

                function div(t, e) {
                    var i, r, n, s = _typeof(t),
                        a = _typeof(e);
                    if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) { for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] / e; return i }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) { for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t / e[r]; return i }
                    return 0
                }

                function mod(t, e) { return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, i) {
                    if (i < e) {
                        var r = i;
                        i = e, e = r
                    }
                    return Math.min(Math.max(t, e), i)
                }

                function radiansToDegrees(t) { return t / degToRads }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) { return t * degToRads }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    e || (e = helperLengthArray);
                    var i, r = Math.min(t.length, e.length),
                        n = 0;
                    for (i = 0; i < r; i += 1) n += Math.pow(e[i] - t[i], 2);
                    return Math.sqrt(n)
                }

                function normalize(t) { return div(t, length(t)) }

                function rgbToHsl(t) {
                    var e, i, r = t[0],
                        n = t[1],
                        s = t[2],
                        a = Math.max(r, n, s),
                        o = Math.min(r, n, s),
                        l = (a + o) / 2;
                    if (a == o) e = i = 0;
                    else {
                        var h = a - o;
                        switch (i = .5 < l ? h / (2 - a - o) : h / (a + o), a) {
                            case r:
                                e = (n - s) / h + (n < s ? 6 : 0);
                                break;
                            case n:
                                e = (s - r) / h + 2;
                                break;
                            case s:
                                e = (r - n) / h + 4
                        }
                        e /= 6
                    }
                    return [e, i, l, t[3]]
                }

                function hue2rgb(t, e, i) { return i < 0 && (i += 1), 1 < i && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t }

                function hslToRgb(t) {
                    var e, i, r, n = t[0],
                        s = t[1],
                        a = t[2];
                    if (0 === s) e = i = r = a;
                    else {
                        var o = a < .5 ? a * (1 + s) : a + s - a * s,
                            l = 2 * a - o;
                        e = hue2rgb(l, o, n + 1 / 3), i = hue2rgb(l, o, n), r = hue2rgb(l, o, n - 1 / 3)
                    }
                    return [e, i, r, t[3]]
                }

                function linear(t, e, i, r, n) {
                    if (void 0 !== r && void 0 !== n || (r = e, n = i, e = 0, i = 1), i < e) {
                        var s = i;
                        i = e, e = s
                    }
                    if (t <= e) return r;
                    if (i <= t) return n;
                    var a = i === e ? 0 : (t - e) / (i - e);
                    if (!r.length) return r + (n - r) * a;
                    var o, l = r.length,
                        h = createTypedArray("float32", l);
                    for (o = 0; o < l; o += 1) h[o] = r[o] + (n[o] - r[o]) * a;
                    return h
                }

                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var i, r = e.length;
                        t || (t = createTypedArray("float32", r));
                        var n = createTypedArray("float32", r),
                            s = BMMath.random();
                        for (i = 0; i < r; i += 1) n[i] = t[i] + s * (e[i] - t[i]);
                        return n
                    }
                    return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                }

                function createPath(t, e, i, r) {
                    var n, s = t.length,
                        a = shape_pool.newElement();
                    a.setPathData(!!r, s);
                    var o, l, h = [0, 0];
                    for (n = 0; n < s; n += 1) o = e && e[n] ? e[n] : h, l = i && i[n] ? i[n] : h, a.setTripleAt(t[n][0], t[n][1], l[0] + t[n][0], l[1] + t[n][1], o[0] + t[n][0], o[1] + t[n][1], n, !0);
                    return a
                }

                function initiateExpression(elem, data, property) {
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() { return thisProperty.v } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                        scoped_bm_rt;
                    if (data.xf) { var i, len = data.xf.length; for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())") }
                    var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function(t, e) {
                            var i, r, n = this.pv.length ? this.pv.length : 1,
                                s = createTypedArray("float32", n),
                                a = Math.floor(5 * time);
                            for (r = i = 0; i < a;) {
                                for (r = 0; r < n; r += 1) s[r] += -e + 2 * e * BMMath.random();
                                i += 1
                            }
                            var o = 5 * time,
                                l = o - Math.floor(o),
                                h = createTypedArray("float32", n);
                            if (1 < n) { for (r = 0; r < n; r += 1) h[r] = this.pv[r] + s[r] + (-e + 2 * e * BMMath.random()) * l; return h }
                            return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * l
                        }.bind(this);

                    function loopInDuration(t, e) { return loopIn(t, e, !0) }

                    function loopOutDuration(t, e) { return loopOut(t, e, !0) }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(t, e) {
                        var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                        return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                    }

                    function easeOut(t, e, i, r, n) { return applyEase(easeOutBez, t, e, i, r, n) }

                    function easeIn(t, e, i, r, n) { return applyEase(easeInBez, t, e, i, r, n) }

                    function ease(t, e, i, r, n) { return applyEase(easeInOutBez, t, e, i, r, n) }

                    function applyEase(t, e, i, r, n, s) {
                        void 0 === n ? (n = i, s = r) : e = (e - i) / (r - i);
                        var a = t(e = 1 < e ? 1 : e < 0 ? 0 : e);
                        if ($bm_isInstanceOfArray(n)) {
                            var o, l = n.length,
                                h = createTypedArray("float32", l);
                            for (o = 0; o < l; o += 1) h[o] = (s[o] - n[o]) * a + n[o];
                            return h
                        }
                        return (s - n) * a + n
                    }

                    function nearestKey(t) {
                        var e, i, r, n = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                            if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                            else { for (e = 0; e < n - 1; e += 1) { if (t === data.k[e].t) { i = e + 1, r = data.k[e].t; break } if (t > data.k[e].t && t < data.k[e + 1].t) { r = t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, data.k[e + 1].t) : (i = e + 1, data.k[e].t); break } } - 1 === i && (i = e + 1, r = data.k[e].t) }
                        else r = i = 0;
                        var s = {};
                        return s.index = i, s.time = r / elem.comp.globalData.frameRate, s
                    }

                    function key(t) {
                        var e, i, r;
                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
                        var n = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
                        for (r = n.length, i = 0; i < r; i += 1) e[i] = n[i], e.value[i] = n[i];
                        return e
                    }

                    function framesToTime(t, e) { return e || (e = elem.comp.globalData.frameRate), t / e }

                    function timeToFrames(t, e) { return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e }

                    function seedRandom(t) { BMMath.seedrandom(randSeed + t) }

                    function sourceRectAtTime() { return elem.sourceRectAtTime() }

                    function substring(t, e) { return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "" }

                    function substr(t, e) { return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "" }
                    var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(t) { return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt) }
                    return executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob
            }(),
            expressionHelpers = {
                searchExpressions: function(t, e, i) { e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i))) },
                getSpeedAtTime: function(t) {
                    var e = this.getValueAtTime(t),
                        i = this.getValueAtTime(t + -.01),
                        r = 0;
                    if (e.length) {
                        var n;
                        for (n = 0; n < e.length; n += 1) r += Math.pow(i[n] - e[n], 2);
                        r = 100 * Math.sqrt(r)
                    } else r = 0;
                    return r
                },
                getVelocityAtTime: function(t) {
                    if (void 0 !== this.vel) return this.vel;
                    var e, i, r = this.getValueAtTime(t),
                        n = this.getValueAtTime(t + -.001);
                    if (r.length)
                        for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (n[i] - r[i]) / -.001;
                    else e = (n - r) / -.001;
                    return e
                },
                getValueAtTime: function(t) { return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value },
                getStaticValueAtTime: function() { return this.pv },
                setGroupProperty: function(t) { this.propertyGroup = t }
            };
        ! function() {
            function t(t, e, i) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : "";
                var r, n, s, a, o, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    c = h[h.length - 1].t;
                if (l <= c) return this.pv;
                if (i ? n = c - (r = e ? Math.abs(c - elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), r = c - (n = h[h.length - 1 - e].t)), "pingpong" === t) { if (Math.floor((l - n) / r) % 2 != 0) return this.getValueAtTime((r - (l - n) % r + n) / this.comp.globalData.frameRate, 0) } else {
                    if ("offset" === t) {
                        var f = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime(((l - n) % r + n) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((l - n) / r);
                        if (this.pv.length) { for (a = (o = new Array(f.length)).length, s = 0; s < a; s += 1) o[s] = (u[s] - f[s]) * d + p[s]; return o }
                        return (u - f) * d + p
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) { for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4; return o }
                        return m + (l - c) / .001 * (m - g)
                    }
                }
                return this.getValueAtTime(((l - n) % r + n) / this.comp.globalData.frameRate, 0)
            }

            function e(t, e, i) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : "";
                var r, n, s, a, o, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    c = h[0].t;
                if (c <= l) return this.pv;
                if (i ? n = c + (r = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > h.length - 1) && (e = h.length - 1), r = (n = h[e].t) - c), "pingpong" === t) { if (Math.floor((c - l) / r) % 2 == 0) return this.getValueAtTime(((c - l) % r + c) / this.comp.globalData.frameRate, 0) } else {
                    if ("offset" === t) {
                        var f = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime((r - (c - l) % r + c) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((c - l) / r) + 1;
                        if (this.pv.length) { for (a = (o = new Array(f.length)).length, s = 0; s < a; s += 1) o[s] = p[s] - (u[s] - f[s]) * d; return o }
                        return p - (u - f) * d
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            g = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) { for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * (c - l) / .001; return o }
                        return m + (m - g) * (c - l) / .001
                    }
                }
                return this.getValueAtTime((r - (c - l) % r + c) / this.comp.globalData.frameRate, 0)
            }

            function i(t, e) {
                if (!this.k) return this.pv;
                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                var i, r, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    s = n - t,
                    a = 1 < e ? (n + t - s) / (e - 1) : 1,
                    o = 0,
                    l = 0;
                for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                    if (r = this.getValueAtTime(s + o * a), this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1) i[l] += r[l];
                    else i += r;
                    o += 1
                }
                if (this.pv.length)
                    for (l = 0; l < this.pv.length; l += 1) i[l] /= e;
                else i /= e;
                return i
            }
            var r = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, i) { var n = r(t, e, i); return n.dynamicProperties.length ? n.getValueAtTime = function(t) { console.warn("Transform at time not supported") }.bind(n) : n.getValueAtTime = function(t) {}.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(r, s, a, o, l) {
                var h = n(r, s, a, o, l);
                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = i, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === s.a ? s.k.length : 0, h.propertyIndex = s.ix;
                var c = 0;
                return 0 !== a && (c = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), h._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: c }, expressionHelpers.searchExpressions(r, s, h), h.k && l.addDynamicProperty(h), h
            };
            var s = ShapePropertyFactory.getConstructorFunction(),
                a = ShapePropertyFactory.getKeyframedConstructorFunction();

            function o() {}
            o.prototype = {
                vertices: function(t, e) {
                    this.k && this.getValue();
                    var i = this.v;
                    void 0 !== e && (i = this.getValueAtTime(e, 0));
                    var r, n = i._length,
                        s = i[t],
                        a = i.v,
                        o = createSizedArray(n);
                    for (r = 0; r < n; r += 1) o[r] = "i" === t || "o" === t ? [s[r][0] - a[r][0], s[r][1] - a[r][1]] : [s[r][0], s[r][1]];
                    return o
                },
                points: function(t) { return this.vertices("v", t) },
                inTangents: function(t) { return this.vertices("i", t) },
                outTangents: function(t) { return this.vertices("o", t) },
                isClosed: function() { return this.v.c },
                pointOnPath: function(t, e) {
                    var i = this.v;
                    void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                    for (var r, n = this._segmentsLength, s = n.lengths, a = n.totalLength * t, o = 0, l = s.length, h = 0; o < l;) {
                        if (h + s[o].addedLength > a) {
                            var c = o,
                                f = i.c && o === l - 1 ? 0 : o + 1,
                                u = (a - h) / s[o].addedLength;
                            r = bez.getPointInSegment(i.v[c], i.v[f], i.o[c], i.i[f], u, s[o]);
                            break
                        }
                        h += s[o].addedLength, o += 1
                    }
                    return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                },
                vectorOnPath: function(t, e, i) {
                    t = 1 == t ? this.v.c ? 0 : .999 : t;
                    var r = this.pointOnPath(t, e),
                        n = this.pointOnPath(t + .001, e),
                        s = n[0] - r[0],
                        a = n[1] - r[1],
                        o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                    return 0 === o ? [0, 0] : "tangent" === i ? [s / o, a / o] : [-a / o, s / o]
                },
                tangentOnPath: function(t, e) { return this.vectorOnPath(t, e, "tangent") },
                normalOnPath: function(t, e) { return this.vectorOnPath(t, e, "normal") },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([o], s), extendPrototype([o], a), a.prototype.getValueAtTime = function(t) { return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shape_pool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue }, a.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var l = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, i, r, n) { var s = l(t, e, i, r, n); return s.propertyIndex = e.ix, s.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s }
        }(), TextProperty.prototype.getExpressionValue = function(t, e) { var i = this.calculateExpression(e); if (t.t === i) return t; var r = {}; return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
                e = this.searchExpressions();
            return this.kf = t || e, this.kf
        }, TextProperty.prototype.searchExpressions = function() { if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0 };
        var ShapeExpressionInterface = function() {
                function t(t, f, u) {
                    var p, d = [],
                        m = t ? t.length : 0;
                    for (p = 0; p < m; p += 1) "gr" == t[p].ty ? d.push(e(t[p], f[p], u)) : "fl" == t[p].ty ? d.push(i(t[p], f[p], u)) : "st" == t[p].ty ? d.push(r(t[p], f[p], u)) : "tm" == t[p].ty ? d.push(n(t[p], f[p], u)) : "tr" == t[p].ty || ("el" == t[p].ty ? d.push(s(t[p], f[p], u)) : "sr" == t[p].ty ? d.push(a(t[p], f[p], u)) : "sh" == t[p].ty ? d.push(c(t[p], f[p], u)) : "rc" == t[p].ty ? d.push(o(t[p], f[p], u)) : "rd" == t[p].ty ? d.push(l(t[p], f[p], u)) : "rp" == t[p].ty && d.push(h(t[p], f[p], u)));
                    return d
                }

                function e(e, i, r) {
                    var n, s, a, o, l, h = function t(e) {
                            switch (e) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return t.content;
                                default:
                                    return t.transform
                            }
                        },
                        c = (n = e, s = i, a = h.propertyGroup = function(t) { return 1 === t ? h : r(t - 1) }, (l = function(t) {
                            for (var e = 0, i = o.length; e < i;) {
                                if (o[e]._name === t || o[e].mn === t || o[e].propertyIndex === t || o[e].ix === t || o[e].ind === t) return o[e];
                                e += 1
                            }
                            if ("number" == typeof t) return o[t - 1]
                        }).propertyGroup = function(t) { return 1 === t ? l : a(t - 1) }, o = t(n.it, s.it, l.propertyGroup), l.numProperties = o.length, l.propertyIndex = n.cix, l._name = n.nm, l),
                        f = function(t, e, i) {
                            function r(t) { return 1 == t ? n : i(--t) }

                            function n(e) { return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : void 0 }
                            return e.transform.mProps.o.setGroupProperty(r), e.transform.mProps.p.setGroupProperty(r), e.transform.mProps.a.setGroupProperty(r), e.transform.mProps.s.setGroupProperty(r), e.transform.mProps.r.setGroupProperty(r), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(r), e.transform.mProps.sa.setGroupProperty(r)), e.transform.op.setGroupProperty(r), Object.defineProperties(n, { opacity: { get: ExpressionPropertyInterface(e.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(e.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(e.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(e.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(e.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(e.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(e.transform.mProps.sa) }, _name: { value: t.nm } }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = i, n
                        }(e.it[e.it.length - 1], i.it[i.it.length - 1], h.propertyGroup);
                    return h.content = c, h.transform = f, Object.defineProperty(h, "_name", { get: function() { return e.nm } }), h.numProperties = e.np, h.propertyIndex = e.ix, h.nm = e.nm, h.mn = e.mn, h
                }

                function i(t, e, i) {
                    function r(t) { return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : void 0 }
                    return Object.defineProperties(r, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), r
                }

                function r(t, e, i) {
                    function r(t) { return 1 === t ? ob : i(t - 1) }

                    function n(t) { return 1 === t ? l : r(t - 1) }
                    var s, a, o = t.d ? t.d.length : 0,
                        l = {};
                    for (s = 0; s < o; s += 1) a = s, Object.defineProperty(l, t.d[a].nm, { get: ExpressionPropertyInterface(e.d.dataProps[a].p) }), e.d.dataProps[s].p.setGroupProperty(n);

                    function h(t) { return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : void 0 }
                    return Object.defineProperties(h, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, strokeWidth: { get: ExpressionPropertyInterface(e.w) }, dash: { get: function() { return l } }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), e.w.setGroupProperty(r), h
                }

                function n(t, e, i) {
                    function r(t) { return 1 == t ? n : i(--t) }

                    function n(e) { return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : void 0 }
                    return n.propertyIndex = t.ix, e.s.setGroupProperty(r), e.e.setGroupProperty(r), e.o.setGroupProperty(r), n.propertyIndex = t.ix, n.propertyGroup = i, Object.defineProperties(n, { start: { get: ExpressionPropertyInterface(e.s) }, end: { get: ExpressionPropertyInterface(e.e) }, offset: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm } }), n.mn = t.mn, n
                }

                function s(t, e, i) {
                    function r(t) { return 1 == t ? s : i(--t) }
                    s.propertyIndex = t.ix;
                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                    function s(e) { return t.p.ix === e ? s.position : t.s.ix === e ? s.size : void 0 }
                    return n.s.setGroupProperty(r), n.p.setGroupProperty(r), Object.defineProperties(s, { size: { get: ExpressionPropertyInterface(n.s) }, position: { get: ExpressionPropertyInterface(n.p) }, _name: { value: t.nm } }), s.mn = t.mn, s
                }

                function a(t, e, i) {
                    function r(t) { return 1 == t ? s : i(--t) }
                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                    function s(e) { return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : void 0 : s.innerRadius }
                    return s.propertyIndex = t.ix, n.or.setGroupProperty(r), n.os.setGroupProperty(r), n.pt.setGroupProperty(r), n.p.setGroupProperty(r), n.r.setGroupProperty(r), t.ir && (n.ir.setGroupProperty(r), n.is.setGroupProperty(r)), Object.defineProperties(s, { position: { get: ExpressionPropertyInterface(n.p) }, rotation: { get: ExpressionPropertyInterface(n.r) }, points: { get: ExpressionPropertyInterface(n.pt) }, outerRadius: { get: ExpressionPropertyInterface(n.or) }, outerRoundness: { get: ExpressionPropertyInterface(n.os) }, innerRadius: { get: ExpressionPropertyInterface(n.ir) }, innerRoundness: { get: ExpressionPropertyInterface(n.is) }, _name: { value: t.nm } }), s.mn = t.mn, s
                }

                function o(t, e, i) {
                    function r(t) { return 1 == t ? s : i(--t) }
                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                    function s(e) { return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? s.size : void 0 }
                    return s.propertyIndex = t.ix, n.p.setGroupProperty(r), n.s.setGroupProperty(r), n.r.setGroupProperty(r), Object.defineProperties(s, { position: { get: ExpressionPropertyInterface(n.p) }, roundness: { get: ExpressionPropertyInterface(n.r) }, size: { get: ExpressionPropertyInterface(n.s) }, _name: { value: t.nm } }), s.mn = t.mn, s
                }

                function l(t, e, i) {
                    var r = e;

                    function n(e) { if (t.r.ix === e || "Round Corners 1" === e) return n.radius }
                    return n.propertyIndex = t.ix, r.rd.setGroupProperty(function(t) { return 1 == t ? n : i(--t) }), Object.defineProperties(n, { radius: { get: ExpressionPropertyInterface(r.rd) }, _name: { value: t.nm } }), n.mn = t.mn, n
                }

                function h(t, e, i) {
                    function r(t) { return 1 == t ? s : i(--t) }
                    var n = e;

                    function s(e) { return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : void 0 }
                    return s.propertyIndex = t.ix, n.c.setGroupProperty(r), n.o.setGroupProperty(r), Object.defineProperties(s, { copies: { get: ExpressionPropertyInterface(n.c) }, offset: { get: ExpressionPropertyInterface(n.o) }, _name: { value: t.nm } }), s.mn = t.mn, s
                }

                function c(t, e, i) {
                    var r = e.sh;

                    function n(t) { if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return n.path }
                    return r.setGroupProperty(function(t) { return 1 == t ? n : i(--t) }), Object.defineProperties(n, { path: { get: function() { return r.k && r.getValue(), r } }, shape: { get: function() { return r.k && r.getValue(), r } }, _name: { value: t.nm }, ix: { value: t.ix }, mn: { value: t.mn } }), n
                }
                return function(e, i, r) {
                    var n;

                    function s(t) {
                        if ("number" == typeof t) return n[t - 1];
                        for (var e = 0, i = n.length; e < i;) {
                            if (n[e]._name === t) return n[e];
                            e += 1
                        }
                    }
                    return s.propertyGroup = r, n = t(e, i, s), s.numProperties = n.length, s
                }
            }(),
            TextExpressionInterface = function(t) {
                var e;

                function i() {}
                return Object.defineProperty(i, "sourceText", { get: function() { t.textProperty.getValue(); var i = t.textProperty.currentData.t; return void 0 !== i && (t.textProperty.currentData.t = void 0, (e = new String(i)).value = i || new String(i)), e } }), i
            },
            LayerExpressionInterface = function() {
                function t(t, e) { var i = new Matrix; if (i.reset(), this._elem.finalTransform.mProp.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) { var r, n = this._elem.hierarchy.length; for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(i); return i.applyToPointArray(t[0], t[1], t[2] || 0) } return i.applyToPointArray(t[0], t[1], t[2] || 0) }

                function e(t, e) { var i = new Matrix; if (i.reset(), this._elem.finalTransform.mProp.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) { var r, n = this._elem.hierarchy.length; for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(i); return i.inversePoint(t) } return i.inversePoint(t) }

                function i(t) { var e = new Matrix; if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) { var i, r = this._elem.hierarchy.length; for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e); return e.inversePoint(t) } return e.inversePoint(t) }

                function r() { return [1, 1, 1, 1] }
                return function(n) {
                    var s;

                    function a(t) {
                        switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return a.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return s;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return a.effect
                        }
                    }
                    a.toWorld = t, a.fromWorld = e, a.toComp = t, a.fromComp = i, a.sampleImage = r, a.sourceRectAtTime = n.sourceRectAtTime.bind(n);
                    var o = getDescriptor(s = TransformExpressionInterface((a._elem = n).finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(a, { hasParent: { get: function() { return n.hierarchy.length } }, parent: { get: function() { return n.hierarchy[0].layerInterface } }, rotation: getDescriptor(s, "rotation"), scale: getDescriptor(s, "scale"), position: getDescriptor(s, "position"), opacity: getDescriptor(s, "opacity"), anchorPoint: o, anchor_point: o, transform: { get: function() { return s } }, active: { get: function() { return n.isInRange } } }), a.startTime = n.data.st, a.index = n.data.ind, a.source = n.data.refId, a.height = 0 === n.data.ty ? n.data.h : 100, a.width = 0 === n.data.ty ? n.data.w : 100, a.inPoint = n.data.ip / n.comp.globalData.frameRate, a.outPoint = n.data.op / n.comp.globalData.frameRate, a._name = n.data.nm, a.registerMaskInterface = function(t) { a.mask = new MaskManagerInterface(t, n) }, a.registerEffectsInterface = function(t) { a.effect = t }, a
                }
            }(),
            CompExpressionInterface = function(t) {
                function e(e) {
                    for (var i = 0, r = t.layers.length; i < r;) {
                        if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", { value: t.data.nm }), (e.layer = e).pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            },
            TransformExpressionInterface = function(t) {
                function e(t) {
                    switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity
                    }
                }
                if (Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p) var i = ExpressionPropertyInterface(t.p);
                return Object.defineProperty(e, "position", { get: function() { return t.p ? i() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0] } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e
            },
            ProjectInterface = function() {
                function t(t) { this.compositions.push(t) }
                return function() {
                    function e(t) {
                        for (var e = 0, i = this.compositions.length; e < i;) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1
                        }
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                }
            }(),
            EffectsExpressionInterface = function() {
                function t(i, r, n, s) {
                    var a, o = [],
                        l = i.ef.length;
                    for (a = 0; a < l; a += 1) 5 === i.ef[a].ty ? o.push(t(i.ef[a], r.effectElements[a], r.effectElements[a].propertyGroup, s)) : o.push(e(r.effectElements[a], i.ef[a].ty, s, h));

                    function h(t) { return 1 === t ? c : n(t - 1) }
                    var c = function(t) {
                        for (var e = i.ef, r = 0, n = e.length; r < n;) {
                            if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? o[r] : o[r]();
                            r += 1
                        }
                        return o[0]()
                    };
                    return c.propertyGroup = h, "ADBE Color Control" === i.mn && Object.defineProperty(c, "color", { get: function() { return o[0]() } }), Object.defineProperty(c, "numProperties", { get: function() { return i.np } }), c.active = c.enabled = 0 !== i.en, c
                }

                function e(t, e, i, r) {
                    var n = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(r),
                        function() { return 10 === e ? i.comp.compInterface(t.p.v) : n() }
                }
                return {
                    createEffectsInterface: function(e, i) {
                        if (e.effectsManager) {
                            var r, n = [],
                                s = e.data.ef,
                                a = e.effectsManager.effectElements.length;
                            for (r = 0; r < a; r += 1) n.push(t(s[r], e.effectsManager.effectElements[r], i, e));
                            return function(t) {
                                for (var i = e.data.ef || [], r = 0, s = i.length; r < s;) {
                                    if (t === i[r].nm || t === i[r].mn || t === i[r].ix) return n[r];
                                    r += 1
                                }
                            }
                        }
                    }
                }
            }(),
            MaskManagerInterface = function() {
                function t(t, e) { this._mask = t, this._data = e }
                return Object.defineProperty(t.prototype, "maskPath", { get: function() { return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() { return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v } }),
                    function(e, i) {
                        var r, n = createSizedArray(e.viewData.length),
                            s = e.viewData.length;
                        for (r = 0; r < s; r += 1) n[r] = new t(e.viewData[r], e.masksProperties[r]);
                        return function(t) {
                            for (r = 0; r < s;) {
                                if (e.masksProperties[r].nm === t) return n[r];
                                r += 1
                            }
                        }
                    }
            }(),
            ExpressionPropertyInterface = function() {
                var t = { pv: 0, v: 0, mult: 1 },
                    e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };

                function i(t, e, i) {
                    Object.defineProperty(t, "velocity", { get: function() { return e.getVelocityAtTime(e.comp.currentFrame) } }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                        if (t.numKeys) {
                            var n;
                            n = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                            var s = "unidimensional" === i ? new Number(n) : Object.assign({}, n);
                            return s.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, s
                        }
                        return 0
                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                }

                function r() { return t }
                return function(n) {
                    return n ? "unidimensional" === n.propType ? function(e) {
                        e && "pv" in e || (e = t);
                        var r = 1 / e.mult,
                            n = e.pv * r,
                            s = new Number(n);
                        return s.value = n, i(s, e, "unidimensional"),
                            function() { return e.k && e.getValue(), n = e.v * r, s.value !== n && ((s = new Number(n)).value = n, i(s, e, "unidimensional")), s }
                    }(n) : function(t) {
                        t && "pv" in t || (t = e);
                        var r = 1 / t.mult,
                            n = t.pv.length,
                            s = createTypedArray("float32", n),
                            a = createTypedArray("float32", n);
                        return s.value = a, i(s, t, "multidimensional"),
                            function() { t.k && t.getValue(); for (var e = 0; e < n; e += 1) s[e] = a[e] = t.v[e] * r; return s }
                    }(n) : r
                }
            }(),
            Y4, Z4;

        function SliderEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

        function AngleEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

        function ColorEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, i) }

        function PointEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, i) }

        function LayerIndexEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

        function MaskIndexEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

        function CheckboxEffect(t, e, i) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, i) }

        function NoValueEffect() { this.p = {} }

        function EffectsManager() {}

        function EffectsManager(t, e) {
            var i = t.ef || [];
            this.effectElements = [];
            var r, n, s = i.length;
            for (r = 0; r < s; r++) n = new GroupEffect(i[r], e), this.effectElements.push(n)
        }

        function GroupEffect(t, e) { this.init(t, e) }
        Y4 = function() {
            function t(t, e) { return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v }
            return function(e, i) { this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = i.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, i, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty }
        }(), Z4 = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, i) { return 1 === e.t ? new Y4(t, e, i) : Z4(t, e, i) }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var i, r, n = this.data.ef.length,
                s = this.data.ef;
            for (i = 0; i < n; i += 1) {
                switch (r = null, s[i].ty) {
                    case 0:
                        r = new SliderEffect(s[i], e, this);
                        break;
                    case 1:
                        r = new AngleEffect(s[i], e, this);
                        break;
                    case 2:
                        r = new ColorEffect(s[i], e, this);
                        break;
                    case 3:
                        r = new PointEffect(s[i], e, this);
                        break;
                    case 4:
                    case 7:
                        r = new CheckboxEffect(s[i], e, this);
                        break;
                    case 10:
                        r = new LayerIndexEffect(s[i], e, this);
                        break;
                    case 11:
                        r = new MaskIndexEffect(s[i], e, this);
                        break;
                    case 5:
                        r = new EffectsManager(s[i], e, this);
                        break;
                    default:
                        r = new NoValueEffect(s[i], e, this)
                }
                r && this.effectElements.push(r)
            }
        };
        var lottiejs = {},
            _isFrozen = !1;

        function setLocationHref(t) { locationHref = t }

        function searchAnimations() {!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations() }

        function setSubframeRendering(t) { subframeEnabled = t }

        function loadAnimation(t) { return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t) }

        function setQuality(t) {
            if ("string" == typeof t) switch (t) {
                case "high":
                    defaultCurveSegments = 200;
                    break;
                case "medium":
                    defaultCurveSegments = 50;
                    break;
                case "low":
                    defaultCurveSegments = 10
            } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
            roundValues(!(50 <= defaultCurveSegments))
        }

        function inBrowser() { return "undefined" != typeof navigator }

        function installPlugin(t, e) { "expressions" === t && (expressionsPlugin = e) }

        function getFactory(t) {
            switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix
            }
        }

        function checkReady() { "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations()) }

        function getQueryVariable(t) { for (var e = queryString.split("&"), i = 0; i < e.length; i++) { var r = e[i].split("="); if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]) } }
        lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.6";
        var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "";
        if (standalone) {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || { src: "" },
                queryString = myScript.src.replace(/^[^\?]+\??/, "");
            renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottiejs
    }, __WEBPACK_AMD_DEFINE_RESULT__ = function() { return b(a) }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(t, e, i) { i(137), t.exports = i(338) }, function(t, e) {
    [Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean).forEach(function(t) { t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function() { this.parentNode && this.parentNode.removeChild(this) } }) })
}, function(t, e, i) {
    "use strict";
    i(139);
    var r, n = (r = i(311)) && r.__esModule ? r : { default: r };
    n.default._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), n.default._babelPolyfill = !0
}, function(t, e, i) {
    "use strict";
    i(140), i(283), i(285), i(288), i(290), i(292), i(294), i(296), i(298), i(300), i(302), i(304), i(306), i(310)
}, function(t, e, i) { i(141), i(144), i(145), i(146), i(147), i(148), i(149), i(150), i(151), i(152), i(153), i(154), i(155), i(156), i(157), i(158), i(159), i(160), i(161), i(162), i(163), i(164), i(165), i(166), i(167), i(168), i(169), i(170), i(171), i(172), i(173), i(174), i(175), i(176), i(177), i(178), i(179), i(180), i(181), i(182), i(183), i(184), i(185), i(187), i(188), i(189), i(190), i(191), i(192), i(193), i(194), i(195), i(196), i(197), i(198), i(199), i(200), i(201), i(202), i(203), i(204), i(205), i(206), i(207), i(208), i(209), i(210), i(211), i(212), i(213), i(214), i(215), i(216), i(217), i(218), i(219), i(220), i(222), i(223), i(225), i(226), i(227), i(228), i(229), i(230), i(231), i(233), i(234), i(235), i(236), i(237), i(238), i(239), i(240), i(241), i(242), i(243), i(244), i(245), i(89), i(246), i(118), i(247), i(119), i(248), i(249), i(250), i(251), i(120), i(254), i(255), i(256), i(257), i(258), i(259), i(260), i(261), i(262), i(263), i(264), i(265), i(266), i(267), i(268), i(269), i(270), i(271), i(272), i(273), i(274), i(275), i(276), i(277), i(278), i(279), i(280), i(281), i(282), t.exports = i(9) }, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(16),
        s = i(10),
        a = i(1),
        o = i(14),
        l = i(32).KEY,
        h = i(3),
        c = i(55),
        f = i(43),
        u = i(34),
        p = i(6),
        d = i(70),
        m = i(99),
        g = i(143),
        y = i(58),
        v = i(4),
        _ = i(5),
        x = i(12),
        b = i(18),
        w = i(31),
        T = i(33),
        S = i(38),
        P = i(102),
        E = i(24),
        k = i(57),
        A = i(11),
        C = i(36),
        M = E.f,
        D = A.f,
        F = P.f,
        O = r.Symbol,
        I = r.JSON,
        R = I && I.stringify,
        L = p("_hidden"),
        N = p("toPrimitive"),
        B = {}.propertyIsEnumerable,
        V = c("symbol-registry"),
        z = c("symbols"),
        j = c("op-symbols"),
        G = Object.prototype,
        q = "function" == typeof O && !!k.f,
        H = r.QObject,
        X = !H || !H.prototype || !H.prototype.findChild,
        Y = s && h(function() { return 7 != S(D({}, "a", { get: function() { return D(this, "a", { value: 7 }).a } })).a }) ? function(t, e, i) {
            var r = M(G, e);
            r && delete G[e], D(t, e, i), r && t !== G && D(G, e, r)
        } : D,
        W = function(t) { var e = z[t] = S(O.prototype); return e._k = t, e },
        U = q && "symbol" == typeof O.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return t instanceof O },
        K = function(t, e, i) { return t === G && K(j, e, i), v(t), e = w(e, !0), v(i), n(z, e) ? (i.enumerable ? (n(t, L) && t[L][e] && (t[L][e] = !1), i = S(i, { enumerable: T(0, !1) })) : (n(t, L) || D(t, L, T(1, {})), t[L][e] = !0), Y(t, e, i)) : D(t, e, i) },
        $ = function(t, e) { v(t); for (var i, r = g(e = b(e)), n = 0, s = r.length; s > n;) K(t, i = r[n++], e[i]); return t },
        Z = function(t) { var e = B.call(this, t = w(t, !0)); return !(this === G && n(z, t) && !n(j, t)) && (!(e || !n(this, t) || !n(z, t) || n(this, L) && this[L][t]) || e) },
        J = function(t, e) { if (t = b(t), e = w(e, !0), t !== G || !n(z, e) || n(j, e)) { var i = M(t, e); return !i || !n(z, e) || n(t, L) && t[L][e] || (i.enumerable = !0), i } },
        Q = function(t) { for (var e, i = F(b(t)), r = [], s = 0; i.length > s;) n(z, e = i[s++]) || e == L || e == l || r.push(e); return r },
        tt = function(t) { for (var e, i = t === G, r = F(i ? j : b(t)), s = [], a = 0; r.length > a;) !n(z, e = r[a++]) || i && !n(G, e) || s.push(z[e]); return s };
    q || (o((O = function() {
        if (this instanceof O) throw TypeError("Symbol is not a constructor!");
        var t = u(arguments.length > 0 ? arguments[0] : void 0),
            e = function(i) { this === G && e.call(j, i), n(this, L) && n(this[L], t) && (this[L][t] = !1), Y(this, t, T(1, i)) };
        return s && X && Y(G, t, { configurable: !0, set: e }), W(t)
    }).prototype, "toString", function() { return this._k }), E.f = J, A.f = K, i(39).f = P.f = Q, i(51).f = Z, k.f = tt, s && !i(35) && o(G, "propertyIsEnumerable", Z, !0), d.f = function(t) { return W(p(t)) }), a(a.G + a.W + a.F * !q, { Symbol: O });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; et.length > it;) p(et[it++]);
    for (var rt = C(p.store), nt = 0; rt.length > nt;) m(rt[nt++]);
    a(a.S + a.F * !q, "Symbol", {
        for: function(t) { return n(V, t += "") ? V[t] : V[t] = O(t) },
        keyFor: function(t) {
            if (!U(t)) throw TypeError(t + " is not a symbol!");
            for (var e in V)
                if (V[e] === t) return e
        },
        useSetter: function() { X = !0 },
        useSimple: function() { X = !1 }
    }), a(a.S + a.F * !q, "Object", { create: function(t, e) { return void 0 === e ? S(t) : $(S(t), e) }, defineProperty: K, defineProperties: $, getOwnPropertyDescriptor: J, getOwnPropertyNames: Q, getOwnPropertySymbols: tt });
    var st = h(function() { k.f(1) });
    a(a.S + a.F * st, "Object", { getOwnPropertySymbols: function(t) { return k.f(x(t)) } }), I && a(a.S + a.F * (!q || h(function() { var t = O(); return "[null]" != R([t]) || "{}" != R({ a: t }) || "{}" != R(Object(t)) })), "JSON", { stringify: function(t) { for (var e, i, r = [t], n = 1; arguments.length > n;) r.push(arguments[n++]); if (i = e = r[1], (_(e) || void 0 !== t) && !U(t)) return y(e) || (e = function(t, e) { if ("function" == typeof i && (e = i.call(this, t, e)), !U(e)) return e }), r[1] = e, R.apply(I, r) } }), O.prototype[N] || i(17)(O.prototype, N, O.prototype.valueOf), f(O, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e, i) { t.exports = i(55)("native-function-to-string", Function.toString) }, function(t, e, i) {
    var r = i(36),
        n = i(57),
        s = i(51);
    t.exports = function(t) {
        var e = r(t),
            i = n.f;
        if (i)
            for (var a, o = i(t), l = s.f, h = 0; o.length > h;) l.call(t, a = o[h++]) && e.push(a);
        return e
    }
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Object", { create: i(38) })
}, function(t, e, i) {
    var r = i(1);
    r(r.S + r.F * !i(10), "Object", { defineProperty: i(11).f })
}, function(t, e, i) {
    var r = i(1);
    r(r.S + r.F * !i(10), "Object", { defineProperties: i(101) })
}, function(t, e, i) {
    var r = i(18),
        n = i(24).f;
    i(25)("getOwnPropertyDescriptor", function() { return function(t, e) { return n(r(t), e) } })
}, function(t, e, i) {
    var r = i(12),
        n = i(40);
    i(25)("getPrototypeOf", function() { return function(t) { return n(r(t)) } })
}, function(t, e, i) {
    var r = i(12),
        n = i(36);
    i(25)("keys", function() { return function(t) { return n(r(t)) } })
}, function(t, e, i) { i(25)("getOwnPropertyNames", function() { return i(102).f }) }, function(t, e, i) {
    var r = i(5),
        n = i(32).onFreeze;
    i(25)("freeze", function(t) { return function(e) { return t && r(e) ? t(n(e)) : e } })
}, function(t, e, i) {
    var r = i(5),
        n = i(32).onFreeze;
    i(25)("seal", function(t) { return function(e) { return t && r(e) ? t(n(e)) : e } })
}, function(t, e, i) {
    var r = i(5),
        n = i(32).onFreeze;
    i(25)("preventExtensions", function(t) { return function(e) { return t && r(e) ? t(n(e)) : e } })
}, function(t, e, i) {
    var r = i(5);
    i(25)("isFrozen", function(t) { return function(e) { return !r(e) || !!t && t(e) } })
}, function(t, e, i) {
    var r = i(5);
    i(25)("isSealed", function(t) { return function(e) { return !r(e) || !!t && t(e) } })
}, function(t, e, i) {
    var r = i(5);
    i(25)("isExtensible", function(t) { return function(e) { return !!r(e) && (!t || t(e)) } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S + r.F, "Object", { assign: i(103) })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Object", { is: i(104) })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Object", { setPrototypeOf: i(74).set })
}, function(t, e, i) {
    "use strict";
    var r = i(52),
        n = {};
    n[i(6)("toStringTag")] = "z", n + "" != "[object z]" && i(14)(Object.prototype, "toString", function() { return "[object " + r(this) + "]" }, !0)
}, function(t, e, i) {
    var r = i(1);
    r(r.P, "Function", { bind: i(105) })
}, function(t, e, i) {
    var r = i(11).f,
        n = Function.prototype,
        s = /^\s*function ([^ (]*)/;
    "name" in n || i(10) && r(n, "name", { configurable: !0, get: function() { try { return ("" + this).match(s)[1] } catch (t) { return "" } } })
}, function(t, e, i) {
    "use strict";
    var r = i(5),
        n = i(40),
        s = i(6)("hasInstance"),
        a = Function.prototype;
    s in a || i(11).f(a, s, {
        value: function(t) {
            if ("function" != typeof this || !r(t)) return !1;
            if (!r(this.prototype)) return t instanceof this;
            for (; t = n(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    })
}, function(t, e, i) {
    var r = i(1),
        n = i(107);
    r(r.G + r.F * (parseInt != n), { parseInt: n })
}, function(t, e, i) {
    var r = i(1),
        n = i(108);
    r(r.G + r.F * (parseFloat != n), { parseFloat: n })
}, function(t, e, i) {
    "use strict";
    var r = i(2),
        n = i(16),
        s = i(28),
        a = i(76),
        o = i(31),
        l = i(3),
        h = i(39).f,
        c = i(24).f,
        f = i(11).f,
        u = i(44).trim,
        p = r.Number,
        d = p,
        m = p.prototype,
        g = "Number" == s(i(38)(m)),
        y = "trim" in String.prototype,
        v = function(t) {
            var e = o(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var i, r, n, s = (e = y ? e.trim() : u(e, 3)).charCodeAt(0);
                if (43 === s || 45 === s) { if (88 === (i = e.charCodeAt(2)) || 120 === i) return NaN } else if (48 === s) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, n = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, n = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var a, l = e.slice(2), h = 0, c = l.length; h < c; h++)
                        if ((a = l.charCodeAt(h)) < 48 || a > n) return NaN;
                    return parseInt(l, r)
                }
            }
            return +e
        };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                i = this;
            return i instanceof p && (g ? l(function() { m.valueOf.call(i) }) : "Number" != s(i)) ? a(new d(v(e)), i, p) : v(e)
        };
        for (var _, x = i(10) ? h(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; x.length > b; b++) n(d, _ = x[b]) && !n(p, _) && f(p, _, c(d, _));
        p.prototype = m, m.constructor = p, i(14)(r, "Number", p)
    }
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(23),
        s = i(109),
        a = i(77),
        o = 1..toFixed,
        l = Math.floor,
        h = [0, 0, 0, 0, 0, 0],
        c = "Number.toFixed: incorrect invocation!",
        f = function(t, e) { for (var i = -1, r = e; ++i < 6;) r += t * h[i], h[i] = r % 1e7, r = l(r / 1e7) },
        u = function(t) { for (var e = 6, i = 0; --e >= 0;) i += h[e], h[e] = l(i / t), i = i % t * 1e7 },
        p = function() {
            for (var t = 6, e = ""; --t >= 0;)
                if ("" !== e || 0 === t || 0 !== h[t]) {
                    var i = String(h[t]);
                    e = "" === e ? i : e + a.call("0", 7 - i.length) + i
                }
            return e
        },
        d = function(t, e, i) { return 0 === e ? i : e % 2 == 1 ? d(t, e - 1, i * t) : d(t * t, e / 2, i) };
    r(r.P + r.F * (!!o && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !i(3)(function() { o.call({}) })), "Number", {
        toFixed: function(t) {
            var e, i, r, o, l = s(this, c),
                h = n(t),
                m = "",
                g = "0";
            if (h < 0 || h > 20) throw RangeError(c);
            if (l != l) return "NaN";
            if (l <= -1e21 || l >= 1e21) return String(l);
            if (l < 0 && (m = "-", l = -l), l > 1e-21)
                if (i = (e = function(t) { for (var e = 0, i = t; i >= 4096;) e += 12, i /= 4096; for (; i >= 2;) e += 1, i /= 2; return e }(l * d(2, 69, 1)) - 69) < 0 ? l * d(2, -e, 1) : l / d(2, e, 1), i *= 4503599627370496, (e = 52 - e) > 0) {
                    for (f(0, i), r = h; r >= 7;) f(1e7, 0), r -= 7;
                    for (f(d(10, r, 1), 0), r = e - 1; r >= 23;) u(1 << 23), r -= 23;
                    u(1 << r), f(1, 1), u(2), g = p()
                } else f(0, i), f(1 << -e, 0), g = p() + a.call("0", h);
            return g = h > 0 ? m + ((o = g.length) <= h ? "0." + a.call("0", h - o) + g : g.slice(0, o - h) + "." + g.slice(o - h)) : m + g
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(3),
        s = i(109),
        a = 1..toPrecision;
    r(r.P + r.F * (n(function() { return "1" !== a.call(1, void 0) }) || !n(function() { a.call({}) })), "Number", { toPrecision: function(t) { var e = s(this, "Number#toPrecision: incorrect invocation!"); return void 0 === t ? a.call(e) : a.call(e, t) } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Number", { EPSILON: Math.pow(2, -52) })
}, function(t, e, i) {
    var r = i(1),
        n = i(2).isFinite;
    r(r.S, "Number", { isFinite: function(t) { return "number" == typeof t && n(t) } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Number", { isInteger: i(110) })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Number", { isNaN: function(t) { return t != t } })
}, function(t, e, i) {
    var r = i(1),
        n = i(110),
        s = Math.abs;
    r(r.S, "Number", { isSafeInteger: function(t) { return n(t) && s(t) <= 9007199254740991 } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 })
}, function(t, e, i) {
    var r = i(1),
        n = i(108);
    r(r.S + r.F * (Number.parseFloat != n), "Number", { parseFloat: n })
}, function(t, e, i) {
    var r = i(1),
        n = i(107);
    r(r.S + r.F * (Number.parseInt != n), "Number", { parseInt: n })
}, function(t, e, i) {
    var r = i(1),
        n = i(111),
        s = Math.sqrt,
        a = Math.acosh;
    r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", { acosh: function(t) { return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : n(t - 1 + s(t - 1) * s(t + 1)) } })
}, function(t, e, i) {
    var r = i(1),
        n = Math.asinh;
    r(r.S + r.F * !(n && 1 / n(0) > 0), "Math", { asinh: function t(e) { return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e } })
}, function(t, e, i) {
    var r = i(1),
        n = Math.atanh;
    r(r.S + r.F * !(n && 1 / n(-0) < 0), "Math", { atanh: function(t) { return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2 } })
}, function(t, e, i) {
    var r = i(1),
        n = i(78);
    r(r.S, "Math", { cbrt: function(t) { return n(t = +t) * Math.pow(Math.abs(t), 1 / 3) } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Math", { clz32: function(t) { return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32 } })
}, function(t, e, i) {
    var r = i(1),
        n = Math.exp;
    r(r.S, "Math", { cosh: function(t) { return (n(t = +t) + n(-t)) / 2 } })
}, function(t, e, i) {
    var r = i(1),
        n = i(79);
    r(r.S + r.F * (n != Math.expm1), "Math", { expm1: n })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Math", { fround: i(186) })
}, function(t, e, i) {
    var r = i(78),
        n = Math.pow,
        s = n(2, -52),
        a = n(2, -23),
        o = n(2, 127) * (2 - a),
        l = n(2, -126);
    t.exports = Math.fround || function(t) {
        var e, i, n = Math.abs(t),
            h = r(t);
        return n < l ? h * (n / l / a + 1 / s - 1 / s) * l * a : (i = (e = (1 + a / s) * n) - (e - n)) > o || i != i ? h * (1 / 0) : h * i
    }
}, function(t, e, i) {
    var r = i(1),
        n = Math.abs;
    r(r.S, "Math", { hypot: function(t, e) { for (var i, r, s = 0, a = 0, o = arguments.length, l = 0; a < o;) l < (i = n(arguments[a++])) ? (s = s * (r = l / i) * r + 1, l = i) : s += i > 0 ? (r = i / l) * r : i; return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(s) } })
}, function(t, e, i) {
    var r = i(1),
        n = Math.imul;
    r(r.S + r.F * i(3)(function() { return -5 != n(4294967295, 5) || 2 != n.length }), "Math", {
        imul: function(t, e) {
            var i = +t,
                r = +e,
                n = 65535 & i,
                s = 65535 & r;
            return 0 | n * s + ((65535 & i >>> 16) * s + n * (65535 & r >>> 16) << 16 >>> 0)
        }
    })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Math", { log10: function(t) { return Math.log(t) * Math.LOG10E } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Math", { log1p: i(111) })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Math", { log2: function(t) { return Math.log(t) / Math.LN2 } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Math", { sign: i(78) })
}, function(t, e, i) {
    var r = i(1),
        n = i(79),
        s = Math.exp;
    r(r.S + r.F * i(3)(function() { return -2e-17 != !Math.sinh(-2e-17) }), "Math", { sinh: function(t) { return Math.abs(t = +t) < 1 ? (n(t) - n(-t)) / 2 : (s(t - 1) - s(-t - 1)) * (Math.E / 2) } })
}, function(t, e, i) {
    var r = i(1),
        n = i(79),
        s = Math.exp;
    r(r.S, "Math", {
        tanh: function(t) {
            var e = n(t = +t),
                i = n(-t);
            return e == 1 / 0 ? 1 : i == 1 / 0 ? -1 : (e - i) / (s(t) + s(-t))
        }
    })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Math", { trunc: function(t) { return (t > 0 ? Math.floor : Math.ceil)(t) } })
}, function(t, e, i) {
    var r = i(1),
        n = i(37),
        s = String.fromCharCode,
        a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function(t) {
            for (var e, i = [], r = arguments.length, a = 0; r > a;) {
                if (e = +arguments[a++], n(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                i.push(e < 65536 ? s(e) : s(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return i.join("")
        }
    })
}, function(t, e, i) {
    var r = i(1),
        n = i(18),
        s = i(7);
    r(r.S, "String", { raw: function(t) { for (var e = n(t.raw), i = s(e.length), r = arguments.length, a = [], o = 0; i > o;) a.push(String(e[o++])), o < r && a.push(String(arguments[o])); return a.join("") } })
}, function(t, e, i) {
    "use strict";
    i(44)("trim", function(t) { return function() { return t(this, 3) } })
}, function(t, e, i) {
    "use strict";
    var r = i(80)(!0);
    i(81)(String, "String", function(t) { this._t = String(t), this._i = 0 }, function() {
        var t, e = this._t,
            i = this._i;
        return i >= e.length ? { value: void 0, done: !0 } : (t = r(e, i), this._i += t.length, { value: t, done: !1 })
    })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(80)(!1);
    r(r.P, "String", { codePointAt: function(t) { return n(this, t) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(7),
        s = i(82),
        a = "".endsWith;
    r(r.P + r.F * i(84)("endsWith"), "String", {
        endsWith: function(t) {
            var e = s(this, t, "endsWith"),
                i = arguments.length > 1 ? arguments[1] : void 0,
                r = n(e.length),
                o = void 0 === i ? r : Math.min(n(i), r),
                l = String(t);
            return a ? a.call(e, l, o) : e.slice(o - l.length, o) === l
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(82);
    r(r.P + r.F * i(84)("includes"), "String", { includes: function(t) { return !!~n(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0) } })
}, function(t, e, i) {
    var r = i(1);
    r(r.P, "String", { repeat: i(77) })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(7),
        s = i(82),
        a = "".startsWith;
    r(r.P + r.F * i(84)("startsWith"), "String", {
        startsWith: function(t) {
            var e = s(this, t, "startsWith"),
                i = n(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                r = String(t);
            return a ? a.call(e, r, i) : e.slice(i, i + r.length) === r
        }
    })
}, function(t, e, i) {
    "use strict";
    i(15)("anchor", function(t) { return function(e) { return t(this, "a", "name", e) } })
}, function(t, e, i) {
    "use strict";
    i(15)("big", function(t) { return function() { return t(this, "big", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("blink", function(t) { return function() { return t(this, "blink", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("bold", function(t) { return function() { return t(this, "b", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("fixed", function(t) { return function() { return t(this, "tt", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("fontcolor", function(t) { return function(e) { return t(this, "font", "color", e) } })
}, function(t, e, i) {
    "use strict";
    i(15)("fontsize", function(t) { return function(e) { return t(this, "font", "size", e) } })
}, function(t, e, i) {
    "use strict";
    i(15)("italics", function(t) { return function() { return t(this, "i", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("link", function(t) { return function(e) { return t(this, "a", "href", e) } })
}, function(t, e, i) {
    "use strict";
    i(15)("small", function(t) { return function() { return t(this, "small", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("strike", function(t) { return function() { return t(this, "strike", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("sub", function(t) { return function() { return t(this, "sub", "", "") } })
}, function(t, e, i) {
    "use strict";
    i(15)("sup", function(t) { return function() { return t(this, "sup", "", "") } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Date", { now: function() { return (new Date).getTime() } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(12),
        s = i(31);
    r(r.P + r.F * i(3)(function() { return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() { return 1 } }) }), "Date", {
        toJSON: function(t) {
            var e = n(this),
                i = s(e);
            return "number" != typeof i || isFinite(i) ? e.toISOString() : null
        }
    })
}, function(t, e, i) {
    var r = i(1),
        n = i(221);
    r(r.P + r.F * (Date.prototype.toISOString !== n), "Date", { toISOString: n })
}, function(t, e, i) {
    "use strict";
    var r = i(3),
        n = Date.prototype.getTime,
        s = Date.prototype.toISOString,
        a = function(t) { return t > 9 ? t : "0" + t };
    t.exports = r(function() { return "0385-07-25T07:06:39.999Z" != s.call(new Date(-5e13 - 1)) }) || !r(function() { s.call(new Date(NaN)) }) ? function() {
        if (!isFinite(n.call(this))) throw RangeError("Invalid time value");
        var t = this,
            e = t.getUTCFullYear(),
            i = t.getUTCMilliseconds(),
            r = e < 0 ? "-" : e > 9999 ? "+" : "";
        return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (i > 99 ? i : "0" + a(i)) + "Z"
    } : s
}, function(t, e, i) {
    var r = Date.prototype,
        n = r.toString,
        s = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && i(14)(r, "toString", function() { var t = s.call(this); return t == t ? n.call(this) : "Invalid Date" })
}, function(t, e, i) {
    var r = i(6)("toPrimitive"),
        n = Date.prototype;
    r in n || i(17)(n, r, i(224))
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = i(31);
    t.exports = function(t) { if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint"); return n(r(this), "number" != t) }
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Array", { isArray: i(58) })
}, function(t, e, i) {
    "use strict";
    var r = i(21),
        n = i(1),
        s = i(12),
        a = i(113),
        o = i(85),
        l = i(7),
        h = i(86),
        c = i(87);
    n(n.S + n.F * !i(59)(function(t) { Array.from(t) }), "Array", {
        from: function(t) {
            var e, i, n, f, u = s(t),
                p = "function" == typeof this ? this : Array,
                d = arguments.length,
                m = d > 1 ? arguments[1] : void 0,
                g = void 0 !== m,
                y = 0,
                v = c(u);
            if (g && (m = r(m, d > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && o(v))
                for (i = new p(e = l(u.length)); e > y; y++) h(i, y, g ? m(u[y], y) : u[y]);
            else
                for (f = v.call(u), i = new p; !(n = f.next()).done; y++) h(i, y, g ? a(f, m, [n.value, y], !0) : n.value);
            return i.length = y, i
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(86);
    r(r.S + r.F * i(3)(function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    }), "Array", { of: function() { for (var t = 0, e = arguments.length, i = new("function" == typeof this ? this : Array)(e); e > t;) n(i, t, arguments[t++]); return i.length = e, i } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(18),
        s = [].join;
    r(r.P + r.F * (i(50) != Object || !i(19)(s)), "Array", { join: function(t) { return s.call(n(this), void 0 === t ? "," : t) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(73),
        s = i(28),
        a = i(37),
        o = i(7),
        l = [].slice;
    r(r.P + r.F * i(3)(function() { n && l.call(n) }), "Array", {
        slice: function(t, e) {
            var i = o(this.length),
                r = s(this);
            if (e = void 0 === e ? i : e, "Array" == r) return l.call(this, t, e);
            for (var n = a(t, i), h = a(e, i), c = o(h - n), f = new Array(c), u = 0; u < c; u++) f[u] = "String" == r ? this.charAt(n + u) : this[n + u];
            return f
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(22),
        s = i(12),
        a = i(3),
        o = [].sort,
        l = [1, 2, 3];
    r(r.P + r.F * (a(function() { l.sort(void 0) }) || !a(function() { l.sort(null) }) || !i(19)(o)), "Array", { sort: function(t) { return void 0 === t ? o.call(s(this)) : o.call(s(this), n(t)) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(26)(0),
        s = i(19)([].forEach, !0);
    r(r.P + r.F * !s, "Array", { forEach: function(t) { return n(this, t, arguments[1]) } })
}, function(t, e, i) {
    var r = i(5),
        n = i(58),
        s = i(6)("species");
    t.exports = function(t) { var e; return n(t) && ("function" != typeof(e = t.constructor) || e !== Array && !n(e.prototype) || (e = void 0), r(e) && null === (e = e[s]) && (e = void 0)), void 0 === e ? Array : e }
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(26)(1);
    r(r.P + r.F * !i(19)([].map, !0), "Array", { map: function(t) { return n(this, t, arguments[1]) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(26)(2);
    r(r.P + r.F * !i(19)([].filter, !0), "Array", { filter: function(t) { return n(this, t, arguments[1]) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(26)(3);
    r(r.P + r.F * !i(19)([].some, !0), "Array", { some: function(t) { return n(this, t, arguments[1]) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(26)(4);
    r(r.P + r.F * !i(19)([].every, !0), "Array", { every: function(t) { return n(this, t, arguments[1]) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(115);
    r(r.P + r.F * !i(19)([].reduce, !0), "Array", { reduce: function(t) { return n(this, t, arguments.length, arguments[1], !1) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(115);
    r(r.P + r.F * !i(19)([].reduceRight, !0), "Array", { reduceRight: function(t) { return n(this, t, arguments.length, arguments[1], !0) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(56)(!1),
        s = [].indexOf,
        a = !!s && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !i(19)(s)), "Array", { indexOf: function(t) { return a ? s.apply(this, arguments) || 0 : n(this, t, arguments[1]) } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(18),
        s = i(23),
        a = i(7),
        o = [].lastIndexOf,
        l = !!o && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (l || !i(19)(o)), "Array", {
        lastIndexOf: function(t) {
            if (l) return o.apply(this, arguments) || 0;
            var e = n(this),
                i = a(e.length),
                r = i - 1;
            for (arguments.length > 1 && (r = Math.min(r, s(arguments[1]))), r < 0 && (r = i + r); r >= 0; r--)
                if (r in e && e[r] === t) return r || 0;
            return -1
        }
    })
}, function(t, e, i) {
    var r = i(1);
    r(r.P, "Array", { copyWithin: i(116) }), i(41)("copyWithin")
}, function(t, e, i) {
    var r = i(1);
    r(r.P, "Array", { fill: i(88) }), i(41)("fill")
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(26)(5),
        s = !0;
    "find" in [] && Array(1).find(function() { s = !1 }), r(r.P + r.F * s, "Array", { find: function(t) { return n(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), i(41)("find")
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(26)(6),
        s = "findIndex",
        a = !0;
    s in [] && Array(1)[s](function() { a = !1 }), r(r.P + r.F * a, "Array", { findIndex: function(t) { return n(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), i(41)(s)
}, function(t, e, i) { i(46)("Array") }, function(t, e, i) {
    var r = i(2),
        n = i(76),
        s = i(11).f,
        a = i(39).f,
        o = i(83),
        l = i(60),
        h = r.RegExp,
        c = h,
        f = h.prototype,
        u = /a/g,
        p = /a/g,
        d = new h(u) !== u;
    if (i(10) && (!d || i(3)(function() { return p[i(6)("match")] = !1, h(u) != u || h(p) == p || "/a/i" != h(u, "i") }))) {
        h = function(t, e) {
            var i = this instanceof h,
                r = o(t),
                s = void 0 === e;
            return !i && r && t.constructor === h && s ? t : n(d ? new c(r && !s ? t.source : t, e) : c((r = t instanceof h) ? t.source : t, r && s ? l.call(t) : e), i ? this : f, h)
        };
        for (var m = function(t) { t in h || s(h, t, { configurable: !0, get: function() { return c[t] }, set: function(e) { c[t] = e } }) }, g = a(c), y = 0; g.length > y;) m(g[y++]);
        f.constructor = h, h.prototype = f, i(14)(r, "RegExp", h)
    }
    i(46)("RegExp")
}, function(t, e, i) {
    "use strict";
    i(119);
    var r = i(4),
        n = i(60),
        s = i(10),
        a = /./.toString,
        o = function(t) { i(14)(RegExp.prototype, "toString", t, !0) };
    i(3)(function() { return "/a/b" != a.call({ source: "a", flags: "b" }) }) ? o(function() { var t = r(this); return "/".concat(t.source, "/", "flags" in t ? t.flags : !s && t instanceof RegExp ? n.call(t) : void 0) }) : "toString" != a.name && o(function() { return a.call(this) })
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = i(7),
        s = i(91),
        a = i(61);
    i(62)("match", 1, function(t, e, i, o) {
        return [function(i) {
            var r = t(this),
                n = null == i ? void 0 : i[e];
            return void 0 !== n ? n.call(i, r) : new RegExp(i)[e](String(r))
        }, function(t) {
            var e = o(i, t, this);
            if (e.done) return e.value;
            var l = r(t),
                h = String(this);
            if (!l.global) return a(l, h);
            var c = l.unicode;
            l.lastIndex = 0;
            for (var f, u = [], p = 0; null !== (f = a(l, h));) {
                var d = String(f[0]);
                u[p] = d, "" === d && (l.lastIndex = s(h, n(l.lastIndex), c)), p++
            }
            return 0 === p ? null : u
        }]
    })
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = i(12),
        s = i(7),
        a = i(23),
        o = i(91),
        l = i(61),
        h = Math.max,
        c = Math.min,
        f = Math.floor,
        u = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g;
    i(62)("replace", 2, function(t, e, i, d) {
        return [function(r, n) {
            var s = t(this),
                a = null == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, s, n) : i.call(String(s), r, n)
        }, function(t, e) {
            var n = d(i, t, this, e);
            if (n.done) return n.value;
            var f = r(t),
                u = String(this),
                p = "function" == typeof e;
            p || (e = String(e));
            var g = f.global;
            if (g) {
                var y = f.unicode;
                f.lastIndex = 0
            }
            for (var v = [];;) { var _ = l(f, u); if (null === _) break; if (v.push(_), !g) break; "" === String(_[0]) && (f.lastIndex = o(u, s(f.lastIndex), y)) }
            for (var x, b = "", w = 0, T = 0; T < v.length; T++) {
                _ = v[T];
                for (var S = String(_[0]), P = h(c(a(_.index), u.length), 0), E = [], k = 1; k < _.length; k++) E.push(void 0 === (x = _[k]) ? x : String(x));
                var A = _.groups;
                if (p) {
                    var C = [S].concat(E, P, u);
                    void 0 !== A && C.push(A);
                    var M = String(e.apply(void 0, C))
                } else M = m(S, u, P, E, A, e);
                P >= w && (b += u.slice(w, P) + M, w = P + S.length)
            }
            return b + u.slice(w)
        }];

        function m(t, e, r, s, a, o) {
            var l = r + t.length,
                h = s.length,
                c = p;
            return void 0 !== a && (a = n(a), c = u), i.call(o, c, function(i, n) {
                var o;
                switch (n.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(l);
                    case "<":
                        o = a[n.slice(1, -1)];
                        break;
                    default:
                        var c = +n;
                        if (0 === c) return i;
                        if (c > h) { var u = f(c / 10); return 0 === u ? i : u <= h ? void 0 === s[u - 1] ? n.charAt(1) : s[u - 1] + n.charAt(1) : i }
                        o = s[c - 1]
                }
                return void 0 === o ? "" : o
            })
        }
    })
}, function(t, e, i) {
    "use strict";
    var r = i(4),
        n = i(104),
        s = i(61);
    i(62)("search", 1, function(t, e, i, a) {
        return [function(i) {
            var r = t(this),
                n = null == i ? void 0 : i[e];
            return void 0 !== n ? n.call(i, r) : new RegExp(i)[e](String(r))
        }, function(t) {
            var e = a(i, t, this);
            if (e.done) return e.value;
            var o = r(t),
                l = String(this),
                h = o.lastIndex;
            n(h, 0) || (o.lastIndex = 0);
            var c = s(o, l);
            return n(o.lastIndex, h) || (o.lastIndex = h), null === c ? -1 : c.index
        }]
    })
}, function(t, e, i) {
    "use strict";
    var r = i(83),
        n = i(4),
        s = i(53),
        a = i(91),
        o = i(7),
        l = i(61),
        h = i(90),
        c = i(3),
        f = Math.min,
        u = [].push,
        p = !c(function() { RegExp(4294967295, "y") });
    i(62)("split", 2, function(t, e, i, c) {
        var d;
        return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
            var n = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return i.call(n, t, e);
            for (var s, a, o, l = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, d = new RegExp(t.source, c + "g");
                (s = h.call(d, n)) && !((a = d.lastIndex) > f && (l.push(n.slice(f, s.index)), s.length > 1 && s.index < n.length && u.apply(l, s.slice(1)), o = s[0].length, f = a, l.length >= p));) d.lastIndex === s.index && d.lastIndex++;
            return f === n.length ? !o && d.test("") || l.push("") : l.push(n.slice(f)), l.length > p ? l.slice(0, p) : l
        } : "0".split(void 0, 0).length ? function(t, e) { return void 0 === t && 0 === e ? [] : i.call(this, t, e) } : i, [function(i, r) {
            var n = t(this),
                s = null == i ? void 0 : i[e];
            return void 0 !== s ? s.call(i, n, r) : d.call(String(n), i, r)
        }, function(t, e) {
            var r = c(d, t, this, e, d !== i);
            if (r.done) return r.value;
            var h = n(t),
                u = String(this),
                m = s(h, RegExp),
                g = h.unicode,
                y = (h.ignoreCase ? "i" : "") + (h.multiline ? "m" : "") + (h.unicode ? "u" : "") + (p ? "y" : "g"),
                v = new m(p ? h : "^(?:" + h.source + ")", y),
                _ = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === _) return [];
            if (0 === u.length) return null === l(v, u) ? [u] : [];
            for (var x = 0, b = 0, w = []; b < u.length;) {
                v.lastIndex = p ? b : 0;
                var T, S = l(v, p ? u : u.slice(b));
                if (null === S || (T = f(o(v.lastIndex + (p ? 0 : b)), u.length)) === x) b = a(u, b, g);
                else {
                    if (w.push(u.slice(x, b)), w.length === _) return w;
                    for (var P = 1; P <= S.length - 1; P++)
                        if (w.push(S[P]), w.length === _) return w;
                    b = x = T
                }
            }
            return w.push(u.slice(x)), w
        }]
    })
}, function(t, e, i) {
    var r = i(2),
        n = i(92).set,
        s = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        o = r.Promise,
        l = "process" == i(28)(a);
    t.exports = function() {
        var t, e, i, h = function() {
            var r, n;
            for (l && (r = a.domain) && r.exit(); t;) { n = t.fn, t = t.next; try { n() } catch (r) { throw t ? i() : e = void 0, r } }
            e = void 0, r && r.enter()
        };
        if (l) i = function() { a.nextTick(h) };
        else if (!s || r.navigator && r.navigator.standalone)
            if (o && o.resolve) {
                var c = o.resolve(void 0);
                i = function() { c.then(h) }
            } else i = function() { n.call(r, h) };
        else {
            var f = !0,
                u = document.createTextNode("");
            new s(h).observe(u, { characterData: !0 }), i = function() { u.data = f = !f }
        }
        return function(r) {
            var n = { fn: r, next: void 0 };
            e && (e.next = n), t || (t = n, i()), e = n
        }
    }
}, function(t, e) { t.exports = function(t) { try { return { e: !1, v: t() } } catch (t) { return { e: !0, v: t } } } }, function(t, e, i) {
    "use strict";
    var r = i(123),
        n = i(42);
    t.exports = i(65)("Map", function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }, { get: function(t) { var e = r.getEntry(n(this, "Map"), t); return e && e.v }, set: function(t, e) { return r.def(n(this, "Map"), 0 === t ? 0 : t, e) } }, r, !0)
}, function(t, e, i) {
    "use strict";
    var r = i(123),
        n = i(42);
    t.exports = i(65)("Set", function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }, { add: function(t) { return r.def(n(this, "Set"), t = 0 === t ? 0 : t, t) } }, r)
}, function(t, e, i) {
    "use strict";
    var r, n = i(2),
        s = i(26)(0),
        a = i(14),
        o = i(32),
        l = i(103),
        h = i(124),
        c = i(5),
        f = i(42),
        u = i(42),
        p = !n.ActiveXObject && "ActiveXObject" in n,
        d = o.getWeak,
        m = Object.isExtensible,
        g = h.ufstore,
        y = function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } },
        v = { get: function(t) { if (c(t)) { var e = d(t); return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0 } }, set: function(t, e) { return h.def(f(this, "WeakMap"), t, e) } },
        _ = t.exports = i(65)("WeakMap", y, v, h, !0, !0);
    u && p && (l((r = h.getConstructor(y, "WeakMap")).prototype, v), o.NEED = !0, s(["delete", "has", "get", "set"], function(t) {
        var e = _.prototype,
            i = e[t];
        a(e, t, function(e, n) { if (c(e) && !m(e)) { this._f || (this._f = new r); var s = this._f[t](e, n); return "set" == t ? this : s } return i.call(this, e, n) })
    }))
}, function(t, e, i) {
    "use strict";
    var r = i(124),
        n = i(42);
    i(65)("WeakSet", function(t) { return function() { return t(this, arguments.length > 0 ? arguments[0] : void 0) } }, { add: function(t) { return r.def(n(this, "WeakSet"), t, !0) } }, r, !1, !0)
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(66),
        s = i(93),
        a = i(4),
        o = i(37),
        l = i(7),
        h = i(5),
        c = i(2).ArrayBuffer,
        f = i(53),
        u = s.ArrayBuffer,
        p = s.DataView,
        d = n.ABV && c.isView,
        m = u.prototype.slice,
        g = n.VIEW;
    r(r.G + r.W + r.F * (c !== u), { ArrayBuffer: u }), r(r.S + r.F * !n.CONSTR, "ArrayBuffer", { isView: function(t) { return d && d(t) || h(t) && g in t } }), r(r.P + r.U + r.F * i(3)(function() { return !new u(2).slice(1, void 0).byteLength }), "ArrayBuffer", { slice: function(t, e) { if (void 0 !== m && void 0 === e) return m.call(a(this), t); for (var i = a(this).byteLength, r = o(t, i), n = o(void 0 === e ? i : e, i), s = new(f(this, u))(l(n - r)), h = new p(this), c = new p(s), d = 0; r < n;) c.setUint8(d++, h.getUint8(r++)); return s } }), i(46)("ArrayBuffer")
}, function(t, e, i) {
    var r = i(1);
    r(r.G + r.W + r.F * !i(66).ABV, { DataView: i(93).DataView })
}, function(t, e, i) { i(30)("Int8", 1, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) { i(30)("Uint8", 1, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) { i(30)("Uint8", 1, function(t) { return function(e, i, r) { return t(this, e, i, r) } }, !0) }, function(t, e, i) { i(30)("Int16", 2, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) { i(30)("Uint16", 2, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) { i(30)("Int32", 4, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) { i(30)("Uint32", 4, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) { i(30)("Float32", 4, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) { i(30)("Float64", 8, function(t) { return function(e, i, r) { return t(this, e, i, r) } }) }, function(t, e, i) {
    var r = i(1),
        n = i(22),
        s = i(4),
        a = (i(2).Reflect || {}).apply,
        o = Function.apply;
    r(r.S + r.F * !i(3)(function() { a(function() {}) }), "Reflect", {
        apply: function(t, e, i) {
            var r = n(t),
                l = s(i);
            return a ? a(r, e, l) : o.call(r, e, l)
        }
    })
}, function(t, e, i) {
    var r = i(1),
        n = i(38),
        s = i(22),
        a = i(4),
        o = i(5),
        l = i(3),
        h = i(105),
        c = (i(2).Reflect || {}).construct,
        f = l(function() {
            function t() {}
            return !(c(function() {}, [], t) instanceof t)
        }),
        u = !l(function() { c(function() {}) });
    r(r.S + r.F * (f || u), "Reflect", {
        construct: function(t, e) {
            s(t), a(e);
            var i = arguments.length < 3 ? t : s(arguments[2]);
            if (u && !f) return c(t, e, i);
            if (t == i) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new(h.apply(t, r))
            }
            var l = i.prototype,
                p = n(o(l) ? l : Object.prototype),
                d = Function.apply.call(t, p, e);
            return o(d) ? d : p
        }
    })
}, function(t, e, i) {
    var r = i(11),
        n = i(1),
        s = i(4),
        a = i(31);
    n(n.S + n.F * i(3)(function() { Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 }) }), "Reflect", { defineProperty: function(t, e, i) { s(t), e = a(e, !0), s(i); try { return r.f(t, e, i), !0 } catch (t) { return !1 } } })
}, function(t, e, i) {
    var r = i(1),
        n = i(24).f,
        s = i(4);
    r(r.S, "Reflect", { deleteProperty: function(t, e) { var i = n(s(t), e); return !(i && !i.configurable) && delete t[e] } })
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(4),
        s = function(t) { this._t = n(t), this._i = 0; var e, i = this._k = []; for (e in t) i.push(e) };
    i(112)(s, "Object", function() {
        var t, e = this._k;
        do { if (this._i >= e.length) return { value: void 0, done: !0 } } while (!((t = e[this._i++]) in this._t));
        return { value: t, done: !1 }
    }), r(r.S, "Reflect", { enumerate: function(t) { return new s(t) } })
}, function(t, e, i) {
    var r = i(24),
        n = i(40),
        s = i(16),
        a = i(1),
        o = i(5),
        l = i(4);
    a(a.S, "Reflect", { get: function t(e, i) { var a, h, c = arguments.length < 3 ? e : arguments[2]; return l(e) === c ? e[i] : (a = r.f(e, i)) ? s(a, "value") ? a.value : void 0 !== a.get ? a.get.call(c) : void 0 : o(h = n(e)) ? t(h, i, c) : void 0 } })
}, function(t, e, i) {
    var r = i(24),
        n = i(1),
        s = i(4);
    n(n.S, "Reflect", { getOwnPropertyDescriptor: function(t, e) { return r.f(s(t), e) } })
}, function(t, e, i) {
    var r = i(1),
        n = i(40),
        s = i(4);
    r(r.S, "Reflect", { getPrototypeOf: function(t) { return n(s(t)) } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Reflect", { has: function(t, e) { return e in t } })
}, function(t, e, i) {
    var r = i(1),
        n = i(4),
        s = Object.isExtensible;
    r(r.S, "Reflect", { isExtensible: function(t) { return n(t), !s || s(t) } })
}, function(t, e, i) {
    var r = i(1);
    r(r.S, "Reflect", { ownKeys: i(126) })
}, function(t, e, i) {
    var r = i(1),
        n = i(4),
        s = Object.preventExtensions;
    r(r.S, "Reflect", { preventExtensions: function(t) { n(t); try { return s && s(t), !0 } catch (t) { return !1 } } })
}, function(t, e, i) {
    var r = i(11),
        n = i(24),
        s = i(40),
        a = i(16),
        o = i(1),
        l = i(33),
        h = i(4),
        c = i(5);
    o(o.S, "Reflect", {
        set: function t(e, i, o) {
            var f, u, p = arguments.length < 4 ? e : arguments[3],
                d = n.f(h(e), i);
            if (!d) {
                if (c(u = s(e))) return t(u, i, o, p);
                d = l(0)
            }
            if (a(d, "value")) {
                if (!1 === d.writable || !c(p)) return !1;
                if (f = n.f(p, i)) {
                    if (f.get || f.set || !1 === f.writable) return !1;
                    f.value = o, r.f(p, i, f)
                } else r.f(p, i, l(0, o));
                return !0
            }
            return void 0 !== d.set && (d.set.call(p, o), !0)
        }
    })
}, function(t, e, i) {
    var r = i(1),
        n = i(74);
    n && r(r.S, "Reflect", { setPrototypeOf: function(t, e) { n.check(t, e); try { return n.set(t, e), !0 } catch (t) { return !1 } } })
}, function(t, e, i) { i(284), t.exports = i(9).Array.includes }, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(56)(!0);
    r(r.P, "Array", { includes: function(t) { return n(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), i(41)("includes")
}, function(t, e, i) { i(286), t.exports = i(9).Array.flatMap }, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(287),
        s = i(12),
        a = i(7),
        o = i(22),
        l = i(114);
    r(r.P, "Array", { flatMap: function(t) { var e, i, r = s(this); return o(t), e = a(r.length), i = l(r, 0), n(i, r, r, e, 0, 1, t, arguments[1]), i } }), i(41)("flatMap")
}, function(t, e, i) {
    "use strict";
    var r = i(58),
        n = i(5),
        s = i(7),
        a = i(21),
        o = i(6)("isConcatSpreadable");
    t.exports = function t(e, i, l, h, c, f, u, p) {
        for (var d, m, g = c, y = 0, v = !!u && a(u, p, 3); y < h;) {
            if (y in l) {
                if (d = v ? v(l[y], y, i) : l[y], m = !1, n(d) && (m = void 0 !== (m = d[o]) ? !!m : r(d)), m && f > 0) g = t(e, i, d, s(d.length), g, f - 1) - 1;
                else {
                    if (g >= 9007199254740991) throw TypeError();
                    e[g] = d
                }
                g++
            }
            y++
        }
        return g
    }
}, function(t, e, i) { i(289), t.exports = i(9).String.padStart }, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(127),
        s = i(64),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);
    r(r.P + r.F * a, "String", { padStart: function(t) { return n(this, t, arguments.length > 1 ? arguments[1] : void 0, !0) } })
}, function(t, e, i) { i(291), t.exports = i(9).String.padEnd }, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(127),
        s = i(64),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);
    r(r.P + r.F * a, "String", { padEnd: function(t) { return n(this, t, arguments.length > 1 ? arguments[1] : void 0, !1) } })
}, function(t, e, i) { i(293), t.exports = i(9).String.trimLeft }, function(t, e, i) {
    "use strict";
    i(44)("trimLeft", function(t) { return function() { return t(this, 1) } }, "trimStart")
}, function(t, e, i) { i(295), t.exports = i(9).String.trimRight }, function(t, e, i) {
    "use strict";
    i(44)("trimRight", function(t) { return function() { return t(this, 2) } }, "trimEnd")
}, function(t, e, i) { i(297), t.exports = i(70).f("asyncIterator") }, function(t, e, i) { i(99)("asyncIterator") }, function(t, e, i) { i(299), t.exports = i(9).Object.getOwnPropertyDescriptors }, function(t, e, i) {
    var r = i(1),
        n = i(126),
        s = i(18),
        a = i(24),
        o = i(86);
    r(r.S, "Object", { getOwnPropertyDescriptors: function(t) { for (var e, i, r = s(t), l = a.f, h = n(r), c = {}, f = 0; h.length > f;) void 0 !== (i = l(r, e = h[f++])) && o(c, e, i); return c } })
}, function(t, e, i) { i(301), t.exports = i(9).Object.values }, function(t, e, i) {
    var r = i(1),
        n = i(128)(!1);
    r(r.S, "Object", { values: function(t) { return n(t) } })
}, function(t, e, i) { i(303), t.exports = i(9).Object.entries }, function(t, e, i) {
    var r = i(1),
        n = i(128)(!0);
    r(r.S, "Object", { entries: function(t) { return n(t) } })
}, function(t, e, i) {
    "use strict";
    i(120), i(305), t.exports = i(9).Promise.finally
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = i(9),
        s = i(2),
        a = i(53),
        o = i(122);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, n.Promise || s.Promise),
                i = "function" == typeof t;
            return this.then(i ? function(i) { return o(e, t()).then(function() { return i }) } : t, i ? function(i) { return o(e, t()).then(function() { throw i }) } : t)
        }
    })
}, function(t, e, i) { i(307), i(308), i(309), t.exports = i(9) }, function(t, e, i) {
    var r = i(2),
        n = i(1),
        s = i(64),
        a = [].slice,
        o = /MSIE .\./.test(s),
        l = function(t) {
            return function(e, i) {
                var r = arguments.length > 2,
                    n = !!r && a.call(arguments, 2);
                return t(r ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, n)
                } : e, i)
            }
        };
    n(n.G + n.B + n.F * o, { setTimeout: l(r.setTimeout), setInterval: l(r.setInterval) })
}, function(t, e, i) {
    var r = i(1),
        n = i(92);
    r(r.G + r.B, { setImmediate: n.set, clearImmediate: n.clear })
}, function(t, e, i) {
    for (var r = i(89), n = i(36), s = i(14), a = i(2), o = i(17), l = i(45), h = i(6), c = h("iterator"), f = h("toStringTag"), u = l.Array, p = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, d = n(p), m = 0; m < d.length; m++) {
        var g, y = d[m],
            v = p[y],
            _ = a[y],
            x = _ && _.prototype;
        if (x && (x[c] || o(x, c, u), x[f] || o(x, f, y), l[y] = u, v))
            for (g in r) x[g] || s(x, g, r[g], !0)
    }
}, function(t, e, i) {
    var r = function(t) {
        "use strict";
        var e, i = Object.prototype,
            r = i.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            s = n.iterator || "@@iterator",
            a = n.asyncIterator || "@@asyncIterator",
            o = n.toStringTag || "@@toStringTag";

        function l(t, e, i, r) {
            var n = e && e.prototype instanceof m ? e : m,
                s = Object.create(n.prototype),
                a = new k(r || []);
            return s._invoke = function(t, e, i) {
                var r = c;
                return function(n, s) {
                    if (r === u) throw new Error("Generator is already running");
                    if (r === p) { if ("throw" === n) throw s; return C() }
                    for (i.method = n, i.arg = s;;) {
                        var a = i.delegate;
                        if (a) { var o = S(a, i); if (o) { if (o === d) continue; return o } }
                        if ("next" === i.method) i.sent = i._sent = i.arg;
                        else if ("throw" === i.method) {
                            if (r === c) throw r = p, i.arg;
                            i.dispatchException(i.arg)
                        } else "return" === i.method && i.abrupt("return", i.arg);
                        r = u;
                        var l = h(t, e, i);
                        if ("normal" === l.type) { if (r = i.done ? p : f, l.arg === d) continue; return { value: l.arg, done: i.done } }
                        "throw" === l.type && (r = p, i.method = "throw", i.arg = l.arg)
                    }
                }
            }(t, i, a), s
        }

        function h(t, e, i) { try { return { type: "normal", arg: t.call(e, i) } } catch (t) { return { type: "throw", arg: t } } }
        t.wrap = l;
        var c = "suspendedStart",
            f = "suspendedYield",
            u = "executing",
            p = "completed",
            d = {};

        function m() {}

        function g() {}

        function y() {}
        var v = {};
        v[s] = function() { return this };
        var _ = Object.getPrototypeOf,
            x = _ && _(_(A([])));
        x && x !== i && r.call(x, s) && (v = x);
        var b = y.prototype = m.prototype = Object.create(v);

        function w(t) {
            ["next", "throw", "return"].forEach(function(e) { t[e] = function(t) { return this._invoke(e, t) } })
        }

        function T(t) {
            var e;
            this._invoke = function(i, n) {
                function s() {
                    return new Promise(function(e, s) {
                        ! function e(i, n, s, a) {
                            var o = h(t[i], t, n);
                            if ("throw" !== o.type) {
                                var l = o.arg,
                                    c = l.value;
                                return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) { e("next", t, s, a) }, function(t) { e("throw", t, s, a) }) : Promise.resolve(c).then(function(t) { l.value = t, s(l) }, function(t) { return e("throw", t, s, a) })
                            }
                            a(o.arg)
                        }(i, n, e, s)
                    })
                }
                return e = e ? e.then(s, s) : s()
            }
        }

        function S(t, i) {
            var r = t.iterator[i.method];
            if (r === e) {
                if (i.delegate = null, "throw" === i.method) {
                    if (t.iterator.return && (i.method = "return", i.arg = e, S(t, i), "throw" === i.method)) return d;
                    i.method = "throw", i.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return d
            }
            var n = h(r, t.iterator, i.arg);
            if ("throw" === n.type) return i.method = "throw", i.arg = n.arg, i.delegate = null, d;
            var s = n.arg;
            return s ? s.done ? (i[t.resultName] = s.value, i.next = t.nextLoc, "return" !== i.method && (i.method = "next", i.arg = e), i.delegate = null, d) : s : (i.method = "throw", i.arg = new TypeError("iterator result is not an object"), i.delegate = null, d)
        }

        function P(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function E(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function k(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(P, this), this.reset(!0) }

        function A(t) {
            if (t) {
                var i = t[s];
                if (i) return i.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        a = function i() {
                            for (; ++n < t.length;)
                                if (r.call(t, n)) return i.value = t[n], i.done = !1, i;
                            return i.value = e, i.done = !0, i
                        };
                    return a.next = a
                }
            }
            return { next: C }
        }

        function C() { return { value: e, done: !0 } }
        return g.prototype = b.constructor = y, y.constructor = g, y[o] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) { var e = "function" == typeof t && t.constructor; return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name)) }, t.mark = function(t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, o in t || (t[o] = "GeneratorFunction")), t.prototype = Object.create(b), t }, t.awrap = function(t) { return { __await: t } }, w(T.prototype), T.prototype[a] = function() { return this }, t.AsyncIterator = T, t.async = function(e, i, r, n) { var s = new T(l(e, i, r, n)); return t.isGeneratorFunction(i) ? s : s.next().then(function(t) { return t.done ? t.value : s.next() }) }, w(b), b[o] = "Generator", b[s] = function() { return this }, b.toString = function() { return "[object Generator]" }, t.keys = function(t) {
            var e = [];
            for (var i in t) e.push(i);
            return e.reverse(),
                function i() { for (; e.length;) { var r = e.pop(); if (r in t) return i.value = r, i.done = !1, i } return i.done = !0, i }
        }, t.values = A, k.prototype = {
            constructor: k,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(E), !t)
                    for (var i in this) "t" === i.charAt(0) && r.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = e)
            },
            stop: function() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval },
            dispatchException: function(t) {
                if (this.done) throw t;
                var i = this;

                function n(r, n) { return o.type = "throw", o.arg = t, i.next = r, n && (i.method = "next", i.arg = e), !!n }
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                    var a = this.tryEntries[s],
                        o = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                        var l = r.call(a, "catchLoc"),
                            h = r.call(a, "finallyLoc");
                        if (l && h) { if (this.prev < a.catchLoc) return n(a.catchLoc, !0); if (this.prev < a.finallyLoc) return n(a.finallyLoc) } else if (l) { if (this.prev < a.catchLoc) return n(a.catchLoc, !0) } else { if (!h) throw new Error("try statement without catch or finally"); if (this.prev < a.finallyLoc) return n(a.finallyLoc) }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) { var n = this.tryEntries[i]; if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) { var s = n; break } }
                s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                var a = s ? s.completion : {};
                return a.type = t, a.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, d) : this.complete(a)
            },
            complete: function(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d },
            finish: function(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var i = this.tryEntries[e]; if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), E(i), d } },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var i = this.tryEntries[e];
                    if (i.tryLoc === t) {
                        var r = i.completion;
                        if ("throw" === r.type) {
                            var n = r.arg;
                            E(i)
                        }
                        return n
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, i, r) { return this.delegate = { iterator: A(t), resultName: i, nextLoc: r }, "next" === this.method && (this.arg = e), d }
        }, t
    }(t.exports);
    try { regeneratorRuntime = r } catch (t) { Function("r", "regeneratorRuntime = r")(r) }
}, function(t, e, i) { i(312), t.exports = i(129).global }, function(t, e, i) {
    var r = i(313);
    r(r.G, { global: i(94) })
}, function(t, e, i) {
    var r = i(94),
        n = i(129),
        s = i(314),
        a = i(316),
        o = i(323),
        l = function(t, e, i) {
            var h, c, f, u = t & l.F,
                p = t & l.G,
                d = t & l.S,
                m = t & l.P,
                g = t & l.B,
                y = t & l.W,
                v = p ? n : n[e] || (n[e] = {}),
                _ = v.prototype,
                x = p ? r : d ? r[e] : (r[e] || {}).prototype;
            for (h in p && (i = e), i)(c = !u && x && void 0 !== x[h]) && o(v, h) || (f = c ? x[h] : i[h], v[h] = p && "function" != typeof x[h] ? i[h] : g && c ? s(f, r) : y && x[h] == f ? function(t) {
                var e = function(e, i, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, i)
                        }
                        return new t(e, i, r)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(f) : m && "function" == typeof f ? s(Function.call, f) : f, m && ((v.virtual || (v.virtual = {}))[h] = f, t & l.R && _ && !_[h] && a(_, h, f)))
        };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
}, function(t, e, i) {
    var r = i(315);
    t.exports = function(t, e, i) {
        if (r(t), void 0 === e) return t;
        switch (i) {
            case 1:
                return function(i) { return t.call(e, i) };
            case 2:
                return function(i, r) { return t.call(e, i, r) };
            case 3:
                return function(i, r, n) { return t.call(e, i, r, n) }
        }
        return function() { return t.apply(e, arguments) }
    }
}, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e, i) {
    var r = i(317),
        n = i(322);
    t.exports = i(96) ? function(t, e, i) { return r.f(t, e, n(1, i)) } : function(t, e, i) { return t[e] = i, t }
}, function(t, e, i) {
    var r = i(318),
        n = i(319),
        s = i(321),
        a = Object.defineProperty;
    e.f = i(96) ? Object.defineProperty : function(t, e, i) {
        if (r(t), e = s(e, !0), r(i), n) try { return a(t, e, i) } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (t[e] = i.value), t
    }
}, function(t, e, i) {
    var r = i(95);
    t.exports = function(t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t }
}, function(t, e, i) { t.exports = !i(96) && !i(130)(function() { return 7 != Object.defineProperty(i(320)("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, i) {
    var r = i(95),
        n = i(94).document,
        s = r(n) && r(n.createElement);
    t.exports = function(t) { return s ? n.createElement(t) : {} }
}, function(t, e, i) {
    var r = i(95);
    t.exports = function(t, e) { if (!r(t)) return t; var i, n; if (e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n; if ("function" == typeof(i = t.valueOf) && !r(n = i.call(t))) return n; if (!e && "function" == typeof(i = t.toString) && !r(n = i.call(t))) return n; throw TypeError("Can't convert object to primitive value") }
}, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e) {
    var i = {}.hasOwnProperty;
    t.exports = function(t, e) { return i.call(t, e) }
}, function(t, e, i) {}, function(t, e, i) {
    "use strict";
    t.exports = function(t) { if ("string" != typeof t) throw new TypeError("expected a string"); return (t = (t = (t = t.replace(/([a-z])([A-Z])/g, "$1-$2")).replace(/[ \t\W]/g, "-")).replace(/^-+|-+$/g, "")).toLowerCase() }
}, function(t, e, i) {
    var r, n;
    "undefined" != typeof window && window, void 0 === (n = "function" == typeof(r = function() {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    r = i[t] = i[t] || [];
                return -1 == r.indexOf(e) && r.push(e), this
            }
        }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}; return (i[t] = i[t] || {})[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var r = i.indexOf(e); return -1 != r && i.splice(r, 1), this } }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                    var s = i[n];
                    r && r[s] && (this.off(t, s), delete r[s]), s.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() { delete this._events, delete this._onceEvents }, t
    }) ? r.call(e, i, e, t) : r) || (t.exports = n)
}, function(t, e) {
    var i = [].indexOf;
    t.exports = function(t, e) {
        if (i) return t.indexOf(e);
        for (var r = 0; r < t.length; ++r)
            if (t[r] === e) return r;
        return -1
    }
}, function(t, e, i) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable;

    function a(t) { if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(t) }
    t.exports = function() { try { if (!Object.assign) return !1; var t = new String("abc"); if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1; for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i; if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) { return e[t] }).join("")) return !1; var r = {}; return "abcdefghijklmnopqrst".split("").forEach(function(t) { r[t] = t }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("") } catch (t) { return !1 } }() ? Object.assign : function(t, e) { for (var i, o, l = a(t), h = 1; h < arguments.length; h++) { for (var c in i = Object(arguments[h])) n.call(i, c) && (l[c] = i[c]); if (r) { o = r(i); for (var f = 0; f < o.length; f++) s.call(i, o[f]) && (l[o[f]] = i[o[f]]) } } return l }
}, function(t, e) {
    function i() {}
    i.prototype = {
        on: function(t, e, i) { var r = this.e || (this.e = {}); return (r[t] || (r[t] = [])).push({ fn: e, ctx: i }), this },
        once: function(t, e, i) {
            var r = this;

            function n() { r.off(t, n), e.apply(i, arguments) }
            return n._ = e, this.on(t, n, i)
        },
        emit: function(t) { for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, n = i.length; r < n; r++) i[r].fn.apply(i[r].ctx, e); return this },
        off: function(t, e) {
            var i = this.e || (this.e = {}),
                r = i[t],
                n = [];
            if (r && e)
                for (var s = 0, a = r.length; s < a; s++) r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
            return n.length ? i[t] = n : delete i[t], this
        }
    }, t.exports = i
}, function(t, e, i) {
    (function() {
        (null !== e ? e : this).Lethargy = function() {
            function t(t, e, i, r) { this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != r ? r : 150, this.lastUpDeltas = function() { var t, e, i; for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null); return i }.call(this), this.lastDownDeltas = function() { var t, e, i; for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null); return i }.call(this), this.deltasTimestamp = function() { var t, e, i; for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null); return i }.call(this) }
            return t.prototype.check = function(t) { var e; return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1)) }, t.prototype.isInertia = function(t) { var e, i, r, n, s, a, o; return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (r = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), o = r.reduce(function(t, e) { return t + e }), s = i.reduce(function(t, e) { return t + e }), a = o / r.length, n = s / i.length, Math.abs(a) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t) }, t.prototype.showLastUpDeltas = function() { return this.lastUpDeltas }, t.prototype.showLastDownDeltas = function() { return this.lastDownDeltas }, t
        }()
    }).call(this)
}, function(t, e, i) {
    "use strict";
    t.exports = { hasWheelEvent: "onwheel" in document, hasMouseWheelEvent: "onmousewheel" in document, hasTouch: "ontouchstart" in document, hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, hasPointer: !!window.navigator.msPointerEnabled, hasKeyDown: "onkeydown" in document, isFirefox: navigator.userAgent.indexOf("Firefox") > -1 }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) { return JSON.parse(JSON.stringify(t)) }
}, function(t, e, i) {
    "use strict";
    var r = Object.prototype.toString,
        n = Object.prototype.hasOwnProperty;

    function s(t, e) { return function() { return t.apply(e, arguments) } }
    t.exports = function(t) {
        if (!t) return console.warn("bindAll requires at least one argument.");
        var e = Array.prototype.slice.call(arguments, 1);
        if (0 === e.length)
            for (var i in t) n.call(t, i) && "function" == typeof t[i] && "[object Function]" == r.call(t[i]) && e.push(i);
        for (var a = 0; a < e.length; a++) {
            var o = e[a];
            t[o] = s(t[o], t)
        }
    }
}, function(t, e, i) {
    var r = document || {},
        n = (r.documentElement, !0);
    try { r.createEvent("KeyEvents") } catch (t) { n = !1 }
    t.exports = r.createEvent ? function(t, e) {
        e = e || {};
        var i = o(t),
            a = i;
        "KeyboardEvent" === i && n && (i = "KeyEvents", a = "KeyEvent");
        var l = r.createEvent(i),
            h = "init" + a,
            c = "function" == typeof l[h] ? h : "initEvent",
            f = s[c],
            u = [],
            p = {};
        e.type = t;
        for (var d = 0; d < f.length; ++d) {
            var m = e[g = f[d]];
            void 0 === m && (m = l[g]), p[g] = !0, u.push(m)
        }
        for (var g in l[c].apply(l, u), "KeyboardEvent" === i && (l = function(t, e) { return t.ctrlKey == (e.ctrlKey || !1) && t.altKey == (e.altKey || !1) && t.shiftKey == (e.shiftKey || !1) && t.metaKey == (e.metaKey || !1) && t.keyCode == (e.keyCode || 0) && t.charCode == (e.charCode || 0) || ((t = document.createEvent("Event")).initEvent(e.type, e.bubbles, e.cancelable), t.ctrlKey = e.ctrlKey || !1, t.altKey = e.altKey || !1, t.shiftKey = e.shiftKey || !1, t.metaKey = e.metaKey || !1, t.keyCode = e.keyCode || 0, t.charCode = e.charCode || 0), t }(l, e)), e) p[g] || (l[g] = e[g]);
        return l
    } : function(t, e) { e = e || {}; var i = r.createEventObject(); for (var n in i.type = t, e) void 0 !== e[n] && (i[n] = e[n]); return i };
    var s = i(335),
        a = i(336),
        o = function() {
            var t = {};
            for (var e in a)
                for (var i = a[e], r = 0; r < i.length; r++) t[i[r]] = e;
            return function(e) { return t[e] || "Event" }
        }()
}, function(t) { t.exports = JSON.parse('{"initEvent":["type","bubbles","cancelable"],"initUIEvent":["type","bubbles","cancelable","view","detail"],"initMouseEvent":["type","bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget"],"initMutationEvent":["type","bubbles","cancelable","relatedNode","prevValue","newValue","attrName","attrChange"],"initKeyboardEvent":["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"],"initKeyEvent":["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"]}') }, function(t) { t.exports = JSON.parse('{"MouseEvent":["click","mousedown","mouseup","mouseover","mousemove","mouseout"],"KeyboardEvent":["keydown","keyup","keypress"],"MutationEvent":["DOMSubtreeModified","DOMNodeInserted","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMNodeInsertedIntoDocument","DOMAttrModified","DOMCharacterDataModified"],"HTMLEvents":["load","unload","abort","error","select","change","submit","reset","focus","blur","resize","scroll"],"UIEvent":["DOMFocusIn","DOMFocusOut","DOMActivate"]}') }, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(138), i(324);
    var r = i(8),
        n = i.n(r),
        s = i(27),
        a = i.n(s),
        o = i(20),
        l = i.n(o),
        h = i(68),
        c = i.n(h),
        f = i(133),
        u = i.n(f),
        p = i(134),
        d = i.n(p),
        m = i(13),
        g = i.n(m);

    function y(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var v = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.createBound(), this.options = e, this.prefix = u()("transform"), this.rAF = void 0, this.isRAFCanceled = !1;
            var i = this.constructor.name ? this.constructor.name : "Smooth";
            this.extends = void 0 === e.extends ? this.constructor !== t : e.extends, this.callback = this.options.callback || null, this.vars = { direction: this.options.direction || "vertical", native: this.options.native || !1, ease: this.options.ease || .075, preload: this.options.preload || !1, current: 0, last: 0, target: 0, height: window.innerHeight, width: window.innerWidth, bounding: 0, timer: null, ticking: !1 }, this.vs = this.vars.native ? null : new d.a({ limitInertia: this.options.vs && this.options.vs.limitInertia || !1, mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1, touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5, firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30, preventTouch: this.options.vs && this.options.vs.preventTouch || !0 }), this.dom = { listener: this.options.listener || document.body, section: this.options.section || document.querySelector(".vs-section") || null, scrollbar: this.vars.native || this.options.noscrollbar ? null : { state: { clicked: !1, x: 0 }, el: c()({ selector: "div", styles: "vs-scrollbar vs-".concat(this.vars.direction, " vs-scrollbar-").concat(i.toLowerCase()) }), drag: { el: c()({ selector: "div", styles: "vs-scrolldrag" }), delta: 0, height: 50 } } }
        }
        var e, i, r;
        return e = t, (i = [{
            key: "createBound",
            value: function() {
                var t = this;
                ["run", "calc", "debounce", "resize", "mouseUp", "mouseDown", "mouseMove", "calcScroll", "scrollTo"].forEach(function(e) { return t[e] = t[e].bind(t) })
            }
        }, { key: "init", value: function() { this.vars.preload && this.preloadImages(), this.vars.native ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar(), this.addEvents(), this.resize() } }, {
            key: "addClasses",
            value: function() {
                var t = this.vars.native ? "native" : "virtual",
                    e = "vertical" === this.vars.direction ? "y" : "x";
                l.a.add(this.dom.listener, "is-".concat(t, "-scroll")), l.a.add(this.dom.listener, "".concat(e, "-scroll"))
            }
        }, {
            key: "preloadImages",
            value: function() {
                var t = this,
                    e = Array.prototype.slice.call(this.dom.listener.querySelectorAll("img"), 0);
                e.forEach(function(i) {
                    var r = document.createElement("img");
                    g.a.once(r, "load", function() { e.splice(e.indexOf(i), 1), 0 === e.length && t.resize() }), r.src = i.getAttribute("src")
                })
            }
        }, {
            key: "calc",
            value: function(t) {
                var e = "horizontal" == this.vars.direction ? t.deltaX : t.deltaY;
                this.vars.target += -1 * e, this.clampTarget()
            }
        }, {
            key: "debounce",
            value: function() {
                var t = this,
                    e = this.dom.listener === document.body;
                this.vars.target = "vertical" === this.vars.direction ? e ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : e ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft, clearTimeout(this.vars.timer), this.vars.ticking || (this.vars.ticking = !0, l.a.add(this.dom.listener, "is-scrolling")), this.vars.timer = setTimeout(function() { t.vars.ticking = !1, l.a.remove(t.dom.listener, "is-scrolling") }, 200)
            }
        }, {
            key: "run",
            value: function() {
                if (!this.isRAFCanceled) {
                    if (this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease, this.vars.current < .1 && (this.vars.current = 0), this.requestAnimationFrame(), this.extends || (this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))), !this.vars.native && !this.options.noscrollbar) {
                        var t = this.dom.scrollbar.drag.height,
                            e = "vertical" === this.vars.direction ? this.vars.height : this.vars.width,
                            i = Math.abs(this.vars.current) / (this.vars.bounding / (e - t)) + t / .5 - t,
                            r = Math.max(0, Math.min(i - t, i + t));
                        this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(r.toFixed(2))
                    }
                    this.callback && this.vars.current !== this.vars.last && this.callback(this.vars.current), this.vars.last = this.vars.current
                }
            }
        }, { key: "getTransform", value: function(t) { return "vertical" === this.vars.direction ? "translate3d(0,".concat(t, "px,0)") : "translate3d(".concat(t, "px,0,0)") } }, {
            key: "on",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.isRAFCanceled && (this.isRAFCanceled = !1);
                var e = this.dom.listener === document.body ? window : this.dom.listener;
                this.vars.native ? g.a.on(e, "scroll", this.debounce) : this.vs && this.vs.on(this.calc), t && this.requestAnimationFrame()
            }
        }, {
            key: "off",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    e = this.dom.listener === document.body ? window : this.dom.listener;
                this.vars.native ? g.a.off(e, "scroll", this.debounce) : this.vs && this.vs.off(this.calc), t && this.cancelAnimationFrame()
            }
        }, {
            key: "requestAnimationFrame",
            value: function(t) {
                function e() { return t.apply(this, arguments) }
                return e.toString = function() { return t.toString() }, e
            }(function() { this.rAF = requestAnimationFrame(this.run) })
        }, {
            key: "cancelAnimationFrame",
            value: function(t) {
                function e() { return t.apply(this, arguments) }
                return e.toString = function() { return t.toString() }, e
            }(function() { this.isRAFCanceled = !0, cancelAnimationFrame(this.rAF) })
        }, { key: "addEvents", value: function() { this.on(), g.a.on(window, "resize", this.resize) } }, { key: "removeEvents", value: function() { this.off(), g.a.off(window, "resize", this.resize) } }, { key: "addFakeScrollBar", value: function() { this.dom.listener.appendChild(this.dom.scrollbar.el), this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el), g.a.on(this.dom.scrollbar.el, "click", this.calcScroll), g.a.on(this.dom.scrollbar.el, "mousedown", this.mouseDown), g.a.on(document, "mousemove", this.mouseMove), g.a.on(document, "mouseup", this.mouseUp) } }, { key: "removeFakeScrollBar", value: function() { g.a.off(this.dom.scrollbar.el, "click", this.calcScroll), g.a.off(this.dom.scrollbar.el, "mousedown", this.mouseDown), g.a.off(document, "mousemove", this.mouseMove), g.a.off(document, "mouseup", this.mouseUp), this.dom.listener.removeChild(this.dom.scrollbar.el) } }, { key: "mouseDown", value: function(t) { t.preventDefault(), 1 == t.which && (this.dom.scrollbar.state.clicked = !0) } }, { key: "mouseUp", value: function(t) { this.dom.scrollbar.state.clicked = !1, l.a.remove(this.dom.listener, "is-dragging") } }, { key: "mouseMove", value: function(t) { this.dom.scrollbar.state.clicked && this.calcScroll(t) } }, { key: "addFakeScrollHeight", value: function() { this.dom.scroll = c()({ selector: "div", styles: "a__view" }), this.dom.listener.appendChild(this.dom.scroll) } }, { key: "removeFakeScrollHeight", value: function() { this.dom.listener.removeChild(this.dom.scroll) } }, {
            key: "calcScroll",
            value: function(t) {
                var e = "vertical" == this.vars.direction ? t.clientY : t.clientX,
                    i = "vertical" == this.vars.direction ? this.vars.height : this.vars.width,
                    r = e * (this.vars.bounding / i);
                l.a.add(this.dom.listener, "is-dragging"), this.vars.target = r, this.clampTarget(), this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
            }
        }, { key: "scrollTo", value: function(t) { this.vars.native ? "vertical" == this.vars.direction ? window.scrollTo(0, t) : window.scrollTo(t, 0) : (this.vars.target = t, this.clampTarget()) } }, {
            key: "resize",
            value: function() {
                var t = "vertical" === this.vars.direction ? "height" : "width";
                if (this.vars.height = window.innerHeight, this.vars.width = window.innerWidth, !this.extends) {
                    var e = this.dom.section.getBoundingClientRect();
                    this.vars.bounding = "vertical" === this.vars.direction ? e.height - (this.vars.native ? 0 : this.vars.height) : e.right - (this.vars.native ? 0 : this.vars.width)
                }
                this.vars.native || this.options.noscrollbar ? this.vars.native && (this.dom.scroll.style[t] = "".concat(this.vars.bounding, "px")) : (this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height)), this.dom.scrollbar.drag.el.style[t] = "".concat(this.dom.scrollbar.drag.height, "px")), !this.vars.native && this.clampTarget()
            }
        }, { key: "clampTarget", value: function() { this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding))) } }, { key: "destroy", value: function() { this.vars.native ? (l.a.remove(this.dom.listener, "is-native-scroll"), this.removeFakeScrollHeight()) : (l.a.remove(this.dom.listener, "is-virtual-scroll"), !this.options.noscrollbar && this.removeFakeScrollBar()), "vertical" === this.vars.direction ? l.a.remove(this.dom.listener, "y-scroll") : l.a.remove(this.dom.listener, "x-scroll"), this.vars.current = 0, this.vs && (this.vs.destroy(), this.vs = null), this.removeEvents() } }]) && y(e.prototype, i), r && y(e, r), t
    }();
    window.Smooth = v;
    var _ = i(0);
    _.g._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
        var t = function(t) {
                _.e.call(this, t);
                var e, i, r = this.vars;
                for (i in this._labels = {}, this.autoRemoveChildren = !!r.autoRemoveChildren, this.smoothChildTiming = !!r.smoothChildTiming, this._sortChildren = !0, this._onUpdate = r.onUpdate, r) e = r[i], n(e) && -1 !== e.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(e));
                n(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            },
            e = _.h._internals,
            i = t._internals = {},
            r = e.isSelector,
            n = e.isArray,
            s = e.lazyTweens,
            a = e.lazyRender,
            o = _.g._gsDefine.globals,
            l = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
            h = function(t, e, i) {
                var r, n, s = t.cycle;
                for (r in s) n = s[r], t[r] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length];
                delete t.cycle
            },
            c = i.pauseCallback = function() {},
            f = function(t, e, i, r) { var n = "immediateRender"; return n in e || (e[n] = !(i && !1 === i[n] || r)), e },
            u = function(t) {
                if ("function" == typeof t) return t;
                var e = "object" == typeof t ? t : { each: t },
                    i = e.ease,
                    r = e.from || 0,
                    n = e.base || 0,
                    s = {},
                    a = isNaN(r),
                    o = e.axis,
                    l = { center: .5, end: 1 }[r] || 0;
                return function(t, h, c) {
                    var f, u, p, d, m, g, y, v, _, x = (c || e).length,
                        b = s[x];
                    if (!b) {
                        if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                            for (y = -1 / 0; y < (y = c[_++].getBoundingClientRect().left) && _ < x;);
                            _--
                        }
                        for (b = s[x] = [], f = a ? Math.min(_, x) * l - .5 : r % _, u = a ? x * l / _ - .5 : r / _ | 0, y = 0, v = 1 / 0, g = 0; g < x; g++) p = g % _ - f, d = u - (g / _ | 0), b[g] = m = o ? Math.abs("y" === o ? d : p) : Math.sqrt(p * p + d * d), m > y && (y = m), m < v && (v = m);
                        b.max = y - v, b.min = v, b.v = x = e.amount || e.each * (_ > x ? x - 1 : o ? "y" === o ? x / _ : _ : Math.max(_, x / _)) || 0, b.b = x < 0 ? n - x : n
                    }
                    return x = (b[t] - b.min) / b.max, b.b + (i ? i.getRatio(x) : x) * b.v
                }
            },
            p = t.prototype = new _.e;
        return t.version = "2.1.3", t.distribute = u, p.constructor = t, p.kill()._gc = p._forcingPlayhead = p._hasPause = !1, p.to = function(t, e, i, r) { var n = i.repeat && o.TweenMax || _.h; return e ? this.add(new n(t, e, i), r) : this.set(t, i, r) }, p.from = function(t, e, i, r) { return this.add((i.repeat && o.TweenMax || _.h).from(t, e, f(0, i)), r) }, p.fromTo = function(t, e, i, r, n) { var s = r.repeat && o.TweenMax || _.h; return r = f(0, r, i), e ? this.add(s.fromTo(t, e, i, r), n) : this.set(t, r, n) }, p.staggerTo = function(e, i, n, s, a, o, c, f) {
            var p, d, m = new t({ onComplete: o, onCompleteParams: c, callbackScope: f, smoothChildTiming: this.smoothChildTiming }),
                g = u(n.stagger || s),
                y = n.startAt,
                v = n.cycle;
            for ("string" == typeof e && (e = _.h.selector(e) || e), r(e = e || []) && (e = function(t) {
                    var e, i = [],
                        r = t.length;
                    for (e = 0; e !== r; i.push(t[e++]));
                    return i
                }(e)), d = 0; d < e.length; d++) p = l(n), y && (p.startAt = l(y), y.cycle && h(p.startAt, e, d)), v && (h(p, e, d), null != p.duration && (i = p.duration, delete p.duration)), m.to(e[d], i, p, g(d, e[d], e));
            return this.add(m, a)
        }, p.staggerFrom = function(t, e, i, r, n, s, a, o) { return i.runBackwards = !0, this.staggerTo(t, e, f(0, i), r, n, s, a, o) }, p.staggerFromTo = function(t, e, i, r, n, s, a, o, l) { return r.startAt = i, this.staggerTo(t, e, f(0, r, i), n, s, a, o, l) }, p.call = function(t, e, i, r) { return this.add(_.h.delayedCall(0, t, e, i), r) }, p.set = function(t, e, i) { return this.add(new _.h(t, 0, f(0, e, null, !0)), i) }, t.exportRoot = function(e, i) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var r, n, s, a, o = new t(e),
                l = o._timeline;
            for (null == i && (i = !0), l._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = l._time, s = l._first; s;) a = s._next, i && s instanceof _.h && s.target === s.vars.onComplete || ((n = s._startTime - s._delay) < 0 && (r = 1), o.add(s, n)), s = a;
            return l.add(o, 0), r && o.totalDuration(), o
        }, p.add = function(e, i, r, s) {
            var a, o, l, h, c, f;
            if ("number" != typeof i && (i = this._parseTimeOrLabel(i, 0, !0, e)), !(e instanceof _.a)) {
                if (e instanceof Array || e && e.push && n(e)) { for (r = r || "normal", s = s || 0, a = i, o = e.length, l = 0; l < o; l++) n(h = e[l]) && (h = new t({ tweens: h })), this.add(h, a), "string" != typeof h && "function" != typeof h && ("sequence" === r ? a = h._startTime + h.totalDuration() / h._timeScale : "start" === r && (h._startTime -= h.delay())), a += s; return this._uncache(!0) }
                if ("string" == typeof e) return this.addLabel(e, i);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                e = _.h.delayedCall(0, e)
            }
            if (_.e.prototype.add.call(this, e, i), (e._time || !e._duration && e._initted) && (a = (this.rawTime() - e._startTime) * e._timeScale, (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), a))) - e._totalTime > 1e-5) && e.render(a, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (f = (c = this).rawTime() > e._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
            return this
        }, p.remove = function(t) { if (t instanceof _.a) { this._remove(t, !1); var e = t._timeline = t.vars.useFrames ? _.a._rootFramesTimeline : _.a._rootTimeline; return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this } if (t instanceof Array || t && t.push && n(t)) { for (var i = t.length; --i > -1;) this.remove(t[i]); return this } return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t) }, p._remove = function(t, e) { return _.e.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, p.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, p.insert = p.insertMultiple = function(t, e, i, r) { return this.add(t, e || 0, i, r) }, p.appendMultiple = function(t, e, i, r) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r) }, p.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, p.addPause = function(t, e, i, r) { var n = _.h.delayedCall(0, c, i, r || this); return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t) }, p.removeLabel = function(t) { return delete this._labels[t], this }, p.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, p._parseTimeOrLabel = function(t, e, i, r) {
            var s, a;
            if (r instanceof _.a && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || r.push && n(r)))
                for (a = r.length; --a > -1;) r[a] instanceof _.a && r[a].timeline === this && this.remove(r[a]);
            if (s = "number" != typeof t || e ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - s : 0, i);
            if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = s);
            else {
                if (-1 === (a = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = s + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(a - 1) + "1", 10) * Number(t.substr(a + 1)), t = a > 1 ? this._parseTimeOrLabel(t.substr(0, a - 1), 0, i) : s
            }
            return Number(t) + e
        }, p.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, p.stop = function() { return this.paused(!0) }, p.gotoAndPlay = function(t, e) { return this.play(t, e) }, p.gotoAndStop = function(t, e) { return this.pause(t, e) }, p.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r, n, o, l, h, c, f, u, p = this._time,
                d = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._startTime,
                g = this._timeScale,
                y = this._paused;
            if (p !== this._time && (t += this._time - p), this._hasPause && !this._forcingPlayhead && !e) {
                if (t > p)
                    for (r = this._first; r && r._startTime <= t && !c;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), r = r._next;
                else
                    for (r = this._last; r && r._startTime >= t && !c;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), r = r._prev;
                c && (this._time = this._totalTime = t = c._startTime, u = this._startTime + (this._reversed ? this._duration - t : t) / this._timeScale)
            }
            if (t >= d - 1e-8 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, t = d + 1e-4;
            else if (t < 1e-8)
                if (this._totalTime = this._time = 0, t > -1e-8 && (t = 0), (0 !== p || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete", n = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && n)
                        for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                    t = 0, this._initted || (h = !0)
                }
            else this._totalTime = this._time = this._rawPrevTime = t;
            if (this._time !== p && this._first || i || h || c) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (f = this._time) >= p)
                    for (r = this._first; r && (o = r._next, f === this._time && (!this._paused || y));)(r._active || r._startTime <= f && !r._paused && !r._gc) && (c === r && (this.pause(), this._pauseTime = u), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = o;
                else
                    for (r = this._last; r && (o = r._prev, f === this._time && (!this._paused || y));) {
                        if (r._active || r._startTime <= p && !r._paused && !r._gc) {
                            if (c === r) {
                                for (c = r._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                c = null, this.pause(), this._pauseTime = u
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                        }
                        r = o
                    }
                this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), l && (this._gc || m !== this._startTime && g === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (n && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
            }
        }, p._hasPausedChild = function() {
            for (var e = this._first; e;) {
                if (e._paused || e instanceof t && e._hasPausedChild()) return !0;
                e = e._next
            }
            return !1
        }, p.getChildren = function(t, e, i, r) { r = r || -9999999999; for (var n = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof _.h ? !1 !== e && (n[a++] = s) : (!1 !== i && (n[a++] = s), !1 !== t && (a = (n = n.concat(s.getChildren(!0, e, i))).length))), s = s._next; return n }, p.getTweensOf = function(t, e) {
            var i, r, n = this._gc,
                s = [],
                a = 0;
            for (n && this._enabled(!0, !0), r = (i = _.h.getTweensOf(t)).length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (s[a++] = i[r]);
            return n && this._enabled(!1, !0), s
        }, p.recent = function() { return this._recent }, p._contains = function(t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, p.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var r, n = this._first, s = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
            if (e)
                for (r in s) s[r] >= i && (s[r] += t);
            return this._uncache(!0)
        }, p._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(t, e) && (n = !0); return n }, p.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0)
        }, p.invalidate = function() { for (var t = this._first; t;) t.invalidate(), t = t._next; return _.a.prototype.invalidate.call(this) }, p._enabled = function(t, e) {
            if (t === this._gc)
                for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
            return _.e.prototype._enabled.call(this, t, e)
        }, p.totalTime = function(t, e, i) { this._forcingPlayhead = !0; var r = _.a.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, r }, p.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, p.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, r = 0, n = this, s = n._last, a = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > a && n._sortChildren && !s._paused && !n._calculatingDuration ? (n._calculatingDuration = 1, n.add(s, s._startTime - s._delay), n._calculatingDuration = 0) : a = s._startTime, s._startTime < 0 && !s._paused && (r -= s._startTime, n._timeline.smoothChildTiming && (n._startTime += s._startTime / n._timeScale, n._time -= s._startTime, n._totalTime -= s._startTime, n._rawPrevTime -= s._startTime), n.shiftChildren(-s._startTime, !1, -9999999999), a = 0), (i = s._startTime + s._totalDuration / s._timeScale) > r && (r = i), s = e;
                    n._duration = n._totalDuration = r, n._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }, p.paused = function(t) {
            if (!1 === t && this._paused)
                for (var e = this._first; e;) e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
            return _.a.prototype.paused.apply(this, arguments)
        }, p.usesFrames = function() { for (var t = this._timeline; t._timeline;) t = t._timeline; return t === _.a._rootFramesTimeline }, p.rawTime = function(t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, t
    }, !0);
    var x = _.i.TimelineLite;
    _.g._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function() {
        var t = function(t) { x.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0 },
            e = _.h._internals,
            i = e.lazyTweens,
            r = e.lazyRender,
            n = _.g._gsDefine.globals,
            s = new _.b(null, null, 1, 0),
            a = t.prototype = new x;
        return a.constructor = t, a.kill()._gc = !1, t.version = "2.1.3", a.invalidate = function() { return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), x.prototype.invalidate.call(this) }, a.addCallback = function(t, e, i, r) { return this.add(_.h.delayedCall(0, t, i, r), e) }, a.removeCallback = function(t, e) {
            if (t)
                if (null == e) this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), r = i.length, n = this._parseTimeOrLabel(e); --r > -1;) i[r]._startTime === n && i[r]._enabled(!1, !1);
            return this
        }, a.removePause = function(t) { return this.removeCallback(x._internals.pauseCallback, t) }, a.tweenTo = function(t, e) {
            e = e || {};
            var i, r, a, o = { ease: s, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                l = e.repeat && n.TweenMax || _.h;
            for (r in e) o[r] = e[r];
            return o.time = this._parseTimeOrLabel(t), i = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new l(this, i, o), o.onStart = function() { a.target.paused(!0), a.vars.time === a.target.time() || i !== a.duration() || a.isFromTo || a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale).render(a.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || a, e.onStartParams || []) }, a
        }, a.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var r = this.tweenTo(e, i); return r.isFromTo = 1, r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001) }, a.render = function(t, e, n) {
            this._gc && this._enabled(!0, !1);
            var s, a, o, l, h, c, f, u, p, d = this._time,
                m = this._dirty ? this.totalDuration() : this._totalDuration,
                g = this._duration,
                y = this._totalTime,
                v = this._startTime,
                _ = this._timeScale,
                x = this._rawPrevTime,
                b = this._paused,
                w = this._cycle;
            if (d !== this._time && (t += this._time - d), t >= m - 1e-8 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || x < 0 || 1e-8 === x) && x !== t && this._first && (h = !0, x > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
            else if (t < 1e-8)
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, t > -1e-8 && (t = 0), (0 !== d || 0 === g && 1e-8 !== x && (x > 0 || t < 0 && x >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = a = !0, l = "onReverseComplete") : x >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && a)
                        for (s = this._first; s && 0 === s._startTime;) s._duration || (a = !1), s = s._next;
                    t = 0, this._initted || (h = !0)
                }
            else 0 === g && x < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = g + this._repeatDelay, this._cycle = this._totalTime / c >> 0, this._cycle && this._cycle === this._totalTime / c && y <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 1 & this._cycle && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
            if (this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) > d || this._repeat && w !== this._cycle)
                    for (s = this._first; s && s._startTime <= t && !f;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (f = s), s = s._next;
                else
                    for (s = this._last; s && s._startTime >= t && !f;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (f = s), s = s._prev;
                f && (p = this._startTime + (this._reversed ? this._duration - f._startTime : f._startTime) / this._timeScale, f._startTime < g && (this._time = this._rawPrevTime = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)))
            }
            if (this._cycle !== w && !this._locked) {
                var T = this._yoyo && 0 != (1 & w),
                    S = T === (this._yoyo && 0 != (1 & this._cycle)),
                    P = this._totalTime,
                    E = this._cycle,
                    k = this._rawPrevTime,
                    A = this._time;
                if (this._totalTime = w * g, this._cycle < w ? T = !T : this._totalTime += g, this._time = d, this._rawPrevTime = 0 === g ? x - 1e-4 : x, this._cycle = w, this._locked = !0, d = T ? 0 : g, this.render(d, e, 0 === g), e || this._gc || this.vars.onRepeat && (this._cycle = E, this._locked = !1, this._callback("onRepeat")), d !== this._time) return;
                if (S && (this._cycle = w, this._locked = !0, d = T ? g + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !b) return;
                this._time = A, this._totalTime = P, this._cycle = E, this._rawPrevTime = k
            }
            if (this._time !== d && this._first || n || h || f) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== y && t > 0 && (this._active = !0), 0 === y && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (u = this._time) >= d)
                    for (s = this._first; s && (o = s._next, u === this._time && (!this._paused || b));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (f === s && (this.pause(), this._pauseTime = p), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, n) : s.render((t - s._startTime) * s._timeScale, e, n)), s = o;
                else
                    for (s = this._last; s && (o = s._prev, u === this._time && (!this._paused || b));) {
                        if (s._active || s._startTime <= d && !s._paused && !s._gc) {
                            if (f === s) {
                                for (f = s._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, n), f = f._prev;
                                f = null, this.pause(), this._pauseTime = p
                            }
                            s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, n) : s.render((t - s._startTime) * s._timeScale, e, n)
                        }
                        s = o
                    }
                this._onUpdate && (e || (i.length && r(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && _ === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (a && (i.length && r(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
            } else y !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, a.getActive = function(t, e, i) {
            var r, n, s = [],
                a = this.getChildren(t || null == t, e || null == t, !!i),
                o = 0,
                l = a.length;
            for (r = 0; r < l; r++)(n = a[r]).isActive() && (s[o++] = n);
            return s
        }, a.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
                r = i.length;
            for (e = 0; e < r; e++)
                if (i[e].time > t) return i[e].name;
            return null
        }, a.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                if (e[i].time < t) return e[i].name;
            return null
        }, a.getLabelsArray = function() {
            var t, e = [],
                i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return e.sort(function(t, e) { return t.time - e.time }), e
        }, a.invalidate = function() { return this._locked = !1, x.prototype.invalidate.call(this) }, a.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, a.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, a.totalDuration = function(t) { return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (x.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, a.time = function(t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration,
                r = this._cycle,
                n = r * (i + this._repeatDelay);
            return t > i && (t = i), this.totalTime(this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t, e)
        }, a.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, a.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, a.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, a.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, t
    }, !0);
    var b = _.i.TimelineMax;
    _.g._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function() {
        var t = function(t) {
                var e, i = [],
                    r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i
            },
            e = function(t, e, i) {
                var r, n, s = t.cycle;
                for (r in s) n = s[r], t[r] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length];
                delete t.cycle
            },
            i = function(t) {
                if ("function" == typeof t) return t;
                var e = "object" == typeof t ? t : { each: t },
                    i = e.ease,
                    r = e.from || 0,
                    n = e.base || 0,
                    s = {},
                    a = isNaN(r),
                    o = e.axis,
                    l = { center: .5, end: 1 }[r] || 0;
                return function(t, h, c) {
                    var f, u, p, d, m, g, y, v, _, x = (c || e).length,
                        b = s[x];
                    if (!b) {
                        if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                            for (y = -1 / 0; y < (y = c[_++].getBoundingClientRect().left) && _ < x;);
                            _--
                        }
                        for (b = s[x] = [], f = a ? Math.min(_, x) * l - .5 : r % _, u = a ? x * l / _ - .5 : r / _ | 0, y = 0, v = 1 / 0, g = 0; g < x; g++) p = g % _ - f, d = u - (g / _ | 0), b[g] = m = o ? Math.abs("y" === o ? d : p) : Math.sqrt(p * p + d * d), m > y && (y = m), m < v && (v = m);
                        b.max = y - v, b.min = v, b.v = x = e.amount || e.each * (_ > x ? x - 1 : o ? "y" === o ? x / _ : _ : Math.max(_, x / _)) || 0, b.b = x < 0 ? n - x : n
                    }
                    return x = (b[t] - b.min) / b.max, b.b + (i ? i.getRatio(x) : x) * b.v
                }
            },
            r = function(t, e, i) { _.h.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render },
            n = _.h._internals,
            s = n.isSelector,
            a = n.isArray,
            o = r.prototype = _.h.to({}, .1, {}),
            l = [];
        r.version = "2.1.3", o.constructor = r, o.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = _.h.killTweensOf, r.getTweensOf = _.h.getTweensOf, r.lagSmoothing = _.h.lagSmoothing, r.ticker = _.h.ticker, r.render = _.h.render, r.distribute = i, o.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), _.h.prototype.invalidate.call(this) }, o.updateTo = function(t, e) {
            var i, r = this.ratio,
                n = this.vars.immediateRender || t.immediateRender;
            for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
            if (this._initted || n)
                if (e) this._initted = !1, n && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && _.h._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || n)
                for (var a, o = 1 / (1 - r), l = this._firstPT; l;) a = l.s + l.c, l.c *= o, l.s = a - l.c, l = l._next;
            return this
        }, o.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, s, a, o, l, h, c, f, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._time,
                m = this._totalTime,
                g = this._cycle,
                y = this._duration,
                v = this._rawPrevTime;
            if (t >= p - 1e-8 && t >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && t >= -1e-8 || 1e-8 === v && "isPause" !== this.data) && v !== t && (i = !0, v > 1e-8 && (s = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : 1e-8)) : t < 1e-8 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && v > 0) && (s = "onReverseComplete", r = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : 1e-8)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = y + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (u = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== u || this._initted ? this._yoyoEase = u = !0 === u ? this._ease : u instanceof _.b ? u : _.b.map[u] : (u = this.vars.ease, this._yoyoEase = u = u ? u instanceof _.b ? u : "function" == typeof u ? new _.b(u, this.vars.easeParams) : _.b.map[u] || _.h.defaultEase : _.h.defaultEase)), this.ratio = u ? 1 - u.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !u ? (l = this._time / y, (1 === (h = this._easeType) || 3 === h && l >= .5) && (l = 1 - l), 3 === h && (l *= 2), 1 === (c = this._easePower) ? l *= l : 2 === c ? l *= l * l : 3 === c ? l *= l * l * l : 4 === c && (l *= l * l * l * l), this.ratio = 1 === h ? 1 - l : 2 === h ? l : this._time / y < .5 ? l / 2 : 1 - l / 2) : u || (this.ratio = this._ease.getRatio(this._time / y))), d !== this._time || i || g !== this._cycle) {
                if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, n.lazyTweens.push(this), void(this._lazy = [t, e]);!this._time || r || u ? r && this._ease._calcEnd && !u && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y) }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === y && 1e-8 === this._rawPrevTime && 1e-8 !== f && (this._rawPrevTime = 0)))
            } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, r.to = function(t, e, i) { return new r(t, e, i) }, r.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i) }, r.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n) }, r.staggerTo = r.allTo = function(n, o, h, c, f, u, p) {
            var d, m, g, y, v = [],
                x = i(h.stagger || c),
                b = h.cycle,
                w = (h.startAt || l).cycle;
            for (a(n) || ("string" == typeof n && (n = _.h.selector(n) || n), s(n) && (n = t(n))), d = (n = n || []).length - 1, g = 0; g <= d; g++) {
                for (y in m = {}, h) m[y] = h[y];
                if (b && (e(m, n, g), null != m.duration && (o = m.duration, delete m.duration)), w) {
                    for (y in w = m.startAt = {}, h.startAt) w[y] = h.startAt[y];
                    e(m.startAt, n, g)
                }
                m.delay = x(g, n[g], n) + (m.delay || 0), g === d && f && (m.onComplete = function() { h.onComplete && h.onComplete.apply(h.onCompleteScope || this, arguments), f.apply(p || h.callbackScope || this, u || l) }), v[g] = new r(n[g], o, m)
            }
            return v
        }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, a, o) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, a, o) }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, a, o, l) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, a, o, l) }, r.delayedCall = function(t, e, i, n, s) { return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: s, overwrite: 0 }) }, r.set = function(t, e) { return new r(t, 0, e) }, r.isTweening = function(t) { return _.h.getTweensOf(t, !0).length > 0 };
        var h = function(t, e) { for (var i = [], r = 0, n = t._first; n;) n instanceof _.h ? i[r++] = n : (e && (i[r++] = n), r = (i = i.concat(h(n, e))).length), n = n._next; return i },
            c = r.getAllTweens = function(t) { return h(_.a._rootTimeline, t).concat(h(_.a._rootFramesTimeline, t)) };
        r.killAll = function(t, e, i, r) {
            null == e && (e = !0), null == i && (i = !0);
            var n, s, a, o = c(0 != r),
                l = o.length,
                h = e && i && r;
            for (a = 0; a < l; a++) s = o[a], (h || s instanceof _.e || (n = s.target === s.vars.onComplete) && i || e && !n) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, r.killChildTweensOf = function(e, i) {
            if (null != e) {
                var o, l, h, c, f, u = n.tweenLookup;
                if ("string" == typeof e && (e = _.h.selector(e) || e), s(e) && (e = t(e)), a(e))
                    for (c = e.length; --c > -1;) r.killChildTweensOf(e[c], i);
                else {
                    for (h in o = [], u)
                        for (l = u[h].target.parentNode; l;) l === e && (o = o.concat(u[h].tweens)), l = l.parentNode;
                    for (f = o.length, c = 0; c < f; c++) i && o[c].totalTime(o[c].totalDuration()), o[c]._enabled(!1, !1)
                }
            }
        };
        var f = function(t, e, i, r) { e = !1 !== e, i = !1 !== i; for (var n, s, a = c(r = !1 !== r), o = e && i && r, l = a.length; --l > -1;) s = a[l], (o || s instanceof _.e || (n = s.target === s.vars.onComplete) && i || e && !n) && s.paused(t) };
        return r.pauseAll = function(t, e, i) { f(!0, t, e, i) }, r.resumeAll = function(t, e, i) { f(!1, t, e, i) }, r.globalTimeScale = function(t) {
            var e = _.a._rootTimeline,
                i = _.h.ticker.time;
            return arguments.length ? (t = t || 1e-8, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = _.a._rootFramesTimeline, i = _.h.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = _.a._rootTimeline._timeScale = t, t) : e._timeScale
        }, o.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio }, o.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, o.time = function(t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration,
                r = this._cycle,
                n = r * (i + this._repeatDelay);
            return t > i && (t = i), this.totalTime(this._yoyo && 1 & r ? i - t + n : this._repeat ? t + n : t, e)
        }, o.duration = function(t) { return arguments.length ? _.a.prototype.duration.call(this, t) : this._duration }, o.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, o.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, o.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, o.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, r
    }, !0);
    var w = _.i.TweenMax;
    _.g._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function() {
        var t, e, i, r, n = function() { _.f.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = n.prototype.setRatio },
            s = _.g._gsDefine.globals,
            a = {},
            o = n.prototype = new _.f("css");
        o.constructor = n, n.version = "2.1.3", n.API = 2, n.defaultTransformPerspective = 0, n.defaultSkewType = "compensated", n.defaultSmoothOrigin = !0, o = "px", n.suffixMap = { top: o, right: o, bottom: o, left: o, width: o, height: o, fontSize: o, padding: o, margin: o, perspective: o, lineHeight: "" };
        var l, h, c, f, u, p, d, m, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
            b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            w = /(?:\d|\-|\+|=|#|\.)*/g,
            T = /opacity *= *([^)]*)/i,
            S = /opacity:([^;]*)/i,
            P = /alpha\(opacity *=.+?\)/i,
            E = /^(rgb|hsl)/,
            k = /([A-Z])/g,
            A = /-([a-z])/gi,
            C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            M = function(t, e) { return e.toUpperCase() },
            D = /(?:Left|Right|Width)/i,
            F = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            I = /,(?=[^\)]*(?:\(|$))/gi,
            R = /[\s,\(]/i,
            L = Math.PI / 180,
            N = 180 / Math.PI,
            B = {},
            V = { style: {} },
            z = _.g.document || { createElement: function() { return V } },
            j = function(t, e) { var i = z.createElementNS ? z.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : z.createElement(t); return i.style ? i : z.createElement(t) },
            G = j("div"),
            q = j("img"),
            H = n._internals = { _specialProps: a },
            X = (_.g.navigator || {}).userAgent || "",
            Y = function() {
                var t = X.indexOf("Android"),
                    e = j("a");
                return c = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3), u = c && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, f = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (p = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
            }(),
            W = function(t) { return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
            U = function(t) { _.g.console && console.log(t) },
            K = "",
            $ = "",
            Z = function(t, e) { var i, r, n = (e = e || G).style; if (void 0 !== n[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + t];); return r >= 0 ? (K = "-" + ($ = 3 === r ? "ms" : i[r]).toLowerCase() + "-", $ + t) : null },
            J = "undefined" != typeof window ? window : z.defaultView || { getComputedStyle: function() {} },
            Q = function(t) { return J.getComputedStyle(t) },
            tt = n.getStyle = function(t, e, i, r, n) { var s; return Y || "opacity" !== e ? (!r && t.style[e] ? s = t.style[e] : (i = i || Q(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : W(t) },
            et = H.convertToPixels = function(t, e, i, r, s) {
                if ("px" === r || !r && "lineHeight" !== e) return i;
                if ("auto" === r || !i) return 0;
                var a, o, l, h = D.test(e),
                    c = t,
                    f = G.style,
                    u = i < 0,
                    p = 1 === i;
                if (u && (i = -i), p && (i *= 100), "lineHeight" !== e || r)
                    if ("%" === r && -1 !== e.indexOf("border")) a = i / 100 * (h ? t.clientWidth : t.clientHeight);
                    else {
                        if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[h ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                        else {
                            if (c = t.parentNode || z.body, -1 !== tt(c, "display").indexOf("flex") && (f.position = "absolute"), o = c._gsCache, l = _.h.ticker.frame, o && h && o.time === l) return o.width * i / 100;
                            f[h ? "width" : "height"] = i + r
                        }
                        c.appendChild(G), a = parseFloat(G[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(G), h && "%" === r && !1 !== n.cacheWidths && ((o = c._gsCache = c._gsCache || {}).time = l, o.width = a / i * 100), 0 !== a || s || (a = et(t, e, i, r, !0))
                    }
                else o = Q(t).lineHeight, t.style.lineHeight = i, a = parseFloat(Q(t).lineHeight), t.style.lineHeight = o;
                return p && (a /= 100), u ? -a : a
            },
            it = H.calculateOffset = function(t, e, i) {
                if ("absolute" !== tt(t, "position", i)) return 0;
                var r = "left" === e ? "Left" : "Top",
                    n = tt(t, "margin" + r, i);
                return t["offset" + r] - (et(t, e, parseFloat(n), n.replace(w, "")) || 0)
            },
            rt = function(t, e) {
                var i, r, n, s = {};
                if (e = e || Q(t))
                    if (i = e.length)
                        for (; --i > -1;) - 1 !== (n = e[i]).indexOf("-transform") && It !== n || (s[n.replace(A, M)] = e.getPropertyValue(n));
                    else
                        for (i in e) - 1 !== i.indexOf("Transform") && Ot !== i || (s[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(A, M)] = e[i]);
                return Y || (s.opacity = W(t)), r = Wt(t, e, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX = r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, Lt && (s.z = r.z, s.rotationX = r.rotationX, s.rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s
            },
            nt = function(t, e, i, r, n) {
                var s, a, o, l = {},
                    h = t.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(b, "") ? s : 0 : it(t, a), void 0 !== h[a] && (o = new _t(h, a, h[a], o))));
                if (r)
                    for (a in r) "className" !== a && (l[a] = r[a]);
                return { difs: l, firstMPT: o }
            },
            st = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            ot = function(t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Q(t))[e] || 0;
                if (t.getCTM && Ht(t)) return t.getBBox()[e] || 0;
                var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    n = st[e],
                    s = n.length;
                for (i = i || Q(t); --s > -1;) r -= parseFloat(tt(t, "padding" + n[s], i, !0)) || 0, r -= parseFloat(tt(t, "border" + n[s] + "Width", i, !0)) || 0;
                return r
            },
            lt = function(t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                null != t && "" !== t || (t = "0 0");
                var i, r = t.split(" "),
                    n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                    s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                if (r.length > 3 && !e) { for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(lt(r[i])); return t.join(",") }
                return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (r.length > 2 ? " " + r[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(b, "")), e.oy = parseFloat(s.replace(b, "")), e.v = t), e || t
            },
            ht = function(t, e) { return "function" == typeof t && (t = t(m, d)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
            ct = function(t, e) { "function" == typeof t && (t = t(m, d)); var i = "string" == typeof t && "=" === t.charAt(1); return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
            ft = function(t, e, i, r) { var n, s, a, o; return "function" == typeof t && (t = t(m, d)), null == t ? a = e : "number" == typeof t ? a = t : (360, n = t.split("_"), s = ((o = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (o ? 0 : e), n.length && (r && (r[i] = e + s), -1 !== t.indexOf("short") && (s %= 360) !== s % 180 && (s = s < 0 ? s + 360 : s - 360), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % 360 - 360 * (s / 360 | 0) : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 3599999999640) % 360 - 360 * (s / 360 | 0))), a = e + s), a < 1e-6 && a > -1e-6 && (a = 0), a },
            ut = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
            pt = function(t, e, i) { return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
            dt = n.parseColor = function(t, e) {
                var i, r, n, s, a, o, l, h, c, f, u;
                if (t)
                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                    else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
                        else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + r + r + n + n + s + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (i = u = t.match(g), e) { if (-1 !== t.indexOf("=")) return t.match(y) } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, r = 2 * (l = Number(i[2]) / 100) - (n = l <= .5 ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = pt(a + 1 / 3, r, n), i[1] = pt(a, r, n), i[2] = pt(a - 1 / 3, r, n);
                        else i = t.match(g) || ut.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                    }
                else i = ut.black;
                return e && !u && (r = i[0] / 255, n = i[1] / 255, s = i[2] / 255, l = ((h = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2, h === c ? a = o = 0 : (f = h - c, o = l > .5 ? f / (2 - h - c) : f / (h + c), a = h === r ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - r) / f + 2 : (r - n) / f + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
            },
            mt = function(t, e) {
                var i, r, n, s = t.match(gt) || [],
                    a = 0,
                    o = "";
                if (!s.length) return t;
                for (i = 0; i < s.length; i++) r = s[i], a += (n = t.substr(a, t.indexOf(r, a) - a)).length + r.length, 3 === (r = dt(r, e)).length && r.push(1), o += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                return o + t.substr(a)
            },
            gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (o in ut) gt += "|" + o + "\\b";
        gt = new RegExp(gt + ")", "gi"), n.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), gt.lastIndex = 0
        }, _.h.defaultStringFilter || (_.h.defaultStringFilter = n.colorStringFilter);
        var yt = function(t, e, i, r) {
                if (null == t) return function(t) { return t };
                var n, s = e ? (t.match(gt) || [""])[0] : "",
                    a = t.split(s).join("").match(v) || [],
                    o = t.substr(0, t.indexOf(a[0])),
                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    h = -1 !== t.indexOf(" ") ? " " : ",",
                    c = a.length,
                    f = c > 0 ? a[0].replace(g, "") : "";
                return c ? n = e ? function(t) {
                    var e, u, p, d;
                    if ("number" == typeof t) t += f;
                    else if (r && I.test(t)) { for (d = t.replace(I, "|").split("|"), p = 0; p < d.length; p++) d[p] = n(d[p]); return d.join(",") }
                    if (e = (t.match(gt) || [s])[0], p = (u = t.split(e).join("").match(v) || []).length, c > p--)
                        for (; ++p < c;) u[p] = i ? u[(p - 1) / 2 | 0] : a[p];
                    return o + u.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, s, u;
                    if ("number" == typeof t) t += f;
                    else if (r && I.test(t)) { for (s = t.replace(I, "|").split("|"), u = 0; u < s.length; u++) s[u] = n(s[u]); return s.join(",") }
                    if (u = (e = t.match("," === h ? v : x) || []).length, c > u--)
                        for (; ++u < c;) e[u] = i ? e[(u - 1) / 2 | 0] : a[u];
                    return (o && "none" !== t && t.substr(0, t.indexOf(e[0])) || o) + e.join(h) + l
                } : function(t) { return t }
            },
            vt = function(t) {
                return t = t.split(","),
                    function(e, i, r, n, s, a, o) { var l, h = (i + "").split(" "); for (o = {}, l = 0; l < 4; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return n.parse(e, o, s, a) }
            },
            _t = (H._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, r, n, s, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
                    for (l = a.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                        if ((i = l.t).type) {
                            if (1 === i.type) {
                                for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                i[s] = n
                            }
                        } else i[s] = i.s + i.xs0;
                        l = l._next
                    }
            }, function(t, e, i, r, n) { this.t = t, this.p = e, this.v = i, this.r = n, r && (r._prev = this, this._next = r) }),
            xt = (H._parseToProxy = function(t, e, i, r, n, s) {
                var a, o, l, h, c, f = r,
                    u = {},
                    p = {},
                    d = i._transform,
                    m = B;
                for (i._transform = null, B = e, r = c = i.parse(t, e, r, n), B = m, s && (i._transform = d, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
                    if (r.type <= 1 && (p[o = r.p] = r.s + r.c, u[o] = r.s, s || (h = new _t(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                        for (a = r.l; --a > 0;) l = "xn" + a, p[o = r.p + "_" + l] = r.data[l], u[o] = r[l], s || (h = new _t(r, l, o, h, r.rxp[l]));
                    r = r._next
                }
                return { proxy: u, end: p, firstMPT: h, pt: c }
            }, H.CSSPropTween = function(e, i, n, s, a, o, l, h, c, f, u) { this.t = e, this.p = i, this.s = n, this.c = s, this.n = l || i, e instanceof xt || r.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = o || 0, c && (this.pr = c, t = !0), this.b = void 0 === f ? n : f, this.e = void 0 === u ? n + s : u, a && (this._next = a, a._prev = this) }),
            bt = function(t, e, i, r, n, s) { var a = new xt(t, e, i, r - i, n, -1, s); return a.b = i, a.e = a.xs0 = r, a },
            wt = n.parseComplex = function(t, e, i, r, s, a, o, h, c, f) {
                i = i || a || "", "function" == typeof r && (r = r(m, d)), o = new xt(t, e, 0, 0, o, f ? 2 : 1, null, !1, h, i, r), r += "", s && gt.test(r + i) && (r = [i, r], n.colorStringFilter(r), i = r[0], r = r[1]);
                var u, p, v, _, x, b, w, T, S, P, E, k, A, C = i.split(", ").join(",").split(" "),
                    M = r.split(", ").join(",").split(" "),
                    D = C.length,
                    F = !1 !== l;
                for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (C = C.join(" ").replace(I, ", ").split(" "), M = M.join(" ").replace(I, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "), M = M.join(" ").split(",").join(", ").split(" ")), D = C.length), D !== M.length && (D = (C = (a || "").split(" ")).length), o.plugin = c, o.setRatio = f, gt.lastIndex = 0, u = 0; u < D; u++)
                    if (_ = C[u], x = M[u] + "", (T = parseFloat(_)) || 0 === T) o.appendXtra("", T, ht(x, T), x.replace(y, ""), !(!F || -1 === x.indexOf("px")) && Math.round, !0);
                    else if (s && gt.test(_)) k = ")" + ((k = x.indexOf(")") + 1) ? x.substr(k) : ""), A = -1 !== x.indexOf("hsl") && Y, P = x, _ = dt(_, A), x = dt(x, A), (S = _.length + x.length > 6) && !Y && 0 === x[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(M[u]).join("transparent")) : (Y || (S = !1), A ? o.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(" : "hsl("), _[0], ht(x[0], _[0]), ",", !1, !0).appendXtra("", _[1], ht(x[1], _[1]), "%,", !1).appendXtra("", _[2], ht(x[2], _[2]), S ? "%," : "%" + k, !1) : o.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(" : "rgb("), _[0], x[0] - _[0], ",", Math.round, !0).appendXtra("", _[1], x[1] - _[1], ",", Math.round).appendXtra("", _[2], x[2] - _[2], S ? "," : k, Math.round), S && (_ = _.length < 4 ? 1 : _[3], o.appendXtra("", _, (x.length < 4 ? 1 : x[3]) - _, k, !1))), gt.lastIndex = 0;
                else if (b = _.match(g)) {
                    if (!(w = x.match(y)) || w.length !== b.length) return o;
                    for (v = 0, p = 0; p < b.length; p++) E = b[p], P = _.indexOf(E, v), o.appendXtra(_.substr(v, P - v), Number(E), ht(w[p], E), "", !(!F || "px" !== _.substr(P + E.length, 2)) && Math.round, 0 === p), v = P + E.length;
                    o["xs" + o.l] += _.substr(v)
                } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + x : x;
                if (-1 !== r.indexOf("=") && o.data) {
                    for (k = o.xs0 + o.data.s, u = 1; u < o.l; u++) k += o["xs" + u] + o.data["xn" + u];
                    o.e = k + o["xs" + u]
                }
                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
            },
            Tt = 9;
        for ((o = xt.prototype).l = o.pr = 0; --Tt > 0;) o["xn" + Tt] = 0, o["xs" + Tt] = "";
        o.xs0 = "", o._next = o._prev = o.xfirst = o.data = o.plugin = o.setRatio = o.rxp = null, o.appendXtra = function(t, e, i, r, n, s) {
            var a = this,
                o = a.l;
            return a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = n, a["xn" + o] = e, a.plugin || (a.xfirst = new xt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = n, a)) : (a["xs" + o] += e + (r || ""), a)
        };
        var St = function(t, e) { e = e || {}, this.p = e.prefix && Z(t) || t, a[t] = a[this.p] = this, this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0 },
            Pt = H._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = { parser: i });
                var r, n = t.split(","),
                    s = e.defaultValue;
                for (i = i || [s], r = 0; r < n.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || s, new St(n[r], e)
            },
            Et = H._registerPluginProp = function(t) {
                if (!a[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    Pt(t, { parser: function(t, i, r, n, o, l, h) { var c = s.com.greensock.plugins[e]; return c ? (c._cssRegister(), a[r].parse(t, i, r, n, o, l, h)) : (U("Error: " + e + " js file not loaded."), o) } })
                }
            };
        (o = St.prototype).parseComplex = function(t, e, i, r, n, s) {
            var a, o, l, h, c, f, u = this.keyword;
            if (this.multi && (I.test(i) || I.test(e) ? (o = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : u && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, u && (c = e.indexOf(u)) !== (f = i.indexOf(u)) && (-1 === f ? o[a] = o[a].split(u).join("") : -1 === c && (o[a] += " " + u));
                e = o.join(", "), i = l.join(", ")
            }
            return wt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s)
        }, o.parse = function(t, e, r, n, s, a, o) { return this.parseComplex(t.style, this.format(tt(t, this.p, i, !1, this.dflt)), this.format(e), s, a) }, n.registerSpecialProp = function(t, e, i) { Pt(t, { parser: function(t, r, n, s, a, o, l) { var h = new xt(t, n, 0, 0, a, 2, n, !1, i); return h.plugin = o, h.setRatio = e(t, r, s._tween, n), h }, priority: i }) }, n.useSVGTransformAttr = !0;
        var kt, At, Ct, Mt, Dt, Ft = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Ot = Z("transform"),
            It = K + "transform",
            Rt = Z("transformOrigin"),
            Lt = null !== Z("perspective"),
            Nt = H.Transform = function() { this.perspective = parseFloat(n.defaultTransformPerspective) || 0, this.force3D = !(!1 === n.defaultForce3D || !Lt) && (n.defaultForce3D || "auto") },
            Bt = _.g.SVGElement,
            Vt = function(t, e, i) {
                var r, n = z.createElementNS("http://www.w3.org/2000/svg", t),
                    s = /([a-z])([A-Z])/g;
                for (r in i) n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
                return e.appendChild(n), n
            },
            zt = z.documentElement || {},
            jt = (Dt = p || /Android/i.test(X) && !_.g.chrome, z.createElementNS && zt.appendChild && !Dt && (At = Vt("svg", zt), Mt = (Ct = Vt("rect", At, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, Ct.style[Rt] = "50% 50%", Ct.style[Ot] = "scaleX(0.5)", Dt = Mt === Ct.getBoundingClientRect().width && !(f && Lt), zt.removeChild(At)), Dt),
            Gt = function(t, e, i, r, s, a) {
                var o, l, h, c, f, u, p, d, m, g, y, v, _, x, b = t._gsTransform,
                    w = Yt(t, !0);
                b && (_ = b.xOrigin, x = b.yOrigin), (!r || (o = r.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), o = [(-1 !== (e = lt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = c = parseFloat(o[0]), i.yOrigin = f = parseFloat(o[1]), r && w !== Xt && (u = w[0], p = w[1], d = w[2], m = w[3], g = w[4], y = w[5], (v = u * m - p * d) && (l = c * (m / v) + f * (-d / v) + (d * y - m * g) / v, h = c * (-p / v) + f * (u / v) - (u * y - p * g) / v, c = i.xOrigin = o[0] = l, f = i.yOrigin = o[1] = h)), b && (a && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), s || !1 !== s && !1 !== n.defaultSmoothOrigin ? (l = c - _, h = f - x, b.xOffset += l * w[0] + h * w[2] - l, b.yOffset += l * w[1] + h * w[3] - h) : b.xOffset = b.yOffset = 0), a || t.setAttribute("data-svg-origin", o.join(" "))
            },
            qt = function(t) {
                var e, i = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    r = this.parentNode,
                    n = this.nextSibling,
                    s = this.style.cssText;
                if (zt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = qt } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                return n ? r.insertBefore(this, n) : r.appendChild(this), zt.removeChild(i), this.style.cssText = s, e
            },
            Ht = function(t) { return !(!Bt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) { try { return t.getBBox() } catch (e) { return qt.call(t, !0) } }(t)) },
            Xt = [1, 0, 0, 1, 0, 0],
            Yt = function(t, e) {
                var i, r, n, s, a, o, l, h = t._gsTransform || new Nt,
                    c = t.style;
                if (Ot ? r = tt(t, It, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(F)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, Ot && i && !t.offsetParent && t !== zt && (s = c.display, c.display = "block", (l = t.parentNode) && t.offsetParent || (a = 1, o = t.nextSibling, zt.appendChild(t)), i = !(r = tt(t, It, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, s ? c.display = s : Zt(c, "display"), a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : zt.removeChild(t))), (h.svg || t.getCTM && Ht(t)) && (i && -1 !== (c[Ot] + "").indexOf("matrix") && (r = c[Ot], i = 0), n = t.getAttribute("transform"), i && n && (r = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")", i = 0)), i) return Xt;
                for (n = (r || "").match(g) || [], Tt = n.length; --Tt > -1;) s = Number(n[Tt]), n[Tt] = (a = s - (s |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
            },
            Wt = H.getTransform = function(t, e, i, r) {
                if (t._gsTransform && i && !r) return t._gsTransform;
                var s, a, o, l, h, c, f = i && t._gsTransform || new Nt,
                    u = f.scaleX < 0,
                    p = Lt && (parseFloat(tt(t, Rt, e, !1, "0 0 0").split(" ")[2]) || f.zOrigin) || 0,
                    d = parseFloat(n.defaultTransformPerspective) || 0;
                if (f.svg = !(!t.getCTM || !Ht(t)), f.svg && (Gt(t, tt(t, Rt, e, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), kt = n.useSVGTransformAttr || jt), (s = Yt(t)) !== Xt) {
                    if (16 === s.length) {
                        var m, g, y, v, x, b = s[0],
                            w = s[1],
                            T = s[2],
                            S = s[3],
                            P = s[4],
                            E = s[5],
                            k = s[6],
                            A = s[7],
                            C = s[8],
                            M = s[9],
                            D = s[10],
                            F = s[12],
                            O = s[13],
                            I = s[14],
                            R = s[11],
                            L = Math.atan2(k, D);
                        f.zOrigin && (F = C * (I = -f.zOrigin) - s[12], O = M * I - s[13], I = D * I + f.zOrigin - s[14]), f.rotationX = L * N, L && (m = P * (v = Math.cos(-L)) + C * (x = Math.sin(-L)), g = E * v + M * x, y = k * v + D * x, C = P * -x + C * v, M = E * -x + M * v, D = k * -x + D * v, R = A * -x + R * v, P = m, E = g, k = y), L = Math.atan2(-T, D), f.rotationY = L * N, L && (g = w * (v = Math.cos(-L)) - M * (x = Math.sin(-L)), y = T * v - D * x, M = w * x + M * v, D = T * x + D * v, R = S * x + R * v, b = m = b * v - C * x, w = g, T = y), L = Math.atan2(w, b), f.rotation = L * N, L && (m = b * (v = Math.cos(L)) + w * (x = Math.sin(L)), g = P * v + E * x, y = C * v + M * x, w = w * v - b * x, E = E * v - P * x, M = M * v - C * x, b = m, P = g, C = y), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), L = Math.atan2(P, E), f.scaleX = (1e5 * Math.sqrt(b * b + w * w + T * T) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(E * E + k * k) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(C * C + M * M + D * D) + .5 | 0) / 1e5, b /= f.scaleX, P /= f.scaleY, w /= f.scaleX, E /= f.scaleY, Math.abs(L) > 2e-5 ? (f.skewX = L * N, P = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(L))) : f.skewX = 0, f.perspective = R ? 1 / (R < 0 ? -R : R) : 0, f.x = F, f.y = O, f.z = I, f.svg && (f.x -= f.xOrigin - (f.xOrigin * b - f.yOrigin * P), f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * E))
                    } else if (!Lt || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) {
                        var B = s.length >= 6,
                            V = B ? s[0] : 1,
                            z = s[1] || 0,
                            j = s[2] || 0,
                            G = B ? s[3] : 1;
                        f.x = s[4] || 0, f.y = s[5] || 0, o = Math.sqrt(V * V + z * z), l = Math.sqrt(G * G + j * j), h = V || z ? Math.atan2(z, V) * N : f.rotation || 0, c = j || G ? Math.atan2(j, G) * N + h : f.skewX || 0, f.scaleX = o, f.scaleY = l, f.rotation = h, f.skewX = c, Lt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = d, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * V + f.yOrigin * j), f.y -= f.yOrigin - (f.xOrigin * z + f.yOrigin * G))
                    }
                    for (a in Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (u ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = p, f) f[a] < 2e-5 && f[a] > -2e-5 && (f[a] = 0)
                }
                return i && (t._gsTransform = f, f.svg && (kt && t.style[Ot] ? _.h.delayedCall(.001, function() { Zt(t.style, Ot) }) : !kt && t.getAttribute("transform") && _.h.delayedCall(.001, function() { t.removeAttribute("transform") }))), f
            },
            Ut = function(t) {
                var e, i, r = this.data,
                    n = -r.rotation * L,
                    s = n + r.skewX * L,
                    a = (Math.cos(n) * r.scaleX * 1e5 | 0) / 1e5,
                    o = (Math.sin(n) * r.scaleX * 1e5 | 0) / 1e5,
                    l = (Math.sin(s) * -r.scaleY * 1e5 | 0) / 1e5,
                    h = (Math.cos(s) * r.scaleY * 1e5 | 0) / 1e5,
                    c = this.t.style,
                    f = this.t.currentStyle;
                if (f) {
                    i = o, o = -l, l = -i, e = f.filter, c.filter = "";
                    var u, d, m = this.t.offsetWidth,
                        g = this.t.offsetHeight,
                        y = "absolute" !== f.position,
                        v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h,
                        _ = r.x + m * r.xPercent / 100,
                        x = r.y + g * r.yPercent / 100;
                    if (null != r.ox && (_ += (u = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2) - (u * a + (d = (r.oyp ? g * r.oy * .01 : r.oy) - g / 2) * o), x += d - (u * l + d * h)), v += y ? ", Dx=" + ((u = m / 2) - (u * a + (d = g / 2) * o) + _) + ", Dy=" + (d - (u * l + d * h) + x) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(O, v) : c.filter = v + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (y && -1 === v.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !y) { var b, S, P, E = p < 8 ? 1 : -1; for (u = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (o < 0 ? -o : o) * g)) / 2 + _), r.ieOffsetY = Math.round((g - ((h < 0 ? -h : h) * g + (l < 0 ? -l : l) * m)) / 2 + x), Tt = 0; Tt < 4; Tt++) P = (i = -1 !== (b = f[S = at[Tt]]).indexOf("px") ? parseFloat(b) : et(this.t, S, parseFloat(b), b.replace(w, "")) || 0) !== r[S] ? Tt < 2 ? -r.ieOffsetX : -r.ieOffsetY : Tt < 2 ? u - r.ieOffsetX : d - r.ieOffsetY, c[S] = (r[S] = Math.round(i - P * (0 === Tt || 2 === Tt ? 1 : E))) + "px" }
                }
            },
            Kt = H.set3DTransformRatio = H.setTransformRatio = function(t) {
                var e, i, r, n, s, a, o, l, h, c, u, p, d, m, g, y, v, _, x, b, w = this.data,
                    T = this.t.style,
                    S = w.rotation,
                    P = w.rotationX,
                    E = w.rotationY,
                    k = w.scaleX,
                    A = w.scaleY,
                    C = w.scaleZ,
                    M = w.x,
                    D = w.y,
                    F = w.z,
                    O = w.svg,
                    I = w.perspective,
                    R = w.force3D,
                    N = w.skewY,
                    B = w.skewX;
                if (N && (B += N, S += N), !((1 !== t && 0 !== t || "auto" !== R || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && R || F || I || E || P || 1 !== C) || kt && O || !Lt) S || B || O ? (S *= L, b = B * L, 1e5, i = Math.cos(S) * k, s = Math.sin(S) * k, r = Math.sin(S - b) * -A, a = Math.cos(S - b) * A, b && "simple" === w.skewType && (e = Math.tan(b - N * L), r *= e = Math.sqrt(1 + e * e), a *= e, N && (e = Math.tan(N * L), i *= e = Math.sqrt(1 + e * e), s *= e)), O && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset, D += w.yOrigin - (w.xOrigin * s + w.yOrigin * a) + w.yOffset, kt && (w.xPercent || w.yPercent) && (g = this.t.getBBox(), M += .01 * w.xPercent * g.width, D += .01 * w.yPercent * g.height), M < (g = 1e-6) && M > -g && (M = 0), D < g && D > -g && (D = 0)), x = (1e5 * i | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + M + "," + D + ")", O && kt ? this.t.setAttribute("transform", "matrix(" + x) : T[Ot] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + x) : T[Ot] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + A + "," + M + "," + D + ")";
                else {
                    if (f && (k < (g = 1e-4) && k > -g && (k = C = 2e-5), A < g && A > -g && (A = C = 2e-5), !I || w.z || w.rotationX || w.rotationY || (I = 0)), S || B) S *= L, y = i = Math.cos(S), v = s = Math.sin(S), B && (S -= B * L, y = Math.cos(S), v = Math.sin(S), "simple" === w.skewType && (e = Math.tan((B - N) * L), y *= e = Math.sqrt(1 + e * e), v *= e, w.skewY && (e = Math.tan(N * L), i *= e = Math.sqrt(1 + e * e), s *= e))), r = -v, a = y;
                    else {
                        if (!(E || P || 1 !== C || I || O)) return void(T[Ot] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + D + "px," + F + "px)" + (1 !== k || 1 !== A ? " scale(" + k + "," + A + ")" : ""));
                        i = a = 1, r = s = 0
                    }
                    c = 1, n = o = l = h = u = p = 0, d = I ? -1 / I : 0, m = w.zOrigin, g = 1e-6, ",", "0", (S = E * L) && (y = Math.cos(S), l = -(v = Math.sin(S)), u = d * -v, n = i * v, o = s * v, c = y, d *= y, i *= y, s *= y), (S = P * L) && (e = r * (y = Math.cos(S)) + n * (v = Math.sin(S)), _ = a * y + o * v, h = c * v, p = d * v, n = r * -v + n * y, o = a * -v + o * y, c *= y, d *= y, r = e, a = _), 1 !== C && (n *= C, o *= C, c *= C, d *= C), 1 !== A && (r *= A, a *= A, h *= A, p *= A), 1 !== k && (i *= k, s *= k, l *= k, u *= k), (m || O) && (m && (M += n * -m, D += o * -m, F += c * -m + m), O && (M += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset, D += w.yOrigin - (w.xOrigin * s + w.yOrigin * a) + w.yOffset), M < g && M > -g && (M = "0"), D < g && D > -g && (D = "0"), F < g && F > -g && (F = 0)), x = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < g && i > -g ? "0" : i) + "," + (s < g && s > -g ? "0" : s) + "," + (l < g && l > -g ? "0" : l), x += "," + (u < g && u > -g ? "0" : u) + "," + (r < g && r > -g ? "0" : r) + "," + (a < g && a > -g ? "0" : a), P || E || 1 !== C ? (x += "," + (h < g && h > -g ? "0" : h) + "," + (p < g && p > -g ? "0" : p) + "," + (n < g && n > -g ? "0" : n), x += "," + (o < g && o > -g ? "0" : o) + "," + (c < g && c > -g ? "0" : c) + "," + (d < g && d > -g ? "0" : d) + ",") : x += ",0,0,0,0,1,0,", x += M + "," + D + "," + F + "," + (I ? 1 + -F / I : 1) + ")", T[Ot] = x
                }
            };
        (o = Nt.prototype).x = o.y = o.z = o.skewX = o.skewY = o.rotation = o.rotationX = o.rotationY = o.zOrigin = o.xPercent = o.yPercent = o.xOffset = o.yOffset = 0, o.scaleX = o.scaleY = o.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, r, s, a, o, l) {
                if (s._lastParsedTransform === l) return a;
                s._lastParsedTransform = l;
                var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                h && (l.scale = h(m, t));
                var c, f, u, p, g, y, v, _, x, b = t._gsTransform,
                    w = t.style,
                    T = Ft.length,
                    S = l,
                    P = {},
                    E = Wt(t, i, !0, S.parseTransform),
                    k = S.transform && ("function" == typeof S.transform ? S.transform(m, d) : S.transform);
                if (E.skewType = S.skewType || E.skewType || n.defaultSkewType, s._transform = E, "rotationZ" in S && (S.rotation = S.rotationZ), k && "string" == typeof k && Ot)(f = G.style)[Ot] = k, f.display = "block", f.position = "absolute", -1 !== k.indexOf("%") && (f.width = tt(t, "width"), f.height = tt(t, "height")), z.body.appendChild(G), c = Wt(G, null, !1), "simple" === E.skewType && (c.scaleY *= Math.cos(c.skewX * L)), E.svg && (y = E.xOrigin, v = E.yOrigin, c.x -= E.xOffset, c.y -= E.yOffset, (S.transformOrigin || S.svgOrigin) && (k = {}, Gt(t, lt(S.transformOrigin), k, S.svgOrigin, S.smoothOrigin, !0), y = k.xOrigin, v = k.yOrigin, c.x -= k.xOffset - E.xOffset, c.y -= k.yOffset - E.yOffset), (y || v) && (_ = Yt(G, !0), c.x -= y - (y * _[0] + v * _[2]), c.y -= v - (y * _[1] + v * _[3]))), z.body.removeChild(G), c.perspective || (c.perspective = E.perspective), null != S.xPercent && (c.xPercent = ct(S.xPercent, E.xPercent)), null != S.yPercent && (c.yPercent = ct(S.yPercent, E.yPercent));
                else if ("object" == typeof S) {
                    if (c = { scaleX: ct(null != S.scaleX ? S.scaleX : S.scale, E.scaleX), scaleY: ct(null != S.scaleY ? S.scaleY : S.scale, E.scaleY), scaleZ: ct(S.scaleZ, E.scaleZ), x: ct(S.x, E.x), y: ct(S.y, E.y), z: ct(S.z, E.z), xPercent: ct(S.xPercent, E.xPercent), yPercent: ct(S.yPercent, E.yPercent), perspective: ct(S.transformPerspective, E.perspective) }, null != (g = S.directionalRotation))
                        if ("object" == typeof g)
                            for (f in g) S[f] = g[f];
                        else S.rotation = g;
                        "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0, c.xPercent = ct(S.x, E.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0, c.yPercent = ct(S.y, E.yPercent)), c.rotation = ft("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : E.rotation, E.rotation, "rotation", P), Lt && (c.rotationX = ft("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", P), c.rotationY = ft("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", P)), c.skewX = ft(S.skewX, E.skewX), c.skewY = ft(S.skewY, E.skewY)
                }
                for (Lt && null != S.force3D && (E.force3D = S.force3D, p = !0), (u = E.force3D || E.z || E.rotationX || E.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == S.scale || (c.scaleZ = 1); --T > -1;)((k = c[x = Ft[T]] - E[x]) > 1e-6 || k < -1e-6 || null != S[x] || null != B[x]) && (p = !0, a = new xt(E, x, E[x], k, a), x in P && (a.e = P[x]), a.xs0 = 0, a.plugin = o, s._overwriteProps.push(a.n));
                return k = "function" == typeof S.transformOrigin ? S.transformOrigin(m, d) : S.transformOrigin, E.svg && (k || S.svgOrigin) && (y = E.xOffset, v = E.yOffset, Gt(t, lt(k), c, S.svgOrigin, S.smoothOrigin), a = bt(E, "xOrigin", (b ? E : c).xOrigin, c.xOrigin, a, "transformOrigin"), a = bt(E, "yOrigin", (b ? E : c).yOrigin, c.yOrigin, a, "transformOrigin"), y === E.xOffset && v === E.yOffset || (a = bt(E, "xOffset", b ? y : E.xOffset, E.xOffset, a, "transformOrigin"), a = bt(E, "yOffset", b ? v : E.yOffset, E.yOffset, a, "transformOrigin")), k = "0px 0px"), (k || Lt && u && E.zOrigin) && (Ot ? (p = !0, x = Rt, k || (k = (k = (tt(t, x, i, !1, "50% 50%") + "").split(" "))[0] + " " + k[1] + " " + E.zOrigin + "px"), k += "", (a = new xt(w, x, 0, 0, a, -1, "transformOrigin")).b = w[x], a.plugin = o, Lt ? (f = E.zOrigin, k = k.split(" "), E.zOrigin = (k.length > 2 ? parseFloat(k[2]) : f) || 0, a.xs0 = a.e = k[0] + " " + (k[1] || "50%") + " 0px", (a = new xt(E, "zOrigin", 0, 0, a, -1, a.n)).b = f, a.xs0 = a.e = E.zOrigin) : a.xs0 = a.e = k) : lt(k + "", E)), p && (s._transformType = E.svg && kt || !u && 3 !== this._transformType ? 2 : 3), h && (l.scale = h), a
            },
            allowFunc: !0,
            prefix: !0
        }), Pt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Pt("clipPath", { defaultValue: "inset(0%)", prefix: !0, multi: !0, formatter: yt("inset(0% 0% 0% 0%)", !1, !0) }), Pt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, r, n, s, a, o) {
                r = this.format(r);
                var l, h, c, f, u, p, d, m, g, y, v, _, x, b, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    P = t.style;
                for (g = parseFloat(t.offsetWidth), y = parseFloat(t.offsetHeight), l = r.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Z(S[h])), -1 !== (u = f = tt(t, S[h], i, !1, "0px")).indexOf(" ") && (f = u.split(" "), u = f[0], f = f[1]), p = c = l[h], d = parseFloat(u), _ = u.substr((d + "").length), (x = "=" === p.charAt(1)) ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = e[n] || _), v !== _ && (b = et(t, "borderLeft", d, _), w = et(t, "borderTop", d, _), "%" === v ? (u = b / g * 100 + "%", f = w / y * 100 + "%") : "em" === v ? (u = b / (T = et(t, "borderLeft", 1, "em")) + "em", f = w / T + "em") : (u = b + "px", f = w + "px"), x && (p = parseFloat(u) + m + v, c = parseFloat(f) + m + v)), a = wt(P, S[h], u + " " + f, p + " " + c, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: yt("0px 0px 0px 0px", !1, !0)
        }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, r, n, s, a) { return wt(t.style, r, this.format(tt(t, r, i, !1, "0px 0px")), this.format(e), !1, "0px", s) }, prefix: !0, formatter: yt("0px 0px", !1, !0) }), Pt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, r, n, s, a) {
                var o, l, h, c, f, u, d = "background-position",
                    m = i || Q(t),
                    g = this.format((m ? p ? m.getPropertyValue(d + "-x") + " " + m.getPropertyValue(d + "-y") : m.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    y = this.format(e);
                if (-1 !== g.indexOf("%") != (-1 !== y.indexOf("%")) && y.split(",").length < 2 && (u = tt(t, "backgroundImage").replace(C, "")) && "none" !== u) {
                    for (o = g.split(" "), l = y.split(" "), q.setAttribute("src", u), h = 2; --h > -1;)(c = -1 !== (g = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - q.width : t.offsetHeight - q.height, o[h] = c ? parseFloat(g) / 100 * f + "px" : parseFloat(g) / f * 100 + "%");
                    g = o.join(" ")
                }
                return this.parseComplex(t.style, g, y, s, a)
            },
            formatter: lt
        }), Pt("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return "co" === (t += "").substr(0, 2) ? t : lt(-1 === t.indexOf(" ") ? t + " " + t : t) } }), Pt("perspective", { defaultValue: "0px", prefix: !0 }), Pt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Pt("transformStyle", { prefix: !0 }), Pt("backfaceVisibility", { prefix: !0 }), Pt("userSelect", { prefix: !0 }), Pt("margin", { parser: vt("marginTop,marginRight,marginBottom,marginLeft") }), Pt("padding", { parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Pt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, r, n, s, a) { var o, l, h; return p < 9 ? (l = t.currentStyle, h = p < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(tt(t, this.p, i, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, s, a) } }), Pt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Pt("autoRound,strictUnits", { parser: function(t, e, i, r, n) { return n } }), Pt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, r, n, s, a) {
                var o = tt(t, "borderTopWidth", i, !1, "0px"),
                    l = this.format(e).split(" "),
                    h = l[0].replace(w, "");
                return "px" !== h && (o = parseFloat(o) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", i, !1, "solid") + " " + tt(t, "borderTopColor", i, !1, "#000")), l.join(" "), s, a)
            },
            color: !0,
            formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0] }
        }), Pt("borderWidth", { parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Pt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, r, n, s) {
                var a = t.style,
                    o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new xt(a, o, 0, 0, n, -1, i, !1, 0, a[o], e)
            }
        });
        var $t = function(t) {
            var e, i = this.t,
                r = i.filter || tt(this.data, "filter") || "",
                n = this.s + this.c * t | 0;
            100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = r.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(T, "opacity=" + n))
        };
        Pt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, r, n, s, a) {
                var o = parseFloat(tt(t, "opacity", i, !1, "1")),
                    l = t.style,
                    h = "autoAlpha" === r;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === tt(t, "visibility", i) && 0 !== e && (o = 0), Y ? s = new xt(l, "opacity", o, e - o, s) : ((s = new xt(l, "opacity", 100 * o, 100 * (e - o), s)).xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = a, s.setRatio = $t), h && ((s = new xt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(r)), s
            }
        });
        var Zt = function(t, e) { e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e)) },
            Jt = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Zt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        Pt("className", {
            parser: function(e, r, n, s, a, o, l) {
                var h, c, f, u, p, d = e.getAttribute("class") || "",
                    m = e.style.cssText;
                if ((a = s._classNamePT = new xt(e, n, 0, 0, a, 2)).setRatio = Jt, a.pr = -11, t = !0, a.b = d, c = rt(e, i), f = e._gsClassPT) {
                    for (u = {}, p = f.data; p;) u[p.p] = 1, p = p._next;
                    f.setRatio(1)
                }
                return e._gsClassPT = a, a.e = "=" !== r.charAt(1) ? r : d.replace(new RegExp("(?:\\s|^)" + r.substr(2) + "(?![\\w-])"), "") + ("+" === r.charAt(0) ? " " + r.substr(2) : ""), e.setAttribute("class", a.e), h = nt(e, c, rt(e), l, u), e.setAttribute("class", d), a.data = h.firstMPT, e.style.cssText !== m && (e.style.cssText = m), a = a.xfirst = s.parse(e, h.difs, a, o)
            }
        });
        var Qt = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, r, n, s, o = this.t.style,
                    l = a.transform.parse;
                if ("all" === this.e) o.cssText = "", n = !0;
                else
                    for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1;) i = e[r], a[i] && (a[i].parse === l ? n = !0 : i = "transformOrigin" === i ? Rt : a[i].p), Zt(o, i);
                n && (Zt(o, Ot), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (Pt("clearProps", { parser: function(e, i, r, n, s) { return (s = new xt(e, r, 0, 0, s, 2)).setRatio = Qt, s.e = i, s.pr = -10, s.data = n._tween, t = !0, s } }), o = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = o.length; Tt--;) Et(o[Tt]);
        (o = n.prototype)._firstPT = o._lastParsedTransform = o._transform = null, o._onInitTween = function(s, o, f, p) {
            if (!s.nodeType) return !1;
            this._target = d = s, this._tween = f, this._vars = o, m = p, l = o.autoRound, t = !1, e = o.suffixMap || n.suffixMap, i = Q(s), r = this._overwriteProps;
            var g, y, v, _, x, b, w, T, P, E = s.style;
            if (h && "" === E.zIndex && ("auto" !== (g = tt(s, "zIndex", i)) && "" !== g || this._addLazySet(E, "zIndex", 0)), "string" == typeof o && (_ = E.cssText, g = rt(s, i), E.cssText = _ + ";" + o, g = nt(s, g, rt(s)).difs, !Y && S.test(o) && (g.opacity = parseFloat(RegExp.$1)), o = g, E.cssText = _), o.className ? this._firstPT = y = a.className.parse(s, o.className, "className", this, null, null, o) : this._firstPT = y = this.parse(s, o, null), this._transformType) {
                for (P = 3 === this._transformType, Ot ? c && (h = !0, "" === E.zIndex && ("auto" !== (w = tt(s, "zIndex", i)) && "" !== w || this._addLazySet(E, "zIndex", 0)), u && this._addLazySet(E, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : E.zoom = 1, v = y; v && v._next;) v = v._next;
                T = new xt(s, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = Ot ? Kt : Ut, T.data = this._transform || Wt(s, i, !0), T.tween = f, T.pr = -1, r.pop()
            }
            if (t) {
                for (; y;) {
                    for (b = y._next, v = _; v && v.pr > y.pr;) v = v._next;
                    (y._prev = v ? v._prev : x) ? y._prev._next = y: _ = y, (y._next = v) ? v._prev = y : x = y, y = b
                }
                this._firstPT = _
            }
            return !0
        }, o.parse = function(t, r, n, s) {
            var o, h, c, f, u, p, g, y, v, _, x = t.style;
            for (o in r) {
                if (p = r[o], h = a[o], "function" != typeof p || h && h.allowFunc || (p = p(m, d)), h) n = h.parse(t, p, o, this, n, s, r);
                else {
                    if ("--" === o.substr(0, 2)) { this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", Q(t).getPropertyValue(o) + "", p + "", o, !1, o); continue }
                    u = tt(t, o, i) + "", v = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && E.test(p) ? (v || (p = ((p = dt(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = wt(x, o, u, p, !0, "transparent", n, 0, s)) : v && R.test(p) ? n = wt(x, o, u, p, !0, null, n, 0, s) : (g = (c = parseFloat(u)) || 0 === c ? u.substr((c + "").length) : "", "" !== u && "auto" !== u || ("width" === o || "height" === o ? (c = ot(t, o, i), g = "px") : "left" === o || "top" === o ? (c = it(t, o, i), g = "px") : (c = "opacity" !== o ? 0 : 1, g = "")), (_ = v && "=" === p.charAt(1)) ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), y = p.replace(w, "")) : (f = parseFloat(p), y = v ? p.replace(w, "") : ""), "" === y && (y = o in e ? e[o] : g), p = f || 0 === f ? (_ ? f + c : f) + y : r[o], g !== y && ("" === y && "lineHeight" !== o || (f || 0 === f) && c && (c = et(t, o, c, g), "%" === y ? (c /= et(t, o, 100, "%") / 100, !0 !== r.strictUnits && (u = c + "%")) : "em" === y || "rem" === y || "vw" === y || "vh" === y ? c /= et(t, o, 1, y) : "px" !== y && (f = et(t, o, f, y), y = "px"), _ && (f || 0 === f) && (p = f + c + y))), _ && (f += c), !c && 0 !== c || !f && 0 !== f ? void 0 !== x[o] && (p || p + "" != "NaN" && null != p) ? (n = new xt(x, o, f || c || 0, 0, n, -1, o, !1, 0, u, p)).xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : u : U("invalid " + o + " tween value: " + r[o]) : (n = new xt(x, o, c, f - c, n, 0, o, !1 !== l && ("px" === y || "zIndex" === o), 0, u, p)).xs0 = y)
                }
                s && n && !n.plugin && (n.plugin = s)
            }
            return n
        }, o.setRatio = function(t) {
            var e, i, r, n = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; n;) {
                        if (e = n.c * t + n.s, n.r ? e = n.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), n.type)
                            if (1 === n.type)
                                if (2 === (r = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                        else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                        else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                        else {
                            for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                            n.t[n.p] = i
                        } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                        else n.t[n.p] = e + n.xs0;
                        n = n._next
                    } else
                        for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                else
                    for (; n;) {
                        if (2 !== n.type)
                            if (n.r && -1 !== n.type)
                                if (e = n.r(n.s + n.c), n.type) {
                                    if (1 === n.type) {
                                        for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                        n.t[n.p] = i
                                    }
                                } else n.t[n.p] = e + n.xs0;
                        else n.t[n.p] = n.e;
                        else n.setRatio(t);
                        n = n._next
                    }
        }, o._enableTransforms = function(t) { this._transform = this._transform || Wt(this._target, i, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3 };
        var te = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
        o._addLazySet = function(t, e, i) {
            var r = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
            r.e = i, r.setRatio = te, r.data = this
        }, o._linkCSSP = function(t, e, i, r) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, o._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next }, o._kill = function(t) {
            var e, i, r, n = t;
            if (t.autoAlpha || t.alpha) {
                for (i in n = {}, t) n[i] = t[i];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            for (t.className && (e = this._classNamePT) && ((r = e.xfirst) && r._prev ? this._linkCSSP(r._prev, e._next, r._prev._prev) : r === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, r._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
            return _.f.prototype._kill.call(this, n)
        };
        var ee = function(t, e, i) {
            var r, n, s, a;
            if (t.slice)
                for (n = t.length; --n > -1;) ee(t[n], e, i);
            else
                for (n = (r = t.childNodes).length; --n > -1;) a = (s = r[n]).type, s.style && (e.push(rt(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || ee(s, e, i)
        };
        return n.cascadeTo = function(t, e, i) {
            var r, n, s, a, o = _.h.to(t, e, i),
                l = [o],
                h = [],
                c = [],
                f = [],
                u = _.h._internals.reservedProps;
            for (t = o._targets || o.target, ee(t, h, f), o.render(e, !0, !0), ee(t, c), o.render(0, !0, !0), o._enabled(!0), r = f.length; --r > -1;)
                if ((n = nt(f[r], h[r], c[r])).firstMPT) {
                    for (s in n = n.difs, i) u[s] && (n[s] = i[s]);
                    for (s in a = {}, n) a[s] = h[r][s];
                    l.push(_.h.fromTo(f[r], e, a, n))
                }
            return l
        }, _.f.activate([n]), n
    }, !0);
    var T = _.i.CSSPlugin,
        S = _.g._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(t, e, i, r) { var n, s; if ("function" != typeof t.setAttribute) return !1; for (n in e) "function" == typeof(s = e[n]) && (s = s(r, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", s + "", n, !1, n), this._overwriteProps.push(n); return !0 } }),
        P = _.g._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }),
        E = function(t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function(i) { return (Math.round(i / t) * t * e | 0) / e } },
        k = function(t, e) { for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next },
        A = P.prototype;
    A._onInitAllProps = function() {
        var t, e, i, r, n = this._tween,
            s = n.vars.roundProps,
            a = {},
            o = n._propLookup.roundProps;
        if ("object" != typeof s || s.push)
            for ("string" == typeof s && (s = s.split(",")), i = s.length; --i > -1;) a[s[i]] = Math.round;
        else
            for (r in s) a[r] = E(s[r]);
        for (r in a)
            for (t = n._firstPT; t;) e = t._next, t.pg ? t.t._mod(a) : t.n === r && (2 === t.f && t.t ? k(t.t._firstPT, a[r]) : (this._add(t.t, r, t.s, t.c, a[r]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : n._firstPT === t && (n._firstPT = e), t._next = t._prev = null, n._propLookup[r] = o)), t = e;
        return !1
    }, A._add = function(t, e, i, r, n) { this._addTween(t, e, i, i + r, e, n || Math.round), this._overwriteProps.push(e) };
    var C = _.g._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(t, e, i, r) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var n, s, a, o, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360; for (n in e) "useRadians" !== n && ("function" == typeof(o = e[n]) && (o = o(r, t)), s = (h = (o + "").split("_"))[0], a = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), l = (o = this.finals[n] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - a, h.length && (-1 !== (s = h.join("_")).indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, n, a, a + l, n), this._overwriteProps.push(n))); return !0 },
        set: function(t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    });
    C._autoCSS = !0;
    var M = 180 / Math.PI,
        D = [],
        F = [],
        O = [],
        I = {},
        R = _.g._gsDefine.globals,
        L = function(t, e, i, r) { i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t },
        N = function(t, e, i, r) {
            var n = { a: t },
                s = {},
                a = {},
                o = { c: r },
                l = (t + e) / 2,
                h = (e + i) / 2,
                c = (i + r) / 2,
                f = (l + h) / 2,
                u = (h + c) / 2,
                p = (u - f) / 8;
            return n.b = l + (t - l) / 4, s.b = f + p, n.c = s.a = (n.b + s.b) / 2, s.c = a.a = (f + u) / 2, a.b = u - p, o.b = c + (r - c) / 4, a.c = o.a = (a.b + o.b) / 2, [n, s, a, o]
        },
        B = function(t, e, i, r, n) {
            var s, a, o, l, h, c, f, u, p, d, m, g, y, v = t.length - 1,
                _ = 0,
                x = t[0].a;
            for (s = 0; s < v; s++) a = (h = t[_]).a, o = h.d, l = t[_ + 1].d, n ? (m = D[s], y = ((g = F[s]) + m) * e * .25 / (r ? .5 : O[s] || .5), u = o - ((c = o - (o - a) * (r ? .5 * e : 0 !== m ? y / m : 0)) + (((f = o + (l - o) * (r ? .5 * e : 0 !== g ? y / g : 0)) - c) * (3 * m / (m + g) + .5) / 4 || 0))) : u = o - ((c = o - (o - a) * e * .5) + (f = o + (l - o) * e * .5)) / 2, c += u, f += u, h.c = p = c, h.b = 0 !== s ? x : x = h.a + .6 * (h.c - h.a), h.da = o - a, h.ca = p - a, h.ba = x - a, i ? (d = N(a, x, p, o), t.splice(_, 1, d[0], d[1], d[2], d[3]), _ += 4) : _++, x = f;
            (h = t[_]).b = x, h.c = x + .4 * (h.d - x), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = x - h.a, i && (d = N(h.a, x, h.c, h.d), t.splice(_, 1, d[0], d[1], d[2], d[3]))
        },
        V = function(t, e, i, r) {
            var n, s, a, o, l, h, c = [];
            if (r)
                for (s = (t = [r].concat(t)).length; --s > -1;) "string" == typeof(h = t[s][e]) && "=" === h.charAt(1) && (t[s][e] = r[e] + Number(h.charAt(0) + h.substr(2)));
            if ((n = t.length - 2) < 0) return c[0] = new L(t[0][e], 0, 0, t[0][e]), c;
            for (s = 0; s < n; s++) a = t[s][e], o = t[s + 1][e], c[s] = new L(a, 0, 0, o), i && (l = t[s + 2][e], D[s] = (D[s] || 0) + (o - a) * (o - a), F[s] = (F[s] || 0) + (l - o) * (l - o));
            return c[s] = new L(t[s][e], 0, 0, t[s + 1][e]), c
        },
        z = function(t, e, i, r, n, s) {
            var a, o, l, h, c, f, u, p, d = {},
                m = [],
                g = s || t[0];
            for (o in n = "string" == typeof n ? "," + n + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(o);
            if (t.length > 1) {
                for (p = t[t.length - 1], u = !0, a = m.length; --a > -1;)
                    if (o = m[a], Math.abs(g[o] - p[o]) > .05) { u = !1; break }
                u && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
            }
            for (D.length = F.length = O.length = 0, a = m.length; --a > -1;) o = m[a], I[o] = -1 !== n.indexOf("," + o + ","), d[o] = V(t, o, I[o], s);
            for (a = D.length; --a > -1;) D[a] = Math.sqrt(D[a]), F[a] = Math.sqrt(F[a]);
            if (!r) {
                for (a = m.length; --a > -1;)
                    if (I[o])
                        for (f = (l = d[m[a]]).length - 1, h = 0; h < f; h++) c = l[h + 1].da / F[h] + l[h].da / D[h] || 0, O[h] = (O[h] || 0) + c * c;
                for (a = O.length; --a > -1;) O[a] = Math.sqrt(O[a])
            }
            for (a = m.length, h = i ? 4 : 1; --a > -1;) l = d[o = m[a]], B(l, e, i, r, I[o]), u && (l.splice(0, h), l.splice(l.length - h, h));
            return d
        },
        j = function(t, e, i) {
            for (var r, n, s, a, o, l, h, c, f, u, p, d = 1 / i, m = t.length; --m > -1;)
                for (s = (u = t[m]).a, a = u.d - s, o = u.c - s, l = u.b - s, r = n = 0, c = 1; c <= i; c++) r = n - (n = ((h = d * c) * h * a + 3 * (f = 1 - h) * (h * o + f * l)) * h), e[p = m * i + c - 1] = (e[p] || 0) + r * r
        },
        G = _.g._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.9",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var r, n, s, a, o, l = e.values || [],
                    h = {},
                    c = l[0],
                    f = e.autoRotate || i.vars.orientToBezier;
                for (r in this._autoRotate = f ? f instanceof Array ? f : [
                        ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                    ] : null, c) this._props.push(r);
                for (s = this._props.length; --s > -1;) r = this._props[s], this._overwriteProps.push(r), n = this._func[r] = "function" == typeof t[r], h[r] = n ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), o || h[r] !== l[0][r] && (o = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? z(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function(t, e, i) {
                        var r, n, s, a, o, l, h, c, f, u, p, d = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            y = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (f in t[0]) y.push(f);
                        for (l = y.length; --l > -1;) {
                            for (d[f = y[l]] = o = [], u = 0, c = t.length, h = 0; h < c; h++) r = null == i ? t[h][f] : "string" == typeof(p = t[h][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && h > 1 && h < c - 1 && (o[u++] = (r + o[u - 2]) / 2), o[u++] = r;
                            for (c = u - m + 1, u = 0, h = 0; h < c; h += m) r = o[h], n = o[h + 1], s = o[h + 2], a = 2 === m ? 0 : o[h + 3], o[u++] = p = 3 === m ? new L(r, n, s, a) : new L(r, (2 * n + r) / 3, (2 * n + s) / 3, s);
                            o.length = u
                        }
                        return d
                    }(l, e.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                    var u = function(t, e) {
                        var i, r, n, s, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            c = (e = e >> 0 || 6) - 1,
                            f = [],
                            u = [];
                        for (i in t) j(t[i], a, e);
                        for (n = a.length, r = 0; r < n; r++) l += Math.sqrt(a[r]), u[s = r % e] = l, s === c && (h += l, f[s = r / e >> 0] = u, o[s] = h, l = 0, u = []);
                        return { length: h, lengths: o, segments: f }
                    }(this._beziers, this._timeRes);
                    this._length = u.length, this._lengths = u.lengths, this._segments = u.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)
                    for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
                        for (a = 0; a < 3; a++) r = f[s][a], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                        r = f[s][2], this._initialRotations[s] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, r, n, s, a, o, l, h, c, f, u = this._segCount,
                    p = this._func,
                    d = this._target,
                    m = t !== this._startRatio;
                if (this._timeRes) {
                    if (h = this._lengths, c = this._curSeg, f = t * this._length, r = this._li, f > this._l2 && r < u - 1) {
                        for (l = u - 1; r < l && (this._l2 = h[++r]) <= f;);
                        this._l1 = h[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                    } else if (f < this._l1 && r > 0) {
                        for (; r > 0 && (this._l1 = h[--r]) >= f;);
                        0 === r && f < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (e = r, f -= this._l1, r = this._si, f > this._s2 && r < c.length - 1) {
                        for (l = c.length - 1; r < l && (this._s2 = c[++r]) <= f;);
                        this._s1 = c[r - 1], this._si = r
                    } else if (f < this._s1 && r > 0) {
                        for (; r > 0 && (this._s1 = c[--r]) >= f;);
                        0 === r && f < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                    }
                    a = 1 === t ? 1 : (r + (f - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else a = (t - (e = t < 0 ? 0 : t >= 1 ? u - 1 : u * t >> 0) * (1 / u)) * u;
                for (i = 1 - a, r = this._props.length; --r > -1;) n = this._props[r], o = (a * a * (s = this._beziers[n][e]).da + 3 * i * (a * s.ca + i * s.ba)) * a + s.a, this._mod[n] && (o = this._mod[n](o, d)), p[n] ? d[n](o) : d[n] = o;
                if (this._autoRotate) { var g, y, v, _, x, b, w, T = this._autoRotate; for (r = T.length; --r > -1;) n = T[r][2], b = T[r][3] || 0, w = !0 === T[r][4] ? 1 : M, s = this._beziers[T[r][0]], g = this._beziers[T[r][1]], s && g && (s = s[e], g = g[e], y = s.a + (s.b - s.a) * a, y += ((_ = s.b + (s.c - s.b) * a) - y) * a, _ += (s.c + (s.d - s.c) * a - _) * a, v = g.a + (g.b - g.a) * a, v += ((x = g.b + (g.c - g.b) * a) - v) * a, x += (g.c + (g.d - g.c) * a - x) * a, o = m ? Math.atan2(x - v, _ - y) * w + b : this._initialRotations[r], this._mod[n] && (o = this._mod[n](o, d)), p[n] ? d[n](o) : d[n] = o) }
            }
        }),
        q = G.prototype;
    G.bezierThrough = z, G.cubicToQuadratic = N, G._autoCSS = !0, G.quadraticToCubic = function(t, e, i) { return new L(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, G._cssRegister = function() {
        var t = R.CSSPlugin;
        if (t) {
            var e = t._internals,
                i = e._parseToProxy,
                r = e._setPluginRatio,
                n = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function(t, e, s, a, o, l) {
                    e instanceof Array && (e = { values: e }), l = new G;
                    var h, c, f, u = e.values,
                        p = u.length - 1,
                        d = [],
                        m = {};
                    if (p < 0) return o;
                    for (h = 0; h <= p; h++) f = i(t, u[h], a, o, l, p !== h), d[h] = f.end;
                    for (c in e) m[c] = e[c];
                    return m.values = d, (o = new n(t, "bezier", 0, 0, f.pt, 2)).data = f, o.plugin = l, o.setRatio = r, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != f.end.left ? [
                        ["left", "top", "rotation", h, !1]
                    ] : null != f.end.x && [
                        ["x", "y", "rotation", h, !1]
                    ]), m.autoRotate && (a._transform || a._enableTransforms(!1), f.autoRotate = a._target._gsTransform, f.proxy.rotation = f.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(f.proxy, m, a._tween), o
                }
            })
        }
    }, q._mod = function(t) { for (var e, i = this._overwriteProps, r = i.length; --r > -1;)(e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e) }, q._kill = function(t) {
        var e, i, r = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;) r[i] === e && r.splice(i, 1);
        if (r = this._autoRotate)
            for (i = r.length; --i > -1;) t[r[i][2]] && r.splice(i, 1);
        return this._super._kill.call(this, t)
    }, _.g._gsDefine("easing.Back", ["easing.Ease"], function() {
        var t, e, i, r, n = _.g.GreenSockGlobals || _.g,
            s = n.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            l = s._class,
            h = function(t, e) {
                var i = l("easing." + t, function() {}, !0),
                    r = i.prototype = new _.b;
                return r.constructor = i, r.getRatio = e, i
            },
            c = _.b.register || function() {},
            f = function(t, e, i, r, n) { var s = l("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new r }, !0); return c(s, t), s },
            u = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
            p = function(t, e) {
                var i = l("easing." + t, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                    r = i.prototype = new _.b;
                return r.constructor = i, r.getRatio = e, r.config = function(t) { return new i(t) }, i
            },
            d = f("Back", p("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), p("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), p("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
            m = l("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0),
            g = m.prototype = new _.b;
        return g.constructor = m, g.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) { return new m(t, e, i) }, (g = (t = l("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0)).prototype = new _.b).constructor = t, g.getRatio = function(t) { return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, g.config = t.config = function(e, i) { return new t(e, i) }, (g = (e = l("easing.ExpoScaleEase", function(t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i }, !0)).prototype = new _.b).constructor = e, g.getRatio = function(t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, g.config = e.config = function(t, i, r) { return new e(t, i, r) }, (g = (i = l("easing.RoughEase", function(t) {
            for (var e, i, r, n, s, a, o = (t = t || {}).taper || "none", l = [], h = 0, c = 0 | (t.points || 20), f = c, p = !1 !== t.randomize, d = !0 === t.clamp, m = t.template instanceof _.b ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --f > -1;) e = p ? Math.random() : 1 / c * f, i = m ? m.getRatio(e) : e, r = "none" === o ? g : "out" === o ? (n = 1 - e) * n * g : "in" === o ? e * e * g : e < .5 ? (n = 2 * e) * n * .5 * g : (n = 2 * (1 - e)) * n * .5 * g, p ? i += Math.random() * r - .5 * r : f % 2 ? i += .5 * r : i -= .5 * r, d && (i > 1 ? i = 1 : i < 0 && (i = 0)), l[h++] = { x: e, y: i };
            for (l.sort(function(t, e) { return t.x - e.x }), a = new u(1, 1, null), f = c; --f > -1;) s = l[f], a = new u(s.x, s.y, a);
            this._prev = new u(0, 0, 0 !== a.t ? a : a.next)
        }, !0)).prototype = new _.b).constructor = i, g.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, g.config = function(t) { return new i(t) }, i.ease = new i, f("Bounce", h("BounceOut", function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), h("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), h("BounceInOut", function(t) { var e = t < .5; return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), f("Circ", h("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), h("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), h("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), f("Elastic", (r = function(t, e, i) {
            var r = l("easing." + t, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2 }, !0),
                n = r.prototype = new _.b;
            return n.constructor = r, n.getRatio = e, n.config = function(t, e) { return new r(t, e) }, r
        })("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), r("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), r("ElasticInOut", function(t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), f("Expo", h("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), h("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), h("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), f("Sine", h("SineOut", function(t) { return Math.sin(t * o) }), h("SineIn", function(t) { return 1 - Math.cos(t * o) }), h("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), l("easing.EaseLookup", { find: function(t) { return _.b.map[t] } }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), d
    }, !0);
    var H = _.i.Back,
        X = _.i.Elastic,
        Y = _.i.Bounce,
        W = _.i.RoughEase,
        U = _.i.SlowMo,
        K = _.i.SteppedEase,
        $ = _.i.Circ,
        Z = _.i.Expo,
        J = _.i.Sine,
        Q = _.i.ExpoScaleEase,
        tt = w;

    function et(t) {
        var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = document.querySelector("body");
        e = se ? se.vars.current : (window.pageYOffset || r.scrollTop) - (r.clientTop || 0);
        for (var n = t.offsetTop + i, s = t.offsetHeight; t.offsetParent;) n += (t = t.offsetParent).offsetTop;
        return n < e + window.innerHeight && n + s > e
    }

    function it(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function rt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    tt._autoActivated = [x, b, T, S, G, P, C, H, X, Y, W, U, K, $, Z, J, Q];
    var nt = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.set = function() { it(e.elements).forEach(function(t) { it(t.querySelectorAll("[data-src]")).forEach(function(t) { t.style.opacity = 0 }) }) }, this.scroll = function() {
                e.rAF = void 0, it(e.elements).forEach(function(t) {
                    et(t) && void 0 === t.loaded && (t.loaded = !0, it(t.querySelectorAll("[data-src]")).forEach(function(t) {
                        var e = t.dataset.src;
                        t.src = e, a()(t, function() { tt.to(t, 1, { opacity: 1 }), se && se.resize() })
                    }))
                }), e.init()
            }, this.elements = document.querySelectorAll(".js__load"), this.rAF = void 0, this.set(), this.init()
        }
        var e, i, r;
        return e = t, (i = [{ key: "init", value: function() { this.rAF || (this.rAF = window.requestAnimationFrame(this.scroll)) } }]) && rt(e.prototype, i), r && rt(e, r), t
    }();
    i(97);

    function st(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function at(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var ot = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.addSlider = function() {
                var t = e.dom.slider.offsetWidth,
                    i = e.dom.slider.offsetWidth * e.dom.total;
                e.dom.container.style.width = i + "px", st(e.dom.slides).forEach(function(e) { e.style.width = t + "px" })
            }, this.resize = function() { e.addSlider() }, this.setParallax = function() {
                var t = e.dom.slides[e.current + 1],
                    i = e.dom.slides[e.current - 1],
                    r = new b({ onComplete: function() { r.remove() } }),
                    n = new b({ onComplete: function() { n.remove() } });
                i && r.to(i.querySelector(".slide__text"), e.speed, { x: -200, ease: _.d.easeInOut }, 0).to(i.querySelector(".image__src"), e.speed, { scale: 1.3, ease: _.d.easeInOut }, 0), t && n.to(t.querySelector(".slide__text"), e.speed, { x: 200, ease: _.d.easeInOut }, 0).to(t.querySelector(".image__src"), e.speed, { scale: 1.3, ease: _.d.easeInOut }, 0)
            }, this.setContainer = function() {
                var t = new b({ onComplete: function() { t.remove() } });
                t.to(e.dom.container, e.speed, { x: -e.dom.slider.offsetWidth * e.current, ease: _.d.easeInOut }, 0).to(e.dom.texts, e.speed, { x: 0, ease: _.d.easeInOut }, 0).to(e.dom.images, e.speed, { scale: 1, ease: _.d.easeInOut }, 0)
            }, this.setColor = function() {
                var t = e.dom.slides[e.current].dataset.background,
                    i = new b({ onComplete: function() { i.remove() } });
                i.to(e.background, 1, { backgroundColor: t }, 0)
            }, this.setSlide = function() { e.setColor(), e.setContainer(), e.setParallax() }, this.animateCountOut = function() { tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }) }, this.setCount = function() { e.count.total.innerHTML = e.dom.total, e.count.current.innerHTML = e.current + 1, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.prevSwipe = function() { e.direction = "left", e.current > 0 && (e.current -= 1, e.setSlide(), e.animateCountOut()) }, this.nextSwipe = function() { e.direction = "right", e.current < e.dom.total - 1 && (e.current += 1, e.setSlide(), e.animateCountOut()) }, this.getDirection = function() { e.x < window.innerWidth / 2 ? (e.direction = "left", e.current > 0 && (e.current -= 1, e.setSlide(), e.animateCountOut())) : (e.direction = "right", e.current < e.dom.total - 1 && (e.current += 1, e.setSlide(), e.animateCountOut())) }, this.section = document.querySelector(".s__flexible-content"), this.section && (this.dom = { images: this.section.querySelectorAll(".image__src"), texts: this.section.querySelectorAll(".slide__text"), slides: this.section.querySelectorAll(".slider__slide"), container: this.section.querySelector(".slider__container"), slider: this.section.querySelector(".flexible-content__slider"), total: this.section.querySelector(".slider__container").childElementCount }, this.count = { total: this.section.querySelector(".count__s"), current: this.section.querySelector(".count__l") }, this.x = null, this.speed = 1.5, this.current = 0, this.color = "#ffffff", this.direction = "right", this.background = document.querySelector(".a__background"), this.init())
        }
        var e, i, r;
        return e = t, (i = [{ key: "trackDirection", value: function(t) { this.x = t.pageX, this.x < window.innerWidth / 2 ? "right" === this.direction && (this.direction = "left") : "left" === this.direction && (this.direction = "right") } }, {
            key: "addEvents",
            value: function() {
                var t = this;
                window.addEventListener("resize", this.resize, !1), this.section.addEventListener("mousemove", function(e) { t.trackDirection(e) }), this.section.addEventListener("click", function() { t.getDirection() }), this.section.addEventListener("swiped-right", this.prevSwipe), this.section.addEventListener("swiped-left", this.nextSwipe)
            }
        }, { key: "init", value: function() { this.addSlider(), this.setCount(), this.addEvents(), this.setParallax() } }]) && at(e.prototype, i), r && at(e, r), t
    }();

    function lt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var ht = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setSlides = function() { e.large.slides[e.large.active].style.zIndex = 1, e.small.slides[e.small.active].style.zIndex = 1 }, this.animateCountOut = function() { tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }) }, this.setCount = function() { e.count.total.innerHTML = e.slider.total + 1, e.count.current.innerHTML = e.large.active + 1, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.prevClick = function() { e.direction = "prev", !0 !== e.tweening && (e.interact = !0, e.tweenAnim(), 0 === e.large.prev ? e.large.prev = e.slider.total : e.large.prev -= 1, 0 === e.large.next ? e.large.next = e.slider.total : e.large.next -= 1, 0 === e.large.active ? e.large.active = e.slider.total : e.large.active -= 1, 0 === e.small.prev ? e.small.prev = e.slider.total : e.small.prev -= 1, 0 === e.small.next ? e.small.next = e.slider.total : e.small.next -= 1, 0 === e.small.active ? e.small.active = e.slider.total : e.small.active -= 1, e.animateCountOut()) }, this.nextClick = function() { e.direction = "next", !0 !== e.interact && (e.interact = !0, e.tweenAnim(), e.large.prev < e.slider.total ? e.large.prev += 1 : e.large.prev = 0, e.large.next < e.slider.total ? e.large.next += 1 : e.large.next = 0, e.large.active < e.slider.total ? e.large.active += 1 : e.large.active = 0, e.small.prev < e.slider.total ? e.small.prev += 1 : e.small.prev = 0, e.small.next < e.slider.total ? e.small.next += 1 : e.small.next = 0, e.small.active < e.slider.total ? e.small.active += 1 : e.small.active = 0, e.animateCountOut()) }, this.section = document.querySelector(".s__school-pillars"), this.section && (this.slider = { prev: this.section.querySelector(".slider__prev"), next: this.section.querySelector(".slider__next"), container: this.section.querySelector(".school-pillars__slider"), total: this.section.querySelector(".slider__large").childElementCount - 1 }, this.large = { next: 1, active: 0, prev: this.slider.total, block: this.section.querySelector(".slider__large"), slides: this.section.querySelectorAll(".slider__large .slider__slide") }, this.small = { next: 2, prev: 0, active: 1, block: this.section.querySelector(".slider__small"), slides: this.section.querySelectorAll(".slider__small .slider__slide") }, this.count = { current: this.section.querySelector(".count__l"), total: this.section.querySelector(".count__s") }, this.speed = 1.5, this.interact = !1, this.direction = void 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{
            key: "tweenAnim",
            value: function() {
                var t, e, i, r, n = this;
                "next" === this.direction ? (t = this.large.slides[this.large.next], e = this.small.slides[this.small.next], i = -50, r = 100) : (t = this.large.slides[this.large.prev], e = this.small.slides[this.small.prev], i = 50, r = -100), t.style.zIndex = 2, this.large.slides[this.large.active].style.zIndex = 1, e.style.zIndex = 2, this.small.slides[this.small.active].style.zIndex = 1;
                var s = t.querySelector(".image__src"),
                    a = e.querySelector(".image__src");
                new b({ onComplete: function() { n.interact = !1 } }).set(this.large.slides, { xPercent: r }, 0).set(this.small.slides, { xPercent: r }, 0).set(this.large.slides[this.large.active], { xPercent: 0 }, 0).set(this.small.slides[this.small.active], { xPercent: 0 }, 0).set(s, { scale: 1.5 }, 0).to(s, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).set(a, { scale: 1.5 }, 0).to(a, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).to(t, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.large.slides[this.large.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0).to(e, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.small.slides[this.small.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0)
            }
        }, { key: "addEvents", value: function() { this.slider.prev.addEventListener("click", this.prevClick), this.slider.next.addEventListener("click", this.nextClick), this.slider.container.addEventListener("swiped-right", this.prevClick), this.slider.container.addEventListener("swiped-left", this.nextClick) } }, { key: "init", value: function() { this.addEvents(), this.setSlides(), this.setCount() } }]) && lt(e.prototype, i), r && lt(e, r), t
    }();

    var hhht = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setSlides = function() { e.large.slides[e.large.active].style.zIndex = 1, e.small.slides[e.small.active].style.zIndex = 1 }, this.animateCountOut = function() { tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }) }, this.setCount = function() { e.count.total.innerHTML = e.slider.total + 1, e.count.current.innerHTML = e.large.active + 1, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.prevClick = function() { e.direction = "prev", !0 !== e.tweening && (e.interact = !0, e.tweenAnim(), 0 === e.large.prev ? e.large.prev = e.slider.total : e.large.prev -= 1, 0 === e.large.next ? e.large.next = e.slider.total : e.large.next -= 1, 0 === e.large.active ? e.large.active = e.slider.total : e.large.active -= 1, 0 === e.small.prev ? e.small.prev = e.slider.total : e.small.prev -= 1, 0 === e.small.next ? e.small.next = e.slider.total : e.small.next -= 1, 0 === e.small.active ? e.small.active = e.slider.total : e.small.active -= 1, e.animateCountOut()) }, this.nextClick = function() { e.direction = "next", !0 !== e.interact && (e.interact = !0, e.tweenAnim(), e.large.prev < e.slider.total ? e.large.prev += 1 : e.large.prev = 0, e.large.next < e.slider.total ? e.large.next += 1 : e.large.next = 0, e.large.active < e.slider.total ? e.large.active += 1 : e.large.active = 0, e.small.prev < e.slider.total ? e.small.prev += 1 : e.small.prev = 0, e.small.next < e.slider.total ? e.small.next += 1 : e.small.next = 0, e.small.active < e.slider.total ? e.small.active += 1 : e.small.active = 0, e.animateCountOut()) }, this.section = document.querySelector(".s__school-pillars-2"), this.section && (this.slider = { prev: this.section.querySelector(".slider__prev"), next: this.section.querySelector(".slider__next"), container: this.section.querySelector(".school-pillars__slider-2"), total: this.section.querySelector(".slider__large").childElementCount - 1 }, this.large = { next: 1, active: 0, prev: this.slider.total, block: this.section.querySelector(".slider__large"), slides: this.section.querySelectorAll(".slider__large .slider__slide") }, this.small = { next: 2, prev: 0, active: 1, block: this.section.querySelector(".slider__small"), slides: this.section.querySelectorAll(".slider__small .slider__slide") }, this.count = { current: this.section.querySelector(".count__l"), total: this.section.querySelector(".count__s") }, this.speed = 1.5, this.interact = !1, this.direction = void 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{
            key: "tweenAnim",
            value: function() {
                var t, e, i, r, n = this;
                "next" === this.direction ? (t = this.large.slides[this.large.next], e = this.small.slides[this.small.next], i = -50, r = 100) : (t = this.large.slides[this.large.prev], e = this.small.slides[this.small.prev], i = 50, r = -100), t.style.zIndex = 2, this.large.slides[this.large.active].style.zIndex = 1, e.style.zIndex = 2, this.small.slides[this.small.active].style.zIndex = 1;
                var s = t.querySelector(".image__src"),
                    a = e.querySelector(".image__src");
                new b({ onComplete: function() { n.interact = !1 } }).set(this.large.slides, { xPercent: r }, 0).set(this.small.slides, { xPercent: r }, 0).set(this.large.slides[this.large.active], { xPercent: 0 }, 0).set(this.small.slides[this.small.active], { xPercent: 0 }, 0).set(s, { scale: 1.5 }, 0).to(s, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).set(a, { scale: 1.5 }, 0).to(a, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).to(t, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.large.slides[this.large.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0).to(e, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.small.slides[this.small.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0)
            }
        }, { key: "addEvents", value: function() { this.slider.prev.addEventListener("click", this.prevClick), this.slider.next.addEventListener("click", this.nextClick), this.slider.container.addEventListener("swiped-right", this.prevClick), this.slider.container.addEventListener("swiped-left", this.nextClick) } }, { key: "init", value: function() { this.addEvents(), this.setSlides(), this.setCount() } }]) && lt(e.prototype, i), r && lt(e, r), t
    }();

    var ztt = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setSlides = function() { e.large.slides[e.large.active].style.zIndex = 1, e.small.slides[e.small.active].style.zIndex = 1 }, this.animateCountOut = function() { tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }) }, this.setCount = function() { e.count.total.innerHTML = e.slider.total + 1, e.count.current.innerHTML = e.large.active + 1, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.prevClick = function() { e.direction = "prev", !0 !== e.tweening && (e.interact = !0, e.tweenAnim(), 0 === e.large.prev ? e.large.prev = e.slider.total : e.large.prev -= 1, 0 === e.large.next ? e.large.next = e.slider.total : e.large.next -= 1, 0 === e.large.active ? e.large.active = e.slider.total : e.large.active -= 1, 0 === e.small.prev ? e.small.prev = e.slider.total : e.small.prev -= 1, 0 === e.small.next ? e.small.next = e.slider.total : e.small.next -= 1, 0 === e.small.active ? e.small.active = e.slider.total : e.small.active -= 1, e.animateCountOut()) }, this.nextClick = function() { e.direction = "next", !0 !== e.interact && (e.interact = !0, e.tweenAnim(), e.large.prev < e.slider.total ? e.large.prev += 1 : e.large.prev = 0, e.large.next < e.slider.total ? e.large.next += 1 : e.large.next = 0, e.large.active < e.slider.total ? e.large.active += 1 : e.large.active = 0, e.small.prev < e.slider.total ? e.small.prev += 1 : e.small.prev = 0, e.small.next < e.slider.total ? e.small.next += 1 : e.small.next = 0, e.small.active < e.slider.total ? e.small.active += 1 : e.small.active = 0, e.animateCountOut()) }, this.section = document.querySelector(".s__school-pillars-3"), this.section && (this.slider = { prev: this.section.querySelector(".slider__prev"), next: this.section.querySelector(".slider__next"), container: this.section.querySelector(".school-pillars__slider"), total: this.section.querySelector(".slider__large").childElementCount - 1 }, this.large = { next: 1, active: 0, prev: this.slider.total, block: this.section.querySelector(".slider__large"), slides: this.section.querySelectorAll(".slider__large .slider__slide") }, this.small = { next: 2, prev: 0, active: 1, block: this.section.querySelector(".slider__small"), slides: this.section.querySelectorAll(".slider__small .slider__slide") }, this.count = { current: this.section.querySelector(".count__l"), total: this.section.querySelector(".count__s") }, this.speed = 1.5, this.interact = !1, this.direction = void 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{
            key: "tweenAnim",
            value: function() {
                var t, e, i, r, n = this;
                "next" === this.direction ? (t = this.large.slides[this.large.next], e = this.small.slides[this.small.next], i = -50, r = 100) : (t = this.large.slides[this.large.prev], e = this.small.slides[this.small.prev], i = 50, r = -100), t.style.zIndex = 2, this.large.slides[this.large.active].style.zIndex = 1, e.style.zIndex = 2, this.small.slides[this.small.active].style.zIndex = 1;
                var s = t.querySelector(".image__src"),
                    a = e.querySelector(".image__src");
                new b({ onComplete: function() { n.interact = !1 } }).set(this.large.slides, { xPercent: r }, 0).set(this.small.slides, { xPercent: r }, 0).set(this.large.slides[this.large.active], { xPercent: 0 }, 0).set(this.small.slides[this.small.active], { xPercent: 0 }, 0).set(s, { scale: 1.5 }, 0).to(s, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).set(a, { scale: 1.5 }, 0).to(a, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).to(t, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.large.slides[this.large.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0).to(e, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.small.slides[this.small.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0)
            }
        }, { key: "addEvents", value: function() { this.slider.prev.addEventListener("click", this.prevClick), this.slider.next.addEventListener("click", this.nextClick), this.slider.container.addEventListener("swiped-right", this.prevClick), this.slider.container.addEventListener("swiped-left", this.nextClick) } }, { key: "init", value: function() { this.addEvents(), this.setSlides(), this.setCount() } }]) && lt(e.prototype, i), r && lt(e, r), t
    }();

    var xtt = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setSlides = function() { e.large.slides[e.large.active].style.zIndex = 1, e.small.slides[e.small.active].style.zIndex = 1 }, this.animateCountOut = function() { tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }) }, this.setCount = function() { e.count.total.innerHTML = e.slider.total + 1, e.count.current.innerHTML = e.large.active + 1, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.prevClick = function() { e.direction = "prev", !0 !== e.tweening && (e.interact = !0, e.tweenAnim(), 0 === e.large.prev ? e.large.prev = e.slider.total : e.large.prev -= 1, 0 === e.large.next ? e.large.next = e.slider.total : e.large.next -= 1, 0 === e.large.active ? e.large.active = e.slider.total : e.large.active -= 1, 0 === e.small.prev ? e.small.prev = e.slider.total : e.small.prev -= 1, 0 === e.small.next ? e.small.next = e.slider.total : e.small.next -= 1, 0 === e.small.active ? e.small.active = e.slider.total : e.small.active -= 1, e.animateCountOut()) }, this.nextClick = function() { e.direction = "next", !0 !== e.interact && (e.interact = !0, e.tweenAnim(), e.large.prev < e.slider.total ? e.large.prev += 1 : e.large.prev = 0, e.large.next < e.slider.total ? e.large.next += 1 : e.large.next = 0, e.large.active < e.slider.total ? e.large.active += 1 : e.large.active = 0, e.small.prev < e.slider.total ? e.small.prev += 1 : e.small.prev = 0, e.small.next < e.slider.total ? e.small.next += 1 : e.small.next = 0, e.small.active < e.slider.total ? e.small.active += 1 : e.small.active = 0, e.animateCountOut()) }, this.section = document.querySelector(".s__school-pillars-4"), this.section && (this.slider = { prev: this.section.querySelector(".slider__prev"), next: this.section.querySelector(".slider__next"), container: this.section.querySelector(".school-pillars__slider"), total: this.section.querySelector(".slider__large").childElementCount - 1 }, this.large = { next: 1, active: 0, prev: this.slider.total, block: this.section.querySelector(".slider__large"), slides: this.section.querySelectorAll(".slider__large .slider__slide") }, this.small = { next: 2, prev: 0, active: 1, block: this.section.querySelector(".slider__small"), slides: this.section.querySelectorAll(".slider__small .slider__slide") }, this.count = { current: this.section.querySelector(".count__l"), total: this.section.querySelector(".count__s") }, this.speed = 1.5, this.interact = !1, this.direction = void 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{
            key: "tweenAnim",
            value: function() {
                var t, e, i, r, n = this;
                "next" === this.direction ? (t = this.large.slides[this.large.next], e = this.small.slides[this.small.next], i = -50, r = 100) : (t = this.large.slides[this.large.prev], e = this.small.slides[this.small.prev], i = 50, r = -100), t.style.zIndex = 2, this.large.slides[this.large.active].style.zIndex = 1, e.style.zIndex = 2, this.small.slides[this.small.active].style.zIndex = 1;
                var s = t.querySelector(".image__src"),
                    a = e.querySelector(".image__src");
                new b({ onComplete: function() { n.interact = !1 } }).set(this.large.slides, { xPercent: r }, 0).set(this.small.slides, { xPercent: r }, 0).set(this.large.slides[this.large.active], { xPercent: 0 }, 0).set(this.small.slides[this.small.active], { xPercent: 0 }, 0).set(s, { scale: 1.5 }, 0).to(s, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).set(a, { scale: 1.5 }, 0).to(a, this.speed, { scale: 1, clearProps: "all", ease: _.d.easeInOut }, 0).to(t, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.large.slides[this.large.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0).to(e, this.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(this.small.slides[this.small.active], this.speed, { xPercent: i, ease: _.d.easeInOut }, 0)
            }
        }, { key: "addEvents", value: function() { this.slider.prev.addEventListener("click", this.prevClick), this.slider.next.addEventListener("click", this.nextClick), this.slider.container.addEventListener("swiped-right", this.prevClick), this.slider.container.addEventListener("swiped-left", this.nextClick) } }, { key: "init", value: function() { this.addEvents(), this.setSlides(), this.setCount() } }]) && lt(e.prototype, i), r && lt(e, r), t
    }();

    function ct(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var ft = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.acceptHandler = function() { e.state.accepted = !0, !0 === e.state.accepted && e.dom.section.remove() }, this.closeHandler = function() { e.state.accepted = !1, e.dom.section.remove() }, this.section = document.querySelector(".a__notification"), this.section && (this.dom = { section: this.section, close: this.section.querySelector(".button__c"), accept: this.section.querySelector(".button__b") }, this.state = { accepted: !1 }, this.addEvents()) }
        var e, i, r;
        return e = t, (i = [{
            key: "addEvents",
            value: function() {
                var t = this;
                this.dom.close.addEventListener("click", function() { return t.closeHandler() }), this.dom.accept.addEventListener("click", function() { return t.acceptHandler() })
            }
        }]) && ct(e.prototype, i), r && ct(e, r), t
    }();

    function ut(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function pt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var dt = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setSizes = function() { e.absolute = e.section.offsetTop, e.height = e.section.offsetHeight, e.stickyHeight = e.dom.sticky.clientHeight, e.startSticky = window.innerHeight / 2 - e.stickyHeight / 2, e.endSticky = -(e.height - window.innerHeight) }, this.setCount = function() { e.count.total.innerHTML = e.dom.total, e.count.current.innerHTML = e.current, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.setHeading = function() { e.sticky.heading.innerHTML = e.heading, tt.to(e.sticky.heading, 2, { x: 0, opacity: 1, ease: _.d.easeOut }) }, this.setSticky = function() { e.dom.sticky.style.transform = "translateY(" + (e.scrollY - e.absolute + e.startSticky) + "px)" }, this.render = function() { e.offsetTop = e.section.getBoundingClientRect().top, e.scrollY = se.vars.current, e.offsetTop <= e.startSticky && e.offsetTop >= e.endSticky && (e.setSticky(), ut(e.dom.chapters).forEach(function(t, i) { et(t, i) ? t.closest(".blocks__block").classList.contains("is__inview") || (t.closest(".blocks__block").classList.add("is__inview"), e.current = i + 1, e.heading = document.querySelector(".is__inview .heading__l").innerHTML, tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }), tt.set(e.sticky.heading, { x: 25, opacity: 0 }), e.setHeading()) : t.closest(".blocks__block").classList.remove("is__inview") })), window.requestAnimationFrame(e.render) }, this.addEvents = function() { window.addEventListener("resize", e.setSizes) }, this.section = document.querySelector(".s__brand-values"), n.a.isPhone || this.section && (this.dom = { sticky: this.section.querySelector(".brand-values__sticky"), chapters: this.section.querySelectorAll(".blocks__block .chapeau__r"), total: this.section.querySelector(".brand-values__slides").childElementCount }, this.sticky = { heading: this.dom.sticky.querySelector(".heading__xl") }, this.scrollY = 0, this.current = 1, this.absolute = this.section.offsetTop + this.scrollY, this.body = document.querySelector("body"), this.count = { current: this.section.querySelector(".count__l"), total: this.section.querySelector(".count__s") }, a()(document.body, this.init())) }
        var e, i, r;
        return e = t, (i = [{ key: "init", value: function() { this.setSizes(), this.setCount(), this.addEvents(), window.requestAnimationFrame(this.render) } }]) && pt(e.prototype, i), r && pt(e, r), t
    }();

    function mt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function gt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var yt = function() {
            function t() {
                var e = this;
                ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.scroll = function() {
                    e.rAF = void 0, mt(e.colors).forEach(function(t) {
                        var i = t.dataset.color;
                        et(t) && tt.set(e.section, { backgroundColor: i })
                    }), e.init()
                }, this.section = document.querySelector(".a__background"), this.section && (this.colors = document.querySelectorAll('[class*="__color"]'), this.rAF = void 0, this.init())
            }
            var e, i, r;
            return e = t, (i = [{ key: "init", value: function() { this.rAF || (this.rAF = window.requestAnimationFrame(this.scroll)) } }]) && gt(e.prototype, i), r && gt(e, r), t
        }(),
        vt = i(67),
        _t = i.n(vt);
    i(132);

    function xt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var bt = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setDragger = function() {
                for (e.i = 0; e.i < e.children.length; e.i += 1) e.width += e.children[e.i].offsetWidth;
                e.width = e.width + e.margin * e.children.length, e.dragger.style.width = e.width + "px", e.initDragger()
            }, this.initDragger = function() { _t.a.create(e.dragger, { type: "x", cursor: "none", throwProps: !0, zIndexBoost: !1, edgeResistance: .65, bounds: e.section }) }, this.loopRAF = function() { e.RAF = void 0, e.dragger.getBoundingClientRect().top <= window.innerHeight && e.dragger.getBoundingClientRect().top > -e.dragger.clientHeight ? void 0 === e.dragger.inview && (tt.to(e.dragger, 80, { x: -(e.width - window.innerWidth), ease: _.c.easeNone }), e.dragger.inview = !0) : !0 === e.dragger.inview && (tt.set(e.dragger, { x: 0 }), e.dragger.inview = void 0), e.startRAF() }, this.startRAF = function() { e.RAF || (e.RAF = window.requestAnimationFrame(e.loopRAF)) }, this.stopRAF = function() { e.RAF && (window.cancelAnimationFrame(e.RAF), e.RAF = void 0) }, this.init = function() { e.addEvents(), e.setDragger(), e.startRAF() }, this.section = document.querySelector(".s__instagram"), this.section && (this.dragger = document.querySelector(".instagram__dragger"), this.cursor = document.querySelector(".cursor__icon"), window.innerWidth >= 580 ? this.margin = .05556 * window.innerWidth : this.margin = .08 * window.innerWidth, this.children = this.dragger.children, this.width = 0, this.i = void 0, this.RAF = 0, this.init())
        }
        var e, i, r;
        return e = t, (i = [{
            key: "addEvents",
            value: function() {
                var t = this;
                this.section.addEventListener("mouseenter", function() { t.cursor.classList.add("icon__drag") }), this.section.addEventListener("mouseleave", function() { t.cursor.classList.remove("icon__drag") })
            }
        }]) && xt(e.prototype, i), r && xt(e, r), t
    }();

    var btbt = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setDragger = function() {
                for (e.i = 0; e.i < e.children.length; e.i += 1) e.width += e.children[e.i].offsetWidth;
                e.width = e.width + e.margin * e.children.length, e.dragger.style.width = e.width + "px", e.initDragger()
            }, this.initDragger = function() { _t.a.create(e.dragger, { type: "x", cursor: "none", throwProps: !0, zIndexBoost: !1, edgeResistance: .65, bounds: e.section }) }, this.loopRAF = function() { e.RAF = void 0, e.dragger.getBoundingClientRect().top <= window.innerHeight && e.dragger.getBoundingClientRect().top > -e.dragger.clientHeight ? void 0 === e.dragger.inview && (tt.to(e.dragger, 80, { x: -(e.width - window.innerWidth), ease: _.c.easeNone }), e.dragger.inview = !0) : !0 === e.dragger.inview && (tt.set(e.dragger, { x: 0 }), e.dragger.inview = void 0), e.startRAF() }, this.startRAF = function() { e.RAF || (e.RAF = window.requestAnimationFrame(e.loopRAF)) }, this.stopRAF = function() { e.RAF && (window.cancelAnimationFrame(e.RAF), e.RAF = void 0) }, this.init = function() { e.addEvents(), e.setDragger(), e.startRAF() }, this.section = document.querySelector(".s__instagram-2"), this.section && (this.dragger = document.querySelector(".instagram__dragger-2"), this.cursor = document.querySelector(".cursor__icon"), window.innerWidth >= 580 ? this.margin = .05556 * window.innerWidth : this.margin = .08 * window.innerWidth, this.children = this.dragger.children, this.width = 0, this.i = void 0, this.RAF = 0, this.init())
        }
        var e, i, r;
        return e = t, (i = [{
            key: "addEvents",
            value: function() {
                var t = this;
                this.section.addEventListener("mouseenter", function() { t.cursor.classList.add("icon__drag") }), this.section.addEventListener("mouseleave", function() { t.cursor.classList.remove("icon__drag") })
            }
        }]) && xt(e.prototype, i), r && xt(e, r), t
    }();

    function wt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function Tt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var St = function() {
        function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.section = document.querySelectorAll(".s__marquee"), this.section.length && (this.dom = { marquee: document.querySelectorAll(".marquee__r") }, this.init()) }
        var e, i, r;
        return e = t, (i = [{ key: "init", value: function() { wt(this.dom.marquee).forEach(function(t) { tt.to(t, 20, { repeat: -1, xPercent: -50, ease: _.c.easeOut }, 0) }) } }]) && Tt(e.prototype, i), r && Tt(e, r), t
    }();

    function Pt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var Et = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setCount = function() { e.count.total.innerHTML = e.slider.total, e.count.current.innerHTML = e.current + 1, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.setSlides = function() { e.current = e.next, (new b).set(e.slider.slides, { xPercent: 100 }, 0).set(e.slider.images, { scale: 1.5 }).set(e.slider.images[e.current], { scale: 1 }).set(e.slider.slides[e.current], { xPercent: 0 }, 0), tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }), e.interact = !0 }, this.tweenSlides = function() { var t = new b({ onComplete: function() { t.remove(), e.setSlides() } }); "left" === e.direction ? (e.directionCurrent = 100, e.directionNext = -100) : (e.directionCurrent = -100, e.directionNext = 100), t.to(e.slider.slides[e.current], e.speed, { xPercent: e.directionCurrent, ease: _.d.easeInOut }, 0).set(e.slider.slides[e.next], { xPercent: e.directionNext }, 0).to(e.slider.slides[e.next], e.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(e.slider.images[e.current], e.speed, { scale: 1.5, ease: _.d.easeInOut }, 0).to(e.slider.images[e.next], e.speed, { scale: 1, ease: _.d.easeInOut }, 0) }, this.getSlides = function() { e.interact = !1, e.x < window.innerWidth / 2 ? (e.direction = "left", e.current > 0 ? e.next = e.current - 1 : e.next = e.slider.total - 1) : (e.direction = "right", e.current < e.slider.total - 1 ? e.next = e.current + 1 : e.next = 0), e.tweenSlides() }, this.prevSwipe = function() { e.interact = !1, e.direction = "left", e.current > 0 ? e.next = e.current - 1 : e.next = e.slider.total - 1, e.tweenSlides() }, this.nextSwipe = function() { e.interact = !1, e.direction = "right", e.current < e.slider.total - 1 ? e.next = e.current + 1 : e.next = 0, e.tweenSlides() }, this.init = function() { e.setSlides(), e.addEvents() }, this.section = document.querySelector(".s__gallery"), this.section && (this.slider = { images: this.section.querySelectorAll(".image__src"), slides: this.section.querySelectorAll(".slider__slide"), container: this.section.querySelector(".gallery__slider"), total: this.section.querySelector(".slider__slides").childElementCount }, this.count = { total: this.section.querySelector(".count__s"), current: this.section.querySelector(".count__l") }, this.x = null, this.next = 0, this.speed = 1.5, this.current = 0, this.interact = !0, this.direction = "right", this.directionNext = void 0, this.directionCurrent = void 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{ key: "trackDirection", value: function(t) { this.x = t.pageX, this.x < window.innerWidth / 2 ? "right" === this.direction && (this.direction = "left") : "left" === this.direction && (this.direction = "right") } }, {
            key: "addEvents",
            value: function() {
                var t = this;
                this.slider.container.addEventListener("mousemove", function(e) { t.trackDirection(e) }), this.slider.container.addEventListener("click", function() {!0 === t.interact && t.getSlides() }), this.slider.container.addEventListener("swiped-right", function() {!0 === t.interact && t.prevSwipe() }), this.slider.container.addEventListener("swiped-left", function() {!0 === t.interact && t.nextSwipe() })
            }
        }]) && Pt(e.prototype, i), r && Pt(e, r), t
    }();

    var Egt = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setCount = function() { e.count.total.innerHTML = e.slider.total, e.count.current.innerHTML = e.current + 1, tt.set(e.count.current, { y: -5, opacity: 0 }), tt.to(e.count.current, 1, { y: 0, opacity: 1 }) }, this.setSlides = function() { e.current = e.next, (new b).set(e.slider.slides, { xPercent: 100 }, 0).set(e.slider.images, { scale: 1.5 }).set(e.slider.images[e.current], { scale: 1 }).set(e.slider.slides[e.current], { xPercent: 0 }, 0), tt.to(e.count.current, .5, { y: 5, opacity: 0, ease: _.d.easeOut, onComplete: e.setCount }), e.interact = !0 }, this.tweenSlides = function() { var t = new b({ onComplete: function() { t.remove(), e.setSlides() } }); "left" === e.direction ? (e.directionCurrent = 100, e.directionNext = -100) : (e.directionCurrent = -100, e.directionNext = 100), t.to(e.slider.slides[e.current], e.speed, { xPercent: e.directionCurrent, ease: _.d.easeInOut }, 0).set(e.slider.slides[e.next], { xPercent: e.directionNext }, 0).to(e.slider.slides[e.next], e.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(e.slider.images[e.current], e.speed, { scale: 1.5, ease: _.d.easeInOut }, 0).to(e.slider.images[e.next], e.speed, { scale: 1, ease: _.d.easeInOut }, 0) }, this.getSlides = function() { e.interact = !1, e.x < window.innerWidth / 2 ? (e.direction = "left", e.current > 0 ? e.next = e.current - 1 : e.next = e.slider.total - 1) : (e.direction = "right", e.current < e.slider.total - 1 ? e.next = e.current + 1 : e.next = 0), e.tweenSlides() }, this.prevSwipe = function() { e.interact = !1, e.direction = "left", e.current > 0 ? e.next = e.current - 1 : e.next = e.slider.total - 1, e.tweenSlides() }, this.nextSwipe = function() { e.interact = !1, e.direction = "right", e.current < e.slider.total - 1 ? e.next = e.current + 1 : e.next = 0, e.tweenSlides() }, this.init = function() { e.setSlides(), e.addEvents() }, this.section = document.querySelector(".s__gallery-2"), this.section && (this.slider = { images: this.section.querySelectorAll(".image__src"), slides: this.section.querySelectorAll(".slider-2"), container: this.section.querySelector(".gallery__slider-2"), total: this.section.querySelector(".slider__slides").childElementCount }, this.count = { total: this.section.querySelector(".count__s"), current: this.section.querySelector(".count__l") }, this.x = null, this.next = 0, this.speed = 1.5, this.current = 0, this.interact = !0, this.direction = "right", this.directionNext = void 0, this.directionCurrent = void 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{ key: "trackDirection", value: function(t) { this.x = t.pageX, this.x < window.innerWidth / 2 ? "right" === this.direction && (this.direction = "left") : "left" === this.direction && (this.direction = "right") } }, {
            key: "addEvents",
            value: function() {
                var t = this;
                this.slider.container.addEventListener("mousemove", function(e) { t.trackDirection(e) }), this.slider.container.addEventListener("click", function() {!0 === t.interact && t.getSlides() }), this.slider.container.addEventListener("swiped-right", function() {!0 === t.interact && t.prevSwipe() }), this.slider.container.addEventListener("swiped-left", function() {!0 === t.interact && t.nextSwipe() })
            }
        }]) && Pt(e.prototype, i), r && Pt(e, r), t
    }();

    function kt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function At(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var Ct = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.setSizes = function() { e.windowHeight = window.innerHeight, e.stickyHeight = e.dom.sticky.clientHeight, e.offsetTop = e.section.offsetTop + e.dom.container.offsetTop + e.dom.sticky.offsetTop, e.startSticky = e.offsetTop - (e.windowHeight - e.stickyHeight) / 2, e.endSticky = e.section.offsetTop + e.section.clientHeight - e.windowHeight, e.stickyHeight = e.dom.sticky.clientHeight }, this.setContent = function() { e.sticky.heading.innerHTML = e.heading, e.sticky.paragraph.innerHTML = e.paragraph, e.sticky.button.href = e.link, tt.to(e.dom.text, 1, { opacity: 1, ease: _.d.easeOut }) }, this.setSticky = function() { e.dom.sticky.style.transform = "translateY(" + (e.scrollY - e.startSticky) + "px)" }, this.render = function() {
                e.scrollY = se.vars.current, kt(e.dom.images).forEach(function(t, i) {
                    if (t.getBoundingClientRect().top <= e.windowHeight / 2 && t.getBoundingClientRect().top > 0) {
                        if (!1 === t.inview) {
                            if (t.inview = !0, i === e.current) return;
                            e.current = i, e.heading = t.nextElementSibling.querySelector(".heading__l").innerHTML, e.paragraph = t.nextElementSibling.querySelector(".paragraph__r").innerHTML, e.link = t.nextElementSibling.querySelector(".button__r"), e.link ? (e.link = e.link.href, e.sticky.button.style.opacity = 1) : e.sticky.button.style.opacity = 0, tt.to(e.dom.text, .2, { opacity: 0, onComplete: e.setContent })
                        }
                    } else t.inview = !1
                }), e.scrollY >= e.startSticky && e.scrollY <= e.endSticky && e.setSticky(), window.requestAnimationFrame(e.render)
            }, this.section = document.querySelector(".s__offers"), n.a.isPhone || this.section && (this.dom = { text: this.section.querySelector(".offers__text"), sticky: this.section.querySelector(".offers__sticky"), blocks: this.section.querySelectorAll(".offers__block"), container: this.section.querySelector(".offers__container"), images: this.section.querySelectorAll(".block__image") }, this.sticky = { heading: this.dom.sticky.querySelector(".heading__l"), paragraph: this.dom.sticky.querySelector(".paragraph__r"), button: this.dom.sticky.querySelector(".button__r") }, this.current = 0, this.scrollY = void 0, this.heading = this.dom.blocks[0].querySelector(".heading__l").innerHTML, this.paragraph = this.dom.blocks[0].querySelector(".paragraph__r").innerHTML, a()(document.body, this.init()))
        }
        var e, i, r;
        return e = t, (i = [{ key: "addEvents", value: function() { window.addEventListener("resize", this.setSizes), document.body.classList.contains("is-it") && this.sticky.button.addEventListener("click", function() { alert("State per essere reindirizzati a una pagina in inglese.") }) } }, { key: "init", value: function() { this.setSizes(), this.setContent(), this.addEvents(), window.requestAnimationFrame(this.render) } }]) && At(e.prototype, i), r && At(e, r), t
    }();

    function Mt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function Dt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ft(t, e, i) { return (1 - i) * t + i * e }
    var Ot = new(function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.mouseMove = function(t) { e.sx = t.clientX, e.sy = t.clientY }, this.mouseClick = function() {
                var t = new b({ onComplete: function() { t.remove() } });
                t.to(e.shape, .25, { scale: .75, ease: _.d.easeIn }, 0).to(e.shape, .25, { scale: 1, ease: _.d.easeOut })
            }, this.cursorShow = function() {
                var t = new b({ onComplete: function() { t.remove() } });
                t.to(e.cursor, .25, { opacity: 1 })
            }, this.cursorHide = function() {
                var t = new b({ onComplete: function() { t.remove() } });
                t.to(e.cursor, .25, { opacity: 0 })
            }, this.render = function() { e.dx = Ft(e.dx, e.sx, .1), e.dy = Ft(e.dy, e.sy, .1), e.cursor.style.transform = "translate(" + e.dx + "px, " + e.dy + "px)", window.requestAnimationFrame(e.render) }, this.cursor = document.querySelector(".a__cursor"), this.cursor && (this.main = document.querySelector(".a__main"), this.draggers = document.querySelectorAll(".js__drag"), this.sections = document.querySelectorAll(".js__cursor"), this.shape = this.cursor.querySelector(".cursor__shape"), this.width = this.cursor.clientWidth, this.height = this.cursor.clientHeight, this.sx = this.width / 2, this.sy = this.height / 2, this.dx = this.sx, this.dy = this.sy, this.direction = "right", this.rotate = !0, this.init())
        }
        var e, i, r;
        return e = t, (i = [{
            key: "cursorTrack",
            value: function() {
                if (this.sx < window.innerWidth / 2) {
                    if ("right" === this.direction) {
                        var t = new b({ onComplete: function() { t.remove() } });
                        t.to(this.shape, .5, { rotation: -135, ease: _.d.easeInOut }, 0).to(this.shape, .25, { scale: .5, ease: _.d.easeIn }, 0).to(this.shape, .25, { scale: 1, ease: _.d.easeOut }, .25), this.direction = "left"
                    }
                } else if ("left" === this.direction) {
                    var e = new b({ onComplete: function() { e.remove() } });
                    e.to(this.shape, .5, { rotation: 45, ease: _.d.easeInOut }, 0).to(this.shape, .25, { scale: .5, ease: _.d.easeIn }, 0).to(this.shape, .25, { scale: 1, ease: _.d.easeOut }, .25), this.direction = "right"
                }
            }
        }, {
            key: "init",
            value: function() {
                var t = this;
                window.addEventListener("mousemove", function(e) { t.mouseMove(e) }), window.addEventListener("click", function() { t.mouseClick() }), window.addEventListener("mousemove", function() {!0 === t.rotate && t.cursorTrack() }), Mt(this.sections).forEach(function(e) { e.addEventListener("mouseenter", function() { t.cursorShow() }), e.addEventListener("mouseleave", function() { t.cursorHide(), t.rotate = !0 }) }), Mt(this.draggers).forEach(function(e) { e.addEventListener("mouseenter", function() { t.rotate = !1 }), e.addEventListener("mouseleave", function() { t.rotate = !0 }) }), window.requestAnimationFrame(this.render)
            }
        }]) && Dt(e.prototype, i), r && Dt(e, r), t
    }());
    var It = function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.loading = function() { 4 === e.dom.video.readyState && (e.loaded = !0, n.a.isDesktop && se.resize(), e.stop()) }, this.scroll = function() { e.state.rAF = void 0, !1 === e.loaded && e.loading(), e.start() }, this.start = function() { e.state.rAF || (e.state.rAF = window.requestAnimationFrame(e.scroll)) }, this.stop = function() { e.state.rAF && (window.cancelAnimationFrame(e.state.rAF), e.state.rAF = void 0) }, this.init = function() { n.a.isDesktop && e.scroll() }, this.section = document.querySelector(".s__invite"), this.section && (this.dom = { section: this.section, video: this.section.querySelector(".video__src") }, this.state = { scrollY: 0, rAF: void 0 }, this.loaded = !1, this.init()) };

    function Rt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }
    var Lt = function t() {
        var e = this;
        ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.load = function() {
            var t = e,
                i = e.dom.main,
                r = e.dom.scroll,
                n = e.dom.container,
                s = e.dom.background,
                a = new XMLHttpRequest;
            a.open("POST", document.location.origin + "/wp-admin/admin-ajax.php", !0), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"), a.onload = function() { this.status >= 200 && this.status < 400 && (r.innerHTML = this.response, t.open(i, n, s)) }, a.send("action=fetch_modal&id=" + e.data.id)
        }, this.open = function(t, i, r) {
            n.a.isDesktop, e.body.classList.add("is__modal"), e.modal.style.opacity = "1", e.modal.style.pointerEvents = "all";
            var s = document.querySelector(".modal__gallery");
            s && e.gallery(s);
            var a = document.querySelector(".modal__fluid");
            a && e.fluidIn(t, i, r), document.querySelector(".modal__small") && e.small(), document.querySelector(".modal__large") && e.large(), e.modal.querySelector(".modal__close").addEventListener("click", function() { e.body.classList.remove("is__modal"), a ? e.fluidOut(t, i, r) : e.destroy() })
        }, this.fluidIn = function(t, i, r) { new b({ onComplete: function() { e.body.style.overflow = "hidden" } }).set(t, { yPercent: 100 }).set(i, { yPercent: -50 }).to(r, 1, { opacity: 1, ease: _.d.easeInOut }, 0).to(t, 1, { yPercent: 0, ease: _.d.easeInOut }, 0).to(i, 1, { yPercent: 0, ease: _.d.easeInOut }, 0) }, this.fluidOut = function(t, i, r) { new b({ onComplete: function() { e.destroy() } }).to(r, 1, { opacity: 0, ease: _.d.easeInOut }, 0).to(t, 1, { yPercent: -100, clearProps: "all", ease: _.d.easeInOut }, 0).to(i, 1, { yPercent: 50, clearProps: "all", ease: _.d.easeInOut }, 0) }, this.small = function() { e.body.style.overflow = "hidden", e.dom.background.style.opacity = 1 }, this.large = function() { e.body.style.overflow = "hidden", e.dom.background.style.opacity = 1 }, this.gallery = function(t) {
            a()(t, function() {
                var e = this;
                for (this.width = 0, this.gallery = t, this.cursor = document.querySelector(".cursor__icon"), window.innerWidth >= 580 ? this.margin = .05556 * window.innerWidth : this.margin = .04 * window.innerWidth, this.dragger = this.gallery.querySelector(".gallery__dragger"), this.children = this.dragger.children, this.i = 0; this.i < this.children.length; this.i += 1) this.width += this.children[this.i].clientWidth;
                this.width = this.width + this.margin * this.children.length, this.dragger.style.width = this.width - this.margin + "px", _t.a.create(this.dragger, { type: "x", cursor: "none", throwProps: !0, zIndexBoost: !1, edgeResistance: .65, bounds: this.gallery }), this.dragger.addEventListener("mouseenter", function() { Ot.cursorShow(), e.cursor.classList.add("icon__drag") }), this.dragger.addEventListener("mouseleave", function() { Ot.cursorHide(), e.cursor.classList.remove("icon__drag") })
            })
        }, this.destroy = function() { n.a.isDesktop, e.body.style.overflow = "", e.modal.style.opacity = "", e.dom.scroll.innerHTML = "", e.modal.style.pointerEvents = "", e.dom.background.style.opacity = "" }, this.events = function() { Rt(e.links).forEach(function(t) { t.addEventListener("click", function() { e.data.id = t.dataset.id, e.load(e.data.id) }) }) }, this.modal = document.querySelector(".a__modal"), this.modal && (this.body = document.querySelector("body"), this.links = document.querySelectorAll(".js__modal"), this.links && (this.dom = { main: this.modal.querySelector(".modal__main"), scroll: this.modal.querySelector(".modal__scroll"), container: this.modal.querySelector(".modal__container"), background: this.modal.querySelector(".modal__background") }, this.data = { id: null }, this.events()))
    };
    var Nt = function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.loopRAF = function() { e.RAF = void 0, e.section.getBoundingClientRect().top < e.logo.getBoundingClientRect().top && e.section.getBoundingClientRect().bottom - e.logo.clientHeight > 0 ? void 0 === e.section.inview && (e.logo.classList.add("is__light"), e.section.inview = !0) : !0 === e.section.inview && (e.logo.classList.remove("is__light"), e.section.inview = void 0), e.startRAF() }, this.startRAF = function() { e.RAF || (e.RAF = window.requestAnimationFrame(e.loopRAF)) }, this.init = function() { e.startRAF() }, this.section = document.querySelector(".s__image"), this.section && (this.logo = document.querySelector(".a__logo"), this.RAF = 0, this.init()) },
        Bt = i(135),
        Vt = i.n(Bt);

    function zt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var jt = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.animateOut = function() {
                var t = new b({ onComplete: function() { e.section.remove(), se && se.resize(), t.remove() } });
                t.to(e.intro.logo, 2, { scale: 1, ease: _.d.easeInOut }, 0).to(e.intro.container, 2, { ease: _.d.easeInOut, y: window.innerHeight }, 0).to(e.section, 2, { ease: _.d.easeInOut, y: -window.innerHeight }, 0)
            }, this.section = document.querySelector(".a__intro"), this.section && (this.intro = { logo: this.section.querySelector(".intro__logo"), container: this.section.querySelector(".intro__container") }, this.logo = { monogram: this.intro.logo.querySelector(".logo__monogram"), wordmark: this.intro.logo.querySelector(".logo__wordmark"), location: this.intro.logo.querySelector(".logo__location") }, this.url = document.location.origin, this.init())
        }
        var e, i, r;
        return e = t, (i = [{
            key: "setIntro",
            value: function() {
                var t = this,
                    e = this.intro.logo.clientWidth,
                    i = this.intro.logo.clientHeight,
                    r = new b({ onComplete: function() { t.animateLogo(), r.remove() } });
                r.set(this.intro.logo, { scale: 1.5, opacity: 1, x: window.innerWidth / 2 - e / 2, y: window.innerHeight / 2 - i / 2, transformOrigin: "50% 50%" }, 0).set(this.logo.wordmark, { y: -10 }, 0).set(this.logo.location, { y: -10 }, 0)
            }
        }, {
            key: "animateLogo",
            value: function() {
                var t = new b({ onComplete: function() { t.remove() } });
                t.to(this.logo.wordmark, 1, { y: 0, opacity: 1, ease: _.d.easeOut }, 1).to(this.logo.location, 1, { y: 0, opacity: 1, ease: _.d.easeOut }, 1.2);
                var e = { loop: !1, autoplay: !1, renderer: "svg", container: this.logo.monogram, path: this.url + "/wp-content/themes/st-regis/src/components/intro/intro.json" },
                    i = Vt.a.loadAnimation(e);
                i.play(), i.addEventListener("complete", this.animateOut)
            }
        }, { key: "init", value: function() { this.setIntro() } }]) && zt(e.prototype, i), r && zt(e, r), t
    }();

    function Gt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function qt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var Ht = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.initSlide = function() { Gt(e.slider.slides).forEach(function(t) { t.style.zIndex = 1 }), e.slider.slides[e.next].style.zIndex = 2, e.slider.slides[e.current].style.zIndex = 3, e.slider.slides[e.current].style.opacity = 1, e.slider.bullets[e.current].classList.add("is__active"), e.startAutoplay() }, this.setSlide = function() { Gt(e.slider.bullets).forEach(function(t) { t.classList.remove("is__active") }), e.slider.bullets[e.next].classList.add("is__active"), Gt(e.slider.slides).forEach(function(t) { t.style.zIndex = 1 }), e.slider.slides[e.next].style.zIndex = 3, e.slider.slides[e.current].style.zIndex = 2 }, this.tweenSlide = function() { e.setSlide(), tt.to(e.slider.slides[e.current], e.speed, { opacity: 0 }), tt.to(e.slider.slides[e.next], e.speed, { opacity: 1 }), e.getSlide() }, this.nextSlide = function() { e.current === e.slider.total ? e.current = 0 : e.current = e.next, e.next === e.slider.total ? e.next = 0 : e.next = e.current + 1 }, this.getSlide = function() { "next" === e.direction ? e.nextSlide() : e.prevSlide() }, this.play = function() { e.tweenSlide(), !0 === e.autoplay && tt.delayedCall(e.duration, e.play) }, this.startAutoplay = function() { e.autoplay = !0, !0 === e.autoplay && tt.delayedCall(e.duration, e.play) }, this.stopAutoplay = function() { e.autoplay = !1, tt.killDelayedCallsTo(e.play) }, this.loopRAF = function() { e.RAF = void 0, n.a.isDevice ? (e.scrollY = window.pageYOffset || document.documentElement.scrollTop - document.documentElement.clientTop || 0, e.offsetY = e.scrollY / 3) : (e.scrollY = se.vars.current, e.offsetY = e.scrollY / 3), e.height > e.scrollY && (e.slider.element.style.transform = "translateY(" + e.offsetY + "px)"), e.startRAF() }, this.startRAF = function() { e.RAF || (e.RAF = window.requestAnimationFrame(e.loopRAF)) }, this.initIndicator = function() { new b({ repeat: -1 }).set(e.indicator.stroke, { yPercent: -100 }).to(e.indicator.stroke, 1, { yPercent: 0 }).to(e.indicator.stroke, 1, { yPercent: 100 }) }, this.section = document.querySelector(".s__hero"), this.section && (this.slider = { element: this.section.querySelector(".hero__slider"), bullets: this.section.querySelectorAll(".list__item"), slides: this.section.querySelectorAll(".slider__slide"), total: this.section.querySelector(".hero__slider").childElementCount - 1 }, this.indicator = { stroke: this.section.querySelector(".indicator__stroke") }, this.autoplay = !0, this.direction = "next", this.speed = 2, this.duration = 7, this.current = 0, this.next = this.current + 1, this.height = this.section.clientHeight, this.RAF = 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{
            key: "addEvents",
            value: function() {
                var t = this;
                Gt(this.slider.bullets).forEach(function(e, i) { e.addEventListener("click", function() { t.direction = "next", t.stopAutoplay(), t.next = i, t.tweenSlide(), t.current = i, t.startAutoplay() }) })
            }
        }, { key: "init", value: function() { this.startRAF(), this.initSlide(), this.addEvents(), this.initIndicator() } }]) && qt(e.prototype, i), r && qt(e, r), t
    }();

    function Xt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function Yt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var Wt = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.rAF = function() { e.rafid = void 0, e.scrollY = window.pageYOffset || document.documentElement.scrollTop, e.initScroll(), e.startrAF() }, this.lightHud = function() { "light" === e.theme && (tt.to(e.section, .5, { boxShadow: "0px 0px 35px -25px rgba(0,0,0,0.75)" }), tt.to(e.menu.bar, .5, { css: { color: "#3A3636" } }), tt.to(e.menu.instagram, .5, { fill: "#3A3636" }), tt.to(e.menu.telegram, .5, { fill: "#3A3636" }), tt.to(e.menu.divider, .5, { backgroundColor: "#3A3636" }), !1 === e.top && (tt.set(e.menu.shape, { yPercent: -101 }), tt.to(e.menu.shape, .5, { yPercent: 0 })), e.theme = "dark") }, this.darkHud = function() { "dark" === e.theme && (tt.to(e.section, .5, { boxShadow: "0px 0px 35px -25px rgba(0,0,0,0.0)" }), tt.to(e.menu.bar, .5, { css: { color: "#ffffff" } }), tt.to(e.menu.divider, .5, { backgroundColor: "#ffffff" }), tt.to(e.menu.instagram, .5, { fill: "#ffffff" }), tt.to(e.menu.telegram, .5, { fill: "#ffffff" }), tt.to(e.menu.shape, .5, { yPercent: 101, ease: _.d.easeInOut }), e.theme = "light") }, this.showLogo = function() {!0 === e.state && (tt.to(e.logo, .5, { opacity: 1 }), e.state = !1) }, this.hideLogo = function() {!1 === e.state && (tt.to(e.logo, .5, { opacity: 0 }), e.state = !0) }, this.initScroll = function() { e.scrollY > 100 ? (e.top = !1, e.lightHud()) : (e.top = !0, e.darkHud()), e.scrollY > window.innerHeight ? e.showLogo() : e.hideLogo() }, this.startrAF = function() { e.rafid || (e.rafid = window.requestAnimationFrame(e.rAF)) }, this.stoprAF = function() { e.rafid && (window.cancelAnimationFrame(e.rafid), e.rafid = void 0) }, this.clickBurger = function() { e.section.classList.contains("is__active") ? (e.startrAF(), e.lightHud()) : (e.stoprAF(), e.darkHud()) }, this.clickLink = function() { e.top = !1, e.startrAF(), e.lightHud() }, this.section = document.querySelector(".a__menu"), this.section && (this.logo = document.querySelector(".a__logo"), this.menu = { bar: this.section.querySelector(".menu__bar"), shape: this.section.querySelector(".menu__shape"), burger: this.section.querySelector(".menu__burger"), divider: this.section.querySelector(".menu__divider"), instagram: this.section.querySelector(".button__instagram"), telegram: this.section.querySelector(".button__telegram") }, this.nav = { links: document.querySelectorAll(".nav__item") }, this.rafid = null, this.scrollY = null, this.state = !0, this.theme = "dark", this.top = void 0, n.a.isDesktop && this.init()) }
        var e, i, r;
        return e = t, (i = [{
            key: "addEvents",
            value: function() {
                var t = this;
                this.menu.burger.addEventListener("click", this.clickBurger), Xt(this.nav.links).forEach(function(e) { e.addEventListener("click", t.clickLink) })
            }
        }, { key: "init", value: function() { this.startrAF(), this.addEvents(), this.initScroll() } }]) && Yt(e.prototype, i), r && Yt(e, r), t
    }();

    function Ut(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var Kt = function() {
        function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.scrollTop = function() { se.scrollTo(0) }, this.logo = document.querySelector(".a__logo"), this.logo && this.init() }
        var e, i, r;
        return e = t, (i = [{ key: "addEvents", value: function() { this.logo.addEventListener("click", this.scrollTop) } }, { key: "init", value: function() { this.addEvents() } }]) && Ut(e.prototype, i), r && Ut(e, r), t
    }();

    function $t(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function Zt(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var Jt = function() {
        function t() { var e = this;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.reset = function() { w.set(e.dom.nav, { yPercent: -100 }), w.set(e.dom.mask, { yPercent: 100 }), w.set(e.burger.close[0], { xPercent: -105 }), w.set(e.burger.close[1], { yPercent: -105 }), w.set(e.nav.image, { opacity: 0, scale: 1.3 }), w.set(e.nav.items, { y: 10, opacity: 0 }), w.set(e.nav.contact, { y: 10, opacity: 0 }) }, this.clickMenu = function() { e.dom.burger.style.pointerEvents = "none", !1 === e.state.active ? (e.dom.menu.classList.add("is__active"), e.state.active = !0, e.animateIn(), e.burgerOut()) : (e.dom.menu.classList.remove("is__active"), e.state.active = !1, e.animateOut(), e.burgerIn()) }, this.section = document.querySelector(".a__nav"), this.section && (this.dom = { nav: document.querySelector(".a__nav"), menu: document.querySelector(".a__menu"), mask: document.querySelector(".nav__mask"), subs: document.querySelectorAll(".sub__item"), burger: document.querySelector(".menu__burger") }, this.nav = { image: this.dom.nav.querySelector(".nav__image"), items: this.dom.nav.querySelectorAll(".nav__item"), contact: this.dom.nav.querySelectorAll(".contact__item") }, this.burger = { shape: this.dom.burger.querySelector(".burger__shape"), open: this.dom.burger.querySelectorAll(".burger__open span"), close: this.dom.burger.querySelectorAll(".burger__close span") }, this.state = { active: !1 }, this.item = void 0, this.offset = void 0, this.sections = void 0, this.init()) }
        var e, i, r;
        return e = t, (i = [{ key: "animateIn", value: function() { w.to(this.dom.nav, 1, { yPercent: 0, ease: _.d.easeInOut }), w.to(this.dom.mask, 1, { yPercent: 0, ease: _.d.easeInOut }), w.to(this.nav.image, 5, { scale: 1, opacity: .06, ease: _.d.easeOut }), w.staggerTo(this.nav.items, 1, { y: 0, delay: .5, opacity: 1, ease: _.d.easeOut }, .05), w.staggerTo(this.nav.contact, 1, { y: 0, delay: 1, opacity: 1, ease: _.d.easeOut }, .05) } }, { key: "animateOut", value: function() { w.to(this.dom.nav, 1, { yPercent: 100, ease: _.d.easeInOut }), w.to(this.dom.mask, 1, { yPercent: -100, onComplete: this.reset, ease: _.d.easeInOut }) } }, {
            key: "burgerIn",
            value: function() {
                var t = this;
                new b({ onComplete: function() { t.dom.burger.style.pointerEvents = "" } }).staggerTo(this.burger.open, .5, { xPercent: 0, ease: _.d.easeInOut }, .025, .5).to(this.burger.close[0], .5, { xPercent: -105, ease: _.d.easeInOut }, 0).to(this.burger.close[1], .5, { yPercent: -105, ease: _.d.easeInOut }, 0).set(this.burger.shape, { yPercent: -105 }, 0).to(this.burger.shape, 1, { yPercent: 0, ease: _.d.easeInOut }, 0)
            }
        }, {
            key: "burgerOut",
            value: function() {
                var t = this;
                new b({ onComplete: function() { t.dom.burger.style.pointerEvents = "" } }).staggerTo(this.burger.open, .5, { xPercent: -105, ease: _.d.easeInOut }, .025).to(this.burger.close[0], .5, { xPercent: 0, ease: _.d.easeInOut }, .5).to(this.burger.close[1], .5, { yPercent: 0, ease: _.d.easeInOut }, .5).to(this.burger.shape, 1, { yPercent: 105, ease: _.d.easeInOut }, 0)
            }
        }, { key: "scrollTo", value: function() { this.sections = document.querySelector('[data-section="' + this.item + '"]'), this.offset = se ? this.sections.offsetTop - 120 : this.sections.offsetTop - .26667 * window.innerHeight, se && (se.vars.current = se.vars.target = this.offset - 500), window.scrollTo(0, this.offset), se && se.scrollTo(this.offset) } }, {
            key: "addEvents",
            value: function() {
                var t = this;
                this.dom.burger.addEventListener("click", this.clickMenu), $t(this.nav.items).forEach(function(e) { e.addEventListener("click", function() { t.item = e.getAttribute("data-nav"), t.clickMenu(), t.scrollTo() }) }), $t(this.dom.subs).forEach(function(e) { e.addEventListener("click", function() { t.clickMenu() }) })
            }
        }, { key: "init", value: function() { this.dom.nav.style.visibility = "inherit", this.reset(), this.addEvents() } }]) && Zt(e.prototype, i), r && Zt(e, r), t
    }();

    function Qt(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function te(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var ee = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.nextClick = function(t) {
                e.active = !1, e.next = t, Qt(e.slider.tab).forEach(function(t) { t.classList.remove("is__active") }), e.slider.tab[t].classList.add("is__active");
                var i = new b({ onComplete: function() { i.remove(), e.setStates() } });
                e.slider.image[e.next].style.zIndex = 2, e.slider.text[e.next].style.display = "block", i.to(e.slider.text[e.current], .75, { opacity: 0, ease: _.d.easeInOut }, 0).to(e.slider.text[e.next], .75, { opacity: 1, ease: _.d.easeInOut }, .75).to(e.slider.image[e.current], e.speed, { xPercent: -50, ease: _.d.easeInOut }, 0).to(e.slider.image[e.next], e.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(e.slider.image[e.next].querySelector(".image__mask"), e.speed, { xPercent: 0, ease: _.d.easeInOut }, 0).to(e.slider.image[e.next].querySelector(".image__src"), e.speed, { scale: 1, ease: _.d.easeInOut }, 0), e.current = t
            }, this.section = document.querySelector(".s__tab"), this.section && (this.slider = { tab: this.section.querySelectorAll(".list__item"), text: this.section.querySelectorAll(".tab__text__slide"), image: this.section.querySelectorAll(".tab__image__slide") }, this.active = !1, this.speed = 1.5, this.current = 0, this.next = void 0, this.init())
        }
        var e, i, r;
        return e = t, (i = [{ key: "setStates", value: function() { this.slider.tab[this.current].classList.add("is__active"), Qt(this.slider.text).forEach(function(t) { t.style.opacity = 0, t.style.display = "none" }), this.slider.text[this.current].style.opacity = 1, this.slider.text[this.current].style.display = "block", Qt(this.slider.image).forEach(function(t) { tt.set(t, { xPercent: 100 }), tt.set(t.querySelector(".image__mask"), { xPercent: -50 }), tt.set(t.querySelector(".image__src"), { scale: 1.2 }) }), this.slider.image[this.current].style.zIndex = 1, tt.set(this.slider.image[this.current], { xPercent: 0 }), tt.set(this.slider.image[this.current].querySelector(".image__mask"), { xPercent: 0 }), tt.set(this.slider.image[this.current].querySelector(".image__src"), { scale: 1 }), this.active = !0 } }, {
            key: "addEvents",
            value: function() {
                var t = this;
                Qt(this.slider.tab).forEach(function(e, i) { e.addEventListener("click", function() {!0 === t.active && t.nextClick(i) }) })
            }
        }, { key: "init", value: function() { this.setStates(), this.addEvents() } }]) && te(e.prototype, i), r && te(e, r), t
    }();

    function ie(t) { return function(t) { if (Array.isArray(t)) { for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e]; return i } }(t) || function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }() }

    function re(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var ne = function() {
        function t() {
            var e = this;
            ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.scroll = function() {
                e.rAF = void 0, e.windowHeight = window.innerHeight, n.a.isDevice ? e.scrollY = window.pageYOffset || document.documentElement.scrollTop - document.documentElement.clientTop || 0 : e.scrollY = se.vars.current, ie(e.elements).forEach(function(t) {
                    if (et(t)) {
                        var i = t.getBoundingClientRect().top + e.scrollY,
                            r = t.clientHeight,
                            n = (e.scrollY + e.windowHeight - i) / ((e.windowHeight + r) / 100);
                        n < 100 && tt.set(t, { yPercent: n / 4 })
                    }
                }), e.init()
            }, this.elements = document.querySelectorAll(".js__parallax"), this.elements.length && (this.rAF = void 0, this.init())
        }
        var e, i, r;
        return e = t, (i = [{ key: "init", value: function() { this.rAF || (this.rAF = window.requestAnimationFrame(this.scroll)) } }]) && re(e.prototype, i), r && re(e, r), t
    }();
    i.d(e, "Scroll", function() { return se });
    var se;
    new nt;
    if (n.a.isDesktop && document.querySelector("body").classList.add("a__desktop"), n.a.isDevice && document.querySelector("body").classList.add("a__device"), n.a.isIE && document.querySelector("body").classList.add("a__ie"), n.a.isDesktop && (se = new v({ ease: .075, native: !0, section: document.querySelector(".a__scroll") })).init(), window.location.hash) {
        var ae, oe = window.location.hash.substring(1).replace(/\s+/g, "-").toLowerCase();
        window.history.replaceState(null, null, " ");
        var le = document.querySelector('[data-slug="' + oe + '"]');
        ae = se ? le.getBoundingClientRect().top - .17361 * window.innerWidth : le.getBoundingClientRect().top - .26667 * window.innerWidth, se && (se.vars.current = se.vars.target = ae), window.scrollTo(0, ae)
    }
    a()(document.body, function() { new ot, new ht, new ft, new dt, new yt, new bt, new ne, new St, new Et, new Egt, new Ct, new It, new Lt, new Nt, new jt, new Ht, new Wt, new Kt, new Jt, new ee, new ztt, new hhht, new xtt, new btbt }), n.a.isDesktop && se.resize()
}]);
//# sourceMappingURL=bundle.js.map