var Ew = Object.defineProperty;
var Ah = Object.getOwnPropertySymbols;
var Tw = Object.prototype.hasOwnProperty,
  Pw = Object.prototype.propertyIsEnumerable;
var Mh = (e, t, r) =>
    t in e
      ? Ew(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ju = (e, t) => {
    for (var r in t || (t = {})) Tw.call(t, r) && Mh(e, r, t[r]);
    if (Ah) for (var r of Ah(t)) Pw.call(t, r) && Mh(e, r, t[r]);
    return e;
  };
function Rw(e, t) {
  return (
    t.forEach(function (r) {
      r &&
        typeof r != 'string' &&
        !Array.isArray(r) &&
        Object.keys(r).forEach(function (n) {
          if (n !== 'default' && !(n in e)) {
            var i = Object.getOwnPropertyDescriptor(r, n);
            Object.defineProperty(
              e,
              n,
              i.get
                ? i
                : {
                    enumerable: !0,
                    get: function () {
                      return r[n];
                    },
                  }
            );
          }
        });
    }),
    Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
    )
  );
}
const Aw = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o);
  }
};
Aw();
var ri =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  y = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ga = Symbol.for('react.element'),
  Mw = Symbol.for('react.portal'),
  $w = Symbol.for('react.fragment'),
  Ow = Symbol.for('react.strict_mode'),
  Iw = Symbol.for('react.profiler'),
  Lw = Symbol.for('react.provider'),
  zw = Symbol.for('react.context'),
  Nw = Symbol.for('react.forward_ref'),
  Fw = Symbol.for('react.suspense'),
  Dw = Symbol.for('react.memo'),
  Bw = Symbol.for('react.lazy'),
  $h = Symbol.iterator;
function Vw(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = ($h && e[$h]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Z0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  q0 = Object.assign,
  J0 = {};
function ji(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = J0),
    (this.updater = r || Z0);
}
ji.prototype.isReactComponent = {};
ji.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
ji.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function eg() {}
eg.prototype = ji.prototype;
function Sd(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = J0),
    (this.updater = r || Z0);
}
var wd = (Sd.prototype = new eg());
wd.constructor = Sd;
q0(wd, ji.prototype);
wd.isPureReactComponent = !0;
var Oh = Array.isArray,
  tg = Object.prototype.hasOwnProperty,
  kd = { current: null },
  rg = { key: !0, ref: !0, __self: !0, __source: !0 };
function ng(e, t, r) {
  var n,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      tg.call(t, n) && !rg.hasOwnProperty(n) && (i[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = r;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) i[n] === void 0 && (i[n] = l[n]);
  return {
    $$typeof: ga,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: kd.current,
  };
}
function jw(e, t) {
  return {
    $$typeof: ga,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Cd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ga;
}
function Ww(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Ih = /\/+/g;
function Wu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Ww('' + e.key)
    : t.toString(36);
}
function _l(e, t, r, n, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ga:
          case Mw:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = n === '' ? '.' + Wu(a, 0) : n),
      Oh(i)
        ? ((r = ''),
          e != null && (r = e.replace(Ih, '$&/') + '/'),
          _l(i, t, r, '', function (u) {
            return u;
          }))
        : i != null &&
          (Cd(i) &&
            (i = jw(
              i,
              r +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Ih, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (n = n === '' ? '.' : n + ':'), Oh(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = n + Wu(o, l);
      a += _l(o, t, r, s, i);
    }
  else if (((s = Vw(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = n + Wu(o, l++)), (a += _l(o, t, r, s, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function Va(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    _l(e, n, '', '', function (o) {
      return t.call(r, o, i++);
    }),
    n
  );
}
function Hw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ut = { current: null },
  El = { transition: null },
  Uw = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: El,
    ReactCurrentOwner: kd,
  };
te.Children = {
  map: Va,
  forEach: function (e, t, r) {
    Va(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Va(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Va(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Cd(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
te.Component = ji;
te.Fragment = $w;
te.Profiler = Iw;
te.PureComponent = Sd;
te.StrictMode = Ow;
te.Suspense = Fw;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uw;
te.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var n = q0({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = kd.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      tg.call(t, s) &&
        !rg.hasOwnProperty(s) &&
        (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    n.children = l;
  }
  return { $$typeof: ga, type: e.type, key: i, ref: o, props: n, _owner: a };
};
te.createContext = function (e) {
  return (
    (e = {
      $$typeof: zw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lw, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = ng;
te.createFactory = function (e) {
  var t = ng.bind(null, e);
  return (t.type = e), t;
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: Nw, render: e };
};
te.isValidElement = Cd;
te.lazy = function (e) {
  return { $$typeof: Bw, _payload: { _status: -1, _result: e }, _init: Hw };
};
te.memo = function (e, t) {
  return { $$typeof: Dw, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function (e) {
  var t = El.transition;
  El.transition = {};
  try {
    e();
  } finally {
    El.transition = t;
  }
};
te.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
te.useCallback = function (e, t) {
  return ut.current.useCallback(e, t);
};
te.useContext = function (e) {
  return ut.current.useContext(e);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (e) {
  return ut.current.useDeferredValue(e);
};
te.useEffect = function (e, t) {
  return ut.current.useEffect(e, t);
};
te.useId = function () {
  return ut.current.useId();
};
te.useImperativeHandle = function (e, t, r) {
  return ut.current.useImperativeHandle(e, t, r);
};
te.useInsertionEffect = function (e, t) {
  return ut.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function (e, t) {
  return ut.current.useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return ut.current.useMemo(e, t);
};
te.useReducer = function (e, t, r) {
  return ut.current.useReducer(e, t, r);
};
te.useRef = function (e) {
  return ut.current.useRef(e);
};
te.useState = function (e) {
  return ut.current.useState(e);
};
te.useSyncExternalStore = function (e, t, r) {
  return ut.current.useSyncExternalStore(e, t, r);
};
te.useTransition = function () {
  return ut.current.useTransition();
};
te.version = '18.1.0';
y.exports = te;
var pr = y.exports,
  Mi = Rw({ __proto__: null, default: pr }, [y.exports]),
  Ns = { exports: {} },
  Rt = {},
  ig = { exports: {} },
  og = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, z) {
    var W = $.length;
    $.push(z);
    e: for (; 0 < W; ) {
      var Z = (W - 1) >>> 1,
        Q = $[Z];
      if (0 < i(Q, z)) ($[Z] = z), ($[W] = Q), (W = Z);
      else break e;
    }
  }
  function r($) {
    return $.length === 0 ? null : $[0];
  }
  function n($) {
    if ($.length === 0) return null;
    var z = $[0],
      W = $.pop();
    if (W !== z) {
      $[0] = W;
      e: for (var Z = 0, Q = $.length, j = Q >>> 1; Z < j; ) {
        var D = 2 * (Z + 1) - 1,
          G = $[D],
          re = D + 1,
          Be = $[re];
        if (0 > i(G, W))
          re < Q && 0 > i(Be, G)
            ? (($[Z] = Be), ($[re] = W), (Z = re))
            : (($[Z] = G), ($[D] = W), (Z = D));
        else if (re < Q && 0 > i(Be, W)) ($[Z] = Be), ($[re] = W), (Z = re);
        else break e;
      }
    }
    return z;
  }
  function i($, z) {
    var W = $.sortIndex - z.sortIndex;
    return W !== 0 ? W : $.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    h = !1,
    x = !1,
    w = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    v = typeof setImmediate != 'undefined' ? setImmediate : null;
  typeof navigator != 'undefined' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g($) {
    for (var z = r(u); z !== null; ) {
      if (z.callback === null) n(u);
      else if (z.startTime <= $)
        n(u), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = r(u);
    }
  }
  function S($) {
    if (((x = !1), g($), !h))
      if (r(s) !== null) (h = !0), X(_);
      else {
        var z = r(u);
        z !== null && V(S, z.startTime - $);
      }
  }
  function _($, z) {
    (h = !1), x && ((x = !1), m(E), (E = -1)), (p = !0);
    var W = d;
    try {
      for (
        g(z), f = r(s);
        f !== null && (!(f.expirationTime > z) || ($ && !K()));

      ) {
        var Z = f.callback;
        if (typeof Z == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var Q = Z(f.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Q == 'function' ? (f.callback = Q) : f === r(s) && n(s),
            g(z);
        } else n(s);
        f = r(s);
      }
      if (f !== null) var j = !0;
      else {
        var D = r(u);
        D !== null && V(S, D.startTime - z), (j = !1);
      }
      return j;
    } finally {
      (f = null), (d = W), (p = !1);
    }
  }
  var P = !1,
    T = null,
    E = -1,
    R = 5,
    M = -1;
  function K() {
    return !(e.unstable_now() - M < R);
  }
  function J() {
    if (T !== null) {
      var $ = e.unstable_now();
      M = $;
      var z = !0;
      try {
        z = T(!0, $);
      } finally {
        z ? B() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var B;
  if (typeof v == 'function')
    B = function () {
      v(J);
    };
  else if (typeof MessageChannel != 'undefined') {
    var N = new MessageChannel(),
      I = N.port2;
    (N.port1.onmessage = J),
      (B = function () {
        I.postMessage(null);
      });
  } else
    B = function () {
      w(J, 0);
    };
  function X($) {
    (T = $), P || ((P = !0), B());
  }
  function V($, z) {
    E = w(function () {
      $(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || p || ((h = !0), X(_));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (R = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function ($) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = d;
      }
      var W = d;
      d = z;
      try {
        return $();
      } finally {
        d = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, z) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var W = d;
      d = $;
      try {
        return z();
      } finally {
        d = W;
      }
    }),
    (e.unstable_scheduleCallback = function ($, z, W) {
      var Z = e.unstable_now();
      switch (
        (typeof W == 'object' && W !== null
          ? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? Z + W : Z))
          : (W = Z),
        $)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = W + Q),
        ($ = {
          id: c++,
          callback: z,
          priorityLevel: $,
          startTime: W,
          expirationTime: Q,
          sortIndex: -1,
        }),
        W > Z
          ? (($.sortIndex = W),
            t(u, $),
            r(s) === null &&
              $ === r(u) &&
              (x ? (m(E), (E = -1)) : (x = !0), V(S, W - Z)))
          : (($.sortIndex = Q), t(s, $), h || p || ((h = !0), X(_))),
        $
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function ($) {
      var z = d;
      return function () {
        var W = d;
        d = z;
        try {
          return $.apply(this, arguments);
        } finally {
          d = W;
        }
      };
    });
})(og);
ig.exports = og;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ag = y.exports,
  Pt = ig.exports;
function L(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var lg = new Set(),
  Fo = {};
function Yn(e, t) {
  $i(e, t), $i(e + 'Capture', t);
}
function $i(e, t) {
  for (Fo[e] = t, e = 0; e < t.length; e++) lg.add(t[e]);
}
var Or = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  jc = Object.prototype.hasOwnProperty,
  Yw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Lh = {},
  zh = {};
function Gw(e) {
  return jc.call(zh, e)
    ? !0
    : jc.call(Lh, e)
    ? !1
    : Yw.test(e)
    ? (zh[e] = !0)
    : ((Lh[e] = !0), !1);
}
function Kw(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Xw(e, t, r, n) {
  if (t === null || typeof t == 'undefined' || Kw(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ct(e, t, r, n, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var Je = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Je[e] = new ct(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Je[t] = new ct(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Je[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Je[e] = new ct(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Je[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Je[e] = new ct(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Je[e] = new ct(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Je[e] = new ct(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Je[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _d = /[\-:]([a-z])/g;
function Ed(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_d, Ed);
    Je[t] = new ct(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_d, Ed);
    Je[t] = new ct(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(_d, Ed);
  Je[t] = new ct(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Je[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Je.xlinkHref = new ct(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Je[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Td(e, t, r, n) {
  var i = Je.hasOwnProperty(t) ? Je[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Xw(t, r, i, n) && (r = null),
    n || i === null
      ? Gw(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : '') : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? '' : '' + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Dr = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ja = Symbol.for('react.element'),
  ni = Symbol.for('react.portal'),
  ii = Symbol.for('react.fragment'),
  Pd = Symbol.for('react.strict_mode'),
  Wc = Symbol.for('react.profiler'),
  sg = Symbol.for('react.provider'),
  ug = Symbol.for('react.context'),
  Rd = Symbol.for('react.forward_ref'),
  Hc = Symbol.for('react.suspense'),
  Uc = Symbol.for('react.suspense_list'),
  Ad = Symbol.for('react.memo'),
  Yr = Symbol.for('react.lazy'),
  cg = Symbol.for('react.offscreen'),
  Nh = Symbol.iterator;
function qi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Nh && e[Nh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Re = Object.assign,
  Hu;
function co(e) {
  if (Hu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Hu = (t && t[1]) || '';
    }
  return (
    `
` +
    Hu +
    e
  );
}
var Uu = !1;
function Yu(e, t) {
  if (!e || Uu) return '';
  Uu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = n.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var s =
                  `
` + i[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Uu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : '') ? co(e) : '';
}
function Qw(e) {
  switch (e.tag) {
    case 5:
      return co(e.type);
    case 16:
      return co('Lazy');
    case 13:
      return co('Suspense');
    case 19:
      return co('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Yu(e.type, !1)), e;
    case 11:
      return (e = Yu(e.type.render, !1)), e;
    case 1:
      return (e = Yu(e.type, !0)), e;
    default:
      return '';
  }
}
function Yc(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ii:
      return 'Fragment';
    case ni:
      return 'Portal';
    case Wc:
      return 'Profiler';
    case Pd:
      return 'StrictMode';
    case Hc:
      return 'Suspense';
    case Uc:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ug:
        return (e.displayName || 'Context') + '.Consumer';
      case sg:
        return (e._context.displayName || 'Context') + '.Provider';
      case Rd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ad:
        return (
          (t = e.displayName || null), t !== null ? t : Yc(e.type) || 'Memo'
        );
      case Yr:
        (t = e._payload), (e = e._init);
        try {
          return Yc(e(t));
        } catch {}
    }
  return null;
}
function Zw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Yc(t);
    case 8:
      return t === Pd ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function fg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function qw(e) {
  var t = fg(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r != 'undefined' &&
    typeof r.get == 'function' &&
    typeof r.set == 'function'
  ) {
    var i = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (n = '' + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Wa(e) {
  e._valueTracker || (e._valueTracker = qw(e));
}
function dg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = '';
  return (
    e && (n = fg(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Ul(e) {
  if (
    ((e = e || (typeof document != 'undefined' ? document : void 0)),
    typeof e == 'undefined')
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gc(e, t) {
  var r = t.checked;
  return Re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function Fh(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = fn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function pg(e, t) {
  (t = t.checked), t != null && Td(e, 'checked', t, !1);
}
function Kc(e, t) {
  pg(e, t);
  var r = fn(t.value),
    n = t.type;
  if (r != null)
    n === 'number'
      ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r);
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Xc(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && Xc(e, t.type, fn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Dh(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type;
    if (
      !(
        (n !== 'submit' && n !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== '' && (e.name = r);
}
function Xc(e, t, r) {
  (t !== 'number' || Ul(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
}
var fo = Array.isArray;
function yi(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = '' + fn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Bh(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(L(92));
      if (fo(r)) {
        if (1 < r.length) throw Error(L(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ''), (r = t);
  }
  e._wrapperState = { initialValue: fn(r) };
}
function hg(e, t) {
  var r = fn(t.value),
    n = fn(t.defaultValue);
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n);
}
function Vh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function vg(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Zc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? vg(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Ha,
  mg = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Ha = Ha || document.createElement('div'),
          Ha.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ha.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Do(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mo = {
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
    strokeWidth: !0,
  },
  Jw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(mo).forEach(function (e) {
  Jw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mo[t] = mo[e]);
  });
});
function gg(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (mo.hasOwnProperty(e) && mo[e])
    ? ('' + t).trim()
    : t + 'px';
}
function yg(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        i = gg(r, t[r], n);
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var e2 = Re(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function qc(e, t) {
  if (t) {
    if (e2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(L(62));
  }
}
function Jc(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ef = null;
function Md(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var tf = null,
  xi = null,
  bi = null;
function jh(e) {
  if ((e = ba(e))) {
    if (typeof tf != 'function') throw Error(L(280));
    var t = e.stateNode;
    t && ((t = js(t)), tf(e.stateNode, e.type, t));
  }
}
function xg(e) {
  xi ? (bi ? bi.push(e) : (bi = [e])) : (xi = e);
}
function bg() {
  if (xi) {
    var e = xi,
      t = bi;
    if (((bi = xi = null), jh(e), t)) for (e = 0; e < t.length; e++) jh(t[e]);
  }
}
function Sg(e, t) {
  return e(t);
}
function wg() {}
var Gu = !1;
function kg(e, t, r) {
  if (Gu) return e(t, r);
  Gu = !0;
  try {
    return Sg(e, t, r);
  } finally {
    (Gu = !1), (xi !== null || bi !== null) && (wg(), bg());
  }
}
function Bo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = js(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != 'function') throw Error(L(231, t, typeof r));
  return r;
}
var rf = !1;
if (Or)
  try {
    var Ji = {};
    Object.defineProperty(Ji, 'passive', {
      get: function () {
        rf = !0;
      },
    }),
      window.addEventListener('test', Ji, Ji),
      window.removeEventListener('test', Ji, Ji);
  } catch {
    rf = !1;
  }
function t2(e, t, r, n, i, o, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var go = !1,
  Yl = null,
  Gl = !1,
  nf = null,
  r2 = {
    onError: function (e) {
      (go = !0), (Yl = e);
    },
  };
function n2(e, t, r, n, i, o, a, l, s) {
  (go = !1), (Yl = null), t2.apply(r2, arguments);
}
function i2(e, t, r, n, i, o, a, l, s) {
  if ((n2.apply(this, arguments), go)) {
    if (go) {
      var u = Yl;
      (go = !1), (Yl = null);
    } else throw Error(L(198));
    Gl || ((Gl = !0), (nf = u));
  }
}
function Gn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Cg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wh(e) {
  if (Gn(e) !== e) throw Error(L(188));
}
function o2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return Wh(i), e;
        if (o === n) return Wh(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (r.return !== n.return) (r = i), (n = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        if (l === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          if (l === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(L(189));
      }
    }
    if (r.alternate !== n) throw Error(L(190));
  }
  if (r.tag !== 3) throw Error(L(188));
  return r.stateNode.current === r ? e : t;
}
function _g(e) {
  return (e = o2(e)), e !== null ? Eg(e) : null;
}
function Eg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Eg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tg = Pt.unstable_scheduleCallback,
  Hh = Pt.unstable_cancelCallback,
  a2 = Pt.unstable_shouldYield,
  l2 = Pt.unstable_requestPaint,
  Ie = Pt.unstable_now,
  s2 = Pt.unstable_getCurrentPriorityLevel,
  $d = Pt.unstable_ImmediatePriority,
  Pg = Pt.unstable_UserBlockingPriority,
  Kl = Pt.unstable_NormalPriority,
  u2 = Pt.unstable_LowPriority,
  Rg = Pt.unstable_IdlePriority,
  Fs = null,
  hr = null;
function c2(e) {
  if (hr && typeof hr.onCommitFiberRoot == 'function')
    try {
      hr.onCommitFiberRoot(Fs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var er = Math.clz32 ? Math.clz32 : p2,
  f2 = Math.log,
  d2 = Math.LN2;
function p2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((f2(e) / d2) | 0)) | 0;
}
var Ua = 64,
  Ya = 4194304;
function po(e) {
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
      return e;
  }
}
function Xl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (n = po(l)) : ((o &= a), o !== 0 && (n = po(o)));
  } else (a = r & ~i), a !== 0 ? (n = po(a)) : o !== 0 && (n = po(o));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    (t & i) === 0 &&
    ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - er(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function h2(e, t) {
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
      return -1;
  }
}
function v2(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - er(o),
      l = 1 << a,
      s = i[a];
    s === -1
      ? ((l & r) === 0 || (l & n) !== 0) && (i[a] = h2(l, t))
      : s <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function of(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ag() {
  var e = Ua;
  return (Ua <<= 1), (Ua & 4194240) === 0 && (Ua = 64), e;
}
function Ku(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ya(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - er(t)),
    (e[t] = r);
}
function m2(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - er(r),
      o = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
  }
}
function Od(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - er(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var he = 0;
function Mg(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var $g,
  Id,
  Og,
  Ig,
  Lg,
  af = !1,
  Ga = [],
  tn = null,
  rn = null,
  nn = null,
  Vo = new Map(),
  jo = new Map(),
  Kr = [],
  g2 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Uh(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      rn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      nn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Vo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      jo.delete(t.pointerId);
  }
}
function eo(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ba(t)), t !== null && Id(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function y2(e, t, r, n, i) {
  switch (t) {
    case 'focusin':
      return (tn = eo(tn, e, t, r, n, i)), !0;
    case 'dragenter':
      return (rn = eo(rn, e, t, r, n, i)), !0;
    case 'mouseover':
      return (nn = eo(nn, e, t, r, n, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return Vo.set(o, eo(Vo.get(o) || null, e, t, r, n, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), jo.set(o, eo(jo.get(o) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function zg(e) {
  var t = Rn(e.target);
  if (t !== null) {
    var r = Gn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Cg(r)), t !== null)) {
          (e.blockedOn = t),
            Lg(e.priority, function () {
              Og(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = lf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (ef = n), r.target.dispatchEvent(n), (ef = null);
    } else return (t = ba(r)), t !== null && Id(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Yh(e, t, r) {
  Tl(e) && r.delete(t);
}
function x2() {
  (af = !1),
    tn !== null && Tl(tn) && (tn = null),
    rn !== null && Tl(rn) && (rn = null),
    nn !== null && Tl(nn) && (nn = null),
    Vo.forEach(Yh),
    jo.forEach(Yh);
}
function to(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    af ||
      ((af = !0),
      Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, x2)));
}
function Wo(e) {
  function t(i) {
    return to(i, e);
  }
  if (0 < Ga.length) {
    to(Ga[0], e);
    for (var r = 1; r < Ga.length; r++) {
      var n = Ga[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    tn !== null && to(tn, e),
      rn !== null && to(rn, e),
      nn !== null && to(nn, e),
      Vo.forEach(t),
      jo.forEach(t),
      r = 0;
    r < Kr.length;
    r++
  )
    (n = Kr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Kr.length && ((r = Kr[0]), r.blockedOn === null); )
    zg(r), r.blockedOn === null && Kr.shift();
}
var Si = Dr.ReactCurrentBatchConfig,
  Ql = !0;
function b2(e, t, r, n) {
  var i = he,
    o = Si.transition;
  Si.transition = null;
  try {
    (he = 1), Ld(e, t, r, n);
  } finally {
    (he = i), (Si.transition = o);
  }
}
function S2(e, t, r, n) {
  var i = he,
    o = Si.transition;
  Si.transition = null;
  try {
    (he = 4), Ld(e, t, r, n);
  } finally {
    (he = i), (Si.transition = o);
  }
}
function Ld(e, t, r, n) {
  if (Ql) {
    var i = lf(e, t, r, n);
    if (i === null) ic(e, t, n, Zl, r), Uh(e, n);
    else if (y2(i, e, t, r, n)) n.stopPropagation();
    else if ((Uh(e, n), t & 4 && -1 < g2.indexOf(e))) {
      for (; i !== null; ) {
        var o = ba(i);
        if (
          (o !== null && $g(o),
          (o = lf(e, t, r, n)),
          o === null && ic(e, t, n, Zl, r),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else ic(e, t, n, null, r);
  }
}
var Zl = null;
function lf(e, t, r, n) {
  if (((Zl = null), (e = Md(n)), (e = Rn(e)), e !== null))
    if (((t = Gn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Cg(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zl = e), null;
}
function Ng(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (s2()) {
        case $d:
          return 1;
        case Pg:
          return 4;
        case Kl:
        case u2:
          return 16;
        case Rg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qr = null,
  zd = null,
  Pl = null;
function Fg() {
  if (Pl) return Pl;
  var e,
    t = zd,
    r = t.length,
    n,
    i = 'value' in Qr ? Qr.value : Qr.textContent,
    o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
  return (Pl = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Rl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ka() {
  return !0;
}
function Gh() {
  return !1;
}
function At(e) {
  function t(r, n, i, o, a) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((r = e[l]), (this[l] = r ? r(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ka
        : Gh),
      (this.isPropagationStopped = Gh),
      this
    );
  }
  return (
    Re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = Ka));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ka));
      },
      persist: function () {},
      isPersistent: Ka,
    }),
    t
  );
}
var Wi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nd = At(Wi),
  xa = Re({}, Wi, { view: 0, detail: 0 }),
  w2 = At(xa),
  Xu,
  Qu,
  ro,
  Ds = Re({}, xa, {
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
    getModifierState: Fd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ro &&
            (ro && e.type === 'mousemove'
              ? ((Xu = e.screenX - ro.screenX), (Qu = e.screenY - ro.screenY))
              : (Qu = Xu = 0),
            (ro = e)),
          Xu);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Qu;
    },
  }),
  Kh = At(Ds),
  k2 = Re({}, Ds, { dataTransfer: 0 }),
  C2 = At(k2),
  _2 = Re({}, xa, { relatedTarget: 0 }),
  Zu = At(_2),
  E2 = Re({}, Wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  T2 = At(E2),
  P2 = Re({}, Wi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  R2 = At(P2),
  A2 = Re({}, Wi, { data: 0 }),
  Xh = At(A2),
  M2 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  $2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  O2 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function I2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = O2[e]) ? !!t[e] : !1;
}
function Fd() {
  return I2;
}
var L2 = Re({}, xa, {
    key: function (e) {
      if (e.key) {
        var t = M2[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Rl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? $2[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fd,
    charCode: function (e) {
      return e.type === 'keypress' ? Rl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Rl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  z2 = At(L2),
  N2 = Re({}, Ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qh = At(N2),
  F2 = Re({}, xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fd,
  }),
  D2 = At(F2),
  B2 = Re({}, Wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  V2 = At(B2),
  j2 = Re({}, Ds, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  W2 = At(j2),
  H2 = [9, 13, 27, 32],
  Dd = Or && 'CompositionEvent' in window,
  yo = null;
Or && 'documentMode' in document && (yo = document.documentMode);
var U2 = Or && 'TextEvent' in window && !yo,
  Dg = Or && (!Dd || (yo && 8 < yo && 11 >= yo)),
  Zh = String.fromCharCode(32),
  qh = !1;
function Bg(e, t) {
  switch (e) {
    case 'keyup':
      return H2.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Vg(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var oi = !1;
function Y2(e, t) {
  switch (e) {
    case 'compositionend':
      return Vg(t);
    case 'keypress':
      return t.which !== 32 ? null : ((qh = !0), Zh);
    case 'textInput':
      return (e = t.data), e === Zh && qh ? null : e;
    default:
      return null;
  }
}
function G2(e, t) {
  if (oi)
    return e === 'compositionend' || (!Dd && Bg(e, t))
      ? ((e = Fg()), (Pl = zd = Qr = null), (oi = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Dg && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var K2 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function Jh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!K2[e.type] : t === 'textarea';
}
function jg(e, t, r, n) {
  xg(n),
    (t = ql(t, 'onChange')),
    0 < t.length &&
      ((r = new Nd('onChange', 'change', null, r, n)),
      e.push({ event: r, listeners: t }));
}
var xo = null,
  Ho = null;
function X2(e) {
  Jg(e, 0);
}
function Bs(e) {
  var t = si(e);
  if (dg(t)) return e;
}
function Q2(e, t) {
  if (e === 'change') return t;
}
var Wg = !1;
if (Or) {
  var qu;
  if (Or) {
    var Ju = 'oninput' in document;
    if (!Ju) {
      var ev = document.createElement('div');
      ev.setAttribute('oninput', 'return;'),
        (Ju = typeof ev.oninput == 'function');
    }
    qu = Ju;
  } else qu = !1;
  Wg = qu && (!document.documentMode || 9 < document.documentMode);
}
function tv() {
  xo && (xo.detachEvent('onpropertychange', Hg), (Ho = xo = null));
}
function Hg(e) {
  if (e.propertyName === 'value' && Bs(Ho)) {
    var t = [];
    jg(t, Ho, e, Md(e)), kg(X2, t);
  }
}
function Z2(e, t, r) {
  e === 'focusin'
    ? (tv(), (xo = t), (Ho = r), xo.attachEvent('onpropertychange', Hg))
    : e === 'focusout' && tv();
}
function q2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Bs(Ho);
}
function J2(e, t) {
  if (e === 'click') return Bs(t);
}
function ek(e, t) {
  if (e === 'input' || e === 'change') return Bs(t);
}
function tk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rr = typeof Object.is == 'function' ? Object.is : tk;
function Uo(e, t) {
  if (rr(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!jc.call(t, i) || !rr(e[i], t[i])) return !1;
  }
  return !0;
}
function rv(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nv(e, t) {
  var r = rv(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = rv(r);
  }
}
function Ug(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ug(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Yg() {
  for (var e = window, t = Ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string';
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Ul(e.document);
  }
  return t;
}
function Bd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function rk(e) {
  var t = Yg(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Ug(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Bd(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        'selectionStart' in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          o = Math.min(n.start, i);
        (n = n.end === void 0 ? o : Math.min(n.end, i)),
          !e.extend && o > n && ((i = n), (n = o), (o = i)),
          (i = nv(r, o));
        var a = nv(r, n);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var nk = Or && 'documentMode' in document && 11 >= document.documentMode,
  ai = null,
  sf = null,
  bo = null,
  uf = !1;
function iv(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  uf ||
    ai == null ||
    ai !== Ul(n) ||
    ((n = ai),
    'selectionStart' in n && Bd(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (bo && Uo(bo, n)) ||
      ((bo = n),
      (n = ql(sf, 'onSelect')),
      0 < n.length &&
        ((t = new Nd('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = ai))));
}
function Xa(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  );
}
var li = {
    animationend: Xa('Animation', 'AnimationEnd'),
    animationiteration: Xa('Animation', 'AnimationIteration'),
    animationstart: Xa('Animation', 'AnimationStart'),
    transitionend: Xa('Transition', 'TransitionEnd'),
  },
  ec = {},
  Gg = {};
Or &&
  ((Gg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete li.animationend.animation,
    delete li.animationiteration.animation,
    delete li.animationstart.animation),
  'TransitionEvent' in window || delete li.transitionend.transition);
function Vs(e) {
  if (ec[e]) return ec[e];
  if (!li[e]) return e;
  var t = li[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in Gg) return (ec[e] = t[r]);
  return e;
}
var Kg = Vs('animationend'),
  Xg = Vs('animationiteration'),
  Qg = Vs('animationstart'),
  Zg = Vs('transitionend'),
  qg = new Map(),
  ov =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function vn(e, t) {
  qg.set(e, t), Yn(t, [e]);
}
for (var tc = 0; tc < ov.length; tc++) {
  var rc = ov[tc],
    ik = rc.toLowerCase(),
    ok = rc[0].toUpperCase() + rc.slice(1);
  vn(ik, 'on' + ok);
}
vn(Kg, 'onAnimationEnd');
vn(Xg, 'onAnimationIteration');
vn(Qg, 'onAnimationStart');
vn('dblclick', 'onDoubleClick');
vn('focusin', 'onFocus');
vn('focusout', 'onBlur');
vn(Zg, 'onTransitionEnd');
$i('onMouseEnter', ['mouseout', 'mouseover']);
$i('onMouseLeave', ['mouseout', 'mouseover']);
$i('onPointerEnter', ['pointerout', 'pointerover']);
$i('onPointerLeave', ['pointerout', 'pointerover']);
Yn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Yn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Yn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Yn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Yn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Yn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var ho =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ak = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ho));
function av(e, t, r) {
  var n = e.type || 'unknown-event';
  (e.currentTarget = r), i2(n, t, void 0, e), (e.currentTarget = null);
}
function Jg(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var l = n[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
          av(i, l, u), (o = s);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((l = n[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          av(i, l, u), (o = s);
        }
    }
  }
  if (Gl) throw ((e = nf), (Gl = !1), (nf = null), e);
}
function be(e, t) {
  var r = t[hf];
  r === void 0 && (r = t[hf] = new Set());
  var n = e + '__bubble';
  r.has(n) || (ey(t, e, 2, !1), r.add(n));
}
function nc(e, t, r) {
  var n = 0;
  t && (n |= 4), ey(r, e, n, t);
}
var Qa = '_reactListening' + Math.random().toString(36).slice(2);
function Yo(e) {
  if (!e[Qa]) {
    (e[Qa] = !0),
      lg.forEach(function (r) {
        r !== 'selectionchange' && (ak.has(r) || nc(r, !1, e), nc(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qa] || ((t[Qa] = !0), nc('selectionchange', !1, t));
  }
}
function ey(e, t, r, n) {
  switch (Ng(t)) {
    case 1:
      var i = b2;
      break;
    case 4:
      i = S2;
      break;
    default:
      i = Ld;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !rf ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function ic(e, t, r, n, i) {
  var o = n;
  if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var l = n.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Rn(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            n = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  kg(function () {
    var u = o,
      c = Md(r),
      f = [];
    e: {
      var d = qg.get(e);
      if (d !== void 0) {
        var p = Nd,
          h = e;
        switch (e) {
          case 'keypress':
            if (Rl(r) === 0) break e;
          case 'keydown':
          case 'keyup':
            p = z2;
            break;
          case 'focusin':
            (h = 'focus'), (p = Zu);
            break;
          case 'focusout':
            (h = 'blur'), (p = Zu);
            break;
          case 'beforeblur':
          case 'afterblur':
            p = Zu;
            break;
          case 'click':
            if (r.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            p = Kh;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = C2;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = D2;
            break;
          case Kg:
          case Xg:
          case Qg:
            p = T2;
            break;
          case Zg:
            p = V2;
            break;
          case 'scroll':
            p = w2;
            break;
          case 'wheel':
            p = W2;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            p = R2;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = Qh;
        }
        var x = (t & 4) !== 0,
          w = !x && e === 'scroll',
          m = x ? (d !== null ? d + 'Capture' : null) : d;
        x = [];
        for (var v = u, g; v !== null; ) {
          g = v;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              m !== null && ((S = Bo(v, m)), S != null && x.push(Go(v, S, g)))),
            w)
          )
            break;
          v = v.return;
        }
        0 < x.length &&
          ((d = new p(d, h, null, r, c)), f.push({ event: d, listeners: x }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          d &&
            r !== ef &&
            (h = r.relatedTarget || r.fromElement) &&
            (Rn(h) || h[Ir]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((h = r.relatedTarget || r.toElement),
              (p = u),
              (h = h ? Rn(h) : null),
              h !== null &&
                ((w = Gn(h)), h !== w || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((p = null), (h = u)),
          p !== h)
        ) {
          if (
            ((x = Kh),
            (S = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (v = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Qh),
              (S = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (v = 'pointer')),
            (w = p == null ? d : si(p)),
            (g = h == null ? d : si(h)),
            (d = new x(S, v + 'leave', p, r, c)),
            (d.target = w),
            (d.relatedTarget = g),
            (S = null),
            Rn(c) === u &&
              ((x = new x(m, v + 'enter', h, r, c)),
              (x.target = g),
              (x.relatedTarget = w),
              (S = x)),
            (w = S),
            p && h)
          )
            t: {
              for (x = p, m = h, v = 0, g = x; g; g = qn(g)) v++;
              for (g = 0, S = m; S; S = qn(S)) g++;
              for (; 0 < v - g; ) (x = qn(x)), v--;
              for (; 0 < g - v; ) (m = qn(m)), g--;
              for (; v--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = qn(x)), (m = qn(m));
              }
              x = null;
            }
          else x = null;
          p !== null && lv(f, d, p, x, !1),
            h !== null && w !== null && lv(f, w, h, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? si(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && d.type === 'file'))
        )
          var _ = Q2;
        else if (Jh(d))
          if (Wg) _ = ek;
          else {
            _ = q2;
            var P = Z2;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (_ = J2);
        if (_ && (_ = _(e, u))) {
          jg(f, _, r, c);
          break e;
        }
        P && P(e, d, u),
          e === 'focusout' &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === 'number' &&
            Xc(d, 'number', d.value);
      }
      switch (((P = u ? si(u) : window), e)) {
        case 'focusin':
          (Jh(P) || P.contentEditable === 'true') &&
            ((ai = P), (sf = u), (bo = null));
          break;
        case 'focusout':
          bo = sf = ai = null;
          break;
        case 'mousedown':
          uf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (uf = !1), iv(f, r, c);
          break;
        case 'selectionchange':
          if (nk) break;
        case 'keydown':
        case 'keyup':
          iv(f, r, c);
      }
      var T;
      if (Dd)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart';
              break e;
            case 'compositionend':
              E = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              E = 'onCompositionUpdate';
              break e;
          }
          E = void 0;
        }
      else
        oi
          ? Bg(e, r) && (E = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (E = 'onCompositionStart');
      E &&
        (Dg &&
          r.locale !== 'ko' &&
          (oi || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && oi && (T = Fg())
            : ((Qr = c),
              (zd = 'value' in Qr ? Qr.value : Qr.textContent),
              (oi = !0))),
        (P = ql(u, E)),
        0 < P.length &&
          ((E = new Xh(E, e, null, r, c)),
          f.push({ event: E, listeners: P }),
          T ? (E.data = T) : ((T = Vg(r)), T !== null && (E.data = T)))),
        (T = U2 ? Y2(e, r) : G2(e, r)) &&
          ((u = ql(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Xh('onBeforeInput', 'beforeinput', null, r, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Jg(f, t);
  });
}
function Go(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function ql(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Bo(e, r)),
      o != null && n.unshift(Go(e, o, i)),
      (o = Bo(e, t)),
      o != null && n.push(Go(e, o, i))),
      (e = e.return);
  }
  return n;
}
function qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lv(e, t, r, n, i) {
  for (var o = t._reactName, a = []; r !== null && r !== n; ) {
    var l = r,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === n) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = Bo(r, o)), s != null && a.unshift(Go(r, s, l)))
        : i || ((s = Bo(r, o)), s != null && a.push(Go(r, s, l)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var lk = /\r\n?/g,
  sk = /\u0000|\uFFFD/g;
function sv(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      lk,
      `
`
    )
    .replace(sk, '');
}
function Za(e, t, r) {
  if (((t = sv(t)), sv(e) !== t && r)) throw Error(L(425));
}
function Jl() {}
var cf = null,
  ff = null;
function df(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pf = typeof setTimeout == 'function' ? setTimeout : void 0,
  uk = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  uv = typeof Promise == 'function' ? Promise : void 0,
  ck =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof uv != 'undefined'
      ? function (e) {
          return uv.resolve(null).then(e).catch(fk);
        }
      : pf;
function fk(e) {
  setTimeout(function () {
    throw e;
  });
}
function oc(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(i), Wo(t);
          return;
        }
        n--;
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++;
    r = i;
  } while (r);
  Wo(t);
}
function Rr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function cv(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e;
        t--;
      } else r === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hi = Math.random().toString(36).slice(2),
  fr = '__reactFiber$' + Hi,
  Ko = '__reactProps$' + Hi,
  Ir = '__reactContainer$' + Hi,
  hf = '__reactEvents$' + Hi,
  dk = '__reactListeners$' + Hi,
  pk = '__reactHandles$' + Hi;
function Rn(e) {
  var t = e[fr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Ir] || r[fr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = cv(e); e !== null; ) {
          if ((r = e[fr])) return r;
          e = cv(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function ba(e) {
  return (
    (e = e[fr] || e[Ir]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function si(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function js(e) {
  return e[Ko] || null;
}
var vf = [],
  ui = -1;
function mn(e) {
  return { current: e };
}
function we(e) {
  0 > ui || ((e.current = vf[ui]), (vf[ui] = null), ui--);
}
function xe(e, t) {
  ui++, (vf[ui] = e.current), (e.current = t);
}
var dn = {},
  ot = mn(dn),
  vt = mn(!1),
  Fn = dn;
function Oi(e, t) {
  var r = e.type.contextTypes;
  if (!r) return dn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in r) i[o] = t[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function mt(e) {
  return (e = e.childContextTypes), e != null;
}
function es() {
  we(vt), we(ot);
}
function fv(e, t, r) {
  if (ot.current !== dn) throw Error(L(168));
  xe(ot, t), xe(vt, r);
}
function ty(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(L(108, Zw(e) || 'Unknown', i));
  return Re({}, r, n);
}
function ts(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (Fn = ot.current),
    xe(ot, e),
    xe(vt, vt.current),
    !0
  );
}
function dv(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(L(169));
  r
    ? ((e = ty(e, t, Fn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      we(vt),
      we(ot),
      xe(ot, e))
    : we(vt),
    xe(vt, r);
}
var Tr = null,
  Ws = !1,
  ac = !1;
function ry(e) {
  Tr === null ? (Tr = [e]) : Tr.push(e);
}
function hk(e) {
  (Ws = !0), ry(e);
}
function gn() {
  if (!ac && Tr !== null) {
    ac = !0;
    var e = 0,
      t = he;
    try {
      var r = Tr;
      for (he = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Tr = null), (Ws = !1);
    } catch (i) {
      throw (Tr !== null && (Tr = Tr.slice(e + 1)), Tg($d, gn), i);
    } finally {
      (he = t), (ac = !1);
    }
  }
  return null;
}
var vk = Dr.ReactCurrentBatchConfig;
function Xt(e, t) {
  if (e && e.defaultProps) {
    (t = Re({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var rs = mn(null),
  ns = null,
  ci = null,
  Vd = null;
function jd() {
  Vd = ci = ns = null;
}
function Wd(e) {
  var t = rs.current;
  we(rs), (e._currentValue = t);
}
function mf(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function wi(e, t) {
  (ns = e),
    (Vd = ci = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ht = !0), (e.firstContext = null));
}
function Wt(e) {
  var t = e._currentValue;
  if (Vd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ci === null)) {
      if (ns === null) throw Error(L(308));
      (ci = e), (ns.dependencies = { lanes: 0, firstContext: e });
    } else ci = ci.next = e;
  return t;
}
var Jt = null,
  Gr = !1;
function Hd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ny(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $r(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, t) {
  var r = e.updateQueue;
  r !== null &&
    ((r = r.shared),
    Yy(e)
      ? ((e = r.interleaved),
        e === null
          ? ((t.next = t), Jt === null ? (Jt = [r]) : Jt.push(r))
          : ((t.next = e.next), (e.next = t)),
        (r.interleaved = t))
      : ((e = r.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (r.pending = t)));
}
function Al(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Od(e, r);
  }
}
function pv(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (r = r.next);
      } while (r !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function is(e, t, r, n) {
  var i = e.updateQueue;
  Gr = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (o = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = i.baseState;
    (a = 0), (c = u = s = null), (l = o);
    do {
      var d = l.lane,
        p = l.eventTime;
      if ((n & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var h = e,
            x = l;
          switch (((d = t), (p = r), x.tag)) {
            case 1:
              if (((h = x.payload), typeof h == 'function')) {
                f = h.call(p, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = x.payload),
                (d = typeof h == 'function' ? h.call(p, f, d) : h),
                d == null)
              )
                break e;
              f = Re({}, f, d);
              break e;
            case 2:
              Gr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (s = f)) : (c = c.next = p),
          (a |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Vn |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function hv(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != 'function'))
          throw Error(L(191, i));
        i.call(n);
      }
    }
}
var iy = new ag.Component().refs;
function gf(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Re({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Hs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = st(),
      i = ln(e),
      o = $r(n, i);
    (o.payload = t),
      r != null && (o.callback = r),
      on(e, o),
      (t = Vt(e, i, n)),
      t !== null && Al(t, e, i);
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = st(),
      i = ln(e),
      o = $r(n, i);
    (o.tag = 1),
      (o.payload = t),
      r != null && (o.callback = r),
      on(e, o),
      (t = Vt(e, i, n)),
      t !== null && Al(t, e, i);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = st(),
      n = ln(e),
      i = $r(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      on(e, i),
      (t = Vt(e, n, r)),
      t !== null && Al(t, e, n);
  },
};
function vv(e, t, r, n, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Uo(r, n) || !Uo(i, o)
      : !0
  );
}
function oy(e, t, r) {
  var n = !1,
    i = dn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Wt(o))
      : ((i = mt(t) ? Fn : ot.current),
        (n = t.contextTypes),
        (o = (n = n != null) ? Oi(e, i) : dn)),
    (t = new t(r, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hs),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function mv(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
}
function yf(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = iy), Hd(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Wt(o))
    : ((o = mt(t) ? Fn : ot.current), (i.context = Oi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (gf(e, t, o, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Hs.enqueueReplaceState(i, i.state, null),
      is(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
var fi = [],
  di = 0,
  os = null,
  as = 0,
  zt = [],
  Nt = 0,
  Dn = null,
  Ar = 1,
  Mr = '';
function _n(e, t) {
  (fi[di++] = as), (fi[di++] = os), (os = e), (as = t);
}
function ay(e, t, r) {
  (zt[Nt++] = Ar), (zt[Nt++] = Mr), (zt[Nt++] = Dn), (Dn = e);
  var n = Ar;
  e = Mr;
  var i = 32 - er(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var o = 32 - er(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (i -= a),
      (Ar = (1 << (32 - er(t) + i)) | (r << i) | n),
      (Mr = o + e);
  } else (Ar = (1 << o) | (r << i) | n), (Mr = e);
}
function Ud(e) {
  e.return !== null && (_n(e, 1), ay(e, 1, 0));
}
function Yd(e) {
  for (; e === os; )
    (os = fi[--di]), (fi[di] = null), (as = fi[--di]), (fi[di] = null);
  for (; e === Dn; )
    (Dn = zt[--Nt]),
      (zt[Nt] = null),
      (Mr = zt[--Nt]),
      (zt[Nt] = null),
      (Ar = zt[--Nt]),
      (zt[Nt] = null);
}
var Et = null,
  pt = null,
  _e = !1,
  qt = null;
function ly(e, t) {
  var r = Ft(5, null, null, 0);
  (r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function gv(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Et = e), (pt = Rr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Et = e), (pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Dn !== null ? { id: Ar, overflow: Mr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ft(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Et = e),
            (pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bf(e) {
  if (_e) {
    var t = pt;
    if (t) {
      var r = t;
      if (!gv(e, t)) {
        if (xf(e)) throw Error(L(418));
        t = Rr(r.nextSibling);
        var n = Et;
        t && gv(e, t)
          ? ly(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (Et = e));
      }
    } else {
      if (xf(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (_e = !1), (Et = e);
    }
  }
}
function yv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Et = e;
}
function no(e) {
  if (e !== Et) return !1;
  if (!_e) return yv(e), (_e = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !df(e.type, e.memoizedProps))),
    t && (t = pt))
  ) {
    if (xf(e)) {
      for (e = pt; e; ) e = Rr(e.nextSibling);
      throw Error(L(418));
    }
    for (; t; ) ly(e, t), (t = Rr(t.nextSibling));
  }
  if ((yv(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === '/$') {
            if (t === 0) {
              pt = Rr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = Et ? Rr(e.stateNode.nextSibling) : null;
  return !0;
}
function Ii() {
  (pt = Et = null), (_e = !1);
}
function Gd(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function io(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(L(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(L(147, e));
      var i = n,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = i.refs;
            l === iy && (l = i.refs = {}),
              a === null ? delete l[o] : (l[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(L(284));
    if (!r._owner) throw Error(L(290, e));
  }
  return e;
}
function qa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function xv(e) {
  var t = e._init;
  return t(e._payload);
}
function sy(e) {
  function t(m, v) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [v]), (m.flags |= 16)) : g.push(v);
    }
  }
  function r(m, v) {
    if (!e) return null;
    for (; v !== null; ) t(m, v), (v = v.sibling);
    return null;
  }
  function n(m, v) {
    for (m = new Map(); v !== null; )
      v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling);
    return m;
  }
  function i(m, v) {
    return (m = pn(m, v)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, v, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < v ? ((m.flags |= 2), v) : g)
            : ((m.flags |= 2), v))
        : ((m.flags |= 1048576), v)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, v, g, S) {
    return v === null || v.tag !== 6
      ? ((v = dc(g, m.mode, S)), (v.return = m), v)
      : ((v = i(v, g)), (v.return = m), v);
  }
  function s(m, v, g, S) {
    var _ = g.type;
    return _ === ii
      ? c(m, v, g.props.children, S, g.key)
      : v !== null &&
        (v.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === Yr &&
            xv(_) === v.type))
      ? ((S = i(v, g.props)), (S.ref = io(m, v, g)), (S.return = m), S)
      : ((S = Ll(g.type, g.key, g.props, null, m.mode, S)),
        (S.ref = io(m, v, g)),
        (S.return = m),
        S);
  }
  function u(m, v, g, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== g.containerInfo ||
      v.stateNode.implementation !== g.implementation
      ? ((v = pc(g, m.mode, S)), (v.return = m), v)
      : ((v = i(v, g.children || [])), (v.return = m), v);
  }
  function c(m, v, g, S, _) {
    return v === null || v.tag !== 7
      ? ((v = zn(g, m.mode, S, _)), (v.return = m), v)
      : ((v = i(v, g)), (v.return = m), v);
  }
  function f(m, v, g) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (v = dc('' + v, m.mode, g)), (v.return = m), v;
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case ja:
          return (
            (g = Ll(v.type, v.key, v.props, null, m.mode, g)),
            (g.ref = io(m, null, v)),
            (g.return = m),
            g
          );
        case ni:
          return (v = pc(v, m.mode, g)), (v.return = m), v;
        case Yr:
          var S = v._init;
          return f(m, S(v._payload), g);
      }
      if (fo(v) || qi(v))
        return (v = zn(v, m.mode, g, null)), (v.return = m), v;
      qa(m, v);
    }
    return null;
  }
  function d(m, v, g, S) {
    var _ = v !== null ? v.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return _ !== null ? null : l(m, v, '' + g, S);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case ja:
          return g.key === _ ? s(m, v, g, S) : null;
        case ni:
          return g.key === _ ? u(m, v, g, S) : null;
        case Yr:
          return (_ = g._init), d(m, v, _(g._payload), S);
      }
      if (fo(g) || qi(g)) return _ !== null ? null : c(m, v, g, S, null);
      qa(m, g);
    }
    return null;
  }
  function p(m, v, g, S, _) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (m = m.get(g) || null), l(v, m, '' + S, _);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case ja:
          return (m = m.get(S.key === null ? g : S.key) || null), s(v, m, S, _);
        case ni:
          return (m = m.get(S.key === null ? g : S.key) || null), u(v, m, S, _);
        case Yr:
          var P = S._init;
          return p(m, v, g, P(S._payload), _);
      }
      if (fo(S) || qi(S)) return (m = m.get(g) || null), c(v, m, S, _, null);
      qa(v, S);
    }
    return null;
  }
  function h(m, v, g, S) {
    for (
      var _ = null, P = null, T = v, E = (v = 0), R = null;
      T !== null && E < g.length;
      E++
    ) {
      T.index > E ? ((R = T), (T = null)) : (R = T.sibling);
      var M = d(m, T, g[E], S);
      if (M === null) {
        T === null && (T = R);
        break;
      }
      e && T && M.alternate === null && t(m, T),
        (v = o(M, v, E)),
        P === null ? (_ = M) : (P.sibling = M),
        (P = M),
        (T = R);
    }
    if (E === g.length) return r(m, T), _e && _n(m, E), _;
    if (T === null) {
      for (; E < g.length; E++)
        (T = f(m, g[E], S)),
          T !== null &&
            ((v = o(T, v, E)), P === null ? (_ = T) : (P.sibling = T), (P = T));
      return _e && _n(m, E), _;
    }
    for (T = n(m, T); E < g.length; E++)
      (R = p(T, m, E, g[E], S)),
        R !== null &&
          (e && R.alternate !== null && T.delete(R.key === null ? E : R.key),
          (v = o(R, v, E)),
          P === null ? (_ = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        T.forEach(function (K) {
          return t(m, K);
        }),
      _e && _n(m, E),
      _
    );
  }
  function x(m, v, g, S) {
    var _ = qi(g);
    if (typeof _ != 'function') throw Error(L(150));
    if (((g = _.call(g)), g == null)) throw Error(L(151));
    for (
      var P = (_ = null), T = v, E = (v = 0), R = null, M = g.next();
      T !== null && !M.done;
      E++, M = g.next()
    ) {
      T.index > E ? ((R = T), (T = null)) : (R = T.sibling);
      var K = d(m, T, M.value, S);
      if (K === null) {
        T === null && (T = R);
        break;
      }
      e && T && K.alternate === null && t(m, T),
        (v = o(K, v, E)),
        P === null ? (_ = K) : (P.sibling = K),
        (P = K),
        (T = R);
    }
    if (M.done) return r(m, T), _e && _n(m, E), _;
    if (T === null) {
      for (; !M.done; E++, M = g.next())
        (M = f(m, M.value, S)),
          M !== null &&
            ((v = o(M, v, E)), P === null ? (_ = M) : (P.sibling = M), (P = M));
      return _e && _n(m, E), _;
    }
    for (T = n(m, T); !M.done; E++, M = g.next())
      (M = p(T, m, E, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? E : M.key),
          (v = o(M, v, E)),
          P === null ? (_ = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        T.forEach(function (J) {
          return t(m, J);
        }),
      _e && _n(m, E),
      _
    );
  }
  function w(m, v, g, S) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === ii &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case ja:
          e: {
            for (var _ = g.key, P = v; P !== null; ) {
              if (P.key === _) {
                if (((_ = g.type), _ === ii)) {
                  if (P.tag === 7) {
                    r(m, P.sibling),
                      (v = i(P, g.props.children)),
                      (v.return = m),
                      (m = v);
                    break e;
                  }
                } else if (
                  P.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === Yr &&
                    xv(_) === P.type)
                ) {
                  r(m, P.sibling),
                    (v = i(P, g.props)),
                    (v.ref = io(m, P, g)),
                    (v.return = m),
                    (m = v);
                  break e;
                }
                r(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            g.type === ii
              ? ((v = zn(g.props.children, m.mode, S, g.key)),
                (v.return = m),
                (m = v))
              : ((S = Ll(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = io(m, v, g)),
                (S.return = m),
                (m = S));
          }
          return a(m);
        case ni:
          e: {
            for (P = g.key; v !== null; ) {
              if (v.key === P)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === g.containerInfo &&
                  v.stateNode.implementation === g.implementation
                ) {
                  r(m, v.sibling),
                    (v = i(v, g.children || [])),
                    (v.return = m),
                    (m = v);
                  break e;
                } else {
                  r(m, v);
                  break;
                }
              else t(m, v);
              v = v.sibling;
            }
            (v = pc(g, m.mode, S)), (v.return = m), (m = v);
          }
          return a(m);
        case Yr:
          return (P = g._init), w(m, v, P(g._payload), S);
      }
      if (fo(g)) return h(m, v, g, S);
      if (qi(g)) return x(m, v, g, S);
      qa(m, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        v !== null && v.tag === 6
          ? (r(m, v.sibling), (v = i(v, g)), (v.return = m), (m = v))
          : (r(m, v), (v = dc(g, m.mode, S)), (v.return = m), (m = v)),
        a(m))
      : r(m, v);
  }
  return w;
}
var Li = sy(!0),
  uy = sy(!1),
  Sa = {},
  vr = mn(Sa),
  Xo = mn(Sa),
  Qo = mn(Sa);
function An(e) {
  if (e === Sa) throw Error(L(174));
  return e;
}
function Kd(e, t) {
  switch ((xe(Qo, t), xe(Xo, e), xe(vr, Sa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zc(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zc(t, e));
  }
  we(vr), xe(vr, t);
}
function zi() {
  we(vr), we(Xo), we(Qo);
}
function cy(e) {
  An(Qo.current);
  var t = An(vr.current),
    r = Zc(t, e.type);
  t !== r && (xe(Xo, e), xe(vr, r));
}
function Xd(e) {
  Xo.current === e && (we(vr), we(Xo));
}
var Te = mn(0);
function ls(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var lc = [];
function Qd() {
  for (var e = 0; e < lc.length; e++)
    lc[e]._workInProgressVersionPrimary = null;
  lc.length = 0;
}
var Ml = Dr.ReactCurrentDispatcher,
  sc = Dr.ReactCurrentBatchConfig,
  Bn = 0,
  Pe = null,
  Ve = null,
  Ue = null,
  ss = !1,
  So = !1,
  Zo = 0,
  mk = 0;
function et() {
  throw Error(L(321));
}
function Zd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!rr(e[r], t[r])) return !1;
  return !0;
}
function qd(e, t, r, n, i, o) {
  if (
    ((Bn = o),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ml.current = e === null || e.memoizedState === null ? bk : Sk),
    (e = r(n, i)),
    So)
  ) {
    o = 0;
    do {
      if (((So = !1), (Zo = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Ue = Ve = null),
        (t.updateQueue = null),
        (Ml.current = wk),
        (e = r(n, i));
    } while (So);
  }
  if (
    ((Ml.current = us),
    (t = Ve !== null && Ve.next !== null),
    (Bn = 0),
    (Ue = Ve = Pe = null),
    (ss = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Jd() {
  var e = Zo !== 0;
  return (Zo = 0), e;
}
function lr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ue === null ? (Pe.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function Ht() {
  if (Ve === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ve.next;
  var t = Ue === null ? Pe.memoizedState : Ue.next;
  if (t !== null) (Ue = t), (Ve = e);
  else {
    if (e === null) throw Error(L(310));
    (Ve = e),
      (e = {
        memoizedState: Ve.memoizedState,
        baseState: Ve.baseState,
        baseQueue: Ve.baseQueue,
        queue: Ve.queue,
        next: null,
      }),
      Ue === null ? (Pe.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function qo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function uc(e) {
  var t = Ht(),
    r = t.queue;
  if (r === null) throw Error(L(311));
  r.lastRenderedReducer = e;
  var n = Ve,
    i = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (n.baseQueue = i = o), (r.pending = null);
  }
  if (i !== null) {
    (o = i.next), (n = n.baseState);
    var l = (a = null),
      s = null,
      u = o;
    do {
      var c = u.lane;
      if ((Bn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = f), (a = n)) : (s = s.next = f),
          (Pe.lanes |= c),
          (Vn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (a = n) : (s.next = l),
      rr(n, t.memoizedState) || (ht = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = s),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Pe.lanes |= o), (Vn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function cc(e) {
  var t = Ht(),
    r = t.queue;
  if (r === null) throw Error(L(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    rr(o, t.memoizedState) || (ht = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function fy() {}
function dy(e, t) {
  var r = Pe,
    n = Ht(),
    i = t(),
    o = !rr(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (ht = !0)),
    (n = n.queue),
    ep(vy.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || o || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Jo(9, hy.bind(null, r, n, i, t), void 0, null),
      He === null)
    )
      throw Error(L(349));
    (Bn & 30) !== 0 || py(r, t, i);
  }
  return i;
}
function py(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function hy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), my(t) && Vt(e, 1, -1);
}
function vy(e, t, r) {
  return r(function () {
    my(t) && Vt(e, 1, -1);
  });
}
function my(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !rr(e, r);
  } catch {
    return !0;
  }
}
function bv(e) {
  var t = lr();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xk.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function Jo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function gy() {
  return Ht().memoizedState;
}
function $l(e, t, r, n) {
  var i = lr();
  (Pe.flags |= e),
    (i.memoizedState = Jo(1 | t, r, void 0, n === void 0 ? null : n));
}
function Us(e, t, r, n) {
  var i = Ht();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (Ve !== null) {
    var a = Ve.memoizedState;
    if (((o = a.destroy), n !== null && Zd(n, a.deps))) {
      i.memoizedState = Jo(t, r, o, n);
      return;
    }
  }
  (Pe.flags |= e), (i.memoizedState = Jo(1 | t, r, o, n));
}
function Sv(e, t) {
  return $l(8390656, 8, e, t);
}
function ep(e, t) {
  return Us(2048, 8, e, t);
}
function yy(e, t) {
  return Us(4, 2, e, t);
}
function xy(e, t) {
  return Us(4, 4, e, t);
}
function by(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Sy(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), Us(4, 4, by.bind(null, t, e), r)
  );
}
function tp() {}
function wy(e, t) {
  var r = Ht();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Zd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function ky(e, t) {
  var r = Ht();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Zd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Cy(e, t, r) {
  return (Bn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (ht = !0)), (e.memoizedState = r))
    : (rr(r, t) || ((r = Ag()), (Pe.lanes |= r), (Vn |= r), (e.baseState = !0)),
      t);
}
function gk(e, t) {
  var r = he;
  (he = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = sc.transition;
  sc.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = r), (sc.transition = n);
  }
}
function _y() {
  return Ht().memoizedState;
}
function yk(e, t, r) {
  var n = ln(e);
  (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }),
    Ey(e)
      ? Ty(t, r)
      : (Py(e, t, r), (r = st()), (e = Vt(e, n, r)), e !== null && Ry(e, t, n));
}
function xk(e, t, r) {
  var n = ln(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Ey(e)) Ty(t, i);
  else {
    Py(e, t, i);
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, r);
        if (((i.hasEagerState = !0), (i.eagerState = l), rr(l, a))) return;
      } catch {
      } finally {
      }
    (r = st()), (e = Vt(e, n, r)), e !== null && Ry(e, t, n);
  }
}
function Ey(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function Ty(e, t) {
  So = ss = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Py(e, t, r) {
  Yy(e)
    ? ((e = t.interleaved),
      e === null
        ? ((r.next = r), Jt === null ? (Jt = [t]) : Jt.push(t))
        : ((r.next = e.next), (e.next = r)),
      (t.interleaved = r))
    : ((e = t.pending),
      e === null ? (r.next = r) : ((r.next = e.next), (e.next = r)),
      (t.pending = r));
}
function Ry(e, t, r) {
  if ((r & 4194240) !== 0) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Od(e, r);
  }
}
var us = {
    readContext: Wt,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useInsertionEffect: et,
    useLayoutEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useMutableSource: et,
    useSyncExternalStore: et,
    useId: et,
    unstable_isNewReconciler: !1,
  },
  bk = {
    readContext: Wt,
    useCallback: function (e, t) {
      return (lr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Wt,
    useEffect: Sv,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        $l(4194308, 4, by.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return $l(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $l(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = lr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = lr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = yk.bind(null, Pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bv,
    useDebugValue: tp,
    useDeferredValue: function (e) {
      return (lr().memoizedState = e);
    },
    useTransition: function () {
      var e = bv(!1),
        t = e[0];
      return (e = gk.bind(null, e[1])), (lr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Pe,
        i = lr();
      if (_e) {
        if (r === void 0) throw Error(L(407));
        r = r();
      } else {
        if (((r = t()), He === null)) throw Error(L(349));
        (Bn & 30) !== 0 || py(n, t, r);
      }
      i.memoizedState = r;
      var o = { value: r, getSnapshot: t };
      return (
        (i.queue = o),
        Sv(vy.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        Jo(9, hy.bind(null, n, o, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = lr(),
        t = He.identifierPrefix;
      if (_e) {
        var r = Mr,
          n = Ar;
        (r = (n & ~(1 << (32 - er(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Zo++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':');
      } else (r = mk++), (t = ':' + t + 'r' + r.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sk = {
    readContext: Wt,
    useCallback: wy,
    useContext: Wt,
    useEffect: ep,
    useImperativeHandle: Sy,
    useInsertionEffect: yy,
    useLayoutEffect: xy,
    useMemo: ky,
    useReducer: uc,
    useRef: gy,
    useState: function () {
      return uc(qo);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = Ht();
      return Cy(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = uc(qo)[0],
        t = Ht().memoizedState;
      return [e, t];
    },
    useMutableSource: fy,
    useSyncExternalStore: dy,
    useId: _y,
    unstable_isNewReconciler: !1,
  },
  wk = {
    readContext: Wt,
    useCallback: wy,
    useContext: Wt,
    useEffect: ep,
    useImperativeHandle: Sy,
    useInsertionEffect: yy,
    useLayoutEffect: xy,
    useMemo: ky,
    useReducer: cc,
    useRef: gy,
    useState: function () {
      return cc(qo);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = Ht();
      return Ve === null ? (t.memoizedState = e) : Cy(t, Ve.memoizedState, e);
    },
    useTransition: function () {
      var e = cc(qo)[0],
        t = Ht().memoizedState;
      return [e, t];
    },
    useMutableSource: fy,
    useSyncExternalStore: dy,
    useId: _y,
    unstable_isNewReconciler: !1,
  };
function rp(e, t) {
  try {
    var r = '',
      n = t;
    do (r += Qw(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i };
}
function Sf(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var kk = typeof WeakMap == 'function' ? WeakMap : Map;
function Ay(e, t, r) {
  (r = $r(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      fs || ((fs = !0), (Af = n)), Sf(e, t);
    }),
    r
  );
}
function My(e, t, r) {
  (r = $r(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == 'function') {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        Sf(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (r.callback = function () {
        Sf(e, t),
          typeof n != 'function' &&
            (an === null ? (an = new Set([this])) : an.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    r
  );
}
function wv(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new kk();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = zk.bind(null, e, t, r)), t.then(e, e));
}
function kv(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cv(e, t, r, n, i) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = $r(-1, 1)), (t.tag = 2), on(r, t))),
          (r.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = i), e);
}
var $y, wf, Oy, Iy;
$y = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
wf = function () {};
Oy = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), An(vr.current);
    var o = null;
    switch (r) {
      case 'input':
        (i = Gc(e, i)), (n = Gc(e, n)), (o = []);
        break;
      case 'select':
        (i = Re({}, i, { value: void 0 })),
          (n = Re({}, n, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = Qc(e, i)), (n = Qc(e, n)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof n.onClick == 'function' &&
          (e.onclick = Jl);
    }
    qc(r, n);
    var a;
    r = null;
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u];
          for (a in l) l.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Fo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in n) {
      var s = n[u];
      if (
        ((l = i != null ? i[u] : void 0),
        n.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ''));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (r || (r = {}), (r[a] = s[a]));
          } else r || (o || (o = []), o.push(u, r)), (r = s);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(u, s))
            : u === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(u, '' + s)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Fo.hasOwnProperty(u)
                ? (s != null && u === 'onScroll' && be('scroll', e),
                  o || l === s || (o = []))
                : (o = o || []).push(u, s));
    }
    r && (o = o || []).push('style', r);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Iy = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function oo(e, t) {
  if (!_e)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case 'collapsed':
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function tt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Ck(e, t, r) {
  var n = t.pendingProps;
  switch ((Yd(t), t.tag)) {
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
      return tt(t), null;
    case 1:
      return mt(t.type) && es(), tt(t), null;
    case 3:
      return (
        (n = t.stateNode),
        zi(),
        we(vt),
        we(ot),
        Qd(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (no(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), qt !== null && (Of(qt), (qt = null)))),
        wf(e, t),
        tt(t),
        null
      );
    case 5:
      Xd(t);
      var i = An(Qo.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Oy(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(L(166));
          return tt(t), null;
        }
        if (((e = An(vr.current)), no(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[fr] = t), (n[Ko] = o), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              be('cancel', n), be('close', n);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              be('load', n);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < ho.length; i++) be(ho[i], n);
              break;
            case 'source':
              be('error', n);
              break;
            case 'img':
            case 'image':
            case 'link':
              be('error', n), be('load', n);
              break;
            case 'details':
              be('toggle', n);
              break;
            case 'input':
              Fh(n, o), be('invalid', n);
              break;
            case 'select':
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                be('invalid', n);
              break;
            case 'textarea':
              Bh(n, o), be('invalid', n);
          }
          qc(r, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === 'children'
                ? typeof l == 'string'
                  ? n.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Za(n.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    n.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Za(n.textContent, l, e),
                    (i = ['children', '' + l]))
                : Fo.hasOwnProperty(a) &&
                  l != null &&
                  a === 'onScroll' &&
                  be('scroll', n);
            }
          switch (r) {
            case 'input':
              Wa(n), Dh(n, o, !0);
              break;
            case 'textarea':
              Wa(n), Vh(n);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (n.onclick = Jl);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = vg(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === 'select' &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[fr] = t),
            (e[Ko] = n),
            $y(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Jc(r, n)), r)) {
              case 'dialog':
                be('cancel', e), be('close', e), (i = n);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                be('load', e), (i = n);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < ho.length; i++) be(ho[i], e);
                i = n;
                break;
              case 'source':
                be('error', e), (i = n);
                break;
              case 'img':
              case 'image':
              case 'link':
                be('error', e), be('load', e), (i = n);
                break;
              case 'details':
                be('toggle', e), (i = n);
                break;
              case 'input':
                Fh(e, n), (i = Gc(e, n)), be('invalid', e);
                break;
              case 'option':
                i = n;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = Re({}, n, { value: void 0 })),
                  be('invalid', e);
                break;
              case 'textarea':
                Bh(e, n), (i = Qc(e, n)), be('invalid', e);
                break;
              default:
                i = n;
            }
            qc(r, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === 'style'
                  ? yg(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && mg(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (r !== 'textarea' || s !== '') && Do(e, s)
                    : typeof s == 'number' && Do(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Fo.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && be('scroll', e)
                      : s != null && Td(e, o, s, a));
              }
            switch (r) {
              case 'input':
                Wa(e), Dh(e, n, !1);
                break;
              case 'textarea':
                Wa(e), Vh(e);
                break;
              case 'option':
                n.value != null && e.setAttribute('value', '' + fn(n.value));
                break;
              case 'select':
                (e.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? yi(e, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      yi(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = Jl);
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus;
                break e;
              case 'img':
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return tt(t), null;
    case 6:
      if (e && t.stateNode != null) Iy(e, t, e.memoizedProps, n);
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(L(166));
        if (((r = An(Qo.current)), An(vr.current), no(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[fr] = t),
            (o = n.nodeValue !== r) && ((e = Et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Za(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Za(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[fr] = t),
            (t.stateNode = n);
      }
      return tt(t), null;
    case 13:
      if (
        (we(Te),
        (n = t.memoizedState),
        _e && pt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
      ) {
        for (n = pt; n; ) n = Rr(n.nextSibling);
        return Ii(), (t.flags |= 98560), t;
      }
      if (n !== null && n.dehydrated !== null) {
        if (((n = no(t)), e === null)) {
          if (!n) throw Error(L(318));
          if (
            ((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n)
          )
            throw Error(L(317));
          n[fr] = t;
        } else
          Ii(),
            (t.flags & 128) === 0 && (t.memoizedState = null),
            (t.flags |= 4);
        return tt(t), null;
      }
      return (
        qt !== null && (Of(qt), (qt = null)),
        (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            (r = !1),
            e === null ? no(t) : (r = e.memoizedState !== null),
            n !== r &&
              n &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Te.current & 1) !== 0
                  ? je === 0 && (je = 3)
                  : sp())),
            t.updateQueue !== null && (t.flags |= 4),
            tt(t),
            null)
      );
    case 4:
      return (
        zi(), wf(e, t), e === null && Yo(t.stateNode.containerInfo), tt(t), null
      );
    case 10:
      return Wd(t.type._context), tt(t), null;
    case 17:
      return mt(t.type) && es(), tt(t), null;
    case 19:
      if ((we(Te), (o = t.memoizedState), o === null)) return tt(t), null;
      if (((n = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (n) oo(o, !1);
        else {
          if (je !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = ls(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    oo(o, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (o = r),
                    (e = n),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return xe(Te, (Te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ie() > Ni &&
            ((t.flags |= 128), (n = !0), oo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ls(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              oo(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !_e)
            )
              return tt(t), null;
          } else
            2 * Ie() - o.renderingStartTime > Ni &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), oo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = o.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ie()),
          (t.sibling = null),
          (r = Te.current),
          xe(Te, n ? (r & 1) | 2 : r & 1),
          t)
        : (tt(t), null);
    case 22:
    case 23:
      return (
        lp(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && (t.mode & 1) !== 0
          ? (kt & 1073741824) !== 0 &&
            (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : tt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
var _k = Dr.ReactCurrentOwner,
  ht = !1;
function lt(e, t, r, n) {
  t.child = e === null ? uy(t, null, r, n) : Li(t, e.child, r, n);
}
function _v(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return (
    wi(t, i),
    (n = qd(e, t, r, n, o, i)),
    (r = Jd()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Lr(e, t, i))
      : (_e && r && Ud(t), (t.flags |= 1), lt(e, t, n, i), t.child)
  );
}
function Ev(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == 'function' &&
      !up(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ly(e, t, o, n, i))
      : ((e = Ll(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), (e.lanes & i) === 0)) {
    var a = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Uo), r(a, n) && e.ref === t.ref)
    )
      return Lr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = pn(o, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ly(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Uo(o, n) && e.ref === t.ref)
      if (((ht = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
        (e.flags & 131072) !== 0 && (ht = !0);
      else return (t.lanes = e.lanes), Lr(e, t, i);
  }
  return kf(e, t, r, n, i);
}
function zy(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === 'hidden')
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        xe(hi, kt),
        (kt |= r);
    else if ((r & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : r),
        xe(hi, kt),
        (kt |= n);
    else
      return (
        (e = o !== null ? o.baseLanes | r : r),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null,
        }),
        (t.updateQueue = null),
        xe(hi, kt),
        (kt |= e),
        null
      );
  else
    o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      xe(hi, kt),
      (kt |= n);
  return lt(e, t, i, r), t.child;
}
function Ny(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function kf(e, t, r, n, i) {
  var o = mt(r) ? Fn : ot.current;
  return (
    (o = Oi(t, o)),
    wi(t, i),
    (r = qd(e, t, r, n, o, i)),
    (n = Jd()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Lr(e, t, i))
      : (_e && n && Ud(t), (t.flags |= 1), lt(e, t, r, i), t.child)
  );
}
function Tv(e, t, r, n, i) {
  if (mt(r)) {
    var o = !0;
    ts(t);
  } else o = !1;
  if ((wi(t, i), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      oy(t, r, n),
      yf(t, r, n, i),
      (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = r.contextType;
    typeof u == 'object' && u !== null
      ? (u = Wt(u))
      : ((u = mt(r) ? Fn : ot.current), (u = Oi(t, u)));
    var c = r.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== n || s !== u) && mv(t, a, n, u)),
      (Gr = !1);
    var d = t.memoizedState;
    (a.state = d),
      is(t, n, a, i),
      (s = t.memoizedState),
      l !== n || d !== s || vt.current || Gr
        ? (typeof c == 'function' && (gf(t, r, c, n), (s = t.memoizedState)),
          (l = Gr || vv(t, r, l, n, d, s, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (a.props = n),
          (a.state = s),
          (a.context = u),
          (n = l))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      ny(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Xt(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (s = r.contextType),
      typeof s == 'object' && s !== null
        ? (s = Wt(s))
        : ((s = mt(r) ? Fn : ot.current), (s = Oi(t, s)));
    var p = r.getDerivedStateFromProps;
    (c =
      typeof p == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== f || d !== s) && mv(t, a, n, s)),
      (Gr = !1),
      (d = t.memoizedState),
      (a.state = d),
      is(t, n, a, i);
    var h = t.memoizedState;
    l !== f || d !== h || vt.current || Gr
      ? (typeof p == 'function' && (gf(t, r, p, n), (h = t.memoizedState)),
        (u = Gr || vv(t, r, u, n, d, h, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(n, h, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(n, h, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = h)),
        (a.props = n),
        (a.state = h),
        (a.context = s),
        (n = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Cf(e, t, r, n, o, i);
}
function Cf(e, t, r, n, i, o) {
  Ny(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return i && dv(t, r, !1), Lr(e, t, o);
  (n = t.stateNode), (_k.current = t);
  var l =
    a && typeof r.getDerivedStateFromError != 'function' ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Li(t, e.child, null, o)), (t.child = Li(t, null, l, o)))
      : lt(e, t, l, o),
    (t.memoizedState = n.state),
    i && dv(t, r, !0),
    t.child
  );
}
function Fy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? fv(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && fv(e, t.context, !1),
    Kd(e, t.containerInfo);
}
function Pv(e, t, r, n, i) {
  return Ii(), Gd(i), (t.flags |= 256), lt(e, t, r, n), t.child;
}
var Ja = { dehydrated: null, treeContext: null, retryLane: 0 };
function el(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rv(e, t) {
  return {
    baseLanes: e.baseLanes | t,
    cachePool: null,
    transitions: e.transitions,
  };
}
function Dy(e, t, r) {
  var n = t.pendingProps,
    i = Te.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    xe(Te, i & 1),
    e === null)
  )
    return (
      bf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === '$!'
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((i = n.children),
          (e = n.fallback),
          o
            ? ((n = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              (n & 1) === 0 && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = hs(i, n, 0, null)),
              (e = zn(e, n, r, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = el(r)),
              (t.memoizedState = Ja),
              e)
            : _f(t, i))
    );
  if (((i = e.memoizedState), i !== null)) {
    if (((l = i.dehydrated), l !== null)) {
      if (a)
        return t.flags & 256
          ? ((t.flags &= -257), tl(e, t, r, Error(L(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = n.fallback),
            (i = t.mode),
            (n = hs({ mode: 'visible', children: n.children }, i, 0, null)),
            (o = zn(o, i, r, null)),
            (o.flags |= 2),
            (n.return = t),
            (o.return = t),
            (n.sibling = o),
            (t.child = n),
            (t.mode & 1) !== 0 && Li(t, e.child, null, r),
            (t.child.memoizedState = el(r)),
            (t.memoizedState = Ja),
            o);
      if ((t.mode & 1) === 0) t = tl(e, t, r, null);
      else if (l.data === '$!') t = tl(e, t, r, Error(L(419)));
      else if (((n = (r & e.childLanes) !== 0), ht || n)) {
        if (((n = He), n !== null)) {
          switch (r & -r) {
            case 4:
              o = 2;
              break;
            case 16:
              o = 8;
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
              o = 32;
              break;
            case 536870912:
              o = 268435456;
              break;
            default:
              o = 0;
          }
          (n = (o & (n.suspendedLanes | r)) !== 0 ? 0 : o),
            n !== 0 && n !== i.retryLane && ((i.retryLane = n), Vt(e, n, -1));
        }
        sp(), (t = tl(e, t, r, Error(L(421))));
      } else
        l.data === '$?'
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Nk.bind(null, e)),
            (l._reactRetry = t),
            (t = null))
          : ((r = i.treeContext),
            (pt = Rr(l.nextSibling)),
            (Et = t),
            (_e = !0),
            (qt = null),
            r !== null &&
              ((zt[Nt++] = Ar),
              (zt[Nt++] = Mr),
              (zt[Nt++] = Dn),
              (Ar = r.id),
              (Mr = r.overflow),
              (Dn = t)),
            (t = _f(t, t.pendingProps.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? ((n = Mv(e, t, n.children, n.fallback, r)),
        (o = t.child),
        (i = e.child.memoizedState),
        (o.memoizedState = i === null ? el(r) : Rv(i, r)),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ja),
        n)
      : ((r = Av(e, t, n.children, r)), (t.memoizedState = null), r);
  }
  return o
    ? ((n = Mv(e, t, n.children, n.fallback, r)),
      (o = t.child),
      (i = e.child.memoizedState),
      (o.memoizedState = i === null ? el(r) : Rv(i, r)),
      (o.childLanes = e.childLanes & ~r),
      (t.memoizedState = Ja),
      n)
    : ((r = Av(e, t, n.children, r)), (t.memoizedState = null), r);
}
function _f(e, t) {
  return (
    (t = hs({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Av(e, t, r, n) {
  var i = e.child;
  return (
    (e = i.sibling),
    (r = pn(i, { mode: 'visible', children: r })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r)
  );
}
function Mv(e, t, r, n, i) {
  var o = t.mode;
  e = e.child;
  var a = e.sibling,
    l = { mode: 'hidden', children: r };
  return (
    (o & 1) === 0 && t.child !== e
      ? ((r = t.child),
        (r.childLanes = 0),
        (r.pendingProps = l),
        (t.deletions = null))
      : ((r = pn(e, l)), (r.subtreeFlags = e.subtreeFlags & 14680064)),
    a !== null ? (n = pn(a, n)) : ((n = zn(n, o, i, null)), (n.flags |= 2)),
    (n.return = t),
    (r.return = t),
    (r.sibling = n),
    (t.child = r),
    n
  );
}
function tl(e, t, r, n) {
  return (
    n !== null && Gd(n),
    Li(t, e.child, null, r),
    (e = _f(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $v(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), mf(e.return, t, r);
}
function fc(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = r),
      (o.tailMode = i));
}
function By(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((lt(e, t, n.children, r), (n = Te.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $v(e, r, t);
        else if (e.tag === 19) $v(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((xe(Te, n), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && ls(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          fc(t, !1, i, r, o);
        break;
      case 'backwards':
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ls(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        fc(t, !0, r, null, o);
        break;
      case 'together':
        fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Lr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vn |= t.lanes),
    (r & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, r = pn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = pn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Ek(e, t, r) {
  switch (t.tag) {
    case 3:
      Fy(t), Ii();
      break;
    case 5:
      cy(t);
      break;
    case 1:
      mt(t.type) && ts(t);
      break;
    case 4:
      Kd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      xe(rs, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (xe(Te, Te.current & 1), (t.flags |= 128), null)
          : (r & t.child.childLanes) !== 0
          ? Dy(e, t, r)
          : (xe(Te, Te.current & 1),
            (e = Lr(e, t, r)),
            e !== null ? e.sibling : null);
      xe(Te, Te.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return By(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        xe(Te, Te.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zy(e, t, r);
  }
  return Lr(e, t, r);
}
function Tk(e, t) {
  switch ((Yd(t), t.tag)) {
    case 1:
      return (
        mt(t.type) && es(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zi(),
        we(vt),
        we(ot),
        Qd(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Xd(t), null;
    case 13:
      if (
        (we(Te), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Ii();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return we(Te), null;
    case 4:
      return zi(), null;
    case 10:
      return Wd(t.type._context), null;
    case 22:
    case 23:
      return lp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var rl = !1,
  it = !1,
  Pk = typeof WeakSet == 'function' ? WeakSet : Set,
  Y = null;
function pi(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null);
      } catch (n) {
        Ae(e, t, n);
      }
    else r.current = null;
}
function Ef(e, t, r) {
  try {
    r();
  } catch (n) {
    Ae(e, t, n);
  }
}
var Ov = !1;
function Rk(e, t) {
  if (((cf = Ql), (e = Yg()), Bd(e))) {
    if ('selectionStart' in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== r || (i !== 0 && f.nodeType !== 3) || (l = a + i),
                f !== o || (n !== 0 && f.nodeType !== 3) || (s = a + n),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === r && ++u === i && (l = a),
                d === o && ++c === n && (s = a),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          r = l === -1 || s === -1 ? null : { start: l, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (ff = { focusedElem: e, selectionRange: r }, Ql = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var h = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var x = h.memoizedProps,
                    w = h.memoizedState,
                    m = t.stateNode,
                    v = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Xt(t.type, x),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                if (g.nodeType === 1) g.textContent = '';
                else if (g.nodeType === 9) {
                  var S = g.body;
                  S != null && (S.textContent = '');
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (_) {
          Ae(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (h = Ov), (Ov = !1), h;
}
function wo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ef(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Ys(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Tf(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Vy(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[fr], delete t[Ko], delete t[hf], delete t[dk], delete t[pk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Iv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Jl));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Pf(e, t, r), e = e.sibling; e !== null; ) Pf(e, t, r), (e = e.sibling);
}
function Rf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Rf(e, t, r), e = e.sibling; e !== null; ) Rf(e, t, r), (e = e.sibling);
}
var Qe = null,
  Qt = !1;
function Br(e, t, r) {
  for (r = r.child; r !== null; ) Wy(e, t, r), (r = r.sibling);
}
function Wy(e, t, r) {
  if (hr && typeof hr.onCommitFiberUnmount == 'function')
    try {
      hr.onCommitFiberUnmount(Fs, r);
    } catch {}
  switch (r.tag) {
    case 5:
      it || pi(r, t);
    case 6:
      var n = Qe,
        i = Qt;
      (Qe = null),
        Br(e, t, r),
        (Qe = n),
        (Qt = i),
        Qe !== null &&
          (Qt
            ? ((e = Qe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Qe.removeChild(r.stateNode));
      break;
    case 18:
      Qe !== null &&
        (Qt
          ? ((e = Qe),
            (r = r.stateNode),
            e.nodeType === 8
              ? oc(e.parentNode, r)
              : e.nodeType === 1 && oc(e, r),
            Wo(e))
          : oc(Qe, r.stateNode));
      break;
    case 4:
      (n = Qe),
        (i = Qt),
        (Qe = r.stateNode.containerInfo),
        (Qt = !0),
        Br(e, t, r),
        (Qe = n),
        (Qt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !it &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ef(r, t, a),
            (i = i.next);
        } while (i !== n);
      }
      Br(e, t, r);
      break;
    case 1:
      if (
        !it &&
        (pi(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == 'function')
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (l) {
          Ae(r, t, l);
        }
      Br(e, t, r);
      break;
    case 21:
      Br(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((it = (n = it) || r.memoizedState !== null), Br(e, t, r), (it = n))
        : Br(e, t, r);
      break;
    default:
      Br(e, t, r);
  }
}
function Lv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Pk()),
      t.forEach(function (n) {
        var i = Fk.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function Ut(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var o = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Qe = l.stateNode), (Qt = !1);
              break e;
            case 3:
              (Qe = l.stateNode.containerInfo), (Qt = !0);
              break e;
            case 4:
              (Qe = l.stateNode.containerInfo), (Qt = !0);
              break e;
          }
          l = l.return;
        }
        if (Qe === null) throw Error(L(160));
        Wy(o, a, i), (Qe = null), (Qt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        Ae(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hy(t, e), (t = t.sibling);
}
function Hy(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ut(t, e), ir(e), n & 4)) {
        try {
          wo(3, e, e.return), Ys(3, e);
        } catch (h) {
          Ae(e, e.return, h);
        }
        try {
          wo(5, e, e.return);
        } catch (h) {
          Ae(e, e.return, h);
        }
      }
      break;
    case 1:
      Ut(t, e), ir(e), n & 512 && r !== null && pi(r, r.return);
      break;
    case 5:
      if (
        (Ut(t, e),
        ir(e),
        n & 512 && r !== null && pi(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Do(i, '');
        } catch (h) {
          Ae(e, e.return, h);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = r !== null ? r.memoizedProps : o,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && pg(i, o),
              Jc(l, a);
            var u = Jc(l, o);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                f = s[a + 1];
              c === 'style'
                ? yg(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? mg(i, f)
                : c === 'children'
                ? Do(i, f)
                : Td(i, c, f, u);
            }
            switch (l) {
              case 'input':
                Kc(i, o);
                break;
              case 'textarea':
                hg(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? yi(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yi(i, !!o.multiple, o.defaultValue, !0)
                      : yi(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Ko] = o;
          } catch (h) {
            Ae(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Ut(t, e), ir(e), n & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (u = e.stateNode), (c = e.memoizedProps);
        try {
          u.nodeValue = c;
        } catch (h) {
          Ae(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Ut(t, e), ir(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Wo(t.containerInfo);
        } catch (h) {
          Ae(e, e.return, h);
        }
      break;
    case 4:
      Ut(t, e), ir(e);
      break;
    case 13:
      Ut(t, e),
        ir(e),
        (u = e.child),
        u.flags & 8192 &&
          u.memoizedState !== null &&
          (u.alternate === null || u.alternate.memoizedState === null) &&
          (op = Ie()),
        n & 4 && Lv(e);
      break;
    case 22:
      if (
        ((u = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((it = (c = it) || u), Ut(t, e), (it = c)) : Ut(t, e),
        ir(e),
        n & 8192)
      ) {
        c = e.memoizedState !== null;
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (i = d.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = gg('display', a)));
              } catch (h) {
                Ae(e, e.return, h);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = c ? '' : d.memoizedProps;
              } catch (h) {
                Ae(e, e.return, h);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
        if (c && !u && (e.mode & 1) !== 0)
          for (Y = e, e = e.child; e !== null; ) {
            for (u = Y = e; Y !== null; ) {
              switch (((c = Y), (f = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wo(4, c, c.return);
                  break;
                case 1:
                  if (
                    (pi(c, c.return),
                    (o = c.stateNode),
                    typeof o.componentWillUnmount == 'function')
                  ) {
                    (d = c), (p = c.return);
                    try {
                      (i = d),
                        (o.props = i.memoizedProps),
                        (o.state = i.memoizedState),
                        o.componentWillUnmount();
                    } catch (h) {
                      Ae(d, p, h);
                    }
                  }
                  break;
                case 5:
                  pi(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Nv(u);
                    continue;
                  }
              }
              f !== null ? ((f.return = c), (Y = f)) : Nv(u);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      Ut(t, e), ir(e), n & 4 && Lv(e);
      break;
    case 21:
      break;
    default:
      Ut(t, e), ir(e);
  }
}
function ir(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (jy(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(L(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Do(i, ''), (n.flags &= -33));
          var o = Iv(e);
          Rf(e, o, i);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            l = Iv(e);
          Pf(e, l, a);
          break;
        default:
          throw Error(L(161));
      }
    } catch (s) {
      Ae(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ak(e, t, r) {
  (Y = e), Uy(e);
}
function Uy(e, t, r) {
  for (var n = (e.mode & 1) !== 0; Y !== null; ) {
    var i = Y,
      o = i.child;
    if (i.tag === 22 && n) {
      var a = i.memoizedState !== null || rl;
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || it;
        l = rl;
        var u = it;
        if (((rl = a), (it = s) && !u))
          for (Y = i; Y !== null; )
            (a = Y),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Fv(i)
                : s !== null
                ? ((s.return = a), (Y = s))
                : Fv(i);
        for (; o !== null; ) (Y = o), Uy(o), (o = o.sibling);
        (Y = i), (rl = l), (it = u);
      }
      zv(e);
    } else
      (i.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = i), (Y = o))
        : zv(e);
  }
}
function zv(e) {
  for (; Y !== null; ) {
    var t = Y;
    if ((t.flags & 8772) !== 0) {
      var r = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              it || Ys(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !it)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Xt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && hv(t, o, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                hv(t, a, r);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (r === null && t.flags & 4) {
                r = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && r.focus();
                    break;
                  case 'img':
                    s.src && (r.src = s.src);
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Wo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(L(163));
          }
        it || (t.flags & 512 && Tf(t));
      } catch (d) {
        Ae(t, t.return, d);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (Y = r);
      break;
    }
    Y = t.return;
  }
}
function Nv(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (Y = r);
      break;
    }
    Y = t.return;
  }
}
function Fv(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Ys(4, t);
          } catch (s) {
            Ae(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == 'function') {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              Ae(t, i, s);
            }
          }
          var o = t.return;
          try {
            Tf(t);
          } catch (s) {
            Ae(t, o, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Tf(t);
          } catch (s) {
            Ae(t, a, s);
          }
      }
    } catch (s) {
      Ae(t, t.return, s);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (Y = l);
      break;
    }
    Y = t.return;
  }
}
var Mk = Math.ceil,
  cs = Dr.ReactCurrentDispatcher,
  np = Dr.ReactCurrentOwner,
  Bt = Dr.ReactCurrentBatchConfig,
  ae = 0,
  He = null,
  De = null,
  Ze = 0,
  kt = 0,
  hi = mn(0),
  je = 0,
  ea = null,
  Vn = 0,
  Gs = 0,
  ip = 0,
  ko = null,
  dt = null,
  op = 0,
  Ni = 1 / 0,
  Er = null,
  fs = !1,
  Af = null,
  an = null,
  nl = !1,
  Zr = null,
  ds = 0,
  Co = 0,
  Mf = null,
  Ol = -1,
  Il = 0;
function st() {
  return (ae & 6) !== 0 ? Ie() : Ol !== -1 ? Ol : (Ol = Ie());
}
function ln(e) {
  return (e.mode & 1) === 0
    ? 1
    : (ae & 2) !== 0 && Ze !== 0
    ? Ze & -Ze
    : vk.transition !== null
    ? (Il === 0 && (Il = Ag()), Il)
    : ((e = he),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ng(e.type))),
      e);
}
function Vt(e, t, r) {
  if (50 < Co) throw ((Co = 0), (Mf = null), Error(L(185)));
  var n = Ks(e, t);
  return n === null
    ? null
    : (ya(n, t, r),
      ((ae & 2) === 0 || n !== He) &&
        (n === He && ((ae & 2) === 0 && (Gs |= t), je === 4 && Xr(n, Ze)),
        gt(n, r),
        t === 1 &&
          ae === 0 &&
          (e.mode & 1) === 0 &&
          ((Ni = Ie() + 500), Ws && gn())),
      n);
}
function Ks(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
function Yy(e) {
  return (He !== null || Jt !== null) && (e.mode & 1) !== 0 && (ae & 2) === 0;
}
function gt(e, t) {
  var r = e.callbackNode;
  v2(e, t);
  var n = Xl(e, e === He ? Ze : 0);
  if (n === 0)
    r !== null && Hh(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Hh(r), t === 1))
      e.tag === 0 ? hk(Dv.bind(null, e)) : ry(Dv.bind(null, e)),
        ck(function () {
          ae === 0 && gn();
        }),
        (r = null);
    else {
      switch (Mg(n)) {
        case 1:
          r = $d;
          break;
        case 4:
          r = Pg;
          break;
        case 16:
          r = Kl;
          break;
        case 536870912:
          r = Rg;
          break;
        default:
          r = Kl;
      }
      r = e1(r, Gy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Gy(e, t) {
  if (((Ol = -1), (Il = 0), (ae & 6) !== 0)) throw Error(L(327));
  var r = e.callbackNode;
  if (ki() && e.callbackNode !== r) return null;
  var n = Xl(e, e === He ? Ze : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = ps(e, n);
  else {
    t = n;
    var i = ae;
    ae |= 2;
    var o = Xy();
    (He !== e || Ze !== t) && ((Er = null), (Ni = Ie() + 500), Ln(e, t));
    do
      try {
        Ik();
        break;
      } catch (l) {
        Ky(e, l);
      }
    while (1);
    jd(),
      (cs.current = o),
      (ae = i),
      De !== null ? (t = 0) : ((He = null), (Ze = 0), (t = je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = of(e)), i !== 0 && ((n = i), (t = $f(e, i)))), t === 1)
    )
      throw ((r = ea), Ln(e, 0), Xr(e, n), gt(e, Ie()), r);
    if (t === 6) Xr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        (n & 30) === 0 &&
          !$k(i) &&
          ((t = ps(e, n)),
          t === 2 && ((o = of(e)), o !== 0 && ((n = o), (t = $f(e, o)))),
          t === 1))
      )
        throw ((r = ea), Ln(e, 0), Xr(e, n), gt(e, Ie()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          En(e, dt, Er);
          break;
        case 3:
          if (
            (Xr(e, n), (n & 130023424) === n && ((t = op + 500 - Ie()), 10 < t))
          ) {
            if (Xl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              st(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = pf(En.bind(null, e, dt, Er), t);
            break;
          }
          En(e, dt, Er);
          break;
        case 4:
          if ((Xr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var a = 31 - er(n);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (n &= ~o);
          }
          if (
            ((n = i),
            (n = Ie() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * Mk(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = pf(En.bind(null, e, dt, Er), n);
            break;
          }
          En(e, dt, Er);
          break;
        case 5:
          En(e, dt, Er);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return gt(e, Ie()), e.callbackNode === r ? Gy.bind(null, e) : null;
}
function $f(e, t) {
  var r = ko;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = ps(e, t)),
    e !== 2 && ((t = dt), (dt = r), t !== null && Of(t)),
    e
  );
}
function Of(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function $k(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!rr(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Xr(e, t) {
  for (
    t &= ~ip,
      t &= ~Gs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - er(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Dv(e) {
  if ((ae & 6) !== 0) throw Error(L(327));
  ki();
  var t = Xl(e, 0);
  if ((t & 1) === 0) return gt(e, Ie()), null;
  var r = ps(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = of(e);
    n !== 0 && ((t = n), (r = $f(e, n)));
  }
  if (r === 1) throw ((r = ea), Ln(e, 0), Xr(e, t), gt(e, Ie()), r);
  if (r === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, dt, Er),
    gt(e, Ie()),
    null
  );
}
function ap(e, t) {
  var r = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = r), ae === 0 && ((Ni = Ie() + 500), Ws && gn());
  }
}
function jn(e) {
  Zr !== null && Zr.tag === 0 && (ae & 6) === 0 && ki();
  var t = ae;
  ae |= 1;
  var r = Bt.transition,
    n = he;
  try {
    if (((Bt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = n), (Bt.transition = r), (ae = t), (ae & 6) === 0 && gn();
  }
}
function lp() {
  (kt = hi.current), we(hi);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), uk(r)), De !== null))
    for (r = De.return; r !== null; ) {
      var n = r;
      switch ((Yd(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && es();
          break;
        case 3:
          zi(), we(vt), we(ot), Qd();
          break;
        case 5:
          Xd(n);
          break;
        case 4:
          zi();
          break;
        case 13:
          we(Te);
          break;
        case 19:
          we(Te);
          break;
        case 10:
          Wd(n.type._context);
          break;
        case 22:
        case 23:
          lp();
      }
      r = r.return;
    }
  if (
    ((He = e),
    (De = e = pn(e.current, null)),
    (Ze = kt = t),
    (je = 0),
    (ea = null),
    (ip = Gs = Vn = 0),
    (dt = ko = null),
    Jt !== null)
  ) {
    for (t = 0; t < Jt.length; t++)
      if (((r = Jt[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          o = r.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (n.next = a);
        }
        r.pending = n;
      }
    Jt = null;
  }
  return e;
}
function Ky(e, t) {
  do {
    var r = De;
    try {
      if ((jd(), (Ml.current = us), ss)) {
        for (var n = Pe.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        ss = !1;
      }
      if (
        ((Bn = 0),
        (Ue = Ve = Pe = null),
        (So = !1),
        (Zo = 0),
        (np.current = null),
        r === null || r.return === null)
      ) {
        (je = 1), (ea = t), (De = null);
        break;
      }
      e: {
        var o = e,
          a = r.return,
          l = r,
          s = t;
        if (
          ((t = Ze),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            c = l,
            f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = kv(a);
          if (p !== null) {
            (p.flags &= -257),
              Cv(p, a, l, o, t),
              p.mode & 1 && wv(o, u, t),
              (t = p),
              (s = u);
            var h = t.updateQueue;
            if (h === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else h.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              wv(o, u, t), sp();
              break e;
            }
            s = Error(L(426));
          }
        } else if (_e && l.mode & 1) {
          var w = kv(a);
          if (w !== null) {
            (w.flags & 65536) === 0 && (w.flags |= 256),
              Cv(w, a, l, o, t),
              Gd(s);
            break e;
          }
        }
        (o = s),
          je !== 4 && (je = 2),
          ko === null ? (ko = [o]) : ko.push(o),
          (s = rp(s, l)),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = Ay(l, s, t);
              pv(l, m);
              break e;
            case 1:
              o = s;
              var v = l.type,
                g = l.stateNode;
              if (
                (l.flags & 128) === 0 &&
                (typeof v.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (an === null || !an.has(g))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = My(l, o, t);
                pv(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Zy(r);
    } catch (_) {
      (t = _), De === r && r !== null && (De = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function Xy() {
  var e = cs.current;
  return (cs.current = us), e === null ? us : e;
}
function sp() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    He === null ||
      ((Vn & 268435455) === 0 && (Gs & 268435455) === 0) ||
      Xr(He, Ze);
}
function ps(e, t) {
  var r = ae;
  ae |= 2;
  var n = Xy();
  (He !== e || Ze !== t) && ((Er = null), Ln(e, t));
  do
    try {
      Ok();
      break;
    } catch (i) {
      Ky(e, i);
    }
  while (1);
  if ((jd(), (ae = r), (cs.current = n), De !== null)) throw Error(L(261));
  return (He = null), (Ze = 0), je;
}
function Ok() {
  for (; De !== null; ) Qy(De);
}
function Ik() {
  for (; De !== null && !a2(); ) Qy(De);
}
function Qy(e) {
  var t = Jy(e.alternate, e, kt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Zy(e) : (De = t),
    (np.current = null);
}
function Zy(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((r = Ck(r, t, kt)), r !== null)) {
        De = r;
        return;
      }
    } else {
      if (((r = Tk(r, t)), r !== null)) {
        (r.flags &= 32767), (De = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (De = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function En(e, t, r) {
  var n = he,
    i = Bt.transition;
  try {
    (Bt.transition = null), (he = 1), Lk(e, t, r, n);
  } finally {
    (Bt.transition = i), (he = n);
  }
  return null;
}
function Lk(e, t, r, n) {
  do ki();
  while (Zr !== null);
  if ((ae & 6) !== 0) throw Error(L(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (m2(e, o),
    e === He && ((De = He = null), (Ze = 0)),
    ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
      nl ||
      ((nl = !0),
      e1(Kl, function () {
        return ki(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    (r.subtreeFlags & 15990) !== 0 || o)
  ) {
    (o = Bt.transition), (Bt.transition = null);
    var a = he;
    he = 1;
    var l = ae;
    (ae |= 4),
      (np.current = null),
      Rk(e, r),
      Hy(r, e),
      rk(ff),
      (Ql = !!cf),
      (ff = cf = null),
      (e.current = r),
      Ak(r),
      l2(),
      (ae = l),
      (he = a),
      (Bt.transition = o);
  } else e.current = r;
  if (
    (nl && ((nl = !1), (Zr = e), (ds = i)),
    (o = e.pendingLanes),
    o === 0 && (an = null),
    c2(r.stateNode),
    gt(e, Ie()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++) n(t[r]);
  if (fs) throw ((fs = !1), (e = Af), (Af = null), e);
  return (
    (ds & 1) !== 0 && e.tag !== 0 && ki(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === Mf ? Co++ : ((Co = 0), (Mf = e))) : (Co = 0),
    gn(),
    null
  );
}
function ki() {
  if (Zr !== null) {
    var e = Mg(ds),
      t = Bt.transition,
      r = he;
    try {
      if (((Bt.transition = null), (he = 16 > e ? 16 : e), Zr === null))
        var n = !1;
      else {
        if (((e = Zr), (Zr = null), (ds = 0), (ae & 6) !== 0))
          throw Error(L(331));
        var i = ae;
        for (ae |= 4, Y = e.current; Y !== null; ) {
          var o = Y,
            a = o.child;
          if ((Y.flags & 16) !== 0) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (Y = u; Y !== null; ) {
                  var c = Y;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wo(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (Y = f);
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var d = c.sibling,
                        p = c.return;
                      if ((Vy(c), c === u)) {
                        Y = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (Y = d);
                        break;
                      }
                      Y = p;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var x = h.child;
                if (x !== null) {
                  h.child = null;
                  do {
                    var w = x.sibling;
                    (x.sibling = null), (x = w);
                  } while (x !== null);
                }
              }
              Y = o;
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = o), (Y = a);
          else
            e: for (; Y !== null; ) {
              if (((o = Y), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wo(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (Y = m);
                break e;
              }
              Y = o.return;
            }
        }
        var v = e.current;
        for (Y = v; Y !== null; ) {
          a = Y;
          var g = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && g !== null)
            (g.return = a), (Y = g);
          else
            e: for (a = v; Y !== null; ) {
              if (((l = Y), (l.flags & 2048) !== 0))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ys(9, l);
                  }
                } catch (_) {
                  Ae(l, l.return, _);
                }
              if (l === a) {
                Y = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (Y = S);
                break e;
              }
              Y = l.return;
            }
        }
        if (
          ((ae = i), gn(), hr && typeof hr.onPostCommitFiberRoot == 'function')
        )
          try {
            hr.onPostCommitFiberRoot(Fs, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (he = r), (Bt.transition = t);
    }
  }
  return !1;
}
function Bv(e, t, r) {
  (t = rp(r, t)),
    (t = Ay(e, t, 1)),
    on(e, t),
    (t = st()),
    (e = Ks(e, 1)),
    e !== null && (ya(e, 1, t), gt(e, t));
}
function Ae(e, t, r) {
  if (e.tag === 3) Bv(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bv(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' &&
            (an === null || !an.has(n)))
        ) {
          (e = rp(r, e)),
            (e = My(t, e, 1)),
            on(t, e),
            (e = st()),
            (t = Ks(t, 1)),
            t !== null && (ya(t, 1, e), gt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zk(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = st()),
    (e.pingedLanes |= e.suspendedLanes & r),
    He === e &&
      (Ze & r) === r &&
      (je === 4 || (je === 3 && (Ze & 130023424) === Ze && 500 > Ie() - op)
        ? Ln(e, 0)
        : (ip |= r)),
    gt(e, t);
}
function qy(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Ya), (Ya <<= 1), (Ya & 130023424) === 0 && (Ya = 4194304)));
  var r = st();
  (e = Ks(e, t)), e !== null && (ya(e, t, r), gt(e, r));
}
function Nk(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), qy(e, r);
}
function Fk(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  n !== null && n.delete(t), qy(e, r);
}
var Jy;
Jy = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || vt.current) ht = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
        return (ht = !1), Ek(e, t, r);
      ht = (e.flags & 131072) !== 0;
    }
  else (ht = !1), _e && (t.flags & 1048576) !== 0 && ay(t, as, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps);
      var i = Oi(t, ot.current);
      wi(t, r), (i = qd(null, t, n, e, i, r));
      var o = Jd();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mt(n) ? ((o = !0), ts(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Hd(t),
            (i.updater = Hs),
            (t.stateNode = i),
            (i._reactInternals = t),
            yf(t, n, e, r),
            (t = Cf(null, t, n, !0, o, r)))
          : ((t.tag = 0), _e && o && Ud(t), lt(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = Bk(n)),
          (e = Xt(n, e)),
          i)
        ) {
          case 0:
            t = kf(null, t, n, e, r);
            break e;
          case 1:
            t = Tv(null, t, n, e, r);
            break e;
          case 11:
            t = _v(null, t, n, e, r);
            break e;
          case 14:
            t = Ev(null, t, n, Xt(n.type, e), r);
            break e;
        }
        throw Error(L(306, n, ''));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        kf(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        Tv(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((Fy(t), e === null)) throw Error(L(387));
        (n = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ny(e, t),
          is(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Error(L(423))), (t = Pv(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Error(L(424))), (t = Pv(e, t, n, r, i));
            break e;
          } else
            for (
              pt = Rr(t.stateNode.containerInfo.firstChild),
                Et = t,
                _e = !0,
                qt = null,
                r = uy(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Ii(), n === i)) {
            t = Lr(e, t, r);
            break e;
          }
          lt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cy(t),
        e === null && bf(t),
        (n = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        df(n, i) ? (a = null) : o !== null && df(n, o) && (t.flags |= 32),
        Ny(e, t),
        lt(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && bf(t), null;
    case 13:
      return Dy(e, t, r);
    case 4:
      return (
        Kd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Li(t, null, n, r)) : lt(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        _v(e, t, n, i, r)
      );
    case 7:
      return lt(e, t, t.pendingProps, r), t.child;
    case 8:
      return lt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return lt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          xe(rs, n._currentValue),
          (n._currentValue = a),
          o !== null)
        )
          if (rr(o.value, a)) {
            if (o.children === i.children && !vt.current) {
              t = Lr(e, t, r);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (o.tag === 1) {
                      (s = $r(-1, r & -r)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= r),
                      (s = o.alternate),
                      s !== null && (s.lanes |= r),
                      mf(o.return, r, t),
                      (l.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(L(341));
                (a.lanes |= r),
                  (l = a.alternate),
                  l !== null && (l.lanes |= r),
                  mf(a, r, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        lt(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        wi(t, r),
        (i = Wt(i)),
        (n = n(i)),
        (t.flags |= 1),
        lt(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = Xt(n, t.pendingProps)),
        (i = Xt(n.type, i)),
        Ev(e, t, n, i, r)
      );
    case 15:
      return Ly(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        mt(n) ? ((e = !0), ts(t)) : (e = !1),
        wi(t, r),
        oy(t, n, i),
        yf(t, n, i, r),
        Cf(null, t, n, !0, e, r)
      );
    case 19:
      return By(e, t, r);
    case 22:
      return zy(e, t, r);
  }
  throw Error(L(156, t.tag));
};
function e1(e, t) {
  return Tg(e, t);
}
function Dk(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ft(e, t, r, n) {
  return new Dk(e, t, r, n);
}
function up(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bk(e) {
  if (typeof e == 'function') return up(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Rd)) return 11;
    if (e === Ad) return 14;
  }
  return 2;
}
function pn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ft(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Ll(e, t, r, n, i, o) {
  var a = 2;
  if (((n = e), typeof e == 'function')) up(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case ii:
        return zn(r.children, i, o, t);
      case Pd:
        (a = 8), (i |= 8);
        break;
      case Wc:
        return (
          (e = Ft(12, r, t, i | 2)), (e.elementType = Wc), (e.lanes = o), e
        );
      case Hc:
        return (e = Ft(13, r, t, i)), (e.elementType = Hc), (e.lanes = o), e;
      case Uc:
        return (e = Ft(19, r, t, i)), (e.elementType = Uc), (e.lanes = o), e;
      case cg:
        return hs(r, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case sg:
              a = 10;
              break e;
            case ug:
              a = 9;
              break e;
            case Rd:
              a = 11;
              break e;
            case Ad:
              a = 14;
              break e;
            case Yr:
              (a = 16), (n = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ft(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
  );
}
function zn(e, t, r, n) {
  return (e = Ft(7, e, n, t)), (e.lanes = r), e;
}
function hs(e, t, r, n) {
  return (
    (e = Ft(22, e, n, t)),
    (e.elementType = cg),
    (e.lanes = r),
    (e.stateNode = {}),
    e
  );
}
function dc(e, t, r) {
  return (e = Ft(6, e, null, t)), (e.lanes = r), e;
}
function pc(e, t, r) {
  return (
    (t = Ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Vk(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ku(0)),
    (this.expirationTimes = Ku(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ku(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function cp(e, t, r, n, i, o, a, l, s) {
  return (
    (e = new Vk(e, t, r, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ft(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hd(o),
    e
  );
}
function jk(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ni,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function t1(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Gn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (mt(r)) return ty(e, r, t);
  }
  return t;
}
function r1(e, t, r, n, i, o, a, l, s) {
  return (
    (e = cp(r, n, !0, e, i, o, a, l, s)),
    (e.context = t1(null)),
    (r = e.current),
    (n = st()),
    (i = ln(r)),
    (o = $r(n, i)),
    (o.callback = t != null ? t : null),
    on(r, o),
    (e.current.lanes = i),
    ya(e, i, n),
    gt(e, n),
    e
  );
}
function Xs(e, t, r, n) {
  var i = t.current,
    o = st(),
    a = ln(i);
  return (
    (r = t1(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = $r(o, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    on(i, t),
    (e = Vt(i, a, o)),
    e !== null && Al(e, i, a),
    a
  );
}
function vs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function fp(e, t) {
  Vv(e, t), (e = e.alternate) && Vv(e, t);
}
function Wk() {
  return null;
}
var n1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function dp(e) {
  this._internalRoot = e;
}
Qs.prototype.render = dp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Xs(e, t, null, null);
};
Qs.prototype.unmount = dp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function () {
      Xs(null, e, null, null);
    }),
      (t[Ir] = null);
  }
};
function Qs(e) {
  this._internalRoot = e;
}
Qs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ig();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Kr.length && t !== 0 && t < Kr[r].priority; r++);
    Kr.splice(r, 0, e), r === 0 && zg(e);
  }
};
function pp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function jv() {}
function Hk(e, t, r, n, i) {
  if (i) {
    if (typeof n == 'function') {
      var o = n;
      n = function () {
        var u = vs(a);
        o.call(u);
      };
    }
    var a = r1(t, n, e, 0, null, !1, !1, '', jv);
    return (
      (e._reactRootContainer = a),
      (e[Ir] = a.current),
      Yo(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == 'function') {
    var l = n;
    n = function () {
      var u = vs(s);
      l.call(u);
    };
  }
  var s = cp(e, 0, !1, null, null, !1, !1, '', jv);
  return (
    (e._reactRootContainer = s),
    (e[Ir] = s.current),
    Yo(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Xs(t, s, r, n);
    }),
    s
  );
}
function qs(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var s = vs(a);
        l.call(s);
      };
    }
    Xs(t, a, e, i);
  } else a = Hk(r, t, e, i, n);
  return vs(a);
}
$g = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = po(t.pendingLanes);
        r !== 0 &&
          (Od(t, r | 1),
          gt(t, Ie()),
          (ae & 6) === 0 && ((Ni = Ie() + 500), gn()));
      }
      break;
    case 13:
      var n = st();
      jn(function () {
        return Vt(e, 1, n);
      }),
        fp(e, 1);
  }
};
Id = function (e) {
  if (e.tag === 13) {
    var t = st();
    Vt(e, 134217728, t), fp(e, 134217728);
  }
};
Og = function (e) {
  if (e.tag === 13) {
    var t = st(),
      r = ln(e);
    Vt(e, r, t), fp(e, r);
  }
};
Ig = function () {
  return he;
};
Lg = function (e, t) {
  var r = he;
  try {
    return (he = e), t();
  } finally {
    he = r;
  }
};
tf = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((Kc(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = js(n);
            if (!i) throw Error(L(90));
            dg(n), Kc(n, i);
          }
        }
      }
      break;
    case 'textarea':
      hg(e, r);
      break;
    case 'select':
      (t = r.value), t != null && yi(e, !!r.multiple, t, !1);
  }
};
Sg = ap;
wg = jn;
var Uk = { usingClientEntryPoint: !1, Events: [ba, si, js, xg, bg, ap] },
  ao = {
    findFiberByHostInstance: Rn,
    bundleType: 0,
    version: '18.1.0',
    rendererPackageName: 'react-dom',
  },
  Yk = {
    bundleType: ao.bundleType,
    version: ao.version,
    rendererPackageName: ao.rendererPackageName,
    rendererConfig: ao.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _g(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ao.findFiberByHostInstance || Wk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.1.0-next-22edb9f77-20220426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
  var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!il.isDisabled && il.supportsFiber)
    try {
      (Fs = il.inject(Yk)), (hr = il);
    } catch {}
}
Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uk;
Rt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pp(t)) throw Error(L(200));
  return jk(e, t, null, r);
};
Rt.createRoot = function (e, t) {
  if (!pp(e)) throw Error(L(299));
  var r = !1,
    n = '',
    i = n1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cp(e, 1, !1, null, null, r, !1, n, i)),
    (e[Ir] = t.current),
    Yo(e.nodeType === 8 ? e.parentNode : e),
    new dp(t)
  );
};
Rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(L(188))
      : ((e = Object.keys(e).join(',')), Error(L(268, e)));
  return (e = _g(t)), (e = e === null ? null : e.stateNode), e;
};
Rt.flushSync = function (e) {
  return jn(e);
};
Rt.hydrate = function (e, t, r) {
  if (!Zs(t)) throw Error(L(200));
  return qs(null, e, t, !0, r);
};
Rt.hydrateRoot = function (e, t, r) {
  if (!pp(e)) throw Error(L(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    o = '',
    a = n1;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = r1(t, null, e, 1, r != null ? r : null, i, !1, o, a)),
    (e[Ir] = t.current),
    Yo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Qs(t);
};
Rt.render = function (e, t, r) {
  if (!Zs(t)) throw Error(L(200));
  return qs(null, e, t, !1, r);
};
Rt.unmountComponentAtNode = function (e) {
  if (!Zs(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (jn(function () {
        qs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ir] = null);
        });
      }),
      !0)
    : !1;
};
Rt.unstable_batchedUpdates = ap;
Rt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Zs(r)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return qs(e, t, r, !1, n);
};
Rt.version = '18.1.0-next-22edb9f77-20220426';
function i1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i1);
    } catch (e) {
      console.error(e);
    }
}
i1(), (Ns.exports = Rt);
var o1,
  Gk = Ns.exports;
o1 = Gk.createRoot;
function Fi() {
  return (
    (Fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fi.apply(this, arguments)
  );
}
var Mn;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Mn || (Mn = {}));
var Wv = function (e) {
    return e;
  },
  Hv = 'beforeunload',
  Kk = 'hashchange',
  Xk = 'popstate';
function Qk(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.window,
    n = r === void 0 ? document.defaultView : r,
    i = n.history;
  function o() {
    var E = hn(n.location.hash.substr(1)),
      R = E.pathname,
      M = R === void 0 ? '/' : R,
      K = E.search,
      J = K === void 0 ? '' : K,
      B = E.hash,
      N = B === void 0 ? '' : B,
      I = i.state || {};
    return [
      I.idx,
      Wv({
        pathname: M,
        search: J,
        hash: N,
        state: I.usr || null,
        key: I.key || 'default',
      }),
    ];
  }
  var a = null;
  function l() {
    if (a) p.call(a), (a = null);
    else {
      var E = Mn.Pop,
        R = o(),
        M = R[0],
        K = R[1];
      if (p.length) {
        if (M != null) {
          var J = c - M;
          J &&
            ((a = {
              action: E,
              location: K,
              retry: function () {
                P(J * -1);
              },
            }),
            P(J));
        }
      } else g(E);
    }
  }
  n.addEventListener(Xk, l),
    n.addEventListener(Kk, function () {
      var E = o(),
        R = E[1];
      _o(R) !== _o(f) && l();
    });
  var s = Mn.Pop,
    u = o(),
    c = u[0],
    f = u[1],
    d = Yv(),
    p = Yv();
  c == null && ((c = 0), i.replaceState(Fi({}, i.state, { idx: c }), ''));
  function h() {
    var E = document.querySelector('base'),
      R = '';
    if (E && E.getAttribute('href')) {
      var M = n.location.href,
        K = M.indexOf('#');
      R = K === -1 ? M : M.slice(0, K);
    }
    return R;
  }
  function x(E) {
    return h() + '#' + (typeof E == 'string' ? E : _o(E));
  }
  function w(E, R) {
    return (
      R === void 0 && (R = null),
      Wv(
        Fi(
          { pathname: f.pathname, hash: '', search: '' },
          typeof E == 'string' ? hn(E) : E,
          { state: R, key: Zk() }
        )
      )
    );
  }
  function m(E, R) {
    return [{ usr: E.state, key: E.key, idx: R }, x(E)];
  }
  function v(E, R, M) {
    return !p.length || (p.call({ action: E, location: R, retry: M }), !1);
  }
  function g(E) {
    s = E;
    var R = o();
    (c = R[0]), (f = R[1]), d.call({ action: s, location: f });
  }
  function S(E, R) {
    var M = Mn.Push,
      K = w(E, R);
    function J() {
      S(E, R);
    }
    if (v(M, K, J)) {
      var B = m(K, c + 1),
        N = B[0],
        I = B[1];
      try {
        i.pushState(N, '', I);
      } catch {
        n.location.assign(I);
      }
      g(M);
    }
  }
  function _(E, R) {
    var M = Mn.Replace,
      K = w(E, R);
    function J() {
      _(E, R);
    }
    if (v(M, K, J)) {
      var B = m(K, c),
        N = B[0],
        I = B[1];
      i.replaceState(N, '', I), g(M);
    }
  }
  function P(E) {
    i.go(E);
  }
  var T = {
    get action() {
      return s;
    },
    get location() {
      return f;
    },
    createHref: x,
    push: S,
    replace: _,
    go: P,
    back: function () {
      P(-1);
    },
    forward: function () {
      P(1);
    },
    listen: function (R) {
      return d.push(R);
    },
    block: function (R) {
      var M = p.push(R);
      return (
        p.length === 1 && n.addEventListener(Hv, Uv),
        function () {
          M(), p.length || n.removeEventListener(Hv, Uv);
        }
      );
    },
  };
  return T;
}
function Uv(e) {
  e.preventDefault(), (e.returnValue = '');
}
function Yv() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (r) {
      return (
        e.push(r),
        function () {
          e = e.filter(function (n) {
            return n !== r;
          });
        }
      );
    },
    call: function (r) {
      e.forEach(function (n) {
        return n && n(r);
      });
    },
  };
}
function Zk() {
  return Math.random().toString(36).substr(2, 8);
}
function _o(e) {
  var t = e.pathname,
    r = t === void 0 ? '/' : t,
    n = e.search,
    i = n === void 0 ? '' : n,
    o = e.hash,
    a = o === void 0 ? '' : o;
  return (
    i && i !== '?' && (r += i.charAt(0) === '?' ? i : '?' + i),
    a && a !== '#' && (r += a.charAt(0) === '#' ? a : '#' + a),
    r
  );
}
function hn(e) {
  var t = {};
  if (e) {
    var r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    var n = e.indexOf('?');
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const hp = y.exports.createContext(null),
  vp = y.exports.createContext(null),
  wa = y.exports.createContext({ outlet: null, matches: [] });
function xr(e, t) {
  if (!e) throw new Error(t);
}
function qk(e, t, r) {
  r === void 0 && (r = '/');
  let n = typeof t == 'string' ? hn(t) : t,
    i = s1(n.pathname || '/', r);
  if (i == null) return null;
  let o = a1(e);
  Jk(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) a = sC(o[l], i);
  return a;
}
function a1(e, t, r, n) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = ''),
    e.forEach((i, o) => {
      let a = {
        relativePath: i.path || '',
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: o,
        route: i,
      };
      a.relativePath.startsWith('/') &&
        (a.relativePath.startsWith(n) || xr(!1),
        (a.relativePath = a.relativePath.slice(n.length)));
      let l = sn([n, a.relativePath]),
        s = r.concat(a);
      i.children &&
        i.children.length > 0 &&
        (i.index === !0 && xr(!1), a1(i.children, t, s, l)),
        !(i.path == null && !i.index) &&
          t.push({ path: l, score: aC(l, i.index), routesMeta: s });
    }),
    t
  );
}
function Jk(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : lC(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const eC = /^:\w+$/,
  tC = 3,
  rC = 2,
  nC = 1,
  iC = 10,
  oC = -2,
  Gv = (e) => e === '*';
function aC(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Gv) && (n += oC),
    t && (n += rC),
    r
      .filter((i) => !Gv(i))
      .reduce((i, o) => i + (eC.test(o) ? tC : o === '' ? nC : iC), n)
  );
}
function lC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sC(e, t) {
  let { routesMeta: r } = e,
    n = {},
    i = '/',
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      s = a === r.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = uC(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(n, c.params);
    let f = l.route;
    o.push({
      params: n,
      pathname: sn([i, c.pathname]),
      pathnameBase: u1(sn([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (i = sn([i, c.pathnameBase]));
  }
  return o;
}
function uC(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = cC(e.path, e.caseSensitive, e.end),
    i = t.match(r);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, '$1'),
    l = i.slice(1);
  return {
    params: n.reduce((u, c, f) => {
      if (c === '*') {
        let d = l[f] || '';
        a = o.slice(0, o.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (u[c] = fC(l[f] || '')), u;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function cC(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0);
  let n = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (a, l) => (n.push(l), '([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (n.push('*'),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : (i += r ? '\\/*$' : '(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
    [new RegExp(i, t ? void 0 : 'i'), n]
  );
}
function fC(e, t) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function dC(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: i = '',
  } = typeof e == 'string' ? hn(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : pC(r, t)) : t,
    search: vC(n),
    hash: mC(i),
  };
}
function pC(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? r.length > 1 && r.pop() : i !== '.' && r.push(i);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function l1(e, t, r) {
  let n = typeof e == 'string' ? hn(e) : e,
    i = e === '' || n.pathname === '' ? '/' : n.pathname,
    o;
  if (i == null) o = r;
  else {
    let l = t.length - 1;
    if (i.startsWith('..')) {
      let s = i.split('/');
      for (; s[0] === '..'; ) s.shift(), (l -= 1);
      n.pathname = s.join('/');
    }
    o = l >= 0 ? t[l] : '/';
  }
  let a = dC(n, o);
  return (
    i &&
      i !== '/' &&
      i.endsWith('/') &&
      !a.pathname.endsWith('/') &&
      (a.pathname += '/'),
    a
  );
}
function hC(e) {
  return e === '' || e.pathname === ''
    ? '/'
    : typeof e == 'string'
    ? hn(e).pathname
    : e.pathname;
}
function s1(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = e.charAt(t.length);
  return r && r !== '/' ? null : e.slice(t.length) || '/';
}
const sn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  u1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  vC = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  mC = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function gC(e) {
  ka() || xr(!1);
  let { basename: t, navigator: r } = y.exports.useContext(hp),
    { hash: n, pathname: i, search: o } = c1(e),
    a = i;
  if (t !== '/') {
    let l = hC(e),
      s = l != null && l.endsWith('/');
    a = i === '/' ? t + (s ? '/' : '') : sn([t, i]);
  }
  return r.createHref({ pathname: a, search: o, hash: n });
}
function ka() {
  return y.exports.useContext(vp) != null;
}
function Js() {
  return ka() || xr(!1), y.exports.useContext(vp).location;
}
function yC() {
  ka() || xr(!1);
  let { basename: e, navigator: t } = y.exports.useContext(hp),
    { matches: r } = y.exports.useContext(wa),
    { pathname: n } = Js(),
    i = JSON.stringify(r.map((l) => l.pathnameBase)),
    o = y.exports.useRef(!1);
  return (
    y.exports.useEffect(() => {
      o.current = !0;
    }),
    y.exports.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof l == 'number') {
          t.go(l);
          return;
        }
        let u = l1(l, JSON.parse(i), n);
        e !== '/' && (u.pathname = sn([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state);
      },
      [e, t, i, n]
    )
  );
}
function xC() {
  let { matches: e } = y.exports.useContext(wa),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function c1(e) {
  let { matches: t } = y.exports.useContext(wa),
    { pathname: r } = Js(),
    n = JSON.stringify(t.map((i) => i.pathnameBase));
  return y.exports.useMemo(() => l1(e, JSON.parse(n), r), [e, n, r]);
}
function bC(e, t) {
  ka() || xr(!1);
  let { matches: r } = y.exports.useContext(wa),
    n = r[r.length - 1],
    i = n ? n.params : {};
  n && n.pathname;
  let o = n ? n.pathnameBase : '/';
  n && n.route;
  let a = Js(),
    l;
  if (t) {
    var s;
    let d = typeof t == 'string' ? hn(t) : t;
    o === '/' ||
      ((s = d.pathname) == null ? void 0 : s.startsWith(o)) ||
      xr(!1),
      (l = d);
  } else l = a;
  let u = l.pathname || '/',
    c = o === '/' ? u : u.slice(o.length) || '/',
    f = qk(e, { pathname: c });
  return SC(
    f &&
      f.map((d) =>
        Object.assign({}, d, {
          params: Object.assign({}, i, d.params),
          pathname: sn([o, d.pathname]),
          pathnameBase: d.pathnameBase === '/' ? o : sn([o, d.pathnameBase]),
        })
      ),
    r
  );
}
function SC(e, t) {
  return (
    t === void 0 && (t = []),
    e == null
      ? null
      : e.reduceRight(
          (r, n, i) =>
            y.exports.createElement(wa.Provider, {
              children: n.route.element !== void 0 ? n.route.element : r,
              value: { outlet: r, matches: t.concat(e.slice(0, i + 1)) },
            }),
          null
        )
  );
}
function zl(e) {
  xr(!1);
}
function wC(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: i = Mn.Pop,
    navigator: o,
    static: a = !1,
  } = e;
  ka() && xr(!1);
  let l = u1(t),
    s = y.exports.useMemo(
      () => ({ basename: l, navigator: o, static: a }),
      [l, o, a]
    );
  typeof n == 'string' && (n = hn(n));
  let {
      pathname: u = '/',
      search: c = '',
      hash: f = '',
      state: d = null,
      key: p = 'default',
    } = n,
    h = y.exports.useMemo(() => {
      let x = s1(u, l);
      return x == null
        ? null
        : { pathname: x, search: c, hash: f, state: d, key: p };
    }, [l, u, c, f, d, p]);
  return h == null
    ? null
    : y.exports.createElement(
        hp.Provider,
        { value: s },
        y.exports.createElement(vp.Provider, {
          children: r,
          value: { location: h, navigationType: i },
        })
      );
}
function kC(e) {
  let { children: t, location: r } = e;
  return bC(If(t), r);
}
function If(e) {
  let t = [];
  return (
    y.exports.Children.forEach(e, (r) => {
      if (!y.exports.isValidElement(r)) return;
      if (r.type === y.exports.Fragment) {
        t.push.apply(t, If(r.props.children));
        return;
      }
      r.type !== zl && xr(!1);
      let n = {
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        index: r.props.index,
        path: r.props.path,
      };
      r.props.children && (n.children = If(r.props.children)), t.push(n);
    }),
    t
  );
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Lf() {
  return (
    (Lf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Lf.apply(this, arguments)
  );
}
function CC(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
const _C = ['onClick', 'reloadDocument', 'replace', 'state', 'target', 'to'];
function EC(e) {
  let { basename: t, children: r, window: n } = e,
    i = y.exports.useRef();
  i.current == null && (i.current = Qk({ window: n }));
  let o = i.current,
    [a, l] = y.exports.useState({ action: o.action, location: o.location });
  return (
    y.exports.useLayoutEffect(() => o.listen(l), [o]),
    y.exports.createElement(wC, {
      basename: t,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: o,
    })
  );
}
function TC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const f1 = y.exports.forwardRef(function (t, r) {
  let {
      onClick: n,
      reloadDocument: i,
      replace: o = !1,
      state: a,
      target: l,
      to: s,
    } = t,
    u = CC(t, _C),
    c = gC(s),
    f = PC(s, { replace: o, state: a, target: l });
  function d(p) {
    n && n(p), !p.defaultPrevented && !i && f(p);
  }
  return y.exports.createElement(
    'a',
    Lf({}, u, { href: c, onClick: d, ref: r, target: l })
  );
});
function PC(e, t) {
  let { target: r, replace: n, state: i } = t === void 0 ? {} : t,
    o = yC(),
    a = Js(),
    l = c1(e);
  return y.exports.useCallback(
    (s) => {
      if (s.button === 0 && (!r || r === '_self') && !TC(s)) {
        s.preventDefault();
        let u = !!n || _o(a) === _o(l);
        o(e, { replace: u, state: i });
      }
    },
    [a, o, l, n, i, r, e]
  );
}
function RC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function AC(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var MC = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (i) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
            ? (o = n.container.firstChild)
            : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, o),
          n.tags.push(i);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(AC(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = RC(i);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  rt = '-ms-',
  ms = '-moz-',
  ue = '-webkit-',
  d1 = 'comm',
  mp = 'rule',
  gp = 'decl',
  $C = '@import',
  p1 = '@keyframes',
  OC = Math.abs,
  eu = String.fromCharCode,
  IC = Object.assign;
function LC(e, t) {
  return (
    (((((((t << 2) ^ ft(e, 0)) << 2) ^ ft(e, 1)) << 2) ^ ft(e, 2)) << 2) ^
    ft(e, 3)
  );
}
function h1(e) {
  return e.trim();
}
function zC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, r) {
  return e.replace(t, r);
}
function zf(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function ta(e, t, r) {
  return e.slice(t, r);
}
function ur(e) {
  return e.length;
}
function yp(e) {
  return e.length;
}
function ol(e, t) {
  return t.push(e), e;
}
function NC(e, t) {
  return e.map(t).join('');
}
var tu = 1,
  Di = 1,
  v1 = 0,
  xt = 0,
  Fe = 0,
  Ui = '';
function ru(e, t, r, n, i, o, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: o,
    line: tu,
    column: Di,
    length: a,
    return: '',
  };
}
function lo(e, t) {
  return IC(ru('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function FC() {
  return Fe;
}
function DC() {
  return (
    (Fe = xt > 0 ? ft(Ui, --xt) : 0), Di--, Fe === 10 && ((Di = 1), tu--), Fe
  );
}
function Tt() {
  return (
    (Fe = xt < v1 ? ft(Ui, xt++) : 0), Di++, Fe === 10 && ((Di = 1), tu++), Fe
  );
}
function mr() {
  return ft(Ui, xt);
}
function Nl() {
  return xt;
}
function Ca(e, t) {
  return ta(Ui, e, t);
}
function ra(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function m1(e) {
  return (tu = Di = 1), (v1 = ur((Ui = e))), (xt = 0), [];
}
function g1(e) {
  return (Ui = ''), e;
}
function Fl(e) {
  return h1(Ca(xt - 1, Nf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function BC(e) {
  for (; (Fe = mr()) && Fe < 33; ) Tt();
  return ra(e) > 2 || ra(Fe) > 3 ? '' : ' ';
}
function VC(e, t) {
  for (
    ;
    --t &&
    Tt() &&
    !(Fe < 48 || Fe > 102 || (Fe > 57 && Fe < 65) || (Fe > 70 && Fe < 97));

  );
  return Ca(e, Nl() + (t < 6 && mr() == 32 && Tt() == 32));
}
function Nf(e) {
  for (; Tt(); )
    switch (Fe) {
      case e:
        return xt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nf(Fe);
        break;
      case 40:
        e === 41 && Nf(e);
        break;
      case 92:
        Tt();
        break;
    }
  return xt;
}
function jC(e, t) {
  for (; Tt() && e + Fe !== 47 + 10; )
    if (e + Fe === 42 + 42 && mr() === 47) break;
  return '/*' + Ca(t, xt - 1) + '*' + eu(e === 47 ? e : Tt());
}
function WC(e) {
  for (; !ra(mr()); ) Tt();
  return Ca(e, xt);
}
function HC(e) {
  return g1(Dl('', null, null, null, [''], (e = m1(e)), 0, [0], e));
}
function Dl(e, t, r, n, i, o, a, l, s) {
  for (
    var u = 0,
      c = 0,
      f = a,
      d = 0,
      p = 0,
      h = 0,
      x = 1,
      w = 1,
      m = 1,
      v = 0,
      g = '',
      S = i,
      _ = o,
      P = n,
      T = g;
    w;

  )
    switch (((h = v), (v = Tt()))) {
      case 40:
        if (h != 108 && T.charCodeAt(f - 1) == 58) {
          zf((T += ce(Fl(v), '&', '&\f')), '&\f') != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Fl(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += BC(h);
        break;
      case 92:
        T += VC(Nl() - 1, 7);
        continue;
      case 47:
        switch (mr()) {
          case 42:
          case 47:
            ol(UC(jC(Tt(), Nl()), t, r), s);
            break;
          default:
            T += '/';
        }
        break;
      case 123 * x:
        l[u++] = ur(T) * m;
      case 125 * x:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            p > 0 &&
              ur(T) - f &&
              ol(
                p > 32
                  ? Xv(T + ';', n, r, f - 1)
                  : Xv(ce(T, ' ', '') + ';', n, r, f - 2),
                s
              );
            break;
          case 59:
            T += ';';
          default:
            if (
              (ol((P = Kv(T, t, r, u, c, i, l, g, (S = []), (_ = []), f)), o),
              v === 123)
            )
              if (c === 0) Dl(T, t, P, P, S, o, f, l, _);
              else
                switch (d) {
                  case 100:
                  case 109:
                  case 115:
                    Dl(
                      e,
                      P,
                      P,
                      n && ol(Kv(e, P, P, 0, 0, i, l, g, i, (S = []), f), _),
                      i,
                      _,
                      f,
                      l,
                      n ? S : _
                    );
                    break;
                  default:
                    Dl(T, P, P, P, [''], _, 0, l, _);
                }
        }
        (u = c = p = 0), (x = m = 1), (g = T = ''), (f = a);
        break;
      case 58:
        (f = 1 + ur(T)), (p = h);
      default:
        if (x < 1) {
          if (v == 123) --x;
          else if (v == 125 && x++ == 0 && DC() == 125) continue;
        }
        switch (((T += eu(v)), v * x)) {
          case 38:
            m = c > 0 ? 1 : ((T += '\f'), -1);
            break;
          case 44:
            (l[u++] = (ur(T) - 1) * m), (m = 1);
            break;
          case 64:
            mr() === 45 && (T += Fl(Tt())),
              (d = mr()),
              (c = f = ur((g = T += WC(Nl())))),
              v++;
            break;
          case 45:
            h === 45 && ur(T) == 2 && (x = 0);
        }
    }
  return o;
}
function Kv(e, t, r, n, i, o, a, l, s, u, c) {
  for (
    var f = i - 1, d = i === 0 ? o : [''], p = yp(d), h = 0, x = 0, w = 0;
    h < n;
    ++h
  )
    for (var m = 0, v = ta(e, f + 1, (f = OC((x = a[h])))), g = e; m < p; ++m)
      (g = h1(x > 0 ? d[m] + ' ' + v : ce(v, /&\f/g, d[m]))) && (s[w++] = g);
  return ru(e, t, r, i === 0 ? mp : l, s, u, c);
}
function UC(e, t, r) {
  return ru(e, t, r, d1, eu(FC()), ta(e, 2, -2), 0);
}
function Xv(e, t, r, n) {
  return ru(e, t, r, gp, ta(e, 0, n), ta(e, n + 1, -1), n);
}
function y1(e, t) {
  switch (LC(e, t)) {
    case 5103:
      return ue + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ue + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ue + e + ms + e + rt + e + e;
    case 6828:
    case 4268:
      return ue + e + rt + e + e;
    case 6165:
      return ue + e + rt + 'flex-' + e + e;
    case 5187:
      return (
        ue + e + ce(e, /(\w+).+(:[^]+)/, ue + 'box-$1$2' + rt + 'flex-$1$2') + e
      );
    case 5443:
      return ue + e + rt + 'flex-item-' + ce(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        ue +
        e +
        rt +
        'flex-line-pack' +
        ce(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return ue + e + rt + ce(e, 'shrink', 'negative') + e;
    case 5292:
      return ue + e + rt + ce(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        ue +
        'box-' +
        ce(e, '-grow', '') +
        ue +
        e +
        rt +
        ce(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return ue + ce(e, /([^-])(transform)/g, '$1' + ue + '$2') + e;
    case 6187:
      return (
        ce(
          ce(ce(e, /(zoom-|grab)/, ue + '$1'), /(image-set)/, ue + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, ue + '$1$`$1');
    case 4968:
      return (
        ce(
          ce(e, /(.+:)(flex-)?(.*)/, ue + 'box-pack:$3' + rt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        ue +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, ue + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ur(e) - 1 - t > 6)
        switch (ft(e, t + 1)) {
          case 109:
            if (ft(e, t + 4) !== 45) break;
          case 102:
            return (
              ce(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  ue +
                  '$2-$3$1' +
                  ms +
                  (ft(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~zf(e, 'stretch')
              ? y1(ce(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115) break;
    case 6444:
      switch (ft(e, ur(e) - 3 - (~zf(e, '!important') && 10))) {
        case 107:
          return ce(e, ':', ':' + ue) + e;
        case 101:
          return (
            ce(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                ue +
                (ft(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                ue +
                '$2$3$1' +
                rt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (ft(e, t + 11)) {
        case 114:
          return ue + e + rt + ce(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return ue + e + rt + ce(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return ue + e + rt + ce(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return ue + e + rt + e + e;
  }
  return e;
}
function Ci(e, t) {
  for (var r = '', n = yp(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || '';
  return r;
}
function YC(e, t, r, n) {
  switch (e.type) {
    case $C:
    case gp:
      return (e.return = e.return || e.value);
    case d1:
      return '';
    case p1:
      return (e.return = e.value + '{' + Ci(e.children, n) + '}');
    case mp:
      e.value = e.props.join(',');
  }
  return ur((r = Ci(e.children, n)))
    ? (e.return = e.value + '{' + r + '}')
    : '';
}
function GC(e) {
  var t = yp(e);
  return function (r, n, i, o) {
    for (var a = '', l = 0; l < t; l++) a += e[l](r, n, i, o) || '';
    return a;
  };
}
function KC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function XC(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case gp:
        e.return = y1(e.value, e.length);
        break;
      case p1:
        return Ci([lo(e, { value: ce(e.value, '@', '@' + ue) })], n);
      case mp:
        if (e.length)
          return NC(e.props, function (i) {
            switch (zC(i, /(::plac\w+|:read-\w+)/)) {
              case ':read-only':
              case ':read-write':
                return Ci(
                  [lo(e, { props: [ce(i, /:(read-\w+)/, ':' + ms + '$1')] })],
                  n
                );
              case '::placeholder':
                return Ci(
                  [
                    lo(e, {
                      props: [ce(i, /:(plac\w+)/, ':' + ue + 'input-$1')],
                    }),
                    lo(e, { props: [ce(i, /:(plac\w+)/, ':' + ms + '$1')] }),
                    lo(e, { props: [ce(i, /:(plac\w+)/, rt + 'input-$1')] }),
                  ],
                  n
                );
            }
            return '';
          });
    }
}
var Qv = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var i = t(n);
    return r.set(n, i), i;
  };
};
function x1(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var QC = function (t, r, n) {
    for (
      var i = 0, o = 0;
      (i = o), (o = mr()), i === 38 && o === 12 && (r[n] = 1), !ra(o);

    )
      Tt();
    return Ca(t, xt);
  },
  ZC = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (ra(i)) {
        case 0:
          i === 38 && mr() === 12 && (r[n] = 1), (t[n] += QC(xt - 1, r, n));
          break;
        case 2:
          t[n] += Fl(i);
          break;
        case 4:
          if (i === 44) {
            (t[++n] = mr() === 58 ? '&\f' : ''), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += eu(i);
      }
    while ((i = Tt()));
    return t;
  },
  qC = function (t, r) {
    return g1(ZC(m1(t), r));
  },
  Zv = new WeakMap(),
  JC = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          i = t.column === n.column && t.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Zv.get(n)) &&
        !i
      ) {
        Zv.set(t, !0);
        for (
          var o = [], a = qC(r, o), l = n.props, s = 0, u = 0;
          s < a.length;
          s++
        )
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = o[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + ' ' + a[s];
      }
    }
  },
  e_ = function (t) {
    if (t.type === 'decl') {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  },
  t_ = [XC],
  r_ = function (t) {
    var r = t.key;
    if (r === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (x) {
        var w = x.getAttribute('data-emotion');
        w.indexOf(' ') !== -1 &&
          (document.head.appendChild(x), x.setAttribute('data-s', ''));
      });
    }
    var i = t.stylisPlugins || t_,
      o = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (x) {
          for (
            var w = x.getAttribute('data-emotion').split(' '), m = 1;
            m < w.length;
            m++
          )
            o[w[m]] = !0;
          l.push(x);
        }
      );
    var s,
      u = [JC, e_];
    {
      var c,
        f = [
          YC,
          KC(function (x) {
            c.insert(x);
          }),
        ],
        d = GC(u.concat(i, f)),
        p = function (w) {
          return Ci(HC(w), d);
        };
      s = function (w, m, v, g) {
        (c = v),
          p(w ? w + '{' + m.styles + '}' : m.styles),
          g && (h.inserted[m.name] = !0);
      };
    }
    var h = {
      key: r,
      sheet: new MC({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: s,
    };
    return h.sheet.hydrate(l), h;
  },
  b1 = { exports: {} },
  ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ye = typeof Symbol == 'function' && Symbol.for,
  xp = Ye ? Symbol.for('react.element') : 60103,
  bp = Ye ? Symbol.for('react.portal') : 60106,
  nu = Ye ? Symbol.for('react.fragment') : 60107,
  iu = Ye ? Symbol.for('react.strict_mode') : 60108,
  ou = Ye ? Symbol.for('react.profiler') : 60114,
  au = Ye ? Symbol.for('react.provider') : 60109,
  lu = Ye ? Symbol.for('react.context') : 60110,
  Sp = Ye ? Symbol.for('react.async_mode') : 60111,
  su = Ye ? Symbol.for('react.concurrent_mode') : 60111,
  uu = Ye ? Symbol.for('react.forward_ref') : 60112,
  cu = Ye ? Symbol.for('react.suspense') : 60113,
  n_ = Ye ? Symbol.for('react.suspense_list') : 60120,
  fu = Ye ? Symbol.for('react.memo') : 60115,
  du = Ye ? Symbol.for('react.lazy') : 60116,
  i_ = Ye ? Symbol.for('react.block') : 60121,
  o_ = Ye ? Symbol.for('react.fundamental') : 60117,
  a_ = Ye ? Symbol.for('react.responder') : 60118,
  l_ = Ye ? Symbol.for('react.scope') : 60119;
function Mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case xp:
        switch (((e = e.type), e)) {
          case Sp:
          case su:
          case nu:
          case ou:
          case iu:
          case cu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case lu:
              case uu:
              case du:
              case fu:
              case au:
                return e;
              default:
                return t;
            }
        }
      case bp:
        return t;
    }
  }
}
function S1(e) {
  return Mt(e) === su;
}
ve.AsyncMode = Sp;
ve.ConcurrentMode = su;
ve.ContextConsumer = lu;
ve.ContextProvider = au;
ve.Element = xp;
ve.ForwardRef = uu;
ve.Fragment = nu;
ve.Lazy = du;
ve.Memo = fu;
ve.Portal = bp;
ve.Profiler = ou;
ve.StrictMode = iu;
ve.Suspense = cu;
ve.isAsyncMode = function (e) {
  return S1(e) || Mt(e) === Sp;
};
ve.isConcurrentMode = S1;
ve.isContextConsumer = function (e) {
  return Mt(e) === lu;
};
ve.isContextProvider = function (e) {
  return Mt(e) === au;
};
ve.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === xp;
};
ve.isForwardRef = function (e) {
  return Mt(e) === uu;
};
ve.isFragment = function (e) {
  return Mt(e) === nu;
};
ve.isLazy = function (e) {
  return Mt(e) === du;
};
ve.isMemo = function (e) {
  return Mt(e) === fu;
};
ve.isPortal = function (e) {
  return Mt(e) === bp;
};
ve.isProfiler = function (e) {
  return Mt(e) === ou;
};
ve.isStrictMode = function (e) {
  return Mt(e) === iu;
};
ve.isSuspense = function (e) {
  return Mt(e) === cu;
};
ve.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === nu ||
    e === su ||
    e === ou ||
    e === iu ||
    e === cu ||
    e === n_ ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === du ||
        e.$$typeof === fu ||
        e.$$typeof === au ||
        e.$$typeof === lu ||
        e.$$typeof === uu ||
        e.$$typeof === o_ ||
        e.$$typeof === a_ ||
        e.$$typeof === l_ ||
        e.$$typeof === i_))
  );
};
ve.typeOf = Mt;
b1.exports = ve;
var w1 = b1.exports,
  s_ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  u_ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  k1 = {};
k1[w1.ForwardRef] = s_;
k1[w1.Memo] = u_;
var c_ = !0;
function f_(e, t, r) {
  var n = '';
  return (
    r.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : (n += i + ' ');
    }),
    n
  );
}
var C1 = function (t, r, n) {
    var i = t.key + '-' + r.name;
    (n === !1 || c_ === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = r.styles);
  },
  _1 = function (t, r, n) {
    C1(t, r, n);
    var i = t.key + '-' + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do t.insert(r === o ? '.' + i : '', o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function d_(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var p_ = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  h_ = /[A-Z]|^ms/g,
  v_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  E1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  qv = function (t) {
    return t != null && typeof t != 'boolean';
  },
  hc = x1(function (e) {
    return E1(e) ? e : e.replace(h_, '-$&').toLowerCase();
  }),
  Jv = function (t, r) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof r == 'string')
          return r.replace(v_, function (n, i, o) {
            return (cr = { name: i, styles: o, next: cr }), i;
          });
    }
    return p_[t] !== 1 && !E1(t) && typeof r == 'number' && r !== 0
      ? r + 'px'
      : r;
  };
function na(e, t, r) {
  if (r == null) return '';
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case 'boolean':
      return '';
    case 'object': {
      if (r.anim === 1)
        return (cr = { name: r.name, styles: r.styles, next: cr }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (cr = { name: n.name, styles: n.styles, next: cr }), (n = n.next);
        var i = r.styles + ';';
        return i;
      }
      return m_(e, t, r);
    }
    case 'function': {
      if (e !== void 0) {
        var o = cr,
          a = r(e);
        return (cr = o), na(e, t, a);
      }
      break;
    }
  }
  if (t == null) return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function m_(e, t, r) {
  var n = '';
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++) n += na(e, t, r[i]) + ';';
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (n += o + '{' + t[a] + '}')
          : qv(a) && (n += hc(o) + ':' + Jv(o, a) + ';');
      else if (
        Array.isArray(a) &&
        typeof a[0] == 'string' &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          qv(a[l]) && (n += hc(o) + ':' + Jv(o, a[l]) + ';');
      else {
        var s = na(e, t, a);
        switch (o) {
          case 'animation':
          case 'animationName': {
            n += hc(o) + ':' + s + ';';
            break;
          }
          default:
            n += o + '{' + s + '}';
        }
      }
    }
  return n;
}
var em = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  cr,
  wp = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = '';
    cr = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((i = !1), (o += na(n, r, a)))
      : (o += a[0]);
    for (var l = 1; l < t.length; l++) (o += na(n, r, t[l])), i && (o += a[l]);
    em.lastIndex = 0;
    for (var s = '', u; (u = em.exec(o)) !== null; ) s += '-' + u[1];
    var c = d_(o) + s;
    return { name: c, styles: o, next: cr };
  },
  T1 = y.exports.createContext(
    typeof HTMLElement != 'undefined' ? r_({ key: 'css' }) : null
  );
T1.Provider;
var P1 = function (t) {
    return y.exports.forwardRef(function (r, n) {
      var i = y.exports.useContext(T1);
      return t(r, i, n);
    });
  },
  ia = y.exports.createContext({}),
  g_ = function (t, r) {
    if (typeof r == 'function') {
      var n = r(t);
      return n;
    }
    return Fi({}, t, r);
  },
  y_ = Qv(function (e) {
    return Qv(function (t) {
      return g_(e, t);
    });
  }),
  x_ = function (t) {
    var r = y.exports.useContext(ia);
    return (
      t.theme !== r && (r = y_(r)(t.theme)),
      y.exports.createElement(ia.Provider, { value: r }, t.children)
    );
  };
Mi['useInsertionEffect'] && Mi['useInsertionEffect'];
var tm = Mi['useInsertionEffect']
    ? Mi['useInsertionEffect']
    : y.exports.useLayoutEffect,
  kp = P1(function (e, t) {
    var r = e.styles,
      n = wp([r], void 0, y.exports.useContext(ia)),
      i = y.exports.useRef();
    return (
      tm(
        function () {
          var o = t.key + '-global',
            a = new t.sheet.constructor({
              key: o,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            l = !1,
            s = document.querySelector(
              'style[data-emotion="' + o + ' ' + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            s !== null &&
              ((l = !0), s.setAttribute('data-emotion', o), a.hydrate([s])),
            (i.current = [a, l]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      tm(
        function () {
          var o = i.current,
            a = o[0],
            l = o[1];
          if (l) {
            o[1] = !1;
            return;
          }
          if ((n.next !== void 0 && _1(t, n.next, !0), a.tags.length)) {
            var s = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = s), a.flush();
          }
          t.insert('', n, a, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
function b_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return wp(t);
}
var R1 = function () {
    var t = b_.apply(void 0, arguments),
      r = 'animation-' + t.name;
    return {
      name: r,
      styles: '@keyframes ' + r + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  S_ = function () {
    return y.exports.createElement(kp, {
      styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }
    `,
    });
  },
  w_ = S_,
  Ff = { exports: {} };
(function (e, t) {
  var r = 200,
    n = '__lodash_hash_undefined__',
    i = 800,
    o = 16,
    a = 9007199254740991,
    l = '[object Arguments]',
    s = '[object Array]',
    u = '[object AsyncFunction]',
    c = '[object Boolean]',
    f = '[object Date]',
    d = '[object Error]',
    p = '[object Function]',
    h = '[object GeneratorFunction]',
    x = '[object Map]',
    w = '[object Number]',
    m = '[object Null]',
    v = '[object Object]',
    g = '[object Proxy]',
    S = '[object RegExp]',
    _ = '[object Set]',
    P = '[object String]',
    T = '[object Undefined]',
    E = '[object WeakMap]',
    R = '[object ArrayBuffer]',
    M = '[object DataView]',
    K = '[object Float32Array]',
    J = '[object Float64Array]',
    B = '[object Int8Array]',
    N = '[object Int16Array]',
    I = '[object Int32Array]',
    X = '[object Uint8Array]',
    V = '[object Uint8ClampedArray]',
    $ = '[object Uint16Array]',
    z = '[object Uint32Array]',
    W = /[\\^$.*+?()[\]{}|]/g,
    Z = /^\[object .+?Constructor\]$/,
    Q = /^(?:0|[1-9]\d*)$/,
    j = {};
  (j[K] = j[J] = j[B] = j[N] = j[I] = j[X] = j[V] = j[$] = j[z] = !0),
    (j[l] =
      j[s] =
      j[R] =
      j[c] =
      j[M] =
      j[f] =
      j[d] =
      j[p] =
      j[x] =
      j[w] =
      j[v] =
      j[S] =
      j[_] =
      j[P] =
      j[E] =
        !1);
  var D = typeof ri == 'object' && ri && ri.Object === Object && ri,
    G = typeof self == 'object' && self && self.Object === Object && self,
    re = D || G || Function('return this')(),
    Be = t && !t.nodeType && t,
    Ge = Be && !0 && e && !e.nodeType && e,
    Oe = Ge && Ge.exports === Be,
    Ot = Oe && D.process,
    Xn = (function () {
      try {
        var b = Ge && Ge.require && Ge.require('util').types;
        return b || (Ot && Ot.binding && Ot.binding('util'));
      } catch {}
    })(),
    xn = Xn && Xn.isTypedArray;
  function pS(b, k, A) {
    switch (A.length) {
      case 0:
        return b.call(k);
      case 1:
        return b.call(k, A[0]);
      case 2:
        return b.call(k, A[0], A[1]);
      case 3:
        return b.call(k, A[0], A[1], A[2]);
    }
    return b.apply(k, A);
  }
  function hS(b, k) {
    for (var A = -1, U = Array(b); ++A < b; ) U[A] = k(A);
    return U;
  }
  function vS(b) {
    return function (k) {
      return b(k);
    };
  }
  function mS(b, k) {
    return b == null ? void 0 : b[k];
  }
  function gS(b, k) {
    return function (A) {
      return b(k(A));
    };
  }
  var yS = Array.prototype,
    xS = Function.prototype,
    Oa = Object.prototype,
    Mu = re['__core-js_shared__'],
    Ia = xS.toString,
    Sr = Oa.hasOwnProperty,
    fh = (function () {
      var b = /[^.]+$/.exec((Mu && Mu.keys && Mu.keys.IE_PROTO) || '');
      return b ? 'Symbol(src)_1.' + b : '';
    })(),
    dh = Oa.toString,
    bS = Ia.call(Object),
    SS = RegExp(
      '^' +
        Ia.call(Sr)
          .replace(W, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    ),
    La = Oe ? re.Buffer : void 0,
    ph = re.Symbol,
    hh = re.Uint8Array,
    vh = La ? La.allocUnsafe : void 0,
    mh = gS(Object.getPrototypeOf, Object),
    gh = Object.create,
    wS = Oa.propertyIsEnumerable,
    kS = yS.splice,
    bn = ph ? ph.toStringTag : void 0,
    za = (function () {
      try {
        var b = Iu(Object, 'defineProperty');
        return b({}, '', {}), b;
      } catch {}
    })(),
    CS = La ? La.isBuffer : void 0,
    yh = Math.max,
    _S = Date.now,
    xh = Iu(re, 'Map'),
    Xi = Iu(Object, 'create'),
    ES = (function () {
      function b() {}
      return function (k) {
        if (!wn(k)) return {};
        if (gh) return gh(k);
        b.prototype = k;
        var A = new b();
        return (b.prototype = void 0), A;
      };
    })();
  function Sn(b) {
    var k = -1,
      A = b == null ? 0 : b.length;
    for (this.clear(); ++k < A; ) {
      var U = b[k];
      this.set(U[0], U[1]);
    }
  }
  function TS() {
    (this.__data__ = Xi ? Xi(null) : {}), (this.size = 0);
  }
  function PS(b) {
    var k = this.has(b) && delete this.__data__[b];
    return (this.size -= k ? 1 : 0), k;
  }
  function RS(b) {
    var k = this.__data__;
    if (Xi) {
      var A = k[b];
      return A === n ? void 0 : A;
    }
    return Sr.call(k, b) ? k[b] : void 0;
  }
  function AS(b) {
    var k = this.__data__;
    return Xi ? k[b] !== void 0 : Sr.call(k, b);
  }
  function MS(b, k) {
    var A = this.__data__;
    return (
      (this.size += this.has(b) ? 0 : 1),
      (A[b] = Xi && k === void 0 ? n : k),
      this
    );
  }
  (Sn.prototype.clear = TS),
    (Sn.prototype.delete = PS),
    (Sn.prototype.get = RS),
    (Sn.prototype.has = AS),
    (Sn.prototype.set = MS);
  function wr(b) {
    var k = -1,
      A = b == null ? 0 : b.length;
    for (this.clear(); ++k < A; ) {
      var U = b[k];
      this.set(U[0], U[1]);
    }
  }
  function $S() {
    (this.__data__ = []), (this.size = 0);
  }
  function OS(b) {
    var k = this.__data__,
      A = Na(k, b);
    if (A < 0) return !1;
    var U = k.length - 1;
    return A == U ? k.pop() : kS.call(k, A, 1), --this.size, !0;
  }
  function IS(b) {
    var k = this.__data__,
      A = Na(k, b);
    return A < 0 ? void 0 : k[A][1];
  }
  function LS(b) {
    return Na(this.__data__, b) > -1;
  }
  function zS(b, k) {
    var A = this.__data__,
      U = Na(A, b);
    return U < 0 ? (++this.size, A.push([b, k])) : (A[U][1] = k), this;
  }
  (wr.prototype.clear = $S),
    (wr.prototype.delete = OS),
    (wr.prototype.get = IS),
    (wr.prototype.has = LS),
    (wr.prototype.set = zS);
  function Qn(b) {
    var k = -1,
      A = b == null ? 0 : b.length;
    for (this.clear(); ++k < A; ) {
      var U = b[k];
      this.set(U[0], U[1]);
    }
  }
  function NS() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Sn(),
        map: new (xh || wr)(),
        string: new Sn(),
      });
  }
  function FS(b) {
    var k = Da(this, b).delete(b);
    return (this.size -= k ? 1 : 0), k;
  }
  function DS(b) {
    return Da(this, b).get(b);
  }
  function BS(b) {
    return Da(this, b).has(b);
  }
  function VS(b, k) {
    var A = Da(this, b),
      U = A.size;
    return A.set(b, k), (this.size += A.size == U ? 0 : 1), this;
  }
  (Qn.prototype.clear = NS),
    (Qn.prototype.delete = FS),
    (Qn.prototype.get = DS),
    (Qn.prototype.has = BS),
    (Qn.prototype.set = VS);
  function Zn(b) {
    var k = (this.__data__ = new wr(b));
    this.size = k.size;
  }
  function jS() {
    (this.__data__ = new wr()), (this.size = 0);
  }
  function WS(b) {
    var k = this.__data__,
      A = k.delete(b);
    return (this.size = k.size), A;
  }
  function HS(b) {
    return this.__data__.get(b);
  }
  function US(b) {
    return this.__data__.has(b);
  }
  function YS(b, k) {
    var A = this.__data__;
    if (A instanceof wr) {
      var U = A.__data__;
      if (!xh || U.length < r - 1)
        return U.push([b, k]), (this.size = ++A.size), this;
      A = this.__data__ = new Qn(U);
    }
    return A.set(b, k), (this.size = A.size), this;
  }
  (Zn.prototype.clear = jS),
    (Zn.prototype.delete = WS),
    (Zn.prototype.get = HS),
    (Zn.prototype.has = US),
    (Zn.prototype.set = YS);
  function GS(b, k) {
    var A = Nu(b),
      U = !A && zu(b),
      oe = !A && !U && Ch(b),
      me = !A && !U && !oe && Eh(b),
      ke = A || U || oe || me,
      ne = ke ? hS(b.length, String) : [],
      Ce = ne.length;
    for (var It in b)
      (k || Sr.call(b, It)) &&
        !(
          ke &&
          (It == 'length' ||
            (oe && (It == 'offset' || It == 'parent')) ||
            (me &&
              (It == 'buffer' || It == 'byteLength' || It == 'byteOffset')) ||
            wh(It, Ce))
        ) &&
        ne.push(It);
    return ne;
  }
  function $u(b, k, A) {
    ((A !== void 0 && !Ba(b[k], A)) || (A === void 0 && !(k in b))) &&
      Ou(b, k, A);
  }
  function KS(b, k, A) {
    var U = b[k];
    (!(Sr.call(b, k) && Ba(U, A)) || (A === void 0 && !(k in b))) &&
      Ou(b, k, A);
  }
  function Na(b, k) {
    for (var A = b.length; A--; ) if (Ba(b[A][0], k)) return A;
    return -1;
  }
  function Ou(b, k, A) {
    k == '__proto__' && za
      ? za(b, k, { configurable: !0, enumerable: !0, value: A, writable: !0 })
      : (b[k] = A);
  }
  var XS = sw();
  function Fa(b) {
    return b == null
      ? b === void 0
        ? T
        : m
      : bn && bn in Object(b)
      ? uw(b)
      : vw(b);
  }
  function bh(b) {
    return Qi(b) && Fa(b) == l;
  }
  function QS(b) {
    if (!wn(b) || pw(b)) return !1;
    var k = Du(b) ? SS : Z;
    return k.test(xw(b));
  }
  function ZS(b) {
    return Qi(b) && _h(b.length) && !!j[Fa(b)];
  }
  function qS(b) {
    if (!wn(b)) return hw(b);
    var k = kh(b),
      A = [];
    for (var U in b) (U == 'constructor' && (k || !Sr.call(b, U))) || A.push(U);
    return A;
  }
  function Sh(b, k, A, U, oe) {
    b !== k &&
      XS(
        k,
        function (me, ke) {
          if ((oe || (oe = new Zn()), wn(me))) JS(b, k, ke, A, Sh, U, oe);
          else {
            var ne = U ? U(Lu(b, ke), me, ke + '', b, k, oe) : void 0;
            ne === void 0 && (ne = me), $u(b, ke, ne);
          }
        },
        Th
      );
  }
  function JS(b, k, A, U, oe, me, ke) {
    var ne = Lu(b, A),
      Ce = Lu(k, A),
      It = ke.get(Ce);
    if (It) {
      $u(b, A, It);
      return;
    }
    var St = me ? me(ne, Ce, A + '', b, k, ke) : void 0,
      Zi = St === void 0;
    if (Zi) {
      var Bu = Nu(Ce),
        Vu = !Bu && Ch(Ce),
        Rh = !Bu && !Vu && Eh(Ce);
      (St = Ce),
        Bu || Vu || Rh
          ? Nu(ne)
            ? (St = ne)
            : bw(ne)
            ? (St = ow(ne))
            : Vu
            ? ((Zi = !1), (St = rw(Ce, !0)))
            : Rh
            ? ((Zi = !1), (St = iw(Ce, !0)))
            : (St = [])
          : Sw(Ce) || zu(Ce)
          ? ((St = ne),
            zu(ne) ? (St = ww(ne)) : (!wn(ne) || Du(ne)) && (St = cw(Ce)))
          : (Zi = !1);
    }
    Zi && (ke.set(Ce, St), oe(St, Ce, U, me, ke), ke.delete(Ce)), $u(b, A, St);
  }
  function ew(b, k) {
    return gw(mw(b, k, Ph), b + '');
  }
  var tw = za
    ? function (b, k) {
        return za(b, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: Cw(k),
          writable: !0,
        });
      }
    : Ph;
  function rw(b, k) {
    if (k) return b.slice();
    var A = b.length,
      U = vh ? vh(A) : new b.constructor(A);
    return b.copy(U), U;
  }
  function nw(b) {
    var k = new b.constructor(b.byteLength);
    return new hh(k).set(new hh(b)), k;
  }
  function iw(b, k) {
    var A = k ? nw(b.buffer) : b.buffer;
    return new b.constructor(A, b.byteOffset, b.length);
  }
  function ow(b, k) {
    var A = -1,
      U = b.length;
    for (k || (k = Array(U)); ++A < U; ) k[A] = b[A];
    return k;
  }
  function aw(b, k, A, U) {
    var oe = !A;
    A || (A = {});
    for (var me = -1, ke = k.length; ++me < ke; ) {
      var ne = k[me],
        Ce = U ? U(A[ne], b[ne], ne, A, b) : void 0;
      Ce === void 0 && (Ce = b[ne]), oe ? Ou(A, ne, Ce) : KS(A, ne, Ce);
    }
    return A;
  }
  function lw(b) {
    return ew(function (k, A) {
      var U = -1,
        oe = A.length,
        me = oe > 1 ? A[oe - 1] : void 0,
        ke = oe > 2 ? A[2] : void 0;
      for (
        me = b.length > 3 && typeof me == 'function' ? (oe--, me) : void 0,
          ke && fw(A[0], A[1], ke) && ((me = oe < 3 ? void 0 : me), (oe = 1)),
          k = Object(k);
        ++U < oe;

      ) {
        var ne = A[U];
        ne && b(k, ne, U, me);
      }
      return k;
    });
  }
  function sw(b) {
    return function (k, A, U) {
      for (var oe = -1, me = Object(k), ke = U(k), ne = ke.length; ne--; ) {
        var Ce = ke[b ? ne : ++oe];
        if (A(me[Ce], Ce, me) === !1) break;
      }
      return k;
    };
  }
  function Da(b, k) {
    var A = b.__data__;
    return dw(k) ? A[typeof k == 'string' ? 'string' : 'hash'] : A.map;
  }
  function Iu(b, k) {
    var A = mS(b, k);
    return QS(A) ? A : void 0;
  }
  function uw(b) {
    var k = Sr.call(b, bn),
      A = b[bn];
    try {
      b[bn] = void 0;
      var U = !0;
    } catch {}
    var oe = dh.call(b);
    return U && (k ? (b[bn] = A) : delete b[bn]), oe;
  }
  function cw(b) {
    return typeof b.constructor == 'function' && !kh(b) ? ES(mh(b)) : {};
  }
  function wh(b, k) {
    var A = typeof b;
    return (
      (k = k == null ? a : k),
      !!k &&
        (A == 'number' || (A != 'symbol' && Q.test(b))) &&
        b > -1 &&
        b % 1 == 0 &&
        b < k
    );
  }
  function fw(b, k, A) {
    if (!wn(A)) return !1;
    var U = typeof k;
    return (U == 'number' ? Fu(A) && wh(k, A.length) : U == 'string' && k in A)
      ? Ba(A[k], b)
      : !1;
  }
  function dw(b) {
    var k = typeof b;
    return k == 'string' || k == 'number' || k == 'symbol' || k == 'boolean'
      ? b !== '__proto__'
      : b === null;
  }
  function pw(b) {
    return !!fh && fh in b;
  }
  function kh(b) {
    var k = b && b.constructor,
      A = (typeof k == 'function' && k.prototype) || Oa;
    return b === A;
  }
  function hw(b) {
    var k = [];
    if (b != null) for (var A in Object(b)) k.push(A);
    return k;
  }
  function vw(b) {
    return dh.call(b);
  }
  function mw(b, k, A) {
    return (
      (k = yh(k === void 0 ? b.length - 1 : k, 0)),
      function () {
        for (
          var U = arguments, oe = -1, me = yh(U.length - k, 0), ke = Array(me);
          ++oe < me;

        )
          ke[oe] = U[k + oe];
        oe = -1;
        for (var ne = Array(k + 1); ++oe < k; ) ne[oe] = U[oe];
        return (ne[k] = A(ke)), pS(b, this, ne);
      }
    );
  }
  function Lu(b, k) {
    if (!(k === 'constructor' && typeof b[k] == 'function') && k != '__proto__')
      return b[k];
  }
  var gw = yw(tw);
  function yw(b) {
    var k = 0,
      A = 0;
    return function () {
      var U = _S(),
        oe = o - (U - A);
      if (((A = U), oe > 0)) {
        if (++k >= i) return arguments[0];
      } else k = 0;
      return b.apply(void 0, arguments);
    };
  }
  function xw(b) {
    if (b != null) {
      try {
        return Ia.call(b);
      } catch {}
      try {
        return b + '';
      } catch {}
    }
    return '';
  }
  function Ba(b, k) {
    return b === k || (b !== b && k !== k);
  }
  var zu = bh(
      (function () {
        return arguments;
      })()
    )
      ? bh
      : function (b) {
          return Qi(b) && Sr.call(b, 'callee') && !wS.call(b, 'callee');
        },
    Nu = Array.isArray;
  function Fu(b) {
    return b != null && _h(b.length) && !Du(b);
  }
  function bw(b) {
    return Qi(b) && Fu(b);
  }
  var Ch = CS || _w;
  function Du(b) {
    if (!wn(b)) return !1;
    var k = Fa(b);
    return k == p || k == h || k == u || k == g;
  }
  function _h(b) {
    return typeof b == 'number' && b > -1 && b % 1 == 0 && b <= a;
  }
  function wn(b) {
    var k = typeof b;
    return b != null && (k == 'object' || k == 'function');
  }
  function Qi(b) {
    return b != null && typeof b == 'object';
  }
  function Sw(b) {
    if (!Qi(b) || Fa(b) != v) return !1;
    var k = mh(b);
    if (k === null) return !0;
    var A = Sr.call(k, 'constructor') && k.constructor;
    return typeof A == 'function' && A instanceof A && Ia.call(A) == bS;
  }
  var Eh = xn ? vS(xn) : ZS;
  function ww(b) {
    return aw(b, Th(b));
  }
  function Th(b) {
    return Fu(b) ? GS(b, !0) : qS(b);
  }
  var kw = lw(function (b, k, A, U) {
    Sh(b, k, A, U);
  });
  function Cw(b) {
    return function () {
      return b;
    };
  }
  function Ph(b) {
    return b;
  }
  function _w() {
    return !1;
  }
  e.exports = kw;
})(Ff, Ff.exports);
var Dt = Ff.exports;
function k_(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function _i(e) {
  return typeof e == 'number';
}
function pu(e) {
  return Array.isArray(e);
}
function A1(e) {
  return typeof e == 'function';
}
function yt(e) {
  var t = typeof e;
  return e != null && (t === 'object' || t === 'function') && !pu(e);
}
function C_(e) {
  return yt(e) && Object.keys(e).length === 0;
}
function M1(e) {
  return e == null;
}
function hu(e) {
  return Object.prototype.toString.call(e) === '[object String]';
}
function $1(e) {
  return /^var\(--.+\)$/.test(e);
}
var fe = !1;
function Cp(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach(function (n) {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
function __(e, t) {
  var r = {};
  return (
    t.forEach(function (n) {
      n in e && (r[n] = e[n]);
    }),
    r
  );
}
function E_(e, t, r, n) {
  var i = typeof t == 'string' ? t.split('.') : [t];
  for (n = 0; n < i.length && e; n += 1) e = e[i[n]];
  return e === void 0 ? r : e;
}
var T_ = function (t) {
    var r = new WeakMap(),
      n = function (o, a, l, s) {
        if (typeof o == 'undefined') return t(o, a, l);
        r.has(o) || r.set(o, new Map());
        var u = r.get(o);
        if (u.has(a)) return u.get(a);
        var c = t(o, a, l, s);
        return u.set(a, c), c;
      };
    return n;
  },
  vu = T_(E_);
function O1(e, t) {
  var r = {};
  return (
    Object.keys(e).forEach(function (n) {
      var i = e[n],
        o = t(i, n, e);
      o && (r[n] = i);
    }),
    r
  );
}
var _p = function (t) {
    return O1(t, function (r) {
      return r != null;
    });
  },
  mu = function (t) {
    return Object.keys(t);
  },
  gs = function (t) {
    return t.reduce(function (r, n) {
      var i = n[0],
        o = n[1];
      return (r[i] = o), r;
    }, {});
  };
function P_(e) {
  var t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), '');
  return { unitless: !r, value: t, unit: r };
}
function Df(e) {
  if (e == null) return e;
  var t = P_(e),
    r = t.unitless;
  return r || _i(e) ? e + 'px' : e;
}
var I1 = function (t, r) {
    return parseInt(t[1], 10) > parseInt(r[1], 10) ? 1 : -1;
  },
  Ep = function (t) {
    return gs(Object.entries(t).sort(I1));
  };
function rm(e) {
  var t = Ep(e);
  return Object.assign(Object.values(t), t);
}
function R_(e) {
  var t = Object.keys(Ep(e));
  return new Set(t);
}
function nm(e) {
  var t;
  if (!e) return e;
  e = (t = Df(e)) != null ? t : e;
  var r = e.endsWith('px') ? -1 : -0.0635;
  return _i(e)
    ? '' + (e + r)
    : e.replace(/([0-9]+\.?[0-9]*)/, function (n) {
        return '' + (parseFloat(n) + r);
      });
}
function vo(e, t) {
  var r = ['@media screen'];
  return (
    e && r.push('and', '(min-width: ' + Df(e) + ')'),
    t && r.push('and', '(max-width: ' + Df(t) + ')'),
    r.join(' ')
  );
}
function A_(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : '0px';
  var r = rm(e),
    n = Object.entries(e)
      .sort(I1)
      .map(function (a, l, s) {
        var u,
          c = a[0],
          f = a[1],
          d = (u = s[l + 1]) != null ? u : [],
          p = d[1];
        return (
          (p = parseFloat(p) > 0 ? nm(p) : void 0),
          {
            _minW: nm(f),
            breakpoint: c,
            minW: f,
            maxW: p,
            maxWQuery: vo(null, p),
            minWQuery: vo(f),
            minMaxQuery: vo(f, p),
          }
        );
      }),
    i = R_(e),
    o = Array.from(i.values());
  return {
    keys: i,
    normalized: r,
    isResponsive: function (l) {
      var s = Object.keys(l);
      return (
        s.length > 0 &&
        s.every(function (u) {
          return i.has(u);
        })
      );
    },
    asObject: Ep(e),
    asArray: rm(e),
    details: n,
    media: [null].concat(
      r
        .map(function (a) {
          return vo(a);
        })
        .slice(1)
    ),
    toArrayValue: function (l) {
      if (!yt(l)) throw new Error('toArrayValue: value must be an object');
      for (
        var s = o.map(function (u) {
          var c;
          return (c = l[u]) != null ? c : null;
        });
        k_(s) === null;

      )
        s.pop();
      return s;
    },
    toObjectValue: function (l) {
      if (!Array.isArray(l))
        throw new Error('toObjectValue: value must be an array');
      return l.reduce(function (s, u, c) {
        var f = o[c];
        return f != null && u != null && (s[f] = u), s;
      }, {});
    },
  };
}
function M_() {
  return !!(
    typeof window != 'undefined' &&
    window.document &&
    window.document.createElement
  );
}
var gu = M_(),
  im = function (t) {
    return t ? '' : void 0;
  },
  Ne = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return r.filter(Boolean).join(' ');
  };
function dr(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return A1(e) ? e.apply(void 0, r) : e;
}
function $_(e) {
  var t;
  return function () {
    if (e) {
      for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
        i[o] = arguments[o];
      (t = e.apply(this, i)), (e = null);
    }
    return t;
  };
}
var om = function () {},
  O_ = $_(function (e) {
    return function () {
      var t = e.condition,
        r = e.message;
      t && fe && console.warn(r);
    };
  });
function Bf(e, t) {
  return (
    t === void 0 && (t = 1 / 0),
    (!yt(e) && !Array.isArray(e)) || !t
      ? e
      : Object.entries(e).reduce(function (r, n) {
          var i = n[0],
            o = n[1];
          return (
            yt(o) || pu(o)
              ? Object.entries(Bf(o, t - 1)).forEach(function (a) {
                  var l = a[0],
                    s = a[1];
                  r[i + '.' + l] = s;
                })
              : (r[i] = o),
            r
          );
        }, {})
  );
}
Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl']);
function Wn(e, t) {
  return pu(e)
    ? e.map(function (r) {
        return r === null ? null : t(r);
      })
    : yt(e)
    ? mu(e).reduce(function (r, n) {
        return (r[n] = t(e[n])), r;
      }, {})
    : e != null
    ? t(e)
    : null;
}
function Yi(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.strict,
    n = r === void 0 ? !0 : r,
    i = t.errorMessage,
    o =
      i === void 0
        ? 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider'
        : i,
    a = t.name,
    l = y.exports.createContext(void 0);
  l.displayName = a;
  function s() {
    var u = y.exports.useContext(l);
    if (!u && n) {
      var c = new Error(o);
      throw (
        ((c.name = 'ContextError'),
        Error.captureStackTrace == null || Error.captureStackTrace(c, s),
        c)
      );
    }
    return u;
  }
  return [l.Provider, s, l];
}
function L1(e) {
  return y.exports.Children.toArray(e).filter(function (t) {
    return y.exports.isValidElement(t);
  });
}
var Hn = gu ? y.exports.useLayoutEffect : y.exports.useEffect;
function I_(e, t) {
  t === void 0 && (t = []);
  var r = y.exports.useRef(e);
  return (
    Hn(function () {
      r.current = e;
    }),
    y.exports.useCallback(function () {
      for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
        i[o] = arguments[o];
      return r.current == null ? void 0 : r.current.apply(r, i);
    }, t)
  );
}
var am = function (t, r) {
  var n = y.exports.useRef(!1),
    i = y.exports.useRef(!1);
  y.exports.useEffect(function () {
    var o = n.current,
      a = o && i.current;
    if (a) return t();
    i.current = !0;
  }, r),
    y.exports.useEffect(function () {
      return (
        (n.current = !0),
        function () {
          n.current = !1;
        }
      );
    }, []);
};
function L_(e, t) {
  return (
    t === void 0 && (t = []),
    y.exports.useEffect(function () {
      return function () {
        return e();
      };
    }, t)
  );
}
function z1() {
  var e = y.exports.useRef(!1),
    t = y.exports.useState(0),
    r = t[0],
    n = t[1];
  return (
    L_(function () {
      e.current = !0;
    }),
    y.exports.useCallback(
      function () {
        e.current || n(r + 1);
      },
      [r]
    )
  );
}
function z_(e, t) {
  if (e != null) {
    if (typeof e == 'function') {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error("Cannot assign value '" + t + "' to ref '" + e + "'");
    }
  }
}
function N_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return y.exports.useMemo(function () {
    return t.every(function (n) {
      return n == null;
    })
      ? null
      : function (n) {
          t.forEach(function (i) {
            i && z_(i, n);
          });
        };
  }, t);
}
function F_(e, t) {
  var r = I_(e);
  y.exports.useEffect(
    function () {
      if (t != null) {
        var n = null;
        return (
          (n = window.setTimeout(function () {
            r();
          }, t)),
          function () {
            n && window.clearTimeout(n);
          }
        );
      }
    },
    [t, r]
  );
}
var N1 = Yi({ strict: !1, name: 'PortalManagerContext' }),
  D_ = N1[0],
  B_ = N1[1];
function V_(e) {
  var t = e.children,
    r = e.zIndex;
  return y.exports.createElement(D_, { value: { zIndex: r } }, t);
}
function Vf() {
  return (
    (Vf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Vf.apply(this, arguments)
  );
}
function j_(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var W_ = ['containerRef'],
  F1 = Yi({ strict: !1, name: 'PortalContext' }),
  D1 = F1[0],
  H_ = F1[1],
  Tp = 'chakra-portal',
  U_ = '.chakra-portal',
  Y_ = function (t) {
    return y.exports.createElement(
      'div',
      {
        className: 'chakra-portal-zIndex',
        style: {
          position: 'absolute',
          zIndex: t.zIndex,
          top: 0,
          left: 0,
          right: 0,
        },
      },
      t.children
    );
  },
  G_ = function (t) {
    var r = t.appendToParentPortal,
      n = t.children,
      i = y.exports.useRef(null),
      o = y.exports.useRef(null),
      a = z1(),
      l = H_(),
      s = B_();
    Hn(function () {
      if (!!i.current) {
        var c = i.current.ownerDocument,
          f = r && l != null ? l : c.body;
        if (!!f) {
          (o.current = c.createElement('div')),
            (o.current.className = Tp),
            f.appendChild(o.current),
            a();
          var d = o.current;
          return function () {
            f.contains(d) && f.removeChild(d);
          };
        }
      }
    }, []);
    var u =
      s != null && s.zIndex
        ? y.exports.createElement(
            Y_,
            { zIndex: s == null ? void 0 : s.zIndex },
            n
          )
        : n;
    return o.current
      ? Ns.exports.createPortal(
          y.exports.createElement(D1, { value: o.current }, u),
          o.current
        )
      : y.exports.createElement('span', { ref: i });
  },
  K_ = function (t) {
    var r = t.children,
      n = t.containerRef,
      i = t.appendToParentPortal,
      o = n.current,
      a = o != null ? o : gu ? document.body : void 0,
      l = y.exports.useMemo(
        function () {
          var u = o == null ? void 0 : o.ownerDocument.createElement('div');
          return u && (u.className = Tp), u;
        },
        [o]
      ),
      s = z1();
    return (
      Hn(function () {
        s();
      }, []),
      Hn(
        function () {
          if (!(!l || !a))
            return (
              a.appendChild(l),
              function () {
                a.removeChild(l);
              }
            );
        },
        [l, a]
      ),
      a && l
        ? Ns.exports.createPortal(
            y.exports.createElement(D1, { value: i ? l : null }, r),
            l
          )
        : null
    );
  };
function yu(e) {
  var t = e.containerRef,
    r = j_(e, W_);
  return t
    ? y.exports.createElement(K_, Vf({ containerRef: t }, r))
    : y.exports.createElement(G_, r);
}
yu.defaultProps = { appendToParentPortal: !0 };
yu.className = Tp;
yu.selector = U_;
var al = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' };
function X_(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.preventTransition,
    n = r === void 0 ? !0 : r,
    i = {
      setDataset: function (a) {
        var l = n ? i.preventTransition() : void 0;
        (document.documentElement.dataset.theme = a),
          (document.documentElement.style.colorScheme = a),
          l == null || l();
      },
      setClassName: function (a) {
        document.body.classList.add(a ? al.dark : al.light),
          document.body.classList.remove(a ? al.light : al.dark);
      },
      query: function () {
        return window.matchMedia('(prefers-color-scheme: dark)');
      },
      getSystemTheme: function (a) {
        var l,
          s = (l = i.query().matches) != null ? l : a === 'dark';
        return s ? 'dark' : 'light';
      },
      addListener: function (a) {
        var l = i.query(),
          s = function (c) {
            a(c.matches ? 'dark' : 'light');
          };
        return (
          l.addEventListener('change', s),
          function () {
            return l.removeEventListener('change', s);
          }
        );
      },
      preventTransition: function () {
        var a = document.createElement('style');
        return (
          a.appendChild(
            document.createTextNode(
              '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
            )
          ),
          document.head.appendChild(a),
          function () {
            (function () {
              return window.getComputedStyle(document.body);
            })(),
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  document.head.removeChild(a);
                });
              });
          }
        );
      },
    };
  return i;
}
var Q_ = 'chakra-ui-color-mode';
function Z_(e) {
  return {
    ssr: !1,
    type: 'localStorage',
    get: function (r) {
      if (!gu) return r;
      var n;
      try {
        n = localStorage.getItem(e) || r;
      } catch {}
      return n || r;
    },
    set: function (r) {
      try {
        localStorage.setItem(e, r);
      } catch {}
    },
  };
}
var q_ = Z_(Q_),
  B1 = y.exports.createContext({});
function V1() {
  var e = y.exports.useContext(B1);
  if (e === void 0)
    throw new Error('useColorMode must be used within a ColorModeProvider');
  return e;
}
function lm(e, t) {
  return e.type === 'cookie' && e.ssr ? e.get(t) : t;
}
function J_(e) {
  var t = e.value,
    r = e.children,
    n = e.options;
  n = n === void 0 ? {} : n;
  var i = n.useSystemColorMode,
    o = n.initialColorMode,
    a = n.disableTransitionOnChange,
    l = e.colorModeManager,
    s = l === void 0 ? q_ : l,
    u = o === 'dark' ? 'dark' : 'light',
    c = y.exports.useState(function () {
      return lm(s, u);
    }),
    f = c[0],
    d = c[1],
    p = y.exports.useState(function () {
      return lm(s);
    }),
    h = p[0],
    x = p[1],
    w = y.exports.useMemo(
      function () {
        return X_({ preventTransition: a });
      },
      [a]
    ),
    m = w.getSystemTheme,
    v = w.setClassName,
    g = w.setDataset,
    S = w.addListener,
    _ = o === 'system' && !f ? h : f,
    P = y.exports.useCallback(
      function (R) {
        var M = R === 'system' ? m() : R;
        d(M), v(M === 'dark'), g(M), s.set(M);
      },
      [s, m, v, g]
    );
  Hn(function () {
    o === 'system' && x(m());
  }, []),
    Hn(
      function () {
        var R = s.get();
        if (R) {
          P(R);
          return;
        }
        if (o === 'system') {
          P('system');
          return;
        }
        P(u);
      },
      [s, u, o, m]
    );
  var T = y.exports.useCallback(
    function () {
      P(_ === 'dark' ? 'light' : 'dark');
    },
    [_, P]
  );
  y.exports.useEffect(
    function () {
      if (!!i) return S(P);
    },
    [i, S, P]
  );
  var E = y.exports.useMemo(
    function () {
      return {
        colorMode: t != null ? t : _,
        toggleColorMode: t ? om : T,
        setColorMode: t ? om : P,
      };
    },
    [_, T, P, t]
  );
  return y.exports.createElement(B1.Provider, { value: E }, r);
}
function oa() {
  return (
    (oa =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    oa.apply(this, arguments)
  );
}
var e5 = function (t) {
    return /!(important)?$/.test(t);
  },
  sm = function (t) {
    return hu(t) ? t.replace(/!(important)?$/, '').trim() : t;
  },
  jf = function (t, r) {
    return function (n) {
      var i = String(r),
        o = e5(i),
        a = sm(i),
        l = t ? t + '.' + a : a,
        s = yt(n.__cssMap) && l in n.__cssMap ? n.__cssMap[l].varRef : r;
      return (s = sm(s)), o ? s + ' !important' : s;
    };
  };
function aa(e) {
  var t = e.scale,
    r = e.transform,
    n = e.compose,
    i = function (a, l) {
      var s,
        u = jf(t, a)(l),
        c = (s = r == null ? void 0 : r(u, l)) != null ? s : u;
      return n && (c = n(c, l)), c;
    };
  return i;
}
function Yt(e, t) {
  return function (r) {
    var n = { property: r, scale: e };
    return (n.transform = aa({ scale: e, transform: t })), n;
  };
}
var t5 = function (t) {
  var r = t.rtl,
    n = t.ltr;
  return function (i) {
    return i.direction === 'rtl' ? r : n;
  };
};
function r5(e) {
  var t = e.property,
    r = e.scale,
    n = e.transform;
  return {
    scale: r,
    property: t5(t),
    transform: r ? aa({ scale: r, compose: n }) : n,
  };
}
var vc,
  mc,
  j1 = [
    'rotate(var(--chakra-rotate, 0))',
    'scaleX(var(--chakra-scale-x, 1))',
    'scaleY(var(--chakra-scale-y, 1))',
    'skewX(var(--chakra-skew-x, 0))',
    'skewY(var(--chakra-skew-y, 0))',
  ];
function n5() {
  return [
    'translateX(var(--chakra-translate-x, 0))',
    'translateY(var(--chakra-translate-y, 0))',
  ]
    .concat(j1)
    .join(' ');
}
function i5() {
  return [
    'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
  ]
    .concat(j1)
    .join(' ');
}
var o5 = {
    '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
    filter: [
      'var(--chakra-blur)',
      'var(--chakra-brightness)',
      'var(--chakra-contrast)',
      'var(--chakra-grayscale)',
      'var(--chakra-hue-rotate)',
      'var(--chakra-invert)',
      'var(--chakra-saturate)',
      'var(--chakra-sepia)',
      'var(--chakra-drop-shadow)',
    ].join(' '),
  },
  a5 = {
    backdropFilter: [
      'var(--chakra-backdrop-blur)',
      'var(--chakra-backdrop-brightness)',
      'var(--chakra-backdrop-contrast)',
      'var(--chakra-backdrop-grayscale)',
      'var(--chakra-backdrop-hue-rotate)',
      'var(--chakra-backdrop-invert)',
      'var(--chakra-backdrop-opacity)',
      'var(--chakra-backdrop-saturate)',
      'var(--chakra-backdrop-sepia)',
    ].join(' '),
    '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
    '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
  };
function l5(e) {
  return {
    '--chakra-ring-offset-shadow':
      'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
    '--chakra-ring-shadow':
      'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
    '--chakra-ring-width': e,
    boxShadow: [
      'var(--chakra-ring-offset-shadow)',
      'var(--chakra-ring-shadow)',
      'var(--chakra-shadow, 0 0 #0000)',
    ].join(', '),
  };
}
var s5 = {
    'row-reverse': {
      space: '--chakra-space-x-reverse',
      divide: '--chakra-divide-x-reverse',
    },
    'column-reverse': {
      space: '--chakra-space-y-reverse',
      divide: '--chakra-divide-y-reverse',
    },
  },
  W1 = '& > :not(style) ~ :not(style)',
  u5 =
    ((vc = {}),
    (vc[W1] = {
      marginInlineStart:
        'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
      marginInlineEnd:
        'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))',
    }),
    vc),
  c5 =
    ((mc = {}),
    (mc[W1] = {
      marginTop:
        'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
      marginBottom:
        'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))',
    }),
    mc);
function ys(e, t) {
  return (
    (ys =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    ys(e, t)
  );
}
function f5(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && ys(e, t);
}
function Wf() {
  Wf = function (i, o) {
    return new r(i, void 0, o);
  };
  var e = RegExp.prototype,
    t = new WeakMap();
  function r(i, o, a) {
    var l = new RegExp(i, o);
    return t.set(l, a || t.get(i)), ys(l, r.prototype);
  }
  function n(i, o) {
    var a = t.get(o);
    return Object.keys(a).reduce(function (l, s) {
      return (l[s] = i[a[s]]), l;
    }, Object.create(null));
  }
  return (
    f5(r, RegExp),
    (r.prototype.exec = function (i) {
      var o = e.exec.call(this, i);
      return o && (o.groups = n(o, this)), o;
    }),
    (r.prototype[Symbol.replace] = function (i, o) {
      if (typeof o == 'string') {
        var a = t.get(this);
        return e[Symbol.replace].call(
          this,
          i,
          o.replace(/\$<([^>]+)>/g, function (s, u) {
            return '$' + a[u];
          })
        );
      }
      if (typeof o == 'function') {
        var l = this;
        return e[Symbol.replace].call(this, i, function () {
          var s = arguments;
          return (
            typeof s[s.length - 1] != 'object' &&
              (s = [].slice.call(s)).push(n(s, l)),
            o.apply(this, s)
          );
        });
      }
      return e[Symbol.replace].call(this, i, o);
    }),
    Wf.apply(this, arguments)
  );
}
var Hf = {
    'to-t': 'to top',
    'to-tr': 'to top right',
    'to-r': 'to right',
    'to-br': 'to bottom right',
    'to-b': 'to bottom',
    'to-bl': 'to bottom left',
    'to-l': 'to left',
    'to-tl': 'to top left',
  },
  d5 = new Set(Object.values(Hf)),
  H1 = new Set([
    'none',
    '-moz-initial',
    'inherit',
    'initial',
    'revert',
    'unset',
  ]),
  p5 = function (t) {
    return t.trim();
  };
function h5(e, t) {
  var r, n;
  if (e == null || H1.has(e)) return e;
  var i = Wf(/(^[a-z-A-Z]+)\(((.*))\)/g, { type: 1, values: 2 }),
    o = (r = (n = i.exec(e)) == null ? void 0 : n.groups) != null ? r : {},
    a = o.type,
    l = o.values;
  if (!a || !l) return e;
  var s = a.includes('-gradient') ? a : a + '-gradient',
    u = l.split(',').map(p5).filter(Boolean),
    c = u[0],
    f = u.slice(1);
  if ((f == null ? void 0 : f.length) === 0) return e;
  var d = c in Hf ? Hf[c] : c;
  f.unshift(d);
  var p = f.map(function (h) {
    if (d5.has(h)) return h;
    var x = h.indexOf(' '),
      w = x !== -1 ? [h.substr(0, x), h.substr(x + 1)] : [h],
      m = w[0],
      v = w[1],
      g = U1(v) ? v : v && v.split(' '),
      S = 'colors.' + m,
      _ = S in t.__cssMap ? t.__cssMap[S].varRef : m;
    return g ? [_].concat(Array.isArray(g) ? g : [g]).join(' ') : _;
  });
  return s + '(' + p.join(', ') + ')';
}
var U1 = function (t) {
    return hu(t) && t.includes('(') && t.includes(')');
  },
  v5 = function (t, r) {
    return h5(t, r != null ? r : {});
  },
  m5 = function (t) {
    var r = parseFloat(t.toString()),
      n = t.toString().replace(String(r), '');
    return { unitless: !n, value: r, unit: n };
  },
  or = function (t) {
    return function (r) {
      return t + '(' + r + ')';
    };
  },
  pe = {
    filter: function (t) {
      return t !== 'auto' ? t : o5;
    },
    backdropFilter: function (t) {
      return t !== 'auto' ? t : a5;
    },
    ring: function (t) {
      return l5(pe.px(t));
    },
    bgClip: function (t) {
      return t === 'text'
        ? { color: 'transparent', backgroundClip: 'text' }
        : { backgroundClip: t };
    },
    transform: function (t) {
      return t === 'auto' ? n5() : t === 'auto-gpu' ? i5() : t;
    },
    px: function (t) {
      if (t == null) return t;
      var r = m5(t),
        n = r.unitless;
      return n || _i(t) ? t + 'px' : t;
    },
    fraction: function (t) {
      return !_i(t) || t > 1 ? t : t * 100 + '%';
    },
    float: function (t, r) {
      var n = { left: 'right', right: 'left' };
      return r.direction === 'rtl' ? n[t] : t;
    },
    degree: function (t) {
      if ($1(t) || t == null) return t;
      var r = hu(t) && !t.endsWith('deg');
      return _i(t) || r ? t + 'deg' : t;
    },
    gradient: v5,
    blur: or('blur'),
    opacity: or('opacity'),
    brightness: or('brightness'),
    contrast: or('contrast'),
    dropShadow: or('drop-shadow'),
    grayscale: or('grayscale'),
    hueRotate: or('hue-rotate'),
    invert: or('invert'),
    saturate: or('saturate'),
    sepia: or('sepia'),
    bgImage: function (t) {
      if (t == null) return t;
      var r = U1(t) || H1.has(t);
      return r ? t : 'url(' + t + ')';
    },
    outline: function (t) {
      var r = String(t) === '0' || String(t) === 'none';
      return t !== null && r
        ? { outline: '2px solid transparent', outlineOffset: '2px' }
        : { outline: t };
    },
    flexDirection: function (t) {
      var r,
        n = (r = s5[t]) != null ? r : {},
        i = n.space,
        o = n.divide,
        a = { flexDirection: t };
      return i && (a[i] = 1), o && (a[o] = 1), a;
    },
  },
  C = {
    borderWidths: Yt('borderWidths'),
    borderStyles: Yt('borderStyles'),
    colors: Yt('colors'),
    borders: Yt('borders'),
    radii: Yt('radii', pe.px),
    space: Yt('space', pe.px),
    spaceT: Yt('space', pe.px),
    degreeT: function (t) {
      return { property: t, transform: pe.degree };
    },
    prop: function (t, r, n) {
      return oa(
        { property: t, scale: r },
        r && { transform: aa({ scale: r, transform: n }) }
      );
    },
    propT: function (t, r) {
      return { property: t, transform: r };
    },
    sizes: Yt('sizes', pe.px),
    sizesT: Yt('sizes', pe.fraction),
    shadows: Yt('shadows'),
    logical: r5,
    blur: Yt('blur', pe.blur),
  },
  Bl = {
    background: C.colors('background'),
    backgroundColor: C.colors('backgroundColor'),
    backgroundImage: C.propT('backgroundImage', pe.bgImage),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: pe.bgClip },
    bgSize: C.prop('backgroundSize'),
    bgPosition: C.prop('backgroundPosition'),
    bg: C.colors('background'),
    bgColor: C.colors('backgroundColor'),
    bgPos: C.prop('backgroundPosition'),
    bgRepeat: C.prop('backgroundRepeat'),
    bgAttachment: C.prop('backgroundAttachment'),
    bgGradient: C.propT('backgroundImage', pe.gradient),
    bgClip: { transform: pe.bgClip },
  };
Object.assign(Bl, { bgImage: Bl.backgroundImage, bgImg: Bl.backgroundImage });
var se = {
  border: C.borders('border'),
  borderWidth: C.borderWidths('borderWidth'),
  borderStyle: C.borderStyles('borderStyle'),
  borderColor: C.colors('borderColor'),
  borderRadius: C.radii('borderRadius'),
  borderTop: C.borders('borderTop'),
  borderBlockStart: C.borders('borderBlockStart'),
  borderTopLeftRadius: C.radii('borderTopLeftRadius'),
  borderStartStartRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
  }),
  borderEndStartRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomLeftRadius', rtl: 'borderBottomRightRadius' },
  }),
  borderTopRightRadius: C.radii('borderTopRightRadius'),
  borderStartEndRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
  }),
  borderEndEndRadius: C.logical({
    scale: 'radii',
    property: { ltr: 'borderBottomRightRadius', rtl: 'borderBottomLeftRadius' },
  }),
  borderRight: C.borders('borderRight'),
  borderInlineEnd: C.borders('borderInlineEnd'),
  borderBottom: C.borders('borderBottom'),
  borderBlockEnd: C.borders('borderBlockEnd'),
  borderBottomLeftRadius: C.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: C.radii('borderBottomRightRadius'),
  borderLeft: C.borders('borderLeft'),
  borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
  borderInlineStartRadius: C.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
      rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
  }),
  borderInlineEndRadius: C.logical({
    scale: 'radii',
    property: {
      ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
      rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
  }),
  borderX: C.borders(['borderLeft', 'borderRight']),
  borderInline: C.borders('borderInline'),
  borderY: C.borders(['borderTop', 'borderBottom']),
  borderBlock: C.borders('borderBlock'),
  borderTopWidth: C.borderWidths('borderTopWidth'),
  borderBlockStartWidth: C.borderWidths('borderBlockStartWidth'),
  borderTopColor: C.colors('borderTopColor'),
  borderBlockStartColor: C.colors('borderBlockStartColor'),
  borderTopStyle: C.borderStyles('borderTopStyle'),
  borderBlockStartStyle: C.borderStyles('borderBlockStartStyle'),
  borderBottomWidth: C.borderWidths('borderBottomWidth'),
  borderBlockEndWidth: C.borderWidths('borderBlockEndWidth'),
  borderBottomColor: C.colors('borderBottomColor'),
  borderBlockEndColor: C.colors('borderBlockEndColor'),
  borderBottomStyle: C.borderStyles('borderBottomStyle'),
  borderBlockEndStyle: C.borderStyles('borderBlockEndStyle'),
  borderLeftWidth: C.borderWidths('borderLeftWidth'),
  borderInlineStartWidth: C.borderWidths('borderInlineStartWidth'),
  borderLeftColor: C.colors('borderLeftColor'),
  borderInlineStartColor: C.colors('borderInlineStartColor'),
  borderLeftStyle: C.borderStyles('borderLeftStyle'),
  borderInlineStartStyle: C.borderStyles('borderInlineStartStyle'),
  borderRightWidth: C.borderWidths('borderRightWidth'),
  borderInlineEndWidth: C.borderWidths('borderInlineEndWidth'),
  borderRightColor: C.colors('borderRightColor'),
  borderInlineEndColor: C.colors('borderInlineEndColor'),
  borderRightStyle: C.borderStyles('borderRightStyle'),
  borderInlineEndStyle: C.borderStyles('borderInlineEndStyle'),
  borderTopRadius: C.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: C.radii([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),
  borderLeftRadius: C.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: C.radii([
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
};
Object.assign(se, {
  rounded: se.borderRadius,
  roundedTop: se.borderTopRadius,
  roundedTopLeft: se.borderTopLeftRadius,
  roundedTopRight: se.borderTopRightRadius,
  roundedTopStart: se.borderStartStartRadius,
  roundedTopEnd: se.borderStartEndRadius,
  roundedBottom: se.borderBottomRadius,
  roundedBottomLeft: se.borderBottomLeftRadius,
  roundedBottomRight: se.borderBottomRightRadius,
  roundedBottomStart: se.borderEndStartRadius,
  roundedBottomEnd: se.borderEndEndRadius,
  roundedLeft: se.borderLeftRadius,
  roundedRight: se.borderRightRadius,
  roundedStart: se.borderInlineStartRadius,
  roundedEnd: se.borderInlineEndRadius,
  borderStart: se.borderInlineStart,
  borderEnd: se.borderInlineEnd,
  borderTopStartRadius: se.borderStartStartRadius,
  borderTopEndRadius: se.borderStartEndRadius,
  borderBottomStartRadius: se.borderEndStartRadius,
  borderBottomEndRadius: se.borderEndEndRadius,
  borderStartRadius: se.borderInlineStartRadius,
  borderEndRadius: se.borderInlineEndRadius,
  borderStartWidth: se.borderInlineStartWidth,
  borderEndWidth: se.borderInlineEndWidth,
  borderStartColor: se.borderInlineStartColor,
  borderEndColor: se.borderInlineEndColor,
  borderStartStyle: se.borderInlineStartStyle,
  borderEndStyle: se.borderInlineEndStyle,
});
var g5 = {
    color: C.colors('color'),
    textColor: C.colors('color'),
    fill: C.colors('fill'),
    stroke: C.colors('stroke'),
  },
  Uf = {
    boxShadow: C.shadows('boxShadow'),
    mixBlendMode: !0,
    blendMode: C.prop('mixBlendMode'),
    backgroundBlendMode: !0,
    bgBlendMode: C.prop('backgroundBlendMode'),
    opacity: !0,
  };
Object.assign(Uf, { shadow: Uf.boxShadow });
var y5 = {
    filter: { transform: pe.filter },
    blur: C.blur('--chakra-blur'),
    brightness: C.propT('--chakra-brightness', pe.brightness),
    contrast: C.propT('--chakra-contrast', pe.contrast),
    hueRotate: C.degreeT('--chakra-hue-rotate'),
    invert: C.propT('--chakra-invert', pe.invert),
    saturate: C.propT('--chakra-saturate', pe.saturate),
    dropShadow: C.propT('--chakra-drop-shadow', pe.dropShadow),
    backdropFilter: { transform: pe.backdropFilter },
    backdropBlur: C.blur('--chakra-backdrop-blur'),
    backdropBrightness: C.propT('--chakra-backdrop-brightness', pe.brightness),
    backdropContrast: C.propT('--chakra-backdrop-contrast', pe.contrast),
    backdropHueRotate: C.degreeT('--chakra-backdrop-hue-rotate'),
    backdropInvert: C.propT('--chakra-backdrop-invert', pe.invert),
    backdropSaturate: C.propT('--chakra-backdrop-saturate', pe.saturate),
  },
  xs = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: pe.flexDirection },
    experimental_spaceX: {
      static: u5,
      transform: aa({
        scale: 'space',
        transform: function (t) {
          return t !== null ? { '--chakra-space-x': t } : null;
        },
      }),
    },
    experimental_spaceY: {
      static: c5,
      transform: aa({
        scale: 'space',
        transform: function (t) {
          return t != null ? { '--chakra-space-y': t } : null;
        },
      }),
    },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: C.sizes('flexBasis'),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: C.space('gap'),
    rowGap: C.space('rowGap'),
    columnGap: C.space('columnGap'),
  };
Object.assign(xs, { flexDir: xs.flexDirection });
var Y1 = {
    gridGap: C.space('gridGap'),
    gridColumnGap: C.space('gridColumnGap'),
    gridRowGap: C.space('gridRowGap'),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  x5 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: pe.outline },
    outlineOffset: !0,
    outlineColor: C.colors('outlineColor'),
  },
  Lt = {
    width: C.sizesT('width'),
    inlineSize: C.sizesT('inlineSize'),
    height: C.sizes('height'),
    blockSize: C.sizes('blockSize'),
    boxSize: C.sizes(['width', 'height']),
    minWidth: C.sizes('minWidth'),
    minInlineSize: C.sizes('minInlineSize'),
    minHeight: C.sizes('minHeight'),
    minBlockSize: C.sizes('minBlockSize'),
    maxWidth: C.sizes('maxWidth'),
    maxInlineSize: C.sizes('maxInlineSize'),
    maxHeight: C.sizes('maxHeight'),
    maxBlockSize: C.sizes('maxBlockSize'),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: C.propT('float', pe.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Lt, {
  w: Lt.width,
  h: Lt.height,
  minW: Lt.minWidth,
  maxW: Lt.maxWidth,
  minH: Lt.minHeight,
  maxH: Lt.maxHeight,
  overscroll: Lt.overscrollBehavior,
  overscrollX: Lt.overscrollBehaviorX,
  overscrollY: Lt.overscrollBehaviorY,
});
var b5 = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: C.prop('listStylePosition'),
    listStyleImage: !0,
    listStyleImg: C.prop('listStyleImage'),
  },
  S5 = {
    border: '0px',
    clip: 'rect(0, 0, 0, 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  w5 = {
    position: 'static',
    width: 'auto',
    height: 'auto',
    clip: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    whiteSpace: 'normal',
  },
  gc = function (t, r, n) {
    var i = {},
      o = vu(t, r, {});
    for (var a in o) {
      var l = a in n && n[a] != null;
      l || (i[a] = o[a]);
    }
    return i;
  },
  k5 = {
    srOnly: {
      transform: function (t) {
        return t === !0 ? S5 : t === 'focusable' ? w5 : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: function (t, r, n) {
        return gc(r, 'layerStyles.' + t, n);
      },
    },
    textStyle: {
      processResult: !0,
      transform: function (t, r, n) {
        return gc(r, 'textStyles.' + t, n);
      },
    },
    apply: {
      processResult: !0,
      transform: function (t, r, n) {
        return gc(r, t, n);
      },
    },
  },
  Eo = {
    position: !0,
    pos: C.prop('position'),
    zIndex: C.prop('zIndex', 'zIndices'),
    inset: C.spaceT('inset'),
    insetX: C.spaceT(['left', 'right']),
    insetInline: C.spaceT('insetInline'),
    insetY: C.spaceT(['top', 'bottom']),
    insetBlock: C.spaceT('insetBlock'),
    top: C.spaceT('top'),
    insetBlockStart: C.spaceT('insetBlockStart'),
    bottom: C.spaceT('bottom'),
    insetBlockEnd: C.spaceT('insetBlockEnd'),
    left: C.spaceT('left'),
    insetInlineStart: C.logical({
      scale: 'space',
      property: { ltr: 'left', rtl: 'right' },
    }),
    right: C.spaceT('right'),
    insetInlineEnd: C.logical({
      scale: 'space',
      property: { ltr: 'right', rtl: 'left' },
    }),
  };
Object.assign(Eo, {
  insetStart: Eo.insetInlineStart,
  insetEnd: Eo.insetInlineEnd,
});
var C5 = {
    ring: { transform: pe.ring },
    ringColor: C.colors('--chakra-ring-color'),
    ringOffset: C.prop('--chakra-ring-offset-width'),
    ringOffsetColor: C.colors('--chakra-ring-offset-color'),
    ringInset: C.prop('--chakra-ring-inset'),
  },
  Se = {
    margin: C.spaceT('margin'),
    marginTop: C.spaceT('marginTop'),
    marginBlockStart: C.spaceT('marginBlockStart'),
    marginRight: C.spaceT('marginRight'),
    marginInlineEnd: C.spaceT('marginInlineEnd'),
    marginBottom: C.spaceT('marginBottom'),
    marginBlockEnd: C.spaceT('marginBlockEnd'),
    marginLeft: C.spaceT('marginLeft'),
    marginInlineStart: C.spaceT('marginInlineStart'),
    marginX: C.spaceT(['marginInlineStart', 'marginInlineEnd']),
    marginInline: C.spaceT('marginInline'),
    marginY: C.spaceT(['marginTop', 'marginBottom']),
    marginBlock: C.spaceT('marginBlock'),
    padding: C.space('padding'),
    paddingTop: C.space('paddingTop'),
    paddingBlockStart: C.space('paddingBlockStart'),
    paddingRight: C.space('paddingRight'),
    paddingBottom: C.space('paddingBottom'),
    paddingBlockEnd: C.space('paddingBlockEnd'),
    paddingLeft: C.space('paddingLeft'),
    paddingInlineStart: C.space('paddingInlineStart'),
    paddingInlineEnd: C.space('paddingInlineEnd'),
    paddingX: C.space(['paddingInlineStart', 'paddingInlineEnd']),
    paddingInline: C.space('paddingInline'),
    paddingY: C.space(['paddingTop', 'paddingBottom']),
    paddingBlock: C.space('paddingBlock'),
  };
Object.assign(Se, {
  m: Se.margin,
  mt: Se.marginTop,
  mr: Se.marginRight,
  me: Se.marginInlineEnd,
  marginEnd: Se.marginInlineEnd,
  mb: Se.marginBottom,
  ml: Se.marginLeft,
  ms: Se.marginInlineStart,
  marginStart: Se.marginInlineStart,
  mx: Se.marginX,
  my: Se.marginY,
  p: Se.padding,
  pt: Se.paddingTop,
  py: Se.paddingY,
  px: Se.paddingX,
  pb: Se.paddingBottom,
  pl: Se.paddingLeft,
  ps: Se.paddingInlineStart,
  paddingStart: Se.paddingInlineStart,
  pr: Se.paddingRight,
  pe: Se.paddingInlineEnd,
  paddingEnd: Se.paddingInlineEnd,
});
var _5 = {
    textDecorationColor: C.colors('textDecorationColor'),
    textDecoration: !0,
    textDecor: { property: 'textDecoration' },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: C.shadows('textShadow'),
  },
  E5 = {
    clipPath: !0,
    transform: C.propT('transform', pe.transform),
    transformOrigin: !0,
    translateX: C.spaceT('--chakra-translate-x'),
    translateY: C.spaceT('--chakra-translate-y'),
    skewX: C.degreeT('--chakra-skew-x'),
    skewY: C.degreeT('--chakra-skew-y'),
    scaleX: C.prop('--chakra-scale-x'),
    scaleY: C.prop('--chakra-scale-y'),
    scale: C.prop(['--chakra-scale-x', '--chakra-scale-y']),
    rotate: C.degreeT('--chakra-rotate'),
  },
  T5 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: C.prop('transitionDuration', 'transition.duration'),
    transitionProperty: C.prop('transitionProperty', 'transition.property'),
    transitionTimingFunction: C.prop(
      'transitionTimingFunction',
      'transition.easing'
    ),
  },
  P5 = {
    fontFamily: C.prop('fontFamily', 'fonts'),
    fontSize: C.prop('fontSize', 'fontSizes', pe.px),
    fontWeight: C.prop('fontWeight', 'fontWeights'),
    lineHeight: C.prop('lineHeight', 'lineHeights'),
    letterSpacing: C.prop('letterSpacing', 'letterSpacings'),
    textAlign: !0,
    fontStyle: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    noOfLines: {
      static: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 'var(--chakra-line-clamp)',
      },
      property: '--chakra-line-clamp',
    },
  },
  R5 = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: C.spaceT('scrollMargin'),
    scrollMarginTop: C.spaceT('scrollMarginTop'),
    scrollMarginBottom: C.spaceT('scrollMarginBottom'),
    scrollMarginLeft: C.spaceT('scrollMarginLeft'),
    scrollMarginRight: C.spaceT('scrollMarginRight'),
    scrollMarginX: C.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
    scrollMarginY: C.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
    scrollPadding: C.spaceT('scrollPadding'),
    scrollPaddingTop: C.spaceT('scrollPaddingTop'),
    scrollPaddingBottom: C.spaceT('scrollPaddingBottom'),
    scrollPaddingLeft: C.spaceT('scrollPaddingLeft'),
    scrollPaddingRight: C.spaceT('scrollPaddingRight'),
    scrollPaddingX: C.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
    scrollPaddingY: C.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
  };
function G1(e) {
  return yt(e) && e.reference ? e.reference : String(e);
}
var xu = function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      n[i - 1] = arguments[i];
    return n
      .map(G1)
      .join(' ' + t + ' ')
      .replace(/calc/g, '');
  },
  um = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + xu.apply(void 0, ['+'].concat(r)) + ')';
  },
  cm = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + xu.apply(void 0, ['-'].concat(r)) + ')';
  },
  Yf = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + xu.apply(void 0, ['*'].concat(r)) + ')';
  },
  fm = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + xu.apply(void 0, ['/'].concat(r)) + ')';
  },
  dm = function (t) {
    var r = G1(t);
    return r != null && !Number.isNaN(parseFloat(r))
      ? String(r).startsWith('-')
        ? String(r).slice(1)
        : '-' + r
      : Yf(r, -1);
  },
  Tn = Object.assign(
    function (e) {
      return {
        add: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Tn(um.apply(void 0, [e].concat(n)));
        },
        subtract: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Tn(cm.apply(void 0, [e].concat(n)));
        },
        multiply: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Tn(Yf.apply(void 0, [e].concat(n)));
        },
        divide: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Tn(fm.apply(void 0, [e].concat(n)));
        },
        negate: function () {
          return Tn(dm(e));
        },
        toString: function () {
          return e.toString();
        },
      };
    },
    { add: um, subtract: cm, multiply: Yf, divide: fm, negate: dm }
  );
function A5(e, t) {
  return t === void 0 && (t = '-'), e.replace(/\s+/g, t);
}
function K1(e) {
  var t = A5(e.toString());
  if (t.includes('\\.')) return e;
  var r = !Number.isInteger(parseFloat(e.toString()));
  return r ? t.replace('.', '\\.') : e;
}
function M5(e, t) {
  return t === void 0 && (t = ''), [t, K1(e)].filter(Boolean).join('-');
}
function $5(e, t) {
  return 'var(' + K1(e) + (t ? ', ' + t : '') + ')';
}
function O5(e, t) {
  return t === void 0 && (t = ''), '--' + M5(e, t);
}
function I5(e, t, r) {
  var n = O5(e, r);
  return { variable: n, reference: $5(n, t) };
}
var Ke = {
    hover: function (t, r) {
      return t + ':hover ' + r + ', ' + t + '[data-hover] ' + r;
    },
    focus: function (t, r) {
      return t + ':focus ' + r + ', ' + t + '[data-focus] ' + r;
    },
    focusVisible: function (t, r) {
      return t + ':focus-visible ' + r;
    },
    focusWithin: function (t, r) {
      return t + ':focus-within ' + r;
    },
    active: function (t, r) {
      return t + ':active ' + r + ', ' + t + '[data-active] ' + r;
    },
    disabled: function (t, r) {
      return t + ':disabled ' + r + ', ' + t + '[data-disabled] ' + r;
    },
    invalid: function (t, r) {
      return t + ':invalid ' + r + ', ' + t + '[data-invalid] ' + r;
    },
    checked: function (t, r) {
      return t + ':checked ' + r + ', ' + t + '[data-checked] ' + r;
    },
    indeterminate: function (t, r) {
      return (
        t +
        ':indeterminate ' +
        r +
        ', ' +
        t +
        '[aria-checked=mixed] ' +
        r +
        ', ' +
        t +
        '[data-indeterminate] ' +
        r
      );
    },
    readOnly: function (t, r) {
      return (
        t +
        ':read-only ' +
        r +
        ', ' +
        t +
        '[readonly] ' +
        r +
        ', ' +
        t +
        '[data-read-only] ' +
        r
      );
    },
    expanded: function (t, r) {
      return (
        t +
        ':read-only ' +
        r +
        ', ' +
        t +
        '[aria-expanded=true] ' +
        r +
        ', ' +
        t +
        '[data-expanded] ' +
        r
      );
    },
    placeholderShown: function (t, r) {
      return t + ':placeholder-shown ' + r;
    },
  },
  Vr = function (t) {
    return X1(
      function (r) {
        return t(r, '&');
      },
      '[role=group]',
      '[data-group]',
      '.group'
    );
  },
  kr = function (t) {
    return X1(
      function (r) {
        return t(r, '~ &');
      },
      '[data-peer]',
      '.peer'
    );
  },
  X1 = function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      n[i - 1] = arguments[i];
    return n.map(t).join(', ');
  },
  la = {
    _hover: '&:hover, &[data-hover]',
    _active: '&:active, &[data-active]',
    _focus: '&:focus, &[data-focus]',
    _highlighted: '&[data-highlighted]',
    _focusWithin: '&:focus-within',
    _focusVisible: '&:focus-visible',
    _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
    _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
    _before: '&::before',
    _after: '&::after',
    _empty: '&:empty',
    _expanded: '&[aria-expanded=true], &[data-expanded]',
    _checked: '&[aria-checked=true], &[data-checked]',
    _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
    _pressed: '&[aria-pressed=true], &[data-pressed]',
    _invalid: '&[aria-invalid=true], &[data-invalid]',
    _valid: '&[data-valid], &[data-state=valid]',
    _loading: '&[data-loading], &[aria-busy=true]',
    _selected: '&[aria-selected=true], &[data-selected]',
    _hidden: '&[hidden], &[data-hidden]',
    _autofill: '&:-webkit-autofill',
    _even: '&:nth-of-type(even)',
    _odd: '&:nth-of-type(odd)',
    _first: '&:first-of-type',
    _last: '&:last-of-type',
    _notFirst: '&:not(:first-of-type)',
    _notLast: '&:not(:last-of-type)',
    _visited: '&:visited',
    _activeLink: '&[aria-current=page]',
    _activeStep: '&[aria-current=step]',
    _indeterminate:
      '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
    _groupHover: Vr(Ke.hover),
    _peerHover: kr(Ke.hover),
    _groupFocus: Vr(Ke.focus),
    _peerFocus: kr(Ke.focus),
    _groupFocusVisible: Vr(Ke.focusVisible),
    _peerFocusVisible: kr(Ke.focusVisible),
    _groupActive: Vr(Ke.active),
    _peerActive: kr(Ke.active),
    _groupDisabled: Vr(Ke.disabled),
    _peerDisabled: kr(Ke.disabled),
    _groupInvalid: Vr(Ke.invalid),
    _peerInvalid: kr(Ke.invalid),
    _groupChecked: Vr(Ke.checked),
    _peerChecked: kr(Ke.checked),
    _groupFocusWithin: Vr(Ke.focusWithin),
    _peerFocusWithin: kr(Ke.focusWithin),
    _peerPlaceholderShown: kr(Ke.placeholderShown),
    _placeholder: '&::placeholder',
    _placeholderShown: '&:placeholder-shown',
    _fullScreen: '&:fullscreen',
    _selection: '&::selection',
    _rtl: '[dir=rtl] &, &[dir=rtl]',
    _ltr: '[dir=ltr] &, &[dir=ltr]',
    _mediaDark: '@media (prefers-color-scheme: dark)',
    _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
    _dark:
      '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
    _light:
      '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
  },
  L5 = mu(la);
function pm(e, t) {
  return I5(String(e).replace(/\./g, '-'), void 0, t);
}
function z5(e, t) {
  for (
    var r = {},
      n = {},
      i = function () {
        var u = a[o],
          c = u[0],
          f = u[1],
          d = f.isSemantic,
          p = f.value,
          h = pm(c, t == null ? void 0 : t.cssVarPrefix),
          x = h.variable,
          w = h.reference;
        if (!d) {
          if (c.startsWith('space')) {
            var m = c.split('.'),
              v = m[0],
              g = m.slice(1),
              S = v + '.-' + g.join('.'),
              _ = Tn.negate(p),
              P = Tn.negate(w);
            n[S] = { value: _, var: x, varRef: P };
          }
          return (
            (r[x] = p), (n[c] = { value: p, var: x, varRef: w }), 'continue'
          );
        }
        var T = function (M) {
            var K = String(c).split('.')[0],
              J = [K, M].join('.'),
              B = e[J];
            if (!B) return M;
            var N = pm(J, t == null ? void 0 : t.cssVarPrefix),
              I = N.reference;
            return I;
          },
          E = yt(p) ? p : { default: p };
        (r = Dt(
          r,
          Object.entries(E).reduce(function (R, M) {
            var K,
              J,
              B = M[0],
              N = M[1],
              I = T(N);
            if (B === 'default') return (R[x] = I), R;
            var X = (K = la == null ? void 0 : la[B]) != null ? K : B;
            return (R[X] = ((J = {}), (J[x] = I), J)), R;
          }, {})
        )),
          (n[c] = { value: w, var: x, varRef: w });
      },
      o = 0,
      a = Object.entries(e);
    o < a.length;
    o++
  )
    var l = i();
  return { cssVars: r, cssMap: n };
}
function N5(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var F5 = ['__cssMap', '__cssVars', '__breakpoints'],
  D5 = [
    'colors',
    'borders',
    'borderWidths',
    'borderStyles',
    'fonts',
    'fontSizes',
    'fontWeights',
    'letterSpacings',
    'lineHeights',
    'radii',
    'space',
    'shadows',
    'sizes',
    'zIndices',
    'transition',
    'blur',
  ];
function B5(e) {
  var t = D5;
  return __(e, t);
}
function V5(e) {
  return e.semanticTokens;
}
function j5(e) {
  e.__cssMap, e.__cssVars, e.__breakpoints;
  var t = N5(e, F5);
  return t;
}
function W5(e) {
  var t,
    r,
    n = e.tokens,
    i = e.semanticTokens,
    o = Object.entries((t = Bf(n)) != null ? t : {}).map(function (l) {
      var s = l[0],
        u = l[1],
        c = { isSemantic: !1, value: u };
      return [s, c];
    }),
    a = Object.entries((r = Bf(i, 1)) != null ? r : {}).map(function (l) {
      var s = l[0],
        u = l[1],
        c = { isSemantic: !0, value: u };
      return [s, c];
    });
  return gs([].concat(o, a));
}
function H5(e) {
  var t,
    r = j5(e),
    n = B5(r),
    i = V5(r),
    o = W5({ tokens: n, semanticTokens: i }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    l = z5(o, { cssVarPrefix: a }),
    s = l.cssMap,
    u = l.cssVars,
    c = {
      '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
      '--chakra-ring-offset-width': '0px',
      '--chakra-ring-offset-color': '#fff',
      '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
      '--chakra-ring-offset-shadow': '0 0 #0000',
      '--chakra-ring-shadow': '0 0 #0000',
      '--chakra-space-x-reverse': '0',
      '--chakra-space-y-reverse': '0',
    };
  return (
    Object.assign(r, {
      __cssVars: oa({}, c, u),
      __cssMap: s,
      __breakpoints: A_(r.breakpoints),
    }),
    r
  );
}
function hm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function U5(e, t) {
  if (!!e) {
    if (typeof e == 'string') return hm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hm(e, t);
  }
}
function Y5(e, t) {
  var r =
    (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (r) return (r = r.call(e)).next.bind(r);
  if (
    Array.isArray(e) ||
    (r = U5(e)) ||
    (t && e && typeof e.length == 'number')
  ) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Pp = Dt(
  {},
  Bl,
  se,
  g5,
  xs,
  Lt,
  y5,
  C5,
  x5,
  Y1,
  k5,
  Eo,
  Uf,
  Se,
  R5,
  P5,
  _5,
  E5,
  b5,
  T5
);
Object.assign({}, Se, Lt, xs, Y1, Eo);
var G5 = [].concat(mu(Pp), L5),
  K5 = oa({}, Pp, la),
  X5 = function (t) {
    return t in K5;
  },
  Q5 = function (t) {
    return function (r) {
      if (!r.__breakpoints) return t;
      var n = r.__breakpoints,
        i = n.isResponsive,
        o = n.toArrayValue,
        a = n.media,
        l = {};
      for (var s in t) {
        var u = dr(t[s], r);
        if (u != null) {
          if (((u = yt(u) && i(u) ? o(u) : u), !Array.isArray(u))) {
            l[s] = u;
            continue;
          }
          for (var c = u.slice(0, a.length).length, f = 0; f < c; f += 1) {
            var d = a == null ? void 0 : a[f];
            if (!d) {
              l[s] = u[f];
              continue;
            }
            (l[d] = l[d] || {}), u[f] != null && (l[d][s] = u[f]);
          }
        }
      }
      return l;
    };
  },
  Z5 = function (t, r) {
    return t.startsWith('--') && hu(r) && !$1(r);
  },
  q5 = function (t, r) {
    var n, i;
    if (r == null) return r;
    var o = function (f) {
        var d, p;
        return (d = t.__cssMap) == null || (p = d[f]) == null
          ? void 0
          : p.varRef;
      },
      a = function (f) {
        var d;
        return (d = o(f)) != null ? d : f;
      },
      l = r.split(',').map(function (c) {
        return c.trim();
      }),
      s = l[0],
      u = l[1];
    return (r = (n = (i = o(s)) != null ? i : a(u)) != null ? n : a(r)), r;
  };
function J5(e) {
  var t = e.configs,
    r = t === void 0 ? {} : t,
    n = e.pseudos,
    i = n === void 0 ? {} : n,
    o = e.theme,
    a = function l(s, u) {
      u === void 0 && (u = !1);
      var c = dr(s, o),
        f = Q5(c)(o),
        d = {};
      for (var p in f) {
        var h,
          x,
          w,
          m,
          v,
          g = f[p],
          S = dr(g, o);
        p in i && (p = i[p]), Z5(p, S) && (S = q5(o, S));
        var _ = r[p];
        if ((_ === !0 && (_ = { property: p }), yt(S))) {
          var P;
          (d[p] = (P = d[p]) != null ? P : {}), (d[p] = Dt({}, d[p], l(S, !0)));
          continue;
        }
        var T =
          (h =
            (x = _) == null || x.transform == null
              ? void 0
              : x.transform(S, o, c)) != null
            ? h
            : S;
        T = (w = _) != null && w.processResult ? l(T, !0) : T;
        var E = dr((m = _) == null ? void 0 : m.property, o);
        if (!u && (v = _) != null && v.static) {
          var R = dr(_.static, o);
          d = Dt({}, d, R);
        }
        if (E && Array.isArray(E)) {
          for (var M = Y5(E), K; !(K = M()).done; ) {
            var J = K.value;
            d[J] = T;
          }
          continue;
        }
        if (E) {
          E === '&' && yt(T) ? (d = Dt({}, d, T)) : (d[E] = T);
          continue;
        }
        if (yt(T)) {
          d = Dt({}, d, T);
          continue;
        }
        d[p] = T;
      }
      return d;
    };
  return a;
}
var Q1 = function (t) {
  return function (r) {
    var n = J5({ theme: r, pseudos: la, configs: Pp });
    return n(t);
  };
};
function eE(e, t) {
  if (pu(e)) return e;
  if (yt(e)) return t(e);
  if (e != null) return [e];
}
function tE(e, t) {
  for (var r = t + 1; r < e.length; r++) if (e[r] != null) return r;
  return -1;
}
function rE(e) {
  var t = e.__breakpoints;
  return function (n, i, o, a) {
    if (!!t) {
      var l = {},
        s = eE(o, t.toArrayValue);
      if (!s) return l;
      for (
        var u = s.length,
          c = u === 1,
          f = !!n.parts,
          d = function (w) {
            var m,
              v = t.details[w],
              g = t.details[tE(s, w)],
              S = vo(v.minW, g == null ? void 0 : g._minW),
              _ = dr((m = n[i]) == null ? void 0 : m[s[w]], a);
            if (!_) return 'continue';
            if (f) {
              var P;
              return (
                (P = n.parts) == null ||
                  P.forEach(function (T) {
                    var E, R;
                    Dt(
                      l,
                      ((R = {}),
                      (R[T] = c ? _[T] : ((E = {}), (E[S] = _[T]), E)),
                      R)
                    );
                  }),
                'continue'
              );
            }
            if (!f) return c ? Dt(l, _) : (l[S] = _), 'continue';
            l[S] = _;
          },
          p = 0;
        p < u;
        p++
      )
        var h = d(p);
      return l;
    }
  };
}
function nE(e) {
  return function (t) {
    var r,
      n = t.variant,
      i = t.size,
      o = t.theme,
      a = rE(o);
    return Dt(
      {},
      dr((r = e.baseStyle) != null ? r : {}, t),
      a(e, 'sizes', i, t),
      a(e, 'variants', n, t)
    );
  };
}
var iE = typeof Element != 'undefined',
  oE = typeof Map == 'function',
  aE = typeof Set == 'function',
  lE = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function Vl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Vl(e[n], t[n])) return !1;
      return !0;
    }
    var o;
    if (oE && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!Vl(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (aE && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (lE && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
    if (iE && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (i[n] === '_owner' || i[n] === '__v' || i[n] === '__o') &&
          e.$$typeof
        ) &&
        !Vl(e[i[n]], t[i[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var sE = function (t, r) {
    try {
      return Vl(t, r);
    } catch (n) {
      if ((n.message || '').match(/stack|recursion/i))
        return (
          console.warn('react-fast-compare cannot handle circular refs'), !1
        );
      throw n;
    }
  },
  uE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  cE = x1(function (e) {
    return (
      uE.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  fE = cE,
  dE = function (t) {
    return t !== 'theme';
  },
  vm = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? fE : dE;
  },
  mm = function (t, r, n) {
    var i;
    if (r) {
      var o = r.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (a) {
              return t.__emotion_forwardProp(a) && o(a);
            }
          : o;
    }
    return typeof i != 'function' && n && (i = t.__emotion_forwardProp), i;
  },
  pE = Mi['useInsertionEffect']
    ? Mi['useInsertionEffect']
    : function (t) {
        t();
      };
function hE(e) {
  pE(e);
}
var vE = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      C1(r, n, i),
      hE(function () {
        return _1(r, n, i);
      }),
      null
    );
  },
  mE = function e(t, r) {
    var n = t.__emotion_real === t,
      i = (n && t.__emotion_base) || t,
      o,
      a;
    r !== void 0 && ((o = r.label), (a = r.target));
    var l = mm(t, r, n),
      s = l || vm(i),
      u = !s('as');
    return function () {
      var c = arguments,
        f =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && f.push('label:' + o + ';'),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, p = 1; p < d; p++) f.push(c[p], c[0][p]);
      }
      var h = P1(function (x, w, m) {
        var v = (u && x.as) || i,
          g = '',
          S = [],
          _ = x;
        if (x.theme == null) {
          _ = {};
          for (var P in x) _[P] = x[P];
          _.theme = y.exports.useContext(ia);
        }
        typeof x.className == 'string'
          ? (g = f_(w.registered, S, x.className))
          : x.className != null && (g = x.className + ' ');
        var T = wp(f.concat(S), w.registered, _);
        (g += w.key + '-' + T.name), a !== void 0 && (g += ' ' + a);
        var E = u && l === void 0 ? vm(v) : s,
          R = {};
        for (var M in x) (u && M === 'as') || (E(M) && (R[M] = x[M]));
        return (
          (R.className = g),
          (R.ref = m),
          y.exports.createElement(
            y.exports.Fragment,
            null,
            y.exports.createElement(vE, {
              cache: w,
              serialized: T,
              isStringTag: typeof v == 'string',
            }),
            y.exports.createElement(v, R)
          )
        );
      });
      return (
        (h.displayName =
          o !== void 0
            ? o
            : 'Styled(' +
              (typeof i == 'string'
                ? i
                : i.displayName || i.name || 'Component') +
              ')'),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = i),
        (h.__emotion_styles = f),
        (h.__emotion_forwardProp = l),
        Object.defineProperty(h, 'toString', {
          value: function () {
            return '.' + a;
          },
        }),
        (h.withComponent = function (x, w) {
          return e(x, Fi({}, r, w, { shouldForwardProp: mm(h, w, !0) })).apply(
            void 0,
            f
          );
        }),
        h
      );
    };
  },
  gE = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Gf = mE.bind();
gE.forEach(function (e) {
  Gf[e] = Gf(e);
});
function Kf() {
  return (
    (Kf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Kf.apply(this, arguments)
  );
}
var yE = function (t) {
    var r = t.cssVarsRoot,
      n = t.theme,
      i = t.children,
      o = y.exports.useMemo(
        function () {
          return H5(n);
        },
        [n]
      );
    return y.exports.createElement(
      x_,
      { theme: o },
      y.exports.createElement(xE, { root: r }),
      i
    );
  },
  xE = function (t) {
    var r = t.root,
      n = r === void 0 ? ':host, :root' : r,
      i = [n, '[data-theme]'].join(',');
    return y.exports.createElement(kp, {
      styles: function (a) {
        var l;
        return (l = {}), (l[i] = a.__cssVars), l;
      },
    });
  };
function bE() {
  var e = y.exports.useContext(ia);
  if (!e)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
    );
  return e;
}
var Z1 = Yi({
    name: 'StylesContext',
    errorMessage:
      'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
  }),
  q1 = Z1[0],
  Rp = Z1[1],
  SE = function () {
    var t = V1(),
      r = t.colorMode;
    return y.exports.createElement(kp, {
      styles: function (i) {
        var o = vu(i, 'styles.global'),
          a = dr(o, { theme: i, colorMode: r });
        if (!!a) {
          var l = Q1(a)(i);
          return l;
        }
      },
    });
  };
function bt(e) {
  return Cp(e, ['styleConfig', 'size', 'variant', 'colorScheme']);
}
function wE() {
  var e = V1(),
    t = bE();
  return Kf({}, e, { theme: t });
}
function Ap(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var kE = new Set(
    [].concat(G5, [
      'textStyle',
      'layerStyle',
      'apply',
      'noOfLines',
      'focusBorderColor',
      'errorBorderColor',
      'as',
      '__css',
      'css',
      'sx',
    ])
  ),
  CE = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']),
  _E = function (t) {
    return CE.has(t) || !kE.has(t);
  },
  EE = ['theme', 'css', '__css', 'sx'],
  TE = ['baseStyle'],
  PE = function (t) {
    var r = t.baseStyle;
    return function (n) {
      n.theme;
      var i = n.css,
        o = n.__css,
        a = n.sx,
        l = Ap(n, EE),
        s = O1(l, function (d, p) {
          return X5(p);
        }),
        u = dr(r, n),
        c = Object.assign({}, o, u, _p(s), a),
        f = Q1(c)(n.theme);
      return i ? [f, i] : f;
    };
  };
function yc(e, t) {
  var r = t != null ? t : {},
    n = r.baseStyle,
    i = Ap(r, TE);
  i.shouldForwardProp || (i.shouldForwardProp = _E);
  var o = PE({ baseStyle: n });
  return Gf(e, i)(o);
}
function le(e) {
  return y.exports.forwardRef(e);
}
var RE = ['styleConfig'];
function J1(e, t) {
  var r;
  t === void 0 && (t = {});
  var n = t,
    i = n.styleConfig,
    o = Ap(n, RE),
    a = wE(),
    l = a.theme,
    s = a.colorMode,
    u = vu(l, 'components.' + e),
    c = i || u,
    f = Dt(
      { theme: l, colorMode: s },
      (r = c == null ? void 0 : c.defaultProps) != null ? r : {},
      _p(Cp(o, ['children']))
    ),
    d = y.exports.useRef({});
  if (c) {
    var p = nE(c),
      h = p(f),
      x = sE(d.current, h);
    x || (d.current = h);
  }
  return d.current;
}
function nr(e, t) {
  return t === void 0 && (t = {}), J1(e, t);
}
function Mp(e, t) {
  return t === void 0 && (t = {}), J1(e, t);
}
function AE() {
  var e = new Map();
  return new Proxy(yc, {
    apply: function (r, n, i) {
      return yc.apply(void 0, i);
    },
    get: function (r, n) {
      return e.has(n) || e.set(n, yc(n)), e.get(n);
    },
  });
}
var ee = AE(),
  bu = { exports: {} },
  Su = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ME = y.exports,
  $E = Symbol.for('react.element'),
  OE = Symbol.for('react.fragment'),
  IE = Object.prototype.hasOwnProperty,
  LE = ME.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zE = { key: !0, ref: !0, __self: !0, __source: !0 };
function ex(e, t, r) {
  var n,
    i = {},
    o = null,
    a = null;
  r !== void 0 && (o = '' + r),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) IE.call(t, n) && !zE.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: $E,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: LE.current,
  };
}
Su.Fragment = OE;
Su.jsx = ex;
Su.jsxs = ex;
bu.exports = Su;
const H = bu.exports.jsx,
  de = bu.exports.jsxs,
  Un = bu.exports.Fragment;
var NE = {
    body: { classList: { add: function () {}, remove: function () {} } },
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: '' },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
  },
  tx = NE,
  Jn = function () {},
  FE = {
    document: tx,
    navigator: { userAgent: '' },
    CustomEvent: function () {
      return this;
    },
    addEventListener: Jn,
    removeEventListener: Jn,
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return '';
        },
      };
    },
    matchMedia: function () {
      return { matches: !1, addListener: Jn, removeListener: Jn };
    },
    requestAnimationFrame: function (t) {
      return typeof setTimeout == 'undefined' ? (t(), null) : setTimeout(t, 0);
    },
    cancelAnimationFrame: function (t) {
      typeof setTimeout != 'undefined' && clearTimeout(t);
    },
    setTimeout: function () {
      return 0;
    },
    clearTimeout: Jn,
    setInterval: function () {
      return 0;
    },
    clearInterval: Jn,
  },
  DE = FE,
  BE = { window: DE, document: tx },
  rx = gu ? { window, document } : BE,
  VE = y.exports.createContext(rx);
function jE(e) {
  var t = e.children,
    r = e.environment,
    n = y.exports.useState(null),
    i = n[0],
    o = n[1],
    a = y.exports.useMemo(
      function () {
        var l,
          s = i == null ? void 0 : i.ownerDocument,
          u = i == null ? void 0 : i.ownerDocument.defaultView,
          c = s ? { document: s, window: u } : void 0,
          f = (l = r != null ? r : c) != null ? l : rx;
        return f;
      },
      [i, r]
    );
  return de(VE.Provider, {
    value: a,
    children: [
      t,
      H('span', {
        hidden: !0,
        className: 'chakra-env',
        ref: function (s) {
          y.exports.startTransition(function () {
            s && o(s);
          });
        },
      }),
    ],
  });
}
var WE = function (t) {
    var r = t.children,
      n = t.colorModeManager,
      i = t.portalZIndex,
      o = t.resetCSS,
      a = o === void 0 ? !0 : o,
      l = t.theme,
      s = l === void 0 ? {} : l,
      u = t.environment,
      c = t.cssVarsRoot,
      f = y.exports.createElement(jE, { environment: u }, r);
    return y.exports.createElement(
      yE,
      { theme: s, cssVarsRoot: c },
      y.exports.createElement(
        J_,
        { colorModeManager: n, options: s.config },
        a && y.exports.createElement(w_, null),
        y.exports.createElement(SE, null),
        i ? y.exports.createElement(V_, { zIndex: i }, f) : f
      )
    );
  },
  nx = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  };
function Le() {
  return (
    (Le =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Le.apply(this, arguments)
  );
}
var HE = {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
  },
  UE = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  ix = Le({}, nx, HE, { container: UE });
function qe(e, t) {
  YE(e) && (e = '100%');
  var r = GE(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    r && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function ll(e) {
  return Math.min(1, Math.max(0, e));
}
function YE(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function GE(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function ox(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function sl(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function $n(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function KE(e, t, r) {
  return { r: qe(e, 255) * 255, g: qe(t, 255) * 255, b: qe(r, 255) * 255 };
}
function gm(e, t, r) {
  (e = qe(e, 255)), (t = qe(t, 255)), (r = qe(r, 255));
  var n = Math.max(e, t, r),
    i = Math.min(e, t, r),
    o = 0,
    a = 0,
    l = (n + i) / 2;
  if (n === i) (a = 0), (o = 0);
  else {
    var s = n - i;
    switch (((a = l > 0.5 ? s / (2 - n - i) : s / (n + i)), n)) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l };
}
function xc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * (6 * r)
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function XE(e, t, r) {
  var n, i, o;
  if (((e = qe(e, 360)), (t = qe(t, 100)), (r = qe(r, 100)), t === 0))
    (i = r), (o = r), (n = r);
  else {
    var a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (n = xc(l, a, e + 1 / 3)), (i = xc(l, a, e)), (o = xc(l, a, e - 1 / 3));
  }
  return { r: n * 255, g: i * 255, b: o * 255 };
}
function ym(e, t, r) {
  (e = qe(e, 255)), (t = qe(t, 255)), (r = qe(r, 255));
  var n = Math.max(e, t, r),
    i = Math.min(e, t, r),
    o = 0,
    a = n,
    l = n - i,
    s = n === 0 ? 0 : l / n;
  if (n === i) o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: a };
}
function QE(e, t, r) {
  (e = qe(e, 360) * 6), (t = qe(t, 100)), (r = qe(r, 100));
  var n = Math.floor(e),
    i = e - n,
    o = r * (1 - t),
    a = r * (1 - i * t),
    l = r * (1 - (1 - i) * t),
    s = n % 6,
    u = [r, a, o, o, l, r][s],
    c = [l, r, r, a, o, o][s],
    f = [o, o, l, r, r, a][s];
  return { r: u * 255, g: c * 255, b: f * 255 };
}
function xm(e, t, r, n) {
  var i = [
    $n(Math.round(e).toString(16)),
    $n(Math.round(t).toString(16)),
    $n(Math.round(r).toString(16)),
  ];
  return n &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('');
}
function ZE(e, t, r, n, i) {
  var o = [
    $n(Math.round(e).toString(16)),
    $n(Math.round(t).toString(16)),
    $n(Math.round(r).toString(16)),
    $n(qE(n)),
  ];
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('');
}
function qE(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function bm(e) {
  return wt(e) / 255;
}
function wt(e) {
  return parseInt(e, 16);
}
function JE(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var Xf = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function eT(e) {
  var t = { r: 0, g: 0, b: 0 },
    r = 1,
    n = null,
    i = null,
    o = null,
    a = !1,
    l = !1;
  return (
    typeof e == 'string' && (e = nT(e)),
    typeof e == 'object' &&
      (Cr(e.r) && Cr(e.g) && Cr(e.b)
        ? ((t = KE(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Cr(e.h) && Cr(e.s) && Cr(e.v)
        ? ((n = sl(e.s)),
          (i = sl(e.v)),
          (t = QE(e.h, n, i)),
          (a = !0),
          (l = 'hsv'))
        : Cr(e.h) &&
          Cr(e.s) &&
          Cr(e.l) &&
          ((n = sl(e.s)),
          (o = sl(e.l)),
          (t = XE(e.h, n, o)),
          (a = !0),
          (l = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (r = e.a)),
    (r = ox(r)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: r,
    }
  );
}
var tT = '[-\\+]?\\d+%?',
  rT = '[-\\+]?\\d*\\.\\d+%?',
  qr = '(?:'.concat(rT, ')|(?:').concat(tT, ')'),
  bc = '[\\s|\\(]+('
    .concat(qr, ')[,|\\s]+(')
    .concat(qr, ')[,|\\s]+(')
    .concat(qr, ')\\s*\\)?'),
  Sc = '[\\s|\\(]+('
    .concat(qr, ')[,|\\s]+(')
    .concat(qr, ')[,|\\s]+(')
    .concat(qr, ')[,|\\s]+(')
    .concat(qr, ')\\s*\\)?'),
  Kt = {
    CSS_UNIT: new RegExp(qr),
    rgb: new RegExp('rgb' + bc),
    rgba: new RegExp('rgba' + Sc),
    hsl: new RegExp('hsl' + bc),
    hsla: new RegExp('hsla' + Sc),
    hsv: new RegExp('hsv' + bc),
    hsva: new RegExp('hsva' + Sc),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function nT(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Xf[e]) (e = Xf[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var r = Kt.rgb.exec(e);
  return r
    ? { r: r[1], g: r[2], b: r[3] }
    : ((r = Kt.rgba.exec(e)),
      r
        ? { r: r[1], g: r[2], b: r[3], a: r[4] }
        : ((r = Kt.hsl.exec(e)),
          r
            ? { h: r[1], s: r[2], l: r[3] }
            : ((r = Kt.hsla.exec(e)),
              r
                ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                : ((r = Kt.hsv.exec(e)),
                  r
                    ? { h: r[1], s: r[2], v: r[3] }
                    : ((r = Kt.hsva.exec(e)),
                      r
                        ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                        : ((r = Kt.hex8.exec(e)),
                          r
                            ? {
                                r: wt(r[1]),
                                g: wt(r[2]),
                                b: wt(r[3]),
                                a: bm(r[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((r = Kt.hex6.exec(e)),
                              r
                                ? {
                                    r: wt(r[1]),
                                    g: wt(r[2]),
                                    b: wt(r[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((r = Kt.hex4.exec(e)),
                                  r
                                    ? {
                                        r: wt(r[1] + r[1]),
                                        g: wt(r[2] + r[2]),
                                        b: wt(r[3] + r[3]),
                                        a: bm(r[4] + r[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((r = Kt.hex3.exec(e)),
                                      r
                                        ? {
                                            r: wt(r[1] + r[1]),
                                            g: wt(r[2] + r[2]),
                                            b: wt(r[3] + r[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function Cr(e) {
  return Boolean(Kt.CSS_UNIT.exec(String(e)));
}
var _a = (function () {
  function e(t, r) {
    t === void 0 && (t = ''), r === void 0 && (r = {});
    var n;
    if (t instanceof e) return t;
    typeof t == 'number' && (t = JE(t)), (this.originalInput = t);
    var i = eT(t);
    (this.originalInput = t),
      (this.r = i.r),
      (this.g = i.g),
      (this.b = i.b),
      (this.a = i.a),
      (this.roundA = Math.round(100 * this.a) / 100),
      (this.format = (n = r.format) !== null && n !== void 0 ? n : i.format),
      (this.gradientType = r.gradientType),
      this.r < 1 && (this.r = Math.round(this.r)),
      this.g < 1 && (this.g = Math.round(this.g)),
      this.b < 1 && (this.b = Math.round(this.b)),
      (this.isValid = i.ok);
  }
  return (
    (e.prototype.isDark = function () {
      return this.getBrightness() < 128;
    }),
    (e.prototype.isLight = function () {
      return !this.isDark();
    }),
    (e.prototype.getBrightness = function () {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }),
    (e.prototype.getLuminance = function () {
      var t = this.toRgb(),
        r,
        n,
        i,
        o = t.r / 255,
        a = t.g / 255,
        l = t.b / 255;
      return (
        o <= 0.03928
          ? (r = o / 12.92)
          : (r = Math.pow((o + 0.055) / 1.055, 2.4)),
        a <= 0.03928
          ? (n = a / 12.92)
          : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
        l <= 0.03928
          ? (i = l / 12.92)
          : (i = Math.pow((l + 0.055) / 1.055, 2.4)),
        0.2126 * r + 0.7152 * n + 0.0722 * i
      );
    }),
    (e.prototype.getAlpha = function () {
      return this.a;
    }),
    (e.prototype.setAlpha = function (t) {
      return (
        (this.a = ox(t)), (this.roundA = Math.round(100 * this.a) / 100), this
      );
    }),
    (e.prototype.toHsv = function () {
      var t = ym(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }),
    (e.prototype.toHsvString = function () {
      var t = ym(this.r, this.g, this.b),
        r = Math.round(t.h * 360),
        n = Math.round(t.s * 100),
        i = Math.round(t.v * 100);
      return this.a === 1
        ? 'hsv('.concat(r, ', ').concat(n, '%, ').concat(i, '%)')
        : 'hsva('
            .concat(r, ', ')
            .concat(n, '%, ')
            .concat(i, '%, ')
            .concat(this.roundA, ')');
    }),
    (e.prototype.toHsl = function () {
      var t = gm(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }),
    (e.prototype.toHslString = function () {
      var t = gm(this.r, this.g, this.b),
        r = Math.round(t.h * 360),
        n = Math.round(t.s * 100),
        i = Math.round(t.l * 100);
      return this.a === 1
        ? 'hsl('.concat(r, ', ').concat(n, '%, ').concat(i, '%)')
        : 'hsla('
            .concat(r, ', ')
            .concat(n, '%, ')
            .concat(i, '%, ')
            .concat(this.roundA, ')');
    }),
    (e.prototype.toHex = function (t) {
      return t === void 0 && (t = !1), xm(this.r, this.g, this.b, t);
    }),
    (e.prototype.toHexString = function (t) {
      return t === void 0 && (t = !1), '#' + this.toHex(t);
    }),
    (e.prototype.toHex8 = function (t) {
      return t === void 0 && (t = !1), ZE(this.r, this.g, this.b, this.a, t);
    }),
    (e.prototype.toHex8String = function (t) {
      return t === void 0 && (t = !1), '#' + this.toHex8(t);
    }),
    (e.prototype.toRgb = function () {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a,
      };
    }),
    (e.prototype.toRgbString = function () {
      var t = Math.round(this.r),
        r = Math.round(this.g),
        n = Math.round(this.b);
      return this.a === 1
        ? 'rgb('.concat(t, ', ').concat(r, ', ').concat(n, ')')
        : 'rgba('
            .concat(t, ', ')
            .concat(r, ', ')
            .concat(n, ', ')
            .concat(this.roundA, ')');
    }),
    (e.prototype.toPercentageRgb = function () {
      var t = function (r) {
        return ''.concat(Math.round(qe(r, 255) * 100), '%');
      };
      return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
    }),
    (e.prototype.toPercentageRgbString = function () {
      var t = function (r) {
        return Math.round(qe(r, 255) * 100);
      };
      return this.a === 1
        ? 'rgb('
            .concat(t(this.r), '%, ')
            .concat(t(this.g), '%, ')
            .concat(t(this.b), '%)')
        : 'rgba('
            .concat(t(this.r), '%, ')
            .concat(t(this.g), '%, ')
            .concat(t(this.b), '%, ')
            .concat(this.roundA, ')');
    }),
    (e.prototype.toName = function () {
      if (this.a === 0) return 'transparent';
      if (this.a < 1) return !1;
      for (
        var t = '#' + xm(this.r, this.g, this.b, !1),
          r = 0,
          n = Object.entries(Xf);
        r < n.length;
        r++
      ) {
        var i = n[r],
          o = i[0],
          a = i[1];
        if (t === a) return o;
      }
      return !1;
    }),
    (e.prototype.toString = function (t) {
      var r = Boolean(t);
      t = t != null ? t : this.format;
      var n = !1,
        i = this.a < 1 && this.a >= 0,
        o = !r && i && (t.startsWith('hex') || t === 'name');
      return o
        ? t === 'name' && this.a === 0
          ? this.toName()
          : this.toRgbString()
        : (t === 'rgb' && (n = this.toRgbString()),
          t === 'prgb' && (n = this.toPercentageRgbString()),
          (t === 'hex' || t === 'hex6') && (n = this.toHexString()),
          t === 'hex3' && (n = this.toHexString(!0)),
          t === 'hex4' && (n = this.toHex8String(!0)),
          t === 'hex8' && (n = this.toHex8String()),
          t === 'name' && (n = this.toName()),
          t === 'hsl' && (n = this.toHslString()),
          t === 'hsv' && (n = this.toHsvString()),
          n || this.toHexString());
    }),
    (e.prototype.toNumber = function () {
      return (
        (Math.round(this.r) << 16) +
        (Math.round(this.g) << 8) +
        Math.round(this.b)
      );
    }),
    (e.prototype.clone = function () {
      return new e(this.toString());
    }),
    (e.prototype.lighten = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.l += t / 100), (r.l = ll(r.l)), new e(r);
    }),
    (e.prototype.brighten = function (t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return (
        (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100))))),
        (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100))))),
        (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100))))),
        new e(r)
      );
    }),
    (e.prototype.darken = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.l -= t / 100), (r.l = ll(r.l)), new e(r);
    }),
    (e.prototype.tint = function (t) {
      return t === void 0 && (t = 10), this.mix('white', t);
    }),
    (e.prototype.shade = function (t) {
      return t === void 0 && (t = 10), this.mix('black', t);
    }),
    (e.prototype.desaturate = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.s -= t / 100), (r.s = ll(r.s)), new e(r);
    }),
    (e.prototype.saturate = function (t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return (r.s += t / 100), (r.s = ll(r.s)), new e(r);
    }),
    (e.prototype.greyscale = function () {
      return this.desaturate(100);
    }),
    (e.prototype.spin = function (t) {
      var r = this.toHsl(),
        n = (r.h + t) % 360;
      return (r.h = n < 0 ? 360 + n : n), new e(r);
    }),
    (e.prototype.mix = function (t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(),
        i = new e(t).toRgb(),
        o = r / 100,
        a = {
          r: (i.r - n.r) * o + n.r,
          g: (i.g - n.g) * o + n.g,
          b: (i.b - n.b) * o + n.b,
          a: (i.a - n.a) * o + n.a,
        };
      return new e(a);
    }),
    (e.prototype.analogous = function (t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(),
        i = 360 / r,
        o = [this];
      for (n.h = (n.h - ((i * t) >> 1) + 720) % 360; --t; )
        (n.h = (n.h + i) % 360), o.push(new e(n));
      return o;
    }),
    (e.prototype.complement = function () {
      var t = this.toHsl();
      return (t.h = (t.h + 180) % 360), new e(t);
    }),
    (e.prototype.monochromatic = function (t) {
      t === void 0 && (t = 6);
      for (
        var r = this.toHsv(), n = r.h, i = r.s, o = r.v, a = [], l = 1 / t;
        t--;

      )
        a.push(new e({ h: n, s: i, v: o })), (o = (o + l) % 1);
      return a;
    }),
    (e.prototype.splitcomplement = function () {
      var t = this.toHsl(),
        r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
      ];
    }),
    (e.prototype.onBackground = function (t) {
      var r = this.toRgb(),
        n = new e(t).toRgb();
      return new e({
        r: n.r + (r.r - n.r) * r.a,
        g: n.g + (r.g - n.g) * r.a,
        b: n.b + (r.b - n.b) * r.a,
      });
    }),
    (e.prototype.triad = function () {
      return this.polyad(3);
    }),
    (e.prototype.tetrad = function () {
      return this.polyad(4);
    }),
    (e.prototype.polyad = function (t) {
      for (
        var r = this.toHsl(), n = r.h, i = [this], o = 360 / t, a = 1;
        a < t;
        a++
      )
        i.push(new e({ h: (n + a * o) % 360, s: r.s, l: r.l }));
      return i;
    }),
    (e.prototype.equals = function (t) {
      return this.toRgbString() === new e(t).toRgbString();
    }),
    e
  );
})();
function ax(e) {
  if ((e === void 0 && (e = {}), e.count !== void 0 && e.count !== null)) {
    var t = e.count,
      r = [];
    for (e.count = void 0; t > r.length; )
      (e.count = null), e.seed && (e.seed += 1), r.push(ax(e));
    return (e.count = t), r;
  }
  var n = iT(e.hue, e.seed),
    i = oT(n, e),
    o = aT(n, i, e),
    a = { h: n, s: i, v: o };
  return e.alpha !== void 0 && (a.a = e.alpha), new _a(a);
}
function iT(e, t) {
  var r = sT(e),
    n = bs(r, t);
  return n < 0 && (n = 360 + n), n;
}
function oT(e, t) {
  if (t.hue === 'monochrome') return 0;
  if (t.luminosity === 'random') return bs([0, 100], t.seed);
  var r = lx(e).saturationRange,
    n = r[0],
    i = r[1];
  switch (t.luminosity) {
    case 'bright':
      n = 55;
      break;
    case 'dark':
      n = i - 10;
      break;
    case 'light':
      i = 55;
      break;
  }
  return bs([n, i], t.seed);
}
function aT(e, t, r) {
  var n = lT(e, t),
    i = 100;
  switch (r.luminosity) {
    case 'dark':
      i = n + 20;
      break;
    case 'light':
      n = (i + n) / 2;
      break;
    case 'random':
      (n = 0), (i = 100);
      break;
  }
  return bs([n, i], r.seed);
}
function lT(e, t) {
  for (var r = lx(e).lowerBounds, n = 0; n < r.length - 1; n++) {
    var i = r[n][0],
      o = r[n][1],
      a = r[n + 1][0],
      l = r[n + 1][1];
    if (t >= i && t <= a) {
      var s = (l - o) / (a - i),
        u = o - s * i;
      return s * t + u;
    }
  }
  return 0;
}
function sT(e) {
  var t = parseInt(e, 10);
  if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t];
  if (typeof e == 'string') {
    var r = ux.find(function (a) {
      return a.name === e;
    });
    if (r) {
      var n = sx(r);
      if (n.hueRange) return n.hueRange;
    }
    var i = new _a(e);
    if (i.isValid) {
      var o = i.toHsv().h;
      return [o, o];
    }
  }
  return [0, 360];
}
function lx(e) {
  e >= 334 && e <= 360 && (e -= 360);
  for (var t = 0, r = ux; t < r.length; t++) {
    var n = r[t],
      i = sx(n);
    if (i.hueRange && e >= i.hueRange[0] && e <= i.hueRange[1]) return i;
  }
  throw Error('Color not found');
}
function bs(e, t) {
  if (t === void 0) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
  var r = e[1] || 1,
    n = e[0] || 0;
  t = (t * 9301 + 49297) % 233280;
  var i = t / 233280;
  return Math.floor(n + i * (r - n));
}
function sx(e) {
  var t = e.lowerBounds[0][0],
    r = e.lowerBounds[e.lowerBounds.length - 1][0],
    n = e.lowerBounds[e.lowerBounds.length - 1][1],
    i = e.lowerBounds[0][1];
  return {
    name: e.name,
    hueRange: e.hueRange,
    lowerBounds: e.lowerBounds,
    saturationRange: [t, r],
    brightnessRange: [n, i],
  };
}
var ux = [
    {
      name: 'monochrome',
      hueRange: null,
      lowerBounds: [
        [0, 0],
        [100, 0],
      ],
    },
    {
      name: 'red',
      hueRange: [-26, 18],
      lowerBounds: [
        [20, 100],
        [30, 92],
        [40, 89],
        [50, 85],
        [60, 78],
        [70, 70],
        [80, 60],
        [90, 55],
        [100, 50],
      ],
    },
    {
      name: 'orange',
      hueRange: [19, 46],
      lowerBounds: [
        [20, 100],
        [30, 93],
        [40, 88],
        [50, 86],
        [60, 85],
        [70, 70],
        [100, 70],
      ],
    },
    {
      name: 'yellow',
      hueRange: [47, 62],
      lowerBounds: [
        [25, 100],
        [40, 94],
        [50, 89],
        [60, 86],
        [70, 84],
        [80, 82],
        [90, 80],
        [100, 75],
      ],
    },
    {
      name: 'green',
      hueRange: [63, 178],
      lowerBounds: [
        [30, 100],
        [40, 90],
        [50, 85],
        [60, 81],
        [70, 74],
        [80, 64],
        [90, 50],
        [100, 40],
      ],
    },
    {
      name: 'blue',
      hueRange: [179, 257],
      lowerBounds: [
        [20, 100],
        [30, 86],
        [40, 80],
        [50, 74],
        [60, 60],
        [70, 52],
        [80, 44],
        [90, 39],
        [100, 35],
      ],
    },
    {
      name: 'purple',
      hueRange: [258, 282],
      lowerBounds: [
        [20, 100],
        [30, 87],
        [40, 79],
        [50, 70],
        [60, 65],
        [70, 59],
        [80, 52],
        [90, 45],
        [100, 42],
      ],
    },
    {
      name: 'pink',
      hueRange: [283, 334],
      lowerBounds: [
        [20, 100],
        [30, 90],
        [40, 86],
        [60, 84],
        [80, 80],
        [90, 75],
        [100, 73],
      ],
    },
  ],
  We = function (t, r, n) {
    var i = vu(t, 'colors.' + r, r),
      o = new _a(i),
      a = o.isValid;
    return a ? i : n;
  },
  uT = function (t) {
    return function (r) {
      var n = We(r, t),
        i = new _a(n).isDark();
      return i ? 'dark' : 'light';
    };
  },
  cT = function (t) {
    return function (r) {
      return uT(t)(r) === 'dark';
    };
  },
  Bi = function (t, r) {
    return function (n) {
      var i = We(n, t);
      return new _a(i).setAlpha(r).toRgbString();
    };
  };
function Sm(e, t) {
  return (
    e === void 0 && (e = '1rem'),
    t === void 0 && (t = 'rgba(255, 255, 255, 0.15)'),
    {
      backgroundImage:
        `linear-gradient(
    45deg,
    ` +
        t +
        ` 25%,
    transparent 25%,
    transparent 50%,
    ` +
        t +
        ` 50%,
    ` +
        t +
        ` 75%,
    transparent 75%,
    transparent
  )`,
      backgroundSize: e + ' ' + e,
    }
  );
}
function fT(e) {
  var t = ax().toHexString();
  return !e || C_(e)
    ? t
    : e.string && e.colors
    ? pT(e.string, e.colors)
    : e.string && !e.colors
    ? dT(e.string)
    : e.colors && !e.string
    ? hT(e.colors)
    : t;
}
function dT(e) {
  var t = 0;
  if (e.length === 0) return t.toString();
  for (var r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  for (var n = '#', i = 0; i < 3; i += 1) {
    var o = (t >> (i * 8)) & 255;
    n += ('00' + o.toString(16)).substr(-2);
  }
  return n;
}
function pT(e, t) {
  var r = 0;
  if (e.length === 0) return t[0];
  for (var n = 0; n < e.length; n += 1)
    (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function hT(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function O(e, t) {
  return function (r) {
    return r.colorMode === 'dark' ? t : e;
  };
}
function Ea(e) {
  var t = e.orientation,
    r = e.vertical,
    n = e.horizontal;
  return t ? (t === 'vertical' ? r : n) : {};
}
function Qf() {
  return (
    (Qf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Qf.apply(this, arguments)
  );
}
var vT = function (t) {
  return (
    O_({
      condition: !0,
      message: [
        '[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon',
        'simply pass the breakpoints as an object. Remove the createBreakpoint(..) call',
      ].join(''),
    }),
    Qf({ base: '0em' }, t)
  );
};
function wm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function mT(e, t, r) {
  return (
    t && wm(e.prototype, t),
    r && wm(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var gT = (function () {
  function e(t) {
    var r = this;
    (this.map = {}),
      (this.called = !1),
      (this.assert = function () {
        if (!r.called) {
          r.called = !0;
          return;
        }
        throw new Error(
          '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
        );
      }),
      (this.parts = function () {
        r.assert();
        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        for (var a = 0, l = i; a < l.length; a++) {
          var s = l[a];
          r.map[s] = r.toPart(s);
        }
        return r;
      }),
      (this.extend = function () {
        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        for (var a = 0, l = i; a < l.length; a++) {
          var s = l[a];
          s in r.map || (r.map[s] = r.toPart(s));
        }
        return r;
      }),
      (this.toPart = function (n) {
        var i = ['container', 'root'].includes(n != null ? n : '')
            ? [r.name]
            : [r.name, n],
          o = i.filter(Boolean).join('__'),
          a = 'chakra-' + o,
          l = {
            className: a,
            selector: '.' + a,
            toString: function () {
              return n;
            },
          };
        return l;
      }),
      (this.__type = {});
  }
  return (
    mT(e, [
      {
        key: 'selectors',
        get: function () {
          var r = gs(
            Object.entries(this.map).map(function (n) {
              var i = n[0],
                o = n[1];
              return [i, o.selector];
            })
          );
          return r;
        },
      },
      {
        key: 'classNames',
        get: function () {
          var r = gs(
            Object.entries(this.map).map(function (n) {
              var i = n[0],
                o = n[1];
              return [i, o.className];
            })
          );
          return r;
        },
      },
      {
        key: 'keys',
        get: function () {
          return Object.keys(this.map);
        },
      },
    ]),
    e
  );
})();
function ge(e) {
  return new gT(e);
}
function cx(e) {
  return yt(e) && e.reference ? e.reference : String(e);
}
var wu = function (t) {
    for (
      var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
      i < r;
      i++
    )
      n[i - 1] = arguments[i];
    return n
      .map(cx)
      .join(' ' + t + ' ')
      .replace(/calc/g, '');
  },
  km = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + wu.apply(void 0, ['+'].concat(r)) + ')';
  },
  Cm = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + wu.apply(void 0, ['-'].concat(r)) + ')';
  },
  Zf = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + wu.apply(void 0, ['*'].concat(r)) + ')';
  },
  _m = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return 'calc(' + wu.apply(void 0, ['/'].concat(r)) + ')';
  },
  Em = function (t) {
    var r = cx(t);
    return r != null && !Number.isNaN(parseFloat(r))
      ? String(r).startsWith('-')
        ? String(r).slice(1)
        : '-' + r
      : Zf(r, -1);
  },
  Pr = Object.assign(
    function (e) {
      return {
        add: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(km.apply(void 0, [e].concat(n)));
        },
        subtract: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(Cm.apply(void 0, [e].concat(n)));
        },
        multiply: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(Zf.apply(void 0, [e].concat(n)));
        },
        divide: function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          return Pr(_m.apply(void 0, [e].concat(n)));
        },
        negate: function () {
          return Pr(Em(e));
        },
        toString: function () {
          return e.toString();
        },
      };
    },
    { add: km, subtract: Cm, multiply: Zf, divide: _m, negate: Em }
  );
function yT(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function xT(e, t) {
  return t === void 0 && (t = '-'), e.replace(/\s+/g, t);
}
function fx(e) {
  var t = xT(e.toString());
  return t.includes('\\.') ? e : yT(e) ? t.replace('.', '\\.') : e;
}
function bT(e, t) {
  return t === void 0 && (t = ''), [t, fx(e)].filter(Boolean).join('-');
}
function ST(e, t) {
  return 'var(' + fx(e) + (t ? ', ' + t : '') + ')';
}
function wT(e, t) {
  return t === void 0 && (t = ''), '--' + bT(e, t);
}
function $t(e, t) {
  var r = wT(e, t == null ? void 0 : t.prefix);
  return { variable: r, reference: ST(r, kT(t == null ? void 0 : t.fallback)) };
}
function kT(e) {
  return typeof e == 'string' ? e : e == null ? void 0 : e.reference;
}
var CT = ge('accordion')
    .parts('root', 'container', 'button', 'panel')
    .extend('icon'),
  _T = ge('alert')
    .parts('title', 'description', 'container')
    .extend('icon', 'spinner'),
  ET = ge('avatar')
    .parts('label', 'badge', 'container')
    .extend('excessLabel', 'group'),
  TT = ge('breadcrumb').parts('link', 'item', 'container').extend('separator');
ge('button').parts();
var PT = ge('checkbox').parts('control', 'icon', 'container').extend('label');
ge('progress').parts('track', 'filledTrack').extend('label');
var RT = ge('drawer')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  AT = ge('editable').parts('preview', 'input', 'textarea'),
  MT = ge('form').parts('container', 'requiredIndicator', 'helperText'),
  $T = ge('formError').parts('text', 'icon'),
  OT = ge('input').parts('addon', 'field', 'element'),
  IT = ge('list').parts('container', 'item', 'icon'),
  LT = ge('menu')
    .parts('button', 'list', 'item')
    .extend('groupTitle', 'command', 'divider'),
  zT = ge('modal')
    .parts('overlay', 'dialogContainer', 'dialog')
    .extend('header', 'closeButton', 'body', 'footer'),
  NT = ge('numberinput').parts('root', 'field', 'stepperGroup', 'stepper');
ge('pininput').parts('field');
var FT = ge('popover')
    .parts('content', 'header', 'body', 'footer')
    .extend('popper', 'arrow', 'closeButton'),
  DT = ge('progress').parts('label', 'filledTrack', 'track'),
  BT = ge('radio').parts('container', 'control', 'label'),
  VT = ge('select').parts('field', 'icon'),
  jT = ge('slider').parts('container', 'track', 'thumb', 'filledTrack'),
  WT = ge('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
  HT = ge('switch').parts('container', 'track', 'thumb'),
  UT = ge('table').parts(
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'tfoot',
    'caption'
  ),
  YT = ge('tabs').parts(
    'root',
    'tab',
    'tablist',
    'tabpanel',
    'tabpanels',
    'indicator'
  ),
  GT = ge('tag').parts('container', 'label', 'closeButton'),
  dx = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
  },
  KT = {
    borderTopWidth: '1px',
    borderColor: 'inherit',
    _last: { borderBottomWidth: '1px' },
  },
  XT = {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    fontSize: '1rem',
    _focus: { boxShadow: 'outline' },
    _hover: { bg: 'blackAlpha.50' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    px: 4,
    py: 2,
  },
  QT = { pt: 2, px: 4, pb: 5 },
  ZT = { fontSize: '1.25em' },
  qT = { root: {}, container: KT, button: XT, panel: QT, icon: ZT },
  JT = { parts: CT.keys, baseStyle: qT },
  eP = {
    container: { px: 4, py: 3 },
    title: { fontWeight: 'bold', lineHeight: 6, marginEnd: 2 },
    description: { lineHeight: 6 },
    icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 },
    spinner: { flexShrink: 0, marginEnd: 3, w: 5, h: 5 },
  };
function $p(e) {
  var t = e.theme,
    r = e.colorScheme,
    n = We(t, r + '.100', r),
    i = Bi(r + '.200', 0.16)(t);
  return O(n, i)(e);
}
var tP = function (t) {
    var r = t.colorScheme;
    return {
      container: { bg: $p(t) },
      icon: { color: O(r + '.500', r + '.200')(t) },
      spinner: { color: O(r + '.500', r + '.200')(t) },
    };
  },
  rP = function (t) {
    var r = t.colorScheme;
    return {
      container: {
        paddingStart: 3,
        borderStartWidth: '4px',
        borderStartColor: O(r + '.500', r + '.200')(t),
        bg: $p(t),
      },
      icon: { color: O(r + '.500', r + '.200')(t) },
      spinner: { color: O(r + '.500', r + '.200')(t) },
    };
  },
  nP = function (t) {
    var r = t.colorScheme;
    return {
      container: {
        pt: 2,
        borderTopWidth: '4px',
        borderTopColor: O(r + '.500', r + '.200')(t),
        bg: $p(t),
      },
      icon: { color: O(r + '.500', r + '.200')(t) },
      spinner: { color: O(r + '.500', r + '.200')(t) },
    };
  },
  iP = function (t) {
    var r = t.colorScheme;
    return {
      container: {
        bg: O(r + '.500', r + '.200')(t),
        color: O('white', 'gray.900')(t),
      },
    };
  },
  oP = { subtle: tP, 'left-accent': rP, 'top-accent': nP, solid: iP },
  aP = { variant: 'subtle', colorScheme: 'blue' },
  lP = { parts: _T.keys, baseStyle: eP, variants: oP, defaultProps: aP },
  sP = function (t) {
    return {
      transform: 'translate(25%, 25%)',
      borderRadius: 'full',
      border: '0.2em solid',
      borderColor: O('white', 'gray.800')(t),
    };
  },
  uP = function (t) {
    return { bg: O('gray.200', 'whiteAlpha.400')(t) };
  },
  cP = function (t) {
    var r = t.name,
      n = t.theme,
      i = r ? fT({ string: r }) : 'gray.400',
      o = cT(i)(n),
      a = 'white';
    o || (a = 'gray.800');
    var l = O('white', 'gray.800')(t);
    return { bg: i, color: a, borderColor: l, verticalAlign: 'top' };
  },
  fP = function (t) {
    return { badge: sP(t), excessLabel: uP(t), container: cP(t) };
  };
function jr(e) {
  var t = e !== '100%' ? ix[e] : void 0;
  return {
    container: {
      width: e,
      height: e,
      fontSize: 'calc(' + (t != null ? t : e) + ' / 2.5)',
    },
    excessLabel: { width: e, height: e },
    label: {
      fontSize: 'calc(' + (t != null ? t : e) + ' / 2.5)',
      lineHeight: e !== '100%' ? (t != null ? t : e) : void 0,
    },
  };
}
var dP = {
    '2xs': jr(4),
    xs: jr(6),
    sm: jr(8),
    md: jr(12),
    lg: jr(16),
    xl: jr(24),
    '2xl': jr(32),
    full: jr('100%'),
  },
  pP = { size: 'md' },
  hP = { parts: ET.keys, baseStyle: fP, sizes: dP, defaultProps: pP },
  vP = {
    px: 1,
    textTransform: 'uppercase',
    fontSize: 'xs',
    borderRadius: 'sm',
    fontWeight: 'bold',
  },
  mP = function (t) {
    var r = t.colorScheme,
      n = t.theme,
      i = Bi(r + '.500', 0.6)(n);
    return { bg: O(r + '.500', i)(t), color: O('white', 'whiteAlpha.800')(t) };
  },
  gP = function (t) {
    var r = t.colorScheme,
      n = t.theme,
      i = Bi(r + '.200', 0.16)(n);
    return { bg: O(r + '.100', i)(t), color: O(r + '.800', r + '.200')(t) };
  },
  yP = function (t) {
    var r = t.colorScheme,
      n = t.theme,
      i = Bi(r + '.200', 0.8)(n),
      o = We(n, r + '.500'),
      a = O(o, i)(t);
    return { color: a, boxShadow: 'inset 0 0 0px 1px ' + a };
  },
  xP = { solid: mP, subtle: gP, outline: yP },
  bP = { variant: 'subtle', colorScheme: 'gray' },
  Ei = { baseStyle: vP, variants: xP, defaultProps: bP },
  SP = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focus: { boxShadow: 'outline' },
  },
  wP = { link: SP },
  kP = { parts: TT.keys, baseStyle: wP },
  CP = {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focus: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
    _hover: { _disabled: { bg: 'initial' } },
  },
  px = function (t) {
    var r = t.colorScheme,
      n = t.theme;
    if (r === 'gray')
      return {
        color: O('inherit', 'whiteAlpha.900')(t),
        _hover: { bg: O('gray.100', 'whiteAlpha.200')(t) },
        _active: { bg: O('gray.200', 'whiteAlpha.300')(t) },
      };
    var i = Bi(r + '.200', 0.12)(n),
      o = Bi(r + '.200', 0.24)(n);
    return {
      color: O(r + '.600', r + '.200')(t),
      bg: 'transparent',
      _hover: { bg: O(r + '.50', i)(t) },
      _active: { bg: O(r + '.100', o)(t) },
    };
  },
  _P = function (t) {
    var r = t.colorScheme,
      n = O('gray.200', 'whiteAlpha.300')(t);
    return Le(
      {
        border: '1px solid',
        borderColor: r === 'gray' ? n : 'currentColor',
        '.chakra-button__group[data-attached] > &:not(:last-of-type)': {
          marginEnd: '-1px',
        },
      },
      px(t)
    );
  },
  EP = {
    yellow: {
      bg: 'yellow.400',
      color: 'black',
      hoverBg: 'yellow.500',
      activeBg: 'yellow.600',
    },
    cyan: {
      bg: 'cyan.400',
      color: 'black',
      hoverBg: 'cyan.500',
      activeBg: 'cyan.600',
    },
  },
  TP = function (t) {
    var r,
      n = t.colorScheme;
    if (n === 'gray') {
      var i = O('gray.100', 'whiteAlpha.200')(t);
      return {
        bg: i,
        _hover: {
          bg: O('gray.200', 'whiteAlpha.300')(t),
          _disabled: { bg: i },
        },
        _active: { bg: O('gray.300', 'whiteAlpha.400')(t) },
      };
    }
    var o = (r = EP[n]) != null ? r : {},
      a = o.bg,
      l = a === void 0 ? n + '.500' : a,
      s = o.color,
      u = s === void 0 ? 'white' : s,
      c = o.hoverBg,
      f = c === void 0 ? n + '.600' : c,
      d = o.activeBg,
      p = d === void 0 ? n + '.700' : d,
      h = O(l, n + '.200')(t);
    return {
      bg: h,
      color: O(u, 'gray.800')(t),
      _hover: { bg: O(f, n + '.300')(t), _disabled: { bg: h } },
      _active: { bg: O(p, n + '.400')(t) },
    };
  },
  PP = function (t) {
    var r = t.colorScheme;
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: O(r + '.500', r + '.200')(t),
      _hover: {
        textDecoration: 'underline',
        _disabled: { textDecoration: 'none' },
      },
      _active: { color: O(r + '.700', r + '.500')(t) },
    };
  },
  RP = {
    bg: 'none',
    color: 'inherit',
    display: 'inline',
    lineHeight: 'inherit',
    m: 0,
    p: 0,
  },
  AP = { ghost: px, outline: _P, solid: TP, link: PP, unstyled: RP },
  MP = {
    lg: { h: 12, minW: 12, fontSize: 'lg', px: 6 },
    md: { h: 10, minW: 10, fontSize: 'md', px: 4 },
    sm: { h: 8, minW: 8, fontSize: 'sm', px: 3 },
    xs: { h: 6, minW: 6, fontSize: 'xs', px: 2 },
  },
  $P = { variant: 'solid', size: 'md', colorScheme: 'gray' },
  OP = { baseStyle: CP, variants: AP, sizes: MP, defaultProps: $P },
  IP = function (t) {
    var r = t.colorScheme;
    return {
      w: '100%',
      transitionProperty: 'box-shadow',
      transitionDuration: 'normal',
      border: '2px solid',
      borderRadius: 'sm',
      borderColor: 'inherit',
      color: 'white',
      _checked: {
        bg: O(r + '.500', r + '.200')(t),
        borderColor: O(r + '.500', r + '.200')(t),
        color: O('white', 'gray.900')(t),
        _hover: {
          bg: O(r + '.600', r + '.300')(t),
          borderColor: O(r + '.600', r + '.300')(t),
        },
        _disabled: {
          borderColor: O('gray.200', 'transparent')(t),
          bg: O('gray.200', 'whiteAlpha.300')(t),
          color: O('gray.500', 'whiteAlpha.500')(t),
        },
      },
      _indeterminate: {
        bg: O(r + '.500', r + '.200')(t),
        borderColor: O(r + '.500', r + '.200')(t),
        color: O('white', 'gray.900')(t),
      },
      _disabled: {
        bg: O('gray.100', 'whiteAlpha.100')(t),
        borderColor: O('gray.100', 'transparent')(t),
      },
      _focus: { boxShadow: 'outline' },
      _invalid: { borderColor: O('red.500', 'red.300')(t) },
    };
  },
  LP = { _disabled: { cursor: 'not-allowed' } },
  zP = { userSelect: 'none', _disabled: { opacity: 0.4 } },
  NP = { transitionProperty: 'transform', transitionDuration: 'normal' },
  FP = function (t) {
    return { icon: NP, container: LP, control: IP(t), label: zP };
  },
  DP = {
    sm: {
      control: { h: 3, w: 3 },
      label: { fontSize: 'sm' },
      icon: { fontSize: '0.45rem' },
    },
    md: {
      control: { w: 4, h: 4 },
      label: { fontSize: 'md' },
      icon: { fontSize: '0.625rem' },
    },
    lg: {
      control: { w: 5, h: 5 },
      label: { fontSize: 'lg' },
      icon: { fontSize: '0.625rem' },
    },
  },
  BP = { size: 'md', colorScheme: 'blue' },
  Ss = { parts: PT.keys, baseStyle: FP, sizes: DP, defaultProps: BP },
  ul,
  cl,
  fl,
  To = $t('close-button-size'),
  VP = function (t) {
    var r = O('blackAlpha.100', 'whiteAlpha.100')(t),
      n = O('blackAlpha.200', 'whiteAlpha.200')(t);
    return {
      w: [To.reference],
      h: [To.reference],
      borderRadius: 'md',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
      _hover: { bg: r },
      _active: { bg: n },
      _focus: { boxShadow: 'outline' },
    };
  },
  jP = {
    lg: ((ul = {}), (ul[To.variable] = '40px'), (ul.fontSize = '16px'), ul),
    md: ((cl = {}), (cl[To.variable] = '32px'), (cl.fontSize = '12px'), cl),
    sm: ((fl = {}), (fl[To.variable] = '24px'), (fl.fontSize = '10px'), fl),
  },
  WP = { size: 'md' },
  HP = { baseStyle: VP, sizes: jP, defaultProps: WP },
  UP = Ei.variants,
  YP = Ei.defaultProps,
  GP = { fontFamily: 'mono', fontSize: 'sm', px: '0.2em', borderRadius: 'sm' },
  KP = { baseStyle: GP, variants: UP, defaultProps: YP },
  XP = { w: '100%', mx: 'auto', maxW: '60ch', px: '1rem' },
  QP = { baseStyle: XP },
  ZP = { opacity: 0.6, borderColor: 'inherit' },
  qP = { borderStyle: 'solid' },
  JP = { borderStyle: 'dashed' },
  e4 = { solid: qP, dashed: JP },
  t4 = { variant: 'solid' },
  r4 = { baseStyle: ZP, variants: e4, defaultProps: t4 };
function ei(e) {
  return e === 'full'
    ? { dialog: { maxW: '100vw', h: '100vh' } }
    : { dialog: { maxW: e } };
}
var n4 = { bg: 'blackAlpha.600', zIndex: 'overlay' },
  i4 = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
  o4 = function (t) {
    var r = t.isFullHeight;
    return Le({}, r && { height: '100vh' }, {
      zIndex: 'modal',
      maxH: '100vh',
      bg: O('white', 'gray.700')(t),
      color: 'inherit',
      boxShadow: O('lg', 'dark-lg')(t),
    });
  },
  a4 = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
  l4 = { position: 'absolute', top: 2, insetEnd: 3 },
  s4 = { px: 6, py: 2, flex: 1, overflow: 'auto' },
  u4 = { px: 6, py: 4 },
  c4 = function (t) {
    return {
      overlay: n4,
      dialogContainer: i4,
      dialog: o4(t),
      header: a4,
      closeButton: l4,
      body: s4,
      footer: u4,
    };
  },
  f4 = {
    xs: ei('xs'),
    sm: ei('md'),
    md: ei('lg'),
    lg: ei('2xl'),
    xl: ei('4xl'),
    full: ei('full'),
  },
  d4 = { size: 'xs' },
  p4 = { parts: RT.keys, baseStyle: c4, sizes: f4, defaultProps: d4 },
  h4 = {
    borderRadius: 'md',
    py: '3px',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
  v4 = {
    borderRadius: 'md',
    py: '3px',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focus: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  m4 = {
    borderRadius: 'md',
    py: '3px',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    width: 'full',
    _focus: { boxShadow: 'outline' },
    _placeholder: { opacity: 0.6 },
  },
  g4 = { preview: h4, input: v4, textarea: m4 },
  y4 = { parts: AT.keys, baseStyle: g4 },
  x4 = function (t) {
    return { marginStart: 1, color: O('red.500', 'red.300')(t) };
  },
  b4 = function (t) {
    return {
      mt: 2,
      color: O('gray.500', 'whiteAlpha.600')(t),
      lineHeight: 'normal',
      fontSize: 'sm',
    };
  },
  S4 = function (t) {
    return {
      container: { width: '100%', position: 'relative' },
      requiredIndicator: x4(t),
      helperText: b4(t),
    };
  },
  w4 = { parts: MT.keys, baseStyle: S4 },
  k4 = function (t) {
    return {
      color: O('red.500', 'red.300')(t),
      mt: 2,
      fontSize: 'sm',
      lineHeight: 'normal',
    };
  },
  C4 = function (t) {
    return { marginEnd: '0.5em', color: O('red.500', 'red.300')(t) };
  },
  _4 = function (t) {
    return { text: k4(t), icon: C4(t) };
  },
  E4 = { parts: $T.keys, baseStyle: _4 },
  T4 = {
    fontSize: 'md',
    marginEnd: 3,
    mb: 2,
    fontWeight: 'medium',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  P4 = { baseStyle: T4 },
  R4 = { fontFamily: 'heading', fontWeight: 'bold' },
  A4 = {
    '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
    '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
    '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: 'xl', lineHeight: 1.2 },
    sm: { fontSize: 'md', lineHeight: 1.2 },
    xs: { fontSize: 'sm', lineHeight: 1.2 },
  },
  M4 = { size: 'xl' },
  $4 = { baseStyle: R4, sizes: A4, defaultProps: M4 },
  O4 = {
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
  },
  Wr = {
    lg: { fontSize: 'lg', px: 4, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', px: 4, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', px: 3, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', px: 2, h: 6, borderRadius: 'sm' },
  },
  I4 = {
    lg: { field: Wr.lg, addon: Wr.lg },
    md: { field: Wr.md, addon: Wr.md },
    sm: { field: Wr.sm, addon: Wr.sm },
    xs: { field: Wr.xs, addon: Wr.xs },
  };
function Op(e) {
  var t = e.focusBorderColor,
    r = e.errorBorderColor;
  return {
    focusBorderColor: t || O('blue.500', 'blue.300')(e),
    errorBorderColor: r || O('red.500', 'red.300')(e),
  };
}
var L4 = function (t) {
    var r = t.theme,
      n = Op(t),
      i = n.focusBorderColor,
      o = n.errorBorderColor;
    return {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: 'inherit',
        _hover: { borderColor: O('gray.300', 'whiteAlpha.400')(t) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        _invalid: { borderColor: We(r, o), boxShadow: '0 0 0 1px ' + We(r, o) },
        _focus: {
          zIndex: 1,
          borderColor: We(r, i),
          boxShadow: '0 0 0 1px ' + We(r, i),
        },
      },
      addon: {
        border: '1px solid',
        borderColor: O('inherit', 'whiteAlpha.50')(t),
        bg: O('gray.100', 'whiteAlpha.300')(t),
      },
    };
  },
  z4 = function (t) {
    var r = t.theme,
      n = Op(t),
      i = n.focusBorderColor,
      o = n.errorBorderColor;
    return {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: O('gray.100', 'whiteAlpha.50')(t),
        _hover: { bg: O('gray.200', 'whiteAlpha.100')(t) },
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        _invalid: { borderColor: We(r, o) },
        _focus: { bg: 'transparent', borderColor: We(r, i) },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: O('gray.100', 'whiteAlpha.50')(t),
      },
    };
  },
  N4 = function (t) {
    var r = t.theme,
      n = Op(t),
      i = n.focusBorderColor,
      o = n.errorBorderColor;
    return {
      field: {
        borderBottom: '1px solid',
        borderColor: 'inherit',
        borderRadius: 0,
        px: 0,
        bg: 'transparent',
        _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
        _invalid: {
          borderColor: We(r, o),
          boxShadow: '0px 1px 0px 0px ' + We(r, o),
        },
        _focus: {
          borderColor: We(r, i),
          boxShadow: '0px 1px 0px 0px ' + We(r, i),
        },
      },
      addon: {
        borderBottom: '2px solid',
        borderColor: 'inherit',
        borderRadius: 0,
        px: 0,
        bg: 'transparent',
      },
    };
  },
  F4 = {
    field: { bg: 'transparent', px: 0, height: 'auto' },
    addon: { bg: 'transparent', px: 0, height: 'auto' },
  },
  D4 = { outline: L4, filled: z4, flushed: N4, unstyled: F4 },
  B4 = { size: 'md', variant: 'outline' },
  Ee = {
    parts: OT.keys,
    baseStyle: O4,
    sizes: I4,
    variants: D4,
    defaultProps: B4,
  },
  V4 = function (t) {
    return {
      bg: O('gray.100', 'whiteAlpha')(t),
      borderRadius: 'md',
      borderWidth: '1px',
      borderBottomWidth: '3px',
      fontSize: '0.8em',
      fontWeight: 'bold',
      lineHeight: 'normal',
      px: '0.4em',
      whiteSpace: 'nowrap',
    };
  },
  j4 = { baseStyle: V4 },
  W4 = {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: { textDecoration: 'underline' },
    _focus: { boxShadow: 'outline' },
  },
  H4 = { baseStyle: W4 },
  U4 = { marginEnd: '0.5rem', display: 'inline', verticalAlign: 'text-bottom' },
  Y4 = { container: {}, item: {}, icon: U4 },
  G4 = { parts: IT.keys, baseStyle: Y4 },
  K4 = function (t) {
    return {
      bg: O('#fff', 'gray.700')(t),
      boxShadow: O('sm', 'dark-lg')(t),
      color: 'inherit',
      minW: '3xs',
      py: '2',
      zIndex: 1,
      borderRadius: 'md',
      borderWidth: '1px',
    };
  },
  X4 = function (t) {
    return {
      py: '0.4rem',
      px: '0.8rem',
      transitionProperty: 'background',
      transitionDuration: 'ultra-fast',
      transitionTimingFunction: 'ease-in',
      _focus: { bg: O('gray.100', 'whiteAlpha.100')(t) },
      _active: { bg: O('gray.200', 'whiteAlpha.200')(t) },
      _expanded: { bg: O('gray.100', 'whiteAlpha.100')(t) },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    };
  },
  Q4 = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
  Z4 = { opacity: 0.6 },
  q4 = {
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'inherit',
    my: '0.5rem',
    opacity: 0.6,
  },
  J4 = { transitionProperty: 'common', transitionDuration: 'normal' },
  e3 = function (t) {
    return {
      button: J4,
      list: K4(t),
      item: X4(t),
      groupTitle: Q4,
      command: Z4,
      divider: q4,
    };
  },
  t3 = { parts: LT.keys, baseStyle: e3 },
  r3 = { bg: 'blackAlpha.600', zIndex: 'modal' },
  n3 = function (t) {
    var r = t.isCentered,
      n = t.scrollBehavior;
    return {
      display: 'flex',
      zIndex: 'modal',
      justifyContent: 'center',
      alignItems: r ? 'center' : 'flex-start',
      overflow: n === 'inside' ? 'hidden' : 'auto',
    };
  },
  i3 = function (t) {
    var r = t.scrollBehavior;
    return {
      borderRadius: 'md',
      bg: O('white', 'gray.700')(t),
      color: 'inherit',
      my: '3.75rem',
      zIndex: 'modal',
      maxH: r === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
      boxShadow: O('lg', 'dark-lg')(t),
    };
  },
  o3 = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
  a3 = { position: 'absolute', top: 2, insetEnd: 3 },
  l3 = function (t) {
    var r = t.scrollBehavior;
    return {
      px: 6,
      py: 2,
      flex: 1,
      overflow: r === 'inside' ? 'auto' : void 0,
    };
  },
  s3 = { px: 6, py: 4 },
  u3 = function (t) {
    return {
      overlay: r3,
      dialogContainer: n3(t),
      dialog: i3(t),
      header: o3,
      closeButton: a3,
      body: l3(t),
      footer: s3,
    };
  };
function Gt(e) {
  return e === 'full'
    ? {
        dialog: {
          maxW: '100vw',
          minH: '100vh',
          '@supports(min-height: -webkit-fill-available)': {
            minH: '-webkit-fill-available',
          },
          my: 0,
        },
      }
    : { dialog: { maxW: e } };
}
var c3 = {
    xs: Gt('xs'),
    sm: Gt('sm'),
    md: Gt('md'),
    lg: Gt('lg'),
    xl: Gt('xl'),
    '2xl': Gt('2xl'),
    '3xl': Gt('3xl'),
    '4xl': Gt('4xl'),
    '5xl': Gt('5xl'),
    '6xl': Gt('6xl'),
    full: Gt('full'),
  },
  f3 = { size: 'md' },
  d3 = { parts: zT.keys, baseStyle: u3, sizes: c3, defaultProps: f3 },
  dl,
  Tm,
  Pm,
  p3 = Ee.variants,
  h3 = Ee.defaultProps,
  Ip = $t('number-input-stepper-width'),
  hx = $t('number-input-input-padding'),
  v3 = Pr(Ip).add('0.5rem').toString(),
  m3 = ((dl = {}), (dl[Ip.variable] = '24px'), (dl[hx.variable] = v3), dl),
  g3 = (Tm = (Pm = Ee.baseStyle) == null ? void 0 : Pm.field) != null ? Tm : {},
  y3 = { width: [Ip.reference] },
  x3 = function (t) {
    return {
      borderStart: '1px solid',
      borderStartColor: O('inherit', 'whiteAlpha.300')(t),
      color: O('inherit', 'whiteAlpha.800')(t),
      _active: { bg: O('gray.200', 'whiteAlpha.300')(t) },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
    };
  },
  b3 = function (t) {
    return { root: m3, field: g3, stepperGroup: y3, stepper: x3(t) };
  };
function pl(e) {
  var t,
    r,
    n = Ee.sizes[e],
    i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
    o = (t = (r = n.field) == null ? void 0 : r.fontSize) != null ? t : 'md',
    a = dx.fontSizes[o];
  return {
    field: Le({}, n.field, {
      paddingInlineEnd: hx.reference,
      verticalAlign: 'top',
    }),
    stepper: {
      fontSize: Pr(a).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: '-1px', borderTopWidth: 1 },
    },
  };
}
var S3 = { xs: pl('xs'), sm: pl('sm'), md: pl('md'), lg: pl('lg') },
  w3 = {
    parts: NT.keys,
    baseStyle: b3,
    sizes: S3,
    variants: p3,
    defaultProps: h3,
  },
  Rm,
  k3 = Le({}, Ee.baseStyle.field, { textAlign: 'center' }),
  C3 = {
    lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
    md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
    sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
    xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
  },
  _3 = {
    outline: function (t) {
      var r;
      return (r = Ee.variants.outline(t).field) != null ? r : {};
    },
    flushed: function (t) {
      var r;
      return (r = Ee.variants.flushed(t).field) != null ? r : {};
    },
    filled: function (t) {
      var r;
      return (r = Ee.variants.filled(t).field) != null ? r : {};
    },
    unstyled: (Rm = Ee.variants.unstyled.field) != null ? Rm : {},
  },
  E3 = Ee.defaultProps,
  T3 = { baseStyle: k3, sizes: C3, variants: _3, defaultProps: E3 },
  wc = $t('popper-bg'),
  P3 = $t('popper-arrow-bg'),
  R3 = $t('popper-arrow-shadow-color'),
  A3 = { zIndex: 10 },
  M3 = function (t) {
    var r,
      n = O('white', 'gray.700')(t),
      i = O('gray.200', 'whiteAlpha.300')(t);
    return (
      (r = {}),
      (r[wc.variable] = 'colors.' + n),
      (r.bg = wc.reference),
      (r[P3.variable] = wc.reference),
      (r[R3.variable] = 'colors.' + i),
      (r.width = 'xs'),
      (r.border = '1px solid'),
      (r.borderColor = 'inherit'),
      (r.borderRadius = 'md'),
      (r.boxShadow = 'sm'),
      (r.zIndex = 'inherit'),
      (r._focus = { outline: 0, boxShadow: 'outline' }),
      r
    );
  },
  $3 = { px: 3, py: 2, borderBottomWidth: '1px' },
  O3 = { px: 3, py: 2 },
  I3 = { px: 3, py: 2, borderTopWidth: '1px' },
  L3 = {
    position: 'absolute',
    borderRadius: 'md',
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  z3 = function (t) {
    return {
      popper: A3,
      content: M3(t),
      header: $3,
      body: O3,
      footer: I3,
      arrow: {},
      closeButton: L3,
    };
  },
  N3 = { parts: FT.keys, baseStyle: z3 };
function F3(e) {
  var t = e.colorScheme,
    r = e.theme,
    n = e.isIndeterminate,
    i = e.hasStripe,
    o = O(Sm(), Sm('1rem', 'rgba(0,0,0,0.1)'))(e),
    a = O(t + '.500', t + '.200')(e),
    l =
      `linear-gradient(
    to right,
    transparent 0%,
    ` +
      We(r, a) +
      ` 50%,
    transparent 100%
  )`,
    s = !n && i;
  return Le({}, s && o, n ? { bgImage: l } : { bgColor: a });
}
var D3 = {
    lineHeight: '1',
    fontSize: '0.25em',
    fontWeight: 'bold',
    color: 'white',
  },
  B3 = function (t) {
    return { bg: O('gray.100', 'whiteAlpha.300')(t) };
  },
  V3 = function (t) {
    return Le(
      { transitionProperty: 'common', transitionDuration: 'slow' },
      F3(t)
    );
  },
  j3 = function (t) {
    return { label: D3, filledTrack: V3(t), track: B3(t) };
  },
  W3 = {
    xs: { track: { h: '0.25rem' } },
    sm: { track: { h: '0.5rem' } },
    md: { track: { h: '0.75rem' } },
    lg: { track: { h: '1rem' } },
  },
  H3 = { size: 'md', colorScheme: 'blue' },
  U3 = { parts: DT.keys, sizes: W3, baseStyle: j3, defaultProps: H3 },
  Y3 = function (t) {
    var r = Ss.baseStyle(t),
      n = r.control,
      i = n === void 0 ? {} : n;
    return Le({}, i, {
      borderRadius: 'full',
      _checked: Le({}, i._checked, {
        _before: {
          content: '""',
          display: 'inline-block',
          pos: 'relative',
          w: '50%',
          h: '50%',
          borderRadius: '50%',
          bg: 'currentColor',
        },
      }),
    });
  },
  G3 = function (t) {
    return {
      label: Ss.baseStyle(t).label,
      container: Ss.baseStyle(t).container,
      control: Y3(t),
    };
  },
  K3 = {
    md: { control: { w: 4, h: 4 }, label: { fontSize: 'md' } },
    lg: { control: { w: 5, h: 5 }, label: { fontSize: 'lg' } },
    sm: { control: { width: 3, height: 3 }, label: { fontSize: 'sm' } },
  },
  X3 = { size: 'md', colorScheme: 'blue' },
  Q3 = { parts: BT.keys, baseStyle: G3, sizes: K3, defaultProps: X3 },
  Z3 = function (t) {
    return Le({}, Ee.baseStyle.field, {
      bg: O('white', 'gray.700')(t),
      appearance: 'none',
      paddingBottom: '1px',
      lineHeight: 'normal',
      '> option, > optgroup': { bg: O('white', 'gray.700')(t) },
    });
  },
  q3 = {
    width: '1.5rem',
    height: '100%',
    insetEnd: '0.5rem',
    position: 'relative',
    color: 'currentColor',
    fontSize: '1.25rem',
    _disabled: { opacity: 0.5 },
  },
  J3 = function (t) {
    return { field: Z3(t), icon: q3 };
  },
  hl = { paddingInlineEnd: '2rem' },
  eR = Dt({}, Ee.sizes, {
    lg: { field: hl },
    md: { field: hl },
    sm: { field: hl },
    xs: { field: hl, icon: { insetEnd: '0.25rem' } },
  }),
  tR = {
    parts: VT.keys,
    baseStyle: J3,
    sizes: eR,
    variants: Ee.variants,
    defaultProps: Ee.defaultProps,
  },
  rR = function (t, r) {
    return R1({
      from: { borderColor: t, background: t },
      to: { borderColor: r, background: r },
    });
  },
  nR = function (t) {
    var r = O('gray.100', 'gray.800')(t),
      n = O('gray.400', 'gray.600')(t),
      i = t.startColor,
      o = i === void 0 ? r : i,
      a = t.endColor,
      l = a === void 0 ? n : a,
      s = t.speed,
      u = t.theme,
      c = We(u, o),
      f = We(u, l);
    return {
      opacity: 0.7,
      borderRadius: '2px',
      borderColor: c,
      background: f,
      animation: s + 's linear infinite alternate ' + rR(c, f),
    };
  },
  iR = { baseStyle: nR },
  oR = function (t) {
    return {
      borderRadius: 'md',
      fontWeight: 'semibold',
      _focus: {
        boxShadow: 'outline',
        padding: '1rem',
        position: 'fixed',
        top: '1.5rem',
        insetStart: '1.5rem',
        bg: O('white', 'gray.700')(t),
      },
    };
  },
  aR = { baseStyle: oR };
function lR(e) {
  return Ea({
    orientation: e.orientation,
    vertical: {
      left: '50%',
      transform: 'translateX(-50%)',
      _active: { transform: 'translateX(-50%) scale(1.15)' },
    },
    horizontal: {
      top: '50%',
      transform: 'translateY(-50%)',
      _active: { transform: 'translateY(-50%) scale(1.15)' },
    },
  });
}
var sR = function (t) {
    var r = t.orientation;
    return Le(
      {
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        _disabled: { opacity: 0.6, cursor: 'default', pointerEvents: 'none' },
      },
      Ea({ orientation: r, vertical: { h: '100%' }, horizontal: { w: '100%' } })
    );
  },
  uR = function (t) {
    return {
      overflow: 'hidden',
      borderRadius: 'sm',
      bg: O('gray.200', 'whiteAlpha.200')(t),
      _disabled: { bg: O('gray.300', 'whiteAlpha.300')(t) },
    };
  },
  cR = function (t) {
    return Le(
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        outline: 0,
        zIndex: 1,
        borderRadius: 'full',
        bg: 'white',
        boxShadow: 'base',
        border: '1px solid',
        borderColor: 'transparent',
        transitionProperty: 'transform',
        transitionDuration: 'normal',
        _focus: { boxShadow: 'outline' },
        _disabled: { bg: 'gray.300' },
      },
      lR(t)
    );
  },
  fR = function (t) {
    var r = t.colorScheme;
    return {
      width: 'inherit',
      height: 'inherit',
      bg: O(r + '.500', r + '.200')(t),
    };
  },
  dR = function (t) {
    return { container: sR(t), track: uR(t), thumb: cR(t), filledTrack: fR(t) };
  },
  pR = function (t) {
    return {
      thumb: { w: '16px', h: '16px' },
      track: Ea({
        orientation: t.orientation,
        horizontal: { h: '4px' },
        vertical: { w: '4px' },
      }),
    };
  },
  hR = function (t) {
    return {
      thumb: { w: '14px', h: '14px' },
      track: Ea({
        orientation: t.orientation,
        horizontal: { h: '4px' },
        vertical: { w: '4px' },
      }),
    };
  },
  vR = function (t) {
    return {
      thumb: { w: '10px', h: '10px' },
      track: Ea({
        orientation: t.orientation,
        horizontal: { h: '2px' },
        vertical: { w: '2px' },
      }),
    };
  },
  mR = { lg: pR, md: hR, sm: vR },
  gR = { size: 'md', colorScheme: 'blue' },
  yR = { parts: jT.keys, sizes: mR, baseStyle: dR, defaultProps: gR },
  kc,
  Cc,
  _c,
  Ec,
  Tc,
  Pn = $t('spinner-size'),
  xR = { width: [Pn.reference], height: [Pn.reference] },
  bR = {
    xs: ((kc = {}), (kc[Pn.variable] = '0.75rem'), kc),
    sm: ((Cc = {}), (Cc[Pn.variable] = '1rem'), Cc),
    md: ((_c = {}), (_c[Pn.variable] = '1.5rem'), _c),
    lg: ((Ec = {}), (Ec[Pn.variable] = '2rem'), Ec),
    xl: ((Tc = {}), (Tc[Pn.variable] = '3rem'), Tc),
  },
  SR = { size: 'md' },
  wR = { baseStyle: xR, sizes: bR, defaultProps: SR },
  kR = { fontWeight: 'medium' },
  CR = { opacity: 0.8, marginBottom: 2 },
  _R = { verticalAlign: 'baseline', fontWeight: 'semibold' },
  ER = { marginEnd: 1, w: '14px', h: '14px', verticalAlign: 'middle' },
  TR = { container: {}, label: kR, helpText: CR, number: _R, icon: ER },
  PR = {
    md: {
      label: { fontSize: 'sm' },
      helpText: { fontSize: 'sm' },
      number: { fontSize: '2xl' },
    },
  },
  RR = { size: 'md' },
  AR = { parts: WT.keys, baseStyle: TR, sizes: PR, defaultProps: RR },
  vl,
  ml,
  gl,
  Po = $t('switch-track-width'),
  Nn = $t('switch-track-height'),
  Pc = $t('switch-track-diff'),
  MR = Pr.subtract(Po, Nn),
  qf = $t('switch-thumb-x'),
  $R = function (t) {
    var r = t.colorScheme;
    return {
      borderRadius: 'full',
      p: '2px',
      width: [Po.reference],
      height: [Nn.reference],
      transitionProperty: 'common',
      transitionDuration: 'fast',
      bg: O('gray.300', 'whiteAlpha.400')(t),
      _focus: { boxShadow: 'outline' },
      _disabled: { opacity: 0.4, cursor: 'not-allowed' },
      _checked: { bg: O(r + '.500', r + '.200')(t) },
    };
  },
  OR = {
    bg: 'white',
    transitionProperty: 'transform',
    transitionDuration: 'normal',
    borderRadius: 'inherit',
    width: [Nn.reference],
    height: [Nn.reference],
    _checked: { transform: 'translateX(' + qf.reference + ')' },
  },
  IR = function (t) {
    var r, n;
    return {
      container:
        ((n = {}),
        (n[Pc.variable] = MR),
        (n[qf.variable] = Pc.reference),
        (n._rtl = ((r = {}), (r[qf.variable] = Pr(Pc).negate().toString()), r)),
        n),
      track: $R(t),
      thumb: OR,
    };
  },
  LR = {
    sm: {
      container:
        ((vl = {}),
        (vl[Po.variable] = '1.375rem'),
        (vl[Nn.variable] = '0.75rem'),
        vl),
    },
    md: {
      container:
        ((ml = {}),
        (ml[Po.variable] = '1.875rem'),
        (ml[Nn.variable] = '1rem'),
        ml),
    },
    lg: {
      container:
        ((gl = {}),
        (gl[Po.variable] = '2.875rem'),
        (gl[Nn.variable] = '1.5rem'),
        gl),
    },
  },
  zR = { size: 'md', colorScheme: 'blue' },
  NR = { parts: HT.keys, baseStyle: IR, sizes: LR, defaultProps: zR },
  FR = {
    table: {
      fontVariantNumeric: 'lining-nums tabular-nums',
      borderCollapse: 'collapse',
      width: 'full',
    },
    th: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      textAlign: 'start',
    },
    td: { textAlign: 'start' },
    caption: {
      mt: 4,
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'medium',
    },
  },
  ws = { '&[data-is-numeric=true]': { textAlign: 'end' } },
  DR = function (t) {
    var r = t.colorScheme;
    return {
      th: Le(
        {
          color: O('gray.600', 'gray.400')(t),
          borderBottom: '1px',
          borderColor: O(r + '.100', r + '.700')(t),
        },
        ws
      ),
      td: Le(
        { borderBottom: '1px', borderColor: O(r + '.100', r + '.700')(t) },
        ws
      ),
      caption: { color: O('gray.600', 'gray.100')(t) },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    };
  },
  BR = function (t) {
    var r = t.colorScheme;
    return {
      th: Le(
        {
          color: O('gray.600', 'gray.400')(t),
          borderBottom: '1px',
          borderColor: O(r + '.100', r + '.700')(t),
        },
        ws
      ),
      td: Le(
        { borderBottom: '1px', borderColor: O(r + '.100', r + '.700')(t) },
        ws
      ),
      caption: { color: O('gray.600', 'gray.100')(t) },
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            'th, td': {
              borderBottomWidth: '1px',
              borderColor: O(r + '.100', r + '.700')(t),
            },
            td: { background: O(r + '.100', r + '.700')(t) },
          },
        },
      },
      tfoot: { tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } } },
    };
  },
  VR = { simple: DR, striped: BR, unstyled: {} },
  jR = {
    sm: {
      th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
      td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
      caption: { px: '4', py: '2', fontSize: 'xs' },
    },
    md: {
      th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
      td: { px: '6', py: '4', lineHeight: '5' },
      caption: { px: '6', py: '2', fontSize: 'sm' },
    },
    lg: {
      th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
      td: { px: '8', py: '5', lineHeight: '6' },
      caption: { px: '6', py: '2', fontSize: 'md' },
    },
  },
  WR = { variant: 'simple', size: 'md', colorScheme: 'gray' },
  HR = {
    parts: UT.keys,
    baseStyle: FR,
    variants: VR,
    sizes: jR,
    defaultProps: WR,
  },
  UR = function (t) {
    var r = t.orientation;
    return { display: r === 'vertical' ? 'flex' : 'block' };
  },
  YR = function (t) {
    var r = t.isFitted;
    return {
      flex: r ? 1 : void 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focus: { zIndex: 1, boxShadow: 'outline' },
      _disabled: { cursor: 'not-allowed', opacity: 0.4 },
    };
  },
  GR = function (t) {
    var r = t.align,
      n = r === void 0 ? 'start' : r,
      i = t.orientation,
      o = { end: 'flex-end', center: 'center', start: 'flex-start' };
    return {
      justifyContent: o[n],
      flexDirection: i === 'vertical' ? 'column' : 'row',
    };
  },
  KR = { p: 4 },
  XR = function (t) {
    return { root: UR(t), tab: YR(t), tablist: GR(t), tabpanel: KR };
  },
  QR = {
    sm: { tab: { py: 1, px: 4, fontSize: 'sm' } },
    md: { tab: { fontSize: 'md', py: 2, px: 4 } },
    lg: { tab: { fontSize: 'lg', py: 3, px: 4 } },
  },
  ZR = function (t) {
    var r,
      n,
      i = t.colorScheme,
      o = t.orientation,
      a = o === 'vertical',
      l = o === 'vertical' ? 'borderStart' : 'borderBottom',
      s = a ? 'marginStart' : 'marginBottom';
    return {
      tablist: ((r = {}), (r[l] = '2px solid'), (r.borderColor = 'inherit'), r),
      tab:
        ((n = {}),
        (n[l] = '2px solid'),
        (n.borderColor = 'transparent'),
        (n[s] = '-2px'),
        (n._selected = {
          color: O(i + '.600', i + '.300')(t),
          borderColor: 'currentColor',
        }),
        (n._active = { bg: O('gray.200', 'whiteAlpha.300')(t) }),
        (n._disabled = { _active: { bg: 'none' } }),
        n),
    };
  },
  qR = function (t) {
    var r = t.colorScheme;
    return {
      tab: {
        borderTopRadius: 'md',
        border: '1px solid',
        borderColor: 'transparent',
        mb: '-1px',
        _selected: {
          color: O(r + '.600', r + '.300')(t),
          borderColor: 'inherit',
          borderBottomColor: O('white', 'gray.800')(t),
        },
      },
      tablist: {
        mb: '-1px',
        borderBottom: '1px solid',
        borderColor: 'inherit',
      },
    };
  },
  JR = function (t) {
    var r = t.colorScheme;
    return {
      tab: {
        border: '1px solid',
        borderColor: 'inherit',
        bg: O('gray.50', 'whiteAlpha.50')(t),
        mb: '-1px',
        _notLast: { marginEnd: '-1px' },
        _selected: {
          bg: O('#fff', 'gray.800')(t),
          color: O(r + '.600', r + '.300')(t),
          borderColor: 'inherit',
          borderTopColor: 'currentColor',
          borderBottomColor: 'transparent',
        },
      },
      tablist: {
        mb: '-1px',
        borderBottom: '1px solid',
        borderColor: 'inherit',
      },
    };
  },
  e6 = function (t) {
    var r = t.colorScheme,
      n = t.theme;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: 'gray.600',
        _selected: { color: We(n, r + '.700'), bg: We(n, r + '.100') },
      },
    };
  },
  t6 = function (t) {
    var r = t.colorScheme;
    return {
      tab: {
        borderRadius: 'full',
        fontWeight: 'semibold',
        color: O('gray.600', 'inherit')(t),
        _selected: {
          color: O('#fff', 'gray.800')(t),
          bg: O(r + '.600', r + '.300')(t),
        },
      },
    };
  },
  r6 = {},
  n6 = {
    line: ZR,
    enclosed: qR,
    'enclosed-colored': JR,
    'soft-rounded': e6,
    'solid-rounded': t6,
    unstyled: r6,
  },
  i6 = { size: 'md', variant: 'line', colorScheme: 'blue' },
  o6 = {
    parts: YT.keys,
    baseStyle: XR,
    sizes: QR,
    variants: n6,
    defaultProps: i6,
  },
  a6 = {
    fontWeight: 'medium',
    lineHeight: 1.2,
    outline: 0,
    borderRadius: 'md',
    _focus: { boxShadow: 'outline' },
  },
  l6 = { lineHeight: 1.2, overflow: 'visible' },
  s6 = {
    fontSize: '18px',
    w: '1.25rem',
    h: '1.25rem',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    borderRadius: 'full',
    marginStart: '0.375rem',
    marginEnd: '-1',
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focus: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  u6 = { container: a6, label: l6, closeButton: s6 },
  c6 = {
    sm: {
      container: { minH: '1.25rem', minW: '1.25rem', fontSize: 'xs', px: 2 },
      closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
    },
    md: {
      container: { minH: '1.5rem', minW: '1.5rem', fontSize: 'sm', px: 2 },
    },
    lg: { container: { minH: 8, minW: 8, fontSize: 'md', px: 3 } },
  },
  f6 = {
    subtle: function (t) {
      return { container: Ei.variants.subtle(t) };
    },
    solid: function (t) {
      return { container: Ei.variants.solid(t) };
    },
    outline: function (t) {
      return { container: Ei.variants.outline(t) };
    },
  },
  d6 = { size: 'md', variant: 'subtle', colorScheme: 'gray' },
  p6 = {
    parts: GT.keys,
    variants: f6,
    baseStyle: u6,
    sizes: c6,
    defaultProps: d6,
  },
  Am,
  Mm,
  $m,
  Om,
  Im,
  h6 = Le({}, Ee.baseStyle.field, {
    paddingY: '8px',
    minHeight: '80px',
    lineHeight: 'short',
    verticalAlign: 'top',
  }),
  v6 = {
    outline: function (t) {
      var r;
      return (r = Ee.variants.outline(t).field) != null ? r : {};
    },
    flushed: function (t) {
      var r;
      return (r = Ee.variants.flushed(t).field) != null ? r : {};
    },
    filled: function (t) {
      var r;
      return (r = Ee.variants.filled(t).field) != null ? r : {};
    },
    unstyled: (Am = Ee.variants.unstyled.field) != null ? Am : {},
  },
  m6 = {
    xs: (Mm = Ee.sizes.xs.field) != null ? Mm : {},
    sm: ($m = Ee.sizes.sm.field) != null ? $m : {},
    md: (Om = Ee.sizes.md.field) != null ? Om : {},
    lg: (Im = Ee.sizes.lg.field) != null ? Im : {},
  },
  g6 = { size: 'md', variant: 'outline' },
  y6 = { baseStyle: h6, sizes: m6, variants: v6, defaultProps: g6 },
  Rc = $t('tooltip-bg'),
  x6 = $t('popper-arrow-bg'),
  b6 = function (t) {
    var r,
      n = O('gray.700', 'gray.300')(t);
    return (
      (r = {}),
      (r[Rc.variable] = 'colors.' + n),
      (r.px = '8px'),
      (r.py = '2px'),
      (r.bg = [Rc.reference]),
      (r[x6.variable] = [Rc.reference]),
      (r.color = O('whiteAlpha.900', 'gray.900')(t)),
      (r.borderRadius = 'sm'),
      (r.fontWeight = 'medium'),
      (r.fontSize = 'sm'),
      (r.boxShadow = 'md'),
      (r.maxW = '320px'),
      (r.zIndex = 'tooltip'),
      r
    );
  },
  S6 = { baseStyle: b6 },
  w6 = {
    Accordion: JT,
    Alert: lP,
    Avatar: hP,
    Badge: Ei,
    Breadcrumb: kP,
    Button: OP,
    Checkbox: Ss,
    CloseButton: HP,
    Code: KP,
    Container: QP,
    Divider: r4,
    Drawer: p4,
    Editable: y4,
    Form: w4,
    FormError: E4,
    FormLabel: P4,
    Heading: $4,
    Input: Ee,
    Kbd: j4,
    Link: H4,
    List: G4,
    Menu: t3,
    Modal: d3,
    NumberInput: w3,
    PinInput: T3,
    Popover: N3,
    Progress: U3,
    Radio: Q3,
    Select: tR,
    Skeleton: iR,
    SkipLink: aR,
    Slider: yR,
    Spinner: wR,
    Stat: AR,
    Switch: NR,
    Table: HR,
    Tabs: o6,
    Tag: p6,
    Textarea: y6,
    Tooltip: S6,
  },
  k6 = {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
  },
  C6 = vT({ sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' }),
  _6 = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#000000',
    white: '#FFFFFF',
    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
    },
    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
    orange: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19',
    },
    yellow: {
      50: '#FFFFF0',
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
      700: '#975A16',
      800: '#744210',
      900: '#5F370E',
    },
    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
    cyan: {
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666',
    },
    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
      800: '#44337A',
      900: '#322659',
    },
    pink: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },
    linkedin: {
      50: '#E8F4F9',
      100: '#CFEDFB',
      200: '#9BDAF3',
      300: '#68C7EC',
      400: '#34B3E4',
      500: '#00A0DC',
      600: '#008CC9',
      700: '#0077B5',
      800: '#005E93',
      900: '#004471',
    },
    facebook: {
      50: '#E8F4F9',
      100: '#D9DEE9',
      200: '#B7C2DA',
      300: '#6482C0',
      400: '#4267B2',
      500: '#385898',
      600: '#314E89',
      700: '#29487D',
      800: '#223B67',
      900: '#1E355B',
    },
    messenger: {
      50: '#D0E6FF',
      100: '#B9DAFF',
      200: '#A2CDFF',
      300: '#7AB8FF',
      400: '#2E90FF',
      500: '#0078FF',
      600: '#0063D1',
      700: '#0052AC',
      800: '#003C7E',
      900: '#002C5C',
    },
    whatsapp: {
      50: '#dffeec',
      100: '#b9f5d0',
      200: '#90edb3',
      300: '#65e495',
      400: '#3cdd78',
      500: '#22c35e',
      600: '#179848',
      700: '#0c6c33',
      800: '#01421c',
      900: '#001803',
    },
    twitter: {
      50: '#E5F4FD',
      100: '#C8E9FB',
      200: '#A8DCFA',
      300: '#83CDF7',
      400: '#57BBF5',
      500: '#1DA1F2',
      600: '#1A94DA',
      700: '#1681BF',
      800: '#136B9E',
      900: '#0D4D71',
    },
    telegram: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },
  E6 = {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  T6 = {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
    'dark-lg':
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
  },
  P6 = {
    common:
      'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
  },
  R6 = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  A6 = {
    'ultra-fast': '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    'ultra-slow': '500ms',
  },
  M6 = { property: P6, easing: R6, duration: A6 },
  $6 = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  O6 = {
    none: 0,
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },
  I6 = Le(
    { breakpoints: C6, zIndices: $6, radii: E6, blur: O6, colors: _6 },
    dx,
    { sizes: ix, shadows: T6, space: nx, borders: k6, transition: M6 }
  ),
  L6 = {
    colors: {
      'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
      'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
      'chakra-border-color': { _light: 'gray.200', _dark: 'whiteAlpha.300' },
      'chakra-placeholder-color': {
        _light: 'gray.500',
        _dark: 'whiteAlpha.400',
      },
    },
  },
  z6 = {
    global: {
      body: {
        fontFamily: 'body',
        color: 'chakra-body-text',
        bg: 'chakra-body-bg',
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
        lineHeight: 'base',
      },
      '*::placeholder': { color: 'chakra-placeholder-color' },
      '*, *::before, &::after': {
        borderColor: 'chakra-border-color',
        wordWrap: 'break-word',
      },
    },
  },
  N6 = z6,
  F6 = 'ltr',
  D6 = {
    useSystemColorMode: !1,
    initialColorMode: 'light',
    cssVarPrefix: 'chakra',
  },
  B6 = Le({ semanticTokens: L6, direction: F6 }, I6, {
    components: w6,
    styles: N6,
    config: D6,
  }),
  vx = {
    border: '0px',
    clip: 'rect(0px, 0px, 0px, 0px)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
  },
  V6 = ee('span', { baseStyle: vx });
ee('input', { baseStyle: vx });
function ks() {
  return (
    (ks =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ks.apply(this, arguments)
  );
}
function j6(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var W6 = ['label', 'thickness', 'speed', 'emptyColor', 'className'],
  H6 = R1({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  }),
  mx = le(function (e, t) {
    var r = nr('Spinner', e),
      n = bt(e),
      i = n.label,
      o = i === void 0 ? 'Loading...' : i,
      a = n.thickness,
      l = a === void 0 ? '2px' : a,
      s = n.speed,
      u = s === void 0 ? '0.45s' : s,
      c = n.emptyColor,
      f = c === void 0 ? 'transparent' : c,
      d = n.className,
      p = j6(n, W6),
      h = Ne('chakra-spinner', d),
      x = ks(
        {
          display: 'inline-block',
          borderColor: 'currentColor',
          borderStyle: 'solid',
          borderRadius: '99999px',
          borderWidth: l,
          borderBottomColor: f,
          borderLeftColor: f,
          animation: H6 + ' ' + u + ' linear infinite',
        },
        r
      );
    return y.exports.createElement(
      ee.div,
      ks({ ref: t, __css: x, className: h }, p),
      o && y.exports.createElement(V6, null, o)
    );
  });
function Ro() {
  return (
    (Ro =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ro.apply(this, arguments)
  );
}
function U6(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Y6 = [
    'as',
    'viewBox',
    'color',
    'focusable',
    'children',
    'className',
    '__css',
  ],
  Lm = {
    path: y.exports.createElement(
      'g',
      { stroke: 'currentColor', strokeWidth: '1.5' },
      y.exports.createElement('path', {
        strokeLinecap: 'round',
        fill: 'none',
        d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
      }),
      y.exports.createElement('path', {
        fill: 'currentColor',
        strokeLinecap: 'round',
        d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
      }),
      y.exports.createElement('circle', {
        fill: 'none',
        strokeMiterlimit: '10',
        cx: '12',
        cy: '12',
        r: '11.25',
      })
    ),
    viewBox: '0 0 24 24',
  },
  _t = le(function (e, t) {
    var r = e.as,
      n = e.viewBox,
      i = e.color,
      o = i === void 0 ? 'currentColor' : i,
      a = e.focusable,
      l = a === void 0 ? !1 : a,
      s = e.children,
      u = e.className,
      c = e.__css,
      f = U6(e, Y6),
      d = Ne('chakra-icon', u),
      p = Ro(
        {
          w: '1em',
          h: '1em',
          display: 'inline-block',
          lineHeight: '1em',
          flexShrink: 0,
          color: o,
        },
        c
      ),
      h = { ref: t, focusable: l, className: d, __css: p },
      x = n != null ? n : Lm.viewBox;
    if (r && typeof r != 'string')
      return y.exports.createElement(ee.svg, Ro({ as: r }, h, f));
    var w = s != null ? s : Lm.path;
    return y.exports.createElement(
      ee.svg,
      Ro({ verticalAlign: 'middle', viewBox: x }, h, f),
      w
    );
  });
function jt() {
  return (
    (jt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    jt.apply(this, arguments)
  );
}
function G6(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var K6 = function (t) {
    return y.exports.createElement(
      _t,
      jt({ viewBox: '0 0 24 24' }, t),
      y.exports.createElement('path', {
        fill: 'currentColor',
        d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
      })
    );
  },
  X6 = function (t) {
    return y.exports.createElement(
      _t,
      jt({ viewBox: '0 0 24 24' }, t),
      y.exports.createElement('path', {
        fill: 'currentColor',
        d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
      })
    );
  },
  zm = function (t) {
    return y.exports.createElement(
      _t,
      jt({ viewBox: '0 0 24 24' }, t),
      y.exports.createElement('path', {
        fill: 'currentColor',
        d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
      })
    );
  },
  Q6 = ['status'],
  gx = {
    info: { icon: X6, colorScheme: 'blue' },
    warning: { icon: zm, colorScheme: 'orange' },
    success: { icon: K6, colorScheme: 'green' },
    error: { icon: zm, colorScheme: 'red' },
    loading: { icon: mx, colorScheme: 'blue' },
  },
  yx = Yi({
    name: 'AlertContext',
    errorMessage:
      'useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`',
  }),
  Z6 = yx[0],
  q6 = yx[1],
  J6 = le(function (e, t) {
    var r,
      n = bt(e),
      i = n.status,
      o = i === void 0 ? 'info' : i,
      a = G6(n, Q6),
      l = (r = e.colorScheme) != null ? r : gx[o].colorScheme,
      s = Mp('Alert', jt({}, e, { colorScheme: l })),
      u = jt(
        {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        },
        s.container
      );
    return y.exports.createElement(
      Z6,
      { value: { status: o } },
      y.exports.createElement(
        q1,
        { value: s },
        y.exports.createElement(
          ee.div,
          jt({ role: 'alert', ref: t }, a, {
            className: Ne('chakra-alert', e.className),
            __css: u,
          })
        )
      )
    );
  }),
  eA = le(function (e, t) {
    var r = Rp();
    return y.exports.createElement(
      ee.div,
      jt({ ref: t }, e, {
        className: Ne('chakra-alert__title', e.className),
        __css: r.title,
      })
    );
  }),
  tA = le(function (e, t) {
    var r = Rp(),
      n = jt({ display: 'inline' }, r.description);
    return y.exports.createElement(
      ee.div,
      jt({ ref: t }, e, {
        className: Ne('chakra-alert__desc', e.className),
        __css: n,
      })
    );
  }),
  rA = function (t) {
    var r = q6(),
      n = r.status,
      i = gx[n].icon,
      o = Rp(),
      a = n === 'loading' ? o.spinner : o.icon;
    return y.exports.createElement(
      ee.span,
      jt({ display: 'inherit' }, t, {
        className: Ne('chakra-alert__icon', t.className),
        __css: a,
      }),
      t.children || y.exports.createElement(i, { h: '100%', w: '100%' })
    );
  };
function nA(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function sa() {
  return (
    (sa =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    sa.apply(this, arguments)
  );
}
var iA = ['children', 'isDisabled', '__css'],
  oA = function (t) {
    return y.exports.createElement(
      _t,
      sa({ focusable: 'false', 'aria-hidden': !0 }, t),
      y.exports.createElement('path', {
        fill: 'currentColor',
        d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
      })
    );
  },
  aA = le(function (e, t) {
    var r = nr('CloseButton', e),
      n = bt(e),
      i = n.children,
      o = n.isDisabled,
      a = n.__css,
      l = nA(n, iA),
      s = {
        outline: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      };
    return y.exports.createElement(
      ee.button,
      sa(
        {
          type: 'button',
          'aria-label': 'Close',
          ref: t,
          disabled: o,
          __css: sa({}, s, r, a),
        },
        l
      ),
      i || y.exports.createElement(oA, { width: '1em', height: '1em' })
    );
  }),
  Jf = function (e, t) {
    return (
      (Jf =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
        }),
      Jf(e, t)
    );
  };
function xx(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    );
  Jf(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
var F = function () {
  return (
    (F =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      }),
    F.apply(this, arguments)
  );
};
function br(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
function lA(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
}
function $e(e, t) {
  var r = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e),
    i,
    o = [],
    a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) o.push(i.value);
  } catch (l) {
    a = { error: l };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}
function tr(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var sA = 'production',
  Lp =
    typeof process == 'undefined' || process.env === void 0 ? sA : 'production',
  _r = function (e) {
    return {
      isEnabled: function (t) {
        return e.some(function (r) {
          return !!t[r];
        });
      },
    };
  },
  ua = {
    measureLayout: _r(['layout', 'layoutId', 'drag']),
    animation: _r([
      'animate',
      'exit',
      'variants',
      'whileHover',
      'whileTap',
      'whileFocus',
      'whileDrag',
      'whileInView',
    ]),
    exit: _r(['exit']),
    drag: _r(['drag', 'dragControls']),
    focus: _r(['whileFocus']),
    hover: _r(['whileHover', 'onHoverStart', 'onHoverEnd']),
    tap: _r(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
    pan: _r(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
    inView: _r(['whileInView', 'onViewportEnter', 'onViewportLeave']),
  };
function uA(e) {
  for (var t in e)
    e[t] !== null &&
      (t === 'projectionNodeConstructor'
        ? (ua.projectionNodeConstructor = e[t])
        : (ua[t].Component = e[t]));
}
var cA = function () {},
  Cs = function () {},
  bx = y.exports.createContext({ strict: !1 }),
  Sx = Object.keys(ua),
  fA = Sx.length;
function dA(e, t, r) {
  var n = [],
    i = y.exports.useContext(bx);
  if (!t) return null;
  Lp !== 'production' && r && i.strict;
  for (var o = 0; o < fA; o++) {
    var a = Sx[o],
      l = ua[a],
      s = l.isEnabled,
      u = l.Component;
    s(e) &&
      u &&
      n.push(
        y.exports.createElement(u, F({ key: a }, e, { visualElement: t }))
      );
  }
  return n;
}
var zp = y.exports.createContext({
    transformPagePoint: function (e) {
      return e;
    },
    isStatic: !1,
    reducedMotion: 'never',
  }),
  ku = y.exports.createContext({});
function pA() {
  return y.exports.useContext(ku).visualElement;
}
var Gi = y.exports.createContext(null),
  Ki = typeof document != 'undefined',
  _s = Ki ? y.exports.useLayoutEffect : y.exports.useEffect,
  ed = { current: null },
  wx = !1;
function hA() {
  if (((wx = !0), !!Ki))
    if (window.matchMedia) {
      var e = window.matchMedia('(prefers-reduced-motion)'),
        t = function () {
          return (ed.current = e.matches);
        };
      e.addListener(t), t();
    } else ed.current = !1;
}
function vA() {
  !wx && hA();
  var e = $e(y.exports.useState(ed.current), 1),
    t = e[0];
  return t;
}
function mA() {
  var e = vA(),
    t = y.exports.useContext(zp).reducedMotion;
  return t === 'never' ? !1 : t === 'always' ? !0 : e;
}
function gA(e, t, r, n) {
  var i = y.exports.useContext(bx),
    o = pA(),
    a = y.exports.useContext(Gi),
    l = mA(),
    s = y.exports.useRef(void 0);
  n || (n = i.renderer),
    !s.current &&
      n &&
      (s.current = n(e, {
        visualState: t,
        parent: o,
        props: r,
        presenceId: a == null ? void 0 : a.id,
        blockInitialAnimation: (a == null ? void 0 : a.initial) === !1,
        shouldReduceMotion: l,
      }));
  var u = s.current;
  return (
    _s(function () {
      u == null || u.syncRender();
    }),
    y.exports.useEffect(function () {
      var c;
      (c = u == null ? void 0 : u.animationState) === null ||
        c === void 0 ||
        c.animateChanges();
    }),
    _s(function () {
      return function () {
        return u == null ? void 0 : u.notifyUnmount();
      };
    }, []),
    u
  );
}
function vi(e) {
  return (
    typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function yA(e, t, r) {
  return y.exports.useCallback(
    function (n) {
      var i;
      n && ((i = e.mount) === null || i === void 0 || i.call(e, n)),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == 'function' ? r(n) : vi(r) && (r.current = n));
    },
    [t]
  );
}
function kx(e) {
  return Array.isArray(e);
}
function Zt(e) {
  return typeof e == 'string' || kx(e);
}
function xA(e) {
  var t = {};
  return (
    e.forEachValue(function (r, n) {
      return (t[n] = r.get());
    }),
    t
  );
}
function bA(e) {
  var t = {};
  return (
    e.forEachValue(function (r, n) {
      return (t[n] = r.getVelocity());
    }),
    t
  );
}
function Cx(e, t, r, n, i) {
  var o;
  return (
    n === void 0 && (n = {}),
    i === void 0 && (i = {}),
    typeof t == 'function' && (t = t(r != null ? r : e.custom, n, i)),
    typeof t == 'string' &&
      (t = (o = e.variants) === null || o === void 0 ? void 0 : o[t]),
    typeof t == 'function' && (t = t(r != null ? r : e.custom, n, i)),
    t
  );
}
function Cu(e, t, r) {
  var n = e.getProps();
  return Cx(n, t, r != null ? r : n.custom, xA(e), bA(e));
}
function _u(e) {
  var t;
  return (
    typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) ==
      'function' ||
    Zt(e.initial) ||
    Zt(e.animate) ||
    Zt(e.whileHover) ||
    Zt(e.whileDrag) ||
    Zt(e.whileTap) ||
    Zt(e.whileFocus) ||
    Zt(e.exit)
  );
}
function _x(e) {
  return Boolean(_u(e) || e.variants);
}
function SA(e, t) {
  if (_u(e)) {
    var r = e.initial,
      n = e.animate;
    return {
      initial: r === !1 || Zt(r) ? r : void 0,
      animate: Zt(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function wA(e) {
  var t = SA(e, y.exports.useContext(ku)),
    r = t.initial,
    n = t.animate;
  return y.exports.useMemo(
    function () {
      return { initial: r, animate: n };
    },
    [Nm(r), Nm(n)]
  );
}
function Nm(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
function Ta(e) {
  var t = y.exports.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ex = (1 / 60) * 1e3,
  kA =
    typeof performance != 'undefined'
      ? () => performance.now()
      : () => Date.now(),
  Tx =
    typeof window != 'undefined'
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(kA()), Ex);
function CA(e) {
  let t = [],
    r = [],
    n = 0,
    i = !1,
    o = !1;
  const a = new WeakSet(),
    l = {
      schedule: (s, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : r;
        return (
          u && a.add(s),
          d.indexOf(s) === -1 && (d.push(s), f && i && (n = t.length)),
          s
        );
      },
      cancel: (s) => {
        const u = r.indexOf(s);
        u !== -1 && r.splice(u, 1), a.delete(s);
      },
      process: (s) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
          for (let u = 0; u < n; u++) {
            const c = t[u];
            c(s), a.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(s));
      },
    };
  return l;
}
const _A = 40;
let td = !0,
  ca = !1,
  rd = !1;
const Ti = { delta: 0, timestamp: 0 },
  Pa = ['read', 'update', 'preRender', 'render', 'postRender'],
  Eu = Pa.reduce((e, t) => ((e[t] = CA(() => (ca = !0))), e), {}),
  gr = Pa.reduce((e, t) => {
    const r = Eu[t];
    return (e[t] = (n, i = !1, o = !1) => (ca || TA(), r.schedule(n, i, o))), e;
  }, {}),
  fa = Pa.reduce((e, t) => ((e[t] = Eu[t].cancel), e), {}),
  Ac = Pa.reduce((e, t) => ((e[t] = () => Eu[t].process(Ti)), e), {}),
  EA = (e) => Eu[e].process(Ti),
  Px = (e) => {
    (ca = !1),
      (Ti.delta = td ? Ex : Math.max(Math.min(e - Ti.timestamp, _A), 1)),
      (Ti.timestamp = e),
      (rd = !0),
      Pa.forEach(EA),
      (rd = !1),
      ca && ((td = !1), Tx(Px));
  },
  TA = () => {
    (ca = !0), (td = !0), rd || Tx(Px);
  },
  nd = () => Ti;
function Rx(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]]);
  return r;
}
const Es = (e, t, r) => Math.min(Math.max(r, e), t),
  Mc = 0.001,
  PA = 0.01,
  Fm = 10,
  RA = 0.05,
  AA = 1;
function MA({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let i, o;
  cA(e <= Fm * 1e3);
  let a = 1 - t;
  (a = Es(RA, AA, a)),
    (e = Es(PA, Fm, e / 1e3)),
    a < 1
      ? ((i = (u) => {
          const c = u * a,
            f = c * e,
            d = c - r,
            p = id(u, a),
            h = Math.exp(-f);
          return Mc - (d / p) * h;
        }),
        (o = (u) => {
          const f = u * a * e,
            d = f * r + r,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            h = Math.exp(-f),
            x = id(Math.pow(u, 2), a);
          return ((-i(u) + Mc > 0 ? -1 : 1) * ((d - p) * h)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - r) * e + 1;
          return -Mc + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (r - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    s = OA(i, o, l);
  if (((e = e * 1e3), isNaN(s)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(s, 2) * n;
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e };
  }
}
const $A = 12;
function OA(e, t, r) {
  let n = r;
  for (let i = 1; i < $A; i++) n = n - e(n) / t(n);
  return n;
}
function id(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const IA = ['duration', 'bounce'],
  LA = ['stiffness', 'damping', 'mass'];
function Dm(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function zA(e) {
  let t = Object.assign(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    e
  );
  if (!Dm(e, LA) && Dm(e, IA)) {
    const r = MA(e);
    (t = Object.assign(Object.assign(Object.assign({}, t), r), {
      velocity: 0,
      mass: 1,
    })),
      (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Np(e) {
  var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: i } = e,
    o = Rx(e, ['from', 'to', 'restSpeed', 'restDelta']);
  const a = { done: !1, value: t };
  let {
      stiffness: l,
      damping: s,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = zA(o),
    p = Bm,
    h = Bm;
  function x() {
    const w = c ? -(c / 1e3) : 0,
      m = r - t,
      v = s / (2 * Math.sqrt(l * u)),
      g = Math.sqrt(l / u) / 1e3;
    if ((i === void 0 && (i = Math.min(Math.abs(r - t) / 100, 0.4)), v < 1)) {
      const S = id(g, v);
      (p = (_) => {
        const P = Math.exp(-v * g * _);
        return (
          r -
          P * (((w + v * g * m) / S) * Math.sin(S * _) + m * Math.cos(S * _))
        );
      }),
        (h = (_) => {
          const P = Math.exp(-v * g * _);
          return (
            v *
              g *
              P *
              ((Math.sin(S * _) * (w + v * g * m)) / S + m * Math.cos(S * _)) -
            P * (Math.cos(S * _) * (w + v * g * m) - S * m * Math.sin(S * _))
          );
        });
    } else if (v === 1) p = (S) => r - Math.exp(-g * S) * (m + (w + g * m) * S);
    else {
      const S = g * Math.sqrt(v * v - 1);
      p = (_) => {
        const P = Math.exp(-v * g * _),
          T = Math.min(S * _, 300);
        return (
          r - (P * ((w + v * g * m) * Math.sinh(T) + S * m * Math.cosh(T))) / S
        );
      };
    }
  }
  return (
    x(),
    {
      next: (w) => {
        const m = p(w);
        if (d) a.done = w >= f;
        else {
          const v = h(w) * 1e3,
            g = Math.abs(v) <= n,
            S = Math.abs(r - m) <= i;
          a.done = g && S;
        }
        return (a.value = a.done ? r : m), a;
      },
      flipTarget: () => {
        (c = -c), ([t, r] = [r, t]), x();
      },
    }
  );
}
Np.needsInterpolation = (e, t) => typeof e == 'string' || typeof t == 'string';
const Bm = (e) => 0,
  da = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  Me = (e, t, r) => -r * e + r * t + e,
  Ax = (e, t) => (r) => Math.max(Math.min(r, t), e),
  Ao = (e) => (e % 1 ? Number(e.toFixed(5)) : e),
  pa = /(-)?([\d]*\.?[\d])+/g,
  od =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  NA =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function Ra(e) {
  return typeof e == 'string';
}
const Kn = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  Mo = Object.assign(Object.assign({}, Kn), { transform: Ax(0, 1) }),
  yl = Object.assign(Object.assign({}, Kn), { default: 1 }),
  Aa = (e) => ({
    test: (t) => Ra(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Hr = Aa('deg'),
  yr = Aa('%'),
  q = Aa('px'),
  FA = Aa('vh'),
  DA = Aa('vw'),
  Vm = Object.assign(Object.assign({}, yr), {
    parse: (e) => yr.parse(e) / 100,
    transform: (e) => yr.transform(e * 100),
  }),
  Fp = (e, t) => (r) =>
    Boolean(
      (Ra(r) && NA.test(r) && r.startsWith(e)) ||
        (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Mx = (e, t, r) => (n) => {
    if (!Ra(n)) return n;
    const [i, o, a, l] = n.match(pa);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [r]: parseFloat(a),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  On = {
    test: Fp('hsl', 'hue'),
    parse: Mx('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      yr.transform(Ao(t)) +
      ', ' +
      yr.transform(Ao(r)) +
      ', ' +
      Ao(Mo.transform(n)) +
      ')',
  },
  BA = Ax(0, 255),
  $c = Object.assign(Object.assign({}, Kn), {
    transform: (e) => Math.round(BA(e)),
  }),
  Jr = {
    test: Fp('rgb', 'red'),
    parse: Mx('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      'rgba(' +
      $c.transform(e) +
      ', ' +
      $c.transform(t) +
      ', ' +
      $c.transform(r) +
      ', ' +
      Ao(Mo.transform(n)) +
      ')',
  };
function VA(e) {
  let t = '',
    r = '',
    n = '',
    i = '';
  return (
    e.length > 5
      ? ((t = e.substr(1, 2)),
        (r = e.substr(3, 2)),
        (n = e.substr(5, 2)),
        (i = e.substr(7, 2)))
      : ((t = e.substr(1, 1)),
        (r = e.substr(2, 1)),
        (n = e.substr(3, 1)),
        (i = e.substr(4, 1)),
        (t += t),
        (r += r),
        (n += n),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ad = { test: Fp('#'), parse: VA, transform: Jr.transform },
  at = {
    test: (e) => Jr.test(e) || ad.test(e) || On.test(e),
    parse: (e) =>
      Jr.test(e) ? Jr.parse(e) : On.test(e) ? On.parse(e) : ad.parse(e),
    transform: (e) =>
      Ra(e) ? e : e.hasOwnProperty('red') ? Jr.transform(e) : On.transform(e),
  },
  $x = '${c}',
  Ox = '${n}';
function jA(e) {
  var t, r, n, i;
  return (
    isNaN(e) &&
    Ra(e) &&
    ((r = (t = e.match(pa)) === null || t === void 0 ? void 0 : t.length) !==
      null && r !== void 0
      ? r
      : 0) +
      ((i = (n = e.match(od)) === null || n === void 0 ? void 0 : n.length) !==
        null && i !== void 0
        ? i
        : 0) >
      0
  );
}
function Ix(e) {
  typeof e == 'number' && (e = `${e}`);
  const t = [];
  let r = 0;
  const n = e.match(od);
  n && ((r = n.length), (e = e.replace(od, $x)), t.push(...n.map(at.parse)));
  const i = e.match(pa);
  return (
    i && ((e = e.replace(pa, Ox)), t.push(...i.map(Kn.parse))),
    { values: t, numColors: r, tokenised: e }
  );
}
function Lx(e) {
  return Ix(e).values;
}
function zx(e) {
  const { values: t, numColors: r, tokenised: n } = Ix(e),
    i = t.length;
  return (o) => {
    let a = n;
    for (let l = 0; l < i; l++)
      a = a.replace(l < r ? $x : Ox, l < r ? at.transform(o[l]) : Ao(o[l]));
    return a;
  };
}
const WA = (e) => (typeof e == 'number' ? 0 : e);
function HA(e) {
  const t = Lx(e);
  return zx(e)(t.map(WA));
}
const zr = {
    test: jA,
    parse: Lx,
    createTransformer: zx,
    getAnimatableNone: HA,
  },
  UA = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function YA(e) {
  let [t, r] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [n] = r.match(pa) || [];
  if (!n) return e;
  const i = r.replace(n, '');
  let o = UA.has(t) ? 1 : 0;
  return n !== r && (o *= 100), t + '(' + o + i + ')';
}
const GA = /([a-z-]*)\(.*?\)/g,
  ld = Object.assign(Object.assign({}, zr), {
    getAnimatableNone: (e) => {
      const t = e.match(GA);
      return t ? t.map(YA).join(' ') : e;
    },
  });
function Oc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function jm({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let i = 0,
    o = 0,
    a = 0;
  if (!t) i = o = a = r;
  else {
    const l = r < 0.5 ? r * (1 + t) : r + t - r * t,
      s = 2 * r - l;
    (i = Oc(s, l, e + 1 / 3)), (o = Oc(s, l, e)), (a = Oc(s, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: n,
  };
}
const KA = (e, t, r) => {
    const n = e * e,
      i = t * t;
    return Math.sqrt(Math.max(0, r * (i - n) + n));
  },
  XA = [ad, Jr, On],
  Wm = (e) => XA.find((t) => t.test(e)),
  Nx = (e, t) => {
    let r = Wm(e),
      n = Wm(t),
      i = r.parse(e),
      o = n.parse(t);
    r === On && ((i = jm(i)), (r = Jr)), n === On && ((o = jm(o)), (n = Jr));
    const a = Object.assign({}, i);
    return (l) => {
      for (const s in a) s !== 'alpha' && (a[s] = KA(i[s], o[s], l));
      return (a.alpha = Me(i.alpha, o.alpha, l)), r.transform(a);
    };
  },
  sd = (e) => typeof e == 'number',
  QA = (e, t) => (r) => t(e(r)),
  Tu = (...e) => e.reduce(QA);
function Fx(e, t) {
  return sd(e) ? (r) => Me(e, t, r) : at.test(e) ? Nx(e, t) : Bx(e, t);
}
const Dx = (e, t) => {
    const r = [...e],
      n = r.length,
      i = e.map((o, a) => Fx(o, t[a]));
    return (o) => {
      for (let a = 0; a < n; a++) r[a] = i[a](o);
      return r;
    };
  },
  ZA = (e, t) => {
    const r = Object.assign(Object.assign({}, e), t),
      n = {};
    for (const i in r)
      e[i] !== void 0 && t[i] !== void 0 && (n[i] = Fx(e[i], t[i]));
    return (i) => {
      for (const o in n) r[o] = n[o](i);
      return r;
    };
  };
function Hm(e) {
  const t = zr.parse(e),
    r = t.length;
  let n = 0,
    i = 0,
    o = 0;
  for (let a = 0; a < r; a++)
    n || typeof t[a] == 'number' ? n++ : t[a].hue !== void 0 ? o++ : i++;
  return { parsed: t, numNumbers: n, numRGB: i, numHSL: o };
}
const Bx = (e, t) => {
    const r = zr.createTransformer(t),
      n = Hm(e),
      i = Hm(t);
    return n.numHSL === i.numHSL &&
      n.numRGB === i.numRGB &&
      n.numNumbers >= i.numNumbers
      ? Tu(Dx(n.parsed, i.parsed), r)
      : (a) => `${a > 0 ? t : e}`;
  },
  qA = (e, t) => (r) => Me(e, t, r);
function JA(e) {
  if (typeof e == 'number') return qA;
  if (typeof e == 'string') return at.test(e) ? Nx : Bx;
  if (Array.isArray(e)) return Dx;
  if (typeof e == 'object') return ZA;
}
function eM(e, t, r) {
  const n = [],
    i = r || JA(e[0]),
    o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let l = i(e[a], e[a + 1]);
    if (t) {
      const s = Array.isArray(t) ? t[a] : t;
      l = Tu(s, l);
    }
    n.push(l);
  }
  return n;
}
function tM([e, t], [r]) {
  return (n) => r(da(e, t, n));
}
function rM(e, t) {
  const r = e.length,
    n = r - 1;
  return (i) => {
    let o = 0,
      a = !1;
    if ((i <= e[0] ? (a = !0) : i >= e[n] && ((o = n - 1), (a = !0)), !a)) {
      let s = 1;
      for (; s < r && !(e[s] > i || s === n); s++);
      o = s - 1;
    }
    const l = da(e[o], e[o + 1], i);
    return t[o](l);
  };
}
function Vx(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const o = e.length;
  Cs(o === t.length),
    Cs(!n || !Array.isArray(n) || n.length === o - 1),
    e[0] > e[o - 1] &&
      ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
  const a = eM(t, n, i),
    l = o === 2 ? tM(e, a) : rM(e, a);
  return r ? (s) => l(Es(e[0], e[o - 1], s)) : l;
}
const Pu = (e) => (t) => 1 - e(1 - t),
  Dp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  nM = (e) => (t) => Math.pow(t, e),
  jx = (e) => (t) => t * t * ((e + 1) * t - e),
  iM = (e) => {
    const t = jx(e);
    return (r) =>
      (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
  },
  Wx = 1.525,
  oM = 4 / 11,
  aM = 8 / 11,
  lM = 9 / 10,
  Bp = (e) => e,
  Vp = nM(2),
  sM = Pu(Vp),
  Hx = Dp(Vp),
  Ux = (e) => 1 - Math.sin(Math.acos(e)),
  jp = Pu(Ux),
  uM = Dp(jp),
  Wp = jx(Wx),
  cM = Pu(Wp),
  fM = Dp(Wp),
  dM = iM(Wx),
  pM = 4356 / 361,
  hM = 35442 / 1805,
  vM = 16061 / 1805,
  Ts = (e) => {
    if (e === 1 || e === 0) return e;
    const t = e * e;
    return e < oM
      ? 7.5625 * t
      : e < aM
      ? 9.075 * t - 9.9 * e + 3.4
      : e < lM
      ? pM * t - hM * e + vM
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  mM = Pu(Ts),
  gM = (e) => (e < 0.5 ? 0.5 * (1 - Ts(1 - e * 2)) : 0.5 * Ts(e * 2 - 1) + 0.5);
function yM(e, t) {
  return e.map(() => t || Hx).splice(0, e.length - 1);
}
function xM(e) {
  const t = e.length;
  return e.map((r, n) => (n !== 0 ? n / (t - 1) : 0));
}
function bM(e, t) {
  return e.map((r) => r * t);
}
function jl({ from: e = 0, to: t = 1, ease: r, offset: n, duration: i = 300 }) {
  const o = { done: !1, value: e },
    a = Array.isArray(t) ? t : [e, t],
    l = bM(n && n.length === a.length ? n : xM(a), i);
  function s() {
    return Vx(l, a, { ease: Array.isArray(r) ? r : yM(a, r) });
  }
  let u = s();
  return {
    next: (c) => ((o.value = u(c)), (o.done = c >= i), o),
    flipTarget: () => {
      a.reverse(), (u = s());
    },
  };
}
function SM({
  velocity: e = 0,
  from: t = 0,
  power: r = 0.8,
  timeConstant: n = 350,
  restDelta: i = 0.5,
  modifyTarget: o,
}) {
  const a = { done: !1, value: t };
  let l = r * e;
  const s = t + l,
    u = o === void 0 ? s : o(s);
  return (
    u !== s && (l = u - t),
    {
      next: (c) => {
        const f = -l * Math.exp(-c / n);
        return (a.done = !(f > i || f < -i)), (a.value = a.done ? u : u + f), a;
      },
      flipTarget: () => {},
    }
  );
}
const Um = { keyframes: jl, spring: Np, decay: SM };
function wM(e) {
  if (Array.isArray(e.to)) return jl;
  if (Um[e.type]) return Um[e.type];
  const t = new Set(Object.keys(e));
  return t.has('ease') || (t.has('duration') && !t.has('dampingRatio'))
    ? jl
    : t.has('dampingRatio') ||
      t.has('stiffness') ||
      t.has('mass') ||
      t.has('damping') ||
      t.has('restSpeed') ||
      t.has('restDelta')
    ? Np
    : jl;
}
const Yx = (1 / 60) * 1e3,
  kM =
    typeof performance != 'undefined'
      ? () => performance.now()
      : () => Date.now(),
  Gx =
    typeof window != 'undefined'
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(kM()), Yx);
function CM(e) {
  let t = [],
    r = [],
    n = 0,
    i = !1,
    o = !1;
  const a = new WeakSet(),
    l = {
      schedule: (s, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : r;
        return (
          u && a.add(s),
          d.indexOf(s) === -1 && (d.push(s), f && i && (n = t.length)),
          s
        );
      },
      cancel: (s) => {
        const u = r.indexOf(s);
        u !== -1 && r.splice(u, 1), a.delete(s);
      },
      process: (s) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, r] = [r, t]), (r.length = 0), (n = t.length), n))
          for (let u = 0; u < n; u++) {
            const c = t[u];
            c(s), a.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(s));
      },
    };
  return l;
}
const _M = 40;
let ud = !0,
  ha = !1,
  cd = !1;
const Pi = { delta: 0, timestamp: 0 },
  Ma = ['read', 'update', 'preRender', 'render', 'postRender'],
  Ru = Ma.reduce((e, t) => ((e[t] = CM(() => (ha = !0))), e), {}),
  EM = Ma.reduce((e, t) => {
    const r = Ru[t];
    return (e[t] = (n, i = !1, o = !1) => (ha || RM(), r.schedule(n, i, o))), e;
  }, {}),
  TM = Ma.reduce((e, t) => ((e[t] = Ru[t].cancel), e), {});
Ma.reduce((e, t) => ((e[t] = () => Ru[t].process(Pi)), e), {});
const PM = (e) => Ru[e].process(Pi),
  Kx = (e) => {
    (ha = !1),
      (Pi.delta = ud ? Yx : Math.max(Math.min(e - Pi.timestamp, _M), 1)),
      (Pi.timestamp = e),
      (cd = !0),
      Ma.forEach(PM),
      (cd = !1),
      ha && ((ud = !1), Gx(Kx));
  },
  RM = () => {
    (ha = !0), (ud = !0), cd || Gx(Kx);
  },
  AM = () => Pi;
function Xx(e, t, r = 0) {
  return e - t - r;
}
function MM(e, t, r = 0, n = !0) {
  return n ? Xx(t + -e, t, r) : t - (e - t) + r;
}
function $M(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const OM = (e) => {
  const t = ({ delta: r }) => e(r);
  return { start: () => EM.update(t, !0), stop: () => TM.update(t) };
};
function Qx(e) {
  var t,
    r,
    {
      from: n,
      autoplay: i = !0,
      driver: o = OM,
      elapsed: a = 0,
      repeat: l = 0,
      repeatType: s = 'loop',
      repeatDelay: u = 0,
      onPlay: c,
      onStop: f,
      onComplete: d,
      onRepeat: p,
      onUpdate: h,
    } = e,
    x = Rx(e, [
      'from',
      'autoplay',
      'driver',
      'elapsed',
      'repeat',
      'repeatType',
      'repeatDelay',
      'onPlay',
      'onStop',
      'onComplete',
      'onRepeat',
      'onUpdate',
    ]);
  let { to: w } = x,
    m,
    v = 0,
    g = x.duration,
    S,
    _ = !1,
    P = !0,
    T;
  const E = wM(x);
  !((r = (t = E).needsInterpolation) === null || r === void 0) &&
    r.call(t, n, w) &&
    ((T = Vx([0, 100], [n, w], { clamp: !1 })), (n = 0), (w = 100));
  const R = E(Object.assign(Object.assign({}, x), { from: n, to: w }));
  function M() {
    v++,
      s === 'reverse'
        ? ((P = v % 2 === 0), (a = MM(a, g, u, P)))
        : ((a = Xx(a, g, u)), s === 'mirror' && R.flipTarget()),
      (_ = !1),
      p && p();
  }
  function K() {
    m.stop(), d && d();
  }
  function J(N) {
    if ((P || (N = -N), (a += N), !_)) {
      const I = R.next(Math.max(0, a));
      (S = I.value), T && (S = T(S)), (_ = P ? I.done : a <= 0);
    }
    h == null || h(S),
      _ &&
        (v === 0 && (g != null || (g = a)),
        v < l ? $M(a, g, u, P) && M() : K());
  }
  function B() {
    c == null || c(), (m = o(J)), m.start();
  }
  return (
    i && B(),
    {
      stop: () => {
        f == null || f(), m.stop();
      },
    }
  );
}
function Zx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function IM({
  from: e = 0,
  velocity: t = 0,
  min: r,
  max: n,
  power: i = 0.8,
  timeConstant: o = 750,
  bounceStiffness: a = 500,
  bounceDamping: l = 10,
  restDelta: s = 1,
  modifyTarget: u,
  driver: c,
  onUpdate: f,
  onComplete: d,
  onStop: p,
}) {
  let h;
  function x(g) {
    return (r !== void 0 && g < r) || (n !== void 0 && g > n);
  }
  function w(g) {
    return r === void 0
      ? n
      : n === void 0 || Math.abs(r - g) < Math.abs(n - g)
      ? r
      : n;
  }
  function m(g) {
    h == null || h.stop(),
      (h = Qx(
        Object.assign(Object.assign({}, g), {
          driver: c,
          onUpdate: (S) => {
            var _;
            f == null || f(S),
              (_ = g.onUpdate) === null || _ === void 0 || _.call(g, S);
          },
          onComplete: d,
          onStop: p,
        })
      ));
  }
  function v(g) {
    m(
      Object.assign(
        { type: 'spring', stiffness: a, damping: l, restDelta: s },
        g
      )
    );
  }
  if (x(e)) v({ from: e, velocity: t, to: w(e) });
  else {
    let g = i * t + e;
    typeof u != 'undefined' && (g = u(g));
    const S = w(g),
      _ = S === r ? -1 : 1;
    let P, T;
    const E = (R) => {
      (P = T),
        (T = R),
        (t = Zx(R - P, AM().delta)),
        ((_ === 1 && R > S) || (_ === -1 && R < S)) &&
          v({ from: R, to: S, velocity: t });
    };
    m({
      type: 'decay',
      from: e,
      velocity: t,
      timeConstant: o,
      power: i,
      restDelta: s,
      modifyTarget: u,
      onUpdate: x(g) ? E : void 0,
    });
  }
  return { stop: () => (h == null ? void 0 : h.stop()) };
}
const fd = (e) => e.hasOwnProperty('x') && e.hasOwnProperty('y'),
  Ym = (e) => fd(e) && e.hasOwnProperty('z'),
  xl = (e, t) => Math.abs(e - t);
function qx(e, t) {
  if (sd(e) && sd(t)) return xl(e, t);
  if (fd(e) && fd(t)) {
    const r = xl(e.x, t.x),
      n = xl(e.y, t.y),
      i = Ym(e) && Ym(t) ? xl(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(i, 2));
  }
}
const Jx = (e, t) => 1 - 3 * t + 3 * e,
  eb = (e, t) => 3 * t - 6 * e,
  tb = (e) => 3 * e,
  Ps = (e, t, r) => ((Jx(t, r) * e + eb(t, r)) * e + tb(t)) * e,
  rb = (e, t, r) => 3 * Jx(t, r) * e * e + 2 * eb(t, r) * e + tb(t),
  LM = 1e-7,
  zM = 10;
function NM(e, t, r, n, i) {
  let o,
    a,
    l = 0;
  do (a = t + (r - t) / 2), (o = Ps(a, n, i) - e), o > 0 ? (r = a) : (t = a);
  while (Math.abs(o) > LM && ++l < zM);
  return a;
}
const FM = 8,
  DM = 0.001;
function BM(e, t, r, n) {
  for (let i = 0; i < FM; ++i) {
    const o = rb(t, r, n);
    if (o === 0) return t;
    t -= (Ps(t, r, n) - e) / o;
  }
  return t;
}
const Wl = 11,
  bl = 1 / (Wl - 1);
function VM(e, t, r, n) {
  if (e === t && r === n) return Bp;
  const i = new Float32Array(Wl);
  for (let a = 0; a < Wl; ++a) i[a] = Ps(a * bl, e, r);
  function o(a) {
    let l = 0,
      s = 1;
    const u = Wl - 1;
    for (; s !== u && i[s] <= a; ++s) l += bl;
    --s;
    const c = (a - i[s]) / (i[s + 1] - i[s]),
      f = l + c * bl,
      d = rb(f, e, r);
    return d >= DM ? BM(a, f, e, r) : d === 0 ? f : NM(a, l, l + bl, e, r);
  }
  return (a) => (a === 0 || a === 1 ? a : Ps(o(a), t, n));
}
function Hp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Up(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var $o = (function () {
    function e() {
      this.subscriptions = [];
    }
    return (
      (e.prototype.add = function (t) {
        var r = this;
        return (
          Hp(this.subscriptions, t),
          function () {
            return Up(r.subscriptions, t);
          }
        );
      }),
      (e.prototype.notify = function (t, r, n) {
        var i = this.subscriptions.length;
        if (!!i)
          if (i === 1) this.subscriptions[0](t, r, n);
          else
            for (var o = 0; o < i; o++) {
              var a = this.subscriptions[o];
              a && a(t, r, n);
            }
      }),
      (e.prototype.getSize = function () {
        return this.subscriptions.length;
      }),
      (e.prototype.clear = function () {
        this.subscriptions.length = 0;
      }),
      e
    );
  })(),
  jM = function (e) {
    return !isNaN(parseFloat(e));
  },
  WM = (function () {
    function e(t) {
      var r = this;
      (this.version = '6.3.10'),
        (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.updateSubscribers = new $o()),
        (this.velocityUpdateSubscribers = new $o()),
        (this.renderSubscribers = new $o()),
        (this.canTrackVelocity = !1),
        (this.updateAndNotify = function (n, i) {
          i === void 0 && (i = !0), (r.prev = r.current), (r.current = n);
          var o = nd(),
            a = o.delta,
            l = o.timestamp;
          r.lastUpdated !== l &&
            ((r.timeDelta = a),
            (r.lastUpdated = l),
            gr.postRender(r.scheduleVelocityCheck)),
            r.prev !== r.current && r.updateSubscribers.notify(r.current),
            r.velocityUpdateSubscribers.getSize() &&
              r.velocityUpdateSubscribers.notify(r.getVelocity()),
            i && r.renderSubscribers.notify(r.current);
        }),
        (this.scheduleVelocityCheck = function () {
          return gr.postRender(r.velocityCheck);
        }),
        (this.velocityCheck = function (n) {
          var i = n.timestamp;
          i !== r.lastUpdated &&
            ((r.prev = r.current),
            r.velocityUpdateSubscribers.notify(r.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = t),
        (this.canTrackVelocity = jM(this.current));
    }
    return (
      (e.prototype.onChange = function (t) {
        return this.updateSubscribers.add(t);
      }),
      (e.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      }),
      (e.prototype.onRenderRequest = function (t) {
        return t(this.get()), this.renderSubscribers.add(t);
      }),
      (e.prototype.attach = function (t) {
        this.passiveEffect = t;
      }),
      (e.prototype.set = function (t, r) {
        r === void 0 && (r = !0),
          !r || !this.passiveEffect
            ? this.updateAndNotify(t, r)
            : this.passiveEffect(t, this.updateAndNotify);
      }),
      (e.prototype.get = function () {
        return this.current;
      }),
      (e.prototype.getPrevious = function () {
        return this.prev;
      }),
      (e.prototype.getVelocity = function () {
        return this.canTrackVelocity
          ? Zx(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }),
      (e.prototype.start = function (t) {
        var r = this;
        return (
          this.stop(),
          new Promise(function (n) {
            (r.hasAnimated = !0), (r.stopAnimation = t(n));
          }).then(function () {
            return r.clearAnimation();
          })
        );
      }),
      (e.prototype.stop = function () {
        this.stopAnimation && this.stopAnimation(), this.clearAnimation();
      }),
      (e.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      }),
      (e.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      }),
      (e.prototype.destroy = function () {
        this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop();
      }),
      e
    );
  })();
function Vi(e) {
  return new WM(e);
}
var Nr = function (e) {
    return Boolean(e !== null && typeof e == 'object' && e.getVelocity);
  },
  Rs = function (e) {
    return e * 1e3;
  },
  HM = {
    linear: Bp,
    easeIn: Vp,
    easeInOut: Hx,
    easeOut: sM,
    circIn: Ux,
    circInOut: uM,
    circOut: jp,
    backIn: Wp,
    backInOut: fM,
    backOut: cM,
    anticipate: dM,
    bounceIn: mM,
    bounceInOut: gM,
    bounceOut: Ts,
  },
  Gm = function (e) {
    if (Array.isArray(e)) {
      Cs(e.length === 4);
      var t = $e(e, 4),
        r = t[0],
        n = t[1],
        i = t[2],
        o = t[3];
      return VM(r, n, i, o);
    } else if (typeof e == 'string') return HM[e];
    return e;
  },
  UM = function (e) {
    return Array.isArray(e) && typeof e[0] != 'number';
  },
  Km = function (e, t) {
    return e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && zr.test(t) && !t.startsWith('url('))
        );
  },
  va = function (e) {
    return Array.isArray(e);
  },
  kn = function () {
    return { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 };
  },
  Sl = function (e) {
    return {
      type: 'spring',
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    };
  },
  Ic = function () {
    return { type: 'keyframes', ease: 'linear', duration: 0.3 };
  },
  YM = function (e) {
    return { type: 'keyframes', duration: 0.8, values: e };
  },
  Xm = {
    x: kn,
    y: kn,
    z: kn,
    rotate: kn,
    rotateX: kn,
    rotateY: kn,
    rotateZ: kn,
    scaleX: Sl,
    scaleY: Sl,
    scale: Sl,
    opacity: Ic,
    backgroundColor: Ic,
    color: Ic,
    default: Sl,
  },
  GM = function (e, t) {
    var r;
    return va(t) ? (r = YM) : (r = Xm[e] || Xm.default), F({ to: t }, r(t));
  },
  Qm = F(F({}, Kn), { transform: Math.round }),
  nb = {
    borderWidth: q,
    borderTopWidth: q,
    borderRightWidth: q,
    borderBottomWidth: q,
    borderLeftWidth: q,
    borderRadius: q,
    radius: q,
    borderTopLeftRadius: q,
    borderTopRightRadius: q,
    borderBottomRightRadius: q,
    borderBottomLeftRadius: q,
    width: q,
    maxWidth: q,
    height: q,
    maxHeight: q,
    size: q,
    top: q,
    right: q,
    bottom: q,
    left: q,
    padding: q,
    paddingTop: q,
    paddingRight: q,
    paddingBottom: q,
    paddingLeft: q,
    margin: q,
    marginTop: q,
    marginRight: q,
    marginBottom: q,
    marginLeft: q,
    rotate: Hr,
    rotateX: Hr,
    rotateY: Hr,
    rotateZ: Hr,
    scale: yl,
    scaleX: yl,
    scaleY: yl,
    scaleZ: yl,
    skew: Hr,
    skewX: Hr,
    skewY: Hr,
    distance: q,
    translateX: q,
    translateY: q,
    translateZ: q,
    x: q,
    y: q,
    z: q,
    perspective: q,
    transformPerspective: q,
    opacity: Mo,
    originX: Vm,
    originY: Vm,
    originZ: q,
    zIndex: Qm,
    fillOpacity: Mo,
    strokeOpacity: Mo,
    numOctaves: Qm,
  },
  KM = F(F({}, nb), {
    color: at,
    backgroundColor: at,
    outlineColor: at,
    fill: at,
    stroke: at,
    borderColor: at,
    borderTopColor: at,
    borderRightColor: at,
    borderBottomColor: at,
    borderLeftColor: at,
    filter: ld,
    WebkitFilter: ld,
  }),
  Yp = function (e) {
    return KM[e];
  };
function Gp(e, t) {
  var r,
    n = Yp(e);
  return (
    n !== ld && (n = zr),
    (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t)
  );
}
var XM = { current: !1 },
  QM = function (e) {
    return Boolean(e && typeof e == 'object' && e.mix && e.toValue);
  },
  ib = function (e) {
    return va(e) ? e[e.length - 1] || 0 : e;
  };
function ZM(e) {
  e.when,
    e.delay,
    e.delayChildren,
    e.staggerChildren,
    e.staggerDirection,
    e.repeat,
    e.repeatType,
    e.repeatDelay,
    e.from;
  var t = br(e, [
    'when',
    'delay',
    'delayChildren',
    'staggerChildren',
    'staggerDirection',
    'repeat',
    'repeatType',
    'repeatDelay',
    'from',
  ]);
  return !!Object.keys(t).length;
}
function qM(e) {
  var t = e.ease,
    r = e.times,
    n = e.yoyo,
    i = e.flip,
    o = e.loop,
    a = br(e, ['ease', 'times', 'yoyo', 'flip', 'loop']),
    l = F({}, a);
  return (
    r && (l.offset = r),
    a.duration && (l.duration = Rs(a.duration)),
    a.repeatDelay && (l.repeatDelay = Rs(a.repeatDelay)),
    t && (l.ease = UM(t) ? t.map(Gm) : Gm(t)),
    a.type === 'tween' && (l.type = 'keyframes'),
    (n || o || i) &&
      (n
        ? (l.repeatType = 'reverse')
        : o
        ? (l.repeatType = 'loop')
        : i && (l.repeatType = 'mirror'),
      (l.repeat = o || n || i || a.repeat)),
    a.type !== 'spring' && (l.type = 'keyframes'),
    l
  );
}
function JM(e, t) {
  var r,
    n,
    i = Kp(e, t) || {};
  return (n = (r = i.delay) !== null && r !== void 0 ? r : e.delay) !== null &&
    n !== void 0
    ? n
    : 0;
}
function e$(e) {
  return (
    Array.isArray(e.to) &&
      e.to[0] === null &&
      ((e.to = tr([], $e(e.to), !1)), (e.to[0] = e.from)),
    e
  );
}
function t$(e, t, r) {
  var n;
  return (
    Array.isArray(t.to) &&
      (((n = e.duration) !== null && n !== void 0) || (e.duration = 0.8)),
    e$(t),
    ZM(e) || (e = F(F({}, e), GM(r, t.to))),
    F(F({}, t), qM(e))
  );
}
function r$(e, t, r, n, i) {
  var o,
    a = Kp(n, e),
    l = (o = a.from) !== null && o !== void 0 ? o : t.get(),
    s = Km(e, r);
  l === 'none' && s && typeof r == 'string'
    ? (l = Gp(e, r))
    : Zm(l) && typeof r == 'string'
    ? (l = qm(r))
    : !Array.isArray(r) && Zm(r) && typeof l == 'string' && (r = qm(l));
  var u = Km(e, l);
  function c() {
    var d = {
      from: l,
      to: r,
      velocity: t.getVelocity(),
      onComplete: i,
      onUpdate: function (p) {
        return t.set(p);
      },
    };
    return a.type === 'inertia' || a.type === 'decay'
      ? IM(F(F({}, d), a))
      : Qx(
          F(F({}, t$(a, d, e)), {
            onUpdate: function (p) {
              var h;
              d.onUpdate(p),
                (h = a.onUpdate) === null || h === void 0 || h.call(a, p);
            },
            onComplete: function () {
              var p;
              d.onComplete(),
                (p = a.onComplete) === null || p === void 0 || p.call(a);
            },
          })
        );
  }
  function f() {
    var d,
      p,
      h = ib(r);
    return (
      t.set(h),
      i(),
      (d = a == null ? void 0 : a.onUpdate) === null ||
        d === void 0 ||
        d.call(a, h),
      (p = a == null ? void 0 : a.onComplete) === null ||
        p === void 0 ||
        p.call(a),
      { stop: function () {} }
    );
  }
  return !u || !s || a.type === !1 ? f : c;
}
function Zm(e) {
  return (
    e === 0 ||
    (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
  );
}
function qm(e) {
  return typeof e == 'number' ? 0 : Gp('', e);
}
function Kp(e, t) {
  return e[t] || e.default || e;
}
function Xp(e, t, r, n) {
  return (
    n === void 0 && (n = {}),
    XM.current && (n = { type: !1 }),
    t.start(function (i) {
      var o,
        a,
        l = r$(e, t, r, n, i),
        s = JM(n, e),
        u = function () {
          return (a = l());
        };
      return (
        s ? (o = window.setTimeout(u, Rs(s))) : u(),
        function () {
          clearTimeout(o), a == null || a.stop();
        }
      );
    })
  );
}
function n$(e, t, r) {
  r === void 0 && (r = {});
  var n = Nr(e) ? e : Vi(e);
  return (
    Xp('', n, t, r),
    {
      stop: function () {
        return n.stop();
      },
      isAnimating: function () {
        return n.isAnimating();
      },
    }
  );
}
var ob = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  i$ = ob.length,
  Jm = function (e) {
    return typeof e == 'string' ? parseFloat(e) : e;
  },
  e0 = function (e) {
    return typeof e == 'number' || q.test(e);
  };
function o$(e, t, r, n, i, o) {
  var a, l, s, u;
  i
    ? ((e.opacity = Me(
        0,
        (a = r.opacity) !== null && a !== void 0 ? a : 1,
        a$(n)
      )),
      (e.opacityExit = Me(
        (l = t.opacity) !== null && l !== void 0 ? l : 1,
        0,
        l$(n)
      )))
    : o &&
      (e.opacity = Me(
        (s = t.opacity) !== null && s !== void 0 ? s : 1,
        (u = r.opacity) !== null && u !== void 0 ? u : 1,
        n
      ));
  for (var c = 0; c < i$; c++) {
    var f = 'border'.concat(ob[c], 'Radius'),
      d = t0(t, f),
      p = t0(r, f);
    if (!(d === void 0 && p === void 0)) {
      d || (d = 0), p || (p = 0);
      var h = d === 0 || p === 0 || e0(d) === e0(p);
      h
        ? ((e[f] = Math.max(Me(Jm(d), Jm(p), n), 0)),
          (yr.test(p) || yr.test(d)) && (e[f] += '%'))
        : (e[f] = p);
    }
  }
  (t.rotate || r.rotate) && (e.rotate = Me(t.rotate || 0, r.rotate || 0, n));
}
function t0(e, t) {
  var r;
  return (r = e[t]) !== null && r !== void 0 ? r : e.borderRadius;
}
var a$ = ab(0, 0.5, jp),
  l$ = ab(0.5, 0.95, Bp);
function ab(e, t, r) {
  return function (n) {
    return n < e ? 0 : n > t ? 1 : r(da(e, t, n));
  };
}
function r0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ar(e, t) {
  r0(e.x, t.x), r0(e.y, t.y);
}
function Lc(e) {
  return e === void 0 || e === 1;
}
function lb(e) {
  var t = e.scale,
    r = e.scaleX,
    n = e.scaleY;
  return !Lc(t) || !Lc(r) || !Lc(n);
}
function Ur(e) {
  return (
    lb(e) || n0(e.x) || n0(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
  );
}
function n0(e) {
  return e && e !== '0%';
}
function As(e, t, r) {
  var n = e - r,
    i = t * n;
  return r + i;
}
function i0(e, t, r, n, i) {
  return i !== void 0 && (e = As(e, i, n)), As(e, r, n) + t;
}
function dd(e, t, r, n, i) {
  t === void 0 && (t = 0),
    r === void 0 && (r = 1),
    (e.min = i0(e.min, t, r, n, i)),
    (e.max = i0(e.max, t, r, n, i));
}
function sb(e, t) {
  var r = t.x,
    n = t.y;
  dd(e.x, r.translate, r.scale, r.originPoint),
    dd(e.y, n.translate, n.scale, n.originPoint);
}
function s$(e, t, r, n) {
  var i, o;
  n === void 0 && (n = !1);
  var a = r.length;
  if (!!a) {
    t.x = t.y = 1;
    for (var l, s, u = 0; u < a; u++)
      (l = r[u]),
        (s = l.projectionDelta),
        ((o = (i = l.instance) === null || i === void 0 ? void 0 : i.style) ===
          null || o === void 0
          ? void 0
          : o.display) !== 'contents' &&
          (n &&
            l.options.layoutScroll &&
            l.scroll &&
            l !== l.root &&
            gi(e, { x: -l.scroll.x, y: -l.scroll.y }),
          s && ((t.x *= s.x.scale), (t.y *= s.y.scale), sb(e, s)),
          n && Ur(l.latestValues) && gi(e, l.latestValues));
  }
}
function mi(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function o0(e, t, r) {
  var n = $e(r, 3),
    i = n[0],
    o = n[1],
    a = n[2],
    l = t[a] !== void 0 ? t[a] : 0.5,
    s = Me(e.min, e.max, l);
  dd(e, t[i], t[o], s, t.scale);
}
var u$ = ['x', 'scaleX', 'originX'],
  c$ = ['y', 'scaleY', 'originY'];
function gi(e, t) {
  o0(e.x, t, u$), o0(e.y, t, c$);
}
function Fr(e) {
  return e.max - e.min;
}
function a0(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), qx(e, t) < r;
}
function l0(e, t, r, n) {
  n === void 0 && (n = 0.5),
    (e.origin = n),
    (e.originPoint = Me(t.min, t.max, e.origin)),
    (e.scale = Fr(r) / Fr(t)),
    (a0(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Me(r.min, r.max, e.origin) - e.originPoint),
    (a0(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Oo(e, t, r, n) {
  l0(e.x, t.x, r.x, n == null ? void 0 : n.originX),
    l0(e.y, t.y, r.y, n == null ? void 0 : n.originY);
}
function s0(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + Fr(t));
}
function f$(e, t, r) {
  s0(e.x, t.x, r.x), s0(e.y, t.y, r.y);
}
function u0(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + Fr(t));
}
function Io(e, t, r) {
  u0(e.x, t.x, r.x), u0(e.y, t.y, r.y);
}
function c0(e, t, r, n, i) {
  return (
    (e -= t), (e = As(e, 1 / r, n)), i !== void 0 && (e = As(e, 1 / i, n)), e
  );
}
function d$(e, t, r, n, i, o, a) {
  if (
    (t === void 0 && (t = 0),
    r === void 0 && (r = 1),
    n === void 0 && (n = 0.5),
    o === void 0 && (o = e),
    a === void 0 && (a = e),
    yr.test(t))
  ) {
    t = parseFloat(t);
    var l = Me(a.min, a.max, t / 100);
    t = l - a.min;
  }
  if (typeof t == 'number') {
    var s = Me(o.min, o.max, n);
    e === o && (s -= t),
      (e.min = c0(e.min, t, r, s, i)),
      (e.max = c0(e.max, t, r, s, i));
  }
}
function f0(e, t, r, n, i) {
  var o = $e(r, 3),
    a = o[0],
    l = o[1],
    s = o[2];
  d$(e, t[a], t[l], t[s], t.scale, n, i);
}
var p$ = ['x', 'scaleX', 'originX'],
  h$ = ['y', 'scaleY', 'originY'];
function d0(e, t, r, n) {
  f0(e.x, t, p$, r == null ? void 0 : r.x, n == null ? void 0 : n.x),
    f0(e.y, t, h$, r == null ? void 0 : r.y, n == null ? void 0 : n.y);
}
var p0 = function () {
    return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
  },
  Lo = function () {
    return { x: p0(), y: p0() };
  },
  h0 = function () {
    return { min: 0, max: 0 };
  },
  nt = function () {
    return { x: h0(), y: h0() };
  };
function v0(e) {
  return e.translate === 0 && e.scale === 1;
}
function ub(e) {
  return v0(e.x) && v0(e.y);
}
function cb(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
var v$ = (function () {
    function e() {
      this.members = [];
    }
    return (
      (e.prototype.add = function (t) {
        Hp(this.members, t), t.scheduleRender();
      }),
      (e.prototype.remove = function (t) {
        if (
          (Up(this.members, t),
          t === this.prevLead && (this.prevLead = void 0),
          t === this.lead)
        ) {
          var r = this.members[this.members.length - 1];
          r && this.promote(r);
        }
      }),
      (e.prototype.relegate = function (t) {
        var r = this.members.findIndex(function (a) {
          return t === a;
        });
        if (r === 0) return !1;
        for (var n, i = r; i >= 0; i--) {
          var o = this.members[i];
          if (o.isPresent !== !1) {
            n = o;
            break;
          }
        }
        return n ? (this.promote(n), !0) : !1;
      }),
      (e.prototype.promote = function (t, r) {
        var n,
          i = this.lead;
        if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
          i.instance && i.scheduleRender(),
            t.scheduleRender(),
            (t.resumeFrom = i),
            r && (t.resumeFrom.preserveOpacity = !0),
            i.snapshot &&
              ((t.snapshot = i.snapshot),
              (t.snapshot.latestValues = i.animationValues || i.latestValues),
              (t.snapshot.isShared = !0)),
            !((n = t.root) === null || n === void 0) &&
              n.isUpdating &&
              (t.isLayoutDirty = !0);
          var o = t.options.crossfade;
          o === !1 && i.hide();
        }
      }),
      (e.prototype.exitAnimationComplete = function () {
        this.members.forEach(function (t) {
          var r, n, i, o, a;
          (n = (r = t.options).onExitComplete) === null ||
            n === void 0 ||
            n.call(r),
            (a =
              (i = t.resumingFrom) === null || i === void 0
                ? void 0
                : (o = i.options).onExitComplete) === null ||
              a === void 0 ||
              a.call(o);
        });
      }),
      (e.prototype.scheduleRender = function () {
        this.members.forEach(function (t) {
          t.instance && t.scheduleRender(!1);
        });
      }),
      (e.prototype.removeLeadSnapshot = function () {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }),
      e
    );
  })(),
  Ms = {};
function m$(e) {
  Object.assign(Ms, e);
}
var g$ = 'translate3d(0px, 0px, 0) scale(1, 1)';
function m0(e, t, r) {
  var n = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = 'translate3d('.concat(n, 'px, ').concat(i, 'px, 0) ');
  if (r) {
    var a = r.rotate,
      l = r.rotateX,
      s = r.rotateY;
    a && (o += 'rotate('.concat(a, 'deg) ')),
      l && (o += 'rotateX('.concat(l, 'deg) ')),
      s && (o += 'rotateY('.concat(s, 'deg) '));
  }
  return (
    (o += 'scale('.concat(e.x.scale, ', ').concat(e.y.scale, ')')),
    o === g$ ? 'none' : o
  );
}
function sr(e) {
  return [e('x'), e('y')];
}
var pd = ['', 'X', 'Y', 'Z'],
  y$ = ['translate', 'scale', 'rotate', 'skew'],
  ma = ['transformPerspective', 'x', 'y', 'z'];
y$.forEach(function (e) {
  return pd.forEach(function (t) {
    return ma.push(e + t);
  });
});
function x$(e, t) {
  return ma.indexOf(e) - ma.indexOf(t);
}
var b$ = new Set(ma);
function $a(e) {
  return b$.has(e);
}
var S$ = new Set(['originX', 'originY', 'originZ']);
function fb(e) {
  return S$.has(e);
}
var w$ = function (e, t) {
    return e.depth - t.depth;
  },
  k$ = (function () {
    function e() {
      (this.children = []), (this.isDirty = !1);
    }
    return (
      (e.prototype.add = function (t) {
        Hp(this.children, t), (this.isDirty = !0);
      }),
      (e.prototype.remove = function (t) {
        Up(this.children, t), (this.isDirty = !0);
      }),
      (e.prototype.forEach = function (t) {
        this.isDirty && this.children.sort(w$),
          (this.isDirty = !1),
          this.children.forEach(t);
      }),
      e
    );
  })();
function Hl(e) {
  var t = Nr(e) ? e.get() : e;
  return QM(t) ? t.toValue() : t;
}
var g0 = 1e3,
  zo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function db(e) {
  var t = e.attachResizeListener,
    r = e.defaultParent,
    n = e.measureScroll,
    i = e.resetTransform;
  return (function () {
    function o(a, l, s) {
      var u = this;
      l === void 0 && (l = {}),
        s === void 0 && (s = r == null ? void 0 : r()),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = function () {
          u.isUpdating && ((u.isUpdating = !1), u.clearAllSnapshots());
        }),
        (this.updateProjection = function () {
          u.nodes.forEach(R$), u.nodes.forEach(A$);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.id = a),
        (this.latestValues = l),
        (this.root = s ? s.root || s : this),
        (this.path = s ? tr(tr([], $e(s.path), !1), [s], !1) : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0),
        a && this.root.registerPotentialNode(a, this);
      for (var c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new k$());
    }
    return (
      (o.prototype.addEventListener = function (a, l) {
        return (
          this.eventHandlers.has(a) || this.eventHandlers.set(a, new $o()),
          this.eventHandlers.get(a).add(l)
        );
      }),
      (o.prototype.notifyListeners = function (a) {
        for (var l = [], s = 1; s < arguments.length; s++)
          l[s - 1] = arguments[s];
        var u = this.eventHandlers.get(a);
        u == null || u.notify.apply(u, tr([], $e(l), !1));
      }),
      (o.prototype.hasListeners = function (a) {
        return this.eventHandlers.has(a);
      }),
      (o.prototype.registerPotentialNode = function (a, l) {
        this.potentialNodes.set(a, l);
      }),
      (o.prototype.mount = function (a, l) {
        var s = this,
          u;
        if ((l === void 0 && (l = !1), !this.instance)) {
          (this.isSVG = a instanceof SVGElement && a.tagName !== 'svg'),
            (this.instance = a);
          var c = this.options,
            f = c.layoutId,
            d = c.layout,
            p = c.visualElement;
          if (
            (p && !p.getInstance() && p.mount(a),
            this.root.nodes.add(this),
            (u = this.parent) === null || u === void 0 || u.children.add(this),
            this.id && this.root.potentialNodes.delete(this.id),
            l && (d || f) && (this.isLayoutDirty = !0),
            t)
          ) {
            var h,
              x = function () {
                return (s.root.updateBlockedByResize = !1);
              };
            t(a, function () {
              (s.root.updateBlockedByResize = !0),
                clearTimeout(h),
                (h = window.setTimeout(x, 250)),
                zo.hasAnimatedSinceResize &&
                  ((zo.hasAnimatedSinceResize = !1), s.nodes.forEach(P$));
            });
          }
          f && this.root.registerSharedNode(f, this),
            this.options.animate !== !1 &&
              p &&
              (f || d) &&
              this.addEventListener('didUpdate', function (w) {
                var m,
                  v,
                  g,
                  S,
                  _,
                  P = w.delta,
                  T = w.hasLayoutChanged,
                  E = w.hasRelativeTargetChanged,
                  R = w.layout;
                if (s.isTreeAnimationBlocked()) {
                  (s.target = void 0), (s.relativeTarget = void 0);
                  return;
                }
                var M =
                    (v =
                      (m = s.options.transition) !== null && m !== void 0
                        ? m
                        : p.getDefaultTransition()) !== null && v !== void 0
                      ? v
                      : L$,
                  K = p.getProps(),
                  J = K.onLayoutAnimationStart,
                  B = K.onLayoutAnimationComplete,
                  N = !s.targetLayout || !cb(s.targetLayout, R) || E,
                  I = !T && E;
                if (
                  ((g = s.resumeFrom) === null || g === void 0
                    ? void 0
                    : g.instance) ||
                  I ||
                  (T && (N || !s.currentAnimation))
                ) {
                  s.resumeFrom &&
                    ((s.resumingFrom = s.resumeFrom),
                    (s.resumingFrom.resumingFrom = void 0)),
                    s.setAnimationOrigin(P, I);
                  var X = F(F({}, Kp(M, 'layout')), {
                    onPlay: J,
                    onComplete: B,
                  });
                  p.shouldReduceMotion && ((X.delay = 0), (X.type = !1)),
                    s.startAnimation(X);
                } else !T && s.animationProgress === 0 && s.finishAnimation(), s.isLead() && ((_ = (S = s.options).onExitComplete) === null || _ === void 0 || _.call(S));
                s.targetLayout = R;
              });
        }
      }),
      (o.prototype.unmount = function () {
        var a, l;
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this),
          (a = this.getStack()) === null || a === void 0 || a.remove(this),
          (l = this.parent) === null || l === void 0 || l.children.delete(this),
          (this.instance = void 0),
          fa.preRender(this.updateProjection);
      }),
      (o.prototype.blockUpdate = function () {
        this.updateManuallyBlocked = !0;
      }),
      (o.prototype.unblockUpdate = function () {
        this.updateManuallyBlocked = !1;
      }),
      (o.prototype.isUpdateBlocked = function () {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }),
      (o.prototype.isTreeAnimationBlocked = function () {
        var a;
        return (
          this.isAnimationBlocked ||
          ((a = this.parent) === null || a === void 0
            ? void 0
            : a.isTreeAnimationBlocked()) ||
          !1
        );
      }),
      (o.prototype.startUpdate = function () {
        var a;
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          (a = this.nodes) === null || a === void 0 || a.forEach(M$));
      }),
      (o.prototype.willUpdate = function (a) {
        var l, s, u;
        if ((a === void 0 && (a = !0), this.root.isUpdateBlocked())) {
          (s = (l = this.options).onExitComplete) === null ||
            s === void 0 ||
            s.call(l);
          return;
        }
        if (
          (!this.root.isUpdating && this.root.startUpdate(),
          !this.isLayoutDirty)
        ) {
          this.isLayoutDirty = !0;
          for (var c = 0; c < this.path.length; c++) {
            var f = this.path[c];
            (f.shouldResetTransform = !0), f.updateScroll();
          }
          var d = this.options,
            p = d.layoutId,
            h = d.layout;
          if (!(p === void 0 && !h)) {
            var x =
              (u = this.options.visualElement) === null || u === void 0
                ? void 0
                : u.getProps().transformTemplate;
            (this.prevTransformTemplateValue =
              x == null ? void 0 : x(this.latestValues, '')),
              this.updateSnapshot(),
              a && this.notifyListeners('willUpdate');
          }
        }
      }),
      (o.prototype.didUpdate = function () {
        var a = this.isUpdateBlocked();
        if (a) {
          this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(y0);
          return;
        }
        !this.isUpdating ||
          ((this.isUpdating = !1),
          this.potentialNodes.size &&
            (this.potentialNodes.forEach(z$), this.potentialNodes.clear()),
          this.nodes.forEach(T$),
          this.nodes.forEach(C$),
          this.nodes.forEach(_$),
          this.clearAllSnapshots(),
          Ac.update(),
          Ac.preRender(),
          Ac.render());
      }),
      (o.prototype.clearAllSnapshots = function () {
        this.nodes.forEach(E$), this.sharedNodes.forEach($$);
      }),
      (o.prototype.scheduleUpdateProjection = function () {
        gr.preRender(this.updateProjection, !1, !0);
      }),
      (o.prototype.scheduleCheckAfterUnmount = function () {
        var a = this;
        gr.postRender(function () {
          a.isLayoutDirty ? a.root.didUpdate() : a.root.checkUpdateFailed();
        });
      }),
      (o.prototype.updateSnapshot = function () {
        if (!(this.snapshot || !this.instance)) {
          var a = this.measure(),
            l = this.removeTransform(this.removeElementScroll(a));
          w0(l), (this.snapshot = { measured: a, layout: l, latestValues: {} });
        }
      }),
      (o.prototype.updateLayout = function () {
        var a;
        if (
          !!this.instance &&
          (this.updateScroll(),
          !(
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty
          ))
        ) {
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (var l = 0; l < this.path.length; l++) {
              var s = this.path[l];
              s.updateScroll();
            }
          var u = this.measure();
          w0(u);
          var c = this.layout;
          (this.layout = { measured: u, actual: this.removeElementScroll(u) }),
            (this.layoutCorrected = nt()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners('measure', this.layout.actual),
            (a = this.options.visualElement) === null ||
              a === void 0 ||
              a.notifyLayoutMeasure(
                this.layout.actual,
                c == null ? void 0 : c.actual
              );
        }
      }),
      (o.prototype.updateScroll = function () {
        this.options.layoutScroll &&
          this.instance &&
          (this.scroll = n(this.instance));
      }),
      (o.prototype.resetTransform = function () {
        var a;
        if (!!i) {
          var l = this.isLayoutDirty || this.shouldResetTransform,
            s = this.projectionDelta && !ub(this.projectionDelta),
            u =
              (a = this.options.visualElement) === null || a === void 0
                ? void 0
                : a.getProps().transformTemplate,
            c = u == null ? void 0 : u(this.latestValues, ''),
            f = c !== this.prevTransformTemplateValue;
          l &&
            (s || Ur(this.latestValues) || f) &&
            (i(this.instance, c),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
      }),
      (o.prototype.measure = function () {
        var a = this.options.visualElement;
        if (!a) return nt();
        var l = a.measureViewportBox(),
          s = this.root.scroll;
        return s && (mi(l.x, s.x), mi(l.y, s.y)), l;
      }),
      (o.prototype.removeElementScroll = function (a) {
        var l = nt();
        ar(l, a);
        for (var s = 0; s < this.path.length; s++) {
          var u = this.path[s],
            c = u.scroll,
            f = u.options;
          u !== this.root &&
            c &&
            f.layoutScroll &&
            (mi(l.x, c.x), mi(l.y, c.y));
        }
        return l;
      }),
      (o.prototype.applyTransform = function (a, l) {
        l === void 0 && (l = !1);
        var s = nt();
        ar(s, a);
        for (var u = 0; u < this.path.length; u++) {
          var c = this.path[u];
          !l &&
            c.options.layoutScroll &&
            c.scroll &&
            c !== c.root &&
            gi(s, { x: -c.scroll.x, y: -c.scroll.y }),
            Ur(c.latestValues) && gi(s, c.latestValues);
        }
        return Ur(this.latestValues) && gi(s, this.latestValues), s;
      }),
      (o.prototype.removeTransform = function (a) {
        var l,
          s = nt();
        ar(s, a);
        for (var u = 0; u < this.path.length; u++) {
          var c = this.path[u];
          if (!!c.instance && !!Ur(c.latestValues)) {
            lb(c.latestValues) && c.updateSnapshot();
            var f = nt(),
              d = c.measure();
            ar(f, d),
              d0(
                s,
                c.latestValues,
                (l = c.snapshot) === null || l === void 0 ? void 0 : l.layout,
                f
              );
          }
        }
        return Ur(this.latestValues) && d0(s, this.latestValues), s;
      }),
      (o.prototype.setTargetDelta = function (a) {
        (this.targetDelta = a), this.root.scheduleUpdateProjection();
      }),
      (o.prototype.setOptions = function (a) {
        var l;
        this.options = F(F(F({}, this.options), a), {
          crossfade: (l = a.crossfade) !== null && l !== void 0 ? l : !0,
        });
      }),
      (o.prototype.clearMeasurements = function () {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }),
      (o.prototype.resolveTargetDelta = function () {
        var a,
          l = this.options,
          s = l.layout,
          u = l.layoutId;
        !this.layout ||
          !(s || u) ||
          (!this.targetDelta &&
            !this.relativeTarget &&
            ((this.relativeParent = this.getClosestProjectingParent()),
            this.relativeParent &&
              this.relativeParent.layout &&
              ((this.relativeTarget = nt()),
              (this.relativeTargetOrigin = nt()),
              Io(
                this.relativeTargetOrigin,
                this.layout.actual,
                this.relativeParent.layout.actual
              ),
              ar(this.relativeTarget, this.relativeTargetOrigin))),
          !(!this.relativeTarget && !this.targetDelta) &&
            (this.target ||
              ((this.target = nt()), (this.targetWithTransforms = nt())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            ((a = this.relativeParent) === null || a === void 0
              ? void 0
              : a.target)
              ? f$(this.target, this.relativeTarget, this.relativeParent.target)
              : this.targetDelta
              ? (Boolean(this.resumingFrom)
                  ? (this.target = this.applyTransform(this.layout.actual))
                  : ar(this.target, this.layout.actual),
                sb(this.target, this.targetDelta))
              : ar(this.target, this.layout.actual),
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              (this.relativeParent = this.getClosestProjectingParent()),
              this.relativeParent &&
                Boolean(this.relativeParent.resumingFrom) ===
                  Boolean(this.resumingFrom) &&
                !this.relativeParent.options.layoutScroll &&
                this.relativeParent.target &&
                ((this.relativeTarget = nt()),
                (this.relativeTargetOrigin = nt()),
                Io(
                  this.relativeTargetOrigin,
                  this.target,
                  this.relativeParent.target
                ),
                ar(this.relativeTarget, this.relativeTargetOrigin)))));
      }),
      (o.prototype.getClosestProjectingParent = function () {
        if (!(!this.parent || Ur(this.parent.latestValues)))
          return (this.parent.relativeTarget || this.parent.targetDelta) &&
            this.parent.layout
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }),
      (o.prototype.calcProjection = function () {
        var a,
          l = this.options,
          s = l.layout,
          u = l.layoutId;
        if (
          ((this.isTreeAnimating = Boolean(
            ((a = this.parent) === null || a === void 0
              ? void 0
              : a.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !(!this.layout || !(s || u)))
        ) {
          var c = this.getLead();
          ar(this.layoutCorrected, this.layout.actual),
            s$(
              this.layoutCorrected,
              this.treeScale,
              this.path,
              Boolean(this.resumingFrom) || this !== c
            );
          var f = c.target;
          if (!!f) {
            this.projectionDelta ||
              ((this.projectionDelta = Lo()),
              (this.projectionDeltaWithTransform = Lo()));
            var d = this.treeScale.x,
              p = this.treeScale.y,
              h = this.projectionTransform;
            Oo(
              this.projectionDelta,
              this.layoutCorrected,
              f,
              this.latestValues
            ),
              (this.projectionTransform = m0(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== h ||
                this.treeScale.x !== d ||
                this.treeScale.y !== p) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', f));
          }
        }
      }),
      (o.prototype.hide = function () {
        this.isVisible = !1;
      }),
      (o.prototype.show = function () {
        this.isVisible = !0;
      }),
      (o.prototype.scheduleRender = function (a) {
        var l, s, u;
        a === void 0 && (a = !0),
          (s = (l = this.options).scheduleRender) === null ||
            s === void 0 ||
            s.call(l),
          a &&
            ((u = this.getStack()) === null ||
              u === void 0 ||
              u.scheduleRender()),
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
      }),
      (o.prototype.setAnimationOrigin = function (a, l) {
        var s = this,
          u;
        l === void 0 && (l = !1);
        var c = this.snapshot,
          f = (c == null ? void 0 : c.latestValues) || {},
          d = F({}, this.latestValues),
          p = Lo();
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !l);
        var h = nt(),
          x = c == null ? void 0 : c.isShared,
          w =
            (((u = this.getStack()) === null || u === void 0
              ? void 0
              : u.members.length) || 0) <= 1,
          m = Boolean(
            x && !w && this.options.crossfade === !0 && !this.path.some(I$)
          );
        (this.animationProgress = 0),
          (this.mixTargetDelta = function (v) {
            var g,
              S = v / 1e3;
            x0(p.x, a.x, S),
              x0(p.y, a.y, S),
              s.setTargetDelta(p),
              s.relativeTarget &&
                s.relativeTargetOrigin &&
                s.layout &&
                ((g = s.relativeParent) === null || g === void 0
                  ? void 0
                  : g.layout) &&
                (Io(h, s.layout.actual, s.relativeParent.layout.actual),
                O$(s.relativeTarget, s.relativeTargetOrigin, h, S)),
              x && ((s.animationValues = d), o$(d, f, s.latestValues, S, m, w)),
              s.root.scheduleUpdateProjection(),
              s.scheduleRender(),
              (s.animationProgress = S);
          }),
          this.mixTargetDelta(0);
      }),
      (o.prototype.startAnimation = function (a) {
        var l = this,
          s,
          u;
        this.notifyListeners('animationStart'),
          (s = this.currentAnimation) === null || s === void 0 || s.stop(),
          this.resumingFrom &&
            ((u = this.resumingFrom.currentAnimation) === null ||
              u === void 0 ||
              u.stop()),
          this.pendingAnimation &&
            (fa.update(this.pendingAnimation),
            (this.pendingAnimation = void 0)),
          (this.pendingAnimation = gr.update(function () {
            (zo.hasAnimatedSinceResize = !0),
              (l.currentAnimation = n$(
                0,
                g0,
                F(F({}, a), {
                  onUpdate: function (c) {
                    var f;
                    l.mixTargetDelta(c),
                      (f = a.onUpdate) === null || f === void 0 || f.call(a, c);
                  },
                  onComplete: function () {
                    var c;
                    (c = a.onComplete) === null || c === void 0 || c.call(a),
                      l.completeAnimation();
                  },
                })
              )),
              l.resumingFrom &&
                (l.resumingFrom.currentAnimation = l.currentAnimation),
              (l.pendingAnimation = void 0);
          }));
      }),
      (o.prototype.completeAnimation = function () {
        var a;
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0)),
          (a = this.getStack()) === null ||
            a === void 0 ||
            a.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners('animationComplete');
      }),
      (o.prototype.finishAnimation = function () {
        var a;
        this.currentAnimation &&
          ((a = this.mixTargetDelta) === null ||
            a === void 0 ||
            a.call(this, g0),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }),
      (o.prototype.applyTransformsToTarget = function () {
        var a = this.getLead(),
          l = a.targetWithTransforms,
          s = a.target,
          u = a.layout,
          c = a.latestValues;
        !l ||
          !s ||
          !u ||
          (ar(l, s),
          gi(l, c),
          Oo(this.projectionDeltaWithTransform, this.layoutCorrected, l, c));
      }),
      (o.prototype.registerSharedNode = function (a, l) {
        var s, u, c;
        this.sharedNodes.has(a) || this.sharedNodes.set(a, new v$());
        var f = this.sharedNodes.get(a);
        f.add(l),
          l.promote({
            transition:
              (s = l.options.initialPromotionConfig) === null || s === void 0
                ? void 0
                : s.transition,
            preserveFollowOpacity:
              (c =
                (u = l.options.initialPromotionConfig) === null || u === void 0
                  ? void 0
                  : u.shouldPreserveFollowOpacity) === null || c === void 0
                ? void 0
                : c.call(u, l),
          });
      }),
      (o.prototype.isLead = function () {
        var a = this.getStack();
        return a ? a.lead === this : !0;
      }),
      (o.prototype.getLead = function () {
        var a,
          l = this.options.layoutId;
        return l
          ? ((a = this.getStack()) === null || a === void 0
              ? void 0
              : a.lead) || this
          : this;
      }),
      (o.prototype.getPrevLead = function () {
        var a,
          l = this.options.layoutId;
        return l
          ? (a = this.getStack()) === null || a === void 0
            ? void 0
            : a.prevLead
          : void 0;
      }),
      (o.prototype.getStack = function () {
        var a = this.options.layoutId;
        if (a) return this.root.sharedNodes.get(a);
      }),
      (o.prototype.promote = function (a) {
        var l = a === void 0 ? {} : a,
          s = l.needsReset,
          u = l.transition,
          c = l.preserveFollowOpacity,
          f = this.getStack();
        f && f.promote(this, c),
          s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          u && this.setOptions({ transition: u });
      }),
      (o.prototype.relegate = function () {
        var a = this.getStack();
        return a ? a.relegate(this) : !1;
      }),
      (o.prototype.resetRotation = function () {
        var a = this.options.visualElement;
        if (!!a) {
          for (var l = !1, s = {}, u = 0; u < pd.length; u++) {
            var c = pd[u],
              f = 'rotate' + c;
            !a.getStaticValue(f) ||
              ((l = !0), (s[f] = a.getStaticValue(f)), a.setStaticValue(f, 0));
          }
          if (!!l) {
            a == null || a.syncRender();
            for (var f in s) a.setStaticValue(f, s[f]);
            a.scheduleRender();
          }
        }
      }),
      (o.prototype.getProjectionStyles = function (a) {
        var l, s, u, c, f, d;
        a === void 0 && (a = {});
        var p = {};
        if (!this.instance || this.isSVG) return p;
        if (this.isVisible) p.visibility = '';
        else return { visibility: 'hidden' };
        var h =
          (l = this.options.visualElement) === null || l === void 0
            ? void 0
            : l.getProps().transformTemplate;
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (p.opacity = ''),
            (p.pointerEvents = Hl(a.pointerEvents) || ''),
            (p.transform = h ? h(this.latestValues, '') : 'none'),
            p
          );
        var x = this.getLead();
        if (!this.projectionDelta || !this.layout || !x.target) {
          var w = {};
          return (
            this.options.layoutId &&
              ((w.opacity =
                (s = this.latestValues.opacity) !== null && s !== void 0
                  ? s
                  : 1),
              (w.pointerEvents = Hl(a.pointerEvents) || '')),
            this.hasProjected &&
              !Ur(this.latestValues) &&
              ((w.transform = h ? h({}, '') : 'none'),
              (this.hasProjected = !1)),
            w
          );
        }
        var m = x.animationValues || x.latestValues;
        this.applyTransformsToTarget(),
          (p.transform = m0(
            this.projectionDeltaWithTransform,
            this.treeScale,
            m
          )),
          h && (p.transform = h(m, p.transform));
        var v = this.projectionDelta,
          g = v.x,
          S = v.y;
        (p.transformOrigin = ''
          .concat(g.origin * 100, '% ')
          .concat(S.origin * 100, '% 0')),
          x.animationValues
            ? (p.opacity =
                x === this
                  ? (c =
                      (u = m.opacity) !== null && u !== void 0
                        ? u
                        : this.latestValues.opacity) !== null && c !== void 0
                    ? c
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : m.opacityExit)
            : (p.opacity =
                x === this
                  ? (f = m.opacity) !== null && f !== void 0
                    ? f
                    : ''
                  : (d = m.opacityExit) !== null && d !== void 0
                  ? d
                  : 0);
        for (var _ in Ms)
          if (m[_] !== void 0) {
            var P = Ms[_],
              T = P.correct,
              E = P.applyTo,
              R = T(m[_], x);
            if (E) for (var M = E.length, K = 0; K < M; K++) p[E[K]] = R;
            else p[_] = R;
          }
        return (
          this.options.layoutId &&
            (p.pointerEvents = x === this ? Hl(a.pointerEvents) || '' : 'none'),
          p
        );
      }),
      (o.prototype.clearSnapshot = function () {
        this.resumeFrom = this.snapshot = void 0;
      }),
      (o.prototype.resetTree = function () {
        this.root.nodes.forEach(function (a) {
          var l;
          return (l = a.currentAnimation) === null || l === void 0
            ? void 0
            : l.stop();
        }),
          this.root.nodes.forEach(y0),
          this.root.sharedNodes.clear();
      }),
      o
    );
  })();
}
function C$(e) {
  e.updateLayout();
}
function _$(e) {
  var t,
    r,
    n,
    i,
    o =
      (r =
        (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !==
        null && r !== void 0
        ? r
        : e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners('didUpdate')) {
    var a = e.layout,
      l = a.actual,
      s = a.measured;
    e.options.animationType === 'size'
      ? sr(function (v) {
          var g = o.isShared ? o.measured[v] : o.layout[v],
            S = Fr(g);
          (g.min = l[v].min), (g.max = g.min + S);
        })
      : e.options.animationType === 'position' &&
        sr(function (v) {
          var g = o.isShared ? o.measured[v] : o.layout[v],
            S = Fr(l[v]);
          g.max = g.min + S;
        });
    var u = Lo();
    Oo(u, l, o.layout);
    var c = Lo();
    o.isShared
      ? Oo(c, e.applyTransform(s, !0), o.measured)
      : Oo(c, l, o.layout);
    var f = !ub(u),
      d = !1;
    if (
      !e.resumeFrom &&
      ((e.relativeParent = e.getClosestProjectingParent()),
      e.relativeParent && !e.relativeParent.resumeFrom)
    ) {
      var p = e.relativeParent,
        h = p.snapshot,
        x = p.layout;
      if (h && x) {
        var w = nt();
        Io(w, o.layout, h.layout);
        var m = nt();
        Io(m, l, x.actual), cb(w, m) || (d = !0);
      }
    }
    e.notifyListeners('didUpdate', {
      layout: l,
      snapshot: o,
      delta: c,
      layoutDelta: u,
      hasLayoutChanged: f,
      hasRelativeTargetChanged: d,
    });
  } else
    e.isLead() &&
      ((i = (n = e.options).onExitComplete) === null ||
        i === void 0 ||
        i.call(n));
  e.options.transition = void 0;
}
function E$(e) {
  e.clearSnapshot();
}
function y0(e) {
  e.clearMeasurements();
}
function T$(e) {
  var t = e.options.visualElement;
  t != null &&
    t.getProps().onBeforeLayoutMeasure &&
    t.notifyBeforeLayoutMeasure(),
    e.resetTransform();
}
function P$(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function R$(e) {
  e.resolveTargetDelta();
}
function A$(e) {
  e.calcProjection();
}
function M$(e) {
  e.resetRotation();
}
function $$(e) {
  e.removeLeadSnapshot();
}
function x0(e, t, r) {
  (e.translate = Me(t.translate, 0, r)),
    (e.scale = Me(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function b0(e, t, r, n) {
  (e.min = Me(t.min, r.min, n)), (e.max = Me(t.max, r.max, n));
}
function O$(e, t, r, n) {
  b0(e.x, t.x, r.x, n), b0(e.y, t.y, r.y, n);
}
function I$(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var L$ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function z$(e, t) {
  for (var r = e.root, n = e.path.length - 1; n >= 0; n--)
    if (Boolean(e.path[n].instance)) {
      r = e.path[n];
      break;
    }
  var i = r && r !== e.root ? r.instance : document,
    o = i.querySelector('[data-projection-id="'.concat(t, '"]'));
  o && e.mount(o, !0);
}
function S0(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function w0(e) {
  S0(e.x), S0(e.y);
}
var N$ = 1;
function F$() {
  return Ta(function () {
    if (zo.hasEverUpdated) return N$++;
  });
}
var Qp = y.exports.createContext({}),
  pb = y.exports.createContext({});
function D$(e, t, r, n) {
  var i,
    o = t.layoutId,
    a = t.layout,
    l = t.drag,
    s = t.dragConstraints,
    u = t.layoutScroll,
    c = y.exports.useContext(pb);
  !n ||
    !r ||
    (r == null ? void 0 : r.projection) ||
    ((r.projection = new n(
      e,
      r.getLatestValues(),
      (i = r.parent) === null || i === void 0 ? void 0 : i.projection
    )),
    r.projection.setOptions({
      layoutId: o,
      layout: a,
      alwaysMeasureLayout: Boolean(l) || (s && vi(s)),
      visualElement: r,
      scheduleRender: function () {
        return r.scheduleRender();
      },
      animationType: typeof a == 'string' ? a : 'both',
      initialPromotionConfig: c,
      layoutScroll: u,
    }));
}
var B$ = (function (e) {
  xx(t, e);
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.getSnapshotBeforeUpdate = function () {
      return this.updateProps(), null;
    }),
    (t.prototype.componentDidUpdate = function () {}),
    (t.prototype.updateProps = function () {
      var r = this.props,
        n = r.visualElement,
        i = r.props;
      n && n.setProps(i);
    }),
    (t.prototype.render = function () {
      return this.props.children;
    }),
    t
  );
})(pr.Component);
function V$(e) {
  var t = e.preloadedFeatures,
    r = e.createVisualElement,
    n = e.projectionNodeConstructor,
    i = e.useRender,
    o = e.useVisualState,
    a = e.Component;
  t && uA(t);
  function l(s, u) {
    var c = j$(s);
    s = F(F({}, s), { layoutId: c });
    var f = y.exports.useContext(zp),
      d = null,
      p = wA(s),
      h = f.isStatic ? void 0 : F$(),
      x = o(s, f.isStatic);
    return (
      !f.isStatic &&
        Ki &&
        ((p.visualElement = gA(a, x, F(F({}, f), s), r)),
        D$(h, s, p.visualElement, n || ua.projectionNodeConstructor),
        (d = dA(s, p.visualElement, t))),
      y.exports.createElement(
        B$,
        { visualElement: p.visualElement, props: F(F({}, f), s) },
        d,
        y.exports.createElement(
          ku.Provider,
          { value: p },
          i(a, s, h, yA(x, p.visualElement, u), x, f.isStatic, p.visualElement)
        )
      )
    );
  }
  return y.exports.forwardRef(l);
}
function j$(e) {
  var t,
    r = e.layoutId,
    n = (t = y.exports.useContext(Qp)) === null || t === void 0 ? void 0 : t.id;
  return n && r !== void 0 ? n + '-' + r : r;
}
function W$(e) {
  function t(n, i) {
    return i === void 0 && (i = {}), V$(e(n, i));
  }
  if (typeof Proxy == 'undefined') return t;
  var r = new Map();
  return new Proxy(t, {
    get: function (n, i) {
      return r.has(i) || r.set(i, t(i)), r.get(i);
    },
  });
}
var H$ = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'svg',
  'switch',
  'symbol',
  'text',
  'tspan',
  'use',
  'view',
];
function Zp(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(H$.indexOf(e) > -1 || /[A-Z]/.test(e));
}
function hb(e, t) {
  var r = t.layout,
    n = t.layoutId;
  return (
    $a(e) || fb(e) || ((r || n !== void 0) && (!!Ms[e] || e === 'opacity'))
  );
}
var U$ = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ',
  transformPerspective: 'perspective',
};
function Y$(e, t, r, n) {
  var i = e.transform,
    o = e.transformKeys,
    a = t.enableHardwareAcceleration,
    l = a === void 0 ? !0 : a,
    s = t.allowTransformNone,
    u = s === void 0 ? !0 : s,
    c = '';
  o.sort(x$);
  for (var f = !1, d = o.length, p = 0; p < d; p++) {
    var h = o[p];
    (c += ''.concat(U$[h] || h, '(').concat(i[h], ') ')), h === 'z' && (f = !0);
  }
  return (
    !f && l ? (c += 'translateZ(0)') : (c = c.trim()),
    n ? (c = n(i, r ? '' : c)) : u && r && (c = 'none'),
    c
  );
}
function G$(e) {
  var t = e.originX,
    r = t === void 0 ? '50%' : t,
    n = e.originY,
    i = n === void 0 ? '50%' : n,
    o = e.originZ,
    a = o === void 0 ? 0 : o;
  return ''.concat(r, ' ').concat(i, ' ').concat(a);
}
function vb(e) {
  return e.startsWith('--');
}
var K$ = function (e, t) {
  return t && typeof e == 'number' ? t.transform(e) : e;
};
function qp(e, t, r, n) {
  var i,
    o = e.style,
    a = e.vars,
    l = e.transform,
    s = e.transformKeys,
    u = e.transformOrigin;
  s.length = 0;
  var c = !1,
    f = !1,
    d = !0;
  for (var p in t) {
    var h = t[p];
    if (vb(p)) {
      a[p] = h;
      continue;
    }
    var x = nb[p],
      w = K$(h, x);
    if ($a(p)) {
      if (((c = !0), (l[p] = w), s.push(p), !d)) continue;
      h !== ((i = x.default) !== null && i !== void 0 ? i : 0) && (d = !1);
    } else fb(p) ? ((u[p] = w), (f = !0)) : (o[p] = w);
  }
  c
    ? (o.transform = Y$(e, r, d, n))
    : n
    ? (o.transform = n({}, ''))
    : !t.transform && o.transform && (o.transform = 'none'),
    f && (o.transformOrigin = G$(u));
}
var Jp = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
  };
};
function mb(e, t, r) {
  for (var n in t) !Nr(t[n]) && !hb(n, r) && (e[n] = t[n]);
}
function X$(e, t, r) {
  var n = e.transformTemplate;
  return y.exports.useMemo(
    function () {
      var i = Jp();
      qp(i, t, { enableHardwareAcceleration: !r }, n);
      var o = i.vars,
        a = i.style;
      return F(F({}, o), a);
    },
    [t]
  );
}
function Q$(e, t, r) {
  var n = e.style || {},
    i = {};
  return (
    mb(i, n, e),
    Object.assign(i, X$(e, t, r)),
    e.transformValues && (i = e.transformValues(i)),
    i
  );
}
function Z$(e, t, r) {
  var n = {},
    i = Q$(e, t, r);
  return (
    Boolean(e.drag) &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
      (i.touchAction =
        e.drag === !0 ? 'none' : 'pan-'.concat(e.drag === 'x' ? 'y' : 'x'))),
    (n.style = i),
    n
  );
}
var q$ = new Set([
  'initial',
  'animate',
  'exit',
  'style',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'layout',
  'layoutId',
  'layoutDependency',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  'drag',
  'dragControls',
  'dragListener',
  'dragConstraints',
  'dragDirectionLock',
  'dragSnapToOrigin',
  '_dragX',
  '_dragY',
  'dragElastic',
  'dragMomentum',
  'dragPropagation',
  'dragTransition',
  'whileDrag',
  'onPan',
  'onPanStart',
  'onPanEnd',
  'onPanSessionStart',
  'onTap',
  'onTapStart',
  'onTapCancel',
  'onHoverStart',
  'onHoverEnd',
  'whileFocus',
  'whileTap',
  'whileHover',
  'whileInView',
  'onViewportEnter',
  'onViewportLeave',
  'viewport',
  'layoutScroll',
]);
function $s(e) {
  return q$.has(e);
}
var gb = function (e) {
  return !$s(e);
};
function J$(e) {
  !e ||
    (gb = function (t) {
      return t.startsWith('on') ? !$s(t) : e(t);
    });
}
try {
  J$(require('@emotion/is-prop-valid').default);
} catch {}
function e8(e, t, r) {
  var n = {};
  for (var i in e)
    (gb(i) ||
      (r === !0 && $s(i)) ||
      (!t && !$s(i)) ||
      (e.draggable && i.startsWith('onDrag'))) &&
      (n[i] = e[i]);
  return n;
}
function k0(e, t, r) {
  return typeof e == 'string' ? e : q.transform(t + r * e);
}
function t8(e, t, r) {
  var n = k0(t, e.x, e.width),
    i = k0(r, e.y, e.height);
  return ''.concat(n, ' ').concat(i);
}
var r8 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  n8 = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function i8(e, t, r, n, i) {
  r === void 0 && (r = 1),
    n === void 0 && (n = 0),
    i === void 0 && (i = !0),
    (e.pathLength = 1);
  var o = i ? r8 : n8;
  e[o.offset] = q.transform(-n);
  var a = q.transform(t),
    l = q.transform(r);
  e[o.array] = ''.concat(a, ' ').concat(l);
}
function eh(e, t, r, n) {
  var i = t.attrX,
    o = t.attrY,
    a = t.originX,
    l = t.originY,
    s = t.pathLength,
    u = t.pathSpacing,
    c = u === void 0 ? 1 : u,
    f = t.pathOffset,
    d = f === void 0 ? 0 : f,
    p = br(t, [
      'attrX',
      'attrY',
      'originX',
      'originY',
      'pathLength',
      'pathSpacing',
      'pathOffset',
    ]);
  qp(e, p, r, n), (e.attrs = e.style), (e.style = {});
  var h = e.attrs,
    x = e.style,
    w = e.dimensions;
  h.transform && (w && (x.transform = h.transform), delete h.transform),
    w &&
      (a !== void 0 || l !== void 0 || x.transform) &&
      (x.transformOrigin = t8(
        w,
        a !== void 0 ? a : 0.5,
        l !== void 0 ? l : 0.5
      )),
    i !== void 0 && (h.x = i),
    o !== void 0 && (h.y = o),
    s !== void 0 && i8(h, s, c, d, !1);
}
var yb = function () {
  return F(F({}, Jp()), { attrs: {} });
};
function o8(e, t) {
  var r = y.exports.useMemo(
    function () {
      var i = yb();
      return (
        eh(i, t, { enableHardwareAcceleration: !1 }, e.transformTemplate),
        F(F({}, i.attrs), { style: F({}, i.style) })
      );
    },
    [t]
  );
  if (e.style) {
    var n = {};
    mb(n, e.style, e), (r.style = F(F({}, n), r.style));
  }
  return r;
}
function a8(e) {
  e === void 0 && (e = !1);
  var t = function (r, n, i, o, a, l) {
    var s = a.latestValues,
      u = Zp(r) ? o8 : Z$,
      c = u(n, s, l),
      f = e8(n, typeof r == 'string', e),
      d = F(F(F({}, f), c), { ref: o });
    return i && (d['data-projection-id'] = i), y.exports.createElement(r, d);
  };
  return t;
}
var l8 = /([a-z])([A-Z])/g,
  s8 = '$1-$2',
  xb = function (e) {
    return e.replace(l8, s8).toLowerCase();
  };
function bb(e, t, r, n) {
  var i = t.style,
    o = t.vars;
  Object.assign(e.style, i, n && n.getProjectionStyles(r));
  for (var a in o) e.style.setProperty(a, o[a]);
}
var Sb = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
]);
function wb(e, t, r, n) {
  bb(e, t, void 0, n);
  for (var i in t.attrs) e.setAttribute(Sb.has(i) ? i : xb(i), t.attrs[i]);
}
function th(e) {
  var t = e.style,
    r = {};
  for (var n in t) (Nr(t[n]) || hb(n, e)) && (r[n] = t[n]);
  return r;
}
function kb(e) {
  var t = th(e);
  for (var r in e)
    if (Nr(e[r])) {
      var n = r === 'x' || r === 'y' ? 'attr' + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function rh(e) {
  return typeof e == 'object' && typeof e.start == 'function';
}
function C0(e, t, r, n) {
  var i = e.scrapeMotionValuesFromProps,
    o = e.createRenderState,
    a = e.onMount,
    l = { latestValues: u8(t, r, n, i), renderState: o() };
  return (
    a &&
      (l.mount = function (s) {
        return a(t, s, l);
      }),
    l
  );
}
var Cb = function (e) {
  return function (t, r) {
    var n = y.exports.useContext(ku),
      i = y.exports.useContext(Gi);
    return r
      ? C0(e, t, n, i)
      : Ta(function () {
          return C0(e, t, n, i);
        });
  };
};
function u8(e, t, r, n) {
  var i = {},
    o = (r == null ? void 0 : r.initial) === !1,
    a = n(e);
  for (var l in a) i[l] = Hl(a[l]);
  var s = e.initial,
    u = e.animate,
    c = _u(e),
    f = _x(e);
  t &&
    f &&
    !c &&
    e.inherit !== !1 &&
    (s != null || (s = t.initial), u != null || (u = t.animate));
  var d = o || s === !1,
    p = d ? u : s;
  if (p && typeof p != 'boolean' && !rh(p)) {
    var h = Array.isArray(p) ? p : [p];
    h.forEach(function (x) {
      var w = Cx(e, x);
      if (!!w) {
        var m = w.transitionEnd;
        w.transition;
        var v = br(w, ['transitionEnd', 'transition']);
        for (var g in v) {
          var S = v[g];
          if (Array.isArray(S)) {
            var _ = d ? S.length - 1 : 0;
            S = S[_];
          }
          S !== null && (i[g] = S);
        }
        for (var g in m) i[g] = m[g];
      }
    });
  }
  return i;
}
var c8 = {
    useVisualState: Cb({
      scrapeMotionValuesFromProps: kb,
      createRenderState: yb,
      onMount: function (e, t, r) {
        var n = r.renderState,
          i = r.latestValues;
        try {
          n.dimensions =
            typeof t.getBBox == 'function'
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        eh(n, i, { enableHardwareAcceleration: !1 }, e.transformTemplate),
          wb(t, n);
      },
    }),
  },
  f8 = {
    useVisualState: Cb({
      scrapeMotionValuesFromProps: th,
      createRenderState: Jp,
    }),
  };
function d8(e, t, r, n, i) {
  var o = t.forwardMotionProps,
    a = o === void 0 ? !1 : o,
    l = Zp(e) ? c8 : f8;
  return F(F({}, l), {
    preloadedFeatures: r,
    useRender: a8(a),
    createVisualElement: n,
    projectionNodeConstructor: i,
    Component: e,
  });
}
var ye;
(function (e) {
  (e.Animate = 'animate'),
    (e.Hover = 'whileHover'),
    (e.Tap = 'whileTap'),
    (e.Drag = 'whileDrag'),
    (e.Focus = 'whileFocus'),
    (e.InView = 'whileInView'),
    (e.Exit = 'exit');
})(ye || (ye = {}));
function Au(e, t, r, n) {
  return (
    n === void 0 && (n = { passive: !0 }),
    e.addEventListener(t, r, n),
    function () {
      return e.removeEventListener(t, r);
    }
  );
}
function hd(e, t, r, n) {
  y.exports.useEffect(
    function () {
      var i = e.current;
      if (r && i) return Au(i, t, r, n);
    },
    [e, t, r, n]
  );
}
function p8(e) {
  var t = e.whileFocus,
    r = e.visualElement,
    n = function () {
      var o;
      (o = r.animationState) === null ||
        o === void 0 ||
        o.setActive(ye.Focus, !0);
    },
    i = function () {
      var o;
      (o = r.animationState) === null ||
        o === void 0 ||
        o.setActive(ye.Focus, !1);
    };
  hd(r, 'focus', t ? n : void 0), hd(r, 'blur', t ? i : void 0);
}
function _b(e) {
  return typeof PointerEvent != 'undefined' && e instanceof PointerEvent
    ? e.pointerType === 'mouse'
    : e instanceof MouseEvent;
}
function Eb(e) {
  var t = !!e.touches;
  return t;
}
function h8(e) {
  return function (t) {
    var r = t instanceof MouseEvent,
      n = !r || (r && t.button === 0);
    n && e(t);
  };
}
var v8 = { pageX: 0, pageY: 0 };
function m8(e, t) {
  t === void 0 && (t = 'page');
  var r = e.touches[0] || e.changedTouches[0],
    n = r || v8;
  return { x: n[t + 'X'], y: n[t + 'Y'] };
}
function g8(e, t) {
  return t === void 0 && (t = 'page'), { x: e[t + 'X'], y: e[t + 'Y'] };
}
function nh(e, t) {
  return t === void 0 && (t = 'page'), { point: Eb(e) ? m8(e, t) : g8(e, t) };
}
var Tb = function (e, t) {
    t === void 0 && (t = !1);
    var r = function (n) {
      return e(n, nh(n));
    };
    return t ? h8(r) : r;
  },
  y8 = function () {
    return Ki && window.onpointerdown === null;
  },
  x8 = function () {
    return Ki && window.ontouchstart === null;
  },
  b8 = function () {
    return Ki && window.onmousedown === null;
  },
  S8 = {
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointercancel: 'mousecancel',
    pointerover: 'mouseover',
    pointerout: 'mouseout',
    pointerenter: 'mouseenter',
    pointerleave: 'mouseleave',
  },
  w8 = {
    pointerdown: 'touchstart',
    pointermove: 'touchmove',
    pointerup: 'touchend',
    pointercancel: 'touchcancel',
  };
function Pb(e) {
  return y8() ? e : x8() ? w8[e] : b8() ? S8[e] : e;
}
function Ri(e, t, r, n) {
  return Au(e, Pb(t), Tb(r, t === 'pointerdown'), n);
}
function Os(e, t, r, n) {
  return hd(e, Pb(t), r && Tb(r, t === 'pointerdown'), n);
}
function Rb(e) {
  var t = null;
  return function () {
    var r = function () {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
var _0 = Rb('dragHorizontal'),
  E0 = Rb('dragVertical');
function Ab(e) {
  var t = !1;
  if (e === 'y') t = E0();
  else if (e === 'x') t = _0();
  else {
    var r = _0(),
      n = E0();
    r && n
      ? (t = function () {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function Mb() {
  var e = Ab(!0);
  return e ? (e(), !1) : !0;
}
function T0(e, t, r) {
  return function (n, i) {
    var o;
    !_b(n) ||
      Mb() ||
      ((o = e.animationState) === null ||
        o === void 0 ||
        o.setActive(ye.Hover, t),
      r == null || r(n, i));
  };
}
function k8(e) {
  var t = e.onHoverStart,
    r = e.onHoverEnd,
    n = e.whileHover,
    i = e.visualElement;
  Os(i, 'pointerenter', t || n ? T0(i, !0, t) : void 0, { passive: !t }),
    Os(i, 'pointerleave', r || n ? T0(i, !1, r) : void 0, { passive: !r });
}
var $b = function (e, t) {
  return t ? (e === t ? !0 : $b(e, t.parentElement)) : !1;
};
function ih(e) {
  return y.exports.useEffect(function () {
    return function () {
      return e();
    };
  }, []);
}
function C8(e) {
  var t = e.onTap,
    r = e.onTapStart,
    n = e.onTapCancel,
    i = e.whileTap,
    o = e.visualElement,
    a = t || r || n || i,
    l = y.exports.useRef(!1),
    s = y.exports.useRef(null),
    u = { passive: !(r || t || n || h) };
  function c() {
    var x;
    (x = s.current) === null || x === void 0 || x.call(s), (s.current = null);
  }
  function f() {
    var x;
    return (
      c(),
      (l.current = !1),
      (x = o.animationState) === null ||
        x === void 0 ||
        x.setActive(ye.Tap, !1),
      !Mb()
    );
  }
  function d(x, w) {
    !f() ||
      ($b(o.getInstance(), x.target)
        ? t == null || t(x, w)
        : n == null || n(x, w));
  }
  function p(x, w) {
    !f() || n == null || n(x, w);
  }
  function h(x, w) {
    var m;
    c(),
      !l.current &&
        ((l.current = !0),
        (s.current = Tu(
          Ri(window, 'pointerup', d, u),
          Ri(window, 'pointercancel', p, u)
        )),
        (m = o.animationState) === null ||
          m === void 0 ||
          m.setActive(ye.Tap, !0),
        r == null || r(x, w));
  }
  Os(o, 'pointerdown', a ? h : void 0, u), ih(c);
}
var P0 = new Set();
function _8(e, t, r) {
  e || P0.has(t) || (console.warn(t), r && console.warn(r), P0.add(t));
}
var vd = new WeakMap(),
  zc = new WeakMap(),
  E8 = function (e) {
    var t;
    (t = vd.get(e.target)) === null || t === void 0 || t(e);
  },
  T8 = function (e) {
    e.forEach(E8);
  };
function P8(e) {
  var t = e.root,
    r = br(e, ['root']),
    n = t || document;
  zc.has(n) || zc.set(n, {});
  var i = zc.get(n),
    o = JSON.stringify(r);
  return i[o] || (i[o] = new IntersectionObserver(T8, F({ root: t }, r))), i[o];
}
function R8(e, t, r) {
  var n = P8(t);
  return (
    vd.set(e, r),
    n.observe(e),
    function () {
      vd.delete(e), n.unobserve(e);
    }
  );
}
function A8(e) {
  var t = e.visualElement,
    r = e.whileInView,
    n = e.onViewportEnter,
    i = e.onViewportLeave,
    o = e.viewport,
    a = o === void 0 ? {} : o,
    l = y.exports.useRef({ hasEnteredView: !1, isInView: !1 }),
    s = Boolean(r || n || i);
  a.once && l.current.hasEnteredView && (s = !1);
  var u = typeof IntersectionObserver == 'undefined' ? O8 : $8;
  u(s, l.current, t, a);
}
var M8 = { some: 0, all: 1 };
function $8(e, t, r, n) {
  var i = n.root,
    o = n.margin,
    a = n.amount,
    l = a === void 0 ? 'some' : a,
    s = n.once;
  y.exports.useEffect(
    function () {
      if (!!e) {
        var u = {
            root: i == null ? void 0 : i.current,
            rootMargin: o,
            threshold: typeof l == 'number' ? l : M8[l],
          },
          c = function (f) {
            var d,
              p = f.isIntersecting;
            if (
              t.isInView !== p &&
              ((t.isInView = p), !(s && !p && t.hasEnteredView))
            ) {
              p && (t.hasEnteredView = !0),
                (d = r.animationState) === null ||
                  d === void 0 ||
                  d.setActive(ye.InView, p);
              var h = r.getProps(),
                x = p ? h.onViewportEnter : h.onViewportLeave;
              x == null || x(f);
            }
          };
        return R8(r.getInstance(), u, c);
      }
    },
    [e, i, o, l]
  );
}
function O8(e, t, r, n) {
  var i = n.fallback,
    o = i === void 0 ? !0 : i;
  y.exports.useEffect(
    function () {
      !e ||
        !o ||
        (Lp !== 'production' &&
          _8(
            !1,
            'IntersectionObserver not available on this device. whileInView animations will trigger on mount.'
          ),
        requestAnimationFrame(function () {
          var a;
          t.hasEnteredView = !0;
          var l = r.getProps().onViewportEnter;
          l == null || l(null),
            (a = r.animationState) === null ||
              a === void 0 ||
              a.setActive(ye.InView, !0);
        }));
    },
    [e]
  );
}
var en = function (e) {
    return function (t) {
      return e(t), null;
    };
  },
  I8 = { inView: en(A8), tap: en(C8), focus: en(p8), hover: en(k8) },
  L8 = 0,
  z8 = function () {
    return L8++;
  },
  Ob = function () {
    return Ta(z8);
  };
function Ib() {
  var e = y.exports.useContext(Gi);
  if (e === null) return [!0, null];
  var t = e.isPresent,
    r = e.onExitComplete,
    n = e.register,
    i = Ob();
  y.exports.useEffect(function () {
    return n(i);
  }, []);
  var o = function () {
    return r == null ? void 0 : r(i);
  };
  return !t && r ? [!1, o] : [!0];
}
function N8() {
  return F8(y.exports.useContext(Gi));
}
function F8(e) {
  return e === null ? !0 : e.isPresent;
}
function Lb(e, t) {
  if (!Array.isArray(t)) return !1;
  var r = t.length;
  if (r !== e.length) return !1;
  for (var n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
var D8 = function (e) {
    return /^\-?\d*\.?\d+$/.test(e);
  },
  B8 = function (e) {
    return /^0[^.\s]+$/.test(e);
  },
  zb = function (e) {
    return function (t) {
      return t.test(e);
    };
  },
  V8 = {
    test: function (e) {
      return e === 'auto';
    },
    parse: function (e) {
      return e;
    },
  },
  Nb = [Kn, q, yr, Hr, DA, FA, V8],
  so = function (e) {
    return Nb.find(zb(e));
  },
  j8 = tr(tr([], $e(Nb), !1), [at, zr], !1),
  W8 = function (e) {
    return j8.find(zb(e));
  };
function H8(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Vi(r));
}
function U8(e, t) {
  var r = Cu(e, t),
    n = r ? e.makeTargetAnimatable(r, !1) : {},
    i = n.transitionEnd,
    o = i === void 0 ? {} : i;
  n.transition;
  var a = br(n, ['transitionEnd', 'transition']);
  a = F(F({}, a), o);
  for (var l in a) {
    var s = ib(a[l]);
    H8(e, l, s);
  }
}
function Y8(e, t, r) {
  var n,
    i,
    o,
    a,
    l = Object.keys(t).filter(function (p) {
      return !e.hasValue(p);
    }),
    s = l.length;
  if (!!s)
    for (var u = 0; u < s; u++) {
      var c = l[u],
        f = t[c],
        d = null;
      Array.isArray(f) && (d = f[0]),
        d === null &&
          (d =
            (i = (n = r[c]) !== null && n !== void 0 ? n : e.readValue(c)) !==
              null && i !== void 0
              ? i
              : t[c]),
        d != null &&
          (typeof d == 'string' && (D8(d) || B8(d))
            ? (d = parseFloat(d))
            : !W8(d) && zr.test(f) && (d = Gp(c, f)),
          e.addValue(c, Vi(d)),
          ((o = (a = r)[c]) !== null && o !== void 0) || (a[c] = d),
          e.setBaseTarget(c, d));
    }
}
function G8(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function K8(e, t, r) {
  var n,
    i,
    o = {};
  for (var a in e)
    o[a] =
      (n = G8(a, t)) !== null && n !== void 0
        ? n
        : (i = r.getValue(a)) === null || i === void 0
        ? void 0
        : i.get();
  return o;
}
function X8(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart(t);
  var n;
  if (Array.isArray(t)) {
    var i = t.map(function (a) {
      return md(e, a, r);
    });
    n = Promise.all(i);
  } else if (typeof t == 'string') n = md(e, t, r);
  else {
    var o = typeof t == 'function' ? Cu(e, t, r.custom) : t;
    n = Fb(e, o, r);
  }
  return n.then(function () {
    return e.notifyAnimationComplete(t);
  });
}
function md(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var i = Cu(e, t, r.custom),
    o = (i || {}).transition,
    a = o === void 0 ? e.getDefaultTransition() || {} : o;
  r.transitionOverride && (a = r.transitionOverride);
  var l = i
      ? function () {
          return Fb(e, i, r);
        }
      : function () {
          return Promise.resolve();
        },
    s =
      !((n = e.variantChildren) === null || n === void 0) && n.size
        ? function (p) {
            p === void 0 && (p = 0);
            var h = a.delayChildren,
              x = h === void 0 ? 0 : h,
              w = a.staggerChildren,
              m = a.staggerDirection;
            return Q8(e, t, x + p, w, m, r);
          }
        : function () {
            return Promise.resolve();
          },
    u = a.when;
  if (u) {
    var c = $e(u === 'beforeChildren' ? [l, s] : [s, l], 2),
      f = c[0],
      d = c[1];
    return f().then(d);
  } else return Promise.all([l(), s(r.delay)]);
}
function Fb(e, t, r) {
  var n,
    i = r === void 0 ? {} : r,
    o = i.delay,
    a = o === void 0 ? 0 : o,
    l = i.transitionOverride,
    s = i.type,
    u = e.makeTargetAnimatable(t),
    c = u.transition,
    f = c === void 0 ? e.getDefaultTransition() : c,
    d = u.transitionEnd,
    p = br(u, ['transition', 'transitionEnd']);
  l && (f = l);
  var h = [],
    x =
      s &&
      ((n = e.animationState) === null || n === void 0
        ? void 0
        : n.getState()[s]);
  for (var w in p) {
    var m = e.getValue(w),
      v = p[w];
    if (!(!m || v === void 0 || (x && q8(x, w)))) {
      var g = F({ delay: a }, f);
      e.shouldReduceMotion &&
        $a(w) &&
        (g = F(F({}, g), { type: !1, delay: 0 }));
      var S = Xp(w, m, v, g);
      h.push(S);
    }
  }
  return Promise.all(h).then(function () {
    d && U8(e, d);
  });
}
function Q8(e, t, r, n, i, o) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), i === void 0 && (i = 1);
  var a = [],
    l = (e.variantChildren.size - 1) * n,
    s =
      i === 1
        ? function (u) {
            return u === void 0 && (u = 0), u * n;
          }
        : function (u) {
            return u === void 0 && (u = 0), l - u * n;
          };
  return (
    Array.from(e.variantChildren)
      .sort(Z8)
      .forEach(function (u, c) {
        a.push(
          md(u, t, F(F({}, o), { delay: r + s(c) })).then(function () {
            return u.notifyAnimationComplete(t);
          })
        );
      }),
    Promise.all(a)
  );
}
function Z8(e, t) {
  return e.sortNodePosition(t);
}
function q8(e, t) {
  var r = e.protectedKeys,
    n = e.needsAnimating,
    i = r.hasOwnProperty(t) && n[t] !== !0;
  return (n[t] = !1), i;
}
var oh = [ye.Animate, ye.InView, ye.Focus, ye.Hover, ye.Tap, ye.Drag, ye.Exit],
  J8 = tr([], $e(oh), !1).reverse(),
  eO = oh.length;
function tO(e) {
  return function (t) {
    return Promise.all(
      t.map(function (r) {
        var n = r.animation,
          i = r.options;
        return X8(e, n, i);
      })
    );
  };
}
function rO(e) {
  var t = tO(e),
    r = iO(),
    n = {},
    i = !0,
    o = function (c, f) {
      var d = Cu(e, f);
      if (d) {
        d.transition;
        var p = d.transitionEnd,
          h = br(d, ['transition', 'transitionEnd']);
        c = F(F(F({}, c), h), p);
      }
      return c;
    };
  function a(c) {
    return n[c] !== void 0;
  }
  function l(c) {
    t = c(e);
  }
  function s(c, f) {
    for (
      var d,
        p = e.getProps(),
        h = e.getVariantContext(!0) || {},
        x = [],
        w = new Set(),
        m = {},
        v = 1 / 0,
        g = function (T) {
          var E = J8[T],
            R = r[E],
            M = (d = p[E]) !== null && d !== void 0 ? d : h[E],
            K = Zt(M),
            J = E === f ? R.isActive : null;
          J === !1 && (v = T);
          var B = M === h[E] && M !== p[E] && K;
          if (
            (B && i && e.manuallyAnimateOnMount && (B = !1),
            (R.protectedKeys = F({}, m)),
            (!R.isActive && J === null) ||
              (!M && !R.prevProp) ||
              rh(M) ||
              typeof M == 'boolean')
          )
            return 'continue';
          var N = nO(R.prevProp, M),
            I = N || (E === f && R.isActive && !B && K) || (T > v && K),
            X = Array.isArray(M) ? M : [M],
            V = X.reduce(o, {});
          J === !1 && (V = {});
          var $ = R.prevResolvedValues,
            z = $ === void 0 ? {} : $,
            W = F(F({}, z), V),
            Z = function (G) {
              (I = !0), w.delete(G), (R.needsAnimating[G] = !0);
            };
          for (var Q in W) {
            var j = V[Q],
              D = z[Q];
            m.hasOwnProperty(Q) ||
              (j !== D
                ? va(j) && va(D)
                  ? !Lb(j, D) || N
                    ? Z(Q)
                    : (R.protectedKeys[Q] = !0)
                  : j !== void 0
                  ? Z(Q)
                  : w.add(Q)
                : j !== void 0 && w.has(Q)
                ? Z(Q)
                : (R.protectedKeys[Q] = !0));
          }
          (R.prevProp = M),
            (R.prevResolvedValues = V),
            R.isActive && (m = F(F({}, m), V)),
            i && e.blockInitialAnimation && (I = !1),
            I &&
              !B &&
              x.push.apply(
                x,
                tr(
                  [],
                  $e(
                    X.map(function (G) {
                      return { animation: G, options: F({ type: E }, c) };
                    })
                  ),
                  !1
                )
              );
        },
        S = 0;
      S < eO;
      S++
    )
      g(S);
    if (((n = F({}, m)), w.size)) {
      var _ = {};
      w.forEach(function (T) {
        var E = e.getBaseTarget(T);
        E !== void 0 && (_[T] = E);
      }),
        x.push({ animation: _ });
    }
    var P = Boolean(x.length);
    return (
      i && p.initial === !1 && !e.manuallyAnimateOnMount && (P = !1),
      (i = !1),
      P ? t(x) : Promise.resolve()
    );
  }
  function u(c, f, d) {
    var p;
    if (r[c].isActive === f) return Promise.resolve();
    (p = e.variantChildren) === null ||
      p === void 0 ||
      p.forEach(function (w) {
        var m;
        return (m = w.animationState) === null || m === void 0
          ? void 0
          : m.setActive(c, f);
      }),
      (r[c].isActive = f);
    var h = s(d, c);
    for (var x in r) r[x].protectedKeys = {};
    return h;
  }
  return {
    isAnimated: a,
    animateChanges: s,
    setActive: u,
    setAnimateFunction: l,
    getState: function () {
      return r;
    },
  };
}
function nO(e, t) {
  return typeof t == 'string' ? t !== e : kx(t) ? !Lb(t, e) : !1;
}
function Cn(e) {
  return (
    e === void 0 && (e = !1),
    {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    }
  );
}
function iO() {
  var e;
  return (
    (e = {}),
    (e[ye.Animate] = Cn(!0)),
    (e[ye.InView] = Cn()),
    (e[ye.Hover] = Cn()),
    (e[ye.Tap] = Cn()),
    (e[ye.Drag] = Cn()),
    (e[ye.Focus] = Cn()),
    (e[ye.Exit] = Cn()),
    e
  );
}
var oO = {
    animation: en(function (e) {
      var t = e.visualElement,
        r = e.animate;
      t.animationState || (t.animationState = rO(t)),
        rh(r) &&
          y.exports.useEffect(
            function () {
              return r.subscribe(t);
            },
            [r]
          );
    }),
    exit: en(function (e) {
      var t = e.custom,
        r = e.visualElement,
        n = $e(Ib(), 2),
        i = n[0],
        o = n[1],
        a = y.exports.useContext(Gi);
      y.exports.useEffect(
        function () {
          var l, s;
          r.isPresent = i;
          var u =
            (l = r.animationState) === null || l === void 0
              ? void 0
              : l.setActive(ye.Exit, !i, {
                  custom:
                    (s = a == null ? void 0 : a.custom) !== null && s !== void 0
                      ? s
                      : t,
                });
          !i && (u == null || u.then(o));
        },
        [i]
      );
    }),
  },
  Db = (function () {
    function e(t, r, n) {
      var i = this,
        o = n === void 0 ? {} : n,
        a = o.transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function () {
          if (!!(i.lastMoveEvent && i.lastMoveEventInfo)) {
            var d = Fc(i.lastMoveEventInfo, i.history),
              p = i.startEvent !== null,
              h = qx(d.offset, { x: 0, y: 0 }) >= 3;
            if (!(!p && !h)) {
              var x = d.point,
                w = nd().timestamp;
              i.history.push(F(F({}, x), { timestamp: w }));
              var m = i.handlers,
                v = m.onStart,
                g = m.onMove;
              p ||
                (v && v(i.lastMoveEvent, d), (i.startEvent = i.lastMoveEvent)),
                g && g(i.lastMoveEvent, d);
            }
          }
        }),
        (this.handlePointerMove = function (d, p) {
          if (
            ((i.lastMoveEvent = d),
            (i.lastMoveEventInfo = Nc(p, i.transformPagePoint)),
            _b(d) && d.buttons === 0)
          ) {
            i.handlePointerUp(d, p);
            return;
          }
          gr.update(i.updatePoint, !0);
        }),
        (this.handlePointerUp = function (d, p) {
          i.end();
          var h = i.handlers,
            x = h.onEnd,
            w = h.onSessionEnd,
            m = Fc(Nc(p, i.transformPagePoint), i.history);
          i.startEvent && x && x(d, m), w && w(d, m);
        }),
        !(Eb(t) && t.touches.length > 1))
      ) {
        (this.handlers = r), (this.transformPagePoint = a);
        var l = nh(t),
          s = Nc(l, this.transformPagePoint),
          u = s.point,
          c = nd().timestamp;
        this.history = [F(F({}, u), { timestamp: c })];
        var f = r.onSessionStart;
        f && f(t, Fc(s, this.history)),
          (this.removeListeners = Tu(
            Ri(window, 'pointermove', this.handlePointerMove),
            Ri(window, 'pointerup', this.handlePointerUp),
            Ri(window, 'pointercancel', this.handlePointerUp)
          ));
      }
    }
    return (
      (e.prototype.updateHandlers = function (t) {
        this.handlers = t;
      }),
      (e.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          fa.update(this.updatePoint);
      }),
      e
    );
  })();
function Nc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function R0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Fc(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: R0(r, Bb(t)),
    offset: R0(r, aO(t)),
    velocity: lO(t, 0.1),
  };
}
function aO(e) {
  return e[0];
}
function Bb(e) {
  return e[e.length - 1];
}
function lO(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  for (
    var r = e.length - 1, n = null, i = Bb(e);
    r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > Rs(t)));

  )
    r--;
  if (!n) return { x: 0, y: 0 };
  var o = (i.timestamp - n.timestamp) / 1e3;
  if (o === 0) return { x: 0, y: 0 };
  var a = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function sO(e, t, r) {
  var n = t.min,
    i = t.max;
  return (
    n !== void 0 && e < n
      ? (e = r ? Me(n, e, r.min) : Math.max(e, n))
      : i !== void 0 && e > i && (e = r ? Me(i, e, r.max) : Math.min(e, i)),
    e
  );
}
function A0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function uO(e, t) {
  var r = t.top,
    n = t.left,
    i = t.bottom,
    o = t.right;
  return { x: A0(e.x, n, o), y: A0(e.y, r, i) };
}
function M0(e, t) {
  var r,
    n = t.min - e.min,
    i = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min &&
      ((r = $e([i, n], 2)), (n = r[0]), (i = r[1])),
    { min: n, max: i }
  );
}
function cO(e, t) {
  return { x: M0(e.x, t.x), y: M0(e.y, t.y) };
}
function fO(e, t) {
  var r = 0.5,
    n = Fr(e),
    i = Fr(t);
  return (
    i > n
      ? (r = da(t.min, t.max - n, e.min))
      : n > i && (r = da(e.min, e.max - i, t.min)),
    Es(0, 1, r)
  );
}
function dO(e, t) {
  var r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
var gd = 0.35;
function pO(e) {
  return (
    e === void 0 && (e = gd),
    e === !1 ? (e = 0) : e === !0 && (e = gd),
    { x: $0(e, 'left', 'right'), y: $0(e, 'top', 'bottom') }
  );
}
function $0(e, t, r) {
  return { min: O0(e, t), max: O0(e, r) };
}
function O0(e, t) {
  var r;
  return typeof e == 'number' ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
function Vb(e) {
  var t = e.top,
    r = e.left,
    n = e.right,
    i = e.bottom;
  return { x: { min: r, max: n }, y: { min: t, max: i } };
}
function hO(e) {
  var t = e.x,
    r = e.y;
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function vO(e, t) {
  if (!t) return e;
  var r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function jb(e, t) {
  return Vb(vO(e.getBoundingClientRect(), t));
}
function mO(e, t, r) {
  var n = jb(e, r),
    i = t.scroll;
  return i && (mi(n.x, i.x), mi(n.y, i.y)), n;
}
var gO = new WeakMap(),
  yO = (function () {
    function e(t) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = nt()),
        (this.visualElement = t);
    }
    return (
      (e.prototype.start = function (t, r) {
        var n = this,
          i = r === void 0 ? {} : r,
          o = i.snapToCursor,
          a = o === void 0 ? !1 : o;
        if (this.visualElement.isPresent !== !1) {
          var l = function (f) {
              n.stopAnimation(), a && n.snapToCursor(nh(f, 'page').point);
            },
            s = function (f, d) {
              var p,
                h = n.getProps(),
                x = h.drag,
                w = h.dragPropagation,
                m = h.onDragStart;
              (x &&
                !w &&
                (n.openGlobalLock && n.openGlobalLock(),
                (n.openGlobalLock = Ab(x)),
                !n.openGlobalLock)) ||
                ((n.isDragging = !0),
                (n.currentDirection = null),
                n.resolveConstraints(),
                n.visualElement.projection &&
                  ((n.visualElement.projection.isAnimationBlocked = !0),
                  (n.visualElement.projection.target = void 0)),
                sr(function (v) {
                  var g,
                    S,
                    _ = n.getAxisMotionValue(v).get() || 0;
                  if (yr.test(_)) {
                    var P =
                      (S =
                        (g = n.visualElement.projection) === null ||
                        g === void 0
                          ? void 0
                          : g.layout) === null || S === void 0
                        ? void 0
                        : S.actual[v];
                    if (P) {
                      var T = Fr(P);
                      _ = T * (parseFloat(_) / 100);
                    }
                  }
                  n.originPoint[v] = _;
                }),
                m == null || m(f, d),
                (p = n.visualElement.animationState) === null ||
                  p === void 0 ||
                  p.setActive(ye.Drag, !0));
            },
            u = function (f, d) {
              var p = n.getProps(),
                h = p.dragPropagation,
                x = p.dragDirectionLock,
                w = p.onDirectionLock,
                m = p.onDrag;
              if (!(!h && !n.openGlobalLock)) {
                var v = d.offset;
                if (x && n.currentDirection === null) {
                  (n.currentDirection = xO(v)),
                    n.currentDirection !== null &&
                      (w == null || w(n.currentDirection));
                  return;
                }
                n.updateAxis('x', d.point, v),
                  n.updateAxis('y', d.point, v),
                  n.visualElement.syncRender(),
                  m == null || m(f, d);
              }
            },
            c = function (f, d) {
              return n.stop(f, d);
            };
          this.panSession = new Db(
            t,
            { onSessionStart: l, onStart: s, onMove: u, onSessionEnd: c },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
      }),
      (e.prototype.stop = function (t, r) {
        var n = this.isDragging;
        if ((this.cancel(), !!n)) {
          var i = r.velocity;
          this.startAnimation(i);
          var o = this.getProps().onDragEnd;
          o == null || o(t, r);
        }
      }),
      (e.prototype.cancel = function () {
        var t, r;
        (this.isDragging = !1),
          this.visualElement.projection &&
            (this.visualElement.projection.isAnimationBlocked = !1),
          (t = this.panSession) === null || t === void 0 || t.end(),
          (this.panSession = void 0);
        var n = this.getProps().dragPropagation;
        !n &&
          this.openGlobalLock &&
          (this.openGlobalLock(), (this.openGlobalLock = null)),
          (r = this.visualElement.animationState) === null ||
            r === void 0 ||
            r.setActive(ye.Drag, !1);
      }),
      (e.prototype.updateAxis = function (t, r, n) {
        var i = this.getProps().drag;
        if (!(!n || !wl(t, i, this.currentDirection))) {
          var o = this.getAxisMotionValue(t),
            a = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (a = sO(a, this.constraints[t], this.elastic[t])),
            o.set(a);
        }
      }),
      (e.prototype.resolveConstraints = function () {
        var t = this,
          r = this.getProps(),
          n = r.dragConstraints,
          i = r.dragElastic,
          o = (this.visualElement.projection || {}).layout,
          a = this.constraints;
        n && vi(n)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : n && o
          ? (this.constraints = uO(o.actual, n))
          : (this.constraints = !1),
          (this.elastic = pO(i)),
          a !== this.constraints &&
            o &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            sr(function (l) {
              t.getAxisMotionValue(l) &&
                (t.constraints[l] = dO(o.actual[l], t.constraints[l]));
            });
      }),
      (e.prototype.resolveRefConstraints = function () {
        var t = this.getProps(),
          r = t.dragConstraints,
          n = t.onMeasureDragConstraints;
        if (!r || !vi(r)) return !1;
        var i = r.current,
          o = this.visualElement.projection;
        if (!o || !o.layout) return !1;
        var a = mO(i, o.root, this.visualElement.getTransformPagePoint()),
          l = cO(o.layout.actual, a);
        if (n) {
          var s = n(hO(l));
          (this.hasMutatedConstraints = !!s), s && (l = Vb(s));
        }
        return l;
      }),
      (e.prototype.startAnimation = function (t) {
        var r = this,
          n = this.getProps(),
          i = n.drag,
          o = n.dragMomentum,
          a = n.dragElastic,
          l = n.dragTransition,
          s = n.dragSnapToOrigin,
          u = n.onDragTransitionEnd,
          c = this.constraints || {},
          f = sr(function (d) {
            var p;
            if (!!wl(d, i, r.currentDirection)) {
              var h =
                (p = c == null ? void 0 : c[d]) !== null && p !== void 0
                  ? p
                  : {};
              s && (h = { min: 0, max: 0 });
              var x = a ? 200 : 1e6,
                w = a ? 40 : 1e7,
                m = F(
                  F(
                    {
                      type: 'inertia',
                      velocity: o ? t[d] : 0,
                      bounceStiffness: x,
                      bounceDamping: w,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10,
                    },
                    l
                  ),
                  h
                );
              return r.startAxisValueAnimation(d, m);
            }
          });
        return Promise.all(f).then(u);
      }),
      (e.prototype.startAxisValueAnimation = function (t, r) {
        var n = this.getAxisMotionValue(t);
        return Xp(t, n, 0, r);
      }),
      (e.prototype.stopAnimation = function () {
        var t = this;
        sr(function (r) {
          return t.getAxisMotionValue(r).stop();
        });
      }),
      (e.prototype.getAxisMotionValue = function (t) {
        var r,
          n,
          i = '_drag' + t.toUpperCase(),
          o = this.visualElement.getProps()[i];
        return (
          o ||
          this.visualElement.getValue(
            t,
            (n =
              (r = this.visualElement.getProps().initial) === null ||
              r === void 0
                ? void 0
                : r[t]) !== null && n !== void 0
              ? n
              : 0
          )
        );
      }),
      (e.prototype.snapToCursor = function (t) {
        var r = this;
        sr(function (n) {
          var i = r.getProps().drag;
          if (!!wl(n, i, r.currentDirection)) {
            var o = r.visualElement.projection,
              a = r.getAxisMotionValue(n);
            if (o && o.layout) {
              var l = o.layout.actual[n],
                s = l.min,
                u = l.max;
              a.set(t[n] - Me(s, u, 0.5));
            }
          }
        });
      }),
      (e.prototype.scalePositionWithinConstraints = function () {
        var t = this,
          r,
          n = this.getProps(),
          i = n.drag,
          o = n.dragConstraints,
          a = this.visualElement.projection;
        if (!(!vi(o) || !a || !this.constraints)) {
          this.stopAnimation();
          var l = { x: 0, y: 0 };
          sr(function (u) {
            var c = t.getAxisMotionValue(u);
            if (c) {
              var f = c.get();
              l[u] = fO({ min: f, max: f }, t.constraints[u]);
            }
          });
          var s = this.visualElement.getProps().transformTemplate;
          (this.visualElement.getInstance().style.transform = s
            ? s({}, '')
            : 'none'),
            (r = a.root) === null || r === void 0 || r.updateScroll(),
            a.updateLayout(),
            this.resolveConstraints(),
            sr(function (u) {
              if (!!wl(u, i, null)) {
                var c = t.getAxisMotionValue(u),
                  f = t.constraints[u],
                  d = f.min,
                  p = f.max;
                c.set(Me(d, p, l[u]));
              }
            });
        }
      }),
      (e.prototype.addListeners = function () {
        var t = this,
          r;
        gO.set(this.visualElement, this);
        var n = this.visualElement.getInstance(),
          i = Ri(n, 'pointerdown', function (u) {
            var c = t.getProps(),
              f = c.drag,
              d = c.dragListener,
              p = d === void 0 ? !0 : d;
            f && p && t.start(u);
          }),
          o = function () {
            var u = t.getProps().dragConstraints;
            vi(u) && (t.constraints = t.resolveRefConstraints());
          },
          a = this.visualElement.projection,
          l = a.addEventListener('measure', o);
        a &&
          !a.layout &&
          ((r = a.root) === null || r === void 0 || r.updateScroll(),
          a.updateLayout()),
          o();
        var s = Au(window, 'resize', function () {
          return t.scalePositionWithinConstraints();
        });
        return (
          a.addEventListener('didUpdate', function (u) {
            var c = u.delta,
              f = u.hasLayoutChanged;
            t.isDragging &&
              f &&
              (sr(function (d) {
                var p = t.getAxisMotionValue(d);
                !p ||
                  ((t.originPoint[d] += c[d].translate),
                  p.set(p.get() + c[d].translate));
              }),
              t.visualElement.syncRender());
          }),
          function () {
            s(), i(), l();
          }
        );
      }),
      (e.prototype.getProps = function () {
        var t = this.visualElement.getProps(),
          r = t.drag,
          n = r === void 0 ? !1 : r,
          i = t.dragDirectionLock,
          o = i === void 0 ? !1 : i,
          a = t.dragPropagation,
          l = a === void 0 ? !1 : a,
          s = t.dragConstraints,
          u = s === void 0 ? !1 : s,
          c = t.dragElastic,
          f = c === void 0 ? gd : c,
          d = t.dragMomentum,
          p = d === void 0 ? !0 : d;
        return F(F({}, t), {
          drag: n,
          dragDirectionLock: o,
          dragPropagation: l,
          dragConstraints: u,
          dragElastic: f,
          dragMomentum: p,
        });
      }),
      e
    );
  })();
function wl(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function xO(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r;
}
function bO(e) {
  var t = e.dragControls,
    r = e.visualElement,
    n = Ta(function () {
      return new yO(r);
    });
  y.exports.useEffect(
    function () {
      return t && t.subscribe(n);
    },
    [n, t]
  ),
    y.exports.useEffect(
      function () {
        return n.addListeners();
      },
      [n]
    );
}
function SO(e) {
  var t = e.onPan,
    r = e.onPanStart,
    n = e.onPanEnd,
    i = e.onPanSessionStart,
    o = e.visualElement,
    a = t || r || n || i,
    l = y.exports.useRef(null),
    s = y.exports.useContext(zp).transformPagePoint,
    u = {
      onSessionStart: i,
      onStart: r,
      onMove: t,
      onEnd: function (f, d) {
        (l.current = null), n && n(f, d);
      },
    };
  y.exports.useEffect(function () {
    l.current !== null && l.current.updateHandlers(u);
  });
  function c(f) {
    l.current = new Db(f, u, { transformPagePoint: s });
  }
  Os(o, 'pointerdown', a && c),
    ih(function () {
      return l.current && l.current.end();
    });
}
var wO = { pan: en(SO), drag: en(bO) },
  kl = [
    'LayoutMeasure',
    'BeforeLayoutMeasure',
    'LayoutUpdate',
    'ViewportBoxUpdate',
    'Update',
    'Render',
    'AnimationComplete',
    'LayoutAnimationComplete',
    'AnimationStart',
    'LayoutAnimationStart',
    'SetAxisTarget',
    'Unmount',
  ];
function kO() {
  var e = kl.map(function () {
      return new $o();
    }),
    t = {},
    r = {
      clearAllListeners: function () {
        return e.forEach(function (n) {
          return n.clear();
        });
      },
      updatePropListeners: function (n) {
        kl.forEach(function (i) {
          var o,
            a = 'on' + i,
            l = n[a];
          (o = t[i]) === null || o === void 0 || o.call(t),
            l && (t[i] = r[a](l));
        });
      },
    };
  return (
    e.forEach(function (n, i) {
      (r['on' + kl[i]] = function (o) {
        return n.add(o);
      }),
        (r['notify' + kl[i]] = function () {
          for (var o = [], a = 0; a < arguments.length; a++)
            o[a] = arguments[a];
          return n.notify.apply(n, tr([], $e(o), !1));
        });
    }),
    r
  );
}
function CO(e, t, r) {
  var n;
  for (var i in t) {
    var o = t[i],
      a = r[i];
    if (Nr(o)) e.addValue(i, o);
    else if (Nr(a)) e.addValue(i, Vi(o));
    else if (a !== o)
      if (e.hasValue(i)) {
        var l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else
        e.addValue(
          i,
          Vi((n = e.getStaticValue(i)) !== null && n !== void 0 ? n : o)
        );
  }
  for (var i in r) t[i] === void 0 && e.removeValue(i);
  return t;
}
var Wb = function (e) {
    var t = e.treeType,
      r = t === void 0 ? '' : t,
      n = e.build,
      i = e.getBaseTarget,
      o = e.makeTargetAnimatable,
      a = e.measureViewportBox,
      l = e.render,
      s = e.readValueFromInstance,
      u = e.removeValueFromRenderState,
      c = e.sortNodePosition,
      f = e.scrapeMotionValuesFromProps;
    return function (d, p) {
      var h = d.parent,
        x = d.props,
        w = d.presenceId,
        m = d.blockInitialAnimation,
        v = d.visualState,
        g = d.shouldReduceMotion;
      p === void 0 && (p = {});
      var S = !1,
        _ = v.latestValues,
        P = v.renderState,
        T,
        E = kO(),
        R = new Map(),
        M = new Map(),
        K = {},
        J = F({}, _),
        B;
      function N() {
        !T || !S || (I(), l(T, P, x.style, j.projection));
      }
      function I() {
        n(j, P, _, p, x);
      }
      function X() {
        E.notifyUpdate(_);
      }
      function V(D, G) {
        var re = G.onChange(function (Ge) {
            (_[D] = Ge), x.onUpdate && gr.update(X, !1, !0);
          }),
          Be = G.onRenderRequest(j.scheduleRender);
        M.set(D, function () {
          re(), Be();
        });
      }
      var $ = f(x);
      for (var z in $) {
        var W = $[z];
        _[z] !== void 0 && Nr(W) && W.set(_[z], !1);
      }
      var Z = _u(x),
        Q = _x(x),
        j = F(
          F(
            {
              treeType: r,
              current: null,
              depth: h ? h.depth + 1 : 0,
              parent: h,
              children: new Set(),
              presenceId: w,
              shouldReduceMotion: g,
              variantChildren: Q ? new Set() : void 0,
              isVisible: void 0,
              manuallyAnimateOnMount: Boolean(
                h == null ? void 0 : h.isMounted()
              ),
              blockInitialAnimation: m,
              isMounted: function () {
                return Boolean(T);
              },
              mount: function (D) {
                (S = !0),
                  (T = j.current = D),
                  j.projection && j.projection.mount(D),
                  Q &&
                    h &&
                    !Z &&
                    (B = h == null ? void 0 : h.addVariantChild(j)),
                  R.forEach(function (G, re) {
                    return V(re, G);
                  }),
                  h == null || h.children.add(j),
                  j.setProps(x);
              },
              unmount: function () {
                var D;
                (D = j.projection) === null || D === void 0 || D.unmount(),
                  fa.update(X),
                  fa.render(N),
                  M.forEach(function (G) {
                    return G();
                  }),
                  B == null || B(),
                  h == null || h.children.delete(j),
                  E.clearAllListeners(),
                  (T = void 0),
                  (S = !1);
              },
              addVariantChild: function (D) {
                var G,
                  re = j.getClosestVariantNode();
                if (re)
                  return (
                    (G = re.variantChildren) === null ||
                      G === void 0 ||
                      G.add(D),
                    function () {
                      return re.variantChildren.delete(D);
                    }
                  );
              },
              sortNodePosition: function (D) {
                return !c || r !== D.treeType
                  ? 0
                  : c(j.getInstance(), D.getInstance());
              },
              getClosestVariantNode: function () {
                return Q ? j : h == null ? void 0 : h.getClosestVariantNode();
              },
              getLayoutId: function () {
                return x.layoutId;
              },
              getInstance: function () {
                return T;
              },
              getStaticValue: function (D) {
                return _[D];
              },
              setStaticValue: function (D, G) {
                return (_[D] = G);
              },
              getLatestValues: function () {
                return _;
              },
              setVisibility: function (D) {
                j.isVisible !== D && ((j.isVisible = D), j.scheduleRender());
              },
              makeTargetAnimatable: function (D, G) {
                return G === void 0 && (G = !0), o(j, D, x, G);
              },
              measureViewportBox: function () {
                return a(T, x);
              },
              addValue: function (D, G) {
                j.hasValue(D) && j.removeValue(D),
                  R.set(D, G),
                  (_[D] = G.get()),
                  V(D, G);
              },
              removeValue: function (D) {
                var G;
                R.delete(D),
                  (G = M.get(D)) === null || G === void 0 || G(),
                  M.delete(D),
                  delete _[D],
                  u(D, P);
              },
              hasValue: function (D) {
                return R.has(D);
              },
              getValue: function (D, G) {
                var re = R.get(D);
                return (
                  re === void 0 &&
                    G !== void 0 &&
                    ((re = Vi(G)), j.addValue(D, re)),
                  re
                );
              },
              forEachValue: function (D) {
                return R.forEach(D);
              },
              readValue: function (D) {
                var G;
                return (G = _[D]) !== null && G !== void 0 ? G : s(T, D, p);
              },
              setBaseTarget: function (D, G) {
                J[D] = G;
              },
              getBaseTarget: function (D) {
                if (i) {
                  var G = i(x, D);
                  if (G !== void 0 && !Nr(G)) return G;
                }
                return J[D];
              },
            },
            E
          ),
          {
            build: function () {
              return I(), P;
            },
            scheduleRender: function () {
              gr.render(N, !1, !0);
            },
            syncRender: N,
            setProps: function (D) {
              (D.transformTemplate || x.transformTemplate) &&
                j.scheduleRender(),
                (x = D),
                E.updatePropListeners(D),
                (K = CO(j, f(x), K));
            },
            getProps: function () {
              return x;
            },
            getVariant: function (D) {
              var G;
              return (G = x.variants) === null || G === void 0 ? void 0 : G[D];
            },
            getDefaultTransition: function () {
              return x.transition;
            },
            getTransformPagePoint: function () {
              return x.transformPagePoint;
            },
            getVariantContext: function (D) {
              if ((D === void 0 && (D = !1), D))
                return h == null ? void 0 : h.getVariantContext();
              if (!Z) {
                var G = (h == null ? void 0 : h.getVariantContext()) || {};
                return x.initial !== void 0 && (G.initial = x.initial), G;
              }
              for (var re = {}, Be = 0; Be < _O; Be++) {
                var Ge = Hb[Be],
                  Oe = x[Ge];
                (Zt(Oe) || Oe === !1) && (re[Ge] = Oe);
              }
              return re;
            },
          }
        );
      return j;
    };
  },
  Hb = tr(['initial'], $e(oh), !1),
  _O = Hb.length;
function yd(e) {
  return typeof e == 'string' && e.startsWith('var(--');
}
var Ub = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function EO(e) {
  var t = Ub.exec(e);
  if (!t) return [,];
  var r = $e(t, 3),
    n = r[1],
    i = r[2];
  return [n, i];
}
function xd(e, t, r) {
  var n = $e(EO(e), 2),
    i = n[0],
    o = n[1];
  if (!!i) {
    var a = window.getComputedStyle(t).getPropertyValue(i);
    return a ? a.trim() : yd(o) ? xd(o, t) : o;
  }
}
function TO(e, t, r) {
  var n,
    i = br(t, []),
    o = e.getInstance();
  if (!(o instanceof Element)) return { target: i, transitionEnd: r };
  r && (r = F({}, r)),
    e.forEachValue(function (u) {
      var c = u.get();
      if (!!yd(c)) {
        var f = xd(c, o);
        f && u.set(f);
      }
    });
  for (var a in i) {
    var l = i[a];
    if (!!yd(l)) {
      var s = xd(l, o);
      !s ||
        ((i[a] = s),
        r && (((n = r[a]) !== null && n !== void 0) || (r[a] = l)));
    }
  }
  return { target: i, transitionEnd: r };
}
var PO = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
  ]),
  Yb = function (e) {
    return PO.has(e);
  },
  RO = function (e) {
    return Object.keys(e).some(Yb);
  },
  Gb = function (e, t) {
    e.set(t, !1), e.set(t);
  },
  I0 = function (e) {
    return e === Kn || e === q;
  },
  L0;
(function (e) {
  (e.width = 'width'),
    (e.height = 'height'),
    (e.left = 'left'),
    (e.right = 'right'),
    (e.top = 'top'),
    (e.bottom = 'bottom');
})(L0 || (L0 = {}));
var z0 = function (e, t) {
    return parseFloat(e.split(', ')[t]);
  },
  N0 = function (e, t) {
    return function (r, n) {
      var i = n.transform;
      if (i === 'none' || !i) return 0;
      var o = i.match(/^matrix3d\((.+)\)$/);
      if (o) return z0(o[1], t);
      var a = i.match(/^matrix\((.+)\)$/);
      return a ? z0(a[1], e) : 0;
    };
  },
  AO = new Set(['x', 'y', 'z']),
  MO = ma.filter(function (e) {
    return !AO.has(e);
  });
function $O(e) {
  var t = [];
  return (
    MO.forEach(function (r) {
      var n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0));
    }),
    t.length && e.syncRender(),
    t
  );
}
var F0 = {
    width: function (e, t) {
      var r = e.x,
        n = t.paddingLeft,
        i = n === void 0 ? '0' : n,
        o = t.paddingRight,
        a = o === void 0 ? '0' : o;
      return r.max - r.min - parseFloat(i) - parseFloat(a);
    },
    height: function (e, t) {
      var r = e.y,
        n = t.paddingTop,
        i = n === void 0 ? '0' : n,
        o = t.paddingBottom,
        a = o === void 0 ? '0' : o;
      return r.max - r.min - parseFloat(i) - parseFloat(a);
    },
    top: function (e, t) {
      var r = t.top;
      return parseFloat(r);
    },
    left: function (e, t) {
      var r = t.left;
      return parseFloat(r);
    },
    bottom: function (e, t) {
      var r = e.y,
        n = t.top;
      return parseFloat(n) + (r.max - r.min);
    },
    right: function (e, t) {
      var r = e.x,
        n = t.left;
      return parseFloat(n) + (r.max - r.min);
    },
    x: N0(4, 13),
    y: N0(5, 14),
  },
  OO = function (e, t, r) {
    var n = t.measureViewportBox(),
      i = t.getInstance(),
      o = getComputedStyle(i),
      a = o.display,
      l = {};
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      r.forEach(function (u) {
        l[u] = F0[u](n, o);
      }),
      t.syncRender();
    var s = t.measureViewportBox();
    return (
      r.forEach(function (u) {
        var c = t.getValue(u);
        Gb(c, l[u]), (e[u] = F0[u](s, o));
      }),
      e
    );
  },
  IO = function (e, t, r, n) {
    r === void 0 && (r = {}),
      n === void 0 && (n = {}),
      (t = F({}, t)),
      (n = F({}, n));
    var i = Object.keys(t).filter(Yb),
      o = [],
      a = !1,
      l = [];
    if (
      (i.forEach(function (c) {
        var f = e.getValue(c);
        if (!!e.hasValue(c)) {
          var d = r[c],
            p = so(d),
            h = t[c],
            x;
          if (va(h)) {
            var w = h.length,
              m = h[0] === null ? 1 : 0;
            (d = h[m]), (p = so(d));
            for (var v = m; v < w; v++) x ? Cs(so(h[v]) === x) : (x = so(h[v]));
          } else x = so(h);
          if (p !== x)
            if (I0(p) && I0(x)) {
              var g = f.get();
              typeof g == 'string' && f.set(parseFloat(g)),
                typeof h == 'string'
                  ? (t[c] = parseFloat(h))
                  : Array.isArray(h) && x === q && (t[c] = h.map(parseFloat));
            } else
              (p == null ? void 0 : p.transform) &&
              (x == null ? void 0 : x.transform) &&
              (d === 0 || h === 0)
                ? d === 0
                  ? f.set(x.transform(d))
                  : (t[c] = p.transform(h))
                : (a || ((o = $O(e)), (a = !0)),
                  l.push(c),
                  (n[c] = n[c] !== void 0 ? n[c] : t[c]),
                  Gb(f, h));
        }
      }),
      l.length)
    ) {
      var s = l.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = OO(t, e, l);
      return (
        o.length &&
          o.forEach(function (c) {
            var f = $e(c, 2),
              d = f[0],
              p = f[1];
            e.getValue(d).set(p);
          }),
        e.syncRender(),
        s !== null && window.scrollTo({ top: s }),
        { target: u, transitionEnd: n }
      );
    } else return { target: t, transitionEnd: n };
  };
function LO(e, t, r, n) {
  return RO(t) ? IO(e, t, r, n) : { target: t, transitionEnd: n };
}
var zO = function (e, t, r, n) {
  var i = TO(e, t, n);
  return (t = i.target), (n = i.transitionEnd), LO(e, t, r, n);
};
function NO(e) {
  return window.getComputedStyle(e);
}
var Kb = {
    treeType: 'dom',
    readValueFromInstance: function (e, t) {
      if ($a(t)) {
        var r = Yp(t);
        return (r && r.default) || 0;
      } else {
        var n = NO(e);
        return (vb(t) ? n.getPropertyValue(t) : n[t]) || 0;
      }
    },
    sortNodePosition: function (e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    },
    getBaseTarget: function (e, t) {
      var r;
      return (r = e.style) === null || r === void 0 ? void 0 : r[t];
    },
    measureViewportBox: function (e, t) {
      var r = t.transformPagePoint;
      return jb(e, r);
    },
    resetTransform: function (e, t, r) {
      var n = r.transformTemplate;
      (t.style.transform = n ? n({}, '') : 'none'), e.scheduleRender();
    },
    restoreTransform: function (e, t) {
      e.style.transform = t.style.transform;
    },
    removeValueFromRenderState: function (e, t) {
      var r = t.vars,
        n = t.style;
      delete r[e], delete n[e];
    },
    makeTargetAnimatable: function (e, t, r, n) {
      var i = r.transformValues;
      n === void 0 && (n = !0);
      var o = t.transition,
        a = t.transitionEnd,
        l = br(t, ['transition', 'transitionEnd']),
        s = K8(l, o || {}, e);
      if ((i && (a && (a = i(a)), l && (l = i(l)), s && (s = i(s))), n)) {
        Y8(e, l, s);
        var u = zO(e, l, s, a);
        (a = u.transitionEnd), (l = u.target);
      }
      return F({ transition: o, transitionEnd: a }, l);
    },
    scrapeMotionValuesFromProps: th,
    build: function (e, t, r, n, i) {
      e.isVisible !== void 0 &&
        (t.style.visibility = e.isVisible ? 'visible' : 'hidden'),
        qp(t, r, n, i.transformTemplate);
    },
    render: bb,
  },
  FO = Wb(Kb),
  DO = Wb(
    F(F({}, Kb), {
      getBaseTarget: function (e, t) {
        return e[t];
      },
      readValueFromInstance: function (e, t) {
        var r;
        return $a(t)
          ? ((r = Yp(t)) === null || r === void 0 ? void 0 : r.default) || 0
          : ((t = Sb.has(t) ? t : xb(t)), e.getAttribute(t));
      },
      scrapeMotionValuesFromProps: kb,
      build: function (e, t, r, n, i) {
        eh(t, r, n, i.transformTemplate);
      },
      render: wb,
    })
  ),
  BO = function (e, t) {
    return Zp(e)
      ? DO(t, { enableHardwareAcceleration: !1 })
      : FO(t, { enableHardwareAcceleration: !0 });
  };
function D0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var uo = {
    correct: function (e, t) {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (q.test(e)) e = parseFloat(e);
        else return e;
      var r = D0(e, t.target.x),
        n = D0(e, t.target.y);
      return ''.concat(r, '% ').concat(n, '%');
    },
  },
  B0 = '_$css',
  VO = {
    correct: function (e, t) {
      var r = t.treeScale,
        n = t.projectionDelta,
        i = e,
        o = e.includes('var('),
        a = [];
      o &&
        (e = e.replace(Ub, function (x) {
          return a.push(x), B0;
        }));
      var l = zr.parse(e);
      if (l.length > 5) return i;
      var s = zr.createTransformer(e),
        u = typeof l[0] != 'number' ? 1 : 0,
        c = n.x.scale * r.x,
        f = n.y.scale * r.y;
      (l[0 + u] /= c), (l[1 + u] /= f);
      var d = Me(c, f, 0.5);
      typeof l[2 + u] == 'number' && (l[2 + u] /= d),
        typeof l[3 + u] == 'number' && (l[3 + u] /= d);
      var p = s(l);
      if (o) {
        var h = 0;
        p = p.replace(B0, function () {
          var x = a[h];
          return h++, x;
        });
      }
      return p;
    },
  },
  jO = (function (e) {
    xx(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.componentDidMount = function () {
        var r = this,
          n = this.props,
          i = n.visualElement,
          o = n.layoutGroup,
          a = n.switchLayoutGroup,
          l = n.layoutId,
          s = i.projection;
        m$(HO),
          s &&
            (o != null && o.group && o.group.add(s),
            (a == null ? void 0 : a.register) && l && a.register(s),
            s.root.didUpdate(),
            s.addEventListener('animationComplete', function () {
              r.safeToRemove();
            }),
            s.setOptions(
              F(F({}, s.options), {
                onExitComplete: function () {
                  return r.safeToRemove();
                },
              })
            )),
          (zo.hasEverUpdated = !0);
      }),
      (t.prototype.getSnapshotBeforeUpdate = function (r) {
        var n = this,
          i = this.props,
          o = i.layoutDependency,
          a = i.visualElement,
          l = i.drag,
          s = i.isPresent,
          u = a.projection;
        return (
          u &&
            ((u.isPresent = s),
            l || r.layoutDependency !== o || o === void 0
              ? u.willUpdate()
              : this.safeToRemove(),
            r.isPresent !== s &&
              (s
                ? u.promote()
                : u.relegate() ||
                  gr.postRender(function () {
                    var c;
                    (!((c = u.getStack()) === null || c === void 0) &&
                      c.members.length) ||
                      n.safeToRemove();
                  }))),
          null
        );
      }),
      (t.prototype.componentDidUpdate = function () {
        var r = this.props.visualElement.projection;
        r &&
          (r.root.didUpdate(),
          !r.currentAnimation && r.isLead() && this.safeToRemove());
      }),
      (t.prototype.componentWillUnmount = function () {
        var r = this.props,
          n = r.visualElement,
          i = r.layoutGroup,
          o = r.switchLayoutGroup,
          a = n.projection;
        a &&
          (a.scheduleCheckAfterUnmount(),
          i != null && i.group && i.group.remove(a),
          o != null && o.deregister && o.deregister(a));
      }),
      (t.prototype.safeToRemove = function () {
        var r = this.props.safeToRemove;
        r == null || r();
      }),
      (t.prototype.render = function () {
        return null;
      }),
      t
    );
  })(pr.Component);
function WO(e) {
  var t = $e(Ib(), 2),
    r = t[0],
    n = t[1],
    i = y.exports.useContext(Qp);
  return H(
    jO,
    ju(
      {},
      F({}, e, {
        layoutGroup: i,
        switchLayoutGroup: y.exports.useContext(pb),
        isPresent: r,
        safeToRemove: n,
      })
    )
  );
}
var HO = {
    borderRadius: F(F({}, uo), {
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    }),
    borderTopLeftRadius: uo,
    borderTopRightRadius: uo,
    borderBottomLeftRadius: uo,
    borderBottomRightRadius: uo,
    boxShadow: VO,
  },
  UO = { measureLayout: WO },
  YO = db({
    attachResizeListener: function (e, t) {
      return Au(e, 'resize', t);
    },
    measureScroll: function () {
      return {
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      };
    },
  }),
  Dc = { current: void 0 },
  GO = db({
    measureScroll: function (e) {
      return { x: e.scrollLeft, y: e.scrollTop };
    },
    defaultParent: function () {
      if (!Dc.current) {
        var e = new YO(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Dc.current = e);
      }
      return Dc.current;
    },
    resetTransform: function (e, t) {
      e.style.transform = t != null ? t : 'none';
    },
  }),
  KO = F(F(F(F({}, oO), I8), wO), UO),
  XO = W$(function (e, t) {
    return d8(e, t, KO, BO, GO);
  });
function Xb() {
  var e = y.exports.useRef(!1);
  return (
    _s(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    e
  );
}
function QO() {
  var e = Xb(),
    t = $e(y.exports.useState(0), 2),
    r = t[0],
    n = t[1],
    i = y.exports.useCallback(
      function () {
        e.current && n(r + 1);
      },
      [r]
    ),
    o = y.exports.useCallback(
      function () {
        return gr.postRender(i);
      },
      [i]
    );
  return [o, r];
}
var Bc = function (e) {
  var t = e.children,
    r = e.initial,
    n = e.isPresent,
    i = e.onExitComplete,
    o = e.custom,
    a = e.presenceAffectsLayout,
    l = Ta(ZO),
    s = Ob(),
    u = y.exports.useMemo(
      function () {
        return {
          id: s,
          initial: r,
          isPresent: n,
          custom: o,
          onExitComplete: function (c) {
            var f, d;
            l.set(c, !0);
            try {
              for (
                var p = lA(l.values()), h = p.next();
                !h.done;
                h = p.next()
              ) {
                var x = h.value;
                if (!x) return;
              }
            } catch (w) {
              f = { error: w };
            } finally {
              try {
                h && !h.done && (d = p.return) && d.call(p);
              } finally {
                if (f) throw f.error;
              }
            }
            i == null || i();
          },
          register: function (c) {
            return (
              l.set(c, !1),
              function () {
                return l.delete(c);
              }
            );
          },
        };
      },
      a ? void 0 : [n]
    );
  return (
    y.exports.useMemo(
      function () {
        l.forEach(function (c, f) {
          return l.set(f, !1);
        });
      },
      [n]
    ),
    y.exports.useEffect(
      function () {
        !n && !l.size && (i == null || i());
      },
      [n]
    ),
    y.exports.createElement(Gi.Provider, { value: u }, t)
  );
};
function ZO() {
  return new Map();
}
var ti = function (e) {
  return e.key || '';
};
function qO(e, t) {
  e.forEach(function (r) {
    var n = ti(r);
    t.set(n, r);
  });
}
function JO(e) {
  var t = [];
  return (
    y.exports.Children.forEach(e, function (r) {
      y.exports.isValidElement(r) && t.push(r);
    }),
    t
  );
}
var eI = function (e) {
  var t = e.children,
    r = e.custom,
    n = e.initial,
    i = n === void 0 ? !0 : n,
    o = e.onExitComplete,
    a = e.exitBeforeEnter,
    l = e.presenceAffectsLayout,
    s = l === void 0 ? !0 : l,
    u = $e(QO(), 1),
    c = u[0],
    f = y.exports.useContext(Qp).forceRender;
  f && (c = f);
  var d = Xb(),
    p = JO(t),
    h = p,
    x = new Set(),
    w = y.exports.useRef(h),
    m = y.exports.useRef(new Map()).current,
    v = y.exports.useRef(!0);
  if (
    (_s(function () {
      (v.current = !1), qO(p, m), (w.current = h);
    }),
    ih(function () {
      (v.current = !0), m.clear(), x.clear();
    }),
    v.current)
  )
    return y.exports.createElement(
      y.exports.Fragment,
      null,
      h.map(function (E) {
        return y.exports.createElement(
          Bc,
          {
            key: ti(E),
            isPresent: !0,
            initial: i ? void 0 : !1,
            presenceAffectsLayout: s,
          },
          E
        );
      })
    );
  h = tr([], $e(h), !1);
  for (
    var g = w.current.map(ti), S = p.map(ti), _ = g.length, P = 0;
    P < _;
    P++
  ) {
    var T = g[P];
    S.indexOf(T) === -1 && x.add(T);
  }
  return (
    a && x.size && (h = []),
    x.forEach(function (E) {
      if (S.indexOf(E) === -1) {
        var R = m.get(E);
        if (!!R) {
          var M = g.indexOf(E),
            K = function () {
              m.delete(E), x.delete(E);
              var J = w.current.findIndex(function (B) {
                return B.key === E;
              });
              if ((w.current.splice(J, 1), !x.size)) {
                if (((w.current = p), d.current === !1)) return;
                c(), o && o();
              }
            };
          h.splice(
            M,
            0,
            y.exports.createElement(
              Bc,
              {
                key: ti(R),
                isPresent: !1,
                onExitComplete: K,
                custom: r,
                presenceAffectsLayout: s,
              },
              R
            )
          );
        }
      }
    }),
    (h = h.map(function (E) {
      var R = E.key;
      return x.has(R)
        ? E
        : y.exports.createElement(
            Bc,
            { key: ti(E), isPresent: !0, presenceAffectsLayout: s },
            E
          );
    })),
    Lp !== 'production' &&
      a &&
      h.length > 1 &&
      console.warn(
        "You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."
      ),
    y.exports.createElement(
      y.exports.Fragment,
      null,
      x.size
        ? h
        : h.map(function (E) {
            return y.exports.cloneElement(E);
          })
    )
  );
};
function Ct() {
  return (
    (Ct =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ct.apply(this, arguments)
  );
}
function V0(e, t) {
  var r = Qb(e, t),
    n = r
      ? e[r].findIndex(function (i) {
          return i.id === t;
        })
      : -1;
  return { position: r, index: n };
}
var Qb = function (t, r) {
  var n;
  return (n = Object.values(t)
    .flat()
    .find(function (i) {
      return i.id === r;
    })) == null
    ? void 0
    : n.position;
};
function tI(e) {
  var t = e.includes('right'),
    r = e.includes('left'),
    n = 'center';
  return (
    t && (n = 'flex-end'),
    r && (n = 'flex-start'),
    { display: 'flex', flexDirection: 'column', alignItems: n }
  );
}
function rI(e) {
  var t = e === 'top' || e === 'bottom',
    r = t ? '0 auto' : void 0,
    n = e.includes('top') ? 'env(safe-area-inset-top, 0px)' : void 0,
    i = e.includes('bottom') ? 'env(safe-area-inset-bottom, 0px)' : void 0,
    o = e.includes('left') ? void 0 : 'env(safe-area-inset-right, 0px)',
    a = e.includes('right') ? void 0 : 'env(safe-area-inset-left, 0px)';
  return {
    position: 'fixed',
    zIndex: 5500,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    margin: r,
    top: n,
    bottom: i,
    right: o,
    left: a,
  };
}
var nI = {
    top: [],
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    bottom: [],
    'bottom-right': [],
  },
  No = iI(nI);
function iI(e) {
  var t = e,
    r = new Set(),
    n = function (o) {
      (t = o(t)),
        r.forEach(function (a) {
          return a();
        });
    };
  return {
    getState: function () {
      return t;
    },
    subscribe: function (o) {
      return (
        r.add(o),
        function () {
          n(function () {
            return e;
          }),
            r.delete(o);
        }
      );
    },
    removeToast: function (o, a) {
      n(function (l) {
        var s;
        return Ct(
          {},
          l,
          ((s = {}),
          (s[a] = l[a].filter(function (u) {
            return u.id != o;
          })),
          s)
        );
      });
    },
    notify: function (o, a) {
      var l = oI(o, a),
        s = l.position,
        u = l.id;
      return (
        n(function (c) {
          var f,
            d,
            p,
            h = s.includes('top'),
            x = h
              ? [l].concat((f = c[s]) != null ? f : [])
              : [].concat((d = c[s]) != null ? d : [], [l]);
          return Ct({}, c, ((p = {}), (p[s] = x), p));
        }),
        u
      );
    },
    update: function (o, a) {
      !o ||
        n(function (l) {
          var s = Ct({}, l),
            u = V0(s, o),
            c = u.position,
            f = u.index;
          return (
            c && f !== -1 && (s[c][f] = Ct({}, s[c][f], a, { message: lI(a) })),
            s
          );
        });
    },
    closeAll: function (o) {
      var a = o === void 0 ? {} : o,
        l = a.positions;
      n(function (s) {
        var u = [
            'bottom',
            'bottom-right',
            'bottom-left',
            'top',
            'top-left',
            'top-right',
          ],
          c = l != null ? l : u;
        return c.reduce(function (f, d) {
          return (
            (f[d] = s[d].map(function (p) {
              return Ct({}, p, { requestClose: !0 });
            })),
            f
          );
        }, Ct({}, s));
      });
    },
    close: function (o) {
      n(function (a) {
        var l,
          s = Qb(a, o);
        return s
          ? Ct(
              {},
              a,
              ((l = {}),
              (l[s] = a[s].map(function (u) {
                return u.id == o ? Ct({}, u, { requestClose: !0 }) : u;
              })),
              l)
            )
          : a;
      });
    },
    isActive: function (o) {
      return Boolean(V0(No.getState(), o).position);
    },
  };
}
var j0 = 0;
function oI(e, t) {
  var r, n;
  t === void 0 && (t = {}), (j0 += 1);
  var i = (r = t.id) != null ? r : j0,
    o = (n = t.position) != null ? n : 'bottom';
  return {
    id: i,
    message: e,
    position: o,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: function () {
      return No.removeToast(String(i), o);
    },
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var aI = function (t) {
  var r = t.status,
    n = t.variant,
    i = n === void 0 ? 'solid' : n,
    o = t.id,
    a = t.title,
    l = t.isClosable,
    s = t.onClose,
    u = t.description,
    c = t.icon,
    f = typeof o != 'undefined' ? 'toast-' + o + '-title' : void 0;
  return y.exports.createElement(
    J6,
    {
      status: r,
      variant: i,
      id: String(o),
      alignItems: 'start',
      borderRadius: 'md',
      boxShadow: 'lg',
      paddingEnd: 8,
      textAlign: 'start',
      width: 'auto',
      'aria-labelledby': f,
    },
    y.exports.createElement(rA, null, c),
    y.exports.createElement(
      ee.div,
      { flex: '1', maxWidth: '100%' },
      a && y.exports.createElement(eA, { id: f }, a),
      u && y.exports.createElement(tA, { display: 'block' }, u)
    ),
    l &&
      y.exports.createElement(aA, {
        size: 'sm',
        onClick: s,
        position: 'absolute',
        insetEnd: 1,
        top: 1,
      })
  );
};
function lI(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.render,
    n = t.toastComponent,
    i = n === void 0 ? aI : n,
    o = function (l) {
      return A1(r) ? r(l) : y.exports.createElement(i, Ct({}, l, e));
    };
  return o;
}
var sI = {
    initial: function (t) {
      var r,
        n = t.position,
        i = ['top', 'bottom'].includes(n) ? 'y' : 'x',
        o = ['top-right', 'bottom-right'].includes(n) ? 1 : -1;
      return (
        n === 'bottom' && (o = 1), (r = { opacity: 0 }), (r[i] = o * 24), r
      );
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  Zb = y.exports.memo(function (e) {
    var t = e.id,
      r = e.message,
      n = e.onCloseComplete,
      i = e.onRequestRemove,
      o = e.requestClose,
      a = o === void 0 ? !1 : o,
      l = e.position,
      s = l === void 0 ? 'bottom' : l,
      u = e.duration,
      c = u === void 0 ? 5e3 : u,
      f = e.containerStyle,
      d = e.motionVariants,
      p = d === void 0 ? sI : d,
      h = e.toastSpacing,
      x = h === void 0 ? '0.5rem' : h,
      w = y.exports.useState(c),
      m = w[0],
      v = w[1],
      g = N8();
    am(
      function () {
        g || n == null || n();
      },
      [g]
    ),
      am(
        function () {
          v(c);
        },
        [c]
      );
    var S = function () {
        return v(null);
      },
      _ = function () {
        return v(c);
      },
      P = function () {
        g && i();
      };
    y.exports.useEffect(
      function () {
        g && a && i();
      },
      [g, a, i]
    ),
      F_(P, m);
    var T = y.exports.useMemo(
        function () {
          return Ct(
            { pointerEvents: 'auto', maxWidth: 560, minWidth: 300, margin: x },
            f
          );
        },
        [f, x]
      ),
      E = y.exports.useMemo(
        function () {
          return tI(s);
        },
        [s]
      );
    return y.exports.createElement(
      XO.li,
      {
        layout: !0,
        className: 'chakra-toast',
        variants: p,
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
        onHoverStart: S,
        onHoverEnd: _,
        custom: { position: s },
        style: E,
      },
      y.exports.createElement(
        ee.div,
        {
          role: 'status',
          'aria-atomic': 'true',
          className: 'chakra-toast__inner',
          __css: T,
        },
        dr(r, { id: t, onClose: P })
      )
    );
  });
fe && (Zb.displayName = 'ToastComponent');
var uI = function (t) {
  var r = y.exports.useSyncExternalStore(
      No.subscribe,
      No.getState,
      No.getState
    ),
    n = t.children,
    i = t.motionVariants,
    o = t.component,
    a = o === void 0 ? Zb : o,
    l = mu(r).map(function (s) {
      var u = r[s];
      return y.exports.createElement(
        'ul',
        {
          role: 'region',
          'aria-live': 'polite',
          key: s,
          id: 'chakra-toast-manager-' + s,
          style: rI(s),
        },
        y.exports.createElement(
          eI,
          { initial: !1 },
          u.map(function (c) {
            return y.exports.createElement(
              a,
              Ct({ key: c.id, motionVariants: i }, c)
            );
          })
        )
      );
    });
  return y.exports.createElement(
    y.exports.Fragment,
    null,
    n,
    y.exports.createElement(yu, null, l)
  );
};
function In() {
  return (
    (In =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    In.apply(this, arguments)
  );
}
function qb(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function cI(e) {
  var t = e.loading,
    r = e.src,
    n = e.srcSet,
    i = e.onLoad,
    o = e.onError,
    a = e.crossOrigin,
    l = e.sizes,
    s = e.ignoreFallback,
    u = y.exports.useState('pending'),
    c = u[0],
    f = u[1];
  y.exports.useEffect(
    function () {
      f(r ? 'loading' : 'pending');
    },
    [r]
  );
  var d = y.exports.useRef(),
    p = y.exports.useCallback(
      function () {
        if (!!r) {
          h();
          var x = new Image();
          (x.src = r),
            a && (x.crossOrigin = a),
            n && (x.srcset = n),
            l && (x.sizes = l),
            t && (x.loading = t),
            (x.onload = function (w) {
              h(), f('loaded'), i == null || i(w);
            }),
            (x.onerror = function (w) {
              h(), f('failed'), o == null || o(w);
            }),
            (d.current = x);
        }
      },
      [r, a, n, l, i, o, t]
    ),
    h = function () {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    Hn(
      function () {
        if (!s)
          return (
            c === 'loading' && p(),
            function () {
              h();
            }
          );
      },
      [c, p, s]
    ),
    s ? 'loaded' : c
  );
}
var fI = function (t, r) {
    return (
      (t !== 'loaded' && r === 'beforeLoadOrError') ||
      (t === 'failed' && r === 'onError')
    );
  },
  dI = ['htmlWidth', 'htmlHeight', 'alt'],
  pI = [
    'fallbackSrc',
    'fallback',
    'src',
    'srcSet',
    'align',
    'fit',
    'loading',
    'ignoreFallback',
    'crossOrigin',
    'fallbackStrategy',
    'referrerPolicy',
  ],
  W0 = y.exports.forwardRef(function (e, t) {
    var r = e.htmlWidth,
      n = e.htmlHeight,
      i = e.alt,
      o = qb(e, dI);
    return y.exports.createElement(
      'img',
      In({ width: r, height: n, ref: t, alt: i }, o)
    );
  }),
  Jb = le(function (e, t) {
    var r = e.fallbackSrc,
      n = e.fallback,
      i = e.src,
      o = e.srcSet,
      a = e.align,
      l = e.fit,
      s = e.loading,
      u = e.ignoreFallback,
      c = e.crossOrigin,
      f = e.fallbackStrategy,
      d = f === void 0 ? 'beforeLoadOrError' : f,
      p = e.referrerPolicy,
      h = qb(e, pI),
      x = r !== void 0 || n !== void 0,
      w = s != null || u || !x,
      m = cI(In({}, e, { ignoreFallback: w })),
      v = fI(m, d),
      g = In(
        { ref: t, objectFit: l, objectPosition: a },
        w ? h : Cp(h, ['onError', 'onLoad'])
      );
    return v
      ? n ||
          y.exports.createElement(
            ee.img,
            In({ as: W0, className: 'chakra-image__placeholder', src: r }, g)
          )
      : y.exports.createElement(
          ee.img,
          In(
            {
              as: W0,
              src: i,
              srcSet: o,
              crossOrigin: c,
              loading: s,
              referrerPolicy: p,
              className: 'chakra-image',
            },
            g
          )
        );
  });
fe && (Jb.displayName = 'Image');
function ah(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function un() {
  return (
    (un =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    un.apply(this, arguments)
  );
}
var hI = Yi({ strict: !1, name: 'ButtonGroupContext' }),
  vI = hI[1],
  mI = ['label', 'placement', 'spacing', 'children', 'className', '__css'],
  H0 = function (t) {
    var r = t.label,
      n = t.placement,
      i = t.spacing,
      o = i === void 0 ? '0.5rem' : i,
      a = t.children,
      l =
        a === void 0
          ? y.exports.createElement(mx, {
              color: 'currentColor',
              width: '1em',
              height: '1em',
            })
          : a,
      s = t.className,
      u = t.__css,
      c = ah(t, mI),
      f = Ne('chakra-button__spinner', s),
      d = n === 'start' ? 'marginEnd' : 'marginStart',
      p = y.exports.useMemo(
        function () {
          var h;
          return un(
            ((h = {
              display: 'flex',
              alignItems: 'center',
              position: r ? 'relative' : 'absolute',
            }),
            (h[d] = r ? o : 0),
            (h.fontSize = '1em'),
            (h.lineHeight = 'normal'),
            h),
            u
          );
        },
        [u, r, d, o]
      );
    return y.exports.createElement(
      ee.div,
      un({ className: f }, c, { __css: p }),
      l
    );
  },
  gI = ['children', 'className'],
  U0 = function (t) {
    var r = t.children,
      n = t.className,
      i = ah(t, gI),
      o = y.exports.isValidElement(r)
        ? y.exports.cloneElement(r, { 'aria-hidden': !0, focusable: !1 })
        : r,
      a = Ne('chakra-button__icon', n);
    return y.exports.createElement(
      ee.span,
      un({ display: 'inline-flex', alignSelf: 'center', flexShrink: 0 }, i, {
        className: a,
      }),
      o
    );
  };
function yI(e) {
  var t = y.exports.useState(!e),
    r = t[0],
    n = t[1],
    i = y.exports.useCallback(function (a) {
      !a || n(a.tagName === 'BUTTON');
    }, []),
    o = r ? 'button' : void 0;
  return { ref: i, type: o };
}
var xI = [
    'isDisabled',
    'isLoading',
    'isActive',
    'children',
    'leftIcon',
    'rightIcon',
    'loadingText',
    'iconSpacing',
    'type',
    'spinner',
    'spinnerPlacement',
    'className',
    'as',
  ],
  bI = le(function (e, t) {
    var r = vI(),
      n = nr('Button', un({}, r, e)),
      i = bt(e),
      o = i.isDisabled,
      a = o === void 0 ? (r == null ? void 0 : r.isDisabled) : o,
      l = i.isLoading,
      s = i.isActive,
      u = i.children,
      c = i.leftIcon,
      f = i.rightIcon,
      d = i.loadingText,
      p = i.iconSpacing,
      h = p === void 0 ? '0.5rem' : p,
      x = i.type,
      w = i.spinner,
      m = i.spinnerPlacement,
      v = m === void 0 ? 'start' : m,
      g = i.className,
      S = i.as,
      _ = ah(i, xI),
      P = y.exports.useMemo(
        function () {
          var K,
            J = Dt({}, (K = n == null ? void 0 : n._focus) != null ? K : {}, {
              zIndex: 1,
            });
          return un(
            {
              display: 'inline-flex',
              appearance: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
              position: 'relative',
              whiteSpace: 'nowrap',
              verticalAlign: 'middle',
              outline: 'none',
            },
            n,
            !!r && { _focus: J }
          );
        },
        [n, r]
      ),
      T = yI(S),
      E = T.ref,
      R = T.type,
      M = { rightIcon: f, leftIcon: c, iconSpacing: h, children: u };
    return y.exports.createElement(
      ee.button,
      un(
        {
          disabled: a || l,
          ref: N_(t, E),
          as: S,
          type: x != null ? x : R,
          'data-active': im(s),
          'data-loading': im(l),
          __css: P,
          className: Ne('chakra-button', g),
        },
        _
      ),
      l &&
        v === 'start' &&
        y.exports.createElement(
          H0,
          {
            className: 'chakra-button__spinner--start',
            label: d,
            placement: 'start',
            spacing: h,
          },
          w
        ),
      l
        ? d ||
            y.exports.createElement(
              ee.span,
              { opacity: 0 },
              y.exports.createElement(Y0, M)
            )
        : y.exports.createElement(Y0, M),
      l &&
        v === 'end' &&
        y.exports.createElement(
          H0,
          {
            className: 'chakra-button__spinner--end',
            label: d,
            placement: 'end',
            spacing: h,
          },
          w
        )
    );
  });
function Y0(e) {
  var t = e.leftIcon,
    r = e.rightIcon,
    n = e.children,
    i = e.iconSpacing;
  return y.exports.createElement(
    y.exports.Fragment,
    null,
    t && y.exports.createElement(U0, { marginEnd: i }, t),
    n,
    r && y.exports.createElement(U0, { marginStart: i }, r)
  );
}
function ie() {
  return (
    (ie =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ie.apply(this, arguments)
  );
}
function ze(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var SI = ['ratio', 'children', 'className'],
  wI = le(function (e, t) {
    var r = e.ratio,
      n = r === void 0 ? 4 / 3 : r,
      i = e.children,
      o = e.className,
      a = ze(e, SI),
      l = y.exports.Children.only(i),
      s = Ne('chakra-aspect-ratio', o);
    return y.exports.createElement(
      ee.div,
      ie(
        {
          ref: t,
          position: 'relative',
          className: s,
          _before: {
            height: 0,
            content: '""',
            display: 'block',
            paddingBottom: Wn(n, function (u) {
              return (1 / u) * 100 + '%';
            }),
          },
          __css: {
            '& > *:not(style)': {
              overflow: 'hidden',
              position: 'absolute',
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            },
            '& > img, & > video': { objectFit: 'cover' },
          },
        },
        a
      ),
      l
    );
  });
fe && (wI.displayName = 'AspectRatio');
var kI = ['className'],
  CI = le(function (e, t) {
    var r = nr('Badge', e),
      n = bt(e);
    n.className;
    var i = ze(n, kI);
    return y.exports.createElement(
      ee.span,
      ie({ ref: t, className: Ne('chakra-badge', e.className) }, i, {
        __css: ie(
          {
            display: 'inline-block',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
          },
          r
        ),
      })
    );
  });
fe && (CI.displayName = 'Badge');
var _I = ['size', 'centerContent'],
  EI = ['size'],
  Ai = ee('div');
fe && (Ai.displayName = 'Box');
var eS = le(function (e, t) {
  var r = e.size,
    n = e.centerContent,
    i = n === void 0 ? !0 : n,
    o = ze(e, _I),
    a = i
      ? { display: 'flex', alignItems: 'center', justifyContent: 'center' }
      : {};
  return y.exports.createElement(
    Ai,
    ie(
      { ref: t, boxSize: r, __css: ie({}, a, { flexShrink: 0, flexGrow: 0 }) },
      o
    )
  );
});
fe && (eS.displayName = 'Square');
var TI = le(function (e, t) {
  var r = e.size,
    n = ze(e, EI);
  return y.exports.createElement(
    eS,
    ie({ size: r, ref: t, borderRadius: '9999px' }, n)
  );
});
fe && (TI.displayName = 'Circle');
var PI = ee('div', {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
fe && (PI.displayName = 'Center');
var RI = ['className'],
  AI = le(function (e, t) {
    var r = nr('Code', e),
      n = bt(e);
    n.className;
    var i = ze(n, RI);
    return y.exports.createElement(
      ee.code,
      ie({ ref: t, className: Ne('chakra-code', e.className) }, i, {
        __css: ie({ display: 'inline-block' }, r),
      })
    );
  });
fe && (AI.displayName = 'Code');
var MI = ['className', 'centerContent'],
  $I = le(function (e, t) {
    var r = bt(e),
      n = r.className,
      i = r.centerContent,
      o = ze(r, MI),
      a = nr('Container', e);
    return y.exports.createElement(
      ee.div,
      ie({ ref: t, className: Ne('chakra-container', n) }, o, {
        __css: ie(
          {},
          a,
          i && {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }
        ),
      })
    );
  });
fe && ($I.displayName = 'Container');
var OI = [
    'borderLeftWidth',
    'borderBottomWidth',
    'borderTopWidth',
    'borderRightWidth',
    'borderWidth',
    'borderStyle',
    'borderColor',
  ],
  II = ['className', 'orientation', '__css'],
  LI = le(function (e, t) {
    var r = nr('Divider', e),
      n = r.borderLeftWidth,
      i = r.borderBottomWidth,
      o = r.borderTopWidth,
      a = r.borderRightWidth,
      l = r.borderWidth,
      s = r.borderStyle,
      u = r.borderColor,
      c = ze(r, OI),
      f = bt(e),
      d = f.className,
      p = f.orientation,
      h = p === void 0 ? 'horizontal' : p,
      x = f.__css,
      w = ze(f, II),
      m = {
        vertical: { borderLeftWidth: n || a || l || '1px', height: '100%' },
        horizontal: { borderBottomWidth: i || o || l || '1px', width: '100%' },
      };
    return y.exports.createElement(
      ee.hr,
      ie({ ref: t, 'aria-orientation': h }, w, {
        __css: ie(
          {},
          c,
          { border: '0', borderColor: u, borderStyle: s },
          m[h],
          x
        ),
        className: Ne('chakra-divider', d),
      })
    );
  });
fe && (LI.displayName = 'Divider');
var zI = ['direction', 'align', 'justify', 'wrap', 'basis', 'grow', 'shrink'],
  Is = le(function (e, t) {
    var r = e.direction,
      n = e.align,
      i = e.justify,
      o = e.wrap,
      a = e.basis,
      l = e.grow,
      s = e.shrink,
      u = ze(e, zI),
      c = {
        display: 'flex',
        flexDirection: r,
        alignItems: n,
        justifyContent: i,
        flexWrap: o,
        flexBasis: a,
        flexGrow: l,
        flexShrink: s,
      };
    return y.exports.createElement(ee.div, ie({ ref: t, __css: c }, u));
  });
fe && (Is.displayName = 'Flex');
var NI = [
    'templateAreas',
    'gap',
    'rowGap',
    'columnGap',
    'column',
    'row',
    'autoFlow',
    'autoRows',
    'templateRows',
    'autoColumns',
    'templateColumns',
  ],
  tS = le(function (e, t) {
    var r = e.templateAreas,
      n = e.gap,
      i = e.rowGap,
      o = e.columnGap,
      a = e.column,
      l = e.row,
      s = e.autoFlow,
      u = e.autoRows,
      c = e.templateRows,
      f = e.autoColumns,
      d = e.templateColumns,
      p = ze(e, NI),
      h = {
        display: 'grid',
        gridTemplateAreas: r,
        gridGap: n,
        gridRowGap: i,
        gridColumnGap: o,
        gridAutoColumns: f,
        gridColumn: a,
        gridRow: l,
        gridAutoFlow: s,
        gridAutoRows: u,
        gridTemplateRows: c,
        gridTemplateColumns: d,
      };
    return y.exports.createElement(ee.div, ie({ ref: t, __css: h }, p));
  });
fe && (tS.displayName = 'Grid');
var FI = ['className'],
  rS = le(function (e, t) {
    var r = nr('Heading', e),
      n = bt(e);
    n.className;
    var i = ze(n, FI);
    return y.exports.createElement(
      ee.h2,
      ie({ ref: t, className: Ne('chakra-heading', e.className) }, i, {
        __css: r,
      })
    );
  });
fe && (rS.displayName = 'Heading');
var DI = ['className'],
  BI = le(function (e, t) {
    var r = nr('Kbd', e),
      n = bt(e),
      i = n.className,
      o = ze(n, DI);
    return y.exports.createElement(
      ee.kbd,
      ie({ ref: t, className: Ne('chakra-kbd', i) }, o, {
        __css: ie({ fontFamily: 'mono' }, r),
      })
    );
  });
fe && (BI.displayName = 'Kbd');
var VI = ['className', 'isExternal'],
  jI = le(function (e, t) {
    var r = nr('Link', e),
      n = bt(e),
      i = n.className,
      o = n.isExternal,
      a = ze(n, VI);
    return y.exports.createElement(
      ee.a,
      ie(
        {
          target: o ? '_blank' : void 0,
          rel: o ? 'noopener' : void 0,
          ref: t,
          className: Ne('chakra-link', i),
        },
        a,
        { __css: r }
      )
    );
  });
fe && (jI.displayName = 'Link');
var WI = ['children', 'styleType', 'stylePosition', 'spacing'],
  HI = ['as'],
  UI = ['as'],
  nS = Yi({
    name: 'StylesContext',
    errorMessage:
      'useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` ',
  }),
  YI = nS[0],
  iS = nS[1],
  lh = le(function (e, t) {
    var r,
      n = Mp('List', e),
      i = bt(e),
      o = i.children,
      a = i.styleType,
      l = a === void 0 ? 'none' : a,
      s = i.stylePosition,
      u = i.spacing,
      c = ze(i, WI),
      f = L1(o),
      d = '& > *:not(style) ~ *:not(style)',
      p = u ? ((r = {}), (r[d] = { mt: u }), r) : {};
    return y.exports.createElement(
      YI,
      { value: n },
      y.exports.createElement(
        ee.ul,
        ie(
          {
            ref: t,
            listStyleType: l,
            listStylePosition: s,
            role: 'list',
            __css: ie({}, n.container, p),
          },
          c
        ),
        f
      )
    );
  });
fe && (lh.displayName = 'List');
var GI = le(function (e, t) {
  e.as;
  var r = ze(e, HI);
  return y.exports.createElement(
    lh,
    ie({ ref: t, as: 'ol', styleType: 'decimal', marginStart: '1em' }, r)
  );
});
fe && (GI.displayName = 'OrderedList');
var KI = le(function (e, t) {
  e.as;
  var r = ze(e, UI);
  return y.exports.createElement(
    lh,
    ie({ ref: t, as: 'ul', styleType: 'initial', marginStart: '1em' }, r)
  );
});
fe && (KI.displayName = 'UnorderedList');
var XI = le(function (e, t) {
  var r = iS();
  return y.exports.createElement(ee.li, ie({ ref: t }, e, { __css: r.item }));
});
fe && (XI.displayName = 'ListItem');
var QI = le(function (e, t) {
  var r = iS();
  return y.exports.createElement(
    _t,
    ie({ ref: t, role: 'presentation' }, e, { __css: r.icon })
  );
});
fe && (QI.displayName = 'ListIcon');
var ZI = ['columns', 'spacingX', 'spacingY', 'spacing', 'minChildWidth'],
  qI = le(function (e, t) {
    var r = e.columns,
      n = e.spacingX,
      i = e.spacingY,
      o = e.spacing,
      a = e.minChildWidth,
      l = ze(e, ZI),
      s = a ? eL(a) : tL(r);
    return y.exports.createElement(
      tS,
      ie({ ref: t, gap: o, columnGap: n, rowGap: i, templateColumns: s }, l)
    );
  });
fe && (qI.displayName = 'SimpleGrid');
function JI(e) {
  return _i(e) ? e + 'px' : e;
}
function eL(e) {
  return Wn(e, function (t) {
    return M1(t) ? null : 'repeat(auto-fit, minmax(' + JI(t) + ', 1fr))';
  });
}
function tL(e) {
  return Wn(e, function (t) {
    return M1(t) ? null : 'repeat(' + t + ', minmax(0, 1fr))';
  });
}
var sh = ee('div', {
  baseStyle: { flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
});
fe && (sh.displayName = 'Spacer');
var bd = '& > *:not(style) ~ *:not(style)';
function rL(e) {
  var t,
    r = e.spacing,
    n = e.direction,
    i = {
      column: { marginTop: r, marginEnd: 0, marginBottom: 0, marginStart: 0 },
      row: { marginTop: 0, marginEnd: 0, marginBottom: 0, marginStart: r },
      'column-reverse': {
        marginTop: 0,
        marginEnd: 0,
        marginBottom: r,
        marginStart: 0,
      },
      'row-reverse': {
        marginTop: 0,
        marginEnd: r,
        marginBottom: 0,
        marginStart: 0,
      },
    };
  return (
    (t = { flexDirection: n }),
    (t[bd] = Wn(n, function (o) {
      return i[o];
    })),
    t
  );
}
function nL(e) {
  var t = e.spacing,
    r = e.direction,
    n = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: '1px' },
      'column-reverse': {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: '1px',
      },
      row: { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
      'row-reverse': {
        mx: t,
        my: 0,
        borderLeftWidth: '1px',
        borderBottomWidth: 0,
      },
    };
  return {
    '&': Wn(r, function (i) {
      return n[i];
    }),
  };
}
var iL = [
    'isInline',
    'direction',
    'align',
    'justify',
    'spacing',
    'wrap',
    'children',
    'divider',
    'className',
    'shouldWrapChildren',
  ],
  oL = function (t) {
    return y.exports.createElement(
      ee.div,
      ie({ className: 'chakra-stack__item' }, t, {
        __css: ie(
          { display: 'inline-block', flex: '0 0 auto', minWidth: 0 },
          t.__css
        ),
      })
    );
  },
  uh = le(function (e, t) {
    var r,
      n = e.isInline,
      i = e.direction,
      o = e.align,
      a = e.justify,
      l = e.spacing,
      s = l === void 0 ? '0.5rem' : l,
      u = e.wrap,
      c = e.children,
      f = e.divider,
      d = e.className,
      p = e.shouldWrapChildren,
      h = ze(e, iL),
      x = n ? 'row' : i != null ? i : 'column',
      w = y.exports.useMemo(
        function () {
          return rL({ direction: x, spacing: s });
        },
        [x, s]
      ),
      m = y.exports.useMemo(
        function () {
          return nL({ spacing: s, direction: x });
        },
        [s, x]
      ),
      v = !!f,
      g = !p && !v,
      S = L1(c),
      _ = g
        ? S
        : S.map(function (T, E) {
            var R = typeof T.key != 'undefined' ? T.key : E,
              M = E + 1 === S.length,
              K = y.exports.createElement(oL, { key: R }, T),
              J = p ? K : T;
            if (!v) return J;
            var B = y.exports.cloneElement(f, { __css: m }),
              N = M ? null : B;
            return y.exports.createElement(
              y.exports.Fragment,
              { key: R },
              J,
              N
            );
          }),
      P = Ne('chakra-stack', d);
    return y.exports.createElement(
      ee.div,
      ie(
        {
          ref: t,
          display: 'flex',
          alignItems: o,
          justifyContent: a,
          flexDirection: w.flexDirection,
          flexWrap: u,
          className: P,
          __css: v ? {} : ((r = {}), (r[bd] = w[bd]), r),
        },
        h
      ),
      _
    );
  });
fe && (uh.displayName = 'Stack');
var aL = le(function (e, t) {
  return y.exports.createElement(
    uh,
    ie({ align: 'center' }, e, { direction: 'row', ref: t })
  );
});
fe && (aL.displayName = 'HStack');
var lL = le(function (e, t) {
  return y.exports.createElement(
    uh,
    ie({ align: 'center' }, e, { direction: 'column', ref: t })
  );
});
fe && (lL.displayName = 'VStack');
var sL = ['className', 'align', 'decoration', 'casing'],
  Ls = le(function (e, t) {
    var r = nr('Text', e),
      n = bt(e);
    n.className, n.align, n.decoration, n.casing;
    var i = ze(n, sL),
      o = _p({
        textAlign: e.align,
        textDecoration: e.decoration,
        textTransform: e.casing,
      });
    return y.exports.createElement(
      ee.p,
      ie({ ref: t, className: Ne('chakra-text', e.className) }, o, i, {
        __css: r,
      })
    );
  });
fe && (Ls.displayName = 'Text');
var uL = [
    'spacing',
    'spacingX',
    'spacingY',
    'children',
    'justify',
    'direction',
    'align',
    'className',
    'shouldWrapChildren',
  ],
  cL = ['className'];
function G0(e) {
  return typeof e == 'number' ? e + 'px' : e;
}
var fL = le(function (e, t) {
  var r = e.spacing,
    n = r === void 0 ? '0.5rem' : r,
    i = e.spacingX,
    o = e.spacingY,
    a = e.children,
    l = e.justify,
    s = e.direction,
    u = e.align,
    c = e.className,
    f = e.shouldWrapChildren,
    d = ze(e, uL),
    p = y.exports.useMemo(
      function () {
        var x = { spacingX: i, spacingY: o },
          w = x.spacingX,
          m = w === void 0 ? n : w,
          v = x.spacingY,
          g = v === void 0 ? n : v;
        return {
          '--chakra-wrap-x-spacing': function (_) {
            return Wn(m, function (P) {
              return G0(jf('space', P)(_));
            });
          },
          '--chakra-wrap-y-spacing': function (_) {
            return Wn(g, function (P) {
              return G0(jf('space', P)(_));
            });
          },
          '--wrap-x-spacing': 'calc(var(--chakra-wrap-x-spacing) / 2)',
          '--wrap-y-spacing': 'calc(var(--chakra-wrap-y-spacing) / 2)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: l,
          alignItems: u,
          flexDirection: s,
          listStyleType: 'none',
          padding: '0',
          margin:
            'calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)',
          '& > *:not(style)': {
            margin: 'var(--wrap-y-spacing) var(--wrap-x-spacing)',
          },
        };
      },
      [n, i, o, l, u, s]
    ),
    h = f
      ? y.exports.Children.map(a, function (x, w) {
          return y.exports.createElement(oS, { key: w }, x);
        })
      : a;
  return y.exports.createElement(
    ee.div,
    ie({ ref: t, className: Ne('chakra-wrap', c), overflow: 'hidden' }, d),
    y.exports.createElement(
      ee.ul,
      { className: 'chakra-wrap__list', __css: p },
      h
    )
  );
});
fe && (fL.displayName = 'Wrap');
var oS = le(function (e, t) {
  var r = e.className,
    n = ze(e, cL);
  return y.exports.createElement(
    ee.li,
    ie(
      {
        ref: t,
        __css: { display: 'flex', alignItems: 'flex-start' },
        className: Ne('chakra-wrap__listitem', r),
      },
      n
    )
  );
});
fe && (oS.displayName = 'WrapItem');
function zs() {
  return (
    (zs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    zs.apply(this, arguments)
  );
}
var aS = le(function (e, t) {
  var r = Mp('Tag', e),
    n = bt(e),
    i = zs(
      {
        display: 'inline-flex',
        verticalAlign: 'top',
        alignItems: 'center',
        maxWidth: '100%',
      },
      r.container
    );
  return y.exports.createElement(
    q1,
    { value: r },
    y.exports.createElement(ee.span, zs({ ref: t }, n, { __css: i }))
  );
});
function dL(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var pL = ['children', 'toastOptions'],
  lS = function (t) {
    var r = t.children,
      n = t.toastOptions,
      i = dL(t, pL);
    return y.exports.createElement(WE, i, r, y.exports.createElement(uI, n));
  };
lS.defaultProps = { theme: B6 };
var hL = '/SpaceX-Missions-Search/assets/logo-spacex.c1752481.png',
  sS = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  K0 = pr.createContext && pr.createContext(sS),
  cn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (cn =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        cn.apply(this, arguments)
      );
    },
  vL =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          t.indexOf(n) < 0 &&
          (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
          t.indexOf(n[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
            (r[n[i]] = e[n[i]]);
      return r;
    };
function uS(e) {
  return (
    e &&
    e.map(function (t, r) {
      return pr.createElement(t.tag, cn({ key: r }, t.attr), uS(t.child));
    })
  );
}
function yn(e) {
  return function (t) {
    return pr.createElement(mL, cn({ attr: cn({}, e.attr) }, t), uS(e.child));
  };
}
function mL(e) {
  var t = function (r) {
    var n = e.attr,
      i = e.size,
      o = e.title,
      a = vL(e, ['attr', 'size', 'title']),
      l = i || r.size || '1em',
      s;
    return (
      r.className && (s = r.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      pr.createElement(
        'svg',
        cn(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          r.attr,
          n,
          a,
          {
            className: s,
            style: cn(cn({ color: e.color || r.color }, r.style), e.style),
            height: l,
            width: l,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        o && pr.createElement('title', null, o),
        e.children
      )
    );
  };
  return K0 !== void 0
    ? pr.createElement(K0.Consumer, null, function (r) {
        return t(r);
      })
    : t(sS);
}
function gL(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z',
          clipRule: 'evenodd',
        },
      },
    ],
  })(e);
}
function yL(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z',
          clipRule: 'evenodd',
        },
      },
    ],
  })(e);
}
var ch = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })(ri, function () {
    var r = 1e3,
      n = 6e4,
      i = 36e5,
      o = 'millisecond',
      a = 'second',
      l = 'minute',
      s = 'hour',
      u = 'day',
      c = 'week',
      f = 'month',
      d = 'quarter',
      p = 'year',
      h = 'date',
      x = 'Invalid Date',
      w =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      m =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      v = {
        name: 'en',
        weekdays:
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
      },
      g = function (B, N, I) {
        var X = String(B);
        return !X || X.length >= N
          ? B
          : '' + Array(N + 1 - X.length).join(I) + B;
      },
      S = {
        s: g,
        z: function (B) {
          var N = -B.utcOffset(),
            I = Math.abs(N),
            X = Math.floor(I / 60),
            V = I % 60;
          return (N <= 0 ? '+' : '-') + g(X, 2, '0') + ':' + g(V, 2, '0');
        },
        m: function B(N, I) {
          if (N.date() < I.date()) return -B(I, N);
          var X = 12 * (I.year() - N.year()) + (I.month() - N.month()),
            V = N.clone().add(X, f),
            $ = I - V < 0,
            z = N.clone().add(X + ($ ? -1 : 1), f);
          return +(-(X + (I - V) / ($ ? V - z : z - V)) || 0);
        },
        a: function (B) {
          return B < 0 ? Math.ceil(B) || 0 : Math.floor(B);
        },
        p: function (B) {
          return (
            { M: f, y: p, w: c, d: u, D: h, h: s, m: l, s: a, ms: o, Q: d }[
              B
            ] ||
            String(B || '')
              .toLowerCase()
              .replace(/s$/, '')
          );
        },
        u: function (B) {
          return B === void 0;
        },
      },
      _ = 'en',
      P = {};
    P[_] = v;
    var T = function (B) {
        return B instanceof K;
      },
      E = function B(N, I, X) {
        var V;
        if (!N) return _;
        if (typeof N == 'string') {
          var $ = N.toLowerCase();
          P[$] && (V = $), I && ((P[$] = I), (V = $));
          var z = N.split('-');
          if (!V && z.length > 1) return B(z[0]);
        } else {
          var W = N.name;
          (P[W] = N), (V = W);
        }
        return !X && V && (_ = V), V || (!X && _);
      },
      R = function (B, N) {
        if (T(B)) return B.clone();
        var I = typeof N == 'object' ? N : {};
        return (I.date = B), (I.args = arguments), new K(I);
      },
      M = S;
    (M.l = E),
      (M.i = T),
      (M.w = function (B, N) {
        return R(B, { locale: N.$L, utc: N.$u, x: N.$x, $offset: N.$offset });
      });
    var K = (function () {
        function B(I) {
          (this.$L = E(I.locale, null, !0)), this.parse(I);
        }
        var N = B.prototype;
        return (
          (N.parse = function (I) {
            (this.$d = (function (X) {
              var V = X.date,
                $ = X.utc;
              if (V === null) return new Date(NaN);
              if (M.u(V)) return new Date();
              if (V instanceof Date) return new Date(V);
              if (typeof V == 'string' && !/Z$/i.test(V)) {
                var z = V.match(w);
                if (z) {
                  var W = z[2] - 1 || 0,
                    Z = (z[7] || '0').substring(0, 3);
                  return $
                    ? new Date(
                        Date.UTC(
                          z[1],
                          W,
                          z[3] || 1,
                          z[4] || 0,
                          z[5] || 0,
                          z[6] || 0,
                          Z
                        )
                      )
                    : new Date(
                        z[1],
                        W,
                        z[3] || 1,
                        z[4] || 0,
                        z[5] || 0,
                        z[6] || 0,
                        Z
                      );
                }
              }
              return new Date(V);
            })(I)),
              (this.$x = I.x || {}),
              this.init();
          }),
          (N.init = function () {
            var I = this.$d;
            (this.$y = I.getFullYear()),
              (this.$M = I.getMonth()),
              (this.$D = I.getDate()),
              (this.$W = I.getDay()),
              (this.$H = I.getHours()),
              (this.$m = I.getMinutes()),
              (this.$s = I.getSeconds()),
              (this.$ms = I.getMilliseconds());
          }),
          (N.$utils = function () {
            return M;
          }),
          (N.isValid = function () {
            return this.$d.toString() !== x;
          }),
          (N.isSame = function (I, X) {
            var V = R(I);
            return this.startOf(X) <= V && V <= this.endOf(X);
          }),
          (N.isAfter = function (I, X) {
            return R(I) < this.startOf(X);
          }),
          (N.isBefore = function (I, X) {
            return this.endOf(X) < R(I);
          }),
          (N.$g = function (I, X, V) {
            return M.u(I) ? this[X] : this.set(V, I);
          }),
          (N.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (N.valueOf = function () {
            return this.$d.getTime();
          }),
          (N.startOf = function (I, X) {
            var V = this,
              $ = !!M.u(X) || X,
              z = M.p(I),
              W = function (Ge, Oe) {
                var Ot = M.w(
                  V.$u ? Date.UTC(V.$y, Oe, Ge) : new Date(V.$y, Oe, Ge),
                  V
                );
                return $ ? Ot : Ot.endOf(u);
              },
              Z = function (Ge, Oe) {
                return M.w(
                  V.toDate()[Ge].apply(
                    V.toDate('s'),
                    ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Oe)
                  ),
                  V
                );
              },
              Q = this.$W,
              j = this.$M,
              D = this.$D,
              G = 'set' + (this.$u ? 'UTC' : '');
            switch (z) {
              case p:
                return $ ? W(1, 0) : W(31, 11);
              case f:
                return $ ? W(1, j) : W(0, j + 1);
              case c:
                var re = this.$locale().weekStart || 0,
                  Be = (Q < re ? Q + 7 : Q) - re;
                return W($ ? D - Be : D + (6 - Be), j);
              case u:
              case h:
                return Z(G + 'Hours', 0);
              case s:
                return Z(G + 'Minutes', 1);
              case l:
                return Z(G + 'Seconds', 2);
              case a:
                return Z(G + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (N.endOf = function (I) {
            return this.startOf(I, !1);
          }),
          (N.$set = function (I, X) {
            var V,
              $ = M.p(I),
              z = 'set' + (this.$u ? 'UTC' : ''),
              W = ((V = {}),
              (V[u] = z + 'Date'),
              (V[h] = z + 'Date'),
              (V[f] = z + 'Month'),
              (V[p] = z + 'FullYear'),
              (V[s] = z + 'Hours'),
              (V[l] = z + 'Minutes'),
              (V[a] = z + 'Seconds'),
              (V[o] = z + 'Milliseconds'),
              V)[$],
              Z = $ === u ? this.$D + (X - this.$W) : X;
            if ($ === f || $ === p) {
              var Q = this.clone().set(h, 1);
              Q.$d[W](Z),
                Q.init(),
                (this.$d = Q.set(h, Math.min(this.$D, Q.daysInMonth())).$d);
            } else W && this.$d[W](Z);
            return this.init(), this;
          }),
          (N.set = function (I, X) {
            return this.clone().$set(I, X);
          }),
          (N.get = function (I) {
            return this[M.p(I)]();
          }),
          (N.add = function (I, X) {
            var V,
              $ = this;
            I = Number(I);
            var z = M.p(X),
              W = function (j) {
                var D = R($);
                return M.w(D.date(D.date() + Math.round(j * I)), $);
              };
            if (z === f) return this.set(f, this.$M + I);
            if (z === p) return this.set(p, this.$y + I);
            if (z === u) return W(1);
            if (z === c) return W(7);
            var Z = ((V = {}), (V[l] = n), (V[s] = i), (V[a] = r), V)[z] || 1,
              Q = this.$d.getTime() + I * Z;
            return M.w(Q, this);
          }),
          (N.subtract = function (I, X) {
            return this.add(-1 * I, X);
          }),
          (N.format = function (I) {
            var X = this,
              V = this.$locale();
            if (!this.isValid()) return V.invalidDate || x;
            var $ = I || 'YYYY-MM-DDTHH:mm:ssZ',
              z = M.z(this),
              W = this.$H,
              Z = this.$m,
              Q = this.$M,
              j = V.weekdays,
              D = V.months,
              G = function (Oe, Ot, Xn, xn) {
                return (Oe && (Oe[Ot] || Oe(X, $))) || Xn[Ot].slice(0, xn);
              },
              re = function (Oe) {
                return M.s(W % 12 || 12, Oe, '0');
              },
              Be =
                V.meridiem ||
                function (Oe, Ot, Xn) {
                  var xn = Oe < 12 ? 'AM' : 'PM';
                  return Xn ? xn.toLowerCase() : xn;
                },
              Ge = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: Q + 1,
                MM: M.s(Q + 1, 2, '0'),
                MMM: G(V.monthsShort, Q, D, 3),
                MMMM: G(D, Q),
                D: this.$D,
                DD: M.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: G(V.weekdaysMin, this.$W, j, 2),
                ddd: G(V.weekdaysShort, this.$W, j, 3),
                dddd: j[this.$W],
                H: String(W),
                HH: M.s(W, 2, '0'),
                h: re(1),
                hh: re(2),
                a: Be(W, Z, !0),
                A: Be(W, Z, !1),
                m: String(Z),
                mm: M.s(Z, 2, '0'),
                s: String(this.$s),
                ss: M.s(this.$s, 2, '0'),
                SSS: M.s(this.$ms, 3, '0'),
                Z: z,
              };
            return $.replace(m, function (Oe, Ot) {
              return Ot || Ge[Oe] || z.replace(':', '');
            });
          }),
          (N.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (N.diff = function (I, X, V) {
            var $,
              z = M.p(X),
              W = R(I),
              Z = (W.utcOffset() - this.utcOffset()) * n,
              Q = this - W,
              j = M.m(this, W);
            return (
              (j =
                (($ = {}),
                ($[p] = j / 12),
                ($[f] = j),
                ($[d] = j / 3),
                ($[c] = (Q - Z) / 6048e5),
                ($[u] = (Q - Z) / 864e5),
                ($[s] = Q / i),
                ($[l] = Q / n),
                ($[a] = Q / r),
                $)[z] || Q),
              V ? j : M.a(j)
            );
          }),
          (N.daysInMonth = function () {
            return this.endOf(f).$D;
          }),
          (N.$locale = function () {
            return P[this.$L];
          }),
          (N.locale = function (I, X) {
            if (!I) return this.$L;
            var V = this.clone(),
              $ = E(I, X, !0);
            return $ && (V.$L = $), V;
          }),
          (N.clone = function () {
            return M.w(this.$d, this);
          }),
          (N.toDate = function () {
            return new Date(this.valueOf());
          }),
          (N.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (N.toISOString = function () {
            return this.$d.toISOString();
          }),
          (N.toString = function () {
            return this.$d.toUTCString();
          }),
          B
        );
      })(),
      J = K.prototype;
    return (
      (R.prototype = J),
      [
        ['$ms', o],
        ['$s', a],
        ['$m', l],
        ['$H', s],
        ['$W', u],
        ['$M', f],
        ['$y', p],
        ['$D', h],
      ].forEach(function (B) {
        J[B[1]] = function (N) {
          return this.$g(N, B[0], B[1]);
        };
      }),
      (R.extend = function (B, N) {
        return B.$i || (B(N, K, R), (B.$i = !0)), R;
      }),
      (R.locale = E),
      (R.isDayjs = T),
      (R.unix = function (B) {
        return R(1e3 * B);
      }),
      (R.en = P[_]),
      (R.Ls = P),
      (R.p = {}),
      R
    );
  });
})(ch);
var xL = ch.exports,
  bL = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n(ch.exports);
  })(ri, function (r) {
    function n(a) {
      return a && typeof a == 'object' && 'default' in a ? a : { default: a };
    }
    var i = n(r),
      o = {
        name: 'es',
        monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split(
          '_'
        ),
        weekdays:
          'domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado'.split(
            '_'
          ),
        weekdaysShort: 'dom._lun._mar._mi\xE9._jue._vie._s\xE1b.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_s\xE1'.split('_'),
        months:
          'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_'
          ),
        weekStart: 1,
        formats: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un d\xEDa',
          dd: '%d d\xEDas',
          M: 'un mes',
          MM: '%d meses',
          y: 'un a\xF1o',
          yy: '%d a\xF1os',
        },
        ordinal: function (a) {
          return a + '\xBA';
        },
      };
    return i.default.locale(o, null, !0), o;
  });
})(bL);
function SL(e) {
  return de(Ai, {
    bg: 'gray.100',
    p: 4,
    m: 4,
    borderRadius: 'lg',
    children: [
      de(Is, {
        children: [
          de(Ls, {
            fontSize: '2xl',
            children: [
              'Mission ',
              H('strong', { children: e.mission_name }),
              ' (',
              e.launch_year,
              ')',
            ],
          }),
          H(sh, {}),
          H(aS, {
            p: 2,
            colorScheme: e.launch_success ? 'green' : 'red',
            children: e.launch_success ? 'Success' : 'Failure',
          }),
        ],
      }),
      de(Is, {
        align: 'center',
        children: [
          H(_t, { as: gL, color: 'gray.500' }),
          H(Ls, {
            fontSize: 'sm',
            ml: 1,
            color: 'gray.500',
            children: xL(e.launch_date_local)
              .locale('es')
              .format('D MMMM, YYYY'),
          }),
        ],
      }),
      H(f1, {
        to: `/launch/${e.id}`,
        children: H(bI, {
          mt: 2,
          colorScheme: 'blue',
          children: 'More Details',
        }),
      }),
    ],
  });
}
function cS() {
  return H(Un, {
    children: de('div', {
      className: 'moon',
      children: [
        H('img', {
          src: 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png',
          className: 'loader',
        }),
        de('ul', {
          children: [
            H('li', {}),
            H('li', {}),
            H('li', {}),
            H('li', {}),
            H('li', {}),
            H('li', {}),
            H('li', {}),
          ],
        }),
      ],
    }),
  });
}
function X0(e) {
  return H(Un, {
    children:
      e.rockets.length === 0
        ? H(cS, {})
        : H('section', {
            children: e.rockets.map((t) => H(SL, ju({}, t), t.id)),
          }),
  });
}
function wL(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z',
        },
      },
    ],
  })(e);
}
function kL(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 192 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z',
        },
      },
    ],
  })(e);
}
function CL(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z',
        },
      },
    ],
  })(e);
}
function _L(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
        },
      },
    ],
  })(e);
}
function EL(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z',
        },
      },
    ],
  })(e);
}
function TL(e) {
  return yn({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z',
        },
      },
    ],
  })(e);
}
var Cl,
  PL = new Uint8Array(16);
function RL() {
  if (
    !Cl &&
    ((Cl =
      (typeof crypto != 'undefined' &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto != 'undefined' &&
        typeof msCrypto.getRandomValues == 'function' &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !Cl)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    );
  return Cl(PL);
}
var AL =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function ML(e) {
  return typeof e == 'string' && AL.test(e);
}
var Xe = [];
for (var Vc = 0; Vc < 256; ++Vc) Xe.push((Vc + 256).toString(16).substr(1));
function $L(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = (
      Xe[e[t + 0]] +
      Xe[e[t + 1]] +
      Xe[e[t + 2]] +
      Xe[e[t + 3]] +
      '-' +
      Xe[e[t + 4]] +
      Xe[e[t + 5]] +
      '-' +
      Xe[e[t + 6]] +
      Xe[e[t + 7]] +
      '-' +
      Xe[e[t + 8]] +
      Xe[e[t + 9]] +
      '-' +
      Xe[e[t + 10]] +
      Xe[e[t + 11]] +
      Xe[e[t + 12]] +
      Xe[e[t + 13]] +
      Xe[e[t + 14]] +
      Xe[e[t + 15]]
    ).toLowerCase();
  if (!ML(r)) throw TypeError('Stringified UUID is invalid');
  return r;
}
function OL(e, t, r) {
  e = e || {};
  var n = e.random || (e.rng || RL)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t)) {
    r = r || 0;
    for (var i = 0; i < 16; ++i) t[r + i] = n[i];
    return t;
  }
  return $L(n);
}
const IL = 'https://api.spacexdata.com/v3';
async function LL() {
  try {
    const t = await (await fetch(`${IL}/launches`)).json();
    return t.map((r) => ((r.id = OL()), console.log('viendo', r), r)), t;
  } catch (e) {
    console.error(e);
  }
}
function fS() {
  return H('p', {
    className: 'pageerror',
    children:
      '\u{1F4A3}\u{1F4BB} The URL you entered is not valid. Try again.\u{1F609}',
  });
}
function zL(e) {
  var i, o, a, l, s, u;
  const [t, r] = y.exports.useState({}),
    { launchId: n } = xC();
  return (
    y.exports.useEffect(() => {
      r(e.dataRockets.find((c) => c.id == n));
    }, [n]),
    t.mission_name === void 0
      ? H(fS, {})
      : H(Ai, {
          className: 'box',
          children: H(Ai, {
            className: 'box__details',
            bg: 'gray.100',
            p: 4,
            m: 4,
            borderRadius: 'lg',
            children: t
              ? de(Un, {
                  children: [
                    de(Is, {
                      children: [
                        de(Ls, {
                          className: 'mission',
                          fontSize: '2xl',
                          children: [
                            'Mission ',
                            H('strong', { children: t.mission_name }),
                            ' (',
                            t.launch_year,
                            ')',
                          ],
                        }),
                        H(sh, {}),
                        H(aS, {
                          p: 2,
                          colorScheme: t.launch_success ? 'green' : 'red',
                          children: t.launch_success ? 'Success' : 'Failure',
                        }),
                      ],
                    }),
                    de(Ai, {
                      children: [
                        H('div', {
                          className: 'div_img',
                          children: H('img', {
                            className: 'mission__img',
                            src:
                              (i = t.links) == null
                                ? void 0
                                : i.mission_patch_small,
                            alt: 'mission path',
                          }),
                        }),
                        de('div', {
                          className: 'box_icon',
                          children: [
                            H(_t, {
                              className: 'box_icon__icon',
                              as: CL,
                              color: 'gray.500',
                            }),
                            de('h2', {
                              className: 'mission__title',
                              children: [
                                H('span', {
                                  className: 'mission__span',
                                  children: 'Rocket Name:',
                                }),
                                ' ',
                                (o = t.rocket) == null ? void 0 : o.rocket_name,
                              ],
                            }),
                          ],
                        }),
                        de('div', {
                          className: 'box_icon',
                          children: [
                            H(_t, {
                              className: 'box_icon__icon',
                              as: EL,
                              color: 'gray.500',
                            }),
                            de('h2', {
                              className: 'mission__title',
                              children: [
                                H('span', {
                                  className: 'mission__span',
                                  children: 'Type:',
                                }),
                                ' ',
                                (a = t.rocket) == null ? void 0 : a.rocket_type,
                              ],
                            }),
                          ],
                        }),
                        de('div', {
                          className: 'box_icon',
                          children: [
                            H(_t, {
                              className: 'box_icon__icon',
                              as: wL,
                              color: 'gray.500',
                            }),
                            de('h2', {
                              children: [
                                H('span', {
                                  className: 'mission__span',
                                  children: 'Nationality:',
                                }),
                                ' ',
                                (l = t.rocket) == null
                                  ? void 0
                                  : l.second_stage.payloads[0].nationality,
                              ],
                            }),
                          ],
                        }),
                        de('div', {
                          className: 'box_icon',
                          children: [
                            H(_t, {
                              className: 'box_icon__icon',
                              as: _L,
                              color: 'gray.500',
                            }),
                            de('h2', {
                              className: 'mission__title',
                              children: [
                                H('span', {
                                  className: 'mission__span',
                                  children: 'Details:',
                                }),
                                ' ',
                                t.details,
                              ],
                            }),
                          ],
                        }),
                        de('nav', {
                          className: 'mission__nav',
                          children: [
                            de('div', {
                              className: 'box_icon',
                              children: [
                                H(_t, {
                                  className: 'box_icon__icon2',
                                  as: kL,
                                  color: 'gray.500',
                                }),
                                H('a', {
                                  className: 'mission__span',
                                  href:
                                    (s = t.links) == null
                                      ? void 0
                                      : s.wikipedia,
                                  target: '_blank',
                                  alt: 'link to wiki info',
                                  title: 'link to wiki info',
                                  children: 'See more info',
                                }),
                              ],
                            }),
                            de('div', {
                              className: 'box_icon',
                              children: [
                                H(_t, {
                                  className: 'box_icon__icon2',
                                  as: TL,
                                  color: 'gray.500',
                                }),
                                H('a', {
                                  className: 'mission__span',
                                  href:
                                    (u = t.links) == null
                                      ? void 0
                                      : u.video_link,
                                  target: '_blank',
                                  alt: 'link to youtube video',
                                  title: 'link to youtube video',
                                  children: 'See video',
                                }),
                              ],
                            }),
                          ],
                        }),
                        H('div', {
                          className: 'divbtn',
                          children: H(f1, {
                            className: 'divbtn__backbtn',
                            to: '/',
                            title: 'Volver al inicio',
                            children: 'Back',
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : H(cS, {}),
          }),
        })
  );
}
const dS = (e) => {
  const t = (r) => {
    e.handleFunction(r.target.value);
  };
  return de(Un, {
    children: [
      H('label', {
        className: e.labelClassName,
        htmlFor: e.labelId,
        children: e.labelText,
      }),
      H('input', {
        className: e.inputClassName,
        type: e.inputType,
        name: e.inputName,
        id: e.id,
        value: e.inputValue,
        onChange: t,
        placeholder: e.inputPlaceholder,
      }),
    ],
  });
};
dS.defaultProps = { inputType: 'text', placeholder: '' };
function NL(e) {
  return de('fieldset', {
    className: 'fieldset',
    children: [
      H(_t, { as: yL, color: 'gray.500', className: 'search' }),
      H(dS, {
        labelId: 'name',
        inputClassName: 'fieldset__input',
        inputType: 'search',
        inputName: 'name',
        id: 'name',
        inputValue: e.filterRocket,
        inputPlaceholder: 'Search by name',
        handleFunction: e.handleFilterRocket,
      }),
    ],
  });
}
const FL = (e) =>
  H(Un, {
    children: H('div', {
      className: 'resetbtn',
      children: H('button', {
        title: 'Reset',
        className: 'resetbtn__btn',
        onClick: (r) => {
          r.preventDefault(), e.resetInputs();
        },
        children: 'Reset',
      }),
    }),
  });
function DL(e) {
  return H('section', {
    children: de('form', {
      className: 'form',
      onSubmit: e.handleSubmit,
      children: [
        H(NL, {
          handleFilterRocket: e.handleFilterRocket,
          filterRocket: e.filterRocket,
        }),
        H(FL, { resetInputs: e.resetInputs }),
      ],
    }),
  });
}
const BL = (e, t) => {
    const r = localStorage.getItem(e);
    return r === null ? t : JSON.parse(r);
  },
  VL = (e, t) => {
    localStorage.setItem(e, JSON.stringify(t));
  },
  Q0 = { get: BL, set: VL };
function jL() {
  const [e, t] = y.exports.useState(Q0.get('rockets', [])),
    [r, n] = y.exports.useState('');
  y.exports.useEffect(() => {
    e.length === 0 &&
      LL().then((u) => {
        t(u);
      });
  }, []),
    y.exports.useEffect(() => {
      Q0.set('rockets', e);
    }, [e]);
  const i = (u) => {
      u.preventDefault();
    },
    o = (u) => {
      n(u);
    },
    a = e
      .sort((u, c) => u.mission_name.localeCompare(c.mission_name))
      .filter((u) =>
        u.mission_name.toLowerCase().includes(r.toLocaleLowerCase())
      );
  return de(Un, {
    children: [
      H(Jb, { m: 4, src: hL, width: 300 }),
      de(kC, {
        children: [
          H(zl, {
            path: '/',
            element: de(Un, {
              children: [
                H(rS, {
                  align: 'center',
                  as: 'h1',
                  size: 'lg',
                  m: 4,
                  children: 'SpaceX Launches',
                }),
                H(DL, {
                  handleSubmit: i,
                  handleFilterRocket: o,
                  filterRocket: r,
                  resetInputs: () => {
                    n('');
                  },
                }),
                (() =>
                  r !== '' && a.length === 0
                    ? H('section', {
                        className: 'section',
                        children: H('div', {
                          className: 'section__diverror',
                          children: de('p', {
                            className: 'section__diverror--msn',
                            children: [
                              'Ups! \u{1F605} "',
                              r,
                              '" does not exist, try another rocket.',
                            ],
                          }),
                        }),
                      })
                    : H(X0, { rockets: a }))(),
                H(X0, { rockets: a }),
              ],
            }),
          }),
          H(zl, {
            path: 'launch/:launchId',
            element: H(zL, { dataRockets: e }),
          }),
          H(zl, { path: '*', element: H(fS, {}) }),
        ],
      }),
    ],
  });
}
const WL = document.getElementById('root'),
  HL = o1(WL);
HL.render(H(EC, { children: H(lS, { children: H(jL, {}) }) }));
