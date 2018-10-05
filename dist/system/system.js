module.exports = (function(t) {
  var e = {}
  function n(i) {
    if (e[i]) return e[i].exports
    var r = (e[i] = { i: i, l: !1, exports: {} })
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 })
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && "object" == typeof t && t && t.__esModule) return t
      var i = Object.create(null)
      if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var r in t)
          n.d(
            i,
            r,
            function(e) {
              return t[e]
            }.bind(null, r)
          )
      return i
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, "a", e), e
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = "/"),
    n((n.s = 0))
  )
})({
  "/WLx": function(t, e) {},
  "/kPn": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "Button",
        status: "prototype",
        release: "1.0.0",
        props: {
          type: {
            type: String,
            default: "button",
            validator: function(t) {
              return t.match(/(button|a)/)
            },
          },
          size: {
            type: String,
            default: "medium",
            validator: function(t) {
              return t.match(/(small|medium|large)/)
            },
          },
          href: { type: String, default: null },
          submit: {
            type: String,
            default: null,
            validator: function(t) {
              return t.match(/(null|submit)/)
            },
          },
          state: {
            type: String,
            default: null,
            validator: function(t) {
              return t.match(/(hover|active|focus)/)
            },
          },
          variation: {
            type: String,
            default: null,
            validator: function(t) {
              return t.match(/(primary|secondary)/)
            },
          },
        },
      },
      r = (n("qJZK"), n("KHd+")),
      a = n("tcIX"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement
          return (t._self._c || e)(
            t.type,
            {
              tag: "component",
              class: ["button", t.size, t.state, t.variation],
              attrs: { href: t.href, type: t.submit },
            },
            [t._t("default")],
            2
          )
        },
        [],
        !1,
        null,
        "42150969",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "Button.vue"), (e.default = s.exports)
  },
  "/thn": function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.9 150.5c9 9 14.1 21.2 14.1 33.9v143.1c0 12.7-5.1 24.9-14.1 33.9L361.5 497.9c-9 9-21.2 14.1-33.9 14.1H184.5c-12.7 0-24.9-5.1-33.9-14.1L14.1 361.5c-9-9-14.1-21.2-14.1-33.9V184.5c0-12.7 5.1-24.9 14.1-33.9L150.5 14.1c9-9 21.2-14.1 33.9-14.1h143.1c12.7 0 24.9 5.1 33.9 14.1l136.5 136.4zM377.6 338c4.7-4.7 4.7-12.3 0-17l-65-65 65.1-65.1c4.7-4.7 4.7-12.3 0-17L338 134.4c-4.7-4.7-12.3-4.7-17 0l-65 65-65.1-65.1c-4.7-4.7-12.3-4.7-17 0L134.4 174c-4.7 4.7-4.7 12.3 0 17l65.1 65.1-65.1 65.1c-4.7 4.7-4.7 12.3 0 17l39.6 39.6c4.7 4.7 12.3 4.7 17 0l65.1-65.1 65.1 65.1c4.7 4.7 12.3 4.7 17 0l39.4-39.8z"/></svg>'
  },
  0: function(t, e, n) {
    t.exports = n("5m5j")
  },
  "0K1V": function(t, e, n) {
    "use strict"
    var i = n("VOwi")
    n.n(i).a
  },
  "0P7v": function(t, e, n) {},
  "0xPx": function(t, e, n) {},
  "1phr": function(t, e) {},
  "1ulK": function(t, e, n) {
    "use strict"
    var i = n("0P7v")
    n.n(i).a
  },
  "2dwG": function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>'
  },
  "4K1/": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "NotFound",
        metaInfo: { title: "Page Not Found | Vue Design System", htmlAttrs: { lang: "en" } },
        props: { type: { type: String, default: "div" } },
      },
      r = (n("IU6l"), n("KHd+")),
      a = n("gkHm"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", staticClass: "not-found" },
            [
              n("NavBar", {
                attrs: {
                  active: "NotFound",
                  navItems: [
                    { name: "Template", component: "Index", href: "/#/" },
                    { name: "Documentation", href: "http://localhost:6060/" },
                  ],
                },
              }),
              t._v(" "),
              n(
                "Wrapper",
                [
                  n("Heading", [t._v("404 Error")]),
                  t._v(" "),
                  n("Paragraph", [
                    t._v(
                      "Couldn’t find a component that would match the URL you entered. Double check configuration in router/index.js."
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        [],
        !1,
        null,
        "2e18b29a",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "NotFound.vue"), (e.default = s.exports)
  },
  "5Pm7": function(t, e, n) {},
  "5m5j": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = []
    ;[n("Xl01"), n("JtIp"), n("c1KM")].forEach(function(t) {
      t.keys().forEach(function(e) {
        return i.push(t(e).default)
      })
    })
    var r = {
      install: function(t) {
        i.forEach(function(e) {
          return t.component(e.name, e)
        })
      },
    }
    "undefined" != typeof window && window.Vue && window.Vue.use(r), (e.default = r)
  },
  "68yd": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = n("bzL3"),
      r = {
        name: "Icon",
        status: "review",
        release: "1.0.0",
        props: {
          name: { required: !0, default: "settings" },
          fill: { type: String, default: "currentColor" },
          ariaLabel: { type: String, default: "icon" },
          type: { type: String, default: "span" },
          size: {
            type: String,
            default: "medium",
            validator: function(t) {
              return t.match(/(small|medium|large)/)
            },
          },
        },
        data: function() {
          return { svg: i("./" + this.name + ".svg").replace(/^<svg /, '<svg style="fill: '.concat(this.fill, '" ')) }
        },
      },
      a = (n("c5QI"), n("KHd+")),
      o = n("1phr"),
      s = n.n(o),
      u = Object(a.a)(
        r,
        function() {
          var t = this,
            e = t.$createElement
          return (t._self._c || e)(t.type, {
            tag: "component",
            class: ["icon", t.size],
            attrs: { "aria-label": t.ariaLabel },
            domProps: { innerHTML: t._s(t.svg) },
          })
        },
        [],
        !1,
        null,
        null,
        null
      )
    "function" == typeof s.a && s()(u), (u.options.__file = "Icon.vue"), (e.default = u.exports)
  },
  "7DUr": function(t, e) {},
  "7dOS": function(t, e) {},
  "7kMZ": function(t, e) {},
  "9I8L": function(t, e) {},
  "9t9y": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = { name: "Wrapper", status: "review", release: "1.0.0", props: { type: { type: String, default: "div" } } },
      r = (n("frqv"), n("KHd+")),
      a = n("HpXA"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this.$createElement
          return (this._self._c || t)(this.type, { tag: "component", staticClass: "wrapper" }, [this._t("default")], 2)
        },
        [],
        !1,
        null,
        "4b05eca0",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "Wrapper.vue"), (e.default = s.exports)
  },
  AAsE: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" class="st1"/></svg>'
  },
  ECTP: function(t, e) {},
  FeAk: function(t, e, n) {},
  FmFd: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "Paragraph",
        status: "prototype",
        release: "1.0.0",
        props: {
          type: {
            type: String,
            default: "p",
            validator: function(t) {
              return t.match(/(p|span)/)
            },
          },
          variation: {
            type: String,
            default: "medium",
            validator: function(t) {
              return t.match(/(medium|intro|large|small)/)
            },
          },
        },
      },
      r = (n("jstG"), n("KHd+")),
      a = n("ECTP"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement
          return (t._self._c || e)(
            t.type,
            { tag: "component", class: ["paragraph", t.variation] },
            [t._t("default")],
            2
          )
        },
        [],
        !1,
        null,
        "5ff2a673",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "Paragraph.vue"), (e.default = s.exports)
  },
  HpXA: function(t, e) {},
  IU6l: function(t, e, n) {
    "use strict"
    var i = n("FeAk")
    n.n(i).a
  },
  JtIp: function(t, e, n) {
    var i = {
      "./NavBar.vue": "nrZS",
      "./NewsSlider.vue": "mXHK",
      "./ProjectCard.vue": "ua5Q",
      "./SwipeSlider.vue": "XPp5",
    }
    function r(t) {
      var e = a(t)
      return n(e)
    }
    function a(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(r.keys = function() {
      return Object.keys(i)
    }),
      (r.resolve = a),
      ((t.exports = r).id = "JtIp")
  },
  "KHd+": function(t, e, n) {
    "use strict"
    function i(t, e, n, i, r, a, o, s) {
      var u,
        c = "function" == typeof t ? t.options : t
      if (
        (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
        i && (c.functional = !0),
        a && (c._scopeId = "data-v-" + a),
        o
          ? ((u = function(t) {
              ;(t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                r && r.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(o)
            }),
            (c._ssrRegister = u))
          : r &&
            (u = s
              ? function() {
                  r.call(this, this.$root.$options.shadowRoot)
                }
              : r),
        u)
      )
        if (c.functional) {
          c._injectStyles = u
          var l = c.render
          c.render = function(t, e) {
            return u.call(e), l(t, e)
          }
        } else {
          var f = c.beforeCreate
          c.beforeCreate = f ? [].concat(f, u) : [u]
        }
      return { exports: t, options: c }
    }
    n.d(e, "a", function() {
      return i
    })
  },
  KzwA: function(t, e, n) {},
  LAKi: function(t, e, n) {
    "use strict"
    var i = n("a2EW")
    n.n(i).a
  },
  MzIM: function(t, e, n) {},
  Nqnq: function(t, e, n) {},
  Ohei: function(t, e, n) {
    "use strict"
    var i = n("kLRc")
    n.n(i).a
  },
  P91N: function(t, e, n) {},
  QOEz: function(t, e, n) {
    "use strict"
    var i = n("Nqnq")
    n.n(i).a
  },
  Tof5: function(t, e) {},
  UklV: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "Input",
        status: "ready",
        release: "1.0.0",
        props: {
          type: {
            type: String,
            default: "text",
            validator: function(t) {
              return t.match(/(text|number|email)/)
            },
          },
          value: { type: String, default: null },
          placeholder: { type: String, default: null },
          label: { type: String, default: null },
          wrapper: {
            type: String,
            default: "div",
            validator: function(t) {
              return t.match(/(div|section)/)
            },
          },
          id: { type: String, default: null },
          width: {
            type: String,
            default: "expand",
            validator: function(t) {
              return t.match(/(auto|expand)/)
            },
          },
          disabled: { type: Boolean, default: !1 },
          state: {
            type: String,
            default: null,
            validator: function(t) {
              return t.match(/(hover|active|focus)/)
            },
          },
        },
        methods: {
          onInput: function(t) {
            this.$emit("change", t)
          },
          onFocus: function(t) {
            this.$emit("focus", t)
          },
        },
      },
      r = (n("QOEz"), n("KHd+")),
      a = n("7dOS"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.wrapper, { tag: "component", class: ["input", { "input-expand": "expand" === t.width }] }, [
            t.label ? n("label", { attrs: { for: t.id } }, [t._v(t._s(t.label))]) : t._e(),
            t._v(" "),
            n("input", {
              class: t.state,
              attrs: { id: t.id, disabled: t.disabled, type: t.type, placeholder: t.placeholder },
              domProps: { value: t.value },
              on: {
                input: function(e) {
                  t.onInput(e.target.value)
                },
                focus: function(e) {
                  t.onFocus(e.target.value)
                },
              },
            }),
          ])
        },
        [],
        !1,
        null,
        "daa6d482",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "Input.vue"), (e.default = s.exports)
  },
  UvfI: function(t, e, n) {},
  VOwi: function(t, e, n) {},
  XPp5: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = n("lSNA"),
      r = n.n(i),
      a = {
        name: "SwipeSlider",
        props: {
          autoplay: Number,
          vertical: Boolean,
          width: { type: Number, default: 0 },
          height: { type: Number, default: 0 },
          loop: { type: Boolean, default: !0 },
          touchable: { type: Boolean, default: !0 },
          initialSwipe: { type: Number, default: 0 },
          showIndicators: { type: Boolean, default: !0 },
          duration: { type: Number, default: 500 },
        },
        data: function() {
          return {
            computedWidth: 0,
            computedHeight: 0,
            offset: 0,
            active: 0,
            deltaX: 0,
            deltaY: 0,
            swipes: [],
            swiping: !1,
          }
        },
        mounted: function() {
          this.initialize(), this.$isServer || on(window, "resize", this.onResize, !0)
        },
        destroyed: function() {
          this.clear(), this.$isServer || off(window, "resize", this.onResize, !0)
        },
        watch: {
          swipes: function() {
            this.initialize()
          },
          initialSwipe: function() {
            this.initialize()
          },
          autoplay: function(t) {
            t ? this.autoPlay() : this.clear()
          },
        },
        computed: {
          count: function() {
            return this.swipes.length
          },
          delta: function() {
            return this.vertical ? this.deltaY : this.deltaX
          },
          size: function() {
            return this[this.vertical ? "computedHeight" : "computedWidth"]
          },
          trackSize: function() {
            return this.count * this.size
          },
          activeIndicator: function() {
            return (this.active + this.count) % this.count
          },
          trackStyle: function() {
            var t
            return (
              (t = {}),
              r()(t, this.vertical ? "height" : "width", "".concat(this.trackSize, "px")),
              r()(t, "transitionDuration", "".concat(this.swiping ? 0 : this.duration, "ms")),
              r()(t, "transform", "translate".concat(this.vertical ? "Y" : "X", "(").concat(this.offset, "px)")),
              t
            )
          },
        },
        methods: {
          initialize: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.initialSwipe
            if ((clearTimeout(this.timer), this.$el)) {
              var e = this.$el.getBoundingClientRect()
              ;(this.computedWidth = this.width || e.width), (this.computedHeight = this.height || e.height)
            }
            ;(this.swiping = !0),
              (this.active = t),
              (this.offset = 1 < this.count ? -this.size * this.active : 0),
              this.swipes.forEach(function(t) {
                t.offset = 0
              }),
              this.autoPlay()
          },
          onResize: function() {
            this.initialize(this.activeIndicator)
          },
          onTouchStart: function(t) {
            this.touchable && (this.clear(), (this.swiping = !0), this.touchStart(t), this.correctPosition())
          },
          onTouchMove: function(t) {
            this.touchable &&
              this.swiping &&
              (this.touchMove(t),
              ((this.vertical && "vertical" === this.direction) || "horizontal" === this.direction) &&
                (t.preventDefault(),
                t.stopPropagation(),
                this.move(0, Math.min(Math.max(this.delta, -this.size), this.size))))
          },
          onTouchEnd: function() {
            if (this.touchable && this.swiping) {
              if (this.delta) {
                var t = this.vertical ? this.offsetY : this.offsetX
                this.move(50 < t ? (0 < this.delta ? -1 : 1) : 0)
              }
              ;(this.swiping = !1), this.autoPlay()
            }
          },
          move: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
              e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
              n = this.delta,
              i = this.active,
              r = this.count,
              a = this.swipes,
              o = this.trackSize,
              s = 0 === i,
              u = i === r - 1
            ;(!this.loop && ((s && (0 < e || t < 0)) || (u && (e < 0 || 0 < t)))) ||
              r <= 1 ||
              ((a[0].offset = u && (n < 0 || 0 < t) ? o : 0),
              (a[r - 1].offset = s && (0 < n || t < 0) ? -o : 0),
              t && -1 <= i + t && i + t <= r && (this.active += t),
              (this.offset = e - this.active * this.size))
          },
          swipeTo: function(t) {
            var e = this
            ;(this.swiping = !0),
              this.correctPosition(),
              setTimeout(function() {
                ;(e.swiping = !1), e.move((t % e.count) - e.active)
              }, 30)
          },
          correctPosition: function() {
            this.active <= -1 && this.move(this.count), this.active >= this.count && this.move(-this.count)
          },
          clear: function() {
            clearTimeout(this.timer)
          },
          autoPlay: function() {
            var t = this,
              e = this.autoplay
            e &&
              1 < this.count &&
              (this.clear(),
              (this.timer = setTimeout(function() {
                ;(t.swiping = !0),
                  t.resetTouchStatus(),
                  t.correctPosition(),
                  setTimeout(function() {
                    ;(t.swiping = !1), t.move(1), t.autoPlay()
                  }, 30)
              }, e)))
          },
        },
      },
      o = n("KHd+"),
      s = n("ZVyw"),
      u = n.n(s),
      c = Object(o.a)(
        a,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n("div", { class: t.b() }, [
            n(
              "div",
              {
                class: t.b("track"),
                style: t.trackStyle,
                on: {
                  touchstart: t.onTouchStart,
                  touchmove: t.onTouchMove,
                  touchend: t.onTouchEnd,
                  touchcancel: t.onTouchEnd,
                  transitionend: function(e) {
                    t.$emit("change", t.activeIndicator)
                  },
                },
              },
              [t._t("default")],
              2
            ),
            t._v(" "),
            t.showIndicators && 1 < t.count
              ? n(
                  "div",
                  { class: t.b("indicators", { vertical: t.vertical }) },
                  t._l(t.count, function(e) {
                    return n("i", { key: e, class: t.b("indicator", { active: e - 1 === t.activeIndicator }) })
                  })
                )
              : t._e(),
          ])
        },
        [],
        !1,
        null,
        null,
        null
      )
    "function" == typeof u.a && u()(c), (c.options.__file = "SwipeSlider.vue"), (e.default = c.exports)
  },
  Xl01: function(t, e, n) {
    var i = {
      "./Button.vue": "/kPn",
      "./Heading.vue": "oIR/",
      "./Icon.vue": "68yd",
      "./Input.vue": "UklV",
      "./Paragraph.vue": "FmFd",
      "./TextStyle.vue": "r6ov",
      "./Textarea.vue": "lK0x",
      "./Wrapper.vue": "9t9y",
    }
    function r(t) {
      var e = a(t)
      return n(e)
    }
    function a(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(r.keys = function() {
      return Object.keys(i)
    }),
      (r.resolve = a),
      ((t.exports = r).id = "Xl01")
  },
  Z0DB: function(t, e, n) {
    "use strict"
    var i = n("eUC7")
    n.n(i).a
  },
  ZVyw: function(t, e) {},
  a2EW: function(t, e, n) {},
  bT9U: function(t, e, n) {},
  bzL3: function(t, e, n) {
    var i = {
      "./deprecated.svg": "/thn",
      "./heart.svg": "fRY4",
      "./prototype.svg": "2dwG",
      "./ready.svg": "AAsE",
      "./review.svg": "eAtJ",
      "./share.svg": "vVuZ",
    }
    function r(t) {
      var e = a(t)
      return n(e)
    }
    function a(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(r.keys = function() {
      return Object.keys(i)
    }),
      (r.resolve = a),
      ((t.exports = r).id = "bzL3")
  },
  c1KM: function(t, e, n) {
    var i = { "./Index.vue": "lF/O", "./NotFound.vue": "4K1/" }
    function r(t) {
      var e = a(t)
      return n(e)
    }
    function a(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(r.keys = function() {
      return Object.keys(i)
    }),
      (r.resolve = a),
      ((t.exports = r).id = "c1KM")
  },
  c5QI: function(t, e, n) {
    "use strict"
    var i = n("KzwA")
    n.n(i).a
  },
  dtxr: function(t, e) {},
  eAtJ: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>'
  },
  eUC7: function(t, e, n) {},
  fRY4: function(t, e) {
    t.exports =
      '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"/></svg>'
  },
  frqv: function(t, e, n) {
    "use strict"
    var i = n("UvfI")
    n.n(i).a
  },
  gkHm: function(t, e) {},
  hHbo: function(t, e, n) {
    "use strict"
    var i = n("5Pm7")
    n.n(i).a
  },
  jstG: function(t, e, n) {
    "use strict"
    var i = n("0xPx")
    n.n(i).a
  },
  kLRc: function(t, e, n) {},
  kWgB: function(t, e, n) {
    "use strict"
    var i = n("bT9U")
    n.n(i).a
  },
  "lF/O": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "Index",
        status: "deprecated",
        release: "1.0.0",
        metaInfo: { title: "Vue Design System", htmlAttrs: { lang: "en" } },
        props: { type: { type: String, default: "div" } },
      },
      r = (n("0K1V"), n("KHd+")),
      a = n("9I8L"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", staticClass: "index" },
            [
              n("NavBar", {
                attrs: {
                  active: "Index",
                  navItems: [
                    { name: "Template", component: "Index", href: "/#/" },
                    { name: "Documentation", href: "http://localhost:6060/" },
                  ],
                },
              }),
              t._v(" "),
              n(
                "Wrapper",
                [
                  n("Heading", [t._v("Vue Design System")]),
                  t._v(" "),
                  n("Paragraph", [
                    n("a", { attrs: { href: "https://vueds.com" } }, [t._v("Vue Design System")]),
                    t._v(
                      " is an open-source tool for building design systems with Vue.js. It provides you and your team a set of organized tools, patterns & practices. It works as the foundation for your application development."
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        [],
        !1,
        null,
        "a45387f4",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "Index.vue"), (e.default = s.exports)
  },
  lK0x: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "Textarea",
        status: "ready",
        release: "1.0.0",
        props: {
          value: { type: String, default: null },
          placeholder: { type: String, default: null },
          label: { type: String, default: null },
          wrapper: {
            type: String,
            default: "div",
            validator: function(t) {
              return t.match(/(div|section)/)
            },
          },
          id: { type: String, default: null },
          width: {
            type: String,
            default: "expand",
            validator: function(t) {
              return t.match(/(auto|expand)/)
            },
          },
          disabled: { type: Boolean, default: !1 },
          state: {
            type: String,
            default: null,
            validator: function(t) {
              return t.match(/(hover|active|focus)/)
            },
          },
        },
        methods: {
          onInput: function(t) {
            this.$emit("change", t)
          },
          onFocus: function(t) {
            this.$emit("focus", t)
          },
        },
      },
      r = (n("qQO5"), n("KHd+")),
      a = n("7DUr"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.wrapper, { tag: "component", class: ["textarea", { "textarea-expand": "expand" === t.width }] }, [
            t.label ? n("label", { attrs: { for: t.id } }, [t._v(t._s(t.label))]) : t._e(),
            t._v(" "),
            n("textarea", {
              directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "value" }],
              class: t.state,
              attrs: { id: t.id, disabled: t.disabled, placeholder: t.placeholder },
              domProps: { value: t.value },
              on: {
                input: [
                  function(e) {
                    e.target.composing || (t.value = e.target.value)
                  },
                  function(e) {
                    t.onInput(e.target.value)
                  },
                ],
                focus: function(e) {
                  t.onFocus(e.target.value)
                },
              },
            }),
          ])
        },
        [],
        !1,
        null,
        "7c505112",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "Textarea.vue"), (e.default = s.exports)
  },
  lSNA: function(t, e) {
    t.exports = function(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      )
    }
  },
  mXHK: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "NewsSlider",
        status: "review",
        release: "1.0.0",
        props: {
          type: { type: String, default: "div" },
          id: { type: Number, required: !0 },
          route: { type: String, required: !0 },
          image: { type: String, required: !0 },
          title: { type: String, required: !0 },
          location: { type: String, required: !1, default: "" },
          category: { type: String, required: !0 },
          author: { type: String, required: !0 },
          description: { type: String, required: !0 },
          likes: { type: Number, required: !0 },
          shares: { type: Number, required: !0 },
        },
        computed: {
          shortDescription: function() {
            return 100 < this.description.length ? this.description.substring(0, 100) + "[...]" : this.description
          },
        },
      },
      r = (n("1ulK"), n("LAKi"), n("KHd+")),
      a = n("dtxr"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.type, { tag: "component", staticClass: "card", on: { mouseover: t.mouseOver } }, [
            n("div", { staticClass: "image", style: { "background-image": "url(" + t.image + ")" } }),
            t._v(" "),
            n("div", { staticClass: "card-wrapper" }, [
              n("div"),
              t._v(" "),
              n("div", { staticClass: "content" }, [
                n("div", { staticClass: "title" }, [t._v("\n          " + t._s(t.title) + "\n        ")]),
                t._v(" "),
                n("div", { staticClass: "description" }, [
                  t._v("\n          " + t._s(t.shortDescription) + "\n        "),
                ]),
                t._v(" "),
                n("div", {
                  staticStyle: {
                    position: "absolute",
                    width: "100%",
                    height: "60%",
                    background: "linear-gradient(rgba(255, 255, 255, 0), #000)",
                    bottom: "0",
                    "z-index": "1",
                    "border-bottom-left-radius": "10px",
                    "border-bottom-right-radius": "10px",
                  },
                }),
              ]),
            ]),
          ])
        },
        [],
        !1,
        null,
        "ec8582ba",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "NewsSlider.vue"), (e.default = s.exports)
  },
  nZfC: function(t, e, n) {
    "use strict"
    var i = n("oXgq")
    n.n(i).a
  },
  nrZS: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "NavBar",
        status: "ready",
        release: "1.0.0",
        model: { prop: "active" },
        props: {
          type: { type: String, default: "nav" },
          active: { required: !0, type: String },
          navItems: { required: !0, type: Array },
        },
        computed: {
          localActive: {
            get: function() {
              return this.active
            },
            set: function(t) {
              this.$emit("input", t)
            },
          },
        },
      },
      r = (n("kWgB"), n("KHd+")),
      a = n("Tof5"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", staticClass: "nav" },
            t._l(t.navItems, function(e, i) {
              return n("a", {
                key: i,
                class: { active: t.localActive === e.component },
                attrs: { href: e.href },
                domProps: { innerHTML: t._s(e.name) },
              })
            })
          )
        },
        [],
        !1,
        null,
        "9fc9606c",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "NavBar.vue"), (e.default = s.exports)
  },
  "oIR/": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "Heading",
        status: "prototype",
        release: "1.0.0",
        props: {
          level: {
            type: String,
            default: "h1",
            validator: function(t) {
              return t.match(/(h1|h2|h3|h4|h5|h6)/)
            },
          },
        },
      },
      r = (n("Z0DB"), n("KHd+")),
      a = n("woMB"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this.$createElement
          return (this._self._c || t)(this.level, { tag: "component", staticClass: "heading" }, [this._t("default")], 2)
        },
        [],
        !1,
        null,
        "614943df",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "Heading.vue"), (e.default = s.exports)
  },
  oXgq: function(t, e, n) {},
  qJZK: function(t, e, n) {
    "use strict"
    var i = n("MzIM")
    n.n(i).a
  },
  qQO5: function(t, e, n) {
    "use strict"
    var i = n("P91N")
    n.n(i).a
  },
  r6ov: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "TextStyle",
        status: "ready",
        release: "1.0.0",
        props: {
          type: {
            type: String,
            default: "span",
            validator: function(t) {
              return t.match(/(span|em|i|strong)/)
            },
          },
          variation: {
            type: String,
            default: "default",
            validator: function(t) {
              return t.match(/(default|disabled|strong|positive|negative)/)
            },
          },
        },
      },
      r = (n("nZfC"), n("KHd+")),
      a = n("7kMZ"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement
          return (t._self._c || e)(
            t.type,
            { tag: "component", class: ["text-style", t.variation] },
            [t._t("default")],
            2
          )
        },
        [],
        !1,
        null,
        "7610f142",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "TextStyle.vue"), (e.default = s.exports)
  },
  tcIX: function(t, e) {},
  ua5Q: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "ProjectCard",
        status: "review",
        release: "1.0.0",
        props: {
          type: { type: String, default: "div" },
          id: { type: Number, required: !0 },
          route: { type: String, required: !0 },
          image: { type: String, required: !0 },
          title: { type: String, required: !0 },
          location: { type: String, required: !1, default: "" },
          category: { type: String, required: !0 },
          author: { type: String, required: !0 },
          description: { type: String, required: !0 },
          likes: { type: Number, required: !0 },
          shares: { type: Number, required: !0 },
        },
        computed: {
          shortDescription: function() {
            return 250 < this.description.length ? this.description.substring(0, 250) + "[...]" : this.description
          },
        },
      },
      r = (n("hHbo"), n("Ohei"), n("KHd+")),
      a = n("/WLx"),
      o = n.n(a),
      s = Object(r.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.type, { tag: "component", staticClass: "card", on: { mouseover: t.mouseOver } }, [
            n(
              "div",
              { staticClass: "share" },
              [
                n("Icon", { attrs: { name: "share", size: "small", fill: "rgb(255,255,255)" } }),
                n("span", { staticClass: "no-of-shares" }, [t._v(t._s(t.shares))]),
              ],
              1
            ),
            t._v(" "),
            n(
              "div",
              { staticClass: "like" },
              [
                n("Icon", { attrs: { name: "heart", size: "small", fill: "rgb(255,255,255)" } }),
                n("span", { staticClass: "no-of-likes" }, [t._v(t._s(t.likes))]),
              ],
              1
            ),
            t._v(" "),
            n("div", { staticClass: "card-wrapper" }, [
              n("div", { staticClass: "image", style: { "background-image": "url(" + t.image + ")" } }, [
                n("div", { staticClass: "image-hover" }),
                t._v(" "),
                t.location
                  ? n("div", { staticClass: "location" }, [
                      n("i", { staticClass: "fas fa-map-marker-alt" }),
                      t._v(" " + t._s(t.location) + "\n          "),
                    ])
                  : t._e(),
              ]),
              t._v(" "),
              n("div", { staticClass: "content" }, [
                n("div", { staticClass: "title" }, [t._v("\n            " + t._s(t.title) + "\n          ")]),
                t._v(" "),
                n("div", { staticClass: "meta" }, [
                  n("i", { staticClass: "fas fa-film" }),
                  t._v(t._s(t.category) + "\n            "),
                ]),
                t._v(" "),
                n("div", { staticClass: "description" }, [
                  n("div", {
                    staticStyle: {
                      position: "absolute",
                      width: "100%",
                      height: "60%",
                      background: "linear-gradient(rgba(255, 255, 255, 0), #ffffff)",
                      bottom: "0",
                    },
                  }),
                  t._v("\n            " + t._s(t.shortDescription) + "\n          "),
                ]),
                t._v(" "),
                n("div", { staticClass: "extra" }, [n("div", { staticClass: "cetaceans" }, [n("AppAvatarList")], 1)]),
              ]),
            ]),
          ])
        },
        [],
        !1,
        null,
        "1953889e",
        null
      )
    "function" == typeof o.a && o()(s), (s.options.__file = "ProjectCard.vue"), (e.default = s.exports)
  },
  vVuZ: function(t, e) {
    t.exports =
      '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5 6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5 26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199 53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z"/></svg>'
  },
  woMB: function(t, e) {},
})
