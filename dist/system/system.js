module.exports = (function(t) {
  var e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    var a = (e[r] = { i: r, l: !1, exports: {} })
    return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
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
      var r = Object.create(null)
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var a in t)
          n.d(
            r,
            a,
            function(e) {
              return t[e]
            }.bind(null, a)
          )
      return r
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
    var r = {
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
      i = n("tcIX"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
    var r = n("VOwi")
    n.n(r).a
  },
  "0P7v": function(t, e, n) {},
  "0xPx": function(t, e, n) {},
  "1phr": function(t, e) {},
  "1ulK": function(t, e, n) {
    "use strict"
    var r = n("0P7v")
    n.n(r).a
  },
  "2dwG": function(t, e) {
    t.exports =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>'
  },
  "4K1/": function(t, e, n) {
    "use strict"
    n.r(e)
    var r = {
        name: "NotFound",
        metaInfo: { title: "Page Not Found | Vue Design System", htmlAttrs: { lang: "en" } },
        props: { type: { type: String, default: "div" } },
      },
      a = (n("IU6l"), n("KHd+")),
      i = n("gkHm"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
  "5m5j": function(t, e, n) {
    "use strict"
    n.r(e)
    var r = []
    ;[n("Xl01"), n("JtIp"), n("c1KM")].forEach(function(t) {
      t.keys().forEach(function(e) {
        return r.push(t(e).default)
      })
    })
    var a = {
      install: function(t) {
        r.forEach(function(e) {
          return t.component(e.name, e)
        })
      },
    }
    "undefined" != typeof window && window.Vue && window.Vue.use(a), (e.default = a)
  },
  "68yd": function(t, e, n) {
    "use strict"
    n.r(e)
    var r = n("bzL3"),
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
          return { svg: r("./" + this.name + ".svg").replace(/^<svg /, '<svg style="fill: '.concat(this.fill, '" ')) }
        },
      },
      i = (n("c5QI"), n("KHd+")),
      o = n("1phr"),
      s = n.n(o),
      u = Object(i.a)(
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
    "function" == typeof s.a && s()(u), (u.options.__file = "Icon.vue"), (e.default = u.exports)
  },
  "7DUr": function(t, e) {},
  "7dOS": function(t, e) {},
  "7kMZ": function(t, e) {},
  "8P4W": function(t, e, n) {},
  "9I8L": function(t, e) {},
  "9t9y": function(t, e, n) {
    "use strict"
    n.r(e)
    var r = { name: "Wrapper", status: "review", release: "1.0.0", props: { type: { type: String, default: "div" } } },
      a = (n("frqv"), n("KHd+")),
      i = n("HpXA"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
    var r = {
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
      i = n("ECTP"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
    var r = n("FeAk")
    n.n(r).a
  },
  JtIp: function(t, e, n) {
    var r = { "./NavBar.vue": "nrZS", "./NewsSlider.vue": "mXHK", "./ProjectCard.vue": "ua5Q" }
    function a(t) {
      var e = i(t)
      return n(e)
    }
    function i(t) {
      var e = r[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(r)
    }),
      (a.resolve = i),
      ((t.exports = a).id = "JtIp")
  },
  "KHd+": function(t, e, n) {
    "use strict"
    function r(t, e, n, r, a, i, o, s) {
      var u,
        l = "function" == typeof t ? t.options : t
      if (
        (e && ((l.render = e), (l.staticRenderFns = n), (l._compiled = !0)),
        r && (l.functional = !0),
        i && (l._scopeId = "data-v-" + i),
        o
          ? ((u = function(t) {
              ;(t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
                a && a.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(o)
            }),
            (l._ssrRegister = u))
          : a &&
            (u = s
              ? function() {
                  a.call(this, this.$root.$options.shadowRoot)
                }
              : a),
        u)
      )
        if (l.functional) {
          l._injectStyles = u
          var c = l.render
          l.render = function(t, e) {
            return u.call(e), c(t, e)
          }
        } else {
          var d = l.beforeCreate
          l.beforeCreate = d ? [].concat(d, u) : [u]
        }
      return { exports: t, options: l }
    }
    n.d(e, "a", function() {
      return r
    })
  },
  KLN6: function(t, e, n) {},
  KUZg: function(t, e, n) {
    "use strict"
    var r = n("8P4W")
    n.n(r).a
  },
  KzwA: function(t, e, n) {},
  LAKi: function(t, e, n) {
    "use strict"
    var r = n("a2EW")
    n.n(r).a
  },
  MzIM: function(t, e, n) {},
  Nqnq: function(t, e, n) {},
  P91N: function(t, e, n) {},
  QOEz: function(t, e, n) {
    "use strict"
    var r = n("Nqnq")
    n.n(r).a
  },
  Tof5: function(t, e) {},
  UklV: function(t, e, n) {
    "use strict"
    n.r(e)
    var r = {
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
      i = n("7dOS"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
  Xl01: function(t, e, n) {
    var r = {
      "./Button.vue": "/kPn",
      "./Heading.vue": "oIR/",
      "./Icon.vue": "68yd",
      "./Input.vue": "UklV",
      "./Paragraph.vue": "FmFd",
      "./TextStyle.vue": "r6ov",
      "./Textarea.vue": "lK0x",
      "./Wrapper.vue": "9t9y",
    }
    function a(t) {
      var e = i(t)
      return n(e)
    }
    function i(t) {
      var e = r[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(r)
    }),
      (a.resolve = i),
      ((t.exports = a).id = "Xl01")
  },
  Z0DB: function(t, e, n) {
    "use strict"
    var r = n("eUC7")
    n.n(r).a
  },
  a2EW: function(t, e, n) {},
  avEL: function(t, e, n) {
    "use strict"
    var r = n("KLN6")
    n.n(r).a
  },
  bT9U: function(t, e, n) {},
  bzL3: function(t, e, n) {
    var r = {
      "./deprecated.svg": "/thn",
      "./heart.svg": "fRY4",
      "./prototype.svg": "2dwG",
      "./ready.svg": "AAsE",
      "./review.svg": "eAtJ",
      "./share.svg": "vVuZ",
    }
    function a(t) {
      var e = i(t)
      return n(e)
    }
    function i(t) {
      var e = r[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(r)
    }),
      (a.resolve = i),
      ((t.exports = a).id = "bzL3")
  },
  c1KM: function(t, e, n) {
    var r = { "./Index.vue": "lF/O", "./NotFound.vue": "4K1/" }
    function a(t) {
      var e = i(t)
      return n(e)
    }
    function i(t) {
      var e = r[t]
      if (e + 1) return e
      var n = new Error("Cannot find module '" + t + "'")
      throw ((n.code = "MODULE_NOT_FOUND"), n)
    }
    ;(a.keys = function() {
      return Object.keys(r)
    }),
      (a.resolve = i),
      ((t.exports = a).id = "c1KM")
  },
  c5QI: function(t, e, n) {
    "use strict"
    var r = n("KzwA")
    n.n(r).a
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
    var r = n("UvfI")
    n.n(r).a
  },
  gkHm: function(t, e) {},
  jstG: function(t, e, n) {
    "use strict"
    var r = n("0xPx")
    n.n(r).a
  },
  kWgB: function(t, e, n) {
    "use strict"
    var r = n("bT9U")
    n.n(r).a
  },
  "lF/O": function(t, e, n) {
    "use strict"
    n.r(e)
    var r = {
        name: "Index",
        status: "deprecated",
        release: "1.0.0",
        metaInfo: { title: "Vue Design System", htmlAttrs: { lang: "en" } },
        props: { type: { type: String, default: "div" } },
      },
      a = (n("0K1V"), n("KHd+")),
      i = n("9I8L"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
    var r = {
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
      i = n("7DUr"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
  mXHK: function(t, e, n) {
    "use strict"
    n.r(e)
    var r = {
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
      a = (n("1ulK"), n("LAKi"), n("KHd+")),
      i = n("dtxr"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
    var r = n("oXgq")
    n.n(r).a
  },
  nrZS: function(t, e, n) {
    "use strict"
    n.r(e)
    var r = {
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
      i = n("Tof5"),
      o = n.n(i),
      s = Object(a.a)(
        r,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", staticClass: "nav" },
            t._l(t.navItems, function(e, r) {
              return n("a", {
                key: r,
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
    var r = {
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
      i = n("woMB"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
    var r = n("MzIM")
    n.n(r).a
  },
  qQO5: function(t, e, n) {
    "use strict"
    var r = n("P91N")
    n.n(r).a
  },
  r6ov: function(t, e, n) {
    "use strict"
    n.r(e)
    var r = {
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
      i = n("7kMZ"),
      o = n.n(i),
      s = Object(a.a)(
        r,
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
    var r = {
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
      a = (n("KUZg"), n("avEL"), n("KHd+")),
      i = n("/WLx"),
      o = n.n(i),
      s = Object(a.a)(
        r,
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            t.type,
            { tag: "component", staticClass: "card", on: { mouseover: t.mouseOver } },
            [
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
              n("nuxt-link", { attrs: { to: t.route } }, [
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
                    n("div", { staticClass: "extra" }, [
                      n("div", { staticClass: "cetaceans" }, [n("AppAvatarList")], 1),
                    ]),
                  ]),
                ]),
              ]),
            ],
            1
          )
        },
        [],
        !1,
        null,
        "60942784",
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
