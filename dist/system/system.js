module.exports = (function(t) {
  var e = {}
  function n(i) {
    if (e[i]) return e[i].exports
    var a = (e[i] = { i: i, l: !1, exports: {} })
    return t[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
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
        for (var a in t)
          n.d(
            i,
            a,
            function(e) {
              return t[e]
            }.bind(null, a)
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
  "+BkN": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "Avatar",
        status: "prototype",
        release: "1.0.0",
        props: {
          type: { type: String, default: "div" },
          image: { type: String, required: !1, default: "" },
          number: { type: Number, required: !1, default: null },
          icon: { type: Boolean, required: !1, default: !1 },
          size: { type: String, required: !1, default: "large" },
        },
        computed: {
          getSize: function() {
            return this.icon ? "is-icon" : "is-".concat(this.size)
          },
        },
      },
      a = (n("79uY"), n("KHd+")),
      r = n("VqCz"),
      s = n.n(r),
      o = Object(a.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            {
              tag: "component",
              staticClass: "avatar",
              class: t.getSize,
              style: { "background-image": "url(" + t.image + ")" },
            },
            [t.number ? n("span", [t._v("\n  +" + t._s(t.number) + "\n  ")]) : t._e()]
          )
        },
        [],
        !1,
        null,
        "68012fca",
        null
      )
    "function" == typeof s.a && s()(o), (o.options.__file = "Avatar.vue"), (e.default = o.exports)
  },
  "+UXe": function(t, e, n) {},
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
      a = (n("qJZK"), n("KHd+")),
      r = n("tcIX"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "Button.vue"), (e.default = o.exports)
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
  "0xPx": function(t, e, n) {},
  "0za5": function(t, e, n) {
    "use strict"
    var i = n("3Cin")
    n.n(i).a
  },
  "1phr": function(t, e) {},
  "2dwG": function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>'
  },
  "3Cin": function(t, e, n) {},
  "4K1/": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "NotFound",
        metaInfo: { title: "Page Not Found | Vue Design System", htmlAttrs: { lang: "en" } },
        props: { type: { type: String, default: "div" } },
      },
      a = (n("IU6l"), n("KHd+")),
      r = n("gkHm"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "NotFound.vue"), (e.default = o.exports)
  },
  "5m5j": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = []
    ;[n("Xl01"), n("JtIp"), n("c1KM")].forEach(function(t) {
      t.keys().forEach(function(e) {
        return i.push(t(e).default)
      })
    })
    var a = {
      install: function(t) {
        i.forEach(function(e) {
          return t.component(e.name, e)
        })
      },
    }
    "undefined" != typeof window && window.Vue && window.Vue.use(a), (e.default = a)
  },
  "68yd": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = n("bzL3"),
      a = {
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
      r = (n("c5QI"), n("KHd+")),
      s = n("1phr"),
      o = n.n(s),
      u = Object(r.a)(
        a,
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
    "function" == typeof o.a && o()(u), (u.options.__file = "Icon.vue"), (e.default = u.exports)
  },
  "79uY": function(t, e, n) {
    "use strict"
    var i = n("NlGY")
    n.n(i).a
  },
  "7DUr": function(t, e) {},
  "7dOS": function(t, e) {},
  "7dR3": function(t, e) {},
  "7kMZ": function(t, e) {},
  "9I8L": function(t, e) {},
  "9t9y": function(t, e, n) {
    "use strict"
    n.r(e)
    var i = { name: "Wrapper", status: "review", release: "1.0.0", props: { type: { type: String, default: "div" } } },
      a = (n("frqv"), n("KHd+")),
      r = n("HpXA"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "Wrapper.vue"), (e.default = o.exports)
  },
  AAsE: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" class="st1"/></svg>'
  },
  BazK: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = {
        name: "AvatarList",
        status: "prototype",
        release: "1.0.0",
        props: {
          type: { type: String, default: "div" },
          images: { type: Array, required: !0, default: null },
          number: { type: Number, required: !1, default: "" },
        },
        mounted: function() {
          console.log(this.images)
        },
      },
      a = (n("Y1+4"), n("KHd+")),
      r = n("RUJA"),
      s = n.n(r),
      o = Object(a.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component" },
            [
              t.images ? n("Avatar", { attrs: { icon: "", image: t.images[0] } }) : t._e(),
              t._v(" "),
              t.images ? n("Avatar", { attrs: { icon: "", image: t.images[1] } }) : t._e(),
              t._v(" "),
              t.number ? n("Avatar", { attrs: { icon: "", number: t.number } }) : t._e(),
            ],
            1
          )
        },
        [],
        !1,
        null,
        "38450061",
        null
      )
    "function" == typeof s.a && s()(o), (o.options.__file = "AvatarList.vue"), (e.default = o.exports)
  },
  CByH: function(t, e) {},
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
      a = (n("jstG"), n("KHd+")),
      r = n("ECTP"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "Paragraph.vue"), (e.default = o.exports)
  },
  HpXA: function(t, e) {},
  INW4: function(t, e, n) {
    "use strict"
    n.r(e)
    var i,
      a = n("lSNA"),
      r = n.n(a),
      s = {
        name: "PositionCard",
        status: "prototype",
        release: "1.0.0",
        props: ((i = { title: { type: Number, required: !0 }, type: { type: String, default: "Card" } }),
        r()(i, "title", { type: String, default: null }),
        r()(i, "description", { type: String, default: null }),
        r()(i, "requirements", { type: String, default: null }),
        r()(i, "time", { type: String, default: null }),
        r()(i, "url", { type: String, default: null }),
        r()(i, "compensation", { type: String, default: null }),
        i),
      },
      o = (n("0za5"), n("KHd+")),
      u = n("7dR3"),
      c = n.n(u),
      l = Object(o.a)(
        s,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", staticClass: "position-wrapper" },
            [
              n("div", { staticClass: "title" }, [t._v(t._s(t.title))]),
              t._v(" "),
              t.time
                ? n(
                    "div",
                    { staticClass: "time" },
                    [
                      n("Icon", { staticClass: "clock-icon", attrs: { name: "clock", size: "small" } }),
                      t._v(" "),
                      n("span", [t._v(t._s(t.time))]),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              t.compensation
                ? n(
                    "div",
                    { staticClass: "time" },
                    [
                      n("Icon", { staticClass: "clock-icon", attrs: { name: "handshake", size: "small" } }),
                      t._v(" "),
                      n("span", [t._v(t._s(t.compensation))]),
                    ],
                    1
                  )
                : t._e(),
              t._v(" "),
              n("div", { staticClass: "block" }, [
                n("div", { staticClass: "subtitle" }, [t._v(" Descripción de puesto ")]),
                t._v(" "),
                n("div", [t._v(t._s(t.description))]),
              ]),
              t._v(" "),
              n("div", { staticClass: "block" }, [
                n("div", { staticClass: "subtitle" }, [t._v("Requisitos")]),
                t._v(" "),
                n("div", [t._v(t._s(t.requirements))]),
              ]),
              t._v(" "),
              n("div", { staticClass: "block" }, [n("AvatarList")], 1),
              t._v(" "),
              n("Button", { staticClass: "position-button", attrs: { type: "a", href: t.url } }, [
                t._v("\n    Me interesa\n  "),
              ]),
            ],
            1
          )
        },
        [],
        !1,
        null,
        "1c85ad2a",
        null
      )
    "function" == typeof c.a && c()(l), (l.options.__file = "PositionCard.vue"), (e.default = l.exports)
  },
  IU6l: function(t, e, n) {
    "use strict"
    var i = n("FeAk")
    n.n(i).a
  },
  JtIp: function(t, e, n) {
    var i = {
      "./AvatarList.vue": "BazK",
      "./NavBar.vue": "nrZS",
      "./NewsSlider.vue": "mXHK",
      "./PositionCard.vue": "INW4",
      "./ProjectCard.vue": "ua5Q",
      "./SwipeSlider.vue": "XPp5",
    }
    function a(t) {
      var e = r(t)
      return n(e)
    }
    function r(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(i)
    }),
      (a.resolve = r),
      ((t.exports = a).id = "JtIp")
  },
  "KHd+": function(t, e, n) {
    "use strict"
    function i(t, e, n, i, a, r, s, o) {
      var u,
        c = "function" == typeof t ? t.options : t
      if (
        (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
        i && (c.functional = !0),
        r && (c._scopeId = "data-v-" + r),
        s
          ? ((u = function(t) {
              ;(t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                a && a.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(s)
            }),
            (c._ssrRegister = u))
          : a &&
            (u = o
              ? function() {
                  a.call(this, this.$root.$options.shadowRoot)
                }
              : a),
        u)
      )
        if (c.functional) {
          c._injectStyles = u
          var l = c.render
          c.render = function(t, e) {
            return u.call(e), l(t, e)
          }
        } else {
          var d = c.beforeCreate
          c.beforeCreate = d ? [].concat(d, u) : [u]
        }
      return { exports: t, options: c }
    }
    n.d(e, "a", function() {
      return i
    })
  },
  Kboc: function(t, e, n) {},
  KzwA: function(t, e, n) {},
  L7ye: function(t, e) {},
  MzIM: function(t, e, n) {},
  NlGY: function(t, e, n) {},
  Nqnq: function(t, e, n) {},
  Nv6G: function(t, e, n) {
    "use strict"
    var i = n("rWUG")
    n.n(i).a
  },
  ONH9: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = { name: "Tag", status: "prototype", release: "1.0.0", props: { type: { type: String, default: "span" } } },
      a = (n("n2Va"), n("KHd+")),
      r = n("L7ye"),
      s = n.n(r),
      o = Object(a.a)(
        i,
        function() {
          var t = this.$createElement
          return (this._self._c || t)(this.type, { tag: "component", staticClass: "tag" }, [this._t("default")], 2)
        },
        [],
        !1,
        null,
        "2d331717",
        null
      )
    "function" == typeof s.a && s()(o), (o.options.__file = "Tag.vue"), (e.default = o.exports)
  },
  P91N: function(t, e, n) {},
  QOEz: function(t, e, n) {
    "use strict"
    var i = n("Nqnq")
    n.n(i).a
  },
  RUJA: function(t, e) {},
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
      a = (n("QOEz"), n("KHd+")),
      r = n("7dOS"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "Input.vue"), (e.default = o.exports)
  },
  UvfI: function(t, e, n) {},
  VNqy: function(t, e, n) {
    "use strict"
    var i = n("gS7e")
    n.n(i).a
  },
  VOwi: function(t, e, n) {},
  VqCz: function(t, e) {},
  XPp5: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = n("lSNA"),
      a = n.n(i),
      r = {
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
              a()(t, this.vertical ? "height" : "width", "".concat(this.trackSize, "px")),
              a()(t, "transitionDuration", "".concat(this.swiping ? 0 : this.duration, "ms")),
              a()(t, "transform", "translate".concat(this.vertical ? "Y" : "X", "(").concat(this.offset, "px)")),
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
              a = this.count,
              r = this.swipes,
              s = this.trackSize,
              o = 0 === i,
              u = i === a - 1
            ;(!this.loop && ((o && (0 < e || t < 0)) || (u && (e < 0 || 0 < t)))) ||
              a <= 1 ||
              ((r[0].offset = u && (n < 0 || 0 < t) ? s : 0),
              (r[a - 1].offset = o && (0 < n || t < 0) ? -s : 0),
              t && -1 <= i + t && i + t <= a && (this.active += t),
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
      s = n("KHd+"),
      o = n("ZVyw"),
      u = n.n(o),
      c = Object(s.a)(
        r,
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
      "./Avatar.vue": "+BkN",
      "./Button.vue": "/kPn",
      "./Card.vue": "uJhq",
      "./Heading.vue": "oIR/",
      "./Icon.vue": "68yd",
      "./Input.vue": "UklV",
      "./Paragraph.vue": "FmFd",
      "./Tag.vue": "ONH9",
      "./TextStyle.vue": "r6ov",
      "./Textarea.vue": "lK0x",
      "./Wrapper.vue": "9t9y",
    }
    function a(t) {
      var e = r(t)
      return n(e)
    }
    function r(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(i)
    }),
      (a.resolve = r),
      ((t.exports = a).id = "Xl01")
  },
  "Y1+4": function(t, e, n) {
    "use strict"
    var i = n("s+jV")
    n.n(i).a
  },
  Z0DB: function(t, e, n) {
    "use strict"
    var i = n("eUC7")
    n.n(i).a
  },
  ZVyw: function(t, e) {},
  bT9U: function(t, e, n) {},
  bzL3: function(t, e, n) {
    var i = {
      "./clock.svg": "dVsf",
      "./deprecated.svg": "/thn",
      "./handshake.svg": "l2kJ",
      "./heart.svg": "fRY4",
      "./prototype.svg": "2dwG",
      "./ready.svg": "AAsE",
      "./review.svg": "eAtJ",
      "./share.svg": "vVuZ",
    }
    function a(t) {
      var e = r(t)
      return n(e)
    }
    function r(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(i)
    }),
      (a.resolve = r),
      ((t.exports = a).id = "bzL3")
  },
  c1KM: function(t, e, n) {
    var i = { "./Index.vue": "lF/O", "./NotFound.vue": "4K1/" }
    function a(t) {
      var e = r(t)
      return n(e)
    }
    function r(t) {
      var e = i[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(i)
    }),
      (a.resolve = r),
      ((t.exports = a).id = "c1KM")
  },
  c5QI: function(t, e, n) {
    "use strict"
    var i = n("KzwA")
    n.n(i).a
  },
  dVsf: function(t, e) {
    t.exports =
      '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1024 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>'
  },
  dtxr: function(t, e) {},
  eAtJ: function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>'
  },
  eETp: function(t, e, n) {},
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
  gS7e: function(t, e, n) {},
  gkHm: function(t, e) {},
  jstG: function(t, e, n) {
    "use strict"
    var i = n("0xPx")
    n.n(i).a
  },
  kWgB: function(t, e, n) {
    "use strict"
    var i = n("bT9U")
    n.n(i).a
  },
  l2kJ: function(t, e) {
    t.exports =
      '<svg aria-hidden="true" data-prefix="fas" data-icon="handshake" class="svg-inline--fa fa-handshake fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>'
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
      a = (n("0K1V"), n("KHd+")),
      r = n("9I8L"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "Index.vue"), (e.default = o.exports)
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
      a = (n("qQO5"), n("KHd+")),
      r = n("7DUr"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "Textarea.vue"), (e.default = o.exports)
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
          image: { type: String, required: !0 },
          title: { type: String, required: !0 },
          location: { type: String, required: !1, default: "" },
          category: { type: String, required: !0 },
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
      a = (n("sr/D"), n("oTwE"), n("KHd+")),
      r = n("dtxr"),
      s = n.n(r),
      o = Object(a.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.type, { tag: "component", staticClass: "card" }, [
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
        "3bbe9c7c",
        null
      )
    "function" == typeof s.a && s()(o), (o.options.__file = "NewsSlider.vue"), (e.default = o.exports)
  },
  n2Va: function(t, e, n) {
    "use strict"
    var i = n("eETp")
    n.n(i).a
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
      a = (n("kWgB"), n("KHd+")),
      r = n("Tof5"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "NavBar.vue"), (e.default = o.exports)
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
      a = (n("Z0DB"), n("KHd+")),
      r = n("woMB"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "Heading.vue"), (e.default = o.exports)
  },
  oTwE: function(t, e, n) {
    "use strict"
    var i = n("Kboc")
    n.n(i).a
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
      a = (n("nZfC"), n("KHd+")),
      r = n("7kMZ"),
      s = n.n(r),
      o = Object(a.a)(
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
    "function" == typeof s.a && s()(o), (o.options.__file = "TextStyle.vue"), (e.default = o.exports)
  },
  rWUG: function(t, e, n) {},
  "s+jV": function(t, e, n) {},
  "sr/D": function(t, e, n) {
    "use strict"
    var i = n("wpDG")
    n.n(i).a
  },
  tcIX: function(t, e) {},
  uJhq: function(t, e, n) {
    "use strict"
    n.r(e)
    var i = { name: "Card", status: "prototype", release: "1.0.0", props: { type: { type: String, default: "div" } } },
      a = (n("VNqy"), n("KHd+")),
      r = n("CByH"),
      s = n.n(r),
      o = Object(a.a)(
        i,
        function() {
          var t = this.$createElement
          return (this._self._c || t)(this.type, { tag: "component", staticClass: "card" }, [this._t("default")], 2)
        },
        [],
        !1,
        null,
        "b0d5991a",
        null
      )
    "function" == typeof s.a && s()(o), (o.options.__file = "Card.vue"), (e.default = o.exports)
  },
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
          authorImage: { type: String, required: !0 },
          authorTitle: { type: String, required: !0 },
          date: { type: String, required: !0 },
          contributorsImages: { type: Array, required: !1 },
          contributorsExtras: { type: Array, required: !1 },
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
      a = (n("yjBm"), n("Nv6G"), n("KHd+")),
      r = n("/WLx"),
      s = n.n(r),
      o = Object(a.a)(
        i,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(t.type, { tag: "component", staticClass: "card" }, [
            n(
              "div",
              { staticClass: "share" },
              [
                n("Icon", { attrs: { name: "share", size: "small", fill: "rgb(255,255,255)" } }),
                t.shares ? n("span", { staticClass: "no-of-shares" }, [t._v(t._s(t.shares))]) : t._e(),
              ],
              1
            ),
            t._v(" "),
            n(
              "div",
              { staticClass: "like" },
              [
                n("Icon", { attrs: { name: "heart", size: "small", fill: "rgb(255,255,255)" } }),
                t.likes ? n("span", { staticClass: "no-of-likes" }, [t._v(t._s(t.likes))]) : t._e(),
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
                  n("i", { staticClass: "fas fa-theater-masks" }),
                  t._v(t._s(t.category) + "\n          "),
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
                n("div", { staticClass: "extra" }, [
                  n(
                    "div",
                    { staticClass: "author-wrapper" },
                    [
                      n("Avatar", { attrs: { image: t.authorImage, icon: !0 } }),
                      t._v(" "),
                      n("div", { staticClass: "author-meta" }, [
                        n("div", { staticClass: "author-title" }, [
                          t._v("\n                  " + t._s(t.authorTitle) + "\n                "),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "author-date" }, [
                          t._v("\n                  " + t._s(t.date) + "\n                "),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "cetaceans" },
                    [n("AvatarList", { attrs: { images: t.contributorsImages, number: t.contributorsExtras } })],
                    1
                  ),
                ]),
              ]),
            ]),
          ])
        },
        [],
        !1,
        null,
        "434cc28d",
        null
      )
    "function" == typeof s.a && s()(o), (o.options.__file = "ProjectCard.vue"), (e.default = o.exports)
  },
  vVuZ: function(t, e) {
    t.exports =
      '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z"/></svg>'
  },
  woMB: function(t, e) {},
  wpDG: function(t, e, n) {},
  yjBm: function(t, e, n) {
    "use strict"
    var i = n("+UXe")
    n.n(i).a
  },
})
