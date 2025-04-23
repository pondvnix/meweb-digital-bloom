// IMPORTANT: If the JavaScript is not working it is most probably because it relies on external libraries that are linked in the index.html file - however, if you don't have the permission to access them, it's better not to link them.

// Please keep in mind that JS files might also be obfuscated to prevent people from stealing the code and animations.

// However, all the HTML elements and CSS are there are you just need to access them using JS.

(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function n(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = r(s);
        fetch(s.href, i)
    }
})();
var Ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function zv(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Bf(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(n) {
        var s = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, s.get ? s : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }), r
}
var Du = {
        exports: {}
    },
    Ii = {},
    Uu = {
        exports: {}
    },
    F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps = Symbol.for("react.element"),
    Hf = Symbol.for("react.portal"),
    Vf = Symbol.for("react.fragment"),
    qf = Symbol.for("react.strict_mode"),
    Wf = Symbol.for("react.profiler"),
    Gf = Symbol.for("react.provider"),
    Kf = Symbol.for("react.context"),
    Jf = Symbol.for("react.forward_ref"),
    Qf = Symbol.for("react.suspense"),
    Yf = Symbol.for("react.memo"),
    Xf = Symbol.for("react.lazy"),
    sc = Symbol.iterator;

function Zf(e) {
    return e === null || typeof e != "object" ? null : (e = sc && e[sc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Iu = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Mu = Object.assign,
    zu = {};

function un(e, t, r) {
    this.props = e, this.context = t, this.refs = zu, this.updater = r || Iu
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
un.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Fu() {}
Fu.prototype = un.prototype;

function el(e, t, r) {
    this.props = e, this.context = t, this.refs = zu, this.updater = r || Iu
}
var tl = el.prototype = new Fu;
tl.constructor = el;
Mu(tl, un.prototype);
tl.isPureReactComponent = !0;
var ic = Array.isArray,
    Bu = Object.prototype.hasOwnProperty,
    rl = {
        current: null
    },
    Hu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Vu(e, t, r) {
    var n, s = {},
        i = null,
        a = null;
    if (t != null)
        for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) Bu.call(t, n) && !Hu.hasOwnProperty(n) && (s[n] = t[n]);
    var c = arguments.length - 2;
    if (c === 1) s.children = r;
    else if (1 < c) {
        for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
        s.children = l
    }
    if (e && e.defaultProps)
        for (n in c = e.defaultProps, c) s[n] === void 0 && (s[n] = c[n]);
    return {
        $$typeof: ps,
        type: e,
        key: i,
        ref: a,
        props: s,
        _owner: rl.current
    }
}

function em(e, t) {
    return {
        $$typeof: ps,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function nl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ps
}

function tm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var oc = /\/+/g;

function mo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? tm("" + e.key) : t.toString(36)
}

function Js(e, t, r, n, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ps:
                case Hf:
                    a = !0
            }
    }
    if (a) return a = e, s = s(a), e = n === "" ? "." + mo(a, 0) : n, ic(s) ? (r = "", e != null && (r = e.replace(oc, "$&/") + "/"), Js(s, t, r, "", function(u) {
        return u
    })) : s != null && (nl(s) && (s = em(s, r + (!s.key || a && a.key === s.key ? "" : ("" + s.key).replace(oc, "$&/") + "/") + e)), t.push(s)), 1;
    if (a = 0, n = n === "" ? "." : n + ":", ic(e))
        for (var c = 0; c < e.length; c++) {
            i = e[c];
            var l = n + mo(i, c);
            a += Js(i, t, r, l, s)
        } else if (l = Zf(e), typeof l == "function")
            for (e = l.call(e), c = 0; !(i = e.next()).done;) i = i.value, l = n + mo(i, c++), a += Js(i, t, r, l, s);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}

function Ss(e, t, r) {
    if (e == null) return e;
    var n = [],
        s = 0;
    return Js(e, n, "", "", function(i) {
        return t.call(r, i, s++)
    }), n
}

function rm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Te = {
        current: null
    },
    Qs = {
        transition: null
    },
    nm = {
        ReactCurrentDispatcher: Te,
        ReactCurrentBatchConfig: Qs,
        ReactCurrentOwner: rl
    };

function qu() {
    throw Error("act(...) is not supported in production builds of React.")
}
F.Children = {
    map: Ss,
    forEach: function(e, t, r) {
        Ss(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return Ss(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Ss(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!nl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = un;
F.Fragment = Vf;
F.Profiler = Wf;
F.PureComponent = el;
F.StrictMode = qf;
F.Suspense = Qf;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nm;
F.act = qu;
F.cloneElement = function(e, t, r) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = Mu({}, e.props),
        s = e.key,
        i = e.ref,
        a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, a = rl.current), t.key !== void 0 && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
        for (l in t) Bu.call(t, l) && !Hu.hasOwnProperty(l) && (n[l] = t[l] === void 0 && c !== void 0 ? c[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) n.children = r;
    else if (1 < l) {
        c = Array(l);
        for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
        n.children = c
    }
    return {
        $$typeof: ps,
        type: e.type,
        key: s,
        ref: i,
        props: n,
        _owner: a
    }
};
F.createContext = function(e) {
    return e = {
        $$typeof: Kf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Gf,
        _context: e
    }, e.Consumer = e
};
F.createElement = Vu;
F.createFactory = function(e) {
    var t = Vu.bind(null, e);
    return t.type = e, t
};
F.createRef = function() {
    return {
        current: null
    }
};
F.forwardRef = function(e) {
    return {
        $$typeof: Jf,
        render: e
    }
};
F.isValidElement = nl;
F.lazy = function(e) {
    return {
        $$typeof: Xf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: rm
    }
};
F.memo = function(e, t) {
    return {
        $$typeof: Yf,
        type: e,
        compare: t === void 0 ? null : t
    }
};
F.startTransition = function(e) {
    var t = Qs.transition;
    Qs.transition = {};
    try {
        e()
    } finally {
        Qs.transition = t
    }
};
F.unstable_act = qu;
F.useCallback = function(e, t) {
    return Te.current.useCallback(e, t)
};
F.useContext = function(e) {
    return Te.current.useContext(e)
};
F.useDebugValue = function() {};
F.useDeferredValue = function(e) {
    return Te.current.useDeferredValue(e)
};
F.useEffect = function(e, t) {
    return Te.current.useEffect(e, t)
};
F.useId = function() {
    return Te.current.useId()
};
F.useImperativeHandle = function(e, t, r) {
    return Te.current.useImperativeHandle(e, t, r)
};
F.useInsertionEffect = function(e, t) {
    return Te.current.useInsertionEffect(e, t)
};
F.useLayoutEffect = function(e, t) {
    return Te.current.useLayoutEffect(e, t)
};
F.useMemo = function(e, t) {
    return Te.current.useMemo(e, t)
};
F.useReducer = function(e, t, r) {
    return Te.current.useReducer(e, t, r)
};
F.useRef = function(e) {
    return Te.current.useRef(e)
};
F.useState = function(e) {
    return Te.current.useState(e)
};
F.useSyncExternalStore = function(e, t, r) {
    return Te.current.useSyncExternalStore(e, t, r)
};
F.useTransition = function() {
    return Te.current.useTransition()
};
F.version = "18.3.1";
Uu.exports = F;
var k = Uu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sm = k,
    im = Symbol.for("react.element"),
    om = Symbol.for("react.fragment"),
    am = Object.prototype.hasOwnProperty,
    lm = sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    cm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Wu(e, t, r) {
    var n, s = {},
        i = null,
        a = null;
    r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
    for (n in t) am.call(t, n) && !cm.hasOwnProperty(n) && (s[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps, t) s[n] === void 0 && (s[n] = t[n]);
    return {
        $$typeof: im,
        type: e,
        key: i,
        ref: a,
        props: s,
        _owner: lm.current
    }
}
Ii.Fragment = om;
Ii.jsx = Wu;
Ii.jsxs = Wu;
Du.exports = Ii;
var o = Du.exports,
    Gu = {
        exports: {}
    },
    We = {},
    Ku = {
        exports: {}
    },
    Ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, U) {
        var M = j.length;
        j.push(U);
        e: for (; 0 < M;) {
            var q = M - 1 >>> 1,
                ee = j[q];
            if (0 < s(ee, U)) j[q] = U, j[M] = ee, M = q;
            else break e
        }
    }

    function r(j) {
        return j.length === 0 ? null : j[0]
    }

    function n(j) {
        if (j.length === 0) return null;
        var U = j[0],
            M = j.pop();
        if (M !== U) {
            j[0] = M;
            e: for (var q = 0, ee = j.length, xt = ee >>> 1; q < xt;) {
                var _ = 2 * (q + 1) - 1,
                    te = j[_],
                    de = _ + 1,
                    ze = j[de];
                if (0 > s(te, M)) de < ee && 0 > s(ze, te) ? (j[q] = ze, j[de] = M, q = de) : (j[q] = te, j[_] = M, q = _);
                else if (de < ee && 0 > s(ze, M)) j[q] = ze, j[de] = M, q = de;
                else break e
            }
        }
        return U
    }

    function s(j, U) {
        var M = j.sortIndex - U.sortIndex;
        return M !== 0 ? M : j.id - U.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date,
            c = a.now();
        e.unstable_now = function() {
            return a.now() - c
        }
    }
    var l = [],
        u = [],
        d = 1,
        f = null,
        h = 3,
        y = !1,
        v = !1,
        x = !1,
        b = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(j) {
        for (var U = r(u); U !== null;) {
            if (U.callback === null) n(u);
            else if (U.startTime <= j) n(u), U.sortIndex = U.expirationTime, t(l, U);
            else break;
            U = r(u)
        }
    }

    function w(j) {
        if (x = !1, g(j), !v)
            if (r(l) !== null) v = !0, ge(C);
            else {
                var U = r(u);
                U !== null && be(w, U.startTime - j)
            }
    }

    function C(j, U) {
        v = !1, x && (x = !1, p(A), A = -1), y = !0;
        var M = h;
        try {
            for (g(U), f = r(l); f !== null && (!(f.expirationTime > U) || j && !D());) {
                var q = f.callback;
                if (typeof q == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var ee = q(f.expirationTime <= U);
                    U = e.unstable_now(), typeof ee == "function" ? f.callback = ee : f === r(l) && n(l), g(U)
                } else n(l);
                f = r(l)
            }
            if (f !== null) var xt = !0;
            else {
                var _ = r(u);
                _ !== null && be(w, _.startTime - U), xt = !1
            }
            return xt
        } finally {
            f = null, h = M, y = !1
        }
    }
    var S = !1,
        E = null,
        A = -1,
        T = 5,
        N = -1;

    function D() {
        return !(e.unstable_now() - N < T)
    }

    function W() {
        if (E !== null) {
            var j = e.unstable_now();
            N = j;
            var U = !0;
            try {
                U = E(!0, j)
            } finally {
                U ? I() : (S = !1, E = null)
            }
        } else S = !1
    }
    var I;
    if (typeof m == "function") I = function() {
        m(W)
    };
    else if (typeof MessageChannel < "u") {
        var X = new MessageChannel,
            je = X.port2;
        X.port1.onmessage = W, I = function() {
            je.postMessage(null)
        }
    } else I = function() {
        b(W, 0)
    };

    function ge(j) {
        E = j, S || (S = !0, I())
    }

    function be(j, U) {
        A = b(function() {
            j(e.unstable_now())
        }, U)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        v || y || (v = !0, ge(C))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return r(l)
    }, e.unstable_next = function(j) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var U = 3;
                break;
            default:
                U = h
        }
        var M = h;
        h = U;
        try {
            return j()
        } finally {
            h = M
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, U) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var M = h;
        h = j;
        try {
            return U()
        } finally {
            h = M
        }
    }, e.unstable_scheduleCallback = function(j, U, M) {
        var q = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? q + M : q) : M = q, j) {
            case 1:
                var ee = -1;
                break;
            case 2:
                ee = 250;
                break;
            case 5:
                ee = 1073741823;
                break;
            case 4:
                ee = 1e4;
                break;
            default:
                ee = 5e3
        }
        return ee = M + ee, j = {
            id: d++,
            callback: U,
            priorityLevel: j,
            startTime: M,
            expirationTime: ee,
            sortIndex: -1
        }, M > q ? (j.sortIndex = M, t(u, j), r(l) === null && j === r(u) && (x ? (p(A), A = -1) : x = !0, be(w, M - q))) : (j.sortIndex = ee, t(l, j), v || y || (v = !0, ge(C))), j
    }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(j) {
        var U = h;
        return function() {
            var M = h;
            h = U;
            try {
                return j.apply(this, arguments)
            } finally {
                h = M
            }
        }
    }
})(Ju);
Ku.exports = Ju;
var um = Ku.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dm = k,
    qe = um;

function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Qu = new Set,
    Qn = {};

function _r(e, t) {
    en(e, t), en(e + "Capture", t)
}

function en(e, t) {
    for (Qn[e] = t, e = 0; e < t.length; e++) Qu.add(t[e])
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Go = Object.prototype.hasOwnProperty,
    hm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ac = {},
    lc = {};

function fm(e) {
    return Go.call(lc, e) ? !0 : Go.call(ac, e) ? !1 : hm.test(e) ? lc[e] = !0 : (ac[e] = !0, !1)
}

function mm(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function pm(e, t, r, n) {
    if (t === null || typeof t > "u" || mm(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function $e(e, t, r, n, s, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    we[e] = new $e(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    we[t] = new $e(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    we[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    we[e] = new $e(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    we[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    we[e] = new $e(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    we[e] = new $e(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    we[e] = new $e(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    we[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var sl = /[\-:]([a-z])/g;

function il(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(sl, il);
    we[t] = new $e(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(sl, il);
    we[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(sl, il);
    we[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    we[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
we.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    we[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ol(e, t, r, n) {
    var s = we.hasOwnProperty(t) ? we[t] : null;
    (s !== null ? s.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pm(t, r, s, n) && (r = null), n || s === null ? fm(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : s.mustUseProperty ? e[s.propertyName] = r === null ? s.type === 3 ? !1 : "" : r : (t = s.attributeName, n = s.attributeNamespace, r === null ? e.removeAttribute(t) : (s = s.type, r = s === 3 || s === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Lt = dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Cs = Symbol.for("react.element"),
    Ar = Symbol.for("react.portal"),
    Or = Symbol.for("react.fragment"),
    al = Symbol.for("react.strict_mode"),
    Ko = Symbol.for("react.profiler"),
    Yu = Symbol.for("react.provider"),
    Xu = Symbol.for("react.context"),
    ll = Symbol.for("react.forward_ref"),
    Jo = Symbol.for("react.suspense"),
    Qo = Symbol.for("react.suspense_list"),
    cl = Symbol.for("react.memo"),
    It = Symbol.for("react.lazy"),
    Zu = Symbol.for("react.offscreen"),
    cc = Symbol.iterator;

function yn(e) {
    return e === null || typeof e != "object" ? null : (e = cc && e[cc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var se = Object.assign,
    po;

function $n(e) {
    if (po === void 0) try {
        throw Error()
    } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        po = t && t[1] || ""
    }
    return `
` + po + e
}
var go = !1;

function yo(e, t) {
    if (!e || go) return "";
    go = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    n = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), i = n.stack.split(`
`), a = s.length - 1, c = i.length - 1; 1 <= a && 0 <= c && s[a] !== i[c];) c--;
            for (; 1 <= a && 0 <= c; a--, c--)
                if (s[a] !== i[c]) {
                    if (a !== 1 || c !== 1)
                        do
                            if (a--, c--, 0 > c || s[a] !== i[c]) {
                                var l = `
` + s[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            } while (1 <= a && 0 <= c);
                    break
                }
        }
    } finally {
        go = !1, Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? $n(e) : ""
}

function gm(e) {
    switch (e.tag) {
        case 5:
            return $n(e.type);
        case 16:
            return $n("Lazy");
        case 13:
            return $n("Suspense");
        case 19:
            return $n("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = yo(e.type, !1), e;
        case 11:
            return e = yo(e.type.render, !1), e;
        case 1:
            return e = yo(e.type, !0), e;
        default:
            return ""
    }
}

function Yo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Or:
            return "Fragment";
        case Ar:
            return "Portal";
        case Ko:
            return "Profiler";
        case al:
            return "StrictMode";
        case Jo:
            return "Suspense";
        case Qo:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Xu:
            return (e.displayName || "Context") + ".Consumer";
        case Yu:
            return (e._context.displayName || "Context") + ".Provider";
        case ll:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case cl:
            return t = e.displayName || null, t !== null ? t : Yo(e.type) || "Memo";
        case It:
            t = e._payload, e = e._init;
            try {
                return Yo(e(t))
            } catch {}
    }
    return null
}

function ym(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Yo(t);
        case 8:
            return t === al ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function tr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ed(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function xm(e) {
    var t = ed(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var s = r.get,
            i = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(a) {
                n = "" + a, i.call(this, a)
            }
        }), Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }), {
            getValue: function() {
                return n
            },
            setValue: function(a) {
                n = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ps(e) {
    e._valueTracker || (e._valueTracker = xm(e))
}

function td(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
        n = "";
    return e && (n = ed(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
}

function li(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Xo(e, t) {
    var r = t.checked;
    return se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}

function uc(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
    r = tr(t.value != null ? t.value : r), e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function rd(e, t) {
    t = t.checked, t != null && ol(e, "checked", t, !1)
}

function Zo(e, t) {
    rd(e, t);
    var r = tr(t.value),
        n = t.type;
    if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ea(e, t.type, r) : t.hasOwnProperty("defaultValue") && ea(e, t.type, tr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function dc(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function ea(e, t, r) {
    (t !== "number" || li(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Ln = Array.isArray;

function Gr(e, t, r, n) {
    if (e = e.options, t) {
        t = {};
        for (var s = 0; s < r.length; s++) t["$" + r[s]] = !0;
        for (r = 0; r < e.length; r++) s = t.hasOwnProperty("$" + e[r].value), e[r].selected !== s && (e[r].selected = s), s && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + tr(r), t = null, s = 0; s < e.length; s++) {
            if (e[s].value === r) {
                e[s].selected = !0, n && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}

function ta(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
    return se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function hc(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children, t = t.defaultValue, r != null) {
            if (t != null) throw Error(P(92));
            if (Ln(r)) {
                if (1 < r.length) throw Error(P(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""), r = t
    }
    e._wrapperState = {
        initialValue: tr(r)
    }
}

function nd(e, t) {
    var r = tr(t.value),
        n = tr(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
}

function fc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function sd(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ra(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? sd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Es, id = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, s)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Es = Es || document.createElement("div"), Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Es.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Yn(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Un = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    vm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Un).forEach(function(e) {
    vm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Un[t] = Un[e]
    })
});

function od(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px"
}

function ad(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0,
                s = od(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e.setProperty(r, s) : e[r] = s
        }
}
var wm = se({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function na(e, t) {
    if (t) {
        if (wm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(P(62))
    }
}

function sa(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ia = null;

function ul(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var oa = null,
    Kr = null,
    Jr = null;

function mc(e) {
    if (e = xs(e)) {
        if (typeof oa != "function") throw Error(P(280));
        var t = e.stateNode;
        t && (t = Hi(t), oa(e.stateNode, e.type, t))
    }
}

function ld(e) {
    Kr ? Jr ? Jr.push(e) : Jr = [e] : Kr = e
}

function cd() {
    if (Kr) {
        var e = Kr,
            t = Jr;
        if (Jr = Kr = null, mc(e), t)
            for (e = 0; e < t.length; e++) mc(t[e])
    }
}

function ud(e, t) {
    return e(t)
}

function dd() {}
var xo = !1;

function hd(e, t, r) {
    if (xo) return e(t, r);
    xo = !0;
    try {
        return ud(e, t, r)
    } finally {
        xo = !1, (Kr !== null || Jr !== null) && (dd(), cd())
    }
}

function Xn(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = Hi(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(P(231, t, typeof r));
    return r
}
var aa = !1;
if (St) try {
    var xn = {};
    Object.defineProperty(xn, "passive", {
        get: function() {
            aa = !0
        }
    }), window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn)
} catch {
    aa = !1
}

function jm(e, t, r, n, s, i, a, c, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (d) {
        this.onError(d)
    }
}
var In = !1,
    ci = null,
    ui = !1,
    la = null,
    bm = {
        onError: function(e) {
            In = !0, ci = e
        }
    };

function km(e, t, r, n, s, i, a, c, l) {
    In = !1, ci = null, jm.apply(bm, arguments)
}

function Nm(e, t, r, n, s, i, a, c, l) {
    if (km.apply(this, arguments), In) {
        if (In) {
            var u = ci;
            In = !1, ci = null
        } else throw Error(P(198));
        ui || (ui = !0, la = u)
    }
}

function Sr(e) {
    var t = e,
        r = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (r = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? r : null
}

function fd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function pc(e) {
    if (Sr(e) !== e) throw Error(P(188))
}

function _m(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Sr(e), t === null) throw Error(P(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t;;) {
        var s = r.return;
        if (s === null) break;
        var i = s.alternate;
        if (i === null) {
            if (n = s.return, n !== null) {
                r = n;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i;) {
                if (i === r) return pc(s), e;
                if (i === n) return pc(s), t;
                i = i.sibling
            }
            throw Error(P(188))
        }
        if (r.return !== n.return) r = s, n = i;
        else {
            for (var a = !1, c = s.child; c;) {
                if (c === r) {
                    a = !0, r = s, n = i;
                    break
                }
                if (c === n) {
                    a = !0, n = s, r = i;
                    break
                }
                c = c.sibling
            }
            if (!a) {
                for (c = i.child; c;) {
                    if (c === r) {
                        a = !0, r = i, n = s;
                        break
                    }
                    if (c === n) {
                        a = !0, n = i, r = s;
                        break
                    }
                    c = c.sibling
                }
                if (!a) throw Error(P(189))
            }
        }
        if (r.alternate !== n) throw Error(P(190))
    }
    if (r.tag !== 3) throw Error(P(188));
    return r.stateNode.current === r ? e : t
}

function md(e) {
    return e = _m(e), e !== null ? pd(e) : null
}

function pd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = pd(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var gd = qe.unstable_scheduleCallback,
    gc = qe.unstable_cancelCallback,
    Sm = qe.unstable_shouldYield,
    Cm = qe.unstable_requestPaint,
    ae = qe.unstable_now,
    Pm = qe.unstable_getCurrentPriorityLevel,
    dl = qe.unstable_ImmediatePriority,
    yd = qe.unstable_UserBlockingPriority,
    di = qe.unstable_NormalPriority,
    Em = qe.unstable_LowPriority,
    xd = qe.unstable_IdlePriority,
    Mi = null,
    gt = null;

function Tm(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function") try {
        gt.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : Rm,
    $m = Math.log,
    Lm = Math.LN2;

function Rm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - ($m(e) / Lm | 0) | 0
}
var Ts = 64,
    $s = 4194304;

function Rn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function hi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
        s = e.suspendedLanes,
        i = e.pingedLanes,
        a = r & 268435455;
    if (a !== 0) {
        var c = a & ~s;
        c !== 0 ? n = Rn(c) : (i &= a, i !== 0 && (n = Rn(i)))
    } else a = r & ~s, a !== 0 ? n = Rn(a) : i !== 0 && (n = Rn(i));
    if (n === 0) return 0;
    if (t !== 0 && t !== n && !(t & s) && (s = n & -n, i = t & -t, s >= i || s === 16 && (i & 4194240) !== 0)) return t;
    if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= n; 0 < t;) r = 31 - lt(t), s = 1 << r, n |= e[r], t &= ~s;
    return n
}

function Am(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Om(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var a = 31 - lt(i),
            c = 1 << a,
            l = s[a];
        l === -1 ? (!(c & r) || c & n) && (s[a] = Am(c, t)) : l <= t && (e.expiredLanes |= c), i &= ~c
    }
}

function ca(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function vd() {
    var e = Ts;
    return Ts <<= 1, !(Ts & 4194240) && (Ts = 64), e
}

function vo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t
}

function gs(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = r
}

function Dm(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
        var s = 31 - lt(r),
            i = 1 << s;
        t[s] = 0, n[s] = -1, e[s] = -1, r &= ~i
    }
}

function hl(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r;) {
        var n = 31 - lt(r),
            s = 1 << n;
        s & t | e[n] & t && (e[n] |= t), r &= ~s
    }
}
var G = 0;

function wd(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var jd, fl, bd, kd, Nd, ua = !1,
    Ls = [],
    Gt = null,
    Kt = null,
    Jt = null,
    Zn = new Map,
    es = new Map,
    Ft = [],
    Um = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function yc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Gt = null;
            break;
        case "dragenter":
        case "dragleave":
            Kt = null;
            break;
        case "mouseover":
        case "mouseout":
            Jt = null;
            break;
        case "pointerover":
        case "pointerout":
            Zn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            es.delete(t.pointerId)
    }
}

function vn(e, t, r, n, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s]
    }, t !== null && (t = xs(t), t !== null && fl(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e)
}

function Im(e, t, r, n, s) {
    switch (t) {
        case "focusin":
            return Gt = vn(Gt, e, t, r, n, s), !0;
        case "dragenter":
            return Kt = vn(Kt, e, t, r, n, s), !0;
        case "mouseover":
            return Jt = vn(Jt, e, t, r, n, s), !0;
        case "pointerover":
            var i = s.pointerId;
            return Zn.set(i, vn(Zn.get(i) || null, e, t, r, n, s)), !0;
        case "gotpointercapture":
            return i = s.pointerId, es.set(i, vn(es.get(i) || null, e, t, r, n, s)), !0
    }
    return !1
}

function _d(e) {
    var t = mr(e.target);
    if (t !== null) {
        var r = Sr(t);
        if (r !== null) {
            if (t = r.tag, t === 13) {
                if (t = fd(r), t !== null) {
                    e.blockedOn = t, Nd(e.priority, function() {
                        bd(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var r = da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type, r);
            ia = n, r.target.dispatchEvent(n), ia = null
        } else return t = xs(r), t !== null && fl(t), e.blockedOn = r, !1;
        t.shift()
    }
    return !0
}

function xc(e, t, r) {
    Ys(e) && r.delete(t)
}

function Mm() {
    ua = !1, Gt !== null && Ys(Gt) && (Gt = null), Kt !== null && Ys(Kt) && (Kt = null), Jt !== null && Ys(Jt) && (Jt = null), Zn.forEach(xc), es.forEach(xc)
}

function wn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ua || (ua = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Mm)))
}

function ts(e) {
    function t(s) {
        return wn(s, e)
    }
    if (0 < Ls.length) {
        wn(Ls[0], e);
        for (var r = 1; r < Ls.length; r++) {
            var n = Ls[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Gt !== null && wn(Gt, e), Kt !== null && wn(Kt, e), Jt !== null && wn(Jt, e), Zn.forEach(t), es.forEach(t), r = 0; r < Ft.length; r++) n = Ft[r], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Ft.length && (r = Ft[0], r.blockedOn === null);) _d(r), r.blockedOn === null && Ft.shift()
}
var Qr = Lt.ReactCurrentBatchConfig,
    fi = !0;

function zm(e, t, r, n) {
    var s = G,
        i = Qr.transition;
    Qr.transition = null;
    try {
        G = 1, ml(e, t, r, n)
    } finally {
        G = s, Qr.transition = i
    }
}

function Fm(e, t, r, n) {
    var s = G,
        i = Qr.transition;
    Qr.transition = null;
    try {
        G = 4, ml(e, t, r, n)
    } finally {
        G = s, Qr.transition = i
    }
}

function ml(e, t, r, n) {
    if (fi) {
        var s = da(e, t, r, n);
        if (s === null) Eo(e, t, n, mi, r), yc(e, n);
        else if (Im(s, e, t, r, n)) n.stopPropagation();
        else if (yc(e, n), t & 4 && -1 < Um.indexOf(e)) {
            for (; s !== null;) {
                var i = xs(s);
                if (i !== null && jd(i), i = da(e, t, r, n), i === null && Eo(e, t, n, mi, r), i === s) break;
                s = i
            }
            s !== null && n.stopPropagation()
        } else Eo(e, t, n, null, r)
    }
}
var mi = null;

function da(e, t, r, n) {
    if (mi = null, e = ul(n), e = mr(e), e !== null)
        if (t = Sr(e), t === null) e = null;
        else if (r = t.tag, r === 13) {
        if (e = fd(t), e !== null) return e;
        e = null
    } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return mi = e, null
}

function Sd(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Pm()) {
                case dl:
                    return 1;
                case yd:
                    return 4;
                case di:
                case Em:
                    return 16;
                case xd:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var qt = null,
    pl = null,
    Xs = null;

function Cd() {
    if (Xs) return Xs;
    var e, t = pl,
        r = t.length,
        n, s = "value" in qt ? qt.value : qt.textContent,
        i = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++);
    var a = r - e;
    for (n = 1; n <= a && t[r - n] === s[i - n]; n++);
    return Xs = s.slice(e, 1 < n ? 1 - n : void 0)
}

function Zs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Rs() {
    return !0
}

function vc() {
    return !1
}

function Ge(e) {
    function t(r, n, s, i, a) {
        this._reactName = r, this._targetInst = s, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
        for (var c in e) e.hasOwnProperty(c) && (r = e[c], this[c] = r ? r(i) : i[c]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Rs : vc, this.isPropagationStopped = vc, this
    }
    return se(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Rs)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Rs)
        },
        persist: function() {},
        isPersistent: Rs
    }), t
}
var dn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    gl = Ge(dn),
    ys = se({}, dn, {
        view: 0,
        detail: 0
    }),
    Bm = Ge(ys),
    wo, jo, jn, zi = se({}, ys, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: yl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (wo = e.screenX - jn.screenX, jo = e.screenY - jn.screenY) : jo = wo = 0, jn = e), wo)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : jo
        }
    }),
    wc = Ge(zi),
    Hm = se({}, zi, {
        dataTransfer: 0
    }),
    Vm = Ge(Hm),
    qm = se({}, ys, {
        relatedTarget: 0
    }),
    bo = Ge(qm),
    Wm = se({}, dn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Gm = Ge(Wm),
    Km = se({}, dn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Jm = Ge(Km),
    Qm = se({}, dn, {
        data: 0
    }),
    jc = Ge(Qm),
    Ym = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Xm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Zm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function ep(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1
}

function yl() {
    return ep
}
var tp = se({}, ys, {
        key: function(e) {
            if (e.key) {
                var t = Ym[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Zs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xm[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: yl,
        charCode: function(e) {
            return e.type === "keypress" ? Zs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    rp = Ge(tp),
    np = se({}, zi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    bc = Ge(np),
    sp = se({}, ys, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: yl
    }),
    ip = Ge(sp),
    op = se({}, dn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ap = Ge(op),
    lp = se({}, zi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    cp = Ge(lp),
    up = [9, 13, 27, 32],
    xl = St && "CompositionEvent" in window,
    Mn = null;
St && "documentMode" in document && (Mn = document.documentMode);
var dp = St && "TextEvent" in window && !Mn,
    Pd = St && (!xl || Mn && 8 < Mn && 11 >= Mn),
    kc = " ",
    Nc = !1;

function Ed(e, t) {
    switch (e) {
        case "keyup":
            return up.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Td(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Dr = !1;

function hp(e, t) {
    switch (e) {
        case "compositionend":
            return Td(t);
        case "keypress":
            return t.which !== 32 ? null : (Nc = !0, kc);
        case "textInput":
            return e = t.data, e === kc && Nc ? null : e;
        default:
            return null
    }
}

function fp(e, t) {
    if (Dr) return e === "compositionend" || !xl && Ed(e, t) ? (e = Cd(), Xs = pl = qt = null, Dr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Pd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var mp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function _c(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mp[e.type] : t === "textarea"
}

function $d(e, t, r, n) {
    ld(n), t = pi(t, "onChange"), 0 < t.length && (r = new gl("onChange", "change", null, r, n), e.push({
        event: r,
        listeners: t
    }))
}
var zn = null,
    rs = null;

function pp(e) {
    Bd(e, 0)
}

function Fi(e) {
    var t = Mr(e);
    if (td(t)) return e
}

function gp(e, t) {
    if (e === "change") return t
}
var Ld = !1;
if (St) {
    var ko;
    if (St) {
        var No = "oninput" in document;
        if (!No) {
            var Sc = document.createElement("div");
            Sc.setAttribute("oninput", "return;"), No = typeof Sc.oninput == "function"
        }
        ko = No
    } else ko = !1;
    Ld = ko && (!document.documentMode || 9 < document.documentMode)
}

function Cc() {
    zn && (zn.detachEvent("onpropertychange", Rd), rs = zn = null)
}

function Rd(e) {
    if (e.propertyName === "value" && Fi(rs)) {
        var t = [];
        $d(t, rs, e, ul(e)), hd(pp, t)
    }
}

function yp(e, t, r) {
    e === "focusin" ? (Cc(), zn = t, rs = r, zn.attachEvent("onpropertychange", Rd)) : e === "focusout" && Cc()
}

function xp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fi(rs)
}

function vp(e, t) {
    if (e === "click") return Fi(t)
}

function wp(e, t) {
    if (e === "input" || e === "change") return Fi(t)
}

function jp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ut = typeof Object.is == "function" ? Object.is : jp;

function ns(e, t) {
    if (ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
        n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
        var s = r[n];
        if (!Go.call(t, s) || !ut(e[s], t[s])) return !1
    }
    return !0
}

function Pc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Ec(e, t) {
    var r = Pc(e);
    e = 0;
    for (var n; r;) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
                node: r,
                offset: t - e
            };
            e = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Pc(r)
    }
}

function Ad(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ad(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Od() {
    for (var e = window, t = li(); t instanceof e.HTMLIFrameElement;) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r) e = t.contentWindow;
        else break;
        t = li(e.document)
    }
    return t
}

function vl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function bp(e) {
    var t = Od(),
        r = e.focusedElem,
        n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Ad(r.ownerDocument.documentElement, r)) {
        if (n !== null && vl(r)) {
            if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var s = r.textContent.length,
                    i = Math.min(n.start, s);
                n = n.end === void 0 ? i : Math.min(n.end, s), !e.extend && i > n && (s = n, n = i, i = s), s = Ec(r, i);
                var a = Ec(r, n);
                s && a && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
            }
        }
        for (t = [], e = r; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var kp = St && "documentMode" in document && 11 >= document.documentMode,
    Ur = null,
    ha = null,
    Fn = null,
    fa = !1;

function Tc(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    fa || Ur == null || Ur !== li(n) || (n = Ur, "selectionStart" in n && vl(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }), Fn && ns(Fn, n) || (Fn = n, n = pi(ha, "onSelect"), 0 < n.length && (t = new gl("onSelect", "select", null, t, r), e.push({
        event: t,
        listeners: n
    }), t.target = Ur)))
}

function As(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
}
var Ir = {
        animationend: As("Animation", "AnimationEnd"),
        animationiteration: As("Animation", "AnimationIteration"),
        animationstart: As("Animation", "AnimationStart"),
        transitionend: As("Transition", "TransitionEnd")
    },
    _o = {},
    Dd = {};
St && (Dd = document.createElement("div").style, "AnimationEvent" in window || (delete Ir.animationend.animation, delete Ir.animationiteration.animation, delete Ir.animationstart.animation), "TransitionEvent" in window || delete Ir.transitionend.transition);

function Bi(e) {
    if (_o[e]) return _o[e];
    if (!Ir[e]) return e;
    var t = Ir[e],
        r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in Dd) return _o[e] = t[r];
    return e
}
var Ud = Bi("animationend"),
    Id = Bi("animationiteration"),
    Md = Bi("animationstart"),
    zd = Bi("transitionend"),
    Fd = new Map,
    $c = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function sr(e, t) {
    Fd.set(e, t), _r(t, [e])
}
for (var So = 0; So < $c.length; So++) {
    var Co = $c[So],
        Np = Co.toLowerCase(),
        _p = Co[0].toUpperCase() + Co.slice(1);
    sr(Np, "on" + _p)
}
sr(Ud, "onAnimationEnd");
sr(Id, "onAnimationIteration");
sr(Md, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(zd, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
_r("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_r("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_r("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_r("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_r("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Sp = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));

function Lc(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r, Nm(n, t, void 0, e), e.currentTarget = null
}

function Bd(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r],
            s = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = n.length - 1; 0 <= a; a--) {
                    var c = n[a],
                        l = c.instance,
                        u = c.currentTarget;
                    if (c = c.listener, l !== i && s.isPropagationStopped()) break e;
                    Lc(s, c, u), i = l
                } else
                    for (a = 0; a < n.length; a++) {
                        if (c = n[a], l = c.instance, u = c.currentTarget, c = c.listener, l !== i && s.isPropagationStopped()) break e;
                        Lc(s, c, u), i = l
                    }
        }
    }
    if (ui) throw e = la, ui = !1, la = null, e
}

function Q(e, t) {
    var r = t[xa];
    r === void 0 && (r = t[xa] = new Set);
    var n = e + "__bubble";
    r.has(n) || (Hd(t, e, 2, !1), r.add(n))
}

function Po(e, t, r) {
    var n = 0;
    t && (n |= 4), Hd(r, e, n, t)
}
var Os = "_reactListening" + Math.random().toString(36).slice(2);

function ss(e) {
    if (!e[Os]) {
        e[Os] = !0, Qu.forEach(function(r) {
            r !== "selectionchange" && (Sp.has(r) || Po(r, !1, e), Po(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Os] || (t[Os] = !0, Po("selectionchange", !1, t))
    }
}

function Hd(e, t, r, n) {
    switch (Sd(t)) {
        case 1:
            var s = zm;
            break;
        case 4:
            s = Fm;
            break;
        default:
            s = ml
    }
    r = s.bind(null, t, r, e), s = void 0, !aa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), n ? s !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: s
    }) : e.addEventListener(t, r, !0) : s !== void 0 ? e.addEventListener(t, r, {
        passive: s
    }) : e.addEventListener(t, r, !1)
}

function Eo(e, t, r, n, s) {
    var i = n;
    if (!(t & 1) && !(t & 2) && n !== null) e: for (;;) {
        if (n === null) return;
        var a = n.tag;
        if (a === 3 || a === 4) {
            var c = n.stateNode.containerInfo;
            if (c === s || c.nodeType === 8 && c.parentNode === s) break;
            if (a === 4)
                for (a = n.return; a !== null;) {
                    var l = a.tag;
                    if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === s || l.nodeType === 8 && l.parentNode === s)) return;
                    a = a.return
                }
            for (; c !== null;) {
                if (a = mr(c), a === null) return;
                if (l = a.tag, l === 5 || l === 6) {
                    n = i = a;
                    continue e
                }
                c = c.parentNode
            }
        }
        n = n.return
    }
    hd(function() {
        var u = i,
            d = ul(r),
            f = [];
        e: {
            var h = Fd.get(e);
            if (h !== void 0) {
                var y = gl,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (Zs(r) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = rp;
                        break;
                    case "focusin":
                        v = "focus", y = bo;
                        break;
                    case "focusout":
                        v = "blur", y = bo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = bo;
                        break;
                    case "click":
                        if (r.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = wc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Vm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = ip;
                        break;
                    case Ud:
                    case Id:
                    case Md:
                        y = Gm;
                        break;
                    case zd:
                        y = ap;
                        break;
                    case "scroll":
                        y = Bm;
                        break;
                    case "wheel":
                        y = cp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Jm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = bc
                }
                var x = (t & 4) !== 0,
                    b = !x && e === "scroll",
                    p = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var m = u, g; m !== null;) {
                    g = m;
                    var w = g.stateNode;
                    if (g.tag === 5 && w !== null && (g = w, p !== null && (w = Xn(m, p), w != null && x.push(is(m, w, g)))), b) break;
                    m = m.return
                }
                0 < x.length && (h = new y(h, v, null, r, d), f.push({
                    event: h,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && r !== ia && (v = r.relatedTarget || r.fromElement) && (mr(v) || v[Ct])) break e;
                if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (v = r.relatedTarget || r.toElement, y = u, v = v ? mr(v) : null, v !== null && (b = Sr(v), v !== b || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
                    if (x = wc, w = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (x = bc, w = "onPointerLeave", p = "onPointerEnter", m = "pointer"), b = y == null ? h : Mr(y), g = v == null ? h : Mr(v), h = new x(w, m + "leave", y, r, d), h.target = b, h.relatedTarget = g, w = null, mr(d) === u && (x = new x(p, m + "enter", v, r, d), x.target = g, x.relatedTarget = b, w = x), b = w, y && v) t: {
                        for (x = y, p = v, m = 0, g = x; g; g = Er(g)) m++;
                        for (g = 0, w = p; w; w = Er(w)) g++;
                        for (; 0 < m - g;) x = Er(x),
                        m--;
                        for (; 0 < g - m;) p = Er(p),
                        g--;
                        for (; m--;) {
                            if (x === p || p !== null && x === p.alternate) break t;
                            x = Er(x), p = Er(p)
                        }
                        x = null
                    }
                    else x = null;
                    y !== null && Rc(f, h, y, x, !1), v !== null && b !== null && Rc(f, b, v, x, !0)
                }
            }
            e: {
                if (h = u ? Mr(u) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var C = gp;
                else if (_c(h))
                    if (Ld) C = wp;
                    else {
                        C = xp;
                        var S = yp
                    }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = vp);
                if (C && (C = C(e, u))) {
                    $d(f, C, r, d);
                    break e
                }
                S && S(e, h, u),
                e === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && ea(h, "number", h.value)
            }
            switch (S = u ? Mr(u) : window, e) {
                case "focusin":
                    (_c(S) || S.contentEditable === "true") && (Ur = S, ha = u, Fn = null);
                    break;
                case "focusout":
                    Fn = ha = Ur = null;
                    break;
                case "mousedown":
                    fa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    fa = !1, Tc(f, r, d);
                    break;
                case "selectionchange":
                    if (kp) break;
                case "keydown":
                case "keyup":
                    Tc(f, r, d)
            }
            var E;
            if (xl) e: {
                switch (e) {
                    case "compositionstart":
                        var A = "onCompositionStart";
                        break e;
                    case "compositionend":
                        A = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        A = "onCompositionUpdate";
                        break e
                }
                A = void 0
            }
            else Dr ? Ed(e, r) && (A = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (A = "onCompositionStart");A && (Pd && r.locale !== "ko" && (Dr || A !== "onCompositionStart" ? A === "onCompositionEnd" && Dr && (E = Cd()) : (qt = d, pl = "value" in qt ? qt.value : qt.textContent, Dr = !0)), S = pi(u, A), 0 < S.length && (A = new jc(A, e, null, r, d), f.push({
                event: A,
                listeners: S
            }), E ? A.data = E : (E = Td(r), E !== null && (A.data = E)))),
            (E = dp ? hp(e, r) : fp(e, r)) && (u = pi(u, "onBeforeInput"), 0 < u.length && (d = new jc("onBeforeInput", "beforeinput", null, r, d), f.push({
                event: d,
                listeners: u
            }), d.data = E))
        }
        Bd(f, t)
    })
}

function is(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}

function pi(e, t) {
    for (var r = t + "Capture", n = []; e !== null;) {
        var s = e,
            i = s.stateNode;
        s.tag === 5 && i !== null && (s = i, i = Xn(e, r), i != null && n.unshift(is(e, i, s)), i = Xn(e, t), i != null && n.push(is(e, i, s))), e = e.return
    }
    return n
}

function Er(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Rc(e, t, r, n, s) {
    for (var i = t._reactName, a = []; r !== null && r !== n;) {
        var c = r,
            l = c.alternate,
            u = c.stateNode;
        if (l !== null && l === n) break;
        c.tag === 5 && u !== null && (c = u, s ? (l = Xn(r, i), l != null && a.unshift(is(r, l, c))) : s || (l = Xn(r, i), l != null && a.push(is(r, l, c)))), r = r.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var Cp = /\r\n?/g,
    Pp = /\u0000|\uFFFD/g;

function Ac(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cp, `
`).replace(Pp, "")
}

function Ds(e, t, r) {
    if (t = Ac(t), Ac(e) !== t && r) throw Error(P(425))
}

function gi() {}
var ma = null,
    pa = null;

function ga(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ya = typeof setTimeout == "function" ? setTimeout : void 0,
    Ep = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Oc = typeof Promise == "function" ? Promise : void 0,
    Tp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oc < "u" ? function(e) {
        return Oc.resolve(null).then(e).catch($p)
    } : ya;

function $p(e) {
    setTimeout(function() {
        throw e
    })
}

function To(e, t) {
    var r = t,
        n = 0;
    do {
        var s = r.nextSibling;
        if (e.removeChild(r), s && s.nodeType === 8)
            if (r = s.data, r === "/$") {
                if (n === 0) {
                    e.removeChild(s), ts(t);
                    return
                }
                n--
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = s
    } while (r);
    ts(t)
}

function Qt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Dc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e;
                t--
            } else r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var hn = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + hn,
    os = "__reactProps$" + hn,
    Ct = "__reactContainer$" + hn,
    xa = "__reactEvents$" + hn,
    Lp = "__reactListeners$" + hn,
    Rp = "__reactHandles$" + hn;

function mr(e) {
    var t = e[mt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
        if (t = r[Ct] || r[mt]) {
            if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                for (e = Dc(e); e !== null;) {
                    if (r = e[mt]) return r;
                    e = Dc(e)
                }
            return t
        }
        e = r, r = e.parentNode
    }
    return null
}

function xs(e) {
    return e = e[mt] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Mr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(P(33))
}

function Hi(e) {
    return e[os] || null
}
var va = [],
    zr = -1;

function ir(e) {
    return {
        current: e
    }
}

function Y(e) {
    0 > zr || (e.current = va[zr], va[zr] = null, zr--)
}

function J(e, t) {
    zr++, va[zr] = e.current, e.current = t
}
var rr = {},
    Se = ir(rr),
    De = ir(!1),
    wr = rr;

function tn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return rr;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var s = {},
        i;
    for (i in r) s[i] = t[i];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s
}

function Ue(e) {
    return e = e.childContextTypes, e != null
}

function yi() {
    Y(De), Y(Se)
}

function Uc(e, t, r) {
    if (Se.current !== rr) throw Error(P(168));
    J(Se, t), J(De, r)
}

function Vd(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var s in n)
        if (!(s in t)) throw Error(P(108, ym(e) || "Unknown", s));
    return se({}, r, n)
}

function xi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rr, wr = Se.current, J(Se, e), J(De, De.current), !0
}

function Ic(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(P(169));
    r ? (e = Vd(e, t, wr), n.__reactInternalMemoizedMergedChildContext = e, Y(De), Y(Se), J(Se, e)) : Y(De), J(De, r)
}
var bt = null,
    Vi = !1,
    $o = !1;

function qd(e) {
    bt === null ? bt = [e] : bt.push(e)
}

function Ap(e) {
    Vi = !0, qd(e)
}

function or() {
    if (!$o && bt !== null) {
        $o = !0;
        var e = 0,
            t = G;
        try {
            var r = bt;
            for (G = 1; e < r.length; e++) {
                var n = r[e];
                do n = n(!0); while (n !== null)
            }
            bt = null, Vi = !1
        } catch (s) {
            throw bt !== null && (bt = bt.slice(e + 1)), gd(dl, or), s
        } finally {
            G = t, $o = !1
        }
    }
    return null
}
var Fr = [],
    Br = 0,
    vi = null,
    wi = 0,
    Je = [],
    Qe = 0,
    jr = null,
    kt = 1,
    Nt = "";

function ur(e, t) {
    Fr[Br++] = wi, Fr[Br++] = vi, vi = e, wi = t
}

function Wd(e, t, r) {
    Je[Qe++] = kt, Je[Qe++] = Nt, Je[Qe++] = jr, jr = e;
    var n = kt;
    e = Nt;
    var s = 32 - lt(n) - 1;
    n &= ~(1 << s), r += 1;
    var i = 32 - lt(t) + s;
    if (30 < i) {
        var a = s - s % 5;
        i = (n & (1 << a) - 1).toString(32), n >>= a, s -= a, kt = 1 << 32 - lt(t) + s | r << s | n, Nt = i + e
    } else kt = 1 << i | r << s | n, Nt = e
}

function wl(e) {
    e.return !== null && (ur(e, 1), Wd(e, 1, 0))
}

function jl(e) {
    for (; e === vi;) vi = Fr[--Br], Fr[Br] = null, wi = Fr[--Br], Fr[Br] = null;
    for (; e === jr;) jr = Je[--Qe], Je[Qe] = null, Nt = Je[--Qe], Je[Qe] = null, kt = Je[--Qe], Je[Qe] = null
}
var Ve = null,
    He = null,
    Z = !1,
    at = null;

function Gd(e, t) {
    var r = Ye(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
}

function Mc(e, t) {
    switch (e.tag) {
        case 5:
            var r = e.type;
            return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, He = Qt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, He = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (r = jr !== null ? {
                id: kt,
                overflow: Nt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824
            }, r = Ye(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ve = e, He = null, !0) : !1;
        default:
            return !1
    }
}

function wa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ja(e) {
    if (Z) {
        var t = He;
        if (t) {
            var r = t;
            if (!Mc(e, t)) {
                if (wa(e)) throw Error(P(418));
                t = Qt(r.nextSibling);
                var n = Ve;
                t && Mc(e, t) ? Gd(n, r) : (e.flags = e.flags & -4097 | 2, Z = !1, Ve = e)
            }
        } else {
            if (wa(e)) throw Error(P(418));
            e.flags = e.flags & -4097 | 2, Z = !1, Ve = e
        }
    }
}

function zc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e
}

function Us(e) {
    if (e !== Ve) return !1;
    if (!Z) return zc(e), Z = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ga(e.type, e.memoizedProps)), t && (t = He)) {
        if (wa(e)) throw Kd(), Error(P(418));
        for (; t;) Gd(e, t), t = Qt(t.nextSibling)
    }
    if (zc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            He = Qt(e.nextSibling);
                            break e
                        }
                        t--
                    } else r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            He = null
        }
    } else He = Ve ? Qt(e.stateNode.nextSibling) : null;
    return !0
}

function Kd() {
    for (var e = He; e;) e = Qt(e.nextSibling)
}

function rn() {
    He = Ve = null, Z = !1
}

function bl(e) {
    at === null ? at = [e] : at.push(e)
}
var Op = Lt.ReactCurrentBatchConfig;

function bn(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(P(309));
                var n = r.stateNode
            }
            if (!n) throw Error(P(147, e));
            var s = n,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var c = s.refs;
                a === null ? delete c[i] : c[i] = a
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(P(284));
        if (!r._owner) throw Error(P(290, e))
    }
    return e
}

function Is(e, t) {
    throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Fc(e) {
    var t = e._init;
    return t(e._payload)
}

function Jd(e) {
    function t(p, m) {
        if (e) {
            var g = p.deletions;
            g === null ? (p.deletions = [m], p.flags |= 16) : g.push(m)
        }
    }

    function r(p, m) {
        if (!e) return null;
        for (; m !== null;) t(p, m), m = m.sibling;
        return null
    }

    function n(p, m) {
        for (p = new Map; m !== null;) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), m = m.sibling;
        return p
    }

    function s(p, m) {
        return p = er(p, m), p.index = 0, p.sibling = null, p
    }

    function i(p, m, g) {
        return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < m ? (p.flags |= 2, m) : g) : (p.flags |= 2, m)) : (p.flags |= 1048576, m)
    }

    function a(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function c(p, m, g, w) {
        return m === null || m.tag !== 6 ? (m = Io(g, p.mode, w), m.return = p, m) : (m = s(m, g), m.return = p, m)
    }

    function l(p, m, g, w) {
        var C = g.type;
        return C === Or ? d(p, m, g.props.children, w, g.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === It && Fc(C) === m.type) ? (w = s(m, g.props), w.ref = bn(p, m, g), w.return = p, w) : (w = oi(g.type, g.key, g.props, null, p.mode, w), w.ref = bn(p, m, g), w.return = p, w)
    }

    function u(p, m, g, w) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = Mo(g, p.mode, w), m.return = p, m) : (m = s(m, g.children || []), m.return = p, m)
    }

    function d(p, m, g, w, C) {
        return m === null || m.tag !== 7 ? (m = vr(g, p.mode, w, C), m.return = p, m) : (m = s(m, g), m.return = p, m)
    }

    function f(p, m, g) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = Io("" + m, p.mode, g), m.return = p, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Cs:
                    return g = oi(m.type, m.key, m.props, null, p.mode, g), g.ref = bn(p, null, m), g.return = p, g;
                case Ar:
                    return m = Mo(m, p.mode, g), m.return = p, m;
                case It:
                    var w = m._init;
                    return f(p, w(m._payload), g)
            }
            if (Ln(m) || yn(m)) return m = vr(m, p.mode, g, null), m.return = p, m;
            Is(p, m)
        }
        return null
    }

    function h(p, m, g, w) {
        var C = m !== null ? m.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : c(p, m, "" + g, w);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Cs:
                    return g.key === C ? l(p, m, g, w) : null;
                case Ar:
                    return g.key === C ? u(p, m, g, w) : null;
                case It:
                    return C = g._init, h(p, m, C(g._payload), w)
            }
            if (Ln(g) || yn(g)) return C !== null ? null : d(p, m, g, w, null);
            Is(p, g)
        }
        return null
    }

    function y(p, m, g, w, C) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(g) || null, c(m, p, "" + w, C);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Cs:
                    return p = p.get(w.key === null ? g : w.key) || null, l(m, p, w, C);
                case Ar:
                    return p = p.get(w.key === null ? g : w.key) || null, u(m, p, w, C);
                case It:
                    var S = w._init;
                    return y(p, m, g, S(w._payload), C)
            }
            if (Ln(w) || yn(w)) return p = p.get(g) || null, d(m, p, w, C, null);
            Is(m, w)
        }
        return null
    }

    function v(p, m, g, w) {
        for (var C = null, S = null, E = m, A = m = 0, T = null; E !== null && A < g.length; A++) {
            E.index > A ? (T = E, E = null) : T = E.sibling;
            var N = h(p, E, g[A], w);
            if (N === null) {
                E === null && (E = T);
                break
            }
            e && E && N.alternate === null && t(p, E), m = i(N, m, A), S === null ? C = N : S.sibling = N, S = N, E = T
        }
        if (A === g.length) return r(p, E), Z && ur(p, A), C;
        if (E === null) {
            for (; A < g.length; A++) E = f(p, g[A], w), E !== null && (m = i(E, m, A), S === null ? C = E : S.sibling = E, S = E);
            return Z && ur(p, A), C
        }
        for (E = n(p, E); A < g.length; A++) T = y(E, p, A, g[A], w), T !== null && (e && T.alternate !== null && E.delete(T.key === null ? A : T.key), m = i(T, m, A), S === null ? C = T : S.sibling = T, S = T);
        return e && E.forEach(function(D) {
            return t(p, D)
        }), Z && ur(p, A), C
    }

    function x(p, m, g, w) {
        var C = yn(g);
        if (typeof C != "function") throw Error(P(150));
        if (g = C.call(g), g == null) throw Error(P(151));
        for (var S = C = null, E = m, A = m = 0, T = null, N = g.next(); E !== null && !N.done; A++, N = g.next()) {
            E.index > A ? (T = E, E = null) : T = E.sibling;
            var D = h(p, E, N.value, w);
            if (D === null) {
                E === null && (E = T);
                break
            }
            e && E && D.alternate === null && t(p, E), m = i(D, m, A), S === null ? C = D : S.sibling = D, S = D, E = T
        }
        if (N.done) return r(p, E), Z && ur(p, A), C;
        if (E === null) {
            for (; !N.done; A++, N = g.next()) N = f(p, N.value, w), N !== null && (m = i(N, m, A), S === null ? C = N : S.sibling = N, S = N);
            return Z && ur(p, A), C
        }
        for (E = n(p, E); !N.done; A++, N = g.next()) N = y(E, p, A, N.value, w), N !== null && (e && N.alternate !== null && E.delete(N.key === null ? A : N.key), m = i(N, m, A), S === null ? C = N : S.sibling = N, S = N);
        return e && E.forEach(function(W) {
            return t(p, W)
        }), Z && ur(p, A), C
    }

    function b(p, m, g, w) {
        if (typeof g == "object" && g !== null && g.type === Or && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Cs:
                    e: {
                        for (var C = g.key, S = m; S !== null;) {
                            if (S.key === C) {
                                if (C = g.type, C === Or) {
                                    if (S.tag === 7) {
                                        r(p, S.sibling), m = s(S, g.props.children), m.return = p, p = m;
                                        break e
                                    }
                                } else if (S.elementType === C || typeof C == "object" && C !== null && C.$$typeof === It && Fc(C) === S.type) {
                                    r(p, S.sibling), m = s(S, g.props), m.ref = bn(p, S, g), m.return = p, p = m;
                                    break e
                                }
                                r(p, S);
                                break
                            } else t(p, S);
                            S = S.sibling
                        }
                        g.type === Or ? (m = vr(g.props.children, p.mode, w, g.key), m.return = p, p = m) : (w = oi(g.type, g.key, g.props, null, p.mode, w), w.ref = bn(p, m, g), w.return = p, p = w)
                    }
                    return a(p);
                case Ar:
                    e: {
                        for (S = g.key; m !== null;) {
                            if (m.key === S)
                                if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                                    r(p, m.sibling), m = s(m, g.children || []), m.return = p, p = m;
                                    break e
                                } else {
                                    r(p, m);
                                    break
                                }
                            else t(p, m);
                            m = m.sibling
                        }
                        m = Mo(g, p.mode, w),
                        m.return = p,
                        p = m
                    }
                    return a(p);
                case It:
                    return S = g._init, b(p, m, S(g._payload), w)
            }
            if (Ln(g)) return v(p, m, g, w);
            if (yn(g)) return x(p, m, g, w);
            Is(p, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (r(p, m.sibling), m = s(m, g), m.return = p, p = m) : (r(p, m), m = Io(g, p.mode, w), m.return = p, p = m), a(p)) : r(p, m)
    }
    return b
}
var nn = Jd(!0),
    Qd = Jd(!1),
    ji = ir(null),
    bi = null,
    Hr = null,
    kl = null;

function Nl() {
    kl = Hr = bi = null
}

function _l(e) {
    var t = ji.current;
    Y(ji), e._currentValue = t
}

function ba(e, t, r) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
        e = e.return
    }
}

function Yr(e, t) {
    bi = e, kl = Hr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null)
}

function et(e) {
    var t = e._currentValue;
    if (kl !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Hr === null) {
            if (bi === null) throw Error(P(308));
            Hr = e, bi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Hr = Hr.next = e;
    return t
}
var pr = null;

function Sl(e) {
    pr === null ? pr = [e] : pr.push(e)
}

function Yd(e, t, r, n) {
    var s = t.interleaved;
    return s === null ? (r.next = r, Sl(t)) : (r.next = s.next, s.next = r), t.interleaved = r, Pt(e, n)
}

function Pt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var Mt = !1;

function Cl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Xd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function _t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Yt(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, V & 2) {
        var s = n.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), n.pending = t, Pt(e, r)
    }
    return s = n.interleaved, s === null ? (t.next = t, Sl(n)) : (t.next = s.next, s.next = t), n.interleaved = t, Pt(e, r)
}

function ei(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, hl(e, r)
    }
}

function Bc(e, t) {
    var r = e.updateQueue,
        n = e.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
        var s = null,
            i = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var a = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? s = i = a : i = i.next = a, r = r.next
            } while (r !== null);
            i === null ? s = i = t : i = i.next = t
        } else s = i = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        }, e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
}

function ki(e, t, r, n) {
    var s = e.updateQueue;
    Mt = !1;
    var i = s.firstBaseUpdate,
        a = s.lastBaseUpdate,
        c = s.shared.pending;
    if (c !== null) {
        s.shared.pending = null;
        var l = c,
            u = l.next;
        l.next = null, a === null ? i = u : a.next = u, a = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, c = d.lastBaseUpdate, c !== a && (c === null ? d.firstBaseUpdate = u : c.next = u, d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var f = s.baseState;
        a = 0, d = u = l = null, c = i;
        do {
            var h = c.lane,
                y = c.eventTime;
            if ((n & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                });
                e: {
                    var v = e,
                        x = c;
                    switch (h = t, y = r, x.tag) {
                        case 1:
                            if (v = x.payload, typeof v == "function") {
                                f = v.call(y, f, h);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = x.payload, h = typeof v == "function" ? v.call(y, f, h) : v, h == null) break e;
                            f = se({}, f, h);
                            break e;
                        case 2:
                            Mt = !0
                    }
                }
                c.callback !== null && c.lane !== 0 && (e.flags |= 64, h = s.effects, h === null ? s.effects = [c] : h.push(c))
            } else y = {
                eventTime: y,
                lane: h,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null
            }, d === null ? (u = d = y, l = f) : d = d.next = y, a |= h;
            if (c = c.next, c === null) {
                if (c = s.shared.pending, c === null) break;
                h = c, c = h.next, h.next = null, s.lastBaseUpdate = h, s.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f), s.baseState = l, s.firstBaseUpdate = u, s.lastBaseUpdate = d, t = s.shared.interleaved, t !== null) {
            s = t;
            do a |= s.lane, s = s.next; while (s !== t)
        } else i === null && (s.shared.lanes = 0);
        kr |= a, e.lanes = a, e.memoizedState = f
    }
}

function Hc(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t],
                s = n.callback;
            if (s !== null) {
                if (n.callback = null, n = r, typeof s != "function") throw Error(P(191, s));
                s.call(n)
            }
        }
}
var vs = {},
    yt = ir(vs),
    as = ir(vs),
    ls = ir(vs);

function gr(e) {
    if (e === vs) throw Error(P(174));
    return e
}

function Pl(e, t) {
    switch (J(ls, t), J(as, e), J(yt, vs), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ra(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ra(t, e)
    }
    Y(yt), J(yt, t)
}

function sn() {
    Y(yt), Y(as), Y(ls)
}

function Zd(e) {
    gr(ls.current);
    var t = gr(yt.current),
        r = ra(t, e.type);
    t !== r && (J(as, e), J(yt, r))
}

function El(e) {
    as.current === e && (Y(yt), Y(as))
}
var re = ir(0);

function Ni(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Lo = [];

function Tl() {
    for (var e = 0; e < Lo.length; e++) Lo[e]._workInProgressVersionPrimary = null;
    Lo.length = 0
}
var ti = Lt.ReactCurrentDispatcher,
    Ro = Lt.ReactCurrentBatchConfig,
    br = 0,
    ne = null,
    ce = null,
    fe = null,
    _i = !1,
    Bn = !1,
    cs = 0,
    Dp = 0;

function ke() {
    throw Error(P(321))
}

function $l(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!ut(e[r], t[r])) return !1;
    return !0
}

function Ll(e, t, r, n, s, i) {
    if (br = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ti.current = e === null || e.memoizedState === null ? zp : Fp, e = r(n, s), Bn) {
        i = 0;
        do {
            if (Bn = !1, cs = 0, 25 <= i) throw Error(P(301));
            i += 1, fe = ce = null, t.updateQueue = null, ti.current = Bp, e = r(n, s)
        } while (Bn)
    }
    if (ti.current = Si, t = ce !== null && ce.next !== null, br = 0, fe = ce = ne = null, _i = !1, t) throw Error(P(300));
    return e
}

function Rl() {
    var e = cs !== 0;
    return cs = 0, e
}

function ft() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return fe === null ? ne.memoizedState = fe = e : fe = fe.next = e, fe
}

function tt() {
    if (ce === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ce.next;
    var t = fe === null ? ne.memoizedState : fe.next;
    if (t !== null) fe = t, ce = e;
    else {
        if (e === null) throw Error(P(310));
        ce = e, e = {
            memoizedState: ce.memoizedState,
            baseState: ce.baseState,
            baseQueue: ce.baseQueue,
            queue: ce.queue,
            next: null
        }, fe === null ? ne.memoizedState = fe = e : fe = fe.next = e
    }
    return fe
}

function us(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ao(e) {
    var t = tt(),
        r = t.queue;
    if (r === null) throw Error(P(311));
    r.lastRenderedReducer = e;
    var n = ce,
        s = n.baseQueue,
        i = r.pending;
    if (i !== null) {
        if (s !== null) {
            var a = s.next;
            s.next = i.next, i.next = a
        }
        n.baseQueue = s = i, r.pending = null
    }
    if (s !== null) {
        i = s.next, n = n.baseState;
        var c = a = null,
            l = null,
            u = i;
        do {
            var d = u.lane;
            if ((br & d) === d) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (c = l = f, a = n) : l = l.next = f, ne.lanes |= d, kr |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? a = n : l.next = c, ut(n, t.memoizedState) || (Oe = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n
    }
    if (e = r.interleaved, e !== null) {
        s = e;
        do i = s.lane, ne.lanes |= i, kr |= i, s = s.next; while (s !== e)
    } else s === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}

function Oo(e) {
    var t = tt(),
        r = t.queue;
    if (r === null) throw Error(P(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
        s = r.pending,
        i = t.memoizedState;
    if (s !== null) {
        r.pending = null;
        var a = s = s.next;
        do i = e(i, a.action), a = a.next; while (a !== s);
        ut(i, t.memoizedState) || (Oe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i
    }
    return [i, n]
}

function eh() {}

function th(e, t) {
    var r = ne,
        n = tt(),
        s = t(),
        i = !ut(n.memoizedState, s);
    if (i && (n.memoizedState = s, Oe = !0), n = n.queue, Al(sh.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || fe !== null && fe.memoizedState.tag & 1) {
        if (r.flags |= 2048, ds(9, nh.bind(null, r, n, s, t), void 0, null), pe === null) throw Error(P(349));
        br & 30 || rh(r, t, s)
    }
    return s
}

function rh(e, t, r) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: r
    }, t = ne.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ne.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e))
}

function nh(e, t, r, n) {
    t.value = r, t.getSnapshot = n, ih(t) && oh(e)
}

function sh(e, t, r) {
    return r(function() {
        ih(t) && oh(e)
    })
}

function ih(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !ut(e, r)
    } catch {
        return !0
    }
}

function oh(e) {
    var t = Pt(e, 1);
    t !== null && ct(t, e, 1, -1)
}

function Vc(e) {
    var t = ft();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: us,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Mp.bind(null, ne, e), [t.memoizedState, e]
}

function ds(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    }, t = ne.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ne.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
}

function ah() {
    return tt().memoizedState
}

function ri(e, t, r, n) {
    var s = ft();
    ne.flags |= e, s.memoizedState = ds(1 | t, r, void 0, n === void 0 ? null : n)
}

function qi(e, t, r, n) {
    var s = tt();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (ce !== null) {
        var a = ce.memoizedState;
        if (i = a.destroy, n !== null && $l(n, a.deps)) {
            s.memoizedState = ds(t, r, i, n);
            return
        }
    }
    ne.flags |= e, s.memoizedState = ds(1 | t, r, i, n)
}

function qc(e, t) {
    return ri(8390656, 8, e, t)
}

function Al(e, t) {
    return qi(2048, 8, e, t)
}

function lh(e, t) {
    return qi(4, 2, e, t)
}

function ch(e, t) {
    return qi(4, 4, e, t)
}

function uh(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function dh(e, t, r) {
    return r = r != null ? r.concat([e]) : null, qi(4, 4, uh.bind(null, t, e), r)
}

function Ol() {}

function hh(e, t) {
    var r = tt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && $l(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
}

function fh(e, t) {
    var r = tt();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && $l(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
}

function mh(e, t, r) {
    return br & 21 ? (ut(r, t) || (r = vd(), ne.lanes |= r, kr |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = r)
}

function Up(e, t) {
    var r = G;
    G = r !== 0 && 4 > r ? r : 4, e(!0);
    var n = Ro.transition;
    Ro.transition = {};
    try {
        e(!1), t()
    } finally {
        G = r, Ro.transition = n
    }
}

function ph() {
    return tt().memoizedState
}

function Ip(e, t, r) {
    var n = Zt(e);
    if (r = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, gh(e)) yh(t, r);
    else if (r = Yd(e, t, r, n), r !== null) {
        var s = Ee();
        ct(r, e, n, s), xh(r, t, n)
    }
}

function Mp(e, t, r) {
    var n = Zt(e),
        s = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (gh(e)) yh(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var a = t.lastRenderedState,
                c = i(a, r);
            if (s.hasEagerState = !0, s.eagerState = c, ut(c, a)) {
                var l = t.interleaved;
                l === null ? (s.next = s, Sl(t)) : (s.next = l.next, l.next = s), t.interleaved = s;
                return
            }
        } catch {} finally {}
        r = Yd(e, t, s, n), r !== null && (s = Ee(), ct(r, e, n, s), xh(r, t, n))
    }
}

function gh(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne
}

function yh(e, t) {
    Bn = _i = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
}

function xh(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, hl(e, r)
    }
}
var Si = {
        readContext: et,
        useCallback: ke,
        useContext: ke,
        useEffect: ke,
        useImperativeHandle: ke,
        useInsertionEffect: ke,
        useLayoutEffect: ke,
        useMemo: ke,
        useReducer: ke,
        useRef: ke,
        useState: ke,
        useDebugValue: ke,
        useDeferredValue: ke,
        useTransition: ke,
        useMutableSource: ke,
        useSyncExternalStore: ke,
        useId: ke,
        unstable_isNewReconciler: !1
    },
    zp = {
        readContext: et,
        useCallback: function(e, t) {
            return ft().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: et,
        useEffect: qc,
        useImperativeHandle: function(e, t, r) {
            return r = r != null ? r.concat([e]) : null, ri(4194308, 4, uh.bind(null, t, e), r)
        },
        useLayoutEffect: function(e, t) {
            return ri(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return ri(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var r = ft();
            return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
        },
        useReducer: function(e, t, r) {
            var n = ft();
            return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, n.queue = e, e = e.dispatch = Ip.bind(null, ne, e), [n.memoizedState, e]
        },
        useRef: function(e) {
            var t = ft();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Vc,
        useDebugValue: Ol,
        useDeferredValue: function(e) {
            return ft().memoizedState = e
        },
        useTransition: function() {
            var e = Vc(!1),
                t = e[0];
            return e = Up.bind(null, e[1]), ft().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, r) {
            var n = ne,
                s = ft();
            if (Z) {
                if (r === void 0) throw Error(P(407));
                r = r()
            } else {
                if (r = t(), pe === null) throw Error(P(349));
                br & 30 || rh(n, t, r)
            }
            s.memoizedState = r;
            var i = {
                value: r,
                getSnapshot: t
            };
            return s.queue = i, qc(sh.bind(null, n, i, e), [e]), n.flags |= 2048, ds(9, nh.bind(null, n, i, r, t), void 0, null), r
        },
        useId: function() {
            var e = ft(),
                t = pe.identifierPrefix;
            if (Z) {
                var r = Nt,
                    n = kt;
                r = (n & ~(1 << 32 - lt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = cs++, 0 < r && (t += "H" + r.toString(32)), t += ":"
            } else r = Dp++, t = ":" + t + "r" + r.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Fp = {
        readContext: et,
        useCallback: hh,
        useContext: et,
        useEffect: Al,
        useImperativeHandle: dh,
        useInsertionEffect: lh,
        useLayoutEffect: ch,
        useMemo: fh,
        useReducer: Ao,
        useRef: ah,
        useState: function() {
            return Ao(us)
        },
        useDebugValue: Ol,
        useDeferredValue: function(e) {
            var t = tt();
            return mh(t, ce.memoizedState, e)
        },
        useTransition: function() {
            var e = Ao(us)[0],
                t = tt().memoizedState;
            return [e, t]
        },
        useMutableSource: eh,
        useSyncExternalStore: th,
        useId: ph,
        unstable_isNewReconciler: !1
    },
    Bp = {
        readContext: et,
        useCallback: hh,
        useContext: et,
        useEffect: Al,
        useImperativeHandle: dh,
        useInsertionEffect: lh,
        useLayoutEffect: ch,
        useMemo: fh,
        useReducer: Oo,
        useRef: ah,
        useState: function() {
            return Oo(us)
        },
        useDebugValue: Ol,
        useDeferredValue: function(e) {
            var t = tt();
            return ce === null ? t.memoizedState = e : mh(t, ce.memoizedState, e)
        },
        useTransition: function() {
            var e = Oo(us)[0],
                t = tt().memoizedState;
            return [e, t]
        },
        useMutableSource: eh,
        useSyncExternalStore: th,
        useId: ph,
        unstable_isNewReconciler: !1
    };

function st(e, t) {
    if (e && e.defaultProps) {
        t = se({}, t), e = e.defaultProps;
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}

function ka(e, t, r, n) {
    t = e.memoizedState, r = r(n, t), r = r == null ? t : se({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Wi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Sr(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ee(),
            s = Zt(e),
            i = _t(n, s);
        i.payload = t, r != null && (i.callback = r), t = Yt(e, i, s), t !== null && (ct(t, e, s, n), ei(t, e, s))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = Ee(),
            s = Zt(e),
            i = _t(n, s);
        i.tag = 1, i.payload = t, r != null && (i.callback = r), t = Yt(e, i, s), t !== null && (ct(t, e, s, n), ei(t, e, s))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = Ee(),
            n = Zt(e),
            s = _t(r, n);
        s.tag = 2, t != null && (s.callback = t), t = Yt(e, s, n), t !== null && (ct(t, e, n, r), ei(t, e, n))
    }
};

function Wc(e, t, r, n, s, i, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !ns(r, n) || !ns(s, i) : !0
}

function vh(e, t, r) {
    var n = !1,
        s = rr,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = et(i) : (s = Ue(t) ? wr : Se.current, n = t.contextTypes, i = (n = n != null) ? tn(e, s) : rr), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wi, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Gc(e, t, r, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && Wi.enqueueReplaceState(t, t.state, null)
}

function Na(e, t, r, n) {
    var s = e.stateNode;
    s.props = r, s.state = e.memoizedState, s.refs = {}, Cl(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = et(i) : (i = Ue(t) ? wr : Se.current, s.context = tn(e, i)), s.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ka(e, t, i, r), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Wi.enqueueReplaceState(s, s.state, null), ki(e, r, s, n), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}

function on(e, t) {
    try {
        var r = "",
            n = t;
        do r += gm(n), n = n.return; while (n);
        var s = r
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}

function Do(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}

function _a(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var Hp = typeof WeakMap == "function" ? WeakMap : Map;

function wh(e, t, r) {
    r = _t(-1, r), r.tag = 3, r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        Pi || (Pi = !0, Oa = n), _a(e, t)
    }, r
}

function jh(e, t, r) {
    r = _t(-1, r), r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var s = t.value;
        r.payload = function() {
            return n(s)
        }, r.callback = function() {
            _a(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        _a(e, t), typeof n != "function" && (Xt === null ? Xt = new Set([this]) : Xt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }), r
}

function Kc(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new Hp;
        var s = new Set;
        n.set(t, s)
    } else s = n.get(t), s === void 0 && (s = new Set, n.set(t, s));
    s.has(r) || (s.add(r), e = n0.bind(null, e, t, r), t.then(e, e))
}

function Jc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Qc(e, t, r, n, s) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = _t(-1, 1), t.tag = 2, Yt(r, t, 1))), r.lanes |= 1), e)
}
var Vp = Lt.ReactCurrentOwner,
    Oe = !1;

function Ce(e, t, r, n) {
    t.child = e === null ? Qd(t, null, r, n) : nn(t, e.child, r, n)
}

function Yc(e, t, r, n, s) {
    r = r.render;
    var i = t.ref;
    return Yr(t, s), n = Ll(e, t, r, n, i, s), r = Rl(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Et(e, t, s)) : (Z && r && wl(t), t.flags |= 1, Ce(e, t, n, s), t.child)
}

function Xc(e, t, r, n, s) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !Hl(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, bh(e, t, i, n, s)) : (e = oi(r.type, null, n, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & s)) {
        var a = i.memoizedProps;
        if (r = r.compare, r = r !== null ? r : ns, r(a, n) && e.ref === t.ref) return Et(e, t, s)
    }
    return t.flags |= 1, e = er(i, n), e.ref = t.ref, e.return = t, t.child = e
}

function bh(e, t, r, n, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ns(i, n) && e.ref === t.ref)
            if (Oe = !1, t.pendingProps = n = i, (e.lanes & s) !== 0) e.flags & 131072 && (Oe = !0);
            else return t.lanes = e.lanes, Et(e, t, s)
    }
    return Sa(e, t, r, n, s)
}

function kh(e, t, r) {
    var n = t.pendingProps,
        s = n.children,
        i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, J(qr, Be), Be |= r;
        else {
            if (!(r & 1073741824)) return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, J(qr, Be), Be |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, n = i !== null ? i.baseLanes : r, J(qr, Be), Be |= n
        }
    else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, J(qr, Be), Be |= n;
    return Ce(e, t, s, r), t.child
}

function Nh(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
}

function Sa(e, t, r, n, s) {
    var i = Ue(r) ? wr : Se.current;
    return i = tn(t, i), Yr(t, s), r = Ll(e, t, r, n, i, s), n = Rl(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, Et(e, t, s)) : (Z && n && wl(t), t.flags |= 1, Ce(e, t, r, s), t.child)
}

function Zc(e, t, r, n, s) {
    if (Ue(r)) {
        var i = !0;
        xi(t)
    } else i = !1;
    if (Yr(t, s), t.stateNode === null) ni(e, t), vh(t, r, n), Na(t, r, n, s), n = !0;
    else if (e === null) {
        var a = t.stateNode,
            c = t.memoizedProps;
        a.props = c;
        var l = a.context,
            u = r.contextType;
        typeof u == "object" && u !== null ? u = et(u) : (u = Ue(r) ? wr : Se.current, u = tn(t, u));
        var d = r.getDerivedStateFromProps,
            f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== n || l !== u) && Gc(t, a, n, u), Mt = !1;
        var h = t.memoizedState;
        a.state = h, ki(t, n, a, s), l = t.memoizedState, c !== n || h !== l || De.current || Mt ? (typeof d == "function" && (ka(t, r, d, n), l = t.memoizedState), (c = Mt || Wc(t, r, c, n, h, l, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
    } else {
        a = t.stateNode, Xd(e, t), c = t.memoizedProps, u = t.type === t.elementType ? c : st(t.type, c), a.props = u, f = t.pendingProps, h = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = et(l) : (l = Ue(r) ? wr : Se.current, l = tn(t, l));
        var y = r.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== f || h !== l) && Gc(t, a, n, l), Mt = !1, h = t.memoizedState, a.state = h, ki(t, n, a, s);
        var v = t.memoizedState;
        c !== f || h !== v || De.current || Mt ? (typeof y == "function" && (ka(t, r, y, n), v = t.memoizedState), (u = Mt || Wc(t, r, u, n, h, v, l) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, v, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, v, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), a.props = n, a.state = v, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || c === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), n = !1)
    }
    return Ca(e, t, r, n, i, s)
}

function Ca(e, t, r, n, s, i) {
    Nh(e, t);
    var a = (t.flags & 128) !== 0;
    if (!n && !a) return s && Ic(t, r, !1), Et(e, t, i);
    n = t.stateNode, Vp.current = t;
    var c = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && a ? (t.child = nn(t, e.child, null, i), t.child = nn(t, null, c, i)) : Ce(e, t, c, i), t.memoizedState = n.state, s && Ic(t, r, !0), t.child
}

function _h(e) {
    var t = e.stateNode;
    t.pendingContext ? Uc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uc(e, t.context, !1), Pl(e, t.containerInfo)
}

function eu(e, t, r, n, s) {
    return rn(), bl(s), t.flags |= 256, Ce(e, t, r, n), t.child
}
var Pa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ea(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Sh(e, t, r) {
    var n = t.pendingProps,
        s = re.current,
        i = !1,
        a = (t.flags & 128) !== 0,
        c;
    if ((c = a) || (c = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), J(re, s & 1), e === null) return ja(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = {
        mode: "hidden",
        children: a
    }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Ji(a, n, 0, null), e = vr(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ea(r), t.memoizedState = Pa, e) : Dl(t, a));
    if (s = e.memoizedState, s !== null && (c = s.dehydrated, c !== null)) return qp(e, t, a, n, c, s, r);
    if (i) {
        i = n.fallback, a = t.mode, s = e.child, c = s.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(a & 1) && t.child !== s ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = er(s, l), n.subtreeFlags = s.subtreeFlags & 14680064), c !== null ? i = er(c, i) : (i = vr(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? Ea(r) : {
            baseLanes: a.baseLanes | r,
            cachePool: null,
            transitions: a.transitions
        }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = Pa, n
    }
    return i = e.child, e = i.sibling, n = er(i, {
        mode: "visible",
        children: n.children
    }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n
}

function Dl(e, t) {
    return t = Ji({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ms(e, t, r, n) {
    return n !== null && bl(n), nn(t, e.child, null, r), e = Dl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function qp(e, t, r, n, s, i, a) {
    if (r) return t.flags & 256 ? (t.flags &= -257, n = Do(Error(P(422))), Ms(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, s = t.mode, n = Ji({
        mode: "visible",
        children: n.children
    }, s, 0, null), i = vr(i, s, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && nn(t, e.child, null, a), t.child.memoizedState = Ea(a), t.memoizedState = Pa, i);
    if (!(t.mode & 1)) return Ms(e, t, a, null);
    if (s.data === "$!") {
        if (n = s.nextSibling && s.nextSibling.dataset, n) var c = n.dgst;
        return n = c, i = Error(P(419)), n = Do(i, n, void 0), Ms(e, t, a, n)
    }
    if (c = (a & e.childLanes) !== 0, Oe || c) {
        if (n = pe, n !== null) {
            switch (a & -a) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0
            }
            s = s & (n.suspendedLanes | a) ? 0 : s, s !== 0 && s !== i.retryLane && (i.retryLane = s, Pt(e, s), ct(n, e, s, -1))
        }
        return Bl(), n = Do(Error(P(421))), Ms(e, t, a, n)
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = s0.bind(null, e), s._reactRetry = t, null) : (e = i.treeContext, He = Qt(s.nextSibling), Ve = t, Z = !0, at = null, e !== null && (Je[Qe++] = kt, Je[Qe++] = Nt, Je[Qe++] = jr, kt = e.id, Nt = e.overflow, jr = t), t = Dl(t, n.children), t.flags |= 4096, t)
}

function tu(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), ba(e.return, t, r)
}

function Uo(e, t, r, n, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = s)
}

function Ch(e, t, r) {
    var n = t.pendingProps,
        s = n.revealOrder,
        i = n.tail;
    if (Ce(e, t, n.children, r), n = re.current, n & 2) n = n & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && tu(e, r, t);
            else if (e.tag === 19) tu(e, r, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        n &= 1
    }
    if (J(re, n), !(t.mode & 1)) t.memoizedState = null;
    else switch (s) {
        case "forwards":
            for (r = t.child, s = null; r !== null;) e = r.alternate, e !== null && Ni(e) === null && (s = r), r = r.sibling;
            r = s, r === null ? (s = t.child, t.child = null) : (s = r.sibling, r.sibling = null), Uo(t, !1, s, r, i);
            break;
        case "backwards":
            for (r = null, s = t.child, t.child = null; s !== null;) {
                if (e = s.alternate, e !== null && Ni(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling, s.sibling = r, r = s, s = e
            }
            Uo(t, !0, r, null, i);
            break;
        case "together":
            Uo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ni(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Et(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, !(r & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child, r = er(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = er(e, e.pendingProps), r.return = t;
        r.sibling = null
    }
    return t.child
}

function Wp(e, t, r) {
    switch (t.tag) {
        case 3:
            _h(t), rn();
            break;
        case 5:
            Zd(t);
            break;
        case 1:
            Ue(t.type) && xi(t);
            break;
        case 4:
            Pl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var n = t.type._context,
                s = t.memoizedProps.value;
            J(ji, n._currentValue), n._currentValue = s;
            break;
        case 13:
            if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (J(re, re.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Sh(e, t, r) : (J(re, re.current & 1), e = Et(e, t, r), e !== null ? e.sibling : null);
            J(re, re.current & 1);
            break;
        case 19:
            if (n = (r & t.childLanes) !== 0, e.flags & 128) {
                if (n) return Ch(e, t, r);
                t.flags |= 128
            }
            if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), J(re, re.current), n) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, kh(e, t, r)
    }
    return Et(e, t, r)
}
var Ph, Ta, Eh, Th;
Ph = function(e, t) {
    for (var r = t.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === t) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
Ta = function() {};
Eh = function(e, t, r, n) {
    var s = e.memoizedProps;
    if (s !== n) {
        e = t.stateNode, gr(yt.current);
        var i = null;
        switch (r) {
            case "input":
                s = Xo(e, s), n = Xo(e, n), i = [];
                break;
            case "select":
                s = se({}, s, {
                    value: void 0
                }), n = se({}, n, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                s = ta(e, s), n = ta(e, n), i = [];
                break;
            default:
                typeof s.onClick != "function" && typeof n.onClick == "function" && (e.onclick = gi)
        }
        na(r, n);
        var a;
        r = null;
        for (u in s)
            if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var c = s[u];
                    for (a in c) c.hasOwnProperty(a) && (r || (r = {}), r[a] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qn.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in n) {
            var l = n[u];
            if (c = s != null ? s[u] : void 0, n.hasOwnProperty(u) && l !== c && (l != null || c != null))
                if (u === "style")
                    if (c) {
                        for (a in c) !c.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
                        for (a in l) l.hasOwnProperty(a) && c[a] !== l[a] && (r || (r = {}), r[a] = l[a])
                    } else r || (i || (i = []), i.push(u, r)), r = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, l != null && c !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qn.hasOwnProperty(u) ? (l != null && u === "onScroll" && Q("scroll", e), i || c === l || (i = [])) : (i = i || []).push(u, l))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Th = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
};

function kn(e, t) {
    if (!Z) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
    }
}

function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
    if (t)
        for (var s = e.child; s !== null;) r |= s.lanes | s.childLanes, n |= s.subtreeFlags & 14680064, n |= s.flags & 14680064, s.return = e, s = s.sibling;
    else
        for (s = e.child; s !== null;) r |= s.lanes | s.childLanes, n |= s.subtreeFlags, n |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= n, e.childLanes = r, t
}

function Gp(e, t, r) {
    var n = t.pendingProps;
    switch (jl(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ne(t), null;
        case 1:
            return Ue(t.type) && yi(), Ne(t), null;
        case 3:
            return n = t.stateNode, sn(), Y(De), Y(Se), Tl(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Us(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, at !== null && (Ia(at), at = null))), Ta(e, t), Ne(t), null;
        case 5:
            El(t);
            var s = gr(ls.current);
            if (r = t.type, e !== null && t.stateNode != null) Eh(e, t, r, n, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!n) {
                    if (t.stateNode === null) throw Error(P(166));
                    return Ne(t), null
                }
                if (e = gr(yt.current), Us(t)) {
                    n = t.stateNode, r = t.type;
                    var i = t.memoizedProps;
                    switch (n[mt] = t, n[os] = i, e = (t.mode & 1) !== 0, r) {
                        case "dialog":
                            Q("cancel", n), Q("close", n);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Q("load", n);
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < An.length; s++) Q(An[s], n);
                            break;
                        case "source":
                            Q("error", n);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Q("error", n), Q("load", n);
                            break;
                        case "details":
                            Q("toggle", n);
                            break;
                        case "input":
                            uc(n, i), Q("invalid", n);
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, Q("invalid", n);
                            break;
                        case "textarea":
                            hc(n, i), Q("invalid", n)
                    }
                    na(r, i), s = null;
                    for (var a in i)
                        if (i.hasOwnProperty(a)) {
                            var c = i[a];
                            a === "children" ? typeof c == "string" ? n.textContent !== c && (i.suppressHydrationWarning !== !0 && Ds(n.textContent, c, e), s = ["children", c]) : typeof c == "number" && n.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && Ds(n.textContent, c, e), s = ["children", "" + c]) : Qn.hasOwnProperty(a) && c != null && a === "onScroll" && Q("scroll", n)
                        } switch (r) {
                        case "input":
                            Ps(n), dc(n, i, !0);
                            break;
                        case "textarea":
                            Ps(n), fc(n);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (n.onclick = gi)
                    }
                    n = s, t.updateQueue = n, n !== null && (t.flags |= 4)
                } else {
                    a = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sd(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, {
                        is: n.is
                    }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[mt] = t, e[os] = n, Ph(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (a = sa(r, n), r) {
                            case "dialog":
                                Q("cancel", e), Q("close", e), s = n;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Q("load", e), s = n;
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < An.length; s++) Q(An[s], e);
                                s = n;
                                break;
                            case "source":
                                Q("error", e), s = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Q("error", e), Q("load", e), s = n;
                                break;
                            case "details":
                                Q("toggle", e), s = n;
                                break;
                            case "input":
                                uc(e, n), s = Xo(e, n), Q("invalid", e);
                                break;
                            case "option":
                                s = n;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!n.multiple
                                }, s = se({}, n, {
                                    value: void 0
                                }), Q("invalid", e);
                                break;
                            case "textarea":
                                hc(e, n), s = ta(e, n), Q("invalid", e);
                                break;
                            default:
                                s = n
                        }
                        na(r, s),
                        c = s;
                        for (i in c)
                            if (c.hasOwnProperty(i)) {
                                var l = c[i];
                                i === "style" ? ad(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && id(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Yn(e, l) : typeof l == "number" && Yn(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qn.hasOwnProperty(i) ? l != null && i === "onScroll" && Q("scroll", e) : l != null && ol(e, i, l, a))
                            } switch (r) {
                            case "input":
                                Ps(e), dc(e, n, !1);
                                break;
                            case "textarea":
                                Ps(e), fc(e);
                                break;
                            case "option":
                                n.value != null && e.setAttribute("value", "" + tr(n.value));
                                break;
                            case "select":
                                e.multiple = !!n.multiple, i = n.value, i != null ? Gr(e, !!n.multiple, i, !1) : n.defaultValue != null && Gr(e, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (e.onclick = gi)
                        }
                        switch (r) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n = !!n.autoFocus;
                                break e;
                            case "img":
                                n = !0;
                                break e;
                            default:
                                n = !1
                        }
                    }
                    n && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Ne(t), null;
        case 6:
            if (e && t.stateNode != null) Th(e, t, e.memoizedProps, n);
            else {
                if (typeof n != "string" && t.stateNode === null) throw Error(P(166));
                if (r = gr(ls.current), gr(yt.current), Us(t)) {
                    if (n = t.stateNode, r = t.memoizedProps, n[mt] = t, (i = n.nodeValue !== r) && (e = Ve, e !== null)) switch (e.tag) {
                        case 3:
                            Ds(n.nodeValue, r, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ds(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[mt] = t, t.stateNode = n
            }
            return Ne(t), null;
        case 13:
            if (Y(re), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Z && He !== null && t.mode & 1 && !(t.flags & 128)) Kd(), rn(), t.flags |= 98560, i = !1;
                else if (i = Us(t), n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(P(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(P(317));
                        i[mt] = t
                    } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Ne(t), i = !1
                } else at !== null && (Ia(at), at = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? ue === 0 && (ue = 3) : Bl())), t.updateQueue !== null && (t.flags |= 4), Ne(t), null);
        case 4:
            return sn(), Ta(e, t), e === null && ss(t.stateNode.containerInfo), Ne(t), null;
        case 10:
            return _l(t.type._context), Ne(t), null;
        case 17:
            return Ue(t.type) && yi(), Ne(t), null;
        case 19:
            if (Y(re), i = t.memoizedState, i === null) return Ne(t), null;
            if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
                if (n) kn(i, !1);
                else {
                    if (ue !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (a = Ni(e), a !== null) {
                                for (t.flags |= 128, kn(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), r = r.sibling;
                                return J(re, re.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && ae() > an && (t.flags |= 128, n = !0, kn(i, !1), t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = Ni(a), e !== null) {
                        if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), kn(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Z) return Ne(t), null
                    } else 2 * ae() - i.renderingStartTime > an && r !== 1073741824 && (t.flags |= 128, n = !0, kn(i, !1), t.lanes = 4194304);
                i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, r = re.current, J(re, n ? r & 1 | 2 : r & 1), t) : (Ne(t), null);
        case 22:
        case 23:
            return Fl(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Be & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(P(156, t.tag))
}

function Kp(e, t) {
    switch (jl(t), t.tag) {
        case 1:
            return Ue(t.type) && yi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return sn(), Y(De), Y(Se), Tl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return El(t), null;
        case 13:
            if (Y(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(P(340));
                rn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Y(re), null;
        case 4:
            return sn(), null;
        case 10:
            return _l(t.type._context), null;
        case 22:
        case 23:
            return Fl(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var zs = !1,
    _e = !1,
    Jp = typeof WeakSet == "function" ? WeakSet : Set,
    R = null;

function Vr(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function") try {
            r(null)
        } catch (n) {
            ie(e, t, n)
        } else r.current = null
}

function $a(e, t, r) {
    try {
        r()
    } catch (n) {
        ie(e, t, n)
    }
}
var ru = !1;

function Qp(e, t) {
    if (ma = fi, e = Od(), vl(e)) {
        if ("selectionStart" in e) var r = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            r = (r = e.ownerDocument) && r.defaultView || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var s = n.anchorOffset,
                    i = n.focusNode;
                n = n.focusOffset;
                try {
                    r.nodeType, i.nodeType
                } catch {
                    r = null;
                    break e
                }
                var a = 0,
                    c = -1,
                    l = -1,
                    u = 0,
                    d = 0,
                    f = e,
                    h = null;
                t: for (;;) {
                    for (var y; f !== r || s !== 0 && f.nodeType !== 3 || (c = a + s), f !== i || n !== 0 && f.nodeType !== 3 || (l = a + n), f.nodeType === 3 && (a += f.nodeValue.length), (y = f.firstChild) !== null;) h = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (h === r && ++u === s && (c = a), h === i && ++d === n && (l = a), (y = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = y
                }
                r = c === -1 || l === -1 ? null : {
                    start: c,
                    end: l
                }
            } else r = null
        }
        r = r || {
            start: 0,
            end: 0
        }
    } else r = null;
    for (pa = {
            focusedElem: e,
            selectionRange: r
        }, fi = !1, R = t; R !== null;)
        if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
        else
            for (; R !== null;) {
                t = R;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps,
                                    b = v.memoizedState,
                                    p = t.stateNode,
                                    m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : st(t.type, x), b);
                                p.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                    }
                } catch (w) {
                    ie(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, R = e;
                    break
                }
                R = t.return
            }
    return v = ru, ru = !1, v
}

function Hn(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
        var s = n = n.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0, i !== void 0 && $a(t, r, i)
            }
            s = s.next
        } while (s !== n)
    }
}

function Gi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}

function La(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
            case 5:
                e = r;
                break;
            default:
                e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function $h(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $h(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[os], delete t[xa], delete t[Lp], delete t[Rp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Lh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function nu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Lh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ra(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = gi));
    else if (n !== 4 && (e = e.child, e !== null))
        for (Ra(e, t, r), e = e.sibling; e !== null;) Ra(e, t, r), e = e.sibling
}

function Aa(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child, e !== null))
        for (Aa(e, t, r), e = e.sibling; e !== null;) Aa(e, t, r), e = e.sibling
}
var xe = null,
    it = !1;

function Ot(e, t, r) {
    for (r = r.child; r !== null;) Rh(e, t, r), r = r.sibling
}

function Rh(e, t, r) {
    if (gt && typeof gt.onCommitFiberUnmount == "function") try {
        gt.onCommitFiberUnmount(Mi, r)
    } catch {}
    switch (r.tag) {
        case 5:
            _e || Vr(r, t);
        case 6:
            var n = xe,
                s = it;
            xe = null, Ot(e, t, r), xe = n, it = s, xe !== null && (it ? (e = xe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : xe.removeChild(r.stateNode));
            break;
        case 18:
            xe !== null && (it ? (e = xe, r = r.stateNode, e.nodeType === 8 ? To(e.parentNode, r) : e.nodeType === 1 && To(e, r), ts(e)) : To(xe, r.stateNode));
            break;
        case 4:
            n = xe, s = it, xe = r.stateNode.containerInfo, it = !0, Ot(e, t, r), xe = n, it = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!_e && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                s = n = n.next;
                do {
                    var i = s,
                        a = i.destroy;
                    i = i.tag, a !== void 0 && (i & 2 || i & 4) && $a(r, t, a), s = s.next
                } while (s !== n)
            }
            Ot(e, t, r);
            break;
        case 1:
            if (!_e && (Vr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
            } catch (c) {
                ie(r, t, c)
            }
            Ot(e, t, r);
            break;
        case 21:
            Ot(e, t, r);
            break;
        case 22:
            r.mode & 1 ? (_e = (n = _e) || r.memoizedState !== null, Ot(e, t, r), _e = n) : Ot(e, t, r);
            break;
        default:
            Ot(e, t, r)
    }
}

function su(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new Jp), t.forEach(function(n) {
            var s = i0.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(s, s))
        })
    }
}

function nt(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var s = r[n];
            try {
                var i = e,
                    a = t,
                    c = a;
                e: for (; c !== null;) {
                    switch (c.tag) {
                        case 5:
                            xe = c.stateNode, it = !1;
                            break e;
                        case 3:
                            xe = c.stateNode.containerInfo, it = !0;
                            break e;
                        case 4:
                            xe = c.stateNode.containerInfo, it = !0;
                            break e
                    }
                    c = c.return
                }
                if (xe === null) throw Error(P(160));
                Rh(i, a, s), xe = null, it = !1;
                var l = s.alternate;
                l !== null && (l.return = null), s.return = null
            } catch (u) {
                ie(s, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Ah(t, e), t = t.sibling
}

function Ah(e, t) {
    var r = e.alternate,
        n = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (nt(t, e), dt(e), n & 4) {
                try {
                    Hn(3, e, e.return), Gi(3, e)
                } catch (x) {
                    ie(e, e.return, x)
                }
                try {
                    Hn(5, e, e.return)
                } catch (x) {
                    ie(e, e.return, x)
                }
            }
            break;
        case 1:
            nt(t, e), dt(e), n & 512 && r !== null && Vr(r, r.return);
            break;
        case 5:
            if (nt(t, e), dt(e), n & 512 && r !== null && Vr(r, r.return), e.flags & 32) {
                var s = e.stateNode;
                try {
                    Yn(s, "")
                } catch (x) {
                    ie(e, e.return, x)
                }
            }
            if (n & 4 && (s = e.stateNode, s != null)) {
                var i = e.memoizedProps,
                    a = r !== null ? r.memoizedProps : i,
                    c = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    c === "input" && i.type === "radio" && i.name != null && rd(s, i), sa(c, a);
                    var u = sa(c, i);
                    for (a = 0; a < l.length; a += 2) {
                        var d = l[a],
                            f = l[a + 1];
                        d === "style" ? ad(s, f) : d === "dangerouslySetInnerHTML" ? id(s, f) : d === "children" ? Yn(s, f) : ol(s, d, f, u)
                    }
                    switch (c) {
                        case "input":
                            Zo(s, i);
                            break;
                        case "textarea":
                            nd(s, i);
                            break;
                        case "select":
                            var h = s._wrapperState.wasMultiple;
                            s._wrapperState.wasMultiple = !!i.multiple;
                            var y = i.value;
                            y != null ? Gr(s, !!i.multiple, y, !1) : h !== !!i.multiple && (i.defaultValue != null ? Gr(s, !!i.multiple, i.defaultValue, !0) : Gr(s, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    s[os] = i
                } catch (x) {
                    ie(e, e.return, x)
                }
            }
            break;
        case 6:
            if (nt(t, e), dt(e), n & 4) {
                if (e.stateNode === null) throw Error(P(162));
                s = e.stateNode, i = e.memoizedProps;
                try {
                    s.nodeValue = i
                } catch (x) {
                    ie(e, e.return, x)
                }
            }
            break;
        case 3:
            if (nt(t, e), dt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                ts(t.containerInfo)
            } catch (x) {
                ie(e, e.return, x)
            }
            break;
        case 4:
            nt(t, e), dt(e);
            break;
        case 13:
            nt(t, e), dt(e), s = e.child, s.flags & 8192 && (i = s.memoizedState !== null, s.stateNode.isHidden = i, !i || s.alternate !== null && s.alternate.memoizedState !== null || (Ml = ae())), n & 4 && su(e);
            break;
        case 22:
            if (d = r !== null && r.memoizedState !== null, e.mode & 1 ? (_e = (u = _e) || d, nt(t, e), _e = u) : nt(t, e), dt(e), n & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (R = e, d = e.child; d !== null;) {
                        for (f = R = d; R !== null;) {
                            switch (h = R, y = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hn(4, h, h.return);
                                    break;
                                case 1:
                                    Vr(h, h.return);
                                    var v = h.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        n = h, r = h.return;
                                        try {
                                            t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (x) {
                                            ie(n, r, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Vr(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        ou(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h, R = y) : ou(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                s = f.stateNode, u ? (i = s.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = f.stateNode, l = f.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, c.style.display = od("display", a))
                            } catch (x) {
                                ie(e, e.return, x)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            ie(e, e.return, x)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            nt(t, e), dt(e), n & 4 && su(e);
            break;
        case 21:
            break;
        default:
            nt(t, e), dt(e)
    }
}

function dt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null;) {
                    if (Lh(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(P(160))
            }
            switch (n.tag) {
                case 5:
                    var s = n.stateNode;
                    n.flags & 32 && (Yn(s, ""), n.flags &= -33);
                    var i = nu(e);
                    Aa(e, i, s);
                    break;
                case 3:
                case 4:
                    var a = n.stateNode.containerInfo,
                        c = nu(e);
                    Ra(e, c, a);
                    break;
                default:
                    throw Error(P(161))
            }
        }
        catch (l) {
            ie(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Yp(e, t, r) {
    R = e, Oh(e)
}

function Oh(e, t, r) {
    for (var n = (e.mode & 1) !== 0; R !== null;) {
        var s = R,
            i = s.child;
        if (s.tag === 22 && n) {
            var a = s.memoizedState !== null || zs;
            if (!a) {
                var c = s.alternate,
                    l = c !== null && c.memoizedState !== null || _e;
                c = zs;
                var u = _e;
                if (zs = a, (_e = l) && !u)
                    for (R = s; R !== null;) a = R, l = a.child, a.tag === 22 && a.memoizedState !== null ? au(s) : l !== null ? (l.return = a, R = l) : au(s);
                for (; i !== null;) R = i, Oh(i), i = i.sibling;
                R = s, zs = c, _e = u
            }
            iu(e)
        } else s.subtreeFlags & 8772 && i !== null ? (i.return = s, R = i) : iu(e)
    }
}

function iu(e) {
    for (; R !== null;) {
        var t = R;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        _e || Gi(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !_e)
                            if (r === null) n.componentDidMount();
                            else {
                                var s = t.elementType === t.type ? r.memoizedProps : st(t.type, r.memoizedProps);
                                n.componentDidUpdate(s, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            } var i = t.updateQueue;
                        i !== null && Hc(t, i, n);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (r = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                            }
                            Hc(t, a, r)
                        }
                        break;
                    case 5:
                        var c = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = c;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && r.focus();
                                    break;
                                case "img":
                                    l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && ts(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                }
                _e || t.flags & 512 && La(t)
            } catch (h) {
                ie(t, t.return, h)
            }
        }
        if (t === e) {
            R = null;
            break
        }
        if (r = t.sibling, r !== null) {
            r.return = t.return, R = r;
            break
        }
        R = t.return
    }
}

function ou(e) {
    for (; R !== null;) {
        var t = R;
        if (t === e) {
            R = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return, R = r;
            break
        }
        R = t.return
    }
}

function au(e) {
    for (; R !== null;) {
        var t = R;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var r = t.return;
                    try {
                        Gi(4, t)
                    } catch (l) {
                        ie(t, r, l)
                    }
                    break;
                case 1:
                    var n = t.stateNode;
                    if (typeof n.componentDidMount == "function") {
                        var s = t.return;
                        try {
                            n.componentDidMount()
                        } catch (l) {
                            ie(t, s, l)
                        }
                    }
                    var i = t.return;
                    try {
                        La(t)
                    } catch (l) {
                        ie(t, i, l)
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        La(t)
                    } catch (l) {
                        ie(t, a, l)
                    }
            }
        } catch (l) {
            ie(t, t.return, l)
        }
        if (t === e) {
            R = null;
            break
        }
        var c = t.sibling;
        if (c !== null) {
            c.return = t.return, R = c;
            break
        }
        R = t.return
    }
}
var Xp = Math.ceil,
    Ci = Lt.ReactCurrentDispatcher,
    Ul = Lt.ReactCurrentOwner,
    Xe = Lt.ReactCurrentBatchConfig,
    V = 0,
    pe = null,
    le = null,
    ve = 0,
    Be = 0,
    qr = ir(0),
    ue = 0,
    hs = null,
    kr = 0,
    Ki = 0,
    Il = 0,
    Vn = null,
    Re = null,
    Ml = 0,
    an = 1 / 0,
    wt = null,
    Pi = !1,
    Oa = null,
    Xt = null,
    Fs = !1,
    Wt = null,
    Ei = 0,
    qn = 0,
    Da = null,
    si = -1,
    ii = 0;

function Ee() {
    return V & 6 ? ae() : si !== -1 ? si : si = ae()
}

function Zt(e) {
    return e.mode & 1 ? V & 2 && ve !== 0 ? ve & -ve : Op.transition !== null ? (ii === 0 && (ii = vd()), ii) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sd(e.type)), e) : 1
}

function ct(e, t, r, n) {
    if (50 < qn) throw qn = 0, Da = null, Error(P(185));
    gs(e, r, n), (!(V & 2) || e !== pe) && (e === pe && (!(V & 2) && (Ki |= r), ue === 4 && Bt(e, ve)), Ie(e, n), r === 1 && V === 0 && !(t.mode & 1) && (an = ae() + 500, Vi && or()))
}

function Ie(e, t) {
    var r = e.callbackNode;
    Om(e, t);
    var n = hi(e, e === pe ? ve : 0);
    if (n === 0) r !== null && gc(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = n & -n, e.callbackPriority !== t) {
        if (r != null && gc(r), t === 1) e.tag === 0 ? Ap(lu.bind(null, e)) : qd(lu.bind(null, e)), Tp(function() {
            !(V & 6) && or()
        }), r = null;
        else {
            switch (wd(n)) {
                case 1:
                    r = dl;
                    break;
                case 4:
                    r = yd;
                    break;
                case 16:
                    r = di;
                    break;
                case 536870912:
                    r = xd;
                    break;
                default:
                    r = di
            }
            r = Hh(r, Dh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = r
    }
}

function Dh(e, t) {
    if (si = -1, ii = 0, V & 6) throw Error(P(327));
    var r = e.callbackNode;
    if (Xr() && e.callbackNode !== r) return null;
    var n = hi(e, e === pe ? ve : 0);
    if (n === 0) return null;
    if (n & 30 || n & e.expiredLanes || t) t = Ti(e, n);
    else {
        t = n;
        var s = V;
        V |= 2;
        var i = Ih();
        (pe !== e || ve !== t) && (wt = null, an = ae() + 500, xr(e, t));
        do try {
            t0();
            break
        } catch (c) {
            Uh(e, c)
        }
        while (!0);
        Nl(), Ci.current = i, V = s, le !== null ? t = 0 : (pe = null, ve = 0, t = ue)
    }
    if (t !== 0) {
        if (t === 2 && (s = ca(e), s !== 0 && (n = s, t = Ua(e, s))), t === 1) throw r = hs, xr(e, 0), Bt(e, n), Ie(e, ae()), r;
        if (t === 6) Bt(e, n);
        else {
            if (s = e.current.alternate, !(n & 30) && !Zp(s) && (t = Ti(e, n), t === 2 && (i = ca(e), i !== 0 && (n = i, t = Ua(e, i))), t === 1)) throw r = hs, xr(e, 0), Bt(e, n), Ie(e, ae()), r;
            switch (e.finishedWork = s, e.finishedLanes = n, t) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                    dr(e, Re, wt);
                    break;
                case 3:
                    if (Bt(e, n), (n & 130023424) === n && (t = Ml + 500 - ae(), 10 < t)) {
                        if (hi(e, 0) !== 0) break;
                        if (s = e.suspendedLanes, (s & n) !== n) {
                            Ee(), e.pingedLanes |= e.suspendedLanes & s;
                            break
                        }
                        e.timeoutHandle = ya(dr.bind(null, e, Re, wt), t);
                        break
                    }
                    dr(e, Re, wt);
                    break;
                case 4:
                    if (Bt(e, n), (n & 4194240) === n) break;
                    for (t = e.eventTimes, s = -1; 0 < n;) {
                        var a = 31 - lt(n);
                        i = 1 << a, a = t[a], a > s && (s = a), n &= ~i
                    }
                    if (n = s, n = ae() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Xp(n / 1960)) - n, 10 < n) {
                        e.timeoutHandle = ya(dr.bind(null, e, Re, wt), n);
                        break
                    }
                    dr(e, Re, wt);
                    break;
                case 5:
                    dr(e, Re, wt);
                    break;
                default:
                    throw Error(P(329))
            }
        }
    }
    return Ie(e, ae()), e.callbackNode === r ? Dh.bind(null, e) : null
}

function Ua(e, t) {
    var r = Vn;
    return e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256), e = Ti(e, t), e !== 2 && (t = Re, Re = r, t !== null && Ia(t)), e
}

function Ia(e) {
    Re === null ? Re = e : Re.push.apply(Re, e)
}

function Zp(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores, r !== null))
                for (var n = 0; n < r.length; n++) {
                    var s = r[n],
                        i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!ut(i(), s)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Bt(e, t) {
    for (t &= ~Il, t &= ~Ki, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var r = 31 - lt(t),
            n = 1 << r;
        e[r] = -1, t &= ~n
    }
}

function lu(e) {
    if (V & 6) throw Error(P(327));
    Xr();
    var t = hi(e, 0);
    if (!(t & 1)) return Ie(e, ae()), null;
    var r = Ti(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = ca(e);
        n !== 0 && (t = n, r = Ua(e, n))
    }
    if (r === 1) throw r = hs, xr(e, 0), Bt(e, t), Ie(e, ae()), r;
    if (r === 6) throw Error(P(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, dr(e, Re, wt), Ie(e, ae()), null
}

function zl(e, t) {
    var r = V;
    V |= 1;
    try {
        return e(t)
    } finally {
        V = r, V === 0 && (an = ae() + 500, Vi && or())
    }
}

function Nr(e) {
    Wt !== null && Wt.tag === 0 && !(V & 6) && Xr();
    var t = V;
    V |= 1;
    var r = Xe.transition,
        n = G;
    try {
        if (Xe.transition = null, G = 1, e) return e()
    } finally {
        G = n, Xe.transition = r, V = t, !(V & 6) && or()
    }
}

function Fl() {
    Be = qr.current, Y(qr)
}

function xr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, Ep(r)), le !== null)
        for (r = le.return; r !== null;) {
            var n = r;
            switch (jl(n), n.tag) {
                case 1:
                    n = n.type.childContextTypes, n != null && yi();
                    break;
                case 3:
                    sn(), Y(De), Y(Se), Tl();
                    break;
                case 5:
                    El(n);
                    break;
                case 4:
                    sn();
                    break;
                case 13:
                    Y(re);
                    break;
                case 19:
                    Y(re);
                    break;
                case 10:
                    _l(n.type._context);
                    break;
                case 22:
                case 23:
                    Fl()
            }
            r = r.return
        }
    if (pe = e, le = e = er(e.current, null), ve = Be = t, ue = 0, hs = null, Il = Ki = kr = 0, Re = Vn = null, pr !== null) {
        for (t = 0; t < pr.length; t++)
            if (r = pr[t], n = r.interleaved, n !== null) {
                r.interleaved = null;
                var s = n.next,
                    i = r.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = s, n.next = a
                }
                r.pending = n
            } pr = null
    }
    return e
}

function Uh(e, t) {
    do {
        var r = le;
        try {
            if (Nl(), ti.current = Si, _i) {
                for (var n = ne.memoizedState; n !== null;) {
                    var s = n.queue;
                    s !== null && (s.pending = null), n = n.next
                }
                _i = !1
            }
            if (br = 0, fe = ce = ne = null, Bn = !1, cs = 0, Ul.current = null, r === null || r.return === null) {
                ue = 1, hs = t, le = null;
                break
            }
            e: {
                var i = e,
                    a = r.return,
                    c = r,
                    l = t;
                if (t = ve, c.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        d = c,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = Jc(a);
                    if (y !== null) {
                        y.flags &= -257, Qc(y, a, c, i, t), y.mode & 1 && Kc(i, u, t), t = y, l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(l), t.updateQueue = x
                        } else v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Kc(i, u, t), Bl();
                            break e
                        }
                        l = Error(P(426))
                    }
                } else if (Z && c.mode & 1) {
                    var b = Jc(a);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256), Qc(b, a, c, i, t), bl(on(l, c));
                        break e
                    }
                }
                i = l = on(l, c),
                ue !== 4 && (ue = 2),
                Vn === null ? Vn = [i] : Vn.push(i),
                i = a;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var p = wh(i, l, t);
                            Bc(i, p);
                            break e;
                        case 1:
                            c = l;
                            var m = i.type,
                                g = i.stateNode;
                            if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Xt === null || !Xt.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var w = jh(i, c, t);
                                Bc(i, w);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            zh(r)
        } catch (C) {
            t = C, le === r && r !== null && (le = r = r.return);
            continue
        }
        break
    } while (!0)
}

function Ih() {
    var e = Ci.current;
    return Ci.current = Si, e === null ? Si : e
}

function Bl() {
    (ue === 0 || ue === 3 || ue === 2) && (ue = 4), pe === null || !(kr & 268435455) && !(Ki & 268435455) || Bt(pe, ve)
}

function Ti(e, t) {
    var r = V;
    V |= 2;
    var n = Ih();
    (pe !== e || ve !== t) && (wt = null, xr(e, t));
    do try {
        e0();
        break
    } catch (s) {
        Uh(e, s)
    }
    while (!0);
    if (Nl(), V = r, Ci.current = n, le !== null) throw Error(P(261));
    return pe = null, ve = 0, ue
}

function e0() {
    for (; le !== null;) Mh(le)
}

function t0() {
    for (; le !== null && !Sm();) Mh(le)
}

function Mh(e) {
    var t = Bh(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps, t === null ? zh(e) : le = t, Ul.current = null
}

function zh(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (r = Kp(r, t), r !== null) {
                r.flags &= 32767, le = r;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ue = 6, le = null;
                return
            }
        } else if (r = Gp(r, t, Be), r !== null) {
            le = r;
            return
        }
        if (t = t.sibling, t !== null) {
            le = t;
            return
        }
        le = t = e
    } while (t !== null);
    ue === 0 && (ue = 5)
}

function dr(e, t, r) {
    var n = G,
        s = Xe.transition;
    try {
        Xe.transition = null, G = 1, r0(e, t, r, n)
    } finally {
        Xe.transition = s, G = n
    }
    return null
}

function r0(e, t, r, n) {
    do Xr(); while (Wt !== null);
    if (V & 6) throw Error(P(327));
    r = e.finishedWork;
    var s = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(P(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Dm(e, i), e === pe && (le = pe = null, ve = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Fs || (Fs = !0, Hh(di, function() {
            return Xr(), null
        })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
        i = Xe.transition, Xe.transition = null;
        var a = G;
        G = 1;
        var c = V;
        V |= 4, Ul.current = null, Qp(e, r), Ah(r, e), bp(pa), fi = !!ma, pa = ma = null, e.current = r, Yp(r), Cm(), V = c, G = a, Xe.transition = i
    } else e.current = r;
    if (Fs && (Fs = !1, Wt = e, Ei = s), i = e.pendingLanes, i === 0 && (Xt = null), Tm(r.stateNode), Ie(e, ae()), t !== null)
        for (n = e.onRecoverableError, r = 0; r < t.length; r++) s = t[r], n(s.value, {
            componentStack: s.stack,
            digest: s.digest
        });
    if (Pi) throw Pi = !1, e = Oa, Oa = null, e;
    return Ei & 1 && e.tag !== 0 && Xr(), i = e.pendingLanes, i & 1 ? e === Da ? qn++ : (qn = 0, Da = e) : qn = 0, or(), null
}

function Xr() {
    if (Wt !== null) {
        var e = wd(Ei),
            t = Xe.transition,
            r = G;
        try {
            if (Xe.transition = null, G = 16 > e ? 16 : e, Wt === null) var n = !1;
            else {
                if (e = Wt, Wt = null, Ei = 0, V & 6) throw Error(P(331));
                var s = V;
                for (V |= 4, R = e.current; R !== null;) {
                    var i = R,
                        a = i.child;
                    if (R.flags & 16) {
                        var c = i.deletions;
                        if (c !== null) {
                            for (var l = 0; l < c.length; l++) {
                                var u = c[l];
                                for (R = u; R !== null;) {
                                    var d = R;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hn(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, R = f;
                                    else
                                        for (; R !== null;) {
                                            d = R;
                                            var h = d.sibling,
                                                y = d.return;
                                            if ($h(d), d === u) {
                                                R = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y, R = h;
                                                break
                                            }
                                            R = y
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var b = x.sibling;
                                        x.sibling = null, x = b
                                    } while (x !== null)
                                }
                            }
                            R = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null) a.return = i, R = a;
                    else e: for (; R !== null;) {
                        if (i = R, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Hn(9, i, i.return)
                        }
                        var p = i.sibling;
                        if (p !== null) {
                            p.return = i.return, R = p;
                            break e
                        }
                        R = i.return
                    }
                }
                var m = e.current;
                for (R = m; R !== null;) {
                    a = R;
                    var g = a.child;
                    if (a.subtreeFlags & 2064 && g !== null) g.return = a, R = g;
                    else e: for (a = m; R !== null;) {
                        if (c = R, c.flags & 2048) try {
                            switch (c.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Gi(9, c)
                            }
                        } catch (C) {
                            ie(c, c.return, C)
                        }
                        if (c === a) {
                            R = null;
                            break e
                        }
                        var w = c.sibling;
                        if (w !== null) {
                            w.return = c.return, R = w;
                            break e
                        }
                        R = c.return
                    }
                }
                if (V = s, or(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
                    gt.onPostCommitFiberRoot(Mi, e)
                } catch {}
                n = !0
            }
            return n
        } finally {
            G = r, Xe.transition = t
        }
    }
    return !1
}

function cu(e, t, r) {
    t = on(r, t), t = wh(e, t, 1), e = Yt(e, t, 1), t = Ee(), e !== null && (gs(e, 1, t), Ie(e, t))
}

function ie(e, t, r) {
    if (e.tag === 3) cu(e, e, r);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                cu(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Xt === null || !Xt.has(n))) {
                    e = on(r, e), e = jh(t, e, 1), t = Yt(t, e, 1), e = Ee(), t !== null && (gs(t, 1, e), Ie(t, e));
                    break
                }
            }
            t = t.return
        }
}

function n0(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & r, pe === e && (ve & r) === r && (ue === 4 || ue === 3 && (ve & 130023424) === ve && 500 > ae() - Ml ? xr(e, 0) : Il |= r), Ie(e, t)
}

function Fh(e, t) {
    t === 0 && (e.mode & 1 ? (t = $s, $s <<= 1, !($s & 130023424) && ($s = 4194304)) : t = 1);
    var r = Ee();
    e = Pt(e, t), e !== null && (gs(e, t, r), Ie(e, r))
}

function s0(e) {
    var t = e.memoizedState,
        r = 0;
    t !== null && (r = t.retryLane), Fh(e, r)
}

function i0(e, t) {
    var r = 0;
    switch (e.tag) {
        case 13:
            var n = e.stateNode,
                s = e.memoizedState;
            s !== null && (r = s.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        default:
            throw Error(P(314))
    }
    n !== null && n.delete(t), Fh(e, r)
}
var Bh;
Bh = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || De.current) Oe = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128)) return Oe = !1, Wp(e, t, r);
            Oe = !!(e.flags & 131072)
        }
    else Oe = !1, Z && t.flags & 1048576 && Wd(t, wi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var n = t.type;
            ni(e, t), e = t.pendingProps;
            var s = tn(t, Se.current);
            Yr(t, r), s = Ll(null, t, n, e, s, r);
            var i = Rl();
            return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(n) ? (i = !0, xi(t)) : i = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Cl(t), s.updater = Wi, t.stateNode = s, s._reactInternals = t, Na(t, n, e, r), t = Ca(null, t, n, !0, i, r)) : (t.tag = 0, Z && i && wl(t), Ce(null, t, s, r), t = t.child), t;
        case 16:
            n = t.elementType;
            e: {
                switch (ni(e, t), e = t.pendingProps, s = n._init, n = s(n._payload), t.type = n, s = t.tag = a0(n), e = st(n, e), s) {
                    case 0:
                        t = Sa(null, t, n, e, r);
                        break e;
                    case 1:
                        t = Zc(null, t, n, e, r);
                        break e;
                    case 11:
                        t = Yc(null, t, n, e, r);
                        break e;
                    case 14:
                        t = Xc(null, t, n, st(n.type, e), r);
                        break e
                }
                throw Error(P(306, n, ""))
            }
            return t;
        case 0:
            return n = t.type, s = t.pendingProps, s = t.elementType === n ? s : st(n, s), Sa(e, t, n, s, r);
        case 1:
            return n = t.type, s = t.pendingProps, s = t.elementType === n ? s : st(n, s), Zc(e, t, n, s, r);
        case 3:
            e: {
                if (_h(t), e === null) throw Error(P(387));n = t.pendingProps,
                i = t.memoizedState,
                s = i.element,
                Xd(e, t),
                ki(t, n, null, r);
                var a = t.memoizedState;
                if (n = a.element, i.isDehydrated)
                    if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        s = on(Error(P(423)), t), t = eu(e, t, n, r, s);
                        break e
                    } else if (n !== s) {
                    s = on(Error(P(424)), t), t = eu(e, t, n, r, s);
                    break e
                } else
                    for (He = Qt(t.stateNode.containerInfo.firstChild), Ve = t, Z = !0, at = null, r = Qd(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                    if (rn(), n === s) {
                        t = Et(e, t, r);
                        break e
                    }
                    Ce(e, t, n, r)
                }
                t = t.child
            }
            return t;
        case 5:
            return Zd(t), e === null && ja(t), n = t.type, s = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = s.children, ga(n, s) ? a = null : i !== null && ga(n, i) && (t.flags |= 32), Nh(e, t), Ce(e, t, a, r), t.child;
        case 6:
            return e === null && ja(t), null;
        case 13:
            return Sh(e, t, r);
        case 4:
            return Pl(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = nn(t, null, n, r) : Ce(e, t, n, r), t.child;
        case 11:
            return n = t.type, s = t.pendingProps, s = t.elementType === n ? s : st(n, s), Yc(e, t, n, s, r);
        case 7:
            return Ce(e, t, t.pendingProps, r), t.child;
        case 8:
            return Ce(e, t, t.pendingProps.children, r), t.child;
        case 12:
            return Ce(e, t, t.pendingProps.children, r), t.child;
        case 10:
            e: {
                if (n = t.type._context, s = t.pendingProps, i = t.memoizedProps, a = s.value, J(ji, n._currentValue), n._currentValue = a, i !== null)
                    if (ut(i.value, a)) {
                        if (i.children === s.children && !De.current) {
                            t = Et(e, t, r);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var c = i.dependencies;
                            if (c !== null) {
                                a = i.child;
                                for (var l = c.firstContext; l !== null;) {
                                    if (l.context === n) {
                                        if (i.tag === 1) {
                                            l = _t(-1, r & -r), l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l
                                            }
                                        }
                                        i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), ba(i.return, r, t), c.lanes |= r;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (a = i.return, a === null) throw Error(P(341));
                                a.lanes |= r, c = a.alternate, c !== null && (c.lanes |= r), ba(a, r, t), a = i.sibling
                            } else a = i.child;
                            if (a !== null) a.return = i;
                            else
                                for (a = i; a !== null;) {
                                    if (a === t) {
                                        a = null;
                                        break
                                    }
                                    if (i = a.sibling, i !== null) {
                                        i.return = a.return, a = i;
                                        break
                                    }
                                    a = a.return
                                }
                            i = a
                        }
                Ce(e, t, s.children, r),
                t = t.child
            }
            return t;
        case 9:
            return s = t.type, n = t.pendingProps.children, Yr(t, r), s = et(s), n = n(s), t.flags |= 1, Ce(e, t, n, r), t.child;
        case 14:
            return n = t.type, s = st(n, t.pendingProps), s = st(n.type, s), Xc(e, t, n, s, r);
        case 15:
            return bh(e, t, t.type, t.pendingProps, r);
        case 17:
            return n = t.type, s = t.pendingProps, s = t.elementType === n ? s : st(n, s), ni(e, t), t.tag = 1, Ue(n) ? (e = !0, xi(t)) : e = !1, Yr(t, r), vh(t, n, s), Na(t, n, s, r), Ca(null, t, n, !0, e, r);
        case 19:
            return Ch(e, t, r);
        case 22:
            return kh(e, t, r)
    }
    throw Error(P(156, t.tag))
};

function Hh(e, t) {
    return gd(e, t)
}

function o0(e, t, r, n) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ye(e, t, r, n) {
    return new o0(e, t, r, n)
}

function Hl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function a0(e) {
    if (typeof e == "function") return Hl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ll) return 11;
        if (e === cl) return 14
    }
    return 2
}

function er(e, t) {
    var r = e.alternate;
    return r === null ? (r = Ye(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
}

function oi(e, t, r, n, s, i) {
    var a = 2;
    if (n = e, typeof e == "function") Hl(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
        case Or:
            return vr(r.children, s, i, t);
        case al:
            a = 8, s |= 8;
            break;
        case Ko:
            return e = Ye(12, r, t, s | 2), e.elementType = Ko, e.lanes = i, e;
        case Jo:
            return e = Ye(13, r, t, s), e.elementType = Jo, e.lanes = i, e;
        case Qo:
            return e = Ye(19, r, t, s), e.elementType = Qo, e.lanes = i, e;
        case Zu:
            return Ji(r, s, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Yu:
                    a = 10;
                    break e;
                case Xu:
                    a = 9;
                    break e;
                case ll:
                    a = 11;
                    break e;
                case cl:
                    a = 14;
                    break e;
                case It:
                    a = 16, n = null;
                    break e
            }
            throw Error(P(130, e == null ? e : typeof e, ""))
    }
    return t = Ye(a, r, t, s), t.elementType = e, t.type = n, t.lanes = i, t
}

function vr(e, t, r, n) {
    return e = Ye(7, e, n, t), e.lanes = r, e
}

function Ji(e, t, r, n) {
    return e = Ye(22, e, n, t), e.elementType = Zu, e.lanes = r, e.stateNode = {
        isHidden: !1
    }, e
}

function Io(e, t, r) {
    return e = Ye(6, e, null, t), e.lanes = r, e
}

function Mo(e, t, r) {
    return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function l0(e, t, r, n, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vo(0), this.expirationTimes = vo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vo(0), this.identifierPrefix = n, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null
}

function Vl(e, t, r, n, s, i, a, c, l) {
    return e = new l0(e, t, r, c, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ye(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Cl(i), e
}

function c0(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ar,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}

function Vh(e) {
    if (!e) return rr;
    e = e._reactInternals;
    e: {
        if (Sr(e) !== e || e.tag !== 1) throw Error(P(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ue(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (Ue(r)) return Vd(e, r, t)
    }
    return t
}

function qh(e, t, r, n, s, i, a, c, l) {
    return e = Vl(r, n, !0, e, s, i, a, c, l), e.context = Vh(null), r = e.current, n = Ee(), s = Zt(r), i = _t(n, s), i.callback = t ?? null, Yt(r, i, s), e.current.lanes = s, gs(e, s, n), Ie(e, n), e
}

function Qi(e, t, r, n) {
    var s = t.current,
        i = Ee(),
        a = Zt(s);
    return r = Vh(r), t.context === null ? t.context = r : t.pendingContext = r, t = _t(i, a), t.payload = {
        element: e
    }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Yt(s, t, a), e !== null && (ct(e, s, a, i), ei(e, s, a)), a
}

function $i(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function uu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}

function ql(e, t) {
    uu(e, t), (e = e.alternate) && uu(e, t)
}

function u0() {
    return null
}
var Wh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Wl(e) {
    this._internalRoot = e
}
Yi.prototype.render = Wl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(P(409));
    Qi(e, t, null, null)
};
Yi.prototype.unmount = Wl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nr(function() {
            Qi(null, e, null, null)
        }), t[Ct] = null
    }
};

function Yi(e) {
    this._internalRoot = e
}
Yi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = kd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < Ft.length && t !== 0 && t < Ft[r].priority; r++);
        Ft.splice(r, 0, e), r === 0 && _d(e)
    }
};

function Gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Xi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function du() {}

function d0(e, t, r, n, s) {
    if (s) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var u = $i(a);
                i.call(u)
            }
        }
        var a = qh(t, n, e, 0, null, !1, !1, "", du);
        return e._reactRootContainer = a, e[Ct] = a.current, ss(e.nodeType === 8 ? e.parentNode : e), Nr(), a
    }
    for (; s = e.lastChild;) e.removeChild(s);
    if (typeof n == "function") {
        var c = n;
        n = function() {
            var u = $i(l);
            c.call(u)
        }
    }
    var l = Vl(e, 0, !1, null, null, !1, !1, "", du);
    return e._reactRootContainer = l, e[Ct] = l.current, ss(e.nodeType === 8 ? e.parentNode : e), Nr(function() {
        Qi(t, l, r, n)
    }), l
}

function Zi(e, t, r, n, s) {
    var i = r._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof s == "function") {
            var c = s;
            s = function() {
                var l = $i(a);
                c.call(l)
            }
        }
        Qi(t, a, e, s)
    } else a = d0(r, t, e, s, n);
    return $i(a)
}
jd = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var r = Rn(t.pendingLanes);
                r !== 0 && (hl(t, r | 1), Ie(t, ae()), !(V & 6) && (an = ae() + 500, or()))
            }
            break;
        case 13:
            Nr(function() {
                var n = Pt(e, 1);
                if (n !== null) {
                    var s = Ee();
                    ct(n, e, 1, s)
                }
            }), ql(e, 1)
    }
};
fl = function(e) {
    if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
            var r = Ee();
            ct(t, e, 134217728, r)
        }
        ql(e, 134217728)
    }
};
bd = function(e) {
    if (e.tag === 13) {
        var t = Zt(e),
            r = Pt(e, t);
        if (r !== null) {
            var n = Ee();
            ct(r, e, t, n)
        }
        ql(e, t)
    }
};
kd = function() {
    return G
};
Nd = function(e, t) {
    var r = G;
    try {
        return G = e, t()
    } finally {
        G = r
    }
};
oa = function(e, t, r) {
    switch (t) {
        case "input":
            if (Zo(e, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e; r.parentNode;) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                        var s = Hi(n);
                        if (!s) throw Error(P(90));
                        td(n), Zo(n, s)
                    }
                }
            }
            break;
        case "textarea":
            nd(e, r);
            break;
        case "select":
            t = r.value, t != null && Gr(e, !!r.multiple, t, !1)
    }
};
ud = zl;
dd = Nr;
var h0 = {
        usingClientEntryPoint: !1,
        Events: [xs, Mr, Hi, ld, cd, zl]
    },
    Nn = {
        findFiberByHostInstance: mr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    f0 = {
        bundleType: Nn.bundleType,
        version: Nn.version,
        rendererPackageName: Nn.rendererPackageName,
        rendererConfig: Nn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Lt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = md(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Nn.findFiberByHostInstance || u0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bs.isDisabled && Bs.supportsFiber) try {
        Mi = Bs.inject(f0), gt = Bs
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0;
We.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gl(t)) throw Error(P(200));
    return c0(e, t, null, r)
};
We.createRoot = function(e, t) {
    if (!Gl(e)) throw Error(P(299));
    var r = !1,
        n = "",
        s = Wh;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Vl(e, 1, !1, null, null, r, !1, n, s), e[Ct] = t.current, ss(e.nodeType === 8 ? e.parentNode : e), new Wl(t)
};
We.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
    return e = md(t), e = e === null ? null : e.stateNode, e
};
We.flushSync = function(e) {
    return Nr(e)
};
We.hydrate = function(e, t, r) {
    if (!Xi(t)) throw Error(P(200));
    return Zi(null, e, t, !0, r)
};
We.hydrateRoot = function(e, t, r) {
    if (!Gl(e)) throw Error(P(405));
    var n = r != null && r.hydratedSources || null,
        s = !1,
        i = "",
        a = Wh;
    if (r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = qh(t, null, e, 1, r ?? null, s, !1, i, a), e[Ct] = t.current, ss(e), n)
        for (e = 0; e < n.length; e++) r = n[e], s = r._getVersion, s = s(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, s] : t.mutableSourceEagerHydrationData.push(r, s);
    return new Yi(t)
};
We.render = function(e, t, r) {
    if (!Xi(t)) throw Error(P(200));
    return Zi(null, e, t, !1, r)
};
We.unmountComponentAtNode = function(e) {
    if (!Xi(e)) throw Error(P(40));
    return e._reactRootContainer ? (Nr(function() {
        Zi(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ct] = null
        })
    }), !0) : !1
};
We.unstable_batchedUpdates = zl;
We.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!Xi(r)) throw Error(P(200));
    if (e == null || e._reactInternals === void 0) throw Error(P(38));
    return Zi(e, t, r, !1, n)
};
We.version = "18.3.1-next-f1338f8080-20240426";

function Gh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh)
    } catch (e) {
        console.error(e)
    }
}
Gh(), Gu.exports = We;
var m0 = Gu.exports,
    Kh, hu = m0;
Kh = hu.createRoot, hu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var p0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    L = (e, t) => {
        const r = k.forwardRef(({
            color: n = "currentColor",
            size: s = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: a,
            className: c = "",
            children: l,
            ...u
        }, d) => k.createElement("svg", {
            ref: d,
            ...p0,
            width: s,
            height: s,
            stroke: n,
            strokeWidth: a ? Number(i) * 24 / Number(s) : i,
            className: ["lucide", `lucide-${g0(e)}`, c].join(" "),
            ...u
        }, [...t.map(([f, h]) => k.createElement(f, h)), ...Array.isArray(l) ? l : [l]]));
        return r.displayName = `${e}`, r
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = L("AlertCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qh = L("ArrowLeft", [
    ["path", {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
    }],
    ["path", {
        d: "M19 12H5",
        key: "x3x0zl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = L("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = L("BarChart3", [
    ["path", {
        d: "M3 3v18h18",
        key: "1s2lah"
    }],
    ["path", {
        d: "M18 17V9",
        key: "2bz60n"
    }],
    ["path", {
        d: "M13 17V5",
        key: "1frdt8"
    }],
    ["path", {
        d: "M8 17v-3",
        key: "17ska0"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = L("Bell", [
    ["path", {
        d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
        key: "1qo2s2"
    }],
    ["path", {
        d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
        key: "qgo35s"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ma = L("Book", [
    ["path", {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
        key: "t4utmx"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = L("Briefcase", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "7",
        rx: "2",
        ry: "2",
        key: "eto64e"
    }],
    ["path", {
        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
        key: "zwj3tp"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = L("Calendar", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v0 = L("Camera", [
    ["path", {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg"
    }],
    ["circle", {
        cx: "12",
        cy: "13",
        r: "3",
        key: "1vg3eu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = L("CheckCircle2", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = L("CheckCircle", [
    ["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fu = L("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = L("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = L("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = L("Columns2", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7"
    }],
    ["path", {
        d: "M12 3v18",
        key: "108xh3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = L("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j0 = L("Cpu", [
    ["rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        key: "1vbyd7"
    }],
    ["rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6",
        key: "o3kz5p"
    }],
    ["path", {
        d: "M15 2v2",
        key: "13l42r"
    }],
    ["path", {
        d: "M15 20v2",
        key: "15mkzm"
    }],
    ["path", {
        d: "M2 15h2",
        key: "1gxd5l"
    }],
    ["path", {
        d: "M2 9h2",
        key: "1bbxkp"
    }],
    ["path", {
        d: "M20 15h2",
        key: "19e6y8"
    }],
    ["path", {
        d: "M20 9h2",
        key: "19tzq7"
    }],
    ["path", {
        d: "M9 2v2",
        key: "165o2o"
    }],
    ["path", {
        d: "M9 20v2",
        key: "i2bqo8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b0 = L("CreditCard", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        key: "ynyp8z"
    }],
    ["line", {
        x1: "2",
        x2: "22",
        y1: "10",
        y2: "10",
        key: "1b3vmo"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = L("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = L("Eye", [
    ["path", {
        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
        key: "rwhkz3"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N0 = L("FileText", [
    ["path", {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
    }],
    ["path", {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
    }],
    ["path", {
        d: "M10 9H8",
        key: "b1mrlr"
    }],
    ["path", {
        d: "M16 13H8",
        key: "t4e002"
    }],
    ["path", {
        d: "M16 17H8",
        key: "z1uh3a"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const za = L("Globe", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
    }],
    ["path", {
        d: "M2 12h20",
        key: "9i4pu4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = L("HeartOff", [
    ["line", {
        x1: "2",
        y1: "2",
        x2: "22",
        y2: "22",
        key: "1w4vcy"
    }],
    ["path", {
        d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",
        key: "3mpagl"
    }],
    ["path", {
        d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
        key: "1gh3v3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S0 = L("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = L("Home", [
    ["path", {
        d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "y5dka4"
    }],
    ["polyline", {
        points: "9 22 9 12 15 12 15 22",
        key: "e2us08"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ef = L("Image", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn"
    }],
    ["circle", {
        cx: "9",
        cy: "9",
        r: "2",
        key: "af1f0g"
    }],
    ["path", {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tf = L("Info", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 16v-4",
        key: "1dtifu"
    }],
    ["path", {
        d: "M12 8h.01",
        key: "e9boi3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rf = L("LayoutGrid", [
    ["rect", {
        width: "7",
        height: "7",
        x: "3",
        y: "3",
        rx: "1",
        key: "1g98yp"
    }],
    ["rect", {
        width: "7",
        height: "7",
        x: "14",
        y: "3",
        rx: "1",
        key: "6d4xhi"
    }],
    ["rect", {
        width: "7",
        height: "7",
        x: "14",
        y: "14",
        rx: "1",
        key: "nxv5o0"
    }],
    ["rect", {
        width: "7",
        height: "7",
        x: "3",
        y: "14",
        rx: "1",
        key: "1bb6yr"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nf = L("LayoutTemplate", [
    ["rect", {
        width: "18",
        height: "7",
        x: "3",
        y: "3",
        rx: "1",
        key: "f1a2em"
    }],
    ["rect", {
        width: "9",
        height: "7",
        x: "3",
        y: "14",
        rx: "1",
        key: "jqznyg"
    }],
    ["rect", {
        width: "5",
        height: "7",
        x: "16",
        y: "14",
        rx: "1",
        key: "q5h2i8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C0 = L("Leaf", [
    ["path", {
        d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
        key: "nnexq3"
    }],
    ["path", {
        d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
        key: "mt58a7"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = L("Link", [
    ["path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
        key: "1cjeqo"
    }],
    ["path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
        key: "19qd67"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P0 = L("Loader2", [
    ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = L("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E0 = L("LogIn", [
    ["path", {
        d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
        key: "u53s6r"
    }],
    ["polyline", {
        points: "10 17 15 12 10 7",
        key: "1ail0h"
    }],
    ["line", {
        x1: "15",
        x2: "3",
        y1: "12",
        y2: "12",
        key: "v6grx8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T0 = L("LogOut", [
    ["path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
    }],
    ["polyline", {
        points: "16 17 21 12 16 7",
        key: "1gabdz"
    }],
    ["line", {
        x1: "21",
        x2: "9",
        y1: "12",
        y2: "12",
        key: "1uyos4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = L("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L0 = L("Maximize", [
    ["path", {
        d: "M8 3H5a2 2 0 0 0-2 2v3",
        key: "1dcmit"
    }],
    ["path", {
        d: "M21 8V5a2 2 0 0 0-2-2h-3",
        key: "1e4gt3"
    }],
    ["path", {
        d: "M3 16v3a2 2 0 0 0 2 2h3",
        key: "wsl5sc"
    }],
    ["path", {
        d: "M16 21h3a2 2 0 0 0 2-2v-3",
        key: "18trek"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R0 = L("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = L("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = L("MessageSquare", [
    ["path", {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A0 = L("Minimize2", [
    ["polyline", {
        points: "4 14 10 14 10 20",
        key: "11kfnr"
    }],
    ["polyline", {
        points: "20 10 14 10 14 4",
        key: "rlmsce"
    }],
    ["line", {
        x1: "14",
        x2: "21",
        y1: "10",
        y2: "3",
        key: "o5lafz"
    }],
    ["line", {
        x1: "3",
        x2: "10",
        y1: "21",
        y2: "14",
        key: "1atl0r"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = L("Monitor", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "3",
        rx: "2",
        key: "48i651"
    }],
    ["line", {
        x1: "8",
        x2: "16",
        y1: "21",
        y2: "21",
        key: "1svkeh"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "17",
        y2: "21",
        key: "vw1qmm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = L("Moon", [
    ["path", {
        d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
        key: "a7tn18"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = L("Palette", [
    ["circle", {
        cx: "13.5",
        cy: "6.5",
        r: ".5",
        fill: "currentColor",
        key: "1okk4w"
    }],
    ["circle", {
        cx: "17.5",
        cy: "10.5",
        r: ".5",
        fill: "currentColor",
        key: "f64h9f"
    }],
    ["circle", {
        cx: "8.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "fotxhn"
    }],
    ["circle", {
        cx: "6.5",
        cy: "12.5",
        r: ".5",
        fill: "currentColor",
        key: "qy21gx"
    }],
    ["path", {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
        key: "12rzf8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mu = L("PanelLeft", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7"
    }],
    ["path", {
        d: "M9 3v18",
        key: "fh3hqa"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = L("PanelsTopLeft", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7"
    }],
    ["path", {
        d: "M3 9h18",
        key: "1pudct"
    }],
    ["path", {
        d: "M9 21V9",
        key: "1oto5p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D0 = L("PenLine", [
    ["path", {
        d: "M12 20h9",
        key: "t2du7b"
    }],
    ["path", {
        d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",
        key: "ymcmye"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = L("PlusCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M8 12h8",
        key: "1wcyev"
    }],
    ["path", {
        d: "M12 8v8",
        key: "napkw2"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = L("RefreshCw", [
    ["path", {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc"
    }],
    ["path", {
        d: "M21 3v5h-5",
        key: "1q7to0"
    }],
    ["path", {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3"
    }],
    ["path", {
        d: "M8 16H3v5",
        key: "1cv678"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = L("Save", [
    ["path", {
        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        key: "1owoqh"
    }],
    ["polyline", {
        points: "17 21 17 13 7 13 7 21",
        key: "1md35c"
    }],
    ["polyline", {
        points: "7 3 7 8 15 8",
        key: "8nz8an"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = L("Search", [
    ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }],
    ["path", {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = L("Send", [
    ["path", {
        d: "m22 2-7 20-4-9-9-4Z",
        key: "1q3vgg"
    }],
    ["path", {
        d: "M22 2 11 13",
        key: "nzbqef"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = L("Settings", [
    ["path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = L("Share2", [
    ["circle", {
        cx: "18",
        cy: "5",
        r: "3",
        key: "gq8acd"
    }],
    ["circle", {
        cx: "6",
        cy: "12",
        r: "3",
        key: "w7nqdw"
    }],
    ["circle", {
        cx: "18",
        cy: "19",
        r: "3",
        key: "1xt0gg"
    }],
    ["line", {
        x1: "8.59",
        x2: "15.42",
        y1: "13.51",
        y2: "17.49",
        key: "47mynk"
    }],
    ["line", {
        x1: "15.41",
        x2: "8.59",
        y1: "6.51",
        y2: "10.49",
        key: "1n3mei"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = L("Smartphone", [
    ["rect", {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3"
    }],
    ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M0 = L("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = L("SquarePen", [
    ["path", {
        d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        key: "1m0v6g"
    }],
    ["path", {
        d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",
        key: "1lpok0"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = L("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F0 = L("Sun", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2"
    }],
    ["path", {
        d: "M12 2v2",
        key: "tus03m"
    }],
    ["path", {
        d: "M12 20v2",
        key: "1lh1kg"
    }],
    ["path", {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j"
    }],
    ["path", {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv"
    }],
    ["path", {
        d: "M2 12h2",
        key: "1t8f8n"
    }],
    ["path", {
        d: "M20 12h2",
        key: "1q8mjw"
    }],
    ["path", {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5"
    }],
    ["path", {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ai = L("Terminal", [
    ["polyline", {
        points: "4 17 10 11 4 5",
        key: "akl6gq"
    }],
    ["line", {
        x1: "12",
        x2: "20",
        y1: "19",
        y2: "19",
        key: "q2wloq"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B0 = L("ThumbsUp", [
    ["path", {
        d: "M7 10v12",
        key: "1qc93n"
    }],
    ["path", {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
        key: "y3tblf"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = L("Trash2", [
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
        key: "4alrt4"
    }],
    ["path", {
        d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
        key: "v07s0e"
    }],
    ["line", {
        x1: "10",
        x2: "10",
        y1: "11",
        y2: "17",
        key: "1uufr5"
    }],
    ["line", {
        x1: "14",
        x2: "14",
        y1: "11",
        y2: "17",
        key: "xtxkd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pu = L("Type", [
    ["polyline", {
        points: "4 7 4 4 20 4 20 7",
        key: "1nosan"
    }],
    ["line", {
        x1: "9",
        x2: "15",
        y1: "20",
        y2: "20",
        key: "swin9y"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "4",
        y2: "20",
        key: "1tx1rr"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oi = L("UserPlus", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["line", {
        x1: "19",
        x2: "19",
        y1: "8",
        y2: "14",
        key: "1bvyxn"
    }],
    ["line", {
        x1: "22",
        x2: "16",
        y1: "11",
        y2: "11",
        key: "1shjgl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = L("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = L("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = L("Zap", [
    ["polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        key: "45s27k"
    }]
]);
let Hs;
const q0 = new Uint8Array(16);

function W0() {
    if (!Hs && (Hs = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Hs)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Hs(q0)
}
const ye = [];
for (let e = 0; e < 256; ++e) ye.push((e + 256).toString(16).slice(1));

function G0(e, t = 0) {
    return ye[e[t + 0]] + ye[e[t + 1]] + ye[e[t + 2]] + ye[e[t + 3]] + "-" + ye[e[t + 4]] + ye[e[t + 5]] + "-" + ye[e[t + 6]] + ye[e[t + 7]] + "-" + ye[e[t + 8]] + ye[e[t + 9]] + "-" + ye[e[t + 10]] + ye[e[t + 11]] + ye[e[t + 12]] + ye[e[t + 13]] + ye[e[t + 14]] + ye[e[t + 15]]
}
const K0 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    gu = {
        randomUUID: K0
    };

function no(e, t, r) {
    if (gu.randomUUID && !t && !e) return gu.randomUUID();
    e = e || {};
    const n = e.random || (e.rng || W0)();
    return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, G0(n)
}
const J0 = "modulepreload",
    Q0 = function(e) {
        return "/" + e
    },
    yu = {},
    ln = function(t, r, n) {
        let s = Promise.resolve();
        if (r && r.length > 0) {
            document.getElementsByTagName("link");
            const a = document.querySelector("meta[property=csp-nonce]"),
                c = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
            s = Promise.allSettled(r.map(l => {
                if (l = Q0(l), l in yu) return;
                yu[l] = !0;
                const u = l.endsWith(".css"),
                    d = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${l}"]${d}`)) return;
                const f = document.createElement("link");
                if (f.rel = u ? "stylesheet" : J0, u || (f.as = "script"), f.crossOrigin = "", f.href = l, c && f.setAttribute("nonce", c), document.head.appendChild(f), u) return new Promise((h, y) => {
                    f.addEventListener("load", h), f.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${l}`)))
                })
            }))
        }

        function i(a) {
            const c = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (c.payload = a, window.dispatchEvent(c), !c.defaultPrevented) throw a
        }
        return s.then(a => {
            for (const c of a || []) c.status === "rejected" && i(c.reason);
            return t().catch(i)
        })
    },
    Y0 = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = (...r) => ln(async () => {
            const {
                default: n
            } = await Promise.resolve().then(() => fn);
            return {
                default: n
            }
        }, void 0).then(({
            default: n
        }) => n(...r)) : t = fetch, (...r) => t(...r)
    };
class Jl extends Error {
    constructor(t, r = "FunctionsError", n) {
        super(t), this.name = r, this.context = n
    }
}
class X0 extends Jl {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class Z0 extends Jl {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class eg extends Jl {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var Va;
(function(e) {
    e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2"
})(Va || (Va = {}));
var tg = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};
class rg {
    constructor(t, {
        headers: r = {},
        customFetch: n,
        region: s = Va.Any
    } = {}) {
        this.url = t, this.headers = r, this.region = s, this.fetch = Y0(n)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t, r = {}) {
        var n;
        return tg(this, void 0, void 0, function*() {
            try {
                const {
                    headers: s,
                    method: i,
                    body: a
                } = r;
                let c = {},
                    {
                        region: l
                    } = r;
                l || (l = this.region), l && l !== "any" && (c["x-region"] = l);
                let u;
                a && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (c["Content-Type"] = "application/octet-stream", u = a) : typeof a == "string" ? (c["Content-Type"] = "text/plain", u = a) : typeof FormData < "u" && a instanceof FormData ? u = a : (c["Content-Type"] = "application/json", u = JSON.stringify(a)));
                const d = yield this.fetch(`${this.url}/${t}`, {
                    method: i || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, c), this.headers), s),
                    body: u
                }).catch(v => {
                    throw new X0(v)
                }), f = d.headers.get("x-relay-error");
                if (f && f === "true") throw new Z0(d);
                if (!d.ok) throw new eg(d);
                let h = ((n = d.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(),
                    y;
                return h === "application/json" ? y = yield d.json(): h === "application/octet-stream" ? y = yield d.blob(): h === "text/event-stream" ? y = d : h === "multipart/form-data" ? y = yield d.formData(): y = yield d.text(), {
                    data: y,
                    error: null
                }
            } catch (s) {
                return {
                    data: null,
                    error: s
                }
            }
        })
    }
}
var Ae = {},
    Ql = {},
    so = {},
    bs = {},
    io = {},
    oo = {},
    ng = function() {
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    },
    cn = ng();
const sg = cn.fetch,
    of = cn.fetch.bind(cn),
    af = cn.Headers,
    ig = cn.Request,
    og = cn.Response,
    fn = Object.freeze(Object.defineProperty({
        __proto__: null,
        Headers: af,
        Request: ig,
        Response: og,
        default: of,
        fetch: sg
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ag = Bf(fn);
var ao = {};
Object.defineProperty(ao, "__esModule", {
    value: !0
});
let lg = class extends Error {
    constructor(t) {
        super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code
    }
};
ao.default = lg;
var lf = Ze && Ze.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(oo, "__esModule", {
    value: !0
});
const cg = lf(ag),
    ug = lf(ao);
let dg = class {
    constructor(t) {
        this.shouldThrowOnError = !1, this.method = t.method, this.url = t.url, this.headers = t.headers, this.schema = t.schema, this.body = t.body, this.shouldThrowOnError = t.shouldThrowOnError, this.signal = t.signal, this.isMaybeSingle = t.isMaybeSingle, t.fetch ? this.fetch = t.fetch : typeof fetch > "u" ? this.fetch = cg.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0, this
    }
    setHeader(t, r) {
        return this.headers = Object.assign({}, this.headers), this.headers[t] = r, this
    }
    then(t, r) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
        const n = this.fetch;
        let s = n(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async i => {
            var a, c, l;
            let u = null,
                d = null,
                f = null,
                h = i.status,
                y = i.statusText;
            if (i.ok) {
                if (this.method !== "HEAD") {
                    const p = await i.text();
                    p === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? d = p : d = JSON.parse(p))
                }
                const x = (a = this.headers.Prefer) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/),
                    b = (c = i.headers.get("content-range")) === null || c === void 0 ? void 0 : c.split("/");
                x && b && b.length > 1 && (f = parseInt(b[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (u = {
                    code: "PGRST116",
                    details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                }, d = null, f = null, h = 406, y = "Not Acceptable") : d.length === 1 ? d = d[0] : d = null)
            } else {
                const x = await i.text();
                try {
                    u = JSON.parse(x), Array.isArray(u) && i.status === 404 && (d = [], u = null, h = 200, y = "OK")
                } catch {
                    i.status === 404 && x === "" ? (h = 204, y = "No Content") : u = {
                        message: x
                    }
                }
                if (u && this.isMaybeSingle && (!((l = u == null ? void 0 : u.details) === null || l === void 0) && l.includes("0 rows")) && (u = null, h = 200, y = "OK"), u && this.shouldThrowOnError) throw new ug.default(u)
            }
            return {
                error: u,
                data: d,
                count: f,
                status: h,
                statusText: y
            }
        });
        return this.shouldThrowOnError || (s = s.catch(i => {
            var a, c, l;
            return {
                error: {
                    message: `${(a=i==null?void 0:i.name)!==null&&a!==void 0?a:"FetchError"}: ${i==null?void 0:i.message}`,
                    details: `${(c=i==null?void 0:i.stack)!==null&&c!==void 0?c:""}`,
                    hint: "",
                    code: `${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        })), s.then(t, r)
    }
    returns() {
        return this
    }
    overrideTypes() {
        return this
    }
};
oo.default = dg;
var hg = Ze && Ze.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(io, "__esModule", {
    value: !0
});
const fg = hg(oo);
let mg = class extends fg.default {
    select(t) {
        let r = !1;
        const n = (t ?? "*").split("").map(s => /\s/.test(s) && !r ? "" : (s === '"' && (r = !r), s)).join("");
        return this.url.searchParams.set("select", n), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this
    }
    order(t, {
        ascending: r = !0,
        nullsFirst: n,
        foreignTable: s,
        referencedTable: i = s
    } = {}) {
        const a = i ? `${i}.order` : "order",
            c = this.url.searchParams.get(a);
        return this.url.searchParams.set(a, `${c?`${c},`:""}${t}.${r?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`), this
    }
    limit(t, {
        foreignTable: r,
        referencedTable: n = r
    } = {}) {
        const s = typeof n > "u" ? "limit" : `${n}.limit`;
        return this.url.searchParams.set(s, `${t}`), this
    }
    range(t, r, {
        foreignTable: n,
        referencedTable: s = n
    } = {}) {
        const i = typeof s > "u" ? "offset" : `${s}.offset`,
            a = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(i, `${t}`), this.url.searchParams.set(a, `${r-t+1}`), this
    }
    abortSignal(t) {
        return this.signal = t, this
    }
    single() {
        return this.headers.Accept = "application/vnd.pgrst.object+json", this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this
    }
    csv() {
        return this.headers.Accept = "text/csv", this
    }
    geojson() {
        return this.headers.Accept = "application/geo+json", this
    }
    explain({
        analyze: t = !1,
        verbose: r = !1,
        settings: n = !1,
        buffers: s = !1,
        wal: i = !1,
        format: a = "text"
    } = {}) {
        var c;
        const l = [t ? "analyze" : null, r ? "verbose" : null, n ? "settings" : null, s ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|"),
            u = (c = this.headers.Accept) !== null && c !== void 0 ? c : "application/json";
        return this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${u}"; options=${l};`, a === "json" ? this : this
    }
    rollback() {
        var t;
        return ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this
    }
    returns() {
        return this
    }
};
io.default = mg;
var pg = Ze && Ze.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(bs, "__esModule", {
    value: !0
});
const gg = pg(io);
let yg = class extends gg.default {
    eq(t, r) {
        return this.url.searchParams.append(t, `eq.${r}`), this
    }
    neq(t, r) {
        return this.url.searchParams.append(t, `neq.${r}`), this
    }
    gt(t, r) {
        return this.url.searchParams.append(t, `gt.${r}`), this
    }
    gte(t, r) {
        return this.url.searchParams.append(t, `gte.${r}`), this
    }
    lt(t, r) {
        return this.url.searchParams.append(t, `lt.${r}`), this
    }
    lte(t, r) {
        return this.url.searchParams.append(t, `lte.${r}`), this
    }
    like(t, r) {
        return this.url.searchParams.append(t, `like.${r}`), this
    }
    likeAllOf(t, r) {
        return this.url.searchParams.append(t, `like(all).{${r.join(",")}}`), this
    }
    likeAnyOf(t, r) {
        return this.url.searchParams.append(t, `like(any).{${r.join(",")}}`), this
    }
    ilike(t, r) {
        return this.url.searchParams.append(t, `ilike.${r}`), this
    }
    ilikeAllOf(t, r) {
        return this.url.searchParams.append(t, `ilike(all).{${r.join(",")}}`), this
    }
    ilikeAnyOf(t, r) {
        return this.url.searchParams.append(t, `ilike(any).{${r.join(",")}}`), this
    }
    is(t, r) {
        return this.url.searchParams.append(t, `is.${r}`), this
    }
    in(t, r) {
        const n = Array.from(new Set(r)).map(s => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
        return this.url.searchParams.append(t, `in.(${n})`), this
    }
    contains(t, r) {
        return typeof r == "string" ? this.url.searchParams.append(t, `cs.${r}`) : Array.isArray(r) ? this.url.searchParams.append(t, `cs.{${r.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(r)}`), this
    }
    containedBy(t, r) {
        return typeof r == "string" ? this.url.searchParams.append(t, `cd.${r}`) : Array.isArray(r) ? this.url.searchParams.append(t, `cd.{${r.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(r)}`), this
    }
    rangeGt(t, r) {
        return this.url.searchParams.append(t, `sr.${r}`), this
    }
    rangeGte(t, r) {
        return this.url.searchParams.append(t, `nxl.${r}`), this
    }
    rangeLt(t, r) {
        return this.url.searchParams.append(t, `sl.${r}`), this
    }
    rangeLte(t, r) {
        return this.url.searchParams.append(t, `nxr.${r}`), this
    }
    rangeAdjacent(t, r) {
        return this.url.searchParams.append(t, `adj.${r}`), this
    }
    overlaps(t, r) {
        return typeof r == "string" ? this.url.searchParams.append(t, `ov.${r}`) : this.url.searchParams.append(t, `ov.{${r.join(",")}}`), this
    }
    textSearch(t, r, {
        config: n,
        type: s
    } = {}) {
        let i = "";
        s === "plain" ? i = "pl" : s === "phrase" ? i = "ph" : s === "websearch" && (i = "w");
        const a = n === void 0 ? "" : `(${n})`;
        return this.url.searchParams.append(t, `${i}fts${a}.${r}`), this
    }
    match(t) {
        return Object.entries(t).forEach(([r, n]) => {
            this.url.searchParams.append(r, `eq.${n}`)
        }), this
    }
    not(t, r, n) {
        return this.url.searchParams.append(t, `not.${r}.${n}`), this
    }
    or(t, {
        foreignTable: r,
        referencedTable: n = r
    } = {}) {
        const s = n ? `${n}.or` : "or";
        return this.url.searchParams.append(s, `(${t})`), this
    }
    filter(t, r, n) {
        return this.url.searchParams.append(t, `${r}.${n}`), this
    }
};
bs.default = yg;
var xg = Ze && Ze.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(so, "__esModule", {
    value: !0
});
const Tn = xg(bs);
let vg = class {
    constructor(t, {
        headers: r = {},
        schema: n,
        fetch: s
    }) {
        this.url = t, this.headers = r, this.schema = n, this.fetch = s
    }
    select(t, {
        head: r = !1,
        count: n
    } = {}) {
        const s = r ? "HEAD" : "GET";
        let i = !1;
        const a = (t ?? "*").split("").map(c => /\s/.test(c) && !i ? "" : (c === '"' && (i = !i), c)).join("");
        return this.url.searchParams.set("select", a), n && (this.headers.Prefer = `count=${n}`), new Tn.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    insert(t, {
        count: r,
        defaultToNull: n = !0
    } = {}) {
        const s = "POST",
            i = [];
        if (this.headers.Prefer && i.push(this.headers.Prefer), r && i.push(`count=${r}`), n || i.push("missing=default"), this.headers.Prefer = i.join(","), Array.isArray(t)) {
            const a = t.reduce((c, l) => c.concat(Object.keys(l)), []);
            if (a.length > 0) {
                const c = [...new Set(a)].map(l => `"${l}"`);
                this.url.searchParams.set("columns", c.join(","))
            }
        }
        return new Tn.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    upsert(t, {
        onConflict: r,
        ignoreDuplicates: n = !1,
        count: s,
        defaultToNull: i = !0
    } = {}) {
        const a = "POST",
            c = [`resolution=${n?"ignore":"merge"}-duplicates`];
        if (r !== void 0 && this.url.searchParams.set("on_conflict", r), this.headers.Prefer && c.push(this.headers.Prefer), s && c.push(`count=${s}`), i || c.push("missing=default"), this.headers.Prefer = c.join(","), Array.isArray(t)) {
            const l = t.reduce((u, d) => u.concat(Object.keys(d)), []);
            if (l.length > 0) {
                const u = [...new Set(l)].map(d => `"${d}"`);
                this.url.searchParams.set("columns", u.join(","))
            }
        }
        return new Tn.default({
            method: a,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    update(t, {
        count: r
    } = {}) {
        const n = "PATCH",
            s = [];
        return this.headers.Prefer && s.push(this.headers.Prefer), r && s.push(`count=${r}`), this.headers.Prefer = s.join(","), new Tn.default({
            method: n,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    delete({
        count: t
    } = {}) {
        const r = "DELETE",
            n = [];
        return t && n.push(`count=${t}`), this.headers.Prefer && n.unshift(this.headers.Prefer), this.headers.Prefer = n.join(","), new Tn.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
};
so.default = vg;
var lo = {},
    co = {};
Object.defineProperty(co, "__esModule", {
    value: !0
});
co.version = void 0;
co.version = "0.0.0-automated";
Object.defineProperty(lo, "__esModule", {
    value: !0
});
lo.DEFAULT_HEADERS = void 0;
const wg = co;
lo.DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${wg.version}`
};
var cf = Ze && Ze.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Ql, "__esModule", {
    value: !0
});
const jg = cf(so),
    bg = cf(bs),
    kg = lo;
let Ng = class uf {
    constructor(t, {
        headers: r = {},
        schema: n,
        fetch: s
    } = {}) {
        this.url = t, this.headers = Object.assign(Object.assign({}, kg.DEFAULT_HEADERS), r), this.schemaName = n, this.fetch = s
    }
    from(t) {
        const r = new URL(`${this.url}/${t}`);
        return new jg.default(r, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(t) {
        return new uf(this.url, {
            headers: this.headers,
            schema: t,
            fetch: this.fetch
        })
    }
    rpc(t, r = {}, {
        head: n = !1,
        get: s = !1,
        count: i
    } = {}) {
        let a;
        const c = new URL(`${this.url}/rpc/${t}`);
        let l;
        n || s ? (a = n ? "HEAD" : "GET", Object.entries(r).filter(([d, f]) => f !== void 0).map(([d, f]) => [d, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`]).forEach(([d, f]) => {
            c.searchParams.append(d, f)
        })) : (a = "POST", l = r);
        const u = Object.assign({}, this.headers);
        return i && (u.Prefer = `count=${i}`), new bg.default({
            method: a,
            url: c,
            headers: u,
            schema: this.schemaName,
            body: l,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
};
Ql.default = Ng;
var mn = Ze && Ze.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Ae, "__esModule", {
    value: !0
});
Ae.PostgrestError = Ae.PostgrestBuilder = Ae.PostgrestTransformBuilder = Ae.PostgrestFilterBuilder = Ae.PostgrestQueryBuilder = Ae.PostgrestClient = void 0;
const df = mn(Ql);
Ae.PostgrestClient = df.default;
const hf = mn(so);
Ae.PostgrestQueryBuilder = hf.default;
const ff = mn(bs);
Ae.PostgrestFilterBuilder = ff.default;
const mf = mn(io);
Ae.PostgrestTransformBuilder = mf.default;
const pf = mn(oo);
Ae.PostgrestBuilder = pf.default;
const gf = mn(ao);
Ae.PostgrestError = gf.default;
var _g = Ae.default = {
    PostgrestClient: df.default,
    PostgrestQueryBuilder: hf.default,
    PostgrestFilterBuilder: ff.default,
    PostgrestTransformBuilder: mf.default,
    PostgrestBuilder: pf.default,
    PostgrestError: gf.default
};
const {
    PostgrestClient: Sg,
    PostgrestQueryBuilder: Wv,
    PostgrestFilterBuilder: Gv,
    PostgrestTransformBuilder: Kv,
    PostgrestBuilder: Jv,
    PostgrestError: Qv
} = _g, Cg = "2.11.2", Pg = {
    "X-Client-Info": `realtime-js/${Cg}`
}, Eg = "1.0.0", yf = 1e4, Tg = 1e3;
var Zr;
(function(e) {
    e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed"
})(Zr || (Zr = {}));
var Fe;
(function(e) {
    e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving"
})(Fe || (Fe = {}));
var ot;
(function(e) {
    e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token"
})(ot || (ot = {}));
var qa;
(function(e) {
    e.websocket = "websocket"
})(qa || (qa = {}));
var fr;
(function(e) {
    e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed"
})(fr || (fr = {}));
class $g {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(t, r) {
        return t.constructor === ArrayBuffer ? r(this._binaryDecode(t)) : r(typeof t == "string" ? JSON.parse(t) : {})
    }
    _binaryDecode(t) {
        const r = new DataView(t),
            n = new TextDecoder;
        return this._decodeBroadcast(t, r, n)
    }
    _decodeBroadcast(t, r, n) {
        const s = r.getUint8(1),
            i = r.getUint8(2);
        let a = this.HEADER_LENGTH + 2;
        const c = n.decode(t.slice(a, a + s));
        a = a + s;
        const l = n.decode(t.slice(a, a + i));
        a = a + i;
        const u = JSON.parse(n.decode(t.slice(a, t.byteLength)));
        return {
            ref: null,
            topic: c,
            event: l,
            payload: u
        }
    }
}
class xf {
    constructor(t, r) {
        this.callback = t, this.timerCalc = r, this.timer = void 0, this.tries = 0, this.callback = t, this.timerCalc = r
    }
    reset() {
        this.tries = 0, clearTimeout(this.timer)
    }
    scheduleTimeout() {
        clearTimeout(this.timer), this.timer = setTimeout(() => {
            this.tries = this.tries + 1, this.callback()
        }, this.timerCalc(this.tries + 1))
    }
}
var K;
(function(e) {
    e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange"
})(K || (K = {}));
const xu = (e, t, r = {}) => {
        var n;
        const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
        return Object.keys(t).reduce((i, a) => (i[a] = Lg(a, e, t, s), i), {})
    },
    Lg = (e, t, r, n) => {
        const s = t.find(c => c.name === e),
            i = s == null ? void 0 : s.type,
            a = r[e];
        return i && !n.includes(i) ? vf(i, a) : Wa(a)
    },
    vf = (e, t) => {
        if (e.charAt(0) === "_") {
            const r = e.slice(1, e.length);
            return Dg(t, r)
        }
        switch (e) {
            case K.bool:
                return Rg(t);
            case K.float4:
            case K.float8:
            case K.int2:
            case K.int4:
            case K.int8:
            case K.numeric:
            case K.oid:
                return Ag(t);
            case K.json:
            case K.jsonb:
                return Og(t);
            case K.timestamp:
                return Ug(t);
            case K.abstime:
            case K.date:
            case K.daterange:
            case K.int4range:
            case K.int8range:
            case K.money:
            case K.reltime:
            case K.text:
            case K.time:
            case K.timestamptz:
            case K.timetz:
            case K.tsrange:
            case K.tstzrange:
                return Wa(t);
            default:
                return Wa(t)
        }
    },
    Wa = e => e,
    Rg = e => {
        switch (e) {
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return e
        }
    },
    Ag = e => {
        if (typeof e == "string") {
            const t = parseFloat(e);
            if (!Number.isNaN(t)) return t
        }
        return e
    },
    Og = e => {
        if (typeof e == "string") try {
            return JSON.parse(e)
        } catch (t) {
            return console.log(`JSON parse error: ${t}`), e
        }
        return e
    },
    Dg = (e, t) => {
        if (typeof e != "string") return e;
        const r = e.length - 1,
            n = e[r];
        if (e[0] === "{" && n === "}") {
            let i;
            const a = e.slice(1, r);
            try {
                i = JSON.parse("[" + a + "]")
            } catch {
                i = a ? a.split(",") : []
            }
            return i.map(c => vf(t, c))
        }
        return e
    },
    Ug = e => typeof e == "string" ? e.replace(" ", "T") : e,
    wf = e => {
        let t = e;
        return t = t.replace(/^ws/i, "http"), t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), t.replace(/\/+$/, "")
    };
class zo {
    constructor(t, r, n = {}, s = yf) {
        this.channel = t, this.event = r, this.payload = n, this.timeout = s, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null
    }
    resend(t) {
        this.timeout = t, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(t) {
        this.payload = Object.assign(Object.assign({}, this.payload), t)
    }
    receive(t, r) {
        var n;
        return this._hasReceived(t) && r((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({
            status: t,
            callback: r
        }), this
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
        const t = r => {
            this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = r, this._matchReceive(r)
        };
        this.channel._on(this.refEvent, {}, t), this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {})
        }, this.timeout)
    }
    trigger(t, r) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: t,
            response: r
        })
    }
    destroy() {
        this._cancelRefEvent(), this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
    }
    _matchReceive({
        status: t,
        response: r
    }) {
        this.recHooks.filter(n => n.status === t).forEach(n => n.callback(r))
    }
    _hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t
    }
}
var vu;
(function(e) {
    e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave"
})(vu || (vu = {}));
class Wn {
    constructor(t, r) {
        this.channel = t, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
            onJoin: () => {},
            onLeave: () => {},
            onSync: () => {}
        };
        const n = (r == null ? void 0 : r.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(n.state, {}, s => {
            const {
                onJoin: i,
                onLeave: a,
                onSync: c
            } = this.caller;
            this.joinRef = this.channel._joinRef(), this.state = Wn.syncState(this.state, s, i, a), this.pendingDiffs.forEach(l => {
                this.state = Wn.syncDiff(this.state, l, i, a)
            }), this.pendingDiffs = [], c()
        }), this.channel._on(n.diff, {}, s => {
            const {
                onJoin: i,
                onLeave: a,
                onSync: c
            } = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = Wn.syncDiff(this.state, s, i, a), c())
        }), this.onJoin((s, i, a) => {
            this.channel._trigger("presence", {
                event: "join",
                key: s,
                currentPresences: i,
                newPresences: a
            })
        }), this.onLeave((s, i, a) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: s,
                currentPresences: i,
                leftPresences: a
            })
        }), this.onSync(() => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        })
    }
    static syncState(t, r, n, s) {
        const i = this.cloneDeep(t),
            a = this.transformState(r),
            c = {},
            l = {};
        return this.map(i, (u, d) => {
            a[u] || (l[u] = d)
        }), this.map(a, (u, d) => {
            const f = i[u];
            if (f) {
                const h = d.map(b => b.presence_ref),
                    y = f.map(b => b.presence_ref),
                    v = d.filter(b => y.indexOf(b.presence_ref) < 0),
                    x = f.filter(b => h.indexOf(b.presence_ref) < 0);
                v.length > 0 && (c[u] = v), x.length > 0 && (l[u] = x)
            } else c[u] = d
        }), this.syncDiff(i, {
            joins: c,
            leaves: l
        }, n, s)
    }
    static syncDiff(t, r, n, s) {
        const {
            joins: i,
            leaves: a
        } = {
            joins: this.transformState(r.joins),
            leaves: this.transformState(r.leaves)
        };
        return n || (n = () => {}), s || (s = () => {}), this.map(i, (c, l) => {
            var u;
            const d = (u = t[c]) !== null && u !== void 0 ? u : [];
            if (t[c] = this.cloneDeep(l), d.length > 0) {
                const f = t[c].map(y => y.presence_ref),
                    h = d.filter(y => f.indexOf(y.presence_ref) < 0);
                t[c].unshift(...h)
            }
            n(c, d, l)
        }), this.map(a, (c, l) => {
            let u = t[c];
            if (!u) return;
            const d = l.map(f => f.presence_ref);
            u = u.filter(f => d.indexOf(f.presence_ref) < 0), t[c] = u, s(c, u, l), u.length === 0 && delete t[c]
        }), t
    }
    static map(t, r) {
        return Object.getOwnPropertyNames(t).map(n => r(n, t[n]))
    }
    static transformState(t) {
        return t = this.cloneDeep(t), Object.getOwnPropertyNames(t).reduce((r, n) => {
            const s = t[n];
            return "metas" in s ? r[n] = s.metas.map(i => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : r[n] = s, r
        }, {})
    }
    static cloneDeep(t) {
        return JSON.parse(JSON.stringify(t))
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var wu;
(function(e) {
    e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE"
})(wu || (wu = {}));
var ju;
(function(e) {
    e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system"
})(ju || (ju = {}));
var jt;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR"
})(jt || (jt = {}));
class Yl {
    constructor(t, r = {
        config: {}
    }, n) {
        this.topic = t, this.params = r, this.socket = n, this.bindings = {}, this.state = Fe.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: ""
            },
            private: !1
        }, r.config), this.timeout = this.socket.timeout, this.joinPush = new zo(this, ot.join, this.params, this.timeout), this.rejoinTimer = new xf(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
            this.state = Fe.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(s => s.send()), this.pushBuffer = []
        }), this._onClose(() => {
            this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = Fe.closed, this.socket._remove(this)
        }), this._onError(s => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s), this.state = Fe.errored, this.rejoinTimer.scheduleTimeout())
        }), this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = Fe.errored, this.rejoinTimer.scheduleTimeout())
        }), this._on(ot.reply, {}, (s, i) => {
            this._trigger(this._replyEventName(i), s)
        }), this.presence = new Wn(this), this.broadcastEndpointURL = wf(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1
    }
    subscribe(t, r = this.timeout) {
        var n, s;
        if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        {
            const {
                config: {
                    broadcast: i,
                    presence: a,
                    private: c
                }
            } = this.params;
            this._onError(d => t == null ? void 0 : t(jt.CHANNEL_ERROR, d)), this._onClose(() => t == null ? void 0 : t(jt.CLOSED));
            const l = {},
                u = {
                    broadcast: i,
                    presence: a,
                    postgres_changes: (s = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(d => d.filter)) !== null && s !== void 0 ? s : [],
                    private: c
                };
            this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({
                config: u
            }, l)), this.joinedOnce = !0, this._rejoin(r), this.joinPush.receive("ok", async ({
                postgres_changes: d
            }) => {
                var f;
                if (this.socket.setAuth(), d === void 0) {
                    t == null || t(jt.SUBSCRIBED);
                    return
                } else {
                    const h = this.bindings.postgres_changes,
                        y = (f = h == null ? void 0 : h.length) !== null && f !== void 0 ? f : 0,
                        v = [];
                    for (let x = 0; x < y; x++) {
                        const b = h[x],
                            {
                                filter: {
                                    event: p,
                                    schema: m,
                                    table: g,
                                    filter: w
                                }
                            } = b,
                            C = d && d[x];
                        if (C && C.event === p && C.schema === m && C.table === g && C.filter === w) v.push(Object.assign(Object.assign({}, b), {
                            id: C.id
                        }));
                        else {
                            this.unsubscribe(), t == null || t(jt.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = v, t && t(jt.SUBSCRIBED);
                    return
                }
            }).receive("error", d => {
                t == null || t(jt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")))
            }).receive("timeout", () => {
                t == null || t(jt.TIMED_OUT)
            })
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, r = {}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, r.timeout || this.timeout)
    }
    async untrack(t = {}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, r, n) {
        return this._on(t, r, n)
    }
    async send(t, r = {}) {
        var n, s;
        if (!this._canPush() && t.type === "broadcast") {
            const {
                event: i,
                payload: a
            } = t, l = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: i,
                        payload: a,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
                return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()), u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else return new Promise(i => {
            var a, c, l;
            const u = this._push(t.type, t, r.timeout || this.timeout);
            t.type === "broadcast" && !(!((l = (c = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || c === void 0 ? void 0 : c.broadcast) === null || l === void 0) && l.ack) && i("ok"), u.receive("ok", () => i("ok")), u.receive("error", () => i("error")), u.receive("timeout", () => i("timed out"))
        })
    }
    updateJoinPayload(t) {
        this.joinPush.updatePayload(t)
    }
    unsubscribe(t = this.timeout) {
        this.state = Fe.leaving;
        const r = () => {
            this.socket.log("channel", `leave ${this.topic}`), this._trigger(ot.close, "leave", this._joinRef())
        };
        return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise(n => {
            const s = new zo(this, ot.leave, {}, t);
            s.receive("ok", () => {
                r(), n("ok")
            }).receive("timeout", () => {
                r(), n("timed out")
            }).receive("error", () => {
                n("error")
            }), s.send(), this._canPush() || s.trigger("ok", {})
        })
    }
    async _fetchWithTimeout(t, r, n) {
        const s = new AbortController,
            i = setTimeout(() => s.abort(), n),
            a = await this.socket.fetch(t, Object.assign(Object.assign({}, r), {
                signal: s.signal
            }));
        return clearTimeout(i), a
    }
    _push(t, r, n = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new zo(this, t, r, n);
        return this._canPush() ? s.send() : (s.startTimeout(), this.pushBuffer.push(s)), s
    }
    _onMessage(t, r, n) {
        return r
    }
    _isMember(t) {
        return this.topic === t
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(t, r, n) {
        var s, i;
        const a = t.toLocaleLowerCase(),
            {
                close: c,
                error: l,
                leave: u,
                join: d
            } = ot;
        if (n && [c, l, u, d].indexOf(a) >= 0 && n !== this._joinRef()) return;
        let h = this._onMessage(a, r, n);
        if (r && !h) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(a) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter(y => {
            var v, x, b;
            return ((v = y.filter) === null || v === void 0 ? void 0 : v.event) === "*" || ((b = (x = y.filter) === null || x === void 0 ? void 0 : x.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase()) === a
        }).map(y => y.callback(h, n)) : (i = this.bindings[a]) === null || i === void 0 || i.filter(y => {
            var v, x, b, p, m, g;
            if (["broadcast", "presence", "postgres_changes"].includes(a))
                if ("id" in y) {
                    const w = y.id,
                        C = (v = y.filter) === null || v === void 0 ? void 0 : v.event;
                    return w && ((x = r.ids) === null || x === void 0 ? void 0 : x.includes(w)) && (C === "*" || (C == null ? void 0 : C.toLocaleLowerCase()) === ((b = r.data) === null || b === void 0 ? void 0 : b.type.toLocaleLowerCase()))
                } else {
                    const w = (m = (p = y == null ? void 0 : y.filter) === null || p === void 0 ? void 0 : p.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase();
                    return w === "*" || w === ((g = r == null ? void 0 : r.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase())
                }
            else return y.type.toLocaleLowerCase() === a
        }).map(y => {
            if (typeof h == "object" && "ids" in h) {
                const v = h.data,
                    {
                        schema: x,
                        table: b,
                        commit_timestamp: p,
                        type: m,
                        errors: g
                    } = v;
                h = Object.assign(Object.assign({}, {
                    schema: x,
                    table: b,
                    commit_timestamp: p,
                    eventType: m,
                    new: {},
                    old: {},
                    errors: g
                }), this._getPayloadRecords(v))
            }
            y.callback(h, n)
        })
    }
    _isClosed() {
        return this.state === Fe.closed
    }
    _isJoined() {
        return this.state === Fe.joined
    }
    _isJoining() {
        return this.state === Fe.joining
    }
    _isLeaving() {
        return this.state === Fe.leaving
    }
    _replyEventName(t) {
        return `chan_reply_${t}`
    }
    _on(t, r, n) {
        const s = t.toLocaleLowerCase(),
            i = {
                type: s,
                filter: r,
                callback: n
            };
        return this.bindings[s] ? this.bindings[s].push(i) : this.bindings[s] = [i], this
    }
    _off(t, r) {
        const n = t.toLocaleLowerCase();
        return this.bindings[n] = this.bindings[n].filter(s => {
            var i;
            return !(((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === n && Yl.isEqual(s.filter, r))
        }), this
    }
    static isEqual(t, r) {
        if (Object.keys(t).length !== Object.keys(r).length) return !1;
        for (const n in t)
            if (t[n] !== r[n]) return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
    }
    _onClose(t) {
        this._on(ot.close, {}, t)
    }
    _onError(t) {
        this._on(ot.error, {}, r => t(r))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t = this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = Fe.joining, this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const r = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (r.new = xu(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (r.old = xu(t.columns, t.old_record)), r
    }
}
const Ig = () => {},
    Mg = typeof WebSocket < "u",
    zg = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Fg {
    constructor(t, r) {
        var n;
        this.accessTokenValue = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = Pg, this.params = {}, this.timeout = yf, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Ig, this.conn = null, this.sendBuffer = [], this.serializer = new $g, this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        }, this.accessToken = null, this._resolveFetch = i => {
            let a;
            return i ? a = i : typeof fetch > "u" ? a = (...c) => ln(async () => {
                const {
                    default: l
                } = await Promise.resolve().then(() => fn);
                return {
                    default: l
                }
            }, void 0).then(({
                default: l
            }) => l(...c)) : a = fetch, (...c) => a(...c)
        }, this.endPoint = `${t}/${qa.websocket}`, this.httpEndpoint = wf(t), r != null && r.transport ? this.transport = r.transport : this.transport = null, r != null && r.params && (this.params = r.params), r != null && r.headers && (this.headers = Object.assign(Object.assign({}, this.headers), r.headers)), r != null && r.timeout && (this.timeout = r.timeout), r != null && r.logger && (this.logger = r.logger), r != null && r.heartbeatIntervalMs && (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
        const s = (n = r == null ? void 0 : r.params) === null || n === void 0 ? void 0 : n.apikey;
        if (s && (this.accessTokenValue = s, this.apiKey = s), this.reconnectAfterMs = r != null && r.reconnectAfterMs ? r.reconnectAfterMs : i => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4, this.encode = r != null && r.encode ? r.encode : (i, a) => a(JSON.stringify(i)), this.decode = r != null && r.decode ? r.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new xf(async () => {
                this.disconnect(), this.connect()
            }, this.reconnectAfterMs), this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch), r != null && r.worker) {
            if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
            this.worker = (r == null ? void 0 : r.worker) || !1, this.workerUrl = r == null ? void 0 : r.workerUrl
        }
        this.accessToken = (r == null ? void 0 : r.accessToken) || null
    }
    connect() {
        if (!this.conn) {
            if (this.transport) {
                this.conn = new this.transport(this.endpointURL(), void 0, {
                    headers: this.headers
                });
                return
            }
            if (Mg) {
                this.conn = new WebSocket(this.endpointURL()), this.setupConnection();
                return
            }
            this.conn = new Bg(this.endpointURL(), void 0, {
                close: () => {
                    this.conn = null
                }
            }), ln(async () => {
                const {
                    default: t
                } = await import("./browser-2pn7w1Ad.js").then(r => r.b);
                return {
                    default: t
                }
            }, []).then(({
                default: t
            }) => {
                this.conn = new t(this.endpointURL(), void 0, {
                    headers: this.headers
                }), this.setupConnection()
            })
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: Eg
        }))
    }
    disconnect(t, r) {
        this.conn && (this.conn.onclose = function() {}, t ? this.conn.close(t, r ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset())
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const r = await t.unsubscribe();
        return this.channels.length === 0 && this.disconnect(), r
    }
    async removeAllChannels() {
        const t = await Promise.all(this.channels.map(r => r.unsubscribe()));
        return this.disconnect(), t
    }
    log(t, r, n) {
        this.logger(t, r, n)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
            case Zr.connecting:
                return fr.Connecting;
            case Zr.open:
                return fr.Open;
            case Zr.closing:
                return fr.Closing;
            default:
                return fr.Closed
        }
    }
    isConnected() {
        return this.connectionState() === fr.Open
    }
    channel(t, r = {
        config: {}
    }) {
        const n = new Yl(`realtime:${t}`, r, this);
        return this.channels.push(n), n
    }
    push(t) {
        const {
            topic: r,
            event: n,
            payload: s,
            ref: i
        } = t, a = () => {
            this.encode(t, c => {
                var l;
                (l = this.conn) === null || l === void 0 || l.send(c)
            })
        };
        this.log("push", `${r} ${n} (${i})`, s), this.isConnected() ? a() : this.sendBuffer.push(a)
    }
    async setAuth(t = null) {
        let r = t || this.accessToken && await this.accessToken() || this.accessTokenValue;
        if (r) {
            let n = null;
            try {
                n = JSON.parse(atob(r.split(".")[1]))
            } catch {}
            if (n && n.exp && !(Math.floor(Date.now() / 1e3) - n.exp < 0)) return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${n.exp}`), Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${n.exp}`);
            this.accessTokenValue = r, this.channels.forEach(s => {
                r && s.updateJoinPayload({
                    access_token: r
                }), s.joinedOnce && s._isJoined() && s._push(ot.access_token, {
                    access_token: r
                })
            })
        }
    }
    async sendHeartbeat() {
        var t;
        if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (t = this.conn) === null || t === void 0 || t.close(Tg, "hearbeat timeout");
                return
            }
            this.pendingHeartbeatRef = this._makeRef(), this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            }), this.setAuth()
        }
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()), this.sendBuffer = [])
    }
    _makeRef() {
        let t = this.ref + 1;
        return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString()
    }
    _leaveOpenTopic(t) {
        let r = this.channels.find(n => n.topic === t && (n._isJoined() || n._isJoining()));
        r && (this.log("transport", `leaving duplicate topic "${t}"`), r.unsubscribe())
    }
    _remove(t) {
        this.channels = this.channels.filter(r => r._joinRef() !== t._joinRef())
    }
    setupConnection() {
        this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = t => this._onConnError(t), this.conn.onmessage = t => this._onConnMessage(t), this.conn.onclose = t => this._onConnClose(t))
    }
    _onConnMessage(t) {
        this.decode(t.data, r => {
            let {
                topic: n,
                event: s,
                payload: i,
                ref: a
            } = r;
            a && a === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${i.status||""} ${n} ${s} ${a&&"("+a+")"||""}`, i), this.channels.filter(c => c._isMember(n)).forEach(c => c._trigger(s, i, a)), this.stateChangeCallbacks.message.forEach(c => c(r))
        })
    }
    async _onConnOpen() {
        if (this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), !this.worker) this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        else {
            this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
            const t = this._workerObjectUrl(this.workerUrl);
            this.workerRef = new Worker(t), this.workerRef.onerror = r => {
                this.log("worker", "worker error", r.message), this.workerRef.terminate()
            }, this.workerRef.onmessage = r => {
                r.data.event === "keepAlive" && this.sendHeartbeat()
            }, this.workerRef.postMessage({
                event: "start",
                interval: this.heartbeatIntervalMs
            })
        }
        this.stateChangeCallbacks.open.forEach(t => t())
    }
    _onConnClose(t) {
        this.log("transport", "close", t), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(r => r(t))
    }
    _onConnError(t) {
        this.log("transport", t.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach(r => r(t))
    }
    _triggerChanError() {
        this.channels.forEach(t => t._trigger(ot.error))
    }
    _appendParams(t, r) {
        if (Object.keys(r).length === 0) return t;
        const n = t.match(/\?/) ? "&" : "?",
            s = new URLSearchParams(r);
        return `${t}${n}${s}`
    }
    _workerObjectUrl(t) {
        let r;
        if (t) r = t;
        else {
            const n = new Blob([zg], {
                type: "application/javascript"
            });
            r = URL.createObjectURL(n)
        }
        return r
    }
}
class Bg {
    constructor(t, r, n) {
        this.binaryType = "arraybuffer", this.onclose = () => {}, this.onerror = () => {}, this.onmessage = () => {}, this.onopen = () => {}, this.readyState = Zr.connecting, this.send = () => {}, this.url = null, this.url = t, this.close = n.close
    }
}
class Xl extends Error {
    constructor(t) {
        super(t), this.__isStorageError = !0, this.name = "StorageError"
    }
}

function he(e) {
    return typeof e == "object" && e !== null && "__isStorageError" in e
}
class Hg extends Xl {
    constructor(t, r) {
        super(t), this.name = "StorageApiError", this.status = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        }
    }
}
class Ga extends Xl {
    constructor(t, r) {
        super(t), this.name = "StorageUnknownError", this.originalError = r
    }
}
var Vg = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};
const jf = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = (...r) => ln(async () => {
            const {
                default: n
            } = await Promise.resolve().then(() => fn);
            return {
                default: n
            }
        }, void 0).then(({
            default: n
        }) => n(...r)) : t = fetch, (...r) => t(...r)
    },
    qg = () => Vg(void 0, void 0, void 0, function*() {
        return typeof Response > "u" ? (yield ln(() => Promise.resolve().then(() => fn), void 0)).Response : Response
    }),
    Ka = e => {
        if (Array.isArray(e)) return e.map(r => Ka(r));
        if (typeof e == "function" || e !== Object(e)) return e;
        const t = {};
        return Object.entries(e).forEach(([r, n]) => {
            const s = r.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
            t[s] = Ka(n)
        }), t
    };
var Cr = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};
const Fo = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
    Wg = (e, t, r) => Cr(void 0, void 0, void 0, function*() {
        const n = yield qg();
        e instanceof n && !(r != null && r.noResolveJson) ? e.json().then(s => {
            t(new Hg(Fo(s), e.status || 500))
        }).catch(s => {
            t(new Ga(Fo(s), s))
        }) : t(new Ga(Fo(e), e))
    }),
    Gg = (e, t, r, n) => {
        const s = {
            method: e,
            headers: (t == null ? void 0 : t.headers) || {}
        };
        return e === "GET" ? s : (s.headers = Object.assign({
            "Content-Type": "application/json"
        }, t == null ? void 0 : t.headers), n && (s.body = JSON.stringify(n)), Object.assign(Object.assign({}, s), r))
    };

function ks(e, t, r, n, s, i) {
    return Cr(this, void 0, void 0, function*() {
        return new Promise((a, c) => {
            e(r, Gg(t, n, s, i)).then(l => {
                if (!l.ok) throw l;
                return n != null && n.noResolveJson ? l : l.json()
            }).then(l => a(l)).catch(l => Wg(l, c, n))
        })
    })
}

function Di(e, t, r, n) {
    return Cr(this, void 0, void 0, function*() {
        return ks(e, "GET", t, r, n)
    })
}

function zt(e, t, r, n, s) {
    return Cr(this, void 0, void 0, function*() {
        return ks(e, "POST", t, n, s, r)
    })
}

function Kg(e, t, r, n, s) {
    return Cr(this, void 0, void 0, function*() {
        return ks(e, "PUT", t, n, s, r)
    })
}

function Jg(e, t, r, n) {
    return Cr(this, void 0, void 0, function*() {
        return ks(e, "HEAD", t, Object.assign(Object.assign({}, r), {
            noResolveJson: !0
        }), n)
    })
}

function bf(e, t, r, n, s) {
    return Cr(this, void 0, void 0, function*() {
        return ks(e, "DELETE", t, n, s, r)
    })
}
var Le = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};
const Qg = {
        limit: 100,
        offset: 0,
        sortBy: {
            column: "name",
            order: "asc"
        }
    },
    bu = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
    };
class Yg {
    constructor(t, r = {}, n, s) {
        this.url = t, this.headers = r, this.bucketId = n, this.fetch = jf(s)
    }
    uploadOrUpdate(t, r, n, s) {
        return Le(this, void 0, void 0, function*() {
            try {
                let i;
                const a = Object.assign(Object.assign({}, bu), s);
                let c = Object.assign(Object.assign({}, this.headers), t === "POST" && {
                    "x-upsert": String(a.upsert)
                });
                const l = a.metadata;
                typeof Blob < "u" && n instanceof Blob ? (i = new FormData, i.append("cacheControl", a.cacheControl), l && i.append("metadata", this.encodeMetadata(l)), i.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (i = n, i.append("cacheControl", a.cacheControl), l && i.append("metadata", this.encodeMetadata(l))) : (i = n, c["cache-control"] = `max-age=${a.cacheControl}`, c["content-type"] = a.contentType, l && (c["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), s != null && s.headers && (c = Object.assign(Object.assign({}, c), s.headers));
                const u = this._removeEmptyFolders(r),
                    d = this._getFinalPath(u),
                    f = yield this.fetch(`${this.url}/object/${d}`, Object.assign({
                        method: t,
                        body: i,
                        headers: c
                    }, a != null && a.duplex ? {
                        duplex: a.duplex
                    } : {})), h = yield f.json();
                return f.ok ? {
                    data: {
                        path: u,
                        id: h.Id,
                        fullPath: h.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: h
                }
            } catch (i) {
                if (he(i)) return {
                    data: null,
                    error: i
                };
                throw i
            }
        })
    }
    upload(t, r, n) {
        return Le(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, r, n)
        })
    }
    uploadToSignedUrl(t, r, n, s) {
        return Le(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(t),
                a = this._getFinalPath(i),
                c = new URL(this.url + `/object/upload/sign/${a}`);
            c.searchParams.set("token", r);
            try {
                let l;
                const u = Object.assign({
                        upsert: bu.upsert
                    }, s),
                    d = Object.assign(Object.assign({}, this.headers), {
                        "x-upsert": String(u.upsert)
                    });
                typeof Blob < "u" && n instanceof Blob ? (l = new FormData, l.append("cacheControl", u.cacheControl), l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n, l.append("cacheControl", u.cacheControl)) : (l = n, d["cache-control"] = `max-age=${u.cacheControl}`, d["content-type"] = u.contentType);
                const f = yield this.fetch(c.toString(), {
                    method: "PUT",
                    body: l,
                    headers: d
                }), h = yield f.json();
                return f.ok ? {
                    data: {
                        path: i,
                        fullPath: h.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: h
                }
            } catch (l) {
                if (he(l)) return {
                    data: null,
                    error: l
                };
                throw l
            }
        })
    }
    createSignedUploadUrl(t, r) {
        return Le(this, void 0, void 0, function*() {
            try {
                let n = this._getFinalPath(t);
                const s = Object.assign({}, this.headers);
                r != null && r.upsert && (s["x-upsert"] = "true");
                const i = yield zt(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, {
                    headers: s
                }), a = new URL(this.url + i.url), c = a.searchParams.get("token");
                if (!c) throw new Xl("No token returned by API");
                return {
                    data: {
                        signedUrl: a.toString(),
                        path: t,
                        token: c
                    },
                    error: null
                }
            } catch (n) {
                if (he(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    update(t, r, n) {
        return Le(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, r, n)
        })
    }
    move(t, r, n) {
        return Le(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield zt(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: r,
                        destinationBucket: n == null ? void 0 : n.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (s) {
                if (he(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    copy(t, r, n) {
        return Le(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield zt(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: t,
                            destinationKey: r,
                            destinationBucket: n == null ? void 0 : n.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (s) {
                if (he(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    createSignedUrl(t, r, n) {
        return Le(this, void 0, void 0, function*() {
            try {
                let s = this._getFinalPath(t),
                    i = yield zt(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({
                        expiresIn: r
                    }, n != null && n.transform ? {
                        transform: n.transform
                    } : {}), {
                        headers: this.headers
                    });
                const a = n != null && n.download ? `&download=${n.download===!0?"":n.download}` : "";
                return i = {
                    signedUrl: encodeURI(`${this.url}${i.signedURL}${a}`)
                }, {
                    data: i,
                    error: null
                }
            } catch (s) {
                if (he(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    createSignedUrls(t, r, n) {
        return Le(this, void 0, void 0, function*() {
            try {
                const s = yield zt(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: r,
                    paths: t
                }, {
                    headers: this.headers
                }), i = n != null && n.download ? `&download=${n.download===!0?"":n.download}` : "";
                return {
                    data: s.map(a => Object.assign(Object.assign({}, a), {
                        signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${i}`) : null
                    })),
                    error: null
                }
            } catch (s) {
                if (he(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    download(t, r) {
        return Le(this, void 0, void 0, function*() {
            const s = typeof(r == null ? void 0 : r.transform) < "u" ? "render/image/authenticated" : "object",
                i = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {}),
                a = i ? `?${i}` : "";
            try {
                const c = this._getFinalPath(t);
                return {
                    data: yield(yield Di(this.fetch, `${this.url}/${s}/${c}${a}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (c) {
                if (he(c)) return {
                    data: null,
                    error: c
                };
                throw c
            }
        })
    }
    info(t) {
        return Le(this, void 0, void 0, function*() {
            const r = this._getFinalPath(t);
            try {
                const n = yield Di(this.fetch, `${this.url}/object/info/${r}`, {
                    headers: this.headers
                });
                return {
                    data: Ka(n),
                    error: null
                }
            } catch (n) {
                if (he(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    exists(t) {
        return Le(this, void 0, void 0, function*() {
            const r = this._getFinalPath(t);
            try {
                return yield Jg(this.fetch, `${this.url}/object/${r}`, {
                    headers: this.headers
                }), {
                    data: !0,
                    error: null
                }
            } catch (n) {
                if (he(n) && n instanceof Ga) {
                    const s = n.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status)) return {
                        data: !1,
                        error: n
                    }
                }
                throw n
            }
        })
    }
    getPublicUrl(t, r) {
        const n = this._getFinalPath(t),
            s = [],
            i = r != null && r.download ? `download=${r.download===!0?"":r.download}` : "";
        i !== "" && s.push(i);
        const c = typeof(r == null ? void 0 : r.transform) < "u" ? "render/image" : "object",
            l = this.transformOptsToQueryString((r == null ? void 0 : r.transform) || {});
        l !== "" && s.push(l);
        let u = s.join("&");
        return u !== "" && (u = `?${u}`), {
            data: {
                publicUrl: encodeURI(`${this.url}/${c}/public/${n}${u}`)
            }
        }
    }
    remove(t) {
        return Le(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield bf(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (he(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    list(t, r, n) {
        return Le(this, void 0, void 0, function*() {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, Qg), r), {
                    prefix: t || ""
                });
                return {
                    data: yield zt(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, {
                        headers: this.headers
                    }, n),
                    error: null
                }
            } catch (s) {
                if (he(s)) return {
                    data: null,
                    error: s
                };
                throw s
            }
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(t) {
        const r = [];
        return t.width && r.push(`width=${t.width}`), t.height && r.push(`height=${t.height}`), t.resize && r.push(`resize=${t.resize}`), t.format && r.push(`format=${t.format}`), t.quality && r.push(`quality=${t.quality}`), r.join("&")
    }
}
const Xg = "2.7.1",
    Zg = {
        "X-Client-Info": `storage-js/${Xg}`
    };
var Tr = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};
class ey {
    constructor(t, r = {}, n) {
        this.url = t, this.headers = Object.assign(Object.assign({}, Zg), r), this.fetch = jf(n)
    }
    listBuckets() {
        return Tr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Di(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (he(t)) return {
                    data: null,
                    error: t
                };
                throw t
            }
        })
    }
    getBucket(t) {
        return Tr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Di(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (he(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    createBucket(t, r = {
        public: !1
    }) {
        return Tr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield zt(this.fetch, `${this.url}/bucket`, {
                        id: t,
                        name: t,
                        public: r.public,
                        file_size_limit: r.fileSizeLimit,
                        allowed_mime_types: r.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (he(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    updateBucket(t, r) {
        return Tr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Kg(this.fetch, `${this.url}/bucket/${t}`, {
                        id: t,
                        name: t,
                        public: r.public,
                        file_size_limit: r.fileSizeLimit,
                        allowed_mime_types: r.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (he(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    emptyBucket(t) {
        return Tr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield zt(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (he(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    deleteBucket(t) {
        return Tr(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield bf(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (he(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
}
class ty extends ey {
    constructor(t, r = {}, n) {
        super(t, r, n)
    }
    from(t) {
        return new Yg(this.url, this.headers, t, this.fetch)
    }
}
const ry = "2.49.4";
let Dn = "";
typeof Deno < "u" ? Dn = "deno" : typeof document < "u" ? Dn = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Dn = "react-native" : Dn = "node";
const ny = {
        "X-Client-Info": `supabase-js-${Dn}/${ry}`
    },
    sy = {
        headers: ny
    },
    iy = {
        schema: "public"
    },
    oy = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
    },
    ay = {};
var ly = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};
const cy = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = of : t = fetch, (...r) => t(...r)
    },
    uy = () => typeof Headers > "u" ? af : Headers,
    dy = (e, t, r) => {
        const n = cy(r),
            s = uy();
        return (i, a) => ly(void 0, void 0, void 0, function*() {
            var c;
            const l = (c = yield t()) !== null && c !== void 0 ? c : e;
            let u = new s(a == null ? void 0 : a.headers);
            return u.has("apikey") || u.set("apikey", e), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), n(i, Object.assign(Object.assign({}, a), {
                headers: u
            }))
        })
    };
var hy = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};

function fy(e) {
    return e.replace(/\/$/, "")
}

function my(e, t) {
    const {
        db: r,
        auth: n,
        realtime: s,
        global: i
    } = e, {
        db: a,
        auth: c,
        realtime: l,
        global: u
    } = t, d = {
        db: Object.assign(Object.assign({}, a), r),
        auth: Object.assign(Object.assign({}, c), n),
        realtime: Object.assign(Object.assign({}, l), s),
        global: Object.assign(Object.assign({}, u), i),
        accessToken: () => hy(this, void 0, void 0, function*() {
            return ""
        })
    };
    return e.accessToken ? d.accessToken = e.accessToken : delete d.accessToken, d
}
const kf = "2.69.1",
    Rr = 30 * 1e3,
    Ja = 3,
    Bo = Ja * Rr,
    py = "http://localhost:9999",
    gy = "supabase.auth.token",
    yy = {
        "X-Client-Info": `gotrue-js/${kf}`
    },
    Qa = "X-Supabase-Api-Version",
    Nf = {
        "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01"
        }
    },
    xy = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
    vy = 6e5;
class Zl extends Error {
    constructor(t, r, n) {
        super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = n
    }
}

function z(e) {
    return typeof e == "object" && e !== null && "__isAuthError" in e
}
class wy extends Zl {
    constructor(t, r, n) {
        super(t, r, n), this.name = "AuthApiError", this.status = r, this.code = n
    }
}

function jy(e) {
    return z(e) && e.name === "AuthApiError"
}
class _f extends Zl {
    constructor(t, r) {
        super(t), this.name = "AuthUnknownError", this.originalError = r
    }
}
class ar extends Zl {
    constructor(t, r, n, s) {
        super(t, n, s), this.name = r, this.status = n
    }
}
class Dt extends ar {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}

function by(e) {
    return z(e) && e.name === "AuthSessionMissingError"
}
class Ho extends ar {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Vs extends ar {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class qs extends ar {
    constructor(t, r = null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}

function ky(e) {
    return z(e) && e.name === "AuthImplicitGrantRedirectError"
}
class ku extends ar {
    constructor(t, r = null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class Ya extends ar {
    constructor(t, r) {
        super(t, "AuthRetryableFetchError", r, void 0)
    }
}

function Vo(e) {
    return z(e) && e.name === "AuthRetryableFetchError"
}
class Nu extends ar {
    constructor(t, r, n) {
        super(t, "AuthWeakPasswordError", r, "weak_password"), this.reasons = n
    }
}
class Gn extends ar {
    constructor(t) {
        super(t, "AuthInvalidJwtError", 400, "invalid_jwt")
    }
}
const _u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),
    Su = ` 	
\r=`.split(""),
    Ny = (() => {
        const e = new Array(128);
        for (let t = 0; t < e.length; t += 1) e[t] = -1;
        for (let t = 0; t < Su.length; t += 1) e[Su[t].charCodeAt(0)] = -2;
        for (let t = 0; t < _u.length; t += 1) e[_u[t].charCodeAt(0)] = t;
        return e
    })();

function Sf(e, t, r) {
    const n = Ny[e];
    if (n > -1)
        for (t.queue = t.queue << 6 | n, t.queuedBits += 6; t.queuedBits >= 8;) r(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
    else {
        if (n === -2) return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)
    }
}

function Cu(e) {
    const t = [],
        r = a => {
            t.push(String.fromCodePoint(a))
        },
        n = {
            utf8seq: 0,
            codepoint: 0
        },
        s = {
            queue: 0,
            queuedBits: 0
        },
        i = a => {
            Cy(a, n, r)
        };
    for (let a = 0; a < e.length; a += 1) Sf(e.charCodeAt(a), s, i);
    return t.join("")
}

function _y(e, t) {
    if (e <= 127) {
        t(e);
        return
    } else if (e <= 2047) {
        t(192 | e >> 6), t(128 | e & 63);
        return
    } else if (e <= 65535) {
        t(224 | e >> 12), t(128 | e >> 6 & 63), t(128 | e & 63);
        return
    } else if (e <= 1114111) {
        t(240 | e >> 18), t(128 | e >> 12 & 63), t(128 | e >> 6 & 63), t(128 | e & 63);
        return
    }
    throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)
}

function Sy(e, t) {
    for (let r = 0; r < e.length; r += 1) {
        let n = e.charCodeAt(r);
        if (n > 55295 && n <= 56319) {
            const s = (n - 55296) * 1024 & 65535;
            n = (e.charCodeAt(r + 1) - 56320 & 65535 | s) + 65536, r += 1
        }
        _y(n, t)
    }
}

function Cy(e, t, r) {
    if (t.utf8seq === 0) {
        if (e <= 127) {
            r(e);
            return
        }
        for (let n = 1; n < 6; n += 1)
            if (!(e >> 7 - n & 1)) {
                t.utf8seq = n;
                break
            } if (t.utf8seq === 2) t.codepoint = e & 31;
        else if (t.utf8seq === 3) t.codepoint = e & 15;
        else if (t.utf8seq === 4) t.codepoint = e & 7;
        else throw new Error("Invalid UTF-8 sequence");
        t.utf8seq -= 1
    } else if (t.utf8seq > 0) {
        if (e <= 127) throw new Error("Invalid UTF-8 sequence");
        t.codepoint = t.codepoint << 6 | e & 63, t.utf8seq -= 1, t.utf8seq === 0 && r(t.codepoint)
    }
}

function Py(e) {
    const t = [],
        r = {
            queue: 0,
            queuedBits: 0
        },
        n = s => {
            t.push(s)
        };
    for (let s = 0; s < e.length; s += 1) Sf(e.charCodeAt(s), r, n);
    return new Uint8Array(t)
}

function Ey(e) {
    const t = [];
    return Sy(e, r => t.push(r)), new Uint8Array(t)
}

function Ty(e) {
    return Math.round(Date.now() / 1e3) + e
}

function $y() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    })
}
const ht = () => typeof window < "u" && typeof document < "u",
    cr = {
        tested: !1,
        writable: !1
    },
    Kn = () => {
        if (!ht()) return !1;
        try {
            if (typeof globalThis.localStorage != "object") return !1
        } catch {
            return !1
        }
        if (cr.tested) return cr.writable;
        const e = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), cr.tested = !0, cr.writable = !0
        } catch {
            cr.tested = !0, cr.writable = !1
        }
        return cr.writable
    };

function Ly(e) {
    const t = {},
        r = new URL(e);
    if (r.hash && r.hash[0] === "#") try {
        new URLSearchParams(r.hash.substring(1)).forEach((s, i) => {
            t[i] = s
        })
    } catch {}
    return r.searchParams.forEach((n, s) => {
        t[s] = n
    }), t
}
const Cf = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = (...r) => ln(async () => {
            const {
                default: n
            } = await Promise.resolve().then(() => fn);
            return {
                default: n
            }
        }, void 0).then(({
            default: n
        }) => n(...r)) : t = fetch, (...r) => t(...r)
    },
    Ry = e => typeof e == "object" && e !== null && "status" in e && "ok" in e && "json" in e && typeof e.json == "function",
    Pf = async (e, t, r) => {
        await e.setItem(t, JSON.stringify(r))
    }, Ws = async (e, t) => {
        const r = await e.getItem(t);
        if (!r) return null;
        try {
            return JSON.parse(r)
        } catch {
            return r
        }
    }, Gs = async (e, t) => {
        await e.removeItem(t)
    };
class uo {
    constructor() {
        this.promise = new uo.promiseConstructor((t, r) => {
            this.resolve = t, this.reject = r
        })
    }
}
uo.promiseConstructor = Promise;

function qo(e) {
    const t = e.split(".");
    if (t.length !== 3) throw new Gn("Invalid JWT structure");
    for (let n = 0; n < t.length; n++)
        if (!xy.test(t[n])) throw new Gn("JWT not in base64url format");
    return {
        header: JSON.parse(Cu(t[0])),
        payload: JSON.parse(Cu(t[1])),
        signature: Py(t[2]),
        raw: {
            header: t[0],
            payload: t[1]
        }
    }
}
async function Ay(e) {
    return await new Promise(t => {
        setTimeout(() => t(null), e)
    })
}

function Oy(e, t) {
    return new Promise((n, s) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++) try {
                const a = await e(i);
                if (!t(i, null, a)) {
                    n(a);
                    return
                }
            } catch (a) {
                if (!t(i, a)) {
                    s(a);
                    return
                }
            }
        })()
    })
}

function Dy(e) {
    return ("0" + e.toString(16)).substr(-2)
}

function Uy() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            n = r.length;
        let s = "";
        for (let i = 0; i < 56; i++) s += r.charAt(Math.floor(Math.random() * n));
        return s
    }
    return crypto.getRandomValues(t), Array.from(t, Dy).join("")
}
async function Iy(e) {
    const r = new TextEncoder().encode(e),
        n = await crypto.subtle.digest("SHA-256", r),
        s = new Uint8Array(n);
    return Array.from(s).map(i => String.fromCharCode(i)).join("")
}
async function My(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
    const r = await Iy(e);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function $r(e, t, r = !1) {
    const n = Uy();
    let s = n;
    r && (s += "/PASSWORD_RECOVERY"), await Pf(e, `${t}-code-verifier`, s);
    const i = await My(n);
    return [i, n === i ? "plain" : "s256"]
}
const zy = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;

function Fy(e) {
    const t = e.headers.get(Qa);
    if (!t || !t.match(zy)) return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}

function By(e) {
    if (!e) throw new Error("Missing exp claim");
    const t = Math.floor(Date.now() / 1e3);
    if (e <= t) throw new Error("JWT has expired")
}

function Hy(e) {
    switch (e) {
        case "RS256":
            return {
                name: "RSASSA-PKCS1-v1_5", hash: {
                    name: "SHA-256"
                }
            };
        case "ES256":
            return {
                name: "ECDSA", namedCurve: "P-256", hash: {
                    name: "SHA-256"
                }
            };
        default:
            throw new Error("Invalid alg claim")
    }
}
var Vy = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
    return r
};
const hr = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
    qy = [502, 503, 504];
async function Pu(e) {
    var t;
    if (!Ry(e)) throw new Ya(hr(e), 0);
    if (qy.includes(e.status)) throw new Ya(hr(e), e.status);
    let r;
    try {
        r = await e.json()
    } catch (i) {
        throw new _f(hr(i), i)
    }
    let n;
    const s = Fy(e);
    if (s && s.getTime() >= Nf["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? n = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (n = r.error_code), n) {
        if (n === "weak_password") throw new Nu(hr(r), e.status, ((t = r.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (n === "session_not_found") throw new Dt
    } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0)) throw new Nu(hr(r), e.status, r.weak_password.reasons);
    throw new wy(hr(r), e.status || 500, n)
}
const Wy = (e, t, r, n) => {
    const s = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? s : (s.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers), s.body = JSON.stringify(n), Object.assign(Object.assign({}, s), r))
};
async function B(e, t, r, n) {
    var s;
    const i = Object.assign({}, n == null ? void 0 : n.headers);
    i[Qa] || (i[Qa] = Nf["2024-01-01"].name), n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`);
    const a = (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
    n != null && n.redirectTo && (a.redirect_to = n.redirectTo);
    const c = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "",
        l = await Gy(e, t, r + c, {
            headers: i,
            noResolveJson: n == null ? void 0 : n.noResolveJson
        }, {}, n == null ? void 0 : n.body);
    return n != null && n.xform ? n == null ? void 0 : n.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function Gy(e, t, r, n, s, i) {
    const a = Wy(t, n, s, i);
    let c;
    try {
        c = await e(r, Object.assign({}, a))
    } catch (l) {
        throw console.error(l), new Ya(hr(l), 0)
    }
    if (c.ok || await Pu(c), n != null && n.noResolveJson) return c;
    try {
        return await c.json()
    } catch (l) {
        await Pu(l)
    }
}

function Ut(e) {
    var t;
    let r = null;
    Yy(e) && (r = Object.assign({}, e), e.expires_at || (r.expires_at = Ty(e.expires_in)));
    const n = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: r,
            user: n
        },
        error: null
    }
}

function Eu(e) {
    const t = Ut(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) && (t.data.weak_password = e.weak_password), t
}

function Ht(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}

function Ky(e) {
    return {
        data: e,
        error: null
    }
}

function Jy(e) {
    const {
        action_link: t,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: i
    } = e, a = Vy(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), c = {
        action_link: t,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: i
    }, l = Object.assign({}, a);
    return {
        data: {
            properties: c,
            user: l
        },
        error: null
    }
}

function Qy(e) {
    return e
}

function Yy(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
var Xy = function(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
    return r
};
class Zy {
    constructor({
        url: t = "",
        headers: r = {},
        fetch: n
    }) {
        this.url = t, this.headers = r, this.fetch = Cf(n), this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(t, r = "global") {
        try {
            return await B(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }), {
                data: null,
                error: null
            }
        } catch (n) {
            if (z(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async inviteUserByEmail(t, r = {}) {
        try {
            return await B(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: r.data
                },
                headers: this.headers,
                redirectTo: r.redirectTo,
                xform: Ht
            })
        } catch (n) {
            if (z(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async generateLink(t) {
        try {
            const {
                options: r
            } = t, n = Xy(t, ["options"]), s = Object.assign(Object.assign({}, n), r);
            return "newEmail" in n && (s.new_email = n == null ? void 0 : n.newEmail, delete s.newEmail), await B(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: s,
                headers: this.headers,
                xform: Jy,
                redirectTo: r == null ? void 0 : r.redirectTo
            })
        } catch (r) {
            if (z(r)) return {
                data: {
                    properties: null,
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async createUser(t) {
        try {
            return await B(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: Ht
            })
        } catch (r) {
            if (z(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async listUsers(t) {
        var r, n, s, i, a, c, l;
        try {
            const u = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                },
                d = await B(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (n = (r = t == null ? void 0 : t.page) === null || r === void 0 ? void 0 : r.toString()) !== null && n !== void 0 ? n : "",
                        per_page: (i = (s = t == null ? void 0 : t.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && i !== void 0 ? i : ""
                    },
                    xform: Qy
                });
            if (d.error) throw d.error;
            const f = await d.json(),
                h = (a = d.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0,
                y = (l = (c = d.headers.get("link")) === null || c === void 0 ? void 0 : c.split(",")) !== null && l !== void 0 ? l : [];
            return y.length > 0 && (y.forEach(v => {
                const x = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
                    b = JSON.parse(v.split(";")[1].split("=")[1]);
                u[`${b}Page`] = x
            }), u.total = parseInt(h)), {
                data: Object.assign(Object.assign({}, f), u),
                error: null
            }
        } catch (u) {
            if (z(u)) return {
                data: {
                    users: []
                },
                error: u
            };
            throw u
        }
    }
    async getUserById(t) {
        try {
            return await B(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: Ht
            })
        } catch (r) {
            if (z(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async updateUserById(t, r) {
        try {
            return await B(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: r,
                headers: this.headers,
                xform: Ht
            })
        } catch (n) {
            if (z(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async deleteUser(t, r = !1) {
        try {
            return await B(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: r
                },
                xform: Ht
            })
        } catch (n) {
            if (z(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async _listFactors(t) {
        try {
            const {
                data: r,
                error: n
            } = await B(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: s => ({
                    data: {
                        factors: s
                    },
                    error: null
                })
            });
            return {
                data: r,
                error: n
            }
        } catch (r) {
            if (z(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _deleteFactor(t) {
        try {
            return {
                data: await B(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (r) {
            if (z(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
}
const ex = {
    getItem: e => Kn() ? globalThis.localStorage.getItem(e) : null,
    setItem: (e, t) => {
        Kn() && globalThis.localStorage.setItem(e, t)
    },
    removeItem: e => {
        Kn() && globalThis.localStorage.removeItem(e)
    }
};

function Tu(e = {}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, r) => {
            e[t] = r
        },
        removeItem: t => {
            delete e[t]
        }
    }
}

function tx() {
    if (typeof globalThis != "object") try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this
            },
            configurable: !0
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
    } catch {
        typeof self < "u" && (self.globalThis = self)
    }
}
const Lr = {
    debug: !!(globalThis && Kn() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Ef extends Error {
    constructor(t) {
        super(t), this.isAcquireTimeout = !0
    }
}
class rx extends Ef {}
async function nx(e, t, r) {
    Lr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const n = new globalThis.AbortController;
    return t > 0 && setTimeout(() => {
        n.abort(), Lr.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: n.signal
    }, async s => {
        if (s) {
            Lr.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, s.name);
            try {
                return await r()
            } finally {
                Lr.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, s.name)
            }
        } else {
            if (t === 0) throw Lr.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new rx(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (Lr.debug) try {
                const i = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "))
            } catch (i) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
            }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await r()
        }
    }))
}
tx();
const sx = {
    url: py,
    storageKey: gy,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: yy,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1
};
async function $u(e, t, r) {
    return await r()
}
class ms {
    constructor(t) {
        var r, n;
        this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = ms.nextInstanceID, ms.nextInstanceID += 1, this.instanceID > 0 && ht() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const s = Object.assign(Object.assign({}, sx), t);
        if (this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.persistSession = s.persistSession, this.storageKey = s.storageKey, this.autoRefreshToken = s.autoRefreshToken, this.admin = new Zy({
                url: s.url,
                headers: s.headers,
                fetch: s.fetch
            }), this.url = s.url, this.headers = s.headers, this.fetch = Cf(s.fetch), this.lock = s.lock || $u, this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, s.lock ? this.lock = s.lock : ht() && (!((r = globalThis == null ? void 0 : globalThis.navigator) === null || r === void 0) && r.locks) ? this.lock = nx : this.lock = $u, this.jwks = {
                keys: []
            }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER, this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
            }, this.persistSession ? s.storage ? this.storage = s.storage : Kn() ? this.storage = ex : (this.memoryStorage = {}, this.storage = Tu(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = Tu(this.memoryStorage)), ht() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (i) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i)
            }(n = this.broadcastChannel) === null || n === void 0 || n.addEventListener("message", async i => {
                this._debug("received broadcast notification from other tab or client", i), await this._notifyAllSubscribers(i.data.event, i.data.session, !1)
            })
        }
        this.initialize()
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${kf}) ${new Date().toISOString()}`, ...t), this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            const r = Ly(window.location.href);
            let n = "none";
            if (this._isImplicitGrantCallback(r) ? n = "implicit" : await this._isPKCECallback(r) && (n = "pkce"), ht() && this.detectSessionInUrl && n !== "none") {
                const {
                    data: s,
                    error: i
                } = await this._getSessionFromURL(r, n);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i), ky(i)) {
                        const l = (t = i.details) === null || t === void 0 ? void 0 : t.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable") return {
                            error: i
                        }
                    }
                    return await this._removeSession(), {
                        error: i
                    }
                }
                const {
                    session: a,
                    redirectType: c
                } = s;
                return this._debug("#_initialize()", "detected session in URL", a, "redirect type", c), await this._saveSession(a), setTimeout(async () => {
                    c === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a)
                }, 0), {
                    error: null
                }
            }
            return await this._recoverAndRefresh(), {
                error: null
            }
        } catch (r) {
            return z(r) ? {
                error: r
            } : {
                error: new _f("Unexpected error during initialization", r)
            }
        } finally {
            await this._handleVisibilityChange(), this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var r, n, s;
        try {
            const i = await B(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        data: (n = (r = t == null ? void 0 : t.options) === null || r === void 0 ? void 0 : r.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: (s = t == null ? void 0 : t.options) === null || s === void 0 ? void 0 : s.captchaToken
                        }
                    },
                    xform: Ut
                }),
                {
                    data: a,
                    error: c
                } = i;
            if (c || !a) return {
                data: {
                    user: null,
                    session: null
                },
                error: c
            };
            const l = a.session,
                u = a.user;
            return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (z(i)) return {
                data: {
                    user: null,
                    session: null
                },
                error: i
            };
            throw i
        }
    }
    async signUp(t) {
        var r, n, s;
        try {
            let i;
            if ("email" in t) {
                const {
                    email: d,
                    password: f,
                    options: h
                } = t;
                let y = null,
                    v = null;
                this.flowType === "pkce" && ([y, v] = await $r(this.storage, this.storageKey)), i = await B(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: h == null ? void 0 : h.emailRedirectTo,
                    body: {
                        email: d,
                        password: f,
                        data: (r = h == null ? void 0 : h.data) !== null && r !== void 0 ? r : {},
                        gotrue_meta_security: {
                            captcha_token: h == null ? void 0 : h.captchaToken
                        },
                        code_challenge: y,
                        code_challenge_method: v
                    },
                    xform: Ut
                })
            } else if ("phone" in t) {
                const {
                    phone: d,
                    password: f,
                    options: h
                } = t;
                i = await B(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: d,
                        password: f,
                        data: (n = h == null ? void 0 : h.data) !== null && n !== void 0 ? n : {},
                        channel: (s = h == null ? void 0 : h.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: {
                            captcha_token: h == null ? void 0 : h.captchaToken
                        }
                    },
                    xform: Ut
                })
            } else throw new Vs("You must provide either an email or phone number and a password");
            const {
                data: a,
                error: c
            } = i;
            if (c || !a) return {
                data: {
                    user: null,
                    session: null
                },
                error: c
            };
            const l = a.session,
                u = a.user;
            return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (z(i)) return {
                data: {
                    user: null,
                    session: null
                },
                error: i
            };
            throw i
        }
    }
    async signInWithPassword(t) {
        try {
            let r;
            if ("email" in t) {
                const {
                    email: i,
                    password: a,
                    options: c
                } = t;
                r = await B(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: a,
                        gotrue_meta_security: {
                            captcha_token: c == null ? void 0 : c.captchaToken
                        }
                    },
                    xform: Eu
                })
            } else if ("phone" in t) {
                const {
                    phone: i,
                    password: a,
                    options: c
                } = t;
                r = await B(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: a,
                        gotrue_meta_security: {
                            captcha_token: c == null ? void 0 : c.captchaToken
                        }
                    },
                    xform: Eu
                })
            } else throw new Vs("You must provide either an email or phone number and a password");
            const {
                data: n,
                error: s
            } = r;
            return s ? {
                data: {
                    user: null,
                    session: null
                },
                error: s
            } : !n || !n.session || !n.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Ho
            } : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
                data: Object.assign({
                    user: n.user,
                    session: n.session
                }, n.weak_password ? {
                    weakPassword: n.weak_password
                } : null),
                error: s
            })
        } catch (r) {
            if (z(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async signInWithOAuth(t) {
        var r, n, s, i;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
            scopes: (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
            queryParams: (s = t.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (i = t.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    }
    async _exchangeCodeForSession(t) {
        const r = await Ws(this.storage, `${this.storageKey}-code-verifier`),
            [n, s] = (r ?? "").split("/");
        try {
            const {
                data: i,
                error: a
            } = await B(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: n
                },
                xform: Ut
            });
            if (await Gs(this.storage, `${this.storageKey}-code-verifier`), a) throw a;
            return !i || !i.session || !i.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new Ho
            } : (i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), {
                data: Object.assign(Object.assign({}, i), {
                    redirectType: s ?? null
                }),
                error: a
            })
        } catch (i) {
            if (z(i)) return {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: i
            };
            throw i
        }
    }
    async signInWithIdToken(t) {
        try {
            const {
                options: r,
                provider: n,
                token: s,
                access_token: i,
                nonce: a
            } = t, c = await B(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: n,
                    id_token: s,
                    access_token: i,
                    nonce: a,
                    gotrue_meta_security: {
                        captcha_token: r == null ? void 0 : r.captchaToken
                    }
                },
                xform: Ut
            }), {
                data: l,
                error: u
            } = c;
            return u ? {
                data: {
                    user: null,
                    session: null
                },
                error: u
            } : !l || !l.session || !l.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Ho
            } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), {
                data: l,
                error: u
            })
        } catch (r) {
            if (z(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async signInWithOtp(t) {
        var r, n, s, i, a;
        try {
            if ("email" in t) {
                const {
                    email: c,
                    options: l
                } = t;
                let u = null,
                    d = null;
                this.flowType === "pkce" && ([u, d] = await $r(this.storage, this.storageKey));
                const {
                    error: f
                } = await B(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: c,
                        data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
                        create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: d
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: f
                }
            }
            if ("phone" in t) {
                const {
                    phone: c,
                    options: l
                } = t, {
                    data: u,
                    error: d
                } = await B(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: c,
                        data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                        create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (a = l == null ? void 0 : l.channel) !== null && a !== void 0 ? a : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: d
                }
            }
            throw new Vs("You must provide either an email or phone number.")
        } catch (c) {
            if (z(c)) return {
                data: {
                    user: null,
                    session: null
                },
                error: c
            };
            throw c
        }
    }
    async verifyOtp(t) {
        var r, n;
        try {
            let s, i;
            "options" in t && (s = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo, i = (n = t.options) === null || n === void 0 ? void 0 : n.captchaToken);
            const {
                data: a,
                error: c
            } = await B(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: s,
                xform: Ut
            });
            if (c) throw c;
            if (!a) throw new Error("An error occurred on token verification.");
            const l = a.session,
                u = a.user;
            return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (s) {
            if (z(s)) return {
                data: {
                    user: null,
                    session: null
                },
                error: s
            };
            throw s
        }
    }
    async signInWithSSO(t) {
        var r, n, s;
        try {
            let i = null,
                a = null;
            return this.flowType === "pkce" && ([i, a] = await $r(this.storage, this.storageKey)), await B(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? {
                    provider_id: t.providerId
                } : null), "domain" in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (n = (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && n !== void 0 ? n : void 0
                }), !((s = t == null ? void 0 : t.options) === null || s === void 0) && s.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: a
                }),
                headers: this.headers,
                xform: Ky
            })
        } catch (i) {
            if (z(i)) return {
                data: null,
                error: i
            };
            throw i
        }
    }
    async reauthenticate() {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {
                    data: {
                        session: r
                    },
                    error: n
                } = t;
                if (n) throw n;
                if (!r) throw new Dt;
                const {
                    error: s
                } = await B(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: r.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            })
        } catch (t) {
            if (z(t)) return {
                data: {
                    user: null,
                    session: null
                },
                error: t
            };
            throw t
        }
    }
    async resend(t) {
        try {
            const r = `${this.url}/resend`;
            if ("email" in t) {
                const {
                    email: n,
                    type: s,
                    options: i
                } = t, {
                    error: a
                } = await B(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        email: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    redirectTo: i == null ? void 0 : i.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: a
                }
            } else if ("phone" in t) {
                const {
                    phone: n,
                    type: s,
                    options: i
                } = t, {
                    data: a,
                    error: c
                } = await B(this.fetch, "POST", r, {
                    headers: this.headers,
                    body: {
                        phone: n,
                        type: s,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: a == null ? void 0 : a.message_id
                    },
                    error: c
                }
            }
            throw new Vs("You must provide either an email or phone number and a type")
        } catch (r) {
            if (z(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async getSession() {
        return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async r => r))
    }
    async _acquireLock(t, r) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(),
                    s = (async () => (await n, await r()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await s
                    } catch {}
                })()), s
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const n = r();
                    for (this.pendingInLock.push((async () => {
                            try {
                                await n
                            } catch {}
                        })()), await n; this.pendingInLock.length;) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s), this.pendingInLock.splice(0, s.length)
                    }
                    return await n
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1
                }
            })
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const r = await this.__loadSession();
            return await t(r)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const r = await Ws(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? t = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t) return {
                data: {
                    session: null
                },
                error: null
            };
            const n = t.expires_at ? t.expires_at * 1e3 - Date.now() < Bo : !1;
            if (this._debug("#__loadSession()", `session has${n?"":" not"} expired`, "expires_at", t.expires_at), !n) {
                if (this.storage.isServer) {
                    let a = this.suppressGetSessionWarning;
                    t = new Proxy(t, {
                        get: (l, u, d) => (!a && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, u, d))
                    })
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {
                session: s,
                error: i
            } = await this._callRefreshToken(t.refresh_token);
            return i ? {
                data: {
                    session: null
                },
                error: i
            } : {
                data: {
                    session: s
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        return t ? await this._getUser(t) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(t) {
        try {
            return t ? await B(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: Ht
            }) : await this._useSession(async r => {
                var n, s, i;
                const {
                    data: a,
                    error: c
                } = r;
                if (c) throw c;
                return !(!((n = a.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new Dt
                } : await B(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (s = a.session) === null || s === void 0 ? void 0 : s.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: Ht
                })
            })
        } catch (r) {
            if (z(r)) return by(r) && (await this._removeSession(), await Gs(this.storage, `${this.storageKey}-code-verifier`)), {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async updateUser(t, r = {}) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(t, r))
    }
    async _updateUser(t, r = {}) {
        try {
            return await this._useSession(async n => {
                const {
                    data: s,
                    error: i
                } = n;
                if (i) throw i;
                if (!s.session) throw new Dt;
                const a = s.session;
                let c = null,
                    l = null;
                this.flowType === "pkce" && t.email != null && ([c, l] = await $r(this.storage, this.storageKey));
                const {
                    data: u,
                    error: d
                } = await B(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: r == null ? void 0 : r.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: c,
                        code_challenge_method: l
                    }),
                    jwt: a.access_token,
                    xform: Ht
                });
                if (d) throw d;
                return a.user = u.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), {
                    data: {
                        user: a.user
                    },
                    error: null
                }
            })
        } catch (n) {
            if (z(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async setSession(t) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token) throw new Dt;
            const r = Date.now() / 1e3;
            let n = r,
                s = !0,
                i = null;
            const {
                payload: a
            } = qo(t.access_token);
            if (a.exp && (n = a.exp, s = n <= r), s) {
                const {
                    session: c,
                    error: l
                } = await this._callRefreshToken(t.refresh_token);
                if (l) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
                if (!c) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                i = c
            } else {
                const {
                    data: c,
                    error: l
                } = await this._getUser(t.access_token);
                if (l) throw l;
                i = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: c.user,
                    token_type: "bearer",
                    expires_in: n - r,
                    expires_at: n
                }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return {
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            }
        } catch (r) {
            if (z(r)) return {
                data: {
                    session: null,
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async refreshSession(t) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async r => {
                var n;
                if (!t) {
                    const {
                        data: a,
                        error: c
                    } = r;
                    if (c) throw c;
                    t = (n = a.session) !== null && n !== void 0 ? n : void 0
                }
                if (!(t != null && t.refresh_token)) throw new Dt;
                const {
                    session: s,
                    error: i
                } = await this._callRefreshToken(t.refresh_token);
                return i ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                } : s ? {
                    data: {
                        user: s.user,
                        session: s
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            })
        } catch (r) {
            if (z(r)) return {
                data: {
                    user: null,
                    session: null
                },
                error: r
            };
            throw r
        }
    }
    async _getSessionFromURL(t, r) {
        try {
            if (!ht()) throw new qs("No browser detected.");
            if (t.error || t.error_description || t.error_code) throw new qs(t.error_description || "Error in URL with unspecified error_description", {
                error: t.error || "unspecified_error",
                code: t.error_code || "unspecified_code"
            });
            switch (r) {
                case "implicit":
                    if (this.flowType === "pkce") throw new ku("Not a valid PKCE flow url.");
                    break;
                case "pkce":
                    if (this.flowType === "implicit") throw new qs("Not a valid implicit grant flow url.");
                    break;
                default:
            }
            if (r === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code) throw new ku("No code detected.");
                const {
                    data: m,
                    error: g
                } = await this._exchangeCodeForSession(t.code);
                if (g) throw g;
                const w = new URL(window.location.href);
                return w.searchParams.delete("code"), window.history.replaceState(window.history.state, "", w.toString()), {
                    data: {
                        session: m.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {
                provider_token: n,
                provider_refresh_token: s,
                access_token: i,
                refresh_token: a,
                expires_in: c,
                expires_at: l,
                token_type: u
            } = t;
            if (!i || !c || !a || !u) throw new qs("No session defined in URL");
            const d = Math.round(Date.now() / 1e3),
                f = parseInt(c);
            let h = d + f;
            l && (h = parseInt(l));
            const y = h - d;
            y * 1e3 <= Rr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${f}s`);
            const v = h - f;
            d - v >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", v, h, d) : d - v < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", v, h, d);
            const {
                data: x,
                error: b
            } = await this._getUser(i);
            if (b) throw b;
            const p = {
                provider_token: n,
                provider_refresh_token: s,
                access_token: i,
                expires_in: f,
                expires_at: h,
                refresh_token: a,
                token_type: u,
                user: x.user
            };
            return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), {
                data: {
                    session: p,
                    redirectType: t.type
                },
                error: null
            }
        } catch (n) {
            if (z(n)) return {
                data: {
                    session: null,
                    redirectType: null
                },
                error: n
            };
            throw n
        }
    }
    _isImplicitGrantCallback(t) {
        return !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const r = await Ws(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && r)
    }
    async signOut(t = {
        scope: "global"
    }) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(t))
    }
    async _signOut({
        scope: t
    } = {
        scope: "global"
    }) {
        return await this._useSession(async r => {
            var n;
            const {
                data: s,
                error: i
            } = r;
            if (i) return {
                error: i
            };
            const a = (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
            if (a) {
                const {
                    error: c
                } = await this.admin.signOut(a, t);
                if (c && !(jy(c) && (c.status === 404 || c.status === 401 || c.status === 403))) return {
                    error: c
                }
            }
            return t !== "others" && (await this._removeSession(), await Gs(this.storage, `${this.storageKey}-code-verifier`)), {
                error: null
            }
        })
    }
    onAuthStateChange(t) {
        const r = $y(),
            n = {
                id: r,
                callback: t,
                unsubscribe: () => {
                    this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r)
                }
            };
        return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, n), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
            this._emitInitialSession(r)
        })))(), {
            data: {
                subscription: n
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async r => {
            var n, s;
            try {
                const {
                    data: {
                        session: i
                    },
                    error: a
                } = r;
                if (a) throw a;
                await ((n = this.stateChangeEmitters.get(t)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", t, "session", i)
            } catch (i) {
                await ((s = this.stateChangeEmitters.get(t)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", t, "error", i), console.error(i)
            }
        })
    }
    async resetPasswordForEmail(t, r = {}) {
        let n = null,
            s = null;
        this.flowType === "pkce" && ([n, s] = await $r(this.storage, this.storageKey, !0));
        try {
            return await B(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: n,
                    code_challenge_method: s,
                    gotrue_meta_security: {
                        captcha_token: r.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: r.redirectTo
            })
        } catch (i) {
            if (z(i)) return {
                data: null,
                error: i
            };
            throw i
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {
                data: r,
                error: n
            } = await this.getUser();
            if (n) throw n;
            return {
                data: {
                    identities: (t = r.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            }
        } catch (r) {
            if (z(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async linkIdentity(t) {
        var r;
        try {
            const {
                data: n,
                error: s
            } = await this._useSession(async i => {
                var a, c, l, u, d;
                const {
                    data: f,
                    error: h
                } = i;
                if (h) throw h;
                const y = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (a = t.options) === null || a === void 0 ? void 0 : a.redirectTo,
                    scopes: (c = t.options) === null || c === void 0 ? void 0 : c.scopes,
                    queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await B(this.fetch, "GET", y, {
                    headers: this.headers,
                    jwt: (d = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && d !== void 0 ? d : void 0
                })
            });
            if (s) throw s;
            return ht() && !(!((r = t.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url), {
                data: {
                    provider: t.provider,
                    url: n == null ? void 0 : n.url
                },
                error: null
            }
        } catch (n) {
            if (z(n)) return {
                data: {
                    provider: t.provider,
                    url: null
                },
                error: n
            };
            throw n
        }
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {
                    data: i,
                    error: a
                } = r;
                if (a) throw a;
                return await B(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (s = (n = i.session) === null || n === void 0 ? void 0 : n.access_token) !== null && s !== void 0 ? s : void 0
                })
            })
        } catch (r) {
            if (z(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _refreshAccessToken(t) {
        const r = `#_refreshAccessToken(${t.substring(0,5)}...)`;
        this._debug(r, "begin");
        try {
            const n = Date.now();
            return await Oy(async s => (s > 0 && await Ay(200 * Math.pow(2, s - 1)), this._debug(r, "refreshing attempt", s), await B(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: Ut
            })), (s, i) => {
                const a = 200 * Math.pow(2, s);
                return i && Vo(i) && Date.now() + a - n < Rr
            })
        } catch (n) {
            if (this._debug(r, "error", n), z(n)) return {
                data: {
                    session: null,
                    user: null
                },
                error: n
            };
            throw n
        } finally {
            this._debug(r, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token" in t && "refresh_token" in t && "expires_at" in t
    }
    async _handleProviderSignIn(t, r) {
        const n = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: r.redirectTo,
            scopes: r.scopes,
            queryParams: r.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", r, "url", n), ht() && !r.skipBrowserRedirect && window.location.assign(n), {
            data: {
                provider: t,
                url: n
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t;
        const r = "#_recoverAndRefresh()";
        this._debug(r, "begin");
        try {
            const n = await Ws(this.storage, this.storageKey);
            if (this._debug(r, "session from storage", n), !this._isValidSession(n)) {
                this._debug(r, "session is not valid"), n !== null && await this._removeSession();
                return
            }
            const s = ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) * 1e3 - Date.now() < Bo;
            if (this._debug(r, `session has${s?"":" not"} expired with margin of ${Bo}s`), s) {
                if (this.autoRefreshToken && n.refresh_token) {
                    const {
                        error: i
                    } = await this._callRefreshToken(n.refresh_token);
                    i && (console.error(i), Vo(i) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", i), await this._removeSession()))
                }
            } else await this._notifyAllSubscribers("SIGNED_IN", n)
        } catch (n) {
            this._debug(r, "error", n), console.error(n);
            return
        } finally {
            this._debug(r, "end")
        }
    }
    async _callRefreshToken(t) {
        var r, n;
        if (!t) throw new Dt;
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${t.substring(0,5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new uo;
            const {
                data: i,
                error: a
            } = await this._refreshAccessToken(t);
            if (a) throw a;
            if (!i.session) throw new Dt;
            await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const c = {
                session: i.session,
                error: null
            };
            return this.refreshingDeferred.resolve(c), c
        } catch (i) {
            if (this._debug(s, "error", i), z(i)) {
                const a = {
                    session: null,
                    error: i
                };
                return Vo(i) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(a), a
            }
            throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(i), i
        } finally {
            this.refreshingDeferred = null, this._debug(s, "end")
        }
    }
    async _notifyAllSubscribers(t, r, n = !0) {
        const s = `#_notifyAllSubscribers(${t})`;
        this._debug(s, "begin", r, `broadcast = ${n}`);
        try {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: t,
                session: r
            });
            const i = [],
                a = Array.from(this.stateChangeEmitters.values()).map(async c => {
                    try {
                        await c.callback(t, r)
                    } catch (l) {
                        i.push(l)
                    }
                });
            if (await Promise.all(a), i.length > 0) {
                for (let c = 0; c < i.length; c += 1) console.error(i[c]);
                throw i[0]
            }
        } finally {
            this._debug(s, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0, await Pf(this.storage, this.storageKey, t)
    }
    async _removeSession() {
        this._debug("#_removeSession()"), await Gs(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && ht() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (r) {
            console.error("removing visibilitychange callback failed", r)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
        const t = setInterval(() => this._autoRefreshTokenTick(), Rr);
        this.autoRefreshTicker = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t), setTimeout(async () => {
            await this.initializePromise, await this._autoRefreshTokenTick()
        }, 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null, t && clearInterval(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async r => {
                            const {
                                data: {
                                    session: n
                                }
                            } = r;
                            if (!n || !n.refresh_token || !n.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const s = Math.floor((n.expires_at * 1e3 - t) / Rr);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${Rr}ms, refresh threshold is ${Ja} ticks`), s <= Ja && await this._callRefreshToken(n.refresh_token)
                        })
                    } catch (r) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", r)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            })
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof Ef) this._debug("auto refresh token tick lock not available");
            else throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"), !ht() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const r = `#_onVisibilityChanged(${t})`;
        this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), t || (await this.initializePromise, await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, r, n) {
        const s = [`provider=${encodeURIComponent(r)}`];
        if (n != null && n.redirectTo && s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
            const [i, a] = await $r(this.storage, this.storageKey), c = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(a)}`
            });
            s.push(c.toString())
        }
        if (n != null && n.queryParams) {
            const i = new URLSearchParams(n.queryParams);
            s.push(i.toString())
        }
        return n != null && n.skipBrowserRedirect && s.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${t}?${s.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async r => {
                var n;
                const {
                    data: s,
                    error: i
                } = r;
                return i ? {
                    data: null,
                    error: i
                } : await B(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                })
            })
        } catch (r) {
            if (z(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async r => {
                var n, s;
                const {
                    data: i,
                    error: a
                } = r;
                if (a) return {
                    data: null,
                    error: a
                };
                const c = Object.assign({
                        friendly_name: t.friendlyName,
                        factor_type: t.factorType
                    }, t.factorType === "phone" ? {
                        phone: t.phone
                    } : {
                        issuer: t.issuer
                    }),
                    {
                        data: l,
                        error: u
                    } = await B(this.fetch, "POST", `${this.url}/factors`, {
                        body: c,
                        headers: this.headers,
                        jwt: (n = i == null ? void 0 : i.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                return u ? {
                    data: null,
                    error: u
                } : (t.factorType === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), {
                    data: l,
                    error: null
                })
            })
        } catch (r) {
            if (z(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async _verify(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {
                        data: s,
                        error: i
                    } = r;
                    if (i) return {
                        data: null,
                        error: i
                    };
                    const {
                        data: a,
                        error: c
                    } = await B(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: {
                            code: t.code,
                            challenge_id: t.challengeId
                        },
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    });
                    return c ? {
                        data: null,
                        error: c
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + a.expires_in
                    }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), {
                        data: a,
                        error: c
                    })
                })
            } catch (r) {
                if (z(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    async _challenge(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async r => {
                    var n;
                    const {
                        data: s,
                        error: i
                    } = r;
                    return i ? {
                        data: null,
                        error: i
                    } : await B(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (n = s == null ? void 0 : s.session) === null || n === void 0 ? void 0 : n.access_token
                    })
                })
            } catch (r) {
                if (z(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    async _challengeAndVerify(t) {
        const {
            data: r,
            error: n
        } = await this._challenge({
            factorId: t.factorId
        });
        return n ? {
            data: null,
            error: n
        } : await this._verify({
            factorId: t.factorId,
            challengeId: r.id,
            code: t.code
        })
    }
    async _listFactors() {
        const {
            data: {
                user: t
            },
            error: r
        } = await this.getUser();
        if (r) return {
            data: null,
            error: r
        };
        const n = (t == null ? void 0 : t.factors) || [],
            s = n.filter(a => a.factor_type === "totp" && a.status === "verified"),
            i = n.filter(a => a.factor_type === "phone" && a.status === "verified");
        return {
            data: {
                all: n,
                totp: s,
                phone: i
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async t => {
            var r, n;
            const {
                data: {
                    session: s
                },
                error: i
            } = t;
            if (i) return {
                data: null,
                error: i
            };
            if (!s) return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
            const {
                payload: a
            } = qo(s.access_token);
            let c = null;
            a.aal && (c = a.aal);
            let l = c;
            ((n = (r = s.user.factors) === null || r === void 0 ? void 0 : r.filter(f => f.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (l = "aal2");
            const d = a.amr || [];
            return {
                data: {
                    currentLevel: c,
                    nextLevel: l,
                    currentAuthenticationMethods: d
                },
                error: null
            }
        }))
    }
    async fetchJwk(t, r = {
        keys: []
    }) {
        let n = r.keys.find(a => a.kid === t);
        if (n || (n = this.jwks.keys.find(a => a.kid === t), n && this.jwks_cached_at + vy > Date.now())) return n;
        const {
            data: s,
            error: i
        } = await B(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers
        });
        if (i) throw i;
        if (!s.keys || s.keys.length === 0) throw new Gn("JWKS is empty");
        if (this.jwks = s, this.jwks_cached_at = Date.now(), n = s.keys.find(a => a.kid === t), !n) throw new Gn("No matching signing key found in JWKS");
        return n
    }
    async getClaims(t, r = {
        keys: []
    }) {
        try {
            let n = t;
            if (!n) {
                const {
                    data: y,
                    error: v
                } = await this.getSession();
                if (v || !y.session) return {
                    data: null,
                    error: v
                };
                n = y.session.access_token
            }
            const {
                header: s,
                payload: i,
                signature: a,
                raw: {
                    header: c,
                    payload: l
                }
            } = qo(n);
            if (By(i.exp), !s.kid || s.alg === "HS256" || !("crypto" in globalThis && "subtle" in globalThis.crypto)) {
                const {
                    error: y
                } = await this.getUser(n);
                if (y) throw y;
                return {
                    data: {
                        claims: i,
                        header: s,
                        signature: a
                    },
                    error: null
                }
            }
            const u = Hy(s.alg),
                d = await this.fetchJwk(s.kid, r),
                f = await crypto.subtle.importKey("jwk", d, u, !0, ["verify"]);
            if (!await crypto.subtle.verify(u, f, a, Ey(`${c}.${l}`))) throw new Gn("Invalid JWT signature");
            return {
                data: {
                    claims: i,
                    header: s,
                    signature: a
                },
                error: null
            }
        } catch (n) {
            if (z(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
}
ms.nextInstanceID = 0;
const ix = ms;
class ox extends ix {
    constructor(t) {
        super(t)
    }
}
var ax = function(e, t, r, n) {
    function s(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        })
    }
    return new(r || (r = Promise))(function(i, a) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (f) {
                a(f)
            }
        }

        function l(d) {
            try {
                u(n.throw(d))
            } catch (f) {
                a(f)
            }
        }

        function u(d) {
            d.done ? i(d.value) : s(d.value).then(c, l)
        }
        u((n = n.apply(e, t || [])).next())
    })
};
class lx {
    constructor(t, r, n) {
        var s, i, a;
        if (this.supabaseUrl = t, this.supabaseKey = r, !t) throw new Error("supabaseUrl is required.");
        if (!r) throw new Error("supabaseKey is required.");
        const c = fy(t);
        this.realtimeUrl = `${c}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${c}/auth/v1`, this.storageUrl = `${c}/storage/v1`, this.functionsUrl = `${c}/functions/v1`;
        const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
            u = {
                db: iy,
                realtime: ay,
                auth: Object.assign(Object.assign({}, oy), {
                    storageKey: l
                }),
                global: sy
            },
            d = my(n ?? {}, u);
        this.storageKey = (s = d.auth.storageKey) !== null && s !== void 0 ? s : "", this.headers = (i = d.global.headers) !== null && i !== void 0 ? i : {}, d.accessToken ? (this.accessToken = d.accessToken, this.auth = new Proxy({}, {
            get: (f, h) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((a = d.auth) !== null && a !== void 0 ? a : {}, this.headers, d.global.fetch), this.fetch = dy(r, this._getAccessToken.bind(this), d.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, d.realtime)), this.rest = new Sg(`${c}/rest/v1`, {
            headers: this.headers,
            schema: d.db.schema,
            fetch: this.fetch
        }), d.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new rg(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    get storage() {
        return new ty(this.storageUrl, this.headers, this.fetch)
    }
    from(t) {
        return this.rest.from(t)
    }
    schema(t) {
        return this.rest.schema(t)
    }
    rpc(t, r = {}, n = {}) {
        return this.rest.rpc(t, r, n)
    }
    channel(t, r = {
        config: {}
    }) {
        return this.realtime.channel(t, r)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(t) {
        return this.realtime.removeChannel(t)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var t, r;
        return ax(this, void 0, void 0, function*() {
            if (this.accessToken) return yield this.accessToken();
            const {
                data: n
            } = yield this.auth.getSession();
            return (r = (t = n.session) === null || t === void 0 ? void 0 : t.access_token) !== null && r !== void 0 ? r : null
        })
    }
    _initSupabaseAuthClient({
        autoRefreshToken: t,
        persistSession: r,
        detectSessionInUrl: n,
        storage: s,
        storageKey: i,
        flowType: a,
        lock: c,
        debug: l
    }, u, d) {
        const f = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new ox({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, f), u),
            storageKey: i,
            autoRefreshToken: t,
            persistSession: r,
            detectSessionInUrl: n,
            storage: s,
            flowType: a,
            lock: c,
            debug: l,
            fetch: d,
            hasCustomAuthorizationHeader: "Authorization" in this.headers
        })
    }
    _initRealtimeClient(t) {
        return new Fg(this.realtimeUrl, Object.assign(Object.assign({}, t), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, t == null ? void 0 : t.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange((r, n) => {
            this._handleTokenChanged(r, "CLIENT", n == null ? void 0 : n.access_token)
        })
    }
    _handleTokenChanged(t, r, n) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== n ? this.changedAccessToken = n : t === "SIGNED_OUT" && (this.realtime.setAuth(), r == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0)
    }
}
const cx = (e, t, r) => new lx(e, t, r),
    ux = "https://zzesimsaufdkznzgewby.supabase.co",
    dx = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6ZXNpbXNhdWZka3puemdld2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxODA4ODAsImV4cCI6MjA2MDc1Njg4MH0.knF0ugGtNE-qtXLYCy0kC6vtFcaxv2OYpYFxOohAuPA",
    oe = cx(ux, dx, {
        auth: {
            persistSession: !0,
            autoRefreshToken: !0,
            detectSessionInUrl: !0,
            storageKey: "visualbuilder-auth-token"
        },
        global: {
            fetch: (...e) => {
                const t = new AbortController,
                    {
                        signal: r
                    } = t,
                    n = setTimeout(() => {
                        t.abort()
                    }, 15e3);
                return fetch(...e, {
                    signal: r
                }).then(s => (clearTimeout(n), s)).catch(s => {
                    throw clearTimeout(n), console.error("Supabase fetch error:", s), s
                })
            }
        }
    }),
    me = e => {
        var t, r, n;
        return console.error("Supabase error:", e), (t = e.message) != null && t.includes("network") || (r = e.message) != null && r.includes("fetch") ? {
            error: {
                message: "Network connection error. Please check your connection and try again."
            }
        } : e.code === "PGRST301" || (n = e.message) != null && n.includes("JWT") ? {
            error: {
                message: "Authentication error. Please sign in again."
            }
        } : {
            error: e.message ? {
                message: e.message
            } : {
                message: "An unknown error occurred"
            }
        }
    },
    ec = "visualbuilder-profile-cache",
    hx = 30 * 60 * 1e3,
    Wo = e => {
        try {
            const t = {
                profile: e,
                timestamp: Date.now()
            };
            localStorage.setItem(ec, JSON.stringify(t))
        } catch (t) {
            console.error("Error caching user profile:", t)
        }
    },
    fx = e => {
        try {
            const t = localStorage.getItem(ec);
            if (!t) return null;
            const r = JSON.parse(t);
            return r.profile && r.profile.id === e && Date.now() - r.timestamp < hx ? r.profile : null
        } catch (t) {
            return console.error("Error reading cached user profile:", t), null
        }
    },
    Lu = () => {
        try {
            localStorage.removeItem(ec)
        } catch (e) {
            console.error("Error clearing profile cache:", e)
        }
    };
let mx = {
        data: ""
    },
    px = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : e || mx,
    gx = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    yx = /\/\*[^]*?\*\/|  +/g,
    Ru = /\n+/g,
    Vt = (e, t) => {
        let r = "",
            n = "",
            s = "";
        for (let i in e) {
            let a = e[i];
            i[0] == "@" ? i[1] == "i" ? r = i + " " + a + ";" : n += i[1] == "f" ? Vt(a, i) : i + "{" + Vt(a, i[1] == "k" ? "" : t) + "}" : typeof a == "object" ? n += Vt(a, t ? t.replace(/([^,])+/g, c => i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, l => /&/.test(l) ? l.replace(/&/g, c) : c ? c + " " + l : l)) : i) : a != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), s += Vt.p ? Vt.p(i, a) : i + ":" + a + ";")
        }
        return r + (t && s ? t + "{" + s + "}" : s) + n
    },
    vt = {},
    Tf = e => {
        if (typeof e == "object") {
            let t = "";
            for (let r in e) t += r + Tf(e[r]);
            return t
        }
        return e
    },
    xx = (e, t, r, n, s) => {
        let i = Tf(e),
            a = vt[i] || (vt[i] = (l => {
                let u = 0,
                    d = 11;
                for (; u < l.length;) d = 101 * d + l.charCodeAt(u++) >>> 0;
                return "go" + d
            })(i));
        if (!vt[a]) {
            let l = i !== e ? e : (u => {
                let d, f, h = [{}];
                for (; d = gx.exec(u.replace(yx, ""));) d[4] ? h.shift() : d[3] ? (f = d[3].replace(Ru, " ").trim(), h.unshift(h[0][f] = h[0][f] || {})) : h[0][d[1]] = d[2].replace(Ru, " ").trim();
                return h[0]
            })(e);
            vt[a] = Vt(s ? {
                ["@keyframes " + a]: l
            } : l, r ? "" : "." + a)
        }
        let c = r && vt.g ? vt.g : null;
        return r && (vt.g = vt[a]), ((l, u, d, f) => {
            f ? u.data = u.data.replace(f, l) : u.data.indexOf(l) === -1 && (u.data = d ? l + u.data : u.data + l)
        })(vt[a], t, n, c), a
    },
    vx = (e, t, r) => e.reduce((n, s, i) => {
        let a = t[i];
        if (a && a.call) {
            let c = a(r),
                l = c && c.props && c.props.className || /^go/.test(c) && c;
            a = l ? "." + l : c && typeof c == "object" ? c.props ? "" : Vt(c, "") : c === !1 ? "" : c
        }
        return n + s + (a ?? "")
    }, "");

function ho(e) {
    let t = this || {},
        r = e.call ? e(t.p) : e;
    return xx(r.unshift ? r.raw ? vx(r, [].slice.call(arguments, 1), t.p) : r.reduce((n, s) => Object.assign(n, s && s.call ? s(t.p) : s), {}) : r, px(t.target), t.g, t.o, t.k)
}
let $f, Xa, Za;
ho.bind({
    g: 1
});
let $t = ho.bind({
    k: 1
});

function wx(e, t, r, n) {
    Vt.p = t, $f = e, Xa = r, Za = n
}

function lr(e, t) {
    let r = this || {};
    return function() {
        let n = arguments;

        function s(i, a) {
            let c = Object.assign({}, i),
                l = c.className || s.className;
            r.p = Object.assign({
                theme: Xa && Xa()
            }, c), r.o = / *go\d+/.test(l), c.className = ho.apply(r, n) + (l ? " " + l : "");
            let u = e;
            return e[0] && (u = c.as || e, delete c.as), Za && u[0] && Za(c), $f(u, c)
        }
        return s
    }
}
var jx = e => typeof e == "function",
    Ui = (e, t) => jx(e) ? e(t) : e,
    bx = (() => {
        let e = 0;
        return () => (++e).toString()
    })(),
    Lf = (() => {
        let e;
        return () => {
            if (e === void 0 && typeof window < "u") {
                let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches
            }
            return e
        }
    })(),
    kx = 20,
    Rf = (e, t) => {
        switch (t.type) {
            case 0:
                return {
                    ...e, toasts: [t.toast, ...e.toasts].slice(0, kx)
                };
            case 1:
                return {
                    ...e, toasts: e.toasts.map(i => i.id === t.toast.id ? {
                        ...i,
                        ...t.toast
                    } : i)
                };
            case 2:
                let {
                    toast: r
                } = t;
                return Rf(e, {
                    type: e.toasts.find(i => i.id === r.id) ? 1 : 0,
                    toast: r
                });
            case 3:
                let {
                    toastId: n
                } = t;
                return {
                    ...e, toasts: e.toasts.map(i => i.id === n || n === void 0 ? {
                        ...i,
                        dismissed: !0,
                        visible: !1
                    } : i)
                };
            case 4:
                return t.toastId === void 0 ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter(i => i.id !== t.toastId)
                };
            case 5:
                return {
                    ...e, pausedAt: t.time
                };
            case 6:
                let s = t.time - (e.pausedAt || 0);
                return {
                    ...e, pausedAt: void 0, toasts: e.toasts.map(i => ({
                        ...i,
                        pauseDuration: i.pauseDuration + s
                    }))
                }
        }
    },
    ai = [],
    yr = {
        toasts: [],
        pausedAt: void 0
    },
    Pr = e => {
        yr = Rf(yr, e), ai.forEach(t => {
            t(yr)
        })
    },
    Nx = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    _x = (e = {}) => {
        let [t, r] = k.useState(yr), n = k.useRef(yr);
        k.useEffect(() => (n.current !== yr && r(yr), ai.push(r), () => {
            let i = ai.indexOf(r);
            i > -1 && ai.splice(i, 1)
        }), []);
        let s = t.toasts.map(i => {
            var a, c, l;
            return {
                ...e,
                ...e[i.type],
                ...i,
                removeDelay: i.removeDelay || ((a = e[i.type]) == null ? void 0 : a.removeDelay) || (e == null ? void 0 : e.removeDelay),
                duration: i.duration || ((c = e[i.type]) == null ? void 0 : c.duration) || (e == null ? void 0 : e.duration) || Nx[i.type],
                style: {
                    ...e.style,
                    ...(l = e[i.type]) == null ? void 0 : l.style,
                    ...i.style
                }
            }
        });
        return {
            ...t,
            toasts: s
        }
    },
    Sx = (e, t = "blank", r) => ({
        createdAt: Date.now(),
        visible: !0,
        dismissed: !1,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...r,
        id: (r == null ? void 0 : r.id) || bx()
    }),
    Ns = e => (t, r) => {
        let n = Sx(t, e, r);
        return Pr({
            type: 2,
            toast: n
        }), n.id
    },
    Pe = (e, t) => Ns("blank")(e, t);
Pe.error = Ns("error");
Pe.success = Ns("success");
Pe.loading = Ns("loading");
Pe.custom = Ns("custom");
Pe.dismiss = e => {
    Pr({
        type: 3,
        toastId: e
    })
};
Pe.remove = e => Pr({
    type: 4,
    toastId: e
});
Pe.promise = (e, t, r) => {
    let n = Pe.loading(t.loading, {
        ...r,
        ...r == null ? void 0 : r.loading
    });
    return typeof e == "function" && (e = e()), e.then(s => {
        let i = t.success ? Ui(t.success, s) : void 0;
        return i ? Pe.success(i, {
            id: n,
            ...r,
            ...r == null ? void 0 : r.success
        }) : Pe.dismiss(n), s
    }).catch(s => {
        let i = t.error ? Ui(t.error, s) : void 0;
        i ? Pe.error(i, {
            id: n,
            ...r,
            ...r == null ? void 0 : r.error
        }) : Pe.dismiss(n)
    }), e
};
var Cx = (e, t) => {
        Pr({
            type: 1,
            toast: {
                id: e,
                height: t
            }
        })
    },
    Px = () => {
        Pr({
            type: 5,
            time: Date.now()
        })
    },
    Jn = new Map,
    Ex = 1e3,
    Tx = (e, t = Ex) => {
        if (Jn.has(e)) return;
        let r = setTimeout(() => {
            Jn.delete(e), Pr({
                type: 4,
                toastId: e
            })
        }, t);
        Jn.set(e, r)
    },
    $x = e => {
        let {
            toasts: t,
            pausedAt: r
        } = _x(e);
        k.useEffect(() => {
            if (r) return;
            let i = Date.now(),
                a = t.map(c => {
                    if (c.duration === 1 / 0) return;
                    let l = (c.duration || 0) + c.pauseDuration - (i - c.createdAt);
                    if (l < 0) {
                        c.visible && Pe.dismiss(c.id);
                        return
                    }
                    return setTimeout(() => Pe.dismiss(c.id), l)
                });
            return () => {
                a.forEach(c => c && clearTimeout(c))
            }
        }, [t, r]);
        let n = k.useCallback(() => {
                r && Pr({
                    type: 6,
                    time: Date.now()
                })
            }, [r]),
            s = k.useCallback((i, a) => {
                let {
                    reverseOrder: c = !1,
                    gutter: l = 8,
                    defaultPosition: u
                } = a || {}, d = t.filter(y => (y.position || u) === (i.position || u) && y.height), f = d.findIndex(y => y.id === i.id), h = d.filter((y, v) => v < f && y.visible).length;
                return d.filter(y => y.visible).slice(...c ? [h + 1] : [0, h]).reduce((y, v) => y + (v.height || 0) + l, 0)
            }, [t]);
        return k.useEffect(() => {
            t.forEach(i => {
                if (i.dismissed) Tx(i.id, i.removeDelay);
                else {
                    let a = Jn.get(i.id);
                    a && (clearTimeout(a), Jn.delete(i.id))
                }
            })
        }, [t]), {
            toasts: t,
            handlers: {
                updateHeight: Cx,
                startPause: Px,
                endPause: n,
                calculateOffset: s
            }
        }
    },
    Lx = $t`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    Rx = $t`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    Ax = $t`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    Ox = lr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Lx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Rx} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ax} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
    Dx = $t`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
    Ux = lr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Dx} 1s linear infinite;
`,
    Ix = $t`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
    Mx = $t`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
    zx = lr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ix} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Mx} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
    Fx = lr("div")`
  position: absolute;
`,
    Bx = lr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
    Hx = $t`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    Vx = lr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Hx} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
    qx = ({
        toast: e
    }) => {
        let {
            icon: t,
            type: r,
            iconTheme: n
        } = e;
        return t !== void 0 ? typeof t == "string" ? k.createElement(Vx, null, t) : t : r === "blank" ? null : k.createElement(Bx, null, k.createElement(Ux, {
            ...n
        }), r !== "loading" && k.createElement(Fx, null, r === "error" ? k.createElement(Ox, {
            ...n
        }) : k.createElement(zx, {
            ...n
        })))
    },
    Wx = e => `
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
    Gx = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,
    Kx = "0%{opacity:0;} 100%{opacity:1;}",
    Jx = "0%{opacity:1;} 100%{opacity:0;}",
    Qx = lr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
    Yx = lr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
    Xx = (e, t) => {
        let r = e.includes("top") ? 1 : -1,
            [n, s] = Lf() ? [Kx, Jx] : [Wx(r), Gx(r)];
        return {
            animation: t ? `${$t(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${$t(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
        }
    },
    Zx = k.memo(({
        toast: e,
        position: t,
        style: r,
        children: n
    }) => {
        let s = e.height ? Xx(e.position || t || "top-center", e.visible) : {
                opacity: 0
            },
            i = k.createElement(qx, {
                toast: e
            }),
            a = k.createElement(Yx, {
                ...e.ariaProps
            }, Ui(e.message, e));
        return k.createElement(Qx, {
            className: e.className,
            style: {
                ...s,
                ...r,
                ...e.style
            }
        }, typeof n == "function" ? n({
            icon: i,
            message: a
        }) : k.createElement(k.Fragment, null, i, a))
    });
wx(k.createElement);
var ev = ({
        id: e,
        className: t,
        style: r,
        onHeightUpdate: n,
        children: s
    }) => {
        let i = k.useCallback(a => {
            if (a) {
                let c = () => {
                    let l = a.getBoundingClientRect().height;
                    n(e, l)
                };
                c(), new MutationObserver(c).observe(a, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                })
            }
        }, [e, n]);
        return k.createElement("div", {
            ref: i,
            className: t,
            style: r
        }, s)
    },
    tv = (e, t) => {
        let r = e.includes("top"),
            n = r ? {
                top: 0
            } : {
                bottom: 0
            },
            s = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: Lf() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t*(r?1:-1)}px)`,
            ...n,
            ...s
        }
    },
    rv = ho`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    Ks = 16,
    nv = ({
        reverseOrder: e,
        position: t = "top-center",
        toastOptions: r,
        gutter: n,
        children: s,
        containerStyle: i,
        containerClassName: a
    }) => {
        let {
            toasts: c,
            handlers: l
        } = $x(r);
        return k.createElement("div", {
            id: "_rht_toaster",
            style: {
                position: "fixed",
                zIndex: 9999,
                top: Ks,
                left: Ks,
                right: Ks,
                bottom: Ks,
                pointerEvents: "none",
                ...i
            },
            className: a,
            onMouseEnter: l.startPause,
            onMouseLeave: l.endPause
        }, c.map(u => {
            let d = u.position || t,
                f = l.calculateOffset(u, {
                    reverseOrder: e,
                    gutter: n,
                    defaultPosition: t
                }),
                h = tv(d, f);
            return k.createElement(ev, {
                id: u.id,
                key: u.id,
                onHeightUpdate: l.updateHeight,
                className: u.visible ? rv : "",
                style: h
            }, u.type === "custom" ? Ui(u.message, u) : s ? s(u) : k.createElement(Zx, {
                toast: u,
                position: d
            }))
        }))
    },
    O = Pe;
const Af = k.createContext(void 0),
    sv = ({
        children: e
    }) => {
        const [t, r] = k.useState(null), [n, s] = k.useState(null), [i, a] = k.useState(!0), [c, l] = k.useState("Initializing");
        k.useEffect(() => {
            (async () => {
                try {
                    l("Checking session");
                    const {
                        data: {
                            session: m
                        }
                    } = await oe.auth.getSession();
                    if (m != null && m.user) {
                        r(m.user);
                        const g = fx(m.user.id);
                        g ? (s(g), l("Using cached profile"), d(m.user.id, !0)) : await d(m.user.id)
                    } else l("No active session"), a(!1)
                } catch (m) {
                    console.error("Error checking session:", m), l("Session check failed"), a(!1)
                }
            })();
            const {
                data: {
                    subscription: p
                }
            } = oe.auth.onAuthStateChange(async (m, g) => {
                m === "SIGNED_IN" && (g != null && g.user) ? (l("User signed in, loading profile"), r(g.user), await d(g.user.id)) : m === "SIGNED_OUT" ? (l("User signed out"), Lu(), r(null), s(null), a(!1)) : m === "TOKEN_REFRESHED" && (l("Session token refreshed"), g != null && g.user && r(g.user))
            });
            return () => {
                p.unsubscribe()
            }
        }, [!1]);
        const d = async (b, p = !1) => {
            p || l("Fetching user profile");
            try {
                const {
                    data: m,
                    error: g
                } = await oe.from("profiles").select("*").eq("id", b).single();
                if (g) {
                    console.error("Error fetching profile:", g), l("Profile fetch failed"), p || a(!1);
                    return
                }
                m ? (s(m), Wo(m), l("Profile loaded successfully")) : (s(null), l("No profile found"))
            } catch (m) {
                console.error("Error fetching user profile:", m), s(null), l("Profile fetch exception")
            } finally {
                p || a(!1)
            }
        }, f = async (b, p, m, g) => {
            try {
                a(!0), l("Creating account");
                const {
                    data: w,
                    error: C
                } = await oe.auth.signUp({
                    email: b,
                    password: p
                });
                if (C) throw C;
                if (!w.user) throw new Error("User creation failed");
                l("Creating profile");
                const {
                    error: S
                } = await oe.from("profiles").insert({
                    id: w.user.id,
                    username: m,
                    avatar_url: g,
                    is_premium: !1
                });
                if (S) throw S;
                l("Account created successfully"), O.success("Account created successfully!")
            } catch (w) {
                throw l("Sign up failed"), O.error(w.message || "Error creating account"), console.error("Error during signup:", w), w
            } finally {
                a(!1)
            }
        }, h = async (b, p) => {
            try {
                a(!0), l("Signing in");
                const {
                    data: m,
                    error: g
                } = await oe.auth.signInWithPassword({
                    email: b,
                    password: p
                });
                if (g) throw g;
                l("Sign in successful"), O.success("Signed in successfully!")
            } catch (m) {
                throw l("Sign in failed"), O.error(m.message || "Error signing in"), console.error("Error during signin:", m), m
            } finally {
                a(!1)
            }
        }, y = async () => {
            try {
                a(!0), l("Signing out"), r(null), s(null), Lu();
                const {
                    error: b
                } = await oe.auth.signOut();
                if (b) throw b;
                l("Sign out successful"), O.success("Signed out successfully")
            } catch (b) {
                throw l("Sign out failed"), O.error(b.message || "Error signing out"), console.error("Error during signout:", b), b
            } finally {
                a(!1)
            }
        }, v = async b => {
            if (!t) throw O.error("You must be signed in to update your profile"), new Error("User not authenticated");
            try {
                a(!0), l("Updating profile");
                const {
                    error: p
                } = await oe.from("profiles").update({
                    username: b.username,
                    avatar_url: b.avatar_url || b.avatarURL
                }).eq("id", t.id);
                if (p) throw p;
                const m = {
                    ...n || {
                        id: t.id,
                        username: "",
                        avatar_url: "",
                        is_premium: !1
                    },
                    username: b.username || (n == null ? void 0 : n.username) || "",
                    avatar_url: b.avatar_url || b.avatarURL || (n == null ? void 0 : n.avatar_url) || ""
                };
                s(m), Wo(m), l("Profile updated successfully"), O.success("Profile updated successfully!")
            } catch (p) {
                throw l("Profile update failed"), O.error(p.message || "Error updating profile"), console.error("Error updating profile:", p), p
            } finally {
                a(!1)
            }
        }, x = async () => {
            if (!t) throw new Error("User must be signed in to upgrade");
            try {
                a(!0), l("Upgrading to premium");
                const {
                    error: b
                } = await oe.from("profiles").update({
                    is_premium: !0
                }).eq("id", t.id);
                if (b) throw b;
                const p = {
                    ...n || {
                        id: t.id,
                        username: "",
                        avatar_url: ""
                    },
                    is_premium: !0
                };
                s(p), Wo(p), l("Upgrade successful"), O.success("Upgraded to premium successfully!")
            } catch (b) {
                throw l("Upgrade failed"), O.error(b.message || "Error upgrading to premium"), console.error("Error upgrading to premium:", b), b
            } finally {
                a(!1)
            }
        };
        return o.jsx(Af.Provider, {
            value: {
                user: t,
                userProfile: n,
                loading: i,
                loadingDetails: c,
                signUp: f,
                signIn: h,
                signOut: y,
                updateProfile: v,
                upgradeToPremium: x
            },
            children: e
        })
    },
    rt = () => {
        const e = k.useContext(Af);
        if (e === void 0) throw new Error("useAuth must be used within an AuthProvider");
        return e
    },
    tc = (e, t = [], r = [], n = null) => ({
        id: e.id,
        title: e.title,
        date: e.created_at || e.date,
        prompt: e.prompt,
        projectType: e.project_type,
        layout: e.layout,
        design: e.design,
        functionality: e.functionality,
        rating: e.rating,
        comment: e.comment,
        devURL: e.dev_url,
        prodURL: e.prod_url,
        showcase: e.showcase,
        screenshotURL: e.screenshot_url,
        author: e.user_id,
        authorName: (n == null ? void 0 : n.username) || "Anonymous",
        authorAvatar: (n == null ? void 0 : n.avatar_url) || "",
        likes: t.map(s => s.user_id),
        comments: r.map(s => {
            var i, a;
            return {
                id: s.id,
                text: s.text,
                author: s.user_id,
                authorName: ((i = s.profiles) == null ? void 0 : i.username) || "Anonymous",
                authorAvatar: ((a = s.profiles) == null ? void 0 : a.avatar_url) || "",
                date: s.created_at || new Date().toISOString()
            }
        })
    }),
    iv = (e, t) => ({
        title: e.title,
        prompt: e.prompt,
        project_type: e.projectType,
        layout: e.layout,
        design: e.design,
        functionality: e.functionality,
        rating: e.rating || null,
        comment: e.comment || null,
        dev_url: e.devURL || null,
        prod_url: e.prodURL || null,
        showcase: !1,
        screenshot_url: e.screenshotURL || null,
        user_id: t
    }),
    Of = async e => {
        try {
            console.log("Getting projects for user:", e);
            const {
                data: t,
                error: r
            } = await oe.from("projects").select(`
        *,
        profiles:user_id (username, avatar_url)
      `).order("created_at", {
                ascending: !1
            });
            if (r) return console.error("Error fetching projects:", r), me(r);
            console.log("Fetched projects:", t == null ? void 0 : t.length);
            const {
                data: n,
                error: s
            } = await oe.from("project_likes").select("*");
            if (s) return me(s);
            const {
                data: i,
                error: a
            } = await oe.from("project_comments").select(`
        *,
        profiles:user_id (username, avatar_url)
      `).order("created_at", {
                ascending: !0
            });
            if (a) return me(a);
            const c = {},
                l = {};
            n == null || n.forEach(h => {
                c[h.project_id] || (c[h.project_id] = []), c[h.project_id].push(h)
            }), i == null || i.forEach(h => {
                l[h.project_id] || (l[h.project_id] = []), l[h.project_id].push(h)
            });
            const u = (t == null ? void 0 : t.map(h => {
                    const y = c[h.id] || [],
                        v = l[h.id] || [];
                    return tc(h, y, v, h.profiles)
                })) || [],
                d = e ? u.filter(h => h.author === e) : [],
                f = u.filter(h => h.showcase);
            return console.log("User projects:", d.length), console.log("Showcase projects:", f.length), {
                data: {
                    userProjects: d,
                    showcaseProjects: f
                }
            }
        } catch (t) {
            return console.error("Error in getAllProjects:", t), me(t)
        }
    }, ov = async (e, t) => {
        if (!t) return {
            error: {
                message: "User not authenticated"
            }
        };
        try {
            console.log("Saving project with data:", JSON.stringify({
                title: e.title,
                author: e.author
            }));
            const r = iv(e, t);
            if (console.log("Transformed project for DB:", JSON.stringify({
                    title: r.title,
                    user_id: r.user_id
                })), !r.title || !r.prompt) return {
                error: {
                    message: "Project title and prompt are required"
                }
            };
            const {
                data: n,
                error: s
            } = await oe.from("projects").insert(r).select().single();
            return s ? (console.error("Error saving project to Supabase:", s), me(s)) : (console.log("Project saved successfully:", n), {
                data: tc(n)
            })
        } catch (r) {
            return console.error("Exception in saveProject:", r), me(r)
        }
    }, av = async (e, t, r) => {
        if (!r) return {
            error: {
                message: "User not authenticated"
            }
        };
        try {
            console.log("Updating project:", e, "with updates:", t);
            const {
                data: n,
                error: s
            } = await oe.from("projects").update(t).eq("id", e).eq("user_id", r).select().single();
            return s ? (console.error("Error updating project:", s), me(s)) : {
                data: tc(n)
            }
        } catch (n) {
            return console.error("Exception in updateProject:", n), me(n)
        }
    }, lv = async (e, t) => {
        if (!t) return {
            error: {
                message: "User not authenticated"
            }
        };
        try {
            const {
                error: r
            } = await oe.from("projects").delete().eq("id", e).eq("user_id", t);
            return r ? me(r) : {
                success: !0
            }
        } catch (r) {
            return console.error("Error in deleteProject:", r), me(r)
        }
    }, cv = async (e, t) => {
        if (!t) return {
            error: {
                message: "User not authenticated"
            }
        };
        try {
            const {
                data: r,
                error: n
            } = await oe.from("project_likes").select("id").eq("project_id", e).eq("user_id", t).single();
            if (n && n.code !== "PGRST116") return me(n);
            if (r) {
                const {
                    error: s
                } = await oe.from("project_likes").delete().eq("id", r.id);
                return s ? me(s) : {
                    success: !0,
                    action: "unliked"
                }
            } else {
                const {
                    error: s
                } = await oe.from("project_likes").insert({
                    id: no(),
                    project_id: e,
                    user_id: t
                });
                return s ? me(s) : {
                    success: !0,
                    action: "liked"
                }
            }
        } catch (r) {
            return console.error("Error in toggleProjectLike:", r), me(r)
        }
    }, uv = async (e, t, r) => {
        var n, s;
        if (!t) return {
            error: {
                message: "User not authenticated"
            }
        };
        try {
            const i = no(),
                {
                    data: a,
                    error: c
                } = await oe.from("project_comments").insert({
                    id: i,
                    project_id: e,
                    user_id: t,
                    text: r
                }).select(`
        *,
        profiles:user_id (username, avatar_url)
      `).single();
            return c ? me(c) : {
                data: {
                    id: a.id,
                    text: a.text,
                    author: a.user_id,
                    authorName: (n = a.profiles) == null ? void 0 : n.username,
                    authorAvatar: (s = a.profiles) == null ? void 0 : s.avatar_url,
                    date: a.created_at
                }
            }
        } catch (i) {
            return console.error("Error in addProjectComment:", i), me(i)
        }
    }, dv = async (e, t) => {
        if (!t) return {
            error: {
                message: "User not authenticated"
            }
        };
        try {
            const {
                error: r
            } = await oe.from("project_comments").delete().eq("id", e).eq("user_id", t);
            return r ? me(r) : {
                success: !0
            }
        } catch (r) {
            return console.error("Error in deleteProjectComment:", r), me(r)
        }
    }, rc = e => {
        var d, f;
        const {
            projectType: t,
            layout: r,
            design: n,
            functionality: s
        } = e, i = Df(e), a = Uf(e), c = gv(e);
        let l = `Create a ${n.theme||"[theme]"} ${((d=t.category)==null?void 0:d.toLowerCase())||"[project type]"}`;
        t.subcategory && (l += ` for ${t.subcategory}`), t.name && (l += ` named "${t.name}"`), l += ` with a ${((f=r.columns)==null?void 0:f.toLowerCase())||"single column"} layout`;
        const u = [];
        return r.header.include && u.push(r.header.complex ? "complex header with navigation" : "simple header"), r.footer.include && u.push(r.footer.complex ? "detailed footer with multiple sections" : "simple footer"), u.length > 0 && (l += ` featuring ${u.join(" and ")}`), t.description && (l += `. The tagline/description is: "${t.description}"`), n.language && (l += `. Implement ${n.language} design principles`, c && (l += ` (${c})`)), n.theme && (l += `. Use the following color palette: primary (${i.primary}), secondary (${i.secondary}), accent (${i.accent}), text (${i.text}), text secondary (${i.textSecondary})`), n.typography && (l += `. For typography, use ${a.heading} for headings and ${a.body} for body text`), n.icons && (l += `. Include ${n.icons} for the icon system`), n.illustrations && (l += ` and ${n.illustrations} illustration style for visual elements`), s.level && (l += `. Implement ${s.level.toLowerCase()} level functionality`), s.requirements.length > 0 && (l += ` with support for ${s.requirements.join(", ")}`), s.customFeatures.length > 0 && (l += `. Include these custom features: ${s.customFeatures.join(", ")}`), l += ".", l
    }, hv = e => {
        const {
            projectType: t,
            layout: r,
            design: n,
            functionality: s
        } = e, i = Df(e), a = Uf(e), c = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        let l = `# Product Requirements Document: ${t.name||"Untitled Project"}

`;
        return l += `## Project Overview

`, l += `**Project Name**: ${t.name||"Untitled Project"}
`, l += `**Project Type**: ${t.category||"Not specified"} - ${t.subcategory||"Not specified"}
`, l += `**Description**: ${t.description||"No description provided"}
`, l += `**Date Created**: ${c}

`, l += `## Project Requirements

`, l += `### Functionality

`, l += `**Functionality Level**: ${s.level||"Not specified"}

`, s.requirements.length > 0 && (l += `**Technical Requirements**:
`, s.requirements.forEach(u => {
            l += `- ${u}
`
        }), l += `
`), s.customFeatures.length > 0 && (l += `**Custom Features**:
`, s.customFeatures.forEach(u => {
            l += `- ${u}
`
        }), l += `
`), l += `### Layout Structure

`, l += `**Layout Type**: ${r.columns||"Single Column"}
`, l += `**Header**: ${r.header.include?`Yes (${r.header.complex?"Complex":"Simple"})`:"No"}
`, l += `**Footer**: ${r.footer.include?`Yes (${r.footer.complex?"Complex":"Simple"})`:"No"}

`, l += `## Design System

`, l += `### Design Language

`, l += `**Design System**: ${n.language||"Not specified"}
`, l += `**Theme**: ${n.theme||"Not specified"}${n.customTheme?" (Custom)":""}
`, l += `**Typography**: ${n.typography||"Not specified"}
`, l += `**Icons**: ${n.icons||"Not specified"}
`, l += `**Illustrations**: ${n.illustrations||"Not specified"}

`, l += `### Color Palette

`, l += `| Color Type | Hex Code |
`, l += `|------------|----------|
`, Object.entries(i).forEach(([u, d]) => {
            l += `| ${u} | ${d} |
`
        }), l += `
`, l += `### Typography

`, l += `| Text Type | Font Family |
`, l += `|-----------|-------------|
`, l += `| Headings  | ${a.heading} |
`, l += `| Body      | ${a.body} |

`, l += `## Generated Prompt

`, l += `\`\`\`
${rc(e)}
\`\`\`

`, l += `## Changelog

`, l += `| Date | Version | Description |
`, l += `|------|---------|-------------|
`, l += `| ${c} | 1.0.0 | Initial PRD created |

`, l += `## Additional Notes

`, l += `This document was automatically generated by the Visual AI Builder Tool. It captures the requirements and design decisions made during the project planning phase. Use this document as a reference when implementing the project.

`, l += `For any questions or further clarification, please refer to the project stakeholders or the design team.

`, l += `## User Research

`, l += `*This section should be completed with user research findings, including user personas, user stories, and user journey maps.*

`, l += `## Technical Architecture

`, l += `*This section should be completed with technical architecture details, including system diagrams, data models, and API specifications.*

`, l += `## Implementation Timeline

`, l += `*This section should be completed with the project timeline, including milestones, dependencies, and resource allocation.*

`, l
    }, fv = async (e, t, r) => {
        if (!r) throw O.error("You need to be signed in to save prompts"), new Error("User not authenticated");
        try {
            console.log("Saving prompt with title:", t);
            const n = {
                    id: no(),
                    title: t,
                    date: new Date().toISOString(),
                    prompt: rc(e),
                    projectType: {
                        ...e.projectType
                    },
                    layout: {
                        ...e.layout
                    },
                    design: {
                        ...e.design
                    },
                    functionality: {
                        ...e.functionality
                    },
                    showcase: !1,
                    author: r,
                    authorName: e.userProfile.username,
                    authorAvatar: e.userProfile.avatarURL
                },
                {
                    error: s
                } = await ov(n, r);
            if (s) throw console.error("Error saving project:", s), O.error(`Failed to save project: ${s.message}`), new Error(s.message);
            return O.success("Project saved successfully"), !0
        } catch (n) {
            throw console.error("Error in savePrompt:", n), O.error(n.message || "Something went wrong"), n
        }
    }, mv = async (e, t) => {
        if (!t) throw O.error("You need to be signed in to delete prompts"), new Error("User not authenticated");
        try {
            const {
                error: r
            } = await lv(e, t);
            if (r) throw O.error("Failed to delete project"), new Error(r.message);
            return O.success("Project deleted successfully"), !0
        } catch (r) {
            throw console.error("Error in deletePrompt:", r), O.error(r.message || "Something went wrong"), r
        }
    }, pv = async (e, t, r) => {
        if (!r) throw O.error("You need to be signed in to update projects"), new Error("User not authenticated");
        try {
            const n = {
                    rating: t.rating,
                    comment: t.comment,
                    dev_url: t.devURL,
                    prod_url: t.prodURL,
                    showcase: t.showcase,
                    screenshot_url: t.screenshotURL
                },
                {
                    error: s
                } = await av(e, n, r);
            if (s) throw O.error("Failed to update project"), new Error(s.message);
            return O.success("Project updated successfully"), !0
        } catch (n) {
            throw console.error("Error in updatePromptDetails:", n), O.error(n.message || "Something went wrong"), n
        }
    }, Df = e => {
        if (e.design.customTheme) return e.design.customTheme;
        switch (e.design.theme) {
            case "Light Modern":
                return {
                    primary: "#ffffff", secondary: "#f3f4f6", accent: "#3b82f6", text: "#111827", textSecondary: "#6b7280"
                };
            case "Dark Professional":
                return {
                    primary: "#1f2937", secondary: "#111827", accent: "#6366f1", text: "#f9fafb", textSecondary: "#e5e7eb"
                };
            case "Vibrant Creative":
                return {
                    primary: "#8b5cf6", secondary: "#ec4899", accent: "#f59e0b", text: "#ffffff", textSecondary: "#f3f4f6"
                };
            case "Minimalist":
                return {
                    primary: "#f9fafb", secondary: "#f3f4f6", accent: "#9ca3af", text: "#111827", textSecondary: "#6b7280"
                };
            case "Organic & Natural":
                return {
                    primary: "#fef3c7", secondary: "#fbbf24", accent: "#065f46", text: "#78350f", textSecondary: "#92400e"
                };
            case "Tech & Digital":
                return {
                    primary: "#eff6ff", secondary: "#bfdbfe", accent: "#2563eb", text: "#1e3a8a", textSecondary: "#3b82f6"
                };
            default:
                return {
                    primary: "#ffffff", secondary: "#f3f4f6", accent: "#3b82f6", text: "#111827", textSecondary: "#6b7280"
                }
        }
    }, Uf = e => {
        switch (e.design.typography) {
            case "Inter/Open Sans":
                return {
                    heading: "Inter", body: "Open Sans"
                };
            case "Playfair Display/Source Serif Pro":
                return {
                    heading: "Playfair Display", body: "Source Serif Pro"
                };
            case "Montserrat/Roboto":
                return {
                    heading: "Montserrat", body: "Roboto"
                };
            case "Poppins/Lato":
                return {
                    heading: "Poppins", body: "Lato"
                };
            case "Merriweather/Nunito Sans":
                return {
                    heading: "Merriweather", body: "Nunito Sans"
                };
            case "Raleway/Work Sans":
                return {
                    heading: "Raleway", body: "Work Sans"
                };
            case "Archivo/Open Sans":
                return {
                    heading: "Archivo", body: "Open Sans"
                };
            case "Fraunces/Outfit":
                return {
                    heading: "Fraunces", body: "Outfit"
                };
            case "Space Grotesk/Inter":
                return {
                    heading: "Space Grotesk", body: "Inter"
                };
            default:
                return {
                    heading: "Sans Serif", body: "Sans Serif"
                }
        }
    }, gv = e => {
        switch (e.design.language) {
            case "Material Design":
                return "Material Design principles with tactile surfaces, bold colors, and intentional hierarchy";
            case "Fluent Design":
                return "Microsoft's Fluent Design with light, depth, motion, and scale transitions";
            case "Apple Human Interface":
                return "Apple's Human Interface guidelines with clean, minimalist elements and careful typography";
            case "Tailwind Style":
                return "Tailwind's modern utility-first approach with clean aesthetics";
            case "Bootstrap Style":
                return "Bootstrap's consistent, responsive components and familiar interfaces";
            case "Neumorphism":
                return "Neumorphic soft UI with subtle shadows and clean interfaces";
            case "Digital Brutalism":
                return "Digital Brutalism with bold, raw, unapologetic visuals and high contrast";
            case "Glassmorphism":
                return "Glassmorphism with frosted glass effect, transparency and background blur";
            case "Claymorphism":
                return "Claymorphism with soft, rounded shapes with a clay-like appearance and subtle depth";
            default:
                return ""
        }
    }, yv = async (e, t) => {
        if (!t) throw O.error("You need to be signed in to like projects"), new Error("User not authenticated");
        try {
            const {
                error: r,
                action: n
            } = await cv(e, t);
            if (r) throw O.error("Failed to update like"), new Error(r.message);
            return {
                success: !0,
                action: n
            }
        } catch (r) {
            throw console.error("Error in likePrompt:", r), O.error(r.message || "Something went wrong"), r
        }
    }, xv = async (e, t, r, n, s) => {
        if (!t) throw O.error("You need to be signed in to comment"), new Error("User not authenticated");
        try {
            const {
                data: i,
                error: a
            } = await uv(e, t, r);
            if (a) throw O.error("Failed to add comment"), new Error(a.message);
            if (!i) throw O.error("No comment data returned"), new Error("No comment data returned");
            return i
        } catch (i) {
            throw console.error("Error in addComment:", i), O.error(i.message || "Something went wrong"), i
        }
    }, vv = async (e, t) => {
        if (!t) throw O.error("You need to be signed in to delete comments"), new Error("User not authenticated");
        try {
            const {
                error: r
            } = await dv(e, t);
            if (r) throw O.error("Failed to delete comment"), new Error(r.message);
            return {
                success: !0
            }
        } catch (r) {
            throw console.error("Error in deleteComment:", r), O.error(r.message || "Something went wrong"), r
        }
    }, If = () => `https://api.dicebear.com/7.x/micah/svg?seed=${Math.random().toString(36).substring(2,15)}&backgroundColor=b6e3f4,c0aede,d1d4f9`, wv = (e, t, r) => {
        const n = new Blob([e], {
                type: r
            }),
            s = URL.createObjectURL(n),
            i = document.createElement("a");
        return i.href = s, i.download = t, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(s), !0
    }, jv = async (e, t) => {
        if (!e) throw new Error("User not authenticated");
        try {
            console.log("Updating user profile:", {
                userId: e,
                data: t
            });
            const {
                error: r
            } = await oe.from("profiles").update({
                username: t.username,
                avatar_url: t.avatarURL
            }).eq("id", e);
            if (r) throw console.error("Error updating user profile:", r), r;
            return !0
        } catch (r) {
            throw console.error("Error in updateUserProfile:", r), r
        }
    }, bv = e => {
        let t = 0,
            r = 5,
            n = 0;
        e.projectType.category && n++, e.projectType.subcategory && n++, e.projectType.name && n++, e.projectType.description && n++, n >= 3 && t++, e.layout.columns && t++;
        let s = 0;
        return e.design.language && s++, e.design.theme && s++, e.design.typography && s++, e.design.icons && s++, e.design.illustrations && s++, s >= 3 && t++, (e.functionality.level || e.functionality.requirements.length > 0) && t++, e.design.icons && e.design.illustrations && t++, Math.round(t / r * 100)
    }, Au = {
        activePanel: "project-type",
        projectType: {
            category: "",
            subcategory: "",
            name: "",
            description: ""
        },
        layout: {
            columns: "Single Column",
            header: {
                include: !0,
                complex: !1
            },
            footer: {
                include: !0,
                complex: !1
            }
        },
        design: {
            language: "",
            theme: "",
            typography: "",
            icons: "",
            illustrations: ""
        },
        functionality: {
            level: "",
            requirements: [],
            customFeatures: []
        },
        showPreview: !0,
        isPremium: !1,
        savedPrompts: [],
        userProfile: {
            id: `user_${no().substring(0,8)}`,
            username: `Designer${Math.floor(Math.random()*1e4)}`,
            avatarURL: If()
        },
        isLoading: !1
    }, Mf = k.createContext(void 0), kv = ({
        children: e
    }) => {
        const [t, r] = k.useState(Au), {
            user: n,
            userProfile: s,
            upgradeToPremium: i
        } = rt(), a = !1;
        k.useEffect(() => {
            (async () => {
                n && s ? (r(N => ({
                    ...N,
                    isLoading: !0,
                    userProfile: {
                        id: n.id,
                        username: s.username || N.userProfile.username,
                        avatarURL: s.avatar_url || N.userProfile.avatarURL
                    },
                    isPremium: s.is_premium || !1
                })), await c()) : n || r(N => ({
                    ...Au,
                    projectType: N.projectType,
                    layout: N.layout,
                    design: N.design,
                    functionality: N.functionality,
                    showPreview: N.showPreview,
                    activePanel: N.activePanel,
                    isLoading: !1
                }))
            })()
        }, [n, s, a]);
        const c = async () => {
            if (n) try {
                r(D => ({
                    ...D,
                    isLoading: !0
                }));
                const {
                    data: T,
                    error: N
                } = await Of(n.id);
                if (N) {
                    O.error("Failed to load projects"), console.error("Error loading projects:", N), r(D => ({
                        ...D,
                        isLoading: !1
                    }));
                    return
                }
                T && r(D => ({
                    ...D,
                    savedPrompts: T.userProjects || [],
                    isLoading: !1
                }))
            } catch (T) {
                console.error("Error in loadProjects:", T), O.error("Something went wrong loading your projects"), r(N => ({
                    ...N,
                    isLoading: !1
                }))
            }
        }, l = T => {
            r(N => ({
                ...N,
                activePanel: T
            }))
        }, u = T => {
            r(N => ({
                ...N,
                projectType: {
                    ...N.projectType,
                    ...T
                }
            }))
        }, d = T => {
            r(N => ({
                ...N,
                layout: {
                    ...N.layout,
                    ...T
                }
            }))
        }, f = T => {
            r(N => ({
                ...N,
                design: {
                    ...N.design,
                    ...T
                }
            }))
        }, h = T => {
            r(N => ({
                ...N,
                functionality: {
                    ...N.functionality,
                    ...T
                }
            }))
        }, y = () => {
            r(T => ({
                ...T,
                showPreview: !T.showPreview
            }))
        }, v = async () => {
            r(T => ({
                ...T,
                isLoading: !0
            }));
            try {
                n ? (await i(), r(T => ({
                    ...T,
                    isPremium: !0,
                    isLoading: !1
                }))) : r(T => ({
                    ...T,
                    isPremium: !0,
                    isLoading: !1
                }))
            } catch (T) {
                throw console.error("WizardContext - Error upgrading to premium:", T), O.error("Failed to upgrade to premium"), r(N => ({
                    ...N,
                    isLoading: !1
                })), T
            }
        }, x = async T => {
            if (!n) {
                r(N => ({
                    ...N,
                    userProfile: {
                        ...N.userProfile,
                        ...T
                    }
                }));
                return
            }
            try {
                await jv(n.id, T), r(N => ({
                    ...N,
                    userProfile: {
                        ...N.userProfile,
                        ...T
                    }
                })), O.success("Profile updated successfully")
            } catch (N) {
                throw console.error("Error updating user profile:", N), O.error("Failed to update profile"), N
            }
        }, b = () => rc(t), p = () => bv(t), m = async T => {
            if (!n) {
                O.error("You need to be signed in to save prompts");
                return
            }
            try {
                r(N => ({
                    ...N,
                    isLoading: !0
                })), await fv(t, T, n.id), await c();
                return
            } catch (N) {
                throw console.error("Error in savePrompt:", N), r(D => ({
                    ...D,
                    isLoading: !1
                })), N
            }
        }, g = async T => {
            if (!n) {
                O.error("You need to be signed in to delete prompts");
                return
            }
            try {
                r(N => ({
                    ...N,
                    isLoading: !0
                })), await mv(T, n.id), r(N => ({
                    ...N,
                    isLoading: !1,
                    savedPrompts: N.savedPrompts.filter(D => D.id !== T)
                }))
            } catch (N) {
                throw console.error("Error deleting prompt:", N), r(D => ({
                    ...D,
                    isLoading: !1
                })), N
            }
        }, w = async (T, N) => {
            if (!n) {
                O.error("You need to be signed in to update projects");
                return
            }
            try {
                r(D => ({
                    ...D,
                    isLoading: !0
                })), await pv(T, N, n.id), await c()
            } catch (D) {
                throw console.error("Error updating prompt details:", D), r(W => ({
                    ...W,
                    isLoading: !1
                })), D
            }
        }, C = async T => {
            if (!n) {
                O.error("You need to be signed in to like projects");
                return
            }
            try {
                await yv(T, n.id), r(N => {
                    const D = N.savedPrompts.map(W => {
                        if (W.id === T) {
                            const I = W.likes || [],
                                je = I.includes(n.id) ? I.filter(ge => ge !== n.id) : [...I, n.id];
                            return {
                                ...W,
                                likes: je
                            }
                        }
                        return W
                    });
                    return {
                        ...N,
                        savedPrompts: D
                    }
                })
            } catch (N) {
                console.error("Error updating like:", N), O.error("Something went wrong")
            }
        }, S = async (T, N) => {
            if (!n) {
                O.error("You need to be signed in to comment");
                return
            }
            try {
                const D = await xv(T, n.id, N, t.userProfile.username, t.userProfile.avatarURL);
                if (!D) {
                    O.error("No comment data returned");
                    return
                }
                r(W => {
                    const I = W.savedPrompts.map(X => {
                        if (X.id === T) {
                            const je = X.comments || [];
                            return {
                                ...X,
                                comments: [...je, D]
                            }
                        }
                        return X
                    });
                    return {
                        ...W,
                        savedPrompts: I
                    }
                })
            } catch (D) {
                console.error("Error adding comment:", D), O.error("Something went wrong")
            }
        }, E = async (T, N) => {
            if (!n) {
                O.error("You need to be signed in to delete comments");
                return
            }
            try {
                await vv(N, n.id), r(D => {
                    const W = D.savedPrompts.map(I => I.id === T ? {
                        ...I,
                        comments: (I.comments || []).filter(X => X.id !== N)
                    } : I);
                    return {
                        ...D,
                        savedPrompts: W
                    }
                })
            } catch (D) {
                console.error("Error deleting comment:", D), O.error("Something went wrong")
            }
        }, A = () => If();
        return o.jsx(Mf.Provider, {
            value: {
                state: t,
                setActivePanel: l,
                updateProjectType: u,
                updateLayout: d,
                updateDesign: f,
                updateFunctionality: h,
                togglePreview: y,
                generatePrompt: b,
                getCompletionPercentage: p,
                togglePremium: v,
                savePrompt: m,
                deletePrompt: g,
                updatePromptDetails: w,
                likePrompt: C,
                addComment: S,
                deleteComment: E,
                updateUserProfile: x,
                getRandomAvatar: A
            },
            children: e
        })
    }, Me = () => {
        const e = k.useContext(Mf);
        if (e === void 0) throw new Error("useWizard must be used within a WizardProvider");
        return e
    }, fo = ({
        onClose: e
    }) => {
        const [t, r] = k.useState(!1), [n, s] = k.useState(""), [i, a] = k.useState(""), [c, l] = k.useState(""), [u, d] = k.useState(`https://api.dicebear.com/7.x/micah/svg?seed=${Math.random()}&backgroundColor=b6e3f4,c0aede,d1d4f9`), [f, h] = k.useState(!1), [y, v] = k.useState({}), {
            signUp: x,
            signIn: b,
            user: p
        } = rt();
        k.useEffect(() => {
            p && e()
        }, [p, e]);
        const m = () => {
                const S = {};
                let E = !0;
                return n.trim() ? /\S+@\S+\.\S+/.test(n) || (S.email = "Email is invalid", E = !1) : (S.email = "Email is required", E = !1), i ? i.length < 6 && (S.password = "Password must be at least 6 characters", E = !1) : (S.password = "Password is required", E = !1), t && !c.trim() && (S.username = "Username is required", E = !1), v(S), E
            },
            g = async S => {
                if (S.preventDefault(), !!m()) {
                    h(!0), v({});
                    try {
                        t ? (await x(n, i, c, u), O.success("Account created successfully! You can now sign in."), r(!1)) : await b(n, i)
                    } catch (E) {
                        console.error("Auth error:", E), v({
                            general: E.message || "Authentication failed. Please try again."
                        })
                    } finally {
                        h(!1)
                    }
                }
            }, w = () => {
                const S = Math.random().toString(36).substring(2, 15);
                d(`https://api.dicebear.com/7.x/micah/svg?seed=${S}&backgroundColor=b6e3f4,c0aede,d1d4f9`)
            }, C = S => {
                r(S), v({})
            };
        return o.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
            children: o.jsxs("div", {
                className: "bg-white rounded-lg w-full max-w-md mx-4",
                children: [o.jsxs("div", {
                    className: "p-5 flex justify-between items-center border-b border-gray-200",
                    children: [o.jsx("h3", {
                        className: "text-xl font-bold flex items-center",
                        children: t ? o.jsxs(o.Fragment, {
                            children: [o.jsx(Oi, {
                                className: "h-5 w-5 text-purple-600 mr-2"
                            }), " Create Account"]
                        }) : o.jsxs(o.Fragment, {
                            children: [o.jsx(E0, {
                                className: "h-5 w-5 text-purple-600 mr-2"
                            }), " Sign In"]
                        })
                    }), o.jsx("button", {
                        onClick: e,
                        className: "p-2 rounded-full hover:bg-gray-100",
                        type: "button",
                        children: o.jsx(Tt, {
                            className: "h-5 w-5 text-gray-500"
                        })
                    })]
                }), y.general && o.jsx("div", {
                    className: "mx-5 mt-4 p-3 bg-red-50 border border-red-100 rounded-md",
                    children: o.jsx("p", {
                        className: "text-sm text-red-600",
                        children: y.general
                    })
                }), o.jsx("form", {
                    onSubmit: g,
                    children: o.jsxs("div", {
                        className: "p-5",
                        children: [t && o.jsx("div", {
                            className: "mb-6",
                            children: o.jsx("div", {
                                className: "flex items-center justify-between mb-4",
                                children: o.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [o.jsxs("div", {
                                        className: "relative",
                                        children: [o.jsx("img", {
                                            src: u,
                                            alt: "User avatar",
                                            className: "h-14 w-14 rounded-full"
                                        }), o.jsx("button", {
                                            type: "button",
                                            onClick: w,
                                            className: "absolute bottom-0 right-0 p-1 bg-white rounded-full shadow-sm border border-gray-200 hover:bg-gray-50",
                                            children: o.jsx(fs, {
                                                className: "h-3 w-3 text-purple-600"
                                            })
                                        })]
                                    }), o.jsxs("div", {
                                        children: [o.jsx("label", {
                                            htmlFor: "username",
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Username"
                                        }), o.jsxs("div", {
                                            className: "relative",
                                            children: [o.jsx("div", {
                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                children: o.jsx(ro, {
                                                    className: "h-4 w-4 text-gray-400"
                                                })
                                            }), o.jsx("input", {
                                                id: "username",
                                                type: "text",
                                                value: c,
                                                onChange: S => {
                                                    l(S.target.value), y.username && v({
                                                        ...y,
                                                        username: void 0
                                                    })
                                                },
                                                className: `pl-10 w-full px-3 py-2 border ${y.username?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-purple-500"} rounded-md focus:outline-none focus:ring-2 focus:border-transparent`,
                                                placeholder: "Choose a username"
                                            }), y.username && o.jsx("p", {
                                                className: "mt-1 text-sm text-red-600",
                                                children: y.username
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), o.jsxs("div", {
                            className: "mb-4",
                            children: [o.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Email"
                            }), o.jsxs("div", {
                                className: "relative",
                                children: [o.jsx("div", {
                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: o.jsx($0, {
                                        className: "h-4 w-4 text-gray-400"
                                    })
                                }), o.jsx("input", {
                                    id: "email",
                                    type: "email",
                                    value: n,
                                    onChange: S => {
                                        s(S.target.value), y.email && v({
                                            ...y,
                                            email: void 0
                                        })
                                    },
                                    className: `pl-10 w-full px-3 py-2 border ${y.email?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-purple-500"} rounded-md focus:outline-none focus:ring-2 focus:border-transparent`,
                                    placeholder: "your@email.com"
                                }), y.email && o.jsx("p", {
                                    className: "mt-1 text-sm text-red-600",
                                    children: y.email
                                })]
                            })]
                        }), o.jsxs("div", {
                            className: "mb-6",
                            children: [o.jsx("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Password"
                            }), o.jsxs("div", {
                                className: "relative",
                                children: [o.jsx("div", {
                                    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: o.jsx(pt, {
                                        className: "h-4 w-4 text-gray-400"
                                    })
                                }), o.jsx("input", {
                                    id: "password",
                                    type: "password",
                                    value: i,
                                    onChange: S => {
                                        a(S.target.value), y.password && v({
                                            ...y,
                                            password: void 0
                                        })
                                    },
                                    className: `pl-10 w-full px-3 py-2 border ${y.password?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-purple-500"} rounded-md focus:outline-none focus:ring-2 focus:border-transparent`,
                                    placeholder: "••••••••"
                                }), y.password && o.jsx("p", {
                                    className: "mt-1 text-sm text-red-600",
                                    children: y.password
                                })]
                            })]
                        }), o.jsx("button", {
                            type: "submit",
                            disabled: f,
                            className: `w-full py-2.5 px-4 rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors ${f?"opacity-70 cursor-not-allowed":""}`,
                            children: f ? "Processing..." : t ? "Create Account" : "Sign In"
                        })]
                    })
                }), o.jsx("div", {
                    className: "px-5 py-4 bg-gray-50 rounded-b-lg border-t border-gray-200 text-center",
                    children: t ? o.jsxs("div", {
                        className: "flex items-center justify-center gap-1 text-sm",
                        children: [o.jsx("span", {
                            children: "Already have an account?"
                        }), o.jsx("button", {
                            type: "button",
                            onClick: () => C(!1),
                            className: "text-purple-600 hover:text-purple-800 font-medium",
                            children: "Sign In"
                        })]
                    }) : o.jsxs("div", {
                        className: "flex items-center justify-center gap-1 text-sm",
                        children: [o.jsx("span", {
                            children: "Don't have an account?"
                        }), o.jsx("button", {
                            type: "button",
                            onClick: () => C(!0),
                            className: "text-purple-600 hover:text-purple-800 font-medium",
                            children: "Create Account"
                        })]
                    })
                })]
            })
        })
    }, _s = ({
        onClose: e
    }) => {
        const [t, r] = k.useState(!1), [n, s] = k.useState(null), [i, a] = k.useState(!1), {
            user: c,
            userProfile: l,
            loadingDetails: u
        } = rt(), {
            togglePremium: d
        } = Me(), f = k.useRef(null), h = k.useRef(!0), y = !1;
        k.useEffect(() => (h.current = !0, () => {
            h.current = !1, f.current && clearTimeout(f.current)
        }), []);
        const v = async () => {
            if (!c) {
                a(!0);
                return
            }
            if (l != null && l.is_premium) {
                e();
                return
            }
            try {
                r(!0), s(null), f.current = setTimeout(() => {
                    h.current && (r(!1), s("Request timed out. Please try again."), O.error("Premium upgrade request timed out."))
                }, 1e4), await d(), f.current && (clearTimeout(f.current), f.current = null), h.current && (O.success("Premium features activated!"), setTimeout(() => e(), 1e3))
            } catch (x) {
                f.current && (clearTimeout(f.current), f.current = null), h.current && (console.error("Premium upgrade error:", x), s("Something went wrong. Please try again."), O.error("Failed to upgrade to premium."))
            } finally {
                h.current && r(!1)
            }
        };
        return l != null && l.is_premium ? o.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
            children: o.jsxs("div", {
                className: "bg-white rounded-lg w-full max-w-md mx-4 p-6",
                children: [o.jsxs("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [o.jsx("h3", {
                        className: "text-xl font-bold",
                        children: "Premium Status"
                    }), o.jsx("button", {
                        onClick: e,
                        className: "p-1 rounded-full hover:bg-gray-100",
                        type: "button",
                        children: o.jsx(Tt, {
                            className: "h-5 w-5 text-gray-500"
                        })
                    })]
                }), o.jsxs("div", {
                    className: "flex flex-col items-center py-8",
                    children: [o.jsx("div", {
                        className: "bg-purple-100 p-4 rounded-full mb-4",
                        children: o.jsx(Wr, {
                            className: "h-12 w-12 text-purple-600"
                        })
                    }), o.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-2",
                        children: "Premium Active"
                    }), o.jsx("p", {
                        className: "text-gray-600 text-center max-w-sm",
                        children: "You currently have access to all premium features. Enjoy showcasing your projects, saving unlimited prompts, and more!"
                    })]
                }), o.jsx("button", {
                    onClick: e,
                    className: "w-full py-2.5 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors mt-4",
                    type: "button",
                    children: "Close"
                })]
            })
        }) : o.jsxs(o.Fragment, {
            children: [o.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
                children: o.jsxs("div", {
                    className: "bg-white rounded-lg w-full max-w-md mx-4 p-6",
                    children: [o.jsxs("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [o.jsx("h3", {
                            className: "text-xl font-bold",
                            children: "Upgrade to Premium"
                        }), o.jsx("button", {
                            onClick: e,
                            className: "p-1 rounded-full hover:bg-gray-100",
                            disabled: t,
                            type: "button",
                            children: o.jsx(Tt, {
                                className: "h-5 w-5 text-gray-500"
                            })
                        })]
                    }), o.jsxs("div", {
                        className: "bg-purple-50 rounded-lg p-5 mb-5",
                        children: [o.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [o.jsxs("div", {
                                className: "flex items-center",
                                children: [o.jsx(b0, {
                                    className: "h-5 w-5 text-purple-600 mr-2 flex-shrink-0"
                                }), o.jsx("h4", {
                                    className: "font-bold text-gray-900",
                                    children: "Premium Membership"
                                })]
                            }), o.jsx("span", {
                                className: "font-bold text-lg text-purple-700",
                                children: "FREE"
                            })]
                        }), o.jsx("p", {
                            className: "text-sm text-gray-600 mb-4",
                            children: "Unlock premium features to enhance your design experience and showcase your projects to the community."
                        }), o.jsx("ul", {
                            className: "space-y-2",
                            children: ["Save unlimited design prompts", "Showcase your projects in the gallery", "Create custom themes with color pickers", "Access to premium design languages", "Add custom functionality features"].map((x, b) => o.jsxs("li", {
                                className: "flex items-start",
                                children: [o.jsx(Wr, {
                                    className: "h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                                }), o.jsx("span", {
                                    className: "text-sm text-gray-700",
                                    children: x
                                })]
                            }, b))
                        })]
                    }), o.jsxs("div", {
                        className: "mb-6",
                        children: [o.jsx("h4", {
                            className: "font-medium text-gray-800 mb-2",
                            children: "Account Creation Required"
                        }), o.jsxs("div", {
                            className: "p-4 border border-gray-200 rounded-lg bg-gray-50",
                            children: [o.jsx("p", {
                                className: "text-sm text-gray-600 mb-2",
                                children: c ? "You're signed in and ready to upgrade" : "Create a free account to activate premium features"
                            }), o.jsx("div", {
                                className: "flex items-center justify-center",
                                children: !c && o.jsxs("div", {
                                    className: "flex items-center gap-2 text-purple-600",
                                    children: [o.jsx(Oi, {
                                        className: "h-5 w-5"
                                    }), o.jsx("span", {
                                        className: "font-medium",
                                        children: "Sign up required"
                                    })]
                                })
                            })]
                        })]
                    }), n && o.jsxs("div", {
                        className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm",
                        children: [n, o.jsx("button", {
                            onClick: () => s(null),
                            className: "ml-2 text-red-500 font-medium hover:text-red-700",
                            type: "button",
                            children: "Retry"
                        })]
                    }), y, o.jsxs("div", {
                        className: "flex flex-col space-y-3",
                        children: [o.jsx("button", {
                            onClick: v,
                            disabled: t,
                            className: `w-full py-3 rounded-lg flex items-center justify-center ${t?"bg-gray-400 cursor-not-allowed":"bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"} text-white font-medium transition-colors`,
                            type: "button",
                            children: t ? o.jsxs("div", {
                                className: "flex items-center",
                                children: [o.jsxs("svg", {
                                    className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [o.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), o.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), "Processing..."]
                            }) : o.jsx(o.Fragment, {
                                children: c ? o.jsxs(o.Fragment, {
                                    children: [o.jsx(pt, {
                                        className: "h-5 w-5 mr-2"
                                    }), "Activate Premium Features"]
                                }) : o.jsxs(o.Fragment, {
                                    children: [o.jsx(Oi, {
                                        className: "h-5 w-5 mr-2"
                                    }), "Create Account & Activate"]
                                })
                            })
                        }), o.jsx("button", {
                            onClick: e,
                            disabled: t,
                            className: "w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors",
                            type: "button",
                            children: "Maybe Later"
                        })]
                    })]
                })
            }), i && o.jsx(fo, {
                onClose: () => {
                    a(!1), c && v()
                }
            })]
        })
    }, zf = ({
        onClose: e
    }) => {
        const {
            userProfile: t,
            updateProfile: r,
            signOut: n
        } = rt(), {
            getRandomAvatar: s
        } = Me(), i = !1, [a, c] = k.useState(""), [l, u] = k.useState(""), [d, f] = k.useState(!1), [h, y] = k.useState(!1), [v, x] = k.useState("");
        k.useEffect(() => {
            t && (c(t.username || ""), u(t.avatar_url || ""))
        }, [t, i]);
        const b = async g => {
            if (g.preventDefault(), !a.trim()) {
                x("Please enter a username");
                return
            }
            try {
                f(!0), x(""), await r({
                    username: a,
                    avatar_url: l
                }), O.success("Profile updated successfully"), e()
            } catch (w) {
                x(w.message || "Failed to update profile")
            } finally {
                f(!1)
            }
        }, p = async () => {
            try {
                y(!0), await n(), O.success("Signed out successfully"), e()
            } catch (g) {
                x(g.message || "Failed to sign out")
            } finally {
                y(!1)
            }
        }, m = () => {
            u(s())
        };
        return t ? o.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
            children: o.jsxs("div", {
                className: "bg-white rounded-lg w-full max-w-md mx-4 p-6",
                children: [o.jsxs("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [o.jsxs("h3", {
                        className: "text-xl font-bold flex items-center",
                        children: [o.jsx(ro, {
                            className: "h-5 w-5 text-purple-600 mr-2"
                        }), "My Profile"]
                    }), o.jsx("button", {
                        onClick: e,
                        className: "p-1 rounded-full hover:bg-gray-100",
                        disabled: d || h,
                        type: "button",
                        children: o.jsx(Tt, {
                            className: "h-5 w-5 text-gray-500"
                        })
                    })]
                }), v && o.jsx("div", {
                    className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm",
                    children: v
                }), o.jsxs("form", {
                    onSubmit: b,
                    children: [o.jsxs("div", {
                        className: "flex flex-col items-center mb-6",
                        children: [o.jsxs("div", {
                            className: "relative mb-5",
                            children: [o.jsx("img", {
                                src: l,
                                alt: "Avatar",
                                className: "h-32 w-32 rounded-full border-4 border-purple-100"
                            }), o.jsx("button", {
                                type: "button",
                                onClick: m,
                                className: "absolute bottom-0 right-0 p-3 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50",
                                disabled: d,
                                children: o.jsx(fs, {
                                    className: "h-5 w-5 text-purple-600"
                                })
                            })]
                        }), o.jsxs("div", {
                            className: "w-full max-w-sm",
                            children: [o.jsxs("label", {
                                htmlFor: "username",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: ["Username ", o.jsx("span", {
                                    className: "text-red-500",
                                    children: "*"
                                })]
                            }), o.jsx("input", {
                                id: "username",
                                type: "text",
                                value: a,
                                onChange: g => c(g.target.value),
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                placeholder: "Enter your username",
                                required: !0,
                                disabled: d
                            }), o.jsx("p", {
                                className: "mt-1 text-xs text-gray-500",
                                children: "This name will be visible to others in the community"
                            })]
                        })]
                    }), o.jsx("div", {
                        className: "flex justify-center mt-6 mb-4",
                        children: o.jsx("button", {
                            type: "submit",
                            disabled: d,
                            className: "px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center",
                            children: d ? o.jsxs(o.Fragment, {
                                children: [o.jsxs("svg", {
                                    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [o.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), o.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), "Updating..."]
                            }) : o.jsxs(o.Fragment, {
                                children: [o.jsx(Ri, {
                                    className: "h-4 w-4 mr-1"
                                }), "Save Changes"]
                            })
                        })
                    }), o.jsx("div", {
                        className: "border-t border-gray-200 mt-4 pt-4 flex justify-center",
                        children: o.jsxs("button", {
                            type: "button",
                            onClick: p,
                            className: "px-6 py-2 text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 rounded-lg flex items-center",
                            disabled: h,
                            children: [o.jsx(T0, {
                                className: "h-4 w-4 mr-2"
                            }), h ? "Signing out..." : "Sign Out"]
                        })
                    })]
                })]
            })
        }) : o.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",
            children: o.jsxs("div", {
                className: "bg-white rounded-lg p-6 flex flex-col items-center",
                children: [o.jsx("div", {
                    className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mb-4"
                }), o.jsx("p", {
                    className: "text-gray-600",
                    children: "Loading profile..."
                })]
            })
        })
    }, Ff = ({
        size: e = "md",
        text: t = "Loading...",
        fullScreen: r = !1,
        className: n = ""
    }) => {
        const s = {
                sm: "w-4 h-4",
                md: "w-8 h-8",
                lg: "w-12 h-12"
            },
            i = r ? "fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50" : "flex flex-col items-center justify-center p-4";
        return o.jsx("div", {
            className: `${i} ${n}`,
            children: o.jsxs("div", {
                className: "flex flex-col items-center",
                children: [o.jsx(P0, {
                    className: `${s[e]} text-purple-600 animate-spin`
                }), t && o.jsx("p", {
                    className: "mt-2 text-sm text-gray-600",
                    children: t
                })]
            })
        })
    }, Nv = ({
        children: e
    }) => {
        var C;
        const {
            state: t,
            getCompletionPercentage: r,
            setActivePanel: n
        } = Me(), {
            user: s,
            userProfile: i,
            loading: a
        } = rt(), c = r(), [l, u] = k.useState(!1), [d, f] = k.useState(!1), [h, y] = k.useState(!1), [v, x] = k.useState(!1), b = S => t.activePanel === S, p = () => {
            u(!l)
        }, m = () => {
            if (!s) {
                f(!0);
                return
            }
            y(!0)
        }, g = () => {
            s ? x(!0) : f(!0)
        }, w = S => {
            if (!S) return "?";
            const E = S.split(/\s+/);
            return E.length === 1 ? S.substring(0, 2).toUpperCase() : (E[0][0] + E[1][0]).toUpperCase()
        };
        return a ? o.jsx("div", {
            className: "h-screen flex items-center justify-center",
            children: o.jsx(Ff, {
                size: "lg",
                text: "Loading your session..."
            })
        }) : o.jsxs("div", {
            className: "flex h-screen bg-gray-50",
            children: [o.jsx("div", {
                className: "md:hidden fixed top-4 left-4 z-30",
                children: o.jsx("button", {
                    onClick: p,
                    className: "p-2 bg-white rounded-full shadow-md",
                    type: "button",
                    children: l ? o.jsx(Tt, {
                        className: "h-6 w-6 text-purple-600"
                    }) : o.jsx(R0, {
                        className: "h-6 w-6 text-purple-600"
                    })
                })
            }), o.jsxs("div", {
                className: `
        ${l?"translate-x-0":"-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out
        fixed md:relative top-0 left-0 h-screen z-20
        w-64 md:w-20 flex flex-col bg-white shadow-md
      `,
                children: [o.jsxs("div", {
                    className: "p-4 flex flex-col items-center border-b border-gray-100",
                    children: [o.jsx(V0, {
                        className: "h-8 w-8 text-purple-600 hover:animate-pulse cursor-pointer"
                    }), o.jsx("h1", {
                        className: "text-xs font-bold text-gray-900 mt-1 text-center",
                        children: "Visual Builder"
                    }), o.jsx("div", {
                        className: "w-full mt-4 h-2 bg-gray-200 rounded-full overflow-hidden",
                        children: o.jsx("div", {
                            className: "h-full bg-purple-600 rounded-full transition-all duration-500",
                            style: {
                                width: `${c}%`
                            }
                        })
                    }), o.jsxs("div", {
                        className: "text-xs text-gray-600 mt-1",
                        children: [c, "%"]
                    })]
                }), o.jsxs("div", {
                    className: "flex-1 py-4 flex flex-col space-y-2 items-center",
                    children: [o.jsxs("button", {
                        onClick: () => {
                            n("project-type"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("project-type")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Project Type",
                        type: "button",
                        children: [o.jsx(nr, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Project"
                        })]
                    }), o.jsxs("button", {
                        onClick: () => {
                            n("layout"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("layout")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Layout",
                        type: "button",
                        children: [o.jsx(js, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Layout"
                        })]
                    }), o.jsxs("button", {
                        onClick: () => {
                            n("design"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("design")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Design",
                        type: "button",
                        children: [o.jsx(Ha, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Design"
                        })]
                    }), o.jsxs("button", {
                        onClick: () => {
                            n("visual-elements"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("visual-elements")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Visual Elements",
                        type: "button",
                        children: [o.jsx(ef, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Visual"
                        })]
                    }), o.jsxs("button", {
                        onClick: () => {
                            n("functionality"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("functionality")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Functionality",
                        type: "button",
                        children: [o.jsx(Kl, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Function"
                        })]
                    }), o.jsxs("button", {
                        onClick: () => {
                            n("summary"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("summary")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Summary",
                        type: "button",
                        children: [o.jsx(Ai, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Summary"
                        })]
                    }), o.jsxs("button", {
                        onClick: () => {
                            n("library"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("library")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Prompt Library",
                        type: "button",
                        children: [o.jsx(Ma, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Library"
                        })]
                    }), t.isPremium && o.jsxs("button", {
                        onClick: () => {
                            n("gallery"), u(!1)
                        },
                        className: `w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 ${b("gallery")?"bg-purple-100 text-purple-700 scale-105":"text-gray-500 hover:bg-gray-100 hover:scale-105"}`,
                        title: "Project Gallery",
                        type: "button",
                        children: [o.jsx(On, {
                            className: "h-6 w-6"
                        }), o.jsx("span", {
                            className: "mt-1 text-xs",
                            children: "Gallery"
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "p-3 border-t border-gray-100 flex flex-col items-center space-y-2",
                    children: [o.jsx("div", {
                        className: "relative",
                        children: o.jsx("button", {
                            onClick: g,
                            className: "flex flex-col items-center p-2 text-xs hover:text-gray-900 transition-colors space-y-1 hover:scale-105 transition-transform duration-200",
                            "aria-label": s ? "User profile" : "Sign in",
                            type: "button",
                            children: s ? o.jsxs(o.Fragment, {
                                children: [i != null && i.avatar_url ? o.jsx("img", {
                                    src: i.avatar_url,
                                    alt: "User avatar",
                                    className: "h-8 w-8 rounded-full border-2 border-purple-100"
                                }) : o.jsx("div", {
                                    className: "h-8 w-8 rounded-full bg-purple-100 border-2 border-purple-100 flex items-center justify-center text-sm font-medium text-purple-700",
                                    children: w((i == null ? void 0 : i.username) || "")
                                }), o.jsx("span", {
                                    className: "text-[10px] text-gray-500",
                                    children: ((C = i == null ? void 0 : i.username) == null ? void 0 : C.split(" ")[0]) || "Profile"
                                })]
                            }) : o.jsxs(o.Fragment, {
                                children: [o.jsx("div", {
                                    className: "h-8 w-8 rounded-full bg-gray-100 border-2 border-purple-100 flex items-center justify-center",
                                    children: o.jsx(ro, {
                                        className: "h-5 w-5 text-gray-500"
                                    })
                                }), o.jsx("span", {
                                    className: "text-[10px] text-gray-500",
                                    children: "Sign In"
                                })]
                            })
                        })
                    }), t.isPremium ? o.jsx("div", {
                        className: "bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium",
                        children: "Premium"
                    }) : o.jsx("button", {
                        onClick: m,
                        className: "bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-2 py-0.5 rounded-full text-xs font-medium hover:opacity-90 transition-opacity",
                        type: "button",
                        children: "Upgrade"
                    })]
                })]
            }), l && o.jsx("div", {
                className: "md:hidden fixed inset-0 bg-black bg-opacity-50 z-10",
                onClick: () => u(!1)
            }), o.jsx("div", {
                className: "flex-1 md:pl-0 pt-16 md:pt-0 overflow-hidden",
                children: e
            }), d && o.jsx(fo, {
                onClose: () => f(!1)
            }), v && o.jsx(zf, {
                onClose: () => x(!1)
            }), h && o.jsx(_s, {
                onClose: () => y(!1)
            })]
        })
    }, Ou = () => {
        var f;
        const {
            state: e,
            updateProjectType: t,
            setActivePanel: r
        } = Me(), {
            projectType: n
        } = e, [s, i] = k.useState({}), a = [{
            name: "Website",
            icon: o.jsx(nr, {
                className: "w-8 h-8"
            }),
            description: "Static pages focused on content presentation",
            subcategories: ["Portfolio", "E-Commerce", "Blog", "Business/Corporate"]
        }, {
            name: "Mobile App",
            icon: o.jsx(to, {
                className: "w-8 h-8"
            }),
            description: "Mobile-first experiences with touch interactions",
            subcategories: ["Social Network", "Productivity", "Lifestyle & Health", "Entertainment"]
        }, {
            name: "Web App",
            icon: o.jsx(js, {
                className: "w-8 h-8"
            }),
            description: "Interactive applications with complex functionality",
            subcategories: ["CRM System", "Project Management", "E-Learning Platform", "Booking System"]
        }, {
            name: "Dashboard",
            icon: o.jsx(eo, {
                className: "w-8 h-8"
            }),
            description: "Data visualization and monitoring interfaces",
            subcategories: ["Analytics Dashboard", "Admin Dashboard", "Financial Dashboard", "IoT Dashboard"]
        }], c = h => {
            t({
                name: h.target.value
            }), h.target.value.trim() && i(y => ({
                ...y,
                name: void 0
            }))
        }, l = h => {
            t({
                description: h.target.value
            }), h.target.value.trim() && i(y => ({
                ...y,
                description: void 0
            }))
        }, u = () => {
            const h = {};
            return n.name.trim() || (h.name = "Project name is required"), n.description.trim() || (h.description = "Project description is required"), i(h), Object.keys(h).length === 0
        }, d = () => {
            n.category && n.subcategory && u() && r("layout")
        };
        return o.jsxs("div", {
            className: "space-y-6",
            children: [o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Project Information"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Define your project details and category"
                })]
            }), o.jsxs("div", {
                className: "animate-fadeIn mb-8 border-b pb-6",
                children: [o.jsx("h3", {
                    className: "text-xl font-semibold text-gray-900",
                    children: "Basic Details"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Name and describe your project"
                }), o.jsxs("div", {
                    className: "mt-4 space-y-4",
                    children: [o.jsxs("div", {
                        children: [o.jsxs("label", {
                            htmlFor: "projectName",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: ["Project/Company Name ", o.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), o.jsxs("div", {
                            className: "relative",
                            children: [o.jsx("div", {
                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                children: o.jsx(y0, {
                                    className: "h-5 w-5 text-gray-400"
                                })
                            }), o.jsx("input", {
                                type: "text",
                                id: "projectName",
                                value: n.name,
                                onChange: c,
                                className: `block w-full pl-10 pr-3 py-2 border ${s.name?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-purple-500"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent`,
                                placeholder: "e.g., Acme Inc. or Travel Buddy"
                            })]
                        }), s.name && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: s.name
                        })]
                    }), o.jsxs("div", {
                        children: [o.jsxs("label", {
                            htmlFor: "projectDescription",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: ["Tagline/Description ", o.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), o.jsxs("div", {
                            className: "relative",
                            children: [o.jsx("div", {
                                className: "absolute top-3 left-3 flex items-start pointer-events-none",
                                children: o.jsx(tf, {
                                    className: "h-5 w-5 text-gray-400"
                                })
                            }), o.jsx("textarea", {
                                id: "projectDescription",
                                value: n.description,
                                onChange: l,
                                rows: 3,
                                className: `block w-full pl-10 pr-3 py-2 border ${s.description?"border-red-300 focus:ring-red-500":"border-gray-300 focus:ring-purple-500"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent`,
                                placeholder: "e.g., We provide innovative solutions for businesses or The easiest way to plan your next adventure"
                            })]
                        }), s.description && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: s.description
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-xl font-semibold text-gray-900",
                    children: "Category Selection"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Select the general category for your project"
                })]
            }), o.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: a.map(h => o.jsx("div", {
                    className: `p-5 border rounded-xl text-left transition-all cursor-pointer hover:shadow-md ${n.category===h.name?"border-purple-500 bg-purple-50 ring-2 ring-purple-200":"border-gray-200 hover:border-purple-200"}`,
                    onClick: () => t({
                        category: h.name
                    }),
                    children: o.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [o.jsx("div", {
                            className: `p-3 rounded-lg ${n.category===h.name?"bg-purple-100 text-purple-600":"bg-gray-100 text-gray-500"}`,
                            children: h.icon
                        }), o.jsxs("div", {
                            children: [o.jsx("h3", {
                                className: `text-xl font-semibold ${n.category===h.name?"text-purple-800":"text-gray-800"}`,
                                children: h.name
                            }), o.jsx("p", {
                                className: "text-gray-500 mt-1",
                                children: h.description
                            })]
                        })]
                    })
                }, h.name))
            }), n.category && o.jsxs("div", {
                className: "mt-8 animate-fadeIn",
                children: [o.jsx("h3", {
                    className: "text-xl font-semibold text-gray-900",
                    children: "Subcategory"
                }), o.jsxs("p", {
                    className: "text-gray-500 mt-1",
                    children: ["Choose a more specific type for your ", n.category]
                }), o.jsx("div", {
                    className: "mt-4 grid grid-cols-2 gap-3",
                    children: (f = a.find(h => h.name === n.category)) == null ? void 0 : f.subcategories.map(h => o.jsx("div", {
                        className: `p-4 border rounded-lg text-left transition-all cursor-pointer ${n.subcategory===h?"border-purple-500 bg-purple-50":"border-gray-200 hover:bg-gray-50"}`,
                        onClick: () => t({
                            subcategory: h
                        }),
                        children: o.jsx("span", {
                            className: n.subcategory === h ? "font-medium text-purple-700" : "",
                            children: h
                        })
                    }, h))
                })]
            }), o.jsx("div", {
                className: "mt-6 flex justify-end",
                children: o.jsxs("button", {
                    onClick: d,
                    className: `flex items-center px-5 py-2 rounded-lg ${n.category&&n.subcategory&&n.name&&n.description?"bg-purple-600 text-white hover:bg-purple-700":"bg-gray-200 text-gray-500 cursor-not-allowed"}`,
                    disabled: !n.category || !n.subcategory || !n.name || !n.description,
                    children: ["Continue to Layout", o.jsx(ws, {
                        className: "ml-2 h-4 w-4"
                    })]
                })
            })]
        })
    }, _v = () => {
        const {
            state: e,
            updateLayout: t,
            setActivePanel: r
        } = Me(), {
            layout: n
        } = e, s = [{
            name: "Single Column",
            icon: o.jsx(L0, {
                className: "w-10 h-10"
            }),
            description: "Classic stacked layout, ideal for articles and content-heavy pages"
        }, {
            name: "Two Column",
            icon: o.jsx(Xh, {
                className: "w-10 h-10"
            }),
            description: "Balanced layout with sidebar, great for blogs and dashboards"
        }, {
            name: "Three Column",
            icon: o.jsx(nf, {
                className: "w-10 h-10"
            }),
            description: "Rich layout with multiple content sections, ideal for news sites"
        }, {
            name: "Four Column",
            icon: o.jsx(rf, {
                className: "w-10 h-10"
            }),
            description: "Grid layout for gallery-style content or product listings"
        }], i = d => {
            t({
                header: {
                    ...n.header,
                    include: d
                }
            })
        }, a = d => {
            t({
                header: {
                    ...n.header,
                    complex: d
                }
            })
        }, c = d => {
            t({
                footer: {
                    ...n.footer,
                    include: d
                }
            })
        }, l = d => {
            t({
                footer: {
                    ...n.footer,
                    complex: d
                }
            })
        }, u = () => {
            r("design")
        };
        return o.jsxs("div", {
            className: "space-y-6",
            children: [o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Layout Structure"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Define the structure and components of your layout"
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Choose Column Layout"
                }), o.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: s.map(d => o.jsxs("div", {
                        className: `p-4 border rounded-xl text-left transition-all cursor-pointer ${n.columns===d.name?"border-purple-500 bg-purple-50 ring-2 ring-purple-200":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,
                        onClick: () => t({
                            columns: d.name
                        }),
                        children: [o.jsxs("div", {
                            className: "flex flex-col items-center text-center mb-2",
                            children: [o.jsx("div", {
                                className: `${n.columns===d.name?"text-purple-600":"text-gray-500"}`,
                                children: d.icon
                            }), o.jsx("h4", {
                                className: "font-medium mt-2",
                                children: d.name
                            })]
                        }), o.jsx("p", {
                            className: "text-sm text-gray-500 text-center",
                            children: d.description
                        })]
                    }, d.name))
                })]
            }), o.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [o.jsxs("div", {
                    className: "space-y-4",
                    children: [o.jsx("h3", {
                        className: "text-lg font-medium text-gray-900",
                        children: "Header Configuration"
                    }), o.jsxs("div", {
                        className: "flex flex-col space-y-4 p-4 bg-gray-50 rounded-lg",
                        children: [o.jsx("p", {
                            className: "text-sm text-gray-600 mb-2",
                            children: "Do you want to include a header?"
                        }), o.jsxs("div", {
                            className: "flex gap-3",
                            children: [o.jsxs("button", {
                                className: `flex-1 px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition ${n.header.include?"bg-purple-600 text-white":"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`,
                                onClick: () => i(!0),
                                children: [n.header.include && o.jsx(Wr, {
                                    className: "h-4 w-4"
                                }), "Yes"]
                            }), o.jsxs("button", {
                                className: `flex-1 px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition ${n.header.include?"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50":"bg-purple-600 text-white"}`,
                                onClick: () => i(!1),
                                children: [!n.header.include && o.jsx(Wr, {
                                    className: "h-4 w-4"
                                }), "No"]
                            })]
                        }), n.header.include && o.jsxs("div", {
                            className: "mt-3 space-y-3",
                            children: [o.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "Header Complexity"
                            }), o.jsxs("div", {
                                className: "flex gap-3",
                                children: [o.jsx("button", {
                                    className: `flex-1 px-4 py-2 rounded-lg ${n.header.complex?"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50":"bg-purple-600 text-white"}`,
                                    onClick: () => a(!1),
                                    children: "Simple"
                                }), o.jsx("button", {
                                    className: `flex-1 px-4 py-2 rounded-lg ${n.header.complex?"bg-purple-600 text-white":"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`,
                                    onClick: () => a(!0),
                                    children: "Complex"
                                })]
                            }), o.jsx("div", {
                                className: "p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-600",
                                children: n.header.complex ? "Complex header with logo, navigation, search and user menu" : "Simple header with logo and minimal navigation"
                            })]
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "space-y-4",
                    children: [o.jsx("h3", {
                        className: "text-lg font-medium text-gray-900",
                        children: "Footer Configuration"
                    }), o.jsxs("div", {
                        className: "flex flex-col space-y-4 p-4 bg-gray-50 rounded-lg",
                        children: [o.jsx("p", {
                            className: "text-sm text-gray-600 mb-2",
                            children: "Do you want to include a footer?"
                        }), o.jsxs("div", {
                            className: "flex gap-3",
                            children: [o.jsxs("button", {
                                className: `flex-1 px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition ${n.footer.include?"bg-purple-600 text-white":"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`,
                                onClick: () => c(!0),
                                children: [n.footer.include && o.jsx(Wr, {
                                    className: "h-4 w-4"
                                }), "Yes"]
                            }), o.jsxs("button", {
                                className: `flex-1 px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition ${n.footer.include?"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50":"bg-purple-600 text-white"}`,
                                onClick: () => c(!1),
                                children: [!n.footer.include && o.jsx(Wr, {
                                    className: "h-4 w-4"
                                }), "No"]
                            })]
                        }), n.footer.include && o.jsxs("div", {
                            className: "mt-3 space-y-3",
                            children: [o.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "Footer Complexity"
                            }), o.jsxs("div", {
                                className: "flex gap-3",
                                children: [o.jsx("button", {
                                    className: `flex-1 px-4 py-2 rounded-lg ${n.footer.complex?"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50":"bg-purple-600 text-white"}`,
                                    onClick: () => l(!1),
                                    children: "Simple"
                                }), o.jsx("button", {
                                    className: `flex-1 px-4 py-2 rounded-lg ${n.footer.complex?"bg-purple-600 text-white":"bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"}`,
                                    onClick: () => l(!0),
                                    children: "Complex"
                                })]
                            }), o.jsx("div", {
                                className: "p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-600",
                                children: n.footer.complex ? "Multi-column footer with links, contact info, social media and newsletter signup" : "Simple footer with copyright and basic links"
                            })]
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                className: "flex justify-between pt-4",
                children: [o.jsx("button", {
                    onClick: () => r("project-type"),
                    className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                    children: "Back"
                }), o.jsxs("button", {
                    onClick: u,
                    className: "flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700",
                    children: ["Continue to Design", o.jsx(ws, {
                        className: "ml-2 h-4 w-4"
                    })]
                })]
            })]
        })
    }, Sv = () => {
        const {
            state: e,
            updateDesign: t,
            setActivePanel: r
        } = Me();
        rt();
        const {
            design: n,
            isPremium: s
        } = e, [i, a] = k.useState(!1), [c, l] = k.useState(""), [u, d] = k.useState("#ffffff"), [f, h] = k.useState("#f3f4f6"), [y, v] = k.useState("#3b82f6"), [x, b] = k.useState("#111827"), [p, m] = k.useState("#6b7280"), [g, w] = k.useState(""), [C, S] = k.useState(!1), E = [{
            name: "Material Design",
            description: "Google's design system with tactile surfaces and bold colors",
            previewClass: "bg-blue-50 p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded-lg bg-white shadow-md p-3 w-28",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-blue-500 rounded-full mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-gray-200 rounded-full mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-gray-200 rounded-full"
                })]
            })
        }, {
            name: "Fluent Design",
            description: "Microsoft's design language focusing on light, depth, and motion",
            previewClass: "bg-blue-50 p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded-xl bg-white shadow-sm p-3 w-28 border border-gray-100",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-blue-400 rounded-lg mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-gray-200 rounded-lg mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-gray-200 rounded-lg"
                })]
            })
        }, {
            name: "Apple Human Interface",
            description: "Clean, minimalist design with careful attention to typography",
            previewClass: "bg-gray-50 p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded-xl bg-white p-3 w-28",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-black rounded-full mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-gray-200 rounded-full mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-gray-200 rounded-full"
                })]
            })
        }, {
            name: "Tailwind Style",
            description: "Utility-first approach with modern, clean aesthetics",
            previewClass: "bg-sky-50 p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded-lg bg-white shadow p-3 w-28",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-sky-500 rounded mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-gray-200 rounded mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-gray-200 rounded"
                })]
            })
        }, {
            name: "Bootstrap Style",
            description: "Consistent, responsive design with a familiar look and feel",
            previewClass: "bg-indigo-50 p-4 rounded mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded bg-white border border-gray-300 p-3 w-28",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-indigo-500 rounded mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-gray-200 rounded mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-gray-200 rounded"
                })]
            })
        }, {
            name: "Neumorphism",
            description: "Soft UI with subtle shadows and clean interfaces",
            previewClass: "bg-gray-100 p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded-xl bg-gray-100 p-3 w-28 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-gray-300 rounded-xl mb-2 shadow-inner"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-gray-200 rounded-xl mb-2 shadow-inner"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-gray-200 rounded-xl shadow-inner"
                })]
            })
        }], A = [{
            name: "Digital Brutalism",
            description: "Bold, raw, unapologetic design with high contrast and strong geometry",
            previewClass: "bg-white p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "border-4 border-black p-3 w-28",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-black mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-full border-2 border-black mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 border-2 border-black"
                })]
            })
        }, {
            name: "Glassmorphism",
            description: "Frosted glass effect with transparency, blur, and subtle borders",
            previewClass: "bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded-xl bg-white bg-opacity-20 backdrop-blur-md p-3 w-28 border border-white border-opacity-20",
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-white bg-opacity-30 rounded-md mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-white bg-opacity-20 rounded-md mb-2"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-white bg-opacity-20 rounded-md"
                })]
            })
        }, {
            name: "Claymorphism",
            description: "Soft, rounded shapes with a clay-like appearance and subtle depth",
            previewClass: "bg-orange-50 p-4 rounded-md mb-2 flex items-center justify-center",
            previewContent: o.jsxs("div", {
                className: "rounded-2xl bg-orange-100 p-3 w-28 shadow-[6px_6px_12px_rgba(0,0,0,0.1)]",
                style: {
                    border: "2px solid rgba(255,255,255,0.7)"
                },
                children: [o.jsx("div", {
                    className: "h-4 w-full bg-orange-200 rounded-xl mb-2 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]"
                }), o.jsx("div", {
                    className: "h-3 w-full bg-orange-200 rounded-xl mb-2 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]"
                }), o.jsx("div", {
                    className: "h-3 w-2/3 bg-orange-200 rounded-xl shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]"
                })]
            })
        }], T = [{
            name: "Light Modern",
            icon: o.jsx(F0, {
                className: "w-6 h-6"
            }),
            description: "Clean, bright design with subtle shadows and ample whitespace",
            colorPreview: o.jsxs("div", {
                className: "flex space-x-1 mt-2",
                children: [o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-white border border-gray-200"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-100"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-blue-500"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-900"
                })]
            })
        }, {
            name: "Dark Professional",
            icon: o.jsx(O0, {
                className: "w-6 h-6"
            }),
            description: "Sophisticated dark theme with professional color palette",
            colorPreview: o.jsxs("div", {
                className: "flex space-x-1 mt-2",
                children: [o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-900"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-800"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-indigo-500"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-white"
                })]
            })
        }, {
            name: "Vibrant Creative",
            icon: o.jsx(M0, {
                className: "w-6 h-6"
            }),
            description: "Bold, colorful design with eye-catching elements",
            colorPreview: o.jsxs("div", {
                className: "flex space-x-1 mt-2",
                children: [o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-purple-500"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-pink-500"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-yellow-400"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-white"
                })]
            })
        }, {
            name: "Minimalist",
            icon: o.jsx(A0, {
                className: "w-6 h-6"
            }),
            description: "Simple, uncluttered design focusing on essential elements",
            colorPreview: o.jsxs("div", {
                className: "flex space-x-1 mt-2",
                children: [o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-50"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-200"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-400"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-gray-800"
                })]
            })
        }, {
            name: "Organic & Natural",
            icon: o.jsx(C0, {
                className: "w-6 h-6"
            }),
            description: "Earth tones and subtle textures with a warm feel",
            colorPreview: o.jsxs("div", {
                className: "flex space-x-1 mt-2",
                children: [o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-amber-50"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-amber-300"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-green-700"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-amber-900"
                })]
            })
        }, {
            name: "Tech & Digital",
            icon: o.jsx(j0, {
                className: "w-6 h-6"
            }),
            description: "Modern, high-tech aesthetics with digital elements",
            colorPreview: o.jsxs("div", {
                className: "flex space-x-1 mt-2",
                children: [o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-blue-50"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-blue-200"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-blue-600"
                }), o.jsx("div", {
                    className: "w-5 h-5 rounded-full bg-blue-900"
                })]
            })
        }], N = [{
            name: "Inter/Open Sans",
            heading: "Inter",
            body: "Open Sans",
            headingClass: "font-sans",
            bodyClass: "font-sans"
        }, {
            name: "Playfair Display/Source Serif Pro",
            heading: "Playfair Display",
            body: "Source Serif Pro",
            headingClass: "font-serif",
            bodyClass: "font-serif"
        }, {
            name: "Montserrat/Roboto",
            heading: "Montserrat",
            body: "Roboto",
            headingClass: "font-sans",
            bodyClass: "font-sans"
        }, {
            name: "Poppins/Lato",
            heading: "Poppins",
            body: "Lato",
            headingClass: "font-sans",
            bodyClass: "font-sans"
        }], D = [{
            name: "Merriweather/Nunito Sans",
            heading: "Merriweather",
            body: "Nunito Sans",
            headingClass: "font-serif",
            bodyClass: "font-sans"
        }, {
            name: "Raleway/Work Sans",
            heading: "Raleway",
            body: "Work Sans",
            headingClass: "font-sans",
            bodyClass: "font-sans"
        }, {
            name: "Archivo/Open Sans",
            heading: "Archivo",
            body: "Open Sans",
            headingClass: "font-sans",
            bodyClass: "font-sans"
        }, {
            name: "Fraunces/Outfit",
            heading: "Fraunces",
            body: "Outfit",
            headingClass: "font-serif",
            bodyClass: "font-sans"
        }, {
            name: "Space Grotesk/Inter",
            heading: "Space Grotesk",
            body: "Inter",
            headingClass: "font-mono",
            bodyClass: "font-sans"
        }], W = (j, U) => {
            U(j)
        }, I = j => /^#([A-Fa-f0-9]{3}){1,2}$/.test(j), X = () => {
            if (!c.trim()) {
                w("Please provide a name for your theme");
                return
            }
            if (!I(u)) {
                w(`Invalid primary color format: ${u}. Use #RGB or #RRGGBB format.`);
                return
            }
            if (!I(f)) {
                w(`Invalid secondary color format: ${f}. Use #RGB or #RRGGBB format.`);
                return
            }
            if (!I(y)) {
                w(`Invalid accent color format: ${y}. Use #RGB or #RRGGBB format.`);
                return
            }
            if (!I(x)) {
                w(`Invalid text color format: ${x}. Use #RGB or #RRGGBB format.`);
                return
            }
            if (!I(p)) {
                w(`Invalid secondary text color format: ${p}. Use #RGB or #RRGGBB format.`);
                return
            }
            t({
                theme: c,
                customTheme: {
                    primary: u,
                    secondary: f,
                    accent: y,
                    text: x,
                    textSecondary: p
                }
            }), a(!1), l(""), w("")
        }, je = () => {
            r("visual-elements")
        }, ge = () => {
            S(!0)
        }, be = ({
            label: j,
            color: U,
            onChange: M
        }) => o.jsxs("div", {
            children: [o.jsx("label", {
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: j
            }), o.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [o.jsx("div", {
                    className: "w-8 h-8 rounded-md border border-gray-300",
                    style: {
                        backgroundColor: U
                    }
                }), o.jsxs("div", {
                    className: "flex-1 flex space-x-2",
                    children: [o.jsx("input", {
                        type: "color",
                        value: U,
                        onChange: q => M(q.target.value),
                        className: "w-10 h-9"
                    }), o.jsx("input", {
                        type: "text",
                        value: U,
                        onChange: q => M(q.target.value),
                        placeholder: "#RRGGBB",
                        className: "flex-1 border border-gray-300 px-2 py-1.5 rounded text-sm font-mono"
                    })]
                })]
            })]
        });
        return o.jsxs("div", {
            className: "space-y-6 pb-6",
            children: [o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Design System"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Choose the core design elements for your project"
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Design Language"
                }), o.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: [E.map(j => o.jsxs("div", {
                        className: `border rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-md ${n.language===j.name?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"}`,
                        onClick: () => t({
                            language: j.name
                        }),
                        children: [o.jsx("div", {
                            className: j.previewClass,
                            children: j.previewContent
                        }), o.jsxs("div", {
                            className: "p-3",
                            children: [o.jsx("h4", {
                                className: `font-medium ${n.language===j.name?"text-purple-700":"text-gray-900"}`,
                                children: j.name
                            }), o.jsx("p", {
                                className: "text-xs text-gray-500 mt-1 line-clamp-2",
                                children: j.description
                            })]
                        })]
                    }, j.name)), A.map(j => o.jsxs("div", {
                        className: `border rounded-xl overflow-hidden relative cursor-pointer transition-all hover:shadow-md ${n.language===j.name&&s?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"} ${s?"":"opacity-70"}`,
                        onClick: () => s ? t({
                            language: j.name
                        }) : ge(),
                        children: [!s && o.jsx("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 z-10",
                            children: o.jsxs("div", {
                                className: "bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center",
                                children: [o.jsx(pt, {
                                    className: "w-3 h-3 mr-1"
                                }), "Premium"]
                            })
                        }), o.jsx("div", {
                            className: j.previewClass,
                            children: j.previewContent
                        }), o.jsxs("div", {
                            className: "p-3",
                            children: [o.jsxs("div", {
                                className: "flex items-center",
                                children: [o.jsx("h4", {
                                    className: "font-medium text-gray-900",
                                    children: j.name
                                }), !s && o.jsx(pt, {
                                    className: "w-3 h-3 ml-1 text-gray-400"
                                })]
                            }), o.jsx("p", {
                                className: "text-xs text-gray-500 mt-1 line-clamp-2",
                                children: j.description
                            })]
                        })]
                    }, j.name))]
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Color Theme"
                }), o.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: [T.map(j => o.jsxs("div", {
                        className: `p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${n.theme===j.name?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"}`,
                        onClick: () => t({
                            theme: j.name
                        }),
                        children: [o.jsxs("div", {
                            className: "flex items-center",
                            children: [o.jsx("div", {
                                className: `p-2 rounded-full ${n.theme===j.name?"bg-purple-100 text-purple-600":"bg-gray-100 text-gray-500"}`,
                                children: j.icon
                            }), o.jsxs("div", {
                                className: "ml-3",
                                children: [o.jsx("h4", {
                                    className: `font-medium ${n.theme===j.name?"text-purple-700":"text-gray-900"}`,
                                    children: j.name
                                }), j.colorPreview]
                            })]
                        }), o.jsx("p", {
                            className: "text-xs text-gray-500 mt-3",
                            children: j.description
                        })]
                    }, j.name)), o.jsxs("div", {
                        className: `p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${n.customTheme?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"} ${s?"":"opacity-70"}`,
                        onClick: () => s ? a(!0) : ge(),
                        children: [o.jsxs("div", {
                            className: "flex items-center",
                            children: [o.jsx("div", {
                                className: `p-2 rounded-full ${n.customTheme?"bg-purple-100 text-purple-600":"bg-gray-100 text-gray-500"}`,
                                children: o.jsx(Ha, {
                                    className: "w-6 h-6"
                                })
                            }), o.jsxs("div", {
                                className: "ml-3",
                                children: [o.jsxs("div", {
                                    className: "flex items-center",
                                    children: [o.jsx("h4", {
                                        className: "font-medium text-gray-900",
                                        children: n.customTheme ? n.theme : "Custom Theme"
                                    }), !s && o.jsxs("div", {
                                        className: "ml-2 px-1.5 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 rounded-full flex items-center",
                                        children: [o.jsx(pt, {
                                            className: "w-3 h-3 mr-0.5"
                                        }), "Premium"]
                                    })]
                                }), n.customTheme ? o.jsxs("div", {
                                    className: "flex space-x-1 mt-2",
                                    children: [o.jsx("div", {
                                        className: "w-5 h-5 rounded-full",
                                        style: {
                                            backgroundColor: n.customTheme.primary
                                        }
                                    }), o.jsx("div", {
                                        className: "w-5 h-5 rounded-full",
                                        style: {
                                            backgroundColor: n.customTheme.secondary
                                        }
                                    }), o.jsx("div", {
                                        className: "w-5 h-5 rounded-full",
                                        style: {
                                            backgroundColor: n.customTheme.accent
                                        }
                                    }), o.jsx("div", {
                                        className: "w-5 h-5 rounded-full",
                                        style: {
                                            backgroundColor: n.customTheme.text
                                        }
                                    })]
                                }) : o.jsxs("div", {
                                    className: "flex space-x-1 mt-2",
                                    children: [o.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                                    }), o.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                                    }), o.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                                    }), o.jsx("div", {
                                        className: "w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                                    })]
                                })]
                            })]
                        }), o.jsx("p", {
                            className: "text-xs text-gray-500 mt-3",
                            children: n.customTheme ? "Custom color palette with your selected colors" : "Create your own personalized color theme with custom colors"
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Typography"
                }), o.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [N.map(j => o.jsxs("div", {
                        className: `p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${n.typography===j.name?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"}`,
                        onClick: () => t({
                            typography: j.name
                        }),
                        children: [o.jsxs("div", {
                            className: "flex items-center mb-3",
                            children: [o.jsx(pu, {
                                className: `w-5 h-5 ${n.typography===j.name?"text-purple-600":"text-gray-500"}`
                            }), o.jsx("span", {
                                className: `ml-2 font-medium ${n.typography===j.name?"text-purple-700":"text-gray-900"}`,
                                children: j.name
                            })]
                        }), o.jsxs("div", {
                            className: "space-y-3",
                            children: [o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Heading"
                                }), o.jsx("h4", {
                                    className: `text-lg ${j.headingClass} font-bold text-gray-900`,
                                    children: j.heading
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Body"
                                }), o.jsx("p", {
                                    className: `${j.bodyClass} text-sm text-gray-700`,
                                    children: "The quick brown fox jumps over the lazy dog."
                                })]
                            })]
                        })]
                    }, j.name)), D.map(j => o.jsxs("div", {
                        className: `p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md relative ${n.typography===j.name&&s?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"} ${s?"":"opacity-70"}`,
                        onClick: () => s ? t({
                            typography: j.name
                        }) : ge(),
                        children: [!s && o.jsx("div", {
                            className: "absolute top-3 right-3",
                            children: o.jsxs("div", {
                                className: "bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium flex items-center",
                                children: [o.jsx(pt, {
                                    className: "w-3 h-3 mr-1"
                                }), "Premium"]
                            })
                        }), o.jsxs("div", {
                            className: "flex items-center mb-3",
                            children: [o.jsx(pu, {
                                className: "w-5 h-5 text-gray-500"
                            }), o.jsx("span", {
                                className: "ml-2 font-medium text-gray-900",
                                children: j.name
                            })]
                        }), o.jsxs("div", {
                            className: "space-y-3",
                            children: [o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Heading"
                                }), o.jsx("h4", {
                                    className: `text-lg ${j.headingClass} font-bold text-gray-900`,
                                    children: j.heading
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Body"
                                }), o.jsx("p", {
                                    className: `${j.bodyClass} text-sm text-gray-700`,
                                    children: "The quick brown fox jumps over the lazy dog."
                                })]
                            })]
                        })]
                    }, j.name))]
                })]
            }), o.jsxs("div", {
                className: "flex justify-between pt-4",
                children: [o.jsx("button", {
                    onClick: () => r("layout"),
                    className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                    type: "button",
                    children: "Back"
                }), o.jsxs("button", {
                    onClick: je,
                    className: "flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700",
                    type: "button",
                    children: ["Continue to Visual Elements", o.jsx(ws, {
                        className: "ml-2 h-4 w-4"
                    })]
                })]
            }), i && o.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: o.jsxs("div", {
                    className: "bg-white rounded-lg w-full max-w-md p-6",
                    children: [o.jsxs("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [o.jsx("h3", {
                            className: "text-xl font-bold",
                            children: "Create Custom Theme"
                        }), o.jsx("button", {
                            onClick: () => {
                                a(!1), w("")
                            },
                            className: "p-1 rounded-full hover:bg-gray-100",
                            type: "button",
                            children: o.jsx(Tt, {
                                className: "h-5 w-5 text-gray-500"
                            })
                        })]
                    }), o.jsxs("div", {
                        className: "space-y-5",
                        children: [o.jsxs("div", {
                            children: [o.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Theme Name"
                            }), o.jsx("input", {
                                type: "text",
                                value: c,
                                onChange: j => {
                                    l(j.target.value), w("")
                                },
                                placeholder: "My Custom Theme",
                                className: `w-full px-3 py-2 border ${g?"border-red-300":"border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`
                            }), g && o.jsx("p", {
                                className: "mt-1 text-sm text-red-600",
                                children: g
                            })]
                        }), o.jsxs("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: [o.jsx(be, {
                                label: "Primary Color",
                                color: u,
                                onChange: j => W(j, d)
                            }), o.jsx(be, {
                                label: "Secondary Color",
                                color: f,
                                onChange: j => W(j, h)
                            }), o.jsx(be, {
                                label: "Accent Color",
                                color: y,
                                onChange: j => W(j, v)
                            }), o.jsx(be, {
                                label: "Text Color",
                                color: x,
                                onChange: j => W(j, b)
                            }), o.jsx(be, {
                                label: "Secondary Text Color",
                                color: p,
                                onChange: j => W(j, m)
                            })]
                        }), o.jsxs("div", {
                            className: "border rounded-lg p-4",
                            children: [o.jsx("h4", {
                                className: "font-medium text-sm mb-2",
                                children: "Preview"
                            }), o.jsxs("div", {
                                className: "p-3 rounded-lg",
                                style: {
                                    backgroundColor: u
                                },
                                children: [o.jsxs("div", {
                                    className: "p-3 rounded-lg mb-2",
                                    style: {
                                        backgroundColor: f
                                    },
                                    children: [o.jsx("div", {
                                        className: "w-full h-4 rounded-md mb-2",
                                        style: {
                                            backgroundColor: y
                                        }
                                    }), o.jsx("div", {
                                        style: {
                                            color: x
                                        },
                                        children: "Primary Text"
                                    }), o.jsx("div", {
                                        style: {
                                            color: p
                                        },
                                        children: "Secondary Text"
                                    })]
                                }), o.jsx("button", {
                                    className: "px-3 py-1.5 rounded-md text-white text-sm",
                                    style: {
                                        backgroundColor: y
                                    },
                                    children: "Button"
                                })]
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "flex justify-end space-x-3 mt-5",
                        children: [o.jsx("button", {
                            onClick: () => {
                                a(!1), w("")
                            },
                            className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",
                            type: "button",
                            children: "Cancel"
                        }), o.jsxs("button", {
                            onClick: X,
                            className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center",
                            type: "button",
                            children: [o.jsx(Ha, {
                                className: "h-4 w-4 mr-1"
                            }), "Create Theme"]
                        })]
                    })]
                })
            }), C && o.jsx(_s, {
                onClose: () => S(!1)
            })]
        })
    }, Cv = () => {
        const {
            state: e,
            updateDesign: t,
            setActivePanel: r
        } = Me(), {
            design: n
        } = e, s = [{
            name: "Line Icons",
            preview: o.jsxs("div", {
                className: "flex space-x-3",
                children: [o.jsx(Cn, {
                    className: "w-6 h-6 stroke-current"
                }), o.jsx(Sn, {
                    className: "w-6 h-6 stroke-current"
                }), o.jsx(_n, {
                    className: "w-6 h-6 stroke-current"
                }), o.jsx(Pn, {
                    className: "w-6 h-6 stroke-current"
                })]
            }),
            description: "Clean outline icons with a modern, minimalist look"
        }, {
            name: "Solid Icons",
            preview: o.jsxs("div", {
                className: "flex space-x-3",
                children: [o.jsx(Cn, {
                    className: "w-6 h-6 fill-current"
                }), o.jsx(Sn, {
                    className: "w-6 h-6 fill-current"
                }), o.jsx(_n, {
                    className: "w-6 h-6 fill-current"
                }), o.jsx(Pn, {
                    className: "w-6 h-6 fill-current"
                })]
            }),
            description: "Bold filled icons with strong visual presence"
        }, {
            name: "Duotone Icons",
            preview: o.jsxs("div", {
                className: "flex space-x-3",
                children: [o.jsxs("div", {
                    className: "relative",
                    children: [o.jsx(Cn, {
                        className: "w-6 h-6 text-gray-300 fill-current"
                    }), o.jsx(Cn, {
                        className: "w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current"
                    })]
                }), o.jsxs("div", {
                    className: "relative",
                    children: [o.jsx(Sn, {
                        className: "w-6 h-6 text-gray-300 fill-current"
                    }), o.jsx(Sn, {
                        className: "w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current"
                    })]
                }), o.jsxs("div", {
                    className: "relative",
                    children: [o.jsx(_n, {
                        className: "w-6 h-6 text-gray-300 fill-current"
                    }), o.jsx(_n, {
                        className: "w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current"
                    })]
                }), o.jsxs("div", {
                    className: "relative",
                    children: [o.jsx(Pn, {
                        className: "w-6 h-6 text-gray-300 fill-current"
                    }), o.jsx(Pn, {
                        className: "w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current"
                    })]
                })]
            }),
            description: "Two-tone icons with depth and visual interest"
        }, {
            name: "Gradient Icons",
            preview: o.jsxs("div", {
                className: "flex space-x-3",
                children: [o.jsx("div", {
                    className: "p-1 rounded bg-gradient-to-br from-purple-500 to-pink-500",
                    children: o.jsx(Cn, {
                        className: "w-5 h-5 text-white"
                    })
                }), o.jsx("div", {
                    className: "p-1 rounded bg-gradient-to-br from-blue-500 to-teal-500",
                    children: o.jsx(Sn, {
                        className: "w-5 h-5 text-white"
                    })
                }), o.jsx("div", {
                    className: "p-1 rounded bg-gradient-to-br from-amber-500 to-red-500",
                    children: o.jsx(_n, {
                        className: "w-5 h-5 text-white"
                    })
                }), o.jsx("div", {
                    className: "p-1 rounded bg-gradient-to-br from-green-500 to-emerald-500",
                    children: o.jsx(Pn, {
                        className: "w-5 h-5 text-white"
                    })
                })]
            }),
            description: "Vibrant gradient-filled icons for a modern feel"
        }], i = [{
            name: "Flat Illustrations",
            description: "Modern, colorful illustrations with flat design",
            preview: o.jsxs("div", {
                className: "w-full h-20 bg-blue-100 rounded-md flex items-center justify-center",
                children: [o.jsx("div", {
                    className: "bg-blue-500 w-8 h-8 rounded-full"
                }), o.jsx("div", {
                    className: "bg-green-500 w-10 h-5 rounded-md ml-2"
                }), o.jsx("div", {
                    className: "bg-yellow-500 w-5 h-10 rounded-md ml-2"
                })]
            })
        }, {
            name: "Isometric",
            description: "Three-dimensional illustrations with depth",
            preview: o.jsx("div", {
                className: "w-full h-20 bg-purple-100 rounded-md flex items-center justify-center",
                children: o.jsxs("div", {
                    className: "relative",
                    children: [o.jsx("div", {
                        className: "bg-purple-300 w-10 h-5 transform skew-x-12 skew-y-12"
                    }), o.jsx("div", {
                        className: "bg-purple-500 w-10 h-10 absolute -top-6 -left-2 transform skew-x-12 skew-y-12"
                    }), o.jsx("div", {
                        className: "bg-purple-700 w-5 h-10 absolute -top-6 left-6 transform skew-x-12 skew-y-12"
                    })]
                })
            })
        }, {
            name: "Hand Drawn",
            description: "Sketchy illustrations with a human touch",
            preview: o.jsx("div", {
                className: "w-full h-20 bg-amber-100 rounded-md flex items-center justify-center",
                children: o.jsxs("div", {
                    className: "relative",
                    children: [o.jsx("div", {
                        className: "border-2 border-amber-800 w-12 h-8 rounded-full transform rotate-12"
                    }), o.jsx("div", {
                        className: "border-2 border-amber-800 w-6 h-6 rounded-full absolute -top-2 -right-2"
                    }), o.jsx("div", {
                        className: "border-2 border-amber-800 w-8 h-3 absolute top-8 left-2 transform -rotate-12"
                    })]
                })
            })
        }, {
            name: "Minimal Line Art",
            description: "Simple, elegant illustrations with thin lines",
            preview: o.jsx("div", {
                className: "w-full h-20 bg-gray-100 rounded-md flex items-center justify-center",
                children: o.jsxs("div", {
                    className: "relative",
                    children: [o.jsx("div", {
                        className: "border border-gray-800 w-12 h-12 rounded-full"
                    }), o.jsx("div", {
                        className: "border border-gray-800 w-8 h-1 absolute top-6 left-2"
                    }), o.jsx("div", {
                        className: "border border-gray-800 w-1 h-8 absolute top-2 left-6"
                    })]
                })
            })
        }], a = () => {
            r("functionality")
        };
        return o.jsxs("div", {
            className: "space-y-6",
            children: [o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Visual Elements"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Select the visual styles for icons and illustrations"
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Choose Icon Style"
                }), o.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: s.map(c => o.jsx("div", {
                        className: `p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${n.icons===c.name?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"}`,
                        onClick: () => t({
                            icons: c.name
                        }),
                        children: o.jsxs("div", {
                            className: "flex flex-col",
                            children: [o.jsx("div", {
                                className: `p-3 mb-3 rounded-md bg-gray-50 flex justify-center ${n.icons===c.name?"bg-purple-50":""}`,
                                children: o.jsx("div", {
                                    className: `${n.icons===c.name?"text-purple-600":"text-gray-600"}`,
                                    children: c.preview
                                })
                            }), o.jsx("h4", {
                                className: `font-medium text-center ${n.icons===c.name?"text-purple-700":"text-gray-900"}`,
                                children: c.name
                            }), o.jsx("p", {
                                className: "text-sm text-gray-500 mt-1 text-center",
                                children: c.description
                            })]
                        })
                    }, c.name))
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Choose Illustration Style"
                }), o.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: i.map(c => o.jsxs("div", {
                        className: `p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${n.illustrations===c.name?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"}`,
                        onClick: () => t({
                            illustrations: c.name
                        }),
                        children: [o.jsxs("div", {
                            className: "flex items-center mb-3",
                            children: [o.jsx(ef, {
                                className: `w-5 h-5 ${n.illustrations===c.name?"text-purple-600":"text-gray-500"}`
                            }), o.jsx("span", {
                                className: `ml-2 font-medium ${n.illustrations===c.name?"text-purple-700":"text-gray-900"}`,
                                children: c.name
                            })]
                        }), o.jsx("p", {
                            className: "text-sm text-gray-500 mb-3",
                            children: c.description
                        }), c.preview]
                    }, c.name))
                })]
            }), o.jsxs("div", {
                className: "flex justify-between pt-4",
                children: [o.jsx("button", {
                    onClick: () => r("design"),
                    className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                    children: "Back"
                }), o.jsxs("button", {
                    onClick: a,
                    className: "flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700",
                    children: ["Continue to Functionality", o.jsx(ws, {
                        className: "ml-2 h-4 w-4"
                    })]
                })]
            })]
        })
    }, Pv = () => {
        const {
            state: e,
            updateFunctionality: t,
            setActivePanel: r
        } = Me();
        rt();
        const {
            functionality: n,
            isPremium: s
        } = e, [i, a] = k.useState(""), [c, l] = k.useState(!1), u = [{
            name: "Basic",
            description: "Essential features for a minimal viable product",
            examples: "Simple forms, static content, basic navigation"
        }, {
            name: "Standard",
            description: "Comprehensive features for typical use cases",
            examples: "User accounts, search functionality, content filtering"
        }, {
            name: "Advanced",
            description: "Extensive features for power users and complex scenarios",
            examples: "Advanced filtering, real-time updates, complex interactions"
        }, {
            name: "Enterprise",
            description: "Full-featured with security, scalability, and advanced integrations",
            examples: "SSO, role-based access, audit logs, multi-tenant support"
        }], d = [{
            name: "Responsive Design",
            description: "Adapts to different screen sizes and devices"
        }, {
            name: "Dark Mode",
            description: "Alternate color scheme for low-light environments"
        }, {
            name: "Accessibility",
            description: "Compliant with WCAG guidelines for all users"
        }, {
            name: "API Integration",
            description: "Connect with external services and data sources"
        }, {
            name: "Analytics",
            description: "Track user behavior and application performance"
        }, {
            name: "SEO Optimization",
            description: "Improved visibility in search engine results"
        }], f = x => {
            const b = n.requirements.includes(x) ? n.requirements.filter(p => p !== x) : [...n.requirements, x];
            t({
                requirements: b
            })
        }, h = () => {
            if (!s) {
                l(!0);
                return
            }
            i.trim() && !n.customFeatures.includes(i) && (t({
                customFeatures: [...n.customFeatures, i]
            }), a(""))
        }, y = x => {
            t({
                customFeatures: n.customFeatures.filter(b => b !== x)
            })
        }, v = () => {
            r("summary")
        };
        return o.jsxs("div", {
            className: "space-y-6",
            children: [o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Functionality"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Define the functionality level and technical requirements"
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Choose Functionality Level"
                }), o.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: u.map(x => o.jsxs("div", {
                        className: `p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${n.level===x.name?"border-purple-500 ring-2 ring-purple-200":"border-gray-200"}`,
                        onClick: () => t({
                            level: x.name
                        }),
                        children: [o.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [o.jsx("div", {
                                className: `h-6 w-6 rounded-full flex items-center justify-center ${n.level===x.name?"bg-purple-100 text-purple-600":"bg-gray-100 text-gray-500"}`,
                                children: n.level === x.name ? o.jsx(fu, {
                                    className: "h-4 w-4"
                                }) : o.jsx("span", {
                                    className: "text-xs font-medium",
                                    children: x.name.charAt(0)
                                })
                            }), o.jsx("span", {
                                className: `font-medium ${n.level===x.name?"text-purple-700":"text-gray-900"}`,
                                children: x.name
                            })]
                        }), o.jsx("p", {
                            className: "text-sm text-gray-600 mt-2 ml-9",
                            children: x.description
                        }), o.jsxs("div", {
                            className: "mt-2 ml-9 p-2 bg-gray-50 rounded-md text-xs text-gray-500",
                            children: [o.jsx("span", {
                                className: "font-medium text-gray-700",
                                children: "Examples:"
                            }), " ", x.examples]
                        })]
                    }, x.name))
                })]
            }), o.jsxs("div", {
                children: [o.jsx("h3", {
                    className: "text-lg font-medium text-gray-900 mb-3",
                    children: "Technical Requirements"
                }), o.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
                    children: d.map(x => o.jsxs("div", {
                        className: `p-3 border rounded-lg cursor-pointer transition-all ${n.requirements.includes(x.name)?"border-purple-500 bg-purple-50":"border-gray-200 hover:bg-gray-50"}`,
                        onClick: () => f(x.name),
                        children: [o.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [o.jsx("div", {
                                className: `flex-shrink-0 h-5 w-5 border rounded ${n.requirements.includes(x.name)?"bg-purple-600 border-purple-600 flex items-center justify-center":"border-gray-300"}`,
                                children: n.requirements.includes(x.name) && o.jsx(fu, {
                                    className: "h-3 w-3 text-white"
                                })
                            }), o.jsx("span", {
                                className: "font-medium text-sm",
                                children: x.name
                            })]
                        }), o.jsx("p", {
                            className: "text-xs text-gray-500 mt-1 ml-8",
                            children: x.description
                        })]
                    }, x.name))
                })]
            }), o.jsxs("div", {
                className: "pt-4 relative",
                children: [o.jsxs("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [o.jsx("h3", {
                        className: "text-lg font-medium text-gray-900",
                        children: "Custom Features"
                    }), !s && o.jsxs("div", {
                        className: "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium flex items-center",
                        children: [o.jsx(pt, {
                            className: "w-3 h-3 mr-1"
                        }), "Premium Feature"]
                    })]
                }), !s && o.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 rounded-lg z-10",
                    style: {
                        top: "2.5rem"
                    },
                    children: o.jsxs("button", {
                        onClick: () => l(!0),
                        className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center transition-colors",
                        children: [o.jsx(Oi, {
                            className: "w-4 h-4 mr-1"
                        }), "Create Account for Free"]
                    })
                }), o.jsxs("div", {
                    className: `opacity-${s?"100":"30"}`,
                    children: [o.jsxs("div", {
                        className: "flex",
                        children: [o.jsx("input", {
                            type: "text",
                            value: i,
                            onChange: x => a(x.target.value),
                            className: "flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                            placeholder: "Enter a custom feature...",
                            disabled: !s
                        }), o.jsxs("button", {
                            onClick: h,
                            disabled: !s || !i.trim(),
                            className: `px-4 py-2 rounded-r-md flex items-center justify-center ${!s||!i.trim()?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-purple-600 text-white hover:bg-purple-700"}`,
                            children: [o.jsx(U0, {
                                className: "h-4 w-4 mr-1"
                            }), "Add"]
                        })]
                    }), n.customFeatures.length > 0 && o.jsxs("div", {
                        className: "mt-4",
                        children: [o.jsx("h4", {
                            className: "font-medium text-gray-700 text-sm mb-2",
                            children: "Added Features:"
                        }), o.jsx("div", {
                            className: "space-y-2",
                            children: n.customFeatures.map((x, b) => o.jsxs("div", {
                                className: "flex items-center justify-between p-2 border rounded-md bg-gray-50",
                                children: [o.jsxs("div", {
                                    className: "flex items-center",
                                    children: [o.jsx(Kl, {
                                        className: "h-4 w-4 text-purple-500 mr-2"
                                    }), o.jsx("span", {
                                        className: "text-sm",
                                        children: x
                                    })]
                                }), o.jsx("button", {
                                    onClick: () => y(x),
                                    className: "p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-red-500",
                                    disabled: !s,
                                    children: o.jsx(Tt, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            }, b))
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                className: "flex justify-between pt-4",
                children: [o.jsx("button", {
                    onClick: () => r("visual-elements"),
                    className: "px-4 py-2 text-gray-600 hover:text-gray-900",
                    children: "Back"
                }), o.jsxs("button", {
                    onClick: v,
                    className: "flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700",
                    children: ["View Summary", o.jsx(ws, {
                        className: "ml-2 h-4 w-4"
                    })]
                })]
            }), c && o.jsx(_s, {
                onClose: () => l(!1)
            })]
        })
    }, Ev = () => {
        const {
            state: e
        } = Me(), {
            projectType: t,
            layout: r,
            design: n
        } = e, s = () => {
            switch (t.category) {
                case "Website":
                    return o.jsx(nr, {
                        className: "w-8 h-8 text-purple-600"
                    });
                case "Mobile App":
                    return o.jsx(to, {
                        className: "w-8 h-8 text-purple-600"
                    });
                case "Web App":
                    return o.jsx(js, {
                        className: "w-8 h-8 text-purple-600"
                    });
                case "Dashboard":
                    return o.jsx(eo, {
                        className: "w-8 h-8 text-purple-600"
                    });
                default:
                    return o.jsx(nr, {
                        className: "w-8 h-8 text-purple-600"
                    })
            }
        }, i = () => {
            let d = "rounded-lg shadow-lg overflow-hidden ";
            switch (n.theme) {
                case "Light Modern":
                    d += "bg-white text-gray-900 ";
                    break;
                case "Dark Professional":
                    d += "bg-gray-900 text-white ";
                    break;
                case "Vibrant Creative":
                    d += "bg-gradient-to-r from-purple-500 to-pink-500 text-white ";
                    break;
                case "Minimalist":
                    d += "bg-gray-50 text-gray-800 ";
                    break;
                case "Organic & Natural":
                    d += "bg-amber-50 text-amber-900 ";
                    break;
                case "Tech & Digital":
                    d += "bg-blue-50 text-blue-900 ";
                    break;
                default:
                    d += "bg-white text-gray-900 ";
                    break
            }
            return d
        }, a = () => {
            switch (n.typography) {
                case "Inter/Open Sans":
                    return "font-sans";
                case "Playfair Display/Source Serif Pro":
                    return "font-serif";
                case "Montserrat/Roboto":
                    return "font-sans";
                case "Poppins/Lato":
                    return "font-sans";
                case "Merriweather/Nunito Sans":
                    return "font-serif";
                case "Raleway/Work Sans":
                    return "font-sans";
                default:
                    return "font-sans"
            }
        }, c = () => {
            let d = "";
            switch (n.language) {
                case "Material Design":
                    d += "shadow-md ";
                    break;
                case "Fluent Design":
                    d += "shadow-sm bg-opacity-95 ";
                    break;
                case "Apple Human Interface":
                    d += "rounded-xl ";
                    break;
                case "Tailwind Style":
                    d += "rounded-lg ";
                    break;
                case "Bootstrap Style":
                    d += "border ";
                    break;
                case "Neumorphism":
                    d += "shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.1)] ";
                    break;
                case "Digital Brutalism":
                    d += "border-4 border-black ";
                    break;
                case "Glassmorphism":
                    d += "backdrop-blur-md bg-opacity-70 ";
                    break
            }
            return d
        }, l = () => {
            switch (n.icons) {
                case "Line Icons":
                    return "stroke-current fill-none";
                case "Solid Icons":
                    return "fill-current";
                case "Duotone Icons":
                    return "stroke-current fill-opacity-20 fill-current";
                case "Gradient Icons":
                    return "stroke-current text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500";
                default:
                    return "stroke-current"
            }
        }, u = () => o.jsxs("div", {
            className: "h-full flex flex-col items-center justify-center p-8 text-center",
            children: [o.jsx("div", {
                className: "w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-4",
                children: o.jsx("span", {
                    className: "text-purple-600 text-4xl",
                    children: "?"
                })
            }), o.jsx("h3", {
                className: "text-xl font-bold text-gray-700 mb-2",
                children: "Preview Will Appear Here"
            }), o.jsx("p", {
                className: "text-gray-500 max-w-md",
                children: "As you make selections in the panels, this area will show a real-time preview of your design."
            })]
        });
        return t.category ? o.jsxs("div", {
            className: "h-full flex flex-col",
            children: [o.jsxs("div", {
                className: "mb-4 flex justify-between items-center",
                children: [o.jsx("h2", {
                    className: "text-xl font-bold text-gray-900",
                    children: "Live Preview"
                }), o.jsxs("div", {
                    className: "text-sm font-medium px-2 py-1 bg-purple-100 text-purple-800 rounded-full",
                    children: [t.category, " ", t.subcategory ? `- ${t.subcategory}` : ""]
                })]
            }), o.jsx("div", {
                className: "relative flex-1 flex items-center justify-center overflow-auto",
                children: o.jsx("div", {
                    className: "w-full max-w-lg mx-auto transition-all duration-500 transform hover:scale-[1.02]",
                    children: o.jsxs("div", {
                        className: `${i()} ${c()} ${a()} flex flex-col min-h-[500px]`,
                        children: [r.header.include && o.jsxs("div", {
                            className: `p-4 border-b ${r.header.complex?"flex justify-between items-center":"text-center"}`,
                            children: [o.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [o.jsx("div", {
                                    className: l(),
                                    children: s()
                                }), o.jsx("h3", {
                                    className: "font-bold",
                                    children: t.name || "Brand Name"
                                })]
                            }), r.header.complex && o.jsxs("div", {
                                className: "flex space-x-4 text-sm",
                                children: [o.jsx("span", {
                                    children: "Home"
                                }), o.jsx("span", {
                                    children: "Features"
                                }), o.jsx("span", {
                                    children: "Pricing"
                                }), o.jsx("span", {
                                    children: "Contact"
                                })]
                            })]
                        }), o.jsxs("div", {
                            className: `p-6 flex-1 ${r.columns==="Single Column"?"flex flex-col space-y-4":r.columns==="Two Column"?"grid grid-cols-2 gap-4":r.columns==="Three Column"?"grid grid-cols-3 gap-4":"grid grid-cols-4 gap-4"}`,
                            children: [t.description && o.jsx("div", {
                                className: "col-span-full mb-6 text-center",
                                children: o.jsx("p", {
                                    className: "text-lg italic",
                                    children: t.description
                                })
                            }), Array.from({
                                length: r.columns === "Single Column" ? 3 : r.columns === "Two Column" ? 4 : r.columns === "Three Column" ? 6 : 8
                            }, (d, f) => o.jsxs("div", {
                                className: "bg-gray-100 p-4 rounded",
                                children: [o.jsx("div", {
                                    className: "w-full h-24 bg-gray-200 rounded mb-2"
                                }), o.jsx("div", {
                                    className: "h-4 bg-gray-200 rounded w-3/4 mb-2"
                                }), o.jsx("div", {
                                    className: "h-4 bg-gray-200 rounded w-1/2"
                                })]
                            }, f))]
                        }), r.footer.include && o.jsx("div", {
                            className: `p-4 border-t ${r.footer.complex?"grid grid-cols-3 gap-4":"text-center"}`,
                            children: r.footer.complex ? o.jsxs(o.Fragment, {
                                children: [o.jsxs("div", {
                                    children: [o.jsx("h4", {
                                        className: "font-bold mb-2",
                                        children: "About"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-3/4 mb-1"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-1/2 mb-1"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-2/3"
                                    })]
                                }), o.jsxs("div", {
                                    children: [o.jsx("h4", {
                                        className: "font-bold mb-2",
                                        children: "Links"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-3/4 mb-1"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-1/2 mb-1"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-2/3"
                                    })]
                                }), o.jsxs("div", {
                                    children: [o.jsx("h4", {
                                        className: "font-bold mb-2",
                                        children: "Contact"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-3/4 mb-1"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-1/2 mb-1"
                                    }), o.jsx("div", {
                                        className: "h-3 bg-gray-200 rounded w-2/3"
                                    })]
                                })]
                            }) : o.jsx("div", {
                                children: o.jsxs("p", {
                                    className: "text-sm",
                                    children: ["© 2025 ", t.name || "Brand Name", ". All rights reserved."]
                                })
                            })
                        })]
                    })
                })
            }), o.jsx("div", {
                className: "mt-4 p-3 bg-white rounded-lg border border-gray-200",
                children: o.jsxs("div", {
                    className: "grid grid-cols-3 gap-2 text-xs",
                    children: [o.jsxs("div", {
                        children: [o.jsx("span", {
                            className: "text-gray-500",
                            children: "Project:"
                        }), o.jsx("span", {
                            className: "ml-1 font-medium",
                            children: t.name || "Not named"
                        })]
                    }), o.jsxs("div", {
                        children: [o.jsx("span", {
                            className: "text-gray-500",
                            children: "Layout:"
                        }), o.jsx("span", {
                            className: "ml-1 font-medium",
                            children: r.columns || "Single Column"
                        })]
                    }), o.jsxs("div", {
                        children: [o.jsx("span", {
                            className: "text-gray-500",
                            children: "Theme:"
                        }), o.jsx("span", {
                            className: "ml-1 font-medium",
                            children: n.theme || "Not selected"
                        })]
                    })]
                })
            })]
        }) : u()
    }, Tv = () => {
        const {
            state: e,
            setActivePanel: t,
            generatePrompt: r,
            savePrompt: n
        } = Me(), {
            user: s
        } = rt(), [i, a] = k.useState(!1), [c, l] = k.useState(!1), [u, d] = k.useState(!1), [f, h] = k.useState(!1), [y, v] = k.useState(""), [x, b] = k.useState(""), [p, m] = k.useState(!1), [g, w] = k.useState(!1), C = async () => {
            try {
                await navigator.clipboard.writeText(r()), a(!0), setTimeout(() => a(!1), 2e3)
            } catch (I) {
                console.error("Failed to copy: ", I)
            }
        }, S = () => {
            const I = encodeURIComponent(r());
            window.open(`https://bolt.new?prompt=${I}`, "_blank")
        }, E = () => {
            if (!s) {
                d(!0);
                return
            }
            if (!e.isPremium) {
                h(!0);
                return
            }
            l(!0)
        }, A = async () => {
            if (!(!s || !e.isPremium)) {
                if (!y.trim()) {
                    b("Please enter a title for your prompt");
                    return
                }
                try {
                    m(!0), await n(y), l(!1), v(""), b("")
                } catch (I) {
                    console.error("Error saving prompt:", I), b("Failed to save prompt. Please try again.")
                } finally {
                    m(!1)
                }
            }
        }, T = () => {
            if (!e.isPremium) {
                h(!0);
                return
            }
            try {
                w(!0);
                const I = hv(e),
                    X = `${e.projectType.name||"project"}-prd.md`.replace(/\s+/g, "-").toLowerCase();
                wv(I, X, "text/markdown"), O.success("PRD downloaded successfully")
            } catch (I) {
                console.error("Error downloading PRD:", I), O.error("Failed to download PRD")
            } finally {
                w(!1)
            }
        }, N = () => {
            t("library")
        }, D = I => {
            t(I)
        }, W = () => {
            switch (e.layout.columns) {
                case "Single Column":
                    return o.jsx(mu, {
                        className: "w-4 h-4"
                    });
                case "Two Column":
                    return o.jsx(Xh, {
                        className: "w-4 h-4"
                    });
                case "Three Column":
                    return o.jsx(nf, {
                        className: "w-4 h-4"
                    });
                case "Four Column":
                    return o.jsx(rf, {
                        className: "w-4 h-4"
                    });
                default:
                    return o.jsx(mu, {
                        className: "w-4 h-4"
                    })
            }
        };
        return o.jsxs("div", {
            className: "space-y-6",
            children: [o.jsxs("header", {
                className: "border-b border-gray-200 pb-4",
                children: [o.jsx("h1", {
                    className: "text-2xl font-bold text-gray-900",
                    children: "Design Summary"
                }), o.jsx("p", {
                    className: "text-gray-500 mt-1",
                    children: "Review your design choices and generate your prompt"
                })]
            }), o.jsxs("section", {
                className: "bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200",
                children: [o.jsxs("div", {
                    className: "p-5 bg-gray-50 border-b border-gray-200",
                    children: [o.jsxs("h2", {
                        className: "text-lg font-semibold text-gray-900 flex items-center",
                        children: [o.jsx(Ai, {
                            className: "h-5 w-5 text-purple-600 mr-2"
                        }), "Generated Prompt"]
                    }), o.jsx("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: "Copy this prompt or open it directly in Bolt"
                    })]
                }), o.jsxs("div", {
                    className: "p-5 relative",
                    children: [o.jsx("div", {
                        className: "bg-gray-50 rounded-lg p-5 font-mono text-sm text-gray-800 whitespace-pre-wrap border border-gray-200",
                        children: r()
                    }), o.jsxs("div", {
                        className: "mt-6 flex flex-wrap gap-3 justify-center",
                        children: [o.jsx("button", {
                            onClick: C,
                            className: "flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors max-w-xs",
                            type: "button",
                            children: i ? o.jsxs(o.Fragment, {
                                children: [o.jsx(Yh, {
                                    className: "h-5 w-5 text-green-600"
                                }), o.jsx("span", {
                                    children: "Copied to Clipboard"
                                })]
                            }) : o.jsxs(o.Fragment, {
                                children: [o.jsx(Zh, {
                                    className: "h-5 w-5 text-gray-600"
                                }), o.jsx("span", {
                                    children: "Copy Prompt"
                                })]
                            })
                        }), o.jsxs("button", {
                            onClick: S,
                            className: "flex-1 py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-colors max-w-xs",
                            type: "button",
                            children: [o.jsx(Ai, {
                                className: "h-5 w-5"
                            }), o.jsx("span", {
                                children: "Open in Bolt"
                            }), o.jsx(Li, {
                                className: "h-4 w-4 ml-1"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "mt-4 flex justify-center flex-wrap gap-3",
                        children: [o.jsxs("button", {
                            onClick: E,
                            className: `inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${e.isPremium?"bg-white border border-gray-300 hover:bg-gray-50 text-gray-700":"bg-gray-100 text-gray-500 cursor-not-allowed"}`,
                            type: "button",
                            children: [!e.isPremium && o.jsx(pt, {
                                className: "h-4 w-4"
                            }), o.jsx(Ri, {
                                className: "h-4 w-4"
                            }), o.jsxs("span", {
                                children: ["Save to Prompt Library ", !e.isPremium && "(Premium)"]
                            })]
                        }), o.jsxs("button", {
                            onClick: T,
                            className: `inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${e.isPremium?"bg-white border border-gray-300 hover:bg-gray-50 text-gray-700":"bg-gray-100 text-gray-500 cursor-not-allowed"}`,
                            type: "button",
                            children: [!e.isPremium && o.jsx(pt, {
                                className: "h-4 w-4"
                            }), g ? o.jsxs("span", {
                                className: "flex items-center",
                                children: [o.jsxs("svg", {
                                    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [o.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), o.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), "Downloading..."]
                            }) : o.jsxs(o.Fragment, {
                                children: [o.jsx(N0, {
                                    className: "h-4 w-4"
                                }), o.jsxs("span", {
                                    children: ["Download PRD ", !e.isPremium && "(Premium)"]
                                })]
                            })]
                        })]
                    })]
                })]
            }), o.jsxs("section", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [o.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
                    onClick: () => D("project-type"),
                    children: [o.jsxs("div", {
                        className: "p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center",
                        children: [o.jsx("h3", {
                            className: "font-medium text-gray-900",
                            children: "Project Information"
                        }), o.jsx(En, {
                            className: "h-4 w-4 text-gray-500"
                        })]
                    }), o.jsx("div", {
                        className: "p-4",
                        children: o.jsxs("div", {
                            className: "space-y-2",
                            children: [o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Project Type"
                                }), o.jsxs("p", {
                                    className: "font-medium",
                                    children: [e.projectType.category, " - ", e.projectType.subcategory]
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Name"
                                }), o.jsx("p", {
                                    className: "font-medium",
                                    children: e.projectType.name || "Not specified"
                                })]
                            }), e.projectType.description && o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Description"
                                }), o.jsx("p", {
                                    className: "text-sm italic",
                                    children: e.projectType.description
                                })]
                            })]
                        })
                    })]
                }), o.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
                    onClick: () => D("layout"),
                    children: [o.jsxs("div", {
                        className: "p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center",
                        children: [o.jsx("h3", {
                            className: "font-medium text-gray-900",
                            children: "Layout"
                        }), o.jsx(En, {
                            className: "h-4 w-4 text-gray-500"
                        })]
                    }), o.jsxs("div", {
                        className: "p-4",
                        children: [o.jsxs("div", {
                            className: "flex items-center space-x-3 mb-3",
                            children: [W(), o.jsx("span", {
                                className: "font-medium",
                                children: e.layout.columns
                            })]
                        }), o.jsxs("div", {
                            className: "space-y-2",
                            children: [o.jsxs("div", {
                                className: "flex justify-between text-sm",
                                children: [o.jsx("span", {
                                    children: "Header"
                                }), o.jsx("span", {
                                    className: `inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${e.layout.header.include?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,
                                    children: e.layout.header.include ? e.layout.header.complex ? "Complex" : "Simple" : "None"
                                })]
                            }), o.jsxs("div", {
                                className: "flex justify-between text-sm",
                                children: [o.jsx("span", {
                                    children: "Footer"
                                }), o.jsx("span", {
                                    className: `inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${e.layout.footer.include?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,
                                    children: e.layout.footer.include ? e.layout.footer.complex ? "Complex" : "Simple" : "None"
                                })]
                            })]
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
                    onClick: () => D("design"),
                    children: [o.jsxs("div", {
                        className: "p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center",
                        children: [o.jsx("h3", {
                            className: "font-medium text-gray-900",
                            children: "Design System"
                        }), o.jsx(En, {
                            className: "h-4 w-4 text-gray-500"
                        })]
                    }), o.jsx("div", {
                        className: "p-4",
                        children: o.jsxs("div", {
                            className: "space-y-2",
                            children: [o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Design Language"
                                }), o.jsx("p", {
                                    className: "font-medium",
                                    children: e.design.language || "Not selected"
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Theme"
                                }), o.jsxs("div", {
                                    className: "flex items-center mt-1",
                                    children: [o.jsx("span", {
                                        className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2",
                                        children: e.design.theme || "Not selected"
                                    }), e.design.customTheme && o.jsx("span", {
                                        className: "text-xs text-gray-500",
                                        children: "(Custom)"
                                    })]
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Typography"
                                }), o.jsx("p", {
                                    className: "font-medium",
                                    children: e.design.typography || "Not selected"
                                })]
                            })]
                        })
                    })]
                }), o.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
                    onClick: () => D("visual-elements"),
                    children: [o.jsxs("div", {
                        className: "p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center",
                        children: [o.jsx("h3", {
                            className: "font-medium text-gray-900",
                            children: "Visual Elements"
                        }), o.jsx(En, {
                            className: "h-4 w-4 text-gray-500"
                        })]
                    }), o.jsx("div", {
                        className: "p-4",
                        children: o.jsxs("div", {
                            className: "space-y-2",
                            children: [o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Icon Style"
                                }), o.jsx("p", {
                                    className: "font-medium",
                                    children: e.design.icons || "Not selected"
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Illustration Style"
                                }), o.jsx("p", {
                                    className: "font-medium",
                                    children: e.design.illustrations || "Not selected"
                                })]
                            })]
                        })
                    })]
                }), o.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer md:col-span-2",
                    onClick: () => D("functionality"),
                    children: [o.jsxs("div", {
                        className: "p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center",
                        children: [o.jsx("h3", {
                            className: "font-medium text-gray-900",
                            children: "Functionality"
                        }), o.jsx(En, {
                            className: "h-4 w-4 text-gray-500"
                        })]
                    }), o.jsx("div", {
                        className: "p-4",
                        children: o.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Functionality Level"
                                }), o.jsx("p", {
                                    className: "font-medium",
                                    children: e.functionality.level || "Not selected"
                                })]
                            }), o.jsxs("div", {
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Technical Requirements"
                                }), e.functionality.requirements.length > 0 ? o.jsx("div", {
                                    className: "flex flex-wrap gap-1 mt-1",
                                    children: e.functionality.requirements.map((I, X) => o.jsx("span", {
                                        className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800",
                                        children: I
                                    }, X))
                                }) : o.jsx("p", {
                                    className: "text-sm text-gray-500",
                                    children: "None selected"
                                })]
                            }), e.functionality.customFeatures.length > 0 && o.jsxs("div", {
                                className: "md:col-span-2",
                                children: [o.jsx("span", {
                                    className: "text-xs text-gray-500",
                                    children: "Custom Features"
                                }), o.jsx("div", {
                                    className: "mt-1",
                                    children: o.jsx("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: e.functionality.customFeatures.map((I, X) => o.jsxs("span", {
                                            className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800",
                                            children: [o.jsx(Kl, {
                                                className: "h-3 w-3 mr-1"
                                            }), I]
                                        }, X))
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            }), o.jsxs("section", {
                className: "flex justify-between items-center pt-4 border-t border-gray-200",
                children: [o.jsxs("button", {
                    onClick: () => D("functionality"),
                    className: "flex items-center px-4 py-2 text-gray-600 hover:text-gray-900",
                    type: "button",
                    children: [o.jsx(Qh, {
                        className: "h-4 w-4 mr-2"
                    }), "Back to Functionality"]
                }), o.jsx("button", {
                    onClick: N,
                    className: "px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50",
                    type: "button",
                    children: "View Prompt Library"
                })]
            }), c && o.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: o.jsxs("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-md",
                    children: [o.jsx("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Save Prompt to Library"
                    }), o.jsxs("div", {
                        className: "mb-4",
                        children: [o.jsxs("label", {
                            htmlFor: "promptTitle",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: ["Prompt Title ", o.jsx("span", {
                                className: "text-red-500",
                                children: "*"
                            })]
                        }), o.jsx("input", {
                            type: "text",
                            id: "promptTitle",
                            value: y,
                            onChange: I => {
                                v(I.target.value), I.target.value.trim() && b("")
                            },
                            placeholder: "My awesome design",
                            className: `w-full px-3 py-2 border ${x?"border-red-300":"border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`
                        }), x && o.jsx("p", {
                            className: "mt-1 text-sm text-red-600",
                            children: x
                        })]
                    }), o.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-3 mb-4",
                        children: [o.jsx("p", {
                            className: "text-xs text-gray-500 mb-2",
                            children: "This will save:"
                        }), o.jsxs("ul", {
                            className: "text-sm space-y-1",
                            children: [o.jsx("li", {
                                children: "• Project type and details"
                            }), o.jsx("li", {
                                children: "• Layout configuration"
                            }), o.jsx("li", {
                                children: "• Design choices"
                            }), o.jsx("li", {
                                children: "• Functionality requirements"
                            }), o.jsx("li", {
                                children: "• Generated prompt"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "flex justify-end space-x-3",
                        children: [o.jsx("button", {
                            onClick: () => l(!1),
                            className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",
                            type: "button",
                            children: "Cancel"
                        }), o.jsx("button", {
                            onClick: A,
                            disabled: p,
                            className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center",
                            type: "button",
                            children: p ? o.jsxs(o.Fragment, {
                                children: [o.jsxs("svg", {
                                    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [o.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), o.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), "Saving..."]
                            }) : o.jsxs(o.Fragment, {
                                children: [o.jsx(Ri, {
                                    className: "h-4 w-4 mr-1"
                                }), "Save Prompt"]
                            })
                        })]
                    })]
                })
            }), u && o.jsx(fo, {
                onClose: () => d(!1)
            }), f && o.jsx(_s, {
                onClose: () => h(!1)
            })]
        })
    }, $v = () => {
        const {
            state: e,
            setActivePanel: t,
            deletePrompt: r,
            updatePromptDetails: n,
            likePrompt: s,
            addComment: i,
            deleteComment: a
        } = Me(), {
            user: c
        } = rt(), {
            savedPrompts: l,
            isPremium: u,
            isLoading: d
        } = e, [f, h] = k.useState(null), [y, v] = k.useState(""), [x, b] = k.useState(!1), [p, m] = k.useState(!1), [g, w] = k.useState(!1), [C, S] = k.useState(null), [E, A] = k.useState(""), [T, N] = k.useState(""), [D, W] = k.useState(0), [I, X] = k.useState(""), [je, ge] = k.useState(!1), [be, j] = k.useState(""), [U, M] = k.useState(!1), q = l.filter($ => {
            var H, Ke;
            return $.title.toLowerCase().includes(y.toLowerCase()) || ((H = $.projectType.name) == null ? void 0 : H.toLowerCase().includes(y.toLowerCase())) || $.projectType.category.toLowerCase().includes(y.toLowerCase()) || ((Ke = $.projectType.subcategory) == null ? void 0 : Ke.toLowerCase().includes(y.toLowerCase()))
        }), ee = $ => {
            const H = l.find(Ke => Ke.id === $);
            H && (S($), A(H.devURL || ""), N(H.prodURL || ""), W(H.rating || 0), X(H.comment || ""), ge(H.showcase || !1), j(H.screenshotURL || ""))
        }, xt = async () => {
            if (!(!C || !c)) try {
                M(!0), await n(C, {
                    devURL: E,
                    prodURL: T,
                    rating: D,
                    comment: I,
                    showcase: je,
                    screenshotURL: be
                }), S(null), O.success("Project details updated")
            } catch ($) {
                console.error("Error saving prompt details:", $), O.error("Failed to update project details")
            } finally {
                M(!1)
            }
        }, _ = () => {
            S(null)
        }, te = () => {
            t("gallery")
        }, de = async $ => {
            if (confirm("Are you sure you want to delete this project?")) try {
                await r($)
            } catch (H) {
                console.error("Error deleting prompt:", H)
            }
        }, ze = async ($, H) => {
            try {
                await navigator.clipboard.writeText($), h(H), setTimeout(() => h(null), 2e3)
            } catch (Ke) {
                console.error("Failed to copy: ", Ke)
            }
        }, Rt = $ => {
            const H = encodeURIComponent($);
            window.open(`https://bolt.new?prompt=${H}`, "_blank")
        }, At = () => {
            m(!0)
        }, pn = () => {
            c ? w(!0) : b(!0)
        }, gn = ({
            value: $,
            onChange: H
        }) => o.jsx("div", {
            className: "flex",
            children: [1, 2, 3, 4, 5].map(Ke => o.jsx(z0, {
                className: `w-5 h-5 ${Ke<=$?"text-yellow-400 fill-yellow-400":"text-gray-300"} ${H?"cursor-pointer":""}`,
                onClick: () => H && H(Ke)
            }, Ke))
        }), nc = $ => {
            if (!$) return "?";
            const H = $.split(/\s+/);
            return H.length === 1 ? $.substring(0, 2).toUpperCase() : (H[0][0] + H[1][0]).toUpperCase()
        };
        return d ? o.jsx("div", {
            className: "h-full flex items-center justify-center",
            children: o.jsx("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"
            })
        }) : o.jsxs("div", {
            className: "h-full flex flex-col",
            children: [o.jsx("div", {
                className: "border-b pb-4 mb-6",
                children: o.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [o.jsxs("div", {
                        className: "flex items-center",
                        children: [o.jsx("button", {
                            onClick: () => t("summary"),
                            className: "mr-2 p-2 rounded-full hover:bg-gray-100 transition-colors",
                            type: "button",
                            children: o.jsx(w0, {
                                className: "h-5 w-5 text-gray-600"
                            })
                        }), o.jsxs("div", {
                            children: [o.jsxs("h2", {
                                className: "text-2xl font-bold text-gray-900 flex items-center",
                                children: [o.jsx(Ma, {
                                    className: "h-6 w-6 text-purple-600 mr-2"
                                }), "Prompt Library"]
                            }), o.jsx("p", {
                                className: "text-gray-500",
                                children: "Manage your saved design prompts"
                            })]
                        })]
                    }), u ? o.jsxs("div", {
                        className: "flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-medium",
                        children: [o.jsx(B0, {
                            className: "h-4 w-4 mr-1"
                        }), "Premium Active"]
                    }) : o.jsxs("button", {
                        onClick: At,
                        className: "flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity",
                        type: "button",
                        children: [o.jsx(pt, {
                            className: "h-3.5 w-3.5"
                        }), "Upgrade to Premium"]
                    })]
                })
            }), o.jsxs("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3",
                children: [o.jsxs("div", {
                    className: "relative flex-1 max-w-md",
                    children: [o.jsx("div", {
                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                        children: o.jsx(sf, {
                            className: "h-4 w-4 text-gray-400"
                        })
                    }), o.jsx("input", {
                        type: "text",
                        placeholder: "Search prompts...",
                        value: y,
                        onChange: $ => v($.target.value),
                        className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    })]
                }), o.jsxs("div", {
                    className: "flex gap-3",
                    children: [o.jsxs("div", {
                        className: "text-sm text-gray-500 flex items-center",
                        children: [l.length, " prompt", l.length !== 1 ? "s" : "", " saved"]
                    }), u && o.jsxs("button", {
                        onClick: te,
                        className: "flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors",
                        type: "button",
                        children: [o.jsx(On, {
                            className: "h-4 w-4"
                        }), "View Public Gallery"]
                    })]
                })]
            }), c && u && o.jsx("div", {
                className: "mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4",
                children: o.jsxs("div", {
                    className: "flex items-center",
                    children: [e.userProfile.avatarURL ? o.jsx("img", {
                        src: e.userProfile.avatarURL,
                        alt: e.userProfile.username,
                        className: "h-12 w-12 rounded-full border-2 border-purple-100"
                    }) : o.jsx("div", {
                        className: "h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-lg font-medium text-purple-700",
                        children: nc(e.userProfile.username)
                    }), o.jsxs("div", {
                        className: "ml-4",
                        children: [o.jsx("h3", {
                            className: "font-bold text-gray-900",
                            children: e.userProfile.username
                        }), o.jsxs("p", {
                            className: "text-sm text-gray-500",
                            children: [l.filter($ => $.showcase).length, " project", l.filter($ => $.showcase).length !== 1 ? "s" : "", " showcased"]
                        })]
                    }), o.jsxs("button", {
                        onClick: pn,
                        className: "ml-auto px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1",
                        type: "button",
                        children: [o.jsx(ro, {
                            className: "h-4 w-4"
                        }), o.jsx("span", {
                            children: "Edit Profile"
                        })]
                    })]
                })
            }), o.jsx("div", {
                className: "flex-1 overflow-y-auto pr-2",
                children: l.length === 0 ? o.jsxs("div", {
                    className: "h-full flex flex-col items-center justify-center text-center p-8",
                    children: [o.jsx("div", {
                        className: "w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4",
                        children: o.jsx(Ma, {
                            className: "h-10 w-10 text-purple-600"
                        })
                    }), o.jsx("h3", {
                        className: "text-xl font-bold text-gray-900 mb-2",
                        children: "Your prompt library is empty"
                    }), o.jsx("p", {
                        className: "text-gray-600 max-w-md mb-6",
                        children: "Save your design prompts to build a library of reusable templates for your projects."
                    }), o.jsx("button", {
                        onClick: () => t("project-type"),
                        className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",
                        type: "button",
                        children: "Create Your First Prompt"
                    })]
                }) : q.length === 0 ? o.jsxs("div", {
                    className: "flex flex-col items-center justify-center text-center p-8",
                    children: [o.jsx(Jh, {
                        className: "h-12 w-12 text-gray-400 mb-4"
                    }), o.jsx("h3", {
                        className: "text-lg font-medium text-gray-900 mb-2",
                        children: "No prompts match your search"
                    }), o.jsx("p", {
                        className: "text-gray-600",
                        children: "Try a different search term or clear your search"
                    })]
                }) : o.jsx("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: q.map($ => o.jsx("div", {
                        className: `border rounded-lg overflow-hidden hover:shadow-md transition-shadow ${Lv($)}`,
                        children: C === $.id ? o.jsxs("div", {
                            className: "p-4",
                            children: [o.jsx("h3", {
                                className: "font-bold text-lg mb-3",
                                children: $.title
                            }), o.jsxs("div", {
                                className: "space-y-4 mb-4",
                                children: [o.jsxs("div", {
                                    children: [o.jsx("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Development URL"
                                    }), o.jsxs("div", {
                                        className: "flex items-center rounded-md overflow-hidden border border-gray-300 bg-white",
                                        children: [o.jsx("div", {
                                            className: "px-3 py-2 bg-gray-100 border-r border-gray-300",
                                            children: o.jsx(Fa, {
                                                className: "h-4 w-4 text-gray-500"
                                            })
                                        }), o.jsx("input", {
                                            type: "text",
                                            value: E,
                                            onChange: H => A(H.target.value),
                                            placeholder: "http://localhost:3000",
                                            className: "flex-1 px-3 py-2 focus:outline-none"
                                        })]
                                    })]
                                }), o.jsxs("div", {
                                    children: [o.jsx("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Production URL"
                                    }), o.jsxs("div", {
                                        className: "flex items-center rounded-md overflow-hidden border border-gray-300 bg-white",
                                        children: [o.jsx("div", {
                                            className: "px-3 py-2 bg-gray-100 border-r border-gray-300",
                                            children: o.jsx(za, {
                                                className: "h-4 w-4 text-gray-500"
                                            })
                                        }), o.jsx("input", {
                                            type: "text",
                                            value: T,
                                            onChange: H => N(H.target.value),
                                            placeholder: "https://my-project.com",
                                            className: "flex-1 px-3 py-2 focus:outline-none"
                                        })]
                                    })]
                                }), u && o.jsxs("div", {
                                    className: "mt-4",
                                    children: [o.jsx("div", {
                                        className: "flex items-center justify-between",
                                        children: o.jsxs("label", {
                                            className: "flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer",
                                            children: [o.jsxs("div", {
                                                className: "flex items-center",
                                                children: [o.jsx(On, {
                                                    className: "h-4 w-4 mr-1 text-purple-600"
                                                }), "Showcase Project"]
                                            }), o.jsxs("div", {
                                                className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${je?"bg-purple-600":"bg-gray-200"}`,
                                                children: [o.jsx("span", {
                                                    className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${je?"translate-x-6":"translate-x-1"}`
                                                }), o.jsx("input", {
                                                    type: "checkbox",
                                                    className: "sr-only",
                                                    checked: je,
                                                    onChange: () => ge(!je)
                                                })]
                                            })]
                                        })
                                    }), o.jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Enable to display this project in the public gallery"
                                    })]
                                }), u && je && o.jsxs("div", {
                                    className: "mt-2",
                                    children: [o.jsx("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Screenshot URL"
                                    }), o.jsxs("div", {
                                        className: "flex items-center rounded-md overflow-hidden border border-gray-300 bg-white",
                                        children: [o.jsx("div", {
                                            className: "px-3 py-2 bg-gray-100 border-r border-gray-300",
                                            children: o.jsx(v0, {
                                                className: "h-4 w-4 text-gray-500"
                                            })
                                        }), o.jsx("input", {
                                            type: "text",
                                            value: be,
                                            onChange: H => j(H.target.value),
                                            placeholder: "https://example.com/screenshot.png",
                                            className: "flex-1 px-3 py-2 focus:outline-none"
                                        })]
                                    }), o.jsxs("div", {
                                        className: "flex items-center mt-1",
                                        children: [o.jsx(tf, {
                                            className: "h-3 w-3 text-gray-400 mr-1"
                                        }), o.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Even without a screenshot, your project will appear in the gallery with a fallback design"
                                        })]
                                    })]
                                }), o.jsxs("div", {
                                    children: [o.jsx("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Rate this prompt"
                                    }), o.jsx(gn, {
                                        value: D,
                                        onChange: W
                                    })]
                                }), o.jsxs("div", {
                                    children: [o.jsx("label", {
                                        className: "block text-sm font-medium mb-1 text-gray-700",
                                        children: "Feedback/Notes"
                                    }), o.jsx("textarea", {
                                        value: I,
                                        onChange: H => X(H.target.value),
                                        placeholder: "What worked well? What could be improved?",
                                        rows: 3,
                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    })]
                                })]
                            }), o.jsxs("div", {
                                className: "flex justify-end space-x-2 mt-4",
                                children: [o.jsx("button", {
                                    onClick: _,
                                    className: "px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded",
                                    type: "button",
                                    children: "Cancel"
                                }), o.jsx("button", {
                                    onClick: xt,
                                    className: "px-3 py-1.5 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded flex items-center",
                                    disabled: U,
                                    type: "button",
                                    children: U ? o.jsxs(o.Fragment, {
                                        children: [o.jsxs("svg", {
                                            className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [o.jsx("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }), o.jsx("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            })]
                                        }), "Saving..."]
                                    }) : o.jsxs(o.Fragment, {
                                        children: [o.jsx(Ri, {
                                            className: "h-3.5 w-3.5 mr-1"
                                        }), "Save Details"]
                                    })
                                })]
                            })]
                        }) : o.jsxs("div", {
                            className: "p-4",
                            children: [o.jsxs("div", {
                                className: "flex justify-between items-start",
                                children: [o.jsxs("div", {
                                    className: "flex items-center",
                                    children: [o.jsx("h3", {
                                        className: "font-bold text-lg",
                                        children: $.title
                                    }), u && $.showcase && o.jsxs("span", {
                                        className: "ml-2 px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 rounded-full flex items-center",
                                        children: [o.jsx(On, {
                                            className: "h-3 w-3 mr-1"
                                        }), "Showcased"]
                                    })]
                                }), o.jsxs("div", {
                                    className: "flex items-center space-x-1",
                                    children: [o.jsx("button", {
                                        onClick: () => ee($.id),
                                        className: "p-1.5 rounded-md hover:bg-white hover:bg-opacity-50 transition-colors",
                                        title: "Edit prompt details",
                                        type: "button",
                                        children: o.jsx(D0, {
                                            className: "h-4 w-4 text-gray-500 hover:text-purple-500"
                                        })
                                    }), o.jsx("button", {
                                        onClick: () => de($.id),
                                        className: "p-1.5 rounded-md hover:bg-white hover:bg-opacity-50 transition-colors",
                                        title: "Delete prompt",
                                        type: "button",
                                        children: o.jsx(H0, {
                                            className: "h-4 w-4 text-gray-500 hover:text-red-500"
                                        })
                                    })]
                                })]
                            }), o.jsxs("div", {
                                className: "flex items-center text-xs text-gray-500 mt-1 mb-3",
                                children: [u && o.jsxs("div", {
                                    className: "flex items-center mr-2",
                                    children: [$.authorAvatar ? o.jsx("img", {
                                        src: $.authorAvatar,
                                        alt: $.authorName || e.userProfile.username,
                                        className: "h-5 w-5 rounded-full mr-1"
                                    }) : o.jsx("div", {
                                        className: "h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700 mr-1",
                                        children: nc($.authorName || e.userProfile.username)
                                    }), o.jsx("span", {
                                        children: $.authorName || e.userProfile.username
                                    })]
                                }), o.jsxs("div", {
                                    className: "flex items-center",
                                    children: [o.jsx(x0, {
                                        className: "h-3 w-3 mr-1"
                                    }), o.jsx("span", {
                                        children: Rv($.date)
                                    })]
                                }), o.jsx("span", {
                                    className: "mx-2",
                                    children: "•"
                                }), o.jsxs("div", {
                                    className: "flex items-center",
                                    children: [Av($.projectType.category), o.jsx("span", {
                                        className: "ml-1",
                                        children: $.projectType.category
                                    }), $.projectType.subcategory && o.jsxs(o.Fragment, {
                                        children: [o.jsx("span", {
                                            className: "mx-1",
                                            children: "-"
                                        }), o.jsx("span", {
                                            children: $.projectType.subcategory
                                        })]
                                    })]
                                })]
                            }), $.rating > 0 && o.jsx("div", {
                                className: "mb-3",
                                children: o.jsxs("div", {
                                    className: "flex items-center",
                                    children: [o.jsx(gn, {
                                        value: $.rating
                                    }), o.jsxs("span", {
                                        className: "ml-2 text-xs text-gray-500",
                                        children: [$.rating, "/5"]
                                    })]
                                })
                            }), u && $.showcase && $.screenshotURL && o.jsx("div", {
                                className: "mb-4 rounded-md overflow-hidden border border-gray-200",
                                children: o.jsx("img", {
                                    src: $.screenshotURL,
                                    alt: `Screenshot of ${$.title}`,
                                    className: "w-full h-40 object-cover object-top"
                                })
                            }), ($.devURL || $.prodURL) && o.jsxs("div", {
                                className: "bg-white bg-opacity-70 rounded-md p-3 mb-3",
                                children: [$.devURL && o.jsxs("div", {
                                    className: "flex items-center text-sm text-gray-700 mb-1",
                                    children: [o.jsx(Fa, {
                                        className: "h-3.5 w-3.5 mr-1.5 text-gray-500"
                                    }), o.jsx("a", {
                                        href: $.devURL,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-blue-600 hover:underline truncate",
                                        children: $.devURL
                                    })]
                                }), $.prodURL && o.jsxs("div", {
                                    className: "flex items-center text-sm text-gray-700",
                                    children: [o.jsx(za, {
                                        className: "h-3.5 w-3.5 mr-1.5 text-gray-500"
                                    }), o.jsx("a", {
                                        href: $.prodURL,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-blue-600 hover:underline truncate",
                                        children: $.prodURL
                                    })]
                                })]
                            }), $.comment && o.jsxs("div", {
                                className: "bg-white bg-opacity-70 rounded-md p-3 mb-3",
                                children: [o.jsxs("div", {
                                    className: "flex items-start mb-1",
                                    children: [o.jsx(Ba, {
                                        className: "h-3.5 w-3.5 mr-1.5 text-gray-500 mt-0.5"
                                    }), o.jsx("span", {
                                        className: "text-xs text-gray-700 font-medium",
                                        children: "Notes/Feedback:"
                                    })]
                                }), o.jsx("p", {
                                    className: "text-sm text-gray-700 pl-5",
                                    children: $.comment
                                })]
                            }), o.jsx("div", {
                                className: "bg-white bg-opacity-70 rounded-md p-3 mb-3 text-sm text-gray-700 line-clamp-3",
                                children: $.prompt
                            }), o.jsx("div", {
                                className: "flex flex-wrap gap-2 mb-3",
                                children: $.functionality.requirements.map((H, Ke) => o.jsx("span", {
                                    className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800",
                                    children: H
                                }, Ke))
                            }), o.jsxs("div", {
                                className: "flex justify-between items-center mt-3 pt-3 border-t border-gray-200 border-opacity-50",
                                children: [o.jsxs("div", {
                                    className: "flex space-x-2",
                                    children: [o.jsx("button", {
                                        onClick: () => ze($.prompt, $.id),
                                        className: "text-xs flex items-center gap-1 px-2 py-1 bg-white rounded hover:bg-gray-50",
                                        type: "button",
                                        children: f === $.id ? o.jsxs(o.Fragment, {
                                            children: [o.jsx(Yh, {
                                                className: "h-3 w-3 text-green-600"
                                            }), o.jsx("span", {
                                                className: "text-green-600",
                                                children: "Copied"
                                            })]
                                        }) : o.jsxs(o.Fragment, {
                                            children: [o.jsx(Zh, {
                                                className: "h-3 w-3"
                                            }), o.jsx("span", {
                                                children: "Copy"
                                            })]
                                        })
                                    }), o.jsxs("button", {
                                        onClick: () => Rt($.prompt),
                                        className: "text-xs flex items-center gap-1 px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700",
                                        type: "button",
                                        children: [o.jsx(Ai, {
                                            className: "h-3 w-3"
                                        }), o.jsx("span", {
                                            children: "Open in Bolt"
                                        }), o.jsx(Li, {
                                            className: "h-2.5 w-2.5"
                                        })]
                                    })]
                                }), u && $.showcase && o.jsxs("div", {
                                    className: "text-xs text-purple-600 flex items-center",
                                    children: [o.jsx(On, {
                                        className: "h-3 w-3 mr-1"
                                    }), "In Gallery"]
                                })]
                            })]
                        })
                    }, $.id))
                })
            }), x && o.jsx(fo, {
                onClose: () => b(!1)
            }), g && o.jsx(zf, {
                onClose: () => w(!1)
            }), p && o.jsx(_s, {
                onClose: () => m(!1)
            })]
        })
    };

function Lv(e) {
    return e.design.theme === "Light Modern" ? "bg-blue-50 text-blue-600 border-blue-200" : e.design.theme === "Dark Professional" ? "bg-indigo-50 text-indigo-600 border-indigo-200" : e.design.theme === "Vibrant Creative" ? "bg-purple-50 text-purple-600 border-purple-200" : e.design.theme === "Minimalist" ? "bg-gray-50 text-gray-600 border-gray-200" : e.design.theme === "Organic & Natural" ? "bg-amber-50 text-amber-600 border-amber-200" : e.design.theme === "Tech & Digital" ? "bg-sky-50 text-sky-600 border-sky-200" : "bg-purple-50 text-purple-600 border-purple-200"
}

function Rv(e) {
    return new Date(e).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    })
}

function Av(e) {
    switch (e) {
        case "Website":
            return o.jsx(nr, {
                className: "w-4 h-4"
            });
        case "Mobile App":
            return o.jsx(to, {
                className: "w-4 h-4"
            });
        case "Web App":
            return o.jsx(js, {
                className: "w-4 h-4"
            });
        case "Dashboard":
            return o.jsx(eo, {
                className: "w-4 h-4"
            });
        default:
            return o.jsx(nr, {
                className: "w-4 h-4"
            })
    }
}
const Ov = () => {
        var j, U, M, q, ee, xt;
        const {
            state: e,
            setActivePanel: t,
            likePrompt: r,
            addComment: n,
            deleteComment: s
        } = Me(), {
            user: i
        } = rt(), [a, c] = k.useState([]), [l, u] = k.useState(!0), [d, f] = k.useState(""), [h, y] = k.useState("All"), [v, x] = k.useState(!1), [b, p] = k.useState(null), [m, g] = k.useState("");
        k.useEffect(() => {
            w()
        }, []);
        const w = async () => {
            try {
                u(!0);
                const {
                    data: _,
                    error: te
                } = await Of();
                if (te) {
                    O.error("Failed to load projects");
                    return
                }
                _ && c(_.showcaseProjects || [])
            } catch (_) {
                console.error("Error fetching showcased projects:", _), O.error("Something went wrong")
            } finally {
                u(!1)
            }
        }, C = ["All", ...new Set(a.map(_ => _.projectType.category))], S = a.filter(_ => {
            var ze, Rt, At;
            const te = _.title.toLowerCase().includes(d.toLowerCase()) || ((ze = _.projectType.name) == null ? void 0 : ze.toLowerCase().includes(d.toLowerCase())) || _.projectType.category.toLowerCase().includes(d.toLowerCase()) || ((Rt = _.projectType.subcategory) == null ? void 0 : Rt.toLowerCase().includes(d.toLowerCase())) || ((At = _.authorName) == null ? void 0 : At.toLowerCase().includes(d.toLowerCase())),
                de = h === "All" || _.projectType.category === h;
            return te && de
        }), E = _ => {
            switch (_) {
                case "Website":
                    return o.jsx(nr, {
                        className: "w-4 h-4"
                    });
                case "Mobile App":
                    return o.jsx(to, {
                        className: "w-4 h-4"
                    });
                case "Web App":
                    return o.jsx(js, {
                        className: "w-4 h-4"
                    });
                case "Dashboard":
                    return o.jsx(eo, {
                        className: "w-4 h-4"
                    });
                default:
                    return o.jsx(nr, {
                        className: "w-4 h-4"
                    })
            }
        }, A = _ => new Date(_).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        }), T = _ => {
            const te = new Date(_),
                ze = new Date().getTime() - te.getTime(),
                Rt = Math.round(ze / 1e3),
                At = Math.round(Rt / 60),
                pn = Math.round(At / 60),
                gn = Math.round(pn / 24);
            return Rt < 60 ? `${Rt} seconds ago` : At < 60 ? `${At} minutes ago` : pn < 24 ? `${pn} hours ago` : gn < 7 ? `${gn} days ago` : A(_)
        }, N = async _ => {
            if (!i) {
                O.error("You must be signed in to like projects");
                return
            }
            await r(_), await w()
        }, D = async () => {
            if (!i) {
                O.error("You must be signed in to comment");
                return
            }
            b && m.trim() && (await n(b, m.trim()), g(""), await w())
        }, W = _ => {
            p(_), x(!0)
        }, I = () => {
            x(!1), p(null), g("")
        }, X = _ => {
            var de;
            if (!i) return !1;
            const te = a.find(ze => ze.id === _);
            return ((de = te == null ? void 0 : te.likes) == null ? void 0 : de.includes(i.id)) || !1
        }, je = _ => {
            switch (_) {
                case "Light Modern":
                    return "bg-gradient-to-br from-blue-50 to-blue-200";
                case "Dark Professional":
                    return "bg-gradient-to-br from-slate-700 to-slate-900 text-white";
                case "Vibrant Creative":
                    return "bg-gradient-to-br from-purple-400 to-pink-500 text-white";
                case "Minimalist":
                    return "bg-gradient-to-br from-gray-50 to-gray-200";
                case "Organic & Natural":
                    return "bg-gradient-to-br from-amber-100 to-amber-300";
                case "Tech & Digital":
                    return "bg-gradient-to-br from-blue-100 to-cyan-200";
                default:
                    return "bg-gradient-to-br from-purple-100 to-purple-200"
            }
        }, ge = () => a.find(_ => _.id === b), be = _ => {
            if (!_) return "?";
            const te = _.split(/\s+/);
            return te.length === 1 ? _.substring(0, 2).toUpperCase() : (te[0][0] + te[1][0]).toUpperCase()
        };
        return o.jsxs("div", {
            className: "h-full flex flex-col",
            children: [o.jsx("div", {
                className: "border-b pb-6 mb-6",
                children: o.jsxs("div", {
                    className: "flex items-center",
                    children: [o.jsx("button", {
                        onClick: () => t("library"),
                        className: "mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors",
                        children: o.jsx(Qh, {
                            className: "h-5 w-5 text-gray-600"
                        })
                    }), o.jsxs("div", {
                        children: [o.jsx("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Project Gallery"
                        }), o.jsx("p", {
                            className: "text-gray-500",
                            children: "Discover showcased projects from our community"
                        })]
                    })]
                })
            }), o.jsx("div", {
                className: "mb-6",
                children: o.jsxs("div", {
                    className: "flex flex-col md:flex-row gap-4",
                    children: [o.jsxs("div", {
                        className: "relative flex-1",
                        children: [o.jsx("input", {
                            type: "text",
                            placeholder: "Search projects...",
                            value: d,
                            onChange: _ => f(_.target.value),
                            className: "w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        }), o.jsx("div", {
                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                            children: o.jsx(sf, {
                                className: "h-5 w-5 text-gray-400"
                            })
                        })]
                    }), o.jsx("div", {
                        className: "flex-shrink-0",
                        children: o.jsx("select", {
                            value: h,
                            onChange: _ => y(_.target.value),
                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white",
                            children: C.map(_ => o.jsx("option", {
                                value: _,
                                children: _
                            }, _))
                        })
                    })]
                })
            }), l ? o.jsxs("div", {
                className: "flex flex-col items-center justify-center flex-1",
                children: [o.jsx("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"
                }), o.jsx("p", {
                    className: "text-gray-600",
                    children: "Loading projects..."
                })]
            }) : a.length === 0 ? o.jsxs("div", {
                className: "flex flex-col items-center justify-center flex-1 text-center p-8",
                children: [o.jsx("div", {
                    className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",
                    children: o.jsx(k0, {
                        className: "h-8 w-8 text-gray-400"
                    })
                }), o.jsx("h2", {
                    className: "text-xl font-bold text-gray-900 mb-2",
                    children: "No showcased projects yet"
                }), o.jsx("p", {
                    className: "text-gray-600 max-w-md mb-6",
                    children: 'When you toggle "Showcase Project" in your prompt library, your projects will appear here for others to discover.'
                }), o.jsx("button", {
                    onClick: () => t("library"),
                    className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",
                    children: "Back to Library"
                })]
            }) : S.length === 0 ? o.jsxs("div", {
                className: "flex flex-col items-center justify-center flex-1 text-center p-8",
                children: [o.jsx("h2", {
                    className: "text-xl font-bold text-gray-900 mb-2",
                    children: "No matching projects"
                }), o.jsx("p", {
                    className: "text-gray-600",
                    children: "Try adjusting your search or filters"
                })]
            }) : o.jsxs("div", {
                className: "flex-1 overflow-y-auto",
                children: [o.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: S.map(_ => {
                        var te, de;
                        return o.jsxs("div", {
                            className: "bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow",
                            children: [o.jsxs("div", {
                                className: "aspect-video overflow-hidden relative",
                                children: [_.screenshotURL ? o.jsx("img", {
                                    src: _.screenshotURL,
                                    alt: _.title,
                                    className: "w-full h-full object-cover object-top transition-transform hover:scale-105"
                                }) : o.jsx("div", {
                                    className: `w-full h-full flex items-center justify-center p-4 ${je(_.design.theme)}`,
                                    children: o.jsxs("div", {
                                        className: "text-center",
                                        children: [o.jsx("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: _.title
                                        }), o.jsx("div", {
                                            className: "inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full",
                                            children: E(_.projectType.category)
                                        })]
                                    })
                                }), o.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2",
                                    children: o.jsxs("div", {
                                        className: "flex items-center text-white text-sm",
                                        children: [E(_.projectType.category), o.jsx("span", {
                                            className: "ml-1",
                                            children: _.projectType.category
                                        }), _.projectType.subcategory && o.jsxs("span", {
                                            className: "ml-1 opacity-80",
                                            children: ["• ", _.projectType.subcategory]
                                        })]
                                    })
                                })]
                            }), o.jsxs("div", {
                                className: "p-4",
                                children: [o.jsxs("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [o.jsx("h3", {
                                        className: "font-bold text-lg truncate",
                                        children: _.title
                                    }), o.jsx("div", {
                                        className: "flex items-center",
                                        children: _.authorAvatar ? o.jsxs("div", {
                                            className: "relative group",
                                            children: [o.jsx("img", {
                                                src: _.authorAvatar,
                                                alt: _.authorName || "User",
                                                className: "w-8 h-8 rounded-full border-2 border-white shadow-sm"
                                            }), o.jsx("div", {
                                                className: "absolute bottom-full right-0 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded py-1 px-2 pointer-events-none",
                                                children: _.authorName || "Anonymous User"
                                            })]
                                        }) : o.jsxs("div", {
                                            className: "relative group",
                                            children: [o.jsx("div", {
                                                className: "w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700 border-2 border-white shadow-sm",
                                                children: be(_.authorName || "")
                                            }), o.jsx("div", {
                                                className: "absolute bottom-full right-0 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded py-1 px-2 pointer-events-none",
                                                children: _.authorName || "Anonymous User"
                                            })]
                                        })
                                    })]
                                }), o.jsx("p", {
                                    className: "text-sm text-gray-600 mb-3 line-clamp-2",
                                    children: _.projectType.description || _.prompt.substring(0, 100) + "..."
                                }), o.jsxs("div", {
                                    className: "flex justify-between items-center text-xs text-gray-500 mb-3",
                                    children: [o.jsx("span", {
                                        children: A(_.date)
                                    }), o.jsx("span", {
                                        className: "font-medium text-gray-700",
                                        children: _.design.theme
                                    })]
                                }), o.jsxs("div", {
                                    className: "flex flex-wrap gap-1 mb-4",
                                    children: [_.design.language && o.jsx("span", {
                                        className: "px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800",
                                        children: _.design.language
                                    }), _.design.typography && o.jsx("span", {
                                        className: "px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                                        children: _.design.typography.split("/")[0]
                                    })]
                                }), o.jsxs("div", {
                                    className: "flex justify-between items-center border-t border-gray-100 pt-3",
                                    children: [o.jsxs("div", {
                                        className: "flex items-center space-x-3",
                                        children: [o.jsxs("button", {
                                            onClick: () => N(_.id),
                                            className: `flex items-center text-sm ${X(_.id)?"text-red-500 hover:text-red-600":"text-gray-500 hover:text-red-500"}`,
                                            children: [X(_.id) ? o.jsx(_0, {
                                                className: "w-4 h-4 mr-1"
                                            }) : o.jsx(S0, {
                                                className: "w-4 h-4 mr-1"
                                            }), o.jsx("span", {
                                                children: ((te = _.likes) == null ? void 0 : te.length) || 0
                                            })]
                                        }), o.jsxs("button", {
                                            onClick: () => W(_.id),
                                            className: "text-gray-500 hover:text-gray-700 flex items-center text-sm",
                                            children: [o.jsx(Ba, {
                                                className: "w-4 h-4 mr-1"
                                            }), o.jsx("span", {
                                                children: ((de = _.comments) == null ? void 0 : de.length) || 0
                                            })]
                                        })]
                                    }), o.jsxs("div", {
                                        className: "flex space-x-2",
                                        children: [_.devURL && !_.prodURL && o.jsxs("a", {
                                            href: _.devURL,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium",
                                            children: [o.jsx(Fa, {
                                                className: "w-3 h-3 mr-1"
                                            }), o.jsx("span", {
                                                children: "View Site"
                                            }), o.jsx(Li, {
                                                className: "w-3 h-3 ml-1"
                                            })]
                                        }), _.prodURL && o.jsxs("a", {
                                            href: _.prodURL,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium",
                                            children: [o.jsx(za, {
                                                className: "w-3 h-3 mr-1"
                                            }), o.jsx("span", {
                                                children: "Visit Site"
                                            }), o.jsx(Li, {
                                                className: "w-3 h-3 ml-1"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        }, _.id)
                    })
                }), o.jsx("div", {
                    className: "h-8"
                })]
            }), v && b && o.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: o.jsxs("div", {
                    className: "bg-white rounded-lg w-full max-w-lg mx-4 flex flex-col h-[80vh]",
                    children: [o.jsxs("div", {
                        className: "px-6 py-4 border-b border-gray-200 flex justify-between items-center",
                        children: [o.jsxs("h3", {
                            className: "font-bold text-lg",
                            children: ['Comments on "', (j = ge()) == null ? void 0 : j.title, '"']
                        }), o.jsx("button", {
                            onClick: I,
                            className: "p-1 rounded-full hover:bg-gray-100",
                            children: o.jsx(Tt, {
                                className: "h-5 w-5 text-gray-500"
                            })
                        })]
                    }), o.jsx("div", {
                        className: "p-6 flex-1 overflow-y-auto",
                        children: (U = ge()) != null && U.comments && ((q = (M = ge()) == null ? void 0 : M.comments) == null ? void 0 : q.length) > 0 ? o.jsx("ul", {
                            className: "space-y-4",
                            children: (xt = (ee = ge()) == null ? void 0 : ee.comments) == null ? void 0 : xt.map(_ => o.jsxs("li", {
                                className: "bg-gray-50 rounded-lg p-3",
                                children: [o.jsxs("div", {
                                    className: "flex justify-between items-start",
                                    children: [o.jsxs("div", {
                                        className: "flex items-center mb-1",
                                        children: [_.authorAvatar ? o.jsx("img", {
                                            src: _.authorAvatar,
                                            alt: _.authorName || "User",
                                            className: "h-6 w-6 rounded-full"
                                        }) : o.jsx("div", {
                                            className: "h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700",
                                            children: be(_.authorName || "")
                                        }), o.jsx("span", {
                                            className: "text-sm font-medium ml-2",
                                            children: _.authorName || `User ${_.author.substring(0,5)}`
                                        }), o.jsx("span", {
                                            className: "text-xs text-gray-500 ml-2",
                                            children: T(_.date)
                                        })]
                                    }), i && _.author === i.id && o.jsx("button", {
                                        onClick: () => s(b, _.id),
                                        className: "text-gray-400 hover:text-red-500 p-1",
                                        children: o.jsx(Tt, {
                                            className: "h-3 w-3"
                                        })
                                    })]
                                }), o.jsx("p", {
                                    className: "text-sm text-gray-700 ml-8",
                                    children: _.text
                                })]
                            }, _.id))
                        }) : o.jsxs("div", {
                            className: "text-center py-10",
                            children: [o.jsx(Ba, {
                                className: "h-8 w-8 text-gray-300 mx-auto mb-3"
                            }), o.jsx("p", {
                                className: "text-gray-500",
                                children: "No comments yet. Be the first to comment!"
                            })]
                        })
                    }), o.jsx("div", {
                        className: "p-4 border-t border-gray-200",
                        children: i ? o.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [o.jsx("div", {
                                className: "flex-shrink-0",
                                children: e.userProfile.avatarURL ? o.jsx("img", {
                                    src: e.userProfile.avatarURL,
                                    alt: e.userProfile.username,
                                    className: "h-8 w-8 rounded-full"
                                }) : o.jsx("div", {
                                    className: "h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700",
                                    children: be(e.userProfile.username)
                                })
                            }), o.jsx("input", {
                                type: "text",
                                value: m,
                                onChange: _ => g(_.target.value),
                                placeholder: "Add a comment...",
                                className: "flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                onKeyDown: _ => {
                                    _.key === "Enter" && !_.shiftKey && (_.preventDefault(), D())
                                }
                            }), o.jsx("button", {
                                onClick: D,
                                disabled: !m.trim(),
                                className: `p-2 rounded-full ${m.trim()?"bg-purple-600 text-white hover:bg-purple-700":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,
                                children: o.jsx(I0, {
                                    className: "h-5 w-5"
                                })
                            })]
                        }) : o.jsxs("div", {
                            className: "bg-gray-50 rounded-lg p-3 text-center",
                            children: [o.jsx("p", {
                                className: "text-gray-600 mb-2",
                                children: "Sign in to leave a comment"
                            }), o.jsx("button", {
                                onClick: () => {
                                    I()
                                },
                                className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm",
                                children: "Sign In"
                            })]
                        })
                    })]
                })
            })]
        })
    },
    Dv = () => {
        const {
            state: e
        } = Me(), [t, r] = k.useState(!0), [n, s] = k.useState(!1), [i, a] = k.useState(e.activePanel);
        k.useEffect(() => {
            const l = setTimeout(() => {
                r(!1)
            }, 800);
            return () => clearTimeout(l)
        }, []), k.useEffect(() => {
            if (e.activePanel !== i) {
                s(!0);
                const l = setTimeout(() => {
                    a(e.activePanel), s(!1)
                }, 300);
                return () => clearTimeout(l)
            }
        }, [e.activePanel, i]);
        const c = () => {
            switch (i) {
                case "project-type":
                    return o.jsx(Ou, {});
                case "layout":
                    return o.jsx(_v, {});
                case "design":
                    return o.jsx(Sv, {});
                case "visual-elements":
                    return o.jsx(Cv, {});
                case "functionality":
                    return o.jsx(Pv, {});
                case "summary":
                    return o.jsx(Tv, {});
                case "library":
                    return o.jsx($v, {});
                case "gallery":
                    return o.jsx(Ov, {});
                default:
                    return o.jsx(Ou, {})
            }
        };
        return t ? o.jsx("div", {
            className: "h-full flex items-center justify-center",
            children: o.jsxs("div", {
                className: "w-full max-w-lg mx-auto text-center",
                children: [o.jsx(Ff, {
                    size: "lg",
                    text: "Loading Visual AI Builder..."
                }), o.jsx("p", {
                    className: "mt-6 text-gray-500",
                    children: "Preparing your design workspace..."
                })]
            })
        }) : o.jsx("div", {
            className: "h-full flex flex-col lg:flex-row gap-4 overflow-hidden",
            children: o.jsxs("div", {
                className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden",
                children: [o.jsx("div", {
                    className: `bg-white rounded-lg shadow p-4 overflow-y-auto ${n?"opacity-0":"opacity-100 animate-fadeIn"} transition-opacity duration-300`,
                    children: c()
                }), e.showPreview && o.jsx("div", {
                    className: "bg-white rounded-lg shadow-lg p-4 overflow-hidden animate-scaleIn",
                    children: o.jsx(Ev, {})
                })]
            })
        })
    },
    Uv = () => {
        const {
            loading: e,
            loadingDetails: t
        } = rt(), {
            state: r
        } = Me(), {
            isLoading: n
        } = r, [s, i] = k.useState(!1), [a, c] = k.useState(0), [l, u] = k.useState("Timed out - please try refreshing"), d = () => {
            window.location.reload()
        };
        return k.useEffect(() => {
            let f;
            return e || n ? s ? s && (f = window.setTimeout(() => {
                const h = Math.floor((Date.now() - a) / 1e3);
                u(`Timed out (${h}s) - please try refreshing`)
            }, 1e3)) : f = window.setTimeout(() => {
                i(!0), c(Date.now())
            }, 5e3) : i(!1), () => {
                clearTimeout(f)
            }
        }, [e, n, s, a]), !e && !n ? null : o.jsx("div", {
            className: "fixed top-0 left-0 right-0 bg-yellow-100 text-yellow-800 p-2 text-xs z-50",
            children: o.jsxs("div", {
                className: "flex justify-between items-center",
                children: [o.jsxs("div", {
                    className: "flex items-center",
                    children: [e ? o.jsx(fs, {
                        className: "w-4 h-4 mr-1 animate-spin"
                    }) : o.jsx(Jh, {
                        className: "w-4 h-4 mr-1"
                    }), o.jsx("span", {
                        className: "font-bold",
                        children: "Loading:"
                    }), e && o.jsx("span", {
                        className: "ml-1",
                        children: "Auth"
                    }), n && o.jsx("span", {
                        className: "ml-1",
                        children: "Data"
                    }), e && o.jsxs("span", {
                        className: "ml-2 text-gray-700",
                        children: ["(", t || "checking session", ")"]
                    }), s && o.jsx("span", {
                        className: "ml-2 text-red-600 font-bold",
                        children: l
                    })]
                }), s && o.jsxs("button", {
                    onClick: d,
                    className: "p-1 rounded bg-yellow-200 hover:bg-yellow-300 flex items-center gap-1",
                    title: "Force reload page",
                    type: "button",
                    children: [o.jsx(fs, {
                        className: "h-3 w-3"
                    }), o.jsx("span", {
                        children: "Reload"
                    })]
                })]
            })
        })
    },
    Iv = () => {
        const {
            user: e,
            userProfile: t,
            loading: r,
            loadingDetails: n
        } = rt(), [s, i] = k.useState(null), [a, c] = k.useState(!1), l = () => {
            window.location.reload()
        };
        return k.useEffect(() => {
            let u;
            return r ? u = window.setTimeout(() => {
                i("Loading timeout"), c(!0)
            }, 1e4) : (u && clearTimeout(u), e && !t && !r ? (i("User authenticated but profile data missing"), c(!0)) : i(null)), () => {
                u && clearTimeout(u)
            }
        }, [e, t, r, n]), !a || !s ? null : o.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 bg-red-600 text-white p-2 text-sm z-50",
            children: o.jsxs("div", {
                className: "container mx-auto flex items-center justify-between",
                children: [o.jsxs("div", {
                    children: [o.jsx("strong", {
                        children: "Session Issue Detected:"
                    }), " ", s]
                }), o.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [o.jsxs("button", {
                        onClick: l,
                        className: "px-3 py-1.5 bg-white text-red-600 rounded font-medium flex items-center",
                        type: "button",
                        children: [o.jsx(fs, {
                            className: "h-4 w-4 mr-1"
                        }), "Refresh Page"]
                    }), o.jsx("button", {
                        onClick: () => c(!1),
                        className: "px-3 py-1.5 bg-red-700 text-white rounded font-medium",
                        type: "button",
                        children: "Dismiss"
                    })]
                })]
            })
        })
    };

function Mv() {
    return o.jsx(sv, {
        children: o.jsxs(kv, {
            children: [o.jsx(Nv, {
                children: o.jsx(Dv, {})
            }), o.jsx(nv, {
                position: "top-right"
            }), o.jsx(Uv, {}), o.jsx(Iv, {})]
        })
    })
}
Kh(document.getElementById("root")).render(o.jsx(k.StrictMode, {
    children: o.jsx(Mv, {})
}));
export {
    zv as g
};