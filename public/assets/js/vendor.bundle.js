(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [
    function (e, t, i) {
      "use strict";
      i.d(t, "a", function () {
        return gi;
      }),
        i.d(t, "b", function () {
          return hi;
        });
      var s = {};
      i.r(s),
        i.d(s, "top", function () {
          return n;
        }),
        i.d(s, "bottom", function () {
          return o;
        }),
        i.d(s, "right", function () {
          return r;
        }),
        i.d(s, "left", function () {
          return a;
        }),
        i.d(s, "auto", function () {
          return l;
        }),
        i.d(s, "basePlacements", function () {
          return c;
        }),
        i.d(s, "start", function () {
          return u;
        }),
        i.d(s, "end", function () {
          return h;
        }),
        i.d(s, "clippingParents", function () {
          return d;
        }),
        i.d(s, "viewport", function () {
          return p;
        }),
        i.d(s, "popper", function () {
          return m;
        }),
        i.d(s, "reference", function () {
          return f;
        }),
        i.d(s, "variationPlacements", function () {
          return g;
        }),
        i.d(s, "placements", function () {
          return b;
        }),
        i.d(s, "beforeRead", function () {
          return y;
        }),
        i.d(s, "read", function () {
          return v;
        }),
        i.d(s, "afterRead", function () {
          return w;
        }),
        i.d(s, "beforeMain", function () {
          return _;
        }),
        i.d(s, "main", function () {
          return k;
        }),
        i.d(s, "afterMain", function () {
          return T;
        }),
        i.d(s, "beforeWrite", function () {
          return E;
        }),
        i.d(s, "write", function () {
          return C;
        }),
        i.d(s, "afterWrite", function () {
          return A;
        }),
        i.d(s, "modifierPhases", function () {
          return S;
        }),
        i.d(s, "applyStyles", function () {
          return D;
        }),
        i.d(s, "arrow", function () {
          return J;
        }),
        i.d(s, "computeStyles", function () {
          return ee;
        }),
        i.d(s, "eventListeners", function () {
          return ie;
        }),
        i.d(s, "flip", function () {
          return be;
        }),
        i.d(s, "hide", function () {
          return we;
        }),
        i.d(s, "offset", function () {
          return _e;
        }),
        i.d(s, "popperOffsets", function () {
          return ke;
        }),
        i.d(s, "preventOverflow", function () {
          return Te;
        }),
        i.d(s, "popperGenerator", function () {
          return xe;
        }),
        i.d(s, "detectOverflow", function () {
          return ge;
        }),
        i.d(s, "createPopperBase", function () {
          return Le;
        }),
        i.d(s, "createPopper", function () {
          return Oe;
        }),
        i.d(s, "createPopperLite", function () {
          return Pe;
        });
      var n = "top",
        o = "bottom",
        r = "right",
        a = "left",
        l = "auto",
        c = [n, o, r, a],
        u = "start",
        h = "end",
        d = "clippingParents",
        p = "viewport",
        m = "popper",
        f = "reference",
        g = c.reduce(function (e, t) {
          return e.concat([t + "-" + u, t + "-" + h]);
        }, []),
        b = [].concat(c, [l]).reduce(function (e, t) {
          return e.concat([t, t + "-" + u, t + "-" + h]);
        }, []),
        y = "beforeRead",
        v = "read",
        w = "afterRead",
        _ = "beforeMain",
        k = "main",
        T = "afterMain",
        E = "beforeWrite",
        C = "write",
        A = "afterWrite",
        S = [y, v, w, _, k, T, E, C, A];
      function x(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function L(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function O(e) {
        return e instanceof L(e).Element || e instanceof Element;
      }
      function P(e) {
        return e instanceof L(e).HTMLElement || e instanceof HTMLElement;
      }
      function N(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof L(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var D = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var i = t.styles[e] || {},
              s = t.attributes[e] || {},
              n = t.elements[e];
            P(n) &&
              x(n) &&
              (Object.assign(n.style, i),
              Object.keys(s).forEach(function (e) {
                var t = s[e];
                !1 === t
                  ? n.removeAttribute(e)
                  : n.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            i = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, i.popper),
            (t.styles = i),
            t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var s = t.elements[e],
                  n = t.attributes[e] || {},
                  o = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                P(s) &&
                  x(s) &&
                  (Object.assign(s.style, o),
                  Object.keys(n).forEach(function (e) {
                    s.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function M(e) {
        return e.split("-")[0];
      }
      function I(e) {
        var t = e.getBoundingClientRect();
        return {
          width: t.width,
          height: t.height,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          x: t.left,
          y: t.top,
        };
      }
      function j(e) {
        var t = I(e),
          i = e.offsetWidth,
          s = e.offsetHeight;
        return (
          Math.abs(t.width - i) <= 1 && (i = t.width),
          Math.abs(t.height - s) <= 1 && (s = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: i, height: s }
        );
      }
      function H(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && N(i)) {
          var s = t;
          do {
            if (s && e.isSameNode(s)) return !0;
            s = s.parentNode || s.host;
          } while (s);
        }
        return !1;
      }
      function R(e) {
        return L(e).getComputedStyle(e);
      }
      function B(e) {
        return ["table", "td", "th"].indexOf(x(e)) >= 0;
      }
      function q(e) {
        return ((O(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function F(e) {
        return "html" === x(e)
          ? e
          : e.assignedSlot || e.parentNode || (N(e) ? e.host : null) || q(e);
      }
      function $(e) {
        return P(e) && "fixed" !== R(e).position ? e.offsetParent : null;
      }
      function W(e) {
        for (var t = L(e), i = $(e); i && B(i) && "static" === R(i).position; )
          i = $(i);
        return i &&
          ("html" === x(i) || ("body" === x(i) && "static" === R(i).position))
          ? t
          : i ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  P(e) &&
                  "fixed" === R(e).position
                )
                  return null;
                for (
                  var i = F(e);
                  P(i) && ["html", "body"].indexOf(x(i)) < 0;

                ) {
                  var s = R(i);
                  if (
                    "none" !== s.transform ||
                    "none" !== s.perspective ||
                    "paint" === s.contain ||
                    -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                    (t && "filter" === s.willChange) ||
                    (t && s.filter && "none" !== s.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function z(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      var V = Math.max,
        U = Math.min,
        K = Math.round;
      function Y(e, t, i) {
        return V(e, U(t, i));
      }
      function X(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Q(e, t) {
        return t.reduce(function (t, i) {
          return (t[i] = e), t;
        }, {});
      }
      var J = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              i = e.state,
              s = e.name,
              l = e.options,
              u = i.elements.arrow,
              h = i.modifiersData.popperOffsets,
              d = M(i.placement),
              p = z(d),
              m = [a, r].indexOf(d) >= 0 ? "height" : "width";
            if (u && h) {
              var f = (function (e, t) {
                  return X(
                    "number" !=
                      typeof (e =
                        "function" == typeof e
                          ? e(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              })
                            )
                          : e)
                      ? e
                      : Q(e, c)
                  );
                })(l.padding, i),
                g = j(u),
                b = "y" === p ? n : a,
                y = "y" === p ? o : r,
                v =
                  i.rects.reference[m] +
                  i.rects.reference[p] -
                  h[p] -
                  i.rects.popper[m],
                w = h[p] - i.rects.reference[p],
                _ = W(u),
                k = _
                  ? "y" === p
                    ? _.clientHeight || 0
                    : _.clientWidth || 0
                  : 0,
                T = v / 2 - w / 2,
                E = f[b],
                C = k - g[m] - f[y],
                A = k / 2 - g[m] / 2 + T,
                S = Y(E, A, C),
                x = p;
              i.modifiersData[s] =
                (((t = {})[x] = S), (t.centerOffset = S - A), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              i = e.options.element,
              s = void 0 === i ? "[data-popper-arrow]" : i;
            null != s &&
              ("string" != typeof s ||
                (s = t.elements.popper.querySelector(s))) &&
              H(t.elements.popper, s) &&
              (t.elements.arrow = s);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        },
        G = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Z(e) {
        var t,
          i = e.popper,
          s = e.popperRect,
          l = e.placement,
          c = e.offsets,
          u = e.position,
          h = e.gpuAcceleration,
          d = e.adaptive,
          p = e.roundOffsets,
          m =
            !0 === p
              ? (function (e) {
                  var t = e.x,
                    i = e.y,
                    s = window.devicePixelRatio || 1;
                  return { x: K(K(t * s) / s) || 0, y: K(K(i * s) / s) || 0 };
                })(c)
              : "function" == typeof p
              ? p(c)
              : c,
          f = m.x,
          g = void 0 === f ? 0 : f,
          b = m.y,
          y = void 0 === b ? 0 : b,
          v = c.hasOwnProperty("x"),
          w = c.hasOwnProperty("y"),
          _ = a,
          k = n,
          T = window;
        if (d) {
          var E = W(i),
            C = "clientHeight",
            A = "clientWidth";
          E === L(i) &&
            "static" !== R((E = q(i))).position &&
            ((C = "scrollHeight"), (A = "scrollWidth")),
            (E = E),
            l === n && ((k = o), (y -= E[C] - s.height), (y *= h ? 1 : -1)),
            l === a && ((_ = r), (g -= E[A] - s.width), (g *= h ? 1 : -1));
        }
        var S,
          x = Object.assign({ position: u }, d && G);
        return h
          ? Object.assign(
              {},
              x,
              (((S = {})[k] = w ? "0" : ""),
              (S[_] = v ? "0" : ""),
              (S.transform =
                (T.devicePixelRatio || 1) < 2
                  ? "translate(" + g + "px, " + y + "px)"
                  : "translate3d(" + g + "px, " + y + "px, 0)"),
              S)
            )
          : Object.assign(
              {},
              x,
              (((t = {})[k] = w ? y + "px" : ""),
              (t[_] = v ? g + "px" : ""),
              (t.transform = ""),
              t)
            );
      }
      var ee = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              i = e.options,
              s = i.gpuAcceleration,
              n = void 0 === s || s,
              o = i.adaptive,
              r = void 0 === o || o,
              a = i.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: M(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: n,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                Z(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: r,
                    roundOffsets: l,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  Z(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        te = { passive: !0 };
      var ie = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              i = e.instance,
              s = e.options,
              n = s.scroll,
              o = void 0 === n || n,
              r = s.resize,
              a = void 0 === r || r,
              l = L(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              o &&
                c.forEach(function (e) {
                  e.addEventListener("scroll", i.update, te);
                }),
              a && l.addEventListener("resize", i.update, te),
              function () {
                o &&
                  c.forEach(function (e) {
                    e.removeEventListener("scroll", i.update, te);
                  }),
                  a && l.removeEventListener("resize", i.update, te);
              }
            );
          },
          data: {},
        },
        se = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ne(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return se[e];
        });
      }
      var oe = { start: "end", end: "start" };
      function re(e) {
        return e.replace(/start|end/g, function (e) {
          return oe[e];
        });
      }
      function ae(e) {
        var t = L(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function le(e) {
        return I(q(e)).left + ae(e).scrollLeft;
      }
      function ce(e) {
        var t = R(e),
          i = t.overflow,
          s = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + n + s);
      }
      function ue(e, t) {
        var i;
        void 0 === t && (t = []);
        var s = (function e(t) {
            return ["html", "body", "#document"].indexOf(x(t)) >= 0
              ? t.ownerDocument.body
              : P(t) && ce(t)
              ? t
              : e(F(t));
          })(e),
          n = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
          o = L(s),
          r = n ? [o].concat(o.visualViewport || [], ce(s) ? s : []) : s,
          a = t.concat(r);
        return n ? a : a.concat(ue(F(r)));
      }
      function he(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function de(e, t) {
        return t === p
          ? he(
              (function (e) {
                var t = L(e),
                  i = q(e),
                  s = t.visualViewport,
                  n = i.clientWidth,
                  o = i.clientHeight,
                  r = 0,
                  a = 0;
                return (
                  s &&
                    ((n = s.width),
                    (o = s.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((r = s.offsetLeft), (a = s.offsetTop))),
                  { width: n, height: o, x: r + le(e), y: a }
                );
              })(e)
            )
          : P(t)
          ? (function (e) {
              var t = I(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : he(
              (function (e) {
                var t,
                  i = q(e),
                  s = ae(e),
                  n = null == (t = e.ownerDocument) ? void 0 : t.body,
                  o = V(
                    i.scrollWidth,
                    i.clientWidth,
                    n ? n.scrollWidth : 0,
                    n ? n.clientWidth : 0
                  ),
                  r = V(
                    i.scrollHeight,
                    i.clientHeight,
                    n ? n.scrollHeight : 0,
                    n ? n.clientHeight : 0
                  ),
                  a = -s.scrollLeft + le(e),
                  l = -s.scrollTop;
                return (
                  "rtl" === R(n || i).direction &&
                    (a += V(i.clientWidth, n ? n.clientWidth : 0) - o),
                  { width: o, height: r, x: a, y: l }
                );
              })(q(e))
            );
      }
      function pe(e, t, i) {
        var s =
            "clippingParents" === t
              ? (function (e) {
                  var t = ue(F(e)),
                    i =
                      ["absolute", "fixed"].indexOf(R(e).position) >= 0 && P(e)
                        ? W(e)
                        : e;
                  return O(i)
                    ? t.filter(function (e) {
                        return O(e) && H(e, i) && "body" !== x(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          n = [].concat(s, [i]),
          o = n[0],
          r = n.reduce(function (t, i) {
            var s = de(e, i);
            return (
              (t.top = V(s.top, t.top)),
              (t.right = U(s.right, t.right)),
              (t.bottom = U(s.bottom, t.bottom)),
              (t.left = V(s.left, t.left)),
              t
            );
          }, de(e, o));
        return (
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      }
      function me(e) {
        return e.split("-")[1];
      }
      function fe(e) {
        var t,
          i = e.reference,
          s = e.element,
          l = e.placement,
          c = l ? M(l) : null,
          d = l ? me(l) : null,
          p = i.x + i.width / 2 - s.width / 2,
          m = i.y + i.height / 2 - s.height / 2;
        switch (c) {
          case n:
            t = { x: p, y: i.y - s.height };
            break;
          case o:
            t = { x: p, y: i.y + i.height };
            break;
          case r:
            t = { x: i.x + i.width, y: m };
            break;
          case a:
            t = { x: i.x - s.width, y: m };
            break;
          default:
            t = { x: i.x, y: i.y };
        }
        var f = c ? z(c) : null;
        if (null != f) {
          var g = "y" === f ? "height" : "width";
          switch (d) {
            case u:
              t[f] = t[f] - (i[g] / 2 - s[g] / 2);
              break;
            case h:
              t[f] = t[f] + (i[g] / 2 - s[g] / 2);
          }
        }
        return t;
      }
      function ge(e, t) {
        void 0 === t && (t = {});
        var i = t,
          s = i.placement,
          a = void 0 === s ? e.placement : s,
          l = i.boundary,
          u = void 0 === l ? d : l,
          h = i.rootBoundary,
          g = void 0 === h ? p : h,
          b = i.elementContext,
          y = void 0 === b ? m : b,
          v = i.altBoundary,
          w = void 0 !== v && v,
          _ = i.padding,
          k = void 0 === _ ? 0 : _,
          T = X("number" != typeof k ? k : Q(k, c)),
          E = y === m ? f : m,
          C = e.elements.reference,
          A = e.rects.popper,
          S = e.elements[w ? E : y],
          x = pe(O(S) ? S : S.contextElement || q(e.elements.popper), u, g),
          L = I(C),
          P = fe({
            reference: L,
            element: A,
            strategy: "absolute",
            placement: a,
          }),
          N = he(Object.assign({}, A, P)),
          D = y === m ? N : L,
          M = {
            top: x.top - D.top + T.top,
            bottom: D.bottom - x.bottom + T.bottom,
            left: x.left - D.left + T.left,
            right: D.right - x.right + T.right,
          },
          j = e.modifiersData.offset;
        if (y === m && j) {
          var H = j[a];
          Object.keys(M).forEach(function (e) {
            var t = [r, o].indexOf(e) >= 0 ? 1 : -1,
              i = [n, o].indexOf(e) >= 0 ? "y" : "x";
            M[e] += H[i] * t;
          });
        }
        return M;
      }
      var be = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            i = e.options,
            s = e.name;
          if (!t.modifiersData[s]._skip) {
            for (
              var h = i.mainAxis,
                d = void 0 === h || h,
                p = i.altAxis,
                m = void 0 === p || p,
                f = i.fallbackPlacements,
                y = i.padding,
                v = i.boundary,
                w = i.rootBoundary,
                _ = i.altBoundary,
                k = i.flipVariations,
                T = void 0 === k || k,
                E = i.allowedAutoPlacements,
                C = t.options.placement,
                A = M(C),
                S =
                  f ||
                  (A === C || !T
                    ? [ne(C)]
                    : (function (e) {
                        if (M(e) === l) return [];
                        var t = ne(e);
                        return [re(e), t, re(t)];
                      })(C)),
                x = [C].concat(S).reduce(function (e, i) {
                  return e.concat(
                    M(i) === l
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var i = t,
                            s = i.placement,
                            n = i.boundary,
                            o = i.rootBoundary,
                            r = i.padding,
                            a = i.flipVariations,
                            l = i.allowedAutoPlacements,
                            u = void 0 === l ? b : l,
                            h = me(s),
                            d = h
                              ? a
                                ? g
                                : g.filter(function (e) {
                                    return me(e) === h;
                                  })
                              : c,
                            p = d.filter(function (e) {
                              return u.indexOf(e) >= 0;
                            });
                          0 === p.length && (p = d);
                          var m = p.reduce(function (t, i) {
                            return (
                              (t[i] = ge(e, {
                                placement: i,
                                boundary: n,
                                rootBoundary: o,
                                padding: r,
                              })[M(i)]),
                              t
                            );
                          }, {});
                          return Object.keys(m).sort(function (e, t) {
                            return m[e] - m[t];
                          });
                        })(t, {
                          placement: i,
                          boundary: v,
                          rootBoundary: w,
                          padding: y,
                          flipVariations: T,
                          allowedAutoPlacements: E,
                        })
                      : i
                  );
                }, []),
                L = t.rects.reference,
                O = t.rects.popper,
                P = new Map(),
                N = !0,
                D = x[0],
                I = 0;
              I < x.length;
              I++
            ) {
              var j = x[I],
                H = M(j),
                R = me(j) === u,
                B = [n, o].indexOf(H) >= 0,
                q = B ? "width" : "height",
                F = ge(t, {
                  placement: j,
                  boundary: v,
                  rootBoundary: w,
                  altBoundary: _,
                  padding: y,
                }),
                $ = B ? (R ? r : a) : R ? o : n;
              L[q] > O[q] && ($ = ne($));
              var W = ne($),
                z = [];
              if (
                (d && z.push(F[H] <= 0),
                m && z.push(F[$] <= 0, F[W] <= 0),
                z.every(function (e) {
                  return e;
                }))
              ) {
                (D = j), (N = !1);
                break;
              }
              P.set(j, z);
            }
            if (N)
              for (
                var V = function (e) {
                    var t = x.find(function (t) {
                      var i = P.get(t);
                      if (i)
                        return i.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (D = t), "break";
                  },
                  U = T ? 3 : 1;
                U > 0;
                U--
              ) {
                if ("break" === V(U)) break;
              }
            t.placement !== D &&
              ((t.modifiersData[s]._skip = !0),
              (t.placement = D),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function ye(e, t, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x,
          }
        );
      }
      function ve(e) {
        return [n, r, o, a].some(function (t) {
          return e[t] >= 0;
        });
      }
      var we = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            i = e.name,
            s = t.rects.reference,
            n = t.rects.popper,
            o = t.modifiersData.preventOverflow,
            r = ge(t, { elementContext: "reference" }),
            a = ge(t, { altBoundary: !0 }),
            l = ye(r, s),
            c = ye(a, n, o),
            u = ve(l),
            h = ve(c);
          (t.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: h,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": u,
              "data-popper-escaped": h,
            }));
        },
      };
      var _e = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            i = e.options,
            s = e.name,
            o = i.offset,
            l = void 0 === o ? [0, 0] : o,
            c = b.reduce(function (e, i) {
              return (
                (e[i] = (function (e, t, i) {
                  var s = M(e),
                    o = [a, n].indexOf(s) >= 0 ? -1 : 1,
                    l =
                      "function" == typeof i
                        ? i(Object.assign({}, t, { placement: e }))
                        : i,
                    c = l[0],
                    u = l[1];
                  return (
                    (c = c || 0),
                    (u = (u || 0) * o),
                    [a, r].indexOf(s) >= 0 ? { x: u, y: c } : { x: c, y: u }
                  );
                })(i, t.rects, l)),
                e
              );
            }, {}),
            u = c[t.placement],
            h = u.x,
            d = u.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += h),
            (t.modifiersData.popperOffsets.y += d)),
            (t.modifiersData[s] = c);
        },
      };
      var ke = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            i = e.name;
          t.modifiersData[i] = fe({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      };
      var Te = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            i = e.options,
            s = e.name,
            l = i.mainAxis,
            c = void 0 === l || l,
            h = i.altAxis,
            d = void 0 !== h && h,
            p = i.boundary,
            m = i.rootBoundary,
            f = i.altBoundary,
            g = i.padding,
            b = i.tether,
            y = void 0 === b || b,
            v = i.tetherOffset,
            w = void 0 === v ? 0 : v,
            _ = ge(t, {
              boundary: p,
              rootBoundary: m,
              padding: g,
              altBoundary: f,
            }),
            k = M(t.placement),
            T = me(t.placement),
            E = !T,
            C = z(k),
            A = "x" === C ? "y" : "x",
            S = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            L = t.rects.popper,
            O =
              "function" == typeof w
                ? w(Object.assign({}, t.rects, { placement: t.placement }))
                : w,
            P = { x: 0, y: 0 };
          if (S) {
            if (c || d) {
              var N = "y" === C ? n : a,
                D = "y" === C ? o : r,
                I = "y" === C ? "height" : "width",
                H = S[C],
                R = S[C] + _[N],
                B = S[C] - _[D],
                q = y ? -L[I] / 2 : 0,
                F = T === u ? x[I] : L[I],
                $ = T === u ? -L[I] : -x[I],
                K = t.elements.arrow,
                X = y && K ? j(K) : { width: 0, height: 0 },
                Q = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                J = Q[N],
                G = Q[D],
                Z = Y(0, x[I], X[I]),
                ee = E ? x[I] / 2 - q - Z - J - O : F - Z - J - O,
                te = E ? -x[I] / 2 + q + Z + G + O : $ + Z + G + O,
                ie = t.elements.arrow && W(t.elements.arrow),
                se = ie
                  ? "y" === C
                    ? ie.clientTop || 0
                    : ie.clientLeft || 0
                  : 0,
                ne = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][C]
                  : 0,
                oe = S[C] + ee - ne - se,
                re = S[C] + te - ne;
              if (c) {
                var ae = Y(y ? U(R, oe) : R, H, y ? V(B, re) : B);
                (S[C] = ae), (P[C] = ae - H);
              }
              if (d) {
                var le = "x" === C ? n : a,
                  ce = "x" === C ? o : r,
                  ue = S[A],
                  he = ue + _[le],
                  de = ue - _[ce],
                  pe = Y(y ? U(he, oe) : he, ue, y ? V(de, re) : de);
                (S[A] = pe), (P[A] = pe - ue);
              }
            }
            t.modifiersData[s] = P;
          }
        },
        requiresIfExists: ["offset"],
      };
      function Ee(e, t, i) {
        void 0 === i && (i = !1);
        var s,
          n,
          o = q(t),
          r = I(e),
          a = P(t),
          l = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (a || (!a && !i)) &&
            (("body" !== x(t) || ce(o)) &&
              (l =
                (s = t) !== L(s) && P(s)
                  ? { scrollLeft: (n = s).scrollLeft, scrollTop: n.scrollTop }
                  : ae(s)),
            P(t)
              ? (((c = I(t)).x += t.clientLeft), (c.y += t.clientTop))
              : o && (c.x = le(o))),
          {
            x: r.left + l.scrollLeft - c.x,
            y: r.top + l.scrollTop - c.y,
            width: r.width,
            height: r.height,
          }
        );
      }
      function Ce(e) {
        var t = new Map(),
          i = new Set(),
          s = [];
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            i.has(e.name) ||
              (function e(n) {
                i.add(n.name),
                  []
                    .concat(n.requires || [], n.requiresIfExists || [])
                    .forEach(function (s) {
                      if (!i.has(s)) {
                        var n = t.get(s);
                        n && e(n);
                      }
                    }),
                  s.push(n);
              })(e);
          }),
          s
        );
      }
      var Ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Se() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function xe(e) {
        void 0 === e && (e = {});
        var t = e,
          i = t.defaultModifiers,
          s = void 0 === i ? [] : i,
          n = t.defaultOptions,
          o = void 0 === n ? Ae : n;
        return function (e, t, i) {
          void 0 === i && (i = o);
          var n,
            r,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Ae, o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: a,
              setOptions: function (i) {
                h(),
                  (a.options = Object.assign({}, o, a.options, i)),
                  (a.scrollParents = {
                    reference: O(e)
                      ? ue(e)
                      : e.contextElement
                      ? ue(e.contextElement)
                      : [],
                    popper: ue(t),
                  });
                var n = (function (e) {
                  var t = Ce(e);
                  return S.reduce(function (e, i) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === i;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var i = e[t.name];
                      return (
                        (e[t.name] = i
                          ? Object.assign({}, i, t, {
                              options: Object.assign({}, i.options, t.options),
                              data: Object.assign({}, i.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(s, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = n.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      i = e.options,
                      s = void 0 === i ? {} : i,
                      n = e.effect;
                    if ("function" == typeof n) {
                      var o = n({ state: a, name: t, instance: u, options: s });
                      l.push(o || function () {});
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    i = e.popper;
                  if (Se(t, i)) {
                    (a.rects = {
                      reference: Ee(t, W(i), "fixed" === a.options.strategy),
                      popper: j(i),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var s = 0; s < a.orderedModifiers.length; s++)
                      if (!0 !== a.reset) {
                        var n = a.orderedModifiers[s],
                          o = n.fn,
                          r = n.options,
                          l = void 0 === r ? {} : r,
                          h = n.name;
                        "function" == typeof o &&
                          (a =
                            o({ state: a, options: l, name: h, instance: u }) ||
                            a);
                      } else (a.reset = !1), (s = -1);
                  }
                }
              },
              update:
                ((n = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    r ||
                      (r = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (r = void 0), e(n());
                        });
                      })),
                    r
                  );
                }),
              destroy: function () {
                h(), (c = !0);
              },
            };
          if (!Se(e, t)) return u;
          function h() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(i).then(function (e) {
              !c && i.onFirstUpdate && i.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Le = xe(),
        Oe = xe({ defaultModifiers: [ie, ke, ee, D, _e, be, Te, J, we] }),
        Pe = xe({ defaultModifiers: [ie, ke, ee, D] });
      const Ne = (e) => {
          do {
            e += Math.floor(1e6 * Math.random());
          } while (document.getElementById(e));
          return e;
        },
        De = (e) => {
          let t = e.getAttribute("data-bs-target");
          if (!t || "#" === t) {
            let i = e.getAttribute("href");
            if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
            i.includes("#") &&
              !i.startsWith("#") &&
              (i = "#" + i.split("#")[1]),
              (t = i && "#" !== i ? i.trim() : null);
          }
          return t;
        },
        Me = (e) => {
          const t = De(e);
          return t && document.querySelector(t) ? t : null;
        },
        Ie = (e) => {
          const t = De(e);
          return t ? document.querySelector(t) : null;
        },
        je = (e) => {
          if (!e) return 0;
          let { transitionDuration: t, transitionDelay: i } =
            window.getComputedStyle(e);
          const s = Number.parseFloat(t),
            n = Number.parseFloat(i);
          return s || n
            ? ((t = t.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(t) + Number.parseFloat(i)))
            : 0;
        },
        He = (e) => {
          e.dispatchEvent(new Event("transitionend"));
        },
        Re = (e) => (e[0] || e).nodeType,
        Be = (e, t) => {
          let i = !1;
          const s = t + 5;
          e.addEventListener("transitionend", function t() {
            (i = !0), e.removeEventListener("transitionend", t);
          }),
            setTimeout(() => {
              i || He(e);
            }, s);
        },
        qe = (e, t, i) => {
          Object.keys(i).forEach((s) => {
            const n = i[s],
              o = t[s],
              r =
                o && Re(o)
                  ? "element"
                  : null == (a = o)
                  ? "" + a
                  : {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            var a;
            if (!new RegExp(n).test(r))
              throw new TypeError(
                e.toUpperCase() +
                  ": " +
                  `Option "${s}" provided type "${r}" ` +
                  `but expected type "${n}".`
              );
          });
        },
        Fe = (e) => {
          if (!e) return !1;
          if (e.style && e.parentNode && e.parentNode.style) {
            const t = getComputedStyle(e),
              i = getComputedStyle(e.parentNode);
            return (
              "none" !== t.display &&
              "none" !== i.display &&
              "hidden" !== t.visibility
            );
          }
          return !1;
        },
        $e = (e) =>
          !e ||
          e.nodeType !== Node.ELEMENT_NODE ||
          !!e.classList.contains("disabled") ||
          (void 0 !== e.disabled
            ? e.disabled
            : e.hasAttribute("disabled") &&
              "false" !== e.getAttribute("disabled")),
        We = (e) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
            ? We(e.parentNode)
            : null;
        },
        ze = () => function () {},
        Ve = (e) => e.offsetHeight,
        Ue = () => {
          const { jQuery: e } = window;
          return e && !document.body.hasAttribute("data-bs-no-jquery")
            ? e
            : null;
        },
        Ke = () => "rtl" === document.documentElement.dir,
        Ye = (e, t) => {
          var i;
          (i = () => {
            const i = Ue();
            if (i) {
              const s = i.fn[e];
              (i.fn[e] = t.jQueryInterface),
                (i.fn[e].Constructor = t),
                (i.fn[e].noConflict = () => ((i.fn[e] = s), t.jQueryInterface));
            }
          }),
            "loading" === document.readyState
              ? document.addEventListener("DOMContentLoaded", i)
              : i();
        },
        Xe = new Map();
      var Qe = {
        set(e, t, i) {
          Xe.has(e) || Xe.set(e, new Map());
          const s = Xe.get(e);
          s.has(t) || 0 === s.size
            ? s.set(t, i)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(s.keys())[0]
                }.`
              );
        },
        get: (e, t) => (Xe.has(e) && Xe.get(e).get(t)) || null,
        remove(e, t) {
          if (!Xe.has(e)) return;
          const i = Xe.get(e);
          i.delete(t), 0 === i.size && Xe.delete(e);
        },
      };
      const Je = /[^.]*(?=\..*)\.|.*/,
        Ge = /\..*/,
        Ze = /::\d+$/,
        et = {};
      let tt = 1;
      const it = { mouseenter: "mouseover", mouseleave: "mouseout" },
        st = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function nt(e, t) {
        return (t && `${t}::${tt++}`) || e.uidEvent || tt++;
      }
      function ot(e) {
        const t = nt(e);
        return (e.uidEvent = t), (et[t] = et[t] || {}), et[t];
      }
      function rt(e, t, i = null) {
        const s = Object.keys(e);
        for (let n = 0, o = s.length; n < o; n++) {
          const o = e[s[n]];
          if (o.originalHandler === t && o.delegationSelector === i) return o;
        }
        return null;
      }
      function at(e, t, i) {
        const s = "string" == typeof t,
          n = s ? i : t;
        let o = e.replace(Ge, "");
        const r = it[o];
        r && (o = r);
        return st.has(o) || (o = e), [s, n, o];
      }
      function lt(e, t, i, s, n) {
        if ("string" != typeof t || !e) return;
        i || ((i = s), (s = null));
        const [o, r, a] = at(t, i, s),
          l = ot(e),
          c = l[a] || (l[a] = {}),
          u = rt(c, r, o ? i : null);
        if (u) return void (u.oneOff = u.oneOff && n);
        const h = nt(r, t.replace(Je, "")),
          d = o
            ? (function (e, t, i) {
                return function s(n) {
                  const o = e.querySelectorAll(t);
                  for (let { target: t } = n; t && t !== this; t = t.parentNode)
                    for (let r = o.length; r--; )
                      if (o[r] === t)
                        return (
                          (n.delegateTarget = t),
                          s.oneOff && ut.off(e, n.type, i),
                          i.apply(t, [n])
                        );
                  return null;
                };
              })(e, i, s)
            : (function (e, t) {
                return function i(s) {
                  return (
                    (s.delegateTarget = e),
                    i.oneOff && ut.off(e, s.type, t),
                    t.apply(e, [s])
                  );
                };
              })(e, i);
        (d.delegationSelector = o ? i : null),
          (d.originalHandler = r),
          (d.oneOff = n),
          (d.uidEvent = h),
          (c[h] = d),
          e.addEventListener(a, d, o);
      }
      function ct(e, t, i, s, n) {
        const o = rt(t[i], s, n);
        o && (e.removeEventListener(i, o, Boolean(n)), delete t[i][o.uidEvent]);
      }
      const ut = {
        on(e, t, i, s) {
          lt(e, t, i, s, !1);
        },
        one(e, t, i, s) {
          lt(e, t, i, s, !0);
        },
        off(e, t, i, s) {
          if ("string" != typeof t || !e) return;
          const [n, o, r] = at(t, i, s),
            a = r !== t,
            l = ot(e),
            c = t.startsWith(".");
          if (void 0 !== o) {
            if (!l || !l[r]) return;
            return void ct(e, l, r, o, n ? i : null);
          }
          c &&
            Object.keys(l).forEach((i) => {
              !(function (e, t, i, s) {
                const n = t[i] || {};
                Object.keys(n).forEach((o) => {
                  if (o.includes(s)) {
                    const s = n[o];
                    ct(e, t, i, s.originalHandler, s.delegationSelector);
                  }
                });
              })(e, l, i, t.slice(1));
            });
          const u = l[r] || {};
          Object.keys(u).forEach((i) => {
            const s = i.replace(Ze, "");
            if (!a || t.includes(s)) {
              const t = u[i];
              ct(e, l, r, t.originalHandler, t.delegationSelector);
            }
          });
        },
        trigger(e, t, i) {
          if ("string" != typeof t || !e) return null;
          const s = Ue(),
            n = t.replace(Ge, ""),
            o = t !== n,
            r = st.has(n);
          let a,
            l = !0,
            c = !0,
            u = !1,
            h = null;
          return (
            o &&
              s &&
              ((a = s.Event(t, i)),
              s(e).trigger(a),
              (l = !a.isPropagationStopped()),
              (c = !a.isImmediatePropagationStopped()),
              (u = a.isDefaultPrevented())),
            r
              ? ((h = document.createEvent("HTMLEvents")),
                h.initEvent(n, l, !0))
              : (h = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
            void 0 !== i &&
              Object.keys(i).forEach((e) => {
                Object.defineProperty(h, e, { get: () => i[e] });
              }),
            u && h.preventDefault(),
            c && e.dispatchEvent(h),
            h.defaultPrevented && void 0 !== a && a.preventDefault(),
            h
          );
        },
      };
      class ht {
        constructor(e) {
          (e = "string" == typeof e ? document.querySelector(e) : e) &&
            ((this._element = e),
            Qe.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          Qe.remove(this._element, this.constructor.DATA_KEY),
            (this._element = null);
        }
        static getInstance(e) {
          return Qe.get(e, this.DATA_KEY);
        }
        static get VERSION() {
          return "5.0.0-beta3";
        }
      }
      class dt extends ht {
        static get DATA_KEY() {
          return "bs.alert";
        }
        close(e) {
          const t = e ? this._getRootElement(e) : this._element,
            i = this._triggerCloseEvent(t);
          null === i || i.defaultPrevented || this._removeElement(t);
        }
        _getRootElement(e) {
          return Ie(e) || e.closest(".alert");
        }
        _triggerCloseEvent(e) {
          return ut.trigger(e, "close.bs.alert");
        }
        _removeElement(e) {
          if ((e.classList.remove("show"), !e.classList.contains("fade")))
            return void this._destroyElement(e);
          const t = je(e);
          ut.one(e, "transitionend", () => this._destroyElement(e)), Be(e, t);
        }
        _destroyElement(e) {
          e.parentNode && e.parentNode.removeChild(e),
            ut.trigger(e, "closed.bs.alert");
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = Qe.get(this, "bs.alert");
            t || (t = new dt(this)), "close" === e && t[e](this);
          });
        }
        static handleDismiss(e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }
      }
      ut.on(
        document,
        "click.bs.alert.data-api",
        '[data-bs-dismiss="alert"]',
        dt.handleDismiss(new dt())
      ),
        Ye("alert", dt);
      class pt extends ht {
        static get DATA_KEY() {
          return "bs.button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = Qe.get(this, "bs.button");
            t || (t = new pt(this)), "toggle" === e && t[e]();
          });
        }
      }
      function mt(e) {
        return (
          "true" === e ||
          ("false" !== e &&
            (e === Number(e).toString()
              ? Number(e)
              : "" === e || "null" === e
              ? null
              : e))
        );
      }
      function ft(e) {
        return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
      }
      ut.on(
        document,
        "click.bs.button.data-api",
        '[data-bs-toggle="button"]',
        (e) => {
          e.preventDefault();
          const t = e.target.closest('[data-bs-toggle="button"]');
          let i = Qe.get(t, "bs.button");
          i || (i = new pt(t)), i.toggle();
        }
      ),
        Ye("button", pt);
      const gt = {
          setDataAttribute(e, t, i) {
            e.setAttribute("data-bs-" + ft(t), i);
          },
          removeDataAttribute(e, t) {
            e.removeAttribute("data-bs-" + ft(t));
          },
          getDataAttributes(e) {
            if (!e) return {};
            const t = {};
            return (
              Object.keys(e.dataset)
                .filter((e) => e.startsWith("bs"))
                .forEach((i) => {
                  let s = i.replace(/^bs/, "");
                  (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)),
                    (t[s] = mt(e.dataset[i]));
                }),
              t
            );
          },
          getDataAttribute: (e, t) => mt(e.getAttribute("data-bs-" + ft(t))),
          offset(e) {
            const t = e.getBoundingClientRect();
            return {
              top: t.top + document.body.scrollTop,
              left: t.left + document.body.scrollLeft,
            };
          },
          position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
        },
        bt = {
          find: (e, t = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(t, e)),
          findOne: (e, t = document.documentElement) =>
            Element.prototype.querySelector.call(t, e),
          children: (e, t) =>
            [].concat(...e.children).filter((e) => e.matches(t)),
          parents(e, t) {
            const i = [];
            let s = e.parentNode;
            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
              s.matches(t) && i.push(s), (s = s.parentNode);
            return i;
          },
          prev(e, t) {
            let i = e.previousElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.previousElementSibling;
            }
            return [];
          },
          next(e, t) {
            let i = e.nextElementSibling;
            for (; i; ) {
              if (i.matches(t)) return [i];
              i = i.nextElementSibling;
            }
            return [];
          },
        },
        yt = ".bs.carousel",
        vt = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0,
        },
        wt = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean",
        },
        _t = "next",
        kt = "prev",
        Tt = "left",
        Et = "right",
        Ct = `load${yt}.data-api`,
        At = `click${yt}.data-api`;
      class St extends ht {
        constructor(e, t) {
          super(e),
            (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._indicatorsElement = bt.findOne(
              ".carousel-indicators",
              this._element
            )),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(window.PointerEvent)),
            this._addEventListeners();
        }
        static get Default() {
          return vt;
        }
        static get DATA_KEY() {
          return "bs.carousel";
        }
        next() {
          this._isSliding || this._slide(_t);
        }
        nextWhenVisible() {
          !document.hidden && Fe(this._element) && this.next();
        }
        prev() {
          this._isSliding || this._slide(kt);
        }
        pause(e) {
          e || (this._isPaused = !0),
            bt.findOne(
              ".carousel-item-next, .carousel-item-prev",
              this._element
            ) && (He(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }
        cycle(e) {
          e || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config &&
              this._config.interval &&
              !this._isPaused &&
              (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              )));
        }
        to(e) {
          this._activeElement = bt.findOne(
            ".active.carousel-item",
            this._element
          );
          const t = this._getItemIndex(this._activeElement);
          if (e > this._items.length - 1 || e < 0) return;
          if (this._isSliding)
            return void ut.one(this._element, "slid.bs.carousel", () =>
              this.to(e)
            );
          if (t === e) return this.pause(), void this.cycle();
          const i = e > t ? _t : kt;
          this._slide(i, this._items[e]);
        }
        dispose() {
          ut.off(this._element, yt),
            (this._items = null),
            (this._config = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null),
            super.dispose();
        }
        _getConfig(e) {
          return (e = { ...vt, ...e }), qe("carousel", e, wt), e;
        }
        _handleSwipe() {
          const e = Math.abs(this.touchDeltaX);
          if (e <= 40) return;
          const t = e / this.touchDeltaX;
          (this.touchDeltaX = 0), t && this._slide(t > 0 ? Et : Tt);
        }
        _addEventListeners() {
          this._config.keyboard &&
            ut.on(this._element, "keydown.bs.carousel", (e) =>
              this._keydown(e)
            ),
            "hover" === this._config.pause &&
              (ut.on(this._element, "mouseenter.bs.carousel", (e) =>
                this.pause(e)
              ),
              ut.on(this._element, "mouseleave.bs.carousel", (e) =>
                this.cycle(e)
              )),
            this._config.touch &&
              this._touchSupported &&
              this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          const e = (e) => {
              !this._pointerEvent ||
              ("pen" !== e.pointerType && "touch" !== e.pointerType)
                ? this._pointerEvent ||
                  (this.touchStartX = e.touches[0].clientX)
                : (this.touchStartX = e.clientX);
            },
            t = (e) => {
              this.touchDeltaX =
                e.touches && e.touches.length > 1
                  ? 0
                  : e.touches[0].clientX - this.touchStartX;
            },
            i = (e) => {
              !this._pointerEvent ||
                ("pen" !== e.pointerType && "touch" !== e.pointerType) ||
                (this.touchDeltaX = e.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause &&
                  (this.pause(),
                  this.touchTimeout && clearTimeout(this.touchTimeout),
                  (this.touchTimeout = setTimeout(
                    (e) => this.cycle(e),
                    500 + this._config.interval
                  )));
            };
          bt.find(".carousel-item img", this._element).forEach((e) => {
            ut.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
          }),
            this._pointerEvent
              ? (ut.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
                ut.on(this._element, "pointerup.bs.carousel", (e) => i(e)),
                this._element.classList.add("pointer-event"))
              : (ut.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
                ut.on(this._element, "touchmove.bs.carousel", (e) => t(e)),
                ut.on(this._element, "touchend.bs.carousel", (e) => i(e)));
        }
        _keydown(e) {
          /input|textarea/i.test(e.target.tagName) ||
            ("ArrowLeft" === e.key
              ? (e.preventDefault(), this._slide(Tt))
              : "ArrowRight" === e.key &&
                (e.preventDefault(), this._slide(Et)));
        }
        _getItemIndex(e) {
          return (
            (this._items =
              e && e.parentNode ? bt.find(".carousel-item", e.parentNode) : []),
            this._items.indexOf(e)
          );
        }
        _getItemByOrder(e, t) {
          const i = e === _t,
            s = e === kt,
            n = this._getItemIndex(t),
            o = this._items.length - 1;
          if (((s && 0 === n) || (i && n === o)) && !this._config.wrap)
            return t;
          const r = (n + (s ? -1 : 1)) % this._items.length;
          return -1 === r
            ? this._items[this._items.length - 1]
            : this._items[r];
        }
        _triggerSlideEvent(e, t) {
          const i = this._getItemIndex(e),
            s = this._getItemIndex(
              bt.findOne(".active.carousel-item", this._element)
            );
          return ut.trigger(this._element, "slide.bs.carousel", {
            relatedTarget: e,
            direction: t,
            from: s,
            to: i,
          });
        }
        _setActiveIndicatorElement(e) {
          if (this._indicatorsElement) {
            const t = bt.findOne(".active", this._indicatorsElement);
            t.classList.remove("active"), t.removeAttribute("aria-current");
            const i = bt.find("[data-bs-target]", this._indicatorsElement);
            for (let t = 0; t < i.length; t++)
              if (
                Number.parseInt(i[t].getAttribute("data-bs-slide-to"), 10) ===
                this._getItemIndex(e)
              ) {
                i[t].classList.add("active"),
                  i[t].setAttribute("aria-current", "true");
                break;
              }
          }
        }
        _updateInterval() {
          const e =
            this._activeElement ||
            bt.findOne(".active.carousel-item", this._element);
          if (!e) return;
          const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
          t
            ? ((this._config.defaultInterval =
                this._config.defaultInterval || this._config.interval),
              (this._config.interval = t))
            : (this._config.interval =
                this._config.defaultInterval || this._config.interval);
        }
        _slide(e, t) {
          const i = this._directionToOrder(e),
            s = bt.findOne(".active.carousel-item", this._element),
            n = this._getItemIndex(s),
            o = t || this._getItemByOrder(i, s),
            r = this._getItemIndex(o),
            a = Boolean(this._interval),
            l = i === _t,
            c = l ? "carousel-item-start" : "carousel-item-end",
            u = l ? "carousel-item-next" : "carousel-item-prev",
            h = this._orderToDirection(i);
          if (o && o.classList.contains("active"))
            return void (this._isSliding = !1);
          if (!this._triggerSlideEvent(o, h).defaultPrevented && s && o) {
            if (
              ((this._isSliding = !0),
              a && this.pause(),
              this._setActiveIndicatorElement(o),
              (this._activeElement = o),
              this._element.classList.contains("slide"))
            ) {
              o.classList.add(u), Ve(o), s.classList.add(c), o.classList.add(c);
              const e = je(s);
              ut.one(s, "transitionend", () => {
                o.classList.remove(c, u),
                  o.classList.add("active"),
                  s.classList.remove("active", u, c),
                  (this._isSliding = !1),
                  setTimeout(() => {
                    ut.trigger(this._element, "slid.bs.carousel", {
                      relatedTarget: o,
                      direction: h,
                      from: n,
                      to: r,
                    });
                  }, 0);
              }),
                Be(s, e);
            } else
              s.classList.remove("active"),
                o.classList.add("active"),
                (this._isSliding = !1),
                ut.trigger(this._element, "slid.bs.carousel", {
                  relatedTarget: o,
                  direction: h,
                  from: n,
                  to: r,
                });
            a && this.cycle();
          }
        }
        _directionToOrder(e) {
          return [Et, Tt].includes(e)
            ? Ke()
              ? e === Et
                ? kt
                : _t
              : e === Et
              ? _t
              : kt
            : e;
        }
        _orderToDirection(e) {
          return [_t, kt].includes(e)
            ? Ke()
              ? e === _t
                ? Tt
                : Et
              : e === _t
              ? Et
              : Tt
            : e;
        }
        static carouselInterface(e, t) {
          let i = Qe.get(e, "bs.carousel"),
            s = { ...vt, ...gt.getDataAttributes(e) };
          "object" == typeof t && (s = { ...s, ...t });
          const n = "string" == typeof t ? t : s.slide;
          if ((i || (i = new St(e, s)), "number" == typeof t)) i.to(t);
          else if ("string" == typeof n) {
            if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
            i[n]();
          } else s.interval && s.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(e) {
          return this.each(function () {
            St.carouselInterface(this, e);
          });
        }
        static dataApiClickHandler(e) {
          const t = Ie(this);
          if (!t || !t.classList.contains("carousel")) return;
          const i = {
              ...gt.getDataAttributes(t),
              ...gt.getDataAttributes(this),
            },
            s = this.getAttribute("data-bs-slide-to");
          s && (i.interval = !1),
            St.carouselInterface(t, i),
            s && Qe.get(t, "bs.carousel").to(s),
            e.preventDefault();
        }
      }
      ut.on(
        document,
        At,
        "[data-bs-slide], [data-bs-slide-to]",
        St.dataApiClickHandler
      ),
        ut.on(window, Ct, () => {
          const e = bt.find('[data-bs-ride="carousel"]');
          for (let t = 0, i = e.length; t < i; t++)
            St.carouselInterface(e[t], Qe.get(e[t], "bs.carousel"));
        }),
        Ye("carousel", St);
      const xt = { toggle: !0, parent: "" },
        Lt = { toggle: "boolean", parent: "(string|element)" };
      class Ot extends ht {
        constructor(e, t) {
          super(e),
            (this._isTransitioning = !1),
            (this._config = this._getConfig(t)),
            (this._triggerArray = bt.find(
              `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
            ));
          const i = bt.find('[data-bs-toggle="collapse"]');
          for (let e = 0, t = i.length; e < t; e++) {
            const t = i[e],
              s = Me(t),
              n = bt.find(s).filter((e) => e === this._element);
            null !== s &&
              n.length &&
              ((this._selector = s), this._triggerArray.push(t));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        static get Default() {
          return xt;
        }
        static get DATA_KEY() {
          return "bs.collapse";
        }
        toggle() {
          this._element.classList.contains("show") ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._element.classList.contains("show"))
            return;
          let e, t;
          this._parent &&
            ((e = bt
              .find(".show, .collapsing", this._parent)
              .filter((e) =>
                "string" == typeof this._config.parent
                  ? e.getAttribute("data-bs-parent") === this._config.parent
                  : e.classList.contains("collapse")
              )),
            0 === e.length && (e = null));
          const i = bt.findOne(this._selector);
          if (e) {
            const s = e.find((e) => i !== e);
            if (
              ((t = s ? Qe.get(s, "bs.collapse") : null),
              t && t._isTransitioning)
            )
              return;
          }
          if (ut.trigger(this._element, "show.bs.collapse").defaultPrevented)
            return;
          e &&
            e.forEach((e) => {
              i !== e && Ot.collapseInterface(e, "hide"),
                t || Qe.set(e, "bs.collapse", null);
            });
          const s = this._getDimension();
          this._element.classList.remove("collapse"),
            this._element.classList.add("collapsing"),
            (this._element.style[s] = 0),
            this._triggerArray.length &&
              this._triggerArray.forEach((e) => {
                e.classList.remove("collapsed"),
                  e.setAttribute("aria-expanded", !0);
              }),
            this.setTransitioning(!0);
          const n = "scroll" + (s[0].toUpperCase() + s.slice(1)),
            o = je(this._element);
          ut.one(this._element, "transitionend", () => {
            this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse", "show"),
              (this._element.style[s] = ""),
              this.setTransitioning(!1),
              ut.trigger(this._element, "shown.bs.collapse");
          }),
            Be(this._element, o),
            (this._element.style[s] = this._element[n] + "px");
        }
        hide() {
          if (
            this._isTransitioning ||
            !this._element.classList.contains("show")
          )
            return;
          if (ut.trigger(this._element, "hide.bs.collapse").defaultPrevented)
            return;
          const e = this._getDimension();
          (this._element.style[e] =
            this._element.getBoundingClientRect()[e] + "px"),
            Ve(this._element),
            this._element.classList.add("collapsing"),
            this._element.classList.remove("collapse", "show");
          const t = this._triggerArray.length;
          if (t > 0)
            for (let e = 0; e < t; e++) {
              const t = this._triggerArray[e],
                i = Ie(t);
              i &&
                !i.classList.contains("show") &&
                (t.classList.add("collapsed"),
                t.setAttribute("aria-expanded", !1));
            }
          this.setTransitioning(!0);
          this._element.style[e] = "";
          const i = je(this._element);
          ut.one(this._element, "transitionend", () => {
            this.setTransitioning(!1),
              this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse"),
              ut.trigger(this._element, "hidden.bs.collapse");
          }),
            Be(this._element, i);
        }
        setTransitioning(e) {
          this._isTransitioning = e;
        }
        dispose() {
          super.dispose(),
            (this._config = null),
            (this._parent = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }
        _getConfig(e) {
          return (
            ((e = { ...xt, ...e }).toggle = Boolean(e.toggle)),
            qe("collapse", e, Lt),
            e
          );
        }
        _getDimension() {
          return this._element.classList.contains("width") ? "width" : "height";
        }
        _getParent() {
          let { parent: e } = this._config;
          Re(e)
            ? (void 0 === e.jquery && void 0 === e[0]) || (e = e[0])
            : (e = bt.findOne(e));
          const t = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
          return (
            bt.find(t, e).forEach((e) => {
              const t = Ie(e);
              this._addAriaAndCollapsedClass(t, [e]);
            }),
            e
          );
        }
        _addAriaAndCollapsedClass(e, t) {
          if (!e || !t.length) return;
          const i = e.classList.contains("show");
          t.forEach((e) => {
            i ? e.classList.remove("collapsed") : e.classList.add("collapsed"),
              e.setAttribute("aria-expanded", i);
          });
        }
        static collapseInterface(e, t) {
          let i = Qe.get(e, "bs.collapse");
          const s = {
            ...xt,
            ...gt.getDataAttributes(e),
            ...("object" == typeof t && t ? t : {}),
          };
          if (
            (!i &&
              s.toggle &&
              "string" == typeof t &&
              /show|hide/.test(t) &&
              (s.toggle = !1),
            i || (i = new Ot(e, s)),
            "string" == typeof t)
          ) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        }
        static jQueryInterface(e) {
          return this.each(function () {
            Ot.collapseInterface(this, e);
          });
        }
      }
      ut.on(
        document,
        "click.bs.collapse.data-api",
        '[data-bs-toggle="collapse"]',
        function (e) {
          ("A" === e.target.tagName ||
            (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
            e.preventDefault();
          const t = gt.getDataAttributes(this),
            i = Me(this);
          bt.find(i).forEach((e) => {
            const i = Qe.get(e, "bs.collapse");
            let s;
            i
              ? (null === i._parent &&
                  "string" == typeof t.parent &&
                  ((i._config.parent = t.parent), (i._parent = i._getParent())),
                (s = "toggle"))
              : (s = t),
              Ot.collapseInterface(e, s);
          });
        }
      ),
        Ye("collapse", Ot);
      const Pt = new RegExp("ArrowUp|ArrowDown|Escape"),
        Nt = Ke() ? "top-end" : "top-start",
        Dt = Ke() ? "top-start" : "top-end",
        Mt = Ke() ? "bottom-end" : "bottom-start",
        It = Ke() ? "bottom-start" : "bottom-end",
        jt = Ke() ? "left-start" : "right-start",
        Ht = Ke() ? "right-start" : "left-start",
        Rt = {
          offset: [0, 2],
          boundary: "clippingParents",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
        },
        Bt = {
          offset: "(array|string|function)",
          boundary: "(string|element)",
          reference: "(string|element|object)",
          display: "string",
          popperConfig: "(null|object|function)",
        };
      class qt extends ht {
        constructor(e, t) {
          super(e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        static get Default() {
          return Rt;
        }
        static get DefaultType() {
          return Bt;
        }
        static get DATA_KEY() {
          return "bs.dropdown";
        }
        toggle() {
          if (
            this._element.disabled ||
            this._element.classList.contains("disabled")
          )
            return;
          const e = this._element.classList.contains("show");
          qt.clearMenus(), e || this.show();
        }
        show() {
          if (
            this._element.disabled ||
            this._element.classList.contains("disabled") ||
            this._menu.classList.contains("show")
          )
            return;
          const e = qt.getParentFromElement(this._element),
            t = { relatedTarget: this._element };
          if (
            !ut.trigger(this._element, "show.bs.dropdown", t).defaultPrevented
          ) {
            if (this._inNavbar)
              gt.setDataAttribute(this._menu, "popper", "none");
            else {
              if (void 0 === s)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
              let t = this._element;
              "parent" === this._config.reference
                ? (t = e)
                : Re(this._config.reference)
                ? ((t = this._config.reference),
                  void 0 !== this._config.reference.jquery &&
                    (t = this._config.reference[0]))
                : "object" == typeof this._config.reference &&
                  (t = this._config.reference);
              const i = this._getPopperConfig(),
                n = i.modifiers.find(
                  (e) => "applyStyles" === e.name && !1 === e.enabled
                );
              (this._popper = Oe(t, this._menu, i)),
                n && gt.setDataAttribute(this._menu, "popper", "static");
            }
            "ontouchstart" in document.documentElement &&
              !e.closest(".navbar-nav") &&
              []
                .concat(...document.body.children)
                .forEach((e) => ut.on(e, "mouseover", null, function () {})),
              this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.toggle("show"),
              this._element.classList.toggle("show"),
              ut.trigger(this._element, "shown.bs.dropdown", t);
          }
        }
        hide() {
          if (
            this._element.disabled ||
            this._element.classList.contains("disabled") ||
            !this._menu.classList.contains("show")
          )
            return;
          const e = { relatedTarget: this._element };
          ut.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
            (this._popper && this._popper.destroy(),
            this._menu.classList.toggle("show"),
            this._element.classList.toggle("show"),
            gt.removeDataAttribute(this._menu, "popper"),
            ut.trigger(this._element, "hidden.bs.dropdown", e));
        }
        dispose() {
          ut.off(this._element, ".bs.dropdown"),
            (this._menu = null),
            this._popper && (this._popper.destroy(), (this._popper = null)),
            super.dispose();
        }
        update() {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _addEventListeners() {
          ut.on(this._element, "click.bs.dropdown", (e) => {
            e.preventDefault(), this.toggle();
          });
        }
        _getConfig(e) {
          if (
            ((e = {
              ...this.constructor.Default,
              ...gt.getDataAttributes(this._element),
              ...e,
            }),
            qe("dropdown", e, this.constructor.DefaultType),
            "object" == typeof e.reference &&
              !Re(e.reference) &&
              "function" != typeof e.reference.getBoundingClientRect)
          )
            throw new TypeError(
              "dropdown".toUpperCase() +
                ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
            );
          return e;
        }
        _getMenuElement() {
          return bt.next(this._element, ".dropdown-menu")[0];
        }
        _getPlacement() {
          const e = this._element.parentNode;
          if (e.classList.contains("dropend")) return jt;
          if (e.classList.contains("dropstart")) return Ht;
          const t =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return e.classList.contains("dropup") ? (t ? Dt : Nt) : t ? It : Mt;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: e } = this._config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _getPopperConfig() {
          const e = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            "static" === this._config.display &&
              (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
            {
              ...e,
              ...("function" == typeof this._config.popperConfig
                ? this._config.popperConfig(e)
                : this._config.popperConfig),
            }
          );
        }
        static dropdownInterface(e, t) {
          let i = Qe.get(e, "bs.dropdown");
          if (
            (i || (i = new qt(e, "object" == typeof t ? t : null)),
            "string" == typeof t)
          ) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        }
        static jQueryInterface(e) {
          return this.each(function () {
            qt.dropdownInterface(this, e);
          });
        }
        static clearMenus(e) {
          if (e) {
            if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
              return;
            if (/input|select|textarea|form/i.test(e.target.tagName)) return;
          }
          const t = bt.find('[data-bs-toggle="dropdown"]');
          for (let i = 0, s = t.length; i < s; i++) {
            const s = Qe.get(t[i], "bs.dropdown"),
              n = { relatedTarget: t[i] };
            if ((e && "click" === e.type && (n.clickEvent = e), !s)) continue;
            const o = s._menu;
            if (!t[i].classList.contains("show")) continue;
            if (e) {
              if ([s._element].some((t) => e.composedPath().includes(t)))
                continue;
              if ("keyup" === e.type && "Tab" === e.key && o.contains(e.target))
                continue;
            }
            ut.trigger(t[i], "hide.bs.dropdown", n).defaultPrevented ||
              ("ontouchstart" in document.documentElement &&
                []
                  .concat(...document.body.children)
                  .forEach((e) => ut.off(e, "mouseover", null, function () {})),
              t[i].setAttribute("aria-expanded", "false"),
              s._popper && s._popper.destroy(),
              o.classList.remove("show"),
              t[i].classList.remove("show"),
              gt.removeDataAttribute(o, "popper"),
              ut.trigger(t[i], "hidden.bs.dropdown", n));
          }
        }
        static getParentFromElement(e) {
          return Ie(e) || e.parentNode;
        }
        static dataApiKeydownHandler(e) {
          if (
            /input|textarea/i.test(e.target.tagName)
              ? "Space" === e.key ||
                ("Escape" !== e.key &&
                  (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                    e.target.closest(".dropdown-menu")))
              : !Pt.test(e.key)
          )
            return;
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            this.disabled || this.classList.contains("disabled"))
          )
            return;
          const t = qt.getParentFromElement(this),
            i = this.classList.contains("show");
          if ("Escape" === e.key) {
            return (
              (this.matches('[data-bs-toggle="dropdown"]')
                ? this
                : bt.prev(this, '[data-bs-toggle="dropdown"]')[0]
              ).focus(),
              void qt.clearMenus()
            );
          }
          if (!i && ("ArrowUp" === e.key || "ArrowDown" === e.key)) {
            return void (
              this.matches('[data-bs-toggle="dropdown"]')
                ? this
                : bt.prev(this, '[data-bs-toggle="dropdown"]')[0]
            ).click();
          }
          if (!i || "Space" === e.key) return void qt.clearMenus();
          const s = bt
            .find(
              ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
              t
            )
            .filter(Fe);
          if (!s.length) return;
          let n = s.indexOf(e.target);
          "ArrowUp" === e.key && n > 0 && n--,
            "ArrowDown" === e.key && n < s.length - 1 && n++,
            (n = -1 === n ? 0 : n),
            s[n].focus();
        }
      }
      ut.on(
        document,
        "keydown.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        qt.dataApiKeydownHandler
      ),
        ut.on(
          document,
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          qt.dataApiKeydownHandler
        ),
        ut.on(document, "click.bs.dropdown.data-api", qt.clearMenus),
        ut.on(document, "keyup.bs.dropdown.data-api", qt.clearMenus),
        ut.on(
          document,
          "click.bs.dropdown.data-api",
          '[data-bs-toggle="dropdown"]',
          function (e) {
            e.preventDefault(), qt.dropdownInterface(this);
          }
        ),
        Ye("dropdown", qt);
      const Ft = { backdrop: !0, keyboard: !0, focus: !0 },
        $t = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
        };
      class Wt extends ht {
        constructor(e, t) {
          super(e),
            (this._config = this._getConfig(t)),
            (this._dialog = bt.findOne(".modal-dialog", this._element)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        static get Default() {
          return Ft;
        }
        static get DATA_KEY() {
          return "bs.modal";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          if (this._isShown || this._isTransitioning) return;
          this._isAnimated() && (this._isTransitioning = !0);
          const t = ut.trigger(this._element, "show.bs.modal", {
            relatedTarget: e,
          });
          this._isShown ||
            t.defaultPrevented ||
            ((this._isShown = !0),
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            ut.on(
              this._element,
              "click.dismiss.bs.modal",
              '[data-bs-dismiss="modal"]',
              (e) => this.hide(e)
            ),
            ut.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
              ut.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
                e.target === this._element && (this._ignoreBackdropClick = !0);
              });
            }),
            this._showBackdrop(() => this._showElement(e)));
        }
        hide(e) {
          if (
            (e && e.preventDefault(), !this._isShown || this._isTransitioning)
          )
            return;
          if (ut.trigger(this._element, "hide.bs.modal").defaultPrevented)
            return;
          this._isShown = !1;
          const t = this._isAnimated();
          if (
            (t && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            ut.off(document, "focusin.bs.modal"),
            this._element.classList.remove("show"),
            ut.off(this._element, "click.dismiss.bs.modal"),
            ut.off(this._dialog, "mousedown.dismiss.bs.modal"),
            t)
          ) {
            const e = je(this._element);
            ut.one(this._element, "transitionend", (e) => this._hideModal(e)),
              Be(this._element, e);
          } else this._hideModal();
        }
        dispose() {
          [window, this._element, this._dialog].forEach((e) =>
            ut.off(e, ".bs.modal")
          ),
            super.dispose(),
            ut.off(document, "focusin.bs.modal"),
            (this._config = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _getConfig(e) {
          return (e = { ...Ft, ...e }), qe("modal", e, $t), e;
        }
        _showElement(e) {
          const t = this._isAnimated(),
            i = bt.findOne(".modal-body", this._dialog);
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0),
            i && (i.scrollTop = 0),
            t && Ve(this._element),
            this._element.classList.add("show"),
            this._config.focus && this._enforceFocus();
          const s = () => {
            this._config.focus && this._element.focus(),
              (this._isTransitioning = !1),
              ut.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
          };
          if (t) {
            const e = je(this._dialog);
            ut.one(this._dialog, "transitionend", s), Be(this._dialog, e);
          } else s();
        }
        _enforceFocus() {
          ut.off(document, "focusin.bs.modal"),
            ut.on(document, "focusin.bs.modal", (e) => {
              document === e.target ||
                this._element === e.target ||
                this._element.contains(e.target) ||
                this._element.focus();
            });
        }
        _setEscapeEvent() {
          this._isShown
            ? ut.on(this._element, "keydown.dismiss.bs.modal", (e) => {
                this._config.keyboard && "Escape" === e.key
                  ? (e.preventDefault(), this.hide())
                  : this._config.keyboard ||
                    "Escape" !== e.key ||
                    this._triggerBackdropTransition();
              })
            : ut.off(this._element, "keydown.dismiss.bs.modal");
        }
        _setResizeEvent() {
          this._isShown
            ? ut.on(window, "resize.bs.modal", () => this._adjustDialog())
            : ut.off(window, "resize.bs.modal");
        }
        _hideModal() {
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(() => {
              document.body.classList.remove("modal-open"),
                this._resetAdjustments(),
                this._resetScrollbar(),
                ut.trigger(this._element, "hidden.bs.modal");
            });
        }
        _removeBackdrop() {
          this._backdrop.parentNode.removeChild(this._backdrop),
            (this._backdrop = null);
        }
        _showBackdrop(e) {
          const t = this._isAnimated();
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              t && this._backdrop.classList.add("fade"),
              document.body.appendChild(this._backdrop),
              ut.on(this._element, "click.dismiss.bs.modal", (e) => {
                this._ignoreBackdropClick
                  ? (this._ignoreBackdropClick = !1)
                  : e.target === e.currentTarget &&
                    ("static" === this._config.backdrop
                      ? this._triggerBackdropTransition()
                      : this.hide());
              }),
              t && Ve(this._backdrop),
              this._backdrop.classList.add("show"),
              !t)
            )
              return void e();
            const i = je(this._backdrop);
            ut.one(this._backdrop, "transitionend", e), Be(this._backdrop, i);
          } else if (!this._isShown && this._backdrop) {
            this._backdrop.classList.remove("show");
            const i = () => {
              this._removeBackdrop(), e();
            };
            if (t) {
              const e = je(this._backdrop);
              ut.one(this._backdrop, "transitionend", i), Be(this._backdrop, e);
            } else i();
          } else e();
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (
            ut.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented
          )
            return;
          const e =
            this._element.scrollHeight > document.documentElement.clientHeight;
          e || (this._element.style.overflowY = "hidden"),
            this._element.classList.add("modal-static");
          const t = je(this._dialog);
          ut.off(this._element, "transitionend"),
            ut.one(this._element, "transitionend", () => {
              this._element.classList.remove("modal-static"),
                e ||
                  (ut.one(this._element, "transitionend", () => {
                    this._element.style.overflowY = "";
                  }),
                  Be(this._element, t));
            }),
            Be(this._element, t),
            this._element.focus();
        }
        _adjustDialog() {
          const e =
            this._element.scrollHeight > document.documentElement.clientHeight;
          ((!this._isBodyOverflowing && e && !Ke()) ||
            (this._isBodyOverflowing && !e && Ke())) &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            ((this._isBodyOverflowing && !e && !Ke()) ||
              (!this._isBodyOverflowing && e && Ke())) &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }
        _resetAdjustments() {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }
        _checkScrollbar() {
          const e = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(e.left + e.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }
        _setScrollbar() {
          this._isBodyOverflowing &&
            (this._setElementAttributes(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              "paddingRight",
              (e) => e + this._scrollbarWidth
            ),
            this._setElementAttributes(
              ".sticky-top",
              "marginRight",
              (e) => e - this._scrollbarWidth
            ),
            this._setElementAttributes(
              "body",
              "paddingRight",
              (e) => e + this._scrollbarWidth
            )),
            document.body.classList.add("modal-open");
        }
        _setElementAttributes(e, t, i) {
          bt.find(e).forEach((e) => {
            if (
              e !== document.body &&
              window.innerWidth > e.clientWidth + this._scrollbarWidth
            )
              return;
            const s = e.style[t],
              n = window.getComputedStyle(e)[t];
            gt.setDataAttribute(e, t, s),
              (e.style[t] = i(Number.parseFloat(n)) + "px");
          });
        }
        _resetScrollbar() {
          this._resetElementAttributes(
            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            "paddingRight"
          ),
            this._resetElementAttributes(".sticky-top", "marginRight"),
            this._resetElementAttributes("body", "paddingRight");
        }
        _resetElementAttributes(e, t) {
          bt.find(e).forEach((e) => {
            const i = gt.getDataAttribute(e, t);
            void 0 === i && e === document.body
              ? (e.style[t] = "")
              : (gt.removeDataAttribute(e, t), (e.style[t] = i));
          });
        }
        _getScrollbarWidth() {
          const e = document.createElement("div");
          (e.className = "modal-scrollbar-measure"),
            document.body.appendChild(e);
          const t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t;
        }
        static jQueryInterface(e, t) {
          return this.each(function () {
            let i = Qe.get(this, "bs.modal");
            const s = {
              ...Ft,
              ...gt.getDataAttributes(this),
              ...("object" == typeof e && e ? e : {}),
            };
            if ((i || (i = new Wt(this, s)), "string" == typeof e)) {
              if (void 0 === i[e])
                throw new TypeError(`No method named "${e}"`);
              i[e](t);
            }
          });
        }
      }
      ut.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (e) {
          const t = Ie(this);
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault(),
            ut.one(t, "show.bs.modal", (e) => {
              e.defaultPrevented ||
                ut.one(t, "hidden.bs.modal", () => {
                  Fe(this) && this.focus();
                });
            });
          let i = Qe.get(t, "bs.modal");
          if (!i) {
            const e = {
              ...gt.getDataAttributes(t),
              ...gt.getDataAttributes(this),
            };
            i = new Wt(t, e);
          }
          i.toggle(this);
        }
      ),
        Ye("modal", Wt);
      const zt = () => {
          const e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e);
        },
        Vt = (e, t, i) => {
          const s = zt();
          bt.find(e).forEach((e) => {
            if (e !== document.body && window.innerWidth > e.clientWidth + s)
              return;
            const n = e.style[t],
              o = window.getComputedStyle(e)[t];
            gt.setDataAttribute(e, t, n),
              (e.style[t] = i(Number.parseFloat(o)) + "px");
          });
        },
        Ut = (e, t) => {
          bt.find(e).forEach((e) => {
            const i = gt.getDataAttribute(e, t);
            void 0 === i && e === document.body
              ? e.style.removeProperty(t)
              : (gt.removeDataAttribute(e, t), (e.style[t] = i));
          });
        },
        Kt = ".bs.offcanvas",
        Yt = `load${Kt}.data-api`,
        Xt = { backdrop: !0, keyboard: !0, scroll: !1 },
        Qt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
        Jt = `click${Kt}.data-api`;
      class Gt extends ht {
        constructor(e, t) {
          super(e),
            (this._config = this._getConfig(t)),
            (this._isShown = !1),
            this._addEventListeners();
        }
        static get Default() {
          return Xt;
        }
        static get DATA_KEY() {
          return "bs.offcanvas";
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          if (this._isShown) return;
          if (
            ut.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
              .defaultPrevented
          )
            return;
          (this._isShown = !0),
            (this._element.style.visibility = "visible"),
            this._config.backdrop &&
              document.body.classList.add("offcanvas-backdrop"),
            this._config.scroll ||
              ((e = zt()) => {
                (document.body.style.overflow = "hidden"),
                  Vt(
                    ".fixed-top, .fixed-bottom, .is-fixed",
                    "paddingRight",
                    (t) => t + e
                  ),
                  Vt(".sticky-top", "marginRight", (t) => t - e),
                  Vt("body", "paddingRight", (t) => t + e);
              })(),
            this._element.classList.add("offcanvas-toggling"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add("show");
          setTimeout(() => {
            this._element.classList.remove("offcanvas-toggling"),
              ut.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: e,
              }),
              this._enforceFocusOnElement(this._element);
          }, je(this._element));
        }
        hide() {
          if (!this._isShown) return;
          if (ut.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
            return;
          this._element.classList.add("offcanvas-toggling"),
            ut.off(document, "focusin.bs.offcanvas"),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.remove("show");
          setTimeout(() => {
            this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._element.style.visibility = "hidden"),
              this._config.backdrop &&
                document.body.classList.remove("offcanvas-backdrop"),
              this._config.scroll ||
                ((document.body.style.overflow = "auto"),
                Ut(".fixed-top, .fixed-bottom, .is-fixed", "paddingRight"),
                Ut(".sticky-top", "marginRight"),
                Ut("body", "paddingRight")),
              ut.trigger(this._element, "hidden.bs.offcanvas"),
              this._element.classList.remove("offcanvas-toggling");
          }, je(this._element));
        }
        _getConfig(e) {
          return (
            (e = {
              ...Xt,
              ...gt.getDataAttributes(this._element),
              ...("object" == typeof e ? e : {}),
            }),
            qe("offcanvas", e, Qt),
            e
          );
        }
        _enforceFocusOnElement(e) {
          ut.off(document, "focusin.bs.offcanvas"),
            ut.on(document, "focusin.bs.offcanvas", (t) => {
              document === t.target ||
                e === t.target ||
                e.contains(t.target) ||
                e.focus();
            }),
            e.focus();
        }
        _addEventListeners() {
          ut.on(
            this._element,
            "click.dismiss.bs.offcanvas",
            '[data-bs-dismiss="offcanvas"]',
            () => this.hide()
          ),
            ut.on(document, "keydown", (e) => {
              this._config.keyboard && "Escape" === e.key && this.hide();
            }),
            ut.on(document, Jt, (e) => {
              const t = bt.findOne(Me(e.target));
              this._element.contains(e.target) ||
                t === this._element ||
                this.hide();
            });
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t =
              Qe.get(this, "bs.offcanvas") ||
              new Gt(this, "object" == typeof e ? e : {});
            if ("string" == typeof e) {
              if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      ut.on(document, Jt, '[data-bs-toggle="offcanvas"]', function (e) {
        const t = Ie(this);
        if (
          (["A", "AREA"].includes(this.tagName) && e.preventDefault(), $e(this))
        )
          return;
        ut.one(t, "hidden.bs.offcanvas", () => {
          Fe(this) && this.focus();
        });
        const i = bt.findOne(".offcanvas.show, .offcanvas-toggling");
        if (i && i !== t) return;
        (Qe.get(t, "bs.offcanvas") || new Gt(t)).toggle(this);
      }),
        ut.on(window, Yt, () => {
          bt.find(".offcanvas.show").forEach((e) =>
            (Qe.get(e, "bs.offcanvas") || new Gt(e)).show()
          );
        }),
        Ye("offcanvas", Gt);
      const Zt = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        ei = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        ti =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        ii = (e, t) => {
          const i = e.nodeName.toLowerCase();
          if (t.includes(i))
            return (
              !Zt.has(i) ||
              Boolean(ei.test(e.nodeValue) || ti.test(e.nodeValue))
            );
          const s = t.filter((e) => e instanceof RegExp);
          for (let e = 0, t = s.length; e < t; e++) if (s[e].test(i)) return !0;
          return !1;
        },
        si = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        };
      function ni(e, t, i) {
        if (!e.length) return e;
        if (i && "function" == typeof i) return i(e);
        const s = new window.DOMParser().parseFromString(e, "text/html"),
          n = Object.keys(t),
          o = [].concat(...s.body.querySelectorAll("*"));
        for (let e = 0, i = o.length; e < i; e++) {
          const i = o[e],
            s = i.nodeName.toLowerCase();
          if (!n.includes(s)) {
            i.parentNode.removeChild(i);
            continue;
          }
          const r = [].concat(...i.attributes),
            a = [].concat(t["*"] || [], t[s] || []);
          r.forEach((e) => {
            ii(e, a) || i.removeAttribute(e.nodeName);
          });
        }
        return s.body.innerHTML;
      }
      const oi = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        ri = new Set(["sanitize", "allowList", "sanitizeFn"]),
        ai = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(array|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacements: "array",
          boundary: "(string|element)",
          customClass: "(string|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          allowList: "object",
          popperConfig: "(null|object|function)",
        },
        li = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: Ke() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: Ke() ? "right" : "left",
        },
        ci = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: [0, 0],
          container: !1,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          boundary: "clippingParents",
          customClass: "",
          sanitize: !0,
          sanitizeFn: null,
          allowList: si,
          popperConfig: null,
        },
        ui = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip",
        };
      class hi extends ht {
        constructor(e, t) {
          if (void 0 === s)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          super(e),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        static get Default() {
          return ci;
        }
        static get NAME() {
          return "tooltip";
        }
        static get DATA_KEY() {
          return "bs.tooltip";
        }
        static get Event() {
          return ui;
        }
        static get EVENT_KEY() {
          return ".bs.tooltip";
        }
        static get DefaultType() {
          return ai;
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle(e) {
          if (this._isEnabled)
            if (e) {
              const t = this._initializeOnDelegatedTarget(e);
              (t._activeTrigger.click = !t._activeTrigger.click),
                t._isWithActiveTrigger()
                  ? t._enter(null, t)
                  : t._leave(null, t);
            } else {
              if (this.getTipElement().classList.contains("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }
        dispose() {
          clearTimeout(this._timeout),
            ut.off(this._element, this.constructor.EVENT_KEY),
            ut.off(
              this._element.closest(".modal"),
              "hide.bs.modal",
              this._hideModalHandler
            ),
            this.tip &&
              this.tip.parentNode &&
              this.tip.parentNode.removeChild(this.tip),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.config = null),
            (this.tip = null),
            super.dispose();
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this.isWithContent() || !this._isEnabled) return;
          const e = ut.trigger(this._element, this.constructor.Event.SHOW),
            t = We(this._element),
            i =
              null === t
                ? this._element.ownerDocument.documentElement.contains(
                    this._element
                  )
                : t.contains(this._element);
          if (e.defaultPrevented || !i) return;
          const s = this.getTipElement(),
            n = Ne(this.constructor.NAME);
          s.setAttribute("id", n),
            this._element.setAttribute("aria-describedby", n),
            this.setContent(),
            this.config.animation && s.classList.add("fade");
          const o =
              "function" == typeof this.config.placement
                ? this.config.placement.call(this, s, this._element)
                : this.config.placement,
            r = this._getAttachment(o);
          this._addAttachmentClass(r);
          const a = this._getContainer();
          Qe.set(s, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) ||
              (a.appendChild(s),
              ut.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper
              ? this._popper.update()
              : (this._popper = Oe(this._element, s, this._getPopperConfig(r))),
            s.classList.add("show");
          const l =
            "function" == typeof this.config.customClass
              ? this.config.customClass()
              : this.config.customClass;
          l && s.classList.add(...l.split(" ")),
            "ontouchstart" in document.documentElement &&
              [].concat(...document.body.children).forEach((e) => {
                ut.on(e, "mouseover", function () {});
              });
          const c = () => {
            const e = this._hoverState;
            (this._hoverState = null),
              ut.trigger(this._element, this.constructor.Event.SHOWN),
              "out" === e && this._leave(null, this);
          };
          if (this.tip.classList.contains("fade")) {
            const e = je(this.tip);
            ut.one(this.tip, "transitionend", c), Be(this.tip, e);
          } else c();
        }
        hide() {
          if (!this._popper) return;
          const e = this.getTipElement(),
            t = () => {
              this._isWithActiveTrigger() ||
                ("show" !== this._hoverState &&
                  e.parentNode &&
                  e.parentNode.removeChild(e),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                ut.trigger(this._element, this.constructor.Event.HIDDEN),
                this._popper &&
                  (this._popper.destroy(), (this._popper = null)));
            };
          if (
            !ut.trigger(this._element, this.constructor.Event.HIDE)
              .defaultPrevented
          ) {
            if (
              (e.classList.remove("show"),
              "ontouchstart" in document.documentElement &&
                []
                  .concat(...document.body.children)
                  .forEach((e) => ut.off(e, "mouseover", ze)),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              this.tip.classList.contains("fade"))
            ) {
              const i = je(e);
              ut.one(e, "transitionend", t), Be(e, i);
            } else t();
            this._hoverState = "";
          }
        }
        update() {
          null !== this._popper && this._popper.update();
        }
        isWithContent() {
          return Boolean(this.getTitle());
        }
        getTipElement() {
          if (this.tip) return this.tip;
          const e = document.createElement("div");
          return (
            (e.innerHTML = this.config.template),
            (this.tip = e.children[0]),
            this.tip
          );
        }
        setContent() {
          const e = this.getTipElement();
          this.setElementContent(
            bt.findOne(".tooltip-inner", e),
            this.getTitle()
          ),
            e.classList.remove("fade", "show");
        }
        setElementContent(e, t) {
          if (null !== e)
            return "object" == typeof t && Re(t)
              ? (t.jquery && (t = t[0]),
                void (this.config.html
                  ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t))
                  : (e.textContent = t.textContent)))
              : void (this.config.html
                  ? (this.config.sanitize &&
                      (t = ni(
                        t,
                        this.config.allowList,
                        this.config.sanitizeFn
                      )),
                    (e.innerHTML = t))
                  : (e.textContent = t));
        }
        getTitle() {
          let e = this._element.getAttribute("data-bs-original-title");
          return (
            e ||
              (e =
                "function" == typeof this.config.title
                  ? this.config.title.call(this._element)
                  : this.config.title),
            e
          );
        }
        updateAttachment(e) {
          return "right" === e ? "end" : "left" === e ? "start" : e;
        }
        _initializeOnDelegatedTarget(e, t) {
          const i = this.constructor.DATA_KEY;
          return (
            (t = t || Qe.get(e.delegateTarget, i)) ||
              ((t = new this.constructor(
                e.delegateTarget,
                this._getDelegateConfig()
              )),
              Qe.set(e.delegateTarget, i, t)),
            t
          );
        }
        _getOffset() {
          const { offset: e } = this.config;
          return "string" == typeof e
            ? e.split(",").map((e) => Number.parseInt(e, 10))
            : "function" == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _getPopperConfig(e) {
          const t = {
            placement: e,
            modifiers: [
              {
                name: "flip",
                options: {
                  altBoundary: !0,
                  fallbackPlacements: this.config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this.config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "onChange",
                enabled: !0,
                phase: "afterWrite",
                fn: (e) => this._handlePopperPlacementChange(e),
              },
            ],
            onFirstUpdate: (e) => {
              e.options.placement !== e.placement &&
                this._handlePopperPlacementChange(e);
            },
          };
          return {
            ...t,
            ...("function" == typeof this.config.popperConfig
              ? this.config.popperConfig(t)
              : this.config.popperConfig),
          };
        }
        _addAttachmentClass(e) {
          this.getTipElement().classList.add(
            "bs-tooltip-" + this.updateAttachment(e)
          );
        }
        _getContainer() {
          return !1 === this.config.container
            ? document.body
            : Re(this.config.container)
            ? this.config.container
            : bt.findOne(this.config.container);
        }
        _getAttachment(e) {
          return li[e.toUpperCase()];
        }
        _setListeners() {
          this.config.trigger.split(" ").forEach((e) => {
            if ("click" === e)
              ut.on(
                this._element,
                this.constructor.Event.CLICK,
                this.config.selector,
                (e) => this.toggle(e)
              );
            else if ("manual" !== e) {
              const t =
                  "hover" === e
                    ? this.constructor.Event.MOUSEENTER
                    : this.constructor.Event.FOCUSIN,
                i =
                  "hover" === e
                    ? this.constructor.Event.MOUSELEAVE
                    : this.constructor.Event.FOCUSOUT;
              ut.on(this._element, t, this.config.selector, (e) =>
                this._enter(e)
              ),
                ut.on(this._element, i, this.config.selector, (e) =>
                  this._leave(e)
                );
            }
          }),
            (this._hideModalHandler = () => {
              this._element && this.hide();
            }),
            ut.on(
              this._element.closest(".modal"),
              "hide.bs.modal",
              this._hideModalHandler
            ),
            this.config.selector
              ? (this.config = {
                  ...this.config,
                  trigger: "manual",
                  selector: "",
                })
              : this._fixTitle();
        }
        _fixTitle() {
          const e = this._element.getAttribute("title"),
            t = typeof this._element.getAttribute("data-bs-original-title");
          (e || "string" !== t) &&
            (this._element.setAttribute("data-bs-original-title", e || ""),
            !e ||
              this._element.getAttribute("aria-label") ||
              this._element.textContent ||
              this._element.setAttribute("aria-label", e),
            this._element.setAttribute("title", ""));
        }
        _enter(e, t) {
          (t = this._initializeOnDelegatedTarget(e, t)),
            e &&
              (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
            t.getTipElement().classList.contains("show") ||
            "show" === t._hoverState
              ? (t._hoverState = "show")
              : (clearTimeout(t._timeout),
                (t._hoverState = "show"),
                t.config.delay && t.config.delay.show
                  ? (t._timeout = setTimeout(() => {
                      "show" === t._hoverState && t.show();
                    }, t.config.delay.show))
                  : t.show());
        }
        _leave(e, t) {
          (t = this._initializeOnDelegatedTarget(e, t)),
            e &&
              (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] =
                t._element.contains(e.relatedTarget)),
            t._isWithActiveTrigger() ||
              (clearTimeout(t._timeout),
              (t._hoverState = "out"),
              t.config.delay && t.config.delay.hide
                ? (t._timeout = setTimeout(() => {
                    "out" === t._hoverState && t.hide();
                  }, t.config.delay.hide))
                : t.hide());
        }
        _isWithActiveTrigger() {
          for (const e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1;
        }
        _getConfig(e) {
          const t = gt.getDataAttributes(this._element);
          return (
            Object.keys(t).forEach((e) => {
              ri.has(e) && delete t[e];
            }),
            e &&
              "object" == typeof e.container &&
              e.container.jquery &&
              (e.container = e.container[0]),
            "number" ==
              typeof (e = {
                ...this.constructor.Default,
                ...t,
                ...("object" == typeof e && e ? e : {}),
              }).delay && (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            qe("tooltip", e, this.constructor.DefaultType),
            e.sanitize &&
              (e.template = ni(e.template, e.allowList, e.sanitizeFn)),
            e
          );
        }
        _getDelegateConfig() {
          const e = {};
          if (this.config)
            for (const t in this.config)
              this.constructor.Default[t] !== this.config[t] &&
                (e[t] = this.config[t]);
          return e;
        }
        _cleanTipClass() {
          const e = this.getTipElement(),
            t = e.getAttribute("class").match(oi);
          null !== t &&
            t.length > 0 &&
            t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
        }
        _handlePopperPlacementChange(e) {
          const { state: t } = e;
          t &&
            ((this.tip = t.elements.popper),
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(t.placement)));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = Qe.get(this, "bs.tooltip");
            const i = "object" == typeof e && e;
            if (
              (t || !/dispose|hide/.test(e)) &&
              (t || (t = new hi(this, i)), "string" == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Ye("tooltip", hi);
      const di = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        pi = {
          ...hi.Default,
          placement: "right",
          offset: [0, 8],
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        mi = { ...hi.DefaultType, content: "(string|element|function)" },
        fi = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover",
        };
      class gi extends hi {
        static get Default() {
          return pi;
        }
        static get NAME() {
          return "popover";
        }
        static get DATA_KEY() {
          return "bs.popover";
        }
        static get Event() {
          return fi;
        }
        static get EVENT_KEY() {
          return ".bs.popover";
        }
        static get DefaultType() {
          return mi;
        }
        isWithContent() {
          return this.getTitle() || this._getContent();
        }
        setContent() {
          const e = this.getTipElement();
          this.setElementContent(
            bt.findOne(".popover-header", e),
            this.getTitle()
          );
          let t = this._getContent();
          "function" == typeof t && (t = t.call(this._element)),
            this.setElementContent(bt.findOne(".popover-body", e), t),
            e.classList.remove("fade", "show");
        }
        _addAttachmentClass(e) {
          this.getTipElement().classList.add(
            "bs-popover-" + this.updateAttachment(e)
          );
        }
        _getContent() {
          return (
            this._element.getAttribute("data-bs-content") || this.config.content
          );
        }
        _cleanTipClass() {
          const e = this.getTipElement(),
            t = e.getAttribute("class").match(di);
          null !== t &&
            t.length > 0 &&
            t.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = Qe.get(this, "bs.popover");
            const i = "object" == typeof e ? e : null;
            if (
              (t || !/dispose|hide/.test(e)) &&
              (t || ((t = new gi(this, i)), Qe.set(this, "bs.popover", t)),
              "string" == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Ye("popover", gi);
      const bi = { offset: 10, method: "auto", target: "" },
        yi = { offset: "number", method: "string", target: "(string|element)" };
      class vi extends ht {
        constructor(e, t) {
          super(e),
            (this._scrollElement =
              "BODY" === this._element.tagName ? window : this._element),
            (this._config = this._getConfig(t)),
            (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            ut.on(this._scrollElement, "scroll.bs.scrollspy", () =>
              this._process()
            ),
            this.refresh(),
            this._process();
        }
        static get Default() {
          return bi;
        }
        static get DATA_KEY() {
          return "bs.scrollspy";
        }
        refresh() {
          const e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            t = "auto" === this._config.method ? e : this._config.method,
            i = "position" === t ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight());
          bt.find(this._selector)
            .map((e) => {
              const s = Me(e),
                n = s ? bt.findOne(s) : null;
              if (n) {
                const e = n.getBoundingClientRect();
                if (e.width || e.height) return [gt[t](n).top + i, s];
              }
              return null;
            })
            .filter((e) => e)
            .sort((e, t) => e[0] - t[0])
            .forEach((e) => {
              this._offsets.push(e[0]), this._targets.push(e[1]);
            });
        }
        dispose() {
          super.dispose(),
            ut.off(this._scrollElement, ".bs.scrollspy"),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }
        _getConfig(e) {
          if (
            "string" !=
              typeof (e = { ...bi, ...("object" == typeof e && e ? e : {}) })
                .target &&
            Re(e.target)
          ) {
            let { id: t } = e.target;
            t || ((t = Ne("scrollspy")), (e.target.id = t)),
              (e.target = "#" + t);
          }
          return qe("scrollspy", e, yi), e;
        }
        _getScrollTop() {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }
        _getOffsetHeight() {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
          const e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            i = this._config.offset + t - this._getOffsetHeight();
          if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
            const e = this._targets[this._targets.length - 1];
            this._activeTarget !== e && this._activate(e);
          } else {
            if (
              this._activeTarget &&
              e < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (let t = this._offsets.length; t--; ) {
              this._activeTarget !== this._targets[t] &&
                e >= this._offsets[t] &&
                (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) &&
                this._activate(this._targets[t]);
            }
          }
        }
        _activate(e) {
          (this._activeTarget = e), this._clear();
          const t = this._selector
              .split(",")
              .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
            i = bt.findOne(t.join(","));
          i.classList.contains("dropdown-item")
            ? (bt
                .findOne(".dropdown-toggle", i.closest(".dropdown"))
                .classList.add("active"),
              i.classList.add("active"))
            : (i.classList.add("active"),
              bt.parents(i, ".nav, .list-group").forEach((e) => {
                bt
                  .prev(e, ".nav-link, .list-group-item")
                  .forEach((e) => e.classList.add("active")),
                  bt.prev(e, ".nav-item").forEach((e) => {
                    bt.children(e, ".nav-link").forEach((e) =>
                      e.classList.add("active")
                    );
                  });
              })),
            ut.trigger(this._scrollElement, "activate.bs.scrollspy", {
              relatedTarget: e,
            });
        }
        _clear() {
          bt.find(this._selector)
            .filter((e) => e.classList.contains("active"))
            .forEach((e) => e.classList.remove("active"));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = Qe.get(this, "bs.scrollspy");
            if (
              (t || (t = new vi(this, "object" == typeof e && e)),
              "string" == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      ut.on(window, "load.bs.scrollspy.data-api", () => {
        bt.find('[data-bs-spy="scroll"]').forEach(
          (e) => new vi(e, gt.getDataAttributes(e))
        );
      }),
        Ye("scrollspy", vi);
      class wi extends ht {
        static get DATA_KEY() {
          return "bs.tab";
        }
        show() {
          if (
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
              this._element.classList.contains("active")) ||
            $e(this._element)
          )
            return;
          let e;
          const t = Ie(this._element),
            i = this._element.closest(".nav, .list-group");
          if (i) {
            const t =
              "UL" === i.nodeName || "OL" === i.nodeName
                ? ":scope > li > .active"
                : ".active";
            (e = bt.find(t, i)), (e = e[e.length - 1]);
          }
          const s = e
            ? ut.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
            : null;
          if (
            ut.trigger(this._element, "show.bs.tab", { relatedTarget: e })
              .defaultPrevented ||
            (null !== s && s.defaultPrevented)
          )
            return;
          this._activate(this._element, i);
          const n = () => {
            ut.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
              ut.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
          };
          t ? this._activate(t, t.parentNode, n) : n();
        }
        _activate(e, t, i) {
          const s = (
              !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                ? bt.children(t, ".active")
                : bt.find(":scope > li > .active", t)
            )[0],
            n = i && s && s.classList.contains("fade"),
            o = () => this._transitionComplete(e, s, i);
          if (s && n) {
            const e = je(s);
            s.classList.remove("show"), ut.one(s, "transitionend", o), Be(s, e);
          } else o();
        }
        _transitionComplete(e, t, i) {
          if (t) {
            t.classList.remove("active");
            const e = bt.findOne(
              ":scope > .dropdown-menu .active",
              t.parentNode
            );
            e && e.classList.remove("active"),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !1);
          }
          if (
            (e.classList.add("active"),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !0),
            Ve(e),
            e.classList.contains("fade") && e.classList.add("show"),
            e.parentNode && e.parentNode.classList.contains("dropdown-menu"))
          ) {
            e.closest(".dropdown") &&
              bt
                .find(".dropdown-toggle")
                .forEach((e) => e.classList.add("active")),
              e.setAttribute("aria-expanded", !0);
          }
          i && i();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Qe.get(this, "bs.tab") || new wi(this);
            if ("string" == typeof e) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      ut.on(
        document,
        "click.bs.tab.data-api",
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        function (e) {
          e.preventDefault();
          (Qe.get(this, "bs.tab") || new wi(this)).show();
        }
      ),
        Ye("tab", wi);
      const _i = { animation: "boolean", autohide: "boolean", delay: "number" },
        ki = { animation: !0, autohide: !0, delay: 5e3 };
      class Ti extends ht {
        constructor(e, t) {
          super(e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        static get DefaultType() {
          return _i;
        }
        static get Default() {
          return ki;
        }
        static get DATA_KEY() {
          return "bs.toast";
        }
        show() {
          if (ut.trigger(this._element, "show.bs.toast").defaultPrevented)
            return;
          this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
          const e = () => {
            this._element.classList.remove("showing"),
              this._element.classList.add("show"),
              ut.trigger(this._element, "shown.bs.toast"),
              this._config.autohide &&
                (this._timeout = setTimeout(() => {
                  this.hide();
                }, this._config.delay));
          };
          if (
            (this._element.classList.remove("hide"),
            Ve(this._element),
            this._element.classList.add("showing"),
            this._config.animation)
          ) {
            const t = je(this._element);
            ut.one(this._element, "transitionend", e), Be(this._element, t);
          } else e();
        }
        hide() {
          if (!this._element.classList.contains("show")) return;
          if (ut.trigger(this._element, "hide.bs.toast").defaultPrevented)
            return;
          const e = () => {
            this._element.classList.add("hide"),
              ut.trigger(this._element, "hidden.bs.toast");
          };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            const t = je(this._element);
            ut.one(this._element, "transitionend", e), Be(this._element, t);
          } else e();
        }
        dispose() {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            ut.off(this._element, "click.dismiss.bs.toast"),
            super.dispose(),
            (this._config = null);
        }
        _getConfig(e) {
          return (
            (e = {
              ...ki,
              ...gt.getDataAttributes(this._element),
              ...("object" == typeof e && e ? e : {}),
            }),
            qe("toast", e, this.constructor.DefaultType),
            e
          );
        }
        _setListeners() {
          ut.on(
            this._element,
            "click.dismiss.bs.toast",
            '[data-bs-dismiss="toast"]',
            () => this.hide()
          );
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            let t = Qe.get(this, "bs.toast");
            if (
              (t || (t = new Ti(this, "object" == typeof e && e)),
              "string" == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      Ye("toast", Ti);
    },
    function (e, t, i) {
      (function (t) {
        "object" == typeof navigator &&
          (e.exports = (function () {
            "use strict";
            function e(e, t, i) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = i),
                e
              );
            }
            function i(e, t) {
              for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            function s(e, t, i) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = i),
                e
              );
            }
            function n(e, t) {
              var i = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t &&
                  (s = s.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  i.push.apply(i, s);
              }
              return i;
            }
            function o(e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? n(Object(i), !0).forEach(function (t) {
                      s(e, t, i[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(i)
                    )
                  : n(Object(i)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(i, t)
                      );
                    });
              }
              return e;
            }
            var r = { addCSS: !0, thumbWidth: 15, watch: !0 };
            function a(e, t) {
              return function () {
                return Array.from(document.querySelectorAll(t)).includes(this);
              }.call(e, t);
            }
            var l = function (e) {
                return null != e ? e.constructor : null;
              },
              c = function (e, t) {
                return !!(e && t && e instanceof t);
              },
              u = function (e) {
                return l(e) === String;
              },
              h = function (e) {
                return Array.isArray(e);
              },
              d = function (e) {
                return c(e, NodeList);
              },
              p = u,
              m = h,
              f = d,
              g = function (e) {
                return c(e, Element);
              },
              b = function (e) {
                return c(e, Event);
              },
              y = function (e) {
                return (
                  (function (e) {
                    return null == e;
                  })(e) ||
                  ((u(e) || h(e) || d(e)) && !e.length) ||
                  ((function (e) {
                    return l(e) === Object;
                  })(e) &&
                    !Object.keys(e).length)
                );
              },
              v = (function () {
                function e(t, i) {
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    g(t)
                      ? (this.element = t)
                      : p(t) && (this.element = document.querySelector(t)),
                    g(this.element) &&
                      y(this.element.rangeTouch) &&
                      ((this.config = o({}, r, {}, i)), this.init());
                }
                return (
                  (function (e, t, s) {
                    t && i(e.prototype, t), s && i(e, s);
                  })(
                    e,
                    [
                      {
                        key: "init",
                        value: function () {
                          e.enabled &&
                            (this.config.addCSS &&
                              ((this.element.style.userSelect = "none"),
                              (this.element.style.webKitUserSelect = "none"),
                              (this.element.style.touchAction =
                                "manipulation")),
                            this.listeners(!0),
                            (this.element.rangeTouch = this));
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          e.enabled &&
                            (this.config.addCSS &&
                              ((this.element.style.userSelect = ""),
                              (this.element.style.webKitUserSelect = ""),
                              (this.element.style.touchAction = "")),
                            this.listeners(!1),
                            (this.element.rangeTouch = null));
                        },
                      },
                      {
                        key: "listeners",
                        value: function (e) {
                          var t = this,
                            i = e ? "addEventListener" : "removeEventListener";
                          ["touchstart", "touchmove", "touchend"].forEach(
                            function (e) {
                              t.element[i](
                                e,
                                function (e) {
                                  return t.set(e);
                                },
                                !1
                              );
                            }
                          );
                        },
                      },
                      {
                        key: "get",
                        value: function (t) {
                          if (!e.enabled || !b(t)) return null;
                          var i,
                            s = t.target,
                            n = t.changedTouches[0],
                            o = parseFloat(s.getAttribute("min")) || 0,
                            r = parseFloat(s.getAttribute("max")) || 100,
                            a = parseFloat(s.getAttribute("step")) || 1,
                            l = s.getBoundingClientRect(),
                            c =
                              ((100 / l.width) * (this.config.thumbWidth / 2)) /
                              100;
                          return (
                            0 > (i = (100 / l.width) * (n.clientX - l.left))
                              ? (i = 0)
                              : 100 < i && (i = 100),
                            50 > i
                              ? (i -= (100 - 2 * i) * c)
                              : 50 < i && (i += 2 * (i - 50) * c),
                            o +
                              (function (e, t) {
                                if (1 > t) {
                                  var i = (function (e) {
                                    var t = ""
                                      .concat(e)
                                      .match(
                                        /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/
                                      );
                                    return t
                                      ? Math.max(
                                          0,
                                          (t[1] ? t[1].length : 0) -
                                            (t[2] ? +t[2] : 0)
                                        )
                                      : 0;
                                  })(t);
                                  return parseFloat(e.toFixed(i));
                                }
                                return Math.round(e / t) * t;
                              })((i / 100) * (r - o), a)
                          );
                        },
                      },
                      {
                        key: "set",
                        value: function (t) {
                          e.enabled &&
                            b(t) &&
                            !t.target.disabled &&
                            (t.preventDefault(),
                            (t.target.value = this.get(t)),
                            (function (e, t) {
                              if (e && t) {
                                var i = new Event(t, { bubbles: !0 });
                                e.dispatchEvent(i);
                              }
                            })(
                              t.target,
                              "touchend" === t.type ? "change" : "input"
                            ));
                        },
                      },
                    ],
                    [
                      {
                        key: "setup",
                        value: function (t) {
                          var i =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            s = null;
                          if (
                            (y(t) || p(t)
                              ? (s = Array.from(
                                  document.querySelectorAll(
                                    p(t) ? t : 'input[type="range"]'
                                  )
                                ))
                              : g(t)
                              ? (s = [t])
                              : f(t)
                              ? (s = Array.from(t))
                              : m(t) && (s = t.filter(g)),
                            y(s))
                          )
                            return null;
                          var n = o({}, r, {}, i);
                          if (p(t) && n.watch) {
                            var l = new MutationObserver(function (i) {
                              Array.from(i).forEach(function (i) {
                                Array.from(i.addedNodes).forEach(function (i) {
                                  g(i) && a(i, t) && new e(i, n);
                                });
                              });
                            });
                            l.observe(document.body, {
                              childList: !0,
                              subtree: !0,
                            });
                          }
                          return s.map(function (t) {
                            return new e(t, i);
                          });
                        },
                      },
                      {
                        key: "enabled",
                        get: function () {
                          return "ontouchstart" in document.documentElement;
                        },
                      },
                    ]
                  ),
                  e
                );
              })();
            const w = (e) => (null != e ? e.constructor : null),
              _ = (e, t) => Boolean(e && t && e instanceof t),
              k = (e) => null == e,
              T = (e) => w(e) === Object,
              E = (e) => w(e) === String,
              C = (e) => w(e) === Function,
              A = (e) => Array.isArray(e),
              S = (e) => _(e, NodeList),
              x = (e) =>
                k(e) ||
                ((E(e) || A(e) || S(e)) && !e.length) ||
                (T(e) && !Object.keys(e).length);
            var L = k,
              O = T,
              P = (e) => w(e) === Number && !Number.isNaN(e),
              N = E,
              D = (e) => w(e) === Boolean,
              M = C,
              I = A,
              j = S,
              H = (e) =>
                null !== e &&
                "object" == typeof e &&
                1 === e.nodeType &&
                "object" == typeof e.style &&
                "object" == typeof e.ownerDocument,
              R = (e) => _(e, Event),
              B = (e) => _(e, KeyboardEvent),
              q = (e) => _(e, TextTrack) || (!k(e) && E(e.kind)),
              F = (e) => {
                if (_(e, window.URL)) return !0;
                if (!E(e)) return !1;
                let t = e;
                (e.startsWith("http://") && e.startsWith("https://")) ||
                  (t = "http://" + e);
                try {
                  return !x(new URL(t).hostname);
                } catch (e) {
                  return !1;
                }
              },
              $ = x;
            const W = (() => {
              const e = document.createElement("span"),
                t = {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd otransitionend",
                  transition: "transitionend",
                },
                i = Object.keys(t).find((t) => void 0 !== e.style[t]);
              return !!N(i) && t[i];
            })();
            function z(e, t) {
              setTimeout(() => {
                try {
                  (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
                } catch (e) {}
              }, t);
            }
            const V = {
              isIE: Boolean(window.document.documentMode),
              isEdge: window.navigator.userAgent.includes("Edge"),
              isWebkit:
                "WebkitAppearance" in document.documentElement.style &&
                !/Edge/.test(navigator.userAgent),
              isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
              isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
            };
            function U(e, t) {
              return t.split(".").reduce((e, t) => e && e[t], e);
            }
            function K(e = {}, ...t) {
              if (!t.length) return e;
              const i = t.shift();
              return O(i)
                ? (Object.keys(i).forEach((t) => {
                    O(i[t])
                      ? (Object.keys(e).includes(t) ||
                          Object.assign(e, { [t]: {} }),
                        K(e[t], i[t]))
                      : Object.assign(e, { [t]: i[t] });
                  }),
                  K(e, ...t))
                : e;
            }
            function Y(e, t) {
              const i = e.length ? e : [e];
              Array.from(i)
                .reverse()
                .forEach((e, i) => {
                  const s = i > 0 ? t.cloneNode(!0) : t,
                    n = e.parentNode,
                    o = e.nextSibling;
                  s.appendChild(e), o ? n.insertBefore(s, o) : n.appendChild(s);
                });
            }
            function X(e, t) {
              H(e) &&
                !$(t) &&
                Object.entries(t)
                  .filter(([, e]) => !L(e))
                  .forEach(([t, i]) => e.setAttribute(t, i));
            }
            function Q(e, t, i) {
              const s = document.createElement(e);
              return O(t) && X(s, t), N(i) && (s.innerText = i), s;
            }
            function J(e, t, i, s) {
              H(t) && t.appendChild(Q(e, i, s));
            }
            function G(e) {
              j(e) || I(e)
                ? Array.from(e).forEach(G)
                : H(e) && H(e.parentNode) && e.parentNode.removeChild(e);
            }
            function Z(e) {
              if (!H(e)) return;
              let { length: t } = e.childNodes;
              for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
            }
            function ee(e, t) {
              return H(t) && H(t.parentNode) && H(e)
                ? (t.parentNode.replaceChild(e, t), e)
                : null;
            }
            function te(e, t) {
              if (!N(e) || $(e)) return {};
              const i = {},
                s = K({}, t);
              return (
                e.split(",").forEach((e) => {
                  const t = e.trim(),
                    n = t.replace(".", ""),
                    o = t.replace(/[[\]]/g, "").split("="),
                    [r] = o,
                    a = o.length > 1 ? o[1].replace(/["']/g, "") : "";
                  switch (t.charAt(0)) {
                    case ".":
                      N(s.class)
                        ? (i.class = `${s.class} ${n}`)
                        : (i.class = n);
                      break;
                    case "#":
                      i.id = t.replace("#", "");
                      break;
                    case "[":
                      i[r] = a;
                  }
                }),
                K(s, i)
              );
            }
            function ie(e, t) {
              if (!H(e)) return;
              let i = t;
              D(i) || (i = !e.hidden), (e.hidden = i);
            }
            function se(e, t, i) {
              if (j(e)) return Array.from(e).map((e) => se(e, t, i));
              if (H(e)) {
                let s = "toggle";
                return (
                  void 0 !== i && (s = i ? "add" : "remove"),
                  e.classList[s](t),
                  e.classList.contains(t)
                );
              }
              return !1;
            }
            function ne(e, t) {
              return H(e) && e.classList.contains(t);
            }
            function oe(e, t) {
              const { prototype: i } = Element;
              return (
                i.matches ||
                i.webkitMatchesSelector ||
                i.mozMatchesSelector ||
                i.msMatchesSelector ||
                function () {
                  return Array.from(document.querySelectorAll(t)).includes(
                    this
                  );
                }
              ).call(e, t);
            }
            function re(e) {
              return this.elements.container.querySelectorAll(e);
            }
            function ae(e) {
              return this.elements.container.querySelector(e);
            }
            function le(e = null, t = !1) {
              H(e) &&
                (e.focus({ preventScroll: !0 }),
                t && se(e, this.config.classNames.tabFocus));
            }
            const ce = {
                "audio/ogg": "vorbis",
                "audio/wav": "1",
                "video/webm": "vp8, vorbis",
                "video/mp4": "avc1.42E01E, mp4a.40.2",
                "video/ogg": "theora",
              },
              ue = {
                audio: "canPlayType" in document.createElement("audio"),
                video: "canPlayType" in document.createElement("video"),
                check(e, t, i) {
                  const s = V.isIPhone && i && ue.playsinline,
                    n = ue[e] || "html5" !== t;
                  return {
                    api: n,
                    ui:
                      n && ue.rangeInput && ("video" !== e || !V.isIPhone || s),
                  };
                },
                pip: !(
                  V.isIPhone ||
                  (!M(Q("video").webkitSetPresentationMode) &&
                    (!document.pictureInPictureEnabled ||
                      Q("video").disablePictureInPicture))
                ),
                airplay: M(window.WebKitPlaybackTargetAvailabilityEvent),
                playsinline: "playsInline" in document.createElement("video"),
                mime(e) {
                  if ($(e)) return !1;
                  const [t] = e.split("/");
                  let i = e;
                  if (!this.isHTML5 || t !== this.type) return !1;
                  Object.keys(ce).includes(i) && (i += `; codecs="${ce[e]}"`);
                  try {
                    return Boolean(
                      i && this.media.canPlayType(i).replace(/no/, "")
                    );
                  } catch (e) {
                    return !1;
                  }
                },
                textTracks: "textTracks" in document.createElement("video"),
                rangeInput: (() => {
                  const e = document.createElement("input");
                  return (e.type = "range"), "range" === e.type;
                })(),
                touch: "ontouchstart" in document.documentElement,
                transitions: !1 !== W,
                reducedMotion:
                  "matchMedia" in window &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              },
              he = (() => {
                let e = !1;
                try {
                  const t = Object.defineProperty({}, "passive", {
                    get: () => ((e = !0), null),
                  });
                  window.addEventListener("test", null, t),
                    window.removeEventListener("test", null, t);
                } catch (e) {}
                return e;
              })();
            function de(e, t, i, s = !1, n = !0, o = !1) {
              if (!e || !("addEventListener" in e) || $(t) || !M(i)) return;
              const r = t.split(" ");
              let a = o;
              he && (a = { passive: n, capture: o }),
                r.forEach((t) => {
                  this &&
                    this.eventListeners &&
                    s &&
                    this.eventListeners.push({
                      element: e,
                      type: t,
                      callback: i,
                      options: a,
                    }),
                    e[s ? "addEventListener" : "removeEventListener"](t, i, a);
                });
            }
            function pe(e, t = "", i, s = !0, n = !1) {
              de.call(this, e, t, i, !0, s, n);
            }
            function me(e, t = "", i, s = !0, n = !1) {
              de.call(this, e, t, i, !1, s, n);
            }
            function fe(e, t = "", i, s = !0, n = !1) {
              const o = (...r) => {
                me(e, t, o, s, n), i.apply(this, r);
              };
              de.call(this, e, t, o, !0, s, n);
            }
            function ge(e, t = "", i = !1, s = {}) {
              if (!H(e) || $(t)) return;
              const n = new CustomEvent(t, {
                bubbles: i,
                detail: { ...s, plyr: this },
              });
              e.dispatchEvent(n);
            }
            function be() {
              this &&
                this.eventListeners &&
                (this.eventListeners.forEach((e) => {
                  const { element: t, type: i, callback: s, options: n } = e;
                  t.removeEventListener(i, s, n);
                }),
                (this.eventListeners = []));
            }
            function ye() {
              return new Promise((e) =>
                this.ready
                  ? setTimeout(e, 0)
                  : pe.call(this, this.elements.container, "ready", e)
              ).then(() => {});
            }
            function ve(e) {
              ((e) => _(e, Promise) && C(e.then))(e) && e.then(null, () => {});
            }
            function we(e) {
              return I(e) ? e.filter((t, i) => e.indexOf(t) === i) : e;
            }
            function _e(e, t) {
              return I(e) && e.length
                ? e.reduce((e, i) =>
                    Math.abs(i - t) < Math.abs(e - t) ? i : e
                  )
                : null;
            }
            const ke = [
              [1, 1],
              [4, 3],
              [3, 4],
              [5, 4],
              [4, 5],
              [3, 2],
              [2, 3],
              [16, 10],
              [10, 16],
              [16, 9],
              [9, 16],
              [21, 9],
              [9, 21],
              [32, 9],
              [9, 32],
            ].reduce((e, [t, i]) => ({ ...e, [t / i]: [t, i] }), {});
            function Te(e) {
              return (
                !!(I(e) || (N(e) && e.includes(":"))) &&
                (I(e) ? e : e.split(":")).map(Number).every(P)
              );
            }
            function Ee(e) {
              if (!I(e) || !e.every(P)) return null;
              const [t, i] = e,
                s = (e, t) => (0 === t ? e : s(t, e % t)),
                n = s(t, i);
              return [t / n, i / n];
            }
            function Ce(e) {
              const t = (e) => (Te(e) ? e.split(":").map(Number) : null);
              let i = t(e);
              if (
                (null === i && (i = t(this.config.ratio)),
                null === i &&
                  !$(this.embed) &&
                  I(this.embed.ratio) &&
                  ({ ratio: i } = this.embed),
                null === i && this.isHTML5)
              ) {
                const { videoWidth: e, videoHeight: t } = this.media;
                i = Ee([e, t]);
              }
              return i;
            }
            function Ae(e) {
              if (!this.isVideo) return {};
              const { wrapper: t } = this.elements,
                i = Ce.call(this, e);
              if (!I(i)) return {};
              const [s, n] = i,
                o = (100 / s) * n;
              if (
                (window.CSS && window.CSS.supports(`aspect-ratio: ${s}/${n}`)
                  ? (t.style.aspectRatio = `${s}/${n}`)
                  : (t.style.paddingBottom = o + "%"),
                this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
              ) {
                const e =
                    (100 / this.media.offsetWidth) *
                    parseInt(
                      window.getComputedStyle(this.media).paddingBottom,
                      10
                    ),
                  i = (e - o) / (e / 50);
                this.fullscreen.active
                  ? (t.style.paddingBottom = null)
                  : (this.media.style.transform = `translateY(-${i}%)`);
              } else
                this.isHTML5 &&
                  t.classList.toggle(
                    this.config.classNames.videoFixedRatio,
                    null !== i
                  );
              return { padding: o, ratio: i };
            }
            function Se(e, t, i = 0.05) {
              const s = e / t,
                n = _e(Object.keys(ke), s);
              return Math.abs(n - s) <= i ? ke[n] : [e, t];
            }
            const xe = {
              getSources() {
                return this.isHTML5
                  ? Array.from(this.media.querySelectorAll("source")).filter(
                      (e) => {
                        const t = e.getAttribute("type");
                        return !!$(t) || ue.mime.call(this, t);
                      }
                    )
                  : [];
              },
              getQualityOptions() {
                return this.config.quality.forced
                  ? this.config.quality.options
                  : xe.getSources
                      .call(this)
                      .map((e) => Number(e.getAttribute("size")))
                      .filter(Boolean);
              },
              setup() {
                if (!this.isHTML5) return;
                const e = this;
                (e.options.speed = e.config.speed.options),
                  $(this.config.ratio) || Ae.call(e),
                  Object.defineProperty(e.media, "quality", {
                    get() {
                      const t = xe.getSources
                        .call(e)
                        .find((t) => t.getAttribute("src") === e.source);
                      return t && Number(t.getAttribute("size"));
                    },
                    set(t) {
                      if (e.quality !== t) {
                        if (
                          e.config.quality.forced &&
                          M(e.config.quality.onChange)
                        )
                          e.config.quality.onChange(t);
                        else {
                          const i = xe.getSources
                            .call(e)
                            .find((e) => Number(e.getAttribute("size")) === t);
                          if (!i) return;
                          const {
                            currentTime: s,
                            paused: n,
                            preload: o,
                            readyState: r,
                            playbackRate: a,
                          } = e.media;
                          (e.media.src = i.getAttribute("src")),
                            ("none" !== o || r) &&
                              (e.once("loadedmetadata", () => {
                                (e.speed = a),
                                  (e.currentTime = s),
                                  n || ve(e.play());
                              }),
                              e.media.load());
                        }
                        ge.call(e, e.media, "qualitychange", !1, {
                          quality: t,
                        });
                      }
                    },
                  });
              },
              cancelRequests() {
                this.isHTML5 &&
                  (G(xe.getSources.call(this)),
                  this.media.setAttribute("src", this.config.blankVideo),
                  this.media.load(),
                  this.debug.log("Cancelled network requests"));
              },
            };
            function Le(e, ...t) {
              return $(e)
                ? e
                : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString());
            }
            const Oe = (e = "", t = "", i = "") =>
                e.replace(
                  new RegExp(
                    t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
                    "g"
                  ),
                  i.toString()
                ),
              Pe = (e = "") =>
                e
                  .toString()
                  .replace(
                    /\w\S*/g,
                    (e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                  );
            function Ne(e) {
              const t = document.createElement("div");
              return t.appendChild(e), t.innerHTML;
            }
            const De = {
                pip: "PIP",
                airplay: "AirPlay",
                html5: "HTML5",
                vimeo: "Vimeo",
                youtube: "YouTube",
              },
              Me = {
                get(e = "", t = {}) {
                  if ($(e) || $(t)) return "";
                  let i = U(t.i18n, e);
                  if ($(i)) return Object.keys(De).includes(e) ? De[e] : "";
                  const s = { "{seektime}": t.seekTime, "{title}": t.title };
                  return (
                    Object.entries(s).forEach(([e, t]) => {
                      i = Oe(i, e, t);
                    }),
                    i
                  );
                },
              };
            class Ie {
              constructor(t) {
                e(this, "get", (e) => {
                  if (!Ie.supported || !this.enabled) return null;
                  const t = window.localStorage.getItem(this.key);
                  if ($(t)) return null;
                  const i = JSON.parse(t);
                  return N(e) && e.length ? i[e] : i;
                }),
                  e(this, "set", (e) => {
                    if (!Ie.supported || !this.enabled) return;
                    if (!O(e)) return;
                    let t = this.get();
                    $(t) && (t = {}),
                      K(t, e),
                      window.localStorage.setItem(this.key, JSON.stringify(t));
                  }),
                  (this.enabled = t.config.storage.enabled),
                  (this.key = t.config.storage.key);
              }
              static get supported() {
                try {
                  if (!("localStorage" in window)) return !1;
                  const e = "___test";
                  return (
                    window.localStorage.setItem(e, e),
                    window.localStorage.removeItem(e),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }
            }
            function je(e, t = "text") {
              return new Promise((i, s) => {
                try {
                  const s = new XMLHttpRequest();
                  if (!("withCredentials" in s)) return;
                  s.addEventListener("load", () => {
                    if ("text" === t)
                      try {
                        i(JSON.parse(s.responseText));
                      } catch (e) {
                        i(s.responseText);
                      }
                    else i(s.response);
                  }),
                    s.addEventListener("error", () => {
                      throw new Error(s.status);
                    }),
                    s.open("GET", e, !0),
                    (s.responseType = t),
                    s.send();
                } catch (e) {
                  s(e);
                }
              });
            }
            function He(e, t) {
              if (!N(e)) return;
              const i = N(t);
              let s = !1;
              const n = () => null !== document.getElementById(t),
                o = (e, t) => {
                  (e.innerHTML = t),
                    (i && n()) ||
                      document.body.insertAdjacentElement("afterbegin", e);
                };
              if (!i || !n()) {
                const n = Ie.supported,
                  r = document.createElement("div");
                if (
                  (r.setAttribute("hidden", ""),
                  i && r.setAttribute("id", t),
                  n)
                ) {
                  const e = window.localStorage.getItem("cache-" + t);
                  if (((s = null !== e), s)) {
                    const t = JSON.parse(e);
                    o(r, t.content);
                  }
                }
                je(e)
                  .then((e) => {
                    $(e) ||
                      (n &&
                        window.localStorage.setItem(
                          "cache-" + t,
                          JSON.stringify({ content: e })
                        ),
                      o(r, e));
                  })
                  .catch(() => {});
              }
            }
            const Re = (e) => Math.trunc((e / 60 / 60) % 60, 10);
            function Be(e = 0, t = !1, i = !1) {
              if (!P(e)) return Be(void 0, t, i);
              const s = (e) => ("0" + e).slice(-2);
              let n = Re(e);
              const o = ((r = e), Math.trunc((r / 60) % 60, 10));
              var r;
              const a = ((e) => Math.trunc(e % 60, 10))(e);
              return (
                (n = t || n > 0 ? n + ":" : ""),
                `${i && e > 0 ? "-" : ""}${n}${s(o)}:${s(a)}`
              );
            }
            const qe = {
              getIconUrl() {
                const e =
                  new URL(this.config.iconUrl, window.location).host !==
                    window.location.host ||
                  (V.isIE && !window.svg4everybody);
                return { url: this.config.iconUrl, cors: e };
              },
              findElements() {
                try {
                  return (
                    (this.elements.controls = ae.call(
                      this,
                      this.config.selectors.controls.wrapper
                    )),
                    (this.elements.buttons = {
                      play: re.call(this, this.config.selectors.buttons.play),
                      pause: ae.call(this, this.config.selectors.buttons.pause),
                      restart: ae.call(
                        this,
                        this.config.selectors.buttons.restart
                      ),
                      rewind: ae.call(
                        this,
                        this.config.selectors.buttons.rewind
                      ),
                      fastForward: ae.call(
                        this,
                        this.config.selectors.buttons.fastForward
                      ),
                      mute: ae.call(this, this.config.selectors.buttons.mute),
                      pip: ae.call(this, this.config.selectors.buttons.pip),
                      airplay: ae.call(
                        this,
                        this.config.selectors.buttons.airplay
                      ),
                      settings: ae.call(
                        this,
                        this.config.selectors.buttons.settings
                      ),
                      captions: ae.call(
                        this,
                        this.config.selectors.buttons.captions
                      ),
                      fullscreen: ae.call(
                        this,
                        this.config.selectors.buttons.fullscreen
                      ),
                    }),
                    (this.elements.progress = ae.call(
                      this,
                      this.config.selectors.progress
                    )),
                    (this.elements.inputs = {
                      seek: ae.call(this, this.config.selectors.inputs.seek),
                      volume: ae.call(
                        this,
                        this.config.selectors.inputs.volume
                      ),
                    }),
                    (this.elements.display = {
                      buffer: ae.call(
                        this,
                        this.config.selectors.display.buffer
                      ),
                      currentTime: ae.call(
                        this,
                        this.config.selectors.display.currentTime
                      ),
                      duration: ae.call(
                        this,
                        this.config.selectors.display.duration
                      ),
                    }),
                    H(this.elements.progress) &&
                      (this.elements.display.seekTooltip =
                        this.elements.progress.querySelector(
                          "." + this.config.classNames.tooltip
                        )),
                    !0
                  );
                } catch (e) {
                  return (
                    this.debug.warn(
                      "It looks like there is a problem with your custom controls HTML",
                      e
                    ),
                    this.toggleNativeControls(!0),
                    !1
                  );
                }
              },
              createIcon(e, t) {
                const i = "http://www.w3.org/2000/svg",
                  s = qe.getIconUrl.call(this),
                  n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`,
                  o = document.createElementNS(i, "svg");
                X(o, K(t, { "aria-hidden": "true", focusable: "false" }));
                const r = document.createElementNS(i, "use"),
                  a = `${n}-${e}`;
                return (
                  "href" in r &&
                    r.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
                  r.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "xlink:href",
                    a
                  ),
                  o.appendChild(r),
                  o
                );
              },
              createLabel(e, t = {}) {
                const i = Me.get(e, this.config);
                return Q(
                  "span",
                  {
                    ...t,
                    class: [t.class, this.config.classNames.hidden]
                      .filter(Boolean)
                      .join(" "),
                  },
                  i
                );
              },
              createBadge(e) {
                if ($(e)) return null;
                const t = Q("span", {
                  class: this.config.classNames.menu.value,
                });
                return (
                  t.appendChild(
                    Q("span", { class: this.config.classNames.menu.badge }, e)
                  ),
                  t
                );
              },
              createButton(e, t) {
                const i = K({}, t);
                let s = (function (e = "") {
                  let t = e.toString();
                  return (
                    (t = (function (e = "") {
                      let t = e.toString();
                      return (
                        (t = Oe(t, "-", " ")),
                        (t = Oe(t, "_", " ")),
                        (t = Pe(t)),
                        Oe(t, " ", "")
                      );
                    })(t)),
                    t.charAt(0).toLowerCase() + t.slice(1)
                  );
                })(e);
                const n = {
                  element: "button",
                  toggle: !1,
                  label: null,
                  icon: null,
                  labelPressed: null,
                  iconPressed: null,
                };
                switch (
                  (["element", "icon", "label"].forEach((e) => {
                    Object.keys(i).includes(e) && ((n[e] = i[e]), delete i[e]);
                  }),
                  "button" !== n.element ||
                    Object.keys(i).includes("type") ||
                    (i.type = "button"),
                  Object.keys(i).includes("class")
                    ? i.class
                        .split(" ")
                        .some((e) => e === this.config.classNames.control) ||
                      K(i, {
                        class: `${i.class} ${this.config.classNames.control}`,
                      })
                    : (i.class = this.config.classNames.control),
                  e)
                ) {
                  case "play":
                    (n.toggle = !0),
                      (n.label = "play"),
                      (n.labelPressed = "pause"),
                      (n.icon = "play"),
                      (n.iconPressed = "pause");
                    break;
                  case "mute":
                    (n.toggle = !0),
                      (n.label = "mute"),
                      (n.labelPressed = "unmute"),
                      (n.icon = "volume"),
                      (n.iconPressed = "muted");
                    break;
                  case "captions":
                    (n.toggle = !0),
                      (n.label = "enableCaptions"),
                      (n.labelPressed = "disableCaptions"),
                      (n.icon = "captions-off"),
                      (n.iconPressed = "captions-on");
                    break;
                  case "fullscreen":
                    (n.toggle = !0),
                      (n.label = "enterFullscreen"),
                      (n.labelPressed = "exitFullscreen"),
                      (n.icon = "enter-fullscreen"),
                      (n.iconPressed = "exit-fullscreen");
                    break;
                  case "play-large":
                    (i.class += ` ${this.config.classNames.control}--overlaid`),
                      (s = "play"),
                      (n.label = "play"),
                      (n.icon = "play");
                    break;
                  default:
                    $(n.label) && (n.label = s), $(n.icon) && (n.icon = e);
                }
                const o = Q(n.element);
                return (
                  n.toggle
                    ? (o.appendChild(
                        qe.createIcon.call(this, n.iconPressed, {
                          class: "icon--pressed",
                        })
                      ),
                      o.appendChild(
                        qe.createIcon.call(this, n.icon, {
                          class: "icon--not-pressed",
                        })
                      ),
                      o.appendChild(
                        qe.createLabel.call(this, n.labelPressed, {
                          class: "label--pressed",
                        })
                      ),
                      o.appendChild(
                        qe.createLabel.call(this, n.label, {
                          class: "label--not-pressed",
                        })
                      ))
                    : (o.appendChild(qe.createIcon.call(this, n.icon)),
                      o.appendChild(qe.createLabel.call(this, n.label))),
                  K(i, te(this.config.selectors.buttons[s], i)),
                  X(o, i),
                  "play" === s
                    ? (I(this.elements.buttons[s]) ||
                        (this.elements.buttons[s] = []),
                      this.elements.buttons[s].push(o))
                    : (this.elements.buttons[s] = o),
                  o
                );
              },
              createRange(e, t) {
                const i = Q(
                  "input",
                  K(
                    te(this.config.selectors.inputs[e]),
                    {
                      type: "range",
                      min: 0,
                      max: 100,
                      step: 0.01,
                      value: 0,
                      autocomplete: "off",
                      role: "slider",
                      "aria-label": Me.get(e, this.config),
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": 0,
                    },
                    t
                  )
                );
                return (
                  (this.elements.inputs[e] = i),
                  qe.updateRangeFill.call(this, i),
                  v.setup(i),
                  i
                );
              },
              createProgress(e, t) {
                const i = Q(
                  "progress",
                  K(
                    te(this.config.selectors.display[e]),
                    {
                      min: 0,
                      max: 100,
                      value: 0,
                      role: "progressbar",
                      "aria-hidden": !0,
                    },
                    t
                  )
                );
                if ("volume" !== e) {
                  i.appendChild(Q("span", null, "0"));
                  const t = { played: "played", buffer: "buffered" }[e],
                    s = t ? Me.get(t, this.config) : "";
                  i.innerText = "% " + s.toLowerCase();
                }
                return (this.elements.display[e] = i), i;
              },
              createTime(e, t) {
                const i = te(this.config.selectors.display[e], t),
                  s = Q(
                    "div",
                    K(i, {
                      class: `${i.class ? i.class : ""} ${
                        this.config.classNames.display.time
                      } `.trim(),
                      "aria-label": Me.get(e, this.config),
                    }),
                    "00:00"
                  );
                return (this.elements.display[e] = s), s;
              },
              bindMenuItemShortcuts(e, t) {
                pe.call(
                  this,
                  e,
                  "keydown keyup",
                  (i) => {
                    if (![32, 38, 39, 40].includes(i.which)) return;
                    if (
                      (i.preventDefault(),
                      i.stopPropagation(),
                      "keydown" === i.type)
                    )
                      return;
                    const s = oe(e, '[role="menuitemradio"]');
                    if (!s && [32, 39].includes(i.which))
                      qe.showMenuPanel.call(this, t, !0);
                    else {
                      let t;
                      32 !== i.which &&
                        (40 === i.which || (s && 39 === i.which)
                          ? ((t = e.nextElementSibling),
                            H(t) || (t = e.parentNode.firstElementChild))
                          : ((t = e.previousElementSibling),
                            H(t) || (t = e.parentNode.lastElementChild)),
                        le.call(this, t, !0));
                    }
                  },
                  !1
                ),
                  pe.call(this, e, "keyup", (e) => {
                    13 === e.which &&
                      qe.focusFirstMenuItem.call(this, null, !0);
                  });
              },
              createMenuItem({
                value: e,
                list: t,
                type: i,
                title: s,
                badge: n = null,
                checked: o = !1,
              }) {
                const r = te(this.config.selectors.inputs[i]),
                  a = Q(
                    "button",
                    K(r, {
                      type: "button",
                      role: "menuitemradio",
                      class: `${this.config.classNames.control} ${
                        r.class ? r.class : ""
                      }`.trim(),
                      "aria-checked": o,
                      value: e,
                    })
                  ),
                  l = Q("span");
                (l.innerHTML = s),
                  H(n) && l.appendChild(n),
                  a.appendChild(l),
                  Object.defineProperty(a, "checked", {
                    enumerable: !0,
                    get: () => "true" === a.getAttribute("aria-checked"),
                    set(e) {
                      e &&
                        Array.from(a.parentNode.children)
                          .filter((e) => oe(e, '[role="menuitemradio"]'))
                          .forEach((e) =>
                            e.setAttribute("aria-checked", "false")
                          ),
                        a.setAttribute("aria-checked", e ? "true" : "false");
                    },
                  }),
                  this.listeners.bind(
                    a,
                    "click keyup",
                    (t) => {
                      if (!B(t) || 32 === t.which) {
                        switch (
                          (t.preventDefault(),
                          t.stopPropagation(),
                          (a.checked = !0),
                          i)
                        ) {
                          case "language":
                            this.currentTrack = Number(e);
                            break;
                          case "quality":
                            this.quality = e;
                            break;
                          case "speed":
                            this.speed = parseFloat(e);
                        }
                        qe.showMenuPanel.call(this, "home", B(t));
                      }
                    },
                    i,
                    !1
                  ),
                  qe.bindMenuItemShortcuts.call(this, a, i),
                  t.appendChild(a);
              },
              formatTime(e = 0, t = !1) {
                return P(e) ? Be(e, Re(this.duration) > 0, t) : e;
              },
              updateTimeDisplay(e = null, t = 0, i = !1) {
                H(e) && P(t) && (e.innerText = qe.formatTime(t, i));
              },
              updateVolume() {
                this.supported.ui &&
                  (H(this.elements.inputs.volume) &&
                    qe.setRange.call(
                      this,
                      this.elements.inputs.volume,
                      this.muted ? 0 : this.volume
                    ),
                  H(this.elements.buttons.mute) &&
                    (this.elements.buttons.mute.pressed =
                      this.muted || 0 === this.volume));
              },
              setRange(e, t = 0) {
                H(e) && ((e.value = t), qe.updateRangeFill.call(this, e));
              },
              updateProgress(e) {
                if (!this.supported.ui || !R(e)) return;
                let t = 0;
                const i = (e, t) => {
                  const i = P(t) ? t : 0,
                    s = H(e) ? e : this.elements.display.buffer;
                  if (H(s)) {
                    s.value = i;
                    const e = s.getElementsByTagName("span")[0];
                    H(e) && (e.childNodes[0].nodeValue = i);
                  }
                };
                if (e)
                  switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                      (s = this.currentTime),
                        (n = this.duration),
                        (t =
                          0 === s ||
                          0 === n ||
                          Number.isNaN(s) ||
                          Number.isNaN(n)
                            ? 0
                            : ((s / n) * 100).toFixed(2)),
                        "timeupdate" === e.type &&
                          qe.setRange.call(this, this.elements.inputs.seek, t);
                      break;
                    case "playing":
                    case "progress":
                      i(this.elements.display.buffer, 100 * this.buffered);
                  }
                var s, n;
              },
              updateRangeFill(e) {
                const t = R(e) ? e.target : e;
                if (H(t) && "range" === t.getAttribute("type")) {
                  if (oe(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    const e = qe.formatTime(this.currentTime),
                      i = qe.formatTime(this.duration),
                      s = Me.get("seekLabel", this.config);
                    t.setAttribute(
                      "aria-valuetext",
                      s.replace("{currentTime}", e).replace("{duration}", i)
                    );
                  } else if (oe(t, this.config.selectors.inputs.volume)) {
                    const e = 100 * t.value;
                    t.setAttribute("aria-valuenow", e),
                      t.setAttribute("aria-valuetext", e.toFixed(1) + "%");
                  } else t.setAttribute("aria-valuenow", t.value);
                  V.isWebkit &&
                    t.style.setProperty(
                      "--value",
                      (t.value / t.max) * 100 + "%"
                    );
                }
              },
              updateSeekTooltip(e) {
                if (
                  !this.config.tooltips.seek ||
                  !H(this.elements.inputs.seek) ||
                  !H(this.elements.display.seekTooltip) ||
                  0 === this.duration
                )
                  return;
                const t = this.config.classNames.tooltip + "--visible",
                  i = (e) => se(this.elements.display.seekTooltip, t, e);
                if (this.touch) return void i(!1);
                let s = 0;
                const n = this.elements.progress.getBoundingClientRect();
                if (R(e)) s = (100 / n.width) * (e.pageX - n.left);
                else {
                  if (!ne(this.elements.display.seekTooltip, t)) return;
                  s = parseFloat(
                    this.elements.display.seekTooltip.style.left,
                    10
                  );
                }
                s < 0 ? (s = 0) : s > 100 && (s = 100),
                  qe.updateTimeDisplay.call(
                    this,
                    this.elements.display.seekTooltip,
                    (this.duration / 100) * s
                  ),
                  (this.elements.display.seekTooltip.style.left = s + "%"),
                  R(e) &&
                    ["mouseenter", "mouseleave"].includes(e.type) &&
                    i("mouseenter" === e.type);
              },
              timeUpdate(e) {
                const t =
                  !H(this.elements.display.duration) && this.config.invertTime;
                qe.updateTimeDisplay.call(
                  this,
                  this.elements.display.currentTime,
                  t ? this.duration - this.currentTime : this.currentTime,
                  t
                ),
                  (e && "timeupdate" === e.type && this.media.seeking) ||
                    qe.updateProgress.call(this, e);
              },
              durationUpdate() {
                if (
                  !this.supported.ui ||
                  (!this.config.invertTime && this.currentTime)
                )
                  return;
                if (this.duration >= 2 ** 32)
                  return (
                    ie(this.elements.display.currentTime, !0),
                    void ie(this.elements.progress, !0)
                  );
                H(this.elements.inputs.seek) &&
                  this.elements.inputs.seek.setAttribute(
                    "aria-valuemax",
                    this.duration
                  );
                const e = H(this.elements.display.duration);
                !e &&
                  this.config.displayDuration &&
                  this.paused &&
                  qe.updateTimeDisplay.call(
                    this,
                    this.elements.display.currentTime,
                    this.duration
                  ),
                  e &&
                    qe.updateTimeDisplay.call(
                      this,
                      this.elements.display.duration,
                      this.duration
                    ),
                  qe.updateSeekTooltip.call(this);
              },
              toggleMenuButton(e, t) {
                ie(this.elements.settings.buttons[e], !t);
              },
              updateSetting(e, t, i) {
                const s = this.elements.settings.panels[e];
                let n = null,
                  o = t;
                if ("captions" === e) n = this.currentTrack;
                else {
                  if (
                    ((n = $(i) ? this[e] : i),
                    $(n) && (n = this.config[e].default),
                    !$(this.options[e]) && !this.options[e].includes(n))
                  )
                    return void this.debug.warn(
                      `Unsupported value of '${n}' for ${e}`
                    );
                  if (!this.config[e].options.includes(n))
                    return void this.debug.warn(
                      `Disabled value of '${n}' for ${e}`
                    );
                }
                if (
                  (H(o) || (o = s && s.querySelector('[role="menu"]')), !H(o))
                )
                  return;
                this.elements.settings.buttons[e].querySelector(
                  "." + this.config.classNames.menu.value
                ).innerHTML = qe.getLabel.call(this, e, n);
                const r = o && o.querySelector(`[value="${n}"]`);
                H(r) && (r.checked = !0);
              },
              getLabel(e, t) {
                switch (e) {
                  case "speed":
                    return 1 === t
                      ? Me.get("normal", this.config)
                      : t + "&times;";
                  case "quality":
                    if (P(t)) {
                      const e = Me.get("qualityLabel." + t, this.config);
                      return e.length ? e : t + "p";
                    }
                    return Pe(t);
                  case "captions":
                    return We.getLabel.call(this);
                  default:
                    return null;
                }
              },
              setQualityMenu(e) {
                if (!H(this.elements.settings.panels.quality)) return;
                const t = "quality",
                  i =
                    this.elements.settings.panels.quality.querySelector(
                      '[role="menu"]'
                    );
                I(e) &&
                  (this.options.quality = we(e).filter((e) =>
                    this.config.quality.options.includes(e)
                  ));
                const s =
                  !$(this.options.quality) && this.options.quality.length > 1;
                if (
                  (qe.toggleMenuButton.call(this, t, s),
                  Z(i),
                  qe.checkMenu.call(this),
                  !s)
                )
                  return;
                const n = (e) => {
                  const t = Me.get("qualityBadge." + e, this.config);
                  return t.length ? qe.createBadge.call(this, t) : null;
                };
                this.options.quality
                  .sort((e, t) => {
                    const i = this.config.quality.options;
                    return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
                  })
                  .forEach((e) => {
                    qe.createMenuItem.call(this, {
                      value: e,
                      list: i,
                      type: t,
                      title: qe.getLabel.call(this, "quality", e),
                      badge: n(e),
                    });
                  }),
                  qe.updateSetting.call(this, t, i);
              },
              setCaptionsMenu() {
                if (!H(this.elements.settings.panels.captions)) return;
                const e = "captions",
                  t =
                    this.elements.settings.panels.captions.querySelector(
                      '[role="menu"]'
                    ),
                  i = We.getTracks.call(this),
                  s = Boolean(i.length);
                if (
                  (qe.toggleMenuButton.call(this, e, s),
                  Z(t),
                  qe.checkMenu.call(this),
                  !s)
                )
                  return;
                const n = i.map((e, i) => ({
                  value: i,
                  checked: this.captions.toggled && this.currentTrack === i,
                  title: We.getLabel.call(this, e),
                  badge:
                    e.language &&
                    qe.createBadge.call(this, e.language.toUpperCase()),
                  list: t,
                  type: "language",
                }));
                n.unshift({
                  value: -1,
                  checked: !this.captions.toggled,
                  title: Me.get("disabled", this.config),
                  list: t,
                  type: "language",
                }),
                  n.forEach(qe.createMenuItem.bind(this)),
                  qe.updateSetting.call(this, e, t);
              },
              setSpeedMenu() {
                if (!H(this.elements.settings.panels.speed)) return;
                const e = "speed",
                  t =
                    this.elements.settings.panels.speed.querySelector(
                      '[role="menu"]'
                    );
                this.options.speed = this.options.speed.filter(
                  (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
                );
                const i =
                  !$(this.options.speed) && this.options.speed.length > 1;
                qe.toggleMenuButton.call(this, e, i),
                  Z(t),
                  qe.checkMenu.call(this),
                  i &&
                    (this.options.speed.forEach((i) => {
                      qe.createMenuItem.call(this, {
                        value: i,
                        list: t,
                        type: e,
                        title: qe.getLabel.call(this, "speed", i),
                      });
                    }),
                    qe.updateSetting.call(this, e, t));
              },
              checkMenu() {
                const { buttons: e } = this.elements.settings,
                  t = !$(e) && Object.values(e).some((e) => !e.hidden);
                ie(this.elements.settings.menu, !t);
              },
              focusFirstMenuItem(e, t = !1) {
                if (this.elements.settings.popup.hidden) return;
                let i = e;
                H(i) ||
                  (i = Object.values(this.elements.settings.panels).find(
                    (e) => !e.hidden
                  ));
                const s = i.querySelector('[role^="menuitem"]');
                le.call(this, s, t);
              },
              toggleMenu(e) {
                const { popup: t } = this.elements.settings,
                  i = this.elements.buttons.settings;
                if (!H(t) || !H(i)) return;
                const { hidden: s } = t;
                let n = s;
                if (D(e)) n = e;
                else if (B(e) && 27 === e.which) n = !1;
                else if (R(e)) {
                  const s = M(e.composedPath) ? e.composedPath()[0] : e.target,
                    o = t.contains(s);
                  if (o || (!o && e.target !== i && n)) return;
                }
                i.setAttribute("aria-expanded", n),
                  ie(t, !n),
                  se(
                    this.elements.container,
                    this.config.classNames.menu.open,
                    n
                  ),
                  n && B(e)
                    ? qe.focusFirstMenuItem.call(this, null, !0)
                    : n || s || le.call(this, i, B(e));
              },
              getMenuSize(e) {
                const t = e.cloneNode(!0);
                (t.style.position = "absolute"),
                  (t.style.opacity = 0),
                  t.removeAttribute("hidden"),
                  e.parentNode.appendChild(t);
                const i = t.scrollWidth,
                  s = t.scrollHeight;
                return G(t), { width: i, height: s };
              },
              showMenuPanel(e = "", t = !1) {
                const i = this.elements.container.querySelector(
                  `#plyr-settings-${this.id}-${e}`
                );
                if (!H(i)) return;
                const s = i.parentNode,
                  n = Array.from(s.children).find((e) => !e.hidden);
                if (ue.transitions && !ue.reducedMotion) {
                  (s.style.width = n.scrollWidth + "px"),
                    (s.style.height = n.scrollHeight + "px");
                  const e = qe.getMenuSize.call(this, i),
                    t = (e) => {
                      e.target === s &&
                        ["width", "height"].includes(e.propertyName) &&
                        ((s.style.width = ""),
                        (s.style.height = ""),
                        me.call(this, s, W, t));
                    };
                  pe.call(this, s, W, t),
                    (s.style.width = e.width + "px"),
                    (s.style.height = e.height + "px");
                }
                ie(n, !0), ie(i, !1), qe.focusFirstMenuItem.call(this, i, t);
              },
              setDownloadUrl() {
                const e = this.elements.buttons.download;
                H(e) && e.setAttribute("href", this.download);
              },
              create(e) {
                const {
                  bindMenuItemShortcuts: t,
                  createButton: i,
                  createProgress: s,
                  createRange: n,
                  createTime: o,
                  setQualityMenu: r,
                  setSpeedMenu: a,
                  showMenuPanel: l,
                } = qe;
                (this.elements.controls = null),
                  I(this.config.controls) &&
                    this.config.controls.includes("play-large") &&
                    this.elements.container.appendChild(
                      i.call(this, "play-large")
                    );
                const c = Q("div", te(this.config.selectors.controls.wrapper));
                this.elements.controls = c;
                const u = { class: "plyr__controls__item" };
                return (
                  we(
                    I(this.config.controls) ? this.config.controls : []
                  ).forEach((r) => {
                    if (
                      ("restart" === r &&
                        c.appendChild(i.call(this, "restart", u)),
                      "rewind" === r &&
                        c.appendChild(i.call(this, "rewind", u)),
                      "play" === r && c.appendChild(i.call(this, "play", u)),
                      "fast-forward" === r &&
                        c.appendChild(i.call(this, "fast-forward", u)),
                      "progress" === r)
                    ) {
                      const t = Q("div", {
                          class: u.class + " plyr__progress__container",
                        }),
                        i = Q("div", te(this.config.selectors.progress));
                      if (
                        (i.appendChild(
                          n.call(this, "seek", { id: "plyr-seek-" + e.id })
                        ),
                        i.appendChild(s.call(this, "buffer")),
                        this.config.tooltips.seek)
                      ) {
                        const e = Q(
                          "span",
                          { class: this.config.classNames.tooltip },
                          "00:00"
                        );
                        i.appendChild(e),
                          (this.elements.display.seekTooltip = e);
                      }
                      (this.elements.progress = i),
                        t.appendChild(this.elements.progress),
                        c.appendChild(t);
                    }
                    if (
                      ("current-time" === r &&
                        c.appendChild(o.call(this, "currentTime", u)),
                      "duration" === r &&
                        c.appendChild(o.call(this, "duration", u)),
                      "mute" === r || "volume" === r)
                    ) {
                      let { volume: t } = this.elements;
                      if (
                        ((H(t) && c.contains(t)) ||
                          ((t = Q(
                            "div",
                            K({}, u, {
                              class: (u.class + " plyr__volume").trim(),
                            })
                          )),
                          (this.elements.volume = t),
                          c.appendChild(t)),
                        "mute" === r && t.appendChild(i.call(this, "mute")),
                        "volume" === r && !V.isIos)
                      ) {
                        const i = {
                          max: 1,
                          step: 0.05,
                          value: this.config.volume,
                        };
                        t.appendChild(
                          n.call(
                            this,
                            "volume",
                            K(i, { id: "plyr-volume-" + e.id })
                          )
                        );
                      }
                    }
                    if (
                      ("captions" === r &&
                        c.appendChild(i.call(this, "captions", u)),
                      "settings" === r && !$(this.config.settings))
                    ) {
                      const s = Q(
                        "div",
                        K({}, u, {
                          class: (u.class + " plyr__menu").trim(),
                          hidden: "",
                        })
                      );
                      s.appendChild(
                        i.call(this, "settings", {
                          "aria-haspopup": !0,
                          "aria-controls": "plyr-settings-" + e.id,
                          "aria-expanded": !1,
                        })
                      );
                      const n = Q("div", {
                          class: "plyr__menu__container",
                          id: "plyr-settings-" + e.id,
                          hidden: "",
                        }),
                        o = Q("div"),
                        r = Q("div", { id: `plyr-settings-${e.id}-home` }),
                        a = Q("div", { role: "menu" });
                      r.appendChild(a),
                        o.appendChild(r),
                        (this.elements.settings.panels.home = r),
                        this.config.settings.forEach((i) => {
                          const s = Q(
                            "button",
                            K(te(this.config.selectors.buttons.settings), {
                              type: "button",
                              class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                              role: "menuitem",
                              "aria-haspopup": !0,
                              hidden: "",
                            })
                          );
                          t.call(this, s, i),
                            pe.call(this, s, "click", () => {
                              l.call(this, i, !1);
                            });
                          const n = Q("span", null, Me.get(i, this.config)),
                            r = Q("span", {
                              class: this.config.classNames.menu.value,
                            });
                          (r.innerHTML = e[i]),
                            n.appendChild(r),
                            s.appendChild(n),
                            a.appendChild(s);
                          const c = Q("div", {
                              id: `plyr-settings-${e.id}-${i}`,
                              hidden: "",
                            }),
                            u = Q("button", {
                              type: "button",
                              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                            });
                          u.appendChild(
                            Q(
                              "span",
                              { "aria-hidden": !0 },
                              Me.get(i, this.config)
                            )
                          ),
                            u.appendChild(
                              Q(
                                "span",
                                { class: this.config.classNames.hidden },
                                Me.get("menuBack", this.config)
                              )
                            ),
                            pe.call(
                              this,
                              c,
                              "keydown",
                              (e) => {
                                37 === e.which &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  l.call(this, "home", !0));
                              },
                              !1
                            ),
                            pe.call(this, u, "click", () => {
                              l.call(this, "home", !1);
                            }),
                            c.appendChild(u),
                            c.appendChild(Q("div", { role: "menu" })),
                            o.appendChild(c),
                            (this.elements.settings.buttons[i] = s),
                            (this.elements.settings.panels[i] = c);
                        }),
                        n.appendChild(o),
                        s.appendChild(n),
                        c.appendChild(s),
                        (this.elements.settings.popup = n),
                        (this.elements.settings.menu = s);
                    }
                    if (
                      ("pip" === r &&
                        ue.pip &&
                        c.appendChild(i.call(this, "pip", u)),
                      "airplay" === r &&
                        ue.airplay &&
                        c.appendChild(i.call(this, "airplay", u)),
                      "download" === r)
                    ) {
                      const e = K({}, u, {
                        element: "a",
                        href: this.download,
                        target: "_blank",
                      });
                      this.isHTML5 && (e.download = "");
                      const { download: t } = this.config.urls;
                      !F(t) &&
                        this.isEmbed &&
                        K(e, {
                          icon: "logo-" + this.provider,
                          label: this.provider,
                        }),
                        c.appendChild(i.call(this, "download", e));
                    }
                    "fullscreen" === r &&
                      c.appendChild(i.call(this, "fullscreen", u));
                  }),
                  this.isHTML5 && r.call(this, xe.getQualityOptions.call(this)),
                  a.call(this),
                  c
                );
              },
              inject() {
                if (this.config.loadSprite) {
                  const e = qe.getIconUrl.call(this);
                  e.cors && He(e.url, "sprite-plyr");
                }
                this.id = Math.floor(1e4 * Math.random());
                let e = null;
                this.elements.controls = null;
                const t = {
                  id: this.id,
                  seektime: this.config.seekTime,
                  title: this.config.title,
                };
                let i,
                  s = !0;
                if (
                  (M(this.config.controls) &&
                    (this.config.controls = this.config.controls.call(this, t)),
                  this.config.controls || (this.config.controls = []),
                  H(this.config.controls) || N(this.config.controls)
                    ? (e = this.config.controls)
                    : ((e = qe.create.call(this, {
                        id: this.id,
                        seektime: this.config.seekTime,
                        speed: this.speed,
                        quality: this.quality,
                        captions: We.getLabel.call(this),
                      })),
                      (s = !1)),
                  s &&
                    N(this.config.controls) &&
                    (e = ((e) => {
                      let i = e;
                      return (
                        Object.entries(t).forEach(([e, t]) => {
                          i = Oe(i, `{${e}}`, t);
                        }),
                        i
                      );
                    })(e)),
                  N(this.config.selectors.controls.container) &&
                    (i = document.querySelector(
                      this.config.selectors.controls.container
                    )),
                  H(i) || (i = this.elements.container),
                  i[H(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
                    "afterbegin",
                    e
                  ),
                  H(this.elements.controls) || qe.findElements.call(this),
                  !$(this.elements.buttons))
                ) {
                  const e = (e) => {
                    const t = this.config.classNames.controlPressed;
                    Object.defineProperty(e, "pressed", {
                      enumerable: !0,
                      get: () => ne(e, t),
                      set(i = !1) {
                        se(e, t, i);
                      },
                    });
                  };
                  Object.values(this.elements.buttons)
                    .filter(Boolean)
                    .forEach((t) => {
                      I(t) || j(t)
                        ? Array.from(t).filter(Boolean).forEach(e)
                        : e(t);
                    });
                }
                if ((V.isEdge && z(i), this.config.tooltips.controls)) {
                  const { classNames: e, selectors: t } = this.config,
                    i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
                    s = re.call(this, i);
                  Array.from(s).forEach((e) => {
                    se(e, this.config.classNames.hidden, !1),
                      se(e, this.config.classNames.tooltip, !0);
                  });
                }
              },
            };
            function Fe(e, t = !0) {
              let i = e;
              if (t) {
                const e = document.createElement("a");
                (e.href = i), (i = e.href);
              }
              try {
                return new URL(i);
              } catch (e) {
                return null;
              }
            }
            function $e(e) {
              const t = new URLSearchParams();
              return (
                O(e) &&
                  Object.entries(e).forEach(([e, i]) => {
                    t.set(e, i);
                  }),
                t
              );
            }
            const We = {
                setup() {
                  if (!this.supported.ui) return;
                  if (
                    !this.isVideo ||
                    this.isYouTube ||
                    (this.isHTML5 && !ue.textTracks)
                  )
                    return void (
                      I(this.config.controls) &&
                      this.config.controls.includes("settings") &&
                      this.config.settings.includes("captions") &&
                      qe.setCaptionsMenu.call(this)
                    );
                  var e, t;
                  if (
                    (H(this.elements.captions) ||
                      ((this.elements.captions = Q(
                        "div",
                        te(this.config.selectors.captions)
                      )),
                      (e = this.elements.captions),
                      (t = this.elements.wrapper),
                      H(e) &&
                        H(t) &&
                        t.parentNode.insertBefore(e, t.nextSibling)),
                    V.isIE && window.URL)
                  ) {
                    const e = this.media.querySelectorAll("track");
                    Array.from(e).forEach((e) => {
                      const t = e.getAttribute("src"),
                        i = Fe(t);
                      null !== i &&
                        i.hostname !== window.location.href.hostname &&
                        ["http:", "https:"].includes(i.protocol) &&
                        je(t, "blob")
                          .then((t) => {
                            e.setAttribute(
                              "src",
                              window.URL.createObjectURL(t)
                            );
                          })
                          .catch(() => {
                            G(e);
                          });
                    });
                  }
                  const i = we(
                    (
                      navigator.languages || [
                        navigator.language || navigator.userLanguage || "en",
                      ]
                    ).map((e) => e.split("-")[0])
                  );
                  let s = (
                    this.storage.get("language") ||
                    this.config.captions.language ||
                    "auto"
                  ).toLowerCase();
                  "auto" === s && ([s] = i);
                  let n = this.storage.get("captions");
                  if (
                    (D(n) || ({ active: n } = this.config.captions),
                    Object.assign(this.captions, {
                      toggled: !1,
                      active: n,
                      language: s,
                      languages: i,
                    }),
                    this.isHTML5)
                  ) {
                    const e = this.config.captions.update
                      ? "addtrack removetrack"
                      : "removetrack";
                    pe.call(
                      this,
                      this.media.textTracks,
                      e,
                      We.update.bind(this)
                    );
                  }
                  setTimeout(We.update.bind(this), 0);
                },
                update() {
                  const e = We.getTracks.call(this, !0),
                    {
                      active: t,
                      language: i,
                      meta: s,
                      currentTrackNode: n,
                    } = this.captions,
                    o = Boolean(e.find((e) => e.language === i));
                  this.isHTML5 &&
                    this.isVideo &&
                    e
                      .filter((e) => !s.get(e))
                      .forEach((e) => {
                        this.debug.log("Track added", e),
                          s.set(e, { default: "showing" === e.mode }),
                          "showing" === e.mode && (e.mode = "hidden"),
                          pe.call(this, e, "cuechange", () =>
                            We.updateCues.call(this)
                          );
                      }),
                    ((o && this.language !== i) || !e.includes(n)) &&
                      (We.setLanguage.call(this, i),
                      We.toggle.call(this, t && o)),
                    se(
                      this.elements.container,
                      this.config.classNames.captions.enabled,
                      !$(e)
                    ),
                    I(this.config.controls) &&
                      this.config.controls.includes("settings") &&
                      this.config.settings.includes("captions") &&
                      qe.setCaptionsMenu.call(this);
                },
                toggle(e, t = !0) {
                  if (!this.supported.ui) return;
                  const { toggled: i } = this.captions,
                    s = this.config.classNames.captions.active,
                    n = L(e) ? !i : e;
                  if (n !== i) {
                    if (
                      (t ||
                        ((this.captions.active = n),
                        this.storage.set({ captions: n })),
                      !this.language && n && !t)
                    ) {
                      const e = We.getTracks.call(this),
                        t = We.findTrack.call(
                          this,
                          [this.captions.language, ...this.captions.languages],
                          !0
                        );
                      return (
                        (this.captions.language = t.language),
                        void We.set.call(this, e.indexOf(t))
                      );
                    }
                    this.elements.buttons.captions &&
                      (this.elements.buttons.captions.pressed = n),
                      se(this.elements.container, s, n),
                      (this.captions.toggled = n),
                      qe.updateSetting.call(this, "captions"),
                      ge.call(
                        this,
                        this.media,
                        n ? "captionsenabled" : "captionsdisabled"
                      );
                  }
                  setTimeout(() => {
                    n &&
                      this.captions.toggled &&
                      (this.captions.currentTrackNode.mode = "hidden");
                  });
                },
                set(e, t = !0) {
                  const i = We.getTracks.call(this);
                  if (-1 !== e)
                    if (P(e))
                      if (e in i) {
                        if (this.captions.currentTrack !== e) {
                          this.captions.currentTrack = e;
                          const s = i[e],
                            { language: n } = s || {};
                          (this.captions.currentTrackNode = s),
                            qe.updateSetting.call(this, "captions"),
                            t ||
                              ((this.captions.language = n),
                              this.storage.set({ language: n })),
                            this.isVimeo && this.embed.enableTextTrack(n),
                            ge.call(this, this.media, "languagechange");
                        }
                        We.toggle.call(this, !0, t),
                          this.isHTML5 &&
                            this.isVideo &&
                            We.updateCues.call(this);
                      } else this.debug.warn("Track not found", e);
                    else this.debug.warn("Invalid caption argument", e);
                  else We.toggle.call(this, !1, t);
                },
                setLanguage(e, t = !0) {
                  if (!N(e))
                    return void this.debug.warn("Invalid language argument", e);
                  const i = e.toLowerCase();
                  this.captions.language = i;
                  const s = We.getTracks.call(this),
                    n = We.findTrack.call(this, [i]);
                  We.set.call(this, s.indexOf(n), t);
                },
                getTracks(e = !1) {
                  return Array.from((this.media || {}).textTracks || [])
                    .filter(
                      (t) => !this.isHTML5 || e || this.captions.meta.has(t)
                    )
                    .filter((e) => ["captions", "subtitles"].includes(e.kind));
                },
                findTrack(e, t = !1) {
                  const i = We.getTracks.call(this),
                    s = (e) =>
                      Number((this.captions.meta.get(e) || {}).default),
                    n = Array.from(i).sort((e, t) => s(t) - s(e));
                  let o;
                  return (
                    e.every((e) => ((o = n.find((t) => t.language === e)), !o)),
                    o || (t ? n[0] : void 0)
                  );
                },
                getCurrentTrack() {
                  return We.getTracks.call(this)[this.currentTrack];
                },
                getLabel(e) {
                  let t = e;
                  return (
                    !q(t) &&
                      ue.textTracks &&
                      this.captions.toggled &&
                      (t = We.getCurrentTrack.call(this)),
                    q(t)
                      ? $(t.label)
                        ? $(t.language)
                          ? Me.get("enabled", this.config)
                          : e.language.toUpperCase()
                        : t.label
                      : Me.get("disabled", this.config)
                  );
                },
                updateCues(e) {
                  if (!this.supported.ui) return;
                  if (!H(this.elements.captions))
                    return void this.debug.warn(
                      "No captions element to render to"
                    );
                  if (!L(e) && !Array.isArray(e))
                    return void this.debug.warn("updateCues: Invalid input", e);
                  let t = e;
                  if (!t) {
                    const e = We.getCurrentTrack.call(this);
                    t = Array.from((e || {}).activeCues || [])
                      .map((e) => e.getCueAsHTML())
                      .map(Ne);
                  }
                  const i = t.map((e) => e.trim()).join("\n");
                  if (i !== this.elements.captions.innerHTML) {
                    Z(this.elements.captions);
                    const e = Q("span", te(this.config.selectors.caption));
                    (e.innerHTML = i),
                      this.elements.captions.appendChild(e),
                      ge.call(this, this.media, "cuechange");
                  }
                },
              },
              ze = {
                enabled: !0,
                title: "",
                debug: !1,
                autoplay: !1,
                autopause: !0,
                playsinline: !0,
                seekTime: 10,
                volume: 1,
                muted: !1,
                duration: null,
                displayDuration: !0,
                invertTime: !0,
                toggleInvert: !0,
                ratio: null,
                clickToPlay: !0,
                hideControls: !0,
                resetOnEnd: !1,
                disableContextMenu: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/3.6.7/plyr.svg",
                blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                quality: {
                  default: 576,
                  options: [
                    4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240,
                  ],
                  forced: !1,
                  onChange: null,
                },
                loop: { active: !1 },
                speed: {
                  selected: 1,
                  options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
                },
                keyboard: { focused: !0, global: !1 },
                tooltips: { controls: !1, seek: !0 },
                captions: { active: !1, language: "auto", update: !1 },
                fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
                storage: { enabled: !0, key: "plyr" },
                controls: [
                  "play-large",
                  "play",
                  "progress",
                  "current-time",
                  "mute",
                  "volume",
                  "captions",
                  "settings",
                  "pip",
                  "airplay",
                  "fullscreen",
                ],
                settings: ["captions", "quality", "speed"],
                i18n: {
                  restart: "Restart",
                  rewind: "Rewind {seektime}s",
                  play: "Play",
                  pause: "Pause",
                  fastForward: "Forward {seektime}s",
                  seek: "Seek",
                  seekLabel: "{currentTime} of {duration}",
                  played: "Played",
                  buffered: "Buffered",
                  currentTime: "Current time",
                  duration: "Duration",
                  volume: "Volume",
                  mute: "Mute",
                  unmute: "Unmute",
                  enableCaptions: "Enable captions",
                  disableCaptions: "Disable captions",
                  download: "Download",
                  enterFullscreen: "Enter fullscreen",
                  exitFullscreen: "Exit fullscreen",
                  frameTitle: "Player for {title}",
                  captions: "Captions",
                  settings: "Settings",
                  pip: "PIP",
                  menuBack: "Go back to previous menu",
                  speed: "Speed",
                  normal: "Normal",
                  quality: "Quality",
                  loop: "Loop",
                  start: "Start",
                  end: "End",
                  all: "All",
                  reset: "Reset",
                  disabled: "Disabled",
                  enabled: "Enabled",
                  advertisement: "Ad",
                  qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD",
                  },
                },
                urls: {
                  download: null,
                  vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/oembed.json?url={0}",
                  },
                  youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
                  },
                  googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                  },
                },
                listeners: {
                  seek: null,
                  play: null,
                  pause: null,
                  restart: null,
                  rewind: null,
                  fastForward: null,
                  mute: null,
                  volume: null,
                  captions: null,
                  download: null,
                  fullscreen: null,
                  pip: null,
                  airplay: null,
                  speed: null,
                  quality: null,
                  loop: null,
                  language: null,
                },
                events: [
                  "ended",
                  "progress",
                  "stalled",
                  "playing",
                  "waiting",
                  "canplay",
                  "canplaythrough",
                  "loadstart",
                  "loadeddata",
                  "loadedmetadata",
                  "timeupdate",
                  "volumechange",
                  "play",
                  "pause",
                  "error",
                  "seeking",
                  "seeked",
                  "emptied",
                  "ratechange",
                  "cuechange",
                  "download",
                  "enterfullscreen",
                  "exitfullscreen",
                  "captionsenabled",
                  "captionsdisabled",
                  "languagechange",
                  "controlshidden",
                  "controlsshown",
                  "ready",
                  "statechange",
                  "qualitychange",
                  "adsloaded",
                  "adscontentpause",
                  "adscontentresume",
                  "adstarted",
                  "adsmidpoint",
                  "adscomplete",
                  "adsallcomplete",
                  "adsimpression",
                  "adsclick",
                ],
                selectors: {
                  editable: "input, textarea, select, [contenteditable]",
                  container: ".plyr",
                  controls: { container: null, wrapper: ".plyr__controls" },
                  labels: "[data-plyr]",
                  buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]',
                  },
                  inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]',
                  },
                  display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display",
                  },
                  progress: ".plyr__progress",
                  captions: ".plyr__captions",
                  caption: ".plyr__caption",
                },
                classNames: {
                  type: "plyr--{0}",
                  provider: "plyr--{0}",
                  video: "plyr__video-wrapper",
                  embed: "plyr__video-embed",
                  videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                  embedContainer: "plyr__video-embed__container",
                  poster: "plyr__poster",
                  posterEnabled: "plyr__poster-enabled",
                  ads: "plyr__ads",
                  control: "plyr__control",
                  controlPressed: "plyr__control--pressed",
                  playing: "plyr--playing",
                  paused: "plyr--paused",
                  stopped: "plyr--stopped",
                  loading: "plyr--loading",
                  hover: "plyr--hover",
                  tooltip: "plyr__tooltip",
                  cues: "plyr__cues",
                  hidden: "plyr__sr-only",
                  hideControls: "plyr--hide-controls",
                  isIos: "plyr--is-ios",
                  isTouch: "plyr--is-touch",
                  uiSupported: "plyr--full-ui",
                  noTransition: "plyr--no-transition",
                  display: { time: "plyr__time" },
                  menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open",
                  },
                  captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active",
                  },
                  fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback",
                  },
                  pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active",
                  },
                  airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active",
                  },
                  tabFocus: "plyr__tab-focus",
                  previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown:
                      "plyr__preview-scrubbing--is-shown",
                  },
                },
                attributes: {
                  embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id",
                  },
                },
                ads: { enabled: !1, publisherId: "", tagUrl: "" },
                previewThumbnails: { enabled: !1, src: "" },
                vimeo: {
                  byline: !1,
                  portrait: !1,
                  title: !1,
                  speed: !0,
                  transparent: !1,
                  customControls: !0,
                  referrerPolicy: null,
                  premium: !1,
                },
                youtube: {
                  rel: 0,
                  showinfo: 0,
                  iv_load_policy: 3,
                  modestbranding: 1,
                  customControls: !0,
                  noCookie: !1,
                },
              },
              Ve = "picture-in-picture",
              Ue = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
              Ke = () => {};
            class Ye {
              constructor(e = !1) {
                (this.enabled = window.console && e),
                  this.enabled && this.log("Debugging enabled");
              }
              get log() {
                return this.enabled
                  ? Function.prototype.bind.call(console.log, console)
                  : Ke;
              }
              get warn() {
                return this.enabled
                  ? Function.prototype.bind.call(console.warn, console)
                  : Ke;
              }
              get error() {
                return this.enabled
                  ? Function.prototype.bind.call(console.error, console)
                  : Ke;
              }
            }
            class Xe {
              constructor(t) {
                e(this, "onChange", () => {
                  if (!this.enabled) return;
                  const e = this.player.elements.buttons.fullscreen;
                  H(e) && (e.pressed = this.active);
                  const t =
                    this.target === this.player.media
                      ? this.target
                      : this.player.elements.container;
                  ge.call(
                    this.player,
                    t,
                    this.active ? "enterfullscreen" : "exitfullscreen",
                    !0
                  );
                }),
                  e(this, "toggleFallback", (e = !1) => {
                    if (
                      (e
                        ? (this.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0,
                          })
                        : window.scrollTo(
                            this.scrollPosition.x,
                            this.scrollPosition.y
                          ),
                      (document.body.style.overflow = e ? "hidden" : ""),
                      se(
                        this.target,
                        this.player.config.classNames.fullscreen.fallback,
                        e
                      ),
                      V.isIos)
                    ) {
                      let t = document.head.querySelector(
                        'meta[name="viewport"]'
                      );
                      const i = "viewport-fit=cover";
                      t ||
                        ((t = document.createElement("meta")),
                        t.setAttribute("name", "viewport"));
                      const s = N(t.content) && t.content.includes(i);
                      e
                        ? ((this.cleanupViewport = !s),
                          s || (t.content += "," + i))
                        : this.cleanupViewport &&
                          (t.content = t.content
                            .split(",")
                            .filter((e) => e.trim() !== i)
                            .join(","));
                    }
                    this.onChange();
                  }),
                  e(this, "trapFocus", (e) => {
                    if (
                      V.isIos ||
                      !this.active ||
                      "Tab" !== e.key ||
                      9 !== e.keyCode
                    )
                      return;
                    const t = document.activeElement,
                      i = re.call(
                        this.player,
                        "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                      ),
                      [s] = i,
                      n = i[i.length - 1];
                    t !== n || e.shiftKey
                      ? t === s && e.shiftKey && (n.focus(), e.preventDefault())
                      : (s.focus(), e.preventDefault());
                  }),
                  e(this, "update", () => {
                    if (this.enabled) {
                      let e;
                      (e = this.forceFallback
                        ? "Fallback (forced)"
                        : Xe.native
                        ? "Native"
                        : "Fallback"),
                        this.player.debug.log(e + " fullscreen enabled");
                    } else
                      this.player.debug.log(
                        "Fullscreen not supported and fallback disabled"
                      );
                    se(
                      this.player.elements.container,
                      this.player.config.classNames.fullscreen.enabled,
                      this.enabled
                    );
                  }),
                  e(this, "enter", () => {
                    this.enabled &&
                      (V.isIos && this.player.config.fullscreen.iosNative
                        ? this.player.isVimeo
                          ? this.player.embed.requestFullscreen()
                          : this.target.webkitEnterFullscreen()
                        : !Xe.native || this.forceFallback
                        ? this.toggleFallback(!0)
                        : this.prefix
                        ? $(this.prefix) ||
                          this.target[`${this.prefix}Request${this.property}`]()
                        : this.target.requestFullscreen({
                            navigationUI: "hide",
                          }));
                  }),
                  e(this, "exit", () => {
                    if (this.enabled)
                      if (V.isIos && this.player.config.fullscreen.iosNative)
                        this.target.webkitExitFullscreen(),
                          ve(this.player.play());
                      else if (!Xe.native || this.forceFallback)
                        this.toggleFallback(!1);
                      else if (this.prefix) {
                        if (!$(this.prefix)) {
                          const e = "moz" === this.prefix ? "Cancel" : "Exit";
                          document[`${this.prefix}${e}${this.property}`]();
                        }
                      } else
                        (
                          document.cancelFullScreen || document.exitFullscreen
                        ).call(document);
                  }),
                  e(this, "toggle", () => {
                    this.active ? this.exit() : this.enter();
                  }),
                  (this.player = t),
                  (this.prefix = Xe.prefix),
                  (this.property = Xe.property),
                  (this.scrollPosition = { x: 0, y: 0 }),
                  (this.forceFallback =
                    "force" === t.config.fullscreen.fallback),
                  (this.player.elements.fullscreen =
                    t.config.fullscreen.container &&
                    (function (e, t) {
                      const { prototype: i } = Element;
                      return (
                        i.closest ||
                        function () {
                          let e = this;
                          do {
                            if (oe.matches(e, t)) return e;
                            e = e.parentElement || e.parentNode;
                          } while (null !== e && 1 === e.nodeType);
                          return null;
                        }
                      ).call(e, t);
                    })(
                      this.player.elements.container,
                      t.config.fullscreen.container
                    )),
                  pe.call(
                    this.player,
                    document,
                    "ms" === this.prefix
                      ? "MSFullscreenChange"
                      : this.prefix + "fullscreenchange",
                    () => {
                      this.onChange();
                    }
                  ),
                  pe.call(
                    this.player,
                    this.player.elements.container,
                    "dblclick",
                    (e) => {
                      (H(this.player.elements.controls) &&
                        this.player.elements.controls.contains(e.target)) ||
                        this.player.listeners.proxy(
                          e,
                          this.toggle,
                          "fullscreen"
                        );
                    }
                  ),
                  pe.call(
                    this,
                    this.player.elements.container,
                    "keydown",
                    (e) => this.trapFocus(e)
                  ),
                  this.update();
              }
              static get native() {
                return !!(
                  document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.msFullscreenEnabled
                );
              }
              get usingNative() {
                return Xe.native && !this.forceFallback;
              }
              static get prefix() {
                if (M(document.exitFullscreen)) return "";
                let e = "";
                return (
                  ["webkit", "moz", "ms"].some(
                    (t) =>
                      !(
                        (!M(document[t + "ExitFullscreen"]) &&
                          !M(document[t + "CancelFullScreen"])) ||
                        ((e = t), 0)
                      )
                  ),
                  e
                );
              }
              static get property() {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
              }
              get enabled() {
                return (
                  (Xe.native || this.player.config.fullscreen.fallback) &&
                  this.player.config.fullscreen.enabled &&
                  this.player.supported.ui &&
                  this.player.isVideo
                );
              }
              get active() {
                if (!this.enabled) return !1;
                if (!Xe.native || this.forceFallback)
                  return ne(
                    this.target,
                    this.player.config.classNames.fullscreen.fallback
                  );
                const e = this.prefix
                  ? document[`${this.prefix}${this.property}Element`]
                  : document.fullscreenElement;
                return e && e.shadowRoot
                  ? e === this.target.getRootNode().host
                  : e === this.target;
              }
              get target() {
                return V.isIos && this.player.config.fullscreen.iosNative
                  ? this.player.media
                  : this.player.elements.fullscreen ||
                      this.player.elements.container;
              }
            }
            function Qe(e, t = 1) {
              return new Promise((i, s) => {
                const n = new Image(),
                  o = () => {
                    delete n.onload,
                      delete n.onerror,
                      (n.naturalWidth >= t ? i : s)(n);
                  };
                Object.assign(n, { onload: o, onerror: o, src: e });
              });
            }
            const Je = {
              addStyleHook() {
                se(
                  this.elements.container,
                  this.config.selectors.container.replace(".", ""),
                  !0
                ),
                  se(
                    this.elements.container,
                    this.config.classNames.uiSupported,
                    this.supported.ui
                  );
              },
              toggleNativeControls(e = !1) {
                e && this.isHTML5
                  ? this.media.setAttribute("controls", "")
                  : this.media.removeAttribute("controls");
              },
              build() {
                if ((this.listeners.media(), !this.supported.ui))
                  return (
                    this.debug.warn(
                      `Basic support only for ${this.provider} ${this.type}`
                    ),
                    void Je.toggleNativeControls.call(this, !0)
                  );
                H(this.elements.controls) ||
                  (qe.inject.call(this), this.listeners.controls()),
                  Je.toggleNativeControls.call(this),
                  this.isHTML5 && We.setup.call(this),
                  (this.volume = null),
                  (this.muted = null),
                  (this.loop = null),
                  (this.quality = null),
                  (this.speed = null),
                  qe.updateVolume.call(this),
                  qe.timeUpdate.call(this),
                  Je.checkPlaying.call(this),
                  se(
                    this.elements.container,
                    this.config.classNames.pip.supported,
                    ue.pip && this.isHTML5 && this.isVideo
                  ),
                  se(
                    this.elements.container,
                    this.config.classNames.airplay.supported,
                    ue.airplay && this.isHTML5
                  ),
                  se(
                    this.elements.container,
                    this.config.classNames.isIos,
                    V.isIos
                  ),
                  se(
                    this.elements.container,
                    this.config.classNames.isTouch,
                    this.touch
                  ),
                  (this.ready = !0),
                  setTimeout(() => {
                    ge.call(this, this.media, "ready");
                  }, 0),
                  Je.setTitle.call(this),
                  this.poster &&
                    Je.setPoster.call(this, this.poster, !1).catch(() => {}),
                  this.config.duration && qe.durationUpdate.call(this);
              },
              setTitle() {
                let e = Me.get("play", this.config);
                if (
                  (N(this.config.title) &&
                    !$(this.config.title) &&
                    (e += ", " + this.config.title),
                  Array.from(this.elements.buttons.play || []).forEach((t) => {
                    t.setAttribute("aria-label", e);
                  }),
                  this.isEmbed)
                ) {
                  const e = ae.call(this, "iframe");
                  if (!H(e)) return;
                  const t = $(this.config.title) ? "video" : this.config.title,
                    i = Me.get("frameTitle", this.config);
                  e.setAttribute("title", i.replace("{title}", t));
                }
              },
              togglePoster(e) {
                se(
                  this.elements.container,
                  this.config.classNames.posterEnabled,
                  e
                );
              },
              setPoster(e, t = !0) {
                return t && this.poster
                  ? Promise.reject(new Error("Poster already set"))
                  : (this.media.setAttribute("data-poster", e),
                    this.elements.poster.removeAttribute("hidden"),
                    ye
                      .call(this)
                      .then(() => Qe(e))
                      .catch((t) => {
                        throw (
                          (e === this.poster && Je.togglePoster.call(this, !1),
                          t)
                        );
                      })
                      .then(() => {
                        if (e !== this.poster)
                          throw new Error(
                            "setPoster cancelled by later call to setPoster"
                          );
                      })
                      .then(
                        () => (
                          Object.assign(this.elements.poster.style, {
                            backgroundImage: `url('${e}')`,
                            backgroundSize: "",
                          }),
                          Je.togglePoster.call(this, !0),
                          e
                        )
                      ));
              },
              checkPlaying(e) {
                se(
                  this.elements.container,
                  this.config.classNames.playing,
                  this.playing
                ),
                  se(
                    this.elements.container,
                    this.config.classNames.paused,
                    this.paused
                  ),
                  se(
                    this.elements.container,
                    this.config.classNames.stopped,
                    this.stopped
                  ),
                  Array.from(this.elements.buttons.play || []).forEach((e) => {
                    Object.assign(e, { pressed: this.playing }),
                      e.setAttribute(
                        "aria-label",
                        Me.get(this.playing ? "pause" : "play", this.config)
                      );
                  }),
                  (R(e) && "timeupdate" === e.type) ||
                    Je.toggleControls.call(this);
              },
              checkLoading(e) {
                (this.loading = ["stalled", "waiting"].includes(e.type)),
                  clearTimeout(this.timers.loading),
                  (this.timers.loading = setTimeout(
                    () => {
                      se(
                        this.elements.container,
                        this.config.classNames.loading,
                        this.loading
                      ),
                        Je.toggleControls.call(this);
                    },
                    this.loading ? 250 : 0
                  ));
              },
              toggleControls(e) {
                const { controls: t } = this.elements;
                if (t && this.config.hideControls) {
                  const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                  this.toggleControls(
                    Boolean(
                      e ||
                        this.loading ||
                        this.paused ||
                        t.pressed ||
                        t.hover ||
                        i
                    )
                  );
                }
              },
              migrateStyles() {
                Object.values({ ...this.media.style })
                  .filter((e) => !$(e) && N(e) && e.startsWith("--plyr"))
                  .forEach((e) => {
                    this.elements.container.style.setProperty(
                      e,
                      this.media.style.getPropertyValue(e)
                    ),
                      this.media.style.removeProperty(e);
                  }),
                  $(this.media.style) && this.media.removeAttribute("style");
              },
            };
            class Ge {
              constructor(t) {
                e(this, "firstTouch", () => {
                  const { player: e } = this,
                    { elements: t } = e;
                  (e.touch = !0),
                    se(t.container, e.config.classNames.isTouch, !0);
                }),
                  e(this, "setTabFocus", (e) => {
                    const { player: t } = this,
                      { elements: i } = t;
                    if (
                      (clearTimeout(this.focusTimer),
                      "keydown" === e.type && 9 !== e.which)
                    )
                      return;
                    "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                    const s = e.timeStamp - this.lastKeyDown <= 20;
                    ("focus" !== e.type || s) &&
                      ((() => {
                        const e = t.config.classNames.tabFocus;
                        se(re.call(t, "." + e), e, !1);
                      })(),
                      "focusout" !== e.type &&
                        (this.focusTimer = setTimeout(() => {
                          const e = document.activeElement;
                          i.container.contains(e) &&
                            se(
                              document.activeElement,
                              t.config.classNames.tabFocus,
                              !0
                            );
                        }, 10)));
                  }),
                  e(this, "global", (e = !0) => {
                    const { player: t } = this;
                    t.config.keyboard.global &&
                      de.call(
                        t,
                        window,
                        "keydown keyup",
                        this.handleKey,
                        e,
                        !1
                      ),
                      de.call(t, document.body, "click", this.toggleMenu, e),
                      fe.call(t, document.body, "touchstart", this.firstTouch),
                      de.call(
                        t,
                        document.body,
                        "keydown focus blur focusout",
                        this.setTabFocus,
                        e,
                        !1,
                        !0
                      );
                  }),
                  e(this, "container", () => {
                    const { player: e } = this,
                      { config: t, elements: i, timers: s } = e;
                    !t.keyboard.global &&
                      t.keyboard.focused &&
                      pe.call(
                        e,
                        i.container,
                        "keydown keyup",
                        this.handleKey,
                        !1
                      ),
                      pe.call(
                        e,
                        i.container,
                        "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                        (t) => {
                          const { controls: n } = i;
                          n &&
                            "enterfullscreen" === t.type &&
                            ((n.pressed = !1), (n.hover = !1));
                          let o = 0;
                          ["touchstart", "touchmove", "mousemove"].includes(
                            t.type
                          ) &&
                            (Je.toggleControls.call(e, !0),
                            (o = e.touch ? 3e3 : 2e3)),
                            clearTimeout(s.controls),
                            (s.controls = setTimeout(
                              () => Je.toggleControls.call(e, !1),
                              o
                            ));
                        }
                      );
                    const n = (t) => {
                        if (!t) return Ae.call(e);
                        const s = i.container.getBoundingClientRect(),
                          { width: n, height: o } = s;
                        return Ae.call(e, `${n}:${o}`);
                      },
                      o = () => {
                        clearTimeout(s.resized),
                          (s.resized = setTimeout(n, 50));
                      };
                    pe.call(
                      e,
                      i.container,
                      "enterfullscreen exitfullscreen",
                      (t) => {
                        const { target: s, usingNative: r } = e.fullscreen;
                        if (s !== i.container) return;
                        if (!e.isEmbed && $(e.config.ratio)) return;
                        const a = "enterfullscreen" === t.type,
                          { padding: l, ratio: c } = n(a);
                        ((t, i, s) => {
                          if (!e.isVimeo || e.config.vimeo.premium) return;
                          const n = e.elements.wrapper.firstChild,
                            [, o] = t,
                            [r, a] = Ce.call(e);
                          (n.style.maxWidth = s ? (o / a) * r + "px" : null),
                            (n.style.margin = s ? "0 auto" : null);
                        })(c, 0, a),
                          a && setTimeout(() => z(i.container), 100),
                          r ||
                            (a
                              ? pe.call(e, window, "resize", o)
                              : me.call(e, window, "resize", o));
                      }
                    );
                  }),
                  e(this, "media", () => {
                    const { player: e } = this,
                      { elements: t } = e;
                    if (
                      (pe.call(e, e.media, "timeupdate seeking seeked", (t) =>
                        qe.timeUpdate.call(e, t)
                      ),
                      pe.call(
                        e,
                        e.media,
                        "durationchange loadeddata loadedmetadata",
                        (t) => qe.durationUpdate.call(e, t)
                      ),
                      pe.call(e, e.media, "ended", () => {
                        e.isHTML5 &&
                          e.isVideo &&
                          e.config.resetOnEnd &&
                          (e.restart(), e.pause());
                      }),
                      pe.call(
                        e,
                        e.media,
                        "progress playing seeking seeked",
                        (t) => qe.updateProgress.call(e, t)
                      ),
                      pe.call(e, e.media, "volumechange", (t) =>
                        qe.updateVolume.call(e, t)
                      ),
                      pe.call(
                        e,
                        e.media,
                        "playing play pause ended emptied timeupdate",
                        (t) => Je.checkPlaying.call(e, t)
                      ),
                      pe.call(
                        e,
                        e.media,
                        "waiting canplay seeked playing",
                        (t) => Je.checkLoading.call(e, t)
                      ),
                      e.supported.ui && e.config.clickToPlay && !e.isAudio)
                    ) {
                      const i = ae.call(e, "." + e.config.classNames.video);
                      if (!H(i)) return;
                      pe.call(e, t.container, "click", (s) => {
                        ([t.container, i].includes(s.target) ||
                          i.contains(s.target)) &&
                          ((e.touch && e.config.hideControls) ||
                            (e.ended
                              ? (this.proxy(s, e.restart, "restart"),
                                this.proxy(
                                  s,
                                  () => {
                                    ve(e.play());
                                  },
                                  "play"
                                ))
                              : this.proxy(
                                  s,
                                  () => {
                                    ve(e.togglePlay());
                                  },
                                  "play"
                                )));
                      });
                    }
                    e.supported.ui &&
                      e.config.disableContextMenu &&
                      pe.call(
                        e,
                        t.wrapper,
                        "contextmenu",
                        (e) => {
                          e.preventDefault();
                        },
                        !1
                      ),
                      pe.call(e, e.media, "volumechange", () => {
                        e.storage.set({ volume: e.volume, muted: e.muted });
                      }),
                      pe.call(e, e.media, "ratechange", () => {
                        qe.updateSetting.call(e, "speed"),
                          e.storage.set({ speed: e.speed });
                      }),
                      pe.call(e, e.media, "qualitychange", (t) => {
                        qe.updateSetting.call(
                          e,
                          "quality",
                          null,
                          t.detail.quality
                        );
                      }),
                      pe.call(e, e.media, "ready qualitychange", () => {
                        qe.setDownloadUrl.call(e);
                      });
                    const i = e.config.events
                      .concat(["keyup", "keydown"])
                      .join(" ");
                    pe.call(e, e.media, i, (i) => {
                      let { detail: s = {} } = i;
                      "error" === i.type && (s = e.media.error),
                        ge.call(e, t.container, i.type, !0, s);
                    });
                  }),
                  e(this, "proxy", (e, t, i) => {
                    const { player: s } = this,
                      n = s.config.listeners[i];
                    let o = !0;
                    M(n) && (o = n.call(s, e)),
                      !1 !== o && M(t) && t.call(s, e);
                  }),
                  e(this, "bind", (e, t, i, s, n = !0) => {
                    const { player: o } = this,
                      r = o.config.listeners[s],
                      a = M(r);
                    pe.call(o, e, t, (e) => this.proxy(e, i, s), n && !a);
                  }),
                  e(this, "controls", () => {
                    const { player: e } = this,
                      { elements: t } = e,
                      i = V.isIE ? "change" : "input";
                    if (
                      (t.buttons.play &&
                        Array.from(t.buttons.play).forEach((t) => {
                          this.bind(
                            t,
                            "click",
                            () => {
                              ve(e.togglePlay());
                            },
                            "play"
                          );
                        }),
                      this.bind(
                        t.buttons.restart,
                        "click",
                        e.restart,
                        "restart"
                      ),
                      this.bind(
                        t.buttons.rewind,
                        "click",
                        () => {
                          (e.lastSeekTime = Date.now()), e.rewind();
                        },
                        "rewind"
                      ),
                      this.bind(
                        t.buttons.fastForward,
                        "click",
                        () => {
                          (e.lastSeekTime = Date.now()), e.forward();
                        },
                        "fastForward"
                      ),
                      this.bind(
                        t.buttons.mute,
                        "click",
                        () => {
                          e.muted = !e.muted;
                        },
                        "mute"
                      ),
                      this.bind(t.buttons.captions, "click", () =>
                        e.toggleCaptions()
                      ),
                      this.bind(
                        t.buttons.download,
                        "click",
                        () => {
                          ge.call(e, e.media, "download");
                        },
                        "download"
                      ),
                      this.bind(
                        t.buttons.fullscreen,
                        "click",
                        () => {
                          e.fullscreen.toggle();
                        },
                        "fullscreen"
                      ),
                      this.bind(
                        t.buttons.pip,
                        "click",
                        () => {
                          e.pip = "toggle";
                        },
                        "pip"
                      ),
                      this.bind(
                        t.buttons.airplay,
                        "click",
                        e.airplay,
                        "airplay"
                      ),
                      this.bind(
                        t.buttons.settings,
                        "click",
                        (t) => {
                          t.stopPropagation(),
                            t.preventDefault(),
                            qe.toggleMenu.call(e, t);
                        },
                        null,
                        !1
                      ),
                      this.bind(
                        t.buttons.settings,
                        "keyup",
                        (t) => {
                          const i = t.which;
                          [13, 32].includes(i) &&
                            (13 !== i
                              ? (t.preventDefault(),
                                t.stopPropagation(),
                                qe.toggleMenu.call(e, t))
                              : qe.focusFirstMenuItem.call(e, null, !0));
                        },
                        null,
                        !1
                      ),
                      this.bind(t.settings.menu, "keydown", (t) => {
                        27 === t.which && qe.toggleMenu.call(e, t);
                      }),
                      this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                        const i = t.progress.getBoundingClientRect(),
                          s = (100 / i.width) * (e.pageX - i.left);
                        e.currentTarget.setAttribute("seek-value", s);
                      }),
                      this.bind(
                        t.inputs.seek,
                        "mousedown mouseup keydown keyup touchstart touchend",
                        (t) => {
                          const i = t.currentTarget,
                            s = t.keyCode ? t.keyCode : t.which,
                            n = "play-on-seeked";
                          if (B(t) && 39 !== s && 37 !== s) return;
                          e.lastSeekTime = Date.now();
                          const o = i.hasAttribute(n),
                            r = ["mouseup", "touchend", "keyup"].includes(
                              t.type
                            );
                          o && r
                            ? (i.removeAttribute(n), ve(e.play()))
                            : !r &&
                              e.playing &&
                              (i.setAttribute(n, ""), e.pause());
                        }
                      ),
                      V.isIos)
                    ) {
                      const t = re.call(e, 'input[type="range"]');
                      Array.from(t).forEach((e) =>
                        this.bind(e, i, (e) => z(e.target))
                      );
                    }
                    this.bind(
                      t.inputs.seek,
                      i,
                      (t) => {
                        const i = t.currentTarget;
                        let s = i.getAttribute("seek-value");
                        $(s) && (s = i.value),
                          i.removeAttribute("seek-value"),
                          (e.currentTime = (s / i.max) * e.duration);
                      },
                      "seek"
                    ),
                      this.bind(
                        t.progress,
                        "mouseenter mouseleave mousemove",
                        (t) => qe.updateSeekTooltip.call(e, t)
                      ),
                      this.bind(t.progress, "mousemove touchmove", (t) => {
                        const { previewThumbnails: i } = e;
                        i && i.loaded && i.startMove(t);
                      }),
                      this.bind(t.progress, "mouseleave touchend click", () => {
                        const { previewThumbnails: t } = e;
                        t && t.loaded && t.endMove(!1, !0);
                      }),
                      this.bind(t.progress, "mousedown touchstart", (t) => {
                        const { previewThumbnails: i } = e;
                        i && i.loaded && i.startScrubbing(t);
                      }),
                      this.bind(t.progress, "mouseup touchend", (t) => {
                        const { previewThumbnails: i } = e;
                        i && i.loaded && i.endScrubbing(t);
                      }),
                      V.isWebkit &&
                        Array.from(re.call(e, 'input[type="range"]')).forEach(
                          (t) => {
                            this.bind(t, "input", (t) =>
                              qe.updateRangeFill.call(e, t.target)
                            );
                          }
                        ),
                      e.config.toggleInvert &&
                        !H(t.display.duration) &&
                        this.bind(t.display.currentTime, "click", () => {
                          0 !== e.currentTime &&
                            ((e.config.invertTime = !e.config.invertTime),
                            qe.timeUpdate.call(e));
                        }),
                      this.bind(
                        t.inputs.volume,
                        i,
                        (t) => {
                          e.volume = t.target.value;
                        },
                        "volume"
                      ),
                      this.bind(t.controls, "mouseenter mouseleave", (i) => {
                        t.controls.hover = !e.touch && "mouseenter" === i.type;
                      }),
                      t.fullscreen &&
                        Array.from(t.fullscreen.children)
                          .filter((e) => !e.contains(t.container))
                          .forEach((i) => {
                            this.bind(i, "mouseenter mouseleave", (i) => {
                              t.controls.hover =
                                !e.touch && "mouseenter" === i.type;
                            });
                          }),
                      this.bind(
                        t.controls,
                        "mousedown mouseup touchstart touchend touchcancel",
                        (e) => {
                          t.controls.pressed = [
                            "mousedown",
                            "touchstart",
                          ].includes(e.type);
                        }
                      ),
                      this.bind(t.controls, "focusin", () => {
                        const { config: i, timers: s } = e;
                        se(t.controls, i.classNames.noTransition, !0),
                          Je.toggleControls.call(e, !0),
                          setTimeout(() => {
                            se(t.controls, i.classNames.noTransition, !1);
                          }, 0);
                        const n = this.touch ? 3e3 : 4e3;
                        clearTimeout(s.controls),
                          (s.controls = setTimeout(
                            () => Je.toggleControls.call(e, !1),
                            n
                          ));
                      }),
                      this.bind(
                        t.inputs.volume,
                        "wheel",
                        (t) => {
                          const i = t.webkitDirectionInvertedFromDevice,
                            [s, n] = [t.deltaX, -t.deltaY].map((e) =>
                              i ? -e : e
                            ),
                            o = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                          e.increaseVolume(o / 50);
                          const { volume: r } = e.media;
                          ((1 === o && r < 1) || (-1 === o && r > 0)) &&
                            t.preventDefault();
                        },
                        "volume",
                        !1
                      );
                  }),
                  (this.player = t),
                  (this.lastKey = null),
                  (this.focusTimer = null),
                  (this.lastKeyDown = null),
                  (this.handleKey = this.handleKey.bind(this)),
                  (this.toggleMenu = this.toggleMenu.bind(this)),
                  (this.setTabFocus = this.setTabFocus.bind(this)),
                  (this.firstTouch = this.firstTouch.bind(this));
              }
              handleKey(e) {
                const { player: t } = this,
                  { elements: i } = t,
                  s = e.keyCode ? e.keyCode : e.which,
                  n = "keydown" === e.type,
                  o = n && s === this.lastKey;
                if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && P(s))
                  if (n) {
                    const n = document.activeElement;
                    if (H(n)) {
                      const { editable: s } = t.config.selectors,
                        { seek: o } = i.inputs;
                      if (n !== o && oe(n, s)) return;
                      if (32 === e.which && oe(n, 'button, [role^="menuitem"]'))
                        return;
                    }
                    switch (
                      ([
                        32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57,
                        67, 70, 73, 75, 76, 77, 79,
                      ].includes(s) &&
                        (e.preventDefault(), e.stopPropagation()),
                      s)
                    ) {
                      case 48:
                      case 49:
                      case 50:
                      case 51:
                      case 52:
                      case 53:
                      case 54:
                      case 55:
                      case 56:
                      case 57:
                        o || (t.currentTime = (t.duration / 10) * (s - 48));
                        break;
                      case 32:
                      case 75:
                        o || ve(t.togglePlay());
                        break;
                      case 38:
                        t.increaseVolume(0.1);
                        break;
                      case 40:
                        t.decreaseVolume(0.1);
                        break;
                      case 77:
                        o || (t.muted = !t.muted);
                        break;
                      case 39:
                        t.forward();
                        break;
                      case 37:
                        t.rewind();
                        break;
                      case 70:
                        t.fullscreen.toggle();
                        break;
                      case 67:
                        o || t.toggleCaptions();
                        break;
                      case 76:
                        t.loop = !t.loop;
                    }
                    27 === s &&
                      !t.fullscreen.usingNative &&
                      t.fullscreen.active &&
                      t.fullscreen.toggle(),
                      (this.lastKey = s);
                  } else this.lastKey = null;
              }
              toggleMenu(e) {
                qe.toggleMenu.call(this.player, e);
              }
            }
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== t || ("undefined" != typeof self && self);
            var Ze = (function (e, t) {
              return (
                (function (e, t) {
                  e.exports = (function () {
                    var e = function () {},
                      t = {},
                      i = {},
                      s = {};
                    function n(e, t) {
                      if (e) {
                        var n = s[e];
                        if (((i[e] = t), n))
                          for (; n.length; ) n[0](e, t), n.splice(0, 1);
                      }
                    }
                    function o(t, i) {
                      t.call && (t = { success: t }),
                        i.length ? (t.error || e)(i) : (t.success || e)(t);
                    }
                    function r(t, i, s, n) {
                      var o,
                        a,
                        l = document,
                        c = s.async,
                        u = (s.numRetries || 0) + 1,
                        h = s.before || e,
                        d = t.replace(/[\?|#].*$/, ""),
                        p = t.replace(/^(css|img)!/, "");
                      (n = n || 0),
                        /(^css!|\.css$)/.test(d)
                          ? (((a = l.createElement("link")).rel = "stylesheet"),
                            (a.href = p),
                            (o = "hideFocus" in a) &&
                              a.relList &&
                              ((o = 0), (a.rel = "preload"), (a.as = "style")))
                          : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)
                          ? ((a = l.createElement("img")).src = p)
                          : (((a = l.createElement("script")).src = t),
                            (a.async = void 0 === c || c)),
                        (a.onload =
                          a.onerror =
                          a.onbeforeload =
                            function (e) {
                              var l = e.type[0];
                              if (o)
                                try {
                                  a.sheet.cssText.length || (l = "e");
                                } catch (e) {
                                  18 != e.code && (l = "e");
                                }
                              if ("e" == l) {
                                if ((n += 1) < u) return r(t, i, s, n);
                              } else if ("preload" == a.rel && "style" == a.as)
                                return (a.rel = "stylesheet");
                              i(t, l, e.defaultPrevented);
                            }),
                        !1 !== h(t, a) && l.head.appendChild(a);
                    }
                    function a(e, t, i) {
                      var s,
                        n,
                        o = (e = e.push ? e : [e]).length,
                        a = o,
                        l = [];
                      for (
                        s = function (e, i, s) {
                          if (("e" == i && l.push(e), "b" == i)) {
                            if (!s) return;
                            l.push(e);
                          }
                          --o || t(l);
                        },
                          n = 0;
                        n < a;
                        n++
                      )
                        r(e[n], s, i);
                    }
                    function l(e, i, s) {
                      var r, l;
                      if (
                        (i && i.trim && (r = i), (l = (r ? s : i) || {}), r)
                      ) {
                        if (r in t) throw "LoadJS";
                        t[r] = !0;
                      }
                      function c(t, i) {
                        a(
                          e,
                          function (e) {
                            o(l, e),
                              t && o({ success: t, error: i }, e),
                              n(r, e);
                          },
                          l
                        );
                      }
                      if (l.returnPromise) return new Promise(c);
                      c();
                    }
                    return (
                      (l.ready = function (e, t) {
                        return (
                          (function (e, t) {
                            e = e.push ? e : [e];
                            var n,
                              o,
                              r,
                              a = [],
                              l = e.length,
                              c = l;
                            for (
                              n = function (e, i) {
                                i.length && a.push(e), --c || t(a);
                              };
                              l--;

                            )
                              (o = e[l]),
                                (r = i[o])
                                  ? n(o, r)
                                  : (s[o] = s[o] || []).push(n);
                          })(e, function (e) {
                            o(t, e);
                          }),
                          l
                        );
                      }),
                      (l.done = function (e) {
                        n(e, []);
                      }),
                      (l.reset = function () {
                        (t = {}), (i = {}), (s = {});
                      }),
                      (l.isDefined = function (e) {
                        return e in t;
                      }),
                      l
                    );
                  })();
                })((t = { exports: {} })),
                t.exports
              );
            })();
            function et(e) {
              return new Promise((t, i) => {
                Ze(e, { success: t, error: i });
              });
            }
            function tt(e) {
              e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                this.media.paused === e &&
                  ((this.media.paused = !e),
                  ge.call(this, this.media, e ? "play" : "pause"));
            }
            const it = {
              setup() {
                const e = this;
                se(e.elements.wrapper, e.config.classNames.embed, !0),
                  (e.options.speed = e.config.speed.options),
                  Ae.call(e),
                  O(window.Vimeo)
                    ? it.ready.call(e)
                    : et(e.config.urls.vimeo.sdk)
                        .then(() => {
                          it.ready.call(e);
                        })
                        .catch((t) => {
                          e.debug.warn(
                            "Vimeo SDK (player.js) failed to load",
                            t
                          );
                        });
              },
              ready() {
                const e = this,
                  t = e.config.vimeo,
                  { premium: i, referrerPolicy: s, ...n } = t;
                i && Object.assign(n, { controls: !1, sidedock: !1 });
                const o = $e({
                  loop: e.config.loop.active,
                  autoplay: e.autoplay,
                  muted: e.muted,
                  gesture: "media",
                  playsinline: !this.config.fullscreen.iosNative,
                  ...n,
                });
                let r = e.media.getAttribute("src");
                $(r) &&
                  (r = e.media.getAttribute(e.config.attributes.embed.id));
                const a = $((l = r))
                  ? null
                  : P(Number(l))
                  ? l
                  : l.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
                  ? RegExp.$2
                  : l;
                var l;
                const c = Q("iframe"),
                  u = Le(e.config.urls.vimeo.iframe, a, o);
                if (
                  (c.setAttribute("src", u),
                  c.setAttribute("allowfullscreen", ""),
                  c.setAttribute(
                    "allow",
                    [
                      "autoplay",
                      "fullscreen",
                      "picture-in-picture",
                      "encrypted-media",
                      "accelerometer",
                      "gyroscope",
                    ].join("; ")
                  ),
                  $(s) || c.setAttribute("referrerPolicy", s),
                  i || !t.customControls)
                )
                  c.setAttribute("data-poster", e.poster),
                    (e.media = ee(c, e.media));
                else {
                  const t = Q("div", {
                    class: e.config.classNames.embedContainer,
                    "data-poster": e.poster,
                  });
                  t.appendChild(c), (e.media = ee(t, e.media));
                }
                t.customControls ||
                  je(Le(e.config.urls.vimeo.api, u)).then((t) => {
                    !$(t) &&
                      t.thumbnail_url &&
                      Je.setPoster.call(e, t.thumbnail_url).catch(() => {});
                  }),
                  (e.embed = new window.Vimeo.Player(c, {
                    autopause: e.config.autopause,
                    muted: e.muted,
                  })),
                  (e.media.paused = !0),
                  (e.media.currentTime = 0),
                  e.supported.ui && e.embed.disableTextTrack(),
                  (e.media.play = () => (tt.call(e, !0), e.embed.play())),
                  (e.media.pause = () => (tt.call(e, !1), e.embed.pause())),
                  (e.media.stop = () => {
                    e.pause(), (e.currentTime = 0);
                  });
                let { currentTime: h } = e.media;
                Object.defineProperty(e.media, "currentTime", {
                  get: () => h,
                  set(t) {
                    const { embed: i, media: s, paused: n, volume: o } = e,
                      r = n && !i.hasPlayed;
                    (s.seeking = !0),
                      ge.call(e, s, "seeking"),
                      Promise.resolve(r && i.setVolume(0))
                        .then(() => i.setCurrentTime(t))
                        .then(() => r && i.pause())
                        .then(() => r && i.setVolume(o))
                        .catch(() => {});
                  },
                });
                let d = e.config.speed.selected;
                Object.defineProperty(e.media, "playbackRate", {
                  get: () => d,
                  set(t) {
                    e.embed
                      .setPlaybackRate(t)
                      .then(() => {
                        (d = t), ge.call(e, e.media, "ratechange");
                      })
                      .catch(() => {
                        e.options.speed = [1];
                      });
                  },
                });
                let { volume: p } = e.config;
                Object.defineProperty(e.media, "volume", {
                  get: () => p,
                  set(t) {
                    e.embed.setVolume(t).then(() => {
                      (p = t), ge.call(e, e.media, "volumechange");
                    });
                  },
                });
                let { muted: m } = e.config;
                Object.defineProperty(e.media, "muted", {
                  get: () => m,
                  set(t) {
                    const i = !!D(t) && t;
                    e.embed.setVolume(i ? 0 : e.config.volume).then(() => {
                      (m = i), ge.call(e, e.media, "volumechange");
                    });
                  },
                });
                let f,
                  { loop: g } = e.config;
                Object.defineProperty(e.media, "loop", {
                  get: () => g,
                  set(t) {
                    const i = D(t) ? t : e.config.loop.active;
                    e.embed.setLoop(i).then(() => {
                      g = i;
                    });
                  },
                }),
                  e.embed
                    .getVideoUrl()
                    .then((t) => {
                      (f = t), qe.setDownloadUrl.call(e);
                    })
                    .catch((e) => {
                      this.debug.warn(e);
                    }),
                  Object.defineProperty(e.media, "currentSrc", {
                    get: () => f,
                  }),
                  Object.defineProperty(e.media, "ended", {
                    get: () => e.currentTime === e.duration,
                  }),
                  Promise.all([
                    e.embed.getVideoWidth(),
                    e.embed.getVideoHeight(),
                  ]).then((t) => {
                    const [i, s] = t;
                    (e.embed.ratio = Se(i, s)), Ae.call(this);
                  }),
                  e.embed.setAutopause(e.config.autopause).then((t) => {
                    e.config.autopause = t;
                  }),
                  e.embed.getVideoTitle().then((t) => {
                    (e.config.title = t), Je.setTitle.call(this);
                  }),
                  e.embed.getCurrentTime().then((t) => {
                    (h = t), ge.call(e, e.media, "timeupdate");
                  }),
                  e.embed.getDuration().then((t) => {
                    (e.media.duration = t),
                      ge.call(e, e.media, "durationchange");
                  }),
                  e.embed.getTextTracks().then((t) => {
                    (e.media.textTracks = t), We.setup.call(e);
                  }),
                  e.embed.on("cuechange", ({ cues: t = [] }) => {
                    const i = t.map((e) =>
                      (function (e) {
                        const t = document.createDocumentFragment(),
                          i = document.createElement("div");
                        return (
                          t.appendChild(i),
                          (i.innerHTML = e),
                          t.firstChild.innerText
                        );
                      })(e.text)
                    );
                    We.updateCues.call(e, i);
                  }),
                  e.embed.on("loaded", () => {
                    e.embed.getPaused().then((t) => {
                      tt.call(e, !t), t || ge.call(e, e.media, "playing");
                    }),
                      H(e.embed.element) &&
                        e.supported.ui &&
                        e.embed.element.setAttribute("tabindex", -1);
                  }),
                  e.embed.on("bufferstart", () => {
                    ge.call(e, e.media, "waiting");
                  }),
                  e.embed.on("bufferend", () => {
                    ge.call(e, e.media, "playing");
                  }),
                  e.embed.on("play", () => {
                    tt.call(e, !0), ge.call(e, e.media, "playing");
                  }),
                  e.embed.on("pause", () => {
                    tt.call(e, !1);
                  }),
                  e.embed.on("timeupdate", (t) => {
                    (e.media.seeking = !1),
                      (h = t.seconds),
                      ge.call(e, e.media, "timeupdate");
                  }),
                  e.embed.on("progress", (t) => {
                    (e.media.buffered = t.percent),
                      ge.call(e, e.media, "progress"),
                      1 === parseInt(t.percent, 10) &&
                        ge.call(e, e.media, "canplaythrough"),
                      e.embed.getDuration().then((t) => {
                        t !== e.media.duration &&
                          ((e.media.duration = t),
                          ge.call(e, e.media, "durationchange"));
                      });
                  }),
                  e.embed.on("seeked", () => {
                    (e.media.seeking = !1), ge.call(e, e.media, "seeked");
                  }),
                  e.embed.on("ended", () => {
                    (e.media.paused = !0), ge.call(e, e.media, "ended");
                  }),
                  e.embed.on("error", (t) => {
                    (e.media.error = t), ge.call(e, e.media, "error");
                  }),
                  t.customControls && setTimeout(() => Je.build.call(e), 0);
              },
            };
            function st(e) {
              e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                this.media.paused === e &&
                  ((this.media.paused = !e),
                  ge.call(this, this.media, e ? "play" : "pause"));
            }
            function nt(e) {
              return e.noCookie
                ? "https://www.youtube-nocookie.com"
                : "http:" === window.location.protocol
                ? "http://www.youtube.com"
                : void 0;
            }
            const ot = {
                setup() {
                  if (
                    (se(
                      this.elements.wrapper,
                      this.config.classNames.embed,
                      !0
                    ),
                    O(window.YT) && M(window.YT.Player))
                  )
                    ot.ready.call(this);
                  else {
                    const e = window.onYouTubeIframeAPIReady;
                    (window.onYouTubeIframeAPIReady = () => {
                      M(e) && e(), ot.ready.call(this);
                    }),
                      et(this.config.urls.youtube.sdk).catch((e) => {
                        this.debug.warn("YouTube API failed to load", e);
                      });
                  }
                },
                getTitle(e) {
                  je(Le(this.config.urls.youtube.api, e))
                    .then((e) => {
                      if (O(e)) {
                        const { title: t, height: i, width: s } = e;
                        (this.config.title = t),
                          Je.setTitle.call(this),
                          (this.embed.ratio = Se(s, i));
                      }
                      Ae.call(this);
                    })
                    .catch(() => {
                      Ae.call(this);
                    });
                },
                ready() {
                  const e = this,
                    t = e.config.youtube,
                    i = e.media && e.media.getAttribute("id");
                  if (!$(i) && i.startsWith("youtube-")) return;
                  let s = e.media.getAttribute("src");
                  $(s) &&
                    (s = e.media.getAttribute(this.config.attributes.embed.id));
                  const n = $((o = s))
                    ? null
                    : o.match(
                        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                      )
                    ? RegExp.$2
                    : o;
                  var o;
                  const r = Q("div", {
                    id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                    "data-poster": t.customControls ? e.poster : void 0,
                  });
                  if (((e.media = ee(r, e.media)), t.customControls)) {
                    const t = (e) =>
                      `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
                    Qe(t("maxres"), 121)
                      .catch(() => Qe(t("sd"), 121))
                      .catch(() => Qe(t("hq")))
                      .then((t) => Je.setPoster.call(e, t.src))
                      .then((t) => {
                        t.includes("maxres") ||
                          (e.elements.poster.style.backgroundSize = "cover");
                      })
                      .catch(() => {});
                  }
                  e.embed = new window.YT.Player(e.media, {
                    videoId: n,
                    host: nt(t),
                    playerVars: K(
                      {},
                      {
                        autoplay: e.config.autoplay ? 1 : 0,
                        hl: e.config.hl,
                        controls: e.supported.ui && t.customControls ? 0 : 1,
                        disablekb: 1,
                        playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                        cc_load_policy: e.captions.active ? 1 : 0,
                        cc_lang_pref: e.config.captions.language,
                        widget_referrer: window ? window.location.href : null,
                      },
                      t
                    ),
                    events: {
                      onError(t) {
                        if (!e.media.error) {
                          const i = t.data,
                            s =
                              {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players.",
                              }[i] || "An unknown error occured";
                          (e.media.error = { code: i, message: s }),
                            ge.call(e, e.media, "error");
                        }
                      },
                      onPlaybackRateChange(t) {
                        const i = t.target;
                        (e.media.playbackRate = i.getPlaybackRate()),
                          ge.call(e, e.media, "ratechange");
                      },
                      onReady(i) {
                        if (M(e.media.play)) return;
                        const s = i.target;
                        ot.getTitle.call(e, n),
                          (e.media.play = () => {
                            st.call(e, !0), s.playVideo();
                          }),
                          (e.media.pause = () => {
                            st.call(e, !1), s.pauseVideo();
                          }),
                          (e.media.stop = () => {
                            s.stopVideo();
                          }),
                          (e.media.duration = s.getDuration()),
                          (e.media.paused = !0),
                          (e.media.currentTime = 0),
                          Object.defineProperty(e.media, "currentTime", {
                            get: () => Number(s.getCurrentTime()),
                            set(t) {
                              e.paused && !e.embed.hasPlayed && e.embed.mute(),
                                (e.media.seeking = !0),
                                ge.call(e, e.media, "seeking"),
                                s.seekTo(t);
                            },
                          }),
                          Object.defineProperty(e.media, "playbackRate", {
                            get: () => s.getPlaybackRate(),
                            set(e) {
                              s.setPlaybackRate(e);
                            },
                          });
                        let { volume: o } = e.config;
                        Object.defineProperty(e.media, "volume", {
                          get: () => o,
                          set(t) {
                            (o = t),
                              s.setVolume(100 * o),
                              ge.call(e, e.media, "volumechange");
                          },
                        });
                        let { muted: r } = e.config;
                        Object.defineProperty(e.media, "muted", {
                          get: () => r,
                          set(t) {
                            const i = D(t) ? t : r;
                            (r = i),
                              s[i ? "mute" : "unMute"](),
                              s.setVolume(100 * o),
                              ge.call(e, e.media, "volumechange");
                          },
                        }),
                          Object.defineProperty(e.media, "currentSrc", {
                            get: () => s.getVideoUrl(),
                          }),
                          Object.defineProperty(e.media, "ended", {
                            get: () => e.currentTime === e.duration,
                          });
                        const a = s.getAvailablePlaybackRates();
                        (e.options.speed = a.filter((t) =>
                          e.config.speed.options.includes(t)
                        )),
                          e.supported.ui &&
                            t.customControls &&
                            e.media.setAttribute("tabindex", -1),
                          ge.call(e, e.media, "timeupdate"),
                          ge.call(e, e.media, "durationchange"),
                          clearInterval(e.timers.buffering),
                          (e.timers.buffering = setInterval(() => {
                            (e.media.buffered = s.getVideoLoadedFraction()),
                              (null === e.media.lastBuffered ||
                                e.media.lastBuffered < e.media.buffered) &&
                                ge.call(e, e.media, "progress"),
                              (e.media.lastBuffered = e.media.buffered),
                              1 === e.media.buffered &&
                                (clearInterval(e.timers.buffering),
                                ge.call(e, e.media, "canplaythrough"));
                          }, 200)),
                          t.customControls &&
                            setTimeout(() => Je.build.call(e), 50);
                      },
                      onStateChange(i) {
                        const s = i.target;
                        switch (
                          (clearInterval(e.timers.playing),
                          e.media.seeking &&
                            [1, 2].includes(i.data) &&
                            ((e.media.seeking = !1),
                            ge.call(e, e.media, "seeked")),
                          i.data)
                        ) {
                          case -1:
                            ge.call(e, e.media, "timeupdate"),
                              (e.media.buffered = s.getVideoLoadedFraction()),
                              ge.call(e, e.media, "progress");
                            break;
                          case 0:
                            st.call(e, !1),
                              e.media.loop
                                ? (s.stopVideo(), s.playVideo())
                                : ge.call(e, e.media, "ended");
                            break;
                          case 1:
                            t.customControls &&
                            !e.config.autoplay &&
                            e.media.paused &&
                            !e.embed.hasPlayed
                              ? e.media.pause()
                              : (st.call(e, !0),
                                ge.call(e, e.media, "playing"),
                                (e.timers.playing = setInterval(() => {
                                  ge.call(e, e.media, "timeupdate");
                                }, 50)),
                                e.media.duration !== s.getDuration() &&
                                  ((e.media.duration = s.getDuration()),
                                  ge.call(e, e.media, "durationchange")));
                            break;
                          case 2:
                            e.muted || e.embed.unMute(), st.call(e, !1);
                            break;
                          case 3:
                            ge.call(e, e.media, "waiting");
                        }
                        ge.call(e, e.elements.container, "statechange", !1, {
                          code: i.data,
                        });
                      },
                    },
                  });
                },
              },
              rt = {
                setup() {
                  this.media
                    ? (se(
                        this.elements.container,
                        this.config.classNames.type.replace("{0}", this.type),
                        !0
                      ),
                      se(
                        this.elements.container,
                        this.config.classNames.provider.replace(
                          "{0}",
                          this.provider
                        ),
                        !0
                      ),
                      this.isEmbed &&
                        se(
                          this.elements.container,
                          this.config.classNames.type.replace("{0}", "video"),
                          !0
                        ),
                      this.isVideo &&
                        ((this.elements.wrapper = Q("div", {
                          class: this.config.classNames.video,
                        })),
                        Y(this.media, this.elements.wrapper),
                        (this.elements.poster = Q("div", {
                          class: this.config.classNames.poster,
                        })),
                        this.elements.wrapper.appendChild(
                          this.elements.poster
                        )),
                      this.isHTML5
                        ? xe.setup.call(this)
                        : this.isYouTube
                        ? ot.setup.call(this)
                        : this.isVimeo && it.setup.call(this))
                    : this.debug.warn("No media element found!");
                },
              };
            class at {
              constructor(t) {
                e(this, "load", () => {
                  this.enabled &&
                    (O(window.google) && O(window.google.ima)
                      ? this.ready()
                      : et(this.player.config.urls.googleIMA.sdk)
                          .then(() => {
                            this.ready();
                          })
                          .catch(() => {
                            this.trigger(
                              "error",
                              new Error("Google IMA SDK failed to load")
                            );
                          }));
                }),
                  e(this, "ready", () => {
                    var e;
                    this.enabled ||
                      ((e = this).manager && e.manager.destroy(),
                      e.elements.displayContainer &&
                        e.elements.displayContainer.destroy(),
                      e.elements.container.remove()),
                      this.startSafetyTimer(12e3, "ready()"),
                      this.managerPromise.then(() => {
                        this.clearSafetyTimer("onAdsManagerLoaded()");
                      }),
                      this.listeners(),
                      this.setupIMA();
                  }),
                  e(this, "setupIMA", () => {
                    (this.elements.container = Q("div", {
                      class: this.player.config.classNames.ads,
                    })),
                      this.player.elements.container.appendChild(
                        this.elements.container
                      ),
                      google.ima.settings.setVpaidMode(
                        google.ima.ImaSdkSettings.VpaidMode.ENABLED
                      ),
                      google.ima.settings.setLocale(
                        this.player.config.ads.language
                      ),
                      google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                        this.player.config.playsinline
                      ),
                      (this.elements.displayContainer =
                        new google.ima.AdDisplayContainer(
                          this.elements.container,
                          this.player.media
                        )),
                      (this.loader = new google.ima.AdsLoader(
                        this.elements.displayContainer
                      )),
                      this.loader.addEventListener(
                        google.ima.AdsManagerLoadedEvent.Type
                          .ADS_MANAGER_LOADED,
                        (e) => this.onAdsManagerLoaded(e),
                        !1
                      ),
                      this.loader.addEventListener(
                        google.ima.AdErrorEvent.Type.AD_ERROR,
                        (e) => this.onAdError(e),
                        !1
                      ),
                      this.requestAds();
                  }),
                  e(this, "requestAds", () => {
                    const { container: e } = this.player.elements;
                    try {
                      const t = new google.ima.AdsRequest();
                      (t.adTagUrl = this.tagUrl),
                        (t.linearAdSlotWidth = e.offsetWidth),
                        (t.linearAdSlotHeight = e.offsetHeight),
                        (t.nonLinearAdSlotWidth = e.offsetWidth),
                        (t.nonLinearAdSlotHeight = e.offsetHeight),
                        (t.forceNonLinearFullSlot = !1),
                        t.setAdWillPlayMuted(!this.player.muted),
                        this.loader.requestAds(t);
                    } catch (e) {
                      this.onAdError(e);
                    }
                  }),
                  e(this, "pollCountdown", (e = !1) => {
                    if (!e)
                      return (
                        clearInterval(this.countdownTimer),
                        void this.elements.container.removeAttribute(
                          "data-badge-text"
                        )
                      );
                    this.countdownTimer = setInterval(() => {
                      const e = Be(
                          Math.max(this.manager.getRemainingTime(), 0)
                        ),
                        t = `${Me.get(
                          "advertisement",
                          this.player.config
                        )} - ${e}`;
                      this.elements.container.setAttribute(
                        "data-badge-text",
                        t
                      );
                    }, 100);
                  }),
                  e(this, "onAdsManagerLoaded", (e) => {
                    if (!this.enabled) return;
                    const t = new google.ima.AdsRenderingSettings();
                    (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                      (t.enablePreloading = !0),
                      (this.manager = e.getAdsManager(this.player, t)),
                      (this.cuePoints = this.manager.getCuePoints()),
                      this.manager.addEventListener(
                        google.ima.AdErrorEvent.Type.AD_ERROR,
                        (e) => this.onAdError(e)
                      ),
                      Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                        this.manager.addEventListener(
                          google.ima.AdEvent.Type[e],
                          (e) => this.onAdEvent(e)
                        );
                      }),
                      this.trigger("loaded");
                  }),
                  e(this, "addCuePoints", () => {
                    $(this.cuePoints) ||
                      this.cuePoints.forEach((e) => {
                        if (0 !== e && -1 !== e && e < this.player.duration) {
                          const t = this.player.elements.progress;
                          if (H(t)) {
                            const i = (100 / this.player.duration) * e,
                              s = Q("span", {
                                class: this.player.config.classNames.cues,
                              });
                            (s.style.left = i.toString() + "%"),
                              t.appendChild(s);
                          }
                        }
                      });
                  }),
                  e(this, "onAdEvent", (e) => {
                    const { container: t } = this.player.elements,
                      i = e.getAd(),
                      s = e.getAdData();
                    switch (
                      (((e) => {
                        ge.call(
                          this.player,
                          this.player.media,
                          "ads" + e.replace(/_/g, "").toLowerCase()
                        );
                      })(e.type),
                      e.type)
                    ) {
                      case google.ima.AdEvent.Type.LOADED:
                        this.trigger("loaded"),
                          this.pollCountdown(!0),
                          i.isLinear() ||
                            ((i.width = t.offsetWidth),
                            (i.height = t.offsetHeight));
                        break;
                      case google.ima.AdEvent.Type.STARTED:
                        this.manager.setVolume(this.player.volume);
                        break;
                      case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                        this.player.ended
                          ? this.loadAds()
                          : this.loader.contentComplete();
                        break;
                      case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                        this.pauseContent();
                        break;
                      case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                        this.pollCountdown(), this.resumeContent();
                        break;
                      case google.ima.AdEvent.Type.LOG:
                        s.adError &&
                          this.player.debug.warn(
                            "Non-fatal ad error: " + s.adError.getMessage()
                          );
                    }
                  }),
                  e(this, "onAdError", (e) => {
                    this.cancel(), this.player.debug.warn("Ads error", e);
                  }),
                  e(this, "listeners", () => {
                    const { container: e } = this.player.elements;
                    let t;
                    this.player.on("canplay", () => {
                      this.addCuePoints();
                    }),
                      this.player.on("ended", () => {
                        this.loader.contentComplete();
                      }),
                      this.player.on("timeupdate", () => {
                        t = this.player.currentTime;
                      }),
                      this.player.on("seeked", () => {
                        const e = this.player.currentTime;
                        $(this.cuePoints) ||
                          this.cuePoints.forEach((i, s) => {
                            t < i &&
                              i < e &&
                              (this.manager.discardAdBreak(),
                              this.cuePoints.splice(s, 1));
                          });
                      }),
                      window.addEventListener("resize", () => {
                        this.manager &&
                          this.manager.resize(
                            e.offsetWidth,
                            e.offsetHeight,
                            google.ima.ViewMode.NORMAL
                          );
                      });
                  }),
                  e(this, "play", () => {
                    const { container: e } = this.player.elements;
                    this.managerPromise || this.resumeContent(),
                      this.managerPromise
                        .then(() => {
                          this.manager.setVolume(this.player.volume),
                            this.elements.displayContainer.initialize();
                          try {
                            this.initialized ||
                              (this.manager.init(
                                e.offsetWidth,
                                e.offsetHeight,
                                google.ima.ViewMode.NORMAL
                              ),
                              this.manager.start()),
                              (this.initialized = !0);
                          } catch (e) {
                            this.onAdError(e);
                          }
                        })
                        .catch(() => {});
                  }),
                  e(this, "resumeContent", () => {
                    (this.elements.container.style.zIndex = ""),
                      (this.playing = !1),
                      ve(this.player.media.play());
                  }),
                  e(this, "pauseContent", () => {
                    (this.elements.container.style.zIndex = 3),
                      (this.playing = !0),
                      this.player.media.pause();
                  }),
                  e(this, "cancel", () => {
                    this.initialized && this.resumeContent(),
                      this.trigger("error"),
                      this.loadAds();
                  }),
                  e(this, "loadAds", () => {
                    this.managerPromise
                      .then(() => {
                        this.manager && this.manager.destroy(),
                          (this.managerPromise = new Promise((e) => {
                            this.on("loaded", e),
                              this.player.debug.log(this.manager);
                          })),
                          (this.initialized = !1),
                          this.requestAds();
                      })
                      .catch(() => {});
                  }),
                  e(this, "trigger", (e, ...t) => {
                    const i = this.events[e];
                    I(i) &&
                      i.forEach((e) => {
                        M(e) && e.apply(this, t);
                      });
                  }),
                  e(
                    this,
                    "on",
                    (e, t) => (
                      I(this.events[e]) || (this.events[e] = []),
                      this.events[e].push(t),
                      this
                    )
                  ),
                  e(this, "startSafetyTimer", (e, t) => {
                    this.player.debug.log("Safety timer invoked from: " + t),
                      (this.safetyTimer = setTimeout(() => {
                        this.cancel(),
                          this.clearSafetyTimer("startSafetyTimer()");
                      }, e));
                  }),
                  e(this, "clearSafetyTimer", (e) => {
                    L(this.safetyTimer) ||
                      (this.player.debug.log("Safety timer cleared from: " + e),
                      clearTimeout(this.safetyTimer),
                      (this.safetyTimer = null));
                  }),
                  (this.player = t),
                  (this.config = t.config.ads),
                  (this.playing = !1),
                  (this.initialized = !1),
                  (this.elements = { container: null, displayContainer: null }),
                  (this.manager = null),
                  (this.loader = null),
                  (this.cuePoints = null),
                  (this.events = {}),
                  (this.safetyTimer = null),
                  (this.countdownTimer = null),
                  (this.managerPromise = new Promise((e, t) => {
                    this.on("loaded", e), this.on("error", t);
                  })),
                  this.load();
              }
              get enabled() {
                const { config: e } = this;
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  e.enabled &&
                  (!$(e.publisherId) || F(e.tagUrl))
                );
              }
              get tagUrl() {
                const { config: e } = this;
                return F(e.tagUrl)
                  ? e.tagUrl
                  : "https://go.aniview.com/api/adserver6/vast/?" +
                      $e({
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId,
                      });
              }
            }
            const lt = (e) => {
                const t = [];
                return (
                  e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
                    const i = {};
                    e.split(/\r\n|\n|\r/).forEach((e) => {
                      if (P(i.startTime)) {
                        if (!$(e.trim()) && $(i.text)) {
                          const t = e.trim().split("#xywh=");
                          ([i.text] = t),
                            t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                        }
                      } else {
                        const t = e.match(
                          /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                        );
                        t &&
                          ((i.startTime =
                            60 * Number(t[1] || 0) * 60 +
                            60 * Number(t[2]) +
                            Number(t[3]) +
                            Number("0." + t[4])),
                          (i.endTime =
                            60 * Number(t[6] || 0) * 60 +
                            60 * Number(t[7]) +
                            Number(t[8]) +
                            Number("0." + t[9])));
                      }
                    }),
                      i.text && t.push(i);
                  }),
                  t
                );
              },
              ct = (e, t) => {
                const i = {};
                return (
                  e > t.width / t.height
                    ? ((i.width = t.width), (i.height = (1 / e) * t.width))
                    : ((i.height = t.height), (i.width = e * t.height)),
                  i
                );
              };
            class ut {
              constructor(t) {
                e(this, "load", () => {
                  this.player.elements.display.seekTooltip &&
                    (this.player.elements.display.seekTooltip.hidden =
                      this.enabled),
                    this.enabled &&
                      this.getThumbnails().then(() => {
                        this.enabled &&
                          (this.render(),
                          this.determineContainerAutoSizing(),
                          (this.loaded = !0));
                      });
                }),
                  e(
                    this,
                    "getThumbnails",
                    () =>
                      new Promise((e) => {
                        const { src: t } = this.player.config.previewThumbnails;
                        if ($(t))
                          throw new Error(
                            "Missing previewThumbnails.src config attribute"
                          );
                        const i = () => {
                          this.thumbnails.sort((e, t) => e.height - t.height),
                            this.player.debug.log(
                              "Preview thumbnails",
                              this.thumbnails
                            ),
                            e();
                        };
                        if (M(t))
                          t((e) => {
                            (this.thumbnails = e), i();
                          });
                        else {
                          const e = (N(t) ? [t] : t).map((e) =>
                            this.getThumbnail(e)
                          );
                          Promise.all(e).then(i);
                        }
                      })
                  ),
                  e(
                    this,
                    "getThumbnail",
                    (e) =>
                      new Promise((t) => {
                        je(e).then((i) => {
                          const s = {
                            frames: lt(i),
                            height: null,
                            urlPrefix: "",
                          };
                          s.frames[0].text.startsWith("/") ||
                            s.frames[0].text.startsWith("http://") ||
                            s.frames[0].text.startsWith("https://") ||
                            (s.urlPrefix = e.substring(
                              0,
                              e.lastIndexOf("/") + 1
                            ));
                          const n = new Image();
                          (n.onload = () => {
                            (s.height = n.naturalHeight),
                              (s.width = n.naturalWidth),
                              this.thumbnails.push(s),
                              t();
                          }),
                            (n.src = s.urlPrefix + s.frames[0].text);
                        });
                      })
                  ),
                  e(this, "startMove", (e) => {
                    if (
                      this.loaded &&
                      R(e) &&
                      ["touchmove", "mousemove"].includes(e.type) &&
                      this.player.media.duration
                    ) {
                      if ("touchmove" === e.type)
                        this.seekTime =
                          this.player.media.duration *
                          (this.player.elements.inputs.seek.value / 100);
                      else {
                        const t =
                            this.player.elements.progress.getBoundingClientRect(),
                          i = (100 / t.width) * (e.pageX - t.left);
                        (this.seekTime =
                          this.player.media.duration * (i / 100)),
                          this.seekTime < 0 && (this.seekTime = 0),
                          this.seekTime > this.player.media.duration - 1 &&
                            (this.seekTime = this.player.media.duration - 1),
                          (this.mousePosX = e.pageX),
                          (this.elements.thumb.time.innerText = Be(
                            this.seekTime
                          ));
                      }
                      this.showImageAtCurrentTime();
                    }
                  }),
                  e(this, "endMove", () => {
                    this.toggleThumbContainer(!1, !0);
                  }),
                  e(this, "startScrubbing", (e) => {
                    (L(e.button) || !1 === e.button || 0 === e.button) &&
                      ((this.mouseDown = !0),
                      this.player.media.duration &&
                        (this.toggleScrubbingContainer(!0),
                        this.toggleThumbContainer(!1, !0),
                        this.showImageAtCurrentTime()));
                  }),
                  e(this, "endScrubbing", () => {
                    (this.mouseDown = !1),
                      Math.ceil(this.lastTime) ===
                      Math.ceil(this.player.media.currentTime)
                        ? this.toggleScrubbingContainer(!1)
                        : fe.call(
                            this.player,
                            this.player.media,
                            "timeupdate",
                            () => {
                              this.mouseDown ||
                                this.toggleScrubbingContainer(!1);
                            }
                          );
                  }),
                  e(this, "listeners", () => {
                    this.player.on("play", () => {
                      this.toggleThumbContainer(!1, !0);
                    }),
                      this.player.on("seeked", () => {
                        this.toggleThumbContainer(!1);
                      }),
                      this.player.on("timeupdate", () => {
                        this.lastTime = this.player.media.currentTime;
                      });
                  }),
                  e(this, "render", () => {
                    (this.elements.thumb.container = Q("div", {
                      class:
                        this.player.config.classNames.previewThumbnails
                          .thumbContainer,
                    })),
                      (this.elements.thumb.imageContainer = Q("div", {
                        class:
                          this.player.config.classNames.previewThumbnails
                            .imageContainer,
                      })),
                      this.elements.thumb.container.appendChild(
                        this.elements.thumb.imageContainer
                      );
                    const e = Q("div", {
                      class:
                        this.player.config.classNames.previewThumbnails
                          .timeContainer,
                    });
                    (this.elements.thumb.time = Q("span", {}, "00:00")),
                      e.appendChild(this.elements.thumb.time),
                      this.elements.thumb.container.appendChild(e),
                      H(this.player.elements.progress) &&
                        this.player.elements.progress.appendChild(
                          this.elements.thumb.container
                        ),
                      (this.elements.scrubbing.container = Q("div", {
                        class:
                          this.player.config.classNames.previewThumbnails
                            .scrubbingContainer,
                      })),
                      this.player.elements.wrapper.appendChild(
                        this.elements.scrubbing.container
                      );
                  }),
                  e(this, "destroy", () => {
                    this.elements.thumb.container &&
                      this.elements.thumb.container.remove(),
                      this.elements.scrubbing.container &&
                        this.elements.scrubbing.container.remove();
                  }),
                  e(this, "showImageAtCurrentTime", () => {
                    this.mouseDown
                      ? this.setScrubbingContainerSize()
                      : this.setThumbContainerSizeAndPos();
                    const e = this.thumbnails[0].frames.findIndex(
                        (e) =>
                          this.seekTime >= e.startTime &&
                          this.seekTime <= e.endTime
                      ),
                      t = e >= 0;
                    let i = 0;
                    this.mouseDown || this.toggleThumbContainer(t),
                      t &&
                        (this.thumbnails.forEach((t, s) => {
                          this.loadedImages.includes(t.frames[e].text) &&
                            (i = s);
                        }),
                        e !== this.showingThumb &&
                          ((this.showingThumb = e), this.loadImage(i)));
                  }),
                  e(this, "loadImage", (e = 0) => {
                    const t = this.showingThumb,
                      i = this.thumbnails[e],
                      { urlPrefix: s } = i,
                      n = i.frames[t],
                      o = i.frames[t].text,
                      r = s + o;
                    if (
                      this.currentImageElement &&
                      this.currentImageElement.dataset.filename === o
                    )
                      this.showImage(this.currentImageElement, n, e, t, o, !1),
                        (this.currentImageElement.dataset.index = t),
                        this.removeOldImages(this.currentImageElement);
                    else {
                      this.loadingImage &&
                        this.usingSprites &&
                        (this.loadingImage.onload = null);
                      const i = new Image();
                      (i.src = r),
                        (i.dataset.index = t),
                        (i.dataset.filename = o),
                        (this.showingThumbFilename = o),
                        this.player.debug.log("Loading image: " + r),
                        (i.onload = () => this.showImage(i, n, e, t, o, !0)),
                        (this.loadingImage = i),
                        this.removeOldImages(i);
                    }
                  }),
                  e(this, "showImage", (e, t, i, s, n, o = !0) => {
                    this.player.debug.log(
                      `Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${o}`
                    ),
                      this.setImageSizeAndOffset(e, t),
                      o &&
                        (this.currentImageContainer.appendChild(e),
                        (this.currentImageElement = e),
                        this.loadedImages.includes(n) ||
                          this.loadedImages.push(n)),
                      this.preloadNearby(s, !0)
                        .then(this.preloadNearby(s, !1))
                        .then(this.getHigherQuality(i, e, t, n));
                  }),
                  e(this, "removeOldImages", (e) => {
                    Array.from(this.currentImageContainer.children).forEach(
                      (t) => {
                        if ("img" !== t.tagName.toLowerCase()) return;
                        const i = this.usingSprites ? 500 : 1e3;
                        if (
                          t.dataset.index !== e.dataset.index &&
                          !t.dataset.deleting
                        ) {
                          t.dataset.deleting = !0;
                          const { currentImageContainer: e } = this;
                          setTimeout(() => {
                            e.removeChild(t),
                              this.player.debug.log(
                                "Removing thumb: " + t.dataset.filename
                              );
                          }, i);
                        }
                      }
                    );
                  }),
                  e(
                    this,
                    "preloadNearby",
                    (e, t = !0) =>
                      new Promise((i) => {
                        setTimeout(() => {
                          const s = this.thumbnails[0].frames[e].text;
                          if (this.showingThumbFilename === s) {
                            let n;
                            n = t
                              ? this.thumbnails[0].frames.slice(e)
                              : this.thumbnails[0].frames.slice(0, e).reverse();
                            let o = !1;
                            n.forEach((e) => {
                              const t = e.text;
                              if (t !== s && !this.loadedImages.includes(t)) {
                                (o = !0),
                                  this.player.debug.log(
                                    "Preloading thumb filename: " + t
                                  );
                                const { urlPrefix: e } = this.thumbnails[0],
                                  s = e + t,
                                  n = new Image();
                                (n.src = s),
                                  (n.onload = () => {
                                    this.player.debug.log(
                                      "Preloaded thumb filename: " + t
                                    ),
                                      this.loadedImages.includes(t) ||
                                        this.loadedImages.push(t),
                                      i();
                                  });
                              }
                            }),
                              o || i();
                          }
                        }, 300);
                      })
                  ),
                  e(this, "getHigherQuality", (e, t, i, s) => {
                    if (e < this.thumbnails.length - 1) {
                      let n = t.naturalHeight;
                      this.usingSprites && (n = i.h),
                        n < this.thumbContainerHeight &&
                          setTimeout(() => {
                            this.showingThumbFilename === s &&
                              (this.player.debug.log(
                                "Showing higher quality thumb for: " + s
                              ),
                              this.loadImage(e + 1));
                          }, 300);
                    }
                  }),
                  e(this, "toggleThumbContainer", (e = !1, t = !1) => {
                    const i =
                      this.player.config.classNames.previewThumbnails
                        .thumbContainerShown;
                    this.elements.thumb.container.classList.toggle(i, e),
                      !e &&
                        t &&
                        ((this.showingThumb = null),
                        (this.showingThumbFilename = null));
                  }),
                  e(this, "toggleScrubbingContainer", (e = !1) => {
                    const t =
                      this.player.config.classNames.previewThumbnails
                        .scrubbingContainerShown;
                    this.elements.scrubbing.container.classList.toggle(t, e),
                      e ||
                        ((this.showingThumb = null),
                        (this.showingThumbFilename = null));
                  }),
                  e(this, "determineContainerAutoSizing", () => {
                    (this.elements.thumb.imageContainer.clientHeight > 20 ||
                      this.elements.thumb.imageContainer.clientWidth > 20) &&
                      (this.sizeSpecifiedInCSS = !0);
                  }),
                  e(this, "setThumbContainerSizeAndPos", () => {
                    if (this.sizeSpecifiedInCSS) {
                      if (
                        this.elements.thumb.imageContainer.clientHeight > 20 &&
                        this.elements.thumb.imageContainer.clientWidth < 20
                      ) {
                        const e = Math.floor(
                          this.elements.thumb.imageContainer.clientHeight *
                            this.thumbAspectRatio
                        );
                        this.elements.thumb.imageContainer.style.width =
                          e + "px";
                      } else if (
                        this.elements.thumb.imageContainer.clientHeight < 20 &&
                        this.elements.thumb.imageContainer.clientWidth > 20
                      ) {
                        const e = Math.floor(
                          this.elements.thumb.imageContainer.clientWidth /
                            this.thumbAspectRatio
                        );
                        this.elements.thumb.imageContainer.style.height =
                          e + "px";
                      }
                    } else {
                      const e = Math.floor(
                        this.thumbContainerHeight * this.thumbAspectRatio
                      );
                      (this.elements.thumb.imageContainer.style.height =
                        this.thumbContainerHeight + "px"),
                        (this.elements.thumb.imageContainer.style.width =
                          e + "px");
                    }
                    this.setThumbContainerPos();
                  }),
                  e(this, "setThumbContainerPos", () => {
                    const e =
                        this.player.elements.progress.getBoundingClientRect(),
                      t =
                        this.player.elements.container.getBoundingClientRect(),
                      { container: i } = this.elements.thumb,
                      s = t.left - e.left + 10,
                      n = t.right - e.left - i.clientWidth - 10;
                    let o = this.mousePosX - e.left - i.clientWidth / 2;
                    o < s && (o = s),
                      o > n && (o = n),
                      (i.style.left = o + "px");
                  }),
                  e(this, "setScrubbingContainerSize", () => {
                    const { width: e, height: t } = ct(this.thumbAspectRatio, {
                      width: this.player.media.clientWidth,
                      height: this.player.media.clientHeight,
                    });
                    (this.elements.scrubbing.container.style.width = e + "px"),
                      (this.elements.scrubbing.container.style.height =
                        t + "px");
                  }),
                  e(this, "setImageSizeAndOffset", (e, t) => {
                    if (!this.usingSprites) return;
                    const i = this.thumbContainerHeight / t.h;
                    (e.style.height = e.naturalHeight * i + "px"),
                      (e.style.width = e.naturalWidth * i + "px"),
                      (e.style.left = `-${t.x * i}px`),
                      (e.style.top = `-${t.y * i}px`);
                  }),
                  (this.player = t),
                  (this.thumbnails = []),
                  (this.loaded = !1),
                  (this.lastMouseMoveTime = Date.now()),
                  (this.mouseDown = !1),
                  (this.loadedImages = []),
                  (this.elements = { thumb: {}, scrubbing: {} }),
                  this.load();
              }
              get enabled() {
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  this.player.config.previewThumbnails.enabled
                );
              }
              get currentImageContainer() {
                return this.mouseDown
                  ? this.elements.scrubbing.container
                  : this.elements.thumb.imageContainer;
              }
              get usingSprites() {
                return Object.keys(this.thumbnails[0].frames[0]).includes("w");
              }
              get thumbAspectRatio() {
                return this.usingSprites
                  ? this.thumbnails[0].frames[0].w /
                      this.thumbnails[0].frames[0].h
                  : this.thumbnails[0].width / this.thumbnails[0].height;
              }
              get thumbContainerHeight() {
                if (this.mouseDown) {
                  const { height: e } = ct(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight,
                  });
                  return e;
                }
                return this.sizeSpecifiedInCSS
                  ? this.elements.thumb.imageContainer.clientHeight
                  : Math.floor(
                      this.player.media.clientWidth / this.thumbAspectRatio / 4
                    );
              }
              get currentImageElement() {
                return this.mouseDown
                  ? this.currentScrubbingImageElement
                  : this.currentThumbnailImageElement;
              }
              set currentImageElement(e) {
                this.mouseDown
                  ? (this.currentScrubbingImageElement = e)
                  : (this.currentThumbnailImageElement = e);
              }
            }
            const ht = {
              insertElements(e, t) {
                N(t)
                  ? J(e, this.media, { src: t })
                  : I(t) &&
                    t.forEach((t) => {
                      J(e, this.media, t);
                    });
              },
              change(e) {
                U(e, "sources.length")
                  ? (xe.cancelRequests.call(this),
                    this.destroy.call(
                      this,
                      () => {
                        (this.options.quality = []),
                          G(this.media),
                          (this.media = null),
                          H(this.elements.container) &&
                            this.elements.container.removeAttribute("class");
                        const { sources: t, type: i } = e,
                          [{ provider: s = Ue.html5, src: n }] = t,
                          o = "html5" === s ? i : "div",
                          r = "html5" === s ? {} : { src: n };
                        Object.assign(this, {
                          provider: s,
                          type: i,
                          supported: ue.check(i, s, this.config.playsinline),
                          media: Q(o, r),
                        }),
                          this.elements.container.appendChild(this.media),
                          D(e.autoplay) && (this.config.autoplay = e.autoplay),
                          this.isHTML5 &&
                            (this.config.crossorigin &&
                              this.media.setAttribute("crossorigin", ""),
                            this.config.autoplay &&
                              this.media.setAttribute("autoplay", ""),
                            $(e.poster) || (this.poster = e.poster),
                            this.config.loop.active &&
                              this.media.setAttribute("loop", ""),
                            this.config.muted &&
                              this.media.setAttribute("muted", ""),
                            this.config.playsinline &&
                              this.media.setAttribute("playsinline", "")),
                          Je.addStyleHook.call(this),
                          this.isHTML5 &&
                            ht.insertElements.call(this, "source", t),
                          (this.config.title = e.title),
                          rt.setup.call(this),
                          this.isHTML5 &&
                            Object.keys(e).includes("tracks") &&
                            ht.insertElements.call(this, "track", e.tracks),
                          (this.isHTML5 ||
                            (this.isEmbed && !this.supported.ui)) &&
                            Je.build.call(this),
                          this.isHTML5 && this.media.load(),
                          $(e.previewThumbnails) ||
                            (Object.assign(
                              this.config.previewThumbnails,
                              e.previewThumbnails
                            ),
                            this.previewThumbnails &&
                              this.previewThumbnails.loaded &&
                              (this.previewThumbnails.destroy(),
                              (this.previewThumbnails = null)),
                            this.config.previewThumbnails.enabled &&
                              (this.previewThumbnails = new ut(this))),
                          this.fullscreen.update();
                      },
                      !0
                    ))
                  : this.debug.warn("Invalid source format");
              },
            };
            class dt {
              constructor(t, i) {
                if (
                  (e(this, "play", () =>
                    M(this.media.play)
                      ? (this.ads &&
                          this.ads.enabled &&
                          this.ads.managerPromise
                            .then(() => this.ads.play())
                            .catch(() => ve(this.media.play())),
                        this.media.play())
                      : null
                  ),
                  e(this, "pause", () =>
                    this.playing && M(this.media.pause)
                      ? this.media.pause()
                      : null
                  ),
                  e(this, "togglePlay", (e) =>
                    (D(e) ? e : !this.playing) ? this.play() : this.pause()
                  ),
                  e(this, "stop", () => {
                    this.isHTML5
                      ? (this.pause(), this.restart())
                      : M(this.media.stop) && this.media.stop();
                  }),
                  e(this, "restart", () => {
                    this.currentTime = 0;
                  }),
                  e(this, "rewind", (e) => {
                    this.currentTime -= P(e) ? e : this.config.seekTime;
                  }),
                  e(this, "forward", (e) => {
                    this.currentTime += P(e) ? e : this.config.seekTime;
                  }),
                  e(this, "increaseVolume", (e) => {
                    const t = this.media.muted ? 0 : this.volume;
                    this.volume = t + (P(e) ? e : 0);
                  }),
                  e(this, "decreaseVolume", (e) => {
                    this.increaseVolume(-e);
                  }),
                  e(this, "airplay", () => {
                    ue.airplay && this.media.webkitShowPlaybackTargetPicker();
                  }),
                  e(this, "toggleControls", (e) => {
                    if (this.supported.ui && !this.isAudio) {
                      const t = ne(
                          this.elements.container,
                          this.config.classNames.hideControls
                        ),
                        i = void 0 === e ? void 0 : !e,
                        s = se(
                          this.elements.container,
                          this.config.classNames.hideControls,
                          i
                        );
                      if (
                        (s &&
                          I(this.config.controls) &&
                          this.config.controls.includes("settings") &&
                          !$(this.config.settings) &&
                          qe.toggleMenu.call(this, !1),
                        s !== t)
                      ) {
                        const e = s ? "controlshidden" : "controlsshown";
                        ge.call(this, this.media, e);
                      }
                      return !s;
                    }
                    return !1;
                  }),
                  e(this, "on", (e, t) => {
                    pe.call(this, this.elements.container, e, t);
                  }),
                  e(this, "once", (e, t) => {
                    fe.call(this, this.elements.container, e, t);
                  }),
                  e(this, "off", (e, t) => {
                    me(this.elements.container, e, t);
                  }),
                  e(this, "destroy", (e, t = !1) => {
                    if (!this.ready) return;
                    const i = () => {
                      (document.body.style.overflow = ""),
                        (this.embed = null),
                        t
                          ? (Object.keys(this.elements).length &&
                              (G(this.elements.buttons.play),
                              G(this.elements.captions),
                              G(this.elements.controls),
                              G(this.elements.wrapper),
                              (this.elements.buttons.play = null),
                              (this.elements.captions = null),
                              (this.elements.controls = null),
                              (this.elements.wrapper = null)),
                            M(e) && e())
                          : (be.call(this),
                            xe.cancelRequests.call(this),
                            ee(this.elements.original, this.elements.container),
                            ge.call(
                              this,
                              this.elements.original,
                              "destroyed",
                              !0
                            ),
                            M(e) && e.call(this.elements.original),
                            (this.ready = !1),
                            setTimeout(() => {
                              (this.elements = null), (this.media = null);
                            }, 200));
                    };
                    this.stop(),
                      clearTimeout(this.timers.loading),
                      clearTimeout(this.timers.controls),
                      clearTimeout(this.timers.resized),
                      this.isHTML5
                        ? (Je.toggleNativeControls.call(this, !0), i())
                        : this.isYouTube
                        ? (clearInterval(this.timers.buffering),
                          clearInterval(this.timers.playing),
                          null !== this.embed &&
                            M(this.embed.destroy) &&
                            this.embed.destroy(),
                          i())
                        : this.isVimeo &&
                          (null !== this.embed && this.embed.unload().then(i),
                          setTimeout(i, 200));
                  }),
                  e(this, "supports", (e) => ue.mime.call(this, e)),
                  (this.timers = {}),
                  (this.ready = !1),
                  (this.loading = !1),
                  (this.failed = !1),
                  (this.touch = ue.touch),
                  (this.media = t),
                  N(this.media) &&
                    (this.media = document.querySelectorAll(this.media)),
                  ((window.jQuery && this.media instanceof jQuery) ||
                    j(this.media) ||
                    I(this.media)) &&
                    (this.media = this.media[0]),
                  (this.config = K(
                    {},
                    ze,
                    dt.defaults,
                    i || {},
                    (() => {
                      try {
                        return JSON.parse(
                          this.media.getAttribute("data-plyr-config")
                        );
                      } catch (e) {
                        return {};
                      }
                    })()
                  )),
                  (this.elements = {
                    container: null,
                    fullscreen: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                      popup: null,
                      menu: null,
                      panels: {},
                      buttons: {},
                    },
                  }),
                  (this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap(),
                  }),
                  (this.fullscreen = { active: !1 }),
                  (this.options = { speed: [], quality: [] }),
                  (this.debug = new Ye(this.config.debug)),
                  this.debug.log("Config", this.config),
                  this.debug.log("Support", ue),
                  L(this.media) || !H(this.media))
                )
                  return void this.debug.error(
                    "Setup failed: no suitable element passed"
                  );
                if (this.media.plyr)
                  return void this.debug.warn("Target already setup");
                if (!this.config.enabled)
                  return void this.debug.error(
                    "Setup failed: disabled by config"
                  );
                if (!ue.check().api)
                  return void this.debug.error("Setup failed: no support");
                const s = this.media.cloneNode(!0);
                (s.autoplay = !1), (this.elements.original = s);
                const n = this.media.tagName.toLowerCase();
                let o = null,
                  r = null;
                switch (n) {
                  case "div":
                    if (((o = this.media.querySelector("iframe")), H(o))) {
                      if (
                        ((r = Fe(o.getAttribute("src"))),
                        (this.provider = (function (e) {
                          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                            e
                          )
                            ? Ue.youtube
                            : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                e
                              )
                            ? Ue.vimeo
                            : null;
                        })(r.toString())),
                        (this.elements.container = this.media),
                        (this.media = o),
                        (this.elements.container.className = ""),
                        r.search.length)
                      ) {
                        const e = ["1", "true"];
                        e.includes(r.searchParams.get("autoplay")) &&
                          (this.config.autoplay = !0),
                          e.includes(r.searchParams.get("loop")) &&
                            (this.config.loop.active = !0),
                          this.isYouTube
                            ? ((this.config.playsinline = e.includes(
                                r.searchParams.get("playsinline")
                              )),
                              (this.config.youtube.hl =
                                r.searchParams.get("hl")))
                            : (this.config.playsinline = !0);
                      }
                    } else
                      (this.provider = this.media.getAttribute(
                        this.config.attributes.embed.provider
                      )),
                        this.media.removeAttribute(
                          this.config.attributes.embed.provider
                        );
                    if (
                      $(this.provider) ||
                      !Object.values(Ue).includes(this.provider)
                    )
                      return void this.debug.error(
                        "Setup failed: Invalid provider"
                      );
                    this.type = "video";
                    break;
                  case "video":
                  case "audio":
                    (this.type = n),
                      (this.provider = Ue.html5),
                      this.media.hasAttribute("crossorigin") &&
                        (this.config.crossorigin = !0),
                      this.media.hasAttribute("autoplay") &&
                        (this.config.autoplay = !0),
                      (this.media.hasAttribute("playsinline") ||
                        this.media.hasAttribute("webkit-playsinline")) &&
                        (this.config.playsinline = !0),
                      this.media.hasAttribute("muted") &&
                        (this.config.muted = !0),
                      this.media.hasAttribute("loop") &&
                        (this.config.loop.active = !0);
                    break;
                  default:
                    return void this.debug.error(
                      "Setup failed: unsupported type"
                    );
                }
                (this.supported = ue.check(
                  this.type,
                  this.provider,
                  this.config.playsinline
                )),
                  this.supported.api
                    ? ((this.eventListeners = []),
                      (this.listeners = new Ge(this)),
                      (this.storage = new Ie(this)),
                      (this.media.plyr = this),
                      H(this.elements.container) ||
                        ((this.elements.container = Q("div", { tabindex: 0 })),
                        Y(this.media, this.elements.container)),
                      Je.migrateStyles.call(this),
                      Je.addStyleHook.call(this),
                      rt.setup.call(this),
                      this.config.debug &&
                        pe.call(
                          this,
                          this.elements.container,
                          this.config.events.join(" "),
                          (e) => {
                            this.debug.log("event: " + e.type);
                          }
                        ),
                      (this.fullscreen = new Xe(this)),
                      (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                        Je.build.call(this),
                      this.listeners.container(),
                      this.listeners.global(),
                      this.config.ads.enabled && (this.ads = new at(this)),
                      this.isHTML5 &&
                        this.config.autoplay &&
                        this.once("canplay", () => ve(this.play())),
                      (this.lastSeekTime = 0),
                      this.config.previewThumbnails.enabled &&
                        (this.previewThumbnails = new ut(this)))
                    : this.debug.error("Setup failed: no support");
              }
              get isHTML5() {
                return this.provider === Ue.html5;
              }
              get isEmbed() {
                return this.isYouTube || this.isVimeo;
              }
              get isYouTube() {
                return this.provider === Ue.youtube;
              }
              get isVimeo() {
                return this.provider === Ue.vimeo;
              }
              get isVideo() {
                return "video" === this.type;
              }
              get isAudio() {
                return "audio" === this.type;
              }
              get playing() {
                return Boolean(this.ready && !this.paused && !this.ended);
              }
              get paused() {
                return Boolean(this.media.paused);
              }
              get stopped() {
                return Boolean(this.paused && 0 === this.currentTime);
              }
              get ended() {
                return Boolean(this.media.ended);
              }
              set currentTime(e) {
                if (!this.duration) return;
                const t = P(e) && e > 0;
                (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
                  this.debug.log(`Seeking to ${this.currentTime} seconds`);
              }
              get currentTime() {
                return Number(this.media.currentTime);
              }
              get buffered() {
                const { buffered: e } = this.media;
                return P(e)
                  ? e
                  : e && e.length && this.duration > 0
                  ? e.end(0) / this.duration
                  : 0;
              }
              get seeking() {
                return Boolean(this.media.seeking);
              }
              get duration() {
                const e = parseFloat(this.config.duration),
                  t = (this.media || {}).duration,
                  i = P(t) && t !== 1 / 0 ? t : 0;
                return e || i;
              }
              set volume(e) {
                let t = e;
                N(t) && (t = Number(t)),
                  P(t) || (t = this.storage.get("volume")),
                  P(t) || ({ volume: t } = this.config),
                  t > 1 && (t = 1),
                  t < 0 && (t = 0),
                  (this.config.volume = t),
                  (this.media.volume = t),
                  !$(e) && this.muted && t > 0 && (this.muted = !1);
              }
              get volume() {
                return Number(this.media.volume);
              }
              set muted(e) {
                let t = e;
                D(t) || (t = this.storage.get("muted")),
                  D(t) || (t = this.config.muted),
                  (this.config.muted = t),
                  (this.media.muted = t);
              }
              get muted() {
                return Boolean(this.media.muted);
              }
              get hasAudio() {
                return (
                  !this.isHTML5 ||
                  !!this.isAudio ||
                  Boolean(this.media.mozHasAudio) ||
                  Boolean(this.media.webkitAudioDecodedByteCount) ||
                  Boolean(
                    this.media.audioTracks && this.media.audioTracks.length
                  )
                );
              }
              set speed(e) {
                let t = null;
                P(e) && (t = e),
                  P(t) || (t = this.storage.get("speed")),
                  P(t) || (t = this.config.speed.selected);
                const { minimumSpeed: i, maximumSpeed: s } = this;
                (t = (function (e = 0, t = 0, i = 255) {
                  return Math.min(Math.max(e, t), i);
                })(t, i, s)),
                  (this.config.speed.selected = t),
                  setTimeout(() => {
                    this.media.playbackRate = t;
                  }, 0);
              }
              get speed() {
                return Number(this.media.playbackRate);
              }
              get minimumSpeed() {
                return this.isYouTube
                  ? Math.min(...this.options.speed)
                  : this.isVimeo
                  ? 0.5
                  : 0.0625;
              }
              get maximumSpeed() {
                return this.isYouTube
                  ? Math.max(...this.options.speed)
                  : this.isVimeo
                  ? 2
                  : 16;
              }
              set quality(e) {
                const t = this.config.quality,
                  i = this.options.quality;
                if (!i.length) return;
                let s = [
                    !$(e) && Number(e),
                    this.storage.get("quality"),
                    t.selected,
                    t.default,
                  ].find(P),
                  n = !0;
                if (!i.includes(s)) {
                  const e = _e(i, s);
                  this.debug.warn(
                    `Unsupported quality option: ${s}, using ${e} instead`
                  ),
                    (s = e),
                    (n = !1);
                }
                (t.selected = s),
                  (this.media.quality = s),
                  n && this.storage.set({ quality: s });
              }
              get quality() {
                return this.media.quality;
              }
              set loop(e) {
                const t = D(e) ? e : this.config.loop.active;
                (this.config.loop.active = t), (this.media.loop = t);
              }
              get loop() {
                return Boolean(this.media.loop);
              }
              set source(e) {
                ht.change.call(this, e);
              }
              get source() {
                return this.media.currentSrc;
              }
              get download() {
                const { download: e } = this.config.urls;
                return F(e) ? e : this.source;
              }
              set download(e) {
                F(e) &&
                  ((this.config.urls.download = e),
                  qe.setDownloadUrl.call(this));
              }
              set poster(e) {
                this.isVideo
                  ? Je.setPoster.call(this, e, !1).catch(() => {})
                  : this.debug.warn("Poster can only be set for video");
              }
              get poster() {
                return this.isVideo
                  ? this.media.getAttribute("poster") ||
                      this.media.getAttribute("data-poster")
                  : null;
              }
              get ratio() {
                if (!this.isVideo) return null;
                const e = Ee(Ce.call(this));
                return I(e) ? e.join(":") : e;
              }
              set ratio(e) {
                this.isVideo
                  ? N(e) && Te(e)
                    ? ((this.config.ratio = Ee(e)), Ae.call(this))
                    : this.debug.error(`Invalid aspect ratio specified (${e})`)
                  : this.debug.warn("Aspect ratio can only be set for video");
              }
              set autoplay(e) {
                const t = D(e) ? e : this.config.autoplay;
                this.config.autoplay = t;
              }
              get autoplay() {
                return Boolean(this.config.autoplay);
              }
              toggleCaptions(e) {
                We.toggle.call(this, e, !1);
              }
              set currentTrack(e) {
                We.set.call(this, e, !1);
              }
              get currentTrack() {
                const { toggled: e, currentTrack: t } = this.captions;
                return e ? t : -1;
              }
              set language(e) {
                We.setLanguage.call(this, e, !1);
              }
              get language() {
                return (We.getCurrentTrack.call(this) || {}).language;
              }
              set pip(e) {
                if (!ue.pip) return;
                const t = D(e) ? e : !this.pip;
                M(this.media.webkitSetPresentationMode) &&
                  this.media.webkitSetPresentationMode(t ? Ve : "inline"),
                  M(this.media.requestPictureInPicture) &&
                    (!this.pip && t
                      ? this.media.requestPictureInPicture()
                      : this.pip && !t && document.exitPictureInPicture());
              }
              get pip() {
                return ue.pip
                  ? $(this.media.webkitPresentationMode)
                    ? this.media === document.pictureInPictureElement
                    : this.media.webkitPresentationMode === Ve
                  : null;
              }
              static supported(e, t, i) {
                return ue.check(e, t, i);
              }
              static loadSprite(e, t) {
                return He(e, t);
              }
              static setup(e, t = {}) {
                let i = null;
                return (
                  N(e)
                    ? (i = Array.from(document.querySelectorAll(e)))
                    : j(e)
                    ? (i = Array.from(e))
                    : I(e) && (i = e.filter(H)),
                  $(i) ? null : i.map((e) => new dt(e, t))
                );
              }
            }
            var pt;
            return (
              (dt.defaults = ((pt = ze), JSON.parse(JSON.stringify(pt)))), dt
            );
          })());
      }).call(this, i(7));
    },
    function (e, t, i) {
      e.exports = (function (e) {
        function t(s) {
          if (i[s]) return i[s].exports;
          var n = (i[s] = { exports: {}, id: s, loaded: !1 });
          return (
            e[s].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports
          );
        }
        var i = {};
        return (t.m = e), (t.c = i), (t.p = "dist/"), t(0);
      })([
        function (e, t, i) {
          "use strict";
          function s(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var n =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var i = arguments[t];
                  for (var s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
                }
                return e;
              },
            o = (s(i(1)), i(6)),
            r = s(o),
            a = s(i(7)),
            l = s(i(8)),
            c = s(i(9)),
            u = s(i(10)),
            h = s(i(11)),
            d = s(i(14)),
            p = [],
            m = !1,
            f = {
              offset: 120,
              delay: 0,
              easing: "ease",
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: "DOMContentLoaded",
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            },
            g = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if ((e && (m = !0), m))
                return (p = (0, h.default)(p, f)), (0, u.default)(p, f.once), p;
            },
            b = function () {
              (p = (0, d.default)()), g();
            };
          e.exports = {
            init: function (e) {
              (f = n(f, e)), (p = (0, d.default)());
              var t = document.all && !window.atob;
              return (function (e) {
                return (
                  !0 === e ||
                  ("mobile" === e && c.default.mobile()) ||
                  ("phone" === e && c.default.phone()) ||
                  ("tablet" === e && c.default.tablet()) ||
                  ("function" == typeof e && !0 === e())
                );
              })(f.disable) || t
                ? void p.forEach(function (e, t) {
                    e.node.removeAttribute("data-aos"),
                      e.node.removeAttribute("data-aos-easing"),
                      e.node.removeAttribute("data-aos-duration"),
                      e.node.removeAttribute("data-aos-delay");
                  })
                : (f.disableMutationObserver ||
                    l.default.isSupported() ||
                    (console.info(
                      '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                    ),
                    (f.disableMutationObserver = !0)),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", f.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", f.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", f.delay),
                  "DOMContentLoaded" === f.startEvent &&
                  ["complete", "interactive"].indexOf(document.readyState) > -1
                    ? g(!0)
                    : "load" === f.startEvent
                    ? window.addEventListener(f.startEvent, function () {
                        g(!0);
                      })
                    : document.addEventListener(f.startEvent, function () {
                        g(!0);
                      }),
                  window.addEventListener(
                    "resize",
                    (0, a.default)(g, f.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    (0, a.default)(g, f.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "scroll",
                    (0, r.default)(function () {
                      (0, u.default)(p, f.once);
                    }, f.throttleDelay)
                  ),
                  f.disableMutationObserver || l.default.ready("[data-aos]", b),
                  p);
            },
            refresh: g,
            refreshHard: b,
          };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (e, t) {
          (function (t) {
            "use strict";
            function i(e, t, i) {
              function n(t) {
                var i = d,
                  s = p;
                return (d = p = void 0), (y = t), (f = e.apply(s, i));
              }
              function r(e) {
                return (y = e), (g = setTimeout(c, t)), k ? n(e) : f;
              }
              function l(e) {
                var i = e - b;
                return void 0 === b || i >= t || i < 0 || (T && e - y >= m);
              }
              function c() {
                var e = _();
                return l(e)
                  ? u(e)
                  : void (g = setTimeout(
                      c,
                      (function (e) {
                        var i = t - (e - b);
                        return T ? w(i, m - (e - y)) : i;
                      })(e)
                    ));
              }
              function u(e) {
                return (g = void 0), E && d ? n(e) : ((d = p = void 0), f);
              }
              function h() {
                var e = _(),
                  i = l(e);
                if (((d = arguments), (p = this), (b = e), i)) {
                  if (void 0 === g) return r(b);
                  if (T) return (g = setTimeout(c, t)), n(b);
                }
                return void 0 === g && (g = setTimeout(c, t)), f;
              }
              var d,
                p,
                m,
                f,
                g,
                b,
                y = 0,
                k = !1,
                T = !1,
                E = !0;
              if ("function" != typeof e) throw new TypeError(a);
              return (
                (t = o(t) || 0),
                s(i) &&
                  ((k = !!i.leading),
                  (m = (T = "maxWait" in i) ? v(o(i.maxWait) || 0, t) : m),
                  (E = "trailing" in i ? !!i.trailing : E)),
                (h.cancel = function () {
                  void 0 !== g && clearTimeout(g),
                    (y = 0),
                    (d = b = p = g = void 0);
                }),
                (h.flush = function () {
                  return void 0 === g ? f : u(_());
                }),
                h
              );
            }
            function s(e) {
              var t = void 0 === e ? "undefined" : r(e);
              return !!e && ("object" == t || "function" == t);
            }
            function n(e) {
              return (
                "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                ((function (e) {
                  return !!e && "object" == (void 0 === e ? "undefined" : r(e));
                })(e) &&
                  y.call(e) == c)
              );
            }
            function o(e) {
              if ("number" == typeof e) return e;
              if (n(e)) return l;
              if (s(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = s(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(u, "");
              var i = d.test(e);
              return i || p.test(e)
                ? m(e.slice(2), i ? 2 : 8)
                : h.test(e)
                ? l
                : +e;
            }
            var r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              a = "Expected a function",
              l = NaN,
              c = "[object Symbol]",
              u = /^\s+|\s+$/g,
              h = /^[-+]0x[0-9a-f]+$/i,
              d = /^0b[01]+$/i,
              p = /^0o[0-7]+$/i,
              m = parseInt,
              f =
                "object" == (void 0 === t ? "undefined" : r(t)) &&
                t &&
                t.Object === Object &&
                t,
              g =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : r(self)) &&
                self &&
                self.Object === Object &&
                self,
              b = f || g || Function("return this")(),
              y = Object.prototype.toString,
              v = Math.max,
              w = Math.min,
              _ = function () {
                return b.Date.now();
              };
            e.exports = function (e, t, n) {
              var o = !0,
                r = !0;
              if ("function" != typeof e) throw new TypeError(a);
              return (
                s(n) &&
                  ((o = "leading" in n ? !!n.leading : o),
                  (r = "trailing" in n ? !!n.trailing : r)),
                i(e, t, { leading: o, maxWait: t, trailing: r })
              );
            };
          }).call(
            t,
            (function () {
              return this;
            })()
          );
        },
        function (e, t) {
          (function (t) {
            "use strict";
            function i(e) {
              var t = void 0 === e ? "undefined" : o(e);
              return !!e && ("object" == t || "function" == t);
            }
            function s(e) {
              return (
                "symbol" == (void 0 === e ? "undefined" : o(e)) ||
                ((function (e) {
                  return !!e && "object" == (void 0 === e ? "undefined" : o(e));
                })(e) &&
                  b.call(e) == l)
              );
            }
            function n(e) {
              if ("number" == typeof e) return e;
              if (s(e)) return a;
              if (i(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = e.replace(c, "");
              var n = h.test(e);
              return n || d.test(e)
                ? p(e.slice(2), n ? 2 : 8)
                : u.test(e)
                ? a
                : +e;
            }
            var o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              r = "Expected a function",
              a = NaN,
              l = "[object Symbol]",
              c = /^\s+|\s+$/g,
              u = /^[-+]0x[0-9a-f]+$/i,
              h = /^0b[01]+$/i,
              d = /^0o[0-7]+$/i,
              p = parseInt,
              m =
                "object" == (void 0 === t ? "undefined" : o(t)) &&
                t &&
                t.Object === Object &&
                t,
              f =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : o(self)) &&
                self &&
                self.Object === Object &&
                self,
              g = m || f || Function("return this")(),
              b = Object.prototype.toString,
              y = Math.max,
              v = Math.min,
              w = function () {
                return g.Date.now();
              };
            e.exports = function (e, t, s) {
              function o(t) {
                var i = d,
                  s = p;
                return (d = p = void 0), (_ = t), (f = e.apply(s, i));
              }
              function a(e) {
                return (_ = e), (g = setTimeout(c, t)), k ? o(e) : f;
              }
              function l(e) {
                var i = e - b;
                return void 0 === b || i >= t || i < 0 || (T && e - _ >= m);
              }
              function c() {
                var e = w();
                return l(e)
                  ? u(e)
                  : void (g = setTimeout(
                      c,
                      (function (e) {
                        var i = t - (e - b);
                        return T ? v(i, m - (e - _)) : i;
                      })(e)
                    ));
              }
              function u(e) {
                return (g = void 0), E && d ? o(e) : ((d = p = void 0), f);
              }
              function h() {
                var e = w(),
                  i = l(e);
                if (((d = arguments), (p = this), (b = e), i)) {
                  if (void 0 === g) return a(b);
                  if (T) return (g = setTimeout(c, t)), o(b);
                }
                return void 0 === g && (g = setTimeout(c, t)), f;
              }
              var d,
                p,
                m,
                f,
                g,
                b,
                _ = 0,
                k = !1,
                T = !1,
                E = !0;
              if ("function" != typeof e) throw new TypeError(r);
              return (
                (t = n(t) || 0),
                i(s) &&
                  ((k = !!s.leading),
                  (m = (T = "maxWait" in s) ? y(n(s.maxWait) || 0, t) : m),
                  (E = "trailing" in s ? !!s.trailing : E)),
                (h.cancel = function () {
                  void 0 !== g && clearTimeout(g),
                    (_ = 0),
                    (d = b = p = g = void 0);
                }),
                (h.flush = function () {
                  return void 0 === g ? f : u(w());
                }),
                h
              );
            };
          }).call(
            t,
            (function () {
              return this;
            })()
          );
        },
        function (e, t) {
          "use strict";
          function i() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function s(e) {
            e &&
              e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                  i = Array.prototype.slice.call(e.removedNodes);
                if (
                  (function e(t) {
                    var i = void 0,
                      s = void 0;
                    for (i = 0; i < t.length; i += 1) {
                      if ((s = t[i]).dataset && s.dataset.aos) return !0;
                      if (s.children && e(s.children)) return !0;
                    }
                    return !1;
                  })(t.concat(i))
                )
                  return n();
              });
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function () {};
          t.default = {
            isSupported: function () {
              return !!i();
            },
            ready: function (e, t) {
              var o = window.document,
                r = new (i())(s);
              (n = t),
                r.observe(o.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          };
        },
        function (e, t) {
          "use strict";
          function i() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ""
            );
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var s = (function () {
              function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                  var s = t[i];
                  (s.enumerable = s.enumerable || !1),
                    (s.configurable = !0),
                    "value" in s && (s.writable = !0),
                    Object.defineProperty(e, s.key, s);
                }
              }
              return function (t, i, s) {
                return i && e(t.prototype, i), s && e(t, s), t;
              };
            })(),
            n =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            o =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            r =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            a =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
              }
              return (
                s(e, [
                  {
                    key: "phone",
                    value: function () {
                      var e = i();
                      return !(!n.test(e) && !o.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "mobile",
                    value: function () {
                      var e = i();
                      return !(!r.test(e) && !a.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "tablet",
                    value: function () {
                      return this.mobile() && !this.phone();
                    },
                  },
                ]),
                e
              );
            })();
          t.default = new l();
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e, t) {
              var i = window.pageYOffset,
                s = window.innerHeight;
              e.forEach(function (e, n) {
                !(function (e, t, i) {
                  var s = e.node.getAttribute("data-aos-once");
                  t > e.position
                    ? e.node.classList.add("aos-animate")
                    : void 0 !== s &&
                      ("false" === s || (!i && "true" !== s)) &&
                      e.node.classList.remove("aos-animate");
                })(e, s + i, t);
              });
            });
        },
        function (e, t, i) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var s = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i(12));
          t.default = function (e, t) {
            return (
              e.forEach(function (e, i) {
                e.node.classList.add("aos-init"),
                  (e.position = (0, s.default)(e.node, t.offset));
              }),
              e
            );
          };
        },
        function (e, t, i) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var s = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(i(13));
          t.default = function (e, t) {
            var i = 0,
              n = 0,
              o = window.innerHeight,
              r = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)),
              r.anchor &&
                document.querySelectorAll(r.anchor) &&
                (e = document.querySelectorAll(r.anchor)[0]),
              (i = (0, s.default)(e).top),
              r.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                i += e.offsetHeight / 2;
                break;
              case "bottom-bottom":
                i += e.offsetHeight;
                break;
              case "top-center":
                i += o / 2;
                break;
              case "bottom-center":
                i += o / 2 + e.offsetHeight;
                break;
              case "center-center":
                i += o / 2 + e.offsetHeight / 2;
                break;
              case "top-top":
                i += o;
                break;
              case "bottom-top":
                i += e.offsetHeight + o;
                break;
              case "center-top":
                i += e.offsetHeight / 2 + o;
            }
            return r.anchorPlacement || r.offset || isNaN(t) || (n = t), i + n;
          };
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
              for (
                var t = 0, i = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: i, left: t };
            });
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            });
        },
      ]);
    },
    function (e, t, i) {
      var s;
      (s = function () {
        return (function (e) {
          var t = {};
          function i(s) {
            if (t[s]) return t[s].exports;
            var n = (t[s] = { exports: {}, id: s, loaded: !1 });
            return (
              e[s].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports
            );
          }
          return (i.m = e), (i.c = t), (i.p = ""), i(0);
        })([
          function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = (function () {
                function e(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(e, s.key, s);
                  }
                }
                return function (t, i, s) {
                  return i && e(t.prototype, i), s && e(t, s), t;
                };
              })(),
              n = i(1),
              o = i(3),
              r = (function () {
                function e(t, i) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    n.initializer.load(this, i, t),
                    this.begin();
                }
                return (
                  s(e, [
                    {
                      key: "toggle",
                      value: function () {
                        this.pause.status ? this.start() : this.stop();
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.typingComplete ||
                          this.pause.status ||
                          (this.toggleBlinking(!0),
                          (this.pause.status = !0),
                          this.options.onStop(this.arrayPos, this));
                      },
                    },
                    {
                      key: "start",
                      value: function () {
                        this.typingComplete ||
                          (this.pause.status &&
                            ((this.pause.status = !1),
                            this.pause.typewrite
                              ? this.typewrite(
                                  this.pause.curString,
                                  this.pause.curStrPos
                                )
                              : this.backspace(
                                  this.pause.curString,
                                  this.pause.curStrPos
                                ),
                            this.options.onStart(this.arrayPos, this)));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.reset(!1), this.options.onDestroy(this);
                      },
                    },
                    {
                      key: "reset",
                      value: function () {
                        var e =
                          arguments.length <= 0 ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        clearInterval(this.timeout),
                          this.replaceText(""),
                          this.cursor &&
                            this.cursor.parentNode &&
                            (this.cursor.parentNode.removeChild(this.cursor),
                            (this.cursor = null)),
                          (this.strPos = 0),
                          (this.arrayPos = 0),
                          (this.curLoop = 0),
                          e &&
                            (this.insertCursor(),
                            this.options.onReset(this),
                            this.begin());
                      },
                    },
                    {
                      key: "begin",
                      value: function () {
                        var e = this;
                        this.options.onBegin(this),
                          (this.typingComplete = !1),
                          this.shuffleStringsIfNeeded(this),
                          this.insertCursor(),
                          this.bindInputFocusEvents && this.bindFocusEvents(),
                          (this.timeout = setTimeout(function () {
                            e.currentElContent &&
                            0 !== e.currentElContent.length
                              ? e.backspace(
                                  e.currentElContent,
                                  e.currentElContent.length
                                )
                              : e.typewrite(
                                  e.strings[e.sequence[e.arrayPos]],
                                  e.strPos
                                );
                          }, this.startDelay));
                      },
                    },
                    {
                      key: "typewrite",
                      value: function (e, t) {
                        var i = this;
                        this.fadeOut &&
                          this.el.classList.contains(this.fadeOutClass) &&
                          (this.el.classList.remove(this.fadeOutClass),
                          this.cursor &&
                            this.cursor.classList.remove(this.fadeOutClass));
                        var s = this.humanizer(this.typeSpeed),
                          n = 1;
                        !0 !== this.pause.status
                          ? (this.timeout = setTimeout(function () {
                              t = o.htmlParser.typeHtmlChars(e, t, i);
                              var s = 0,
                                r = e.substr(t);
                              if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                                var a = 1;
                                (a += (r = /\d+/.exec(r)[0]).length),
                                  (s = parseInt(r)),
                                  (i.temporaryPause = !0),
                                  i.options.onTypingPaused(i.arrayPos, i),
                                  (e = e.substring(0, t) + e.substring(t + a)),
                                  i.toggleBlinking(!0);
                              }
                              if ("`" === r.charAt(0)) {
                                for (
                                  ;
                                  "`" !== e.substr(t + n).charAt(0) &&
                                  (n++, !(t + n > e.length));

                                );
                                var l = e.substring(0, t),
                                  c = e.substring(l.length + 1, t + n),
                                  u = e.substring(t + n + 1);
                                (e = l + c + u), n--;
                              }
                              i.timeout = setTimeout(function () {
                                i.toggleBlinking(!1),
                                  t >= e.length
                                    ? i.doneTyping(e, t)
                                    : i.keepTyping(e, t, n),
                                  i.temporaryPause &&
                                    ((i.temporaryPause = !1),
                                    i.options.onTypingResumed(i.arrayPos, i));
                              }, s);
                            }, s))
                          : this.setPauseStatus(e, t, !0);
                      },
                    },
                    {
                      key: "keepTyping",
                      value: function (e, t, i) {
                        0 === t &&
                          (this.toggleBlinking(!1),
                          this.options.preStringTyped(this.arrayPos, this)),
                          (t += i);
                        var s = e.substr(0, t);
                        this.replaceText(s), this.typewrite(e, t);
                      },
                    },
                    {
                      key: "doneTyping",
                      value: function (e, t) {
                        var i = this;
                        this.options.onStringTyped(this.arrayPos, this),
                          this.toggleBlinking(!0),
                          (this.arrayPos === this.strings.length - 1 &&
                            (this.complete(),
                            !1 === this.loop ||
                              this.curLoop === this.loopCount)) ||
                            (this.timeout = setTimeout(function () {
                              i.backspace(e, t);
                            }, this.backDelay));
                      },
                    },
                    {
                      key: "backspace",
                      value: function (e, t) {
                        var i = this;
                        if (!0 !== this.pause.status) {
                          if (this.fadeOut) return this.initFadeOut();
                          this.toggleBlinking(!1);
                          var s = this.humanizer(this.backSpeed);
                          this.timeout = setTimeout(function () {
                            t = o.htmlParser.backSpaceHtmlChars(e, t, i);
                            var s = e.substr(0, t);
                            if ((i.replaceText(s), i.smartBackspace)) {
                              var n = i.strings[i.arrayPos + 1];
                              n && s === n.substr(0, t)
                                ? (i.stopNum = t)
                                : (i.stopNum = 0);
                            }
                            t > i.stopNum
                              ? (t--, i.backspace(e, t))
                              : t <= i.stopNum &&
                                (i.arrayPos++,
                                i.arrayPos === i.strings.length
                                  ? ((i.arrayPos = 0),
                                    i.options.onLastStringBackspaced(),
                                    i.shuffleStringsIfNeeded(),
                                    i.begin())
                                  : i.typewrite(
                                      i.strings[i.sequence[i.arrayPos]],
                                      t
                                    ));
                          }, s);
                        } else this.setPauseStatus(e, t, !0);
                      },
                    },
                    {
                      key: "complete",
                      value: function () {
                        this.options.onComplete(this),
                          this.loop
                            ? this.curLoop++
                            : (this.typingComplete = !0);
                      },
                    },
                    {
                      key: "setPauseStatus",
                      value: function (e, t, i) {
                        (this.pause.typewrite = i),
                          (this.pause.curString = e),
                          (this.pause.curStrPos = t);
                      },
                    },
                    {
                      key: "toggleBlinking",
                      value: function (e) {
                        this.cursor &&
                          (this.pause.status ||
                            (this.cursorBlinking !== e &&
                              ((this.cursorBlinking = e),
                              e
                                ? this.cursor.classList.add(
                                    "typed-cursor--blink"
                                  )
                                : this.cursor.classList.remove(
                                    "typed-cursor--blink"
                                  ))));
                      },
                    },
                    {
                      key: "humanizer",
                      value: function (e) {
                        return Math.round((Math.random() * e) / 2) + e;
                      },
                    },
                    {
                      key: "shuffleStringsIfNeeded",
                      value: function () {
                        this.shuffle &&
                          (this.sequence = this.sequence.sort(function () {
                            return Math.random() - 0.5;
                          }));
                      },
                    },
                    {
                      key: "initFadeOut",
                      value: function () {
                        var e = this;
                        return (
                          (this.el.className += " " + this.fadeOutClass),
                          this.cursor &&
                            (this.cursor.className += " " + this.fadeOutClass),
                          setTimeout(function () {
                            e.arrayPos++,
                              e.replaceText(""),
                              e.strings.length > e.arrayPos
                                ? e.typewrite(
                                    e.strings[e.sequence[e.arrayPos]],
                                    0
                                  )
                                : (e.typewrite(e.strings[0], 0),
                                  (e.arrayPos = 0));
                          }, this.fadeOutDelay)
                        );
                      },
                    },
                    {
                      key: "replaceText",
                      value: function (e) {
                        this.attr
                          ? this.el.setAttribute(this.attr, e)
                          : this.isInput
                          ? (this.el.value = e)
                          : "html" === this.contentType
                          ? (this.el.innerHTML = e)
                          : (this.el.textContent = e);
                      },
                    },
                    {
                      key: "bindFocusEvents",
                      value: function () {
                        var e = this;
                        this.isInput &&
                          (this.el.addEventListener("focus", function (t) {
                            e.stop();
                          }),
                          this.el.addEventListener("blur", function (t) {
                            (e.el.value && 0 !== e.el.value.length) ||
                              e.start();
                          }));
                      },
                    },
                    {
                      key: "insertCursor",
                      value: function () {
                        this.showCursor &&
                          (this.cursor ||
                            ((this.cursor = document.createElement("span")),
                            (this.cursor.className = "typed-cursor"),
                            (this.cursor.innerHTML = this.cursorChar),
                            this.el.parentNode &&
                              this.el.parentNode.insertBefore(
                                this.cursor,
                                this.el.nextSibling
                              )));
                      },
                    },
                  ]),
                  e
                );
              })();
            (t.default = r), (e.exports = t.default);
          },
          function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s,
              n =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                },
              o = (function () {
                function e(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(e, s.key, s);
                  }
                }
                return function (t, i, s) {
                  return i && e(t.prototype, i), s && e(t, s), t;
                };
              })(),
              r = i(2),
              a = (s = r) && s.__esModule ? s : { default: s },
              l = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  o(e, [
                    {
                      key: "load",
                      value: function (e, t, i) {
                        if (
                          ((e.el =
                            "string" == typeof i
                              ? document.querySelector(i)
                              : i),
                          (e.options = n({}, a.default, t)),
                          (e.isInput = "input" === e.el.tagName.toLowerCase()),
                          (e.attr = e.options.attr),
                          (e.bindInputFocusEvents =
                            e.options.bindInputFocusEvents),
                          (e.showCursor = !e.isInput && e.options.showCursor),
                          (e.cursorChar = e.options.cursorChar),
                          (e.cursorBlinking = !0),
                          (e.elContent = e.attr
                            ? e.el.getAttribute(e.attr)
                            : e.el.textContent),
                          (e.contentType = e.options.contentType),
                          (e.typeSpeed = e.options.typeSpeed),
                          (e.startDelay = e.options.startDelay),
                          (e.backSpeed = e.options.backSpeed),
                          (e.smartBackspace = e.options.smartBackspace),
                          (e.backDelay = e.options.backDelay),
                          (e.fadeOut = e.options.fadeOut),
                          (e.fadeOutClass = e.options.fadeOutClass),
                          (e.fadeOutDelay = e.options.fadeOutDelay),
                          (e.isPaused = !1),
                          (e.strings = e.options.strings.map(function (e) {
                            return e.trim();
                          })),
                          "string" == typeof e.options.stringsElement
                            ? (e.stringsElement = document.querySelector(
                                e.options.stringsElement
                              ))
                            : (e.stringsElement = e.options.stringsElement),
                          e.stringsElement)
                        ) {
                          (e.strings = []),
                            (e.stringsElement.style.display = "none");
                          var s = Array.prototype.slice.apply(
                              e.stringsElement.children
                            ),
                            o = s.length;
                          if (o)
                            for (var r = 0; r < o; r += 1) {
                              var l = s[r];
                              e.strings.push(l.innerHTML.trim());
                            }
                        }
                        for (var r in ((e.strPos = 0),
                        (e.arrayPos = 0),
                        (e.stopNum = 0),
                        (e.loop = e.options.loop),
                        (e.loopCount = e.options.loopCount),
                        (e.curLoop = 0),
                        (e.shuffle = e.options.shuffle),
                        (e.sequence = []),
                        (e.pause = {
                          status: !1,
                          typewrite: !0,
                          curString: "",
                          curStrPos: 0,
                        }),
                        (e.typingComplete = !1),
                        e.strings))
                          e.sequence[r] = r;
                        (e.currentElContent = this.getCurrentElContent(e)),
                          (e.autoInsertCss = e.options.autoInsertCss),
                          this.appendAnimationCss(e);
                      },
                    },
                    {
                      key: "getCurrentElContent",
                      value: function (e) {
                        return e.attr
                          ? e.el.getAttribute(e.attr)
                          : e.isInput
                          ? e.el.value
                          : "html" === e.contentType
                          ? e.el.innerHTML
                          : e.el.textContent;
                      },
                    },
                    {
                      key: "appendAnimationCss",
                      value: function (e) {
                        if (
                          e.autoInsertCss &&
                          (e.showCursor || e.fadeOut) &&
                          !document.querySelector("[data-typed-js-css]")
                        ) {
                          var t = document.createElement("style");
                          (t.type = "text/css"),
                            t.setAttribute("data-typed-js-css", !0);
                          var i = "";
                          e.showCursor &&
                            (i +=
                              "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                            e.fadeOut &&
                              (i +=
                                "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                            0 !== t.length &&
                              ((t.innerHTML = i), document.body.appendChild(t));
                        }
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = l;
            var c = new l();
            t.initializer = c;
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = {
              strings: [
                "These are the default values...",
                "You know what you should do?",
                "Use your own!",
                "Have a great day!",
              ],
              stringsElement: null,
              typeSpeed: 0,
              startDelay: 0,
              backSpeed: 0,
              smartBackspace: !0,
              shuffle: !1,
              backDelay: 700,
              fadeOut: !1,
              fadeOutClass: "typed-fade-out",
              fadeOutDelay: 500,
              loop: !1,
              loopCount: 1 / 0,
              showCursor: !0,
              cursorChar: "|",
              autoInsertCss: !0,
              attr: null,
              bindInputFocusEvents: !1,
              contentType: "html",
              onBegin: function (e) {},
              onComplete: function (e) {},
              preStringTyped: function (e, t) {},
              onStringTyped: function (e, t) {},
              onLastStringBackspaced: function (e) {},
              onTypingPaused: function (e, t) {},
              onTypingResumed: function (e, t) {},
              onReset: function (e) {},
              onStop: function (e, t) {},
              onStart: function (e, t) {},
              onDestroy: function (e) {},
            };
            (t.default = i), (e.exports = t.default);
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                function e(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(e, s.key, s);
                  }
                }
                return function (t, i, s) {
                  return i && e(t.prototype, i), s && e(t, s), t;
                };
              })(),
              s = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  i(e, [
                    {
                      key: "typeHtmlChars",
                      value: function (e, t, i) {
                        if ("html" !== i.contentType) return t;
                        var s = e.substr(t).charAt(0);
                        if ("<" === s || "&" === s) {
                          var n = "";
                          for (
                            n = "<" === s ? ">" : ";";
                            e.substr(t + 1).charAt(0) !== n &&
                            !(1 + ++t > e.length);

                          );
                          t++;
                        }
                        return t;
                      },
                    },
                    {
                      key: "backSpaceHtmlChars",
                      value: function (e, t, i) {
                        if ("html" !== i.contentType) return t;
                        var s = e.substr(t).charAt(0);
                        if (">" === s || ";" === s) {
                          var n = "";
                          for (
                            n = ">" === s ? "<" : "&";
                            e.substr(t - 1).charAt(0) !== n && !(--t < 0);

                          );
                          t--;
                        }
                        return t;
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = s;
            var n = new s();
            t.htmlParser = n;
          },
        ]);
      }),
        (e.exports = s());
    },
    ,
    ,
    ,
    function (e, t) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (i = window);
      }
      e.exports = i;
    },
  ],
]);
