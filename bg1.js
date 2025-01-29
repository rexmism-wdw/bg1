var ig = Object.defineProperty;
var xh = c => {
    throw TypeError(c)
};
var ug = (c, s, r) => s in c ? ig(c, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : c[s] = r;
var le = (c, s, r) => ug(c, typeof s != "symbol" ? s + "" : s, r),
    bh = (c, s, r) => s.has(c) || xh("Cannot " + r);
var Nu = (c, s, r) => (bh(c, s, "read from private field"), r ? r.call(c) : s.get(c)),
    $s = (c, s, r) => s.has(c) ? xh("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(c) : s.set(c, r),
    Is = (c, s, r, o) => (bh(c, s, "write to private field"), o ? o.call(c, r) : s.set(c, r), r);
var Ws = {
        exports: {}
    },
    ai = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sh;

function cg() {
    if (Sh) return ai;
    Sh = 1;
    var c = Symbol.for("react.transitional.element"),
        s = Symbol.for("react.fragment");

    function r(o, d, m) {
        var p = null;
        if (m !== void 0 && (p = "" + m), d.key !== void 0 && (p = "" + d.key), "key" in d) {
            m = {};
            for (var g in d) g !== "key" && (m[g] = d[g])
        } else m = d;
        return d = m.ref, {
            $$typeof: c,
            type: o,
            key: p,
            ref: d !== void 0 ? d : null,
            props: m
        }
    }
    return ai.Fragment = s, ai.jsx = r, ai.jsxs = r, ai
}
var jh;

function sg() {
    return jh || (jh = 1, Ws.exports = cg()), Ws.exports
}
var u = sg(),
    Fs = {
        exports: {}
    },
    ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eh;

function rg() {
    if (Eh) return ie;
    Eh = 1;
    var c = Symbol.for("react.transitional.element"),
        s = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        d = Symbol.for("react.profiler"),
        m = Symbol.for("react.consumer"),
        p = Symbol.for("react.context"),
        g = Symbol.for("react.forward_ref"),
        v = Symbol.for("react.suspense"),
        y = Symbol.for("react.memo"),
        S = Symbol.for("react.lazy"),
        D = Symbol.iterator;

    function w(j) {
        return j === null || typeof j != "object" ? null : (j = D && j[D] || j["@@iterator"], typeof j == "function" ? j : null)
    }
    var G = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        k = Object.assign,
        q = {};

    function K(j, B, F) {
        this.props = j, this.context = B, this.refs = q, this.updater = F || G
    }
    K.prototype.isReactComponent = {}, K.prototype.setState = function(j, B) {
        if (typeof j != "object" && typeof j != "function" && j != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, B, "setState")
    }, K.prototype.forceUpdate = function(j) {
        this.updater.enqueueForceUpdate(this, j, "forceUpdate")
    };

    function ue() {}
    ue.prototype = K.prototype;

    function P(j, B, F) {
        this.props = j, this.context = B, this.refs = q, this.updater = F || G
    }
    var ee = P.prototype = new ue;
    ee.constructor = P, k(ee, K.prototype), ee.isPureReactComponent = !0;
    var Ue = Array.isArray,
        _ = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        z = Object.prototype.hasOwnProperty;

    function Q(j, B, F, I, X, he) {
        return F = he.ref, {
            $$typeof: c,
            type: j,
            key: B,
            ref: F !== void 0 ? F : null,
            props: he
        }
    }

    function L(j, B) {
        return Q(j.type, B, void 0, void 0, void 0, j.props)
    }

    function H(j) {
        return typeof j == "object" && j !== null && j.$$typeof === c
    }

    function Z(j) {
        var B = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + j.replace(/[=:]/g, function(F) {
            return B[F]
        })
    }
    var re = /\/+/g;

    function st(j, B) {
        return typeof j == "object" && j !== null && j.key != null ? Z("" + j.key) : B.toString(36)
    }

    function et() {}

    function mt(j) {
        switch (j.status) {
            case "fulfilled":
                return j.value;
            case "rejected":
                throw j.reason;
            default:
                switch (typeof j.status == "string" ? j.then(et, et) : (j.status = "pending", j.then(function(B) {
                        j.status === "pending" && (j.status = "fulfilled", j.value = B)
                    }, function(B) {
                        j.status === "pending" && (j.status = "rejected", j.reason = B)
                    })), j.status) {
                    case "fulfilled":
                        return j.value;
                    case "rejected":
                        throw j.reason
                }
        }
        throw j
    }

    function rt(j, B, F, I, X) {
        var he = typeof j;
        (he === "undefined" || he === "boolean") && (j = null);
        var ce = !1;
        if (j === null) ce = !0;
        else switch (he) {
            case "bigint":
            case "string":
            case "number":
                ce = !0;
                break;
            case "object":
                switch (j.$$typeof) {
                    case c:
                    case s:
                        ce = !0;
                        break;
                    case S:
                        return ce = j._init, rt(ce(j._payload), B, F, I, X)
                }
        }
        if (ce) return X = X(j), ce = I === "" ? "." + st(j, 0) : I, Ue(X) ? (F = "", ce != null && (F = ce.replace(re, "$&/") + "/"), rt(X, B, F, "", function(He) {
            return He
        })) : X != null && (H(X) && (X = L(X, F + (X.key == null || j && j.key === X.key ? "" : ("" + X.key).replace(re, "$&/") + "/") + ce)), B.push(X)), 1;
        ce = 0;
        var it = I === "" ? "." : I + ":";
        if (Ue(j))
            for (var ve = 0; ve < j.length; ve++) I = j[ve], he = it + st(I, ve), ce += rt(I, B, F, he, X);
        else if (ve = w(j), typeof ve == "function")
            for (j = ve.call(j), ve = 0; !(I = j.next()).done;) I = I.value, he = it + st(I, ve++), ce += rt(I, B, F, he, X);
        else if (he === "object") {
            if (typeof j.then == "function") return rt(mt(j), B, F, I, X);
            throw B = String(j), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ce
    }

    function Y(j, B, F) {
        if (j == null) return j;
        var I = [],
            X = 0;
        return rt(j, I, "", "", function(he) {
            return B.call(F, he, X++)
        }), I
    }

    function ae(j) {
        if (j._status === -1) {
            var B = j._result;
            B = B(), B.then(function(F) {
                (j._status === 0 || j._status === -1) && (j._status = 1, j._result = F)
            }, function(F) {
                (j._status === 0 || j._status === -1) && (j._status = 2, j._result = F)
            }), j._status === -1 && (j._status = 0, j._result = B)
        }
        if (j._status === 1) return j._result.default;
        throw j._result
    }
    var te = typeof reportError == "function" ? reportError : function(j) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
                error: j
            });
            if (!window.dispatchEvent(B)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", j);
            return
        }
        console.error(j)
    };

    function je() {}
    return ie.Children = {
        map: Y,
        forEach: function(j, B, F) {
            Y(j, function() {
                B.apply(this, arguments)
            }, F)
        },
        count: function(j) {
            var B = 0;
            return Y(j, function() {
                B++
            }), B
        },
        toArray: function(j) {
            return Y(j, function(B) {
                return B
            }) || []
        },
        only: function(j) {
            if (!H(j)) throw Error("React.Children.only expected to receive a single React element child.");
            return j
        }
    }, ie.Component = K, ie.Fragment = r, ie.Profiler = d, ie.PureComponent = P, ie.StrictMode = o, ie.Suspense = v, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, ie.act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    }, ie.cache = function(j) {
        return function() {
            return j.apply(null, arguments)
        }
    }, ie.cloneElement = function(j, B, F) {
        if (j == null) throw Error("The argument must be a React element, but you passed " + j + ".");
        var I = k({}, j.props),
            X = j.key,
            he = void 0;
        if (B != null)
            for (ce in B.ref !== void 0 && (he = void 0), B.key !== void 0 && (X = "" + B.key), B) !z.call(B, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && B.ref === void 0 || (I[ce] = B[ce]);
        var ce = arguments.length - 2;
        if (ce === 1) I.children = F;
        else if (1 < ce) {
            for (var it = Array(ce), ve = 0; ve < ce; ve++) it[ve] = arguments[ve + 2];
            I.children = it
        }
        return Q(j.type, X, void 0, void 0, he, I)
    }, ie.createContext = function(j) {
        return j = {
            $$typeof: p,
            _currentValue: j,
            _currentValue2: j,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, j.Provider = j, j.Consumer = {
            $$typeof: m,
            _context: j
        }, j
    }, ie.createElement = function(j, B, F) {
        var I, X = {},
            he = null;
        if (B != null)
            for (I in B.key !== void 0 && (he = "" + B.key), B) z.call(B, I) && I !== "key" && I !== "__self" && I !== "__source" && (X[I] = B[I]);
        var ce = arguments.length - 2;
        if (ce === 1) X.children = F;
        else if (1 < ce) {
            for (var it = Array(ce), ve = 0; ve < ce; ve++) it[ve] = arguments[ve + 2];
            X.children = it
        }
        if (j && j.defaultProps)
            for (I in ce = j.defaultProps, ce) X[I] === void 0 && (X[I] = ce[I]);
        return Q(j, he, void 0, void 0, null, X)
    }, ie.createRef = function() {
        return {
            current: null
        }
    }, ie.forwardRef = function(j) {
        return {
            $$typeof: g,
            render: j
        }
    }, ie.isValidElement = H, ie.lazy = function(j) {
        return {
            $$typeof: S,
            _payload: {
                _status: -1,
                _result: j
            },
            _init: ae
        }
    }, ie.memo = function(j, B) {
        return {
            $$typeof: y,
            type: j,
            compare: B === void 0 ? null : B
        }
    }, ie.startTransition = function(j) {
        var B = _.T,
            F = {};
        _.T = F;
        try {
            var I = j(),
                X = _.S;
            X !== null && X(F, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(je, te)
        } catch (he) {
            te(he)
        } finally {
            _.T = B
        }
    }, ie.unstable_useCacheRefresh = function() {
        return _.H.useCacheRefresh()
    }, ie.use = function(j) {
        return _.H.use(j)
    }, ie.useActionState = function(j, B, F) {
        return _.H.useActionState(j, B, F)
    }, ie.useCallback = function(j, B) {
        return _.H.useCallback(j, B)
    }, ie.useContext = function(j) {
        return _.H.useContext(j)
    }, ie.useDebugValue = function() {}, ie.useDeferredValue = function(j, B) {
        return _.H.useDeferredValue(j, B)
    }, ie.useEffect = function(j, B) {
        return _.H.useEffect(j, B)
    }, ie.useId = function() {
        return _.H.useId()
    }, ie.useImperativeHandle = function(j, B, F) {
        return _.H.useImperativeHandle(j, B, F)
    }, ie.useInsertionEffect = function(j, B) {
        return _.H.useInsertionEffect(j, B)
    }, ie.useLayoutEffect = function(j, B) {
        return _.H.useLayoutEffect(j, B)
    }, ie.useMemo = function(j, B) {
        return _.H.useMemo(j, B)
    }, ie.useOptimistic = function(j, B) {
        return _.H.useOptimistic(j, B)
    }, ie.useReducer = function(j, B, F) {
        return _.H.useReducer(j, B, F)
    }, ie.useRef = function(j) {
        return _.H.useRef(j)
    }, ie.useState = function(j) {
        return _.H.useState(j)
    }, ie.useSyncExternalStore = function(j, B, F) {
        return _.H.useSyncExternalStore(j, B, F)
    }, ie.useTransition = function() {
        return _.H.useTransition()
    }, ie.version = "19.0.0", ie
}
var Th;

function vr() {
    return Th || (Th = 1, Fs.exports = rg()), Fs.exports
}
var x = vr(),
    Ps = {
        exports: {}
    },
    ii = {},
    er = {
        exports: {}
    },
    tr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;

function og() {
    return Ah || (Ah = 1, function(c) {
        function s(Y, ae) {
            var te = Y.length;
            Y.push(ae);
            e: for (; 0 < te;) {
                var je = te - 1 >>> 1,
                    j = Y[je];
                if (0 < d(j, ae)) Y[je] = ae, Y[te] = j, te = je;
                else break e
            }
        }

        function r(Y) {
            return Y.length === 0 ? null : Y[0]
        }

        function o(Y) {
            if (Y.length === 0) return null;
            var ae = Y[0],
                te = Y.pop();
            if (te !== ae) {
                Y[0] = te;
                e: for (var je = 0, j = Y.length, B = j >>> 1; je < B;) {
                    var F = 2 * (je + 1) - 1,
                        I = Y[F],
                        X = F + 1,
                        he = Y[X];
                    if (0 > d(I, te)) X < j && 0 > d(he, I) ? (Y[je] = he, Y[X] = te, je = X) : (Y[je] = I, Y[F] = te, je = F);
                    else if (X < j && 0 > d(he, te)) Y[je] = he, Y[X] = te, je = X;
                    else break e
                }
            }
            return ae
        }

        function d(Y, ae) {
            var te = Y.sortIndex - ae.sortIndex;
            return te !== 0 ? te : Y.id - ae.id
        }
        if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var m = performance;
            c.unstable_now = function() {
                return m.now()
            }
        } else {
            var p = Date,
                g = p.now();
            c.unstable_now = function() {
                return p.now() - g
            }
        }
        var v = [],
            y = [],
            S = 1,
            D = null,
            w = 3,
            G = !1,
            k = !1,
            q = !1,
            K = typeof setTimeout == "function" ? setTimeout : null,
            ue = typeof clearTimeout == "function" ? clearTimeout : null,
            P = typeof setImmediate < "u" ? setImmediate : null;

        function ee(Y) {
            for (var ae = r(y); ae !== null;) {
                if (ae.callback === null) o(y);
                else if (ae.startTime <= Y) o(y), ae.sortIndex = ae.expirationTime, s(v, ae);
                else break;
                ae = r(y)
            }
        }

        function Ue(Y) {
            if (q = !1, ee(Y), !k)
                if (r(v) !== null) k = !0, mt();
                else {
                    var ae = r(y);
                    ae !== null && rt(Ue, ae.startTime - Y)
                }
        }
        var _ = !1,
            z = -1,
            Q = 5,
            L = -1;

        function H() {
            return !(c.unstable_now() - L < Q)
        }

        function Z() {
            if (_) {
                var Y = c.unstable_now();
                L = Y;
                var ae = !0;
                try {
                    e: {
                        k = !1,
                        q && (q = !1, ue(z), z = -1),
                        G = !0;
                        var te = w;
                        try {
                            t: {
                                for (ee(Y), D = r(v); D !== null && !(D.expirationTime > Y && H());) {
                                    var je = D.callback;
                                    if (typeof je == "function") {
                                        D.callback = null, w = D.priorityLevel;
                                        var j = je(D.expirationTime <= Y);
                                        if (Y = c.unstable_now(), typeof j == "function") {
                                            D.callback = j, ee(Y), ae = !0;
                                            break t
                                        }
                                        D === r(v) && o(v), ee(Y)
                                    } else o(v);
                                    D = r(v)
                                }
                                if (D !== null) ae = !0;
                                else {
                                    var B = r(y);
                                    B !== null && rt(Ue, B.startTime - Y), ae = !1
                                }
                            }
                            break e
                        }
                        finally {
                            D = null, w = te, G = !1
                        }
                        ae = void 0
                    }
                }
                finally {
                    ae ? re() : _ = !1
                }
            }
        }
        var re;
        if (typeof P == "function") re = function() {
            P(Z)
        };
        else if (typeof MessageChannel < "u") {
            var st = new MessageChannel,
                et = st.port2;
            st.port1.onmessage = Z, re = function() {
                et.postMessage(null)
            }
        } else re = function() {
            K(Z, 0)
        };

        function mt() {
            _ || (_ = !0, re())
        }

        function rt(Y, ae) {
            z = K(function() {
                Y(c.unstable_now())
            }, ae)
        }
        c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(Y) {
            Y.callback = null
        }, c.unstable_continueExecution = function() {
            k || G || (k = !0, mt())
        }, c.unstable_forceFrameRate = function(Y) {
            0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < Y ? Math.floor(1e3 / Y) : 5
        }, c.unstable_getCurrentPriorityLevel = function() {
            return w
        }, c.unstable_getFirstCallbackNode = function() {
            return r(v)
        }, c.unstable_next = function(Y) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var ae = 3;
                    break;
                default:
                    ae = w
            }
            var te = w;
            w = ae;
            try {
                return Y()
            } finally {
                w = te
            }
        }, c.unstable_pauseExecution = function() {}, c.unstable_requestPaint = function() {}, c.unstable_runWithPriority = function(Y, ae) {
            switch (Y) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    Y = 3
            }
            var te = w;
            w = Y;
            try {
                return ae()
            } finally {
                w = te
            }
        }, c.unstable_scheduleCallback = function(Y, ae, te) {
            var je = c.unstable_now();
            switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? je + te : je) : te = je, Y) {
                case 1:
                    var j = -1;
                    break;
                case 2:
                    j = 250;
                    break;
                case 5:
                    j = 1073741823;
                    break;
                case 4:
                    j = 1e4;
                    break;
                default:
                    j = 5e3
            }
            return j = te + j, Y = {
                id: S++,
                callback: ae,
                priorityLevel: Y,
                startTime: te,
                expirationTime: j,
                sortIndex: -1
            }, te > je ? (Y.sortIndex = te, s(y, Y), r(v) === null && Y === r(y) && (q ? (ue(z), z = -1) : q = !0, rt(Ue, te - je))) : (Y.sortIndex = j, s(v, Y), k || G || (k = !0, mt())), Y
        }, c.unstable_shouldYield = H, c.unstable_wrapCallback = function(Y) {
            var ae = w;
            return function() {
                var te = w;
                w = ae;
                try {
                    return Y.apply(this, arguments)
                } finally {
                    w = te
                }
            }
        }
    }(tr)), tr
}
var Dh;

function fg() {
    return Dh || (Dh = 1, er.exports = og()), er.exports
}
var lr = {
        exports: {}
    },
    nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;

function dg() {
    if (Nh) return nt;
    Nh = 1;
    var c = vr();

    function s(v) {
        var y = "https://react.dev/errors/" + v;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var S = 2; S < arguments.length; S++) y += "&args[]=" + encodeURIComponent(arguments[S])
        }
        return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function r() {}
    var o = {
            d: {
                f: r,
                r: function() {
                    throw Error(s(522))
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r
            },
            p: 0,
            findDOMNode: null
        },
        d = Symbol.for("react.portal");

    function m(v, y, S) {
        var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: d,
            key: D == null ? null : "" + D,
            children: v,
            containerInfo: y,
            implementation: S
        }
    }
    var p = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function g(v, y) {
        if (v === "font") return "";
        if (typeof y == "string") return y === "use-credentials" ? y : ""
    }
    return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, nt.createPortal = function(v, y) {
        var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(s(299));
        return m(v, y, null, S)
    }, nt.flushSync = function(v) {
        var y = p.T,
            S = o.p;
        try {
            if (p.T = null, o.p = 2, v) return v()
        } finally {
            p.T = y, o.p = S, o.d.f()
        }
    }, nt.preconnect = function(v, y) {
        typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(v, y))
    }, nt.prefetchDNS = function(v) {
        typeof v == "string" && o.d.D(v)
    }, nt.preinit = function(v, y) {
        if (typeof v == "string" && y && typeof y.as == "string") {
            var S = y.as,
                D = g(S, y.crossOrigin),
                w = typeof y.integrity == "string" ? y.integrity : void 0,
                G = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            S === "style" ? o.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
                crossOrigin: D,
                integrity: w,
                fetchPriority: G
            }) : S === "script" && o.d.X(v, {
                crossOrigin: D,
                integrity: w,
                fetchPriority: G,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
        }
    }, nt.preinitModule = function(v, y) {
        if (typeof v == "string")
            if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var S = g(y.as, y.crossOrigin);
                    o.d.M(v, {
                        crossOrigin: S,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    })
                }
            } else y == null && o.d.M(v)
    }, nt.preload = function(v, y) {
        if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var S = y.as,
                D = g(S, y.crossOrigin);
            o.d.L(v, S, {
                crossOrigin: D,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                type: typeof y.type == "string" ? y.type : void 0,
                fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                media: typeof y.media == "string" ? y.media : void 0
            })
        }
    }, nt.preloadModule = function(v, y) {
        if (typeof v == "string")
            if (y) {
                var S = g(y.as, y.crossOrigin);
                o.d.m(v, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: S,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                })
            } else o.d.m(v)
    }, nt.requestFormReset = function(v) {
        o.d.r(v)
    }, nt.unstable_batchedUpdates = function(v, y) {
        return v(y)
    }, nt.useFormState = function(v, y, S) {
        return p.H.useFormState(v, y, S)
    }, nt.useFormStatus = function() {
        return p.H.useHostTransitionStatus()
    }, nt.version = "19.0.0", nt
}
var Mh;

function hg() {
    if (Mh) return lr.exports;
    Mh = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (s) {
            console.error(s)
        }
    }
    return c(), lr.exports = dg(), lr.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oh;

function mg() {
    if (Oh) return ii;
    Oh = 1;
    var c = fg(),
        s = vr(),
        r = hg();

    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function d(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    var m = Symbol.for("react.element"),
        p = Symbol.for("react.transitional.element"),
        g = Symbol.for("react.portal"),
        v = Symbol.for("react.fragment"),
        y = Symbol.for("react.strict_mode"),
        S = Symbol.for("react.profiler"),
        D = Symbol.for("react.provider"),
        w = Symbol.for("react.consumer"),
        G = Symbol.for("react.context"),
        k = Symbol.for("react.forward_ref"),
        q = Symbol.for("react.suspense"),
        K = Symbol.for("react.suspense_list"),
        ue = Symbol.for("react.memo"),
        P = Symbol.for("react.lazy"),
        ee = Symbol.for("react.offscreen"),
        Ue = Symbol.for("react.memo_cache_sentinel"),
        _ = Symbol.iterator;

    function z(e) {
        return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var Q = Symbol.for("react.client.reference");

    function L(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === Q ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case v:
                return "Fragment";
            case g:
                return "Portal";
            case S:
                return "Profiler";
            case y:
                return "StrictMode";
            case q:
                return "Suspense";
            case K:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case G:
                return (e.displayName || "Context") + ".Provider";
            case w:
                return (e._context.displayName || "Context") + ".Consumer";
            case k:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case ue:
                return t = e.displayName || null, t !== null ? t : L(e.type) || "Memo";
            case P:
                t = e._payload, e = e._init;
                try {
                    return L(e(t))
                } catch {}
        }
        return null
    }
    var H = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Z = Object.assign,
        re, st;

    function et(e) {
        if (re === void 0) try {
            throw Error()
        } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            re = t && t[1] || "", st = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + re + e + st
    }
    var mt = !1;

    function rt(e, t) {
        if (!e || mt) return "";
        mt = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var n = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var U = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(U.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(U, [])
                                } catch (O) {
                                    var M = O
                                }
                                Reflect.construct(e, [], U)
                            } else {
                                try {
                                    U.call()
                                } catch (O) {
                                    M = O
                                }
                                e.call(U.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (O) {
                                M = O
                            }(U = e()) && typeof U.catch == "function" && U.catch(function() {})
                        }
                    } catch (O) {
                        if (O && M && typeof O.stack == "string") return [O.stack, M.stack]
                    }
                    return [null, null]
                }
            };
            n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = n.DetermineComponentFrameRoot(),
                f = i[0],
                h = i[1];
            if (f && h) {
                var b = f.split(`
`),
                    T = h.split(`
`);
                for (a = n = 0; n < b.length && !b[n].includes("DetermineComponentFrameRoot");) n++;
                for (; a < T.length && !T[a].includes("DetermineComponentFrameRoot");) a++;
                if (n === b.length || a === T.length)
                    for (n = b.length - 1, a = T.length - 1; 1 <= n && 0 <= a && b[n] !== T[a];) a--;
                for (; 1 <= n && 0 <= a; n--, a--)
                    if (b[n] !== T[a]) {
                        if (n !== 1 || a !== 1)
                            do
                                if (n--, a--, 0 > a || b[n] !== T[a]) {
                                    var R = `
` + b[n].replace(" at new ", " at ");
                                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R
                                } while (1 <= n && 0 <= a);
                        break
                    }
            }
        } finally {
            mt = !1, Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? et(l) : ""
    }

    function Y(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return et(e.type);
            case 16:
                return et("Lazy");
            case 13:
                return et("Suspense");
            case 19:
                return et("SuspenseList");
            case 0:
            case 15:
                return e = rt(e.type, !1), e;
            case 11:
                return e = rt(e.type.render, !1), e;
            case 1:
                return e = rt(e.type, !0), e;
            default:
                return ""
        }
    }

    function ae(e) {
        try {
            var t = "";
            do t += Y(e), e = e.return; while (e);
            return t
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }

    function te(e) {
        var t = e,
            l = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (l = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? l : null
    }

    function je(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function j(e) {
        if (te(e) !== e) throw Error(o(188))
    }

    function B(e) {
        var t = e.alternate;
        if (!t) {
            if (t = te(e), t === null) throw Error(o(188));
            return t !== e ? null : e
        }
        for (var l = e, n = t;;) {
            var a = l.return;
            if (a === null) break;
            var i = a.alternate;
            if (i === null) {
                if (n = a.return, n !== null) {
                    l = n;
                    continue
                }
                break
            }
            if (a.child === i.child) {
                for (i = a.child; i;) {
                    if (i === l) return j(a), e;
                    if (i === n) return j(a), t;
                    i = i.sibling
                }
                throw Error(o(188))
            }
            if (l.return !== n.return) l = a, n = i;
            else {
                for (var f = !1, h = a.child; h;) {
                    if (h === l) {
                        f = !0, l = a, n = i;
                        break
                    }
                    if (h === n) {
                        f = !0, n = a, l = i;
                        break
                    }
                    h = h.sibling
                }
                if (!f) {
                    for (h = i.child; h;) {
                        if (h === l) {
                            f = !0, l = i, n = a;
                            break
                        }
                        if (h === n) {
                            f = !0, n = i, l = a;
                            break
                        }
                        h = h.sibling
                    }
                    if (!f) throw Error(o(189))
                }
            }
            if (l.alternate !== n) throw Error(o(190))
        }
        if (l.tag !== 3) throw Error(o(188));
        return l.stateNode.current === l ? e : t
    }

    function F(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = F(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var I = Array.isArray,
        X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        he = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ce = [],
        it = -1;

    function ve(e) {
        return {
            current: e
        }
    }

    function He(e) {
        0 > it || (e.current = ce[it], ce[it] = null, it--)
    }

    function Me(e, t) {
        it++, ce[it] = e.current, e.current = t
    }
    var Xt = ve(null),
        ca = ve(null),
        pl = ve(null),
        hi = ve(null);

    function mi(e, t) {
        switch (Me(pl, t), Me(ca, e), Me(Xt, null), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) && (t = t.namespaceURI) ? Jd(t) : 0;
                break;
            default:
                if (e = e === 8 ? t.parentNode : t, t = e.tagName, e = e.namespaceURI) e = Jd(e), t = $d(e, t);
                else switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        He(Xt), Me(Xt, t)
    }

    function yn() {
        He(Xt), He(ca), He(pl)
    }

    function ku(e) {
        e.memoizedState !== null && Me(hi, e);
        var t = Xt.current,
            l = $d(t, e.type);
        t !== l && (Me(ca, e), Me(Xt, l))
    }

    function yi(e) {
        ca.current === e && (He(Xt), He(ca)), hi.current === e && (He(hi), Pa._currentValue = he)
    }
    var qu = Object.prototype.hasOwnProperty,
        Yu = c.unstable_scheduleCallback,
        Qu = c.unstable_cancelCallback,
        Bm = c.unstable_shouldYield,
        Gm = c.unstable_requestPaint,
        Vt = c.unstable_now,
        Hm = c.unstable_getCurrentPriorityLevel,
        Ur = c.unstable_ImmediatePriority,
        Lr = c.unstable_UserBlockingPriority,
        gi = c.unstable_NormalPriority,
        km = c.unstable_LowPriority,
        Br = c.unstable_IdlePriority,
        qm = c.log,
        Ym = c.unstable_setDisableYieldValue,
        sa = null,
        yt = null;

    function Qm(e) {
        if (yt && typeof yt.onCommitFiberRoot == "function") try {
            yt.onCommitFiberRoot(sa, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }

    function xl(e) {
        if (typeof qm == "function" && Ym(e), yt && typeof yt.setStrictMode == "function") try {
            yt.setStrictMode(sa, e)
        } catch {}
    }
    var gt = Math.clz32 ? Math.clz32 : Zm,
        Xm = Math.log,
        Vm = Math.LN2;

    function Zm(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Xm(e) / Vm | 0) | 0
    }
    var vi = 128,
        pi = 4194304;

    function Ql(e) {
        var t = e & 42;
        if (t !== 0) return t;
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
                return 64;
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
                return e & 4194176;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function xi(e, t) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var n = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            f = e.warmLanes;
        e = e.finishedLanes !== 0;
        var h = l & 134217727;
        return h !== 0 ? (l = h & ~a, l !== 0 ? n = Ql(l) : (i &= h, i !== 0 ? n = Ql(i) : e || (f = h & ~f, f !== 0 && (n = Ql(f))))) : (h = l & ~a, h !== 0 ? n = Ql(h) : i !== 0 ? n = Ql(i) : e || (f = l & ~f, f !== 0 && (n = Ql(f)))), n === 0 ? 0 : t !== 0 && t !== n && !(t & a) && (a = n & -n, f = t & -t, a >= f || a === 32 && (f & 4194176) !== 0) ? t : n
    }

    function ra(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function Km(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
                return t + 250;
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
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Gr() {
        var e = vi;
        return vi <<= 1, !(vi & 4194176) && (vi = 128), e
    }

    function Hr() {
        var e = pi;
        return pi <<= 1, !(pi & 62914560) && (pi = 4194304), e
    }

    function Xu(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e);
        return t
    }

    function oa(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Jm(e, t, l, n, a, i) {
        var f = e.pendingLanes;
        e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
        var h = e.entanglements,
            b = e.expirationTimes,
            T = e.hiddenUpdates;
        for (l = f & ~l; 0 < l;) {
            var R = 31 - gt(l),
                U = 1 << R;
            h[R] = 0, b[R] = -1;
            var M = T[R];
            if (M !== null)
                for (T[R] = null, R = 0; R < M.length; R++) {
                    var O = M[R];
                    O !== null && (O.lane &= -536870913)
                }
            l &= ~U
        }
        n !== 0 && kr(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t))
    }

    function kr(e, t, l) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var n = 31 - gt(t);
        e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194218
    }

    function qr(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l;) {
            var n = 31 - gt(l),
                a = 1 << n;
            a & t | e[n] & t && (e[n] |= t), l &= ~a
        }
    }

    function Yr(e) {
        return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2
    }

    function Qr() {
        var e = X.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : hh(e.type))
    }

    function $m(e, t) {
        var l = X.p;
        try {
            return X.p = e, t()
        } finally {
            X.p = l
        }
    }
    var bl = Math.random().toString(36).slice(2),
        tt = "__reactFiber$" + bl,
        ot = "__reactProps$" + bl,
        gn = "__reactContainer$" + bl,
        Vu = "__reactEvents$" + bl,
        Im = "__reactListeners$" + bl,
        Wm = "__reactHandles$" + bl,
        Xr = "__reactResources$" + bl,
        fa = "__reactMarker$" + bl;

    function Zu(e) {
        delete e[tt], delete e[ot], delete e[Vu], delete e[Im], delete e[Wm]
    }

    function Xl(e) {
        var t = e[tt];
        if (t) return t;
        for (var l = e.parentNode; l;) {
            if (t = l[gn] || l[tt]) {
                if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
                    for (e = Fd(e); e !== null;) {
                        if (l = e[tt]) return l;
                        e = Fd(e)
                    }
                return t
            }
            e = l, l = e.parentNode
        }
        return null
    }

    function vn(e) {
        if (e = e[tt] || e[gn]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function da(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(o(33))
    }

    function pn(e) {
        var t = e[Xr];
        return t || (t = e[Xr] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Ve(e) {
        e[fa] = !0
    }
    var Vr = new Set,
        Zr = {};

    function Vl(e, t) {
        xn(e, t), xn(e + "Capture", t)
    }

    function xn(e, t) {
        for (Zr[e] = t, e = 0; e < t.length; e++) Vr.add(t[e])
    }
    var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Fm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Kr = {},
        Jr = {};

    function Pm(e) {
        return qu.call(Jr, e) ? !0 : qu.call(Kr, e) ? !1 : Fm.test(e) ? Jr[e] = !0 : (Kr[e] = !0, !1)
    }

    function bi(e, t, l) {
        if (Pm(t))
            if (l === null) e.removeAttribute(t);
            else {
                switch (typeof l) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var n = t.toLowerCase().slice(0, 5);
                        if (n !== "data-" && n !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + l)
            }
    }

    function Si(e, t, l) {
        if (l === null) e.removeAttribute(t);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + l)
        }
    }

    function Pt(e, t, l, n) {
        if (n === null) e.removeAttribute(l);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(l);
                    return
            }
            e.setAttributeNS(t, l, "" + n)
        }
    }

    function Tt(e) {
        switch (typeof e) {
            case "bigint":
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

    function $r(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function e0(e) {
        var t = $r(e) ? "checked" : "value",
            l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            n = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var a = l.get,
                i = l.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(f) {
                    n = "" + f, i.call(this, f)
                }
            }), Object.defineProperty(e, t, {
                enumerable: l.enumerable
            }), {
                getValue: function() {
                    return n
                },
                setValue: function(f) {
                    n = "" + f
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function ji(e) {
        e._valueTracker || (e._valueTracker = e0(e))
    }

    function Ir(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var l = t.getValue(),
            n = "";
        return e && (n = $r(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1
    }

    function Ei(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var t0 = /[\n"\\]/g;

    function At(e) {
        return e.replace(t0, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Ku(e, t, l, n, a, i, f, h) {
        e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Tt(t)) : e.value !== "" + Tt(t) && (e.value = "" + Tt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Ju(e, f, Tt(t)) : l != null ? Ju(e, f, Tt(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + Tt(h) : e.removeAttribute("name")
    }

    function Wr(e, t, l, n, a, i, f, h) {
        if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) return;
            l = l != null ? "" + Tt(l) : "", t = t != null ? "" + Tt(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = h ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f)
    }

    function Ju(e, t, l) {
        t === "number" && Ei(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }

    function bn(e, t, l, n) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < l.length; a++) t["$" + l[a]] = !0;
            for (l = 0; l < e.length; l++) a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + Tt(l), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === l) {
                    e[a].selected = !0, n && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Fr(e, t, l) {
        if (t != null && (t = "" + Tt(t), t !== e.value && (e.value = t), l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + Tt(l) : ""
    }

    function Pr(e, t, l, n) {
        if (t == null) {
            if (n != null) {
                if (l != null) throw Error(o(92));
                if (I(n)) {
                    if (1 < n.length) throw Error(o(93));
                    n = n[0]
                }
                l = n
            }
            l == null && (l = ""), t = l
        }
        l = Tt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n)
    }

    function Sn(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var l0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function eo(e, t, l) {
        var n = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || l0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }

    function to(e, t, l) {
        if (t != null && typeof t != "object") throw Error(o(62));
        if (e = e.style, l != null) {
            for (var n in l) !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
            for (var a in t) n = t[a], t.hasOwnProperty(a) && l[a] !== n && eo(e, a, n)
        } else
            for (var i in t) t.hasOwnProperty(i) && eo(e, i, t[i])
    }

    function $u(e) {
        if (e.indexOf("-") === -1) return !1;
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
    var n0 = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        a0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Ti(e) {
        return a0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Iu = null;

    function Wu(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var jn = null,
        En = null;

    function lo(e) {
        var t = vn(e);
        if (t && (e = t.stateNode)) {
            var l = e[ot] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (Ku(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                        for (l = e; l.parentNode;) l = l.parentNode;
                        for (l = l.querySelectorAll('input[name="' + At("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                            var n = l[t];
                            if (n !== e && n.form === e.form) {
                                var a = n[ot] || null;
                                if (!a) throw Error(o(90));
                                Ku(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                            }
                        }
                        for (t = 0; t < l.length; t++) n = l[t], n.form === e.form && Ir(n)
                    }
                    break e;
                case "textarea":
                    Fr(e, l.value, l.defaultValue);
                    break e;
                case "select":
                    t = l.value, t != null && bn(e, !!l.multiple, t, !1)
            }
        }
    }
    var Fu = !1;

    function no(e, t, l) {
        if (Fu) return e(t, l);
        Fu = !0;
        try {
            var n = e(t);
            return n
        } finally {
            if (Fu = !1, (jn !== null || En !== null) && (cu(), jn && (t = jn, e = En, En = jn = null, lo(t), e)))
                for (t = 0; t < e.length; t++) lo(e[t])
        }
    }

    function ha(e, t) {
        var l = e.stateNode;
        if (l === null) return null;
        var n = l[ot] || null;
        if (n === null) return null;
        l = n[t];
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
        if (l && typeof l != "function") throw Error(o(231, t, typeof l));
        return l
    }
    var Pu = !1;
    if (Ft) try {
        var ma = {};
        Object.defineProperty(ma, "passive", {
            get: function() {
                Pu = !0
            }
        }), window.addEventListener("test", ma, ma), window.removeEventListener("test", ma, ma)
    } catch {
        Pu = !1
    }
    var Sl = null,
        ec = null,
        Ai = null;

    function ao() {
        if (Ai) return Ai;
        var e, t = ec,
            l = t.length,
            n, a = "value" in Sl ? Sl.value : Sl.textContent,
            i = a.length;
        for (e = 0; e < l && t[e] === a[e]; e++);
        var f = l - e;
        for (n = 1; n <= f && t[l - n] === a[i - n]; n++);
        return Ai = a.slice(e, 1 < n ? 1 - n : void 0)
    }

    function Di(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Ni() {
        return !0
    }

    function io() {
        return !1
    }

    function ft(e) {
        function t(l, n, a, i, f) {
            this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
            for (var h in e) e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(i) : i[h]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ni : io, this.isPropagationStopped = io, this
        }
        return Z(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ni)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ni)
            },
            persist: function() {},
            isPersistent: Ni
        }), t
    }
    var Zl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Mi = ft(Zl),
        ya = Z({}, Zl, {
            view: 0,
            detail: 0
        }),
        i0 = ft(ya),
        tc, lc, ga, Oi = Z({}, ya, {
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
            getModifierState: ac,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== ga && (ga && e.type === "mousemove" ? (tc = e.screenX - ga.screenX, lc = e.screenY - ga.screenY) : lc = tc = 0, ga = e), tc)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : lc
            }
        }),
        uo = ft(Oi),
        u0 = Z({}, Oi, {
            dataTransfer: 0
        }),
        c0 = ft(u0),
        s0 = Z({}, ya, {
            relatedTarget: 0
        }),
        nc = ft(s0),
        r0 = Z({}, Zl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        o0 = ft(r0),
        f0 = Z({}, Zl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        d0 = ft(f0),
        h0 = Z({}, Zl, {
            data: 0
        }),
        co = ft(h0),
        m0 = {
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
        y0 = {
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
        g0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function v0(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = g0[e]) ? !!t[e] : !1
    }

    function ac() {
        return v0
    }
    var p0 = Z({}, ya, {
            key: function(e) {
                if (e.key) {
                    var t = m0[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Di(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? y0[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ac,
            charCode: function(e) {
                return e.type === "keypress" ? Di(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        x0 = ft(p0),
        b0 = Z({}, Oi, {
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
        so = ft(b0),
        S0 = Z({}, ya, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ac
        }),
        j0 = ft(S0),
        E0 = Z({}, Zl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        T0 = ft(E0),
        A0 = Z({}, Oi, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        D0 = ft(A0),
        N0 = Z({}, Zl, {
            newState: 0,
            oldState: 0
        }),
        M0 = ft(N0),
        O0 = [9, 13, 27, 32],
        ic = Ft && "CompositionEvent" in window,
        va = null;
    Ft && "documentMode" in document && (va = document.documentMode);
    var _0 = Ft && "TextEvent" in window && !va,
        ro = Ft && (!ic || va && 8 < va && 11 >= va),
        oo = " ",
        fo = !1;

    function ho(e, t) {
        switch (e) {
            case "keyup":
                return O0.indexOf(t.keyCode) !== -1;
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

    function mo(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Tn = !1;

    function R0(e, t) {
        switch (e) {
            case "compositionend":
                return mo(t);
            case "keypress":
                return t.which !== 32 ? null : (fo = !0, oo);
            case "textInput":
                return e = t.data, e === oo && fo ? null : e;
            default:
                return null
        }
    }

    function w0(e, t) {
        if (Tn) return e === "compositionend" || !ic && ho(e, t) ? (e = ao(), Ai = ec = Sl = null, Tn = !1, e) : null;
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
                return ro && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var z0 = {
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

    function yo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!z0[e.type] : t === "textarea"
    }

    function go(e, t, l, n) {
        jn ? En ? En.push(n) : En = [n] : jn = n, t = du(t, "onChange"), 0 < t.length && (l = new Mi("onChange", "change", null, l, n), e.push({
            event: l,
            listeners: t
        }))
    }
    var pa = null,
        xa = null;

    function C0(e) {
        Qd(e, 0)
    }

    function _i(e) {
        var t = da(e);
        if (Ir(t)) return e
    }

    function vo(e, t) {
        if (e === "change") return t
    }
    var po = !1;
    if (Ft) {
        var uc;
        if (Ft) {
            var cc = "oninput" in document;
            if (!cc) {
                var xo = document.createElement("div");
                xo.setAttribute("oninput", "return;"), cc = typeof xo.oninput == "function"
            }
            uc = cc
        } else uc = !1;
        po = uc && (!document.documentMode || 9 < document.documentMode)
    }

    function bo() {
        pa && (pa.detachEvent("onpropertychange", So), xa = pa = null)
    }

    function So(e) {
        if (e.propertyName === "value" && _i(xa)) {
            var t = [];
            go(t, xa, e, Wu(e)), no(C0, t)
        }
    }

    function U0(e, t, l) {
        e === "focusin" ? (bo(), pa = t, xa = l, pa.attachEvent("onpropertychange", So)) : e === "focusout" && bo()
    }

    function L0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return _i(xa)
    }

    function B0(e, t) {
        if (e === "click") return _i(t)
    }

    function G0(e, t) {
        if (e === "input" || e === "change") return _i(t)
    }

    function H0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var vt = typeof Object.is == "function" ? Object.is : H0;

    function ba(e, t) {
        if (vt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var l = Object.keys(e),
            n = Object.keys(t);
        if (l.length !== n.length) return !1;
        for (n = 0; n < l.length; n++) {
            var a = l[n];
            if (!qu.call(t, a) || !vt(e[a], t[a])) return !1
        }
        return !0
    }

    function jo(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Eo(e, t) {
        var l = jo(e);
        e = 0;
        for (var n; l;) {
            if (l.nodeType === 3) {
                if (n = e + l.textContent.length, e <= t && n >= t) return {
                    node: l,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; l;) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = jo(l)
        }
    }

    function To(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? To(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Ao(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Ei(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l) e = t.contentWindow;
            else break;
            t = Ei(e.document)
        }
        return t
    }

    function sc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function k0(e, t) {
        var l = Ao(t);
        t = e.focusedElem;
        var n = e.selectionRange;
        if (l !== t && t && t.ownerDocument && To(t.ownerDocument.documentElement, t)) {
            if (n !== null && sc(t)) {
                if (e = n.start, l = n.end, l === void 0 && (l = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(l, t.value.length);
                else if (l = (e = t.ownerDocument || document) && e.defaultView || window, l.getSelection) {
                    l = l.getSelection();
                    var a = t.textContent.length,
                        i = Math.min(n.start, a);
                    n = n.end === void 0 ? i : Math.min(n.end, a), !l.extend && i > n && (a = n, n = i, i = a), a = Eo(t, i);
                    var f = Eo(t, n);
                    a && f && (l.rangeCount !== 1 || l.anchorNode !== a.node || l.anchorOffset !== a.offset || l.focusNode !== f.node || l.focusOffset !== f.offset) && (e = e.createRange(), e.setStart(a.node, a.offset), l.removeAllRanges(), i > n ? (l.addRange(e), l.extend(f.node, f.offset)) : (e.setEnd(f.node, f.offset), l.addRange(e)))
                }
            }
            for (e = [], l = t; l = l.parentNode;) l.nodeType === 1 && e.push({
                element: l,
                left: l.scrollLeft,
                top: l.scrollTop
            });
            for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) l = e[t], l.element.scrollLeft = l.left, l.element.scrollTop = l.top
        }
    }
    var q0 = Ft && "documentMode" in document && 11 >= document.documentMode,
        An = null,
        rc = null,
        Sa = null,
        oc = !1;

    function Do(e, t, l) {
        var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        oc || An == null || An !== Ei(n) || (n = An, "selectionStart" in n && sc(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }), Sa && ba(Sa, n) || (Sa = n, n = du(rc, "onSelect"), 0 < n.length && (t = new Mi("onSelect", "select", null, t, l), e.push({
            event: t,
            listeners: n
        }), t.target = An)))
    }

    function Kl(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l
    }
    var Dn = {
            animationend: Kl("Animation", "AnimationEnd"),
            animationiteration: Kl("Animation", "AnimationIteration"),
            animationstart: Kl("Animation", "AnimationStart"),
            transitionrun: Kl("Transition", "TransitionRun"),
            transitionstart: Kl("Transition", "TransitionStart"),
            transitioncancel: Kl("Transition", "TransitionCancel"),
            transitionend: Kl("Transition", "TransitionEnd")
        },
        fc = {},
        No = {};
    Ft && (No = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);

    function Jl(e) {
        if (fc[e]) return fc[e];
        if (!Dn[e]) return e;
        var t = Dn[e],
            l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in No) return fc[e] = t[l];
        return e
    }
    var Mo = Jl("animationend"),
        Oo = Jl("animationiteration"),
        _o = Jl("animationstart"),
        Y0 = Jl("transitionrun"),
        Q0 = Jl("transitionstart"),
        X0 = Jl("transitioncancel"),
        Ro = Jl("transitionend"),
        wo = new Map,
        zo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");

    function Bt(e, t) {
        wo.set(e, t), Vl(t, [e])
    }
    var Dt = [],
        Nn = 0,
        dc = 0;

    function Ri() {
        for (var e = Nn, t = dc = Nn = 0; t < e;) {
            var l = Dt[t];
            Dt[t++] = null;
            var n = Dt[t];
            Dt[t++] = null;
            var a = Dt[t];
            Dt[t++] = null;
            var i = Dt[t];
            if (Dt[t++] = null, n !== null && a !== null) {
                var f = n.pending;
                f === null ? a.next = a : (a.next = f.next, f.next = a), n.pending = a
            }
            i !== 0 && Co(l, a, i)
        }
    }

    function wi(e, t, l, n) {
        Dt[Nn++] = e, Dt[Nn++] = t, Dt[Nn++] = l, Dt[Nn++] = n, dc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n)
    }

    function hc(e, t, l, n) {
        return wi(e, t, l, n), zi(e)
    }

    function jl(e, t) {
        return wi(e, null, null, t), zi(e)
    }

    function Co(e, t, l) {
        e.lanes |= l;
        var n = e.alternate;
        n !== null && (n.lanes |= l);
        for (var a = !1, i = e.return; i !== null;) i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
        a && t !== null && e.tag === 3 && (i = e.stateNode, a = 31 - gt(l), i = i.hiddenUpdates, e = i[a], e === null ? i[a] = [t] : e.push(t), t.lane = l | 536870912)
    }

    function zi(e) {
        if (50 < Za) throw Za = 0, xs = null, Error(o(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Mn = {},
        Uo = new WeakMap;

    function Nt(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = Uo.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: ae(t)
            }, Uo.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: ae(t)
        }
    }
    var On = [],
        _n = 0,
        Ci = null,
        Ui = 0,
        Mt = [],
        Ot = 0,
        $l = null,
        el = 1,
        tl = "";

    function Il(e, t) {
        On[_n++] = Ui, On[_n++] = Ci, Ci = e, Ui = t
    }

    function Lo(e, t, l) {
        Mt[Ot++] = el, Mt[Ot++] = tl, Mt[Ot++] = $l, $l = e;
        var n = el;
        e = tl;
        var a = 32 - gt(n) - 1;
        n &= ~(1 << a), l += 1;
        var i = 32 - gt(t) + a;
        if (30 < i) {
            var f = a - a % 5;
            i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, el = 1 << 32 - gt(t) + a | l << a | n, tl = i + e
        } else el = 1 << i | l << a | n, tl = e
    }

    function mc(e) {
        e.return !== null && (Il(e, 1), Lo(e, 1, 0))
    }

    function yc(e) {
        for (; e === Ci;) Ci = On[--_n], On[_n] = null, Ui = On[--_n], On[_n] = null;
        for (; e === $l;) $l = Mt[--Ot], Mt[Ot] = null, tl = Mt[--Ot], Mt[Ot] = null, el = Mt[--Ot], Mt[Ot] = null
    }
    var ut = null,
        $e = null,
        ye = !1,
        Gt = null,
        Zt = !1,
        gc = Error(o(519));

    function Wl(e) {
        var t = Error(o(418, ""));
        throw Ta(Nt(t, e)), gc
    }

    function Bo(e) {
        var t = e.stateNode,
            l = e.type,
            n = e.memoizedProps;
        switch (t[tt] = e, t[ot] = n, l) {
            case "dialog":
                de("cancel", t), de("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                de("load", t);
                break;
            case "video":
            case "audio":
                for (l = 0; l < Ja.length; l++) de(Ja[l], t);
                break;
            case "source":
                de("error", t);
                break;
            case "img":
            case "image":
            case "link":
                de("error", t), de("load", t);
                break;
            case "details":
                de("toggle", t);
                break;
            case "input":
                de("invalid", t), Wr(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), ji(t);
                break;
            case "select":
                de("invalid", t);
                break;
            case "textarea":
                de("invalid", t), Pr(t, n.value, n.defaultValue, n.children), ji(t)
        }
        l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Kd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = hu), t = !0) : t = !1, t || Wl(e)
    }

    function Go(e) {
        for (ut = e.return; ut;) switch (ut.tag) {
            case 3:
            case 27:
                Zt = !0;
                return;
            case 5:
            case 13:
                Zt = !1;
                return;
            default:
                ut = ut.return
        }
    }

    function ja(e) {
        if (e !== ut) return !1;
        if (!ye) return Go(e), ye = !0, !1;
        var t = !1,
            l;
        if ((l = e.tag !== 3 && e.tag !== 27) && ((l = e.tag === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ls(e.type, e.memoizedProps)), l = !l), l && (t = !0), t && $e && Wl(e), Go(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (l = e.data, l === "/$") {
                            if (t === 0) {
                                $e = kt(e.nextSibling);
                                break e
                            }
                            t--
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                    e = e.nextSibling
                }
                $e = null
            }
        } else $e = ut ? kt(e.stateNode.nextSibling) : null;
        return !0
    }

    function Ea() {
        $e = ut = null, ye = !1
    }

    function Ta(e) {
        Gt === null ? Gt = [e] : Gt.push(e)
    }
    var Aa = Error(o(460)),
        Ho = Error(o(474)),
        vc = {
            then: function() {}
        };

    function ko(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function Li() {}

    function qo(e, t, l) {
        switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Li, Li), t = l), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, e === Aa ? Error(o(483)) : e;
            default:
                if (typeof t.status == "string") t.then(Li, Li);
                else {
                    if (e = Ee, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
                    e = t, e.status = "pending", e.then(function(n) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "fulfilled", a.value = n
                        }
                    }, function(n) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "rejected", a.reason = n
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, e === Aa ? Error(o(483)) : e
                }
                throw Da = t, Aa
        }
    }
    var Da = null;

    function Yo() {
        if (Da === null) throw Error(o(459));
        var e = Da;
        return Da = null, e
    }
    var Rn = null,
        Na = 0;

    function Bi(e) {
        var t = Na;
        return Na += 1, Rn === null && (Rn = []), qo(Rn, e, t)
    }

    function Ma(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function Gi(e, t) {
        throw t.$$typeof === m ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function Qo(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Xo(e) {
        function t(A, E) {
            if (e) {
                var N = A.deletions;
                N === null ? (A.deletions = [E], A.flags |= 16) : N.push(E)
            }
        }

        function l(A, E) {
            if (!e) return null;
            for (; E !== null;) t(A, E), E = E.sibling;
            return null
        }

        function n(A) {
            for (var E = new Map; A !== null;) A.key !== null ? E.set(A.key, A) : E.set(A.index, A), A = A.sibling;
            return E
        }

        function a(A, E) {
            return A = Cl(A, E), A.index = 0, A.sibling = null, A
        }

        function i(A, E, N) {
            return A.index = N, e ? (N = A.alternate, N !== null ? (N = N.index, N < E ? (A.flags |= 33554434, E) : N) : (A.flags |= 33554434, E)) : (A.flags |= 1048576, E)
        }

        function f(A) {
            return e && A.alternate === null && (A.flags |= 33554434), A
        }

        function h(A, E, N, C) {
            return E === null || E.tag !== 6 ? (E = fs(N, A.mode, C), E.return = A, E) : (E = a(E, N), E.return = A, E)
        }

        function b(A, E, N, C) {
            var V = N.type;
            return V === v ? R(A, E, N.props.children, C, N.key) : E !== null && (E.elementType === V || typeof V == "object" && V !== null && V.$$typeof === P && Qo(V) === E.type) ? (E = a(E, N.props), Ma(E, N), E.return = A, E) : (E = lu(N.type, N.key, N.props, null, A.mode, C), Ma(E, N), E.return = A, E)
        }

        function T(A, E, N, C) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== N.containerInfo || E.stateNode.implementation !== N.implementation ? (E = ds(N, A.mode, C), E.return = A, E) : (E = a(E, N.children || []), E.return = A, E)
        }

        function R(A, E, N, C, V) {
            return E === null || E.tag !== 7 ? (E = sn(N, A.mode, C, V), E.return = A, E) : (E = a(E, N), E.return = A, E)
        }

        function U(A, E, N) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return E = fs("" + E, A.mode, N), E.return = A, E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case p:
                        return N = lu(E.type, E.key, E.props, null, A.mode, N), Ma(N, E), N.return = A, N;
                    case g:
                        return E = ds(E, A.mode, N), E.return = A, E;
                    case P:
                        var C = E._init;
                        return E = C(E._payload), U(A, E, N)
                }
                if (I(E) || z(E)) return E = sn(E, A.mode, N, null), E.return = A, E;
                if (typeof E.then == "function") return U(A, Bi(E), N);
                if (E.$$typeof === G) return U(A, Pi(A, E), N);
                Gi(A, E)
            }
            return null
        }

        function M(A, E, N, C) {
            var V = E !== null ? E.key : null;
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return V !== null ? null : h(A, E, "" + N, C);
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                    case p:
                        return N.key === V ? b(A, E, N, C) : null;
                    case g:
                        return N.key === V ? T(A, E, N, C) : null;
                    case P:
                        return V = N._init, N = V(N._payload), M(A, E, N, C)
                }
                if (I(N) || z(N)) return V !== null ? null : R(A, E, N, C, null);
                if (typeof N.then == "function") return M(A, E, Bi(N), C);
                if (N.$$typeof === G) return M(A, E, Pi(A, N), C);
                Gi(A, N)
            }
            return null
        }

        function O(A, E, N, C, V) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return A = A.get(N) || null, h(E, A, "" + C, V);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case p:
                        return A = A.get(C.key === null ? N : C.key) || null, b(E, A, C, V);
                    case g:
                        return A = A.get(C.key === null ? N : C.key) || null, T(E, A, C, V);
                    case P:
                        var oe = C._init;
                        return C = oe(C._payload), O(A, E, N, C, V)
                }
                if (I(C) || z(C)) return A = A.get(N) || null, R(E, A, C, V, null);
                if (typeof C.then == "function") return O(A, E, N, Bi(C), V);
                if (C.$$typeof === G) return O(A, E, N, Pi(E, C), V);
                Gi(E, C)
            }
            return null
        }

        function J(A, E, N, C) {
            for (var V = null, oe = null, $ = E, W = E = 0, Je = null; $ !== null && W < N.length; W++) {
                $.index > W ? (Je = $, $ = null) : Je = $.sibling;
                var ge = M(A, $, N[W], C);
                if (ge === null) {
                    $ === null && ($ = Je);
                    break
                }
                e && $ && ge.alternate === null && t(A, $), E = i(ge, E, W), oe === null ? V = ge : oe.sibling = ge, oe = ge, $ = Je
            }
            if (W === N.length) return l(A, $), ye && Il(A, W), V;
            if ($ === null) {
                for (; W < N.length; W++) $ = U(A, N[W], C), $ !== null && (E = i($, E, W), oe === null ? V = $ : oe.sibling = $, oe = $);
                return ye && Il(A, W), V
            }
            for ($ = n($); W < N.length; W++) Je = O($, A, W, N[W], C), Je !== null && (e && Je.alternate !== null && $.delete(Je.key === null ? W : Je.key), E = i(Je, E, W), oe === null ? V = Je : oe.sibling = Je, oe = Je);
            return e && $.forEach(function(ql) {
                return t(A, ql)
            }), ye && Il(A, W), V
        }

        function ne(A, E, N, C) {
            if (N == null) throw Error(o(151));
            for (var V = null, oe = null, $ = E, W = E = 0, Je = null, ge = N.next(); $ !== null && !ge.done; W++, ge = N.next()) {
                $.index > W ? (Je = $, $ = null) : Je = $.sibling;
                var ql = M(A, $, ge.value, C);
                if (ql === null) {
                    $ === null && ($ = Je);
                    break
                }
                e && $ && ql.alternate === null && t(A, $), E = i(ql, E, W), oe === null ? V = ql : oe.sibling = ql, oe = ql, $ = Je
            }
            if (ge.done) return l(A, $), ye && Il(A, W), V;
            if ($ === null) {
                for (; !ge.done; W++, ge = N.next()) ge = U(A, ge.value, C), ge !== null && (E = i(ge, E, W), oe === null ? V = ge : oe.sibling = ge, oe = ge);
                return ye && Il(A, W), V
            }
            for ($ = n($); !ge.done; W++, ge = N.next()) ge = O($, A, W, ge.value, C), ge !== null && (e && ge.alternate !== null && $.delete(ge.key === null ? W : ge.key), E = i(ge, E, W), oe === null ? V = ge : oe.sibling = ge, oe = ge);
            return e && $.forEach(function(ag) {
                return t(A, ag)
            }), ye && Il(A, W), V
        }

        function Ce(A, E, N, C) {
            if (typeof N == "object" && N !== null && N.type === v && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                    case p:
                        e: {
                            for (var V = N.key; E !== null;) {
                                if (E.key === V) {
                                    if (V = N.type, V === v) {
                                        if (E.tag === 7) {
                                            l(A, E.sibling), C = a(E, N.props.children), C.return = A, A = C;
                                            break e
                                        }
                                    } else if (E.elementType === V || typeof V == "object" && V !== null && V.$$typeof === P && Qo(V) === E.type) {
                                        l(A, E.sibling), C = a(E, N.props), Ma(C, N), C.return = A, A = C;
                                        break e
                                    }
                                    l(A, E);
                                    break
                                } else t(A, E);
                                E = E.sibling
                            }
                            N.type === v ? (C = sn(N.props.children, A.mode, C, N.key), C.return = A, A = C) : (C = lu(N.type, N.key, N.props, null, A.mode, C), Ma(C, N), C.return = A, A = C)
                        }
                        return f(A);
                    case g:
                        e: {
                            for (V = N.key; E !== null;) {
                                if (E.key === V)
                                    if (E.tag === 4 && E.stateNode.containerInfo === N.containerInfo && E.stateNode.implementation === N.implementation) {
                                        l(A, E.sibling), C = a(E, N.children || []), C.return = A, A = C;
                                        break e
                                    } else {
                                        l(A, E);
                                        break
                                    }
                                else t(A, E);
                                E = E.sibling
                            }
                            C = ds(N, A.mode, C),
                            C.return = A,
                            A = C
                        }
                        return f(A);
                    case P:
                        return V = N._init, N = V(N._payload), Ce(A, E, N, C)
                }
                if (I(N)) return J(A, E, N, C);
                if (z(N)) {
                    if (V = z(N), typeof V != "function") throw Error(o(150));
                    return N = V.call(N), ne(A, E, N, C)
                }
                if (typeof N.then == "function") return Ce(A, E, Bi(N), C);
                if (N.$$typeof === G) return Ce(A, E, Pi(A, N), C);
                Gi(A, N)
            }
            return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, E !== null && E.tag === 6 ? (l(A, E.sibling), C = a(E, N), C.return = A, A = C) : (l(A, E), C = fs(N, A.mode, C), C.return = A, A = C), f(A)) : l(A, E)
        }
        return function(A, E, N, C) {
            try {
                Na = 0;
                var V = Ce(A, E, N, C);
                return Rn = null, V
            } catch ($) {
                if ($ === Aa) throw $;
                var oe = zt(29, $, null, A.mode);
                return oe.lanes = C, oe.return = A, oe
            } finally {}
        }
    }
    var Fl = Xo(!0),
        Vo = Xo(!1),
        wn = ve(null),
        Hi = ve(0);

    function Zo(e, t) {
        e = dl, Me(Hi, e), Me(wn, t), dl = e | t.baseLanes
    }

    function pc() {
        Me(Hi, dl), Me(wn, wn.current)
    }

    function xc() {
        dl = Hi.current, He(wn), He(Hi)
    }
    var _t = ve(null),
        Kt = null;

    function El(e) {
        var t = e.alternate;
        Me(Qe, Qe.current & 1), Me(_t, e), Kt === null && (t === null || wn.current !== null || t.memoizedState !== null) && (Kt = e)
    }

    function Ko(e) {
        if (e.tag === 22) {
            if (Me(Qe, Qe.current), Me(_t, e), Kt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Kt = e)
            }
        } else Tl()
    }

    function Tl() {
        Me(Qe, Qe.current), Me(_t, _t.current)
    }

    function ll(e) {
        He(_t), Kt === e && (Kt = null), He(Qe)
    }
    var Qe = ve(0);

    function ki(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return t
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
    var V0 = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(l, n) {
                        e.push(n)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(l) {
                    return l()
                })
            }
        },
        Z0 = c.unstable_scheduleCallback,
        K0 = c.unstable_NormalPriority,
        Xe = {
            $$typeof: G,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function bc() {
        return {
            controller: new V0,
            data: new Map,
            refCount: 0
        }
    }

    function Oa(e) {
        e.refCount--, e.refCount === 0 && Z0(K0, function() {
            e.controller.abort()
        })
    }
    var _a = null,
        Sc = 0,
        zn = 0,
        Cn = null;

    function J0(e, t) {
        if (_a === null) {
            var l = _a = [];
            Sc = 0, zn = Ns(), Cn = {
                status: "pending",
                value: void 0,
                then: function(n) {
                    l.push(n)
                }
            }
        }
        return Sc++, t.then(Jo, Jo), t
    }

    function Jo() {
        if (--Sc === 0 && _a !== null) {
            Cn !== null && (Cn.status = "fulfilled");
            var e = _a;
            _a = null, zn = 0, Cn = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function $0(e, t) {
        var l = [],
            n = {
                status: "pending",
                value: null,
                reason: null,
                then: function(a) {
                    l.push(a)
                }
            };
        return e.then(function() {
            n.status = "fulfilled", n.value = t;
            for (var a = 0; a < l.length; a++)(0, l[a])(t)
        }, function(a) {
            for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)(0, l[a])(void 0)
        }), n
    }
    var $o = H.S;
    H.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && J0(e, t), $o !== null && $o(e, t)
    };
    var Pl = ve(null);

    function jc() {
        var e = Pl.current;
        return e !== null ? e : Ee.pooledCache
    }

    function qi(e, t) {
        t === null ? Me(Pl, Pl.current) : Me(Pl, t.pool)
    }

    function Io() {
        var e = jc();
        return e === null ? null : {
            parent: Xe._currentValue,
            pool: e
        }
    }
    var Al = 0,
        se = null,
        xe = null,
        ke = null,
        Yi = !1,
        Un = !1,
        en = !1,
        Qi = 0,
        Ra = 0,
        Ln = null,
        I0 = 0;

    function Le() {
        throw Error(o(321))
    }

    function Ec(e, t) {
        if (t === null) return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!vt(e[l], t[l])) return !1;
        return !0
    }

    function Tc(e, t, l, n, a, i) {
        return Al = i, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? tn : Dl, en = !1, i = l(n, a), en = !1, Un && (i = Fo(t, l, n, a)), Wo(e), i
    }

    function Wo(e) {
        H.H = Jt;
        var t = xe !== null && xe.next !== null;
        if (Al = 0, ke = xe = se = null, Yi = !1, Ra = 0, Ln = null, t) throw Error(o(300));
        e === null || Ze || (e = e.dependencies, e !== null && Fi(e) && (Ze = !0))
    }

    function Fo(e, t, l, n) {
        se = e;
        var a = 0;
        do {
            if (Un && (Ln = null), Ra = 0, Un = !1, 25 <= a) throw Error(o(301));
            if (a += 1, ke = xe = null, e.updateQueue != null) {
                var i = e.updateQueue;
                i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0)
            }
            H.H = ln, i = t(l, n)
        } while (Un);
        return i
    }

    function W0() {
        var e = H.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? wa(t) : t, e = e.useState()[0], (xe !== null ? xe.memoizedState : null) !== e && (se.flags |= 1024), t
    }

    function Ac() {
        var e = Qi !== 0;
        return Qi = 0, e
    }

    function Dc(e, t, l) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l
    }

    function Nc(e) {
        if (Yi) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            Yi = !1
        }
        Al = 0, ke = xe = se = null, Un = !1, Ra = Qi = 0, Ln = null
    }

    function dt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ke === null ? se.memoizedState = ke = e : ke = ke.next = e, ke
    }

    function qe() {
        if (xe === null) {
            var e = se.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = xe.next;
        var t = ke === null ? se.memoizedState : ke.next;
        if (t !== null) ke = t, xe = e;
        else {
            if (e === null) throw se.alternate === null ? Error(o(467)) : Error(o(310));
            xe = e, e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null
            }, ke === null ? se.memoizedState = ke = e : ke = ke.next = e
        }
        return ke
    }
    var Xi;
    Xi = function() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    };

    function wa(e) {
        var t = Ra;
        return Ra += 1, Ln === null && (Ln = []), e = qo(Ln, e, t), t = se, (ke === null ? t.memoizedState : ke.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? tn : Dl), e
    }

    function Vi(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return wa(e);
            if (e.$$typeof === G) return lt(e)
        }
        throw Error(o(438, String(e)))
    }

    function Mc(e) {
        var t = null,
            l = se.updateQueue;
        if (l !== null && (t = l.memoCache), t == null) {
            var n = se.alternate;
            n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
                data: n.data.map(function(a) {
                    return a.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), l === null && (l = Xi(), se.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
            for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = Ue;
        return t.index++, l
    }

    function nl(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Zi(e) {
        var t = qe();
        return Oc(t, xe, e)
    }

    function Oc(e, t, l) {
        var n = e.queue;
        if (n === null) throw Error(o(311));
        n.lastRenderedReducer = l;
        var a = e.baseQueue,
            i = n.pending;
        if (i !== null) {
            if (a !== null) {
                var f = a.next;
                a.next = i.next, i.next = f
            }
            t.baseQueue = a = i, n.pending = null
        }
        if (i = e.baseState, a === null) e.memoizedState = i;
        else {
            t = a.next;
            var h = f = null,
                b = null,
                T = t,
                R = !1;
            do {
                var U = T.lane & -536870913;
                if (U !== T.lane ? (me & U) === U : (Al & U) === U) {
                    var M = T.revertLane;
                    if (M === 0) b !== null && (b = b.next = {
                        lane: 0,
                        revertLane: 0,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    }), U === zn && (R = !0);
                    else if ((Al & M) === M) {
                        T = T.next, M === zn && (R = !0);
                        continue
                    } else U = {
                        lane: 0,
                        revertLane: T.revertLane,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    }, b === null ? (h = b = U, f = i) : b = b.next = U, se.lanes |= M, Ul |= M;
                    U = T.action, en && l(i, U), i = T.hasEagerState ? T.eagerState : l(i, U)
                } else M = {
                    lane: U,
                    revertLane: T.revertLane,
                    action: T.action,
                    hasEagerState: T.hasEagerState,
                    eagerState: T.eagerState,
                    next: null
                }, b === null ? (h = b = M, f = i) : b = b.next = M, se.lanes |= U, Ul |= U;
                T = T.next
            } while (T !== null && T !== t);
            if (b === null ? f = i : b.next = h, !vt(i, e.memoizedState) && (Ze = !0, R && (l = Cn, l !== null))) throw l;
            e.memoizedState = i, e.baseState = f, e.baseQueue = b, n.lastRenderedState = i
        }
        return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch]
    }

    function _c(e) {
        var t = qe(),
            l = t.queue;
        if (l === null) throw Error(o(311));
        l.lastRenderedReducer = e;
        var n = l.dispatch,
            a = l.pending,
            i = t.memoizedState;
        if (a !== null) {
            l.pending = null;
            var f = a = a.next;
            do i = e(i, f.action), f = f.next; while (f !== a);
            vt(i, t.memoizedState) || (Ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i
        }
        return [i, n]
    }

    function Po(e, t, l) {
        var n = se,
            a = qe(),
            i = ye;
        if (i) {
            if (l === void 0) throw Error(o(407));
            l = l()
        } else l = t();
        var f = !vt((xe || a).memoizedState, l);
        if (f && (a.memoizedState = l, Ze = !0), a = a.queue, zc(lf.bind(null, n, a, e), [e]), a.getSnapshot !== t || f || ke !== null && ke.memoizedState.tag & 1) {
            if (n.flags |= 2048, Bn(9, tf.bind(null, n, a, l, t), {
                    destroy: void 0
                }, null), Ee === null) throw Error(o(349));
            i || Al & 60 || ef(n, t, l)
        }
        return l
    }

    function ef(e, t, l) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: l
        }, t = se.updateQueue, t === null ? (t = Xi(), se.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e))
    }

    function tf(e, t, l, n) {
        t.value = l, t.getSnapshot = n, nf(t) && af(e)
    }

    function lf(e, t, l) {
        return l(function() {
            nf(t) && af(e)
        })
    }

    function nf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !vt(e, l)
        } catch {
            return !0
        }
    }

    function af(e) {
        var t = jl(e, 2);
        t !== null && ct(t, e, 2)
    }

    function Rc(e) {
        var t = dt();
        if (typeof e == "function") {
            var l = e;
            if (e = l(), en) {
                xl(!0);
                try {
                    l()
                } finally {
                    xl(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: nl,
            lastRenderedState: e
        }, t
    }

    function uf(e, t, l, n) {
        return e.baseState = l, Oc(e, xe, typeof n == "function" ? n : nl)
    }

    function F0(e, t, l, n, a) {
        if ($i(e)) throw Error(o(485));
        if (e = t.action, e !== null) {
            var i = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    i.listeners.push(f)
                }
            };
            H.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, cf(t, i)) : (i.next = l.next, t.pending = l.next = i)
        }
    }

    function cf(e, t) {
        var l = t.action,
            n = t.payload,
            a = e.state;
        if (t.isTransition) {
            var i = H.T,
                f = {};
            H.T = f;
            try {
                var h = l(a, n),
                    b = H.S;
                b !== null && b(f, h), sf(e, t, h)
            } catch (T) {
                wc(e, t, T)
            } finally {
                H.T = i
            }
        } else try {
            i = l(a, n), sf(e, t, i)
        } catch (T) {
            wc(e, t, T)
        }
    }

    function sf(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
            rf(e, t, n)
        }, function(n) {
            return wc(e, t, n)
        }) : rf(e, t, l)
    }

    function rf(e, t, l) {
        t.status = "fulfilled", t.value = l, of(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, cf(e, l)))
    }

    function wc(e, t, l) {
        var n = e.pending;
        if (e.pending = null, n !== null) {
            n = n.next;
            do t.status = "rejected", t.reason = l, of(t), t = t.next; while (t !== n)
        }
        e.action = null
    }

    function of(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function ff(e, t) {
        return t
    }

    function df(e, t) {
        if (ye) {
            var l = Ee.formState;
            if (l !== null) {
                e: {
                    var n = se;
                    if (ye) {
                        if ($e) {
                            t: {
                                for (var a = $e, i = Zt; a.nodeType !== 8;) {
                                    if (!i) {
                                        a = null;
                                        break t
                                    }
                                    if (a = kt(a.nextSibling), a === null) {
                                        a = null;
                                        break t
                                    }
                                }
                                i = a.data,
                                a = i === "F!" || i === "F" ? a : null
                            }
                            if (a) {
                                $e = kt(a.nextSibling), n = a.data === "F!";
                                break e
                            }
                        }
                        Wl(n)
                    }
                    n = !1
                }
                n && (t = l[0])
            }
        }
        return l = dt(), l.memoizedState = l.baseState = t, n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ff,
            lastRenderedState: t
        }, l.queue = n, l = _f.bind(null, se, n), n.dispatch = l, n = Rc(!1), i = Gc.bind(null, se, !1, n.queue), n = dt(), a = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, n.queue = a, l = F0.bind(null, se, a, i, l), a.dispatch = l, n.memoizedState = e, [t, l, !1]
    }

    function hf(e) {
        var t = qe();
        return mf(t, xe, e)
    }

    function mf(e, t, l) {
        t = Oc(e, t, ff)[0], e = Zi(nl)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? wa(t) : t;
        var n = qe(),
            a = n.queue,
            i = a.dispatch;
        return l !== n.memoizedState && (se.flags |= 2048, Bn(9, P0.bind(null, a, l), {
            destroy: void 0
        }, null)), [t, i, e]
    }

    function P0(e, t) {
        e.action = t
    }

    function yf(e) {
        var t = qe(),
            l = xe;
        if (l !== null) return mf(t, l, e);
        qe(), t = t.memoizedState, l = qe();
        var n = l.queue.dispatch;
        return l.memoizedState = e, [t, n, !1]
    }

    function Bn(e, t, l, n) {
        return e = {
            tag: e,
            create: t,
            inst: l,
            deps: n,
            next: null
        }, t = se.updateQueue, t === null && (t = Xi(), se.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e
    }

    function gf() {
        return qe().memoizedState
    }

    function Ki(e, t, l, n) {
        var a = dt();
        se.flags |= e, a.memoizedState = Bn(1 | t, l, {
            destroy: void 0
        }, n === void 0 ? null : n)
    }

    function Ji(e, t, l, n) {
        var a = qe();
        n = n === void 0 ? null : n;
        var i = a.memoizedState.inst;
        xe !== null && n !== null && Ec(n, xe.memoizedState.deps) ? a.memoizedState = Bn(t, l, i, n) : (se.flags |= e, a.memoizedState = Bn(1 | t, l, i, n))
    }

    function vf(e, t) {
        Ki(8390656, 8, e, t)
    }

    function zc(e, t) {
        Ji(2048, 8, e, t)
    }

    function pf(e, t) {
        return Ji(4, 2, e, t)
    }

    function xf(e, t) {
        return Ji(4, 4, e, t)
    }

    function bf(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Sf(e, t, l) {
        l = l != null ? l.concat([e]) : null, Ji(4, 4, bf.bind(null, t, e), l)
    }

    function Cc() {}

    function jf(e, t) {
        var l = qe();
        t = t === void 0 ? null : t;
        var n = l.memoizedState;
        return t !== null && Ec(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e)
    }

    function Ef(e, t) {
        var l = qe();
        t = t === void 0 ? null : t;
        var n = l.memoizedState;
        if (t !== null && Ec(t, n[1])) return n[0];
        if (n = e(), en) {
            xl(!0);
            try {
                e()
            } finally {
                xl(!1)
            }
        }
        return l.memoizedState = [n, t], n
    }

    function Uc(e, t, l) {
        return l === void 0 || Al & 1073741824 ? e.memoizedState = t : (e.memoizedState = l, e = Ad(), se.lanes |= e, Ul |= e, l)
    }

    function Tf(e, t, l, n) {
        return vt(l, t) ? l : wn.current !== null ? (e = Uc(e, l, n), vt(e, t) || (Ze = !0), e) : Al & 42 ? (e = Ad(), se.lanes |= e, Ul |= e, t) : (Ze = !0, e.memoizedState = l)
    }

    function Af(e, t, l, n, a) {
        var i = X.p;
        X.p = i !== 0 && 8 > i ? i : 8;
        var f = H.T,
            h = {};
        H.T = h, Gc(e, !1, t, l);
        try {
            var b = a(),
                T = H.S;
            if (T !== null && T(h, b), b !== null && typeof b == "object" && typeof b.then == "function") {
                var R = $0(b, n);
                za(e, t, R, St(e))
            } else za(e, t, n, St(e))
        } catch (U) {
            za(e, t, {
                then: function() {},
                status: "rejected",
                reason: U
            }, St())
        } finally {
            X.p = i, H.T = f
        }
    }

    function ey() {}

    function Lc(e, t, l, n) {
        if (e.tag !== 5) throw Error(o(476));
        var a = Df(e).queue;
        Af(e, a, t, he, l === null ? ey : function() {
            return Nf(e), l(n)
        })
    }

    function Df(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: he,
            baseState: he,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: nl,
                lastRenderedState: he
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: nl,
                lastRenderedState: l
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function Nf(e) {
        var t = Df(e).next.queue;
        za(e, t, {}, St())
    }

    function Bc() {
        return lt(Pa)
    }

    function Mf() {
        return qe().memoizedState
    }

    function Of() {
        return qe().memoizedState
    }

    function ty(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var l = St();
                    e = Ol(l);
                    var n = _l(t, e, l);
                    n !== null && (ct(n, t, l), La(n, t, l)), t = {
                        cache: bc()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function ly(e, t, l) {
        var n = St();
        l = {
            lane: n,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, $i(e) ? Rf(t, l) : (l = hc(e, t, l, n), l !== null && (ct(l, e, n), wf(l, t, n)))
    }

    function _f(e, t, l) {
        var n = St();
        za(e, t, l, n)
    }

    function za(e, t, l, n) {
        var a = {
            lane: n,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if ($i(e)) Rf(t, a);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                var f = t.lastRenderedState,
                    h = i(f, l);
                if (a.hasEagerState = !0, a.eagerState = h, vt(h, f)) return wi(e, t, a, 0), Ee === null && Ri(), !1
            } catch {} finally {}
            if (l = hc(e, t, a, n), l !== null) return ct(l, e, n), wf(l, t, n), !0
        }
        return !1
    }

    function Gc(e, t, l, n) {
        if (n = {
                lane: 2,
                revertLane: Ns(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, $i(e)) {
            if (t) throw Error(o(479))
        } else t = hc(e, l, n, 2), t !== null && ct(t, e, 2)
    }

    function $i(e) {
        var t = e.alternate;
        return e === se || t !== null && t === se
    }

    function Rf(e, t) {
        Un = Yi = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t
    }

    function wf(e, t, l) {
        if (l & 4194176) {
            var n = t.lanes;
            n &= e.pendingLanes, l |= n, t.lanes = l, qr(e, l)
        }
    }
    var Jt = {
        readContext: lt,
        use: Vi,
        useCallback: Le,
        useContext: Le,
        useEffect: Le,
        useImperativeHandle: Le,
        useLayoutEffect: Le,
        useInsertionEffect: Le,
        useMemo: Le,
        useReducer: Le,
        useRef: Le,
        useState: Le,
        useDebugValue: Le,
        useDeferredValue: Le,
        useTransition: Le,
        useSyncExternalStore: Le,
        useId: Le
    };
    Jt.useCacheRefresh = Le, Jt.useMemoCache = Le, Jt.useHostTransitionStatus = Le, Jt.useFormState = Le, Jt.useActionState = Le, Jt.useOptimistic = Le;
    var tn = {
        readContext: lt,
        use: Vi,
        useCallback: function(e, t) {
            return dt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: lt,
        useEffect: vf,
        useImperativeHandle: function(e, t, l) {
            l = l != null ? l.concat([e]) : null, Ki(4194308, 4, bf.bind(null, t, e), l)
        },
        useLayoutEffect: function(e, t) {
            return Ki(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Ki(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var l = dt();
            t = t === void 0 ? null : t;
            var n = e();
            if (en) {
                xl(!0);
                try {
                    e()
                } finally {
                    xl(!1)
                }
            }
            return l.memoizedState = [n, t], n
        },
        useReducer: function(e, t, l) {
            var n = dt();
            if (l !== void 0) {
                var a = l(t);
                if (en) {
                    xl(!0);
                    try {
                        l(t)
                    } finally {
                        xl(!1)
                    }
                }
            } else a = t;
            return n.memoizedState = n.baseState = a, e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: a
            }, n.queue = e, e = e.dispatch = ly.bind(null, se, e), [n.memoizedState, e]
        },
        useRef: function(e) {
            var t = dt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: function(e) {
            e = Rc(e);
            var t = e.queue,
                l = _f.bind(null, se, t);
            return t.dispatch = l, [e.memoizedState, l]
        },
        useDebugValue: Cc,
        useDeferredValue: function(e, t) {
            var l = dt();
            return Uc(l, e, t)
        },
        useTransition: function() {
            var e = Rc(!1);
            return e = Af.bind(null, se, e.queue, !0, !1), dt().memoizedState = e, [!1, e]
        },
        useSyncExternalStore: function(e, t, l) {
            var n = se,
                a = dt();
            if (ye) {
                if (l === void 0) throw Error(o(407));
                l = l()
            } else {
                if (l = t(), Ee === null) throw Error(o(349));
                me & 60 || ef(n, t, l)
            }
            a.memoizedState = l;
            var i = {
                value: l,
                getSnapshot: t
            };
            return a.queue = i, vf(lf.bind(null, n, i, e), [e]), n.flags |= 2048, Bn(9, tf.bind(null, n, i, l, t), {
                destroy: void 0
            }, null), l
        },
        useId: function() {
            var e = dt(),
                t = Ee.identifierPrefix;
            if (ye) {
                var l = tl,
                    n = el;
                l = (n & ~(1 << 32 - gt(n) - 1)).toString(32) + l, t = ":" + t + "R" + l, l = Qi++, 0 < l && (t += "H" + l.toString(32)), t += ":"
            } else l = I0++, t = ":" + t + "r" + l.toString(32) + ":";
            return e.memoizedState = t
        },
        useCacheRefresh: function() {
            return dt().memoizedState = ty.bind(null, se)
        }
    };
    tn.useMemoCache = Mc, tn.useHostTransitionStatus = Bc, tn.useFormState = df, tn.useActionState = df, tn.useOptimistic = function(e) {
        var t = dt();
        t.memoizedState = t.baseState = e;
        var l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
        };
        return t.queue = l, t = Gc.bind(null, se, !0, l), l.dispatch = t, [e, t]
    };
    var Dl = {
        readContext: lt,
        use: Vi,
        useCallback: jf,
        useContext: lt,
        useEffect: zc,
        useImperativeHandle: Sf,
        useInsertionEffect: pf,
        useLayoutEffect: xf,
        useMemo: Ef,
        useReducer: Zi,
        useRef: gf,
        useState: function() {
            return Zi(nl)
        },
        useDebugValue: Cc,
        useDeferredValue: function(e, t) {
            var l = qe();
            return Tf(l, xe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Zi(nl)[0],
                t = qe().memoizedState;
            return [typeof e == "boolean" ? e : wa(e), t]
        },
        useSyncExternalStore: Po,
        useId: Mf
    };
    Dl.useCacheRefresh = Of, Dl.useMemoCache = Mc, Dl.useHostTransitionStatus = Bc, Dl.useFormState = hf, Dl.useActionState = hf, Dl.useOptimistic = function(e, t) {
        var l = qe();
        return uf(l, xe, e, t)
    };
    var ln = {
        readContext: lt,
        use: Vi,
        useCallback: jf,
        useContext: lt,
        useEffect: zc,
        useImperativeHandle: Sf,
        useInsertionEffect: pf,
        useLayoutEffect: xf,
        useMemo: Ef,
        useReducer: _c,
        useRef: gf,
        useState: function() {
            return _c(nl)
        },
        useDebugValue: Cc,
        useDeferredValue: function(e, t) {
            var l = qe();
            return xe === null ? Uc(l, e, t) : Tf(l, xe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = _c(nl)[0],
                t = qe().memoizedState;
            return [typeof e == "boolean" ? e : wa(e), t]
        },
        useSyncExternalStore: Po,
        useId: Mf
    };
    ln.useCacheRefresh = Of, ln.useMemoCache = Mc, ln.useHostTransitionStatus = Bc, ln.useFormState = yf, ln.useActionState = yf, ln.useOptimistic = function(e, t) {
        var l = qe();
        return xe !== null ? uf(l, xe, e, t) : (l.baseState = e, [e, l.queue.dispatch])
    };

    function Hc(e, t, l, n) {
        t = e.memoizedState, l = l(n, t), l = l == null ? t : Z({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var kc = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? te(e) === e : !1
        },
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var n = St(),
                a = Ol(n);
            a.payload = t, l != null && (a.callback = l), t = _l(e, a, n), t !== null && (ct(t, e, n), La(t, e, n))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var n = St(),
                a = Ol(n);
            a.tag = 1, a.payload = t, l != null && (a.callback = l), t = _l(e, a, n), t !== null && (ct(t, e, n), La(t, e, n))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = St(),
                n = Ol(l);
            n.tag = 2, t != null && (n.callback = t), t = _l(e, n, l), t !== null && (ct(t, e, l), La(t, e, l))
        }
    };

    function zf(e, t, l, n, a, i, f) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ba(l, n) || !ba(a, i) : !0
    }

    function Cf(e, t, l, n) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && kc.enqueueReplaceState(t, t.state, null)
    }

    function nn(e, t) {
        var l = t;
        if ("ref" in t) {
            l = {};
            for (var n in t) n !== "ref" && (l[n] = t[n])
        }
        if (e = e.defaultProps) {
            l === t && (l = Z({}, l));
            for (var a in e) l[a] === void 0 && (l[a] = e[a])
        }
        return l
    }
    var Ii = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function Uf(e) {
        Ii(e)
    }

    function Lf(e) {
        console.error(e)
    }

    function Bf(e) {
        Ii(e)
    }

    function Wi(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }

    function Gf(e, t, l) {
        try {
            var n = e.onCaughtError;
            n(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function qc(e, t, l) {
        return l = Ol(l), l.tag = 3, l.payload = {
            element: null
        }, l.callback = function() {
            Wi(e, t)
        }, l
    }

    function Hf(e) {
        return e = Ol(e), e.tag = 3, e
    }

    function kf(e, t, l, n) {
        var a = l.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var i = n.value;
            e.payload = function() {
                return a(i)
            }, e.callback = function() {
                Gf(t, l, n)
            }
        }
        var f = l.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
            Gf(t, l, n), typeof a != "function" && (Ll === null ? Ll = new Set([this]) : Ll.add(this));
            var h = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: h !== null ? h : ""
            })
        })
    }

    function ny(e, t, l, n, a) {
        if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
            if (t = l.alternate, t !== null && Ua(t, l, a, !0), l = _t.current, l !== null) {
                switch (l.tag) {
                    case 13:
                        return Kt === null ? js() : l.alternate === null && ze === 0 && (ze = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === vc ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([n]) : t.add(n), Ts(e, n, a)), !1;
                    case 22:
                        return l.flags |= 65536, n === vc ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([n])
                        }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([n]) : l.add(n)), Ts(e, n, a)), !1
                }
                throw Error(o(435, l.tag))
            }
            return Ts(e, n, a), js(), !1
        }
        if (ye) return t = _t.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== gc && (e = Error(o(422), {
            cause: n
        }), Ta(Nt(e, l)))) : (n !== gc && (t = Error(o(423), {
            cause: n
        }), Ta(Nt(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Nt(n, l), a = qc(e.stateNode, n, a), ls(e, a), ze !== 4 && (ze = 2)), !1;
        var i = Error(o(520), {
            cause: n
        });
        if (i = Nt(i, l), Xa === null ? Xa = [i] : Xa.push(i), ze !== 4 && (ze = 2), t === null) return !0;
        n = Nt(n, l), l = t;
        do {
            switch (l.tag) {
                case 3:
                    return l.flags |= 65536, e = a & -a, l.lanes |= e, e = qc(l.stateNode, n, e), ls(l, e), !1;
                case 1:
                    if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ll === null || !Ll.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Hf(a), kf(a, e, l, n), ls(l, a), !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var qf = Error(o(461)),
        Ze = !1;

    function Ie(e, t, l, n) {
        t.child = e === null ? Vo(t, null, l, n) : Fl(t, e.child, l, n)
    }

    function Yf(e, t, l, n, a) {
        l = l.render;
        var i = t.ref;
        if ("ref" in n) {
            var f = {};
            for (var h in n) h !== "ref" && (f[h] = n[h])
        } else f = n;
        return un(t), n = Tc(e, t, l, f, i, a), h = Ac(), e !== null && !Ze ? (Dc(e, t, a), al(e, t, a)) : (ye && h && mc(t), t.flags |= 1, Ie(e, t, n, a), t.child)
    }

    function Qf(e, t, l, n, a) {
        if (e === null) {
            var i = l.type;
            return typeof i == "function" && !os(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Xf(e, t, i, n, a)) : (e = lu(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (i = e.child, !Ic(e, a)) {
            var f = i.memoizedProps;
            if (l = l.compare, l = l !== null ? l : ba, l(f, n) && e.ref === t.ref) return al(e, t, a)
        }
        return t.flags |= 1, e = Cl(i, n), e.ref = t.ref, e.return = t, t.child = e
    }

    function Xf(e, t, l, n, a) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (ba(i, n) && e.ref === t.ref)
                if (Ze = !1, t.pendingProps = n = i, Ic(e, a)) e.flags & 131072 && (Ze = !0);
                else return t.lanes = e.lanes, al(e, t, a)
        }
        return Yc(e, t, l, n, a)
    }

    function Vf(e, t, l) {
        var n = t.pendingProps,
            a = n.children,
            i = (t.stateNode._pendingVisibility & 2) !== 0,
            f = e !== null ? e.memoizedState : null;
        if (Ca(e, t), n.mode === "hidden" || i) {
            if (t.flags & 128) {
                if (n = f !== null ? f.baseLanes | l : l, e !== null) {
                    for (a = t.child = e.child, i = 0; a !== null;) i = i | a.lanes | a.childLanes, a = a.sibling;
                    t.childLanes = i & ~n
                } else t.childLanes = 0, t.child = null;
                return Zf(e, t, n, l)
            }
            if (l & 536870912) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && qi(t, f !== null ? f.cachePool : null), f !== null ? Zo(t, f) : pc(), Ko(t);
            else return t.lanes = t.childLanes = 536870912, Zf(e, t, f !== null ? f.baseLanes | l : l, l)
        } else f !== null ? (qi(t, f.cachePool), Zo(t, f), Tl(), t.memoizedState = null) : (e !== null && qi(t, null), pc(), Tl());
        return Ie(e, t, a, l), t.child
    }

    function Zf(e, t, l, n) {
        var a = jc();
        return a = a === null ? null : {
            parent: Xe._currentValue,
            pool: a
        }, t.memoizedState = {
            baseLanes: l,
            cachePool: a
        }, e !== null && qi(t, null), pc(), Ko(t), e !== null && Ua(e, t, n, !0), null
    }

    function Ca(e, t) {
        var l = t.ref;
        if (l === null) e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
            if (typeof l != "function" && typeof l != "object") throw Error(o(284));
            (e === null || e.ref !== l) && (t.flags |= 2097664)
        }
    }

    function Yc(e, t, l, n, a) {
        return un(t), l = Tc(e, t, l, n, void 0, a), n = Ac(), e !== null && !Ze ? (Dc(e, t, a), al(e, t, a)) : (ye && n && mc(t), t.flags |= 1, Ie(e, t, l, a), t.child)
    }

    function Kf(e, t, l, n, a, i) {
        return un(t), t.updateQueue = null, l = Fo(t, n, l, a), Wo(e), n = Ac(), e !== null && !Ze ? (Dc(e, t, i), al(e, t, i)) : (ye && n && mc(t), t.flags |= 1, Ie(e, t, l, i), t.child)
    }

    function Jf(e, t, l, n, a) {
        if (un(t), t.stateNode === null) {
            var i = Mn,
                f = l.contextType;
            typeof f == "object" && f !== null && (i = lt(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = kc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, es(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? lt(f) : Mn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Hc(t, l, f, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && kc.enqueueReplaceState(i, i.state, null), Ga(t, n, i, a), Ba(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0
        } else if (e === null) {
            i = t.stateNode;
            var h = t.memoizedProps,
                b = nn(l, h);
            i.props = b;
            var T = i.context,
                R = l.contextType;
            f = Mn, typeof R == "object" && R !== null && (f = lt(R));
            var U = l.getDerivedStateFromProps;
            R = typeof U == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, R || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || T !== f) && Cf(t, i, n, f), Ml = !1;
            var M = t.memoizedState;
            i.state = M, Ga(t, n, i, a), Ba(), T = t.memoizedState, h || M !== T || Ml ? (typeof U == "function" && (Hc(t, l, U, n), T = t.memoizedState), (b = Ml || zf(t, l, b, n, M, T, f)) ? (R || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = T), i.props = n, i.state = T, i.context = f, n = b) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
        } else {
            i = t.stateNode, ts(e, t), f = t.memoizedProps, R = nn(l, f), i.props = R, U = t.pendingProps, M = i.context, T = l.contextType, b = Mn, typeof T == "object" && T !== null && (b = lt(T)), h = l.getDerivedStateFromProps, (T = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== U || M !== b) && Cf(t, i, n, b), Ml = !1, M = t.memoizedState, i.state = M, Ga(t, n, i, a), Ba();
            var O = t.memoizedState;
            f !== U || M !== O || Ml || e !== null && e.dependencies !== null && Fi(e.dependencies) ? (typeof h == "function" && (Hc(t, l, h, n), O = t.memoizedState), (R = Ml || zf(t, l, R, n, M, O, b) || e !== null && e.dependencies !== null && Fi(e.dependencies)) ? (T || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, O, b), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, O, b)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = O), i.props = n, i.state = O, i.context = b, n = R) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), n = !1)
        }
        return i = n, Ca(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Fl(t, e.child, null, a), t.child = Fl(t, null, l, a)) : Ie(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = al(e, t, a), e
    }

    function $f(e, t, l, n) {
        return Ea(), t.flags |= 256, Ie(e, t, l, n), t.child
    }
    var Qc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Xc(e) {
        return {
            baseLanes: e,
            cachePool: Io()
        }
    }

    function Vc(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Ct), e
    }

    function If(e, t, l) {
        var n = t.pendingProps,
            a = !1,
            i = (t.flags & 128) !== 0,
            f;
        if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (ye) {
                if (a ? El(t) : Tl(), ye) {
                    var h = $e,
                        b;
                    if (b = h) {
                        e: {
                            for (b = h, h = Zt; b.nodeType !== 8;) {
                                if (!h) {
                                    h = null;
                                    break e
                                }
                                if (b = kt(b.nextSibling), b === null) {
                                    h = null;
                                    break e
                                }
                            }
                            h = b
                        }
                        h !== null ? (t.memoizedState = {
                            dehydrated: h,
                            treeContext: $l !== null ? {
                                id: el,
                                overflow: tl
                            } : null,
                            retryLane: 536870912
                        }, b = zt(18, null, null, 0), b.stateNode = h, b.return = t, t.child = b, ut = t, $e = null, b = !0) : b = !1
                    }
                    b || Wl(t)
                }
                if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null)) return h.data === "$!" ? t.lanes = 16 : t.lanes = 536870912, null;
                ll(t)
            }
            return h = n.children, n = n.fallback, a ? (Tl(), a = t.mode, h = Kc({
                mode: "hidden",
                children: h
            }, a), n = sn(n, a, l, null), h.return = t, n.return = t, h.sibling = n, t.child = h, a = t.child, a.memoizedState = Xc(l), a.childLanes = Vc(e, f, l), t.memoizedState = Qc, n) : (El(t), Zc(t, h))
        }
        if (b = e.memoizedState, b !== null && (h = b.dehydrated, h !== null)) {
            if (i) t.flags & 256 ? (El(t), t.flags &= -257, t = Jc(e, t, l)) : t.memoizedState !== null ? (Tl(), t.child = e.child, t.flags |= 128, t = null) : (Tl(), a = n.fallback, h = t.mode, n = Kc({
                mode: "visible",
                children: n.children
            }, h), a = sn(a, h, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, Fl(t, e.child, null, l), n = t.child, n.memoizedState = Xc(l), n.childLanes = Vc(e, f, l), t.memoizedState = Qc, t = a);
            else if (El(t), h.data === "$!") {
                if (f = h.nextSibling && h.nextSibling.dataset, f) var T = f.dgst;
                f = T, n = Error(o(419)), n.stack = "", n.digest = f, Ta({
                    value: n,
                    source: null,
                    stack: null
                }), t = Jc(e, t, l)
            } else if (Ze || Ua(e, t, l, !1), f = (l & e.childLanes) !== 0, Ze || f) {
                if (f = Ee, f !== null) {
                    if (n = l & -l, n & 42) n = 1;
                    else switch (n) {
                        case 2:
                            n = 1;
                            break;
                        case 8:
                            n = 4;
                            break;
                        case 32:
                            n = 16;
                            break;
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
                            n = 64;
                            break;
                        case 268435456:
                            n = 134217728;
                            break;
                        default:
                            n = 0
                    }
                    if (n = n & (f.suspendedLanes | l) ? 0 : n, n !== 0 && n !== b.retryLane) throw b.retryLane = n, jl(e, n), ct(f, e, n), qf
                }
                h.data === "$?" || js(), t = Jc(e, t, l)
            } else h.data === "$?" ? (t.flags |= 128, t.child = e.child, t = py.bind(null, e), h._reactRetry = t, t = null) : (e = b.treeContext, $e = kt(h.nextSibling), ut = t, ye = !0, Gt = null, Zt = !1, e !== null && (Mt[Ot++] = el, Mt[Ot++] = tl, Mt[Ot++] = $l, el = e.id, tl = e.overflow, $l = t), t = Zc(t, n.children), t.flags |= 4096);
            return t
        }
        return a ? (Tl(), a = n.fallback, h = t.mode, b = e.child, T = b.sibling, n = Cl(b, {
            mode: "hidden",
            children: n.children
        }), n.subtreeFlags = b.subtreeFlags & 31457280, T !== null ? a = Cl(T, a) : (a = sn(a, h, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, h = e.child.memoizedState, h === null ? h = Xc(l) : (b = h.cachePool, b !== null ? (T = Xe._currentValue, b = b.parent !== T ? {
            parent: T,
            pool: T
        } : b) : b = Io(), h = {
            baseLanes: h.baseLanes | l,
            cachePool: b
        }), a.memoizedState = h, a.childLanes = Vc(e, f, l), t.memoizedState = Qc, n) : (El(t), l = e.child, e = l.sibling, l = Cl(l, {
            mode: "visible",
            children: n.children
        }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l)
    }

    function Zc(e, t) {
        return t = Kc({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function Kc(e, t) {
        return jd(e, t, 0, null)
    }

    function Jc(e, t, l) {
        return Fl(t, e.child, null, l), e = Zc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Wf(e, t, l) {
        e.lanes |= t;
        var n = e.alternate;
        n !== null && (n.lanes |= t), Fc(e.return, t, l)
    }

    function $c(e, t, l, n, a) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: l,
            tailMode: a
        } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = l, i.tailMode = a)
    }

    function Ff(e, t, l) {
        var n = t.pendingProps,
            a = n.revealOrder,
            i = n.tail;
        if (Ie(e, t, n.children, l), n = Qe.current, n & 2) n = n & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Wf(e, l, t);
                else if (e.tag === 19) Wf(e, l, t);
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
        switch (Me(Qe, n), a) {
            case "forwards":
                for (l = t.child, a = null; l !== null;) e = l.alternate, e !== null && ki(e) === null && (a = l), l = l.sibling;
                l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), $c(t, !1, a, l, i);
                break;
            case "backwards":
                for (l = null, a = t.child, t.child = null; a !== null;) {
                    if (e = a.alternate, e !== null && ki(e) === null) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = l, l = a, a = e
                }
                $c(t, !0, l, null, i);
                break;
            case "together":
                $c(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function al(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies), Ul |= t.lanes, !(l & t.childLanes))
            if (e !== null) {
                if (Ua(e, t, l, !1), (l & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child, l = Cl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;) e = e.sibling, l = l.sibling = Cl(e, e.pendingProps), l.return = t;
            l.sibling = null
        }
        return t.child
    }

    function Ic(e, t) {
        return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && Fi(e)))
    }

    function ay(e, t, l) {
        switch (t.tag) {
            case 3:
                mi(t, t.stateNode.containerInfo), Nl(t, Xe, e.memoizedState.cache), Ea();
                break;
            case 27:
            case 5:
                ku(t);
                break;
            case 4:
                mi(t, t.stateNode.containerInfo);
                break;
            case 10:
                Nl(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var n = t.memoizedState;
                if (n !== null) return n.dehydrated !== null ? (El(t), t.flags |= 128, null) : l & t.child.childLanes ? If(e, t, l) : (El(t), e = al(e, t, l), e !== null ? e.sibling : null);
                El(t);
                break;
            case 19:
                var a = (e.flags & 128) !== 0;
                if (n = (l & t.childLanes) !== 0, n || (Ua(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                    if (n) return Ff(e, t, l);
                    t.flags |= 128
                }
                if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Me(Qe, Qe.current), n) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Vf(e, t, l);
            case 24:
                Nl(t, Xe, e.memoizedState.cache)
        }
        return al(e, t, l)
    }

    function Pf(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Ze = !0;
            else {
                if (!Ic(e, l) && !(t.flags & 128)) return Ze = !1, ay(e, t, l);
                Ze = !!(e.flags & 131072)
            }
        else Ze = !1, ye && t.flags & 1048576 && Lo(t, Ui, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var n = t.elementType,
                        a = n._init;
                    if (n = a(n._payload), t.type = n, typeof n == "function") os(n) ? (e = nn(n, e), t.tag = 1, t = Jf(null, t, n, e, l)) : (t.tag = 0, t = Yc(null, t, n, e, l));
                    else {
                        if (n != null) {
                            if (a = n.$$typeof, a === k) {
                                t.tag = 11, t = Yf(null, t, n, e, l);
                                break e
                            } else if (a === ue) {
                                t.tag = 14, t = Qf(null, t, n, e, l);
                                break e
                            }
                        }
                        throw t = L(n) || n, Error(o(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Yc(e, t, t.type, t.pendingProps, l);
            case 1:
                return n = t.type, a = nn(n, t.pendingProps), Jf(e, t, n, a, l);
            case 3:
                e: {
                    if (mi(t, t.stateNode.containerInfo), e === null) throw Error(o(387));
                    var i = t.pendingProps;a = t.memoizedState,
                    n = a.element,
                    ts(e, t),
                    Ga(t, i, null, l);
                    var f = t.memoizedState;
                    if (i = f.cache, Nl(t, Xe, i), i !== a.cache && Pc(t, [Xe], l, !0), Ba(), i = f.element, a.isDehydrated)
                        if (a = {
                                element: i,
                                isDehydrated: !1,
                                cache: f.cache
                            }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
                            t = $f(e, t, i, l);
                            break e
                        } else if (i !== n) {
                        n = Nt(Error(o(424)), t), Ta(n), t = $f(e, t, i, l);
                        break e
                    } else
                        for ($e = kt(t.stateNode.containerInfo.firstChild), ut = t, ye = !0, Gt = null, Zt = !0, l = Vo(t, null, i, l), t.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling;
                    else {
                        if (Ea(), i === n) {
                            t = al(e, t, l);
                            break e
                        }
                        Ie(e, t, i, l)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Ca(e, t), e === null ? (l = lh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = mu(pl.current).createElement(l), n[tt] = t, n[ot] = e, We(n, l, e), Ve(n), t.stateNode = n) : t.memoizedState = lh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return ku(t), e === null && ye && (n = t.stateNode = Pd(t.type, t.pendingProps, pl.current), ut = t, Zt = !0, $e = kt(n.firstChild)), n = t.pendingProps.children, e !== null || ye ? Ie(e, t, n, l) : t.child = Fl(t, null, n, l), Ca(e, t), t.child;
            case 5:
                return e === null && ye && ((a = n = $e) && (n = Cy(n, t.type, t.pendingProps, Zt), n !== null ? (t.stateNode = n, ut = t, $e = kt(n.firstChild), Zt = !1, a = !0) : a = !1), a || Wl(t)), ku(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Ls(a, i) ? n = null : f !== null && Ls(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Tc(e, t, W0, null, null, l), Pa._currentValue = a), Ca(e, t), Ie(e, t, n, l), t.child;
            case 6:
                return e === null && ye && ((e = l = $e) && (l = Uy(l, t.pendingProps, Zt), l !== null ? (t.stateNode = l, ut = t, $e = null, e = !0) : e = !1), e || Wl(t)), null;
            case 13:
                return If(e, t, l);
            case 4:
                return mi(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Fl(t, null, n, l) : Ie(e, t, n, l), t.child;
            case 11:
                return Yf(e, t, t.type, t.pendingProps, l);
            case 7:
                return Ie(e, t, t.pendingProps, l), t.child;
            case 8:
                return Ie(e, t, t.pendingProps.children, l), t.child;
            case 12:
                return Ie(e, t, t.pendingProps.children, l), t.child;
            case 10:
                return n = t.pendingProps, Nl(t, t.type, n.value), Ie(e, t, n.children, l), t.child;
            case 9:
                return a = t.type._context, n = t.pendingProps.children, un(t), a = lt(a), n = n(a), t.flags |= 1, Ie(e, t, n, l), t.child;
            case 14:
                return Qf(e, t, t.type, t.pendingProps, l);
            case 15:
                return Xf(e, t, t.type, t.pendingProps, l);
            case 19:
                return Ff(e, t, l);
            case 22:
                return Vf(e, t, l);
            case 24:
                return un(t), n = lt(Xe), e === null ? (a = jc(), a === null && (a = Ee, i = bc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
                    parent: n,
                    cache: a
                }, es(t), Nl(t, Xe, a)) : (e.lanes & l && (ts(e, t), Ga(t, null, null, l), Ba()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
                    parent: n,
                    cache: n
                }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Nl(t, Xe, n)) : (n = i.cache, Nl(t, Xe, n), n !== a.cache && Pc(t, [Xe], l, !0))), Ie(e, t, t.pendingProps.children, l), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    var Wc = ve(null),
        an = null,
        il = null;

    function Nl(e, t, l) {
        Me(Wc, t._currentValue), t._currentValue = l
    }

    function ul(e) {
        e._currentValue = Wc.current, He(Wc)
    }

    function Fc(e, t, l) {
        for (; e !== null;) {
            var n = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
            e = e.return
        }
    }

    function Pc(e, t, l, n) {
        var a = e.child;
        for (a !== null && (a.return = e); a !== null;) {
            var i = a.dependencies;
            if (i !== null) {
                var f = a.child;
                i = i.firstContext;
                e: for (; i !== null;) {
                    var h = i;
                    i = a;
                    for (var b = 0; b < t.length; b++)
                        if (h.context === t[b]) {
                            i.lanes |= l, h = i.alternate, h !== null && (h.lanes |= l), Fc(i.return, l, e), n || (f = null);
                            break e
                        } i = h.next
                }
            } else if (a.tag === 18) {
                if (f = a.return, f === null) throw Error(o(341));
                f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), Fc(f, l, e), f = null
            } else f = a.child;
            if (f !== null) f.return = a;
            else
                for (f = a; f !== null;) {
                    if (f === e) {
                        f = null;
                        break
                    }
                    if (a = f.sibling, a !== null) {
                        a.return = f.return, f = a;
                        break
                    }
                    f = f.return
                }
            a = f
        }
    }

    function Ua(e, t, l, n) {
        e = null;
        for (var a = t, i = !1; a !== null;) {
            if (!i) {
                if (a.flags & 524288) i = !0;
                else if (a.flags & 262144) break
            }
            if (a.tag === 10) {
                var f = a.alternate;
                if (f === null) throw Error(o(387));
                if (f = f.memoizedProps, f !== null) {
                    var h = a.type;
                    vt(a.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h])
                }
            } else if (a === hi.current) {
                if (f = a.alternate, f === null) throw Error(o(387));
                f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Pa) : e = [Pa])
            }
            a = a.return
        }
        e !== null && Pc(t, e, l, n), t.flags |= 262144
    }

    function Fi(e) {
        for (e = e.firstContext; e !== null;) {
            if (!vt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function un(e) {
        an = e, il = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function lt(e) {
        return ed(an, e)
    }

    function Pi(e, t) {
        return an === null && un(e), ed(e, t)
    }

    function ed(e, t) {
        var l = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, il === null) {
            if (e === null) throw Error(o(308));
            il = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else il = il.next = t;
        return l
    }
    var Ml = !1;

    function es(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function ts(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function Ol(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function _l(e, t, l) {
        var n = e.updateQueue;
        if (n === null) return null;
        if (n = n.shared, Re & 2) {
            var a = n.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = zi(e), Co(e, null, l), t
        }
        return wi(e, n, t, l), zi(e)
    }

    function La(e, t, l) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194176) !== 0)) {
            var n = t.lanes;
            n &= e.pendingLanes, l |= n, t.lanes = l, qr(e, l)
        }
    }

    function ls(e, t) {
        var l = e.updateQueue,
            n = e.alternate;
        if (n !== null && (n = n.updateQueue, l === n)) {
            var a = null,
                i = null;
            if (l = l.firstBaseUpdate, l !== null) {
                do {
                    var f = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    i === null ? a = i = f : i = i.next = f, l = l.next
                } while (l !== null);
                i === null ? a = i = t : i = i.next = t
            } else a = i = t;
            l = {
                baseState: n.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: n.shared,
                callbacks: n.callbacks
            }, e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t
    }
    var ns = !1;

    function Ba() {
        if (ns) {
            var e = Cn;
            if (e !== null) throw e
        }
    }

    function Ga(e, t, l, n) {
        ns = !1;
        var a = e.updateQueue;
        Ml = !1;
        var i = a.firstBaseUpdate,
            f = a.lastBaseUpdate,
            h = a.shared.pending;
        if (h !== null) {
            a.shared.pending = null;
            var b = h,
                T = b.next;
            b.next = null, f === null ? i = T : f.next = T, f = b;
            var R = e.alternate;
            R !== null && (R = R.updateQueue, h = R.lastBaseUpdate, h !== f && (h === null ? R.firstBaseUpdate = T : h.next = T, R.lastBaseUpdate = b))
        }
        if (i !== null) {
            var U = a.baseState;
            f = 0, R = T = b = null, h = i;
            do {
                var M = h.lane & -536870913,
                    O = M !== h.lane;
                if (O ? (me & M) === M : (n & M) === M) {
                    M !== 0 && M === zn && (ns = !0), R !== null && (R = R.next = {
                        lane: 0,
                        tag: h.tag,
                        payload: h.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var J = e,
                            ne = h;M = t;
                        var Ce = l;
                        switch (ne.tag) {
                            case 1:
                                if (J = ne.payload, typeof J == "function") {
                                    U = J.call(Ce, U, M);
                                    break e
                                }
                                U = J;
                                break e;
                            case 3:
                                J.flags = J.flags & -65537 | 128;
                            case 0:
                                if (J = ne.payload, M = typeof J == "function" ? J.call(Ce, U, M) : J, M == null) break e;
                                U = Z({}, U, M);
                                break e;
                            case 2:
                                Ml = !0
                        }
                    }
                    M = h.callback, M !== null && (e.flags |= 64, O && (e.flags |= 8192), O = a.callbacks, O === null ? a.callbacks = [M] : O.push(M))
                } else O = {
                    lane: M,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                }, R === null ? (T = R = O, b = U) : R = R.next = O, f |= M;
                if (h = h.next, h === null) {
                    if (h = a.shared.pending, h === null) break;
                    O = h, h = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null
                }
            } while (!0);
            R === null && (b = U), a.baseState = b, a.firstBaseUpdate = T, a.lastBaseUpdate = R, i === null && (a.shared.lanes = 0), Ul |= f, e.lanes = f, e.memoizedState = U
        }
    }

    function td(e, t) {
        if (typeof e != "function") throw Error(o(191, e));
        e.call(t)
    }

    function ld(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null, e = 0; e < l.length; e++) td(l[e], t)
    }

    function Ha(e, t) {
        try {
            var l = t.updateQueue,
                n = l !== null ? l.lastEffect : null;
            if (n !== null) {
                var a = n.next;
                l = a;
                do {
                    if ((l.tag & e) === e) {
                        n = void 0;
                        var i = l.create,
                            f = l.inst;
                        n = i(), f.destroy = n
                    }
                    l = l.next
                } while (l !== a)
            }
        } catch (h) {
            Se(t, t.return, h)
        }
    }

    function Rl(e, t, l) {
        try {
            var n = t.updateQueue,
                a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var i = a.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        var f = n.inst,
                            h = f.destroy;
                        if (h !== void 0) {
                            f.destroy = void 0, a = t;
                            var b = l;
                            try {
                                h()
                            } catch (T) {
                                Se(a, b, T)
                            }
                        }
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (T) {
            Se(t, t.return, T)
        }
    }

    function nd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                ld(t, l)
            } catch (n) {
                Se(e, e.return, n)
            }
        }
    }

    function ad(e, t, l) {
        l.props = nn(e.type, e.memoizedProps), l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (n) {
            Se(e, t, n)
        }
    }

    function cn(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                var n = e.stateNode;
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = n;
                        break;
                    default:
                        a = n
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a
            }
        } catch (i) {
            Se(e, t, i)
        }
    }

    function pt(e, t) {
        var l = e.ref,
            n = e.refCleanup;
        if (l !== null)
            if (typeof n == "function") try {
                n()
            } catch (a) {
                Se(e, t, a)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof l == "function") try {
                l(null)
            } catch (a) {
                Se(e, t, a)
            } else l.current = null
    }

    function id(e) {
        var t = e.type,
            l = e.memoizedProps,
            n = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    l.autoFocus && n.focus();
                    break e;
                case "img":
                    l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet)
            }
        }
        catch (a) {
            Se(e, e.return, a)
        }
    }

    function ud(e, t, l) {
        try {
            var n = e.stateNode;
            Oy(n, e.type, l, t), n[ot] = t
        } catch (a) {
            Se(e, e.return, a)
        }
    }

    function cd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    }

    function as(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || cd(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function is(e, t, l) {
        var n = e.tag;
        if (n === 5 || n === 6) e = e.stateNode, t ? l.nodeType === 8 ? l.parentNode.insertBefore(e, t) : l.insertBefore(e, t) : (l.nodeType === 8 ? (t = l.parentNode, t.insertBefore(e, l)) : (t = l, t.appendChild(e)), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = hu));
        else if (n !== 4 && n !== 27 && (e = e.child, e !== null))
            for (is(e, t, l), e = e.sibling; e !== null;) is(e, t, l), e = e.sibling
    }

    function eu(e, t, l) {
        var n = e.tag;
        if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (n !== 4 && n !== 27 && (e = e.child, e !== null))
            for (eu(e, t, l), e = e.sibling; e !== null;) eu(e, t, l), e = e.sibling
    }
    var cl = !1,
        we = !1,
        us = !1,
        sd = typeof WeakSet == "function" ? WeakSet : Set,
        Ke = null,
        rd = !1;

    function iy(e, t) {
        if (e = e.containerInfo, Cs = bu, e = Ao(e), sc(e)) {
            if ("selectionStart" in e) var l = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                l = (l = e.ownerDocument) && l.defaultView || window;
                var n = l.getSelection && l.getSelection();
                if (n && n.rangeCount !== 0) {
                    l = n.anchorNode;
                    var a = n.anchorOffset,
                        i = n.focusNode;
                    n = n.focusOffset;
                    try {
                        l.nodeType, i.nodeType
                    } catch {
                        l = null;
                        break e
                    }
                    var f = 0,
                        h = -1,
                        b = -1,
                        T = 0,
                        R = 0,
                        U = e,
                        M = null;
                    t: for (;;) {
                        for (var O; U !== l || a !== 0 && U.nodeType !== 3 || (h = f + a), U !== i || n !== 0 && U.nodeType !== 3 || (b = f + n), U.nodeType === 3 && (f += U.nodeValue.length), (O = U.firstChild) !== null;) M = U, U = O;
                        for (;;) {
                            if (U === e) break t;
                            if (M === l && ++T === a && (h = f), M === i && ++R === n && (b = f), (O = U.nextSibling) !== null) break;
                            U = M, M = U.parentNode
                        }
                        U = O
                    }
                    l = h === -1 || b === -1 ? null : {
                        start: h,
                        end: b
                    }
                } else l = null
            }
            l = l || {
                start: 0,
                end: 0
            }
        } else l = null;
        for (Us = {
                focusedElem: e,
                selectionRange: l
            }, bu = !1, Ke = t; Ke !== null;)
            if (t = Ke, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ke = e;
            else
                for (; Ke !== null;) {
                    switch (t = Ke, i = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (e & 1024 && i !== null) {
                                e = void 0, l = t, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                                try {
                                    var J = nn(l.type, a, l.elementType === l.type);
                                    e = n.getSnapshotBeforeUpdate(J, i), n.__reactInternalSnapshotBeforeUpdate = e
                                } catch (ne) {
                                    Se(l, l.return, ne)
                                }
                            }
                            break;
                        case 3:
                            if (e & 1024) {
                                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Hs(e);
                                else if (l === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Hs(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if (e & 1024) throw Error(o(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Ke = e;
                        break
                    }
                    Ke = t.return
                }
        return J = rd, rd = !1, J
    }

    function od(e, t, l) {
        var n = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                rl(e, l), n & 4 && Ha(5, l);
                break;
            case 1:
                if (rl(e, l), n & 4)
                    if (e = l.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (h) {
                        Se(l, l.return, h)
                    } else {
                        var a = nn(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (h) {
                            Se(l, l.return, h)
                        }
                    }
                n & 64 && nd(l), n & 512 && cn(l, l.return);
                break;
            case 3:
                if (rl(e, l), n & 64 && (n = l.updateQueue, n !== null)) {
                    if (e = null, l.child !== null) switch (l.child.tag) {
                        case 27:
                        case 5:
                            e = l.child.stateNode;
                            break;
                        case 1:
                            e = l.child.stateNode
                    }
                    try {
                        ld(n, e)
                    } catch (h) {
                        Se(l, l.return, h)
                    }
                }
                break;
            case 26:
                rl(e, l), n & 512 && cn(l, l.return);
                break;
            case 27:
            case 5:
                rl(e, l), t === null && n & 4 && id(l), n & 512 && cn(l, l.return);
                break;
            case 12:
                rl(e, l);
                break;
            case 13:
                rl(e, l), n & 4 && hd(e, l);
                break;
            case 22:
                if (a = l.memoizedState !== null || cl, !a) {
                    t = t !== null && t.memoizedState !== null || we;
                    var i = cl,
                        f = we;
                    cl = a, (we = t) && !f ? wl(e, l, (l.subtreeFlags & 8772) !== 0) : rl(e, l), cl = i, we = f
                }
                n & 512 && (l.memoizedProps.mode === "manual" ? cn(l, l.return) : pt(l, l.return));
                break;
            default:
                rl(e, l)
        }
    }

    function fd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Zu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Ye = null,
        xt = !1;

    function sl(e, t, l) {
        for (l = l.child; l !== null;) dd(e, t, l), l = l.sibling
    }

    function dd(e, t, l) {
        if (yt && typeof yt.onCommitFiberUnmount == "function") try {
            yt.onCommitFiberUnmount(sa, l)
        } catch {}
        switch (l.tag) {
            case 26:
                we || pt(l, t), sl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                break;
            case 27:
                we || pt(l, t);
                var n = Ye,
                    a = xt;
                for (Ye = l.stateNode, sl(e, t, l), l = l.stateNode, t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
                Zu(l), Ye = n, xt = a;
                break;
            case 5:
                we || pt(l, t);
            case 6:
                a = Ye;
                var i = xt;
                if (Ye = null, sl(e, t, l), Ye = a, xt = i, Ye !== null)
                    if (xt) try {
                        e = Ye, n = l.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)
                    } catch (f) {
                        Se(l, t, f)
                    } else try {
                        Ye.removeChild(l.stateNode)
                    } catch (f) {
                        Se(l, t, f)
                    }
                break;
            case 18:
                Ye !== null && (xt ? (t = Ye, l = l.stateNode, t.nodeType === 8 ? Gs(t.parentNode, l) : t.nodeType === 1 && Gs(t, l), ni(t)) : Gs(Ye, l.stateNode));
                break;
            case 4:
                n = Ye, a = xt, Ye = l.stateNode.containerInfo, xt = !0, sl(e, t, l), Ye = n, xt = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                we || Rl(2, l, t), we || Rl(4, l, t), sl(e, t, l);
                break;
            case 1:
                we || (pt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && ad(l, t, n)), sl(e, t, l);
                break;
            case 21:
                sl(e, t, l);
                break;
            case 22:
                we || pt(l, t), we = (n = we) || l.memoizedState !== null, sl(e, t, l), we = n;
                break;
            default:
                sl(e, t, l)
        }
    }

    function hd(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            ni(e)
        } catch (l) {
            Se(t, t.return, l)
        }
    }

    function uy(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new sd), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new sd), t;
            default:
                throw Error(o(435, e.tag))
        }
    }

    function cs(e, t) {
        var l = uy(e);
        t.forEach(function(n) {
            var a = xy.bind(null, e, n);
            l.has(n) || (l.add(n), n.then(a, a))
        })
    }

    function Rt(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var n = 0; n < l.length; n++) {
                var a = l[n],
                    i = e,
                    f = t,
                    h = f;
                e: for (; h !== null;) {
                    switch (h.tag) {
                        case 27:
                        case 5:
                            Ye = h.stateNode, xt = !1;
                            break e;
                        case 3:
                            Ye = h.stateNode.containerInfo, xt = !0;
                            break e;
                        case 4:
                            Ye = h.stateNode.containerInfo, xt = !0;
                            break e
                    }
                    h = h.return
                }
                if (Ye === null) throw Error(o(160));
                dd(i, f, a), Ye = null, xt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) md(t, e), t = t.sibling
    }
    var Ht = null;

    function md(e, t) {
        var l = e.alternate,
            n = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Rt(t, e), wt(e), n & 4 && (Rl(3, e, e.return), Ha(3, e), Rl(5, e, e.return));
                break;
            case 1:
                Rt(t, e), wt(e), n & 512 && (we || l === null || pt(l, l.return)), n & 64 && cl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                break;
            case 26:
                var a = Ht;
                if (Rt(t, e), wt(e), n & 512 && (we || l === null || pt(l, l.return)), n & 4) {
                    var i = l !== null ? l.memoizedState : null;
                    if (n = e.memoizedState, l === null)
                        if (n === null)
                            if (e.stateNode === null) {
                                e: {
                                    n = e.type,
                                    l = e.memoizedProps,
                                    a = a.ownerDocument || a;t: switch (n) {
                                        case "title":
                                            i = a.getElementsByTagName("title")[0], (!i || i[fa] || i[tt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), We(i, n, l), i[tt] = e, Ve(i), n = i;
                                            break e;
                                        case "link":
                                            var f = ih("link", "href", a).get(n + (l.href || ""));
                                            if (f) {
                                                for (var h = 0; h < f.length; h++)
                                                    if (i = f[h], i.getAttribute("href") === (l.href == null ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                        f.splice(h, 1);
                                                        break t
                                                    }
                                            }
                                            i = a.createElement(n), We(i, n, l), a.head.appendChild(i);
                                            break;
                                        case "meta":
                                            if (f = ih("meta", "content", a).get(n + (l.content || ""))) {
                                                for (h = 0; h < f.length; h++)
                                                    if (i = f[h], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                        f.splice(h, 1);
                                                        break t
                                                    }
                                            }
                                            i = a.createElement(n), We(i, n, l), a.head.appendChild(i);
                                            break;
                                        default:
                                            throw Error(o(468, n))
                                    }
                                    i[tt] = e,
                                    Ve(i),
                                    n = i
                                }
                                e.stateNode = n
                            }
                    else uh(a, e.type, e.stateNode);
                    else e.stateNode = ah(a, n, e.memoizedProps);
                    else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? uh(a, e.type, e.stateNode) : ah(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && ud(e, e.memoizedProps, l.memoizedProps)
                }
                break;
            case 27:
                if (n & 4 && e.alternate === null) {
                    a = e.stateNode, i = e.memoizedProps;
                    try {
                        for (var b = a.firstChild; b;) {
                            var T = b.nextSibling,
                                R = b.nodeName;
                            b[fa] || R === "HEAD" || R === "BODY" || R === "SCRIPT" || R === "STYLE" || R === "LINK" && b.rel.toLowerCase() === "stylesheet" || a.removeChild(b), b = T
                        }
                        for (var U = e.type, M = a.attributes; M.length;) a.removeAttributeNode(M[0]);
                        We(a, U, i), a[tt] = e, a[ot] = i
                    } catch (J) {
                        Se(e, e.return, J)
                    }
                }
            case 5:
                if (Rt(t, e), wt(e), n & 512 && (we || l === null || pt(l, l.return)), e.flags & 32) {
                    a = e.stateNode;
                    try {
                        Sn(a, "")
                    } catch (J) {
                        Se(e, e.return, J)
                    }
                }
                n & 4 && e.stateNode != null && (a = e.memoizedProps, ud(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (us = !0);
                break;
            case 6:
                if (Rt(t, e), wt(e), n & 4) {
                    if (e.stateNode === null) throw Error(o(162));
                    n = e.memoizedProps, l = e.stateNode;
                    try {
                        l.nodeValue = n
                    } catch (J) {
                        Se(e, e.return, J)
                    }
                }
                break;
            case 3:
                if (vu = null, a = Ht, Ht = yu(t.containerInfo), Rt(t, e), Ht = a, wt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                    ni(t.containerInfo)
                } catch (J) {
                    Se(e, e.return, J)
                }
                us && (us = !1, yd(e));
                break;
            case 4:
                n = Ht, Ht = yu(e.stateNode.containerInfo), Rt(t, e), wt(e), Ht = n;
                break;
            case 12:
                Rt(t, e), wt(e);
                break;
            case 13:
                Rt(t, e), wt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (gs = Vt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, cs(e, n)));
                break;
            case 22:
                if (n & 512 && (we || l === null || pt(l, l.return)), b = e.memoizedState !== null, T = l !== null && l.memoizedState !== null, R = cl, U = we, cl = R || b, we = U || T, Rt(t, e), we = U, cl = R, wt(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & 2, n & 8192 && (t._visibility = b ? t._visibility & -2 : t._visibility | 1, b && (t = cl || we, l === null || T || t || Gn(e)), e.memoizedProps === null || e.memoizedProps.mode !== "manual")) e: for (l = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                        if (l === null) {
                            T = l = t;
                            try {
                                if (a = T.stateNode, b) i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    f = T.stateNode, h = T.memoizedProps.style;
                                    var O = h != null && h.hasOwnProperty("display") ? h.display : null;
                                    f.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim()
                                }
                            } catch (J) {
                                Se(T, T.return, J)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            T = t;
                            try {
                                T.stateNode.nodeValue = b ? "" : T.memoizedProps
                            } catch (J) {
                                Se(T, T.return, J)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        l === t && (l = null), t = t.return
                    }
                    l === t && (l = null), t.sibling.return = t.return, t = t.sibling
                }
                n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, cs(e, l))));
                break;
            case 19:
                Rt(t, e), wt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, cs(e, n)));
                break;
            case 21:
                break;
            default:
                Rt(t, e), wt(e)
        }
    }

    function wt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                if (e.tag !== 27) {
                    e: {
                        for (var l = e.return; l !== null;) {
                            if (cd(l)) {
                                var n = l;
                                break e
                            }
                            l = l.return
                        }
                        throw Error(o(160))
                    }
                    switch (n.tag) {
                        case 27:
                            var a = n.stateNode,
                                i = as(e);
                            eu(e, i, a);
                            break;
                        case 5:
                            var f = n.stateNode;
                            n.flags & 32 && (Sn(f, ""), n.flags &= -33);
                            var h = as(e);
                            eu(e, h, f);
                            break;
                        case 3:
                        case 4:
                            var b = n.stateNode.containerInfo,
                                T = as(e);
                            is(e, T, b);
                            break;
                        default:
                            throw Error(o(161))
                    }
                }
            } catch (R) {
                Se(e, e.return, R)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function yd(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                yd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function rl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) od(e, t.alternate, t), t = t.sibling
    }

    function Gn(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Rl(4, t, t.return), Gn(t);
                    break;
                case 1:
                    pt(t, t.return);
                    var l = t.stateNode;
                    typeof l.componentWillUnmount == "function" && ad(t, t.return, l), Gn(t);
                    break;
                case 26:
                case 27:
                case 5:
                    pt(t, t.return), Gn(t);
                    break;
                case 22:
                    pt(t, t.return), t.memoizedState === null && Gn(t);
                    break;
                default:
                    Gn(t)
            }
            e = e.sibling
        }
    }

    function wl(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var n = t.alternate,
                a = e,
                i = t,
                f = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    wl(a, i, l), Ha(4, i);
                    break;
                case 1:
                    if (wl(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
                        a.componentDidMount()
                    } catch (T) {
                        Se(n, n.return, T)
                    }
                    if (n = i, a = n.updateQueue, a !== null) {
                        var h = n.stateNode;
                        try {
                            var b = a.shared.hiddenCallbacks;
                            if (b !== null)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < b.length; a++) td(b[a], h)
                        } catch (T) {
                            Se(n, n.return, T)
                        }
                    }
                    l && f & 64 && nd(i), cn(i, i.return);
                    break;
                case 26:
                case 27:
                case 5:
                    wl(a, i, l), l && n === null && f & 4 && id(i), cn(i, i.return);
                    break;
                case 12:
                    wl(a, i, l);
                    break;
                case 13:
                    wl(a, i, l), l && f & 4 && hd(a, i);
                    break;
                case 22:
                    i.memoizedState === null && wl(a, i, l), cn(i, i.return);
                    break;
                default:
                    wl(a, i, l)
            }
            t = t.sibling
        }
    }

    function ss(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Oa(l))
    }

    function rs(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oa(e))
    }

    function zl(e, t, l, n) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) gd(e, t, l, n), t = t.sibling
    }

    function gd(e, t, l, n) {
        var a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                zl(e, t, l, n), a & 2048 && Ha(9, t);
                break;
            case 3:
                zl(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oa(e)));
                break;
            case 12:
                if (a & 2048) {
                    zl(e, t, l, n), e = t.stateNode;
                    try {
                        var i = t.memoizedProps,
                            f = i.id,
                            h = i.onPostCommit;
                        typeof h == "function" && h(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (b) {
                        Se(t, t.return, b)
                    }
                } else zl(e, t, l, n);
                break;
            case 23:
                break;
            case 22:
                i = t.stateNode, t.memoizedState !== null ? i._visibility & 4 ? zl(e, t, l, n) : ka(e, t) : i._visibility & 4 ? zl(e, t, l, n) : (i._visibility |= 4, Hn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && ss(t.alternate, t);
                break;
            case 24:
                zl(e, t, l, n), a & 2048 && rs(t.alternate, t);
                break;
            default:
                zl(e, t, l, n)
        }
    }

    function Hn(e, t, l, n, a) {
        for (a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var i = e,
                f = t,
                h = l,
                b = n,
                T = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Hn(i, f, h, b, a), Ha(8, f);
                    break;
                case 23:
                    break;
                case 22:
                    var R = f.stateNode;
                    f.memoizedState !== null ? R._visibility & 4 ? Hn(i, f, h, b, a) : ka(i, f) : (R._visibility |= 4, Hn(i, f, h, b, a)), a && T & 2048 && ss(f.alternate, f);
                    break;
                case 24:
                    Hn(i, f, h, b, a), a && T & 2048 && rs(f.alternate, f);
                    break;
                default:
                    Hn(i, f, h, b, a)
            }
            t = t.sibling
        }
    }

    function ka(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var l = e,
                    n = t,
                    a = n.flags;
                switch (n.tag) {
                    case 22:
                        ka(l, n), a & 2048 && ss(n.alternate, n);
                        break;
                    case 24:
                        ka(l, n), a & 2048 && rs(n.alternate, n);
                        break;
                    default:
                        ka(l, n)
                }
                t = t.sibling
            }
    }
    var qa = 8192;

    function kn(e) {
        if (e.subtreeFlags & qa)
            for (e = e.child; e !== null;) vd(e), e = e.sibling
    }

    function vd(e) {
        switch (e.tag) {
            case 26:
                kn(e), e.flags & qa && e.memoizedState !== null && Jy(Ht, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                kn(e);
                break;
            case 3:
            case 4:
                var t = Ht;
                Ht = yu(e.stateNode.containerInfo), kn(e), Ht = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = qa, qa = 16777216, kn(e), qa = t) : kn(e));
                break;
            default:
                kn(e)
        }
    }

    function pd(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function Ya(e) {
        var t = e.deletions;
        if (e.flags & 16) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var n = t[l];
                    Ke = n, bd(n, e)
                }
            pd(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) xd(e), e = e.sibling
    }

    function xd(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ya(e), e.flags & 2048 && Rl(9, e, e.return);
                break;
            case 3:
                Ya(e);
                break;
            case 12:
                Ya(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, tu(e)) : Ya(e);
                break;
            default:
                Ya(e)
        }
    }

    function tu(e) {
        var t = e.deletions;
        if (e.flags & 16) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var n = t[l];
                    Ke = n, bd(n, e)
                }
            pd(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    Rl(8, t, t.return), tu(t);
                    break;
                case 22:
                    l = t.stateNode, l._visibility & 4 && (l._visibility &= -5, tu(t));
                    break;
                default:
                    tu(t)
            }
            e = e.sibling
        }
    }

    function bd(e, t) {
        for (; Ke !== null;) {
            var l = Ke;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Rl(8, l, t);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var n = l.memoizedState.cachePool.pool;
                        n != null && n.refCount++
                    }
                    break;
                case 24:
                    Oa(l.memoizedState.cache)
            }
            if (n = l.child, n !== null) n.return = l, Ke = n;
            else e: for (l = e; Ke !== null;) {
                n = Ke;
                var a = n.sibling,
                    i = n.return;
                if (fd(n), n === l) {
                    Ke = null;
                    break e
                }
                if (a !== null) {
                    a.return = i, Ke = a;
                    break e
                }
                Ke = i
            }
        }
    }

    function cy(e, t, l, n) {
        this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function zt(e, t, l, n) {
        return new cy(e, t, l, n)
    }

    function os(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function Cl(e, t) {
        var l = e.alternate;
        return l === null ? (l = zt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 31457280, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l
    }

    function Sd(e, t) {
        e.flags &= 31457282;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function lu(e, t, l, n, a, i) {
        var f = 0;
        if (n = e, typeof e == "function") os(e) && (f = 1);
        else if (typeof e == "string") f = Zy(e, l, Xt.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case v:
                return sn(l.children, a, i, t);
            case y:
                f = 8, a |= 24;
                break;
            case S:
                return e = zt(12, l, t, a | 2), e.elementType = S, e.lanes = i, e;
            case q:
                return e = zt(13, l, t, a), e.elementType = q, e.lanes = i, e;
            case K:
                return e = zt(19, l, t, a), e.elementType = K, e.lanes = i, e;
            case ee:
                return jd(l, a, i, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case D:
                    case G:
                        f = 10;
                        break e;
                    case w:
                        f = 9;
                        break e;
                    case k:
                        f = 11;
                        break e;
                    case ue:
                        f = 14;
                        break e;
                    case P:
                        f = 16, n = null;
                        break e
                }
                f = 29, l = Error(o(130, e === null ? "null" : typeof e, "")), n = null
        }
        return t = zt(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t
    }

    function sn(e, t, l, n) {
        return e = zt(7, e, n, t), e.lanes = l, e
    }

    function jd(e, t, l, n) {
        e = zt(22, e, n, t), e.elementType = ee, e.lanes = l;
        var a = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function() {
                var i = a._current;
                if (i === null) throw Error(o(456));
                if (!(a._pendingVisibility & 2)) {
                    var f = jl(i, 2);
                    f !== null && (a._pendingVisibility |= 2, ct(f, i, 2))
                }
            },
            attach: function() {
                var i = a._current;
                if (i === null) throw Error(o(456));
                if (a._pendingVisibility & 2) {
                    var f = jl(i, 2);
                    f !== null && (a._pendingVisibility &= -3, ct(f, i, 2))
                }
            }
        };
        return e.stateNode = a, e
    }

    function fs(e, t, l) {
        return e = zt(6, e, null, t), e.lanes = l, e
    }

    function ds(e, t, l) {
        return t = zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function ol(e) {
        e.flags |= 4
    }

    function Ed(e, t) {
        if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
        else if (e.flags |= 16777216, !ch(t)) {
            if (t = _t.current, t !== null && ((me & 4194176) === me ? Kt !== null : (me & 62914560) !== me && !(me & 536870912) || t !== Kt)) throw Da = vc, Ho;
            e.flags |= 8192
        }
    }

    function nu(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Hr() : 536870912, e.lanes |= t, Yn |= t)
    }

    function Qa(e, t) {
        if (!ye) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null;) t.alternate !== null && (l = t), t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var n = null; l !== null;) l.alternate !== null && (n = l), l = l.sibling;
                n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
    }

    function _e(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            l = 0,
            n = 0;
        if (t)
            for (var a = e.child; a !== null;) l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 31457280, n |= a.flags & 31457280, a.return = e, a = a.sibling;
        else
            for (a = e.child; a !== null;) l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
        return e.subtreeFlags |= n, e.childLanes = l, t
    }

    function sy(e, t, l) {
        var n = t.pendingProps;
        switch (yc(t), t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return _e(t), null;
            case 1:
                return _e(t), null;
            case 3:
                return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ul(Xe), yn(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ja(t) ? ol(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Gt !== null && (bs(Gt), Gt = null))), _e(t), null;
            case 26:
                return l = t.memoizedState, e === null ? (ol(t), l !== null ? (_e(t), Ed(t, l)) : (_e(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (ol(t), _e(t), Ed(t, l)) : (_e(t), t.flags &= -16777217) : (e.memoizedProps !== n && ol(t), _e(t), t.flags &= -16777217), null;
            case 27:
                yi(t), l = pl.current;
                var a = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== n && ol(t);
                else {
                    if (!n) {
                        if (t.stateNode === null) throw Error(o(166));
                        return _e(t), null
                    }
                    e = Xt.current, ja(t) ? Bo(t) : (e = Pd(a, n, l), t.stateNode = e, ol(t))
                }
                return _e(t), null;
            case 5:
                if (yi(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && ol(t);
                else {
                    if (!n) {
                        if (t.stateNode === null) throw Error(o(166));
                        return _e(t), null
                    }
                    if (e = Xt.current, ja(t)) Bo(t);
                    else {
                        switch (a = mu(pl.current), e) {
                            case 1:
                                e = a.createElementNS("http://www.w3.org/2000/svg", l);
                                break;
                            case 2:
                                e = a.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                break;
                            default:
                                switch (l) {
                                    case "svg":
                                        e = a.createElementNS("http://www.w3.org/2000/svg", l);
                                        break;
                                    case "math":
                                        e = a.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                        break;
                                    case "script":
                                        e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof n.is == "string" ? a.createElement("select", {
                                            is: n.is
                                        }) : a.createElement("select"), n.multiple ? e.multiple = !0 : n.size && (e.size = n.size);
                                        break;
                                    default:
                                        e = typeof n.is == "string" ? a.createElement(l, {
                                            is: n.is
                                        }) : a.createElement(l)
                                }
                        }
                        e[tt] = t, e[ot] = n;
                        e: for (a = t.child; a !== null;) {
                            if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
                            else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                                a.child.return = a, a = a.child;
                                continue
                            }
                            if (a === t) break e;
                            for (; a.sibling === null;) {
                                if (a.return === null || a.return === t) break e;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                        t.stateNode = e;
                        e: switch (We(e, l, n), l) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!n.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && ol(t)
                    }
                }
                return _e(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== n && ol(t);
                else {
                    if (typeof n != "string" && t.stateNode === null) throw Error(o(166));
                    if (e = pl.current, ja(t)) {
                        if (e = t.stateNode, l = t.memoizedProps, n = null, a = ut, a !== null) switch (a.tag) {
                            case 27:
                            case 5:
                                n = a.memoizedProps
                        }
                        e[tt] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Kd(e.nodeValue, l)), e || Wl(t)
                    } else e = mu(e).createTextNode(n), e[tt] = t, t.stateNode = e
                }
                return _e(t), null;
            case 13:
                if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (a = ja(t), n !== null && n.dehydrated !== null) {
                        if (e === null) {
                            if (!a) throw Error(o(318));
                            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
                            a[tt] = t
                        } else Ea(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        _e(t), a = !1
                    } else Gt !== null && (bs(Gt), Gt = null), a = !0;
                    if (!a) return t.flags & 256 ? (ll(t), t) : (ll(t), null)
                }
                if (ll(t), t.flags & 128) return t.lanes = l, t;
                if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                    n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                    var i = null;
                    n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)
                }
                return l !== e && l && (t.child.flags |= 8192), nu(t, t.updateQueue), _e(t), null;
            case 4:
                return yn(), e === null && Rs(t.stateNode.containerInfo), _e(t), null;
            case 10:
                return ul(t.type), _e(t), null;
            case 19:
                if (He(Qe), a = t.memoizedState, a === null) return _e(t), null;
                if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
                    if (n) Qa(a, !1);
                    else {
                        if (ze !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (i = ki(e), i !== null) {
                                    for (t.flags |= 128, Qa(a, !1), e = i.updateQueue, t.updateQueue = e, nu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;) Sd(l, e), l = l.sibling;
                                    return Me(Qe, Qe.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        a.tail !== null && Vt() > au && (t.flags |= 128, n = !0, Qa(a, !1), t.lanes = 4194304)
                    }
                else {
                    if (!n)
                        if (e = ki(i), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, nu(t, e), Qa(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ye) return _e(t), null
                        } else 2 * Vt() - a.renderingStartTime > au && l !== 536870912 && (t.flags |= 128, n = !0, Qa(a, !1), t.lanes = 4194304);
                    a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i)
                }
                return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Vt(), t.sibling = null, e = Qe.current, Me(Qe, n ? e & 1 | 2 : e & 1), t) : (_e(t), null);
            case 22:
            case 23:
                return ll(t), xc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? l & 536870912 && !(t.flags & 128) && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), l = t.updateQueue, l !== null && nu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && He(Pl), null;
            case 24:
                return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ul(Xe), _e(t), null;
            case 25:
                return null
        }
        throw Error(o(156, t.tag))
    }

    function ry(e, t) {
        switch (yc(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ul(Xe), yn(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return yi(t), null;
            case 13:
                if (ll(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(o(340));
                    Ea()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return He(Qe), null;
            case 4:
                return yn(), null;
            case 10:
                return ul(t.type), null;
            case 22:
            case 23:
                return ll(t), xc(), e !== null && He(Pl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return ul(Xe), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Td(e, t) {
        switch (yc(t), t.tag) {
            case 3:
                ul(Xe), yn();
                break;
            case 26:
            case 27:
            case 5:
                yi(t);
                break;
            case 4:
                yn();
                break;
            case 13:
                ll(t);
                break;
            case 19:
                He(Qe);
                break;
            case 10:
                ul(t.type);
                break;
            case 22:
            case 23:
                ll(t), xc(), e !== null && He(Pl);
                break;
            case 24:
                ul(Xe)
        }
    }
    var oy = {
            getCacheForType: function(e) {
                var t = lt(Xe),
                    l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l
            }
        },
        fy = typeof WeakMap == "function" ? WeakMap : Map,
        Re = 0,
        Ee = null,
        fe = null,
        me = 0,
        Te = 0,
        bt = null,
        fl = !1,
        qn = !1,
        hs = !1,
        dl = 0,
        ze = 0,
        Ul = 0,
        rn = 0,
        ms = 0,
        Ct = 0,
        Yn = 0,
        Xa = null,
        $t = null,
        ys = !1,
        gs = 0,
        au = 1 / 0,
        iu = null,
        Ll = null,
        uu = !1,
        on = null,
        Va = 0,
        vs = 0,
        ps = null,
        Za = 0,
        xs = null;

    function St() {
        if (Re & 2 && me !== 0) return me & -me;
        if (H.T !== null) {
            var e = zn;
            return e !== 0 ? e : Ns()
        }
        return Qr()
    }

    function Ad() {
        Ct === 0 && (Ct = !(me & 536870912) || ye ? Gr() : 536870912);
        var e = _t.current;
        return e !== null && (e.flags |= 32), Ct
    }

    function ct(e, t, l) {
        (e === Ee && Te === 2 || e.cancelPendingCommit !== null) && (Qn(e, 0), hl(e, me, Ct, !1)), oa(e, l), (!(Re & 2) || e !== Ee) && (e === Ee && (!(Re & 2) && (rn |= l), ze === 4 && hl(e, me, Ct, !1)), It(e))
    }

    function Dd(e, t, l) {
        if (Re & 6) throw Error(o(327));
        var n = !l && (t & 60) === 0 && (t & e.expiredLanes) === 0 || ra(e, t),
            a = n ? my(e, t) : Es(e, t, !0),
            i = n;
        do {
            if (a === 0) {
                qn && !n && hl(e, t, 0, !1);
                break
            } else if (a === 6) hl(e, t, 0, !fl);
            else {
                if (l = e.current.alternate, i && !dy(l)) {
                    a = Es(e, t, !1), i = !1;
                    continue
                }
                if (a === 2) {
                    if (i = t, e.errorRecoveryDisabledLanes & i) var f = 0;
                    else f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        t = f;
                        e: {
                            var h = e;a = Xa;
                            var b = h.current.memoizedState.isDehydrated;
                            if (b && (Qn(h, f).flags |= 256), f = Es(h, f, !1), f !== 2) {
                                if (hs && !b) {
                                    h.errorRecoveryDisabledLanes |= i, rn |= i, a = 4;
                                    break e
                                }
                                i = $t, $t = a, i !== null && bs(i)
                            }
                            a = f
                        }
                        if (i = !1, a !== 2) continue
                    }
                }
                if (a === 1) {
                    Qn(e, 0), hl(e, t, 0, !0);
                    break
                }
                e: {
                    switch (n = e, a) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((t & 4194176) === t) {
                                hl(n, t, Ct, !fl);
                                break e
                            }
                            break;
                        case 2:
                            $t = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if (n.finishedWork = l, n.finishedLanes = t, (t & 62914560) === t && (i = gs + 300 - Vt(), 10 < i)) {
                        if (hl(n, t, Ct, !fl), xi(n, 0) !== 0) break e;
                        n.timeoutHandle = Id(Nd.bind(null, n, l, $t, iu, ys, t, Ct, rn, Yn, fl, 2, -0, 0), i);
                        break e
                    }
                    Nd(n, l, $t, iu, ys, t, Ct, rn, Yn, fl, 0, -0, 0)
                }
            }
            break
        } while (!0);
        It(e)
    }

    function bs(e) {
        $t === null ? $t = e : $t.push.apply($t, e)
    }

    function Nd(e, t, l, n, a, i, f, h, b, T, R, U, M) {
        var O = t.subtreeFlags;
        if ((O & 8192 || (O & 16785408) === 16785408) && (Fa = {
                stylesheets: null,
                count: 0,
                unsuspend: Ky
            }, vd(t), t = $y(), t !== null)) {
            e.cancelPendingCommit = t(Cd.bind(null, e, l, n, a, f, h, b, 1, U, M)), hl(e, i, f, !T);
            return
        }
        Cd(e, l, n, a, f, h, b, R, U, M)
    }

    function dy(e) {
        for (var t = e;;) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
                for (var n = 0; n < l.length; n++) {
                    var a = l[n],
                        i = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!vt(i(), a)) return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
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

    function hl(e, t, l, n) {
        t &= ~ms, t &= ~rn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
        for (var a = t; 0 < a;) {
            var i = 31 - gt(a),
                f = 1 << i;
            n[i] = -1, a &= ~f
        }
        l !== 0 && kr(e, l, t)
    }

    function cu() {
        return Re & 6 ? !0 : (Ka(0), !1)
    }

    function Ss() {
        if (fe !== null) {
            if (Te === 0) var e = fe.return;
            else e = fe, il = an = null, Nc(e), Rn = null, Na = 0, e = fe;
            for (; e !== null;) Td(e.alternate, e), e = e.return;
            fe = null
        }
    }

    function Qn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1, Ry(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Ss(), Ee = e, fe = l = Cl(e.current, null), me = t, Te = 0, bt = null, fl = !1, qn = ra(e, t), hs = !1, Yn = Ct = ms = rn = Ul = ze = 0, $t = Xa = null, ys = !1, t & 8 && (t |= t & 32);
        var n = e.entangledLanes;
        if (n !== 0)
            for (e = e.entanglements, n &= t; 0 < n;) {
                var a = 31 - gt(n),
                    i = 1 << a;
                t |= e[a], n &= ~i
            }
        return dl = t, Ri(), l
    }

    function Md(e, t) {
        se = null, H.H = Jt, t === Aa ? (t = Yo(), Te = 3) : t === Ho ? (t = Yo(), Te = 4) : Te = t === qf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, bt = t, fe === null && (ze = 1, Wi(e, Nt(t, e.current)))
    }

    function Od() {
        var e = H.H;
        return H.H = Jt, e === null ? Jt : e
    }

    function _d() {
        var e = H.A;
        return H.A = oy, e
    }

    function js() {
        ze = 4, fl || (me & 4194176) !== me && _t.current !== null || (qn = !0), !(Ul & 134217727) && !(rn & 134217727) || Ee === null || hl(Ee, me, Ct, !1)
    }

    function Es(e, t, l) {
        var n = Re;
        Re |= 2;
        var a = Od(),
            i = _d();
        (Ee !== e || me !== t) && (iu = null, Qn(e, t)), t = !1;
        var f = ze;
        e: do try {
                if (Te !== 0 && fe !== null) {
                    var h = fe,
                        b = bt;
                    switch (Te) {
                        case 8:
                            Ss(), f = 6;
                            break e;
                        case 3:
                        case 2:
                        case 6:
                            _t.current === null && (t = !0);
                            var T = Te;
                            if (Te = 0, bt = null, Xn(e, h, b, T), l && qn) {
                                f = 0;
                                break e
                            }
                            break;
                        default:
                            T = Te, Te = 0, bt = null, Xn(e, h, b, T)
                    }
                }
                hy(), f = ze;
                break
            } catch (R) {
                Md(e, R)
            }
            while (!0);
            return t && e.shellSuspendCounter++, il = an = null, Re = n, H.H = a, H.A = i, fe === null && (Ee = null, me = 0, Ri()), f
    }

    function hy() {
        for (; fe !== null;) Rd(fe)
    }

    function my(e, t) {
        var l = Re;
        Re |= 2;
        var n = Od(),
            a = _d();
        Ee !== e || me !== t ? (iu = null, au = Vt() + 500, Qn(e, t)) : qn = ra(e, t);
        e: do try {
                if (Te !== 0 && fe !== null) {
                    t = fe;
                    var i = bt;
                    t: switch (Te) {
                        case 1:
                            Te = 0, bt = null, Xn(e, t, i, 1);
                            break;
                        case 2:
                            if (ko(i)) {
                                Te = 0, bt = null, wd(t);
                                break
                            }
                            t = function() {
                                Te === 2 && Ee === e && (Te = 7), It(e)
                            }, i.then(t, t);
                            break e;
                        case 3:
                            Te = 7;
                            break e;
                        case 4:
                            Te = 5;
                            break e;
                        case 7:
                            ko(i) ? (Te = 0, bt = null, wd(t)) : (Te = 0, bt = null, Xn(e, t, i, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (fe.tag) {
                                case 26:
                                    f = fe.memoizedState;
                                case 5:
                                case 27:
                                    var h = fe;
                                    if (!f || ch(f)) {
                                        Te = 0, bt = null;
                                        var b = h.sibling;
                                        if (b !== null) fe = b;
                                        else {
                                            var T = h.return;
                                            T !== null ? (fe = T, su(T)) : fe = null
                                        }
                                        break t
                                    }
                            }
                            Te = 0, bt = null, Xn(e, t, i, 5);
                            break;
                        case 6:
                            Te = 0, bt = null, Xn(e, t, i, 6);
                            break;
                        case 8:
                            Ss(), ze = 6;
                            break e;
                        default:
                            throw Error(o(462))
                    }
                }
                yy();
                break
            } catch (R) {
                Md(e, R)
            }
            while (!0);
            return il = an = null, H.H = n, H.A = a, Re = l, fe !== null ? 0 : (Ee = null, me = 0, Ri(), ze)
    }

    function yy() {
        for (; fe !== null && !Bm();) Rd(fe)
    }

    function Rd(e) {
        var t = Pf(e.alternate, e, dl);
        e.memoizedProps = e.pendingProps, t === null ? su(e) : fe = t
    }

    function wd(e) {
        var t = e,
            l = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Kf(l, t, t.pendingProps, t.type, void 0, me);
                break;
            case 11:
                t = Kf(l, t, t.pendingProps, t.type.render, t.ref, me);
                break;
            case 5:
                Nc(t);
            default:
                Td(l, t), t = fe = Sd(t, dl), t = Pf(l, t, dl)
        }
        e.memoizedProps = e.pendingProps, t === null ? su(e) : fe = t
    }

    function Xn(e, t, l, n) {
        il = an = null, Nc(t), Rn = null, Na = 0;
        var a = t.return;
        try {
            if (ny(e, a, t, l, me)) {
                ze = 1, Wi(e, Nt(l, e.current)), fe = null;
                return
            }
        } catch (i) {
            if (a !== null) throw fe = a, i;
            ze = 1, Wi(e, Nt(l, e.current)), fe = null;
            return
        }
        t.flags & 32768 ? (ye || n === 1 ? e = !0 : qn || me & 536870912 ? e = !1 : (fl = e = !0, (n === 2 || n === 3 || n === 6) && (n = _t.current, n !== null && n.tag === 13 && (n.flags |= 16384))), zd(t, e)) : su(t)
    }

    function su(e) {
        var t = e;
        do {
            if (t.flags & 32768) {
                zd(t, fl);
                return
            }
            e = t.return;
            var l = sy(t.alternate, t, dl);
            if (l !== null) {
                fe = l;
                return
            }
            if (t = t.sibling, t !== null) {
                fe = t;
                return
            }
            fe = t = e
        } while (t !== null);
        ze === 0 && (ze = 5)
    }

    function zd(e, t) {
        do {
            var l = ry(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767, fe = l;
                return
            }
            if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                fe = e;
                return
            }
            fe = e = l
        } while (e !== null);
        ze = 6, fe = null
    }

    function Cd(e, t, l, n, a, i, f, h, b, T) {
        var R = H.T,
            U = X.p;
        try {
            X.p = 2, H.T = null, gy(e, t, l, n, U, a, i, f, h, b, T)
        } finally {
            H.T = R, X.p = U
        }
    }

    function gy(e, t, l, n, a, i, f, h) {
        do Vn(); while (on !== null);
        if (Re & 6) throw Error(o(327));
        var b = e.finishedWork;
        if (n = e.finishedLanes, b === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, b === e.current) throw Error(o(177));
        e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
        var T = b.lanes | b.childLanes;
        if (T |= dc, Jm(e, n, T, i, f, h), e === Ee && (fe = Ee = null, me = 0), !(b.subtreeFlags & 10256) && !(b.flags & 10256) || uu || (uu = !0, vs = T, ps = l, by(gi, function() {
                return Vn(), null
            })), l = (b.flags & 15990) !== 0, b.subtreeFlags & 15990 || l ? (l = H.T, H.T = null, i = X.p, X.p = 2, f = Re, Re |= 4, iy(e, b), md(b, e), k0(Us, e.containerInfo), bu = !!Cs, Us = Cs = null, e.current = b, od(e, b.alternate, b), Gm(), Re = f, X.p = i, H.T = l) : e.current = b, uu ? (uu = !1, on = e, Va = n) : Ud(e, T), T = e.pendingLanes, T === 0 && (Ll = null), Qm(b.stateNode), It(e), t !== null)
            for (a = e.onRecoverableError, b = 0; b < t.length; b++) T = t[b], a(T.value, {
                componentStack: T.stack
            });
        return Va & 3 && Vn(), T = e.pendingLanes, n & 4194218 && T & 42 ? e === xs ? Za++ : (Za = 0, xs = e) : Za = 0, Ka(0), null
    }

    function Ud(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Oa(t)))
    }

    function Vn() {
        if (on !== null) {
            var e = on,
                t = vs;
            vs = 0;
            var l = Yr(Va),
                n = H.T,
                a = X.p;
            try {
                if (X.p = 32 > l ? 32 : l, H.T = null, on === null) var i = !1;
                else {
                    l = ps, ps = null;
                    var f = on,
                        h = Va;
                    if (on = null, Va = 0, Re & 6) throw Error(o(331));
                    var b = Re;
                    if (Re |= 4, xd(f.current), gd(f, f.current, h, l), Re = b, Ka(0, !1), yt && typeof yt.onPostCommitFiberRoot == "function") try {
                        yt.onPostCommitFiberRoot(sa, f)
                    } catch {}
                    i = !0
                }
                return i
            } finally {
                X.p = a, H.T = n, Ud(e, t)
            }
        }
        return !1
    }

    function Ld(e, t, l) {
        t = Nt(l, t), t = qc(e.stateNode, t, 2), e = _l(e, t, 2), e !== null && (oa(e, 2), It(e))
    }

    function Se(e, t, l) {
        if (e.tag === 3) Ld(e, e, l);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Ld(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ll === null || !Ll.has(n))) {
                        e = Nt(l, e), l = Hf(2), n = _l(t, l, 2), n !== null && (kf(l, n, t, e), oa(n, 2), It(n));
                        break
                    }
                }
                t = t.return
            }
    }

    function Ts(e, t, l) {
        var n = e.pingCache;
        if (n === null) {
            n = e.pingCache = new fy;
            var a = new Set;
            n.set(t, a)
        } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
        a.has(l) || (hs = !0, a.add(l), e = vy.bind(null, e, t, l), t.then(e, e))
    }

    function vy(e, t, l) {
        var n = e.pingCache;
        n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ee === e && (me & l) === l && (ze === 4 || ze === 3 && (me & 62914560) === me && 300 > Vt() - gs ? !(Re & 2) && Qn(e, 0) : ms |= l, Yn === me && (Yn = 0)), It(e)
    }

    function Bd(e, t) {
        t === 0 && (t = Hr()), e = jl(e, t), e !== null && (oa(e, t), It(e))
    }

    function py(e) {
        var t = e.memoizedState,
            l = 0;
        t !== null && (l = t.retryLane), Bd(e, l)
    }

    function xy(e, t) {
        var l = 0;
        switch (e.tag) {
            case 13:
                var n = e.stateNode,
                    a = e.memoizedState;
                a !== null && (l = a.retryLane);
                break;
            case 19:
                n = e.stateNode;
                break;
            case 22:
                n = e.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        n !== null && n.delete(t), Bd(e, l)
    }

    function by(e, t) {
        return Yu(e, t)
    }
    var ru = null,
        Zn = null,
        As = !1,
        ou = !1,
        Ds = !1,
        fn = 0;

    function It(e) {
        e !== Zn && e.next === null && (Zn === null ? ru = Zn = e : Zn = Zn.next = e), ou = !0, As || (As = !0, jy(Sy))
    }

    function Ka(e, t) {
        if (!Ds && ou) {
            Ds = !0;
            do
                for (var l = !1, n = ru; n !== null;) {
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var i = 0;
                        else {
                            var f = n.suspendedLanes,
                                h = n.pingedLanes;
                            i = (1 << 31 - gt(42 | e) + 1) - 1, i &= a & ~(f & ~h), i = i & 201326677 ? i & 201326677 | 1 : i ? i | 2 : 0
                        }
                        i !== 0 && (l = !0, kd(n, i))
                    } else i = me, i = xi(n, n === Ee ? i : 0), !(i & 3) || ra(n, i) || (l = !0, kd(n, i));
                    n = n.next
                }
            while (l);
            Ds = !1
        }
    }

    function Sy() {
        ou = As = !1;
        var e = 0;
        fn !== 0 && (_y() && (e = fn), fn = 0);
        for (var t = Vt(), l = null, n = ru; n !== null;) {
            var a = n.next,
                i = Gd(n, t);
            i === 0 ? (n.next = null, l === null ? ru = a : l.next = a, a === null && (Zn = l)) : (l = n, (e !== 0 || i & 3) && (ou = !0)), n = a
        }
        Ka(e)
    }

    function Gd(e, t) {
        for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) {
            var f = 31 - gt(i),
                h = 1 << f,
                b = a[f];
            b === -1 ? (!(h & l) || h & n) && (a[f] = Km(h, t)) : b <= t && (e.expiredLanes |= h), i &= ~h
        }
        if (t = Ee, l = me, l = xi(e, e === t ? l : 0), n = e.callbackNode, l === 0 || e === t && Te === 2 || e.cancelPendingCommit !== null) return n !== null && n !== null && Qu(n), e.callbackNode = null, e.callbackPriority = 0;
        if (!(l & 3) || ra(e, l)) {
            if (t = l & -l, t === e.callbackPriority) return t;
            switch (n !== null && Qu(n), Yr(l)) {
                case 2:
                case 8:
                    l = Lr;
                    break;
                case 32:
                    l = gi;
                    break;
                case 268435456:
                    l = Br;
                    break;
                default:
                    l = gi
            }
            return n = Hd.bind(null, e), l = Yu(l, n), e.callbackPriority = t, e.callbackNode = l, t
        }
        return n !== null && n !== null && Qu(n), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Hd(e, t) {
        var l = e.callbackNode;
        if (Vn() && e.callbackNode !== l) return null;
        var n = me;
        return n = xi(e, e === Ee ? n : 0), n === 0 ? null : (Dd(e, n, t), Gd(e, Vt()), e.callbackNode != null && e.callbackNode === l ? Hd.bind(null, e) : null)
    }

    function kd(e, t) {
        if (Vn()) return null;
        Dd(e, t, !0)
    }

    function jy(e) {
        wy(function() {
            Re & 6 ? Yu(Ur, e) : e()
        })
    }

    function Ns() {
        return fn === 0 && (fn = Gr()), fn
    }

    function qd(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ti("" + e)
    }

    function Yd(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e
    }

    function Ey(e, t, l, n, a) {
        if (t === "submit" && l && l.stateNode === a) {
            var i = qd((a[ot] || null).action),
                f = n.submitter;
            f && (t = (t = f[ot] || null) ? qd(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
            var h = new Mi("action", "action", null, n, a);
            e.push({
                event: h,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (n.defaultPrevented) {
                            if (fn !== 0) {
                                var b = f ? Yd(a, f) : new FormData(a);
                                Lc(l, {
                                    pending: !0,
                                    data: b,
                                    method: a.method,
                                    action: i
                                }, null, b)
                            }
                        } else typeof i == "function" && (h.preventDefault(), b = f ? Yd(a, f) : new FormData(a), Lc(l, {
                            pending: !0,
                            data: b,
                            method: a.method,
                            action: i
                        }, i, b))
                    },
                    currentTarget: a
                }]
            })
        }
    }
    for (var Ms = 0; Ms < zo.length; Ms++) {
        var Os = zo[Ms],
            Ty = Os.toLowerCase(),
            Ay = Os[0].toUpperCase() + Os.slice(1);
        Bt(Ty, "on" + Ay)
    }
    Bt(Mo, "onAnimationEnd"), Bt(Oo, "onAnimationIteration"), Bt(_o, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(Y0, "onTransitionRun"), Bt(Q0, "onTransitionStart"), Bt(X0, "onTransitionCancel"), Bt(Ro, "onTransitionEnd"), xn("onMouseEnter", ["mouseout", "mouseover"]), xn("onMouseLeave", ["mouseout", "mouseover"]), xn("onPointerEnter", ["pointerout", "pointerover"]), xn("onPointerLeave", ["pointerout", "pointerover"]), Vl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Vl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Vl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Vl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Vl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ja = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Dy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));

    function Qd(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var n = e[l],
                a = n.event;
            n = n.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var f = n.length - 1; 0 <= f; f--) {
                        var h = n[f],
                            b = h.instance,
                            T = h.currentTarget;
                        if (h = h.listener, b !== i && a.isPropagationStopped()) break e;
                        i = h, a.currentTarget = T;
                        try {
                            i(a)
                        } catch (R) {
                            Ii(R)
                        }
                        a.currentTarget = null, i = b
                    } else
                        for (f = 0; f < n.length; f++) {
                            if (h = n[f], b = h.instance, T = h.currentTarget, h = h.listener, b !== i && a.isPropagationStopped()) break e;
                            i = h, a.currentTarget = T;
                            try {
                                i(a)
                            } catch (R) {
                                Ii(R)
                            }
                            a.currentTarget = null, i = b
                        }
            }
        }
    }

    function de(e, t) {
        var l = t[Vu];
        l === void 0 && (l = t[Vu] = new Set);
        var n = e + "__bubble";
        l.has(n) || (Xd(t, e, 2, !1), l.add(n))
    }

    function _s(e, t, l) {
        var n = 0;
        t && (n |= 4), Xd(l, e, n, t)
    }
    var fu = "_reactListening" + Math.random().toString(36).slice(2);

    function Rs(e) {
        if (!e[fu]) {
            e[fu] = !0, Vr.forEach(function(l) {
                l !== "selectionchange" && (Dy.has(l) || _s(l, !1, e), _s(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[fu] || (t[fu] = !0, _s("selectionchange", !1, t))
        }
    }

    function Xd(e, t, l, n) {
        switch (hh(t)) {
            case 2:
                var a = Fy;
                break;
            case 8:
                a = Py;
                break;
            default:
                a = Xs
        }
        l = a.bind(null, t, l, e), a = void 0, !Pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
            passive: a
        }) : e.addEventListener(t, l, !1)
    }

    function ws(e, t, l, n, a) {
        var i = n;
        if (!(t & 1) && !(t & 2) && n !== null) e: for (;;) {
            if (n === null) return;
            var f = n.tag;
            if (f === 3 || f === 4) {
                var h = n.stateNode.containerInfo;
                if (h === a || h.nodeType === 8 && h.parentNode === a) break;
                if (f === 4)
                    for (f = n.return; f !== null;) {
                        var b = f.tag;
                        if ((b === 3 || b === 4) && (b = f.stateNode.containerInfo, b === a || b.nodeType === 8 && b.parentNode === a)) return;
                        f = f.return
                    }
                for (; h !== null;) {
                    if (f = Xl(h), f === null) return;
                    if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
                        n = i = f;
                        continue e
                    }
                    h = h.parentNode
                }
            }
            n = n.return
        }
        no(function() {
            var T = i,
                R = Wu(l),
                U = [];
            e: {
                var M = wo.get(e);
                if (M !== void 0) {
                    var O = Mi,
                        J = e;
                    switch (e) {
                        case "keypress":
                            if (Di(l) === 0) break e;
                        case "keydown":
                        case "keyup":
                            O = x0;
                            break;
                        case "focusin":
                            J = "focus", O = nc;
                            break;
                        case "focusout":
                            J = "blur", O = nc;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            O = nc;
                            break;
                        case "click":
                            if (l.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            O = uo;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            O = c0;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            O = j0;
                            break;
                        case Mo:
                        case Oo:
                        case _o:
                            O = o0;
                            break;
                        case Ro:
                            O = T0;
                            break;
                        case "scroll":
                        case "scrollend":
                            O = i0;
                            break;
                        case "wheel":
                            O = D0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            O = d0;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            O = so;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            O = M0
                    }
                    var ne = (t & 4) !== 0,
                        Ce = !ne && (e === "scroll" || e === "scrollend"),
                        A = ne ? M !== null ? M + "Capture" : null : M;
                    ne = [];
                    for (var E = T, N; E !== null;) {
                        var C = E;
                        if (N = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || N === null || A === null || (C = ha(E, A), C != null && ne.push($a(E, C, N))), Ce) break;
                        E = E.return
                    }
                    0 < ne.length && (M = new O(M, J, null, l, R), U.push({
                        event: M,
                        listeners: ne
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (M = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", M && l !== Iu && (J = l.relatedTarget || l.fromElement) && (Xl(J) || J[gn])) break e;
                    if ((O || M) && (M = R.window === R ? R : (M = R.ownerDocument) ? M.defaultView || M.parentWindow : window, O ? (J = l.relatedTarget || l.toElement, O = T, J = J ? Xl(J) : null, J !== null && (Ce = te(J), ne = J.tag, J !== Ce || ne !== 5 && ne !== 27 && ne !== 6) && (J = null)) : (O = null, J = T), O !== J)) {
                        if (ne = uo, C = "onMouseLeave", A = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (ne = so, C = "onPointerLeave", A = "onPointerEnter", E = "pointer"), Ce = O == null ? M : da(O), N = J == null ? M : da(J), M = new ne(C, E + "leave", O, l, R), M.target = Ce, M.relatedTarget = N, C = null, Xl(R) === T && (ne = new ne(A, E + "enter", J, l, R), ne.target = N, ne.relatedTarget = Ce, C = ne), Ce = C, O && J) t: {
                            for (ne = O, A = J, E = 0, N = ne; N; N = Kn(N)) E++;
                            for (N = 0, C = A; C; C = Kn(C)) N++;
                            for (; 0 < E - N;) ne = Kn(ne),
                            E--;
                            for (; 0 < N - E;) A = Kn(A),
                            N--;
                            for (; E--;) {
                                if (ne === A || A !== null && ne === A.alternate) break t;
                                ne = Kn(ne), A = Kn(A)
                            }
                            ne = null
                        }
                        else ne = null;
                        O !== null && Vd(U, M, O, ne, !1), J !== null && Ce !== null && Vd(U, Ce, J, ne, !0)
                    }
                }
                e: {
                    if (M = T ? da(T) : window, O = M.nodeName && M.nodeName.toLowerCase(), O === "select" || O === "input" && M.type === "file") var V = vo;
                    else if (yo(M))
                        if (po) V = G0;
                        else {
                            V = L0;
                            var oe = U0
                        }
                    else O = M.nodeName,
                    !O || O.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? T && $u(T.elementType) && (V = vo) : V = B0;
                    if (V && (V = V(e, T))) {
                        go(U, V, l, R);
                        break e
                    }
                    oe && oe(e, M, T),
                    e === "focusout" && T && M.type === "number" && T.memoizedProps.value != null && Ju(M, "number", M.value)
                }
                switch (oe = T ? da(T) : window, e) {
                    case "focusin":
                        (yo(oe) || oe.contentEditable === "true") && (An = oe, rc = T, Sa = null);
                        break;
                    case "focusout":
                        Sa = rc = An = null;
                        break;
                    case "mousedown":
                        oc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        oc = !1, Do(U, l, R);
                        break;
                    case "selectionchange":
                        if (q0) break;
                    case "keydown":
                    case "keyup":
                        Do(U, l, R)
                }
                var $;
                if (ic) e: {
                    switch (e) {
                        case "compositionstart":
                            var W = "onCompositionStart";
                            break e;
                        case "compositionend":
                            W = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            W = "onCompositionUpdate";
                            break e
                    }
                    W = void 0
                }
                else Tn ? ho(e, l) && (W = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (W = "onCompositionStart");W && (ro && l.locale !== "ko" && (Tn || W !== "onCompositionStart" ? W === "onCompositionEnd" && Tn && ($ = ao()) : (Sl = R, ec = "value" in Sl ? Sl.value : Sl.textContent, Tn = !0)), oe = du(T, W), 0 < oe.length && (W = new co(W, e, null, l, R), U.push({
                    event: W,
                    listeners: oe
                }), $ ? W.data = $ : ($ = mo(l), $ !== null && (W.data = $)))),
                ($ = _0 ? R0(e, l) : w0(e, l)) && (W = du(T, "onBeforeInput"), 0 < W.length && (oe = new co("onBeforeInput", "beforeinput", null, l, R), U.push({
                    event: oe,
                    listeners: W
                }), oe.data = $)),
                Ey(U, e, T, l, R)
            }
            Qd(U, t)
        })
    }

    function $a(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }

    function du(e, t) {
        for (var l = t + "Capture", n = []; e !== null;) {
            var a = e,
                i = a.stateNode;
            a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ha(e, l), a != null && n.unshift($a(e, a, i)), a = ha(e, t), a != null && n.push($a(e, a, i))), e = e.return
        }
        return n
    }

    function Kn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Vd(e, t, l, n, a) {
        for (var i = t._reactName, f = []; l !== null && l !== n;) {
            var h = l,
                b = h.alternate,
                T = h.stateNode;
            if (h = h.tag, b !== null && b === n) break;
            h !== 5 && h !== 26 && h !== 27 || T === null || (b = T, a ? (T = ha(l, i), T != null && f.unshift($a(l, T, b))) : a || (T = ha(l, i), T != null && f.push($a(l, T, b)))), l = l.return
        }
        f.length !== 0 && e.push({
            event: t,
            listeners: f
        })
    }
    var Ny = /\r\n?/g,
        My = /\u0000|\uFFFD/g;

    function Zd(e) {
        return (typeof e == "string" ? e : "" + e).replace(Ny, `
`).replace(My, "")
    }

    function Kd(e, t) {
        return t = Zd(t), Zd(e) === t
    }

    function hu() {}

    function be(e, t, l, n, a, i) {
        switch (l) {
            case "children":
                typeof n == "string" ? t === "body" || t === "textarea" && n === "" || Sn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && Sn(e, "" + n);
                break;
            case "className":
                Si(e, "class", n);
                break;
            case "tabIndex":
                Si(e, "tabindex", n);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Si(e, l, n);
                break;
            case "style":
                to(e, n, i);
                break;
            case "data":
                if (t !== "object") {
                    Si(e, "data", n);
                    break
                }
            case "src":
            case "href":
                if (n === "" && (t !== "a" || l !== "href")) {
                    e.removeAttribute(l);
                    break
                }
                if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                    e.removeAttribute(l);
                    break
                }
                n = Ti("" + n), e.setAttribute(l, n);
                break;
            case "action":
            case "formAction":
                if (typeof n == "function") {
                    e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof i == "function" && (l === "formAction" ? (t !== "input" && be(e, t, "name", a.name, a, null), be(e, t, "formEncType", a.formEncType, a, null), be(e, t, "formMethod", a.formMethod, a, null), be(e, t, "formTarget", a.formTarget, a, null)) : (be(e, t, "encType", a.encType, a, null), be(e, t, "method", a.method, a, null), be(e, t, "target", a.target, a, null)));
                if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                    e.removeAttribute(l);
                    break
                }
                n = Ti("" + n), e.setAttribute(l, n);
                break;
            case "onClick":
                n != null && (e.onclick = hu);
                break;
            case "onScroll":
                n != null && de("scroll", e);
                break;
            case "onScrollEnd":
                n != null && de("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (n != null) {
                    if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
                    if (l = n.__html, l != null) {
                        if (a.children != null) throw Error(o(60));
                        e.innerHTML = l
                    }
                }
                break;
            case "multiple":
                e.multiple = n && typeof n != "function" && typeof n != "symbol";
                break;
            case "muted":
                e.muted = n && typeof n != "function" && typeof n != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                l = Ti("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
                break;
            case "capture":
            case "download":
                n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
                break;
            case "rowSpan":
            case "start":
                n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
                break;
            case "popover":
                de("beforetoggle", e), de("toggle", e), bi(e, "popover", n);
                break;
            case "xlinkActuate":
                Pt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                break;
            case "xlinkArcrole":
                Pt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                break;
            case "xlinkRole":
                Pt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                break;
            case "xlinkShow":
                Pt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                break;
            case "xlinkTitle":
                Pt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                break;
            case "xlinkType":
                Pt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                break;
            case "xmlBase":
                Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                break;
            case "xmlLang":
                Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                break;
            case "xmlSpace":
                Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                break;
            case "is":
                bi(e, "is", n);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = n0.get(l) || l, bi(e, l, n))
        }
    }

    function zs(e, t, l, n, a, i) {
        switch (l) {
            case "style":
                to(e, n, i);
                break;
            case "dangerouslySetInnerHTML":
                if (n != null) {
                    if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
                    if (l = n.__html, l != null) {
                        if (a.children != null) throw Error(o(60));
                        e.innerHTML = l
                    }
                }
                break;
            case "children":
                typeof n == "string" ? Sn(e, n) : (typeof n == "number" || typeof n == "bigint") && Sn(e, "" + n);
                break;
            case "onScroll":
                n != null && de("scroll", e);
                break;
            case "onScrollEnd":
                n != null && de("scrollend", e);
                break;
            case "onClick":
                n != null && (e.onclick = hu);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Zr.hasOwnProperty(l)) e: {
                    if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[ot] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
                        typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                        break e
                    }
                    l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : bi(e, l, n)
                }
        }
    }

    function We(e, t, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                de("error", e), de("load", e);
                var n = !1,
                    a = !1,
                    i;
                for (i in l)
                    if (l.hasOwnProperty(i)) {
                        var f = l[i];
                        if (f != null) switch (i) {
                            case "src":
                                n = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, t));
                            default:
                                be(e, t, i, f, l, null)
                        }
                    } a && be(e, t, "srcSet", l.srcSet, l, null), n && be(e, t, "src", l.src, l, null);
                return;
            case "input":
                de("invalid", e);
                var h = i = f = a = null,
                    b = null,
                    T = null;
                for (n in l)
                    if (l.hasOwnProperty(n)) {
                        var R = l[n];
                        if (R != null) switch (n) {
                            case "name":
                                a = R;
                                break;
                            case "type":
                                f = R;
                                break;
                            case "checked":
                                b = R;
                                break;
                            case "defaultChecked":
                                T = R;
                                break;
                            case "value":
                                i = R;
                                break;
                            case "defaultValue":
                                h = R;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (R != null) throw Error(o(137, t));
                                break;
                            default:
                                be(e, t, n, R, l, null)
                        }
                    } Wr(e, i, h, b, T, f, a, !1), ji(e);
                return;
            case "select":
                de("invalid", e), n = f = i = null;
                for (a in l)
                    if (l.hasOwnProperty(a) && (h = l[a], h != null)) switch (a) {
                        case "value":
                            i = h;
                            break;
                        case "defaultValue":
                            f = h;
                            break;
                        case "multiple":
                            n = h;
                        default:
                            be(e, t, a, h, l, null)
                    }
                t = i, l = f, e.multiple = !!n, t != null ? bn(e, !!n, t, !1) : l != null && bn(e, !!n, l, !0);
                return;
            case "textarea":
                de("invalid", e), i = a = n = null;
                for (f in l)
                    if (l.hasOwnProperty(f) && (h = l[f], h != null)) switch (f) {
                        case "value":
                            n = h;
                            break;
                        case "defaultValue":
                            a = h;
                            break;
                        case "children":
                            i = h;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (h != null) throw Error(o(91));
                            break;
                        default:
                            be(e, t, f, h, l, null)
                    }
                Pr(e, n, a, i), ji(e);
                return;
            case "option":
                for (b in l)
                    if (l.hasOwnProperty(b) && (n = l[b], n != null)) switch (b) {
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            be(e, t, b, n, l, null)
                    }
                return;
            case "dialog":
                de("cancel", e), de("close", e);
                break;
            case "iframe":
            case "object":
                de("load", e);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Ja.length; n++) de(Ja[n], e);
                break;
            case "image":
                de("error", e), de("load", e);
                break;
            case "details":
                de("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                de("error", e), de("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (T in l)
                    if (l.hasOwnProperty(T) && (n = l[T], n != null)) switch (T) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            be(e, t, T, n, l, null)
                    }
                return;
            default:
                if ($u(t)) {
                    for (R in l) l.hasOwnProperty(R) && (n = l[R], n !== void 0 && zs(e, t, R, n, l, void 0));
                    return
                }
        }
        for (h in l) l.hasOwnProperty(h) && (n = l[h], n != null && be(e, t, h, n, l, null))
    }

    function Oy(e, t, l, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var a = null,
                    i = null,
                    f = null,
                    h = null,
                    b = null,
                    T = null,
                    R = null;
                for (O in l) {
                    var U = l[O];
                    if (l.hasOwnProperty(O) && U != null) switch (O) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            b = U;
                        default:
                            n.hasOwnProperty(O) || be(e, t, O, null, n, U)
                    }
                }
                for (var M in n) {
                    var O = n[M];
                    if (U = l[M], n.hasOwnProperty(M) && (O != null || U != null)) switch (M) {
                        case "type":
                            i = O;
                            break;
                        case "name":
                            a = O;
                            break;
                        case "checked":
                            T = O;
                            break;
                        case "defaultChecked":
                            R = O;
                            break;
                        case "value":
                            f = O;
                            break;
                        case "defaultValue":
                            h = O;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (O != null) throw Error(o(137, t));
                            break;
                        default:
                            O !== U && be(e, t, M, O, n, U)
                    }
                }
                Ku(e, f, h, b, T, R, i, a);
                return;
            case "select":
                O = f = h = M = null;
                for (i in l)
                    if (b = l[i], l.hasOwnProperty(i) && b != null) switch (i) {
                        case "value":
                            break;
                        case "multiple":
                            O = b;
                        default:
                            n.hasOwnProperty(i) || be(e, t, i, null, n, b)
                    }
                for (a in n)
                    if (i = n[a], b = l[a], n.hasOwnProperty(a) && (i != null || b != null)) switch (a) {
                        case "value":
                            M = i;
                            break;
                        case "defaultValue":
                            h = i;
                            break;
                        case "multiple":
                            f = i;
                        default:
                            i !== b && be(e, t, a, i, n, b)
                    }
                t = h, l = f, n = O, M != null ? bn(e, !!l, M, !1) : !!n != !!l && (t != null ? bn(e, !!l, t, !0) : bn(e, !!l, l ? [] : "", !1));
                return;
            case "textarea":
                O = M = null;
                for (h in l)
                    if (a = l[h], l.hasOwnProperty(h) && a != null && !n.hasOwnProperty(h)) switch (h) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            be(e, t, h, null, n, a)
                    }
                for (f in n)
                    if (a = n[f], i = l[f], n.hasOwnProperty(f) && (a != null || i != null)) switch (f) {
                        case "value":
                            M = a;
                            break;
                        case "defaultValue":
                            O = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(o(91));
                            break;
                        default:
                            a !== i && be(e, t, f, a, n, i)
                    }
                Fr(e, M, O);
                return;
            case "option":
                for (var J in l)
                    if (M = l[J], l.hasOwnProperty(J) && M != null && !n.hasOwnProperty(J)) switch (J) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            be(e, t, J, null, n, M)
                    }
                for (b in n)
                    if (M = n[b], O = l[b], n.hasOwnProperty(b) && M !== O && (M != null || O != null)) switch (b) {
                        case "selected":
                            e.selected = M && typeof M != "function" && typeof M != "symbol";
                            break;
                        default:
                            be(e, t, b, M, n, O)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ne in l) M = l[ne], l.hasOwnProperty(ne) && M != null && !n.hasOwnProperty(ne) && be(e, t, ne, null, n, M);
                for (T in n)
                    if (M = n[T], O = l[T], n.hasOwnProperty(T) && M !== O && (M != null || O != null)) switch (T) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null) throw Error(o(137, t));
                            break;
                        default:
                            be(e, t, T, M, n, O)
                    }
                return;
            default:
                if ($u(t)) {
                    for (var Ce in l) M = l[Ce], l.hasOwnProperty(Ce) && M !== void 0 && !n.hasOwnProperty(Ce) && zs(e, t, Ce, void 0, n, M);
                    for (R in n) M = n[R], O = l[R], !n.hasOwnProperty(R) || M === O || M === void 0 && O === void 0 || zs(e, t, R, M, n, O);
                    return
                }
        }
        for (var A in l) M = l[A], l.hasOwnProperty(A) && M != null && !n.hasOwnProperty(A) && be(e, t, A, null, n, M);
        for (U in n) M = n[U], O = l[U], !n.hasOwnProperty(U) || M === O || M == null && O == null || be(e, t, U, M, n, O)
    }
    var Cs = null,
        Us = null;

    function mu(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Jd(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function $d(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function Ls(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Bs = null;

    function _y() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Bs ? !1 : (Bs = e, !0) : (Bs = null, !1)
    }
    var Id = typeof setTimeout == "function" ? setTimeout : void 0,
        Ry = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Wd = typeof Promise == "function" ? Promise : void 0,
        wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wd < "u" ? function(e) {
            return Wd.resolve(null).then(e).catch(zy)
        } : Id;

    function zy(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Gs(e, t) {
        var l = t,
            n = 0;
        do {
            var a = l.nextSibling;
            if (e.removeChild(l), a && a.nodeType === 8)
                if (l = a.data, l === "/$") {
                    if (n === 0) {
                        e.removeChild(a), ni(t);
                        return
                    }
                    n--
                } else l !== "$" && l !== "$?" && l !== "$!" || n++;
            l = a
        } while (l);
        ni(t)
    }

    function Hs(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var l = t;
            switch (t = t.nextSibling, l.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Hs(l), Zu(l);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (l.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(l)
        }
    }

    function Cy(e, t, l, n) {
        for (; e.nodeType === 1;) {
            var a = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (n) {
                if (!e[fa]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (i !== a.rel || e.getAttribute("href") !== (a.href == null ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var i = a.name == null ? null : "" + a.name;
                if (a.type === "hidden" && e.getAttribute("name") === i) return e
            } else return e;
            if (e = kt(e.nextSibling), e === null) break
        }
        return null
    }

    function Uy(e, t, l) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = kt(e.nextSibling), e === null)) return null;
        return e
    }

    function kt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Fd(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?") {
                    if (t === 0) return e;
                    t--
                } else l === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Pd(e, t, l) {
        switch (t = mu(l), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(o(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(o(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(o(454));
                return e;
            default:
                throw Error(o(451))
        }
    }
    var Ut = new Map,
        eh = new Set;

    function yu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument
    }
    var ml = X.d;
    X.d = {
        f: Ly,
        r: By,
        D: Gy,
        C: Hy,
        L: ky,
        m: qy,
        X: Qy,
        S: Yy,
        M: Xy
    };

    function Ly() {
        var e = ml.f(),
            t = cu();
        return e || t
    }

    function By(e) {
        var t = vn(e);
        t !== null && t.tag === 5 && t.type === "form" ? Nf(t) : ml.r(e)
    }
    var Jn = typeof document > "u" ? null : document;

    function th(e, t, l) {
        var n = Jn;
        if (n && typeof t == "string" && t) {
            var a = At(t);
            a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), eh.has(a) || (eh.add(a), e = {
                rel: e,
                crossOrigin: l,
                href: t
            }, n.querySelector(a) === null && (t = n.createElement("link"), We(t, "link", e), Ve(t), n.head.appendChild(t)))
        }
    }

    function Gy(e) {
        ml.D(e), th("dns-prefetch", e, null)
    }

    function Hy(e, t) {
        ml.C(e, t), th("preconnect", e, t)
    }

    function ky(e, t, l) {
        ml.L(e, t, l);
        var n = Jn;
        if (n && e && t) {
            var a = 'link[rel="preload"][as="' + At(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + At(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + At(l.imageSizes) + '"]')) : a += '[href="' + At(e) + '"]';
            var i = a;
            switch (t) {
                case "style":
                    i = $n(e);
                    break;
                case "script":
                    i = In(e)
            }
            Ut.has(i) || (e = Z({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l), Ut.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ia(i)) || t === "script" && n.querySelector(Wa(i)) || (t = n.createElement("link"), We(t, "link", e), Ve(t), n.head.appendChild(t)))
        }
    }

    function qy(e, t) {
        ml.m(e, t);
        var l = Jn;
        if (l && e) {
            var n = t && typeof t.as == "string" ? t.as : "script",
                a = 'link[rel="modulepreload"][as="' + At(n) + '"][href="' + At(e) + '"]',
                i = a;
            switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    i = In(e)
            }
            if (!Ut.has(i) && (e = Z({
                    rel: "modulepreload",
                    href: e
                }, t), Ut.set(i, e), l.querySelector(a) === null)) {
                switch (n) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (l.querySelector(Wa(i))) return
                }
                n = l.createElement("link"), We(n, "link", e), Ve(n), l.head.appendChild(n)
            }
        }
    }

    function Yy(e, t, l) {
        ml.S(e, t, l);
        var n = Jn;
        if (n && e) {
            var a = pn(n).hoistableStyles,
                i = $n(e);
            t = t || "default";
            var f = a.get(i);
            if (!f) {
                var h = {
                    loading: 0,
                    preload: null
                };
                if (f = n.querySelector(Ia(i))) h.loading = 5;
                else {
                    e = Z({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l), (l = Ut.get(i)) && ks(e, l);
                    var b = f = n.createElement("link");
                    Ve(b), We(b, "link", e), b._p = new Promise(function(T, R) {
                        b.onload = T, b.onerror = R
                    }), b.addEventListener("load", function() {
                        h.loading |= 1
                    }), b.addEventListener("error", function() {
                        h.loading |= 2
                    }), h.loading |= 4, gu(f, t, n)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: h
                }, a.set(i, f)
            }
        }
    }

    function Qy(e, t) {
        ml.X(e, t);
        var l = Jn;
        if (l && e) {
            var n = pn(l).hoistableScripts,
                a = In(e),
                i = n.get(a);
            i || (i = l.querySelector(Wa(a)), i || (e = Z({
                src: e,
                async: !0
            }, t), (t = Ut.get(a)) && qs(e, t), i = l.createElement("script"), Ve(i), We(i, "link", e), l.head.appendChild(i)), i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            }, n.set(a, i))
        }
    }

    function Xy(e, t) {
        ml.M(e, t);
        var l = Jn;
        if (l && e) {
            var n = pn(l).hoistableScripts,
                a = In(e),
                i = n.get(a);
            i || (i = l.querySelector(Wa(a)), i || (e = Z({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = Ut.get(a)) && qs(e, t), i = l.createElement("script"), Ve(i), We(i, "link", e), l.head.appendChild(i)), i = {
                type: "script",
                instance: i,
                count: 1,
                state: null
            }, n.set(a, i))
        }
    }

    function lh(e, t, l, n) {
        var a = (a = pl.current) ? yu(a) : null;
        if (!a) throw Error(o(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof l.precedence == "string" && typeof l.href == "string" ? (t = $n(l.href), l = pn(a).hoistableStyles, n = l.get(t), n || (n = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(t, n)), n) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                    e = $n(l.href);
                    var i = pn(a).hoistableStyles,
                        f = i.get(e);
                    if (f || (a = a.ownerDocument || a, f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, i.set(e, f), (i = a.querySelector(Ia(e))) && !i._p && (f.instance = i, f.state.loading = 5), Ut.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Ut.set(e, l), i || Vy(a, e, l, f.state))), t && n === null) throw Error(o(528, ""));
                    return f
                }
                if (t && n !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = In(l), l = pn(a).hoistableScripts, n = l.get(t), n || (n = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, l.set(t, n)), n) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, e))
        }
    }

    function $n(e) {
        return 'href="' + At(e) + '"'
    }

    function Ia(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function nh(e) {
        return Z({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function Vy(e, t, l, n) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
            return n.loading |= 1
        }), t.addEventListener("error", function() {
            return n.loading |= 2
        }), We(t, "link", l), Ve(t), e.head.appendChild(t))
    }

    function In(e) {
        return '[src="' + At(e) + '"]'
    }

    function Wa(e) {
        return "script[async]" + e
    }

    function ah(e, t, l) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var n = e.querySelector('style[data-href~="' + At(l.href) + '"]');
                if (n) return t.instance = n, Ve(n), n;
                var a = Z({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return n = (e.ownerDocument || e).createElement("style"), Ve(n), We(n, "style", a), gu(n, l.precedence, e), t.instance = n;
            case "stylesheet":
                a = $n(l.href);
                var i = e.querySelector(Ia(a));
                if (i) return t.state.loading |= 4, t.instance = i, Ve(i), i;
                n = nh(l), (a = Ut.get(a)) && ks(n, a), i = (e.ownerDocument || e).createElement("link"), Ve(i);
                var f = i;
                return f._p = new Promise(function(h, b) {
                    f.onload = h, f.onerror = b
                }), We(i, "link", n), t.state.loading |= 4, gu(i, l.precedence, e), t.instance = i;
            case "script":
                return i = In(l.src), (a = e.querySelector(Wa(i))) ? (t.instance = a, Ve(a), a) : (n = l, (a = Ut.get(i)) && (n = Z({}, l), qs(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ve(a), We(a, "link", n), e.head.appendChild(a), t.instance = a);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
        } else t.type === "stylesheet" && !(t.state.loading & 4) && (n = t.instance, t.state.loading |= 4, gu(n, l.precedence, e));
        return t.instance
    }

    function gu(e, t, l) {
        for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
            var h = n[f];
            if (h.dataset.precedence === t) i = h;
            else if (i !== a) break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild))
    }

    function ks(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function qs(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var vu = null;

    function ih(e, t, l) {
        if (vu === null) {
            var n = new Map,
                a = vu = new Map;
            a.set(l, n)
        } else a = vu, n = a.get(l), n || (n = new Map, a.set(l, n));
        if (n.has(e)) return n;
        for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
            var i = l[a];
            if (!(i[fa] || i[tt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = i.getAttribute(t) || "";
                f = e + f;
                var h = n.get(f);
                h ? h.push(i) : n.set(f, [i])
            }
        }
        return n
    }

    function uh(e, t, l) {
        e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }

    function Zy(e, t, l) {
        if (l === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function ch(e) {
        return !(e.type === "stylesheet" && !(e.state.loading & 3))
    }
    var Fa = null;

    function Ky() {}

    function Jy(e, t, l) {
        if (Fa === null) throw Error(o(475));
        var n = Fa;
        if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && !(t.state.loading & 4)) {
            if (t.instance === null) {
                var a = $n(l.href),
                    i = e.querySelector(Ia(a));
                if (i) {
                    e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = pu.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Ve(i);
                    return
                }
                i = e.ownerDocument || e, l = nh(l), (a = Ut.get(a)) && ks(l, a), i = i.createElement("link"), Ve(i);
                var f = i;
                f._p = new Promise(function(h, b) {
                    f.onload = h, f.onerror = b
                }), We(i, "link", l), t.instance = i
            }
            n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && !(t.state.loading & 3) && (n.count++, t = pu.bind(n), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function $y() {
        if (Fa === null) throw Error(o(475));
        var e = Fa;
        return e.stylesheets && e.count === 0 && Ys(e, e.stylesheets), 0 < e.count ? function(t) {
            var l = setTimeout(function() {
                if (e.stylesheets && Ys(e, e.stylesheets), e.unsuspend) {
                    var n = e.unsuspend;
                    e.unsuspend = null, n()
                }
            }, 6e4);
            return e.unsuspend = t,
                function() {
                    e.unsuspend = null, clearTimeout(l)
                }
        } : null
    }

    function pu() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Ys(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var xu = null;

    function Ys(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, xu = new Map, t.forEach(Iy, e), xu = null, pu.call(e))
    }

    function Iy(e, t) {
        if (!(t.state.loading & 4)) {
            var l = xu.get(e);
            if (l) var n = l.get(null);
            else {
                l = new Map, xu.set(e, l);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
                    var f = a[i];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f)
                }
                n && l.set(null, n)
            }
            a = t.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = pu.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4
        }
    }
    var Pa = {
        $$typeof: G,
        Provider: null,
        Consumer: null,
        _currentValue: he,
        _currentValue2: he,
        _threadCount: 0
    };

    function Wy(e, t, l, n, a, i, f, h) {
        this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xu(0), this.hiddenUpdates = Xu(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = new Map
    }

    function sh(e, t, l, n, a, i, f, h, b, T, R, U) {
        return e = new Wy(e, t, l, f, h, b, T, U), t = 1, i === !0 && (t |= 24), i = zt(3, null, null, t), e.current = i, i.stateNode = e, t = bc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
            element: n,
            isDehydrated: l,
            cache: t
        }, es(i), e
    }

    function rh(e) {
        return e ? (e = Mn, e) : Mn
    }

    function oh(e, t, l, n, a, i) {
        a = rh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Ol(t), n.payload = {
            element: l
        }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = _l(e, n, t), l !== null && (ct(l, e, t), La(l, e, t))
    }

    function fh(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }

    function Qs(e, t) {
        fh(e, t), (e = e.alternate) && fh(e, t)
    }

    function dh(e) {
        if (e.tag === 13) {
            var t = jl(e, 67108864);
            t !== null && ct(t, e, 67108864), Qs(e, 67108864)
        }
    }
    var bu = !0;

    function Fy(e, t, l, n) {
        var a = H.T;
        H.T = null;
        var i = X.p;
        try {
            X.p = 2, Xs(e, t, l, n)
        } finally {
            X.p = i, H.T = a
        }
    }

    function Py(e, t, l, n) {
        var a = H.T;
        H.T = null;
        var i = X.p;
        try {
            X.p = 8, Xs(e, t, l, n)
        } finally {
            X.p = i, H.T = a
        }
    }

    function Xs(e, t, l, n) {
        if (bu) {
            var a = Vs(n);
            if (a === null) ws(e, t, n, Su, l), mh(e, n);
            else if (tg(a, e, t, l, n)) n.stopPropagation();
            else if (mh(e, n), t & 4 && -1 < eg.indexOf(e)) {
                for (; a !== null;) {
                    var i = vn(a);
                    if (i !== null) switch (i.tag) {
                        case 3:
                            if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                                var f = Ql(i.pendingLanes);
                                if (f !== 0) {
                                    var h = i;
                                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f;) {
                                        var b = 1 << 31 - gt(f);
                                        h.entanglements[1] |= b, f &= ~b
                                    }
                                    It(i), !(Re & 6) && (au = Vt() + 500, Ka(0))
                                }
                            }
                            break;
                        case 13:
                            h = jl(i, 2), h !== null && ct(h, i, 2), cu(), Qs(i, 2)
                    }
                    if (i = Vs(n), i === null && ws(e, t, n, Su, l), i === a) break;
                    a = i
                }
                a !== null && n.stopPropagation()
            } else ws(e, t, n, null, l)
        }
    }

    function Vs(e) {
        return e = Wu(e), Zs(e)
    }
    var Su = null;

    function Zs(e) {
        if (Su = null, e = Xl(e), e !== null) {
            var t = te(e);
            if (t === null) e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = je(t), e !== null) return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return Su = e, null
    }

    function hh(e) {
        switch (e) {
            case "beforetoggle":
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
            case "toggle":
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
                return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Hm()) {
                    case Ur:
                        return 2;
                    case Lr:
                        return 8;
                    case gi:
                    case km:
                        return 32;
                    case Br:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Ks = !1,
        Bl = null,
        Gl = null,
        Hl = null,
        ei = new Map,
        ti = new Map,
        kl = [],
        eg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function mh(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Bl = null;
                break;
            case "dragenter":
            case "dragleave":
                Gl = null;
                break;
            case "mouseover":
            case "mouseout":
                Hl = null;
                break;
            case "pointerover":
            case "pointerout":
                ei.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ti.delete(t.pointerId)
        }
    }

    function li(e, t, l, n, a, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: n,
            nativeEvent: i,
            targetContainers: [a]
        }, t !== null && (t = vn(t), t !== null && dh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e)
    }

    function tg(e, t, l, n, a) {
        switch (t) {
            case "focusin":
                return Bl = li(Bl, e, t, l, n, a), !0;
            case "dragenter":
                return Gl = li(Gl, e, t, l, n, a), !0;
            case "mouseover":
                return Hl = li(Hl, e, t, l, n, a), !0;
            case "pointerover":
                var i = a.pointerId;
                return ei.set(i, li(ei.get(i) || null, e, t, l, n, a)), !0;
            case "gotpointercapture":
                return i = a.pointerId, ti.set(i, li(ti.get(i) || null, e, t, l, n, a)), !0
        }
        return !1
    }

    function yh(e) {
        var t = Xl(e.target);
        if (t !== null) {
            var l = te(t);
            if (l !== null) {
                if (t = l.tag, t === 13) {
                    if (t = je(l), t !== null) {
                        e.blockedOn = t, $m(e.priority, function() {
                            if (l.tag === 13) {
                                var n = St(),
                                    a = jl(l, n);
                                a !== null && ct(a, l, n), Qs(l, n)
                            }
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function ju(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var l = Vs(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var n = new l.constructor(l.type, l);
                Iu = n, l.target.dispatchEvent(n), Iu = null
            } else return t = vn(l), t !== null && dh(t), e.blockedOn = l, !1;
            t.shift()
        }
        return !0
    }

    function gh(e, t, l) {
        ju(e) && l.delete(t)
    }

    function lg() {
        Ks = !1, Bl !== null && ju(Bl) && (Bl = null), Gl !== null && ju(Gl) && (Gl = null), Hl !== null && ju(Hl) && (Hl = null), ei.forEach(gh), ti.forEach(gh)
    }

    function Eu(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, lg)))
    }
    var Tu = null;

    function vh(e) {
        Tu !== e && (Tu = e, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
            Tu === e && (Tu = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t],
                    n = e[t + 1],
                    a = e[t + 2];
                if (typeof n != "function") {
                    if (Zs(n || l) === null) continue;
                    break
                }
                var i = vn(l);
                i !== null && (e.splice(t, 3), t -= 3, Lc(i, {
                    pending: !0,
                    data: a,
                    method: l.method,
                    action: n
                }, n, a))
            }
        }))
    }

    function ni(e) {
        function t(b) {
            return Eu(b, e)
        }
        Bl !== null && Eu(Bl, e), Gl !== null && Eu(Gl, e), Hl !== null && Eu(Hl, e), ei.forEach(t), ti.forEach(t);
        for (var l = 0; l < kl.length; l++) {
            var n = kl[l];
            n.blockedOn === e && (n.blockedOn = null)
        }
        for (; 0 < kl.length && (l = kl[0], l.blockedOn === null);) yh(l), l.blockedOn === null && kl.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
            for (n = 0; n < l.length; n += 3) {
                var a = l[n],
                    i = l[n + 1],
                    f = a[ot] || null;
                if (typeof i == "function") f || vh(l);
                else if (f) {
                    var h = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, f = i[ot] || null) h = f.formAction;
                        else if (Zs(a) !== null) continue
                    } else h = f.action;
                    typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), vh(l)
                }
            }
    }

    function Js(e) {
        this._internalRoot = e
    }
    Au.prototype.render = Js.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(o(409));
        var l = t.current,
            n = St();
        oh(l, n, e, t, null, null)
    }, Au.prototype.unmount = Js.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            e.tag === 0 && Vn(), oh(e.current, 2, null, e, null, null), cu(), t[gn] = null
        }
    };

    function Au(e) {
        this._internalRoot = e
    }
    Au.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Qr();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < kl.length && t !== 0 && t < kl[l].priority; l++);
            kl.splice(l, 0, e), l === 0 && yh(e)
        }
    };
    var ph = s.version;
    if (ph !== "19.0.0") throw Error(o(527, ph, "19.0.0"));
    X.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
        return e = B(t), e = e !== null ? F(e) : null, e = e === null ? null : e.stateNode, e
    };
    var ng = {
        bundleType: 0,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        findFiberByHostInstance: Xl,
        reconcilerVersion: "19.0.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Du.isDisabled && Du.supportsFiber) try {
            sa = Du.inject(ng), yt = Du
        } catch {}
    }
    return ii.createRoot = function(e, t) {
        if (!d(e)) throw Error(o(299));
        var l = !1,
            n = "",
            a = Uf,
            i = Lf,
            f = Bf,
            h = null;
        return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = sh(e, 1, !1, null, null, l, n, a, i, f, h, null), e[gn] = t.current, Rs(e.nodeType === 8 ? e.parentNode : e), new Js(t)
    }, ii.hydrateRoot = function(e, t, l) {
        if (!d(e)) throw Error(o(299));
        var n = !1,
            a = "",
            i = Uf,
            f = Lf,
            h = Bf,
            b = null,
            T = null;
        return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (b = l.unstable_transitionCallbacks), l.formState !== void 0 && (T = l.formState)), t = sh(e, 1, !0, t, l ?? null, n, a, i, f, h, b, T), t.context = rh(null), l = t.current, n = St(), a = Ol(n), a.callback = null, _l(l, a, n), t.current.lanes = n, oa(t, n), It(t), e[gn] = t.current, Rs(e), new Au(t)
    }, ii.version = "19.0.0", ii
}
var _h;

function yg() {
    if (_h) return Ps.exports;
    _h = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (s) {
            console.error(s)
        }
    }
    return c(), Ps.exports = mg(), Ps.exports
}
var gg = yg();

function dn(c) {
    return typeof c == "string" && !c.includes("T") ? new Date(c + "T00:00:00") : new Date(c)
}
class im {
    constructor(s) {
        le(this, "fmt");
        this.fmt = Intl.DateTimeFormat("en-US", s)
    }
    format(s) {
        return this.fmt.format(dn(s))
    }
    parts(s) {
        return Object.fromEntries(this.fmt.formatToParts(dn(s)).map(r => [r.type, r.value]))
    }
}
const ci = class ci {
    constructor(s) {
        le(this, "date");
        le(this, "time");
        const r = ci.format.parts(dn(s ?? Date.now()));
        this.date = `${r.year}-${r.month}-${r.day}`, this.time = `${r.hour}:${r.minute}:${r.second}`
    }
    static setTimeZone(s) {
        const r = "2-digit";
        ci.format = new im({
            timeZone: s,
            hourCycle: "h23",
            year: "numeric",
            month: r,
            day: r,
            hour: r,
            minute: r,
            second: r
        })
    }
};
le(ci, "format");
let Be = ci;
Be.setTimeZone("America/New_York");

function vg(c) {
    c = dn(c);
    const s = c.getFullYear(),
        r = String(c.getMonth() + 1).padStart(2, "0"),
        o = String(c.getDate()).padStart(2, "0");
    return `${s}-${r}-${o}`
}

function na(c, s) {
    return c = dn(c), s && c.setDate(c.getDate() + s), vg(c)
}

function pe(c = {}) {
    const s = new Be,
        {
            date: r = s.date,
            time: o = s.time
        } = c;
    return (o ?? "1") > "03:00:00" ? r : na(r, -1)
}

function pg(c, s) {
    const r = dn(c),
        o = r.toLocaleString("en-US", {
            month: "long",
            day: "numeric"
        });
    if (s === "short") return o;
    const d = pe();
    return c === d ? `Today, ${o}` : c === na(d, 1) ? `Tomorrow, ${o}` : `${r.toLocaleString("en-US",{weekday:"long"})}, ${o}`
}

function pr(c) {
    if (!c.match(/^[\d:]+$/)) return c;
    const s = c.split(":").slice(0, 2).map(Number),
        r = s[0] >= 12 ? "PM" : "AM";
    return s[0] = s[0] % 12 || 12, s.map(o => String(o).padStart(2, "0")).join(":").replace(/^0/, "") + " " + r
}

function Wt(c) {
    const [s, r] = c.slice(0, 19).split("T");
    return {
        date: s,
        time: r
    }
}

function Yl(c) {
    const [s, r] = c.split(":").map(Number);
    return (s + 17) % 24 * 60 + r
}

function ea(c) {
    if (!Array.isArray(c)) return [];
    const s = new Be().time.slice(0, 5),
        r = c.findIndex(o => o >= s);
    return r >= 0 ? c.slice(r) : []
}
const nr = c => Array.isArray(c) ? c.join(".") : c,
    Oe = {
        get(c) {
            const s = localStorage.getItem(nr(c));
            try {
                return JSON.parse(s ?? "")
            } catch {
                return
            }
        },
        set(c, s) {
            localStorage.setItem(nr(c), JSON.stringify(s))
        },
        delete(c) {
            localStorage.removeItem(nr(c))
        },
        clear() {
            localStorage.clear()
        },
        getDaily(c) {
            const {
                date: s,
                value: r
            } = this.get(c) ?? {};
            return s === pe() ? r : void 0
        },
        setDaily(c, s) {
            this.set(c, {
                date: pe(),
                value: s
            })
        }
    },
    ar = ["bg1", "auth"];
class um extends Error {
    constructor() {
        super("Auth data missing or expired");
        le(this, "name", "ReauthNeeded")
    }
}
class xg {
    constructor() {
        le(this, "onUnauthorized", () => {})
    }
    getData() {
        try {
            const s = Oe.get(ar);
            if (s) {
                const {
                    swid: r,
                    accessToken: o,
                    expires: d
                } = s, m = new Be(d), p = new Be;
                if (m.date > p.date || m.date === p.date && m.time > p.time && m.time >= "17") return {
                    swid: r,
                    accessToken: o
                }
            }
        } catch (s) {
            console.error(s)
        }
        throw this.deleteData(), new um
    }
    setData(s) {
        Oe.set(ar, s)
    }
    deleteData() {
        Oe.delete(ar), setTimeout(this.onUnauthorized)
    }
}
const qt = new xg,
    bg = 8e3;
async function cm(c, s = {}) {
    const {
        params: r,
        data: o,
        timeout: d = bg,
        ...m
    } = s;
    return s = m, s.referrer || (s.referrer = ""), s.credentials || (s.credentials = "omit"), s.cache || (s.cache = "no-store"), s.headers = {
        ...s.headers || {}
    }, r && Object.keys(r).length > 0 && (c += (c.includes("?") ? "&" : "?") + Object.entries(r).filter(([, p]) => p !== "").map(p => p.map(encodeURIComponent).join("=")).join("&")), o && (s.method || (s.method = "POST"), s.headers = {
        ...s.headers,
        "Content-Type": "application/json"
    }, s.body = JSON.stringify(o)), s.method || (s.method = "GET"), Sg(c, s, async () => {
        const p = new AbortController;
        s.signal = p.signal;
        const v = setTimeout(() => p.abort(), d);
        let y;
        try {
            y = await fetch(c, s)
        } catch (S) {
            return console.error(S), {
                ok: !1,
                status: 0,
                data: null
            }
        } finally {
            clearTimeout(v)
        }
        return {
            ok: y.ok,
            status: y.status,
            data: (y.headers.get("Content-Type") || "").startsWith("application/json") ? await y.json() : {}
        }
    })
}
const ir = {};

function Sg(c, s, r) {
    const o = s.method + c,
        d = ir[o];
    if (d) return d;
    const m = r();
    return ir[o] = m, setTimeout(() => {
        delete ir[o]
    }, 10), m
}
class jg extends Error {
    constructor() {
        super(...arguments);
        le(this, "name", "RateLimitExceeded")
    }
}
class Eg {
    constructor(s = 0) {
        le(this, "lastRequestTime", 0);
        le(this, "requestCount", 0);
        le(this, "limitExceededTime", 0);
        this.requestsPerSecond = s
    }
    enforce() {
        const s = Math.floor(performance.now() / 1e3);
        if (this.lastRequestTime !== s && (this.lastRequestTime = s, this.requestCount = 0), ++this.requestCount > this.requestsPerSecond && (this.limitExceededTime = s), this.limitExceededTime > 0) throw new jg
    }
}
class sm extends Error {
    constructor() {
        super(...arguments);
        le(this, "name", "InvalidOrigin")
    }
}
class Fn extends Error {
    constructor(r, o = "Request failed") {
        super(`${o}: ${JSON.stringify(r)}`);
        le(this, "name", "RequestError");
        this.response = r
    }
}
class ri {
    constructor(s) {
        le(this, "resort");
        le(this, "origin");
        le(this, "rateLimit", new Eg(5));
        this.resort = s, this.origin = this.constructor.origins[this.resort.id]
    }
    static originToResortId(s) {
        var d;
        const o = (d = Object.entries(this.origins).find(([, m]) => m === s)) == null ? void 0 : d[0];
        if (o) return o;
        throw new sm(s)
    }
    async request(s) {
        this.rateLimit.enforce();
        const {
            swid: r,
            accessToken: o
        } = qt.getData(), d = this.origin + s.path, m = await cm(d, {
            method: s.method,
            params: s.params,
            data: s.data,
            headers: {
                "Accept-Language": "en-US",
                Authorization: `BEARER ${o}`,
                "x-user-id": r
            }
        });
        if (m.status === 401 && !s.ignoreUnauth) setTimeout(() => qt.deleteData());
        else {
            const {
                key: p
            } = s;
            if (m.ok && (!p || m.data[p])) return {
                ...m,
                data: p ? m.data[p] : m.data
            }
        }
        throw new Fn(m)
    }
}
le(ri, "origins", {
    WDW: "https://disneyworld.disney.go.com",
    DLR: "https://disneyland.disney.go.com"
});
const Tg = {
        48199: "Mr-Incredible",
        48200: "Mrs-Incredible",
        261227: "Nemo",
        339625: "Russell",
        339626: "Carl",
        364907: "Jack-Skellington",
        431014: "Princess-Tiana",
        431065: "Darth_Vader",
        15549505: "Rapunzel",
        15655408: "Default_SignedIn",
        15675686: "Crush",
        15831168: "Wall-E",
        16453979: "Merida",
        16726412: "Stormtrooper",
        16818199: "Violet",
        16869301: "Jack-Jack",
        17345357: "R2-D2",
        17345359: "C-3PO",
        17532220: "Bruce",
        17532224: "Green-Alien",
        17532227: "Kermit",
        17532228: "Sorcerer-Mickey",
        17577168: "Elsa",
        17577169: "Anna",
        17813977: "Olaf",
        17888784: "Yoda",
        18101167: "Captain-Mickey",
        18368743: "-Nick",
        18368747: "-Judy",
        18393706: "-Flash",
        18403761: "kion",
        18405224: "-Moana",
        18405236: "-Elena",
        19633995: "50th_Mickey",
        19633996: "50th_Minnie",
        90003819: "Alice",
        90003846: "Ariel",
        90003898: "Belle",
        90003967: "Buzz",
        90003976: "Captain-Hook",
        90004004: "Chesire-Cat",
        90004017: "Cinderella",
        90004068: "Daisy",
        90004076: "Dash",
        90004104: "Donald",
        90004228: "Goofy",
        90004260: "Hamm",
        90004328: "Princess-Jasmine",
        90004340: "Jiminy",
        90004395: "Lady",
        90004482: "Mickey-Mouse",
        90004486: "Minnie",
        90004537: "Mulan",
        90004605: "Peter-Pan",
        90004625: "Pluto",
        90004626: "Pocahontas",
        90004642: "Princess-Aurora",
        90004682: "Rex",
        90004772: "Snow-White",
        90004778: "Sparky",
        90004846: "TinkerBell",
        90004860: "Tramp",
        90004939: "Zero"
    },
    xr = "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/90/90/75/dam/",
    Ag = xr + "wdpro-assets/avatars/180x180/RetAvatar_180x180_",
    Dg = xr + "wdpro-assets/avatars/180x180/RetAvatar-180x180",
    Ng = xr + "disney-world/50th-anniversary/avatars/RetAvatar_180x180_",
    Mg = {
        "-": Dg,
        5: Ng
    };

function br(c) {
    const s = Tg[c || ""];
    if (s) return (Mg[s[0]] || Ag) + s + ".png"
}
const zu = {
        bg: "bg-blue-500",
        text: "text-blue-500"
    },
    Pe = x.createContext(zu),
    Og = "modulepreload",
    _g = function(c) {
        return "/bg1/" + c
    },
    Rh = {},
    wu = function(s, r, o) {
        let d = Promise.resolve();
        if (r && r.length > 0) {
            document.getElementsByTagName("link");
            const p = document.querySelector("meta[property=csp-nonce]"),
                g = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute("nonce"));
            d = Promise.allSettled(r.map(v => {
                if (v = _g(v), v in Rh) return;
                Rh[v] = !0;
                const y = v.endsWith(".css"),
                    S = y ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${v}"]${S}`)) return;
                const D = document.createElement("link");
                if (D.rel = y ? "stylesheet" : Og, y || (D.as = "script"), D.crossOrigin = "", D.href = v, g && D.setAttribute("nonce", g), document.head.appendChild(D), y) return new Promise((w, G) => {
                    D.addEventListener("load", w), D.addEventListener("error", () => G(new Error(`Unable to preload CSS for ${v}`)))
                })
            }))
        }

        function m(p) {
            const g = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (g.payload = p, window.dispatchEvent(g), !g.defaultPrevented) throw p
        }
        return d.then(p => {
            for (const g of p || []) g.status === "rejected" && m(g.reason);
            return s().catch(m)
        })
    },
    Rg = (c, s, r) => {
        const o = c[s];
        return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((d, m) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(m.bind(null, new Error("Unknown variable dynamic import: " + s + (s.split("/").length !== r ? ". Note that variables only represent file names one level deep." : ""))))
        })
    };
class yl extends Error {
    constructor(r) {
        super(`Invalid ID: ${r}`);
        le(this, "name", "InvalidId")
    }
}
class rm {
    constructor(s, r) {
        le(this, "id");
        le(this, "parks");
        le(this, "parksById");
        le(this, "expsById");
        le(this, "dropExpsByPark");
        var o, d, m;
        this.id = s, this.parks = r.parks, this.parksById = Object.fromEntries(this.parks.map(p => [p.id, p])), this.expsById = r.experiences, this.dropExpsByPark = new Map(this.parks.map(p => [p, []]));
        for (const [p, g] of Object.entries(this.expsById)) g && (g.id = p, g.park = g.land.park), g != null && g.dropTimes && ((o = this.dropExpsByPark.get(g.land.park)) == null || o.push(g));
        for (const p of this.parks) p.dropTimes = [...new Set((d = this.dropExpsByPark.get(p)) == null ? void 0 : d.flatMap(g => g.dropTimes ?? []))].sort(), (m = this.dropExpsByPark.get(p)) == null || m.sort((g, v) => g.name.localeCompare(v.name))
    }
    experience(s) {
        const r = this.expsById[s];
        if (r) return r;
        throw r !== null && console.warn(`Missing experience: ${s}`), new yl(s)
    }
    park(s) {
        const r = this.parksById[s];
        if (r) return r;
        throw new yl(s)
    }
    dropExperiences(s) {
        return this.dropExpsByPark.get(s) ?? []
    }
}
async function wg(c) {
    const s = await Rg(Object.assign({
        "./data/dlr.ts": () => wu(() => import("./dlr.js"), []),
        "./data/wdw.ts": () => wu(() => import("./wdw.js"), [])
    }), `./data/${c.toLowerCase()}.ts`, 3);
    return new rm(c, s)
}
const zg = 60,
    Cg = {
        WDW: "wdw-itinerary-api",
        DLR: "dlr-itinerary-web-api"
    };

function ia(c, s, r) {
    return c.type === s && c.subtype === r
}
const Ug = new Set(["ACTIVITY", "DINING"]),
    ui = c => c.split(";")[0];
class Lg extends ri {
    constructor() {
        super(...arguments);
        le(this, "onRefresh", () => {});
        le(this, "onUnauthorized", () => {})
    }
    async plans() {
        const {
            swid: r
        } = qt.getData(), o = new Be().date, d = pe(), m = Cg[this.resort.id], {
            data: {
                loggedInGuestId: p = "",
                items: g = [],
                assets: v = {},
                profiles: y = {}
            }
        } = await this.request({
            path: `/plan/${m}/api/v1/itinerary-items/${r}?item-types=FASTPASS&item-types=DINING&item-types=ACTIVITY&item-types=VIRTUAL_QUEUE_POSITION`,
            params: {
                destination: this.resort.id,
                fields: "items,profiles,assets,loggedInGuestId",
                "guest-locators": r + ";type=swid",
                "guest-locator-groups": "MY_FAMILY",
                "start-date": o,
                "show-friends": "false"
            },
            ignoreUnauth: !0
        }), S = ui(p), D = _ => {
            const {
                name: z,
                avatarId: Q,
                type: L
            } = y[_.id], H = ui(_.id);
            return {
                id: H,
                name: `${z.firstName??""} ${z.lastName??""}`.trim(),
                avatarImageUrl: br(Q),
                primary: H === S,
                ...L === "transactional" && {
                    transactional: !0
                }
            }
        }, w = new Date;
        w.setMinutes(w.getMinutes() - zg);
        const G = _ => {
                const z = v[_.asset];
                if (!z) return;
                const Q = v[z.facility];
                if (!Q) return;
                const L = Q.location ?? "",
                    H = this.park(L),
                    Z = v[L];
                H.name === "" && L && Z && (H.name = Z.name);
                const re = new Date(_.startDateTime);
                return re < w ? void 0 : {
                    type: "RES",
                    subtype: _.type,
                    id: ui(_.asset),
                    park: H,
                    name: z.name,
                    start: new Be(re),
                    guests: _.guests.map(D).sort((et, mt) => +mt.primary - +et.primary || +!mt.transactional - +!et.transactional || et.name.localeCompare(mt.name)),
                    bookingId: _.id
                }
            },
            k = _ => {
                const z = v[_.facility],
                    Q = new Set;
                return {
                    ...this.experienceData(_.facility, z == null ? void 0 : z.location, z == null ? void 0 : z.name),
                    start: (_.displayStartDate ?? o) < d ? {
                        date: d
                    } : {
                        date: _.displayStartDate ?? o,
                        time: _.displayStartTime
                    },
                    end: {
                        date: _.displayEndDate,
                        time: _.displayEndTime
                    },
                    guests: _.guests.filter(L => Q.has(L.id) || L.redemptionsRemaining === 0 ? !1 : (Q.add(L.id), !0)).map(L => ({
                        ...D(L),
                        entitlementId: L.entitlementId,
                        bookingId: L.bookingId,
                        ...L.redemptionsRemaining !== void 0 && {
                            redemptions: Math.min(L.redemptionsRemaining, L.redemptionsAllowed ?? 1)
                        }
                    })),
                    bookingId: _.id
                }
            },
            q = _ => {
                var H;
                const z = {
                        FLEX: "MP",
                        STANDARD: "SP",
                        OTHER: "OTHER"
                    } [_.kind] ?? "OTHER",
                    Q = z === "MP";
                let L = {
                    type: "LL",
                    subtype: z,
                    ...k(_),
                    cancellable: _.cancellable && Q,
                    modifiable: _.modifiable && Q,
                    bookingId: _.id
                };
                if (_.multipleExperiences) {
                    const Z = _.assets.find(re => re.original);
                    L = {
                        ...L,
                        ...Z ? this.experienceData(Z.content, (H = v[Z.content]) == null ? void 0 : H.location) : {
                            id: "",
                            name: ""
                        }
                    }, L.choices = _.assets.filter(re => !re.excluded && !re.original).map(({
                        content: re
                    }) => {
                        const {
                            name: st,
                            location: et
                        } = v[re] ?? {};
                        return this.experienceData(re, et, st)
                    }).sort((re, st) => re.name.localeCompare(st.name))
                }
                return L
            },
            K = _ => {
                const Q = {
                        DAS: "IN_PARK",
                        FDS: "ADVANCE"
                    } [_.kind],
                    L = Q === "IN_PARK";
                return {
                    type: "DAS",
                    subtype: Q,
                    cancellable: _.cancellable && L,
                    ...k(_)
                }
            },
            ue = _ => {
                const z = v[_.asset];
                if (!z) return;
                const Q = v[z.facility];
                if (!Q) return;
                const L = this.experienceData(z.facility, Q.location, z.name);
                return L.park.name === "" && (L.park.name = Q.name), {
                    ...L,
                    type: "BG",
                    boardingGroup: _.boardingGroup.id,
                    status: _.status,
                    start: new Be(new Date(_.startDateTime)),
                    guests: _.guests.map(D),
                    bookingId: _.id
                }
            },
            ee = {
                PARK_PASS: _ => {
                    var Q;
                    const z = this.park(((Q = v[_.facility]) == null ? void 0 : Q.location) ?? _.facility);
                    if (z) return {
                        type: "APR",
                        id: z.id,
                        name: z.name,
                        park: z,
                        start: {
                            date: _.displayStartDate,
                            time: "06:00:00"
                        },
                        guests: _.guests.map(D),
                        bookingId: _.id
                    }
                },
                DAS: K,
                FDS: K
            },
            Ue = g.map(_ => {
                try {
                    if (_.type === "FASTPASS") return (ee[_.kind] ?? q)(_);
                    if (_.type === "VIRTUAL_QUEUE_POSITION") return ue(_);
                    if (_.type && Ug.has(_.type)) return G(_)
                } catch (z) {
                    console.error(z)
                }
            }).filter(_ => !!_);
        return this.onRefresh(Ue), Ue
    }
    experienceData(r, o, d = "Experience") {
        r = ui(r);
        try {
            const m = this.resort.experience(r);
            return {
                id: r,
                name: m.name,
                park: m.park
            }
        } catch (m) {
            if (m instanceof yl && o) return {
                id: r,
                name: d,
                park: this.park(o)
            };
            throw m
        }
    }
    park(r) {
        r = ui(r);
        try {
            return this.resort.park(r)
        } catch (o) {
            if (o instanceof yl) return {
                id: r,
                name: "",
                icon: "",
                geo: {
                    n: 0,
                    s: 0,
                    e: 0,
                    w: 0
                },
                theme: zu,
                dropTimes: []
            };
            throw o
        }
    }
}
class Bg extends Error {
    constructor() {
        super(...arguments);
        le(this, "name", "ModifyNotAllowed")
    }
}

function om(c) {
    if (c && !c.modifiable) throw new Bg
}
class Sr extends Error {
    constructor(r) {
        super("Offer request failed");
        le(this, "name", "OfferError");
        this.guests = r
    }
}

function ur(c, s, r) {
    return +(s.ineligibleReason === r) - +(c.ineligibleReason === r)
}
var si, la;
class jr extends ri {
    constructor(r, o) {
        super(r);
        le(this, "rules", {
            maxPartySize: 12,
            parkModify: !1,
            prebook: !1,
            timeSelect: !1
        });
        le(this, "nextBookTime");
        le(this, "onUnauthorized", () => {});
        le(this, "partyIds", new Set);
        le(this, "tracker");
        $s(this, si, null);
        $s(this, la, "");
        le(this, "convertGuest", r => {
            const {
                id: o,
                firstName: d,
                lastName: m,
                characterId: p,
                ...g
            } = r, v = `${d??""} ${m??""}`.trim(), y = br(p);
            return this.partyIds.size > 0 && !this.partyIds.has(o) && (g.ineligibleReason = "NOT_IN_PARTY", delete g.eligibleAfter), {
                ...g,
                id: o,
                name: v,
                avatarImageUrl: y
            }
        });
        this.tracker = o ?? new Gg
    }
    get lastOffer() {
        return Nu(this, si)
    }
    setPartyIds(r) {
        this.partyIds = new Set(r)
    }
    async experiences(r, o) {
        var m, p, g, v;
        const {
            data: d
        } = await this.request({
            path: `/tipboard-vas/planning/v1/parks/${encodeURIComponent(r.id)}/experiences/`,
            params: {
                eligibilityGuestIds: await this.primaryGuestId(),
                date: o
            },
            userId: !0
        });
        return this.nextBookTime = (v = (((g = (p = (m = d.eligibility) == null ? void 0 : m.geniePlusEligibility) == null ? void 0 : p[pe()]) == null ? void 0 : g.flexEligibilityWindows) || []).sort((y, S) => y.time.time.localeCompare(S.time.time))[0]) == null ? void 0 : v.time.time, d.availableExperiences.flatMap(y => {
            try {
                return [{
                    ...y,
                    ...this.resort.experience(y.id),
                    park: r,
                    experienced: this.tracker.experienced(y)
                }]
            } catch (S) {
                if (S instanceof yl) return [];
                throw S
            }
        })
    }
    track(r) {
        this.tracker.update(r, this)
    }
    async cancelBooking(r) {
        const d = r.map(m => m.entitlementId).map(encodeURIComponent).join(",");
        await this.request({
            path: `/ea-vas/api/v1/entitlements/${d}`,
            method: "DELETE"
        })
    }
    async primaryGuestId() {
        var r;
        if (!Nu(this, la)) {
            const {
                eligible: o,
                ineligible: d
            } = await this.guests();
            Is(this, la, ((r = [...o, ...d].find(m => m.primary)) == null ? void 0 : r.id) ?? "")
        }
        return Nu(this, la)
    }
    async request(r) {
        if (r.userId) {
            const {
                swid: o
            } = qt.getData();
            r = {
                ...r
            }, r.params = {
                ...r.params,
                userId: o
            }
        }
        return super.request(r)
    }
    parseGuestData(r) {
        const {
            guests: o,
            ineligibleGuests: d
        } = r, m = d.map(this.convertGuest), p = o.map(this.convertGuest).filter(g => !g.ineligibleReason || m.push(g) && !1);
        return m.sort((g, v) => {
            const y = +!g.primary - +!v.primary || g.name.localeCompare(v.name);
            return g.eligibleAfter || v.eligibleAfter ? (g.eligibleAfter || "9").localeCompare(v.eligibleAfter || "9") || y : g.ineligibleReason === v.ineligibleReason ? y : ur(v, g, "NOT_IN_PARTY") || ur(v, g, "MULTI_PASS_NEEDED") || ur(g, v, "EXPERIENCE_LIMIT_REACHED") || y
        }), {
            eligible: p,
            ineligible: m
        }
    }
    updateLastOffer(r) {
        return Is(this, si, r), r
    }
}
si = new WeakMap, la = new WeakMap;
const wh = ["bg1", "ll", "bookings"];
class Gg {
    constructor() {
        le(this, "bookedIds", new Set);
        le(this, "experiencedIds", new Set);
        this.load()
    }
    experienced(s) {
        return this.experiencedIds.has(s.id)
    }
    async update(s, r) {
        this.load();
        const o = pe(),
            d = s.filter(p => ia(p, "LL", "MP") && !!p.cancellable && pe(p.start) === o);
        for (const p of d) this.experiencedIds[p.modifiable ? "delete" : "add"](p.id);
        const m = this.bookedIds;
        this.bookedIds = new Set(d.map(p => p.id));
        for (const p of m) {
            if (this.bookedIds.has(p)) continue;
            const {
                ineligible: g
            } = await r.guests({
                id: p
            }), v = g.some(y => y.ineligibleReason === "EXPERIENCE_LIMIT_REACHED");
            this.experiencedIds[v ? "add" : "delete"](p)
        }
        this.save()
    }
    load() {
        const {
            booked: s = [],
            experienced: r = []
        } = Oe.getDaily(wh) ?? {};
        this.bookedIds = new Set(s), this.experiencedIds = new Set(r)
    }
    save() {
        Oe.setDaily(wh, {
            booked: [...this.bookedIds],
            experienced: [...this.experiencedIds]
        })
    }
}
const Hg = c => c.sort((s, r) => +r.primary - +s.primary || +r.preselected - +s.preselected || s.name.localeCompare(r.name)),
    kg = c => `/application/v1/guest/${c}`;
class Er extends ri {
    async getQueues() {
        var r;
        const s = await this.post({
            resource: "getQueues"
        });
        if (!Array.isArray((r = s.data) == null ? void 0 : r.queues)) throw new Fn(s);
        return s.data.queues.filter(o => !!o.categoryContentId).map(({
            queueId: o,
            tabContentId: d = "",
            ...m
        }) => {
            const p = {
                ...m,
                id: o
            };
            try {
                p.park = this.resort.park(d.split(";")[0])
            } catch (g) {
                if (!(g instanceof yl)) throw g
            }
            return p
        })
    }
    async getQueue(s) {
        const r = (await this.getQueues()).find(o => o.id === s.id);
        if (r) return r;
        throw new Error("Queue not Found")
    }
    async getLinkedGuests(s) {
        const {
            data: r
        } = await this.post({
            resource: "getLinkedGuests",
            data: {
                queueId: s.id,
                requestType: "REVIEW"
            }
        });
        return Hg(r.guests.map(({
            guestId: o,
            firstName: d = "",
            lastName: m = "",
            isPrimaryGuest: p,
            isPreselected: g,
            avatarImageUrl: v
        }) => ({
            id: o,
            name: `${d} ${m}`.trim(),
            primary: !!p,
            preselected: !!g,
            avatarImageUrl: v
        })))
    }
    async joinQueue(s, r) {
        const o = r.map(p => p.id),
            d = await this.post({
                resource: "joinQueue",
                data: {
                    queueId: s.id,
                    guestIds: o
                }
            }),
            {
                data: m
            } = d;
        if (m.responseStatus === "OK") {
            const p = m.positions.find(g => g.queueId === s.id && g.guestIds.length > 0 && o.some(v => g.guestIds.includes(v)));
            if (!p) throw new Fn(d);
            return {
                boardingGroup: p.boardingGroup,
                conflicts: {},
                closed: !1
            }
        } else if (m.responseStatus === "INVALID_GUEST" || m.responseStatus === "CLOSED_QUEUE") {
            const p = m.responseStatus === "CLOSED_QUEUE",
                g = new Set,
                v = {};
            for (const D of m.conflicts)
                for (const w of D.guestIds) {
                    const G = r.find(k => k.id === w);
                    G && (v[G.id] = D.conflictType, g.add(w))
                }
            const y = r.filter(D => !g.has(D.id));
            if (p || y.length === 0) return {
                boardingGroup: null,
                conflicts: v,
                closed: p
            };
            const S = await this.joinQueue(s, y);
            return S.conflicts = {
                ...v,
                ...S.conflicts
            }, S
        } else throw new Fn(d)
    }
    async post(s) {
        try {
            return await this.request({
                ...s,
                path: kg(s.resource)
            })
        } catch (r) {
            if (r instanceof Fn) {
                const o = r.response,
                    {
                        ok: d,
                        status: m
                    } = o;
                if (!d && m < 500 && m !== 401) return o
            }
            throw r
        }
    }
}
le(Er, "origins", {
    WDW: "https://vqguest-svc-wdw.wdprapps.disney.com",
    DLR: "https://vqguest-svc.wdprapps.disney.com"
});
const Wn = (c, s) => `/das-vas/api/v${s}/${c}`;

function zh(c) {
    return {
        id: c.id,
        name: c.name.replace(/ \(Me\)$/, ""),
        avatarImageUrl: br(c.characterId)
    }
}

function Ch(c, s) {
    return {
        primaryGuestId: c.id,
        guestIds: s.map(r => r.id).join(",")
    }
}
class fm extends Error {
    constructor(r) {
        super();
        le(this, "name", "ConflictsError");
        this.conflicts = r
    }
}
class qg extends Error {
    constructor() {
        super(...arguments);
        le(this, "name", "ExperienceUnavailable")
    }
}
class Yg extends ri {
    constructor() {
        super(...arguments);
        le(this, "bookingGuestId")
    }
    async experiences(r) {
        const o = encodeURIComponent(r.id),
            {
                data: d
            } = await this.request({
                path: Wn(`availability/parks/${o}/experiences`, 2),
                key: "experiences"
            });
        return d.filter(m => m.available && !!m.nextAvailableStartDateTime).map(({
            id: m,
            name: p,
            type: g,
            available: v,
            nextAvailableStartDateTime: y
        }) => {
            const {
                time: S
            } = Wt(y);
            try {
                return {
                    type: g,
                    ...this.resort.experience(m),
                    available: v,
                    time: S
                }
            } catch {
                return {
                    id: m,
                    name: p,
                    type: g,
                    available: v,
                    time: S
                }
            }
        }).sort((m, p) => m.name.localeCompare(p.name))
    }
    async parties() {
        const {
            swid: r
        } = qt.getData(), {
            data: {
                bookingGuestId: o,
                parties: d
            }
        } = await this.request({
            path: Wn(`users/${encodeURIComponent(r)}/parties`, 1)
        });
        return this.bookingGuestId = o, d.map(m => ({
            primaryGuest: zh(m.primaryGuest),
            linkedGuests: m.linkedGuests.map(zh),
            selectionLimit: m.selectionLimit
        }))
    }
    async book({
        park: r,
        experience: o,
        primaryGuest: d,
        guests: m
    }) {
        var S;
        const p = await this.eligibility({
                park: r,
                experience: o,
                primaryGuest: d,
                guests: m
            }),
            g = new Set((S = p.find(({
                type: D
            }) => D === "ELIGIBLE")) == null ? void 0 : S.guestIds);
        if (!m.every(D => g.has(D.id))) throw new fm(Object.fromEntries(p.filter(D => D.type !== "ELIGIBLE").flatMap(D => D.guestIds.map(w => [w, D.type]))));
        const v = new Map(m.map(D => [D.id, D])),
            {
                data: y
            } = await this.request({
                path: Wn("bookings", 2),
                key: "booking",
                data: {
                    bookingGuestId: this.bookingGuestId,
                    primaryGuestId: d.id,
                    guestIds: m.map(D => D.id),
                    experienceId: o.id,
                    ...await this.availability({
                        experience: o,
                        primaryGuest: d,
                        guests: m
                    })
                }
            });
        return {
            type: "DAS",
            subtype: "IN_PARK",
            id: o.id,
            name: o.name,
            park: r,
            guests: y.entitlements.map(D => {
                const w = v.get(D.guestId);
                return {
                    id: D.guestId,
                    name: (w == null ? void 0 : w.name) ?? "",
                    avatarImageUrl: w == null ? void 0 : w.avatarImageUrl,
                    entitlementId: D.id
                }
            }),
            start: Wt(y.startDateTime),
            end: {},
            bookingId: y.id
        }
    }
    async cancelBooking(r) {
        const d = r.map(m => m.entitlementId).map(encodeURIComponent).join(",");
        await this.request({
            path: Wn(`entitlements/${d}`, 1),
            method: "DELETE"
        })
    }
    async eligibility({
        park: r,
        experience: o,
        primaryGuest: d,
        guests: m
    }) {
        const {
            data: p
        } = await this.request({
            path: Wn("eligibility", 1),
            params: {
                experienceId: o.id,
                parkId: r.id,
                ...Ch(d, m)
            },
            key: "eligibility"
        });
        return p
    }
    async availability({
        experience: r,
        primaryGuest: o,
        guests: d
    }) {
        const m = encodeURIComponent(r.id),
            {
                data: {
                    startDateTime: p,
                    endDateTime: g
                }
            } = await this.request({
                path: Wn(`availability/experiences/${m}`, 3),
                params: Ch(o, d)
            });
        if (!p || !g) throw new qg;
        return {
            startDateTime: p,
            endDateTime: g
        }
    }
}
class Qg {
    constructor(s) {
        le(this, "cachedShowtimes", {});
        this.resort = s
    }
    async shows(s) {
        Object.keys(this.cachedShowtimes).length === 0 && (this.cachedShowtimes = (await this.request("showtimes")).data);
        const r = this.cachedShowtimes[s.id] ?? {},
            {
                time: o
            } = new Be;
        return Object.fromEntries(Object.entries(r).flatMap(([d, m]) => {
            const p = m.filter(D => D >= o),
                g = p[0],
                v = p.slice(1),
                y = g !== void 0,
                S = y ? void 0 : "NO_MORE_SHOWS";
            try {
                return [
                    [d, {
                        type: "ENTERTAINMENT",
                        ...this.resort.experience(d),
                        park: s,
                        standby: {
                            available: y,
                            unavailableReason: S,
                            nextShowTime: g
                        },
                        additionalShowTimes: v
                    }]
                ]
            } catch (D) {
                if (D instanceof yl) return [];
                throw D
            }
        }))
    }
    async request(s) {
        const r = await cm(`https://bg1.joelface.com/livedata/${this.resort.id.toLowerCase()}/${s}.json`);
        if (!r.ok) throw new Error("Fetch failed");
        return r
    }
}
const Xg = "353295",
    Vg = "330339";
class Zg extends jr {
    async experiences(s) {
        return super.experiences(s, pe())
    }
    async guests(s) {
        const {
            data: r
        } = await this.request({
            path: "/ea-vas/api/v1/guests",
            params: {
                productType: "FLEX",
                experienceId: (s == null ? void 0 : s.id) ?? Xg,
                parkId: s ? this.resort.experience(s.id).park.id : Vg
            },
            userId: !0
        });
        return this.parseGuestData(r)
    }
    async offer(s, r, {
        booking: o
    } = {}) {
        var G;
        om(o);
        const {
            data: {
                offer: {
                    id: d,
                    date: m,
                    startTime: p,
                    endTime: g,
                    status: v,
                    changeStatus: y
                },
                eligibleGuests: S,
                ineligibleGuests: D
            }
        } = await this.request({
            path: o ? "/ea-vas/api/v1/products/modifications/flex/offers" : "/ea-vas/api/v2/products/flex/offers",
            data: {
                guestIds: ((o == null ? void 0 : o.guests) ?? r).map(k => k.id),
                ineligibleGuests: [],
                primaryGuestId: r.map(k => k.id).sort((k, q) => k.localeCompare(q))[0],
                parkId: s.park.id,
                experienceId: s.id,
                selectedTime: ((G = s.flex) == null ? void 0 : G.nextAvailableTime) ?? "08:00:00",
                ...o ? {
                    date: new Be().date,
                    modificationType: s.id === o.id ? "TIME" : "EXPERIENCE"
                } : {}
            }
        });
        wu(() => import("./diu.js"), []);
        const w = {
            eligible: (S || []).map(this.convertGuest),
            ineligible: (D || []).map(this.convertGuest)
        };
        if (v !== "ACTIVE") throw new Sr(w);
        return this.updateLastOffer({
            id: d,
            start: {
                date: m,
                time: p
            },
            end: {
                date: m,
                time: g
            },
            changed: y !== "NONE",
            booking: o,
            guests: w,
            experience: s
        })
    }
    async times() {
        return []
    }
    async changeOfferTime(s) {
        return s
    }
    async book(s, r) {
        var k;
        const o = (await wu(async () => {
                const {
                    default: q
                } = await import("./diu.js");
                return {
                    default: q
                }
            }, [])).default,
            d = new Map(s.guests.eligible.map(q => [q.id, q])),
            m = new Set((r ?? s.guests.eligible).map(q => q.id)),
            {
                data: p
            } = await this.request({
                path: s.booking ? "/ea-vas/api/v2/products/modifications/flex/bookings" : "/ea-vas/api/v2/products/flex/bookings",
                data: {
                    offerId: s.id,
                    ...await o(s.id),
                    ...s.booking ? {
                        date: new Be().date,
                        modificationType: s.booking.id === s.experience.id ? "TIME" : "EXPERIENCE",
                        existingEntitlements: s.booking.guests.filter(q => m.has(q.id)).map(q => ({
                            entitlementId: q.entitlementId,
                            entitlementBookingId: q.bookingId
                        })),
                        guestIdsToExclude: s.booking.guests.filter(q => !m.has(q.id)).map(q => q.id)
                    } : {}
                },
                key: "booking"
            }),
            {
                singleExperienceDetails: {
                    experienceId: g
                },
                entitlements: v,
                startDateTime: y,
                endDateTime: S
            } = p,
            {
                id: D,
                name: w,
                park: G
            } = this.resort.experience(g);
        return {
            id: D,
            name: w,
            park: G,
            type: "LL",
            subtype: "MP",
            bookingId: (k = v[0]) == null ? void 0 : k.id,
            start: Wt(y),
            end: Wt(S),
            cancellable: !0,
            modifiable: !0,
            guests: v.map(q => ({
                id: q.guestId,
                name: "Guest",
                ...d.get(q.guestId),
                entitlementId: q.id
            }))
        }
    }
}
class Kg extends jr {
    constructor() {
        super(...arguments);
        le(this, "rules", {
            maxPartySize: 20,
            parkModify: !0,
            prebook: !0,
            timeSelect: !0
        })
    }
    async experiences(r, o) {
        const d = await super.experiences(r, o);
        if (d.length > 0) return d;
        const {
            data: m
        } = await this.request({
            path: "/ea-vas/planning/api/v1/experiences/availability/bundles/experiences",
            data: {
                parkId: r.id,
                date: o,
                guestIds: [await this.primaryGuestId()],
                existingOfferIds: [],
                orderId: null
            }
        });
        return m.tiers.flatMap(p => p.experiences.flatMap(g => {
            if (!g.isAvailable) return [];
            try {
                return {
                    type: "ATTRACTION",
                    ...this.resort.experience(g.facilityId),
                    flex: {
                        available: !1
                    },
                    standby: {
                        available: !1,
                        unavailableReason: "CLOSED"
                    }
                }
            } catch (v) {
                if (v instanceof yl) return [];
                throw v
            }
        }))
    }
    async guests(r, o) {
        const {
            data: d
        } = await this.request({
            path: "/ea-vas/planning/api/v1/experiences/guest/guests",
            data: {
                date: o ?? new Be().date,
                facilityId: (r == null ? void 0 : r.id) ?? null,
                parkId: r ? this.resort.experience(r.id).park.id : this.resort.parks[0].id
            }
        });
        return this.parseGuestData(d)
    }
    async offer(r, o, d) {
        var P;
        const m = pe(),
            {
                date: p,
                booking: g
            } = {
                date: m,
                booking: void 0,
                ...d
            };
        om(g);
        const {
            nextAvailableTime: v
        } = r.flex ?? {}, {
            data: y
        } = await this.request({
            path: `/ea-vas/planning/api/v1/experiences${g?"/mod":""}/offerset/generate`,
            data: {
                date: g ? g.start.date : p,
                parkId: r.park.id,
                guestIds: o.map(ee => ee.id),
                targetedTime: v ?? "08:00:00",
                ignoredBookedExperienceIds: null,
                ...g ? {
                    experienceId: r.id,
                    originalExperienceId: g.id,
                    originalEntitlementIds: g.guests.map(ee => ee.entitlementId)
                } : {
                    experienceIds: [r.id]
                }
            }
        }), S = this.parseGuestData(y.party), D = (P = (y.itinerary ?? {}).items) == null ? void 0 : P.find(ee => ee.type === "OFFER_ITEM");
        if (!D) throw new Sr(S);
        const {
            offerSetId: w,
            offerId: G,
            startDateTime: k,
            endDateTime: q
        } = D, K = Object.fromEntries(o.map(ee => [ee.id, ee]));
        let ue = {
            offerSetId: w,
            id: G,
            start: Wt(k),
            end: Wt(q),
            experience: r,
            guests: {
                eligible: S.eligible.map(ee => ({
                    ...K[ee.id],
                    ...ee
                })),
                ineligible: S.ineligible
            },
            changed: D.conflict === "ALTERNATIVE_TIME_FOUND" && v !== void 0,
            booking: g
        };
        if (ue.changed && v && Yl(ue.start.time) - Yl(v) > 10) try {
            ue = await this.changeOfferTime(ue, {
                startTime: "08:00:00",
                endTime: "08:00:00"
            }), ue.changed = ue.start.time !== v
        } catch (ee) {
            console.error(ee)
        }
        return this.updateLastOffer(ue)
    }
    async times(r) {
        const {
            data: o
        } = await this.request({
            path: `/ea-vas/planning/api/v1/experiences${r.booking?"/mod":""}/offerset/times`,
            data: {
                experienceId: r.experience.id,
                parkId: r.experience.park.id,
                date: r.start.date,
                offerId: r.id,
                offerSetIds: [r.offerSetId],
                guestIds: r.guests.eligible.map(d => d.id),
                offerType: "FLEX",
                experienceIdsToIgnore: [],
                originalOrderItemId: null
            }
        });
        return o.hourSegmentGroups.map(d => d.inventorySlotsAvailability.map(({
            startTime: m,
            endTime: p
        }) => ({
            startTime: m,
            endTime: p
        })))
    }
    async changeOfferTime(r, o) {
        const {
            data: {
                updatedPlanningOfferDisplayItem: d
            }
        } = await this.request({
            path: `/ea-vas/planning/api/v1/experiences${r.booking?"/mod":""}/offerset/times/fulfill`,
            data: {
                parkId: r.experience.park.id,
                date: r.start.date,
                offerId: r.id,
                ...r.booking ? {
                    offerSetId: r.offerSetId
                } : {
                    offerSetIds: [r.offerSetId]
                },
                offerType: "FLEX",
                guestIds: r.guests.eligible.map(m => m.id),
                targetSlot: o,
                experienceIdsToIgnore: []
            }
        });
        return this.updateLastOffer({
            ...r,
            id: d.offerId,
            offerSetId: d.offerSetId,
            start: Wt(d.startDateTime),
            end: Wt(d.endDateTime),
            changed: d.conflict === "ALTERNATIVE_TIME_FOUND"
        })
    }
    async book(r, o) {
        if (r.booking) return this.modify(r, o);
        const {
            data: d
        } = await this.request({
            path: "/ea-vas/planning/api/v1/experiences/entitlements/book",
            data: {
                offerSetId: r.offerSetId,
                orderGuestDetails: r.guests.eligible.filter(m => !!m.orderDetails).map(({
                    id: m,
                    orderDetails: {
                        externalIdentifier: p,
                        ...g
                    }
                }) => ({
                    guestDetails: [{
                        guestId: m,
                        externalIdentifier: p
                    }],
                    ...g
                }))
            }
        });
        return this.createLLFromResponse(d)
    }
    async modify(r, o) {
        const {
            offerSetId: d,
            guests: {
                eligible: m
            }
        } = r, p = new Set((o ?? r.guests.eligible).map(y => y.id)), g = Object.fromEntries(r.booking.guests.map(y => [y.id, y.entitlementId])), {
            data: v
        } = await this.request({
            path: "/ea-vas/planning/api/v1/experiences/mod/entitlements/book",
            data: {
                offerSetId: d,
                eligibleGuestsEntitlements: m.filter(y => p.has(y.id)).map(y => ({
                    guestId: y.id,
                    entitlementId: g[y.id],
                    ...y.orderDetails
                }))
            }
        });
        return this.createLLFromResponse({
            entitlementExperiences: [v.booking],
            party: v.party
        })
    }
    createLLFromResponse(r) {
        var v;
        const o = r.entitlementExperiences[0],
            d = Object.fromEntries(o.guests.map(y => [y.guestId, y.entitlementId])),
            {
                id: m,
                name: p,
                park: g
            } = this.resort.experience(o.experienceId);
        return {
            id: m,
            name: p,
            park: g,
            type: "LL",
            subtype: "MP",
            bookingId: (v = o.guests[0]) == null ? void 0 : v.entitlementId,
            start: Wt(o.startDateTime),
            end: Wt(o.endDateTime),
            cancellable: !0,
            modifiable: !0,
            guests: r.party.guests.map(y => ({
                ...this.convertGuest(y),
                entitlementId: d[y.id]
            }))
        }
    }
    parseGuestData({
        guests: r,
        ineligibleGuests: o
    }) {
        return super.parseGuestData({
            guests: r,
            ineligibleGuests: o.map(d => d.ineligibleReason ? {
                ...d,
                ineligibleReason: d.ineligibleReason.ineligibleReason
            } : d)
        })
    }
}
const De = x.createContext({
    das: {},
    itinerary: {},
    liveData: {},
    ll: {},
    vq: {}
});

function Jg(c) {
    const s = new Yg(c),
        r = new Qg(c),
        o = new Er(c),
        d = new(c.id === "WDW" ? Kg : Zg)(c),
        m = new Lg(c);
    return m.onRefresh = p => d.track(p), {
        das: s,
        itinerary: m,
        liveData: r,
        ll: d,
        vq: o
    }
}
const Yt = x.createContext(new rm("WDW", {
    experiences: {},
    parks: []
}));
class Tr extends Error {
    constructor() {
        super(...arguments);
        le(this, "name", "NavError")
    }
}
const Ne = x.createContext({
        goTo: () => {},
        goBack: async () => {}
    }),
    $g = {
        normal: "py-1",
        small: "py-1.5 text-xs uppercase tracking-wide",
        full: "w-full py-3"
    };

function Ae(c) {
    const {
        goBack: s
    } = x.use(Ne), {
        type: r,
        back: o,
        onClick: d,
        className: m,
        ...p
    } = c;
    let g = `${$g[r||"normal"]} ${m||""}`;
    return g.includes(" bg-") || (g += ` ${x.use(Pe).bg} text-white`), u.jsx("button", {
        onClick: async v => {
            if (v.stopPropagation(), d && await d(), o) try {
                o === !0 ? await s() : await s(o)
            } catch (y) {
                if (!(y instanceof Tr)) throw y
            }
        },
        className: `${g} inline-flex items-center justify-center min-w-[36px] rounded-lg px-2 font-semibold disabled:opacity-50`,
        ...p
    })
}

function jt(c) {
    return u.jsx("div", {
        className: "mb-20",
        children: u.jsx("div", {
            className: "fixed bottom-0 left-0 w-full px-5 pb-5 text-center",
            children: u.jsx(Ae, {
                ...c,
                className: "max-w-2xl mx-auto shadow-[0px_4px_8px_-1px_#0005]",
                type: "full"
            })
        })
    })
}
const dm = x.createContext({
    activeScreen: null
});

function Ar() {
    const {
        activeScreen: c,
        prevScreen: s
    } = x.use(dm), [r] = x.useState(c), [o] = x.useState(!s);
    return {
        isActiveScreen: c === r,
        isFirstScreen: o
    }
}

function ht({
    children: c,
    className: s,
    title: r
}) {
    return s || (s = ""), s.match(/\bw-\S+\s*/) || (s += " w-4"), s.match(/\bh-\S+\s*/) || (s += " h-auto"), u.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        className: `mx-auto ${s}`,
        role: "img",
        children: [r && u.jsx("title", {
            children: r
        }), c]
    })
}
/**
 * Modified arrow-left2 icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function Ig(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M0.293,7.337L7.333,0.297C7.723,-0.093 8.357,-0.093 8.747,0.297C9.137,0.687 9.137,1.321 8.747,1.711L3.414,7.044L15,7.044C15.552,7.044 16,7.492 16,8.044C16,8.596 15.552,9.044 15,9.044L3.414,9.044L8.747,14.377C9.137,14.767 9.137,15.401 8.747,15.791C8.357,16.181 7.723,16.181 7.333,15.791L0.293,8.751C0.102,8.561 0,8.307 0,8.044C0,7.781 0.102,7.527 0.293,7.337Z"
        })
    })
}

function Wg({
    title: c,
    buttons: s,
    subhead: r
}) {
    const {
        isFirstScreen: o
    } = Ar(), d = x.use(Pe);

    function m(p) {
        if (!x.isValidElement(p) || typeof p.type == "string") return p;
        const g = p;
        return g.type === x.Fragment ? x.Children.map(g.props.children, m) : u.jsx(g.type, {
            ...g.props,
            className: `min-h-[36px] bg-white bg-opacity-90 ${d.text} ${g.props.className||""}`
        })
    }
    return u.jsxs("div", {
        className: `px-3 ext-lg text-white ${d.bg}`,
        children: [u.jsxs("div", {
            className: "flex flex-wrap justify-end gap-x-2 gap-y-1 min-h-[36px] py-2",
            children: [!o && u.jsx(Ae, {
                back: !0,
                className: "-my-2 -ml-3",
                title: "Go Back",
                children: u.jsx(Ig, {})
            }), u.jsx("h1", {
                className: "flex-1 self-center py-1 text-xl font-semibold overflow-hidden whitespace-nowrap",
                children: c
            }), m(s)]
        }), u.jsx("div", {
            className: `empty:hidden flex flex-col gap-y-1 pb-1 ${d.bg} text-white text-sm font-semibold uppercase text-center`,
            children: r
        })]
    })
}

function Ge({
    title: c,
    buttons: s,
    subhead: r,
    footer: o,
    theme: d,
    children: m,
    ref: p
}) {
    return d ?? (d = x.use(Pe)), u.jsx(Pe, {
        value: d,
        children: u.jsxs("div", {
            className: "fixed inset-0 flex flex-col",
            children: [u.jsx(Wg, {
                title: c,
                buttons: s,
                subhead: r
            }), u.jsx("div", {
                ref: p,
                className: "relative flex-1 overflow-auto px-3 pb-5",
                children: m
            }), o && u.jsx("div", {
                className: `relative ${d.bg} text-white font-semibold`,
                children: o
            })]
        })
    })
}
const Fg = {
    bg: "bg-red-600",
    text: "text-red-600"
};

function Pg({
    onAccept: c
}) {
    return u.jsxs(Ge, {
        title: "Warning!",
        theme: Fg,
        children: [u.jsx("p", {
            children: 'Use at your own risk. BG1 is highly experimental, for demonstration purposes only, and provided "as is" without warranty of any kind. It is in no way endorsed by or associated with the Walt Disney Company and could stop working at any time for any reason. To ensure the intended experience, always use the official Disney app.'
        }), u.jsx(jt, {
            onClick: c,
            children: "Accept"
        })]
    })
}
const Uh = ["bg1", "disclaimer", "accepted"];

function e1() {
    const [c, s] = x.useState(!!Oe.get(Uh));
    return c ? null : u.jsx(Pg, {
        onAccept: () => {
            Oe.set(Uh, 1), s(!0)
        }
    })
}

function t1() {
    return u.jsx(Ge, {
        title: "BG1 News",
        children: u.jsx("iframe", {
            src: "https://joelface.github.io/bg1/news.html",
            className: "absolute inset-0 w-full h-full"
        })
    })
}
const Lh = ["bg1", "news", "version"];

function l1(c) {
    const [s, r] = x.useState(() => {
        const o = Number(Oe.get(Lh));
        return Number.isInteger(o) ? o : 0
    });
    return s < c ? u.jsxs(u.Fragment, {
        children: [u.jsx(t1, {}), u.jsx(jt, {
            onClick: () => {
                Oe.set(Lh, c), r(c)
            },
            children: "Close"
        })]
    }) : null
}

function Dr(c) {
    const s = () => {
        document.hidden || c()
    };
    return document.addEventListener("visibilitychange", s), () => {
        document.removeEventListener("visibilitychange", s)
    }
}
async function or(c) {
    return new Promise(s => {
        setTimeout(s, c)
    })
}
const n1 = "https://cdn.registerdisney.go.com/v4/OneID.js",
    Bh = "oneid-script",
    a1 = "oneid-wrapper",
    Pn = class Pn {
        static async launchLogin(s, r) {
            const o = await this.loadClient(s);
            this.on("login", d => {
                r(d), this.deleteGuestData()
            }), this.on("close", () => o.launchLogin()), o.launchLogin()
        }
        static async loadClient(s) {
            if (!this.client)
                if (document.getElementById(Bh))
                    for (; !this.client;) await or(100);
                else {
                    for (this.loadOneIdScript(); !self.OneID;) await or(100);
                    const r = navigator.userAgent.includes("Android") ? "AND" : "IOS";
                    this.clientId = `TPR-${s}-LBSDK.${r}`;
                    const o = self.OneID.get({
                        clientId: this.clientId,
                        responderPage: "https://joelface.github.io/bg1/responder.html"
                    });
                    await o.init(), this.client = o, this.deleteGuestData()
                } return this.client
        }
        static loadOneIdScript() {
            const s = document.createElement("script");
            s.id = Bh, s.src = n1, document.head.appendChild(s)
        }
        static on(s, r) {
            const o = Pn.client;
            o && (this.listeners[s] && o.off(s, this.listeners[s]), this.listeners[s] = r, o.on(s, r))
        }
        static deleteGuestData() {
            localStorage.removeItem(this.clientId + "-PROD.guest")
        }
    };
le(Pn, "client"), le(Pn, "clientId"), le(Pn, "listeners", {});
let fr = Pn;

function i1({
    resort: c,
    onLogin: s
}) {
    return x.useEffect(() => {
        fr.launchLogin(c.id, ({
            token: r
        }) => {
            s({
                swid: r.swid,
                accessToken: r.access_token,
                expires: new Date(r.exp).getTime()
            })
        })
    }, [c, s]), x.useEffect(() => () => {
        var o;
        const r = document.getElementById(a1);
        (o = r == null ? void 0 : r.parentNode) == null || o.removeChild(r)
    }, []), null
}
const Qt = x.createContext({
        bookingDate: pe(),
        setBookingDate: () => {}
    }),
    cr = "bg1.date",
    hm = 22;

function u1() {
    const c = pe();
    return [...Array(hm).keys()].map(s => na(c, s))
}

function Gh(c) {
    return c && u1().includes(c) ? c : pe()
}

function c1({
    children: c
}) {
    const {
        prebook: s
    } = x.use(De).ll.rules, [r, o] = x.useState(() => s ? Gh(Oe.getDaily(cr)) : pe());
    x.useEffect(() => {
        Oe.setDaily(cr, r)
    }, [r]);
    const d = x.useCallback(m => {
        o(p => (m = typeof m == "function" ? m(p) : m, s ? Gh(m) : pe()))
    }, [s, o]);
    return x.useEffect(() => {
        Oe.setDaily(cr, r)
    }, [r]), u.jsx(Qt, {
        value: {
            bookingDate: r,
            setBookingDate: d
        },
        children: c
    })
}
const Nr = x.createContext([]);

function s1({
    children: c
}) {
    const {
        das: s
    } = x.use(De), [r, o] = x.useState([]);
    return x.useEffect(() => {
        (async () => {
            try {
                o(await s.parties())
            } catch (d) {
                if (d instanceof Fn) return;
                throw d
            }
        })()
    }, [s]), u.jsx(Nr, {
        value: r,
        children: c
    })
}
const oi = x.createContext({
        experiences: [],
        refreshExperiences: () => {},
        loaderElem: null
    }),
    gl = x.createContext({
        park: {},
        setPark: () => {}
    });
/**
 * Refresh icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function mm({
    className: c
}) {
    return u.jsx(ht, {
        className: c,
        children: u.jsx("path", {
            d: "M16 6h-6l2.243-2.243c-1.133-1.133-2.64-1.757-4.243-1.757s-3.109 0.624-4.243 1.757c-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.133 1.133 2.64 1.757 4.243 1.757s3.109-0.624 4.243-1.757c0.095-0.095 0.185-0.192 0.273-0.292l1.505 1.317c-1.466 1.674-3.62 2.732-6.020 2.732-4.418 0-8-3.582-8-8s3.582-8 8-8c2.209 0 4.209 0.896 5.656 2.344l2.343-2.344v6z"
        })
    })
}

function Mr(c) {
    const {
        children: s,
        color: r = "bg-black",
        className: o = "",
        ...d
    } = c;
    return u.jsx("div", {
        className: `fixed inset-0 z-10 flex items-center justify-center p-2 ${r} bg-opacity-75 ${o}`,
        ...d,
        children: s
    })
}

function ym() {
    const {
        bg: c
    } = x.use(Pe);
    return u.jsx(Mr, {
        color: "bg-white",
        children: u.jsx("div", {
            className: "w-[50px] mx-auto",
            children: u.jsx("div", {
                "aria-label": "Loading\u2026",
                className: `rounded-full p-[20%] ${c}`,
                children: u.jsx(mm, {
                    className: "animate-spin w-full text-white"
                })
            })
        })
    })
}
const r1 = {
    alert: "bg-yellow-200",
    error: "bg-red-200"
};

function o1({
    message: c,
    type: s
}) {
    return c ? u.jsx("div", {
        role: "alert",
        className: `fixed bottom-20 left-0 w-full p-2 font-semibold text-center ${r1[s]} text-gray-800`,
        children: c
    }) : null
}
const f1 = 3e3;

function gm() {
    const [c, s] = x.useState(""), [r, o] = x.useState("alert");
    x.useEffect(() => {
        if (c === "") return;
        const p = self.setTimeout(() => {
            s("")
        }, f1);
        return () => clearTimeout(p)
    }, [c]);
    const d = x.useCallback((p, g) => {
        s(p), o(g || "alert")
    }, []);
    return [c ? u.jsx(o1, {
        message: c,
        type: r
    }) : null, d]
}
const d1 = 500;

function Et() {
    const [c, s] = x.useTransition(), [r, o] = gm(), d = x.useCallback(async (p, g = {}) => {
        const {
            messages: v = {},
            minLoadTime: y = d1
        } = g, S = {
            error: "Unknown error occurred",
            request: "Network request failed",
            ...v
        };
        o("");
        let D = [""];

        function w(...G) {
            D = G
        }
        s(async () => {
            var k;
            const G = or(y);
            try {
                await p(w)
            } catch (q) {
                const K = (k = q == null ? void 0 : q.response) == null ? void 0 : k.status;
                q instanceof Error && S[q.name] ? w(S[q.name], "error") : Number.isInteger(K) ? w(K in S ? S[K] : S.request, "error") : (console.error(q), w(S.error, "error"))
            }
            await G, s(() => {
                o(...D)
            })
        })
    }, [o]), m = c || r ? u.jsxs(u.Fragment, {
        children: [c && u.jsx(ym, {}), r]
    }) : null;
    return {
        loadData: d,
        loaderElem: m,
        flash: o
    }
}

function vm(c) {
    const [s, r] = x.useState(0);
    return x.useLayoutEffect(() => {
        s > 0 && c()
    }, [s, c]), x.useCallback((o = 0) => {
        r(d => Date.now() - d < o ? d : Date.now())
    }, [])
}

function h1({
    children: c
}) {
    const {
        ll: s,
        liveData: r
    } = x.use(De), {
        park: o
    } = x.use(gl), {
        bookingDate: d
    } = x.use(Qt), {
        loadData: m,
        loaderElem: p
    } = Et(), [g, v] = x.useState([]), y = vm(x.useCallback(() => {
        m(async () => {
            const S = r.shows(o);
            let D = {
                ...Object.fromEntries((await s.experiences(o, d)).map(w => [w.id, w]))
            };
            try {
                D = {
                    ...await S,
                    ...D
                }
            } catch (w) {
                console.error(w)
            }
            v(Object.values(D))
        })
    }, [o, d, s, r, m]));
    return x.useLayoutEffect(() => v([]), [o, d]), x.useEffect(y, [y]), u.jsx(oi, {
        value: {
            experiences: g,
            refreshExperiences: y,
            loaderElem: p
        },
        children: c
    })
}
let m1 = 0;
const Hh = () => ++m1,
    Mu = () => Number(location.hash.slice(1)) || 0;
let sr = () => {};

function pm({
    children: c
}) {
    const [s, r] = x.useState({
        activeScreen: c
    }), o = x.useRef([{
        elem: c,
        key: 0
    }]), d = x.useRef({
        goTo(p, g) {
            let v = Mu(),
                y;
            g != null && g.replace ? (y = o.current[v].key ?? Hh(), r(S => ({
                ...S,
                activeScreen: p
            }))) : (o.current = o.current.slice(0, ++v), location.hash = `#${v}`, y = Hh()), o.current[v] = {
                elem: p,
                key: y
            }
        },
        goBack({
            screen: p,
            props: g
        } = {}) {
            const v = new Promise(S => {
                sr = () => {
                    S(), sr = () => {}
                }
            });
            if (!p) return history.back(), v;
            const y = Mu();
            for (let S = y - 1; S >= 0; --S)
                if (o.current[S].elem.type === p) {
                    if (history.go(S - y), g) {
                        const D = {
                            ...o.current[S].elem.props,
                            ...g
                        };
                        o.current[S].elem = u.jsx(p, {
                            ...D
                        })
                    }
                    return v
                } throw new Tr(`No previous ${p.name} screen`)
        }
    });
    x.useEffect(() => {
        function p() {
            var y, S;
            sr();
            const v = Mu();
            v >= o.current.length ? history.back() : r({
                activeScreen: ((y = o.current[v]) == null ? void 0 : y.elem) ?? u.jsx("div", {}),
                prevScreen: (S = o.current[v - 1]) == null ? void 0 : S.elem
            })
        }

        function g(v) {
            v.preventDefault()
        }
        return location.replace("#0"), addEventListener("hashchange", p), addEventListener("beforeunload", g), () => {
            removeEventListener("hashchange", p), removeEventListener("beforeunload", g)
        }
    }, []);
    const m = Math.min(Mu(), o.current.length - 1);
    return u.jsx(Ne, {
        value: d.current,
        children: u.jsx(dm, {
            value: s,
            children: o.current.slice(0, m + 1).map(({
                elem: p,
                key: g
            }, v) => {
                const y = v !== m;
                return u.jsx("article", {
                    hidden: y,
                    children: p
                }, g)
            })
        })
    })
}
const Lt = x.createContext({
    plans: [],
    refreshPlans: () => {},
    loaderElem: null
});

function xm() {
    const c = x.use(Yt),
        {
            setPark: s
        } = x.use(gl),
        {
            plans: r
        } = x.use(Lt);
    return x.useCallback(o => {
        const d = pe(),
            m = o === d,
            p = new Set(c.parks.map(S => S.id)),
            g = S => p.has(S.park.id),
            v = S => ia(S, "LL", "MP");
        let y;
        for (const S of r) {
            const D = pe(S.start);
            if (!(D < o)) {
                if (D > o || v(S) && (y = S.park, !m)) break;
                !y && g(S) && (y = S.park)
            }
        }
        s(S => y ?? (S.id ? S : c.parks[0]))
    }, [r, c, s])
}
const kh = "bg1.park";

function y1({
    children: c
}) {
    const s = x.use(Yt),
        [r, o] = x.useState(() => {
            const d = Oe.getDaily(kh);
            if (!d) return {};
            try {
                return s.park(d)
            } catch (m) {
                return m instanceof yl || console.error(m), s.parks[0]
            }
        });
    return x.useEffect(() => {
        r.id && Oe.setDaily(kh, r.id)
    }, [r]), u.jsx(gl, {
        value: {
            park: r,
            setPark: o
        },
        children: r.id ? c : u.jsx(g1, {})
    })
}

function g1() {
    const {
        plansLoaded: c,
        loaderElem: s
    } = x.use(Lt), {
        bookingDate: r
    } = x.use(Qt), o = xm();
    return x.useEffect(() => {
        c && o(r)
    }, [c, r, o]), s
}

function v1({
    children: c
}) {
    const {
        itinerary: s
    } = x.use(De), {
        loadData: r,
        loaderElem: o
    } = Et(), [d, m] = x.useState([]), [p, g] = x.useState(!1), v = vm(x.useCallback(() => {
        r(async () => {
            m(await s.plans()), g(!0)
        })
    }, [s, r]));
    return x.useEffect(v, [v]), u.jsx(Lt, {
        value: {
            plans: d,
            plansLoaded: p,
            refreshPlans: v,
            loaderElem: o
        },
        children: c
    })
}
const vl = x.createContext({
    current: void 0,
    auto: !1,
    begin: () => {},
    end: () => {}
});

function p1({
    children: c,
    value: s
}) {
    const [r, o] = x.useState(() => ({
        current: void 0,
        auto: !1,
        begin: (d, m = !1) => {
            o(p => d === p.current ? p : {
                ...p,
                current: d,
                auto: m
            })
        },
        end: () => {
            o(d => d.current ? {
                ...d,
                current: void 0,
                auto: !1
            } : d)
        }
    }));
    return u.jsx(vl, {
        value: s ?? r,
        children: c
    })
}
const Or = x.createContext({
    tabs: [],
    active: {
        name: "",
        icon: null,
        component: () => null
    },
    changeTab: () => {},
    scrollPos: {
        get: () => 0,
        set: () => {}
    }
});

function x1({
    tabs: c,
    footer: s
}, r) {
    return function o({
        tabName: d
    }) {
        const {
            goTo: m
        } = x.use(Ne), p = x.useCallback(y => {
            y !== d && m(u.jsx(o, {
                tabName: y
            }), {
                replace: !0
            })
        }, [d, m]), g = x.useRef(Object.fromEntries(c.map(y => [y.name, 0]))), v = c.find(({
            name: y
        }) => y === d) ?? c[0];
        return v ? u.jsx(Or, {
            value: {
                tabs: c,
                active: v,
                changeTab: p,
                scrollPos: {
                    get: () => g.current[v.name],
                    set: y => {
                        g.current[v.name] = y
                    }
                },
                footer: s
            },
            children: u.jsx(r, {
                tab: v
            })
        }) : null
    }
}
/**
 * Calendar icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function b1({
    className: c
}) {
    return u.jsx(ht, {
        className: c,
        children: u.jsx("path", {
            d: "M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"
        })
    })
}
/**
 * Clock icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function S1(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M10.293 11.707l-3.293-3.293v-4.414h2v3.586l2.707 2.707zM8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6z"
        })
    })
}
/**
 * Power icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function dr(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M6 0l-6 8h6l-4 8 14-10h-8l6-6z"
        })
    })
}

function j1({
    name: c,
    icon: s
}) {
    const {
        active: r,
        changeTab: o
    } = x.use(Or);
    if (!o) return null;
    const d = x.use(Pe),
        p = (r == null ? void 0 : r.name) === c ? `bg-white bg-opacity-90 ${d.text}` : `${d.bg} text-white`;
    return u.jsxs("button", {
        className: "px-4 py-2",
        onClick: () => o(c),
        children: [u.jsx("div", {
            className: `min-w-[3rem] rounded-full py-1.5 ${p}`,
            children: s
        }), u.jsx("div", {
            className: "mt-0.5 text-sm",
            children: c
        })]
    })
}

function _r({
    title: c,
    buttons: s,
    subhead: r,
    children: o,
    ref: d
}) {
    const {
        tabs: m,
        scrollPos: p,
        footer: g
    } = x.use(Or);
    return x.useLayoutEffect(() => {
        const v = d == null ? void 0 : d.current;
        if (!v) return;
        v.scroll(0, p.get());
        const y = () => p.set(v.scrollTop);
        return v.addEventListener("scroll", y), () => v.removeEventListener("scroll", y)
    }, [p, d]), u.jsx(Ge, {
        title: c,
        buttons: s,
        subhead: r,
        footer: u.jsxs(u.Fragment, {
            children: [u.jsx("div", {
                className: "flex items-center justify-center",
                children: m.map(v => x.createElement(j1, {
                    ...v,
                    key: v.name
                }))
            }), g]
        }),
        ref: d,
        children: o
    })
}

function Fe({
    children: c,
    ...s
}) {
    const [r, o] = pr(c).split(" ");
    return u.jsx("time", {
        ...s,
        dateTime: c,
        children: u.jsxs("span", {
            className: "whitespace-nowrap",
            children: [r, " ", u.jsx("span", {
                className: "text-xs",
                children: o
            })]
        })
    })
}
const qh = "bg1.genie.partyIds";

function bm() {
    const {
        ll: c
    } = x.use(De), [s, r] = x.useState(() => {
        const d = Oe.get(qh) ?? [];
        return new Set(Array.isArray(d) ? d : [])
    });
    x.useEffect(() => c.setPartyIds([...s]), [c, s]);
    const o = x.useCallback(d => {
        Oe.set(qh, [...d]), c.setPartyIds([...d]), r(d)
    }, [c]);
    return [s, o]
}
/**
 * Checkmark icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function Yh({
    className: c
}) {
    return u.jsx(ht, {
        className: c,
        children: u.jsx("path", {
            d: "M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"
        })
    })
}
/**
 * Arrow-down icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function Qh(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M8 15.5l7.5-7.5h-4.5v-8h-6v8h-4.5z"
        })
    })
}
/**
 * Star icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function E1(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"
        })
    })
}

function T1(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M 5.5253906 0.9296875 L 3.4042969 3.0507812 L 8.3535156 8 L 3.4042969 12.949219 L 5.5253906 15.070312 L 10.474609 10.121094 L 12.595703 8 L 10.474609 5.8789062 L 5.5253906 0.9296875 z"
        })
    })
}

function fi({
    children: c,
    type: s,
    ...r
}) {
    return u.jsx("time", {
        ...r,
        dateTime: c,
        children: pg(c, s)
    })
}

function Sm({
    start: c,
    end: s
}) {
    const r = pe(c),
        o = pe(s);
    return u.jsxs("span", {
        className: "whitespace-nowrap",
        children: [c.time ? u.jsx(Fe, {
            children: c.time
        }) : u.jsx("span", {
            children: "Park Open"
        }), s ? u.jsxs(u.Fragment, {
            children: [" \u2013 ", o > r ? u.jsx(fi, {
                type: "short",
                children: o
            }) : s.time ? u.jsx(Fe, {
                children: s.time
            }) : u.jsx("span", {
                children: "Park Close"
            })]
        }) : null]
    })
}

function at({
    guests: c,
    selectable: s,
    conflicts: r
}) {
    const [o, d] = gm();
    if (c.length === 0) return null;
    const m = new Set(s ? c.filter(s == null ? void 0 : s.isSelected) : []),
        p = m.size >= ((s == null ? void 0 : s.limit) ?? 1 / 0);
    return u.jsxs(u.Fragment, {
        children: [u.jsx("ul", {
            className: "mt-4",
            children: c.map(g => {
                var S;
                const v = m.has(g),
                    y = p && !v;
                return u.jsx("li", {
                    className: "px-3 py-1",
                    onClick: () => d(y ? "Selection limit reached" : ""),
                    children: u.jsxs("label", {
                        className: "flex items-center",
                        children: [s && u.jsx("input", {
                            type: "checkbox",
                            checked: v,
                            disabled: y,
                            onChange: () => s.onToggle(g),
                            className: "mr-3"
                        }), u.jsx("span", {
                            className: "w-[48px] h-[48px] leading-[48px] mr-3 rounded-full text-3xl font-bold text-center bg-gray-400 text-white",
                            children: g.avatarImageUrl ? u.jsx("img", {
                                src: g.avatarImageUrl,
                                alt: "",
                                width: "48",
                                height: "48",
                                className: "rounded-full"
                            }) : u.jsx("span", {
                                "aria-hidden": "true",
                                children: g.name[0]
                            })
                        }), u.jsxs("span", {
                            className: "leading-tight",
                            children: [g.name, (r == null ? void 0 : r[g.id]) && u.jsx("span", {
                                className: "block text-xs font-semibold text-red-700 uppercase",
                                children: (S = r[g.id]) == null ? void 0 : S.replace(/_/g, " ")
                            })]
                        })]
                    })
                }, g.id)
            })
        }), o]
    })
}

function jm(c) {
    return u.jsx("div", {
        className: `mt-4 border-2 rounded border-green-600 p-1 font-semibold text-center text-green-600 bg-green-100 ${c.className}`,
        children: c.children
    })
}

function A1({
    bg: c,
    experiences: s,
    heading: r
}) {
    return u.jsxs("div", {
        className: `mt-4 rounded ${c}`,
        children: [u.jsx("h3", {
            className: "mt-0 p-1 text-white text-center",
            children: r
        }), u.jsx("ul", {
            className: "list-disc py-2 pl-8 bg-white bg-opacity-90",
            children: s.map(o => u.jsx("li", {
                children: o.name
            }, o.id))
        })]
    })
}
const Cu = x.createContext({
        eligible: [],
        ineligible: [],
        selected: [],
        setSelected: () => null,
        experience: {
            name: "",
            park: {
                name: "",
                theme: {
                    bg: "",
                    text: ""
                }
            }
        }
    }),
    D1 = "https://bg1.joelface.com/ping";
async function Uu(c, s) {
    const {
        date: r
    } = new Be, o = ["bg1", "ping", c.id, s];
    if (Oe.get(o) === r) return;
    const {
        ok: m
    } = await fetch(D1, {
        method: "POST",
        body: new URLSearchParams({
            resort: c.id,
            service: s
        })
    });
    m && Oe.set(o, r)
}

function Lu({
    booking: c
}) {
    const {
        bookingDate: s
    } = x.use(Qt);
    return u.jsx(fi, {
        children: c ? pe(c.start) : s
    })
}
/**
 * Modified calendar icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function N1({
    className: c
}) {
    return u.jsx(ht, {
        className: c,
        children: u.jsx("path", {
            d: "M 0 0 L 0 16 L 15 16 L 15 0 L 13 0 L 13 1 L 11 1 L 11 0 L 4 0 L 4 1 L 2 1 L 2 0 L 0 0 z M 1 4 L 14 4 L 14 15 L 1 15 L 1 4 z"
        })
    })
}

function hr() {
    return u.jsx("p", {
        className: "font-semibold text-center uppercase text-gray-500",
        children: "No existing plans"
    })
}

function M1({
    date: c,
    unmodifiable: s
}) {
    var p;
    const {
        plans: r
    } = x.use(Lt), o = r.filter(g => pe(g.start) === c), d = [...new Set(o.map(g => g.park))], m = o.filter(g => g.type !== "APR");
    return u.jsx(Ge, {
        title: "Your Day",
        subhead: u.jsx(fi, {
            children: c
        }),
        theme: (p = d[0]) == null ? void 0 : p.theme,
        children: m && m.length > 0 ? u.jsx("ul", {
            children: m.map(g => u.jsx("li", {
                className: "py-3 first:border-0 border-t-4 border-gray-300",
                children: u.jsx(zr, {
                    details: !0,
                    booking: g,
                    button: !s && u.jsx(Am, {
                        booking: g,
                        type: "small"
                    }),
                    unmodifiable: s
                })
            }, g.bookingId))
        }) : u.jsx(hr, {})
    })
}

function Bu({
    date: c,
    unmodifiable: s,
    ...r
}) {
    const {
        goTo: o
    } = x.use(Ne), {
        bookingDate: d
    } = x.use(Qt);
    return u.jsx(u.Fragment, {
        children: u.jsx(Ae, {
            ...r,
            onClick: () => o(u.jsx(M1, {
                date: c ?? d,
                unmodifiable: s
            })),
            title: "Your Day",
            children: u.jsx(N1, {})
        })
    })
}

function Rr() {
    const {
        ineligible: c
    } = x.use(Cu);
    return u.jsx(at, {
        guests: c,
        conflicts: Object.fromEntries(c.map(s => [s.id, s.eligibleAfter ? `TOO EARLY (${pr(s.eligibleAfter)})` : s.ineligibleReason || "ELIGIBLE FOR NEW BOOKING"]))
    })
}

function O1() {
    const {
        ll: c
    } = x.use(De), s = x.use(vl);
    return u.jsxs(u.Fragment, {
        children: [s.current ? u.jsxs(u.Fragment, {
            children: [u.jsx("h3", {
                children: "Unable to Modify"
            }), u.jsx("p", {
                children: "Your current reservation cannot be modified to this experience due to the following conflicts:"
            })]
        }) : u.jsxs(u.Fragment, {
            children: [c.nextBookTime && c.nextBookTime.slice(0, 5) > new Be().time.slice(0, 5) && u.jsxs(jm, {
                children: ["Eligible at ", u.jsx(Fe, {
                    children: c.nextBookTime
                })]
            }), u.jsx("h3", {
                children: "No Eligible Guests"
            }), u.jsx("p", {
                children: "No one in your party is currently eligible for this Lightning Lane."
            })]
        }), u.jsx(Rr, {})]
    })
}

function _1({
    onRefresh: c
}) {
    return u.jsxs(u.Fragment, {
        children: [u.jsx("h3", {
            children: "No Guests Found"
        }), u.jsx("p", {
            children: "Your party could not be loaded. This is probably just a temporary network error. Wait a few seconds and try again."
        }), u.jsx(jt, {
            onClick: c,
            children: "Try Again"
        })]
    })
}

function R1(c) {
    return u.jsx("div", {
        className: `mt-4 border-2 rounded border-red-600 p-1 font-semibold text-center text-red-600 bg-red-100 ${c.className}`,
        children: c.children
    })
}

function w1({
    party: c
}) {
    const {
        eligible: s,
        ineligible: r,
        selected: o,
        experience: d
    } = c, [m, p] = x.useState(new Set(o)), {
        maxPartySize: g
    } = x.use(De).ll.rules;

    function v(y) {
        m[m.has(y) ? "delete" : "add"](y), p(new Set(m))
    }
    return u.jsx(Cu, {
        value: c,
        children: u.jsxs(Ge, {
            title: "Modify Party",
            theme: d.park.theme,
            children: [u.jsx("h2", {
                children: d.name
            }), u.jsx("div", {
                children: d.park.name
            }), u.jsx("h3", {
                children: "Your Party"
            }), u.jsx(at, {
                guests: s,
                selectable: {
                    isSelected: y => m.has(y),
                    onToggle: v,
                    limit: g
                }
            }), r.length > 0 && u.jsxs(u.Fragment, {
                children: [u.jsx("h3", {
                    children: "Ineligible Guests"
                }), u.jsx(Rr, {})]
            }), u.jsx(jt, {
                back: !0,
                disabled: m.size === 0,
                onClick: () => {
                    c.setSelected(s.filter(y => m.has(y)))
                },
                children: "Confirm Party"
            })]
        })
    })
}

function Em() {
    const {
        goTo: c
    } = x.use(Ne), s = x.use(Cu), {
        eligible: r,
        selected: o
    } = s, {
        maxPartySize: d
    } = x.use(De).ll.rules;
    return u.jsxs(u.Fragment, {
        children: [r.length > d && o.length === d && u.jsx(R1, {
            children: "Party size restricted"
        }), o.length > 0 ? u.jsxs(u.Fragment, {
            children: [u.jsxs("div", {
                className: "mt-4",
                children: [u.jsx("h3", {
                    className: "inline mt-0",
                    children: "Your Party"
                }), u.jsx(Ae, {
                    type: "small",
                    onClick: () => c(u.jsx(w1, {
                        party: s
                    })),
                    className: "ml-3",
                    children: "Modify"
                })]
            }), u.jsx(at, {
                guests: o
            })]
        }) : u.jsxs(u.Fragment, {
            children: [u.jsx("h3", {
                children: "Ineligible Guests"
            }), u.jsx(Rr, {})]
        })]
    })
}

function z1() {
    return u.jsxs(u.Fragment, {
        children: [u.jsx("h3", {
            children: "No Reservations Available"
        }), u.jsx("p", {
            children: "There aren't enough reservation slots available for your entire party. If only part of your group wishes to go on this attraction, edit your party to check again. Otherwise, go back to the attraction list and select another attraction."
        }), u.jsx(Em, {})]
    })
}

function ua({
    start: c,
    end: s,
    button: r
}) {
    return u.jsx("div", {
        className: "mt-4 text-lg",
        children: u.jsxs("div", {
            className: "flex items-center gap-x-3",
            children: [u.jsxs("div", {
                children: [s ? "Arrive by" : "Reservation at", ":", " ", u.jsx("span", {
                    className: "pl-1 font-semibold",
                    children: u.jsx(Sm, {
                        start: c,
                        end: s
                    })
                })]
            }), u.jsx("div", {
                children: r
            })]
        })
    })
}

function mn({
    name: c,
    onClick: s,
    ...r
}) {
    return u.jsx(Ae, {
        ...r,
        title: `Refresh ${c}`,
        onClick: s,
        children: u.jsx(mm, {})
    })
}

function wr({
    offer: c,
    onOfferChange: s
}) {
    const {
        goBack: r
    } = x.use(Ne), {
        ll: o
    } = x.use(De), d = x.use(vl), {
        loadData: m,
        loaderElem: p
    } = Et(), [g, v] = x.useState(), {
        booking: y
    } = c, S = y && !d.current, D = x.useCallback(() => {
        function w(G) {
            const k = c.start.time;
            if (!y || k === y.start.time) return G;
            const q = {
                    startTime: k,
                    endTime: c.end.time
                },
                K = z => Number(z.split(":")[0]),
                ue = K(k),
                P = G.map(z => K(z[0].startTime)),
                ee = P.findIndex(z => z >= ue),
                Ue = P[ee],
                _ = G[ee] ?? [];
            return ee === -1 ? G.push([q]) : Ue > ue ? G.splice(ee, 0, [q]) : k < _[0].startTime && (_.length < 3 ? _.unshift(q) : _[0] = q), G
        }
        m(async () => {
            const G = await o.times(c);
            v(S ? w(G) : G)
        })
    }, [c, y, S, o, m]);
    return x.useEffect(D, [D]), u.jsxs(Ge, {
        title: "Select Return Time",
        buttons: u.jsxs(u.Fragment, {
            children: [u.jsx(Bu, {
                date: pe(c.start),
                unmodifiable: !0
            }), u.jsx(mn, {
                name: "Times",
                onClick: D
            })]
        }),
        subhead: u.jsxs(u.Fragment, {
            children: [u.jsx(Gu, {}), u.jsx(Lu, {
                booking: c
            })]
        }),
        theme: c.experience.park.theme,
        children: [u.jsx("h2", {
            children: c.experience.name
        }), u.jsx("div", {
            children: c.experience.park.name
        }), c && u.jsx(ua, {
            ...S ? y : c,
            button: u.jsx(Ae, {
                type: "small",
                onClick: r,
                children: "Keep"
            })
        }), g ? g.length > 0 ? u.jsxs(u.Fragment, {
            children: [u.jsx("h3", {
                children: "More Available Times"
            }), u.jsx("table", {
                className: "whitespace-nowrap",
                children: u.jsx("tbody", {
                    children: g.map(w => u.jsxs("tr", {
                        children: [u.jsx("th", {
                            scope: "row",
                            className: "pt-3 pr-2 text-gray-500 text-sm font-semibold text-right uppercase",
                            children: pr(w[0].startTime.slice(0, 2))
                        }), w.map(G => u.jsx("td", {
                            className: "pt-3 pr-3 text-center",
                            children: u.jsx(Ae, {
                                onClick: () => {
                                    m(async () => {
                                        const k = G.startTime === c.start.time ? c : await o.changeOfferTime(c, G);
                                        await r(), s(k)
                                    })
                                },
                                children: u.jsx(Fe, {
                                    children: G.startTime
                                })
                            })
                        }, G.startTime))]
                    }, w[0].startTime))
                })
            })]
        }) : u.jsx("p", {
            children: "No other times available"
        }) : null, p]
    })
}

function C1({
    offer: c,
    onOfferChange: s
}) {
    const {
        goTo: r
    } = x.use(Ne), {
        ll: o
    } = x.use(De);
    return u.jsxs(u.Fragment, {
        children: [u.jsx("div", {
            className: "flex items-center",
            children: u.jsx(ua, {
                ...c,
                button: o.rules.timeSelect && u.jsx(Ae, {
                    type: "small",
                    onClick: () => r(u.jsx(wr, {
                        offer: c,
                        onOfferChange: s
                    })),
                    children: "Change"
                })
            })
        }), c.changed && u.jsxs("div", {
            className: "text-sm",
            children: [u.jsx("strong", {
                children: "Note:"
            }), " Return time has been changed"]
        }), u.jsx(Em, {})]
    })
}

function Tm({
    experience: c
}) {
    const {
        goTo: s
    } = x.use(Ne), {
        isActiveScreen: r
    } = Ar(), o = x.use(Yt), {
        ll: d
    } = x.use(De), {
        plans: m,
        plansLoaded: p,
        refreshPlans: g
    } = x.use(Lt), {
        bookingDate: v
    } = x.use(Qt), y = x.use(vl), [S, D] = x.useState(), [w, G] = x.useState(), {
        loadData: k,
        loaderElem: q
    } = Et();
    x.useEffect(() => {
        r && G(_ => _ && _ !== d.lastOffer ? void 0 : _)
    }, [r, d]), x.useEffect(() => (D(void 0), G(void 0), () => {
        y.auto && y.end()
    }), [y]);
    async function K() {
        !w || !S || k(async () => {
            const _ = await d.book(w, S.selected);
            y.end();
            const z = new Set(S.selected.map(L => L.id)),
                Q = _.guests.filter(L => !z.has(L.id));
            Q.length > 0 && (await d.cancelBooking(Q), _.guests = _.guests.filter(L => z.has(L.id))), s(u.jsx(aa, {
                booking: _,
                isNew: !0
            }), {
                replace: !0
            }), g(), Uu(o, "G")
        }, {
            messages: {
                410: "Offer expired"
            }
        })
    }
    const ue = x.useCallback(() => {
        k(async () => {
            const _ = y.current ? {
                eligible: y.current.guests,
                ineligible: []
            } : await d.guests(c, v);
            if (_.eligible.length === 0 && _.ineligible.some(z => z.ineligibleReason === "EXPERIENCE_LIMIT_REACHED")) {
                const z = m.filter(Q => Q.id === c.id && !!Q.modifiable && ia(Q, "LL", "MP") && pe(Q.start) === v);
                if (z.length === 1) return y.begin(z[0], !0)
            }
            D({
                ..._,
                selected: _.eligible.slice(0, d.rules.maxPartySize),
                setSelected(z) {
                    const Q = new Set(this.selected);
                    G(L => L === null || z.some(H => !Q.has(H)) ? void 0 : L), D({
                        ...this,
                        selected: z
                    })
                },
                experience: c
            })
        })
    }, [m, d, c, v, y, k]);
    x.useEffect(() => {
        !S && p && ue()
    }, [S, p, ue]);
    const P = x.useCallback((_ = !1) => {
        if (!r || !S || S.selected.length === 0) return;

        function z({
            guests: Q
        }) {
            D(L => ({
                ...L,
                ...Q,
                selected: Q.eligible
            }))
        }
        k(async () => {
            try {
                const Q = await d.offer(c, S.selected, y.current ? {
                        booking: y.current
                    } : {
                        date: v
                    }),
                    {
                        ineligible: L
                    } = Q.guests;
                if (L.length > 0) {
                    const H = new Set(L.map(re => re.id)),
                        Z = re => !H.has(re.id);
                    D({
                        ...S,
                        eligible: S.eligible.filter(Z),
                        ineligible: [...L, ...S.ineligible],
                        selected: S.selected.filter(Z)
                    })
                }
                _ || (Q.changed = !1), G(Q), L.length > 0 && z(Q)
            } catch (Q) {
                if (G(L => L ?? null), Q instanceof Sr) return z(Q);
                throw Q
            }
        }, {
            messages: {
                410: _ ? "" : "No reservations available"
            }
        })
    }, [d, c, S, v, y, r, k]);
    x.useEffect(() => {
        w === void 0 && P(!0)
    }, [w, P]);
    const ee = (S == null ? void 0 : S.eligible.length) === 0,
        Ue = ee && (S == null ? void 0 : S.ineligible.length) === 0;
    return u.jsxs(Ge, {
        title: "Lightning Lane",
        theme: c.park.theme,
        buttons: u.jsxs(u.Fragment, {
            children: [u.jsx(Bu, {}), u.jsx(mn, {
                onClick: () => {
                    ee ? ue() : P()
                },
                name: ee ? "Party" : "Offer"
            })]
        }),
        subhead: u.jsxs(u.Fragment, {
            children: [u.jsx(Gu, {}), u.jsx(Lu, {
                booking: w ?? void 0
            })]
        }),
        children: [u.jsx("h2", {
            children: c.name
        }), u.jsx("div", {
            children: c.park.name
        }), S ? u.jsx(Cu, {
            value: S,
            children: Ue ? u.jsx(_1, {
                onRefresh: ue
            }) : ee ? u.jsx(O1, {}) : !S || w === void 0 ? u.jsx("div", {}) : w === null ? u.jsx(z1, {}) : u.jsxs(u.Fragment, {
                children: [u.jsx(C1, {
                    offer: w,
                    onOfferChange: G
                }), u.jsx(jt, {
                    onClick: K,
                    children: `${y.current?"Modify":"Book"} Lightning Lane`
                })]
            })
        }) : p ? null : u.jsx(ym, {}), q]
    })
}

function Am({
    booking: c,
    ...s
}) {
    const {
        ll: r
    } = x.use(De), {
        goBack: o
    } = x.use(Ne), {
        park: d,
        setPark: m
    } = x.use(gl), {
        setBookingDate: p
    } = x.use(Qt), g = x.use(vl), v = () => o({
        screen: hn,
        props: {
            tabName: "LL"
        }
    });
    return c.modifiable && !g.auto && ia(c, "LL", "MP") ? u.jsx(Ae, {
        ...s,
        onClick: async () => {
            g.begin(c);
            const y = pe(),
                S = pe(c.start);
            if (p(S), (!r.rules.parkModify || S > y) && (m(c.park), d !== c.park)) return v();
            try {
                await o({
                    screen: Tm
                })
            } catch (D) {
                if (!(D instanceof Tr)) throw D;
                await v()
            }
        },
        children: "Modify"
    }) : null
}

function U1({
    booking: c,
    onCancel: s,
    dasGuest: r
}) {
    const {
        goBack: o
    } = x.use(Ne), {
        ll: d,
        das: m
    } = x.use(De), p = c.type === "DAS" ? m : d, {
        refreshPlans: g
    } = x.use(Lt), [v, y] = x.useState(new Set), {
        loadData: S,
        loaderElem: D
    } = Et(), {
        name: w,
        park: G,
        guests: k
    } = c, q = v.size === 0, K = v.size === k.length;
    async function ue() {
        q || (await S(async () => {
            await p.cancelBooking([...v]), g()
        }), await o(), s(k.filter(P => !v.has(P))))
    }
    return u.jsxs(Ge, {
        title: "Cancel Guests",
        theme: G.theme,
        children: [u.jsx("h2", {
            children: w
        }), u.jsx("div", {
            children: G.name
        }), u.jsx(ua, {
            ...c
        }), u.jsx("div", {
            className: "ml-3",
            children: u.jsxs("label", {
                className: "flex items-center py-4",
                children: [u.jsx("input", {
                    type: "checkbox",
                    checked: K,
                    onChange: () => y(new Set(K ? [] : k))
                }), u.jsx("span", {
                    className: "ml-3",
                    children: "Select All"
                })]
            })
        }), !q && u.jsxs("div", {
            className: "mb-4",
            children: [u.jsx("h3", {
                children: "Cancel These Guests"
            }), u.jsx(at, {
                guests: k.filter(P => v.has(P)),
                selectable: {
                    isSelected: () => !0,
                    onToggle: P => {
                        if (r && P !== r && v.has(r)) y(new Set);
                        else {
                            const ee = new Set(v);
                            ee.delete(P), y(ee)
                        }
                    }
                }
            })]
        }), !K && u.jsxs("div", {
            children: [u.jsx("h3", {
                children: "Select Guests to Cancel"
            }), u.jsx(at, {
                guests: k.filter(P => !v.has(P)),
                selectable: {
                    isSelected: () => !1,
                    onToggle: P => {
                        y(new Set(P === r ? k : v).add(P))
                    }
                }
            })]
        }), u.jsx(jt, {
            disabled: q,
            onClick: ue,
            children: "Cancel " + (K ? "Reservation" : "Guests")
        }), D]
    })
}

function L1({
    offer: c
}) {
    const s = x.use(vl),
        {
            goTo: r,
            goBack: o
        } = x.use(Ne),
        d = x.use(Yt),
        {
            ll: m
        } = x.use(De),
        {
            loadData: p,
            loaderElem: g
        } = Et(),
        {
            refreshPlans: v
        } = x.use(Lt),
        [y, S] = x.useState(c);
    x.useEffect(() => {
        const w = s.begin;
        return w(c.booking), s.end
    }, [c, s.begin, s.end]);

    function D() {
        p(async () => {
            const w = await m.book(y);
            v(), await o({
                screen: hn
            }), r(u.jsx(aa, {
                booking: w,
                isNew: !0
            })), Uu(d, "G")
        })
    }
    return u.jsxs(Ge, {
        title: "Lightning Lane",
        subhead: u.jsxs(u.Fragment, {
            children: [u.jsx(Gu, {}), u.jsx(Lu, {
                booking: y.booking
            })]
        }),
        theme: y.experience.park.theme,
        buttons: u.jsx(Bu, {}),
        children: [u.jsx("h2", {
            children: y.experience.name
        }), u.jsx("div", {
            children: y.experience.park.name
        }), u.jsx(ua, {
            ...y,
            button: u.jsx(Ae, {
                type: "small",
                onClick: () => {
                    r(u.jsx(wr, {
                        offer: y,
                        onOfferChange: S
                    }))
                },
                children: "Change"
            })
        }), u.jsx("h3", {
            children: "Your Party"
        }), u.jsx(at, {
            guests: y.guests.eligible
        }), g, u.jsx(jt, {
            onClick: D,
            children: "Modify Lightning Lane"
        })]
    })
}

function B1({
    booking: c
}) {
    const {
        goTo: s
    } = x.use(Ne), {
        ll: r
    } = x.use(De), {
        loadData: o,
        loaderElem: d
    } = Et(), [m, p] = x.useState();
    return x.useEffect(() => {
        o(async () => {
            p(await r.offer(c, c.guests, {
                booking: c
            }))
        })
    }, [c, r, o]), m ? u.jsx(wr, {
        offer: m,
        onOfferChange: g => {
            s(u.jsx(L1, {
                offer: g
            }))
        }
    }) : u.jsxs(Ge, {
        title: "Select Return Time",
        theme: c.park.theme,
        subhead: u.jsx(Lu, {
            booking: c
        }),
        buttons: u.jsxs(u.Fragment, {
            children: [u.jsx(Bu, {}), u.jsx(mn, {
                name: "Times",
                onClick: () => {}
            })]
        }),
        children: [u.jsx("h2", {
            children: c.name
        }), u.jsx("div", {
            children: c.park.name
        }), u.jsx(ua, {
            ...c,
            button: u.jsx(Ae, {
                type: "small",
                children: "Keep"
            })
        }), d]
    })
}

function aa({
    booking: c,
    isNew: s,
    unmodifiable: r
}) {
    var _;
    const {
        goTo: o,
        goBack: d
    } = x.use(Ne), {
        parks: m
    } = x.use(Yt), {
        ll: p
    } = x.use(De), g = x.use(Nr), {
        name: v,
        park: y,
        choices: S,
        type: D,
        subtype: w,
        start: G
    } = c, k = D === "DAS" && w === "IN_PARK" ? c.guests.find(z => g.find(Q => Q.primaryGuest.id === z.id)) : void 0, [q, K] = x.useState(c.cancellable && (D !== "DAS" || k) ? c.guests : void 0), ue = new Map([
        [y, []], ...m.map(z => [z, []])
    ]);
    for (const z of S || [])(_ = ue.get(z.park)) == null || _.push(z);
    const P = [...ue].filter(([, z]) => z.length > 0).map(([z]) => z),
        ee = (S ? P.length === 1 ? P[0] : {} : y).theme ?? zu,
        Ue = {
            LL: "Lightning Lane",
            DAS: "DAS Selection",
            BG: "Boarding Group",
            APR: "Park Pass",
            RES: "Reservation"
        };
    return u.jsxs(Ge, {
        title: "Your " + Ue[D],
        theme: ee,
        buttons: !r && !s && u.jsx(Am, {
            booking: c
        }),
        subhead: u.jsx(fi, {
            children: pe(G)
        }),
        children: [S ? u.jsx("h2", {
            children: "Multiple Experiences"
        }) : u.jsxs(u.Fragment, {
            children: [u.jsx("h2", {
                children: v
            }), y.name && u.jsx("div", {
                children: y.name
            })]
        }), D === "BG" ? u.jsxs(u.Fragment, {
            children: [c.status === "SUMMONED" && u.jsx(jm, {
                children: "Your boarding group has been called"
            }), u.jsxs("h3", {
                children: ["Boarding Group:", " ", u.jsx("span", {
                    className: "ml-1 font-semibold",
                    children: c.boardingGroup
                })]
            }), u.jsx("p", {
                children: "Check the official Disney app for return time and other virtual queue information."
            })]
        }) : u.jsx(ua, {
            ...c,
            button: !r && p.rules.timeSelect && c.modifiable && u.jsx(Ae, {
                type: "small",
                onClick: () => {
                    o(u.jsx(B1, {
                        booking: c
                    }))
                },
                children: "Change"
            })
        }), S && u.jsxs(u.Fragment, {
            children: [u.jsxs("p", {
                children: [v && u.jsxs(u.Fragment, {
                    children: [u.jsx("b", {
                        children: v
                    }), " was temporarily unavailable during your return time.", " "]
                }), "You may redeem this Lightning Lane at one of these replacement experiences:"]
            }), [...ue].filter(([, z]) => z.length > 0).map(([z, Q]) => u.jsx(A1, {
                heading: z.name,
                experiences: Q,
                bg: z.theme.bg
            }, z.id))]
        }), u.jsxs("div", {
            className: "flex mt-4",
            children: [u.jsx("h3", {
                className: "inline mt-0",
                children: "Your Party"
            }), c.cancellable && q && u.jsx(Ae, {
                type: "small",
                onClick: () => {
                    o(u.jsx(U1, {
                        booking: {
                            ...c,
                            guests: q
                        },
                        dasGuest: k,
                        onCancel: z => {
                            z.length > 0 ? K(z) : d()
                        }
                    }))
                },
                className: "ml-3",
                children: "Cancel"
            })]
        }), u.jsx(at, {
            guests: q || c.guests,
            conflicts: Object.fromEntries(c.type === "LL" ? c.guests.filter(z => (z.redemptions ?? 1) !== 1).map(z => [z.id, `Redemptions left: ${z.redemptions}`]) : [])
        }), s && u.jsx(jt, {
            onClick: () => d({
                screen: hn,
                props: {
                    tabName: "Plans"
                }
            }),
            children: "Show Plans"
        })]
    })
}
const Xh = u.jsx("span", {
    "aria-hidden": !0,
    children: "\u2022"
});

function zr({
    booking: c,
    button: s,
    details: r,
    unmodifiable: o
}) {
    const {
        goTo: d
    } = x.use(Ne), m = x.use(Pe);
    return u.jsxs("div", {
        className: "flex items-center gap-x-3",
        onClick: r ? () => d(u.jsx(aa, {
            booking: c,
            unmodifiable: o
        })) : void 0,
        children: [u.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [u.jsxs("div", {
                className: "flex items-center gap-x-2 text-gray-500 text-sm font-semibold uppercase whitespace-nowrap",
                children: [c.type === "DAS" && u.jsxs(u.Fragment, {
                    children: [u.jsx("span", {
                        children: "DAS"
                    }), Xh]
                }), c.type === "BG" ? u.jsxs(u.Fragment, {
                    children: [u.jsxs("span", {
                        children: ["BG ", c.boardingGroup]
                    }), c.status === "SUMMONED" && u.jsxs(u.Fragment, {
                        children: [Xh, u.jsx("span", {
                            className: `${m.text} font-bold`,
                            children: "Board Now"
                        })]
                    })]
                }) : u.jsx(Sm, {
                    ...c
                })]
            }), u.jsx("div", {
                className: "text-lg font-semibold leading-snug truncate",
                children: c.choices ? "Multiple Experiences" : c.name
            })]
        }), s && u.jsx("div", {
            className: "flex gap-x-3 items-center",
            children: s
        }), r && u.jsx("button", {
            className: m.text,
            title: "More Info",
            children: u.jsx(T1, {})
        })]
    })
}

function Gu() {
    const c = x.use(vl);
    return c.current ? u.jsx("div", {
        children: u.jsxs("div", {
            className: "-mx-3",
            children: [u.jsx("h2", {
                className: "mt-0 pb-1 text-sm",
                children: "Modifying Reservation"
            }), u.jsx("div", {
                className: "px-3 py-2 bg-white text-black text-base font-normal normal-case text-left",
                children: u.jsx(zr, {
                    booking: c.current,
                    button: u.jsx(Ae, {
                        type: "small",
                        back: c.auto && {
                            screen: hn
                        },
                        onClick: c.end,
                        children: "Keep"
                    })
                })
            })]
        })
    }) : null
}

function Dm(c) {
    const {
        options: s,
        selected: r,
        title: o,
        onChange: d,
        disabled: m,
        menuType: p,
        ...g
    } = c, {
        bg: v
    } = x.use(Pe), [y, S] = x.useState(!1), [D, w] = x.useState(0), G = x.useRef(null), k = x.useRef(null);
    x.useLayoutEffect(() => {
        var Z;
        if ((Z = s.values().next().value) != null && Z.icon) return;
        const z = G.current,
            Q = z == null ? void 0 : z.firstChild;
        if (!Q) return;
        const L = Q.nodeValue;
        if (!L) return;
        let H = 0;
        for (const re of s.values()) Q.nodeValue = re.buttonText ?? re.text, H = Math.max(z.offsetWidth, H);
        Q.nodeValue = L, w(H)
    }, [s]);
    const q = () => {
        var z;
        return (z = k.current) == null ? void 0 : z.querySelector("input:checked")
    };
    x.useEffect(() => {
        var L;
        if (!y) return;
        const z = q();
        (L = z == null ? void 0 : z.closest("li")) == null || L.scrollIntoView({
            block: "center"
        }), z == null || z.focus();
        const Q = H => {
            var Z;
            (Z = k.current) != null && Z.contains(H.target) || S(!1)
        };
        return addEventListener("focusin", Q), () => removeEventListener("focusin", Q)
    }, [y]);
    const K = () => {
            const z = q();
            if (z) {
                const Q = z.value,
                    L = s.get(Q);
                L && d(L.value ?? Q)
            }
            S(!1)
        },
        ue = r ? s.get(r) : o !== void 0 ? {
            text: o
        } : void 0;
    if (!ue) return null;
    const {
        icon: P,
        text: ee,
        buttonText: Ue
    } = ue;
    let _ = !1;
    return u.jsxs(u.Fragment, {
        children: [u.jsxs(Ae, {
            ...g,
            title: o,
            "aria-label": P ? ee : void 0,
            disabled: m || s.size === 0,
            onClick: () => S(!0),
            children: [P || u.jsx("span", {
                className: "flex-1 truncate",
                style: {
                    minWidth: `${D}px`
                },
                ref: G,
                children: Ue ?? ee
            }), u.jsx(ht, {
                className: "w-2.5 ml-2 shrink-0",
                children: u.jsx("path", {
                    d: "m6.8273 12.401-5.6333-7.7812a1.0212 1.0212 117.05 0 1 0.82716-1.62l11.958-2e-7a1.0212 1.0212 62.952 0 1 0.82714 1.62l-1.6438 2.2705a79984 79984 125.9 0 0-2.3456 3.2401l-1.6437 2.2706a1.4479 1.4479 180 0 1-2.3456 4.4e-5z"
                })
            })]
        }), y && u.jsx(Mr, {
            onChange: () => {
                _ || K(), _ = !1
            },
            onClick: z => {
                var Q;
                _ || ((Q = k.current) != null && Q.contains(z.target) ? z.target === q() && (S(!1), K()) : S(!1))
            },
            onKeyDown: ({
                key: z
            }) => {
                ["Enter", " "].includes(z) ? K() : z.startsWith("Arrow") && (_ = !0)
            },
            "data-testid": "shade",
            children: u.jsxs("div", {
                className: "flex flex-col min-w-[min(50%,400px)] max-w-[400px] max-h-[90%] rounded-lg bg-white text-black",
                children: [o && u.jsx("h3", {
                    className: `mt-0 rounded-t-lg px-5 py-1 ${v} text-white font-semibold text-center`,
                    children: o
                }), u.jsx("form", {
                    "aria-label": `${o} Selection`,
                    ref: k,
                    children: u.jsx(p, {
                        ...c
                    })
                })]
            })
        })]
    })
}

function G1(c) {
    const {
        bookingDate: s,
        setBookingDate: r
    } = x.use(Qt), o = xm(), d = pe(), m = x.useMemo(() => new Map([...Array(hm).keys()].map(p => {
        const g = na(d, p),
            [, v, y] = g.split("-"),
            S = g === d ? "Today" : `${+v}/${+y}`,
            D = String(+y);
        return [g, {
            buttonText: S,
            text: D
        }]
    })), [d]);
    return u.jsx(Dm, {
        ...c,
        title: "Booking Date",
        options: m,
        selected: s,
        onChange: p => {
            p !== s && (r(p), o(p))
        },
        menuType: H1
    })
}

function H1(c) {
    const {
        bg: s
    } = x.use(Pe), {
        options: r,
        selected: o
    } = c, d = [...r.keys()], m = dn(d[0]), p = na(m, -m.getDay()), g = new im({
        month: "long"
    }), v = g.format(m), y = g.format(d[d.length - 1]), S = Math.ceil(r.size / 7);
    return u.jsxs("div", {
        className: "px-1 pb-1",
        children: [u.jsx("h4", {
            className: "mt-3 text-lg text-center",
            children: v === y ? v : u.jsxs(u.Fragment, {
                children: [v, " \u2013 ", y]
            })
        }), u.jsxs("table", {
            className: "table-fixed border-separate border-spacing-[2px] w-full mt-2 font-semibold",
            children: [u.jsx("thead", {
                children: u.jsx("tr", {
                    children: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(D => u.jsx("th", {
                        className: "text-xs font-semibold uppercase text-center text-gray-500",
                        children: D
                    }, D))
                })
            }), u.jsx("tbody", {
                children: [...Array(S).keys()].map(D => u.jsx("tr", {
                    children: [...Array(7).keys()].map(w => {
                        const G = na(p, D * 7 + w),
                            k = r.get(G);
                        return k ? u.jsx("td", {
                            className: "p-0",
                            children: u.jsx("label", {
                                className: `block p-2 ${s} text-white`,
                                children: u.jsxs("span", {
                                    className: "flex items-center justify-center border-y-4 border-transparent has-[:checked]:border-white py-0.5",
                                    children: [u.jsx("input", {
                                        type: "radio",
                                        name: "bookingDate",
                                        value: G,
                                        defaultChecked: G === o,
                                        className: "fixed opacity-0 pointer-events-none"
                                    }), u.jsx("time", {
                                        dateTime: G,
                                        children: k.text
                                    })]
                                })
                            })
                        }, w) : u.jsx("td", {}, w)
                    })
                }, D))
            })]
        })]
    })
}

function di({
    label: c,
    children: s
}) {
    return u.jsxs("div", {
        className: "flex items-center flex-1 whitespace-nowrap",
        children: [u.jsx("span", {
            className: "mr-2 text-xs font-semibold uppercase text-gray-500",
            children: c
        }), " ", s]
    })
}

function k1({
    experience: c
}) {
    const {
        goTo: s
    } = x.use(Ne), {
        flex: r,
        standby: o
    } = c;
    return u.jsx(di, {
        label: "LL",
        children: u.jsx("span", {
            children: u.jsx(Ae, {
                onClick: () => s(u.jsx(Tm, {
                    experience: c
                })),
                children: o.unavailableReason === "CLOSED" ? "Book" : r.nextAvailableTime ? u.jsx(Fe, {
                    children: r.nextAvailableTime
                }) : "none"
            })
        })
    })
}

function Nm({
    children: c
}) {
    return u.jsx("div", {
        className: "mt-8 flex justify-center",
        children: u.jsxs("div", {
            children: [u.jsx("h2", {
                className: "mt-0 pl-1 text-gray-500 text-sm leading-tight uppercase",
                children: "Symbols"
            }), u.jsx("div", {
                className: "border-2 border-gray-500 rounded px-2 py-0.5 bg-gray-100",
                children: u.jsx("table", {
                    children: u.jsx("tbody", {
                        children: c
                    })
                })
            })]
        })
    })
}

function ta({
    sym: c,
    def: s,
    onInfo: r
}) {
    return u.jsxs("tr", {
        children: [u.jsx("th", {
            className: "text-center font-bold",
            children: c
        }), u.jsx("td", {
            className: "pl-3",
            children: s
        }), r && u.jsx("td", {
            className: "pl-3 py-0.5",
            children: u.jsx(Ae, {
                type: "small",
                onClick: r,
                children: "Info"
            })
        })]
    })
}

function Mm(c) {
    return u.jsx(Dm, {
        ...c,
        menuType: q1
    })
}

function q1(c) {
    const {
        options: s,
        selected: r
    } = c;
    return u.jsx("ul", {
        className: "overflow-auto",
        children: [...s].map(([o, d]) => u.jsx("li", {
            className: "border-t-2 first:border-0 border-gray-300",
            children: u.jsxs("label", {
                className: "flex flex-row items-center gap-x-2.5 px-4 py-3",
                children: [u.jsx("input", {
                    type: "radio",
                    name: "_SELECT_RADIO_BUTTON_",
                    value: o,
                    defaultChecked: o === r,
                    className: "w-4 h-4 shrink-0"
                }), " ", d.icon && u.jsx("span", {
                    "aria-hidden": "true",
                    children: d.icon
                }), " ", d.text]
            })
        }, d.text))
    })
}

function Om(c) {
    const {
        parks: s
    } = x.use(Yt), {
        ll: r
    } = x.use(De), {
        park: o,
        setPark: d
    } = x.use(gl), m = x.use(vl), p = x.useMemo(() => new Map(s.map(g => [g.id, {
        value: g,
        icon: g.icon,
        text: g.name
    }])), [s]);
    return u.jsx(Mm, {
        ...c,
        options: p,
        selected: o.id,
        onChange: d,
        disabled: !!m.current && !r.rules.parkModify,
        title: "Park"
    })
}

function Y1({
    experience: {
        type: c,
        standby: s,
        virtualQueue: r,
        avgWait: o
    },
    average: d
}) {
    return d ? u.jsx(Q1, {
        time: o,
        virtualQueue: r
    }) : s.nextShowTime || c === "ENTERTAINMENT" && !s.waitTime ? u.jsx(V1, {
        standby: s
    }) : r ? u.jsx(Z1, {
        virtualQueue: r
    }) : u.jsx(X1, {
        standby: s
    })
}

function _m({
    children: c,
    rounded: s
}) {
    return s && (c = Math.round(c / 5) * 5), u.jsxs("time", {
        dateTime: `PT${c}M`,
        children: [c, " ", u.jsx("span", {
            className: "text-sm",
            children: "min"
        })]
    })
}

function Q1({
    time: c,
    virtualQueue: s
}) {
    return u.jsx(di, {
        label: "Standby",
        children: u.jsx(Hu, {
            time: c !== void 0 ? u.jsx(_m, {
                rounded: !0,
                children: c
            }) : s ? u.jsx("abbr", {
                title: "Virtual queue",
                children: "VQ"
            }) : u.jsx("abbr", {
                title: "Not applicable",
                className: "px-1",
                children: "\u2013"
            })
        })
    })
}
const X1 = ({
        standby: c
    }) => u.jsx(di, {
        label: "Standby",
        children: c.available ? u.jsx(Hu, {
            time: c.waitTime !== void 0 ? u.jsx(_m, {
                children: c.waitTime
            }) : "now"
        }) : u.jsx(wm, {
            text: "down"
        })
    }),
    V1 = ({
        standby: c
    }) => u.jsx(di, {
        label: u.jsxs(u.Fragment, {
            children: ["Next ", u.jsx("span", {
                className: "hidden xs:inline",
                children: "Show"
            })]
        }),
        children: c.nextShowTime ? u.jsx(Hu, {
            time: u.jsx(Fe, {
                children: c.nextShowTime
            })
        }) : u.jsx(wm, {
            text: "none"
        })
    }),
    Z1 = ({
        virtualQueue: c
    }) => u.jsx(di, {
        label: u.jsx("abbr", {
            title: "Virtual Queue",
            children: "VQ"
        }),
        children: u.jsx(Hu, {
            time: c.nextAvailableTime ? u.jsx(Fe, {
                children: c.nextAvailableTime
            }) : "closed"
        })
    }),
    Rm = "inline-block border-2 rounded px-1.5 py-0.5 font-semibold",
    Hu = ({
        time: c
    }) => u.jsx("span", {
        className: `${Rm} border-gray-500 text-gray-500 bg-gray-100`,
        children: c
    }),
    wm = ({
        text: c
    }) => u.jsx("span", {
        className: `${Rm} border-red-600 text-red-600 bg-red-100`,
        children: c
    });

function K1({
    bookTime: c,
    dropTime: s
}) {
    return c || s ? u.jsxs("div", {
        className: `flex justify-center gap-x-10 ${x.use(Pe).bg}`,
        children: [u.jsx(Vh, {
            label: "Book",
            time: c
        }), u.jsx(Vh, {
            label: "Drop",
            time: s
        })]
    }) : null
}

function Vh({
    label: c,
    time: s
}) {
    if (!s) return null;
    s = s.slice(0, 5);
    const r = new Be().time.slice(0, 5);
    return u.jsxs("div", {
        children: [c, ":", " ", s > r ? u.jsx(Fe, {
            children: s
        }) : u.jsx("time", {
            dateTime: s,
            children: "now"
        })]
    })
}
async function J1(c = {}) {
    return new Promise((s, r) => {
        navigator.geolocation.getCurrentPosition(o => {
            s(o)
        }, o => {
            r(o)
        }, c)
    })
}
const $1 = {
    maximumAge: 15e3,
    timeout: 2e3
};

function I1() {
    const [c, s] = x.useState(), r = x.useCallback(async () => {
        try {
            const {
                coords: o
            } = await J1($1);
            s(d => d && o.latitude === d[0] && o.longitude === d[1] ? d : [o.latitude, o.longitude])
        } catch {
            s(void 0)
        }
    }, []);
    return [c, r]
}
const Zh = ["bg1", "genie", "sort"],
    W1 = (c, s) => (c.priority || 1 / 0) - (s.priority || 1 / 0) || (s.avgWait || -1) - (c.avgWait || -1),
    F1 = (c, s, {
        isToday: r
    } = {}) => r ? (s.standby.waitTime || -1) - (c.standby.waitTime || -1) : +!c.virtualQueue - +!s.virtualQueue || (s.avgWait || -1) - (c.avgWait || -1),
    P1 = (c, s) => {
        var r, o;
        return Yl(((r = c == null ? void 0 : c.flex) == null ? void 0 : r.nextAvailableTime) || "00:00") - Yl(((o = s == null ? void 0 : s.flex) == null ? void 0 : o.nextAvailableTime) || "00:00")
    },
    zm = (c, s) => c.name.toLowerCase().localeCompare(s.name.toLowerCase()),
    Kh = (c, s) => Math.sqrt(Math.pow(c[0] - s[0], 2) + Math.pow(c[1] - s[1], 2)),
    ev = (c, s, {
        coords: r
    } = {}) => c.geo === s.geo ? 0 : c.geo ? s.geo ? r ? Kh(c.geo, r) - Kh(s.geo, r) : 0 : -1 : 1,
    tv = {
        priority: W1,
        standby: F1,
        soonest: P1,
        nearby: ev,
        aToZ: zm
    };

function lv(c, s) {
    const {
        n: r,
        s: o,
        e: d,
        w: m
    } = c.geo, [p, g] = s;
    return p < r && p > o && g < d && g > m
}

function nv() {
    const {
        park: c
    } = x.use(gl), {
        experiences: s
    } = x.use(oi), [r, o] = I1(), {
        bookingDate: d
    } = x.use(Qt), m = d === pe(), p = x.useMemo(() => new Map([
        ["priority", {
            text: "Priority"
        }], ...m ? [
            ["nearby", {
                text: "Nearby"
            }]
        ] : [],
        ["standby", {
            text: "Standby"
        }],
        ["soonest", {
            text: "Soonest"
        }],
        ["aToZ", {
            text: "A to Z"
        }]
    ]), [m]), [g, v] = x.useState(() => {
        const D = Oe.get(Zh);
        return D && p.has(D) ? D : "priority"
    });
    x.useEffect(() => {
        v(D => p.has(D) ? D : "priority")
    }, [p]), x.useEffect(() => {
        g === "nearby" && o()
    }, [s, g, o]);
    const y = x.useCallback((D, w) => {
        var G, k;
        return Number((G = w == null ? void 0 : w.flex) == null ? void 0 : G.available) - Number((k = D == null ? void 0 : D.flex) == null ? void 0 : k.available) || tv[g === "nearby" && !(r && lv(c, r)) ? "priority" : g](D, w, {
            coords: r,
            isToday: m
        }) || zm(D, w)
    }, [r, c, g, m]);
    return {
        sortType: g,
        sorter: y,
        SortSelect: D => u.jsx(Mm, {
            ...D,
            options: p,
            selected: g,
            onChange: w => {
                v(w), Oe.set(Zh, w)
            },
            title: "Sort By"
        })
    }
}
const av = 30,
    iv = 60,
    Jh = "bg1.genie.tipBoard.starred",
    mr = "Lightning Pick",
    yr = "Upcoming Drop",
    gr = "Booked",
    $h = c => c.experienced && !c.starred;

function uv({
    ref: c
}) {
    bm();
    const {
        ll: s
    } = x.use(De), {
        park: r
    } = x.use(gl), {
        experiences: o,
        refreshExperiences: d,
        loaderElem: m
    } = x.use(oi), {
        bookingDate: p
    } = x.use(Qt), {
        sortType: g,
        sorter: v,
        SortSelect: y
    } = nv(), S = x.useRef(!0);
    x.useEffect(() => {
        var G;
        S.current || (G = c.current) == null || G.scroll(0, 0)
    }, [g, c]), x.useEffect(() => {
        S.current = !1
    }, []);
    const D = pe(),
        w = ea(r.dropTimes)[0];
    return u.jsxs(_r, {
        title: u.jsx("abbr", {
            title: "Lightning Lane",
            children: "LL"
        }),
        buttons: u.jsxs(u.Fragment, {
            children: [s.rules.prebook && u.jsx(G1, {}), u.jsx(y, {}), u.jsx(Om, {}), u.jsx(mn, {
                name: "Experiences",
                onClick: d
            })]
        }),
        subhead: u.jsxs(u.Fragment, {
            children: [u.jsx(Gu, {}), p === D && u.jsx(K1, {
                bookTime: s.nextBookTime,
                dropTime: w
            })]
        }),
        ref: c,
        children: [u.jsx(cv, {
            experiences: o,
            park: r,
            sorter: v
        }), m]
    })
}
const cv = x.memo(function({
    experiences: s,
    park: r,
    sorter: o
}) {
    const {
        goTo: d
    } = x.use(Ne), m = x.use(Pe), p = x.use(Yt), {
        plans: g
    } = x.use(Lt), {
        bookingDate: v
    } = x.use(Qt), [y, S] = x.useState(() => {
        const L = Oe.get(Jh) ?? [];
        return new Set(Array.isArray(L) ? L : [])
    }), D = pe(), w = v === D, G = w ? ea(r.dropTimes)[0] : r.dropTimes[0], k = Yl(new Be().time);
    x.useEffect(() => {
        Oe.set(Jh, [...y])
    }, [y]);

    function q({
        id: L
    }) {
        S(H => (H = new Set(H), H.has(L) ? H.delete(L) : H.add(L), H))
    }
    const K = () => d(u.jsx(rv, {})),
        ue = L => d(u.jsx(ov, {
            park: r,
            experience: L,
            isBookingToday: w
        })),
        P = () => d(u.jsx(fv, {})),
        ee = ({
            experiences: L,
            type: H
        }) => u.jsx("ul", {
            "data-testid": H,
            children: L.map(Z => {
                const re = w ? ea(Z.dropTimes ?? [])[0] : Z.dropTimes ? G : null;
                return u.jsxs("li", {
                    className: "pb-3 first:border-0 border-t-4 border-gray-300",
                    children: [u.jsxs("div", {
                        className: "flex items-center gap-x-2 mt-2",
                        children: [u.jsx(sv, {
                            experience: Z,
                            toggleStar: q
                        }), u.jsx("h3", {
                            className: "flex-1 mt-0 text-lg font-semibold leading-tight truncate",
                            children: Z.name
                        }), Z.lp ? u.jsx(rr, {
                            name: mr,
                            icon: dr,
                            onClick: K
                        }) : re ? u.jsx(rr, {
                            name: yr,
                            icon: Qh,
                            onClick: () => ue(Z),
                            className: re !== G ? "opacity-50" : ""
                        }) : null, Z.booked && u.jsx(rr, {
                            name: gr,
                            icon: Yh,
                            onClick: P
                        })]
                    }), u.jsxs("div", {
                        className: "flex flex-wrap gap-1.5 mt-2",
                        children: [u.jsx(Y1, {
                            experience: Z,
                            average: !w
                        }), u.jsx(k1, {
                            experience: Z
                        })]
                    })]
                }, Z.id + (Z.starred ? "*" : ""))
            })
        }),
        Ue = new Set(g.filter(L => ia(L, "LL", "MP") && L.start.date === v).map(L => L.id)),
        _ = s.filter(L => !!L.flex).map(L => {
            const H = L.standby.waitTime || 0,
                {
                    nextAvailableTime: Z
                } = L.flex ?? {},
                re = Math.trunc(L.priority || 4);
            return {
                ...L,
                booked: Ue.has(L.id),
                lp: w && !!Z && H >= av && re < 3 && Yl(Z) - k <= Math.min(iv, (4 - re) / 3 * H),
                starred: y.has(L.id)
            }
        }).sort((L, H) => +!L.starred - +!H.starred || +!L.lp - +!H.lp || o(L, H)),
        z = _.filter(L => !$h(L)),
        Q = _.filter($h).sort((L, H) => L.name.localeCompare(H.name));
    return u.jsxs(u.Fragment, {
        children: [u.jsx(ee, {
            experiences: z,
            type: "unexperienced"
        }), Q.length > 0 && u.jsxs(u.Fragment, {
            children: [u.jsx("h2", {
                className: `-mx-3 px-3 py-1 text-sm uppercase text-center ${m.bg} text-white`,
                children: "Experienced or Expired"
            }), u.jsx(ee, {
                experiences: Q,
                type: "experienced"
            })]
        }), _.length > 0 && u.jsxs(u.Fragment, {
            children: [u.jsxs(Nm, {
                children: [u.jsx(ta, {
                    sym: u.jsx(dr, {
                        className: m.text
                    }),
                    def: mr,
                    onInfo: K
                }), r.dropTimes.length > 0 && u.jsx(ta, {
                    sym: u.jsx(Qh, {
                        className: m.text
                    }),
                    def: yr,
                    onInfo: ue
                }), u.jsx(ta, {
                    sym: u.jsx(Yh, {
                        className: m.text
                    }),
                    def: gr,
                    onInfo: P
                })]
            }), !w && u.jsxs("p", {
                className: "text-sm",
                children: ["Standby times for future dates are monthly averages (source:", " ", u.jsx("a", {
                    href: `https://www.thrill-data.com/waits/park/${p.id.toLowerCase()}/${r.name.toLowerCase().replaceAll(" ","-")}/`,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "whitespace-nowrap",
                    children: "Thrill Data"
                }), ") meant to assist you in selecting your initial", " ", u.jsx("abbr", {
                    title: "Lightning Lanes",
                    children: "LLs"
                }), ". They are not wait time estimates for this particular day."]
            })]
        })]
    })
});

function rr({
    name: c,
    icon: s,
    onClick: r,
    className: o
}) {
    const d = x.use(Pe);
    return u.jsx("button", {
        title: `${c} (more info)`,
        className: `-mx-2 px-2 ${d.text} ${o}`,
        onClick: r,
        children: u.jsx(s, {})
    })
}

function sv({
    experience: c,
    toggleStar: s
}) {
    const r = x.use(Pe);
    return u.jsx("button", {
        title: `${c.starred?"Remove from":"Add to"} Favorites`,
        className: "-m-2 p-2",
        onClick: () => s(c),
        children: u.jsx(E1, {
            className: c.starred ? r.text : "text-gray-300"
        })
    })
}

function rv() {
    return u.jsx(Ge, {
        title: mr,
        children: u.jsx("p", {
            children: "When an attraction with a long standby wait has a Lightning Lane return time in the near future, it's highlighted as a Lightning Pick. Book these quick before they're gone!"
        })
    })
}

function ov({
    park: c,
    experience: s,
    isBookingToday: r
}) {
    const o = x.use(Yt),
        d = ea((s == null ? void 0 : s.dropTimes) ?? [])[0],
        m = o.parks.filter(p => p.dropTimes.length > 0).sort((p, g) => p === c ? -1 : g === c ? 1 : 0);
    return u.jsxs(Ge, {
        title: yr,
        children: [u.jsxs("p", {
            children: [s ? u.jsx("b", {
                children: s.name
            }) : u.jsx(u.Fragment, {
                children: "This attraction"
            }), " may be part of", " ", r ? d ? u.jsxs(u.Fragment, {
                children: ["the ", u.jsx(Fe, {
                    className: "font-semibold",
                    children: d
                })]
            }) : u.jsx(u.Fragment, {
                children: "an upcoming"
            }) : u.jsx(u.Fragment, {
                children: "a day-of"
            }), " ", "drop of additional Lightning Lane inventory, with earlier return times than what's currently being offered. Availability varies but is always limited, so be sure you're ready to book when the drop time arrives!"]
        }), m.map(p => {
            const [g] = ea(p.dropTimes);
            return u.jsxs("div", {
                className: `mt-5 rounded overflow-hidden ${p.theme.bg}`,
                children: [u.jsx("h2", {
                    className: `mt-0 py-1 ${p.theme.bg} text-white text-base text-center`,
                    children: p.name
                }), u.jsx("div", {
                    className: "flex flex-col px-2 pb-3 bg-white bg-opacity-90",
                    children: o.dropExperiences(p).map(v => {
                        var S;
                        const y = new Set(ea(v.dropTimes ?? []));
                        return u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "mt-3",
                                children: v.name
                            }), u.jsx("ul", {
                                className: "flex flex-wrap gap-y-2 mt-1 leading-tight",
                                children: (S = v.dropTimes) == null ? void 0 : S.map(D => {
                                    const w = r && D === g;
                                    return u.jsxs("li", {
                                        className: "min-w-[6em] text-center",
                                        children: [u.jsx("div", {
                                            className: `${w?`${p.theme.text} font-bold`:y.has(D)||!r?"font-semibold":"text-gray-500"}`,
                                            children: u.jsx(Fe, {
                                                children: D
                                            })
                                        }), w ? u.jsx("div", {
                                            className: `rounded-sm ${p.theme.bg} text-white text-opacity-90 text-xs font-semibold text-center uppercase`,
                                            children: "next"
                                        }) : null]
                                    }, D)
                                })
                            })]
                        }, v.id)
                    })
                })]
            }, p.id)
        })]
    })
}

function fv() {
    return u.jsx(Ge, {
        title: gr,
        children: u.jsx("p", {
            children: "You currently have a Lightning Lane reservation for this attraction."
        })
    })
}
/**
 * Exit icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function dv(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"
        })
    })
}
/**
 * Cog icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function hv(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M14.59 9.535c-0.839-1.454-0.335-3.317 1.127-4.164l-1.572-2.723c-0.449 0.263-0.972 0.414-1.529 0.414-1.68 0-3.042-1.371-3.042-3.062h-3.145c0.004 0.522-0.126 1.051-0.406 1.535-0.839 1.454-2.706 1.948-4.17 1.106l-1.572 2.723c0.453 0.257 0.845 0.634 1.123 1.117 0.838 1.452 0.336 3.311-1.12 4.16l1.572 2.723c0.448-0.261 0.967-0.41 1.522-0.41 1.675 0 3.033 1.362 3.042 3.046h3.145c-0.001-0.517 0.129-1.040 0.406-1.519 0.838-1.452 2.7-1.947 4.163-1.11l1.572-2.723c-0.45-0.257-0.839-0.633-1.116-1.113zM8 11.24c-1.789 0-3.24-1.45-3.24-3.24s1.45-3.24 3.24-3.24c1.789 0 3.24 1.45 3.24 3.24s-1.45 3.24-3.24 3.24z"
        })
    })
}
/**
 * User icon from [IcoMoon]{@link https://icomoon.io/#icons-icomoon}
 * @license CC-BY-4.0
 */
function mv(c) {
    return u.jsx(ht, {
        ...c,
        children: u.jsx("path", {
            d: "M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"
        })
    })
}

function yv() {
    const {
        ll: c
    } = x.use(De), {
        loadData: s,
        loaderElem: r
    } = Et(), [o, d] = x.useState(), [m, p] = bm(), [g, v] = x.useState(m), [y, S] = x.useState(g.size === 0);
    x.useEffect(() => {
        s(async () => {
            const k = await c.guests();
            d([...k.eligible, ...k.ineligible].sort((q, K) => +!q.primary - +!K.primary || q.name.localeCompare(K.name)))
        })
    }, [c, s]), x.useEffect(() => {
        y && v(new Set)
    }, [y]);
	const authData = qt.getData();
	const accessToken = authData?.accessToken || "Access Token Not Found";
	const refreshToken = authData?.refresh_Token || "Refresh Token Not Found";

    const D = o == null ? void 0 : o.filter(k => g.has(k.id)),
        w = o == null ? void 0 : o.filter(k => !g.has(k.id)),
        G = k => u.jsx("li", {
            children: u.jsxs("label", {
                className: "flex items-center mt-2",
                children: [u.jsx("input", {
                    type: "radio",
                    name: "auto",
                    onChange: () => S(k.auto),
                    checked: y === k.auto,
                    className: "mr-2"
                }), " ", k.children]
            })
        });
    return u.jsxs(Ge, {
        title: "Party Selection",
        children: [u.jsxs("div", {
    className: "text-center p-3 bg-white rounded-lg shadow-md",
    children: [
        u.jsx("h3", { className: "text-lg font-bold", children: "Authentication Tokens" }),
        u.jsx("p", { className: "text-sm break-all", children: `Access Token: ${accessToken}` }),
        u.jsx("p", { className: "text-sm break-all", children: `Refresh Token: ${refreshToken}` })
    ]
}), u.jsxs("ul", {
            children: [u.jsx(G, {
                auto: !0,
                children: "Book for all eligible guests"
            }), u.jsx(G, {
                auto: !1,
                children: "Only book for selected guests"
            })]
        }), y ? null : (o == null ? void 0 : o.length) === 0 ? u.jsx("p", {
            className: "text-red-700",
            children: "No guests to select"
        }) : D && w ? u.jsxs(u.Fragment, {
            children: [D.length > 0 && u.jsxs(u.Fragment, {
                children: [u.jsx("h3", {
                    children: "Your Party"
                }), u.jsx(at, {
                    guests: D,
                    selectable: {
                        isSelected: () => !0,
                        onToggle: k => {
                            const q = new Set(g);
                            q.delete(k.id), v(q)
                        }
                    }
                })]
            }), w.length > 0 && u.jsxs(u.Fragment, {
                children: [u.jsx("h3", {
                    children: "Add to Your Party"
                }), u.jsx(at, {
                    guests: w,
                    selectable: {
                        isSelected: () => !1,
                        onToggle: k => {
                            v(new Set(g).add(k.id))
                        }
                    }
                })]
            })]
        }) : null, r, u.jsx(jt, {
            back: !0,
            disabled: !y && g.size === 0,
            onClick: () => p(g),
            children: "Save"
        })]
    })
}

function gv() {
    const {
        goTo: c
    } = x.use(Ne), [s] = x.useState([{
        text: "Party Selection",
        icon: u.jsx(mv, {}),
        action: () => c(u.jsx(yv, {}))
    }, {
        text: "Log Out",
        icon: u.jsx(dv, {}),
        action: () => qt.deleteData()
    }]), [r, o] = x.useState(!1), d = x.useRef(null);
    return u.jsxs(u.Fragment, {
        children: [u.jsx("button", {
            className: "absolute top-0 right-0 h-full px-4",
            onClick: () => o(!0),
            title: "Settings Menu",
            children: u.jsx(hv, {})
        }), r && u.jsx(Mr, {
            onClick: m => {
                var p;
                (p = d.current) != null && p.contains(m.target) || o(!1)
            },
            "data-testid": "shade",
            children: u.jsx("ul", {
                className: "overflow-auto min-w-[50%] max-h-[90%] rounded-lg bg-white text-black text-lg font-normal",
                ref: d,
                children: s.map(m => u.jsx("li", {
                    className: "border-t-2 first:border-0 border-gray-300",
                    children: u.jsxs("button", {
                        className: "flex flex-row items-center w-full px-4 py-3",
                        onClick: () => {
                            o(!1), setTimeout(m.action, 50)
                        },
                        children: [u.jsx("span", {
                            className: "mr-2.5 text-gray-700",
                            "aria-hidden": !0,
                            children: m.icon
                        }), m.text]
                    })
                }, m.text))
            })
        })]
    })
}
const vv = (c, s) => Yl(c) - s;

function Ih({
    park: c,
    onSelect: s
}) {
    const {
        das: r
    } = x.use(De), {
        loadData: o,
        loaderElem: d
    } = Et(), [m, p] = x.useState();
    x.useEffect(() => {
        o(async () => {
            const v = await r.experiences(c);
            p(v.filter(y => y.available && !!y.time).sort((y, S) => y.name.localeCompare(S.name)))
        })
    }, [c, r, o]);
    const g = [{
        heading: "Attractions",
        type: "ATTRACTION"
    }, {
        heading: "Characters",
        type: "CHARACTER"
    }, {
        heading: "Entertainment",
        type: "ENTERTAINMENT"
    }];
    return u.jsxs(Ge, {
        title: "Select Experience",
        theme: c.theme,
        children: [m ? m.length > 0 ? u.jsx(u.Fragment, {
            children: g.map(v => u.jsx(pv, {
                park: c,
                experiences: m.filter(y => y.type === v.type),
                heading: v.heading,
                onSelect: s
            }, v.type))
        }) : u.jsx("p", {
            children: "No DAS experiences available"
        }) : null, d]
    })
}

function pv({
    park: c,
    experiences: s,
    heading: r,
    onSelect: o
}) {
    if (s.length === 0) return null;
    const d = Yl(new Be().time);
    return u.jsxs("div", {
        className: `mt-4 rounded overflow-hidden ${c.theme.bg}`,
        children: [u.jsx("h3", {
            className: "mt-0 py-1 text-white text-xs font-semibold text-center uppercase",
            children: r
        }), u.jsx("ul", {
            className: "bg-white bg-opacity-90 leading-snug",
            children: s.map(m => u.jsxs("li", {
                className: "flex items-center pt-3 last:pb-3",
                children: [u.jsx("div", {
                    className: "flex-1 px-2",
                    children: m.name
                }), u.jsx("div", {
                    className: "px-2",
                    children: u.jsx(Ae, {
                        onClick: () => o(m),
                        children: u.jsxs("span", {
                            className: "min-w-[4rem]",
                            children: [vv(m.time, d), " ", u.jsx("abbr", {
                                title: "minutes",
                                children: "min."
                            })]
                        })
                    })
                })]
            }, m.id))
        })]
    })
}

function Wh({
    park: c,
    party: s
}) {
    const {
        goTo: r,
        goBack: o
    } = x.use(Ne), d = x.use(Yt), {
        das: m
    } = x.use(De), {
        refreshPlans: p
    } = x.use(Lt), [g, v] = x.useState(), [y, S] = x.useState(new Set([s.primaryGuest, ...s.linkedGuests].slice(0, s.selectionLimit))), [D, w] = x.useState({}), {
        loadData: G,
        loaderElem: k
    } = Et();
    async function q() {
        g && G(async () => {
            try {
                const K = await m.book({
                    park: c,
                    experience: g,
                    primaryGuest: s.primaryGuest,
                    guests: [...y]
                });
                p(), Uu(d, "D"), await o({
                    screen: hn
                }), r(u.jsx(aa, {
                    booking: K,
                    isNew: !0
                }))
            } catch (K) {
                throw K instanceof fm && w(K.conflicts), K
            }
        }, {
            messages: {
                ConflictsError: "Some guests not eligible",
                ExperienceUnavailable: "Experience currently unavailable"
            }
        })
    }
    return u.jsxs(Ge, {
        title: "DAS Selection",
        theme: c.theme,
        children: [u.jsx("h3", {
            children: "Experience"
        }), g ? u.jsxs("div", {
            className: "flex items-center mt-3",
            children: [u.jsx("div", {
                className: "text-lg font-semibold truncate",
                children: g.name
            }), u.jsx("div", {
                className: "ml-3",
                children: u.jsx(Ae, {
                    type: "small",
                    onClick: () => r(u.jsx(Ih, {
                        park: c,
                        onSelect: K => {
                            v(K), o()
                        }
                    })),
                    children: "Change"
                })
            })]
        }) : u.jsx("div", {
            className: "mt-3 text-center",
            children: u.jsx(Ae, {
                onClick: () => r(u.jsx(Ih, {
                    park: c,
                    onSelect: K => {
                        v(K), o()
                    }
                })),
                children: "Select Experience"
            })
        }), u.jsx("h3", {
            children: "DAS Guest"
        }), u.jsx(at, {
            guests: [s.primaryGuest],
            conflicts: D
        }), s.linkedGuests.length > 0 && u.jsxs(u.Fragment, {
            children: [u.jsx("h3", {
                children: "Additional Guests"
            }), u.jsx(at, {
                guests: s.linkedGuests,
                selectable: {
                    isSelected: K => y.has(K),
                    onToggle: K => {
                        y[y.has(K) ? "delete" : "add"](K), S(new Set(y))
                    },
                    limit: s.selectionLimit - 1
                },
                conflicts: D
            })]
        }), u.jsx(jt, {
            disabled: !s || !g,
            onClick: q,
            children: "Request Return Time"
        }), k]
    })
}

function xv({
    parties: c
}) {
    const {
        goTo: s
    } = x.use(Ne), {
        park: r
    } = x.use(gl), {
        plans: o,
        refreshPlans: d,
        loaderElem: m
    } = x.use(Lt);
    x.useLayoutEffect(d, [d]);
    const p = new Set(c.map(S => S.primaryGuest.id)),
        g = new Map(o.filter(S => ia(S, "DAS", "IN_PARK")).map(S => {
            var D;
            return [((D = S.guests.find(w => p.has(w.id))) == null ? void 0 : D.id) ?? "", S]
        }));
    if (!m && c.length === 1) {
        const S = c[0],
            D = g.get(S.primaryGuest.id);
        return D ? u.jsx(aa, {
            booking: D
        }) : u.jsx(Wh, {
            park: r,
            party: S
        })
    }
    const v = c.filter(S => !(g != null && g.has(S.primaryGuest.id))),
        y = c.filter(S => g == null ? void 0 : g.has(S.primaryGuest.id));
    return u.jsx(Ge, {
        title: `DAS ${c.length===1?"Selection":"Parties"}`,
        theme: r.theme,
        children: m || (c.length > 0 ? u.jsxs(u.Fragment, {
            children: [v.length > 0 && u.jsxs(u.Fragment, {
                children: [u.jsx("h3", {
                    children: "Select Next Experience"
                }), u.jsx("ul", {
                    className: "mt-2",
                    children: v.map(S => u.jsxs("li", {
                        className: "flex items-center gap-x-3 pl-3 py-1",
                        children: [u.jsx("span", {
                            className: "flex-shrink-0 w-[48px] h-[48px] leading-[48px] rounded-full text-3xl font-bold text-center bg-gray-400 text-white",
                            "aria-hidden": "true",
                            children: S.primaryGuest.avatarImageUrl ? u.jsx("img", {
                                src: S.primaryGuest.avatarImageUrl,
                                alt: "",
                                width: "48",
                                height: "48",
                                className: "rounded-full"
                            }) : S.primaryGuest.name[0]
                        }), u.jsx("span", {
                            className: "flex-1 leading-tight",
                            children: S.primaryGuest.name
                        }), u.jsx(Ae, {
                            type: "small",
                            onClick: () => s(u.jsx(Wh, {
                                park: r,
                                party: S
                            })),
                            children: "Select"
                        })]
                    }, S.primaryGuest.id))
                })]
            }), y.length > 0 && u.jsxs(u.Fragment, {
                children: [u.jsx("h3", {
                    children: "Current Selection"
                }), u.jsx("ul", {
                    className: "mt-2",
                    children: y.map(S => {
                        const D = g.get(S.primaryGuest.id);
                        return u.jsxs("li", {
                            className: "flex items-center gap-x-3 pl-3 py-1",
                            children: [u.jsx("span", {
                                className: "flex-shrink-0 w-[48px] h-[48px] leading-[48px] rounded-full text-3xl font-bold text-center bg-gray-400 text-white",
                                "aria-hidden": "true",
                                children: S.primaryGuest.avatarImageUrl ? u.jsx("img", {
                                    src: S.primaryGuest.avatarImageUrl,
                                    alt: "",
                                    width: "48",
                                    height: "48",
                                    className: "rounded-full"
                                }) : S.primaryGuest.name[0]
                            }), u.jsxs("div", {
                                className: "flex-1",
                                children: [u.jsx("div", {
                                    children: S.primaryGuest.name
                                }), D && u.jsxs("div", {
                                    className: "text-gray-500 text-xs font-semibold uppercase",
                                    children: [D.name, " @", " ", u.jsx(Fe, {
                                        children: D.start.time
                                    })]
                                })]
                            }), u.jsx(Ae, {
                                type: "small",
                                onClick: () => {
                                    D && s(u.jsx(aa, {
                                        booking: D
                                    }))
                                },
                                children: "Details"
                            })]
                        }, S.primaryGuest.id)
                    })
                })]
            })]
        }) : u.jsx("div", {}))
    })
}

function bv({
    ref: c
}) {
    const {
        goTo: s
    } = x.use(Ne), {
        experiences: r,
        refreshExperiences: o,
        loaderElem: d
    } = x.use(oi), m = x.use(Nr);
    return u.jsxs(_r, {
        title: "Times Guide",
        buttons: u.jsxs(u.Fragment, {
            children: [m.length > 0 && u.jsx(Ae, {
                title: "Disability Access Service",
                onClick: () => s(u.jsx(xv, {
                    parties: m
                })),
                children: "DAS"
            }), u.jsx(Om, {}), u.jsx(mn, {
                name: "Times",
                onClick: o
            })]
        }),
        ref: c,
        children: [u.jsx(Sv, {
            experiences: r
        }), d]
    })
}
const Sv = x.memo(function({
    experiences: s
}) {
    const {
        goTo: r
    } = x.use(Ne), o = m => r(u.jsx(jv, {
        exp: m
    })), d = new Map;
    return s.filter(m => {
        var p;
        return m.standby.available || m.standby.unavailableReason === "TEMPORARILY_DOWN" || ((p = m.individual) == null ? void 0 : p.available) || m.virtualQueue
    }).sort((m, p) => m.land.sort - p.land.sort || m.name.localeCompare(p.name)).forEach(m => {
        var p, g;
        d.has(m.land) || d.set(m.land, {
            ATTRACTION: [],
            ENTERTAINMENT: [],
            CHARACTER: [],
            HOLIDAY: []
        }), (g = (p = d.get(m.land)) == null ? void 0 : p[m.type]) == null || g.push(m)
    }), u.jsxs(u.Fragment, {
        children: [
            [...d].map(([m, p]) => u.jsxs("div", {
                children: [u.jsx("h2", {
                    className: `pr-1 ${m.theme.text} text-sm font-semibold text-right uppercase`,
                    children: m.name
                }), u.jsxs("div", {
                    className: "rounded overflow-hidden",
                    children: [u.jsx(Ou, {
                        title: "Attractions",
                        land: m,
                        experiences: p.ATTRACTION,
                        onInfoClick: o
                    }), u.jsx(Ou, {
                        title: "Entertainment",
                        land: m,
                        experiences: p.ENTERTAINMENT,
                        onInfoClick: o
                    }), u.jsx(Ou, {
                        title: "Holiday Entertainment",
                        land: m,
                        experiences: p.HOLIDAY,
                        onInfoClick: o
                    }), u.jsx(Ou, {
                        title: "Characters",
                        land: m,
                        experiences: p.CHARACTER,
                        onInfoClick: o
                    })]
                })]
            }, m.name)), s.length > 0 && u.jsxs(u.Fragment, {
                children: [u.jsxs(Nm, {
                    children: [u.jsx(ta, {
                        sym: "\u2013",
                        def: "No posted wait/show time"
                    }), u.jsx(ta, {
                        sym: "\u274C",
                        def: "Temporarily down"
                    }), u.jsx(ta, {
                        sym: "VQ",
                        def: "Virtual queue"
                    })]
                }), u.jsxs("p", {
                    className: "text-sm text-center",
                    children: [u.jsx("span", {
                        className: `${x.use(Pe).text} font-bold`,
                        children: "Popular attractions"
                    }), " ", "are shown in bold"]
                })]
            })
        ]
    })
});

function Ou({
    title: c,
    land: s,
    experiences: r,
    onInfoClick: o
}) {
    return r.length === 0 ? null : u.jsxs("div", {
        className: `${s.theme.bg}`,
        "data-testid": `${s.name}-${c}`,
        children: [u.jsx("h3", {
            className: "mt-0 py-1 text-white text-xs font-semibold text-center uppercase",
            children: c
        }), u.jsx("table", {
            className: "w-full leading-snug",
            children: u.jsx("tbody", {
                children: r.map(d => {
                    var m;
                    return u.jsxs("tr", {
                        className: "group",
                        children: [u.jsx("td", {
                            className: `${d.standby.nextShowTime?"min-w-[5.625rem]":"min-w-[2.75rem]"} px-2 py-0.5 group-first:pt-1 group-last:pb-1 bg-white bg-opacity-80 font-bold text-center uppercase whitespace-nowrap`,
                            children: d.standby.nextShowTime ? (((m = d.additionalShowTimes) == null ? void 0 : m.length) ?? 0) > 0 ? u.jsx("button", {
                                onClick: () => o(d),
                                className: "underline",
                                children: u.jsx(Fe, {
                                    children: d.standby.nextShowTime
                                })
                            }) : u.jsx(Fe, {
                                children: d.standby.nextShowTime
                            }) : d.standby.available ? d.standby.waitTime ?? "\u2013" : d.virtualQueue && d.standby.unavailableReason === "NOT_STANDBY_ENABLED" ? "VQ" : "\u274C"
                        }), u.jsx("td", {
                            className: "w-full px-1 pl-2 py-0.5 group-first:pt-1 group-last:pb-1 bg-white bg-opacity-90",
                            children: u.jsxs("div", {
                                className: "flex items-center gap-x-2",
                                children: [u.jsx("div", {
                                    className: `flex-1 ${d.highlight?`font-bold ${s.theme.text}`:""}`,
                                    children: d.name
                                }), (d == null ? void 0 : d.individual) && u.jsxs("div", {
                                    className: `${s.theme.text} text-xs leading-tight font-semibold text-center uppercase`,
                                    children: [u.jsxs("div", {
                                        children: [u.jsx("abbr", {
                                            title: "Lightning Lane",
                                            children: "LL"
                                        }), ": " + d.individual.displayPrice]
                                    }), d.individual.nextAvailableTime && u.jsx("div", {
                                        children: u.jsx(Fe, {
                                            children: d.individual.nextAvailableTime
                                        })
                                    })]
                                })]
                            })
                        })]
                    }, d.id)
                })
            })
        })]
    })
}
const jv = ({
    exp: c
}) => {
    var s;
    return u.jsxs(Ge, {
        title: "Experience Info",
        children: [u.jsx("h2", {
            children: c.name
        }), u.jsx("div", {
            children: c.park.name
        }), u.jsxs("h3", {
            children: ["Upcoming ", c.type === "CHARACTER" ? "Appearances" : "Shows"]
        }), u.jsxs("ul", {
            className: "list-disc mt-2 pl-6",
            children: [!!c.standby.nextShowTime && u.jsx("li", {
                children: u.jsx(Fe, {
                    children: c.standby.nextShowTime
                })
            }), (s = c.additionalShowTimes) == null ? void 0 : s.map(r => u.jsx("li", {
                children: u.jsx(Fe, {
                    children: r
                })
            }, r))]
        })]
    })
};

function Ev(c) {
    const {
        plans: s,
        refreshPlans: r,
        loaderElem: o
    } = x.use(Lt);
    return u.jsxs(_r, {
        title: "Your Plans",
        buttons: u.jsx(mn, {
            name: "Plans",
            onClick: r
        }),
        theme: zu,
        ...c,
        children: [u.jsx(Tv, {
            plans: s
        }), o]
    })
}
const Tv = x.memo(function({
        plans: s
    }) {
        var m, p;
        const r = x.use(Pe),
            o = new Map,
            d = new Map;
        for (const g of s) {
            const v = pe(g.start);
            o.has(v) || o.set(v, []), g.type !== "APR" && ((m = o.get(v)) == null || m.push(g)), d.has(v) || d.set(v, new Set), (g.type !== "LL" || !g.choices) && g.park.icon && ((p = d.get(v)) == null || p.add(g.park))
        }
        return u.jsx("ul", {
            children: s.length > 0 ? [...o].map(([g, v]) => u.jsxs("li", {
                children: [u.jsx("div", {
                    className: "sticky top-0 -mx-3 pt-1 bg-white",
                    children: u.jsxs("div", {
                        className: "flex items-center",
                        children: [u.jsx("h2", {
                            className: `flex-1 mt-0 rounded-r-full px-3 py-1 ${r.bg} text-white text-sm uppercase`,
                            children: u.jsx(fi, {
                                children: g
                            })
                        }), u.jsx("ul", {
                            className: "px-3 pl-2 text-lg text-right",
                            children: [...d.get(g) ?? []].map(y => u.jsx("li", {
                                className: "inline ml-1 first:ml-0",
                                "aria-label": y.name,
                                children: y.icon
                            }, y.id))
                        })]
                    })
                }), v.length > 0 ? u.jsx("ul", {
                    className: v.length === 0 ? "mt-3" : "",
                    children: v.map(y => u.jsx("li", {
                        className: "py-3 first:border-0 border-t-4 border-gray-300",
                        children: u.jsx(zr, {
                            details: !0,
                            booking: y
                        })
                    }, y.bookingId))
                }) : u.jsx(hr, {})]
            }, g)) : u.jsx(hr, {})
        })
    }),
    Fh = 6e4,
    Ph = "bg1.tab",
    em = [{
        name: "LL",
        icon: u.jsx(dr, {}),
        component: uv
    }, {
        name: "Times",
        icon: u.jsx(S1, {}),
        component: bv
    }, {
        name: "Plans",
        icon: u.jsx(b1, {}),
        component: Ev
    }],
    Av = u.jsx(gv, {}),
    hn = Object.assign(x1({
        tabs: em,
        footer: Av
    }, ({
        tab: c
    }) => {
        const {
            isActiveScreen: s
        } = Ar(), r = x.use(vl), {
            park: o
        } = x.use(gl), {
            refreshExperiences: d
        } = x.use(oi), {
            refreshPlans: m
        } = x.use(Lt), p = x.useRef(null);
        return x.useEffect(() => {
            Oe.set(Ph, c.name)
        }, [c]), x.useEffect(() => Dr(() => {
            s && (d(Fh), m(Fh))
        }), [s, d, m]), x.useEffect(() => {
            var g;
            r.current && ((g = p.current) == null || g.scroll(0, 0))
        }, [r]), u.jsx(Pe, {
            value: o.theme,
            children: u.jsx(c.component, {
                ref: p
            })
        })
    }), {
        getSavedTabName() {
            const c = Oe.get(Ph);
            return em.find(s => s.name === c) ? c : "LL"
        }
    });

function Dv() {
    const [c] = x.useState(hn.getSavedTabName);
    return u.jsx(s1, {
        children: u.jsx(v1, {
            children: u.jsx(c1, {
                children: u.jsx(y1, {
                    children: u.jsx(h1, {
                        children: u.jsx(p1, {
                            children: u.jsx(pm, {
                                children: u.jsx(hn, {
                                    tabName: c
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
const Nv = 500,
    tm = 100,
    Mv = 5,
    Ov = 5 * 6e4;
let Cm = 0,
    _u = 0;
const lm = () => Date.now() + Cm;
class _v extends Error {
    constructor() {
        super(...arguments);
        le(this, "name", "SyncFailed")
    }
}
async function Rv() {
    if (Date.now() - _u < Ov) return;
    const c = _u;
    _u = Date.now();
    let s = tm + 1;
    try {
        const r = [];
        for (let o = 0; o < Mv; ++o) {
            try {
                const d = await wv();
                Number.isInteger(d) && r.push(d)
            } catch (d) {
                console.error(d);
                continue
            }
            if (!(r.length < 2)) {
                r.sort((d, m) => d - m);
                for (const [d, m] of r.slice(0, -1).entries()) {
                    const p = r[d + 1],
                        g = Math.abs(m - p);
                    g < s && (s = g, Cm = Math.round((m + p) / 2))
                }
                if (s <= tm) return
            }
        }
        throw new _v
    } catch (r) {
        throw _u = c, r
    }
}
async function wv() {
    const c = Date.now(),
        {
            headers: s
        } = await fetch("https://bg1.joelface.com/t"),
        r = Date.now();
    if (r - c > Nv) return NaN;
    const d = parseFloat(String(s == null ? void 0 : s.get("T"))) * 1e3;
    return Math.round(d - (c + r) / 2)
}
const zv = 50;

function Cv({
    onSync: c
}) {
    const [s, r] = x.useState(lm());
    return x.useEffect(() => {
        const o = setInterval(() => r(lm()), zv);
        return () => clearInterval(o)
    }, []), x.useEffect(() => {
        Rv().then(() => c(!0)).catch(() => c(!1))
    }, [c]), u.jsx("time", {
        children: new Be(s).time
    })
}

function Uv({
    time: c,
    label: s
}) {
    const [r, o] = x.useState(!0);
    return u.jsx("table", {
        className: "mt-4 mx-auto text-gray-500",
        children: u.jsxs("tbody", {
            children: [u.jsx(nm, {
                heading: s,
                time: u.jsx("time", {
                    children: c || "--:--:--"
                })
            }), u.jsx(nm, {
                heading: "Current time",
                time: u.jsxs(u.Fragment, {
                    children: [u.jsx(Cv, {
                        onSync: o
                    }), !r && u.jsxs("span", {
                        className: "text-sm font-sans font-semibold text-red-600",
                        children: [" ", "(unsynced)"]
                    })]
                })
            })]
        })
    })
}

function nm({
    heading: c,
    time: s
}) {
    return u.jsxs("tr", {
        children: [u.jsxs("th", {
            scope: "row",
            className: "pr-3 text-right text-xs font-semibold uppercase",
            children: [c, ":"]
        }), u.jsxs("td", {
            className: "text-xl font-mono leading-tight",
            children: ["\uFEFF", s]
        })]
    })
}

function Cr({
    queue: c,
    title: s,
    children: r
}) {
    var o;
    return u.jsxs(Ge, {
        title: s,
        theme: (o = c.park) == null ? void 0 : o.theme,
        children: [u.jsx("h2", {
            children: c.name
        }), r]
    })
}
const Lv = 5e3;

function Bv({
    queue: c,
    guests: s,
    result: r
}) {
    const {
        boardingGroup: o,
        conflicts: d
    } = r, m = o !== null, p = s.filter(D => !(D.id in d)), g = s.filter(D => D.id in d), {
        goBack: v
    } = x.use(Ne), [y, S] = x.useState(!1);
    return x.useEffect(() => {
        m && setTimeout(() => S(!0), Lv)
    }, [m]), u.jsx(Cr, {
        queue: c,
        title: "Boarding Group",
        children: m ? u.jsxs(u.Fragment, {
            children: [u.jsx("h3", {
                children: "Congratulations! \u{1F389}"
            }), u.jsx("p", {
                children: "You joined the virtual queue!"
            }), u.jsxs("p", {
                className: "text-lg font-semibold",
                children: ["Boarding Group: ", o]
            }), u.jsx(at, {
                guests: p
            }), Object.keys(d).length > 0 && u.jsxs(u.Fragment, {
                children: [u.jsx("p", {
                    className: "font-semibold",
                    children: "These guests could not join:"
                }), u.jsx(at, {
                    guests: g,
                    conflicts: d
                })]
            }), u.jsx("p", {
                children: "Refer to the My Disney Experience app for return time and other information."
            }), y && u.jsx(jt, {
                onClick: () => v({
                    screen: Um
                }),
                children: "Done"
            })]
        }) : u.jsxs(u.Fragment, {
            children: [u.jsx("h3", {
                children: "Sorry!"
            }), u.jsx("p", {
                children: "A boarding group could not be obtained. Go back and try again."
            }), u.jsx(at, {
                guests: g,
                conflicts: d
            })]
        })
    })
}

function Gv({
    queue: c,
    guests: s
}) {
    const {
        goTo: r
    } = x.use(Ne), o = x.use(Yt), {
        vq: d
    } = x.use(De), {
        loadData: m,
        loaderElem: p
    } = Et();
    async function g() {
        await m(async v => {
            const y = await d.getQueue(c);
            if (!y.isAcceptingJoins) return v(y.isAcceptingPartyCreation ? "Queue not open yet" : "No boarding groups available");
            const S = await d.joinQueue(c, s);
            r(u.jsx(Bv, {
                queue: c,
                guests: s,
                result: S
            }), {
                replace: !0
            }), S.boardingGroup !== null && Uu(o, "V")
        }, {
            minLoadTime: 999
        })
    }
    return u.jsxs(Cr, {
        queue: c,
        title: "Virtual Queue",
        children: [c.isAcceptingJoins ? u.jsx("p", {
            children: "The virtual queue is open. Join now!"
        }) : c.nextScheduledOpenTime ? u.jsxs(u.Fragment, {
            children: [u.jsx(Uv, {
                time: c.nextScheduledOpenTime,
                label: "Next queue opening"
            }), u.jsxs("p", {
                children: ["Tap the ", u.jsx("b", {
                    children: "Join Virtual Queue"
                }), " button when the clock reads", " ", u.jsx("time", {
                    className: "font-semibold",
                    children: c.nextScheduledOpenTime
                }), ". The queue can fill up almost instantly, so be quick!"]
            })]
        }) : null, u.jsx("h3", {
            children: "Your Party"
        }), u.jsx(at, {
            guests: s
        }), u.jsx(jt, {
            onClick: g,
            children: "Join Virtual Queue"
        }), p]
    })
}

function Hv({
    queue: c
}) {
    const {
        goTo: s
    } = x.use(Ne), {
        vq: r
    } = x.use(De), {
        loadData: o,
        loaderElem: d
    } = Et(), [m, p] = x.useState([]), [g, v] = x.useState(new Set);
    x.useEffect(() => {
        o(async () => {
            const S = await r.getLinkedGuests(c);
            p(S), v(new Set(S.filter(D => D.preselected)))
        })
    }, [c, r, o]);

    function y(S) {
        g[g.has(S) ? "delete" : "add"](S), v(new Set(g))
    }
    return u.jsxs(Cr, {
        queue: c,
        title: "Choose Your Party",
        children: [u.jsxs("p", {
            children: ["Select everyone in your party who would like to experience this attraction, and tap the ", u.jsx("b", {
                children: "Confirm Party"
            }), " button."]
        }), u.jsx("h3", {
            children: "Your Party"
        }), m.length > 0 ? u.jsx(at, {
            guests: m,
            selectable: {
                isSelected: S => g.has(S),
                onToggle: y,
                limit: c.maxPartySize
            }
        }) : u.jsx("p", {
            children: "No guests available"
        }), u.jsx(jt, {
            disabled: g.size === 0,
            onClick: () => s(u.jsx(Gv, {
                queue: c,
                guests: [...g]
            })),
            children: "Confirm Party"
        }), d]
    })
}
const am = c => c.categoryContentId === "attraction",
    Ru = c => c.isAcceptingPartyCreation || c.isAcceptingJoins;

function Um() {
    const {
        vq: c
    } = x.use(De), {
        goTo: s
    } = x.use(Ne), r = x.use(Pe), {
        loadData: o,
        loaderElem: d
    } = Et(), [m, p] = x.useState(), g = x.useCallback(() => {
        o(async () => {
            p((await c.getQueues()).sort((v, y) => +Ru(y) - +Ru(v) || +am(y) - +am(v)))
        })
    }, [c, o]);
    return x.useEffect(() => (g(), Dr(g)), [g]), u.jsxs(Ge, {
        title: "Virtual Queues",
        buttons: u.jsx(mn, {
            name: "Queues",
            onClick: g
        }),
        footer: u.jsx("div", {
            className: "p-2 text-right",
            children: u.jsx(Ae, {
                className: `bg-opacity-90 bg-white ${r.text}`,
                onClick: () => qt.deleteData(),
                children: "Log Out"
            })
        }),
        children: [m ? m.length > 0 ? u.jsx("ul", {
            className: "mt-1",
            children: m.map(v => u.jsxs("li", {
                className: "py-3 first:border-0 border-t-4 border-gray-300",
                children: [u.jsx("h2", {
                    className: "mt-0",
                    children: v.name
                }), u.jsxs("div", {
                    className: "flex items-center mt-2",
                    children: [u.jsx("div", {
                        className: "flex-1",
                        children: v.isAcceptingJoins ? u.jsx("span", {
                            children: "Available now"
                        }) : v.nextScheduledOpenTime ? u.jsxs(u.Fragment, {
                            children: ["Next opening:", " ", u.jsx(Fe, {
                                className: "font-semibold",
                                children: v.nextScheduledOpenTime
                            })]
                        }) : "No more openings today"
                    }), u.jsx("div", {
                        className: "pl-3",
                        children: u.jsx(Ae, {
                            disabled: !Ru(v),
                            onClick: () => s(u.jsx(Hv, {
                                queue: v
                            })),
                            children: Ru(v) ? "Join Queue" : "Closed"
                        })
                    })]
                })]
            }, v.id))
        }) : !d && u.jsx("p", {
            className: "text-gray-500 font-semibold text-center uppercase",
            children: "No virtual queues found"
        }) : null, d]
    })
}

function kv() {
    return u.jsx(pm, {
        children: u.jsx(Um, {})
    })
}
const qv = 0;

function Yv() {
    document.body.addEventListener("click", () => null)
}

function Qv() {
    const [c, s] = x.useState(), [r, o] = x.useState(u.jsx("div", {})), d = e1(), m = l1(qv), [p, g] = x.useState(() => {
        try {
            qt.getData()
        } catch (v) {
            if (!(v instanceof um)) throw v;
            return !0
        }
        return !1
    });
    return x.useEffect(() => {
        Yv(), qt.onUnauthorized = () => g(!0), (async () => {
            for (const [v, y] of [
                    [jr, Dv],
                    [Er, kv]
                ]) try {
                const S = await wg(v.originToResortId(origin));
                s(S), Be.setTimeZone({
                    WDW: "America/New_York",
                    DLR: "America/Los_Angeles"
                } [S.id]), o(u.jsx(Yt, {
                    value: S,
                    children: u.jsx(De, {
                        value: Jg(S),
                        children: u.jsx(y, {})
                    })
                }));
                return
            } catch (S) {
                if (!(S instanceof sm)) throw S
            }
            location.assign("https://joelface.github.io/bg1/start.html")
        })()
    }, []), x.useEffect(() => {
        function v() {
            if (!p) try {
                qt.getData(), g(!1)
            } catch {
                g(!0)
            }
        }
        return v(), Dr(v)
    }, [p]), d || m || p && c && u.jsx(i1, {
        resort: c,
        onLogin: v => {
            qt.setData(v), g(!1)
        }
    }) || r
}
Lm();

function Lm() {
    if (!document.body) {
        setTimeout(Lm, 100);
        return
    }
    document.close(), Xv(), Vv(), Zv().render(u.jsx(x.StrictMode, {
        children: u.jsx(Qv, {})
    }))
}

function Xv() {
    const c = document.createElement("meta");
    c.name = "viewport", c.content = "width=device-width, initial-scale=1, maximum-scale=1", document.head.appendChild(c)
}

function Vv() {
    const c = document.createElement("link");
    c.rel = "icon", c.href = "data:,", document.head.appendChild(c)
}

function Zv() {
    return gg.createRoot(document.body.appendChild(document.createElement("div")))
}